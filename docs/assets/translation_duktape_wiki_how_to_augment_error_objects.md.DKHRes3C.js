import{_ as s,c as i,o as a,a3 as t}from"./chunks/framework.DflgEAq4.js";const c=JSON.parse('{"title":"エラーオブジェクトの補強方法","description":"","frontmatter":{},"headers":[],"relativePath":"translation/duktape/wiki/how_to_augment_error_objects.md","filePath":"translation/duktape/wiki/how_to_augment_error_objects.md","lastUpdated":null}'),e={name:"translation/duktape/wiki/how_to_augment_error_objects.md"},n=t(`<h1 id="エラーオブジェクトの補強方法" tabindex="-1">エラーオブジェクトの補強方法 <a class="header-anchor" href="#エラーオブジェクトの補強方法" aria-label="Permalink to &quot;エラーオブジェクトの補強方法&quot;">​</a></h1><h2 id="エラーオブジェクトのプロパティ" tabindex="-1">エラーオブジェクトのプロパティ <a class="header-anchor" href="#エラーオブジェクトのプロパティ" aria-label="Permalink to &quot;エラーオブジェクトのプロパティ&quot;">​</a></h2><p>エラーオブジェクトは「独自の」プロパティとError.prototypeから継承したプロパティの両方を持ちます。いくつかのプロパティは通常のデータプロパティであり、他のプロパティは仮想的なものです。参照:</p><ul><li><a href="http://duktape.org/guide.html#errorobjects" target="_blank" rel="noreferrer">http://duktape.org/guide.html#errorobjects</a></li></ul><h2 id="filename、-linenumber、および-stackを上書きする。" tabindex="-1">.fileName、.lineNumber、および.stackを上書きする。 <a class="header-anchor" href="#filename、-linenumber、および-stackを上書きする。" aria-label="Permalink to &quot;.fileName、.lineNumber、および.stackを上書きする。&quot;">​</a></h2><h3 id="duktape-1-4-0-以降" tabindex="-1">Duktape 1.4.0 以降 <a class="header-anchor" href="#duktape-1-4-0-以降" aria-label="Permalink to &quot;Duktape 1.4.0 以降&quot;">​</a></h3><p>これらのプロパティは、Error.prototypeから継承したアクセサ（ゲッター／セッター）で提供されます。ゲッターは、エラーが作成されたときにエラーに追加された内部の_Tracedataプロパティに基づいて、要求された結果（例：fileName）を提供します。</p><p>Duktape 1.4.0以降では、単純なプロパティ書き込みで、.fileName, .lineNumber, .stackをオーバーライドすることが可能です。</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">var</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> err </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Error</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;aiee&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">err.fileName </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;dummy.js&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">print</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(err.fileName);  </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// -&gt; dummy.js</span></span></code></pre></div><p>C言語で同等に。</p><div class="language-c vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">duk_push_error_object</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(ctx, DUK_ERR_RANGE_ERROR, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;invalid arg: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">%d</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, myarg);</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">duk_push_string</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(ctx, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;dummy.c&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">duk_put_prop_string</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(ctx, </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;fileName&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span></code></pre></div><h3 id="duktape-1-4-0以前" tabindex="-1">Duktape 1.4.0以前 <a class="header-anchor" href="#duktape-1-4-0以前" aria-label="Permalink to &quot;Duktape 1.4.0以前&quot;">​</a></h3><p>Duktape 1.4.0以前では、単純なプロパティ書き込みがうまくいきません。なぜなら、継承されたプロパティはアクセッサであり、書き込みの試みを「捕捉」して無視するからです。</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// Duktape 1.3.0</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">var</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> err </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Error</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;aiee&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">err.fileName </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;dummy.js&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">print</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(err.fileName);  </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// not changed</span></span></code></pre></div><p>これらのプロパティは、Object.defineProperty()を使用してオーバーライドすることができます。これは、継承されたアクセッサが設定可能であるため、オーバーライドする「自身の」プロパティをエラーに追加することができるためです。</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">var</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> err </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Error</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;aiee&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Object.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">defineProperty</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(err, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;fileName&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    value: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;dummy.js&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    writable: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    enumerable: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    configurable: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">});</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">print</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(err.fileName);  </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// dummy.js</span></span></code></pre></div><p>Cコードでは、duk_def_prop()を同様に使用することができます。</p><div class="language-c vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">duk_push_string</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(ctx, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;fileName&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">duk_push_string</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(ctx, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;dummy.js&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">duk_def_prop</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(ctx, idx_err, DUK_DEFPROP_HAVE_VALUE </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">|</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                           DUK_DEFPROP_HAVE_WRITABLE </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">|</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> DUK_DEFPROP_WRITABLE </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">|</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                           DUK_DEFPROP_HAVE_ENUMERABLE </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">|</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> /*not enumerable */</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                           DUK_DEFPROP_HAVE_CONFIGURABLE </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">|</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> DUK_DEFPROP_CONFIGURABLE);</span></span></code></pre></div><h3 id="duktape-1-4-0の動作を保証します。" tabindex="-1">Duktape 1.4.0の動作を保証します。 <a class="header-anchor" href="#duktape-1-4-0の動作を保証します。" aria-label="Permalink to &quot;Duktape 1.4.0の動作を保証します。&quot;">​</a></h3><p>Duktape 1.4.0の挙動を旧バージョンに提供するためのポリフィルが存在します。</p><ul><li><a href="https://github.com/svaarala/duktape/blob/master/polyfills/duktape-error-setter-writable.js" target="_blank" rel="noreferrer">https://github.com/svaarala/duktape/blob/master/polyfills/duktape-error-setter-writable.js</a></li></ul>`,21),h=[n];function l(p,k,r,E,d,o){return a(),i("div",null,h)}const y=s(e,[["render",l]]);export{c as __pageData,y as default};

import{_ as s,c as i,o as a,a3 as t}from"./chunks/framework.DflgEAq4.js";const g=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"translation/duktape/api/duk_push_string.md","filePath":"translation/duktape/api/duk_push_string.md","lastUpdated":null}'),h={name:"translation/duktape/api/duk_push_string.md"},n=t(`<h2 id="duk-push-string" tabindex="-1">duk_push_string() <a class="header-anchor" href="#duk-push-string" aria-label="Permalink to &quot;duk_push_string()&quot;">​</a></h2><p>1.0.0 string stack</p><h3 id="プロトタイプ" tabindex="-1">プロトタイプ <a class="header-anchor" href="#プロトタイプ" aria-label="Permalink to &quot;プロトタイプ&quot;">​</a></h3><div class="language-c vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> char</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> *</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">duk_push_string</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(duk_context </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">*</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">ctx</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> char</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> *</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">str</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span></code></pre></div><h3 id="スタック" tabindex="-1">スタック <a class="header-anchor" href="#スタック" aria-label="Permalink to &quot;スタック&quot;">​</a></h3><p>| ... | -&gt; | ... | str | (if str != NULL) | ... | -&gt; | ... | null | (if str == NULL)</p><h3 id="要約" tabindex="-1">要約 <a class="header-anchor" href="#要約" aria-label="Permalink to &quot;要約&quot;">​</a></h3><p>C 言語の文字列をスタックに格納します。文字列の長さは、strlen()に相当するもので自動的に検出される（つまり、最初の NUL 文字を探す）。インターナルされた文字列データへのポインタが返されます。操作に失敗した場合は、エラーを投げます。。</p><p>strがNULLの場合、ECMAScriptのNULLがスタックにプッシュされ、NULLが返されます。この動作は、意図的にduk_push_lstringと異なっています。</p><p>Cコードは通常、有効なCESU-8文字列のみをスタックにプッシュすべきです。無効な CESU-8/UTF-8 バイト列の中には、Symbol 値を表すような特別な用途のために予約されているものがあります。このような無効なバイト列をプッシュすると、バリュースタック上の値は C コードでは文字列のように振る舞いますが、ECMAScript コードでは Symbol として表示されます。詳しくは、シンボルを参照してください。 入力文字列が内部 NUL 文字を含む可能性がある場合、代わりに duk_push_lstring() を使用します。</p><h3 id="例" tabindex="-1">例 <a class="header-anchor" href="#例" aria-label="Permalink to &quot;例&quot;">​</a></h3><div class="language-c vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">duk_push_string</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(ctx, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;foo&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">duk_push_string</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(ctx, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;foo</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\0</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">bar&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  /* push &quot;foo&quot;, not &quot;foo\\0bar&quot; */</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">duk_push_string</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(ctx, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">          /* push empty string */</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">duk_push_string</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(ctx, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">NULL</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        /* push &#39;null&#39; */</span></span></code></pre></div>`,12),p=[n];function l(e,k,r,d,o,u){return a(),i("div",null,p)}const E=s(h,[["render",l]]);export{g as __pageData,E as default};

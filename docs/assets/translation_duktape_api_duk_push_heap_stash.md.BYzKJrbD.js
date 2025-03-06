import{_ as a,c as s,o as t,a3 as e}from"./chunks/framework.DflgEAq4.js";const k=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"translation/duktape/api/duk_push_heap_stash.md","filePath":"translation/duktape/api/duk_push_heap_stash.md","lastUpdated":null}'),h={name:"translation/duktape/api/duk_push_heap_stash.md"},i=e('<h2 id="duk-push-heap-stash" tabindex="-1">duk_push_heap_stash() <a class="header-anchor" href="#duk-push-heap-stash" aria-label="Permalink to &quot;duk_push_heap_stash()&quot;">​</a></h2><p>1.0.0 stash stack sandbox object module</p><h3 id="プロトタイプ" tabindex="-1">プロトタイプ <a class="header-anchor" href="#プロトタイプ" aria-label="Permalink to &quot;プロトタイプ&quot;">​</a></h3><div class="language-c vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">void</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> duk_push_heap_stash</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(duk_context </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">*</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">ctx</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span></code></pre></div><h3 id="スタック" tabindex="-1">スタック <a class="header-anchor" href="#スタック" aria-label="Permalink to &quot;スタック&quot;">​</a></h3><p>| ... | -&gt; | ... | stash |</p><h3 id="要約" tabindex="-1">要約 <a class="header-anchor" href="#要約" aria-label="Permalink to &quot;要約&quot;">​</a></h3><p>ヒープスタッシュオブジェクトをスタックにプッシュします。ヒープ・スタッシュは内部オブジェクトで、Cコードからキー/値のペアを保存してガベージコレクションに到達できるようにするために使用できますが、ECMAScriptコードからアクセスすることはできません。スタッシュはCコードからのみアクセス可能で、同じDuktapeヒープを共有する全てのコードで同じスタッシュオブジェクトが使用されます（同じグローバルオブジェクトを共有しない場合でも）。</p><h3 id="例" tabindex="-1">例 <a class="header-anchor" href="#例" aria-label="Permalink to &quot;例&quot;">​</a></h3><div class="language-c vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">duk_push_heap_stash</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(ctx);</span></span></code></pre></div><h3 id="参照" tabindex="-1">参照 <a class="header-anchor" href="#参照" aria-label="Permalink to &quot;参照&quot;">​</a></h3><p>duk_push_global_stash duk_push_thread_stash</p>',12),p=[i];function n(d,l,o,r,c,u){return t(),s("div",null,p)}const b=a(h,[["render",n]]);export{k as __pageData,b as default};

import{_ as a,c as s,o as i,a3 as e}from"./chunks/framework.DflgEAq4.js";const u=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"translation/duktape/api/duk_free_raw.md","filePath":"translation/duktape/api/duk_free_raw.md","lastUpdated":null}'),t={name:"translation/duktape/api/duk_free_raw.md"},n=e(`<h2 id="duk-free-raw" tabindex="-1">duk_free_raw() <a class="header-anchor" href="#duk-free-raw" aria-label="Permalink to &quot;duk_free_raw()&quot;">​</a></h2><p>1.0.0 memory</p><h3 id="プロトタイプ" tabindex="-1">プロトタイプ <a class="header-anchor" href="#プロトタイプ" aria-label="Permalink to &quot;プロトタイプ&quot;">​</a></h3><div class="language-c vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">void</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> duk_free_raw</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(duk_context </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">*</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">ctx</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">void</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> *</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">ptr</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span></code></pre></div><h3 id="スタック" tabindex="-1">スタック <a class="header-anchor" href="#スタック" aria-label="Permalink to &quot;スタック&quot;">​</a></h3><p>(バリュースタックに影響なし)</p><h3 id="要約" tabindex="-1">要約 <a class="header-anchor" href="#要約" aria-label="Permalink to &quot;要約&quot;">​</a></h3><p>コンテキストに登録されたアロケーション機能で割り当てられたメモリを解放します。この操作は失敗しない．ptr が NULL の場合，この呼び出しは失敗です．</p><p>duk_free_raw() は、 duk_alloc() や duk_alloc_raw() およびそれらの再割り当て関数で割り当てられたメモリを解放するために使用できます。</p><h3 id="例" tabindex="-1">例 <a class="header-anchor" href="#例" aria-label="Permalink to &quot;例&quot;">​</a></h3><div class="language-c vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">void</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> *</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">buf </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> duk_alloc_raw</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(ctx, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1024</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/* ... */</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">duk_free_raw</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(ctx, buf);</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  /* safe even if &#39;buf&#39; is NULL */</span></span></code></pre></div><h3 id="参照" tabindex="-1">参照 <a class="header-anchor" href="#参照" aria-label="Permalink to &quot;参照&quot;">​</a></h3><p>duk_free</p>`,13),h=[n];function l(r,p,k,d,o,c){return i(),s("div",null,h)}const g=a(t,[["render",l]]);export{u as __pageData,g as default};

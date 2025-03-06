import{_ as a,c as s,o as i,a3 as t}from"./chunks/framework.DflgEAq4.js";const E=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"translation/duktape/api/duk_syntax_error_va.md","filePath":"translation/duktape/api/duk_syntax_error_va.md","lastUpdated":null}'),n={name:"translation/duktape/api/duk_syntax_error_va.md"},e=t(`<h2 id="duk-syntax-error-va" tabindex="-1">duk_syntax_error_va() <a class="header-anchor" href="#duk-syntax-error-va" aria-label="Permalink to &quot;duk_syntax_error_va()&quot;">​</a></h2><p>2.0.0 vararg error</p><h3 id="プロトタイプ" tabindex="-1">プロトタイプ <a class="header-anchor" href="#プロトタイプ" aria-label="Permalink to &quot;プロトタイプ&quot;">​</a></h3><div class="language-c vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">duk_ret_t</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> duk_syntax_error_va</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(duk_context </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">*</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">ctx</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> char</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> *</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">fmt</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, va_list </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">ap</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span></code></pre></div><h3 id="スタック" tabindex="-1">スタック <a class="header-anchor" href="#スタック" aria-label="Permalink to &quot;スタック&quot;">​</a></h3><p>| ... | -&gt; | ... | err |</p><h3 id="要約" tabindex="-1">要約 <a class="header-anchor" href="#要約" aria-label="Permalink to &quot;要約&quot;">​</a></h3><p>エラーコード DUK_ERR_SYNTAX_ERROR を持つ duk_error_va() と同等の便宜的な API 呼び出し。</p><p>このAPIコールは完全には移植性がない。なぜなら、呼び出し側のコードの va_end() マクロは(例えばエラースローにより)決して到達できないかもしれないからです。いくつかの実装は、例えば va_start() によって割り当てられたメモリを解放するために va_end() に依存します; <a href="https://stackoverflow.com/questions/11645282/do-i-need-to-va-end-when-an-exception-is-thrown" target="_blank" rel="noreferrer">https://stackoverflow.com/questions/11645282/do-i-need-to-va-end-when-an-exception-is-thrown</a> を参照してください。しかし、そのような実装はまれであり、これは通常実用的な懸念ではありません。</p><h3 id="例" tabindex="-1">例 <a class="header-anchor" href="#例" aria-label="Permalink to &quot;例&quot;">​</a></h3><div class="language-c vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">void</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> my_syntax_error</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(duk_context </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">*</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">ctx</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> char</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> *</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">fmt</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, ...) {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    va_list ap;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    va_start</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(ap, fmt);</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    duk_syntax_error_va</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(ctx, fmt, ap);</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    va_end</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(ap);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h3 id="参照" tabindex="-1">参照 <a class="header-anchor" href="#参照" aria-label="Permalink to &quot;参照&quot;">​</a></h3><p>duk_error_va</p>`,13),h=[e];function r(l,p,k,d,o,c){return i(),s("div",null,h)}const g=a(n,[["render",r]]);export{E as __pageData,g as default};

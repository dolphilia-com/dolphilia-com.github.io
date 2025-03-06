import{_ as s,c as i,o as a,a3 as n}from"./chunks/framework.DflgEAq4.js";const y=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"translation/duktape/api/duk_pcall.md","filePath":"translation/duktape/api/duk_pcall.md","lastUpdated":null}'),h={name:"translation/duktape/api/duk_pcall.md"},k=n(`<h2 id="duk-pcall" tabindex="-1">duk_pcall() <a class="header-anchor" href="#duk-pcall" aria-label="Permalink to &quot;duk_pcall()&quot;">​</a></h2><p>1.0.0 protected call</p><h3 id="プロトタイプ" tabindex="-1">プロトタイプ <a class="header-anchor" href="#プロトタイプ" aria-label="Permalink to &quot;プロトタイプ&quot;">​</a></h3><div class="language-c vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">duk_int_t</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> duk_pcall</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(duk_context </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">*</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">ctx</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">duk_idx_t</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;"> nargs</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span></code></pre></div><h3 id="スタック" tabindex="-1">スタック <a class="header-anchor" href="#スタック" aria-label="Permalink to &quot;スタック&quot;">​</a></h3><p>| ... | func | arg1 | ... | argN | -&gt; | ... | retval | (if success, return value == 0) | ... | func | arg1 | ... | argN | -&gt; | ... | err | (if failure, return value != 0)</p><h3 id="要約" tabindex="-1">要約 <a class="header-anchor" href="#要約" aria-label="Permalink to &quot;要約&quot;">​</a></h3><p>ターゲット関数funcをnargsの引数で呼び出す（関数自体を除く）。関数とその引数は、単一の戻り値または単一のエラー値で置き換えられます。関数呼び出し中に投げられたエラーはキャッチされます。</p><p>戻り値はduk_exec_success (0)です。呼び出しが成功した場合、nargs 引数は単一の戻り値で置き換えられます。(この戻り値コード定数はゼロであることが保証されているので、「ゼロかゼロでないか」のチェックで成功を確認することができる)。 DUK_EXEC_ERROR: 呼び出しに失敗、nargs 引数は単一のエラー値で置き換えられます。(例外的に、例えばバリュースタック上の引数が少なすぎる場合、呼び出しは投げます。かもしれない)。 ほとんどのDuktape APIコールとは異なり、このコールは成功時にゼロを返します。これにより、複数のエラー・コードを後で定義することができます。 捕捉されたエラー・オブジェクトは通常Errorのインスタンスで、.stack、.fileName、.lineNumberなどの有用なプロパティを持ちます。これらは通常のプロパティメソッドでアクセスすることができます。しかし、任意の値が投げられる可能性があるので、常にそうであると仮定することは避けるべきです。</p><p>このバインディングの対象関数は、初期状態では未定義に設定されています。ターゲット関数が厳密でない場合、関数が呼び出される前にバインディングはグローバルオブジェクトに置き換えられます。関数コードの入力を参照してください。このバインディングを制御したい場合は、代わりに duk_pcall_method() または duk_pcall_prop() を使用することができます。</p><h3 id="例" tabindex="-1">例 <a class="header-anchor" href="#例" aria-label="Permalink to &quot;例&quot;">​</a></h3><div class="language-c vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/* Assume target function is already on stack at func_idx; the target</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> * function adds arguments and returns the result.</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> */</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">duk_idx_t</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> func_idx;</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">duk_int_t</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> rc;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/* Basic example: function call and duk_safe_to_string() error print. */</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">duk_dup</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(ctx, func_idx);</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">duk_push_int</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(ctx, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">duk_push_int</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(ctx, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">3</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">rc </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> duk_pcall</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(ctx, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  /* [ ... func 2 3 ] -&gt; [ 5 ] */</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (rc </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">==</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> DUK_EXEC_SUCCESS) {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    printf</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;2+3=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">%ld\\n</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, (</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">long</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">duk_get_int</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(ctx, </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">));</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">} </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">else</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    /* Coercing with duk_safe_to_string() is a useful default, but you can</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">     * also look up e.g. the .stack property of the error.</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">     */</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    printf</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;error: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">%s\\n</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">duk_safe_to_string</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(ctx, </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">));</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">duk_pop</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(ctx);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/* Accessing .stack to print a stack trace if the value caught is an</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> * Error instance.</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> */</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">duk_dup</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(ctx, func_idx);</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">duk_push_int</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(ctx, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">duk_push_int</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(ctx, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">3</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">rc </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> duk_pcall</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(ctx, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  /* [ ... func 2 3 ] -&gt; [ 5 ] */</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (rc </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">==</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> DUK_EXEC_SUCCESS) {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    printf</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;2+3=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">%ld\\n</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, (</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">long</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">duk_get_int</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(ctx, </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">));</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">} </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">else</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">duk_is_error</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(ctx, </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)) {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        /* Accessing .stack might cause an error to be thrown, so wrap this</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">         * access in a duk_safe_call() if it matters.</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">         */</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        duk_get_prop_string</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(ctx, </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;stack&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        printf</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;error: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">%s\\n</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">duk_safe_to_string</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(ctx, </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">));</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        duk_pop</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(ctx);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">else</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        /* Non-Error value, coerce safely to string. */</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        printf</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;error: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">%s\\n</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">duk_safe_to_string</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(ctx, </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">));</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">duk_pop</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(ctx);</span></span></code></pre></div><h3 id="参照" tabindex="-1">参照 <a class="header-anchor" href="#参照" aria-label="Permalink to &quot;参照&quot;">​</a></h3><p>duk_pcall_method duk_pcall_prop</p>`,14),t=[k];function l(p,e,r,E,d,g){return a(),i("div",null,t)}const F=s(h,[["render",l]]);export{y as __pageData,F as default};

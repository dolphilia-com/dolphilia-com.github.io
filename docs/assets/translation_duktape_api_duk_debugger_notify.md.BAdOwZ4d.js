import{_ as s,c as i,o as a,a3 as t}from"./chunks/framework.DflgEAq4.js";const y=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"translation/duktape/api/duk_debugger_notify.md","filePath":"translation/duktape/api/duk_debugger_notify.md","lastUpdated":null}'),n={name:"translation/duktape/api/duk_debugger_notify.md"},h=t(`<h2 id="duk-debugger-notify" tabindex="-1">duk_debugger_notify() <a class="header-anchor" href="#duk-debugger-notify" aria-label="Permalink to &quot;duk_debugger_notify()&quot;">​</a></h2><p>1.5.0 debugger</p><h3 id="プロトタイプ" tabindex="-1">プロトタイプ <a class="header-anchor" href="#プロトタイプ" aria-label="Permalink to &quot;プロトタイプ&quot;">​</a></h3><div class="language-c vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">duk_bool_t</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> duk_debugger_notify</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(duk_context </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">*</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">ctx</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">duk_idx_t</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;"> nvalues</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span></code></pre></div><h3 id="スタック" tabindex="-1">スタック <a class="header-anchor" href="#スタック" aria-label="Permalink to &quot;スタック&quot;">​</a></h3><p>| ... | val1 | ... | valN | -&gt; | ... |</p><h3 id="要約" tabindex="-1">要約 <a class="header-anchor" href="#要約" aria-label="Permalink to &quot;要約&quot;">​</a></h3><p>デバッグプロトコルのdvaluesにマッピングされたバリュースタックトップのnvalues値を含むアプリケーション固有のデバッガ通知（AppNotify）を送信します。戻り値は、notifyが正常に送信されたか(0以外)、送信されなかったか(0)を示します。引数nvaluesは常にスタックトップからポップオフされます。デバッガサポートがコンパイルされていない場合、またはデバッガが接続されていない場合、このコールはno-opである; いずれの場合も、コールはnotifyが送信されなかったことを示す0を返す。</p><p>アプリケーション固有の通知の使用方法に関する詳細や例については、デバッガのドキュメントを参照してください。</p><h3 id="例" tabindex="-1">例 <a class="header-anchor" href="#例" aria-label="Permalink to &quot;例&quot;">​</a></h3><div class="language-c vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/* Causes the following notify to be sent over the debugger protocol:</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> *</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> *   NFY AppNotify &quot;BatteryStatus&quot; 740 1000 true EOM</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> */</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">int</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> battery_current </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 740</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">int</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> battery_limit </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1000</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">int</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> battery_charging </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">duk_push_string</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(ctx, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;BatteryStatus&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">duk_push_int</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(ctx, battery_current);</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">duk_push_int</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(ctx, battery_limit);</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">duk_push_boolean</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(ctx, battery_charging);</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">duk_debugger_notify</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(ctx, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">4</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> /*nvalues*/</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)) {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    printf</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;battery status notification sent</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\n</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">} </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">else</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    printf</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;battery status notification not sent</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\n</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div>`,11),e=[h];function l(k,p,r,d,E,g){return a(),i("div",null,e)}const u=s(n,[["render",l]]);export{y as __pageData,u as default};

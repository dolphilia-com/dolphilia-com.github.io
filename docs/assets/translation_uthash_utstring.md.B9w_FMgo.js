import{_ as s,c as i,o as a,a3 as t}from"./chunks/framework.DflgEAq4.js";const y=JSON.parse('{"title":"utstring: C言語用動的文字列マクロ","description":"","frontmatter":{},"headers":[],"relativePath":"translation/uthash/utstring.md","filePath":"translation/uthash/utstring.md","lastUpdated":null}'),n={name:"translation/uthash/utstring.md"},h=t(`<h1 id="utstring-c言語用動的文字列マクロ" tabindex="-1">utstring: C言語用動的文字列マクロ <a class="header-anchor" href="#utstring-c言語用動的文字列マクロ" aria-label="Permalink to &quot;utstring: C言語用動的文字列マクロ&quot;">​</a></h1><ul><li>Troy D. Hanson <a href="mailto:tdh@tkhanson.net" target="_blank" rel="noreferrer">tdh@tkhanson.net</a></li><li>v2.3.0, February 2021</li></ul><p><a href="https://github.com/troydhanson/uthash" target="_blank" rel="noreferrer">GitHubプロジェクトページ</a>へのリンクです。</p><h2 id="はじめに" tabindex="-1">はじめに <a class="header-anchor" href="#はじめに" aria-label="Permalink to &quot;はじめに&quot;">​</a></h2><p>Cプログラムのための基本的な動的文字列マクロのセットは、uthashとともに <code>utstring.h</code> に含まれています。これらを自分のCプログラムで使うには、<code>utstring.h</code>をソースディレクトリにコピーして、自分のプログラムで使うだけでよい。</p><div class="language-c vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">#include</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;utstring.h&quot;</span></span></code></pre></div><p>動的文字列は、データの挿入、連結、長さと内容の取得、部分文字列検索、クリアなどの操作をサポートしている。バイナリデータをutstringに入れることもできる。文字列の <code>operations,operations</code> を以下に示す。</p><p>一部のutstring操作は、マクロではなく関数として実装されている。</p><h3 id="ダウンロード" tabindex="-1">ダウンロード <a class="header-anchor" href="#ダウンロード" aria-label="Permalink to &quot;ダウンロード&quot;">​</a></h3><p><code>utstring.h</code>ヘッダーファイルをダウンロードするには、<a href="https://github.com/troydhanson/uthash" target="_blank" rel="noreferrer">https://github.com/troydhanson/uthash</a> のリンクに従ってuthashをクローンするか、zipファイルを入手し、src/サブディレクトリを探す。</p><h3 id="bsdライセンス" tabindex="-1">BSDライセンス <a class="header-anchor" href="#bsdライセンス" aria-label="Permalink to &quot;BSDライセンス&quot;">​</a></h3><p>このソフトウェアは、link:license.html(改訂BSDライセンス)の下で利用可能です。フリーでオープンソースです。</p><h3 id="プラットフォーム" tabindex="-1">プラットフォーム <a class="header-anchor" href="#プラットフォーム" aria-label="Permalink to &quot;プラットフォーム&quot;">​</a></h3><p><code>utstring</code>マクロは以下のプラットフォームでテストされています：</p><ul><li>Linux,</li><li>Windows, using Visual Studio 2008 and Visual Studio 2010</li></ul><h2 id="usage" tabindex="-1">Usage <a class="header-anchor" href="#usage" aria-label="Permalink to &quot;Usage&quot;">​</a></h2><h3 id="declaration" tabindex="-1">Declaration <a class="header-anchor" href="#declaration" aria-label="Permalink to &quot;Declaration&quot;">​</a></h3><p>動的文字列自体は <code>UT_string</code> というデータ型を持っている。次のように宣言される。</p><div class="language-C vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">C</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">UT_string </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">*</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">str;</span></span></code></pre></div><h3 id="new-and-free" tabindex="-1">New and free <a class="header-anchor" href="#new-and-free" aria-label="Permalink to &quot;New and free&quot;">​</a></h3><p>次に <code>utstring_new</code> を使って文字列を作成する。文字列の作成が終わったら、<code>utstring_free</code> を使って文字列を解放する。</p><h3 id="マニピュレーション" tabindex="-1">マニピュレーション <a class="header-anchor" href="#マニピュレーション" aria-label="Permalink to &quot;マニピュレーション&quot;">​</a></h3><p><code>utstring_printf</code> または <code>utstring_bincpy</code> 演算は、文字列にデータを挿入（コピー）する。ある文字列を別の文字列に連結するには <code>utstring_concat</code> を使用する。 文字列の内容をクリアするには、 <code>utstring_clear</code> を使用する。文字列の長さは <code>utstring_len</code> から、内容は <code>utstring_body</code> から得ることができる。これは <code>char*</code> として評価される。 これが指すバッファは常にヌル終端である。そのため、文字列を期待する外部関数で直接使用することができます。この自動的なヌル終端は、文字列の長さにはカウントされない。</p><h3 id="サンプル" tabindex="-1">サンプル <a class="header-anchor" href="#サンプル" aria-label="Permalink to &quot;サンプル&quot;">​</a></h3><p>これらの例はutstringの使い方を示している。</p><p>Sample 1:</p><div class="language-c vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">#include</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &lt;stdio.h&gt;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">#include</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;utstring.h&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">int</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> main</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    UT_string </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">*</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">s;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    utstring_new</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(s);</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    utstring_printf</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(s, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;hello world!&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> );</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    printf</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">%s\\n</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">utstring_body</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(s));</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    utstring_free</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(s);</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    return</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p>次の例は、<code>utstring_printf</code>が文字列に「追加」することを示している。また、連結も示している。</p><p>Sample 2:</p><div class="language-c vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">#include</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &lt;stdio.h&gt;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">#include</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;utstring.h&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">int</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> main</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    UT_string </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">*</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">s, </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">*</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">t;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    utstring_new</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(s);</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    utstring_new</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(t);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    utstring_printf</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(s, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;hello &quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> );</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    utstring_printf</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(s, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;world &quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> );</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    utstring_printf</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(t, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;hi &quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> );</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    utstring_printf</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(t, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;there &quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> );</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    utstring_concat</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(s, t);</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    printf</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;length: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">%u\\n</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">utstring_len</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(s));</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    printf</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">%s\\n</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">utstring_body</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(s));</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    utstring_free</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(s);</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    utstring_free</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(t);</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    return</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p>次の例は、バイナリ・データを文字列に挿入する方法を示している。また、文字列をクリアし、そこに新しいデータをプリントする。</p><p>Sample 3:</p><div class="language-c vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">#include</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &lt;stdio.h&gt;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">#include</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;utstring.h&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">int</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> main</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    UT_string </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">*</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">s;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    char</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> binary</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">[]</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\xff\\xff</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    utstring_new</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(s);</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    utstring_bincpy</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(s, binary, </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">sizeof</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(binary));</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    printf</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;length is </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">%u\\n</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">utstring_len</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(s));</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    utstring_clear</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(s);</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    utstring_printf</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(s,</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;number </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">%d</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">10</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    printf</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">%s\\n</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">utstring_body</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(s));</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    utstring_free</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(s);</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    return</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h2 id="リファレンス" tabindex="-1">リファレンス <a class="header-anchor" href="#リファレンス" aria-label="Permalink to &quot;リファレンス&quot;">​</a></h2><p>これらはutstringの操作である。</p><h3 id="operations" tabindex="-1">Operations <a class="header-anchor" href="#operations" aria-label="Permalink to &quot;Operations&quot;">​</a></h3><table tabindex="0"><thead><tr><th>名前</th><th>説明</th></tr></thead><tbody><tr><td>utstring_new(s)</td><td>新しい文字列を割り当てる</td></tr><tr><td>utstring_renew(s)</td><td>新しい utstring を確保する（s が <code>NULL</code> の場合）。</td></tr><tr><td>utstring_free(s)</td><td>確保したutstringを解放する</td></tr><tr><td>utstring_init(s)</td><td>utstringを開始する（allocしない）</td></tr><tr><td>utstring_done(s)</td><td>utstringを破棄する（allocしない）</td></tr><tr><td>utstring_printf(s,fmt,...)</td><td>printfをutstringに(追加)</td></tr><tr><td>utstring_bincpy(s,bin,len)</td><td>長さlenのバイナリデータを挿入（追加）</td></tr><tr><td>utstring_concat(dst,src)</td><td>src utstring を dst utstring の末尾に連結する。</td></tr><tr><td>utstring_clear(s)</td><td>sの内容を消去する（長さを0にする）</td></tr><tr><td>utstring_len(s)</td><td>s の長さを符号なし整数で取得する。</td></tr><tr><td>utstring_body(s)</td><td>char*\`をsのボディに取得する（バッファは常にヌル文字で終端される）</td></tr><tr><td>utstring_find(s,pos,str,len)</td><td>posから部分文字列を前方検索</td></tr><tr><td>utstring_findR(s,pos,str,len)</td><td>pos から部分文字列の逆引き検索</td></tr></tbody></table><h3 id="new-free-vs-init-done" tabindex="-1">New/free vs. init/done <a class="header-anchor" href="#new-free-vs-init-done" aria-label="Permalink to &quot;New/free vs. init/done&quot;">​</a></h3><p>新しい文字列を確保したり解放したりするには <code>utstring_new</code> と <code>utstring_free</code> を使用する。UT_string が静的に割り当てられている場合は、<code>utstring_init</code> と <code>utstring_done</code> を使用して内部メモリを初期化または解放する。</p><h3 id="部分文字列検索" tabindex="-1">部分文字列検索 <a class="header-anchor" href="#部分文字列検索" aria-label="Permalink to &quot;部分文字列検索&quot;">​</a></h3><p><code>utstring_find</code>と<code>utstring_findR</code>を使用して、utstring内の部分文字列を検索する。順方向検索と逆方向検索がある。逆方向の検索では、文字列の末尾から後方にスキャンする。これらは、0（utstringの開始位置）から検索を開始する。 負の位置は文字列の末尾からカウントされるので、-1が最後の位置となる。 逆方向検索では、初期位置は検索対象の部分文字列の「末尾」に固定されることに注意。戻り値は常に、utstring 内で部分文字列が「始まる」オフセットを指す。 一致する部分文字列が見つからない場合は -1 が返される。</p><p>例えば、<code>s</code>というutstringが含まれているとする：</p><div class="language-c vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">ABC ABCDAB ABCDABCDABDE</span></span></code></pre></div><p>そして、<code>ABC</code>の部分文字列の前方検索と後方検索を行うと、次のような結果が得られる：</p><div class="language-c vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">utstring_find</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(  s, </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">9</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;ABC&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">3</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 15</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">utstring_find</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(  s,  </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">3</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;ABC&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">3</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  4</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">utstring_find</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(  s, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">16</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;ABC&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">3</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> -</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">utstring_findR</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">( s, </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">9</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;ABC&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">3</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 11</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">utstring_findR</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">( s, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">12</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;ABC&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">3</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  4</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">utstring_findR</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">( s,  </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;ABC&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">3</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  0</span></span></code></pre></div><h3 id="「複数使用」部分文字列検索" tabindex="-1">「複数使用」部分文字列検索 <a class="header-anchor" href="#「複数使用」部分文字列検索" aria-label="Permalink to &quot;「複数使用」部分文字列検索&quot;">​</a></h3><p>前述の例では、部分文字列マッチングの &quot;シングルユース &quot;バージョンを示しており、内部でKMP（Knuth-Morris-Pratt）テーブルが構築され、検索後に解放されます。ある部分文字列に対して何度も検索を実行する必要がある場合は、 KMP テーブルを保存して再利用する方が効率的です。</p><p>KMP テーブルを再利用するには、手動でテーブルを作成し、それを内部検索関数に渡します。関係する関数は次のとおりです：</p><div class="language-C vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">C</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">_utstring_BuildTable</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  (build the KMP table </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">for</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> a forward </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">search</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">_utstring_BuildTableR</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (build the KMP table </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">for</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> a reverse </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">search</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">_utstring_find</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        (forward search using a prebuilt KMP </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">table</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">_utstring_findR</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">       (reverse search using a prebuilt KMP </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">table</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span></code></pre></div><p>これは、&quot;ABC &quot;という部分文字列に対してフォワードKMPテーブルを作成し、それを検索に使用する例である：</p><div class="language-c vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">long</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> *</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">KPM_TABLE, offset;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">KPM_TABLE </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">long</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> *</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">malloc</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">( </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">sizeof</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">long</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">*</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">strlen</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;ABC&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">+</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">));</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">_utstring_BuildTable</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;ABC&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">3</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, KPM_TABLE);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">offset </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> _utstring_find</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">utstring_body</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(s), </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">utstring_len</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(s), </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;ABC&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">3</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, KPM_TABLE );</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">free</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(KPM_TABLE);</span></span></code></pre></div><p>内部の <code>_utstring_find</code> は、開始位置ではなく、UT_string の長さを第2引数として持っていることに注意してください。文字列の開始アドレスに加算し、その長さから減算することで、位置パラメータをエミュレートすることができる。</p><h3 id="備考" tabindex="-1">備考 <a class="header-anchor" href="#備考" aria-label="Permalink to &quot;備考&quot;">​</a></h3><ol><li>デフォルトのメモリ不足時の処理<code>（exit(-1)</code>を呼び出す）をオーバーライドするには、 <code>utstring.h</code> をインクルードする前に <code>utstring_oom()</code> マクロをオーバーライドしてください。例えば</li></ol><div class="language-c vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">#define</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> utstring_oom</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">do</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">longjmp</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(error_handling_location); } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">while</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">...</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">#include</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;utstring.h&quot;</span></span></code></pre></div>`,55),l=[h];function k(p,e,r,d,E,g){return a(),i("div",null,l)}const F=s(n,[["render",k]]);export{y as __pageData,F as default};

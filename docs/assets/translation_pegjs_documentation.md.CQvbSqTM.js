import{_ as s,c as i,o as a,a3 as p}from"./chunks/framework.DflgEAq4.js";const c=JSON.parse('{"title":"ドキュメント","description":"","frontmatter":{},"headers":[],"relativePath":"translation/pegjs/documentation.md","filePath":"translation/pegjs/documentation.md","lastUpdated":null}'),t={name:"translation/pegjs/documentation.md"},n=p(`<h1 id="ドキュメント" tabindex="-1">ドキュメント <a class="header-anchor" href="#ドキュメント" aria-label="Permalink to &quot;ドキュメント&quot;">​</a></h1><h2 id="インストール" tabindex="-1">インストール <a class="header-anchor" href="#インストール" aria-label="Permalink to &quot;インストール&quot;">​</a></h2><h2 id="node-js" tabindex="-1">Node.js <a class="header-anchor" href="#node-js" aria-label="Permalink to &quot;Node.js&quot;">​</a></h2><p>pegjsコマンドを使うには、PEG.jsをグローバルにインストールしてください。:</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> npm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -g</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> pegjs</span></span></code></pre></div><p>JavaScript APIを使用するには、PEG.jsをローカルにインストールしてください。:</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> npm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> pegjs</span></span></code></pre></div><p>pegjsコマンドとJavaScript APIの両方が必要な場合は、PEG.jsを両方インストールしてください。</p><h3 id="ブラウザ" tabindex="-1">ブラウザ <a class="header-anchor" href="#ブラウザ" aria-label="Permalink to &quot;ブラウザ&quot;">​</a></h3><p>PEG.jsライブラリ（通常版または最小化版）をダウンロードするか、Bowerを使ってインストールします。:</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> bower</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> pegjs</span></span></code></pre></div><h2 id="パーサーの生成" tabindex="-1">パーサーの生成 <a class="header-anchor" href="#パーサーの生成" aria-label="Permalink to &quot;パーサーの生成&quot;">​</a></h2><p>PEG.jsは、期待される入力を記述した文法からパーサーを生成し、パーサーが返すものを指定することができます（入力のマッチした部分に対してセマンティックアクションを使用します）。生成されたパーサー自体は、シンプルなAPIを持つJavaScriptオブジェクトです。</p><h3 id="コマンドライン" tabindex="-1">コマンドライン <a class="header-anchor" href="#コマンドライン" aria-label="Permalink to &quot;コマンドライン&quot;">​</a></h3><p>文法からパーサーを生成するには、pegjsコマンドを使います。:</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> pegjs</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> arithmetics.pegjs</span></span></code></pre></div><p>これは、文法ファイルと同じ名前で拡張子が&quot;.js &quot;のファイルにパーサーのソースコードを書き込みます。出力ファイルを明示的に指定することもできます:</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> pegjs</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -o</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> arithmetics-parser.js</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> arithmetics.pegjs</span></span></code></pre></div><p>入力ファイルと出力ファイルの両方を省略した場合は、標準入力と標準出力が使用される。</p><p>デフォルトでは、生成されるパーサーはNode.jsモジュール・フォーマットです。これは--formatオプションで上書きできる。</p><p>いくつかのオプションで、生成されるパーサーを微調整できる：</p><p><code>--allowed-start-rules</code>:</p><p>パーサーが解析を開始するルールのカンマ区切りリスト（デフォルト：文法の最初のルール）。</p><p><code>--cache</code>:</p><p>パーサが結果をキャッシュするようになり、病的なケースでの指数関数的な構文解析時間を避けることができるが、パーサは遅くなる。</p><p><code>--dependency</code>:</p><p>指定された依存関係をパーサに要求させる（複数回指定可能）。</p><p><code>--export-var</code>:</p><p>モジュールローダーが検出されなかった場合に、パーサーオブジェクトが代入されるグローバル変数の名前。</p><p><code>--extra-options</code></p><p>peg.generateに渡す追加オプション（JSON形式）。</p><p><code>--extra-options-file</code></p><p>peg.generateに渡す追加オプション（JSON形式）のファイル。</p><p><code>--format</code></p><p>生成されるパーサーのフォーマット：amd、commonjs、globals、umd（デフォルト：commonjs）。</p><p><code>--optimize</code></p><p>生成されたパーサーを解析速度（speed）とコードサイズ（size）のどちらに最適化するかを選択する（デフォルト：speed）</p><p><code>--plugin</code></p><p>PEG.js に指定したプラグインを使わせます（複数指定可）。</p><p><code>--trace</code></p><p>パーサーに進捗をトレースさせる。</p><h3 id="javascript-api" tabindex="-1">JavaScript API <a class="header-anchor" href="#javascript-api" aria-label="Permalink to &quot;JavaScript API&quot;">​</a></h3><p>Node.jsでは、PEG.jsパーサー・ジェネレーター・モジュールをrequireします：</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">var</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> peg </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> require</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;pegjs&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span></code></pre></div><p>ブラウザで、<code>&lt;script&gt;</code> タグを使って、PEG.js ライブラリをウェブページやアプリケーションにインクルードします。PEG.jsがAMDローダーを検出すれば、それ自身をモジュールとして定義し、そうでなければ、APIはpegグローバルオブジェクトで利用可能になります。</p><p>パーサーを生成するには、peg.generateメソッドを呼び出し、パラメータとして文法を渡します：</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">var</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> parser </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> peg.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">generate</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;start = (&#39;a&#39; / &#39;b&#39;)+&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span></code></pre></div><p>このメソッドは、生成されたパーサーオブジェクトかそのソースコードを文字列として返します（出力オプションの値に依存します - 下記を参照）。文法が無効な場合は例外をスローします。例外には、エラーの詳細を示すメッセージ・プロパティが含まれます。</p><p>peg.generateにオプションオブジェクトを2番目のパラメータとして渡すことで、生成されるパーサーを微調整することができます。以下のオプションがサポートされています：</p><p><code>allowedStartRules</code>:</p><p>パーサーが解析を開始できるルール（デフォルト：文法の最初のルール）。</p><p><code>cache</code>:</p><p>trueの場合、パーサが結果をキャッシュするようになり、病的なケースでの指数関数的なパーシング時間を避けることができますが、パーサは遅くなります（デフォルト：false）。</p><p><code>dependencies</code>:</p><p>パーサーの依存関係、値はパーサーの依存関係にアクセスするために使用される変数を、それらをロードするために使用されるモジュールIDにマップするオブジェクトです。formatが &quot;amd&quot;、&quot;commonjs&quot;、または &quot;umd &quot;に設定されているときのみ有効です（デフォルト：{}）。</p><p><code>exportVar</code>:</p><p>formatが &quot;globals &quot;または &quot;umd &quot;に設定されているときのみ有効（デフォルト：null）。</p><p><code>format</code>:</p><p>生成されるパーサーのフォーマット（&quot;amd&quot;、&quot;bare&quot;、&quot;commonjs&quot;、&quot;globals&quot;、または &quot;umd&quot;）； 出力が &quot;source &quot;に設定されているときのみ有効（デフォルトは &quot;bare&quot;）。</p><p><code>optimize</code>:</p><p>生成されたパーサーを解析速度（&quot;speed&quot;）とコードサイズ（&quot;size&quot;）のどちらに最適化するかを選択します（デフォルトは &quot;speed&quot;）。</p><p><code>output</code>:</p><p>parser &quot;に設定すると、このメソッドは生成されたパーサー・オブジェクトを返します。&quot;source &quot;に設定すると、パーサー・ソース・コードを文字列として返します（デフォルトは &quot;parser&quot;）。</p><p><code>plugins</code>:</p><p>使用するプラグイン</p><p><code>trace</code>:</p><p>パーサが進行状況をトレースするようにします（デフォルト：false）。</p><h2 id="パーサーを使う" tabindex="-1">パーサーを使う <a class="header-anchor" href="#パーサーを使う" aria-label="Permalink to &quot;パーサーを使う&quot;">​</a></h2><p>生成されたパーサーの使い方は簡単で、parseメソッドを呼び出し、パラメータとして入力文字列を渡すだけです。このメソッドはパース結果を返すか（正確な値はパーサーの生成に使われた文法に依存します）、入力が無効な場合は例外をスローします。例外には、エラーの詳細を示す location、expected、found、message プロパティが含まれます。</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">parser.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">parse</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;abba&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">); </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// returns [&quot;a&quot;, &quot;b&quot;, &quot;b&quot;, &quot;a&quot;]</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">parser.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">parse</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;abcd&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">); </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// throws an exception</span></span></code></pre></div><p>パーサーの動作を微調整するには、オプション・オブジェクトを2番目のパラメーターとしてparseメソッドに渡します。以下のオプションがサポートされています：</p><p><code>startRule</code>:</p><p>解析を開始するルールの名前。</p><p><code>tracer</code>:</p><p>使用するトレーサー。</p><p>パーサーは、独自のカスタム・オプションをサポートすることもできる。</p><h2 id="文法-構文論と意味論" tabindex="-1">文法 構文論と意味論 <a class="header-anchor" href="#文法-構文論と意味論" aria-label="Permalink to &quot;文法 構文論と意味論&quot;">​</a></h2><p>文法構文はJavaScriptに似ているが、行指向ではなく、トークン間の空白は無視される。JavaScriptスタイルのコメント（// ... や /* ... */）も使えます。</p><p>2*(3+4)のような単純な算術式を認識する文法の例を見てみよう。この文法から生成されたパーサーは、それらの値を計算する。</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">start</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> additive</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">additive</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> left</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:multiplicative </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;+&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> right</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:additive { </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> left </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">+</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> right; }</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  /</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> multiplicative</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">multiplicative</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> left</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:primary </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;*&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> right</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:multiplicative { </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> left </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">*</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> right; }</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  /</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> primary</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">primary</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> integer</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  /</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;(&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> additive</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:additive </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;)&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> additive; }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">integer </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;integer&quot;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> digits</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:[</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">9</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">+</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { return </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">parseInt</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(digits.join(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">), </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">10</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">); }</span></span></code></pre></div><p>トップレベルでは、文法はルールで構成される（この例では5つある）。各ルールには、ルールを識別する名前（integerなど）と、入力テキストとマッチするパターンを定義する構文解析式（<code>digits:[0-9]+ { return parseInt(digits.join(&quot;&quot;), 10); }</code>など）があります。ルールには、エラーメッセージで使用する人間が読める名前を含めることもできます (この例では、整数ルールだけが人間が読める名前になっています)。構文解析は最初のルールから始まります。</p><p>ルール名はJavaScriptの識別子でなければならない。その後に等号（&quot;=&quot;）と構文解析式が続く。ルールに人間が読める名前がある場合は、名前と等号の間にJavaScriptの文字列として記述する。ルールは空白のみで区切る必要がある（その先頭は容易に認識できる）が、構文解析式の後にセミコロン（&quot;;&quot;）を置くことは可能である。</p><p>最初のルールの前には、イニシャライザ（中かっこ（&quot;{&quot;と&quot;}&quot;）で囲まれたJavaScriptコードの一部）を置くことができる。このコードは、生成されたパーサーがパージングを開始する前に実行されます。イニシャライザで定義されたすべての変数と関数は、ルールアクションと意味述語でアクセス可能です。イニシャライザ内のコードは、options変数を使用してパーサーに渡されたオプションにアクセスできます。イニシャライザ・コード内の中括弧は、バランスがとれていなければなりません。簡単なイニシャライザを使った文法の例を見てみましょう。</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  function</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> makeInteger</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">o</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    return</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> parseInt</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(o.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">join</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">), </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">10</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">start</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> additive</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">additive</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> left</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:multiplicative </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;+&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> right</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:additive { </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> left </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">+</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> right; }</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  /</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> multiplicative</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">multiplicative</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> left</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:primary </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;*&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> right</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:multiplicative { </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> left </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">*</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> right; }</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  /</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> primary</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">primary</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> integer</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  /</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;(&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> additive</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:additive </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;)&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> additive; }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">integer </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;integer&quot;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> digits</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:[</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">9</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">+</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { return </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">makeInteger</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">digits</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">); }</span></span></code></pre></div><p>ルールの構文解析式は、入力テキストを文法にマッチさせるために使われる。文字や文字クラスのマッチング、省略可能な部分や繰り返しの指示など、さまざまな種類の表現がある。式は他のルールへの参照を含むこともできる。以下の詳細な説明を参照のこと。</p><p>生成されたパーサーを実行するとき、式がテキストの一部分にうまくマッチすると、JavaScriptの値であるマッチ結果が生成されます。例えば</p><ul><li>リテラル文字列にマッチする式は、マッチしたテキストを含むJavaScript文字列を生成します。</li><li>繰り返し出現する部分式にマッチする式は、すべてのマッチを含む JavaScript 配列を生成します。</li></ul><p>ルール名が式で使用されると、マッチ結果は開始ルールまでルールに伝搬します。生成されたパーサーは、解析に成功すると開始ルールのマッチ結果を返します。</p><p>中括弧（&quot;{&quot;と&quot;}&quot;）の中にあるJavaScriptコードで、先行するいくつかの式のマッチ結果を受け取り、JavaScript値を返します。この値は、直前の式のマッチ結果とみなされます（言い換えると、パーサー・アクションはマッチ結果トランスフォーマーです）。</p><p>算術の例では、多くのパーサー・アクションがある。<code>digits:[0-9]+ { return parseInt(digits.join(&quot;&quot;), 10); }</code> という式のアクションを考えてみましょう。<code>digits:[0-9]+</code>という式のマッチ結果をパラメータとして受け取ります。これは、数字を結合して数値を形成し、JavaScriptの数値オブジェクトに変換します。</p><h3 id="式タイプの解析" tabindex="-1">式タイプの解析 <a class="header-anchor" href="#式タイプの解析" aria-label="Permalink to &quot;式タイプの解析&quot;">​</a></h3><p>構文解析式にはいくつかの種類があり、中には部分式を含んで再帰的な構造を形成するものもある：</p><p><code>&quot;literal&quot;</code>:</p><p><code>&#39;literal&#39;</code>:</p><p>正確なリテラル文字列にマッチし、それを返す。文字列の構文はJavaScriptと同じ。リテラルの直後に i を付けると、大文字小文字を区別せずにマッチします。</p><p><code>.</code>:</p><p>正確に1文字にマッチし、文字列として返す。</p><p><code>[characters]</code>:</p><p>集合から1文字をマッチさせ、文字列として返す。リストの文字はJavaScriptの文字列と全く同じ方法でエスケープすることができます。文字のリストは範囲を含むこともできる(例えば <code>[a-z]</code> は &quot;全ての小文字 &quot;を意味する)。文字の前に ^ を付けると、マッチする文字が反転します (例えば <code>[^a-z]</code> は「小文字以外の全ての文字」を意味します)。リテラルの直後にiを付けると、大文字小文字を区別しないマッチになる。</p><p><code>rule</code>:</p><p>ルールの構文解析式に再帰的にマッチし、そのマッチ結果を返す。</p><p><code>( expression )</code>:</p><p>部分式にマッチし、そのマッチ結果を返します。</p><p><code>expression *</code>:</p><p>式の0回以上の繰り返しにマッチし、そのマッチ結果を配列で返します。マッチングは貪欲に行われます。つまり、パーサーは可能な限り多くの回数の式にマッチしようとします。正規表現とは異なり、バックトラックはありません。</p><p><code>expression +</code>:</p><p>式の1つ以上の繰り返しにマッチし、そのマッチ結果を配列で返します。マッチングは貪欲に行われます。つまり、パーサーは可能な限り多くの回数の式にマッチしようとします。正規表現とは異なり、バックトラックはありません。</p><p><code>expression ?</code>:</p><p>式のマッチを試みる。マッチに成功すればその結果を返し、そうでなければnullを返す。正規表現とは異なり、バックトラックはありません。</p><p><code>&amp; expression</code>:</p><p>式のマッチを試みる。マッチに成功した場合はundefinedを返し、入力を消費しません。</p><p><code>! expression</code>:</p><p>Try to match the expression. If the match does not succeed, just return undefined and do not consume any input, otherwise consider the match failed.</p><p><code>&amp; { predicate }</code>:</p><p>述語はJavaScriptコードの一部で、あたかも関数の中にあるかのように実行される。これは、直前の式でラベル付けされた式のマッチ結果を引数として取得します。return文を使って、JavaScriptの値を返す必要があります。返された値が真偽値で評価される場合、undefinedを返し、入力を消費しません。</p><p>述語の中のコードは、文法の最初にあるイニシャライザーで定義されたすべての変数と関数にアクセスできる。</p><p>述語の中のコードは、location関数を使って位置情報にアクセスすることもできます。これは次のようなオブジェクトを返します：</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  start</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: { </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">offset</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">23</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">line</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">5</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">column</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">6</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> },</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  end</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:   { </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">offset</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">23</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">line</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">5</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">column</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">6</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p>start プロパティと end プロパティはともに現在の解析位置を指す。offsetプロパティはゼロベースのインデックスとしてオフセットを含み、lineプロパティとcolumnプロパティは1ベースのインデックスとして行と列を含む。</p><p>述語内部のコードは、options変数を使用してパーサーに渡されたオプションにアクセスすることもできます。</p><p>述語コード中の中括弧は、バランスがとれていなければならないことに注意してください。</p><p><code>! { predicate }</code>:</p><p>述語はJavaScriptコードの一部で、あたかも関数の中にあるかのように実行される。これは、直前の式でラベル付けされた式のマッチ結果を引数として取得します。return文を使ってJavaScriptの値を返す必要があります。返された値が真偽値でfalseと評価された場合は、undefinedを返し、入力を消費しません。</p><p>述語の中のコードは、文法の最初にあるイニシャライザーで定義されたすべての変数と関数にアクセスすることができます。</p><p>述語の中のコードは、location関数を使って位置情報にアクセスすることもできます。これは次のようなオブジェクトを返します：</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  start</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: { </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">offset</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">23</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">line</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">5</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">column</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">6</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> },</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  end</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:   { </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">offset</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">23</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">line</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">5</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">column</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">6</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p>start プロパティと end プロパティはともに現在の解析位置を指す。offsetプロパティはゼロベースのインデックスとしてオフセットを含み、lineプロパティとcolumnプロパティは1ベースのインデックスとして行と列を含む。</p><p>述語の中のコードは、options変数を使ってパーサーに渡されたオプションにアクセスすることもできる。</p><p>述語のコード中の中括弧はバランスがとれていなければならないことに注意。</p><p><code>$ expression</code>:</p><p>式のマッチを試みる。マッチに成功した場合は、マッチ結果の代わりにマッチしたテキストを返します。</p><p><code>label : expression</code>:</p><p>式をマッチさせ、そのマッチ結果を与えられたラベルの下に記憶する。ラベルはJavaScriptの識別子でなければなりません。</p><p>保存されたマッチ結果は、アクションのJavaScriptコードからアクセスできます。</p><p><code>expression1 expression2 ... expressionn</code>:</p><p>一連の式をマッチさせ、そのマッチ結果を配列で返す。</p><p><code>expression { action }</code>:</p><p>式をマッチさせる。マッチに成功した場合はアクションを実行し、そうでない場合はマッチに失敗したとみなす。</p><p>アクションはJavaScriptコードの一部で、あたかも関数の中にあるかのように実行されます。直前の式でラベル付けされた式のマッチ結果を引数として受け取ります。アクションはreturn文を使ってJavaScriptの値を返す必要があります。この値が先行式のマッチ結果とみなされます。</p><p>エラーを示すために、アクション内部のコードは期待される関数を呼び出すことができます。この関数は2つのパラメータを取ります。現在の位置で何が期待されているかの説明と、オプションの位置情報です（デフォルトは位置が返すものです。）説明は、スローされた例外のメッセージの一部として使用されます。</p><p>アクションの中のコードはerror関数を呼び出すこともできます。この関数は2つのパラメータ、エラーメッセージとオプションの位置情報を受け取ります（デフォルトは位置情報が返すものです。）メッセージはスローされた例外で使用されます。</p><p>アクション内のコードは、文法冒頭のイニシャライザーで定義されたすべての変数と関数にアクセスできます。アクションコード内の中括弧は、バランスよく配置する必要があります。</p><p>アクション内部のコードは、text関数を使用して、式でマッチしたテキストにアクセスすることもできます。</p><p>アクションの中のコードは、location関数を使って位置情報にアクセスすることもできます。この関数は次のようなオブジェクトを返します：</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  start</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: { </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">offset</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">23</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">line</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">5</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">column</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">6</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> },</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  end</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:   { </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">offset</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">25</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">line</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">5</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">column</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">8</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p>start プロパティは式の開始位置を指し、end プロパティは式の終了位置を指す。offsetプロパティはゼロベースのインデックスとしてオフセットを含み、lineプロパティとcolumnプロパティは1ベースのインデックスとして行と列を含む。</p><p>アクション内部のコードは、options変数を使用してパーサーに渡されたオプションにアクセスすることもできます。</p><p>アクション・コード内の中括弧は、バランスがとれていなければならないことに注意してください。</p><p><code>expression1 / expression2 / ... / expressionn</code>:</p><p>最初の式とのマッチを試み、成功しなければ2番目の式を試すなど。最初にマッチした式のマッチ結果を返します。マッチする式がない場合は、マッチに失敗したとみなします。</p><h2 id="compatibility" tabindex="-1">Compatibility <a class="header-anchor" href="#compatibility" aria-label="Permalink to &quot;Compatibility&quot;">​</a></h2><p>パーサー・ジェネレーターも生成されたパーサーも、以下の環境でうまく動作するはずです：</p><ul><li>Node.js 0.10.0+</li><li>Internet Explorer 8+</li><li>Edge</li><li>Firefox</li><li>Chrome</li><li>Safari</li><li>Opera</li></ul>`,153),h=[n];function e(l,k,d,r,E,o){return a(),i("div",null,h)}const y=s(t,[["render",e]]);export{c as __pageData,y as default};

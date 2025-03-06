import{_ as i,c as s,o as l,a3 as n,j as a,a as e}from"./chunks/framework.DflgEAq4.js";const x=JSON.parse('{"title":"Ninjaファイルリファレンス","description":"","frontmatter":{},"headers":[],"relativePath":"translation/ninja/ninja_file_reference.md","filePath":"translation/ninja/ninja_file_reference.md","lastUpdated":null}'),t={name:"translation/ninja/ninja_file_reference.md"},p=n(`<h1 id="ninjaファイルリファレンス" tabindex="-1">Ninjaファイルリファレンス <a class="header-anchor" href="#ninjaファイルリファレンス" aria-label="Permalink to &quot;Ninjaファイルリファレンス&quot;">​</a></h1><p>ファイルは、一連の宣言である。宣言は以下のいずれかになります。</p><ol><li>ルール宣言。rule rulenameで始まり、変数を定義するインデントされた一連の行がある。</li><li>build output1 output2: rulename input1 input2 のようなビルドエッジです。暗黙の依存関係は、最後に | dependency1 dependency2 と付けることができます。順序のみの依存関係は || dependency1 dependency2 で終わりにくっつけることができます。 (依存関係のタイプのリファレンスを参照してください。) バリデーションは |@ validation1 validation2 で終わりにくっつけることができます。 (バリデーションのリファレンスを参照してください。)暗黙の出力(Ninja 1.7以降で利用可能)は: の前に | output1 output2 で追加でき、$outには現れない.(出力タイプに関するリファレンスを参照)。</li><li>変数宣言。変数 = 値のように見える。</li><li>default target1 target2 のように見えるデフォルトのターゲットステートメント。</li><li>サブNinjaパスやインクルードパスのように見える、より多くのファイルへの参照。これらの違いについては、後述のスコープに関する議論において説明します。</li><li>pool poolnameのように見えるプール宣言。プールについては、プールのセクションで説明します。</li></ol><h2 id="レキシカルシンタックス" tabindex="-1">レキシカルシンタックス <a class="header-anchor" href="#レキシカルシンタックス" aria-label="Permalink to &quot;レキシカルシンタックス&quot;">​</a></h2><p>NinjaはASCIIであれば、エンコーディングに依存しない。つまり、UTF-8やISO-8859-1などの入力ファイルは動作する。</p><p>コメントは#で始まり、行末まで続きます。</p><p>改行は重要です。build foo bar のようなステートメントは、スペースで区切られたトークンの集合で、その終端は改行で区切られています。トークン内の改行とスペースはエスケープされなければならない。</p><p>エスケープ文字は$1つだけで、次のような動作があります。</p><ul><li>$ followed by a newline: 改行をエスケープする（改行をまたいで現在の行を継続する）。</li><li>$ followed by text: 変数参照とする。</li><li>\${varname}: varname の代替構文。</li><li>$ followed by space: スペースが必要です。(これはパスのリストにおいてのみ必要であり、スペースがなければファイル名を区切ることができます。下記参照)</li><li>&quot;$:&quot;: コロン(これはビルド行でのみ必要で、そうでなければコロンで出力リストを終了してしまいます)。</li><li><p class="katex-block katex-error" title="ParseError: KaTeX parse error: Can&#39;t use function &#39;$&#39; in math mode at position 3: : $̲リテラルです。

">: $リテラルです。 </p></li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>spaced = foo bar</span></span>
<span class="line"><span>build $spaced/baz other$ file: ...</span></span>
<span class="line"><span># The above build line has two outputs: &quot;foo bar/baz&quot; and &quot;other file&quot;.</span></span></code></pre></div><p>name = value文では、値の先頭のホワイトスペースは常に除去されます。行の継続の後の行頭の空白も除去される。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>two_words_with_one_space = foo $</span></span>
<span class="line"><span>    bar</span></span>
<span class="line"><span>one_word_with_no_space = foo$</span></span>
<span class="line"><span>    bar</span></span></code></pre></div><p>その他の空白は、行頭にある場合のみ意味があります。ある行が前の行よりもインデントされている場合、その行は親のスコープの一部とみなされ、前の行よりもインデントされていない場合、前のスコープを閉じます。</p><h2 id="トップレベル変数" tabindex="-1">トップレベル変数 <a class="header-anchor" href="#トップレベル変数" aria-label="Permalink to &quot;トップレベル変数&quot;">​</a></h2><p>一番外側のファイルスコープで宣言された場合、2つの変数が意味を持ちます。</p><ul><li>builddir: Ninjaの出力ファイルを置くディレクトリ。ビルドログの説明を参照してください。(このディレクトリには、他のビルド出力も格納できる)。</li><li>ninja_required_version: ビルドを正しく処理するために必要な Ninja の最小バージョン。バージョニングの議論を参照してください。</li></ul><h2 id="ルール変数" tabindex="-1">ルール変数 <a class="header-anchor" href="#ルール変数" aria-label="Permalink to &quot;ルール変数&quot;">​</a></h2><p>ルールブロックには、ルールの処理に影響を与える key = value 宣言のリストが含まれています。ここでは、特殊なキーの全リストを紹介します。</p><h3 id="command-required" tabindex="-1">command (required) <a class="header-anchor" href="#command-required" aria-label="Permalink to &quot;command (required)&quot;">​</a></h3><p>実行するコマンドラインを指定します。各ルールは、1つのコマンド宣言のみを持つことができます。複数のコマンドの引用と実行の詳細については、次のセクションを参照してください。</p><h3 id="depfile" tabindex="-1">depfile <a class="header-anchor" href="#depfile" aria-label="Permalink to &quot;depfile&quot;">​</a></h3><p>暗黙の依存関係を含むオプションの Makefile へのパス (依存関係の種類に関するリファレンスを参照)。これは明示的に C/C++ のヘッダ依存性をサポートするためのものです; 完全な議論を参照してください。</p><h3 id="deps" tabindex="-1">deps <a class="header-anchor" href="#deps" aria-label="Permalink to &quot;deps&quot;">​</a></h3><p>(Ninja 1.3 以降で利用可能) 存在する場合、特別な依存処理を指定するために gcc または msvc のいずれかを指定する必要がある。詳しい説明はこちら。生成されたデータベースは.ninja_depsとしてbuilddirに格納される。builddirの議論を参照のこと。</p><h3 id="msvc-deps-prefix" tabindex="-1">msvc_deps_prefix <a class="header-anchor" href="#msvc-deps-prefix" aria-label="Permalink to &quot;msvc_deps_prefix&quot;">​</a></h3><p>(Ninja 1.5以降で使用可能) msvcの/showIncludes出力から削除される文字列を定義しています。deps = msvcで、英語版のVisual Studioを使用していない場合のみ必要です。</p><h3 id="description" tabindex="-1">description <a class="header-anchor" href="#description" aria-label="Permalink to &quot;description&quot;">​</a></h3><p>コマンドの短い説明で、コマンドの実行中にプリティ・プリントするために使用されます。v フラグは、コマンド全体を表示するか、コマンドの説明を表示するかを制御します。</p><h3 id="dyndep" tabindex="-1">dyndep <a class="header-anchor" href="#dyndep" aria-label="Permalink to &quot;dyndep&quot;">​</a></h3><p>(Ninja 1.10以降で使用可能）ビルドステートメントでのみ使用されます。存在する場合、ビルドステートメントの入力のいずれかに名前を付ける必要があります。動的に検出された依存関係の情報が、このファイルから読み込まれます。詳細は動的依存関係のセクションを参照してください。</p><h3 id="generator" tabindex="-1">generator <a class="header-anchor" href="#generator" aria-label="Permalink to &quot;generator&quot;">​</a></h3><p>が存在する場合、このルールがジェネレータプログラムの再起 動に使用されることを指定します。ジェネレータルールを使って作られたファイルは、2つの点で特別に扱われます。 1つは、コマンドラインが変更されても再構築されないこと、もう1つは、 デフォルトでクリーニングされないことです。</p><h3 id="in" tabindex="-1">in <a class="header-anchor" href="#in" aria-label="Permalink to &quot;in&quot;">​</a></h3><p>このルールを参照するビルドラインの入力として提供される、スペースで区切られたファイルのリストで、コマンドに表示される場合はシェル引用符で囲まれます。($inは便宜上提供されているもので、このファイルのリストのサブセットや変形が必要な場合は、そのリストで新しい変数を構築し、代わりにそれを使用してください)。</p><h3 id="in-newline" tabindex="-1">in_newline <a class="header-anchor" href="#in-newline" aria-label="Permalink to &quot;in_newline&quot;">​</a></h3>`,35),o=a("p",null,[e("複数の入力が空白ではなく改行で区切られる以外は "),a("span",{class:"katex"},[a("span",{class:"katex-mathml"},[a("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[a("semantics",null,[a("mrow",null,[a("mi",null,"i"),a("mi",null,"n"),a("mtext",null,"と同じです。"),a("mo",{stretchy:"false"},"(")]),a("annotation",{encoding:"application/x-tex"},"in と同じです。(")])])]),a("span",{class:"katex-html","aria-hidden":"true"},[a("span",{class:"base"},[a("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),a("span",{class:"mord mathnormal"},"in"),a("span",{class:"mord cjk_fallback"},"と同じです。"),a("span",{class:"mopen"},"(")])])]),e("rspfile_content と一緒に使用します。MSVC リンカが入力処理に固定サイズのバッファを使用するバグを回避するためです)。")],-1),r=n(`<h3 id="out" tabindex="-1">out <a class="header-anchor" href="#out" aria-label="Permalink to &quot;out&quot;">​</a></h3><p>このルールを参照するビルドラインの出力として提供される、スペースで区切られたファイルのリストです。</p><h3 id="restat" tabindex="-1">restat <a class="header-anchor" href="#restat" aria-label="Permalink to &quot;restat&quot;">​</a></h3><p>存在する場合、Ninjaはコマンド実行後にそのコマンドの出力を再立体化する。コマンドによって変更されなかった各出力は、ビルドする必要がなかったものとして扱われます。このため、出力の逆依存関係は、保留中のビルド操作の一覧から削除されることがあります。</p><h3 id="rspfile-rspfile-content" tabindex="-1">rspfile, rspfile_content <a class="header-anchor" href="#rspfile-rspfile-content" aria-label="Permalink to &quot;rspfile, rspfile_content&quot;">​</a></h3><p>コマンドを呼び出す前に、選択した文字列 (rspfile_content) を指定したファイル (rspfile) に書き込み、コマンドの実行に成功したらそのファイルを削除します。</p><p>特にWindows OSでは、コマンドラインの最大長に制限があり、レスポンスファイルを使用しなければならないため、この機能は非常に有効です。</p><p>以下の例のように使用します。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>rule link</span></span>
<span class="line"><span>  command = link.exe /OUT$out [usual link flags here] @$out.rsp</span></span>
<span class="line"><span>  rspfile = $out.rsp</span></span>
<span class="line"><span>  rspfile_content = $in</span></span>
<span class="line"><span></span></span>
<span class="line"><span>build myapp.exe: link a.obj b.obj [possibly many other .obj files]</span></span></code></pre></div><h2 id="コマンド変数の解釈" tabindex="-1">コマンド変数の解釈 <a class="header-anchor" href="#コマンド変数の解釈" aria-label="Permalink to &quot;コマンド変数の解釈&quot;">​</a></h2><p>基本的に、コマンドラインはUnixとWindowsで動作が異なります。</p><p>Unix では、コマンドは引数の配列である。コマンド変数Ninjaは直接sh -cに渡され、sh -cはその文字列をargv配列に解釈する責任を負います。したがって、引用の規則はシェルのものであり、複数のコマンドを連結する &amp;&amp; や、環境変数を設定する VAR=value cmd など、通常のシェル演算子をすべて使用することができる。</p><p>Windowsではコマンドは文字列なので、NinjaはCreateProcessに直接コマンド文字列を渡している。(単にコンパイラを実行する一般的なケースでは、これはオーバーヘッドが少ないことを意味する)。その結果、引用のルールは呼び出されたプログラムによって決定され、Windowsでは通常Cライブラリによって提供される。コマンドのシェル解釈が必要な場合(例えば&amp;&amp;による複数コマンドの連結)は、コマンドの前にcmd /cを付けてWindowsのシェルを実行するようにする。Ninjaは &quot;invalid parameter &quot;というエラーを出すことがありますが、これは通常コマンドラインの長さを超えたことを示しています。</p><h2 id="ビルド出力" tabindex="-1">ビルド出力 <a class="header-anchor" href="#ビルド出力" aria-label="Permalink to &quot;ビルド出力&quot;">​</a></h2><p>ビルド出力には、微妙に異なる2つのタイプがあります。</p><ol><li>ビルドラインにリストされた明示的な出力。これらは、ルール内の$out変数として利用できます。これは、例えばコンパイル・コマンドのオブジェクト・ファイルに使用される標準的な出力形式です。</li><li>暗黙の出力。ビルド行の : の前に | out1 out2 + という構文で列挙される(Ninja 1.7 以降で使用可能)。意味的には明示的出力と同じであるが、唯一の違いは暗黙的出力は$out変数に現れないことである。これはコマンドのコマンドラインには現れない出力を表現するためのものである。</li></ol><h2 id="ビルドの依存関係" tabindex="-1">ビルドの依存関係 <a class="header-anchor" href="#ビルドの依存関係" aria-label="Permalink to &quot;ビルドの依存関係&quot;">​</a></h2><p>ビルドの依存関係は、微妙に異なる3つのタイプがあります。</p><ol><li>ビルドラインにリストされた明示的な依存関係。これらのファイルは、ルール中の$in変数として利用できる。これらのファイルが存在せず、Ninjaがビルドの方法を知らない場合、ビルドは中断される。これは、コンパイルコマンドのソースファイルなどに使われる、標準的な依存関係の形式である。</li><li>暗黙の依存関係とは、ルールの depfile 属性やビルド行の末尾にある | dep1 dep2 という構文から取得される依存関係のことです。セマンティクスは明示的な依存関係と同じですが、唯一の違いは、暗黙的な依存関係は$in変数に表示されないということです。これは、コマンドのコマンドラインに現れない依存関係を表現するためのものです。例えば、ハードコードされたファイルを読み込むスクリプトを実行するルールでは、引数に表示されなくても、ファイルを変更すると出力が再構築されるはずなので、ハードコードされたファイルは暗黙の依存関係とすべきです。depfilesを通して読み込まれた依存関係は、ルールリファレンスで説明したように少し異なるセマンティクスを持っていることに注意して下さい。</li><li>順序のみの依存関係は、ビルド行の最後に || dep1 dep2 という構文で表現されます。これらが古くなると、それらがビルドされるまで出力は再構築されませんが、順序のみの依存関係の変更だけでは出力は再構築されません。順序のみの依存関係は、ビルド時にのみ発見される依存関係のブートストラップに有用です：例えば、その後のコンパイルステップを始める前にヘッダーファイルを生成するためです。(一度ヘッダーがコンパイルで使用されると、生成された依存性ファイルは暗黙の依存関係を表現します)。</li></ol><p>ファイルのパスはそのまま比較される。つまり、同じファイルを指す絶対パスと相対パスは、Ninjaによって異なるものとして扱われる。</p><h2 id="バリデーション" tabindex="-1">バリデーション <a class="header-anchor" href="#バリデーション" aria-label="Permalink to &quot;バリデーション&quot;">​</a></h2><p>ビルドラインに記載されたバリデーションは、ビルドラインがコマンドラインで指定されたターゲットまたはデフォルトターゲットの1つの推移的依存関係にある場合、指定されたファイルをビルドグラフのトップレベルに追加します（Ninjaコマンドラインで指定されたかのようです）。</p><p>検証は、ビルドステートメントの出力ファイルがダーティであるかどうかに関係なくビルドグラフに追加され、検証として使用されるファイルを出力するビルドステートメントのダーティ状態は、それを要求したビルドステートメントのダーティ状態に影響を与えません。</p><p>ビルドエッジは、2番目のエッジが1番目のエッジに依存している場合でも、別のビルドエッジを検証としてリストアップすることができます。</p><p>バリデーションは、エラーチェックは行うがビルドに必要な成果物を生成しないルール、例えば静的解析ツールなどを扱うために設計されています。静的解析ルールをソースファイルのメインビルドルールやメインビルドルールに依存するルールの暗黙の入力としてマークすると、ビルドのクリティカルパスが遅くなりますが、検証を使用すると、メインビルドルールが完了した後に静的解析ルールと並行してビルドを進行させることができるようになります。</p><h2 id="variable-expansion" tabindex="-1">Variable expansion <a class="header-anchor" href="#variable-expansion" aria-label="Permalink to &quot;Variable expansion&quot;">​</a></h2><p>変数は、パス（build文またはdefault文）およびname = value文の右側で展開されます。</p><p>name = value文が評価されると、その右辺は（以下のスコープ規則に従って）直ちに展開され、それ以降、$nameは展開の結果としての静的文字列に展開されます。値が二重に展開されるのを防ぐために、「ダブルエスケープ」が必要になることは決してありません。</p><p>ルール ブロック内の変数は、ルールが宣言されたときではなく、ルールが使用されたときに展開されます。次の例では、demoルールが「this is a demo of bar」と表示されます。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>rule demo</span></span>
<span class="line"><span>  command = echo &quot;this is a demo of $foo&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>build out: demo</span></span>
<span class="line"><span>  foo = bar</span></span></code></pre></div><h2 id="評価とスコーピング" tabindex="-1">評価とスコーピング <a class="header-anchor" href="#評価とスコーピング" aria-label="Permalink to &quot;評価とスコーピング&quot;">​</a></h2><p>トップレベルの変数宣言は、それが出現するファイルに対してスコープされます。</p><p>また、ルール宣言もファイルにスコープされる。 (Ninja 1.6以降で使用可能)</p><p>subninja キーワードは、他の .ninja ファイルをインクルードするために使用され、新たなスコープを導入します。インクルードされたsubninjaファイルは、親ファイルの変数とルールを使用し、その値をファイルのスコープにシャドウすることができますが、親ファイルの変数の値には影響を与えません。</p><p>C言語の#include文のように、別の.ninjaファイルを現在のスコープに含めるには、subninjaの代わりにincludeを使用します。</p><p>ビルドブロックの中でインデントされた変数宣言は、ビルドブロックにスコープされます。ビルドブロックで展開された変数（またはルールが使用されている）の完全な検索順序は次のとおりです。</p><ol><li>特殊な組み込み変数($in, $out)。</li><li>ビルドブロックからのビルドレベルの変数。</li><li>ルールブロックのルールレベル変数 (例: $command) です。(上記の拡張に関する議論から、これらは「遅れて」拡張され、 $in のようなスコープ内のバインディングを使用する可能性があることに注意してください)。</li><li>ビルドラインがあったファイルからファイルレベルの変数。</li><li>subninjaキーワードを使ってそのファイルをインクルードしたファイルからの変数。</li></ol>`,37),d=[p,o,r];function c(h,u,b,m,f,_){return l(),s("div",null,d)}const k=i(t,[["render",c]]);export{x as __pageData,k as default};

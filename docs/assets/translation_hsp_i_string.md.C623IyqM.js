import{_ as n,c as s,o as p,a3 as t}from"./chunks/framework.DflgEAq4.js";const q=JSON.parse('{"title":"文字列","description":"","frontmatter":{},"headers":[],"relativePath":"translation/hsp/i_string.md","filePath":"translation/hsp/i_string.md","lastUpdated":null}'),a={name:"translation/hsp/i_string.md"},e=t(`<h1 id="文字列" tabindex="-1">文字列 <a class="header-anchor" href="#文字列" aria-label="Permalink to &quot;文字列&quot;">​</a></h1><p><strong>対応</strong>:</p><ul><li>Win</li><li>Cli</li><li>Let</li></ul><h2 id="getstr" tabindex="-1">getstr <a class="header-anchor" href="#getstr" aria-label="Permalink to &quot;getstr {#getstr}&quot;">​</a></h2><p>バッファから文字列読み出し</p><p><strong>グループ</strong>:</p><p>文字列操作命令</p><p><strong>パラメーター</strong>:</p><pre><code>p1,p2,p3,p4,p5
p1=変数   : 内容を読み出す先の変数名
p2=変数   : バッファを割り当てた変数名
p3=0〜    : バッファのインデックス(Byte単位)
p4=0〜255 : 区切りキャラクタのASCIIコード
p5=0〜(1024) : 読み出しを行なう最大文字数
</code></pre><p><strong>説明</strong>:</p><p>メモリ上のバッファの任意の場所にある内容を文字列として変数に読み出します。 文字列は、00というコードか、改行コードがあるまで読み出されます。改行コードは文字列には含まれません。</p><p>また、区切りキャラクタコードを指定することができ任意の文字で区切られた文字列を取り出すこともできます。</p><p>この命令で読み出されたByte数は自動的に strsizeというシステム変数に代入されます。strsizeは、次のインデックスまでの移動量を得る時に使用します。</p><p>たとえば、変数bのバッファに&#39;A&#39; &#39;B&#39; &#39;C&#39; &#39;,&#39; &#39;D&#39; &#39;E&#39; &#39;F&#39; 00(終了コード)というデータが入っている場合、</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>getstr a,b,0,&#39;,&#39;</span></span></code></pre></div><p>を実行すると、変数aの内容は、&#39;A&#39; &#39;B&#39; &#39;C&#39; の部分が読み出されて&quot;ABC&quot;という文字列になり、strsize は4になります。</p><p>p5パラメーターにより、読み出しを行なう最大文字数(byte数)を指定することができます。 p5パラメーターが省略された場合には、1024文字(byte)までの読み出しを行ないます。 (p1で指定された変数のバッファは自動的に確保されるので、sdim命令等でバッファの設定を行なっておく必要はありません。)</p><p>この命令は、複数行を含むテキスト文字列データや、特定の文字で区切られたデータを効率よく切り出すためのものです。 複数行を含むテキストを扱うためには、他にもメモリノートパッド命令セットがあります。また、文字列から特定数の文字を取り出すためには、strmid命令が用意されています。</p><p><strong>参照</strong>:</p><p>strmid</p><h2 id="noteadd" tabindex="-1">noteadd <a class="header-anchor" href="#noteadd" aria-label="Permalink to &quot;noteadd {#noteadd}&quot;">​</a></h2><p>指定行の追加・変更</p><p><strong>グループ</strong>:</p><p>文字列操作命令</p><p><strong>パラメーター</strong>:</p><pre><code>p1,p2,p3
p1=文字列  : 追加・変更をする文字列または変数名
p2=0〜(-1) : 追加するインデックス
p3=0〜1(0) : 上書きモード指定(0=追加・1=上書き)
</code></pre><p><strong>説明</strong>:</p><p>メモリノートパッドの内容を追加・変更します。</p><p>p1に追加・変更するための文字列を指定します。p2で、対象となるインデックスを指定します。 p2パラメータを省略するか、-1を指定すると最終行が対象になります。 p3パラメータで、追加か上書きかを指定します。省略するか、0を指定すると、追加モードとなり、対象となるインデックス以降が１つづつシフトします。 p3が1の場合は、上書きモードとなり、 対象となるインデックスの内容は消去され、指定した文字列に置き換えられます。</p><p>noteaddは、 変数バッファにsdim命令などであらかじめ確保された容量を超えて内容を追加しようとした場合は、自動的に確保容量を増加させて格納します。 つまり、「sdim a,64」 で６４文字までしか記憶できないメモリバッファであっても、追加するサイズに応じて自動的にメモリサイズを調節して安全に記憶させることができます。</p><p>メモリノートパッド命令(noteget,noteadd,notedel,noteinfo)を使用するためには、最初にnotesel命令で対象となるバッファを設定しなければなりません。</p><p><strong>参照</strong>:</p><p>notesel</p><p><strong>例</strong>:</p><pre><code>sdim a,10000
notesel a
noteadd &quot;newidx1&quot;
noteadd &quot;newidx3&quot;
noteadd &quot;newidx2&quot;,1
mes a
stop
</code></pre><h2 id="notedel" tabindex="-1">notedel <a class="header-anchor" href="#notedel" aria-label="Permalink to &quot;notedel {#notedel}&quot;">​</a></h2><p>行の削除</p><p><strong>グループ</strong>:</p><p>文字列操作命令</p><p><strong>パラメーター</strong>:</p><pre><code>p1
p1=0〜 : 削除するインデックス
</code></pre><p><strong>説明</strong>:</p><p>メモリノートパッドの指定したインデックスを削除します。 p1で指定したインデックスの内容は削除され、以降のインデックスが１つづつシフトします。</p><p>メモリノートパッド命令(noteget,noteadd,notedel,noteinfo)を使用するためには、最初にnotesel命令で対象となるバッファを設定しなければなりません。</p><p><strong>参照</strong>:</p><p>notesel</p><h2 id="noteget" tabindex="-1">noteget <a class="header-anchor" href="#noteget" aria-label="Permalink to &quot;noteget {#noteget}&quot;">​</a></h2><p>指定行を読み込み</p><p><strong>グループ</strong>:</p><p>文字列操作命令</p><p><strong>パラメーター</strong>:</p><pre><code>p1,p2
p1=変数   : 読み出し先の変数名
p2=0〜(0) : 読み出すインデックス
</code></pre><p><strong>説明</strong>:</p><p>メモリノートパッド内の、p2で指定したインデックスの内容をp1で指定された変数に代入します。メモリノートパッド内の任意の行にある内容を読み出すことができます。</p><p>インデックスは0から始まるので注意してください。 p1で指定する変数には、変数バッファにsdim命令などであらかじめ確保された容量を超えて内容を追加しようとした場合は、自動的に確保容量を増加させて格納します。また、p1の変数は強制的に文字列型に変更されます。</p><p>メモリノートパッド命令(noteget,noteadd,notedel,noteinfo)を使用するためには、最初にnotesel命令で対象となるバッファを設定しなければなりません。</p><p><strong>参照</strong>:</p><p>notesel</p><p><strong>例</strong>:</p><pre><code>a=&quot;idx0\\nidx1\\nidx2&quot;
notesel a
noteget b,1
mes b
stop
</code></pre><h2 id="noteinfo" tabindex="-1">noteinfo <a class="header-anchor" href="#noteinfo" aria-label="Permalink to &quot;noteinfo {#noteinfo}&quot;">​</a></h2><p>メモリノートパッド情報取得</p><p><strong>グループ</strong>:</p><p>文字列操作関数</p><p><strong>パラメーター</strong>:</p><pre><code>(p1)
p1(0) : 情報取得モード
</code></pre><p><strong>説明</strong>:</p><p>noteinfo関数は、現在対象となっているメモリノートパッドについての情報を取得します。 p1で情報取得モードを指定します。また、それぞれのモードに対応したマクロが定義されています。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>   モード : マクロ    内容</span></span>
<span class="line"><span> -----------------------------------------------------------</span></span>
<span class="line"><span>      0   : notemax   全体の行数</span></span>
<span class="line"><span>      1   : notesize  全体の文字数(バイト数)</span></span></code></pre></div><p>notemaxマクロは、 複数行の文字列ですべての行に対して繰り返し処理を行ないたい場合などに使用します。 全体の行数とは、つまりメモリノートパッド内にある要素の数です。 「APPLE」「ORANGE」「GRAPE」という行がある場合には、3になります。 この場合、インデックスは0〜2までになります。</p><p>メモリノートパッド命令(noteget,noteadd,notedel,noteinfo)を使用するためには、最初にnotesel命令で対象となるバッファを設定しなければなりません。</p><p><strong>参照</strong>:</p><p>notesel noteget notedel notemax notesize</p><p><strong>例</strong>:</p><pre><code>nmax=0
notesel a
noteload &quot;aaa.txt&quot;
idx=0
repeat notemax
	noteget b,idx
	print &quot;index&quot;+idx+&quot;=&quot;+b
	idx++
loop
stop
</code></pre><h2 id="notesel" tabindex="-1">notesel <a class="header-anchor" href="#notesel" aria-label="Permalink to &quot;notesel {#notesel}&quot;">​</a></h2><p>対象バッファ指定</p><p><strong>グループ</strong>:</p><p>文字列操作命令</p><p><strong>パラメーター</strong>:</p><p>p1 p1=変数 : バッファを割り当てた変数名</p><p><strong>説明</strong>:</p><p>p1で指定した変数をメモリノートパッド命令のバッファに設定します。</p><p>p1で指定した変数は、強制的に文字列型に変更されます。 他のメモリノートパッド命令(noteget,noteadd,notedel,noteinfo)を使用するためには、最初に notesel命令で対象となるバッファを設定しなければなりません。</p><p><strong>参照</strong>:</p><p>noteunsel noteget noteadd notedel noteinfo notemax notesize notefind</p><p><strong>例</strong>:</p><p>notesel a noteadd &quot;test strings&quot; mes a stop</p><h2 id="noteunsel" tabindex="-1">noteunsel <a class="header-anchor" href="#noteunsel" aria-label="Permalink to &quot;noteunsel {#noteunsel}&quot;">​</a></h2><p>対象バッファの復帰</p><p><strong>グループ</strong>:</p><p>文字列操作命令</p><p><strong>パラメーター</strong>:</p><p><strong>説明</strong>:</p><p>noteunsel命令は、notesel命令で対象となるバッファを設定する前に設定されていたバッファ設定に戻します。 noteunsel命令は必ず入れておく必要はありませんが、notesel命令で設定したバッファを使い終わった後に入れておくことで、noteselによるバッファ指定が多重に行なわれることを防止します。</p><p><strong>参照</strong>:</p><p>notesel</p><h2 id="strmid" tabindex="-1">strmid <a class="header-anchor" href="#strmid" aria-label="Permalink to &quot;strmid {#strmid}&quot;">​</a></h2><p>文字列の一部を取り出す</p><p><strong>グループ</strong>:</p><p>文字列操作関数</p><p><strong>パラメーター</strong>:</p><pre><code>(p1,p2,p3)
p1=変数名 : 取り出すもとの文字列が格納されている変数名
p2=-1〜   : 取り出し始めのインデックス
p3=0〜    : 取り出す文字数
</code></pre><p><strong>説明</strong>:</p><p>p1で指定した文字列型変数の中から、 p2,p3で指定した条件で文字を取り出したものを返します。 p2で取り出し始めるインデックスを指定します。これは、文字列の始まり１文字目を0として、1,2,3...と順番に増えていくものです。1から始まりではないので注意してください。 p3で取り出す文字数を指定します。実際に格納されている文字数よりも多く指定した場合は、実際の文字数までが取り出されます。 また、p2に-1を指定すると文字列の右からp3で指定した文字数だけ取り出します。</p><p><strong>例</strong>:</p><pre><code>b=&quot;ABCDEF&quot;
a=strmid(b,-1,3)   ; 右から３文字を取り出す
a=strmid(b,1,3)    ; 左から２文字目から３文字を取り出す
</code></pre><p><strong>参照</strong>:</p><p>getstr</p><h2 id="instr" tabindex="-1">instr <a class="header-anchor" href="#instr" aria-label="Permalink to &quot;instr {#instr}&quot;">​</a></h2><p>文字列の検索をする</p><p><strong>グループ</strong>:</p><p>文字列操作関数</p><p><strong>パラメーター</strong>:</p><pre><code>(p1,p2,&quot;string&quot;)
p1=変数名 : 検索される文字列が格納されている文字列型変数名
p2=0〜(0) : 検索を始めるインデックス
&quot;string&quot;  : 検索する文字列
</code></pre><p><strong>説明</strong>:</p><p>p1で指定した文字列型変数の中に、&quot;string&quot;で指定した文字列があるかどうか調べて、インデックスを返します。</p><p>指定した文字列が見つかった場合には、インデックス値が返されます。これは、文字列の始まり１文字目を0として、1,2,3...と順番に増えていくものです(strmid命令で指定するインデックスと同様です)。 1から始まりではないので注意してください。 (p2を指定した場合、インデックスはp2を起点(0)とするものになります。) (p2がマイナス値の場合は常に-1が返されます。) もし、指定した文字列が見つからなかった場合には-1が返されます。</p><p><strong>参照</strong>:</p><p>strmid strrep notefind</p><h2 id="notesave" tabindex="-1">notesave <a class="header-anchor" href="#notesave" aria-label="Permalink to &quot;notesave {#notesave}&quot;">​</a></h2><p>対象バッファ保存</p><p><strong>グループ</strong>:</p><p>文字列操作命令</p><p><strong>パラメーター</strong>:</p><p>&quot;filename&quot; &quot;filename&quot; : 書き込みファイル名</p><p><strong>説明</strong>:</p><p>メモリノートパッド命令のバッファの内容を指定したファイルにテキストファイルとして保存します。 必ず最初にnotesel命令で対象となるバッファを設定する必要があるので注意してください。 notesave命令は、指定バッファに含まれる文字列の長さで保存します。</p><p><strong>参照</strong>:</p><p>notesel noteload noteget noteadd notedel noteinfo</p><p><strong>非対応</strong>:</p><ul><li>Let</li></ul><h2 id="noteload" tabindex="-1">noteload <a class="header-anchor" href="#noteload" aria-label="Permalink to &quot;noteload {#noteload}&quot;">​</a></h2><p>対象バッファ読み込み</p><p><strong>グループ</strong>:</p><p>文字列操作命令</p><p><strong>パラメーター</strong>:</p><pre><code>&quot;filename&quot;,p1
&quot;filename&quot; : 読み込みファイル名
p1(-1)     : 読み込みサイズの上限値
</code></pre><p><strong>説明</strong>:</p><p>指定したファイルをメモリノートパッド命令のバッファに読み込みます。 通常は、テキストファイルを読み込み、メモリノートパッド命令で読み出す対象とします。 メモリノートパッド命令のバッファは、自動的にファイルのサイズに従って確保サイズが調節されるため、バッファのサイズをあらかじめ指定しておく必要はありません。 p1で、読み込むファイルの最大サイズを指定することができます。 指定を省略またはマイナス値にした場合は、どんなサイズでも読み込みます。 テキストファイル以外のファイルを読み込むことも可能です。 必ず最初にnotesel命令で対象となるバッファを設定する必要があるので注意してください。</p><p><strong>参照</strong>:</p><p>notesel notesave noteget noteadd notedel noteinfo notemax notesize notefind</p><h2 id="getpath" tabindex="-1">getpath <a class="header-anchor" href="#getpath" aria-label="Permalink to &quot;getpath {#getpath}&quot;">​</a></h2><p>パスの一部を取得</p><p><strong>グループ</strong>:</p><p>文字列操作関数</p><p><strong>パラメーター</strong>:</p><pre><code>(p1,p2)
p1=文字列 : 取り出す元の文字列
p2=0〜    : 情報のタイプ指定
</code></pre><p><strong>説明</strong>:</p><p>p1で指定したファイルパスを示す文字列をp2で指定したタイプの情報に変換したものを文字列として返します。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span></span></span>
<span class="line"><span>例 :</span></span>
<span class="line"><span>	a=&quot;c:\\\\disk\\\\test.bmp&quot;</span></span>
<span class="line"><span>	b = getpath(a,8+1)</span></span>
<span class="line"><span>	mes b</span></span>
<span class="line"><span>	↓(結果)</span></span>
<span class="line"><span>	&quot;test&quot;となる</span></span></code></pre></div><p>タイプ指定の詳細は以下の通りです。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>   タイプ : 内容</span></span>
<span class="line"><span> -----------------------------------------------------------</span></span>
<span class="line"><span>     0    : 文字列のコピー(操作なし)</span></span>
<span class="line"><span>     1    : 拡張子を除くファイル名</span></span>
<span class="line"><span>     2    : 拡張子のみ(.???)</span></span>
<span class="line"><span>     8    : ディレクトリ情報を取り除く</span></span>
<span class="line"><span>    16    : 文字列を小文字に変換する</span></span>
<span class="line"><span>    32    : ディレクトリ情報のみ</span></span></code></pre></div><p>タイプ値は、合計することで複数指定を行なうことが可能です。 タイプ16が指定された場合は、すべての英文字列を小文字に変換します。</p><p><strong>参照</strong>:</p><p>getstr instr</p><h2 id="strf" tabindex="-1">strf <a class="header-anchor" href="#strf" aria-label="Permalink to &quot;strf {#strf}&quot;">​</a></h2><p>書式付き文字列を変換</p><p><strong>グループ</strong>:</p><p>文字列操作関数</p><p><strong>パラメーター</strong>:</p><pre><code>(&quot;format&quot;,p1...)
&quot;format&quot; : 書式指定文字列
p1       : 書式指定パラメーター
</code></pre><p><strong>説明</strong>:</p><p>整数または実数値を適切な書式で文字列に変換した文字列を返します。 &quot;format&quot;で、以下のような書式指定文字列を指定します。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span></span></span>
<span class="line"><span>例 :</span></span>
<span class="line"><span>	a=123</span></span>
<span class="line"><span>	mes strf(&quot;10進[%d]&quot;,a)</span></span>
<span class="line"><span>	mes strf(&quot;16進[%x]&quot;,a)</span></span>
<span class="line"><span>	mes strf(&quot;10進桁数指定付き[%05d]&quot;,a)</span></span>
<span class="line"><span>	mes strf(&quot;16進桁数指定付き[%05x]&quot;,a)</span></span>
<span class="line"><span>	a=sqrt(2)</span></span>
<span class="line"><span>	mes strf(&quot;10進実数[%f]&quot;,a)</span></span>
<span class="line"><span>	mes strf(&quot;10進実数桁数指定付き[%3.10f]&quot;,a)</span></span></code></pre></div><p>p1以降で指定したパラメーターを示す部分には、「%」に続く指定を行ないます。 「%d」は整数値を、「%x」は１６進整数値を、「%c」は文字コード、「%f」は実数値をそれぞれ表示させることができます。 複数のパラメーターを書式で指定した場合は、その数だけ「,」で区切ってパラメーターを続けて記述してください。 通常の「%」記号を表示したい場合は、「%%」を指定してください。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>例 :</span></span>
<span class="line"><span>	a=1:b=2.0:c=&quot;ABC&quot;</span></span>
<span class="line"><span>	mes strf(&quot;[%03d] [%f] [%s]&quot;,a,b,c)</span></span></code></pre></div><p>書式指定文字列は、Cランタイムライブラリがサポートしているsprintfの書式とほぼ同様です。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>	%[width][.precision][I64]type</span></span>
<span class="line"><span></span></span>
<span class="line"><span>	width : 出力する最小文字数</span></span>
<span class="line"><span>	precision : 出力する最大文字数</span></span>
<span class="line"><span>	            (typeがfの場合は小数点以下の桁数)</span></span>
<span class="line"><span>	I64   : 64bit値を示すプレフィックス</span></span>
<span class="line"><span>	type  : 入力されるパラメーターの型</span></span></code></pre></div><p>のような形式となり、[]内の記述は省略することが可能です。 typeで指定可能な文字は以下の通りです。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>	文字           内容</span></span>
<span class="line"><span>	---------------------------------------------</span></span>
<span class="line"><span>	  c     1バイト文字コード</span></span>
<span class="line"><span>	  d	符号付き 10 進整数</span></span>
<span class="line"><span>	  i	符号付き 10 進整数</span></span>
<span class="line"><span>	  u	符号なし 10 進整数</span></span>
<span class="line"><span>	  o	符号なし 8 進整数</span></span>
<span class="line"><span>	  x	符号なし 16 進整数(小文字)</span></span>
<span class="line"><span>	  X	符号なし 16 進整数(大文字)</span></span>
<span class="line"><span>	  e	[sign]dd[d] 形式の符号付きの実数値</span></span>
<span class="line"><span>	  E	[sign]dd[d] 形式の符号付きの実数値(大文字)</span></span>
<span class="line"><span>	  f	dddd.dddd 形式の符号付きの実数値</span></span>
<span class="line"><span>		(整数部の桁数は、その数値の絶対値によって決定され、</span></span>
<span class="line"><span>		 小数部の桁数は要求される精度によって決定されます。)</span></span>
<span class="line"><span>	  g	書式fまたはeで出力される符号付きの値のうち、</span></span>
<span class="line"><span>		指定された値および精度を表現できる短い方の書式</span></span>
<span class="line"><span>	  G	書式Gと同様で大文字を使用する</span></span>
<span class="line"><span>	  p	16進数の引数が指すアドレスを出力します</span></span>
<span class="line"><span>	  s	文字列</span></span></code></pre></div><p>書式指定文字列は、1023文字までの文字列のみ認識されますので注意してください。</p><p><strong>参照</strong>:</p><p>mes print</p><h2 id="cnvwtos" tabindex="-1">cnvwtos <a class="header-anchor" href="#cnvwtos" aria-label="Permalink to &quot;cnvwtos {#cnvwtos}&quot;">​</a></h2><p>unicodeを通常文字列に変換</p><p><strong>グループ</strong>:</p><p>文字列操作関数</p><p><strong>パラメーター</strong>:</p><pre><code>(p1)
p1=変数 : 内容を読み出す元の変数名
</code></pre><p><strong>説明</strong>:</p><p>変数に保存されたデータをunicode(UTF-16)として読み取り、 通常の文字列に変換したものを返します。 unicodeデータを扱う場合や、外部DLL、 COMオブジェクトとのデータ変換などで使用することができます。</p><p><strong>参照</strong>:</p><p>cnvstow cnvstoa cnvatos str</p><p><strong>非対応</strong>:</p><ul><li>Let</li></ul><h2 id="cnvstow" tabindex="-1">cnvstow <a class="header-anchor" href="#cnvstow" aria-label="Permalink to &quot;cnvstow {#cnvstow}&quot;">​</a></h2><p>通常文字列をunicodeに変換</p><p><strong>グループ</strong>:</p><p>文字列操作命令</p><p><strong>パラメーター</strong>:</p><p>p1,&quot;string&quot; p1=変数 : 結果を書き込む変数名 &quot;string&quot; : 変換元の文字列</p><p><strong>説明</strong>:</p><p>&quot;文字列&quot;で指定されたデータをunicode(UTF-16)文字列に変換して変数バッファに保存します。 p1で指定される変数には、あらかじめ文字列型として変換に十分なバッファサイズを確保しておく必要があります。 unicodeデータを扱う場合や、外部DLL、 COMオブジェクトへのデータ変換などで使用することができます。</p><p><strong>参照</strong>:</p><p>cnvwtos cnvstoa cnvatos str</p><p><strong>非対応</strong>:</p><ul><li>Let</li></ul><h2 id="strtrim" tabindex="-1">strtrim <a class="header-anchor" href="#strtrim" aria-label="Permalink to &quot;strtrim {#strtrim}&quot;">​</a></h2><p>指定した文字だけを取り除く</p><p><strong>グループ</strong>:</p><p>文字列操作関数</p><p><strong>パラメーター</strong>:</p><pre><code>(p1,p2,p3)
p1=変数 : 元の文字列が代入された変数
p2=0〜3(0) : 除去する位置の指定
p3=0〜65535(32) : 文字コード
</code></pre><p><strong>説明</strong>:</p><p>p1で指定した変数に格納されている文字列の中から指定した文字だけを取り除きます。 p2で、除去する位置の指定を行なうことができます。 p2が省略された場合は、文字列の両端が指定文字だった場合のみ除去されます。 p3で除去する文字コードを指定することができます。 p3が省略された場合は、半角スペース(32)となります。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span></span></span>
<span class="line"><span>例 :</span></span>
<span class="line"><span>	a=&quot; ABC DEF &quot;</span></span>
<span class="line"><span>	b = strtrim(a,0,&#39; &#39;)</span></span>
<span class="line"><span>	mes b</span></span></code></pre></div><p>p2で指定する、除去位置を示す値の詳細は以下の通りです。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span></span></span>
<span class="line"><span>   タイプ : 内容</span></span>
<span class="line"><span> -----------------------------------------------------------</span></span>
<span class="line"><span>     0    : 両端にある指定文字を除去する(デフォルト)</span></span>
<span class="line"><span>     1    : 左端にある指定文字を除去する</span></span>
<span class="line"><span>     2    : 右端にある指定文字を除去する</span></span>
<span class="line"><span>     3    : 文字列内にあるすべての指定文字を除去する</span></span></code></pre></div><p>p3で指定する文字コードには、全角文字を示す2バイトコードを指定することができます。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span></span></span>
<span class="line"><span>例 :</span></span>
<span class="line"><span>	s=&quot;　こんにちは　全角文字です　&quot;</span></span>
<span class="line"><span>	zenspace=&quot;　&quot;				; 全角スペース</span></span>
<span class="line"><span>	code = wpeek(zenspace,0)		; 全角スペースのコードを取得</span></span>
<span class="line"><span>	mes strtrim(s,3,code)</span></span></code></pre></div><p><strong>参照</strong>:</p><p>strmid instr</p><h2 id="split" tabindex="-1">split <a class="header-anchor" href="#split" aria-label="Permalink to &quot;split {#split}&quot;">​</a></h2><p>文字列から分割された要素を代入</p><p><strong>グループ</strong>:</p><p>文字列操作命令</p><p><strong>パラメーター</strong>:</p><pre><code>p1,&quot;string&quot;,p2...
p1=変数  : 元の文字列が代入された変数
&quot;string&quot; : 区切り用文字列
p2=変数  : 分割された要素が代入される変数
</code></pre><p><strong>説明</strong>:</p><p>指定した文字列で分割された要素を変数に代入します。 たとえば、「12,34,56」のように「,」で区切られた文字列から、「12」「34」「56」の要素を取り出して、別々の変数に代入することができます。 p1で、もとの文字列が代入された変数名を指定します。(変数は、文字列型である必要があります) &quot;string&quot;に区切るための文字列を指定します。 p2以降に、分割された要素が代入される変数名を指定します。 代入される変数は、「,」で区切っていくつでも指定することができます。 最初に指定した変数から順番に、分割された要素が代入されます。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span></span></span>
<span class="line"><span>例 :</span></span>
<span class="line"><span>	buf=&quot;12,34,56&quot;</span></span>
<span class="line"><span>	split buf, &quot;,&quot;, a, b, c</span></span>
<span class="line"><span>	mes a</span></span>
<span class="line"><span>	mes b</span></span>
<span class="line"><span>	mes c</span></span></code></pre></div><p>指定された変数の数よりも、もともとの要素の数が少ない場合は、残りの変数に空の文字列(&quot;&quot;)が代入されます。 指定された変数の数よりも、分割された要素が多い場合は、指定された変数の配列に代入されていきます。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span></span></span>
<span class="line"><span>例 :</span></span>
<span class="line"><span>	buf=&quot;12,34,56,78&quot;</span></span>
<span class="line"><span>	split buf, &quot;,&quot;, results</span></span>
<span class="line"><span>	repeat stat</span></span>
<span class="line"><span>		mes &quot;配列(&quot;+cnt+&quot;)=&quot;+results(cnt)</span></span>
<span class="line"><span>	loop</span></span></code></pre></div><p>実行後に、システム変数statに分割できた数が代入されます。</p><p><strong>参照</strong>:</p><p>getstr csvnote</p><p><strong>非対応</strong>:</p><ul><li>Let</li></ul><h2 id="strrep" tabindex="-1">strrep <a class="header-anchor" href="#strrep" aria-label="Permalink to &quot;strrep {#strrep}&quot;">​</a></h2><p>文字列の置換をする</p><p><strong>グループ</strong>:</p><p>文字列操作命令</p><p><strong>パラメーター</strong>:</p><pre><code>p1,&quot;検索文字列&quot;,&quot;置換文字列&quot;
p1=変数名 : 検索される文字列が格納されている文字列型変数名
&quot;検索文字列&quot; : 検索する文字列
&quot;置換文字列&quot; : 置換する文字列
</code></pre><p><strong>説明</strong>:</p><p>p1で指定した文字列型変数の内容すべてにおいて、 &quot;検索文字列&quot;で指定した文字列を、&quot;置換文字列&quot;に置き換えます。</p><p>実行後、システム変数statに文字列を置換した回数が代入されます。</p><p><strong>参照</strong>:</p><p>instr</p><h2 id="notefind" tabindex="-1">notefind <a class="header-anchor" href="#notefind" aria-label="Permalink to &quot;notefind {#notefind}&quot;">​</a></h2><p>メモリノートパッド検索</p><p><strong>グループ</strong>:</p><p>文字列操作関数</p><p><strong>パラメーター</strong>:</p><pre><code>(&quot;string&quot;,p1)
&quot;string&quot; : 検索する文字列
p1(0)    : 検索モード
</code></pre><p><strong>説明</strong>:</p><p>現在対象となっているメモリノートパッドの中から、特定の文字列を含む行を検索します。 p1で検索モードを指定します。それぞれのモードに対応したマクロが定義されています。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span></span></span>
<span class="line"><span>   モード : マクロ            内容</span></span>
<span class="line"><span> -----------------------------------------------------------</span></span>
<span class="line"><span>      0   : notefind_match    &quot;string&quot;と完全に一致した行を検索</span></span>
<span class="line"><span>      1   : notefind_first    &quot;string&quot;で始まる行を検索</span></span>
<span class="line"><span>      2   : notefind_instr    &quot;string&quot;を含む行を検索</span></span></code></pre></div><p>メモリノートパッドのすべての行から、指定された文字列と一致する行(インデックス)が戻り値となります。 検索に一致する行がない場合は、-1が返されます。</p><p>notefind関数を使用するためには、最初にnotesel命令で対象となるバッファを設定しなければなりません。</p><p><strong>参照</strong>:</p><p>notesel noteget notedel notemax notesize</p><h2 id="cnvatos" tabindex="-1">cnvatos <a class="header-anchor" href="#cnvatos" aria-label="Permalink to &quot;cnvatos {#cnvatos}&quot;">​</a></h2><p>ANSI文字列を通常文字列に変換 %note hsp3utf.asをインクルードすること。</p><p><strong>グループ</strong>:</p><p>文字列操作関数</p><p><strong>パラメーター</strong>:</p><pre><code>(p1)
p1=変数 : 内容を読み出す元の変数名
</code></pre><p><strong>説明</strong>:</p><p>変数に保存されたデータをANSI(ShiftJIS)文字列として読み取り、 通常の文字列に変換したものを返します。 この命令は、UTF-8を標準の文字列コードとして扱うランタイム(hsp3utf)上でのみ動作します。標準のHSP3ではエラーとなりますので注意してください。</p><p><strong>参照</strong>:</p><p>cnvstow cnvwtos cnvstoa str</p><p><strong>非対応</strong>:</p><ul><li>Let</li></ul><h2 id="cnvstoa" tabindex="-1">cnvstoa <a class="header-anchor" href="#cnvstoa" aria-label="Permalink to &quot;cnvstoa {#cnvstoa}&quot;">​</a></h2><p>通常文字列をANSI文字列に変換 %note hsp3utf.asをインクルードすること。</p><p><strong>グループ</strong>:</p><p>文字列操作命令</p><p><strong>パラメーター</strong>:</p><pre><code>p1,&quot;string&quot;
p1=変数  : 結果を書き込む変数名
&quot;string&quot; : 変換元の文字列
</code></pre><p><strong>説明</strong>:</p><p>&quot;文字列&quot;で指定されたデータをANSI(ShiftJIS)文字列に変換して変数バッファに保存します。 p1で指定される変数には、あらかじめ文字列型として変換に十分なバッファサイズを確保しておく必要があります。 この命令は、UTF-8を標準の文字列コードとして扱うランタイム(hsp3utf)上でのみ動作します。標準のHSP3ではエラーとなりますので注意してください。</p><p><strong>参照</strong>:</p><p>cnvstow cnvwtos cnvatos str</p><p><strong>非対応</strong>:</p><ul><li>Let</li></ul><h2 id="strexchange" tabindex="-1">strexchange <a class="header-anchor" href="#strexchange" aria-label="Permalink to &quot;strexchange {#strexchange}&quot;">​</a></h2><p>スクリプト内の文字列を置き換える</p><p><strong>グループ</strong>:</p><p>文字列操作命令</p><p><strong>パラメーター</strong>:</p><pre><code>&quot;filename&quot;,p1
&quot;filename&quot; : 置き換え文字列(strmap)が記録されたファイル名
p1(0)      : 置き換えオプション
</code></pre><p><strong>説明</strong>:</p><p>スクリプトに含まれる文字列データをすべてまとめて置き換えます。 あらかじめ、置き換え文字列とハッシュコードが記録されたファイル(strmap)を用意しておく必要があります。 (strmapは、hspcmpコマンドかまたは、hspcmpプラグイン命令により生成することができます。詳しくは、sample/new36/strex_test1.hspサンプルを参照してください) &quot;filename&quot;で指定されたファイル(strmap)をもとに、スクリプト内の文字列が置き換えられます。 p1で置き換えオプションを指定します。 p1が0の場合は、該当するハッシュコードの文字列のみを変換します。 p1が1の場合は、置き換えデータ(strmap)内にあるすべてのハッシュコードが一致しない場合は置き換えを実行しません。 strexchange実行後に、システム変数statに結果が代入されます。 システム変数statが0の場合は正常終了、それ以外の場合はエラーがあったことを示してします。</p><p><strong>非対応</strong>:</p><ul><li>Let</li></ul>`,287),o=[e];function r(i,l,d,c,g,u){return p(),s("div",null,o)}const b=n(a,[["render",r]]);export{q as __pageData,b as default};

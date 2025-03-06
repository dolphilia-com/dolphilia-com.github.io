import{_ as a,c as n,o as s,a3 as p}from"./chunks/framework.DflgEAq4.js";const f=JSON.parse('{"title":"動的従属性","description":"","frontmatter":{},"headers":[],"relativePath":"translation/ninja/dynamic_dependencies.md","filePath":"translation/ninja/dynamic_dependencies.md","lastUpdated":null}'),e={name:"translation/ninja/dynamic_dependencies.md"},t=p(`<h1 id="動的従属性" tabindex="-1">動的従属性 <a class="header-anchor" href="#動的従属性" aria-label="Permalink to &quot;動的従属性&quot;">​</a></h1><p>Available since Ninja 1.10.</p><p>一部のユースケースでは、最初の実行時に正しくビルドするために、ビルド中にソースファイルのコンテンツから暗黙の依存情報を動的に検出する必要があります（例：Fortranモジュールの依存性）。これは、2回目以降の実行時にのみ正しく再構築するために必要とされるヘッダ依存性とは異なります。build文は、動的依存性情報をファイルから読み込む必要があることを指定するために、その入力の1つを指定するdyndepバインディングを持つことができます。たとえば、次のようになります。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>build out: ... || foo</span></span>
<span class="line"><span>  dyndep = foo</span></span>
<span class="line"><span>build foo: ...</span></span></code></pre></div><p>これは、ファイルfooがdyndepファイルであることを指定するものである。これは入力であるため、fooがビルドされる前にoutのビルド文が実行されることはない。foo が終了するとすぐに Ninja はそれを読み込んで、動的に発見された out の依存情報をロードします。このとき、暗黙の入力や出力が追加されることがある。Ninjaはそれに応じてビルドグラフを更新し、あたかもその情報が元々あったかのようにビルドを進める。</p><h2 id="dyndepファイルリファレンス" tabindex="-1">Dyndepファイルリファレンス <a class="header-anchor" href="#dyndepファイルリファレンス" aria-label="Permalink to &quot;Dyndepファイルリファレンス&quot;">​</a></h2><p>dyndepバインディングで指定されたファイルは、忍者ビルドファイルと同じ字句の構文を使用し、以下のようなレイアウトになります。</p><p>1:</p><p><code>&lt;major&gt;[.&lt;minor&gt;][&lt;suffix&gt;]</code> という形式のバージョン番号。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>ninja_dyndep_version = 1</span></span></code></pre></div><p>現在、バージョン番号は常に1または1.0でなければならないが、任意の接尾辞を付けることができる。</p><p>2:</p><p>形式の1つまたは複数のビルドステートメント。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>build out | imp-outs... : dyndep | imp-ins...</span></span></code></pre></div><p>すべてのステートメントは、正確に1つの明示的な出力を指定し、ルール名dyndepを使用しなければなりません。 imp-outs...と｜imp-ins...の部分は任意です。</p><p>3: 各ビルドステートメントにオプションのrestat変数バインディングを設定します。</p><p>dyndepファイルのbuild文は、dyndepバインディングでdyndepファイルを名付けるninja buildファイルのbuild文と一対一の対応を持っていなければならない。dyndepのビルド文を省略したり、追加のビルド文を指定することはできない。</p><h2 id="dyndep-例" tabindex="-1">Dyndep 例 <a class="header-anchor" href="#dyndep-例" aria-label="Permalink to &quot;Dyndep 例&quot;">​</a></h2><h3 id="fortranモジュール" tabindex="-1">Fortranモジュール <a class="header-anchor" href="#fortranモジュール" aria-label="Permalink to &quot;Fortranモジュール&quot;">​</a></h3><p>モジュール foo.mod を提供する Fortran ソースファイル foo.f90 (コンパイルの暗黙の出力) と、そのモジュールを使用する別のソースファイル bar.f90 (コンパイルの暗黙の入力) があるとします。この暗黙の依存関係は、foo.f90より先にbar.f90がコンパイルされることがなく、foo.modが変更されるとbar.f90が再コンパイルされるように、どちらのソースもコンパイル前に発見されなければなりません。これを実現するには、次のようにします。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>rule f95</span></span>
<span class="line"><span>  command = f95 -o $out -c $in</span></span>
<span class="line"><span>rule fscan</span></span>
<span class="line"><span>  command = fscan -o $out $in</span></span>
<span class="line"><span></span></span>
<span class="line"><span>build foobar.dd: fscan foo.f90 bar.f90</span></span>
<span class="line"><span></span></span>
<span class="line"><span>build foo.o: f95 foo.f90 || foobar.dd</span></span>
<span class="line"><span>  dyndep = foobar.dd</span></span>
<span class="line"><span>build bar.o: f95 bar.f90 || foobar.dd</span></span>
<span class="line"><span>  dyndep = foobar.dd</span></span></code></pre></div><p>この例では、順序のみの依存関係により、foobar.ddはどちらのソースもコンパイルされる前に生成されます。仮想的なfscanツールはソースファイルをスキャンし、それぞれが同じ名前の.oにコンパイルされると仮定し、次のような内容のfoobar.ddを書き込みます。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>ninja_dyndep_version = 1</span></span>
<span class="line"><span>build foo.o | foo.mod: dyndep</span></span>
<span class="line"><span>build bar.o: dyndep |  foo.mod</span></span></code></pre></div><p>Ninjaはこのファイルをロードして、foo.oの暗黙の出力とbar.oの暗黙の入力としてfoo.modを追加する。これにより、Fortranソースが常に正しい順序でコンパイルされ、必要時にリコンパイルされる。</p><h3 id="ターボール抽出" tabindex="-1">ターボール抽出 <a class="header-anchor" href="#ターボール抽出" aria-label="Permalink to &quot;ターボール抽出&quot;">​</a></h3><p>抽出したいtarball foo.tarがあるとする。抽出時間はfoo.tar.stampファイルで記録しておけば、tarballが変更されても抽出が繰り返されますが、出力のいずれかが欠落している場合は再抽出したいとも思います。しかし、出力のリストはtarballの内容に依存し、ninjaのビルドファイルで明示的に記述することはできません。次のようにすれば実現できます。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>rule untar</span></span>
<span class="line"><span>  command = tar xf $in &amp;&amp; touch $out</span></span>
<span class="line"><span>rule scantar</span></span>
<span class="line"><span>  command = scantar --stamp=$stamp --dd=$out $in</span></span>
<span class="line"><span>build foo.tar.dd: scantar foo.tar</span></span>
<span class="line"><span>  stamp = foo.tar.stamp</span></span>
<span class="line"><span>build foo.tar.stamp: untar foo.tar || foo.tar.dd</span></span>
<span class="line"><span>  dyndep = foo.tar.dd</span></span></code></pre></div><p>この例では、順序のみの依存関係は、tarball が展開される前に foo.tar.dd がビルドされることを保証します。仮想的な scantar ツールは、(例えば tar tf を使って) tarball を読み、次のような内容を持つ foo.tar.dd を書き出します。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>ninja_dyndep_version = 1</span></span>
<span class="line"><span>build foo.tar.stamp | file1.txt file2.txt : dyndep</span></span>
<span class="line"><span>  restat = 1</span></span></code></pre></div><p>Ninjaはこのファイルを読み込んで、foo.tar.stampの暗黙の出力としてfile1.txtとfile2.txtを追加し、再フォーマットのためにビルド文をマークします。今後のビルドでは、暗黙の出力が欠落した場合、tarballは再び展開される。restatバインディングは、暗黙の出力がtarball自身よりも新しい修正時刻を持っていないことを許容するようにNinjaに指示する（ビルド毎に再解凍するのを避ける）。</p>`,30),o=[t];function i(d,l,c,r,u,b){return s(),n("div",null,o)}const m=a(e,[["render",i]]);export{f as __pageData,m as default};

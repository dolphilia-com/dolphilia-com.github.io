import{_ as t,D as n,c as r,j as s,a as i,I as a,w as o,a3 as l,o as p}from"./chunks/framework.DflgEAq4.js";const L=JSON.parse('{"title":"Vivliostyle Viewer","description":"","frontmatter":{},"headers":[],"relativePath":"translation/vivliostyle/vivliostyle-viewer.md","filePath":"translation/vivliostyle/vivliostyle-viewer.md","lastUpdated":null}'),h={name:"translation/vivliostyle/vivliostyle-viewer.md"},d=l('<h1 id="vivliostyle-viewer" tabindex="-1">Vivliostyle Viewer <a class="header-anchor" href="#vivliostyle-viewer" aria-label="Permalink to &quot;Vivliostyle Viewer&quot;">​</a></h1><p>Vivliostyle Viewer は、HTML+CSS文書を組版・表示するWebアプリケーションです。</p><nav class="table-of-contents"><ul><li><a href="#使い方">使い方</a><ul><li><a href="#vivliostyle-viewer-をローカル環境で利用するには">Vivliostyle Viewer をローカル環境で利用するには</a></li><li><a href="#オンライン公開-vivliostyle-viewer">オンライン公開 Vivliostyle Viewer</a></li><li><a href="#vivliostyle-viewer-を自分のサイトに配置">Vivliostyle Viewer を自分のサイトに配置</a></li><li><a href="#vivliostyle-viewer-のスタートページ">Vivliostyle Viewer のスタートページ</a></li></ul></li><li><a href="#サポートされている文書の種類">サポートされている文書の種類</a><ul><li><a href="#メモ">メモ</a></li></ul></li><li><a href="#urlパラメータのオプション">URLパラメータのオプション</a></li><li><a href="#表示するhtml文書の指定">表示するHTML文書の指定</a></li><li><a href="#epub">EPUB</a></li><li><a href="#web出版物-複数html文書">Web出版物（複数HTML文書）</a><ul><li><a href="#htmlの目次">HTMLの目次</a></li></ul></li><li><a href="#目次パネル">目次パネル</a></li><li><a href="#見開きビューモード">見開きビューモード</a></li><li><a href="#スタイルシートの追加-カスタム・スタイルシート">スタイルシートの追加（カスタム・スタイルシート）</a><ul><li><a href="#ユーザー・スタイルシート">ユーザー・スタイルシート</a></li><li><a href="#設定パネルでのカスタム・スタイル設定">設定パネルでのカスタム・スタイル設定</a></li></ul></li><li><a href="#印刷-pdfとして出力">印刷／PDFとして出力</a><ul><li><a href="#vivliostyle-cli">Vivliostyle CLI</a></li></ul></li><li><a href="#サポートされているcssの機能">サポートされているCSSの機能</a></li></ul></nav><h2 id="使い方" tabindex="-1">使い方 <a class="header-anchor" href="#使い方" aria-label="Permalink to &quot;使い方&quot;">​</a></h2><h3 id="vivliostyle-viewer-をローカル環境で利用するには" tabindex="-1">Vivliostyle Viewer をローカル環境で利用するには <a class="header-anchor" href="#vivliostyle-viewer-をローカル環境で利用するには" aria-label="Permalink to &quot;Vivliostyle Viewer をローカル環境で利用するには&quot;">​</a></h3><p>Vivliostyle Viewer をローカル環境で利用するには、Vivliostyle CLI の preview コマンドを使うのが便利です。Vivliostyle CLI のインストール方法と使い方については、<a href="./vivliostyle-cli.html">Vivliostyle CLI ユーザーガイド</a>、preview コマンドについては <a href="./vivliostyle-cli.html#組版結果のプレビュー">組版結果のプレビュー</a> をご覧ください。</p><p>それ以外の方法で Vivliostyle Viewer をローカル環境で利用する場合は、配布パッケージに同梱の <a href="https://github.com/vivliostyle/vivliostyle.js/blob/master/packages/viewer/README.ja.md" target="_blank" rel="noreferrer">README</a> に記載の「使い方」の手順にしたがってWebサーバーを起動してください。</p><h3 id="オンライン公開-vivliostyle-viewer" tabindex="-1">オンライン公開 Vivliostyle Viewer <a class="header-anchor" href="#オンライン公開-vivliostyle-viewer" aria-label="Permalink to &quot;オンライン公開 Vivliostyle Viewer&quot;">​</a></h3><p>オンラインで公開されている <a href="https://vivliostyle.org/viewer/" target="_blank" rel="noreferrer">vivliostyle.org/viewer/</a> も利用でき、これは常に最新のリリース版に更新されています。いち早く最新のバージョンを試したい場合は、<a href="https://vivliostyle.vercel.app" target="_blank" rel="noreferrer">vivliostyle.vercel.app</a>を利用してください。</p><h3 id="vivliostyle-viewer-を自分のサイトに配置" tabindex="-1">Vivliostyle Viewer を自分のサイトに配置 <a class="header-anchor" href="#vivliostyle-viewer-を自分のサイトに配置" aria-label="Permalink to &quot;Vivliostyle Viewer を自分のサイトに配置&quot;">​</a></h3><p>Vivliostyle Viewer の配布パッケージ（<a href="https://vivliostyle.org/ja/download/" target="_blank" rel="noreferrer">https://vivliostyle.org/ja/download/</a> からダウンロード）を解凍したものを自分のサイトに配置すれば、自分のサイトで Vivliostyle Viewer で閲覧する出版物を公開することができます。</p><p>Node.js のアプリケーションで利用するには、npmパッケージ版の <a href="https://www.npmjs.com/package/@vivliostyle/viewer" target="_blank" rel="noreferrer">@vivliostyle/viewer</a> を使用してください。</p><h3 id="vivliostyle-viewer-のスタートページ" tabindex="-1">Vivliostyle Viewer のスタートページ <a class="header-anchor" href="#vivliostyle-viewer-のスタートページ" aria-label="Permalink to &quot;Vivliostyle Viewer のスタートページ&quot;">​</a></h3>',13),c=s("strong",null,"Book Mode",-1),k=s("strong",null,"Render All Pages",-1),g=l('<h2 id="サポートされている文書の種類" tabindex="-1">サポートされている文書の種類 <a class="header-anchor" href="#サポートされている文書の種類" aria-label="Permalink to &quot;サポートされている文書の種類&quot;">​</a></h2><ul><li>HTML文書＋ページメディア用のCSS</li><li>本のような出版物（目次付き） (<strong>Book Mode</strong>: オン) <ul><li>Web出版物（複数のHTML文書からなるコレクション）: 最初のHTMLまたはマニフェストファイルのURLを指定します。</li><li>ZIP解凍済みのEPUB: OPFファイルのURLまたは解凍されたEPUBファイルのトップディレクトリを指定します。</li></ul></li></ul><h3 id="メモ" tabindex="-1">メモ <a class="header-anchor" href="#メモ" aria-label="Permalink to &quot;メモ&quot;">​</a></h3><ul><li>GitHubとGistのURLを直接指定することができます。そのようなURLが指定された場合、Vivliostyle は github/gist の raw コンテンツをロードします。</li><li>⚠️Mixedコンテンツ（“http:” のURLが “https:” の Vivliostyle Viewer に指定された場合）は通常ブラウザによってブロックされます。</li><li>⚠️Cross-Origin（異なるドメインへのリクエスト）は、サーバーが Cross-Origin Resource Sharing (CORS) を許可するように設定されていない限り、通常はブラウザによってブロックされます。</li></ul><h2 id="urlパラメータのオプション" tabindex="-1">URLパラメータのオプション <a class="header-anchor" href="#urlパラメータのオプション" aria-label="Permalink to &quot;URLパラメータのオプション&quot;">​</a></h2><ul><li>#<strong>src</strong>=&lt;document URL&gt;</li><li>&amp;<strong>bookMode</strong>=[<strong>true</strong> | <strong>false</strong>] (<strong>Book Mode</strong>) <ul><li><strong>true</strong> (デフォルト): 本のような出版物（目次付き）用 <ul><li>HTML文書のURLが指定された場合、その出版物マニフェストまたは目次（<code>&lt;nav role=&quot;doc-toc&quot;&gt;</code> などでマークアップ）からリンクされた一連のHTML文書が自動的に読み込まれます。</li></ul></li><li><strong>false</strong>: 単体のHTML文書用</li></ul></li><li>&amp;<strong>renderAllPages</strong>=[<strong>true</strong> | <strong>false</strong>] (<strong>Render All Pages</strong>) <ul><li><strong>true</strong> (デフォルト): 印刷用（すべてのページが印刷可能で、ページ番号は期待されるとおりに機能します）</li><li><strong>false</strong>: 閲覧用（おおまかなページ番号を使って、クイックロード）</li></ul></li><li>&amp;<strong>spread</strong>=[<strong>true</strong> | <strong>false</strong> | <strong>auto</strong>] (<strong>Page Spread View</strong>) <ul><li><strong>true</strong>: 見開き表示</li><li><strong>false</strong>: 単一ページ表示</li><li><strong>auto</strong> (デフォルト): 自動見開き表示</li></ul></li><li>&amp;<strong>style</strong>=&lt;追加の（カスタム）スタイルシートのURL&gt;</li><li>&amp;<strong>userStyle</strong>=&lt;ユーザー・スタイルシートのURL&gt;</li></ul><p>オプションは設定パネル（<strong>Settings</strong>）でも設定できます。</p><p><strong>NOTE:</strong> Book Modeのデフォルトは以前はオフでしたが、Vivliostyle Viewer v2.18.0 からオンに変更されました。デフォルトで有効なのでパラメータ <code>&amp;bookMode=true</code> の指定は省略することができます。HTMLファイル内の目次のリンク先のHTML文書を連結しないで最初のHTMLファイルだけを表示するには、<code>&amp;bookMode=false</code> を指定してください。</p><h2 id="表示するhtml文書の指定" tabindex="-1">表示するHTML文書の指定 <a class="header-anchor" href="#表示するhtml文書の指定" aria-label="Permalink to &quot;表示するHTML文書の指定&quot;">​</a></h2><p>HTMLファイルを Vivliostyle Viewer で表示するには、Webサーバーが読み込める場所（上記手順にしたがってWebサーバーを起動している場合は、配布パッケージを解凍してできたフォルダ内）にそのファイル（およびそのファイルから読み込まれるCSSや画像ファイル）を置いた上で、次のようにパラメータを付加したURLをブラウザで開きます:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>⟨Vivliostyle ViewerのURL⟩#src=⟨表示するファイルのURL (Vivliostyle Viewerからの相対)⟩</span></span></code></pre></div><p>注: Vivliostyle Viewer 本体とは別ドメインの文書を読み込もうとする場合、文書があるWebサーバーの設定によって、文書が読み込めない場合があります。文書を読み込ませるためには、サーバー側で CORS (Cross-Origin Resource Sharing)の設定が必要です。</p><p>注: 数式の表示（MathMLおよびTeX形式に対応）にインターネット上のJavaScriptライブラリー(<a href="https://www.mathjax.org" target="_blank" rel="noreferrer">MathJax</a>)を使用するため、文書に数式が含まれる場合はインターネット接続が必要です。</p>',13),v=l('<h2 id="epub" tabindex="-1">EPUB <a class="header-anchor" href="#epub" aria-label="Permalink to &quot;EPUB&quot;">​</a></h2><p>Vivliostyle ViewerではZIP解凍済みのEPUBファイルを表示することができます。この場合、次のようにパラメータを指定します:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>#src=⟨表示する解凍済みEPUBフォルダのURL⟩&amp;bookMode=true</span></span></code></pre></div><p>GitHub上に公開されているZIP解凍済みのEPUBファイルを表示する例:</p>',4),u=s("p",null,[s("a",{href:"https://github.com/IDPF/epub3-samples/",target:"_blank",rel:"noreferrer"},"IDPF/epub3-samples"),i("の 『"),s("a",{href:"https://github.com/IDPF/epub3-samples/tree/master/30/accessible_epub_3/",target:"_blank",rel:"noreferrer"},"Accessible EPUB 3"),i("』")],-1),y=l('<h2 id="web出版物-複数html文書" tabindex="-1">Web出版物（複数HTML文書） <a class="header-anchor" href="#web出版物-複数html文書" aria-label="Permalink to &quot;Web出版物（複数HTML文書）&quot;">​</a></h2><p>Vivliostyle ViewerではWeb出版物（複数のHTML文書からなるコレクション）を表示することができます。この場合、次のようにパラメータを指定します:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>#src=⟨最初のHTML文書またはマニフェストファイルのURL⟩&amp;bookMode=true</span></span></code></pre></div><p>Web出版物のマニフェストの形式については、W3Cドラフトの <a href="https://www.w3.org/TR/pub-manifest/" target="_blank" rel="noreferrer">Publication Manifest</a> および <a href="https://github.com/readium/webpub-manifest/" target="_blank" rel="noreferrer">Readium Web Publication Manifest</a> をサポートしています。</p><h3 id="htmlの目次" tabindex="-1">HTMLの目次 <a class="header-anchor" href="#htmlの目次" aria-label="Permalink to &quot;HTMLの目次&quot;">​</a></h3><p>Web出版物のマニフェストが存在しなくても、指定したHTML文書内の目次要素内に他のHTML文書へのリンクがある場合は、それらの文書が自動的にロードされます。Vivliostyle はHTML文書内の次のCSSセレクタにマッチする要素を目次要素として扱います: <code>[role=doc-toc], [role=directory], nav li, .toc, #toc</code></p><p>Web上に公開されている複数のHTML文書からなる出版物を表示する例:</p>',7),E=s("p",null,[s("a",{href:"https://www.w3.org/TR/CSS2/",target:"_blank",rel:"noreferrer"},"Cascading Style Sheets Level 2 Revision 1 (CSS 2.1) Specification")],-1),b=l(`<h2 id="目次パネル" tabindex="-1">目次パネル <a class="header-anchor" href="#目次パネル" aria-label="Permalink to &quot;目次パネル&quot;">​</a></h2><p><code>&amp;bookMode=true</code>（あるいは <strong>Book Mode</strong> チェックボックス On）を指定すると、単一のHTMLファイルでも<a href="#Web出版物（複数HTML文書）">Web出版物</a>と同様に、HTML内に目次要素があれば目次パネル（画面左上の目次アイコンをクリックして開く）が有効になります。</p><h2 id="見開きビューモード" tabindex="-1">見開きビューモード <a class="header-anchor" href="#見開きビューモード" aria-label="Permalink to &quot;見開きビューモード&quot;">​</a></h2><p>Vivliostyle Viewer は、表示領域の横幅が大きいとき（高さの1.45倍以上）、自動的に見開きページ表示にします。これを変えるには次の指定をURLに追加します:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>&amp;spread=true（常に見開きページ表示）</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>&amp;spread=false（常に単ページ表示）</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>&amp;spread=auto（自動切り替え＝デフォルト）</span></span></code></pre></div><p>Vivliostyle Viewer の設定パネル（画面右上のアイコンをクリックして開く）でも、ページ表示モードの変更ができます。</p><h2 id="スタイルシートの追加-カスタム・スタイルシート" tabindex="-1">スタイルシートの追加（カスタム・スタイルシート） <a class="header-anchor" href="#スタイルシートの追加-カスタム・スタイルシート" aria-label="Permalink to &quot;スタイルシートの追加（カスタム・スタイルシート）&quot;">​</a></h2><p>HTMLファイルに指定されているスタイルシートに加えて、追加のスタイルシート（CSSファイル）を指定することができます。これにより文書のスタイルをカスタマイズするためのカスタム・スタイルシートを指定することができます。追加のスタイルシート（カスタム・スタイルシート）を使うには、次の指定をURLに追加します:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>&amp;style=⟨スタイルシートのURL (Vivliostyle Viewer からの相対)⟩</span></span></code></pre></div><p>この方法で指定したスタイルシートは、HTMLファイルで指定されているスタイルシートと同様（制作者スタイルシート）の扱いで、よりあとに指定されたことになるので、CSSのカスケーディング規則により、HTMLファイルからのスタイルの指定を上書きすることになります。</p><h3 id="ユーザー・スタイルシート" tabindex="-1">ユーザー・スタイルシート <a class="header-anchor" href="#ユーザー・スタイルシート" aria-label="Permalink to &quot;ユーザー・スタイルシート&quot;">​</a></h3><p>これに対して、次のようにしてユーザー・スタイルシート（スタイル指定に <code>!important</code> を付けないかぎり、制作者スタイルシートのスタイル指定を上書きしない）の指定もできます:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>&amp;userStyle=⟨ユーザー・スタイルシートのURL (Vivliostyle Viewer からの相対)⟩</span></span></code></pre></div><p>複数個の <code>&amp;style=</code> あるいは <code>&amp;userStyle=</code> を使うことで、複数個のスタイルシートを指定できます。</p><p>データURLも利用できます。例えば:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>&amp;style=data:,html{writing-mode:vertical-rl}</span></span></code></pre></div><h3 id="設定パネルでのカスタム・スタイル設定" tabindex="-1">設定パネルでのカスタム・スタイル設定 <a class="header-anchor" href="#設定パネルでのカスタム・スタイル設定" aria-label="Permalink to &quot;設定パネルでのカスタム・スタイル設定&quot;">​</a></h3><p>カスタム・スタイルの設定は、設定パネルの <strong>Custom Style Settings</strong> からも行うことができます。設定内容のCSSは設定パネルの <strong>Edit CSS</strong> で確認することができます（CSSコードをそこで追加することもできます）。</p><p>Web上に公開されている文書に、設定パネルからカスタム・スタイルの設定を加えた例:</p><ul><li><a href="https://www.w3.org/TR/CSS2/" target="_blank" rel="noreferrer">Cascading Style Sheets Level 2 Revision 1 (CSS 2.1) Specification</a></li></ul><div class="language-css vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/*&lt;viewer&gt;*/</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">@page</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">size</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: A4; }</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/*&lt;/viewer&gt;*/</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">@page</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> :first</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  @</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">top-left</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    content</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">none</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  @top-right</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    content</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: none;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  @bottom-center</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    content</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: none;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">@page</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> :left</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  font-size</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0.8</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">rem</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  @</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">top-left</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    content</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: env(pub-title);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  @bottom-center</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    content</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: counter(page);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">@page</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> :right</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  font-size</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0.8</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">rem</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  @</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">top-right</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    content</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: env(doc-title);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  @bottom-center</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    content</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: counter(page);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p>この例のように、設定パネルからスタイルの設定を行うと、カスタム・スタイルのCSS内のコメント <code>/*&lt;viewer&gt;*/</code> と <code>/*&lt;/viewer&gt;*/</code> で囲んだ部分に、設定パネルの項目から設定したスタイルのCSSコードが生成され、設定パネルの <strong>Edit CSS</strong> に表示されます。ユーザー独自のCSSコードをそれに追加することができます。この例ではページヘッダーとページフッターを追加しています。</p><h2 id="印刷-pdfとして出力" tabindex="-1">印刷／PDFとして出力 <a class="header-anchor" href="#印刷-pdfとして出力" aria-label="Permalink to &quot;印刷／PDFとして出力&quot;">​</a></h2><p>ブラウザの印刷・PDF保存機能を利用して、レンダリングされたドキュメントをPDFに変換できます。</p><p>例えば、Google Chrome で PDF に出力するには、メニューから「印刷」を開き、出力先として「PDFに保存」、背景のグラフィック ON と指定して「保存」します。</p><p>注: 文書の全ページを印刷する場合、設定パネルで <strong>Render All Pages</strong> が On になっていることを確認してください。これが Off の場合、すでに表示されたページしか印刷できず、またページ番号が正しく出力されません。</p><h3 id="vivliostyle-cli" tabindex="-1">Vivliostyle CLI <a class="header-anchor" href="#vivliostyle-cli" aria-label="Permalink to &quot;Vivliostyle CLI&quot;">​</a></h3><p><a href="https://github.com/vivliostyle/vivliostyle-cli" target="_blank" rel="noreferrer">Vivliostyle CLI</a> を使うとコマンドラインからPDFに出力できます。印刷に適したPDF/X-1a形式への変換も可能です。</p><h2 id="サポートされているcssの機能" tabindex="-1">サポートされているCSSの機能 <a class="header-anchor" href="#サポートされているcssの機能" aria-label="Permalink to &quot;サポートされているCSSの機能&quot;">​</a></h2><p>VivliostyleがサポートするCSSの機能については <a href="./supported-css-features.html">サポートする CSS 機能</a> を参照してください。</p>`,32);function m(_,f,w,C,V,S){const e=n("Link");return p(),r("div",null,[d,s("p",null,[i("パラメータを指定しないで "),a(e,{path:"/viewer/"},{default:o(()=>[i("Vivliostyle Viewer")]),_:1}),i(" を開くと、文書URLの入力欄 (“Input a document URL”)、 "),c,i(" と "),k,i(" のチェックボックス、および使い方のヘルプが表示されます。")]),s("p",null,[i("試してみる: "),a(e,{path:"/viewer/"})]),g,s("p",null,[i("例: HTMLファイル "),a(e,{path:"../samples/gon/index.html"}),i(" を表示する場合:")]),a(e,{path:"/viewer/#src=../samples/gon/index.html"}),v,s("ul",null,[s("li",null,[u,a(e,{path:"/viewer/#src=https://github.com/IDPF/epub3-samples/tree/master/30/accessible_epub_3/&bookMode=true"})])]),y,s("ul",null,[s("li",null,[E,a(e,{path:"/viewer/#src=https://www.w3.org/TR/CSS2/&bookMode=true"})])]),b])}const P=t(h,[["render",m]]);export{L as __pageData,P as default};

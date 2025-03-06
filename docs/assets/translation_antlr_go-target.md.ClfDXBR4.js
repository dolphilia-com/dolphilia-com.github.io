import{_ as s,c as a,o as n,a3 as e}from"./chunks/framework.DflgEAq4.js";const u=JSON.parse('{"title":"ANTLR4言語ターゲット、Go用ランタイム","description":"","frontmatter":{},"headers":[],"relativePath":"translation/antlr/go-target.md","filePath":"translation/antlr/go-target.md","lastUpdated":null}'),i={name:"translation/antlr/go-target.md"},p=e(`<h1 id="antlr4言語ターゲット、go用ランタイム" tabindex="-1">ANTLR4言語ターゲット、Go用ランタイム <a class="header-anchor" href="#antlr4言語ターゲット、go用ランタイム" aria-label="Permalink to &quot;ANTLR4言語ターゲット、Go用ランタイム&quot;">​</a></h1><h3 id="antlr-4-12-0からの変更点" tabindex="-1">ANTLR 4.12.0からの変更点 <a class="header-anchor" href="#antlr-4-12-0からの変更点" aria-label="Permalink to &quot;ANTLR 4.12.0からの変更点&quot;">​</a></h3><p>ANTLR Goランタイムの変更点を参照してください：</p><ul><li>Goランタイムは現在 <code>antlr4-go/antlr</code> リポジトリに格納されています。 インポートを変更して、古い場所を <code>go.mod</code> から削除して、<code>go get github.com/antlr4-go/antlr</code> を使ってください。</li><li>生成されるインポート文とレコグナイザーの構造に追加するための新しい <code>@action</code> がいくつかあります。</li><li>パフォーマンス上の理由から、レコグナイザーのルールはインターフェイス経由で呼び出されなくなった。</li><li>メモリ使用量の改善</li><li>パフォーマンスの向上</li><li>真の Go 形式のドキュメント</li><li>Git タグが go ツールで正しく動作するようになりました。</li></ul><h3 id="v4以外のコードの削除" tabindex="-1">v4以外のコードの削除 <a class="header-anchor" href="#v4以外のコードの削除" aria-label="Permalink to &quot;v4以外のコードの削除&quot;">​</a></h3><p>v4タグ付きランタイムがリリースされる前は、Goランタイムモジュールのソースコードは<code>runtime/Go/antlr</code>（v4以前のバージョン）と<code>runtime/Go/antlr/v4</code>に存在していた。もしあなたのプロジェクトがモジュールを使っていなければ、単にmasterブランチの最新のハッシュに同期してコードを使うことができた。これは変更されました。</p><p>現在のリリースでは、Goランタイムモジュールのソースコードは独自のGitHub組織内の独自のリポジトリに移動しました。現在のところ、モジュールなしでコードを使用することはできますが、メインの ANTLR リポジトリのコードではなく github.com/antlr4-go/antlr のリポジトリにあるコードを使用する必要があります。</p><p>これは歴史的な理由によるもので、このコードはもともとモジュールが存在する前に書かれたものであり、goのランタイムソースは<code>antlr/antlr4/...</code>であるmonorepoの一部でした。</p><p>非V4ディレクトリにあるgo.modを適切に非推奨にすることができないのは、ソースツリーのこの深さではv4モジュールのタグを使えないのと同じ理由です。</p><p>必須ではありませんが、モジュールを使うことを強くお勧めします。詳細は以下を参照してください。</p><p>ANTLR Go Maintainer: Jim Idle</p><h3 id="はじめの一歩" tabindex="-1">はじめの一歩 <a class="header-anchor" href="#はじめの一歩" aria-label="Permalink to &quot;はじめの一歩&quot;">​</a></h3><h4 id="_1-antlr4をインストールする" tabindex="-1">1.ANTLR4をインストールする <a class="header-anchor" href="#_1-antlr4をインストールする" aria-label="Permalink to &quot;1.ANTLR4をインストールする&quot;">​</a></h4><p>以下を参照してください: スタートガイドを参照。</p><h4 id="_2-go-antlrランタイムを入手する" tabindex="-1">2.Go ANTLRランタイムを入手する <a class="header-anchor" href="#_2-go-antlrランタイムを入手する" aria-label="Permalink to &quot;2.Go ANTLRランタイムを入手する&quot;">​</a></h4><p>ANTLRの各ターゲット言語には、ANTLR4で生成された認識器を実行するためのランタイムパッケージがあります。ランタイムは、パーサ/レクサを使用するための共通ツールセットを提供します。既存のプロジェクトがあり、まだ <code>v1.x.x</code> モジュールを <code>v4</code> モジュールに置き換えていない場合は、 <em>以前のバージョンから v4 にアップグレードする</em> のセクションに進んでください。</p><p>Goランタイムはモジュールを使用し、他のランタイムやツール自体のランタイムバージョンと同期するために <code>/v4</code> というバージョンパスを持っています。</p><p>セットアップは他のモジュールベースのプロジェクトと同じです：</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> cd</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> mymodproject</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> go</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> mod</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> init</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> mymodproject</span></span></code></pre></div><p>その後、go getを使用して、ANTLR v4ランタイムの最新リリースバージョンを取得することができる：</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">go</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> get</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> github.com/antlr4-go/antlr</span></span></code></pre></div><p>あなたのプロジェクトがすでにANTLRのメインレポからv4ランタイムを使用していた場合、モジュール内の<code>github.com/antlr/antlr4/runtime/Go/antlr/v4</code>参照を削除し、プロジェクトコード内の関連するインポートを変更することで、最新リリースにアップグレードすることができます。インポートを変更するには、以下のスクリプトが便利です：</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">find</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> .</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -type</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> f</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> \\</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    -name</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;*.go&#39;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> \\</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    -exec</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> sed</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -i</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -e</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;s,github.com/antlr/antlr4/runtime/Go/antlr/v4,github.com/antlr4-go/antlr/v4,g&#39;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> {}</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> \\;</span></span></code></pre></div><p>importパッケージは最終パスを<code>antlr</code>としてインポートするので、importステートメント自体を変更するだけでよい。</p><p>もし既にこのレポを使用していて、<code>github.com/antlr4-go/antlr/v4</code>をインポートしている場合は、標準を使用して最新バージョンにアップグレードできます。</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">go</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> get</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -u</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> github.com/antlr4-go/antlr</span></span></code></pre></div><p>既存のプロジェクトをまだ <code>/v4</code> モジュールパスにアップグレードしていない場合は、 <em>以前のバージョンから v4 にアップグレードする</em> を参照してください。</p><p>ANTLR ランタイムの外部への一時的な依存関係は 1 つだけで、それは go システム自体の一部です：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>golang.org/x/exp</span></span></code></pre></div><p>リリースの完全なリストはリリースページにあります。そのため、<code>antlr4-go/antlr</code> リポジトリにあるリリース 4.13.0 には <code>v4.13.0</code> というタグが付けられ、go get は ANTLR リポジトリからタグを取得します。</p><h4 id="_3-プロジェクトで-go-generate-を設定する" tabindex="-1">3.プロジェクトで <code>go generate</code> を設定する <a class="header-anchor" href="#_3-プロジェクトで-go-generate-を設定する" aria-label="Permalink to &quot;3.プロジェクトで \`go generate\` を設定する&quot;">​</a></h4><p>繰り返しビルドの利用を促進するために、最新のツール jar をプロジェクトのリポジトリに追加し、<code>generate.sh</code> と <code>generate.go</code> ファイルを設定すると便利なことが多い。もちろん、ツールの実行に必要なjavaコマンドをグローバルにエイリアスすることもできる。あなた自身のCIと開発環境があなたを導いてくれるだろう。</p><p>ここでは、ANTLR の文法ファイルをプロジェクト構造内の独自のパッケージに配置するという一般的な推奨に従って、<code>go generate</code> を設定する方法を説明する。ここでは、出発点として一般的なテンプレートを示します：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>	.</span></span>
<span class="line"><span>	├── myproject</span></span>
<span class="line"><span>	├── parser</span></span>
<span class="line"><span>	│     ├── mygrammar.g4</span></span>
<span class="line"><span>	│     ├── antlr-4.13.0-complete.jar</span></span>
<span class="line"><span>	│     ├── generate.go</span></span>
<span class="line"><span>	│     └── generate.sh</span></span>
<span class="line"><span>	├── parsing  # Generated code goes here</span></span>
<span class="line"><span>	│     └── error_listeners.go</span></span>
<span class="line"><span>	├── go.mod</span></span>
<span class="line"><span>	├── go.sum</span></span>
<span class="line"><span>	├── main.go</span></span>
<span class="line"><span>	└── main_test.go</span></span></code></pre></div><p><code>generate.go</code>ファイルは次のようになります。generate.go\`ファイルはこのようになる：</p><div class="language-golang vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">golang</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>	package parser</span></span>
<span class="line"><span></span></span>
<span class="line"><span>	//go:generate ./generate.sh</span></span></code></pre></div><p>そして<code>generate.sh</code>ファイルは以下のようになる：</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">	#!/bin/sh</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">	alias</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> antlr4</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;java -Xmx500M -cp &quot;./antlr-4.13.0-complete.jar:$CLASSPATH&quot; org.antlr.v4.Tool&#39;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">	antlr4</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -Dlanguage=Go</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -no-visitor</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -package</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> parsing</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> *</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">.g4</span></span></code></pre></div><p>パッケージのルート、つまり<code>go.mod</code>ファイルの場所にあるコマンドラインから、次のコマンドを実行すればよい：</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">	go</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> generate</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ./...</span></span></code></pre></div><p>まだ<code>go get</code>を実行していない場合は、<code>go mod tidy</code>を実行し、<code>go get</code>の内容を更新してください。</p><h4 id="_4-パーサーを手動で生成する" tabindex="-1">4.パーサーを手動で生成する <a class="header-anchor" href="#_4-パーサーを手動で生成する" aria-label="Permalink to &quot;4.パーサーを手動で生成する&quot;">​</a></h4><p>ANTLR4の「ツール」を使用してパーサーを生成します。これらは、上記でインストールしたANTLRランタイムを参照します。</p><p>UNIXシステムを使用していて、スタートガイドに記載されているようにANTLR4ツールのエイリアスを設定したとします。</p><p>goパーサーを生成するには、以下のコマンドを実行する必要があります：</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    antlr4</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -Dlanguage=Go</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> MyGrammar.g4</span></span></code></pre></div><p>antlr4ツールオプションの完全なリストは、ツールのドキュメントページをご覧ください。</p><h3 id="デフォルトパスから-v4-へのアップグレード" tabindex="-1">デフォルトパスから <code>/v4</code> へのアップグレード <a class="header-anchor" href="#デフォルトパスから-v4-へのアップグレード" aria-label="Permalink to &quot;デフォルトパスから \`/v4\` へのアップグレード&quot;">​</a></h3><p>NB: 新しいモジュールパスへの切り替えは通常、ランタイムのパブリックインターフェースが変更されたことを意味しますが、実際にはそうではありません。リポジトリ変更の主なポイントは、git タグ付けが ANTLR Go ランタイムと go ツールで動作するようにすることです。</p><p>リリース v4.11.0 より前の Go ランタイムはモジュールと一緒に出荷されていましたが、モジュールにはバージョンパスがありませんでした。これは ANTLR リポジトリのタグが機能しないことを意味します。なぜなら、<code>v1</code> 以上のタグは一致するモジュールのパスを参照しなければならないからです。 そのため、<code>go get github.com/antlr/antlr4/runtime/Go/antlr</code> というコマンドは、master ブランチの <code>HEAD</code> にあるものを持ってくるだけだった。これは<em>一応</em>うまくいったが、明らかに問題があり、Goの慣用的なやり方には合わない。</p><p>v4.13.0では、ランタイムコードは独自のリポジトリ <code>github.com/antlr4-go/antlr</code> に存在し、正しくタグ付けされている。しかし、これは <code>/v4</code> パスにアップグレードするために、いくつかの簡単なアクションを実行する必要があることを意味します。</p><ul><li>まず、バージョン番号が 4.13.0 以上の ANTLR ツール jar を使用していることを確認する。</li><li>次に、go ソースファイル内の ANTLR への古い (デフォルトの) パスの記述をすべて置き換えます。</li><li>モジュールを使用している場合は、ANTLR Goランタイムへの既存の参照をすべて削除します。</li><li>文法ファイルを手動または <code>go generate ./...</code> (上記参照) を使って再生成します。</li><li>プロジェクトでモジュールを使用するように移行できるかどうかを検討します。</li></ul><p>元のモジュールのパス参照を置き換える簡単な方法は、モジュールのベースディレクトリからこのスクリプトを使うことです：</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">find</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> .</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -type</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> f</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> \\</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    -name</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;*.go&#39;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> \\</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    -exec</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> sed</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -i</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -e</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;s,github.com/antlr/antlr4/runtime/Go/antlr,github.com/antlr4-go/antlr/v4,g&#39;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> {}</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> \\;</span></span></code></pre></div><p>上記の手順を実行した後、発行モジュールを使用します：</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">go</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> mod</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> tidy</span></span></code></pre></div><p>ANTLRのGoランタイムの<code>v4</code>バージョンのみを参照するように<code>go.mod</code>ファイルを修正する必要があります：</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">require</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> github.com/antlr/antlr4/runtime/Go/antlr/v4</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> v4.13.0</span></span></code></pre></div><p>この時点から、go modコマンドはANTLRレポで正しく動作し、アップグレードやダウングレードも期待通りに動作するようになります。devのようなブランチバージョンも同様です。</p><h3 id="go-antlrランタイムの参照" tabindex="-1">Go ANTLRランタイムの参照 <a class="header-anchor" href="#go-antlrランタイムの参照" aria-label="Permalink to &quot;Go ANTLRランタイムの参照&quot;">​</a></h3><p>go ANTLR ランタイムパッケージは次のように参照できます：</p><div class="language-golang vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">golang</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>import &quot;github.com/antlr4-go/antlr/v4&quot;</span></span></code></pre></div><h3 id="完全な例" tabindex="-1">完全な例 <a class="header-anchor" href="#完全な例" aria-label="Permalink to &quot;完全な例&quot;">​</a></h3><p>parserディレクトリに置かれた github.com/antlr/grammars-v4/tree/master/json のJSON文法を使い、<code>go mod</code>ファイルを初期化したとします。</p><p>そして、<code>antlr4 -Dlanguage=Go JSON.g4</code>を実行します。その結果、<code>parser</code> ディレクトリに以下のような .go ファイルが作成されます：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>json_parser.go</span></span>
<span class="line"><span>json_base_listener.go</span></span>
<span class="line"><span>json_lexer.go</span></span>
<span class="line"><span>json_listener.go</span></span></code></pre></div><p>ANTLRツールのもう一つの一般的なオプションは <code>-visitor</code> で、これは解析ツリービジターを生成するが、ここではそれを行わない。 antlr4ツールのオプションの完全なリストについては、ツールのドキュメントページを参照してください。</p><p>生成されたパーサー/レクサーを呼び出す小さなmain funcを書きます。これは遭遇した <code>ParseTreeContext</code> を書き出す。生成されたパーサーのコードが <code>parser</code> ディレクトリにあると仮定すると、このコードと相対的なものになる：</p><div class="language-golang vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">golang</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>package main</span></span>
<span class="line"><span></span></span>
<span class="line"><span>import (</span></span>
<span class="line"><span>	&quot;github.com/antlr4-go/antlr/v4&quot;</span></span>
<span class="line"><span>	&quot;./parser&quot;  // モジュールの場合、相対 immport パスが使えない場合があることに注意してください。</span></span>
<span class="line"><span>	&quot;os&quot;</span></span>
<span class="line"><span>	&quot;fmt&quot;</span></span>
<span class="line"><span>)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>type TreeShapeListener struct {</span></span>
<span class="line"><span>	*parser.BaseJSONListener</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>func NewTreeShapeListener() *TreeShapeListener {</span></span>
<span class="line"><span>	return new(TreeShapeListener)</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>func (this *TreeShapeListener) EnterEveryRule(ctx antlr.ParserRuleContext) {</span></span>
<span class="line"><span>	fmt.Println(ctx.GetText())</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>func main() {</span></span>
<span class="line"><span>	input, _ := antlr.NewFileStream(os.Args[1])</span></span>
<span class="line"><span>	lexer := parser.NewJSONLexer(input)</span></span>
<span class="line"><span>	stream := antlr.NewCommonTokenStream(lexer,0)</span></span>
<span class="line"><span>	p := parser.NewJSONParser(stream)</span></span>
<span class="line"><span>	p.AddErrorListener(antlr.NewDiagnosticErrorListener(true))</span></span>
<span class="line"><span>	p.BuildParseTrees = true</span></span>
<span class="line"><span>	tree := p.Json()</span></span>
<span class="line"><span>	antlr.ParseTreeWalkerDefault.Walk(NewTreeShapeListener(), tree)</span></span>
<span class="line"><span>}</span></span></code></pre></div><p><code>go.mod</code>ファイルを修正する：</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">go</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> mod</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> tidy</span></span></code></pre></div><p>これは、コマンドラインで入力が渡されることを想定している：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>go run test.go input</span></span></code></pre></div><p>出力はこうだ：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>{&quot;a&quot;:1}</span></span>
<span class="line"><span>{&quot;a&quot;:1}</span></span>
<span class="line"><span>&quot;a&quot;:1</span></span>
<span class="line"><span>1</span></span></code></pre></div>`,75),t=[p];function l(o,h,r,d,c,g){return n(),a("div",null,t)}const F=s(i,[["render",l]]);export{u as __pageData,F as default};

import{_ as s,c as i,o as a,a3 as n}from"./chunks/framework.DflgEAq4.js";const g=JSON.parse('{"title":"ベンチマークノート","description":"","frontmatter":{},"headers":[],"relativePath":"translation/duktape/doc/benchmarking-notes.md","filePath":"translation/duktape/doc/benchmarking-notes.md","lastUpdated":null}'),t={name:"translation/duktape/doc/benchmarking-notes.md"},h=n(`<h1 id="ベンチマークノート" tabindex="-1">ベンチマークノート <a class="header-anchor" href="#ベンチマークノート" aria-label="Permalink to &quot;ベンチマークノート&quot;">​</a></h1><p>本資料では、実際のターゲットデバイスに最も適した結果を得るために、パフォーマンスやメモリ消費量のベンチマークを行う際の注意点について説明します。</p><h2 id="メモリベンチマーク" tabindex="-1">メモリベンチマーク <a class="header-anchor" href="#メモリベンチマーク" aria-label="Permalink to &quot;メモリベンチマーク&quot;">​</a></h2><h3 id="duktapeのローメモリオプションを有効にする" tabindex="-1">Duktapeのローメモリオプションを有効にする <a class="header-anchor" href="#duktapeのローメモリオプションを有効にする" aria-label="Permalink to &quot;Duktapeのローメモリオプションを有効にする&quot;">​</a></h3><p>Duktapeの低メモリ設定オプションを有効にしてベンチマークを行う場合、ターゲットがこれらのオプションを有効にして実際に実行される場合、有効にしてください。例えば、ターゲットが128-256kBのシステムRAMを持っている場合、ローメモリオプションは非常に推奨されるでしょう：</p><ul><li>doc/low-memory.rst</li><li>config/examples/low_memory.yaml</li></ul><h3 id="duk-use-gc-torture-を有効にして、実際のハードメモリ使用量を確認する" tabindex="-1">DUK_USE_GC_TORTURE を有効にして、実際のハードメモリ使用量を確認する <a class="header-anchor" href="#duk-use-gc-torture-を有効にして、実際のハードメモリ使用量を確認する" aria-label="Permalink to &quot;DUK_USE_GC_TORTURE を有効にして、実際のハードメモリ使用量を確認する&quot;">​</a></h3><p>テスト用に<code>DUK_USE_GC_TORTURE</code>を有効にして、実際のメモリ、つまり緊急ガベージコレクションが行われるときに収集されない、実際に<strong>到達可能なオブジェクト</strong>を測定する。この設定オプションは、実際に到達可能なメモリだけがいつでも使用されたままになるように、すべての割り当てに対して完全なマークアンドスイープ・ガベージコレクション・パスを引き起こします。</p><p>このオプションを有効にしていない状態で見た見かけのメモリ使用量は、実際に必要な量とかなり異なる場合があります。この差は通常関係ありません。もしメモリが不足した場合、緊急ガベージコレクションが到達不可能なオブジェクトを解放することができます。</p><p>この違いは、システム内の他のコンポーネントがメモリ不足に陥った場合、通常、メモリを解放する緊急ガベージコレクションを起動できないため、実際に問題となることがあります。しかし、Duktapeにプール・アロケータを使用する場合、これは問題ではありません：すべてのDuktapeの割り当ては、事前に割り当てられたプールに含まれます。</p><h3 id="ターゲットがプールアロケーターを使用している場合は、プールアロケーターを使用して使用量を測定します。" tabindex="-1">ターゲットがプールアロケーターを使用している場合は、プールアロケーターを使用して使用量を測定します。 <a class="header-anchor" href="#ターゲットがプールアロケーターを使用している場合は、プールアロケーターを使用して使用量を測定します。" aria-label="Permalink to &quot;ターゲットがプールアロケーターを使用している場合は、プールアロケーターを使用して使用量を測定します。&quot;">​</a></h3><p>valgrind --tool=massif\` による測定は比較的正確ですが（GC torture が有効な場合）、プールアロケータを使用した場合には存在しない割り当てオーバーヘッドが含まれます。プールアロケータは、オーバーヘッドとヒープの断片化を減らすために、低メモリターゲットに推奨されます。</p><p>実際のターゲットがプールアロケータを使用する場合、ベンチマークはそのアロケータに対して行われ、プールエントリサイズは実際に実行されるアプリケーションコードに最適化されている必要があります。valgrind massifが報告した使用量と実際のプールアロケータの使用量の差は、かなり大きくなることがあります。しかし、プール構成の最適化が不十分な場合、無駄なプールエントリバイトによるメモリ割り当てのオーバーヘッドも大きくなる可能性があります。</p><p>プロセスRSSなどを使った測定は非常に不正確で、達成可能な実際のメモリ使用量を正確に反映しないため、可能であれば避けるべきです。プールアロケータなしで測定する場合、GC拷問を有効にすることと組み合わせたvalgrind massifは、はるかに良いオプションです。</p><h3 id="duk-use-gc-tortureの測定影響例" tabindex="-1">DUK_USE_GC_TORTUREの測定影響例 <a class="header-anchor" href="#duk-use-gc-tortureの測定影響例" aria-label="Permalink to &quot;DUK_USE_GC_TORTUREの測定影響例&quot;">​</a></h3><p>コールバック指向のコードにありがちな、無名関数インスタンスを大量に生成するプログラムを例にしてみましょう：</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">function</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> test</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    for</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">var</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> i </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">; i </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&lt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 10000</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">; i</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">++</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        var</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> ignored</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> function</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> () {};</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">test</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span></code></pre></div><p>このような無名関数は、それぞれデフォルトの <code>.prototype</code> オブジェクト（<code>.constructor</code>参照を使用して関数を指す）との参照ループにあるため、関数は参照カウントでは収集されず、マークアンドスイープで解放されます。マークアンドスイープは定期的に実行されますが、割り当てに失敗した場合は緊急マークアンドスイープが発動されます。</p><p>Duktapeをx64でデフォルトのままコンパイルすると（ローメモリオプションやROMビルトインなどは一切なし）、valgrind massifで以下のメモリ使用量が表示されます：</p><pre><code>...
    KB
539.2^                                                                      :
     |         #       :      ::      :              :      :@       :      :
     |         #       :      :      ::      :      ::      :@      @:     ::
     |         #      ::      :      ::      :      ::      :@     :@:    @::
     |        @#      ::     ::      ::      :      ::     ::@     :@:    @::
     |        @#     :::     ::     :::    :::     :::     ::@    ::@:    @::
     |        @#     :::    :::     :::    : :     :::    :::@    ::@:   :@::
     |       @@#    @:::    :::    ::::    : :     :::    :::@    ::@:   :@::
     |       @@#    @:::   @:::    ::::   :: :    ::::    :::@   :::@:  ::@::
     |      @@@#   :@:::   @:::   :::::   :: :    ::::   ::::@  ::::@:  ::@::
     |      @@@#   :@:::  :@:::   :::::   :: :    ::::  :::::@  ::::@:  ::@::
     |     @@@@#   :@:::  :@:::  ::::::  ::: :   :::::  :::::@  ::::@: :::@::
     |  @  @@@@#  ::@:::  :@:::  ::::::  ::: :   :::::  :::::@ :::::@: :::@::
     |  @  @@@@#  ::@:::  :@:::  :::::: :::: :  :::::: ::::::@ :::::@: :::@::
     |  @::@@@@#  ::@::: ::@:::  :::::: :::: :  :::::: ::::::@::::::@:::::@::
     | @@: @@@@#  ::@::::::@::: ::::::: :::: :  :::::: @:::::@::::::@:::::@:::
     | @@: @@@@#::::@::::::@::: :::::::::::: ::::::::::@:::::@::::::@:::::@:::
     | @@: @@@@#: ::@::::::@::: :::::::::::: :: :::::::@:::::@::::::@:::::@:::
     | @@: @@@@#: ::@::::::@::: :::::::::::: :: :::::::@:::::@::::::@:::::@:::
     | @@: @@@@#: ::@::::::@::: :::::::::::: :: :::::::@:::::@::::::@:::::@:::
   0 +-----------------------------------------------------------------------&gt;Mi
     0                                                                   138.9
</code></pre><p>このことから、このプログラムは540kBのメモリを使用しているように見えます。これは非常に誤解を招きやすいのですが、実はこの使用量のほぼ全てがmark-and-sweepによって定期的に収集される収集可能なゴミなのです（上記では &quot;spiking &quot;と表現しています）。特に、メモリが不足した場合（具体的には、メモリの割り当てに失敗した場合）、緊急のmark-and-sweepパスにより、そのメモリは解放され、他の用途に使用できるようになる。</p><p><code>DUK_USE_GC_TORTURE</code>を有効にすると、全く異なる結果が得られます：</p><pre><code>...
    KB
118.2^#
     |#
     |#:@@:@::::::::    :     :::             @::  :: : : : : ::
     |#:@ :@:: : : ::::::::::::::::::::@@:::::@: ::: :::::::::: :::@:::::::@::
     |#:@ :@:: : : :: : ::::: :::::::::@ : :: @: : : :::::::::: :::@:::::::@::
     |#:@ :@:: : : :: : ::::: :::::::::@ : :: @: : : :::::::::: :::@:::::::@::
     |#:@ :@:: : : :: : ::::: :::::::::@ : :: @: : : :::::::::: :::@:::::::@::
     |#:@ :@:: : : :: : ::::: :::::::::@ : :: @: : : :::::::::: :::@:::::::@::
     |#:@ :@:: : : :: : ::::: :::::::::@ : :: @: : : :::::::::: :::@:::::::@::
     |#:@ :@:: : : :: : ::::: :::::::::@ : :: @: : : :::::::::: :::@:::::::@::
     |#:@ :@:: : : :: : ::::: :::::::::@ : :: @: : : :::::::::: :::@:::::::@::
     |#:@ :@:: : : :: : ::::: :::::::::@ : :: @: : : :::::::::: :::@:::::::@::
     |#:@ :@:: : : :: : ::::: :::::::::@ : :: @: : : :::::::::: :::@:::::::@::
     |#:@ :@:: : : :: : ::::: :::::::::@ : :: @: : : :::::::::: :::@:::::::@::
     |#:@ :@:: : : :: : ::::: :::::::::@ : :: @: : : :::::::::: :::@:::::::@::
     |#:@ :@:: : : :: : ::::: :::::::::@ : :: @: : : :::::::::: :::@:::::::@::
     |#:@ :@:: : : :: : ::::: :::::::::@ : :: @: : : :::::::::: :::@:::::::@::
     |#:@ :@:: : : :: : ::::: :::::::::@ : :: @: : : :::::::::: :::@:::::::@::
     |#:@ :@:: : : :: : ::::: :::::::::@ : :: @: : : :::::::::: :::@:::::::@::
     |#:@ :@:: : : :: : ::::: :::::::::@ : :: @: : : :::::::::: :::@:::::::@::
   0 +-----------------------------------------------------------------------&gt;Gi
     0                                                                   20.29
</code></pre><p>実際のメモリ使用量は120kBで、valgrindで見た見かけのメモリ使用量の約22%に過ぎません。このハードメモリ使用量は、アプリケーションがより多くのメモリを割り当てられるかどうかを決定する、本当に重要なものです。</p><h2 id="パフォーマンスベンチマーキング" tabindex="-1">パフォーマンスベンチマーキング <a class="header-anchor" href="#パフォーマンスベンチマーキング" aria-label="Permalink to &quot;パフォーマンスベンチマーキング&quot;">​</a></h2><h3 id="duktapeのパフォーマンスオプションを有効にする" tabindex="-1">Duktapeのパフォーマンスオプションを有効にする <a class="header-anchor" href="#duktapeのパフォーマンスオプションを有効にする" aria-label="Permalink to &quot;Duktapeのパフォーマンスオプションを有効にする&quot;">​</a></h3><p>メモリに制約のあるデバイスで実行していて、コードのフットプリントなどよりもパフォーマンスを優先するのでなければ、Duktapeのパフォーマンス・オプションを有効にする必要があります。詳細については、以下を参照してください：</p><ul><li>doc/performance-sensitive.rst</li><li>config/examples/performance_sensitive.yaml</li></ul><p>メモリと同様に、実際のターゲットに関連するオプションで測定することが重要である。ほとんどのローメモリオプションとパフォーマンスオプションを同時に有効にすることが可能です（RAMが比較的少なく、コードのROMフットプリントが問題でない場合は理にかなっています）。Duktape のローメモリ・オプションは性能に影響を与えるかもしれません。特に、ヒープ・ポインタ圧縮は比較的大きな性能影響を与えるので、最終的なターゲットがヒープ・ポインタ圧縮を使用するかどうかによって、考慮することが重要です。</p><h3 id="デフォルトでファンクションコードを使用するテスト" tabindex="-1">デフォルトでファンクションコードを使用するテスト <a class="header-anchor" href="#デフォルトでファンクションコードを使用するテスト" aria-label="Permalink to &quot;デフォルトでファンクションコードを使用するテスト&quot;">​</a></h3><p>グローバルコード（プログラムコード）とevalコードは、関数コード（<code>function () { ... }</code>式の中に存在するステートメント）とは意味的に重要な違いがあります．式内に存在するステートメントです。Duktapeでは、この2種類のコンパイルされたコードの性能差は非常に大きいです。具体的な違いは、globalコードとevalコードにはローカル変数が存在せず、すべての変数アクセスは内部スローパスを経由し、実際にはグローバル・オブジェクトのプロパティの読み取りと書き込みであるということです。</p><p>具体例として、関数内の空ループ：</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> cat</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> test.js</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">function</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> test</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    for</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">var</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> i</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> =</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">; </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">i</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &lt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 1e7</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">; </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">i++</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">test</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> time</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ./duk.O2.140</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> test.js</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">real</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">   0m0.256s</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">user</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">   0m0.256s</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sys</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    0m0.000s</span></span></code></pre></div><p>関数外での空ループ：</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> cat</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> test.js</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">//</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> Note</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> that</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;i&#39;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> is</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> actually</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> a</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> property</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> of</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> the</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> global</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> object.</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">for</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">var</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> i</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> =</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">; </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">i</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &lt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 1e7</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">; </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">i++</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> time</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ./duk.O2.140</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> _test.js</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">real</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">   0m4.325s</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">user</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">   0m4.319s</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sys</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    0m0.004s</span></span></code></pre></div><p>グローバルコード内のループは、関数内よりも20倍遅く実行されます。実用的なコードの性能差は、変数アクセスが何回行われるかに依存します。</p><p>ほとんどのプログラムでは、実際にパフォーマンスに関係するコードの大部分は関数の中にあります。特に、CommonJSのモジュールはすべて自動的に匿名ラッパー関数の中に入っているので、すべてのモジュールコードは高速パスを使って実行されます。ベンチマークを行う場合、ターゲット上で実際にコードを実行するのと同じように、パフォーマンス上重要なコードを関数の中に入れて測定するのが最適なデフォルトとなります。</p><p>しかし、ターゲットが実際にグローバルまたはevalコンテキストでパフォーマンスに関連するコードを実行する場合（特定のアプリケーションではかなり可能性があります）、もちろん、関数の外でそのコードを測定することが賢明です。</p>`,38),p=[h];function l(e,k,r,d,F,o){return a(),i("div",null,p)}const c=s(t,[["render",l]]);export{g as __pageData,c as default};

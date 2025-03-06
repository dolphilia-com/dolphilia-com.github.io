import{_ as s,c as i,o as t,a3 as a}from"./chunks/framework.DflgEAq4.js";const m=JSON.parse('{"title":"Emscriptenの互換性の状況","description":"","frontmatter":{},"headers":[],"relativePath":"translation/duktape/doc/emscripten-status.md","filePath":"translation/duktape/doc/emscripten-status.md","lastUpdated":null}'),e={name:"translation/duktape/doc/emscripten-status.md"},l=a(`<h1 id="emscriptenの互換性の状況" tabindex="-1">Emscriptenの互換性の状況 <a class="header-anchor" href="#emscriptenの互換性の状況" aria-label="Permalink to &quot;Emscriptenの互換性の状況&quot;">​</a></h1><h2 id="hello-world-test" tabindex="-1">Hello world test <a class="header-anchor" href="#hello-world-test" aria-label="Permalink to &quot;Hello world test&quot;">​</a></h2><p>早速、ハローワールドテスト::</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> emcc</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --memory-init-file</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 0</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> \\.</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        -s</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> WASM=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -s</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> POLYFILL_OLD_MATH_FUNCTIONS=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> \\.</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        tests/hello_world.cpp</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -o</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /tmp/test.js</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> duk</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /tmp/test.js</span></span></code></pre></div><p>微調整が必要です。</p><ul><li><code>--memory-init-file 0</code>: 外部メモリファイルを使用しないようにします。</li><li><code>-s WASM=0</code>: DuktapeがWebAssemblyをサポートしていないため、WebAssemblyのサポートを無効にします。</li><li><code>-s POLYFILL_OLD_MATH_FUNCTIONS</code>: Math.fround() のようなES5.1以降のMath関数を仮定しないようにしました。</li></ul><p>通常、これで十分です。 もし、Duktapeを少量のメモリで実行している場合（例えば、Duktapeコマンドラインツールを <code>-r</code> オプションで実行している場合）、以下の追加オプションでEmscriptionの「仮想メモリ」サイズを縮小する必要があるかもしれません。</p><ul><li><code>-s TOTAL_MEMORY=2097152</code> : メモリー不足にならないように総メモリー容量を減らします。</li><li><code>-s TOTAL_STACK=524288</code> : 減らしたメモリサイズに収まるようにスタックサイズを小さくします。</li></ul><p>Duktapeのバージョンにおける変更点。</p><ul><li>Duktape 1.3から、ES2015 TypedArraysをサポートし、Duktape 1.2よりもEmscriptenの動作が良くなり、Emscripten fastcompを使用できるようになりました。</li><li>Duktape 1.5以降、Emscriptenで生成されたコードを実行するための修正は必要ありません。また、関数 <code>.toString()</code> の出力が、Emscriptenの正規表現に適合するように変更されました。 以前はフィックスアップスクリプトが必要でした::</li></ul><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> python</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> $DUKTAPE</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">/util/fix_emscripten.py</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &lt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /tmp/test.js</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &gt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /tmp/test-fixed.js</span></span></code></pre></div><h2 id="duktape-用の-emcc-のセットアップ" tabindex="-1">Duktape 用の emcc のセットアップ <a class="header-anchor" href="#duktape-用の-emcc-のセットアップ" aria-label="Permalink to &quot;Duktape 用の emcc のセットアップ&quot;">​</a></h2><p>動作する <code>emcc</code> をセットアップする Docker イメージファイルについては docker/ を参照してください。</p><h2 id="以下も参照してください。" tabindex="-1">以下も参照してください。 <a class="header-anchor" href="#以下も参照してください。" aria-label="Permalink to &quot;以下も参照してください。&quot;">​</a></h2><ul><li><a href="https://github.com/kripken/emscripten/wiki/Optimizing-Code" target="_blank" rel="noreferrer">https://github.com/kripken/emscripten/wiki/Optimizing-Code</a></li><li><a href="http://mozakai.blogspot.fi/2013/08/outlining-workaround-for-jits-and-big.html" target="_blank" rel="noreferrer">http://mozakai.blogspot.fi/2013/08/outlining-workaround-for-jits-and-big.html</a></li></ul>`,15),n=[l];function p(h,r,k,o,d,c){return t(),i("div",null,n)}const u=s(e,[["render",p]]);export{m as __pageData,u as default};

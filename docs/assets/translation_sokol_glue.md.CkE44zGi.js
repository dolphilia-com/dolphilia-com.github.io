import{_ as e,c as s,o as a,a3 as t}from"./chunks/framework.DflgEAq4.js";const _=JSON.parse('{"title":"sokol_glue.h","description":"","frontmatter":{},"headers":[],"relativePath":"translation/sokol/glue.md","filePath":"translation/sokol/glue.md","lastUpdated":null}'),i={name:"translation/sokol/glue.md"},o=t(`<h1 id="sokol-glue-h" tabindex="-1">sokol_glue.h <a class="header-anchor" href="#sokol-glue-h" aria-label="Permalink to &quot;sokol_glue.h&quot;">​</a></h1><p>sokol ヘッダ用の糊付けヘルパー関数</p><p>プロジェクトURL: <a href="https://github.com/floooh/sokol" target="_blank" rel="noreferrer">https://github.com/floooh/sokol</a></p><p>このファイルをCまたはC++ファイルにインクルードして実装を作成する前に、</p><div class="language-c vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">#define</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> SOKOL_IMPL</span></span></code></pre></div><p>または</p><div class="language-c vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">#define</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> SOKOL_GLUE_IMPL</span></span></code></pre></div><p>を定義してください。</p><p>...オプションとして、デフォルトを上書きするために以下のマクロを提供します。</p><ul><li>SOKOL_ASSERT(c) - 独自のアサートマクロ (デフォルト: assert(c))</li><li>SOKOL_GLUE_API_DECL - 公開関数宣言のプレフィックス (デフォルト: extern)</li><li>SOKOL_API_DECL - SOKOL_GLUE_API_DECL と同じです。</li><li>SOKOL_API_IMPL - public 関数実装の接頭辞（デフォルト：-）。</li></ul><p>sokol_glue.hをDLLとしてコンパイルする場合、宣言や実装を含める前に以下を定義してください。</p><p><code>SOKOL_DLL</code></p><p>Windowsでは、SOKOL_DLLは、必要に応じてSOKOL_GLUE_API_DECLを__declspec(dllexport) または __declspec(dllimport) として定義します。</p><h2 id="概要" tabindex="-1">概要 <a class="header-anchor" href="#概要" aria-label="Permalink to &quot;概要&quot;">​</a></h2><p>sokolコアヘッダは互いに依存してはいけませんが、時には2つ以上のsokolヘッダ間の「接着剤」としてヘルパー関数のセットを持つことが有用です。</p><p>そのために sokol_glue.h があります。このヘッダを他のsokolヘッダ（実装と宣言の両方）の後にインクルードするだけで、前にインクルードされたヘッダに応じて、sokol_glue.hが「グルー関数」を利用できるようにします。</p><h2 id="提供する関数" tabindex="-1">提供する関数 <a class="header-anchor" href="#提供する関数" aria-label="Permalink to &quot;提供する関数&quot;">​</a></h2><p>sokol_app.hとsokol_gfx.hが含まれている場合:</p><div class="language-c vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">sg_context_desc </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sapp_sgcontext</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">void</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">):</span></span></code></pre></div><p>sokol_app.h の関数を呼び出して初期化した sg_context_desc 関数を返します。</p><h2 id="license" tabindex="-1">LICENSE <a class="header-anchor" href="#license" aria-label="Permalink to &quot;LICENSE&quot;">​</a></h2><p>zlib/libpng license</p><p>Copyright (c) 2018 Andre Weissflog</p><p>This software is provided &#39;as-is&#39;, without any express or implied warranty. In no event will the authors be held liable for any damages arising from the use of this software.</p><p>Permission is granted to anyone to use this software for any purpose, including commercial applications, and to alter it and redistribute it freely, subject to the following restrictions:</p><pre><code>1. The origin of this software must not be misrepresented; you must not
claim that you wrote the original software. If you use this software in a
product, an acknowledgment in the product documentation would be
appreciated but is not required.

2. Altered source versions must be plainly marked as such, and must not
be misrepresented as being the original software.

3. This notice may not be removed or altered from any source
distribution.
</code></pre>`,26),l=[o];function n(p,r,h,d,c,u){return a(),s("div",null,l)}const g=e(i,[["render",n]]);export{_ as __pageData,g as default};

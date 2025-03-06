import{_ as s,c as i,o as a,a3 as n}from"./chunks/framework.DflgEAq4.js";const c=JSON.parse('{"title":"ジョイスティック","description":"","frontmatter":{},"headers":[],"relativePath":"translation/GLFW/Reference/joysticks.md","filePath":"translation/GLFW/Reference/joysticks.md","lastUpdated":null}'),h={name:"translation/GLFW/Reference/joysticks.md"},e=n(`<h1 id="ジョイスティック" tabindex="-1">ジョイスティック <a class="header-anchor" href="#ジョイスティック" aria-label="Permalink to &quot;ジョイスティック&quot;">​</a></h1><p>これらの使用方法については、ジョイスティック入力を参照のこと。</p><nav class="table-of-contents"><ul><li><a href="#マクロ">マクロ</a></li></ul></nav><h2 id="マクロ" tabindex="-1">マクロ <a class="header-anchor" href="#マクロ" aria-label="Permalink to &quot;マクロ&quot;">​</a></h2><div class="language-c vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">#define</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> GLFW_JOYSTICK_1</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">   0</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">#define</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> GLFW_JOYSTICK_2</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">   1</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">#define</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> GLFW_JOYSTICK_3</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">   2</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">#define</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> GLFW_JOYSTICK_4</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">   3</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">#define</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> GLFW_JOYSTICK_5</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">   4</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">#define</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> GLFW_JOYSTICK_6</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">   5</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">#define</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> GLFW_JOYSTICK_7</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">   6</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">#define</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> GLFW_JOYSTICK_8</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">   7</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">#define</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> GLFW_JOYSTICK_9</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">   8</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">#define</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> GLFW_JOYSTICK_10</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">   9</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">#define</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> GLFW_JOYSTICK_11</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">   10</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">#define</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> GLFW_JOYSTICK_12</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">   11</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">#define</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> GLFW_JOYSTICK_13</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">   12</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">#define</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> GLFW_JOYSTICK_14</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">   13</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">#define</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> GLFW_JOYSTICK_15</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">   14</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">#define</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> GLFW_JOYSTICK_16</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">   15</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">#define</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> GLFW_JOYSTICK_LAST</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">   GLFW_JOYSTICK_16</span></span></code></pre></div>`,5),l=[e];function t(k,p,F,d,r,C){return a(),i("div",null,l)}const g=s(h,[["render",t]]);export{c as __pageData,g as default};

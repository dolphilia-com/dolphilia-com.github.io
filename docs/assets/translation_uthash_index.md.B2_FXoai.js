import{_ as s,c as i,o as a,a3 as n}from"./chunks/framework.DflgEAq4.js";const y=JSON.parse('{"title":"uthash","description":"","frontmatter":{},"headers":[],"relativePath":"translation/uthash/index.md","filePath":"translation/uthash/index.md","lastUpdated":null}'),h={name:"translation/uthash/index.md"},t=n(`<h1 id="uthash" tabindex="-1">uthash <a class="header-anchor" href="#uthash" aria-label="Permalink to &quot;uthash&quot;">​</a></h1><p>C言語の構造体であれば、uthashを使ってハッシュテーブルに格納することができます。構造体にUT_hash_handleを追加し、キーとして機能するように構造体の1つ以上のフィールドを選択するだけです。次に、これらのマクロを使用して、ハッシュテーブルから項目を格納、取得、削除します。</p><p>例1．ハッシュに項目を追加する。</p><div class="language-c vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">#include</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;uthash.h&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">struct</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> my_struct {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    int</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> id;</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">            /* このフィールドをキーとして使用します */</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    char</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;"> name</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">10</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">];</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    UT_hash_handle hh;</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> /* この構造体をハッシャブルにする */</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">};</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">struct</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> my_struct </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">*</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">users </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> NULL</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">void</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> add_user</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">struct</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> my_struct </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">*</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">s</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    HASH_ADD_INT</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">( users, id, s );</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p>例2.ハッシュの中の項目を調べる。</p><div class="language-c vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">struct</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> my_struct </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">*</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">find_user</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">int</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;"> user_id</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    struct</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> my_struct </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">*</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">s;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    HASH_FIND_INT</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">( users, </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&amp;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">user_id, s );</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> s;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p>例3．ハッシュから項目を削除する。</p><div class="language-c vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">void</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> delete_user</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">struct</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> my_struct </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">*</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">user</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    HASH_DEL</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">( users, user);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p>詳細や使用例については、「ユーザーガイド」をご覧ください。</p>`,9),p=[t];function l(k,e,d,r,E,c){return a(),i("div",null,p)}const u=s(h,[["render",l]]);export{y as __pageData,u as default};

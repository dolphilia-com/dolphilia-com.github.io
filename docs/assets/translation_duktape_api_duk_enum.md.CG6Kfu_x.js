import{_ as s,c as i,o as a,a3 as t}from"./chunks/framework.DflgEAq4.js";const u=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"translation/duktape/api/duk_enum.md","filePath":"translation/duktape/api/duk_enum.md","lastUpdated":null}'),n={name:"translation/duktape/api/duk_enum.md"},e=t(`<h2 id="duk-enum" tabindex="-1">duk_enum() <a class="header-anchor" href="#duk-enum" aria-label="Permalink to &quot;duk_enum()&quot;">​</a></h2><p>1.0.0 property object</p><h3 id="プロトタイプ" tabindex="-1">プロトタイプ <a class="header-anchor" href="#プロトタイプ" aria-label="Permalink to &quot;プロトタイプ&quot;">​</a></h3><div class="language-c vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">void</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> duk_enum</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(duk_context </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">*</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">ctx</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">duk_idx_t</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;"> obj_idx</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">duk_uint_t</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;"> enum_flags</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span></code></pre></div><h3 id="スタック" tabindex="-1">スタック <a class="header-anchor" href="#スタック" aria-label="Permalink to &quot;スタック&quot;">​</a></h3><p>| ... | obj | ... | -&gt; | ... | obj | ... | enum |</p><h3 id="要約" tabindex="-1">要約 <a class="header-anchor" href="#要約" aria-label="Permalink to &quot;要約&quot;">​</a></h3><p>obj_idx にあるオブジェクトの列挙子を作成します。列挙の詳細はenum_flagsで制御することができます。対象値がオブジェクトでない場合は、エラーを投げます。。</p><p>列挙のフラグ。</p><p>DUK_ENUM_INCLUDE_NONENUMERABLE 列挙不可能なプロパティも列挙します。デフォルトでは、列挙可能なプロパティのみが列挙されます。 DUK_ENUM_INCLUDE_HIDDEN 非表示のシンボルも列挙します。デフォルトでは、非表示のシンボルは列挙されません。DUK_ENUM_INCLUDE_SYMBOLS と一緒に使用します。Duktape 1.x では、このフラグは DUK_ENUM_INCLUDE_INTERNAL と呼ばれていた。 DUK_ENUM_INCLUDE_SYMBOLS シンボルを列挙の結果に含めます。DUK_ENUM_INCLUDE_HIDDEN が指定されていない限り、隠しシンボルは含まれません。 DUK_ENUM_EXCLUDE_STRINGS 列挙結果から文字列を除外します。デフォルトでは文字列が含まれます。 DUK_ENUM_OWN_PROPERTIES_ONLY オブジェクトの「自身の」プロパティのみを列挙します。デフォルトでは、継承されたプロパティも列挙されます。 DUK_ENUM_ARRAY_INDICES_ONLY 配列のインデックス、すなわち &quot;0&quot;、&quot;1&quot;、&quot;2&quot; などの形式のプロパティ名のみを列挙します。 DUK_ENUM_SORT_ARRAY_INDICES ES2015 [[OwnPropertyKeys]] の列挙順序を継承レベルごとではなく、列挙結果全体に適用します。また、シンボルは通常の文字列キーの後にソートされます (どちらも挿入順です)。 DUK_ENUM_NO_PROXY_BEHAVIOR プロキシ動作を呼び出さずにプロキシオブジェクト自身を列挙します。 フラグがない場合、列挙はfor-inのように動作します。自己および継承された列挙可能なプロパティが含まれ、列挙順はECMAScript ES2015 [[OwnPropertyKeys]] 列挙順（各相続レベルに対して適用）に従っています。</p><p>列挙子を作成したら、duk_next() を使用して列挙子からキー (またはキーと値のペア) を抽出します。</p><p>ES2015 [[OwnPropertyKeys]] の列挙順は、 (1) 配列インデックスの昇順、 (2) 配列インデックス以外のキーの挿入順、 (3) シンボルの挿入順となります。このルールは継承レベルごとに別々に適用されるため、配列インデックスのキーが継承された場合、結果的に順番が狂って表示されることになります。配列のインデックスが継承されることはほとんどないため、ほとんどの実用的なコードでは、これは問題ではありません。DUK_ENUM_SORT_ARRAY_INDICES を使用すると、列挙シーケンス全体を強制的にソートすることができます。</p><h3 id="例" tabindex="-1">例 <a class="header-anchor" href="#例" aria-label="Permalink to &quot;例&quot;">​</a></h3><div class="language-c vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">duk_enum</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(ctx, </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">3</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, DUK_ENUM_INCLUDE_NONENUMERABLE);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">while</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">duk_next</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(ctx, </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> /*enum_idx*/</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> /*get_value*/</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)) {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    /* [ ... enum key ] */</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    printf</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;-&gt; key </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">%s\\n</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">duk_get_string</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(ctx, </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">));</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    duk_pop</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(ctx);</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  /* pop_key */</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">duk_pop</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(ctx);</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  /* pop enum object */</span></span></code></pre></div><h3 id="参照" tabindex="-1">参照 <a class="header-anchor" href="#参照" aria-label="Permalink to &quot;参照&quot;">​</a></h3><p>duk_next</p>`,16),h=[e];function p(k,l,d,r,E,_){return a(),i("div",null,h)}const c=s(n,[["render",p]]);export{u as __pageData,c as default};

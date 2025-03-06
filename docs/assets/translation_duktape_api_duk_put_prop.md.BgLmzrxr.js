import{_ as s,c as i,o as a,a3 as t}from"./chunks/framework.DflgEAq4.js";const E=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"translation/duktape/api/duk_put_prop.md","filePath":"translation/duktape/api/duk_put_prop.md","lastUpdated":null}'),p={name:"translation/duktape/api/duk_put_prop.md"},n=t(`<h2 id="duk-put-prop" tabindex="-1">duk_put_prop() <a class="header-anchor" href="#duk-put-prop" aria-label="Permalink to &quot;duk_put_prop()&quot;">​</a></h2><p>1.0.0 property</p><h3 id="プロトタイプ" tabindex="-1">プロトタイプ <a class="header-anchor" href="#プロトタイプ" aria-label="Permalink to &quot;プロトタイプ&quot;">​</a></h3><div class="language-c vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">duk_bool_t</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> duk_put_prop</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(duk_context </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">*</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">ctx</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">duk_idx_t</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;"> obj_idx</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span></code></pre></div><h3 id="スタック" tabindex="-1">スタック <a class="header-anchor" href="#スタック" aria-label="Permalink to &quot;スタック&quot;">​</a></h3><p>| ... | obj | ... | key | val | -&gt; | ... | obj | ... |</p><h3 id="要約" tabindex="-1">要約 <a class="header-anchor" href="#要約" aria-label="Permalink to &quot;要約&quot;">​</a></h3><p>obj_idx にある値のプロパティキーに val を書き込む。 key と val はスタックから削除されます。リターンコードとエラースローの動作</p><p>プロパティの書き込みに成功した場合、1を返す。 書き込みに失敗した場合、エラーを投げます。（ストリクトモードセマンティクス）。また、アクセッサプロパティのセッタ関数によってもエラーがスローされる場合があります。 obj_idx の値がオブジェクト互換でない場合、エラーを投げます。。 obj_idx が無効な場合、エラーを投げます。。 プロパティの書き込みは、ECMAScript の式 obj[key] = val と等価です。プロパティ書き込みが成功または失敗するときの正確なルールは、同等の代入を行う ECMAScript コードと同じです。正確なセマンティクスは、プロパティアクセサ、PutValue (V, W)、および [[Put]] (P, V, Throw) を参照してください。ターゲット値とキーは共に強制されます。</p><p>ターゲット値は自動的にオブジェクトに強制されます。しかし、オブジェクトは一過性のものなので、そのプロパティを書いてもあまり意味がない。さらに、ECMAScript のセマンティクスはそのような一時的なオブジェクトのために新しいプロパティを作成することを防ぎます（特別な [[Put]] バリアントのステップ 7、PutValue (V, W) を参照）。 キー引数は内部的に文字列または Symbol になる ToPropertyKey() 強制適用を使用して強制適用されます。配列と数値インデックスには、明示的な文字列強制を避ける内部高速パスがあるので、該当する場合は数値キーを使用してください。 ターゲットがセットトラップを実装するProxyオブジェクトである場合、トラップが呼び出され、APIコールの戻り値はトラップの戻り値に一致します。</p><p>ECMAScript では、代入式は、代入の成功の有無にかかわらず、右辺の式の値を持つ。この API コールの戻り値は、ECMAScript によって指定されておらず、ECMAScript コードで利用可能でもありません。API コールは、割り当てが成功したかどうかに応じて 0 または 1 を返します (厳格なコードでは 0 の戻り値がエラーに昇格します)。 キーが固定文字列である場合、1 つの API 呼び出しを回避して、 duk_put_prop_string() 変数を使用することができます。同様に、キーが配列のインデックスである場合、 duk_put_prop_index() 変数を使用することができます。</p><p>プロパティアクセスの基本値は通常オブジェクトですが、技術的には任意の値にすることができます。普通の文字列やバッファの値には仮想的なインデックスプロパティがあり、例えば &quot;foo&quot;[2] にアクセスすることができます。また、ほとんどのプリミティブな値は何らかのプロトタイプオブジェクトを継承しているので、例えば (12345).toString(16) のようにメソッドを呼び出すことができます。</p><h3 id="例" tabindex="-1">例 <a class="header-anchor" href="#例" aria-label="Permalink to &quot;例&quot;">​</a></h3><div class="language-c vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">duk_bool_t</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> rc;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">duk_push_string</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(ctx, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;key&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">duk_push_string</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(ctx, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;value&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">rc </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> duk_put_prop</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(ctx, </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">3</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">printf</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;rc=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">%d\\n</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, (</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">int</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">rc</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span></code></pre></div><h3 id="参照" tabindex="-1">参照 <a class="header-anchor" href="#参照" aria-label="Permalink to &quot;参照&quot;">​</a></h3><p>duk_put_prop_index duk_put_prop_string duk_put_prop_lstring duk_put_prop_literal duk_put_prop_heapptr</p>`,16),h=[n];function e(l,k,r,d,o,u){return a(),i("div",null,h)}const c=s(p,[["render",e]]);export{E as __pageData,c as default};

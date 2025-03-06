import{_ as p,c as t,o as a,a3 as o}from"./chunks/framework.DflgEAq4.js";const c=JSON.parse('{"title":"数学","description":"","frontmatter":{},"headers":[],"relativePath":"translation/hsp/hspmath.md","filePath":"translation/hsp/hspmath.md","lastUpdated":null}'),n={name:"translation/hsp/hspmath.md"},r=o(`<h1 id="数学" tabindex="-1">数学 <a class="header-anchor" href="#数学" aria-label="Permalink to &quot;数学&quot;">​</a></h1><p><strong>対応</strong>:</p><ul><li>Win</li><li>Mac</li><li>Cli</li><li>Let</li></ul><h2 id="M_LOG2E" tabindex="-1">M_LOG2E <a class="header-anchor" href="#M_LOG2E" aria-label="Permalink to &quot;M_LOG2E {#M_LOG2E}&quot;">​</a></h2><p>2を底とするネイピア数の対数</p><p><strong>説明</strong>:</p><p>2を底とするネイピア数の対数を表す定数です。 2を底とするネイピア数の対数とは、log2(m_e)のことを指します。</p><p><strong>グループ</strong>:</p><p>数学定数</p><p><strong>例</strong>:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>#include &quot;hspmath.as&quot;</span></span>
<span class="line"><span>	a = 10.0</span></span>
<span class="line"><span>	mes &quot;2を底とするaの対数は&quot; + log2(a) + &quot;です。&quot;</span></span>
<span class="line"><span>	mes &quot;これはlogf(a) * m_log2eとしても求められます：&quot; + (logf(a) * m_log2e) + &quot;\\n&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>	mes &quot;このようにm_log2eを「eを底とする対数」にかけることで、&quot;</span></span>
<span class="line"><span>	mes &quot;「2を底とする対数」を得ることができます。&quot;</span></span>
<span class="line"><span>	stop</span></span></code></pre></div><p><strong>参照</strong>:</p><p>M_LOG10E M_E log2</p><p>%type ユーザー定義マクロ</p><h2 id="M_LOG10E" tabindex="-1">M_LOG10E <a class="header-anchor" href="#M_LOG10E" aria-label="Permalink to &quot;M_LOG10E {#M_LOG10E}&quot;">​</a></h2><p>10を底とするネイピア数の対数</p><p><strong>説明</strong>:</p><p>10を底とするネイピア数の対数を表す定数です。 10を底とするネイピア数の対数とは、log10(m_e)のことを指します。</p><p><strong>グループ</strong>:</p><p>数学定数</p><p><strong>例</strong>:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>#include &quot;hspmath.as&quot;</span></span>
<span class="line"><span>	a = m_e</span></span>
<span class="line"><span>	mes &quot;10を底とするaの対数は&quot; + log10(a) + &quot;です。&quot;</span></span>
<span class="line"><span>	mes &quot;これはlogf(a) * m_log10eとしても求められます：&quot; + (logf(a) * m_log10e) + &quot;\\n&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>	mes &quot;このようにm_log10eを「eを底とする対数」にかけることで、&quot;</span></span>
<span class="line"><span>	mes &quot;「10を底とする対数」を得ることができます。&quot;</span></span>
<span class="line"><span>	stop</span></span></code></pre></div><p><strong>参照</strong>:</p><p>M_LOG2E log10 M_E</p><p>%type ユーザー定義マクロ</p><h2 id="M_LN2" tabindex="-1">M_LN2 <a class="header-anchor" href="#M_LN2" aria-label="Permalink to &quot;M_LN2 {#M_LN2}&quot;">​</a></h2><p>ネイピア数を底とした2の対数</p><p><strong>説明</strong>:</p><p>ネイピア数を底とした2の対数を表す定数です。 ネイピア数を底とした2の対数とは、logf(2)のことを指します。</p><p><strong>グループ</strong>:</p><p>数学定数</p><p><strong>参照</strong>:</p><p>M_LN10</p><p>%type ユーザー定義マクロ</p><h2 id="M_LN10" tabindex="-1">M_LN10 <a class="header-anchor" href="#M_LN10" aria-label="Permalink to &quot;M_LN10 {#M_LN10}&quot;">​</a></h2><p>ネイピア数を底とした10の対数</p><p><strong>説明</strong>:</p><p>ネイピア数を底とした10の対数を表す定数です。 ネイピア数を底とした10の対数とは、logf(10)のことを指します。</p><p><strong>グループ</strong>:</p><p>数学定数</p><p><strong>参照</strong>:</p><p>M_LN2</p><p>%type ユーザー定義マクロ</p><h2 id="M_E" tabindex="-1">M_E <a class="header-anchor" href="#M_E" aria-label="Permalink to &quot;M_E {#M_E}&quot;">​</a></h2><p>ネイピア数</p><p><strong>説明</strong>:</p><p>ネイピア数（自然対数の底）eを表す定数です。</p><p><strong>参照</strong>:</p><p>M_PI M_LOG2E M_LOG10E</p><p><strong>グループ</strong>:</p><p>数学定数</p><p>%url <a href="http://ja.wikipedia.org/wiki/%E3%83%8D%E3%82%A4%E3%83%94%E3%82%A2%E6%95%B0" target="_blank" rel="noreferrer">http://ja.wikipedia.org/wiki/ネイピア数</a></p><p>%type ユーザー定義マクロ</p><h2 id="M_SQRTPI" tabindex="-1">M_SQRTPI <a class="header-anchor" href="#M_SQRTPI" aria-label="Permalink to &quot;M_SQRTPI {#M_SQRTPI}&quot;">​</a></h2><p>円周率の平方根</p><p><strong>説明</strong>:</p><p>円周率の平方根を表す定数です。</p><p><strong>参照</strong>:</p><p>sqrt M_PI M_SQRT2 M_SQRT3</p><p><strong>グループ</strong>:</p><p>数学定数</p><p>%type ユーザー定義マクロ</p><h2 id="M_SQRT2" tabindex="-1">M_SQRT2 <a class="header-anchor" href="#M_SQRT2" aria-label="Permalink to &quot;M_SQRT2 {#M_SQRT2}&quot;">​</a></h2><p>2の平方根</p><p><strong>説明</strong>:</p><p>2の平方根を表す定数です。</p><p><strong>参照</strong>:</p><p>sqrt M_SQRTPI M_SQRT3</p><p><strong>グループ</strong>:</p><p>数学定数</p><p>%type ユーザー定義マクロ</p><h2 id="M_SQRT3" tabindex="-1">M_SQRT3 <a class="header-anchor" href="#M_SQRT3" aria-label="Permalink to &quot;M_SQRT3 {#M_SQRT3}&quot;">​</a></h2><p>3の累乗根</p><p><strong>説明</strong>:</p><p>3の累乗根を表す定数です。</p><p><strong>参照</strong>:</p><p>sqrt M_SQRTPI M_SQRT2</p><p><strong>グループ</strong>:</p><p>数学定数</p><p>%type ユーザー定義マクロ</p><h2 id="DBL_DIG" tabindex="-1">DBL_DIG <a class="header-anchor" href="#DBL_DIG" aria-label="Permalink to &quot;DBL_DIG {#DBL_DIG}&quot;">​</a></h2><p>10進数で有効な桁数</p><p><strong>説明</strong>:</p><p>10進数で有効な桁数を表す定数です。</p><p><strong>グループ</strong>:</p><p>doubleの限度</p><p>%type ユーザー定義マクロ</p><h2 id="DBL_EPSILON" tabindex="-1">DBL_EPSILON <a class="header-anchor" href="#DBL_EPSILON" aria-label="Permalink to &quot;DBL_EPSILON {#DBL_EPSILON}&quot;">​</a></h2><p>1.0とその次に大きい値との差</p><p><strong>説明</strong>:</p><p>1.0とその次に大きい値との差を表す定数です。</p><p><strong>グループ</strong>:</p><p>doubleの限度</p><p>%type ユーザー定義マクロ</p><h2 id="DBL_MANT_DIG" tabindex="-1">DBL_MANT_DIG <a class="header-anchor" href="#DBL_MANT_DIG" aria-label="Permalink to &quot;DBL_MANT_DIG {#DBL_MANT_DIG}&quot;">​</a></h2><p>仮数部のbit数</p><p><strong>説明</strong>:</p><p>実数型の数値を表す際に用いる仮数部のbit数を表す定数です。</p><p><strong>グループ</strong>:</p><p>doubleの限度</p><p>%type ユーザー定義マクロ</p><h2 id="DBL_MAX" tabindex="-1">DBL_MAX <a class="header-anchor" href="#DBL_MAX" aria-label="Permalink to &quot;DBL_MAX {#DBL_MAX}&quot;">​</a></h2><p>実数の最大値</p><p><strong>説明</strong>:</p><p>実数で表現できる最大値を表す定数です。</p><p><strong>グループ</strong>:</p><p>doubleの限度</p><p><strong>参照</strong>:</p><p>INT_MAX</p><p>%type ユーザー定義マクロ</p><h2 id="DBL_MAX_10_EXP" tabindex="-1">DBL_MAX_10_EXP <a class="header-anchor" href="#DBL_MAX_10_EXP" aria-label="Permalink to &quot;DBL_MAX_10_EXP {#DBL_MAX_10_EXP}&quot;">​</a></h2><p>10進数での指数部の最大値</p><p><strong>説明</strong>:</p><p>指数部の最大値を表す定数です。</p><p><strong>参照</strong>:</p><p>DBL_MIN_10_EXP DBL_MAX_EXP</p><p><strong>グループ</strong>:</p><p>doubleの限度</p><p>%type ユーザー定義マクロ</p><h2 id="DBL_MAX_EXP" tabindex="-1">DBL_MAX_EXP <a class="header-anchor" href="#DBL_MAX_EXP" aria-label="Permalink to &quot;DBL_MAX_EXP {#DBL_MAX_EXP}&quot;">​</a></h2><p>2進数での指数部の最大値</p><p><strong>説明</strong>:</p><p>指数部の最大値を表す定数です。</p><p><strong>グループ</strong>:</p><p>doubleの限度</p><p><strong>参照</strong>:</p><p>DBL_MAX_10_EXP INT_MAX</p><p>%type ユーザー定義マクロ</p><h2 id="DBL_MIN" tabindex="-1">DBL_MIN <a class="header-anchor" href="#DBL_MIN" aria-label="Permalink to &quot;DBL_MIN {#DBL_MIN}&quot;">​</a></h2><p>0を超える最小の値</p><p><strong>説明</strong>:</p><p>0を超える最小の値を表す定数です。</p><p><strong>グループ</strong>:</p><p>doubleの限度</p><p>%type ユーザー定義マクロ</p><h2 id="DBL_MIN_10_EXP" tabindex="-1">DBL_MIN_10_EXP <a class="header-anchor" href="#DBL_MIN_10_EXP" aria-label="Permalink to &quot;DBL_MIN_10_EXP {#DBL_MIN_10_EXP}&quot;">​</a></h2><p>10進数での指数部の最小値</p><p><strong>説明</strong>:</p><p>指数部の最小値を表す定数です。</p><p><strong>参照</strong>:</p><p>DBL_MAX_10_EXP DBL_MIN_EXP</p><p><strong>グループ</strong>:</p><p>doubleの限度</p><p>%type ユーザー定義マクロ</p><h2 id="DBL_MIN_EXP" tabindex="-1">DBL_MIN_EXP <a class="header-anchor" href="#DBL_MIN_EXP" aria-label="Permalink to &quot;DBL_MIN_EXP {#DBL_MIN_EXP}&quot;">​</a></h2><p>2進数での指数部の最小値</p><p><strong>説明</strong>:</p><p>指数部の最小値を表す定数です。</p><p><strong>参照</strong>:</p><p>DBL_MIN_10_EXP</p><p><strong>グループ</strong>:</p><p>doubleの限度</p><p>%type ユーザー定義マクロ</p><h2 id="INT_DIGIT" tabindex="-1">INT_DIGIT <a class="header-anchor" href="#INT_DIGIT" aria-label="Permalink to &quot;INT_DIGIT {#INT_DIGIT}&quot;">​</a></h2><p>2進数で有効な桁数</p><p><strong>説明</strong>:</p><p>2進数で有効な桁数を表す定数です。</p><p><strong>参照</strong>:</p><p>INT_DIGIT10</p><p><strong>グループ</strong>:</p><p>intの限度</p><p>%type ユーザー定義マクロ</p><h2 id="INT_DIGIT10" tabindex="-1">INT_DIGIT10 <a class="header-anchor" href="#INT_DIGIT10" aria-label="Permalink to &quot;INT_DIGIT10 {#INT_DIGIT10}&quot;">​</a></h2><p>10進数で有効な桁数</p><p><strong>説明</strong>:</p><p>10進数で有効な桁数を表す定数です。</p><p><strong>参照</strong>:</p><p>INT_DIGIT</p><p><strong>グループ</strong>:</p><p>intの限度</p><p>%type ユーザー定義マクロ</p><h2 id="INT_MAX" tabindex="-1">INT_MAX <a class="header-anchor" href="#INT_MAX" aria-label="Permalink to &quot;INT_MAX {#INT_MAX}&quot;">​</a></h2><p>最大値</p><p><strong>説明</strong>:</p><p>整数で表現できる最大値を表す定数です。</p><p><strong>参照</strong>:</p><p>DBL_MAX INT_MIN</p><p><strong>グループ</strong>:</p><p>intの限度</p><p>%type ユーザー定義マクロ</p><h2 id="INT_MIN" tabindex="-1">INT_MIN <a class="header-anchor" href="#INT_MIN" aria-label="Permalink to &quot;INT_MIN {#INT_MIN}&quot;">​</a></h2><p>最小値</p><p><strong>説明</strong>:</p><p>整数で表現できる最小の値を表す定数です。</p><p><strong>参照</strong>:</p><p>INT_MAX</p><p><strong>グループ</strong>:</p><p>intの限度</p><h2 id="pow" tabindex="-1">pow <a class="header-anchor" href="#pow" aria-label="Permalink to &quot;pow {#pow}&quot;">​</a></h2><p>累乗（べき乗）を求める</p><p><strong>パラメーター</strong>:</p><p>(p1, p2) p1 : 底（0以上） p2 : 指数</p><p><strong>説明</strong>:</p><p>p1をp2乗した値を求めます。結果は実数で与えられます。</p><p>p1は必ず正でなければなりません。負の場合はエラーにはなりませんが、非数（-1.#IND00）が返ります。</p><p>p2は正負どちらでも構いません。また、実数を指定することも可能です。</p><p><strong>例</strong>:</p><p>#include &quot;hspmath.as&quot; repeat 5, -2 mes &quot;10の&quot; + cnt + &quot;乗は&quot; + pow(10, cnt) + &quot;です。&quot; loop stop</p><p><strong>参照</strong>:</p><p>powf logf</p><h2 id="log10" tabindex="-1">log10 <a class="header-anchor" href="#log10" aria-label="Permalink to &quot;log10 {#log10}&quot;">​</a></h2><p>10を底とした対数（常用対数）</p><p><strong>パラメーター</strong>:</p><p>(p1) p1 : 真数</p><p><strong>説明</strong>:</p><p>10を底とするp1の対数を求めます。結果は実数で与えられます。</p><p><strong>参照</strong>:</p><p>M_LOG10E logf log2</p><h2 id="log2" tabindex="-1">log2 <a class="header-anchor" href="#log2" aria-label="Permalink to &quot;log2 {#log2}&quot;">​</a></h2><p>2を底とした対数</p><p><strong>パラメーター</strong>:</p><p>(p1) p1 : 真数</p><p><strong>説明</strong>:</p><p>2を底とするp1の対数を求めます。結果は実数で与えられます。</p><p><strong>参照</strong>:</p><p>M_LOG2E logf log10</p><h2 id="asin" tabindex="-1">asin <a class="header-anchor" href="#asin" aria-label="Permalink to &quot;asin {#asin}&quot;">​</a></h2><p>サインの逆関数（アークサイン）</p><p><strong>パラメーター</strong>:</p><p>(p1) p1 : 角度値（ラジアン）</p><p><strong>説明</strong>:</p><p>p1のアークサイン（逆正弦）値を返します。 結果は実数型かつラジアン、-M_PI/2〜M_PI/2（度数法で-90°〜90°）の範囲で与えられます。</p><p><strong>参照</strong>:</p><p>acos atan</p><p>%url <a href="http://ja.wikipedia.org/wiki/%E9%80%86%E4%B8%89%E8%A7%92%E9%96%A2%E6%95%B0" target="_blank" rel="noreferrer">http://ja.wikipedia.org/wiki/逆三角関数</a></p><h2 id="acos" tabindex="-1">acos <a class="header-anchor" href="#acos" aria-label="Permalink to &quot;acos {#acos}&quot;">​</a></h2><p>コサインの逆関数（アークコサイン）</p><p><strong>パラメーター</strong>:</p><p>(p1) p1 : 角度値（ラジアン）</p><p><strong>説明</strong>:</p><p>p1のアークコサイン（逆余弦）値を返します。 結果は実数型かつラジアン、0〜M_PI（度数法で0°〜180°）の範囲で与えられます。</p><p><strong>参照</strong>:</p><p>asin atan</p><p>%url <a href="http://ja.wikipedia.org/wiki/%E9%80%86%E4%B8%89%E8%A7%92%E9%96%A2%E6%95%B0" target="_blank" rel="noreferrer">http://ja.wikipedia.org/wiki/逆三角関数</a></p><h2 id="sinh" tabindex="-1">sinh <a class="header-anchor" href="#sinh" aria-label="Permalink to &quot;sinh {#sinh}&quot;">​</a></h2><p>双曲線正弦関数（ハイパボリックサイン）</p><p><strong>パラメーター</strong>:</p><p>(p1) p1 : 角度値（ラジアン）</p><p><strong>説明</strong>:</p><p>p1のハイパボリックサイン（双曲線正弦）値を返します。 結果は実数で与えられます。</p><p><strong>参照</strong>:</p><p>cosh tanh asinh</p><p>%url <a href="http://ja.wikipedia.org/wiki/%E5%8F%8C%E6%9B%B2%E7%B7%9A%E9%96%A2%E6%95%B0" target="_blank" rel="noreferrer">http://ja.wikipedia.org/wiki/双曲線関数</a></p><h2 id="cosh" tabindex="-1">cosh <a class="header-anchor" href="#cosh" aria-label="Permalink to &quot;cosh {#cosh}&quot;">​</a></h2><p>双曲線余弦関数（ハイパボリックコサイン）</p><p><strong>パラメーター</strong>:</p><p>(p1) p1 : 角度値（ラジアン）</p><p><strong>説明</strong>:</p><p>p1のハイパボリックコサイン（双曲線余弦）値を返します。 結果は実数で与えられます。</p><p><strong>参照</strong>:</p><p>sinh tanh acosh</p><p>%url <a href="http://ja.wikipedia.org/wiki/%E5%8F%8C%E6%9B%B2%E7%B7%9A%E9%96%A2%E6%95%B0" target="_blank" rel="noreferrer">http://ja.wikipedia.org/wiki/双曲線関数</a></p><h2 id="tanh" tabindex="-1">tanh <a class="header-anchor" href="#tanh" aria-label="Permalink to &quot;tanh {#tanh}&quot;">​</a></h2><p>双曲線正接関数（ハイパボリックタンジェント）</p><p><strong>パラメーター</strong>:</p><p>(p1) p1 : 角度値（ラジアン）</p><p><strong>説明</strong>:</p><p>p1のハイパボリックタンジェント（双曲線正接）値を返します。 結果は実数で与えられます。</p><p><strong>参照</strong>:</p><p>sinh cosh atanh</p><p>%url <a href="http://ja.wikipedia.org/wiki/%E5%8F%8C%E6%9B%B2%E7%B7%9A%E9%96%A2%E6%95%B0" target="_blank" rel="noreferrer">http://ja.wikipedia.org/wiki/双曲線関数</a></p><h2 id="asinh" tabindex="-1">asinh <a class="header-anchor" href="#asinh" aria-label="Permalink to &quot;asinh {#asinh}&quot;">​</a></h2><p>双曲線正弦関数の逆関数（アークハイパボリックサイン）</p><p><strong>パラメーター</strong>:</p><p>(p1) p1 : 角度値（ラジアン）</p><p><strong>説明</strong>:</p><p>p1のアークハイパボリックサイン（逆双曲線正弦）値を返します。 結果は実数で与えられます。</p><p><strong>参照</strong>:</p><p>acosh atanh sinh</p><p>%url <a href="http://ja.wikipedia.org/wiki/%E5%8F%8C%E6%9B%B2%E7%B7%9A%E9%96%A2%E6%95%B0" target="_blank" rel="noreferrer">http://ja.wikipedia.org/wiki/双曲線関数</a></p><h2 id="acosh" tabindex="-1">acosh <a class="header-anchor" href="#acosh" aria-label="Permalink to &quot;acosh {#acosh}&quot;">​</a></h2><p>双曲線余弦関数の逆関数（アークハイパボリックコサイン）</p><p><strong>パラメーター</strong>:</p><p>(p1) p1 : 角度値（ラジアン）</p><p><strong>説明</strong>:</p><p>p1のアークハイパボリックコサイン（逆双曲線余弦）値を返します。 結果は実数で与えられます。</p><p><strong>参照</strong>:</p><p>asinh atanh cosh</p><p>%url <a href="http://ja.wikipedia.org/wiki/%E5%8F%8C%E6%9B%B2%E7%B7%9A%E9%96%A2%E6%95%B0" target="_blank" rel="noreferrer">http://ja.wikipedia.org/wiki/双曲線関数</a></p><h2 id="atanh" tabindex="-1">atanh <a class="header-anchor" href="#atanh" aria-label="Permalink to &quot;atanh {#atanh}&quot;">​</a></h2><p>双曲線正接関数の逆関数（アークハイパボリックタンジェント）</p><p><strong>パラメーター</strong>:</p><p>(p1) p1 : 角度値（ラジアン）</p><p><strong>説明</strong>:</p><p>p1のアークハイパボリックタンジェント（逆双曲線正接）値を返します。 結果は実数で与えられます。</p><p><strong>参照</strong>:</p><p>asinh acosh tanh</p><p>%url <a href="http://ja.wikipedia.org/wiki/%E5%8F%8C%E6%9B%B2%E7%B7%9A%E9%96%A2%E6%95%B0" target="_blank" rel="noreferrer">http://ja.wikipedia.org/wiki/双曲線関数</a></p><h2 id="isfinite" tabindex="-1">isfinite <a class="header-anchor" href="#isfinite" aria-label="Permalink to &quot;isfinite {#isfinite}&quot;">​</a></h2><p>有限／無限・非数の判定</p><p><strong>パラメーター</strong>:</p><p>(p1) p1 : 判定する値</p><p><strong>説明</strong>:</p><p>p1が有限の値ならば1を、p1が無限または非数の時は0を返します。</p><p>非数とは数値以外の型（文字列やラベル、モジュール型など）を指すものではありません。変数の型を調べる時はvartype関数を使用してください。</p><p><strong>例</strong>:</p><p>#include &quot;hspmath.as&quot; mes isfinite(10) // 有限の値 mes isfinite(sqrt(-1)) // 非数 mes isfinite(expf(100)) // 有限の値 mes isfinite(expf(1000)) // 無限大 stop</p><p><strong>参照</strong>:</p><p>isnan vartype</p><h2 id="isnan" tabindex="-1">isnan <a class="header-anchor" href="#isnan" aria-label="Permalink to &quot;isnan {#isnan}&quot;">​</a></h2><p>非数の判定</p><p><strong>パラメーター</strong>:</p><p>(p1) p1 : 判定する値</p><p><strong>説明</strong>:</p><p>p1が非数の時は1を、それ以外の時は0を返します。</p><p>非数とは数値以外の型（文字列やラベル、モジュール型など）を指すものではありません。変数の型を調べる時はvartype関数を使用してください。</p><p><strong>例</strong>:</p><p>#include &quot;hspmath.as&quot; mes isnan(10) // 有限の値 mes isnan(sqrt(-1)) // 非数 mes isnan(expf(100)) // 有限の値 mes isnan(expf(1000)) // 無限大 stop</p><p><strong>参照</strong>:</p><p>isfinite vartype</p><p>%url <a href="http://ja.wikipedia.org/wiki/%E9%9D%9E%E6%95%B0" target="_blank" rel="noreferrer">http://ja.wikipedia.org/wiki/非数</a></p><h2 id="round" tabindex="-1">round <a class="header-anchor" href="#round" aria-label="Permalink to &quot;round {#round}&quot;">​</a></h2><p>四捨五入</p><p><strong>パラメーター</strong>:</p><p>(p1) p1 : 四捨五入する値（実数）</p><p><strong>説明</strong>:</p><p>p1の小数点以下を四捨五入し、その結果を実数で返します。</p><p><strong>例</strong>:</p><p>#include &quot;hspmath.as&quot; repeat 10 tmp = 1.0 + 0.1 * cnt mes strf(&quot;%0.1fを四捨五入すると&quot;, tmp) + strf(&quot;%0.1fになります。&quot;, round(tmp)) loop stop</p><p><strong>参照</strong>:</p><p>intf floor ceil</p><p>%url <a href="http://ja.wikipedia.org/wiki/%E7%AB%AF%E6%95%B0%E5%87%A6%E7%90%86" target="_blank" rel="noreferrer">http://ja.wikipedia.org/wiki/端数処理</a></p><h2 id="sgn" tabindex="-1">sgn <a class="header-anchor" href="#sgn" aria-label="Permalink to &quot;sgn {#sgn}&quot;">​</a></h2><p>符号</p><p><strong>パラメーター</strong>:</p><p>(p1) p1 : 符号を判定する値（数値）</p><p><strong>説明</strong>:</p><p>数値の符号を判定し、正ならば1を・負ならば-1を・ゼロならば0を返します。</p><p><strong>例</strong>:</p><p>#include &quot;hspmath.as&quot; tmp = 10 sign = sgn(tmp) if sign == 1 { mes str(tmp) + &quot;は正です。&quot; } else : if sign == -1 { mes str(tmp) + &quot;は負です。&quot; } else { mes str(tmp) + &quot;はゼロです。&quot; } stop</p><h2 id="intf" tabindex="-1">intf <a class="header-anchor" href="#intf" aria-label="Permalink to &quot;intf {#intf}&quot;">​</a></h2><p>0の方向へ丸め</p><p><strong>パラメーター</strong>:</p><p>(p1) p1 : 丸める数値</p><p><strong>説明</strong>:</p><p>p1を0の方向に丸めた数値を返します。結果は実数で返されます。</p><p>ここで「p1を0の方向に丸める」とは、「p1の小数点以下を切り捨てる」ことを意味します。</p><p><strong>例</strong>:</p><p>#include &quot;hspmath.as&quot; tmp = -2.5 while(tmp &lt;= 2.5) mes strf(&quot;%4.1f&quot;, tmp) + &quot;を0の方向へ丸めると、&quot; + strf(&quot;%4.1f&quot;, intf(tmp)) + &quot;になります。&quot; tmp += 0.5 wend stop</p><p><strong>参照</strong>:</p><p>round floor ceil</p><p>%url <a href="http://ja.wikipedia.org/wiki/%E7%AB%AF%E6%95%B0%E5%87%A6%E7%90%86" target="_blank" rel="noreferrer">http://ja.wikipedia.org/wiki/端数処理</a></p><h2 id="floor" tabindex="-1">floor <a class="header-anchor" href="#floor" aria-label="Permalink to &quot;floor {#floor}&quot;">​</a></h2><p>負の方向へ丸め</p><p><strong>パラメーター</strong>:</p><p>(p1) p1 : 丸める数値</p><p><strong>説明</strong>:</p><p>p1を負の方向に丸めた数値を返します。結果は実数で返されます。</p><p>ここで「p1を負の方向に丸める」とは、</p><ul><li>p1が正ならば小数点以下を切り捨てる</li><li>p1が負ならば小数点以下を切り上げる</li></ul><p>ことを意味します。</p><p><strong>例</strong>:</p><p>#include &quot;hspmath.as&quot; tmp = -2.5 while(tmp &lt;= 2.5) mes strf(&quot;%4.1f&quot;, tmp) + &quot;を負の方向へ丸めると、&quot; + strf(&quot;%4.1f&quot;, floor(tmp)) + &quot;になります。&quot; tmp += 0.5 wend stop</p><p><strong>参照</strong>:</p><p>round intf ceil</p><p>%url <a href="http://ja.wikipedia.org/wiki/%E7%AB%AF%E6%95%B0%E5%87%A6%E7%90%86" target="_blank" rel="noreferrer">http://ja.wikipedia.org/wiki/端数処理</a></p><h2 id="ceil" tabindex="-1">ceil <a class="header-anchor" href="#ceil" aria-label="Permalink to &quot;ceil {#ceil}&quot;">​</a></h2><p>正の方向へ丸め</p><p><strong>パラメーター</strong>:</p><p>(p1) p1 : 丸める数値</p><p><strong>説明</strong>:</p><p>p1を正の方向に丸めた数値を返します。結果は実数で返されます。</p><p>ここで「p1を正の方向に丸める」とは、</p><ul><li>p1が正ならば小数点以下を切り上げる</li><li>p1が負ならば小数点以下を切り捨てる</li></ul><p>ことを意味します。</p><p><strong>例</strong>:</p><p>#include &quot;hspmath.as&quot; tmp = -2.5 while(tmp &lt;= 2.5) mes strf(&quot;%4.1f&quot;, tmp) + &quot;を正の方向へ丸めると、&quot; + strf(&quot;%4.1f&quot;, ceil(tmp)) + &quot;になります。&quot; tmp += 0.5 wend stop</p><p><strong>参照</strong>:</p><p>round intf floor</p><p>%url <a href="http://ja.wikipedia.org/wiki/%E7%AB%AF%E6%95%B0%E5%87%A6%E7%90%86" target="_blank" rel="noreferrer">http://ja.wikipedia.org/wiki/端数処理</a></p><h2 id="fmod" tabindex="-1">fmod <a class="header-anchor" href="#fmod" aria-label="Permalink to &quot;fmod {#fmod}&quot;">​</a></h2><p>モジュロ</p><p><strong>パラメーター</strong>:</p><p>(p1, p2) p1 : 割られる数 p2 : 割る数</p><p><strong>説明</strong>:</p><p>p1をp2で割ったときの余りを実数で返します。 \\記号による演算とは異なり、実数に対しても有効です。</p><p><strong>例</strong>:</p><pre><code>#include &quot;hspmath.as&quot;
mes 5 \\ 2
mes fmod(5, 2)      // 戻り値は実数となる
mes fmod(3.5, 1.2)  // 実数を実数で割ったときの余りも求められる
stop
</code></pre><p>%url <a href="http://ja.wikipedia.org/wiki/%E3%83%A2%E3%82%B8%E3%83%A5%E3%83%AD" target="_blank" rel="noreferrer">http://ja.wikipedia.org/wiki/モジュロ</a></p><h2 id="distance2" tabindex="-1">distance2 <a class="header-anchor" href="#distance2" aria-label="Permalink to &quot;distance2 {#distance2}&quot;">​</a></h2><p>2点の距離を求める</p><p><strong>パラメーター</strong>:</p><p>(p1, p2) p1, p2 : 点の座標を代入した数値型配列変数</p><p><strong>説明</strong>:</p><p>2点A，B間の距離を求めます。</p><p>p1とp2には点の座標を直交座標系で代入しておきます。</p><ul><li>p1(0)に点AのX座標</li><li>p1(1)に点AのY座標</li><li>p2(0)に点BのX座標</li><li>p2(1)に点BのY座標</li></ul><p>を代入した状態で呼び出してください。 結果は実数で返されます。</p><p><strong>例</strong>:</p><pre><code>#include &quot;hspmath.as&quot;
point_a = 100, 50       // 点A
point_b = 500, 400      // 点B
mes &quot;2点間の距離は&quot; + distance2(point_a, point_b) + &quot;です。&quot;
line point_a(0), point_a(1), point_b(0), point_b(1)
color 255  : pset point_a(0), point_a(1)    // 点A
color ,255 : pset point_b(0), point_b(1)    // 点B
stop
</code></pre>`,390),s=[r];function e(i,l,h,g,_,u){return a(),t("div",null,s)}const q=p(n,[["render",e]]);export{c as __pageData,q as default};

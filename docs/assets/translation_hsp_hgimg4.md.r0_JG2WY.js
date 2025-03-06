import{_ as s,c as n,o as a,a3 as p}from"./chunks/framework.DflgEAq4.js";const u=JSON.parse('{"title":"HGIMG4","description":"","frontmatter":{},"headers":[],"relativePath":"translation/hsp/hgimg4.md","filePath":"translation/hsp/hgimg4.md","lastUpdated":null}'),l={name:"translation/hsp/hgimg4.md"},e=p(`<h1 id="hgimg4" tabindex="-1">HGIMG4 <a class="header-anchor" href="#hgimg4" aria-label="Permalink to &quot;HGIMG4&quot;">​</a></h1><p><strong>対応</strong>:</p><ul><li>Win</li></ul><p><strong>対応の補足</strong>:</p><p>Windows+OpenGL3.1以降/DirectX9システム上で動作します。</p><h2 id="gpreset" tabindex="-1">gpreset <a class="header-anchor" href="#gpreset" aria-label="Permalink to &quot;gpreset {#gpreset}&quot;">​</a></h2><p>HGIMG4の初期化</p><p><strong>グループ</strong>:</p><p>拡張画面制御命令</p><p><strong>パラメーター</strong>:</p><p>option option(0) : 初期化オプション</p><p><strong>説明</strong>:</p><p>HGIMG4の初期化を行ないます。 シーンを再構築する場合に使用してください。 optionで設定した内容によって初期化の内容が変わります。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span></span></span>
<span class="line"><span>	オプション値  内容</span></span>
<span class="line"><span>	---------------------------------------------------------------</span></span>
<span class="line"><span>	    0         すべてのオブジェクトを破棄して初期状態に戻す</span></span>
<span class="line"><span>	    1         シーンに存在するオブジェクトのみ破棄する</span></span></code></pre></div><p><strong>参照</strong>:</p><h2 id="gpdraw" tabindex="-1">gpdraw <a class="header-anchor" href="#gpdraw" aria-label="Permalink to &quot;gpdraw {#gpdraw}&quot;">​</a></h2><p>シーン内の全オブジェクトを描画する</p><p><strong>グループ</strong>:</p><p>拡張画面制御命令</p><p><strong>パラメーター</strong>:</p><p>option option(0) : 描画オプション</p><p><strong>説明</strong>:</p><p>シーン内のオブジェクトをすべて描画します。 optionパラメーターを指定することで、限られた項目の描画だけを行なうことができます。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span></span></span>
<span class="line"><span>        マクロ名                      内容</span></span>
<span class="line"><span>    --------------------------------------------------------------------</span></span>
<span class="line"><span>	GPDRAW_OPT_OBJUPDATE          オブジェクトの自動移動処理</span></span>
<span class="line"><span>	GPDRAW_OPT_DRAWSCENE          3Dシーン描画処理</span></span>
<span class="line"><span>	GPDRAW_OPT_DRAWSCENE_LATE     3Dシーン描画処理(OBJ_LATE)</span></span>
<span class="line"><span>	GPDRAW_OPT_DRAW2D             2Dスプライト描画処理</span></span>
<span class="line"><span>	GPDRAW_OPT_DRAW2D_LATE        2Dスプライト描画処理(OBJ_LATE)</span></span></code></pre></div><p>optionパラメーターを省略した場合は、すべての項目が選択されている状態になります。 通常は、optionパラメーターを指定しなくても問題ありません。 また、2Dの直接描画命令だけを使用して、オブジェクトによる描画が不要な場合は、gpdraw命令を記述する必要もありません。 OBJ_LATEのモードフラグ値が付加されたもの(半透明α値が設定されているものを含む)は、不透明のオブジェクトよりも後に描画するため、項目が分けられています。 複数の項目を「|」で区切って指定することもできます。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span></span></span>
<span class="line"><span>	例:</span></span>
<span class="line"><span>	gpdraw GPDRAW_OPT_DRAW2D|GPDRAW_OPT_DRAW2D_LATE</span></span></code></pre></div><p>上の例では、2Dスプライト描画処理、2Dスプライト描画処理(OBJ_LATE)だけを実行します。 これを利用すると、3Dシーン描画と2Dスプライト描画の間にgcopy命令など別な描画命令による 表示を行なうことが可能になります。</p><p><strong>参照</strong>:</p><h2 id="gpusescene" tabindex="-1">gpusescene <a class="header-anchor" href="#gpusescene" aria-label="Permalink to &quot;gpusescene {#gpusescene}&quot;">​</a></h2><p>シーンの切り替え</p><p><strong>グループ</strong>:</p><p>拡張画面制御命令</p><p><strong>パラメーター</strong>:</p><p>id id(0) : 選択するシーンID</p><p><strong>説明</strong>:</p><p>(今後のバージョンでサポートするための予約キーワードです。機能は現在まだ実装されていません。)</p><p><strong>参照</strong>:</p><h2 id="gpsetprm" tabindex="-1">gpsetprm <a class="header-anchor" href="#gpsetprm" aria-label="Permalink to &quot;gpsetprm {#gpsetprm}&quot;">​</a></h2><p>オブジェクトのコアパラメーター設定</p><p><strong>グループ</strong>:</p><p>拡張画面制御命令</p><p><strong>パラメーター</strong>:</p><p>objid,prmid,value objid(0) : オブジェクトID prmid(0) : コアパラメーターID value(0) : 設定する値(整数値)</p><p><strong>説明</strong>:</p><p>オブジェクトごとに保持されているコアパラメーターにvalueで指定された値を上書き設定します。 値を上書きではなく、ビット単位にON,OFFを行ないたい場合は、gpsetprmon/gpsetprmoff命令を使用してください。</p><p>コアパラメーターは、32bit整数値で、様々な情報を管理しています。 コアパラメーターIDとして指定可能な項目は以下の通りです。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span></span></span>
<span class="line"><span>	マクロ名             | 内容</span></span>
<span class="line"><span>	--------------------------------------------------------------</span></span>
<span class="line"><span>	PRMSET_FLAG            オブジェクト登録フラグ(*)</span></span>
<span class="line"><span>	PRMSET_MODE            モードフラグ値</span></span>
<span class="line"><span>	PRMSET_ID              オブジェクトID(*)</span></span>
<span class="line"><span>	PRMSET_ALPHA           透明度(α値)</span></span>
<span class="line"><span>	PRMSET_TIMER           タイマー値</span></span>
<span class="line"><span>	PRMSET_MYGROUP         自身のコリジョングループ</span></span>
<span class="line"><span>	PRMSET_COLGROUP        衝突検出するコリジョングループ</span></span>
<span class="line"><span>	PRMSET_SHAPE           形状ID(*)</span></span>
<span class="line"><span>	PRMSET_USEGPMAT        マテリアルID</span></span>
<span class="line"><span>	PRMSET_COLILOG         コリジョンログID(*)</span></span>
<span class="line"><span>	PRMSET_FADE            フェードパラメーター</span></span>
<span class="line"><span>	PRMSET_SPRID           ソースバッファID(スプライトのみ)</span></span>
<span class="line"><span>	PRMSET_SPRCELID        ソースのセルID(スプライトのみ)</span></span>
<span class="line"><span>	PRMSET_SPRGMODE        コピーモード(スプライトのみ)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>	(*)の項目は読み出しのみ</span></span></code></pre></div><p><strong>参照</strong>:</p><p>gpgetprm gpsetprmon gpsetprmoff</p><h2 id="gpgetprm" tabindex="-1">gpgetprm <a class="header-anchor" href="#gpgetprm" aria-label="Permalink to &quot;gpgetprm {#gpgetprm}&quot;">​</a></h2><p>オブジェクトのコアパラメーター取得</p><p><strong>グループ</strong>:</p><p>拡張画面制御命令</p><p><strong>パラメーター</strong>:</p><p>var,objid,prmid var : 値が代入される変数名 objid(0) : オブジェクトID prmid(0) : コアパラメーターID</p><p><strong>説明</strong>:</p><p>オブジェクトごとに保持されているコアパラメーターに値を取得します。 コアパラメーターは、32bit整数値で、様々な情報を管理しています。 コアパラメーターIDとして指定可能な項目は以下の通りです。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span></span></span>
<span class="line"><span>	マクロ名             | 内容</span></span>
<span class="line"><span>	--------------------------------------------------------------</span></span>
<span class="line"><span>	PRMSET_FLAG            オブジェクト登録フラグ(*)</span></span>
<span class="line"><span>	PRMSET_MODE            モードフラグ値</span></span>
<span class="line"><span>	PRMSET_ID              オブジェクトID(*)</span></span>
<span class="line"><span>	PRMSET_ALPHA           透明度(α値)</span></span>
<span class="line"><span>	PRMSET_TIMER           タイマー値</span></span>
<span class="line"><span>	PRMSET_MYGROUP         自身のコリジョングループ</span></span>
<span class="line"><span>	PRMSET_COLGROUP        衝突検出するコリジョングループ</span></span>
<span class="line"><span>	PRMSET_SHAPE           形状ID(*)</span></span>
<span class="line"><span>	PRMSET_USEGPMAT        マテリアルID</span></span>
<span class="line"><span>	PRMSET_COLILOG         コリジョンログID(*)</span></span>
<span class="line"><span>	PRMSET_FADE            フェードパラメーター</span></span>
<span class="line"><span>	PRMSET_SPRID           ソースバッファID(スプライトのみ)</span></span>
<span class="line"><span>	PRMSET_SPRCELID        ソースのセルID(スプライトのみ)</span></span>
<span class="line"><span>	PRMSET_SPRGMODE        コピーモード(スプライトのみ)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>	(*)の項目は読み出しのみ</span></span></code></pre></div><p><strong>参照</strong>:</p><p>gpsetprm</p><h2 id="gppostefx" tabindex="-1">gppostefx <a class="header-anchor" href="#gppostefx" aria-label="Permalink to &quot;gppostefx {#gppostefx}&quot;">​</a></h2><p>ポストエフェクト生成</p><p><strong>グループ</strong>:</p><p>拡張画面制御命令</p><p><strong>パラメーター</strong>:</p><p>var var : エフェクトIDが代入される変数名</p><p><strong>説明</strong>:</p><p>(今後のバージョンでサポートするための予約キーワードです。機能は現在まだ実装されていません。)</p><p><strong>参照</strong>:</p><h2 id="gpuselight" tabindex="-1">gpuselight <a class="header-anchor" href="#gpuselight" aria-label="Permalink to &quot;gpuselight {#gpuselight}&quot;">​</a></h2><p>ライトオブジェクトの登録</p><p><strong>グループ</strong>:</p><p>拡張画面制御命令</p><p><strong>パラメーター</strong>:</p><p>id,index id(0) : 登録するライトオブジェクトのID index=0〜9(0) : 登録するライトオブジェクトのインデックス</p><p><strong>説明</strong>:</p><p>指定したライトオブジェクトをカレントライトに登録します。 必ず、ライトとして初期化されているライトオブジェクトを指定する必要があります。 ライトオブジェクトは、gplight命令によって初期化することができます。 カレントライトには、ディレクショナルライト・ポイントライト・スポットライトの3種類をそれぞれ最大10個まで登録することができます。 初期状態では、カレントライトに設定ができるライトは、ディレクショナルライト1個のみとなっています。ポイントライト、スポットライトなど複数のライトを使用する場合は、gpresetlight命令によってカレントライトの個数をあらかじめ決めておく必要があります。 indexの値は、複数のライトをカレントライトに登録する場合に使用します。1個目のライトは0、2個目のライトは1…という形で1つの種類につき最大10個のライトを設定することが可能です。 カレントライトに登録することで、以降に生成されるモデル・マテリアルはカレントライトの影響を受けることになります。 既にオブジェクトに設定されているライトの設定を変更する場合は、setobjlight命令を使用してください。</p><p><strong>参照</strong>:</p><p>gpresetlight gplight gpusecamera setobjlight</p><h2 id="gpusecamera" tabindex="-1">gpusecamera <a class="header-anchor" href="#gpusecamera" aria-label="Permalink to &quot;gpusecamera {#gpusecamera}&quot;">​</a></h2><p>カメラオブジェクトの切り替え</p><p><strong>グループ</strong>:</p><p>拡張画面制御命令</p><p><strong>パラメーター</strong>:</p><p>id id(0) : 選択するカメラオブジェクトのID</p><p><strong>説明</strong>:</p><p>指定したノードオブジェクトを有効なカメラオブジェクトとして選択します。 必ず、カメラとして初期化されているノードオブジェクトを指定する必要があります。 以降は、切り替えられたカメラを視点としてシーンの描画が行なわれます。</p><p><strong>参照</strong>:</p><p>gpuselight</p><h2 id="gpmatprm" tabindex="-1">gpmatprm <a class="header-anchor" href="#gpmatprm" aria-label="Permalink to &quot;gpmatprm {#gpmatprm}&quot;">​</a></h2><p>マテリアルのパラメーター設定</p><p><strong>グループ</strong>:</p><p>拡張画面制御命令</p><p><strong>パラメーター</strong>:</p><p>id,&quot;name&quot;,x,y,z id(0) : マテリアルID/オブジェクトID &quot;name&quot; : パラメーター名 x(0.0) : Xの設定値(実数値) y(0.0) : Yの設定値(実数値) z(0.0) : Zの設定値(実数値)</p><p><strong>説明</strong>:</p><p>生成されたマテリアルのシェーダーパラメーターを設定します。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span></span></span>
<span class="line"><span>	例:</span></span>
<span class="line"><span>	gpmatprm objid,&quot;u_diffuseColor&quot;,1,0,0.5 ; マテリアルのパラメーター設定</span></span></code></pre></div><p>上の例では、u_diffuseColorという名称のパラメーターに( 1.0, 0.0, 0.5 )のベクトル値を設定します。 シェーダーパラメーターに設定する項目の数に応じて、gpmatprm1、gpmatprm4命令が用意されています。 (x,y,z)の3項目を設定する場合は、gpmatprmを使用してください。</p><p><strong>参照</strong>:</p><p>gpmat gpmatprm1 gpmatprm4</p><h2 id="gpmatstate" tabindex="-1">gpmatstate <a class="header-anchor" href="#gpmatstate" aria-label="Permalink to &quot;gpmatstate {#gpmatstate}&quot;">​</a></h2><p>マテリアルのステート設定</p><p><strong>グループ</strong>:</p><p>拡張画面制御命令</p><p><strong>パラメーター</strong>:</p><p>objid,&quot;name&quot;,&quot;value&quot; id(0) : マテリアルID/オブジェクトID &quot;name&quot; : 設定項目名(文字列) &quot;value&quot; : 設定値(文字列)</p><p><strong>説明</strong>:</p><p>生成されたマテリアルの表示ステート設定を変更します。 文字列としてnameで指定された項目に対して、valueで指定された内容を設定します。 項目名と設定内容はすべて文字列で行なうので注意してください。 項目名と設定内容はすべて文字列で行なうので注意してください。(項目名及び設定値は大文字小文字を区別しません。)</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span></span></span>
<span class="line"><span>	name             value</span></span>
<span class="line"><span>    --------------------------------------------------------------------</span></span>
<span class="line"><span>	&quot;blend&quot;          プレンドの有効/無効切り替え</span></span>
<span class="line"><span>	                         (true または false を指定)</span></span>
<span class="line"><span>	&quot;blendSrc&quot;       ブレンド元を選択(下記参照)</span></span>
<span class="line"><span>	&quot;blendDst&quot;       ブレンド先を選択(下記参照)</span></span>
<span class="line"><span>	&quot;cullFace&quot;       隠面除去(カリング)の有効/無効切り替え</span></span>
<span class="line"><span>	                         (true または false を指定)</span></span>
<span class="line"><span>	&quot;cullFaceSide&quot;   隠面除去(カリング)の面指定</span></span>
<span class="line"><span>	&quot;depthTest&quot;      true または false</span></span>
<span class="line"><span>	                         (true または false を指定)</span></span>
<span class="line"><span>	&quot;depthWrite&quot;     Zバッファ書き込みの有効/無効切り替え</span></span>
<span class="line"><span>	                         (true または false を指定)</span></span>
<span class="line"><span>	&quot;depthFunc&quot;      Z値比較方法を選択(下記参照)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>	(*)blendSrc,blendDstで設定できる文字列</span></span>
<span class="line"><span></span></span>
<span class="line"><span>	&quot;ZERO&quot;                     即値(0)</span></span>
<span class="line"><span>	&quot;ONE&quot;                      即値(1)</span></span>
<span class="line"><span>	&quot;SRC_COLOR&quot;                書き込み元カラー</span></span>
<span class="line"><span>	&quot;ONE_MINUS_SRC_COLOR&quot;      書き込み元カラー(反転値)</span></span>
<span class="line"><span>	&quot;DST_COLOR&quot;                書き込み先カラー</span></span>
<span class="line"><span>	&quot;ONE_MINUS_DST_COLOR&quot;      書き込み先カラー(反転値)</span></span>
<span class="line"><span>	&quot;SRC_ALPHA&quot;                書き込み元α</span></span>
<span class="line"><span>	&quot;ONE_MINUS_SRC_ALPHA&quot;      書き込み元α(反転値)</span></span>
<span class="line"><span>	&quot;DST_ALPHA&quot;                書き込み先α</span></span>
<span class="line"><span>	&quot;ONE_MINUS_DST_ALPHA&quot;      書き込み先α(反転値)</span></span>
<span class="line"><span>	&quot;CONSTANT_ALPHA&quot;           α固定値</span></span>
<span class="line"><span>	&quot;ONE_MINUS_CONSTANT_ALPHA&quot; α固定値(反転値)</span></span>
<span class="line"><span>	&quot;SRC_ALPHA_SATURATE&quot;       書き込み元α反転値</span></span>
<span class="line"><span></span></span>
<span class="line"><span>	(*)cullFaceSideで設定できる文字列</span></span>
<span class="line"><span></span></span>
<span class="line"><span>	BACK             裏面をカリング</span></span>
<span class="line"><span>	FRONT            表面をカリング</span></span>
<span class="line"><span>	FRONT_AND_BACK   両面をカリング</span></span>
<span class="line"><span></span></span>
<span class="line"><span>	(*)depthFuncで設定できる文字列</span></span>
<span class="line"><span></span></span>
<span class="line"><span>	NEVER            常に拒否</span></span>
<span class="line"><span>	LESS             小さい値の時のみ許可</span></span>
<span class="line"><span>	EQUAL            同一値のみ許可</span></span>
<span class="line"><span>	LEQUAL           同一か小さい値の時のみ許可</span></span>
<span class="line"><span>	GREATER          大きい値の時のみ許可</span></span>
<span class="line"><span>	NOTEQUAL         同一でない値のみ許可</span></span>
<span class="line"><span>	GEQUAL           同一か大きい値の時のみ許可</span></span>
<span class="line"><span>	ALWAYS           常に許可</span></span></code></pre></div><p><strong>参照</strong>:</p><h2 id="gpviewport" tabindex="-1">gpviewport <a class="header-anchor" href="#gpviewport" aria-label="Permalink to &quot;gpviewport {#gpviewport}&quot;">​</a></h2><p>ビューポート設定</p><p><strong>グループ</strong>:</p><p>拡張画面制御命令</p><p><strong>パラメーター</strong>:</p><p>x,y,sx,sy x(0) : ビューポート左上X座標 y(0) : ビューポート左上Y座標 sx : ビューポートのXサイズ sy : ビューポートのYサイズ</p><p><strong>説明</strong>:</p><p>HGIMG4が描画を行なう領域(ビューポート)を設定します。 スクリーン座標の(x,y)から(sx,sy)で指定したサイズの領域に対して描画が行なわれます。 sx,syを省略すると、現在の表示X,Yサイズがデフォルトとして指定されます。</p><p><strong>参照</strong>:</p><h2 id="setobjname" tabindex="-1">setobjname <a class="header-anchor" href="#setobjname" aria-label="Permalink to &quot;setobjname {#setobjname}&quot;">​</a></h2><p>オブジェクトのノード名を設定する</p><p><strong>グループ</strong>:</p><p>拡張画面制御命令</p><p><strong>パラメーター</strong>:</p><p>objid,&quot;name&quot; objid(0) : オブジェクトのID &quot;name&quot; : 設定される名称(文字列)</p><p><strong>説明</strong>:</p><p>ノードオブジェクトに指定された名称を設定します。 すべてのノードオブジェクトは、任意に指定した名称を設定することが可能です。</p><p><strong>参照</strong>:</p><p>getobjname</p><h2 id="getobjname" tabindex="-1">getobjname <a class="header-anchor" href="#getobjname" aria-label="Permalink to &quot;getobjname {#getobjname}&quot;">​</a></h2><p>オブジェクトのノード名を取得する</p><p><strong>グループ</strong>:</p><p>拡張画面制御命令</p><p><strong>パラメーター</strong>:</p><p>var,objid var : 結果が代入される変数名 objid(0) : オブジェクトのID</p><p><strong>説明</strong>:</p><p>ノードオブジェクトに指定された名称を取得します。 varで指定された変数に名称が文字列型として代入されます。 すべてのノードオブジェクトは、任意に指定した名称が設定されています。</p><p><strong>参照</strong>:</p><p>setobjname</p><h2 id="gpcolormat" tabindex="-1">gpcolormat <a class="header-anchor" href="#gpcolormat" aria-label="Permalink to &quot;gpcolormat {#gpcolormat}&quot;">​</a></h2><p>カラーマテリアルの生成</p><p><strong>グループ</strong>:</p><p>拡張画面制御命令</p><p><strong>パラメーター</strong>:</p><p>var,color,opt var : 生成されたマテリアルIDが代入される変数名 color(0) : マテリアルカラー(24bitRGB値) opt(0) : マテリアルオプション値</p><p><strong>説明</strong>:</p><p>指定された色を持つカラーマテリアルの生成を行ないます。 colorパラメーターは、24bitRGB値(0xRRGGBBで示される値)を指定します。省略した場合は、白色(0xffffff)が設定されます。 マテリアルを独自に生成することにより、詳細な質感の設定が可能になります。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span></span></span>
<span class="line"><span>	例:</span></span>
<span class="line"><span>	gpcolormat mat_id,0xff00ff,GPOBJ_MATOPT_NOLIGHT</span></span>
<span class="line"><span>	gpbox id_model, 1, , mat_id</span></span></code></pre></div><p>上の例では、RGBカラーが0xff00ff(紫)の、ライティングを行なわないマテリアルを持った、立方体のノードオブジェクトが生成されます。 optパラメーターにより、マテリアルの設定を変更することができます。 これらの設定は、gpmatstate命令で別途設定することも可能です。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span></span></span>
<span class="line"><span>        マクロ名                内容</span></span>
<span class="line"><span>    -------------------------------------------------------------------</span></span>
<span class="line"><span>	GPOBJ_MATOPT_NOLIGHT    ライティングを行なわない</span></span>
<span class="line"><span>	GPOBJ_MATOPT_NOMIPMAP   MIPMAPを生成しない</span></span>
<span class="line"><span>	GPOBJ_MATOPT_NOCULL     カリングを無効にする</span></span>
<span class="line"><span>	GPOBJ_MATOPT_NOZTEST    Zテストを無効にする</span></span>
<span class="line"><span>	GPOBJ_MATOPT_NOZWRITE   Zバッファ書き込みを無効にする</span></span>
<span class="line"><span>	GPOBJ_MATOPT_BLENDADD   プレンドモードを加算に設定する</span></span></code></pre></div><p>正常にマテリアルが生成できなかった場合は、エラー3(パラメータの値が異常です)が発生します。 正しく生成された場合は、varで指定された変数にマテリアルID(整数値)が代入されます。</p><p><strong>参照</strong>:</p><p>gptexmat gpusermat</p><h2 id="gptexmat" tabindex="-1">gptexmat <a class="header-anchor" href="#gptexmat" aria-label="Permalink to &quot;gptexmat {#gptexmat}&quot;">​</a></h2><p>テクスチャマテリアルの生成</p><p><strong>グループ</strong>:</p><p>拡張画面制御命令</p><p><strong>パラメーター</strong>:</p><p>var,&quot;file&quot;,opt var : 生成されたマテリアルIDが代入される変数名 &quot;file&quot; : 読み込まれるテクスチャファイル名 opt(0) : マテリアルオプション値</p><p><strong>説明</strong>:</p><p>テクスチャ(画像)マテリアルの生成を行ないます。 マテリアルを独自に生成することにより、詳細な質感の設定が可能になります。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span></span></span>
<span class="line"><span>	例:</span></span>
<span class="line"><span>	gptexmat id_texmat, &quot;res/qbox.png&quot;	; テクスチャマテリアル作成</span></span>
<span class="line"><span>	gpbox id_model, 1, , id_texmat		; 箱ノードを追加</span></span></code></pre></div><p>上の例では、resフォルダ内のqbox.pngをテクスチャとして持ったマテリアルを持った、立方体のノードオブジェクトが生成されます。 optパラメーターにより、マテリアルの設定を変更することができます。 これらの設定は、gpmatstate命令で別途設定することも可能です。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span></span></span>
<span class="line"><span>        マクロ名                内容</span></span>
<span class="line"><span>    -------------------------------------------------------------------</span></span>
<span class="line"><span>	GPOBJ_MATOPT_NOLIGHT    ライティングを行なわない</span></span>
<span class="line"><span>	GPOBJ_MATOPT_NOMIPMAP   MIPMAPを生成しない</span></span>
<span class="line"><span>	GPOBJ_MATOPT_NOCULL     カリングを無効にする</span></span>
<span class="line"><span>	GPOBJ_MATOPT_NOZTEST    Zテストを無効にする</span></span>
<span class="line"><span>	GPOBJ_MATOPT_NOZWRITE   Zバッファ書き込みを無効にする</span></span>
<span class="line"><span>	GPOBJ_MATOPT_BLENDADD   プレンドモードを加算に設定する</span></span>
<span class="line"><span>	GPOBJ_MATOPT_SPECULAR   光源計算時にスペキュラーを適用します</span></span>
<span class="line"><span>	GPOBJ_MATOPT_MIRROR     反転した画像として表示する</span></span>
<span class="line"><span>	GPOBJ_MATOPT_CUBEMAP    キューブマップとして設定する</span></span>
<span class="line"><span>	GPOBJ_MATOPT_NODISCARD  αチャンネルによるピクセル破棄を無効にする</span></span></code></pre></div><p>正常にマテリアルが生成できなかった場合は、エラー3(パラメータの値が異常です)が発生します。 正しく生成された場合は、varで指定された変数にマテリアルID(整数値)が代入されます。</p><p><strong>参照</strong>:</p><p>gpcolormat gpusermat gpscrmat</p><h2 id="gpscrmat" tabindex="-1">gpscrmat <a class="header-anchor" href="#gpscrmat" aria-label="Permalink to &quot;gpscrmat {#gpscrmat}&quot;">​</a></h2><p>オフスクリーンテクスチャマテリアルの生成</p><p><strong>グループ</strong>:</p><p>拡張画面制御命令</p><p><strong>パラメーター</strong>:</p><p>var,id,opt var : 生成されたマテリアルIDが代入される変数名 id : 参照されるオフスクリーンバッファID opt(0) : マテリアルオプション値</p><p><strong>説明</strong>:</p><p>オフスクリーンテクスチャバッファを参照するマテリアルを生成します。 マテリアルを独自に生成することにより、オフスクリーンにレンダリングされた画像イメージをテクスチャとして再利用することが可能になります。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span></span></span>
<span class="line"><span>	例:</span></span>
<span class="line"><span>	buffer id_render,512,512,screen_offscreen</span></span>
<span class="line"><span>	gpscrmat id_texmat, id_render, GPOBJ_MATOPT_NOLIGHT|GPOBJ_MATOPT_NOMIPMAP	; テクスチャマテリアル作成</span></span>
<span class="line"><span>	gpbox id_model, 1, , id_texmat		; 箱ノードを追加</span></span></code></pre></div><p>上の例では、buffer命令で作成されたオフスクリーンテクスチャバッファを参照する立方体のノードオブジェクトが生成されます。 optパラメーターにより、マテリアルの設定を変更することができます。 これらの設定は、gpmatstate命令で別途設定することも可能です。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span></span></span>
<span class="line"><span>        マクロ名                内容</span></span>
<span class="line"><span>    -------------------------------------------------------------------</span></span>
<span class="line"><span>	GPOBJ_MATOPT_NOLIGHT    ライティングを行なわない</span></span>
<span class="line"><span>	GPOBJ_MATOPT_NOMIPMAP   MIPMAPを生成しない</span></span>
<span class="line"><span>	GPOBJ_MATOPT_NOCULL     カリングを無効にする</span></span>
<span class="line"><span>	GPOBJ_MATOPT_NOZTEST    Zテストを無効にする</span></span>
<span class="line"><span>	GPOBJ_MATOPT_NOZWRITE   Zバッファ書き込みを無効にする</span></span>
<span class="line"><span>	GPOBJ_MATOPT_BLENDADD   プレンドモードを加算に設定する</span></span>
<span class="line"><span>	GPOBJ_MATOPT_SPECULAR   光源計算時にスペキュラーを適用します</span></span>
<span class="line"><span>	GPOBJ_MATOPT_MIRROR     反転した画像として表示する</span></span>
<span class="line"><span>	GPOBJ_MATOPT_NODISCARD  αチャンネルによるピクセル破棄を無効にする</span></span></code></pre></div><p>正常にマテリアルが生成できなかった場合は、エラー3(パラメータの値が異常です)が発生します。 正しく生成された場合は、varで指定された変数にマテリアルID(整数値)が代入されます。</p><p><strong>参照</strong>:</p><p>gpcolormat gpusermat</p><h2 id="gpusermat" tabindex="-1">gpusermat <a class="header-anchor" href="#gpusermat" aria-label="Permalink to &quot;gpusermat {#gpusermat}&quot;">​</a></h2><p>カスタムマテリアルの生成</p><p><strong>グループ</strong>:</p><p>拡張画面制御命令</p><p><strong>パラメーター</strong>:</p><p>var,&quot;vsh&quot;,&quot;fsh&quot;,&quot;defs&quot;,color,opt var : 生成されたマテリアルIDが代入される変数名 &quot;vsh&quot; : バーテックスシェーダーファイル名 &quot;fsh&quot; : フラグメントシェーダーファイル名 &quot;defs&quot; : 追加のラベル定義 color(-1) : マテリアルカラー(24bitRGB値) opt(0) : マテリアルオプション値</p><p><strong>説明</strong>:</p><p>カスタムマテリアルを生成します。 カスタムマテリアルは、バーテックスシェーダー及びフラグメントシェーダーを指定した独自の描画を行ないます。 OpenGLのシェーダー言語(GLSL)で記述されたシェーダーファイル名を、&quot;vsh&quot;、&quot;fsh&quot;パラメーターに指定します。 &quot;defs&quot;パラメーターには、シェーダーコンパイル時に追加されるラベル定義を記述します。 colorパラメーターでデフォルトのカラーを設定することができます。省略した場合は、白色(0xffffff)が設定されます。 &quot;vsh&quot;,&quot;fsh&quot;,&quot;defs&quot;のパラメーターを省略した場合は、gpusershaderで設定された内容が設定されます。 optパラメーターにより、マテリアルの設定を変更することができます。 これらの設定は、gpmatstate命令で別途設定することも可能です。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span></span></span>
<span class="line"><span>        マクロ名                内容</span></span>
<span class="line"><span>    -------------------------------------------------------------------</span></span>
<span class="line"><span>	GPOBJ_MATOPT_NOLIGHT    ライティングを行なわない</span></span>
<span class="line"><span>	GPOBJ_MATOPT_NOMIPMAP   MIPMAPを生成しない</span></span>
<span class="line"><span>	GPOBJ_MATOPT_NOCULL     カリングを無効にする</span></span>
<span class="line"><span>	GPOBJ_MATOPT_NOZTEST    Zテストを無効にする</span></span>
<span class="line"><span>	GPOBJ_MATOPT_NOZWRITE   Zバッファ書き込みを無効にする</span></span>
<span class="line"><span>	GPOBJ_MATOPT_BLENDADD   プレンドモードを加算に設定する</span></span>
<span class="line"><span>	GPOBJ_MATOPT_SPECULAR   光源計算時にスペキュラーを適用します</span></span>
<span class="line"><span>	GPOBJ_MATOPT_MIRROR     反転した画像として表示する</span></span>
<span class="line"><span>	GPOBJ_MATOPT_CUBEMAP    キューブマップとして設定する</span></span>
<span class="line"><span>	GPOBJ_MATOPT_NODISCARD  αチャンネルによるピクセル破棄を無効にする</span></span></code></pre></div><p>正常にマテリアルが生成できなかった場合は、エラー3(パラメータの値が異常です)が発生します。 正しく生成された場合は、varで指定された変数にマテリアルID(整数値)が代入されます。</p><p>カスタムマテリアルにより、任意のシェーダーを使って描画のすべてをコントロールすることができるようになります。 これは、シェーダーについての知識がある上級者向けの拡張機能ですので、通常は使用する必要はありません。 カスタムマテリアルを生成した場合は、gpmatprm命令によってシェーダーパラメーターに渡すための値を設定することができます。</p><p><strong>参照</strong>:</p><p>gpmatprm gpcolormat gptexmat gpusershader gpscrmat</p><h2 id="gpclone" tabindex="-1">gpclone <a class="header-anchor" href="#gpclone" aria-label="Permalink to &quot;gpclone {#gpclone}&quot;">​</a></h2><p>ノードを複製</p><p><strong>グループ</strong>:</p><p>拡張画面制御命令</p><p><strong>パラメーター</strong>:</p><p>var,objid,eventid var : 複製されたオブジェクトのIDが代入される変数名 objid(0) : 複製元のオブジェクトID eventid(-1) : イベントID</p><p><strong>説明</strong>:</p><p>既に存在するオブジェクトと同じ設定で、新しいオブジェクトを生成します。 varで指定された変数に、複製されたオブジェクトのIDが代入されます。 同一の形状、パラメーター設定(物理設定を除く)を持ちますが座標や角度などを新しく設定することができます。 同一の物体を複数生成する場合に、設定や読み込みを何度も行なう手間を軽減し高速化にもつながります。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span></span></span>
<span class="line"><span>	例:</span></span>
<span class="line"><span>	gpload id_model,&quot;res/duck&quot;	; モデル読み込み</span></span>
<span class="line"><span>	gpclone i, id_model		; 同じものをクローン</span></span></code></pre></div><p>上の例では、res/duck.gpbファイルによる3Dモデルノード(id_model)をクローンして変数iに新しいオブジェクトIDを代入します。 クローンやIDの割り当てに失敗した場合は、varで指定された変数に-1が代入されます。 イベントIDをeventidパラメーターに指定することで、クローン後のオブジェクトにイベントを適用することができます。eventidがマイナス値か、省略された場合はイベントは設定されません。 ※現在のバージョンでは、シーン内に存在する表示可能なオブジェクト以外はクローンすることができませんので注意してください。</p><p><strong>参照</strong>:</p><p>gpdraw</p><h2 id="gpnull" tabindex="-1">gpnull <a class="header-anchor" href="#gpnull" aria-label="Permalink to &quot;gpnull {#gpnull}&quot;">​</a></h2><p>ヌルノードを生成</p><p><strong>グループ</strong>:</p><p>拡張画面制御命令</p><p><strong>パラメーター</strong>:</p><p>var var : 生成されたオブジェクトIDが代入される変数名</p><p><strong>説明</strong>:</p><p>空のノードオブジェクト(ヌルノード)を生成します。 varで指定された変数に、複製されたオブジェクトのIDが代入されます。 ヌルノードは、カメラやライトなどモデルを持つ必要のないノードを作成する場合などに使用します。 生成されたノードは、他のノードと同様に3D空間の中で自由に操作することが可能になります。</p><p><strong>参照</strong>:</p><p>gpcamera gplight</p><h2 id="gpload" tabindex="-1">gpload <a class="header-anchor" href="#gpload" aria-label="Permalink to &quot;gpload {#gpload}&quot;">​</a></h2><p>3Dモデルノードを生成</p><p><strong>グループ</strong>:</p><p>拡張画面制御命令</p><p><strong>パラメーター</strong>:</p><p>var,&quot;file&quot;,&quot;name&quot; var : 生成されたオブジェクトIDが代入される変数名 &quot;file&quot; : 読み込みを行なうgpbファイル名 &quot;name&quot; : 読み込み対象となるノード名 &quot;defs&quot; : 追加のラベル定義</p><p><strong>説明</strong>:</p><p>ファイル化された3Dモデルデータ(.gpbファイル)をノードとして生成します。 varで指定された変数に、生成されたオブジェクトのIDが代入されます。 生成されたノードは3D空間の中で自由に操作することが可能になります。 &quot;file&quot;でフォルダ及びファイル名を指定します。「.gpb」などの拡張子は指定する必要ありません。 ファイルの中で特定の名前を持ったノードだけを読み込みたい場合は、&quot;name&quot;で指定することができます。 &quot;name&quot;の指定を省略した場合は、ファイルに含まれている階層構造をすべて読み込みノードとして生成します。 マテリアルに関する情報は、「.material」ファイルから読み込まれます。必ず「.gpb」ファイルとセットで用意するようにしてください。 &quot;defs&quot;パラメーターが指定された場合には、すべてのシェーダーコンパイル時に指定されたラベル定義が追加されます。</p><p>ノードに物理設定を行なう場合は、gppbind命令を使用してください。 3Dモデルデータの接触判定は、全体を包む球(バウンディング球)が使用されます。</p><p>生成されたオブジェクト(ノード)の描画はgpdraw命令によりまとめて行なわれます。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span></span></span>
<span class="line"><span>	例:</span></span>
<span class="line"><span>	gpload id_model,&quot;res/duck&quot;		; モデル読み込み</span></span></code></pre></div><p>上の例では、resフォルダ内にあるduck.gpbファイルを読み込みます。 その際に、マテリアル情報が書かれているduck.materialファイルが参照されます。 さらに、テクスチャが必要な場合は、同じフォルダ内の画像ファイルも読み込まれます。ファイル読み込み時にエラーが発生した場合には、オブジェクトIDとしてマイナス値が代入されます。 さらに詳細な読み込み時のエラーやワーニングを調べたい場合は、gpgetlog命令によってログを収集することが可能です。</p><p>gpload命令で読み込むためのファイル(.gpb形式)は、gameplay3Dで標準的に使用されているデータ形式です。 HGIMG4では、.gpb形式を生成するためのGPBコンバーター(gpbconv.exe)を用意しています。 詳しくは、HGIMG4マニュアルを参照してください。</p><p><strong>参照</strong>:</p><p>gpgetlog gpdraw gppbind</p><h2 id="gpplate" tabindex="-1">gpplate <a class="header-anchor" href="#gpplate" aria-label="Permalink to &quot;gpplate {#gpplate}&quot;">​</a></h2><p>板ノードを生成</p><p><strong>グループ</strong>:</p><p>拡張画面制御命令</p><p><strong>パラメーター</strong>:</p><p>var,sizex,sizey,color,matobj var : 生成されたオブジェクトIDが代入される変数名 sizex(1) : 生成されるXサイズ sizey(1) : 生成されるYサイズ color(-1) : マテリアルカラー(24bitRGB値) matobj(-1) : マテリアルID</p><p><strong>説明</strong>:</p><p>垂直に立った1枚の板(四角形)を3Dモデルデータとしてノードを生成します。 varで指定された変数に、生成されたオブジェクトのIDが代入されます。 生成されたノードは3D空間の中で自由に操作することが可能になります。 モデルのX,Yサイズをsizex,sizeyパラメーターで指定することができます。 colorパラメーターでモデルの色(マテリアルカラー)を24bitRGB値(0xRRGGBBで示される値)により指定します。 colorパラメーターが省略された場合は、白色(0xffffff)が使用されます。 matobjパラメーターで、マテリアルIDを指定することができます。 gpcolormat命令などにより、ユーザーが生成したマテリアルを使用する場合は指定してください。 matobjパラメーターが省略された場合は、標準のマテリアルが使用されます。</p><p>生成されたオブジェクト(ノード)の描画はgpdraw命令によりまとめて行なわれます。</p><p>ノードに物理設定を行なう場合は、gppbind命令を使用してください。 ノードの接触判定は、もとのモデルと同じ形状が使用されます。</p><p><strong>参照</strong>:</p><p>gpdraw gppbind</p><h2 id="gpfloor" tabindex="-1">gpfloor <a class="header-anchor" href="#gpfloor" aria-label="Permalink to &quot;gpfloor {#gpfloor}&quot;">​</a></h2><p>床ノードを生成</p><p><strong>グループ</strong>:</p><p>拡張画面制御命令</p><p><strong>パラメーター</strong>:</p><p>var,sizex,sizey,color,matobj var : 生成されたオブジェクトIDが代入される変数名 sizex(1) : 生成されるXサイズ sizey(1) : 生成されるYサイズ color(-1) : マテリアルカラー(24bitRGB値) matobj(-1) : マテリアルID</p><p><strong>説明</strong>:</p><p>1枚の床(四角形)を3Dモデルデータとしてノードを生成します。 varで指定された変数に、生成されたオブジェクトのIDが代入されます。 生成されたノードは3D空間の中で自由に操作することが可能になります。 モデルのX,Yサイズをsizex,sizeyパラメーターで指定することができます。 colorパラメーターでモデルの色(マテリアルカラー)を24bitRGB値(0xRRGGBBで示される値)により指定します。 colorパラメーターが省略された場合は、白色(0xffffff)が使用されます。 matobjパラメーターで、マテリアルIDを指定することができます。 gpcolormat命令などにより、ユーザーが生成したマテリアルを使用する場合は指定してください。 matobjパラメーターが省略された場合は、標準のマテリアルが使用されます。</p><p>生成されたオブジェクト(ノード)の描画はgpdraw命令によりまとめて行なわれます。</p><p>ノードに物理設定を行なう場合は、gppbind命令を使用してください。 (床モデルは標準で、同じ場所に固定された物理特性が設定されます) ノードの接触判定は、もとのモデルと同じ形状が使用されます。</p><p><strong>参照</strong>:</p><p>gpdraw gppbind</p><h2 id="gpbox" tabindex="-1">gpbox <a class="header-anchor" href="#gpbox" aria-label="Permalink to &quot;gpbox {#gpbox}&quot;">​</a></h2><p>箱ノードを生成</p><p><strong>グループ</strong>:</p><p>拡張画面制御命令</p><p><strong>パラメーター</strong>:</p><p>var,size,color,matobj var : 生成されたオブジェクトIDが代入される変数名 size(1) : 生成されるサイズ color(-1) : マテリアルカラー(24bitRGB値) matobj(-1) : マテリアルID</p><p><strong>説明</strong>:</p><p>指定サイズの立方体を3Dモデルデータとしてノードを生成します。 varで指定された変数に、生成されたオブジェクトのIDが代入されます。 生成されたノードは3D空間の中で自由に操作することが可能になります。 モデルのX,Yサイズをsizex,sizeyパラメーターで指定することができます。 colorパラメーターでモデルの色(マテリアルカラー)を24bitRGB値(0xRRGGBBで示される値)により指定します。 colorパラメーターが省略された場合は、白色(0xffffff)が使用されます。 matobjパラメーターで、マテリアルIDを指定することができます。 gpcolormat命令などにより、ユーザーが生成したマテリアルを使用する場合は指定してください。 matobjパラメーターが省略された場合は、標準のマテリアルが使用されます。</p><p>生成されたオブジェクト(ノード)の描画はgpdraw命令によりまとめて行なわれます。</p><p>ノードに物理設定を行なう場合は、gppbind命令を使用してください。 ノードの接触判定は、もとのモデルと同じ形状が使用されます。</p><p><strong>参照</strong>:</p><p>gpdraw gppbind</p><h2 id="gpspr" tabindex="-1">gpspr <a class="header-anchor" href="#gpspr" aria-label="Permalink to &quot;gpspr {#gpspr}&quot;">​</a></h2><p>2Dスプライトノード生成</p><p><strong>グループ</strong>:</p><p>拡張画面制御命令</p><p><strong>パラメーター</strong>:</p><p>var,bufid,celid,gmode var : 生成されたオブジェクトIDが代入される変数名 bufid(0) : バッファID celid(0) : セルID gmode(3) : コピーモード</p><p><strong>説明</strong>:</p><p>2Dスプライトを表示するためのノードを生成します。 varで指定された変数に、生成されたオブジェクトのIDが代入されます。 生成されたノードは2Dスクリーンの中で自由に操作することが可能になります。 bufidパラメーターで表示元の画像が読み込まれているバッファIDを、celidパラメーターで表示するセルIDを指定します。 また、gmodeパラメーターでgcopy命令で指定するものと同様のコピーモードを指定します。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span></span></span>
<span class="line"><span>	 gmode値  |  内容</span></span>
<span class="line"><span>	---------------------------------------------------</span></span>
<span class="line"><span>	    0,1      アルファチャンネル無効</span></span>
<span class="line"><span>	    2        アルファチャンネル有効</span></span>
<span class="line"><span>	    5        色加算・アルファチャンネル有効</span></span></code></pre></div><p>生成されたオブジェクト(ノード)の描画はgpdraw命令によりまとめて行なわれます。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span></span></span>
<span class="line"><span>	; スプライト1個あたりの描画</span></span>
<span class="line"><span>	gmode [gmode設定値]</span></span>
<span class="line"><span>	pos [ノードX座標],[ノードY座標]</span></span>
<span class="line"><span>	celput [バッファID], [セルID], [ノードXスケール], [ノードYスケール], [ノードZ回転]</span></span></code></pre></div><p>つまり、2Dスプライトノードは上のような処理をあらかじめ登録した設定をまとめて行なう機能と考えることができます。 また、getcoli命令による2Dスプライトノード同士の接触判定を手軽に行なうことが可能です。</p><p><strong>参照</strong>:</p><p>gpdraw</p><h2 id="gplight" tabindex="-1">gplight <a class="header-anchor" href="#gplight" aria-label="Permalink to &quot;gplight {#gplight}&quot;">​</a></h2><p>ライトノードを設定</p><p><strong>グループ</strong>:</p><p>拡張画面制御命令</p><p><strong>パラメーター</strong>:</p><p>id,opt,range,inner,outer id(0) : オブジェクトのID opt(0) : ライト生成オプション range(1) : 影響範囲パラメーター inner(0.5): 内側の減衰パラメーター outer(1) : 外側の減衰パラメーター</p><p><strong>説明</strong>:</p><p>生成済みのノードにライトとしての機能を追加します。 idパラメーターで、ノードのオブジェクトIDを指定します。 optパラメーターでライト生成オプション値を指定することができます。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span></span></span>
<span class="line"><span>	  opt値               |  内容</span></span>
<span class="line"><span>	--------------------------------------------------------------</span></span>
<span class="line"><span>	  GPOBJ_LGTOPT_NORMAL    平行光源(ディレクショナルライト)</span></span>
<span class="line"><span>	  GPOBJ_LGTOPT_POINT     点光源(ポイントライト)</span></span>
<span class="line"><span>	  GPOBJ_LGTOPT_SPOT      スポットライト</span></span></code></pre></div><p>rangeパラメーターは、ポイントライト及びスポットライトの影響範囲に関する設定を行ないます。 また、inner,outerパラメーターは、スポットライトが減衰する内側・外側のパラメーターを設定します。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span></span></span>
<span class="line"><span>	例:</span></span>
<span class="line"><span>	gpnull id_alight			; ヌルノードを生成する</span></span>
<span class="line"><span>	gplight id_alight, GPOBJ_LGTOPT_NORMAL	; ライトとして登録する</span></span>
<span class="line"><span>	gpuselight id_alight			; デフォルトのライトに設定</span></span></code></pre></div><p>gplight命令は、あくまでもオブジェクトにライトとしての機能を設定するだけです。 設定されたライトは、gpuselight命令によりカレントライトとして登録することで、以降に生成されるモデル・マテリアルに反映されます。</p><p><strong>参照</strong>:</p><p>gpresetlight gpuselight gpnull</p><h2 id="gpcamera" tabindex="-1">gpcamera <a class="header-anchor" href="#gpcamera" aria-label="Permalink to &quot;gpcamera {#gpcamera}&quot;">​</a></h2><p>カメラノードを設定</p><p><strong>グループ</strong>:</p><p>拡張画面制御命令</p><p><strong>パラメーター</strong>:</p><p>id,fov,aspect,near,far,sw id(0) : オブジェクトのID fov(45) : 視野(FOV)パラメーター aspect(1.5): アスペクト比 near(0.5) : ニアクリップZ値 far(768) : ファークリップZ値 sw(0) : カメラタイプ値(0,1)</p><p><strong>説明</strong>:</p><p>生成済みのノードにカメラとしての機能を追加します。 idパラメーターで、ノードのオブジェクトIDを指定します。 fovパラメーターで視野(FOV)を設定します。45を指定した場合は、45度の視野となります。 aspectパラメーターでアスペクト比(縦横比)を指定します。 また、near,farパラメーターにより近くと遠くのZ座標(クリッピングに使われるZ座標)を指定することができます。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span></span></span>
<span class="line"><span>	例:</span></span>
<span class="line"><span>	gpnull id_camera			; ヌルノードを生成する</span></span>
<span class="line"><span>	gpcamera id_camera, 45, 1.5, 0.5, 768	; カメラとして設定する</span></span>
<span class="line"><span>	gpusecamera id_camera			; 使用するカメラを選択する</span></span>
<span class="line"><span>	setpos id_camera, 0,20,20		; カメラ位置を設定する</span></span></code></pre></div><p>カメラタイプ値(sw)に1を指定することにより、平行投影(Orthographic)を行うカメラを設定することが可能です。その場合は、fov値はズーム値(1.0が標準)として反映されます。</p><p>シーン内に配置されたカメラは、gpusecamera命令により切り替えることができます。</p><p><strong>参照</strong>:</p><p>gpusecamera gpnull</p><h2 id="gplookat" tabindex="-1">gplookat <a class="header-anchor" href="#gplookat" aria-label="Permalink to &quot;gplookat {#gplookat}&quot;">​</a></h2><p>指定座標に向けてノードを回転</p><p><strong>グループ</strong>:</p><p>拡張画面制御命令</p><p><strong>パラメーター</strong>:</p><p>objid,x,y,z objid(0) : オブジェクトID x(0) : 目標となるX座標 y(0) : 目標となるY座標 z(0) : 目標となるZ座標</p><p><strong>説明</strong>:</p><p>3Dノードを、指定した座標に向けて回転させます。 カメラに適用した場合は、指定座標を注視する角度に設定されます。</p><p><strong>参照</strong>:</p><h2 id="gppbind" tabindex="-1">gppbind <a class="header-anchor" href="#gppbind" aria-label="Permalink to &quot;gppbind {#gppbind}&quot;">​</a></h2><p>ノードに標準的な物理特性を設定</p><p><strong>グループ</strong>:</p><p>拡張画面制御命令</p><p><strong>パラメーター</strong>:</p><p>objid,mass,friction,option objid(0) : オブジェクトID mass(1) : 重さ friction(0.5) : 摩擦係数 option(0) : 設定オプション</p><p><strong>説明</strong>:</p><p>ノードオブジェクトに対して、基本的な物理設定を行ないます。 massパラメーターは物体の重さ。frictionパラメーターは摩擦係数です。値を省略した場合は、デフォルト値が使用されます。 重さ(mass)を0にすることで静的剛体(衝突はするが、動かない)として設定されます。 それ以外の場合は、物理法則に従って床のある場所まで落下します。</p><p>gppbind命令は基本的な物理特性だけを設定します。詳細な物理パラメーターを設定する場合には、gppset命令を使用して設定を行ってください。</p><p>※物理挙動を設定する場合は、必ず床(地面)となる部分を作成しておいてください。 gpfloor命令によって生成された床に標準的な物理特性を設定することで、固定された床面を生成することができます。 床が存在しなかった場合、物体は永遠に落下を続けることになります。</p><p>物理設定を行なったノードオブジェクトは、それ以降自立して動作するようになり、setposなどの座標変更は無効となります。 物体に力を加えたい場合は、gppapply命令を使用してください。</p><p>optionパラメーターにより設定時のオプションを付加します。以下のマクロを指定することができます。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span></span></span>
<span class="line"><span>	  opt値               |  内容</span></span>
<span class="line"><span>	--------------------------------------------------------------</span></span>
<span class="line"><span></span></span>
<span class="line"><span>	  GPPBIND_NOSCALE        コリジョンにノードのスケールを反映させない</span></span>
<span class="line"><span>	  GPPBIND_MESH           コリジョンとしてノードのモデルを反映させる</span></span></code></pre></div><p>ノードオブジェクトに物理設定を行なうと、接触判定を行う情報(コリジョン)が作成されます。</p><p>箱ノード、床ノード、板ノードはそれぞれの形状をコリジョンとして扱います。optionに、GPPBIND_NOSCALEを指定した場合は、スケールが反映されていないもともとの形状がコリジョンとなります。 3Dモデルノードは、標準ではモデル全体を覆うスフィア(球体)をコリジョンとして作成します。ただし、optionにGPPBIND_MESHを指定した場合は、モデルの形状そのものをコリジョンとして扱います。ただし、複雑なモデル形状をコリジョンにした場合、接触判定にかかる負荷が増大します。 コリジョンは、モデルの形状とは独立した情報となります。コリジョンが作成された後は、ノードのスケール値は反映されませんので注意してください。</p><p><strong>参照</strong>:</p><p>gppapply gppset</p><h2 id="getwork2" tabindex="-1">getwork2 <a class="header-anchor" href="#getwork2" aria-label="Permalink to &quot;getwork2 {#getwork2}&quot;">​</a></h2><p>ノードワーク値2を取得</p><p><strong>グループ</strong>:</p><p>拡張画面制御命令</p><p><strong>パラメーター</strong>:</p><p>id,x,y,z id : オブジェクトID (x,y,z) : 取得する変数</p><p><strong>説明</strong>:</p><p>オブジェクトの持つwork2パラメーターを取得します。 (x,y,z)は、実数型の変数として設定されます。 命令の最後に「i」を付加することで、整数値として値を取得することができます。</p><p><strong>参照</strong>:</p><p>getwork2i</p><h2 id="getwork2i" tabindex="-1">getwork2i <a class="header-anchor" href="#getwork2i" aria-label="Permalink to &quot;getwork2i {#getwork2i}&quot;">​</a></h2><p>ノードワーク値2を取得(整数値)</p><p><strong>グループ</strong>:</p><p>拡張画面制御命令</p><p><strong>パラメーター</strong>:</p><p>id,x,y,z id : オブジェクトID (x,y,z) : 取得する変数</p><p><strong>説明</strong>:</p><p>オブジェクトの持つwork2パラメーターを取得します。 (x,y,z)は、整数型の変数として設定されます。 getwork2命令を使用することで、実数値として値を取得することができます。</p><p><strong>参照</strong>:</p><p>getwork2</p><h2 id="selquat" tabindex="-1">selquat <a class="header-anchor" href="#selquat" aria-label="Permalink to &quot;selquat {#selquat}&quot;">​</a></h2><p>オブジェク回転情報をMOC情報に設定</p><p><strong>グループ</strong>:</p><p>拡張画面制御命令</p><p><strong>パラメーター</strong>:</p><p>id id(0) : オブジェクトID</p><p><strong>説明</strong>:</p><p>MOC設定命令の対象となるMOCグループをquat(クォータニオン回転情報)に設定します idは、オブジェクトIDとなります。</p><p><strong>参照</strong>:</p><h2 id="selwork2" tabindex="-1">selwork2 <a class="header-anchor" href="#selwork2" aria-label="Permalink to &quot;selwork2 {#selwork2}&quot;">​</a></h2><p>オブジェクトワーク2をMOC情報に設定</p><p><strong>グループ</strong>:</p><p>拡張画面制御命令</p><p><strong>パラメーター</strong>:</p><p>id id(0) : オブジェクトID</p><p><strong>説明</strong>:</p><p>MOC設定命令の対象となるMOCグループをwork2(ワーク2)に設定します idは、オブジェクトIDとなります。</p><p><strong>参照</strong>:</p><h2 id="setwork2" tabindex="-1">setwork2 <a class="header-anchor" href="#setwork2" aria-label="Permalink to &quot;setwork2 {#setwork2}&quot;">​</a></h2><p>work2グループ情報を設定</p><p><strong>グループ</strong>:</p><p>拡張画面制御命令</p><p><strong>パラメーター</strong>:</p><p>id,x,y,z id : オブジェクトID (x,y,z) : 設定する値 (デフォルト=0)</p><p><strong>説明</strong>:</p><p>オブジェクトの持つパラメーターを設定します。 work2グループ(ワーク2値)に(x,y,z)で指定された値を設定します。 (x,y,z)には、実数または整数値を指定することができます。</p><p><strong>参照</strong>:</p><p>setwork</p><h2 id="addwork2" tabindex="-1">addwork2 <a class="header-anchor" href="#addwork2" aria-label="Permalink to &quot;addwork2 {#addwork2}&quot;">​</a></h2><p>work2グループ情報を加算</p><p><strong>グループ</strong>:</p><p>拡張画面制御命令</p><p><strong>パラメーター</strong>:</p><p>id,x,y,z id : オブジェクトID (x,y,z) : 設定する値 (デフォルト=0)</p><p><strong>説明</strong>:</p><p>オブジェクトの持つパラメーターを設定します。 work2グループ(ワーク2値)に(x,y,z)で指定された値を加算します。 (x,y,z)には、実数または整数値を指定することができます。</p><p><strong>参照</strong>:</p><p>addwork</p><h2 id="gpcnvaxis" tabindex="-1">gpcnvaxis <a class="header-anchor" href="#gpcnvaxis" aria-label="Permalink to &quot;gpcnvaxis {#gpcnvaxis}&quot;">​</a></h2><p>3D座標の変換を行なう</p><p><strong>グループ</strong>:</p><p>拡張画面制御命令</p><p><strong>パラメーター</strong>:</p><p>var_x,var_y,var_z,x,y,z,mode var_x : X値が代入される変数 var_y : Y値が代入される変数 var_z : Z値が代入される変数 x(0.0) : 変換元のX値 y(0.0) : 変換元のY値 z(0.0) : 変換元のZ値 mode(0) : 変換モード</p><p><strong>説明</strong>:</p><p>決められたモードに従って、(x,y,z)の3D座標を変換します。 結果は、var_x,var_y,var_zで指定された変数に実数型で代入されます。(変数型は自動的に設定されます) モード値による変換の内容は以下の通りです。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span></span></span>
<span class="line"><span>モード  内容</span></span>
<span class="line"><span>-----------------------------------------------</span></span>
<span class="line"><span>0       描画される2D座標(X,Y)位置+Zバッファ値</span></span>
<span class="line"><span>1       0と同じだが(X,Y)座標が正規化されたもの</span></span>
<span class="line"><span>2       ビュー変換を行なった(X,Y,Z)座標</span></span></code></pre></div><p>モード0と1は、スクリーン上に2D投影を行なった際のX,Y座標、及びZバッファ値に変換します。 モード2では、カメラ位置を考慮したビュー変換を行なったX,Y,Z座標値に変換します。</p><p><strong>参照</strong>:</p><h2 id="gppset" tabindex="-1">gppset <a class="header-anchor" href="#gppset" aria-label="Permalink to &quot;gppset {#gppset}&quot;">​</a></h2><p>ノードの物理パラメーターを設定</p><p><strong>グループ</strong>:</p><p>拡張画面制御命令</p><p><strong>パラメーター</strong>:</p><p>objid,prmid,x,y,z objid(0) : オブジェクトID prmid(0) : パラメーターID x(0.0) : 設定パラメーターX値 y(0.0) : 設定パラメーターY値 z(0.0) : 設定パラメーターZ値</p><p><strong>説明</strong>:</p><p>objidで指定されたノードの詳細な物理パラメーターを設定します。 prmidパラメーターで、設定する項目を指定し、X,Y,Zに指定された値が、それぞれの項目に対応した値として適用されます。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span></span></span>
<span class="line"><span>        マクロ名                          内容</span></span>
<span class="line"><span>    ----------------------------------------------------------------------------</span></span>
<span class="line"><span>	GPPSET_ENABLE                     X=物理挙動のON/OFF(0=無効)</span></span>
<span class="line"><span>	GPPSET_FRICTION                   X=摩擦係数, Y=弾力設定</span></span>
<span class="line"><span>	GPPSET_DAMPING                    X=linear反発(0〜1.0), Y=angular反発(0〜1.0)</span></span>
<span class="line"><span>	GPPSET_KINEMATIC                  X=Kinematic設定のON/OFF(0=無効)</span></span>
<span class="line"><span>	GPPSET_ANISOTROPIC_FRICTION       X,Y,Z=異方性の摩擦</span></span>
<span class="line"><span>	GPPSET_GRAVITY                    X,Y,Z=重力</span></span>
<span class="line"><span>	GPPSET_LINEAR_FACTOR              X,Y,Z=ベクトルに沿った移動の設定</span></span>
<span class="line"><span>	GPPSET_ANGULAR_FACTOR             X,Y,Z=ベクトルに沿った回転の設定</span></span>
<span class="line"><span>	GPPSET_ANGULAR_VELOCITY           X,Y,Z=回転ベロシティー</span></span>
<span class="line"><span>	GPPSET_LINEAR_VELOCITY            X,Y,Z=リニアベロシティー</span></span>
<span class="line"><span>	GPPSET_MASS_CENTER                X,Y,Z=中心座標のオフセット</span></span></code></pre></div><p>必ずgppbind命令で基本的な物理特性を設定した後で詳細設定を行なうようにしてください。 設定値が正しくない場合は、エラーが発生します。</p><p><strong>参照</strong>:</p><p>gppbind</p><h2 id="gpobjpool" tabindex="-1">gpobjpool <a class="header-anchor" href="#gpobjpool" aria-label="Permalink to &quot;gpobjpool {#gpobjpool}&quot;">​</a></h2><p>オブジェクトID生成の設定</p><p><strong>グループ</strong>:</p><p>拡張画面制御命令</p><p><strong>パラメーター</strong>:</p><p>start,num start(0) : 割り当て開始番号 num(-1) : 最大割り当て数</p><p><strong>説明</strong>:</p><p>オブジェクトIDの割り当て方法を変更します。 オブジェクトIDは、あらかじめ決められた最大数の中で、使用されていないID番号が割り当てられます。 オブジェクト最大数は、デフォルトで1024個となっており、sysreq命令によって拡張することが可能です。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span></span></span>
<span class="line"><span>	例:</span></span>
<span class="line"><span>	setreq SYSREQ_MAXOBJ,4096	; オブジェクト最大数を4096に拡張する</span></span></code></pre></div><p>gpobjpool命令は、ID番号の割り当て範囲を任意に変更することができます。 startパラメーターで指定された番号を割り当て開始番号に設定します。 numパラメーターで指定された番号を割り当てられる最大数に設定します。 numパラメーターがマイナス値か省略されていた場合は、割り当て開始番号から最大限取れる範囲が設定されます。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span></span></span>
<span class="line"><span>	例:</span></span>
<span class="line"><span>	gpobjpool 100,50	; オブジェクトID生成の設定変更</span></span></code></pre></div><p>上の例では、ID番号100〜150のみを割り当て対象に変更します。 これ以降のオブジェクト生成命令(gpboxやgpnullなど)では、指定された範囲内のオブジェクトIDのみが割り当てられます。 オブジェクト全体の中で特定の個数までしか生成されないように制限したい場合や、 表示順序をある程度コントロールしたい場合に利用できます。 gpobjpool命令によって、あらかじめ設定されたオブジェクト最大数を拡張することはできません。 必ず最大数の範囲内で設定を行なうよう注意してください。</p><p><strong>参照</strong>:</p><p>delobj</p><h2 id="gppapply" tabindex="-1">gppapply <a class="header-anchor" href="#gppapply" aria-label="Permalink to &quot;gppapply {#gppapply}&quot;">​</a></h2><p>ノードに物理的な力を適用する</p><p><strong>グループ</strong>:</p><p>拡張画面制御命令</p><p><strong>パラメーター</strong>:</p><p>objid,action,x,y,z objid(0) : オブジェクトID action(0) : 力の種類(タイプ) x(0.0) : 設定パラメーターX値 y(0.0) : 設定パラメーターY値 z(0.0) : 設定パラメーターZ値</p><p><strong>説明</strong>:</p><p>ノードに対して(x,y,z)で指定したベクトルの物理的な力を適用します。 actionパラメーターで設定できるタイプは、以下の通りです。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span></span></span>
<span class="line"><span>        マクロ名                     内容</span></span>
<span class="line"><span>    ----------------------------------------------------------------------------</span></span>
<span class="line"><span>	GPPAPPLY_FORCE               移動しようとする力を加算する</span></span>
<span class="line"><span>	GPPAPPLY_IMPULSE             瞬間的な衝撃を与える</span></span>
<span class="line"><span>	GPPAPPLY_TORQUE              トルク(ねじる)力を与える</span></span>
<span class="line"><span>	GPPAPPLY_TORQUE_IMPULSE      トルク+衝撃を与える</span></span></code></pre></div><p>必ずgppbind命令で基本的な物理特性を設定した後で力を適用するようにしてください。 設定値が正しくない場合は、エラーが発生します。</p><p><strong>参照</strong>:</p><p>gppbind</p><h2 id="gpmatprm1" tabindex="-1">gpmatprm1 <a class="header-anchor" href="#gpmatprm1" aria-label="Permalink to &quot;gpmatprm1 {#gpmatprm1}&quot;">​</a></h2><p>マテリアルのパラメーター設定(2)</p><p><strong>グループ</strong>:</p><p>拡張画面制御命令</p><p><strong>パラメーター</strong>:</p><p>id,&quot;name&quot;,value id(0) : マテリアルID/オブジェクトID &quot;name&quot; : パラメーター名 value(0.0) : Xの設定値(実数値)</p><p><strong>説明</strong>:</p><p>生成されたマテリアルのシェーダーパラメーターを設定します。 gpmatprm命令と基本的に同じ機能です。 gpmatprm1命令は、1項目のみの実数パラメーターを指定します。</p><p><strong>参照</strong>:</p><p>gpmat gpmatprm gpmatprm4 gpmatprm16</p><h2 id="gpmatprm4" tabindex="-1">gpmatprm4 <a class="header-anchor" href="#gpmatprm4" aria-label="Permalink to &quot;gpmatprm4 {#gpmatprm4}&quot;">​</a></h2><p>マテリアルのパラメーター設定(3)</p><p><strong>グループ</strong>:</p><p>拡張画面制御命令</p><p><strong>パラメーター</strong>:</p><p>id,&quot;name&quot;,x,y,z,w id(0) : マテリアルID/オブジェクトID &quot;name&quot; : パラメーター名 x(0.0) : Xの設定値(実数値) y(0.0) : Yの設定値(実数値) z(0.0) : Zの設定値(実数値) w(0.0) : Wの設定値(実数値)</p><p><strong>説明</strong>:</p><p>生成されたマテリアルのシェーダーパラメーターを設定します。 gpmatprm命令と基本的に同じ機能です。 gpmatprm4命令は、4項目(x,y,z,w)の実数パラメーターを指定します。</p><p><strong>参照</strong>:</p><p>gpmat gpmatprm gpmatprm1 gpmatprm16</p><h2 id="setalpha" tabindex="-1">setalpha <a class="header-anchor" href="#setalpha" aria-label="Permalink to &quot;setalpha {#setalpha}&quot;">​</a></h2><p>オブジェクトの透明度(α値)設定</p><p><strong>グループ</strong>:</p><p>拡張画面制御命令</p><p><strong>パラメーター</strong>:</p><p>objid,value objid(0) : オブジェクトID value(255) : 設定する値(整数値)(0〜255)</p><p><strong>説明</strong>:</p><p>オブジェクトの透明度(α値)を設定します。 valueパラメーターで指定された値を、objidパラメーターのオブジェクトに設定します。 valueパラメーターで指定する値は、透明度を示す0〜255の整数値(α値)となります。 0は完全な透明、255は不透明が適用されます。 α値が255以外(半透明)の状態となったオブジェクトは、描画順序が前面に変更されます。 (OBJ_LATEのモードフラグ値が指定されたのと同じ状態)</p><p><strong>参照</strong>:</p><p>gpsetprm</p><h2 id="gpgetlog" tabindex="-1">gpgetlog <a class="header-anchor" href="#gpgetlog" aria-label="Permalink to &quot;gpgetlog {#gpgetlog}&quot;">​</a></h2><p>HGIMG4エラーログを取得</p><p><strong>グループ</strong>:</p><p>拡張画面制御命令</p><p><strong>パラメーター</strong>:</p><p>var var : エラーログが代入される変数</p><p><strong>説明</strong>:</p><p>HGIMG4のエラーログを取得して変数に代入します。変数は文字列型として初期化されます。 エラーログは、gpreset、gpload命令などの実行時に発生したエラーの詳細を記録するもので、原因の調査などに利用することができます。</p><p><strong>参照</strong>:</p><p>gpload gpreset</p><h2 id="gpaddanim" tabindex="-1">gpaddanim <a class="header-anchor" href="#gpaddanim" aria-label="Permalink to &quot;gpaddanim {#gpaddanim}&quot;">​</a></h2><p>アニメーションクリップを追加</p><p><strong>グループ</strong>:</p><p>拡張画面制御命令</p><p><strong>パラメーター</strong>:</p><p>objid,&quot;name&quot;,start,end,option objid(0) : オブジェクトID &quot;name&quot; : アニメーションクリップ名 start(0) : スタートフレーム(ミリ秒) end(-1) : 終了フレーム(ミリ秒) option(0) : 追加オプション</p><p><strong>説明</strong>:</p><p>読み込まれた3Dモデルが持つアニメーションデータをもとに、新規のアニメーションクリップを追加します。 アニメーションクリップは、3Dモデルのアニメーションデータから一部のフレームを切り出したものに名前を付けて管理するものです。 あらかじめ、gpload命令によりgpbファイルからアニメーションデータを含むモデルデータを読み込んでおく必要があります。 &quot;name&quot;パラメーターで、アニメーションクリップの名前を指定します。既に追加されている名前は指定できません。 start,endパラメーターでアニメーションクリップのフレーム範囲を指定します。これらはミリ秒単位の時間指定となります。 endパラメーターを省略するかマイナス値を指定した場合は、アニメーション全体の最後にあたるフレームが適用されます。</p><p>処理が正常に終了した場合は、システム変数statに0が代入されます。エラーが発生した場合は、システム変数statはマイナス値が代入されます。</p><p><strong>参照</strong>:</p><p>gpgetanim gpsetanim gpact</p><h2 id="gpact" tabindex="-1">gpact <a class="header-anchor" href="#gpact" aria-label="Permalink to &quot;gpact {#gpact}&quot;">​</a></h2><p>アニメーションクリップを再生/停止</p><p><strong>グループ</strong>:</p><p>拡張画面制御命令</p><p><strong>パラメーター</strong>:</p><p>objid,&quot;name&quot;,option objid(0) : オブジェクトID &quot;name&quot;(&quot;&quot;): アニメーションクリップ名 option(1) : 再生オプション</p><p><strong>説明</strong>:</p><p>指定された名前のアニメーションクリップの再生/停止などをコントロールします。 アニメーションが設定されているモデルのオブジェクトIDを指定し、&quot;name&quot;でアニメーションクリップを選択します。 アニメーションクリップはあらかじめgpaddanim命令で設定しておくことができます。また、&quot;name&quot;の指定を省略するか、&quot;&quot;(空文字)の場合はデフォルトのアニメーションクリップとなります。 optionの値で再生のコントロールを行ないます。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span></span></span>
<span class="line"><span>        マクロ名              値          内容</span></span>
<span class="line"><span>    ----------------------------------------------------------------------------</span></span>
<span class="line"><span>	GPACT_STOP            0           停止</span></span>
<span class="line"><span>	GPACT_PLAY            1           開始</span></span>
<span class="line"><span>	GPACT_PAUSE           2           一時停止</span></span></code></pre></div><p>アニメーションの再生は、アニメーションクリップごとに制御されます。 1つのモデルに対して同時に複数のアニメーションクリップを再生することが可能です。 アニメーションクリップ再生の状態を取得・設定するための命令として、gpgetanim,gpsetanimが用意されています。 処理が正常に終了した場合は、システム変数statに0が代入されます。エラーが発生した場合は、システム変数statはマイナス値が代入されます。</p><p><strong>参照</strong>:</p><p>gpaddanim gpgetanim gpsetanim</p><h2 id="gpgetanim" tabindex="-1">gpgetanim <a class="header-anchor" href="#gpgetanim" aria-label="Permalink to &quot;gpgetanim {#gpgetanim}&quot;">​</a></h2><p>アニメーションクリップ設定を取得</p><p><strong>グループ</strong>:</p><p>拡張画面制御命令</p><p><strong>パラメーター</strong>:</p><p>var,objid,index,prmid var : 情報が代入される変数 objid(0) : オブジェクトID index(0) : アニメーションクリップのインデックス(0〜) prmid(0) : パラメーターID</p><p><strong>説明</strong>:</p><p>指定されたアニメーションクリップの設定を取得してvarで指定された変数に代入します。 objidで設定を取得するオブジェクトIDを、indexにアニメーションクリップのインデックスを指定します。 アニメーションクリップのインデックスは、オブジェクトが保持しているアニメーションクリップに順番に割り振られる番号です。0,1,2,3…のような0から始まる整数値で、存在しないインデックスが指定された場合はシステム変数に-1(エラー)が代入されます。 prmidでどのような情報を取得するかを指定します。prmidで指定できる値は以下の通りです。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span></span></span>
<span class="line"><span>        マクロ名                   値          内容</span></span>
<span class="line"><span>    ----------------------------------------------------------------------------</span></span>
<span class="line"><span>	GPANIM_OPT_START_FRAME     0           開始フレーム(ミリ秒単位)</span></span>
<span class="line"><span>	GPANIM_OPT_END_FRAME       1           終了フレーム(ミリ秒単位)</span></span>
<span class="line"><span>	GPANIM_OPT_DURATION        2           再生の長さ(ミリ秒単位)</span></span>
<span class="line"><span>	GPANIM_OPT_ELAPSED         3           経過時間(ミリ秒単位)</span></span>
<span class="line"><span>	GPANIM_OPT_BLEND           4           ブレンド係数(%単位)</span></span>
<span class="line"><span>	GPANIM_OPT_PLAYING         5           再生中フラグ(0=停止/1=再生)</span></span>
<span class="line"><span>	GPANIM_OPT_SPEED           6           再生スピード(%単位)</span></span>
<span class="line"><span>	GPANIM_OPT_NAME            16          アニメーションクリップ名</span></span></code></pre></div><p>取得される変数は適切な型で初期化されます。GPANIM_OPT_NAMEの場合は、文字列型となります。 処理が正常に終了した場合は、システム変数statに0が代入されます。エラーが発生した場合は、システム変数statはマイナス値が代入されます。</p><p><strong>参照</strong>:</p><p>gpaddanim gpsetanim</p><h2 id="gpsetanim" tabindex="-1">gpsetanim <a class="header-anchor" href="#gpsetanim" aria-label="Permalink to &quot;gpsetanim {#gpsetanim}&quot;">​</a></h2><p>アニメーションクリップ設定を更新</p><p><strong>グループ</strong>:</p><p>拡張画面制御命令</p><p><strong>パラメーター</strong>:</p><p>objid,index,prmid,value objid(0) : オブジェクトID index(0) : アニメーションクリップのインデックス(0〜) prmid(0) : パラメーターID value(0) : 設定される値(整数値)</p><p><strong>説明</strong>:</p><p>指定されたアニメーションクリップの設定をvalueで指定される新しい値で更新します。 objidで設定を取得するオブジェクトIDを、indexにアニメーションクリップのインデックスを指定します。 アニメーションクリップのインデックスは、オブジェクトが保持しているアニメーションクリップに順番に割り振られる番号です。0,1,2,3…のような0から始まる整数値で、存在しないインデックスが指定された場合はシステム変数に-1(エラー)が代入されます。 prmidでどのような情報を設定するかを指定します。prmidで指定できる値は以下の通りです。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span></span></span>
<span class="line"><span>        マクロ名                   値          内容</span></span>
<span class="line"><span>    ----------------------------------------------------------------------------</span></span>
<span class="line"><span>	GPANIM_OPT_DURATION        2           再生の長さ(ミリ秒単位)</span></span>
<span class="line"><span>	GPANIM_OPT_BLEND           4           ブレンド係数(%単位)</span></span>
<span class="line"><span>	GPANIM_OPT_SPEED           6           再生スピード(%単位)</span></span></code></pre></div><p>処理が正常に終了した場合は、システム変数statに0が代入されます。エラーが発生した場合は、システム変数statはマイナス値が代入されます。</p><p><strong>参照</strong>:</p><p>gpaddanim gpgetanim</p><h2 id="gpmatprm16" tabindex="-1">gpmatprm16 <a class="header-anchor" href="#gpmatprm16" aria-label="Permalink to &quot;gpmatprm16 {#gpmatprm16}&quot;">​</a></h2><p>マテリアルのパラメーター設定(マトリクス)</p><p><strong>グループ</strong>:</p><p>拡張画面制御命令</p><p><strong>パラメーター</strong>:</p><p>id,&quot;name&quot;,var id(0) : マテリアルID/オブジェクトID &quot;name&quot; : パラメーター名 var : 値が代入された配列変数名(実数型) count(1) : 設定されるマトリクスの個数</p><p><strong>説明</strong>:</p><p>生成されたマテリアルのシェーダーパラメーターを設定します。 gpmatprm命令と基本的に同じ機能ですが、gpmatprm16命令は、varで指定された実数型の配列変数に格納された数値を4×4のマトリクス行列として設定します。 var(0)〜var(15)の１６個の実数がマトリクス行列となります。countを指定した場合は、その個数だけ配列変数から値を取り出します。</p><p><strong>参照</strong>:</p><p>gpmatprm gpmatprm1 gpmatprm4</p><h2 id="gpmatprmt" tabindex="-1">gpmatprmt <a class="header-anchor" href="#gpmatprmt" aria-label="Permalink to &quot;gpmatprmt {#gpmatprmt}&quot;">​</a></h2><p>マテリアルのパラメーター設定(テクスチャ)</p><p><strong>グループ</strong>:</p><p>拡張画面制御命令</p><p><strong>パラメーター</strong>:</p><p>id,&quot;name&quot;,&quot;filename&quot; id(0) : マテリアルID/オブジェクトID &quot;name&quot; : パラメーター名 &quot;filename&quot; : 画像ファイル名 opt(0) : マテリアルオプション値</p><p><strong>説明</strong>:</p><p>生成されたマテリアルのシェーダーパラメーターを設定します。 gpmatprm命令と基本的に同じ機能ですが、gpmatprmt命令は、&quot;filename&quot;で指定されたファイルをテクスチャ画像として設定します。 sampler2D型のパラメーターをシェーダーに渡す場合に使用することができます。 optパラメーターに、GPOBJ_MATOPT_NOMIPMAPを指定した場合は、MIPMAPを生成しません。 また、optパラメーターに、GPOBJ_MATOPT_CUBEMAPを指定した場合は、テクスチャをキューブマップとして扱います。 キューブマップは、6面方向の画像をまとめた特殊な形式で環境マップやスカイボックスなどに利用することができます。 (キューブマップ画像は、+X,-X,+Y,-Y,+Z,-Z放送の6画像を縦に連結した1枚の.PNG形式を使用してください。)</p><p><strong>参照</strong>:</p><p>gpmatprm gpmatprm1 gpmatprm4</p><h2 id="gpusershader" tabindex="-1">gpusershader <a class="header-anchor" href="#gpusershader" aria-label="Permalink to &quot;gpusershader {#gpusershader}&quot;">​</a></h2><p>ユーザーシェーダーの指定</p><p><strong>グループ</strong>:</p><p>拡張画面制御命令</p><p><strong>パラメーター</strong>:</p><p>&quot;vsh&quot;,&quot;fsh&quot;,&quot;defs&quot; &quot;vsh&quot; : バーテックスシェーダーファイル名 &quot;fsh&quot; : フラグメントシェーダーファイル名 &quot;defs&quot; : 追加のラベル定義</p><p><strong>説明</strong>:</p><p>ユーザーが独自に設定するためのシェーダーを指定します。 バーテックスシェーダー、フラグメントシェーダー及び追加のラベル定義を記述して、使用することができます。 指定されたシェーダーは、gpusermatのデフォルト値として、buffer命令によるスクリーンバッファのカスタムシェーダー指定時に参照されます。</p><p><strong>参照</strong>:</p><p>buffer gpusermat</p><h2 id="gpgetmat" tabindex="-1">gpgetmat <a class="header-anchor" href="#gpgetmat" aria-label="Permalink to &quot;gpgetmat {#gpgetmat}&quot;">​</a></h2><p>マテリアルIDの取得</p><p><strong>グループ</strong>:</p><p>拡張画面制御命令</p><p><strong>パラメーター</strong>:</p><p>var,id,opt var : マテリアルIDが代入される変数 id(0) : 参照されるID opt(0) : 取得オプション</p><p><strong>説明</strong>:</p><p>指定されたオブジェクト、及び画面バッファで使用されているカスタムマテリアルのIDを取得します。 optパラメーターで取得オプションを指定します。optで指定できる値は以下の通りです。^p マクロ名 値 内容 ---------------------------------------------------------------------------- GPGETMAT_OPT_OBJMAT 0 オブジェクトが持つカスタムマテリアル GPGETMAT_OPT_SCRMAT 1 画面バッファが持つカスタムマテリアル</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span></span></span>
<span class="line"><span>GPGETMAT_OPT_OBJMATを指定した場合は、idパラメーターにオブジェクトIDを指定することで、オブジェクトが持つカスタムマテリアルのIDを取得することができます。</span></span>
<span class="line"><span>GPGETMAT_OPT_SCRMATを指定した場合は、idパラメーターに画面バッファIDを指定することで、それぞれの画面バッファが持つカスタムマテリアルのIDを取得することができます。</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>__参照__:</span></span>
<span class="line"><span></span></span>
<span class="line"><span>buffer</span></span>
<span class="line"><span>gpmatprm</span></span>
<span class="line"><span>gpmatprm1</span></span>
<span class="line"><span>gpmatprm4</span></span>
<span class="line"><span>gpmatprm16</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>## setquat {#setquat}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>quatグループ情報を設定</span></span>
<span class="line"><span></span></span>
<span class="line"><span>__グループ__:</span></span>
<span class="line"><span></span></span>
<span class="line"><span>拡張画面制御命令</span></span>
<span class="line"><span></span></span>
<span class="line"><span>__パラメーター__:</span></span>
<span class="line"><span></span></span>
<span class="line"><span>id,x,y,z,w</span></span>
<span class="line"><span>id      : オブジェクトID</span></span>
<span class="line"><span>(x,y,z,w) : 設定する値 (デフォルト=0)</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>__説明__:</span></span>
<span class="line"><span></span></span>
<span class="line"><span>オブジェクトの持つ回転パラメーターを設定します。</span></span>
<span class="line"><span>quatグループ(クォータニオン)に(x,y,z,w)で指定された値を設定します。</span></span>
<span class="line"><span>(x,y,z,w)は、クォータニオン(四元数)による設定を行ないます。HGIMG4内部では、すべての回転情報は、クォータニオンにより保持されています。</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>__参照__:</span></span>
<span class="line"><span></span></span>
<span class="line"><span>getquat</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>## getquat {#getquat}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>quatグループ情報を取得</span></span>
<span class="line"><span></span></span>
<span class="line"><span>__グループ__:</span></span>
<span class="line"><span></span></span>
<span class="line"><span>拡張画面制御命令</span></span>
<span class="line"><span></span></span>
<span class="line"><span>__パラメーター__:</span></span>
<span class="line"><span></span></span>
<span class="line"><span>id,x,y,z,w</span></span>
<span class="line"><span>id      : オブジェクトID</span></span>
<span class="line"><span>(x,y,z,w) : 取得する変数</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>__説明__:</span></span>
<span class="line"><span></span></span>
<span class="line"><span>オブジェクトの持つ回転パラメーターを取得します。</span></span>
<span class="line"><span>quatグループ(クォータニオン)の内容が(x,y,z,w)で指定された変数に代入されます。</span></span>
<span class="line"><span>(x,y,z,w)は、実数型の変数として設定されます。</span></span>
<span class="line"><span>HGIMG4内部では、すべての回転情報は、クォータニオンにより保持されています。</span></span>
<span class="line"><span>角度情報に変換する場合は、getangまたはgetangr命令をご使用ください。</span></span>
<span class="line"><span>ただし、回転情報を完全に再現できない場合がありますので、角度情報に変換する場合は注意してください。</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>__参照__:</span></span>
<span class="line"><span></span></span>
<span class="line"><span>getang</span></span>
<span class="line"><span>getangr</span></span>
<span class="line"><span>setquat</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>## event_suicide {#event_suicide}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>オブジェクト破棄イベントを追加</span></span>
<span class="line"><span></span></span>
<span class="line"><span>__グループ__:</span></span>
<span class="line"><span></span></span>
<span class="line"><span>拡張画面制御命令</span></span>
<span class="line"><span></span></span>
<span class="line"><span>__パラメーター__:</span></span>
<span class="line"><span></span></span>
<span class="line"><span>p1</span></span>
<span class="line"><span>p1    : イベントID</span></span>
<span class="line"><span></span></span>
<span class="line"><span>__説明__:</span></span>
<span class="line"><span></span></span>
<span class="line"><span>idで指定しているイベントIDに、オブジェクト破棄イベントを追加します。</span></span>
<span class="line"><span>この命令は、event_delobjと同等に使用することができます。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>__参照__:</span></span>
<span class="line"><span></span></span>
<span class="line"><span>event_delobj</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>## gpsetprmon {#gpsetprmon}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>オブジェクトのコアパラメーター設定(ビット追加)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>__グループ__:</span></span>
<span class="line"><span></span></span>
<span class="line"><span>拡張画面制御命令</span></span>
<span class="line"><span></span></span>
<span class="line"><span>__パラメーター__:</span></span>
<span class="line"><span></span></span>
<span class="line"><span>objid,prmid,value</span></span>
<span class="line"><span>objid(0) : オブジェクトID</span></span>
<span class="line"><span>prmid(0) : コアパラメーターID</span></span>
<span class="line"><span>value(0) : 設定する値(整数値)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>__説明__:</span></span>
<span class="line"><span></span></span>
<span class="line"><span>オブジェクトごとに保持されているコアパラメーターの値を、valueで設定されているビットのみONに設定します。</span></span>
<span class="line"><span>(もともとのコアパラメーター値にvalueの値をORで合成します)</span></span>
<span class="line"><span>これは、モードフラグ値などビット単位で設定が必要なパラメーターに、新しいビットを追加する場合などに使用することができます。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>コアパラメーターは、32bit整数値で、様々な情報を管理しています。</span></span>
<span class="line"><span>コアパラメーターIDとして指定可能な項目は以下の通りです。</span></span></code></pre></div><pre><code>マクロ名             | 内容
--------------------------------------------------------------
PRMSET_FLAG            オブジェクト登録フラグ(*)
PRMSET_MODE            モードフラグ値
PRMSET_ID              オブジェクトID(*)
PRMSET_ALPHA           透明度(α値)
PRMSET_TIMER           タイマー値
PRMSET_MYGROUP         自身のコリジョングループ
PRMSET_COLGROUP        衝突検出するコリジョングループ
PRMSET_SHAPE           形状ID(*)
PRMSET_USEGPMAT        マテリアルID(*)
PRMSET_COLILOG         コリジョンログID(*)
PRMSET_FADE            フェードパラメーター
PRMSET_SPRID           ソースバッファID(スプライトのみ)
PRMSET_SPRCELID        ソースのセルID(スプライトのみ)
PRMSET_SPRGMODE        コピーモード(スプライトのみ)

(*)の項目は読み出しのみ
</code></pre><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>__参照__:</span></span>
<span class="line"><span></span></span>
<span class="line"><span>gpgetprm</span></span>
<span class="line"><span>gpsetprm</span></span>
<span class="line"><span>gpsetprmoff</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>## gpsetprmoff {#gpsetprmoff}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>オブジェクトのコアパラメーター設定(ビット削除)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>__グループ__:</span></span>
<span class="line"><span></span></span>
<span class="line"><span>拡張画面制御命令</span></span>
<span class="line"><span></span></span>
<span class="line"><span>__パラメーター__:</span></span>
<span class="line"><span></span></span>
<span class="line"><span>objid,prmid,value</span></span>
<span class="line"><span>objid(0) : オブジェクトID</span></span>
<span class="line"><span>prmid(0) : コアパラメーターID</span></span>
<span class="line"><span>value(0) : 設定する値(整数値)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>__説明__:</span></span>
<span class="line"><span></span></span>
<span class="line"><span>オブジェクトごとに保持されているコアパラメーターの値を、valueで設定されているビットのみOFFに設定します。</span></span>
<span class="line"><span>(もともとのコアパラメーター値からvalueで指定されたビットを消去します)</span></span>
<span class="line"><span>これは、モードフラグ値などビット単位で設定が必要なパラメーターから、特定のビットを削除する場合などに使用することができます。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>コアパラメーターは、32bit整数値で、様々な情報を管理しています。</span></span>
<span class="line"><span>コアパラメーターIDとして指定可能な項目は以下の通りです。</span></span></code></pre></div><pre><code>マクロ名             | 内容
--------------------------------------------------------------
PRMSET_FLAG            オブジェクト登録フラグ(*)
PRMSET_MODE            モードフラグ値
PRMSET_ID              オブジェクトID(*)
PRMSET_ALPHA           透明度(α値)
PRMSET_TIMER           タイマー値
PRMSET_MYGROUP         自身のコリジョングループ
PRMSET_COLGROUP        衝突検出するコリジョングループ
PRMSET_SHAPE           形状ID(*)
PRMSET_USEGPMAT        マテリアルID
PRMSET_COLILOG         コリジョンログID(*)
PRMSET_FADE            フェードパラメーター
PRMSET_SPRID           ソースバッファID(スプライトのみ)
PRMSET_SPRCELID        ソースのセルID(スプライトのみ)
PRMSET_SPRGMODE        コピーモード(スプライトのみ)

(*)の項目は読み出しのみ
</code></pre><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>__参照__:</span></span>
<span class="line"><span></span></span>
<span class="line"><span>gpgetprm</span></span>
<span class="line"><span>gpsetprm</span></span>
<span class="line"><span>gpsetprmon</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>## setangy {#setangy}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>angグループ情報を設定</span></span>
<span class="line"><span></span></span>
<span class="line"><span>__グループ__:</span></span>
<span class="line"><span></span></span>
<span class="line"><span>拡張画面制御命令</span></span>
<span class="line"><span></span></span>
<span class="line"><span>__パラメーター__:</span></span>
<span class="line"><span></span></span>
<span class="line"><span>id,x,y,z</span></span>
<span class="line"><span>id      : オブジェクトID</span></span>
<span class="line"><span>(x,y,z) : 設定する値 (デフォルト=0)</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>__説明__:</span></span>
<span class="line"><span></span></span>
<span class="line"><span>setang命令と同様の機能を持っていますが、回転の順番がY-&gt;X-&gt;Zとなります。</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>__参照__:</span></span>
<span class="line"><span></span></span>
<span class="line"><span>setang</span></span>
<span class="line"><span>setangz</span></span>
<span class="line"><span>setangr</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>## setangz {#setangz}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>angグループ情報を設定</span></span>
<span class="line"><span></span></span>
<span class="line"><span>__グループ__:</span></span>
<span class="line"><span></span></span>
<span class="line"><span>拡張画面制御命令</span></span>
<span class="line"><span></span></span>
<span class="line"><span>__パラメーター__:</span></span>
<span class="line"><span></span></span>
<span class="line"><span>id,x,y,z</span></span>
<span class="line"><span>id      : オブジェクトID</span></span>
<span class="line"><span>(x,y,z) : 設定する値 (デフォルト=0)</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>__説明__:</span></span>
<span class="line"><span></span></span>
<span class="line"><span>setang命令と同様の機能を持っていますが、回転の順番がZ-&gt;Y-&gt;Xとなります。</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>__参照__:</span></span>
<span class="line"><span></span></span>
<span class="line"><span>setang</span></span>
<span class="line"><span>setangy</span></span>
<span class="line"><span>setangr</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>## event_angy {#event_angy}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>angグループ変化イベントを追加</span></span>
<span class="line"><span></span></span>
<span class="line"><span>__グループ__:</span></span>
<span class="line"><span></span></span>
<span class="line"><span>拡張画面制御命令</span></span>
<span class="line"><span></span></span>
<span class="line"><span>__パラメーター__:</span></span>
<span class="line"><span></span></span>
<span class="line"><span>id,frame,x1,y1,z1,sw</span></span>
<span class="line"><span>id         : イベントID</span></span>
<span class="line"><span>frame      : 変化までのフレーム数</span></span>
<span class="line"><span>(x1,y1,z1) : 設定される値</span></span>
<span class="line"><span>sw(0)      : 補間オプション</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>__説明__:</span></span>
<span class="line"><span></span></span>
<span class="line"><span>event_ang命令と同様の機能を持っていますが、回転の順番がY-&gt;X-&gt;Zとなります。</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>__参照__:</span></span>
<span class="line"><span></span></span>
<span class="line"><span>event_ang</span></span>
<span class="line"><span>event_angz</span></span>
<span class="line"><span>event_angr</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>## event_angz {#event_angz}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>angグループ変化イベントを追加</span></span>
<span class="line"><span></span></span>
<span class="line"><span>__グループ__:</span></span>
<span class="line"><span></span></span>
<span class="line"><span>拡張画面制御命令</span></span>
<span class="line"><span></span></span>
<span class="line"><span>__パラメーター__:</span></span>
<span class="line"><span></span></span>
<span class="line"><span>id,frame,x1,y1,z1,sw</span></span>
<span class="line"><span>id         : イベントID</span></span>
<span class="line"><span>frame      : 変化までのフレーム数</span></span>
<span class="line"><span>(x1,y1,z1) : 設定される値</span></span>
<span class="line"><span>sw(0)      : 補間オプション</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>__説明__:</span></span>
<span class="line"><span></span></span>
<span class="line"><span>event_ang命令と同様の機能を持っていますが、回転の順番がZ-&gt;Y-&gt;Xとなります。</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>__参照__:</span></span>
<span class="line"><span></span></span>
<span class="line"><span>event_ang</span></span>
<span class="line"><span>event_angy</span></span>
<span class="line"><span>event_angr</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>## event_setangy {#event_setangy}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>angグループ設定イベントを追加</span></span>
<span class="line"><span></span></span>
<span class="line"><span>__グループ__:</span></span>
<span class="line"><span></span></span>
<span class="line"><span>拡張画面制御命令</span></span>
<span class="line"><span></span></span>
<span class="line"><span>__パラメーター__:</span></span>
<span class="line"><span></span></span>
<span class="line"><span>id,x1,y1,z1,x2,y2,z2</span></span>
<span class="line"><span>id         : イベントID</span></span>
<span class="line"><span>(x1,y1,z1) : 設定される値(下限値)</span></span>
<span class="line"><span>(x2,y2,z2) : 設定される値(上限値)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>__説明__:</span></span>
<span class="line"><span></span></span>
<span class="line"><span>event_setang命令と同様の機能を持っていますが、回転の順番がY-&gt;X-&gt;Zとなります。</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>__参照__:</span></span>
<span class="line"><span></span></span>
<span class="line"><span>event_setang</span></span>
<span class="line"><span>event_setangz</span></span>
<span class="line"><span>event_setangr</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>## event_setangz {#event_setangz}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>angグループ設定イベントを追加</span></span>
<span class="line"><span></span></span>
<span class="line"><span>__グループ__:</span></span>
<span class="line"><span></span></span>
<span class="line"><span>拡張画面制御命令</span></span>
<span class="line"><span></span></span>
<span class="line"><span>__パラメーター__:</span></span>
<span class="line"><span></span></span>
<span class="line"><span>id,x1,y1,z1,x2,y2,z2</span></span>
<span class="line"><span>id         : イベントID</span></span>
<span class="line"><span>(x1,y1,z1) : 設定される値(下限値)</span></span>
<span class="line"><span>(x2,y2,z2) : 設定される値(上限値)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>__説明__:</span></span>
<span class="line"><span></span></span>
<span class="line"><span>event_setang命令と同様の機能を持っていますが、回転の順番がZ-&gt;Y-&gt;Xとなります。</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>__参照__:</span></span>
<span class="line"><span></span></span>
<span class="line"><span>event_setang</span></span>
<span class="line"><span>event_setangy</span></span>
<span class="line"><span>event_setangr</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>## gpresetlight {#gpresetlight}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>カレントライトの初期化</span></span>
<span class="line"><span></span></span>
<span class="line"><span>__グループ__:</span></span>
<span class="line"><span></span></span>
<span class="line"><span>拡張画面制御命令</span></span>
<span class="line"><span></span></span>
<span class="line"><span>__パラメーター__:</span></span>
<span class="line"><span></span></span>
<span class="line"><span>p1,p2,p3</span></span>
<span class="line"><span>p1=1〜9(1) : ディレクショナルライトの個数</span></span>
<span class="line"><span>p2=0〜9(0) : ポイントライトの個数</span></span>
<span class="line"><span>p3=0〜9(0) : スポットライトの個数</span></span>
<span class="line"><span></span></span>
<span class="line"><span>__説明__:</span></span>
<span class="line"><span></span></span>
<span class="line"><span>使用するライトの種別とともにカレントライトを初期化します。</span></span>
<span class="line"><span>カレントライトを設定しておくことで、以降に生成されたモデルやマテリアルが受けるライトの詳細を決めることができます。</span></span>
<span class="line"><span>シーンが初期化された状態では、ディレクショナルライト1個だけを設定できる状態になっています。複数のライトや、ポイントライト、スポットライトなどを使用する場合は、gpresetlight命令によってカレントライトの個数をあらかじめ決めておく必要があります。</span></span>
<span class="line"><span>p1,p2,p3パラメーターで、それぞれのライト種別が使用するライトの最大個数を指定します。ディレクショナルライトは最低でも1つ使用する必要があります。</span></span>
<span class="line"><span>それ以外のポイントライト、スポットライトは必要に応じて指定してください。GPUの計算負荷につながるため、できるだけ不要なライトは指定しないようにしてください。</span></span>
<span class="line"><span>カレントライトが初期化された後は、gpuselight命令により登録することができます。</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>__参照__:</span></span>
<span class="line"><span></span></span>
<span class="line"><span>gpuselight</span></span>
<span class="line"><span>gplight</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>## setobjlight {#setobjlight}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>オブジェクトにカレントライトを設定</span></span>
<span class="line"><span></span></span>
<span class="line"><span>__グループ__:</span></span>
<span class="line"><span></span></span>
<span class="line"><span>拡張画面制御命令</span></span>
<span class="line"><span></span></span>
<span class="line"><span>__パラメーター__:</span></span>
<span class="line"><span></span></span>
<span class="line"><span>id</span></span>
<span class="line"><span>id      : オブジェクトID</span></span>
<span class="line"><span></span></span>
<span class="line"><span>__説明__:</span></span>
<span class="line"><span></span></span>
<span class="line"><span>idで指定したオブジェクトにカレントライトの設定を行います。</span></span>
<span class="line"><span>idで指定したオブジェクトは、光源計算を行う3Dモデルである必要があります。</span></span>
<span class="line"><span>それまでオブジェクトに設定されていたライトの設定は破棄され、新しくカレントライトの設定が上書きされます。</span></span>
<span class="line"><span>ただし、3Dモデルが生成された時点のカレントライトの設定(ディレクショナルライト、ポイントライト、スポットライトの個数)は変更されませんので注意してください。(必ず、カレントライトに含まれるライトの個数が同一のものを設定するようにしてください。)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>__参照__:</span></span>
<span class="line"><span></span></span>
<span class="line"><span>gpuselight</span></span>
<span class="line"><span>gpresetlight</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>## gppcontact {#gppcontact}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>オブジェクトの物理衝突情報を作成する</span></span>
<span class="line"><span></span></span>
<span class="line"><span>__グループ__:</span></span>
<span class="line"><span></span></span>
<span class="line"><span>拡張画面制御命令</span></span>
<span class="line"><span></span></span>
<span class="line"><span>__パラメーター__:</span></span>
<span class="line"><span></span></span>
<span class="line"><span>var,objid</span></span>
<span class="line"><span>var      : 結果が代入される変数</span></span>
<span class="line"><span>objid(0) : オブジェクトID</span></span>
<span class="line"><span></span></span>
<span class="line"><span>__説明__:</span></span>
<span class="line"><span></span></span>
<span class="line"><span>物理設定を行なった3Dオブジェクトの正確な衝突の情報を作成します。</span></span>
<span class="line"><span>objidで指定された3Dオブジェクトが他のオブジェクトに衝突した際の情報をすべて作成します。</span></span>
<span class="line"><span>objidで指定された3Dオブジェクトは、必ずgppbind命令により物理設定を行っておく必要があります。</span></span>
<span class="line"><span>また、setcoli命令により衝突を検知する対象となるオブジェクトのコリジョングループを適切に設定しておく必要があります。</span></span>
<span class="line"><span>varで指定された変数には衝突情報が作成された個数が整数値として代入されます。</span></span>
<span class="line"><span>エラーが発生した場合は、マイナス値が代入されます。</span></span>
<span class="line"><span>衝突情報は複数作成されることがあります。これは、複数のオブジェクトと同時に衝突することがあるためです。変数に0が代入された場合は、衝突しているオブジェクトがないことを示します。</span></span>
<span class="line"><span>実際の衝突情報は、gppinfo命令により取得することができます。衝突情報として、衝突した対象のオブジェクトID、衝突した座標、衝突の強さなどを取得することができます。</span></span>
<span class="line"><span>衝突情報はオブジェクトIDごとに作成され、新たにgppcontact命令を実行するまでは保持されます。</span></span>
<span class="line"><span>gppcontact命令は、物理挙動の過程で発生した衝突の詳細を得るための命令です。簡易的な衝突を知るだけであれば、getcoli命令を代替で利用することがてきます。</span></span>
<span class="line"><span>また、あくまでも物理挙動で移動を行った際に衝突した(他のオブジェクトにめり込んだ)という情報をもとにしているため、完全に動きのない状態(単に接しているだけの状態)では衝突情報が作成されないので注意してください。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>__参照__:</span></span>
<span class="line"><span></span></span>
<span class="line"><span>gppbind</span></span>
<span class="line"><span>gppinfo</span></span>
<span class="line"><span>getcoli</span></span>
<span class="line"><span>setcoli</span></span>
<span class="line"><span>gppraytest</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>## gppinfo {#gppinfo}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>オブジェクトの物理衝突情報を取得する</span></span>
<span class="line"><span></span></span>
<span class="line"><span>__グループ__:</span></span>
<span class="line"><span></span></span>
<span class="line"><span>拡張画面制御命令</span></span>
<span class="line"><span></span></span>
<span class="line"><span>__パラメーター__:</span></span>
<span class="line"><span></span></span>
<span class="line"><span>fv,var,objid,index</span></span>
<span class="line"><span>fv       : FV値が代入される変数名</span></span>
<span class="line"><span>var      : 衝突したオブジェクトID値が代入される変数名</span></span>
<span class="line"><span>objid(0) : オブジェクトID</span></span>
<span class="line"><span>index(0) : インデックス値</span></span>
<span class="line"><span></span></span>
<span class="line"><span>__説明__:</span></span>
<span class="line"><span></span></span>
<span class="line"><span>gppcontact命令によって作成されたオブジェクトの物理衝突情報を取得します。必ず、gppcontact命令を先に実行しておく必要があります。</span></span>
<span class="line"><span>objidにより指定された3Dオブジェクトの物理衝突情報をvarとfvで指定した変数に代入します。変数には以下の内容が格納されます。</span></span></code></pre></div><pre><code>変数                 | 代入される内容
--------------------------------------------------------------
var                    衝突したオブジェクトID
fv(0)                  衝突したX座標
fv(1)                  衝突したY座標
fv(2)                  衝突したZ座標
fv(3)                  衝突した強さ
</code></pre><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span></span></span>
<span class="line"><span>gppcontact命令により検出された衝突情報が複数ある場合は、0から始まるインデックス値によって識別します。</span></span>
<span class="line"><span>3つの衝突情報がある場合は、インデックス値は0〜2を指定することができます。</span></span>
<span class="line"><span>処理が正常に終了した場合は、システム変数statに0が代入されます。エラーが発生した場合は、システム変数statにマイナス値が代入されます。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>__参照__:</span></span>
<span class="line"><span></span></span>
<span class="line"><span>gppcontact</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>## gppraytest {#gppraytest}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>ベクトル上の物理衝突情報を取得する</span></span>
<span class="line"><span></span></span>
<span class="line"><span>__グループ__:</span></span>
<span class="line"><span></span></span>
<span class="line"><span>拡張画面制御命令</span></span>
<span class="line"><span></span></span>
<span class="line"><span>__パラメーター__:</span></span>
<span class="line"><span></span></span>
<span class="line"><span>var,objid,distance</span></span>
<span class="line"><span>var      : 検出したオブジェクトID値が代入される変数名</span></span>
<span class="line"><span>objid(0)      : オブジェクトID</span></span>
<span class="line"><span>distance(100) : ベクトルの長さ</span></span>
<span class="line"><span></span></span>
<span class="line"><span>__説明__:</span></span>
<span class="line"><span></span></span>
<span class="line"><span>物理設定を行なった3Dオブジェクトの中で、指定した線分に衝突するオブジェクトの情報を取得します。</span></span>
<span class="line"><span>objidで指定した3Dノードを持つオブジェクトを基点として、オブジェクトの向いている方向からdistanceで指定された距離の間で最初に衝突する3DオブジェクトのオブジェクトIDを調査します。</span></span>
<span class="line"><span>objidで指定されるオブジェクトは、物理設定されている必要はありません。カメラやnullノード等であっても問題ありません。</span></span>
<span class="line"><span>varで指定された変数に結果が代入されます。何らかのエラーが発生した場合は、マイナス値が代入されます。</span></span>
<span class="line"><span>線分に衝突するオブジェクトがあった場合は、そのオブジェクトIDが代入されます。何も衝突するオブジェクトがなかった場合は、0が代入されます。</span></span>
<span class="line"><span>衝突があった場合は、さらにobjidで指定されたオブジェクトのノードワーク値(work,work2)に詳細な情報が格納されます。</span></span>
<span class="line"><span>ノードワーク値は、getwork及びgetwork2命令により取得することができます。それぞれに設定される内容は以下の通りです。</span></span></code></pre></div><pre><code>ノードワーク値       | 設定される内容
--------------------------------------------------------------
work                   衝突が発生したX,Y,Z座標
work2                  衝突した面の法線ベクトルX,Y,Z値
</code></pre><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span></span></span>
<span class="line"><span>gppraytest命令は、物理設定されたオブジェクトすべてが衝突の対象となります。コリジョングループの設定は考慮されません。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>__参照__:</span></span>
<span class="line"><span></span></span>
<span class="line"><span>gppcontact</span></span>
<span class="line"><span>getcoli</span></span>
<span class="line"><span>getwork</span></span>
<span class="line"><span>getwork2</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>## event_fade {#event_fade}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>フェード設定イベントを追加</span></span>
<span class="line"><span></span></span>
<span class="line"><span>__グループ__:</span></span>
<span class="line"><span></span></span>
<span class="line"><span>拡張画面制御命令</span></span>
<span class="line"><span></span></span>
<span class="line"><span>__パラメーター__:</span></span>
<span class="line"><span></span></span>
<span class="line"><span>id,fade</span></span>
<span class="line"><span>id         : イベントID</span></span>
<span class="line"><span>fade(0)    : 設定される値</span></span>
<span class="line"><span></span></span>
<span class="line"><span>__説明__:</span></span>
<span class="line"><span></span></span>
<span class="line"><span>オブジェクトのフェード値を設定するイベントを追加します。</span></span>
<span class="line"><span>フェードにマイナス値を指定することでα値を0に向けてフェードアウト、プラス値を指定することでα値を255に向けてフェードインさせることができます。</span></span>
<span class="line"><span>event_prmset命令でPRMSET_FADEパラメーターに設定することと等価です。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>__参照__:</span></span>
<span class="line"><span></span></span>
<span class="line"><span>event_prmset</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>## gpmesh {#gpmesh}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>3Dメッシューノードを生成</span></span>
<span class="line"><span></span></span>
<span class="line"><span>__グループ__:</span></span>
<span class="line"><span></span></span>
<span class="line"><span>拡張画面制御命令</span></span>
<span class="line"><span></span></span>
<span class="line"><span>__パラメーター__:</span></span>
<span class="line"><span></span></span>
<span class="line"><span>var,color,matobj</span></span>
<span class="line"><span>var     : 生成されたオブジェクトIDが代入される変数名</span></span>
<span class="line"><span>color(-1)  : マテリアルカラー(24bitRGB値)</span></span>
<span class="line"><span>matobj(-1) : マテリアルID</span></span>
<span class="line"><span></span></span>
<span class="line"><span>__説明__:</span></span>
<span class="line"><span></span></span>
<span class="line"><span>自由な形状を3Dモデルとして定義したものをノードオブジェクトとして生成します。</span></span>
<span class="line"><span>あらかじめ、gpmeshclear、gpmeshadd、gpmeshpolygon等の命令を使用して、カスタム3Dメッシュと呼ばれるモデル情報を構築する必要があります。</span></span>
<span class="line"><span>gpboxやgpplateのような単純なモデルではなく、自由に複雑な形状を定義することができますが、頂点座標や法線ベクトルの1つ1つを定義する必要があるため、上級者向けの機能と考えてください。</span></span>
<span class="line"><span>通常は3Dモデルデータを.gpbファイルとして用意したものをご利用ください。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>カスタム3Dメッシュは、以下のような手順で作成することができます。</span></span></code></pre></div><pre><code>1. gpmeshclear命令でカスタム3Dメッシュを初期化する
2. gpmeshadd命令で必要な頂点情報を登録する
3. gpmeshpolygon命令により頂点情報を組み合わせて3角形または4角形の面を構成する
4. 必要な面だけ以上の登録を繰り返す
</code></pre><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span></span></span>
<span class="line"><span>gpmesh命令は、作成されたカスタム3Dメッシュの情報をもとに、登録されているすべての面を使用したモデルを生成します。</span></span>
<span class="line"><span>頂点情報には、X,Y,Z座標、法線ベクトル、テクスチャUV座標などを登録することが可能です。これらを適切に設定することで、自由な形状を定義することができます。</span></span>
<span class="line"><span>カスタム3Dメッシュは、何度でも再定義して異なるモデル形状を登録することが可能です。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>varで指定された変数に、生成されたオブジェクトのIDが代入されます。</span></span>
<span class="line"><span>生成されたオブジェクトはgpload命令により読み込まれた3Dモデルと同様に操作することができます。</span></span>
<span class="line"><span>colorパラメーターでモデル全体の色(マテリアルカラー)を24bitRGB値(0xRRGGBBで示される値)により指定します。</span></span>
<span class="line"><span>colorパラメーターが省略された場合は、白色(0xffffff)が使用されます。</span></span>
<span class="line"><span>matobjパラメーターで、マテリアルIDを指定することができます。</span></span>
<span class="line"><span>gpcolormat命令などにより、ユーザーが生成したマテリアルを使用する場合は指定してください。</span></span>
<span class="line"><span>matobjパラメーターが省略された場合は、標準のマテリアルが使用されます。</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>__参照__:</span></span>
<span class="line"><span></span></span>
<span class="line"><span>gpmeshclear</span></span>
<span class="line"><span>gpmeshpolygon</span></span>
<span class="line"><span>gpmeshadd</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>## gpmeshclear {#gpmeshclear}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>カスタム3Dメッシュを初期化</span></span>
<span class="line"><span></span></span>
<span class="line"><span>__グループ__:</span></span>
<span class="line"><span></span></span>
<span class="line"><span>拡張画面制御命令</span></span>
<span class="line"><span></span></span>
<span class="line"><span>__説明__:</span></span>
<span class="line"><span></span></span>
<span class="line"><span>カスタム3Dメッシュの登録情報を初期化します。</span></span>
<span class="line"><span>カスタム3Dメッシュは、自由な3D形状を定義するためのデータを構築する仕組みです。</span></span>
<span class="line"><span>実際のデータ登録は、gpmeshadd、gpmeshpolygon命令を使用します。</span></span>
<span class="line"><span>構築したデータは、gpmesh命令でノードオブジェクトとして登録することができます。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>__参照__:</span></span>
<span class="line"><span></span></span>
<span class="line"><span>gpmesh</span></span>
<span class="line"><span>gpmeshpolygon</span></span>
<span class="line"><span>gpmeshadd</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>## gpmeshadd {#gpmeshadd}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>カスタム3Dメッシュに頂点情報を追加</span></span>
<span class="line"><span></span></span>
<span class="line"><span>__グループ__:</span></span>
<span class="line"><span></span></span>
<span class="line"><span>拡張画面制御命令</span></span>
<span class="line"><span></span></span>
<span class="line"><span>__パラメーター__:</span></span>
<span class="line"><span></span></span>
<span class="line"><span>var,x,y,z,nx,ny,nz,u,v</span></span>
<span class="line"><span>var     : 生成されたメッシュ頂点IDが代入される変数名</span></span>
<span class="line"><span>x(0)    : X座標(実数)</span></span>
<span class="line"><span>y(0)    : Y座標(実数)</span></span>
<span class="line"><span>z(0)    : Z座標(実数)</span></span>
<span class="line"><span>nx(0)   : 法線ベクトルX(実数)</span></span>
<span class="line"><span>ny(0)   : 法線ベクトルY(実数)</span></span>
<span class="line"><span>nz(0)   : 法線ベクトルZ(実数)</span></span>
<span class="line"><span>u(0)    : テクスチャ頂点座標X(実数)</span></span>
<span class="line"><span>v(0)    : テクスチャ頂点座標Y(実数)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>__説明__:</span></span>
<span class="line"><span></span></span>
<span class="line"><span>カスタム3Dメッシュに頂点情報を追加登録します。</span></span>
<span class="line"><span>頂点情報は、X,Y,Z座標、法線ベクトル、テクスチャUV座標を1つのセットとして登録します。</span></span>
<span class="line"><span>varで指定された変数に、登録されたメッシュ頂点IDが代入されます。メッシュ頂点IDは、面(3角形,4角形)を構成する際に使用します。</span></span>
<span class="line"><span>既に登録されている頂点情報の場合は、過去に登録されたメッシュ頂点IDが代入され、重複して登録は行われません。頂点情報は最大で32767まで登録することが可能です。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>(X,Y,Z)座標は3D空間上の頂点を示します。</span></span>
<span class="line"><span>法線ベクトル(X,Y,Z)は頂点が向いている方向(ベクトル)を正規化したものを示します。法線ベクトルは、光源計算を行う際に必要となります。</span></span>
<span class="line"><span>テクスチャ頂点座標(X(u),Y(v))は、テクスチャを貼る際に参照される座標を指定します。原点(0.0, 0.0)から両端(1.0, 1.0)までの正規化された値となります。マテリアルとしてテクスチャを貼る際に必要となります。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>カスタム3Dメッシュを定義する場合は、最初に必ずgpmeshclear命令で登録情報をクリアしておく必要があります。</span></span>
<span class="line"><span>実際に頂点情報を組み合わせて面(3角形,4角形)を登録する場合は、gpmeshpolygon命令を使用します。</span></span>
<span class="line"><span>構築したデータは、gpmesh命令でノードオブジェクトとして登録することができます。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>__参照__:</span></span>
<span class="line"><span></span></span>
<span class="line"><span>gpmeshclear</span></span>
<span class="line"><span>gpmeshpolygon</span></span>
<span class="line"><span>gpmesh</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>## gpmeshpolygon {#gpmeshpolygon}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>カスタム3Dメッシュに面情報を追加</span></span>
<span class="line"><span></span></span>
<span class="line"><span>__グループ__:</span></span>
<span class="line"><span></span></span>
<span class="line"><span>拡張画面制御命令</span></span>
<span class="line"><span></span></span>
<span class="line"><span>__パラメーター__:</span></span>
<span class="line"><span></span></span>
<span class="line"><span>p1,p2,p3,p4</span></span>
<span class="line"><span>p1(0)   : メッシュ頂点ID1</span></span>
<span class="line"><span>p2(0)   : メッシュ頂点ID2</span></span>
<span class="line"><span>p3(0)   : メッシュ頂点ID3</span></span>
<span class="line"><span>p4(-1)  : メッシュ頂点ID4</span></span>
<span class="line"><span></span></span>
<span class="line"><span>__説明__:</span></span>
<span class="line"><span></span></span>
<span class="line"><span>カスタム3Dメッシュに面(ポリゴン)情報を追加登録します。</span></span>
<span class="line"><span>あらかじめ、gpmeshadd命令により必要な頂点情報を登録しておく必要があります。</span></span>
<span class="line"><span>頂点情報のインデックスを示すメッシュ頂点IDを組み合わせて、面(3角形,4角形)を構成します。</span></span>
<span class="line"><span>3角形の場合は、p1,p2,p3パラメーター、4角形の場合は、p1,p2,p3,p4パラメーターにメッシュ頂点IDを指定してください。頂点を指定する順番は、p1,p2,p3の3角形が時計回りに並ぶように配置してください。(4角形の場合は、残りの1頂点を最後に追加してください)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>構築したデータは、gpmesh命令でノードオブジェクトとして登録することができます。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>__参照__:</span></span>
<span class="line"><span></span></span>
<span class="line"><span>gpmeshclear</span></span>
<span class="line"><span>gpmeshadd</span></span>
<span class="line"><span>gpmesh</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>## gpnodeinfo {#gpnodeinfo}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>3Dモデルの階層情報を取得する</span></span>
<span class="line"><span></span></span>
<span class="line"><span>__グループ__:</span></span>
<span class="line"><span></span></span>
<span class="line"><span>拡張画面制御命令</span></span>
<span class="line"><span></span></span>
<span class="line"><span>__パラメーター__:</span></span>
<span class="line"><span></span></span>
<span class="line"><span>var,objid,option,&quot;name&quot;</span></span>
<span class="line"><span>var       : 結果が代入される変数名</span></span>
<span class="line"><span>objid(0)  : オブジェクトID</span></span>
<span class="line"><span>option(0) : メッシュ頂点ID1</span></span>
<span class="line"><span>name      : 階層ノード名</span></span>
<span class="line"><span></span></span>
<span class="line"><span>__説明__:</span></span>
<span class="line"><span></span></span>
<span class="line"><span>gpload命令で読み込まれた3Dモデルの階層情報を取得して、varで指定された変数に結果を代入します。</span></span>
<span class="line"><span>objidで指定した3Dモデルが持つ階層を名前によって指定することで個別のノードを特定します。</span></span>
<span class="line"><span>(階層の名前(ノード名)は、3Dモデル作成時にあらかじめ付けられています。すべての階層を取得する際には、mod_gputilモジュールのgptree_get命令をご使用ください。)</span></span>
<span class="line"><span>option値により、代入される結果を選択することができます。option値に指定できる値は、以下の通りです。</span></span></code></pre></div><pre><code>オプション値          | 取得される内容
--------------------------------------------------------------
GPNODEINFO_NODE         該当するノードを示すオブジェクトID
GPNODEINFO_MODEL        該当するモデルノードを示すオブジェクトID
GPNODEINFO_NAME         該当するノード名(*)
GPNODEINFO_CHILD        階層が持つ子のノード名(*)
GPNODEINFO_SIBLING      同じ階層にある隣のノード名(*)
GPNODEINFO_SKINROOT     スキンメッシュが持っているノード名(*)

(*) 結果の文字列が代入されます
</code></pre><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span></span></span>
<span class="line"><span>GPNODEINFO_NODEを指定した場合は、指定された名前を持つ階層を示す特別なオブジェクトIDの値が代入されます。</span></span>
<span class="line"><span>このオブジェクトIDを使用して、getpos、getang、getquatなどそれぞれの階層が持つ座標や回転情報を取得することができます。</span></span>
<span class="line"><span>GPNODEINFO_MODELを指定した場合は、描画するモデルを持った階層のみオブジェクトIDが取得されます。</span></span>
<span class="line"><span>GPNODEINFO_CHILD、GPNODEINFO_SIBLING、GPNODEINFO_SKINROOTのオプションは、他の階層との繋がりを取得します。これにより、ノードの階層を調べることができます。</span></span>
<span class="line"><span>処理が正常に終了した場合は、システム変数statに0が代入されます。エラーが発生した場合は、システム変数statにマイナス値が代入されます。</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>__参照__:</span></span>
<span class="line"><span></span></span>
<span class="line"><span>gpload</span></span></code></pre></div>`,580),t=[e];function i(o,c,g,r,d,_){return a(),n("div",null,t)}const m=s(l,[["render",i]]);export{u as __pageData,m as default};

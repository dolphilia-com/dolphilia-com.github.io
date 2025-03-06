import{_ as s,c as i,o as t,a3 as a}from"./chunks/framework.DflgEAq4.js";const E=JSON.parse('{"title":"モニター","description":"","frontmatter":{},"headers":[],"relativePath":"translation/GLFW/Reference/monitor.md","filePath":"translation/GLFW/Reference/monitor.md","lastUpdated":null}'),p={name:"translation/GLFW/Reference/monitor.md"},n=a('<h1 id="モニター" tabindex="-1">モニター <a class="header-anchor" href="#モニター" aria-label="Permalink to &quot;モニター&quot;">​</a></h1><p>これは、モニターに関連する関数とタイプのリファレンス・ドキュメントである。タスク指向の情報については、モニターガイドを参照してください。</p><nav class="table-of-contents"><ul><li><a href="#型定義">型定義</a></li><li><a href="#関数">関数</a></li></ul></nav><h2 id="型定義" tabindex="-1">型定義 <a class="header-anchor" href="#型定義" aria-label="Permalink to &quot;型定義&quot;">​</a></h2><table tabindex="0"><thead><tr><th>名前</th><th>説明</th></tr></thead><tbody><tr><td><code>struct GLFWmonitor</code></td><td>不透明なモニターオブジェクト。</td></tr><tr><td><code>void(* GLFWmonitorfun)</code></td><td>モニター設定コールバックの関数ポインタ型。</td></tr><tr><td><code>struct GLFWvidmode</code></td><td>ビデオモードタイプ。</td></tr><tr><td><code>struct GLFWgammaramp</code></td><td>ガンマランプ。</td></tr></tbody></table><details class="details custom-block"><summary><code>struct GLFWmonitor</code></summary><p>不透明なモニターオブジェクト。</p><div class="language-c vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">typedef</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> struct</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> GLFWmonitor GLFWmonitor</span></span></code></pre></div><p><strong>参照</strong>:</p><ul><li>Monitor objects</li></ul><p><strong>追加</strong>:</p><p>バージョン3.0で追加。</p></details><details class="details custom-block"><summary><code>void(* GLFWmonitorfun)</code></summary><p>これは、モニター設定コールバック用の関数ポインタ型である。モニター・コールバック関数は以下のシグネチャーを持ちます：</p><div class="language-c vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">void</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> function_name</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(GLFWmonitor</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">*</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;"> monitor</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">int</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;"> event</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span></code></pre></div><hr><div class="language-c vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">typedef</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> void</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">*</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> GLFWmonitorfun) (GLFWmonitor </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">*</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">monitor, </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">int</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> event)</span></span></code></pre></div><p><strong>引数</strong>:</p><ul><li><code>[in] monitor</code>: 接続または切断されたモニター。</li><li><code>[in] event</code>: GLFW_CONNECTEDまたはGLFW_DISCONNECTEDのいずれか。将来のリリースでは、さらに多くのイベントが追加されるかもしれません。</li></ul><p><strong>参照</strong>:</p><ul><li>Monitor configuration changes</li><li>glfwSetMonitorCallback</li></ul><p><strong>追加</strong>:</p><p>バージョン3.0で追加。</p></details><details class="details custom-block"><summary><code>struct GLFWvidmode</code></summary><p>単一のビデオモードについて説明する。</p><div class="language-c vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">typedef</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> struct</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> GLFWvidmode GLFWvidmode</span></span></code></pre></div><p><strong>参照</strong>:</p><ul><li>Video modes</li><li>glfwGetVideoMode</li><li>glfwGetVideoModes</li></ul><p><strong>追加</strong>:</p><p>バージョン1.0で追加。GLFW 3: リフレッシュレートメンバーを追加。</p></details><details class="details custom-block"><summary><code>struct GLFWgammaramp</code></summary><p>モニターのガンマランプについて説明します。</p><div class="language-c vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">typedef</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> struct</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> GLFWgammaramp GLFWgammaramp</span></span></code></pre></div><p><strong>参照</strong>:</p><ul><li>Gamma ramp</li><li>glfwGetGammaRamp</li><li>glfwSetGammaRamp</li></ul><p><strong>追加</strong>:</p><p>バージョン3.0で追加。</p></details><h2 id="関数" tabindex="-1">関数 <a class="header-anchor" href="#関数" aria-label="Permalink to &quot;関数&quot;">​</a></h2><table tabindex="0"><thead><tr><th>関数名</th><th>説明</th></tr></thead><tbody><tr><td>glfwGetMonitors</td><td>現在接続されているモニターを返します。</td></tr><tr><td>glfwGetPrimaryMonitor</td><td>プライマリモニタを返します。</td></tr><tr><td>glfwGetMonitorPos</td><td>仮想画面上のモニターのビューポートの位置を返します。</td></tr><tr><td>glfwGetMonitorWorkarea</td><td>モニターの作業領域を取得します。</td></tr><tr><td>glfwGetMonitorPhysicalSize</td><td>モニターの物理的なサイズを返します。</td></tr><tr><td>glfwGetMonitorContentScale</td><td>指定したモニターのコンテンツスケールを取得します。</td></tr><tr><td>glfwGetMonitorName</td><td>指定されたモニターの名前を返します。</td></tr><tr><td>glfwSetMonitorUserPointer</td><td>指定したモニターのユーザーポインターを設定します。</td></tr><tr><td>glfwGetMonitorUserPointer</td><td>指定されたモニターのユーザーポインタを返します。</td></tr><tr><td>glfwSetMonitorCallback</td><td>モニター設定コールバックを設定します。</td></tr><tr><td>glfwGetVideoModes</td><td>指定したモニターで利用可能なビデオモードを返します。</td></tr><tr><td>glfwGetVideoMode</td><td>指定されたモニターの現在のモードを返します。</td></tr><tr><td>glfwSetGamma</td><td>ガンマランプを生成し、指定されたモニターに設定する。</td></tr><tr><td>glfwGetGammaRamp</td><td>指定されたモニターの現在のガンマランプを返します。</td></tr><tr><td>glfwSetGammaRamp</td><td>指定したモニターの現在のガンマランプを設定します。</td></tr></tbody></table><details class="details custom-block"><summary><code>glfwGetMonitors()</code></summary><p>この関数は、現在接続されているすべてのモニターのハンドルの配列を返す。プライマリ・モニターは常に返される配列の最初にある。モニターが見つからなかった場合、この関数は NULL を返します。</p><div class="language-c vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">GLFWmonitor </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">**</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> glfwGetMonitors</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">int</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> *</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;"> count</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span></code></pre></div><p><strong>引数</strong>:</p><ul><li><code>[out] count</code>: 返された配列のモニター数を格納する場所。エラーが発生した場合は0がセットされる。</li></ul><p><strong>戻り値</strong>:</p><p>モニターハンドルの配列、またはモニターが見つからなかったかエラーが発生した場合はNULL。</p><p><strong>エラー</strong>:</p><p>考えられるエラーはGLFW_NOT_INITIALIZED。</p><p><strong>ポインタの寿命</strong>:</p><p>返された配列はGLFWによって割り当てられ、解放される。自分で解放してはならない。モニターの設定が変更されるか、ライブラリーが終了するまで有効であることが保証される。</p><p><strong>スレッドセーフ</strong>:</p><p>この関数はメインスレッドからのみ呼び出されなければならない。</p><p><strong>参照</strong>:</p><ul><li>Retrieving monitors</li><li>Monitor configuration changes</li><li>glfwGetPrimaryMonitor</li></ul><p><strong>追加</strong>:</p><p>バージョン3.0で追加。</p></details><details class="details custom-block"><summary><code>glfwGetPrimaryMonitor()</code></summary><p>この関数はプライマリモニタを返す。これは通常、タスクバーやグローバルメニューバーのような要素が配置されているモニターである。</p><div class="language-c vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">GLFWmonitor </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">*</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> glfwGetPrimaryMonitor</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">void</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> )</span></span></code></pre></div><p><strong>戻り値</strong>:</p><p>プライマリモニタ、またはモニタが見つからないかエラーが発生した場合はNULL。</p><p><strong>エラー</strong>:</p><p>考えられるエラーはGLFW_NOT_INITIALIZED。</p><p><strong>スレッドセーフ</strong>:</p><p>この関数はメインスレッドからのみ呼び出されなければならない。</p><p><strong>備考</strong>:</p><p>プライマリモニタは、glfwGetMonitorsが返す配列の中で常に最初になる。</p><p><strong>参照</strong>:</p><ul><li>Retrieving monitors</li><li>glfwGetMonitors</li></ul><p><strong>追加</strong>:</p><p>バージョン3.0で追加。</p></details><details class="details custom-block"><summary><code>glfwGetMonitorPos()</code></summary><p>この関数は、指定されたモニターの左上隅の位置をスクリーン座標で返す。</p><p>position引数のいずれか、またはすべてがNULLであってもよい。エラーが発生した場合、NULLでない位置引数はすべて0に設定されます。</p><div class="language-c vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">void</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> glfwGetMonitorPos</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(GLFWmonitor </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">*</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;"> monitor</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">int</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> *</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;"> xpos</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">int</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> *</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;"> ypos</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span></code></pre></div><p><strong>引数</strong>:</p><ul><li><code>[in] monitor</code>: 問い合わせるモニター。</li><li><code>[out] xpos</code>: モニターのX座標を格納する場所、またはNULL。</li><li><code>[out] ypos</code>: モニターのy座標を格納する場所、またはNULL。</li></ul><p><strong>エラー</strong>:</p><p>起こりうるエラーはGLFW_NOT_INITIALIZEDとGLFW_PLATFORM_ERRORである。</p><p><strong>スレッドセーフ</strong>:</p><p>この関数はメインスレッドからのみ呼び出されなければならない。</p><p><strong>参照</strong>:</p><ul><li>Monitor properties</li></ul><p><strong>追加</strong>:</p><p>バージョン3.0で追加。</p></details><details class="details custom-block"><summary><code>glfwGetMonitorWorkarea()</code></summary><p>この関数は、指定されたモニタの作業領域の左上隅の位置と、作業領域のサイズを画面座標で返す。作業領域は、オペレーティングシステムのタスクバーが存在する場合、それに遮られないモニタの領域として定義される。タスクバーが存在しない場合、作業領域はスクリーン座標でのモニター解像度となる。</p><p>positionとsizeの引数のいずれか、またはすべてがNULLであってもよい。エラーが発生した場合、NULLでない位置とサイズの引数はすべて0に設定される。</p><div class="language-c vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">void</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> glfwGetMonitorWorkarea</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(GLFWmonitor </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">*</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;"> monitor</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">int</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> *</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;"> xpos</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">int</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> *</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;"> ypos</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">int</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> *</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;"> width</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">int</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> *</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;"> height</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span></code></pre></div><p><strong>引数</strong>:</p><ul><li><code>[in] monitor</code>: 問い合わせるモニター。</li><li><code>[out] xpos</code>: モニターのX座標を格納する場所、またはNULL。</li><li><code>[out] ypos</code>: モニターのy座標を格納する場所、またはNULL。</li><li><code>[out] width</code>: モニター幅を格納する場所、またはNULL。</li><li><code>[out] height</code>: モニターの高さを格納する場所、またはNULL。</li></ul><p><strong>エラー</strong>:</p><p>起こりうるエラーはGLFW_NOT_INITIALIZEDとGLFW_PLATFORM_ERRORである。</p><p><strong>スレッドセーフ</strong>:</p><p>この関数はメインスレッドからのみ呼び出されなければならない。</p><p><strong>参照</strong>:</p><ul><li>Work area</li></ul><p><strong>追加</strong>:</p><p>バージョン3.3で追加。</p></details><details class="details custom-block"><summary><code>glfwGetMonitorPhysicalSize()</code></summary><p>この関数は、指定されたモニターの表示領域のサイズをミリメートル単位で返します。</p><p>システムによっては、モニタのEDIDデータが正しくないか、ドライバが正確に報告しないために、正確なモニタサイズ情報を提供しないものがある。</p><p>size引数のいずれかまたはすべてがNULLであってもよい。エラーが発生した場合、NULLでないsize引数はすべて0に設定されます。</p><div class="language-c vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">void</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> glfwGetMonitorPhysicalSize</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(GLFWmonitor </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">*</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;"> monitor</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">int</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> *</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;"> widthMM</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">int</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> *</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;"> heightMM</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span></code></pre></div><p><strong>引数</strong>:</p><ul><li><code>[in] monitor</code>: 問い合わせるモニター。</li><li><code>[out] widthMM</code>: モニターの表示領域の幅をミリメートル単位で格納する場所、またはNULL。</li><li><code>[out] heightMM</code>: モニターの表示領域の高さをミリメートル単位で格納する場所、またはNULL。</li></ul><p><strong>エラー</strong>:</p><p>考えられるエラーはGLFW_NOT_INITIALIZED。</p><p><strong>備考</strong>:</p><p>Windows: Windows 8以前では、モニターのEDIDデータを照会する代わりに、現在の解像度とシステムDPIから物理サイズが計算されます。</p><p><strong>スレッドセーフ</strong>:</p><p>この関数はメインスレッドからのみ呼び出されなければならない。</p><p><strong>参照</strong>:</p><ul><li>Monitor properties</li></ul><p><strong>追加</strong>:</p><p>バージョン3.0で追加。</p></details><details class="details custom-block"><summary><code>glfwGetMonitorContentScale()</code></summary><p>この関数は、指定されたモニタのコンテンツスケールを取得する。コンテンツスケールは、現在のDPIとプラットフォームのデフォルトDPIとの比率です。これはテキストやUI要素にとって特に重要です。これによってスケーリングされたUIのピクセル寸法があなたのマシンで適切に見えるなら、他のマシンではDPIやスケーリング設定に関係なく、妥当なサイズで表示されるはずです。これは、システムのDPIとスケーリング設定がある程度正しいことに依存します。</p><p>コンテンツのスケールは、モニターの解像度とピクセル密度、およびユーザー設定の両方に依存します。物理的なサイズと現在の解像度から計算される生のDPIとは大きく異なる場合があります。</p><div class="language-c vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">void</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> glfwGetMonitorContentScale</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(GLFWmonitor </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">*</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;"> monitor</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">float</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> *</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;"> xscale</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">float</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> *</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;"> yscale</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span></code></pre></div><p><strong>引数</strong>:</p><ul><li><code>[in] monitor</code>: 問い合わせるモニター。</li><li><code>[out] xscale</code>: X軸の内容スケールを格納する場所、または NULL。</li><li><code>[out] yscale</code>: Y軸の内容スケールを格納する場所、または NULL。</li></ul><p><strong>エラー</strong>:</p><p>起こりうるエラーはGLFW_NOT_INITIALIZEDとGLFW_PLATFORM_ERRORである。</p><p><strong>スレッドセーフ</strong>:</p><p>この関数はメインスレッドからのみ呼び出されなければならない。</p><p><strong>参照</strong>:</p><ul><li>Content scale</li><li>glfwGetWindowContentScale</li></ul><p><strong>追加</strong>:</p><p>バージョン3.3で追加。</p></details><details class="details custom-block"><summary><code>glfwGetMonitorName()</code></summary><p>この関数は、指定されたモニターの、UTF-8でエンコードされた人間が読める名前を返す。この名前は通常、モニターのメーカーとモデルを反映しており、接続されているモニター間で一意であることは保証されていません。</p><div class="language-c vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> char</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> *</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> glfwGetMonitorName</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(GLFWmonitor </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">*</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;"> monitor</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span></code></pre></div><p><strong>引数</strong>:</p><ul><li><code>[in] monitor</code>: 問い合わせるモニター。</li></ul><p><strong>戻り値</strong>:</p><p>UTF-8エンコードされたモニター名、またはエラーが発生した場合はNULL。</p><p><strong>エラー</strong>:</p><p>考えられるエラーはGLFW_NOT_INITIALIZED。</p><p><strong>ポインタの寿命</strong>:</p><p>返された文字列はGLFWによって割り当てられ、解放される。自分で解放してはならない．指定されたモニターが切断されるか、ライブラリが終了するまで有効です。</p><p><strong>スレッドセーフ</strong>:</p><p>この関数はメインスレッドからのみ呼び出されなければならない。</p><p><strong>参照</strong>:</p><ul><li>Monitor properties</li></ul><p><strong>追加</strong>:</p><p>バージョン3.0で追加。</p></details><details class="details custom-block"><summary><code>glfwSetMonitorUserPointer()</code></summary><p>この関数は、指定されたモニタのユーザ定義ポインタを設定する。 現在の値は、モニターが切断されるまで保持される。 初期値はNULL。</p><p>この関数は、切断中のモニターであっても、モニター・コールバックから呼び出すことができる。</p><div class="language-c vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">void</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> glfwSetMonitorUserPointer</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(GLFWmonitor </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">*</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;"> monitor</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">void</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> *</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;"> pointer</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span></code></pre></div><p><strong>引数</strong>:</p><ul><li><code>[in] monitor</code>: ポインタを設定するモニター。</li><li><code>[in] pointer</code>: 新しい値。</li></ul><p><strong>エラー</strong>:</p><p>考えられるエラーはGLFW_NOT_INITIALIZED。</p><p><strong>スレッドセーフ</strong>:</p><p>この関数はどのスレッドからでも呼び出すことができる。アクセスは同期化されない。</p><p><strong>参照</strong>:</p><ul><li>User pointer</li><li>glfwGetMonitorUserPointer</li></ul><p><strong>追加</strong>:</p><p>バージョン3.3で追加。</p></details><details class="details custom-block"><summary><code>glfwGetMonitorUserPointer()</code></summary><p>この関数は、指定されたモニターのユーザー定義ポインターの現在値を返す。初期値は NULL です。</p><p>この関数は、切断中のモニタに対しても、モニタコールバックから呼び出すことができます。</p><div class="language-c vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">void</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> *</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> glfwGetMonitorUserPointer</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(GLFWmonitor </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">*</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;"> monitor</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span></code></pre></div><p><strong>引数</strong>:</p><ul><li><code>[in] monitor</code>: ポインタを返すモニター。</li></ul><p><strong>エラー</strong>:</p><p>考えられるエラーはGLFW_NOT_INITIALIZED。</p><p><strong>スレッドセーフ</strong>:</p><p>この関数はどのスレッドからでも呼び出すことができる。アクセスは同期化されない。</p><p><strong>参照</strong>:</p><ul><li>User pointer</li><li>glfwSetMonitorUserPointer</li></ul><p><strong>追加</strong>:</p><p>バージョン3.3で追加。</p></details><details class="details custom-block"><summary><code>glfwSetMonitorCallback()</code></summary><p>この関数は、モニター設定コールバックを設定するか、または現在設定されているコールバックを削除します。この関数は、モニターがシステムに接続されたとき、またはシステムから切断されたときに呼び出されます。</p><div class="language-c vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">GLFWmonitorfun </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">glfwSetMonitorCallback</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(GLFWmonitorfun </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">callback</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span></code></pre></div><p><strong>引数</strong>:</p><ul><li><code>[in] callback</code>: 新しいコールバック、または現在設定されているコールバックを削除する場合は NULL。</li></ul><p><strong>戻り値</strong>:</p><p>コールバックが設定されていないか、ライブラリが初期化されていない場合はNULL。</p><p><strong>コールバックのシグネチャ</strong>:</p><div class="language-c vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">void</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> function_name</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(GLFWmonitor</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">*</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;"> monitor</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">int</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;"> event</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span></code></pre></div><p>コールバック・パラメータの詳細については、関数ポインタ型を参照のこと。</p><p><strong>エラー</strong>:</p><p>考えられるエラーはGLFW_NOT_INITIALIZED。</p><p><strong>スレッドセーフ</strong>:</p><p>この関数はメインスレッドからのみ呼び出されなければならない。</p><p><strong>参照</strong>:</p><ul><li>Monitor configuration changes</li></ul><p><strong>追加</strong>:</p><p>バージョン3.0で追加。</p></details><details class="details custom-block"><summary><code>glfwGetVideoModes()</code></summary><p>この関数は、指定されたモニタがサポートするすべてのビデオモードの配列を返す。返される配列は昇順でソートされ、最初に色ビット深度（すべてのチャンネル深度の合計）、次に解像度領域（幅と高さの積）、次に解像度幅、最後にリフレッシュレートが指定される。</p><div class="language-c vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> GLFWvidmode </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">*</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> glfwGetVideoModes</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(GLFWmonitor </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">*</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;"> monitor</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">int</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> *</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;"> count</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span></code></pre></div><p><strong>引数</strong>:</p><ul><li><code>[in] monitor</code>: 問い合わせるモニター。</li><li><code>[out] count</code>: ビデオモードの数を返す配列のどこに格納するか。エラーが発生した場合は 0 が格納される。</li></ul><p><strong>戻り値</strong>:</p><p>ビデオモードの配列。エラーが発生した場合は NULL。</p><p><strong>エラー</strong>:</p><p>起こりうるエラーはGLFW_NOT_INITIALIZEDとGLFW_PLATFORM_ERRORである。</p><p><strong>ポインタの寿命</strong>:</p><p>返された配列はGLFWによって割り当てられ、解放される。自分で解放してはならない。指定されたモニターが切断されるか、そのモニターに対してこの関数が再度呼び出されるか、ライブラリーが終了するまで有効です。</p><p><strong>スレッドセーフ</strong>:</p><p>この関数はメインスレッドからのみ呼び出されなければならない。</p><p><strong>参照</strong>:</p><ul><li>Video modes</li><li>glfwGetVideoMode</li></ul><p><strong>追加</strong>:</p><p>バージョン1.0で追加。GLFW 3: 特定のモニターのモードの配列を返すように変更。</p></details><details class="details custom-block"><summary><code>glfwGetVideoMode()</code></summary><p>This function returns the current video mode of the specified monitor. If you have created a full screen window for that monitor, the return value will depend on whether that window is iconified.</p><div class="language-c vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> GLFWvidmode </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">*</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> glfwGetVideoMode</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(GLFWmonitor </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">*</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;"> monitor</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span></code></pre></div><p><strong>引数</strong>:</p><ul><li><code>[in] monitor</code>: 問い合わせるモニター。</li></ul><p><strong>戻り値</strong>:</p><p>モニターの現在のモード、またはエラーが発生した場合はNULL。</p><p><strong>エラー</strong>:</p><p>起こりうるエラーはGLFW_NOT_INITIALIZEDとGLFW_PLATFORM_ERRORである。</p><p><strong>ポインタの寿命</strong>:</p><p>返された配列はGLFWによって割り当てられ、解放される。自分で解放してはならない．指定されたモニターが切断されるか、ライブラリが終了するまで有効です。</p><p><strong>スレッドセーフ</strong>:</p><p>この関数はメインスレッドからのみ呼び出されなければならない。</p><p><strong>参照</strong>:</p><ul><li>Video modes</li><li>glfwGetVideoModes</li></ul><p><strong>追加</strong>:</p><p>バージョン 3.0 で追加されました。glfwGetDesktopMode を置き換える。</p></details><details class="details custom-block"><summary><code>glfwSetGamma()</code></summary><p>この関数は、指定された指数から適切な大きさのガンマ・ランプを生成し、それを使って glfwSetGammaRamp を呼び出します。この値はゼロより大きい有限の数でなければならない。</p><p>ソフトウェアで制御されるガンマランプは、ハードウェアのガンマ補正に加えて適用されます。つまり、完全に直線的なランプ、つまりガンマ1.0を設定すると、デフォルトの（通常はsRGBに近い）動作になります。</p><p>OpenGLまたはOpenGL ESでのガンマ補正レンダリングについては、GLFW_SRGB_CAPABLEヒントを参照してください。</p><div class="language-c vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">void</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> glfwSetGamma</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(GLFWmonitor </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">*</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;"> monitor</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">float</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;"> gamma</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span></code></pre></div><p><strong>引数</strong>:</p><ul><li><code>[in] monitor</code>: ガンマランプを設定するモニター。</li><li><code>[in] gamma</code>: 希望する指数。</li></ul><p><strong>エラー</strong>:</p><p>起こりうるエラーはGLFW_NOT_INITIALIZED、GLFW_INVALID_VALUE、GLFW_PLATFORM_ERRORである。</p><p><strong>備考</strong>:</p><p>Wayland: ガンマ処理は特権プロトコルであるため、この関数は決して実装されず、GLFW_PLATFORM_ERRORを返す。</p><p><strong>スレッドセーフ</strong>:</p><p>この関数はメインスレッドからのみ呼び出されなければならない。</p><p><strong>参照</strong>:</p><ul><li>Gamma ramp</li></ul><p><strong>追加</strong>:</p><p>バージョン3.0で追加。</p></details><details class="details custom-block"><summary><code>glfwGetGammaRamp()</code></summary><p>この関数は、指定されたモニターの現在のガンマランプを返します。</p><div class="language-c vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> GLFWgammaramp </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">*</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> glfwGetGammaRamp</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(GLFWmonitor </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">*</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;"> monitor</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span></code></pre></div><p><strong>引数</strong>:</p><ul><li><code>[in] monitor</code>: 問い合わせるモニター。</li></ul><p><strong>戻り値</strong>:</p><p>現在のガンマランプ、またはエラーが発生した場合は NULL。</p><p><strong>エラー</strong>:</p><p>起こりうるエラーはGLFW_NOT_INITIALIZEDとGLFW_PLATFORM_ERRORである。</p><p><strong>備考</strong>:</p><p>Wayland: ガンマ処理は特権プロトコルであるため、この関数は決して実装されず、NULLを返しながらGLFW_PLATFORM_ERRORを発する。</p><p><strong>ポインタの寿命</strong>:</p><p>返された構造体とその配列はGLFWによって割り当てられ、解放される。自分で解放してはならない．それらは、指定されたモニターが切断されるか、そのモニターに対してこの関数が再び呼ばれるか、ライブラリーが終了するまで有効です。</p><p><strong>スレッドセーフ</strong>:</p><p>この関数はメインスレッドからのみ呼び出されなければならない。</p><p><strong>参照</strong>:</p><ul><li>Gamma ramp</li></ul><p><strong>追加</strong>:</p><p>バージョン3.0で追加。</p></details><details class="details custom-block"><summary><code>glfwSetGammaRamp()</code></summary><p>この関数は、指定されたモニターの現在のガンマランプを設定します。そのモニタのオリジナルのガンマランプは、この関数が最初に呼ばれたときにGLFWによって保存され、glfwTerminateによって復元されます。</p><p>ソフトウェアで制御されるガンマランプは、ハードウェアのガンマ補正に加えて適用されます。つまり、完全に直線的なランプ、つまりガンマ1.0を設定すると、デフォルトの（通常はsRGBに近い）動作になります。</p><p>OpenGLまたはOpenGL ESでのガンマ補正レンダリングについては、GLFW_SRGB_CAPABLEヒントを参照してください。</p><div class="language-c vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">void</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> glfwSetGammaRamp</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(GLFWmonitor </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">*</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;"> monitor</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> GLFWgammaramp </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">*</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;"> ramp</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span></code></pre></div><p><strong>引数</strong>:</p><ul><li><code>[in] monitor</code>: ガンマランプを設定するモニター。</li><li><code>[in] ramp</code>: 使用するガンマランプ。</li></ul><p><strong>エラー</strong>:</p><p>起こりうるエラーはGLFW_NOT_INITIALIZEDとGLFW_PLATFORM_ERRORである。</p><p><strong>備考</strong>:</p><p>指定されたガンマ・ランプのサイズは、そのモニターの現在のランプのサイズと一致しなければならない。</p><ul><li>Windows: ガンマランプのサイズは256でなければならない。</li><li>Wayland: ガンマ処理は特権プロトコルであるため、この関数は決して実装されず、GLFW_PLATFORM_ERRORを返す。</li></ul><p><strong>ポインタの寿命</strong>:</p><p>指定されたガンマランプは、この関数が戻る前にコピーされる。</p><p><strong>スレッドセーフ</strong>:</p><p>この関数はメインスレッドからのみ呼び出されなければならない。</p><p><strong>参照</strong>:</p><ul><li>Gamma ramp</li></ul><p><strong>追加</strong>:</p><p>バージョン3.0で追加。</p></details>',26),l=[n];function e(o,h,r,d,k,g){return t(),i("div",null,l)}const m=s(p,[["render",e]]);export{E as __pageData,m as default};

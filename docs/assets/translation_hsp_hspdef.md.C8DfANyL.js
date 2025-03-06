import{_ as o,c as e,o as n,a3 as t}from"./chunks/framework.DflgEAq4.js";const c=JSON.parse('{"title":"標準マクロ","description":"","frontmatter":{},"headers":[],"relativePath":"translation/hsp/hspdef.md","filePath":"translation/hsp/hspdef.md","lastUpdated":null}'),r={name:"translation/hsp/hspdef.md"},p=t(`<h1 id="標準マクロ" tabindex="-1">標準マクロ <a class="header-anchor" href="#標準マクロ" aria-label="Permalink to &quot;標準マクロ&quot;">​</a></h1><p><strong>対応</strong>:</p><ul><li>Win</li><li>Mac</li><li>Cli</li></ul><h2 id="gmode_sub" tabindex="-1">gmode_sub <a class="header-anchor" href="#gmode_sub" aria-label="Permalink to &quot;gmode_sub {#gmode_sub}&quot;">​</a></h2><p>色減算合成コピーモード</p><p><strong>説明</strong>:</p><p>gmodeの第1引数に指定することで、画面コピーモードを色減算合成コピーモードに設定できます。</p><p><strong>例</strong>:</p><pre><code>screen 1 : picload dir_exe + &quot;/sample/demo/logop.bmp&quot;
img_width = ginfo_winx
img_height = ginfo_winy
gsel 0
color       : boxf img_width / 5, 0, img_width  * 2 / 5, ginfo_winy
color 255   : boxf img_width * 2 / 5, 0, img_width * 3 / 5, ginfo_winy
color ,255  : boxf img_width * 3 / 5, 0, img_width * 4 / 5, ginfo_winy
color ,,255 : boxf img_width * 4 / 5, 0, img_width, ginfo_winy
gmode gmode_sub, img_width, img_height, 256
gcopy 1, 0, 0
stop
</code></pre><p><strong>参照</strong>:</p><p>gmode gmode_rgb0 gmode_mem gmode_alpha gmode_add gmode_gdi gmode_rgb0alpha gmode_pixela</p><h2 id="gmode_add" tabindex="-1">gmode_add <a class="header-anchor" href="#gmode_add" aria-label="Permalink to &quot;gmode_add {#gmode_add}&quot;">​</a></h2><p>色加算合成コピーモード</p><p><strong>説明</strong>:</p><p>gmodeの第1引数に指定することで、画面コピーモードを色加算合成コピーモードに設定できます。</p><p><strong>例</strong>:</p><pre><code>screen 1 : picload dir_exe + &quot;/sample/demo/logop.bmp&quot;
img_width = ginfo_winx
img_height = ginfo_winy
gsel 0
color       : boxf img_width / 5, 0, img_width  * 2 / 5, ginfo_winy
color 255   : boxf img_width * 2 / 5, 0, img_width * 3 / 5, ginfo_winy
color ,255  : boxf img_width * 3 / 5, 0, img_width * 4 / 5, ginfo_winy
color ,,255 : boxf img_width * 4 / 5, 0, img_width, ginfo_winy
gmode gmode_add, img_width, img_height, 256
gcopy 1, 0, 0
stop
</code></pre><p><strong>参照</strong>:</p><p>gmode gmode_rgb0 gmode_mem gmode_alpha gmode_sub gmode_gdi gmode_rgb0alpha gmode_pixela</p><h2 id="gmode_gdi" tabindex="-1">gmode_gdi <a class="header-anchor" href="#gmode_gdi" aria-label="Permalink to &quot;gmode_gdi {#gmode_gdi}&quot;">​</a></h2><p>通常のコピーモード</p><p><strong>説明</strong>:</p><p>gmodeの第1引数に指定することで、画面コピーモードを通常のコピーモードに設定できます。 省略しても同じ結果が得られますので、省略しても構いません。</p><p><strong>例</strong>:</p><pre><code>buffer 1 : picload dir_exe + &quot;/sample/demo/logop.bmp&quot;
img_width = ginfo_winx
img_height = ginfo_winy
gsel 0
gmode gmode_gdi
gcopy 1, 0, 0, img_width, img_height
stop
</code></pre><p><strong>参照</strong>:</p><p>gmode gmode_rgb0 gmode_mem gmode_alpha gmode_add gmode_sub gmode_rgb0alpha gmode_pixela</p><h2 id="gmode_rgb0" tabindex="-1">gmode_rgb0 <a class="header-anchor" href="#gmode_rgb0" aria-label="Permalink to &quot;gmode_rgb0 {#gmode_rgb0}&quot;">​</a></h2><p>透明色付きコピーモード</p><p><strong>説明</strong>:</p><p>gmodeの第1引数に指定することで、画面コピーモードを透明色付きコピーモードに設定できます。</p><p><strong>例</strong>:</p><pre><code>screen 1 : picload dir_exe + &quot;/sample/demo/logop.bmp&quot;
img_width = ginfo_winx
img_height = ginfo_winy
gsel 0
gmode gmode_rgb0, img_width, img_height
gcopy 1, 0, 0
stop
</code></pre><p><strong>参照</strong>:</p><p>gmode gmode_sub gmode_mem gmode_alpha gmode_add gmode_gdi gmode_rgb0alpha gmode_pixela</p><h2 id="gmode_mem" tabindex="-1">gmode_mem <a class="header-anchor" href="#gmode_mem" aria-label="Permalink to &quot;gmode_mem {#gmode_mem}&quot;">​</a></h2><p>メモリ間コピーモード</p><p><strong>説明</strong>:</p><p>gmodeの第1引数に指定することで、画面コピーモードをメモリ間コピーモードに設定できます。</p><p><strong>例</strong>:</p><pre><code>screen 1 : picload dir_exe + &quot;/sample/demo/logop.bmp&quot;
img_width = ginfo_winx
img_height = ginfo_winy
gsel 0
gmode gmode_mem, img_width, img_height
gcopy 1, 0, 0
stop
</code></pre><p><strong>参照</strong>:</p><p>gmode gmode_rgb0 gmode_sub gmode_alpha gmode_add gmode_gdi gmode_rgb0alpha gmode_pixela</p><h2 id="gmode_alpha" tabindex="-1">gmode_alpha <a class="header-anchor" href="#gmode_alpha" aria-label="Permalink to &quot;gmode_alpha {#gmode_alpha}&quot;">​</a></h2><p>半透明合成コピーモード</p><p><strong>説明</strong>:</p><p>gmodeの第1引数に指定することで、画面コピーモードを半透明合成コピーモードに設定できます。</p><p><strong>例</strong>:</p><pre><code>screen 1 : picload dir_exe + &quot;/sample/demo/logop.bmp&quot;
img_width = ginfo_winx
img_height = ginfo_winy
gsel 0
color       : boxf img_width / 5, 0, img_width  * 2 / 5, ginfo_winy
color 255   : boxf img_width * 2 / 5, 0, img_width * 3 / 5, ginfo_winy
color ,255  : boxf img_width * 3 / 5, 0, img_width * 4 / 5, ginfo_winy
color ,,255 : boxf img_width * 4 / 5, 0, img_width, ginfo_winy
gmode gmode_alpha, img_width, img_height, 128
gcopy 1, 0, 0
stop
</code></pre><p><strong>参照</strong>:</p><p>gmode gmode_rgb0 gmode_mem gmode_sub gmode_add gmode_gdi gmode_rgb0alpha gmode_pixela</p><h2 id="gmode_rgb0alpha" tabindex="-1">gmode_rgb0alpha <a class="header-anchor" href="#gmode_rgb0alpha" aria-label="Permalink to &quot;gmode_rgb0alpha {#gmode_rgb0alpha}&quot;">​</a></h2><p>透明色付き半透明合成コピーモード</p><p><strong>説明</strong>:</p><p>gmodeの第1引数に指定することで、画面コピーモードを透明色付き半透明合成コピーモードに設定できます。</p><p><strong>例</strong>:</p><pre><code>screen 1 : picload dir_exe + &quot;/sample/demo/logop.bmp&quot;
img_width = ginfo_winx
img_height = ginfo_winy
gsel 0
color   0,   0,   0 : boxf img_width / 5, 0, img_width  * 2 / 5, ginfo_winy
color 255,   0,   0 : boxf img_width * 2 / 5, 0, img_width * 3 / 5, ginfo_winy
color   0, 255,   0 : boxf img_width * 3 / 5, 0, img_width * 4 / 5, ginfo_winy
color   0,   0, 255 : boxf img_width * 4 / 5, 0, img_width, ginfo_winy
gmode gmode_rgb0alpha, img_width, img_height, 128
color 0, 0, 0
gcopy 1, 0, 0
stop
</code></pre><p><strong>参照</strong>:</p><p>gmode gmode_rgb0 gmode_mem gmode_alpha gmode_add gmode_gdi gmode_sub gmode_pixela</p><h2 id="gmode_pixela" tabindex="-1">gmode_pixela <a class="header-anchor" href="#gmode_pixela" aria-label="Permalink to &quot;gmode_pixela {#gmode_pixela}&quot;">​</a></h2><p>ピクセルアルファブレンドコピーモード</p><p><strong>説明</strong>:</p><p>gmodeの第1引数に指定することで、画面コピーモードをピクセルアルファブレンドコピーモードに設定できます。</p><p><strong>例</strong>:</p><pre><code>screen 1 : picload dir_exe + &quot;/sample/demo/logop.bmp&quot;
img_width = ginfo_winx
img_height = ginfo_winy
screen 1, img_width * 2, img_height : picload dir_exe + &quot;/sample/demo/logop.bmp&quot;, 1
repeat img_width
	hsvcolor cnt * 192 / ( img_width  ), 255, 255
	line img_width + cnt, img_height, img_width + cnt, 0
loop
gsel 0
gmode gmode_pixela, img_width, img_height, 128
gcopy 1, 0, 0
stop
</code></pre><p><strong>参照</strong>:</p><p>gmode gmode_rgb0 gmode_mem gmode_alpha gmode_add gmode_gdi gmode_rgb0alpha gmode_sub</p><h2 id="objinfo_mode" tabindex="-1">objinfo_mode <a class="header-anchor" href="#objinfo_mode" aria-label="Permalink to &quot;objinfo_mode {#objinfo_mode}&quot;">​</a></h2><p>モードおよびオプションデータを取得</p><p><strong>パラメーター</strong>:</p><p>(p1) p1=0〜 : ウィンドウオブジェクトID</p><p><strong>説明</strong>:</p><p>指定したウィンドウオブジェクトのモードおよびオプションデータを返します。</p><p><strong>例</strong>:</p><pre><code>button goto &quot;sample&quot;, *dummy
info = objinfo_mode( stat )
mes &quot;mode : &quot; + ( info &amp; 0xffff )
mes &quot;option : &quot; + ( info &gt;&gt; 16 &amp; 0xffff )
</code></pre><p>*dummy stop</p><p><strong>参照</strong>:</p><p>objinfo objinfo_hwnd objinfo_bmscr</p><h2 id="objinfo_bmscr" tabindex="-1">objinfo_bmscr <a class="header-anchor" href="#objinfo_bmscr" aria-label="Permalink to &quot;objinfo_bmscr {#objinfo_bmscr}&quot;">​</a></h2><p>オブジェクトが配置されているBMSCR構造体のポインタを取得</p><p><strong>パラメーター</strong>:</p><p>(p1) p1=0〜 : ウィンドウオブジェクトID</p><p><strong>説明</strong>:</p><p>指定したウィンドウオブジェクトが配置されているBMSCR構造体のポインタを返します。</p><p><strong>例</strong>:</p><pre><code>button goto &quot;sample&quot;, *dummy
p_bmscr = objinfo_bmscr( stat )
mes &quot;objectが配置されているBMSCR構造体のポインタ : &quot; + p_bmscr
mref bmscr, 67
mes &quot;mrefで得られる値（&quot; + varptr( bmscr ) + &quot;）と同等&quot;
</code></pre><p>*dummy stop</p><p><strong>参照</strong>:</p><p>objinfo objinfo_mode objinfo_hwnd</p><h2 id="objinfo_hwnd" tabindex="-1">objinfo_hwnd <a class="header-anchor" href="#objinfo_hwnd" aria-label="Permalink to &quot;objinfo_hwnd {#objinfo_hwnd}&quot;">​</a></h2><p>ウィンドウオブジェクトのハンドルを取得</p><p><strong>パラメーター</strong>:</p><p>(p1) p1=0〜 : ウィンドウオブジェクトID</p><p><strong>説明</strong>:</p><p>指定したウィンドウオブジェクトのハンドルを返します。</p><p><strong>例</strong>:</p><pre><code>button goto &quot;sample&quot;, *dummy
obj_hwnd = objinfo_hwnd( stat )
mes &quot;ウィンドウオブジェクトのハンドル : &quot; + obj_hwnd
</code></pre><p>*dummy stop</p><p><strong>参照</strong>:</p><p>objinfo objinfo_mode objinfo_bmscr</p><h2 id="screen_normal" tabindex="-1">screen_normal <a class="header-anchor" href="#screen_normal" aria-label="Permalink to &quot;screen_normal {#screen_normal}&quot;">​</a></h2><p>通常のウィンドウを作成</p><p><strong>説明</strong>:</p><p>screen命令の第4引数に指定することで、通常のウィンドウを作成できます。 省略しても同じ結果が得られますので、省略しても構いません。</p><p><strong>例</strong>:</p><p>// ウィンドウID0の通常のウィンドウを作成 screen 0, 640, 480, screen_normal</p><p>// 省略しても同じ結果が得られる screen 1, 320, 240 stop</p><p><strong>参照</strong>:</p><p>screen screen_palette screen_hide screen_fixedsize screen_tool screen_frame</p><h2 id="screen_palette" tabindex="-1">screen_palette <a class="header-anchor" href="#screen_palette" aria-label="Permalink to &quot;screen_palette {#screen_palette}&quot;">​</a></h2><p>パレットモードのウィンドウを作成</p><p><strong>説明</strong>:</p><p>screen命令の第4引数に指定することで、パレットモードのウィンドウを作成できます。 他のマクロと組み合わせて指定する場合は、その和または論理和を指定してください。</p><p><strong>例</strong>:</p><p>// ウィンドウID0のウィンドウをパレットモードで作成 screen 0, 640, 480, screen_palette stop</p><p><strong>参照</strong>:</p><p>screen screen_normal screen_hide screen_fixedsize screen_tool screen_frame</p><h2 id="screen_hide" tabindex="-1">screen_hide <a class="header-anchor" href="#screen_hide" aria-label="Permalink to &quot;screen_hide {#screen_hide}&quot;">​</a></h2><p>非表示のウィンドウを作成</p><p><strong>説明</strong>:</p><p>screen命令の第4引数に指定することで、非表示のウィンドウを作成できます。 他のマクロと組み合わせて指定する場合は、その和または論理和を指定してください。</p><p><strong>例</strong>:</p><p>// ウィンドウID0のウィンドウを非表示で作成 screen 0, 640, 480, screen_hide stop</p><p><strong>参照</strong>:</p><p>screen screen_normal screen_palette screen_fixedsize screen_tool screen_frame</p><h2 id="screen_fixedsize" tabindex="-1">screen_fixedsize <a class="header-anchor" href="#screen_fixedsize" aria-label="Permalink to &quot;screen_fixedsize {#screen_fixedsize}&quot;">​</a></h2><p>サイズ固定ウィンドウを作成</p><p><strong>説明</strong>:</p><p>screen命令の第4引数に指定することで、サイズ固定のウィンドウを作成できます。 他のマクロと組み合わせて指定する場合は、その和または論理和を指定してください。</p><p><strong>例</strong>:</p><p>// ウィンドウID0のウィンドウをサイズ固定で作成 screen 0, 640, 480, screen_fixedsize stop</p><p><strong>参照</strong>:</p><p>screen screen_normal screen_palette screen_hide screen_tool screen_frame</p><h2 id="screen_tool" tabindex="-1">screen_tool <a class="header-anchor" href="#screen_tool" aria-label="Permalink to &quot;screen_tool {#screen_tool}&quot;">​</a></h2><p>ツールウィンドウを作成</p><p><strong>説明</strong>:</p><p>screen命令の第4引数に指定することで、ツールウィンドウを作成できます。 他のマクロと組み合わせて指定する場合は、その和または論理和を指定してください。</p><p><strong>例</strong>:</p><p>// ウィンドウID0のツールウィンドウを作成 screen 0, 640, 480, screen_tool stop</p><p><strong>参照</strong>:</p><p>screen screen_normal screen_palette screen_hide screen_fixedsize screen_frame</p><h2 id="screen_frame" tabindex="-1">screen_frame <a class="header-anchor" href="#screen_frame" aria-label="Permalink to &quot;screen_frame {#screen_frame}&quot;">​</a></h2><p>深い縁のあるウィンドウを作成</p><p><strong>説明</strong>:</p><p>screen命令の第4引数に指定することで、深い縁のあるウィンドウを作成できます。 他のマクロと組み合わせて指定する場合は、その和または論理和を指定してください。</p><p><strong>例</strong>:</p><p>// ウィンドウIDの深い縁のあるウィンドウを作成 screen 0, 640, 480, screen_frame stop</p><p><strong>参照</strong>:</p><p>screen screen_normal screen_palette screen_hide screen_fixedsize screen_tool</p><h2 id="font_normal" tabindex="-1">font_normal <a class="header-anchor" href="#font_normal" aria-label="Permalink to &quot;font_normal {#font_normal}&quot;">​</a></h2><p>通常のスタイルでフォント設定</p><p><strong>説明</strong>:</p><p>font命令の第3引数に指定することで、通常のスタイルでフォントを設定することができます。 省略しても同じ結果が得られますので、省略しても構いません。</p><p><strong>例</strong>:</p><p>// サイズ12のMSゴシックを設定 font msgothic, 24, font_normal mes &quot;サイズ24のMSゴシック（通常のスタイル）&quot;</p><p>// 省略しても同じ結果が得られる font msgothic, 24 mes &quot;サイズ24のMSゴシック（通常のスタイル）&quot; stop</p><p><strong>参照</strong>:</p><p>font font_bold font_italic font_underline font_strikeout font_antialias</p><h2 id="font_bold" tabindex="-1">font_bold <a class="header-anchor" href="#font_bold" aria-label="Permalink to &quot;font_bold {#font_bold}&quot;">​</a></h2><p>太文字でフォント設定</p><p><strong>説明</strong>:</p><p>font命令の第3引数に指定することで、太文字のフォントを設定することができます。 他のマクロと組み合わせて指定する場合は、その和または論理和を指定してください。</p><p><strong>例</strong>:</p><p>// サイズ24のMSゴシックを設定 font msgothic, 24, font_normal mes &quot;サイズ24のMSゴシック（通常のスタイル）&quot;</p><p>// サイズ24で太文字のMSゴシックを設定 font msgothic, 24, font_bold mes &quot;サイズ24のMSゴシック（太文字）&quot; stop</p><p><strong>参照</strong>:</p><p>font font_normal font_italic font_underline font_strikeout font_antialias</p><h2 id="font_italic" tabindex="-1">font_italic <a class="header-anchor" href="#font_italic" aria-label="Permalink to &quot;font_italic {#font_italic}&quot;">​</a></h2><p>イタリック体でフォント設定</p><p><strong>説明</strong>:</p><p>font命令の第3引数に指定することで、イタリック体のフォントを設定することができます。 他のマクロと組み合わせて指定する場合は、その和または論理和を指定してください。</p><p><strong>例</strong>:</p><p>// サイズ24のMSゴシックを設定 font msgothic, 24, font_normal mes &quot;サイズ24のMSゴシック（通常のスタイル）&quot;</p><p>// サイズ24でイタリック体MSmsゴシックを設定 font msgothic, 24, font_italic mes &quot;サイズ24のMSゴシック（イタリック体）&quot; stop</p><p><strong>参照</strong>:</p><p>font font_normal font_bold font_underline font_strikeout font_antialias</p><h2 id="font_underline" tabindex="-1">font_underline <a class="header-anchor" href="#font_underline" aria-label="Permalink to &quot;font_underline {#font_underline}&quot;">​</a></h2><p>下線付きでフォント設定</p><p><strong>説明</strong>:</p><p>font命令の第3引数に指定することで、下線付きのフォントを設定することができます。 他のマクロと組み合わせて指定する場合は、その和または論理和を指定してください。</p><p><strong>例</strong>:</p><p>// サイズ24のMSゴシックを設定 font msgothic, 24, font_normal mes &quot;サイズ24のMSゴシック（通常のスタイル）&quot;</p><p>// サイズ24で下線付きのMSゴシックを設定 font msgothic, 24, font_underline mes &quot;サイズ24のMSゴシック（下線付き）&quot; stop</p><p><strong>参照</strong>:</p><p>font font_normal font_bold font_italic font_strikeout font_antialias</p><h2 id="font_strikeout" tabindex="-1">font_strikeout <a class="header-anchor" href="#font_strikeout" aria-label="Permalink to &quot;font_strikeout {#font_strikeout}&quot;">​</a></h2><p>打ち消し線付きでフォント設定</p><p><strong>説明</strong>:</p><p>font命令の第3引数に指定することで、打ち消し線付きのフォントを設定することができます。 他のマクロと組み合わせて指定する場合は、その和または論理和を指定してください。</p><p><strong>例</strong>:</p><p>// サイズ24のMSゴシックを設定 font msgothic, 24, font_normal mes &quot;サイズ24のMSゴシック（通常のスタイル）&quot;</p><p>// サイズ24で打ち消し線付きのMSゴシックを設定 font msgothic, 24, font_strikeout mes &quot;サイズ24のMSゴシック（打ち消し線付き）&quot; stop</p><p><strong>参照</strong>:</p><p>font font_normal font_bold font_italic font_underline font_antialias</p><h2 id="font_antialias" tabindex="-1">font_antialias <a class="header-anchor" href="#font_antialias" aria-label="Permalink to &quot;font_antialias {#font_antialias}&quot;">​</a></h2><p>アンチエイリアスでフォント設定</p><p><strong>説明</strong>:</p><p>font命令の第3引数に指定することで、アンチエイリアスのフォントを設定することができます。 他のマクロと組み合わせて指定する場合は、その和または論理和を指定してください。</p><p><strong>例</strong>:</p><p>// サイズ24のMSゴシックを設定 font msgothic, 24, font_normal mes &quot;サイズ24のMSゴシック（通常のスタイル）&quot;</p><p>// サイズ24でアンチエイリアスのMSゴシックを設定 font msgothic, 24, font_antialias mes &quot;サイズ24のMSゴシック（アンチエイリアス）&quot; stop</p><p><strong>参照</strong>:</p><p>font font_normal font_bold font_italic font_underline font_strikeout</p><h2 id="objmode_normal" tabindex="-1">objmode_normal <a class="header-anchor" href="#objmode_normal" aria-label="Permalink to &quot;objmode_normal {#objmode_normal}&quot;">​</a></h2><p>HSP標準フォントを設定</p><p><strong>説明</strong>:</p><p>objmode命令の第1引数に指定することで、オブジェクト制御命令で使用されるフォントをHSP標準フォントに設定することができます。 省略しても同じ結果が得られますので、省略しても構いません。</p><p><strong>例</strong>:</p><pre><code>s = &quot;オブジェクト制御命令で使用されるフォントのサンプル&quot;
</code></pre><p>// オブジェクト制御命令で使用されるフォントをHSP標準フォントに設定 objmode objmode_normal mesbox s, ginfo_winx, ginfo_winy / 2</p><p>// 省略しても同じ結果が得られる objmode objmode_normal mesbox s, ginfo_winx, ginfo_winy / 2</p><pre><code>stop
</code></pre><p><strong>参照</strong>:</p><p>objmode objmode_guifont objmode_usefont objmode_usecolor</p><h2 id="objmode_guifont" tabindex="-1">objmode_guifont <a class="header-anchor" href="#objmode_guifont" aria-label="Permalink to &quot;objmode_guifont {#objmode_guifont}&quot;">​</a></h2><p>デフォルトGUIフォントを設定</p><p><strong>説明</strong>:</p><p>objmode命令の第1引数に指定することで、オブジェクト制御命令で使用されるフォントをデフォルトGUIフォントに設定することができます。</p><p><strong>例</strong>:</p><pre><code>s = &quot;オブジェクト制御命令で使用されるフォントのサンプル&quot;
</code></pre><p>// オブジェクト制御命令で使用されるフォントをデフォルトGUIフォントに設定 objmode objmode_guifont mesbox s, ginfo_winx, ginfo_winy</p><pre><code>stop
</code></pre><p><strong>参照</strong>:</p><p>objmode objmode_normal objmode_usefont objmode_usecolor</p><h2 id="objmode_usefont" tabindex="-1">objmode_usefont <a class="header-anchor" href="#objmode_usefont" aria-label="Permalink to &quot;objmode_usefont {#objmode_usefont}&quot;">​</a></h2><p>font命令で選択されているフォントを設定</p><p><strong>説明</strong>:</p><p>objmode命令の第1引数に指定することで、オブジェクト制御命令で使用されるフォントをfont命令で選択されているフォントに設定することができます。</p><p><strong>例</strong>:</p><pre><code>s = &quot;オブジェクト制御命令で使用されるフォントのサンプル&quot;
</code></pre><p>// オブジェクト制御命令で使用されるフォントをfont命令で選択されているフォントに設定 objmode objmode_usefont</p><pre><code>font msmincho, 24
mesbox s, ginfo_winx, ginfo_winy / 2

font msgothic, 18, font_italic
mesbox s, ginfo_winx, ginfo_winy / 2

stop
</code></pre><p><strong>参照</strong>:</p><p>objmode objmode_normal objmode_guifont objmode_usecolor</p><h2 id="objmode_usecolor" tabindex="-1">objmode_usecolor <a class="header-anchor" href="#objmode_usecolor" aria-label="Permalink to &quot;objmode_usecolor {#objmode_usecolor}&quot;">​</a></h2><p>objcolor命令で選択されている色を設定</p><p><strong>説明</strong>:</p><p>objmode命令の第1引数に指定することで、オブジェクト制御命令で使用される色をcolor命令、objcolor命令で指定されている色に設定することができます。</p><p><strong>参照</strong>:</p><p>objmode objmode_normal objmode_guifont objmode_usefont</p><h2 id="msgothic" tabindex="-1">msgothic <a class="header-anchor" href="#msgothic" aria-label="Permalink to &quot;msgothic {#msgothic}&quot;">​</a></h2><p>MSゴシックフォント</p><p><strong>グループ</strong>:</p><p>システム変数</p><p><strong>説明</strong>:</p><p>MSゴシックを示すフォントを示すキーワードです。 font命令で指定するフォント名として使用することができます。</p><p><strong>参照</strong>:</p><p>msmincho</p><h2 id="msmincho" tabindex="-1">msmincho <a class="header-anchor" href="#msmincho" aria-label="Permalink to &quot;msmincho {#msmincho}&quot;">​</a></h2><p>MS明朝フォント</p><p><strong>グループ</strong>:</p><p>システム変数</p><p><strong>説明</strong>:</p><p>MS明朝を示すフォントを示すキーワードです。 font命令で指定するフォント名として使用することができます。</p><p><strong>参照</strong>:</p><p>msgothic</p><h2 id="and" tabindex="-1">and <a class="header-anchor" href="#and" aria-label="Permalink to &quot;and {#and}&quot;">​</a></h2><p>論理積(演算子)</p><p><strong>グループ</strong>:</p><p>標準定義マクロ</p><p><strong>説明</strong>:</p><p>論理積を示す演算子「&amp;」と同様に使用することができるマクロです。</p><p><strong>参照</strong>:</p><p>or xor not</p><h2 id="or" tabindex="-1">or <a class="header-anchor" href="#or" aria-label="Permalink to &quot;or {#or}&quot;">​</a></h2><p>論理和(演算子)</p><p><strong>グループ</strong>:</p><p>標準定義マクロ</p><p><strong>説明</strong>:</p><p>論理和を示す演算子「|」と同様に使用することができるマクロです。</p><p><strong>参照</strong>:</p><p>and xor not</p><h2 id="xor" tabindex="-1">xor <a class="header-anchor" href="#xor" aria-label="Permalink to &quot;xor {#xor}&quot;">​</a></h2><p>排他的論理和(演算子)</p><p><strong>グループ</strong>:</p><p>標準定義マクロ</p><p><strong>説明</strong>:</p><p>排他的論理和を示す演算子「^」と同様に使用することができるマクロです。</p><p><strong>参照</strong>:</p><p>and or not</p><h2 id="not" tabindex="-1">not <a class="header-anchor" href="#not" aria-label="Permalink to &quot;not {#not}&quot;">​</a></h2><p>否定(演算子)</p><p><strong>グループ</strong>:</p><p>標準定義マクロ</p><p><strong>説明</strong>:</p><p>否定を示す演算子「!」と同様に使用することができるマクロです。</p><p><strong>参照</strong>:</p><p>and or xor</p><h2 id="M_PI" tabindex="-1">M_PI <a class="header-anchor" href="#M_PI" aria-label="Permalink to &quot;M_PI {#M_PI}&quot;">​</a></h2><p>円周率</p><p><strong>説明</strong>:</p><p>円周率を表す定数です。3.14159265358979323846が定義されています。</p><p><strong>グループ</strong>:</p><p>数学定数</p><p><strong>参照</strong>:</p><p>rad2deg deg2rad</p><h2 id="rad2deg" tabindex="-1">rad2deg <a class="header-anchor" href="#rad2deg" aria-label="Permalink to &quot;rad2deg {#rad2deg}&quot;">​</a></h2><p>ラジアンを度に変換</p><p><strong>パラメーター</strong>:</p><p>(p1) p1 : 度に変換する角度（ラジアン）</p><p><strong>説明</strong>:</p><p>角度の単位をラジアンから度へ変換します。 弧度法で表された角度を度数法での角度に変換するとも言えます。</p><p><strong>例</strong>:</p><pre><code>tmp = M_PI
mes str(tmp) + &quot;ラジアンは&quot; + rad2deg(tmp) + &quot;°です。&quot;
stop
</code></pre><p><strong>参照</strong>:</p><p>M_PI deg2rad</p><h2 id="deg2rad" tabindex="-1">deg2rad <a class="header-anchor" href="#deg2rad" aria-label="Permalink to &quot;deg2rad {#deg2rad}&quot;">​</a></h2><p>度をラジアンに変換</p><p><strong>パラメーター</strong>:</p><p>(p1) p1 : ラジアンに変換する角度（度）</p><p><strong>説明</strong>:</p><p>角度の単位を度からラジアンへ変換します。 度数法で表された角度を弧度法での角度に変換するとも言えます。</p><p><strong>例</strong>:</p><pre><code>tmp = 90
mes str(tmp) + &quot;°は&quot; + deg2rad(tmp) + &quot;ラジアンです。&quot;
stop
</code></pre><p><strong>参照</strong>:</p><p>M_PI rad2deg</p>`,316),a=[p];function s(i,g,d,m,_,l){return n(),e("div",null,a)}const f=o(r,[["render",s]]);export{c as __pageData,f as default};

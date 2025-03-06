import{_ as t,c as e,o as l,a3 as r}from"./chunks/framework.DflgEAq4.js";const y=JSON.parse('{"title":"ANGLE - ほぼネイティブなグラフィックレイヤーエンジン","description":"","frontmatter":{},"headers":[],"relativePath":"translation/angle/index.md","filePath":"translation/angle/index.md","lastUpdated":null}'),n={name:"translation/angle/index.md"},a=r(`<h1 id="angle-ほぼネイティブなグラフィックレイヤーエンジン" tabindex="-1">ANGLE - ほぼネイティブなグラフィックレイヤーエンジン <a class="header-anchor" href="#angle-ほぼネイティブなグラフィックレイヤーエンジン" aria-label="Permalink to &quot;ANGLE - ほぼネイティブなグラフィックレイヤーエンジン&quot;">​</a></h1><p><a href="https://chromium.googlesource.com/angle/angle/+/main/README.md" target="_blank" rel="noreferrer">原文</a></p><p>ANGLEの目標は、OpenGL ES APIコールをそのプラットフォームで利用可能なハードウェアサポートAPIのいずれかに変換することにより、複数のオペレーティングシステムのユーザーがWebGLおよびその他のOpenGL ESコンテンツをシームレスに実行できるようにすることです。ANGLEは現在、OpenGL ES 2.0、3.0、3.1からVulkan、デスクトップOpenGL、OpenGL ES、Direct3D 9、Direct3D 11への変換を提供しています。将来的には、ES 3.2、MetalとMacOSへの翻訳、Chrome OS、Fuchsiaのサポートが予定されています。</p><h3 id="バックレンダラーによるopengl-esのサポートレベル" tabindex="-1">バックレンダラーによるOpenGL ESのサポートレベル <a class="header-anchor" href="#バックレンダラーによるopengl-esのサポートレベル" aria-label="Permalink to &quot;バックレンダラーによるOpenGL ESのサポートレベル&quot;">​</a></h3><table tabindex="0"><thead><tr><th></th><th style="text-align:center;">Direct3D 9</th><th style="text-align:center;">Direct3D 11</th><th style="text-align:center;">Desktop GL</th><th style="text-align:center;">GL ES</th><th style="text-align:center;">Vulkan</th><th style="text-align:center;">Metal</th></tr></thead><tbody><tr><td>OpenGL ES 2.0</td><td style="text-align:center;">complete</td><td style="text-align:center;">complete</td><td style="text-align:center;">complete</td><td style="text-align:center;">complete</td><td style="text-align:center;">complete</td><td style="text-align:center;">complete</td></tr><tr><td>OpenGL ES 3.0</td><td style="text-align:center;"></td><td style="text-align:center;">complete</td><td style="text-align:center;">complete</td><td style="text-align:center;">complete</td><td style="text-align:center;">complete</td><td style="text-align:center;">in progress</td></tr><tr><td>OpenGL ES 3.1</td><td style="text-align:center;"></td><td style="text-align:center;">incomplete</td><td style="text-align:center;">complete</td><td style="text-align:center;">complete</td><td style="text-align:center;">complete</td><td style="text-align:center;"></td></tr><tr><td>OpenGL ES 3.2</td><td style="text-align:center;"></td><td style="text-align:center;"></td><td style="text-align:center;">in progress</td><td style="text-align:center;">in progress</td><td style="text-align:center;">in progress</td><td style="text-align:center;"></td></tr></tbody></table><h3 id="バックレンダラーによるプラットフォーム対応" tabindex="-1">バックレンダラーによるプラットフォーム対応 <a class="header-anchor" href="#バックレンダラーによるプラットフォーム対応" aria-label="Permalink to &quot;バックレンダラーによるプラットフォーム対応&quot;">​</a></h3><table tabindex="0"><thead><tr><th style="text-align:right;"></th><th style="text-align:center;">Direct3D 9</th><th style="text-align:center;">Direct3D 11</th><th style="text-align:center;">Desktop GL</th><th style="text-align:center;">GL ES</th><th style="text-align:center;">Vulkan</th><th style="text-align:center;">Metal</th></tr></thead><tbody><tr><td style="text-align:right;">Windows</td><td style="text-align:center;">complete</td><td style="text-align:center;">complete</td><td style="text-align:center;">complete</td><td style="text-align:center;">complete</td><td style="text-align:center;">complete</td><td style="text-align:center;"></td></tr><tr><td style="text-align:right;">Linux</td><td style="text-align:center;"></td><td style="text-align:center;"></td><td style="text-align:center;">complete</td><td style="text-align:center;"></td><td style="text-align:center;">complete</td><td style="text-align:center;"></td></tr><tr><td style="text-align:right;">Mac OS X</td><td style="text-align:center;"></td><td style="text-align:center;"></td><td style="text-align:center;">complete</td><td style="text-align:center;"></td><td style="text-align:center;"></td><td style="text-align:center;">in progress</td></tr><tr><td style="text-align:right;">iOS</td><td style="text-align:center;"></td><td style="text-align:center;"></td><td style="text-align:center;"></td><td style="text-align:center;"></td><td style="text-align:center;"></td><td style="text-align:center;">in progress</td></tr><tr><td style="text-align:right;">Chrome OS</td><td style="text-align:center;"></td><td style="text-align:center;"></td><td style="text-align:center;"></td><td style="text-align:center;">complete</td><td style="text-align:center;">planned</td><td style="text-align:center;"></td></tr><tr><td style="text-align:right;">Android</td><td style="text-align:center;"></td><td style="text-align:center;"></td><td style="text-align:center;"></td><td style="text-align:center;">complete</td><td style="text-align:center;">complete</td><td style="text-align:center;"></td></tr><tr><td style="text-align:right;">GGP (Stadia)</td><td style="text-align:center;"></td><td style="text-align:center;"></td><td style="text-align:center;"></td><td style="text-align:center;"></td><td style="text-align:center;">complete</td><td style="text-align:center;"></td></tr><tr><td style="text-align:right;">Fuchsia</td><td style="text-align:center;"></td><td style="text-align:center;"></td><td style="text-align:center;"></td><td style="text-align:center;"></td><td style="text-align:center;">complete</td><td style="text-align:center;"></td></tr></tbody></table><p>ANGLE v1.0.772は、2011年10月にOpenGL ES 2.0.3のコンフォーマンステストに合格し、準拠が証明されています。</p><p>ANGLEは、Vulkanバックエンドで以下の認定を受けています。</p><ul><li>OpenGL ES 2.0: ANGLE 2.1.0.d46e2fb1e341 (Nov, 2019)</li><li>OpenGL ES 3.0: ANGLE 2.1.0.f18ff947360d (Feb, 2020)</li><li>OpenGL ES 3.1: ANGLE 2.1.0.f5dace0f1e57 (Jul, 2020)</li></ul><p>また、ANGLEはEGL1.5仕様の実装も提供しています。</p><p>ANGLEは、Windowsプラットフォーム上のGoogle ChromeとMozilla Firefoxの両方で、デフォルトのWebGLバックエンドとして使用されています。Chromeは、高速化されたCanvas2D実装やNative Clientサンドボックス環境など、Windows上のすべてのグラフィックスレンダリングにANGLEを使用しています。</p><p>ANGLE シェーダーコンパイラの一部は、複数のプラットフォームにまたがる WebGL の実装でシェーダー検証およびトランスレータとして使用されています。Mac OS X、Linux、およびブラウザのモバイル版で使用されています。1 つのシェーダバリデータを持つことで、ブラウザやプラットフォーム間で一貫した GLSL ES シェーダのセットを受け入れることができます。シェーダ・トランスレータは、シェーダを他のシェーディング言語に翻訳したり、ネイティブ・グラフィック・ドライバのバグや癖に対処するためにシェーダの修正をオプションで適用したりするために使用できます。トランスレータは、Desktop GLSL、Vulkan GLSL、Direct3D HLSL、およびネイティブGLES2プラットフォーム用のESSLもターゲットにしています。</p><h2 id="情報源" tabindex="-1">情報源 <a class="header-anchor" href="#情報源" aria-label="Permalink to &quot;情報源&quot;">​</a></h2><p>ANGLEリポジトリはChromiumプロジェクトによってホストされており、<a href="https://chromium.googlesource.com/angle/angle" target="_blank" rel="noreferrer">オンラインで閲覧</a>することができます。</p><pre><code>git clone https://chromium.googlesource.com/angle/angle
</code></pre><h2 id="ビルド" tabindex="-1">ビルド <a class="header-anchor" href="#ビルド" aria-label="Permalink to &quot;ビルド&quot;">​</a></h2><p>Devセットアップ説明書をご覧ください。</p><h2 id="貢献" tabindex="-1">貢献 <a class="header-anchor" href="#貢献" aria-label="Permalink to &quot;貢献&quot;">​</a></h2><ul><li><p><a href="https://groups.google.com/group/angleproject" target="_blank" rel="noreferrer">Googleグループ</a>に参加し、最新情報を入手することができます。</p></li><li><p><a href="https://chromium.slack.com" target="_blank" rel="noreferrer">Slack</a> の #angle チャンネルに参加してください。Slackチャンネルに参加する手順は<a href="https://www.chromium.org/developers/slack" target="_blank" rel="noreferrer">Chromium開発者ページ</a>の説明に従ってください。Googler の方は、こちらの <a href="https://docs.google.com/document/d/1wWmRm-heDDBIkNJnureDiRO7kqcRouY2lSXlO6N2z6M/edit?usp=sharing" target="_blank" rel="noreferrer">ドキュメント</a> の指示に従って、google または chromium のメールを使用して Slack チャンネルに参加してください。</p></li><li><p><a href="https://bugs.chromium.org/p/angleproject/issues/list" target="_blank" rel="noreferrer">問題追跡システム</a> の <a href="http://anglebug.com/new" target="_blank" rel="noreferrer">バグを報告</a> (できれば孤立したテストケース付き)。</p></li><li><p>ANGLEブランチの選択を使って、自分のプロジェクトでトラッキングを行うことができます。</p></li><li><p>ANGLEの開発 ドキュメントを読む。</p></li><li><p><a href="https://chromium-review.googlesource.com/q/project:angle/angle+status:open" target="_blank" rel="noreferrer">未解決</a> と <a href="https://chromium-review.googlesource.com/q/project:angle/angle+status:merged" target="_blank" rel="noreferrer">マージ</a> の変更を見てください。</p></li><li><p>コードの貢献者になる。</p></li><li><p>ANGLEのコーディング規約を使用する。</p></li><li><p>Chromium開発用ANGLEのビルド方法はこちらです。</p></li><li><p>ANGLEのデバッグのヘルプを取得する。</p></li><li><p>ANGLEの方向性に目を通し、<a href="https://bugs.chromium.org/p/angleproject/issues/list?q=Hotlist%3DStarterBug" target="_blank" rel="noreferrer">スタータープロジェクト</a>をふるいにかけてみてください。何か作業を引き受けると決めたら、私たちと連絡が取れるようにコメントを書き、さらに重要なことは、あなた自身をそのバグの「所有者」に設定することです。こうすることで、複数の人が誤って同じ問題に取り組むことを避けることができます。</p></li><li><p>WebGLについては、<a href="http://khronos.org/webgl/wiki/Main_Page" target="_blank" rel="noreferrer">Khronos WebGL Wiki</a>でお読みください。</p></li><li><p>初期のANGLE実装の詳細については、<a href="http://www.seas.upenn.edu/~pcozzi/OpenGLInsights/OpenGLInsights-ANGLE.pdf" target="_blank" rel="noreferrer">OpenGLインサイト ANGLE</a>（これは最新のANGLE実装詳細ではないため、ここでは歴史的参考としてのみ掲載しています）とこの<a href="https://drive.google.com/file/d/0Bw29oYeC09QbbHoxNE5EUFh0RGs/view?usp=sharing&amp;resourcekey=0-CNvGnQGgFSvbXgX--Y_Iyg" target="_blank" rel="noreferrer">ANGLEプレゼンテーション</a>でご確認ください。</p></li><li><p>ANGLE実装の過去、現在、未来について、<a href="https://docs.google.com/presentation/d/1CucIsdGVDmdTWRUbg68IxLE5jXwCb2y1E9YVhQo0thg/pub?start=false&amp;loop=false" target="_blank" rel="noreferrer">本プレゼンテーション</a>でご紹介しています。</p></li><li><p>Vulkanバックエンドに関する<a href="https://youtu.be/QrIKdjmpmaA" target="_blank" rel="noreferrer">ショートプレゼンテーション</a>をご覧ください。</p></li><li><p>dEQPテスト適合性を追跡する。</p></li><li><p>Vulkanバックエンドのデザインドキュメントを読んでください。</p></li><li><p>ANGLEのテストインフラについて読む</p></li><li><p>ANGLEの対応拡張子の情報を見る</p></li><li><p>ANGLEをご自身のプロジェクトで使用された場合、ぜひそのお話をお聞かせください。</p></li></ul>`,20),i=[a];function d(s,o,c,g,p,h){return l(),e("div",null,i)}const m=t(n,[["render",d]]);export{y as __pageData,m as default};

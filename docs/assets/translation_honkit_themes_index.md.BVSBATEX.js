import{_ as e,c as t,o as a,a3 as s}from"./chunks/framework.DflgEAq4.js";const m=JSON.parse('{"title":"テーマ","description":"","frontmatter":{},"headers":[],"relativePath":"translation/honkit/themes/index.md","filePath":"translation/honkit/themes/index.md","lastUpdated":null}'),n={name:"translation/honkit/themes/index.md"},o=s(`<h1 id="テーマ" tabindex="-1">テーマ <a class="header-anchor" href="#テーマ" aria-label="Permalink to &quot;テーマ&quot;">​</a></h1><p>バージョン3.0.0以降、HonKitは簡単にテーマを設定することができるようになりました。書籍では、デフォルトで theme-defaultというテーマが使用されます。</p><blockquote><p><strong>ご注意ください</strong>: カスタムテーマにより、一部のプラグインが正しく動作しない場合があります。</p></blockquote><h3 id="テーマの構成" tabindex="-1">テーマの構成 <a class="header-anchor" href="#テーマの構成" aria-label="Permalink to &quot;テーマの構成&quot;">​</a></h3><p>テーマとは、テンプレートとアセットを含むプラグインのことです。テーマは常にデフォルトのテーマを拡張するので、個々のテンプレートのオーバーライドは任意です。</p><table tabindex="0"><thead><tr><th>フォルダ</th><th>説明</th></tr></thead><tbody><tr><td><code>_layouts</code></td><td>すべてのテンプレートが格納されているメインフォルダー</td></tr><tr><td><code>_layouts/website/page.html</code></td><td>通常ページのテンプレート</td></tr><tr><td><code>_layouts/ebook/page.html</code></td><td>電子書籍生成時の通常ページ用テンプレート（PDF, ePub, Mobi）</td></tr></tbody></table><h3 id="ブックのテーマを拡張・カスタマイズする" tabindex="-1">ブックのテーマを拡張・カスタマイズする <a class="header-anchor" href="#ブックのテーマを拡張・カスタマイズする" aria-label="Permalink to &quot;ブックのテーマを拡張・カスタマイズする&quot;">​</a></h3><p>ブックのソースから直接テーマのテンプレートを拡張することができます（外部テーマを作成することなく）。テンプレートはまず本の <code>_layouts</code> フォルダに、次にインストールされた plugins/themes に解決されます。</p><h3 id="forkingの代わりにextend" tabindex="-1">Forkingの代わりにExtend <a class="header-anchor" href="#forkingの代わりにextend" aria-label="Permalink to &quot;Forkingの代わりにExtend&quot;">​</a></h3><p>テーマの変更を複数のブックで利用できるようにしたい場合、デフォルトのテーマをフォークするのではなく、templating syntax を使って拡張することが可能です。</p><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{% extends template.self %}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{% block body %}</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    {{ super() }}</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    ... これは&quot;body &quot;ブロックに追加されます。</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{% endblock %}</span></span></code></pre></div><p>より完全な例としてAPIテーマを見てみましょう。</p><h3 id="テーマを公開する" tabindex="-1">テーマを公開する <a class="header-anchor" href="#テーマを公開する" aria-label="Permalink to &quot;テーマを公開する&quot;">​</a></h3><p>テーマはプラグイン (関連ドキュメント) として <code>theme-</code> というプレフィックスを付けて公開されています。例えば、テーマ <code>awesome</code> はプラグイン <code>theme-awesome</code> からロードされ、NPM パッケージ <code>honkit-plugin-theme-awesome</code> からロードされます。</p>`,14),i=[o];function d(l,h,r,p,c,k){return a(),t("div",null,i)}const _=e(n,[["render",d]]);export{m as __pageData,_ as default};

import{_ as s,c as a,o as n,a3 as p}from"./chunks/framework.DflgEAq4.js";const g=JSON.parse('{"title":"マシンを準備する","description":"","frontmatter":{},"headers":[],"relativePath":"translation/mastodon/running/index.md","filePath":"translation/mastodon/running/index.md","lastUpdated":null}'),i={name:"translation/mastodon/running/index.md"},e=p(`<h1 id="マシンを準備する" tabindex="-1">マシンを準備する <a class="header-anchor" href="#マシンを準備する" aria-label="Permalink to &quot;マシンを準備する&quot;">​</a></h1><p>新しいマシンをセットアップする場合は、最初にセキュアにしておくことをお勧めします。<strong>Ubuntu 20.04</strong>を使用していると仮定した場合。</p><nav class="table-of-contents"><ul><li><a href="#パスワードによるsshログインを許可しない-鍵のみ">パスワードによるSSHログインを許可しない(鍵のみ)</a></li><li><a href="#システムパッケージのアップデート">システムパッケージのアップデート</a></li><li><a href="#fail2banをインストールし、繰り返し行われるログイン試行をブロックする。">fail2banをインストールし、繰り返し行われるログイン試行をブロックする。</a></li><li><a href="#ファイアウォールを設置し、ssh-http-httpsのポートだけを許可する">ファイアウォールを設置し、SSH, HTTP, HTTPSのポートだけを許可する</a></li></ul></nav><h2 id="パスワードによるsshログインを許可しない-鍵のみ" tabindex="-1">パスワードによるSSHログインを許可しない(鍵のみ) <a class="header-anchor" href="#パスワードによるsshログインを許可しない-鍵のみ" aria-label="Permalink to &quot;パスワードによるSSHログインを許可しない(鍵のみ)&quot;">​</a></h2><p>まず、パスワードではなく鍵を使って実際にサーバにログインしていることを確認してください。そうしないと、ロックアウトされてしまいます。多くのホスティングプロバイダーは公開鍵のアップロードをサポートしており、新しいマシンに鍵ベースのルートログインを自動的にセットアップしてくれます。</p><p><code>etc/ssh/sshd_config</code> を編集して、<code>PasswordAuthentication</code> を見つけます。コメントアウトが解除され、<code>no</code> に設定されていることを確認します。もし、変更したのであれば、sshd を再起動します。</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">systemctl</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> restart</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ssh.service</span></span></code></pre></div><h2 id="システムパッケージのアップデート" tabindex="-1">システムパッケージのアップデート <a class="header-anchor" href="#システムパッケージのアップデート" aria-label="Permalink to &quot;システムパッケージのアップデート&quot;">​</a></h2><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">apt</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> update</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> &amp;&amp; </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">apt</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> upgrade</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -y</span></span></code></pre></div><h2 id="fail2banをインストールし、繰り返し行われるログイン試行をブロックする。" tabindex="-1">fail2banをインストールし、繰り返し行われるログイン試行をブロックする。 <a class="header-anchor" href="#fail2banをインストールし、繰り返し行われるログイン試行をブロックする。" aria-label="Permalink to &quot;fail2banをインストールし、繰り返し行われるログイン試行をブロックする。&quot;">​</a></h2><p>まず、fail2banをインストールします。</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">apt</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> fail2ban</span></span></code></pre></div><p><code>etc/fail2ban/jail.local</code> を編集し、以下を記述します。</p><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>[DEFAULT]</span></span>
<span class="line"><span>destemail = your@email.here</span></span>
<span class="line"><span>sendername = Fail2Ban</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[sshd]</span></span>
<span class="line"><span>enabled = true</span></span>
<span class="line"><span>port = 22</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[sshd-ddos]</span></span>
<span class="line"><span>enabled = true</span></span>
<span class="line"><span>port = 22</span></span></code></pre></div><p>最後にfail2banを再起動します。</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">systemctl</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> restart</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> fail2ban</span></span></code></pre></div><h2 id="ファイアウォールを設置し、ssh-http-httpsのポートだけを許可する" tabindex="-1">ファイアウォールを設置し、SSH, HTTP, HTTPSのポートだけを許可する <a class="header-anchor" href="#ファイアウォールを設置し、ssh-http-httpsのポートだけを許可する" aria-label="Permalink to &quot;ファイアウォールを設置し、SSH, HTTP, HTTPSのポートだけを許可する&quot;">​</a></h2><p>まず、iptables-persistentをインストールします。インストール時に、現在のルールを維持するかどうか尋ねられますが、拒否してください。</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">apt</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -y</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> iptables-persistent</span></span></code></pre></div><p><code>etc/iptables/rules.v4</code> を編集し、以下を記述します。</p><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>*filter</span></span>
<span class="line"><span></span></span>
<span class="line"><span>#  ループバック（lo0）のトラフィックをすべて許可し、lo0を使用しない127/8へのトラフィックをすべてドロップする。</span></span>
<span class="line"><span>-A INPUT -i lo -j ACCEPT</span></span>
<span class="line"><span>-A INPUT ! -i lo -d 127.0.0.0/8 -j REJECT</span></span>
<span class="line"><span></span></span>
<span class="line"><span>#  確立されたすべてのインバウンドコネクションを受け入れる</span></span>
<span class="line"><span>-A INPUT -m state --state ESTABLISHED,RELATED -j ACCEPT</span></span>
<span class="line"><span></span></span>
<span class="line"><span>#  すべてのアウトバウンドトラフィックを許可する - 特定のトラフィックのみを許可するように変更することができます。</span></span>
<span class="line"><span>-A OUTPUT -j ACCEPT</span></span>
<span class="line"><span></span></span>
<span class="line"><span>#  どこからでもHTTPとHTTPSの接続を許可する（WebサイトとSSL用の通常のポート）。</span></span>
<span class="line"><span>-A INPUT -p tcp --dport 80 -j ACCEPT</span></span>
<span class="line"><span>-A INPUT -p tcp --dport 443 -j ACCEPT</span></span>
<span class="line"><span></span></span>
<span class="line"><span>#  SSH接続を許可する</span></span>
<span class="line"><span>#  dport番号は、sshd_configで設定したポート番号と同じにする必要があります。</span></span>
<span class="line"><span>-A INPUT -p tcp -m state --state NEW --dport 22 -j ACCEPT</span></span>
<span class="line"><span></span></span>
<span class="line"><span>#  Pingを許可する</span></span>
<span class="line"><span>-A INPUT -p icmp -m icmp --icmp-type 8 -j ACCEPT</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 宛先不明メッセージを許可する。特にコード4（断片化が必要）が必要、またはPMTUDが壊れる。</span></span>
<span class="line"><span>-A INPUT -p icmp -m icmp --icmp-type 3 -j ACCEPT</span></span>
<span class="line"><span></span></span>
<span class="line"><span>#  iptablesの拒否された呼び出しのログ</span></span>
<span class="line"><span>-A INPUT -m limit --limit 5/min -j LOG --log-prefix &quot;iptables denied: &quot; --log-level 7</span></span>
<span class="line"><span></span></span>
<span class="line"><span>#  その他の受信をすべて拒否する - 明示的に許可されたポリシー以外はデフォルトで拒否する</span></span>
<span class="line"><span>-A INPUT -j REJECT</span></span>
<span class="line"><span>-A FORWARD -j REJECT</span></span>
<span class="line"><span></span></span>
<span class="line"><span>COMMIT</span></span></code></pre></div><p>iptables-persistentでは、その設定は起動時にロードされます。しかし、今はリブートしていないので、初めて手動でロードする必要があります。</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">iptables-restore</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &lt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /etc/iptables/rules.v4</span></span></code></pre></div><p>IPv6でも到達可能な場合は、<code>/etc/iptables/rules.v6</code>を編集して、その中にこれを追加してください。</p><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>*filter</span></span>
<span class="line"><span></span></span>
<span class="line"><span>#  ループバック（lo0）のトラフィックをすべて許可し、lo0を使用しない127/8へのトラフィックをすべてドロップする。</span></span>
<span class="line"><span>-A INPUT -i lo -j ACCEPT</span></span>
<span class="line"><span>-A INPUT ! -i lo -d ::1/128 -j REJECT</span></span>
<span class="line"><span></span></span>
<span class="line"><span>#  確立されたすべてのインバウンドコネクションを受け入れる</span></span>
<span class="line"><span>-A INPUT -m state --state ESTABLISHED,RELATED -j ACCEPT</span></span>
<span class="line"><span></span></span>
<span class="line"><span>#  すべてのアウトバウンドトラフィックを許可する - 特定のトラフィックのみを許可するように変更することができます。</span></span>
<span class="line"><span>-A OUTPUT -j ACCEPT</span></span>
<span class="line"><span></span></span>
<span class="line"><span>#  どこからでもHTTPとHTTPSの接続を許可する（WebサイトとSSL用の通常のポート）。</span></span>
<span class="line"><span>-A INPUT -p tcp --dport 80 -j ACCEPT</span></span>
<span class="line"><span>-A INPUT -p tcp --dport 443 -j ACCEPT</span></span>
<span class="line"><span></span></span>
<span class="line"><span>#  SSH接続を許可する</span></span>
<span class="line"><span>#  dport番号は、sshd_configで設定したポート番号と同じである必要があります。</span></span>
<span class="line"><span>-A INPUT -p tcp -m state --state NEW --dport 22 -j ACCEPT</span></span>
<span class="line"><span></span></span>
<span class="line"><span>#  Pingを許可する</span></span>
<span class="line"><span>-A INPUT -p icmpv6 -j ACCEPT</span></span>
<span class="line"><span></span></span>
<span class="line"><span>#  iptablesの拒否された呼び出しのログ</span></span>
<span class="line"><span>-A INPUT -m limit --limit 5/min -j LOG --log-prefix &quot;iptables denied: &quot; --log-level 7</span></span>
<span class="line"><span></span></span>
<span class="line"><span>#  その他の受信をすべて拒否する - 明示的に許可されたポリシー以外はデフォルトで拒否する</span></span>
<span class="line"><span>-A INPUT -j REJECT</span></span>
<span class="line"><span>-A FORWARD -j REJECT</span></span>
<span class="line"><span></span></span>
<span class="line"><span>COMMIT</span></span></code></pre></div><p>IPv4ルールと同様に、以下のように手動で読み込むことができます。</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">ip6tables-restore</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &lt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /etc/iptables/rules.v6</span></span></code></pre></div>`,27),l=[e];function t(c,h,d,o,r,k){return n(),a("div",null,l)}const u=s(i,[["render",t]]);export{g as __pageData,u as default};

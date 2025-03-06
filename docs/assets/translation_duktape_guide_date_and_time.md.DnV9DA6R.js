import{_ as e,c as a,o as d,j as t,a as n}from"./chunks/framework.DflgEAq4.js";const P=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"translation/duktape/guide/date_and_time.md","filePath":"translation/duktape/guide/date_and_time.md","lastUpdated":null}'),i={name:"translation/duktape/guide/date_and_time.md"},o=t("h2",{id:"date_and_time",tabindex:"-1"},[n("日付と時刻の処理 "),t("a",{class:"header-anchor",href:"#date_and_time","aria-label":'Permalink to "日付と時刻の処理 {#date_and_time}"'},"​")],-1),s=t("p",null,"日付と時刻の処理は、Duktape をよりエキゾチックな環境に適応させる際に、しばしば移植性の問題になります。duk_config.h 設定ヘッダは、Date 組み込みの実装に必要な、プラットフォーム固有の プロバイダを選択します。Duktapeには、主流のプラットフォーム（Linux、Windows、OS X）用の組み込みプロバイダーがあり、通常は変更せずに動作するはずです。また、より特殊な環境のために、外部の日付プロバイダーを書くこともできます。外部日付プロバイダーは、例えば、プラットフォームの時間にオフセットを適用する必要がある場合や、時間の仮想化を使用する場合などにも使用することができます。",-1),_=t("p",null,"ECMAScript のコードは、標準の Date 組み込みで日付/時刻を扱いますが、これは仕様上、ミリ秒の分解能に制限されています。現在、Duktape特有のECMAScript日付/時間APIは存在しません。(サブミリ秒の解像度に対応するカスタムAPIが後で追加されるかもしれません)。",-1),r=t("p",null,"Cコードはもちろんプラットフォームの日付/時刻APIを直接使用できますが、Duktape C APIは日付/時刻APIコールも提供しています。これらの呼び出しはECMAScriptコードと同じ時間値を見ることができ、例えば時間の仮想化が使用されている場合には重要かもしれません。これらのコールを使うことで、あなたのコードはプラットフォーム・ニュートラルとなり、よりポータブルになります。Duktape C APIでは、時間値をサブミリ秒の分解能で扱うことができます。詳しくは、時間値の扱い方をご覧ください。",-1),c=[o,s,_,r];function p(l,u,m,h,k,f){return d(),a("div",null,c)}const D=e(i,[["render",p]]);export{P as __pageData,D as default};

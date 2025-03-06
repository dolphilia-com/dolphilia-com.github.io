import{_ as t,c as l,o as a,a3 as n,j as s,a as i}from"./chunks/framework.DflgEAq4.js";const b=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"translation/duktape/guide/custom_json_formats.md","filePath":"translation/duktape/guide/custom_json_formats.md","lastUpdated":null}'),e={name:"translation/duktape/guide/custom_json_formats.md"},d=n("",19),h=s("table",{tabindex:"0"},[s("thead",null,[s("tr",null,[s("th",null,"Value"),s("th",null,"Standard JSON"),s("th",null,"JX"),s("th",null,"JC"),s("th",null,"Notes")])]),s("tbody",null,[s("tr",null,[s("td",null,"undefined"),s("td",null,"n/a"),s("td",null,"undefined"),s("td",{"_undef:true":""}),s("td",null,"Standard JSON: encoded as null inside arrays, otherwise omitted")]),s("tr",null,[s("td",null,"null"),s("td",null,"null"),s("td",null,"null"),s("td",null,"null"),s("td",null,"standard JSON")]),s("tr",null,[s("td",null,"true"),s("td",null,"true"),s("td",null,"true"),s("td",null,"true"),s("td",null,"standard JSON")]),s("tr",null,[s("td",null,"false"),s("td",null,"false"),s("td",null,"false"),s("td",null,"false"),s("td",null,"standard JSON")]),s("tr",null,[s("td",null,"123.4"),s("td",null,"123.4"),s("td",null,"123.4"),s("td",null,"123.4"),s("td",null,"standard JSON")]),s("tr",null,[s("td",null,"+0"),s("td",null,"0"),s("td",null,"0"),s("td",null,"0"),s("td",null,"standard JSON")]),s("tr",null,[s("td",null,"-0"),s("td",null,"0"),s("td",null,"-0"),s("td",null,"-0"),s("td",null,"Standard JSON allows -0 but serializes negative zero as 0 (losing the sign unnecessarily)")]),s("tr",null,[s("td",null,"NaN"),s("td",null,"null"),s("td",null,"NaN"),s("td",{"_nan:true":""}),s("td",null,"Standard JSON: always encoded as null")]),s("tr",null,[s("td",null,"Infinity"),s("td",null,"null"),s("td",null,"Infinity"),s("td",{"_inf:true":""}),s("td",null,"Standard JSON: always encoded as null")]),s("tr",null,[s("td",null,"-Infinity"),s("td",null,"null"),s("td",null,"-Infinity"),s("td",{"_ninf:true":""}),s("td",null,"Standard JSON: always encoded as null")]),s("tr",null,[s("td",null,'"köhä"'),s("td",null,'"köhä"'),s("td",null,'"k\\xf6h\\xe4"'),s("td",null,'"k\\u00f6h\\u00e4"'),s("td")]),s("tr",null,[s("td",null,"U+00FC"),s("td",null,'"\\u00fc"'),s("td",null,'"\\xfc"'),s("td",null,'"\\u00fc"'),s("td")]),s("tr",null,[s("td",null,"U+ABCD"),s("td",null,'"\\uabcd"'),s("td",null,'"\\uabcd"'),s("td",null,'"\\uabcd"'),s("td")]),s("tr",null,[s("td",null,"U+1234ABCD"),s("td",null,'"U+1234abcd"'),s("td",null,'"\\U1234abcd"'),s("td",null,'"U+1234abcd"'),s("td",null,"Non-BMP characters are not standard ECMAScript, JX format borrowed from Python")]),s("tr",null,[s("td",null,"object"),s("td",{"my_key:123":""}),s("td",{"my_key:123":""}),s("td",{"my_key:123":""}),s("td",null,"ASCII keys matching identifer requirements encoded without quotes in JX")]),s("tr",null,[s("td",null,"array"),s("td",null,'["foo","bar"]'),s("td",null,'["foo","bar"]'),s("td",null,'["foo","bar"]'),s("td")]),s("tr",null,[s("td",null,"buffer"),s("td",null,"n/a"),s("td",null,"|deadbeef|"),s("td",{"_buf:deadbeef":""}),s("td")]),s("tr",null,[s("td",null,"pointer"),s("td",null,"n/a"),s("td",null,"(0xdeadbeef)"),s("td",{"_ptr:0xdeadbeef":""}),s("td")]),s("tr",null,[s("td"),s("td"),s("td",null,"(DEADBEEF)"),s("td",{"_ptr:DEADBEEF":""}),s("td",null,"Representation inside parentheses or quotes is platform specific")]),s("tr",null,[s("td",null,"NULL pointer"),s("td",null,"n/a"),s("td",null,"(null)"),s("td",{"_ptr:null":""}),s("td")]),s("tr",null,[s("td",null,"function"),s("td",null,"n/a"),s("td",{"_func:true":""}),s("td",{"_func:true":""}),s("td",null,"Standard JSON: encoded as null inside arrays, otherwise omitted")]),s("tr",null,[s("td",null,"lightfunc"),s("td",null,"n/a"),s("td",{"_func:true":""}),s("td",{"_func:true":""}),s("td",null,"Formats like ordinary functions")])])],-1),u=s("h3",{id:"制限事項",tabindex:"-1"},[i("制限事項 "),s("a",{class:"header-anchor",href:"#制限事項","aria-label":'Permalink to "制限事項"'},"​")],-1),r=s("p",null,"いくつかの制限事項があります。",-1),p=s("ul",null,[s("li",null,"列挙可能な自身のプロパティのみが、どのフォーマットでもシリアライズされます。"),s("li",null,'配列のプロパティ（エントリ以外）はシリアライズされません。これは、例えばロギングなどで [1,2,3, "type": "point"] のように有用でしょう。'),s("li",null,"配列のギャップは保存されず、未定義としてパースバックされます。"),s("li",null,"JCデータの解析時に、特殊な値を自動的に復活させることはありません。"),s("li",null,"正規のエンコーディングがない。これは、エンコード時にオブジェクトのキーをソートする簡単なオプションで簡単にアレンジできるだろう。")],-1),k=s("p",null,"(今後の課題については、内部ドキュメントを参照してください)。",-1),o=[d,h,u,r,p,k];function c(E,F,y,f,g,_){return a(),l("div",null,o)}const S=t(e,[["render",c]]);export{b as __pageData,S as default};

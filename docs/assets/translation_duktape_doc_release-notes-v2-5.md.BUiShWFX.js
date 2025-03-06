import{_ as e,c as a,o as t,a3 as o}from"./chunks/framework.DflgEAq4.js";const b=JSON.parse('{"title":"Duktape 2.5 release notes","description":"","frontmatter":{},"headers":[],"relativePath":"translation/duktape/doc/release-notes-v2-5.md","filePath":"translation/duktape/doc/release-notes-v2-5.md","lastUpdated":null}'),i={name:"translation/duktape/doc/release-notes-v2-5.md"},l=o('<h1 id="duktape-2-5-release-notes" tabindex="-1">Duktape 2.5 release notes <a class="header-anchor" href="#duktape-2-5-release-notes" aria-label="Permalink to &quot;Duktape 2.5 release notes&quot;">​</a></h1><h2 id="release-overview" tabindex="-1">Release overview <a class="header-anchor" href="#release-overview" aria-label="Permalink to &quot;Release overview&quot;">​</a></h2><p>Main changes in this release (see RELEASES.rst for full details):</p><ul><li>Move CBOR support from extras to Duktape internals. Both the C API (duk_cbor_encode(), duk_cbor_decode()) and ECMAScript API (CBOR.encode(), CBOR.decode()) are enabled by default.</li><li>Add duk_pull() API call.</li><li>Add &quot;globalThis&quot; binding, enabled by default. This replaces the previous &quot;global&quot; binding (which was disabled by default) to match the revised &quot;global&quot; specification.</li><li>Various fixes and portability improvements.</li></ul><h2 id="upgrading-from-duktape-2-4" tabindex="-1">Upgrading from Duktape 2.4 <a class="header-anchor" href="#upgrading-from-duktape-2-4" aria-label="Permalink to &quot;Upgrading from Duktape 2.4&quot;">​</a></h2><p>No action (other than recompiling) should be needed for most users to upgrade from Duktape v2.4.x. Note the following:</p><ul><li>CBOR built-in is enabled by default. You can disable it by disabling the <code>DUK_USE_CBOR_SUPPORT</code> and <code>DUK_USE_CBOR_BUILTIN</code> config options. If you&#39;re using the CBOR extra, you should migrate to the built-in CBOR support.</li><li><code>globalThis</code> binding is now enabled by default; it can be disabled by disabling the <code>DUK_USE_GLOBAL_BINDING</code> config option.</li></ul>',7),d=[l];function s(r,n,u,c,p,h){return t(),a("div",null,d)}const f=e(i,[["render",s]]);export{b as __pageData,f as default};

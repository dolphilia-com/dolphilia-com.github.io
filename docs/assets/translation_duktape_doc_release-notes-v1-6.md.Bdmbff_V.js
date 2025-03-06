import{_ as e,c as n,o as t,a3 as s}from"./chunks/framework.DflgEAq4.js";const h=JSON.parse('{"title":"Duktape 1.6 release notes","description":"","frontmatter":{},"headers":[],"relativePath":"translation/duktape/doc/release-notes-v1-6.md","filePath":"translation/duktape/doc/release-notes-v1-6.md","lastUpdated":null}'),a={name:"translation/duktape/doc/release-notes-v1-6.md"},i=s(`<h1 id="duktape-1-6-release-notes" tabindex="-1">Duktape 1.6 release notes <a class="header-anchor" href="#duktape-1-6-release-notes" aria-label="Permalink to &quot;Duktape 1.6 release notes&quot;">​</a></h1><h2 id="release-overview" tabindex="-1">Release overview <a class="header-anchor" href="#release-overview" aria-label="Permalink to &quot;Release overview&quot;">​</a></h2><p>Main changes in this release (see RELEASES.rst for full details):</p><ul><li>Add duk_suspend() and duk_resume() API calls, backported from Duktape 2.0.</li></ul><h2 id="upgrading-from-duktape-1-5-x" tabindex="-1">Upgrading from Duktape 1.5.x <a class="header-anchor" href="#upgrading-from-duktape-1-5-x" aria-label="Permalink to &quot;Upgrading from Duktape 1.5.x&quot;">​</a></h2><p>No action (other than recompiling) should be needed for most users to upgrade from Duktape v1.5.x.</p><h2 id="known-issues" tabindex="-1">Known issues <a class="header-anchor" href="#known-issues" aria-label="Permalink to &quot;Known issues&quot;">​</a></h2><p>This release has the following known issues worth noting:</p><ul><li>Non-compliant behavior for array indices near 2G or 4G elements.</li><li>RegExp parser is strict and won&#39;t accept some real world RegExps which are technically not compliant with ECMAScript E5/E5.1 specification.</li><li>Final mantissa bit rounding issues in the internal number-to-string conversion.</li><li>On FreeBSD 10.x (at least 10.1 and 10.2): Clang with <code>-m32</code> generates incorrect code for union assignments needed by Duktape&#39;s 8-byte packed value encoding (see <a href="https://github.com/svaarala/duktape/blob/master/misc/clang_aliasing.c" target="_blank" rel="noreferrer">https://github.com/svaarala/duktape/blob/master/misc/clang_aliasing.c</a>). The issue can be detected by defining <code>DUK_OPT_SELF_TESTS</code>. A workaround is to avoid packed types in this case by defining <code>DUK_OPT_NO_PACKED_TVAL</code>.</li></ul><h2 id="raw-issues-from-test-runs" tabindex="-1">Raw issues from test runs <a class="header-anchor" href="#raw-issues-from-test-runs" aria-label="Permalink to &quot;Raw issues from test runs&quot;">​</a></h2><h3 id="api-tests" tabindex="-1">API tests <a class="header-anchor" href="#api-tests" aria-label="Permalink to &quot;API tests&quot;">​</a></h3><pre><code>test-to-number.c: fail; 15 diff lines; known issue: number parsing bug for strings containing NUL characters (e.g. &#39;\\u0000&#39;)
</code></pre><h3 id="ecmascript-tests" tabindex="-1">ECMAScript tests <a class="header-anchor" href="#ecmascript-tests" aria-label="Permalink to &quot;ECMAScript tests&quot;">​</a></h3><pre><code>test-bi-array-proto-push: fail; 30 diff lines; known issue: array length above 2^32-1 not supported
test-bi-array-push-maxlen: fail; 17 diff lines; known issue: array length above 2^32-1 not supported
test-bi-date-tzoffset-brute-fi: fail; 12 diff lines; known issue: year 1970 deviates from expected, Duktape uses equiv. year for 1970 on purpose at the moment; requires special feature options: test case has been written for Finnish locale
test-bi-function-nonstd-caller-prop: fail; 178 diff lines; requires special feature options: DUK_OPT_NONSTD_FUNC_CALLER_PROPERTY
test-bi-global-parseint: fail; 108 diff lines; known issue: rounding differences for parsing integers larger than 2^53
test-bi-json-dec-types: fail; 21 diff lines; known issue: &#39;\\x&#39; should be allowed by eval() but not by JSON.parse(), Duktape rejects &#39;\\x&#39; in both
test-bi-json-enc-proplist-dups: fail; 8 diff lines; known issue: JSON.stringify() can be given a property list to serialize; duplicates should be eliminated but Duktape (and other engines) will happily serialize a property multiple times
test-bi-json-enc-proxy: fail; 18 diff lines; known issue: JSON enumeration behavior for Proxy targets is incomplete and uses &#39;enumerate&#39; trap instead of &#39;ownKeys&#39; trap
test-bi-number-proto-toexponential: fail; 75 diff lines; known issue: corner case rounding errors in toExponential()
test-bi-number-proto-tostring: fail; 46 diff lines; known issue: expect strings to be checked, but probably Duktape rounding issues
test-bi-proxy-object-tostring: fail; 6 diff lines; known issue: Object class handling for Proxy objects is incomplete
test-bi-regexp-gh39: fail; 5 diff lines; known issue: requires leniency for non-standard regexps
test-bug-dataview-buffer-prop: fail; 20 diff lines; known issue: DataView .buffer property misleading when DataView argument is not an ArrayBuffer (custom behavior)
test-bug-date-timeval-edges: fail; 17 diff lines; known issue: test case depends on current timezone offset
test-bug-enum-shadow-nonenumerable: fail; 12 diff lines; known issue: corner case enumeration semantics, not sure what correct behavior is (test262 ch12/12.6/12.6.4/12.6.4-2)
test-bug-invalid-oct-as-dec: fail; 16 diff lines; known issue: V8/Rhino parse invalid octal constants as decimal values, Duktape doesn&#39;t at the moment
test-bug-json-parse-__proto__: fail; 18 diff lines; known issue: when ES6 __proto__ enabled, JSON.parse() parses &#39;__proto__&#39; property incorrectly when a specially crafted reviver is used
test-bug-numconv-1e23: fail; 10 diff lines; known issue: corner case in floating point parse rounding
test-bug-numconv-denorm-toprec: fail; 7 diff lines; known issue: in a denormal corner case toPrecision() can output a zero leading digit
test-bug-tonumber-u0000: fail; 7 diff lines; known issue: &#39;\\u0000&#39; should ToNumber() coerce to NaN, but now coerces to zero like an empty string
test-dev-bound-thread-start-func: fail; 13 diff lines; known issue: initial function of a new coroutine cannot be bound
test-dev-func-cons-args: fail; 18 diff lines; known issue: corner cases for &#39;new Function()&#39; when arguments and code are given as strings
test-dev-lightfunc-accessor: fail; 50 diff lines; requires special feature options: DUK_OPT_LIGHTFUNC_BUILTINS
test-dev-lightfunc-finalizer: fail; 8 diff lines; requires special feature options: DUK_OPT_LIGHTFUNC_BUILTINS
test-dev-lightfunc: fail; 459 diff lines; requires special feature options: DUK_OPT_LIGHTFUNC_BUILTINS
test-dev-yield-after-callapply: fail; 8 diff lines; known issue: yield() not allowed when function called via Function.prototype.(call|apply)()
test-lex-unterminated-hex-uni-escape: fail; 29 diff lines; known issue: unterminated hex escapes should be parsed leniently, e.g. &#39;\\uX&#39; -&gt; &#39;uX&#39; but Duktape now refuses to parse them
test-numconv-parse-misc: fail; 12 diff lines; known issue: rounding corner case for 1e+23 (parses/prints as 1.0000000000000001e+23)
test-numconv-tostring-gen: fail; 257 diff lines; known issue: rounding corner cases in number-to-string coercion
test-numconv-tostring-misc: fail; 6 diff lines; known issue: rounding corner case, 1e+23 string coerces to 1.0000000000000001e+23
test-regexp-empty-quantified: fail; 15 diff lines; known issue: a suitable empty quantified (e.g. &#39;(x*)*&#39;) causes regexp parsing to terminate due to step limit
test-regexp-invalid-charclass: fail; 7 diff lines; known issue: some invalid character classes are accepted (e.g. &#39;[\\d-z]&#39; and &#39;[z-x]&#39;)
test-stmt-for-in-lhs: fail; 29 diff lines; known issue: for-in allows some invalid left-hand-side expressions which cause a runtime ReferenceError instead of a compile-time SyntaxError (e.g. &#39;for (a+b in [0,1]) {...}&#39;)
</code></pre><h3 id="test262" tabindex="-1">test262 <a class="header-anchor" href="#test262" aria-label="Permalink to &quot;test262&quot;">​</a></h3><pre><code>ch12/12.6/12.6.4/12.6.4-2 in non-strict mode   // diagnosed: enumeration corner case issue, see test-bug-enum-shadow-nonenumerable.js
ch15/15.10/15.10.2/15.10.2.5/S15.10.2.5_A1_T5 in non-strict mode   // diagnosed: Duktape bug, matching /(a*)b\\1+/ against &#39;baaaac&#39; causes first capture to match the empty string; the &#39;\\1+&#39; part will then use the &#39;+&#39; quantifier over the empty string.  As there is no handling to empty quantified now, Duktape bails out with a RangeError.
ch15/15.10/15.10.2/15.10.2.9/S15.10.2.9_A1_T5 in non-strict mode   // diagnosed: Duktape bug, matching /(a*)b\\1+/ against &#39;baaac&#39; causes first capture to be empty, the &#39;\\1+&#39; part will then quantify over an empty string leading to Duktape RangeError (there is no proper handling for an empty quantified now)
ch15/15.4/15.4.4/15.4.4.10/S15.4.4.10_A3_T3 in non-strict mode   // diagnosed: probably Duktape bug related to long array corner cases or &#39;length&#39; sign handling (C typing?)
ch15/15.4/15.4.4/15.4.4.12/S15.4.4.12_A3_T3 in non-strict mode   // diagnosed: probably Duktape bug related to long array corner cases or &#39;length&#39; sign handling (C typing?)
ch15/15.4/15.4.4/15.4.4.14/15.4.4.14-5-12 in non-strict mode   // diagnosed: Array length over 2G, not supported right now
ch15/15.4/15.4.4/15.4.4.14/15.4.4.14-5-16 in non-strict mode   // diagnosed: Array length over 2G, not supported right now
ch15/15.4/15.4.4/15.4.4.14/15.4.4.14-9-9 in non-strict mode   // diagnosed: a.indexOf(&lt;n&gt;,4294967290) returns -1 for all indices n=2,3,4,5 but is supposed to return 4294967294 for n=2.  The cause is long array corner case handling, possibly signed length handling (C typing?)
ch15/15.4/15.4.4/15.4.4.15/15.4.4.15-5-12 in non-strict mode   // diagnosed: probably Duktape bug: long array corner cases (C typing?)
ch15/15.4/15.4.4/15.4.4.15/15.4.4.15-5-16 in non-strict mode   // diagnosed: probably Duktape bug: long array corner cases (C typing?)
ch15/15.4/15.4.4/15.4.4.15/15.4.4.15-8-9 in non-strict mode   // diagnosed: probably Duktape bug: long array corner cases (C typing?)
</code></pre>`,16),r=[i];function o(l,d,u,c,p,f){return t(),n("div",null,r)}const b=e(a,[["render",o]]);export{h as __pageData,b as default};

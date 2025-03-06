import{_ as e,c as o,o as t,a3 as r}from"./chunks/framework.DflgEAq4.js";const f=JSON.parse('{"title":"duk_hobject algorithms","description":"","frontmatter":{},"headers":[],"relativePath":"translation/duktape/doc/hobject-algorithms.md","filePath":"translation/duktape/doc/hobject-algorithms.md","lastUpdated":null}'),i={name:"translation/duktape/doc/hobject-algorithms.md"},a=r(`<h1 id="duk-hobject-algorithms" tabindex="-1">duk_hobject algorithms <a class="header-anchor" href="#duk-hobject-algorithms" aria-label="Permalink to &quot;duk_hobject algorithms&quot;">​</a></h1><h2 id="overview" tabindex="-1">Overview <a class="header-anchor" href="#overview" aria-label="Permalink to &quot;Overview&quot;">​</a></h2><h3 id="purpose" tabindex="-1">Purpose <a class="header-anchor" href="#purpose" aria-label="Permalink to &quot;Purpose&quot;">​</a></h3><p>This document and referenced sub-documents discuss, in detail, the internal algorithms for dealing with objects, in particular for object property access. These algorithms are based on the algorithm descriptions in the E5 specification, which have been refined towards the practical implementation needs e.g. by combining multiple algorithms, inlining calls, and inlining &quot;exotic behaviors&quot; (term borrowed from ES2015).</p><p>The intent is to describe versions of the conceptual algorithms most suited for implementation, without actually going into implementation level details. Only complicated core algorithms and built-in methods are covered.</p><p>One important question is to identify the <em>exposed interface</em> of operations invoked from concrete object-related expressions of ECMAScript code. These primitives are also in almost 1:1 relationship with the internal bytecode operations.</p><p>Call and constructor related algorithms (<code>[[Call]]</code> and <code>[[Construct]]</code>) are covered in <code>execution.rst</code>.</p><p>::: note ::: title Note :::</p><p>This document is not completely up-to-date: some special behaviors (like buffer and proxy objects) have been added on top of the algorithms described here. :::</p><h3 id="related-sections-of-e5-specification" tabindex="-1">Related sections of E5 specification <a class="header-anchor" href="#related-sections-of-e5-specification" aria-label="Permalink to &quot;Related sections of E5 specification&quot;">​</a></h3><p>For raw property algorithms:</p><ul><li>E5 Section 8.12: the default algorithms</li><li>E5 Section 8.6.2: one paragraph lists exotic behaviors (page 33, PDF page 43)</li><li>E5 Section 10.6: arguments object</li><li>E5 Section 15.5.5.2: String object</li><li>E5 Section 15.3.4.5.3, 15.3.5.3, 15.3.5.4: Function object</li><li>E5 Section 15.4.5.1: Array object</li></ul><p>For other algorithms:</p><ul><li>E5 Section 8.10.4: FromPropertyDescriptor</li><li>E5 Section 8.10.5: ToPropertyDescriptor</li><li>E5 Section 8.7.1: GetValue</li><li>E5 Section 8.7.2: PutValue</li><li>E5 Section 11.2.1: property accessor expression</li><li>E5 Section 11.13: assignment operators (note that several other places also &quot;evaluate&quot; property accessor expressions)</li><li>E5 Section 11.4.1: <code>delete</code> operator</li><li>E5 Section 11.8.6: <code>instanceof</code> operator</li><li>E5 Section 11.8.7: <code>in</code> operator</li><li>E5 Section 15.2.3.3: <code>Object.getOwnPropertyDescriptor()</code></li><li>E5 Section 15.2.3.6: <code>Object.defineProperty()</code></li><li>E5 Section 15.2.3.7: <code>Object.defineProperties()</code></li></ul><h3 id="algorithm-overview" tabindex="-1">Algorithm overview <a class="header-anchor" href="#algorithm-overview" aria-label="Permalink to &quot;Algorithm overview&quot;">​</a></h3><p>ECMAScript object property access behavior is described by internal property handling algorithms. The default algorithms are described in E5 Section 8.12. There are some objects with exotic behaviors; these have variants of the default property handling algorithms. See <code>hobject-design.rst</code> for a detailed discussion of exotic behaviors.</p><p>The &quot;raw&quot; property algorithms are:</p><ul><li>The default <code>[[GetOwnProperty]](P)</code> algorithm (E5 Section 8.12.1) <ul><li>Modified behavior for: String object (E5 Section 15.5.5.2)</li><li>Modified behavior for: Arguments object created for non-strict functions (E5 Section 10.6)</li></ul></li><li>The default <code>[[GetProperty]](P)</code> algorithm (E5 Section 8.12.1)</li><li>The default <code>[[Get]](P)</code> algorithm (E5 Section 8.12.1) <ul><li>Modified behavior for: Arguments object created for non-strict functions (E5 Section 10.6)</li><li>Modified behavior for: Function object (E5 Section 15.3.5.4)</li><li>Note that exotic behaviors of <code>[[Get]]</code> are &#39;&#39;&#39;not&#39;&#39;&#39; visible through property descriptors at all.</li></ul></li><li>The default <code>[[CanPut]](P)</code> algorithm (E5 Section 8.12.1)</li><li>The default <code>[[Put]](P,V,Throw)</code> algorithm (E5 Section 8.12.1)</li><li>The default <code>[[HasProperty]](P)</code> algorithm (E5 Section 8.12.1) <ul><li>Modified behavior for: Function object (E5 Section 15.3.5.3)</li><li>Modified behavior for: bound Function objects (E5 Section 15.3.4.5.3)</li></ul></li><li>The default <code>[[Delete]](P,Throw)</code> algorithm (E5 Section 8.12.1) <ul><li>Modified behavior for: Arguments object created for non-strict functions (E5 Section 10.6)</li></ul></li><li>The default <code>[[DefineOwnProperty]](P,Desc,Throw)</code> algorithm (E5 Section 8.12.1) <ul><li>Modified behavior for: Array object (E5 Section 15.4.5.1)</li><li>Modified behavior for: Arguments object created for non-strict functions (E5 Section 10.6)</li></ul></li></ul><p>The following figure illustrates the caller-callee relationship between the default property algorithms (the figure would be somewhat different for exotic behavior variants):</p><pre><code>[[Put]]
  |
  |
.----+---------+
|    |         |
|    v         |
[[HasProperty]]  [[Get]] | [[CanPut]]   |
|             |    |   |  |       |
\`--------.    |    |   |  |       |
|    |    |   |  |   .---&#39;
|    |    |   |  |   |
v    v    v   v  |   |
[[Delete]]    [[GetProperty]]  |   |  [[DefineOwnProperty]]
|             |        |   |           |
|             |      .-&#39;   |           |
|             |      |  .--&#39;           |
\`---------.   |      |  |  .-----------&#39;
|   |      |  |  |
v   v      v  v  v
[[GetOwnProperty]]
</code></pre><p>However, these algorithms are only the &quot;raw&quot; property handling algorithms. Actual property access operations in ECMAScript code are &quot;wrapped&quot; by e.g.:</p><ul><li><p>The evaluation rules for the specific expression (e.g. property read). These usually contain type checks, some coercions, etc.</p></li><li><p><code>GetValue()</code> and <code>PutValue()</code> (E5 Section 8.7) are used for property property read/write operations in ECMAScript code. The algorithms are wrappers for <code>[[Get]]</code> and <code>[[Put]]</code> which allow the base reference to be a non-object, coercing it to a (temporary) object first. This allows expressions like:</p><pre><code>print(&quot;foo&quot;.length);
</code></pre></li></ul><h3 id="important-questions" tabindex="-1">Important questions <a class="header-anchor" href="#important-questions" aria-label="Permalink to &quot;Important questions&quot;">​</a></h3><p>From an implementation perspective there are many questions which don&#39;t have an easy answer in the E5 specification, e.g.:</p><ul><li>How are these internal algorithms visible to user code? This exposed interface places hard requirements on viable implementation approaches, whereas internal behavior can be implemented in several ways.</li><li>What do the internal algorithms look like after you &quot;inline&quot; the calls used in the specification (which often obscure the true semantics)?</li><li>What do the internal algorithms look like if exotic behaviors are &quot;inlined&quot; into one algorithm which supports both the default and all the exotic behaviors?</li><li>What do the internal algorithms look like once we add &quot;fast paths&quot; for array index access (where the fast path avoids string interning if possible)?</li><li>What do the internal algorithms look like once we consider the internal <code>duk_hobject</code> representation (e.g. separation between entry and array parts)?</li></ul><p>The purpose of this document is to provide answers to these questions, and act as a basis for implementing the rather tricky required behavior accurately. The internal algorithms are discussed, inlined, and reformulated to a more useful form. The sections are organized on the basis of practical implementations needs, i.e. the context where internal algorithms are actually needed.</p><h3 id="what-s-not-covered" tabindex="-1">What&#39;s not covered? <a class="header-anchor" href="#what-s-not-covered" aria-label="Permalink to &quot;What\\&#39;s not covered?&quot;">​</a></h3><p>This document does not go into full implementation detail in the algorithms. Algorithms remain at a conceptual level. In particular, the following are not covered:</p><ul><li>Relatively simple algorithms or built-in methods are not covered. For instance, <code>Object.defineProperty()</code> is covered but <code>Object.seal()</code> is not, because <code>Object.seal()</code> is simple enough to be implemented (and later verified) directly.</li><li>Reference counts and reachability for garbage collection. These are critical and sometimes difficult to implement correctly.</li><li>Internal errors such as out-of-memory which may happen at any point but are not mentioned in the algorithms. Where appropriate, the steps in abstract algorithms <em>are</em> adjusted to minimize inconsistencies if an internal error occurs.</li><li><code>duk_hobject</code> entry and array part separation, which affects all operations dealing with properties.</li><li>Error <code>message</code> strings for particular kinds of error. The E5 specification only mandates error type (its class) but never mandates any texts.</li><li>Concrete code structure or ordering; actual implementation may have a slightly different structure.</li></ul><h2 id="exposed-interface" tabindex="-1">Exposed interface <a class="header-anchor" href="#exposed-interface" aria-label="Permalink to &quot;Exposed interface&quot;">​</a></h2><h3 id="what-is-an-exposed-interface" tabindex="-1">What is an exposed interface? <a class="header-anchor" href="#what-is-an-exposed-interface" aria-label="Permalink to &quot;What is an exposed interface?&quot;">​</a></h3><p>The relevant <em>exposed interface</em> is the set of object related operations which can be invoked from ECMAScript code, e.g.:</p><pre><code>// property write
o.foo = &quot;bar&quot;;

// property read
print(o.foo);

// property deletion
delete o.foo;

// property existence check
print(&#39;foo&#39; in o);

// object class membership test
print(x instanceof Array);
</code></pre><p>It also covers intricate built-in methods, such as:</p><pre><code>var t = Object.getOwnPropertyDescriptor(o, &#39;foo&#39;);

Object.defineOwnProperty(o, &#39;foo&#39;, { value: &#39;bar&#39; });

Object.defineProperties(o, {
  foo: { value: &#39;bar&#39; },
  bar: { value: &#39;quux&#39; }
});
</code></pre><p>These exposed primitives are discussed in this section.</p><h3 id="contexts-and-property-algorithms-used" tabindex="-1">Contexts and property algorithms used <a class="header-anchor" href="#contexts-and-property-algorithms-used" aria-label="Permalink to &quot;Contexts and property algorithms used&quot;">​</a></h3><p>The following table lists all contexts where property algorithms are invoked from user code. (All <code>Object</code> built-in methods are listed for completeness although not all of them invoke property algorithms.)</p><hr><p>Context Related algorithms / notes</p><hr><p>Property read Property accessor reference, <code>GetValue()</code> for the reference, <code>[[Get]]</code>. If base reference is not an object, <code>[[GetProperty]]</code>, <code>[[Call]]</code>.</p><p>Property write Property accessor reference, <code>PutValue()</code> for the reference, <code>[[Put]]</code>. If base reference is not an object, <code>[[CanPut]]</code>, <code>[[GetOwnProperty]]</code>, <code>[[GetProperty]]</code>, <code>[[Call]]</code>.</p><p>Property <code>delete</code> Property accessor reference, <code>[[Delete]]</code>.</p><p><code>in</code> <code>[[HasProperty]]</code>.</p><p><code>instanceof</code> <code>[[HasInstance]]</code>.</p><p>&quot;for-in&quot; enumeration Enumeration order guarantees, see <code>hobject-design.rst</code>.</p><p><code>Object.getPrototypeOf()</code> Just returns internal prototype.</p><p><code>Object.getOwnPropertyDescriptor()</code> <code>[[GetOwnProperty]]</code>, <code>FromPropertyDescriptor()</code> for a fully populated property descriptor.</p><p><code>Object.getOwnPropertyNames()</code> Creates a result array, uses <code>[[DefineOwnProperty]]</code> internally.</p><p><code>Object.create()</code> No direct use of property algorithms but conceptually calls <code>Object.defineProperties()</code> internally.</p><p><code>Object.defineProperty()</code> <code>ToPropertyDescriptor()</code>, <code>[[DefineOwnProperty]]</code> with an arbitrary descriptor.</p><p><code>Object.defineProperties()</code> <code>ToPropertyDescriptor()</code>, <code>[[DefineOwnProperty[]</code> with an arbitrary descriptor.</p><p><code>Object.seal()</code> <code>[[GetOwnProperty]]</code>, <code>[[DefineOwnProperty]]</code>; sets <code>[[Extensible]]</code> to false.</p><p><code>Object.freeze()</code> <code>[[GetOwnProperty]]</code>, <code>[[DefineOwnProperty]]</code>, sets <code>[[Extensible]]</code> to false.</p><p><code>Object.preventExtensions()</code> Sets <code>[[Extensible]]</code> to false.</p><p><code>Object.isSealed()</code> <code>[[GetOwnProperty]]</code>, reads <code>[[Extensible]]</code>.</p><p><code>Object.isFrozen()</code> <code>[[GetOwnProperty]]</code>, reads <code>[[Extensible]]</code>.</p><p><code>Object.isExtensible()</code> Reads <code>[[Extensible]]</code>.</p><p><code>Object.keys()</code> Key order must match &quot;for-in&quot; enumeration order.</p><h2 id="object-prototype-hasownproperty-getownproperty-does-notuse-hasproperty" tabindex="-1"><code>Object.prototype.hasOwnProperty()</code> <code>[[GetOwnProperty]]</code> (does <em>not</em> use <code>[[HasProperty]]</code>) <a class="header-anchor" href="#object-prototype-hasownproperty-getownproperty-does-notuse-hasproperty" aria-label="Permalink to &quot;\`Object.prototype.hasOwnProperty()\`    \`[[GetOwnProperty]]\` (does *not*
                                         use \`[[HasProperty]]\`)&quot;">​</a></h2><h3 id="central-exposed-primitives" tabindex="-1">Central exposed primitives <a class="header-anchor" href="#central-exposed-primitives" aria-label="Permalink to &quot;Central exposed primitives&quot;">​</a></h3><p>The central exposed primitives are as follows. Some have been given an internal name which corresponds to the bytecode instruction:</p><ul><li>GETPROP: property read expression: coercion wrapping, <code>GetValue()</code>, <code>[[Get]]</code>, and a special <code>[[Get]]</code> variant if base is primitive</li><li>PUTPROP: property write expression: coercion wrapping, <code>PutValue()</code>, <code>[[Put]]</code>, and a special <code>[[Put]]</code> variant if base is primitive</li><li>DELPROP: <code>delete</code> operator: coercion wrapping, <code>[[Delete]]</code></li><li>HASPROP: <code>in</code> operator: type check wrapping, <code>[[HasProperty]]</code></li><li>INSTOF: <code>instanceof</code> operator: type check wrapping, <code>[[HasInstance]]</code><ul><li>Not a property related primitive directly, but tied to the prototype chain</li></ul></li><li><code>Object.getOwnPropertyDescriptor()</code><ul><li>But not <code>[[GetOwnProperty]]</code> or <code>[[GetProperty]]</code> directly</li><li>Not &quot;fast path&quot; so implementation should be compact</li><li>Only throwing variant (<code>Throw</code> is <code>true</code>)</li></ul></li><li><code>Object.defineProperty()</code> and <code>Object.defineProperties()</code><ul><li>But not <code>[[DefineOwnProperty]]</code> directly</li><li>Not &quot;fast path&quot; so implementation should be compact</li><li>Only throwing variant (<code>Throw</code> is <code>true</code>)</li></ul></li></ul><p>These are used to implement the basic property related run-time operations and some difficult built-in functions. They are also used to implement the C API and are also basic bytecode operations.</p><p>The remaining primitives (like <code>Object.seal()</code> etc) are trivial in comparison, and are not analyzed in this document.</p><h3 id="notes" tabindex="-1">Notes <a class="header-anchor" href="#notes" aria-label="Permalink to &quot;Notes&quot;">​</a></h3><ul><li><code>Object.getOwnPropertyDescriptor()</code>, <code>Object.defineProperty()</code>, and <code>Object.defineProperties()</code> are the only exposed interfaces where property descriptors are explicitly exposed to user code, and also the only places where property descriptors are converted between internal and external forms. All other exposed interfaces deal with property descriptors and attributes internally only. These methods always set the <code>Throw</code> flag to <code>true</code>, so the exposed implementation only needs to have a &quot;throwing&quot; variant.</li><li>Property read and write handle a non-object base object with a specific variant for the basic <code>[[Get]]</code> and <code>[[Put]]</code>, defined in E5 Sections 8.7.1 and 8.7.2 (<code>GetValue()</code> and <code>PutValue()</code>). Property delete uses a normal <code>ToObject()</code> coercion and then calls <code>[[Delete]]</code> normally. Property existence check (<code>in</code>) does a type check and throws an error if an argument is not already an object. So, coercion behavior is a bit different in each context.</li><li>Property References are established when parsing property access expressions, E5 Section 11.2.1.</li><li>Property References are used as right-hand-side values and read using <code>GetValue()</code> from various places: <ul><li>Array initializer</li><li>Object initializer</li><li>Grouping operator (parentheses)</li><li>Property accessor (e.g. <code>x[&#39;foo&#39;][&#39;bar&#39;]</code>)</li><li><code>new</code> operator</li><li>Function calls</li><li>Postfix and prefix increment/decrement</li><li><code>void</code> operator</li><li>Unary operators (plus, minus, bitwise and logical NOT)</li><li>Binary operators (additive and multiplicative expressions, bitwise, logical, and comparison operations)</li><li><code>instanceof</code> operator</li><li><code>in</code> operator</li><li>Conditional operator (<code>?:</code>)</li><li>Simple and compound assignment (right hand side)</li><li>Comma operator (<code>,</code>)</li><li>Variable declaration initializer</li><li><code>if</code>, <code>do-while</code>, <code>while</code>, <code>for</code>, <code>for-in</code>, <code>with</code> statements</li><li><code>throw</code> statement</li></ul></li><li>Property references are used as left-hand-side values and written using <code>PutValue()</code> from various places: <ul><li>Postfix and prefix increment/decrement</li><li>Simple and compound assignment</li><li>Variable declaration initializer</li><li><code>for</code> and <code>for-in</code> statements</li></ul></li></ul><h2 id="detailed-algorithms" tabindex="-1">Detailed algorithms <a class="header-anchor" href="#detailed-algorithms" aria-label="Permalink to &quot;Detailed algorithms&quot;">​</a></h2><p>Document Description</p><hr><p><code>hobject-alg-preliminaries</code> preliminary algorithm work <code>hobject-alg-exoticbehaviors</code> standard algorithms with exotic behaviors inlined <code>hobject-alg-getprop</code> property read <code>hobject-alg-putprop</code> property write <code>hobject-alg-delprop</code> property deletion <code>hobject-alg-hasprop</code> property existence check <code>hobject-alg-instof</code> <code>instanceof</code> operator <code>hobject-alg-getownpropertydescriptor</code> <code>Object.getOwnPropertyDescriptor()</code><code>hobject-alg-defineproperty</code> <code>Object.defineProperty()</code><code>hobject-alg-defineproperties</code> <code>Object.defineProperties()</code></p><h2 id="future-work" tabindex="-1">Future work <a class="header-anchor" href="#future-work" aria-label="Permalink to &quot;Future work&quot;">​</a></h2><ul><li>Add ES2015 Proxy object or a Lua metatable-like mechanism and integrate it into the ECMAScript algorithms in a natural way (<code>[[Get]]</code>, <code>[[GetOwnProperty]]</code>, <code>[[HasProperty]]</code>, and <code>[[DefineOwnProperty]]</code> most likely).</li><li>Integrate other ES2015 features into the basic object representation, with possible some impact on these algorithms.</li><li>Array fast path improvements for both reading of non-existent elements and writing elements in general.</li><li>Review the algorithms for robustness against internal errors such as out of memory. The order of operations should be chosen to minimize any inconsistency in state if an internal error occurs.</li></ul>`,74),c=[a];function n(l,d,s,p,h,u){return t(),o("div",null,c)}const b=e(i,[["render",n]]);export{f as __pageData,b as default};

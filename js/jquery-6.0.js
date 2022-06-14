{\rtf1\ansi\deff0\nouicompat{\fonttbl{\f0\fnil\fcharset0 SimSun;}}
{\colortbl ;\red0\green0\blue255;}
{\*\generator Riched20 10.0.19041}\viewkind4\uc1 
\pard\sa200\sl276\slmult1\f0\fs22\lang2052 /*!\par
 * jQuery JavaScript Library v3.6.0\par
 * {{\field{\*\fldinst{HYPERLINK https://jquery.com/ }}{\fldrslt{https://jquery.com/\ul0\cf0}}}}\f0\fs22\par
 *\par
 * Includes Sizzle.js\par
 * {{\field{\*\fldinst{HYPERLINK https://sizzlejs.com/ }}{\fldrslt{https://sizzlejs.com/\ul0\cf0}}}}\f0\fs22\par
 *\par
 * Copyright OpenJS Foundation and other contributors\par
 * Released under the MIT license\par
 * {{\field{\*\fldinst{HYPERLINK https://jquery.org/license }}{\fldrslt{https://jquery.org/license\ul0\cf0}}}}\f0\fs22\par
 *\par
 * Date: 2021-03-02T17:08Z\par
 */\par
( function( global, factory ) \{\par
\par
\tab "use strict";\par
\par
\tab if ( typeof module === "object" && typeof module.exports === "object" ) \{\par
\par
\tab\tab // For CommonJS and CommonJS-like environments where a proper `window`\par
\tab\tab // is present, execute the factory and get jQuery.\par
\tab\tab // For environments that do not have a `window` with a `document`\par
\tab\tab // (such as Node.js), expose a factory as module.exports.\par
\tab\tab // This accentuates the need for the creation of a real `window`.\par
\tab\tab // e.g. var jQuery = require("jquery")(window);\par
\tab\tab // See ticket #14549 for more info.\par
\tab\tab module.exports = global.document ?\par
\tab\tab\tab factory( global, true ) :\par
\tab\tab\tab function( w ) \{\par
\tab\tab\tab\tab if ( !w.document ) \{\par
\tab\tab\tab\tab\tab throw new Error( "jQuery requires a window with a document" );\par
\tab\tab\tab\tab\}\par
\tab\tab\tab\tab return factory( w );\par
\tab\tab\tab\};\par
\tab\} else \{\par
\tab\tab factory( global );\par
\tab\}\par
\par
// Pass this if window is not defined yet\par
\} )( typeof window !== "undefined" ? window : this, function( window, noGlobal ) \{\par
\par
// Edge <= 12 - 13+, Firefox <=18 - 45+, IE 10 - 11, Safari 5.1 - 9+, iOS 6 - 9.1\par
// throw exceptions when non-strict code (e.g., ASP.NET 4.5) accesses strict mode\par
// arguments.callee.caller (trac-13335). But as of jQuery 3.0 (2016), strict mode should be common\par
// enough that all such attempts are guarded in a try block.\par
"use strict";\par
\par
var arr = [];\par
\par
var getProto = Object.getPrototypeOf;\par
\par
var slice = arr.slice;\par
\par
var flat = arr.flat ? function( array ) \{\par
\tab return arr.flat.call( array );\par
\} : function( array ) \{\par
\tab return arr.concat.apply( [], array );\par
\};\par
\par
\par
var push = arr.push;\par
\par
var indexOf = arr.indexOf;\par
\par
var class2type = \{\};\par
\par
var toString = class2type.toString;\par
\par
var hasOwn = class2type.hasOwnProperty;\par
\par
var fnToString = hasOwn.toString;\par
\par
var ObjectFunctionString = fnToString.call( Object );\par
\par
var support = \{\};\par
\par
var isFunction = function isFunction( obj ) \{\par
\par
\tab\tab // Support: Chrome <=57, Firefox <=52\par
\tab\tab // In some browsers, typeof returns "function" for HTML <object> elements\par
\tab\tab // (i.e., `typeof document.createElement( "object" ) === "function"`).\par
\tab\tab // We don't want to classify *any* DOM node as a function.\par
\tab\tab // Support: QtWeb <=3.8.5, WebKit <=534.34, wkhtmltopdf tool <=0.12.5\par
\tab\tab // Plus for old WebKit, typeof returns "function" for HTML collections\par
\tab\tab // (e.g., `typeof document.getElementsByTagName("div") === "function"`). (gh-4756)\par
\tab\tab return typeof obj === "function" && typeof obj.nodeType !== "number" &&\par
\tab\tab\tab typeof obj.item !== "function";\par
\tab\};\par
\par
\par
var isWindow = function isWindow( obj ) \{\par
\tab\tab return obj != null && obj === obj.window;\par
\tab\};\par
\par
\par
var document = window.document;\par
\par
\par
\par
\tab var preservedScriptAttributes = \{\par
\tab\tab type: true,\par
\tab\tab src: true,\par
\tab\tab nonce: true,\par
\tab\tab noModule: true\par
\tab\};\par
\par
\tab function DOMEval( code, node, doc ) \{\par
\tab\tab doc = doc || document;\par
\par
\tab\tab var i, val,\par
\tab\tab\tab script = doc.createElement( "script" );\par
\par
\tab\tab script.text = code;\par
\tab\tab if ( node ) \{\par
\tab\tab\tab for ( i in preservedScriptAttributes ) \{\par
\par
\tab\tab\tab\tab // Support: Firefox 64+, Edge 18+\par
\tab\tab\tab\tab // Some browsers don't support the "nonce" property on scripts.\par
\tab\tab\tab\tab // On the other hand, just using `getAttribute` is not enough as\par
\tab\tab\tab\tab // the `nonce` attribute is reset to an empty string whenever it\par
\tab\tab\tab\tab // becomes browsing-context connected.\par
\tab\tab\tab\tab // See {{\field{\*\fldinst{HYPERLINK https://github.com/whatwg/html/issues/2369 }}{\fldrslt{https://github.com/whatwg/html/issues/2369\ul0\cf0}}}}\f0\fs22\par
\tab\tab\tab\tab // See {{\field{\*\fldinst{HYPERLINK https://html.spec.whatwg.org/#nonce-attributes }}{\fldrslt{https://html.spec.whatwg.org/#nonce-attributes\ul0\cf0}}}}\f0\fs22\par
\tab\tab\tab\tab // The `node.getAttribute` check was added for the sake of\par
\tab\tab\tab\tab // `jQuery.globalEval` so that it can fake a nonce-containing node\par
\tab\tab\tab\tab // via an object.\par
\tab\tab\tab\tab val = node[ i ] || node.getAttribute && node.getAttribute( i );\par
\tab\tab\tab\tab if ( val ) \{\par
\tab\tab\tab\tab\tab script.setAttribute( i, val );\par
\tab\tab\tab\tab\}\par
\tab\tab\tab\}\par
\tab\tab\}\par
\tab\tab doc.head.appendChild( script ).parentNode.removeChild( script );\par
\tab\}\par
\par
\par
function toType( obj ) \{\par
\tab if ( obj == null ) \{\par
\tab\tab return obj + "";\par
\tab\}\par
\par
\tab // Support: Android <=2.3 only (functionish RegExp)\par
\tab return typeof obj === "object" || typeof obj === "function" ?\par
\tab\tab class2type[ toString.call( obj ) ] || "object" :\par
\tab\tab typeof obj;\par
\}\par
/* global Symbol */\par
// Defining this global in .eslintrc.json would create a danger of using the global\par
// unguarded in another place, it seems safer to define global only for this module\par
\par
\par
\par
var\par
\tab version = "3.6.0",\par
\par
\tab // Define a local copy of jQuery\par
\tab jQuery = function( selector, context ) \{\par
\par
\tab\tab // The jQuery object is actually just the init constructor 'enhanced'\par
\tab\tab // Need init if jQuery is called (just allow error to be thrown if not included)\par
\tab\tab return new jQuery.fn.init( selector, context );\par
\tab\};\par
\par
jQuery.fn = jQuery.prototype = \{\par
\par
\tab // The current version of jQuery being used\par
\tab jquery: version,\par
\par
\tab constructor: jQuery,\par
\par
\tab // The default length of a jQuery object is 0\par
\tab length: 0,\par
\par
\tab toArray: function() \{\par
\tab\tab return slice.call( this );\par
\tab\},\par
\par
\tab // Get the Nth element in the matched element set OR\par
\tab // Get the whole matched element set as a clean array\par
\tab get: function( num ) \{\par
\par
\tab\tab // Return all the elements in a clean array\par
\tab\tab if ( num == null ) \{\par
\tab\tab\tab return slice.call( this );\par
\tab\tab\}\par
\par
\tab\tab // Return just the one element from the set\par
\tab\tab return num < 0 ? this[ num + this.length ] : this[ num ];\par
\tab\},\par
\par
\tab // Take an array of elements and push it onto the stack\par
\tab // (returning the new matched element set)\par
\tab pushStack: function( elems ) \{\par
\par
\tab\tab // Build a new jQuery matched element set\par
\tab\tab var ret = jQuery.merge( this.constructor(), elems );\par
\par
\tab\tab // Add the old object onto the stack (as a reference)\par
\tab\tab ret.prevObject = this;\par
\par
\tab\tab // Return the newly-formed element set\par
\tab\tab return ret;\par
\tab\},\par
\par
\tab // Execute a callback for every element in the matched set.\par
\tab each: function( callback ) \{\par
\tab\tab return jQuery.each( this, callback );\par
\tab\},\par
\par
\tab map: function( callback ) \{\par
\tab\tab return this.pushStack( jQuery.map( this, function( elem, i ) \{\par
\tab\tab\tab return callback.call( elem, i, elem );\par
\tab\tab\} ) );\par
\tab\},\par
\par
\tab slice: function() \{\par
\tab\tab return this.pushStack( slice.apply( this, arguments ) );\par
\tab\},\par
\par
\tab first: function() \{\par
\tab\tab return this.eq( 0 );\par
\tab\},\par
\par
\tab last: function() \{\par
\tab\tab return this.eq( -1 );\par
\tab\},\par
\par
\tab even: function() \{\par
\tab\tab return this.pushStack( jQuery.grep( this, function( _elem, i ) \{\par
\tab\tab\tab return ( i + 1 ) % 2;\par
\tab\tab\} ) );\par
\tab\},\par
\par
\tab odd: function() \{\par
\tab\tab return this.pushStack( jQuery.grep( this, function( _elem, i ) \{\par
\tab\tab\tab return i % 2;\par
\tab\tab\} ) );\par
\tab\},\par
\par
\tab eq: function( i ) \{\par
\tab\tab var len = this.length,\par
\tab\tab\tab j = +i + ( i < 0 ? len : 0 );\par
\tab\tab return this.pushStack( j >= 0 && j < len ? [ this[ j ] ] : [] );\par
\tab\},\par
\par
\tab end: function() \{\par
\tab\tab return this.prevObject || this.constructor();\par
\tab\},\par
\par
\tab // For internal use only.\par
\tab // Behaves like an Array's method, not like a jQuery method.\par
\tab push: push,\par
\tab sort: arr.sort,\par
\tab splice: arr.splice\par
\};\par
\par
jQuery.extend = jQuery.fn.extend = function() \{\par
\tab var options, name, src, copy, copyIsArray, clone,\par
\tab\tab target = arguments[ 0 ] || \{\},\par
\tab\tab i = 1,\par
\tab\tab length = arguments.length,\par
\tab\tab deep = false;\par
\par
\tab // Handle a deep copy situation\par
\tab if ( typeof target === "boolean" ) \{\par
\tab\tab deep = target;\par
\par
\tab\tab // Skip the boolean and the target\par
\tab\tab target = arguments[ i ] || \{\};\par
\tab\tab i++;\par
\tab\}\par
\par
\tab // Handle case when target is a string or something (possible in deep copy)\par
\tab if ( typeof target !== "object" && !isFunction( target ) ) \{\par
\tab\tab target = \{\};\par
\tab\}\par
\par
\tab // Extend jQuery itself if only one argument is passed\par
\tab if ( i === length ) \{\par
\tab\tab target = this;\par
\tab\tab i--;\par
\tab\}\par
\par
\tab for ( ; i < length; i++ ) \{\par
\par
\tab\tab // Only deal with non-null/undefined values\par
\tab\tab if ( ( options = arguments[ i ] ) != null ) \{\par
\par
\tab\tab\tab // Extend the base object\par
\tab\tab\tab for ( name in options ) \{\par
\tab\tab\tab\tab copy = options[ name ];\par
\par
\tab\tab\tab\tab // Prevent Object.prototype pollution\par
\tab\tab\tab\tab // Prevent never-ending loop\par
\tab\tab\tab\tab if ( name === "__proto__" || target === copy ) \{\par
\tab\tab\tab\tab\tab continue;\par
\tab\tab\tab\tab\}\par
\par
\tab\tab\tab\tab // Recurse if we're merging plain objects or arrays\par
\tab\tab\tab\tab if ( deep && copy && ( jQuery.isPlainObject( copy ) ||\par
\tab\tab\tab\tab\tab ( copyIsArray = Array.isArray( copy ) ) ) ) \{\par
\tab\tab\tab\tab\tab src = target[ name ];\par
\par
\tab\tab\tab\tab\tab // Ensure proper type for the source value\par
\tab\tab\tab\tab\tab if ( copyIsArray && !Array.isArray( src ) ) \{\par
\tab\tab\tab\tab\tab\tab clone = [];\par
\tab\tab\tab\tab\tab\} else if ( !copyIsArray && !jQuery.isPlainObject( src ) ) \{\par
\tab\tab\tab\tab\tab\tab clone = \{\};\par
\tab\tab\tab\tab\tab\} else \{\par
\tab\tab\tab\tab\tab\tab clone = src;\par
\tab\tab\tab\tab\tab\}\par
\tab\tab\tab\tab\tab copyIsArray = false;\par
\par
\tab\tab\tab\tab\tab // Never move original objects, clone them\par
\tab\tab\tab\tab\tab target[ name ] = jQuery.extend( deep, clone, copy );\par
\par
\tab\tab\tab\tab // Don't bring in undefined values\par
\tab\tab\tab\tab\} else if ( copy !== undefined ) \{\par
\tab\tab\tab\tab\tab target[ name ] = copy;\par
\tab\tab\tab\tab\}\par
\tab\tab\tab\}\par
\tab\tab\}\par
\tab\}\par
\par
\tab // Return the modified object\par
\tab return target;\par
\};\par
\par
jQuery.extend( \{\par
\par
\tab // Unique for each copy of jQuery on the page\par
\tab expando: "jQuery" + ( version + Math.random() ).replace( /\\D/g, "" ),\par
\par
\tab // Assume jQuery is ready without the ready module\par
\tab isReady: true,\par
\par
\tab error: function( msg ) \{\par
\tab\tab throw new Error( msg );\par
\tab\},\par
\par
\tab noop: function() \{\},\par
\par
\tab isPlainObject: function( obj ) \{\par
\tab\tab var proto, Ctor;\par
\par
\tab\tab // Detect obvious negatives\par
\tab\tab // Use toString instead of jQuery.type to catch host objects\par
\tab\tab if ( !obj || toString.call( obj ) !== "[object Object]" ) \{\par
\tab\tab\tab return false;\par
\tab\tab\}\par
\par
\tab\tab proto = getProto( obj );\par
\par
\tab\tab // Objects with no prototype (e.g., `Object.create( null )`) are plain\par
\tab\tab if ( !proto ) \{\par
\tab\tab\tab return true;\par
\tab\tab\}\par
\par
\tab\tab // Objects with prototype are plain iff they were constructed by a global Object function\par
\tab\tab Ctor = hasOwn.call( proto, "constructor" ) && proto.constructor;\par
\tab\tab return typeof Ctor === "function" && fnToString.call( Ctor ) === ObjectFunctionString;\par
\tab\},\par
\par
\tab isEmptyObject: function( obj ) \{\par
\tab\tab var name;\par
\par
\tab\tab for ( name in obj ) \{\par
\tab\tab\tab return false;\par
\tab\tab\}\par
\tab\tab return true;\par
\tab\},\par
\par
\tab // Evaluates a script in a provided context; falls back to the global one\par
\tab // if not specified.\par
\tab globalEval: function( code, options, doc ) \{\par
\tab\tab DOMEval( code, \{ nonce: options && options.nonce \}, doc );\par
\tab\},\par
\par
\tab each: function( obj, callback ) \{\par
\tab\tab var length, i = 0;\par
\par
\tab\tab if ( isArrayLike( obj ) ) \{\par
\tab\tab\tab length = obj.length;\par
\tab\tab\tab for ( ; i < length; i++ ) \{\par
\tab\tab\tab\tab if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) \{\par
\tab\tab\tab\tab\tab break;\par
\tab\tab\tab\tab\}\par
\tab\tab\tab\}\par
\tab\tab\} else \{\par
\tab\tab\tab for ( i in obj ) \{\par
\tab\tab\tab\tab if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) \{\par
\tab\tab\tab\tab\tab break;\par
\tab\tab\tab\tab\}\par
\tab\tab\tab\}\par
\tab\tab\}\par
\par
\tab\tab return obj;\par
\tab\},\par
\par
\tab // results is for internal usage only\par
\tab makeArray: function( arr, results ) \{\par
\tab\tab var ret = results || [];\par
\par
\tab\tab if ( arr != null ) \{\par
\tab\tab\tab if ( isArrayLike( Object( arr ) ) ) \{\par
\tab\tab\tab\tab jQuery.merge( ret,\par
\tab\tab\tab\tab\tab typeof arr === "string" ?\par
\tab\tab\tab\tab\tab\tab [ arr ] : arr\par
\tab\tab\tab\tab );\par
\tab\tab\tab\} else \{\par
\tab\tab\tab\tab push.call( ret, arr );\par
\tab\tab\tab\}\par
\tab\tab\}\par
\par
\tab\tab return ret;\par
\tab\},\par
\par
\tab inArray: function( elem, arr, i ) \{\par
\tab\tab return arr == null ? -1 : indexOf.call( arr, elem, i );\par
\tab\},\par
\par
\tab // Support: Android <=4.0 only, PhantomJS 1 only\par
\tab // push.apply(_, arraylike) throws on ancient WebKit\par
\tab merge: function( first, second ) \{\par
\tab\tab var len = +second.length,\par
\tab\tab\tab j = 0,\par
\tab\tab\tab i = first.length;\par
\par
\tab\tab for ( ; j < len; j++ ) \{\par
\tab\tab\tab first[ i++ ] = second[ j ];\par
\tab\tab\}\par
\par
\tab\tab first.length = i;\par
\par
\tab\tab return first;\par
\tab\},\par
\par
\tab grep: function( elems, callback, invert ) \{\par
\tab\tab var callbackInverse,\par
\tab\tab\tab matches = [],\par
\tab\tab\tab i = 0,\par
\tab\tab\tab length = elems.length,\par
\tab\tab\tab callbackExpect = !invert;\par
\par
\tab\tab // Go through the array, only saving the items\par
\tab\tab // that pass the validator function\par
\tab\tab for ( ; i < length; i++ ) \{\par
\tab\tab\tab callbackInverse = !callback( elems[ i ], i );\par
\tab\tab\tab if ( callbackInverse !== callbackExpect ) \{\par
\tab\tab\tab\tab matches.push( elems[ i ] );\par
\tab\tab\tab\}\par
\tab\tab\}\par
\par
\tab\tab return matches;\par
\tab\},\par
\par
\tab // arg is for internal usage only\par
\tab map: function( elems, callback, arg ) \{\par
\tab\tab var length, value,\par
\tab\tab\tab i = 0,\par
\tab\tab\tab ret = [];\par
\par
\tab\tab // Go through the array, translating each of the items to their new values\par
\tab\tab if ( isArrayLike( elems ) ) \{\par
\tab\tab\tab length = elems.length;\par
\tab\tab\tab for ( ; i < length; i++ ) \{\par
\tab\tab\tab\tab value = callback( elems[ i ], i, arg );\par
\par
\tab\tab\tab\tab if ( value != null ) \{\par
\tab\tab\tab\tab\tab ret.push( value );\par
\tab\tab\tab\tab\}\par
\tab\tab\tab\}\par
\par
\tab\tab // Go through every key on the object,\par
\tab\tab\} else \{\par
\tab\tab\tab for ( i in elems ) \{\par
\tab\tab\tab\tab value = callback( elems[ i ], i, arg );\par
\par
\tab\tab\tab\tab if ( value != null ) \{\par
\tab\tab\tab\tab\tab ret.push( value );\par
\tab\tab\tab\tab\}\par
\tab\tab\tab\}\par
\tab\tab\}\par
\par
\tab\tab // Flatten any nested arrays\par
\tab\tab return flat( ret );\par
\tab\},\par
\par
\tab // A global GUID counter for objects\par
\tab guid: 1,\par
\par
\tab // jQuery.support is not used in Core but other projects attach their\par
\tab // properties to it so it needs to exist.\par
\tab support: support\par
\} );\par
\par
if ( typeof Symbol === "function" ) \{\par
\tab jQuery.fn[ Symbol.iterator ] = arr[ Symbol.iterator ];\par
\}\par
\par
// Populate the class2type map\par
jQuery.each( "Boolean Number String Function Array Date RegExp Object Error Symbol".split( " " ),\par
\tab function( _i, name ) \{\par
\tab\tab class2type[ "[object " + name + "]" ] = name.toLowerCase();\par
\tab\} );\par
\par
function isArrayLike( obj ) \{\par
\par
\tab // Support: real iOS 8.2 only (not reproducible in simulator)\par
\tab // `in` check used to prevent JIT error (gh-2145)\par
\tab // hasOwn isn't used here due to false negatives\par
\tab // regarding Nodelist length in IE\par
\tab var length = !!obj && "length" in obj && obj.length,\par
\tab\tab type = toType( obj );\par
\par
\tab if ( isFunction( obj ) || isWindow( obj ) ) \{\par
\tab\tab return false;\par
\tab\}\par
\par
\tab return type === "array" || length === 0 ||\par
\tab\tab typeof length === "number" && length > 0 && ( length - 1 ) in obj;\par
\}\par
var Sizzle =\par
/*!\par
 * Sizzle CSS Selector Engine v2.3.6\par
 * {{\field{\*\fldinst{HYPERLINK https://sizzlejs.com/ }}{\fldrslt{https://sizzlejs.com/\ul0\cf0}}}}\f0\fs22\par
 *\par
 * Copyright JS Foundation and other contributors\par
 * Released under the MIT license\par
 * {{\field{\*\fldinst{HYPERLINK https://js.foundation/ }}{\fldrslt{https://js.foundation/\ul0\cf0}}}}\f0\fs22\par
 *\par
 * Date: 2021-02-16\par
 */\par
( function( window ) \{\par
var i,\par
\tab support,\par
\tab Expr,\par
\tab getText,\par
\tab isXML,\par
\tab tokenize,\par
\tab compile,\par
\tab select,\par
\tab outermostContext,\par
\tab sortInput,\par
\tab hasDuplicate,\par
\par
\tab // Local document vars\par
\tab setDocument,\par
\tab document,\par
\tab docElem,\par
\tab documentIsHTML,\par
\tab rbuggyQSA,\par
\tab rbuggyMatches,\par
\tab matches,\par
\tab contains,\par
\par
\tab // Instance-specific data\par
\tab expando = "sizzle" + 1 * new Date(),\par
\tab preferredDoc = window.document,\par
\tab dirruns = 0,\par
\tab done = 0,\par
\tab classCache = createCache(),\par
\tab tokenCache = createCache(),\par
\tab compilerCache = createCache(),\par
\tab nonnativeSelectorCache = createCache(),\par
\tab sortOrder = function( a, b ) \{\par
\tab\tab if ( a === b ) \{\par
\tab\tab\tab hasDuplicate = true;\par
\tab\tab\}\par
\tab\tab return 0;\par
\tab\},\par
\par
\tab // Instance methods\par
\tab hasOwn = ( \{\} ).hasOwnProperty,\par
\tab arr = [],\par
\tab pop = arr.pop,\par
\tab pushNative = arr.push,\par
\tab push = arr.push,\par
\tab slice = arr.slice,\par
\par
\tab // Use a stripped-down indexOf as it's faster than native\par
\tab // {{\field{\*\fldinst{HYPERLINK https://jsperf.com/thor-indexof-vs-for/5 }}{\fldrslt{https://jsperf.com/thor-indexof-vs-for/5\ul0\cf0}}}}\f0\fs22\par
\tab indexOf = function( list, elem ) \{\par
\tab\tab var i = 0,\par
\tab\tab\tab len = list.length;\par
\tab\tab for ( ; i < len; i++ ) \{\par
\tab\tab\tab if ( list[ i ] === elem ) \{\par
\tab\tab\tab\tab return i;\par
\tab\tab\tab\}\par
\tab\tab\}\par
\tab\tab return -1;\par
\tab\},\par
\par
\tab booleans = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|" +\par
\tab\tab "ismap|loop|multiple|open|readonly|required|scoped",\par
\par
\tab // Regular expressions\par
\par
\tab // {{\field{\*\fldinst{HYPERLINK http://www.w3.org/TR/css3-selectors/#whitespace }}{\fldrslt{http://www.w3.org/TR/css3-selectors/#whitespace\ul0\cf0}}}}\f0\fs22\par
\tab whitespace = "[{{\field{\*\fldinst{HYPERLINK "\\\\\\\\x20\\\\\\\\t\\\\\\\\r\\\\\\\\n\\\\\\\\f"}}{\fldrslt{\\\\x20\\\\t\\\\r\\\\n\\\\f\ul0\cf0}}}}\f0\fs22 ]",\par
\par
\tab // {{\field{\*\fldinst{HYPERLINK https://www.w3.org/TR/css-syntax-3/#ident-token-diagram }}{\fldrslt{https://www.w3.org/TR/css-syntax-3/#ident-token-diagram\ul0\cf0}}}}\f0\fs22\par
\tab identifier = "(?:\\\\\\\\[\\\\da-fA-F]\{1,6\}" + whitespace +\par
\tab\tab "?|\\\\\\\\[^\\\\r\\\\n\\\\f]|[\\\\w-]|[^\\0-\\\\x7f])+",\par
\par
\tab // Attribute selectors: {{\field{\*\fldinst{HYPERLINK http://www.w3.org/TR/selectors/#attribute-selectors }}{\fldrslt{http://www.w3.org/TR/selectors/#attribute-selectors\ul0\cf0}}}}\f0\fs22\par
\tab attributes = "{{\field{\*\fldinst{HYPERLINK "\\\\\\\\["}}{\fldrslt{\\\\[\ul0\cf0}}}}\f0\fs22 " + whitespace + "*(" + identifier + ")(?:" + whitespace +\par
\par
\tab\tab // Operator (capture 2)\par
\tab\tab "*([*^$|!~]?=)" + whitespace +\par
\par
\tab\tab // "Attribute values must be CSS identifiers [capture 5]\par
\tab\tab // or strings [capture 3 or capture 4]"\par
\tab\tab "*(?:'((?:\\\\\\\\.|[^\\\\\\\\'])*)'|\\"((?:\\\\\\\\.|[^\\\\\\\\\\"])*)\\"|(" + identifier + "))|)" +\par
\tab\tab whitespace + "*\\\\]",\par
\par
\tab pseudos = ":(" + identifier + ")(?:\\\\((" +\par
\par
\tab\tab // To reduce the number of selectors needing tokenize in the preFilter, prefer arguments:\par
\tab\tab // 1. quoted (capture 3; capture 4 or capture 5)\par
\tab\tab "('((?:\\\\\\\\.|[^\\\\\\\\'])*)'|\\"((?:\\\\\\\\.|[^\\\\\\\\\\"])*)\\")|" +\par
\par
\tab\tab // 2. simple (capture 6)\par
\tab\tab "((?:\\\\\\\\.|[^\\\\\\\\()[\\\\]]|" + attributes + ")*)|" +\par
\par
\tab\tab // 3. anything else (capture 2)\par
\tab\tab ".*" +\par
\tab\tab "){{\field{\*\fldinst{HYPERLINK "\\\\\\\\)|"}}{\fldrslt{\\\\)|\ul0\cf0}}}}\f0\fs22 )",\par
\par
\tab // Leading and non-escaped trailing whitespace, capturing some non-whitespace characters preceding the latter\par
\tab rwhitespace = new RegExp( whitespace + "+", "g" ),\par
\tab rtrim = new RegExp( "^" + whitespace + "+|((?:^|[^\\\\\\\\])(?:\\\\\\\\.)*)" +\par
\tab\tab whitespace + "+$", "g" ),\par
\par
\tab rcomma = new RegExp( "^" + whitespace + "*," + whitespace + "*" ),\par
\tab rcombinators = new RegExp( "^" + whitespace + "*([>+~]|" + whitespace + ")" + whitespace +\par
\tab\tab "*" ),\par
\tab rdescend = new RegExp( whitespace + "|>" ),\par
\par
\tab rpseudo = new RegExp( pseudos ),\par
\tab ridentifier = new RegExp( "^" + identifier + "$" ),\par
\par
\tab matchExpr = \{\par
\tab\tab "ID": new RegExp( "^#(" + identifier + ")" ),\par
\tab\tab "CLASS": new RegExp( "^\\\\.(" + identifier + ")" ),\par
\tab\tab "TAG": new RegExp( "^(" + identifier + "|[*])" ),\par
\tab\tab "ATTR": new RegExp( "^" + attributes ),\par
\tab\tab "PSEUDO": new RegExp( "^" + pseudos ),\par
\tab\tab "CHILD": new RegExp( "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\\\(" +\par
\tab\tab\tab whitespace + "*(even|odd|(([+-]|)(\\\\d*)n|)" + whitespace + "*(?:([+-]|)" +\par
\tab\tab\tab whitespace + "*(\\\\d+)|))" + whitespace + "*\\\\)|)", "i" ),\par
\tab\tab "bool": new RegExp( "^(?:" + booleans + ")$", "i" ),\par
\par
\tab\tab // For use in libraries implementing .is()\par
\tab\tab // We use this for POS matching in `select`\par
\tab\tab "needsContext": new RegExp( "^" + whitespace +\par
\tab\tab\tab "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\\\(" + whitespace +\par
\tab\tab\tab "*((?:-\\\\d)?\\\\d*)" + whitespace + "*\\\\)|)(?=[^-]|$)", "i" )\par
\tab\},\par
\par
\tab rhtml = /HTML$/i,\par
\tab rinputs = /^(?:input|select|textarea|button)$/i,\par
\tab rheader = /^h\\d$/i,\par
\par
\tab rnative = /^[^\{]+\\\{\\s*\\[native \\w/,\par
\par
\tab // Easily-parseable/retrievable ID or TAG or CLASS selectors\par
\tab rquickExpr = /^(?:#([\\w-]+)|(\\w+)|\\.([\\w-]+))$/,\par
\par
\tab rsibling = /[+~]/,\par
\par
\tab // CSS escapes\par
\tab // {{\field{\*\fldinst{HYPERLINK http://www.w3.org/TR/CSS21/syndata.html#escaped-characters }}{\fldrslt{http://www.w3.org/TR/CSS21/syndata.html#escaped-characters\ul0\cf0}}}}\f0\fs22\par
\tab runescape = new RegExp( "\\\\\\\\[\\\\da-fA-F]\{1,6\}" + whitespace + "?|\\\\\\\\([^\\\\r\\\\n\\\\f])", "g" ),\par
\tab funescape = function( escape, nonHex ) \{\par
\tab\tab var high = "0x" + escape.slice( 1 ) - 0x10000;\par
\par
\tab\tab return nonHex ?\par
\par
\tab\tab\tab // Strip the backslash prefix from a non-hex escape sequence\par
\tab\tab\tab nonHex :\par
\par
\tab\tab\tab // Replace a hexadecimal escape sequence with the encoded Unicode code point\par
\tab\tab\tab // Support: IE <=11+\par
\tab\tab\tab // For values outside the Basic Multilingual Plane (BMP), manually construct a\par
\tab\tab\tab // surrogate pair\par
\tab\tab\tab high < 0 ?\par
\tab\tab\tab\tab String.fromCharCode( high + 0x10000 ) :\par
\tab\tab\tab\tab String.fromCharCode( high >> 10 | 0xD800, high & 0x3FF | 0xDC00 );\par
\tab\},\par
\par
\tab // CSS string/identifier serialization\par
\tab // {{\field{\*\fldinst{HYPERLINK https://drafts.csswg.org/cssom/#common-serializing-idioms }}{\fldrslt{https://drafts.csswg.org/cssom/#common-serializing-idioms\ul0\cf0}}}}\f0\fs22\par
\tab rcssescape = /([\\0-\\x1f\\x7f]|^-?\\d)|^-$|[^\\0-\\x1f\\x7f-\\uFFFF\\w-]/g,\par
\tab fcssescape = function( ch, asCodePoint ) \{\par
\tab\tab if ( asCodePoint ) \{\par
\par
\tab\tab\tab // U+0000 NULL becomes U+FFFD REPLACEMENT CHARACTER\par
\tab\tab\tab if ( ch === "\\0" ) \{\par
\tab\tab\tab\tab return "\\uFFFD";\par
\tab\tab\tab\}\par
\par
\tab\tab\tab // Control characters and (dependent upon position) numbers get escaped as code points\par
\tab\tab\tab return ch.slice( 0, -1 ) + "\\\\" +\par
\tab\tab\tab\tab ch.charCodeAt( ch.length - 1 ).toString( 16 ) + " ";\par
\tab\tab\}\par
\par
\tab\tab // Other potentially-special ASCII characters get backslash-escaped\par
\tab\tab return "\\\\" + ch;\par
\tab\},\par
\par
\tab // Used for iframes\par
\tab // See setDocument()\par
\tab // Removing the function wrapper causes a "Permission Denied"\par
\tab // error in IE\par
\tab unloadHandler = function() \{\par
\tab\tab setDocument();\par
\tab\},\par
\par
\tab inDisabledFieldset = addCombinator(\par
\tab\tab function( elem ) \{\par
\tab\tab\tab return elem.disabled === true && elem.nodeName.toLowerCase() === "fieldset";\par
\tab\tab\},\par
\tab\tab\{ dir: "parentNode", next: "legend" \}\par
\tab );\par
\par
// Optimize for push.apply( _, NodeList )\par
try \{\par
\tab push.apply(\par
\tab\tab ( arr = slice.call( preferredDoc.childNodes ) ),\par
\tab\tab preferredDoc.childNodes\par
\tab );\par
\par
\tab // Support: Android<4.0\par
\tab // Detect silently failing push.apply\par
\tab // eslint-disable-next-line no-unused-expressions\par
\tab arr[ preferredDoc.childNodes.length ].nodeType;\par
\} catch ( e ) \{\par
\tab push = \{ apply: arr.length ?\par
\par
\tab\tab // Leverage slice if possible\par
\tab\tab function( target, els ) \{\par
\tab\tab\tab pushNative.apply( target, slice.call( els ) );\par
\tab\tab\} :\par
\par
\tab\tab // Support: IE<9\par
\tab\tab // Otherwise append directly\par
\tab\tab function( target, els ) \{\par
\tab\tab\tab var j = target.length,\par
\tab\tab\tab\tab i = 0;\par
\par
\tab\tab\tab // Can't trust NodeList.length\par
\tab\tab\tab while ( ( target[ j++ ] = els[ i++ ] ) ) \{\}\par
\tab\tab\tab target.length = j - 1;\par
\tab\tab\}\par
\tab\};\par
\}\par
\par
function Sizzle( selector, context, results, seed ) \{\par
\tab var m, i, elem, nid, match, groups, newSelector,\par
\tab\tab newContext = context && context.ownerDocument,\par
\par
\tab\tab // nodeType defaults to 9, since context defaults to document\par
\tab\tab nodeType = context ? context.nodeType : 9;\par
\par
\tab results = results || [];\par
\par
\tab // Return early from calls with invalid selector or context\par
\tab if ( typeof selector !== "string" || !selector ||\par
\tab\tab nodeType !== 1 && nodeType !== 9 && nodeType !== 11 ) \{\par
\par
\tab\tab return results;\par
\tab\}\par
\par
\tab // Try to shortcut find operations (as opposed to filters) in HTML documents\par
\tab if ( !seed ) \{\par
\tab\tab setDocument( context );\par
\tab\tab context = context || document;\par
\par
\tab\tab if ( documentIsHTML ) \{\par
\par
\tab\tab\tab // If the selector is sufficiently simple, try using a "get*By*" DOM method\par
\tab\tab\tab // (excepting DocumentFragment context, where the methods don't exist)\par
\tab\tab\tab if ( nodeType !== 11 && ( match = rquickExpr.exec( selector ) ) ) \{\par
\par
\tab\tab\tab\tab // ID selector\par
\tab\tab\tab\tab if ( ( m = match[ 1 ] ) ) \{\par
\par
\tab\tab\tab\tab\tab // Document context\par
\tab\tab\tab\tab\tab if ( nodeType === 9 ) \{\par
\tab\tab\tab\tab\tab\tab if ( ( elem = context.getElementById( m ) ) ) \{\par
\par
\tab\tab\tab\tab\tab\tab\tab // Support: IE, Opera, Webkit\par
\tab\tab\tab\tab\tab\tab\tab // TODO: identify versions\par
\tab\tab\tab\tab\tab\tab\tab // getElementById can match elements by name instead of ID\par
\tab\tab\tab\tab\tab\tab\tab if ( elem.id === m ) \{\par
\tab\tab\tab\tab\tab\tab\tab\tab results.push( elem );\par
\tab\tab\tab\tab\tab\tab\tab\tab return results;\par
\tab\tab\tab\tab\tab\tab\tab\}\par
\tab\tab\tab\tab\tab\tab\} else \{\par
\tab\tab\tab\tab\tab\tab\tab return results;\par
\tab\tab\tab\tab\tab\tab\}\par
\par
\tab\tab\tab\tab\tab // Element context\par
\tab\tab\tab\tab\tab\} else \{\par
\par
\tab\tab\tab\tab\tab\tab // Support: IE, Opera, Webkit\par
\tab\tab\tab\tab\tab\tab // TODO: identify versions\par
\tab\tab\tab\tab\tab\tab // getElementById can match elements by name instead of ID\par
\tab\tab\tab\tab\tab\tab if ( newContext && ( elem = newContext.getElementById( m ) ) &&\par
\tab\tab\tab\tab\tab\tab\tab contains( context, elem ) &&\par
\tab\tab\tab\tab\tab\tab\tab elem.id === m ) \{\par
\par
\tab\tab\tab\tab\tab\tab\tab results.push( elem );\par
\tab\tab\tab\tab\tab\tab\tab return results;\par
\tab\tab\tab\tab\tab\tab\}\par
\tab\tab\tab\tab\tab\}\par
\par
\tab\tab\tab\tab // Type selector\par
\tab\tab\tab\tab\} else if ( match[ 2 ] ) \{\par
\tab\tab\tab\tab\tab push.apply( results, context.getElementsByTagName( selector ) );\par
\tab\tab\tab\tab\tab return results;\par
\par
\tab\tab\tab\tab // Class selector\par
\tab\tab\tab\tab\} else if ( ( m = match[ 3 ] ) && support.getElementsByClassName &&\par
\tab\tab\tab\tab\tab context.getElementsByClassName ) \{\par
\par
\tab\tab\tab\tab\tab push.apply( results, context.getElementsByClassName( m ) );\par
\tab\tab\tab\tab\tab return results;\par
\tab\tab\tab\tab\}\par
\tab\tab\tab\}\par
\par
\tab\tab\tab // Take advantage of querySelectorAll\par
\tab\tab\tab if ( support.qsa &&\par
\tab\tab\tab\tab !nonnativeSelectorCache[ selector + " " ] &&\par
\tab\tab\tab\tab ( !rbuggyQSA || !rbuggyQSA.test( selector ) ) &&\par
\par
\tab\tab\tab\tab // Support: IE 8 only\par
\tab\tab\tab\tab // Exclude object elements\par
\tab\tab\tab\tab ( nodeType !== 1 || context.nodeName.toLowerCase() !== "object" ) ) \{\par
\par
\tab\tab\tab\tab newSelector = selector;\par
\tab\tab\tab\tab newContext = context;\par
\par
\tab\tab\tab\tab // qSA considers elements outside a scoping root when evaluating child or\par
\tab\tab\tab\tab // descendant combinators, which is not what we want.\par
\tab\tab\tab\tab // In such cases, we work around the behavior by prefixing every selector in the\par
\tab\tab\tab\tab // list with an ID selector referencing the scope context.\par
\tab\tab\tab\tab // The technique has to be used as well when a leading combinator is used\par
\tab\tab\tab\tab // as such selectors are not recognized by querySelectorAll.\par
\tab\tab\tab\tab // Thanks to Andrew Dupont for this technique.\par
\tab\tab\tab\tab if ( nodeType === 1 &&\par
\tab\tab\tab\tab\tab ( rdescend.test( selector ) || rcombinators.test( selector ) ) ) \{\par
\par
\tab\tab\tab\tab\tab // Expand context for sibling selectors\par
\tab\tab\tab\tab\tab newContext = rsibling.test( selector ) && testContext( context.parentNode ) ||\par
\tab\tab\tab\tab\tab\tab context;\par
\par
\tab\tab\tab\tab\tab // We can use :scope instead of the ID hack if the browser\par
\tab\tab\tab\tab\tab // supports it & if we're not changing the context.\par
\tab\tab\tab\tab\tab if ( newContext !== context || !support.scope ) \{\par
\par
\tab\tab\tab\tab\tab\tab // Capture the context ID, setting it first if necessary\par
\tab\tab\tab\tab\tab\tab if ( ( nid = context.getAttribute( "id" ) ) ) \{\par
\tab\tab\tab\tab\tab\tab\tab nid = nid.replace( rcssescape, fcssescape );\par
\tab\tab\tab\tab\tab\tab\} else \{\par
\tab\tab\tab\tab\tab\tab\tab context.setAttribute( "id", ( nid = expando ) );\par
\tab\tab\tab\tab\tab\tab\}\par
\tab\tab\tab\tab\tab\}\par
\par
\tab\tab\tab\tab\tab // Prefix every selector in the list\par
\tab\tab\tab\tab\tab groups = tokenize( selector );\par
\tab\tab\tab\tab\tab i = groups.length;\par
\tab\tab\tab\tab\tab while ( i-- ) \{\par
\tab\tab\tab\tab\tab\tab groups[ i ] = ( nid ? "#" + nid : ":scope" ) + " " +\par
\tab\tab\tab\tab\tab\tab\tab toSelector( groups[ i ] );\par
\tab\tab\tab\tab\tab\}\par
\tab\tab\tab\tab\tab newSelector = groups.join( "," );\par
\tab\tab\tab\tab\}\par
\par
\tab\tab\tab\tab try \{\par
\tab\tab\tab\tab\tab push.apply( results,\par
\tab\tab\tab\tab\tab\tab newContext.querySelectorAll( newSelector )\par
\tab\tab\tab\tab\tab );\par
\tab\tab\tab\tab\tab return results;\par
\tab\tab\tab\tab\} catch ( qsaError ) \{\par
\tab\tab\tab\tab\tab nonnativeSelectorCache( selector, true );\par
\tab\tab\tab\tab\} finally \{\par
\tab\tab\tab\tab\tab if ( nid === expando ) \{\par
\tab\tab\tab\tab\tab\tab context.removeAttribute( "id" );\par
\tab\tab\tab\tab\tab\}\par
\tab\tab\tab\tab\}\par
\tab\tab\tab\}\par
\tab\tab\}\par
\tab\}\par
\par
\tab // All others\par
\tab return select( selector.replace( rtrim, "$1" ), context, results, seed );\par
\}\par
\par
/**\par
 * Create key-value caches of limited size\par
 * @returns \{function(string, object)\} Returns the Object data after storing it on itself with\par
 *\tab property name the (space-suffixed) string and (if the cache is larger than Expr.cacheLength)\par
 *\tab deleting the oldest entry\par
 */\par
function createCache() \{\par
\tab var keys = [];\par
\par
\tab function cache( key, value ) \{\par
\par
\tab\tab // Use (key + " ") to avoid collision with native prototype properties (see Issue #157)\par
\tab\tab if ( keys.push( key + " " ) > Expr.cacheLength ) \{\par
\par
\tab\tab\tab // Only keep the most recent entries\par
\tab\tab\tab delete cache[ keys.shift() ];\par
\tab\tab\}\par
\tab\tab return ( cache[ key + " " ] = value );\par
\tab\}\par
\tab return cache;\par
\}\par
\par
/**\par
 * Mark a function for special use by Sizzle\par
 * @param \{Function\} fn The function to mark\par
 */\par
function markFunction( fn ) \{\par
\tab fn[ expando ] = true;\par
\tab return fn;\par
\}\par
\par
/**\par
 * Support testing using an element\par
 * @param \{Function\} fn Passed the created element and returns a boolean result\par
 */\par
function assert( fn ) \{\par
\tab var el = document.createElement( "fieldset" );\par
\par
\tab try \{\par
\tab\tab return !!fn( el );\par
\tab\} catch ( e ) \{\par
\tab\tab return false;\par
\tab\} finally \{\par
\par
\tab\tab // Remove from its parent by default\par
\tab\tab if ( el.parentNode ) \{\par
\tab\tab\tab el.parentNode.removeChild( el );\par
\tab\tab\}\par
\par
\tab\tab // release memory in IE\par
\tab\tab el = null;\par
\tab\}\par
\}\par
\par
/**\par
 * Adds the same handler for all of the specified attrs\par
 * @param \{String\} attrs Pipe-separated list of attributes\par
 * @param \{Function\} handler The method that will be applied\par
 */\par
function addHandle( attrs, handler ) \{\par
\tab var arr = attrs.split( "|" ),\par
\tab\tab i = arr.length;\par
\par
\tab while ( i-- ) \{\par
\tab\tab Expr.attrHandle[ arr[ i ] ] = handler;\par
\tab\}\par
\}\par
\par
/**\par
 * Checks document order of two siblings\par
 * @param \{Element\} a\par
 * @param \{Element\} b\par
 * @returns \{Number\} Returns less than 0 if a precedes b, greater than 0 if a follows b\par
 */\par
function siblingCheck( a, b ) \{\par
\tab var cur = b && a,\par
\tab\tab diff = cur && a.nodeType === 1 && b.nodeType === 1 &&\par
\tab\tab\tab a.sourceIndex - b.sourceIndex;\par
\par
\tab // Use IE sourceIndex if available on both nodes\par
\tab if ( diff ) \{\par
\tab\tab return diff;\par
\tab\}\par
\par
\tab // Check if b follows a\par
\tab if ( cur ) \{\par
\tab\tab while ( ( cur = cur.nextSibling ) ) \{\par
\tab\tab\tab if ( cur === b ) \{\par
\tab\tab\tab\tab return -1;\par
\tab\tab\tab\}\par
\tab\tab\}\par
\tab\}\par
\par
\tab return a ? 1 : -1;\par
\}\par
\par
/**\par
 * Returns a function to use in pseudos for input types\par
 * @param \{String\} type\par
 */\par
function createInputPseudo( type ) \{\par
\tab return function( elem ) \{\par
\tab\tab var name = elem.nodeName.toLowerCase();\par
\tab\tab return name === "input" && elem.type === type;\par
\tab\};\par
\}\par
\par
/**\par
 * Returns a function to use in pseudos for buttons\par
 * @param \{String\} type\par
 */\par
function createButtonPseudo( type ) \{\par
\tab return function( elem ) \{\par
\tab\tab var name = elem.nodeName.toLowerCase();\par
\tab\tab return ( name === "input" || name === "button" ) && elem.type === type;\par
\tab\};\par
\}\par
\par
/**\par
 * Returns a function to use in pseudos for :enabled/:disabled\par
 * @param \{Boolean\} disabled true for :disabled; false for :enabled\par
 */\par
function createDisabledPseudo( disabled ) \{\par
\par
\tab // Known :disabled false positives: fieldset[disabled] > legend:nth-of-type(n+2) :can-disable\par
\tab return function( elem ) \{\par
\par
\tab\tab // Only certain elements can match :enabled or :disabled\par
\tab\tab // {{\field{\*\fldinst{HYPERLINK https://html.spec.whatwg.org/multipage/scripting.html#selector-enabled }}{\fldrslt{https://html.spec.whatwg.org/multipage/scripting.html#selector-enabled\ul0\cf0}}}}\f0\fs22\par
\tab\tab // {{\field{\*\fldinst{HYPERLINK https://html.spec.whatwg.org/multipage/scripting.html#selector-disabled }}{\fldrslt{https://html.spec.whatwg.org/multipage/scripting.html#selector-disabled\ul0\cf0}}}}\f0\fs22\par
\tab\tab if ( "form" in elem ) \{\par
\par
\tab\tab\tab // Check for inherited disabledness on relevant non-disabled elements:\par
\tab\tab\tab // * listed form-associated elements in a disabled fieldset\par
\tab\tab\tab //   {{\field{\*\fldinst{HYPERLINK https://html.spec.whatwg.org/multipage/forms.html#category-listed }}{\fldrslt{https://html.spec.whatwg.org/multipage/forms.html#category-listed\ul0\cf0}}}}\f0\fs22\par
\tab\tab\tab //   {{\field{\*\fldinst{HYPERLINK https://html.spec.whatwg.org/multipage/forms.html#concept-fe-disabled }}{\fldrslt{https://html.spec.whatwg.org/multipage/forms.html#concept-fe-disabled\ul0\cf0}}}}\f0\fs22\par
\tab\tab\tab // * option elements in a disabled optgroup\par
\tab\tab\tab //   {{\field{\*\fldinst{HYPERLINK https://html.spec.whatwg.org/multipage/forms.html#concept-option-disabled }}{\fldrslt{https://html.spec.whatwg.org/multipage/forms.html#concept-option-disabled\ul0\cf0}}}}\f0\fs22\par
\tab\tab\tab // All such elements have a "form" property.\par
\tab\tab\tab if ( elem.parentNode && elem.disabled === false ) \{\par
\par
\tab\tab\tab\tab // Option elements defer to a parent optgroup if present\par
\tab\tab\tab\tab if ( "label" in elem ) \{\par
\tab\tab\tab\tab\tab if ( "label" in elem.parentNode ) \{\par
\tab\tab\tab\tab\tab\tab return elem.parentNode.disabled === disabled;\par
\tab\tab\tab\tab\tab\} else \{\par
\tab\tab\tab\tab\tab\tab return elem.disabled === disabled;\par
\tab\tab\tab\tab\tab\}\par
\tab\tab\tab\tab\}\par
\par
\tab\tab\tab\tab // Support: IE 6 - 11\par
\tab\tab\tab\tab // Use the isDisabled shortcut property to check for disabled fieldset ancestors\par
\tab\tab\tab\tab return elem.isDisabled === disabled ||\par
\par
\tab\tab\tab\tab\tab // Where there is no isDisabled, check manually\par
\tab\tab\tab\tab\tab /* jshint -W018 */\par
\tab\tab\tab\tab\tab elem.isDisabled !== !disabled &&\par
\tab\tab\tab\tab\tab inDisabledFieldset( elem ) === disabled;\par
\tab\tab\tab\}\par
\par
\tab\tab\tab return elem.disabled === disabled;\par
\par
\tab\tab // Try to winnow out elements that can't be disabled before trusting the disabled property.\par
\tab\tab // Some victims get caught in our net (label, legend, menu, track), but it shouldn't\par
\tab\tab // even exist on them, let alone have a boolean value.\par
\tab\tab\} else if ( "label" in elem ) \{\par
\tab\tab\tab return elem.disabled === disabled;\par
\tab\tab\}\par
\par
\tab\tab // Remaining elements are neither :enabled nor :disabled\par
\tab\tab return false;\par
\tab\};\par
\}\par
\par
/**\par
 * Returns a function to use in pseudos for positionals\par
 * @param \{Function\} fn\par
 */\par
function createPositionalPseudo( fn ) \{\par
\tab return markFunction( function( argument ) \{\par
\tab\tab argument = +argument;\par
\tab\tab return markFunction( function( seed, matches ) \{\par
\tab\tab\tab var j,\par
\tab\tab\tab\tab matchIndexes = fn( [], seed.length, argument ),\par
\tab\tab\tab\tab i = matchIndexes.length;\par
\par
\tab\tab\tab // Match elements found at the specified indexes\par
\tab\tab\tab while ( i-- ) \{\par
\tab\tab\tab\tab if ( seed[ ( j = matchIndexes[ i ] ) ] ) \{\par
\tab\tab\tab\tab\tab seed[ j ] = !( matches[ j ] = seed[ j ] );\par
\tab\tab\tab\tab\}\par
\tab\tab\tab\}\par
\tab\tab\} );\par
\tab\} );\par
\}\par
\par
/**\par
 * Checks a node for validity as a Sizzle context\par
 * @param \{Element|Object=\} context\par
 * @returns \{Element|Object|Boolean\} The input node if acceptable, otherwise a falsy value\par
 */\par
function testContext( context ) \{\par
\tab return context && typeof context.getElementsByTagName !== "undefined" && context;\par
\}\par
\par
// Expose support vars for convenience\par
support = Sizzle.support = \{\};\par
\par
/**\par
 * Detects XML nodes\par
 * @param \{Element|Object\} elem An element or a document\par
 * @returns \{Boolean\} True iff elem is a non-HTML XML node\par
 */\par
isXML = Sizzle.isXML = function( elem ) \{\par
\tab var namespace = elem && elem.namespaceURI,\par
\tab\tab docElem = elem && ( elem.ownerDocument || elem ).documentElement;\par
\par
\tab // Support: IE <=8\par
\tab // Assume HTML when documentElement doesn't yet exist, such as inside loading iframes\par
\tab // {{\field{\*\fldinst{HYPERLINK https://bugs.jquery.com/ticket/4833 }}{\fldrslt{https://bugs.jquery.com/ticket/4833\ul0\cf0}}}}\f0\fs22\par
\tab return !rhtml.test( namespace || docElem && docElem.nodeName || "HTML" );\par
\};\par
\par
/**\par
 * Sets document-related variables once based on the current document\par
 * @param \{Element|Object\} [doc] An element or document object to use to set the document\par
 * @returns \{Object\} Returns the current document\par
 */\par
setDocument = Sizzle.setDocument = function( node ) \{\par
\tab var hasCompare, subWindow,\par
\tab\tab doc = node ? node.ownerDocument || node : preferredDoc;\par
\par
\tab // Return early if doc is invalid or already selected\par
\tab // Support: IE 11+, Edge 17 - 18+\par
\tab // IE/Edge sometimes throw a "Permission denied" error when strict-comparing\par
\tab // two documents; shallow comparisons work.\par
\tab // eslint-disable-next-line eqeqeq\par
\tab if ( doc == document || doc.nodeType !== 9 || !doc.documentElement ) \{\par
\tab\tab return document;\par
\tab\}\par
\par
\tab // Update global variables\par
\tab document = doc;\par
\tab docElem = document.documentElement;\par
\tab documentIsHTML = !isXML( document );\par
\par
\tab // Support: IE 9 - 11+, Edge 12 - 18+\par
\tab // Accessing iframe documents after unload throws "permission denied" errors (jQuery #13936)\par
\tab // Support: IE 11+, Edge 17 - 18+\par
\tab // IE/Edge sometimes throw a "Permission denied" error when strict-comparing\par
\tab // two documents; shallow comparisons work.\par
\tab // eslint-disable-next-line eqeqeq\par
\tab if ( preferredDoc != document &&\par
\tab\tab ( subWindow = document.defaultView ) && subWindow.top !== subWindow ) \{\par
\par
\tab\tab // Support: IE 11, Edge\par
\tab\tab if ( subWindow.addEventListener ) \{\par
\tab\tab\tab subWindow.addEventListener( "unload", unloadHandler, false );\par
\par
\tab\tab // Support: IE 9 - 10 only\par
\tab\tab\} else if ( subWindow.attachEvent ) \{\par
\tab\tab\tab subWindow.attachEvent( "onunload", unloadHandler );\par
\tab\tab\}\par
\tab\}\par
\par
\tab // Support: IE 8 - 11+, Edge 12 - 18+, Chrome <=16 - 25 only, Firefox <=3.6 - 31 only,\par
\tab // Safari 4 - 5 only, Opera <=11.6 - 12.x only\par
\tab // IE/Edge & older browsers don't support the :scope pseudo-class.\par
\tab // Support: Safari 6.0 only\par
\tab // Safari 6.0 supports :scope but it's an alias of :root there.\par
\tab support.scope = assert( function( el ) \{\par
\tab\tab docElem.appendChild( el ).appendChild( document.createElement( "div" ) );\par
\tab\tab return typeof el.querySelectorAll !== "undefined" &&\par
\tab\tab\tab !el.querySelectorAll( ":scope fieldset div" ).length;\par
\tab\} );\par
\par
\tab /* Attributes\par
\tab ---------------------------------------------------------------------- */\par
\par
\tab // Support: IE<8\par
\tab // Verify that getAttribute really returns attributes and not properties\par
\tab // (excepting IE8 booleans)\par
\tab support.attributes = assert( function( el ) \{\par
\tab\tab el.className = "i";\par
\tab\tab return !el.getAttribute( "className" );\par
\tab\} );\par
\par
\tab /* getElement(s)By*\par
\tab ---------------------------------------------------------------------- */\par
\par
\tab // Check if getElementsByTagName("*") returns only elements\par
\tab support.getElementsByTagName = assert( function( el ) \{\par
\tab\tab el.appendChild( document.createComment( "" ) );\par
\tab\tab return !el.getElementsByTagName( "*" ).length;\par
\tab\} );\par
\par
\tab // Support: IE<9\par
\tab support.getElementsByClassName = rnative.test( document.getElementsByClassName );\par
\par
\tab // Support: IE<10\par
\tab // Check if getElementById returns elements by name\par
\tab // The broken getElementById methods don't pick up programmatically-set names,\par
\tab // so use a roundabout getElementsByName test\par
\tab support.getById = assert( function( el ) \{\par
\tab\tab docElem.appendChild( el ).id = expando;\par
\tab\tab return !document.getElementsByName || !document.getElementsByName( expando ).length;\par
\tab\} );\par
\par
\tab // ID filter and find\par
\tab if ( support.getById ) \{\par
\tab\tab Expr.filter[ "ID" ] = function( id ) \{\par
\tab\tab\tab var attrId = id.replace( runescape, funescape );\par
\tab\tab\tab return function( elem ) \{\par
\tab\tab\tab\tab return elem.getAttribute( "id" ) === attrId;\par
\tab\tab\tab\};\par
\tab\tab\};\par
\tab\tab Expr.find[ "ID" ] = function( id, context ) \{\par
\tab\tab\tab if ( typeof context.getElementById !== "undefined" && documentIsHTML ) \{\par
\tab\tab\tab\tab var elem = context.getElementById( id );\par
\tab\tab\tab\tab return elem ? [ elem ] : [];\par
\tab\tab\tab\}\par
\tab\tab\};\par
\tab\} else \{\par
\tab\tab Expr.filter[ "ID" ] =  function( id ) \{\par
\tab\tab\tab var attrId = id.replace( runescape, funescape );\par
\tab\tab\tab return function( elem ) \{\par
\tab\tab\tab\tab var node = typeof elem.getAttributeNode !== "undefined" &&\par
\tab\tab\tab\tab\tab elem.getAttributeNode( "id" );\par
\tab\tab\tab\tab return node && node.value === attrId;\par
\tab\tab\tab\};\par
\tab\tab\};\par
\par
\tab\tab // Support: IE 6 - 7 only\par
\tab\tab // getElementById is not reliable as a find shortcut\par
\tab\tab Expr.find[ "ID" ] = function( id, context ) \{\par
\tab\tab\tab if ( typeof context.getElementById !== "undefined" && documentIsHTML ) \{\par
\tab\tab\tab\tab var node, i, elems,\par
\tab\tab\tab\tab\tab elem = context.getElementById( id );\par
\par
\tab\tab\tab\tab if ( elem ) \{\par
\par
\tab\tab\tab\tab\tab // Verify the id attribute\par
\tab\tab\tab\tab\tab node = elem.getAttributeNode( "id" );\par
\tab\tab\tab\tab\tab if ( node && node.value === id ) \{\par
\tab\tab\tab\tab\tab\tab return [ elem ];\par
\tab\tab\tab\tab\tab\}\par
\par
\tab\tab\tab\tab\tab // Fall back on getElementsByName\par
\tab\tab\tab\tab\tab elems = context.getElementsByName( id );\par
\tab\tab\tab\tab\tab i = 0;\par
\tab\tab\tab\tab\tab while ( ( elem = elems[ i++ ] ) ) \{\par
\tab\tab\tab\tab\tab\tab node = elem.getAttributeNode( "id" );\par
\tab\tab\tab\tab\tab\tab if ( node && node.value === id ) \{\par
\tab\tab\tab\tab\tab\tab\tab return [ elem ];\par
\tab\tab\tab\tab\tab\tab\}\par
\tab\tab\tab\tab\tab\}\par
\tab\tab\tab\tab\}\par
\par
\tab\tab\tab\tab return [];\par
\tab\tab\tab\}\par
\tab\tab\};\par
\tab\}\par
\par
\tab // Tag\par
\tab Expr.find[ "TAG" ] = support.getElementsByTagName ?\par
\tab\tab function( tag, context ) \{\par
\tab\tab\tab if ( typeof context.getElementsByTagName !== "undefined" ) \{\par
\tab\tab\tab\tab return context.getElementsByTagName( tag );\par
\par
\tab\tab\tab // DocumentFragment nodes don't have gEBTN\par
\tab\tab\tab\} else if ( support.qsa ) \{\par
\tab\tab\tab\tab return context.querySelectorAll( tag );\par
\tab\tab\tab\}\par
\tab\tab\} :\par
\par
\tab\tab function( tag, context ) \{\par
\tab\tab\tab var elem,\par
\tab\tab\tab\tab tmp = [],\par
\tab\tab\tab\tab i = 0,\par
\par
\tab\tab\tab\tab // By happy coincidence, a (broken) gEBTN appears on DocumentFragment nodes too\par
\tab\tab\tab\tab results = context.getElementsByTagName( tag );\par
\par
\tab\tab\tab // Filter out possible comments\par
\tab\tab\tab if ( tag === "*" ) \{\par
\tab\tab\tab\tab while ( ( elem = results[ i++ ] ) ) \{\par
\tab\tab\tab\tab\tab if ( elem.nodeType === 1 ) \{\par
\tab\tab\tab\tab\tab\tab tmp.push( elem );\par
\tab\tab\tab\tab\tab\}\par
\tab\tab\tab\tab\}\par
\par
\tab\tab\tab\tab return tmp;\par
\tab\tab\tab\}\par
\tab\tab\tab return results;\par
\tab\tab\};\par
\par
\tab // Class\par
\tab Expr.find[ "CLASS" ] = support.getElementsByClassName && function( className, context ) \{\par
\tab\tab if ( typeof context.getElementsByClassName !== "undefined" && documentIsHTML ) \{\par
\tab\tab\tab return context.getElementsByClassName( className );\par
\tab\tab\}\par
\tab\};\par
\par
\tab /* QSA/matchesSelector\par
\tab ---------------------------------------------------------------------- */\par
\par
\tab // QSA and matchesSelector support\par
\par
\tab // matchesSelector(:active) reports false when true (IE9/Opera 11.5)\par
\tab rbuggyMatches = [];\par
\par
\tab // qSa(:focus) reports false when true (Chrome 21)\par
\tab // We allow this because of a bug in IE8/9 that throws an error\par
\tab // whenever `document.activeElement` is accessed on an iframe\par
\tab // So, we allow :focus to pass through QSA all the time to avoid the IE error\par
\tab // See {{\field{\*\fldinst{HYPERLINK https://bugs.jquery.com/ticket/13378 }}{\fldrslt{https://bugs.jquery.com/ticket/13378\ul0\cf0}}}}\f0\fs22\par
\tab rbuggyQSA = [];\par
\par
\tab if ( ( support.qsa = rnative.test( document.querySelectorAll ) ) ) \{\par
\par
\tab\tab // Build QSA regex\par
\tab\tab // Regex strategy adopted from Diego Perini\par
\tab\tab assert( function( el ) \{\par
\par
\tab\tab\tab var input;\par
\par
\tab\tab\tab // Select is set to empty string on purpose\par
\tab\tab\tab // This is to test IE's treatment of not explicitly\par
\tab\tab\tab // setting a boolean content attribute,\par
\tab\tab\tab // since its presence should be enough\par
\tab\tab\tab // {{\field{\*\fldinst{HYPERLINK https://bugs.jquery.com/ticket/12359 }}{\fldrslt{https://bugs.jquery.com/ticket/12359\ul0\cf0}}}}\f0\fs22\par
\tab\tab\tab docElem.appendChild( el ).innerHTML = "<a id='" + expando + "'></a>" +\par
\tab\tab\tab\tab "<select id='" + expando + "-\\r\\\\' msallowcapture=''>" +\par
\tab\tab\tab\tab "<option selected=''></option></select>";\par
\par
\tab\tab\tab // Support: IE8, Opera 11-12.16\par
\tab\tab\tab // Nothing should be selected when empty strings follow ^= or $= or *=\par
\tab\tab\tab // The test attribute must be unknown in Opera but "safe" for WinRT\par
\tab\tab\tab // {{\field{\*\fldinst{HYPERLINK https://msdn.microsoft.com/en-us/library/ie/hh465388.aspx#attribute_section }}{\fldrslt{https://msdn.microsoft.com/en-us/library/ie/hh465388.aspx#attribute_section\ul0\cf0}}}}\f0\fs22\par
\tab\tab\tab if ( el.querySelectorAll( "[msallowcapture^='']" ).length ) \{\par
\tab\tab\tab\tab rbuggyQSA.push( "[*^$]=" + whitespace + "*(?:''|\\"\\")" );\par
\tab\tab\tab\}\par
\par
\tab\tab\tab // Support: IE8\par
\tab\tab\tab // Boolean attributes and "value" are not treated correctly\par
\tab\tab\tab if ( !el.querySelectorAll( "[selected]" ).length ) \{\par
\tab\tab\tab\tab rbuggyQSA.push( "{{\field{\*\fldinst{HYPERLINK "\\\\\\\\["}}{\fldrslt{\\\\[\ul0\cf0}}}}\f0\fs22 " + whitespace + "*(?:value|" + booleans + ")" );\par
\tab\tab\tab\}\par
\par
\tab\tab\tab // Support: Chrome<29, Android<4.4, Safari<7.0+, iOS<7.0+, PhantomJS<1.9.8+\par
\tab\tab\tab if ( !el.querySelectorAll( "[id~=" + expando + "-]" ).length ) \{\par
\tab\tab\tab\tab rbuggyQSA.push( "~=" );\par
\tab\tab\tab\}\par
\par
\tab\tab\tab // Support: IE 11+, Edge 15 - 18+\par
\tab\tab\tab // IE 11/Edge don't find elements on a `[name='']` query in some cases.\par
\tab\tab\tab // Adding a temporary attribute to the document before the selection works\par
\tab\tab\tab // around the issue.\par
\tab\tab\tab // Interestingly, IE 10 & older don't seem to have the issue.\par
\tab\tab\tab input = document.createElement( "input" );\par
\tab\tab\tab input.setAttribute( "name", "" );\par
\tab\tab\tab el.appendChild( input );\par
\tab\tab\tab if ( !el.querySelectorAll( "[name='']" ).length ) \{\par
\tab\tab\tab\tab rbuggyQSA.push( "{{\field{\*\fldinst{HYPERLINK "\\\\\\\\["}}{\fldrslt{\\\\[\ul0\cf0}}}}\f0\fs22 " + whitespace + "*name" + whitespace + "*=" +\par
\tab\tab\tab\tab\tab whitespace + "*(?:''|\\"\\")" );\par
\tab\tab\tab\}\par
\par
\tab\tab\tab // Webkit/Opera - :checked should return selected option elements\par
\tab\tab\tab // {{\field{\*\fldinst{HYPERLINK http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked }}{\fldrslt{http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked\ul0\cf0}}}}\f0\fs22\par
\tab\tab\tab // IE8 throws error here and will not see later tests\par
\tab\tab\tab if ( !el.querySelectorAll( ":checked" ).length ) \{\par
\tab\tab\tab\tab rbuggyQSA.push( ":checked" );\par
\tab\tab\tab\}\par
\par
\tab\tab\tab // Support: Safari 8+, iOS 8+\par
\tab\tab\tab // {{\field{\*\fldinst{HYPERLINK https://bugs.webkit.org/show_bug.cgi?id=136851 }}{\fldrslt{https://bugs.webkit.org/show_bug.cgi?id=136851\ul0\cf0}}}}\f0\fs22\par
\tab\tab\tab // In-page `selector#id sibling-combinator selector` fails\par
\tab\tab\tab if ( !el.querySelectorAll( "a#" + expando + "+*" ).length ) \{\par
\tab\tab\tab\tab rbuggyQSA.push( ".#.+[+~]" );\par
\tab\tab\tab\}\par
\par
\tab\tab\tab // Support: Firefox <=3.6 - 5 only\par
\tab\tab\tab // Old Firefox doesn't throw on a badly-escaped identifier.\par
\tab\tab\tab el.querySelectorAll( "\\\\\\f" );\par
\tab\tab\tab rbuggyQSA.push( "[{{\field{\*\fldinst{HYPERLINK "\\\\\\\\r\\\\\\\\n\\\\\\\\f"}}{\fldrslt{\\\\r\\\\n\\\\f\ul0\cf0}}}}\f0\fs22 ]" );\par
\tab\tab\} );\par
\par
\tab\tab assert( function( el ) \{\par
\tab\tab\tab el.innerHTML = "<a href='' disabled='disabled'></a>" +\par
\tab\tab\tab\tab "<select disabled='disabled'><option/></select>";\par
\par
\tab\tab\tab // Support: Windows 8 Native Apps\par
\tab\tab\tab // The type and name attributes are restricted during .innerHTML assignment\par
\tab\tab\tab var input = document.createElement( "input" );\par
\tab\tab\tab input.setAttribute( "type", "hidden" );\par
\tab\tab\tab el.appendChild( input ).setAttribute( "name", "D" );\par
\par
\tab\tab\tab // Support: IE8\par
\tab\tab\tab // Enforce case-sensitivity of name attribute\par
\tab\tab\tab if ( el.querySelectorAll( "[name=d]" ).length ) \{\par
\tab\tab\tab\tab rbuggyQSA.push( "name" + whitespace + "*[*^$|!~]?=" );\par
\tab\tab\tab\}\par
\par
\tab\tab\tab // FF 3.5 - :enabled/:disabled and hidden elements (hidden elements are still enabled)\par
\tab\tab\tab // IE8 throws error here and will not see later tests\par
\tab\tab\tab if ( el.querySelectorAll( ":enabled" ).length !== 2 ) \{\par
\tab\tab\tab\tab rbuggyQSA.push( ":enabled", ":disabled" );\par
\tab\tab\tab\}\par
\par
\tab\tab\tab // Support: IE9-11+\par
\tab\tab\tab // IE's :disabled selector does not pick up the children of disabled fieldsets\par
\tab\tab\tab docElem.appendChild( el ).disabled = true;\par
\tab\tab\tab if ( el.querySelectorAll( ":disabled" ).length !== 2 ) \{\par
\tab\tab\tab\tab rbuggyQSA.push( ":enabled", ":disabled" );\par
\tab\tab\tab\}\par
\par
\tab\tab\tab // Support: Opera 10 - 11 only\par
\tab\tab\tab // Opera 10-11 does not throw on post-comma invalid pseudos\par
\tab\tab\tab el.querySelectorAll( "*,:x" );\par
\tab\tab\tab rbuggyQSA.push( ",.*:" );\par
\tab\tab\} );\par
\tab\}\par
\par
\tab if ( ( support.matchesSelector = rnative.test( ( matches = docElem.matches ||\par
\tab\tab docElem.webkitMatchesSelector ||\par
\tab\tab docElem.mozMatchesSelector ||\par
\tab\tab docElem.oMatchesSelector ||\par
\tab\tab docElem.msMatchesSelector ) ) ) ) \{\par
\par
\tab\tab assert( function( el ) \{\par
\par
\tab\tab\tab // Check to see if it's possible to do matchesSelector\par
\tab\tab\tab // on a disconnected node (IE 9)\par
\tab\tab\tab support.disconnectedMatch = matches.call( el, "*" );\par
\par
\tab\tab\tab // This should fail with an exception\par
\tab\tab\tab // Gecko does not error, returns false instead\par
\tab\tab\tab matches.call( el, "[s!='']:x" );\par
\tab\tab\tab rbuggyMatches.push( "!=", pseudos );\par
\tab\tab\} );\par
\tab\}\par
\par
\tab rbuggyQSA = rbuggyQSA.length && new RegExp( rbuggyQSA.join( "|" ) );\par
\tab rbuggyMatches = rbuggyMatches.length && new RegExp( rbuggyMatches.join( "|" ) );\par
\par
\tab /* Contains\par
\tab ---------------------------------------------------------------------- */\par
\tab hasCompare = rnative.test( docElem.compareDocumentPosition );\par
\par
\tab // Element contains another\par
\tab // Purposefully self-exclusive\par
\tab // As in, an element does not contain itself\par
\tab contains = hasCompare || rnative.test( docElem.contains ) ?\par
\tab\tab function( a, b ) \{\par
\tab\tab\tab var adown = a.nodeType === 9 ? a.documentElement : a,\par
\tab\tab\tab\tab bup = b && b.parentNode;\par
\tab\tab\tab return a === bup || !!( bup && bup.nodeType === 1 && (\par
\tab\tab\tab\tab adown.contains ?\par
\tab\tab\tab\tab\tab adown.contains( bup ) :\par
\tab\tab\tab\tab\tab a.compareDocumentPosition && a.compareDocumentPosition( bup ) & 16\par
\tab\tab\tab ) );\par
\tab\tab\} :\par
\tab\tab function( a, b ) \{\par
\tab\tab\tab if ( b ) \{\par
\tab\tab\tab\tab while ( ( b = b.parentNode ) ) \{\par
\tab\tab\tab\tab\tab if ( b === a ) \{\par
\tab\tab\tab\tab\tab\tab return true;\par
\tab\tab\tab\tab\tab\}\par
\tab\tab\tab\tab\}\par
\tab\tab\tab\}\par
\tab\tab\tab return false;\par
\tab\tab\};\par
\par
\tab /* Sorting\par
\tab ---------------------------------------------------------------------- */\par
\par
\tab // Document order sorting\par
\tab sortOrder = hasCompare ?\par
\tab function( a, b ) \{\par
\par
\tab\tab // Flag for duplicate removal\par
\tab\tab if ( a === b ) \{\par
\tab\tab\tab hasDuplicate = true;\par
\tab\tab\tab return 0;\par
\tab\tab\}\par
\par
\tab\tab // Sort on method existence if only one input has compareDocumentPosition\par
\tab\tab var compare = !a.compareDocumentPosition - !b.compareDocumentPosition;\par
\tab\tab if ( compare ) \{\par
\tab\tab\tab return compare;\par
\tab\tab\}\par
\par
\tab\tab // Calculate position if both inputs belong to the same document\par
\tab\tab // Support: IE 11+, Edge 17 - 18+\par
\tab\tab // IE/Edge sometimes throw a "Permission denied" error when strict-comparing\par
\tab\tab // two documents; shallow comparisons work.\par
\tab\tab // eslint-disable-next-line eqeqeq\par
\tab\tab compare = ( a.ownerDocument || a ) == ( b.ownerDocument || b ) ?\par
\tab\tab\tab a.compareDocumentPosition( b ) :\par
\par
\tab\tab\tab // Otherwise we know they are disconnected\par
\tab\tab\tab 1;\par
\par
\tab\tab // Disconnected nodes\par
\tab\tab if ( compare & 1 ||\par
\tab\tab\tab ( !support.sortDetached && b.compareDocumentPosition( a ) === compare ) ) \{\par
\par
\tab\tab\tab // Choose the first element that is related to our preferred document\par
\tab\tab\tab // Support: IE 11+, Edge 17 - 18+\par
\tab\tab\tab // IE/Edge sometimes throw a "Permission denied" error when strict-comparing\par
\tab\tab\tab // two documents; shallow comparisons work.\par
\tab\tab\tab // eslint-disable-next-line eqeqeq\par
\tab\tab\tab if ( a == document || a.ownerDocument == preferredDoc &&\par
\tab\tab\tab\tab contains( preferredDoc, a ) ) \{\par
\tab\tab\tab\tab return -1;\par
\tab\tab\tab\}\par
\par
\tab\tab\tab // Support: IE 11+, Edge 17 - 18+\par
\tab\tab\tab // IE/Edge sometimes throw a "Permission denied" error when strict-comparing\par
\tab\tab\tab // two documents; shallow comparisons work.\par
\tab\tab\tab // eslint-disable-next-line eqeqeq\par
\tab\tab\tab if ( b == document || b.ownerDocument == preferredDoc &&\par
\tab\tab\tab\tab contains( preferredDoc, b ) ) \{\par
\tab\tab\tab\tab return 1;\par
\tab\tab\tab\}\par
\par
\tab\tab\tab // Maintain original order\par
\tab\tab\tab return sortInput ?\par
\tab\tab\tab\tab ( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :\par
\tab\tab\tab\tab 0;\par
\tab\tab\}\par
\par
\tab\tab return compare & 4 ? -1 : 1;\par
\tab\} :\par
\tab function( a, b ) \{\par
\par
\tab\tab // Exit early if the nodes are identical\par
\tab\tab if ( a === b ) \{\par
\tab\tab\tab hasDuplicate = true;\par
\tab\tab\tab return 0;\par
\tab\tab\}\par
\par
\tab\tab var cur,\par
\tab\tab\tab i = 0,\par
\tab\tab\tab aup = a.parentNode,\par
\tab\tab\tab bup = b.parentNode,\par
\tab\tab\tab ap = [ a ],\par
\tab\tab\tab bp = [ b ];\par
\par
\tab\tab // Parentless nodes are either documents or disconnected\par
\tab\tab if ( !aup || !bup ) \{\par
\par
\tab\tab\tab // Support: IE 11+, Edge 17 - 18+\par
\tab\tab\tab // IE/Edge sometimes throw a "Permission denied" error when strict-comparing\par
\tab\tab\tab // two documents; shallow comparisons work.\par
\tab\tab\tab /* eslint-disable eqeqeq */\par
\tab\tab\tab return a == document ? -1 :\par
\tab\tab\tab\tab b == document ? 1 :\par
\tab\tab\tab\tab /* eslint-enable eqeqeq */\par
\tab\tab\tab\tab aup ? -1 :\par
\tab\tab\tab\tab bup ? 1 :\par
\tab\tab\tab\tab sortInput ?\par
\tab\tab\tab\tab ( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :\par
\tab\tab\tab\tab 0;\par
\par
\tab\tab // If the nodes are siblings, we can do a quick check\par
\tab\tab\} else if ( aup === bup ) \{\par
\tab\tab\tab return siblingCheck( a, b );\par
\tab\tab\}\par
\par
\tab\tab // Otherwise we need full lists of their ancestors for comparison\par
\tab\tab cur = a;\par
\tab\tab while ( ( cur = cur.parentNode ) ) \{\par
\tab\tab\tab ap.unshift( cur );\par
\tab\tab\}\par
\tab\tab cur = b;\par
\tab\tab while ( ( cur = cur.parentNode ) ) \{\par
\tab\tab\tab bp.unshift( cur );\par
\tab\tab\}\par
\par
\tab\tab // Walk down the tree looking for a discrepancy\par
\tab\tab while ( ap[ i ] === bp[ i ] ) \{\par
\tab\tab\tab i++;\par
\tab\tab\}\par
\par
\tab\tab return i ?\par
\par
\tab\tab\tab // Do a sibling check if the nodes have a common ancestor\par
\tab\tab\tab siblingCheck( ap[ i ], bp[ i ] ) :\par
\par
\tab\tab\tab // Otherwise nodes in our document sort first\par
\tab\tab\tab // Support: IE 11+, Edge 17 - 18+\par
\tab\tab\tab // IE/Edge sometimes throw a "Permission denied" error when strict-comparing\par
\tab\tab\tab // two documents; shallow comparisons work.\par
\tab\tab\tab /* eslint-disable eqeqeq */\par
\tab\tab\tab ap[ i ] == preferredDoc ? -1 :\par
\tab\tab\tab bp[ i ] == preferredDoc ? 1 :\par
\tab\tab\tab /* eslint-enable eqeqeq */\par
\tab\tab\tab 0;\par
\tab\};\par
\par
\tab return document;\par
\};\par
\par
Sizzle.matches = function( expr, elements ) \{\par
\tab return Sizzle( expr, null, null, elements );\par
\};\par
\par
Sizzle.matchesSelector = function( elem, expr ) \{\par
\tab setDocument( elem );\par
\par
\tab if ( support.matchesSelector && documentIsHTML &&\par
\tab\tab !nonnativeSelectorCache[ expr + " " ] &&\par
\tab\tab ( !rbuggyMatches || !rbuggyMatches.test( expr ) ) &&\par
\tab\tab ( !rbuggyQSA     || !rbuggyQSA.test( expr ) ) ) \{\par
\par
\tab\tab try \{\par
\tab\tab\tab var ret = matches.call( elem, expr );\par
\par
\tab\tab\tab // IE 9's matchesSelector returns false on disconnected nodes\par
\tab\tab\tab if ( ret || support.disconnectedMatch ||\par
\par
\tab\tab\tab\tab // As well, disconnected nodes are said to be in a document\par
\tab\tab\tab\tab // fragment in IE 9\par
\tab\tab\tab\tab elem.document && elem.document.nodeType !== 11 ) \{\par
\tab\tab\tab\tab return ret;\par
\tab\tab\tab\}\par
\tab\tab\} catch ( e ) \{\par
\tab\tab\tab nonnativeSelectorCache( expr, true );\par
\tab\tab\}\par
\tab\}\par
\par
\tab return Sizzle( expr, document, null, [ elem ] ).length > 0;\par
\};\par
\par
Sizzle.contains = function( context, elem ) \{\par
\par
\tab // Set document vars if needed\par
\tab // Support: IE 11+, Edge 17 - 18+\par
\tab // IE/Edge sometimes throw a "Permission denied" error when strict-comparing\par
\tab // two documents; shallow comparisons work.\par
\tab // eslint-disable-next-line eqeqeq\par
\tab if ( ( context.ownerDocument || context ) != document ) \{\par
\tab\tab setDocument( context );\par
\tab\}\par
\tab return contains( context, elem );\par
\};\par
\par
Sizzle.attr = function( elem, name ) \{\par
\par
\tab // Set document vars if needed\par
\tab // Support: IE 11+, Edge 17 - 18+\par
\tab // IE/Edge sometimes throw a "Permission denied" error when strict-comparing\par
\tab // two documents; shallow comparisons work.\par
\tab // eslint-disable-next-line eqeqeq\par
\tab if ( ( elem.ownerDocument || elem ) != document ) \{\par
\tab\tab setDocument( elem );\par
\tab\}\par
\par
\tab var fn = Expr.attrHandle[ name.toLowerCase() ],\par
\par
\tab\tab // Don't get fooled by Object.prototype properties (jQuery #13807)\par
\tab\tab val = fn && hasOwn.call( Expr.attrHandle, name.toLowerCase() ) ?\par
\tab\tab\tab fn( elem, name, !documentIsHTML ) :\par
\tab\tab\tab undefined;\par
\par
\tab return val !== undefined ?\par
\tab\tab val :\par
\tab\tab support.attributes || !documentIsHTML ?\par
\tab\tab\tab elem.getAttribute( name ) :\par
\tab\tab\tab ( val = elem.getAttributeNode( name ) ) && val.specified ?\par
\tab\tab\tab\tab val.value :\par
\tab\tab\tab\tab null;\par
\};\par
\par
Sizzle.escape = function( sel ) \{\par
\tab return ( sel + "" ).replace( rcssescape, fcssescape );\par
\};\par
\par
Sizzle.error = function( msg ) \{\par
\tab throw new Error( "Syntax error, unrecognized expression: " + msg );\par
\};\par
\par
/**\par
 * Document sorting and removing duplicates\par
 * @param \{ArrayLike\} results\par
 */\par
Sizzle.uniqueSort = function( results ) \{\par
\tab var elem,\par
\tab\tab duplicates = [],\par
\tab\tab j = 0,\par
\tab\tab i = 0;\par
\par
\tab // Unless we *know* we can detect duplicates, assume their presence\par
\tab hasDuplicate = !support.detectDuplicates;\par
\tab sortInput = !support.sortStable && results.slice( 0 );\par
\tab results.sort( sortOrder );\par
\par
\tab if ( hasDuplicate ) \{\par
\tab\tab while ( ( elem = results[ i++ ] ) ) \{\par
\tab\tab\tab if ( elem === results[ i ] ) \{\par
\tab\tab\tab\tab j = duplicates.push( i );\par
\tab\tab\tab\}\par
\tab\tab\}\par
\tab\tab while ( j-- ) \{\par
\tab\tab\tab results.splice( duplicates[ j ], 1 );\par
\tab\tab\}\par
\tab\}\par
\par
\tab // Clear input after sorting to release objects\par
\tab // See {{\field{\*\fldinst{HYPERLINK https://github.com/jquery/sizzle/pull/225 }}{\fldrslt{https://github.com/jquery/sizzle/pull/225\ul0\cf0}}}}\f0\fs22\par
\tab sortInput = null;\par
\par
\tab return results;\par
\};\par
\par
/**\par
 * Utility function for retrieving the text value of an array of DOM nodes\par
 * @param \{Array|Element\} elem\par
 */\par
getText = Sizzle.getText = function( elem ) \{\par
\tab var node,\par
\tab\tab ret = "",\par
\tab\tab i = 0,\par
\tab\tab nodeType = elem.nodeType;\par
\par
\tab if ( !nodeType ) \{\par
\par
\tab\tab // If no nodeType, this is expected to be an array\par
\tab\tab while ( ( node = elem[ i++ ] ) ) \{\par
\par
\tab\tab\tab // Do not traverse comment nodes\par
\tab\tab\tab ret += getText( node );\par
\tab\tab\}\par
\tab\} else if ( nodeType === 1 || nodeType === 9 || nodeType === 11 ) \{\par
\par
\tab\tab // Use textContent for elements\par
\tab\tab // innerText usage removed for consistency of new lines (jQuery #11153)\par
\tab\tab if ( typeof elem.textContent === "string" ) \{\par
\tab\tab\tab return elem.textContent;\par
\tab\tab\} else \{\par
\par
\tab\tab\tab // Traverse its children\par
\tab\tab\tab for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) \{\par
\tab\tab\tab\tab ret += getText( elem );\par
\tab\tab\tab\}\par
\tab\tab\}\par
\tab\} else if ( nodeType === 3 || nodeType === 4 ) \{\par
\tab\tab return elem.nodeValue;\par
\tab\}\par
\par
\tab // Do not include comment or processing instruction nodes\par
\par
\tab return ret;\par
\};\par
\par
Expr = Sizzle.selectors = \{\par
\par
\tab // Can be adjusted by the user\par
\tab cacheLength: 50,\par
\par
\tab createPseudo: markFunction,\par
\par
\tab match: matchExpr,\par
\par
\tab attrHandle: \{\},\par
\par
\tab find: \{\},\par
\par
\tab relative: \{\par
\tab\tab ">": \{ dir: "parentNode", first: true \},\par
\tab\tab " ": \{ dir: "parentNode" \},\par
\tab\tab "+": \{ dir: "previousSibling", first: true \},\par
\tab\tab "~": \{ dir: "previousSibling" \}\par
\tab\},\par
\par
\tab preFilter: \{\par
\tab\tab "ATTR": function( match ) \{\par
\tab\tab\tab match[ 1 ] = match[ 1 ].replace( runescape, funescape );\par
\par
\tab\tab\tab // Move the given value to match[3] whether quoted or unquoted\par
\tab\tab\tab match[ 3 ] = ( match[ 3 ] || match[ 4 ] ||\par
\tab\tab\tab\tab match[ 5 ] || "" ).replace( runescape, funescape );\par
\par
\tab\tab\tab if ( match[ 2 ] === "~=" ) \{\par
\tab\tab\tab\tab match[ 3 ] = " " + match[ 3 ] + " ";\par
\tab\tab\tab\}\par
\par
\tab\tab\tab return match.slice( 0, 4 );\par
\tab\tab\},\par
\par
\tab\tab "CHILD": function( match ) \{\par
\par
\tab\tab\tab /* matches from matchExpr["CHILD"]\par
\tab\tab\tab\tab 1 type (only|nth|...)\par
\tab\tab\tab\tab 2 what (child|of-type)\par
\tab\tab\tab\tab 3 argument (even|odd|\\d*|\\d*n([+-]\\d+)?|...)\par
\tab\tab\tab\tab 4 xn-component of xn+y argument ([+-]?\\d*n|)\par
\tab\tab\tab\tab 5 sign of xn-component\par
\tab\tab\tab\tab 6 x of xn-component\par
\tab\tab\tab\tab 7 sign of y-component\par
\tab\tab\tab\tab 8 y of y-component\par
\tab\tab\tab */\par
\tab\tab\tab match[ 1 ] = match[ 1 ].toLowerCase();\par
\par
\tab\tab\tab if ( match[ 1 ].slice( 0, 3 ) === "nth" ) \{\par
\par
\tab\tab\tab\tab // nth-* requires argument\par
\tab\tab\tab\tab if ( !match[ 3 ] ) \{\par
\tab\tab\tab\tab\tab Sizzle.error( match[ 0 ] );\par
\tab\tab\tab\tab\}\par
\par
\tab\tab\tab\tab // numeric x and y parameters for Expr.filter.CHILD\par
\tab\tab\tab\tab // remember that false/true cast respectively to 0/1\par
\tab\tab\tab\tab match[ 4 ] = +( match[ 4 ] ?\par
\tab\tab\tab\tab\tab match[ 5 ] + ( match[ 6 ] || 1 ) :\par
\tab\tab\tab\tab\tab 2 * ( match[ 3 ] === "even" || match[ 3 ] === "odd" ) );\par
\tab\tab\tab\tab match[ 5 ] = +( ( match[ 7 ] + match[ 8 ] ) || match[ 3 ] === "odd" );\par
\par
\tab\tab\tab\tab // other types prohibit arguments\par
\tab\tab\tab\} else if ( match[ 3 ] ) \{\par
\tab\tab\tab\tab Sizzle.error( match[ 0 ] );\par
\tab\tab\tab\}\par
\par
\tab\tab\tab return match;\par
\tab\tab\},\par
\par
\tab\tab "PSEUDO": function( match ) \{\par
\tab\tab\tab var excess,\par
\tab\tab\tab\tab unquoted = !match[ 6 ] && match[ 2 ];\par
\par
\tab\tab\tab if ( matchExpr[ "CHILD" ].test( match[ 0 ] ) ) \{\par
\tab\tab\tab\tab return null;\par
\tab\tab\tab\}\par
\par
\tab\tab\tab // Accept quoted arguments as-is\par
\tab\tab\tab if ( match[ 3 ] ) \{\par
\tab\tab\tab\tab match[ 2 ] = match[ 4 ] || match[ 5 ] || "";\par
\par
\tab\tab\tab // Strip excess characters from unquoted arguments\par
\tab\tab\tab\} else if ( unquoted && rpseudo.test( unquoted ) &&\par
\par
\tab\tab\tab\tab // Get excess from tokenize (recursively)\par
\tab\tab\tab\tab ( excess = tokenize( unquoted, true ) ) &&\par
\par
\tab\tab\tab\tab // advance to the next closing parenthesis\par
\tab\tab\tab\tab ( excess = unquoted.indexOf( ")", unquoted.length - excess ) - unquoted.length ) ) \{\par
\par
\tab\tab\tab\tab // excess is a negative index\par
\tab\tab\tab\tab match[ 0 ] = match[ 0 ].slice( 0, excess );\par
\tab\tab\tab\tab match[ 2 ] = unquoted.slice( 0, excess );\par
\tab\tab\tab\}\par
\par
\tab\tab\tab // Return only captures needed by the pseudo filter method (type and argument)\par
\tab\tab\tab return match.slice( 0, 3 );\par
\tab\tab\}\par
\tab\},\par
\par
\tab filter: \{\par
\par
\tab\tab "TAG": function( nodeNameSelector ) \{\par
\tab\tab\tab var nodeName = nodeNameSelector.replace( runescape, funescape ).toLowerCase();\par
\tab\tab\tab return nodeNameSelector === "*" ?\par
\tab\tab\tab\tab function() \{\par
\tab\tab\tab\tab\tab return true;\par
\tab\tab\tab\tab\} :\par
\tab\tab\tab\tab function( elem ) \{\par
\tab\tab\tab\tab\tab return elem.nodeName && elem.nodeName.toLowerCase() === nodeName;\par
\tab\tab\tab\tab\};\par
\tab\tab\},\par
\par
\tab\tab "CLASS": function( className ) \{\par
\tab\tab\tab var pattern = classCache[ className + " " ];\par
\par
\tab\tab\tab return pattern ||\par
\tab\tab\tab\tab ( pattern = new RegExp( "(^|" + whitespace +\par
\tab\tab\tab\tab\tab ")" + className + "(" + whitespace + "|$)" ) ) && classCache(\par
\tab\tab\tab\tab\tab\tab className, function( elem ) \{\par
\tab\tab\tab\tab\tab\tab\tab return pattern.test(\par
\tab\tab\tab\tab\tab\tab\tab\tab typeof elem.className === "string" && elem.className ||\par
\tab\tab\tab\tab\tab\tab\tab\tab typeof elem.getAttribute !== "undefined" &&\par
\tab\tab\tab\tab\tab\tab\tab\tab\tab elem.getAttribute( "class" ) ||\par
\tab\tab\tab\tab\tab\tab\tab\tab ""\par
\tab\tab\tab\tab\tab\tab\tab );\par
\tab\tab\tab\tab\} );\par
\tab\tab\},\par
\par
\tab\tab "ATTR": function( name, operator, check ) \{\par
\tab\tab\tab return function( elem ) \{\par
\tab\tab\tab\tab var result = Sizzle.attr( elem, name );\par
\par
\tab\tab\tab\tab if ( result == null ) \{\par
\tab\tab\tab\tab\tab return operator === "!=";\par
\tab\tab\tab\tab\}\par
\tab\tab\tab\tab if ( !operator ) \{\par
\tab\tab\tab\tab\tab return true;\par
\tab\tab\tab\tab\}\par
\par
\tab\tab\tab\tab result += "";\par
\par
\tab\tab\tab\tab /* eslint-disable max-len */\par
\par
\tab\tab\tab\tab return operator === "=" ? result === check :\par
\tab\tab\tab\tab\tab operator === "!=" ? result !== check :\par
\tab\tab\tab\tab\tab operator === "^=" ? check && result.indexOf( check ) === 0 :\par
\tab\tab\tab\tab\tab operator === "*=" ? check && result.indexOf( check ) > -1 :\par
\tab\tab\tab\tab\tab operator === "$=" ? check && result.slice( -check.length ) === check :\par
\tab\tab\tab\tab\tab operator === "~=" ? ( " " + result.replace( rwhitespace, " " ) + " " ).indexOf( check ) > -1 :\par
\tab\tab\tab\tab\tab operator === "|=" ? result === check || result.slice( 0, check.length + 1 ) === check + "-" :\par
\tab\tab\tab\tab\tab false;\par
\tab\tab\tab\tab /* eslint-enable max-len */\par
\par
\tab\tab\tab\};\par
\tab\tab\},\par
\par
\tab\tab "CHILD": function( type, what, _argument, first, last ) \{\par
\tab\tab\tab var simple = type.slice( 0, 3 ) !== "nth",\par
\tab\tab\tab\tab forward = type.slice( -4 ) !== "last",\par
\tab\tab\tab\tab ofType = what === "of-type";\par
\par
\tab\tab\tab return first === 1 && last === 0 ?\par
\par
\tab\tab\tab\tab // Shortcut for :nth-*(n)\par
\tab\tab\tab\tab function( elem ) \{\par
\tab\tab\tab\tab\tab return !!elem.parentNode;\par
\tab\tab\tab\tab\} :\par
\par
\tab\tab\tab\tab function( elem, _context, xml ) \{\par
\tab\tab\tab\tab\tab var cache, uniqueCache, outerCache, node, nodeIndex, start,\par
\tab\tab\tab\tab\tab\tab dir = simple !== forward ? "nextSibling" : "previousSibling",\par
\tab\tab\tab\tab\tab\tab parent = elem.parentNode,\par
\tab\tab\tab\tab\tab\tab name = ofType && elem.nodeName.toLowerCase(),\par
\tab\tab\tab\tab\tab\tab useCache = !xml && !ofType,\par
\tab\tab\tab\tab\tab\tab diff = false;\par
\par
\tab\tab\tab\tab\tab if ( parent ) \{\par
\par
\tab\tab\tab\tab\tab\tab // :(first|last|only)-(child|of-type)\par
\tab\tab\tab\tab\tab\tab if ( simple ) \{\par
\tab\tab\tab\tab\tab\tab\tab while ( dir ) \{\par
\tab\tab\tab\tab\tab\tab\tab\tab node = elem;\par
\tab\tab\tab\tab\tab\tab\tab\tab while ( ( node = node[ dir ] ) ) \{\par
\tab\tab\tab\tab\tab\tab\tab\tab\tab if ( ofType ?\par
\tab\tab\tab\tab\tab\tab\tab\tab\tab\tab node.nodeName.toLowerCase() === name :\par
\tab\tab\tab\tab\tab\tab\tab\tab\tab\tab node.nodeType === 1 ) \{\par
\par
\tab\tab\tab\tab\tab\tab\tab\tab\tab\tab return false;\par
\tab\tab\tab\tab\tab\tab\tab\tab\tab\}\par
\tab\tab\tab\tab\tab\tab\tab\tab\}\par
\par
\tab\tab\tab\tab\tab\tab\tab\tab // Reverse direction for :only-* (if we haven't yet done so)\par
\tab\tab\tab\tab\tab\tab\tab\tab start = dir = type === "only" && !start && "nextSibling";\par
\tab\tab\tab\tab\tab\tab\tab\}\par
\tab\tab\tab\tab\tab\tab\tab return true;\par
\tab\tab\tab\tab\tab\tab\}\par
\par
\tab\tab\tab\tab\tab\tab start = [ forward ? parent.firstChild : parent.lastChild ];\par
\par
\tab\tab\tab\tab\tab\tab // non-xml :nth-child(...) stores cache data on `parent`\par
\tab\tab\tab\tab\tab\tab if ( forward && useCache ) \{\par
\par
\tab\tab\tab\tab\tab\tab\tab // Seek `elem` from a previously-cached index\par
\par
\tab\tab\tab\tab\tab\tab\tab // ...in a gzip-friendly way\par
\tab\tab\tab\tab\tab\tab\tab node = parent;\par
\tab\tab\tab\tab\tab\tab\tab outerCache = node[ expando ] || ( node[ expando ] = \{\} );\par
\par
\tab\tab\tab\tab\tab\tab\tab // Support: IE <9 only\par
\tab\tab\tab\tab\tab\tab\tab // Defend against cloned attroperties (jQuery gh-1709)\par
\tab\tab\tab\tab\tab\tab\tab uniqueCache = outerCache[ node.uniqueID ] ||\par
\tab\tab\tab\tab\tab\tab\tab\tab ( outerCache[ node.uniqueID ] = \{\} );\par
\par
\tab\tab\tab\tab\tab\tab\tab cache = uniqueCache[ type ] || [];\par
\tab\tab\tab\tab\tab\tab\tab nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];\par
\tab\tab\tab\tab\tab\tab\tab diff = nodeIndex && cache[ 2 ];\par
\tab\tab\tab\tab\tab\tab\tab node = nodeIndex && parent.childNodes[ nodeIndex ];\par
\par
\tab\tab\tab\tab\tab\tab\tab while ( ( node = ++nodeIndex && node && node[ dir ] ||\par
\par
\tab\tab\tab\tab\tab\tab\tab\tab // Fallback to seeking `elem` from the start\par
\tab\tab\tab\tab\tab\tab\tab\tab ( diff = nodeIndex = 0 ) || start.pop() ) ) \{\par
\par
\tab\tab\tab\tab\tab\tab\tab\tab // When found, cache indexes on `parent` and break\par
\tab\tab\tab\tab\tab\tab\tab\tab if ( node.nodeType === 1 && ++diff && node === elem ) \{\par
\tab\tab\tab\tab\tab\tab\tab\tab\tab uniqueCache[ type ] = [ dirruns, nodeIndex, diff ];\par
\tab\tab\tab\tab\tab\tab\tab\tab\tab break;\par
\tab\tab\tab\tab\tab\tab\tab\tab\}\par
\tab\tab\tab\tab\tab\tab\tab\}\par
\par
\tab\tab\tab\tab\tab\tab\} else \{\par
\par
\tab\tab\tab\tab\tab\tab\tab // Use previously-cached element index if available\par
\tab\tab\tab\tab\tab\tab\tab if ( useCache ) \{\par
\par
\tab\tab\tab\tab\tab\tab\tab\tab // ...in a gzip-friendly way\par
\tab\tab\tab\tab\tab\tab\tab\tab node = elem;\par
\tab\tab\tab\tab\tab\tab\tab\tab outerCache = node[ expando ] || ( node[ expando ] = \{\} );\par
\par
\tab\tab\tab\tab\tab\tab\tab\tab // Support: IE <9 only\par
\tab\tab\tab\tab\tab\tab\tab\tab // Defend against cloned attroperties (jQuery gh-1709)\par
\tab\tab\tab\tab\tab\tab\tab\tab uniqueCache = outerCache[ node.uniqueID ] ||\par
\tab\tab\tab\tab\tab\tab\tab\tab\tab ( outerCache[ node.uniqueID ] = \{\} );\par
\par
\tab\tab\tab\tab\tab\tab\tab\tab cache = uniqueCache[ type ] || [];\par
\tab\tab\tab\tab\tab\tab\tab\tab nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];\par
\tab\tab\tab\tab\tab\tab\tab\tab diff = nodeIndex;\par
\tab\tab\tab\tab\tab\tab\tab\}\par
\par
\tab\tab\tab\tab\tab\tab\tab // xml :nth-child(...)\par
\tab\tab\tab\tab\tab\tab\tab // or :nth-last-child(...) or :nth(-last)?-of-type(...)\par
\tab\tab\tab\tab\tab\tab\tab if ( diff === false ) \{\par
\par
\tab\tab\tab\tab\tab\tab\tab\tab // Use the same loop as above to seek `elem` from the start\par
\tab\tab\tab\tab\tab\tab\tab\tab while ( ( node = ++nodeIndex && node && node[ dir ] ||\par
\tab\tab\tab\tab\tab\tab\tab\tab\tab ( diff = nodeIndex = 0 ) || start.pop() ) ) \{\par
\par
\tab\tab\tab\tab\tab\tab\tab\tab\tab if ( ( ofType ?\par
\tab\tab\tab\tab\tab\tab\tab\tab\tab\tab node.nodeName.toLowerCase() === name :\par
\tab\tab\tab\tab\tab\tab\tab\tab\tab\tab node.nodeType === 1 ) &&\par
\tab\tab\tab\tab\tab\tab\tab\tab\tab\tab ++diff ) \{\par
\par
\tab\tab\tab\tab\tab\tab\tab\tab\tab\tab // Cache the index of each encountered element\par
\tab\tab\tab\tab\tab\tab\tab\tab\tab\tab if ( useCache ) \{\par
\tab\tab\tab\tab\tab\tab\tab\tab\tab\tab\tab outerCache = node[ expando ] ||\par
\tab\tab\tab\tab\tab\tab\tab\tab\tab\tab\tab\tab ( node[ expando ] = \{\} );\par
\par
\tab\tab\tab\tab\tab\tab\tab\tab\tab\tab\tab // Support: IE <9 only\par
\tab\tab\tab\tab\tab\tab\tab\tab\tab\tab\tab // Defend against cloned attroperties (jQuery gh-1709)\par
\tab\tab\tab\tab\tab\tab\tab\tab\tab\tab\tab uniqueCache = outerCache[ node.uniqueID ] ||\par
\tab\tab\tab\tab\tab\tab\tab\tab\tab\tab\tab\tab ( outerCache[ node.uniqueID ] = \{\} );\par
\par
\tab\tab\tab\tab\tab\tab\tab\tab\tab\tab\tab uniqueCache[ type ] = [ dirruns, diff ];\par
\tab\tab\tab\tab\tab\tab\tab\tab\tab\tab\}\par
\par
\tab\tab\tab\tab\tab\tab\tab\tab\tab\tab if ( node === elem ) \{\par
\tab\tab\tab\tab\tab\tab\tab\tab\tab\tab\tab break;\par
\tab\tab\tab\tab\tab\tab\tab\tab\tab\tab\}\par
\tab\tab\tab\tab\tab\tab\tab\tab\tab\}\par
\tab\tab\tab\tab\tab\tab\tab\tab\}\par
\tab\tab\tab\tab\tab\tab\tab\}\par
\tab\tab\tab\tab\tab\tab\}\par
\par
\tab\tab\tab\tab\tab\tab // Incorporate the offset, then check against cycle size\par
\tab\tab\tab\tab\tab\tab diff -= last;\par
\tab\tab\tab\tab\tab\tab return diff === first || ( diff % first === 0 && diff / first >= 0 );\par
\tab\tab\tab\tab\tab\}\par
\tab\tab\tab\tab\};\par
\tab\tab\},\par
\par
\tab\tab "PSEUDO": function( pseudo, argument ) \{\par
\par
\tab\tab\tab // pseudo-class names are case-insensitive\par
\tab\tab\tab // {{\field{\*\fldinst{HYPERLINK http://www.w3.org/TR/selectors/#pseudo-classes }}{\fldrslt{http://www.w3.org/TR/selectors/#pseudo-classes\ul0\cf0}}}}\f0\fs22\par
\tab\tab\tab // Prioritize by case sensitivity in case custom pseudos are added with uppercase letters\par
\tab\tab\tab // Remember that setFilters inherits from pseudos\par
\tab\tab\tab var args,\par
\tab\tab\tab\tab fn = Expr.pseudos[ pseudo ] || Expr.setFilters[ pseudo.toLowerCase() ] ||\par
\tab\tab\tab\tab\tab Sizzle.error( "unsupported pseudo: " + pseudo );\par
\par
\tab\tab\tab // The user may use createPseudo to indicate that\par
\tab\tab\tab // arguments are needed to create the filter function\par
\tab\tab\tab // just as Sizzle does\par
\tab\tab\tab if ( fn[ expando ] ) \{\par
\tab\tab\tab\tab return fn( argument );\par
\tab\tab\tab\}\par
\par
\tab\tab\tab // But maintain support for old signatures\par
\tab\tab\tab if ( fn.length > 1 ) \{\par
\tab\tab\tab\tab args = [ pseudo, pseudo, "", argument ];\par
\tab\tab\tab\tab return Expr.setFilters.hasOwnProperty( pseudo.toLowerCase() ) ?\par
\tab\tab\tab\tab\tab markFunction( function( seed, matches ) \{\par
\tab\tab\tab\tab\tab\tab var idx,\par
\tab\tab\tab\tab\tab\tab\tab matched = fn( seed, argument ),\par
\tab\tab\tab\tab\tab\tab\tab i = matched.length;\par
\tab\tab\tab\tab\tab\tab while ( i-- ) \{\par
\tab\tab\tab\tab\tab\tab\tab idx = indexOf( seed, matched[ i ] );\par
\tab\tab\tab\tab\tab\tab\tab seed[ idx ] = !( matches[ idx ] = matched[ i ] );\par
\tab\tab\tab\tab\tab\tab\}\par
\tab\tab\tab\tab\tab\} ) :\par
\tab\tab\tab\tab\tab function( elem ) \{\par
\tab\tab\tab\tab\tab\tab return fn( elem, 0, args );\par
\tab\tab\tab\tab\tab\};\par
\tab\tab\tab\}\par
\par
\tab\tab\tab return fn;\par
\tab\tab\}\par
\tab\},\par
\par
\tab pseudos: \{\par
\par
\tab\tab // Potentially complex pseudos\par
\tab\tab "not": markFunction( function( selector ) \{\par
\par
\tab\tab\tab // Trim the selector passed to compile\par
\tab\tab\tab // to avoid treating leading and trailing\par
\tab\tab\tab // spaces as combinators\par
\tab\tab\tab var input = [],\par
\tab\tab\tab\tab results = [],\par
\tab\tab\tab\tab matcher = compile( selector.replace( rtrim, "$1" ) );\par
\par
\tab\tab\tab return matcher[ expando ] ?\par
\tab\tab\tab\tab markFunction( function( seed, matches, _context, xml ) \{\par
\tab\tab\tab\tab\tab var elem,\par
\tab\tab\tab\tab\tab\tab unmatched = matcher( seed, null, xml, [] ),\par
\tab\tab\tab\tab\tab\tab i = seed.length;\par
\par
\tab\tab\tab\tab\tab // Match elements unmatched by `matcher`\par
\tab\tab\tab\tab\tab while ( i-- ) \{\par
\tab\tab\tab\tab\tab\tab if ( ( elem = unmatched[ i ] ) ) \{\par
\tab\tab\tab\tab\tab\tab\tab seed[ i ] = !( matches[ i ] = elem );\par
\tab\tab\tab\tab\tab\tab\}\par
\tab\tab\tab\tab\tab\}\par
\tab\tab\tab\tab\} ) :\par
\tab\tab\tab\tab function( elem, _context, xml ) \{\par
\tab\tab\tab\tab\tab input[ 0 ] = elem;\par
\tab\tab\tab\tab\tab matcher( input, null, xml, results );\par
\par
\tab\tab\tab\tab\tab // Don't keep the element (issue #299)\par
\tab\tab\tab\tab\tab input[ 0 ] = null;\par
\tab\tab\tab\tab\tab return !results.pop();\par
\tab\tab\tab\tab\};\par
\tab\tab\} ),\par
\par
\tab\tab "has": markFunction( function( selector ) \{\par
\tab\tab\tab return function( elem ) \{\par
\tab\tab\tab\tab return Sizzle( selector, elem ).length > 0;\par
\tab\tab\tab\};\par
\tab\tab\} ),\par
\par
\tab\tab "contains": markFunction( function( text ) \{\par
\tab\tab\tab text = text.replace( runescape, funescape );\par
\tab\tab\tab return function( elem ) \{\par
\tab\tab\tab\tab return ( elem.textContent || getText( elem ) ).indexOf( text ) > -1;\par
\tab\tab\tab\};\par
\tab\tab\} ),\par
\par
\tab\tab // "Whether an element is represented by a :lang() selector\par
\tab\tab // is based solely on the element's language value\par
\tab\tab // being equal to the identifier C,\par
\tab\tab // or beginning with the identifier C immediately followed by "-".\par
\tab\tab // The matching of C against the element's language value is performed case-insensitively.\par
\tab\tab // The identifier C does not have to be a valid language name."\par
\tab\tab // {{\field{\*\fldinst{HYPERLINK http://www.w3.org/TR/selectors/#lang-pseudo }}{\fldrslt{http://www.w3.org/TR/selectors/#lang-pseudo\ul0\cf0}}}}\f0\fs22\par
\tab\tab "lang": markFunction( function( lang ) \{\par
\par
\tab\tab\tab // lang value must be a valid identifier\par
\tab\tab\tab if ( !ridentifier.test( lang || "" ) ) \{\par
\tab\tab\tab\tab Sizzle.error( "unsupported lang: " + lang );\par
\tab\tab\tab\}\par
\tab\tab\tab lang = lang.replace( runescape, funescape ).toLowerCase();\par
\tab\tab\tab return function( elem ) \{\par
\tab\tab\tab\tab var elemLang;\par
\tab\tab\tab\tab do \{\par
\tab\tab\tab\tab\tab if ( ( elemLang = documentIsHTML ?\par
\tab\tab\tab\tab\tab\tab elem.lang :\par
\tab\tab\tab\tab\tab\tab elem.getAttribute( "xml:lang" ) || elem.getAttribute( "lang" ) ) ) \{\par
\par
\tab\tab\tab\tab\tab\tab elemLang = elemLang.toLowerCase();\par
\tab\tab\tab\tab\tab\tab return elemLang === lang || elemLang.indexOf( lang + "-" ) === 0;\par
\tab\tab\tab\tab\tab\}\par
\tab\tab\tab\tab\} while ( ( elem = elem.parentNode ) && elem.nodeType === 1 );\par
\tab\tab\tab\tab return false;\par
\tab\tab\tab\};\par
\tab\tab\} ),\par
\par
\tab\tab // Miscellaneous\par
\tab\tab "target": function( elem ) \{\par
\tab\tab\tab var hash = window.location && window.location.hash;\par
\tab\tab\tab return hash && hash.slice( 1 ) === elem.id;\par
\tab\tab\},\par
\par
\tab\tab "root": function( elem ) \{\par
\tab\tab\tab return elem === docElem;\par
\tab\tab\},\par
\par
\tab\tab "focus": function( elem ) \{\par
\tab\tab\tab return elem === document.activeElement &&\par
\tab\tab\tab\tab ( !document.hasFocus || document.hasFocus() ) &&\par
\tab\tab\tab\tab !!( elem.type || elem.href || ~elem.tabIndex );\par
\tab\tab\},\par
\par
\tab\tab // Boolean properties\par
\tab\tab "enabled": createDisabledPseudo( false ),\par
\tab\tab "disabled": createDisabledPseudo( true ),\par
\par
\tab\tab "checked": function( elem ) \{\par
\par
\tab\tab\tab // In CSS3, :checked should return both checked and selected elements\par
\tab\tab\tab // {{\field{\*\fldinst{HYPERLINK http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked }}{\fldrslt{http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked\ul0\cf0}}}}\f0\fs22\par
\tab\tab\tab var nodeName = elem.nodeName.toLowerCase();\par
\tab\tab\tab return ( nodeName === "input" && !!elem.checked ) ||\par
\tab\tab\tab\tab ( nodeName === "option" && !!elem.selected );\par
\tab\tab\},\par
\par
\tab\tab "selected": function( elem ) \{\par
\par
\tab\tab\tab // Accessing this property makes selected-by-default\par
\tab\tab\tab // options in Safari work properly\par
\tab\tab\tab if ( elem.parentNode ) \{\par
\tab\tab\tab\tab // eslint-disable-next-line no-unused-expressions\par
\tab\tab\tab\tab elem.parentNode.selectedIndex;\par
\tab\tab\tab\}\par
\par
\tab\tab\tab return elem.selected === true;\par
\tab\tab\},\par
\par
\tab\tab // Contents\par
\tab\tab "empty": function( elem ) \{\par
\par
\tab\tab\tab // {{\field{\*\fldinst{HYPERLINK http://www.w3.org/TR/selectors/#empty-pseudo }}{\fldrslt{http://www.w3.org/TR/selectors/#empty-pseudo\ul0\cf0}}}}\f0\fs22\par
\tab\tab\tab // :empty is negated by element (1) or content nodes (text: 3; cdata: 4; entity ref: 5),\par
\tab\tab\tab //   but not by others (comment: 8; processing instruction: 7; etc.)\par
\tab\tab\tab // nodeType < 6 works because attributes (2) do not appear as children\par
\tab\tab\tab for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) \{\par
\tab\tab\tab\tab if ( elem.nodeType < 6 ) \{\par
\tab\tab\tab\tab\tab return false;\par
\tab\tab\tab\tab\}\par
\tab\tab\tab\}\par
\tab\tab\tab return true;\par
\tab\tab\},\par
\par
\tab\tab "parent": function( elem ) \{\par
\tab\tab\tab return !Expr.pseudos[ "empty" ]( elem );\par
\tab\tab\},\par
\par
\tab\tab // Element/input types\par
\tab\tab "header": function( elem ) \{\par
\tab\tab\tab return rheader.test( elem.nodeName );\par
\tab\tab\},\par
\par
\tab\tab "input": function( elem ) \{\par
\tab\tab\tab return rinputs.test( elem.nodeName );\par
\tab\tab\},\par
\par
\tab\tab "button": function( elem ) \{\par
\tab\tab\tab var name = elem.nodeName.toLowerCase();\par
\tab\tab\tab return name === "input" && elem.type === "button" || name === "button";\par
\tab\tab\},\par
\par
\tab\tab "text": function( elem ) \{\par
\tab\tab\tab var attr;\par
\tab\tab\tab return elem.nodeName.toLowerCase() === "input" &&\par
\tab\tab\tab\tab elem.type === "text" &&\par
\par
\tab\tab\tab\tab // Support: IE<8\par
\tab\tab\tab\tab // New HTML5 attribute values (e.g., "search") appear with elem.type === "text"\par
\tab\tab\tab\tab ( ( attr = elem.getAttribute( "type" ) ) == null ||\par
\tab\tab\tab\tab\tab attr.toLowerCase() === "text" );\par
\tab\tab\},\par
\par
\tab\tab // Position-in-collection\par
\tab\tab "first": createPositionalPseudo( function() \{\par
\tab\tab\tab return [ 0 ];\par
\tab\tab\} ),\par
\par
\tab\tab "last": createPositionalPseudo( function( _matchIndexes, length ) \{\par
\tab\tab\tab return [ length - 1 ];\par
\tab\tab\} ),\par
\par
\tab\tab "eq": createPositionalPseudo( function( _matchIndexes, length, argument ) \{\par
\tab\tab\tab return [ argument < 0 ? argument + length : argument ];\par
\tab\tab\} ),\par
\par
\tab\tab "even": createPositionalPseudo( function( matchIndexes, length ) \{\par
\tab\tab\tab var i = 0;\par
\tab\tab\tab for ( ; i < length; i += 2 ) \{\par
\tab\tab\tab\tab matchIndexes.push( i );\par
\tab\tab\tab\}\par
\tab\tab\tab return matchIndexes;\par
\tab\tab\} ),\par
\par
\tab\tab "odd": createPositionalPseudo( function( matchIndexes, length ) \{\par
\tab\tab\tab var i = 1;\par
\tab\tab\tab for ( ; i < length; i += 2 ) \{\par
\tab\tab\tab\tab matchIndexes.push( i );\par
\tab\tab\tab\}\par
\tab\tab\tab return matchIndexes;\par
\tab\tab\} ),\par
\par
\tab\tab "lt": createPositionalPseudo( function( matchIndexes, length, argument ) \{\par
\tab\tab\tab var i = argument < 0 ?\par
\tab\tab\tab\tab argument + length :\par
\tab\tab\tab\tab argument > length ?\par
\tab\tab\tab\tab\tab length :\par
\tab\tab\tab\tab\tab argument;\par
\tab\tab\tab for ( ; --i >= 0; ) \{\par
\tab\tab\tab\tab matchIndexes.push( i );\par
\tab\tab\tab\}\par
\tab\tab\tab return matchIndexes;\par
\tab\tab\} ),\par
\par
\tab\tab "gt": createPositionalPseudo( function( matchIndexes, length, argument ) \{\par
\tab\tab\tab var i = argument < 0 ? argument + length : argument;\par
\tab\tab\tab for ( ; ++i < length; ) \{\par
\tab\tab\tab\tab matchIndexes.push( i );\par
\tab\tab\tab\}\par
\tab\tab\tab return matchIndexes;\par
\tab\tab\} )\par
\tab\}\par
\};\par
\par
Expr.pseudos[ "nth" ] = Expr.pseudos[ "eq" ];\par
\par
// Add button/input type pseudos\par
for ( i in \{ radio: true, checkbox: true, file: true, password: true, image: true \} ) \{\par
\tab Expr.pseudos[ i ] = createInputPseudo( i );\par
\}\par
for ( i in \{ submit: true, reset: true \} ) \{\par
\tab Expr.pseudos[ i ] = createButtonPseudo( i );\par
\}\par
\par
// Easy API for creating new setFilters\par
function setFilters() \{\}\par
setFilters.prototype = Expr.filters = Expr.pseudos;\par
Expr.setFilters = new setFilters();\par
\par
tokenize = Sizzle.tokenize = function( selector, parseOnly ) \{\par
\tab var matched, match, tokens, type,\par
\tab\tab soFar, groups, preFilters,\par
\tab\tab cached = tokenCache[ selector + " " ];\par
\par
\tab if ( cached ) \{\par
\tab\tab return parseOnly ? 0 : cached.slice( 0 );\par
\tab\}\par
\par
\tab soFar = selector;\par
\tab groups = [];\par
\tab preFilters = Expr.preFilter;\par
\par
\tab while ( soFar ) \{\par
\par
\tab\tab // Comma and first run\par
\tab\tab if ( !matched || ( match = rcomma.exec( soFar ) ) ) \{\par
\tab\tab\tab if ( match ) \{\par
\par
\tab\tab\tab\tab // Don't consume trailing commas as valid\par
\tab\tab\tab\tab soFar = soFar.slice( match[ 0 ].length ) || soFar;\par
\tab\tab\tab\}\par
\tab\tab\tab groups.push( ( tokens = [] ) );\par
\tab\tab\}\par
\par
\tab\tab matched = false;\par
\par
\tab\tab // Combinators\par
\tab\tab if ( ( match = rcombinators.exec( soFar ) ) ) \{\par
\tab\tab\tab matched = match.shift();\par
\tab\tab\tab tokens.push( \{\par
\tab\tab\tab\tab value: matched,\par
\par
\tab\tab\tab\tab // Cast descendant combinators to space\par
\tab\tab\tab\tab type: match[ 0 ].replace( rtrim, " " )\par
\tab\tab\tab\} );\par
\tab\tab\tab soFar = soFar.slice( matched.length );\par
\tab\tab\}\par
\par
\tab\tab // Filters\par
\tab\tab for ( type in Expr.filter ) \{\par
\tab\tab\tab if ( ( match = matchExpr[ type ].exec( soFar ) ) && ( !preFilters[ type ] ||\par
\tab\tab\tab\tab ( match = preFilters[ type ]( match ) ) ) ) \{\par
\tab\tab\tab\tab matched = match.shift();\par
\tab\tab\tab\tab tokens.push( \{\par
\tab\tab\tab\tab\tab value: matched,\par
\tab\tab\tab\tab\tab type: type,\par
\tab\tab\tab\tab\tab matches: match\par
\tab\tab\tab\tab\} );\par
\tab\tab\tab\tab soFar = soFar.slice( matched.length );\par
\tab\tab\tab\}\par
\tab\tab\}\par
\par
\tab\tab if ( !matched ) \{\par
\tab\tab\tab break;\par
\tab\tab\}\par
\tab\}\par
\par
\tab // Return the length of the invalid excess\par
\tab // if we're just parsing\par
\tab // Otherwise, throw an error or return tokens\par
\tab return parseOnly ?\par
\tab\tab soFar.length :\par
\tab\tab soFar ?\par
\tab\tab\tab Sizzle.error( selector ) :\par
\par
\tab\tab\tab // Cache the tokens\par
\tab\tab\tab tokenCache( selector, groups ).slice( 0 );\par
\};\par
\par
function toSelector( tokens ) \{\par
\tab var i = 0,\par
\tab\tab len = tokens.length,\par
\tab\tab selector = "";\par
\tab for ( ; i < len; i++ ) \{\par
\tab\tab selector += tokens[ i ].value;\par
\tab\}\par
\tab return selector;\par
\}\par
\par
function addCombinator( matcher, combinator, base ) \{\par
\tab var dir = combinator.dir,\par
\tab\tab skip = combinator.next,\par
\tab\tab key = skip || dir,\par
\tab\tab checkNonElements = base && key === "parentNode",\par
\tab\tab doneName = done++;\par
\par
\tab return combinator.first ?\par
\par
\tab\tab // Check against closest ancestor/preceding element\par
\tab\tab function( elem, context, xml ) \{\par
\tab\tab\tab while ( ( elem = elem[ dir ] ) ) \{\par
\tab\tab\tab\tab if ( elem.nodeType === 1 || checkNonElements ) \{\par
\tab\tab\tab\tab\tab return matcher( elem, context, xml );\par
\tab\tab\tab\tab\}\par
\tab\tab\tab\}\par
\tab\tab\tab return false;\par
\tab\tab\} :\par
\par
\tab\tab // Check against all ancestor/preceding elements\par
\tab\tab function( elem, context, xml ) \{\par
\tab\tab\tab var oldCache, uniqueCache, outerCache,\par
\tab\tab\tab\tab newCache = [ dirruns, doneName ];\par
\par
\tab\tab\tab // We can't set arbitrary data on XML nodes, so they don't benefit from combinator caching\par
\tab\tab\tab if ( xml ) \{\par
\tab\tab\tab\tab while ( ( elem = elem[ dir ] ) ) \{\par
\tab\tab\tab\tab\tab if ( elem.nodeType === 1 || checkNonElements ) \{\par
\tab\tab\tab\tab\tab\tab if ( matcher( elem, context, xml ) ) \{\par
\tab\tab\tab\tab\tab\tab\tab return true;\par
\tab\tab\tab\tab\tab\tab\}\par
\tab\tab\tab\tab\tab\}\par
\tab\tab\tab\tab\}\par
\tab\tab\tab\} else \{\par
\tab\tab\tab\tab while ( ( elem = elem[ dir ] ) ) \{\par
\tab\tab\tab\tab\tab if ( elem.nodeType === 1 || checkNonElements ) \{\par
\tab\tab\tab\tab\tab\tab outerCache = elem[ expando ] || ( elem[ expando ] = \{\} );\par
\par
\tab\tab\tab\tab\tab\tab // Support: IE <9 only\par
\tab\tab\tab\tab\tab\tab // Defend against cloned attroperties (jQuery gh-1709)\par
\tab\tab\tab\tab\tab\tab uniqueCache = outerCache[ elem.uniqueID ] ||\par
\tab\tab\tab\tab\tab\tab\tab ( outerCache[ elem.uniqueID ] = \{\} );\par
\par
\tab\tab\tab\tab\tab\tab if ( skip && skip === elem.nodeName.toLowerCase() ) \{\par
\tab\tab\tab\tab\tab\tab\tab elem = elem[ dir ] || elem;\par
\tab\tab\tab\tab\tab\tab\} else if ( ( oldCache = uniqueCache[ key ] ) &&\par
\tab\tab\tab\tab\tab\tab\tab oldCache[ 0 ] === dirruns && oldCache[ 1 ] === doneName ) \{\par
\par
\tab\tab\tab\tab\tab\tab\tab // Assign to newCache so results back-propagate to previous elements\par
\tab\tab\tab\tab\tab\tab\tab return ( newCache[ 2 ] = oldCache[ 2 ] );\par
\tab\tab\tab\tab\tab\tab\} else \{\par
\par
\tab\tab\tab\tab\tab\tab\tab // Reuse newcache so results back-propagate to previous elements\par
\tab\tab\tab\tab\tab\tab\tab uniqueCache[ key ] = newCache;\par
\par
\tab\tab\tab\tab\tab\tab\tab // A match means we're done; a fail means we have to keep checking\par
\tab\tab\tab\tab\tab\tab\tab if ( ( newCache[ 2 ] = matcher( elem, context, xml ) ) ) \{\par
\tab\tab\tab\tab\tab\tab\tab\tab return true;\par
\tab\tab\tab\tab\tab\tab\tab\}\par
\tab\tab\tab\tab\tab\tab\}\par
\tab\tab\tab\tab\tab\}\par
\tab\tab\tab\tab\}\par
\tab\tab\tab\}\par
\tab\tab\tab return false;\par
\tab\tab\};\par
\}\par
\par
function elementMatcher( matchers ) \{\par
\tab return matchers.length > 1 ?\par
\tab\tab function( elem, context, xml ) \{\par
\tab\tab\tab var i = matchers.length;\par
\tab\tab\tab while ( i-- ) \{\par
\tab\tab\tab\tab if ( !matchers[ i ]( elem, context, xml ) ) \{\par
\tab\tab\tab\tab\tab return false;\par
\tab\tab\tab\tab\}\par
\tab\tab\tab\}\par
\tab\tab\tab return true;\par
\tab\tab\} :\par
\tab\tab matchers[ 0 ];\par
\}\par
\par
function multipleContexts( selector, contexts, results ) \{\par
\tab var i = 0,\par
\tab\tab len = contexts.length;\par
\tab for ( ; i < len; i++ ) \{\par
\tab\tab Sizzle( selector, contexts[ i ], results );\par
\tab\}\par
\tab return results;\par
\}\par
\par
function condense( unmatched, map, filter, context, xml ) \{\par
\tab var elem,\par
\tab\tab newUnmatched = [],\par
\tab\tab i = 0,\par
\tab\tab len = unmatched.length,\par
\tab\tab mapped = map != null;\par
\par
\tab for ( ; i < len; i++ ) \{\par
\tab\tab if ( ( elem = unmatched[ i ] ) ) \{\par
\tab\tab\tab if ( !filter || filter( elem, context, xml ) ) \{\par
\tab\tab\tab\tab newUnmatched.push( elem );\par
\tab\tab\tab\tab if ( mapped ) \{\par
\tab\tab\tab\tab\tab map.push( i );\par
\tab\tab\tab\tab\}\par
\tab\tab\tab\}\par
\tab\tab\}\par
\tab\}\par
\par
\tab return newUnmatched;\par
\}\par
\par
function setMatcher( preFilter, selector, matcher, postFilter, postFinder, postSelector ) \{\par
\tab if ( postFilter && !postFilter[ expando ] ) \{\par
\tab\tab postFilter = setMatcher( postFilter );\par
\tab\}\par
\tab if ( postFinder && !postFinder[ expando ] ) \{\par
\tab\tab postFinder = setMatcher( postFinder, postSelector );\par
\tab\}\par
\tab return markFunction( function( seed, results, context, xml ) \{\par
\tab\tab var temp, i, elem,\par
\tab\tab\tab preMap = [],\par
\tab\tab\tab postMap = [],\par
\tab\tab\tab preexisting = results.length,\par
\par
\tab\tab\tab // Get initial elements from seed or context\par
\tab\tab\tab elems = seed || multipleContexts(\par
\tab\tab\tab\tab selector || "*",\par
\tab\tab\tab\tab context.nodeType ? [ context ] : context,\par
\tab\tab\tab\tab []\par
\tab\tab\tab ),\par
\par
\tab\tab\tab // Prefilter to get matcher input, preserving a map for seed-results synchronization\par
\tab\tab\tab matcherIn = preFilter && ( seed || !selector ) ?\par
\tab\tab\tab\tab condense( elems, preMap, preFilter, context, xml ) :\par
\tab\tab\tab\tab elems,\par
\par
\tab\tab\tab matcherOut = matcher ?\par
\par
\tab\tab\tab\tab // If we have a postFinder, or filtered seed, or non-seed postFilter or preexisting results,\par
\tab\tab\tab\tab postFinder || ( seed ? preFilter : preexisting || postFilter ) ?\par
\par
\tab\tab\tab\tab\tab // ...intermediate processing is necessary\par
\tab\tab\tab\tab\tab [] :\par
\par
\tab\tab\tab\tab\tab // ...otherwise use results directly\par
\tab\tab\tab\tab\tab results :\par
\tab\tab\tab\tab matcherIn;\par
\par
\tab\tab // Find primary matches\par
\tab\tab if ( matcher ) \{\par
\tab\tab\tab matcher( matcherIn, matcherOut, context, xml );\par
\tab\tab\}\par
\par
\tab\tab // Apply postFilter\par
\tab\tab if ( postFilter ) \{\par
\tab\tab\tab temp = condense( matcherOut, postMap );\par
\tab\tab\tab postFilter( temp, [], context, xml );\par
\par
\tab\tab\tab // Un-match failing elements by moving them back to matcherIn\par
\tab\tab\tab i = temp.length;\par
\tab\tab\tab while ( i-- ) \{\par
\tab\tab\tab\tab if ( ( elem = temp[ i ] ) ) \{\par
\tab\tab\tab\tab\tab matcherOut[ postMap[ i ] ] = !( matcherIn[ postMap[ i ] ] = elem );\par
\tab\tab\tab\tab\}\par
\tab\tab\tab\}\par
\tab\tab\}\par
\par
\tab\tab if ( seed ) \{\par
\tab\tab\tab if ( postFinder || preFilter ) \{\par
\tab\tab\tab\tab if ( postFinder ) \{\par
\par
\tab\tab\tab\tab\tab // Get the final matcherOut by condensing this intermediate into postFinder contexts\par
\tab\tab\tab\tab\tab temp = [];\par
\tab\tab\tab\tab\tab i = matcherOut.length;\par
\tab\tab\tab\tab\tab while ( i-- ) \{\par
\tab\tab\tab\tab\tab\tab if ( ( elem = matcherOut[ i ] ) ) \{\par
\par
\tab\tab\tab\tab\tab\tab\tab // Restore matcherIn since elem is not yet a final match\par
\tab\tab\tab\tab\tab\tab\tab temp.push( ( matcherIn[ i ] = elem ) );\par
\tab\tab\tab\tab\tab\tab\}\par
\tab\tab\tab\tab\tab\}\par
\tab\tab\tab\tab\tab postFinder( null, ( matcherOut = [] ), temp, xml );\par
\tab\tab\tab\tab\}\par
\par
\tab\tab\tab\tab // Move matched elements from seed to results to keep them synchronized\par
\tab\tab\tab\tab i = matcherOut.length;\par
\tab\tab\tab\tab while ( i-- ) \{\par
\tab\tab\tab\tab\tab if ( ( elem = matcherOut[ i ] ) &&\par
\tab\tab\tab\tab\tab\tab ( temp = postFinder ? indexOf( seed, elem ) : preMap[ i ] ) > -1 ) \{\par
\par
\tab\tab\tab\tab\tab\tab seed[ temp ] = !( results[ temp ] = elem );\par
\tab\tab\tab\tab\tab\}\par
\tab\tab\tab\tab\}\par
\tab\tab\tab\}\par
\par
\tab\tab // Add elements to results, through postFinder if defined\par
\tab\tab\} else \{\par
\tab\tab\tab matcherOut = condense(\par
\tab\tab\tab\tab matcherOut === results ?\par
\tab\tab\tab\tab\tab matcherOut.splice( preexisting, matcherOut.length ) :\par
\tab\tab\tab\tab\tab matcherOut\par
\tab\tab\tab );\par
\tab\tab\tab if ( postFinder ) \{\par
\tab\tab\tab\tab postFinder( null, results, matcherOut, xml );\par
\tab\tab\tab\} else \{\par
\tab\tab\tab\tab push.apply( results, matcherOut );\par
\tab\tab\tab\}\par
\tab\tab\}\par
\tab\} );\par
\}\par
\par
function matcherFromTokens( tokens ) \{\par
\tab var checkContext, matcher, j,\par
\tab\tab len = tokens.length,\par
\tab\tab leadingRelative = Expr.relative[ tokens[ 0 ].type ],\par
\tab\tab implicitRelative = leadingRelative || Expr.relative[ " " ],\par
\tab\tab i = leadingRelative ? 1 : 0,\par
\par
\tab\tab // The foundational matcher ensures that elements are reachable from top-level context(s)\par
\tab\tab matchContext = addCombinator( function( elem ) \{\par
\tab\tab\tab return elem === checkContext;\par
\tab\tab\}, implicitRelative, true ),\par
\tab\tab matchAnyContext = addCombinator( function( elem ) \{\par
\tab\tab\tab return indexOf( checkContext, elem ) > -1;\par
\tab\tab\}, implicitRelative, true ),\par
\tab\tab matchers = [ function( elem, context, xml ) \{\par
\tab\tab\tab var ret = ( !leadingRelative && ( xml || context !== outermostContext ) ) || (\par
\tab\tab\tab\tab ( checkContext = context ).nodeType ?\par
\tab\tab\tab\tab\tab matchContext( elem, context, xml ) :\par
\tab\tab\tab\tab\tab matchAnyContext( elem, context, xml ) );\par
\par
\tab\tab\tab // Avoid hanging onto element (issue #299)\par
\tab\tab\tab checkContext = null;\par
\tab\tab\tab return ret;\par
\tab\tab\} ];\par
\par
\tab for ( ; i < len; i++ ) \{\par
\tab\tab if ( ( matcher = Expr.relative[ tokens[ i ].type ] ) ) \{\par
\tab\tab\tab matchers = [ addCombinator( elementMatcher( matchers ), matcher ) ];\par
\tab\tab\} else \{\par
\tab\tab\tab matcher = Expr.filter[ tokens[ i ].type ].apply( null, tokens[ i ].matches );\par
\par
\tab\tab\tab // Return special upon seeing a positional matcher\par
\tab\tab\tab if ( matcher[ expando ] ) \{\par
\par
\tab\tab\tab\tab // Find the next relative operator (if any) for proper handling\par
\tab\tab\tab\tab j = ++i;\par
\tab\tab\tab\tab for ( ; j < len; j++ ) \{\par
\tab\tab\tab\tab\tab if ( Expr.relative[ tokens[ j ].type ] ) \{\par
\tab\tab\tab\tab\tab\tab break;\par
\tab\tab\tab\tab\tab\}\par
\tab\tab\tab\tab\}\par
\tab\tab\tab\tab return setMatcher(\par
\tab\tab\tab\tab\tab i > 1 && elementMatcher( matchers ),\par
\tab\tab\tab\tab\tab i > 1 && toSelector(\par
\par
\tab\tab\tab\tab\tab // If the preceding token was a descendant combinator, insert an implicit any-element `*`\par
\tab\tab\tab\tab\tab tokens\par
\tab\tab\tab\tab\tab\tab .slice( 0, i - 1 )\par
\tab\tab\tab\tab\tab\tab .concat( \{ value: tokens[ i - 2 ].type === " " ? "*" : "" \} )\par
\tab\tab\tab\tab\tab ).replace( rtrim, "$1" ),\par
\tab\tab\tab\tab\tab matcher,\par
\tab\tab\tab\tab\tab i < j && matcherFromTokens( tokens.slice( i, j ) ),\par
\tab\tab\tab\tab\tab j < len && matcherFromTokens( ( tokens = tokens.slice( j ) ) ),\par
\tab\tab\tab\tab\tab j < len && toSelector( tokens )\par
\tab\tab\tab\tab );\par
\tab\tab\tab\}\par
\tab\tab\tab matchers.push( matcher );\par
\tab\tab\}\par
\tab\}\par
\par
\tab return elementMatcher( matchers );\par
\}\par
\par
function matcherFromGroupMatchers( elementMatchers, setMatchers ) \{\par
\tab var bySet = setMatchers.length > 0,\par
\tab\tab byElement = elementMatchers.length > 0,\par
\tab\tab superMatcher = function( seed, context, xml, results, outermost ) \{\par
\tab\tab\tab var elem, j, matcher,\par
\tab\tab\tab\tab matchedCount = 0,\par
\tab\tab\tab\tab i = "0",\par
\tab\tab\tab\tab unmatched = seed && [],\par
\tab\tab\tab\tab setMatched = [],\par
\tab\tab\tab\tab contextBackup = outermostContext,\par
\par
\tab\tab\tab\tab // We must always have either seed elements or outermost context\par
\tab\tab\tab\tab elems = seed || byElement && Expr.find[ "TAG" ]( "*", outermost ),\par
\par
\tab\tab\tab\tab // Use integer dirruns iff this is the outermost matcher\par
\tab\tab\tab\tab dirrunsUnique = ( dirruns += contextBackup == null ? 1 : Math.random() || 0.1 ),\par
\tab\tab\tab\tab len = elems.length;\par
\par
\tab\tab\tab if ( outermost ) \{\par
\par
\tab\tab\tab\tab // Support: IE 11+, Edge 17 - 18+\par
\tab\tab\tab\tab // IE/Edge sometimes throw a "Permission denied" error when strict-comparing\par
\tab\tab\tab\tab // two documents; shallow comparisons work.\par
\tab\tab\tab\tab // eslint-disable-next-line eqeqeq\par
\tab\tab\tab\tab outermostContext = context == document || context || outermost;\par
\tab\tab\tab\}\par
\par
\tab\tab\tab // Add elements passing elementMatchers directly to results\par
\tab\tab\tab // Support: IE<9, Safari\par
\tab\tab\tab // Tolerate NodeList properties (IE: "length"; Safari: <number>) matching elements by id\par
\tab\tab\tab for ( ; i !== len && ( elem = elems[ i ] ) != null; i++ ) \{\par
\tab\tab\tab\tab if ( byElement && elem ) \{\par
\tab\tab\tab\tab\tab j = 0;\par
\par
\tab\tab\tab\tab\tab // Support: IE 11+, Edge 17 - 18+\par
\tab\tab\tab\tab\tab // IE/Edge sometimes throw a "Permission denied" error when strict-comparing\par
\tab\tab\tab\tab\tab // two documents; shallow comparisons work.\par
\tab\tab\tab\tab\tab // eslint-disable-next-line eqeqeq\par
\tab\tab\tab\tab\tab if ( !context && elem.ownerDocument != document ) \{\par
\tab\tab\tab\tab\tab\tab setDocument( elem );\par
\tab\tab\tab\tab\tab\tab xml = !documentIsHTML;\par
\tab\tab\tab\tab\tab\}\par
\tab\tab\tab\tab\tab while ( ( matcher = elementMatchers[ j++ ] ) ) \{\par
\tab\tab\tab\tab\tab\tab if ( matcher( elem, context || document, xml ) ) \{\par
\tab\tab\tab\tab\tab\tab\tab results.push( elem );\par
\tab\tab\tab\tab\tab\tab\tab break;\par
\tab\tab\tab\tab\tab\tab\}\par
\tab\tab\tab\tab\tab\}\par
\tab\tab\tab\tab\tab if ( outermost ) \{\par
\tab\tab\tab\tab\tab\tab dirruns = dirrunsUnique;\par
\tab\tab\tab\tab\tab\}\par
\tab\tab\tab\tab\}\par
\par
\tab\tab\tab\tab // Track unmatched elements for set filters\par
\tab\tab\tab\tab if ( bySet ) \{\par
\par
\tab\tab\tab\tab\tab // They will have gone through all possible matchers\par
\tab\tab\tab\tab\tab if ( ( elem = !matcher && elem ) ) \{\par
\tab\tab\tab\tab\tab\tab matchedCount--;\par
\tab\tab\tab\tab\tab\}\par
\par
\tab\tab\tab\tab\tab // Lengthen the array for every element, matched or not\par
\tab\tab\tab\tab\tab if ( seed ) \{\par
\tab\tab\tab\tab\tab\tab unmatched.push( elem );\par
\tab\tab\tab\tab\tab\}\par
\tab\tab\tab\tab\}\par
\tab\tab\tab\}\par
\par
\tab\tab\tab // `i` is now the count of elements visited above, and adding it to `matchedCount`\par
\tab\tab\tab // makes the latter nonnegative.\par
\tab\tab\tab matchedCount += i;\par
\par
\tab\tab\tab // Apply set filters to unmatched elements\par
\tab\tab\tab // NOTE: This can be skipped if there are no unmatched elements (i.e., `matchedCount`\par
\tab\tab\tab // equals `i`), unless we didn't visit _any_ elements in the above loop because we have\par
\tab\tab\tab // no element matchers and no seed.\par
\tab\tab\tab // Incrementing an initially-string "0" `i` allows `i` to remain a string only in that\par
\tab\tab\tab // case, which will result in a "00" `matchedCount` that differs from `i` but is also\par
\tab\tab\tab // numerically zero.\par
\tab\tab\tab if ( bySet && i !== matchedCount ) \{\par
\tab\tab\tab\tab j = 0;\par
\tab\tab\tab\tab while ( ( matcher = setMatchers[ j++ ] ) ) \{\par
\tab\tab\tab\tab\tab matcher( unmatched, setMatched, context, xml );\par
\tab\tab\tab\tab\}\par
\par
\tab\tab\tab\tab if ( seed ) \{\par
\par
\tab\tab\tab\tab\tab // Reintegrate element matches to eliminate the need for sorting\par
\tab\tab\tab\tab\tab if ( matchedCount > 0 ) \{\par
\tab\tab\tab\tab\tab\tab while ( i-- ) \{\par
\tab\tab\tab\tab\tab\tab\tab if ( !( unmatched[ i ] || setMatched[ i ] ) ) \{\par
\tab\tab\tab\tab\tab\tab\tab\tab setMatched[ i ] = pop.call( results );\par
\tab\tab\tab\tab\tab\tab\tab\}\par
\tab\tab\tab\tab\tab\tab\}\par
\tab\tab\tab\tab\tab\}\par
\par
\tab\tab\tab\tab\tab // Discard index placeholder values to get only actual matches\par
\tab\tab\tab\tab\tab setMatched = condense( setMatched );\par
\tab\tab\tab\tab\}\par
\par
\tab\tab\tab\tab // Add matches to results\par
\tab\tab\tab\tab push.apply( results, setMatched );\par
\par
\tab\tab\tab\tab // Seedless set matches succeeding multiple successful matchers stipulate sorting\par
\tab\tab\tab\tab if ( outermost && !seed && setMatched.length > 0 &&\par
\tab\tab\tab\tab\tab ( matchedCount + setMatchers.length ) > 1 ) \{\par
\par
\tab\tab\tab\tab\tab Sizzle.uniqueSort( results );\par
\tab\tab\tab\tab\}\par
\tab\tab\tab\}\par
\par
\tab\tab\tab // Override manipulation of globals by nested matchers\par
\tab\tab\tab if ( outermost ) \{\par
\tab\tab\tab\tab dirruns = dirrunsUnique;\par
\tab\tab\tab\tab outermostContext = contextBackup;\par
\tab\tab\tab\}\par
\par
\tab\tab\tab return unmatched;\par
\tab\tab\};\par
\par
\tab return bySet ?\par
\tab\tab markFunction( superMatcher ) :\par
\tab\tab superMatcher;\par
\}\par
\par
compile = Sizzle.compile = function( selector, match /* Internal Use Only */ ) \{\par
\tab var i,\par
\tab\tab setMatchers = [],\par
\tab\tab elementMatchers = [],\par
\tab\tab cached = compilerCache[ selector + " " ];\par
\par
\tab if ( !cached ) \{\par
\par
\tab\tab // Generate a function of recursive functions that can be used to check each element\par
\tab\tab if ( !match ) \{\par
\tab\tab\tab match = tokenize( selector );\par
\tab\tab\}\par
\tab\tab i = match.length;\par
\tab\tab while ( i-- ) \{\par
\tab\tab\tab cached = matcherFromTokens( match[ i ] );\par
\tab\tab\tab if ( cached[ expando ] ) \{\par
\tab\tab\tab\tab setMatchers.push( cached );\par
\tab\tab\tab\} else \{\par
\tab\tab\tab\tab elementMatchers.push( cached );\par
\tab\tab\tab\}\par
\tab\tab\}\par
\par
\tab\tab // Cache the compiled function\par
\tab\tab cached = compilerCache(\par
\tab\tab\tab selector,\par
\tab\tab\tab matcherFromGroupMatchers( elementMatchers, setMatchers )\par
\tab\tab );\par
\par
\tab\tab // Save selector and tokenization\par
\tab\tab cached.selector = selector;\par
\tab\}\par
\tab return cached;\par
\};\par
\par
/**\par
 * A low-level selection function that works with Sizzle's compiled\par
 *  selector functions\par
 * @param \{String|Function\} selector A selector or a pre-compiled\par
 *  selector function built with Sizzle.compile\par
 * @param \{Element\} context\par
 * @param \{Array\} [results]\par
 * @param \{Array\} [seed] A set of elements to match against\par
 */\par
select = Sizzle.select = function( selector, context, results, seed ) \{\par
\tab var i, tokens, token, type, find,\par
\tab\tab compiled = typeof selector === "function" && selector,\par
\tab\tab match = !seed && tokenize( ( selector = compiled.selector || selector ) );\par
\par
\tab results = results || [];\par
\par
\tab // Try to minimize operations if there is only one selector in the list and no seed\par
\tab // (the latter of which guarantees us context)\par
\tab if ( match.length === 1 ) \{\par
\par
\tab\tab // Reduce context if the leading compound selector is an ID\par
\tab\tab tokens = match[ 0 ] = match[ 0 ].slice( 0 );\par
\tab\tab if ( tokens.length > 2 && ( token = tokens[ 0 ] ).type === "ID" &&\par
\tab\tab\tab context.nodeType === 9 && documentIsHTML && Expr.relative[ tokens[ 1 ].type ] ) \{\par
\par
\tab\tab\tab context = ( Expr.find[ "ID" ]( token.matches[ 0 ]\par
\tab\tab\tab\tab .replace( runescape, funescape ), context ) || [] )[ 0 ];\par
\tab\tab\tab if ( !context ) \{\par
\tab\tab\tab\tab return results;\par
\par
\tab\tab\tab // Precompiled matchers will still verify ancestry, so step up a level\par
\tab\tab\tab\} else if ( compiled ) \{\par
\tab\tab\tab\tab context = context.parentNode;\par
\tab\tab\tab\}\par
\par
\tab\tab\tab selector = selector.slice( tokens.shift().value.length );\par
\tab\tab\}\par
\par
\tab\tab // Fetch a seed set for right-to-left matching\par
\tab\tab i = matchExpr[ "needsContext" ].test( selector ) ? 0 : tokens.length;\par
\tab\tab while ( i-- ) \{\par
\tab\tab\tab token = tokens[ i ];\par
\par
\tab\tab\tab // Abort if we hit a combinator\par
\tab\tab\tab if ( Expr.relative[ ( type = token.type ) ] ) \{\par
\tab\tab\tab\tab break;\par
\tab\tab\tab\}\par
\tab\tab\tab if ( ( find = Expr.find[ type ] ) ) \{\par
\par
\tab\tab\tab\tab // Search, expanding context for leading sibling combinators\par
\tab\tab\tab\tab if ( ( seed = find(\par
\tab\tab\tab\tab\tab token.matches[ 0 ].replace( runescape, funescape ),\par
\tab\tab\tab\tab\tab rsibling.test( tokens[ 0 ].type ) && testContext( context.parentNode ) ||\par
\tab\tab\tab\tab\tab\tab context\par
\tab\tab\tab\tab ) ) ) \{\par
\par
\tab\tab\tab\tab\tab // If seed is empty or no tokens remain, we can return early\par
\tab\tab\tab\tab\tab tokens.splice( i, 1 );\par
\tab\tab\tab\tab\tab selector = seed.length && toSelector( tokens );\par
\tab\tab\tab\tab\tab if ( !selector ) \{\par
\tab\tab\tab\tab\tab\tab push.apply( results, seed );\par
\tab\tab\tab\tab\tab\tab return results;\par
\tab\tab\tab\tab\tab\}\par
\par
\tab\tab\tab\tab\tab break;\par
\tab\tab\tab\tab\}\par
\tab\tab\tab\}\par
\tab\tab\}\par
\tab\}\par
\par
\tab // Compile and execute a filtering function if one is not provided\par
\tab // Provide `match` to avoid retokenization if we modified the selector above\par
\tab ( compiled || compile( selector, match ) )(\par
\tab\tab seed,\par
\tab\tab context,\par
\tab\tab !documentIsHTML,\par
\tab\tab results,\par
\tab\tab !context || rsibling.test( selector ) && testContext( context.parentNode ) || context\par
\tab );\par
\tab return results;\par
\};\par
\par
// One-time assignments\par
\par
// Sort stability\par
support.sortStable = expando.split( "" ).sort( sortOrder ).join( "" ) === expando;\par
\par
// Support: Chrome 14-35+\par
// Always assume duplicates if they aren't passed to the comparison function\par
support.detectDuplicates = !!hasDuplicate;\par
\par
// Initialize against the default document\par
setDocument();\par
\par
// Support: Webkit<537.32 - Safari 6.0.3/Chrome 25 (fixed in Chrome 27)\par
// Detached nodes confoundingly follow *each other*\par
support.sortDetached = assert( function( el ) \{\par
\par
\tab // Should return 1, but returns 4 (following)\par
\tab return el.compareDocumentPosition( document.createElement( "fieldset" ) ) & 1;\par
\} );\par
\par
// Support: IE<8\par
// Prevent attribute/property "interpolation"\par
// {{\field{\*\fldinst{HYPERLINK https://msdn.microsoft.com/en-us/library/ms536429%28VS.85%29.aspx }}{\fldrslt{https://msdn.microsoft.com/en-us/library/ms536429%28VS.85%29.aspx\ul0\cf0}}}}\f0\fs22\par
if ( !assert( function( el ) \{\par
\tab el.innerHTML = "<a href='#'></a>";\par
\tab return el.firstChild.getAttribute( "href" ) === "#";\par
\} ) ) \{\par
\tab addHandle( "type|href|height|width", function( elem, name, isXML ) \{\par
\tab\tab if ( !isXML ) \{\par
\tab\tab\tab return elem.getAttribute( name, name.toLowerCase() === "type" ? 1 : 2 );\par
\tab\tab\}\par
\tab\} );\par
\}\par
\par
// Support: IE<9\par
// Use defaultValue in place of getAttribute("value")\par
if ( !support.attributes || !assert( function( el ) \{\par
\tab el.innerHTML = "<input/>";\par
\tab el.firstChild.setAttribute( "value", "" );\par
\tab return el.firstChild.getAttribute( "value" ) === "";\par
\} ) ) \{\par
\tab addHandle( "value", function( elem, _name, isXML ) \{\par
\tab\tab if ( !isXML && elem.nodeName.toLowerCase() === "input" ) \{\par
\tab\tab\tab return elem.defaultValue;\par
\tab\tab\}\par
\tab\} );\par
\}\par
\par
// Support: IE<9\par
// Use getAttributeNode to fetch booleans when getAttribute lies\par
if ( !assert( function( el ) \{\par
\tab return el.getAttribute( "disabled" ) == null;\par
\} ) ) \{\par
\tab addHandle( booleans, function( elem, name, isXML ) \{\par
\tab\tab var val;\par
\tab\tab if ( !isXML ) \{\par
\tab\tab\tab return elem[ name ] === true ? name.toLowerCase() :\par
\tab\tab\tab\tab ( val = elem.getAttributeNode( name ) ) && val.specified ?\par
\tab\tab\tab\tab\tab val.value :\par
\tab\tab\tab\tab\tab null;\par
\tab\tab\}\par
\tab\} );\par
\}\par
\par
return Sizzle;\par
\par
\} )( window );\par
\par
\par
\par
jQuery.find = Sizzle;\par
jQuery.expr = Sizzle.selectors;\par
\par
// Deprecated\par
jQuery.expr[ ":" ] = jQuery.expr.pseudos;\par
jQuery.uniqueSort = jQuery.unique = Sizzle.uniqueSort;\par
jQuery.text = Sizzle.getText;\par
jQuery.isXMLDoc = Sizzle.isXML;\par
jQuery.contains = Sizzle.contains;\par
jQuery.escapeSelector = Sizzle.escape;\par
\par
\par
\par
\par
var dir = function( elem, dir, until ) \{\par
\tab var matched = [],\par
\tab\tab truncate = until !== undefined;\par
\par
\tab while ( ( elem = elem[ dir ] ) && elem.nodeType !== 9 ) \{\par
\tab\tab if ( elem.nodeType === 1 ) \{\par
\tab\tab\tab if ( truncate && jQuery( elem ).is( until ) ) \{\par
\tab\tab\tab\tab break;\par
\tab\tab\tab\}\par
\tab\tab\tab matched.push( elem );\par
\tab\tab\}\par
\tab\}\par
\tab return matched;\par
\};\par
\par
\par
var siblings = function( n, elem ) \{\par
\tab var matched = [];\par
\par
\tab for ( ; n; n = n.nextSibling ) \{\par
\tab\tab if ( n.nodeType === 1 && n !== elem ) \{\par
\tab\tab\tab matched.push( n );\par
\tab\tab\}\par
\tab\}\par
\par
\tab return matched;\par
\};\par
\par
\par
var rneedsContext = jQuery.expr.match.needsContext;\par
\par
\par
\par
function nodeName( elem, name ) \{\par
\par
\tab return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();\par
\par
\}\par
var rsingleTag = ( /^<([a-z][^\\/\\0>:\\x20\\t\\r\\n\\f]*)[\\x20\\t\\r\\n\\f]*\\/?>(?:<\\/\\1>|)$/i );\par
\par
\par
\par
// Implement the identical functionality for filter and not\par
function winnow( elements, qualifier, not ) \{\par
\tab if ( isFunction( qualifier ) ) \{\par
\tab\tab return jQuery.grep( elements, function( elem, i ) \{\par
\tab\tab\tab return !!qualifier.call( elem, i, elem ) !== not;\par
\tab\tab\} );\par
\tab\}\par
\par
\tab // Single element\par
\tab if ( qualifier.nodeType ) \{\par
\tab\tab return jQuery.grep( elements, function( elem ) \{\par
\tab\tab\tab return ( elem === qualifier ) !== not;\par
\tab\tab\} );\par
\tab\}\par
\par
\tab // Arraylike of elements (jQuery, arguments, Array)\par
\tab if ( typeof qualifier !== "string" ) \{\par
\tab\tab return jQuery.grep( elements, function( elem ) \{\par
\tab\tab\tab return ( indexOf.call( qualifier, elem ) > -1 ) !== not;\par
\tab\tab\} );\par
\tab\}\par
\par
\tab // Filtered directly for both simple and complex selectors\par
\tab return jQuery.filter( qualifier, elements, not );\par
\}\par
\par
jQuery.filter = function( expr, elems, not ) \{\par
\tab var elem = elems[ 0 ];\par
\par
\tab if ( not ) \{\par
\tab\tab expr = ":not(" + expr + ")";\par
\tab\}\par
\par
\tab if ( elems.length === 1 && elem.nodeType === 1 ) \{\par
\tab\tab return jQuery.find.matchesSelector( elem, expr ) ? [ elem ] : [];\par
\tab\}\par
\par
\tab return jQuery.find.matches( expr, jQuery.grep( elems, function( elem ) \{\par
\tab\tab return elem.nodeType === 1;\par
\tab\} ) );\par
\};\par
\par
jQuery.fn.extend( \{\par
\tab find: function( selector ) \{\par
\tab\tab var i, ret,\par
\tab\tab\tab len = this.length,\par
\tab\tab\tab self = this;\par
\par
\tab\tab if ( typeof selector !== "string" ) \{\par
\tab\tab\tab return this.pushStack( jQuery( selector ).filter( function() \{\par
\tab\tab\tab\tab for ( i = 0; i < len; i++ ) \{\par
\tab\tab\tab\tab\tab if ( jQuery.contains( self[ i ], this ) ) \{\par
\tab\tab\tab\tab\tab\tab return true;\par
\tab\tab\tab\tab\tab\}\par
\tab\tab\tab\tab\}\par
\tab\tab\tab\} ) );\par
\tab\tab\}\par
\par
\tab\tab ret = this.pushStack( [] );\par
\par
\tab\tab for ( i = 0; i < len; i++ ) \{\par
\tab\tab\tab jQuery.find( selector, self[ i ], ret );\par
\tab\tab\}\par
\par
\tab\tab return len > 1 ? jQuery.uniqueSort( ret ) : ret;\par
\tab\},\par
\tab filter: function( selector ) \{\par
\tab\tab return this.pushStack( winnow( this, selector || [], false ) );\par
\tab\},\par
\tab not: function( selector ) \{\par
\tab\tab return this.pushStack( winnow( this, selector || [], true ) );\par
\tab\},\par
\tab is: function( selector ) \{\par
\tab\tab return !!winnow(\par
\tab\tab\tab this,\par
\par
\tab\tab\tab // If this is a positional/relative selector, check membership in the returned set\par
\tab\tab\tab // so $("p:first").is("p:last") won't return true for a doc with two "p".\par
\tab\tab\tab typeof selector === "string" && rneedsContext.test( selector ) ?\par
\tab\tab\tab\tab jQuery( selector ) :\par
\tab\tab\tab\tab selector || [],\par
\tab\tab\tab false\par
\tab\tab ).length;\par
\tab\}\par
\} );\par
\par
\par
// Initialize a jQuery object\par
\par
\par
// A central reference to the root jQuery(document)\par
var rootjQuery,\par
\par
\tab // A simple way to check for HTML strings\par
\tab // Prioritize #id over <tag> to avoid XSS via location.hash (#9521)\par
\tab // Strict HTML recognition (#11290: must start with <)\par
\tab // Shortcut simple #id case for speed\par
\tab rquickExpr = /^(?:\\s*(<[\\w\\W]+>)[^>]*|#([\\w-]+))$/,\par
\par
\tab init = jQuery.fn.init = function( selector, context, root ) \{\par
\tab\tab var match, elem;\par
\par
\tab\tab // HANDLE: $(""), $(null), $(undefined), $(false)\par
\tab\tab if ( !selector ) \{\par
\tab\tab\tab return this;\par
\tab\tab\}\par
\par
\tab\tab // Method init() accepts an alternate rootjQuery\par
\tab\tab // so migrate can support jQuery.sub (gh-2101)\par
\tab\tab root = root || rootjQuery;\par
\par
\tab\tab // Handle HTML strings\par
\tab\tab if ( typeof selector === "string" ) \{\par
\tab\tab\tab if ( selector[ 0 ] === "<" &&\par
\tab\tab\tab\tab selector[ selector.length - 1 ] === ">" &&\par
\tab\tab\tab\tab selector.length >= 3 ) \{\par
\par
\tab\tab\tab\tab // Assume that strings that start and end with <> are HTML and skip the regex check\par
\tab\tab\tab\tab match = [ null, selector, null ];\par
\par
\tab\tab\tab\} else \{\par
\tab\tab\tab\tab match = rquickExpr.exec( selector );\par
\tab\tab\tab\}\par
\par
\tab\tab\tab // Match html or make sure no context is specified for #id\par
\tab\tab\tab if ( match && ( match[ 1 ] || !context ) ) \{\par
\par
\tab\tab\tab\tab // HANDLE: $(html) -> $(array)\par
\tab\tab\tab\tab if ( match[ 1 ] ) \{\par
\tab\tab\tab\tab\tab context = context instanceof jQuery ? context[ 0 ] : context;\par
\par
\tab\tab\tab\tab\tab // Option to run scripts is true for back-compat\par
\tab\tab\tab\tab\tab // Intentionally let the error be thrown if parseHTML is not present\par
\tab\tab\tab\tab\tab jQuery.merge( this, jQuery.parseHTML(\par
\tab\tab\tab\tab\tab\tab match[ 1 ],\par
\tab\tab\tab\tab\tab\tab context && context.nodeType ? context.ownerDocument || context : document,\par
\tab\tab\tab\tab\tab\tab true\par
\tab\tab\tab\tab\tab ) );\par
\par
\tab\tab\tab\tab\tab // HANDLE: $(html, props)\par
\tab\tab\tab\tab\tab if ( rsingleTag.test( match[ 1 ] ) && jQuery.isPlainObject( context ) ) \{\par
\tab\tab\tab\tab\tab\tab for ( match in context ) \{\par
\par
\tab\tab\tab\tab\tab\tab\tab // Properties of context are called as methods if possible\par
\tab\tab\tab\tab\tab\tab\tab if ( isFunction( this[ match ] ) ) \{\par
\tab\tab\tab\tab\tab\tab\tab\tab this[ match ]( context[ match ] );\par
\par
\tab\tab\tab\tab\tab\tab\tab // ...and otherwise set as attributes\par
\tab\tab\tab\tab\tab\tab\tab\} else \{\par
\tab\tab\tab\tab\tab\tab\tab\tab this.attr( match, context[ match ] );\par
\tab\tab\tab\tab\tab\tab\tab\}\par
\tab\tab\tab\tab\tab\tab\}\par
\tab\tab\tab\tab\tab\}\par
\par
\tab\tab\tab\tab\tab return this;\par
\par
\tab\tab\tab\tab // HANDLE: $(#id)\par
\tab\tab\tab\tab\} else \{\par
\tab\tab\tab\tab\tab elem = document.getElementById( match[ 2 ] );\par
\par
\tab\tab\tab\tab\tab if ( elem ) \{\par
\par
\tab\tab\tab\tab\tab\tab // Inject the element directly into the jQuery object\par
\tab\tab\tab\tab\tab\tab this[ 0 ] = elem;\par
\tab\tab\tab\tab\tab\tab this.length = 1;\par
\tab\tab\tab\tab\tab\}\par
\tab\tab\tab\tab\tab return this;\par
\tab\tab\tab\tab\}\par
\par
\tab\tab\tab // HANDLE: $(expr, $(...))\par
\tab\tab\tab\} else if ( !context || context.jquery ) \{\par
\tab\tab\tab\tab return ( context || root ).find( selector );\par
\par
\tab\tab\tab // HANDLE: $(expr, context)\par
\tab\tab\tab // (which is just equivalent to: $(context).find(expr)\par
\tab\tab\tab\} else \{\par
\tab\tab\tab\tab return this.constructor( context ).find( selector );\par
\tab\tab\tab\}\par
\par
\tab\tab // HANDLE: $(DOMElement)\par
\tab\tab\} else if ( selector.nodeType ) \{\par
\tab\tab\tab this[ 0 ] = selector;\par
\tab\tab\tab this.length = 1;\par
\tab\tab\tab return this;\par
\par
\tab\tab // HANDLE: $(function)\par
\tab\tab // Shortcut for document ready\par
\tab\tab\} else if ( isFunction( selector ) ) \{\par
\tab\tab\tab return root.ready !== undefined ?\par
\tab\tab\tab\tab root.ready( selector ) :\par
\par
\tab\tab\tab\tab // Execute immediately if ready is not present\par
\tab\tab\tab\tab selector( jQuery );\par
\tab\tab\}\par
\par
\tab\tab return jQuery.makeArray( selector, this );\par
\tab\};\par
\par
// Give the init function the jQuery prototype for later instantiation\par
init.prototype = jQuery.fn;\par
\par
// Initialize central reference\par
rootjQuery = jQuery( document );\par
\par
\par
var rparentsprev = /^(?:parents|prev(?:Until|All))/,\par
\par
\tab // Methods guaranteed to produce a unique set when starting from a unique set\par
\tab guaranteedUnique = \{\par
\tab\tab children: true,\par
\tab\tab contents: true,\par
\tab\tab next: true,\par
\tab\tab prev: true\par
\tab\};\par
\par
jQuery.fn.extend( \{\par
\tab has: function( target ) \{\par
\tab\tab var targets = jQuery( target, this ),\par
\tab\tab\tab l = targets.length;\par
\par
\tab\tab return this.filter( function() \{\par
\tab\tab\tab var i = 0;\par
\tab\tab\tab for ( ; i < l; i++ ) \{\par
\tab\tab\tab\tab if ( jQuery.contains( this, targets[ i ] ) ) \{\par
\tab\tab\tab\tab\tab return true;\par
\tab\tab\tab\tab\}\par
\tab\tab\tab\}\par
\tab\tab\} );\par
\tab\},\par
\par
\tab closest: function( selectors, context ) \{\par
\tab\tab var cur,\par
\tab\tab\tab i = 0,\par
\tab\tab\tab l = this.length,\par
\tab\tab\tab matched = [],\par
\tab\tab\tab targets = typeof selectors !== "string" && jQuery( selectors );\par
\par
\tab\tab // Positional selectors never match, since there's no _selection_ context\par
\tab\tab if ( !rneedsContext.test( selectors ) ) \{\par
\tab\tab\tab for ( ; i < l; i++ ) \{\par
\tab\tab\tab\tab for ( cur = this[ i ]; cur && cur !== context; cur = cur.parentNode ) \{\par
\par
\tab\tab\tab\tab\tab // Always skip document fragments\par
\tab\tab\tab\tab\tab if ( cur.nodeType < 11 && ( targets ?\par
\tab\tab\tab\tab\tab\tab targets.index( cur ) > -1 :\par
\par
\tab\tab\tab\tab\tab\tab // Don't pass non-elements to Sizzle\par
\tab\tab\tab\tab\tab\tab cur.nodeType === 1 &&\par
\tab\tab\tab\tab\tab\tab\tab jQuery.find.matchesSelector( cur, selectors ) ) ) \{\par
\par
\tab\tab\tab\tab\tab\tab matched.push( cur );\par
\tab\tab\tab\tab\tab\tab break;\par
\tab\tab\tab\tab\tab\}\par
\tab\tab\tab\tab\}\par
\tab\tab\tab\}\par
\tab\tab\}\par
\par
\tab\tab return this.pushStack( matched.length > 1 ? jQuery.uniqueSort( matched ) : matched );\par
\tab\},\par
\par
\tab // Determine the position of an element within the set\par
\tab index: function( elem ) \{\par
\par
\tab\tab // No argument, return index in parent\par
\tab\tab if ( !elem ) \{\par
\tab\tab\tab return ( this[ 0 ] && this[ 0 ].parentNode ) ? this.first().prevAll().length : -1;\par
\tab\tab\}\par
\par
\tab\tab // Index in selector\par
\tab\tab if ( typeof elem === "string" ) \{\par
\tab\tab\tab return indexOf.call( jQuery( elem ), this[ 0 ] );\par
\tab\tab\}\par
\par
\tab\tab // Locate the position of the desired element\par
\tab\tab return indexOf.call( this,\par
\par
\tab\tab\tab // If it receives a jQuery object, the first element is used\par
\tab\tab\tab elem.jquery ? elem[ 0 ] : elem\par
\tab\tab );\par
\tab\},\par
\par
\tab add: function( selector, context ) \{\par
\tab\tab return this.pushStack(\par
\tab\tab\tab jQuery.uniqueSort(\par
\tab\tab\tab\tab jQuery.merge( this.get(), jQuery( selector, context ) )\par
\tab\tab\tab )\par
\tab\tab );\par
\tab\},\par
\par
\tab addBack: function( selector ) \{\par
\tab\tab return this.add( selector == null ?\par
\tab\tab\tab this.prevObject : this.prevObject.filter( selector )\par
\tab\tab );\par
\tab\}\par
\} );\par
\par
function sibling( cur, dir ) \{\par
\tab while ( ( cur = cur[ dir ] ) && cur.nodeType !== 1 ) \{\}\par
\tab return cur;\par
\}\par
\par
jQuery.each( \{\par
\tab parent: function( elem ) \{\par
\tab\tab var parent = elem.parentNode;\par
\tab\tab return parent && parent.nodeType !== 11 ? parent : null;\par
\tab\},\par
\tab parents: function( elem ) \{\par
\tab\tab return dir( elem, "parentNode" );\par
\tab\},\par
\tab parentsUntil: function( elem, _i, until ) \{\par
\tab\tab return dir( elem, "parentNode", until );\par
\tab\},\par
\tab next: function( elem ) \{\par
\tab\tab return sibling( elem, "nextSibling" );\par
\tab\},\par
\tab prev: function( elem ) \{\par
\tab\tab return sibling( elem, "previousSibling" );\par
\tab\},\par
\tab nextAll: function( elem ) \{\par
\tab\tab return dir( elem, "nextSibling" );\par
\tab\},\par
\tab prevAll: function( elem ) \{\par
\tab\tab return dir( elem, "previousSibling" );\par
\tab\},\par
\tab nextUntil: function( elem, _i, until ) \{\par
\tab\tab return dir( elem, "nextSibling", until );\par
\tab\},\par
\tab prevUntil: function( elem, _i, until ) \{\par
\tab\tab return dir( elem, "previousSibling", until );\par
\tab\},\par
\tab siblings: function( elem ) \{\par
\tab\tab return siblings( ( elem.parentNode || \{\} ).firstChild, elem );\par
\tab\},\par
\tab children: function( elem ) \{\par
\tab\tab return siblings( elem.firstChild );\par
\tab\},\par
\tab contents: function( elem ) \{\par
\tab\tab if ( elem.contentDocument != null &&\par
\par
\tab\tab\tab // Support: IE 11+\par
\tab\tab\tab // <object> elements with no `data` attribute has an object\par
\tab\tab\tab // `contentDocument` with a `null` prototype.\par
\tab\tab\tab getProto( elem.contentDocument ) ) \{\par
\par
\tab\tab\tab return elem.contentDocument;\par
\tab\tab\}\par
\par
\tab\tab // Support: IE 9 - 11 only, iOS 7 only, Android Browser <=4.3 only\par
\tab\tab // Treat the template element as a regular one in browsers that\par
\tab\tab // don't support it.\par
\tab\tab if ( nodeName( elem, "template" ) ) \{\par
\tab\tab\tab elem = elem.content || elem;\par
\tab\tab\}\par
\par
\tab\tab return jQuery.merge( [], elem.childNodes );\par
\tab\}\par
\}, function( name, fn ) \{\par
\tab jQuery.fn[ name ] = function( until, selector ) \{\par
\tab\tab var matched = jQuery.map( this, fn, until );\par
\par
\tab\tab if ( name.slice( -5 ) !== "Until" ) \{\par
\tab\tab\tab selector = until;\par
\tab\tab\}\par
\par
\tab\tab if ( selector && typeof selector === "string" ) \{\par
\tab\tab\tab matched = jQuery.filter( selector, matched );\par
\tab\tab\}\par
\par
\tab\tab if ( this.length > 1 ) \{\par
\par
\tab\tab\tab // Remove duplicates\par
\tab\tab\tab if ( !guaranteedUnique[ name ] ) \{\par
\tab\tab\tab\tab jQuery.uniqueSort( matched );\par
\tab\tab\tab\}\par
\par
\tab\tab\tab // Reverse order for parents* and prev-derivatives\par
\tab\tab\tab if ( rparentsprev.test( name ) ) \{\par
\tab\tab\tab\tab matched.reverse();\par
\tab\tab\tab\}\par
\tab\tab\}\par
\par
\tab\tab return this.pushStack( matched );\par
\tab\};\par
\} );\par
var rnothtmlwhite = ( /[^\\x20\\t\\r\\n\\f]+/g );\par
\par
\par
\par
// Convert String-formatted options into Object-formatted ones\par
function createOptions( options ) \{\par
\tab var object = \{\};\par
\tab jQuery.each( options.match( rnothtmlwhite ) || [], function( _, flag ) \{\par
\tab\tab object[ flag ] = true;\par
\tab\} );\par
\tab return object;\par
\}\par
\par
/*\par
 * Create a callback list using the following parameters:\par
 *\par
 *\tab options: an optional list of space-separated options that will change how\par
 *\tab\tab\tab the callback list behaves or a more traditional option object\par
 *\par
 * By default a callback list will act like an event callback list and can be\par
 * "fired" multiple times.\par
 *\par
 * Possible options:\par
 *\par
 *\tab once:\tab\tab\tab will ensure the callback list can only be fired once (like a Deferred)\par
 *\par
 *\tab memory:\tab\tab\tab will keep track of previous values and will call any callback added\par
 *\tab\tab\tab\tab\tab after the list has been fired right away with the latest "memorized"\par
 *\tab\tab\tab\tab\tab values (like a Deferred)\par
 *\par
 *\tab unique:\tab\tab\tab will ensure a callback can only be added once (no duplicate in the list)\par
 *\par
 *\tab stopOnFalse:\tab interrupt callings when a callback returns false\par
 *\par
 */\par
jQuery.Callbacks = function( options ) \{\par
\par
\tab // Convert options from String-formatted to Object-formatted if needed\par
\tab // (we check in cache first)\par
\tab options = typeof options === "string" ?\par
\tab\tab createOptions( options ) :\par
\tab\tab jQuery.extend( \{\}, options );\par
\par
\tab var // Flag to know if list is currently firing\par
\tab\tab firing,\par
\par
\tab\tab // Last fire value for non-forgettable lists\par
\tab\tab memory,\par
\par
\tab\tab // Flag to know if list was already fired\par
\tab\tab fired,\par
\par
\tab\tab // Flag to prevent firing\par
\tab\tab locked,\par
\par
\tab\tab // Actual callback list\par
\tab\tab list = [],\par
\par
\tab\tab // Queue of execution data for repeatable lists\par
\tab\tab queue = [],\par
\par
\tab\tab // Index of currently firing callback (modified by add/remove as needed)\par
\tab\tab firingIndex = -1,\par
\par
\tab\tab // Fire callbacks\par
\tab\tab fire = function() \{\par
\par
\tab\tab\tab // Enforce single-firing\par
\tab\tab\tab locked = locked || options.once;\par
\par
\tab\tab\tab // Execute callbacks for all pending executions,\par
\tab\tab\tab // respecting firingIndex overrides and runtime changes\par
\tab\tab\tab fired = firing = true;\par
\tab\tab\tab for ( ; queue.length; firingIndex = -1 ) \{\par
\tab\tab\tab\tab memory = queue.shift();\par
\tab\tab\tab\tab while ( ++firingIndex < list.length ) \{\par
\par
\tab\tab\tab\tab\tab // Run callback and check for early termination\par
\tab\tab\tab\tab\tab if ( list[ firingIndex ].apply( memory[ 0 ], memory[ 1 ] ) === false &&\par
\tab\tab\tab\tab\tab\tab options.stopOnFalse ) \{\par
\par
\tab\tab\tab\tab\tab\tab // Jump to end and forget the data so .add doesn't re-fire\par
\tab\tab\tab\tab\tab\tab firingIndex = list.length;\par
\tab\tab\tab\tab\tab\tab memory = false;\par
\tab\tab\tab\tab\tab\}\par
\tab\tab\tab\tab\}\par
\tab\tab\tab\}\par
\par
\tab\tab\tab // Forget the data if we're done with it\par
\tab\tab\tab if ( !options.memory ) \{\par
\tab\tab\tab\tab memory = false;\par
\tab\tab\tab\}\par
\par
\tab\tab\tab firing = false;\par
\par
\tab\tab\tab // Clean up if we're done firing for good\par
\tab\tab\tab if ( locked ) \{\par
\par
\tab\tab\tab\tab // Keep an empty list if we have data for future add calls\par
\tab\tab\tab\tab if ( memory ) \{\par
\tab\tab\tab\tab\tab list = [];\par
\par
\tab\tab\tab\tab // Otherwise, this object is spent\par
\tab\tab\tab\tab\} else \{\par
\tab\tab\tab\tab\tab list = "";\par
\tab\tab\tab\tab\}\par
\tab\tab\tab\}\par
\tab\tab\},\par
\par
\tab\tab // Actual Callbacks object\par
\tab\tab self = \{\par
\par
\tab\tab\tab // Add a callback or a collection of callbacks to the list\par
\tab\tab\tab add: function() \{\par
\tab\tab\tab\tab if ( list ) \{\par
\par
\tab\tab\tab\tab\tab // If we have memory from a past run, we should fire after adding\par
\tab\tab\tab\tab\tab if ( memory && !firing ) \{\par
\tab\tab\tab\tab\tab\tab firingIndex = list.length - 1;\par
\tab\tab\tab\tab\tab\tab queue.push( memory );\par
\tab\tab\tab\tab\tab\}\par
\par
\tab\tab\tab\tab\tab ( function add( args ) \{\par
\tab\tab\tab\tab\tab\tab jQuery.each( args, function( _, arg ) \{\par
\tab\tab\tab\tab\tab\tab\tab if ( isFunction( arg ) ) \{\par
\tab\tab\tab\tab\tab\tab\tab\tab if ( !options.unique || !self.has( arg ) ) \{\par
\tab\tab\tab\tab\tab\tab\tab\tab\tab list.push( arg );\par
\tab\tab\tab\tab\tab\tab\tab\tab\}\par
\tab\tab\tab\tab\tab\tab\tab\} else if ( arg && arg.length && toType( arg ) !== "string" ) \{\par
\par
\tab\tab\tab\tab\tab\tab\tab\tab // Inspect recursively\par
\tab\tab\tab\tab\tab\tab\tab\tab add( arg );\par
\tab\tab\tab\tab\tab\tab\tab\}\par
\tab\tab\tab\tab\tab\tab\} );\par
\tab\tab\tab\tab\tab\} )( arguments );\par
\par
\tab\tab\tab\tab\tab if ( memory && !firing ) \{\par
\tab\tab\tab\tab\tab\tab fire();\par
\tab\tab\tab\tab\tab\}\par
\tab\tab\tab\tab\}\par
\tab\tab\tab\tab return this;\par
\tab\tab\tab\},\par
\par
\tab\tab\tab // Remove a callback from the list\par
\tab\tab\tab remove: function() \{\par
\tab\tab\tab\tab jQuery.each( arguments, function( _, arg ) \{\par
\tab\tab\tab\tab\tab var index;\par
\tab\tab\tab\tab\tab while ( ( index = jQuery.inArray( arg, list, index ) ) > -1 ) \{\par
\tab\tab\tab\tab\tab\tab list.splice( index, 1 );\par
\par
\tab\tab\tab\tab\tab\tab // Handle firing indexes\par
\tab\tab\tab\tab\tab\tab if ( index <= firingIndex ) \{\par
\tab\tab\tab\tab\tab\tab\tab firingIndex--;\par
\tab\tab\tab\tab\tab\tab\}\par
\tab\tab\tab\tab\tab\}\par
\tab\tab\tab\tab\} );\par
\tab\tab\tab\tab return this;\par
\tab\tab\tab\},\par
\par
\tab\tab\tab // Check if a given callback is in the list.\par
\tab\tab\tab // If no argument is given, return whether or not list has callbacks attached.\par
\tab\tab\tab has: function( fn ) \{\par
\tab\tab\tab\tab return fn ?\par
\tab\tab\tab\tab\tab jQuery.inArray( fn, list ) > -1 :\par
\tab\tab\tab\tab\tab list.length > 0;\par
\tab\tab\tab\},\par
\par
\tab\tab\tab // Remove all callbacks from the list\par
\tab\tab\tab empty: function() \{\par
\tab\tab\tab\tab if ( list ) \{\par
\tab\tab\tab\tab\tab list = [];\par
\tab\tab\tab\tab\}\par
\tab\tab\tab\tab return this;\par
\tab\tab\tab\},\par
\par
\tab\tab\tab // Disable .fire and .add\par
\tab\tab\tab // Abort any current/pending executions\par
\tab\tab\tab // Clear all callbacks and values\par
\tab\tab\tab disable: function() \{\par
\tab\tab\tab\tab locked = queue = [];\par
\tab\tab\tab\tab list = memory = "";\par
\tab\tab\tab\tab return this;\par
\tab\tab\tab\},\par
\tab\tab\tab disabled: function() \{\par
\tab\tab\tab\tab return !list;\par
\tab\tab\tab\},\par
\par
\tab\tab\tab // Disable .fire\par
\tab\tab\tab // Also disable .add unless we have memory (since it would have no effect)\par
\tab\tab\tab // Abort any pending executions\par
\tab\tab\tab lock: function() \{\par
\tab\tab\tab\tab locked = queue = [];\par
\tab\tab\tab\tab if ( !memory && !firing ) \{\par
\tab\tab\tab\tab\tab list = memory = "";\par
\tab\tab\tab\tab\}\par
\tab\tab\tab\tab return this;\par
\tab\tab\tab\},\par
\tab\tab\tab locked: function() \{\par
\tab\tab\tab\tab return !!locked;\par
\tab\tab\tab\},\par
\par
\tab\tab\tab // Call all callbacks with the given context and arguments\par
\tab\tab\tab fireWith: function( context, args ) \{\par
\tab\tab\tab\tab if ( !locked ) \{\par
\tab\tab\tab\tab\tab args = args || [];\par
\tab\tab\tab\tab\tab args = [ context, args.slice ? args.slice() : args ];\par
\tab\tab\tab\tab\tab queue.push( args );\par
\tab\tab\tab\tab\tab if ( !firing ) \{\par
\tab\tab\tab\tab\tab\tab fire();\par
\tab\tab\tab\tab\tab\}\par
\tab\tab\tab\tab\}\par
\tab\tab\tab\tab return this;\par
\tab\tab\tab\},\par
\par
\tab\tab\tab // Call all the callbacks with the given arguments\par
\tab\tab\tab fire: function() \{\par
\tab\tab\tab\tab self.fireWith( this, arguments );\par
\tab\tab\tab\tab return this;\par
\tab\tab\tab\},\par
\par
\tab\tab\tab // To know if the callbacks have already been called at least once\par
\tab\tab\tab fired: function() \{\par
\tab\tab\tab\tab return !!fired;\par
\tab\tab\tab\}\par
\tab\tab\};\par
\par
\tab return self;\par
\};\par
\par
\par
function Identity( v ) \{\par
\tab return v;\par
\}\par
function Thrower( ex ) \{\par
\tab throw ex;\par
\}\par
\par
function adoptValue( value, resolve, reject, noValue ) \{\par
\tab var method;\par
\par
\tab try \{\par
\par
\tab\tab // Check for promise aspect first to privilege synchronous behavior\par
\tab\tab if ( value && isFunction( ( method = value.promise ) ) ) \{\par
\tab\tab\tab method.call( value ).done( resolve ).fail( reject );\par
\par
\tab\tab // Other thenables\par
\tab\tab\} else if ( value && isFunction( ( method = value.then ) ) ) \{\par
\tab\tab\tab method.call( value, resolve, reject );\par
\par
\tab\tab // Other non-thenables\par
\tab\tab\} else \{\par
\par
\tab\tab\tab // Control `resolve` arguments by letting Array#slice cast boolean `noValue` to integer:\par
\tab\tab\tab // * false: [ value ].slice( 0 ) => resolve( value )\par
\tab\tab\tab // * true: [ value ].slice( 1 ) => resolve()\par
\tab\tab\tab resolve.apply( undefined, [ value ].slice( noValue ) );\par
\tab\tab\}\par
\par
\tab // For Promises/A+, convert exceptions into rejections\par
\tab // Since jQuery.when doesn't unwrap thenables, we can skip the extra checks appearing in\par
\tab // Deferred#then to conditionally suppress rejection.\par
\tab\} catch ( value ) \{\par
\par
\tab\tab // Support: Android 4.0 only\par
\tab\tab // Strict mode functions invoked without .call/.apply get global-object context\par
\tab\tab reject.apply( undefined, [ value ] );\par
\tab\}\par
\}\par
\par
jQuery.extend( \{\par
\par
\tab Deferred: function( func ) \{\par
\tab\tab var tuples = [\par
\par
\tab\tab\tab\tab // action, add listener, callbacks,\par
\tab\tab\tab\tab // ... .then handlers, argument index, [final state]\par
\tab\tab\tab\tab [ "notify", "progress", jQuery.Callbacks( "memory" ),\par
\tab\tab\tab\tab\tab jQuery.Callbacks( "memory" ), 2 ],\par
\tab\tab\tab\tab [ "resolve", "done", jQuery.Callbacks( "once memory" ),\par
\tab\tab\tab\tab\tab jQuery.Callbacks( "once memory" ), 0, "resolved" ],\par
\tab\tab\tab\tab [ "reject", "fail", jQuery.Callbacks( "once memory" ),\par
\tab\tab\tab\tab\tab jQuery.Callbacks( "once memory" ), 1, "rejected" ]\par
\tab\tab\tab ],\par
\tab\tab\tab state = "pending",\par
\tab\tab\tab promise = \{\par
\tab\tab\tab\tab state: function() \{\par
\tab\tab\tab\tab\tab return state;\par
\tab\tab\tab\tab\},\par
\tab\tab\tab\tab always: function() \{\par
\tab\tab\tab\tab\tab deferred.done( arguments ).fail( arguments );\par
\tab\tab\tab\tab\tab return this;\par
\tab\tab\tab\tab\},\par
\tab\tab\tab\tab "catch": function( fn ) \{\par
\tab\tab\tab\tab\tab return promise.then( null, fn );\par
\tab\tab\tab\tab\},\par
\par
\tab\tab\tab\tab // Keep pipe for back-compat\par
\tab\tab\tab\tab pipe: function( /* fnDone, fnFail, fnProgress */ ) \{\par
\tab\tab\tab\tab\tab var fns = arguments;\par
\par
\tab\tab\tab\tab\tab return jQuery.Deferred( function( newDefer ) \{\par
\tab\tab\tab\tab\tab\tab jQuery.each( tuples, function( _i, tuple ) \{\par
\par
\tab\tab\tab\tab\tab\tab\tab // Map tuples (progress, done, fail) to arguments (done, fail, progress)\par
\tab\tab\tab\tab\tab\tab\tab var fn = isFunction( fns[ tuple[ 4 ] ] ) && fns[ tuple[ 4 ] ];\par
\par
\tab\tab\tab\tab\tab\tab\tab // deferred.progress(function() \{ bind to newDefer or newDefer.notify \})\par
\tab\tab\tab\tab\tab\tab\tab // deferred.done(function() \{ bind to newDefer or newDefer.resolve \})\par
\tab\tab\tab\tab\tab\tab\tab // deferred.fail(function() \{ bind to newDefer or newDefer.reject \})\par
\tab\tab\tab\tab\tab\tab\tab deferred[ tuple[ 1 ] ]( function() \{\par
\tab\tab\tab\tab\tab\tab\tab\tab var returned = fn && fn.apply( this, arguments );\par
\tab\tab\tab\tab\tab\tab\tab\tab if ( returned && isFunction( returned.promise ) ) \{\par
\tab\tab\tab\tab\tab\tab\tab\tab\tab returned.promise()\par
\tab\tab\tab\tab\tab\tab\tab\tab\tab\tab .progress( newDefer.notify )\par
\tab\tab\tab\tab\tab\tab\tab\tab\tab\tab .done( newDefer.resolve )\par
\tab\tab\tab\tab\tab\tab\tab\tab\tab\tab .fail( newDefer.reject );\par
\tab\tab\tab\tab\tab\tab\tab\tab\} else \{\par
\tab\tab\tab\tab\tab\tab\tab\tab\tab newDefer[ tuple[ 0 ] + "With" ](\par
\tab\tab\tab\tab\tab\tab\tab\tab\tab\tab this,\par
\tab\tab\tab\tab\tab\tab\tab\tab\tab\tab fn ? [ returned ] : arguments\par
\tab\tab\tab\tab\tab\tab\tab\tab\tab );\par
\tab\tab\tab\tab\tab\tab\tab\tab\}\par
\tab\tab\tab\tab\tab\tab\tab\} );\par
\tab\tab\tab\tab\tab\tab\} );\par
\tab\tab\tab\tab\tab\tab fns = null;\par
\tab\tab\tab\tab\tab\} ).promise();\par
\tab\tab\tab\tab\},\par
\tab\tab\tab\tab then: function( onFulfilled, onRejected, onProgress ) \{\par
\tab\tab\tab\tab\tab var maxDepth = 0;\par
\tab\tab\tab\tab\tab function resolve( depth, deferred, handler, special ) \{\par
\tab\tab\tab\tab\tab\tab return function() \{\par
\tab\tab\tab\tab\tab\tab\tab var that = this,\par
\tab\tab\tab\tab\tab\tab\tab\tab args = arguments,\par
\tab\tab\tab\tab\tab\tab\tab\tab mightThrow = function() \{\par
\tab\tab\tab\tab\tab\tab\tab\tab\tab var returned, then;\par
\par
\tab\tab\tab\tab\tab\tab\tab\tab\tab // Support: Promises/A+ section 2.3.3.3.3\par
\tab\tab\tab\tab\tab\tab\tab\tab\tab // {{\field{\*\fldinst{HYPERLINK https://promisesaplus.com/#point-59 }}{\fldrslt{https://promisesaplus.com/#point-59\ul0\cf0}}}}\f0\fs22\par
\tab\tab\tab\tab\tab\tab\tab\tab\tab // Ignore double-resolution attempts\par
\tab\tab\tab\tab\tab\tab\tab\tab\tab if ( depth < maxDepth ) \{\par
\tab\tab\tab\tab\tab\tab\tab\tab\tab\tab return;\par
\tab\tab\tab\tab\tab\tab\tab\tab\tab\}\par
\par
\tab\tab\tab\tab\tab\tab\tab\tab\tab returned = handler.apply( that, args );\par
\par
\tab\tab\tab\tab\tab\tab\tab\tab\tab // Support: Promises/A+ section 2.3.1\par
\tab\tab\tab\tab\tab\tab\tab\tab\tab // {{\field{\*\fldinst{HYPERLINK https://promisesaplus.com/#point-48 }}{\fldrslt{https://promisesaplus.com/#point-48\ul0\cf0}}}}\f0\fs22\par
\tab\tab\tab\tab\tab\tab\tab\tab\tab if ( returned === deferred.promise() ) \{\par
\tab\tab\tab\tab\tab\tab\tab\tab\tab\tab throw new TypeError( "Thenable self-resolution" );\par
\tab\tab\tab\tab\tab\tab\tab\tab\tab\}\par
\par
\tab\tab\tab\tab\tab\tab\tab\tab\tab // Support: Promises/A+ sections 2.3.3.1, 3.5\par
\tab\tab\tab\tab\tab\tab\tab\tab\tab // {{\field{\*\fldinst{HYPERLINK https://promisesaplus.com/#point-54 }}{\fldrslt{https://promisesaplus.com/#point-54\ul0\cf0}}}}\f0\fs22\par
\tab\tab\tab\tab\tab\tab\tab\tab\tab // {{\field{\*\fldinst{HYPERLINK https://promisesaplus.com/#point-75 }}{\fldrslt{https://promisesaplus.com/#point-75\ul0\cf0}}}}\f0\fs22\par
\tab\tab\tab\tab\tab\tab\tab\tab\tab // Retrieve `then` only once\par
\tab\tab\tab\tab\tab\tab\tab\tab\tab then = returned &&\par
\par
\tab\tab\tab\tab\tab\tab\tab\tab\tab\tab // Support: Promises/A+ section 2.3.4\par
\tab\tab\tab\tab\tab\tab\tab\tab\tab\tab // {{\field{\*\fldinst{HYPERLINK https://promisesaplus.com/#point-64 }}{\fldrslt{https://promisesaplus.com/#point-64\ul0\cf0}}}}\f0\fs22\par
\tab\tab\tab\tab\tab\tab\tab\tab\tab\tab // Only check objects and functions for thenability\par
\tab\tab\tab\tab\tab\tab\tab\tab\tab\tab ( typeof returned === "object" ||\par
\tab\tab\tab\tab\tab\tab\tab\tab\tab\tab\tab typeof returned === "function" ) &&\par
\tab\tab\tab\tab\tab\tab\tab\tab\tab\tab returned.then;\par
\par
\tab\tab\tab\tab\tab\tab\tab\tab\tab // Handle a returned thenable\par
\tab\tab\tab\tab\tab\tab\tab\tab\tab if ( isFunction( then ) ) \{\par
\par
\tab\tab\tab\tab\tab\tab\tab\tab\tab\tab // Special processors (notify) just wait for resolution\par
\tab\tab\tab\tab\tab\tab\tab\tab\tab\tab if ( special ) \{\par
\tab\tab\tab\tab\tab\tab\tab\tab\tab\tab\tab then.call(\par
\tab\tab\tab\tab\tab\tab\tab\tab\tab\tab\tab\tab returned,\par
\tab\tab\tab\tab\tab\tab\tab\tab\tab\tab\tab\tab resolve( maxDepth, deferred, Identity, special ),\par
\tab\tab\tab\tab\tab\tab\tab\tab\tab\tab\tab\tab resolve( maxDepth, deferred, Thrower, special )\par
\tab\tab\tab\tab\tab\tab\tab\tab\tab\tab\tab );\par
\par
\tab\tab\tab\tab\tab\tab\tab\tab\tab\tab // Normal processors (resolve) also hook into progress\par
\tab\tab\tab\tab\tab\tab\tab\tab\tab\tab\} else \{\par
\par
\tab\tab\tab\tab\tab\tab\tab\tab\tab\tab\tab // ...and disregard older resolution values\par
\tab\tab\tab\tab\tab\tab\tab\tab\tab\tab\tab maxDepth++;\par
\par
\tab\tab\tab\tab\tab\tab\tab\tab\tab\tab\tab then.call(\par
\tab\tab\tab\tab\tab\tab\tab\tab\tab\tab\tab\tab returned,\par
\tab\tab\tab\tab\tab\tab\tab\tab\tab\tab\tab\tab resolve( maxDepth, deferred, Identity, special ),\par
\tab\tab\tab\tab\tab\tab\tab\tab\tab\tab\tab\tab resolve( maxDepth, deferred, Thrower, special ),\par
\tab\tab\tab\tab\tab\tab\tab\tab\tab\tab\tab\tab resolve( maxDepth, deferred, Identity,\par
\tab\tab\tab\tab\tab\tab\tab\tab\tab\tab\tab\tab\tab deferred.notifyWith )\par
\tab\tab\tab\tab\tab\tab\tab\tab\tab\tab\tab );\par
\tab\tab\tab\tab\tab\tab\tab\tab\tab\tab\}\par
\par
\tab\tab\tab\tab\tab\tab\tab\tab\tab // Handle all other returned values\par
\tab\tab\tab\tab\tab\tab\tab\tab\tab\} else \{\par
\par
\tab\tab\tab\tab\tab\tab\tab\tab\tab\tab // Only substitute handlers pass on context\par
\tab\tab\tab\tab\tab\tab\tab\tab\tab\tab // and multiple values (non-spec behavior)\par
\tab\tab\tab\tab\tab\tab\tab\tab\tab\tab if ( handler !== Identity ) \{\par
\tab\tab\tab\tab\tab\tab\tab\tab\tab\tab\tab that = undefined;\par
\tab\tab\tab\tab\tab\tab\tab\tab\tab\tab\tab args = [ returned ];\par
\tab\tab\tab\tab\tab\tab\tab\tab\tab\tab\}\par
\par
\tab\tab\tab\tab\tab\tab\tab\tab\tab\tab // Process the value(s)\par
\tab\tab\tab\tab\tab\tab\tab\tab\tab\tab // Default process is resolve\par
\tab\tab\tab\tab\tab\tab\tab\tab\tab\tab ( special || deferred.resolveWith )( that, args );\par
\tab\tab\tab\tab\tab\tab\tab\tab\tab\}\par
\tab\tab\tab\tab\tab\tab\tab\tab\},\par
\par
\tab\tab\tab\tab\tab\tab\tab\tab // Only normal processors (resolve) catch and reject exceptions\par
\tab\tab\tab\tab\tab\tab\tab\tab process = special ?\par
\tab\tab\tab\tab\tab\tab\tab\tab\tab mightThrow :\par
\tab\tab\tab\tab\tab\tab\tab\tab\tab function() \{\par
\tab\tab\tab\tab\tab\tab\tab\tab\tab\tab try \{\par
\tab\tab\tab\tab\tab\tab\tab\tab\tab\tab\tab mightThrow();\par
\tab\tab\tab\tab\tab\tab\tab\tab\tab\tab\} catch ( e ) \{\par
\par
\tab\tab\tab\tab\tab\tab\tab\tab\tab\tab\tab if ( jQuery.Deferred.exceptionHook ) \{\par
\tab\tab\tab\tab\tab\tab\tab\tab\tab\tab\tab\tab jQuery.Deferred.exceptionHook( e,\par
\tab\tab\tab\tab\tab\tab\tab\tab\tab\tab\tab\tab\tab process.stackTrace );\par
\tab\tab\tab\tab\tab\tab\tab\tab\tab\tab\tab\}\par
\par
\tab\tab\tab\tab\tab\tab\tab\tab\tab\tab\tab // Support: Promises/A+ section 2.3.3.3.4.1\par
\tab\tab\tab\tab\tab\tab\tab\tab\tab\tab\tab // {{\field{\*\fldinst{HYPERLINK https://promisesaplus.com/#point-61 }}{\fldrslt{https://promisesaplus.com/#point-61\ul0\cf0}}}}\f0\fs22\par
\tab\tab\tab\tab\tab\tab\tab\tab\tab\tab\tab // Ignore post-resolution exceptions\par
\tab\tab\tab\tab\tab\tab\tab\tab\tab\tab\tab if ( depth + 1 >= maxDepth ) \{\par
\par
\tab\tab\tab\tab\tab\tab\tab\tab\tab\tab\tab\tab // Only substitute handlers pass on context\par
\tab\tab\tab\tab\tab\tab\tab\tab\tab\tab\tab\tab // and multiple values (non-spec behavior)\par
\tab\tab\tab\tab\tab\tab\tab\tab\tab\tab\tab\tab if ( handler !== Thrower ) \{\par
\tab\tab\tab\tab\tab\tab\tab\tab\tab\tab\tab\tab\tab that = undefined;\par
\tab\tab\tab\tab\tab\tab\tab\tab\tab\tab\tab\tab\tab args = [ e ];\par
\tab\tab\tab\tab\tab\tab\tab\tab\tab\tab\tab\tab\}\par
\par
\tab\tab\tab\tab\tab\tab\tab\tab\tab\tab\tab\tab deferred.rejectWith( that, args );\par
\tab\tab\tab\tab\tab\tab\tab\tab\tab\tab\tab\}\par
\tab\tab\tab\tab\tab\tab\tab\tab\tab\tab\}\par
\tab\tab\tab\tab\tab\tab\tab\tab\tab\};\par
\par
\tab\tab\tab\tab\tab\tab\tab // Support: Promises/A+ section 2.3.3.3.1\par
\tab\tab\tab\tab\tab\tab\tab // {{\field{\*\fldinst{HYPERLINK https://promisesaplus.com/#point-57 }}{\fldrslt{https://promisesaplus.com/#point-57\ul0\cf0}}}}\f0\fs22\par
\tab\tab\tab\tab\tab\tab\tab // Re-resolve promises immediately to dodge false rejection from\par
\tab\tab\tab\tab\tab\tab\tab // subsequent errors\par
\tab\tab\tab\tab\tab\tab\tab if ( depth ) \{\par
\tab\tab\tab\tab\tab\tab\tab\tab process();\par
\tab\tab\tab\tab\tab\tab\tab\} else \{\par
\par
\tab\tab\tab\tab\tab\tab\tab\tab // Call an optional hook to record the stack, in case of exception\par
\tab\tab\tab\tab\tab\tab\tab\tab // since it's otherwise lost when execution goes async\par
\tab\tab\tab\tab\tab\tab\tab\tab if ( jQuery.Deferred.getStackHook ) \{\par
\tab\tab\tab\tab\tab\tab\tab\tab\tab process.stackTrace = jQuery.Deferred.getStackHook();\par
\tab\tab\tab\tab\tab\tab\tab\tab\}\par
\tab\tab\tab\tab\tab\tab\tab\tab window.setTimeout( process );\par
\tab\tab\tab\tab\tab\tab\tab\}\par
\tab\tab\tab\tab\tab\tab\};\par
\tab\tab\tab\tab\tab\}\par
\par
\tab\tab\tab\tab\tab return jQuery.Deferred( function( newDefer ) \{\par
\par
\tab\tab\tab\tab\tab\tab // progress_handlers.add( ... )\par
\tab\tab\tab\tab\tab\tab tuples[ 0 ][ 3 ].add(\par
\tab\tab\tab\tab\tab\tab\tab resolve(\par
\tab\tab\tab\tab\tab\tab\tab\tab 0,\par
\tab\tab\tab\tab\tab\tab\tab\tab newDefer,\par
\tab\tab\tab\tab\tab\tab\tab\tab isFunction( onProgress ) ?\par
\tab\tab\tab\tab\tab\tab\tab\tab\tab onProgress :\par
\tab\tab\tab\tab\tab\tab\tab\tab\tab Identity,\par
\tab\tab\tab\tab\tab\tab\tab\tab newDefer.notifyWith\par
\tab\tab\tab\tab\tab\tab\tab )\par
\tab\tab\tab\tab\tab\tab );\par
\par
\tab\tab\tab\tab\tab\tab // fulfilled_handlers.add( ... )\par
\tab\tab\tab\tab\tab\tab tuples[ 1 ][ 3 ].add(\par
\tab\tab\tab\tab\tab\tab\tab resolve(\par
\tab\tab\tab\tab\tab\tab\tab\tab 0,\par
\tab\tab\tab\tab\tab\tab\tab\tab newDefer,\par
\tab\tab\tab\tab\tab\tab\tab\tab isFunction( onFulfilled ) ?\par
\tab\tab\tab\tab\tab\tab\tab\tab\tab onFulfilled :\par
\tab\tab\tab\tab\tab\tab\tab\tab\tab Identity\par
\tab\tab\tab\tab\tab\tab\tab )\par
\tab\tab\tab\tab\tab\tab );\par
\par
\tab\tab\tab\tab\tab\tab // rejected_handlers.add( ... )\par
\tab\tab\tab\tab\tab\tab tuples[ 2 ][ 3 ].add(\par
\tab\tab\tab\tab\tab\tab\tab resolve(\par
\tab\tab\tab\tab\tab\tab\tab\tab 0,\par
\tab\tab\tab\tab\tab\tab\tab\tab newDefer,\par
\tab\tab\tab\tab\tab\tab\tab\tab isFunction( onRejected ) ?\par
\tab\tab\tab\tab\tab\tab\tab\tab\tab onRejected :\par
\tab\tab\tab\tab\tab\tab\tab\tab\tab Thrower\par
\tab\tab\tab\tab\tab\tab\tab )\par
\tab\tab\tab\tab\tab\tab );\par
\tab\tab\tab\tab\tab\} ).promise();\par
\tab\tab\tab\tab\},\par
\par
\tab\tab\tab\tab // Get a promise for this deferred\par
\tab\tab\tab\tab // If obj is provided, the promise aspect is added to the object\par
\tab\tab\tab\tab promise: function( obj ) \{\par
\tab\tab\tab\tab\tab return obj != null ? jQuery.extend( obj, promise ) : promise;\par
\tab\tab\tab\tab\}\par
\tab\tab\tab\},\par
\tab\tab\tab deferred = \{\};\par
\par
\tab\tab // Add list-specific methods\par
\tab\tab jQuery.each( tuples, function( i, tuple ) \{\par
\tab\tab\tab var list = tuple[ 2 ],\par
\tab\tab\tab\tab stateString = tuple[ 5 ];\par
\par
\tab\tab\tab // promise.progress = list.add\par
\tab\tab\tab // promise.done = list.add\par
\tab\tab\tab // promise.fail = list.add\par
\tab\tab\tab promise[ tuple[ 1 ] ] = list.add;\par
\par
\tab\tab\tab // Handle state\par
\tab\tab\tab if ( stateString ) \{\par
\tab\tab\tab\tab list.add(\par
\tab\tab\tab\tab\tab function() \{\par
\par
\tab\tab\tab\tab\tab\tab // state = "resolved" (i.e., fulfilled)\par
\tab\tab\tab\tab\tab\tab // state = "rejected"\par
\tab\tab\tab\tab\tab\tab state = stateString;\par
\tab\tab\tab\tab\tab\},\par
\par
\tab\tab\tab\tab\tab // rejected_callbacks.disable\par
\tab\tab\tab\tab\tab // fulfilled_callbacks.disable\par
\tab\tab\tab\tab\tab tuples[ 3 - i ][ 2 ].disable,\par
\par
\tab\tab\tab\tab\tab // rejected_handlers.disable\par
\tab\tab\tab\tab\tab // fulfilled_handlers.disable\par
\tab\tab\tab\tab\tab tuples[ 3 - i ][ 3 ].disable,\par
\par
\tab\tab\tab\tab\tab // progress_callbacks.lock\par
\tab\tab\tab\tab\tab tuples[ 0 ][ 2 ].lock,\par
\par
\tab\tab\tab\tab\tab // progress_handlers.lock\par
\tab\tab\tab\tab\tab tuples[ 0 ][ 3 ].lock\par
\tab\tab\tab\tab );\par
\tab\tab\tab\}\par
\par
\tab\tab\tab // progress_handlers.fire\par
\tab\tab\tab // fulfilled_handlers.fire\par
\tab\tab\tab // rejected_handlers.fire\par
\tab\tab\tab list.add( tuple[ 3 ].fire );\par
\par
\tab\tab\tab // deferred.notify = function() \{ deferred.notifyWith(...) \}\par
\tab\tab\tab // deferred.resolve = function() \{ deferred.resolveWith(...) \}\par
\tab\tab\tab // deferred.reject = function() \{ deferred.rejectWith(...) \}\par
\tab\tab\tab deferred[ tuple[ 0 ] ] = function() \{\par
\tab\tab\tab\tab deferred[ tuple[ 0 ] + "With" ]( this === deferred ? undefined : this, arguments );\par
\tab\tab\tab\tab return this;\par
\tab\tab\tab\};\par
\par
\tab\tab\tab // deferred.notifyWith = list.fireWith\par
\tab\tab\tab // deferred.resolveWith = list.fireWith\par
\tab\tab\tab // deferred.rejectWith = list.fireWith\par
\tab\tab\tab deferred[ tuple[ 0 ] + "With" ] = list.fireWith;\par
\tab\tab\} );\par
\par
\tab\tab // Make the deferred a promise\par
\tab\tab promise.promise( deferred );\par
\par
\tab\tab // Call given func if any\par
\tab\tab if ( func ) \{\par
\tab\tab\tab func.call( deferred, deferred );\par
\tab\tab\}\par
\par
\tab\tab // All done!\par
\tab\tab return deferred;\par
\tab\},\par
\par
\tab // Deferred helper\par
\tab when: function( singleValue ) \{\par
\tab\tab var\par
\par
\tab\tab\tab // count of uncompleted subordinates\par
\tab\tab\tab remaining = arguments.length,\par
\par
\tab\tab\tab // count of unprocessed arguments\par
\tab\tab\tab i = remaining,\par
\par
\tab\tab\tab // subordinate fulfillment data\par
\tab\tab\tab resolveContexts = Array( i ),\par
\tab\tab\tab resolveValues = slice.call( arguments ),\par
\par
\tab\tab\tab // the primary Deferred\par
\tab\tab\tab primary = jQuery.Deferred(),\par
\par
\tab\tab\tab // subordinate callback factory\par
\tab\tab\tab updateFunc = function( i ) \{\par
\tab\tab\tab\tab return function( value ) \{\par
\tab\tab\tab\tab\tab resolveContexts[ i ] = this;\par
\tab\tab\tab\tab\tab resolveValues[ i ] = arguments.length > 1 ? slice.call( arguments ) : value;\par
\tab\tab\tab\tab\tab if ( !( --remaining ) ) \{\par
\tab\tab\tab\tab\tab\tab primary.resolveWith( resolveContexts, resolveValues );\par
\tab\tab\tab\tab\tab\}\par
\tab\tab\tab\tab\};\par
\tab\tab\tab\};\par
\par
\tab\tab // Single- and empty arguments are adopted like Promise.resolve\par
\tab\tab if ( remaining <= 1 ) \{\par
\tab\tab\tab adoptValue( singleValue, primary.done( updateFunc( i ) ).resolve, primary.reject,\par
\tab\tab\tab\tab !remaining );\par
\par
\tab\tab\tab // Use .then() to unwrap secondary thenables (cf. gh-3000)\par
\tab\tab\tab if ( primary.state() === "pending" ||\par
\tab\tab\tab\tab isFunction( resolveValues[ i ] && resolveValues[ i ].then ) ) \{\par
\par
\tab\tab\tab\tab return primary.then();\par
\tab\tab\tab\}\par
\tab\tab\}\par
\par
\tab\tab // Multiple arguments are aggregated like Promise.all array elements\par
\tab\tab while ( i-- ) \{\par
\tab\tab\tab adoptValue( resolveValues[ i ], updateFunc( i ), primary.reject );\par
\tab\tab\}\par
\par
\tab\tab return primary.promise();\par
\tab\}\par
\} );\par
\par
\par
// These usually indicate a programmer mistake during development,\par
// warn about them ASAP rather than swallowing them by default.\par
var rerrorNames = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;\par
\par
jQuery.Deferred.exceptionHook = function( error, stack ) \{\par
\par
\tab // Support: IE 8 - 9 only\par
\tab // Console exists when dev tools are open, which can happen at any time\par
\tab if ( window.console && window.console.warn && error && rerrorNames.test( error.name ) ) \{\par
\tab\tab window.console.warn( "jQuery.Deferred exception: " + error.message, error.stack, stack );\par
\tab\}\par
\};\par
\par
\par
\par
\par
jQuery.readyException = function( error ) \{\par
\tab window.setTimeout( function() \{\par
\tab\tab throw error;\par
\tab\} );\par
\};\par
\par
\par
\par
\par
// The deferred used on DOM ready\par
var readyList = jQuery.Deferred();\par
\par
jQuery.fn.ready = function( fn ) \{\par
\par
\tab readyList\par
\tab\tab .then( fn )\par
\par
\tab\tab // Wrap jQuery.readyException in a function so that the lookup\par
\tab\tab // happens at the time of error handling instead of callback\par
\tab\tab // registration.\par
\tab\tab .catch( function( error ) \{\par
\tab\tab\tab jQuery.readyException( error );\par
\tab\tab\} );\par
\par
\tab return this;\par
\};\par
\par
jQuery.extend( \{\par
\par
\tab // Is the DOM ready to be used? Set to true once it occurs.\par
\tab isReady: false,\par
\par
\tab // A counter to track how many items to wait for before\par
\tab // the ready event fires. See #6781\par
\tab readyWait: 1,\par
\par
\tab // Handle when the DOM is ready\par
\tab ready: function( wait ) \{\par
\par
\tab\tab // Abort if there are pending holds or we're already ready\par
\tab\tab if ( wait === true ? --jQuery.readyWait : jQuery.isReady ) \{\par
\tab\tab\tab return;\par
\tab\tab\}\par
\par
\tab\tab // Remember that the DOM is ready\par
\tab\tab jQuery.isReady = true;\par
\par
\tab\tab // If a normal DOM Ready event fired, decrement, and wait if need be\par
\tab\tab if ( wait !== true && --jQuery.readyWait > 0 ) \{\par
\tab\tab\tab return;\par
\tab\tab\}\par
\par
\tab\tab // If there are functions bound, to execute\par
\tab\tab readyList.resolveWith( document, [ jQuery ] );\par
\tab\}\par
\} );\par
\par
jQuery.ready.then = readyList.then;\par
\par
// The ready event handler and self cleanup method\par
function completed() \{\par
\tab document.removeEventListener( "DOMContentLoaded", completed );\par
\tab window.removeEventListener( "load", completed );\par
\tab jQuery.ready();\par
\}\par
\par
// Catch cases where $(document).ready() is called\par
// after the browser event has already occurred.\par
// Support: IE <=9 - 10 only\par
// Older IE sometimes signals "interactive" too soon\par
if ( document.readyState === "complete" ||\par
\tab ( document.readyState !== "loading" && !document.documentElement.doScroll ) ) \{\par
\par
\tab // Handle it asynchronously to allow scripts the opportunity to delay ready\par
\tab window.setTimeout( jQuery.ready );\par
\par
\} else \{\par
\par
\tab // Use the handy event callback\par
\tab document.addEventListener( "DOMContentLoaded", completed );\par
\par
\tab // A fallback to window.onload, that will always work\par
\tab window.addEventListener( "load", completed );\par
\}\par
\par
\par
\par
\par
// Multifunctional method to get and set values of a collection\par
// The value/s can optionally be executed if it's a function\par
var access = function( elems, fn, key, value, chainable, emptyGet, raw ) \{\par
\tab var i = 0,\par
\tab\tab len = elems.length,\par
\tab\tab bulk = key == null;\par
\par
\tab // Sets many values\par
\tab if ( toType( key ) === "object" ) \{\par
\tab\tab chainable = true;\par
\tab\tab for ( i in key ) \{\par
\tab\tab\tab access( elems, fn, i, key[ i ], true, emptyGet, raw );\par
\tab\tab\}\par
\par
\tab // Sets one value\par
\tab\} else if ( value !== undefined ) \{\par
\tab\tab chainable = true;\par
\par
\tab\tab if ( !isFunction( value ) ) \{\par
\tab\tab\tab raw = true;\par
\tab\tab\}\par
\par
\tab\tab if ( bulk ) \{\par
\par
\tab\tab\tab // Bulk operations run against the entire set\par
\tab\tab\tab if ( raw ) \{\par
\tab\tab\tab\tab fn.call( elems, value );\par
\tab\tab\tab\tab fn = null;\par
\par
\tab\tab\tab // ...except when executing function values\par
\tab\tab\tab\} else \{\par
\tab\tab\tab\tab bulk = fn;\par
\tab\tab\tab\tab fn = function( elem, _key, value ) \{\par
\tab\tab\tab\tab\tab return bulk.call( jQuery( elem ), value );\par
\tab\tab\tab\tab\};\par
\tab\tab\tab\}\par
\tab\tab\}\par
\par
\tab\tab if ( fn ) \{\par
\tab\tab\tab for ( ; i < len; i++ ) \{\par
\tab\tab\tab\tab fn(\par
\tab\tab\tab\tab\tab elems[ i ], key, raw ?\par
\tab\tab\tab\tab\tab\tab value :\par
\tab\tab\tab\tab\tab\tab value.call( elems[ i ], i, fn( elems[ i ], key ) )\par
\tab\tab\tab\tab );\par
\tab\tab\tab\}\par
\tab\tab\}\par
\tab\}\par
\par
\tab if ( chainable ) \{\par
\tab\tab return elems;\par
\tab\}\par
\par
\tab // Gets\par
\tab if ( bulk ) \{\par
\tab\tab return fn.call( elems );\par
\tab\}\par
\par
\tab return len ? fn( elems[ 0 ], key ) : emptyGet;\par
\};\par
\par
\par
// Matches dashed string for camelizing\par
var rmsPrefix = /^-ms-/,\par
\tab rdashAlpha = /-([a-z])/g;\par
\par
// Used by camelCase as callback to replace()\par
function fcamelCase( _all, letter ) \{\par
\tab return letter.toUpperCase();\par
\}\par
\par
// Convert dashed to camelCase; used by the css and data modules\par
// Support: IE <=9 - 11, Edge 12 - 15\par
// Microsoft forgot to hump their vendor prefix (#9572)\par
function camelCase( string ) \{\par
\tab return string.replace( rmsPrefix, "ms-" ).replace( rdashAlpha, fcamelCase );\par
\}\par
var acceptData = function( owner ) \{\par
\par
\tab // Accepts only:\par
\tab //  - Node\par
\tab //    - Node.ELEMENT_NODE\par
\tab //    - Node.DOCUMENT_NODE\par
\tab //  - Object\par
\tab //    - Any\par
\tab return owner.nodeType === 1 || owner.nodeType === 9 || !( +owner.nodeType );\par
\};\par
\par
\par
\par
\par
function Data() \{\par
\tab this.expando = jQuery.expando + Data.uid++;\par
\}\par
\par
Data.uid = 1;\par
\par
Data.prototype = \{\par
\par
\tab cache: function( owner ) \{\par
\par
\tab\tab // Check if the owner object already has a cache\par
\tab\tab var value = owner[ this.expando ];\par
\par
\tab\tab // If not, create one\par
\tab\tab if ( !value ) \{\par
\tab\tab\tab value = \{\};\par
\par
\tab\tab\tab // We can accept data for non-element nodes in modern browsers,\par
\tab\tab\tab // but we should not, see #8335.\par
\tab\tab\tab // Always return an empty object.\par
\tab\tab\tab if ( acceptData( owner ) ) \{\par
\par
\tab\tab\tab\tab // If it is a node unlikely to be stringify-ed or looped over\par
\tab\tab\tab\tab // use plain assignment\par
\tab\tab\tab\tab if ( owner.nodeType ) \{\par
\tab\tab\tab\tab\tab owner[ this.expando ] = value;\par
\par
\tab\tab\tab\tab // Otherwise secure it in a non-enumerable property\par
\tab\tab\tab\tab // configurable must be true to allow the property to be\par
\tab\tab\tab\tab // deleted when data is removed\par
\tab\tab\tab\tab\} else \{\par
\tab\tab\tab\tab\tab Object.defineProperty( owner, this.expando, \{\par
\tab\tab\tab\tab\tab\tab value: value,\par
\tab\tab\tab\tab\tab\tab configurable: true\par
\tab\tab\tab\tab\tab\} );\par
\tab\tab\tab\tab\}\par
\tab\tab\tab\}\par
\tab\tab\}\par
\par
\tab\tab return value;\par
\tab\},\par
\tab set: function( owner, data, value ) \{\par
\tab\tab var prop,\par
\tab\tab\tab cache = this.cache( owner );\par
\par
\tab\tab // Handle: [ owner, key, value ] args\par
\tab\tab // Always use camelCase key (gh-2257)\par
\tab\tab if ( typeof data === "string" ) \{\par
\tab\tab\tab cache[ camelCase( data ) ] = value;\par
\par
\tab\tab // Handle: [ owner, \{ properties \} ] args\par
\tab\tab\} else \{\par
\par
\tab\tab\tab // Copy the properties one-by-one to the cache object\par
\tab\tab\tab for ( prop in data ) \{\par
\tab\tab\tab\tab cache[ camelCase( prop ) ] = data[ prop ];\par
\tab\tab\tab\}\par
\tab\tab\}\par
\tab\tab return cache;\par
\tab\},\par
\tab get: function( owner, key ) \{\par
\tab\tab return key === undefined ?\par
\tab\tab\tab this.cache( owner ) :\par
\par
\tab\tab\tab // Always use camelCase key (gh-2257)\par
\tab\tab\tab owner[ this.expando ] && owner[ this.expando ][ camelCase( key ) ];\par
\tab\},\par
\tab access: function( owner, key, value ) \{\par
\par
\tab\tab // In cases where either:\par
\tab\tab //\par
\tab\tab //   1. No key was specified\par
\tab\tab //   2. A string key was specified, but no value provided\par
\tab\tab //\par
\tab\tab // Take the "read" path and allow the get method to determine\par
\tab\tab // which value to return, respectively either:\par
\tab\tab //\par
\tab\tab //   1. The entire cache object\par
\tab\tab //   2. The data stored at the key\par
\tab\tab //\par
\tab\tab if ( key === undefined ||\par
\tab\tab\tab\tab ( ( key && typeof key === "string" ) && value === undefined ) ) \{\par
\par
\tab\tab\tab return this.get( owner, key );\par
\tab\tab\}\par
\par
\tab\tab // When the key is not a string, or both a key and value\par
\tab\tab // are specified, set or extend (existing objects) with either:\par
\tab\tab //\par
\tab\tab //   1. An object of properties\par
\tab\tab //   2. A key and value\par
\tab\tab //\par
\tab\tab this.set( owner, key, value );\par
\par
\tab\tab // Since the "set" path can have two possible entry points\par
\tab\tab // return the expected data based on which path was taken[*]\par
\tab\tab return value !== undefined ? value : key;\par
\tab\},\par
\tab remove: function( owner, key ) \{\par
\tab\tab var i,\par
\tab\tab\tab cache = owner[ this.expando ];\par
\par
\tab\tab if ( cache === undefined ) \{\par
\tab\tab\tab return;\par
\tab\tab\}\par
\par
\tab\tab if ( key !== undefined ) \{\par
\par
\tab\tab\tab // Support array or space separated string of keys\par
\tab\tab\tab if ( Array.isArray( key ) ) \{\par
\par
\tab\tab\tab\tab // If key is an array of keys...\par
\tab\tab\tab\tab // We always set camelCase keys, so remove that.\par
\tab\tab\tab\tab key = key.map( camelCase );\par
\tab\tab\tab\} else \{\par
\tab\tab\tab\tab key = camelCase( key );\par
\par
\tab\tab\tab\tab // If a key with the spaces exists, use it.\par
\tab\tab\tab\tab // Otherwise, create an array by matching non-whitespace\par
\tab\tab\tab\tab key = key in cache ?\par
\tab\tab\tab\tab\tab [ key ] :\par
\tab\tab\tab\tab\tab ( key.match( rnothtmlwhite ) || [] );\par
\tab\tab\tab\}\par
\par
\tab\tab\tab i = key.length;\par
\par
\tab\tab\tab while ( i-- ) \{\par
\tab\tab\tab\tab delete cache[ key[ i ] ];\par
\tab\tab\tab\}\par
\tab\tab\}\par
\par
\tab\tab // Remove the expando if there's no more data\par
\tab\tab if ( key === undefined || jQuery.isEmptyObject( cache ) ) \{\par
\par
\tab\tab\tab // Support: Chrome <=35 - 45\par
\tab\tab\tab // Webkit & Blink performance suffers when deleting properties\par
\tab\tab\tab // from DOM nodes, so set to undefined instead\par
\tab\tab\tab // {{\field{\*\fldinst{HYPERLINK https://bugs.chromium.org/p/chromium/issues/detail?id=378607 }}{\fldrslt{https://bugs.chromium.org/p/chromium/issues/detail?id=378607\ul0\cf0}}}}\f0\fs22  (bug restricted)\par
\tab\tab\tab if ( owner.nodeType ) \{\par
\tab\tab\tab\tab owner[ this.expando ] = undefined;\par
\tab\tab\tab\} else \{\par
\tab\tab\tab\tab delete owner[ this.expando ];\par
\tab\tab\tab\}\par
\tab\tab\}\par
\tab\},\par
\tab hasData: function( owner ) \{\par
\tab\tab var cache = owner[ this.expando ];\par
\tab\tab return cache !== undefined && !jQuery.isEmptyObject( cache );\par
\tab\}\par
\};\par
var dataPriv = new Data();\par
\par
var dataUser = new Data();\par
\par
\par
\par
//\tab Implementation Summary\par
//\par
//\tab 1. Enforce API surface and semantic compatibility with 1.9.x branch\par
//\tab 2. Improve the module's maintainability by reducing the storage\par
//\tab\tab paths to a single mechanism.\par
//\tab 3. Use the same single mechanism to support "private" and "user" data.\par
//\tab 4. _Never_ expose "private" data to user code (TODO: Drop _data, _removeData)\par
//\tab 5. Avoid exposing implementation details on user objects (eg. expando properties)\par
//\tab 6. Provide a clear path for implementation upgrade to WeakMap in 2014\par
\par
var rbrace = /^(?:\\\{[\\w\\W]*\\\}|\\[[\\w\\W]*\\])$/,\par
\tab rmultiDash = /[A-Z]/g;\par
\par
function getData( data ) \{\par
\tab if ( data === "true" ) \{\par
\tab\tab return true;\par
\tab\}\par
\par
\tab if ( data === "false" ) \{\par
\tab\tab return false;\par
\tab\}\par
\par
\tab if ( data === "null" ) \{\par
\tab\tab return null;\par
\tab\}\par
\par
\tab // Only convert to a number if it doesn't change the string\par
\tab if ( data === +data + "" ) \{\par
\tab\tab return +data;\par
\tab\}\par
\par
\tab if ( rbrace.test( data ) ) \{\par
\tab\tab return JSON.parse( data );\par
\tab\}\par
\par
\tab return data;\par
\}\par
\par
function dataAttr( elem, key, data ) \{\par
\tab var name;\par
\par
\tab // If nothing was found internally, try to fetch any\par
\tab // data from the HTML5 data-* attribute\par
\tab if ( data === undefined && elem.nodeType === 1 ) \{\par
\tab\tab name = "data-" + key.replace( rmultiDash, "-$&" ).toLowerCase();\par
\tab\tab data = elem.getAttribute( name );\par
\par
\tab\tab if ( typeof data === "string" ) \{\par
\tab\tab\tab try \{\par
\tab\tab\tab\tab data = getData( data );\par
\tab\tab\tab\} catch ( e ) \{\}\par
\par
\tab\tab\tab // Make sure we set the data so it isn't changed later\par
\tab\tab\tab dataUser.set( elem, key, data );\par
\tab\tab\} else \{\par
\tab\tab\tab data = undefined;\par
\tab\tab\}\par
\tab\}\par
\tab return data;\par
\}\par
\par
jQuery.extend( \{\par
\tab hasData: function( elem ) \{\par
\tab\tab return dataUser.hasData( elem ) || dataPriv.hasData( elem );\par
\tab\},\par
\par
\tab data: function( elem, name, data ) \{\par
\tab\tab return dataUser.access( elem, name, data );\par
\tab\},\par
\par
\tab removeData: function( elem, name ) \{\par
\tab\tab dataUser.remove( elem, name );\par
\tab\},\par
\par
\tab // TODO: Now that all calls to _data and _removeData have been replaced\par
\tab // with direct calls to dataPriv methods, these can be deprecated.\par
\tab _data: function( elem, name, data ) \{\par
\tab\tab return dataPriv.access( elem, name, data );\par
\tab\},\par
\par
\tab _removeData: function( elem, name ) \{\par
\tab\tab dataPriv.remove( elem, name );\par
\tab\}\par
\} );\par
\par
jQuery.fn.extend( \{\par
\tab data: function( key, value ) \{\par
\tab\tab var i, name, data,\par
\tab\tab\tab elem = this[ 0 ],\par
\tab\tab\tab attrs = elem && elem.attributes;\par
\par
\tab\tab // Gets all values\par
\tab\tab if ( key === undefined ) \{\par
\tab\tab\tab if ( this.length ) \{\par
\tab\tab\tab\tab data = dataUser.get( elem );\par
\par
\tab\tab\tab\tab if ( elem.nodeType === 1 && !dataPriv.get( elem, "hasDataAttrs" ) ) \{\par
\tab\tab\tab\tab\tab i = attrs.length;\par
\tab\tab\tab\tab\tab while ( i-- ) \{\par
\par
\tab\tab\tab\tab\tab\tab // Support: IE 11 only\par
\tab\tab\tab\tab\tab\tab // The attrs elements can be null (#14894)\par
\tab\tab\tab\tab\tab\tab if ( attrs[ i ] ) \{\par
\tab\tab\tab\tab\tab\tab\tab name = attrs[ i ].name;\par
\tab\tab\tab\tab\tab\tab\tab if ( name.indexOf( "data-" ) === 0 ) \{\par
\tab\tab\tab\tab\tab\tab\tab\tab name = camelCase( name.slice( 5 ) );\par
\tab\tab\tab\tab\tab\tab\tab\tab dataAttr( elem, name, data[ name ] );\par
\tab\tab\tab\tab\tab\tab\tab\}\par
\tab\tab\tab\tab\tab\tab\}\par
\tab\tab\tab\tab\tab\}\par
\tab\tab\tab\tab\tab dataPriv.set( elem, "hasDataAttrs", true );\par
\tab\tab\tab\tab\}\par
\tab\tab\tab\}\par
\par
\tab\tab\tab return data;\par
\tab\tab\}\par
\par
\tab\tab // Sets multiple values\par
\tab\tab if ( typeof key === "object" ) \{\par
\tab\tab\tab return this.each( function() \{\par
\tab\tab\tab\tab dataUser.set( this, key );\par
\tab\tab\tab\} );\par
\tab\tab\}\par
\par
\tab\tab return access( this, function( value ) \{\par
\tab\tab\tab var data;\par
\par
\tab\tab\tab // The calling jQuery object (element matches) is not empty\par
\tab\tab\tab // (and therefore has an element appears at this[ 0 ]) and the\par
\tab\tab\tab // `value` parameter was not undefined. An empty jQuery object\par
\tab\tab\tab // will result in `undefined` for elem = this[ 0 ] which will\par
\tab\tab\tab // throw an exception if an attempt to read a data cache is made.\par
\tab\tab\tab if ( elem && value === undefined ) \{\par
\par
\tab\tab\tab\tab // Attempt to get data from the cache\par
\tab\tab\tab\tab // The key will always be camelCased in Data\par
\tab\tab\tab\tab data = dataUser.get( elem, key );\par
\tab\tab\tab\tab if ( data !== undefined ) \{\par
\tab\tab\tab\tab\tab return data;\par
\tab\tab\tab\tab\}\par
\par
\tab\tab\tab\tab // Attempt to "discover" the data in\par
\tab\tab\tab\tab // HTML5 custom data-* attrs\par
\tab\tab\tab\tab data = dataAttr( elem, key );\par
\tab\tab\tab\tab if ( data !== undefined ) \{\par
\tab\tab\tab\tab\tab return data;\par
\tab\tab\tab\tab\}\par
\par
\tab\tab\tab\tab // We tried really hard, but the data doesn't exist.\par
\tab\tab\tab\tab return;\par
\tab\tab\tab\}\par
\par
\tab\tab\tab // Set the data...\par
\tab\tab\tab this.each( function() \{\par
\par
\tab\tab\tab\tab // We always store the camelCased key\par
\tab\tab\tab\tab dataUser.set( this, key, value );\par
\tab\tab\tab\} );\par
\tab\tab\}, null, value, arguments.length > 1, null, true );\par
\tab\},\par
\par
\tab removeData: function( key ) \{\par
\tab\tab return this.each( function() \{\par
\tab\tab\tab dataUser.remove( this, key );\par
\tab\tab\} );\par
\tab\}\par
\} );\par
\par
\par
jQuery.extend( \{\par
\tab queue: function( elem, type, data ) \{\par
\tab\tab var queue;\par
\par
\tab\tab if ( elem ) \{\par
\tab\tab\tab type = ( type || "fx" ) + "queue";\par
\tab\tab\tab queue = dataPriv.get( elem, type );\par
\par
\tab\tab\tab // Speed up dequeue by getting out quickly if this is just a lookup\par
\tab\tab\tab if ( data ) \{\par
\tab\tab\tab\tab if ( !queue || Array.isArray( data ) ) \{\par
\tab\tab\tab\tab\tab queue = dataPriv.access( elem, type, jQuery.makeArray( data ) );\par
\tab\tab\tab\tab\} else \{\par
\tab\tab\tab\tab\tab queue.push( data );\par
\tab\tab\tab\tab\}\par
\tab\tab\tab\}\par
\tab\tab\tab return queue || [];\par
\tab\tab\}\par
\tab\},\par
\par
\tab dequeue: function( elem, type ) \{\par
\tab\tab type = type || "fx";\par
\par
\tab\tab var queue = jQuery.queue( elem, type ),\par
\tab\tab\tab startLength = queue.length,\par
\tab\tab\tab fn = queue.shift(),\par
\tab\tab\tab hooks = jQuery._queueHooks( elem, type ),\par
\tab\tab\tab next = function() \{\par
\tab\tab\tab\tab jQuery.dequeue( elem, type );\par
\tab\tab\tab\};\par
\par
\tab\tab // If the fx queue is dequeued, always remove the progress sentinel\par
\tab\tab if ( fn === "inprogress" ) \{\par
\tab\tab\tab fn = queue.shift();\par
\tab\tab\tab startLength--;\par
\tab\tab\}\par
\par
\tab\tab if ( fn ) \{\par
\par
\tab\tab\tab // Add a progress sentinel to prevent the fx queue from being\par
\tab\tab\tab // automatically dequeued\par
\tab\tab\tab if ( type === "fx" ) \{\par
\tab\tab\tab\tab queue.unshift( "inprogress" );\par
\tab\tab\tab\}\par
\par
\tab\tab\tab // Clear up the last queue stop function\par
\tab\tab\tab delete hooks.stop;\par
\tab\tab\tab fn.call( elem, next, hooks );\par
\tab\tab\}\par
\par
\tab\tab if ( !startLength && hooks ) \{\par
\tab\tab\tab hooks.empty.fire();\par
\tab\tab\}\par
\tab\},\par
\par
\tab // Not public - generate a queueHooks object, or return the current one\par
\tab _queueHooks: function( elem, type ) \{\par
\tab\tab var key = type + "queueHooks";\par
\tab\tab return dataPriv.get( elem, key ) || dataPriv.access( elem, key, \{\par
\tab\tab\tab empty: jQuery.Callbacks( "once memory" ).add( function() \{\par
\tab\tab\tab\tab dataPriv.remove( elem, [ type + "queue", key ] );\par
\tab\tab\tab\} )\par
\tab\tab\} );\par
\tab\}\par
\} );\par
\par
jQuery.fn.extend( \{\par
\tab queue: function( type, data ) \{\par
\tab\tab var setter = 2;\par
\par
\tab\tab if ( typeof type !== "string" ) \{\par
\tab\tab\tab data = type;\par
\tab\tab\tab type = "fx";\par
\tab\tab\tab setter--;\par
\tab\tab\}\par
\par
\tab\tab if ( arguments.length < setter ) \{\par
\tab\tab\tab return jQuery.queue( this[ 0 ], type );\par
\tab\tab\}\par
\par
\tab\tab return data === undefined ?\par
\tab\tab\tab this :\par
\tab\tab\tab this.each( function() \{\par
\tab\tab\tab\tab var queue = jQuery.queue( this, type, data );\par
\par
\tab\tab\tab\tab // Ensure a hooks for this queue\par
\tab\tab\tab\tab jQuery._queueHooks( this, type );\par
\par
\tab\tab\tab\tab if ( type === "fx" && queue[ 0 ] !== "inprogress" ) \{\par
\tab\tab\tab\tab\tab jQuery.dequeue( this, type );\par
\tab\tab\tab\tab\}\par
\tab\tab\tab\} );\par
\tab\},\par
\tab dequeue: function( type ) \{\par
\tab\tab return this.each( function() \{\par
\tab\tab\tab jQuery.dequeue( this, type );\par
\tab\tab\} );\par
\tab\},\par
\tab clearQueue: function( type ) \{\par
\tab\tab return this.queue( type || "fx", [] );\par
\tab\},\par
\par
\tab // Get a promise resolved when queues of a certain type\par
\tab // are emptied (fx is the type by default)\par
\tab promise: function( type, obj ) \{\par
\tab\tab var tmp,\par
\tab\tab\tab count = 1,\par
\tab\tab\tab defer = jQuery.Deferred(),\par
\tab\tab\tab elements = this,\par
\tab\tab\tab i = this.length,\par
\tab\tab\tab resolve = function() \{\par
\tab\tab\tab\tab if ( !( --count ) ) \{\par
\tab\tab\tab\tab\tab defer.resolveWith( elements, [ elements ] );\par
\tab\tab\tab\tab\}\par
\tab\tab\tab\};\par
\par
\tab\tab if ( typeof type !== "string" ) \{\par
\tab\tab\tab obj = type;\par
\tab\tab\tab type = undefined;\par
\tab\tab\}\par
\tab\tab type = type || "fx";\par
\par
\tab\tab while ( i-- ) \{\par
\tab\tab\tab tmp = dataPriv.get( elements[ i ], type + "queueHooks" );\par
\tab\tab\tab if ( tmp && tmp.empty ) \{\par
\tab\tab\tab\tab count++;\par
\tab\tab\tab\tab tmp.empty.add( resolve );\par
\tab\tab\tab\}\par
\tab\tab\}\par
\tab\tab resolve();\par
\tab\tab return defer.promise( obj );\par
\tab\}\par
\} );\par
var pnum = ( /[+-]?(?:\\d*\\.|)\\d+(?:[eE][+-]?\\d+|)/ ).source;\par
\par
var rcssNum = new RegExp( "^(?:([+-])=|)(" + pnum + ")([a-z%]*)$", "i" );\par
\par
\par
var cssExpand = [ "Top", "Right", "Bottom", "Left" ];\par
\par
var documentElement = document.documentElement;\par
\par
\par
\par
\tab var isAttached = function( elem ) \{\par
\tab\tab\tab return jQuery.contains( elem.ownerDocument, elem );\par
\tab\tab\},\par
\tab\tab composed = \{ composed: true \};\par
\par
\tab // Support: IE 9 - 11+, Edge 12 - 18+, iOS 10.0 - 10.2 only\par
\tab // Check attachment across shadow DOM boundaries when possible (gh-3504)\par
\tab // Support: iOS 10.0-10.2 only\par
\tab // Early iOS 10 versions support `attachShadow` but not `getRootNode`,\par
\tab // leading to errors. We need to check for `getRootNode`.\par
\tab if ( documentElement.getRootNode ) \{\par
\tab\tab isAttached = function( elem ) \{\par
\tab\tab\tab return jQuery.contains( elem.ownerDocument, elem ) ||\par
\tab\tab\tab\tab elem.getRootNode( composed ) === elem.ownerDocument;\par
\tab\tab\};\par
\tab\}\par
var isHiddenWithinTree = function( elem, el ) \{\par
\par
\tab\tab // isHiddenWithinTree might be called from jQuery#filter function;\par
\tab\tab // in that case, element will be second argument\par
\tab\tab elem = el || elem;\par
\par
\tab\tab // Inline style trumps all\par
\tab\tab return elem.style.display === "none" ||\par
\tab\tab\tab elem.style.display === "" &&\par
\par
\tab\tab\tab // Otherwise, check computed style\par
\tab\tab\tab // Support: Firefox <=43 - 45\par
\tab\tab\tab // Disconnected elements can have computed display: none, so first confirm that elem is\par
\tab\tab\tab // in the document.\par
\tab\tab\tab isAttached( elem ) &&\par
\par
\tab\tab\tab jQuery.css( elem, "display" ) === "none";\par
\tab\};\par
\par
\par
\par
function adjustCSS( elem, prop, valueParts, tween ) \{\par
\tab var adjusted, scale,\par
\tab\tab maxIterations = 20,\par
\tab\tab currentValue = tween ?\par
\tab\tab\tab function() \{\par
\tab\tab\tab\tab return tween.cur();\par
\tab\tab\tab\} :\par
\tab\tab\tab function() \{\par
\tab\tab\tab\tab return jQuery.css( elem, prop, "" );\par
\tab\tab\tab\},\par
\tab\tab initial = currentValue(),\par
\tab\tab unit = valueParts && valueParts[ 3 ] || ( jQuery.cssNumber[ prop ] ? "" : "px" ),\par
\par
\tab\tab // Starting value computation is required for potential unit mismatches\par
\tab\tab initialInUnit = elem.nodeType &&\par
\tab\tab\tab ( jQuery.cssNumber[ prop ] || unit !== "px" && +initial ) &&\par
\tab\tab\tab rcssNum.exec( jQuery.css( elem, prop ) );\par
\par
\tab if ( initialInUnit && initialInUnit[ 3 ] !== unit ) \{\par
\par
\tab\tab // Support: Firefox <=54\par
\tab\tab // Halve the iteration target value to prevent interference from CSS upper bounds (gh-2144)\par
\tab\tab initial = initial / 2;\par
\par
\tab\tab // Trust units reported by jQuery.css\par
\tab\tab unit = unit || initialInUnit[ 3 ];\par
\par
\tab\tab // Iteratively approximate from a nonzero starting point\par
\tab\tab initialInUnit = +initial || 1;\par
\par
\tab\tab while ( maxIterations-- ) \{\par
\par
\tab\tab\tab // Evaluate and update our best guess (doubling guesses that zero out).\par
\tab\tab\tab // Finish if the scale equals or crosses 1 (making the old*new product non-positive).\par
\tab\tab\tab jQuery.style( elem, prop, initialInUnit + unit );\par
\tab\tab\tab if ( ( 1 - scale ) * ( 1 - ( scale = currentValue() / initial || 0.5 ) ) <= 0 ) \{\par
\tab\tab\tab\tab maxIterations = 0;\par
\tab\tab\tab\}\par
\tab\tab\tab initialInUnit = initialInUnit / scale;\par
\par
\tab\tab\}\par
\par
\tab\tab initialInUnit = initialInUnit * 2;\par
\tab\tab jQuery.style( elem, prop, initialInUnit + unit );\par
\par
\tab\tab // Make sure we update the tween properties later on\par
\tab\tab valueParts = valueParts || [];\par
\tab\}\par
\par
\tab if ( valueParts ) \{\par
\tab\tab initialInUnit = +initialInUnit || +initial || 0;\par
\par
\tab\tab // Apply relative offset (+=/-=) if specified\par
\tab\tab adjusted = valueParts[ 1 ] ?\par
\tab\tab\tab initialInUnit + ( valueParts[ 1 ] + 1 ) * valueParts[ 2 ] :\par
\tab\tab\tab +valueParts[ 2 ];\par
\tab\tab if ( tween ) \{\par
\tab\tab\tab tween.unit = unit;\par
\tab\tab\tab tween.start = initialInUnit;\par
\tab\tab\tab tween.end = adjusted;\par
\tab\tab\}\par
\tab\}\par
\tab return adjusted;\par
\}\par
\par
\par
var defaultDisplayMap = \{\};\par
\par
function getDefaultDisplay( elem ) \{\par
\tab var temp,\par
\tab\tab doc = elem.ownerDocument,\par
\tab\tab nodeName = elem.nodeName,\par
\tab\tab display = defaultDisplayMap[ nodeName ];\par
\par
\tab if ( display ) \{\par
\tab\tab return display;\par
\tab\}\par
\par
\tab temp = doc.body.appendChild( doc.createElement( nodeName ) );\par
\tab display = jQuery.css( temp, "display" );\par
\par
\tab temp.parentNode.removeChild( temp );\par
\par
\tab if ( display === "none" ) \{\par
\tab\tab display = "block";\par
\tab\}\par
\tab defaultDisplayMap[ nodeName ] = display;\par
\par
\tab return display;\par
\}\par
\par
function showHide( elements, show ) \{\par
\tab var display, elem,\par
\tab\tab values = [],\par
\tab\tab index = 0,\par
\tab\tab length = elements.length;\par
\par
\tab // Determine new display value for elements that need to change\par
\tab for ( ; index < length; index++ ) \{\par
\tab\tab elem = elements[ index ];\par
\tab\tab if ( !elem.style ) \{\par
\tab\tab\tab continue;\par
\tab\tab\}\par
\par
\tab\tab display = elem.style.display;\par
\tab\tab if ( show ) \{\par
\par
\tab\tab\tab // Since we force visibility upon cascade-hidden elements, an immediate (and slow)\par
\tab\tab\tab // check is required in this first loop unless we have a nonempty display value (either\par
\tab\tab\tab // inline or about-to-be-restored)\par
\tab\tab\tab if ( display === "none" ) \{\par
\tab\tab\tab\tab values[ index ] = dataPriv.get( elem, "display" ) || null;\par
\tab\tab\tab\tab if ( !values[ index ] ) \{\par
\tab\tab\tab\tab\tab elem.style.display = "";\par
\tab\tab\tab\tab\}\par
\tab\tab\tab\}\par
\tab\tab\tab if ( elem.style.display === "" && isHiddenWithinTree( elem ) ) \{\par
\tab\tab\tab\tab values[ index ] = getDefaultDisplay( elem );\par
\tab\tab\tab\}\par
\tab\tab\} else \{\par
\tab\tab\tab if ( display !== "none" ) \{\par
\tab\tab\tab\tab values[ index ] = "none";\par
\par
\tab\tab\tab\tab // Remember what we're overwriting\par
\tab\tab\tab\tab dataPriv.set( elem, "display", display );\par
\tab\tab\tab\}\par
\tab\tab\}\par
\tab\}\par
\par
\tab // Set the display of the elements in a second loop to avoid constant reflow\par
\tab for ( index = 0; index < length; index++ ) \{\par
\tab\tab if ( values[ index ] != null ) \{\par
\tab\tab\tab elements[ index ].style.display = values[ index ];\par
\tab\tab\}\par
\tab\}\par
\par
\tab return elements;\par
\}\par
\par
jQuery.fn.extend( \{\par
\tab show: function() \{\par
\tab\tab return showHide( this, true );\par
\tab\},\par
\tab hide: function() \{\par
\tab\tab return showHide( this );\par
\tab\},\par
\tab toggle: function( state ) \{\par
\tab\tab if ( typeof state === "boolean" ) \{\par
\tab\tab\tab return state ? this.show() : this.hide();\par
\tab\tab\}\par
\par
\tab\tab return this.each( function() \{\par
\tab\tab\tab if ( isHiddenWithinTree( this ) ) \{\par
\tab\tab\tab\tab jQuery( this ).show();\par
\tab\tab\tab\} else \{\par
\tab\tab\tab\tab jQuery( this ).hide();\par
\tab\tab\tab\}\par
\tab\tab\} );\par
\tab\}\par
\} );\par
var rcheckableType = ( /^(?:checkbox|radio)$/i );\par
\par
var rtagName = ( /<([a-z][^\\/\\0>\\x20\\t\\r\\n\\f]*)/i );\par
\par
var rscriptType = ( /^$|^module$|\\/(?:java|ecma)script/i );\par
\par
\par
\par
( function() \{\par
\tab var fragment = document.createDocumentFragment(),\par
\tab\tab div = fragment.appendChild( document.createElement( "div" ) ),\par
\tab\tab input = document.createElement( "input" );\par
\par
\tab // Support: Android 4.0 - 4.3 only\par
\tab // Check state lost if the name is set (#11217)\par
\tab // Support: Windows Web Apps (WWA)\par
\tab // `name` and `type` must use .setAttribute for WWA (#14901)\par
\tab input.setAttribute( "type", "radio" );\par
\tab input.setAttribute( "checked", "checked" );\par
\tab input.setAttribute( "name", "t" );\par
\par
\tab div.appendChild( input );\par
\par
\tab // Support: Android <=4.1 only\par
\tab // Older WebKit doesn't clone checked state correctly in fragments\par
\tab support.checkClone = div.cloneNode( true ).cloneNode( true ).lastChild.checked;\par
\par
\tab // Support: IE <=11 only\par
\tab // Make sure textarea (and checkbox) defaultValue is properly cloned\par
\tab div.innerHTML = "<textarea>x</textarea>";\par
\tab support.noCloneChecked = !!div.cloneNode( true ).lastChild.defaultValue;\par
\par
\tab // Support: IE <=9 only\par
\tab // IE <=9 replaces <option> tags with their contents when inserted outside of\par
\tab // the select element.\par
\tab div.innerHTML = "<option></option>";\par
\tab support.option = !!div.lastChild;\par
\} )();\par
\par
\par
// We have to close these tags to support XHTML (#13200)\par
var wrapMap = \{\par
\par
\tab // XHTML parsers do not magically insert elements in the\par
\tab // same way that tag soup parsers do. So we cannot shorten\par
\tab // this by omitting <tbody> or other required elements.\par
\tab thead: [ 1, "<table>", "</table>" ],\par
\tab col: [ 2, "<table><colgroup>", "</colgroup></table>" ],\par
\tab tr: [ 2, "<table><tbody>", "</tbody></table>" ],\par
\tab td: [ 3, "<table><tbody><tr>", "</tr></tbody></table>" ],\par
\par
\tab _default: [ 0, "", "" ]\par
\};\par
\par
wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;\par
wrapMap.th = wrapMap.td;\par
\par
// Support: IE <=9 only\par
if ( !support.option ) \{\par
\tab wrapMap.optgroup = wrapMap.option = [ 1, "<select multiple='multiple'>", "</select>" ];\par
\}\par
\par
\par
function getAll( context, tag ) \{\par
\par
\tab // Support: IE <=9 - 11 only\par
\tab // Use typeof to avoid zero-argument method invocation on host objects (#15151)\par
\tab var ret;\par
\par
\tab if ( typeof context.getElementsByTagName !== "undefined" ) \{\par
\tab\tab ret = context.getElementsByTagName( tag || "*" );\par
\par
\tab\} else if ( typeof context.querySelectorAll !== "undefined" ) \{\par
\tab\tab ret = context.querySelectorAll( tag || "*" );\par
\par
\tab\} else \{\par
\tab\tab ret = [];\par
\tab\}\par
\par
\tab if ( tag === undefined || tag && nodeName( context, tag ) ) \{\par
\tab\tab return jQuery.merge( [ context ], ret );\par
\tab\}\par
\par
\tab return ret;\par
\}\par
\par
\par
// Mark scripts as having already been evaluated\par
function setGlobalEval( elems, refElements ) \{\par
\tab var i = 0,\par
\tab\tab l = elems.length;\par
\par
\tab for ( ; i < l; i++ ) \{\par
\tab\tab dataPriv.set(\par
\tab\tab\tab elems[ i ],\par
\tab\tab\tab "globalEval",\par
\tab\tab\tab !refElements || dataPriv.get( refElements[ i ], "globalEval" )\par
\tab\tab );\par
\tab\}\par
\}\par
\par
\par
var rhtml = /<|&#?\\w+;/;\par
\par
function buildFragment( elems, context, scripts, selection, ignored ) \{\par
\tab var elem, tmp, tag, wrap, attached, j,\par
\tab\tab fragment = context.createDocumentFragment(),\par
\tab\tab nodes = [],\par
\tab\tab i = 0,\par
\tab\tab l = elems.length;\par
\par
\tab for ( ; i < l; i++ ) \{\par
\tab\tab elem = elems[ i ];\par
\par
\tab\tab if ( elem || elem === 0 ) \{\par
\par
\tab\tab\tab // Add nodes directly\par
\tab\tab\tab if ( toType( elem ) === "object" ) \{\par
\par
\tab\tab\tab\tab // Support: Android <=4.0 only, PhantomJS 1 only\par
\tab\tab\tab\tab // push.apply(_, arraylike) throws on ancient WebKit\par
\tab\tab\tab\tab jQuery.merge( nodes, elem.nodeType ? [ elem ] : elem );\par
\par
\tab\tab\tab // Convert non-html into a text node\par
\tab\tab\tab\} else if ( !rhtml.test( elem ) ) \{\par
\tab\tab\tab\tab nodes.push( context.createTextNode( elem ) );\par
\par
\tab\tab\tab // Convert html into DOM nodes\par
\tab\tab\tab\} else \{\par
\tab\tab\tab\tab tmp = tmp || fragment.appendChild( context.createElement( "div" ) );\par
\par
\tab\tab\tab\tab // Deserialize a standard representation\par
\tab\tab\tab\tab tag = ( rtagName.exec( elem ) || [ "", "" ] )[ 1 ].toLowerCase();\par
\tab\tab\tab\tab wrap = wrapMap[ tag ] || wrapMap._default;\par
\tab\tab\tab\tab tmp.innerHTML = wrap[ 1 ] + jQuery.htmlPrefilter( elem ) + wrap[ 2 ];\par
\par
\tab\tab\tab\tab // Descend through wrappers to the right content\par
\tab\tab\tab\tab j = wrap[ 0 ];\par
\tab\tab\tab\tab while ( j-- ) \{\par
\tab\tab\tab\tab\tab tmp = tmp.lastChild;\par
\tab\tab\tab\tab\}\par
\par
\tab\tab\tab\tab // Support: Android <=4.0 only, PhantomJS 1 only\par
\tab\tab\tab\tab // push.apply(_, arraylike) throws on ancient WebKit\par
\tab\tab\tab\tab jQuery.merge( nodes, tmp.childNodes );\par
\par
\tab\tab\tab\tab // Remember the top-level container\par
\tab\tab\tab\tab tmp = fragment.firstChild;\par
\par
\tab\tab\tab\tab // Ensure the created nodes are orphaned (#12392)\par
\tab\tab\tab\tab tmp.textContent = "";\par
\tab\tab\tab\}\par
\tab\tab\}\par
\tab\}\par
\par
\tab // Remove wrapper from fragment\par
\tab fragment.textContent = "";\par
\par
\tab i = 0;\par
\tab while ( ( elem = nodes[ i++ ] ) ) \{\par
\par
\tab\tab // Skip elements already in the context collection (trac-4087)\par
\tab\tab if ( selection && jQuery.inArray( elem, selection ) > -1 ) \{\par
\tab\tab\tab if ( ignored ) \{\par
\tab\tab\tab\tab ignored.push( elem );\par
\tab\tab\tab\}\par
\tab\tab\tab continue;\par
\tab\tab\}\par
\par
\tab\tab attached = isAttached( elem );\par
\par
\tab\tab // Append to fragment\par
\tab\tab tmp = getAll( fragment.appendChild( elem ), "script" );\par
\par
\tab\tab // Preserve script evaluation history\par
\tab\tab if ( attached ) \{\par
\tab\tab\tab setGlobalEval( tmp );\par
\tab\tab\}\par
\par
\tab\tab // Capture executables\par
\tab\tab if ( scripts ) \{\par
\tab\tab\tab j = 0;\par
\tab\tab\tab while ( ( elem = tmp[ j++ ] ) ) \{\par
\tab\tab\tab\tab if ( rscriptType.test( elem.type || "" ) ) \{\par
\tab\tab\tab\tab\tab scripts.push( elem );\par
\tab\tab\tab\tab\}\par
\tab\tab\tab\}\par
\tab\tab\}\par
\tab\}\par
\par
\tab return fragment;\par
\}\par
\par
\par
var rtypenamespace = /^([^.]*)(?:\\.(.+)|)/;\par
\par
function returnTrue() \{\par
\tab return true;\par
\}\par
\par
function returnFalse() \{\par
\tab return false;\par
\}\par
\par
// Support: IE <=9 - 11+\par
// focus() and blur() are asynchronous, except when they are no-op.\par
// So expect focus to be synchronous when the element is already active,\par
// and blur to be synchronous when the element is not already active.\par
// (focus and blur are always synchronous in other supported browsers,\par
// this just defines when we can count on it).\par
function expectSync( elem, type ) \{\par
\tab return ( elem === safeActiveElement() ) === ( type === "focus" );\par
\}\par
\par
// Support: IE <=9 only\par
// Accessing document.activeElement can throw unexpectedly\par
// {{\field{\*\fldinst{HYPERLINK https://bugs.jquery.com/ticket/13393 }}{\fldrslt{https://bugs.jquery.com/ticket/13393\ul0\cf0}}}}\f0\fs22\par
function safeActiveElement() \{\par
\tab try \{\par
\tab\tab return document.activeElement;\par
\tab\} catch ( err ) \{ \}\par
\}\par
\par
function on( elem, types, selector, data, fn, one ) \{\par
\tab var origFn, type;\par
\par
\tab // Types can be a map of types/handlers\par
\tab if ( typeof types === "object" ) \{\par
\par
\tab\tab // ( types-Object, selector, data )\par
\tab\tab if ( typeof selector !== "string" ) \{\par
\par
\tab\tab\tab // ( types-Object, data )\par
\tab\tab\tab data = data || selector;\par
\tab\tab\tab selector = undefined;\par
\tab\tab\}\par
\tab\tab for ( type in types ) \{\par
\tab\tab\tab on( elem, type, selector, data, types[ type ], one );\par
\tab\tab\}\par
\tab\tab return elem;\par
\tab\}\par
\par
\tab if ( data == null && fn == null ) \{\par
\par
\tab\tab // ( types, fn )\par
\tab\tab fn = selector;\par
\tab\tab data = selector = undefined;\par
\tab\} else if ( fn == null ) \{\par
\tab\tab if ( typeof selector === "string" ) \{\par
\par
\tab\tab\tab // ( types, selector, fn )\par
\tab\tab\tab fn = data;\par
\tab\tab\tab data = undefined;\par
\tab\tab\} else \{\par
\par
\tab\tab\tab // ( types, data, fn )\par
\tab\tab\tab fn = data;\par
\tab\tab\tab data = selector;\par
\tab\tab\tab selector = undefined;\par
\tab\tab\}\par
\tab\}\par
\tab if ( fn === false ) \{\par
\tab\tab fn = returnFalse;\par
\tab\} else if ( !fn ) \{\par
\tab\tab return elem;\par
\tab\}\par
\par
\tab if ( one === 1 ) \{\par
\tab\tab origFn = fn;\par
\tab\tab fn = function( event ) \{\par
\par
\tab\tab\tab // Can use an empty set, since event contains the info\par
\tab\tab\tab jQuery().off( event );\par
\tab\tab\tab return origFn.apply( this, arguments );\par
\tab\tab\};\par
\par
\tab\tab // Use same guid so caller can remove using origFn\par
\tab\tab fn.guid = origFn.guid || ( origFn.guid = jQuery.guid++ );\par
\tab\}\par
\tab return elem.each( function() \{\par
\tab\tab jQuery.event.add( this, types, fn, data, selector );\par
\tab\} );\par
\}\par
\par
/*\par
 * Helper functions for managing events -- not part of the public interface.\par
 * Props to Dean Edwards' addEvent library for many of the ideas.\par
 */\par
jQuery.event = \{\par
\par
\tab global: \{\},\par
\par
\tab add: function( elem, types, handler, data, selector ) \{\par
\par
\tab\tab var handleObjIn, eventHandle, tmp,\par
\tab\tab\tab events, t, handleObj,\par
\tab\tab\tab special, handlers, type, namespaces, origType,\par
\tab\tab\tab elemData = dataPriv.get( elem );\par
\par
\tab\tab // Only attach events to objects that accept data\par
\tab\tab if ( !acceptData( elem ) ) \{\par
\tab\tab\tab return;\par
\tab\tab\}\par
\par
\tab\tab // Caller can pass in an object of custom data in lieu of the handler\par
\tab\tab if ( handler.handler ) \{\par
\tab\tab\tab handleObjIn = handler;\par
\tab\tab\tab handler = handleObjIn.handler;\par
\tab\tab\tab selector = handleObjIn.selector;\par
\tab\tab\}\par
\par
\tab\tab // Ensure that invalid selectors throw exceptions at attach time\par
\tab\tab // Evaluate against documentElement in case elem is a non-element node (e.g., document)\par
\tab\tab if ( selector ) \{\par
\tab\tab\tab jQuery.find.matchesSelector( documentElement, selector );\par
\tab\tab\}\par
\par
\tab\tab // Make sure that the handler has a unique ID, used to find/remove it later\par
\tab\tab if ( !handler.guid ) \{\par
\tab\tab\tab handler.guid = jQuery.guid++;\par
\tab\tab\}\par
\par
\tab\tab // Init the element's event structure and main handler, if this is the first\par
\tab\tab if ( !( events = elemData.events ) ) \{\par
\tab\tab\tab events = elemData.events = Object.create( null );\par
\tab\tab\}\par
\tab\tab if ( !( eventHandle = elemData.handle ) ) \{\par
\tab\tab\tab eventHandle = elemData.handle = function( e ) \{\par
\par
\tab\tab\tab\tab // Discard the second event of a jQuery.event.trigger() and\par
\tab\tab\tab\tab // when an event is called after a page has unloaded\par
\tab\tab\tab\tab return typeof jQuery !== "undefined" && jQuery.event.triggered !== e.type ?\par
\tab\tab\tab\tab\tab jQuery.event.dispatch.apply( elem, arguments ) : undefined;\par
\tab\tab\tab\};\par
\tab\tab\}\par
\par
\tab\tab // Handle multiple events separated by a space\par
\tab\tab types = ( types || "" ).match( rnothtmlwhite ) || [ "" ];\par
\tab\tab t = types.length;\par
\tab\tab while ( t-- ) \{\par
\tab\tab\tab tmp = rtypenamespace.exec( types[ t ] ) || [];\par
\tab\tab\tab type = origType = tmp[ 1 ];\par
\tab\tab\tab namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();\par
\par
\tab\tab\tab // There *must* be a type, no attaching namespace-only handlers\par
\tab\tab\tab if ( !type ) \{\par
\tab\tab\tab\tab continue;\par
\tab\tab\tab\}\par
\par
\tab\tab\tab // If event changes its type, use the special event handlers for the changed type\par
\tab\tab\tab special = jQuery.event.special[ type ] || \{\};\par
\par
\tab\tab\tab // If selector defined, determine special event api type, otherwise given type\par
\tab\tab\tab type = ( selector ? special.delegateType : special.bindType ) || type;\par
\par
\tab\tab\tab // Update special based on newly reset type\par
\tab\tab\tab special = jQuery.event.special[ type ] || \{\};\par
\par
\tab\tab\tab // handleObj is passed to all event handlers\par
\tab\tab\tab handleObj = jQuery.extend( \{\par
\tab\tab\tab\tab type: type,\par
\tab\tab\tab\tab origType: origType,\par
\tab\tab\tab\tab data: data,\par
\tab\tab\tab\tab handler: handler,\par
\tab\tab\tab\tab guid: handler.guid,\par
\tab\tab\tab\tab selector: selector,\par
\tab\tab\tab\tab needsContext: selector && jQuery.expr.match.needsContext.test( selector ),\par
\tab\tab\tab\tab namespace: namespaces.join( "." )\par
\tab\tab\tab\}, handleObjIn );\par
\par
\tab\tab\tab // Init the event handler queue if we're the first\par
\tab\tab\tab if ( !( handlers = events[ type ] ) ) \{\par
\tab\tab\tab\tab handlers = events[ type ] = [];\par
\tab\tab\tab\tab handlers.delegateCount = 0;\par
\par
\tab\tab\tab\tab // Only use addEventListener if the special events handler returns false\par
\tab\tab\tab\tab if ( !special.setup ||\par
\tab\tab\tab\tab\tab special.setup.call( elem, data, namespaces, eventHandle ) === false ) \{\par
\par
\tab\tab\tab\tab\tab if ( elem.addEventListener ) \{\par
\tab\tab\tab\tab\tab\tab elem.addEventListener( type, eventHandle );\par
\tab\tab\tab\tab\tab\}\par
\tab\tab\tab\tab\}\par
\tab\tab\tab\}\par
\par
\tab\tab\tab if ( special.add ) \{\par
\tab\tab\tab\tab special.add.call( elem, handleObj );\par
\par
\tab\tab\tab\tab if ( !handleObj.handler.guid ) \{\par
\tab\tab\tab\tab\tab handleObj.handler.guid = handler.guid;\par
\tab\tab\tab\tab\}\par
\tab\tab\tab\}\par
\par
\tab\tab\tab // Add to the element's handler list, delegates in front\par
\tab\tab\tab if ( selector ) \{\par
\tab\tab\tab\tab handlers.splice( handlers.delegateCount++, 0, handleObj );\par
\tab\tab\tab\} else \{\par
\tab\tab\tab\tab handlers.push( handleObj );\par
\tab\tab\tab\}\par
\par
\tab\tab\tab // Keep track of which events have ever been used, for event optimization\par
\tab\tab\tab jQuery.event.global[ type ] = true;\par
\tab\tab\}\par
\par
\tab\},\par
\par
\tab // Detach an event or set of events from an element\par
\tab remove: function( elem, types, handler, selector, mappedTypes ) \{\par
\par
\tab\tab var j, origCount, tmp,\par
\tab\tab\tab events, t, handleObj,\par
\tab\tab\tab special, handlers, type, namespaces, origType,\par
\tab\tab\tab elemData = dataPriv.hasData( elem ) && dataPriv.get( elem );\par
\par
\tab\tab if ( !elemData || !( events = elemData.events ) ) \{\par
\tab\tab\tab return;\par
\tab\tab\}\par
\par
\tab\tab // Once for each type.namespace in types; type may be omitted\par
\tab\tab types = ( types || "" ).match( rnothtmlwhite ) || [ "" ];\par
\tab\tab t = types.length;\par
\tab\tab while ( t-- ) \{\par
\tab\tab\tab tmp = rtypenamespace.exec( types[ t ] ) || [];\par
\tab\tab\tab type = origType = tmp[ 1 ];\par
\tab\tab\tab namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();\par
\par
\tab\tab\tab // Unbind all events (on this namespace, if provided) for the element\par
\tab\tab\tab if ( !type ) \{\par
\tab\tab\tab\tab for ( type in events ) \{\par
\tab\tab\tab\tab\tab jQuery.event.remove( elem, type + types[ t ], handler, selector, true );\par
\tab\tab\tab\tab\}\par
\tab\tab\tab\tab continue;\par
\tab\tab\tab\}\par
\par
\tab\tab\tab special = jQuery.event.special[ type ] || \{\};\par
\tab\tab\tab type = ( selector ? special.delegateType : special.bindType ) || type;\par
\tab\tab\tab handlers = events[ type ] || [];\par
\tab\tab\tab tmp = tmp[ 2 ] &&\par
\tab\tab\tab\tab new RegExp( "(^|\\\\.)" + namespaces.join( "{{\field{\*\fldinst{HYPERLINK "\\\\\\\\.(?:.*\\\\\\\\.|)"}}{\fldrslt{\\\\.(?:.*\\\\.|)\ul0\cf0}}}}\f0\fs22 " ) + "({{\field{\*\fldinst{HYPERLINK "\\\\\\\\.|$"}}{\fldrslt{\\\\.|$\ul0\cf0}}}}\f0\fs22 )" );\par
\par
\tab\tab\tab // Remove matching events\par
\tab\tab\tab origCount = j = handlers.length;\par
\tab\tab\tab while ( j-- ) \{\par
\tab\tab\tab\tab handleObj = handlers[ j ];\par
\par
\tab\tab\tab\tab if ( ( mappedTypes || origType === handleObj.origType ) &&\par
\tab\tab\tab\tab\tab ( !handler || handler.guid === handleObj.guid ) &&\par
\tab\tab\tab\tab\tab ( !tmp || tmp.test( handleObj.namespace ) ) &&\par
\tab\tab\tab\tab\tab ( !selector || selector === handleObj.selector ||\par
\tab\tab\tab\tab\tab\tab selector === "**" && handleObj.selector ) ) \{\par
\tab\tab\tab\tab\tab handlers.splice( j, 1 );\par
\par
\tab\tab\tab\tab\tab if ( handleObj.selector ) \{\par
\tab\tab\tab\tab\tab\tab handlers.delegateCount--;\par
\tab\tab\tab\tab\tab\}\par
\tab\tab\tab\tab\tab if ( special.remove ) \{\par
\tab\tab\tab\tab\tab\tab special.remove.call( elem, handleObj );\par
\tab\tab\tab\tab\tab\}\par
\tab\tab\tab\tab\}\par
\tab\tab\tab\}\par
\par
\tab\tab\tab // Remove generic event handler if we removed something and no more handlers exist\par
\tab\tab\tab // (avoids potential for endless recursion during removal of special event handlers)\par
\tab\tab\tab if ( origCount && !handlers.length ) \{\par
\tab\tab\tab\tab if ( !special.teardown ||\par
\tab\tab\tab\tab\tab special.teardown.call( elem, namespaces, elemData.handle ) === false ) \{\par
\par
\tab\tab\tab\tab\tab jQuery.removeEvent( elem, type, elemData.handle );\par
\tab\tab\tab\tab\}\par
\par
\tab\tab\tab\tab delete events[ type ];\par
\tab\tab\tab\}\par
\tab\tab\}\par
\par
\tab\tab // Remove data and the expando if it's no longer used\par
\tab\tab if ( jQuery.isEmptyObject( events ) ) \{\par
\tab\tab\tab dataPriv.remove( elem, "handle events" );\par
\tab\tab\}\par
\tab\},\par
\par
\tab dispatch: function( nativeEvent ) \{\par
\par
\tab\tab var i, j, ret, matched, handleObj, handlerQueue,\par
\tab\tab\tab args = new Array( arguments.length ),\par
\par
\tab\tab\tab // Make a writable jQuery.Event from the native event object\par
\tab\tab\tab event = jQuery.event.fix( nativeEvent ),\par
\par
\tab\tab\tab handlers = (\par
\tab\tab\tab\tab dataPriv.get( this, "events" ) || Object.create( null )\par
\tab\tab\tab )[ event.type ] || [],\par
\tab\tab\tab special = jQuery.event.special[ event.type ] || \{\};\par
\par
\tab\tab // Use the fix-ed jQuery.Event rather than the (read-only) native event\par
\tab\tab args[ 0 ] = event;\par
\par
\tab\tab for ( i = 1; i < arguments.length; i++ ) \{\par
\tab\tab\tab args[ i ] = arguments[ i ];\par
\tab\tab\}\par
\par
\tab\tab event.delegateTarget = this;\par
\par
\tab\tab // Call the preDispatch hook for the mapped type, and let it bail if desired\par
\tab\tab if ( special.preDispatch && special.preDispatch.call( this, event ) === false ) \{\par
\tab\tab\tab return;\par
\tab\tab\}\par
\par
\tab\tab // Determine handlers\par
\tab\tab handlerQueue = jQuery.event.handlers.call( this, event, handlers );\par
\par
\tab\tab // Run delegates first; they may want to stop propagation beneath us\par
\tab\tab i = 0;\par
\tab\tab while ( ( matched = handlerQueue[ i++ ] ) && !event.isPropagationStopped() ) \{\par
\tab\tab\tab event.currentTarget = matched.elem;\par
\par
\tab\tab\tab j = 0;\par
\tab\tab\tab while ( ( handleObj = matched.handlers[ j++ ] ) &&\par
\tab\tab\tab\tab !event.isImmediatePropagationStopped() ) \{\par
\par
\tab\tab\tab\tab // If the event is namespaced, then each handler is only invoked if it is\par
\tab\tab\tab\tab // specially universal or its namespaces are a superset of the event's.\par
\tab\tab\tab\tab if ( !event.rnamespace || handleObj.namespace === false ||\par
\tab\tab\tab\tab\tab event.rnamespace.test( handleObj.namespace ) ) \{\par
\par
\tab\tab\tab\tab\tab event.handleObj = handleObj;\par
\tab\tab\tab\tab\tab event.data = handleObj.data;\par
\par
\tab\tab\tab\tab\tab ret = ( ( jQuery.event.special[ handleObj.origType ] || \{\} ).handle ||\par
\tab\tab\tab\tab\tab\tab handleObj.handler ).apply( matched.elem, args );\par
\par
\tab\tab\tab\tab\tab if ( ret !== undefined ) \{\par
\tab\tab\tab\tab\tab\tab if ( ( event.result = ret ) === false ) \{\par
\tab\tab\tab\tab\tab\tab\tab event.preventDefault();\par
\tab\tab\tab\tab\tab\tab\tab event.stopPropagation();\par
\tab\tab\tab\tab\tab\tab\}\par
\tab\tab\tab\tab\tab\}\par
\tab\tab\tab\tab\}\par
\tab\tab\tab\}\par
\tab\tab\}\par
\par
\tab\tab // Call the postDispatch hook for the mapped type\par
\tab\tab if ( special.postDispatch ) \{\par
\tab\tab\tab special.postDispatch.call( this, event );\par
\tab\tab\}\par
\par
\tab\tab return event.result;\par
\tab\},\par
\par
\tab handlers: function( event, handlers ) \{\par
\tab\tab var i, handleObj, sel, matchedHandlers, matchedSelectors,\par
\tab\tab\tab handlerQueue = [],\par
\tab\tab\tab delegateCount = handlers.delegateCount,\par
\tab\tab\tab cur = event.target;\par
\par
\tab\tab // Find delegate handlers\par
\tab\tab if ( delegateCount &&\par
\par
\tab\tab\tab // Support: IE <=9\par
\tab\tab\tab // Black-hole SVG <use> instance trees (trac-13180)\par
\tab\tab\tab cur.nodeType &&\par
\par
\tab\tab\tab // Support: Firefox <=42\par
\tab\tab\tab // Suppress spec-violating clicks indicating a non-primary pointer button (trac-3861)\par
\tab\tab\tab // {{\field{\*\fldinst{HYPERLINK https://www.w3.org/TR/DOM-Level-3-Events/#event-type-click }}{\fldrslt{https://www.w3.org/TR/DOM-Level-3-Events/#event-type-click\ul0\cf0}}}}\f0\fs22\par
\tab\tab\tab // Support: IE 11 only\par
\tab\tab\tab // ...but not arrow key "clicks" of radio inputs, which can have `button` -1 (gh-2343)\par
\tab\tab\tab !( event.type === "click" && event.button >= 1 ) ) \{\par
\par
\tab\tab\tab for ( ; cur !== this; cur = cur.parentNode || this ) \{\par
\par
\tab\tab\tab\tab // Don't check non-elements (#13208)\par
\tab\tab\tab\tab // Don't process clicks on disabled elements (#6911, #8165, #11382, #11764)\par
\tab\tab\tab\tab if ( cur.nodeType === 1 && !( event.type === "click" && cur.disabled === true ) ) \{\par
\tab\tab\tab\tab\tab matchedHandlers = [];\par
\tab\tab\tab\tab\tab matchedSelectors = \{\};\par
\tab\tab\tab\tab\tab for ( i = 0; i < delegateCount; i++ ) \{\par
\tab\tab\tab\tab\tab\tab handleObj = handlers[ i ];\par
\par
\tab\tab\tab\tab\tab\tab // Don't conflict with Object.prototype properties (#13203)\par
\tab\tab\tab\tab\tab\tab sel = handleObj.selector + " ";\par
\par
\tab\tab\tab\tab\tab\tab if ( matchedSelectors[ sel ] === undefined ) \{\par
\tab\tab\tab\tab\tab\tab\tab matchedSelectors[ sel ] = handleObj.needsContext ?\par
\tab\tab\tab\tab\tab\tab\tab\tab jQuery( sel, this ).index( cur ) > -1 :\par
\tab\tab\tab\tab\tab\tab\tab\tab jQuery.find( sel, this, null, [ cur ] ).length;\par
\tab\tab\tab\tab\tab\tab\}\par
\tab\tab\tab\tab\tab\tab if ( matchedSelectors[ sel ] ) \{\par
\tab\tab\tab\tab\tab\tab\tab matchedHandlers.push( handleObj );\par
\tab\tab\tab\tab\tab\tab\}\par
\tab\tab\tab\tab\tab\}\par
\tab\tab\tab\tab\tab if ( matchedHandlers.length ) \{\par
\tab\tab\tab\tab\tab\tab handlerQueue.push( \{ elem: cur, handlers: matchedHandlers \} );\par
\tab\tab\tab\tab\tab\}\par
\tab\tab\tab\tab\}\par
\tab\tab\tab\}\par
\tab\tab\}\par
\par
\tab\tab // Add the remaining (directly-bound) handlers\par
\tab\tab cur = this;\par
\tab\tab if ( delegateCount < handlers.length ) \{\par
\tab\tab\tab handlerQueue.push( \{ elem: cur, handlers: handlers.slice( delegateCount ) \} );\par
\tab\tab\}\par
\par
\tab\tab return handlerQueue;\par
\tab\},\par
\par
\tab addProp: function( name, hook ) \{\par
\tab\tab Object.defineProperty( jQuery.Event.prototype, name, \{\par
\tab\tab\tab enumerable: true,\par
\tab\tab\tab configurable: true,\par
\par
\tab\tab\tab get: isFunction( hook ) ?\par
\tab\tab\tab\tab function() \{\par
\tab\tab\tab\tab\tab if ( this.originalEvent ) \{\par
\tab\tab\tab\tab\tab\tab return hook( this.originalEvent );\par
\tab\tab\tab\tab\tab\}\par
\tab\tab\tab\tab\} :\par
\tab\tab\tab\tab function() \{\par
\tab\tab\tab\tab\tab if ( this.originalEvent ) \{\par
\tab\tab\tab\tab\tab\tab return this.originalEvent[ name ];\par
\tab\tab\tab\tab\tab\}\par
\tab\tab\tab\tab\},\par
\par
\tab\tab\tab set: function( value ) \{\par
\tab\tab\tab\tab Object.defineProperty( this, name, \{\par
\tab\tab\tab\tab\tab enumerable: true,\par
\tab\tab\tab\tab\tab configurable: true,\par
\tab\tab\tab\tab\tab writable: true,\par
\tab\tab\tab\tab\tab value: value\par
\tab\tab\tab\tab\} );\par
\tab\tab\tab\}\par
\tab\tab\} );\par
\tab\},\par
\par
\tab fix: function( originalEvent ) \{\par
\tab\tab return originalEvent[ jQuery.expando ] ?\par
\tab\tab\tab originalEvent :\par
\tab\tab\tab new jQuery.Event( originalEvent );\par
\tab\},\par
\par
\tab special: \{\par
\tab\tab load: \{\par
\par
\tab\tab\tab // Prevent triggered image.load events from bubbling to window.load\par
\tab\tab\tab noBubble: true\par
\tab\tab\},\par
\tab\tab click: \{\par
\par
\tab\tab\tab // Utilize native event to ensure correct state for checkable inputs\par
\tab\tab\tab setup: function( data ) \{\par
\par
\tab\tab\tab\tab // For mutual compressibility with _default, replace `this` access with a local var.\par
\tab\tab\tab\tab // `|| data` is dead code meant only to preserve the variable through minification.\par
\tab\tab\tab\tab var el = this || data;\par
\par
\tab\tab\tab\tab // Claim the first handler\par
\tab\tab\tab\tab if ( rcheckableType.test( el.type ) &&\par
\tab\tab\tab\tab\tab el.click && nodeName( el, "input" ) ) \{\par
\par
\tab\tab\tab\tab\tab // dataPriv.set( el, "click", ... )\par
\tab\tab\tab\tab\tab leverageNative( el, "click", returnTrue );\par
\tab\tab\tab\tab\}\par
\par
\tab\tab\tab\tab // Return false to allow normal processing in the caller\par
\tab\tab\tab\tab return false;\par
\tab\tab\tab\},\par
\tab\tab\tab trigger: function( data ) \{\par
\par
\tab\tab\tab\tab // For mutual compressibility with _default, replace `this` access with a local var.\par
\tab\tab\tab\tab // `|| data` is dead code meant only to preserve the variable through minification.\par
\tab\tab\tab\tab var el = this || data;\par
\par
\tab\tab\tab\tab // Force setup before triggering a click\par
\tab\tab\tab\tab if ( rcheckableType.test( el.type ) &&\par
\tab\tab\tab\tab\tab el.click && nodeName( el, "input" ) ) \{\par
\par
\tab\tab\tab\tab\tab leverageNative( el, "click" );\par
\tab\tab\tab\tab\}\par
\par
\tab\tab\tab\tab // Return non-false to allow normal event-path propagation\par
\tab\tab\tab\tab return true;\par
\tab\tab\tab\},\par
\par
\tab\tab\tab // For cross-browser consistency, suppress native .click() on links\par
\tab\tab\tab // Also prevent it if we're currently inside a leveraged native-event stack\par
\tab\tab\tab _default: function( event ) \{\par
\tab\tab\tab\tab var target = event.target;\par
\tab\tab\tab\tab return rcheckableType.test( target.type ) &&\par
\tab\tab\tab\tab\tab target.click && nodeName( target, "input" ) &&\par
\tab\tab\tab\tab\tab dataPriv.get( target, "click" ) ||\par
\tab\tab\tab\tab\tab nodeName( target, "a" );\par
\tab\tab\tab\}\par
\tab\tab\},\par
\par
\tab\tab beforeunload: \{\par
\tab\tab\tab postDispatch: function( event ) \{\par
\par
\tab\tab\tab\tab // Support: Firefox 20+\par
\tab\tab\tab\tab // Firefox doesn't alert if the returnValue field is not set.\par
\tab\tab\tab\tab if ( event.result !== undefined && event.originalEvent ) \{\par
\tab\tab\tab\tab\tab event.originalEvent.returnValue = event.result;\par
\tab\tab\tab\tab\}\par
\tab\tab\tab\}\par
\tab\tab\}\par
\tab\}\par
\};\par
\par
// Ensure the presence of an event listener that handles manually-triggered\par
// synthetic events by interrupting progress until reinvoked in response to\par
// *native* events that it fires directly, ensuring that state changes have\par
// already occurred before other listeners are invoked.\par
function leverageNative( el, type, expectSync ) \{\par
\par
\tab // Missing expectSync indicates a trigger call, which must force setup through jQuery.event.add\par
\tab if ( !expectSync ) \{\par
\tab\tab if ( dataPriv.get( el, type ) === undefined ) \{\par
\tab\tab\tab jQuery.event.add( el, type, returnTrue );\par
\tab\tab\}\par
\tab\tab return;\par
\tab\}\par
\par
\tab // Register the controller as a special universal handler for all event namespaces\par
\tab dataPriv.set( el, type, false );\par
\tab jQuery.event.add( el, type, \{\par
\tab\tab namespace: false,\par
\tab\tab handler: function( event ) \{\par
\tab\tab\tab var notAsync, result,\par
\tab\tab\tab\tab saved = dataPriv.get( this, type );\par
\par
\tab\tab\tab if ( ( event.isTrigger & 1 ) && this[ type ] ) \{\par
\par
\tab\tab\tab\tab // Interrupt processing of the outer synthetic .trigger()ed event\par
\tab\tab\tab\tab // Saved data should be false in such cases, but might be a leftover capture object\par
\tab\tab\tab\tab // from an async native handler (gh-4350)\par
\tab\tab\tab\tab if ( !saved.length ) \{\par
\par
\tab\tab\tab\tab\tab // Store arguments for use when handling the inner native event\par
\tab\tab\tab\tab\tab // There will always be at least one argument (an event object), so this array\par
\tab\tab\tab\tab\tab // will not be confused with a leftover capture object.\par
\tab\tab\tab\tab\tab saved = slice.call( arguments );\par
\tab\tab\tab\tab\tab dataPriv.set( this, type, saved );\par
\par
\tab\tab\tab\tab\tab // Trigger the native event and capture its result\par
\tab\tab\tab\tab\tab // Support: IE <=9 - 11+\par
\tab\tab\tab\tab\tab // focus() and blur() are asynchronous\par
\tab\tab\tab\tab\tab notAsync = expectSync( this, type );\par
\tab\tab\tab\tab\tab this[ type ]();\par
\tab\tab\tab\tab\tab result = dataPriv.get( this, type );\par
\tab\tab\tab\tab\tab if ( saved !== result || notAsync ) \{\par
\tab\tab\tab\tab\tab\tab dataPriv.set( this, type, false );\par
\tab\tab\tab\tab\tab\} else \{\par
\tab\tab\tab\tab\tab\tab result = \{\};\par
\tab\tab\tab\tab\tab\}\par
\tab\tab\tab\tab\tab if ( saved !== result ) \{\par
\par
\tab\tab\tab\tab\tab\tab // Cancel the outer synthetic event\par
\tab\tab\tab\tab\tab\tab event.stopImmediatePropagation();\par
\tab\tab\tab\tab\tab\tab event.preventDefault();\par
\par
\tab\tab\tab\tab\tab\tab // Support: Chrome 86+\par
\tab\tab\tab\tab\tab\tab // In Chrome, if an element having a focusout handler is blurred by\par
\tab\tab\tab\tab\tab\tab // clicking outside of it, it invokes the handler synchronously. If\par
\tab\tab\tab\tab\tab\tab // that handler calls `.remove()` on the element, the data is cleared,\par
\tab\tab\tab\tab\tab\tab // leaving `result` undefined. We need to guard against this.\par
\tab\tab\tab\tab\tab\tab return result && result.value;\par
\tab\tab\tab\tab\tab\}\par
\par
\tab\tab\tab\tab // If this is an inner synthetic event for an event with a bubbling surrogate\par
\tab\tab\tab\tab // (focus or blur), assume that the surrogate already propagated from triggering the\par
\tab\tab\tab\tab // native event and prevent that from happening again here.\par
\tab\tab\tab\tab // This technically gets the ordering wrong w.r.t. to `.trigger()` (in which the\par
\tab\tab\tab\tab // bubbling surrogate propagates *after* the non-bubbling base), but that seems\par
\tab\tab\tab\tab // less bad than duplication.\par
\tab\tab\tab\tab\} else if ( ( jQuery.event.special[ type ] || \{\} ).delegateType ) \{\par
\tab\tab\tab\tab\tab event.stopPropagation();\par
\tab\tab\tab\tab\}\par
\par
\tab\tab\tab // If this is a native event triggered above, everything is now in order\par
\tab\tab\tab // Fire an inner synthetic event with the original arguments\par
\tab\tab\tab\} else if ( saved.length ) \{\par
\par
\tab\tab\tab\tab // ...and capture the result\par
\tab\tab\tab\tab dataPriv.set( this, type, \{\par
\tab\tab\tab\tab\tab value: jQuery.event.trigger(\par
\par
\tab\tab\tab\tab\tab\tab // Support: IE <=9 - 11+\par
\tab\tab\tab\tab\tab\tab // Extend with the prototype to reset the above stopImmediatePropagation()\par
\tab\tab\tab\tab\tab\tab jQuery.extend( saved[ 0 ], jQuery.Event.prototype ),\par
\tab\tab\tab\tab\tab\tab saved.slice( 1 ),\par
\tab\tab\tab\tab\tab\tab this\par
\tab\tab\tab\tab\tab )\par
\tab\tab\tab\tab\} );\par
\par
\tab\tab\tab\tab // Abort handling of the native event\par
\tab\tab\tab\tab event.stopImmediatePropagation();\par
\tab\tab\tab\}\par
\tab\tab\}\par
\tab\} );\par
\}\par
\par
jQuery.removeEvent = function( elem, type, handle ) \{\par
\par
\tab // This "if" is needed for plain objects\par
\tab if ( elem.removeEventListener ) \{\par
\tab\tab elem.removeEventListener( type, handle );\par
\tab\}\par
\};\par
\par
jQuery.Event = function( src, props ) \{\par
\par
\tab // Allow instantiation without the 'new' keyword\par
\tab if ( !( this instanceof jQuery.Event ) ) \{\par
\tab\tab return new jQuery.Event( src, props );\par
\tab\}\par
\par
\tab // Event object\par
\tab if ( src && src.type ) \{\par
\tab\tab this.originalEvent = src;\par
\tab\tab this.type = src.type;\par
\par
\tab\tab // Events bubbling up the document may have been marked as prevented\par
\tab\tab // by a handler lower down the tree; reflect the correct value.\par
\tab\tab this.isDefaultPrevented = src.defaultPrevented ||\par
\tab\tab\tab\tab src.defaultPrevented === undefined &&\par
\par
\tab\tab\tab\tab // Support: Android <=2.3 only\par
\tab\tab\tab\tab src.returnValue === false ?\par
\tab\tab\tab returnTrue :\par
\tab\tab\tab returnFalse;\par
\par
\tab\tab // Create target properties\par
\tab\tab // Support: Safari <=6 - 7 only\par
\tab\tab // Target should not be a text node (#504, #13143)\par
\tab\tab this.target = ( src.target && src.target.nodeType === 3 ) ?\par
\tab\tab\tab src.target.parentNode :\par
\tab\tab\tab src.target;\par
\par
\tab\tab this.currentTarget = src.currentTarget;\par
\tab\tab this.relatedTarget = src.relatedTarget;\par
\par
\tab // Event type\par
\tab\} else \{\par
\tab\tab this.type = src;\par
\tab\}\par
\par
\tab // Put explicitly provided properties onto the event object\par
\tab if ( props ) \{\par
\tab\tab jQuery.extend( this, props );\par
\tab\}\par
\par
\tab // Create a timestamp if incoming event doesn't have one\par
\tab this.timeStamp = src && src.timeStamp || Date.now();\par
\par
\tab // Mark it as fixed\par
\tab this[ jQuery.expando ] = true;\par
\};\par
\par
// jQuery.Event is based on DOM3 Events as specified by the ECMAScript Language Binding\par
// {{\field{\*\fldinst{HYPERLINK https://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html }}{\fldrslt{https://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html\ul0\cf0}}}}\f0\fs22\par
jQuery.Event.prototype = \{\par
\tab constructor: jQuery.Event,\par
\tab isDefaultPrevented: returnFalse,\par
\tab isPropagationStopped: returnFalse,\par
\tab isImmediatePropagationStopped: returnFalse,\par
\tab isSimulated: false,\par
\par
\tab preventDefault: function() \{\par
\tab\tab var e = this.originalEvent;\par
\par
\tab\tab this.isDefaultPrevented = returnTrue;\par
\par
\tab\tab if ( e && !this.isSimulated ) \{\par
\tab\tab\tab e.preventDefault();\par
\tab\tab\}\par
\tab\},\par
\tab stopPropagation: function() \{\par
\tab\tab var e = this.originalEvent;\par
\par
\tab\tab this.isPropagationStopped = returnTrue;\par
\par
\tab\tab if ( e && !this.isSimulated ) \{\par
\tab\tab\tab e.stopPropagation();\par
\tab\tab\}\par
\tab\},\par
\tab stopImmediatePropagation: function() \{\par
\tab\tab var e = this.originalEvent;\par
\par
\tab\tab this.isImmediatePropagationStopped = returnTrue;\par
\par
\tab\tab if ( e && !this.isSimulated ) \{\par
\tab\tab\tab e.stopImmediatePropagation();\par
\tab\tab\}\par
\par
\tab\tab this.stopPropagation();\par
\tab\}\par
\};\par
\par
// Includes all common event props including KeyEvent and MouseEvent specific props\par
jQuery.each( \{\par
\tab altKey: true,\par
\tab bubbles: true,\par
\tab cancelable: true,\par
\tab changedTouches: true,\par
\tab ctrlKey: true,\par
\tab detail: true,\par
\tab eventPhase: true,\par
\tab metaKey: true,\par
\tab pageX: true,\par
\tab pageY: true,\par
\tab shiftKey: true,\par
\tab view: true,\par
\tab "char": true,\par
\tab code: true,\par
\tab charCode: true,\par
\tab key: true,\par
\tab keyCode: true,\par
\tab button: true,\par
\tab buttons: true,\par
\tab clientX: true,\par
\tab clientY: true,\par
\tab offsetX: true,\par
\tab offsetY: true,\par
\tab pointerId: true,\par
\tab pointerType: true,\par
\tab screenX: true,\par
\tab screenY: true,\par
\tab targetTouches: true,\par
\tab toElement: true,\par
\tab touches: true,\par
\tab which: true\par
\}, jQuery.event.addProp );\par
\par
jQuery.each( \{ focus: "focusin", blur: "focusout" \}, function( type, delegateType ) \{\par
\tab jQuery.event.special[ type ] = \{\par
\par
\tab\tab // Utilize native event if possible so blur/focus sequence is correct\par
\tab\tab setup: function() \{\par
\par
\tab\tab\tab // Claim the first handler\par
\tab\tab\tab // dataPriv.set( this, "focus", ... )\par
\tab\tab\tab // dataPriv.set( this, "blur", ... )\par
\tab\tab\tab leverageNative( this, type, expectSync );\par
\par
\tab\tab\tab // Return false to allow normal processing in the caller\par
\tab\tab\tab return false;\par
\tab\tab\},\par
\tab\tab trigger: function() \{\par
\par
\tab\tab\tab // Force setup before trigger\par
\tab\tab\tab leverageNative( this, type );\par
\par
\tab\tab\tab // Return non-false to allow normal event-path propagation\par
\tab\tab\tab return true;\par
\tab\tab\},\par
\par
\tab\tab // Suppress native focus or blur as it's already being fired\par
\tab\tab // in leverageNative.\par
\tab\tab _default: function() \{\par
\tab\tab\tab return true;\par
\tab\tab\},\par
\par
\tab\tab delegateType: delegateType\par
\tab\};\par
\} );\par
\par
// Create mouseenter/leave events using mouseover/out and event-time checks\par
// so that event delegation works in jQuery.\par
// Do the same for pointerenter/pointerleave and pointerover/pointerout\par
//\par
// Support: Safari 7 only\par
// Safari sends mouseenter too often; see:\par
// {{\field{\*\fldinst{HYPERLINK https://bugs.chromium.org/p/chromium/issues/detail?id=470258 }}{\fldrslt{https://bugs.chromium.org/p/chromium/issues/detail?id=470258\ul0\cf0}}}}\f0\fs22\par
// for the description of the bug (it existed in older Chrome versions as well).\par
jQuery.each( \{\par
\tab mouseenter: "mouseover",\par
\tab mouseleave: "mouseout",\par
\tab pointerenter: "pointerover",\par
\tab pointerleave: "pointerout"\par
\}, function( orig, fix ) \{\par
\tab jQuery.event.special[ orig ] = \{\par
\tab\tab delegateType: fix,\par
\tab\tab bindType: fix,\par
\par
\tab\tab handle: function( event ) \{\par
\tab\tab\tab var ret,\par
\tab\tab\tab\tab target = this,\par
\tab\tab\tab\tab related = event.relatedTarget,\par
\tab\tab\tab\tab handleObj = event.handleObj;\par
\par
\tab\tab\tab // For mouseenter/leave call the handler if related is outside the target.\par
\tab\tab\tab // NB: No relatedTarget if the mouse left/entered the browser window\par
\tab\tab\tab if ( !related || ( related !== target && !jQuery.contains( target, related ) ) ) \{\par
\tab\tab\tab\tab event.type = handleObj.origType;\par
\tab\tab\tab\tab ret = handleObj.handler.apply( this, arguments );\par
\tab\tab\tab\tab event.type = fix;\par
\tab\tab\tab\}\par
\tab\tab\tab return ret;\par
\tab\tab\}\par
\tab\};\par
\} );\par
\par
jQuery.fn.extend( \{\par
\par
\tab on: function( types, selector, data, fn ) \{\par
\tab\tab return on( this, types, selector, data, fn );\par
\tab\},\par
\tab one: function( types, selector, data, fn ) \{\par
\tab\tab return on( this, types, selector, data, fn, 1 );\par
\tab\},\par
\tab off: function( types, selector, fn ) \{\par
\tab\tab var handleObj, type;\par
\tab\tab if ( types && types.preventDefault && types.handleObj ) \{\par
\par
\tab\tab\tab // ( event )  dispatched jQuery.Event\par
\tab\tab\tab handleObj = types.handleObj;\par
\tab\tab\tab jQuery( types.delegateTarget ).off(\par
\tab\tab\tab\tab handleObj.namespace ?\par
\tab\tab\tab\tab\tab handleObj.origType + "." + handleObj.namespace :\par
\tab\tab\tab\tab\tab handleObj.origType,\par
\tab\tab\tab\tab handleObj.selector,\par
\tab\tab\tab\tab handleObj.handler\par
\tab\tab\tab );\par
\tab\tab\tab return this;\par
\tab\tab\}\par
\tab\tab if ( typeof types === "object" ) \{\par
\par
\tab\tab\tab // ( types-object [, selector] )\par
\tab\tab\tab for ( type in types ) \{\par
\tab\tab\tab\tab this.off( type, selector, types[ type ] );\par
\tab\tab\tab\}\par
\tab\tab\tab return this;\par
\tab\tab\}\par
\tab\tab if ( selector === false || typeof selector === "function" ) \{\par
\par
\tab\tab\tab // ( types [, fn] )\par
\tab\tab\tab fn = selector;\par
\tab\tab\tab selector = undefined;\par
\tab\tab\}\par
\tab\tab if ( fn === false ) \{\par
\tab\tab\tab fn = returnFalse;\par
\tab\tab\}\par
\tab\tab return this.each( function() \{\par
\tab\tab\tab jQuery.event.remove( this, types, fn, selector );\par
\tab\tab\} );\par
\tab\}\par
\} );\par
\par
\par
var\par
\par
\tab // Support: IE <=10 - 11, Edge 12 - 13 only\par
\tab // In IE/Edge using regex groups here causes severe slowdowns.\par
\tab // See {{\field{\*\fldinst{HYPERLINK https://connect.microsoft.com/IE/feedback/details/1736512/ }}{\fldrslt{https://connect.microsoft.com/IE/feedback/details/1736512/\ul0\cf0}}}}\f0\fs22\par
\tab rnoInnerhtml = /<script|<style|<link/i,\par
\par
\tab // checked="checked" or checked\par
\tab rchecked = /checked\\s*(?:[^=]|=\\s*.checked.)/i,\par
\tab rcleanScript = /^\\s*<!(?:\\[CDATA\\[|--)|(?:\\]\\]|--)>\\s*$/g;\par
\par
// Prefer a tbody over its parent table for containing new rows\par
function manipulationTarget( elem, content ) \{\par
\tab if ( nodeName( elem, "table" ) &&\par
\tab\tab nodeName( content.nodeType !== 11 ? content : content.firstChild, "tr" ) ) \{\par
\par
\tab\tab return jQuery( elem ).children( "tbody" )[ 0 ] || elem;\par
\tab\}\par
\par
\tab return elem;\par
\}\par
\par
// Replace/restore the type attribute of script elements for safe DOM manipulation\par
function disableScript( elem ) \{\par
\tab elem.type = ( elem.getAttribute( "type" ) !== null ) + "/" + elem.type;\par
\tab return elem;\par
\}\par
function restoreScript( elem ) \{\par
\tab if ( ( elem.type || "" ).slice( 0, 5 ) === "true/" ) \{\par
\tab\tab elem.type = elem.type.slice( 5 );\par
\tab\} else \{\par
\tab\tab elem.removeAttribute( "type" );\par
\tab\}\par
\par
\tab return elem;\par
\}\par
\par
function cloneCopyEvent( src, dest ) \{\par
\tab var i, l, type, pdataOld, udataOld, udataCur, events;\par
\par
\tab if ( dest.nodeType !== 1 ) \{\par
\tab\tab return;\par
\tab\}\par
\par
\tab // 1. Copy private data: events, handlers, etc.\par
\tab if ( dataPriv.hasData( src ) ) \{\par
\tab\tab pdataOld = dataPriv.get( src );\par
\tab\tab events = pdataOld.events;\par
\par
\tab\tab if ( events ) \{\par
\tab\tab\tab dataPriv.remove( dest, "handle events" );\par
\par
\tab\tab\tab for ( type in events ) \{\par
\tab\tab\tab\tab for ( i = 0, l = events[ type ].length; i < l; i++ ) \{\par
\tab\tab\tab\tab\tab jQuery.event.add( dest, type, events[ type ][ i ] );\par
\tab\tab\tab\tab\}\par
\tab\tab\tab\}\par
\tab\tab\}\par
\tab\}\par
\par
\tab // 2. Copy user data\par
\tab if ( dataUser.hasData( src ) ) \{\par
\tab\tab udataOld = dataUser.access( src );\par
\tab\tab udataCur = jQuery.extend( \{\}, udataOld );\par
\par
\tab\tab dataUser.set( dest, udataCur );\par
\tab\}\par
\}\par
\par
// Fix IE bugs, see support tests\par
function fixInput( src, dest ) \{\par
\tab var nodeName = dest.nodeName.toLowerCase();\par
\par
\tab // Fails to persist the checked state of a cloned checkbox or radio button.\par
\tab if ( nodeName === "input" && rcheckableType.test( src.type ) ) \{\par
\tab\tab dest.checked = src.checked;\par
\par
\tab // Fails to return the selected option to the default selected state when cloning options\par
\tab\} else if ( nodeName === "input" || nodeName === "textarea" ) \{\par
\tab\tab dest.defaultValue = src.defaultValue;\par
\tab\}\par
\}\par
\par
function domManip( collection, args, callback, ignored ) \{\par
\par
\tab // Flatten any nested arrays\par
\tab args = flat( args );\par
\par
\tab var fragment, first, scripts, hasScripts, node, doc,\par
\tab\tab i = 0,\par
\tab\tab l = collection.length,\par
\tab\tab iNoClone = l - 1,\par
\tab\tab value = args[ 0 ],\par
\tab\tab valueIsFunction = isFunction( value );\par
\par
\tab // We can't cloneNode fragments that contain checked, in WebKit\par
\tab if ( valueIsFunction ||\par
\tab\tab\tab ( l > 1 && typeof value === "string" &&\par
\tab\tab\tab\tab !support.checkClone && rchecked.test( value ) ) ) \{\par
\tab\tab return collection.each( function( index ) \{\par
\tab\tab\tab var self = collection.eq( index );\par
\tab\tab\tab if ( valueIsFunction ) \{\par
\tab\tab\tab\tab args[ 0 ] = value.call( this, index, self.html() );\par
\tab\tab\tab\}\par
\tab\tab\tab domManip( self, args, callback, ignored );\par
\tab\tab\} );\par
\tab\}\par
\par
\tab if ( l ) \{\par
\tab\tab fragment = buildFragment( args, collection[ 0 ].ownerDocument, false, collection, ignored );\par
\tab\tab first = fragment.firstChild;\par
\par
\tab\tab if ( fragment.childNodes.length === 1 ) \{\par
\tab\tab\tab fragment = first;\par
\tab\tab\}\par
\par
\tab\tab // Require either new content or an interest in ignored elements to invoke the callback\par
\tab\tab if ( first || ignored ) \{\par
\tab\tab\tab scripts = jQuery.map( getAll( fragment, "script" ), disableScript );\par
\tab\tab\tab hasScripts = scripts.length;\par
\par
\tab\tab\tab // Use the original fragment for the last item\par
\tab\tab\tab // instead of the first because it can end up\par
\tab\tab\tab // being emptied incorrectly in certain situations (#8070).\par
\tab\tab\tab for ( ; i < l; i++ ) \{\par
\tab\tab\tab\tab node = fragment;\par
\par
\tab\tab\tab\tab if ( i !== iNoClone ) \{\par
\tab\tab\tab\tab\tab node = jQuery.clone( node, true, true );\par
\par
\tab\tab\tab\tab\tab // Keep references to cloned scripts for later restoration\par
\tab\tab\tab\tab\tab if ( hasScripts ) \{\par
\par
\tab\tab\tab\tab\tab\tab // Support: Android <=4.0 only, PhantomJS 1 only\par
\tab\tab\tab\tab\tab\tab // push.apply(_, arraylike) throws on ancient WebKit\par
\tab\tab\tab\tab\tab\tab jQuery.merge( scripts, getAll( node, "script" ) );\par
\tab\tab\tab\tab\tab\}\par
\tab\tab\tab\tab\}\par
\par
\tab\tab\tab\tab callback.call( collection[ i ], node, i );\par
\tab\tab\tab\}\par
\par
\tab\tab\tab if ( hasScripts ) \{\par
\tab\tab\tab\tab doc = scripts[ scripts.length - 1 ].ownerDocument;\par
\par
\tab\tab\tab\tab // Reenable scripts\par
\tab\tab\tab\tab jQuery.map( scripts, restoreScript );\par
\par
\tab\tab\tab\tab // Evaluate executable scripts on first document insertion\par
\tab\tab\tab\tab for ( i = 0; i < hasScripts; i++ ) \{\par
\tab\tab\tab\tab\tab node = scripts[ i ];\par
\tab\tab\tab\tab\tab if ( rscriptType.test( node.type || "" ) &&\par
\tab\tab\tab\tab\tab\tab !dataPriv.access( node, "globalEval" ) &&\par
\tab\tab\tab\tab\tab\tab jQuery.contains( doc, node ) ) \{\par
\par
\tab\tab\tab\tab\tab\tab if ( node.src && ( node.type || "" ).toLowerCase()  !== "module" ) \{\par
\par
\tab\tab\tab\tab\tab\tab\tab // Optional AJAX dependency, but won't run scripts if not present\par
\tab\tab\tab\tab\tab\tab\tab if ( jQuery._evalUrl && !node.noModule ) \{\par
\tab\tab\tab\tab\tab\tab\tab\tab jQuery._evalUrl( node.src, \{\par
\tab\tab\tab\tab\tab\tab\tab\tab\tab nonce: node.nonce || node.getAttribute( "nonce" )\par
\tab\tab\tab\tab\tab\tab\tab\tab\}, doc );\par
\tab\tab\tab\tab\tab\tab\tab\}\par
\tab\tab\tab\tab\tab\tab\} else \{\par
\tab\tab\tab\tab\tab\tab\tab DOMEval( node.textContent.replace( rcleanScript, "" ), node, doc );\par
\tab\tab\tab\tab\tab\tab\}\par
\tab\tab\tab\tab\tab\}\par
\tab\tab\tab\tab\}\par
\tab\tab\tab\}\par
\tab\tab\}\par
\tab\}\par
\par
\tab return collection;\par
\}\par
\par
function remove( elem, selector, keepData ) \{\par
\tab var node,\par
\tab\tab nodes = selector ? jQuery.filter( selector, elem ) : elem,\par
\tab\tab i = 0;\par
\par
\tab for ( ; ( node = nodes[ i ] ) != null; i++ ) \{\par
\tab\tab if ( !keepData && node.nodeType === 1 ) \{\par
\tab\tab\tab jQuery.cleanData( getAll( node ) );\par
\tab\tab\}\par
\par
\tab\tab if ( node.parentNode ) \{\par
\tab\tab\tab if ( keepData && isAttached( node ) ) \{\par
\tab\tab\tab\tab setGlobalEval( getAll( node, "script" ) );\par
\tab\tab\tab\}\par
\tab\tab\tab node.parentNode.removeChild( node );\par
\tab\tab\}\par
\tab\}\par
\par
\tab return elem;\par
\}\par
\par
jQuery.extend( \{\par
\tab htmlPrefilter: function( html ) \{\par
\tab\tab return html;\par
\tab\},\par
\par
\tab clone: function( elem, dataAndEvents, deepDataAndEvents ) \{\par
\tab\tab var i, l, srcElements, destElements,\par
\tab\tab\tab clone = elem.cloneNode( true ),\par
\tab\tab\tab inPage = isAttached( elem );\par
\par
\tab\tab // Fix IE cloning issues\par
\tab\tab if ( !support.noCloneChecked && ( elem.nodeType === 1 || elem.nodeType === 11 ) &&\par
\tab\tab\tab\tab !jQuery.isXMLDoc( elem ) ) \{\par
\par
\tab\tab\tab // We eschew Sizzle here for performance reasons: {{\field{\*\fldinst{HYPERLINK https://jsperf.com/getall-vs-sizzle/2 }}{\fldrslt{https://jsperf.com/getall-vs-sizzle/2\ul0\cf0}}}}\f0\fs22\par
\tab\tab\tab destElements = getAll( clone );\par
\tab\tab\tab srcElements = getAll( elem );\par
\par
\tab\tab\tab for ( i = 0, l = srcElements.length; i < l; i++ ) \{\par
\tab\tab\tab\tab fixInput( srcElements[ i ], destElements[ i ] );\par
\tab\tab\tab\}\par
\tab\tab\}\par
\par
\tab\tab // Copy the events from the original to the clone\par
\tab\tab if ( dataAndEvents ) \{\par
\tab\tab\tab if ( deepDataAndEvents ) \{\par
\tab\tab\tab\tab srcElements = srcElements || getAll( elem );\par
\tab\tab\tab\tab destElements = destElements || getAll( clone );\par
\par
\tab\tab\tab\tab for ( i = 0, l = srcElements.length; i < l; i++ ) \{\par
\tab\tab\tab\tab\tab cloneCopyEvent( srcElements[ i ], destElements[ i ] );\par
\tab\tab\tab\tab\}\par
\tab\tab\tab\} else \{\par
\tab\tab\tab\tab cloneCopyEvent( elem, clone );\par
\tab\tab\tab\}\par
\tab\tab\}\par
\par
\tab\tab // Preserve script evaluation history\par
\tab\tab destElements = getAll( clone, "script" );\par
\tab\tab if ( destElements.length > 0 ) \{\par
\tab\tab\tab setGlobalEval( destElements, !inPage && getAll( elem, "script" ) );\par
\tab\tab\}\par
\par
\tab\tab // Return the cloned set\par
\tab\tab return clone;\par
\tab\},\par
\par
\tab cleanData: function( elems ) \{\par
\tab\tab var data, elem, type,\par
\tab\tab\tab special = jQuery.event.special,\par
\tab\tab\tab i = 0;\par
\par
\tab\tab for ( ; ( elem = elems[ i ] ) !== undefined; i++ ) \{\par
\tab\tab\tab if ( acceptData( elem ) ) \{\par
\tab\tab\tab\tab if ( ( data = elem[ dataPriv.expando ] ) ) \{\par
\tab\tab\tab\tab\tab if ( data.events ) \{\par
\tab\tab\tab\tab\tab\tab for ( type in data.events ) \{\par
\tab\tab\tab\tab\tab\tab\tab if ( special[ type ] ) \{\par
\tab\tab\tab\tab\tab\tab\tab\tab jQuery.event.remove( elem, type );\par
\par
\tab\tab\tab\tab\tab\tab\tab // This is a shortcut to avoid jQuery.event.remove's overhead\par
\tab\tab\tab\tab\tab\tab\tab\} else \{\par
\tab\tab\tab\tab\tab\tab\tab\tab jQuery.removeEvent( elem, type, data.handle );\par
\tab\tab\tab\tab\tab\tab\tab\}\par
\tab\tab\tab\tab\tab\tab\}\par
\tab\tab\tab\tab\tab\}\par
\par
\tab\tab\tab\tab\tab // Support: Chrome <=35 - 45+\par
\tab\tab\tab\tab\tab // Assign undefined instead of using delete, see Data#remove\par
\tab\tab\tab\tab\tab elem[ dataPriv.expando ] = undefined;\par
\tab\tab\tab\tab\}\par
\tab\tab\tab\tab if ( elem[ dataUser.expando ] ) \{\par
\par
\tab\tab\tab\tab\tab // Support: Chrome <=35 - 45+\par
\tab\tab\tab\tab\tab // Assign undefined instead of using delete, see Data#remove\par
\tab\tab\tab\tab\tab elem[ dataUser.expando ] = undefined;\par
\tab\tab\tab\tab\}\par
\tab\tab\tab\}\par
\tab\tab\}\par
\tab\}\par
\} );\par
\par
jQuery.fn.extend( \{\par
\tab detach: function( selector ) \{\par
\tab\tab return remove( this, selector, true );\par
\tab\},\par
\par
\tab remove: function( selector ) \{\par
\tab\tab return remove( this, selector );\par
\tab\},\par
\par
\tab text: function( value ) \{\par
\tab\tab return access( this, function( value ) \{\par
\tab\tab\tab return value === undefined ?\par
\tab\tab\tab\tab jQuery.text( this ) :\par
\tab\tab\tab\tab this.empty().each( function() \{\par
\tab\tab\tab\tab\tab if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) \{\par
\tab\tab\tab\tab\tab\tab this.textContent = value;\par
\tab\tab\tab\tab\tab\}\par
\tab\tab\tab\tab\} );\par
\tab\tab\}, null, value, arguments.length );\par
\tab\},\par
\par
\tab append: function() \{\par
\tab\tab return domManip( this, arguments, function( elem ) \{\par
\tab\tab\tab if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) \{\par
\tab\tab\tab\tab var target = manipulationTarget( this, elem );\par
\tab\tab\tab\tab target.appendChild( elem );\par
\tab\tab\tab\}\par
\tab\tab\} );\par
\tab\},\par
\par
\tab prepend: function() \{\par
\tab\tab return domManip( this, arguments, function( elem ) \{\par
\tab\tab\tab if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) \{\par
\tab\tab\tab\tab var target = manipulationTarget( this, elem );\par
\tab\tab\tab\tab target.insertBefore( elem, target.firstChild );\par
\tab\tab\tab\}\par
\tab\tab\} );\par
\tab\},\par
\par
\tab before: function() \{\par
\tab\tab return domManip( this, arguments, function( elem ) \{\par
\tab\tab\tab if ( this.parentNode ) \{\par
\tab\tab\tab\tab this.parentNode.insertBefore( elem, this );\par
\tab\tab\tab\}\par
\tab\tab\} );\par
\tab\},\par
\par
\tab after: function() \{\par
\tab\tab return domManip( this, arguments, function( elem ) \{\par
\tab\tab\tab if ( this.parentNode ) \{\par
\tab\tab\tab\tab this.parentNode.insertBefore( elem, this.nextSibling );\par
\tab\tab\tab\}\par
\tab\tab\} );\par
\tab\},\par
\par
\tab empty: function() \{\par
\tab\tab var elem,\par
\tab\tab\tab i = 0;\par
\par
\tab\tab for ( ; ( elem = this[ i ] ) != null; i++ ) \{\par
\tab\tab\tab if ( elem.nodeType === 1 ) \{\par
\par
\tab\tab\tab\tab // Prevent memory leaks\par
\tab\tab\tab\tab jQuery.cleanData( getAll( elem, false ) );\par
\par
\tab\tab\tab\tab // Remove any remaining nodes\par
\tab\tab\tab\tab elem.textContent = "";\par
\tab\tab\tab\}\par
\tab\tab\}\par
\par
\tab\tab return this;\par
\tab\},\par
\par
\tab clone: function( dataAndEvents, deepDataAndEvents ) \{\par
\tab\tab dataAndEvents = dataAndEvents == null ? false : dataAndEvents;\par
\tab\tab deepDataAndEvents = deepDataAndEvents == null ? dataAndEvents : deepDataAndEvents;\par
\par
\tab\tab return this.map( function() \{\par
\tab\tab\tab return jQuery.clone( this, dataAndEvents, deepDataAndEvents );\par
\tab\tab\} );\par
\tab\},\par
\par
\tab html: function( value ) \{\par
\tab\tab return access( this, function( value ) \{\par
\tab\tab\tab var elem = this[ 0 ] || \{\},\par
\tab\tab\tab\tab i = 0,\par
\tab\tab\tab\tab l = this.length;\par
\par
\tab\tab\tab if ( value === undefined && elem.nodeType === 1 ) \{\par
\tab\tab\tab\tab return elem.innerHTML;\par
\tab\tab\tab\}\par
\par
\tab\tab\tab // See if we can take a shortcut and just use innerHTML\par
\tab\tab\tab if ( typeof value === "string" && !rnoInnerhtml.test( value ) &&\par
\tab\tab\tab\tab !wrapMap[ ( rtagName.exec( value ) || [ "", "" ] )[ 1 ].toLowerCase() ] ) \{\par
\par
\tab\tab\tab\tab value = jQuery.htmlPrefilter( value );\par
\par
\tab\tab\tab\tab try \{\par
\tab\tab\tab\tab\tab for ( ; i < l; i++ ) \{\par
\tab\tab\tab\tab\tab\tab elem = this[ i ] || \{\};\par
\par
\tab\tab\tab\tab\tab\tab // Remove element nodes and prevent memory leaks\par
\tab\tab\tab\tab\tab\tab if ( elem.nodeType === 1 ) \{\par
\tab\tab\tab\tab\tab\tab\tab jQuery.cleanData( getAll( elem, false ) );\par
\tab\tab\tab\tab\tab\tab\tab elem.innerHTML = value;\par
\tab\tab\tab\tab\tab\tab\}\par
\tab\tab\tab\tab\tab\}\par
\par
\tab\tab\tab\tab\tab elem = 0;\par
\par
\tab\tab\tab\tab // If using innerHTML throws an exception, use the fallback method\par
\tab\tab\tab\tab\} catch ( e ) \{\}\par
\tab\tab\tab\}\par
\par
\tab\tab\tab if ( elem ) \{\par
\tab\tab\tab\tab this.empty().append( value );\par
\tab\tab\tab\}\par
\tab\tab\}, null, value, arguments.length );\par
\tab\},\par
\par
\tab replaceWith: function() \{\par
\tab\tab var ignored = [];\par
\par
\tab\tab // Make the changes, replacing each non-ignored context element with the new content\par
\tab\tab return domManip( this, arguments, function( elem ) \{\par
\tab\tab\tab var parent = this.parentNode;\par
\par
\tab\tab\tab if ( jQuery.inArray( this, ignored ) < 0 ) \{\par
\tab\tab\tab\tab jQuery.cleanData( getAll( this ) );\par
\tab\tab\tab\tab if ( parent ) \{\par
\tab\tab\tab\tab\tab parent.replaceChild( elem, this );\par
\tab\tab\tab\tab\}\par
\tab\tab\tab\}\par
\par
\tab\tab // Force callback invocation\par
\tab\tab\}, ignored );\par
\tab\}\par
\} );\par
\par
jQuery.each( \{\par
\tab appendTo: "append",\par
\tab prependTo: "prepend",\par
\tab insertBefore: "before",\par
\tab insertAfter: "after",\par
\tab replaceAll: "replaceWith"\par
\}, function( name, original ) \{\par
\tab jQuery.fn[ name ] = function( selector ) \{\par
\tab\tab var elems,\par
\tab\tab\tab ret = [],\par
\tab\tab\tab insert = jQuery( selector ),\par
\tab\tab\tab last = insert.length - 1,\par
\tab\tab\tab i = 0;\par
\par
\tab\tab for ( ; i <= last; i++ ) \{\par
\tab\tab\tab elems = i === last ? this : this.clone( true );\par
\tab\tab\tab jQuery( insert[ i ] )[ original ]( elems );\par
\par
\tab\tab\tab // Support: Android <=4.0 only, PhantomJS 1 only\par
\tab\tab\tab // .get() because push.apply(_, arraylike) throws on ancient WebKit\par
\tab\tab\tab push.apply( ret, elems.get() );\par
\tab\tab\}\par
\par
\tab\tab return this.pushStack( ret );\par
\tab\};\par
\} );\par
var rnumnonpx = new RegExp( "^(" + pnum + ")(?!px)[a-z%]+$", "i" );\par
\par
var getStyles = function( elem ) \{\par
\par
\tab\tab // Support: IE <=11 only, Firefox <=30 (#15098, #14150)\par
\tab\tab // IE throws on elements created in popups\par
\tab\tab // FF meanwhile throws on frame elements through "defaultView.getComputedStyle"\par
\tab\tab var view = elem.ownerDocument.defaultView;\par
\par
\tab\tab if ( !view || !view.opener ) \{\par
\tab\tab\tab view = window;\par
\tab\tab\}\par
\par
\tab\tab return view.getComputedStyle( elem );\par
\tab\};\par
\par
var swap = function( elem, options, callback ) \{\par
\tab var ret, name,\par
\tab\tab old = \{\};\par
\par
\tab // Remember the old values, and insert the new ones\par
\tab for ( name in options ) \{\par
\tab\tab old[ name ] = elem.style[ name ];\par
\tab\tab elem.style[ name ] = options[ name ];\par
\tab\}\par
\par
\tab ret = callback.call( elem );\par
\par
\tab // Revert the old values\par
\tab for ( name in options ) \{\par
\tab\tab elem.style[ name ] = old[ name ];\par
\tab\}\par
\par
\tab return ret;\par
\};\par
\par
\par
var rboxStyle = new RegExp( cssExpand.join( "|" ), "i" );\par
\par
\par
\par
( function() \{\par
\par
\tab // Executing both pixelPosition & boxSizingReliable tests require only one layout\par
\tab // so they're executed at the same time to save the second computation.\par
\tab function computeStyleTests() \{\par
\par
\tab\tab // This is a singleton, we need to execute it only once\par
\tab\tab if ( !div ) \{\par
\tab\tab\tab return;\par
\tab\tab\}\par
\par
\tab\tab container.style.cssText = "position:absolute;left:-11111px;width:60px;" +\par
\tab\tab\tab "margin-top:1px;padding:0;border:0";\par
\tab\tab div.style.cssText =\par
\tab\tab\tab "position:relative;display:block;box-sizing:border-box;overflow:scroll;" +\par
\tab\tab\tab "margin:auto;border:1px;padding:1px;" +\par
\tab\tab\tab "width:60%;top:1%";\par
\tab\tab documentElement.appendChild( container ).appendChild( div );\par
\par
\tab\tab var divStyle = window.getComputedStyle( div );\par
\tab\tab pixelPositionVal = divStyle.top !== "1%";\par
\par
\tab\tab // Support: Android 4.0 - 4.3 only, Firefox <=3 - 44\par
\tab\tab reliableMarginLeftVal = roundPixelMeasures( divStyle.marginLeft ) === 12;\par
\par
\tab\tab // Support: Android 4.0 - 4.3 only, Safari <=9.1 - 10.1, iOS <=7.0 - 9.3\par
\tab\tab // Some styles come back with percentage values, even though they shouldn't\par
\tab\tab div.style.right = "60%";\par
\tab\tab pixelBoxStylesVal = roundPixelMeasures( divStyle.right ) === 36;\par
\par
\tab\tab // Support: IE 9 - 11 only\par
\tab\tab // Detect misreporting of content dimensions for box-sizing:border-box elements\par
\tab\tab boxSizingReliableVal = roundPixelMeasures( divStyle.width ) === 36;\par
\par
\tab\tab // Support: IE 9 only\par
\tab\tab // Detect overflow:scroll screwiness (gh-3699)\par
\tab\tab // Support: Chrome <=64\par
\tab\tab // Don't get tricked when zoom affects offsetWidth (gh-4029)\par
\tab\tab div.style.position = "absolute";\par
\tab\tab scrollboxSizeVal = roundPixelMeasures( div.offsetWidth / 3 ) === 12;\par
\par
\tab\tab documentElement.removeChild( container );\par
\par
\tab\tab // Nullify the div so it wouldn't be stored in the memory and\par
\tab\tab // it will also be a sign that checks already performed\par
\tab\tab div = null;\par
\tab\}\par
\par
\tab function roundPixelMeasures( measure ) \{\par
\tab\tab return Math.round( parseFloat( measure ) );\par
\tab\}\par
\par
\tab var pixelPositionVal, boxSizingReliableVal, scrollboxSizeVal, pixelBoxStylesVal,\par
\tab\tab reliableTrDimensionsVal, reliableMarginLeftVal,\par
\tab\tab container = document.createElement( "div" ),\par
\tab\tab div = document.createElement( "div" );\par
\par
\tab // Finish early in limited (non-browser) environments\par
\tab if ( !div.style ) \{\par
\tab\tab return;\par
\tab\}\par
\par
\tab // Support: IE <=9 - 11 only\par
\tab // Style of cloned element affects source element cloned (#8908)\par
\tab div.style.backgroundClip = "content-box";\par
\tab div.cloneNode( true ).style.backgroundClip = "";\par
\tab support.clearCloneStyle = div.style.backgroundClip === "content-box";\par
\par
\tab jQuery.extend( support, \{\par
\tab\tab boxSizingReliable: function() \{\par
\tab\tab\tab computeStyleTests();\par
\tab\tab\tab return boxSizingReliableVal;\par
\tab\tab\},\par
\tab\tab pixelBoxStyles: function() \{\par
\tab\tab\tab computeStyleTests();\par
\tab\tab\tab return pixelBoxStylesVal;\par
\tab\tab\},\par
\tab\tab pixelPosition: function() \{\par
\tab\tab\tab computeStyleTests();\par
\tab\tab\tab return pixelPositionVal;\par
\tab\tab\},\par
\tab\tab reliableMarginLeft: function() \{\par
\tab\tab\tab computeStyleTests();\par
\tab\tab\tab return reliableMarginLeftVal;\par
\tab\tab\},\par
\tab\tab scrollboxSize: function() \{\par
\tab\tab\tab computeStyleTests();\par
\tab\tab\tab return scrollboxSizeVal;\par
\tab\tab\},\par
\par
\tab\tab // Support: IE 9 - 11+, Edge 15 - 18+\par
\tab\tab // IE/Edge misreport `getComputedStyle` of table rows with width/height\par
\tab\tab // set in CSS while `offset*` properties report correct values.\par
\tab\tab // Behavior in IE 9 is more subtle than in newer versions & it passes\par
\tab\tab // some versions of this test; make sure not to make it pass there!\par
\tab\tab //\par
\tab\tab // Support: Firefox 70+\par
\tab\tab // Only Firefox includes border widths\par
\tab\tab // in computed dimensions. (gh-4529)\par
\tab\tab reliableTrDimensions: function() \{\par
\tab\tab\tab var table, tr, trChild, trStyle;\par
\tab\tab\tab if ( reliableTrDimensionsVal == null ) \{\par
\tab\tab\tab\tab table = document.createElement( "table" );\par
\tab\tab\tab\tab tr = document.createElement( "tr" );\par
\tab\tab\tab\tab trChild = document.createElement( "div" );\par
\par
\tab\tab\tab\tab table.style.cssText = "position:absolute;left:-11111px;border-collapse:separate";\par
\tab\tab\tab\tab tr.style.cssText = "border:1px solid";\par
\par
\tab\tab\tab\tab // Support: Chrome 86+\par
\tab\tab\tab\tab // Height set through cssText does not get applied.\par
\tab\tab\tab\tab // Computed height then comes back as 0.\par
\tab\tab\tab\tab tr.style.height = "1px";\par
\tab\tab\tab\tab trChild.style.height = "9px";\par
\par
\tab\tab\tab\tab // Support: Android 8 Chrome 86+\par
\tab\tab\tab\tab // In our bodyBackground.html iframe,\par
\tab\tab\tab\tab // display for all div elements is set to "inline",\par
\tab\tab\tab\tab // which causes a problem only in Android 8 Chrome 86.\par
\tab\tab\tab\tab // Ensuring the div is display: block\par
\tab\tab\tab\tab // gets around this issue.\par
\tab\tab\tab\tab trChild.style.display = "block";\par
\par
\tab\tab\tab\tab documentElement\par
\tab\tab\tab\tab\tab .appendChild( table )\par
\tab\tab\tab\tab\tab .appendChild( tr )\par
\tab\tab\tab\tab\tab .appendChild( trChild );\par
\par
\tab\tab\tab\tab trStyle = window.getComputedStyle( tr );\par
\tab\tab\tab\tab reliableTrDimensionsVal = ( parseInt( trStyle.height, 10 ) +\par
\tab\tab\tab\tab\tab parseInt( trStyle.borderTopWidth, 10 ) +\par
\tab\tab\tab\tab\tab parseInt( trStyle.borderBottomWidth, 10 ) ) === tr.offsetHeight;\par
\par
\tab\tab\tab\tab documentElement.removeChild( table );\par
\tab\tab\tab\}\par
\tab\tab\tab return reliableTrDimensionsVal;\par
\tab\tab\}\par
\tab\} );\par
\} )();\par
\par
\par
function curCSS( elem, name, computed ) \{\par
\tab var width, minWidth, maxWidth, ret,\par
\par
\tab\tab // Support: Firefox 51+\par
\tab\tab // Retrieving style before computed somehow\par
\tab\tab // fixes an issue with getting wrong values\par
\tab\tab // on detached elements\par
\tab\tab style = elem.style;\par
\par
\tab computed = computed || getStyles( elem );\par
\par
\tab // getPropertyValue is needed for:\par
\tab //   .css('filter') (IE 9 only, #12537)\par
\tab //   .css('--customProperty) (#3144)\par
\tab if ( computed ) \{\par
\tab\tab ret = computed.getPropertyValue( name ) || computed[ name ];\par
\par
\tab\tab if ( ret === "" && !isAttached( elem ) ) \{\par
\tab\tab\tab ret = jQuery.style( elem, name );\par
\tab\tab\}\par
\par
\tab\tab // A tribute to the "awesome hack by Dean Edwards"\par
\tab\tab // Android Browser returns percentage for some values,\par
\tab\tab // but width seems to be reliably pixels.\par
\tab\tab // This is against the CSSOM draft spec:\par
\tab\tab // {{\field{\*\fldinst{HYPERLINK https://drafts.csswg.org/cssom/#resolved-values }}{\fldrslt{https://drafts.csswg.org/cssom/#resolved-values\ul0\cf0}}}}\f0\fs22\par
\tab\tab if ( !support.pixelBoxStyles() && rnumnonpx.test( ret ) && rboxStyle.test( name ) ) \{\par
\par
\tab\tab\tab // Remember the original values\par
\tab\tab\tab width = style.width;\par
\tab\tab\tab minWidth = style.minWidth;\par
\tab\tab\tab maxWidth = style.maxWidth;\par
\par
\tab\tab\tab // Put in the new values to get a computed value out\par
\tab\tab\tab style.minWidth = style.maxWidth = style.width = ret;\par
\tab\tab\tab ret = computed.width;\par
\par
\tab\tab\tab // Revert the changed values\par
\tab\tab\tab style.width = width;\par
\tab\tab\tab style.minWidth = minWidth;\par
\tab\tab\tab style.maxWidth = maxWidth;\par
\tab\tab\}\par
\tab\}\par
\par
\tab return ret !== undefined ?\par
\par
\tab\tab // Support: IE <=9 - 11 only\par
\tab\tab // IE returns zIndex value as an integer.\par
\tab\tab ret + "" :\par
\tab\tab ret;\par
\}\par
\par
\par
function addGetHookIf( conditionFn, hookFn ) \{\par
\par
\tab // Define the hook, we'll check on the first run if it's really needed.\par
\tab return \{\par
\tab\tab get: function() \{\par
\tab\tab\tab if ( conditionFn() ) \{\par
\par
\tab\tab\tab\tab // Hook not needed (or it's not possible to use it due\par
\tab\tab\tab\tab // to missing dependency), remove it.\par
\tab\tab\tab\tab delete this.get;\par
\tab\tab\tab\tab return;\par
\tab\tab\tab\}\par
\par
\tab\tab\tab // Hook needed; redefine it so that the support test is not executed again.\par
\tab\tab\tab return ( this.get = hookFn ).apply( this, arguments );\par
\tab\tab\}\par
\tab\};\par
\}\par
\par
\par
var cssPrefixes = [ "Webkit", "Moz", "ms" ],\par
\tab emptyStyle = document.createElement( "div" ).style,\par
\tab vendorProps = \{\};\par
\par
// Return a vendor-prefixed property or undefined\par
function vendorPropName( name ) \{\par
\par
\tab // Check for vendor prefixed names\par
\tab var capName = name[ 0 ].toUpperCase() + name.slice( 1 ),\par
\tab\tab i = cssPrefixes.length;\par
\par
\tab while ( i-- ) \{\par
\tab\tab name = cssPrefixes[ i ] + capName;\par
\tab\tab if ( name in emptyStyle ) \{\par
\tab\tab\tab return name;\par
\tab\tab\}\par
\tab\}\par
\}\par
\par
// Return a potentially-mapped jQuery.cssProps or vendor prefixed property\par
function finalPropName( name ) \{\par
\tab var final = jQuery.cssProps[ name ] || vendorProps[ name ];\par
\par
\tab if ( final ) \{\par
\tab\tab return final;\par
\tab\}\par
\tab if ( name in emptyStyle ) \{\par
\tab\tab return name;\par
\tab\}\par
\tab return vendorProps[ name ] = vendorPropName( name ) || name;\par
\}\par
\par
\par
var\par
\par
\tab // Swappable if display is none or starts with table\par
\tab // except "table", "table-cell", or "table-caption"\par
\tab // See here for display values: {{\field{\*\fldinst{HYPERLINK https://developer.mozilla.org/en-US/docs/CSS/display }}{\fldrslt{https://developer.mozilla.org/en-US/docs/CSS/display\ul0\cf0}}}}\f0\fs22\par
\tab rdisplayswap = /^(none|table(?!-c[ea]).+)/,\par
\tab rcustomProp = /^--/,\par
\tab cssShow = \{ position: "absolute", visibility: "hidden", display: "block" \},\par
\tab cssNormalTransform = \{\par
\tab\tab letterSpacing: "0",\par
\tab\tab fontWeight: "400"\par
\tab\};\par
\par
function setPositiveNumber( _elem, value, subtract ) \{\par
\par
\tab // Any relative (+/-) values have already been\par
\tab // normalized at this point\par
\tab var matches = rcssNum.exec( value );\par
\tab return matches ?\par
\par
\tab\tab // Guard against undefined "subtract", e.g., when used as in cssHooks\par
\tab\tab Math.max( 0, matches[ 2 ] - ( subtract || 0 ) ) + ( matches[ 3 ] || "px" ) :\par
\tab\tab value;\par
\}\par
\par
function boxModelAdjustment( elem, dimension, box, isBorderBox, styles, computedVal ) \{\par
\tab var i = dimension === "width" ? 1 : 0,\par
\tab\tab extra = 0,\par
\tab\tab delta = 0;\par
\par
\tab // Adjustment may not be necessary\par
\tab if ( box === ( isBorderBox ? "border" : "content" ) ) \{\par
\tab\tab return 0;\par
\tab\}\par
\par
\tab for ( ; i < 4; i += 2 ) \{\par
\par
\tab\tab // Both box models exclude margin\par
\tab\tab if ( box === "margin" ) \{\par
\tab\tab\tab delta += jQuery.css( elem, box + cssExpand[ i ], true, styles );\par
\tab\tab\}\par
\par
\tab\tab // If we get here with a content-box, we're seeking "padding" or "border" or "margin"\par
\tab\tab if ( !isBorderBox ) \{\par
\par
\tab\tab\tab // Add padding\par
\tab\tab\tab delta += jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );\par
\par
\tab\tab\tab // For "border" or "margin", add border\par
\tab\tab\tab if ( box !== "padding" ) \{\par
\tab\tab\tab\tab delta += jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );\par
\par
\tab\tab\tab // But still keep track of it otherwise\par
\tab\tab\tab\} else \{\par
\tab\tab\tab\tab extra += jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );\par
\tab\tab\tab\}\par
\par
\tab\tab // If we get here with a border-box (content + padding + border), we're seeking "content" or\par
\tab\tab // "padding" or "margin"\par
\tab\tab\} else \{\par
\par
\tab\tab\tab // For "content", subtract padding\par
\tab\tab\tab if ( box === "content" ) \{\par
\tab\tab\tab\tab delta -= jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );\par
\tab\tab\tab\}\par
\par
\tab\tab\tab // For "content" or "padding", subtract border\par
\tab\tab\tab if ( box !== "margin" ) \{\par
\tab\tab\tab\tab delta -= jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );\par
\tab\tab\tab\}\par
\tab\tab\}\par
\tab\}\par
\par
\tab // Account for positive content-box scroll gutter when requested by providing computedVal\par
\tab if ( !isBorderBox && computedVal >= 0 ) \{\par
\par
\tab\tab // offsetWidth/offsetHeight is a rounded sum of content, padding, scroll gutter, and border\par
\tab\tab // Assuming integer scroll gutter, subtract the rest and round down\par
\tab\tab delta += Math.max( 0, Math.ceil(\par
\tab\tab\tab elem[ "offset" + dimension[ 0 ].toUpperCase() + dimension.slice( 1 ) ] -\par
\tab\tab\tab computedVal -\par
\tab\tab\tab delta -\par
\tab\tab\tab extra -\par
\tab\tab\tab 0.5\par
\par
\tab\tab // If offsetWidth/offsetHeight is unknown, then we can't determine content-box scroll gutter\par
\tab\tab // Use an explicit zero to avoid NaN (gh-3964)\par
\tab\tab ) ) || 0;\par
\tab\}\par
\par
\tab return delta;\par
\}\par
\par
function getWidthOrHeight( elem, dimension, extra ) \{\par
\par
\tab // Start with computed style\par
\tab var styles = getStyles( elem ),\par
\par
\tab\tab // To avoid forcing a reflow, only fetch boxSizing if we need it (gh-4322).\par
\tab\tab // Fake content-box until we know it's needed to know the true value.\par
\tab\tab boxSizingNeeded = !support.boxSizingReliable() || extra,\par
\tab\tab isBorderBox = boxSizingNeeded &&\par
\tab\tab\tab jQuery.css( elem, "boxSizing", false, styles ) === "border-box",\par
\tab\tab valueIsBorderBox = isBorderBox,\par
\par
\tab\tab val = curCSS( elem, dimension, styles ),\par
\tab\tab offsetProp = "offset" + dimension[ 0 ].toUpperCase() + dimension.slice( 1 );\par
\par
\tab // Support: Firefox <=54\par
\tab // Return a confounding non-pixel value or feign ignorance, as appropriate.\par
\tab if ( rnumnonpx.test( val ) ) \{\par
\tab\tab if ( !extra ) \{\par
\tab\tab\tab return val;\par
\tab\tab\}\par
\tab\tab val = "auto";\par
\tab\}\par
\par
\par
\tab // Support: IE 9 - 11 only\par
\tab // Use offsetWidth/offsetHeight for when box sizing is unreliable.\par
\tab // In those cases, the computed value can be trusted to be border-box.\par
\tab if ( ( !support.boxSizingReliable() && isBorderBox ||\par
\par
\tab\tab // Support: IE 10 - 11+, Edge 15 - 18+\par
\tab\tab // IE/Edge misreport `getComputedStyle` of table rows with width/height\par
\tab\tab // set in CSS while `offset*` properties report correct values.\par
\tab\tab // Interestingly, in some cases IE 9 doesn't suffer from this issue.\par
\tab\tab !support.reliableTrDimensions() && nodeName( elem, "tr" ) ||\par
\par
\tab\tab // Fall back to offsetWidth/offsetHeight when value is "auto"\par
\tab\tab // This happens for inline elements with no explicit setting (gh-3571)\par
\tab\tab val === "auto" ||\par
\par
\tab\tab // Support: Android <=4.1 - 4.3 only\par
\tab\tab // Also use offsetWidth/offsetHeight for misreported inline dimensions (gh-3602)\par
\tab\tab !parseFloat( val ) && jQuery.css( elem, "display", false, styles ) === "inline" ) &&\par
\par
\tab\tab // Make sure the element is visible & connected\par
\tab\tab elem.getClientRects().length ) \{\par
\par
\tab\tab isBorderBox = jQuery.css( elem, "boxSizing", false, styles ) === "border-box";\par
\par
\tab\tab // Where available, offsetWidth/offsetHeight approximate border box dimensions.\par
\tab\tab // Where not available (e.g., SVG), assume unreliable box-sizing and interpret the\par
\tab\tab // retrieved value as a content box dimension.\par
\tab\tab valueIsBorderBox = offsetProp in elem;\par
\tab\tab if ( valueIsBorderBox ) \{\par
\tab\tab\tab val = elem[ offsetProp ];\par
\tab\tab\}\par
\tab\}\par
\par
\tab // Normalize "" and auto\par
\tab val = parseFloat( val ) || 0;\par
\par
\tab // Adjust for the element's box model\par
\tab return ( val +\par
\tab\tab boxModelAdjustment(\par
\tab\tab\tab elem,\par
\tab\tab\tab dimension,\par
\tab\tab\tab extra || ( isBorderBox ? "border" : "content" ),\par
\tab\tab\tab valueIsBorderBox,\par
\tab\tab\tab styles,\par
\par
\tab\tab\tab // Provide the current computed size to request scroll gutter calculation (gh-3589)\par
\tab\tab\tab val\par
\tab\tab )\par
\tab ) + "px";\par
\}\par
\par
jQuery.extend( \{\par
\par
\tab // Add in style property hooks for overriding the default\par
\tab // behavior of getting and setting a style property\par
\tab cssHooks: \{\par
\tab\tab opacity: \{\par
\tab\tab\tab get: function( elem, computed ) \{\par
\tab\tab\tab\tab if ( computed ) \{\par
\par
\tab\tab\tab\tab\tab // We should always get a number back from opacity\par
\tab\tab\tab\tab\tab var ret = curCSS( elem, "opacity" );\par
\tab\tab\tab\tab\tab return ret === "" ? "1" : ret;\par
\tab\tab\tab\tab\}\par
\tab\tab\tab\}\par
\tab\tab\}\par
\tab\},\par
\par
\tab // Don't automatically add "px" to these possibly-unitless properties\par
\tab cssNumber: \{\par
\tab\tab "animationIterationCount": true,\par
\tab\tab "columnCount": true,\par
\tab\tab "fillOpacity": true,\par
\tab\tab "flexGrow": true,\par
\tab\tab "flexShrink": true,\par
\tab\tab "fontWeight": true,\par
\tab\tab "gridArea": true,\par
\tab\tab "gridColumn": true,\par
\tab\tab "gridColumnEnd": true,\par
\tab\tab "gridColumnStart": true,\par
\tab\tab "gridRow": true,\par
\tab\tab "gridRowEnd": true,\par
\tab\tab "gridRowStart": true,\par
\tab\tab "lineHeight": true,\par
\tab\tab "opacity": true,\par
\tab\tab "order": true,\par
\tab\tab "orphans": true,\par
\tab\tab "widows": true,\par
\tab\tab "zIndex": true,\par
\tab\tab "zoom": true\par
\tab\},\par
\par
\tab // Add in properties whose names you wish to fix before\par
\tab // setting or getting the value\par
\tab cssProps: \{\},\par
\par
\tab // Get and set the style property on a DOM Node\par
\tab style: function( elem, name, value, extra ) \{\par
\par
\tab\tab // Don't set styles on text and comment nodes\par
\tab\tab if ( !elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style ) \{\par
\tab\tab\tab return;\par
\tab\tab\}\par
\par
\tab\tab // Make sure that we're working with the right name\par
\tab\tab var ret, type, hooks,\par
\tab\tab\tab origName = camelCase( name ),\par
\tab\tab\tab isCustomProp = rcustomProp.test( name ),\par
\tab\tab\tab style = elem.style;\par
\par
\tab\tab // Make sure that we're working with the right name. We don't\par
\tab\tab // want to query the value if it is a CSS custom property\par
\tab\tab // since they are user-defined.\par
\tab\tab if ( !isCustomProp ) \{\par
\tab\tab\tab name = finalPropName( origName );\par
\tab\tab\}\par
\par
\tab\tab // Gets hook for the prefixed version, then unprefixed version\par
\tab\tab hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];\par
\par
\tab\tab // Check if we're setting a value\par
\tab\tab if ( value !== undefined ) \{\par
\tab\tab\tab type = typeof value;\par
\par
\tab\tab\tab // Convert "+=" or "-=" to relative numbers (#7345)\par
\tab\tab\tab if ( type === "string" && ( ret = rcssNum.exec( value ) ) && ret[ 1 ] ) \{\par
\tab\tab\tab\tab value = adjustCSS( elem, name, ret );\par
\par
\tab\tab\tab\tab // Fixes bug #9237\par
\tab\tab\tab\tab type = "number";\par
\tab\tab\tab\}\par
\par
\tab\tab\tab // Make sure that null and NaN values aren't set (#7116)\par
\tab\tab\tab if ( value == null || value !== value ) \{\par
\tab\tab\tab\tab return;\par
\tab\tab\tab\}\par
\par
\tab\tab\tab // If a number was passed in, add the unit (except for certain CSS properties)\par
\tab\tab\tab // The isCustomProp check can be removed in jQuery 4.0 when we only auto-append\par
\tab\tab\tab // "px" to a few hardcoded values.\par
\tab\tab\tab if ( type === "number" && !isCustomProp ) \{\par
\tab\tab\tab\tab value += ret && ret[ 3 ] || ( jQuery.cssNumber[ origName ] ? "" : "px" );\par
\tab\tab\tab\}\par
\par
\tab\tab\tab // background-* props affect original clone's values\par
\tab\tab\tab if ( !support.clearCloneStyle && value === "" && name.indexOf( "background" ) === 0 ) \{\par
\tab\tab\tab\tab style[ name ] = "inherit";\par
\tab\tab\tab\}\par
\par
\tab\tab\tab // If a hook was provided, use that value, otherwise just set the specified value\par
\tab\tab\tab if ( !hooks || !( "set" in hooks ) ||\par
\tab\tab\tab\tab ( value = hooks.set( elem, value, extra ) ) !== undefined ) \{\par
\par
\tab\tab\tab\tab if ( isCustomProp ) \{\par
\tab\tab\tab\tab\tab style.setProperty( name, value );\par
\tab\tab\tab\tab\} else \{\par
\tab\tab\tab\tab\tab style[ name ] = value;\par
\tab\tab\tab\tab\}\par
\tab\tab\tab\}\par
\par
\tab\tab\} else \{\par
\par
\tab\tab\tab // If a hook was provided get the non-computed value from there\par
\tab\tab\tab if ( hooks && "get" in hooks &&\par
\tab\tab\tab\tab ( ret = hooks.get( elem, false, extra ) ) !== undefined ) \{\par
\par
\tab\tab\tab\tab return ret;\par
\tab\tab\tab\}\par
\par
\tab\tab\tab // Otherwise just get the value from the style object\par
\tab\tab\tab return style[ name ];\par
\tab\tab\}\par
\tab\},\par
\par
\tab css: function( elem, name, extra, styles ) \{\par
\tab\tab var val, num, hooks,\par
\tab\tab\tab origName = camelCase( name ),\par
\tab\tab\tab isCustomProp = rcustomProp.test( name );\par
\par
\tab\tab // Make sure that we're working with the right name. We don't\par
\tab\tab // want to modify the value if it is a CSS custom property\par
\tab\tab // since they are user-defined.\par
\tab\tab if ( !isCustomProp ) \{\par
\tab\tab\tab name = finalPropName( origName );\par
\tab\tab\}\par
\par
\tab\tab // Try prefixed name followed by the unprefixed name\par
\tab\tab hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];\par
\par
\tab\tab // If a hook was provided get the computed value from there\par
\tab\tab if ( hooks && "get" in hooks ) \{\par
\tab\tab\tab val = hooks.get( elem, true, extra );\par
\tab\tab\}\par
\par
\tab\tab // Otherwise, if a way to get the computed value exists, use that\par
\tab\tab if ( val === undefined ) \{\par
\tab\tab\tab val = curCSS( elem, name, styles );\par
\tab\tab\}\par
\par
\tab\tab // Convert "normal" to computed value\par
\tab\tab if ( val === "normal" && name in cssNormalTransform ) \{\par
\tab\tab\tab val = cssNormalTransform[ name ];\par
\tab\tab\}\par
\par
\tab\tab // Make numeric if forced or a qualifier was provided and val looks numeric\par
\tab\tab if ( extra === "" || extra ) \{\par
\tab\tab\tab num = parseFloat( val );\par
\tab\tab\tab return extra === true || isFinite( num ) ? num || 0 : val;\par
\tab\tab\}\par
\par
\tab\tab return val;\par
\tab\}\par
\} );\par
\par
jQuery.each( [ "height", "width" ], function( _i, dimension ) \{\par
\tab jQuery.cssHooks[ dimension ] = \{\par
\tab\tab get: function( elem, computed, extra ) \{\par
\tab\tab\tab if ( computed ) \{\par
\par
\tab\tab\tab\tab // Certain elements can have dimension info if we invisibly show them\par
\tab\tab\tab\tab // but it must have a current display style that would benefit\par
\tab\tab\tab\tab return rdisplayswap.test( jQuery.css( elem, "display" ) ) &&\par
\par
\tab\tab\tab\tab\tab // Support: Safari 8+\par
\tab\tab\tab\tab\tab // Table columns in Safari have non-zero offsetWidth & zero\par
\tab\tab\tab\tab\tab // getBoundingClientRect().width unless display is changed.\par
\tab\tab\tab\tab\tab // Support: IE <=11 only\par
\tab\tab\tab\tab\tab // Running getBoundingClientRect on a disconnected node\par
\tab\tab\tab\tab\tab // in IE throws an error.\par
\tab\tab\tab\tab\tab ( !elem.getClientRects().length || !elem.getBoundingClientRect().width ) ?\par
\tab\tab\tab\tab\tab swap( elem, cssShow, function() \{\par
\tab\tab\tab\tab\tab\tab return getWidthOrHeight( elem, dimension, extra );\par
\tab\tab\tab\tab\tab\} ) :\par
\tab\tab\tab\tab\tab getWidthOrHeight( elem, dimension, extra );\par
\tab\tab\tab\}\par
\tab\tab\},\par
\par
\tab\tab set: function( elem, value, extra ) \{\par
\tab\tab\tab var matches,\par
\tab\tab\tab\tab styles = getStyles( elem ),\par
\par
\tab\tab\tab\tab // Only read styles.position if the test has a chance to fail\par
\tab\tab\tab\tab // to avoid forcing a reflow.\par
\tab\tab\tab\tab scrollboxSizeBuggy = !support.scrollboxSize() &&\par
\tab\tab\tab\tab\tab styles.position === "absolute",\par
\par
\tab\tab\tab\tab // To avoid forcing a reflow, only fetch boxSizing if we need it (gh-3991)\par
\tab\tab\tab\tab boxSizingNeeded = scrollboxSizeBuggy || extra,\par
\tab\tab\tab\tab isBorderBox = boxSizingNeeded &&\par
\tab\tab\tab\tab\tab jQuery.css( elem, "boxSizing", false, styles ) === "border-box",\par
\tab\tab\tab\tab subtract = extra ?\par
\tab\tab\tab\tab\tab boxModelAdjustment(\par
\tab\tab\tab\tab\tab\tab elem,\par
\tab\tab\tab\tab\tab\tab dimension,\par
\tab\tab\tab\tab\tab\tab extra,\par
\tab\tab\tab\tab\tab\tab isBorderBox,\par
\tab\tab\tab\tab\tab\tab styles\par
\tab\tab\tab\tab\tab ) :\par
\tab\tab\tab\tab\tab 0;\par
\par
\tab\tab\tab // Account for unreliable border-box dimensions by comparing offset* to computed and\par
\tab\tab\tab // faking a content-box to get border and padding (gh-3699)\par
\tab\tab\tab if ( isBorderBox && scrollboxSizeBuggy ) \{\par
\tab\tab\tab\tab subtract -= Math.ceil(\par
\tab\tab\tab\tab\tab elem[ "offset" + dimension[ 0 ].toUpperCase() + dimension.slice( 1 ) ] -\par
\tab\tab\tab\tab\tab parseFloat( styles[ dimension ] ) -\par
\tab\tab\tab\tab\tab boxModelAdjustment( elem, dimension, "border", false, styles ) -\par
\tab\tab\tab\tab\tab 0.5\par
\tab\tab\tab\tab );\par
\tab\tab\tab\}\par
\par
\tab\tab\tab // Convert to pixels if value adjustment is needed\par
\tab\tab\tab if ( subtract && ( matches = rcssNum.exec( value ) ) &&\par
\tab\tab\tab\tab ( matches[ 3 ] || "px" ) !== "px" ) \{\par
\par
\tab\tab\tab\tab elem.style[ dimension ] = value;\par
\tab\tab\tab\tab value = jQuery.css( elem, dimension );\par
\tab\tab\tab\}\par
\par
\tab\tab\tab return setPositiveNumber( elem, value, subtract );\par
\tab\tab\}\par
\tab\};\par
\} );\par
\par
jQuery.cssHooks.marginLeft = addGetHookIf( support.reliableMarginLeft,\par
\tab function( elem, computed ) \{\par
\tab\tab if ( computed ) \{\par
\tab\tab\tab return ( parseFloat( curCSS( elem, "marginLeft" ) ) ||\par
\tab\tab\tab\tab elem.getBoundingClientRect().left -\par
\tab\tab\tab\tab\tab swap( elem, \{ marginLeft: 0 \}, function() \{\par
\tab\tab\tab\tab\tab\tab return elem.getBoundingClientRect().left;\par
\tab\tab\tab\tab\tab\} )\par
\tab\tab\tab ) + "px";\par
\tab\tab\}\par
\tab\}\par
);\par
\par
// These hooks are used by animate to expand properties\par
jQuery.each( \{\par
\tab margin: "",\par
\tab padding: "",\par
\tab border: "Width"\par
\}, function( prefix, suffix ) \{\par
\tab jQuery.cssHooks[ prefix + suffix ] = \{\par
\tab\tab expand: function( value ) \{\par
\tab\tab\tab var i = 0,\par
\tab\tab\tab\tab expanded = \{\},\par
\par
\tab\tab\tab\tab // Assumes a single number if not a string\par
\tab\tab\tab\tab parts = typeof value === "string" ? value.split( " " ) : [ value ];\par
\par
\tab\tab\tab for ( ; i < 4; i++ ) \{\par
\tab\tab\tab\tab expanded[ prefix + cssExpand[ i ] + suffix ] =\par
\tab\tab\tab\tab\tab parts[ i ] || parts[ i - 2 ] || parts[ 0 ];\par
\tab\tab\tab\}\par
\par
\tab\tab\tab return expanded;\par
\tab\tab\}\par
\tab\};\par
\par
\tab if ( prefix !== "margin" ) \{\par
\tab\tab jQuery.cssHooks[ prefix + suffix ].set = setPositiveNumber;\par
\tab\}\par
\} );\par
\par
jQuery.fn.extend( \{\par
\tab css: function( name, value ) \{\par
\tab\tab return access( this, function( elem, name, value ) \{\par
\tab\tab\tab var styles, len,\par
\tab\tab\tab\tab map = \{\},\par
\tab\tab\tab\tab i = 0;\par
\par
\tab\tab\tab if ( Array.isArray( name ) ) \{\par
\tab\tab\tab\tab styles = getStyles( elem );\par
\tab\tab\tab\tab len = name.length;\par
\par
\tab\tab\tab\tab for ( ; i < len; i++ ) \{\par
\tab\tab\tab\tab\tab map[ name[ i ] ] = jQuery.css( elem, name[ i ], false, styles );\par
\tab\tab\tab\tab\}\par
\par
\tab\tab\tab\tab return map;\par
\tab\tab\tab\}\par
\par
\tab\tab\tab return value !== undefined ?\par
\tab\tab\tab\tab jQuery.style( elem, name, value ) :\par
\tab\tab\tab\tab jQuery.css( elem, name );\par
\tab\tab\}, name, value, arguments.length > 1 );\par
\tab\}\par
\} );\par
\par
\par
function Tween( elem, options, prop, end, easing ) \{\par
\tab return new Tween.prototype.init( elem, options, prop, end, easing );\par
\}\par
jQuery.Tween = Tween;\par
\par
Tween.prototype = \{\par
\tab constructor: Tween,\par
\tab init: function( elem, options, prop, end, easing, unit ) \{\par
\tab\tab this.elem = elem;\par
\tab\tab this.prop = prop;\par
\tab\tab this.easing = easing || jQuery.easing._default;\par
\tab\tab this.options = options;\par
\tab\tab this.start = this.now = this.cur();\par
\tab\tab this.end = end;\par
\tab\tab this.unit = unit || ( jQuery.cssNumber[ prop ] ? "" : "px" );\par
\tab\},\par
\tab cur: function() \{\par
\tab\tab var hooks = Tween.propHooks[ this.prop ];\par
\par
\tab\tab return hooks && hooks.get ?\par
\tab\tab\tab hooks.get( this ) :\par
\tab\tab\tab Tween.propHooks._default.get( this );\par
\tab\},\par
\tab run: function( percent ) \{\par
\tab\tab var eased,\par
\tab\tab\tab hooks = Tween.propHooks[ this.prop ];\par
\par
\tab\tab if ( this.options.duration ) \{\par
\tab\tab\tab this.pos = eased = jQuery.easing[ this.easing ](\par
\tab\tab\tab\tab percent, this.options.duration * percent, 0, 1, this.options.duration\par
\tab\tab\tab );\par
\tab\tab\} else \{\par
\tab\tab\tab this.pos = eased = percent;\par
\tab\tab\}\par
\tab\tab this.now = ( this.end - this.start ) * eased + this.start;\par
\par
\tab\tab if ( this.options.step ) \{\par
\tab\tab\tab this.options.step.call( this.elem, this.now, this );\par
\tab\tab\}\par
\par
\tab\tab if ( hooks && hooks.set ) \{\par
\tab\tab\tab hooks.set( this );\par
\tab\tab\} else \{\par
\tab\tab\tab Tween.propHooks._default.set( this );\par
\tab\tab\}\par
\tab\tab return this;\par
\tab\}\par
\};\par
\par
Tween.prototype.init.prototype = Tween.prototype;\par
\par
Tween.propHooks = \{\par
\tab _default: \{\par
\tab\tab get: function( tween ) \{\par
\tab\tab\tab var result;\par
\par
\tab\tab\tab // Use a property on the element directly when it is not a DOM element,\par
\tab\tab\tab // or when there is no matching style property that exists.\par
\tab\tab\tab if ( tween.elem.nodeType !== 1 ||\par
\tab\tab\tab\tab tween.elem[ tween.prop ] != null && tween.elem.style[ tween.prop ] == null ) \{\par
\tab\tab\tab\tab return tween.elem[ tween.prop ];\par
\tab\tab\tab\}\par
\par
\tab\tab\tab // Passing an empty string as a 3rd parameter to .css will automatically\par
\tab\tab\tab // attempt a parseFloat and fallback to a string if the parse fails.\par
\tab\tab\tab // Simple values such as "10px" are parsed to Float;\par
\tab\tab\tab // complex values such as "rotate(1rad)" are returned as-is.\par
\tab\tab\tab result = jQuery.css( tween.elem, tween.prop, "" );\par
\par
\tab\tab\tab // Empty strings, null, undefined and "auto" are converted to 0.\par
\tab\tab\tab return !result || result === "auto" ? 0 : result;\par
\tab\tab\},\par
\tab\tab set: function( tween ) \{\par
\par
\tab\tab\tab // Use step hook for back compat.\par
\tab\tab\tab // Use cssHook if its there.\par
\tab\tab\tab // Use .style if available and use plain properties where available.\par
\tab\tab\tab if ( jQuery.fx.step[ tween.prop ] ) \{\par
\tab\tab\tab\tab jQuery.fx.step[ tween.prop ]( tween );\par
\tab\tab\tab\} else if ( tween.elem.nodeType === 1 && (\par
\tab\tab\tab\tab jQuery.cssHooks[ tween.prop ] ||\par
\tab\tab\tab\tab\tab tween.elem.style[ finalPropName( tween.prop ) ] != null ) ) \{\par
\tab\tab\tab\tab jQuery.style( tween.elem, tween.prop, tween.now + tween.unit );\par
\tab\tab\tab\} else \{\par
\tab\tab\tab\tab tween.elem[ tween.prop ] = tween.now;\par
\tab\tab\tab\}\par
\tab\tab\}\par
\tab\}\par
\};\par
\par
// Support: IE <=9 only\par
// Panic based approach to setting things on disconnected nodes\par
Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = \{\par
\tab set: function( tween ) \{\par
\tab\tab if ( tween.elem.nodeType && tween.elem.parentNode ) \{\par
\tab\tab\tab tween.elem[ tween.prop ] = tween.now;\par
\tab\tab\}\par
\tab\}\par
\};\par
\par
jQuery.easing = \{\par
\tab linear: function( p ) \{\par
\tab\tab return p;\par
\tab\},\par
\tab swing: function( p ) \{\par
\tab\tab return 0.5 - Math.cos( p * Math.PI ) / 2;\par
\tab\},\par
\tab _default: "swing"\par
\};\par
\par
jQuery.fx = Tween.prototype.init;\par
\par
// Back compat <1.8 extension point\par
jQuery.fx.step = \{\};\par
\par
\par
\par
\par
var\par
\tab fxNow, inProgress,\par
\tab rfxtypes = /^(?:toggle|show|hide)$/,\par
\tab rrun = /queueHooks$/;\par
\par
function schedule() \{\par
\tab if ( inProgress ) \{\par
\tab\tab if ( document.hidden === false && window.requestAnimationFrame ) \{\par
\tab\tab\tab window.requestAnimationFrame( schedule );\par
\tab\tab\} else \{\par
\tab\tab\tab window.setTimeout( schedule, jQuery.fx.interval );\par
\tab\tab\}\par
\par
\tab\tab jQuery.fx.tick();\par
\tab\}\par
\}\par
\par
// Animations created synchronously will run synchronously\par
function createFxNow() \{\par
\tab window.setTimeout( function() \{\par
\tab\tab fxNow = undefined;\par
\tab\} );\par
\tab return ( fxNow = Date.now() );\par
\}\par
\par
// Generate parameters to create a standard animation\par
function genFx( type, includeWidth ) \{\par
\tab var which,\par
\tab\tab i = 0,\par
\tab\tab attrs = \{ height: type \};\par
\par
\tab // If we include width, step value is 1 to do all cssExpand values,\par
\tab // otherwise step value is 2 to skip over Left and Right\par
\tab includeWidth = includeWidth ? 1 : 0;\par
\tab for ( ; i < 4; i += 2 - includeWidth ) \{\par
\tab\tab which = cssExpand[ i ];\par
\tab\tab attrs[ "margin" + which ] = attrs[ "padding" + which ] = type;\par
\tab\}\par
\par
\tab if ( includeWidth ) \{\par
\tab\tab attrs.opacity = attrs.width = type;\par
\tab\}\par
\par
\tab return attrs;\par
\}\par
\par
function createTween( value, prop, animation ) \{\par
\tab var tween,\par
\tab\tab collection = ( Animation.tweeners[ prop ] || [] ).concat( Animation.tweeners[ "*" ] ),\par
\tab\tab index = 0,\par
\tab\tab length = collection.length;\par
\tab for ( ; index < length; index++ ) \{\par
\tab\tab if ( ( tween = collection[ index ].call( animation, prop, value ) ) ) \{\par
\par
\tab\tab\tab // We're done with this property\par
\tab\tab\tab return tween;\par
\tab\tab\}\par
\tab\}\par
\}\par
\par
function defaultPrefilter( elem, props, opts ) \{\par
\tab var prop, value, toggle, hooks, oldfire, propTween, restoreDisplay, display,\par
\tab\tab isBox = "width" in props || "height" in props,\par
\tab\tab anim = this,\par
\tab\tab orig = \{\},\par
\tab\tab style = elem.style,\par
\tab\tab hidden = elem.nodeType && isHiddenWithinTree( elem ),\par
\tab\tab dataShow = dataPriv.get( elem, "fxshow" );\par
\par
\tab // Queue-skipping animations hijack the fx hooks\par
\tab if ( !opts.queue ) \{\par
\tab\tab hooks = jQuery._queueHooks( elem, "fx" );\par
\tab\tab if ( hooks.unqueued == null ) \{\par
\tab\tab\tab hooks.unqueued = 0;\par
\tab\tab\tab oldfire = hooks.empty.fire;\par
\tab\tab\tab hooks.empty.fire = function() \{\par
\tab\tab\tab\tab if ( !hooks.unqueued ) \{\par
\tab\tab\tab\tab\tab oldfire();\par
\tab\tab\tab\tab\}\par
\tab\tab\tab\};\par
\tab\tab\}\par
\tab\tab hooks.unqueued++;\par
\par
\tab\tab anim.always( function() \{\par
\par
\tab\tab\tab // Ensure the complete handler is called before this completes\par
\tab\tab\tab anim.always( function() \{\par
\tab\tab\tab\tab hooks.unqueued--;\par
\tab\tab\tab\tab if ( !jQuery.queue( elem, "fx" ).length ) \{\par
\tab\tab\tab\tab\tab hooks.empty.fire();\par
\tab\tab\tab\tab\}\par
\tab\tab\tab\} );\par
\tab\tab\} );\par
\tab\}\par
\par
\tab // Detect show/hide animations\par
\tab for ( prop in props ) \{\par
\tab\tab value = props[ prop ];\par
\tab\tab if ( rfxtypes.test( value ) ) \{\par
\tab\tab\tab delete props[ prop ];\par
\tab\tab\tab toggle = toggle || value === "toggle";\par
\tab\tab\tab if ( value === ( hidden ? "hide" : "show" ) ) \{\par
\par
\tab\tab\tab\tab // Pretend to be hidden if this is a "show" and\par
\tab\tab\tab\tab // there is still data from a stopped show/hide\par
\tab\tab\tab\tab if ( value === "show" && dataShow && dataShow[ prop ] !== undefined ) \{\par
\tab\tab\tab\tab\tab hidden = true;\par
\par
\tab\tab\tab\tab // Ignore all other no-op show/hide data\par
\tab\tab\tab\tab\} else \{\par
\tab\tab\tab\tab\tab continue;\par
\tab\tab\tab\tab\}\par
\tab\tab\tab\}\par
\tab\tab\tab orig[ prop ] = dataShow && dataShow[ prop ] || jQuery.style( elem, prop );\par
\tab\tab\}\par
\tab\}\par
\par
\tab // Bail out if this is a no-op like .hide().hide()\par
\tab propTween = !jQuery.isEmptyObject( props );\par
\tab if ( !propTween && jQuery.isEmptyObject( orig ) ) \{\par
\tab\tab return;\par
\tab\}\par
\par
\tab // Restrict "overflow" and "display" styles during box animations\par
\tab if ( isBox && elem.nodeType === 1 ) \{\par
\par
\tab\tab // Support: IE <=9 - 11, Edge 12 - 15\par
\tab\tab // Record all 3 overflow attributes because IE does not infer the shorthand\par
\tab\tab // from identically-valued overflowX and overflowY and Edge just mirrors\par
\tab\tab // the overflowX value there.\par
\tab\tab opts.overflow = [ style.overflow, style.overflowX, style.overflowY ];\par
\par
\tab\tab // Identify a display type, preferring old show/hide data over the CSS cascade\par
\tab\tab restoreDisplay = dataShow && dataShow.display;\par
\tab\tab if ( restoreDisplay == null ) \{\par
\tab\tab\tab restoreDisplay = dataPriv.get( elem, "display" );\par
\tab\tab\}\par
\tab\tab display = jQuery.css( elem, "display" );\par
\tab\tab if ( display === "none" ) \{\par
\tab\tab\tab if ( restoreDisplay ) \{\par
\tab\tab\tab\tab display = restoreDisplay;\par
\tab\tab\tab\} else \{\par
\par
\tab\tab\tab\tab // Get nonempty value(s) by temporarily forcing visibility\par
\tab\tab\tab\tab showHide( [ elem ], true );\par
\tab\tab\tab\tab restoreDisplay = elem.style.display || restoreDisplay;\par
\tab\tab\tab\tab display = jQuery.css( elem, "display" );\par
\tab\tab\tab\tab showHide( [ elem ] );\par
\tab\tab\tab\}\par
\tab\tab\}\par
\par
\tab\tab // Animate inline elements as inline-block\par
\tab\tab if ( display === "inline" || display === "inline-block" && restoreDisplay != null ) \{\par
\tab\tab\tab if ( jQuery.css( elem, "float" ) === "none" ) \{\par
\par
\tab\tab\tab\tab // Restore the original display value at the end of pure show/hide animations\par
\tab\tab\tab\tab if ( !propTween ) \{\par
\tab\tab\tab\tab\tab anim.done( function() \{\par
\tab\tab\tab\tab\tab\tab style.display = restoreDisplay;\par
\tab\tab\tab\tab\tab\} );\par
\tab\tab\tab\tab\tab if ( restoreDisplay == null ) \{\par
\tab\tab\tab\tab\tab\tab display = style.display;\par
\tab\tab\tab\tab\tab\tab restoreDisplay = display === "none" ? "" : display;\par
\tab\tab\tab\tab\tab\}\par
\tab\tab\tab\tab\}\par
\tab\tab\tab\tab style.display = "inline-block";\par
\tab\tab\tab\}\par
\tab\tab\}\par
\tab\}\par
\par
\tab if ( opts.overflow ) \{\par
\tab\tab style.overflow = "hidden";\par
\tab\tab anim.always( function() \{\par
\tab\tab\tab style.overflow = opts.overflow[ 0 ];\par
\tab\tab\tab style.overflowX = opts.overflow[ 1 ];\par
\tab\tab\tab style.overflowY = opts.overflow[ 2 ];\par
\tab\tab\} );\par
\tab\}\par
\par
\tab // Implement show/hide animations\par
\tab propTween = false;\par
\tab for ( prop in orig ) \{\par
\par
\tab\tab // General show/hide setup for this element animation\par
\tab\tab if ( !propTween ) \{\par
\tab\tab\tab if ( dataShow ) \{\par
\tab\tab\tab\tab if ( "hidden" in dataShow ) \{\par
\tab\tab\tab\tab\tab hidden = dataShow.hidden;\par
\tab\tab\tab\tab\}\par
\tab\tab\tab\} else \{\par
\tab\tab\tab\tab dataShow = dataPriv.access( elem, "fxshow", \{ display: restoreDisplay \} );\par
\tab\tab\tab\}\par
\par
\tab\tab\tab // Store hidden/visible for toggle so `.stop().toggle()` "reverses"\par
\tab\tab\tab if ( toggle ) \{\par
\tab\tab\tab\tab dataShow.hidden = !hidden;\par
\tab\tab\tab\}\par
\par
\tab\tab\tab // Show elements before animating them\par
\tab\tab\tab if ( hidden ) \{\par
\tab\tab\tab\tab showHide( [ elem ], true );\par
\tab\tab\tab\}\par
\par
\tab\tab\tab /* eslint-disable no-loop-func */\par
\par
\tab\tab\tab anim.done( function() \{\par
\par
\tab\tab\tab\tab /* eslint-enable no-loop-func */\par
\par
\tab\tab\tab\tab // The final step of a "hide" animation is actually hiding the element\par
\tab\tab\tab\tab if ( !hidden ) \{\par
\tab\tab\tab\tab\tab showHide( [ elem ] );\par
\tab\tab\tab\tab\}\par
\tab\tab\tab\tab dataPriv.remove( elem, "fxshow" );\par
\tab\tab\tab\tab for ( prop in orig ) \{\par
\tab\tab\tab\tab\tab jQuery.style( elem, prop, orig[ prop ] );\par
\tab\tab\tab\tab\}\par
\tab\tab\tab\} );\par
\tab\tab\}\par
\par
\tab\tab // Per-property setup\par
\tab\tab propTween = createTween( hidden ? dataShow[ prop ] : 0, prop, anim );\par
\tab\tab if ( !( prop in dataShow ) ) \{\par
\tab\tab\tab dataShow[ prop ] = propTween.start;\par
\tab\tab\tab if ( hidden ) \{\par
\tab\tab\tab\tab propTween.end = propTween.start;\par
\tab\tab\tab\tab propTween.start = 0;\par
\tab\tab\tab\}\par
\tab\tab\}\par
\tab\}\par
\}\par
\par
function propFilter( props, specialEasing ) \{\par
\tab var index, name, easing, value, hooks;\par
\par
\tab // camelCase, specialEasing and expand cssHook pass\par
\tab for ( index in props ) \{\par
\tab\tab name = camelCase( index );\par
\tab\tab easing = specialEasing[ name ];\par
\tab\tab value = props[ index ];\par
\tab\tab if ( Array.isArray( value ) ) \{\par
\tab\tab\tab easing = value[ 1 ];\par
\tab\tab\tab value = props[ index ] = value[ 0 ];\par
\tab\tab\}\par
\par
\tab\tab if ( index !== name ) \{\par
\tab\tab\tab props[ name ] = value;\par
\tab\tab\tab delete props[ index ];\par
\tab\tab\}\par
\par
\tab\tab hooks = jQuery.cssHooks[ name ];\par
\tab\tab if ( hooks && "expand" in hooks ) \{\par
\tab\tab\tab value = hooks.expand( value );\par
\tab\tab\tab delete props[ name ];\par
\par
\tab\tab\tab // Not quite $.extend, this won't overwrite existing keys.\par
\tab\tab\tab // Reusing 'index' because we have the correct "name"\par
\tab\tab\tab for ( index in value ) \{\par
\tab\tab\tab\tab if ( !( index in props ) ) \{\par
\tab\tab\tab\tab\tab props[ index ] = value[ index ];\par
\tab\tab\tab\tab\tab specialEasing[ index ] = easing;\par
\tab\tab\tab\tab\}\par
\tab\tab\tab\}\par
\tab\tab\} else \{\par
\tab\tab\tab specialEasing[ name ] = easing;\par
\tab\tab\}\par
\tab\}\par
\}\par
\par
function Animation( elem, properties, options ) \{\par
\tab var result,\par
\tab\tab stopped,\par
\tab\tab index = 0,\par
\tab\tab length = Animation.prefilters.length,\par
\tab\tab deferred = jQuery.Deferred().always( function() \{\par
\par
\tab\tab\tab // Don't match elem in the :animated selector\par
\tab\tab\tab delete tick.elem;\par
\tab\tab\} ),\par
\tab\tab tick = function() \{\par
\tab\tab\tab if ( stopped ) \{\par
\tab\tab\tab\tab return false;\par
\tab\tab\tab\}\par
\tab\tab\tab var currentTime = fxNow || createFxNow(),\par
\tab\tab\tab\tab remaining = Math.max( 0, animation.startTime + animation.duration - currentTime ),\par
\par
\tab\tab\tab\tab // Support: Android 2.3 only\par
\tab\tab\tab\tab // Archaic crash bug won't allow us to use `1 - ( 0.5 || 0 )` (#12497)\par
\tab\tab\tab\tab temp = remaining / animation.duration || 0,\par
\tab\tab\tab\tab percent = 1 - temp,\par
\tab\tab\tab\tab index = 0,\par
\tab\tab\tab\tab length = animation.tweens.length;\par
\par
\tab\tab\tab for ( ; index < length; index++ ) \{\par
\tab\tab\tab\tab animation.tweens[ index ].run( percent );\par
\tab\tab\tab\}\par
\par
\tab\tab\tab deferred.notifyWith( elem, [ animation, percent, remaining ] );\par
\par
\tab\tab\tab // If there's more to do, yield\par
\tab\tab\tab if ( percent < 1 && length ) \{\par
\tab\tab\tab\tab return remaining;\par
\tab\tab\tab\}\par
\par
\tab\tab\tab // If this was an empty animation, synthesize a final progress notification\par
\tab\tab\tab if ( !length ) \{\par
\tab\tab\tab\tab deferred.notifyWith( elem, [ animation, 1, 0 ] );\par
\tab\tab\tab\}\par
\par
\tab\tab\tab // Resolve the animation and report its conclusion\par
\tab\tab\tab deferred.resolveWith( elem, [ animation ] );\par
\tab\tab\tab return false;\par
\tab\tab\},\par
\tab\tab animation = deferred.promise( \{\par
\tab\tab\tab elem: elem,\par
\tab\tab\tab props: jQuery.extend( \{\}, properties ),\par
\tab\tab\tab opts: jQuery.extend( true, \{\par
\tab\tab\tab\tab specialEasing: \{\},\par
\tab\tab\tab\tab easing: jQuery.easing._default\par
\tab\tab\tab\}, options ),\par
\tab\tab\tab originalProperties: properties,\par
\tab\tab\tab originalOptions: options,\par
\tab\tab\tab startTime: fxNow || createFxNow(),\par
\tab\tab\tab duration: options.duration,\par
\tab\tab\tab tweens: [],\par
\tab\tab\tab createTween: function( prop, end ) \{\par
\tab\tab\tab\tab var tween = jQuery.Tween( elem, animation.opts, prop, end,\par
\tab\tab\tab\tab\tab animation.opts.specialEasing[ prop ] || animation.opts.easing );\par
\tab\tab\tab\tab animation.tweens.push( tween );\par
\tab\tab\tab\tab return tween;\par
\tab\tab\tab\},\par
\tab\tab\tab stop: function( gotoEnd ) \{\par
\tab\tab\tab\tab var index = 0,\par
\par
\tab\tab\tab\tab\tab // If we are going to the end, we want to run all the tweens\par
\tab\tab\tab\tab\tab // otherwise we skip this part\par
\tab\tab\tab\tab\tab length = gotoEnd ? animation.tweens.length : 0;\par
\tab\tab\tab\tab if ( stopped ) \{\par
\tab\tab\tab\tab\tab return this;\par
\tab\tab\tab\tab\}\par
\tab\tab\tab\tab stopped = true;\par
\tab\tab\tab\tab for ( ; index < length; index++ ) \{\par
\tab\tab\tab\tab\tab animation.tweens[ index ].run( 1 );\par
\tab\tab\tab\tab\}\par
\par
\tab\tab\tab\tab // Resolve when we played the last frame; otherwise, reject\par
\tab\tab\tab\tab if ( gotoEnd ) \{\par
\tab\tab\tab\tab\tab deferred.notifyWith( elem, [ animation, 1, 0 ] );\par
\tab\tab\tab\tab\tab deferred.resolveWith( elem, [ animation, gotoEnd ] );\par
\tab\tab\tab\tab\} else \{\par
\tab\tab\tab\tab\tab deferred.rejectWith( elem, [ animation, gotoEnd ] );\par
\tab\tab\tab\tab\}\par
\tab\tab\tab\tab return this;\par
\tab\tab\tab\}\par
\tab\tab\} ),\par
\tab\tab props = animation.props;\par
\par
\tab propFilter( props, animation.opts.specialEasing );\par
\par
\tab for ( ; index < length; index++ ) \{\par
\tab\tab result = Animation.prefilters[ index ].call( animation, elem, props, animation.opts );\par
\tab\tab if ( result ) \{\par
\tab\tab\tab if ( isFunction( result.stop ) ) \{\par
\tab\tab\tab\tab jQuery._queueHooks( animation.elem, animation.opts.queue ).stop =\par
\tab\tab\tab\tab\tab result.stop.bind( result );\par
\tab\tab\tab\}\par
\tab\tab\tab return result;\par
\tab\tab\}\par
\tab\}\par
\par
\tab jQuery.map( props, createTween, animation );\par
\par
\tab if ( isFunction( animation.opts.start ) ) \{\par
\tab\tab animation.opts.start.call( elem, animation );\par
\tab\}\par
\par
\tab // Attach callbacks from options\par
\tab animation\par
\tab\tab .progress( animation.opts.progress )\par
\tab\tab .done( animation.opts.done, animation.opts.complete )\par
\tab\tab .fail( animation.opts.fail )\par
\tab\tab .always( animation.opts.always );\par
\par
\tab jQuery.fx.timer(\par
\tab\tab jQuery.extend( tick, \{\par
\tab\tab\tab elem: elem,\par
\tab\tab\tab anim: animation,\par
\tab\tab\tab queue: animation.opts.queue\par
\tab\tab\} )\par
\tab );\par
\par
\tab return animation;\par
\}\par
\par
jQuery.Animation = jQuery.extend( Animation, \{\par
\par
\tab tweeners: \{\par
\tab\tab "*": [ function( prop, value ) \{\par
\tab\tab\tab var tween = this.createTween( prop, value );\par
\tab\tab\tab adjustCSS( tween.elem, prop, rcssNum.exec( value ), tween );\par
\tab\tab\tab return tween;\par
\tab\tab\} ]\par
\tab\},\par
\par
\tab tweener: function( props, callback ) \{\par
\tab\tab if ( isFunction( props ) ) \{\par
\tab\tab\tab callback = props;\par
\tab\tab\tab props = [ "*" ];\par
\tab\tab\} else \{\par
\tab\tab\tab props = props.match( rnothtmlwhite );\par
\tab\tab\}\par
\par
\tab\tab var prop,\par
\tab\tab\tab index = 0,\par
\tab\tab\tab length = props.length;\par
\par
\tab\tab for ( ; index < length; index++ ) \{\par
\tab\tab\tab prop = props[ index ];\par
\tab\tab\tab Animation.tweeners[ prop ] = Animation.tweeners[ prop ] || [];\par
\tab\tab\tab Animation.tweeners[ prop ].unshift( callback );\par
\tab\tab\}\par
\tab\},\par
\par
\tab prefilters: [ defaultPrefilter ],\par
\par
\tab prefilter: function( callback, prepend ) \{\par
\tab\tab if ( prepend ) \{\par
\tab\tab\tab Animation.prefilters.unshift( callback );\par
\tab\tab\} else \{\par
\tab\tab\tab Animation.prefilters.push( callback );\par
\tab\tab\}\par
\tab\}\par
\} );\par
\par
jQuery.speed = function( speed, easing, fn ) \{\par
\tab var opt = speed && typeof speed === "object" ? jQuery.extend( \{\}, speed ) : \{\par
\tab\tab complete: fn || !fn && easing ||\par
\tab\tab\tab isFunction( speed ) && speed,\par
\tab\tab duration: speed,\par
\tab\tab easing: fn && easing || easing && !isFunction( easing ) && easing\par
\tab\};\par
\par
\tab // Go to the end state if fx are off\par
\tab if ( jQuery.fx.off ) \{\par
\tab\tab opt.duration = 0;\par
\par
\tab\} else \{\par
\tab\tab if ( typeof opt.duration !== "number" ) \{\par
\tab\tab\tab if ( opt.duration in jQuery.fx.speeds ) \{\par
\tab\tab\tab\tab opt.duration = jQuery.fx.speeds[ opt.duration ];\par
\par
\tab\tab\tab\} else \{\par
\tab\tab\tab\tab opt.duration = jQuery.fx.speeds._default;\par
\tab\tab\tab\}\par
\tab\tab\}\par
\tab\}\par
\par
\tab // Normalize opt.queue - true/undefined/null -> "fx"\par
\tab if ( opt.queue == null || opt.queue === true ) \{\par
\tab\tab opt.queue = "fx";\par
\tab\}\par
\par
\tab // Queueing\par
\tab opt.old = opt.complete;\par
\par
\tab opt.complete = function() \{\par
\tab\tab if ( isFunction( opt.old ) ) \{\par
\tab\tab\tab opt.old.call( this );\par
\tab\tab\}\par
\par
\tab\tab if ( opt.queue ) \{\par
\tab\tab\tab jQuery.dequeue( this, opt.queue );\par
\tab\tab\}\par
\tab\};\par
\par
\tab return opt;\par
\};\par
\par
jQuery.fn.extend( \{\par
\tab fadeTo: function( speed, to, easing, callback ) \{\par
\par
\tab\tab // Show any hidden elements after setting opacity to 0\par
\tab\tab return this.filter( isHiddenWithinTree ).css( "opacity", 0 ).show()\par
\par
\tab\tab\tab // Animate to the value specified\par
\tab\tab\tab .end().animate( \{ opacity: to \}, speed, easing, callback );\par
\tab\},\par
\tab animate: function( prop, speed, easing, callback ) \{\par
\tab\tab var empty = jQuery.isEmptyObject( prop ),\par
\tab\tab\tab optall = jQuery.speed( speed, easing, callback ),\par
\tab\tab\tab doAnimation = function() \{\par
\par
\tab\tab\tab\tab // Operate on a copy of prop so per-property easing won't be lost\par
\tab\tab\tab\tab var anim = Animation( this, jQuery.extend( \{\}, prop ), optall );\par
\par
\tab\tab\tab\tab // Empty animations, or finishing resolves immediately\par
\tab\tab\tab\tab if ( empty || dataPriv.get( this, "finish" ) ) \{\par
\tab\tab\tab\tab\tab anim.stop( true );\par
\tab\tab\tab\tab\}\par
\tab\tab\tab\};\par
\par
\tab\tab doAnimation.finish = doAnimation;\par
\par
\tab\tab return empty || optall.queue === false ?\par
\tab\tab\tab this.each( doAnimation ) :\par
\tab\tab\tab this.queue( optall.queue, doAnimation );\par
\tab\},\par
\tab stop: function( type, clearQueue, gotoEnd ) \{\par
\tab\tab var stopQueue = function( hooks ) \{\par
\tab\tab\tab var stop = hooks.stop;\par
\tab\tab\tab delete hooks.stop;\par
\tab\tab\tab stop( gotoEnd );\par
\tab\tab\};\par
\par
\tab\tab if ( typeof type !== "string" ) \{\par
\tab\tab\tab gotoEnd = clearQueue;\par
\tab\tab\tab clearQueue = type;\par
\tab\tab\tab type = undefined;\par
\tab\tab\}\par
\tab\tab if ( clearQueue ) \{\par
\tab\tab\tab this.queue( type || "fx", [] );\par
\tab\tab\}\par
\par
\tab\tab return this.each( function() \{\par
\tab\tab\tab var dequeue = true,\par
\tab\tab\tab\tab index = type != null && type + "queueHooks",\par
\tab\tab\tab\tab timers = jQuery.timers,\par
\tab\tab\tab\tab data = dataPriv.get( this );\par
\par
\tab\tab\tab if ( index ) \{\par
\tab\tab\tab\tab if ( data[ index ] && data[ index ].stop ) \{\par
\tab\tab\tab\tab\tab stopQueue( data[ index ] );\par
\tab\tab\tab\tab\}\par
\tab\tab\tab\} else \{\par
\tab\tab\tab\tab for ( index in data ) \{\par
\tab\tab\tab\tab\tab if ( data[ index ] && data[ index ].stop && rrun.test( index ) ) \{\par
\tab\tab\tab\tab\tab\tab stopQueue( data[ index ] );\par
\tab\tab\tab\tab\tab\}\par
\tab\tab\tab\tab\}\par
\tab\tab\tab\}\par
\par
\tab\tab\tab for ( index = timers.length; index--; ) \{\par
\tab\tab\tab\tab if ( timers[ index ].elem === this &&\par
\tab\tab\tab\tab\tab ( type == null || timers[ index ].queue === type ) ) \{\par
\par
\tab\tab\tab\tab\tab timers[ index ].anim.stop( gotoEnd );\par
\tab\tab\tab\tab\tab dequeue = false;\par
\tab\tab\tab\tab\tab timers.splice( index, 1 );\par
\tab\tab\tab\tab\}\par
\tab\tab\tab\}\par
\par
\tab\tab\tab // Start the next in the queue if the last step wasn't forced.\par
\tab\tab\tab // Timers currently will call their complete callbacks, which\par
\tab\tab\tab // will dequeue but only if they were gotoEnd.\par
\tab\tab\tab if ( dequeue || !gotoEnd ) \{\par
\tab\tab\tab\tab jQuery.dequeue( this, type );\par
\tab\tab\tab\}\par
\tab\tab\} );\par
\tab\},\par
\tab finish: function( type ) \{\par
\tab\tab if ( type !== false ) \{\par
\tab\tab\tab type = type || "fx";\par
\tab\tab\}\par
\tab\tab return this.each( function() \{\par
\tab\tab\tab var index,\par
\tab\tab\tab\tab data = dataPriv.get( this ),\par
\tab\tab\tab\tab queue = data[ type + "queue" ],\par
\tab\tab\tab\tab hooks = data[ type + "queueHooks" ],\par
\tab\tab\tab\tab timers = jQuery.timers,\par
\tab\tab\tab\tab length = queue ? queue.length : 0;\par
\par
\tab\tab\tab // Enable finishing flag on private data\par
\tab\tab\tab data.finish = true;\par
\par
\tab\tab\tab // Empty the queue first\par
\tab\tab\tab jQuery.queue( this, type, [] );\par
\par
\tab\tab\tab if ( hooks && hooks.stop ) \{\par
\tab\tab\tab\tab hooks.stop.call( this, true );\par
\tab\tab\tab\}\par
\par
\tab\tab\tab // Look for any active animations, and finish them\par
\tab\tab\tab for ( index = timers.length; index--; ) \{\par
\tab\tab\tab\tab if ( timers[ index ].elem === this && timers[ index ].queue === type ) \{\par
\tab\tab\tab\tab\tab timers[ index ].anim.stop( true );\par
\tab\tab\tab\tab\tab timers.splice( index, 1 );\par
\tab\tab\tab\tab\}\par
\tab\tab\tab\}\par
\par
\tab\tab\tab // Look for any animations in the old queue and finish them\par
\tab\tab\tab for ( index = 0; index < length; index++ ) \{\par
\tab\tab\tab\tab if ( queue[ index ] && queue[ index ].finish ) \{\par
\tab\tab\tab\tab\tab queue[ index ].finish.call( this );\par
\tab\tab\tab\tab\}\par
\tab\tab\tab\}\par
\par
\tab\tab\tab // Turn off finishing flag\par
\tab\tab\tab delete data.finish;\par
\tab\tab\} );\par
\tab\}\par
\} );\par
\par
jQuery.each( [ "toggle", "show", "hide" ], function( _i, name ) \{\par
\tab var cssFn = jQuery.fn[ name ];\par
\tab jQuery.fn[ name ] = function( speed, easing, callback ) \{\par
\tab\tab return speed == null || typeof speed === "boolean" ?\par
\tab\tab\tab cssFn.apply( this, arguments ) :\par
\tab\tab\tab this.animate( genFx( name, true ), speed, easing, callback );\par
\tab\};\par
\} );\par
\par
// Generate shortcuts for custom animations\par
jQuery.each( \{\par
\tab slideDown: genFx( "show" ),\par
\tab slideUp: genFx( "hide" ),\par
\tab slideToggle: genFx( "toggle" ),\par
\tab fadeIn: \{ opacity: "show" \},\par
\tab fadeOut: \{ opacity: "hide" \},\par
\tab fadeToggle: \{ opacity: "toggle" \}\par
\}, function( name, props ) \{\par
\tab jQuery.fn[ name ] = function( speed, easing, callback ) \{\par
\tab\tab return this.animate( props, speed, easing, callback );\par
\tab\};\par
\} );\par
\par
jQuery.timers = [];\par
jQuery.fx.tick = function() \{\par
\tab var timer,\par
\tab\tab i = 0,\par
\tab\tab timers = jQuery.timers;\par
\par
\tab fxNow = Date.now();\par
\par
\tab for ( ; i < timers.length; i++ ) \{\par
\tab\tab timer = timers[ i ];\par
\par
\tab\tab // Run the timer and safely remove it when done (allowing for external removal)\par
\tab\tab if ( !timer() && timers[ i ] === timer ) \{\par
\tab\tab\tab timers.splice( i--, 1 );\par
\tab\tab\}\par
\tab\}\par
\par
\tab if ( !timers.length ) \{\par
\tab\tab jQuery.fx.stop();\par
\tab\}\par
\tab fxNow = undefined;\par
\};\par
\par
jQuery.fx.timer = function( timer ) \{\par
\tab jQuery.timers.push( timer );\par
\tab jQuery.fx.start();\par
\};\par
\par
jQuery.fx.interval = 13;\par
jQuery.fx.start = function() \{\par
\tab if ( inProgress ) \{\par
\tab\tab return;\par
\tab\}\par
\par
\tab inProgress = true;\par
\tab schedule();\par
\};\par
\par
jQuery.fx.stop = function() \{\par
\tab inProgress = null;\par
\};\par
\par
jQuery.fx.speeds = \{\par
\tab slow: 600,\par
\tab fast: 200,\par
\par
\tab // Default speed\par
\tab _default: 400\par
\};\par
\par
\par
// Based off of the plugin by Clint Helfers, with permission.\par
// {{\field{\*\fldinst{HYPERLINK https://web.archive.org/web/20100324014747/http://blindsignals.com/index.php/2009/07/jquery-delay/ }}{\fldrslt{https://web.archive.org/web/20100324014747/http://blindsignals.com/index.php/2009/07/jquery-delay/\ul0\cf0}}}}\f0\fs22\par
jQuery.fn.delay = function( time, type ) \{\par
\tab time = jQuery.fx ? jQuery.fx.speeds[ time ] || time : time;\par
\tab type = type || "fx";\par
\par
\tab return this.queue( type, function( next, hooks ) \{\par
\tab\tab var timeout = window.setTimeout( next, time );\par
\tab\tab hooks.stop = function() \{\par
\tab\tab\tab window.clearTimeout( timeout );\par
\tab\tab\};\par
\tab\} );\par
\};\par
\par
\par
( function() \{\par
\tab var input = document.createElement( "input" ),\par
\tab\tab select = document.createElement( "select" ),\par
\tab\tab opt = select.appendChild( document.createElement( "option" ) );\par
\par
\tab input.type = "checkbox";\par
\par
\tab // Support: Android <=4.3 only\par
\tab // Default value for a checkbox should be "on"\par
\tab support.checkOn = input.value !== "";\par
\par
\tab // Support: IE <=11 only\par
\tab // Must access selectedIndex to make default options select\par
\tab support.optSelected = opt.selected;\par
\par
\tab // Support: IE <=11 only\par
\tab // An input loses its value after becoming a radio\par
\tab input = document.createElement( "input" );\par
\tab input.value = "t";\par
\tab input.type = "radio";\par
\tab support.radioValue = input.value === "t";\par
\} )();\par
\par
\par
var boolHook,\par
\tab attrHandle = jQuery.expr.attrHandle;\par
\par
jQuery.fn.extend( \{\par
\tab attr: function( name, value ) \{\par
\tab\tab return access( this, jQuery.attr, name, value, arguments.length > 1 );\par
\tab\},\par
\par
\tab removeAttr: function( name ) \{\par
\tab\tab return this.each( function() \{\par
\tab\tab\tab jQuery.removeAttr( this, name );\par
\tab\tab\} );\par
\tab\}\par
\} );\par
\par
jQuery.extend( \{\par
\tab attr: function( elem, name, value ) \{\par
\tab\tab var ret, hooks,\par
\tab\tab\tab nType = elem.nodeType;\par
\par
\tab\tab // Don't get/set attributes on text, comment and attribute nodes\par
\tab\tab if ( nType === 3 || nType === 8 || nType === 2 ) \{\par
\tab\tab\tab return;\par
\tab\tab\}\par
\par
\tab\tab // Fallback to prop when attributes are not supported\par
\tab\tab if ( typeof elem.getAttribute === "undefined" ) \{\par
\tab\tab\tab return jQuery.prop( elem, name, value );\par
\tab\tab\}\par
\par
\tab\tab // Attribute hooks are determined by the lowercase version\par
\tab\tab // Grab necessary hook if one is defined\par
\tab\tab if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) \{\par
\tab\tab\tab hooks = jQuery.attrHooks[ name.toLowerCase() ] ||\par
\tab\tab\tab\tab ( jQuery.expr.match.bool.test( name ) ? boolHook : undefined );\par
\tab\tab\}\par
\par
\tab\tab if ( value !== undefined ) \{\par
\tab\tab\tab if ( value === null ) \{\par
\tab\tab\tab\tab jQuery.removeAttr( elem, name );\par
\tab\tab\tab\tab return;\par
\tab\tab\tab\}\par
\par
\tab\tab\tab if ( hooks && "set" in hooks &&\par
\tab\tab\tab\tab ( ret = hooks.set( elem, value, name ) ) !== undefined ) \{\par
\tab\tab\tab\tab return ret;\par
\tab\tab\tab\}\par
\par
\tab\tab\tab elem.setAttribute( name, value + "" );\par
\tab\tab\tab return value;\par
\tab\tab\}\par
\par
\tab\tab if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) \{\par
\tab\tab\tab return ret;\par
\tab\tab\}\par
\par
\tab\tab ret = jQuery.find.attr( elem, name );\par
\par
\tab\tab // Non-existent attributes return null, we normalize to undefined\par
\tab\tab return ret == null ? undefined : ret;\par
\tab\},\par
\par
\tab attrHooks: \{\par
\tab\tab type: \{\par
\tab\tab\tab set: function( elem, value ) \{\par
\tab\tab\tab\tab if ( !support.radioValue && value === "radio" &&\par
\tab\tab\tab\tab\tab nodeName( elem, "input" ) ) \{\par
\tab\tab\tab\tab\tab var val = elem.value;\par
\tab\tab\tab\tab\tab elem.setAttribute( "type", value );\par
\tab\tab\tab\tab\tab if ( val ) \{\par
\tab\tab\tab\tab\tab\tab elem.value = val;\par
\tab\tab\tab\tab\tab\}\par
\tab\tab\tab\tab\tab return value;\par
\tab\tab\tab\tab\}\par
\tab\tab\tab\}\par
\tab\tab\}\par
\tab\},\par
\par
\tab removeAttr: function( elem, value ) \{\par
\tab\tab var name,\par
\tab\tab\tab i = 0,\par
\par
\tab\tab\tab // Attribute names can contain non-HTML whitespace characters\par
\tab\tab\tab // {{\field{\*\fldinst{HYPERLINK https://html.spec.whatwg.org/multipage/syntax.html#attributes-2 }}{\fldrslt{https://html.spec.whatwg.org/multipage/syntax.html#attributes-2\ul0\cf0}}}}\f0\fs22\par
\tab\tab\tab attrNames = value && value.match( rnothtmlwhite );\par
\par
\tab\tab if ( attrNames && elem.nodeType === 1 ) \{\par
\tab\tab\tab while ( ( name = attrNames[ i++ ] ) ) \{\par
\tab\tab\tab\tab elem.removeAttribute( name );\par
\tab\tab\tab\}\par
\tab\tab\}\par
\tab\}\par
\} );\par
\par
// Hooks for boolean attributes\par
boolHook = \{\par
\tab set: function( elem, value, name ) \{\par
\tab\tab if ( value === false ) \{\par
\par
\tab\tab\tab // Remove boolean attributes when set to false\par
\tab\tab\tab jQuery.removeAttr( elem, name );\par
\tab\tab\} else \{\par
\tab\tab\tab elem.setAttribute( name, name );\par
\tab\tab\}\par
\tab\tab return name;\par
\tab\}\par
\};\par
\par
jQuery.each( jQuery.expr.match.bool.source.match( /\\w+/g ), function( _i, name ) \{\par
\tab var getter = attrHandle[ name ] || jQuery.find.attr;\par
\par
\tab attrHandle[ name ] = function( elem, name, isXML ) \{\par
\tab\tab var ret, handle,\par
\tab\tab\tab lowercaseName = name.toLowerCase();\par
\par
\tab\tab if ( !isXML ) \{\par
\par
\tab\tab\tab // Avoid an infinite loop by temporarily removing this function from the getter\par
\tab\tab\tab handle = attrHandle[ lowercaseName ];\par
\tab\tab\tab attrHandle[ lowercaseName ] = ret;\par
\tab\tab\tab ret = getter( elem, name, isXML ) != null ?\par
\tab\tab\tab\tab lowercaseName :\par
\tab\tab\tab\tab null;\par
\tab\tab\tab attrHandle[ lowercaseName ] = handle;\par
\tab\tab\}\par
\tab\tab return ret;\par
\tab\};\par
\} );\par
\par
\par
\par
\par
var rfocusable = /^(?:input|select|textarea|button)$/i,\par
\tab rclickable = /^(?:a|area)$/i;\par
\par
jQuery.fn.extend( \{\par
\tab prop: function( name, value ) \{\par
\tab\tab return access( this, jQuery.prop, name, value, arguments.length > 1 );\par
\tab\},\par
\par
\tab removeProp: function( name ) \{\par
\tab\tab return this.each( function() \{\par
\tab\tab\tab delete this[ jQuery.propFix[ name ] || name ];\par
\tab\tab\} );\par
\tab\}\par
\} );\par
\par
jQuery.extend( \{\par
\tab prop: function( elem, name, value ) \{\par
\tab\tab var ret, hooks,\par
\tab\tab\tab nType = elem.nodeType;\par
\par
\tab\tab // Don't get/set properties on text, comment and attribute nodes\par
\tab\tab if ( nType === 3 || nType === 8 || nType === 2 ) \{\par
\tab\tab\tab return;\par
\tab\tab\}\par
\par
\tab\tab if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) \{\par
\par
\tab\tab\tab // Fix name and attach hooks\par
\tab\tab\tab name = jQuery.propFix[ name ] || name;\par
\tab\tab\tab hooks = jQuery.propHooks[ name ];\par
\tab\tab\}\par
\par
\tab\tab if ( value !== undefined ) \{\par
\tab\tab\tab if ( hooks && "set" in hooks &&\par
\tab\tab\tab\tab ( ret = hooks.set( elem, value, name ) ) !== undefined ) \{\par
\tab\tab\tab\tab return ret;\par
\tab\tab\tab\}\par
\par
\tab\tab\tab return ( elem[ name ] = value );\par
\tab\tab\}\par
\par
\tab\tab if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) \{\par
\tab\tab\tab return ret;\par
\tab\tab\}\par
\par
\tab\tab return elem[ name ];\par
\tab\},\par
\par
\tab propHooks: \{\par
\tab\tab tabIndex: \{\par
\tab\tab\tab get: function( elem ) \{\par
\par
\tab\tab\tab\tab // Support: IE <=9 - 11 only\par
\tab\tab\tab\tab // elem.tabIndex doesn't always return the\par
\tab\tab\tab\tab // correct value when it hasn't been explicitly set\par
\tab\tab\tab\tab // {{\field{\*\fldinst{HYPERLINK https://web.archive.org/web/20141116233347/http://fluidproject.org/blog/2008/01/09/getting-setting-and-removing-tabindex-values-with-javascript/ }}{\fldrslt{https://web.archive.org/web/20141116233347/http://fluidproject.org/blog/2008/01/09/getting-setting-and-removing-tabindex-values-with-javascript/\ul0\cf0}}}}\f0\fs22\par
\tab\tab\tab\tab // Use proper attribute retrieval(#12072)\par
\tab\tab\tab\tab var tabindex = jQuery.find.attr( elem, "tabindex" );\par
\par
\tab\tab\tab\tab if ( tabindex ) \{\par
\tab\tab\tab\tab\tab return parseInt( tabindex, 10 );\par
\tab\tab\tab\tab\}\par
\par
\tab\tab\tab\tab if (\par
\tab\tab\tab\tab\tab rfocusable.test( elem.nodeName ) ||\par
\tab\tab\tab\tab\tab rclickable.test( elem.nodeName ) &&\par
\tab\tab\tab\tab\tab elem.href\par
\tab\tab\tab\tab ) \{\par
\tab\tab\tab\tab\tab return 0;\par
\tab\tab\tab\tab\}\par
\par
\tab\tab\tab\tab return -1;\par
\tab\tab\tab\}\par
\tab\tab\}\par
\tab\},\par
\par
\tab propFix: \{\par
\tab\tab "for": "htmlFor",\par
\tab\tab "class": "className"\par
\tab\}\par
\} );\par
\par
// Support: IE <=11 only\par
// Accessing the selectedIndex property\par
// forces the browser to respect setting selected\par
// on the option\par
// The getter ensures a default option is selected\par
// when in an optgroup\par
// eslint rule "no-unused-expressions" is disabled for this code\par
// since it considers such accessions noop\par
if ( !support.optSelected ) \{\par
\tab jQuery.propHooks.selected = \{\par
\tab\tab get: function( elem ) \{\par
\par
\tab\tab\tab /* eslint no-unused-expressions: "off" */\par
\par
\tab\tab\tab var parent = elem.parentNode;\par
\tab\tab\tab if ( parent && parent.parentNode ) \{\par
\tab\tab\tab\tab parent.parentNode.selectedIndex;\par
\tab\tab\tab\}\par
\tab\tab\tab return null;\par
\tab\tab\},\par
\tab\tab set: function( elem ) \{\par
\par
\tab\tab\tab /* eslint no-unused-expressions: "off" */\par
\par
\tab\tab\tab var parent = elem.parentNode;\par
\tab\tab\tab if ( parent ) \{\par
\tab\tab\tab\tab parent.selectedIndex;\par
\par
\tab\tab\tab\tab if ( parent.parentNode ) \{\par
\tab\tab\tab\tab\tab parent.parentNode.selectedIndex;\par
\tab\tab\tab\tab\}\par
\tab\tab\tab\}\par
\tab\tab\}\par
\tab\};\par
\}\par
\par
jQuery.each( [\par
\tab "tabIndex",\par
\tab "readOnly",\par
\tab "maxLength",\par
\tab "cellSpacing",\par
\tab "cellPadding",\par
\tab "rowSpan",\par
\tab "colSpan",\par
\tab "useMap",\par
\tab "frameBorder",\par
\tab "contentEditable"\par
], function() \{\par
\tab jQuery.propFix[ this.toLowerCase() ] = this;\par
\} );\par
\par
\par
\par
\par
\tab // Strip and collapse whitespace according to HTML spec\par
\tab // {{\field{\*\fldinst{HYPERLINK https://infra.spec.whatwg.org/#strip-and-collapse-ascii-whitespace }}{\fldrslt{https://infra.spec.whatwg.org/#strip-and-collapse-ascii-whitespace\ul0\cf0}}}}\f0\fs22\par
\tab function stripAndCollapse( value ) \{\par
\tab\tab var tokens = value.match( rnothtmlwhite ) || [];\par
\tab\tab return tokens.join( " " );\par
\tab\}\par
\par
\par
function getClass( elem ) \{\par
\tab return elem.getAttribute && elem.getAttribute( "class" ) || "";\par
\}\par
\par
function classesToArray( value ) \{\par
\tab if ( Array.isArray( value ) ) \{\par
\tab\tab return value;\par
\tab\}\par
\tab if ( typeof value === "string" ) \{\par
\tab\tab return value.match( rnothtmlwhite ) || [];\par
\tab\}\par
\tab return [];\par
\}\par
\par
jQuery.fn.extend( \{\par
\tab addClass: function( value ) \{\par
\tab\tab var classes, elem, cur, curValue, clazz, j, finalValue,\par
\tab\tab\tab i = 0;\par
\par
\tab\tab if ( isFunction( value ) ) \{\par
\tab\tab\tab return this.each( function( j ) \{\par
\tab\tab\tab\tab jQuery( this ).addClass( value.call( this, j, getClass( this ) ) );\par
\tab\tab\tab\} );\par
\tab\tab\}\par
\par
\tab\tab classes = classesToArray( value );\par
\par
\tab\tab if ( classes.length ) \{\par
\tab\tab\tab while ( ( elem = this[ i++ ] ) ) \{\par
\tab\tab\tab\tab curValue = getClass( elem );\par
\tab\tab\tab\tab cur = elem.nodeType === 1 && ( " " + stripAndCollapse( curValue ) + " " );\par
\par
\tab\tab\tab\tab if ( cur ) \{\par
\tab\tab\tab\tab\tab j = 0;\par
\tab\tab\tab\tab\tab while ( ( clazz = classes[ j++ ] ) ) \{\par
\tab\tab\tab\tab\tab\tab if ( cur.indexOf( " " + clazz + " " ) < 0 ) \{\par
\tab\tab\tab\tab\tab\tab\tab cur += clazz + " ";\par
\tab\tab\tab\tab\tab\tab\}\par
\tab\tab\tab\tab\tab\}\par
\par
\tab\tab\tab\tab\tab // Only assign if different to avoid unneeded rendering.\par
\tab\tab\tab\tab\tab finalValue = stripAndCollapse( cur );\par
\tab\tab\tab\tab\tab if ( curValue !== finalValue ) \{\par
\tab\tab\tab\tab\tab\tab elem.setAttribute( "class", finalValue );\par
\tab\tab\tab\tab\tab\}\par
\tab\tab\tab\tab\}\par
\tab\tab\tab\}\par
\tab\tab\}\par
\par
\tab\tab return this;\par
\tab\},\par
\par
\tab removeClass: function( value ) \{\par
\tab\tab var classes, elem, cur, curValue, clazz, j, finalValue,\par
\tab\tab\tab i = 0;\par
\par
\tab\tab if ( isFunction( value ) ) \{\par
\tab\tab\tab return this.each( function( j ) \{\par
\tab\tab\tab\tab jQuery( this ).removeClass( value.call( this, j, getClass( this ) ) );\par
\tab\tab\tab\} );\par
\tab\tab\}\par
\par
\tab\tab if ( !arguments.length ) \{\par
\tab\tab\tab return this.attr( "class", "" );\par
\tab\tab\}\par
\par
\tab\tab classes = classesToArray( value );\par
\par
\tab\tab if ( classes.length ) \{\par
\tab\tab\tab while ( ( elem = this[ i++ ] ) ) \{\par
\tab\tab\tab\tab curValue = getClass( elem );\par
\par
\tab\tab\tab\tab // This expression is here for better compressibility (see addClass)\par
\tab\tab\tab\tab cur = elem.nodeType === 1 && ( " " + stripAndCollapse( curValue ) + " " );\par
\par
\tab\tab\tab\tab if ( cur ) \{\par
\tab\tab\tab\tab\tab j = 0;\par
\tab\tab\tab\tab\tab while ( ( clazz = classes[ j++ ] ) ) \{\par
\par
\tab\tab\tab\tab\tab\tab // Remove *all* instances\par
\tab\tab\tab\tab\tab\tab while ( cur.indexOf( " " + clazz + " " ) > -1 ) \{\par
\tab\tab\tab\tab\tab\tab\tab cur = cur.replace( " " + clazz + " ", " " );\par
\tab\tab\tab\tab\tab\tab\}\par
\tab\tab\tab\tab\tab\}\par
\par
\tab\tab\tab\tab\tab // Only assign if different to avoid unneeded rendering.\par
\tab\tab\tab\tab\tab finalValue = stripAndCollapse( cur );\par
\tab\tab\tab\tab\tab if ( curValue !== finalValue ) \{\par
\tab\tab\tab\tab\tab\tab elem.setAttribute( "class", finalValue );\par
\tab\tab\tab\tab\tab\}\par
\tab\tab\tab\tab\}\par
\tab\tab\tab\}\par
\tab\tab\}\par
\par
\tab\tab return this;\par
\tab\},\par
\par
\tab toggleClass: function( value, stateVal ) \{\par
\tab\tab var type = typeof value,\par
\tab\tab\tab isValidValue = type === "string" || Array.isArray( value );\par
\par
\tab\tab if ( typeof stateVal === "boolean" && isValidValue ) \{\par
\tab\tab\tab return stateVal ? this.addClass( value ) : this.removeClass( value );\par
\tab\tab\}\par
\par
\tab\tab if ( isFunction( value ) ) \{\par
\tab\tab\tab return this.each( function( i ) \{\par
\tab\tab\tab\tab jQuery( this ).toggleClass(\par
\tab\tab\tab\tab\tab value.call( this, i, getClass( this ), stateVal ),\par
\tab\tab\tab\tab\tab stateVal\par
\tab\tab\tab\tab );\par
\tab\tab\tab\} );\par
\tab\tab\}\par
\par
\tab\tab return this.each( function() \{\par
\tab\tab\tab var className, i, self, classNames;\par
\par
\tab\tab\tab if ( isValidValue ) \{\par
\par
\tab\tab\tab\tab // Toggle individual class names\par
\tab\tab\tab\tab i = 0;\par
\tab\tab\tab\tab self = jQuery( this );\par
\tab\tab\tab\tab classNames = classesToArray( value );\par
\par
\tab\tab\tab\tab while ( ( className = classNames[ i++ ] ) ) \{\par
\par
\tab\tab\tab\tab\tab // Check each className given, space separated list\par
\tab\tab\tab\tab\tab if ( self.hasClass( className ) ) \{\par
\tab\tab\tab\tab\tab\tab self.removeClass( className );\par
\tab\tab\tab\tab\tab\} else \{\par
\tab\tab\tab\tab\tab\tab self.addClass( className );\par
\tab\tab\tab\tab\tab\}\par
\tab\tab\tab\tab\}\par
\par
\tab\tab\tab // Toggle whole class name\par
\tab\tab\tab\} else if ( value === undefined || type === "boolean" ) \{\par
\tab\tab\tab\tab className = getClass( this );\par
\tab\tab\tab\tab if ( className ) \{\par
\par
\tab\tab\tab\tab\tab // Store className if set\par
\tab\tab\tab\tab\tab dataPriv.set( this, "__className__", className );\par
\tab\tab\tab\tab\}\par
\par
\tab\tab\tab\tab // If the element has a class name or if we're passed `false`,\par
\tab\tab\tab\tab // then remove the whole classname (if there was one, the above saved it).\par
\tab\tab\tab\tab // Otherwise bring back whatever was previously saved (if anything),\par
\tab\tab\tab\tab // falling back to the empty string if nothing was stored.\par
\tab\tab\tab\tab if ( this.setAttribute ) \{\par
\tab\tab\tab\tab\tab this.setAttribute( "class",\par
\tab\tab\tab\tab\tab\tab className || value === false ?\par
\tab\tab\tab\tab\tab\tab\tab "" :\par
\tab\tab\tab\tab\tab\tab\tab dataPriv.get( this, "__className__" ) || ""\par
\tab\tab\tab\tab\tab );\par
\tab\tab\tab\tab\}\par
\tab\tab\tab\}\par
\tab\tab\} );\par
\tab\},\par
\par
\tab hasClass: function( selector ) \{\par
\tab\tab var className, elem,\par
\tab\tab\tab i = 0;\par
\par
\tab\tab className = " " + selector + " ";\par
\tab\tab while ( ( elem = this[ i++ ] ) ) \{\par
\tab\tab\tab if ( elem.nodeType === 1 &&\par
\tab\tab\tab\tab ( " " + stripAndCollapse( getClass( elem ) ) + " " ).indexOf( className ) > -1 ) \{\par
\tab\tab\tab\tab return true;\par
\tab\tab\tab\}\par
\tab\tab\}\par
\par
\tab\tab return false;\par
\tab\}\par
\} );\par
\par
\par
\par
\par
var rreturn = /\\r/g;\par
\par
jQuery.fn.extend( \{\par
\tab val: function( value ) \{\par
\tab\tab var hooks, ret, valueIsFunction,\par
\tab\tab\tab elem = this[ 0 ];\par
\par
\tab\tab if ( !arguments.length ) \{\par
\tab\tab\tab if ( elem ) \{\par
\tab\tab\tab\tab hooks = jQuery.valHooks[ elem.type ] ||\par
\tab\tab\tab\tab\tab jQuery.valHooks[ elem.nodeName.toLowerCase() ];\par
\par
\tab\tab\tab\tab if ( hooks &&\par
\tab\tab\tab\tab\tab "get" in hooks &&\par
\tab\tab\tab\tab\tab ( ret = hooks.get( elem, "value" ) ) !== undefined\par
\tab\tab\tab\tab ) \{\par
\tab\tab\tab\tab\tab return ret;\par
\tab\tab\tab\tab\}\par
\par
\tab\tab\tab\tab ret = elem.value;\par
\par
\tab\tab\tab\tab // Handle most common string cases\par
\tab\tab\tab\tab if ( typeof ret === "string" ) \{\par
\tab\tab\tab\tab\tab return ret.replace( rreturn, "" );\par
\tab\tab\tab\tab\}\par
\par
\tab\tab\tab\tab // Handle cases where value is null/undef or number\par
\tab\tab\tab\tab return ret == null ? "" : ret;\par
\tab\tab\tab\}\par
\par
\tab\tab\tab return;\par
\tab\tab\}\par
\par
\tab\tab valueIsFunction = isFunction( value );\par
\par
\tab\tab return this.each( function( i ) \{\par
\tab\tab\tab var val;\par
\par
\tab\tab\tab if ( this.nodeType !== 1 ) \{\par
\tab\tab\tab\tab return;\par
\tab\tab\tab\}\par
\par
\tab\tab\tab if ( valueIsFunction ) \{\par
\tab\tab\tab\tab val = value.call( this, i, jQuery( this ).val() );\par
\tab\tab\tab\} else \{\par
\tab\tab\tab\tab val = value;\par
\tab\tab\tab\}\par
\par
\tab\tab\tab // Treat null/undefined as ""; convert numbers to string\par
\tab\tab\tab if ( val == null ) \{\par
\tab\tab\tab\tab val = "";\par
\par
\tab\tab\tab\} else if ( typeof val === "number" ) \{\par
\tab\tab\tab\tab val += "";\par
\par
\tab\tab\tab\} else if ( Array.isArray( val ) ) \{\par
\tab\tab\tab\tab val = jQuery.map( val, function( value ) \{\par
\tab\tab\tab\tab\tab return value == null ? "" : value + "";\par
\tab\tab\tab\tab\} );\par
\tab\tab\tab\}\par
\par
\tab\tab\tab hooks = jQuery.valHooks[ this.type ] || jQuery.valHooks[ this.nodeName.toLowerCase() ];\par
\par
\tab\tab\tab // If set returns undefined, fall back to normal setting\par
\tab\tab\tab if ( !hooks || !( "set" in hooks ) || hooks.set( this, val, "value" ) === undefined ) \{\par
\tab\tab\tab\tab this.value = val;\par
\tab\tab\tab\}\par
\tab\tab\} );\par
\tab\}\par
\} );\par
\par
jQuery.extend( \{\par
\tab valHooks: \{\par
\tab\tab option: \{\par
\tab\tab\tab get: function( elem ) \{\par
\par
\tab\tab\tab\tab var val = jQuery.find.attr( elem, "value" );\par
\tab\tab\tab\tab return val != null ?\par
\tab\tab\tab\tab\tab val :\par
\par
\tab\tab\tab\tab\tab // Support: IE <=10 - 11 only\par
\tab\tab\tab\tab\tab // option.text throws exceptions (#14686, #14858)\par
\tab\tab\tab\tab\tab // Strip and collapse whitespace\par
\tab\tab\tab\tab\tab // {{\field{\*\fldinst{HYPERLINK https://html.spec.whatwg.org/#strip-and-collapse-whitespace }}{\fldrslt{https://html.spec.whatwg.org/#strip-and-collapse-whitespace\ul0\cf0}}}}\f0\fs22\par
\tab\tab\tab\tab\tab stripAndCollapse( jQuery.text( elem ) );\par
\tab\tab\tab\}\par
\tab\tab\},\par
\tab\tab select: \{\par
\tab\tab\tab get: function( elem ) \{\par
\tab\tab\tab\tab var value, option, i,\par
\tab\tab\tab\tab\tab options = elem.options,\par
\tab\tab\tab\tab\tab index = elem.selectedIndex,\par
\tab\tab\tab\tab\tab one = elem.type === "select-one",\par
\tab\tab\tab\tab\tab values = one ? null : [],\par
\tab\tab\tab\tab\tab max = one ? index + 1 : options.length;\par
\par
\tab\tab\tab\tab if ( index < 0 ) \{\par
\tab\tab\tab\tab\tab i = max;\par
\par
\tab\tab\tab\tab\} else \{\par
\tab\tab\tab\tab\tab i = one ? index : 0;\par
\tab\tab\tab\tab\}\par
\par
\tab\tab\tab\tab // Loop through all the selected options\par
\tab\tab\tab\tab for ( ; i < max; i++ ) \{\par
\tab\tab\tab\tab\tab option = options[ i ];\par
\par
\tab\tab\tab\tab\tab // Support: IE <=9 only\par
\tab\tab\tab\tab\tab // IE8-9 doesn't update selected after form reset (#2551)\par
\tab\tab\tab\tab\tab if ( ( option.selected || i === index ) &&\par
\par
\tab\tab\tab\tab\tab\tab\tab // Don't return options that are disabled or in a disabled optgroup\par
\tab\tab\tab\tab\tab\tab\tab !option.disabled &&\par
\tab\tab\tab\tab\tab\tab\tab ( !option.parentNode.disabled ||\par
\tab\tab\tab\tab\tab\tab\tab\tab !nodeName( option.parentNode, "optgroup" ) ) ) \{\par
\par
\tab\tab\tab\tab\tab\tab // Get the specific value for the option\par
\tab\tab\tab\tab\tab\tab value = jQuery( option ).val();\par
\par
\tab\tab\tab\tab\tab\tab // We don't need an array for one selects\par
\tab\tab\tab\tab\tab\tab if ( one ) \{\par
\tab\tab\tab\tab\tab\tab\tab return value;\par
\tab\tab\tab\tab\tab\tab\}\par
\par
\tab\tab\tab\tab\tab\tab // Multi-Selects return an array\par
\tab\tab\tab\tab\tab\tab values.push( value );\par
\tab\tab\tab\tab\tab\}\par
\tab\tab\tab\tab\}\par
\par
\tab\tab\tab\tab return values;\par
\tab\tab\tab\},\par
\par
\tab\tab\tab set: function( elem, value ) \{\par
\tab\tab\tab\tab var optionSet, option,\par
\tab\tab\tab\tab\tab options = elem.options,\par
\tab\tab\tab\tab\tab values = jQuery.makeArray( value ),\par
\tab\tab\tab\tab\tab i = options.length;\par
\par
\tab\tab\tab\tab while ( i-- ) \{\par
\tab\tab\tab\tab\tab option = options[ i ];\par
\par
\tab\tab\tab\tab\tab /* eslint-disable no-cond-assign */\par
\par
\tab\tab\tab\tab\tab if ( option.selected =\par
\tab\tab\tab\tab\tab\tab jQuery.inArray( jQuery.valHooks.option.get( option ), values ) > -1\par
\tab\tab\tab\tab\tab ) \{\par
\tab\tab\tab\tab\tab\tab optionSet = true;\par
\tab\tab\tab\tab\tab\}\par
\par
\tab\tab\tab\tab\tab /* eslint-enable no-cond-assign */\par
\tab\tab\tab\tab\}\par
\par
\tab\tab\tab\tab // Force browsers to behave consistently when non-matching value is set\par
\tab\tab\tab\tab if ( !optionSet ) \{\par
\tab\tab\tab\tab\tab elem.selectedIndex = -1;\par
\tab\tab\tab\tab\}\par
\tab\tab\tab\tab return values;\par
\tab\tab\tab\}\par
\tab\tab\}\par
\tab\}\par
\} );\par
\par
// Radios and checkboxes getter/setter\par
jQuery.each( [ "radio", "checkbox" ], function() \{\par
\tab jQuery.valHooks[ this ] = \{\par
\tab\tab set: function( elem, value ) \{\par
\tab\tab\tab if ( Array.isArray( value ) ) \{\par
\tab\tab\tab\tab return ( elem.checked = jQuery.inArray( jQuery( elem ).val(), value ) > -1 );\par
\tab\tab\tab\}\par
\tab\tab\}\par
\tab\};\par
\tab if ( !support.checkOn ) \{\par
\tab\tab jQuery.valHooks[ this ].get = function( elem ) \{\par
\tab\tab\tab return elem.getAttribute( "value" ) === null ? "on" : elem.value;\par
\tab\tab\};\par
\tab\}\par
\} );\par
\par
\par
\par
\par
// Return jQuery for attributes-only inclusion\par
\par
\par
support.focusin = "onfocusin" in window;\par
\par
\par
var rfocusMorph = /^(?:focusinfocus|focusoutblur)$/,\par
\tab stopPropagationCallback = function( e ) \{\par
\tab\tab e.stopPropagation();\par
\tab\};\par
\par
jQuery.extend( jQuery.event, \{\par
\par
\tab trigger: function( event, data, elem, onlyHandlers ) \{\par
\par
\tab\tab var i, cur, tmp, bubbleType, ontype, handle, special, lastElement,\par
\tab\tab\tab eventPath = [ elem || document ],\par
\tab\tab\tab type = hasOwn.call( event, "type" ) ? event.type : event,\par
\tab\tab\tab namespaces = hasOwn.call( event, "namespace" ) ? event.namespace.split( "." ) : [];\par
\par
\tab\tab cur = lastElement = tmp = elem = elem || document;\par
\par
\tab\tab // Don't do events on text and comment nodes\par
\tab\tab if ( elem.nodeType === 3 || elem.nodeType === 8 ) \{\par
\tab\tab\tab return;\par
\tab\tab\}\par
\par
\tab\tab // focus/blur morphs to focusin/out; ensure we're not firing them right now\par
\tab\tab if ( rfocusMorph.test( type + jQuery.event.triggered ) ) \{\par
\tab\tab\tab return;\par
\tab\tab\}\par
\par
\tab\tab if ( type.indexOf( "." ) > -1 ) \{\par
\par
\tab\tab\tab // Namespaced trigger; create a regexp to match event type in handle()\par
\tab\tab\tab namespaces = type.split( "." );\par
\tab\tab\tab type = namespaces.shift();\par
\tab\tab\tab namespaces.sort();\par
\tab\tab\}\par
\tab\tab ontype = type.indexOf( ":" ) < 0 && "on" + type;\par
\par
\tab\tab // Caller can pass in a jQuery.Event object, Object, or just an event type string\par
\tab\tab event = event[ jQuery.expando ] ?\par
\tab\tab\tab event :\par
\tab\tab\tab new jQuery.Event( type, typeof event === "object" && event );\par
\par
\tab\tab // Trigger bitmask: & 1 for native handlers; & 2 for jQuery (always true)\par
\tab\tab event.isTrigger = onlyHandlers ? 2 : 3;\par
\tab\tab event.namespace = namespaces.join( "." );\par
\tab\tab event.rnamespace = event.namespace ?\par
\tab\tab\tab new RegExp( "(^|\\\\.)" + namespaces.join( "{{\field{\*\fldinst{HYPERLINK "\\\\\\\\.(?:.*\\\\\\\\.|)"}}{\fldrslt{\\\\.(?:.*\\\\.|)\ul0\cf0}}}}\f0\fs22 " ) + "({{\field{\*\fldinst{HYPERLINK "\\\\\\\\.|$"}}{\fldrslt{\\\\.|$\ul0\cf0}}}}\f0\fs22 )" ) :\par
\tab\tab\tab null;\par
\par
\tab\tab // Clean up the event in case it is being reused\par
\tab\tab event.result = undefined;\par
\tab\tab if ( !event.target ) \{\par
\tab\tab\tab event.target = elem;\par
\tab\tab\}\par
\par
\tab\tab // Clone any incoming data and prepend the event, creating the handler arg list\par
\tab\tab data = data == null ?\par
\tab\tab\tab [ event ] :\par
\tab\tab\tab jQuery.makeArray( data, [ event ] );\par
\par
\tab\tab // Allow special events to draw outside the lines\par
\tab\tab special = jQuery.event.special[ type ] || \{\};\par
\tab\tab if ( !onlyHandlers && special.trigger && special.trigger.apply( elem, data ) === false ) \{\par
\tab\tab\tab return;\par
\tab\tab\}\par
\par
\tab\tab // Determine event propagation path in advance, per W3C events spec (#9951)\par
\tab\tab // Bubble up to document, then to window; watch for a global ownerDocument var (#9724)\par
\tab\tab if ( !onlyHandlers && !special.noBubble && !isWindow( elem ) ) \{\par
\par
\tab\tab\tab bubbleType = special.delegateType || type;\par
\tab\tab\tab if ( !rfocusMorph.test( bubbleType + type ) ) \{\par
\tab\tab\tab\tab cur = cur.parentNode;\par
\tab\tab\tab\}\par
\tab\tab\tab for ( ; cur; cur = cur.parentNode ) \{\par
\tab\tab\tab\tab eventPath.push( cur );\par
\tab\tab\tab\tab tmp = cur;\par
\tab\tab\tab\}\par
\par
\tab\tab\tab // Only add window if we got to document (e.g., not plain obj or detached DOM)\par
\tab\tab\tab if ( tmp === ( elem.ownerDocument || document ) ) \{\par
\tab\tab\tab\tab eventPath.push( tmp.defaultView || tmp.parentWindow || window );\par
\tab\tab\tab\}\par
\tab\tab\}\par
\par
\tab\tab // Fire handlers on the event path\par
\tab\tab i = 0;\par
\tab\tab while ( ( cur = eventPath[ i++ ] ) && !event.isPropagationStopped() ) \{\par
\tab\tab\tab lastElement = cur;\par
\tab\tab\tab event.type = i > 1 ?\par
\tab\tab\tab\tab bubbleType :\par
\tab\tab\tab\tab special.bindType || type;\par
\par
\tab\tab\tab // jQuery handler\par
\tab\tab\tab handle = ( dataPriv.get( cur, "events" ) || Object.create( null ) )[ event.type ] &&\par
\tab\tab\tab\tab dataPriv.get( cur, "handle" );\par
\tab\tab\tab if ( handle ) \{\par
\tab\tab\tab\tab handle.apply( cur, data );\par
\tab\tab\tab\}\par
\par
\tab\tab\tab // Native handler\par
\tab\tab\tab handle = ontype && cur[ ontype ];\par
\tab\tab\tab if ( handle && handle.apply && acceptData( cur ) ) \{\par
\tab\tab\tab\tab event.result = handle.apply( cur, data );\par
\tab\tab\tab\tab if ( event.result === false ) \{\par
\tab\tab\tab\tab\tab event.preventDefault();\par
\tab\tab\tab\tab\}\par
\tab\tab\tab\}\par
\tab\tab\}\par
\tab\tab event.type = type;\par
\par
\tab\tab // If nobody prevented the default action, do it now\par
\tab\tab if ( !onlyHandlers && !event.isDefaultPrevented() ) \{\par
\par
\tab\tab\tab if ( ( !special._default ||\par
\tab\tab\tab\tab special._default.apply( eventPath.pop(), data ) === false ) &&\par
\tab\tab\tab\tab acceptData( elem ) ) \{\par
\par
\tab\tab\tab\tab // Call a native DOM method on the target with the same name as the event.\par
\tab\tab\tab\tab // Don't do default actions on window, that's where global variables be (#6170)\par
\tab\tab\tab\tab if ( ontype && isFunction( elem[ type ] ) && !isWindow( elem ) ) \{\par
\par
\tab\tab\tab\tab\tab // Don't re-trigger an onFOO event when we call its FOO() method\par
\tab\tab\tab\tab\tab tmp = elem[ ontype ];\par
\par
\tab\tab\tab\tab\tab if ( tmp ) \{\par
\tab\tab\tab\tab\tab\tab elem[ ontype ] = null;\par
\tab\tab\tab\tab\tab\}\par
\par
\tab\tab\tab\tab\tab // Prevent re-triggering of the same event, since we already bubbled it above\par
\tab\tab\tab\tab\tab jQuery.event.triggered = type;\par
\par
\tab\tab\tab\tab\tab if ( event.isPropagationStopped() ) \{\par
\tab\tab\tab\tab\tab\tab lastElement.addEventListener( type, stopPropagationCallback );\par
\tab\tab\tab\tab\tab\}\par
\par
\tab\tab\tab\tab\tab elem[ type ]();\par
\par
\tab\tab\tab\tab\tab if ( event.isPropagationStopped() ) \{\par
\tab\tab\tab\tab\tab\tab lastElement.removeEventListener( type, stopPropagationCallback );\par
\tab\tab\tab\tab\tab\}\par
\par
\tab\tab\tab\tab\tab jQuery.event.triggered = undefined;\par
\par
\tab\tab\tab\tab\tab if ( tmp ) \{\par
\tab\tab\tab\tab\tab\tab elem[ ontype ] = tmp;\par
\tab\tab\tab\tab\tab\}\par
\tab\tab\tab\tab\}\par
\tab\tab\tab\}\par
\tab\tab\}\par
\par
\tab\tab return event.result;\par
\tab\},\par
\par
\tab // Piggyback on a donor event to simulate a different one\par
\tab // Used only for `focus(in | out)` events\par
\tab simulate: function( type, elem, event ) \{\par
\tab\tab var e = jQuery.extend(\par
\tab\tab\tab new jQuery.Event(),\par
\tab\tab\tab event,\par
\tab\tab\tab\{\par
\tab\tab\tab\tab type: type,\par
\tab\tab\tab\tab isSimulated: true\par
\tab\tab\tab\}\par
\tab\tab );\par
\par
\tab\tab jQuery.event.trigger( e, null, elem );\par
\tab\}\par
\par
\} );\par
\par
jQuery.fn.extend( \{\par
\par
\tab trigger: function( type, data ) \{\par
\tab\tab return this.each( function() \{\par
\tab\tab\tab jQuery.event.trigger( type, data, this );\par
\tab\tab\} );\par
\tab\},\par
\tab triggerHandler: function( type, data ) \{\par
\tab\tab var elem = this[ 0 ];\par
\tab\tab if ( elem ) \{\par
\tab\tab\tab return jQuery.event.trigger( type, data, elem, true );\par
\tab\tab\}\par
\tab\}\par
\} );\par
\par
\par
// Support: Firefox <=44\par
// Firefox doesn't have focus(in | out) events\par
// Related ticket - {{\field{\*\fldinst{HYPERLINK https://bugzilla.mozilla.org/show_bug.cgi?id=687787 }}{\fldrslt{https://bugzilla.mozilla.org/show_bug.cgi?id=687787\ul0\cf0}}}}\f0\fs22\par
//\par
// Support: Chrome <=48 - 49, Safari <=9.0 - 9.1\par
// focus(in | out) events fire after focus & blur events,\par
// which is spec violation - {{\field{\*\fldinst{HYPERLINK http://www.w3.org/TR/DOM-Level-3-Events/#events-focusevent-event-order }}{\fldrslt{http://www.w3.org/TR/DOM-Level-3-Events/#events-focusevent-event-order\ul0\cf0}}}}\f0\fs22\par
// Related ticket - {{\field{\*\fldinst{HYPERLINK https://bugs.chromium.org/p/chromium/issues/detail?id=449857 }}{\fldrslt{https://bugs.chromium.org/p/chromium/issues/detail?id=449857\ul0\cf0}}}}\f0\fs22\par
if ( !support.focusin ) \{\par
\tab jQuery.each( \{ focus: "focusin", blur: "focusout" \}, function( orig, fix ) \{\par
\par
\tab\tab // Attach a single capturing handler on the document while someone wants focusin/focusout\par
\tab\tab var handler = function( event ) \{\par
\tab\tab\tab jQuery.event.simulate( fix, event.target, jQuery.event.fix( event ) );\par
\tab\tab\};\par
\par
\tab\tab jQuery.event.special[ fix ] = \{\par
\tab\tab\tab setup: function() \{\par
\par
\tab\tab\tab\tab // Handle: regular nodes (via `this.ownerDocument`), window\par
\tab\tab\tab\tab // (via `this.document`) & document (via `this`).\par
\tab\tab\tab\tab var doc = this.ownerDocument || this.document || this,\par
\tab\tab\tab\tab\tab attaches = dataPriv.access( doc, fix );\par
\par
\tab\tab\tab\tab if ( !attaches ) \{\par
\tab\tab\tab\tab\tab doc.addEventListener( orig, handler, true );\par
\tab\tab\tab\tab\}\par
\tab\tab\tab\tab dataPriv.access( doc, fix, ( attaches || 0 ) + 1 );\par
\tab\tab\tab\},\par
\tab\tab\tab teardown: function() \{\par
\tab\tab\tab\tab var doc = this.ownerDocument || this.document || this,\par
\tab\tab\tab\tab\tab attaches = dataPriv.access( doc, fix ) - 1;\par
\par
\tab\tab\tab\tab if ( !attaches ) \{\par
\tab\tab\tab\tab\tab doc.removeEventListener( orig, handler, true );\par
\tab\tab\tab\tab\tab dataPriv.remove( doc, fix );\par
\par
\tab\tab\tab\tab\} else \{\par
\tab\tab\tab\tab\tab dataPriv.access( doc, fix, attaches );\par
\tab\tab\tab\tab\}\par
\tab\tab\tab\}\par
\tab\tab\};\par
\tab\} );\par
\}\par
var location = window.location;\par
\par
var nonce = \{ guid: Date.now() \};\par
\par
var rquery = ( /\\?/ );\par
\par
\par
\par
// Cross-browser xml parsing\par
jQuery.parseXML = function( data ) \{\par
\tab var xml, parserErrorElem;\par
\tab if ( !data || typeof data !== "string" ) \{\par
\tab\tab return null;\par
\tab\}\par
\par
\tab // Support: IE 9 - 11 only\par
\tab // IE throws on parseFromString with invalid input.\par
\tab try \{\par
\tab\tab xml = ( new window.DOMParser() ).parseFromString( data, "text/xml" );\par
\tab\} catch ( e ) \{\}\par
\par
\tab parserErrorElem = xml && xml.getElementsByTagName( "parsererror" )[ 0 ];\par
\tab if ( !xml || parserErrorElem ) \{\par
\tab\tab jQuery.error( "Invalid XML: " + (\par
\tab\tab\tab parserErrorElem ?\par
\tab\tab\tab\tab jQuery.map( parserErrorElem.childNodes, function( el ) \{\par
\tab\tab\tab\tab\tab return el.textContent;\par
\tab\tab\tab\tab\} ).join( "\\n" ) :\par
\tab\tab\tab\tab data\par
\tab\tab ) );\par
\tab\}\par
\tab return xml;\par
\};\par
\par
\par
var\par
\tab rbracket = /\\[\\]$/,\par
\tab rCRLF = /\\r?\\n/g,\par
\tab rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i,\par
\tab rsubmittable = /^(?:input|select|textarea|keygen)/i;\par
\par
function buildParams( prefix, obj, traditional, add ) \{\par
\tab var name;\par
\par
\tab if ( Array.isArray( obj ) ) \{\par
\par
\tab\tab // Serialize array item.\par
\tab\tab jQuery.each( obj, function( i, v ) \{\par
\tab\tab\tab if ( traditional || rbracket.test( prefix ) ) \{\par
\par
\tab\tab\tab\tab // Treat each array item as a scalar.\par
\tab\tab\tab\tab add( prefix, v );\par
\par
\tab\tab\tab\} else \{\par
\par
\tab\tab\tab\tab // Item is non-scalar (array or object), encode its numeric index.\par
\tab\tab\tab\tab buildParams(\par
\tab\tab\tab\tab\tab prefix + "[" + ( typeof v === "object" && v != null ? i : "" ) + "]",\par
\tab\tab\tab\tab\tab v,\par
\tab\tab\tab\tab\tab traditional,\par
\tab\tab\tab\tab\tab add\par
\tab\tab\tab\tab );\par
\tab\tab\tab\}\par
\tab\tab\} );\par
\par
\tab\} else if ( !traditional && toType( obj ) === "object" ) \{\par
\par
\tab\tab // Serialize object item.\par
\tab\tab for ( name in obj ) \{\par
\tab\tab\tab buildParams( prefix + "[" + name + "]", obj[ name ], traditional, add );\par
\tab\tab\}\par
\par
\tab\} else \{\par
\par
\tab\tab // Serialize scalar item.\par
\tab\tab add( prefix, obj );\par
\tab\}\par
\}\par
\par
// Serialize an array of form elements or a set of\par
// key/values into a query string\par
jQuery.param = function( a, traditional ) \{\par
\tab var prefix,\par
\tab\tab s = [],\par
\tab\tab add = function( key, valueOrFunction ) \{\par
\par
\tab\tab\tab // If value is a function, invoke it and use its return value\par
\tab\tab\tab var value = isFunction( valueOrFunction ) ?\par
\tab\tab\tab\tab valueOrFunction() :\par
\tab\tab\tab\tab valueOrFunction;\par
\par
\tab\tab\tab s[ s.length ] = encodeURIComponent( key ) + "=" +\par
\tab\tab\tab\tab encodeURIComponent( value == null ? "" : value );\par
\tab\tab\};\par
\par
\tab if ( a == null ) \{\par
\tab\tab return "";\par
\tab\}\par
\par
\tab // If an array was passed in, assume that it is an array of form elements.\par
\tab if ( Array.isArray( a ) || ( a.jquery && !jQuery.isPlainObject( a ) ) ) \{\par
\par
\tab\tab // Serialize the form elements\par
\tab\tab jQuery.each( a, function() \{\par
\tab\tab\tab add( this.name, this.value );\par
\tab\tab\} );\par
\par
\tab\} else \{\par
\par
\tab\tab // If traditional, encode the "old" way (the way 1.3.2 or older\par
\tab\tab // did it), otherwise encode params recursively.\par
\tab\tab for ( prefix in a ) \{\par
\tab\tab\tab buildParams( prefix, a[ prefix ], traditional, add );\par
\tab\tab\}\par
\tab\}\par
\par
\tab // Return the resulting serialization\par
\tab return s.join( "&" );\par
\};\par
\par
jQuery.fn.extend( \{\par
\tab serialize: function() \{\par
\tab\tab return jQuery.param( this.serializeArray() );\par
\tab\},\par
\tab serializeArray: function() \{\par
\tab\tab return this.map( function() \{\par
\par
\tab\tab\tab // Can add propHook for "elements" to filter or add form elements\par
\tab\tab\tab var elements = jQuery.prop( this, "elements" );\par
\tab\tab\tab return elements ? jQuery.makeArray( elements ) : this;\par
\tab\tab\} ).filter( function() \{\par
\tab\tab\tab var type = this.type;\par
\par
\tab\tab\tab // Use .is( ":disabled" ) so that fieldset[disabled] works\par
\tab\tab\tab return this.name && !jQuery( this ).is( ":disabled" ) &&\par
\tab\tab\tab\tab rsubmittable.test( this.nodeName ) && !rsubmitterTypes.test( type ) &&\par
\tab\tab\tab\tab ( this.checked || !rcheckableType.test( type ) );\par
\tab\tab\} ).map( function( _i, elem ) \{\par
\tab\tab\tab var val = jQuery( this ).val();\par
\par
\tab\tab\tab if ( val == null ) \{\par
\tab\tab\tab\tab return null;\par
\tab\tab\tab\}\par
\par
\tab\tab\tab if ( Array.isArray( val ) ) \{\par
\tab\tab\tab\tab return jQuery.map( val, function( val ) \{\par
\tab\tab\tab\tab\tab return \{ name: elem.name, value: val.replace( rCRLF, "\\r\\n" ) \};\par
\tab\tab\tab\tab\} );\par
\tab\tab\tab\}\par
\par
\tab\tab\tab return \{ name: elem.name, value: val.replace( rCRLF, "\\r\\n" ) \};\par
\tab\tab\} ).get();\par
\tab\}\par
\} );\par
\par
\par
var\par
\tab r20 = /%20/g,\par
\tab rhash = /#.*$/,\par
\tab rantiCache = /([?&])_=[^&]*/,\par
\tab rheaders = /^(.*?):[ \\t]*([^\\r\\n]*)$/mg,\par
\par
\tab // #7653, #8125, #8152: local protocol detection\par
\tab rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,\par
\tab rnoContent = /^(?:GET|HEAD)$/,\par
\tab rprotocol = /^\\/\\//,\par
\par
\tab /* Prefilters\par
\tab  * 1) They are useful to introduce custom dataTypes (see ajax/jsonp.js for an example)\par
\tab  * 2) These are called:\par
\tab  *    - BEFORE asking for a transport\par
\tab  *    - AFTER param serialization (s.data is a string if s.processData is true)\par
\tab  * 3) key is the dataType\par
\tab  * 4) the catchall symbol "*" can be used\par
\tab  * 5) execution will start with transport dataType and THEN continue down to "*" if needed\par
\tab  */\par
\tab prefilters = \{\},\par
\par
\tab /* Transports bindings\par
\tab  * 1) key is the dataType\par
\tab  * 2) the catchall symbol "*" can be used\par
\tab  * 3) selection will start with transport dataType and THEN go to "*" if needed\par
\tab  */\par
\tab transports = \{\},\par
\par
\tab // Avoid comment-prolog char sequence (#10098); must appease lint and evade compression\par
\tab allTypes = "*/".concat( "*" ),\par
\par
\tab // Anchor tag for parsing the document origin\par
\tab originAnchor = document.createElement( "a" );\par
\par
originAnchor.href = location.href;\par
\par
// Base "constructor" for jQuery.ajaxPrefilter and jQuery.ajaxTransport\par
function addToPrefiltersOrTransports( structure ) \{\par
\par
\tab // dataTypeExpression is optional and defaults to "*"\par
\tab return function( dataTypeExpression, func ) \{\par
\par
\tab\tab if ( typeof dataTypeExpression !== "string" ) \{\par
\tab\tab\tab func = dataTypeExpression;\par
\tab\tab\tab dataTypeExpression = "*";\par
\tab\tab\}\par
\par
\tab\tab var dataType,\par
\tab\tab\tab i = 0,\par
\tab\tab\tab dataTypes = dataTypeExpression.toLowerCase().match( rnothtmlwhite ) || [];\par
\par
\tab\tab if ( isFunction( func ) ) \{\par
\par
\tab\tab\tab // For each dataType in the dataTypeExpression\par
\tab\tab\tab while ( ( dataType = dataTypes[ i++ ] ) ) \{\par
\par
\tab\tab\tab\tab // Prepend if requested\par
\tab\tab\tab\tab if ( dataType[ 0 ] === "+" ) \{\par
\tab\tab\tab\tab\tab dataType = dataType.slice( 1 ) || "*";\par
\tab\tab\tab\tab\tab ( structure[ dataType ] = structure[ dataType ] || [] ).unshift( func );\par
\par
\tab\tab\tab\tab // Otherwise append\par
\tab\tab\tab\tab\} else \{\par
\tab\tab\tab\tab\tab ( structure[ dataType ] = structure[ dataType ] || [] ).push( func );\par
\tab\tab\tab\tab\}\par
\tab\tab\tab\}\par
\tab\tab\}\par
\tab\};\par
\}\par
\par
// Base inspection function for prefilters and transports\par
function inspectPrefiltersOrTransports( structure, options, originalOptions, jqXHR ) \{\par
\par
\tab var inspected = \{\},\par
\tab\tab seekingTransport = ( structure === transports );\par
\par
\tab function inspect( dataType ) \{\par
\tab\tab var selected;\par
\tab\tab inspected[ dataType ] = true;\par
\tab\tab jQuery.each( structure[ dataType ] || [], function( _, prefilterOrFactory ) \{\par
\tab\tab\tab var dataTypeOrTransport = prefilterOrFactory( options, originalOptions, jqXHR );\par
\tab\tab\tab if ( typeof dataTypeOrTransport === "string" &&\par
\tab\tab\tab\tab !seekingTransport && !inspected[ dataTypeOrTransport ] ) \{\par
\par
\tab\tab\tab\tab options.dataTypes.unshift( dataTypeOrTransport );\par
\tab\tab\tab\tab inspect( dataTypeOrTransport );\par
\tab\tab\tab\tab return false;\par
\tab\tab\tab\} else if ( seekingTransport ) \{\par
\tab\tab\tab\tab return !( selected = dataTypeOrTransport );\par
\tab\tab\tab\}\par
\tab\tab\} );\par
\tab\tab return selected;\par
\tab\}\par
\par
\tab return inspect( options.dataTypes[ 0 ] ) || !inspected[ "*" ] && inspect( "*" );\par
\}\par
\par
// A special extend for ajax options\par
// that takes "flat" options (not to be deep extended)\par
// Fixes #9887\par
function ajaxExtend( target, src ) \{\par
\tab var key, deep,\par
\tab\tab flatOptions = jQuery.ajaxSettings.flatOptions || \{\};\par
\par
\tab for ( key in src ) \{\par
\tab\tab if ( src[ key ] !== undefined ) \{\par
\tab\tab\tab ( flatOptions[ key ] ? target : ( deep || ( deep = \{\} ) ) )[ key ] = src[ key ];\par
\tab\tab\}\par
\tab\}\par
\tab if ( deep ) \{\par
\tab\tab jQuery.extend( true, target, deep );\par
\tab\}\par
\par
\tab return target;\par
\}\par
\par
/* Handles responses to an ajax request:\par
 * - finds the right dataType (mediates between content-type and expected dataType)\par
 * - returns the corresponding response\par
 */\par
function ajaxHandleResponses( s, jqXHR, responses ) \{\par
\par
\tab var ct, type, finalDataType, firstDataType,\par
\tab\tab contents = s.contents,\par
\tab\tab dataTypes = s.dataTypes;\par
\par
\tab // Remove auto dataType and get content-type in the process\par
\tab while ( dataTypes[ 0 ] === "*" ) \{\par
\tab\tab dataTypes.shift();\par
\tab\tab if ( ct === undefined ) \{\par
\tab\tab\tab ct = s.mimeType || jqXHR.getResponseHeader( "Content-Type" );\par
\tab\tab\}\par
\tab\}\par
\par
\tab // Check if we're dealing with a known content-type\par
\tab if ( ct ) \{\par
\tab\tab for ( type in contents ) \{\par
\tab\tab\tab if ( contents[ type ] && contents[ type ].test( ct ) ) \{\par
\tab\tab\tab\tab dataTypes.unshift( type );\par
\tab\tab\tab\tab break;\par
\tab\tab\tab\}\par
\tab\tab\}\par
\tab\}\par
\par
\tab // Check to see if we have a response for the expected dataType\par
\tab if ( dataTypes[ 0 ] in responses ) \{\par
\tab\tab finalDataType = dataTypes[ 0 ];\par
\tab\} else \{\par
\par
\tab\tab // Try convertible dataTypes\par
\tab\tab for ( type in responses ) \{\par
\tab\tab\tab if ( !dataTypes[ 0 ] || s.converters[ type + " " + dataTypes[ 0 ] ] ) \{\par
\tab\tab\tab\tab finalDataType = type;\par
\tab\tab\tab\tab break;\par
\tab\tab\tab\}\par
\tab\tab\tab if ( !firstDataType ) \{\par
\tab\tab\tab\tab firstDataType = type;\par
\tab\tab\tab\}\par
\tab\tab\}\par
\par
\tab\tab // Or just use first one\par
\tab\tab finalDataType = finalDataType || firstDataType;\par
\tab\}\par
\par
\tab // If we found a dataType\par
\tab // We add the dataType to the list if needed\par
\tab // and return the corresponding response\par
\tab if ( finalDataType ) \{\par
\tab\tab if ( finalDataType !== dataTypes[ 0 ] ) \{\par
\tab\tab\tab dataTypes.unshift( finalDataType );\par
\tab\tab\}\par
\tab\tab return responses[ finalDataType ];\par
\tab\}\par
\}\par
\par
/* Chain conversions given the request and the original response\par
 * Also sets the responseXXX fields on the jqXHR instance\par
 */\par
function ajaxConvert( s, response, jqXHR, isSuccess ) \{\par
\tab var conv2, current, conv, tmp, prev,\par
\tab\tab converters = \{\},\par
\par
\tab\tab // Work with a copy of dataTypes in case we need to modify it for conversion\par
\tab\tab dataTypes = s.dataTypes.slice();\par
\par
\tab // Create converters map with lowercased keys\par
\tab if ( dataTypes[ 1 ] ) \{\par
\tab\tab for ( conv in s.converters ) \{\par
\tab\tab\tab converters[ conv.toLowerCase() ] = s.converters[ conv ];\par
\tab\tab\}\par
\tab\}\par
\par
\tab current = dataTypes.shift();\par
\par
\tab // Convert to each sequential dataType\par
\tab while ( current ) \{\par
\par
\tab\tab if ( s.responseFields[ current ] ) \{\par
\tab\tab\tab jqXHR[ s.responseFields[ current ] ] = response;\par
\tab\tab\}\par
\par
\tab\tab // Apply the dataFilter if provided\par
\tab\tab if ( !prev && isSuccess && s.dataFilter ) \{\par
\tab\tab\tab response = s.dataFilter( response, s.dataType );\par
\tab\tab\}\par
\par
\tab\tab prev = current;\par
\tab\tab current = dataTypes.shift();\par
\par
\tab\tab if ( current ) \{\par
\par
\tab\tab\tab // There's only work to do if current dataType is non-auto\par
\tab\tab\tab if ( current === "*" ) \{\par
\par
\tab\tab\tab\tab current = prev;\par
\par
\tab\tab\tab // Convert response if prev dataType is non-auto and differs from current\par
\tab\tab\tab\} else if ( prev !== "*" && prev !== current ) \{\par
\par
\tab\tab\tab\tab // Seek a direct converter\par
\tab\tab\tab\tab conv = converters[ prev + " " + current ] || converters[ "* " + current ];\par
\par
\tab\tab\tab\tab // If none found, seek a pair\par
\tab\tab\tab\tab if ( !conv ) \{\par
\tab\tab\tab\tab\tab for ( conv2 in converters ) \{\par
\par
\tab\tab\tab\tab\tab\tab // If conv2 outputs current\par
\tab\tab\tab\tab\tab\tab tmp = conv2.split( " " );\par
\tab\tab\tab\tab\tab\tab if ( tmp[ 1 ] === current ) \{\par
\par
\tab\tab\tab\tab\tab\tab\tab // If prev can be converted to accepted input\par
\tab\tab\tab\tab\tab\tab\tab conv = converters[ prev + " " + tmp[ 0 ] ] ||\par
\tab\tab\tab\tab\tab\tab\tab\tab converters[ "* " + tmp[ 0 ] ];\par
\tab\tab\tab\tab\tab\tab\tab if ( conv ) \{\par
\par
\tab\tab\tab\tab\tab\tab\tab\tab // Condense equivalence converters\par
\tab\tab\tab\tab\tab\tab\tab\tab if ( conv === true ) \{\par
\tab\tab\tab\tab\tab\tab\tab\tab\tab conv = converters[ conv2 ];\par
\par
\tab\tab\tab\tab\tab\tab\tab\tab // Otherwise, insert the intermediate dataType\par
\tab\tab\tab\tab\tab\tab\tab\tab\} else if ( converters[ conv2 ] !== true ) \{\par
\tab\tab\tab\tab\tab\tab\tab\tab\tab current = tmp[ 0 ];\par
\tab\tab\tab\tab\tab\tab\tab\tab\tab dataTypes.unshift( tmp[ 1 ] );\par
\tab\tab\tab\tab\tab\tab\tab\tab\}\par
\tab\tab\tab\tab\tab\tab\tab\tab break;\par
\tab\tab\tab\tab\tab\tab\tab\}\par
\tab\tab\tab\tab\tab\tab\}\par
\tab\tab\tab\tab\tab\}\par
\tab\tab\tab\tab\}\par
\par
\tab\tab\tab\tab // Apply converter (if not an equivalence)\par
\tab\tab\tab\tab if ( conv !== true ) \{\par
\par
\tab\tab\tab\tab\tab // Unless errors are allowed to bubble, catch and return them\par
\tab\tab\tab\tab\tab if ( conv && s.throws ) \{\par
\tab\tab\tab\tab\tab\tab response = conv( response );\par
\tab\tab\tab\tab\tab\} else \{\par
\tab\tab\tab\tab\tab\tab try \{\par
\tab\tab\tab\tab\tab\tab\tab response = conv( response );\par
\tab\tab\tab\tab\tab\tab\} catch ( e ) \{\par
\tab\tab\tab\tab\tab\tab\tab return \{\par
\tab\tab\tab\tab\tab\tab\tab\tab state: "parsererror",\par
\tab\tab\tab\tab\tab\tab\tab\tab error: conv ? e : "No conversion from " + prev + " to " + current\par
\tab\tab\tab\tab\tab\tab\tab\};\par
\tab\tab\tab\tab\tab\tab\}\par
\tab\tab\tab\tab\tab\}\par
\tab\tab\tab\tab\}\par
\tab\tab\tab\}\par
\tab\tab\}\par
\tab\}\par
\par
\tab return \{ state: "success", data: response \};\par
\}\par
\par
jQuery.extend( \{\par
\par
\tab // Counter for holding the number of active queries\par
\tab active: 0,\par
\par
\tab // Last-Modified header cache for next request\par
\tab lastModified: \{\},\par
\tab etag: \{\},\par
\par
\tab ajaxSettings: \{\par
\tab\tab url: location.href,\par
\tab\tab type: "GET",\par
\tab\tab isLocal: rlocalProtocol.test( location.protocol ),\par
\tab\tab global: true,\par
\tab\tab processData: true,\par
\tab\tab async: true,\par
\tab\tab contentType: "application/x-www-form-urlencoded; charset=UTF-8",\par
\par
\tab\tab /*\par
\tab\tab timeout: 0,\par
\tab\tab data: null,\par
\tab\tab dataType: null,\par
\tab\tab username: null,\par
\tab\tab password: null,\par
\tab\tab cache: null,\par
\tab\tab throws: false,\par
\tab\tab traditional: false,\par
\tab\tab headers: \{\},\par
\tab\tab */\par
\par
\tab\tab accepts: \{\par
\tab\tab\tab "*": allTypes,\par
\tab\tab\tab text: "text/plain",\par
\tab\tab\tab html: "text/html",\par
\tab\tab\tab xml: "application/xml, text/xml",\par
\tab\tab\tab json: "application/json, text/javascript"\par
\tab\tab\},\par
\par
\tab\tab contents: \{\par
\tab\tab\tab xml: /\\bxml\\b/,\par
\tab\tab\tab html: /\\bhtml/,\par
\tab\tab\tab json: /\\bjson\\b/\par
\tab\tab\},\par
\par
\tab\tab responseFields: \{\par
\tab\tab\tab xml: "responseXML",\par
\tab\tab\tab text: "responseText",\par
\tab\tab\tab json: "responseJSON"\par
\tab\tab\},\par
\par
\tab\tab // Data converters\par
\tab\tab // Keys separate source (or catchall "*") and destination types with a single space\par
\tab\tab converters: \{\par
\par
\tab\tab\tab // Convert anything to text\par
\tab\tab\tab "* text": String,\par
\par
\tab\tab\tab // Text to html (true = no transformation)\par
\tab\tab\tab "text html": true,\par
\par
\tab\tab\tab // Evaluate text as a json expression\par
\tab\tab\tab "text json": JSON.parse,\par
\par
\tab\tab\tab // Parse text as xml\par
\tab\tab\tab "text xml": jQuery.parseXML\par
\tab\tab\},\par
\par
\tab\tab // For options that shouldn't be deep extended:\par
\tab\tab // you can add your own custom options here if\par
\tab\tab // and when you create one that shouldn't be\par
\tab\tab // deep extended (see ajaxExtend)\par
\tab\tab flatOptions: \{\par
\tab\tab\tab url: true,\par
\tab\tab\tab context: true\par
\tab\tab\}\par
\tab\},\par
\par
\tab // Creates a full fledged settings object into target\par
\tab // with both ajaxSettings and settings fields.\par
\tab // If target is omitted, writes into ajaxSettings.\par
\tab ajaxSetup: function( target, settings ) \{\par
\tab\tab return settings ?\par
\par
\tab\tab\tab // Building a settings object\par
\tab\tab\tab ajaxExtend( ajaxExtend( target, jQuery.ajaxSettings ), settings ) :\par
\par
\tab\tab\tab // Extending ajaxSettings\par
\tab\tab\tab ajaxExtend( jQuery.ajaxSettings, target );\par
\tab\},\par
\par
\tab ajaxPrefilter: addToPrefiltersOrTransports( prefilters ),\par
\tab ajaxTransport: addToPrefiltersOrTransports( transports ),\par
\par
\tab // Main method\par
\tab ajax: function( url, options ) \{\par
\par
\tab\tab // If url is an object, simulate pre-1.5 signature\par
\tab\tab if ( typeof url === "object" ) \{\par
\tab\tab\tab options = url;\par
\tab\tab\tab url = undefined;\par
\tab\tab\}\par
\par
\tab\tab // Force options to be an object\par
\tab\tab options = options || \{\};\par
\par
\tab\tab var transport,\par
\par
\tab\tab\tab // URL without anti-cache param\par
\tab\tab\tab cacheURL,\par
\par
\tab\tab\tab // Response headers\par
\tab\tab\tab responseHeadersString,\par
\tab\tab\tab responseHeaders,\par
\par
\tab\tab\tab // timeout handle\par
\tab\tab\tab timeoutTimer,\par
\par
\tab\tab\tab // Url cleanup var\par
\tab\tab\tab urlAnchor,\par
\par
\tab\tab\tab // Request state (becomes false upon send and true upon completion)\par
\tab\tab\tab completed,\par
\par
\tab\tab\tab // To know if global events are to be dispatched\par
\tab\tab\tab fireGlobals,\par
\par
\tab\tab\tab // Loop variable\par
\tab\tab\tab i,\par
\par
\tab\tab\tab // uncached part of the url\par
\tab\tab\tab uncached,\par
\par
\tab\tab\tab // Create the final options object\par
\tab\tab\tab s = jQuery.ajaxSetup( \{\}, options ),\par
\par
\tab\tab\tab // Callbacks context\par
\tab\tab\tab callbackContext = s.context || s,\par
\par
\tab\tab\tab // Context for global events is callbackContext if it is a DOM node or jQuery collection\par
\tab\tab\tab globalEventContext = s.context &&\par
\tab\tab\tab\tab ( callbackContext.nodeType || callbackContext.jquery ) ?\par
\tab\tab\tab\tab jQuery( callbackContext ) :\par
\tab\tab\tab\tab jQuery.event,\par
\par
\tab\tab\tab // Deferreds\par
\tab\tab\tab deferred = jQuery.Deferred(),\par
\tab\tab\tab completeDeferred = jQuery.Callbacks( "once memory" ),\par
\par
\tab\tab\tab // Status-dependent callbacks\par
\tab\tab\tab statusCode = s.statusCode || \{\},\par
\par
\tab\tab\tab // Headers (they are sent all at once)\par
\tab\tab\tab requestHeaders = \{\},\par
\tab\tab\tab requestHeadersNames = \{\},\par
\par
\tab\tab\tab // Default abort message\par
\tab\tab\tab strAbort = "canceled",\par
\par
\tab\tab\tab // Fake xhr\par
\tab\tab\tab jqXHR = \{\par
\tab\tab\tab\tab readyState: 0,\par
\par
\tab\tab\tab\tab // Builds headers hashtable if needed\par
\tab\tab\tab\tab getResponseHeader: function( key ) \{\par
\tab\tab\tab\tab\tab var match;\par
\tab\tab\tab\tab\tab if ( completed ) \{\par
\tab\tab\tab\tab\tab\tab if ( !responseHeaders ) \{\par
\tab\tab\tab\tab\tab\tab\tab responseHeaders = \{\};\par
\tab\tab\tab\tab\tab\tab\tab while ( ( match = rheaders.exec( responseHeadersString ) ) ) \{\par
\tab\tab\tab\tab\tab\tab\tab\tab responseHeaders[ match[ 1 ].toLowerCase() + " " ] =\par
\tab\tab\tab\tab\tab\tab\tab\tab\tab ( responseHeaders[ match[ 1 ].toLowerCase() + " " ] || [] )\par
\tab\tab\tab\tab\tab\tab\tab\tab\tab\tab .concat( match[ 2 ] );\par
\tab\tab\tab\tab\tab\tab\tab\}\par
\tab\tab\tab\tab\tab\tab\}\par
\tab\tab\tab\tab\tab\tab match = responseHeaders[ key.toLowerCase() + " " ];\par
\tab\tab\tab\tab\tab\}\par
\tab\tab\tab\tab\tab return match == null ? null : match.join( ", " );\par
\tab\tab\tab\tab\},\par
\par
\tab\tab\tab\tab // Raw string\par
\tab\tab\tab\tab getAllResponseHeaders: function() \{\par
\tab\tab\tab\tab\tab return completed ? responseHeadersString : null;\par
\tab\tab\tab\tab\},\par
\par
\tab\tab\tab\tab // Caches the header\par
\tab\tab\tab\tab setRequestHeader: function( name, value ) \{\par
\tab\tab\tab\tab\tab if ( completed == null ) \{\par
\tab\tab\tab\tab\tab\tab name = requestHeadersNames[ name.toLowerCase() ] =\par
\tab\tab\tab\tab\tab\tab\tab requestHeadersNames[ name.toLowerCase() ] || name;\par
\tab\tab\tab\tab\tab\tab requestHeaders[ name ] = value;\par
\tab\tab\tab\tab\tab\}\par
\tab\tab\tab\tab\tab return this;\par
\tab\tab\tab\tab\},\par
\par
\tab\tab\tab\tab // Overrides response content-type header\par
\tab\tab\tab\tab overrideMimeType: function( type ) \{\par
\tab\tab\tab\tab\tab if ( completed == null ) \{\par
\tab\tab\tab\tab\tab\tab s.mimeType = type;\par
\tab\tab\tab\tab\tab\}\par
\tab\tab\tab\tab\tab return this;\par
\tab\tab\tab\tab\},\par
\par
\tab\tab\tab\tab // Status-dependent callbacks\par
\tab\tab\tab\tab statusCode: function( map ) \{\par
\tab\tab\tab\tab\tab var code;\par
\tab\tab\tab\tab\tab if ( map ) \{\par
\tab\tab\tab\tab\tab\tab if ( completed ) \{\par
\par
\tab\tab\tab\tab\tab\tab\tab // Execute the appropriate callbacks\par
\tab\tab\tab\tab\tab\tab\tab jqXHR.always( map[ jqXHR.status ] );\par
\tab\tab\tab\tab\tab\tab\} else \{\par
\par
\tab\tab\tab\tab\tab\tab\tab // Lazy-add the new callbacks in a way that preserves old ones\par
\tab\tab\tab\tab\tab\tab\tab for ( code in map ) \{\par
\tab\tab\tab\tab\tab\tab\tab\tab statusCode[ code ] = [ statusCode[ code ], map[ code ] ];\par
\tab\tab\tab\tab\tab\tab\tab\}\par
\tab\tab\tab\tab\tab\tab\}\par
\tab\tab\tab\tab\tab\}\par
\tab\tab\tab\tab\tab return this;\par
\tab\tab\tab\tab\},\par
\par
\tab\tab\tab\tab // Cancel the request\par
\tab\tab\tab\tab abort: function( statusText ) \{\par
\tab\tab\tab\tab\tab var finalText = statusText || strAbort;\par
\tab\tab\tab\tab\tab if ( transport ) \{\par
\tab\tab\tab\tab\tab\tab transport.abort( finalText );\par
\tab\tab\tab\tab\tab\}\par
\tab\tab\tab\tab\tab done( 0, finalText );\par
\tab\tab\tab\tab\tab return this;\par
\tab\tab\tab\tab\}\par
\tab\tab\tab\};\par
\par
\tab\tab // Attach deferreds\par
\tab\tab deferred.promise( jqXHR );\par
\par
\tab\tab // Add protocol if not provided (prefilters might expect it)\par
\tab\tab // Handle falsy url in the settings object (#10093: consistency with old signature)\par
\tab\tab // We also use the url parameter if available\par
\tab\tab s.url = ( ( url || s.url || location.href ) + "" )\par
\tab\tab\tab .replace( rprotocol, location.protocol + "//" );\par
\par
\tab\tab // Alias method option to type as per ticket #12004\par
\tab\tab s.type = options.method || options.type || s.method || s.type;\par
\par
\tab\tab // Extract dataTypes list\par
\tab\tab s.dataTypes = ( s.dataType || "*" ).toLowerCase().match( rnothtmlwhite ) || [ "" ];\par
\par
\tab\tab // A cross-domain request is in order when the origin doesn't match the current origin.\par
\tab\tab if ( s.crossDomain == null ) \{\par
\tab\tab\tab urlAnchor = document.createElement( "a" );\par
\par
\tab\tab\tab // Support: IE <=8 - 11, Edge 12 - 15\par
\tab\tab\tab // IE throws exception on accessing the href property if url is malformed,\par
\tab\tab\tab // e.g. {{\field{\*\fldinst{HYPERLINK http://example.com:80x/ }}{\fldrslt{http://example.com:80x/\ul0\cf0}}}}\f0\fs22\par
\tab\tab\tab try \{\par
\tab\tab\tab\tab urlAnchor.href = s.url;\par
\par
\tab\tab\tab\tab // Support: IE <=8 - 11 only\par
\tab\tab\tab\tab // Anchor's host property isn't correctly set when s.url is relative\par
\tab\tab\tab\tab urlAnchor.href = urlAnchor.href;\par
\tab\tab\tab\tab s.crossDomain = originAnchor.protocol + "//" + originAnchor.host !==\par
\tab\tab\tab\tab\tab urlAnchor.protocol + "//" + urlAnchor.host;\par
\tab\tab\tab\} catch ( e ) \{\par
\par
\tab\tab\tab\tab // If there is an error parsing the URL, assume it is crossDomain,\par
\tab\tab\tab\tab // it can be rejected by the transport if it is invalid\par
\tab\tab\tab\tab s.crossDomain = true;\par
\tab\tab\tab\}\par
\tab\tab\}\par
\par
\tab\tab // Convert data if not already a string\par
\tab\tab if ( s.data && s.processData && typeof s.data !== "string" ) \{\par
\tab\tab\tab s.data = jQuery.param( s.data, s.traditional );\par
\tab\tab\}\par
\par
\tab\tab // Apply prefilters\par
\tab\tab inspectPrefiltersOrTransports( prefilters, s, options, jqXHR );\par
\par
\tab\tab // If request was aborted inside a prefilter, stop there\par
\tab\tab if ( completed ) \{\par
\tab\tab\tab return jqXHR;\par
\tab\tab\}\par
\par
\tab\tab // We can fire global events as of now if asked to\par
\tab\tab // Don't fire events if jQuery.event is undefined in an AMD-usage scenario (#15118)\par
\tab\tab fireGlobals = jQuery.event && s.global;\par
\par
\tab\tab // Watch for a new set of requests\par
\tab\tab if ( fireGlobals && jQuery.active++ === 0 ) \{\par
\tab\tab\tab jQuery.event.trigger( "ajaxStart" );\par
\tab\tab\}\par
\par
\tab\tab // Uppercase the type\par
\tab\tab s.type = s.type.toUpperCase();\par
\par
\tab\tab // Determine if request has content\par
\tab\tab s.hasContent = !rnoContent.test( s.type );\par
\par
\tab\tab // Save the URL in case we're toying with the If-Modified-Since\par
\tab\tab // and/or If-None-Match header later on\par
\tab\tab // Remove hash to simplify url manipulation\par
\tab\tab cacheURL = s.url.replace( rhash, "" );\par
\par
\tab\tab // More options handling for requests with no content\par
\tab\tab if ( !s.hasContent ) \{\par
\par
\tab\tab\tab // Remember the hash so we can put it back\par
\tab\tab\tab uncached = s.url.slice( cacheURL.length );\par
\par
\tab\tab\tab // If data is available and should be processed, append data to url\par
\tab\tab\tab if ( s.data && ( s.processData || typeof s.data === "string" ) ) \{\par
\tab\tab\tab\tab cacheURL += ( rquery.test( cacheURL ) ? "&" : "?" ) + s.data;\par
\par
\tab\tab\tab\tab // #9682: remove data so that it's not used in an eventual retry\par
\tab\tab\tab\tab delete s.data;\par
\tab\tab\tab\}\par
\par
\tab\tab\tab // Add or update anti-cache param if needed\par
\tab\tab\tab if ( s.cache === false ) \{\par
\tab\tab\tab\tab cacheURL = cacheURL.replace( rantiCache, "$1" );\par
\tab\tab\tab\tab uncached = ( rquery.test( cacheURL ) ? "&" : "?" ) + "_=" + ( nonce.guid++ ) +\par
\tab\tab\tab\tab\tab uncached;\par
\tab\tab\tab\}\par
\par
\tab\tab\tab // Put hash and anti-cache on the URL that will be requested (gh-1732)\par
\tab\tab\tab s.url = cacheURL + uncached;\par
\par
\tab\tab // Change '%20' to '+' if this is encoded form body content (gh-2658)\par
\tab\tab\} else if ( s.data && s.processData &&\par
\tab\tab\tab ( s.contentType || "" ).indexOf( "application/x-www-form-urlencoded" ) === 0 ) \{\par
\tab\tab\tab s.data = s.data.replace( r20, "+" );\par
\tab\tab\}\par
\par
\tab\tab // Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.\par
\tab\tab if ( s.ifModified ) \{\par
\tab\tab\tab if ( jQuery.lastModified[ cacheURL ] ) \{\par
\tab\tab\tab\tab jqXHR.setRequestHeader( "If-Modified-Since", jQuery.lastModified[ cacheURL ] );\par
\tab\tab\tab\}\par
\tab\tab\tab if ( jQuery.etag[ cacheURL ] ) \{\par
\tab\tab\tab\tab jqXHR.setRequestHeader( "If-None-Match", jQuery.etag[ cacheURL ] );\par
\tab\tab\tab\}\par
\tab\tab\}\par
\par
\tab\tab // Set the correct header, if data is being sent\par
\tab\tab if ( s.data && s.hasContent && s.contentType !== false || options.contentType ) \{\par
\tab\tab\tab jqXHR.setRequestHeader( "Content-Type", s.contentType );\par
\tab\tab\}\par
\par
\tab\tab // Set the Accepts header for the server, depending on the dataType\par
\tab\tab jqXHR.setRequestHeader(\par
\tab\tab\tab "Accept",\par
\tab\tab\tab s.dataTypes[ 0 ] && s.accepts[ s.dataTypes[ 0 ] ] ?\par
\tab\tab\tab\tab s.accepts[ s.dataTypes[ 0 ] ] +\par
\tab\tab\tab\tab\tab ( s.dataTypes[ 0 ] !== "*" ? ", " + allTypes + "; q=0.01" : "" ) :\par
\tab\tab\tab\tab s.accepts[ "*" ]\par
\tab\tab );\par
\par
\tab\tab // Check for headers option\par
\tab\tab for ( i in s.headers ) \{\par
\tab\tab\tab jqXHR.setRequestHeader( i, s.headers[ i ] );\par
\tab\tab\}\par
\par
\tab\tab // Allow custom headers/mimetypes and early abort\par
\tab\tab if ( s.beforeSend &&\par
\tab\tab\tab ( s.beforeSend.call( callbackContext, jqXHR, s ) === false || completed ) ) \{\par
\par
\tab\tab\tab // Abort if not done already and return\par
\tab\tab\tab return jqXHR.abort();\par
\tab\tab\}\par
\par
\tab\tab // Aborting is no longer a cancellation\par
\tab\tab strAbort = "abort";\par
\par
\tab\tab // Install callbacks on deferreds\par
\tab\tab completeDeferred.add( s.complete );\par
\tab\tab jqXHR.done( s.success );\par
\tab\tab jqXHR.fail( s.error );\par
\par
\tab\tab // Get transport\par
\tab\tab transport = inspectPrefiltersOrTransports( transports, s, options, jqXHR );\par
\par
\tab\tab // If no transport, we auto-abort\par
\tab\tab if ( !transport ) \{\par
\tab\tab\tab done( -1, "No Transport" );\par
\tab\tab\} else \{\par
\tab\tab\tab jqXHR.readyState = 1;\par
\par
\tab\tab\tab // Send global event\par
\tab\tab\tab if ( fireGlobals ) \{\par
\tab\tab\tab\tab globalEventContext.trigger( "ajaxSend", [ jqXHR, s ] );\par
\tab\tab\tab\}\par
\par
\tab\tab\tab // If request was aborted inside ajaxSend, stop there\par
\tab\tab\tab if ( completed ) \{\par
\tab\tab\tab\tab return jqXHR;\par
\tab\tab\tab\}\par
\par
\tab\tab\tab // Timeout\par
\tab\tab\tab if ( s.async && s.timeout > 0 ) \{\par
\tab\tab\tab\tab timeoutTimer = window.setTimeout( function() \{\par
\tab\tab\tab\tab\tab jqXHR.abort( "timeout" );\par
\tab\tab\tab\tab\}, s.timeout );\par
\tab\tab\tab\}\par
\par
\tab\tab\tab try \{\par
\tab\tab\tab\tab completed = false;\par
\tab\tab\tab\tab transport.send( requestHeaders, done );\par
\tab\tab\tab\} catch ( e ) \{\par
\par
\tab\tab\tab\tab // Rethrow post-completion exceptions\par
\tab\tab\tab\tab if ( completed ) \{\par
\tab\tab\tab\tab\tab throw e;\par
\tab\tab\tab\tab\}\par
\par
\tab\tab\tab\tab // Propagate others as results\par
\tab\tab\tab\tab done( -1, e );\par
\tab\tab\tab\}\par
\tab\tab\}\par
\par
\tab\tab // Callback for when everything is done\par
\tab\tab function done( status, nativeStatusText, responses, headers ) \{\par
\tab\tab\tab var isSuccess, success, error, response, modified,\par
\tab\tab\tab\tab statusText = nativeStatusText;\par
\par
\tab\tab\tab // Ignore repeat invocations\par
\tab\tab\tab if ( completed ) \{\par
\tab\tab\tab\tab return;\par
\tab\tab\tab\}\par
\par
\tab\tab\tab completed = true;\par
\par
\tab\tab\tab // Clear timeout if it exists\par
\tab\tab\tab if ( timeoutTimer ) \{\par
\tab\tab\tab\tab window.clearTimeout( timeoutTimer );\par
\tab\tab\tab\}\par
\par
\tab\tab\tab // Dereference transport for early garbage collection\par
\tab\tab\tab // (no matter how long the jqXHR object will be used)\par
\tab\tab\tab transport = undefined;\par
\par
\tab\tab\tab // Cache response headers\par
\tab\tab\tab responseHeadersString = headers || "";\par
\par
\tab\tab\tab // Set readyState\par
\tab\tab\tab jqXHR.readyState = status > 0 ? 4 : 0;\par
\par
\tab\tab\tab // Determine if successful\par
\tab\tab\tab isSuccess = status >= 200 && status < 300 || status === 304;\par
\par
\tab\tab\tab // Get response data\par
\tab\tab\tab if ( responses ) \{\par
\tab\tab\tab\tab response = ajaxHandleResponses( s, jqXHR, responses );\par
\tab\tab\tab\}\par
\par
\tab\tab\tab // Use a noop converter for missing script but not if jsonp\par
\tab\tab\tab if ( !isSuccess &&\par
\tab\tab\tab\tab jQuery.inArray( "script", s.dataTypes ) > -1 &&\par
\tab\tab\tab\tab jQuery.inArray( "json", s.dataTypes ) < 0 ) \{\par
\tab\tab\tab\tab s.converters[ "text script" ] = function() \{\};\par
\tab\tab\tab\}\par
\par
\tab\tab\tab // Convert no matter what (that way responseXXX fields are always set)\par
\tab\tab\tab response = ajaxConvert( s, response, jqXHR, isSuccess );\par
\par
\tab\tab\tab // If successful, handle type chaining\par
\tab\tab\tab if ( isSuccess ) \{\par
\par
\tab\tab\tab\tab // Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.\par
\tab\tab\tab\tab if ( s.ifModified ) \{\par
\tab\tab\tab\tab\tab modified = jqXHR.getResponseHeader( "Last-Modified" );\par
\tab\tab\tab\tab\tab if ( modified ) \{\par
\tab\tab\tab\tab\tab\tab jQuery.lastModified[ cacheURL ] = modified;\par
\tab\tab\tab\tab\tab\}\par
\tab\tab\tab\tab\tab modified = jqXHR.getResponseHeader( "etag" );\par
\tab\tab\tab\tab\tab if ( modified ) \{\par
\tab\tab\tab\tab\tab\tab jQuery.etag[ cacheURL ] = modified;\par
\tab\tab\tab\tab\tab\}\par
\tab\tab\tab\tab\}\par
\par
\tab\tab\tab\tab // if no content\par
\tab\tab\tab\tab if ( status === 204 || s.type === "HEAD" ) \{\par
\tab\tab\tab\tab\tab statusText = "nocontent";\par
\par
\tab\tab\tab\tab // if not modified\par
\tab\tab\tab\tab\} else if ( status === 304 ) \{\par
\tab\tab\tab\tab\tab statusText = "notmodified";\par
\par
\tab\tab\tab\tab // If we have data, let's convert it\par
\tab\tab\tab\tab\} else \{\par
\tab\tab\tab\tab\tab statusText = response.state;\par
\tab\tab\tab\tab\tab success = response.data;\par
\tab\tab\tab\tab\tab error = response.error;\par
\tab\tab\tab\tab\tab isSuccess = !error;\par
\tab\tab\tab\tab\}\par
\tab\tab\tab\} else \{\par
\par
\tab\tab\tab\tab // Extract error from statusText and normalize for non-aborts\par
\tab\tab\tab\tab error = statusText;\par
\tab\tab\tab\tab if ( status || !statusText ) \{\par
\tab\tab\tab\tab\tab statusText = "error";\par
\tab\tab\tab\tab\tab if ( status < 0 ) \{\par
\tab\tab\tab\tab\tab\tab status = 0;\par
\tab\tab\tab\tab\tab\}\par
\tab\tab\tab\tab\}\par
\tab\tab\tab\}\par
\par
\tab\tab\tab // Set data for the fake xhr object\par
\tab\tab\tab jqXHR.status = status;\par
\tab\tab\tab jqXHR.statusText = ( nativeStatusText || statusText ) + "";\par
\par
\tab\tab\tab // Success/Error\par
\tab\tab\tab if ( isSuccess ) \{\par
\tab\tab\tab\tab deferred.resolveWith( callbackContext, [ success, statusText, jqXHR ] );\par
\tab\tab\tab\} else \{\par
\tab\tab\tab\tab deferred.rejectWith( callbackContext, [ jqXHR, statusText, error ] );\par
\tab\tab\tab\}\par
\par
\tab\tab\tab // Status-dependent callbacks\par
\tab\tab\tab jqXHR.statusCode( statusCode );\par
\tab\tab\tab statusCode = undefined;\par
\par
\tab\tab\tab if ( fireGlobals ) \{\par
\tab\tab\tab\tab globalEventContext.trigger( isSuccess ? "ajaxSuccess" : "ajaxError",\par
\tab\tab\tab\tab\tab [ jqXHR, s, isSuccess ? success : error ] );\par
\tab\tab\tab\}\par
\par
\tab\tab\tab // Complete\par
\tab\tab\tab completeDeferred.fireWith( callbackContext, [ jqXHR, statusText ] );\par
\par
\tab\tab\tab if ( fireGlobals ) \{\par
\tab\tab\tab\tab globalEventContext.trigger( "ajaxComplete", [ jqXHR, s ] );\par
\par
\tab\tab\tab\tab // Handle the global AJAX counter\par
\tab\tab\tab\tab if ( !( --jQuery.active ) ) \{\par
\tab\tab\tab\tab\tab jQuery.event.trigger( "ajaxStop" );\par
\tab\tab\tab\tab\}\par
\tab\tab\tab\}\par
\tab\tab\}\par
\par
\tab\tab return jqXHR;\par
\tab\},\par
\par
\tab getJSON: function( url, data, callback ) \{\par
\tab\tab return jQuery.get( url, data, callback, "json" );\par
\tab\},\par
\par
\tab getScript: function( url, callback ) \{\par
\tab\tab return jQuery.get( url, undefined, callback, "script" );\par
\tab\}\par
\} );\par
\par
jQuery.each( [ "get", "post" ], function( _i, method ) \{\par
\tab jQuery[ method ] = function( url, data, callback, type ) \{\par
\par
\tab\tab // Shift arguments if data argument was omitted\par
\tab\tab if ( isFunction( data ) ) \{\par
\tab\tab\tab type = type || callback;\par
\tab\tab\tab callback = data;\par
\tab\tab\tab data = undefined;\par
\tab\tab\}\par
\par
\tab\tab // The url can be an options object (which then must have .url)\par
\tab\tab return jQuery.ajax( jQuery.extend( \{\par
\tab\tab\tab url: url,\par
\tab\tab\tab type: method,\par
\tab\tab\tab dataType: type,\par
\tab\tab\tab data: data,\par
\tab\tab\tab success: callback\par
\tab\tab\}, jQuery.isPlainObject( url ) && url ) );\par
\tab\};\par
\} );\par
\par
jQuery.ajaxPrefilter( function( s ) \{\par
\tab var i;\par
\tab for ( i in s.headers ) \{\par
\tab\tab if ( i.toLowerCase() === "content-type" ) \{\par
\tab\tab\tab s.contentType = s.headers[ i ] || "";\par
\tab\tab\}\par
\tab\}\par
\} );\par
\par
\par
jQuery._evalUrl = function( url, options, doc ) \{\par
\tab return jQuery.ajax( \{\par
\tab\tab url: url,\par
\par
\tab\tab // Make this explicit, since user can override this through ajaxSetup (#11264)\par
\tab\tab type: "GET",\par
\tab\tab dataType: "script",\par
\tab\tab cache: true,\par
\tab\tab async: false,\par
\tab\tab global: false,\par
\par
\tab\tab // Only evaluate the response if it is successful (gh-4126)\par
\tab\tab // dataFilter is not invoked for failure responses, so using it instead\par
\tab\tab // of the default converter is kludgy but it works.\par
\tab\tab converters: \{\par
\tab\tab\tab "text script": function() \{\}\par
\tab\tab\},\par
\tab\tab dataFilter: function( response ) \{\par
\tab\tab\tab jQuery.globalEval( response, options, doc );\par
\tab\tab\}\par
\tab\} );\par
\};\par
\par
\par
jQuery.fn.extend( \{\par
\tab wrapAll: function( html ) \{\par
\tab\tab var wrap;\par
\par
\tab\tab if ( this[ 0 ] ) \{\par
\tab\tab\tab if ( isFunction( html ) ) \{\par
\tab\tab\tab\tab html = html.call( this[ 0 ] );\par
\tab\tab\tab\}\par
\par
\tab\tab\tab // The elements to wrap the target around\par
\tab\tab\tab wrap = jQuery( html, this[ 0 ].ownerDocument ).eq( 0 ).clone( true );\par
\par
\tab\tab\tab if ( this[ 0 ].parentNode ) \{\par
\tab\tab\tab\tab wrap.insertBefore( this[ 0 ] );\par
\tab\tab\tab\}\par
\par
\tab\tab\tab wrap.map( function() \{\par
\tab\tab\tab\tab var elem = this;\par
\par
\tab\tab\tab\tab while ( elem.firstElementChild ) \{\par
\tab\tab\tab\tab\tab elem = elem.firstElementChild;\par
\tab\tab\tab\tab\}\par
\par
\tab\tab\tab\tab return elem;\par
\tab\tab\tab\} ).append( this );\par
\tab\tab\}\par
\par
\tab\tab return this;\par
\tab\},\par
\par
\tab wrapInner: function( html ) \{\par
\tab\tab if ( isFunction( html ) ) \{\par
\tab\tab\tab return this.each( function( i ) \{\par
\tab\tab\tab\tab jQuery( this ).wrapInner( html.call( this, i ) );\par
\tab\tab\tab\} );\par
\tab\tab\}\par
\par
\tab\tab return this.each( function() \{\par
\tab\tab\tab var self = jQuery( this ),\par
\tab\tab\tab\tab contents = self.contents();\par
\par
\tab\tab\tab if ( contents.length ) \{\par
\tab\tab\tab\tab contents.wrapAll( html );\par
\par
\tab\tab\tab\} else \{\par
\tab\tab\tab\tab self.append( html );\par
\tab\tab\tab\}\par
\tab\tab\} );\par
\tab\},\par
\par
\tab wrap: function( html ) \{\par
\tab\tab var htmlIsFunction = isFunction( html );\par
\par
\tab\tab return this.each( function( i ) \{\par
\tab\tab\tab jQuery( this ).wrapAll( htmlIsFunction ? html.call( this, i ) : html );\par
\tab\tab\} );\par
\tab\},\par
\par
\tab unwrap: function( selector ) \{\par
\tab\tab this.parent( selector ).not( "body" ).each( function() \{\par
\tab\tab\tab jQuery( this ).replaceWith( this.childNodes );\par
\tab\tab\} );\par
\tab\tab return this;\par
\tab\}\par
\} );\par
\par
\par
jQuery.expr.pseudos.hidden = function( elem ) \{\par
\tab return !jQuery.expr.pseudos.visible( elem );\par
\};\par
jQuery.expr.pseudos.visible = function( elem ) \{\par
\tab return !!( elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length );\par
\};\par
\par
\par
\par
\par
jQuery.ajaxSettings.xhr = function() \{\par
\tab try \{\par
\tab\tab return new window.XMLHttpRequest();\par
\tab\} catch ( e ) \{\}\par
\};\par
\par
var xhrSuccessStatus = \{\par
\par
\tab\tab // File protocol always yields status code 0, assume 200\par
\tab\tab 0: 200,\par
\par
\tab\tab // Support: IE <=9 only\par
\tab\tab // #1450: sometimes IE returns 1223 when it should be 204\par
\tab\tab 1223: 204\par
\tab\},\par
\tab xhrSupported = jQuery.ajaxSettings.xhr();\par
\par
support.cors = !!xhrSupported && ( "withCredentials" in xhrSupported );\par
support.ajax = xhrSupported = !!xhrSupported;\par
\par
jQuery.ajaxTransport( function( options ) \{\par
\tab var callback, errorCallback;\par
\par
\tab // Cross domain only allowed if supported through XMLHttpRequest\par
\tab if ( support.cors || xhrSupported && !options.crossDomain ) \{\par
\tab\tab return \{\par
\tab\tab\tab send: function( headers, complete ) \{\par
\tab\tab\tab\tab var i,\par
\tab\tab\tab\tab\tab xhr = options.xhr();\par
\par
\tab\tab\tab\tab xhr.open(\par
\tab\tab\tab\tab\tab options.type,\par
\tab\tab\tab\tab\tab options.url,\par
\tab\tab\tab\tab\tab options.async,\par
\tab\tab\tab\tab\tab options.username,\par
\tab\tab\tab\tab\tab options.password\par
\tab\tab\tab\tab );\par
\par
\tab\tab\tab\tab // Apply custom fields if provided\par
\tab\tab\tab\tab if ( options.xhrFields ) \{\par
\tab\tab\tab\tab\tab for ( i in options.xhrFields ) \{\par
\tab\tab\tab\tab\tab\tab xhr[ i ] = options.xhrFields[ i ];\par
\tab\tab\tab\tab\tab\}\par
\tab\tab\tab\tab\}\par
\par
\tab\tab\tab\tab // Override mime type if needed\par
\tab\tab\tab\tab if ( options.mimeType && xhr.overrideMimeType ) \{\par
\tab\tab\tab\tab\tab xhr.overrideMimeType( options.mimeType );\par
\tab\tab\tab\tab\}\par
\par
\tab\tab\tab\tab // X-Requested-With header\par
\tab\tab\tab\tab // For cross-domain requests, seeing as conditions for a preflight are\par
\tab\tab\tab\tab // akin to a jigsaw puzzle, we simply never set it to be sure.\par
\tab\tab\tab\tab // (it can always be set on a per-request basis or even using ajaxSetup)\par
\tab\tab\tab\tab // For same-domain requests, won't change header if already provided.\par
\tab\tab\tab\tab if ( !options.crossDomain && !headers[ "X-Requested-With" ] ) \{\par
\tab\tab\tab\tab\tab headers[ "X-Requested-With" ] = "XMLHttpRequest";\par
\tab\tab\tab\tab\}\par
\par
\tab\tab\tab\tab // Set headers\par
\tab\tab\tab\tab for ( i in headers ) \{\par
\tab\tab\tab\tab\tab xhr.setRequestHeader( i, headers[ i ] );\par
\tab\tab\tab\tab\}\par
\par
\tab\tab\tab\tab // Callback\par
\tab\tab\tab\tab callback = function( type ) \{\par
\tab\tab\tab\tab\tab return function() \{\par
\tab\tab\tab\tab\tab\tab if ( callback ) \{\par
\tab\tab\tab\tab\tab\tab\tab callback = errorCallback = xhr.onload =\par
\tab\tab\tab\tab\tab\tab\tab\tab xhr.onerror = xhr.onabort = xhr.ontimeout =\par
\tab\tab\tab\tab\tab\tab\tab\tab\tab xhr.onreadystatechange = null;\par
\par
\tab\tab\tab\tab\tab\tab\tab if ( type === "abort" ) \{\par
\tab\tab\tab\tab\tab\tab\tab\tab xhr.abort();\par
\tab\tab\tab\tab\tab\tab\tab\} else if ( type === "error" ) \{\par
\par
\tab\tab\tab\tab\tab\tab\tab\tab // Support: IE <=9 only\par
\tab\tab\tab\tab\tab\tab\tab\tab // On a manual native abort, IE9 throws\par
\tab\tab\tab\tab\tab\tab\tab\tab // errors on any property access that is not readyState\par
\tab\tab\tab\tab\tab\tab\tab\tab if ( typeof xhr.status !== "number" ) \{\par
\tab\tab\tab\tab\tab\tab\tab\tab\tab complete( 0, "error" );\par
\tab\tab\tab\tab\tab\tab\tab\tab\} else \{\par
\tab\tab\tab\tab\tab\tab\tab\tab\tab complete(\par
\par
\tab\tab\tab\tab\tab\tab\tab\tab\tab\tab // File: protocol always yields status 0; see #8605, #14207\par
\tab\tab\tab\tab\tab\tab\tab\tab\tab\tab xhr.status,\par
\tab\tab\tab\tab\tab\tab\tab\tab\tab\tab xhr.statusText\par
\tab\tab\tab\tab\tab\tab\tab\tab\tab );\par
\tab\tab\tab\tab\tab\tab\tab\tab\}\par
\tab\tab\tab\tab\tab\tab\tab\} else \{\par
\tab\tab\tab\tab\tab\tab\tab\tab complete(\par
\tab\tab\tab\tab\tab\tab\tab\tab\tab xhrSuccessStatus[ xhr.status ] || xhr.status,\par
\tab\tab\tab\tab\tab\tab\tab\tab\tab xhr.statusText,\par
\par
\tab\tab\tab\tab\tab\tab\tab\tab\tab // Support: IE <=9 only\par
\tab\tab\tab\tab\tab\tab\tab\tab\tab // IE9 has no XHR2 but throws on binary (trac-11426)\par
\tab\tab\tab\tab\tab\tab\tab\tab\tab // For XHR2 non-text, let the caller handle it (gh-2498)\par
\tab\tab\tab\tab\tab\tab\tab\tab\tab ( xhr.responseType || "text" ) !== "text"  ||\par
\tab\tab\tab\tab\tab\tab\tab\tab\tab typeof xhr.responseText !== "string" ?\par
\tab\tab\tab\tab\tab\tab\tab\tab\tab\tab\{ binary: xhr.response \} :\par
\tab\tab\tab\tab\tab\tab\tab\tab\tab\tab\{ text: xhr.responseText \},\par
\tab\tab\tab\tab\tab\tab\tab\tab\tab xhr.getAllResponseHeaders()\par
\tab\tab\tab\tab\tab\tab\tab\tab );\par
\tab\tab\tab\tab\tab\tab\tab\}\par
\tab\tab\tab\tab\tab\tab\}\par
\tab\tab\tab\tab\tab\};\par
\tab\tab\tab\tab\};\par
\par
\tab\tab\tab\tab // Listen to events\par
\tab\tab\tab\tab xhr.onload = callback();\par
\tab\tab\tab\tab errorCallback = xhr.onerror = xhr.ontimeout = callback( "error" );\par
\par
\tab\tab\tab\tab // Support: IE 9 only\par
\tab\tab\tab\tab // Use onreadystatechange to replace onabort\par
\tab\tab\tab\tab // to handle uncaught aborts\par
\tab\tab\tab\tab if ( xhr.onabort !== undefined ) \{\par
\tab\tab\tab\tab\tab xhr.onabort = errorCallback;\par
\tab\tab\tab\tab\} else \{\par
\tab\tab\tab\tab\tab xhr.onreadystatechange = function() \{\par
\par
\tab\tab\tab\tab\tab\tab // Check readyState before timeout as it changes\par
\tab\tab\tab\tab\tab\tab if ( xhr.readyState === 4 ) \{\par
\par
\tab\tab\tab\tab\tab\tab\tab // Allow onerror to be called first,\par
\tab\tab\tab\tab\tab\tab\tab // but that will not handle a native abort\par
\tab\tab\tab\tab\tab\tab\tab // Also, save errorCallback to a variable\par
\tab\tab\tab\tab\tab\tab\tab // as xhr.onerror cannot be accessed\par
\tab\tab\tab\tab\tab\tab\tab window.setTimeout( function() \{\par
\tab\tab\tab\tab\tab\tab\tab\tab if ( callback ) \{\par
\tab\tab\tab\tab\tab\tab\tab\tab\tab errorCallback();\par
\tab\tab\tab\tab\tab\tab\tab\tab\}\par
\tab\tab\tab\tab\tab\tab\tab\} );\par
\tab\tab\tab\tab\tab\tab\}\par
\tab\tab\tab\tab\tab\};\par
\tab\tab\tab\tab\}\par
\par
\tab\tab\tab\tab // Create the abort callback\par
\tab\tab\tab\tab callback = callback( "abort" );\par
\par
\tab\tab\tab\tab try \{\par
\par
\tab\tab\tab\tab\tab // Do send the request (this may raise an exception)\par
\tab\tab\tab\tab\tab xhr.send( options.hasContent && options.data || null );\par
\tab\tab\tab\tab\} catch ( e ) \{\par
\par
\tab\tab\tab\tab\tab // #14683: Only rethrow if this hasn't been notified as an error yet\par
\tab\tab\tab\tab\tab if ( callback ) \{\par
\tab\tab\tab\tab\tab\tab throw e;\par
\tab\tab\tab\tab\tab\}\par
\tab\tab\tab\tab\}\par
\tab\tab\tab\},\par
\par
\tab\tab\tab abort: function() \{\par
\tab\tab\tab\tab if ( callback ) \{\par
\tab\tab\tab\tab\tab callback();\par
\tab\tab\tab\tab\}\par
\tab\tab\tab\}\par
\tab\tab\};\par
\tab\}\par
\} );\par
\par
\par
\par
\par
// Prevent auto-execution of scripts when no explicit dataType was provided (See gh-2432)\par
jQuery.ajaxPrefilter( function( s ) \{\par
\tab if ( s.crossDomain ) \{\par
\tab\tab s.contents.script = false;\par
\tab\}\par
\} );\par
\par
// Install script dataType\par
jQuery.ajaxSetup( \{\par
\tab accepts: \{\par
\tab\tab script: "text/javascript, application/javascript, " +\par
\tab\tab\tab "application/ecmascript, application/x-ecmascript"\par
\tab\},\par
\tab contents: \{\par
\tab\tab script: /\\b(?:java|ecma)script\\b/\par
\tab\},\par
\tab converters: \{\par
\tab\tab "text script": function( text ) \{\par
\tab\tab\tab jQuery.globalEval( text );\par
\tab\tab\tab return text;\par
\tab\tab\}\par
\tab\}\par
\} );\par
\par
// Handle cache's special case and crossDomain\par
jQuery.ajaxPrefilter( "script", function( s ) \{\par
\tab if ( s.cache === undefined ) \{\par
\tab\tab s.cache = false;\par
\tab\}\par
\tab if ( s.crossDomain ) \{\par
\tab\tab s.type = "GET";\par
\tab\}\par
\} );\par
\par
// Bind script tag hack transport\par
jQuery.ajaxTransport( "script", function( s ) \{\par
\par
\tab // This transport only deals with cross domain or forced-by-attrs requests\par
\tab if ( s.crossDomain || s.scriptAttrs ) \{\par
\tab\tab var script, callback;\par
\tab\tab return \{\par
\tab\tab\tab send: function( _, complete ) \{\par
\tab\tab\tab\tab script = jQuery( "<script>" )\par
\tab\tab\tab\tab\tab .attr( s.scriptAttrs || \{\} )\par
\tab\tab\tab\tab\tab .prop( \{ charset: s.scriptCharset, src: s.url \} )\par
\tab\tab\tab\tab\tab .on( "load error", callback = function( evt ) \{\par
\tab\tab\tab\tab\tab\tab script.remove();\par
\tab\tab\tab\tab\tab\tab callback = null;\par
\tab\tab\tab\tab\tab\tab if ( evt ) \{\par
\tab\tab\tab\tab\tab\tab\tab complete( evt.type === "error" ? 404 : 200, evt.type );\par
\tab\tab\tab\tab\tab\tab\}\par
\tab\tab\tab\tab\tab\} );\par
\par
\tab\tab\tab\tab // Use native DOM manipulation to avoid our domManip AJAX trickery\par
\tab\tab\tab\tab document.head.appendChild( script[ 0 ] );\par
\tab\tab\tab\},\par
\tab\tab\tab abort: function() \{\par
\tab\tab\tab\tab if ( callback ) \{\par
\tab\tab\tab\tab\tab callback();\par
\tab\tab\tab\tab\}\par
\tab\tab\tab\}\par
\tab\tab\};\par
\tab\}\par
\} );\par
\par
\par
\par
\par
var oldCallbacks = [],\par
\tab rjsonp = /(=)\\?(?=&|$)|\\?\\?/;\par
\par
// Default jsonp settings\par
jQuery.ajaxSetup( \{\par
\tab jsonp: "callback",\par
\tab jsonpCallback: function() \{\par
\tab\tab var callback = oldCallbacks.pop() || ( jQuery.expando + "_" + ( nonce.guid++ ) );\par
\tab\tab this[ callback ] = true;\par
\tab\tab return callback;\par
\tab\}\par
\} );\par
\par
// Detect, normalize options and install callbacks for jsonp requests\par
jQuery.ajaxPrefilter( "json jsonp", function( s, originalSettings, jqXHR ) \{\par
\par
\tab var callbackName, overwritten, responseContainer,\par
\tab\tab jsonProp = s.jsonp !== false && ( rjsonp.test( s.url ) ?\par
\tab\tab\tab "url" :\par
\tab\tab\tab typeof s.data === "string" &&\par
\tab\tab\tab\tab ( s.contentType || "" )\par
\tab\tab\tab\tab\tab .indexOf( "application/x-www-form-urlencoded" ) === 0 &&\par
\tab\tab\tab\tab rjsonp.test( s.data ) && "data"\par
\tab\tab );\par
\par
\tab // Handle iff the expected data type is "jsonp" or we have a parameter to set\par
\tab if ( jsonProp || s.dataTypes[ 0 ] === "jsonp" ) \{\par
\par
\tab\tab // Get callback name, remembering preexisting value associated with it\par
\tab\tab callbackName = s.jsonpCallback = isFunction( s.jsonpCallback ) ?\par
\tab\tab\tab s.jsonpCallback() :\par
\tab\tab\tab s.jsonpCallback;\par
\par
\tab\tab // Insert callback into url or form data\par
\tab\tab if ( jsonProp ) \{\par
\tab\tab\tab s[ jsonProp ] = s[ jsonProp ].replace( rjsonp, "$1" + callbackName );\par
\tab\tab\} else if ( s.jsonp !== false ) \{\par
\tab\tab\tab s.url += ( rquery.test( s.url ) ? "&" : "?" ) + s.jsonp + "=" + callbackName;\par
\tab\tab\}\par
\par
\tab\tab // Use data converter to retrieve json after script execution\par
\tab\tab s.converters[ "script json" ] = function() \{\par
\tab\tab\tab if ( !responseContainer ) \{\par
\tab\tab\tab\tab jQuery.error( callbackName + " was not called" );\par
\tab\tab\tab\}\par
\tab\tab\tab return responseContainer[ 0 ];\par
\tab\tab\};\par
\par
\tab\tab // Force json dataType\par
\tab\tab s.dataTypes[ 0 ] = "json";\par
\par
\tab\tab // Install callback\par
\tab\tab overwritten = window[ callbackName ];\par
\tab\tab window[ callbackName ] = function() \{\par
\tab\tab\tab responseContainer = arguments;\par
\tab\tab\};\par
\par
\tab\tab // Clean-up function (fires after converters)\par
\tab\tab jqXHR.always( function() \{\par
\par
\tab\tab\tab // If previous value didn't exist - remove it\par
\tab\tab\tab if ( overwritten === undefined ) \{\par
\tab\tab\tab\tab jQuery( window ).removeProp( callbackName );\par
\par
\tab\tab\tab // Otherwise restore preexisting value\par
\tab\tab\tab\} else \{\par
\tab\tab\tab\tab window[ callbackName ] = overwritten;\par
\tab\tab\tab\}\par
\par
\tab\tab\tab // Save back as free\par
\tab\tab\tab if ( s[ callbackName ] ) \{\par
\par
\tab\tab\tab\tab // Make sure that re-using the options doesn't screw things around\par
\tab\tab\tab\tab s.jsonpCallback = originalSettings.jsonpCallback;\par
\par
\tab\tab\tab\tab // Save the callback name for future use\par
\tab\tab\tab\tab oldCallbacks.push( callbackName );\par
\tab\tab\tab\}\par
\par
\tab\tab\tab // Call if it was a function and we have a response\par
\tab\tab\tab if ( responseContainer && isFunction( overwritten ) ) \{\par
\tab\tab\tab\tab overwritten( responseContainer[ 0 ] );\par
\tab\tab\tab\}\par
\par
\tab\tab\tab responseContainer = overwritten = undefined;\par
\tab\tab\} );\par
\par
\tab\tab // Delegate to script\par
\tab\tab return "script";\par
\tab\}\par
\} );\par
\par
\par
\par
\par
// Support: Safari 8 only\par
// In Safari 8 documents created via document.implementation.createHTMLDocument\par
// collapse sibling forms: the second one becomes a child of the first one.\par
// Because of that, this security measure has to be disabled in Safari 8.\par
// {{\field{\*\fldinst{HYPERLINK https://bugs.webkit.org/show_bug.cgi?id=137337 }}{\fldrslt{https://bugs.webkit.org/show_bug.cgi?id=137337\ul0\cf0}}}}\f0\fs22\par
support.createHTMLDocument = ( function() \{\par
\tab var body = document.implementation.createHTMLDocument( "" ).body;\par
\tab body.innerHTML = "<form></form><form></form>";\par
\tab return body.childNodes.length === 2;\par
\} )();\par
\par
\par
// Argument "data" should be string of html\par
// context (optional): If specified, the fragment will be created in this context,\par
// defaults to document\par
// keepScripts (optional): If true, will include scripts passed in the html string\par
jQuery.parseHTML = function( data, context, keepScripts ) \{\par
\tab if ( typeof data !== "string" ) \{\par
\tab\tab return [];\par
\tab\}\par
\tab if ( typeof context === "boolean" ) \{\par
\tab\tab keepScripts = context;\par
\tab\tab context = false;\par
\tab\}\par
\par
\tab var base, parsed, scripts;\par
\par
\tab if ( !context ) \{\par
\par
\tab\tab // Stop scripts or inline event handlers from being executed immediately\par
\tab\tab // by using document.implementation\par
\tab\tab if ( support.createHTMLDocument ) \{\par
\tab\tab\tab context = document.implementation.createHTMLDocument( "" );\par
\par
\tab\tab\tab // Set the base href for the created document\par
\tab\tab\tab // so any parsed elements with URLs\par
\tab\tab\tab // are based on the document's URL (gh-2965)\par
\tab\tab\tab base = context.createElement( "base" );\par
\tab\tab\tab base.href = document.location.href;\par
\tab\tab\tab context.head.appendChild( base );\par
\tab\tab\} else \{\par
\tab\tab\tab context = document;\par
\tab\tab\}\par
\tab\}\par
\par
\tab parsed = rsingleTag.exec( data );\par
\tab scripts = !keepScripts && [];\par
\par
\tab // Single tag\par
\tab if ( parsed ) \{\par
\tab\tab return [ context.createElement( parsed[ 1 ] ) ];\par
\tab\}\par
\par
\tab parsed = buildFragment( [ data ], context, scripts );\par
\par
\tab if ( scripts && scripts.length ) \{\par
\tab\tab jQuery( scripts ).remove();\par
\tab\}\par
\par
\tab return jQuery.merge( [], parsed.childNodes );\par
\};\par
\par
\par
/**\par
 * Load a url into a page\par
 */\par
jQuery.fn.load = function( url, params, callback ) \{\par
\tab var selector, type, response,\par
\tab\tab self = this,\par
\tab\tab off = url.indexOf( " " );\par
\par
\tab if ( off > -1 ) \{\par
\tab\tab selector = stripAndCollapse( url.slice( off ) );\par
\tab\tab url = url.slice( 0, off );\par
\tab\}\par
\par
\tab // If it's a function\par
\tab if ( isFunction( params ) ) \{\par
\par
\tab\tab // We assume that it's the callback\par
\tab\tab callback = params;\par
\tab\tab params = undefined;\par
\par
\tab // Otherwise, build a param string\par
\tab\} else if ( params && typeof params === "object" ) \{\par
\tab\tab type = "POST";\par
\tab\}\par
\par
\tab // If we have elements to modify, make the request\par
\tab if ( self.length > 0 ) \{\par
\tab\tab jQuery.ajax( \{\par
\tab\tab\tab url: url,\par
\par
\tab\tab\tab // If "type" variable is undefined, then "GET" method will be used.\par
\tab\tab\tab // Make value of this field explicit since\par
\tab\tab\tab // user can override it through ajaxSetup method\par
\tab\tab\tab type: type || "GET",\par
\tab\tab\tab dataType: "html",\par
\tab\tab\tab data: params\par
\tab\tab\} ).done( function( responseText ) \{\par
\par
\tab\tab\tab // Save response for use in complete callback\par
\tab\tab\tab response = arguments;\par
\par
\tab\tab\tab self.html( selector ?\par
\par
\tab\tab\tab\tab // If a selector was specified, locate the right elements in a dummy div\par
\tab\tab\tab\tab // Exclude scripts to avoid IE 'Permission Denied' errors\par
\tab\tab\tab\tab jQuery( "<div>" ).append( jQuery.parseHTML( responseText ) ).find( selector ) :\par
\par
\tab\tab\tab\tab // Otherwise use the full result\par
\tab\tab\tab\tab responseText );\par
\par
\tab\tab // If the request succeeds, this function gets "data", "status", "jqXHR"\par
\tab\tab // but they are ignored because response was set above.\par
\tab\tab // If it fails, this function gets "jqXHR", "status", "error"\par
\tab\tab\} ).always( callback && function( jqXHR, status ) \{\par
\tab\tab\tab self.each( function() \{\par
\tab\tab\tab\tab callback.apply( this, response || [ jqXHR.responseText, status, jqXHR ] );\par
\tab\tab\tab\} );\par
\tab\tab\} );\par
\tab\}\par
\par
\tab return this;\par
\};\par
\par
\par
\par
\par
jQuery.expr.pseudos.animated = function( elem ) \{\par
\tab return jQuery.grep( jQuery.timers, function( fn ) \{\par
\tab\tab return elem === fn.elem;\par
\tab\} ).length;\par
\};\par
\par
\par
\par
\par
jQuery.offset = \{\par
\tab setOffset: function( elem, options, i ) \{\par
\tab\tab var curPosition, curLeft, curCSSTop, curTop, curOffset, curCSSLeft, calculatePosition,\par
\tab\tab\tab position = jQuery.css( elem, "position" ),\par
\tab\tab\tab curElem = jQuery( elem ),\par
\tab\tab\tab props = \{\};\par
\par
\tab\tab // Set position first, in-case top/left are set even on static elem\par
\tab\tab if ( position === "static" ) \{\par
\tab\tab\tab elem.style.position = "relative";\par
\tab\tab\}\par
\par
\tab\tab curOffset = curElem.offset();\par
\tab\tab curCSSTop = jQuery.css( elem, "top" );\par
\tab\tab curCSSLeft = jQuery.css( elem, "left" );\par
\tab\tab calculatePosition = ( position === "absolute" || position === "fixed" ) &&\par
\tab\tab\tab ( curCSSTop + curCSSLeft ).indexOf( "auto" ) > -1;\par
\par
\tab\tab // Need to be able to calculate position if either\par
\tab\tab // top or left is auto and position is either absolute or fixed\par
\tab\tab if ( calculatePosition ) \{\par
\tab\tab\tab curPosition = curElem.position();\par
\tab\tab\tab curTop = curPosition.top;\par
\tab\tab\tab curLeft = curPosition.left;\par
\par
\tab\tab\} else \{\par
\tab\tab\tab curTop = parseFloat( curCSSTop ) || 0;\par
\tab\tab\tab curLeft = parseFloat( curCSSLeft ) || 0;\par
\tab\tab\}\par
\par
\tab\tab if ( isFunction( options ) ) \{\par
\par
\tab\tab\tab // Use jQuery.extend here to allow modification of coordinates argument (gh-1848)\par
\tab\tab\tab options = options.call( elem, i, jQuery.extend( \{\}, curOffset ) );\par
\tab\tab\}\par
\par
\tab\tab if ( options.top != null ) \{\par
\tab\tab\tab props.top = ( options.top - curOffset.top ) + curTop;\par
\tab\tab\}\par
\tab\tab if ( options.left != null ) \{\par
\tab\tab\tab props.left = ( options.left - curOffset.left ) + curLeft;\par
\tab\tab\}\par
\par
\tab\tab if ( "using" in options ) \{\par
\tab\tab\tab options.using.call( elem, props );\par
\par
\tab\tab\} else \{\par
\tab\tab\tab curElem.css( props );\par
\tab\tab\}\par
\tab\}\par
\};\par
\par
jQuery.fn.extend( \{\par
\par
\tab // offset() relates an element's border box to the document origin\par
\tab offset: function( options ) \{\par
\par
\tab\tab // Preserve chaining for setter\par
\tab\tab if ( arguments.length ) \{\par
\tab\tab\tab return options === undefined ?\par
\tab\tab\tab\tab this :\par
\tab\tab\tab\tab this.each( function( i ) \{\par
\tab\tab\tab\tab\tab jQuery.offset.setOffset( this, options, i );\par
\tab\tab\tab\tab\} );\par
\tab\tab\}\par
\par
\tab\tab var rect, win,\par
\tab\tab\tab elem = this[ 0 ];\par
\par
\tab\tab if ( !elem ) \{\par
\tab\tab\tab return;\par
\tab\tab\}\par
\par
\tab\tab // Return zeros for disconnected and hidden (display: none) elements (gh-2310)\par
\tab\tab // Support: IE <=11 only\par
\tab\tab // Running getBoundingClientRect on a\par
\tab\tab // disconnected node in IE throws an error\par
\tab\tab if ( !elem.getClientRects().length ) \{\par
\tab\tab\tab return \{ top: 0, left: 0 \};\par
\tab\tab\}\par
\par
\tab\tab // Get document-relative position by adding viewport scroll to viewport-relative gBCR\par
\tab\tab rect = elem.getBoundingClientRect();\par
\tab\tab win = elem.ownerDocument.defaultView;\par
\tab\tab return \{\par
\tab\tab\tab top: rect.top + win.pageYOffset,\par
\tab\tab\tab left: rect.left + win.pageXOffset\par
\tab\tab\};\par
\tab\},\par
\par
\tab // position() relates an element's margin box to its offset parent's padding box\par
\tab // This corresponds to the behavior of CSS absolute positioning\par
\tab position: function() \{\par
\tab\tab if ( !this[ 0 ] ) \{\par
\tab\tab\tab return;\par
\tab\tab\}\par
\par
\tab\tab var offsetParent, offset, doc,\par
\tab\tab\tab elem = this[ 0 ],\par
\tab\tab\tab parentOffset = \{ top: 0, left: 0 \};\par
\par
\tab\tab // position:fixed elements are offset from the viewport, which itself always has zero offset\par
\tab\tab if ( jQuery.css( elem, "position" ) === "fixed" ) \{\par
\par
\tab\tab\tab // Assume position:fixed implies availability of getBoundingClientRect\par
\tab\tab\tab offset = elem.getBoundingClientRect();\par
\par
\tab\tab\} else \{\par
\tab\tab\tab offset = this.offset();\par
\par
\tab\tab\tab // Account for the *real* offset parent, which can be the document or its root element\par
\tab\tab\tab // when a statically positioned element is identified\par
\tab\tab\tab doc = elem.ownerDocument;\par
\tab\tab\tab offsetParent = elem.offsetParent || doc.documentElement;\par
\tab\tab\tab while ( offsetParent &&\par
\tab\tab\tab\tab ( offsetParent === doc.body || offsetParent === doc.documentElement ) &&\par
\tab\tab\tab\tab jQuery.css( offsetParent, "position" ) === "static" ) \{\par
\par
\tab\tab\tab\tab offsetParent = offsetParent.parentNode;\par
\tab\tab\tab\}\par
\tab\tab\tab if ( offsetParent && offsetParent !== elem && offsetParent.nodeType === 1 ) \{\par
\par
\tab\tab\tab\tab // Incorporate borders into its offset, since they are outside its content origin\par
\tab\tab\tab\tab parentOffset = jQuery( offsetParent ).offset();\par
\tab\tab\tab\tab parentOffset.top += jQuery.css( offsetParent, "borderTopWidth", true );\par
\tab\tab\tab\tab parentOffset.left += jQuery.css( offsetParent, "borderLeftWidth", true );\par
\tab\tab\tab\}\par
\tab\tab\}\par
\par
\tab\tab // Subtract parent offsets and element margins\par
\tab\tab return \{\par
\tab\tab\tab top: offset.top - parentOffset.top - jQuery.css( elem, "marginTop", true ),\par
\tab\tab\tab left: offset.left - parentOffset.left - jQuery.css( elem, "marginLeft", true )\par
\tab\tab\};\par
\tab\},\par
\par
\tab // This method will return documentElement in the following cases:\par
\tab // 1) For the element inside the iframe without offsetParent, this method will return\par
\tab //    documentElement of the parent window\par
\tab // 2) For the hidden or detached element\par
\tab // 3) For body or html element, i.e. in case of the html node - it will return itself\par
\tab //\par
\tab // but those exceptions were never presented as a real life use-cases\par
\tab // and might be considered as more preferable results.\par
\tab //\par
\tab // This logic, however, is not guaranteed and can change at any point in the future\par
\tab offsetParent: function() \{\par
\tab\tab return this.map( function() \{\par
\tab\tab\tab var offsetParent = this.offsetParent;\par
\par
\tab\tab\tab while ( offsetParent && jQuery.css( offsetParent, "position" ) === "static" ) \{\par
\tab\tab\tab\tab offsetParent = offsetParent.offsetParent;\par
\tab\tab\tab\}\par
\par
\tab\tab\tab return offsetParent || documentElement;\par
\tab\tab\} );\par
\tab\}\par
\} );\par
\par
// Create scrollLeft and scrollTop methods\par
jQuery.each( \{ scrollLeft: "pageXOffset", scrollTop: "pageYOffset" \}, function( method, prop ) \{\par
\tab var top = "pageYOffset" === prop;\par
\par
\tab jQuery.fn[ method ] = function( val ) \{\par
\tab\tab return access( this, function( elem, method, val ) \{\par
\par
\tab\tab\tab // Coalesce documents and windows\par
\tab\tab\tab var win;\par
\tab\tab\tab if ( isWindow( elem ) ) \{\par
\tab\tab\tab\tab win = elem;\par
\tab\tab\tab\} else if ( elem.nodeType === 9 ) \{\par
\tab\tab\tab\tab win = elem.defaultView;\par
\tab\tab\tab\}\par
\par
\tab\tab\tab if ( val === undefined ) \{\par
\tab\tab\tab\tab return win ? win[ prop ] : elem[ method ];\par
\tab\tab\tab\}\par
\par
\tab\tab\tab if ( win ) \{\par
\tab\tab\tab\tab win.scrollTo(\par
\tab\tab\tab\tab\tab !top ? val : win.pageXOffset,\par
\tab\tab\tab\tab\tab top ? val : win.pageYOffset\par
\tab\tab\tab\tab );\par
\par
\tab\tab\tab\} else \{\par
\tab\tab\tab\tab elem[ method ] = val;\par
\tab\tab\tab\}\par
\tab\tab\}, method, val, arguments.length );\par
\tab\};\par
\} );\par
\par
// Support: Safari <=7 - 9.1, Chrome <=37 - 49\par
// Add the top/left cssHooks using jQuery.fn.position\par
// Webkit bug: {{\field{\*\fldinst{HYPERLINK https://bugs.webkit.org/show_bug.cgi?id=29084 }}{\fldrslt{https://bugs.webkit.org/show_bug.cgi?id=29084\ul0\cf0}}}}\f0\fs22\par
// Blink bug: {{\field{\*\fldinst{HYPERLINK https://bugs.chromium.org/p/chromium/issues/detail?id=589347 }}{\fldrslt{https://bugs.chromium.org/p/chromium/issues/detail?id=589347\ul0\cf0}}}}\f0\fs22\par
// getComputedStyle returns percent when specified for top/left/bottom/right;\par
// rather than make the css module depend on the offset module, just check for it here\par
jQuery.each( [ "top", "left" ], function( _i, prop ) \{\par
\tab jQuery.cssHooks[ prop ] = addGetHookIf( support.pixelPosition,\par
\tab\tab function( elem, computed ) \{\par
\tab\tab\tab if ( computed ) \{\par
\tab\tab\tab\tab computed = curCSS( elem, prop );\par
\par
\tab\tab\tab\tab // If curCSS returns percentage, fallback to offset\par
\tab\tab\tab\tab return rnumnonpx.test( computed ) ?\par
\tab\tab\tab\tab\tab jQuery( elem ).position()[ prop ] + "px" :\par
\tab\tab\tab\tab\tab computed;\par
\tab\tab\tab\}\par
\tab\tab\}\par
\tab );\par
\} );\par
\par
\par
// Create innerHeight, innerWidth, height, width, outerHeight and outerWidth methods\par
jQuery.each( \{ Height: "height", Width: "width" \}, function( name, type ) \{\par
\tab jQuery.each( \{\par
\tab\tab padding: "inner" + name,\par
\tab\tab content: type,\par
\tab\tab "": "outer" + name\par
\tab\}, function( defaultExtra, funcName ) \{\par
\par
\tab\tab // Margin is only for outerHeight, outerWidth\par
\tab\tab jQuery.fn[ funcName ] = function( margin, value ) \{\par
\tab\tab\tab var chainable = arguments.length && ( defaultExtra || typeof margin !== "boolean" ),\par
\tab\tab\tab\tab extra = defaultExtra || ( margin === true || value === true ? "margin" : "border" );\par
\par
\tab\tab\tab return access( this, function( elem, type, value ) \{\par
\tab\tab\tab\tab var doc;\par
\par
\tab\tab\tab\tab if ( isWindow( elem ) ) \{\par
\par
\tab\tab\tab\tab\tab // $( window ).outerWidth/Height return w/h including scrollbars (gh-1729)\par
\tab\tab\tab\tab\tab return funcName.indexOf( "outer" ) === 0 ?\par
\tab\tab\tab\tab\tab\tab elem[ "inner" + name ] :\par
\tab\tab\tab\tab\tab\tab elem.document.documentElement[ "client" + name ];\par
\tab\tab\tab\tab\}\par
\par
\tab\tab\tab\tab // Get document width or height\par
\tab\tab\tab\tab if ( elem.nodeType === 9 ) \{\par
\tab\tab\tab\tab\tab doc = elem.documentElement;\par
\par
\tab\tab\tab\tab\tab // Either scroll[Width/Height] or offset[Width/Height] or client[Width/Height],\par
\tab\tab\tab\tab\tab // whichever is greatest\par
\tab\tab\tab\tab\tab return Math.max(\par
\tab\tab\tab\tab\tab\tab elem.body[ "scroll" + name ], doc[ "scroll" + name ],\par
\tab\tab\tab\tab\tab\tab elem.body[ "offset" + name ], doc[ "offset" + name ],\par
\tab\tab\tab\tab\tab\tab doc[ "client" + name ]\par
\tab\tab\tab\tab\tab );\par
\tab\tab\tab\tab\}\par
\par
\tab\tab\tab\tab return value === undefined ?\par
\par
\tab\tab\tab\tab\tab // Get width or height on the element, requesting but not forcing parseFloat\par
\tab\tab\tab\tab\tab jQuery.css( elem, type, extra ) :\par
\par
\tab\tab\tab\tab\tab // Set width or height on the element\par
\tab\tab\tab\tab\tab jQuery.style( elem, type, value, extra );\par
\tab\tab\tab\}, type, chainable ? margin : undefined, chainable );\par
\tab\tab\};\par
\tab\} );\par
\} );\par
\par
\par
jQuery.each( [\par
\tab "ajaxStart",\par
\tab "ajaxStop",\par
\tab "ajaxComplete",\par
\tab "ajaxError",\par
\tab "ajaxSuccess",\par
\tab "ajaxSend"\par
], function( _i, type ) \{\par
\tab jQuery.fn[ type ] = function( fn ) \{\par
\tab\tab return this.on( type, fn );\par
\tab\};\par
\} );\par
\par
\par
\par
\par
jQuery.fn.extend( \{\par
\par
\tab bind: function( types, data, fn ) \{\par
\tab\tab return this.on( types, null, data, fn );\par
\tab\},\par
\tab unbind: function( types, fn ) \{\par
\tab\tab return this.off( types, null, fn );\par
\tab\},\par
\par
\tab delegate: function( selector, types, data, fn ) \{\par
\tab\tab return this.on( types, selector, data, fn );\par
\tab\},\par
\tab undelegate: function( selector, types, fn ) \{\par
\par
\tab\tab // ( namespace ) or ( selector, types [, fn] )\par
\tab\tab return arguments.length === 1 ?\par
\tab\tab\tab this.off( selector, "**" ) :\par
\tab\tab\tab this.off( types, selector || "**", fn );\par
\tab\},\par
\par
\tab hover: function( fnOver, fnOut ) \{\par
\tab\tab return this.mouseenter( fnOver ).mouseleave( fnOut || fnOver );\par
\tab\}\par
\} );\par
\par
jQuery.each(\par
\tab ( "blur focus focusin focusout resize scroll click dblclick " +\par
\tab "mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " +\par
\tab "change select submit keydown keypress keyup contextmenu" ).split( " " ),\par
\tab function( _i, name ) \{\par
\par
\tab\tab // Handle event binding\par
\tab\tab jQuery.fn[ name ] = function( data, fn ) \{\par
\tab\tab\tab return arguments.length > 0 ?\par
\tab\tab\tab\tab this.on( name, null, data, fn ) :\par
\tab\tab\tab\tab this.trigger( name );\par
\tab\tab\};\par
\tab\}\par
);\par
\par
\par
\par
\par
// Support: Android <=4.0 only\par
// Make sure we trim BOM and NBSP\par
var rtrim = /^[\\s\\uFEFF\\xA0]+|[\\s\\uFEFF\\xA0]+$/g;\par
\par
// Bind a function to a context, optionally partially applying any\par
// arguments.\par
// jQuery.proxy is deprecated to promote standards (specifically Function#bind)\par
// However, it is not slated for removal any time soon\par
jQuery.proxy = function( fn, context ) \{\par
\tab var tmp, args, proxy;\par
\par
\tab if ( typeof context === "string" ) \{\par
\tab\tab tmp = fn[ context ];\par
\tab\tab context = fn;\par
\tab\tab fn = tmp;\par
\tab\}\par
\par
\tab // Quick check to determine if target is callable, in the spec\par
\tab // this throws a TypeError, but we will just return undefined.\par
\tab if ( !isFunction( fn ) ) \{\par
\tab\tab return undefined;\par
\tab\}\par
\par
\tab // Simulated bind\par
\tab args = slice.call( arguments, 2 );\par
\tab proxy = function() \{\par
\tab\tab return fn.apply( context || this, args.concat( slice.call( arguments ) ) );\par
\tab\};\par
\par
\tab // Set the guid of unique handler to the same of original handler, so it can be removed\par
\tab proxy.guid = fn.guid = fn.guid || jQuery.guid++;\par
\par
\tab return proxy;\par
\};\par
\par
jQuery.holdReady = function( hold ) \{\par
\tab if ( hold ) \{\par
\tab\tab jQuery.readyWait++;\par
\tab\} else \{\par
\tab\tab jQuery.ready( true );\par
\tab\}\par
\};\par
jQuery.isArray = Array.isArray;\par
jQuery.parseJSON = JSON.parse;\par
jQuery.nodeName = nodeName;\par
jQuery.isFunction = isFunction;\par
jQuery.isWindow = isWindow;\par
jQuery.camelCase = camelCase;\par
jQuery.type = toType;\par
\par
jQuery.now = Date.now;\par
\par
jQuery.isNumeric = function( obj ) \{\par
\par
\tab // As of jQuery 3.0, isNumeric is limited to\par
\tab // strings and numbers (primitives or objects)\par
\tab // that can be coerced to finite numbers (gh-2662)\par
\tab var type = jQuery.type( obj );\par
\tab return ( type === "number" || type === "string" ) &&\par
\par
\tab\tab // parseFloat NaNs numeric-cast false positives ("")\par
\tab\tab // ...but misinterprets leading-number strings, particularly hex literals ("0x...")\par
\tab\tab // subtraction forces infinities to NaN\par
\tab\tab !isNaN( obj - parseFloat( obj ) );\par
\};\par
\par
jQuery.trim = function( text ) \{\par
\tab return text == null ?\par
\tab\tab "" :\par
\tab\tab ( text + "" ).replace( rtrim, "" );\par
\};\par
\par
\par
\par
// Register as a named AMD module, since jQuery can be concatenated with other\par
// files that may use define, but not via a proper concatenation script that\par
// understands anonymous AMD modules. A named AMD is safest and most robust\par
// way to register. Lowercase jquery is used because AMD module names are\par
// derived from file names, and jQuery is normally delivered in a lowercase\par
// file name. Do this after creating the global so that if an AMD module wants\par
// to call noConflict to hide this version of jQuery, it will work.\par
\par
// Note that for maximum portability, libraries that are not jQuery should\par
// declare themselves as anonymous modules, and avoid setting a global if an\par
// AMD loader is present. jQuery is a special case. For more information, see\par
// {{\field{\*\fldinst{HYPERLINK https://github.com/jrburke/requirejs/wiki/Updating-existing-libraries#wiki-anon }}{\fldrslt{https://github.com/jrburke/requirejs/wiki/Updating-existing-libraries#wiki-anon\ul0\cf0}}}}\f0\fs22\par
\par
if ( typeof define === "function" && define.amd ) \{\par
\tab define( "jquery", [], function() \{\par
\tab\tab return jQuery;\par
\tab\} );\par
\}\par
\par
\par
\par
\par
var\par
\par
\tab // Map over jQuery in case of overwrite\par
\tab _jQuery = window.jQuery,\par
\par
\tab // Map over the $ in case of overwrite\par
\tab _$ = window.$;\par
\par
jQuery.noConflict = function( deep ) \{\par
\tab if ( window.$ === jQuery ) \{\par
\tab\tab window.$ = _$;\par
\tab\}\par
\par
\tab if ( deep && window.jQuery === jQuery ) \{\par
\tab\tab window.jQuery = _jQuery;\par
\tab\}\par
\par
\tab return jQuery;\par
\};\par
\par
// Expose jQuery and $ identifiers, even in AMD\par
// (#7102#comment:10, {{\field{\*\fldinst{HYPERLINK https://github.com/jquery/jquery/pull/557 }}{\fldrslt{https://github.com/jquery/jquery/pull/557\ul0\cf0}}}}\f0\fs22 )\par
// and CommonJS for browser emulators (#13566)\par
if ( typeof noGlobal === "undefined" ) \{\par
\tab window.jQuery = window.$ = jQuery;\par
\}\par
\par
\par
\par
\par
return jQuery;\par
\} );\par
}
 
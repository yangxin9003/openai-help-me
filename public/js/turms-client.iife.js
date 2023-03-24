var TurmsClient = (function () {
  'use strict';

  function _typeof(obj) {
    "@babel/helpers - typeof";

    return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
      return typeof obj;
    } : function (obj) {
      return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    }, _typeof(obj);
  }

  var version$1 = "0.10.0-SNAPSHOT";

  var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

  function getDefaultExportFromCjs (x) {
  	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
  }

  var fails$E = function (exec) {
    try {
      return !!exec();
    } catch (error) {
      return true;
    }
  };

  var fails$D = fails$E;

  var functionBindNative = !fails$D(function () {
    // eslint-disable-next-line es/no-function-prototype-bind -- safe
    var test = (function () { /* empty */ }).bind();
    // eslint-disable-next-line no-prototype-builtins -- safe
    return typeof test != 'function' || test.hasOwnProperty('prototype');
  });

  var NATIVE_BIND$3 = functionBindNative;

  var FunctionPrototype$3 = Function.prototype;
  var call$r = FunctionPrototype$3.call;
  var uncurryThisWithBind = NATIVE_BIND$3 && FunctionPrototype$3.bind.bind(call$r, call$r);

  var functionUncurryThis = NATIVE_BIND$3 ? uncurryThisWithBind : function (fn) {
    return function () {
      return call$r.apply(fn, arguments);
    };
  };

  var uncurryThis$B = functionUncurryThis;

  var toString$c = uncurryThis$B({}.toString);
  var stringSlice$7 = uncurryThis$B(''.slice);

  var classofRaw$2 = function (it) {
    return stringSlice$7(toString$c(it), 8, -1);
  };

  var uncurryThis$A = functionUncurryThis;
  var fails$C = fails$E;
  var classof$g = classofRaw$2;

  var $Object$4 = Object;
  var split = uncurryThis$A(''.split);

  // fallback for non-array-like ES3 and non-enumerable old V8 strings
  var indexedObject = fails$C(function () {
    // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
    // eslint-disable-next-line no-prototype-builtins -- safe
    return !$Object$4('z').propertyIsEnumerable(0);
  }) ? function (it) {
    return classof$g(it) == 'String' ? split(it, '') : $Object$4(it);
  } : $Object$4;

  // we can't use just `it == null` since of `document.all` special case
  // https://tc39.es/ecma262/#sec-IsHTMLDDA-internal-slot-aec
  var isNullOrUndefined$7 = function (it) {
    return it === null || it === undefined;
  };

  var isNullOrUndefined$6 = isNullOrUndefined$7;

  var $TypeError$i = TypeError;

  // `RequireObjectCoercible` abstract operation
  // https://tc39.es/ecma262/#sec-requireobjectcoercible
  var requireObjectCoercible$6 = function (it) {
    if (isNullOrUndefined$6(it)) throw $TypeError$i("Can't call method on " + it);
    return it;
  };

  // toObject with fallback for non-array-like ES3 strings
  var IndexedObject$3 = indexedObject;
  var requireObjectCoercible$5 = requireObjectCoercible$6;

  var toIndexedObject$a = function (it) {
    return IndexedObject$3(requireObjectCoercible$5(it));
  };

  var check = function (it) {
    return it && it.Math == Math && it;
  };

  // https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
  var global$x =
    // eslint-disable-next-line es/no-global-this -- safe
    check(typeof globalThis == 'object' && globalThis) ||
    check(typeof window == 'object' && window) ||
    // eslint-disable-next-line no-restricted-globals -- safe
    check(typeof self == 'object' && self) ||
    check(typeof commonjsGlobal == 'object' && commonjsGlobal) ||
    // eslint-disable-next-line no-new-func -- fallback
    (function () { return this; })() || Function('return this')();

  var sharedExports = {};
  var shared$7 = {
    get exports(){ return sharedExports; },
    set exports(v){ sharedExports = v; },
  };

  var global$w = global$x;

  // eslint-disable-next-line es/no-object-defineproperty -- safe
  var defineProperty$8 = Object.defineProperty;

  var defineGlobalProperty$3 = function (key, value) {
    try {
      defineProperty$8(global$w, key, { value: value, configurable: true, writable: true });
    } catch (error) {
      global$w[key] = value;
    } return value;
  };

  var global$v = global$x;
  var defineGlobalProperty$2 = defineGlobalProperty$3;

  var SHARED = '__core-js_shared__';
  var store$3 = global$v[SHARED] || defineGlobalProperty$2(SHARED, {});

  var sharedStore = store$3;

  var store$2 = sharedStore;

  (shared$7.exports = function (key, value) {
    return store$2[key] || (store$2[key] = value !== undefined ? value : {});
  })('versions', []).push({
    version: '3.29.1',
    mode: 'global',
    copyright: '© 2014-2023 Denis Pushkarev (zloirock.ru)',
    license: 'https://github.com/zloirock/core-js/blob/v3.29.1/LICENSE',
    source: 'https://github.com/zloirock/core-js'
  });

  var requireObjectCoercible$4 = requireObjectCoercible$6;

  var $Object$3 = Object;

  // `ToObject` abstract operation
  // https://tc39.es/ecma262/#sec-toobject
  var toObject$d = function (argument) {
    return $Object$3(requireObjectCoercible$4(argument));
  };

  var uncurryThis$z = functionUncurryThis;
  var toObject$c = toObject$d;

  var hasOwnProperty = uncurryThis$z({}.hasOwnProperty);

  // `HasOwnProperty` abstract operation
  // https://tc39.es/ecma262/#sec-hasownproperty
  // eslint-disable-next-line es/no-object-hasown -- safe
  var hasOwnProperty_1 = Object.hasOwn || function hasOwn(it, key) {
    return hasOwnProperty(toObject$c(it), key);
  };

  var uncurryThis$y = functionUncurryThis;

  var id$1 = 0;
  var postfix = Math.random();
  var toString$b = uncurryThis$y(1.0.toString);

  var uid$5 = function (key) {
    return 'Symbol(' + (key === undefined ? '' : key) + ')_' + toString$b(++id$1 + postfix, 36);
  };

  var engineUserAgent = typeof navigator != 'undefined' && String(navigator.userAgent) || '';

  var global$u = global$x;
  var userAgent$5 = engineUserAgent;

  var process$4 = global$u.process;
  var Deno$1 = global$u.Deno;
  var versions = process$4 && process$4.versions || Deno$1 && Deno$1.version;
  var v8 = versions && versions.v8;
  var match, version;

  if (v8) {
    match = v8.split('.');
    // in old Chrome, versions of V8 isn't V8 = Chrome / 10
    // but their correct versions are not interesting for us
    version = match[0] > 0 && match[0] < 4 ? 1 : +(match[0] + match[1]);
  }

  // BrowserFS NodeJS `process` polyfill incorrectly set `.v8` to `0.0`
  // so check `userAgent` even if `.v8` exists, but 0
  if (!version && userAgent$5) {
    match = userAgent$5.match(/Edge\/(\d+)/);
    if (!match || match[1] >= 74) {
      match = userAgent$5.match(/Chrome\/(\d+)/);
      if (match) version = +match[1];
    }
  }

  var engineV8Version = version;

  /* eslint-disable es/no-symbol -- required for testing */

  var V8_VERSION$3 = engineV8Version;
  var fails$B = fails$E;

  // eslint-disable-next-line es/no-object-getownpropertysymbols -- required for testing
  var symbolConstructorDetection = !!Object.getOwnPropertySymbols && !fails$B(function () {
    var symbol = Symbol();
    // Chrome 38 Symbol has incorrect toString conversion
    // `get-own-property-symbols` polyfill symbols converted to object are not Symbol instances
    return !String(symbol) || !(Object(symbol) instanceof Symbol) ||
      // Chrome 38-40 symbols are not inherited from DOM collections prototypes to instances
      !Symbol.sham && V8_VERSION$3 && V8_VERSION$3 < 41;
  });

  /* eslint-disable es/no-symbol -- required for testing */

  var NATIVE_SYMBOL$6 = symbolConstructorDetection;

  var useSymbolAsUid = NATIVE_SYMBOL$6
    && !Symbol.sham
    && typeof Symbol.iterator == 'symbol';

  var global$t = global$x;
  var shared$6 = sharedExports;
  var hasOwn$i = hasOwnProperty_1;
  var uid$4 = uid$5;
  var NATIVE_SYMBOL$5 = symbolConstructorDetection;
  var USE_SYMBOL_AS_UID$1 = useSymbolAsUid;

  var Symbol$1 = global$t.Symbol;
  var WellKnownSymbolsStore$1 = shared$6('wks');
  var createWellKnownSymbol = USE_SYMBOL_AS_UID$1 ? Symbol$1['for'] || Symbol$1 : Symbol$1 && Symbol$1.withoutSetter || uid$4;

  var wellKnownSymbol$q = function (name) {
    if (!hasOwn$i(WellKnownSymbolsStore$1, name)) {
      WellKnownSymbolsStore$1[name] = NATIVE_SYMBOL$5 && hasOwn$i(Symbol$1, name)
        ? Symbol$1[name]
        : createWellKnownSymbol('Symbol.' + name);
    } return WellKnownSymbolsStore$1[name];
  };

  var documentAll$2 = typeof document == 'object' && document.all;

  // https://tc39.es/ecma262/#sec-IsHTMLDDA-internal-slot
  // eslint-disable-next-line unicorn/no-typeof-undefined -- required for testing
  var IS_HTMLDDA = typeof documentAll$2 == 'undefined' && documentAll$2 !== undefined;

  var documentAll_1 = {
    all: documentAll$2,
    IS_HTMLDDA: IS_HTMLDDA
  };

  var $documentAll$1 = documentAll_1;

  var documentAll$1 = $documentAll$1.all;

  // `IsCallable` abstract operation
  // https://tc39.es/ecma262/#sec-iscallable
  var isCallable$t = $documentAll$1.IS_HTMLDDA ? function (argument) {
    return typeof argument == 'function' || argument === documentAll$1;
  } : function (argument) {
    return typeof argument == 'function';
  };

  var isCallable$s = isCallable$t;
  var $documentAll = documentAll_1;

  var documentAll = $documentAll.all;

  var isObject$i = $documentAll.IS_HTMLDDA ? function (it) {
    return typeof it == 'object' ? it !== null : isCallable$s(it) || it === documentAll;
  } : function (it) {
    return typeof it == 'object' ? it !== null : isCallable$s(it);
  };

  var isObject$h = isObject$i;

  var $String$5 = String;
  var $TypeError$h = TypeError;

  // `Assert: Type(argument) is Object`
  var anObject$g = function (argument) {
    if (isObject$h(argument)) return argument;
    throw $TypeError$h($String$5(argument) + ' is not an object');
  };

  var objectDefineProperties = {};

  var fails$A = fails$E;

  // Detect IE8's incomplete defineProperty implementation
  var descriptors = !fails$A(function () {
    // eslint-disable-next-line es/no-object-defineproperty -- required for testing
    return Object.defineProperty({}, 1, { get: function () { return 7; } })[1] != 7;
  });

  var DESCRIPTORS$i = descriptors;
  var fails$z = fails$E;

  // V8 ~ Chrome 36-
  // https://bugs.chromium.org/p/v8/issues/detail?id=3334
  var v8PrototypeDefineBug = DESCRIPTORS$i && fails$z(function () {
    // eslint-disable-next-line es/no-object-defineproperty -- required for testing
    return Object.defineProperty(function () { /* empty */ }, 'prototype', {
      value: 42,
      writable: false
    }).prototype != 42;
  });

  var objectDefineProperty = {};

  var global$s = global$x;
  var isObject$g = isObject$i;

  var document$3 = global$s.document;
  // typeof document.createElement is 'object' in old IE
  var EXISTS$1 = isObject$g(document$3) && isObject$g(document$3.createElement);

  var documentCreateElement$2 = function (it) {
    return EXISTS$1 ? document$3.createElement(it) : {};
  };

  var DESCRIPTORS$h = descriptors;
  var fails$y = fails$E;
  var createElement$1 = documentCreateElement$2;

  // Thanks to IE8 for its funny defineProperty
  var ie8DomDefine = !DESCRIPTORS$h && !fails$y(function () {
    // eslint-disable-next-line es/no-object-defineproperty -- required for testing
    return Object.defineProperty(createElement$1('div'), 'a', {
      get: function () { return 7; }
    }).a != 7;
  });

  var NATIVE_BIND$2 = functionBindNative;

  var call$q = Function.prototype.call;

  var functionCall = NATIVE_BIND$2 ? call$q.bind(call$q) : function () {
    return call$q.apply(call$q, arguments);
  };

  var global$r = global$x;
  var isCallable$r = isCallable$t;

  var aFunction = function (argument) {
    return isCallable$r(argument) ? argument : undefined;
  };

  var getBuiltIn$b = function (namespace, method) {
    return arguments.length < 2 ? aFunction(global$r[namespace]) : global$r[namespace] && global$r[namespace][method];
  };

  var uncurryThis$x = functionUncurryThis;

  var objectIsPrototypeOf = uncurryThis$x({}.isPrototypeOf);

  var getBuiltIn$a = getBuiltIn$b;
  var isCallable$q = isCallable$t;
  var isPrototypeOf$7 = objectIsPrototypeOf;
  var USE_SYMBOL_AS_UID = useSymbolAsUid;

  var $Object$2 = Object;

  var isSymbol$5 = USE_SYMBOL_AS_UID ? function (it) {
    return typeof it == 'symbol';
  } : function (it) {
    var $Symbol = getBuiltIn$a('Symbol');
    return isCallable$q($Symbol) && isPrototypeOf$7($Symbol.prototype, $Object$2(it));
  };

  var $String$4 = String;

  var tryToString$7 = function (argument) {
    try {
      return $String$4(argument);
    } catch (error) {
      return 'Object';
    }
  };

  var isCallable$p = isCallable$t;
  var tryToString$6 = tryToString$7;

  var $TypeError$g = TypeError;

  // `Assert: IsCallable(argument) is true`
  var aCallable$b = function (argument) {
    if (isCallable$p(argument)) return argument;
    throw $TypeError$g(tryToString$6(argument) + ' is not a function');
  };

  var aCallable$a = aCallable$b;
  var isNullOrUndefined$5 = isNullOrUndefined$7;

  // `GetMethod` abstract operation
  // https://tc39.es/ecma262/#sec-getmethod
  var getMethod$4 = function (V, P) {
    var func = V[P];
    return isNullOrUndefined$5(func) ? undefined : aCallable$a(func);
  };

  var call$p = functionCall;
  var isCallable$o = isCallable$t;
  var isObject$f = isObject$i;

  var $TypeError$f = TypeError;

  // `OrdinaryToPrimitive` abstract operation
  // https://tc39.es/ecma262/#sec-ordinarytoprimitive
  var ordinaryToPrimitive$1 = function (input, pref) {
    var fn, val;
    if (pref === 'string' && isCallable$o(fn = input.toString) && !isObject$f(val = call$p(fn, input))) return val;
    if (isCallable$o(fn = input.valueOf) && !isObject$f(val = call$p(fn, input))) return val;
    if (pref !== 'string' && isCallable$o(fn = input.toString) && !isObject$f(val = call$p(fn, input))) return val;
    throw $TypeError$f("Can't convert object to primitive value");
  };

  var call$o = functionCall;
  var isObject$e = isObject$i;
  var isSymbol$4 = isSymbol$5;
  var getMethod$3 = getMethod$4;
  var ordinaryToPrimitive = ordinaryToPrimitive$1;
  var wellKnownSymbol$p = wellKnownSymbol$q;

  var $TypeError$e = TypeError;
  var TO_PRIMITIVE = wellKnownSymbol$p('toPrimitive');

  // `ToPrimitive` abstract operation
  // https://tc39.es/ecma262/#sec-toprimitive
  var toPrimitive$2 = function (input, pref) {
    if (!isObject$e(input) || isSymbol$4(input)) return input;
    var exoticToPrim = getMethod$3(input, TO_PRIMITIVE);
    var result;
    if (exoticToPrim) {
      if (pref === undefined) pref = 'default';
      result = call$o(exoticToPrim, input, pref);
      if (!isObject$e(result) || isSymbol$4(result)) return result;
      throw $TypeError$e("Can't convert object to primitive value");
    }
    if (pref === undefined) pref = 'number';
    return ordinaryToPrimitive(input, pref);
  };

  var toPrimitive$1 = toPrimitive$2;
  var isSymbol$3 = isSymbol$5;

  // `ToPropertyKey` abstract operation
  // https://tc39.es/ecma262/#sec-topropertykey
  var toPropertyKey$5 = function (argument) {
    var key = toPrimitive$1(argument, 'string');
    return isSymbol$3(key) ? key : key + '';
  };

  var DESCRIPTORS$g = descriptors;
  var IE8_DOM_DEFINE$1 = ie8DomDefine;
  var V8_PROTOTYPE_DEFINE_BUG$1 = v8PrototypeDefineBug;
  var anObject$f = anObject$g;
  var toPropertyKey$4 = toPropertyKey$5;

  var $TypeError$d = TypeError;
  // eslint-disable-next-line es/no-object-defineproperty -- safe
  var $defineProperty$1 = Object.defineProperty;
  // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
  var $getOwnPropertyDescriptor$2 = Object.getOwnPropertyDescriptor;
  var ENUMERABLE = 'enumerable';
  var CONFIGURABLE$1 = 'configurable';
  var WRITABLE = 'writable';

  // `Object.defineProperty` method
  // https://tc39.es/ecma262/#sec-object.defineproperty
  objectDefineProperty.f = DESCRIPTORS$g ? V8_PROTOTYPE_DEFINE_BUG$1 ? function defineProperty(O, P, Attributes) {
    anObject$f(O);
    P = toPropertyKey$4(P);
    anObject$f(Attributes);
    if (typeof O === 'function' && P === 'prototype' && 'value' in Attributes && WRITABLE in Attributes && !Attributes[WRITABLE]) {
      var current = $getOwnPropertyDescriptor$2(O, P);
      if (current && current[WRITABLE]) {
        O[P] = Attributes.value;
        Attributes = {
          configurable: CONFIGURABLE$1 in Attributes ? Attributes[CONFIGURABLE$1] : current[CONFIGURABLE$1],
          enumerable: ENUMERABLE in Attributes ? Attributes[ENUMERABLE] : current[ENUMERABLE],
          writable: false
        };
      }
    } return $defineProperty$1(O, P, Attributes);
  } : $defineProperty$1 : function defineProperty(O, P, Attributes) {
    anObject$f(O);
    P = toPropertyKey$4(P);
    anObject$f(Attributes);
    if (IE8_DOM_DEFINE$1) try {
      return $defineProperty$1(O, P, Attributes);
    } catch (error) { /* empty */ }
    if ('get' in Attributes || 'set' in Attributes) throw $TypeError$d('Accessors not supported');
    if ('value' in Attributes) O[P] = Attributes.value;
    return O;
  };

  var ceil = Math.ceil;
  var floor$5 = Math.floor;

  // `Math.trunc` method
  // https://tc39.es/ecma262/#sec-math.trunc
  // eslint-disable-next-line es/no-math-trunc -- safe
  var mathTrunc = Math.trunc || function trunc(x) {
    var n = +x;
    return (n > 0 ? floor$5 : ceil)(n);
  };

  var trunc = mathTrunc;

  // `ToIntegerOrInfinity` abstract operation
  // https://tc39.es/ecma262/#sec-tointegerorinfinity
  var toIntegerOrInfinity$8 = function (argument) {
    var number = +argument;
    // eslint-disable-next-line no-self-compare -- NaN check
    return number !== number || number === 0 ? 0 : trunc(number);
  };

  var toIntegerOrInfinity$7 = toIntegerOrInfinity$8;

  var max$2 = Math.max;
  var min$6 = Math.min;

  // Helper for a popular repeating case of the spec:
  // Let integer be ? ToInteger(index).
  // If integer < 0, let result be max((length + integer), 0); else let result be min(integer, length).
  var toAbsoluteIndex$5 = function (index, length) {
    var integer = toIntegerOrInfinity$7(index);
    return integer < 0 ? max$2(integer + length, 0) : min$6(integer, length);
  };

  var toIntegerOrInfinity$6 = toIntegerOrInfinity$8;

  var min$5 = Math.min;

  // `ToLength` abstract operation
  // https://tc39.es/ecma262/#sec-tolength
  var toLength$8 = function (argument) {
    return argument > 0 ? min$5(toIntegerOrInfinity$6(argument), 0x1FFFFFFFFFFFFF) : 0; // 2 ** 53 - 1 == 9007199254740991
  };

  var toLength$7 = toLength$8;

  // `LengthOfArrayLike` abstract operation
  // https://tc39.es/ecma262/#sec-lengthofarraylike
  var lengthOfArrayLike$d = function (obj) {
    return toLength$7(obj.length);
  };

  var toIndexedObject$9 = toIndexedObject$a;
  var toAbsoluteIndex$4 = toAbsoluteIndex$5;
  var lengthOfArrayLike$c = lengthOfArrayLike$d;

  // `Array.prototype.{ indexOf, includes }` methods implementation
  var createMethod$4 = function (IS_INCLUDES) {
    return function ($this, el, fromIndex) {
      var O = toIndexedObject$9($this);
      var length = lengthOfArrayLike$c(O);
      var index = toAbsoluteIndex$4(fromIndex, length);
      var value;
      // Array#includes uses SameValueZero equality algorithm
      // eslint-disable-next-line no-self-compare -- NaN check
      if (IS_INCLUDES && el != el) while (length > index) {
        value = O[index++];
        // eslint-disable-next-line no-self-compare -- NaN check
        if (value != value) return true;
      // Array#indexOf ignores holes, Array#includes - not
      } else for (;length > index; index++) {
        if ((IS_INCLUDES || index in O) && O[index] === el) return IS_INCLUDES || index || 0;
      } return !IS_INCLUDES && -1;
    };
  };

  var arrayIncludes = {
    // `Array.prototype.includes` method
    // https://tc39.es/ecma262/#sec-array.prototype.includes
    includes: createMethod$4(true),
    // `Array.prototype.indexOf` method
    // https://tc39.es/ecma262/#sec-array.prototype.indexof
    indexOf: createMethod$4(false)
  };

  var hiddenKeys$6 = {};

  var uncurryThis$w = functionUncurryThis;
  var hasOwn$h = hasOwnProperty_1;
  var toIndexedObject$8 = toIndexedObject$a;
  var indexOf$1 = arrayIncludes.indexOf;
  var hiddenKeys$5 = hiddenKeys$6;

  var push$5 = uncurryThis$w([].push);

  var objectKeysInternal = function (object, names) {
    var O = toIndexedObject$8(object);
    var i = 0;
    var result = [];
    var key;
    for (key in O) !hasOwn$h(hiddenKeys$5, key) && hasOwn$h(O, key) && push$5(result, key);
    // Don't enum bug & hidden keys
    while (names.length > i) if (hasOwn$h(O, key = names[i++])) {
      ~indexOf$1(result, key) || push$5(result, key);
    }
    return result;
  };

  // IE8- don't enum bug keys
  var enumBugKeys$3 = [
    'constructor',
    'hasOwnProperty',
    'isPrototypeOf',
    'propertyIsEnumerable',
    'toLocaleString',
    'toString',
    'valueOf'
  ];

  var internalObjectKeys$1 = objectKeysInternal;
  var enumBugKeys$2 = enumBugKeys$3;

  // `Object.keys` method
  // https://tc39.es/ecma262/#sec-object.keys
  // eslint-disable-next-line es/no-object-keys -- safe
  var objectKeys$4 = Object.keys || function keys(O) {
    return internalObjectKeys$1(O, enumBugKeys$2);
  };

  var DESCRIPTORS$f = descriptors;
  var V8_PROTOTYPE_DEFINE_BUG = v8PrototypeDefineBug;
  var definePropertyModule$6 = objectDefineProperty;
  var anObject$e = anObject$g;
  var toIndexedObject$7 = toIndexedObject$a;
  var objectKeys$3 = objectKeys$4;

  // `Object.defineProperties` method
  // https://tc39.es/ecma262/#sec-object.defineproperties
  // eslint-disable-next-line es/no-object-defineproperties -- safe
  objectDefineProperties.f = DESCRIPTORS$f && !V8_PROTOTYPE_DEFINE_BUG ? Object.defineProperties : function defineProperties(O, Properties) {
    anObject$e(O);
    var props = toIndexedObject$7(Properties);
    var keys = objectKeys$3(Properties);
    var length = keys.length;
    var index = 0;
    var key;
    while (length > index) definePropertyModule$6.f(O, key = keys[index++], props[key]);
    return O;
  };

  var getBuiltIn$9 = getBuiltIn$b;

  var html$2 = getBuiltIn$9('document', 'documentElement');

  var shared$5 = sharedExports;
  var uid$3 = uid$5;

  var keys$1 = shared$5('keys');

  var sharedKey$4 = function (key) {
    return keys$1[key] || (keys$1[key] = uid$3(key));
  };

  /* global ActiveXObject -- old IE, WSH */

  var anObject$d = anObject$g;
  var definePropertiesModule$1 = objectDefineProperties;
  var enumBugKeys$1 = enumBugKeys$3;
  var hiddenKeys$4 = hiddenKeys$6;
  var html$1 = html$2;
  var documentCreateElement$1 = documentCreateElement$2;
  var sharedKey$3 = sharedKey$4;

  var GT = '>';
  var LT = '<';
  var PROTOTYPE$2 = 'prototype';
  var SCRIPT = 'script';
  var IE_PROTO$1 = sharedKey$3('IE_PROTO');

  var EmptyConstructor = function () { /* empty */ };

  var scriptTag = function (content) {
    return LT + SCRIPT + GT + content + LT + '/' + SCRIPT + GT;
  };

  // Create object with fake `null` prototype: use ActiveX Object with cleared prototype
  var NullProtoObjectViaActiveX = function (activeXDocument) {
    activeXDocument.write(scriptTag(''));
    activeXDocument.close();
    var temp = activeXDocument.parentWindow.Object;
    activeXDocument = null; // avoid memory leak
    return temp;
  };

  // Create object with fake `null` prototype: use iframe Object with cleared prototype
  var NullProtoObjectViaIFrame = function () {
    // Thrash, waste and sodomy: IE GC bug
    var iframe = documentCreateElement$1('iframe');
    var JS = 'java' + SCRIPT + ':';
    var iframeDocument;
    iframe.style.display = 'none';
    html$1.appendChild(iframe);
    // https://github.com/zloirock/core-js/issues/475
    iframe.src = String(JS);
    iframeDocument = iframe.contentWindow.document;
    iframeDocument.open();
    iframeDocument.write(scriptTag('document.F=Object'));
    iframeDocument.close();
    return iframeDocument.F;
  };

  // Check for document.domain and active x support
  // No need to use active x approach when document.domain is not set
  // see https://github.com/es-shims/es5-shim/issues/150
  // variation of https://github.com/kitcambridge/es5-shim/commit/4f738ac066346
  // avoid IE GC bug
  var activeXDocument;
  var NullProtoObject = function () {
    try {
      activeXDocument = new ActiveXObject('htmlfile');
    } catch (error) { /* ignore */ }
    NullProtoObject = typeof document != 'undefined'
      ? document.domain && activeXDocument
        ? NullProtoObjectViaActiveX(activeXDocument) // old IE
        : NullProtoObjectViaIFrame()
      : NullProtoObjectViaActiveX(activeXDocument); // WSH
    var length = enumBugKeys$1.length;
    while (length--) delete NullProtoObject[PROTOTYPE$2][enumBugKeys$1[length]];
    return NullProtoObject();
  };

  hiddenKeys$4[IE_PROTO$1] = true;

  // `Object.create` method
  // https://tc39.es/ecma262/#sec-object.create
  // eslint-disable-next-line es/no-object-create -- safe
  var objectCreate = Object.create || function create(O, Properties) {
    var result;
    if (O !== null) {
      EmptyConstructor[PROTOTYPE$2] = anObject$d(O);
      result = new EmptyConstructor();
      EmptyConstructor[PROTOTYPE$2] = null;
      // add "__proto__" for Object.getPrototypeOf polyfill
      result[IE_PROTO$1] = O;
    } else result = NullProtoObject();
    return Properties === undefined ? result : definePropertiesModule$1.f(result, Properties);
  };

  var wellKnownSymbol$o = wellKnownSymbol$q;
  var create$6 = objectCreate;
  var defineProperty$7 = objectDefineProperty.f;

  var UNSCOPABLES = wellKnownSymbol$o('unscopables');
  var ArrayPrototype$1 = Array.prototype;

  // Array.prototype[@@unscopables]
  // https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
  if (ArrayPrototype$1[UNSCOPABLES] == undefined) {
    defineProperty$7(ArrayPrototype$1, UNSCOPABLES, {
      configurable: true,
      value: create$6(null)
    });
  }

  // add a key to Array.prototype[@@unscopables]
  var addToUnscopables$1 = function (key) {
    ArrayPrototype$1[UNSCOPABLES][key] = true;
  };

  var iterators = {};

  var global$q = global$x;
  var isCallable$n = isCallable$t;

  var WeakMap$1 = global$q.WeakMap;

  var weakMapBasicDetection = isCallable$n(WeakMap$1) && /native code/.test(String(WeakMap$1));

  var createPropertyDescriptor$6 = function (bitmap, value) {
    return {
      enumerable: !(bitmap & 1),
      configurable: !(bitmap & 2),
      writable: !(bitmap & 4),
      value: value
    };
  };

  var DESCRIPTORS$e = descriptors;
  var definePropertyModule$5 = objectDefineProperty;
  var createPropertyDescriptor$5 = createPropertyDescriptor$6;

  var createNonEnumerableProperty$9 = DESCRIPTORS$e ? function (object, key, value) {
    return definePropertyModule$5.f(object, key, createPropertyDescriptor$5(1, value));
  } : function (object, key, value) {
    object[key] = value;
    return object;
  };

  var NATIVE_WEAK_MAP = weakMapBasicDetection;
  var global$p = global$x;
  var isObject$d = isObject$i;
  var createNonEnumerableProperty$8 = createNonEnumerableProperty$9;
  var hasOwn$g = hasOwnProperty_1;
  var shared$4 = sharedStore;
  var sharedKey$2 = sharedKey$4;
  var hiddenKeys$3 = hiddenKeys$6;

  var OBJECT_ALREADY_INITIALIZED = 'Object already initialized';
  var TypeError$4 = global$p.TypeError;
  var WeakMap = global$p.WeakMap;
  var set$2, get$1, has;

  var enforce = function (it) {
    return has(it) ? get$1(it) : set$2(it, {});
  };

  var getterFor = function (TYPE) {
    return function (it) {
      var state;
      if (!isObject$d(it) || (state = get$1(it)).type !== TYPE) {
        throw TypeError$4('Incompatible receiver, ' + TYPE + ' required');
      } return state;
    };
  };

  if (NATIVE_WEAK_MAP || shared$4.state) {
    var store$1 = shared$4.state || (shared$4.state = new WeakMap());
    /* eslint-disable no-self-assign -- prototype methods protection */
    store$1.get = store$1.get;
    store$1.has = store$1.has;
    store$1.set = store$1.set;
    /* eslint-enable no-self-assign -- prototype methods protection */
    set$2 = function (it, metadata) {
      if (store$1.has(it)) throw TypeError$4(OBJECT_ALREADY_INITIALIZED);
      metadata.facade = it;
      store$1.set(it, metadata);
      return metadata;
    };
    get$1 = function (it) {
      return store$1.get(it) || {};
    };
    has = function (it) {
      return store$1.has(it);
    };
  } else {
    var STATE = sharedKey$2('state');
    hiddenKeys$3[STATE] = true;
    set$2 = function (it, metadata) {
      if (hasOwn$g(it, STATE)) throw TypeError$4(OBJECT_ALREADY_INITIALIZED);
      metadata.facade = it;
      createNonEnumerableProperty$8(it, STATE, metadata);
      return metadata;
    };
    get$1 = function (it) {
      return hasOwn$g(it, STATE) ? it[STATE] : {};
    };
    has = function (it) {
      return hasOwn$g(it, STATE);
    };
  }

  var internalState = {
    set: set$2,
    get: get$1,
    has: has,
    enforce: enforce,
    getterFor: getterFor
  };

  var objectGetOwnPropertyDescriptor = {};

  var objectPropertyIsEnumerable = {};

  var $propertyIsEnumerable$2 = {}.propertyIsEnumerable;
  // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
  var getOwnPropertyDescriptor$4 = Object.getOwnPropertyDescriptor;

  // Nashorn ~ JDK8 bug
  var NASHORN_BUG = getOwnPropertyDescriptor$4 && !$propertyIsEnumerable$2.call({ 1: 2 }, 1);

  // `Object.prototype.propertyIsEnumerable` method implementation
  // https://tc39.es/ecma262/#sec-object.prototype.propertyisenumerable
  objectPropertyIsEnumerable.f = NASHORN_BUG ? function propertyIsEnumerable(V) {
    var descriptor = getOwnPropertyDescriptor$4(this, V);
    return !!descriptor && descriptor.enumerable;
  } : $propertyIsEnumerable$2;

  var DESCRIPTORS$d = descriptors;
  var call$n = functionCall;
  var propertyIsEnumerableModule$2 = objectPropertyIsEnumerable;
  var createPropertyDescriptor$4 = createPropertyDescriptor$6;
  var toIndexedObject$6 = toIndexedObject$a;
  var toPropertyKey$3 = toPropertyKey$5;
  var hasOwn$f = hasOwnProperty_1;
  var IE8_DOM_DEFINE = ie8DomDefine;

  // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
  var $getOwnPropertyDescriptor$1 = Object.getOwnPropertyDescriptor;

  // `Object.getOwnPropertyDescriptor` method
  // https://tc39.es/ecma262/#sec-object.getownpropertydescriptor
  objectGetOwnPropertyDescriptor.f = DESCRIPTORS$d ? $getOwnPropertyDescriptor$1 : function getOwnPropertyDescriptor(O, P) {
    O = toIndexedObject$6(O);
    P = toPropertyKey$3(P);
    if (IE8_DOM_DEFINE) try {
      return $getOwnPropertyDescriptor$1(O, P);
    } catch (error) { /* empty */ }
    if (hasOwn$f(O, P)) return createPropertyDescriptor$4(!call$n(propertyIsEnumerableModule$2.f, O, P), O[P]);
  };

  var makeBuiltInExports = {};
  var makeBuiltIn$3 = {
    get exports(){ return makeBuiltInExports; },
    set exports(v){ makeBuiltInExports = v; },
  };

  var DESCRIPTORS$c = descriptors;
  var hasOwn$e = hasOwnProperty_1;

  var FunctionPrototype$2 = Function.prototype;
  // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
  var getDescriptor = DESCRIPTORS$c && Object.getOwnPropertyDescriptor;

  var EXISTS = hasOwn$e(FunctionPrototype$2, 'name');
  // additional protection from minified / mangled / dropped function names
  var PROPER = EXISTS && (function something() { /* empty */ }).name === 'something';
  var CONFIGURABLE = EXISTS && (!DESCRIPTORS$c || (DESCRIPTORS$c && getDescriptor(FunctionPrototype$2, 'name').configurable));

  var functionName = {
    EXISTS: EXISTS,
    PROPER: PROPER,
    CONFIGURABLE: CONFIGURABLE
  };

  var uncurryThis$v = functionUncurryThis;
  var isCallable$m = isCallable$t;
  var store = sharedStore;

  var functionToString$1 = uncurryThis$v(Function.toString);

  // this helper broken in `core-js@3.4.1-3.4.4`, so we can't use `shared` helper
  if (!isCallable$m(store.inspectSource)) {
    store.inspectSource = function (it) {
      return functionToString$1(it);
    };
  }

  var inspectSource$3 = store.inspectSource;

  var uncurryThis$u = functionUncurryThis;
  var fails$x = fails$E;
  var isCallable$l = isCallable$t;
  var hasOwn$d = hasOwnProperty_1;
  var DESCRIPTORS$b = descriptors;
  var CONFIGURABLE_FUNCTION_NAME$2 = functionName.CONFIGURABLE;
  var inspectSource$2 = inspectSource$3;
  var InternalStateModule$8 = internalState;

  var enforceInternalState$2 = InternalStateModule$8.enforce;
  var getInternalState$6 = InternalStateModule$8.get;
  var $String$3 = String;
  // eslint-disable-next-line es/no-object-defineproperty -- safe
  var defineProperty$6 = Object.defineProperty;
  var stringSlice$6 = uncurryThis$u(''.slice);
  var replace$4 = uncurryThis$u(''.replace);
  var join$1 = uncurryThis$u([].join);

  var CONFIGURABLE_LENGTH = DESCRIPTORS$b && !fails$x(function () {
    return defineProperty$6(function () { /* empty */ }, 'length', { value: 8 }).length !== 8;
  });

  var TEMPLATE = String(String).split('String');

  var makeBuiltIn$2 = makeBuiltIn$3.exports = function (value, name, options) {
    if (stringSlice$6($String$3(name), 0, 7) === 'Symbol(') {
      name = '[' + replace$4($String$3(name), /^Symbol\(([^)]*)\)/, '$1') + ']';
    }
    if (options && options.getter) name = 'get ' + name;
    if (options && options.setter) name = 'set ' + name;
    if (!hasOwn$d(value, 'name') || (CONFIGURABLE_FUNCTION_NAME$2 && value.name !== name)) {
      if (DESCRIPTORS$b) defineProperty$6(value, 'name', { value: name, configurable: true });
      else value.name = name;
    }
    if (CONFIGURABLE_LENGTH && options && hasOwn$d(options, 'arity') && value.length !== options.arity) {
      defineProperty$6(value, 'length', { value: options.arity });
    }
    try {
      if (options && hasOwn$d(options, 'constructor') && options.constructor) {
        if (DESCRIPTORS$b) defineProperty$6(value, 'prototype', { writable: false });
      // in V8 ~ Chrome 53, prototypes of some methods, like `Array.prototype.values`, are non-writable
      } else if (value.prototype) value.prototype = undefined;
    } catch (error) { /* empty */ }
    var state = enforceInternalState$2(value);
    if (!hasOwn$d(state, 'source')) {
      state.source = join$1(TEMPLATE, typeof name == 'string' ? name : '');
    } return value;
  };

  // add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
  // eslint-disable-next-line no-extend-native -- required
  Function.prototype.toString = makeBuiltIn$2(function toString() {
    return isCallable$l(this) && getInternalState$6(this).source || inspectSource$2(this);
  }, 'toString');

  var isCallable$k = isCallable$t;
  var definePropertyModule$4 = objectDefineProperty;
  var makeBuiltIn$1 = makeBuiltInExports;
  var defineGlobalProperty$1 = defineGlobalProperty$3;

  var defineBuiltIn$e = function (O, key, value, options) {
    if (!options) options = {};
    var simple = options.enumerable;
    var name = options.name !== undefined ? options.name : key;
    if (isCallable$k(value)) makeBuiltIn$1(value, name, options);
    if (options.global) {
      if (simple) O[key] = value;
      else defineGlobalProperty$1(key, value);
    } else {
      try {
        if (!options.unsafe) delete O[key];
        else if (O[key]) simple = true;
      } catch (error) { /* empty */ }
      if (simple) O[key] = value;
      else definePropertyModule$4.f(O, key, {
        value: value,
        enumerable: false,
        configurable: !options.nonConfigurable,
        writable: !options.nonWritable
      });
    } return O;
  };

  var objectGetOwnPropertyNames = {};

  var internalObjectKeys = objectKeysInternal;
  var enumBugKeys = enumBugKeys$3;

  var hiddenKeys$2 = enumBugKeys.concat('length', 'prototype');

  // `Object.getOwnPropertyNames` method
  // https://tc39.es/ecma262/#sec-object.getownpropertynames
  // eslint-disable-next-line es/no-object-getownpropertynames -- safe
  objectGetOwnPropertyNames.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
    return internalObjectKeys(O, hiddenKeys$2);
  };

  var objectGetOwnPropertySymbols = {};

  // eslint-disable-next-line es/no-object-getownpropertysymbols -- safe
  objectGetOwnPropertySymbols.f = Object.getOwnPropertySymbols;

  var getBuiltIn$8 = getBuiltIn$b;
  var uncurryThis$t = functionUncurryThis;
  var getOwnPropertyNamesModule$2 = objectGetOwnPropertyNames;
  var getOwnPropertySymbolsModule$3 = objectGetOwnPropertySymbols;
  var anObject$c = anObject$g;

  var concat$2 = uncurryThis$t([].concat);

  // all object keys, includes non-enumerable and symbols
  var ownKeys$1 = getBuiltIn$8('Reflect', 'ownKeys') || function ownKeys(it) {
    var keys = getOwnPropertyNamesModule$2.f(anObject$c(it));
    var getOwnPropertySymbols = getOwnPropertySymbolsModule$3.f;
    return getOwnPropertySymbols ? concat$2(keys, getOwnPropertySymbols(it)) : keys;
  };

  var hasOwn$c = hasOwnProperty_1;
  var ownKeys = ownKeys$1;
  var getOwnPropertyDescriptorModule$2 = objectGetOwnPropertyDescriptor;
  var definePropertyModule$3 = objectDefineProperty;

  var copyConstructorProperties$2 = function (target, source, exceptions) {
    var keys = ownKeys(source);
    var defineProperty = definePropertyModule$3.f;
    var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule$2.f;
    for (var i = 0; i < keys.length; i++) {
      var key = keys[i];
      if (!hasOwn$c(target, key) && !(exceptions && hasOwn$c(exceptions, key))) {
        defineProperty(target, key, getOwnPropertyDescriptor(source, key));
      }
    }
  };

  var fails$w = fails$E;
  var isCallable$j = isCallable$t;

  var replacement = /#|\.prototype\./;

  var isForced$3 = function (feature, detection) {
    var value = data[normalize(feature)];
    return value == POLYFILL ? true
      : value == NATIVE ? false
      : isCallable$j(detection) ? fails$w(detection)
      : !!detection;
  };

  var normalize = isForced$3.normalize = function (string) {
    return String(string).replace(replacement, '.').toLowerCase();
  };

  var data = isForced$3.data = {};
  var NATIVE = isForced$3.NATIVE = 'N';
  var POLYFILL = isForced$3.POLYFILL = 'P';

  var isForced_1 = isForced$3;

  var global$o = global$x;
  var getOwnPropertyDescriptor$3 = objectGetOwnPropertyDescriptor.f;
  var createNonEnumerableProperty$7 = createNonEnumerableProperty$9;
  var defineBuiltIn$d = defineBuiltIn$e;
  var defineGlobalProperty = defineGlobalProperty$3;
  var copyConstructorProperties$1 = copyConstructorProperties$2;
  var isForced$2 = isForced_1;

  /*
    options.target         - name of the target object
    options.global         - target is the global object
    options.stat           - export as static methods of target
    options.proto          - export as prototype methods of target
    options.real           - real prototype method for the `pure` version
    options.forced         - export even if the native feature is available
    options.bind           - bind methods to the target, required for the `pure` version
    options.wrap           - wrap constructors to preventing global pollution, required for the `pure` version
    options.unsafe         - use the simple assignment of property instead of delete + defineProperty
    options.sham           - add a flag to not completely full polyfills
    options.enumerable     - export as enumerable property
    options.dontCallGetSet - prevent calling a getter on target
    options.name           - the .name of the function if it does not match the key
  */
  var _export = function (options, source) {
    var TARGET = options.target;
    var GLOBAL = options.global;
    var STATIC = options.stat;
    var FORCED, target, key, targetProperty, sourceProperty, descriptor;
    if (GLOBAL) {
      target = global$o;
    } else if (STATIC) {
      target = global$o[TARGET] || defineGlobalProperty(TARGET, {});
    } else {
      target = (global$o[TARGET] || {}).prototype;
    }
    if (target) for (key in source) {
      sourceProperty = source[key];
      if (options.dontCallGetSet) {
        descriptor = getOwnPropertyDescriptor$3(target, key);
        targetProperty = descriptor && descriptor.value;
      } else targetProperty = target[key];
      FORCED = isForced$2(GLOBAL ? key : TARGET + (STATIC ? '.' : '#') + key, options.forced);
      // contained in target
      if (!FORCED && targetProperty !== undefined) {
        if (typeof sourceProperty == typeof targetProperty) continue;
        copyConstructorProperties$1(sourceProperty, targetProperty);
      }
      // add a flag to not completely full polyfills
      if (options.sham || (targetProperty && targetProperty.sham)) {
        createNonEnumerableProperty$7(sourceProperty, 'sham', true);
      }
      defineBuiltIn$d(target, key, sourceProperty, options);
    }
  };

  var fails$v = fails$E;

  var correctPrototypeGetter = !fails$v(function () {
    function F() { /* empty */ }
    F.prototype.constructor = null;
    // eslint-disable-next-line es/no-object-getprototypeof -- required for testing
    return Object.getPrototypeOf(new F()) !== F.prototype;
  });

  var hasOwn$b = hasOwnProperty_1;
  var isCallable$i = isCallable$t;
  var toObject$b = toObject$d;
  var sharedKey$1 = sharedKey$4;
  var CORRECT_PROTOTYPE_GETTER = correctPrototypeGetter;

  var IE_PROTO = sharedKey$1('IE_PROTO');
  var $Object$1 = Object;
  var ObjectPrototype$3 = $Object$1.prototype;

  // `Object.getPrototypeOf` method
  // https://tc39.es/ecma262/#sec-object.getprototypeof
  // eslint-disable-next-line es/no-object-getprototypeof -- safe
  var objectGetPrototypeOf = CORRECT_PROTOTYPE_GETTER ? $Object$1.getPrototypeOf : function (O) {
    var object = toObject$b(O);
    if (hasOwn$b(object, IE_PROTO)) return object[IE_PROTO];
    var constructor = object.constructor;
    if (isCallable$i(constructor) && object instanceof constructor) {
      return constructor.prototype;
    } return object instanceof $Object$1 ? ObjectPrototype$3 : null;
  };

  var fails$u = fails$E;
  var isCallable$h = isCallable$t;
  var isObject$c = isObject$i;
  var getPrototypeOf$3 = objectGetPrototypeOf;
  var defineBuiltIn$c = defineBuiltIn$e;
  var wellKnownSymbol$n = wellKnownSymbol$q;

  var ITERATOR$6 = wellKnownSymbol$n('iterator');
  var BUGGY_SAFARI_ITERATORS$1 = false;

  // `%IteratorPrototype%` object
  // https://tc39.es/ecma262/#sec-%iteratorprototype%-object
  var IteratorPrototype$2, PrototypeOfArrayIteratorPrototype, arrayIterator;

  /* eslint-disable es/no-array-prototype-keys -- safe */
  if ([].keys) {
    arrayIterator = [].keys();
    // Safari 8 has buggy iterators w/o `next`
    if (!('next' in arrayIterator)) BUGGY_SAFARI_ITERATORS$1 = true;
    else {
      PrototypeOfArrayIteratorPrototype = getPrototypeOf$3(getPrototypeOf$3(arrayIterator));
      if (PrototypeOfArrayIteratorPrototype !== Object.prototype) IteratorPrototype$2 = PrototypeOfArrayIteratorPrototype;
    }
  }

  var NEW_ITERATOR_PROTOTYPE = !isObject$c(IteratorPrototype$2) || fails$u(function () {
    var test = {};
    // FF44- legacy iterators case
    return IteratorPrototype$2[ITERATOR$6].call(test) !== test;
  });

  if (NEW_ITERATOR_PROTOTYPE) IteratorPrototype$2 = {};

  // `%IteratorPrototype%[@@iterator]()` method
  // https://tc39.es/ecma262/#sec-%iteratorprototype%-@@iterator
  if (!isCallable$h(IteratorPrototype$2[ITERATOR$6])) {
    defineBuiltIn$c(IteratorPrototype$2, ITERATOR$6, function () {
      return this;
    });
  }

  var iteratorsCore = {
    IteratorPrototype: IteratorPrototype$2,
    BUGGY_SAFARI_ITERATORS: BUGGY_SAFARI_ITERATORS$1
  };

  var defineProperty$5 = objectDefineProperty.f;
  var hasOwn$a = hasOwnProperty_1;
  var wellKnownSymbol$m = wellKnownSymbol$q;

  var TO_STRING_TAG$4 = wellKnownSymbol$m('toStringTag');

  var setToStringTag$6 = function (target, TAG, STATIC) {
    if (target && !STATIC) target = target.prototype;
    if (target && !hasOwn$a(target, TO_STRING_TAG$4)) {
      defineProperty$5(target, TO_STRING_TAG$4, { configurable: true, value: TAG });
    }
  };

  var IteratorPrototype$1 = iteratorsCore.IteratorPrototype;
  var create$5 = objectCreate;
  var createPropertyDescriptor$3 = createPropertyDescriptor$6;
  var setToStringTag$5 = setToStringTag$6;
  var Iterators$4 = iterators;

  var returnThis$1 = function () { return this; };

  var iteratorCreateConstructor = function (IteratorConstructor, NAME, next, ENUMERABLE_NEXT) {
    var TO_STRING_TAG = NAME + ' Iterator';
    IteratorConstructor.prototype = create$5(IteratorPrototype$1, { next: createPropertyDescriptor$3(+!ENUMERABLE_NEXT, next) });
    setToStringTag$5(IteratorConstructor, TO_STRING_TAG, false);
    Iterators$4[TO_STRING_TAG] = returnThis$1;
    return IteratorConstructor;
  };

  var uncurryThis$s = functionUncurryThis;
  var aCallable$9 = aCallable$b;

  var functionUncurryThisAccessor = function (object, key, method) {
    try {
      // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
      return uncurryThis$s(aCallable$9(Object.getOwnPropertyDescriptor(object, key)[method]));
    } catch (error) { /* empty */ }
  };

  var isCallable$g = isCallable$t;

  var $String$2 = String;
  var $TypeError$c = TypeError;

  var aPossiblePrototype$1 = function (argument) {
    if (typeof argument == 'object' || isCallable$g(argument)) return argument;
    throw $TypeError$c("Can't set " + $String$2(argument) + ' as a prototype');
  };

  /* eslint-disable no-proto -- safe */

  var uncurryThisAccessor = functionUncurryThisAccessor;
  var anObject$b = anObject$g;
  var aPossiblePrototype = aPossiblePrototype$1;

  // `Object.setPrototypeOf` method
  // https://tc39.es/ecma262/#sec-object.setprototypeof
  // Works with __proto__ only. Old v8 can't work with null proto objects.
  // eslint-disable-next-line es/no-object-setprototypeof -- safe
  var objectSetPrototypeOf = Object.setPrototypeOf || ('__proto__' in {} ? function () {
    var CORRECT_SETTER = false;
    var test = {};
    var setter;
    try {
      setter = uncurryThisAccessor(Object.prototype, '__proto__', 'set');
      setter(test, []);
      CORRECT_SETTER = test instanceof Array;
    } catch (error) { /* empty */ }
    return function setPrototypeOf(O, proto) {
      anObject$b(O);
      aPossiblePrototype(proto);
      if (CORRECT_SETTER) setter(O, proto);
      else O.__proto__ = proto;
      return O;
    };
  }() : undefined);

  var $$s = _export;
  var call$m = functionCall;
  var FunctionName$1 = functionName;
  var isCallable$f = isCallable$t;
  var createIteratorConstructor = iteratorCreateConstructor;
  var getPrototypeOf$2 = objectGetPrototypeOf;
  var setPrototypeOf$5 = objectSetPrototypeOf;
  var setToStringTag$4 = setToStringTag$6;
  var createNonEnumerableProperty$6 = createNonEnumerableProperty$9;
  var defineBuiltIn$b = defineBuiltIn$e;
  var wellKnownSymbol$l = wellKnownSymbol$q;
  var Iterators$3 = iterators;
  var IteratorsCore = iteratorsCore;

  var PROPER_FUNCTION_NAME$2 = FunctionName$1.PROPER;
  var CONFIGURABLE_FUNCTION_NAME$1 = FunctionName$1.CONFIGURABLE;
  var IteratorPrototype = IteratorsCore.IteratorPrototype;
  var BUGGY_SAFARI_ITERATORS = IteratorsCore.BUGGY_SAFARI_ITERATORS;
  var ITERATOR$5 = wellKnownSymbol$l('iterator');
  var KEYS = 'keys';
  var VALUES = 'values';
  var ENTRIES = 'entries';

  var returnThis = function () { return this; };

  var iteratorDefine = function (Iterable, NAME, IteratorConstructor, next, DEFAULT, IS_SET, FORCED) {
    createIteratorConstructor(IteratorConstructor, NAME, next);

    var getIterationMethod = function (KIND) {
      if (KIND === DEFAULT && defaultIterator) return defaultIterator;
      if (!BUGGY_SAFARI_ITERATORS && KIND in IterablePrototype) return IterablePrototype[KIND];
      switch (KIND) {
        case KEYS: return function keys() { return new IteratorConstructor(this, KIND); };
        case VALUES: return function values() { return new IteratorConstructor(this, KIND); };
        case ENTRIES: return function entries() { return new IteratorConstructor(this, KIND); };
      } return function () { return new IteratorConstructor(this); };
    };

    var TO_STRING_TAG = NAME + ' Iterator';
    var INCORRECT_VALUES_NAME = false;
    var IterablePrototype = Iterable.prototype;
    var nativeIterator = IterablePrototype[ITERATOR$5]
      || IterablePrototype['@@iterator']
      || DEFAULT && IterablePrototype[DEFAULT];
    var defaultIterator = !BUGGY_SAFARI_ITERATORS && nativeIterator || getIterationMethod(DEFAULT);
    var anyNativeIterator = NAME == 'Array' ? IterablePrototype.entries || nativeIterator : nativeIterator;
    var CurrentIteratorPrototype, methods, KEY;

    // fix native
    if (anyNativeIterator) {
      CurrentIteratorPrototype = getPrototypeOf$2(anyNativeIterator.call(new Iterable()));
      if (CurrentIteratorPrototype !== Object.prototype && CurrentIteratorPrototype.next) {
        if (getPrototypeOf$2(CurrentIteratorPrototype) !== IteratorPrototype) {
          if (setPrototypeOf$5) {
            setPrototypeOf$5(CurrentIteratorPrototype, IteratorPrototype);
          } else if (!isCallable$f(CurrentIteratorPrototype[ITERATOR$5])) {
            defineBuiltIn$b(CurrentIteratorPrototype, ITERATOR$5, returnThis);
          }
        }
        // Set @@toStringTag to native iterators
        setToStringTag$4(CurrentIteratorPrototype, TO_STRING_TAG, true);
      }
    }

    // fix Array.prototype.{ values, @@iterator }.name in V8 / FF
    if (PROPER_FUNCTION_NAME$2 && DEFAULT == VALUES && nativeIterator && nativeIterator.name !== VALUES) {
      if (CONFIGURABLE_FUNCTION_NAME$1) {
        createNonEnumerableProperty$6(IterablePrototype, 'name', VALUES);
      } else {
        INCORRECT_VALUES_NAME = true;
        defaultIterator = function values() { return call$m(nativeIterator, this); };
      }
    }

    // export additional methods
    if (DEFAULT) {
      methods = {
        values: getIterationMethod(VALUES),
        keys: IS_SET ? defaultIterator : getIterationMethod(KEYS),
        entries: getIterationMethod(ENTRIES)
      };
      if (FORCED) for (KEY in methods) {
        if (BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME || !(KEY in IterablePrototype)) {
          defineBuiltIn$b(IterablePrototype, KEY, methods[KEY]);
        }
      } else $$s({ target: NAME, proto: true, forced: BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME }, methods);
    }

    // define iterator
    if (IterablePrototype[ITERATOR$5] !== defaultIterator) {
      defineBuiltIn$b(IterablePrototype, ITERATOR$5, defaultIterator, { name: DEFAULT });
    }
    Iterators$3[NAME] = defaultIterator;

    return methods;
  };

  // `CreateIterResultObject` abstract operation
  // https://tc39.es/ecma262/#sec-createiterresultobject
  var createIterResultObject$3 = function (value, done) {
    return { value: value, done: done };
  };

  var toIndexedObject$5 = toIndexedObject$a;
  var addToUnscopables = addToUnscopables$1;
  var Iterators$2 = iterators;
  var InternalStateModule$7 = internalState;
  var defineProperty$4 = objectDefineProperty.f;
  var defineIterator$2 = iteratorDefine;
  var createIterResultObject$2 = createIterResultObject$3;
  var DESCRIPTORS$a = descriptors;

  var ARRAY_ITERATOR = 'Array Iterator';
  var setInternalState$6 = InternalStateModule$7.set;
  var getInternalState$5 = InternalStateModule$7.getterFor(ARRAY_ITERATOR);

  // `Array.prototype.entries` method
  // https://tc39.es/ecma262/#sec-array.prototype.entries
  // `Array.prototype.keys` method
  // https://tc39.es/ecma262/#sec-array.prototype.keys
  // `Array.prototype.values` method
  // https://tc39.es/ecma262/#sec-array.prototype.values
  // `Array.prototype[@@iterator]` method
  // https://tc39.es/ecma262/#sec-array.prototype-@@iterator
  // `CreateArrayIterator` internal method
  // https://tc39.es/ecma262/#sec-createarrayiterator
  var es_array_iterator = defineIterator$2(Array, 'Array', function (iterated, kind) {
    setInternalState$6(this, {
      type: ARRAY_ITERATOR,
      target: toIndexedObject$5(iterated), // target
      index: 0,                          // next index
      kind: kind                         // kind
    });
  // `%ArrayIteratorPrototype%.next` method
  // https://tc39.es/ecma262/#sec-%arrayiteratorprototype%.next
  }, function () {
    var state = getInternalState$5(this);
    var target = state.target;
    var kind = state.kind;
    var index = state.index++;
    if (!target || index >= target.length) {
      state.target = undefined;
      return createIterResultObject$2(undefined, true);
    }
    if (kind == 'keys') return createIterResultObject$2(index, false);
    if (kind == 'values') return createIterResultObject$2(target[index], false);
    return createIterResultObject$2([index, target[index]], false);
  }, 'values');

  // argumentsList[@@iterator] is %ArrayProto_values%
  // https://tc39.es/ecma262/#sec-createunmappedargumentsobject
  // https://tc39.es/ecma262/#sec-createmappedargumentsobject
  var values = Iterators$2.Arguments = Iterators$2.Array;

  // https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
  addToUnscopables('keys');
  addToUnscopables('values');
  addToUnscopables('entries');

  // V8 ~ Chrome 45- bug
  if (DESCRIPTORS$a && values.name !== 'values') try {
    defineProperty$4(values, 'name', { value: 'values' });
  } catch (error) { /* empty */ }

  var wellKnownSymbol$k = wellKnownSymbol$q;

  var TO_STRING_TAG$3 = wellKnownSymbol$k('toStringTag');
  var test = {};

  test[TO_STRING_TAG$3] = 'z';

  var toStringTagSupport = String(test) === '[object z]';

  var TO_STRING_TAG_SUPPORT$2 = toStringTagSupport;
  var isCallable$e = isCallable$t;
  var classofRaw$1 = classofRaw$2;
  var wellKnownSymbol$j = wellKnownSymbol$q;

  var TO_STRING_TAG$2 = wellKnownSymbol$j('toStringTag');
  var $Object = Object;

  // ES3 wrong here
  var CORRECT_ARGUMENTS = classofRaw$1(function () { return arguments; }()) == 'Arguments';

  // fallback for IE11 Script Access Denied error
  var tryGet = function (it, key) {
    try {
      return it[key];
    } catch (error) { /* empty */ }
  };

  // getting tag from ES6+ `Object.prototype.toString`
  var classof$f = TO_STRING_TAG_SUPPORT$2 ? classofRaw$1 : function (it) {
    var O, tag, result;
    return it === undefined ? 'Undefined' : it === null ? 'Null'
      // @@toStringTag case
      : typeof (tag = tryGet(O = $Object(it), TO_STRING_TAG$2)) == 'string' ? tag
      // builtinTag case
      : CORRECT_ARGUMENTS ? classofRaw$1(O)
      // ES3 arguments fallback
      : (result = classofRaw$1(O)) == 'Object' && isCallable$e(O.callee) ? 'Arguments' : result;
  };

  var TO_STRING_TAG_SUPPORT$1 = toStringTagSupport;
  var classof$e = classof$f;

  // `Object.prototype.toString` method implementation
  // https://tc39.es/ecma262/#sec-object.prototype.tostring
  var objectToString = TO_STRING_TAG_SUPPORT$1 ? {}.toString : function toString() {
    return '[object ' + classof$e(this) + ']';
  };

  var TO_STRING_TAG_SUPPORT = toStringTagSupport;
  var defineBuiltIn$a = defineBuiltIn$e;
  var toString$a = objectToString;

  // `Object.prototype.toString` method
  // https://tc39.es/ecma262/#sec-object.prototype.tostring
  if (!TO_STRING_TAG_SUPPORT) {
    defineBuiltIn$a(Object.prototype, 'toString', toString$a, { unsafe: true });
  }

  var classof$d = classofRaw$2;

  var engineIsNode = typeof process != 'undefined' && classof$d(process) == 'process';

  var makeBuiltIn = makeBuiltInExports;
  var defineProperty$3 = objectDefineProperty;

  var defineBuiltInAccessor$8 = function (target, name, descriptor) {
    if (descriptor.get) makeBuiltIn(descriptor.get, name, { getter: true });
    if (descriptor.set) makeBuiltIn(descriptor.set, name, { setter: true });
    return defineProperty$3.f(target, name, descriptor);
  };

  var getBuiltIn$7 = getBuiltIn$b;
  var defineBuiltInAccessor$7 = defineBuiltInAccessor$8;
  var wellKnownSymbol$i = wellKnownSymbol$q;
  var DESCRIPTORS$9 = descriptors;

  var SPECIES$5 = wellKnownSymbol$i('species');

  var setSpecies$3 = function (CONSTRUCTOR_NAME) {
    var Constructor = getBuiltIn$7(CONSTRUCTOR_NAME);

    if (DESCRIPTORS$9 && Constructor && !Constructor[SPECIES$5]) {
      defineBuiltInAccessor$7(Constructor, SPECIES$5, {
        configurable: true,
        get: function () { return this; }
      });
    }
  };

  var isPrototypeOf$6 = objectIsPrototypeOf;

  var $TypeError$b = TypeError;

  var anInstance$5 = function (it, Prototype) {
    if (isPrototypeOf$6(Prototype, it)) return it;
    throw $TypeError$b('Incorrect invocation');
  };

  var uncurryThis$r = functionUncurryThis;
  var fails$t = fails$E;
  var isCallable$d = isCallable$t;
  var classof$c = classof$f;
  var getBuiltIn$6 = getBuiltIn$b;
  var inspectSource$1 = inspectSource$3;

  var noop$1 = function () { /* empty */ };
  var empty = [];
  var construct = getBuiltIn$6('Reflect', 'construct');
  var constructorRegExp = /^\s*(?:class|function)\b/;
  var exec$2 = uncurryThis$r(constructorRegExp.exec);
  var INCORRECT_TO_STRING = !constructorRegExp.exec(noop$1);

  var isConstructorModern = function isConstructor(argument) {
    if (!isCallable$d(argument)) return false;
    try {
      construct(noop$1, empty, argument);
      return true;
    } catch (error) {
      return false;
    }
  };

  var isConstructorLegacy = function isConstructor(argument) {
    if (!isCallable$d(argument)) return false;
    switch (classof$c(argument)) {
      case 'AsyncFunction':
      case 'GeneratorFunction':
      case 'AsyncGeneratorFunction': return false;
    }
    try {
      // we can't check .prototype since constructors produced by .bind haven't it
      // `Function#toString` throws on some built-it function in some legacy engines
      // (for example, `DOMQuad` and similar in FF41-)
      return INCORRECT_TO_STRING || !!exec$2(constructorRegExp, inspectSource$1(argument));
    } catch (error) {
      return true;
    }
  };

  isConstructorLegacy.sham = true;

  // `IsConstructor` abstract operation
  // https://tc39.es/ecma262/#sec-isconstructor
  var isConstructor$3 = !construct || fails$t(function () {
    var called;
    return isConstructorModern(isConstructorModern.call)
      || !isConstructorModern(Object)
      || !isConstructorModern(function () { called = true; })
      || called;
  }) ? isConstructorLegacy : isConstructorModern;

  var isConstructor$2 = isConstructor$3;
  var tryToString$5 = tryToString$7;

  var $TypeError$a = TypeError;

  // `Assert: IsConstructor(argument) is true`
  var aConstructor$2 = function (argument) {
    if (isConstructor$2(argument)) return argument;
    throw $TypeError$a(tryToString$5(argument) + ' is not a constructor');
  };

  var anObject$a = anObject$g;
  var aConstructor$1 = aConstructor$2;
  var isNullOrUndefined$4 = isNullOrUndefined$7;
  var wellKnownSymbol$h = wellKnownSymbol$q;

  var SPECIES$4 = wellKnownSymbol$h('species');

  // `SpeciesConstructor` abstract operation
  // https://tc39.es/ecma262/#sec-speciesconstructor
  var speciesConstructor$3 = function (O, defaultConstructor) {
    var C = anObject$a(O).constructor;
    var S;
    return C === undefined || isNullOrUndefined$4(S = anObject$a(C)[SPECIES$4]) ? defaultConstructor : aConstructor$1(S);
  };

  var NATIVE_BIND$1 = functionBindNative;

  var FunctionPrototype$1 = Function.prototype;
  var apply$6 = FunctionPrototype$1.apply;
  var call$l = FunctionPrototype$1.call;

  // eslint-disable-next-line es/no-reflect -- safe
  var functionApply = typeof Reflect == 'object' && Reflect.apply || (NATIVE_BIND$1 ? call$l.bind(apply$6) : function () {
    return call$l.apply(apply$6, arguments);
  });

  var classofRaw = classofRaw$2;
  var uncurryThis$q = functionUncurryThis;

  var functionUncurryThisClause = function (fn) {
    // Nashorn bug:
    //   https://github.com/zloirock/core-js/issues/1128
    //   https://github.com/zloirock/core-js/issues/1130
    if (classofRaw(fn) === 'Function') return uncurryThis$q(fn);
  };

  var uncurryThis$p = functionUncurryThisClause;
  var aCallable$8 = aCallable$b;
  var NATIVE_BIND = functionBindNative;

  var bind$8 = uncurryThis$p(uncurryThis$p.bind);

  // optional / simple context binding
  var functionBindContext = function (fn, that) {
    aCallable$8(fn);
    return that === undefined ? fn : NATIVE_BIND ? bind$8(fn, that) : function (/* ...args */) {
      return fn.apply(that, arguments);
    };
  };

  var uncurryThis$o = functionUncurryThis;

  var arraySlice$7 = uncurryThis$o([].slice);

  var $TypeError$9 = TypeError;

  var validateArgumentsLength$1 = function (passed, required) {
    if (passed < required) throw $TypeError$9('Not enough arguments');
    return passed;
  };

  var userAgent$4 = engineUserAgent;

  // eslint-disable-next-line redos/no-vulnerable -- safe
  var engineIsIos = /(?:ipad|iphone|ipod).*applewebkit/i.test(userAgent$4);

  var global$n = global$x;
  var apply$5 = functionApply;
  var bind$7 = functionBindContext;
  var isCallable$c = isCallable$t;
  var hasOwn$9 = hasOwnProperty_1;
  var fails$s = fails$E;
  var html = html$2;
  var arraySlice$6 = arraySlice$7;
  var createElement = documentCreateElement$2;
  var validateArgumentsLength = validateArgumentsLength$1;
  var IS_IOS$1 = engineIsIos;
  var IS_NODE$3 = engineIsNode;

  var set$1 = global$n.setImmediate;
  var clear = global$n.clearImmediate;
  var process$3 = global$n.process;
  var Dispatch = global$n.Dispatch;
  var Function$1 = global$n.Function;
  var MessageChannel = global$n.MessageChannel;
  var String$1 = global$n.String;
  var counter = 0;
  var queue$2 = {};
  var ONREADYSTATECHANGE = 'onreadystatechange';
  var $location, defer, channel, port;

  fails$s(function () {
    // Deno throws a ReferenceError on `location` access without `--location` flag
    $location = global$n.location;
  });

  var run = function (id) {
    if (hasOwn$9(queue$2, id)) {
      var fn = queue$2[id];
      delete queue$2[id];
      fn();
    }
  };

  var runner = function (id) {
    return function () {
      run(id);
    };
  };

  var eventListener = function (event) {
    run(event.data);
  };

  var globalPostMessageDefer = function (id) {
    // old engines have not location.origin
    global$n.postMessage(String$1(id), $location.protocol + '//' + $location.host);
  };

  // Node.js 0.9+ & IE10+ has setImmediate, otherwise:
  if (!set$1 || !clear) {
    set$1 = function setImmediate(handler) {
      validateArgumentsLength(arguments.length, 1);
      var fn = isCallable$c(handler) ? handler : Function$1(handler);
      var args = arraySlice$6(arguments, 1);
      queue$2[++counter] = function () {
        apply$5(fn, undefined, args);
      };
      defer(counter);
      return counter;
    };
    clear = function clearImmediate(id) {
      delete queue$2[id];
    };
    // Node.js 0.8-
    if (IS_NODE$3) {
      defer = function (id) {
        process$3.nextTick(runner(id));
      };
    // Sphere (JS game engine) Dispatch API
    } else if (Dispatch && Dispatch.now) {
      defer = function (id) {
        Dispatch.now(runner(id));
      };
    // Browsers with MessageChannel, includes WebWorkers
    // except iOS - https://github.com/zloirock/core-js/issues/624
    } else if (MessageChannel && !IS_IOS$1) {
      channel = new MessageChannel();
      port = channel.port2;
      channel.port1.onmessage = eventListener;
      defer = bind$7(port.postMessage, port);
    // Browsers with postMessage, skip WebWorkers
    // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
    } else if (
      global$n.addEventListener &&
      isCallable$c(global$n.postMessage) &&
      !global$n.importScripts &&
      $location && $location.protocol !== 'file:' &&
      !fails$s(globalPostMessageDefer)
    ) {
      defer = globalPostMessageDefer;
      global$n.addEventListener('message', eventListener, false);
    // IE8-
    } else if (ONREADYSTATECHANGE in createElement('script')) {
      defer = function (id) {
        html.appendChild(createElement('script'))[ONREADYSTATECHANGE] = function () {
          html.removeChild(this);
          run(id);
        };
      };
    // Rest old browsers
    } else {
      defer = function (id) {
        setTimeout(runner(id), 0);
      };
    }
  }

  var task$1 = {
    set: set$1,
    clear: clear
  };

  var Queue$2 = function () {
    this.head = null;
    this.tail = null;
  };

  Queue$2.prototype = {
    add: function (item) {
      var entry = { item: item, next: null };
      var tail = this.tail;
      if (tail) tail.next = entry;
      else this.head = entry;
      this.tail = entry;
    },
    get: function () {
      var entry = this.head;
      if (entry) {
        var next = this.head = entry.next;
        if (next === null) this.tail = null;
        return entry.item;
      }
    }
  };

  var queue$1 = Queue$2;

  var userAgent$3 = engineUserAgent;

  var engineIsIosPebble = /ipad|iphone|ipod/i.test(userAgent$3) && typeof Pebble != 'undefined';

  var userAgent$2 = engineUserAgent;

  var engineIsWebosWebkit = /web0s(?!.*chrome)/i.test(userAgent$2);

  var global$m = global$x;
  var bind$6 = functionBindContext;
  var getOwnPropertyDescriptor$2 = objectGetOwnPropertyDescriptor.f;
  var macrotask = task$1.set;
  var Queue$1 = queue$1;
  var IS_IOS = engineIsIos;
  var IS_IOS_PEBBLE = engineIsIosPebble;
  var IS_WEBOS_WEBKIT = engineIsWebosWebkit;
  var IS_NODE$2 = engineIsNode;

  var MutationObserver = global$m.MutationObserver || global$m.WebKitMutationObserver;
  var document$2 = global$m.document;
  var process$2 = global$m.process;
  var Promise$1 = global$m.Promise;
  // Node.js 11 shows ExperimentalWarning on getting `queueMicrotask`
  var queueMicrotaskDescriptor = getOwnPropertyDescriptor$2(global$m, 'queueMicrotask');
  var microtask$1 = queueMicrotaskDescriptor && queueMicrotaskDescriptor.value;
  var notify$1, toggle, node, promise, then;

  // modern engines have queueMicrotask method
  if (!microtask$1) {
    var queue = new Queue$1();

    var flush = function () {
      var parent, fn;
      if (IS_NODE$2 && (parent = process$2.domain)) parent.exit();
      while (fn = queue.get()) try {
        fn();
      } catch (error) {
        if (queue.head) notify$1();
        throw error;
      }
      if (parent) parent.enter();
    };

    // browsers with MutationObserver, except iOS - https://github.com/zloirock/core-js/issues/339
    // also except WebOS Webkit https://github.com/zloirock/core-js/issues/898
    if (!IS_IOS && !IS_NODE$2 && !IS_WEBOS_WEBKIT && MutationObserver && document$2) {
      toggle = true;
      node = document$2.createTextNode('');
      new MutationObserver(flush).observe(node, { characterData: true });
      notify$1 = function () {
        node.data = toggle = !toggle;
      };
    // environments with maybe non-completely correct, but existent Promise
    } else if (!IS_IOS_PEBBLE && Promise$1 && Promise$1.resolve) {
      // Promise.resolve without an argument throws an error in LG WebOS 2
      promise = Promise$1.resolve(undefined);
      // workaround of WebKit ~ iOS Safari 10.1 bug
      promise.constructor = Promise$1;
      then = bind$6(promise.then, promise);
      notify$1 = function () {
        then(flush);
      };
    // Node.js without promises
    } else if (IS_NODE$2) {
      notify$1 = function () {
        process$2.nextTick(flush);
      };
    // for other environments - macrotask based on:
    // - setImmediate
    // - MessageChannel
    // - window.postMessage
    // - onreadystatechange
    // - setTimeout
    } else {
      // `webpack` dev server bug on IE global methods - use bind(fn, global)
      macrotask = bind$6(macrotask, global$m);
      notify$1 = function () {
        macrotask(flush);
      };
    }

    microtask$1 = function (fn) {
      if (!queue.head) notify$1();
      queue.add(fn);
    };
  }

  var microtask_1 = microtask$1;

  var hostReportErrors$1 = function (a, b) {
    try {
      // eslint-disable-next-line no-console -- safe
      arguments.length == 1 ? console.error(a) : console.error(a, b);
    } catch (error) { /* empty */ }
  };

  var perform$4 = function (exec) {
    try {
      return { error: false, value: exec() };
    } catch (error) {
      return { error: true, value: error };
    }
  };

  var global$l = global$x;

  var promiseNativeConstructor = global$l.Promise;

  /* global Deno -- Deno case */

  var engineIsDeno = typeof Deno == 'object' && Deno && typeof Deno.version == 'object';

  var IS_DENO$1 = engineIsDeno;
  var IS_NODE$1 = engineIsNode;

  var engineIsBrowser = !IS_DENO$1 && !IS_NODE$1
    && typeof window == 'object'
    && typeof document == 'object';

  var global$k = global$x;
  var NativePromiseConstructor$4 = promiseNativeConstructor;
  var isCallable$b = isCallable$t;
  var isForced$1 = isForced_1;
  var inspectSource = inspectSource$3;
  var wellKnownSymbol$g = wellKnownSymbol$q;
  var IS_BROWSER = engineIsBrowser;
  var IS_DENO = engineIsDeno;
  var V8_VERSION$2 = engineV8Version;

  NativePromiseConstructor$4 && NativePromiseConstructor$4.prototype;
  var SPECIES$3 = wellKnownSymbol$g('species');
  var SUBCLASSING = false;
  var NATIVE_PROMISE_REJECTION_EVENT$1 = isCallable$b(global$k.PromiseRejectionEvent);

  var FORCED_PROMISE_CONSTRUCTOR$5 = isForced$1('Promise', function () {
    var PROMISE_CONSTRUCTOR_SOURCE = inspectSource(NativePromiseConstructor$4);
    var GLOBAL_CORE_JS_PROMISE = PROMISE_CONSTRUCTOR_SOURCE !== String(NativePromiseConstructor$4);
    // V8 6.6 (Node 10 and Chrome 66) have a bug with resolving custom thenables
    // https://bugs.chromium.org/p/chromium/issues/detail?id=830565
    // We can't detect it synchronously, so just check versions
    if (!GLOBAL_CORE_JS_PROMISE && V8_VERSION$2 === 66) return true;
    // We can't use @@species feature detection in V8 since it causes
    // deoptimization and performance degradation
    // https://github.com/zloirock/core-js/issues/679
    if (!V8_VERSION$2 || V8_VERSION$2 < 51 || !/native code/.test(PROMISE_CONSTRUCTOR_SOURCE)) {
      // Detect correctness of subclassing with @@species support
      var promise = new NativePromiseConstructor$4(function (resolve) { resolve(1); });
      var FakePromise = function (exec) {
        exec(function () { /* empty */ }, function () { /* empty */ });
      };
      var constructor = promise.constructor = {};
      constructor[SPECIES$3] = FakePromise;
      SUBCLASSING = promise.then(function () { /* empty */ }) instanceof FakePromise;
      if (!SUBCLASSING) return true;
    // Unhandled rejections tracking support, NodeJS Promise without it fails @@species test
    } return !GLOBAL_CORE_JS_PROMISE && (IS_BROWSER || IS_DENO) && !NATIVE_PROMISE_REJECTION_EVENT$1;
  });

  var promiseConstructorDetection = {
    CONSTRUCTOR: FORCED_PROMISE_CONSTRUCTOR$5,
    REJECTION_EVENT: NATIVE_PROMISE_REJECTION_EVENT$1,
    SUBCLASSING: SUBCLASSING
  };

  var newPromiseCapability$2 = {};

  var aCallable$7 = aCallable$b;

  var $TypeError$8 = TypeError;

  var PromiseCapability = function (C) {
    var resolve, reject;
    this.promise = new C(function ($$resolve, $$reject) {
      if (resolve !== undefined || reject !== undefined) throw $TypeError$8('Bad Promise constructor');
      resolve = $$resolve;
      reject = $$reject;
    });
    this.resolve = aCallable$7(resolve);
    this.reject = aCallable$7(reject);
  };

  // `NewPromiseCapability` abstract operation
  // https://tc39.es/ecma262/#sec-newpromisecapability
  newPromiseCapability$2.f = function (C) {
    return new PromiseCapability(C);
  };

  var $$r = _export;
  var IS_NODE = engineIsNode;
  var global$j = global$x;
  var call$k = functionCall;
  var defineBuiltIn$9 = defineBuiltIn$e;
  var setPrototypeOf$4 = objectSetPrototypeOf;
  var setToStringTag$3 = setToStringTag$6;
  var setSpecies$2 = setSpecies$3;
  var aCallable$6 = aCallable$b;
  var isCallable$a = isCallable$t;
  var isObject$b = isObject$i;
  var anInstance$4 = anInstance$5;
  var speciesConstructor$2 = speciesConstructor$3;
  var task = task$1.set;
  var microtask = microtask_1;
  var hostReportErrors = hostReportErrors$1;
  var perform$3 = perform$4;
  var Queue = queue$1;
  var InternalStateModule$6 = internalState;
  var NativePromiseConstructor$3 = promiseNativeConstructor;
  var PromiseConstructorDetection = promiseConstructorDetection;
  var newPromiseCapabilityModule$4 = newPromiseCapability$2;

  var PROMISE = 'Promise';
  var FORCED_PROMISE_CONSTRUCTOR$4 = PromiseConstructorDetection.CONSTRUCTOR;
  var NATIVE_PROMISE_REJECTION_EVENT = PromiseConstructorDetection.REJECTION_EVENT;
  var NATIVE_PROMISE_SUBCLASSING = PromiseConstructorDetection.SUBCLASSING;
  var getInternalPromiseState = InternalStateModule$6.getterFor(PROMISE);
  var setInternalState$5 = InternalStateModule$6.set;
  var NativePromisePrototype$2 = NativePromiseConstructor$3 && NativePromiseConstructor$3.prototype;
  var PromiseConstructor = NativePromiseConstructor$3;
  var PromisePrototype = NativePromisePrototype$2;
  var TypeError$3 = global$j.TypeError;
  var document$1 = global$j.document;
  var process$1 = global$j.process;
  var newPromiseCapability$1 = newPromiseCapabilityModule$4.f;
  var newGenericPromiseCapability = newPromiseCapability$1;

  var DISPATCH_EVENT = !!(document$1 && document$1.createEvent && global$j.dispatchEvent);
  var UNHANDLED_REJECTION = 'unhandledrejection';
  var REJECTION_HANDLED = 'rejectionhandled';
  var PENDING = 0;
  var FULFILLED = 1;
  var REJECTED = 2;
  var HANDLED = 1;
  var UNHANDLED = 2;

  var Internal, OwnPromiseCapability, PromiseWrapper, nativeThen;

  // helpers
  var isThenable = function (it) {
    var then;
    return isObject$b(it) && isCallable$a(then = it.then) ? then : false;
  };

  var callReaction = function (reaction, state) {
    var value = state.value;
    var ok = state.state == FULFILLED;
    var handler = ok ? reaction.ok : reaction.fail;
    var resolve = reaction.resolve;
    var reject = reaction.reject;
    var domain = reaction.domain;
    var result, then, exited;
    try {
      if (handler) {
        if (!ok) {
          if (state.rejection === UNHANDLED) onHandleUnhandled(state);
          state.rejection = HANDLED;
        }
        if (handler === true) result = value;
        else {
          if (domain) domain.enter();
          result = handler(value); // can throw
          if (domain) {
            domain.exit();
            exited = true;
          }
        }
        if (result === reaction.promise) {
          reject(TypeError$3('Promise-chain cycle'));
        } else if (then = isThenable(result)) {
          call$k(then, result, resolve, reject);
        } else resolve(result);
      } else reject(value);
    } catch (error) {
      if (domain && !exited) domain.exit();
      reject(error);
    }
  };

  var notify = function (state, isReject) {
    if (state.notified) return;
    state.notified = true;
    microtask(function () {
      var reactions = state.reactions;
      var reaction;
      while (reaction = reactions.get()) {
        callReaction(reaction, state);
      }
      state.notified = false;
      if (isReject && !state.rejection) onUnhandled(state);
    });
  };

  var dispatchEvent = function (name, promise, reason) {
    var event, handler;
    if (DISPATCH_EVENT) {
      event = document$1.createEvent('Event');
      event.promise = promise;
      event.reason = reason;
      event.initEvent(name, false, true);
      global$j.dispatchEvent(event);
    } else event = { promise: promise, reason: reason };
    if (!NATIVE_PROMISE_REJECTION_EVENT && (handler = global$j['on' + name])) handler(event);
    else if (name === UNHANDLED_REJECTION) hostReportErrors('Unhandled promise rejection', reason);
  };

  var onUnhandled = function (state) {
    call$k(task, global$j, function () {
      var promise = state.facade;
      var value = state.value;
      var IS_UNHANDLED = isUnhandled(state);
      var result;
      if (IS_UNHANDLED) {
        result = perform$3(function () {
          if (IS_NODE) {
            process$1.emit('unhandledRejection', value, promise);
          } else dispatchEvent(UNHANDLED_REJECTION, promise, value);
        });
        // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should
        state.rejection = IS_NODE || isUnhandled(state) ? UNHANDLED : HANDLED;
        if (result.error) throw result.value;
      }
    });
  };

  var isUnhandled = function (state) {
    return state.rejection !== HANDLED && !state.parent;
  };

  var onHandleUnhandled = function (state) {
    call$k(task, global$j, function () {
      var promise = state.facade;
      if (IS_NODE) {
        process$1.emit('rejectionHandled', promise);
      } else dispatchEvent(REJECTION_HANDLED, promise, state.value);
    });
  };

  var bind$5 = function (fn, state, unwrap) {
    return function (value) {
      fn(state, value, unwrap);
    };
  };

  var internalReject = function (state, value, unwrap) {
    if (state.done) return;
    state.done = true;
    if (unwrap) state = unwrap;
    state.value = value;
    state.state = REJECTED;
    notify(state, true);
  };

  var internalResolve = function (state, value, unwrap) {
    if (state.done) return;
    state.done = true;
    if (unwrap) state = unwrap;
    try {
      if (state.facade === value) throw TypeError$3("Promise can't be resolved itself");
      var then = isThenable(value);
      if (then) {
        microtask(function () {
          var wrapper = { done: false };
          try {
            call$k(then, value,
              bind$5(internalResolve, wrapper, state),
              bind$5(internalReject, wrapper, state)
            );
          } catch (error) {
            internalReject(wrapper, error, state);
          }
        });
      } else {
        state.value = value;
        state.state = FULFILLED;
        notify(state, false);
      }
    } catch (error) {
      internalReject({ done: false }, error, state);
    }
  };

  // constructor polyfill
  if (FORCED_PROMISE_CONSTRUCTOR$4) {
    // 25.4.3.1 Promise(executor)
    PromiseConstructor = function Promise(executor) {
      anInstance$4(this, PromisePrototype);
      aCallable$6(executor);
      call$k(Internal, this);
      var state = getInternalPromiseState(this);
      try {
        executor(bind$5(internalResolve, state), bind$5(internalReject, state));
      } catch (error) {
        internalReject(state, error);
      }
    };

    PromisePrototype = PromiseConstructor.prototype;

    // eslint-disable-next-line no-unused-vars -- required for `.length`
    Internal = function Promise(executor) {
      setInternalState$5(this, {
        type: PROMISE,
        done: false,
        notified: false,
        parent: false,
        reactions: new Queue(),
        rejection: false,
        state: PENDING,
        value: undefined
      });
    };

    // `Promise.prototype.then` method
    // https://tc39.es/ecma262/#sec-promise.prototype.then
    Internal.prototype = defineBuiltIn$9(PromisePrototype, 'then', function then(onFulfilled, onRejected) {
      var state = getInternalPromiseState(this);
      var reaction = newPromiseCapability$1(speciesConstructor$2(this, PromiseConstructor));
      state.parent = true;
      reaction.ok = isCallable$a(onFulfilled) ? onFulfilled : true;
      reaction.fail = isCallable$a(onRejected) && onRejected;
      reaction.domain = IS_NODE ? process$1.domain : undefined;
      if (state.state == PENDING) state.reactions.add(reaction);
      else microtask(function () {
        callReaction(reaction, state);
      });
      return reaction.promise;
    });

    OwnPromiseCapability = function () {
      var promise = new Internal();
      var state = getInternalPromiseState(promise);
      this.promise = promise;
      this.resolve = bind$5(internalResolve, state);
      this.reject = bind$5(internalReject, state);
    };

    newPromiseCapabilityModule$4.f = newPromiseCapability$1 = function (C) {
      return C === PromiseConstructor || C === PromiseWrapper
        ? new OwnPromiseCapability(C)
        : newGenericPromiseCapability(C);
    };

    if (isCallable$a(NativePromiseConstructor$3) && NativePromisePrototype$2 !== Object.prototype) {
      nativeThen = NativePromisePrototype$2.then;

      if (!NATIVE_PROMISE_SUBCLASSING) {
        // make `Promise#then` return a polyfilled `Promise` for native promise-based APIs
        defineBuiltIn$9(NativePromisePrototype$2, 'then', function then(onFulfilled, onRejected) {
          var that = this;
          return new PromiseConstructor(function (resolve, reject) {
            call$k(nativeThen, that, resolve, reject);
          }).then(onFulfilled, onRejected);
        // https://github.com/zloirock/core-js/issues/640
        }, { unsafe: true });
      }

      // make `.constructor === Promise` work for native promise-based APIs
      try {
        delete NativePromisePrototype$2.constructor;
      } catch (error) { /* empty */ }

      // make `instanceof Promise` work for native promise-based APIs
      if (setPrototypeOf$4) {
        setPrototypeOf$4(NativePromisePrototype$2, PromisePrototype);
      }
    }
  }

  $$r({ global: true, constructor: true, wrap: true, forced: FORCED_PROMISE_CONSTRUCTOR$4 }, {
    Promise: PromiseConstructor
  });

  setToStringTag$3(PromiseConstructor, PROMISE, false);
  setSpecies$2(PROMISE);

  var wellKnownSymbol$f = wellKnownSymbol$q;
  var Iterators$1 = iterators;

  var ITERATOR$4 = wellKnownSymbol$f('iterator');
  var ArrayPrototype = Array.prototype;

  // check on default Array iterator
  var isArrayIteratorMethod$3 = function (it) {
    return it !== undefined && (Iterators$1.Array === it || ArrayPrototype[ITERATOR$4] === it);
  };

  var classof$b = classof$f;
  var getMethod$2 = getMethod$4;
  var isNullOrUndefined$3 = isNullOrUndefined$7;
  var Iterators = iterators;
  var wellKnownSymbol$e = wellKnownSymbol$q;

  var ITERATOR$3 = wellKnownSymbol$e('iterator');

  var getIteratorMethod$4 = function (it) {
    if (!isNullOrUndefined$3(it)) return getMethod$2(it, ITERATOR$3)
      || getMethod$2(it, '@@iterator')
      || Iterators[classof$b(it)];
  };

  var call$j = functionCall;
  var aCallable$5 = aCallable$b;
  var anObject$9 = anObject$g;
  var tryToString$4 = tryToString$7;
  var getIteratorMethod$3 = getIteratorMethod$4;

  var $TypeError$7 = TypeError;

  var getIterator$3 = function (argument, usingIterator) {
    var iteratorMethod = arguments.length < 2 ? getIteratorMethod$3(argument) : usingIterator;
    if (aCallable$5(iteratorMethod)) return anObject$9(call$j(iteratorMethod, argument));
    throw $TypeError$7(tryToString$4(argument) + ' is not iterable');
  };

  var call$i = functionCall;
  var anObject$8 = anObject$g;
  var getMethod$1 = getMethod$4;

  var iteratorClose$2 = function (iterator, kind, value) {
    var innerResult, innerError;
    anObject$8(iterator);
    try {
      innerResult = getMethod$1(iterator, 'return');
      if (!innerResult) {
        if (kind === 'throw') throw value;
        return value;
      }
      innerResult = call$i(innerResult, iterator);
    } catch (error) {
      innerError = true;
      innerResult = error;
    }
    if (kind === 'throw') throw value;
    if (innerError) throw innerResult;
    anObject$8(innerResult);
    return value;
  };

  var bind$4 = functionBindContext;
  var call$h = functionCall;
  var anObject$7 = anObject$g;
  var tryToString$3 = tryToString$7;
  var isArrayIteratorMethod$2 = isArrayIteratorMethod$3;
  var lengthOfArrayLike$b = lengthOfArrayLike$d;
  var isPrototypeOf$5 = objectIsPrototypeOf;
  var getIterator$2 = getIterator$3;
  var getIteratorMethod$2 = getIteratorMethod$4;
  var iteratorClose$1 = iteratorClose$2;

  var $TypeError$6 = TypeError;

  var Result = function (stopped, result) {
    this.stopped = stopped;
    this.result = result;
  };

  var ResultPrototype = Result.prototype;

  var iterate$5 = function (iterable, unboundFunction, options) {
    var that = options && options.that;
    var AS_ENTRIES = !!(options && options.AS_ENTRIES);
    var IS_RECORD = !!(options && options.IS_RECORD);
    var IS_ITERATOR = !!(options && options.IS_ITERATOR);
    var INTERRUPTED = !!(options && options.INTERRUPTED);
    var fn = bind$4(unboundFunction, that);
    var iterator, iterFn, index, length, result, next, step;

    var stop = function (condition) {
      if (iterator) iteratorClose$1(iterator, 'normal', condition);
      return new Result(true, condition);
    };

    var callFn = function (value) {
      if (AS_ENTRIES) {
        anObject$7(value);
        return INTERRUPTED ? fn(value[0], value[1], stop) : fn(value[0], value[1]);
      } return INTERRUPTED ? fn(value, stop) : fn(value);
    };

    if (IS_RECORD) {
      iterator = iterable.iterator;
    } else if (IS_ITERATOR) {
      iterator = iterable;
    } else {
      iterFn = getIteratorMethod$2(iterable);
      if (!iterFn) throw $TypeError$6(tryToString$3(iterable) + ' is not iterable');
      // optimisation for array iterators
      if (isArrayIteratorMethod$2(iterFn)) {
        for (index = 0, length = lengthOfArrayLike$b(iterable); length > index; index++) {
          result = callFn(iterable[index]);
          if (result && isPrototypeOf$5(ResultPrototype, result)) return result;
        } return new Result(false);
      }
      iterator = getIterator$2(iterable, iterFn);
    }

    next = IS_RECORD ? iterable.next : iterator.next;
    while (!(step = call$h(next, iterator)).done) {
      try {
        result = callFn(step.value);
      } catch (error) {
        iteratorClose$1(iterator, 'throw', error);
      }
      if (typeof result == 'object' && result && isPrototypeOf$5(ResultPrototype, result)) return result;
    } return new Result(false);
  };

  var wellKnownSymbol$d = wellKnownSymbol$q;

  var ITERATOR$2 = wellKnownSymbol$d('iterator');
  var SAFE_CLOSING = false;

  try {
    var called = 0;
    var iteratorWithReturn = {
      next: function () {
        return { done: !!called++ };
      },
      'return': function () {
        SAFE_CLOSING = true;
      }
    };
    iteratorWithReturn[ITERATOR$2] = function () {
      return this;
    };
    // eslint-disable-next-line es/no-array-from, no-throw-literal -- required for testing
    Array.from(iteratorWithReturn, function () { throw 2; });
  } catch (error) { /* empty */ }

  var checkCorrectnessOfIteration$4 = function (exec, SKIP_CLOSING) {
    if (!SKIP_CLOSING && !SAFE_CLOSING) return false;
    var ITERATION_SUPPORT = false;
    try {
      var object = {};
      object[ITERATOR$2] = function () {
        return {
          next: function () {
            return { done: ITERATION_SUPPORT = true };
          }
        };
      };
      exec(object);
    } catch (error) { /* empty */ }
    return ITERATION_SUPPORT;
  };

  var NativePromiseConstructor$2 = promiseNativeConstructor;
  var checkCorrectnessOfIteration$3 = checkCorrectnessOfIteration$4;
  var FORCED_PROMISE_CONSTRUCTOR$3 = promiseConstructorDetection.CONSTRUCTOR;

  var promiseStaticsIncorrectIteration = FORCED_PROMISE_CONSTRUCTOR$3 || !checkCorrectnessOfIteration$3(function (iterable) {
    NativePromiseConstructor$2.all(iterable).then(undefined, function () { /* empty */ });
  });

  var $$q = _export;
  var call$g = functionCall;
  var aCallable$4 = aCallable$b;
  var newPromiseCapabilityModule$3 = newPromiseCapability$2;
  var perform$2 = perform$4;
  var iterate$4 = iterate$5;
  var PROMISE_STATICS_INCORRECT_ITERATION$2 = promiseStaticsIncorrectIteration;

  // `Promise.all` method
  // https://tc39.es/ecma262/#sec-promise.all
  $$q({ target: 'Promise', stat: true, forced: PROMISE_STATICS_INCORRECT_ITERATION$2 }, {
    all: function all(iterable) {
      var C = this;
      var capability = newPromiseCapabilityModule$3.f(C);
      var resolve = capability.resolve;
      var reject = capability.reject;
      var result = perform$2(function () {
        var $promiseResolve = aCallable$4(C.resolve);
        var values = [];
        var counter = 0;
        var remaining = 1;
        iterate$4(iterable, function (promise) {
          var index = counter++;
          var alreadyCalled = false;
          remaining++;
          call$g($promiseResolve, C, promise).then(function (value) {
            if (alreadyCalled) return;
            alreadyCalled = true;
            values[index] = value;
            --remaining || resolve(values);
          }, reject);
        });
        --remaining || resolve(values);
      });
      if (result.error) reject(result.value);
      return capability.promise;
    }
  });

  var $$p = _export;
  var FORCED_PROMISE_CONSTRUCTOR$2 = promiseConstructorDetection.CONSTRUCTOR;
  var NativePromiseConstructor$1 = promiseNativeConstructor;
  var getBuiltIn$5 = getBuiltIn$b;
  var isCallable$9 = isCallable$t;
  var defineBuiltIn$8 = defineBuiltIn$e;

  var NativePromisePrototype$1 = NativePromiseConstructor$1 && NativePromiseConstructor$1.prototype;

  // `Promise.prototype.catch` method
  // https://tc39.es/ecma262/#sec-promise.prototype.catch
  $$p({ target: 'Promise', proto: true, forced: FORCED_PROMISE_CONSTRUCTOR$2, real: true }, {
    'catch': function (onRejected) {
      return this.then(undefined, onRejected);
    }
  });

  // makes sure that native promise-based APIs `Promise#catch` properly works with patched `Promise#then`
  if (isCallable$9(NativePromiseConstructor$1)) {
    var method$1 = getBuiltIn$5('Promise').prototype['catch'];
    if (NativePromisePrototype$1['catch'] !== method$1) {
      defineBuiltIn$8(NativePromisePrototype$1, 'catch', method$1, { unsafe: true });
    }
  }

  var $$o = _export;
  var call$f = functionCall;
  var aCallable$3 = aCallable$b;
  var newPromiseCapabilityModule$2 = newPromiseCapability$2;
  var perform$1 = perform$4;
  var iterate$3 = iterate$5;
  var PROMISE_STATICS_INCORRECT_ITERATION$1 = promiseStaticsIncorrectIteration;

  // `Promise.race` method
  // https://tc39.es/ecma262/#sec-promise.race
  $$o({ target: 'Promise', stat: true, forced: PROMISE_STATICS_INCORRECT_ITERATION$1 }, {
    race: function race(iterable) {
      var C = this;
      var capability = newPromiseCapabilityModule$2.f(C);
      var reject = capability.reject;
      var result = perform$1(function () {
        var $promiseResolve = aCallable$3(C.resolve);
        iterate$3(iterable, function (promise) {
          call$f($promiseResolve, C, promise).then(capability.resolve, reject);
        });
      });
      if (result.error) reject(result.value);
      return capability.promise;
    }
  });

  var $$n = _export;
  var call$e = functionCall;
  var newPromiseCapabilityModule$1 = newPromiseCapability$2;
  var FORCED_PROMISE_CONSTRUCTOR$1 = promiseConstructorDetection.CONSTRUCTOR;

  // `Promise.reject` method
  // https://tc39.es/ecma262/#sec-promise.reject
  $$n({ target: 'Promise', stat: true, forced: FORCED_PROMISE_CONSTRUCTOR$1 }, {
    reject: function reject(r) {
      var capability = newPromiseCapabilityModule$1.f(this);
      call$e(capability.reject, undefined, r);
      return capability.promise;
    }
  });

  var anObject$6 = anObject$g;
  var isObject$a = isObject$i;
  var newPromiseCapability = newPromiseCapability$2;

  var promiseResolve$2 = function (C, x) {
    anObject$6(C);
    if (isObject$a(x) && x.constructor === C) return x;
    var promiseCapability = newPromiseCapability.f(C);
    var resolve = promiseCapability.resolve;
    resolve(x);
    return promiseCapability.promise;
  };

  var $$m = _export;
  var getBuiltIn$4 = getBuiltIn$b;
  var FORCED_PROMISE_CONSTRUCTOR = promiseConstructorDetection.CONSTRUCTOR;
  var promiseResolve$1 = promiseResolve$2;

  getBuiltIn$4('Promise');

  // `Promise.resolve` method
  // https://tc39.es/ecma262/#sec-promise.resolve
  $$m({ target: 'Promise', stat: true, forced: FORCED_PROMISE_CONSTRUCTOR }, {
    resolve: function resolve(x) {
      return promiseResolve$1(this, x);
    }
  });

  var $$l = _export;
  var call$d = functionCall;
  var aCallable$2 = aCallable$b;
  var newPromiseCapabilityModule = newPromiseCapability$2;
  var perform = perform$4;
  var iterate$2 = iterate$5;
  var PROMISE_STATICS_INCORRECT_ITERATION = promiseStaticsIncorrectIteration;

  // `Promise.allSettled` method
  // https://tc39.es/ecma262/#sec-promise.allsettled
  $$l({ target: 'Promise', stat: true, forced: PROMISE_STATICS_INCORRECT_ITERATION }, {
    allSettled: function allSettled(iterable) {
      var C = this;
      var capability = newPromiseCapabilityModule.f(C);
      var resolve = capability.resolve;
      var reject = capability.reject;
      var result = perform(function () {
        var promiseResolve = aCallable$2(C.resolve);
        var values = [];
        var counter = 0;
        var remaining = 1;
        iterate$2(iterable, function (promise) {
          var index = counter++;
          var alreadyCalled = false;
          remaining++;
          call$d(promiseResolve, C, promise).then(function (value) {
            if (alreadyCalled) return;
            alreadyCalled = true;
            values[index] = { status: 'fulfilled', value: value };
            --remaining || resolve(values);
          }, function (error) {
            if (alreadyCalled) return;
            alreadyCalled = true;
            values[index] = { status: 'rejected', reason: error };
            --remaining || resolve(values);
          });
        });
        --remaining || resolve(values);
      });
      if (result.error) reject(result.value);
      return capability.promise;
    }
  });

  var classof$a = classof$f;

  var $String$1 = String;

  var toString$9 = function (argument) {
    if (classof$a(argument) === 'Symbol') throw TypeError('Cannot convert a Symbol value to a string');
    return $String$1(argument);
  };

  var uncurryThis$n = functionUncurryThis;
  var toIntegerOrInfinity$5 = toIntegerOrInfinity$8;
  var toString$8 = toString$9;
  var requireObjectCoercible$3 = requireObjectCoercible$6;

  var charAt$5 = uncurryThis$n(''.charAt);
  var charCodeAt$1 = uncurryThis$n(''.charCodeAt);
  var stringSlice$5 = uncurryThis$n(''.slice);

  var createMethod$3 = function (CONVERT_TO_STRING) {
    return function ($this, pos) {
      var S = toString$8(requireObjectCoercible$3($this));
      var position = toIntegerOrInfinity$5(pos);
      var size = S.length;
      var first, second;
      if (position < 0 || position >= size) return CONVERT_TO_STRING ? '' : undefined;
      first = charCodeAt$1(S, position);
      return first < 0xD800 || first > 0xDBFF || position + 1 === size
        || (second = charCodeAt$1(S, position + 1)) < 0xDC00 || second > 0xDFFF
          ? CONVERT_TO_STRING
            ? charAt$5(S, position)
            : first
          : CONVERT_TO_STRING
            ? stringSlice$5(S, position, position + 2)
            : (first - 0xD800 << 10) + (second - 0xDC00) + 0x10000;
    };
  };

  var stringMultibyte = {
    // `String.prototype.codePointAt` method
    // https://tc39.es/ecma262/#sec-string.prototype.codepointat
    codeAt: createMethod$3(false),
    // `String.prototype.at` method
    // https://github.com/mathiasbynens/String.prototype.at
    charAt: createMethod$3(true)
  };

  var charAt$4 = stringMultibyte.charAt;
  var toString$7 = toString$9;
  var InternalStateModule$5 = internalState;
  var defineIterator$1 = iteratorDefine;
  var createIterResultObject$1 = createIterResultObject$3;

  var STRING_ITERATOR = 'String Iterator';
  var setInternalState$4 = InternalStateModule$5.set;
  var getInternalState$4 = InternalStateModule$5.getterFor(STRING_ITERATOR);

  // `String.prototype[@@iterator]` method
  // https://tc39.es/ecma262/#sec-string.prototype-@@iterator
  defineIterator$1(String, 'String', function (iterated) {
    setInternalState$4(this, {
      type: STRING_ITERATOR,
      string: toString$7(iterated),
      index: 0
    });
  // `%StringIteratorPrototype%.next` method
  // https://tc39.es/ecma262/#sec-%stringiteratorprototype%.next
  }, function next() {
    var state = getInternalState$4(this);
    var string = state.string;
    var index = state.index;
    var point;
    if (index >= string.length) return createIterResultObject$1(undefined, true);
    point = charAt$4(string, index);
    state.index += point.length;
    return createIterResultObject$1(point, false);
  });

  // iterable DOM collections
  // flag - `iterable` interface - 'entries', 'keys', 'values', 'forEach' methods
  var domIterables = {
    CSSRuleList: 0,
    CSSStyleDeclaration: 0,
    CSSValueList: 0,
    ClientRectList: 0,
    DOMRectList: 0,
    DOMStringList: 0,
    DOMTokenList: 1,
    DataTransferItemList: 0,
    FileList: 0,
    HTMLAllCollection: 0,
    HTMLCollection: 0,
    HTMLFormElement: 0,
    HTMLSelectElement: 0,
    MediaList: 0,
    MimeTypeArray: 0,
    NamedNodeMap: 0,
    NodeList: 1,
    PaintRequestList: 0,
    Plugin: 0,
    PluginArray: 0,
    SVGLengthList: 0,
    SVGNumberList: 0,
    SVGPathSegList: 0,
    SVGPointList: 0,
    SVGStringList: 0,
    SVGTransformList: 0,
    SourceBufferList: 0,
    StyleSheetList: 0,
    TextTrackCueList: 0,
    TextTrackList: 0,
    TouchList: 0
  };

  // in old WebKit versions, `element.classList` is not an instance of global `DOMTokenList`
  var documentCreateElement = documentCreateElement$2;

  var classList = documentCreateElement('span').classList;
  var DOMTokenListPrototype$2 = classList && classList.constructor && classList.constructor.prototype;

  var domTokenListPrototype = DOMTokenListPrototype$2 === Object.prototype ? undefined : DOMTokenListPrototype$2;

  var global$i = global$x;
  var DOMIterables$1 = domIterables;
  var DOMTokenListPrototype$1 = domTokenListPrototype;
  var ArrayIteratorMethods = es_array_iterator;
  var createNonEnumerableProperty$5 = createNonEnumerableProperty$9;
  var wellKnownSymbol$c = wellKnownSymbol$q;

  var ITERATOR$1 = wellKnownSymbol$c('iterator');
  var TO_STRING_TAG$1 = wellKnownSymbol$c('toStringTag');
  var ArrayValues = ArrayIteratorMethods.values;

  var handlePrototype$1 = function (CollectionPrototype, COLLECTION_NAME) {
    if (CollectionPrototype) {
      // some Chrome versions have non-configurable methods on DOMTokenList
      if (CollectionPrototype[ITERATOR$1] !== ArrayValues) try {
        createNonEnumerableProperty$5(CollectionPrototype, ITERATOR$1, ArrayValues);
      } catch (error) {
        CollectionPrototype[ITERATOR$1] = ArrayValues;
      }
      if (!CollectionPrototype[TO_STRING_TAG$1]) {
        createNonEnumerableProperty$5(CollectionPrototype, TO_STRING_TAG$1, COLLECTION_NAME);
      }
      if (DOMIterables$1[COLLECTION_NAME]) for (var METHOD_NAME in ArrayIteratorMethods) {
        // some Chrome versions have non-configurable methods on DOMTokenList
        if (CollectionPrototype[METHOD_NAME] !== ArrayIteratorMethods[METHOD_NAME]) try {
          createNonEnumerableProperty$5(CollectionPrototype, METHOD_NAME, ArrayIteratorMethods[METHOD_NAME]);
        } catch (error) {
          CollectionPrototype[METHOD_NAME] = ArrayIteratorMethods[METHOD_NAME];
        }
      }
    }
  };

  for (var COLLECTION_NAME$1 in DOMIterables$1) {
    handlePrototype$1(global$i[COLLECTION_NAME$1] && global$i[COLLECTION_NAME$1].prototype, COLLECTION_NAME$1);
  }

  handlePrototype$1(DOMTokenListPrototype$1, 'DOMTokenList');

  var typedArrayConstructorExports = {};
  var typedArrayConstructor = {
    get exports(){ return typedArrayConstructorExports; },
    set exports(v){ typedArrayConstructorExports = v; },
  };

  // eslint-disable-next-line es/no-typed-arrays -- safe
  var arrayBufferBasicDetection = typeof ArrayBuffer != 'undefined' && typeof DataView != 'undefined';

  var NATIVE_ARRAY_BUFFER$1 = arrayBufferBasicDetection;
  var DESCRIPTORS$8 = descriptors;
  var global$h = global$x;
  var isCallable$8 = isCallable$t;
  var isObject$9 = isObject$i;
  var hasOwn$8 = hasOwnProperty_1;
  var classof$9 = classof$f;
  var tryToString$2 = tryToString$7;
  var createNonEnumerableProperty$4 = createNonEnumerableProperty$9;
  var defineBuiltIn$7 = defineBuiltIn$e;
  var defineBuiltInAccessor$6 = defineBuiltInAccessor$8;
  var isPrototypeOf$4 = objectIsPrototypeOf;
  var getPrototypeOf$1 = objectGetPrototypeOf;
  var setPrototypeOf$3 = objectSetPrototypeOf;
  var wellKnownSymbol$b = wellKnownSymbol$q;
  var uid$2 = uid$5;
  var InternalStateModule$4 = internalState;

  var enforceInternalState$1 = InternalStateModule$4.enforce;
  var getInternalState$3 = InternalStateModule$4.get;
  var Int8Array$4 = global$h.Int8Array;
  var Int8ArrayPrototype$1 = Int8Array$4 && Int8Array$4.prototype;
  var Uint8ClampedArray$1 = global$h.Uint8ClampedArray;
  var Uint8ClampedArrayPrototype = Uint8ClampedArray$1 && Uint8ClampedArray$1.prototype;
  var TypedArray$1 = Int8Array$4 && getPrototypeOf$1(Int8Array$4);
  var TypedArrayPrototype$2 = Int8ArrayPrototype$1 && getPrototypeOf$1(Int8ArrayPrototype$1);
  var ObjectPrototype$2 = Object.prototype;
  var TypeError$2 = global$h.TypeError;

  var TO_STRING_TAG = wellKnownSymbol$b('toStringTag');
  var TYPED_ARRAY_TAG$1 = uid$2('TYPED_ARRAY_TAG');
  var TYPED_ARRAY_CONSTRUCTOR = 'TypedArrayConstructor';
  // Fixing native typed arrays in Opera Presto crashes the browser, see #595
  var NATIVE_ARRAY_BUFFER_VIEWS$2 = NATIVE_ARRAY_BUFFER$1 && !!setPrototypeOf$3 && classof$9(global$h.opera) !== 'Opera';
  var TYPED_ARRAY_TAG_REQUIRED = false;
  var NAME$1, Constructor, Prototype;

  var TypedArrayConstructorsList = {
    Int8Array: 1,
    Uint8Array: 1,
    Uint8ClampedArray: 1,
    Int16Array: 2,
    Uint16Array: 2,
    Int32Array: 4,
    Uint32Array: 4,
    Float32Array: 4,
    Float64Array: 8
  };

  var BigIntArrayConstructorsList = {
    BigInt64Array: 8,
    BigUint64Array: 8
  };

  var isView = function isView(it) {
    if (!isObject$9(it)) return false;
    var klass = classof$9(it);
    return klass === 'DataView'
      || hasOwn$8(TypedArrayConstructorsList, klass)
      || hasOwn$8(BigIntArrayConstructorsList, klass);
  };

  var getTypedArrayConstructor$1 = function (it) {
    var proto = getPrototypeOf$1(it);
    if (!isObject$9(proto)) return;
    var state = getInternalState$3(proto);
    return (state && hasOwn$8(state, TYPED_ARRAY_CONSTRUCTOR)) ? state[TYPED_ARRAY_CONSTRUCTOR] : getTypedArrayConstructor$1(proto);
  };

  var isTypedArray$1 = function (it) {
    if (!isObject$9(it)) return false;
    var klass = classof$9(it);
    return hasOwn$8(TypedArrayConstructorsList, klass)
      || hasOwn$8(BigIntArrayConstructorsList, klass);
  };

  var aTypedArray$m = function (it) {
    if (isTypedArray$1(it)) return it;
    throw TypeError$2('Target is not a typed array');
  };

  var aTypedArrayConstructor$3 = function (C) {
    if (isCallable$8(C) && (!setPrototypeOf$3 || isPrototypeOf$4(TypedArray$1, C))) return C;
    throw TypeError$2(tryToString$2(C) + ' is not a typed array constructor');
  };

  var exportTypedArrayMethod$n = function (KEY, property, forced, options) {
    if (!DESCRIPTORS$8) return;
    if (forced) for (var ARRAY in TypedArrayConstructorsList) {
      var TypedArrayConstructor = global$h[ARRAY];
      if (TypedArrayConstructor && hasOwn$8(TypedArrayConstructor.prototype, KEY)) try {
        delete TypedArrayConstructor.prototype[KEY];
      } catch (error) {
        // old WebKit bug - some methods are non-configurable
        try {
          TypedArrayConstructor.prototype[KEY] = property;
        } catch (error2) { /* empty */ }
      }
    }
    if (!TypedArrayPrototype$2[KEY] || forced) {
      defineBuiltIn$7(TypedArrayPrototype$2, KEY, forced ? property
        : NATIVE_ARRAY_BUFFER_VIEWS$2 && Int8ArrayPrototype$1[KEY] || property, options);
    }
  };

  var exportTypedArrayStaticMethod = function (KEY, property, forced) {
    var ARRAY, TypedArrayConstructor;
    if (!DESCRIPTORS$8) return;
    if (setPrototypeOf$3) {
      if (forced) for (ARRAY in TypedArrayConstructorsList) {
        TypedArrayConstructor = global$h[ARRAY];
        if (TypedArrayConstructor && hasOwn$8(TypedArrayConstructor, KEY)) try {
          delete TypedArrayConstructor[KEY];
        } catch (error) { /* empty */ }
      }
      if (!TypedArray$1[KEY] || forced) {
        // V8 ~ Chrome 49-50 `%TypedArray%` methods are non-writable non-configurable
        try {
          return defineBuiltIn$7(TypedArray$1, KEY, forced ? property : NATIVE_ARRAY_BUFFER_VIEWS$2 && TypedArray$1[KEY] || property);
        } catch (error) { /* empty */ }
      } else return;
    }
    for (ARRAY in TypedArrayConstructorsList) {
      TypedArrayConstructor = global$h[ARRAY];
      if (TypedArrayConstructor && (!TypedArrayConstructor[KEY] || forced)) {
        defineBuiltIn$7(TypedArrayConstructor, KEY, property);
      }
    }
  };

  for (NAME$1 in TypedArrayConstructorsList) {
    Constructor = global$h[NAME$1];
    Prototype = Constructor && Constructor.prototype;
    if (Prototype) enforceInternalState$1(Prototype)[TYPED_ARRAY_CONSTRUCTOR] = Constructor;
    else NATIVE_ARRAY_BUFFER_VIEWS$2 = false;
  }

  for (NAME$1 in BigIntArrayConstructorsList) {
    Constructor = global$h[NAME$1];
    Prototype = Constructor && Constructor.prototype;
    if (Prototype) enforceInternalState$1(Prototype)[TYPED_ARRAY_CONSTRUCTOR] = Constructor;
  }

  // WebKit bug - typed arrays constructors prototype is Object.prototype
  if (!NATIVE_ARRAY_BUFFER_VIEWS$2 || !isCallable$8(TypedArray$1) || TypedArray$1 === Function.prototype) {
    // eslint-disable-next-line no-shadow -- safe
    TypedArray$1 = function TypedArray() {
      throw TypeError$2('Incorrect invocation');
    };
    if (NATIVE_ARRAY_BUFFER_VIEWS$2) for (NAME$1 in TypedArrayConstructorsList) {
      if (global$h[NAME$1]) setPrototypeOf$3(global$h[NAME$1], TypedArray$1);
    }
  }

  if (!NATIVE_ARRAY_BUFFER_VIEWS$2 || !TypedArrayPrototype$2 || TypedArrayPrototype$2 === ObjectPrototype$2) {
    TypedArrayPrototype$2 = TypedArray$1.prototype;
    if (NATIVE_ARRAY_BUFFER_VIEWS$2) for (NAME$1 in TypedArrayConstructorsList) {
      if (global$h[NAME$1]) setPrototypeOf$3(global$h[NAME$1].prototype, TypedArrayPrototype$2);
    }
  }

  // WebKit bug - one more object in Uint8ClampedArray prototype chain
  if (NATIVE_ARRAY_BUFFER_VIEWS$2 && getPrototypeOf$1(Uint8ClampedArrayPrototype) !== TypedArrayPrototype$2) {
    setPrototypeOf$3(Uint8ClampedArrayPrototype, TypedArrayPrototype$2);
  }

  if (DESCRIPTORS$8 && !hasOwn$8(TypedArrayPrototype$2, TO_STRING_TAG)) {
    TYPED_ARRAY_TAG_REQUIRED = true;
    defineBuiltInAccessor$6(TypedArrayPrototype$2, TO_STRING_TAG, {
      configurable: true,
      get: function () {
        return isObject$9(this) ? this[TYPED_ARRAY_TAG$1] : undefined;
      }
    });
    for (NAME$1 in TypedArrayConstructorsList) if (global$h[NAME$1]) {
      createNonEnumerableProperty$4(global$h[NAME$1], TYPED_ARRAY_TAG$1, NAME$1);
    }
  }

  var arrayBufferViewCore = {
    NATIVE_ARRAY_BUFFER_VIEWS: NATIVE_ARRAY_BUFFER_VIEWS$2,
    TYPED_ARRAY_TAG: TYPED_ARRAY_TAG_REQUIRED && TYPED_ARRAY_TAG$1,
    aTypedArray: aTypedArray$m,
    aTypedArrayConstructor: aTypedArrayConstructor$3,
    exportTypedArrayMethod: exportTypedArrayMethod$n,
    exportTypedArrayStaticMethod: exportTypedArrayStaticMethod,
    getTypedArrayConstructor: getTypedArrayConstructor$1,
    isView: isView,
    isTypedArray: isTypedArray$1,
    TypedArray: TypedArray$1,
    TypedArrayPrototype: TypedArrayPrototype$2
  };

  /* eslint-disable no-new -- required for testing */

  var global$g = global$x;
  var fails$r = fails$E;
  var checkCorrectnessOfIteration$2 = checkCorrectnessOfIteration$4;
  var NATIVE_ARRAY_BUFFER_VIEWS$1 = arrayBufferViewCore.NATIVE_ARRAY_BUFFER_VIEWS;

  var ArrayBuffer$2 = global$g.ArrayBuffer;
  var Int8Array$3 = global$g.Int8Array;

  var typedArrayConstructorsRequireWrappers = !NATIVE_ARRAY_BUFFER_VIEWS$1 || !fails$r(function () {
    Int8Array$3(1);
  }) || !fails$r(function () {
    new Int8Array$3(-1);
  }) || !checkCorrectnessOfIteration$2(function (iterable) {
    new Int8Array$3();
    new Int8Array$3(null);
    new Int8Array$3(1.5);
    new Int8Array$3(iterable);
  }, true) || fails$r(function () {
    // Safari (11+) bug - a reason why even Safari 13 should load a typed array polyfill
    return new Int8Array$3(new ArrayBuffer$2(2), 1, undefined).length !== 1;
  });

  var defineBuiltIn$6 = defineBuiltIn$e;

  var defineBuiltIns$2 = function (target, src, options) {
    for (var key in src) defineBuiltIn$6(target, key, src[key], options);
    return target;
  };

  var toIntegerOrInfinity$4 = toIntegerOrInfinity$8;
  var toLength$6 = toLength$8;

  var $RangeError$2 = RangeError;

  // `ToIndex` abstract operation
  // https://tc39.es/ecma262/#sec-toindex
  var toIndex$2 = function (it) {
    if (it === undefined) return 0;
    var number = toIntegerOrInfinity$4(it);
    var length = toLength$6(number);
    if (number !== length) throw $RangeError$2('Wrong length or index');
    return length;
  };

  // IEEE754 conversions based on https://github.com/feross/ieee754
  var $Array$3 = Array;
  var abs = Math.abs;
  var pow = Math.pow;
  var floor$4 = Math.floor;
  var log = Math.log;
  var LN2 = Math.LN2;

  var pack = function (number, mantissaLength, bytes) {
    var buffer = $Array$3(bytes);
    var exponentLength = bytes * 8 - mantissaLength - 1;
    var eMax = (1 << exponentLength) - 1;
    var eBias = eMax >> 1;
    var rt = mantissaLength === 23 ? pow(2, -24) - pow(2, -77) : 0;
    var sign = number < 0 || number === 0 && 1 / number < 0 ? 1 : 0;
    var index = 0;
    var exponent, mantissa, c;
    number = abs(number);
    // eslint-disable-next-line no-self-compare -- NaN check
    if (number != number || number === Infinity) {
      // eslint-disable-next-line no-self-compare -- NaN check
      mantissa = number != number ? 1 : 0;
      exponent = eMax;
    } else {
      exponent = floor$4(log(number) / LN2);
      c = pow(2, -exponent);
      if (number * c < 1) {
        exponent--;
        c *= 2;
      }
      if (exponent + eBias >= 1) {
        number += rt / c;
      } else {
        number += rt * pow(2, 1 - eBias);
      }
      if (number * c >= 2) {
        exponent++;
        c /= 2;
      }
      if (exponent + eBias >= eMax) {
        mantissa = 0;
        exponent = eMax;
      } else if (exponent + eBias >= 1) {
        mantissa = (number * c - 1) * pow(2, mantissaLength);
        exponent = exponent + eBias;
      } else {
        mantissa = number * pow(2, eBias - 1) * pow(2, mantissaLength);
        exponent = 0;
      }
    }
    while (mantissaLength >= 8) {
      buffer[index++] = mantissa & 255;
      mantissa /= 256;
      mantissaLength -= 8;
    }
    exponent = exponent << mantissaLength | mantissa;
    exponentLength += mantissaLength;
    while (exponentLength > 0) {
      buffer[index++] = exponent & 255;
      exponent /= 256;
      exponentLength -= 8;
    }
    buffer[--index] |= sign * 128;
    return buffer;
  };

  var unpack = function (buffer, mantissaLength) {
    var bytes = buffer.length;
    var exponentLength = bytes * 8 - mantissaLength - 1;
    var eMax = (1 << exponentLength) - 1;
    var eBias = eMax >> 1;
    var nBits = exponentLength - 7;
    var index = bytes - 1;
    var sign = buffer[index--];
    var exponent = sign & 127;
    var mantissa;
    sign >>= 7;
    while (nBits > 0) {
      exponent = exponent * 256 + buffer[index--];
      nBits -= 8;
    }
    mantissa = exponent & (1 << -nBits) - 1;
    exponent >>= -nBits;
    nBits += mantissaLength;
    while (nBits > 0) {
      mantissa = mantissa * 256 + buffer[index--];
      nBits -= 8;
    }
    if (exponent === 0) {
      exponent = 1 - eBias;
    } else if (exponent === eMax) {
      return mantissa ? NaN : sign ? -Infinity : Infinity;
    } else {
      mantissa = mantissa + pow(2, mantissaLength);
      exponent = exponent - eBias;
    } return (sign ? -1 : 1) * mantissa * pow(2, exponent - mantissaLength);
  };

  var ieee754 = {
    pack: pack,
    unpack: unpack
  };

  var toObject$a = toObject$d;
  var toAbsoluteIndex$3 = toAbsoluteIndex$5;
  var lengthOfArrayLike$a = lengthOfArrayLike$d;

  // `Array.prototype.fill` method implementation
  // https://tc39.es/ecma262/#sec-array.prototype.fill
  var arrayFill$1 = function fill(value /* , start = 0, end = @length */) {
    var O = toObject$a(this);
    var length = lengthOfArrayLike$a(O);
    var argumentsLength = arguments.length;
    var index = toAbsoluteIndex$3(argumentsLength > 1 ? arguments[1] : undefined, length);
    var end = argumentsLength > 2 ? arguments[2] : undefined;
    var endPos = end === undefined ? length : toAbsoluteIndex$3(end, length);
    while (endPos > index) O[index++] = value;
    return O;
  };

  var toPropertyKey$2 = toPropertyKey$5;
  var definePropertyModule$2 = objectDefineProperty;
  var createPropertyDescriptor$2 = createPropertyDescriptor$6;

  var createProperty$3 = function (object, key, value) {
    var propertyKey = toPropertyKey$2(key);
    if (propertyKey in object) definePropertyModule$2.f(object, propertyKey, createPropertyDescriptor$2(0, value));
    else object[propertyKey] = value;
  };

  var toAbsoluteIndex$2 = toAbsoluteIndex$5;
  var lengthOfArrayLike$9 = lengthOfArrayLike$d;
  var createProperty$2 = createProperty$3;

  var $Array$2 = Array;
  var max$1 = Math.max;

  var arraySliceSimple = function (O, start, end) {
    var length = lengthOfArrayLike$9(O);
    var k = toAbsoluteIndex$2(start, length);
    var fin = toAbsoluteIndex$2(end === undefined ? length : end, length);
    var result = $Array$2(max$1(fin - k, 0));
    for (var n = 0; k < fin; k++, n++) createProperty$2(result, n, O[k]);
    result.length = n;
    return result;
  };

  var global$f = global$x;
  var uncurryThis$m = functionUncurryThis;
  var DESCRIPTORS$7 = descriptors;
  var NATIVE_ARRAY_BUFFER = arrayBufferBasicDetection;
  var FunctionName = functionName;
  var createNonEnumerableProperty$3 = createNonEnumerableProperty$9;
  var defineBuiltInAccessor$5 = defineBuiltInAccessor$8;
  var defineBuiltIns$1 = defineBuiltIns$2;
  var fails$q = fails$E;
  var anInstance$3 = anInstance$5;
  var toIntegerOrInfinity$3 = toIntegerOrInfinity$8;
  var toLength$5 = toLength$8;
  var toIndex$1 = toIndex$2;
  var IEEE754 = ieee754;
  var getPrototypeOf = objectGetPrototypeOf;
  var setPrototypeOf$2 = objectSetPrototypeOf;
  var getOwnPropertyNames$1 = objectGetOwnPropertyNames.f;
  var arrayFill = arrayFill$1;
  var arraySlice$5 = arraySliceSimple;
  var setToStringTag$2 = setToStringTag$6;
  var InternalStateModule$3 = internalState;

  var PROPER_FUNCTION_NAME$1 = FunctionName.PROPER;
  var CONFIGURABLE_FUNCTION_NAME = FunctionName.CONFIGURABLE;
  var ARRAY_BUFFER = 'ArrayBuffer';
  var DATA_VIEW = 'DataView';
  var PROTOTYPE$1 = 'prototype';
  var WRONG_LENGTH$1 = 'Wrong length';
  var WRONG_INDEX = 'Wrong index';
  var getInternalArrayBufferState = InternalStateModule$3.getterFor(ARRAY_BUFFER);
  var getInternalDataViewState = InternalStateModule$3.getterFor(DATA_VIEW);
  var setInternalState$3 = InternalStateModule$3.set;
  var NativeArrayBuffer = global$f[ARRAY_BUFFER];
  var $ArrayBuffer = NativeArrayBuffer;
  var ArrayBufferPrototype$1 = $ArrayBuffer && $ArrayBuffer[PROTOTYPE$1];
  var $DataView = global$f[DATA_VIEW];
  var DataViewPrototype = $DataView && $DataView[PROTOTYPE$1];
  var ObjectPrototype$1 = Object.prototype;
  var Array$1 = global$f.Array;
  var RangeError$3 = global$f.RangeError;
  var fill = uncurryThis$m(arrayFill);
  var reverse = uncurryThis$m([].reverse);

  var packIEEE754 = IEEE754.pack;
  var unpackIEEE754 = IEEE754.unpack;

  var packInt8 = function (number) {
    return [number & 0xFF];
  };

  var packInt16 = function (number) {
    return [number & 0xFF, number >> 8 & 0xFF];
  };

  var packInt32 = function (number) {
    return [number & 0xFF, number >> 8 & 0xFF, number >> 16 & 0xFF, number >> 24 & 0xFF];
  };

  var unpackInt32 = function (buffer) {
    return buffer[3] << 24 | buffer[2] << 16 | buffer[1] << 8 | buffer[0];
  };

  var packFloat32 = function (number) {
    return packIEEE754(number, 23, 4);
  };

  var packFloat64 = function (number) {
    return packIEEE754(number, 52, 8);
  };

  var addGetter$1 = function (Constructor, key, getInternalState) {
    defineBuiltInAccessor$5(Constructor[PROTOTYPE$1], key, {
      configurable: true,
      get: function () {
        return getInternalState(this)[key];
      }
    });
  };

  var get = function (view, count, index, isLittleEndian) {
    var intIndex = toIndex$1(index);
    var store = getInternalDataViewState(view);
    if (intIndex + count > store.byteLength) throw RangeError$3(WRONG_INDEX);
    var bytes = store.bytes;
    var start = intIndex + store.byteOffset;
    var pack = arraySlice$5(bytes, start, start + count);
    return isLittleEndian ? pack : reverse(pack);
  };

  var set = function (view, count, index, conversion, value, isLittleEndian) {
    var intIndex = toIndex$1(index);
    var store = getInternalDataViewState(view);
    if (intIndex + count > store.byteLength) throw RangeError$3(WRONG_INDEX);
    var bytes = store.bytes;
    var start = intIndex + store.byteOffset;
    var pack = conversion(+value);
    for (var i = 0; i < count; i++) bytes[start + i] = pack[isLittleEndian ? i : count - i - 1];
  };

  if (!NATIVE_ARRAY_BUFFER) {
    $ArrayBuffer = function ArrayBuffer(length) {
      anInstance$3(this, ArrayBufferPrototype$1);
      var byteLength = toIndex$1(length);
      setInternalState$3(this, {
        type: ARRAY_BUFFER,
        bytes: fill(Array$1(byteLength), 0),
        byteLength: byteLength
      });
      if (!DESCRIPTORS$7) {
        this.byteLength = byteLength;
        this.detached = false;
      }
    };

    ArrayBufferPrototype$1 = $ArrayBuffer[PROTOTYPE$1];

    $DataView = function DataView(buffer, byteOffset, byteLength) {
      anInstance$3(this, DataViewPrototype);
      anInstance$3(buffer, ArrayBufferPrototype$1);
      var bufferState = getInternalArrayBufferState(buffer);
      var bufferLength = bufferState.byteLength;
      var offset = toIntegerOrInfinity$3(byteOffset);
      if (offset < 0 || offset > bufferLength) throw RangeError$3('Wrong offset');
      byteLength = byteLength === undefined ? bufferLength - offset : toLength$5(byteLength);
      if (offset + byteLength > bufferLength) throw RangeError$3(WRONG_LENGTH$1);
      setInternalState$3(this, {
        type: DATA_VIEW,
        buffer: buffer,
        byteLength: byteLength,
        byteOffset: offset,
        bytes: bufferState.bytes
      });
      if (!DESCRIPTORS$7) {
        this.buffer = buffer;
        this.byteLength = byteLength;
        this.byteOffset = offset;
      }
    };

    DataViewPrototype = $DataView[PROTOTYPE$1];

    if (DESCRIPTORS$7) {
      addGetter$1($ArrayBuffer, 'byteLength', getInternalArrayBufferState);
      addGetter$1($DataView, 'buffer', getInternalDataViewState);
      addGetter$1($DataView, 'byteLength', getInternalDataViewState);
      addGetter$1($DataView, 'byteOffset', getInternalDataViewState);
    }

    defineBuiltIns$1(DataViewPrototype, {
      getInt8: function getInt8(byteOffset) {
        return get(this, 1, byteOffset)[0] << 24 >> 24;
      },
      getUint8: function getUint8(byteOffset) {
        return get(this, 1, byteOffset)[0];
      },
      getInt16: function getInt16(byteOffset /* , littleEndian */) {
        var bytes = get(this, 2, byteOffset, arguments.length > 1 ? arguments[1] : undefined);
        return (bytes[1] << 8 | bytes[0]) << 16 >> 16;
      },
      getUint16: function getUint16(byteOffset /* , littleEndian */) {
        var bytes = get(this, 2, byteOffset, arguments.length > 1 ? arguments[1] : undefined);
        return bytes[1] << 8 | bytes[0];
      },
      getInt32: function getInt32(byteOffset /* , littleEndian */) {
        return unpackInt32(get(this, 4, byteOffset, arguments.length > 1 ? arguments[1] : undefined));
      },
      getUint32: function getUint32(byteOffset /* , littleEndian */) {
        return unpackInt32(get(this, 4, byteOffset, arguments.length > 1 ? arguments[1] : undefined)) >>> 0;
      },
      getFloat32: function getFloat32(byteOffset /* , littleEndian */) {
        return unpackIEEE754(get(this, 4, byteOffset, arguments.length > 1 ? arguments[1] : undefined), 23);
      },
      getFloat64: function getFloat64(byteOffset /* , littleEndian */) {
        return unpackIEEE754(get(this, 8, byteOffset, arguments.length > 1 ? arguments[1] : undefined), 52);
      },
      setInt8: function setInt8(byteOffset, value) {
        set(this, 1, byteOffset, packInt8, value);
      },
      setUint8: function setUint8(byteOffset, value) {
        set(this, 1, byteOffset, packInt8, value);
      },
      setInt16: function setInt16(byteOffset, value /* , littleEndian */) {
        set(this, 2, byteOffset, packInt16, value, arguments.length > 2 ? arguments[2] : undefined);
      },
      setUint16: function setUint16(byteOffset, value /* , littleEndian */) {
        set(this, 2, byteOffset, packInt16, value, arguments.length > 2 ? arguments[2] : undefined);
      },
      setInt32: function setInt32(byteOffset, value /* , littleEndian */) {
        set(this, 4, byteOffset, packInt32, value, arguments.length > 2 ? arguments[2] : undefined);
      },
      setUint32: function setUint32(byteOffset, value /* , littleEndian */) {
        set(this, 4, byteOffset, packInt32, value, arguments.length > 2 ? arguments[2] : undefined);
      },
      setFloat32: function setFloat32(byteOffset, value /* , littleEndian */) {
        set(this, 4, byteOffset, packFloat32, value, arguments.length > 2 ? arguments[2] : undefined);
      },
      setFloat64: function setFloat64(byteOffset, value /* , littleEndian */) {
        set(this, 8, byteOffset, packFloat64, value, arguments.length > 2 ? arguments[2] : undefined);
      }
    });
  } else {
    var INCORRECT_ARRAY_BUFFER_NAME = PROPER_FUNCTION_NAME$1 && NativeArrayBuffer.name !== ARRAY_BUFFER;
    /* eslint-disable no-new -- required for testing */
    if (!fails$q(function () {
      NativeArrayBuffer(1);
    }) || !fails$q(function () {
      new NativeArrayBuffer(-1);
    }) || fails$q(function () {
      new NativeArrayBuffer();
      new NativeArrayBuffer(1.5);
      new NativeArrayBuffer(NaN);
      return NativeArrayBuffer.length != 1 || INCORRECT_ARRAY_BUFFER_NAME && !CONFIGURABLE_FUNCTION_NAME;
    })) {
      /* eslint-enable no-new -- required for testing */
      $ArrayBuffer = function ArrayBuffer(length) {
        anInstance$3(this, ArrayBufferPrototype$1);
        return new NativeArrayBuffer(toIndex$1(length));
      };

      $ArrayBuffer[PROTOTYPE$1] = ArrayBufferPrototype$1;

      for (var keys = getOwnPropertyNames$1(NativeArrayBuffer), j = 0, key; keys.length > j;) {
        if (!((key = keys[j++]) in $ArrayBuffer)) {
          createNonEnumerableProperty$3($ArrayBuffer, key, NativeArrayBuffer[key]);
        }
      }

      ArrayBufferPrototype$1.constructor = $ArrayBuffer;
    } else if (INCORRECT_ARRAY_BUFFER_NAME && CONFIGURABLE_FUNCTION_NAME) {
      createNonEnumerableProperty$3(NativeArrayBuffer, 'name', ARRAY_BUFFER);
    }

    // WebKit bug - the same parent prototype for typed arrays and data view
    if (setPrototypeOf$2 && getPrototypeOf(DataViewPrototype) !== ObjectPrototype$1) {
      setPrototypeOf$2(DataViewPrototype, ObjectPrototype$1);
    }

    // iOS Safari 7.x bug
    var testView = new $DataView(new $ArrayBuffer(2));
    var $setInt8 = uncurryThis$m(DataViewPrototype.setInt8);
    testView.setInt8(0, 2147483648);
    testView.setInt8(1, 2147483649);
    if (testView.getInt8(0) || !testView.getInt8(1)) defineBuiltIns$1(DataViewPrototype, {
      setInt8: function setInt8(byteOffset, value) {
        $setInt8(this, byteOffset, value << 24 >> 24);
      },
      setUint8: function setUint8(byteOffset, value) {
        $setInt8(this, byteOffset, value << 24 >> 24);
      }
    }, { unsafe: true });
  }

  setToStringTag$2($ArrayBuffer, ARRAY_BUFFER);
  setToStringTag$2($DataView, DATA_VIEW);

  var arrayBuffer = {
    ArrayBuffer: $ArrayBuffer,
    DataView: $DataView
  };

  var isObject$8 = isObject$i;

  var floor$3 = Math.floor;

  // `IsIntegralNumber` abstract operation
  // https://tc39.es/ecma262/#sec-isintegralnumber
  // eslint-disable-next-line es/no-number-isinteger -- safe
  var isIntegralNumber$1 = Number.isInteger || function isInteger(it) {
    return !isObject$8(it) && isFinite(it) && floor$3(it) === it;
  };

  var toIntegerOrInfinity$2 = toIntegerOrInfinity$8;

  var $RangeError$1 = RangeError;

  var toPositiveInteger$1 = function (it) {
    var result = toIntegerOrInfinity$2(it);
    if (result < 0) throw $RangeError$1("The argument can't be less than 0");
    return result;
  };

  var toPositiveInteger = toPositiveInteger$1;

  var $RangeError = RangeError;

  var toOffset$2 = function (it, BYTES) {
    var offset = toPositiveInteger(it);
    if (offset % BYTES) throw $RangeError('Wrong offset');
    return offset;
  };

  var classof$8 = classof$f;

  var isBigIntArray$1 = function (it) {
    var klass = classof$8(it);
    return klass == 'BigInt64Array' || klass == 'BigUint64Array';
  };

  var toPrimitive = toPrimitive$2;

  var $TypeError$5 = TypeError;

  // `ToBigInt` abstract operation
  // https://tc39.es/ecma262/#sec-tobigint
  var toBigInt$2 = function (argument) {
    var prim = toPrimitive(argument, 'number');
    if (typeof prim == 'number') throw $TypeError$5("Can't convert number to bigint");
    // eslint-disable-next-line es/no-bigint -- safe
    return BigInt(prim);
  };

  var bind$3 = functionBindContext;
  var call$c = functionCall;
  var aConstructor = aConstructor$2;
  var toObject$9 = toObject$d;
  var lengthOfArrayLike$8 = lengthOfArrayLike$d;
  var getIterator$1 = getIterator$3;
  var getIteratorMethod$1 = getIteratorMethod$4;
  var isArrayIteratorMethod$1 = isArrayIteratorMethod$3;
  var isBigIntArray = isBigIntArray$1;
  var aTypedArrayConstructor$2 = arrayBufferViewCore.aTypedArrayConstructor;
  var toBigInt$1 = toBigInt$2;

  var typedArrayFrom$1 = function from(source /* , mapfn, thisArg */) {
    var C = aConstructor(this);
    var O = toObject$9(source);
    var argumentsLength = arguments.length;
    var mapfn = argumentsLength > 1 ? arguments[1] : undefined;
    var mapping = mapfn !== undefined;
    var iteratorMethod = getIteratorMethod$1(O);
    var i, length, result, thisIsBigIntArray, value, step, iterator, next;
    if (iteratorMethod && !isArrayIteratorMethod$1(iteratorMethod)) {
      iterator = getIterator$1(O, iteratorMethod);
      next = iterator.next;
      O = [];
      while (!(step = call$c(next, iterator)).done) {
        O.push(step.value);
      }
    }
    if (mapping && argumentsLength > 2) {
      mapfn = bind$3(mapfn, arguments[2]);
    }
    length = lengthOfArrayLike$8(O);
    result = new (aTypedArrayConstructor$2(C))(length);
    thisIsBigIntArray = isBigIntArray(result);
    for (i = 0; length > i; i++) {
      value = mapping ? mapfn(O[i], i) : O[i];
      // FF30- typed arrays doesn't properly convert objects to typed array values
      result[i] = thisIsBigIntArray ? toBigInt$1(value) : +value;
    }
    return result;
  };

  var classof$7 = classofRaw$2;

  // `IsArray` abstract operation
  // https://tc39.es/ecma262/#sec-isarray
  // eslint-disable-next-line es/no-array-isarray -- safe
  var isArray$3 = Array.isArray || function isArray(argument) {
    return classof$7(argument) == 'Array';
  };

  var isArray$2 = isArray$3;
  var isConstructor$1 = isConstructor$3;
  var isObject$7 = isObject$i;
  var wellKnownSymbol$a = wellKnownSymbol$q;

  var SPECIES$2 = wellKnownSymbol$a('species');
  var $Array$1 = Array;

  // a part of `ArraySpeciesCreate` abstract operation
  // https://tc39.es/ecma262/#sec-arrayspeciescreate
  var arraySpeciesConstructor$1 = function (originalArray) {
    var C;
    if (isArray$2(originalArray)) {
      C = originalArray.constructor;
      // cross-realm fallback
      if (isConstructor$1(C) && (C === $Array$1 || isArray$2(C.prototype))) C = undefined;
      else if (isObject$7(C)) {
        C = C[SPECIES$2];
        if (C === null) C = undefined;
      }
    } return C === undefined ? $Array$1 : C;
  };

  var arraySpeciesConstructor = arraySpeciesConstructor$1;

  // `ArraySpeciesCreate` abstract operation
  // https://tc39.es/ecma262/#sec-arrayspeciescreate
  var arraySpeciesCreate$2 = function (originalArray, length) {
    return new (arraySpeciesConstructor(originalArray))(length === 0 ? 0 : length);
  };

  var bind$2 = functionBindContext;
  var uncurryThis$l = functionUncurryThis;
  var IndexedObject$2 = indexedObject;
  var toObject$8 = toObject$d;
  var lengthOfArrayLike$7 = lengthOfArrayLike$d;
  var arraySpeciesCreate$1 = arraySpeciesCreate$2;

  var push$4 = uncurryThis$l([].push);

  // `Array.prototype.{ forEach, map, filter, some, every, find, findIndex, filterReject }` methods implementation
  var createMethod$2 = function (TYPE) {
    var IS_MAP = TYPE == 1;
    var IS_FILTER = TYPE == 2;
    var IS_SOME = TYPE == 3;
    var IS_EVERY = TYPE == 4;
    var IS_FIND_INDEX = TYPE == 6;
    var IS_FILTER_REJECT = TYPE == 7;
    var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
    return function ($this, callbackfn, that, specificCreate) {
      var O = toObject$8($this);
      var self = IndexedObject$2(O);
      var boundFunction = bind$2(callbackfn, that);
      var length = lengthOfArrayLike$7(self);
      var index = 0;
      var create = specificCreate || arraySpeciesCreate$1;
      var target = IS_MAP ? create($this, length) : IS_FILTER || IS_FILTER_REJECT ? create($this, 0) : undefined;
      var value, result;
      for (;length > index; index++) if (NO_HOLES || index in self) {
        value = self[index];
        result = boundFunction(value, index, O);
        if (TYPE) {
          if (IS_MAP) target[index] = result; // map
          else if (result) switch (TYPE) {
            case 3: return true;              // some
            case 5: return value;             // find
            case 6: return index;             // findIndex
            case 2: push$4(target, value);      // filter
          } else switch (TYPE) {
            case 4: return false;             // every
            case 7: push$4(target, value);      // filterReject
          }
        }
      }
      return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : target;
    };
  };

  var arrayIteration = {
    // `Array.prototype.forEach` method
    // https://tc39.es/ecma262/#sec-array.prototype.foreach
    forEach: createMethod$2(0),
    // `Array.prototype.map` method
    // https://tc39.es/ecma262/#sec-array.prototype.map
    map: createMethod$2(1),
    // `Array.prototype.filter` method
    // https://tc39.es/ecma262/#sec-array.prototype.filter
    filter: createMethod$2(2),
    // `Array.prototype.some` method
    // https://tc39.es/ecma262/#sec-array.prototype.some
    some: createMethod$2(3),
    // `Array.prototype.every` method
    // https://tc39.es/ecma262/#sec-array.prototype.every
    every: createMethod$2(4),
    // `Array.prototype.find` method
    // https://tc39.es/ecma262/#sec-array.prototype.find
    find: createMethod$2(5),
    // `Array.prototype.findIndex` method
    // https://tc39.es/ecma262/#sec-array.prototype.findIndex
    findIndex: createMethod$2(6),
    // `Array.prototype.filterReject` method
    // https://github.com/tc39/proposal-array-filtering
    filterReject: createMethod$2(7)
  };

  var isCallable$7 = isCallable$t;
  var isObject$6 = isObject$i;
  var setPrototypeOf$1 = objectSetPrototypeOf;

  // makes subclassing work correct for wrapped built-ins
  var inheritIfRequired$2 = function ($this, dummy, Wrapper) {
    var NewTarget, NewTargetPrototype;
    if (
      // it can work only with native `setPrototypeOf`
      setPrototypeOf$1 &&
      // we haven't completely correct pre-ES6 way for getting `new.target`, so use this
      isCallable$7(NewTarget = dummy.constructor) &&
      NewTarget !== Wrapper &&
      isObject$6(NewTargetPrototype = NewTarget.prototype) &&
      NewTargetPrototype !== Wrapper.prototype
    ) setPrototypeOf$1($this, NewTargetPrototype);
    return $this;
  };

  var $$k = _export;
  var global$e = global$x;
  var call$b = functionCall;
  var DESCRIPTORS$6 = descriptors;
  var TYPED_ARRAYS_CONSTRUCTORS_REQUIRES_WRAPPERS = typedArrayConstructorsRequireWrappers;
  var ArrayBufferViewCore$n = arrayBufferViewCore;
  var ArrayBufferModule = arrayBuffer;
  var anInstance$2 = anInstance$5;
  var createPropertyDescriptor$1 = createPropertyDescriptor$6;
  var createNonEnumerableProperty$2 = createNonEnumerableProperty$9;
  var isIntegralNumber = isIntegralNumber$1;
  var toLength$4 = toLength$8;
  var toIndex = toIndex$2;
  var toOffset$1 = toOffset$2;
  var toPropertyKey$1 = toPropertyKey$5;
  var hasOwn$7 = hasOwnProperty_1;
  var classof$6 = classof$f;
  var isObject$5 = isObject$i;
  var isSymbol$2 = isSymbol$5;
  var create$4 = objectCreate;
  var isPrototypeOf$3 = objectIsPrototypeOf;
  var setPrototypeOf = objectSetPrototypeOf;
  var getOwnPropertyNames = objectGetOwnPropertyNames.f;
  var typedArrayFrom = typedArrayFrom$1;
  var forEach$1 = arrayIteration.forEach;
  var setSpecies$1 = setSpecies$3;
  var defineBuiltInAccessor$4 = defineBuiltInAccessor$8;
  var definePropertyModule$1 = objectDefineProperty;
  var getOwnPropertyDescriptorModule$1 = objectGetOwnPropertyDescriptor;
  var InternalStateModule$2 = internalState;
  var inheritIfRequired$1 = inheritIfRequired$2;

  var getInternalState$2 = InternalStateModule$2.get;
  var setInternalState$2 = InternalStateModule$2.set;
  var enforceInternalState = InternalStateModule$2.enforce;
  var nativeDefineProperty$1 = definePropertyModule$1.f;
  var nativeGetOwnPropertyDescriptor$1 = getOwnPropertyDescriptorModule$1.f;
  var round = Math.round;
  var RangeError$2 = global$e.RangeError;
  var ArrayBuffer$1 = ArrayBufferModule.ArrayBuffer;
  var ArrayBufferPrototype = ArrayBuffer$1.prototype;
  var DataView$1 = ArrayBufferModule.DataView;
  var NATIVE_ARRAY_BUFFER_VIEWS = ArrayBufferViewCore$n.NATIVE_ARRAY_BUFFER_VIEWS;
  var TYPED_ARRAY_TAG = ArrayBufferViewCore$n.TYPED_ARRAY_TAG;
  var TypedArray = ArrayBufferViewCore$n.TypedArray;
  var TypedArrayPrototype$1 = ArrayBufferViewCore$n.TypedArrayPrototype;
  var aTypedArrayConstructor$1 = ArrayBufferViewCore$n.aTypedArrayConstructor;
  var isTypedArray = ArrayBufferViewCore$n.isTypedArray;
  var BYTES_PER_ELEMENT = 'BYTES_PER_ELEMENT';
  var WRONG_LENGTH = 'Wrong length';

  var fromList = function (C, list) {
    aTypedArrayConstructor$1(C);
    var index = 0;
    var length = list.length;
    var result = new C(length);
    while (length > index) result[index] = list[index++];
    return result;
  };

  var addGetter = function (it, key) {
    defineBuiltInAccessor$4(it, key, {
      configurable: true,
      get: function () {
        return getInternalState$2(this)[key];
      }
    });
  };

  var isArrayBuffer = function (it) {
    var klass;
    return isPrototypeOf$3(ArrayBufferPrototype, it) || (klass = classof$6(it)) == 'ArrayBuffer' || klass == 'SharedArrayBuffer';
  };

  var isTypedArrayIndex = function (target, key) {
    return isTypedArray(target)
      && !isSymbol$2(key)
      && key in target
      && isIntegralNumber(+key)
      && key >= 0;
  };

  var wrappedGetOwnPropertyDescriptor = function getOwnPropertyDescriptor(target, key) {
    key = toPropertyKey$1(key);
    return isTypedArrayIndex(target, key)
      ? createPropertyDescriptor$1(2, target[key])
      : nativeGetOwnPropertyDescriptor$1(target, key);
  };

  var wrappedDefineProperty = function defineProperty(target, key, descriptor) {
    key = toPropertyKey$1(key);
    if (isTypedArrayIndex(target, key)
      && isObject$5(descriptor)
      && hasOwn$7(descriptor, 'value')
      && !hasOwn$7(descriptor, 'get')
      && !hasOwn$7(descriptor, 'set')
      // TODO: add validation descriptor w/o calling accessors
      && !descriptor.configurable
      && (!hasOwn$7(descriptor, 'writable') || descriptor.writable)
      && (!hasOwn$7(descriptor, 'enumerable') || descriptor.enumerable)
    ) {
      target[key] = descriptor.value;
      return target;
    } return nativeDefineProperty$1(target, key, descriptor);
  };

  if (DESCRIPTORS$6) {
    if (!NATIVE_ARRAY_BUFFER_VIEWS) {
      getOwnPropertyDescriptorModule$1.f = wrappedGetOwnPropertyDescriptor;
      definePropertyModule$1.f = wrappedDefineProperty;
      addGetter(TypedArrayPrototype$1, 'buffer');
      addGetter(TypedArrayPrototype$1, 'byteOffset');
      addGetter(TypedArrayPrototype$1, 'byteLength');
      addGetter(TypedArrayPrototype$1, 'length');
    }

    $$k({ target: 'Object', stat: true, forced: !NATIVE_ARRAY_BUFFER_VIEWS }, {
      getOwnPropertyDescriptor: wrappedGetOwnPropertyDescriptor,
      defineProperty: wrappedDefineProperty
    });

    typedArrayConstructor.exports = function (TYPE, wrapper, CLAMPED) {
      var BYTES = TYPE.match(/\d+/)[0] / 8;
      var CONSTRUCTOR_NAME = TYPE + (CLAMPED ? 'Clamped' : '') + 'Array';
      var GETTER = 'get' + TYPE;
      var SETTER = 'set' + TYPE;
      var NativeTypedArrayConstructor = global$e[CONSTRUCTOR_NAME];
      var TypedArrayConstructor = NativeTypedArrayConstructor;
      var TypedArrayConstructorPrototype = TypedArrayConstructor && TypedArrayConstructor.prototype;
      var exported = {};

      var getter = function (that, index) {
        var data = getInternalState$2(that);
        return data.view[GETTER](index * BYTES + data.byteOffset, true);
      };

      var setter = function (that, index, value) {
        var data = getInternalState$2(that);
        if (CLAMPED) value = (value = round(value)) < 0 ? 0 : value > 0xFF ? 0xFF : value & 0xFF;
        data.view[SETTER](index * BYTES + data.byteOffset, value, true);
      };

      var addElement = function (that, index) {
        nativeDefineProperty$1(that, index, {
          get: function () {
            return getter(this, index);
          },
          set: function (value) {
            return setter(this, index, value);
          },
          enumerable: true
        });
      };

      if (!NATIVE_ARRAY_BUFFER_VIEWS) {
        TypedArrayConstructor = wrapper(function (that, data, offset, $length) {
          anInstance$2(that, TypedArrayConstructorPrototype);
          var index = 0;
          var byteOffset = 0;
          var buffer, byteLength, length;
          if (!isObject$5(data)) {
            length = toIndex(data);
            byteLength = length * BYTES;
            buffer = new ArrayBuffer$1(byteLength);
          } else if (isArrayBuffer(data)) {
            buffer = data;
            byteOffset = toOffset$1(offset, BYTES);
            var $len = data.byteLength;
            if ($length === undefined) {
              if ($len % BYTES) throw RangeError$2(WRONG_LENGTH);
              byteLength = $len - byteOffset;
              if (byteLength < 0) throw RangeError$2(WRONG_LENGTH);
            } else {
              byteLength = toLength$4($length) * BYTES;
              if (byteLength + byteOffset > $len) throw RangeError$2(WRONG_LENGTH);
            }
            length = byteLength / BYTES;
          } else if (isTypedArray(data)) {
            return fromList(TypedArrayConstructor, data);
          } else {
            return call$b(typedArrayFrom, TypedArrayConstructor, data);
          }
          setInternalState$2(that, {
            buffer: buffer,
            byteOffset: byteOffset,
            byteLength: byteLength,
            length: length,
            view: new DataView$1(buffer)
          });
          while (index < length) addElement(that, index++);
        });

        if (setPrototypeOf) setPrototypeOf(TypedArrayConstructor, TypedArray);
        TypedArrayConstructorPrototype = TypedArrayConstructor.prototype = create$4(TypedArrayPrototype$1);
      } else if (TYPED_ARRAYS_CONSTRUCTORS_REQUIRES_WRAPPERS) {
        TypedArrayConstructor = wrapper(function (dummy, data, typedArrayOffset, $length) {
          anInstance$2(dummy, TypedArrayConstructorPrototype);
          return inheritIfRequired$1(function () {
            if (!isObject$5(data)) return new NativeTypedArrayConstructor(toIndex(data));
            if (isArrayBuffer(data)) return $length !== undefined
              ? new NativeTypedArrayConstructor(data, toOffset$1(typedArrayOffset, BYTES), $length)
              : typedArrayOffset !== undefined
                ? new NativeTypedArrayConstructor(data, toOffset$1(typedArrayOffset, BYTES))
                : new NativeTypedArrayConstructor(data);
            if (isTypedArray(data)) return fromList(TypedArrayConstructor, data);
            return call$b(typedArrayFrom, TypedArrayConstructor, data);
          }(), dummy, TypedArrayConstructor);
        });

        if (setPrototypeOf) setPrototypeOf(TypedArrayConstructor, TypedArray);
        forEach$1(getOwnPropertyNames(NativeTypedArrayConstructor), function (key) {
          if (!(key in TypedArrayConstructor)) {
            createNonEnumerableProperty$2(TypedArrayConstructor, key, NativeTypedArrayConstructor[key]);
          }
        });
        TypedArrayConstructor.prototype = TypedArrayConstructorPrototype;
      }

      if (TypedArrayConstructorPrototype.constructor !== TypedArrayConstructor) {
        createNonEnumerableProperty$2(TypedArrayConstructorPrototype, 'constructor', TypedArrayConstructor);
      }

      enforceInternalState(TypedArrayConstructorPrototype).TypedArrayConstructor = TypedArrayConstructor;

      if (TYPED_ARRAY_TAG) {
        createNonEnumerableProperty$2(TypedArrayConstructorPrototype, TYPED_ARRAY_TAG, CONSTRUCTOR_NAME);
      }

      var FORCED = TypedArrayConstructor != NativeTypedArrayConstructor;

      exported[CONSTRUCTOR_NAME] = TypedArrayConstructor;

      $$k({ global: true, constructor: true, forced: FORCED, sham: !NATIVE_ARRAY_BUFFER_VIEWS }, exported);

      if (!(BYTES_PER_ELEMENT in TypedArrayConstructor)) {
        createNonEnumerableProperty$2(TypedArrayConstructor, BYTES_PER_ELEMENT, BYTES);
      }

      if (!(BYTES_PER_ELEMENT in TypedArrayConstructorPrototype)) {
        createNonEnumerableProperty$2(TypedArrayConstructorPrototype, BYTES_PER_ELEMENT, BYTES);
      }

      setSpecies$1(CONSTRUCTOR_NAME);
    };
  } else typedArrayConstructor.exports = function () { /* empty */ };

  var createTypedArrayConstructor = typedArrayConstructorExports;

  // `Uint8Array` constructor
  // https://tc39.es/ecma262/#sec-typedarray-objects
  createTypedArrayConstructor('Uint8', function (init) {
    return function Uint8Array(data, byteOffset, length) {
      return init(this, data, byteOffset, length);
    };
  });

  var tryToString$1 = tryToString$7;

  var $TypeError$4 = TypeError;

  var deletePropertyOrThrow$1 = function (O, P) {
    if (!delete O[P]) throw $TypeError$4('Cannot delete property ' + tryToString$1(P) + ' of ' + tryToString$1(O));
  };

  var toObject$7 = toObject$d;
  var toAbsoluteIndex$1 = toAbsoluteIndex$5;
  var lengthOfArrayLike$6 = lengthOfArrayLike$d;
  var deletePropertyOrThrow = deletePropertyOrThrow$1;

  var min$4 = Math.min;

  // `Array.prototype.copyWithin` method implementation
  // https://tc39.es/ecma262/#sec-array.prototype.copywithin
  // eslint-disable-next-line es/no-array-prototype-copywithin -- safe
  var arrayCopyWithin = [].copyWithin || function copyWithin(target /* = 0 */, start /* = 0, end = @length */) {
    var O = toObject$7(this);
    var len = lengthOfArrayLike$6(O);
    var to = toAbsoluteIndex$1(target, len);
    var from = toAbsoluteIndex$1(start, len);
    var end = arguments.length > 2 ? arguments[2] : undefined;
    var count = min$4((end === undefined ? len : toAbsoluteIndex$1(end, len)) - from, len - to);
    var inc = 1;
    if (from < to && to < from + count) {
      inc = -1;
      from += count - 1;
      to += count - 1;
    }
    while (count-- > 0) {
      if (from in O) O[to] = O[from];
      else deletePropertyOrThrow(O, to);
      to += inc;
      from += inc;
    } return O;
  };

  var uncurryThis$k = functionUncurryThis;
  var ArrayBufferViewCore$m = arrayBufferViewCore;
  var $ArrayCopyWithin = arrayCopyWithin;

  var u$ArrayCopyWithin = uncurryThis$k($ArrayCopyWithin);
  var aTypedArray$l = ArrayBufferViewCore$m.aTypedArray;
  var exportTypedArrayMethod$m = ArrayBufferViewCore$m.exportTypedArrayMethod;

  // `%TypedArray%.prototype.copyWithin` method
  // https://tc39.es/ecma262/#sec-%typedarray%.prototype.copywithin
  exportTypedArrayMethod$m('copyWithin', function copyWithin(target, start /* , end */) {
    return u$ArrayCopyWithin(aTypedArray$l(this), target, start, arguments.length > 2 ? arguments[2] : undefined);
  });

  var ArrayBufferViewCore$l = arrayBufferViewCore;
  var $every = arrayIteration.every;

  var aTypedArray$k = ArrayBufferViewCore$l.aTypedArray;
  var exportTypedArrayMethod$l = ArrayBufferViewCore$l.exportTypedArrayMethod;

  // `%TypedArray%.prototype.every` method
  // https://tc39.es/ecma262/#sec-%typedarray%.prototype.every
  exportTypedArrayMethod$l('every', function every(callbackfn /* , thisArg */) {
    return $every(aTypedArray$k(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  });

  var ArrayBufferViewCore$k = arrayBufferViewCore;
  var $fill = arrayFill$1;
  var toBigInt = toBigInt$2;
  var classof$5 = classof$f;
  var call$a = functionCall;
  var uncurryThis$j = functionUncurryThis;
  var fails$p = fails$E;

  var aTypedArray$j = ArrayBufferViewCore$k.aTypedArray;
  var exportTypedArrayMethod$k = ArrayBufferViewCore$k.exportTypedArrayMethod;
  var slice$1 = uncurryThis$j(''.slice);

  // V8 ~ Chrome < 59, Safari < 14.1, FF < 55, Edge <=18
  var CONVERSION_BUG = fails$p(function () {
    var count = 0;
    // eslint-disable-next-line es/no-typed-arrays -- safe
    new Int8Array(2).fill({ valueOf: function () { return count++; } });
    return count !== 1;
  });

  // `%TypedArray%.prototype.fill` method
  // https://tc39.es/ecma262/#sec-%typedarray%.prototype.fill
  exportTypedArrayMethod$k('fill', function fill(value /* , start, end */) {
    var length = arguments.length;
    aTypedArray$j(this);
    var actualValue = slice$1(classof$5(this), 0, 3) === 'Big' ? toBigInt(value) : +value;
    return call$a($fill, this, actualValue, length > 1 ? arguments[1] : undefined, length > 2 ? arguments[2] : undefined);
  }, CONVERSION_BUG);

  var lengthOfArrayLike$5 = lengthOfArrayLike$d;

  var arrayFromConstructorAndList$1 = function (Constructor, list) {
    var index = 0;
    var length = lengthOfArrayLike$5(list);
    var result = new Constructor(length);
    while (length > index) result[index] = list[index++];
    return result;
  };

  var ArrayBufferViewCore$j = arrayBufferViewCore;
  var speciesConstructor$1 = speciesConstructor$3;

  var aTypedArrayConstructor = ArrayBufferViewCore$j.aTypedArrayConstructor;
  var getTypedArrayConstructor = ArrayBufferViewCore$j.getTypedArrayConstructor;

  // a part of `TypedArraySpeciesCreate` abstract operation
  // https://tc39.es/ecma262/#typedarray-species-create
  var typedArraySpeciesConstructor$4 = function (originalArray) {
    return aTypedArrayConstructor(speciesConstructor$1(originalArray, getTypedArrayConstructor(originalArray)));
  };

  var arrayFromConstructorAndList = arrayFromConstructorAndList$1;
  var typedArraySpeciesConstructor$3 = typedArraySpeciesConstructor$4;

  var typedArrayFromSpeciesAndList = function (instance, list) {
    return arrayFromConstructorAndList(typedArraySpeciesConstructor$3(instance), list);
  };

  var ArrayBufferViewCore$i = arrayBufferViewCore;
  var $filter$1 = arrayIteration.filter;
  var fromSpeciesAndList = typedArrayFromSpeciesAndList;

  var aTypedArray$i = ArrayBufferViewCore$i.aTypedArray;
  var exportTypedArrayMethod$j = ArrayBufferViewCore$i.exportTypedArrayMethod;

  // `%TypedArray%.prototype.filter` method
  // https://tc39.es/ecma262/#sec-%typedarray%.prototype.filter
  exportTypedArrayMethod$j('filter', function filter(callbackfn /* , thisArg */) {
    var list = $filter$1(aTypedArray$i(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);
    return fromSpeciesAndList(this, list);
  });

  var ArrayBufferViewCore$h = arrayBufferViewCore;
  var $find = arrayIteration.find;

  var aTypedArray$h = ArrayBufferViewCore$h.aTypedArray;
  var exportTypedArrayMethod$i = ArrayBufferViewCore$h.exportTypedArrayMethod;

  // `%TypedArray%.prototype.find` method
  // https://tc39.es/ecma262/#sec-%typedarray%.prototype.find
  exportTypedArrayMethod$i('find', function find(predicate /* , thisArg */) {
    return $find(aTypedArray$h(this), predicate, arguments.length > 1 ? arguments[1] : undefined);
  });

  var ArrayBufferViewCore$g = arrayBufferViewCore;
  var $findIndex = arrayIteration.findIndex;

  var aTypedArray$g = ArrayBufferViewCore$g.aTypedArray;
  var exportTypedArrayMethod$h = ArrayBufferViewCore$g.exportTypedArrayMethod;

  // `%TypedArray%.prototype.findIndex` method
  // https://tc39.es/ecma262/#sec-%typedarray%.prototype.findindex
  exportTypedArrayMethod$h('findIndex', function findIndex(predicate /* , thisArg */) {
    return $findIndex(aTypedArray$g(this), predicate, arguments.length > 1 ? arguments[1] : undefined);
  });

  var ArrayBufferViewCore$f = arrayBufferViewCore;
  var $forEach$2 = arrayIteration.forEach;

  var aTypedArray$f = ArrayBufferViewCore$f.aTypedArray;
  var exportTypedArrayMethod$g = ArrayBufferViewCore$f.exportTypedArrayMethod;

  // `%TypedArray%.prototype.forEach` method
  // https://tc39.es/ecma262/#sec-%typedarray%.prototype.foreach
  exportTypedArrayMethod$g('forEach', function forEach(callbackfn /* , thisArg */) {
    $forEach$2(aTypedArray$f(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  });

  var ArrayBufferViewCore$e = arrayBufferViewCore;
  var $includes = arrayIncludes.includes;

  var aTypedArray$e = ArrayBufferViewCore$e.aTypedArray;
  var exportTypedArrayMethod$f = ArrayBufferViewCore$e.exportTypedArrayMethod;

  // `%TypedArray%.prototype.includes` method
  // https://tc39.es/ecma262/#sec-%typedarray%.prototype.includes
  exportTypedArrayMethod$f('includes', function includes(searchElement /* , fromIndex */) {
    return $includes(aTypedArray$e(this), searchElement, arguments.length > 1 ? arguments[1] : undefined);
  });

  var ArrayBufferViewCore$d = arrayBufferViewCore;
  var $indexOf = arrayIncludes.indexOf;

  var aTypedArray$d = ArrayBufferViewCore$d.aTypedArray;
  var exportTypedArrayMethod$e = ArrayBufferViewCore$d.exportTypedArrayMethod;

  // `%TypedArray%.prototype.indexOf` method
  // https://tc39.es/ecma262/#sec-%typedarray%.prototype.indexof
  exportTypedArrayMethod$e('indexOf', function indexOf(searchElement /* , fromIndex */) {
    return $indexOf(aTypedArray$d(this), searchElement, arguments.length > 1 ? arguments[1] : undefined);
  });

  var global$d = global$x;
  var fails$o = fails$E;
  var uncurryThis$i = functionUncurryThis;
  var ArrayBufferViewCore$c = arrayBufferViewCore;
  var ArrayIterators = es_array_iterator;
  var wellKnownSymbol$9 = wellKnownSymbol$q;

  var ITERATOR = wellKnownSymbol$9('iterator');
  var Uint8Array$2 = global$d.Uint8Array;
  var arrayValues = uncurryThis$i(ArrayIterators.values);
  var arrayKeys = uncurryThis$i(ArrayIterators.keys);
  var arrayEntries = uncurryThis$i(ArrayIterators.entries);
  var aTypedArray$c = ArrayBufferViewCore$c.aTypedArray;
  var exportTypedArrayMethod$d = ArrayBufferViewCore$c.exportTypedArrayMethod;
  var TypedArrayPrototype = Uint8Array$2 && Uint8Array$2.prototype;

  var GENERIC = !fails$o(function () {
    TypedArrayPrototype[ITERATOR].call([1]);
  });

  var ITERATOR_IS_VALUES = !!TypedArrayPrototype
    && TypedArrayPrototype.values
    && TypedArrayPrototype[ITERATOR] === TypedArrayPrototype.values
    && TypedArrayPrototype.values.name === 'values';

  var typedArrayValues = function values() {
    return arrayValues(aTypedArray$c(this));
  };

  // `%TypedArray%.prototype.entries` method
  // https://tc39.es/ecma262/#sec-%typedarray%.prototype.entries
  exportTypedArrayMethod$d('entries', function entries() {
    return arrayEntries(aTypedArray$c(this));
  }, GENERIC);
  // `%TypedArray%.prototype.keys` method
  // https://tc39.es/ecma262/#sec-%typedarray%.prototype.keys
  exportTypedArrayMethod$d('keys', function keys() {
    return arrayKeys(aTypedArray$c(this));
  }, GENERIC);
  // `%TypedArray%.prototype.values` method
  // https://tc39.es/ecma262/#sec-%typedarray%.prototype.values
  exportTypedArrayMethod$d('values', typedArrayValues, GENERIC || !ITERATOR_IS_VALUES, { name: 'values' });
  // `%TypedArray%.prototype[@@iterator]` method
  // https://tc39.es/ecma262/#sec-%typedarray%.prototype-@@iterator
  exportTypedArrayMethod$d(ITERATOR, typedArrayValues, GENERIC || !ITERATOR_IS_VALUES, { name: 'values' });

  var ArrayBufferViewCore$b = arrayBufferViewCore;
  var uncurryThis$h = functionUncurryThis;

  var aTypedArray$b = ArrayBufferViewCore$b.aTypedArray;
  var exportTypedArrayMethod$c = ArrayBufferViewCore$b.exportTypedArrayMethod;
  var $join = uncurryThis$h([].join);

  // `%TypedArray%.prototype.join` method
  // https://tc39.es/ecma262/#sec-%typedarray%.prototype.join
  exportTypedArrayMethod$c('join', function join(separator) {
    return $join(aTypedArray$b(this), separator);
  });

  var fails$n = fails$E;

  var arrayMethodIsStrict$2 = function (METHOD_NAME, argument) {
    var method = [][METHOD_NAME];
    return !!method && fails$n(function () {
      // eslint-disable-next-line no-useless-call -- required for testing
      method.call(null, argument || function () { return 1; }, 1);
    });
  };

  /* eslint-disable es/no-array-prototype-lastindexof -- safe */
  var apply$4 = functionApply;
  var toIndexedObject$4 = toIndexedObject$a;
  var toIntegerOrInfinity$1 = toIntegerOrInfinity$8;
  var lengthOfArrayLike$4 = lengthOfArrayLike$d;
  var arrayMethodIsStrict$1 = arrayMethodIsStrict$2;

  var min$3 = Math.min;
  var $lastIndexOf$1 = [].lastIndexOf;
  var NEGATIVE_ZERO = !!$lastIndexOf$1 && 1 / [1].lastIndexOf(1, -0) < 0;
  var STRICT_METHOD$1 = arrayMethodIsStrict$1('lastIndexOf');
  var FORCED$4 = NEGATIVE_ZERO || !STRICT_METHOD$1;

  // `Array.prototype.lastIndexOf` method implementation
  // https://tc39.es/ecma262/#sec-array.prototype.lastindexof
  var arrayLastIndexOf = FORCED$4 ? function lastIndexOf(searchElement /* , fromIndex = @[*-1] */) {
    // convert -0 to +0
    if (NEGATIVE_ZERO) return apply$4($lastIndexOf$1, this, arguments) || 0;
    var O = toIndexedObject$4(this);
    var length = lengthOfArrayLike$4(O);
    var index = length - 1;
    if (arguments.length > 1) index = min$3(index, toIntegerOrInfinity$1(arguments[1]));
    if (index < 0) index = length + index;
    for (;index >= 0; index--) if (index in O && O[index] === searchElement) return index || 0;
    return -1;
  } : $lastIndexOf$1;

  var ArrayBufferViewCore$a = arrayBufferViewCore;
  var apply$3 = functionApply;
  var $lastIndexOf = arrayLastIndexOf;

  var aTypedArray$a = ArrayBufferViewCore$a.aTypedArray;
  var exportTypedArrayMethod$b = ArrayBufferViewCore$a.exportTypedArrayMethod;

  // `%TypedArray%.prototype.lastIndexOf` method
  // https://tc39.es/ecma262/#sec-%typedarray%.prototype.lastindexof
  exportTypedArrayMethod$b('lastIndexOf', function lastIndexOf(searchElement /* , fromIndex */) {
    var length = arguments.length;
    return apply$3($lastIndexOf, aTypedArray$a(this), length > 1 ? [searchElement, arguments[1]] : [searchElement]);
  });

  var ArrayBufferViewCore$9 = arrayBufferViewCore;
  var $map$1 = arrayIteration.map;
  var typedArraySpeciesConstructor$2 = typedArraySpeciesConstructor$4;

  var aTypedArray$9 = ArrayBufferViewCore$9.aTypedArray;
  var exportTypedArrayMethod$a = ArrayBufferViewCore$9.exportTypedArrayMethod;

  // `%TypedArray%.prototype.map` method
  // https://tc39.es/ecma262/#sec-%typedarray%.prototype.map
  exportTypedArrayMethod$a('map', function map(mapfn /* , thisArg */) {
    return $map$1(aTypedArray$9(this), mapfn, arguments.length > 1 ? arguments[1] : undefined, function (O, length) {
      return new (typedArraySpeciesConstructor$2(O))(length);
    });
  });

  var aCallable$1 = aCallable$b;
  var toObject$6 = toObject$d;
  var IndexedObject$1 = indexedObject;
  var lengthOfArrayLike$3 = lengthOfArrayLike$d;

  var $TypeError$3 = TypeError;

  // `Array.prototype.{ reduce, reduceRight }` methods implementation
  var createMethod$1 = function (IS_RIGHT) {
    return function (that, callbackfn, argumentsLength, memo) {
      aCallable$1(callbackfn);
      var O = toObject$6(that);
      var self = IndexedObject$1(O);
      var length = lengthOfArrayLike$3(O);
      var index = IS_RIGHT ? length - 1 : 0;
      var i = IS_RIGHT ? -1 : 1;
      if (argumentsLength < 2) while (true) {
        if (index in self) {
          memo = self[index];
          index += i;
          break;
        }
        index += i;
        if (IS_RIGHT ? index < 0 : length <= index) {
          throw $TypeError$3('Reduce of empty array with no initial value');
        }
      }
      for (;IS_RIGHT ? index >= 0 : length > index; index += i) if (index in self) {
        memo = callbackfn(memo, self[index], index, O);
      }
      return memo;
    };
  };

  var arrayReduce = {
    // `Array.prototype.reduce` method
    // https://tc39.es/ecma262/#sec-array.prototype.reduce
    left: createMethod$1(false),
    // `Array.prototype.reduceRight` method
    // https://tc39.es/ecma262/#sec-array.prototype.reduceright
    right: createMethod$1(true)
  };

  var ArrayBufferViewCore$8 = arrayBufferViewCore;
  var $reduce = arrayReduce.left;

  var aTypedArray$8 = ArrayBufferViewCore$8.aTypedArray;
  var exportTypedArrayMethod$9 = ArrayBufferViewCore$8.exportTypedArrayMethod;

  // `%TypedArray%.prototype.reduce` method
  // https://tc39.es/ecma262/#sec-%typedarray%.prototype.reduce
  exportTypedArrayMethod$9('reduce', function reduce(callbackfn /* , initialValue */) {
    var length = arguments.length;
    return $reduce(aTypedArray$8(this), callbackfn, length, length > 1 ? arguments[1] : undefined);
  });

  var ArrayBufferViewCore$7 = arrayBufferViewCore;
  var $reduceRight = arrayReduce.right;

  var aTypedArray$7 = ArrayBufferViewCore$7.aTypedArray;
  var exportTypedArrayMethod$8 = ArrayBufferViewCore$7.exportTypedArrayMethod;

  // `%TypedArray%.prototype.reduceRight` method
  // https://tc39.es/ecma262/#sec-%typedarray%.prototype.reduceright
  exportTypedArrayMethod$8('reduceRight', function reduceRight(callbackfn /* , initialValue */) {
    var length = arguments.length;
    return $reduceRight(aTypedArray$7(this), callbackfn, length, length > 1 ? arguments[1] : undefined);
  });

  var ArrayBufferViewCore$6 = arrayBufferViewCore;

  var aTypedArray$6 = ArrayBufferViewCore$6.aTypedArray;
  var exportTypedArrayMethod$7 = ArrayBufferViewCore$6.exportTypedArrayMethod;
  var floor$2 = Math.floor;

  // `%TypedArray%.prototype.reverse` method
  // https://tc39.es/ecma262/#sec-%typedarray%.prototype.reverse
  exportTypedArrayMethod$7('reverse', function reverse() {
    var that = this;
    var length = aTypedArray$6(that).length;
    var middle = floor$2(length / 2);
    var index = 0;
    var value;
    while (index < middle) {
      value = that[index];
      that[index++] = that[--length];
      that[length] = value;
    } return that;
  });

  var global$c = global$x;
  var call$9 = functionCall;
  var ArrayBufferViewCore$5 = arrayBufferViewCore;
  var lengthOfArrayLike$2 = lengthOfArrayLike$d;
  var toOffset = toOffset$2;
  var toIndexedObject$3 = toObject$d;
  var fails$m = fails$E;

  var RangeError$1 = global$c.RangeError;
  var Int8Array$2 = global$c.Int8Array;
  var Int8ArrayPrototype = Int8Array$2 && Int8Array$2.prototype;
  var $set = Int8ArrayPrototype && Int8ArrayPrototype.set;
  var aTypedArray$5 = ArrayBufferViewCore$5.aTypedArray;
  var exportTypedArrayMethod$6 = ArrayBufferViewCore$5.exportTypedArrayMethod;

  var WORKS_WITH_OBJECTS_AND_GENERIC_ON_TYPED_ARRAYS = !fails$m(function () {
    // eslint-disable-next-line es/no-typed-arrays -- required for testing
    var array = new Uint8ClampedArray(2);
    call$9($set, array, { length: 1, 0: 3 }, 1);
    return array[1] !== 3;
  });

  // https://bugs.chromium.org/p/v8/issues/detail?id=11294 and other
  var TO_OBJECT_BUG = WORKS_WITH_OBJECTS_AND_GENERIC_ON_TYPED_ARRAYS && ArrayBufferViewCore$5.NATIVE_ARRAY_BUFFER_VIEWS && fails$m(function () {
    var array = new Int8Array$2(2);
    array.set(1);
    array.set('2', 1);
    return array[0] !== 0 || array[1] !== 2;
  });

  // `%TypedArray%.prototype.set` method
  // https://tc39.es/ecma262/#sec-%typedarray%.prototype.set
  exportTypedArrayMethod$6('set', function set(arrayLike /* , offset */) {
    aTypedArray$5(this);
    var offset = toOffset(arguments.length > 1 ? arguments[1] : undefined, 1);
    var src = toIndexedObject$3(arrayLike);
    if (WORKS_WITH_OBJECTS_AND_GENERIC_ON_TYPED_ARRAYS) return call$9($set, this, src, offset);
    var length = this.length;
    var len = lengthOfArrayLike$2(src);
    var index = 0;
    if (len + offset > length) throw RangeError$1('Wrong length');
    while (index < len) this[offset + index] = src[index++];
  }, !WORKS_WITH_OBJECTS_AND_GENERIC_ON_TYPED_ARRAYS || TO_OBJECT_BUG);

  var ArrayBufferViewCore$4 = arrayBufferViewCore;
  var typedArraySpeciesConstructor$1 = typedArraySpeciesConstructor$4;
  var fails$l = fails$E;
  var arraySlice$4 = arraySlice$7;

  var aTypedArray$4 = ArrayBufferViewCore$4.aTypedArray;
  var exportTypedArrayMethod$5 = ArrayBufferViewCore$4.exportTypedArrayMethod;

  var FORCED$3 = fails$l(function () {
    // eslint-disable-next-line es/no-typed-arrays -- required for testing
    new Int8Array(1).slice();
  });

  // `%TypedArray%.prototype.slice` method
  // https://tc39.es/ecma262/#sec-%typedarray%.prototype.slice
  exportTypedArrayMethod$5('slice', function slice(start, end) {
    var list = arraySlice$4(aTypedArray$4(this), start, end);
    var C = typedArraySpeciesConstructor$1(this);
    var index = 0;
    var length = list.length;
    var result = new C(length);
    while (length > index) result[index] = list[index++];
    return result;
  }, FORCED$3);

  var ArrayBufferViewCore$3 = arrayBufferViewCore;
  var $some = arrayIteration.some;

  var aTypedArray$3 = ArrayBufferViewCore$3.aTypedArray;
  var exportTypedArrayMethod$4 = ArrayBufferViewCore$3.exportTypedArrayMethod;

  // `%TypedArray%.prototype.some` method
  // https://tc39.es/ecma262/#sec-%typedarray%.prototype.some
  exportTypedArrayMethod$4('some', function some(callbackfn /* , thisArg */) {
    return $some(aTypedArray$3(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  });

  var arraySlice$3 = arraySliceSimple;

  var floor$1 = Math.floor;

  var mergeSort = function (array, comparefn) {
    var length = array.length;
    var middle = floor$1(length / 2);
    return length < 8 ? insertionSort(array, comparefn) : merge(
      array,
      mergeSort(arraySlice$3(array, 0, middle), comparefn),
      mergeSort(arraySlice$3(array, middle), comparefn),
      comparefn
    );
  };

  var insertionSort = function (array, comparefn) {
    var length = array.length;
    var i = 1;
    var element, j;

    while (i < length) {
      j = i;
      element = array[i];
      while (j && comparefn(array[j - 1], element) > 0) {
        array[j] = array[--j];
      }
      if (j !== i++) array[j] = element;
    } return array;
  };

  var merge = function (array, left, right, comparefn) {
    var llength = left.length;
    var rlength = right.length;
    var lindex = 0;
    var rindex = 0;

    while (lindex < llength || rindex < rlength) {
      array[lindex + rindex] = (lindex < llength && rindex < rlength)
        ? comparefn(left[lindex], right[rindex]) <= 0 ? left[lindex++] : right[rindex++]
        : lindex < llength ? left[lindex++] : right[rindex++];
    } return array;
  };

  var arraySort = mergeSort;

  var userAgent$1 = engineUserAgent;

  var firefox = userAgent$1.match(/firefox\/(\d+)/i);

  var engineFfVersion = !!firefox && +firefox[1];

  var UA = engineUserAgent;

  var engineIsIeOrEdge = /MSIE|Trident/.test(UA);

  var userAgent = engineUserAgent;

  var webkit = userAgent.match(/AppleWebKit\/(\d+)\./);

  var engineWebkitVersion = !!webkit && +webkit[1];

  var global$b = global$x;
  var uncurryThis$g = functionUncurryThisClause;
  var fails$k = fails$E;
  var aCallable = aCallable$b;
  var internalSort = arraySort;
  var ArrayBufferViewCore$2 = arrayBufferViewCore;
  var FF = engineFfVersion;
  var IE_OR_EDGE = engineIsIeOrEdge;
  var V8 = engineV8Version;
  var WEBKIT = engineWebkitVersion;

  var aTypedArray$2 = ArrayBufferViewCore$2.aTypedArray;
  var exportTypedArrayMethod$3 = ArrayBufferViewCore$2.exportTypedArrayMethod;
  var Uint16Array = global$b.Uint16Array;
  var nativeSort = Uint16Array && uncurryThis$g(Uint16Array.prototype.sort);

  // WebKit
  var ACCEPT_INCORRECT_ARGUMENTS = !!nativeSort && !(fails$k(function () {
    nativeSort(new Uint16Array(2), null);
  }) && fails$k(function () {
    nativeSort(new Uint16Array(2), {});
  }));

  var STABLE_SORT = !!nativeSort && !fails$k(function () {
    // feature detection can be too slow, so check engines versions
    if (V8) return V8 < 74;
    if (FF) return FF < 67;
    if (IE_OR_EDGE) return true;
    if (WEBKIT) return WEBKIT < 602;

    var array = new Uint16Array(516);
    var expected = Array(516);
    var index, mod;

    for (index = 0; index < 516; index++) {
      mod = index % 4;
      array[index] = 515 - index;
      expected[index] = index - 2 * mod + 3;
    }

    nativeSort(array, function (a, b) {
      return (a / 4 | 0) - (b / 4 | 0);
    });

    for (index = 0; index < 516; index++) {
      if (array[index] !== expected[index]) return true;
    }
  });

  var getSortCompare = function (comparefn) {
    return function (x, y) {
      if (comparefn !== undefined) return +comparefn(x, y) || 0;
      // eslint-disable-next-line no-self-compare -- NaN check
      if (y !== y) return -1;
      // eslint-disable-next-line no-self-compare -- NaN check
      if (x !== x) return 1;
      if (x === 0 && y === 0) return 1 / x > 0 && 1 / y < 0 ? 1 : -1;
      return x > y;
    };
  };

  // `%TypedArray%.prototype.sort` method
  // https://tc39.es/ecma262/#sec-%typedarray%.prototype.sort
  exportTypedArrayMethod$3('sort', function sort(comparefn) {
    if (comparefn !== undefined) aCallable(comparefn);
    if (STABLE_SORT) return nativeSort(this, comparefn);

    return internalSort(aTypedArray$2(this), getSortCompare(comparefn));
  }, !STABLE_SORT || ACCEPT_INCORRECT_ARGUMENTS);

  var ArrayBufferViewCore$1 = arrayBufferViewCore;
  var toLength$3 = toLength$8;
  var toAbsoluteIndex = toAbsoluteIndex$5;
  var typedArraySpeciesConstructor = typedArraySpeciesConstructor$4;

  var aTypedArray$1 = ArrayBufferViewCore$1.aTypedArray;
  var exportTypedArrayMethod$2 = ArrayBufferViewCore$1.exportTypedArrayMethod;

  // `%TypedArray%.prototype.subarray` method
  // https://tc39.es/ecma262/#sec-%typedarray%.prototype.subarray
  exportTypedArrayMethod$2('subarray', function subarray(begin, end) {
    var O = aTypedArray$1(this);
    var length = O.length;
    var beginIndex = toAbsoluteIndex(begin, length);
    var C = typedArraySpeciesConstructor(O);
    return new C(
      O.buffer,
      O.byteOffset + beginIndex * O.BYTES_PER_ELEMENT,
      toLength$3((end === undefined ? length : toAbsoluteIndex(end, length)) - beginIndex)
    );
  });

  var global$a = global$x;
  var apply$2 = functionApply;
  var ArrayBufferViewCore = arrayBufferViewCore;
  var fails$j = fails$E;
  var arraySlice$2 = arraySlice$7;

  var Int8Array$1 = global$a.Int8Array;
  var aTypedArray = ArrayBufferViewCore.aTypedArray;
  var exportTypedArrayMethod$1 = ArrayBufferViewCore.exportTypedArrayMethod;
  var $toLocaleString = [].toLocaleString;

  // iOS Safari 6.x fails here
  var TO_LOCALE_STRING_BUG = !!Int8Array$1 && fails$j(function () {
    $toLocaleString.call(new Int8Array$1(1));
  });

  var FORCED$2 = fails$j(function () {
    return [1, 2].toLocaleString() != new Int8Array$1([1, 2]).toLocaleString();
  }) || !fails$j(function () {
    Int8Array$1.prototype.toLocaleString.call([1, 2]);
  });

  // `%TypedArray%.prototype.toLocaleString` method
  // https://tc39.es/ecma262/#sec-%typedarray%.prototype.tolocalestring
  exportTypedArrayMethod$1('toLocaleString', function toLocaleString() {
    return apply$2(
      $toLocaleString,
      TO_LOCALE_STRING_BUG ? arraySlice$2(aTypedArray(this)) : aTypedArray(this),
      arraySlice$2(arguments)
    );
  }, FORCED$2);

  var exportTypedArrayMethod = arrayBufferViewCore.exportTypedArrayMethod;
  var fails$i = fails$E;
  var global$9 = global$x;
  var uncurryThis$f = functionUncurryThis;

  var Uint8Array$1 = global$9.Uint8Array;
  var Uint8ArrayPrototype = Uint8Array$1 && Uint8Array$1.prototype || {};
  var arrayToString = [].toString;
  var join = uncurryThis$f([].join);

  if (fails$i(function () { arrayToString.call({}); })) {
    arrayToString = function toString() {
      return join(this);
    };
  }

  var IS_NOT_ARRAY_METHOD = Uint8ArrayPrototype.toString != arrayToString;

  // `%TypedArray%.prototype.toString` method
  // https://tc39.es/ecma262/#sec-%typedarray%.prototype.tostring
  exportTypedArrayMethod('toString', arrayToString, IS_NOT_ARRAY_METHOD);

  var DeviceType;
  (function (DeviceType) {
    DeviceType[DeviceType["DESKTOP"] = 0] = "DESKTOP";
    DeviceType[DeviceType["BROWSER"] = 1] = "BROWSER";
    DeviceType[DeviceType["IOS"] = 2] = "IOS";
    DeviceType[DeviceType["ANDROID"] = 3] = "ANDROID";
    DeviceType[DeviceType["OTHERS"] = 4] = "OTHERS";
    DeviceType[DeviceType["UNKNOWN"] = 5] = "UNKNOWN";
    DeviceType[DeviceType["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
  })(DeviceType || (DeviceType = {}));

  var SystemUtil = function () {
    function SystemUtil() {}
    SystemUtil.isBrowser = function () {
      return (typeof window === "undefined" ? "undefined" : _typeof(window)) === 'object' && window.document != null;
    };
    SystemUtil.getDeviceType = function () {
      return SystemUtil.isBrowser() ? DeviceType.BROWSER : DeviceType.DESKTOP;
    };
    return SystemUtil;
  }();

  var anObject$5 = anObject$g;

  // `RegExp.prototype.flags` getter implementation
  // https://tc39.es/ecma262/#sec-get-regexp.prototype.flags
  var regexpFlags$1 = function () {
    var that = anObject$5(this);
    var result = '';
    if (that.hasIndices) result += 'd';
    if (that.global) result += 'g';
    if (that.ignoreCase) result += 'i';
    if (that.multiline) result += 'm';
    if (that.dotAll) result += 's';
    if (that.unicode) result += 'u';
    if (that.unicodeSets) result += 'v';
    if (that.sticky) result += 'y';
    return result;
  };

  var call$8 = functionCall;
  var hasOwn$6 = hasOwnProperty_1;
  var isPrototypeOf$2 = objectIsPrototypeOf;
  var regExpFlags = regexpFlags$1;

  var RegExpPrototype$2 = RegExp.prototype;

  var regexpGetFlags = function (R) {
    var flags = R.flags;
    return flags === undefined && !('flags' in RegExpPrototype$2) && !hasOwn$6(R, 'flags') && isPrototypeOf$2(RegExpPrototype$2, R)
      ? call$8(regExpFlags, R) : flags;
  };

  var PROPER_FUNCTION_NAME = functionName.PROPER;
  var defineBuiltIn$5 = defineBuiltIn$e;
  var anObject$4 = anObject$g;
  var $toString$1 = toString$9;
  var fails$h = fails$E;
  var getRegExpFlags = regexpGetFlags;

  var TO_STRING = 'toString';
  var RegExpPrototype$1 = RegExp.prototype;
  var nativeToString = RegExpPrototype$1[TO_STRING];

  var NOT_GENERIC = fails$h(function () { return nativeToString.call({ source: 'a', flags: 'b' }) != '/a/b'; });
  // FF44- RegExp#toString has a wrong name
  var INCORRECT_NAME = PROPER_FUNCTION_NAME && nativeToString.name != TO_STRING;

  // `RegExp.prototype.toString` method
  // https://tc39.es/ecma262/#sec-regexp.prototype.tostring
  if (NOT_GENERIC || INCORRECT_NAME) {
    defineBuiltIn$5(RegExp.prototype, TO_STRING, function toString() {
      var R = anObject$4(this);
      var pattern = $toString$1(R.source);
      var flags = $toString$1(getRegExpFlags(R));
      return '/' + pattern + '/' + flags;
    }, { unsafe: true });
  }

  var long = Long;

  /**
   * wasm optimizations, to do native i64 multiplication and divide
   */
  var wasm = null;

  try {
    wasm = new WebAssembly.Instance(new WebAssembly.Module(new Uint8Array([
      0, 97, 115, 109, 1, 0, 0, 0, 1, 13, 2, 96, 0, 1, 127, 96, 4, 127, 127, 127, 127, 1, 127, 3, 7, 6, 0, 1, 1, 1, 1, 1, 6, 6, 1, 127, 1, 65, 0, 11, 7, 50, 6, 3, 109, 117, 108, 0, 1, 5, 100, 105, 118, 95, 115, 0, 2, 5, 100, 105, 118, 95, 117, 0, 3, 5, 114, 101, 109, 95, 115, 0, 4, 5, 114, 101, 109, 95, 117, 0, 5, 8, 103, 101, 116, 95, 104, 105, 103, 104, 0, 0, 10, 191, 1, 6, 4, 0, 35, 0, 11, 36, 1, 1, 126, 32, 0, 173, 32, 1, 173, 66, 32, 134, 132, 32, 2, 173, 32, 3, 173, 66, 32, 134, 132, 126, 34, 4, 66, 32, 135, 167, 36, 0, 32, 4, 167, 11, 36, 1, 1, 126, 32, 0, 173, 32, 1, 173, 66, 32, 134, 132, 32, 2, 173, 32, 3, 173, 66, 32, 134, 132, 127, 34, 4, 66, 32, 135, 167, 36, 0, 32, 4, 167, 11, 36, 1, 1, 126, 32, 0, 173, 32, 1, 173, 66, 32, 134, 132, 32, 2, 173, 32, 3, 173, 66, 32, 134, 132, 128, 34, 4, 66, 32, 135, 167, 36, 0, 32, 4, 167, 11, 36, 1, 1, 126, 32, 0, 173, 32, 1, 173, 66, 32, 134, 132, 32, 2, 173, 32, 3, 173, 66, 32, 134, 132, 129, 34, 4, 66, 32, 135, 167, 36, 0, 32, 4, 167, 11, 36, 1, 1, 126, 32, 0, 173, 32, 1, 173, 66, 32, 134, 132, 32, 2, 173, 32, 3, 173, 66, 32, 134, 132, 130, 34, 4, 66, 32, 135, 167, 36, 0, 32, 4, 167, 11
    ])), {}).exports;
  } catch (e) {
    // no wasm support :(
  }

  /**
   * Constructs a 64 bit two's-complement integer, given its low and high 32 bit values as *signed* integers.
   *  See the from* functions below for more convenient ways of constructing Longs.
   * @exports Long
   * @class A Long class for representing a 64 bit two's-complement integer value.
   * @param {number} low The low (signed) 32 bits of the long
   * @param {number} high The high (signed) 32 bits of the long
   * @param {boolean=} unsigned Whether unsigned or not, defaults to signed
   * @constructor
   */
  function Long(low, high, unsigned) {

      /**
       * The low 32 bits as a signed value.
       * @type {number}
       */
      this.low = low | 0;

      /**
       * The high 32 bits as a signed value.
       * @type {number}
       */
      this.high = high | 0;

      /**
       * Whether unsigned or not.
       * @type {boolean}
       */
      this.unsigned = !!unsigned;
  }

  // The internal representation of a long is the two given signed, 32-bit values.
  // We use 32-bit pieces because these are the size of integers on which
  // Javascript performs bit-operations.  For operations like addition and
  // multiplication, we split each number into 16 bit pieces, which can easily be
  // multiplied within Javascript's floating-point representation without overflow
  // or change in sign.
  //
  // In the algorithms below, we frequently reduce the negative case to the
  // positive case by negating the input(s) and then post-processing the result.
  // Note that we must ALWAYS check specially whether those values are MIN_VALUE
  // (-2^63) because -MIN_VALUE == MIN_VALUE (since 2^63 cannot be represented as
  // a positive number, it overflows back into a negative).  Not handling this
  // case would often result in infinite recursion.
  //
  // Common constant values ZERO, ONE, NEG_ONE, etc. are defined below the from*
  // methods on which they depend.

  /**
   * An indicator used to reliably determine if an object is a Long or not.
   * @type {boolean}
   * @const
   * @private
   */
  Long.prototype.__isLong__;

  Object.defineProperty(Long.prototype, "__isLong__", { value: true });

  /**
   * @function
   * @param {*} obj Object
   * @returns {boolean}
   * @inner
   */
  function isLong(obj) {
      return (obj && obj["__isLong__"]) === true;
  }

  /**
   * Tests if the specified object is a Long.
   * @function
   * @param {*} obj Object
   * @returns {boolean}
   */
  Long.isLong = isLong;

  /**
   * A cache of the Long representations of small integer values.
   * @type {!Object}
   * @inner
   */
  var INT_CACHE = {};

  /**
   * A cache of the Long representations of small unsigned integer values.
   * @type {!Object}
   * @inner
   */
  var UINT_CACHE = {};

  /**
   * @param {number} value
   * @param {boolean=} unsigned
   * @returns {!Long}
   * @inner
   */
  function fromInt(value, unsigned) {
      var obj, cachedObj, cache;
      if (unsigned) {
          value >>>= 0;
          if (cache = (0 <= value && value < 256)) {
              cachedObj = UINT_CACHE[value];
              if (cachedObj)
                  return cachedObj;
          }
          obj = fromBits(value, (value | 0) < 0 ? -1 : 0, true);
          if (cache)
              UINT_CACHE[value] = obj;
          return obj;
      } else {
          value |= 0;
          if (cache = (-128 <= value && value < 128)) {
              cachedObj = INT_CACHE[value];
              if (cachedObj)
                  return cachedObj;
          }
          obj = fromBits(value, value < 0 ? -1 : 0, false);
          if (cache)
              INT_CACHE[value] = obj;
          return obj;
      }
  }

  /**
   * Returns a Long representing the given 32 bit integer value.
   * @function
   * @param {number} value The 32 bit integer in question
   * @param {boolean=} unsigned Whether unsigned or not, defaults to signed
   * @returns {!Long} The corresponding Long value
   */
  Long.fromInt = fromInt;

  /**
   * @param {number} value
   * @param {boolean=} unsigned
   * @returns {!Long}
   * @inner
   */
  function fromNumber(value, unsigned) {
      if (isNaN(value))
          return unsigned ? UZERO : ZERO;
      if (unsigned) {
          if (value < 0)
              return UZERO;
          if (value >= TWO_PWR_64_DBL)
              return MAX_UNSIGNED_VALUE;
      } else {
          if (value <= -TWO_PWR_63_DBL)
              return MIN_VALUE;
          if (value + 1 >= TWO_PWR_63_DBL)
              return MAX_VALUE;
      }
      if (value < 0)
          return fromNumber(-value, unsigned).neg();
      return fromBits((value % TWO_PWR_32_DBL) | 0, (value / TWO_PWR_32_DBL) | 0, unsigned);
  }

  /**
   * Returns a Long representing the given value, provided that it is a finite number. Otherwise, zero is returned.
   * @function
   * @param {number} value The number in question
   * @param {boolean=} unsigned Whether unsigned or not, defaults to signed
   * @returns {!Long} The corresponding Long value
   */
  Long.fromNumber = fromNumber;

  /**
   * @param {number} lowBits
   * @param {number} highBits
   * @param {boolean=} unsigned
   * @returns {!Long}
   * @inner
   */
  function fromBits(lowBits, highBits, unsigned) {
      return new Long(lowBits, highBits, unsigned);
  }

  /**
   * Returns a Long representing the 64 bit integer that comes by concatenating the given low and high bits. Each is
   *  assumed to use 32 bits.
   * @function
   * @param {number} lowBits The low 32 bits
   * @param {number} highBits The high 32 bits
   * @param {boolean=} unsigned Whether unsigned or not, defaults to signed
   * @returns {!Long} The corresponding Long value
   */
  Long.fromBits = fromBits;

  /**
   * @function
   * @param {number} base
   * @param {number} exponent
   * @returns {number}
   * @inner
   */
  var pow_dbl = Math.pow; // Used 4 times (4*8 to 15+4)

  /**
   * @param {string} str
   * @param {(boolean|number)=} unsigned
   * @param {number=} radix
   * @returns {!Long}
   * @inner
   */
  function fromString(str, unsigned, radix) {
      if (str.length === 0)
          throw Error('empty string');
      if (str === "NaN" || str === "Infinity" || str === "+Infinity" || str === "-Infinity")
          return ZERO;
      if (typeof unsigned === 'number') {
          // For goog.math.long compatibility
          radix = unsigned,
          unsigned = false;
      } else {
          unsigned = !! unsigned;
      }
      radix = radix || 10;
      if (radix < 2 || 36 < radix)
          throw RangeError('radix');

      var p;
      if ((p = str.indexOf('-')) > 0)
          throw Error('interior hyphen');
      else if (p === 0) {
          return fromString(str.substring(1), unsigned, radix).neg();
      }

      // Do several (8) digits each time through the loop, so as to
      // minimize the calls to the very expensive emulated div.
      var radixToPower = fromNumber(pow_dbl(radix, 8));

      var result = ZERO;
      for (var i = 0; i < str.length; i += 8) {
          var size = Math.min(8, str.length - i),
              value = parseInt(str.substring(i, i + size), radix);
          if (size < 8) {
              var power = fromNumber(pow_dbl(radix, size));
              result = result.mul(power).add(fromNumber(value));
          } else {
              result = result.mul(radixToPower);
              result = result.add(fromNumber(value));
          }
      }
      result.unsigned = unsigned;
      return result;
  }

  /**
   * Returns a Long representation of the given string, written using the specified radix.
   * @function
   * @param {string} str The textual representation of the Long
   * @param {(boolean|number)=} unsigned Whether unsigned or not, defaults to signed
   * @param {number=} radix The radix in which the text is written (2-36), defaults to 10
   * @returns {!Long} The corresponding Long value
   */
  Long.fromString = fromString;

  /**
   * @function
   * @param {!Long|number|string|!{low: number, high: number, unsigned: boolean}} val
   * @param {boolean=} unsigned
   * @returns {!Long}
   * @inner
   */
  function fromValue(val, unsigned) {
      if (typeof val === 'number')
          return fromNumber(val, unsigned);
      if (typeof val === 'string')
          return fromString(val, unsigned);
      // Throws for non-objects, converts non-instanceof Long:
      return fromBits(val.low, val.high, typeof unsigned === 'boolean' ? unsigned : val.unsigned);
  }

  /**
   * Converts the specified value to a Long using the appropriate from* function for its type.
   * @function
   * @param {!Long|number|string|!{low: number, high: number, unsigned: boolean}} val Value
   * @param {boolean=} unsigned Whether unsigned or not, defaults to signed
   * @returns {!Long}
   */
  Long.fromValue = fromValue;

  // NOTE: the compiler should inline these constant values below and then remove these variables, so there should be
  // no runtime penalty for these.

  /**
   * @type {number}
   * @const
   * @inner
   */
  var TWO_PWR_16_DBL = 1 << 16;

  /**
   * @type {number}
   * @const
   * @inner
   */
  var TWO_PWR_24_DBL = 1 << 24;

  /**
   * @type {number}
   * @const
   * @inner
   */
  var TWO_PWR_32_DBL = TWO_PWR_16_DBL * TWO_PWR_16_DBL;

  /**
   * @type {number}
   * @const
   * @inner
   */
  var TWO_PWR_64_DBL = TWO_PWR_32_DBL * TWO_PWR_32_DBL;

  /**
   * @type {number}
   * @const
   * @inner
   */
  var TWO_PWR_63_DBL = TWO_PWR_64_DBL / 2;

  /**
   * @type {!Long}
   * @const
   * @inner
   */
  var TWO_PWR_24 = fromInt(TWO_PWR_24_DBL);

  /**
   * @type {!Long}
   * @inner
   */
  var ZERO = fromInt(0);

  /**
   * Signed zero.
   * @type {!Long}
   */
  Long.ZERO = ZERO;

  /**
   * @type {!Long}
   * @inner
   */
  var UZERO = fromInt(0, true);

  /**
   * Unsigned zero.
   * @type {!Long}
   */
  Long.UZERO = UZERO;

  /**
   * @type {!Long}
   * @inner
   */
  var ONE = fromInt(1);

  /**
   * Signed one.
   * @type {!Long}
   */
  Long.ONE = ONE;

  /**
   * @type {!Long}
   * @inner
   */
  var UONE = fromInt(1, true);

  /**
   * Unsigned one.
   * @type {!Long}
   */
  Long.UONE = UONE;

  /**
   * @type {!Long}
   * @inner
   */
  var NEG_ONE = fromInt(-1);

  /**
   * Signed negative one.
   * @type {!Long}
   */
  Long.NEG_ONE = NEG_ONE;

  /**
   * @type {!Long}
   * @inner
   */
  var MAX_VALUE = fromBits(0xFFFFFFFF|0, 0x7FFFFFFF|0, false);

  /**
   * Maximum signed value.
   * @type {!Long}
   */
  Long.MAX_VALUE = MAX_VALUE;

  /**
   * @type {!Long}
   * @inner
   */
  var MAX_UNSIGNED_VALUE = fromBits(0xFFFFFFFF|0, 0xFFFFFFFF|0, true);

  /**
   * Maximum unsigned value.
   * @type {!Long}
   */
  Long.MAX_UNSIGNED_VALUE = MAX_UNSIGNED_VALUE;

  /**
   * @type {!Long}
   * @inner
   */
  var MIN_VALUE = fromBits(0, 0x80000000|0, false);

  /**
   * Minimum signed value.
   * @type {!Long}
   */
  Long.MIN_VALUE = MIN_VALUE;

  /**
   * @alias Long.prototype
   * @inner
   */
  var LongPrototype = Long.prototype;

  /**
   * Converts the Long to a 32 bit integer, assuming it is a 32 bit integer.
   * @returns {number}
   */
  LongPrototype.toInt = function toInt() {
      return this.unsigned ? this.low >>> 0 : this.low;
  };

  /**
   * Converts the Long to a the nearest floating-point representation of this value (double, 53 bit mantissa).
   * @returns {number}
   */
  LongPrototype.toNumber = function toNumber() {
      if (this.unsigned)
          return ((this.high >>> 0) * TWO_PWR_32_DBL) + (this.low >>> 0);
      return this.high * TWO_PWR_32_DBL + (this.low >>> 0);
  };

  /**
   * Converts the Long to a string written in the specified radix.
   * @param {number=} radix Radix (2-36), defaults to 10
   * @returns {string}
   * @override
   * @throws {RangeError} If `radix` is out of range
   */
  LongPrototype.toString = function toString(radix) {
      radix = radix || 10;
      if (radix < 2 || 36 < radix)
          throw RangeError('radix');
      if (this.isZero())
          return '0';
      if (this.isNegative()) { // Unsigned Longs are never negative
          if (this.eq(MIN_VALUE)) {
              // We need to change the Long value before it can be negated, so we remove
              // the bottom-most digit in this base and then recurse to do the rest.
              var radixLong = fromNumber(radix),
                  div = this.div(radixLong),
                  rem1 = div.mul(radixLong).sub(this);
              return div.toString(radix) + rem1.toInt().toString(radix);
          } else
              return '-' + this.neg().toString(radix);
      }

      // Do several (6) digits each time through the loop, so as to
      // minimize the calls to the very expensive emulated div.
      var radixToPower = fromNumber(pow_dbl(radix, 6), this.unsigned),
          rem = this;
      var result = '';
      while (true) {
          var remDiv = rem.div(radixToPower),
              intval = rem.sub(remDiv.mul(radixToPower)).toInt() >>> 0,
              digits = intval.toString(radix);
          rem = remDiv;
          if (rem.isZero())
              return digits + result;
          else {
              while (digits.length < 6)
                  digits = '0' + digits;
              result = '' + digits + result;
          }
      }
  };

  /**
   * Gets the high 32 bits as a signed integer.
   * @returns {number} Signed high bits
   */
  LongPrototype.getHighBits = function getHighBits() {
      return this.high;
  };

  /**
   * Gets the high 32 bits as an unsigned integer.
   * @returns {number} Unsigned high bits
   */
  LongPrototype.getHighBitsUnsigned = function getHighBitsUnsigned() {
      return this.high >>> 0;
  };

  /**
   * Gets the low 32 bits as a signed integer.
   * @returns {number} Signed low bits
   */
  LongPrototype.getLowBits = function getLowBits() {
      return this.low;
  };

  /**
   * Gets the low 32 bits as an unsigned integer.
   * @returns {number} Unsigned low bits
   */
  LongPrototype.getLowBitsUnsigned = function getLowBitsUnsigned() {
      return this.low >>> 0;
  };

  /**
   * Gets the number of bits needed to represent the absolute value of this Long.
   * @returns {number}
   */
  LongPrototype.getNumBitsAbs = function getNumBitsAbs() {
      if (this.isNegative()) // Unsigned Longs are never negative
          return this.eq(MIN_VALUE) ? 64 : this.neg().getNumBitsAbs();
      var val = this.high != 0 ? this.high : this.low;
      for (var bit = 31; bit > 0; bit--)
          if ((val & (1 << bit)) != 0)
              break;
      return this.high != 0 ? bit + 33 : bit + 1;
  };

  /**
   * Tests if this Long's value equals zero.
   * @returns {boolean}
   */
  LongPrototype.isZero = function isZero() {
      return this.high === 0 && this.low === 0;
  };

  /**
   * Tests if this Long's value equals zero. This is an alias of {@link Long#isZero}.
   * @returns {boolean}
   */
  LongPrototype.eqz = LongPrototype.isZero;

  /**
   * Tests if this Long's value is negative.
   * @returns {boolean}
   */
  LongPrototype.isNegative = function isNegative() {
      return !this.unsigned && this.high < 0;
  };

  /**
   * Tests if this Long's value is positive.
   * @returns {boolean}
   */
  LongPrototype.isPositive = function isPositive() {
      return this.unsigned || this.high >= 0;
  };

  /**
   * Tests if this Long's value is odd.
   * @returns {boolean}
   */
  LongPrototype.isOdd = function isOdd() {
      return (this.low & 1) === 1;
  };

  /**
   * Tests if this Long's value is even.
   * @returns {boolean}
   */
  LongPrototype.isEven = function isEven() {
      return (this.low & 1) === 0;
  };

  /**
   * Tests if this Long's value equals the specified's.
   * @param {!Long|number|string} other Other value
   * @returns {boolean}
   */
  LongPrototype.equals = function equals(other) {
      if (!isLong(other))
          other = fromValue(other);
      if (this.unsigned !== other.unsigned && (this.high >>> 31) === 1 && (other.high >>> 31) === 1)
          return false;
      return this.high === other.high && this.low === other.low;
  };

  /**
   * Tests if this Long's value equals the specified's. This is an alias of {@link Long#equals}.
   * @function
   * @param {!Long|number|string} other Other value
   * @returns {boolean}
   */
  LongPrototype.eq = LongPrototype.equals;

  /**
   * Tests if this Long's value differs from the specified's.
   * @param {!Long|number|string} other Other value
   * @returns {boolean}
   */
  LongPrototype.notEquals = function notEquals(other) {
      return !this.eq(/* validates */ other);
  };

  /**
   * Tests if this Long's value differs from the specified's. This is an alias of {@link Long#notEquals}.
   * @function
   * @param {!Long|number|string} other Other value
   * @returns {boolean}
   */
  LongPrototype.neq = LongPrototype.notEquals;

  /**
   * Tests if this Long's value differs from the specified's. This is an alias of {@link Long#notEquals}.
   * @function
   * @param {!Long|number|string} other Other value
   * @returns {boolean}
   */
  LongPrototype.ne = LongPrototype.notEquals;

  /**
   * Tests if this Long's value is less than the specified's.
   * @param {!Long|number|string} other Other value
   * @returns {boolean}
   */
  LongPrototype.lessThan = function lessThan(other) {
      return this.comp(/* validates */ other) < 0;
  };

  /**
   * Tests if this Long's value is less than the specified's. This is an alias of {@link Long#lessThan}.
   * @function
   * @param {!Long|number|string} other Other value
   * @returns {boolean}
   */
  LongPrototype.lt = LongPrototype.lessThan;

  /**
   * Tests if this Long's value is less than or equal the specified's.
   * @param {!Long|number|string} other Other value
   * @returns {boolean}
   */
  LongPrototype.lessThanOrEqual = function lessThanOrEqual(other) {
      return this.comp(/* validates */ other) <= 0;
  };

  /**
   * Tests if this Long's value is less than or equal the specified's. This is an alias of {@link Long#lessThanOrEqual}.
   * @function
   * @param {!Long|number|string} other Other value
   * @returns {boolean}
   */
  LongPrototype.lte = LongPrototype.lessThanOrEqual;

  /**
   * Tests if this Long's value is less than or equal the specified's. This is an alias of {@link Long#lessThanOrEqual}.
   * @function
   * @param {!Long|number|string} other Other value
   * @returns {boolean}
   */
  LongPrototype.le = LongPrototype.lessThanOrEqual;

  /**
   * Tests if this Long's value is greater than the specified's.
   * @param {!Long|number|string} other Other value
   * @returns {boolean}
   */
  LongPrototype.greaterThan = function greaterThan(other) {
      return this.comp(/* validates */ other) > 0;
  };

  /**
   * Tests if this Long's value is greater than the specified's. This is an alias of {@link Long#greaterThan}.
   * @function
   * @param {!Long|number|string} other Other value
   * @returns {boolean}
   */
  LongPrototype.gt = LongPrototype.greaterThan;

  /**
   * Tests if this Long's value is greater than or equal the specified's.
   * @param {!Long|number|string} other Other value
   * @returns {boolean}
   */
  LongPrototype.greaterThanOrEqual = function greaterThanOrEqual(other) {
      return this.comp(/* validates */ other) >= 0;
  };

  /**
   * Tests if this Long's value is greater than or equal the specified's. This is an alias of {@link Long#greaterThanOrEqual}.
   * @function
   * @param {!Long|number|string} other Other value
   * @returns {boolean}
   */
  LongPrototype.gte = LongPrototype.greaterThanOrEqual;

  /**
   * Tests if this Long's value is greater than or equal the specified's. This is an alias of {@link Long#greaterThanOrEqual}.
   * @function
   * @param {!Long|number|string} other Other value
   * @returns {boolean}
   */
  LongPrototype.ge = LongPrototype.greaterThanOrEqual;

  /**
   * Compares this Long's value with the specified's.
   * @param {!Long|number|string} other Other value
   * @returns {number} 0 if they are the same, 1 if the this is greater and -1
   *  if the given one is greater
   */
  LongPrototype.compare = function compare(other) {
      if (!isLong(other))
          other = fromValue(other);
      if (this.eq(other))
          return 0;
      var thisNeg = this.isNegative(),
          otherNeg = other.isNegative();
      if (thisNeg && !otherNeg)
          return -1;
      if (!thisNeg && otherNeg)
          return 1;
      // At this point the sign bits are the same
      if (!this.unsigned)
          return this.sub(other).isNegative() ? -1 : 1;
      // Both are positive if at least one is unsigned
      return (other.high >>> 0) > (this.high >>> 0) || (other.high === this.high && (other.low >>> 0) > (this.low >>> 0)) ? -1 : 1;
  };

  /**
   * Compares this Long's value with the specified's. This is an alias of {@link Long#compare}.
   * @function
   * @param {!Long|number|string} other Other value
   * @returns {number} 0 if they are the same, 1 if the this is greater and -1
   *  if the given one is greater
   */
  LongPrototype.comp = LongPrototype.compare;

  /**
   * Negates this Long's value.
   * @returns {!Long} Negated Long
   */
  LongPrototype.negate = function negate() {
      if (!this.unsigned && this.eq(MIN_VALUE))
          return MIN_VALUE;
      return this.not().add(ONE);
  };

  /**
   * Negates this Long's value. This is an alias of {@link Long#negate}.
   * @function
   * @returns {!Long} Negated Long
   */
  LongPrototype.neg = LongPrototype.negate;

  /**
   * Returns the sum of this and the specified Long.
   * @param {!Long|number|string} addend Addend
   * @returns {!Long} Sum
   */
  LongPrototype.add = function add(addend) {
      if (!isLong(addend))
          addend = fromValue(addend);

      // Divide each number into 4 chunks of 16 bits, and then sum the chunks.

      var a48 = this.high >>> 16;
      var a32 = this.high & 0xFFFF;
      var a16 = this.low >>> 16;
      var a00 = this.low & 0xFFFF;

      var b48 = addend.high >>> 16;
      var b32 = addend.high & 0xFFFF;
      var b16 = addend.low >>> 16;
      var b00 = addend.low & 0xFFFF;

      var c48 = 0, c32 = 0, c16 = 0, c00 = 0;
      c00 += a00 + b00;
      c16 += c00 >>> 16;
      c00 &= 0xFFFF;
      c16 += a16 + b16;
      c32 += c16 >>> 16;
      c16 &= 0xFFFF;
      c32 += a32 + b32;
      c48 += c32 >>> 16;
      c32 &= 0xFFFF;
      c48 += a48 + b48;
      c48 &= 0xFFFF;
      return fromBits((c16 << 16) | c00, (c48 << 16) | c32, this.unsigned);
  };

  /**
   * Returns the difference of this and the specified Long.
   * @param {!Long|number|string} subtrahend Subtrahend
   * @returns {!Long} Difference
   */
  LongPrototype.subtract = function subtract(subtrahend) {
      if (!isLong(subtrahend))
          subtrahend = fromValue(subtrahend);
      return this.add(subtrahend.neg());
  };

  /**
   * Returns the difference of this and the specified Long. This is an alias of {@link Long#subtract}.
   * @function
   * @param {!Long|number|string} subtrahend Subtrahend
   * @returns {!Long} Difference
   */
  LongPrototype.sub = LongPrototype.subtract;

  /**
   * Returns the product of this and the specified Long.
   * @param {!Long|number|string} multiplier Multiplier
   * @returns {!Long} Product
   */
  LongPrototype.multiply = function multiply(multiplier) {
      if (this.isZero())
          return ZERO;
      if (!isLong(multiplier))
          multiplier = fromValue(multiplier);

      // use wasm support if present
      if (wasm) {
          var low = wasm.mul(this.low,
                             this.high,
                             multiplier.low,
                             multiplier.high);
          return fromBits(low, wasm.get_high(), this.unsigned);
      }

      if (multiplier.isZero())
          return ZERO;
      if (this.eq(MIN_VALUE))
          return multiplier.isOdd() ? MIN_VALUE : ZERO;
      if (multiplier.eq(MIN_VALUE))
          return this.isOdd() ? MIN_VALUE : ZERO;

      if (this.isNegative()) {
          if (multiplier.isNegative())
              return this.neg().mul(multiplier.neg());
          else
              return this.neg().mul(multiplier).neg();
      } else if (multiplier.isNegative())
          return this.mul(multiplier.neg()).neg();

      // If both longs are small, use float multiplication
      if (this.lt(TWO_PWR_24) && multiplier.lt(TWO_PWR_24))
          return fromNumber(this.toNumber() * multiplier.toNumber(), this.unsigned);

      // Divide each long into 4 chunks of 16 bits, and then add up 4x4 products.
      // We can skip products that would overflow.

      var a48 = this.high >>> 16;
      var a32 = this.high & 0xFFFF;
      var a16 = this.low >>> 16;
      var a00 = this.low & 0xFFFF;

      var b48 = multiplier.high >>> 16;
      var b32 = multiplier.high & 0xFFFF;
      var b16 = multiplier.low >>> 16;
      var b00 = multiplier.low & 0xFFFF;

      var c48 = 0, c32 = 0, c16 = 0, c00 = 0;
      c00 += a00 * b00;
      c16 += c00 >>> 16;
      c00 &= 0xFFFF;
      c16 += a16 * b00;
      c32 += c16 >>> 16;
      c16 &= 0xFFFF;
      c16 += a00 * b16;
      c32 += c16 >>> 16;
      c16 &= 0xFFFF;
      c32 += a32 * b00;
      c48 += c32 >>> 16;
      c32 &= 0xFFFF;
      c32 += a16 * b16;
      c48 += c32 >>> 16;
      c32 &= 0xFFFF;
      c32 += a00 * b32;
      c48 += c32 >>> 16;
      c32 &= 0xFFFF;
      c48 += a48 * b00 + a32 * b16 + a16 * b32 + a00 * b48;
      c48 &= 0xFFFF;
      return fromBits((c16 << 16) | c00, (c48 << 16) | c32, this.unsigned);
  };

  /**
   * Returns the product of this and the specified Long. This is an alias of {@link Long#multiply}.
   * @function
   * @param {!Long|number|string} multiplier Multiplier
   * @returns {!Long} Product
   */
  LongPrototype.mul = LongPrototype.multiply;

  /**
   * Returns this Long divided by the specified. The result is signed if this Long is signed or
   *  unsigned if this Long is unsigned.
   * @param {!Long|number|string} divisor Divisor
   * @returns {!Long} Quotient
   */
  LongPrototype.divide = function divide(divisor) {
      if (!isLong(divisor))
          divisor = fromValue(divisor);
      if (divisor.isZero())
          throw Error('division by zero');

      // use wasm support if present
      if (wasm) {
          // guard against signed division overflow: the largest
          // negative number / -1 would be 1 larger than the largest
          // positive number, due to two's complement.
          if (!this.unsigned &&
              this.high === -0x80000000 &&
              divisor.low === -1 && divisor.high === -1) {
              // be consistent with non-wasm code path
              return this;
          }
          var low = (this.unsigned ? wasm.div_u : wasm.div_s)(
              this.low,
              this.high,
              divisor.low,
              divisor.high
          );
          return fromBits(low, wasm.get_high(), this.unsigned);
      }

      if (this.isZero())
          return this.unsigned ? UZERO : ZERO;
      var approx, rem, res;
      if (!this.unsigned) {
          // This section is only relevant for signed longs and is derived from the
          // closure library as a whole.
          if (this.eq(MIN_VALUE)) {
              if (divisor.eq(ONE) || divisor.eq(NEG_ONE))
                  return MIN_VALUE;  // recall that -MIN_VALUE == MIN_VALUE
              else if (divisor.eq(MIN_VALUE))
                  return ONE;
              else {
                  // At this point, we have |other| >= 2, so |this/other| < |MIN_VALUE|.
                  var halfThis = this.shr(1);
                  approx = halfThis.div(divisor).shl(1);
                  if (approx.eq(ZERO)) {
                      return divisor.isNegative() ? ONE : NEG_ONE;
                  } else {
                      rem = this.sub(divisor.mul(approx));
                      res = approx.add(rem.div(divisor));
                      return res;
                  }
              }
          } else if (divisor.eq(MIN_VALUE))
              return this.unsigned ? UZERO : ZERO;
          if (this.isNegative()) {
              if (divisor.isNegative())
                  return this.neg().div(divisor.neg());
              return this.neg().div(divisor).neg();
          } else if (divisor.isNegative())
              return this.div(divisor.neg()).neg();
          res = ZERO;
      } else {
          // The algorithm below has not been made for unsigned longs. It's therefore
          // required to take special care of the MSB prior to running it.
          if (!divisor.unsigned)
              divisor = divisor.toUnsigned();
          if (divisor.gt(this))
              return UZERO;
          if (divisor.gt(this.shru(1))) // 15 >>> 1 = 7 ; with divisor = 8 ; true
              return UONE;
          res = UZERO;
      }

      // Repeat the following until the remainder is less than other:  find a
      // floating-point that approximates remainder / other *from below*, add this
      // into the result, and subtract it from the remainder.  It is critical that
      // the approximate value is less than or equal to the real value so that the
      // remainder never becomes negative.
      rem = this;
      while (rem.gte(divisor)) {
          // Approximate the result of division. This may be a little greater or
          // smaller than the actual value.
          approx = Math.max(1, Math.floor(rem.toNumber() / divisor.toNumber()));

          // We will tweak the approximate result by changing it in the 48-th digit or
          // the smallest non-fractional digit, whichever is larger.
          var log2 = Math.ceil(Math.log(approx) / Math.LN2),
              delta = (log2 <= 48) ? 1 : pow_dbl(2, log2 - 48),

          // Decrease the approximation until it is smaller than the remainder.  Note
          // that if it is too large, the product overflows and is negative.
              approxRes = fromNumber(approx),
              approxRem = approxRes.mul(divisor);
          while (approxRem.isNegative() || approxRem.gt(rem)) {
              approx -= delta;
              approxRes = fromNumber(approx, this.unsigned);
              approxRem = approxRes.mul(divisor);
          }

          // We know the answer can't be zero... and actually, zero would cause
          // infinite recursion since we would make no progress.
          if (approxRes.isZero())
              approxRes = ONE;

          res = res.add(approxRes);
          rem = rem.sub(approxRem);
      }
      return res;
  };

  /**
   * Returns this Long divided by the specified. This is an alias of {@link Long#divide}.
   * @function
   * @param {!Long|number|string} divisor Divisor
   * @returns {!Long} Quotient
   */
  LongPrototype.div = LongPrototype.divide;

  /**
   * Returns this Long modulo the specified.
   * @param {!Long|number|string} divisor Divisor
   * @returns {!Long} Remainder
   */
  LongPrototype.modulo = function modulo(divisor) {
      if (!isLong(divisor))
          divisor = fromValue(divisor);

      // use wasm support if present
      if (wasm) {
          var low = (this.unsigned ? wasm.rem_u : wasm.rem_s)(
              this.low,
              this.high,
              divisor.low,
              divisor.high
          );
          return fromBits(low, wasm.get_high(), this.unsigned);
      }

      return this.sub(this.div(divisor).mul(divisor));
  };

  /**
   * Returns this Long modulo the specified. This is an alias of {@link Long#modulo}.
   * @function
   * @param {!Long|number|string} divisor Divisor
   * @returns {!Long} Remainder
   */
  LongPrototype.mod = LongPrototype.modulo;

  /**
   * Returns this Long modulo the specified. This is an alias of {@link Long#modulo}.
   * @function
   * @param {!Long|number|string} divisor Divisor
   * @returns {!Long} Remainder
   */
  LongPrototype.rem = LongPrototype.modulo;

  /**
   * Returns the bitwise NOT of this Long.
   * @returns {!Long}
   */
  LongPrototype.not = function not() {
      return fromBits(~this.low, ~this.high, this.unsigned);
  };

  /**
   * Returns the bitwise AND of this Long and the specified.
   * @param {!Long|number|string} other Other Long
   * @returns {!Long}
   */
  LongPrototype.and = function and(other) {
      if (!isLong(other))
          other = fromValue(other);
      return fromBits(this.low & other.low, this.high & other.high, this.unsigned);
  };

  /**
   * Returns the bitwise OR of this Long and the specified.
   * @param {!Long|number|string} other Other Long
   * @returns {!Long}
   */
  LongPrototype.or = function or(other) {
      if (!isLong(other))
          other = fromValue(other);
      return fromBits(this.low | other.low, this.high | other.high, this.unsigned);
  };

  /**
   * Returns the bitwise XOR of this Long and the given one.
   * @param {!Long|number|string} other Other Long
   * @returns {!Long}
   */
  LongPrototype.xor = function xor(other) {
      if (!isLong(other))
          other = fromValue(other);
      return fromBits(this.low ^ other.low, this.high ^ other.high, this.unsigned);
  };

  /**
   * Returns this Long with bits shifted to the left by the given amount.
   * @param {number|!Long} numBits Number of bits
   * @returns {!Long} Shifted Long
   */
  LongPrototype.shiftLeft = function shiftLeft(numBits) {
      if (isLong(numBits))
          numBits = numBits.toInt();
      if ((numBits &= 63) === 0)
          return this;
      else if (numBits < 32)
          return fromBits(this.low << numBits, (this.high << numBits) | (this.low >>> (32 - numBits)), this.unsigned);
      else
          return fromBits(0, this.low << (numBits - 32), this.unsigned);
  };

  /**
   * Returns this Long with bits shifted to the left by the given amount. This is an alias of {@link Long#shiftLeft}.
   * @function
   * @param {number|!Long} numBits Number of bits
   * @returns {!Long} Shifted Long
   */
  LongPrototype.shl = LongPrototype.shiftLeft;

  /**
   * Returns this Long with bits arithmetically shifted to the right by the given amount.
   * @param {number|!Long} numBits Number of bits
   * @returns {!Long} Shifted Long
   */
  LongPrototype.shiftRight = function shiftRight(numBits) {
      if (isLong(numBits))
          numBits = numBits.toInt();
      if ((numBits &= 63) === 0)
          return this;
      else if (numBits < 32)
          return fromBits((this.low >>> numBits) | (this.high << (32 - numBits)), this.high >> numBits, this.unsigned);
      else
          return fromBits(this.high >> (numBits - 32), this.high >= 0 ? 0 : -1, this.unsigned);
  };

  /**
   * Returns this Long with bits arithmetically shifted to the right by the given amount. This is an alias of {@link Long#shiftRight}.
   * @function
   * @param {number|!Long} numBits Number of bits
   * @returns {!Long} Shifted Long
   */
  LongPrototype.shr = LongPrototype.shiftRight;

  /**
   * Returns this Long with bits logically shifted to the right by the given amount.
   * @param {number|!Long} numBits Number of bits
   * @returns {!Long} Shifted Long
   */
  LongPrototype.shiftRightUnsigned = function shiftRightUnsigned(numBits) {
      if (isLong(numBits))
          numBits = numBits.toInt();
      numBits &= 63;
      if (numBits === 0)
          return this;
      else {
          var high = this.high;
          if (numBits < 32) {
              var low = this.low;
              return fromBits((low >>> numBits) | (high << (32 - numBits)), high >>> numBits, this.unsigned);
          } else if (numBits === 32)
              return fromBits(high, 0, this.unsigned);
          else
              return fromBits(high >>> (numBits - 32), 0, this.unsigned);
      }
  };

  /**
   * Returns this Long with bits logically shifted to the right by the given amount. This is an alias of {@link Long#shiftRightUnsigned}.
   * @function
   * @param {number|!Long} numBits Number of bits
   * @returns {!Long} Shifted Long
   */
  LongPrototype.shru = LongPrototype.shiftRightUnsigned;

  /**
   * Returns this Long with bits logically shifted to the right by the given amount. This is an alias of {@link Long#shiftRightUnsigned}.
   * @function
   * @param {number|!Long} numBits Number of bits
   * @returns {!Long} Shifted Long
   */
  LongPrototype.shr_u = LongPrototype.shiftRightUnsigned;

  /**
   * Converts this Long to signed.
   * @returns {!Long} Signed long
   */
  LongPrototype.toSigned = function toSigned() {
      if (!this.unsigned)
          return this;
      return fromBits(this.low, this.high, false);
  };

  /**
   * Converts this Long to unsigned.
   * @returns {!Long} Unsigned long
   */
  LongPrototype.toUnsigned = function toUnsigned() {
      if (this.unsigned)
          return this;
      return fromBits(this.low, this.high, true);
  };

  /**
   * Converts this Long to its byte representation.
   * @param {boolean=} le Whether little or big endian, defaults to big endian
   * @returns {!Array.<number>} Byte representation
   */
  LongPrototype.toBytes = function toBytes(le) {
      return le ? this.toBytesLE() : this.toBytesBE();
  };

  /**
   * Converts this Long to its little endian byte representation.
   * @returns {!Array.<number>} Little endian byte representation
   */
  LongPrototype.toBytesLE = function toBytesLE() {
      var hi = this.high,
          lo = this.low;
      return [
          lo        & 0xff,
          lo >>>  8 & 0xff,
          lo >>> 16 & 0xff,
          lo >>> 24       ,
          hi        & 0xff,
          hi >>>  8 & 0xff,
          hi >>> 16 & 0xff,
          hi >>> 24
      ];
  };

  /**
   * Converts this Long to its big endian byte representation.
   * @returns {!Array.<number>} Big endian byte representation
   */
  LongPrototype.toBytesBE = function toBytesBE() {
      var hi = this.high,
          lo = this.low;
      return [
          hi >>> 24       ,
          hi >>> 16 & 0xff,
          hi >>>  8 & 0xff,
          hi        & 0xff,
          lo >>> 24       ,
          lo >>> 16 & 0xff,
          lo >>>  8 & 0xff,
          lo        & 0xff
      ];
  };

  /**
   * Creates a Long from its byte representation.
   * @param {!Array.<number>} bytes Byte representation
   * @param {boolean=} unsigned Whether unsigned or not, defaults to signed
   * @param {boolean=} le Whether little or big endian, defaults to big endian
   * @returns {Long} The corresponding Long value
   */
  Long.fromBytes = function fromBytes(bytes, unsigned, le) {
      return le ? Long.fromBytesLE(bytes, unsigned) : Long.fromBytesBE(bytes, unsigned);
  };

  /**
   * Creates a Long from its little endian byte representation.
   * @param {!Array.<number>} bytes Little endian byte representation
   * @param {boolean=} unsigned Whether unsigned or not, defaults to signed
   * @returns {Long} The corresponding Long value
   */
  Long.fromBytesLE = function fromBytesLE(bytes, unsigned) {
      return new Long(
          bytes[0]       |
          bytes[1] <<  8 |
          bytes[2] << 16 |
          bytes[3] << 24,
          bytes[4]       |
          bytes[5] <<  8 |
          bytes[6] << 16 |
          bytes[7] << 24,
          unsigned
      );
  };

  /**
   * Creates a Long from its big endian byte representation.
   * @param {!Array.<number>} bytes Big endian byte representation
   * @param {boolean=} unsigned Whether unsigned or not, defaults to signed
   * @returns {Long} The corresponding Long value
   */
  Long.fromBytesBE = function fromBytesBE(bytes, unsigned) {
      return new Long(
          bytes[4] << 24 |
          bytes[5] << 16 |
          bytes[6] <<  8 |
          bytes[7],
          bytes[0] << 24 |
          bytes[1] << 16 |
          bytes[2] <<  8 |
          bytes[3],
          unsigned
      );
  };

  var minimalExports = {};
  var minimal$1 = {
    get exports(){ return minimalExports; },
    set exports(v){ minimalExports = v; },
  };

  var indexMinimal = {};

  var minimal = {};

  var aspromise;
  var hasRequiredAspromise;

  function requireAspromise () {
  	if (hasRequiredAspromise) return aspromise;
  	hasRequiredAspromise = 1;
  	aspromise = asPromise;

  	/**
  	 * Callback as used by {@link util.asPromise}.
  	 * @typedef asPromiseCallback
  	 * @type {function}
  	 * @param {Error|null} error Error, if any
  	 * @param {...*} params Additional arguments
  	 * @returns {undefined}
  	 */

  	/**
  	 * Returns a promise from a node-style callback function.
  	 * @memberof util
  	 * @param {asPromiseCallback} fn Function to call
  	 * @param {*} ctx Function context
  	 * @param {...*} params Function arguments
  	 * @returns {Promise<*>} Promisified function
  	 */
  	function asPromise(fn, ctx/*, varargs */) {
  	    var params  = new Array(arguments.length - 1),
  	        offset  = 0,
  	        index   = 2,
  	        pending = true;
  	    while (index < arguments.length)
  	        params[offset++] = arguments[index++];
  	    return new Promise(function executor(resolve, reject) {
  	        params[offset] = function callback(err/*, varargs */) {
  	            if (pending) {
  	                pending = false;
  	                if (err)
  	                    reject(err);
  	                else {
  	                    var params = new Array(arguments.length - 1),
  	                        offset = 0;
  	                    while (offset < params.length)
  	                        params[offset++] = arguments[offset];
  	                    resolve.apply(null, params);
  	                }
  	            }
  	        };
  	        try {
  	            fn.apply(ctx || null, params);
  	        } catch (err) {
  	            if (pending) {
  	                pending = false;
  	                reject(err);
  	            }
  	        }
  	    });
  	}
  	return aspromise;
  }

  var base64$1 = {};

  var hasRequiredBase64;

  function requireBase64 () {
  	if (hasRequiredBase64) return base64$1;
  	hasRequiredBase64 = 1;
  	(function (exports) {

  		/**
  		 * A minimal base64 implementation for number arrays.
  		 * @memberof util
  		 * @namespace
  		 */
  		var base64 = exports;

  		/**
  		 * Calculates the byte length of a base64 encoded string.
  		 * @param {string} string Base64 encoded string
  		 * @returns {number} Byte length
  		 */
  		base64.length = function length(string) {
  		    var p = string.length;
  		    if (!p)
  		        return 0;
  		    var n = 0;
  		    while (--p % 4 > 1 && string.charAt(p) === "=")
  		        ++n;
  		    return Math.ceil(string.length * 3) / 4 - n;
  		};

  		// Base64 encoding table
  		var b64 = new Array(64);

  		// Base64 decoding table
  		var s64 = new Array(123);

  		// 65..90, 97..122, 48..57, 43, 47
  		for (var i = 0; i < 64;)
  		    s64[b64[i] = i < 26 ? i + 65 : i < 52 ? i + 71 : i < 62 ? i - 4 : i - 59 | 43] = i++;

  		/**
  		 * Encodes a buffer to a base64 encoded string.
  		 * @param {Uint8Array} buffer Source buffer
  		 * @param {number} start Source start
  		 * @param {number} end Source end
  		 * @returns {string} Base64 encoded string
  		 */
  		base64.encode = function encode(buffer, start, end) {
  		    var parts = null,
  		        chunk = [];
  		    var i = 0, // output index
  		        j = 0, // goto index
  		        t;     // temporary
  		    while (start < end) {
  		        var b = buffer[start++];
  		        switch (j) {
  		            case 0:
  		                chunk[i++] = b64[b >> 2];
  		                t = (b & 3) << 4;
  		                j = 1;
  		                break;
  		            case 1:
  		                chunk[i++] = b64[t | b >> 4];
  		                t = (b & 15) << 2;
  		                j = 2;
  		                break;
  		            case 2:
  		                chunk[i++] = b64[t | b >> 6];
  		                chunk[i++] = b64[b & 63];
  		                j = 0;
  		                break;
  		        }
  		        if (i > 8191) {
  		            (parts || (parts = [])).push(String.fromCharCode.apply(String, chunk));
  		            i = 0;
  		        }
  		    }
  		    if (j) {
  		        chunk[i++] = b64[t];
  		        chunk[i++] = 61;
  		        if (j === 1)
  		            chunk[i++] = 61;
  		    }
  		    if (parts) {
  		        if (i)
  		            parts.push(String.fromCharCode.apply(String, chunk.slice(0, i)));
  		        return parts.join("");
  		    }
  		    return String.fromCharCode.apply(String, chunk.slice(0, i));
  		};

  		var invalidEncoding = "invalid encoding";

  		/**
  		 * Decodes a base64 encoded string to a buffer.
  		 * @param {string} string Source string
  		 * @param {Uint8Array} buffer Destination buffer
  		 * @param {number} offset Destination offset
  		 * @returns {number} Number of bytes written
  		 * @throws {Error} If encoding is invalid
  		 */
  		base64.decode = function decode(string, buffer, offset) {
  		    var start = offset;
  		    var j = 0, // goto index
  		        t;     // temporary
  		    for (var i = 0; i < string.length;) {
  		        var c = string.charCodeAt(i++);
  		        if (c === 61 && j > 1)
  		            break;
  		        if ((c = s64[c]) === undefined)
  		            throw Error(invalidEncoding);
  		        switch (j) {
  		            case 0:
  		                t = c;
  		                j = 1;
  		                break;
  		            case 1:
  		                buffer[offset++] = t << 2 | (c & 48) >> 4;
  		                t = c;
  		                j = 2;
  		                break;
  		            case 2:
  		                buffer[offset++] = (t & 15) << 4 | (c & 60) >> 2;
  		                t = c;
  		                j = 3;
  		                break;
  		            case 3:
  		                buffer[offset++] = (t & 3) << 6 | c;
  		                j = 0;
  		                break;
  		        }
  		    }
  		    if (j === 1)
  		        throw Error(invalidEncoding);
  		    return offset - start;
  		};

  		/**
  		 * Tests if the specified string appears to be base64 encoded.
  		 * @param {string} string String to test
  		 * @returns {boolean} `true` if probably base64 encoded, otherwise false
  		 */
  		base64.test = function test(string) {
  		    return /^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/.test(string);
  		};
  } (base64$1));
  	return base64$1;
  }

  var eventemitter;
  var hasRequiredEventemitter;

  function requireEventemitter () {
  	if (hasRequiredEventemitter) return eventemitter;
  	hasRequiredEventemitter = 1;
  	eventemitter = EventEmitter;

  	/**
  	 * Constructs a new event emitter instance.
  	 * @classdesc A minimal event emitter.
  	 * @memberof util
  	 * @constructor
  	 */
  	function EventEmitter() {

  	    /**
  	     * Registered listeners.
  	     * @type {Object.<string,*>}
  	     * @private
  	     */
  	    this._listeners = {};
  	}

  	/**
  	 * Registers an event listener.
  	 * @param {string} evt Event name
  	 * @param {function} fn Listener
  	 * @param {*} [ctx] Listener context
  	 * @returns {util.EventEmitter} `this`
  	 */
  	EventEmitter.prototype.on = function on(evt, fn, ctx) {
  	    (this._listeners[evt] || (this._listeners[evt] = [])).push({
  	        fn  : fn,
  	        ctx : ctx || this
  	    });
  	    return this;
  	};

  	/**
  	 * Removes an event listener or any matching listeners if arguments are omitted.
  	 * @param {string} [evt] Event name. Removes all listeners if omitted.
  	 * @param {function} [fn] Listener to remove. Removes all listeners of `evt` if omitted.
  	 * @returns {util.EventEmitter} `this`
  	 */
  	EventEmitter.prototype.off = function off(evt, fn) {
  	    if (evt === undefined)
  	        this._listeners = {};
  	    else {
  	        if (fn === undefined)
  	            this._listeners[evt] = [];
  	        else {
  	            var listeners = this._listeners[evt];
  	            for (var i = 0; i < listeners.length;)
  	                if (listeners[i].fn === fn)
  	                    listeners.splice(i, 1);
  	                else
  	                    ++i;
  	        }
  	    }
  	    return this;
  	};

  	/**
  	 * Emits an event by calling its listeners with the specified arguments.
  	 * @param {string} evt Event name
  	 * @param {...*} args Arguments
  	 * @returns {util.EventEmitter} `this`
  	 */
  	EventEmitter.prototype.emit = function emit(evt) {
  	    var listeners = this._listeners[evt];
  	    if (listeners) {
  	        var args = [],
  	            i = 1;
  	        for (; i < arguments.length;)
  	            args.push(arguments[i++]);
  	        for (i = 0; i < listeners.length;)
  	            listeners[i].fn.apply(listeners[i++].ctx, args);
  	    }
  	    return this;
  	};
  	return eventemitter;
  }

  var float;
  var hasRequiredFloat;

  function requireFloat () {
  	if (hasRequiredFloat) return float;
  	hasRequiredFloat = 1;

  	float = factory(factory);

  	/**
  	 * Reads / writes floats / doubles from / to buffers.
  	 * @name util.float
  	 * @namespace
  	 */

  	/**
  	 * Writes a 32 bit float to a buffer using little endian byte order.
  	 * @name util.float.writeFloatLE
  	 * @function
  	 * @param {number} val Value to write
  	 * @param {Uint8Array} buf Target buffer
  	 * @param {number} pos Target buffer offset
  	 * @returns {undefined}
  	 */

  	/**
  	 * Writes a 32 bit float to a buffer using big endian byte order.
  	 * @name util.float.writeFloatBE
  	 * @function
  	 * @param {number} val Value to write
  	 * @param {Uint8Array} buf Target buffer
  	 * @param {number} pos Target buffer offset
  	 * @returns {undefined}
  	 */

  	/**
  	 * Reads a 32 bit float from a buffer using little endian byte order.
  	 * @name util.float.readFloatLE
  	 * @function
  	 * @param {Uint8Array} buf Source buffer
  	 * @param {number} pos Source buffer offset
  	 * @returns {number} Value read
  	 */

  	/**
  	 * Reads a 32 bit float from a buffer using big endian byte order.
  	 * @name util.float.readFloatBE
  	 * @function
  	 * @param {Uint8Array} buf Source buffer
  	 * @param {number} pos Source buffer offset
  	 * @returns {number} Value read
  	 */

  	/**
  	 * Writes a 64 bit double to a buffer using little endian byte order.
  	 * @name util.float.writeDoubleLE
  	 * @function
  	 * @param {number} val Value to write
  	 * @param {Uint8Array} buf Target buffer
  	 * @param {number} pos Target buffer offset
  	 * @returns {undefined}
  	 */

  	/**
  	 * Writes a 64 bit double to a buffer using big endian byte order.
  	 * @name util.float.writeDoubleBE
  	 * @function
  	 * @param {number} val Value to write
  	 * @param {Uint8Array} buf Target buffer
  	 * @param {number} pos Target buffer offset
  	 * @returns {undefined}
  	 */

  	/**
  	 * Reads a 64 bit double from a buffer using little endian byte order.
  	 * @name util.float.readDoubleLE
  	 * @function
  	 * @param {Uint8Array} buf Source buffer
  	 * @param {number} pos Source buffer offset
  	 * @returns {number} Value read
  	 */

  	/**
  	 * Reads a 64 bit double from a buffer using big endian byte order.
  	 * @name util.float.readDoubleBE
  	 * @function
  	 * @param {Uint8Array} buf Source buffer
  	 * @param {number} pos Source buffer offset
  	 * @returns {number} Value read
  	 */

  	// Factory function for the purpose of node-based testing in modified global environments
  	function factory(exports) {

  	    // float: typed array
  	    if (typeof Float32Array !== "undefined") (function() {

  	        var f32 = new Float32Array([ -0 ]),
  	            f8b = new Uint8Array(f32.buffer),
  	            le  = f8b[3] === 128;

  	        function writeFloat_f32_cpy(val, buf, pos) {
  	            f32[0] = val;
  	            buf[pos    ] = f8b[0];
  	            buf[pos + 1] = f8b[1];
  	            buf[pos + 2] = f8b[2];
  	            buf[pos + 3] = f8b[3];
  	        }

  	        function writeFloat_f32_rev(val, buf, pos) {
  	            f32[0] = val;
  	            buf[pos    ] = f8b[3];
  	            buf[pos + 1] = f8b[2];
  	            buf[pos + 2] = f8b[1];
  	            buf[pos + 3] = f8b[0];
  	        }

  	        /* istanbul ignore next */
  	        exports.writeFloatLE = le ? writeFloat_f32_cpy : writeFloat_f32_rev;
  	        /* istanbul ignore next */
  	        exports.writeFloatBE = le ? writeFloat_f32_rev : writeFloat_f32_cpy;

  	        function readFloat_f32_cpy(buf, pos) {
  	            f8b[0] = buf[pos    ];
  	            f8b[1] = buf[pos + 1];
  	            f8b[2] = buf[pos + 2];
  	            f8b[3] = buf[pos + 3];
  	            return f32[0];
  	        }

  	        function readFloat_f32_rev(buf, pos) {
  	            f8b[3] = buf[pos    ];
  	            f8b[2] = buf[pos + 1];
  	            f8b[1] = buf[pos + 2];
  	            f8b[0] = buf[pos + 3];
  	            return f32[0];
  	        }

  	        /* istanbul ignore next */
  	        exports.readFloatLE = le ? readFloat_f32_cpy : readFloat_f32_rev;
  	        /* istanbul ignore next */
  	        exports.readFloatBE = le ? readFloat_f32_rev : readFloat_f32_cpy;

  	    // float: ieee754
  	    })(); else (function() {

  	        function writeFloat_ieee754(writeUint, val, buf, pos) {
  	            var sign = val < 0 ? 1 : 0;
  	            if (sign)
  	                val = -val;
  	            if (val === 0)
  	                writeUint(1 / val > 0 ? /* positive */ 0 : /* negative 0 */ 2147483648, buf, pos);
  	            else if (isNaN(val))
  	                writeUint(2143289344, buf, pos);
  	            else if (val > 3.4028234663852886e+38) // +-Infinity
  	                writeUint((sign << 31 | 2139095040) >>> 0, buf, pos);
  	            else if (val < 1.1754943508222875e-38) // denormal
  	                writeUint((sign << 31 | Math.round(val / 1.401298464324817e-45)) >>> 0, buf, pos);
  	            else {
  	                var exponent = Math.floor(Math.log(val) / Math.LN2),
  	                    mantissa = Math.round(val * Math.pow(2, -exponent) * 8388608) & 8388607;
  	                writeUint((sign << 31 | exponent + 127 << 23 | mantissa) >>> 0, buf, pos);
  	            }
  	        }

  	        exports.writeFloatLE = writeFloat_ieee754.bind(null, writeUintLE);
  	        exports.writeFloatBE = writeFloat_ieee754.bind(null, writeUintBE);

  	        function readFloat_ieee754(readUint, buf, pos) {
  	            var uint = readUint(buf, pos),
  	                sign = (uint >> 31) * 2 + 1,
  	                exponent = uint >>> 23 & 255,
  	                mantissa = uint & 8388607;
  	            return exponent === 255
  	                ? mantissa
  	                ? NaN
  	                : sign * Infinity
  	                : exponent === 0 // denormal
  	                ? sign * 1.401298464324817e-45 * mantissa
  	                : sign * Math.pow(2, exponent - 150) * (mantissa + 8388608);
  	        }

  	        exports.readFloatLE = readFloat_ieee754.bind(null, readUintLE);
  	        exports.readFloatBE = readFloat_ieee754.bind(null, readUintBE);

  	    })();

  	    // double: typed array
  	    if (typeof Float64Array !== "undefined") (function() {

  	        var f64 = new Float64Array([-0]),
  	            f8b = new Uint8Array(f64.buffer),
  	            le  = f8b[7] === 128;

  	        function writeDouble_f64_cpy(val, buf, pos) {
  	            f64[0] = val;
  	            buf[pos    ] = f8b[0];
  	            buf[pos + 1] = f8b[1];
  	            buf[pos + 2] = f8b[2];
  	            buf[pos + 3] = f8b[3];
  	            buf[pos + 4] = f8b[4];
  	            buf[pos + 5] = f8b[5];
  	            buf[pos + 6] = f8b[6];
  	            buf[pos + 7] = f8b[7];
  	        }

  	        function writeDouble_f64_rev(val, buf, pos) {
  	            f64[0] = val;
  	            buf[pos    ] = f8b[7];
  	            buf[pos + 1] = f8b[6];
  	            buf[pos + 2] = f8b[5];
  	            buf[pos + 3] = f8b[4];
  	            buf[pos + 4] = f8b[3];
  	            buf[pos + 5] = f8b[2];
  	            buf[pos + 6] = f8b[1];
  	            buf[pos + 7] = f8b[0];
  	        }

  	        /* istanbul ignore next */
  	        exports.writeDoubleLE = le ? writeDouble_f64_cpy : writeDouble_f64_rev;
  	        /* istanbul ignore next */
  	        exports.writeDoubleBE = le ? writeDouble_f64_rev : writeDouble_f64_cpy;

  	        function readDouble_f64_cpy(buf, pos) {
  	            f8b[0] = buf[pos    ];
  	            f8b[1] = buf[pos + 1];
  	            f8b[2] = buf[pos + 2];
  	            f8b[3] = buf[pos + 3];
  	            f8b[4] = buf[pos + 4];
  	            f8b[5] = buf[pos + 5];
  	            f8b[6] = buf[pos + 6];
  	            f8b[7] = buf[pos + 7];
  	            return f64[0];
  	        }

  	        function readDouble_f64_rev(buf, pos) {
  	            f8b[7] = buf[pos    ];
  	            f8b[6] = buf[pos + 1];
  	            f8b[5] = buf[pos + 2];
  	            f8b[4] = buf[pos + 3];
  	            f8b[3] = buf[pos + 4];
  	            f8b[2] = buf[pos + 5];
  	            f8b[1] = buf[pos + 6];
  	            f8b[0] = buf[pos + 7];
  	            return f64[0];
  	        }

  	        /* istanbul ignore next */
  	        exports.readDoubleLE = le ? readDouble_f64_cpy : readDouble_f64_rev;
  	        /* istanbul ignore next */
  	        exports.readDoubleBE = le ? readDouble_f64_rev : readDouble_f64_cpy;

  	    // double: ieee754
  	    })(); else (function() {

  	        function writeDouble_ieee754(writeUint, off0, off1, val, buf, pos) {
  	            var sign = val < 0 ? 1 : 0;
  	            if (sign)
  	                val = -val;
  	            if (val === 0) {
  	                writeUint(0, buf, pos + off0);
  	                writeUint(1 / val > 0 ? /* positive */ 0 : /* negative 0 */ 2147483648, buf, pos + off1);
  	            } else if (isNaN(val)) {
  	                writeUint(0, buf, pos + off0);
  	                writeUint(2146959360, buf, pos + off1);
  	            } else if (val > 1.7976931348623157e+308) { // +-Infinity
  	                writeUint(0, buf, pos + off0);
  	                writeUint((sign << 31 | 2146435072) >>> 0, buf, pos + off1);
  	            } else {
  	                var mantissa;
  	                if (val < 2.2250738585072014e-308) { // denormal
  	                    mantissa = val / 5e-324;
  	                    writeUint(mantissa >>> 0, buf, pos + off0);
  	                    writeUint((sign << 31 | mantissa / 4294967296) >>> 0, buf, pos + off1);
  	                } else {
  	                    var exponent = Math.floor(Math.log(val) / Math.LN2);
  	                    if (exponent === 1024)
  	                        exponent = 1023;
  	                    mantissa = val * Math.pow(2, -exponent);
  	                    writeUint(mantissa * 4503599627370496 >>> 0, buf, pos + off0);
  	                    writeUint((sign << 31 | exponent + 1023 << 20 | mantissa * 1048576 & 1048575) >>> 0, buf, pos + off1);
  	                }
  	            }
  	        }

  	        exports.writeDoubleLE = writeDouble_ieee754.bind(null, writeUintLE, 0, 4);
  	        exports.writeDoubleBE = writeDouble_ieee754.bind(null, writeUintBE, 4, 0);

  	        function readDouble_ieee754(readUint, off0, off1, buf, pos) {
  	            var lo = readUint(buf, pos + off0),
  	                hi = readUint(buf, pos + off1);
  	            var sign = (hi >> 31) * 2 + 1,
  	                exponent = hi >>> 20 & 2047,
  	                mantissa = 4294967296 * (hi & 1048575) + lo;
  	            return exponent === 2047
  	                ? mantissa
  	                ? NaN
  	                : sign * Infinity
  	                : exponent === 0 // denormal
  	                ? sign * 5e-324 * mantissa
  	                : sign * Math.pow(2, exponent - 1075) * (mantissa + 4503599627370496);
  	        }

  	        exports.readDoubleLE = readDouble_ieee754.bind(null, readUintLE, 0, 4);
  	        exports.readDoubleBE = readDouble_ieee754.bind(null, readUintBE, 4, 0);

  	    })();

  	    return exports;
  	}

  	// uint helpers

  	function writeUintLE(val, buf, pos) {
  	    buf[pos    ] =  val        & 255;
  	    buf[pos + 1] =  val >>> 8  & 255;
  	    buf[pos + 2] =  val >>> 16 & 255;
  	    buf[pos + 3] =  val >>> 24;
  	}

  	function writeUintBE(val, buf, pos) {
  	    buf[pos    ] =  val >>> 24;
  	    buf[pos + 1] =  val >>> 16 & 255;
  	    buf[pos + 2] =  val >>> 8  & 255;
  	    buf[pos + 3] =  val        & 255;
  	}

  	function readUintLE(buf, pos) {
  	    return (buf[pos    ]
  	          | buf[pos + 1] << 8
  	          | buf[pos + 2] << 16
  	          | buf[pos + 3] << 24) >>> 0;
  	}

  	function readUintBE(buf, pos) {
  	    return (buf[pos    ] << 24
  	          | buf[pos + 1] << 16
  	          | buf[pos + 2] << 8
  	          | buf[pos + 3]) >>> 0;
  	}
  	return float;
  }

  var inquire_1;
  var hasRequiredInquire;

  function requireInquire () {
  	if (hasRequiredInquire) return inquire_1;
  	hasRequiredInquire = 1;
  	inquire_1 = inquire;

  	/**
  	 * Requires a module only if available.
  	 * @memberof util
  	 * @param {string} moduleName Module to require
  	 * @returns {?Object} Required module if available and not empty, otherwise `null`
  	 */
  	function inquire(moduleName) {
  	    try {
  	        var mod = eval("quire".replace(/^/,"re"))(moduleName); // eslint-disable-line no-eval
  	        if (mod && (mod.length || Object.keys(mod).length))
  	            return mod;
  	    } catch (e) {} // eslint-disable-line no-empty
  	    return null;
  	}
  	return inquire_1;
  }

  var utf8$2 = {};

  var hasRequiredUtf8;

  function requireUtf8 () {
  	if (hasRequiredUtf8) return utf8$2;
  	hasRequiredUtf8 = 1;
  	(function (exports) {

  		/**
  		 * A minimal UTF8 implementation for number arrays.
  		 * @memberof util
  		 * @namespace
  		 */
  		var utf8 = exports;

  		/**
  		 * Calculates the UTF8 byte length of a string.
  		 * @param {string} string String
  		 * @returns {number} Byte length
  		 */
  		utf8.length = function utf8_length(string) {
  		    var len = 0,
  		        c = 0;
  		    for (var i = 0; i < string.length; ++i) {
  		        c = string.charCodeAt(i);
  		        if (c < 128)
  		            len += 1;
  		        else if (c < 2048)
  		            len += 2;
  		        else if ((c & 0xFC00) === 0xD800 && (string.charCodeAt(i + 1) & 0xFC00) === 0xDC00) {
  		            ++i;
  		            len += 4;
  		        } else
  		            len += 3;
  		    }
  		    return len;
  		};

  		/**
  		 * Reads UTF8 bytes as a string.
  		 * @param {Uint8Array} buffer Source buffer
  		 * @param {number} start Source start
  		 * @param {number} end Source end
  		 * @returns {string} String read
  		 */
  		utf8.read = function utf8_read(buffer, start, end) {
  		    var len = end - start;
  		    if (len < 1)
  		        return "";
  		    var parts = null,
  		        chunk = [],
  		        i = 0, // char offset
  		        t;     // temporary
  		    while (start < end) {
  		        t = buffer[start++];
  		        if (t < 128)
  		            chunk[i++] = t;
  		        else if (t > 191 && t < 224)
  		            chunk[i++] = (t & 31) << 6 | buffer[start++] & 63;
  		        else if (t > 239 && t < 365) {
  		            t = ((t & 7) << 18 | (buffer[start++] & 63) << 12 | (buffer[start++] & 63) << 6 | buffer[start++] & 63) - 0x10000;
  		            chunk[i++] = 0xD800 + (t >> 10);
  		            chunk[i++] = 0xDC00 + (t & 1023);
  		        } else
  		            chunk[i++] = (t & 15) << 12 | (buffer[start++] & 63) << 6 | buffer[start++] & 63;
  		        if (i > 8191) {
  		            (parts || (parts = [])).push(String.fromCharCode.apply(String, chunk));
  		            i = 0;
  		        }
  		    }
  		    if (parts) {
  		        if (i)
  		            parts.push(String.fromCharCode.apply(String, chunk.slice(0, i)));
  		        return parts.join("");
  		    }
  		    return String.fromCharCode.apply(String, chunk.slice(0, i));
  		};

  		/**
  		 * Writes a string as UTF8 bytes.
  		 * @param {string} string Source string
  		 * @param {Uint8Array} buffer Destination buffer
  		 * @param {number} offset Destination offset
  		 * @returns {number} Bytes written
  		 */
  		utf8.write = function utf8_write(string, buffer, offset) {
  		    var start = offset,
  		        c1, // character 1
  		        c2; // character 2
  		    for (var i = 0; i < string.length; ++i) {
  		        c1 = string.charCodeAt(i);
  		        if (c1 < 128) {
  		            buffer[offset++] = c1;
  		        } else if (c1 < 2048) {
  		            buffer[offset++] = c1 >> 6       | 192;
  		            buffer[offset++] = c1       & 63 | 128;
  		        } else if ((c1 & 0xFC00) === 0xD800 && ((c2 = string.charCodeAt(i + 1)) & 0xFC00) === 0xDC00) {
  		            c1 = 0x10000 + ((c1 & 0x03FF) << 10) + (c2 & 0x03FF);
  		            ++i;
  		            buffer[offset++] = c1 >> 18      | 240;
  		            buffer[offset++] = c1 >> 12 & 63 | 128;
  		            buffer[offset++] = c1 >> 6  & 63 | 128;
  		            buffer[offset++] = c1       & 63 | 128;
  		        } else {
  		            buffer[offset++] = c1 >> 12      | 224;
  		            buffer[offset++] = c1 >> 6  & 63 | 128;
  		            buffer[offset++] = c1       & 63 | 128;
  		        }
  		    }
  		    return offset - start;
  		};
  } (utf8$2));
  	return utf8$2;
  }

  var pool_1;
  var hasRequiredPool;

  function requirePool () {
  	if (hasRequiredPool) return pool_1;
  	hasRequiredPool = 1;
  	pool_1 = pool;

  	/**
  	 * An allocator as used by {@link util.pool}.
  	 * @typedef PoolAllocator
  	 * @type {function}
  	 * @param {number} size Buffer size
  	 * @returns {Uint8Array} Buffer
  	 */

  	/**
  	 * A slicer as used by {@link util.pool}.
  	 * @typedef PoolSlicer
  	 * @type {function}
  	 * @param {number} start Start offset
  	 * @param {number} end End offset
  	 * @returns {Uint8Array} Buffer slice
  	 * @this {Uint8Array}
  	 */

  	/**
  	 * A general purpose buffer pool.
  	 * @memberof util
  	 * @function
  	 * @param {PoolAllocator} alloc Allocator
  	 * @param {PoolSlicer} slice Slicer
  	 * @param {number} [size=8192] Slab size
  	 * @returns {PoolAllocator} Pooled allocator
  	 */
  	function pool(alloc, slice, size) {
  	    var SIZE   = size || 8192;
  	    var MAX    = SIZE >>> 1;
  	    var slab   = null;
  	    var offset = SIZE;
  	    return function pool_alloc(size) {
  	        if (size < 1 || size > MAX)
  	            return alloc(size);
  	        if (offset + size > SIZE) {
  	            slab = alloc(SIZE);
  	            offset = 0;
  	        }
  	        var buf = slice.call(slab, offset, offset += size);
  	        if (offset & 7) // align to 32 bit
  	            offset = (offset | 7) + 1;
  	        return buf;
  	    };
  	}
  	return pool_1;
  }

  var longbits;
  var hasRequiredLongbits;

  function requireLongbits () {
  	if (hasRequiredLongbits) return longbits;
  	hasRequiredLongbits = 1;
  	longbits = LongBits;

  	var util = requireMinimal();

  	/**
  	 * Constructs new long bits.
  	 * @classdesc Helper class for working with the low and high bits of a 64 bit value.
  	 * @memberof util
  	 * @constructor
  	 * @param {number} lo Low 32 bits, unsigned
  	 * @param {number} hi High 32 bits, unsigned
  	 */
  	function LongBits(lo, hi) {

  	    // note that the casts below are theoretically unnecessary as of today, but older statically
  	    // generated converter code might still call the ctor with signed 32bits. kept for compat.

  	    /**
  	     * Low bits.
  	     * @type {number}
  	     */
  	    this.lo = lo >>> 0;

  	    /**
  	     * High bits.
  	     * @type {number}
  	     */
  	    this.hi = hi >>> 0;
  	}

  	/**
  	 * Zero bits.
  	 * @memberof util.LongBits
  	 * @type {util.LongBits}
  	 */
  	var zero = LongBits.zero = new LongBits(0, 0);

  	zero.toNumber = function() { return 0; };
  	zero.zzEncode = zero.zzDecode = function() { return this; };
  	zero.length = function() { return 1; };

  	/**
  	 * Zero hash.
  	 * @memberof util.LongBits
  	 * @type {string}
  	 */
  	var zeroHash = LongBits.zeroHash = "\0\0\0\0\0\0\0\0";

  	/**
  	 * Constructs new long bits from the specified number.
  	 * @param {number} value Value
  	 * @returns {util.LongBits} Instance
  	 */
  	LongBits.fromNumber = function fromNumber(value) {
  	    if (value === 0)
  	        return zero;
  	    var sign = value < 0;
  	    if (sign)
  	        value = -value;
  	    var lo = value >>> 0,
  	        hi = (value - lo) / 4294967296 >>> 0;
  	    if (sign) {
  	        hi = ~hi >>> 0;
  	        lo = ~lo >>> 0;
  	        if (++lo > 4294967295) {
  	            lo = 0;
  	            if (++hi > 4294967295)
  	                hi = 0;
  	        }
  	    }
  	    return new LongBits(lo, hi);
  	};

  	/**
  	 * Constructs new long bits from a number, long or string.
  	 * @param {Long|number|string} value Value
  	 * @returns {util.LongBits} Instance
  	 */
  	LongBits.from = function from(value) {
  	    if (typeof value === "number")
  	        return LongBits.fromNumber(value);
  	    if (util.isString(value)) {
  	        /* istanbul ignore else */
  	        if (util.Long)
  	            value = util.Long.fromString(value);
  	        else
  	            return LongBits.fromNumber(parseInt(value, 10));
  	    }
  	    return value.low || value.high ? new LongBits(value.low >>> 0, value.high >>> 0) : zero;
  	};

  	/**
  	 * Converts this long bits to a possibly unsafe JavaScript number.
  	 * @param {boolean} [unsigned=false] Whether unsigned or not
  	 * @returns {number} Possibly unsafe number
  	 */
  	LongBits.prototype.toNumber = function toNumber(unsigned) {
  	    if (!unsigned && this.hi >>> 31) {
  	        var lo = ~this.lo + 1 >>> 0,
  	            hi = ~this.hi     >>> 0;
  	        if (!lo)
  	            hi = hi + 1 >>> 0;
  	        return -(lo + hi * 4294967296);
  	    }
  	    return this.lo + this.hi * 4294967296;
  	};

  	/**
  	 * Converts this long bits to a long.
  	 * @param {boolean} [unsigned=false] Whether unsigned or not
  	 * @returns {Long} Long
  	 */
  	LongBits.prototype.toLong = function toLong(unsigned) {
  	    return util.Long
  	        ? new util.Long(this.lo | 0, this.hi | 0, Boolean(unsigned))
  	        /* istanbul ignore next */
  	        : { low: this.lo | 0, high: this.hi | 0, unsigned: Boolean(unsigned) };
  	};

  	var charCodeAt = String.prototype.charCodeAt;

  	/**
  	 * Constructs new long bits from the specified 8 characters long hash.
  	 * @param {string} hash Hash
  	 * @returns {util.LongBits} Bits
  	 */
  	LongBits.fromHash = function fromHash(hash) {
  	    if (hash === zeroHash)
  	        return zero;
  	    return new LongBits(
  	        ( charCodeAt.call(hash, 0)
  	        | charCodeAt.call(hash, 1) << 8
  	        | charCodeAt.call(hash, 2) << 16
  	        | charCodeAt.call(hash, 3) << 24) >>> 0
  	    ,
  	        ( charCodeAt.call(hash, 4)
  	        | charCodeAt.call(hash, 5) << 8
  	        | charCodeAt.call(hash, 6) << 16
  	        | charCodeAt.call(hash, 7) << 24) >>> 0
  	    );
  	};

  	/**
  	 * Converts this long bits to a 8 characters long hash.
  	 * @returns {string} Hash
  	 */
  	LongBits.prototype.toHash = function toHash() {
  	    return String.fromCharCode(
  	        this.lo        & 255,
  	        this.lo >>> 8  & 255,
  	        this.lo >>> 16 & 255,
  	        this.lo >>> 24      ,
  	        this.hi        & 255,
  	        this.hi >>> 8  & 255,
  	        this.hi >>> 16 & 255,
  	        this.hi >>> 24
  	    );
  	};

  	/**
  	 * Zig-zag encodes this long bits.
  	 * @returns {util.LongBits} `this`
  	 */
  	LongBits.prototype.zzEncode = function zzEncode() {
  	    var mask =   this.hi >> 31;
  	    this.hi  = ((this.hi << 1 | this.lo >>> 31) ^ mask) >>> 0;
  	    this.lo  = ( this.lo << 1                   ^ mask) >>> 0;
  	    return this;
  	};

  	/**
  	 * Zig-zag decodes this long bits.
  	 * @returns {util.LongBits} `this`
  	 */
  	LongBits.prototype.zzDecode = function zzDecode() {
  	    var mask = -(this.lo & 1);
  	    this.lo  = ((this.lo >>> 1 | this.hi << 31) ^ mask) >>> 0;
  	    this.hi  = ( this.hi >>> 1                  ^ mask) >>> 0;
  	    return this;
  	};

  	/**
  	 * Calculates the length of this longbits when encoded as a varint.
  	 * @returns {number} Length
  	 */
  	LongBits.prototype.length = function length() {
  	    var part0 =  this.lo,
  	        part1 = (this.lo >>> 28 | this.hi << 4) >>> 0,
  	        part2 =  this.hi >>> 24;
  	    return part2 === 0
  	         ? part1 === 0
  	           ? part0 < 16384
  	             ? part0 < 128 ? 1 : 2
  	             : part0 < 2097152 ? 3 : 4
  	           : part1 < 16384
  	             ? part1 < 128 ? 5 : 6
  	             : part1 < 2097152 ? 7 : 8
  	         : part2 < 128 ? 9 : 10;
  	};
  	return longbits;
  }

  var hasRequiredMinimal;

  function requireMinimal () {
  	if (hasRequiredMinimal) return minimal;
  	hasRequiredMinimal = 1;
  	(function (exports) {
  		var util = exports;

  		// used to return a Promise where callback is omitted
  		util.asPromise = requireAspromise();

  		// converts to / from base64 encoded strings
  		util.base64 = requireBase64();

  		// base class of rpc.Service
  		util.EventEmitter = requireEventemitter();

  		// float handling accross browsers
  		util.float = requireFloat();

  		// requires modules optionally and hides the call from bundlers
  		util.inquire = requireInquire();

  		// converts to / from utf8 encoded strings
  		util.utf8 = requireUtf8();

  		// provides a node-like buffer pool in the browser
  		util.pool = requirePool();

  		// utility to work with the low and high bits of a 64 bit value
  		util.LongBits = requireLongbits();

  		/**
  		 * Whether running within node or not.
  		 * @memberof util
  		 * @type {boolean}
  		 */
  		util.isNode = Boolean(typeof commonjsGlobal !== "undefined"
  		                   && commonjsGlobal
  		                   && commonjsGlobal.process
  		                   && commonjsGlobal.process.versions
  		                   && commonjsGlobal.process.versions.node);

  		/**
  		 * Global object reference.
  		 * @memberof util
  		 * @type {Object}
  		 */
  		util.global = util.isNode && commonjsGlobal
  		           || typeof window !== "undefined" && window
  		           || typeof self   !== "undefined" && self
  		           || commonjsGlobal; // eslint-disable-line no-invalid-this

  		/**
  		 * An immuable empty array.
  		 * @memberof util
  		 * @type {Array.<*>}
  		 * @const
  		 */
  		util.emptyArray = Object.freeze ? Object.freeze([]) : /* istanbul ignore next */ []; // used on prototypes

  		/**
  		 * An immutable empty object.
  		 * @type {Object}
  		 * @const
  		 */
  		util.emptyObject = Object.freeze ? Object.freeze({}) : /* istanbul ignore next */ {}; // used on prototypes

  		/**
  		 * Tests if the specified value is an integer.
  		 * @function
  		 * @param {*} value Value to test
  		 * @returns {boolean} `true` if the value is an integer
  		 */
  		util.isInteger = Number.isInteger || /* istanbul ignore next */ function isInteger(value) {
  		    return typeof value === "number" && isFinite(value) && Math.floor(value) === value;
  		};

  		/**
  		 * Tests if the specified value is a string.
  		 * @param {*} value Value to test
  		 * @returns {boolean} `true` if the value is a string
  		 */
  		util.isString = function isString(value) {
  		    return typeof value === "string" || value instanceof String;
  		};

  		/**
  		 * Tests if the specified value is a non-null object.
  		 * @param {*} value Value to test
  		 * @returns {boolean} `true` if the value is a non-null object
  		 */
  		util.isObject = function isObject(value) {
  		    return value && typeof value === "object";
  		};

  		/**
  		 * Checks if a property on a message is considered to be present.
  		 * This is an alias of {@link util.isSet}.
  		 * @function
  		 * @param {Object} obj Plain object or message instance
  		 * @param {string} prop Property name
  		 * @returns {boolean} `true` if considered to be present, otherwise `false`
  		 */
  		util.isset =

  		/**
  		 * Checks if a property on a message is considered to be present.
  		 * @param {Object} obj Plain object or message instance
  		 * @param {string} prop Property name
  		 * @returns {boolean} `true` if considered to be present, otherwise `false`
  		 */
  		util.isSet = function isSet(obj, prop) {
  		    var value = obj[prop];
  		    if (value != null && obj.hasOwnProperty(prop)) // eslint-disable-line eqeqeq, no-prototype-builtins
  		        return typeof value !== "object" || (Array.isArray(value) ? value.length : Object.keys(value).length) > 0;
  		    return false;
  		};

  		/**
  		 * Any compatible Buffer instance.
  		 * This is a minimal stand-alone definition of a Buffer instance. The actual type is that exported by node's typings.
  		 * @interface Buffer
  		 * @extends Uint8Array
  		 */

  		/**
  		 * Node's Buffer class if available.
  		 * @type {Constructor<Buffer>}
  		 */
  		util.Buffer = (function() {
  		    try {
  		        var Buffer = util.inquire("buffer").Buffer;
  		        // refuse to use non-node buffers if not explicitly assigned (perf reasons):
  		        return Buffer.prototype.utf8Write ? Buffer : /* istanbul ignore next */ null;
  		    } catch (e) {
  		        /* istanbul ignore next */
  		        return null;
  		    }
  		})();

  		// Internal alias of or polyfull for Buffer.from.
  		util._Buffer_from = null;

  		// Internal alias of or polyfill for Buffer.allocUnsafe.
  		util._Buffer_allocUnsafe = null;

  		/**
  		 * Creates a new buffer of whatever type supported by the environment.
  		 * @param {number|number[]} [sizeOrArray=0] Buffer size or number array
  		 * @returns {Uint8Array|Buffer} Buffer
  		 */
  		util.newBuffer = function newBuffer(sizeOrArray) {
  		    /* istanbul ignore next */
  		    return typeof sizeOrArray === "number"
  		        ? util.Buffer
  		            ? util._Buffer_allocUnsafe(sizeOrArray)
  		            : new util.Array(sizeOrArray)
  		        : util.Buffer
  		            ? util._Buffer_from(sizeOrArray)
  		            : typeof Uint8Array === "undefined"
  		                ? sizeOrArray
  		                : new Uint8Array(sizeOrArray);
  		};

  		/**
  		 * Array implementation used in the browser. `Uint8Array` if supported, otherwise `Array`.
  		 * @type {Constructor<Uint8Array>}
  		 */
  		util.Array = typeof Uint8Array !== "undefined" ? Uint8Array /* istanbul ignore next */ : Array;

  		/**
  		 * Any compatible Long instance.
  		 * This is a minimal stand-alone definition of a Long instance. The actual type is that exported by long.js.
  		 * @interface Long
  		 * @property {number} low Low bits
  		 * @property {number} high High bits
  		 * @property {boolean} unsigned Whether unsigned or not
  		 */

  		/**
  		 * Long.js's Long class if available.
  		 * @type {Constructor<Long>}
  		 */
  		util.Long = /* istanbul ignore next */ util.global.dcodeIO && /* istanbul ignore next */ util.global.dcodeIO.Long
  		         || /* istanbul ignore next */ util.global.Long
  		         || util.inquire("long");

  		/**
  		 * Regular expression used to verify 2 bit (`bool`) map keys.
  		 * @type {RegExp}
  		 * @const
  		 */
  		util.key2Re = /^true|false|0|1$/;

  		/**
  		 * Regular expression used to verify 32 bit (`int32` etc.) map keys.
  		 * @type {RegExp}
  		 * @const
  		 */
  		util.key32Re = /^-?(?:0|[1-9][0-9]*)$/;

  		/**
  		 * Regular expression used to verify 64 bit (`int64` etc.) map keys.
  		 * @type {RegExp}
  		 * @const
  		 */
  		util.key64Re = /^(?:[\\x00-\\xff]{8}|-?(?:0|[1-9][0-9]*))$/;

  		/**
  		 * Converts a number or long to an 8 characters long hash string.
  		 * @param {Long|number} value Value to convert
  		 * @returns {string} Hash
  		 */
  		util.longToHash = function longToHash(value) {
  		    return value
  		        ? util.LongBits.from(value).toHash()
  		        : util.LongBits.zeroHash;
  		};

  		/**
  		 * Converts an 8 characters long hash string to a long or number.
  		 * @param {string} hash Hash
  		 * @param {boolean} [unsigned=false] Whether unsigned or not
  		 * @returns {Long|number} Original value
  		 */
  		util.longFromHash = function longFromHash(hash, unsigned) {
  		    var bits = util.LongBits.fromHash(hash);
  		    if (util.Long)
  		        return util.Long.fromBits(bits.lo, bits.hi, unsigned);
  		    return bits.toNumber(Boolean(unsigned));
  		};

  		/**
  		 * Merges the properties of the source object into the destination object.
  		 * @memberof util
  		 * @param {Object.<string,*>} dst Destination object
  		 * @param {Object.<string,*>} src Source object
  		 * @param {boolean} [ifNotSet=false] Merges only if the key is not already set
  		 * @returns {Object.<string,*>} Destination object
  		 */
  		function merge(dst, src, ifNotSet) { // used by converters
  		    for (var keys = Object.keys(src), i = 0; i < keys.length; ++i)
  		        if (dst[keys[i]] === undefined || !ifNotSet)
  		            dst[keys[i]] = src[keys[i]];
  		    return dst;
  		}

  		util.merge = merge;

  		/**
  		 * Converts the first character of a string to lower case.
  		 * @param {string} str String to convert
  		 * @returns {string} Converted string
  		 */
  		util.lcFirst = function lcFirst(str) {
  		    return str.charAt(0).toLowerCase() + str.substring(1);
  		};

  		/**
  		 * Creates a custom error constructor.
  		 * @memberof util
  		 * @param {string} name Error name
  		 * @returns {Constructor<Error>} Custom error constructor
  		 */
  		function newError(name) {

  		    function CustomError(message, properties) {

  		        if (!(this instanceof CustomError))
  		            return new CustomError(message, properties);

  		        // Error.call(this, message);
  		        // ^ just returns a new error instance because the ctor can be called as a function

  		        Object.defineProperty(this, "message", { get: function() { return message; } });

  		        /* istanbul ignore next */
  		        if (Error.captureStackTrace) // node
  		            Error.captureStackTrace(this, CustomError);
  		        else
  		            Object.defineProperty(this, "stack", { value: new Error().stack || "" });

  		        if (properties)
  		            merge(this, properties);
  		    }

  		    CustomError.prototype = Object.create(Error.prototype, {
  		        constructor: {
  		            value: CustomError,
  		            writable: true,
  		            enumerable: false,
  		            configurable: true,
  		        },
  		        name: {
  		            get: function get() { return name; },
  		            set: undefined,
  		            enumerable: false,
  		            // configurable: false would accurately preserve the behavior of
  		            // the original, but I'm guessing that was not intentional.
  		            // For an actual error subclass, this property would
  		            // be configurable.
  		            configurable: true,
  		        },
  		        toString: {
  		            value: function value() { return this.name + ": " + this.message; },
  		            writable: true,
  		            enumerable: false,
  		            configurable: true,
  		        },
  		    });

  		    return CustomError;
  		}

  		util.newError = newError;

  		/**
  		 * Constructs a new protocol error.
  		 * @classdesc Error subclass indicating a protocol specifc error.
  		 * @memberof util
  		 * @extends Error
  		 * @template T extends Message<T>
  		 * @constructor
  		 * @param {string} message Error message
  		 * @param {Object.<string,*>} [properties] Additional properties
  		 * @example
  		 * try {
  		 *     MyMessage.decode(someBuffer); // throws if required fields are missing
  		 * } catch (e) {
  		 *     if (e instanceof ProtocolError && e.instance)
  		 *         console.log("decoded so far: " + JSON.stringify(e.instance));
  		 * }
  		 */
  		util.ProtocolError = newError("ProtocolError");

  		/**
  		 * So far decoded message instance.
  		 * @name util.ProtocolError#instance
  		 * @type {Message<T>}
  		 */

  		/**
  		 * A OneOf getter as returned by {@link util.oneOfGetter}.
  		 * @typedef OneOfGetter
  		 * @type {function}
  		 * @returns {string|undefined} Set field name, if any
  		 */

  		/**
  		 * Builds a getter for a oneof's present field name.
  		 * @param {string[]} fieldNames Field names
  		 * @returns {OneOfGetter} Unbound getter
  		 */
  		util.oneOfGetter = function getOneOf(fieldNames) {
  		    var fieldMap = {};
  		    for (var i = 0; i < fieldNames.length; ++i)
  		        fieldMap[fieldNames[i]] = 1;

  		    /**
  		     * @returns {string|undefined} Set field name, if any
  		     * @this Object
  		     * @ignore
  		     */
  		    return function() { // eslint-disable-line consistent-return
  		        for (var keys = Object.keys(this), i = keys.length - 1; i > -1; --i)
  		            if (fieldMap[keys[i]] === 1 && this[keys[i]] !== undefined && this[keys[i]] !== null)
  		                return keys[i];
  		    };
  		};

  		/**
  		 * A OneOf setter as returned by {@link util.oneOfSetter}.
  		 * @typedef OneOfSetter
  		 * @type {function}
  		 * @param {string|undefined} value Field name
  		 * @returns {undefined}
  		 */

  		/**
  		 * Builds a setter for a oneof's present field name.
  		 * @param {string[]} fieldNames Field names
  		 * @returns {OneOfSetter} Unbound setter
  		 */
  		util.oneOfSetter = function setOneOf(fieldNames) {

  		    /**
  		     * @param {string} name Field name
  		     * @returns {undefined}
  		     * @this Object
  		     * @ignore
  		     */
  		    return function(name) {
  		        for (var i = 0; i < fieldNames.length; ++i)
  		            if (fieldNames[i] !== name)
  		                delete this[fieldNames[i]];
  		    };
  		};

  		/**
  		 * Default conversion options used for {@link Message#toJSON} implementations.
  		 *
  		 * These options are close to proto3's JSON mapping with the exception that internal types like Any are handled just like messages. More precisely:
  		 *
  		 * - Longs become strings
  		 * - Enums become string keys
  		 * - Bytes become base64 encoded strings
  		 * - (Sub-)Messages become plain objects
  		 * - Maps become plain objects with all string keys
  		 * - Repeated fields become arrays
  		 * - NaN and Infinity for float and double fields become strings
  		 *
  		 * @type {IConversionOptions}
  		 * @see https://developers.google.com/protocol-buffers/docs/proto3?hl=en#json
  		 */
  		util.toJSONOptions = {
  		    longs: String,
  		    enums: String,
  		    bytes: String,
  		    json: true
  		};

  		// Sets up buffer utility according to the environment (called in index-minimal)
  		util._configure = function() {
  		    var Buffer = util.Buffer;
  		    /* istanbul ignore if */
  		    if (!Buffer) {
  		        util._Buffer_from = util._Buffer_allocUnsafe = null;
  		        return;
  		    }
  		    // because node 4.x buffers are incompatible & immutable
  		    // see: https://github.com/dcodeIO/protobuf.js/pull/665
  		    util._Buffer_from = Buffer.from !== Uint8Array.from && Buffer.from ||
  		        /* istanbul ignore next */
  		        function Buffer_from(value, encoding) {
  		            return new Buffer(value, encoding);
  		        };
  		    util._Buffer_allocUnsafe = Buffer.allocUnsafe ||
  		        /* istanbul ignore next */
  		        function Buffer_allocUnsafe(size) {
  		            return new Buffer(size);
  		        };
  		};
  } (minimal));
  	return minimal;
  }

  var writer = Writer$1;

  var util$4      = requireMinimal();

  var BufferWriter$1; // cyclic

  var LongBits$1  = util$4.LongBits,
      base64    = util$4.base64,
      utf8$1      = util$4.utf8;

  /**
   * Constructs a new writer operation instance.
   * @classdesc Scheduled writer operation.
   * @constructor
   * @param {function(*, Uint8Array, number)} fn Function to call
   * @param {number} len Value byte length
   * @param {*} val Value to write
   * @ignore
   */
  function Op(fn, len, val) {

      /**
       * Function to call.
       * @type {function(Uint8Array, number, *)}
       */
      this.fn = fn;

      /**
       * Value byte length.
       * @type {number}
       */
      this.len = len;

      /**
       * Next operation.
       * @type {Writer.Op|undefined}
       */
      this.next = undefined;

      /**
       * Value to write.
       * @type {*}
       */
      this.val = val; // type varies
  }

  /* istanbul ignore next */
  function noop() {} // eslint-disable-line no-empty-function

  /**
   * Constructs a new writer state instance.
   * @classdesc Copied writer state.
   * @memberof Writer
   * @constructor
   * @param {Writer} writer Writer to copy state from
   * @ignore
   */
  function State(writer) {

      /**
       * Current head.
       * @type {Writer.Op}
       */
      this.head = writer.head;

      /**
       * Current tail.
       * @type {Writer.Op}
       */
      this.tail = writer.tail;

      /**
       * Current buffer length.
       * @type {number}
       */
      this.len = writer.len;

      /**
       * Next state.
       * @type {State|null}
       */
      this.next = writer.states;
  }

  /**
   * Constructs a new writer instance.
   * @classdesc Wire format writer using `Uint8Array` if available, otherwise `Array`.
   * @constructor
   */
  function Writer$1() {

      /**
       * Current length.
       * @type {number}
       */
      this.len = 0;

      /**
       * Operations head.
       * @type {Object}
       */
      this.head = new Op(noop, 0, 0);

      /**
       * Operations tail
       * @type {Object}
       */
      this.tail = this.head;

      /**
       * Linked forked states.
       * @type {Object|null}
       */
      this.states = null;

      // When a value is written, the writer calculates its byte length and puts it into a linked
      // list of operations to perform when finish() is called. This both allows us to allocate
      // buffers of the exact required size and reduces the amount of work we have to do compared
      // to first calculating over objects and then encoding over objects. In our case, the encoding
      // part is just a linked list walk calling operations with already prepared values.
  }

  var create$3 = function create() {
      return util$4.Buffer
          ? function create_buffer_setup() {
              return (Writer$1.create = function create_buffer() {
                  return new BufferWriter$1();
              })();
          }
          /* istanbul ignore next */
          : function create_array() {
              return new Writer$1();
          };
  };

  /**
   * Creates a new writer.
   * @function
   * @returns {BufferWriter|Writer} A {@link BufferWriter} when Buffers are supported, otherwise a {@link Writer}
   */
  Writer$1.create = create$3();

  /**
   * Allocates a buffer of the specified size.
   * @param {number} size Buffer size
   * @returns {Uint8Array} Buffer
   */
  Writer$1.alloc = function alloc(size) {
      return new util$4.Array(size);
  };

  // Use Uint8Array buffer pool in the browser, just like node does with buffers
  /* istanbul ignore else */
  if (util$4.Array !== Array)
      Writer$1.alloc = util$4.pool(Writer$1.alloc, util$4.Array.prototype.subarray);

  /**
   * Pushes a new operation to the queue.
   * @param {function(Uint8Array, number, *)} fn Function to call
   * @param {number} len Value byte length
   * @param {number} val Value to write
   * @returns {Writer} `this`
   * @private
   */
  Writer$1.prototype._push = function push(fn, len, val) {
      this.tail = this.tail.next = new Op(fn, len, val);
      this.len += len;
      return this;
  };

  function writeByte(val, buf, pos) {
      buf[pos] = val & 255;
  }

  function writeVarint32(val, buf, pos) {
      while (val > 127) {
          buf[pos++] = val & 127 | 128;
          val >>>= 7;
      }
      buf[pos] = val;
  }

  /**
   * Constructs a new varint writer operation instance.
   * @classdesc Scheduled varint writer operation.
   * @extends Op
   * @constructor
   * @param {number} len Value byte length
   * @param {number} val Value to write
   * @ignore
   */
  function VarintOp(len, val) {
      this.len = len;
      this.next = undefined;
      this.val = val;
  }

  VarintOp.prototype = Object.create(Op.prototype);
  VarintOp.prototype.fn = writeVarint32;

  /**
   * Writes an unsigned 32 bit value as a varint.
   * @param {number} value Value to write
   * @returns {Writer} `this`
   */
  Writer$1.prototype.uint32 = function write_uint32(value) {
      // here, the call to this.push has been inlined and a varint specific Op subclass is used.
      // uint32 is by far the most frequently used operation and benefits significantly from this.
      this.len += (this.tail = this.tail.next = new VarintOp(
          (value = value >>> 0)
                  < 128       ? 1
          : value < 16384     ? 2
          : value < 2097152   ? 3
          : value < 268435456 ? 4
          :                     5,
      value)).len;
      return this;
  };

  /**
   * Writes a signed 32 bit value as a varint.
   * @function
   * @param {number} value Value to write
   * @returns {Writer} `this`
   */
  Writer$1.prototype.int32 = function write_int32(value) {
      return value < 0
          ? this._push(writeVarint64, 10, LongBits$1.fromNumber(value)) // 10 bytes per spec
          : this.uint32(value);
  };

  /**
   * Writes a 32 bit value as a varint, zig-zag encoded.
   * @param {number} value Value to write
   * @returns {Writer} `this`
   */
  Writer$1.prototype.sint32 = function write_sint32(value) {
      return this.uint32((value << 1 ^ value >> 31) >>> 0);
  };

  function writeVarint64(val, buf, pos) {
      while (val.hi) {
          buf[pos++] = val.lo & 127 | 128;
          val.lo = (val.lo >>> 7 | val.hi << 25) >>> 0;
          val.hi >>>= 7;
      }
      while (val.lo > 127) {
          buf[pos++] = val.lo & 127 | 128;
          val.lo = val.lo >>> 7;
      }
      buf[pos++] = val.lo;
  }

  /**
   * Writes an unsigned 64 bit value as a varint.
   * @param {Long|number|string} value Value to write
   * @returns {Writer} `this`
   * @throws {TypeError} If `value` is a string and no long library is present.
   */
  Writer$1.prototype.uint64 = function write_uint64(value) {
      var bits = LongBits$1.from(value);
      return this._push(writeVarint64, bits.length(), bits);
  };

  /**
   * Writes a signed 64 bit value as a varint.
   * @function
   * @param {Long|number|string} value Value to write
   * @returns {Writer} `this`
   * @throws {TypeError} If `value` is a string and no long library is present.
   */
  Writer$1.prototype.int64 = Writer$1.prototype.uint64;

  /**
   * Writes a signed 64 bit value as a varint, zig-zag encoded.
   * @param {Long|number|string} value Value to write
   * @returns {Writer} `this`
   * @throws {TypeError} If `value` is a string and no long library is present.
   */
  Writer$1.prototype.sint64 = function write_sint64(value) {
      var bits = LongBits$1.from(value).zzEncode();
      return this._push(writeVarint64, bits.length(), bits);
  };

  /**
   * Writes a boolish value as a varint.
   * @param {boolean} value Value to write
   * @returns {Writer} `this`
   */
  Writer$1.prototype.bool = function write_bool(value) {
      return this._push(writeByte, 1, value ? 1 : 0);
  };

  function writeFixed32(val, buf, pos) {
      buf[pos    ] =  val         & 255;
      buf[pos + 1] =  val >>> 8   & 255;
      buf[pos + 2] =  val >>> 16  & 255;
      buf[pos + 3] =  val >>> 24;
  }

  /**
   * Writes an unsigned 32 bit value as fixed 32 bits.
   * @param {number} value Value to write
   * @returns {Writer} `this`
   */
  Writer$1.prototype.fixed32 = function write_fixed32(value) {
      return this._push(writeFixed32, 4, value >>> 0);
  };

  /**
   * Writes a signed 32 bit value as fixed 32 bits.
   * @function
   * @param {number} value Value to write
   * @returns {Writer} `this`
   */
  Writer$1.prototype.sfixed32 = Writer$1.prototype.fixed32;

  /**
   * Writes an unsigned 64 bit value as fixed 64 bits.
   * @param {Long|number|string} value Value to write
   * @returns {Writer} `this`
   * @throws {TypeError} If `value` is a string and no long library is present.
   */
  Writer$1.prototype.fixed64 = function write_fixed64(value) {
      var bits = LongBits$1.from(value);
      return this._push(writeFixed32, 4, bits.lo)._push(writeFixed32, 4, bits.hi);
  };

  /**
   * Writes a signed 64 bit value as fixed 64 bits.
   * @function
   * @param {Long|number|string} value Value to write
   * @returns {Writer} `this`
   * @throws {TypeError} If `value` is a string and no long library is present.
   */
  Writer$1.prototype.sfixed64 = Writer$1.prototype.fixed64;

  /**
   * Writes a float (32 bit).
   * @function
   * @param {number} value Value to write
   * @returns {Writer} `this`
   */
  Writer$1.prototype.float = function write_float(value) {
      return this._push(util$4.float.writeFloatLE, 4, value);
  };

  /**
   * Writes a double (64 bit float).
   * @function
   * @param {number} value Value to write
   * @returns {Writer} `this`
   */
  Writer$1.prototype.double = function write_double(value) {
      return this._push(util$4.float.writeDoubleLE, 8, value);
  };

  var writeBytes = util$4.Array.prototype.set
      ? function writeBytes_set(val, buf, pos) {
          buf.set(val, pos); // also works for plain array values
      }
      /* istanbul ignore next */
      : function writeBytes_for(val, buf, pos) {
          for (var i = 0; i < val.length; ++i)
              buf[pos + i] = val[i];
      };

  /**
   * Writes a sequence of bytes.
   * @param {Uint8Array|string} value Buffer or base64 encoded string to write
   * @returns {Writer} `this`
   */
  Writer$1.prototype.bytes = function write_bytes(value) {
      var len = value.length >>> 0;
      if (!len)
          return this._push(writeByte, 1, 0);
      if (util$4.isString(value)) {
          var buf = Writer$1.alloc(len = base64.length(value));
          base64.decode(value, buf, 0);
          value = buf;
      }
      return this.uint32(len)._push(writeBytes, len, value);
  };

  /**
   * Writes a string.
   * @param {string} value Value to write
   * @returns {Writer} `this`
   */
  Writer$1.prototype.string = function write_string(value) {
      var len = utf8$1.length(value);
      return len
          ? this.uint32(len)._push(utf8$1.write, len, value)
          : this._push(writeByte, 1, 0);
  };

  /**
   * Forks this writer's state by pushing it to a stack.
   * Calling {@link Writer#reset|reset} or {@link Writer#ldelim|ldelim} resets the writer to the previous state.
   * @returns {Writer} `this`
   */
  Writer$1.prototype.fork = function fork() {
      this.states = new State(this);
      this.head = this.tail = new Op(noop, 0, 0);
      this.len = 0;
      return this;
  };

  /**
   * Resets this instance to the last state.
   * @returns {Writer} `this`
   */
  Writer$1.prototype.reset = function reset() {
      if (this.states) {
          this.head   = this.states.head;
          this.tail   = this.states.tail;
          this.len    = this.states.len;
          this.states = this.states.next;
      } else {
          this.head = this.tail = new Op(noop, 0, 0);
          this.len  = 0;
      }
      return this;
  };

  /**
   * Resets to the last state and appends the fork state's current write length as a varint followed by its operations.
   * @returns {Writer} `this`
   */
  Writer$1.prototype.ldelim = function ldelim() {
      var head = this.head,
          tail = this.tail,
          len  = this.len;
      this.reset().uint32(len);
      if (len) {
          this.tail.next = head.next; // skip noop
          this.tail = tail;
          this.len += len;
      }
      return this;
  };

  /**
   * Finishes the write operation.
   * @returns {Uint8Array} Finished buffer
   */
  Writer$1.prototype.finish = function finish() {
      var head = this.head.next, // skip noop
          buf  = this.constructor.alloc(this.len),
          pos  = 0;
      while (head) {
          head.fn(head.val, buf, pos);
          pos += head.len;
          head = head.next;
      }
      // this.head = this.tail = null;
      return buf;
  };

  Writer$1._configure = function(BufferWriter_) {
      BufferWriter$1 = BufferWriter_;
      Writer$1.create = create$3();
      BufferWriter$1._configure();
  };

  var writer_buffer = BufferWriter;

  // extends Writer
  var Writer = writer;
  (BufferWriter.prototype = Object.create(Writer.prototype)).constructor = BufferWriter;

  var util$3 = requireMinimal();

  /**
   * Constructs a new buffer writer instance.
   * @classdesc Wire format writer using node buffers.
   * @extends Writer
   * @constructor
   */
  function BufferWriter() {
      Writer.call(this);
  }

  BufferWriter._configure = function () {
      /**
       * Allocates a buffer of the specified size.
       * @function
       * @param {number} size Buffer size
       * @returns {Buffer} Buffer
       */
      BufferWriter.alloc = util$3._Buffer_allocUnsafe;

      BufferWriter.writeBytesBuffer = util$3.Buffer && util$3.Buffer.prototype instanceof Uint8Array && util$3.Buffer.prototype.set.name === "set"
          ? function writeBytesBuffer_set(val, buf, pos) {
            buf.set(val, pos); // faster than copy (requires node >= 4 where Buffers extend Uint8Array and set is properly inherited)
            // also works for plain array values
          }
          /* istanbul ignore next */
          : function writeBytesBuffer_copy(val, buf, pos) {
            if (val.copy) // Buffer values
              val.copy(buf, pos, 0, val.length);
            else for (var i = 0; i < val.length;) // plain array values
              buf[pos++] = val[i++];
          };
  };


  /**
   * @override
   */
  BufferWriter.prototype.bytes = function write_bytes_buffer(value) {
      if (util$3.isString(value))
          value = util$3._Buffer_from(value, "base64");
      var len = value.length >>> 0;
      this.uint32(len);
      if (len)
          this._push(BufferWriter.writeBytesBuffer, len, value);
      return this;
  };

  function writeStringBuffer(val, buf, pos) {
      if (val.length < 40) // plain js is faster for short strings (probably due to redundant assertions)
          util$3.utf8.write(val, buf, pos);
      else if (buf.utf8Write)
          buf.utf8Write(val, pos);
      else
          buf.write(val, pos);
  }

  /**
   * @override
   */
  BufferWriter.prototype.string = function write_string_buffer(value) {
      var len = util$3.Buffer.byteLength(value);
      this.uint32(len);
      if (len)
          this._push(writeStringBuffer, len, value);
      return this;
  };


  /**
   * Finishes the write operation.
   * @name BufferWriter#finish
   * @function
   * @returns {Buffer} Finished buffer
   */

  BufferWriter._configure();

  var reader = Reader$1;

  var util$2      = requireMinimal();

  var BufferReader$1; // cyclic

  var LongBits  = util$2.LongBits,
      utf8      = util$2.utf8;

  /* istanbul ignore next */
  function indexOutOfRange(reader, writeLength) {
      return RangeError("index out of range: " + reader.pos + " + " + (writeLength || 1) + " > " + reader.len);
  }

  /**
   * Constructs a new reader instance using the specified buffer.
   * @classdesc Wire format reader using `Uint8Array` if available, otherwise `Array`.
   * @constructor
   * @param {Uint8Array} buffer Buffer to read from
   */
  function Reader$1(buffer) {

      /**
       * Read buffer.
       * @type {Uint8Array}
       */
      this.buf = buffer;

      /**
       * Read buffer position.
       * @type {number}
       */
      this.pos = 0;

      /**
       * Read buffer length.
       * @type {number}
       */
      this.len = buffer.length;
  }

  var create_array = typeof Uint8Array !== "undefined"
      ? function create_typed_array(buffer) {
          if (buffer instanceof Uint8Array || Array.isArray(buffer))
              return new Reader$1(buffer);
          throw Error("illegal buffer");
      }
      /* istanbul ignore next */
      : function create_array(buffer) {
          if (Array.isArray(buffer))
              return new Reader$1(buffer);
          throw Error("illegal buffer");
      };

  var create$2 = function create() {
      return util$2.Buffer
          ? function create_buffer_setup(buffer) {
              return (Reader$1.create = function create_buffer(buffer) {
                  return util$2.Buffer.isBuffer(buffer)
                      ? new BufferReader$1(buffer)
                      /* istanbul ignore next */
                      : create_array(buffer);
              })(buffer);
          }
          /* istanbul ignore next */
          : create_array;
  };

  /**
   * Creates a new reader using the specified buffer.
   * @function
   * @param {Uint8Array|Buffer} buffer Buffer to read from
   * @returns {Reader|BufferReader} A {@link BufferReader} if `buffer` is a Buffer, otherwise a {@link Reader}
   * @throws {Error} If `buffer` is not a valid buffer
   */
  Reader$1.create = create$2();

  Reader$1.prototype._slice = util$2.Array.prototype.subarray || /* istanbul ignore next */ util$2.Array.prototype.slice;

  /**
   * Reads a varint as an unsigned 32 bit value.
   * @function
   * @returns {number} Value read
   */
  Reader$1.prototype.uint32 = (function read_uint32_setup() {
      var value = 4294967295; // optimizer type-hint, tends to deopt otherwise (?!)
      return function read_uint32() {
          value = (         this.buf[this.pos] & 127       ) >>> 0; if (this.buf[this.pos++] < 128) return value;
          value = (value | (this.buf[this.pos] & 127) <<  7) >>> 0; if (this.buf[this.pos++] < 128) return value;
          value = (value | (this.buf[this.pos] & 127) << 14) >>> 0; if (this.buf[this.pos++] < 128) return value;
          value = (value | (this.buf[this.pos] & 127) << 21) >>> 0; if (this.buf[this.pos++] < 128) return value;
          value = (value | (this.buf[this.pos] &  15) << 28) >>> 0; if (this.buf[this.pos++] < 128) return value;

          /* istanbul ignore if */
          if ((this.pos += 5) > this.len) {
              this.pos = this.len;
              throw indexOutOfRange(this, 10);
          }
          return value;
      };
  })();

  /**
   * Reads a varint as a signed 32 bit value.
   * @returns {number} Value read
   */
  Reader$1.prototype.int32 = function read_int32() {
      return this.uint32() | 0;
  };

  /**
   * Reads a zig-zag encoded varint as a signed 32 bit value.
   * @returns {number} Value read
   */
  Reader$1.prototype.sint32 = function read_sint32() {
      var value = this.uint32();
      return value >>> 1 ^ -(value & 1) | 0;
  };

  /* eslint-disable no-invalid-this */

  function readLongVarint() {
      // tends to deopt with local vars for octet etc.
      var bits = new LongBits(0, 0);
      var i = 0;
      if (this.len - this.pos > 4) { // fast route (lo)
          for (; i < 4; ++i) {
              // 1st..4th
              bits.lo = (bits.lo | (this.buf[this.pos] & 127) << i * 7) >>> 0;
              if (this.buf[this.pos++] < 128)
                  return bits;
          }
          // 5th
          bits.lo = (bits.lo | (this.buf[this.pos] & 127) << 28) >>> 0;
          bits.hi = (bits.hi | (this.buf[this.pos] & 127) >>  4) >>> 0;
          if (this.buf[this.pos++] < 128)
              return bits;
          i = 0;
      } else {
          for (; i < 3; ++i) {
              /* istanbul ignore if */
              if (this.pos >= this.len)
                  throw indexOutOfRange(this);
              // 1st..3th
              bits.lo = (bits.lo | (this.buf[this.pos] & 127) << i * 7) >>> 0;
              if (this.buf[this.pos++] < 128)
                  return bits;
          }
          // 4th
          bits.lo = (bits.lo | (this.buf[this.pos++] & 127) << i * 7) >>> 0;
          return bits;
      }
      if (this.len - this.pos > 4) { // fast route (hi)
          for (; i < 5; ++i) {
              // 6th..10th
              bits.hi = (bits.hi | (this.buf[this.pos] & 127) << i * 7 + 3) >>> 0;
              if (this.buf[this.pos++] < 128)
                  return bits;
          }
      } else {
          for (; i < 5; ++i) {
              /* istanbul ignore if */
              if (this.pos >= this.len)
                  throw indexOutOfRange(this);
              // 6th..10th
              bits.hi = (bits.hi | (this.buf[this.pos] & 127) << i * 7 + 3) >>> 0;
              if (this.buf[this.pos++] < 128)
                  return bits;
          }
      }
      /* istanbul ignore next */
      throw Error("invalid varint encoding");
  }

  /* eslint-enable no-invalid-this */

  /**
   * Reads a varint as a signed 64 bit value.
   * @name Reader#int64
   * @function
   * @returns {Long} Value read
   */

  /**
   * Reads a varint as an unsigned 64 bit value.
   * @name Reader#uint64
   * @function
   * @returns {Long} Value read
   */

  /**
   * Reads a zig-zag encoded varint as a signed 64 bit value.
   * @name Reader#sint64
   * @function
   * @returns {Long} Value read
   */

  /**
   * Reads a varint as a boolean.
   * @returns {boolean} Value read
   */
  Reader$1.prototype.bool = function read_bool() {
      return this.uint32() !== 0;
  };

  function readFixed32_end(buf, end) { // note that this uses `end`, not `pos`
      return (buf[end - 4]
            | buf[end - 3] << 8
            | buf[end - 2] << 16
            | buf[end - 1] << 24) >>> 0;
  }

  /**
   * Reads fixed 32 bits as an unsigned 32 bit integer.
   * @returns {number} Value read
   */
  Reader$1.prototype.fixed32 = function read_fixed32() {

      /* istanbul ignore if */
      if (this.pos + 4 > this.len)
          throw indexOutOfRange(this, 4);

      return readFixed32_end(this.buf, this.pos += 4);
  };

  /**
   * Reads fixed 32 bits as a signed 32 bit integer.
   * @returns {number} Value read
   */
  Reader$1.prototype.sfixed32 = function read_sfixed32() {

      /* istanbul ignore if */
      if (this.pos + 4 > this.len)
          throw indexOutOfRange(this, 4);

      return readFixed32_end(this.buf, this.pos += 4) | 0;
  };

  /* eslint-disable no-invalid-this */

  function readFixed64(/* this: Reader */) {

      /* istanbul ignore if */
      if (this.pos + 8 > this.len)
          throw indexOutOfRange(this, 8);

      return new LongBits(readFixed32_end(this.buf, this.pos += 4), readFixed32_end(this.buf, this.pos += 4));
  }

  /* eslint-enable no-invalid-this */

  /**
   * Reads fixed 64 bits.
   * @name Reader#fixed64
   * @function
   * @returns {Long} Value read
   */

  /**
   * Reads zig-zag encoded fixed 64 bits.
   * @name Reader#sfixed64
   * @function
   * @returns {Long} Value read
   */

  /**
   * Reads a float (32 bit) as a number.
   * @function
   * @returns {number} Value read
   */
  Reader$1.prototype.float = function read_float() {

      /* istanbul ignore if */
      if (this.pos + 4 > this.len)
          throw indexOutOfRange(this, 4);

      var value = util$2.float.readFloatLE(this.buf, this.pos);
      this.pos += 4;
      return value;
  };

  /**
   * Reads a double (64 bit float) as a number.
   * @function
   * @returns {number} Value read
   */
  Reader$1.prototype.double = function read_double() {

      /* istanbul ignore if */
      if (this.pos + 8 > this.len)
          throw indexOutOfRange(this, 4);

      var value = util$2.float.readDoubleLE(this.buf, this.pos);
      this.pos += 8;
      return value;
  };

  /**
   * Reads a sequence of bytes preceeded by its length as a varint.
   * @returns {Uint8Array} Value read
   */
  Reader$1.prototype.bytes = function read_bytes() {
      var length = this.uint32(),
          start  = this.pos,
          end    = this.pos + length;

      /* istanbul ignore if */
      if (end > this.len)
          throw indexOutOfRange(this, length);

      this.pos += length;
      if (Array.isArray(this.buf)) // plain array
          return this.buf.slice(start, end);
      return start === end // fix for IE 10/Win8 and others' subarray returning array of size 1
          ? new this.buf.constructor(0)
          : this._slice.call(this.buf, start, end);
  };

  /**
   * Reads a string preceeded by its byte length as a varint.
   * @returns {string} Value read
   */
  Reader$1.prototype.string = function read_string() {
      var bytes = this.bytes();
      return utf8.read(bytes, 0, bytes.length);
  };

  /**
   * Skips the specified number of bytes if specified, otherwise skips a varint.
   * @param {number} [length] Length if known, otherwise a varint is assumed
   * @returns {Reader} `this`
   */
  Reader$1.prototype.skip = function skip(length) {
      if (typeof length === "number") {
          /* istanbul ignore if */
          if (this.pos + length > this.len)
              throw indexOutOfRange(this, length);
          this.pos += length;
      } else {
          do {
              /* istanbul ignore if */
              if (this.pos >= this.len)
                  throw indexOutOfRange(this);
          } while (this.buf[this.pos++] & 128);
      }
      return this;
  };

  /**
   * Skips the next element of the specified wire type.
   * @param {number} wireType Wire type received
   * @returns {Reader} `this`
   */
  Reader$1.prototype.skipType = function(wireType) {
      switch (wireType) {
          case 0:
              this.skip();
              break;
          case 1:
              this.skip(8);
              break;
          case 2:
              this.skip(this.uint32());
              break;
          case 3:
              while ((wireType = this.uint32() & 7) !== 4) {
                  this.skipType(wireType);
              }
              break;
          case 5:
              this.skip(4);
              break;

          /* istanbul ignore next */
          default:
              throw Error("invalid wire type " + wireType + " at offset " + this.pos);
      }
      return this;
  };

  Reader$1._configure = function(BufferReader_) {
      BufferReader$1 = BufferReader_;
      Reader$1.create = create$2();
      BufferReader$1._configure();

      var fn = util$2.Long ? "toLong" : /* istanbul ignore next */ "toNumber";
      util$2.merge(Reader$1.prototype, {

          int64: function read_int64() {
              return readLongVarint.call(this)[fn](false);
          },

          uint64: function read_uint64() {
              return readLongVarint.call(this)[fn](true);
          },

          sint64: function read_sint64() {
              return readLongVarint.call(this).zzDecode()[fn](false);
          },

          fixed64: function read_fixed64() {
              return readFixed64.call(this)[fn](true);
          },

          sfixed64: function read_sfixed64() {
              return readFixed64.call(this)[fn](false);
          }

      });
  };

  var reader_buffer = BufferReader;

  // extends Reader
  var Reader = reader;
  (BufferReader.prototype = Object.create(Reader.prototype)).constructor = BufferReader;

  var util$1 = requireMinimal();

  /**
   * Constructs a new buffer reader instance.
   * @classdesc Wire format reader using node buffers.
   * @extends Reader
   * @constructor
   * @param {Buffer} buffer Buffer to read from
   */
  function BufferReader(buffer) {
      Reader.call(this, buffer);

      /**
       * Read buffer.
       * @name BufferReader#buf
       * @type {Buffer}
       */
  }

  BufferReader._configure = function () {
      /* istanbul ignore else */
      if (util$1.Buffer)
          BufferReader.prototype._slice = util$1.Buffer.prototype.slice;
  };


  /**
   * @override
   */
  BufferReader.prototype.string = function read_string_buffer() {
      var len = this.uint32(); // modifies pos
      return this.buf.utf8Slice
          ? this.buf.utf8Slice(this.pos, this.pos = Math.min(this.pos + len, this.len))
          : this.buf.toString("utf-8", this.pos, this.pos = Math.min(this.pos + len, this.len));
  };

  /**
   * Reads a sequence of bytes preceeded by its length as a varint.
   * @name BufferReader#bytes
   * @function
   * @returns {Buffer} Value read
   */

  BufferReader._configure();

  var rpc = {};

  var service = Service;

  var util = requireMinimal();

  // Extends EventEmitter
  (Service.prototype = Object.create(util.EventEmitter.prototype)).constructor = Service;

  /**
   * A service method callback as used by {@link rpc.ServiceMethod|ServiceMethod}.
   *
   * Differs from {@link RPCImplCallback} in that it is an actual callback of a service method which may not return `response = null`.
   * @typedef rpc.ServiceMethodCallback
   * @template TRes extends Message<TRes>
   * @type {function}
   * @param {Error|null} error Error, if any
   * @param {TRes} [response] Response message
   * @returns {undefined}
   */

  /**
   * A service method part of a {@link rpc.Service} as created by {@link Service.create}.
   * @typedef rpc.ServiceMethod
   * @template TReq extends Message<TReq>
   * @template TRes extends Message<TRes>
   * @type {function}
   * @param {TReq|Properties<TReq>} request Request message or plain object
   * @param {rpc.ServiceMethodCallback<TRes>} [callback] Node-style callback called with the error, if any, and the response message
   * @returns {Promise<Message<TRes>>} Promise if `callback` has been omitted, otherwise `undefined`
   */

  /**
   * Constructs a new RPC service instance.
   * @classdesc An RPC service as returned by {@link Service#create}.
   * @exports rpc.Service
   * @extends util.EventEmitter
   * @constructor
   * @param {RPCImpl} rpcImpl RPC implementation
   * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
   * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
   */
  function Service(rpcImpl, requestDelimited, responseDelimited) {

      if (typeof rpcImpl !== "function")
          throw TypeError("rpcImpl must be a function");

      util.EventEmitter.call(this);

      /**
       * RPC implementation. Becomes `null` once the service is ended.
       * @type {RPCImpl|null}
       */
      this.rpcImpl = rpcImpl;

      /**
       * Whether requests are length-delimited.
       * @type {boolean}
       */
      this.requestDelimited = Boolean(requestDelimited);

      /**
       * Whether responses are length-delimited.
       * @type {boolean}
       */
      this.responseDelimited = Boolean(responseDelimited);
  }

  /**
   * Calls a service method through {@link rpc.Service#rpcImpl|rpcImpl}.
   * @param {Method|rpc.ServiceMethod<TReq,TRes>} method Reflected or static method
   * @param {Constructor<TReq>} requestCtor Request constructor
   * @param {Constructor<TRes>} responseCtor Response constructor
   * @param {TReq|Properties<TReq>} request Request message or plain object
   * @param {rpc.ServiceMethodCallback<TRes>} callback Service callback
   * @returns {undefined}
   * @template TReq extends Message<TReq>
   * @template TRes extends Message<TRes>
   */
  Service.prototype.rpcCall = function rpcCall(method, requestCtor, responseCtor, request, callback) {

      if (!request)
          throw TypeError("request must be specified");

      var self = this;
      if (!callback)
          return util.asPromise(rpcCall, self, method, requestCtor, responseCtor, request);

      if (!self.rpcImpl) {
          setTimeout(function() { callback(Error("already ended")); }, 0);
          return undefined;
      }

      try {
          return self.rpcImpl(
              method,
              requestCtor[self.requestDelimited ? "encodeDelimited" : "encode"](request).finish(),
              function rpcCallback(err, response) {

                  if (err) {
                      self.emit("error", err, method);
                      return callback(err);
                  }

                  if (response === null) {
                      self.end(/* endedByRPC */ true);
                      return undefined;
                  }

                  if (!(response instanceof responseCtor)) {
                      try {
                          response = responseCtor[self.responseDelimited ? "decodeDelimited" : "decode"](response);
                      } catch (err) {
                          self.emit("error", err, method);
                          return callback(err);
                      }
                  }

                  self.emit("data", response, method);
                  return callback(null, response);
              }
          );
      } catch (err) {
          self.emit("error", err, method);
          setTimeout(function() { callback(err); }, 0);
          return undefined;
      }
  };

  /**
   * Ends this service and emits the `end` event.
   * @param {boolean} [endedByRPC=false] Whether the service has been ended by the RPC implementation.
   * @returns {rpc.Service} `this`
   */
  Service.prototype.end = function end(endedByRPC) {
      if (this.rpcImpl) {
          if (!endedByRPC) // signal end to rpcImpl
              this.rpcImpl(null, null, null);
          this.rpcImpl = null;
          this.emit("end").off();
      }
      return this;
  };

  (function (exports) {

  	/**
  	 * Streaming RPC helpers.
  	 * @namespace
  	 */
  	var rpc = exports;

  	/**
  	 * RPC implementation passed to {@link Service#create} performing a service request on network level, i.e. by utilizing http requests or websockets.
  	 * @typedef RPCImpl
  	 * @type {function}
  	 * @param {Method|rpc.ServiceMethod<Message<{}>,Message<{}>>} method Reflected or static method being called
  	 * @param {Uint8Array} requestData Request data
  	 * @param {RPCImplCallback} callback Callback function
  	 * @returns {undefined}
  	 * @example
  	 * function rpcImpl(method, requestData, callback) {
  	 *     if (protobuf.util.lcFirst(method.name) !== "myMethod") // compatible with static code
  	 *         throw Error("no such method");
  	 *     asynchronouslyObtainAResponse(requestData, function(err, responseData) {
  	 *         callback(err, responseData);
  	 *     });
  	 * }
  	 */

  	/**
  	 * Node-style callback as used by {@link RPCImpl}.
  	 * @typedef RPCImplCallback
  	 * @type {function}
  	 * @param {Error|null} error Error, if any, otherwise `null`
  	 * @param {Uint8Array|null} [response] Response data or `null` to signal end of stream, if there hasn't been an error
  	 * @returns {undefined}
  	 */

  	rpc.Service = service;
  } (rpc));

  var roots = {};

  (function (exports) {
  	var protobuf = exports;

  	/**
  	 * Build type, one of `"full"`, `"light"` or `"minimal"`.
  	 * @name build
  	 * @type {string}
  	 * @const
  	 */
  	protobuf.build = "minimal";

  	// Serialization
  	protobuf.Writer       = writer;
  	protobuf.BufferWriter = writer_buffer;
  	protobuf.Reader       = reader;
  	protobuf.BufferReader = reader_buffer;

  	// Utility
  	protobuf.util         = requireMinimal();
  	protobuf.rpc          = rpc;
  	protobuf.roots        = roots;
  	protobuf.configure    = configure;

  	/* istanbul ignore next */
  	/**
  	 * Reconfigures the library according to the environment.
  	 * @returns {undefined}
  	 */
  	function configure() {
  	    protobuf.util._configure();
  	    protobuf.Writer._configure(protobuf.BufferWriter);
  	    protobuf.Reader._configure(protobuf.BufferReader);
  	}

  	// Set up buffer utility according to the environment
  	configure();
  } (indexMinimal));

  (function (module) {
  	module.exports = indexMinimal;
  } (minimal$1));

  var _m0 = /*@__PURE__*/getDefaultExportFromCjs(minimalExports);

  function createBaseLongsWithVersion() {
    return {
      longs: [],
      lastUpdatedDate: undefined
    };
  }
  var LongsWithVersion = {
    encode: function encode(message, writer) {
      if (writer === void 0) {
        writer = _m0.Writer.create();
      }
      writer.uint32(10).fork();
      for (var _i = 0, _a = message.longs; _i < _a.length; _i++) {
        var v = _a[_i];
        writer.int64(v);
      }
      writer.ldelim();
      if (message.lastUpdatedDate !== undefined) {
        writer.uint32(16).int64(message.lastUpdatedDate);
      }
      return writer;
    },
    decode: function decode(input, length) {
      var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
      var end = length === undefined ? reader.len : reader.pos + length;
      var message = createBaseLongsWithVersion();
      while (reader.pos < end) {
        var tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            if ((tag & 7) === 2) {
              var end2 = reader.uint32() + reader.pos;
              while (reader.pos < end2) {
                message.longs.push(longToString$1d(reader.int64()));
              }
            } else {
              message.longs.push(longToString$1d(reader.int64()));
            }
            break;
          case 2:
            message.lastUpdatedDate = longToString$1d(reader.int64());
            break;
          default:
            reader.skipType(tag & 7);
            break;
        }
      }
      return message;
    }
  };
  function longToString$1d(long) {
    return long.toString();
  }
  if (_m0.util.Long !== long) {
    _m0.util.Long = long;
    _m0.configure();
  }

  function createBaseStringsWithVersion() {
    return {
      strings: [],
      lastUpdatedDate: undefined
    };
  }
  var StringsWithVersion = {
    encode: function encode(message, writer) {
      if (writer === void 0) {
        writer = _m0.Writer.create();
      }
      for (var _i = 0, _a = message.strings; _i < _a.length; _i++) {
        var v = _a[_i];
        writer.uint32(10).string(v);
      }
      if (message.lastUpdatedDate !== undefined) {
        writer.uint32(16).int64(message.lastUpdatedDate);
      }
      return writer;
    },
    decode: function decode(input, length) {
      var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
      var end = length === undefined ? reader.len : reader.pos + length;
      var message = createBaseStringsWithVersion();
      while (reader.pos < end) {
        var tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            message.strings.push(reader.string());
            break;
          case 2:
            message.lastUpdatedDate = longToString$1c(reader.int64());
            break;
          default:
            reader.skipType(tag & 7);
            break;
        }
      }
      return message;
    }
  };
  function longToString$1c(long) {
    return long.toString();
  }
  if (_m0.util.Long !== long) {
    _m0.util.Long = long;
    _m0.configure();
  }

  var $forEach$1 = arrayIteration.forEach;
  var arrayMethodIsStrict = arrayMethodIsStrict$2;

  var STRICT_METHOD = arrayMethodIsStrict('forEach');

  // `Array.prototype.forEach` method implementation
  // https://tc39.es/ecma262/#sec-array.prototype.foreach
  var arrayForEach = !STRICT_METHOD ? function forEach(callbackfn /* , thisArg */) {
    return $forEach$1(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  // eslint-disable-next-line es/no-array-prototype-foreach -- safe
  } : [].forEach;

  var global$8 = global$x;
  var DOMIterables = domIterables;
  var DOMTokenListPrototype = domTokenListPrototype;
  var forEach = arrayForEach;
  var createNonEnumerableProperty$1 = createNonEnumerableProperty$9;

  var handlePrototype = function (CollectionPrototype) {
    // some Chrome versions have non-configurable methods on DOMTokenList
    if (CollectionPrototype && CollectionPrototype.forEach !== forEach) try {
      createNonEnumerableProperty$1(CollectionPrototype, 'forEach', forEach);
    } catch (error) {
      CollectionPrototype.forEach = forEach;
    }
  };

  for (var COLLECTION_NAME in DOMIterables) {
    if (DOMIterables[COLLECTION_NAME]) {
      handlePrototype(global$8[COLLECTION_NAME] && global$8[COLLECTION_NAME].prototype);
    }
  }

  handlePrototype(DOMTokenListPrototype);

  var DESCRIPTORS$5 = descriptors;
  var uncurryThis$e = functionUncurryThis;
  var objectKeys$2 = objectKeys$4;
  var toIndexedObject$2 = toIndexedObject$a;
  var $propertyIsEnumerable$1 = objectPropertyIsEnumerable.f;

  var propertyIsEnumerable = uncurryThis$e($propertyIsEnumerable$1);
  var push$3 = uncurryThis$e([].push);

  // `Object.{ entries, values }` methods implementation
  var createMethod = function (TO_ENTRIES) {
    return function (it) {
      var O = toIndexedObject$2(it);
      var keys = objectKeys$2(O);
      var length = keys.length;
      var i = 0;
      var result = [];
      var key;
      while (length > i) {
        key = keys[i++];
        if (!DESCRIPTORS$5 || propertyIsEnumerable(O, key)) {
          push$3(result, TO_ENTRIES ? [key, O[key]] : O[key]);
        }
      }
      return result;
    };
  };

  var objectToArray = {
    // `Object.entries` method
    // https://tc39.es/ecma262/#sec-object.entries
    entries: createMethod(true),
    // `Object.values` method
    // https://tc39.es/ecma262/#sec-object.values
    values: createMethod(false)
  };

  var $$j = _export;
  var $entries = objectToArray.entries;

  // `Object.entries` method
  // https://tc39.es/ecma262/#sec-object.entries
  $$j({ target: 'Object', stat: true }, {
    entries: function entries(O) {
      return $entries(O);
    }
  });

  function createBaseGroupConversation() {
    return {
      groupId: "0",
      memberIdToReadDate: {}
    };
  }
  var GroupConversation = {
    encode: function encode(message, writer) {
      if (writer === void 0) {
        writer = _m0.Writer.create();
      }
      if (message.groupId !== "0") {
        writer.uint32(8).int64(message.groupId);
      }
      Object.entries(message.memberIdToReadDate).forEach(function (_a) {
        var key = _a[0],
          value = _a[1];
        GroupConversation_MemberIdToReadDateEntry.encode({
          key: key,
          value: value
        }, writer.uint32(18).fork()).ldelim();
      });
      return writer;
    },
    decode: function decode(input, length) {
      var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
      var end = length === undefined ? reader.len : reader.pos + length;
      var message = createBaseGroupConversation();
      while (reader.pos < end) {
        var tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            message.groupId = longToString$1b(reader.int64());
            break;
          case 2:
            var entry2 = GroupConversation_MemberIdToReadDateEntry.decode(reader, reader.uint32());
            if (entry2.value !== undefined) {
              message.memberIdToReadDate[entry2.key] = entry2.value;
            }
            break;
          default:
            reader.skipType(tag & 7);
            break;
        }
      }
      return message;
    }
  };
  function createBaseGroupConversation_MemberIdToReadDateEntry() {
    return {
      key: "0",
      value: "0"
    };
  }
  var GroupConversation_MemberIdToReadDateEntry = {
    encode: function encode(message, writer) {
      if (writer === void 0) {
        writer = _m0.Writer.create();
      }
      if (message.key !== "0") {
        writer.uint32(8).int64(message.key);
      }
      if (message.value !== "0") {
        writer.uint32(16).int64(message.value);
      }
      return writer;
    },
    decode: function decode(input, length) {
      var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
      var end = length === undefined ? reader.len : reader.pos + length;
      var message = createBaseGroupConversation_MemberIdToReadDateEntry();
      while (reader.pos < end) {
        var tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            message.key = longToString$1b(reader.int64());
            break;
          case 2:
            message.value = longToString$1b(reader.int64());
            break;
          default:
            reader.skipType(tag & 7);
            break;
        }
      }
      return message;
    }
  };
  function longToString$1b(long) {
    return long.toString();
  }
  if (_m0.util.Long !== long) {
    _m0.util.Long = long;
    _m0.configure();
  }

  function createBasePrivateConversation() {
    return {
      ownerId: "0",
      targetId: "0",
      readDate: "0"
    };
  }
  var PrivateConversation = {
    encode: function encode(message, writer) {
      if (writer === void 0) {
        writer = _m0.Writer.create();
      }
      if (message.ownerId !== "0") {
        writer.uint32(8).int64(message.ownerId);
      }
      if (message.targetId !== "0") {
        writer.uint32(16).int64(message.targetId);
      }
      if (message.readDate !== "0") {
        writer.uint32(24).int64(message.readDate);
      }
      return writer;
    },
    decode: function decode(input, length) {
      var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
      var end = length === undefined ? reader.len : reader.pos + length;
      var message = createBasePrivateConversation();
      while (reader.pos < end) {
        var tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            message.ownerId = longToString$1a(reader.int64());
            break;
          case 2:
            message.targetId = longToString$1a(reader.int64());
            break;
          case 3:
            message.readDate = longToString$1a(reader.int64());
            break;
          default:
            reader.skipType(tag & 7);
            break;
        }
      }
      return message;
    }
  };
  function longToString$1a(long) {
    return long.toString();
  }
  if (_m0.util.Long !== long) {
    _m0.util.Long = long;
    _m0.configure();
  }

  function createBaseConversations() {
    return {
      privateConversations: [],
      groupConversations: []
    };
  }
  var Conversations = {
    encode: function encode(message, writer) {
      if (writer === void 0) {
        writer = _m0.Writer.create();
      }
      for (var _i = 0, _a = message.privateConversations; _i < _a.length; _i++) {
        var v = _a[_i];
        PrivateConversation.encode(v, writer.uint32(10).fork()).ldelim();
      }
      for (var _b = 0, _c = message.groupConversations; _b < _c.length; _b++) {
        var v = _c[_b];
        GroupConversation.encode(v, writer.uint32(18).fork()).ldelim();
      }
      return writer;
    },
    decode: function decode(input, length) {
      var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
      var end = length === undefined ? reader.len : reader.pos + length;
      var message = createBaseConversations();
      while (reader.pos < end) {
        var tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            message.privateConversations.push(PrivateConversation.decode(reader, reader.uint32()));
            break;
          case 2:
            message.groupConversations.push(GroupConversation.decode(reader, reader.uint32()));
            break;
          default:
            reader.skipType(tag & 7);
            break;
        }
      }
      return message;
    }
  };

  function createBaseGroupInvitation() {
    return {
      id: undefined,
      creationDate: undefined,
      content: undefined,
      status: undefined,
      expirationDate: undefined,
      groupId: undefined,
      inviterId: undefined,
      inviteeId: undefined
    };
  }
  var GroupInvitation = {
    encode: function encode(message, writer) {
      if (writer === void 0) {
        writer = _m0.Writer.create();
      }
      if (message.id !== undefined) {
        writer.uint32(8).int64(message.id);
      }
      if (message.creationDate !== undefined) {
        writer.uint32(16).int64(message.creationDate);
      }
      if (message.content !== undefined) {
        writer.uint32(26).string(message.content);
      }
      if (message.status !== undefined) {
        writer.uint32(32).int32(message.status);
      }
      if (message.expirationDate !== undefined) {
        writer.uint32(40).int64(message.expirationDate);
      }
      if (message.groupId !== undefined) {
        writer.uint32(48).int64(message.groupId);
      }
      if (message.inviterId !== undefined) {
        writer.uint32(56).int64(message.inviterId);
      }
      if (message.inviteeId !== undefined) {
        writer.uint32(64).int64(message.inviteeId);
      }
      return writer;
    },
    decode: function decode(input, length) {
      var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
      var end = length === undefined ? reader.len : reader.pos + length;
      var message = createBaseGroupInvitation();
      while (reader.pos < end) {
        var tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            message.id = longToString$19(reader.int64());
            break;
          case 2:
            message.creationDate = longToString$19(reader.int64());
            break;
          case 3:
            message.content = reader.string();
            break;
          case 4:
            message.status = reader.int32();
            break;
          case 5:
            message.expirationDate = longToString$19(reader.int64());
            break;
          case 6:
            message.groupId = longToString$19(reader.int64());
            break;
          case 7:
            message.inviterId = longToString$19(reader.int64());
            break;
          case 8:
            message.inviteeId = longToString$19(reader.int64());
            break;
          default:
            reader.skipType(tag & 7);
            break;
        }
      }
      return message;
    }
  };
  function longToString$19(long) {
    return long.toString();
  }
  if (_m0.util.Long !== long) {
    _m0.util.Long = long;
    _m0.configure();
  }

  function createBaseGroupInvitationsWithVersion() {
    return {
      groupInvitations: [],
      lastUpdatedDate: undefined
    };
  }
  var GroupInvitationsWithVersion = {
    encode: function encode(message, writer) {
      if (writer === void 0) {
        writer = _m0.Writer.create();
      }
      for (var _i = 0, _a = message.groupInvitations; _i < _a.length; _i++) {
        var v = _a[_i];
        GroupInvitation.encode(v, writer.uint32(10).fork()).ldelim();
      }
      if (message.lastUpdatedDate !== undefined) {
        writer.uint32(16).int64(message.lastUpdatedDate);
      }
      return writer;
    },
    decode: function decode(input, length) {
      var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
      var end = length === undefined ? reader.len : reader.pos + length;
      var message = createBaseGroupInvitationsWithVersion();
      while (reader.pos < end) {
        var tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            message.groupInvitations.push(GroupInvitation.decode(reader, reader.uint32()));
            break;
          case 2:
            message.lastUpdatedDate = longToString$18(reader.int64());
            break;
          default:
            reader.skipType(tag & 7);
            break;
        }
      }
      return message;
    }
  };
  function longToString$18(long) {
    return long.toString();
  }
  if (_m0.util.Long !== long) {
    _m0.util.Long = long;
    _m0.configure();
  }

  function createBaseGroupJoinQuestionsAnswerResult() {
    return {
      score: 0,
      questionIds: [],
      joined: false
    };
  }
  var GroupJoinQuestionsAnswerResult = {
    encode: function encode(message, writer) {
      if (writer === void 0) {
        writer = _m0.Writer.create();
      }
      if (message.score !== 0) {
        writer.uint32(8).int32(message.score);
      }
      writer.uint32(18).fork();
      for (var _i = 0, _a = message.questionIds; _i < _a.length; _i++) {
        var v = _a[_i];
        writer.int64(v);
      }
      writer.ldelim();
      if (message.joined === true) {
        writer.uint32(24).bool(message.joined);
      }
      return writer;
    },
    decode: function decode(input, length) {
      var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
      var end = length === undefined ? reader.len : reader.pos + length;
      var message = createBaseGroupJoinQuestionsAnswerResult();
      while (reader.pos < end) {
        var tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            message.score = reader.int32();
            break;
          case 2:
            if ((tag & 7) === 2) {
              var end2 = reader.uint32() + reader.pos;
              while (reader.pos < end2) {
                message.questionIds.push(longToString$17(reader.int64()));
              }
            } else {
              message.questionIds.push(longToString$17(reader.int64()));
            }
            break;
          case 3:
            message.joined = reader.bool();
            break;
          default:
            reader.skipType(tag & 7);
            break;
        }
      }
      return message;
    }
  };
  function longToString$17(long) {
    return long.toString();
  }
  if (_m0.util.Long !== long) {
    _m0.util.Long = long;
    _m0.configure();
  }

  function createBaseGroupJoinQuestion() {
    return {
      id: undefined,
      groupId: undefined,
      question: undefined,
      answers: [],
      score: undefined
    };
  }
  var GroupJoinQuestion = {
    encode: function encode(message, writer) {
      if (writer === void 0) {
        writer = _m0.Writer.create();
      }
      if (message.id !== undefined) {
        writer.uint32(8).int64(message.id);
      }
      if (message.groupId !== undefined) {
        writer.uint32(16).int64(message.groupId);
      }
      if (message.question !== undefined) {
        writer.uint32(26).string(message.question);
      }
      for (var _i = 0, _a = message.answers; _i < _a.length; _i++) {
        var v = _a[_i];
        writer.uint32(34).string(v);
      }
      if (message.score !== undefined) {
        writer.uint32(40).int32(message.score);
      }
      return writer;
    },
    decode: function decode(input, length) {
      var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
      var end = length === undefined ? reader.len : reader.pos + length;
      var message = createBaseGroupJoinQuestion();
      while (reader.pos < end) {
        var tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            message.id = longToString$16(reader.int64());
            break;
          case 2:
            message.groupId = longToString$16(reader.int64());
            break;
          case 3:
            message.question = reader.string();
            break;
          case 4:
            message.answers.push(reader.string());
            break;
          case 5:
            message.score = reader.int32();
            break;
          default:
            reader.skipType(tag & 7);
            break;
        }
      }
      return message;
    }
  };
  function longToString$16(long) {
    return long.toString();
  }
  if (_m0.util.Long !== long) {
    _m0.util.Long = long;
    _m0.configure();
  }

  function createBaseGroupJoinQuestionsWithVersion() {
    return {
      groupJoinQuestions: [],
      lastUpdatedDate: undefined
    };
  }
  var GroupJoinQuestionsWithVersion = {
    encode: function encode(message, writer) {
      if (writer === void 0) {
        writer = _m0.Writer.create();
      }
      for (var _i = 0, _a = message.groupJoinQuestions; _i < _a.length; _i++) {
        var v = _a[_i];
        GroupJoinQuestion.encode(v, writer.uint32(10).fork()).ldelim();
      }
      if (message.lastUpdatedDate !== undefined) {
        writer.uint32(16).int64(message.lastUpdatedDate);
      }
      return writer;
    },
    decode: function decode(input, length) {
      var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
      var end = length === undefined ? reader.len : reader.pos + length;
      var message = createBaseGroupJoinQuestionsWithVersion();
      while (reader.pos < end) {
        var tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            message.groupJoinQuestions.push(GroupJoinQuestion.decode(reader, reader.uint32()));
            break;
          case 2:
            message.lastUpdatedDate = longToString$15(reader.int64());
            break;
          default:
            reader.skipType(tag & 7);
            break;
        }
      }
      return message;
    }
  };
  function longToString$15(long) {
    return long.toString();
  }
  if (_m0.util.Long !== long) {
    _m0.util.Long = long;
    _m0.configure();
  }

  function createBaseGroupJoinRequest() {
    return {
      id: undefined,
      creationDate: undefined,
      content: undefined,
      status: undefined,
      expirationDate: undefined,
      groupId: undefined,
      requesterId: undefined,
      responderId: undefined
    };
  }
  var GroupJoinRequest = {
    encode: function encode(message, writer) {
      if (writer === void 0) {
        writer = _m0.Writer.create();
      }
      if (message.id !== undefined) {
        writer.uint32(8).int64(message.id);
      }
      if (message.creationDate !== undefined) {
        writer.uint32(16).int64(message.creationDate);
      }
      if (message.content !== undefined) {
        writer.uint32(26).string(message.content);
      }
      if (message.status !== undefined) {
        writer.uint32(32).int32(message.status);
      }
      if (message.expirationDate !== undefined) {
        writer.uint32(40).int64(message.expirationDate);
      }
      if (message.groupId !== undefined) {
        writer.uint32(48).int64(message.groupId);
      }
      if (message.requesterId !== undefined) {
        writer.uint32(56).int64(message.requesterId);
      }
      if (message.responderId !== undefined) {
        writer.uint32(64).int64(message.responderId);
      }
      return writer;
    },
    decode: function decode(input, length) {
      var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
      var end = length === undefined ? reader.len : reader.pos + length;
      var message = createBaseGroupJoinRequest();
      while (reader.pos < end) {
        var tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            message.id = longToString$14(reader.int64());
            break;
          case 2:
            message.creationDate = longToString$14(reader.int64());
            break;
          case 3:
            message.content = reader.string();
            break;
          case 4:
            message.status = reader.int32();
            break;
          case 5:
            message.expirationDate = longToString$14(reader.int64());
            break;
          case 6:
            message.groupId = longToString$14(reader.int64());
            break;
          case 7:
            message.requesterId = longToString$14(reader.int64());
            break;
          case 8:
            message.responderId = longToString$14(reader.int64());
            break;
          default:
            reader.skipType(tag & 7);
            break;
        }
      }
      return message;
    }
  };
  function longToString$14(long) {
    return long.toString();
  }
  if (_m0.util.Long !== long) {
    _m0.util.Long = long;
    _m0.configure();
  }

  function createBaseGroupJoinRequestsWithVersion() {
    return {
      groupJoinRequests: [],
      lastUpdatedDate: undefined
    };
  }
  var GroupJoinRequestsWithVersion = {
    encode: function encode(message, writer) {
      if (writer === void 0) {
        writer = _m0.Writer.create();
      }
      for (var _i = 0, _a = message.groupJoinRequests; _i < _a.length; _i++) {
        var v = _a[_i];
        GroupJoinRequest.encode(v, writer.uint32(10).fork()).ldelim();
      }
      if (message.lastUpdatedDate !== undefined) {
        writer.uint32(16).int64(message.lastUpdatedDate);
      }
      return writer;
    },
    decode: function decode(input, length) {
      var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
      var end = length === undefined ? reader.len : reader.pos + length;
      var message = createBaseGroupJoinRequestsWithVersion();
      while (reader.pos < end) {
        var tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            message.groupJoinRequests.push(GroupJoinRequest.decode(reader, reader.uint32()));
            break;
          case 2:
            message.lastUpdatedDate = longToString$13(reader.int64());
            break;
          default:
            reader.skipType(tag & 7);
            break;
        }
      }
      return message;
    }
  };
  function longToString$13(long) {
    return long.toString();
  }
  if (_m0.util.Long !== long) {
    _m0.util.Long = long;
    _m0.configure();
  }

  var DESCRIPTORS$4 = descriptors;
  var FUNCTION_NAME_EXISTS = functionName.EXISTS;
  var uncurryThis$d = functionUncurryThis;
  var defineBuiltInAccessor$3 = defineBuiltInAccessor$8;

  var FunctionPrototype = Function.prototype;
  var functionToString = uncurryThis$d(FunctionPrototype.toString);
  var nameRE = /function\b(?:\s|\/\*[\S\s]*?\*\/|\/\/[^\n\r]*[\n\r]+)*([^\s(/]*)/;
  var regExpExec$1 = uncurryThis$d(nameRE.exec);
  var NAME = 'name';

  // Function instances `.name` property
  // https://tc39.es/ecma262/#sec-function-instances-name
  if (DESCRIPTORS$4 && !FUNCTION_NAME_EXISTS) {
    defineBuiltInAccessor$3(FunctionPrototype, NAME, {
      configurable: true,
      get: function () {
        try {
          return regExpExec$1(nameRE, functionToString(this))[1];
        } catch (error) {
          return '';
        }
      }
    });
  }

  function createBaseGroupMember() {
    return {
      groupId: undefined,
      userId: undefined,
      name: undefined,
      role: undefined,
      joinDate: undefined,
      muteEndDate: undefined,
      userStatus: undefined,
      usingDeviceTypes: []
    };
  }
  var GroupMember = {
    encode: function encode(message, writer) {
      if (writer === void 0) {
        writer = _m0.Writer.create();
      }
      if (message.groupId !== undefined) {
        writer.uint32(8).int64(message.groupId);
      }
      if (message.userId !== undefined) {
        writer.uint32(16).int64(message.userId);
      }
      if (message.name !== undefined) {
        writer.uint32(26).string(message.name);
      }
      if (message.role !== undefined) {
        writer.uint32(32).int32(message.role);
      }
      if (message.joinDate !== undefined) {
        writer.uint32(40).int64(message.joinDate);
      }
      if (message.muteEndDate !== undefined) {
        writer.uint32(48).int64(message.muteEndDate);
      }
      if (message.userStatus !== undefined) {
        writer.uint32(56).int32(message.userStatus);
      }
      writer.uint32(66).fork();
      for (var _i = 0, _a = message.usingDeviceTypes; _i < _a.length; _i++) {
        var v = _a[_i];
        writer.int32(v);
      }
      writer.ldelim();
      return writer;
    },
    decode: function decode(input, length) {
      var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
      var end = length === undefined ? reader.len : reader.pos + length;
      var message = createBaseGroupMember();
      while (reader.pos < end) {
        var tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            message.groupId = longToString$12(reader.int64());
            break;
          case 2:
            message.userId = longToString$12(reader.int64());
            break;
          case 3:
            message.name = reader.string();
            break;
          case 4:
            message.role = reader.int32();
            break;
          case 5:
            message.joinDate = longToString$12(reader.int64());
            break;
          case 6:
            message.muteEndDate = longToString$12(reader.int64());
            break;
          case 7:
            message.userStatus = reader.int32();
            break;
          case 8:
            if ((tag & 7) === 2) {
              var end2 = reader.uint32() + reader.pos;
              while (reader.pos < end2) {
                message.usingDeviceTypes.push(reader.int32());
              }
            } else {
              message.usingDeviceTypes.push(reader.int32());
            }
            break;
          default:
            reader.skipType(tag & 7);
            break;
        }
      }
      return message;
    }
  };
  function longToString$12(long) {
    return long.toString();
  }
  if (_m0.util.Long !== long) {
    _m0.util.Long = long;
    _m0.configure();
  }

  function createBaseGroupMembersWithVersion() {
    return {
      groupMembers: [],
      lastUpdatedDate: undefined
    };
  }
  var GroupMembersWithVersion = {
    encode: function encode(message, writer) {
      if (writer === void 0) {
        writer = _m0.Writer.create();
      }
      for (var _i = 0, _a = message.groupMembers; _i < _a.length; _i++) {
        var v = _a[_i];
        GroupMember.encode(v, writer.uint32(10).fork()).ldelim();
      }
      if (message.lastUpdatedDate !== undefined) {
        writer.uint32(16).int64(message.lastUpdatedDate);
      }
      return writer;
    },
    decode: function decode(input, length) {
      var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
      var end = length === undefined ? reader.len : reader.pos + length;
      var message = createBaseGroupMembersWithVersion();
      while (reader.pos < end) {
        var tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            message.groupMembers.push(GroupMember.decode(reader, reader.uint32()));
            break;
          case 2:
            message.lastUpdatedDate = longToString$11(reader.int64());
            break;
          default:
            reader.skipType(tag & 7);
            break;
        }
      }
      return message;
    }
  };
  function longToString$11(long) {
    return long.toString();
  }
  if (_m0.util.Long !== long) {
    _m0.util.Long = long;
    _m0.configure();
  }

  function createBaseGroup() {
    return {
      id: undefined,
      typeId: undefined,
      creatorId: undefined,
      ownerId: undefined,
      name: undefined,
      intro: undefined,
      announcement: undefined,
      creationDate: undefined,
      lastUpdatedDate: undefined,
      muteEndDate: undefined,
      active: undefined
    };
  }
  var Group = {
    encode: function encode(message, writer) {
      if (writer === void 0) {
        writer = _m0.Writer.create();
      }
      if (message.id !== undefined) {
        writer.uint32(8).int64(message.id);
      }
      if (message.typeId !== undefined) {
        writer.uint32(16).int64(message.typeId);
      }
      if (message.creatorId !== undefined) {
        writer.uint32(24).int64(message.creatorId);
      }
      if (message.ownerId !== undefined) {
        writer.uint32(32).int64(message.ownerId);
      }
      if (message.name !== undefined) {
        writer.uint32(42).string(message.name);
      }
      if (message.intro !== undefined) {
        writer.uint32(50).string(message.intro);
      }
      if (message.announcement !== undefined) {
        writer.uint32(58).string(message.announcement);
      }
      if (message.creationDate !== undefined) {
        writer.uint32(64).int64(message.creationDate);
      }
      if (message.lastUpdatedDate !== undefined) {
        writer.uint32(72).int64(message.lastUpdatedDate);
      }
      if (message.muteEndDate !== undefined) {
        writer.uint32(80).int64(message.muteEndDate);
      }
      if (message.active !== undefined) {
        writer.uint32(88).bool(message.active);
      }
      return writer;
    },
    decode: function decode(input, length) {
      var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
      var end = length === undefined ? reader.len : reader.pos + length;
      var message = createBaseGroup();
      while (reader.pos < end) {
        var tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            message.id = longToString$10(reader.int64());
            break;
          case 2:
            message.typeId = longToString$10(reader.int64());
            break;
          case 3:
            message.creatorId = longToString$10(reader.int64());
            break;
          case 4:
            message.ownerId = longToString$10(reader.int64());
            break;
          case 5:
            message.name = reader.string();
            break;
          case 6:
            message.intro = reader.string();
            break;
          case 7:
            message.announcement = reader.string();
            break;
          case 8:
            message.creationDate = longToString$10(reader.int64());
            break;
          case 9:
            message.lastUpdatedDate = longToString$10(reader.int64());
            break;
          case 10:
            message.muteEndDate = longToString$10(reader.int64());
            break;
          case 11:
            message.active = reader.bool();
            break;
          default:
            reader.skipType(tag & 7);
            break;
        }
      }
      return message;
    }
  };
  function longToString$10(long) {
    return long.toString();
  }
  if (_m0.util.Long !== long) {
    _m0.util.Long = long;
    _m0.configure();
  }

  function createBaseGroupsWithVersion() {
    return {
      groups: [],
      lastUpdatedDate: undefined
    };
  }
  var GroupsWithVersion = {
    encode: function encode(message, writer) {
      if (writer === void 0) {
        writer = _m0.Writer.create();
      }
      for (var _i = 0, _a = message.groups; _i < _a.length; _i++) {
        var v = _a[_i];
        Group.encode(v, writer.uint32(10).fork()).ldelim();
      }
      if (message.lastUpdatedDate !== undefined) {
        writer.uint32(16).int64(message.lastUpdatedDate);
      }
      return writer;
    },
    decode: function decode(input, length) {
      var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
      var end = length === undefined ? reader.len : reader.pos + length;
      var message = createBaseGroupsWithVersion();
      while (reader.pos < end) {
        var tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            message.groups.push(Group.decode(reader, reader.uint32()));
            break;
          case 2:
            message.lastUpdatedDate = longToString$$(reader.int64());
            break;
          default:
            reader.skipType(tag & 7);
            break;
        }
      }
      return message;
    }
  };
  function longToString$$(long) {
    return long.toString();
  }
  if (_m0.util.Long !== long) {
    _m0.util.Long = long;
    _m0.configure();
  }

  function createBaseMessage() {
    return {
      id: undefined,
      deliveryDate: undefined,
      modificationDate: undefined,
      text: undefined,
      senderId: undefined,
      groupId: undefined,
      isSystemMessage: undefined,
      recipientId: undefined,
      records: [],
      sequenceId: undefined,
      preMessageId: undefined
    };
  }
  var Message = {
    encode: function encode(message, writer) {
      if (writer === void 0) {
        writer = _m0.Writer.create();
      }
      if (message.id !== undefined) {
        writer.uint32(8).int64(message.id);
      }
      if (message.deliveryDate !== undefined) {
        writer.uint32(16).int64(message.deliveryDate);
      }
      if (message.modificationDate !== undefined) {
        writer.uint32(24).int64(message.modificationDate);
      }
      if (message.text !== undefined) {
        writer.uint32(34).string(message.text);
      }
      if (message.senderId !== undefined) {
        writer.uint32(40).int64(message.senderId);
      }
      if (message.groupId !== undefined) {
        writer.uint32(48).int64(message.groupId);
      }
      if (message.isSystemMessage !== undefined) {
        writer.uint32(56).bool(message.isSystemMessage);
      }
      if (message.recipientId !== undefined) {
        writer.uint32(64).int64(message.recipientId);
      }
      for (var _i = 0, _a = message.records; _i < _a.length; _i++) {
        var v = _a[_i];
        writer.uint32(74).bytes(v);
      }
      if (message.sequenceId !== undefined) {
        writer.uint32(80).int32(message.sequenceId);
      }
      if (message.preMessageId !== undefined) {
        writer.uint32(88).int64(message.preMessageId);
      }
      return writer;
    },
    decode: function decode(input, length) {
      var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
      var end = length === undefined ? reader.len : reader.pos + length;
      var message = createBaseMessage();
      while (reader.pos < end) {
        var tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            message.id = longToString$_(reader.int64());
            break;
          case 2:
            message.deliveryDate = longToString$_(reader.int64());
            break;
          case 3:
            message.modificationDate = longToString$_(reader.int64());
            break;
          case 4:
            message.text = reader.string();
            break;
          case 5:
            message.senderId = longToString$_(reader.int64());
            break;
          case 6:
            message.groupId = longToString$_(reader.int64());
            break;
          case 7:
            message.isSystemMessage = reader.bool();
            break;
          case 8:
            message.recipientId = longToString$_(reader.int64());
            break;
          case 9:
            message.records.push(reader.bytes());
            break;
          case 10:
            message.sequenceId = reader.int32();
            break;
          case 11:
            message.preMessageId = longToString$_(reader.int64());
            break;
          default:
            reader.skipType(tag & 7);
            break;
        }
      }
      return message;
    }
  };
  function longToString$_(long) {
    return long.toString();
  }
  if (_m0.util.Long !== long) {
    _m0.util.Long = long;
    _m0.configure();
  }

  function createBaseMessages() {
    return {
      messages: []
    };
  }
  var Messages = {
    encode: function encode(message, writer) {
      if (writer === void 0) {
        writer = _m0.Writer.create();
      }
      for (var _i = 0, _a = message.messages; _i < _a.length; _i++) {
        var v = _a[_i];
        Message.encode(v, writer.uint32(10).fork()).ldelim();
      }
      return writer;
    },
    decode: function decode(input, length) {
      var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
      var end = length === undefined ? reader.len : reader.pos + length;
      var message = createBaseMessages();
      while (reader.pos < end) {
        var tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            message.messages.push(Message.decode(reader, reader.uint32()));
            break;
          default:
            reader.skipType(tag & 7);
            break;
        }
      }
      return message;
    }
  };

  function createBaseMessagesWithTotal() {
    return {
      total: 0,
      isGroupMessage: false,
      fromId: "0",
      messages: []
    };
  }
  var MessagesWithTotal = {
    encode: function encode(message, writer) {
      if (writer === void 0) {
        writer = _m0.Writer.create();
      }
      if (message.total !== 0) {
        writer.uint32(8).int32(message.total);
      }
      if (message.isGroupMessage === true) {
        writer.uint32(16).bool(message.isGroupMessage);
      }
      if (message.fromId !== "0") {
        writer.uint32(24).int64(message.fromId);
      }
      for (var _i = 0, _a = message.messages; _i < _a.length; _i++) {
        var v = _a[_i];
        Message.encode(v, writer.uint32(34).fork()).ldelim();
      }
      return writer;
    },
    decode: function decode(input, length) {
      var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
      var end = length === undefined ? reader.len : reader.pos + length;
      var message = createBaseMessagesWithTotal();
      while (reader.pos < end) {
        var tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            message.total = reader.int32();
            break;
          case 2:
            message.isGroupMessage = reader.bool();
            break;
          case 3:
            message.fromId = longToString$Z(reader.int64());
            break;
          case 4:
            message.messages.push(Message.decode(reader, reader.uint32()));
            break;
          default:
            reader.skipType(tag & 7);
            break;
        }
      }
      return message;
    }
  };
  function longToString$Z(long) {
    return long.toString();
  }
  if (_m0.util.Long !== long) {
    _m0.util.Long = long;
    _m0.configure();
  }

  function createBaseMessagesWithTotalList() {
    return {
      messagesWithTotalList: []
    };
  }
  var MessagesWithTotalList = {
    encode: function encode(message, writer) {
      if (writer === void 0) {
        writer = _m0.Writer.create();
      }
      for (var _i = 0, _a = message.messagesWithTotalList; _i < _a.length; _i++) {
        var v = _a[_i];
        MessagesWithTotal.encode(v, writer.uint32(10).fork()).ldelim();
      }
      return writer;
    },
    decode: function decode(input, length) {
      var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
      var end = length === undefined ? reader.len : reader.pos + length;
      var message = createBaseMessagesWithTotalList();
      while (reader.pos < end) {
        var tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            message.messagesWithTotalList.push(MessagesWithTotal.decode(reader, reader.uint32()));
            break;
          default:
            reader.skipType(tag & 7);
            break;
        }
      }
      return message;
    }
  };

  function createBaseStorageResourceInfo() {
    return {
      idNum: undefined,
      idStr: undefined,
      name: undefined,
      mediaType: undefined,
      uploaderId: "0",
      creationDate: "0"
    };
  }
  var StorageResourceInfo = {
    encode: function encode(message, writer) {
      if (writer === void 0) {
        writer = _m0.Writer.create();
      }
      if (message.idNum !== undefined) {
        writer.uint32(8).int64(message.idNum);
      }
      if (message.idStr !== undefined) {
        writer.uint32(18).string(message.idStr);
      }
      if (message.name !== undefined) {
        writer.uint32(26).string(message.name);
      }
      if (message.mediaType !== undefined) {
        writer.uint32(34).string(message.mediaType);
      }
      if (message.uploaderId !== "0") {
        writer.uint32(40).int64(message.uploaderId);
      }
      if (message.creationDate !== "0") {
        writer.uint32(48).int64(message.creationDate);
      }
      return writer;
    },
    decode: function decode(input, length) {
      var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
      var end = length === undefined ? reader.len : reader.pos + length;
      var message = createBaseStorageResourceInfo();
      while (reader.pos < end) {
        var tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            message.idNum = longToString$Y(reader.int64());
            break;
          case 2:
            message.idStr = reader.string();
            break;
          case 3:
            message.name = reader.string();
            break;
          case 4:
            message.mediaType = reader.string();
            break;
          case 5:
            message.uploaderId = longToString$Y(reader.int64());
            break;
          case 6:
            message.creationDate = longToString$Y(reader.int64());
            break;
          default:
            reader.skipType(tag & 7);
            break;
        }
      }
      return message;
    }
  };
  function longToString$Y(long) {
    return long.toString();
  }
  if (_m0.util.Long !== long) {
    _m0.util.Long = long;
    _m0.configure();
  }

  function createBaseStorageResourceInfos() {
    return {
      infos: []
    };
  }
  var StorageResourceInfos = {
    encode: function encode(message, writer) {
      if (writer === void 0) {
        writer = _m0.Writer.create();
      }
      for (var _i = 0, _a = message.infos; _i < _a.length; _i++) {
        var v = _a[_i];
        StorageResourceInfo.encode(v, writer.uint32(10).fork()).ldelim();
      }
      return writer;
    },
    decode: function decode(input, length) {
      var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
      var end = length === undefined ? reader.len : reader.pos + length;
      var message = createBaseStorageResourceInfos();
      while (reader.pos < end) {
        var tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            message.infos.push(StorageResourceInfo.decode(reader, reader.uint32()));
            break;
          default:
            reader.skipType(tag & 7);
            break;
        }
      }
      return message;
    }
  };

  function createBaseUserInfo() {
    return {
      id: undefined,
      name: undefined,
      intro: undefined,
      profilePicture: undefined,
      profileAccessStrategy: undefined,
      registrationDate: undefined,
      lastUpdatedDate: undefined,
      active: undefined
    };
  }
  var UserInfo = {
    encode: function encode(message, writer) {
      if (writer === void 0) {
        writer = _m0.Writer.create();
      }
      if (message.id !== undefined) {
        writer.uint32(8).int64(message.id);
      }
      if (message.name !== undefined) {
        writer.uint32(18).string(message.name);
      }
      if (message.intro !== undefined) {
        writer.uint32(26).string(message.intro);
      }
      if (message.profilePicture !== undefined) {
        writer.uint32(34).string(message.profilePicture);
      }
      if (message.profileAccessStrategy !== undefined) {
        writer.uint32(40).int32(message.profileAccessStrategy);
      }
      if (message.registrationDate !== undefined) {
        writer.uint32(48).int64(message.registrationDate);
      }
      if (message.lastUpdatedDate !== undefined) {
        writer.uint32(56).int64(message.lastUpdatedDate);
      }
      if (message.active !== undefined) {
        writer.uint32(64).bool(message.active);
      }
      return writer;
    },
    decode: function decode(input, length) {
      var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
      var end = length === undefined ? reader.len : reader.pos + length;
      var message = createBaseUserInfo();
      while (reader.pos < end) {
        var tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            message.id = longToString$X(reader.int64());
            break;
          case 2:
            message.name = reader.string();
            break;
          case 3:
            message.intro = reader.string();
            break;
          case 4:
            message.profilePicture = reader.string();
            break;
          case 5:
            message.profileAccessStrategy = reader.int32();
            break;
          case 6:
            message.registrationDate = longToString$X(reader.int64());
            break;
          case 7:
            message.lastUpdatedDate = longToString$X(reader.int64());
            break;
          case 8:
            message.active = reader.bool();
            break;
          default:
            reader.skipType(tag & 7);
            break;
        }
      }
      return message;
    }
  };
  function longToString$X(long) {
    return long.toString();
  }
  if (_m0.util.Long !== long) {
    _m0.util.Long = long;
    _m0.configure();
  }

  function createBaseUserLocation() {
    return {
      latitude: 0,
      longitude: 0,
      timestamp: undefined,
      details: {}
    };
  }
  var UserLocation$1 = {
    encode: function encode(message, writer) {
      if (writer === void 0) {
        writer = _m0.Writer.create();
      }
      if (message.latitude !== 0) {
        writer.uint32(13).float(message.latitude);
      }
      if (message.longitude !== 0) {
        writer.uint32(21).float(message.longitude);
      }
      if (message.timestamp !== undefined) {
        writer.uint32(24).int64(message.timestamp);
      }
      Object.entries(message.details).forEach(function (_a) {
        var key = _a[0],
          value = _a[1];
        UserLocation_DetailsEntry.encode({
          key: key,
          value: value
        }, writer.uint32(34).fork()).ldelim();
      });
      return writer;
    },
    decode: function decode(input, length) {
      var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
      var end = length === undefined ? reader.len : reader.pos + length;
      var message = createBaseUserLocation();
      while (reader.pos < end) {
        var tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            message.latitude = reader.float();
            break;
          case 2:
            message.longitude = reader.float();
            break;
          case 3:
            message.timestamp = longToString$W(reader.int64());
            break;
          case 4:
            var entry4 = UserLocation_DetailsEntry.decode(reader, reader.uint32());
            if (entry4.value !== undefined) {
              message.details[entry4.key] = entry4.value;
            }
            break;
          default:
            reader.skipType(tag & 7);
            break;
        }
      }
      return message;
    }
  };
  function createBaseUserLocation_DetailsEntry() {
    return {
      key: "",
      value: ""
    };
  }
  var UserLocation_DetailsEntry = {
    encode: function encode(message, writer) {
      if (writer === void 0) {
        writer = _m0.Writer.create();
      }
      if (message.key !== "") {
        writer.uint32(10).string(message.key);
      }
      if (message.value !== "") {
        writer.uint32(18).string(message.value);
      }
      return writer;
    },
    decode: function decode(input, length) {
      var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
      var end = length === undefined ? reader.len : reader.pos + length;
      var message = createBaseUserLocation_DetailsEntry();
      while (reader.pos < end) {
        var tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            message.key = reader.string();
            break;
          case 2:
            message.value = reader.string();
            break;
          default:
            reader.skipType(tag & 7);
            break;
        }
      }
      return message;
    }
  };
  function longToString$W(long) {
    return long.toString();
  }
  if (_m0.util.Long !== long) {
    _m0.util.Long = long;
    _m0.configure();
  }

  function createBaseNearbyUser() {
    return {
      userId: "0",
      deviceType: undefined,
      info: undefined,
      distance: undefined,
      location: undefined
    };
  }
  var NearbyUser = {
    encode: function encode(message, writer) {
      if (writer === void 0) {
        writer = _m0.Writer.create();
      }
      if (message.userId !== "0") {
        writer.uint32(8).int64(message.userId);
      }
      if (message.deviceType !== undefined) {
        writer.uint32(16).int32(message.deviceType);
      }
      if (message.info !== undefined) {
        UserInfo.encode(message.info, writer.uint32(26).fork()).ldelim();
      }
      if (message.distance !== undefined) {
        writer.uint32(32).int32(message.distance);
      }
      if (message.location !== undefined) {
        UserLocation$1.encode(message.location, writer.uint32(42).fork()).ldelim();
      }
      return writer;
    },
    decode: function decode(input, length) {
      var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
      var end = length === undefined ? reader.len : reader.pos + length;
      var message = createBaseNearbyUser();
      while (reader.pos < end) {
        var tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            message.userId = longToString$V(reader.int64());
            break;
          case 2:
            message.deviceType = reader.int32();
            break;
          case 3:
            message.info = UserInfo.decode(reader, reader.uint32());
            break;
          case 4:
            message.distance = reader.int32();
            break;
          case 5:
            message.location = UserLocation$1.decode(reader, reader.uint32());
            break;
          default:
            reader.skipType(tag & 7);
            break;
        }
      }
      return message;
    }
  };
  function longToString$V(long) {
    return long.toString();
  }
  if (_m0.util.Long !== long) {
    _m0.util.Long = long;
    _m0.configure();
  }

  function createBaseNearbyUsers() {
    return {
      nearbyUsers: []
    };
  }
  var NearbyUsers = {
    encode: function encode(message, writer) {
      if (writer === void 0) {
        writer = _m0.Writer.create();
      }
      for (var _i = 0, _a = message.nearbyUsers; _i < _a.length; _i++) {
        var v = _a[_i];
        NearbyUser.encode(v, writer.uint32(10).fork()).ldelim();
      }
      return writer;
    },
    decode: function decode(input, length) {
      var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
      var end = length === undefined ? reader.len : reader.pos + length;
      var message = createBaseNearbyUsers();
      while (reader.pos < end) {
        var tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            message.nearbyUsers.push(NearbyUser.decode(reader, reader.uint32()));
            break;
          default:
            reader.skipType(tag & 7);
            break;
        }
      }
      return message;
    }
  };

  function createBaseUserFriendRequest() {
    return {
      id: undefined,
      creationDate: undefined,
      content: undefined,
      requestStatus: undefined,
      reason: undefined,
      expirationDate: undefined,
      requesterId: undefined,
      recipientId: undefined
    };
  }
  var UserFriendRequest = {
    encode: function encode(message, writer) {
      if (writer === void 0) {
        writer = _m0.Writer.create();
      }
      if (message.id !== undefined) {
        writer.uint32(8).int64(message.id);
      }
      if (message.creationDate !== undefined) {
        writer.uint32(16).int64(message.creationDate);
      }
      if (message.content !== undefined) {
        writer.uint32(26).string(message.content);
      }
      if (message.requestStatus !== undefined) {
        writer.uint32(32).int32(message.requestStatus);
      }
      if (message.reason !== undefined) {
        writer.uint32(42).string(message.reason);
      }
      if (message.expirationDate !== undefined) {
        writer.uint32(48).int64(message.expirationDate);
      }
      if (message.requesterId !== undefined) {
        writer.uint32(56).int64(message.requesterId);
      }
      if (message.recipientId !== undefined) {
        writer.uint32(64).int64(message.recipientId);
      }
      return writer;
    },
    decode: function decode(input, length) {
      var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
      var end = length === undefined ? reader.len : reader.pos + length;
      var message = createBaseUserFriendRequest();
      while (reader.pos < end) {
        var tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            message.id = longToString$U(reader.int64());
            break;
          case 2:
            message.creationDate = longToString$U(reader.int64());
            break;
          case 3:
            message.content = reader.string();
            break;
          case 4:
            message.requestStatus = reader.int32();
            break;
          case 5:
            message.reason = reader.string();
            break;
          case 6:
            message.expirationDate = longToString$U(reader.int64());
            break;
          case 7:
            message.requesterId = longToString$U(reader.int64());
            break;
          case 8:
            message.recipientId = longToString$U(reader.int64());
            break;
          default:
            reader.skipType(tag & 7);
            break;
        }
      }
      return message;
    }
  };
  function longToString$U(long) {
    return long.toString();
  }
  if (_m0.util.Long !== long) {
    _m0.util.Long = long;
    _m0.configure();
  }

  function createBaseUserFriendRequestsWithVersion() {
    return {
      userFriendRequests: [],
      lastUpdatedDate: undefined
    };
  }
  var UserFriendRequestsWithVersion = {
    encode: function encode(message, writer) {
      if (writer === void 0) {
        writer = _m0.Writer.create();
      }
      for (var _i = 0, _a = message.userFriendRequests; _i < _a.length; _i++) {
        var v = _a[_i];
        UserFriendRequest.encode(v, writer.uint32(10).fork()).ldelim();
      }
      if (message.lastUpdatedDate !== undefined) {
        writer.uint32(16).int64(message.lastUpdatedDate);
      }
      return writer;
    },
    decode: function decode(input, length) {
      var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
      var end = length === undefined ? reader.len : reader.pos + length;
      var message = createBaseUserFriendRequestsWithVersion();
      while (reader.pos < end) {
        var tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            message.userFriendRequests.push(UserFriendRequest.decode(reader, reader.uint32()));
            break;
          case 2:
            message.lastUpdatedDate = longToString$T(reader.int64());
            break;
          default:
            reader.skipType(tag & 7);
            break;
        }
      }
      return message;
    }
  };
  function longToString$T(long) {
    return long.toString();
  }
  if (_m0.util.Long !== long) {
    _m0.util.Long = long;
    _m0.configure();
  }

  function createBaseUserInfosWithVersion() {
    return {
      userInfos: [],
      lastUpdatedDate: undefined
    };
  }
  var UserInfosWithVersion = {
    encode: function encode(message, writer) {
      if (writer === void 0) {
        writer = _m0.Writer.create();
      }
      for (var _i = 0, _a = message.userInfos; _i < _a.length; _i++) {
        var v = _a[_i];
        UserInfo.encode(v, writer.uint32(10).fork()).ldelim();
      }
      if (message.lastUpdatedDate !== undefined) {
        writer.uint32(16).int64(message.lastUpdatedDate);
      }
      return writer;
    },
    decode: function decode(input, length) {
      var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
      var end = length === undefined ? reader.len : reader.pos + length;
      var message = createBaseUserInfosWithVersion();
      while (reader.pos < end) {
        var tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            message.userInfos.push(UserInfo.decode(reader, reader.uint32()));
            break;
          case 2:
            message.lastUpdatedDate = longToString$S(reader.int64());
            break;
          default:
            reader.skipType(tag & 7);
            break;
        }
      }
      return message;
    }
  };
  function longToString$S(long) {
    return long.toString();
  }
  if (_m0.util.Long !== long) {
    _m0.util.Long = long;
    _m0.configure();
  }

  function createBaseUserOnlineStatus() {
    return {
      userId: "0",
      userStatus: 0,
      usingDeviceTypes: []
    };
  }
  var UserOnlineStatus = {
    encode: function encode(message, writer) {
      if (writer === void 0) {
        writer = _m0.Writer.create();
      }
      if (message.userId !== "0") {
        writer.uint32(8).int64(message.userId);
      }
      if (message.userStatus !== 0) {
        writer.uint32(16).int32(message.userStatus);
      }
      writer.uint32(26).fork();
      for (var _i = 0, _a = message.usingDeviceTypes; _i < _a.length; _i++) {
        var v = _a[_i];
        writer.int32(v);
      }
      writer.ldelim();
      return writer;
    },
    decode: function decode(input, length) {
      var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
      var end = length === undefined ? reader.len : reader.pos + length;
      var message = createBaseUserOnlineStatus();
      while (reader.pos < end) {
        var tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            message.userId = longToString$R(reader.int64());
            break;
          case 2:
            message.userStatus = reader.int32();
            break;
          case 3:
            if ((tag & 7) === 2) {
              var end2 = reader.uint32() + reader.pos;
              while (reader.pos < end2) {
                message.usingDeviceTypes.push(reader.int32());
              }
            } else {
              message.usingDeviceTypes.push(reader.int32());
            }
            break;
          default:
            reader.skipType(tag & 7);
            break;
        }
      }
      return message;
    }
  };
  function longToString$R(long) {
    return long.toString();
  }
  if (_m0.util.Long !== long) {
    _m0.util.Long = long;
    _m0.configure();
  }

  function createBaseUserOnlineStatuses() {
    return {
      statuses: []
    };
  }
  var UserOnlineStatuses = {
    encode: function encode(message, writer) {
      if (writer === void 0) {
        writer = _m0.Writer.create();
      }
      for (var _i = 0, _a = message.statuses; _i < _a.length; _i++) {
        var v = _a[_i];
        UserOnlineStatus.encode(v, writer.uint32(10).fork()).ldelim();
      }
      return writer;
    },
    decode: function decode(input, length) {
      var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
      var end = length === undefined ? reader.len : reader.pos + length;
      var message = createBaseUserOnlineStatuses();
      while (reader.pos < end) {
        var tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            message.statuses.push(UserOnlineStatus.decode(reader, reader.uint32()));
            break;
          default:
            reader.skipType(tag & 7);
            break;
        }
      }
      return message;
    }
  };

  function createBaseUserRelationshipGroup() {
    return {
      index: 0,
      name: ""
    };
  }
  var UserRelationshipGroup = {
    encode: function encode(message, writer) {
      if (writer === void 0) {
        writer = _m0.Writer.create();
      }
      if (message.index !== 0) {
        writer.uint32(8).int32(message.index);
      }
      if (message.name !== "") {
        writer.uint32(18).string(message.name);
      }
      return writer;
    },
    decode: function decode(input, length) {
      var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
      var end = length === undefined ? reader.len : reader.pos + length;
      var message = createBaseUserRelationshipGroup();
      while (reader.pos < end) {
        var tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            message.index = reader.int32();
            break;
          case 2:
            message.name = reader.string();
            break;
          default:
            reader.skipType(tag & 7);
            break;
        }
      }
      return message;
    }
  };

  function createBaseUserRelationshipGroupsWithVersion() {
    return {
      userRelationshipGroups: [],
      lastUpdatedDate: undefined
    };
  }
  var UserRelationshipGroupsWithVersion = {
    encode: function encode(message, writer) {
      if (writer === void 0) {
        writer = _m0.Writer.create();
      }
      for (var _i = 0, _a = message.userRelationshipGroups; _i < _a.length; _i++) {
        var v = _a[_i];
        UserRelationshipGroup.encode(v, writer.uint32(10).fork()).ldelim();
      }
      if (message.lastUpdatedDate !== undefined) {
        writer.uint32(16).int64(message.lastUpdatedDate);
      }
      return writer;
    },
    decode: function decode(input, length) {
      var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
      var end = length === undefined ? reader.len : reader.pos + length;
      var message = createBaseUserRelationshipGroupsWithVersion();
      while (reader.pos < end) {
        var tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            message.userRelationshipGroups.push(UserRelationshipGroup.decode(reader, reader.uint32()));
            break;
          case 2:
            message.lastUpdatedDate = longToString$Q(reader.int64());
            break;
          default:
            reader.skipType(tag & 7);
            break;
        }
      }
      return message;
    }
  };
  function longToString$Q(long) {
    return long.toString();
  }
  if (_m0.util.Long !== long) {
    _m0.util.Long = long;
    _m0.configure();
  }

  function createBaseUserRelationship() {
    return {
      ownerId: undefined,
      relatedUserId: undefined,
      blockDate: undefined,
      groupIndex: undefined,
      establishmentDate: undefined
    };
  }
  var UserRelationship = {
    encode: function encode(message, writer) {
      if (writer === void 0) {
        writer = _m0.Writer.create();
      }
      if (message.ownerId !== undefined) {
        writer.uint32(8).int64(message.ownerId);
      }
      if (message.relatedUserId !== undefined) {
        writer.uint32(16).int64(message.relatedUserId);
      }
      if (message.blockDate !== undefined) {
        writer.uint32(24).int64(message.blockDate);
      }
      if (message.groupIndex !== undefined) {
        writer.uint32(32).int64(message.groupIndex);
      }
      if (message.establishmentDate !== undefined) {
        writer.uint32(40).int64(message.establishmentDate);
      }
      return writer;
    },
    decode: function decode(input, length) {
      var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
      var end = length === undefined ? reader.len : reader.pos + length;
      var message = createBaseUserRelationship();
      while (reader.pos < end) {
        var tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            message.ownerId = longToString$P(reader.int64());
            break;
          case 2:
            message.relatedUserId = longToString$P(reader.int64());
            break;
          case 3:
            message.blockDate = longToString$P(reader.int64());
            break;
          case 4:
            message.groupIndex = longToString$P(reader.int64());
            break;
          case 5:
            message.establishmentDate = longToString$P(reader.int64());
            break;
          default:
            reader.skipType(tag & 7);
            break;
        }
      }
      return message;
    }
  };
  function longToString$P(long) {
    return long.toString();
  }
  if (_m0.util.Long !== long) {
    _m0.util.Long = long;
    _m0.configure();
  }

  function createBaseUserRelationshipsWithVersion() {
    return {
      userRelationships: [],
      lastUpdatedDate: undefined
    };
  }
  var UserRelationshipsWithVersion = {
    encode: function encode(message, writer) {
      if (writer === void 0) {
        writer = _m0.Writer.create();
      }
      for (var _i = 0, _a = message.userRelationships; _i < _a.length; _i++) {
        var v = _a[_i];
        UserRelationship.encode(v, writer.uint32(10).fork()).ldelim();
      }
      if (message.lastUpdatedDate !== undefined) {
        writer.uint32(16).int64(message.lastUpdatedDate);
      }
      return writer;
    },
    decode: function decode(input, length) {
      var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
      var end = length === undefined ? reader.len : reader.pos + length;
      var message = createBaseUserRelationshipsWithVersion();
      while (reader.pos < end) {
        var tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            message.userRelationships.push(UserRelationship.decode(reader, reader.uint32()));
            break;
          case 2:
            message.lastUpdatedDate = longToString$O(reader.int64());
            break;
          default:
            reader.skipType(tag & 7);
            break;
        }
      }
      return message;
    }
  };
  function longToString$O(long) {
    return long.toString();
  }
  if (_m0.util.Long !== long) {
    _m0.util.Long = long;
    _m0.configure();
  }

  function createBaseUserSession() {
    return {
      sessionId: "",
      serverId: ""
    };
  }
  var UserSession = {
    encode: function encode(message, writer) {
      if (writer === void 0) {
        writer = _m0.Writer.create();
      }
      if (message.sessionId !== "") {
        writer.uint32(10).string(message.sessionId);
      }
      if (message.serverId !== "") {
        writer.uint32(18).string(message.serverId);
      }
      return writer;
    },
    decode: function decode(input, length) {
      var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
      var end = length === undefined ? reader.len : reader.pos + length;
      var message = createBaseUserSession();
      while (reader.pos < end) {
        var tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            message.sessionId = reader.string();
            break;
          case 2:
            message.serverId = reader.string();
            break;
          default:
            reader.skipType(tag & 7);
            break;
        }
      }
      return message;
    }
  };

  function createBaseQueryConversationsRequest() {
    return {
      targetIds: [],
      groupIds: []
    };
  }
  var QueryConversationsRequest = {
    encode: function encode(message, writer) {
      if (writer === void 0) {
        writer = _m0.Writer.create();
      }
      writer.uint32(10).fork();
      for (var _i = 0, _a = message.targetIds; _i < _a.length; _i++) {
        var v = _a[_i];
        writer.int64(v);
      }
      writer.ldelim();
      writer.uint32(18).fork();
      for (var _b = 0, _c = message.groupIds; _b < _c.length; _b++) {
        var v = _c[_b];
        writer.int64(v);
      }
      writer.ldelim();
      return writer;
    },
    decode: function decode(input, length) {
      var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
      var end = length === undefined ? reader.len : reader.pos + length;
      var message = createBaseQueryConversationsRequest();
      while (reader.pos < end) {
        var tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            if ((tag & 7) === 2) {
              var end2 = reader.uint32() + reader.pos;
              while (reader.pos < end2) {
                message.targetIds.push(longToString$N(reader.int64()));
              }
            } else {
              message.targetIds.push(longToString$N(reader.int64()));
            }
            break;
          case 2:
            if ((tag & 7) === 2) {
              var end2 = reader.uint32() + reader.pos;
              while (reader.pos < end2) {
                message.groupIds.push(longToString$N(reader.int64()));
              }
            } else {
              message.groupIds.push(longToString$N(reader.int64()));
            }
            break;
          default:
            reader.skipType(tag & 7);
            break;
        }
      }
      return message;
    }
  };
  function longToString$N(long) {
    return long.toString();
  }
  if (_m0.util.Long !== long) {
    _m0.util.Long = long;
    _m0.configure();
  }

  function createBaseUpdateConversationRequest() {
    return {
      targetId: undefined,
      groupId: undefined,
      readDate: "0"
    };
  }
  var UpdateConversationRequest = {
    encode: function encode(message, writer) {
      if (writer === void 0) {
        writer = _m0.Writer.create();
      }
      if (message.targetId !== undefined) {
        writer.uint32(8).int64(message.targetId);
      }
      if (message.groupId !== undefined) {
        writer.uint32(16).int64(message.groupId);
      }
      if (message.readDate !== "0") {
        writer.uint32(24).int64(message.readDate);
      }
      return writer;
    },
    decode: function decode(input, length) {
      var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
      var end = length === undefined ? reader.len : reader.pos + length;
      var message = createBaseUpdateConversationRequest();
      while (reader.pos < end) {
        var tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            message.targetId = longToString$M(reader.int64());
            break;
          case 2:
            message.groupId = longToString$M(reader.int64());
            break;
          case 3:
            message.readDate = longToString$M(reader.int64());
            break;
          default:
            reader.skipType(tag & 7);
            break;
        }
      }
      return message;
    }
  };
  function longToString$M(long) {
    return long.toString();
  }
  if (_m0.util.Long !== long) {
    _m0.util.Long = long;
    _m0.configure();
  }

  function createBaseUpdateTypingStatusRequest() {
    return {
      isGroupMessage: false,
      toId: "0"
    };
  }
  var UpdateTypingStatusRequest = {
    encode: function encode(message, writer) {
      if (writer === void 0) {
        writer = _m0.Writer.create();
      }
      if (message.isGroupMessage === true) {
        writer.uint32(8).bool(message.isGroupMessage);
      }
      if (message.toId !== "0") {
        writer.uint32(16).int64(message.toId);
      }
      return writer;
    },
    decode: function decode(input, length) {
      var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
      var end = length === undefined ? reader.len : reader.pos + length;
      var message = createBaseUpdateTypingStatusRequest();
      while (reader.pos < end) {
        var tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            message.isGroupMessage = reader.bool();
            break;
          case 2:
            message.toId = longToString$L(reader.int64());
            break;
          default:
            reader.skipType(tag & 7);
            break;
        }
      }
      return message;
    }
  };
  function longToString$L(long) {
    return long.toString();
  }
  if (_m0.util.Long !== long) {
    _m0.util.Long = long;
    _m0.configure();
  }

  function createBaseCreateGroupBlockedUserRequest() {
    return {
      groupId: "0",
      userId: "0"
    };
  }
  var CreateGroupBlockedUserRequest = {
    encode: function encode(message, writer) {
      if (writer === void 0) {
        writer = _m0.Writer.create();
      }
      if (message.groupId !== "0") {
        writer.uint32(8).int64(message.groupId);
      }
      if (message.userId !== "0") {
        writer.uint32(16).int64(message.userId);
      }
      return writer;
    },
    decode: function decode(input, length) {
      var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
      var end = length === undefined ? reader.len : reader.pos + length;
      var message = createBaseCreateGroupBlockedUserRequest();
      while (reader.pos < end) {
        var tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            message.groupId = longToString$K(reader.int64());
            break;
          case 2:
            message.userId = longToString$K(reader.int64());
            break;
          default:
            reader.skipType(tag & 7);
            break;
        }
      }
      return message;
    }
  };
  function longToString$K(long) {
    return long.toString();
  }
  if (_m0.util.Long !== long) {
    _m0.util.Long = long;
    _m0.configure();
  }

  function createBaseDeleteGroupBlockedUserRequest() {
    return {
      groupId: "0",
      userId: "0"
    };
  }
  var DeleteGroupBlockedUserRequest = {
    encode: function encode(message, writer) {
      if (writer === void 0) {
        writer = _m0.Writer.create();
      }
      if (message.groupId !== "0") {
        writer.uint32(8).int64(message.groupId);
      }
      if (message.userId !== "0") {
        writer.uint32(16).int64(message.userId);
      }
      return writer;
    },
    decode: function decode(input, length) {
      var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
      var end = length === undefined ? reader.len : reader.pos + length;
      var message = createBaseDeleteGroupBlockedUserRequest();
      while (reader.pos < end) {
        var tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            message.groupId = longToString$J(reader.int64());
            break;
          case 2:
            message.userId = longToString$J(reader.int64());
            break;
          default:
            reader.skipType(tag & 7);
            break;
        }
      }
      return message;
    }
  };
  function longToString$J(long) {
    return long.toString();
  }
  if (_m0.util.Long !== long) {
    _m0.util.Long = long;
    _m0.configure();
  }

  function createBaseQueryGroupBlockedUserIdsRequest() {
    return {
      groupId: "0",
      lastUpdatedDate: undefined
    };
  }
  var QueryGroupBlockedUserIdsRequest = {
    encode: function encode(message, writer) {
      if (writer === void 0) {
        writer = _m0.Writer.create();
      }
      if (message.groupId !== "0") {
        writer.uint32(8).int64(message.groupId);
      }
      if (message.lastUpdatedDate !== undefined) {
        writer.uint32(16).int64(message.lastUpdatedDate);
      }
      return writer;
    },
    decode: function decode(input, length) {
      var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
      var end = length === undefined ? reader.len : reader.pos + length;
      var message = createBaseQueryGroupBlockedUserIdsRequest();
      while (reader.pos < end) {
        var tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            message.groupId = longToString$I(reader.int64());
            break;
          case 2:
            message.lastUpdatedDate = longToString$I(reader.int64());
            break;
          default:
            reader.skipType(tag & 7);
            break;
        }
      }
      return message;
    }
  };
  function longToString$I(long) {
    return long.toString();
  }
  if (_m0.util.Long !== long) {
    _m0.util.Long = long;
    _m0.configure();
  }

  function createBaseQueryGroupBlockedUserInfosRequest() {
    return {
      groupId: "0",
      lastUpdatedDate: undefined
    };
  }
  var QueryGroupBlockedUserInfosRequest = {
    encode: function encode(message, writer) {
      if (writer === void 0) {
        writer = _m0.Writer.create();
      }
      if (message.groupId !== "0") {
        writer.uint32(8).int64(message.groupId);
      }
      if (message.lastUpdatedDate !== undefined) {
        writer.uint32(16).int64(message.lastUpdatedDate);
      }
      return writer;
    },
    decode: function decode(input, length) {
      var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
      var end = length === undefined ? reader.len : reader.pos + length;
      var message = createBaseQueryGroupBlockedUserInfosRequest();
      while (reader.pos < end) {
        var tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            message.groupId = longToString$H(reader.int64());
            break;
          case 2:
            message.lastUpdatedDate = longToString$H(reader.int64());
            break;
          default:
            reader.skipType(tag & 7);
            break;
        }
      }
      return message;
    }
  };
  function longToString$H(long) {
    return long.toString();
  }
  if (_m0.util.Long !== long) {
    _m0.util.Long = long;
    _m0.configure();
  }

  function createBaseCreateGroupRequest() {
    return {
      name: "",
      intro: undefined,
      announcement: undefined,
      minScore: undefined,
      typeId: undefined,
      muteEndDate: undefined
    };
  }
  var CreateGroupRequest = {
    encode: function encode(message, writer) {
      if (writer === void 0) {
        writer = _m0.Writer.create();
      }
      if (message.name !== "") {
        writer.uint32(10).string(message.name);
      }
      if (message.intro !== undefined) {
        writer.uint32(18).string(message.intro);
      }
      if (message.announcement !== undefined) {
        writer.uint32(26).string(message.announcement);
      }
      if (message.minScore !== undefined) {
        writer.uint32(32).int32(message.minScore);
      }
      if (message.typeId !== undefined) {
        writer.uint32(40).int64(message.typeId);
      }
      if (message.muteEndDate !== undefined) {
        writer.uint32(48).int64(message.muteEndDate);
      }
      return writer;
    },
    decode: function decode(input, length) {
      var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
      var end = length === undefined ? reader.len : reader.pos + length;
      var message = createBaseCreateGroupRequest();
      while (reader.pos < end) {
        var tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            message.name = reader.string();
            break;
          case 2:
            message.intro = reader.string();
            break;
          case 3:
            message.announcement = reader.string();
            break;
          case 4:
            message.minScore = reader.int32();
            break;
          case 5:
            message.typeId = longToString$G(reader.int64());
            break;
          case 6:
            message.muteEndDate = longToString$G(reader.int64());
            break;
          default:
            reader.skipType(tag & 7);
            break;
        }
      }
      return message;
    }
  };
  function longToString$G(long) {
    return long.toString();
  }
  if (_m0.util.Long !== long) {
    _m0.util.Long = long;
    _m0.configure();
  }

  function createBaseDeleteGroupRequest() {
    return {
      groupId: "0"
    };
  }
  var DeleteGroupRequest = {
    encode: function encode(message, writer) {
      if (writer === void 0) {
        writer = _m0.Writer.create();
      }
      if (message.groupId !== "0") {
        writer.uint32(8).int64(message.groupId);
      }
      return writer;
    },
    decode: function decode(input, length) {
      var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
      var end = length === undefined ? reader.len : reader.pos + length;
      var message = createBaseDeleteGroupRequest();
      while (reader.pos < end) {
        var tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            message.groupId = longToString$F(reader.int64());
            break;
          default:
            reader.skipType(tag & 7);
            break;
        }
      }
      return message;
    }
  };
  function longToString$F(long) {
    return long.toString();
  }
  if (_m0.util.Long !== long) {
    _m0.util.Long = long;
    _m0.configure();
  }

  function createBaseCheckGroupJoinQuestionsAnswersRequest() {
    return {
      questionIdToAnswer: {}
    };
  }
  var CheckGroupJoinQuestionsAnswersRequest = {
    encode: function encode(message, writer) {
      if (writer === void 0) {
        writer = _m0.Writer.create();
      }
      Object.entries(message.questionIdToAnswer).forEach(function (_a) {
        var key = _a[0],
          value = _a[1];
        CheckGroupJoinQuestionsAnswersRequest_QuestionIdToAnswerEntry.encode({
          key: key,
          value: value
        }, writer.uint32(10).fork()).ldelim();
      });
      return writer;
    },
    decode: function decode(input, length) {
      var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
      var end = length === undefined ? reader.len : reader.pos + length;
      var message = createBaseCheckGroupJoinQuestionsAnswersRequest();
      while (reader.pos < end) {
        var tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            var entry1 = CheckGroupJoinQuestionsAnswersRequest_QuestionIdToAnswerEntry.decode(reader, reader.uint32());
            if (entry1.value !== undefined) {
              message.questionIdToAnswer[entry1.key] = entry1.value;
            }
            break;
          default:
            reader.skipType(tag & 7);
            break;
        }
      }
      return message;
    }
  };
  function createBaseCheckGroupJoinQuestionsAnswersRequest_QuestionIdToAnswerEntry() {
    return {
      key: "0",
      value: ""
    };
  }
  var CheckGroupJoinQuestionsAnswersRequest_QuestionIdToAnswerEntry = {
    encode: function encode(message, writer) {
      if (writer === void 0) {
        writer = _m0.Writer.create();
      }
      if (message.key !== "0") {
        writer.uint32(8).int64(message.key);
      }
      if (message.value !== "") {
        writer.uint32(18).string(message.value);
      }
      return writer;
    },
    decode: function decode(input, length) {
      var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
      var end = length === undefined ? reader.len : reader.pos + length;
      var message = createBaseCheckGroupJoinQuestionsAnswersRequest_QuestionIdToAnswerEntry();
      while (reader.pos < end) {
        var tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            message.key = longToString$E(reader.int64());
            break;
          case 2:
            message.value = reader.string();
            break;
          default:
            reader.skipType(tag & 7);
            break;
        }
      }
      return message;
    }
  };
  function longToString$E(long) {
    return long.toString();
  }
  if (_m0.util.Long !== long) {
    _m0.util.Long = long;
    _m0.configure();
  }

  function createBaseCreateGroupInvitationRequest() {
    return {
      groupId: "0",
      inviteeId: "0",
      content: ""
    };
  }
  var CreateGroupInvitationRequest = {
    encode: function encode(message, writer) {
      if (writer === void 0) {
        writer = _m0.Writer.create();
      }
      if (message.groupId !== "0") {
        writer.uint32(8).int64(message.groupId);
      }
      if (message.inviteeId !== "0") {
        writer.uint32(16).int64(message.inviteeId);
      }
      if (message.content !== "") {
        writer.uint32(26).string(message.content);
      }
      return writer;
    },
    decode: function decode(input, length) {
      var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
      var end = length === undefined ? reader.len : reader.pos + length;
      var message = createBaseCreateGroupInvitationRequest();
      while (reader.pos < end) {
        var tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            message.groupId = longToString$D(reader.int64());
            break;
          case 2:
            message.inviteeId = longToString$D(reader.int64());
            break;
          case 3:
            message.content = reader.string();
            break;
          default:
            reader.skipType(tag & 7);
            break;
        }
      }
      return message;
    }
  };
  function longToString$D(long) {
    return long.toString();
  }
  if (_m0.util.Long !== long) {
    _m0.util.Long = long;
    _m0.configure();
  }

  function createBaseCreateGroupJoinQuestionsRequest() {
    return {
      groupId: "0",
      questions: []
    };
  }
  var CreateGroupJoinQuestionsRequest = {
    encode: function encode(message, writer) {
      if (writer === void 0) {
        writer = _m0.Writer.create();
      }
      if (message.groupId !== "0") {
        writer.uint32(8).int64(message.groupId);
      }
      for (var _i = 0, _a = message.questions; _i < _a.length; _i++) {
        var v = _a[_i];
        GroupJoinQuestion.encode(v, writer.uint32(18).fork()).ldelim();
      }
      return writer;
    },
    decode: function decode(input, length) {
      var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
      var end = length === undefined ? reader.len : reader.pos + length;
      var message = createBaseCreateGroupJoinQuestionsRequest();
      while (reader.pos < end) {
        var tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            message.groupId = longToString$C(reader.int64());
            break;
          case 2:
            message.questions.push(GroupJoinQuestion.decode(reader, reader.uint32()));
            break;
          default:
            reader.skipType(tag & 7);
            break;
        }
      }
      return message;
    }
  };
  function longToString$C(long) {
    return long.toString();
  }
  if (_m0.util.Long !== long) {
    _m0.util.Long = long;
    _m0.configure();
  }

  function createBaseCreateGroupJoinRequestRequest() {
    return {
      groupId: "0",
      content: ""
    };
  }
  var CreateGroupJoinRequestRequest = {
    encode: function encode(message, writer) {
      if (writer === void 0) {
        writer = _m0.Writer.create();
      }
      if (message.groupId !== "0") {
        writer.uint32(8).int64(message.groupId);
      }
      if (message.content !== "") {
        writer.uint32(18).string(message.content);
      }
      return writer;
    },
    decode: function decode(input, length) {
      var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
      var end = length === undefined ? reader.len : reader.pos + length;
      var message = createBaseCreateGroupJoinRequestRequest();
      while (reader.pos < end) {
        var tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            message.groupId = longToString$B(reader.int64());
            break;
          case 2:
            message.content = reader.string();
            break;
          default:
            reader.skipType(tag & 7);
            break;
        }
      }
      return message;
    }
  };
  function longToString$B(long) {
    return long.toString();
  }
  if (_m0.util.Long !== long) {
    _m0.util.Long = long;
    _m0.configure();
  }

  function createBaseDeleteGroupInvitationRequest() {
    return {
      invitationId: "0"
    };
  }
  var DeleteGroupInvitationRequest = {
    encode: function encode(message, writer) {
      if (writer === void 0) {
        writer = _m0.Writer.create();
      }
      if (message.invitationId !== "0") {
        writer.uint32(8).int64(message.invitationId);
      }
      return writer;
    },
    decode: function decode(input, length) {
      var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
      var end = length === undefined ? reader.len : reader.pos + length;
      var message = createBaseDeleteGroupInvitationRequest();
      while (reader.pos < end) {
        var tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            message.invitationId = longToString$A(reader.int64());
            break;
          default:
            reader.skipType(tag & 7);
            break;
        }
      }
      return message;
    }
  };
  function longToString$A(long) {
    return long.toString();
  }
  if (_m0.util.Long !== long) {
    _m0.util.Long = long;
    _m0.configure();
  }

  function createBaseDeleteGroupJoinQuestionsRequest() {
    return {
      groupId: "0",
      questionIds: []
    };
  }
  var DeleteGroupJoinQuestionsRequest = {
    encode: function encode(message, writer) {
      if (writer === void 0) {
        writer = _m0.Writer.create();
      }
      if (message.groupId !== "0") {
        writer.uint32(8).int64(message.groupId);
      }
      writer.uint32(18).fork();
      for (var _i = 0, _a = message.questionIds; _i < _a.length; _i++) {
        var v = _a[_i];
        writer.int64(v);
      }
      writer.ldelim();
      return writer;
    },
    decode: function decode(input, length) {
      var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
      var end = length === undefined ? reader.len : reader.pos + length;
      var message = createBaseDeleteGroupJoinQuestionsRequest();
      while (reader.pos < end) {
        var tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            message.groupId = longToString$z(reader.int64());
            break;
          case 2:
            if ((tag & 7) === 2) {
              var end2 = reader.uint32() + reader.pos;
              while (reader.pos < end2) {
                message.questionIds.push(longToString$z(reader.int64()));
              }
            } else {
              message.questionIds.push(longToString$z(reader.int64()));
            }
            break;
          default:
            reader.skipType(tag & 7);
            break;
        }
      }
      return message;
    }
  };
  function longToString$z(long) {
    return long.toString();
  }
  if (_m0.util.Long !== long) {
    _m0.util.Long = long;
    _m0.configure();
  }

  function createBaseDeleteGroupJoinRequestRequest() {
    return {
      requestId: "0"
    };
  }
  var DeleteGroupJoinRequestRequest = {
    encode: function encode(message, writer) {
      if (writer === void 0) {
        writer = _m0.Writer.create();
      }
      if (message.requestId !== "0") {
        writer.uint32(8).int64(message.requestId);
      }
      return writer;
    },
    decode: function decode(input, length) {
      var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
      var end = length === undefined ? reader.len : reader.pos + length;
      var message = createBaseDeleteGroupJoinRequestRequest();
      while (reader.pos < end) {
        var tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            message.requestId = longToString$y(reader.int64());
            break;
          default:
            reader.skipType(tag & 7);
            break;
        }
      }
      return message;
    }
  };
  function longToString$y(long) {
    return long.toString();
  }
  if (_m0.util.Long !== long) {
    _m0.util.Long = long;
    _m0.configure();
  }

  function createBaseQueryGroupInvitationsRequest() {
    return {
      groupId: undefined,
      areSentByMe: undefined,
      lastUpdatedDate: undefined
    };
  }
  var QueryGroupInvitationsRequest = {
    encode: function encode(message, writer) {
      if (writer === void 0) {
        writer = _m0.Writer.create();
      }
      if (message.groupId !== undefined) {
        writer.uint32(8).int64(message.groupId);
      }
      if (message.areSentByMe !== undefined) {
        writer.uint32(16).bool(message.areSentByMe);
      }
      if (message.lastUpdatedDate !== undefined) {
        writer.uint32(24).int64(message.lastUpdatedDate);
      }
      return writer;
    },
    decode: function decode(input, length) {
      var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
      var end = length === undefined ? reader.len : reader.pos + length;
      var message = createBaseQueryGroupInvitationsRequest();
      while (reader.pos < end) {
        var tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            message.groupId = longToString$x(reader.int64());
            break;
          case 2:
            message.areSentByMe = reader.bool();
            break;
          case 3:
            message.lastUpdatedDate = longToString$x(reader.int64());
            break;
          default:
            reader.skipType(tag & 7);
            break;
        }
      }
      return message;
    }
  };
  function longToString$x(long) {
    return long.toString();
  }
  if (_m0.util.Long !== long) {
    _m0.util.Long = long;
    _m0.configure();
  }

  function createBaseQueryGroupJoinQuestionsRequest() {
    return {
      groupId: "0",
      withAnswers: false,
      lastUpdatedDate: undefined
    };
  }
  var QueryGroupJoinQuestionsRequest = {
    encode: function encode(message, writer) {
      if (writer === void 0) {
        writer = _m0.Writer.create();
      }
      if (message.groupId !== "0") {
        writer.uint32(8).int64(message.groupId);
      }
      if (message.withAnswers === true) {
        writer.uint32(16).bool(message.withAnswers);
      }
      if (message.lastUpdatedDate !== undefined) {
        writer.uint32(24).int64(message.lastUpdatedDate);
      }
      return writer;
    },
    decode: function decode(input, length) {
      var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
      var end = length === undefined ? reader.len : reader.pos + length;
      var message = createBaseQueryGroupJoinQuestionsRequest();
      while (reader.pos < end) {
        var tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            message.groupId = longToString$w(reader.int64());
            break;
          case 2:
            message.withAnswers = reader.bool();
            break;
          case 3:
            message.lastUpdatedDate = longToString$w(reader.int64());
            break;
          default:
            reader.skipType(tag & 7);
            break;
        }
      }
      return message;
    }
  };
  function longToString$w(long) {
    return long.toString();
  }
  if (_m0.util.Long !== long) {
    _m0.util.Long = long;
    _m0.configure();
  }

  function createBaseQueryGroupJoinRequestsRequest() {
    return {
      groupId: undefined,
      lastUpdatedDate: undefined
    };
  }
  var QueryGroupJoinRequestsRequest = {
    encode: function encode(message, writer) {
      if (writer === void 0) {
        writer = _m0.Writer.create();
      }
      if (message.groupId !== undefined) {
        writer.uint32(8).int64(message.groupId);
      }
      if (message.lastUpdatedDate !== undefined) {
        writer.uint32(16).int64(message.lastUpdatedDate);
      }
      return writer;
    },
    decode: function decode(input, length) {
      var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
      var end = length === undefined ? reader.len : reader.pos + length;
      var message = createBaseQueryGroupJoinRequestsRequest();
      while (reader.pos < end) {
        var tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            message.groupId = longToString$v(reader.int64());
            break;
          case 2:
            message.lastUpdatedDate = longToString$v(reader.int64());
            break;
          default:
            reader.skipType(tag & 7);
            break;
        }
      }
      return message;
    }
  };
  function longToString$v(long) {
    return long.toString();
  }
  if (_m0.util.Long !== long) {
    _m0.util.Long = long;
    _m0.configure();
  }

  function createBaseUpdateGroupJoinQuestionRequest() {
    return {
      questionId: "0",
      question: undefined,
      answers: [],
      score: undefined
    };
  }
  var UpdateGroupJoinQuestionRequest = {
    encode: function encode(message, writer) {
      if (writer === void 0) {
        writer = _m0.Writer.create();
      }
      if (message.questionId !== "0") {
        writer.uint32(8).int64(message.questionId);
      }
      if (message.question !== undefined) {
        writer.uint32(18).string(message.question);
      }
      for (var _i = 0, _a = message.answers; _i < _a.length; _i++) {
        var v = _a[_i];
        writer.uint32(26).string(v);
      }
      if (message.score !== undefined) {
        writer.uint32(32).int32(message.score);
      }
      return writer;
    },
    decode: function decode(input, length) {
      var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
      var end = length === undefined ? reader.len : reader.pos + length;
      var message = createBaseUpdateGroupJoinQuestionRequest();
      while (reader.pos < end) {
        var tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            message.questionId = longToString$u(reader.int64());
            break;
          case 2:
            message.question = reader.string();
            break;
          case 3:
            message.answers.push(reader.string());
            break;
          case 4:
            message.score = reader.int32();
            break;
          default:
            reader.skipType(tag & 7);
            break;
        }
      }
      return message;
    }
  };
  function longToString$u(long) {
    return long.toString();
  }
  if (_m0.util.Long !== long) {
    _m0.util.Long = long;
    _m0.configure();
  }

  function createBaseCreateGroupMembersRequest() {
    return {
      groupId: "0",
      userIds: [],
      name: undefined,
      role: undefined,
      muteEndDate: undefined
    };
  }
  var CreateGroupMembersRequest = {
    encode: function encode(message, writer) {
      if (writer === void 0) {
        writer = _m0.Writer.create();
      }
      if (message.groupId !== "0") {
        writer.uint32(8).int64(message.groupId);
      }
      writer.uint32(18).fork();
      for (var _i = 0, _a = message.userIds; _i < _a.length; _i++) {
        var v = _a[_i];
        writer.int64(v);
      }
      writer.ldelim();
      if (message.name !== undefined) {
        writer.uint32(26).string(message.name);
      }
      if (message.role !== undefined) {
        writer.uint32(32).int32(message.role);
      }
      if (message.muteEndDate !== undefined) {
        writer.uint32(40).int64(message.muteEndDate);
      }
      return writer;
    },
    decode: function decode(input, length) {
      var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
      var end = length === undefined ? reader.len : reader.pos + length;
      var message = createBaseCreateGroupMembersRequest();
      while (reader.pos < end) {
        var tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            message.groupId = longToString$t(reader.int64());
            break;
          case 2:
            if ((tag & 7) === 2) {
              var end2 = reader.uint32() + reader.pos;
              while (reader.pos < end2) {
                message.userIds.push(longToString$t(reader.int64()));
              }
            } else {
              message.userIds.push(longToString$t(reader.int64()));
            }
            break;
          case 3:
            message.name = reader.string();
            break;
          case 4:
            message.role = reader.int32();
            break;
          case 5:
            message.muteEndDate = longToString$t(reader.int64());
            break;
          default:
            reader.skipType(tag & 7);
            break;
        }
      }
      return message;
    }
  };
  function longToString$t(long) {
    return long.toString();
  }
  if (_m0.util.Long !== long) {
    _m0.util.Long = long;
    _m0.configure();
  }

  function createBaseDeleteGroupMembersRequest() {
    return {
      groupId: "0",
      memberIds: [],
      successorId: undefined,
      quitAfterTransfer: undefined
    };
  }
  var DeleteGroupMembersRequest = {
    encode: function encode(message, writer) {
      if (writer === void 0) {
        writer = _m0.Writer.create();
      }
      if (message.groupId !== "0") {
        writer.uint32(8).int64(message.groupId);
      }
      writer.uint32(18).fork();
      for (var _i = 0, _a = message.memberIds; _i < _a.length; _i++) {
        var v = _a[_i];
        writer.int64(v);
      }
      writer.ldelim();
      if (message.successorId !== undefined) {
        writer.uint32(24).int64(message.successorId);
      }
      if (message.quitAfterTransfer !== undefined) {
        writer.uint32(32).bool(message.quitAfterTransfer);
      }
      return writer;
    },
    decode: function decode(input, length) {
      var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
      var end = length === undefined ? reader.len : reader.pos + length;
      var message = createBaseDeleteGroupMembersRequest();
      while (reader.pos < end) {
        var tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            message.groupId = longToString$s(reader.int64());
            break;
          case 2:
            if ((tag & 7) === 2) {
              var end2 = reader.uint32() + reader.pos;
              while (reader.pos < end2) {
                message.memberIds.push(longToString$s(reader.int64()));
              }
            } else {
              message.memberIds.push(longToString$s(reader.int64()));
            }
            break;
          case 3:
            message.successorId = longToString$s(reader.int64());
            break;
          case 4:
            message.quitAfterTransfer = reader.bool();
            break;
          default:
            reader.skipType(tag & 7);
            break;
        }
      }
      return message;
    }
  };
  function longToString$s(long) {
    return long.toString();
  }
  if (_m0.util.Long !== long) {
    _m0.util.Long = long;
    _m0.configure();
  }

  function createBaseQueryGroupMembersRequest() {
    return {
      groupId: "0",
      lastUpdatedDate: undefined,
      memberIds: [],
      withStatus: undefined
    };
  }
  var QueryGroupMembersRequest = {
    encode: function encode(message, writer) {
      if (writer === void 0) {
        writer = _m0.Writer.create();
      }
      if (message.groupId !== "0") {
        writer.uint32(8).int64(message.groupId);
      }
      if (message.lastUpdatedDate !== undefined) {
        writer.uint32(16).int64(message.lastUpdatedDate);
      }
      writer.uint32(26).fork();
      for (var _i = 0, _a = message.memberIds; _i < _a.length; _i++) {
        var v = _a[_i];
        writer.int64(v);
      }
      writer.ldelim();
      if (message.withStatus !== undefined) {
        writer.uint32(32).bool(message.withStatus);
      }
      return writer;
    },
    decode: function decode(input, length) {
      var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
      var end = length === undefined ? reader.len : reader.pos + length;
      var message = createBaseQueryGroupMembersRequest();
      while (reader.pos < end) {
        var tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            message.groupId = longToString$r(reader.int64());
            break;
          case 2:
            message.lastUpdatedDate = longToString$r(reader.int64());
            break;
          case 3:
            if ((tag & 7) === 2) {
              var end2 = reader.uint32() + reader.pos;
              while (reader.pos < end2) {
                message.memberIds.push(longToString$r(reader.int64()));
              }
            } else {
              message.memberIds.push(longToString$r(reader.int64()));
            }
            break;
          case 4:
            message.withStatus = reader.bool();
            break;
          default:
            reader.skipType(tag & 7);
            break;
        }
      }
      return message;
    }
  };
  function longToString$r(long) {
    return long.toString();
  }
  if (_m0.util.Long !== long) {
    _m0.util.Long = long;
    _m0.configure();
  }

  function createBaseUpdateGroupMemberRequest() {
    return {
      groupId: "0",
      memberId: "0",
      name: undefined,
      role: undefined,
      muteEndDate: undefined
    };
  }
  var UpdateGroupMemberRequest = {
    encode: function encode(message, writer) {
      if (writer === void 0) {
        writer = _m0.Writer.create();
      }
      if (message.groupId !== "0") {
        writer.uint32(8).int64(message.groupId);
      }
      if (message.memberId !== "0") {
        writer.uint32(16).int64(message.memberId);
      }
      if (message.name !== undefined) {
        writer.uint32(26).string(message.name);
      }
      if (message.role !== undefined) {
        writer.uint32(32).int32(message.role);
      }
      if (message.muteEndDate !== undefined) {
        writer.uint32(40).int64(message.muteEndDate);
      }
      return writer;
    },
    decode: function decode(input, length) {
      var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
      var end = length === undefined ? reader.len : reader.pos + length;
      var message = createBaseUpdateGroupMemberRequest();
      while (reader.pos < end) {
        var tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            message.groupId = longToString$q(reader.int64());
            break;
          case 2:
            message.memberId = longToString$q(reader.int64());
            break;
          case 3:
            message.name = reader.string();
            break;
          case 4:
            message.role = reader.int32();
            break;
          case 5:
            message.muteEndDate = longToString$q(reader.int64());
            break;
          default:
            reader.skipType(tag & 7);
            break;
        }
      }
      return message;
    }
  };
  function longToString$q(long) {
    return long.toString();
  }
  if (_m0.util.Long !== long) {
    _m0.util.Long = long;
    _m0.configure();
  }

  function createBaseQueryGroupsRequest() {
    return {
      groupIds: [],
      lastUpdatedDate: undefined
    };
  }
  var QueryGroupsRequest = {
    encode: function encode(message, writer) {
      if (writer === void 0) {
        writer = _m0.Writer.create();
      }
      writer.uint32(10).fork();
      for (var _i = 0, _a = message.groupIds; _i < _a.length; _i++) {
        var v = _a[_i];
        writer.int64(v);
      }
      writer.ldelim();
      if (message.lastUpdatedDate !== undefined) {
        writer.uint32(16).int64(message.lastUpdatedDate);
      }
      return writer;
    },
    decode: function decode(input, length) {
      var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
      var end = length === undefined ? reader.len : reader.pos + length;
      var message = createBaseQueryGroupsRequest();
      while (reader.pos < end) {
        var tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            if ((tag & 7) === 2) {
              var end2 = reader.uint32() + reader.pos;
              while (reader.pos < end2) {
                message.groupIds.push(longToString$p(reader.int64()));
              }
            } else {
              message.groupIds.push(longToString$p(reader.int64()));
            }
            break;
          case 2:
            message.lastUpdatedDate = longToString$p(reader.int64());
            break;
          default:
            reader.skipType(tag & 7);
            break;
        }
      }
      return message;
    }
  };
  function longToString$p(long) {
    return long.toString();
  }
  if (_m0.util.Long !== long) {
    _m0.util.Long = long;
    _m0.configure();
  }

  function createBaseQueryJoinedGroupIdsRequest() {
    return {
      lastUpdatedDate: undefined
    };
  }
  var QueryJoinedGroupIdsRequest = {
    encode: function encode(message, writer) {
      if (writer === void 0) {
        writer = _m0.Writer.create();
      }
      if (message.lastUpdatedDate !== undefined) {
        writer.uint32(8).int64(message.lastUpdatedDate);
      }
      return writer;
    },
    decode: function decode(input, length) {
      var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
      var end = length === undefined ? reader.len : reader.pos + length;
      var message = createBaseQueryJoinedGroupIdsRequest();
      while (reader.pos < end) {
        var tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            message.lastUpdatedDate = longToString$o(reader.int64());
            break;
          default:
            reader.skipType(tag & 7);
            break;
        }
      }
      return message;
    }
  };
  function longToString$o(long) {
    return long.toString();
  }
  if (_m0.util.Long !== long) {
    _m0.util.Long = long;
    _m0.configure();
  }

  function createBaseQueryJoinedGroupInfosRequest() {
    return {
      lastUpdatedDate: undefined
    };
  }
  var QueryJoinedGroupInfosRequest = {
    encode: function encode(message, writer) {
      if (writer === void 0) {
        writer = _m0.Writer.create();
      }
      if (message.lastUpdatedDate !== undefined) {
        writer.uint32(8).int64(message.lastUpdatedDate);
      }
      return writer;
    },
    decode: function decode(input, length) {
      var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
      var end = length === undefined ? reader.len : reader.pos + length;
      var message = createBaseQueryJoinedGroupInfosRequest();
      while (reader.pos < end) {
        var tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            message.lastUpdatedDate = longToString$n(reader.int64());
            break;
          default:
            reader.skipType(tag & 7);
            break;
        }
      }
      return message;
    }
  };
  function longToString$n(long) {
    return long.toString();
  }
  if (_m0.util.Long !== long) {
    _m0.util.Long = long;
    _m0.configure();
  }

  function createBaseUpdateGroupRequest() {
    return {
      groupId: "0",
      quitAfterTransfer: undefined,
      name: undefined,
      intro: undefined,
      announcement: undefined,
      minScore: undefined,
      typeId: undefined,
      muteEndDate: undefined,
      successorId: undefined
    };
  }
  var UpdateGroupRequest = {
    encode: function encode(message, writer) {
      if (writer === void 0) {
        writer = _m0.Writer.create();
      }
      if (message.groupId !== "0") {
        writer.uint32(8).int64(message.groupId);
      }
      if (message.quitAfterTransfer !== undefined) {
        writer.uint32(16).bool(message.quitAfterTransfer);
      }
      if (message.name !== undefined) {
        writer.uint32(26).string(message.name);
      }
      if (message.intro !== undefined) {
        writer.uint32(34).string(message.intro);
      }
      if (message.announcement !== undefined) {
        writer.uint32(42).string(message.announcement);
      }
      if (message.minScore !== undefined) {
        writer.uint32(48).int32(message.minScore);
      }
      if (message.typeId !== undefined) {
        writer.uint32(56).int64(message.typeId);
      }
      if (message.muteEndDate !== undefined) {
        writer.uint32(64).int64(message.muteEndDate);
      }
      if (message.successorId !== undefined) {
        writer.uint32(72).int64(message.successorId);
      }
      return writer;
    },
    decode: function decode(input, length) {
      var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
      var end = length === undefined ? reader.len : reader.pos + length;
      var message = createBaseUpdateGroupRequest();
      while (reader.pos < end) {
        var tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            message.groupId = longToString$m(reader.int64());
            break;
          case 2:
            message.quitAfterTransfer = reader.bool();
            break;
          case 3:
            message.name = reader.string();
            break;
          case 4:
            message.intro = reader.string();
            break;
          case 5:
            message.announcement = reader.string();
            break;
          case 6:
            message.minScore = reader.int32();
            break;
          case 7:
            message.typeId = longToString$m(reader.int64());
            break;
          case 8:
            message.muteEndDate = longToString$m(reader.int64());
            break;
          case 9:
            message.successorId = longToString$m(reader.int64());
            break;
          default:
            reader.skipType(tag & 7);
            break;
        }
      }
      return message;
    }
  };
  function longToString$m(long) {
    return long.toString();
  }
  if (_m0.util.Long !== long) {
    _m0.util.Long = long;
    _m0.configure();
  }

  function createBaseCreateMessageRequest() {
    return {
      messageId: undefined,
      isSystemMessage: undefined,
      groupId: undefined,
      recipientId: undefined,
      deliveryDate: undefined,
      text: undefined,
      records: [],
      burnAfter: undefined,
      preMessageId: undefined
    };
  }
  var CreateMessageRequest = {
    encode: function encode(message, writer) {
      if (writer === void 0) {
        writer = _m0.Writer.create();
      }
      if (message.messageId !== undefined) {
        writer.uint32(8).int64(message.messageId);
      }
      if (message.isSystemMessage !== undefined) {
        writer.uint32(16).bool(message.isSystemMessage);
      }
      if (message.groupId !== undefined) {
        writer.uint32(24).int64(message.groupId);
      }
      if (message.recipientId !== undefined) {
        writer.uint32(32).int64(message.recipientId);
      }
      if (message.deliveryDate !== undefined) {
        writer.uint32(40).int64(message.deliveryDate);
      }
      if (message.text !== undefined) {
        writer.uint32(50).string(message.text);
      }
      for (var _i = 0, _a = message.records; _i < _a.length; _i++) {
        var v = _a[_i];
        writer.uint32(58).bytes(v);
      }
      if (message.burnAfter !== undefined) {
        writer.uint32(64).int32(message.burnAfter);
      }
      if (message.preMessageId !== undefined) {
        writer.uint32(72).int64(message.preMessageId);
      }
      return writer;
    },
    decode: function decode(input, length) {
      var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
      var end = length === undefined ? reader.len : reader.pos + length;
      var message = createBaseCreateMessageRequest();
      while (reader.pos < end) {
        var tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            message.messageId = longToString$l(reader.int64());
            break;
          case 2:
            message.isSystemMessage = reader.bool();
            break;
          case 3:
            message.groupId = longToString$l(reader.int64());
            break;
          case 4:
            message.recipientId = longToString$l(reader.int64());
            break;
          case 5:
            message.deliveryDate = longToString$l(reader.int64());
            break;
          case 6:
            message.text = reader.string();
            break;
          case 7:
            message.records.push(reader.bytes());
            break;
          case 8:
            message.burnAfter = reader.int32();
            break;
          case 9:
            message.preMessageId = longToString$l(reader.int64());
            break;
          default:
            reader.skipType(tag & 7);
            break;
        }
      }
      return message;
    }
  };
  function longToString$l(long) {
    return long.toString();
  }
  if (_m0.util.Long !== long) {
    _m0.util.Long = long;
    _m0.configure();
  }

  function createBaseQueryMessagesRequest() {
    return {
      ids: [],
      areGroupMessages: undefined,
      areSystemMessages: undefined,
      fromIds: [],
      deliveryDateStart: undefined,
      deliveryDateEnd: undefined,
      maxCount: undefined,
      withTotal: false,
      descending: undefined
    };
  }
  var QueryMessagesRequest = {
    encode: function encode(message, writer) {
      if (writer === void 0) {
        writer = _m0.Writer.create();
      }
      writer.uint32(10).fork();
      for (var _i = 0, _a = message.ids; _i < _a.length; _i++) {
        var v = _a[_i];
        writer.int64(v);
      }
      writer.ldelim();
      if (message.areGroupMessages !== undefined) {
        writer.uint32(16).bool(message.areGroupMessages);
      }
      if (message.areSystemMessages !== undefined) {
        writer.uint32(24).bool(message.areSystemMessages);
      }
      writer.uint32(34).fork();
      for (var _b = 0, _c = message.fromIds; _b < _c.length; _b++) {
        var v = _c[_b];
        writer.int64(v);
      }
      writer.ldelim();
      if (message.deliveryDateStart !== undefined) {
        writer.uint32(40).int64(message.deliveryDateStart);
      }
      if (message.deliveryDateEnd !== undefined) {
        writer.uint32(48).int64(message.deliveryDateEnd);
      }
      if (message.maxCount !== undefined) {
        writer.uint32(56).int32(message.maxCount);
      }
      if (message.withTotal === true) {
        writer.uint32(64).bool(message.withTotal);
      }
      if (message.descending !== undefined) {
        writer.uint32(72).bool(message.descending);
      }
      return writer;
    },
    decode: function decode(input, length) {
      var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
      var end = length === undefined ? reader.len : reader.pos + length;
      var message = createBaseQueryMessagesRequest();
      while (reader.pos < end) {
        var tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            if ((tag & 7) === 2) {
              var end2 = reader.uint32() + reader.pos;
              while (reader.pos < end2) {
                message.ids.push(longToString$k(reader.int64()));
              }
            } else {
              message.ids.push(longToString$k(reader.int64()));
            }
            break;
          case 2:
            message.areGroupMessages = reader.bool();
            break;
          case 3:
            message.areSystemMessages = reader.bool();
            break;
          case 4:
            if ((tag & 7) === 2) {
              var end2 = reader.uint32() + reader.pos;
              while (reader.pos < end2) {
                message.fromIds.push(longToString$k(reader.int64()));
              }
            } else {
              message.fromIds.push(longToString$k(reader.int64()));
            }
            break;
          case 5:
            message.deliveryDateStart = longToString$k(reader.int64());
            break;
          case 6:
            message.deliveryDateEnd = longToString$k(reader.int64());
            break;
          case 7:
            message.maxCount = reader.int32();
            break;
          case 8:
            message.withTotal = reader.bool();
            break;
          case 9:
            message.descending = reader.bool();
            break;
          default:
            reader.skipType(tag & 7);
            break;
        }
      }
      return message;
    }
  };
  function longToString$k(long) {
    return long.toString();
  }
  if (_m0.util.Long !== long) {
    _m0.util.Long = long;
    _m0.configure();
  }

  function createBaseUpdateMessageRequest() {
    return {
      messageId: "0",
      text: undefined,
      records: [],
      recallDate: undefined
    };
  }
  var UpdateMessageRequest = {
    encode: function encode(message, writer) {
      if (writer === void 0) {
        writer = _m0.Writer.create();
      }
      if (message.messageId !== "0") {
        writer.uint32(8).int64(message.messageId);
      }
      if (message.text !== undefined) {
        writer.uint32(18).string(message.text);
      }
      for (var _i = 0, _a = message.records; _i < _a.length; _i++) {
        var v = _a[_i];
        writer.uint32(26).bytes(v);
      }
      if (message.recallDate !== undefined) {
        writer.uint32(32).int64(message.recallDate);
      }
      return writer;
    },
    decode: function decode(input, length) {
      var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
      var end = length === undefined ? reader.len : reader.pos + length;
      var message = createBaseUpdateMessageRequest();
      while (reader.pos < end) {
        var tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            message.messageId = longToString$j(reader.int64());
            break;
          case 2:
            message.text = reader.string();
            break;
          case 3:
            message.records.push(reader.bytes());
            break;
          case 4:
            message.recallDate = longToString$j(reader.int64());
            break;
          default:
            reader.skipType(tag & 7);
            break;
        }
      }
      return message;
    }
  };
  function longToString$j(long) {
    return long.toString();
  }
  if (_m0.util.Long !== long) {
    _m0.util.Long = long;
    _m0.configure();
  }

  function createBaseDeleteResourceRequest() {
    return {
      type: 0,
      idNum: undefined,
      idStr: undefined,
      extra: {}
    };
  }
  var DeleteResourceRequest = {
    encode: function encode(message, writer) {
      if (writer === void 0) {
        writer = _m0.Writer.create();
      }
      if (message.type !== 0) {
        writer.uint32(8).int32(message.type);
      }
      if (message.idNum !== undefined) {
        writer.uint32(16).int64(message.idNum);
      }
      if (message.idStr !== undefined) {
        writer.uint32(26).string(message.idStr);
      }
      Object.entries(message.extra).forEach(function (_a) {
        var key = _a[0],
          value = _a[1];
        DeleteResourceRequest_ExtraEntry.encode({
          key: key,
          value: value
        }, writer.uint32(34).fork()).ldelim();
      });
      return writer;
    },
    decode: function decode(input, length) {
      var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
      var end = length === undefined ? reader.len : reader.pos + length;
      var message = createBaseDeleteResourceRequest();
      while (reader.pos < end) {
        var tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            message.type = reader.int32();
            break;
          case 2:
            message.idNum = longToString$i(reader.int64());
            break;
          case 3:
            message.idStr = reader.string();
            break;
          case 4:
            var entry4 = DeleteResourceRequest_ExtraEntry.decode(reader, reader.uint32());
            if (entry4.value !== undefined) {
              message.extra[entry4.key] = entry4.value;
            }
            break;
          default:
            reader.skipType(tag & 7);
            break;
        }
      }
      return message;
    }
  };
  function createBaseDeleteResourceRequest_ExtraEntry() {
    return {
      key: "",
      value: ""
    };
  }
  var DeleteResourceRequest_ExtraEntry = {
    encode: function encode(message, writer) {
      if (writer === void 0) {
        writer = _m0.Writer.create();
      }
      if (message.key !== "") {
        writer.uint32(10).string(message.key);
      }
      if (message.value !== "") {
        writer.uint32(18).string(message.value);
      }
      return writer;
    },
    decode: function decode(input, length) {
      var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
      var end = length === undefined ? reader.len : reader.pos + length;
      var message = createBaseDeleteResourceRequest_ExtraEntry();
      while (reader.pos < end) {
        var tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            message.key = reader.string();
            break;
          case 2:
            message.value = reader.string();
            break;
          default:
            reader.skipType(tag & 7);
            break;
        }
      }
      return message;
    }
  };
  function longToString$i(long) {
    return long.toString();
  }
  if (_m0.util.Long !== long) {
    _m0.util.Long = long;
    _m0.configure();
  }

  function createBaseQueryMessageAttachmentInfosRequest() {
    return {
      userIds: [],
      groupIds: [],
      creationDateStart: undefined,
      creationDateEnd: undefined,
      inPrivateConversation: undefined,
      areSharedByMe: undefined
    };
  }
  var QueryMessageAttachmentInfosRequest = {
    encode: function encode(message, writer) {
      if (writer === void 0) {
        writer = _m0.Writer.create();
      }
      writer.uint32(10).fork();
      for (var _i = 0, _a = message.userIds; _i < _a.length; _i++) {
        var v = _a[_i];
        writer.int64(v);
      }
      writer.ldelim();
      writer.uint32(18).fork();
      for (var _b = 0, _c = message.groupIds; _b < _c.length; _b++) {
        var v = _c[_b];
        writer.int64(v);
      }
      writer.ldelim();
      if (message.creationDateStart !== undefined) {
        writer.uint32(24).int64(message.creationDateStart);
      }
      if (message.creationDateEnd !== undefined) {
        writer.uint32(32).int64(message.creationDateEnd);
      }
      if (message.inPrivateConversation !== undefined) {
        writer.uint32(40).bool(message.inPrivateConversation);
      }
      if (message.areSharedByMe !== undefined) {
        writer.uint32(48).bool(message.areSharedByMe);
      }
      return writer;
    },
    decode: function decode(input, length) {
      var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
      var end = length === undefined ? reader.len : reader.pos + length;
      var message = createBaseQueryMessageAttachmentInfosRequest();
      while (reader.pos < end) {
        var tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            if ((tag & 7) === 2) {
              var end2 = reader.uint32() + reader.pos;
              while (reader.pos < end2) {
                message.userIds.push(longToString$h(reader.int64()));
              }
            } else {
              message.userIds.push(longToString$h(reader.int64()));
            }
            break;
          case 2:
            if ((tag & 7) === 2) {
              var end2 = reader.uint32() + reader.pos;
              while (reader.pos < end2) {
                message.groupIds.push(longToString$h(reader.int64()));
              }
            } else {
              message.groupIds.push(longToString$h(reader.int64()));
            }
            break;
          case 3:
            message.creationDateStart = longToString$h(reader.int64());
            break;
          case 4:
            message.creationDateEnd = longToString$h(reader.int64());
            break;
          case 5:
            message.inPrivateConversation = reader.bool();
            break;
          case 6:
            message.areSharedByMe = reader.bool();
            break;
          default:
            reader.skipType(tag & 7);
            break;
        }
      }
      return message;
    }
  };
  function longToString$h(long) {
    return long.toString();
  }
  if (_m0.util.Long !== long) {
    _m0.util.Long = long;
    _m0.configure();
  }

  function createBaseQueryResourceDownloadInfoRequest() {
    return {
      type: 0,
      idNum: undefined,
      idStr: undefined,
      extra: {}
    };
  }
  var QueryResourceDownloadInfoRequest = {
    encode: function encode(message, writer) {
      if (writer === void 0) {
        writer = _m0.Writer.create();
      }
      if (message.type !== 0) {
        writer.uint32(8).int32(message.type);
      }
      if (message.idNum !== undefined) {
        writer.uint32(16).int64(message.idNum);
      }
      if (message.idStr !== undefined) {
        writer.uint32(26).string(message.idStr);
      }
      Object.entries(message.extra).forEach(function (_a) {
        var key = _a[0],
          value = _a[1];
        QueryResourceDownloadInfoRequest_ExtraEntry.encode({
          key: key,
          value: value
        }, writer.uint32(34).fork()).ldelim();
      });
      return writer;
    },
    decode: function decode(input, length) {
      var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
      var end = length === undefined ? reader.len : reader.pos + length;
      var message = createBaseQueryResourceDownloadInfoRequest();
      while (reader.pos < end) {
        var tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            message.type = reader.int32();
            break;
          case 2:
            message.idNum = longToString$g(reader.int64());
            break;
          case 3:
            message.idStr = reader.string();
            break;
          case 4:
            var entry4 = QueryResourceDownloadInfoRequest_ExtraEntry.decode(reader, reader.uint32());
            if (entry4.value !== undefined) {
              message.extra[entry4.key] = entry4.value;
            }
            break;
          default:
            reader.skipType(tag & 7);
            break;
        }
      }
      return message;
    }
  };
  function createBaseQueryResourceDownloadInfoRequest_ExtraEntry() {
    return {
      key: "",
      value: ""
    };
  }
  var QueryResourceDownloadInfoRequest_ExtraEntry = {
    encode: function encode(message, writer) {
      if (writer === void 0) {
        writer = _m0.Writer.create();
      }
      if (message.key !== "") {
        writer.uint32(10).string(message.key);
      }
      if (message.value !== "") {
        writer.uint32(18).string(message.value);
      }
      return writer;
    },
    decode: function decode(input, length) {
      var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
      var end = length === undefined ? reader.len : reader.pos + length;
      var message = createBaseQueryResourceDownloadInfoRequest_ExtraEntry();
      while (reader.pos < end) {
        var tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            message.key = reader.string();
            break;
          case 2:
            message.value = reader.string();
            break;
          default:
            reader.skipType(tag & 7);
            break;
        }
      }
      return message;
    }
  };
  function longToString$g(long) {
    return long.toString();
  }
  if (_m0.util.Long !== long) {
    _m0.util.Long = long;
    _m0.configure();
  }

  function createBaseQueryResourceUploadInfoRequest() {
    return {
      type: 0,
      idNum: undefined,
      idStr: undefined,
      name: undefined,
      mediaType: undefined,
      extra: {}
    };
  }
  var QueryResourceUploadInfoRequest = {
    encode: function encode(message, writer) {
      if (writer === void 0) {
        writer = _m0.Writer.create();
      }
      if (message.type !== 0) {
        writer.uint32(8).int32(message.type);
      }
      if (message.idNum !== undefined) {
        writer.uint32(16).int64(message.idNum);
      }
      if (message.idStr !== undefined) {
        writer.uint32(26).string(message.idStr);
      }
      if (message.name !== undefined) {
        writer.uint32(34).string(message.name);
      }
      if (message.mediaType !== undefined) {
        writer.uint32(42).string(message.mediaType);
      }
      Object.entries(message.extra).forEach(function (_a) {
        var key = _a[0],
          value = _a[1];
        QueryResourceUploadInfoRequest_ExtraEntry.encode({
          key: key,
          value: value
        }, writer.uint32(50).fork()).ldelim();
      });
      return writer;
    },
    decode: function decode(input, length) {
      var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
      var end = length === undefined ? reader.len : reader.pos + length;
      var message = createBaseQueryResourceUploadInfoRequest();
      while (reader.pos < end) {
        var tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            message.type = reader.int32();
            break;
          case 2:
            message.idNum = longToString$f(reader.int64());
            break;
          case 3:
            message.idStr = reader.string();
            break;
          case 4:
            message.name = reader.string();
            break;
          case 5:
            message.mediaType = reader.string();
            break;
          case 6:
            var entry6 = QueryResourceUploadInfoRequest_ExtraEntry.decode(reader, reader.uint32());
            if (entry6.value !== undefined) {
              message.extra[entry6.key] = entry6.value;
            }
            break;
          default:
            reader.skipType(tag & 7);
            break;
        }
      }
      return message;
    }
  };
  function createBaseQueryResourceUploadInfoRequest_ExtraEntry() {
    return {
      key: "",
      value: ""
    };
  }
  var QueryResourceUploadInfoRequest_ExtraEntry = {
    encode: function encode(message, writer) {
      if (writer === void 0) {
        writer = _m0.Writer.create();
      }
      if (message.key !== "") {
        writer.uint32(10).string(message.key);
      }
      if (message.value !== "") {
        writer.uint32(18).string(message.value);
      }
      return writer;
    },
    decode: function decode(input, length) {
      var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
      var end = length === undefined ? reader.len : reader.pos + length;
      var message = createBaseQueryResourceUploadInfoRequest_ExtraEntry();
      while (reader.pos < end) {
        var tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            message.key = reader.string();
            break;
          case 2:
            message.value = reader.string();
            break;
          default:
            reader.skipType(tag & 7);
            break;
        }
      }
      return message;
    }
  };
  function longToString$f(long) {
    return long.toString();
  }
  if (_m0.util.Long !== long) {
    _m0.util.Long = long;
    _m0.configure();
  }

  function createBaseUpdateMessageAttachmentInfoRequest() {
    return {
      attachmentIdNum: undefined,
      attachmentIdStr: undefined,
      userIdToShareWith: undefined,
      userIdToUnshareWith: undefined,
      groupIdToShareWith: undefined,
      groupIdToUnshareWith: undefined
    };
  }
  var UpdateMessageAttachmentInfoRequest = {
    encode: function encode(message, writer) {
      if (writer === void 0) {
        writer = _m0.Writer.create();
      }
      if (message.attachmentIdNum !== undefined) {
        writer.uint32(8).int64(message.attachmentIdNum);
      }
      if (message.attachmentIdStr !== undefined) {
        writer.uint32(18).string(message.attachmentIdStr);
      }
      if (message.userIdToShareWith !== undefined) {
        writer.uint32(24).int64(message.userIdToShareWith);
      }
      if (message.userIdToUnshareWith !== undefined) {
        writer.uint32(32).int64(message.userIdToUnshareWith);
      }
      if (message.groupIdToShareWith !== undefined) {
        writer.uint32(40).int64(message.groupIdToShareWith);
      }
      if (message.groupIdToUnshareWith !== undefined) {
        writer.uint32(48).int64(message.groupIdToUnshareWith);
      }
      return writer;
    },
    decode: function decode(input, length) {
      var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
      var end = length === undefined ? reader.len : reader.pos + length;
      var message = createBaseUpdateMessageAttachmentInfoRequest();
      while (reader.pos < end) {
        var tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            message.attachmentIdNum = longToString$e(reader.int64());
            break;
          case 2:
            message.attachmentIdStr = reader.string();
            break;
          case 3:
            message.userIdToShareWith = longToString$e(reader.int64());
            break;
          case 4:
            message.userIdToUnshareWith = longToString$e(reader.int64());
            break;
          case 5:
            message.groupIdToShareWith = longToString$e(reader.int64());
            break;
          case 6:
            message.groupIdToUnshareWith = longToString$e(reader.int64());
            break;
          default:
            reader.skipType(tag & 7);
            break;
        }
      }
      return message;
    }
  };
  function longToString$e(long) {
    return long.toString();
  }
  if (_m0.util.Long !== long) {
    _m0.util.Long = long;
    _m0.configure();
  }

  function createBaseCreateSessionRequest() {
    return {
      version: 0,
      userId: "0",
      password: undefined,
      userStatus: undefined,
      deviceType: 0,
      deviceDetails: {},
      location: undefined
    };
  }
  var CreateSessionRequest = {
    encode: function encode(message, writer) {
      if (writer === void 0) {
        writer = _m0.Writer.create();
      }
      if (message.version !== 0) {
        writer.uint32(8).int32(message.version);
      }
      if (message.userId !== "0") {
        writer.uint32(16).int64(message.userId);
      }
      if (message.password !== undefined) {
        writer.uint32(26).string(message.password);
      }
      if (message.userStatus !== undefined) {
        writer.uint32(32).int32(message.userStatus);
      }
      if (message.deviceType !== 0) {
        writer.uint32(40).int32(message.deviceType);
      }
      Object.entries(message.deviceDetails).forEach(function (_a) {
        var key = _a[0],
          value = _a[1];
        CreateSessionRequest_DeviceDetailsEntry.encode({
          key: key,
          value: value
        }, writer.uint32(50).fork()).ldelim();
      });
      if (message.location !== undefined) {
        UserLocation$1.encode(message.location, writer.uint32(58).fork()).ldelim();
      }
      return writer;
    },
    decode: function decode(input, length) {
      var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
      var end = length === undefined ? reader.len : reader.pos + length;
      var message = createBaseCreateSessionRequest();
      while (reader.pos < end) {
        var tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            message.version = reader.int32();
            break;
          case 2:
            message.userId = longToString$d(reader.int64());
            break;
          case 3:
            message.password = reader.string();
            break;
          case 4:
            message.userStatus = reader.int32();
            break;
          case 5:
            message.deviceType = reader.int32();
            break;
          case 6:
            var entry6 = CreateSessionRequest_DeviceDetailsEntry.decode(reader, reader.uint32());
            if (entry6.value !== undefined) {
              message.deviceDetails[entry6.key] = entry6.value;
            }
            break;
          case 7:
            message.location = UserLocation$1.decode(reader, reader.uint32());
            break;
          default:
            reader.skipType(tag & 7);
            break;
        }
      }
      return message;
    }
  };
  function createBaseCreateSessionRequest_DeviceDetailsEntry() {
    return {
      key: "",
      value: ""
    };
  }
  var CreateSessionRequest_DeviceDetailsEntry = {
    encode: function encode(message, writer) {
      if (writer === void 0) {
        writer = _m0.Writer.create();
      }
      if (message.key !== "") {
        writer.uint32(10).string(message.key);
      }
      if (message.value !== "") {
        writer.uint32(18).string(message.value);
      }
      return writer;
    },
    decode: function decode(input, length) {
      var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
      var end = length === undefined ? reader.len : reader.pos + length;
      var message = createBaseCreateSessionRequest_DeviceDetailsEntry();
      while (reader.pos < end) {
        var tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            message.key = reader.string();
            break;
          case 2:
            message.value = reader.string();
            break;
          default:
            reader.skipType(tag & 7);
            break;
        }
      }
      return message;
    }
  };
  function longToString$d(long) {
    return long.toString();
  }
  if (_m0.util.Long !== long) {
    _m0.util.Long = long;
    _m0.configure();
  }

  function createBaseDeleteSessionRequest() {
    return {};
  }
  var DeleteSessionRequest = {
    encode: function encode(_, writer) {
      if (writer === void 0) {
        writer = _m0.Writer.create();
      }
      return writer;
    },
    decode: function decode(input, length) {
      var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
      var end = length === undefined ? reader.len : reader.pos + length;
      var message = createBaseDeleteSessionRequest();
      while (reader.pos < end) {
        var tag = reader.uint32();
        switch (tag >>> 3) {
          default:
            reader.skipType(tag & 7);
            break;
        }
      }
      return message;
    }
  };

  function createBaseQueryNearbyUsersRequest() {
    return {
      latitude: 0,
      longitude: 0,
      maxCount: undefined,
      maxDistance: undefined,
      withCoordinates: undefined,
      withDistance: undefined,
      withUserInfo: undefined
    };
  }
  var QueryNearbyUsersRequest = {
    encode: function encode(message, writer) {
      if (writer === void 0) {
        writer = _m0.Writer.create();
      }
      if (message.latitude !== 0) {
        writer.uint32(13).float(message.latitude);
      }
      if (message.longitude !== 0) {
        writer.uint32(21).float(message.longitude);
      }
      if (message.maxCount !== undefined) {
        writer.uint32(24).int32(message.maxCount);
      }
      if (message.maxDistance !== undefined) {
        writer.uint32(32).int32(message.maxDistance);
      }
      if (message.withCoordinates !== undefined) {
        writer.uint32(40).bool(message.withCoordinates);
      }
      if (message.withDistance !== undefined) {
        writer.uint32(48).bool(message.withDistance);
      }
      if (message.withUserInfo !== undefined) {
        writer.uint32(56).bool(message.withUserInfo);
      }
      return writer;
    },
    decode: function decode(input, length) {
      var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
      var end = length === undefined ? reader.len : reader.pos + length;
      var message = createBaseQueryNearbyUsersRequest();
      while (reader.pos < end) {
        var tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            message.latitude = reader.float();
            break;
          case 2:
            message.longitude = reader.float();
            break;
          case 3:
            message.maxCount = reader.int32();
            break;
          case 4:
            message.maxDistance = reader.int32();
            break;
          case 5:
            message.withCoordinates = reader.bool();
            break;
          case 6:
            message.withDistance = reader.bool();
            break;
          case 7:
            message.withUserInfo = reader.bool();
            break;
          default:
            reader.skipType(tag & 7);
            break;
        }
      }
      return message;
    }
  };

  function createBaseQueryUserOnlineStatusesRequest() {
    return {
      userIds: []
    };
  }
  var QueryUserOnlineStatusesRequest = {
    encode: function encode(message, writer) {
      if (writer === void 0) {
        writer = _m0.Writer.create();
      }
      writer.uint32(10).fork();
      for (var _i = 0, _a = message.userIds; _i < _a.length; _i++) {
        var v = _a[_i];
        writer.int64(v);
      }
      writer.ldelim();
      return writer;
    },
    decode: function decode(input, length) {
      var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
      var end = length === undefined ? reader.len : reader.pos + length;
      var message = createBaseQueryUserOnlineStatusesRequest();
      while (reader.pos < end) {
        var tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            if ((tag & 7) === 2) {
              var end2 = reader.uint32() + reader.pos;
              while (reader.pos < end2) {
                message.userIds.push(longToString$c(reader.int64()));
              }
            } else {
              message.userIds.push(longToString$c(reader.int64()));
            }
            break;
          default:
            reader.skipType(tag & 7);
            break;
        }
      }
      return message;
    }
  };
  function longToString$c(long) {
    return long.toString();
  }
  if (_m0.util.Long !== long) {
    _m0.util.Long = long;
    _m0.configure();
  }

  function createBaseQueryUserProfilesRequest() {
    return {
      userIds: [],
      lastUpdatedDate: undefined
    };
  }
  var QueryUserProfilesRequest = {
    encode: function encode(message, writer) {
      if (writer === void 0) {
        writer = _m0.Writer.create();
      }
      writer.uint32(10).fork();
      for (var _i = 0, _a = message.userIds; _i < _a.length; _i++) {
        var v = _a[_i];
        writer.int64(v);
      }
      writer.ldelim();
      if (message.lastUpdatedDate !== undefined) {
        writer.uint32(16).int64(message.lastUpdatedDate);
      }
      return writer;
    },
    decode: function decode(input, length) {
      var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
      var end = length === undefined ? reader.len : reader.pos + length;
      var message = createBaseQueryUserProfilesRequest();
      while (reader.pos < end) {
        var tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            if ((tag & 7) === 2) {
              var end2 = reader.uint32() + reader.pos;
              while (reader.pos < end2) {
                message.userIds.push(longToString$b(reader.int64()));
              }
            } else {
              message.userIds.push(longToString$b(reader.int64()));
            }
            break;
          case 2:
            message.lastUpdatedDate = longToString$b(reader.int64());
            break;
          default:
            reader.skipType(tag & 7);
            break;
        }
      }
      return message;
    }
  };
  function longToString$b(long) {
    return long.toString();
  }
  if (_m0.util.Long !== long) {
    _m0.util.Long = long;
    _m0.configure();
  }

  function createBaseCreateFriendRequestRequest() {
    return {
      recipientId: "0",
      content: ""
    };
  }
  var CreateFriendRequestRequest = {
    encode: function encode(message, writer) {
      if (writer === void 0) {
        writer = _m0.Writer.create();
      }
      if (message.recipientId !== "0") {
        writer.uint32(8).int64(message.recipientId);
      }
      if (message.content !== "") {
        writer.uint32(18).string(message.content);
      }
      return writer;
    },
    decode: function decode(input, length) {
      var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
      var end = length === undefined ? reader.len : reader.pos + length;
      var message = createBaseCreateFriendRequestRequest();
      while (reader.pos < end) {
        var tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            message.recipientId = longToString$a(reader.int64());
            break;
          case 2:
            message.content = reader.string();
            break;
          default:
            reader.skipType(tag & 7);
            break;
        }
      }
      return message;
    }
  };
  function longToString$a(long) {
    return long.toString();
  }
  if (_m0.util.Long !== long) {
    _m0.util.Long = long;
    _m0.configure();
  }

  function createBaseCreateRelationshipGroupRequest() {
    return {
      name: ""
    };
  }
  var CreateRelationshipGroupRequest = {
    encode: function encode(message, writer) {
      if (writer === void 0) {
        writer = _m0.Writer.create();
      }
      if (message.name !== "") {
        writer.uint32(10).string(message.name);
      }
      return writer;
    },
    decode: function decode(input, length) {
      var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
      var end = length === undefined ? reader.len : reader.pos + length;
      var message = createBaseCreateRelationshipGroupRequest();
      while (reader.pos < end) {
        var tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            message.name = reader.string();
            break;
          default:
            reader.skipType(tag & 7);
            break;
        }
      }
      return message;
    }
  };

  function createBaseCreateRelationshipRequest() {
    return {
      userId: "0",
      blocked: false,
      groupIndex: undefined
    };
  }
  var CreateRelationshipRequest = {
    encode: function encode(message, writer) {
      if (writer === void 0) {
        writer = _m0.Writer.create();
      }
      if (message.userId !== "0") {
        writer.uint32(8).int64(message.userId);
      }
      if (message.blocked === true) {
        writer.uint32(16).bool(message.blocked);
      }
      if (message.groupIndex !== undefined) {
        writer.uint32(24).int32(message.groupIndex);
      }
      return writer;
    },
    decode: function decode(input, length) {
      var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
      var end = length === undefined ? reader.len : reader.pos + length;
      var message = createBaseCreateRelationshipRequest();
      while (reader.pos < end) {
        var tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            message.userId = longToString$9(reader.int64());
            break;
          case 2:
            message.blocked = reader.bool();
            break;
          case 3:
            message.groupIndex = reader.int32();
            break;
          default:
            reader.skipType(tag & 7);
            break;
        }
      }
      return message;
    }
  };
  function longToString$9(long) {
    return long.toString();
  }
  if (_m0.util.Long !== long) {
    _m0.util.Long = long;
    _m0.configure();
  }

  function createBaseDeleteRelationshipGroupRequest() {
    return {
      groupIndex: 0,
      targetGroupIndex: undefined
    };
  }
  var DeleteRelationshipGroupRequest = {
    encode: function encode(message, writer) {
      if (writer === void 0) {
        writer = _m0.Writer.create();
      }
      if (message.groupIndex !== 0) {
        writer.uint32(8).int32(message.groupIndex);
      }
      if (message.targetGroupIndex !== undefined) {
        writer.uint32(16).int32(message.targetGroupIndex);
      }
      return writer;
    },
    decode: function decode(input, length) {
      var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
      var end = length === undefined ? reader.len : reader.pos + length;
      var message = createBaseDeleteRelationshipGroupRequest();
      while (reader.pos < end) {
        var tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            message.groupIndex = reader.int32();
            break;
          case 2:
            message.targetGroupIndex = reader.int32();
            break;
          default:
            reader.skipType(tag & 7);
            break;
        }
      }
      return message;
    }
  };

  function createBaseDeleteRelationshipRequest() {
    return {
      userId: "0",
      groupIndex: undefined,
      targetGroupIndex: undefined
    };
  }
  var DeleteRelationshipRequest = {
    encode: function encode(message, writer) {
      if (writer === void 0) {
        writer = _m0.Writer.create();
      }
      if (message.userId !== "0") {
        writer.uint32(8).int64(message.userId);
      }
      if (message.groupIndex !== undefined) {
        writer.uint32(16).int32(message.groupIndex);
      }
      if (message.targetGroupIndex !== undefined) {
        writer.uint32(24).int32(message.targetGroupIndex);
      }
      return writer;
    },
    decode: function decode(input, length) {
      var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
      var end = length === undefined ? reader.len : reader.pos + length;
      var message = createBaseDeleteRelationshipRequest();
      while (reader.pos < end) {
        var tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            message.userId = longToString$8(reader.int64());
            break;
          case 2:
            message.groupIndex = reader.int32();
            break;
          case 3:
            message.targetGroupIndex = reader.int32();
            break;
          default:
            reader.skipType(tag & 7);
            break;
        }
      }
      return message;
    }
  };
  function longToString$8(long) {
    return long.toString();
  }
  if (_m0.util.Long !== long) {
    _m0.util.Long = long;
    _m0.configure();
  }

  function createBaseQueryFriendRequestsRequest() {
    return {
      areSentByMe: false,
      lastUpdatedDate: undefined
    };
  }
  var QueryFriendRequestsRequest = {
    encode: function encode(message, writer) {
      if (writer === void 0) {
        writer = _m0.Writer.create();
      }
      if (message.areSentByMe === true) {
        writer.uint32(8).bool(message.areSentByMe);
      }
      if (message.lastUpdatedDate !== undefined) {
        writer.uint32(16).int64(message.lastUpdatedDate);
      }
      return writer;
    },
    decode: function decode(input, length) {
      var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
      var end = length === undefined ? reader.len : reader.pos + length;
      var message = createBaseQueryFriendRequestsRequest();
      while (reader.pos < end) {
        var tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            message.areSentByMe = reader.bool();
            break;
          case 2:
            message.lastUpdatedDate = longToString$7(reader.int64());
            break;
          default:
            reader.skipType(tag & 7);
            break;
        }
      }
      return message;
    }
  };
  function longToString$7(long) {
    return long.toString();
  }
  if (_m0.util.Long !== long) {
    _m0.util.Long = long;
    _m0.configure();
  }

  function createBaseQueryRelatedUserIdsRequest() {
    return {
      blocked: undefined,
      groupIndexes: [],
      lastUpdatedDate: undefined
    };
  }
  var QueryRelatedUserIdsRequest = {
    encode: function encode(message, writer) {
      if (writer === void 0) {
        writer = _m0.Writer.create();
      }
      if (message.blocked !== undefined) {
        writer.uint32(8).bool(message.blocked);
      }
      writer.uint32(18).fork();
      for (var _i = 0, _a = message.groupIndexes; _i < _a.length; _i++) {
        var v = _a[_i];
        writer.int32(v);
      }
      writer.ldelim();
      if (message.lastUpdatedDate !== undefined) {
        writer.uint32(24).int64(message.lastUpdatedDate);
      }
      return writer;
    },
    decode: function decode(input, length) {
      var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
      var end = length === undefined ? reader.len : reader.pos + length;
      var message = createBaseQueryRelatedUserIdsRequest();
      while (reader.pos < end) {
        var tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            message.blocked = reader.bool();
            break;
          case 2:
            if ((tag & 7) === 2) {
              var end2 = reader.uint32() + reader.pos;
              while (reader.pos < end2) {
                message.groupIndexes.push(reader.int32());
              }
            } else {
              message.groupIndexes.push(reader.int32());
            }
            break;
          case 3:
            message.lastUpdatedDate = longToString$6(reader.int64());
            break;
          default:
            reader.skipType(tag & 7);
            break;
        }
      }
      return message;
    }
  };
  function longToString$6(long) {
    return long.toString();
  }
  if (_m0.util.Long !== long) {
    _m0.util.Long = long;
    _m0.configure();
  }

  function createBaseQueryRelationshipGroupsRequest() {
    return {
      lastUpdatedDate: undefined
    };
  }
  var QueryRelationshipGroupsRequest = {
    encode: function encode(message, writer) {
      if (writer === void 0) {
        writer = _m0.Writer.create();
      }
      if (message.lastUpdatedDate !== undefined) {
        writer.uint32(8).int64(message.lastUpdatedDate);
      }
      return writer;
    },
    decode: function decode(input, length) {
      var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
      var end = length === undefined ? reader.len : reader.pos + length;
      var message = createBaseQueryRelationshipGroupsRequest();
      while (reader.pos < end) {
        var tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            message.lastUpdatedDate = longToString$5(reader.int64());
            break;
          default:
            reader.skipType(tag & 7);
            break;
        }
      }
      return message;
    }
  };
  function longToString$5(long) {
    return long.toString();
  }
  if (_m0.util.Long !== long) {
    _m0.util.Long = long;
    _m0.configure();
  }

  function createBaseQueryRelationshipsRequest() {
    return {
      userIds: [],
      blocked: undefined,
      groupIndexes: [],
      lastUpdatedDate: undefined
    };
  }
  var QueryRelationshipsRequest = {
    encode: function encode(message, writer) {
      if (writer === void 0) {
        writer = _m0.Writer.create();
      }
      writer.uint32(10).fork();
      for (var _i = 0, _a = message.userIds; _i < _a.length; _i++) {
        var v = _a[_i];
        writer.int64(v);
      }
      writer.ldelim();
      if (message.blocked !== undefined) {
        writer.uint32(16).bool(message.blocked);
      }
      writer.uint32(26).fork();
      for (var _b = 0, _c = message.groupIndexes; _b < _c.length; _b++) {
        var v = _c[_b];
        writer.int32(v);
      }
      writer.ldelim();
      if (message.lastUpdatedDate !== undefined) {
        writer.uint32(32).int64(message.lastUpdatedDate);
      }
      return writer;
    },
    decode: function decode(input, length) {
      var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
      var end = length === undefined ? reader.len : reader.pos + length;
      var message = createBaseQueryRelationshipsRequest();
      while (reader.pos < end) {
        var tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            if ((tag & 7) === 2) {
              var end2 = reader.uint32() + reader.pos;
              while (reader.pos < end2) {
                message.userIds.push(longToString$4(reader.int64()));
              }
            } else {
              message.userIds.push(longToString$4(reader.int64()));
            }
            break;
          case 2:
            message.blocked = reader.bool();
            break;
          case 3:
            if ((tag & 7) === 2) {
              var end2 = reader.uint32() + reader.pos;
              while (reader.pos < end2) {
                message.groupIndexes.push(reader.int32());
              }
            } else {
              message.groupIndexes.push(reader.int32());
            }
            break;
          case 4:
            message.lastUpdatedDate = longToString$4(reader.int64());
            break;
          default:
            reader.skipType(tag & 7);
            break;
        }
      }
      return message;
    }
  };
  function longToString$4(long) {
    return long.toString();
  }
  if (_m0.util.Long !== long) {
    _m0.util.Long = long;
    _m0.configure();
  }

  function createBaseUpdateFriendRequestRequest() {
    return {
      requestId: "0",
      responseAction: 0,
      reason: undefined
    };
  }
  var UpdateFriendRequestRequest = {
    encode: function encode(message, writer) {
      if (writer === void 0) {
        writer = _m0.Writer.create();
      }
      if (message.requestId !== "0") {
        writer.uint32(8).int64(message.requestId);
      }
      if (message.responseAction !== 0) {
        writer.uint32(16).int32(message.responseAction);
      }
      if (message.reason !== undefined) {
        writer.uint32(26).string(message.reason);
      }
      return writer;
    },
    decode: function decode(input, length) {
      var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
      var end = length === undefined ? reader.len : reader.pos + length;
      var message = createBaseUpdateFriendRequestRequest();
      while (reader.pos < end) {
        var tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            message.requestId = longToString$3(reader.int64());
            break;
          case 2:
            message.responseAction = reader.int32();
            break;
          case 3:
            message.reason = reader.string();
            break;
          default:
            reader.skipType(tag & 7);
            break;
        }
      }
      return message;
    }
  };
  function longToString$3(long) {
    return long.toString();
  }
  if (_m0.util.Long !== long) {
    _m0.util.Long = long;
    _m0.configure();
  }

  function createBaseUpdateRelationshipGroupRequest() {
    return {
      groupIndex: 0,
      newName: ""
    };
  }
  var UpdateRelationshipGroupRequest = {
    encode: function encode(message, writer) {
      if (writer === void 0) {
        writer = _m0.Writer.create();
      }
      if (message.groupIndex !== 0) {
        writer.uint32(8).int32(message.groupIndex);
      }
      if (message.newName !== "") {
        writer.uint32(18).string(message.newName);
      }
      return writer;
    },
    decode: function decode(input, length) {
      var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
      var end = length === undefined ? reader.len : reader.pos + length;
      var message = createBaseUpdateRelationshipGroupRequest();
      while (reader.pos < end) {
        var tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            message.groupIndex = reader.int32();
            break;
          case 2:
            message.newName = reader.string();
            break;
          default:
            reader.skipType(tag & 7);
            break;
        }
      }
      return message;
    }
  };

  function createBaseUpdateRelationshipRequest() {
    return {
      userId: "0",
      blocked: undefined,
      newGroupIndex: undefined,
      deleteGroupIndex: undefined
    };
  }
  var UpdateRelationshipRequest = {
    encode: function encode(message, writer) {
      if (writer === void 0) {
        writer = _m0.Writer.create();
      }
      if (message.userId !== "0") {
        writer.uint32(8).int64(message.userId);
      }
      if (message.blocked !== undefined) {
        writer.uint32(16).bool(message.blocked);
      }
      if (message.newGroupIndex !== undefined) {
        writer.uint32(24).int32(message.newGroupIndex);
      }
      if (message.deleteGroupIndex !== undefined) {
        writer.uint32(32).int32(message.deleteGroupIndex);
      }
      return writer;
    },
    decode: function decode(input, length) {
      var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
      var end = length === undefined ? reader.len : reader.pos + length;
      var message = createBaseUpdateRelationshipRequest();
      while (reader.pos < end) {
        var tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            message.userId = longToString$2(reader.int64());
            break;
          case 2:
            message.blocked = reader.bool();
            break;
          case 3:
            message.newGroupIndex = reader.int32();
            break;
          case 4:
            message.deleteGroupIndex = reader.int32();
            break;
          default:
            reader.skipType(tag & 7);
            break;
        }
      }
      return message;
    }
  };
  function longToString$2(long) {
    return long.toString();
  }
  if (_m0.util.Long !== long) {
    _m0.util.Long = long;
    _m0.configure();
  }

  function createBaseUpdateUserLocationRequest() {
    return {
      latitude: 0,
      longitude: 0,
      details: {}
    };
  }
  var UpdateUserLocationRequest = {
    encode: function encode(message, writer) {
      if (writer === void 0) {
        writer = _m0.Writer.create();
      }
      if (message.latitude !== 0) {
        writer.uint32(13).float(message.latitude);
      }
      if (message.longitude !== 0) {
        writer.uint32(21).float(message.longitude);
      }
      Object.entries(message.details).forEach(function (_a) {
        var key = _a[0],
          value = _a[1];
        UpdateUserLocationRequest_DetailsEntry.encode({
          key: key,
          value: value
        }, writer.uint32(26).fork()).ldelim();
      });
      return writer;
    },
    decode: function decode(input, length) {
      var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
      var end = length === undefined ? reader.len : reader.pos + length;
      var message = createBaseUpdateUserLocationRequest();
      while (reader.pos < end) {
        var tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            message.latitude = reader.float();
            break;
          case 2:
            message.longitude = reader.float();
            break;
          case 3:
            var entry3 = UpdateUserLocationRequest_DetailsEntry.decode(reader, reader.uint32());
            if (entry3.value !== undefined) {
              message.details[entry3.key] = entry3.value;
            }
            break;
          default:
            reader.skipType(tag & 7);
            break;
        }
      }
      return message;
    }
  };
  function createBaseUpdateUserLocationRequest_DetailsEntry() {
    return {
      key: "",
      value: ""
    };
  }
  var UpdateUserLocationRequest_DetailsEntry = {
    encode: function encode(message, writer) {
      if (writer === void 0) {
        writer = _m0.Writer.create();
      }
      if (message.key !== "") {
        writer.uint32(10).string(message.key);
      }
      if (message.value !== "") {
        writer.uint32(18).string(message.value);
      }
      return writer;
    },
    decode: function decode(input, length) {
      var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
      var end = length === undefined ? reader.len : reader.pos + length;
      var message = createBaseUpdateUserLocationRequest_DetailsEntry();
      while (reader.pos < end) {
        var tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            message.key = reader.string();
            break;
          case 2:
            message.value = reader.string();
            break;
          default:
            reader.skipType(tag & 7);
            break;
        }
      }
      return message;
    }
  };

  function createBaseUpdateUserOnlineStatusRequest() {
    return {
      deviceTypes: [],
      userStatus: 0
    };
  }
  var UpdateUserOnlineStatusRequest = {
    encode: function encode(message, writer) {
      if (writer === void 0) {
        writer = _m0.Writer.create();
      }
      writer.uint32(10).fork();
      for (var _i = 0, _a = message.deviceTypes; _i < _a.length; _i++) {
        var v = _a[_i];
        writer.int32(v);
      }
      writer.ldelim();
      if (message.userStatus !== 0) {
        writer.uint32(16).int32(message.userStatus);
      }
      return writer;
    },
    decode: function decode(input, length) {
      var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
      var end = length === undefined ? reader.len : reader.pos + length;
      var message = createBaseUpdateUserOnlineStatusRequest();
      while (reader.pos < end) {
        var tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            if ((tag & 7) === 2) {
              var end2 = reader.uint32() + reader.pos;
              while (reader.pos < end2) {
                message.deviceTypes.push(reader.int32());
              }
            } else {
              message.deviceTypes.push(reader.int32());
            }
            break;
          case 2:
            message.userStatus = reader.int32();
            break;
          default:
            reader.skipType(tag & 7);
            break;
        }
      }
      return message;
    }
  };

  function createBaseUpdateUserRequest() {
    return {
      password: undefined,
      name: undefined,
      intro: undefined,
      profilePicture: undefined,
      profileAccessStrategy: undefined
    };
  }
  var UpdateUserRequest = {
    encode: function encode(message, writer) {
      if (writer === void 0) {
        writer = _m0.Writer.create();
      }
      if (message.password !== undefined) {
        writer.uint32(10).string(message.password);
      }
      if (message.name !== undefined) {
        writer.uint32(18).string(message.name);
      }
      if (message.intro !== undefined) {
        writer.uint32(26).string(message.intro);
      }
      if (message.profilePicture !== undefined) {
        writer.uint32(34).string(message.profilePicture);
      }
      if (message.profileAccessStrategy !== undefined) {
        writer.uint32(40).int32(message.profileAccessStrategy);
      }
      return writer;
    },
    decode: function decode(input, length) {
      var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
      var end = length === undefined ? reader.len : reader.pos + length;
      var message = createBaseUpdateUserRequest();
      while (reader.pos < end) {
        var tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            message.password = reader.string();
            break;
          case 2:
            message.name = reader.string();
            break;
          case 3:
            message.intro = reader.string();
            break;
          case 4:
            message.profilePicture = reader.string();
            break;
          case 5:
            message.profileAccessStrategy = reader.int32();
            break;
          default:
            reader.skipType(tag & 7);
            break;
        }
      }
      return message;
    }
  };

  function createBaseTurmsRequest() {
    return {
      requestId: undefined,
      createSessionRequest: undefined,
      deleteSessionRequest: undefined,
      queryConversationsRequest: undefined,
      updateConversationRequest: undefined,
      updateTypingStatusRequest: undefined,
      createMessageRequest: undefined,
      queryMessagesRequest: undefined,
      updateMessageRequest: undefined,
      createGroupMembersRequest: undefined,
      deleteGroupMembersRequest: undefined,
      queryGroupMembersRequest: undefined,
      updateGroupMemberRequest: undefined,
      queryUserProfilesRequest: undefined,
      queryNearbyUsersRequest: undefined,
      queryUserOnlineStatusesRequest: undefined,
      updateUserLocationRequest: undefined,
      updateUserOnlineStatusRequest: undefined,
      updateUserRequest: undefined,
      createFriendRequestRequest: undefined,
      createRelationshipGroupRequest: undefined,
      createRelationshipRequest: undefined,
      deleteRelationshipGroupRequest: undefined,
      deleteRelationshipRequest: undefined,
      queryFriendRequestsRequest: undefined,
      queryRelatedUserIdsRequest: undefined,
      queryRelationshipGroupsRequest: undefined,
      queryRelationshipsRequest: undefined,
      updateFriendRequestRequest: undefined,
      updateRelationshipGroupRequest: undefined,
      updateRelationshipRequest: undefined,
      createGroupRequest: undefined,
      deleteGroupRequest: undefined,
      queryGroupsRequest: undefined,
      queryJoinedGroupIdsRequest: undefined,
      queryJoinedGroupInfosRequest: undefined,
      updateGroupRequest: undefined,
      createGroupBlockedUserRequest: undefined,
      deleteGroupBlockedUserRequest: undefined,
      queryGroupBlockedUserIdsRequest: undefined,
      queryGroupBlockedUserInfosRequest: undefined,
      checkGroupJoinQuestionsAnswersRequest: undefined,
      createGroupInvitationRequest: undefined,
      createGroupJoinRequestRequest: undefined,
      createGroupJoinQuestionsRequest: undefined,
      deleteGroupInvitationRequest: undefined,
      deleteGroupJoinRequestRequest: undefined,
      deleteGroupJoinQuestionsRequest: undefined,
      queryGroupInvitationsRequest: undefined,
      queryGroupJoinRequestsRequest: undefined,
      queryGroupJoinQuestionsRequest: undefined,
      updateGroupJoinQuestionRequest: undefined,
      deleteResourceRequest: undefined,
      queryResourceDownloadInfoRequest: undefined,
      queryResourceUploadInfoRequest: undefined,
      queryMessageAttachmentInfosRequest: undefined,
      updateMessageAttachmentInfoRequest: undefined
    };
  }
  var TurmsRequest = {
    encode: function encode(message, writer) {
      if (writer === void 0) {
        writer = _m0.Writer.create();
      }
      if (message.requestId !== undefined) {
        writer.uint32(8).int64(message.requestId);
      }
      if (message.createSessionRequest !== undefined) {
        CreateSessionRequest.encode(message.createSessionRequest, writer.uint32(26).fork()).ldelim();
      }
      if (message.deleteSessionRequest !== undefined) {
        DeleteSessionRequest.encode(message.deleteSessionRequest, writer.uint32(34).fork()).ldelim();
      }
      if (message.queryConversationsRequest !== undefined) {
        QueryConversationsRequest.encode(message.queryConversationsRequest, writer.uint32(42).fork()).ldelim();
      }
      if (message.updateConversationRequest !== undefined) {
        UpdateConversationRequest.encode(message.updateConversationRequest, writer.uint32(50).fork()).ldelim();
      }
      if (message.updateTypingStatusRequest !== undefined) {
        UpdateTypingStatusRequest.encode(message.updateTypingStatusRequest, writer.uint32(58).fork()).ldelim();
      }
      if (message.createMessageRequest !== undefined) {
        CreateMessageRequest.encode(message.createMessageRequest, writer.uint32(66).fork()).ldelim();
      }
      if (message.queryMessagesRequest !== undefined) {
        QueryMessagesRequest.encode(message.queryMessagesRequest, writer.uint32(74).fork()).ldelim();
      }
      if (message.updateMessageRequest !== undefined) {
        UpdateMessageRequest.encode(message.updateMessageRequest, writer.uint32(82).fork()).ldelim();
      }
      if (message.createGroupMembersRequest !== undefined) {
        CreateGroupMembersRequest.encode(message.createGroupMembersRequest, writer.uint32(90).fork()).ldelim();
      }
      if (message.deleteGroupMembersRequest !== undefined) {
        DeleteGroupMembersRequest.encode(message.deleteGroupMembersRequest, writer.uint32(98).fork()).ldelim();
      }
      if (message.queryGroupMembersRequest !== undefined) {
        QueryGroupMembersRequest.encode(message.queryGroupMembersRequest, writer.uint32(106).fork()).ldelim();
      }
      if (message.updateGroupMemberRequest !== undefined) {
        UpdateGroupMemberRequest.encode(message.updateGroupMemberRequest, writer.uint32(114).fork()).ldelim();
      }
      if (message.queryUserProfilesRequest !== undefined) {
        QueryUserProfilesRequest.encode(message.queryUserProfilesRequest, writer.uint32(802).fork()).ldelim();
      }
      if (message.queryNearbyUsersRequest !== undefined) {
        QueryNearbyUsersRequest.encode(message.queryNearbyUsersRequest, writer.uint32(810).fork()).ldelim();
      }
      if (message.queryUserOnlineStatusesRequest !== undefined) {
        QueryUserOnlineStatusesRequest.encode(message.queryUserOnlineStatusesRequest, writer.uint32(818).fork()).ldelim();
      }
      if (message.updateUserLocationRequest !== undefined) {
        UpdateUserLocationRequest.encode(message.updateUserLocationRequest, writer.uint32(826).fork()).ldelim();
      }
      if (message.updateUserOnlineStatusRequest !== undefined) {
        UpdateUserOnlineStatusRequest.encode(message.updateUserOnlineStatusRequest, writer.uint32(834).fork()).ldelim();
      }
      if (message.updateUserRequest !== undefined) {
        UpdateUserRequest.encode(message.updateUserRequest, writer.uint32(842).fork()).ldelim();
      }
      if (message.createFriendRequestRequest !== undefined) {
        CreateFriendRequestRequest.encode(message.createFriendRequestRequest, writer.uint32(1602).fork()).ldelim();
      }
      if (message.createRelationshipGroupRequest !== undefined) {
        CreateRelationshipGroupRequest.encode(message.createRelationshipGroupRequest, writer.uint32(1610).fork()).ldelim();
      }
      if (message.createRelationshipRequest !== undefined) {
        CreateRelationshipRequest.encode(message.createRelationshipRequest, writer.uint32(1618).fork()).ldelim();
      }
      if (message.deleteRelationshipGroupRequest !== undefined) {
        DeleteRelationshipGroupRequest.encode(message.deleteRelationshipGroupRequest, writer.uint32(1626).fork()).ldelim();
      }
      if (message.deleteRelationshipRequest !== undefined) {
        DeleteRelationshipRequest.encode(message.deleteRelationshipRequest, writer.uint32(1634).fork()).ldelim();
      }
      if (message.queryFriendRequestsRequest !== undefined) {
        QueryFriendRequestsRequest.encode(message.queryFriendRequestsRequest, writer.uint32(1642).fork()).ldelim();
      }
      if (message.queryRelatedUserIdsRequest !== undefined) {
        QueryRelatedUserIdsRequest.encode(message.queryRelatedUserIdsRequest, writer.uint32(1650).fork()).ldelim();
      }
      if (message.queryRelationshipGroupsRequest !== undefined) {
        QueryRelationshipGroupsRequest.encode(message.queryRelationshipGroupsRequest, writer.uint32(1658).fork()).ldelim();
      }
      if (message.queryRelationshipsRequest !== undefined) {
        QueryRelationshipsRequest.encode(message.queryRelationshipsRequest, writer.uint32(1666).fork()).ldelim();
      }
      if (message.updateFriendRequestRequest !== undefined) {
        UpdateFriendRequestRequest.encode(message.updateFriendRequestRequest, writer.uint32(1674).fork()).ldelim();
      }
      if (message.updateRelationshipGroupRequest !== undefined) {
        UpdateRelationshipGroupRequest.encode(message.updateRelationshipGroupRequest, writer.uint32(1682).fork()).ldelim();
      }
      if (message.updateRelationshipRequest !== undefined) {
        UpdateRelationshipRequest.encode(message.updateRelationshipRequest, writer.uint32(1690).fork()).ldelim();
      }
      if (message.createGroupRequest !== undefined) {
        CreateGroupRequest.encode(message.createGroupRequest, writer.uint32(2402).fork()).ldelim();
      }
      if (message.deleteGroupRequest !== undefined) {
        DeleteGroupRequest.encode(message.deleteGroupRequest, writer.uint32(2410).fork()).ldelim();
      }
      if (message.queryGroupsRequest !== undefined) {
        QueryGroupsRequest.encode(message.queryGroupsRequest, writer.uint32(2418).fork()).ldelim();
      }
      if (message.queryJoinedGroupIdsRequest !== undefined) {
        QueryJoinedGroupIdsRequest.encode(message.queryJoinedGroupIdsRequest, writer.uint32(2426).fork()).ldelim();
      }
      if (message.queryJoinedGroupInfosRequest !== undefined) {
        QueryJoinedGroupInfosRequest.encode(message.queryJoinedGroupInfosRequest, writer.uint32(2434).fork()).ldelim();
      }
      if (message.updateGroupRequest !== undefined) {
        UpdateGroupRequest.encode(message.updateGroupRequest, writer.uint32(2442).fork()).ldelim();
      }
      if (message.createGroupBlockedUserRequest !== undefined) {
        CreateGroupBlockedUserRequest.encode(message.createGroupBlockedUserRequest, writer.uint32(3202).fork()).ldelim();
      }
      if (message.deleteGroupBlockedUserRequest !== undefined) {
        DeleteGroupBlockedUserRequest.encode(message.deleteGroupBlockedUserRequest, writer.uint32(3210).fork()).ldelim();
      }
      if (message.queryGroupBlockedUserIdsRequest !== undefined) {
        QueryGroupBlockedUserIdsRequest.encode(message.queryGroupBlockedUserIdsRequest, writer.uint32(3218).fork()).ldelim();
      }
      if (message.queryGroupBlockedUserInfosRequest !== undefined) {
        QueryGroupBlockedUserInfosRequest.encode(message.queryGroupBlockedUserInfosRequest, writer.uint32(3226).fork()).ldelim();
      }
      if (message.checkGroupJoinQuestionsAnswersRequest !== undefined) {
        CheckGroupJoinQuestionsAnswersRequest.encode(message.checkGroupJoinQuestionsAnswersRequest, writer.uint32(4002).fork()).ldelim();
      }
      if (message.createGroupInvitationRequest !== undefined) {
        CreateGroupInvitationRequest.encode(message.createGroupInvitationRequest, writer.uint32(4010).fork()).ldelim();
      }
      if (message.createGroupJoinRequestRequest !== undefined) {
        CreateGroupJoinRequestRequest.encode(message.createGroupJoinRequestRequest, writer.uint32(4018).fork()).ldelim();
      }
      if (message.createGroupJoinQuestionsRequest !== undefined) {
        CreateGroupJoinQuestionsRequest.encode(message.createGroupJoinQuestionsRequest, writer.uint32(4026).fork()).ldelim();
      }
      if (message.deleteGroupInvitationRequest !== undefined) {
        DeleteGroupInvitationRequest.encode(message.deleteGroupInvitationRequest, writer.uint32(4034).fork()).ldelim();
      }
      if (message.deleteGroupJoinRequestRequest !== undefined) {
        DeleteGroupJoinRequestRequest.encode(message.deleteGroupJoinRequestRequest, writer.uint32(4042).fork()).ldelim();
      }
      if (message.deleteGroupJoinQuestionsRequest !== undefined) {
        DeleteGroupJoinQuestionsRequest.encode(message.deleteGroupJoinQuestionsRequest, writer.uint32(4050).fork()).ldelim();
      }
      if (message.queryGroupInvitationsRequest !== undefined) {
        QueryGroupInvitationsRequest.encode(message.queryGroupInvitationsRequest, writer.uint32(4058).fork()).ldelim();
      }
      if (message.queryGroupJoinRequestsRequest !== undefined) {
        QueryGroupJoinRequestsRequest.encode(message.queryGroupJoinRequestsRequest, writer.uint32(4066).fork()).ldelim();
      }
      if (message.queryGroupJoinQuestionsRequest !== undefined) {
        QueryGroupJoinQuestionsRequest.encode(message.queryGroupJoinQuestionsRequest, writer.uint32(4074).fork()).ldelim();
      }
      if (message.updateGroupJoinQuestionRequest !== undefined) {
        UpdateGroupJoinQuestionRequest.encode(message.updateGroupJoinQuestionRequest, writer.uint32(4082).fork()).ldelim();
      }
      if (message.deleteResourceRequest !== undefined) {
        DeleteResourceRequest.encode(message.deleteResourceRequest, writer.uint32(8002).fork()).ldelim();
      }
      if (message.queryResourceDownloadInfoRequest !== undefined) {
        QueryResourceDownloadInfoRequest.encode(message.queryResourceDownloadInfoRequest, writer.uint32(8010).fork()).ldelim();
      }
      if (message.queryResourceUploadInfoRequest !== undefined) {
        QueryResourceUploadInfoRequest.encode(message.queryResourceUploadInfoRequest, writer.uint32(8018).fork()).ldelim();
      }
      if (message.queryMessageAttachmentInfosRequest !== undefined) {
        QueryMessageAttachmentInfosRequest.encode(message.queryMessageAttachmentInfosRequest, writer.uint32(8026).fork()).ldelim();
      }
      if (message.updateMessageAttachmentInfoRequest !== undefined) {
        UpdateMessageAttachmentInfoRequest.encode(message.updateMessageAttachmentInfoRequest, writer.uint32(8034).fork()).ldelim();
      }
      return writer;
    },
    decode: function decode(input, length) {
      var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
      var end = length === undefined ? reader.len : reader.pos + length;
      var message = createBaseTurmsRequest();
      while (reader.pos < end) {
        var tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            message.requestId = longToString$1(reader.int64());
            break;
          case 3:
            message.createSessionRequest = CreateSessionRequest.decode(reader, reader.uint32());
            break;
          case 4:
            message.deleteSessionRequest = DeleteSessionRequest.decode(reader, reader.uint32());
            break;
          case 5:
            message.queryConversationsRequest = QueryConversationsRequest.decode(reader, reader.uint32());
            break;
          case 6:
            message.updateConversationRequest = UpdateConversationRequest.decode(reader, reader.uint32());
            break;
          case 7:
            message.updateTypingStatusRequest = UpdateTypingStatusRequest.decode(reader, reader.uint32());
            break;
          case 8:
            message.createMessageRequest = CreateMessageRequest.decode(reader, reader.uint32());
            break;
          case 9:
            message.queryMessagesRequest = QueryMessagesRequest.decode(reader, reader.uint32());
            break;
          case 10:
            message.updateMessageRequest = UpdateMessageRequest.decode(reader, reader.uint32());
            break;
          case 11:
            message.createGroupMembersRequest = CreateGroupMembersRequest.decode(reader, reader.uint32());
            break;
          case 12:
            message.deleteGroupMembersRequest = DeleteGroupMembersRequest.decode(reader, reader.uint32());
            break;
          case 13:
            message.queryGroupMembersRequest = QueryGroupMembersRequest.decode(reader, reader.uint32());
            break;
          case 14:
            message.updateGroupMemberRequest = UpdateGroupMemberRequest.decode(reader, reader.uint32());
            break;
          case 100:
            message.queryUserProfilesRequest = QueryUserProfilesRequest.decode(reader, reader.uint32());
            break;
          case 101:
            message.queryNearbyUsersRequest = QueryNearbyUsersRequest.decode(reader, reader.uint32());
            break;
          case 102:
            message.queryUserOnlineStatusesRequest = QueryUserOnlineStatusesRequest.decode(reader, reader.uint32());
            break;
          case 103:
            message.updateUserLocationRequest = UpdateUserLocationRequest.decode(reader, reader.uint32());
            break;
          case 104:
            message.updateUserOnlineStatusRequest = UpdateUserOnlineStatusRequest.decode(reader, reader.uint32());
            break;
          case 105:
            message.updateUserRequest = UpdateUserRequest.decode(reader, reader.uint32());
            break;
          case 200:
            message.createFriendRequestRequest = CreateFriendRequestRequest.decode(reader, reader.uint32());
            break;
          case 201:
            message.createRelationshipGroupRequest = CreateRelationshipGroupRequest.decode(reader, reader.uint32());
            break;
          case 202:
            message.createRelationshipRequest = CreateRelationshipRequest.decode(reader, reader.uint32());
            break;
          case 203:
            message.deleteRelationshipGroupRequest = DeleteRelationshipGroupRequest.decode(reader, reader.uint32());
            break;
          case 204:
            message.deleteRelationshipRequest = DeleteRelationshipRequest.decode(reader, reader.uint32());
            break;
          case 205:
            message.queryFriendRequestsRequest = QueryFriendRequestsRequest.decode(reader, reader.uint32());
            break;
          case 206:
            message.queryRelatedUserIdsRequest = QueryRelatedUserIdsRequest.decode(reader, reader.uint32());
            break;
          case 207:
            message.queryRelationshipGroupsRequest = QueryRelationshipGroupsRequest.decode(reader, reader.uint32());
            break;
          case 208:
            message.queryRelationshipsRequest = QueryRelationshipsRequest.decode(reader, reader.uint32());
            break;
          case 209:
            message.updateFriendRequestRequest = UpdateFriendRequestRequest.decode(reader, reader.uint32());
            break;
          case 210:
            message.updateRelationshipGroupRequest = UpdateRelationshipGroupRequest.decode(reader, reader.uint32());
            break;
          case 211:
            message.updateRelationshipRequest = UpdateRelationshipRequest.decode(reader, reader.uint32());
            break;
          case 300:
            message.createGroupRequest = CreateGroupRequest.decode(reader, reader.uint32());
            break;
          case 301:
            message.deleteGroupRequest = DeleteGroupRequest.decode(reader, reader.uint32());
            break;
          case 302:
            message.queryGroupsRequest = QueryGroupsRequest.decode(reader, reader.uint32());
            break;
          case 303:
            message.queryJoinedGroupIdsRequest = QueryJoinedGroupIdsRequest.decode(reader, reader.uint32());
            break;
          case 304:
            message.queryJoinedGroupInfosRequest = QueryJoinedGroupInfosRequest.decode(reader, reader.uint32());
            break;
          case 305:
            message.updateGroupRequest = UpdateGroupRequest.decode(reader, reader.uint32());
            break;
          case 400:
            message.createGroupBlockedUserRequest = CreateGroupBlockedUserRequest.decode(reader, reader.uint32());
            break;
          case 401:
            message.deleteGroupBlockedUserRequest = DeleteGroupBlockedUserRequest.decode(reader, reader.uint32());
            break;
          case 402:
            message.queryGroupBlockedUserIdsRequest = QueryGroupBlockedUserIdsRequest.decode(reader, reader.uint32());
            break;
          case 403:
            message.queryGroupBlockedUserInfosRequest = QueryGroupBlockedUserInfosRequest.decode(reader, reader.uint32());
            break;
          case 500:
            message.checkGroupJoinQuestionsAnswersRequest = CheckGroupJoinQuestionsAnswersRequest.decode(reader, reader.uint32());
            break;
          case 501:
            message.createGroupInvitationRequest = CreateGroupInvitationRequest.decode(reader, reader.uint32());
            break;
          case 502:
            message.createGroupJoinRequestRequest = CreateGroupJoinRequestRequest.decode(reader, reader.uint32());
            break;
          case 503:
            message.createGroupJoinQuestionsRequest = CreateGroupJoinQuestionsRequest.decode(reader, reader.uint32());
            break;
          case 504:
            message.deleteGroupInvitationRequest = DeleteGroupInvitationRequest.decode(reader, reader.uint32());
            break;
          case 505:
            message.deleteGroupJoinRequestRequest = DeleteGroupJoinRequestRequest.decode(reader, reader.uint32());
            break;
          case 506:
            message.deleteGroupJoinQuestionsRequest = DeleteGroupJoinQuestionsRequest.decode(reader, reader.uint32());
            break;
          case 507:
            message.queryGroupInvitationsRequest = QueryGroupInvitationsRequest.decode(reader, reader.uint32());
            break;
          case 508:
            message.queryGroupJoinRequestsRequest = QueryGroupJoinRequestsRequest.decode(reader, reader.uint32());
            break;
          case 509:
            message.queryGroupJoinQuestionsRequest = QueryGroupJoinQuestionsRequest.decode(reader, reader.uint32());
            break;
          case 510:
            message.updateGroupJoinQuestionRequest = UpdateGroupJoinQuestionRequest.decode(reader, reader.uint32());
            break;
          case 1000:
            message.deleteResourceRequest = DeleteResourceRequest.decode(reader, reader.uint32());
            break;
          case 1001:
            message.queryResourceDownloadInfoRequest = QueryResourceDownloadInfoRequest.decode(reader, reader.uint32());
            break;
          case 1002:
            message.queryResourceUploadInfoRequest = QueryResourceUploadInfoRequest.decode(reader, reader.uint32());
            break;
          case 1003:
            message.queryMessageAttachmentInfosRequest = QueryMessageAttachmentInfosRequest.decode(reader, reader.uint32());
            break;
          case 1004:
            message.updateMessageAttachmentInfoRequest = UpdateMessageAttachmentInfoRequest.decode(reader, reader.uint32());
            break;
          default:
            reader.skipType(tag & 7);
            break;
        }
      }
      return message;
    }
  };
  function longToString$1(long) {
    return long.toString();
  }
  if (_m0.util.Long !== long) {
    _m0.util.Long = long;
    _m0.configure();
  }

  function createBaseTurmsNotification() {
    return {
      timestamp: "0",
      requestId: undefined,
      code: undefined,
      reason: undefined,
      data: undefined,
      requesterId: undefined,
      closeStatus: undefined,
      relayedRequest: undefined
    };
  }
  var TurmsNotification = {
    encode: function encode(message, writer) {
      if (writer === void 0) {
        writer = _m0.Writer.create();
      }
      if (message.timestamp !== "0") {
        writer.uint32(8).int64(message.timestamp);
      }
      if (message.requestId !== undefined) {
        writer.uint32(32).int64(message.requestId);
      }
      if (message.code !== undefined) {
        writer.uint32(40).int32(message.code);
      }
      if (message.reason !== undefined) {
        writer.uint32(50).string(message.reason);
      }
      if (message.data !== undefined) {
        TurmsNotification_Data.encode(message.data, writer.uint32(58).fork()).ldelim();
      }
      if (message.requesterId !== undefined) {
        writer.uint32(80).int64(message.requesterId);
      }
      if (message.closeStatus !== undefined) {
        writer.uint32(88).int32(message.closeStatus);
      }
      if (message.relayedRequest !== undefined) {
        TurmsRequest.encode(message.relayedRequest, writer.uint32(98).fork()).ldelim();
      }
      return writer;
    },
    decode: function decode(input, length) {
      var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
      var end = length === undefined ? reader.len : reader.pos + length;
      var message = createBaseTurmsNotification();
      while (reader.pos < end) {
        var tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            message.timestamp = longToString(reader.int64());
            break;
          case 4:
            message.requestId = longToString(reader.int64());
            break;
          case 5:
            message.code = reader.int32();
            break;
          case 6:
            message.reason = reader.string();
            break;
          case 7:
            message.data = TurmsNotification_Data.decode(reader, reader.uint32());
            break;
          case 10:
            message.requesterId = longToString(reader.int64());
            break;
          case 11:
            message.closeStatus = reader.int32();
            break;
          case 12:
            message.relayedRequest = TurmsRequest.decode(reader, reader.uint32());
            break;
          default:
            reader.skipType(tag & 7);
            break;
        }
      }
      return message;
    }
  };
  function createBaseTurmsNotification_Data() {
    return {
      long: undefined,
      string: undefined,
      longsWithVersion: undefined,
      stringsWithVersion: undefined,
      conversations: undefined,
      messages: undefined,
      messagesWithTotalList: undefined,
      userSession: undefined,
      userInfosWithVersion: undefined,
      userOnlineStatuses: undefined,
      userFriendRequestsWithVersion: undefined,
      userRelationshipGroupsWithVersion: undefined,
      userRelationshipsWithVersion: undefined,
      nearbyUsers: undefined,
      groupInvitationsWithVersion: undefined,
      groupJoinQuestionAnswerResult: undefined,
      groupJoinRequestsWithVersion: undefined,
      groupJoinQuestionsWithVersion: undefined,
      groupMembersWithVersion: undefined,
      groupsWithVersion: undefined,
      storageResourceInfos: undefined
    };
  }
  var TurmsNotification_Data = {
    encode: function encode(message, writer) {
      if (writer === void 0) {
        writer = _m0.Writer.create();
      }
      if (message.long !== undefined) {
        writer.uint32(8).int64(message.long);
      }
      if (message.string !== undefined) {
        writer.uint32(18).string(message.string);
      }
      if (message.longsWithVersion !== undefined) {
        LongsWithVersion.encode(message.longsWithVersion, writer.uint32(26).fork()).ldelim();
      }
      if (message.stringsWithVersion !== undefined) {
        StringsWithVersion.encode(message.stringsWithVersion, writer.uint32(34).fork()).ldelim();
      }
      if (message.conversations !== undefined) {
        Conversations.encode(message.conversations, writer.uint32(42).fork()).ldelim();
      }
      if (message.messages !== undefined) {
        Messages.encode(message.messages, writer.uint32(50).fork()).ldelim();
      }
      if (message.messagesWithTotalList !== undefined) {
        MessagesWithTotalList.encode(message.messagesWithTotalList, writer.uint32(58).fork()).ldelim();
      }
      if (message.userSession !== undefined) {
        UserSession.encode(message.userSession, writer.uint32(66).fork()).ldelim();
      }
      if (message.userInfosWithVersion !== undefined) {
        UserInfosWithVersion.encode(message.userInfosWithVersion, writer.uint32(74).fork()).ldelim();
      }
      if (message.userOnlineStatuses !== undefined) {
        UserOnlineStatuses.encode(message.userOnlineStatuses, writer.uint32(82).fork()).ldelim();
      }
      if (message.userFriendRequestsWithVersion !== undefined) {
        UserFriendRequestsWithVersion.encode(message.userFriendRequestsWithVersion, writer.uint32(90).fork()).ldelim();
      }
      if (message.userRelationshipGroupsWithVersion !== undefined) {
        UserRelationshipGroupsWithVersion.encode(message.userRelationshipGroupsWithVersion, writer.uint32(98).fork()).ldelim();
      }
      if (message.userRelationshipsWithVersion !== undefined) {
        UserRelationshipsWithVersion.encode(message.userRelationshipsWithVersion, writer.uint32(106).fork()).ldelim();
      }
      if (message.nearbyUsers !== undefined) {
        NearbyUsers.encode(message.nearbyUsers, writer.uint32(114).fork()).ldelim();
      }
      if (message.groupInvitationsWithVersion !== undefined) {
        GroupInvitationsWithVersion.encode(message.groupInvitationsWithVersion, writer.uint32(122).fork()).ldelim();
      }
      if (message.groupJoinQuestionAnswerResult !== undefined) {
        GroupJoinQuestionsAnswerResult.encode(message.groupJoinQuestionAnswerResult, writer.uint32(130).fork()).ldelim();
      }
      if (message.groupJoinRequestsWithVersion !== undefined) {
        GroupJoinRequestsWithVersion.encode(message.groupJoinRequestsWithVersion, writer.uint32(138).fork()).ldelim();
      }
      if (message.groupJoinQuestionsWithVersion !== undefined) {
        GroupJoinQuestionsWithVersion.encode(message.groupJoinQuestionsWithVersion, writer.uint32(146).fork()).ldelim();
      }
      if (message.groupMembersWithVersion !== undefined) {
        GroupMembersWithVersion.encode(message.groupMembersWithVersion, writer.uint32(154).fork()).ldelim();
      }
      if (message.groupsWithVersion !== undefined) {
        GroupsWithVersion.encode(message.groupsWithVersion, writer.uint32(162).fork()).ldelim();
      }
      if (message.storageResourceInfos !== undefined) {
        StorageResourceInfos.encode(message.storageResourceInfos, writer.uint32(402).fork()).ldelim();
      }
      return writer;
    },
    decode: function decode(input, length) {
      var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
      var end = length === undefined ? reader.len : reader.pos + length;
      var message = createBaseTurmsNotification_Data();
      while (reader.pos < end) {
        var tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            message.long = longToString(reader.int64());
            break;
          case 2:
            message.string = reader.string();
            break;
          case 3:
            message.longsWithVersion = LongsWithVersion.decode(reader, reader.uint32());
            break;
          case 4:
            message.stringsWithVersion = StringsWithVersion.decode(reader, reader.uint32());
            break;
          case 5:
            message.conversations = Conversations.decode(reader, reader.uint32());
            break;
          case 6:
            message.messages = Messages.decode(reader, reader.uint32());
            break;
          case 7:
            message.messagesWithTotalList = MessagesWithTotalList.decode(reader, reader.uint32());
            break;
          case 8:
            message.userSession = UserSession.decode(reader, reader.uint32());
            break;
          case 9:
            message.userInfosWithVersion = UserInfosWithVersion.decode(reader, reader.uint32());
            break;
          case 10:
            message.userOnlineStatuses = UserOnlineStatuses.decode(reader, reader.uint32());
            break;
          case 11:
            message.userFriendRequestsWithVersion = UserFriendRequestsWithVersion.decode(reader, reader.uint32());
            break;
          case 12:
            message.userRelationshipGroupsWithVersion = UserRelationshipGroupsWithVersion.decode(reader, reader.uint32());
            break;
          case 13:
            message.userRelationshipsWithVersion = UserRelationshipsWithVersion.decode(reader, reader.uint32());
            break;
          case 14:
            message.nearbyUsers = NearbyUsers.decode(reader, reader.uint32());
            break;
          case 15:
            message.groupInvitationsWithVersion = GroupInvitationsWithVersion.decode(reader, reader.uint32());
            break;
          case 16:
            message.groupJoinQuestionAnswerResult = GroupJoinQuestionsAnswerResult.decode(reader, reader.uint32());
            break;
          case 17:
            message.groupJoinRequestsWithVersion = GroupJoinRequestsWithVersion.decode(reader, reader.uint32());
            break;
          case 18:
            message.groupJoinQuestionsWithVersion = GroupJoinQuestionsWithVersion.decode(reader, reader.uint32());
            break;
          case 19:
            message.groupMembersWithVersion = GroupMembersWithVersion.decode(reader, reader.uint32());
            break;
          case 20:
            message.groupsWithVersion = GroupsWithVersion.decode(reader, reader.uint32());
            break;
          case 50:
            message.storageResourceInfos = StorageResourceInfos.decode(reader, reader.uint32());
            break;
          default:
            reader.skipType(tag & 7);
            break;
        }
      }
      return message;
    }
  };
  function longToString(long) {
    return long.toString();
  }
  if (_m0.util.Long !== long) {
    _m0.util.Long = long;
    _m0.configure();
  }

  var StateStore = function () {
    function StateStore(sharedContextService) {
      var _this = this;
      this._lastRequestDate = 0;
      this._sharedContextService = sharedContextService;
      sharedContextService === null || sharedContextService === void 0 ? void 0 : sharedContextService.addNotificationListener("updateIsSessionOpen", function (notification) {
        _this._isSessionOpen = notification.data;
      });
      sharedContextService === null || sharedContextService === void 0 ? void 0 : sharedContextService.addNotificationListener("updateSessionId", function (notification) {
        _this._sessionId = notification.data;
      });
      sharedContextService === null || sharedContextService === void 0 ? void 0 : sharedContextService.addNotificationListener("updateServerId", function (notification) {
        _this._serverId = notification.data;
      });
      sharedContextService === null || sharedContextService === void 0 ? void 0 : sharedContextService.addNotificationListener("updateLastRequestDate", function (notification) {
        _this._lastRequestDate = notification.data;
      });
    }
    Object.defineProperty(StateStore.prototype, "sharedContextService", {
      get: function get() {
        return this._sharedContextService;
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(StateStore.prototype, "useSharedContext", {
      get: function get() {
        return !!this._sharedContextService;
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(StateStore.prototype, "websocket", {
      get: function get() {
        return this._websocket;
      },
      set: function set(value) {
        this._websocket = value;
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(StateStore.prototype, "isConnected", {
      get: function get() {
        var _a;
        return !!((_a = this._websocket) === null || _a === void 0 ? void 0 : _a.isConnected);
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(StateStore.prototype, "isSessionOpen", {
      get: function get() {
        return this._isSessionOpen;
      },
      set: function set(value) {
        var _a;
        this._isSessionOpen = value;
        (_a = this._sharedContextService) === null || _a === void 0 ? void 0 : _a.request({
          type: "updateIsSessionOpen",
          data: value
        });
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(StateStore.prototype, "sessionId", {
      get: function get() {
        return this._sessionId;
      },
      set: function set(value) {
        var _a;
        this._sessionId = value;
        (_a = this._sharedContextService) === null || _a === void 0 ? void 0 : _a.request({
          type: "updateSessionId",
          data: value
        });
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(StateStore.prototype, "serverId", {
      get: function get() {
        return this._serverId;
      },
      set: function set(value) {
        var _a;
        this._serverId = value;
        (_a = this._sharedContextService) === null || _a === void 0 ? void 0 : _a.request({
          type: "updateServerId",
          data: value
        });
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(StateStore.prototype, "lastRequestDate", {
      get: function get() {
        return this._lastRequestDate;
      },
      set: function set(value) {
        var _a;
        this._lastRequestDate = value;
        (_a = this._sharedContextService) === null || _a === void 0 ? void 0 : _a.request({
          type: "updateLastRequestDate",
          data: value
        });
      },
      enumerable: false,
      configurable: true
    });
    StateStore.prototype.reset = function () {
      this._websocket = null;
      this._isSessionOpen = false;
      this._sessionId = null;
      this._serverId = null;
      this._lastRequestDate = 0;
    };
    return StateStore;
  }();

  var fails$g = fails$E;
  var wellKnownSymbol$8 = wellKnownSymbol$q;
  var V8_VERSION$1 = engineV8Version;

  var SPECIES$1 = wellKnownSymbol$8('species');

  var arrayMethodHasSpeciesSupport$3 = function (METHOD_NAME) {
    // We can't use this feature detection in V8 since it causes
    // deoptimization and serious performance degradation
    // https://github.com/zloirock/core-js/issues/677
    return V8_VERSION$1 >= 51 || !fails$g(function () {
      var array = [];
      var constructor = array.constructor = {};
      constructor[SPECIES$1] = function () {
        return { foo: 1 };
      };
      return array[METHOD_NAME](Boolean).foo !== 1;
    });
  };

  var $$i = _export;
  var $filter = arrayIteration.filter;
  var arrayMethodHasSpeciesSupport$2 = arrayMethodHasSpeciesSupport$3;

  var HAS_SPECIES_SUPPORT$1 = arrayMethodHasSpeciesSupport$2('filter');

  // `Array.prototype.filter` method
  // https://tc39.es/ecma262/#sec-array.prototype.filter
  // with adding support of @@species
  $$i({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT$1 }, {
    filter: function filter(callbackfn /* , thisArg */) {
      return $filter(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
    }
  });

  var $$h = _export;
  var $values = objectToArray.values;

  // `Object.values` method
  // https://tc39.es/ecma262/#sec-object.values
  $$h({ target: 'Object', stat: true }, {
    values: function values(O) {
      return $values(O);
    }
  });

  /******************************************************************************
  Copyright (c) Microsoft Corporation.

  Permission to use, copy, modify, and/or distribute this software for any
  purpose with or without fee is hereby granted.

  THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
  REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
  AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
  INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
  LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
  OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
  PERFORMANCE OF THIS SOFTWARE.
  ***************************************************************************** */
  /* global Reflect, Promise */

  var extendStatics = function(d, b) {
      extendStatics = Object.setPrototypeOf ||
          ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
          function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
      return extendStatics(d, b);
  };

  function __extends(d, b) {
      if (typeof b !== "function" && b !== null)
          throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
      extendStatics(d, b);
      function __() { this.constructor = d; }
      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  }

  var isObject$4 = isObject$i;
  var classof$4 = classofRaw$2;
  var wellKnownSymbol$7 = wellKnownSymbol$q;

  var MATCH$1 = wellKnownSymbol$7('match');

  // `IsRegExp` abstract operation
  // https://tc39.es/ecma262/#sec-isregexp
  var isRegexp = function (it) {
    var isRegExp;
    return isObject$4(it) && ((isRegExp = it[MATCH$1]) !== undefined ? !!isRegExp : classof$4(it) == 'RegExp');
  };

  var isRegExp = isRegexp;

  var $TypeError$2 = TypeError;

  var notARegexp = function (it) {
    if (isRegExp(it)) {
      throw $TypeError$2("The method doesn't accept regular expressions");
    } return it;
  };

  var wellKnownSymbol$6 = wellKnownSymbol$q;

  var MATCH = wellKnownSymbol$6('match');

  var correctIsRegexpLogic = function (METHOD_NAME) {
    var regexp = /./;
    try {
      '/./'[METHOD_NAME](regexp);
    } catch (error1) {
      try {
        regexp[MATCH] = false;
        return '/./'[METHOD_NAME](regexp);
      } catch (error2) { /* empty */ }
    } return false;
  };

  var $$g = _export;
  var uncurryThis$c = functionUncurryThisClause;
  var getOwnPropertyDescriptor$1 = objectGetOwnPropertyDescriptor.f;
  var toLength$2 = toLength$8;
  var toString$6 = toString$9;
  var notARegExp$1 = notARegexp;
  var requireObjectCoercible$2 = requireObjectCoercible$6;
  var correctIsRegExpLogic$1 = correctIsRegexpLogic;

  // eslint-disable-next-line es/no-string-prototype-endswith -- safe
  var nativeEndsWith = uncurryThis$c(''.endsWith);
  var slice = uncurryThis$c(''.slice);
  var min$2 = Math.min;

  var CORRECT_IS_REGEXP_LOGIC$1 = correctIsRegExpLogic$1('endsWith');
  // https://github.com/zloirock/core-js/pull/702
  var MDN_POLYFILL_BUG$1 = !CORRECT_IS_REGEXP_LOGIC$1 && !!function () {
    var descriptor = getOwnPropertyDescriptor$1(String.prototype, 'endsWith');
    return descriptor && !descriptor.writable;
  }();

  // `String.prototype.endsWith` method
  // https://tc39.es/ecma262/#sec-string.prototype.endswith
  $$g({ target: 'String', proto: true, forced: !MDN_POLYFILL_BUG$1 && !CORRECT_IS_REGEXP_LOGIC$1 }, {
    endsWith: function endsWith(searchString /* , endPosition = @length */) {
      var that = toString$6(requireObjectCoercible$2(this));
      notARegExp$1(searchString);
      var endPosition = arguments.length > 1 ? arguments[1] : undefined;
      var len = that.length;
      var end = endPosition === undefined ? len : min$2(toLength$2(endPosition), len);
      var search = toString$6(searchString);
      return nativeEndsWith
        ? nativeEndsWith(that, search, end)
        : slice(that, end - search.length, end) === search;
    }
  });

  var $$f = _export;
  var $map = arrayIteration.map;
  var arrayMethodHasSpeciesSupport$1 = arrayMethodHasSpeciesSupport$3;

  var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport$1('map');

  // `Array.prototype.map` method
  // https://tc39.es/ecma262/#sec-array.prototype.map
  // with adding support of @@species
  $$f({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT }, {
    map: function map(callbackfn /* , thisArg */) {
      return $map(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
    }
  });

  var $$e = _export;
  var toObject$5 = toObject$d;
  var nativeKeys = objectKeys$4;
  var fails$f = fails$E;

  var FAILS_ON_PRIMITIVES$1 = fails$f(function () { nativeKeys(1); });

  // `Object.keys` method
  // https://tc39.es/ecma262/#sec-object.keys
  $$e({ target: 'Object', stat: true, forced: FAILS_ON_PRIMITIVES$1 }, {
    keys: function keys(it) {
      return nativeKeys(toObject$5(it));
    }
  });

  var $TypeError$1 = TypeError;
  var MAX_SAFE_INTEGER = 0x1FFFFFFFFFFFFF; // 2 ** 53 - 1 == 9007199254740991

  var doesNotExceedSafeInteger$1 = function (it) {
    if (it > MAX_SAFE_INTEGER) throw $TypeError$1('Maximum allowed index exceeded');
    return it;
  };

  var $$d = _export;
  var fails$e = fails$E;
  var isArray$1 = isArray$3;
  var isObject$3 = isObject$i;
  var toObject$4 = toObject$d;
  var lengthOfArrayLike$1 = lengthOfArrayLike$d;
  var doesNotExceedSafeInteger = doesNotExceedSafeInteger$1;
  var createProperty$1 = createProperty$3;
  var arraySpeciesCreate = arraySpeciesCreate$2;
  var arrayMethodHasSpeciesSupport = arrayMethodHasSpeciesSupport$3;
  var wellKnownSymbol$5 = wellKnownSymbol$q;
  var V8_VERSION = engineV8Version;

  var IS_CONCAT_SPREADABLE = wellKnownSymbol$5('isConcatSpreadable');

  // We can't use this feature detection in V8 since it causes
  // deoptimization and serious performance degradation
  // https://github.com/zloirock/core-js/issues/679
  var IS_CONCAT_SPREADABLE_SUPPORT = V8_VERSION >= 51 || !fails$e(function () {
    var array = [];
    array[IS_CONCAT_SPREADABLE] = false;
    return array.concat()[0] !== array;
  });

  var isConcatSpreadable = function (O) {
    if (!isObject$3(O)) return false;
    var spreadable = O[IS_CONCAT_SPREADABLE];
    return spreadable !== undefined ? !!spreadable : isArray$1(O);
  };

  var FORCED$1 = !IS_CONCAT_SPREADABLE_SUPPORT || !arrayMethodHasSpeciesSupport('concat');

  // `Array.prototype.concat` method
  // https://tc39.es/ecma262/#sec-array.prototype.concat
  // with adding support of @@isConcatSpreadable and @@species
  $$d({ target: 'Array', proto: true, arity: 1, forced: FORCED$1 }, {
    // eslint-disable-next-line no-unused-vars -- required for `.length`
    concat: function concat(arg) {
      var O = toObject$4(this);
      var A = arraySpeciesCreate(O, 0);
      var n = 0;
      var i, k, length, len, E;
      for (i = -1, length = arguments.length; i < length; i++) {
        E = i === -1 ? O : arguments[i];
        if (isConcatSpreadable(E)) {
          len = lengthOfArrayLike$1(E);
          doesNotExceedSafeInteger(n + len);
          for (k = 0; k < len; k++, n++) if (k in E) createProperty$1(A, n, E[k]);
        } else {
          doesNotExceedSafeInteger(n + 1);
          createProperty$1(A, n++, E);
        }
      }
      A.length = n;
      return A;
    }
  });

  var DESCRIPTORS$3 = descriptors;
  var uncurryThis$b = functionUncurryThis;
  var call$7 = functionCall;
  var fails$d = fails$E;
  var objectKeys$1 = objectKeys$4;
  var getOwnPropertySymbolsModule$2 = objectGetOwnPropertySymbols;
  var propertyIsEnumerableModule$1 = objectPropertyIsEnumerable;
  var toObject$3 = toObject$d;
  var IndexedObject = indexedObject;

  // eslint-disable-next-line es/no-object-assign -- safe
  var $assign = Object.assign;
  // eslint-disable-next-line es/no-object-defineproperty -- required for testing
  var defineProperty$2 = Object.defineProperty;
  var concat$1 = uncurryThis$b([].concat);

  // `Object.assign` method
  // https://tc39.es/ecma262/#sec-object.assign
  var objectAssign = !$assign || fails$d(function () {
    // should have correct order of operations (Edge bug)
    if (DESCRIPTORS$3 && $assign({ b: 1 }, $assign(defineProperty$2({}, 'a', {
      enumerable: true,
      get: function () {
        defineProperty$2(this, 'b', {
          value: 3,
          enumerable: false
        });
      }
    }), { b: 2 })).b !== 1) return true;
    // should work with symbols and should have deterministic property order (V8 bug)
    var A = {};
    var B = {};
    // eslint-disable-next-line es/no-symbol -- safe
    var symbol = Symbol();
    var alphabet = 'abcdefghijklmnopqrst';
    A[symbol] = 7;
    alphabet.split('').forEach(function (chr) { B[chr] = chr; });
    return $assign({}, A)[symbol] != 7 || objectKeys$1($assign({}, B)).join('') != alphabet;
  }) ? function assign(target, source) { // eslint-disable-line no-unused-vars -- required for `.length`
    var T = toObject$3(target);
    var argumentsLength = arguments.length;
    var index = 1;
    var getOwnPropertySymbols = getOwnPropertySymbolsModule$2.f;
    var propertyIsEnumerable = propertyIsEnumerableModule$1.f;
    while (argumentsLength > index) {
      var S = IndexedObject(arguments[index++]);
      var keys = getOwnPropertySymbols ? concat$1(objectKeys$1(S), getOwnPropertySymbols(S)) : objectKeys$1(S);
      var length = keys.length;
      var j = 0;
      var key;
      while (length > j) {
        key = keys[j++];
        if (!DESCRIPTORS$3 || call$7(propertyIsEnumerable, S, key)) T[key] = S[key];
      }
    } return T;
  } : $assign;

  var $$c = _export;
  var assign = objectAssign;

  // `Object.assign` method
  // https://tc39.es/ecma262/#sec-object.assign
  // eslint-disable-next-line es/no-object-assign -- required for testing
  $$c({ target: 'Object', stat: true, arity: 2, forced: Object.assign !== assign }, {
    assign: assign
  });

  var Code;
  (function (Code) {
    Code[Code["CONNECT_TIMEOUT"] = 1] = "CONNECT_TIMEOUT";
    Code[Code["DATA_NOT_FOUND"] = 10] = "DATA_NOT_FOUND";
    Code[Code["HTTP_ERROR"] = 90] = "HTTP_ERROR";
    Code[Code["HTTP_NOT_SUCCESSFUL_RESPONSE"] = 91] = "HTTP_NOT_SUCCESSFUL_RESPONSE";
    Code[Code["INVALID_REQUEST"] = 100] = "INVALID_REQUEST";
    Code[Code["CLIENT_REQUESTS_TOO_FREQUENT"] = 101] = "CLIENT_REQUESTS_TOO_FREQUENT";
    Code[Code["REQUEST_TIMEOUT"] = 102] = "REQUEST_TIMEOUT";
    Code[Code["ILLEGAL_ARGUMENT"] = 103] = "ILLEGAL_ARGUMENT";
    Code[Code["INVALID_NOTIFICATION"] = 200] = "INVALID_NOTIFICATION";
    Code[Code["INVALID_RESPONSE"] = 201] = "INVALID_RESPONSE";
    Code[Code["CLIENT_SESSION_ALREADY_ESTABLISHED"] = 300] = "CLIENT_SESSION_ALREADY_ESTABLISHED";
    Code[Code["CLIENT_SESSION_HAS_BEEN_CLOSED"] = 301] = "CLIENT_SESSION_HAS_BEEN_CLOSED";
    Code[Code["OK"] = 1000] = "OK";
    Code[Code["NO_CONTENT"] = 1001] = "NO_CONTENT";
    Code[Code["ALREADY_UP_TO_DATE"] = 1002] = "ALREADY_UP_TO_DATE";
    Code[Code["INVALID_REQUEST_FROM_SERVER"] = 1100] = "INVALID_REQUEST_FROM_SERVER";
    Code[Code["CLIENT_REQUESTS_TOO_FREQUENT_FROM_SERVER"] = 1101] = "CLIENT_REQUESTS_TOO_FREQUENT_FROM_SERVER";
    Code[Code["ILLEGAL_ARGUMENT_FROM_SERVER"] = 1102] = "ILLEGAL_ARGUMENT_FROM_SERVER";
    Code[Code["RECORD_CONTAINS_DUPLICATE_KEY"] = 1103] = "RECORD_CONTAINS_DUPLICATE_KEY";
    Code[Code["REQUESTED_RECORDS_TOO_MANY"] = 1104] = "REQUESTED_RECORDS_TOO_MANY";
    Code[Code["SEND_REQUEST_FROM_NON_EXISTING_SESSION"] = 1105] = "SEND_REQUEST_FROM_NON_EXISTING_SESSION";
    Code[Code["UNAUTHORIZED_REQUEST"] = 1106] = "UNAUTHORIZED_REQUEST";
    Code[Code["SERVER_INTERNAL_ERROR"] = 1200] = "SERVER_INTERNAL_ERROR";
    Code[Code["SERVER_UNAVAILABLE"] = 1201] = "SERVER_UNAVAILABLE";
    Code[Code["UNSUPPORTED_CLIENT_VERSION"] = 2000] = "UNSUPPORTED_CLIENT_VERSION";
    Code[Code["LOGIN_TIMEOUT"] = 2010] = "LOGIN_TIMEOUT";
    Code[Code["LOGIN_AUTHENTICATION_FAILED"] = 2011] = "LOGIN_AUTHENTICATION_FAILED";
    Code[Code["LOGGING_IN_USER_NOT_ACTIVE"] = 2012] = "LOGGING_IN_USER_NOT_ACTIVE";
    Code[Code["LOGIN_FROM_FORBIDDEN_DEVICE_TYPE"] = 2013] = "LOGIN_FROM_FORBIDDEN_DEVICE_TYPE";
    Code[Code["SESSION_SIMULTANEOUS_CONFLICTS_DECLINE"] = 2100] = "SESSION_SIMULTANEOUS_CONFLICTS_DECLINE";
    Code[Code["SESSION_SIMULTANEOUS_CONFLICTS_NOTIFY"] = 2101] = "SESSION_SIMULTANEOUS_CONFLICTS_NOTIFY";
    Code[Code["SESSION_SIMULTANEOUS_CONFLICTS_OFFLINE"] = 2102] = "SESSION_SIMULTANEOUS_CONFLICTS_OFFLINE";
    Code[Code["CREATE_EXISTING_SESSION"] = 2103] = "CREATE_EXISTING_SESSION";
    Code[Code["UPDATE_NON_EXISTING_SESSION_HEARTBEAT"] = 2104] = "UPDATE_NON_EXISTING_SESSION_HEARTBEAT";
    Code[Code["USER_LOCATION_RELATED_FEATURES_ARE_DISABLED"] = 2200] = "USER_LOCATION_RELATED_FEATURES_ARE_DISABLED";
    Code[Code["QUERYING_NEAREST_USERS_BY_SESSION_ID_IS_DISABLED"] = 2201] = "QUERYING_NEAREST_USERS_BY_SESSION_ID_IS_DISABLED";
    Code[Code["UPDATE_INFO_OF_NON_EXISTING_USER"] = 2300] = "UPDATE_INFO_OF_NON_EXISTING_USER";
    Code[Code["USER_PROFILE_NOT_FOUND"] = 2301] = "USER_PROFILE_NOT_FOUND";
    Code[Code["PROFILE_REQUESTER_NOT_IN_CONTACTS_OR_BLOCKED"] = 2302] = "PROFILE_REQUESTER_NOT_IN_CONTACTS_OR_BLOCKED";
    Code[Code["PROFILE_REQUESTER_HAS_BEEN_BLOCKED"] = 2303] = "PROFILE_REQUESTER_HAS_BEEN_BLOCKED";
    Code[Code["QUERY_PERMISSION_OF_NON_EXISTING_USER"] = 2400] = "QUERY_PERMISSION_OF_NON_EXISTING_USER";
    Code[Code["ADD_NOT_RELATED_USER_TO_GROUP"] = 2500] = "ADD_NOT_RELATED_USER_TO_GROUP";
    Code[Code["CREATE_EXISTING_RELATIONSHIP"] = 2501] = "CREATE_EXISTING_RELATIONSHIP";
    Code[Code["REQUESTER_NOT_FRIEND_REQUEST_RECIPIENT"] = 2600] = "REQUESTER_NOT_FRIEND_REQUEST_RECIPIENT";
    Code[Code["CREATE_EXISTING_FRIEND_REQUEST"] = 2601] = "CREATE_EXISTING_FRIEND_REQUEST";
    Code[Code["FRIEND_REQUEST_SENDER_HAS_BEEN_BLOCKED"] = 2602] = "FRIEND_REQUEST_SENDER_HAS_BEEN_BLOCKED";
    Code[Code["UPDATE_INFO_OF_NON_EXISTING_GROUP"] = 3000] = "UPDATE_INFO_OF_NON_EXISTING_GROUP";
    Code[Code["NOT_OWNER_TO_UPDATE_GROUP_INFO"] = 3001] = "NOT_OWNER_TO_UPDATE_GROUP_INFO";
    Code[Code["NOT_OWNER_OR_MANAGER_TO_UPDATE_GROUP_INFO"] = 3002] = "NOT_OWNER_OR_MANAGER_TO_UPDATE_GROUP_INFO";
    Code[Code["NOT_MEMBER_TO_UPDATE_GROUP_INFO"] = 3003] = "NOT_MEMBER_TO_UPDATE_GROUP_INFO";
    Code[Code["NO_PERMISSION_TO_CREATE_GROUP_WITH_GROUP_TYPE"] = 3100] = "NO_PERMISSION_TO_CREATE_GROUP_WITH_GROUP_TYPE";
    Code[Code["CREATE_GROUP_WITH_NON_EXISTING_GROUP_TYPE"] = 3101] = "CREATE_GROUP_WITH_NON_EXISTING_GROUP_TYPE";
    Code[Code["NOT_ACTIVE_USER_TO_CREATE_GROUP"] = 3200] = "NOT_ACTIVE_USER_TO_CREATE_GROUP";
    Code[Code["NOT_OWNER_TO_TRANSFER_GROUP"] = 3201] = "NOT_OWNER_TO_TRANSFER_GROUP";
    Code[Code["NOT_OWNER_TO_DELETE_GROUP"] = 3202] = "NOT_OWNER_TO_DELETE_GROUP";
    Code[Code["SUCCESSOR_NOT_GROUP_MEMBER"] = 3203] = "SUCCESSOR_NOT_GROUP_MEMBER";
    Code[Code["OWNER_QUITS_WITHOUT_SPECIFYING_SUCCESSOR"] = 3204] = "OWNER_QUITS_WITHOUT_SPECIFYING_SUCCESSOR";
    Code[Code["MAX_OWNED_GROUPS_REACHED"] = 3205] = "MAX_OWNED_GROUPS_REACHED";
    Code[Code["TRANSFER_NON_EXISTING_GROUP"] = 3206] = "TRANSFER_NON_EXISTING_GROUP";
    Code[Code["NOT_OWNER_OR_MANAGER_TO_CREATE_GROUP_QUESTION"] = 3300] = "NOT_OWNER_OR_MANAGER_TO_CREATE_GROUP_QUESTION";
    Code[Code["NOT_OWNER_OR_MANAGER_TO_DELETE_GROUP_QUESTION"] = 3301] = "NOT_OWNER_OR_MANAGER_TO_DELETE_GROUP_QUESTION";
    Code[Code["NOT_OWNER_OR_MANAGER_TO_UPDATE_GROUP_QUESTION"] = 3302] = "NOT_OWNER_OR_MANAGER_TO_UPDATE_GROUP_QUESTION";
    Code[Code["NOT_OWNER_OR_MANAGER_TO_ACCESS_GROUP_QUESTION_ANSWER"] = 3303] = "NOT_OWNER_OR_MANAGER_TO_ACCESS_GROUP_QUESTION_ANSWER";
    Code[Code["CREATE_GROUP_QUESTION_FOR_INACTIVE_GROUP"] = 3304] = "CREATE_GROUP_QUESTION_FOR_INACTIVE_GROUP";
    Code[Code["CREATE_GROUP_QUESTION_FOR_GROUP_USING_JOIN_REQUEST"] = 3305] = "CREATE_GROUP_QUESTION_FOR_GROUP_USING_JOIN_REQUEST";
    Code[Code["CREATE_GROUP_QUESTION_FOR_GROUP_USING_INVITATION"] = 3306] = "CREATE_GROUP_QUESTION_FOR_GROUP_USING_INVITATION";
    Code[Code["CREATE_GROUP_QUESTION_FOR_GROUP_USING_MEMBERSHIP_REQUEST"] = 3307] = "CREATE_GROUP_QUESTION_FOR_GROUP_USING_MEMBERSHIP_REQUEST";
    Code[Code["GROUP_QUESTION_ANSWERER_HAS_BEEN_BLOCKED"] = 3308] = "GROUP_QUESTION_ANSWERER_HAS_BEEN_BLOCKED";
    Code[Code["MEMBER_CANNOT_ANSWER_GROUP_QUESTION"] = 3309] = "MEMBER_CANNOT_ANSWER_GROUP_QUESTION";
    Code[Code["ANSWER_INACTIVE_QUESTION"] = 3310] = "ANSWER_INACTIVE_QUESTION";
    Code[Code["ANSWER_QUESTION_OF_INACTIVE_GROUP"] = 3311] = "ANSWER_QUESTION_OF_INACTIVE_GROUP";
    Code[Code["ADD_USER_TO_GROUP_REQUIRING_INVITATION"] = 3400] = "ADD_USER_TO_GROUP_REQUIRING_INVITATION";
    Code[Code["ADD_USER_TO_INACTIVE_GROUP"] = 3401] = "ADD_USER_TO_INACTIVE_GROUP";
    Code[Code["ADD_USER_WITH_ROLE_HIGHER_THAN_REQUESTER"] = 3402] = "ADD_USER_WITH_ROLE_HIGHER_THAN_REQUESTER";
    Code[Code["ADD_BLOCKED_USER_TO_GROUP"] = 3403] = "ADD_BLOCKED_USER_TO_GROUP";
    Code[Code["ADD_BLOCKED_USER_TO_INACTIVE_GROUP"] = 3404] = "ADD_BLOCKED_USER_TO_INACTIVE_GROUP";
    Code[Code["NOT_OWNER_OR_MANAGER_TO_REMOVE_GROUP_MEMBER"] = 3405] = "NOT_OWNER_OR_MANAGER_TO_REMOVE_GROUP_MEMBER";
    Code[Code["NOT_OWNER_TO_REMOVE_GROUP_OWNER_OR_MANAGER"] = 3406] = "NOT_OWNER_TO_REMOVE_GROUP_OWNER_OR_MANAGER";
    Code[Code["NOT_OWNER_TO_UPDATE_GROUP_MEMBER_INFO"] = 3407] = "NOT_OWNER_TO_UPDATE_GROUP_MEMBER_INFO";
    Code[Code["NOT_OWNER_OR_MANAGER_TO_UPDATE_GROUP_MEMBER_INFO"] = 3408] = "NOT_OWNER_OR_MANAGER_TO_UPDATE_GROUP_MEMBER_INFO";
    Code[Code["NOT_OWNER_OR_MANAGER_TO_ADD_BLOCKED_USER"] = 3500] = "NOT_OWNER_OR_MANAGER_TO_ADD_BLOCKED_USER";
    Code[Code["NOT_OWNER_OR_MANAGER_TO_REMOVE_BLOCKED_USER"] = 3501] = "NOT_OWNER_OR_MANAGER_TO_REMOVE_BLOCKED_USER";
    Code[Code["GROUP_JOIN_REQUEST_SENDER_HAS_BEEN_BLOCKED"] = 3600] = "GROUP_JOIN_REQUEST_SENDER_HAS_BEEN_BLOCKED";
    Code[Code["NOT_JOIN_REQUEST_SENDER_TO_RECALL_REQUEST"] = 3601] = "NOT_JOIN_REQUEST_SENDER_TO_RECALL_REQUEST";
    Code[Code["NOT_OWNER_OR_MANAGER_TO_ACCESS_GROUP_REQUEST"] = 3602] = "NOT_OWNER_OR_MANAGER_TO_ACCESS_GROUP_REQUEST";
    Code[Code["RECALL_NOT_PENDING_GROUP_JOIN_REQUEST"] = 3603] = "RECALL_NOT_PENDING_GROUP_JOIN_REQUEST";
    Code[Code["SEND_JOIN_REQUEST_TO_INACTIVE_GROUP"] = 3604] = "SEND_JOIN_REQUEST_TO_INACTIVE_GROUP";
    Code[Code["SEND_JOIN_REQUEST_TO_GROUP_USING_MEMBERSHIP_REQUEST"] = 3605] = "SEND_JOIN_REQUEST_TO_GROUP_USING_MEMBERSHIP_REQUEST";
    Code[Code["SEND_JOIN_REQUEST_TO_GROUP_USING_INVITATION"] = 3606] = "SEND_JOIN_REQUEST_TO_GROUP_USING_INVITATION";
    Code[Code["SEND_JOIN_REQUEST_TO_GROUP_USING_QUESTION"] = 3607] = "SEND_JOIN_REQUEST_TO_GROUP_USING_QUESTION";
    Code[Code["RECALLING_GROUP_JOIN_REQUEST_IS_DISABLED"] = 3608] = "RECALLING_GROUP_JOIN_REQUEST_IS_DISABLED";
    Code[Code["GROUP_INVITER_NOT_MEMBER"] = 3700] = "GROUP_INVITER_NOT_MEMBER";
    Code[Code["GROUP_INVITEE_ALREADY_GROUP_MEMBER"] = 3701] = "GROUP_INVITEE_ALREADY_GROUP_MEMBER";
    Code[Code["NOT_OWNER_OR_MANAGER_TO_RECALL_INVITATION"] = 3702] = "NOT_OWNER_OR_MANAGER_TO_RECALL_INVITATION";
    Code[Code["NOT_OWNER_OR_MANAGER_TO_ACCESS_INVITATION"] = 3703] = "NOT_OWNER_OR_MANAGER_TO_ACCESS_INVITATION";
    Code[Code["NOT_OWNER_TO_SEND_INVITATION"] = 3704] = "NOT_OWNER_TO_SEND_INVITATION";
    Code[Code["NOT_OWNER_OR_MANAGER_TO_SEND_INVITATION"] = 3705] = "NOT_OWNER_OR_MANAGER_TO_SEND_INVITATION";
    Code[Code["NOT_MEMBER_TO_SEND_INVITATION"] = 3706] = "NOT_MEMBER_TO_SEND_INVITATION";
    Code[Code["INVITEE_HAS_BEEN_BLOCKED"] = 3707] = "INVITEE_HAS_BEEN_BLOCKED";
    Code[Code["RECALLING_GROUP_INVITATION_IS_DISABLED"] = 3708] = "RECALLING_GROUP_INVITATION_IS_DISABLED";
    Code[Code["SEND_GROUP_INVITATION_TO_GROUP_NOT_REQUIRE_INVITATION"] = 3709] = "SEND_GROUP_INVITATION_TO_GROUP_NOT_REQUIRE_INVITATION";
    Code[Code["RECALL_NOT_PENDING_GROUP_INVITATION"] = 3710] = "RECALL_NOT_PENDING_GROUP_INVITATION";
    Code[Code["UPDATING_TYPING_STATUS_IS_DISABLED"] = 4000] = "UPDATING_TYPING_STATUS_IS_DISABLED";
    Code[Code["UPDATING_READ_DATE_IS_DISABLED"] = 4001] = "UPDATING_READ_DATE_IS_DISABLED";
    Code[Code["MOVING_READ_DATE_FORWARD_IS_DISABLED"] = 4002] = "MOVING_READ_DATE_FORWARD_IS_DISABLED";
    Code[Code["MESSAGE_RECIPIENT_NOT_ACTIVE"] = 5000] = "MESSAGE_RECIPIENT_NOT_ACTIVE";
    Code[Code["MESSAGE_SENDER_NOT_IN_CONTACTS_OR_BLOCKED"] = 5001] = "MESSAGE_SENDER_NOT_IN_CONTACTS_OR_BLOCKED";
    Code[Code["PRIVATE_MESSAGE_SENDER_HAS_BEEN_BLOCKED"] = 5002] = "PRIVATE_MESSAGE_SENDER_HAS_BEEN_BLOCKED";
    Code[Code["GROUP_MESSAGE_SENDER_HAS_BEEN_BLOCKED"] = 5003] = "GROUP_MESSAGE_SENDER_HAS_BEEN_BLOCKED";
    Code[Code["SEND_MESSAGE_TO_INACTIVE_GROUP"] = 5004] = "SEND_MESSAGE_TO_INACTIVE_GROUP";
    Code[Code["SEND_MESSAGE_TO_MUTED_GROUP"] = 5005] = "SEND_MESSAGE_TO_MUTED_GROUP";
    Code[Code["SENDING_MESSAGES_TO_ONESELF_IS_DISABLED"] = 5006] = "SENDING_MESSAGES_TO_ONESELF_IS_DISABLED";
    Code[Code["MUTED_MEMBER_SEND_MESSAGE"] = 5007] = "MUTED_MEMBER_SEND_MESSAGE";
    Code[Code["GUESTS_HAVE_BEEN_MUTED"] = 5008] = "GUESTS_HAVE_BEEN_MUTED";
    Code[Code["MESSAGE_IS_ILLEGAL"] = 5009] = "MESSAGE_IS_ILLEGAL";
    Code[Code["UPDATING_MESSAGE_BY_SENDER_IS_DISABLED"] = 5100] = "UPDATING_MESSAGE_BY_SENDER_IS_DISABLED";
    Code[Code["NOT_SENDER_TO_UPDATE_MESSAGE"] = 5101] = "NOT_SENDER_TO_UPDATE_MESSAGE";
    Code[Code["NOT_MESSAGE_RECIPIENT_TO_UPDATE_MESSAGE_READ_DATE"] = 5102] = "NOT_MESSAGE_RECIPIENT_TO_UPDATE_MESSAGE_READ_DATE";
    Code[Code["RECALL_NON_EXISTING_MESSAGE"] = 5200] = "RECALL_NON_EXISTING_MESSAGE";
    Code[Code["RECALLING_MESSAGE_IS_DISABLED"] = 5201] = "RECALLING_MESSAGE_IS_DISABLED";
    Code[Code["MESSAGE_RECALL_TIMEOUT"] = 5202] = "MESSAGE_RECALL_TIMEOUT";
    Code[Code["NOT_MEMBER_TO_QUERY_GROUP_MESSAGES"] = 5300] = "NOT_MEMBER_TO_QUERY_GROUP_MESSAGES";
    Code[Code["STORAGE_NOT_IMPLEMENTED"] = 6000] = "STORAGE_NOT_IMPLEMENTED";
    Code[Code["NOT_FRIEND_TO_UPLOAD_MESSAGE_ATTACHMENT_IN_PRIVATE_CONVERSATION"] = 6100] = "NOT_FRIEND_TO_UPLOAD_MESSAGE_ATTACHMENT_IN_PRIVATE_CONVERSATION";
    Code[Code["NOT_GROUP_MEMBER_TO_UPLOAD_MESSAGE_ATTACHMENT_IN_GROUP_CONVERSATION"] = 6101] = "NOT_GROUP_MEMBER_TO_UPLOAD_MESSAGE_ATTACHMENT_IN_GROUP_CONVERSATION";
    Code[Code["NOT_UPLOADER_TO_SHARE_MESSAGE_ATTACHMENT"] = 6102] = "NOT_UPLOADER_TO_SHARE_MESSAGE_ATTACHMENT";
    Code[Code["NOT_UPLOADER_OR_GROUP_MANAGER_TO_UNSHARE_MESSAGE_ATTACHMENT_IN_GROUP_CONVERSATION"] = 6103] = "NOT_UPLOADER_OR_GROUP_MANAGER_TO_UNSHARE_MESSAGE_ATTACHMENT_IN_GROUP_CONVERSATION";
    Code[Code["NOT_UPLOADER_TO_UNSHARE_MESSAGE_ATTACHMENT_IN_PRIVATE_CONVERSATION"] = 6104] = "NOT_UPLOADER_TO_UNSHARE_MESSAGE_ATTACHMENT_IN_PRIVATE_CONVERSATION";
    Code[Code["NOT_UPLOADER_OR_GROUP_MANAGER_TO_DELETE_MESSAGE_ATTACHMENT_IN_GROUP_CONVERSATION"] = 6105] = "NOT_UPLOADER_OR_GROUP_MANAGER_TO_DELETE_MESSAGE_ATTACHMENT_IN_GROUP_CONVERSATION";
    Code[Code["NOT_UPLOADER_TO_DELETE_MESSAGE_ATTACHMENT_IN_PRIVATE_CONVERSATION"] = 6106] = "NOT_UPLOADER_TO_DELETE_MESSAGE_ATTACHMENT_IN_PRIVATE_CONVERSATION";
    Code[Code["NOT_UPLOADER_OR_SHARED_WITH_USER_TO_DOWNLOAD_MESSAGE_ATTACHMENT"] = 6107] = "NOT_UPLOADER_OR_SHARED_WITH_USER_TO_DOWNLOAD_MESSAGE_ATTACHMENT";
    Code[Code["NOT_FRIEND_TO_QUERY_MESSAGE_ATTACHMENT_INFO_IN_PRIVATE_CONVERSATION"] = 6130] = "NOT_FRIEND_TO_QUERY_MESSAGE_ATTACHMENT_INFO_IN_PRIVATE_CONVERSATION";
    Code[Code["NOT_GROUP_MEMBER_TO_QUERY_MESSAGE_ATTACHMENT_INFO_IN_GROUP_CONVERSATION"] = 6131] = "NOT_GROUP_MEMBER_TO_QUERY_MESSAGE_ATTACHMENT_INFO_IN_GROUP_CONVERSATION";
  })(Code || (Code = {}));
  var ResponseStatusCode = function () {
    function ResponseStatusCode() {}
    ResponseStatusCode.isSuccessCode = function (code) {
      if (typeof code === 'string') {
        code = parseInt(code);
      }
      return 1000 <= code && code < 1100;
    };
    ResponseStatusCode.isErrorCode = function (code) {
      return !this.isSuccessCode(code);
    };
    return ResponseStatusCode;
  }();
  var ResponseStatusCode$1 = Object.assign(ResponseStatusCode, Code);

  var ResponseError = function (_super) {
    __extends(ResponseError, _super);
    function ResponseError(_a) {
      var requestId = _a.requestId,
        code = _a.code,
        reason = _a.reason,
        cause = _a.cause;
      var _this = _super.call(this, "".concat(requestId, ":").concat(code, ":").concat(reason, ":").concat(cause)) || this;
      _this._requestId = requestId;
      _this._code = code;
      _this._reason = reason;
      _this._cause = cause;
      return _this;
    }
    Object.defineProperty(ResponseError, "isResponseError", {
      get: function get() {
        return true;
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(ResponseError.prototype, "requestId", {
      get: function get() {
        return this._requestId;
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(ResponseError.prototype, "code", {
      get: function get() {
        return this._code;
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(ResponseError.prototype, "reason", {
      get: function get() {
        return this._reason;
      },
      enumerable: false,
      configurable: true
    });
    ResponseError.prototype.toString = function () {
      return "".concat(this._requestId, ":").concat(this._code, ":").concat(this._reason, ":").concat(this._cause);
    };
    ResponseError.from = function (param) {
      return new ResponseError(param);
    };
    ResponseError.fromNotification = function (notification) {
      return new ResponseError({
        requestId: notification.requestId,
        code: notification.code,
        reason: notification.reason
      });
    };
    ResponseError.illegalParam = function (reason) {
      throw new ResponseError({
        code: ResponseStatusCode$1.ILLEGAL_ARGUMENT,
        reason: reason
      });
    };
    ResponseError.notFalsy = function (name, notEmpty) {
      if (notEmpty === void 0) {
        notEmpty = false;
      }
      var emptyPlaceholder = notEmpty ? ' or empty' : '';
      ResponseError.illegalParam("\"".concat(name, "\" must not be null").concat(emptyPlaceholder, " or an invalid param"));
    };
    ResponseError.illegalParamPromise = function (reason) {
      var exception = new ResponseError({
        code: ResponseStatusCode$1.ILLEGAL_ARGUMENT,
        reason: reason
      });
      return Promise.reject(exception);
    };
    ResponseError.notFalsyPromise = function (name, notEmpty) {
      if (notEmpty === void 0) {
        notEmpty = false;
      }
      var emptyPlaceholder = notEmpty ? ' or empty' : '';
      return ResponseError.illegalParamPromise("\"".concat(name, "\" must not be null").concat(emptyPlaceholder, " or an invalid param"));
    };
    return ResponseError;
  }(Error);

  var NotificationUtil = function () {
    function NotificationUtil() {}
    NotificationUtil.transform = function (data, parentKey) {
      var _this = this;
      if (data == null) {
        return null;
      }
      var isDateType = typeof parentKey === 'string' && (parentKey.endsWith('Date') || parentKey.endsWith('_date') || parentKey === 'date') && typeof data === 'string';
      if (isDateType) {
        return new Date(parseInt(data));
      }
      if (_typeof(data) === 'object') {
        if (data instanceof Array) {
          data = data.map(function (item) {
            return _this.transform(item);
          });
        } else {
          var keys = Object.keys(data);
          for (var _i = 0, keys_1 = keys; _i < keys_1.length; _i++) {
            var key = keys_1[_i];
            if ((key === 'value' || key === 'values') && keys.length === 1) {
              return data[key];
            } else {
              data[key] = this.transform(data[key], key);
            }
          }
        }
      }
      return data;
    };
    NotificationUtil.transformDate = function (date) {
      return date ? new Date(parseInt(date)) : undefined;
    };
    NotificationUtil.transformOrEmpty = function (data) {
      return this.transform(data) || [];
    };
    NotificationUtil.transformMapValToDate = function (record) {
      if (!record) {
        return;
      }
      var newMap = {};
      for (var key in record) {
        if (Object.prototype.hasOwnProperty.call(record, key)) {
          newMap[key] = new Date(parseInt(record[key]));
        }
      }
      return newMap;
    };
    NotificationUtil.getLongOrThrow = function (data) {
      var long = data === null || data === void 0 ? void 0 : data.long;
      if (long == null) {
        throw ResponseError.from({
          code: ResponseStatusCode$1.INVALID_RESPONSE,
          reason: "Could not get a long value from the invalid response: ".concat(JSON.stringify(data))
        });
      }
      return long;
    };
    NotificationUtil.getLongsWithVersion = function (data) {
      var longsWithVersion = data === null || data === void 0 ? void 0 : data.longsWithVersion;
      var longs = longsWithVersion === null || longsWithVersion === void 0 ? void 0 : longsWithVersion.longs;
      if (longs === null || longs === void 0 ? void 0 : longs.length) {
        return {
          longs: longs,
          lastUpdatedDate: this.transformDate(longsWithVersion.lastUpdatedDate)
        };
      }
    };
    NotificationUtil.toMap = function (array) {
      var length = array.length;
      if (length % 2 != 0) {
        throw ResponseError.from({
          code: ResponseStatusCode$1.ILLEGAL_ARGUMENT,
          reason: 'The number of elements must be even'
        });
      }
      var map = {};
      for (var i = 0; i < length; i += 2) {
        map[array[i]] = array[i + 1];
      }
      return map;
    };
    return NotificationUtil;
  }();

  var BaseService = function () {
    function BaseService(stateStore) {
      this._stateStore = stateStore;
    }
    return BaseService;
  }();

  var MessageService$1 = function (_super) {
    __extends(MessageService, _super);
    function MessageService(stateStore, requestTimeout, minRequestInterval) {
      var _this = _super.call(this, stateStore) || this;
      _this._notificationListeners = [];
      _this._idToRequest = {};
      _this._requestTimeout = isNaN(requestTimeout) || requestTimeout <= 0 ? 60 * 1000 : requestTimeout;
      _this._minRequestInterval = minRequestInterval || 0;
      return _this;
    }
    MessageService.prototype.addNotificationListener = function (listener) {
      this._notificationListeners.push(listener);
    };
    MessageService.prototype.removeNotificationListener = function (listener) {
      this._notificationListeners = this._notificationListeners.filter(function (cur) {
        return cur !== listener;
      });
    };
    MessageService.prototype._notifyNotificationListeners = function (parsedNotification) {
      for (var _i = 0, _a = this._notificationListeners; _i < _a.length; _i++) {
        var listener = _a[_i];
        try {
          listener.call(this, parsedNotification);
        } catch (e) {
          console.error(e);
        }
      }
    };
    MessageService.prototype.sendRequest = function (message) {
      var _this = this;
      return new Promise(function (resolve, reject) {
        if (message.createSessionRequest) {
          if (_this._stateStore.isSessionOpen) {
            return reject(ResponseError.from({
              code: ResponseStatusCode$1.CLIENT_SESSION_ALREADY_ESTABLISHED
            }));
          }
        } else if (!_this._stateStore.isConnected || !_this._stateStore.isSessionOpen) {
          return reject(ResponseError.from({
            code: ResponseStatusCode$1.CLIENT_SESSION_HAS_BEEN_CLOSED
          }));
        }
        var now = Date.now();
        var difference = now - _this._stateStore.lastRequestDate;
        var isFrequent = _this._minRequestInterval > 0 && difference <= _this._minRequestInterval;
        if (isFrequent) {
          return reject(ResponseError.from({
            code: ResponseStatusCode$1.CLIENT_REQUESTS_TOO_FREQUENT
          }));
        }
        var requestId = _this._generateRandomId();
        message.requestId = '' + requestId;
        var data;
        try {
          data = TurmsRequest.encode(message).finish();
        } catch (e) {
          return reject(e);
        }
        _this._stateStore.websocket.send(data).then(function () {
          _this._stateStore.lastRequestDate = now;
          var timeoutId;
          if (_this._requestTimeout > 0) {
            timeoutId = setTimeout(function () {
              delete _this._idToRequest[requestId];
              reject(ResponseError.from({
                code: ResponseStatusCode$1.REQUEST_TIMEOUT
              }));
            }, _this._requestTimeout);
          }
          _this._idToRequest[requestId] = {
            timeoutId: timeoutId,
            resolve: resolve,
            reject: reject
          };
        }).catch(function (e) {
          return reject(e);
        });
      });
    };
    MessageService.prototype.didReceiveNotification = function (notification) {
      var isResponse = !notification.relayedRequest && notification.requestId;
      if (isResponse) {
        var requestId = parseInt(notification.requestId);
        if (requestId) {
          var cb = this._idToRequest[requestId];
          if (cb) {
            if (cb.timeoutId) {
              clearTimeout(cb.timeoutId);
            }
            delete this._idToRequest[requestId];
            if (notification.code) {
              if (ResponseStatusCode$1.isSuccessCode(notification.code)) {
                cb.resolve(notification);
              } else {
                cb.reject(ResponseError.fromNotification(notification));
              }
            } else {
              cb.reject(ResponseError.from({
                code: ResponseStatusCode$1.INVALID_NOTIFICATION,
                reason: 'The code is missing'
              }));
            }
          }
        }
      }
      var clonedNotification = JSON.parse(JSON.stringify(notification));
      var parsedNotification = NotificationUtil.transform(clonedNotification);
      this._notifyNotificationListeners(parsedNotification);
    };
    MessageService.prototype._generateRandomId = function () {
      var id;
      do {
        id = 1 + Math.floor(Math.random() * 9007199254740991);
      } while (this._idToRequest[id]);
      return id;
    };
    MessageService.prototype._rejectRequestPromises = function (error) {
      Object.values(this._idToRequest).forEach(function (request) {
        return request.reject(error);
      });
      this._idToRequest = {};
    };
    MessageService.prototype.close = function () {
      this.onDisconnected();
      return Promise.resolve();
    };
    MessageService.prototype.onDisconnected = function (error) {
      var e = ResponseError.from({
        code: ResponseStatusCode$1.CLIENT_SESSION_HAS_BEEN_CLOSED,
        cause: error
      });
      this._rejectRequestPromises(e);
    };
    return MessageService;
  }(BaseService);

  var Timer = function () {
    function Timer(callback, interval) {
      var _this = this;
      this._callback = function () {
        if (!_this._ignoreNextCall) {
          callback();
        } else {
          _this._ignoreNextCall = false;
        }
      };
      this._interval = interval;
      this._ignoreNextCall = false;
      this._isRunning = false;
    }
    Object.defineProperty(Timer.prototype, "isRunning", {
      get: function get() {
        return this._isRunning;
      },
      enumerable: false,
      configurable: true
    });
    Timer.prototype.stop = function () {
      if (this._timerId) {
        clearInterval(this._timerId);
      }
      this._isRunning = false;
      this._timerId = null;
      return this;
    };
    Timer.prototype.start = function () {
      if (!this._timerId) {
        this._timerId = setInterval(this._callback, this._interval);
      }
      this._isRunning = true;
      return this;
    };
    return Timer;
  }();

  var HeartbeatService = function (_super) {
    __extends(HeartbeatService, _super);
    function HeartbeatService(stateStore, heartbeatInterval) {
      var _this = _super.call(this, stateStore) || this;
      _this._lastHeartbeatRequestDate = 0;
      _this._heartbeatPromises = [];
      _this._heartbeatInterval = heartbeatInterval || HeartbeatService.DEFAULT_HEARTBEAT_INTERVAL;
      _this._heartbeatTimerInterval = Math.max(1, _this._heartbeatInterval / 10);
      return _this;
    }
    Object.defineProperty(HeartbeatService.prototype, "isRunning", {
      get: function get() {
        var _a;
        return !!((_a = this._heartbeatTimer) === null || _a === void 0 ? void 0 : _a.isRunning);
      },
      enumerable: false,
      configurable: true
    });
    HeartbeatService.prototype.start = function () {
      var _this = this;
      if (this.isRunning) {
        return;
      }
      this._heartbeatTimer = new Timer(function () {
        var now = Date.now();
        var difference = Math.min(now - _this._stateStore.lastRequestDate, now - _this._lastHeartbeatRequestDate);
        if (difference > _this._heartbeatInterval) {
          _this.send().then(function () {
            return null;
          });
          _this._lastHeartbeatRequestDate = now;
        }
      }, this._heartbeatTimerInterval);
      this._heartbeatTimer.start();
    };
    HeartbeatService.prototype.stop = function () {
      var _a;
      (_a = this._heartbeatTimer) === null || _a === void 0 ? void 0 : _a.stop();
    };
    HeartbeatService.prototype.send = function () {
      var _this = this;
      return new Promise(function (resolve, reject) {
        if (!_this._stateStore.isConnected || !_this._stateStore.isSessionOpen) {
          return reject(ResponseError.from({
            code: ResponseStatusCode$1.CLIENT_SESSION_HAS_BEEN_CLOSED
          }));
        }
        _this._stateStore.websocket.send(HeartbeatService.HEARTBEAT_REQUEST);
        _this._heartbeatPromises.push({
          resolve: resolve,
          reject: reject
        });
      });
    };
    HeartbeatService.prototype.resolveHeartbeatPromises = function () {
      for (var _i = 0, _a = this._heartbeatPromises; _i < _a.length; _i++) {
        var cb = _a[_i];
        cb.resolve();
      }
      this._heartbeatPromises = [];
    };
    HeartbeatService.prototype.rejectHeartbeatPromisesIfFail = function (notification) {
      if (HeartbeatService.HEARTBEAT_FAILURE_REQUEST_ID === parseInt(notification.requestId)) {
        this._rejectHeartbeatPromises(ResponseError.fromNotification(notification));
        return true;
      }
    };
    HeartbeatService.prototype._rejectHeartbeatPromises = function (error) {
      for (var _i = 0, _a = this._heartbeatPromises; _i < _a.length; _i++) {
        var cb = _a[_i];
        cb.reject(error);
      }
      this._heartbeatPromises = [];
    };
    HeartbeatService.prototype.close = function () {
      this.onDisconnected();
      return Promise.resolve();
    };
    HeartbeatService.prototype.onDisconnected = function (error) {
      this.stop();
      var e = ResponseError.from({
        code: ResponseStatusCode$1.CLIENT_SESSION_HAS_BEEN_CLOSED,
        cause: error
      });
      this._rejectHeartbeatPromises(e);
    };
    HeartbeatService.DEFAULT_HEARTBEAT_INTERVAL = 120 * 1000;
    HeartbeatService.HEARTBEAT_FAILURE_REQUEST_ID = -100;
    HeartbeatService.HEARTBEAT_REQUEST = new Uint8Array(0);
    return HeartbeatService;
  }(BaseService);

  function SharedContextWorker () {
    var _a;
    var pendingPorts = {};
    var contexts = {};
    function notify(target, _a) {
      var type = _a.type,
        data = _a.data;
      if (target instanceof MessagePort) {
        target.postMessage({
          type: type,
          data: data
        });
      } else {
        for (var _i = 0, _b = Object.values(target.ports); _i < _b.length; _i++) {
          var port = _b[_i];
          port.postMessage({
            type: type,
            data: data
          });
        }
      }
    }
    function notifySharedStates(port, info) {
      if (info.loggedInUserInfo) {
        notify(port, {
          type: "updateLoggedInUserInfo",
          data: info.loggedInUserInfo
        });
      }
      if (info.isSessionOpen != null) {
        notify(port, {
          type: "updateIsSessionOpen",
          data: info.isSessionOpen
        });
      }
      if (info.sessionId) {
        notify(port, {
          type: "updateSessionId",
          data: info.sessionId
        });
      }
      if (info.serverId) {
        notify(port, {
          type: "updateServerId",
          data: info.serverId
        });
      }
      if (info.lastRequestDate) {
        notify(port, {
          type: "updateLastRequestDate",
          data: info.lastRequestDate
        });
      }
    }
    function response(port, res) {
      port.postMessage(res);
    }
    function isSame(value1, value2) {
      return value1 === value2 || JSON.stringify(value1) === JSON.stringify(value2);
    }
    function throwIfFalsy(value, name) {
      if (value == null || (value === null || value === void 0 ? void 0 : value.length) === 0) {
        throw new Error("The param ".concat(name, " should not be falsy"));
      }
    }
    function createWs(info, url) {
      var ws = new WebSocket(url);
      ws.binaryType = 'arraybuffer';
      ws.onopen = function () {
        return notify(info, {
          type: "websocketConnected"
        });
      };
      ws.onclose = function (e) {
        return notify(info, {
          type: "websocketClosed",
          data: {
            code: e.code,
            reason: e.reason
          }
        });
      };
      ws.onmessage = function (e) {
        return notify(info, {
          type: "websocketMessageReceived",
          data: e.data
        });
      };
      return ws;
    }
    var portSeq = 1;
    var requestHandlers = (_a = {}, _a["register"] = {
      handler: function handler(context) {
        var id = portSeq++;
        context.portId = id;
        pendingPorts[id] = context.port;
        return id;
      }
    }, _a["unregister"] = {
      handler: function handler(context) {
        var _a;
        if (!context.portId) {
          return;
        }
        if (!context.contextId) {
          delete pendingPorts[context.portId];
          return;
        }
        var info = contexts[context.contextId];
        var ports = info === null || info === void 0 ? void 0 : info.ports;
        if (!ports) {
          return;
        }
        delete ports[context.portId];
        if (!Object.keys(ports).length) {
          delete context[context.contextId];
          if (!Object.keys(contexts).length) {
            (_a = info.ws) === null || _a === void 0 ? void 0 : _a.close();
          }
        }
      }
    }, _a["rebindContextId"] = {
      handler: function handler(context, request) {
        var _a, _b;
        var userId = (_a = request.data) === null || _a === void 0 ? void 0 : _a.userId;
        var deviceType = (_b = request.data) === null || _b === void 0 ? void 0 : _b.deviceType;
        throwIfFalsy(userId, 'userId');
        throwIfFalsy(deviceType, 'deviceType');
        var newContextId = "".concat(userId, ":").concat(deviceType);
        var portId = context.portId;
        if (pendingPorts[portId]) {
          delete pendingPorts[portId];
        } else if (context.contextId) {
          if (context.contextId === newContextId) {
            return;
          }
          delete contexts[context.contextId].ports[portId];
        }
        context.contextId = newContextId;
        var port = context.port;
        var info = contexts[newContextId];
        if (info) {
          info.ports[portId] = port;
          notifySharedStates(port, info);
        } else {
          contexts[newContextId] = {
            ports: [port]
          };
        }
      }
    }, _a["updateLoggedInUserInfo"] = {
      shouldHaveBoundContextId: true,
      handler: function handler(context, request, info) {
        if (isSame(request.data, info.loggedInUserInfo)) {
          return;
        }
        info.loggedInUserInfo = request.data;
        notify(info, {
          type: "updateLoggedInUserInfo",
          data: info.loggedInUserInfo
        });
      }
    }, _a["requestLogin"] = {
      shouldHaveBoundContextId: true,
      handler: function handler(context, request, info) {
        if (!info.loggingInPortId) {
          info.loggingInPortId = context.portId;
          return true;
        }
        return false;
      }
    }, _a["finishLoginRequest"] = {
      shouldHaveBoundContextId: true,
      handler: function handler(context, request, info) {
        if (info.loggingInPortId === context.portId) {
          info.loggingInPortId = null;
        }
      }
    }, _a["updateIsSessionOpen"] = {
      shouldHaveBoundContextId: true,
      handler: function handler(context, request, info) {
        if (isSame(request.data, info.isSessionOpen)) {
          return;
        }
        info.isSessionOpen = request.data;
        notify(context.port, {
          type: "updateIsSessionOpen",
          data: info.isSessionOpen
        });
      }
    }, _a["updateSessionId"] = {
      shouldHaveBoundContextId: true,
      handler: function handler(context, request, info) {
        if (isSame(request.data, info.sessionId)) {
          return;
        }
        info.sessionId = request.data;
        notify(context.port, {
          type: "updateSessionId",
          data: info.sessionId
        });
      }
    }, _a["updateServerId"] = {
      shouldHaveBoundContextId: true,
      handler: function handler(context, request, info) {
        if (isSame(request.data, info.serverId)) {
          return;
        }
        info.serverId = request.data;
        notify(context.port, {
          type: "updateServerId",
          data: info.serverId
        });
      }
    }, _a["updateLastRequestDate"] = {
      shouldHaveBoundContextId: true,
      handler: function handler(context, request, info) {
        if (isSame(request.data, info.lastRequestDate)) {
          return;
        }
        info.lastRequestDate = Math.max(request.data, info.lastRequestDate);
        notify(context.port, {
          type: "updateLastRequestDate",
          data: info.lastRequestDate
        });
      }
    }, _a["connect"] = {
      shouldHaveBoundContextId: true,
      handler: function handler(context, request, info) {
        throwIfFalsy(request.data, 'url');
        var ws = info.ws;
        if ((ws === null || ws === void 0 ? void 0 : ws.readyState) === WebSocket.OPEN) {
          return true;
        }
        if (!ws || ws.readyState === WebSocket.CLOSED || ws.readyState === WebSocket.CLOSING) {
          notify(context.port, {
            type: "websocketConnecting"
          });
          info.ws = createWs(info, request.data);
        }
      }
    }, _a["sendData"] = {
      shouldHaveBoundContextId: true,
      handler: function handler(context, request, info) {
        throwIfFalsy(request.data, 'data');
        var ws = info.ws;
        if ((ws === null || ws === void 0 ? void 0 : ws.readyState) === WebSocket.OPEN) {
          ws.send(request.data);
        } else {
          throw new Error('Failed to send data because the WebSocket connection is closed');
        }
      }
    }, _a);
    this.onconnect = function (e) {
      var port = e.ports[0];
      var portContext = {
        port: port
      };
      port.onmessage = function (ev) {
        var request = ev.data;
        var handler = requestHandlers[request.type];
        if (!handler) {
          response(port, {
            requestId: request.id,
            error: new Error('Unknown request: ' + JSON.stringify(request))
          });
          return;
        }
        var info = portContext.contextId && contexts[portContext.contextId];
        if (handler.shouldHaveBoundContextId && !info) {
          response(port, {
            requestId: request.id,
            error: new Error("The request type ".concat(request.type, " can only be requested after the context ID is bound"))
          });
          return;
        }
        var data;
        try {
          data = handler.handler(portContext, request, info);
        } catch (error) {
          response(port, {
            requestId: request.id,
            error: error
          });
          return;
        }
        response(port, {
          requestId: request.id,
          data: data
        });
      };
      port.start();
    };
  }

  var workerSource = "(".concat(SharedContextWorker.toString(), ")()");
  var workerUrl = "data:application/javascript;base64,".concat(btoa(workerSource));
  var SharedContextService = function (_super) {
    __extends(SharedContextService, _super);
    function SharedContextService(stateStore) {
      var _this = _super.call(this, stateStore) || this;
      _this._pendingRequests = {};
      _this.requestSeq = 1;
      _this._listeners = {};
      _this._sharedContextWorker = new SharedWorker(workerUrl, 'turms-client:shared-context');
      _this._port = _this._sharedContextWorker.port;
      _this._port.onmessage = function (e) {
        var data = e.data;
        if (data.requestId) {
          _this._resolveRequest(data);
        } else {
          _this._handleNotification(data);
        }
      };
      _this._registerRequest = _this.request({
        type: "register"
      }).then(function (response) {
        _this._globalId = response.data;
      });
      return _this;
    }
    SharedContextService.prototype.addNotificationListener = function (type, listener) {
      var list = this._listeners[type];
      if (!list) {
        list = [];
        this._listeners[type] = list;
      }
      list.push(listener);
    };
    SharedContextService.prototype.request = function (request) {
      var _this = this;
      var register;
      if (request.type === "register") {
        register = Promise.resolve();
      } else {
        if (!this._registerRequest) {
          var error = new Error('Could not send the request to the shared worker because the local service has not registered');
          return Promise.reject(error);
        }
        register = this._registerRequest;
      }
      return register.then(function () {
        return new Promise(function (resolve, reject) {
          var requestId = _this.requestSeq++;
          request.id = requestId;
          _this._pendingRequests[requestId] = {
            resolve: resolve,
            reject: reject
          };
          _this._port.postMessage(request);
        });
      });
    };
    SharedContextService.prototype._resolveRequest = function (response) {
      var seal = this._pendingRequests[response.requestId];
      if (!seal) {
        return;
      }
      if (response.error) {
        seal.reject(response.error);
      } else {
        seal.resolve(response.data);
      }
    };
    SharedContextService.prototype._handleNotification = function (notification) {
      (this._listeners[notification.type] || []).forEach(function (listener) {
        listener(notification);
      });
    };
    SharedContextService.prototype.close = function () {
      if (this._globalId) {
        return this.request({
          type: "unregister"
        }).then();
      }
      return Promise.resolve();
    };
    SharedContextService.prototype.onDisconnected = function (error) {};
    return SharedContextService;
  }(BaseService);

  var WebSocketClient = function () {
    function WebSocketClient(url, listener) {
      this._url = url;
      this._listener = listener;
    }
    Object.defineProperty(WebSocketClient.prototype, "url", {
      get: function get() {
        return this._url;
      },
      enumerable: false,
      configurable: true
    });
    WebSocketClient.prototype.notifyOnOpened = function () {
      this._listener.onOpened();
    };
    WebSocketClient.prototype.notifyOnClosed = function (event) {
      this._listener.onClosed(event);
    };
    WebSocketClient.prototype.notifyOnMessage = function (data) {
      this._listener.onMessage(data);
    };
    return WebSocketClient;
  }();

  var WebSocketMetrics = function () {
    function WebSocketMetrics() {
      this.dataReceived = 0;
      this.dataSent = 0;
    }
    return WebSocketMetrics;
  }();

  var PlainWebSocketClient = function (_super) {
    __extends(PlainWebSocketClient, _super);
    function PlainWebSocketClient(url, listener) {
      var _this = _super.call(this, url, listener) || this;
      _this._metrics = new WebSocketMetrics();
      var connectStart = Date.now();
      var ws = new WebSocket(url);
      ws.binaryType = 'arraybuffer';
      ws.onopen = function () {
        _this._metrics.connectTime = Date.now() - connectStart;
        _this.notifyOnOpened();
      };
      ws.onclose = function (e) {
        _this._metrics = new WebSocketMetrics();
        _this.notifyOnClosed(e);
      };
      ws.onmessage = function (e) {
        var data = e.data;
        _this.notifyOnMessage(data);
        _this._metrics.dataReceived += data.byteLength;
      };
      _this._ws = ws;
      return _this;
    }
    Object.defineProperty(PlainWebSocketClient.prototype, "isConnecting", {
      get: function get() {
        return this._ws.readyState === WebSocket.CONNECTING;
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(PlainWebSocketClient.prototype, "isConnected", {
      get: function get() {
        return this._ws.readyState === WebSocket.OPEN;
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(PlainWebSocketClient.prototype, "metrics", {
      get: function get() {
        return this._metrics;
      },
      enumerable: false,
      configurable: true
    });
    PlainWebSocketClient.prototype.close = function () {
      this._ws.close();
    };
    PlainWebSocketClient.prototype.send = function (data) {
      try {
        this._ws.send(data);
        this._metrics.dataSent += data instanceof Blob ? data.size : data.byteLength;
        return Promise.resolve();
      } catch (e) {
        return Promise.reject(e);
      }
    };
    return PlainWebSocketClient;
  }(WebSocketClient);

  var WorkerWebSocketClient = function (_super) {
    __extends(WorkerWebSocketClient, _super);
    function WorkerWebSocketClient(url, listener, sharedContextService) {
      var _this = _super.call(this, url, listener) || this;
      _this._metrics = new WebSocketMetrics();
      var connectStart;
      sharedContextService.addNotificationListener("websocketConnecting", function () {
        connectStart = Date.now();
        _this._isConnecting = true;
        _this._isConnected = false;
      });
      sharedContextService.addNotificationListener("websocketConnected", function () {
        _this._isConnecting = false;
        _this._isConnected = true;
        _this._metrics.connectTime = Date.now() - connectStart;
        _this.notifyOnOpened();
      });
      sharedContextService.addNotificationListener("websocketClosed", function (notification) {
        _this._isConnecting = false;
        _this._isConnected = false;
        _this._metrics = new WebSocketMetrics();
        _this.notifyOnClosed({
          code: notification.data.code,
          reason: notification.data.reason
        });
      });
      sharedContextService.addNotificationListener("websocketMessageReceived", function (notification) {
        var data = notification.data;
        _this._metrics.dataReceived += data.byteLength;
        _this.notifyOnMessage(data);
      });
      _this._sharedContextService = sharedContextService;
      sharedContextService.request({
        type: "connect",
        data: url
      }).then(function (alreadyCreated) {
        if (alreadyCreated) {
          _this.notifyOnOpened();
        }
      }).catch(function (error) {
        _this.notifyOnClosed({
          code: 1006,
          reason: error.message
        });
      });
      return _this;
    }
    Object.defineProperty(WorkerWebSocketClient.prototype, "isConnecting", {
      get: function get() {
        return this._isConnecting;
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(WorkerWebSocketClient.prototype, "isConnected", {
      get: function get() {
        return this._isConnected;
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(WorkerWebSocketClient.prototype, "metrics", {
      get: function get() {
        return this._metrics;
      },
      enumerable: false,
      configurable: true
    });
    WorkerWebSocketClient.prototype.close = function () {};
    WorkerWebSocketClient.prototype.send = function (data) {
      var _this = this;
      return this._sharedContextService.request({
        type: "sendData",
        data: data
      }).then(function () {
        _this._metrics.dataSent += data instanceof Blob ? data.size : data.byteLength;
      });
    };
    return WorkerWebSocketClient;
  }(WebSocketClient);

  var WebSocketFactory = function () {
    function WebSocketFactory() {}
    WebSocketFactory.create = function (url, listener, sharedContextService) {
      if (sharedContextService) {
        return new WorkerWebSocketClient(url, listener, sharedContextService);
      }
      return new PlainWebSocketClient(url, listener);
    };
    return WebSocketFactory;
  }();

  var ConnectionService = function (_super) {
    __extends(ConnectionService, _super);
    function ConnectionService(stateStore, wsUrl, connectTimeout) {
      var _this = _super.call(this, stateStore) || this;
      _this._disconnectPromises = [];
      _this._onConnectedListeners = [];
      _this._onDisconnectedListeners = [];
      _this._messageListeners = [];
      _this._initialWsUrl = wsUrl || 'ws://localhost:10510';
      _this._initialConnectTimeout = isNaN(connectTimeout) || connectTimeout <= 0 ? 30 * 1000 : connectTimeout;
      return _this;
    }
    ConnectionService.prototype._resetStates = function () {
      this._resolveDisconnectPromises();
    };
    ConnectionService.prototype.addOnConnectedListener = function (listener) {
      this._onConnectedListeners.push(listener);
    };
    ConnectionService.prototype.addOnDisconnectedListener = function (listener) {
      this._onDisconnectedListeners.push(listener);
    };
    ConnectionService.prototype.addMessageListener = function (listener) {
      this._messageListeners.push(listener);
    };
    ConnectionService.prototype.removeOnConnectedListener = function (listener) {
      this._onConnectedListeners = this._onConnectedListeners.filter(function (cur) {
        return cur !== listener;
      });
    };
    ConnectionService.prototype.removeOnDisconnectedListener = function (listener) {
      this._onDisconnectedListeners = this._onDisconnectedListeners.filter(function (cur) {
        return cur !== listener;
      });
    };
    ConnectionService.prototype.removeMessageListener = function (listener) {
      this._messageListeners = this._messageListeners.filter(function (cur) {
        return cur !== listener;
      });
    };
    ConnectionService.prototype._notifyOnConnectedListeners = function () {
      var _this = this;
      this._onConnectedListeners.forEach(function (listener) {
        return listener.call(_this);
      });
    };
    ConnectionService.prototype._notifyOnDisconnectedListeners = function (info) {
      var _this = this;
      this._onDisconnectedListeners.forEach(function (listener) {
        return listener.call(_this, info);
      });
    };
    ConnectionService.prototype._notifyMessageListeners = function (message) {
      var _this = this;
      this._messageListeners.forEach(function (listener) {
        return listener.call(_this, message);
      });
    };
    ConnectionService.prototype._resolveDisconnectPromises = function () {
      this._disconnectPromises.forEach(function (cb) {
        return cb();
      });
      this._disconnectPromises = [];
    };
    ConnectionService.prototype.connect = function (_a) {
      var _this = this;
      var _b = _a === void 0 ? {} : _a,
        _c = _b.wsUrl,
        wsUrl = _c === void 0 ? this._initialWsUrl : _c,
        _d = _b.connectTimeout,
        connectTimeout = _d === void 0 ? this._initialConnectTimeout : _d;
      return new Promise(function (resolve, reject) {
        var websocket = _this._stateStore.websocket;
        if (websocket === null || websocket === void 0 ? void 0 : websocket.isConnected) {
          return wsUrl === websocket.url ? resolve() : reject(ResponseError.from({
            code: ResponseStatusCode$1.CLIENT_SESSION_ALREADY_ESTABLISHED
          }));
        }
        _this._resetStates();
        _this._stateStore.websocket = WebSocketFactory.create(wsUrl, {
          onOpened: function onOpened() {
            if (connectTimeoutId) {
              clearTimeout(connectTimeoutId);
            }
            _this._onWebSocketOpen();
            resolve();
          },
          onClosed: function onClosed(event) {
            if (connectTimeoutId) {
              clearTimeout(connectTimeoutId);
            }
            var info = _this._onWebSocketClosed(wsUrl, event);
            reject(info);
          },
          onMessage: function onMessage(data) {
            return _this._notifyMessageListeners(data);
          }
        }, _this._stateStore.sharedContextService);
        var connectTimeoutId;
        if (connectTimeout > 0) {
          connectTimeoutId = setTimeout(function () {
            reject(ResponseError.from({
              code: ResponseStatusCode$1.CONNECT_TIMEOUT
            }));
          }, connectTimeout);
        }
      });
    };
    ConnectionService.prototype.disconnect = function () {
      var _this = this;
      var ws = this._stateStore.websocket;
      if ((ws === null || ws === void 0 ? void 0 : ws.isConnected) || (ws === null || ws === void 0 ? void 0 : ws.isConnecting)) {
        return new Promise(function (resolve) {
          _this._disconnectPromises.push(resolve);
          ws.close();
        });
      }
      return Promise.resolve();
    };
    ConnectionService.prototype._onWebSocketOpen = function () {
      this._notifyOnConnectedListeners();
    };
    ConnectionService.prototype._onWebSocketClosed = function (url, event) {
      var wasConnected = this._stateStore.isConnected;
      this._resolveDisconnectPromises();
      var info = {
        wasConnected: wasConnected,
        wsUrl: url,
        code: event.code,
        reason: event.reason
      };
      this._notifyOnDisconnectedListeners(info);
      return info;
    };
    ConnectionService.prototype.close = function () {
      return this.disconnect();
    };
    ConnectionService.prototype.onDisconnected = function (error) {};
    return ConnectionService;
  }(BaseService);

  var TurmsDriver = function () {
    function TurmsDriver(wsUrl, connectTimeout, requestTimeout, minRequestInterval, heartbeatInterval, useSharedContext) {
      var _this = this;
      if (useSharedContext) {
        this._sharedContextService = new SharedContextService(this._stateStore);
      }
      this._stateStore = new StateStore(this._sharedContextService);
      this._connectionService = this.initConnectionService(wsUrl, connectTimeout);
      this._heartbeatService = new HeartbeatService(this._stateStore, heartbeatInterval);
      this._messageService = new MessageService$1(this._stateStore, requestTimeout, minRequestInterval);
      if (SystemUtil.isBrowser()) {
        window.addEventListener('beforeunload', function () {
          return _this.close();
        });
      }
    }
    TurmsDriver.prototype.stateStore = function () {
      return this._stateStore;
    };
    TurmsDriver.prototype.initConnectionService = function (wsUrl, connectTimeout) {
      var _this = this;
      var connectionService = new ConnectionService(this._stateStore, wsUrl, connectTimeout);
      connectionService.addOnDisconnectedListener(function () {
        return _this._onConnectionDisconnected();
      });
      connectionService.addMessageListener(function (message) {
        return _this._onMessage(message);
      });
      return connectionService;
    };
    TurmsDriver.prototype.close = function () {
      return Promise.allSettled([this._connectionService.close(), this._heartbeatService.close(), this._messageService.close()]).then(function () {
        return null;
      });
    };
    TurmsDriver.prototype.addSharedContextNotificationListener = function (type, listener) {
      var _a;
      (_a = this._sharedContextService) === null || _a === void 0 ? void 0 : _a.addNotificationListener(type, listener);
    };
    TurmsDriver.prototype.requestSharedContext = function (request) {
      if (!this._sharedContextService) {
        return Promise.reject(new Error('The shared context is disabled'));
      }
      return this._sharedContextService.request(request);
    };
    TurmsDriver.prototype.startHeartbeat = function () {
      this._heartbeatService.start();
    };
    TurmsDriver.prototype.stopHeartbeat = function () {
      this._heartbeatService.stop();
    };
    TurmsDriver.prototype.sendHeartbeat = function () {
      return this._heartbeatService.send();
    };
    Object.defineProperty(TurmsDriver.prototype, "isHeartbeatRunning", {
      get: function get() {
        return this._heartbeatService.isRunning;
      },
      enumerable: false,
      configurable: true
    });
    TurmsDriver.prototype.connect = function (options) {
      if (options === void 0) {
        options = {};
      }
      return this._connectionService.connect(options);
    };
    TurmsDriver.prototype.disconnect = function () {
      return this._connectionService.disconnect();
    };
    Object.defineProperty(TurmsDriver.prototype, "isConnected", {
      get: function get() {
        return this._stateStore.isConnected;
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(TurmsDriver.prototype, "connectionMetrics", {
      get: function get() {
        var _a;
        return (_a = this._stateStore.websocket) === null || _a === void 0 ? void 0 : _a.metrics;
      },
      enumerable: false,
      configurable: true
    });
    TurmsDriver.prototype.addOnConnectedListener = function (listener) {
      this._connectionService.addOnConnectedListener(listener);
    };
    TurmsDriver.prototype.addOnDisconnectedListener = function (listener) {
      this._connectionService.addOnDisconnectedListener(listener);
    };
    TurmsDriver.prototype.removeOnConnectedListener = function (listener) {
      this._connectionService.removeOnConnectedListener(listener);
    };
    TurmsDriver.prototype.removeOnDisconnectedListener = function (listener) {
      this._connectionService.removeOnDisconnectedListener(listener);
    };
    TurmsDriver.prototype.send = function (message) {
      var _this = this;
      var notification = this._messageService.sendRequest(message);
      if (message.createSessionRequest) {
        notification.then(function () {
          _this._heartbeatService.start();
        });
      }
      return notification;
    };
    TurmsDriver.prototype.addNotificationListener = function (listener) {
      this._messageService.addNotificationListener(listener);
    };
    TurmsDriver.prototype.removeNotificationListener = function (listener) {
      this._messageService.removeNotificationListener(listener);
    };
    TurmsDriver.prototype._onConnectionDisconnected = function () {
      this._stateStore.reset();
      this._heartbeatService.onDisconnected();
      this._messageService.onDisconnected();
    };
    TurmsDriver.prototype._onMessage = function (message) {
      var _a;
      if (message.byteLength) {
        var notification = void 0;
        try {
          notification = TurmsNotification.decode(new Uint8Array(message));
        } catch (e) {
          console.error('Failed to parse TurmsNotification', e);
          return;
        }
        if (this._heartbeatService.rejectHeartbeatPromisesIfFail(notification)) {
          return;
        }
        var session = (_a = notification.data) === null || _a === void 0 ? void 0 : _a.userSession;
        if (session) {
          this._stateStore.sessionId = session.sessionId;
          this._stateStore.serverId = session.serverId;
        } else if (notification.closeStatus) {
          this._stateStore.isSessionOpen = false;
        }
        this._messageService.didReceiveNotification(notification);
      } else {
        this._heartbeatService.resolveHeartbeatPromises();
      }
    };
    return TurmsDriver;
  }();

  var Response = function () {
    function Response(timestamp, requestId, code, data) {
      this.timestamp = timestamp;
      this.requestId = requestId;
      this.code = code;
      this.data = data;
    }
    Object.defineProperty(Response, "isTurmsResponse", {
      get: function get() {
        return true;
      },
      enumerable: false,
      configurable: true
    });
    Response.value = function (data) {
      return new Response(new Date(), null, ResponseStatusCode$1.OK, data);
    };
    Response.nullValue = function () {
      return new Response(new Date(), null, ResponseStatusCode$1.OK, null);
    };
    Response.emptyList = function () {
      return new Response(new Date(), null, ResponseStatusCode$1.OK, []);
    };
    Response.fromNotification = function (notification, dataTransformer) {
      if (notification.code == null) {
        throw ResponseError.from({
          code: ResponseStatusCode$1.INVALID_NOTIFICATION,
          reason: 'Cannot parse a success response from a notification without code'
        });
      }
      if (ResponseStatusCode$1.isErrorCode(notification.code)) {
        throw ResponseError.from({
          code: ResponseStatusCode$1.INVALID_NOTIFICATION,
          reason: 'Cannot parse a success response from non-success notification'
        });
      }
      var data = notification.data || {};
      var responseData;
      try {
        responseData = dataTransformer === null || dataTransformer === void 0 ? void 0 : dataTransformer(data);
      } catch (e) {
        throw ResponseError.from({
          code: ResponseStatusCode$1.INVALID_NOTIFICATION,
          reason: "Failed to transform notification data: ".concat(notification.data),
          cause: e
        });
      }
      return new Response(new Date(parseInt(notification.timestamp)), notification.requestId, notification.code, responseData);
    };
    return Response;
  }();

  var Validator = function () {
    function Validator() {}
    Validator.isFalsy = function (value) {
      return value == null || (value === null || value === void 0 ? void 0 : value.length) === 0;
    };
    Validator.isTruthy = function (value) {
      return !this.isFalsy(value);
    };
    Validator.throwIfEmpty = function (value) {
      if (!Object.keys(value).length) {
        throw new Error('Illegal parameters');
      }
    };
    Validator.throwIfAnyFalsy = function () {
      var values = [];
      for (var _i = 0; _i < arguments.length; _i++) {
        values[_i] = arguments[_i];
      }
      if (this.isFalsy(values)) {
        throw new Error('Illegal parameters');
      } else {
        for (var _a = 0, values_1 = values; _a < values_1.length; _a++) {
          var value = values_1[_a];
          if (this.isFalsy(value)) {
            throw new Error('Illegal parameters');
          }
        }
      }
    };
    Validator.throwIfAllFalsy = function () {
      var values = [];
      for (var _i = 0; _i < arguments.length; _i++) {
        values[_i] = arguments[_i];
      }
      if (Validator.areAllFalsy(values)) {
        throw new Error('Illegal parameters');
      }
    };
    Validator.areAllFalsy = function () {
      var values = [];
      for (var _i = 0; _i < arguments.length; _i++) {
        values[_i] = arguments[_i];
      }
      if (this.isFalsy(values)) {
        return true;
      } else {
        for (var _a = 0, values_2 = values; _a < values_2.length; _a++) {
          var value = values_2[_a];
          if (this.isTruthy(value)) {
            return false;
          }
        }
        return true;
      }
    };
    Validator.areAllNullOrNonNull = function () {
      var values = [];
      for (var _i = 0; _i < arguments.length; _i++) {
        values[_i] = arguments[_i];
      }
      var isFirstValueNull = values[0] == null;
      for (var _a = 0, values_3 = values; _a < values_3.length; _a++) {
        var value = values_3[_a];
        if (value == null != isFirstValueNull) {
          return false;
        }
      }
      return true;
    };
    return Validator;
  }();

  var ConversationService = function () {
    function ConversationService(turmsClient) {
      this._turmsClient = turmsClient;
    }
    ConversationService.prototype.queryPrivateConversations = function (_a) {
      var targetIds = _a.targetIds;
      if (Validator.isFalsy(targetIds)) {
        return Promise.resolve(Response.emptyList());
      }
      return this._turmsClient.driver.send({
        queryConversationsRequest: {
          targetIds: targetIds,
          groupIds: []
        }
      }).then(function (n) {
        return Response.fromNotification(n, function (data) {
          var _a;
          return NotificationUtil.transformOrEmpty((_a = data.conversations) === null || _a === void 0 ? void 0 : _a.privateConversations);
        });
      });
    };
    ConversationService.prototype.queryGroupConversations = function (_a) {
      var groupIds = _a.groupIds;
      if (Validator.isFalsy(groupIds)) {
        return Promise.resolve(Response.emptyList());
      }
      return this._turmsClient.driver.send({
        queryConversationsRequest: {
          groupIds: groupIds,
          targetIds: []
        }
      }).then(function (n) {
        return Response.fromNotification(n, function (data) {
          var _a, _b;
          return ((_b = NotificationUtil.transform((_a = data.conversations) === null || _a === void 0 ? void 0 : _a.groupConversations)) === null || _b === void 0 ? void 0 : _b.map(function (c) {
            return {
              groupId: c.groupId,
              memberIdAndReadDate: NotificationUtil.transformMapValToDate(c.memberIdAndReadDate)
            };
          })) || [];
        });
      });
    };
    ConversationService.prototype.updatePrivateConversationReadDate = function (_a) {
      var targetId = _a.targetId,
        readDate = _a.readDate;
      if (Validator.isFalsy(targetId)) {
        return ResponseError.notFalsyPromise('targetId');
      }
      readDate = readDate !== null && readDate !== void 0 ? readDate : new Date();
      return this._turmsClient.driver.send({
        updateConversationRequest: {
          targetId: targetId,
          readDate: '' + readDate.getTime()
        }
      }).then(function (n) {
        return Response.fromNotification(n);
      });
    };
    ConversationService.prototype.updateGroupConversationReadDate = function (_a) {
      var groupId = _a.groupId,
        readDate = _a.readDate;
      if (Validator.isFalsy(groupId)) {
        return ResponseError.notFalsyPromise('groupId');
      }
      readDate = readDate !== null && readDate !== void 0 ? readDate : new Date();
      return this._turmsClient.driver.send({
        updateConversationRequest: {
          groupId: groupId,
          readDate: '' + readDate.getTime()
        }
      }).then(function (n) {
        return Response.fromNotification(n);
      });
    };
    ConversationService.prototype.updatePrivateConversationTypingStatus = function (_a) {
      var targetId = _a.targetId;
      if (Validator.isFalsy(targetId)) {
        return ResponseError.notFalsyPromise('targetId');
      }
      return this._turmsClient.driver.send({
        updateTypingStatusRequest: {
          toId: targetId,
          isGroupMessage: false
        }
      }).then(function (n) {
        return Response.fromNotification(n);
      });
    };
    ConversationService.prototype.updateGroupConversationTypingStatus = function (_a) {
      var groupId = _a.groupId;
      if (Validator.isFalsy(groupId)) {
        return ResponseError.notFalsyPromise('groupId');
      }
      return this._turmsClient.driver.send({
        updateTypingStatusRequest: {
          toId: groupId,
          isGroupMessage: true
        }
      }).then(function (n) {
        return Response.fromNotification(n);
      });
    };
    return ConversationService;
  }();

  var internalMetadataExports = {};
  var internalMetadata = {
    get exports(){ return internalMetadataExports; },
    set exports(v){ internalMetadataExports = v; },
  };

  var objectGetOwnPropertyNamesExternal = {};

  /* eslint-disable es/no-object-getownpropertynames -- safe */

  var classof$3 = classofRaw$2;
  var toIndexedObject$1 = toIndexedObject$a;
  var $getOwnPropertyNames$1 = objectGetOwnPropertyNames.f;
  var arraySlice$1 = arraySliceSimple;

  var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
    ? Object.getOwnPropertyNames(window) : [];

  var getWindowNames = function (it) {
    try {
      return $getOwnPropertyNames$1(it);
    } catch (error) {
      return arraySlice$1(windowNames);
    }
  };

  // fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
  objectGetOwnPropertyNamesExternal.f = function getOwnPropertyNames(it) {
    return windowNames && classof$3(it) == 'Window'
      ? getWindowNames(it)
      : $getOwnPropertyNames$1(toIndexedObject$1(it));
  };

  // FF26- bug: ArrayBuffers are non-extensible, but Object.isExtensible does not report it
  var fails$c = fails$E;

  var arrayBufferNonExtensible = fails$c(function () {
    if (typeof ArrayBuffer == 'function') {
      var buffer = new ArrayBuffer(8);
      // eslint-disable-next-line es/no-object-isextensible, es/no-object-defineproperty -- safe
      if (Object.isExtensible(buffer)) Object.defineProperty(buffer, 'a', { value: 8 });
    }
  });

  var fails$b = fails$E;
  var isObject$2 = isObject$i;
  var classof$2 = classofRaw$2;
  var ARRAY_BUFFER_NON_EXTENSIBLE = arrayBufferNonExtensible;

  // eslint-disable-next-line es/no-object-isextensible -- safe
  var $isExtensible = Object.isExtensible;
  var FAILS_ON_PRIMITIVES = fails$b(function () { $isExtensible(1); });

  // `Object.isExtensible` method
  // https://tc39.es/ecma262/#sec-object.isextensible
  var objectIsExtensible = (FAILS_ON_PRIMITIVES || ARRAY_BUFFER_NON_EXTENSIBLE) ? function isExtensible(it) {
    if (!isObject$2(it)) return false;
    if (ARRAY_BUFFER_NON_EXTENSIBLE && classof$2(it) == 'ArrayBuffer') return false;
    return $isExtensible ? $isExtensible(it) : true;
  } : $isExtensible;

  var fails$a = fails$E;

  var freezing = !fails$a(function () {
    // eslint-disable-next-line es/no-object-isextensible, es/no-object-preventextensions -- required for testing
    return Object.isExtensible(Object.preventExtensions({}));
  });

  var $$b = _export;
  var uncurryThis$a = functionUncurryThis;
  var hiddenKeys$1 = hiddenKeys$6;
  var isObject$1 = isObject$i;
  var hasOwn$5 = hasOwnProperty_1;
  var defineProperty$1 = objectDefineProperty.f;
  var getOwnPropertyNamesModule$1 = objectGetOwnPropertyNames;
  var getOwnPropertyNamesExternalModule = objectGetOwnPropertyNamesExternal;
  var isExtensible = objectIsExtensible;
  var uid$1 = uid$5;
  var FREEZING = freezing;

  var REQUIRED = false;
  var METADATA = uid$1('meta');
  var id = 0;

  var setMetadata = function (it) {
    defineProperty$1(it, METADATA, { value: {
      objectID: 'O' + id++, // object ID
      weakData: {}          // weak collections IDs
    } });
  };

  var fastKey$1 = function (it, create) {
    // return a primitive with prefix
    if (!isObject$1(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
    if (!hasOwn$5(it, METADATA)) {
      // can't set metadata to uncaught frozen object
      if (!isExtensible(it)) return 'F';
      // not necessary to add metadata
      if (!create) return 'E';
      // add missing metadata
      setMetadata(it);
    // return object ID
    } return it[METADATA].objectID;
  };

  var getWeakData = function (it, create) {
    if (!hasOwn$5(it, METADATA)) {
      // can't set metadata to uncaught frozen object
      if (!isExtensible(it)) return true;
      // not necessary to add metadata
      if (!create) return false;
      // add missing metadata
      setMetadata(it);
    // return the store of weak collections IDs
    } return it[METADATA].weakData;
  };

  // add metadata on freeze-family methods calling
  var onFreeze = function (it) {
    if (FREEZING && REQUIRED && isExtensible(it) && !hasOwn$5(it, METADATA)) setMetadata(it);
    return it;
  };

  var enable = function () {
    meta.enable = function () { /* empty */ };
    REQUIRED = true;
    var getOwnPropertyNames = getOwnPropertyNamesModule$1.f;
    var splice = uncurryThis$a([].splice);
    var test = {};
    test[METADATA] = 1;

    // prevent exposing of metadata key
    if (getOwnPropertyNames(test).length) {
      getOwnPropertyNamesModule$1.f = function (it) {
        var result = getOwnPropertyNames(it);
        for (var i = 0, length = result.length; i < length; i++) {
          if (result[i] === METADATA) {
            splice(result, i, 1);
            break;
          }
        } return result;
      };

      $$b({ target: 'Object', stat: true, forced: true }, {
        getOwnPropertyNames: getOwnPropertyNamesExternalModule.f
      });
    }
  };

  var meta = internalMetadata.exports = {
    enable: enable,
    fastKey: fastKey$1,
    getWeakData: getWeakData,
    onFreeze: onFreeze
  };

  hiddenKeys$1[METADATA] = true;

  var $$a = _export;
  var global$7 = global$x;
  var uncurryThis$9 = functionUncurryThis;
  var isForced = isForced_1;
  var defineBuiltIn$4 = defineBuiltIn$e;
  var InternalMetadataModule = internalMetadataExports;
  var iterate$1 = iterate$5;
  var anInstance$1 = anInstance$5;
  var isCallable$6 = isCallable$t;
  var isNullOrUndefined$2 = isNullOrUndefined$7;
  var isObject = isObject$i;
  var fails$9 = fails$E;
  var checkCorrectnessOfIteration$1 = checkCorrectnessOfIteration$4;
  var setToStringTag$1 = setToStringTag$6;
  var inheritIfRequired = inheritIfRequired$2;

  var collection$1 = function (CONSTRUCTOR_NAME, wrapper, common) {
    var IS_MAP = CONSTRUCTOR_NAME.indexOf('Map') !== -1;
    var IS_WEAK = CONSTRUCTOR_NAME.indexOf('Weak') !== -1;
    var ADDER = IS_MAP ? 'set' : 'add';
    var NativeConstructor = global$7[CONSTRUCTOR_NAME];
    var NativePrototype = NativeConstructor && NativeConstructor.prototype;
    var Constructor = NativeConstructor;
    var exported = {};

    var fixMethod = function (KEY) {
      var uncurriedNativeMethod = uncurryThis$9(NativePrototype[KEY]);
      defineBuiltIn$4(NativePrototype, KEY,
        KEY == 'add' ? function add(value) {
          uncurriedNativeMethod(this, value === 0 ? 0 : value);
          return this;
        } : KEY == 'delete' ? function (key) {
          return IS_WEAK && !isObject(key) ? false : uncurriedNativeMethod(this, key === 0 ? 0 : key);
        } : KEY == 'get' ? function get(key) {
          return IS_WEAK && !isObject(key) ? undefined : uncurriedNativeMethod(this, key === 0 ? 0 : key);
        } : KEY == 'has' ? function has(key) {
          return IS_WEAK && !isObject(key) ? false : uncurriedNativeMethod(this, key === 0 ? 0 : key);
        } : function set(key, value) {
          uncurriedNativeMethod(this, key === 0 ? 0 : key, value);
          return this;
        }
      );
    };

    var REPLACE = isForced(
      CONSTRUCTOR_NAME,
      !isCallable$6(NativeConstructor) || !(IS_WEAK || NativePrototype.forEach && !fails$9(function () {
        new NativeConstructor().entries().next();
      }))
    );

    if (REPLACE) {
      // create collection constructor
      Constructor = common.getConstructor(wrapper, CONSTRUCTOR_NAME, IS_MAP, ADDER);
      InternalMetadataModule.enable();
    } else if (isForced(CONSTRUCTOR_NAME, true)) {
      var instance = new Constructor();
      // early implementations not supports chaining
      var HASNT_CHAINING = instance[ADDER](IS_WEAK ? {} : -0, 1) != instance;
      // V8 ~ Chromium 40- weak-collections throws on primitives, but should return false
      var THROWS_ON_PRIMITIVES = fails$9(function () { instance.has(1); });
      // most early implementations doesn't supports iterables, most modern - not close it correctly
      // eslint-disable-next-line no-new -- required for testing
      var ACCEPT_ITERABLES = checkCorrectnessOfIteration$1(function (iterable) { new NativeConstructor(iterable); });
      // for early implementations -0 and +0 not the same
      var BUGGY_ZERO = !IS_WEAK && fails$9(function () {
        // V8 ~ Chromium 42- fails only with 5+ elements
        var $instance = new NativeConstructor();
        var index = 5;
        while (index--) $instance[ADDER](index, index);
        return !$instance.has(-0);
      });

      if (!ACCEPT_ITERABLES) {
        Constructor = wrapper(function (dummy, iterable) {
          anInstance$1(dummy, NativePrototype);
          var that = inheritIfRequired(new NativeConstructor(), dummy, Constructor);
          if (!isNullOrUndefined$2(iterable)) iterate$1(iterable, that[ADDER], { that: that, AS_ENTRIES: IS_MAP });
          return that;
        });
        Constructor.prototype = NativePrototype;
        NativePrototype.constructor = Constructor;
      }

      if (THROWS_ON_PRIMITIVES || BUGGY_ZERO) {
        fixMethod('delete');
        fixMethod('has');
        IS_MAP && fixMethod('get');
      }

      if (BUGGY_ZERO || HASNT_CHAINING) fixMethod(ADDER);

      // weak collections should not contains .clear method
      if (IS_WEAK && NativePrototype.clear) delete NativePrototype.clear;
    }

    exported[CONSTRUCTOR_NAME] = Constructor;
    $$a({ global: true, constructor: true, forced: Constructor != NativeConstructor }, exported);

    setToStringTag$1(Constructor, CONSTRUCTOR_NAME);

    if (!IS_WEAK) common.setStrong(Constructor, CONSTRUCTOR_NAME, IS_MAP);

    return Constructor;
  };

  var create$1 = objectCreate;
  var defineBuiltInAccessor$2 = defineBuiltInAccessor$8;
  var defineBuiltIns = defineBuiltIns$2;
  var bind$1 = functionBindContext;
  var anInstance = anInstance$5;
  var isNullOrUndefined$1 = isNullOrUndefined$7;
  var iterate = iterate$5;
  var defineIterator = iteratorDefine;
  var createIterResultObject = createIterResultObject$3;
  var setSpecies = setSpecies$3;
  var DESCRIPTORS$2 = descriptors;
  var fastKey = internalMetadataExports.fastKey;
  var InternalStateModule$1 = internalState;

  var setInternalState$1 = InternalStateModule$1.set;
  var internalStateGetterFor = InternalStateModule$1.getterFor;

  var collectionStrong$1 = {
    getConstructor: function (wrapper, CONSTRUCTOR_NAME, IS_MAP, ADDER) {
      var Constructor = wrapper(function (that, iterable) {
        anInstance(that, Prototype);
        setInternalState$1(that, {
          type: CONSTRUCTOR_NAME,
          index: create$1(null),
          first: undefined,
          last: undefined,
          size: 0
        });
        if (!DESCRIPTORS$2) that.size = 0;
        if (!isNullOrUndefined$1(iterable)) iterate(iterable, that[ADDER], { that: that, AS_ENTRIES: IS_MAP });
      });

      var Prototype = Constructor.prototype;

      var getInternalState = internalStateGetterFor(CONSTRUCTOR_NAME);

      var define = function (that, key, value) {
        var state = getInternalState(that);
        var entry = getEntry(that, key);
        var previous, index;
        // change existing entry
        if (entry) {
          entry.value = value;
        // create new entry
        } else {
          state.last = entry = {
            index: index = fastKey(key, true),
            key: key,
            value: value,
            previous: previous = state.last,
            next: undefined,
            removed: false
          };
          if (!state.first) state.first = entry;
          if (previous) previous.next = entry;
          if (DESCRIPTORS$2) state.size++;
          else that.size++;
          // add to index
          if (index !== 'F') state.index[index] = entry;
        } return that;
      };

      var getEntry = function (that, key) {
        var state = getInternalState(that);
        // fast case
        var index = fastKey(key);
        var entry;
        if (index !== 'F') return state.index[index];
        // frozen object case
        for (entry = state.first; entry; entry = entry.next) {
          if (entry.key == key) return entry;
        }
      };

      defineBuiltIns(Prototype, {
        // `{ Map, Set }.prototype.clear()` methods
        // https://tc39.es/ecma262/#sec-map.prototype.clear
        // https://tc39.es/ecma262/#sec-set.prototype.clear
        clear: function clear() {
          var that = this;
          var state = getInternalState(that);
          var data = state.index;
          var entry = state.first;
          while (entry) {
            entry.removed = true;
            if (entry.previous) entry.previous = entry.previous.next = undefined;
            delete data[entry.index];
            entry = entry.next;
          }
          state.first = state.last = undefined;
          if (DESCRIPTORS$2) state.size = 0;
          else that.size = 0;
        },
        // `{ Map, Set }.prototype.delete(key)` methods
        // https://tc39.es/ecma262/#sec-map.prototype.delete
        // https://tc39.es/ecma262/#sec-set.prototype.delete
        'delete': function (key) {
          var that = this;
          var state = getInternalState(that);
          var entry = getEntry(that, key);
          if (entry) {
            var next = entry.next;
            var prev = entry.previous;
            delete state.index[entry.index];
            entry.removed = true;
            if (prev) prev.next = next;
            if (next) next.previous = prev;
            if (state.first == entry) state.first = next;
            if (state.last == entry) state.last = prev;
            if (DESCRIPTORS$2) state.size--;
            else that.size--;
          } return !!entry;
        },
        // `{ Map, Set }.prototype.forEach(callbackfn, thisArg = undefined)` methods
        // https://tc39.es/ecma262/#sec-map.prototype.foreach
        // https://tc39.es/ecma262/#sec-set.prototype.foreach
        forEach: function forEach(callbackfn /* , that = undefined */) {
          var state = getInternalState(this);
          var boundFunction = bind$1(callbackfn, arguments.length > 1 ? arguments[1] : undefined);
          var entry;
          while (entry = entry ? entry.next : state.first) {
            boundFunction(entry.value, entry.key, this);
            // revert to the last existing entry
            while (entry && entry.removed) entry = entry.previous;
          }
        },
        // `{ Map, Set}.prototype.has(key)` methods
        // https://tc39.es/ecma262/#sec-map.prototype.has
        // https://tc39.es/ecma262/#sec-set.prototype.has
        has: function has(key) {
          return !!getEntry(this, key);
        }
      });

      defineBuiltIns(Prototype, IS_MAP ? {
        // `Map.prototype.get(key)` method
        // https://tc39.es/ecma262/#sec-map.prototype.get
        get: function get(key) {
          var entry = getEntry(this, key);
          return entry && entry.value;
        },
        // `Map.prototype.set(key, value)` method
        // https://tc39.es/ecma262/#sec-map.prototype.set
        set: function set(key, value) {
          return define(this, key === 0 ? 0 : key, value);
        }
      } : {
        // `Set.prototype.add(value)` method
        // https://tc39.es/ecma262/#sec-set.prototype.add
        add: function add(value) {
          return define(this, value = value === 0 ? 0 : value, value);
        }
      });
      if (DESCRIPTORS$2) defineBuiltInAccessor$2(Prototype, 'size', {
        configurable: true,
        get: function () {
          return getInternalState(this).size;
        }
      });
      return Constructor;
    },
    setStrong: function (Constructor, CONSTRUCTOR_NAME, IS_MAP) {
      var ITERATOR_NAME = CONSTRUCTOR_NAME + ' Iterator';
      var getInternalCollectionState = internalStateGetterFor(CONSTRUCTOR_NAME);
      var getInternalIteratorState = internalStateGetterFor(ITERATOR_NAME);
      // `{ Map, Set }.prototype.{ keys, values, entries, @@iterator }()` methods
      // https://tc39.es/ecma262/#sec-map.prototype.entries
      // https://tc39.es/ecma262/#sec-map.prototype.keys
      // https://tc39.es/ecma262/#sec-map.prototype.values
      // https://tc39.es/ecma262/#sec-map.prototype-@@iterator
      // https://tc39.es/ecma262/#sec-set.prototype.entries
      // https://tc39.es/ecma262/#sec-set.prototype.keys
      // https://tc39.es/ecma262/#sec-set.prototype.values
      // https://tc39.es/ecma262/#sec-set.prototype-@@iterator
      defineIterator(Constructor, CONSTRUCTOR_NAME, function (iterated, kind) {
        setInternalState$1(this, {
          type: ITERATOR_NAME,
          target: iterated,
          state: getInternalCollectionState(iterated),
          kind: kind,
          last: undefined
        });
      }, function () {
        var state = getInternalIteratorState(this);
        var kind = state.kind;
        var entry = state.last;
        // revert to the last existing entry
        while (entry && entry.removed) entry = entry.previous;
        // get next entry
        if (!state.target || !(state.last = entry = entry ? entry.next : state.state.first)) {
          // or finish the iteration
          state.target = undefined;
          return createIterResultObject(undefined, true);
        }
        // return step by kind
        if (kind == 'keys') return createIterResultObject(entry.key, false);
        if (kind == 'values') return createIterResultObject(entry.value, false);
        return createIterResultObject([entry.key, entry.value], false);
      }, IS_MAP ? 'entries' : 'values', !IS_MAP, true);

      // `{ Map, Set }.prototype[@@species]` accessors
      // https://tc39.es/ecma262/#sec-get-map-@@species
      // https://tc39.es/ecma262/#sec-get-set-@@species
      setSpecies(CONSTRUCTOR_NAME);
    }
  };

  var collection = collection$1;
  var collectionStrong = collectionStrong$1;

  // `Set` constructor
  // https://tc39.es/ecma262/#sec-set-objects
  collection('Set', function (init) {
    return function Set() { return init(this, arguments.length ? arguments[0] : undefined); };
  }, collectionStrong);

  var DataParser = function () {
    function DataParser() {}
    DataParser.getDateTimeStr = function (value) {
      return value ? '' + value.getTime() : undefined;
    };
    return DataParser;
  }();

  var GroupMemberRole;
  (function (GroupMemberRole) {
    GroupMemberRole[GroupMemberRole["OWNER"] = 0] = "OWNER";
    GroupMemberRole[GroupMemberRole["MANAGER"] = 1] = "MANAGER";
    GroupMemberRole[GroupMemberRole["MEMBER"] = 2] = "MEMBER";
    GroupMemberRole[GroupMemberRole["GUEST"] = 3] = "GUEST";
    GroupMemberRole[GroupMemberRole["ANONYMOUS_GUEST"] = 4] = "ANONYMOUS_GUEST";
    GroupMemberRole[GroupMemberRole["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
  })(GroupMemberRole || (GroupMemberRole = {}));

  var anObject$3 = anObject$g;
  var iteratorClose = iteratorClose$2;

  // call something on iterator step with safe closing on error
  var callWithSafeIterationClosing$1 = function (iterator, fn, value, ENTRIES) {
    try {
      return ENTRIES ? fn(anObject$3(value)[0], value[1]) : fn(value);
    } catch (error) {
      iteratorClose(iterator, 'throw', error);
    }
  };

  var bind = functionBindContext;
  var call$6 = functionCall;
  var toObject$2 = toObject$d;
  var callWithSafeIterationClosing = callWithSafeIterationClosing$1;
  var isArrayIteratorMethod = isArrayIteratorMethod$3;
  var isConstructor = isConstructor$3;
  var lengthOfArrayLike = lengthOfArrayLike$d;
  var createProperty = createProperty$3;
  var getIterator = getIterator$3;
  var getIteratorMethod = getIteratorMethod$4;

  var $Array = Array;

  // `Array.from` method implementation
  // https://tc39.es/ecma262/#sec-array.from
  var arrayFrom = function from(arrayLike /* , mapfn = undefined, thisArg = undefined */) {
    var O = toObject$2(arrayLike);
    var IS_CONSTRUCTOR = isConstructor(this);
    var argumentsLength = arguments.length;
    var mapfn = argumentsLength > 1 ? arguments[1] : undefined;
    var mapping = mapfn !== undefined;
    if (mapping) mapfn = bind(mapfn, argumentsLength > 2 ? arguments[2] : undefined);
    var iteratorMethod = getIteratorMethod(O);
    var index = 0;
    var length, result, step, iterator, next, value;
    // if the target is not iterable or it's an array with the default iterator - use a simple case
    if (iteratorMethod && !(this === $Array && isArrayIteratorMethod(iteratorMethod))) {
      iterator = getIterator(O, iteratorMethod);
      next = iterator.next;
      result = IS_CONSTRUCTOR ? new this() : [];
      for (;!(step = call$6(next, iterator)).done; index++) {
        value = mapping ? callWithSafeIterationClosing(iterator, mapfn, [step.value, index], true) : step.value;
        createProperty(result, index, value);
      }
    } else {
      length = lengthOfArrayLike(O);
      result = IS_CONSTRUCTOR ? new this(length) : $Array(length);
      for (;length > index; index++) {
        value = mapping ? mapfn(O[index], index) : O[index];
        createProperty(result, index, value);
      }
    }
    result.length = index;
    return result;
  };

  var $$9 = _export;
  var from = arrayFrom;
  var checkCorrectnessOfIteration = checkCorrectnessOfIteration$4;

  var INCORRECT_ITERATION = !checkCorrectnessOfIteration(function (iterable) {
    // eslint-disable-next-line es/no-array-from -- required for testing
    Array.from(iterable);
  });

  // `Array.from` method
  // https://tc39.es/ecma262/#sec-array.from
  $$9({ target: 'Array', stat: true, forced: INCORRECT_ITERATION }, {
    from: from
  });

  var CollectionUtil = function () {
    function CollectionUtil() {}
    CollectionUtil.uniqueArray = function (array) {
      return Array.from(new Set(array));
    };
    return CollectionUtil;
  }();

  var GroupService = function () {
    function GroupService(turmsClient) {
      this._turmsClient = turmsClient;
    }
    GroupService.prototype.createGroup = function (_a) {
      var name = _a.name,
        intro = _a.intro,
        announcement = _a.announcement,
        minScore = _a.minScore,
        muteEndDate = _a.muteEndDate,
        typeId = _a.typeId;
      if (Validator.isFalsy(name)) {
        return ResponseError.notFalsyPromise('name');
      }
      return this._turmsClient.driver.send({
        createGroupRequest: {
          name: name,
          intro: intro,
          announcement: announcement,
          minScore: minScore,
          muteEndDate: DataParser.getDateTimeStr(muteEndDate),
          typeId: typeId
        }
      }).then(function (n) {
        return Response.fromNotification(n, function (data) {
          return NotificationUtil.getLongOrThrow(data);
        });
      });
    };
    GroupService.prototype.deleteGroup = function (_a) {
      var groupId = _a.groupId;
      if (Validator.isFalsy(groupId)) {
        return ResponseError.notFalsyPromise('groupId');
      }
      return this._turmsClient.driver.send({
        deleteGroupRequest: {
          groupId: groupId
        }
      }).then(function (n) {
        return Response.fromNotification(n);
      });
    };
    GroupService.prototype.updateGroup = function (_a) {
      var groupId = _a.groupId,
        name = _a.name,
        intro = _a.intro,
        announcement = _a.announcement,
        minScore = _a.minScore,
        typeId = _a.typeId,
        muteEndDate = _a.muteEndDate,
        successorId = _a.successorId,
        quitAfterTransfer = _a.quitAfterTransfer;
      if (Validator.isFalsy(groupId)) {
        return ResponseError.notFalsyPromise('groupId');
      }
      if (Validator.areAllFalsy(name, intro, announcement, minScore, typeId, muteEndDate, successorId)) {
        return Promise.resolve(Response.nullValue());
      }
      return this._turmsClient.driver.send({
        updateGroupRequest: {
          groupId: groupId,
          name: name,
          intro: intro,
          announcement: announcement,
          muteEndDate: DataParser.getDateTimeStr(muteEndDate),
          minScore: minScore,
          typeId: typeId,
          successorId: successorId,
          quitAfterTransfer: quitAfterTransfer
        }
      }).then(function (n) {
        return Response.fromNotification(n);
      });
    };
    GroupService.prototype.transferOwnership = function (_a) {
      var groupId = _a.groupId,
        successorId = _a.successorId,
        _b = _a.quitAfterTransfer,
        quitAfterTransfer = _b === void 0 ? false : _b;
      if (Validator.isFalsy(groupId)) {
        return ResponseError.notFalsyPromise('groupId');
      }
      if (Validator.isFalsy(successorId)) {
        return ResponseError.notFalsyPromise('successorId');
      }
      return this.updateGroup({
        groupId: groupId,
        successorId: successorId,
        quitAfterTransfer: quitAfterTransfer
      });
    };
    GroupService.prototype.muteGroup = function (_a) {
      var groupId = _a.groupId,
        muteEndDate = _a.muteEndDate;
      if (Validator.isFalsy(groupId)) {
        return ResponseError.notFalsyPromise('groupId');
      }
      if (Validator.isFalsy(muteEndDate)) {
        return ResponseError.notFalsyPromise('muteEndDate');
      }
      return this.updateGroup({
        groupId: groupId,
        muteEndDate: muteEndDate
      });
    };
    GroupService.prototype.unmuteGroup = function (_a) {
      var groupId = _a.groupId;
      return this.muteGroup({
        groupId: groupId,
        muteEndDate: new Date(0)
      });
    };
    GroupService.prototype.queryGroups = function (_a) {
      var groupIds = _a.groupIds,
        lastUpdatedDate = _a.lastUpdatedDate;
      if (Validator.isFalsy(groupIds)) {
        return Promise.resolve(Response.emptyList());
      }
      return this._turmsClient.driver.send({
        queryGroupsRequest: {
          groupIds: CollectionUtil.uniqueArray(groupIds),
          lastUpdatedDate: DataParser.getDateTimeStr(lastUpdatedDate)
        }
      }).then(function (n) {
        return Response.fromNotification(n, function (data) {
          var _a;
          return NotificationUtil.transform((_a = data.groupsWithVersion) === null || _a === void 0 ? void 0 : _a.groups);
        });
      });
    };
    GroupService.prototype.queryJoinedGroupIds = function (_a) {
      var _b = _a === void 0 ? {} : _a,
        lastUpdatedDate = _b.lastUpdatedDate;
      return this._turmsClient.driver.send({
        queryJoinedGroupIdsRequest: {
          lastUpdatedDate: DataParser.getDateTimeStr(lastUpdatedDate)
        }
      }).then(function (n) {
        return Response.fromNotification(n, function (data) {
          return NotificationUtil.getLongsWithVersion(data);
        });
      });
    };
    GroupService.prototype.queryJoinedGroupInfos = function (_a) {
      var _b = _a === void 0 ? {} : _a,
        lastUpdatedDate = _b.lastUpdatedDate;
      return this._turmsClient.driver.send({
        queryJoinedGroupInfosRequest: {
          lastUpdatedDate: DataParser.getDateTimeStr(lastUpdatedDate)
        }
      }).then(function (n) {
        return Response.fromNotification(n, function (data) {
          return NotificationUtil.transform(data.groupsWithVersion);
        });
      });
    };
    GroupService.prototype.addGroupJoinQuestions = function (_a) {
      var groupId = _a.groupId,
        questions = _a.questions;
      if (Validator.isFalsy(groupId)) {
        return ResponseError.notFalsyPromise('groupId');
      }
      if (Validator.isFalsy(questions)) {
        return Promise.resolve(Response.emptyList());
      }
      var newQuestions;
      try {
        newQuestions = questions.map(function (q) {
          var question = q.question;
          var answers = q.answers;
          var score = q.score;
          if (Validator.isFalsy(question)) {
            ResponseError.notFalsy('question');
          }
          if (Validator.isFalsy(answers)) {
            ResponseError.notFalsy('answers', true);
          }
          if (Validator.isFalsy(score)) {
            ResponseError.notFalsy('score');
          }
          return {
            question: question,
            answers: new Set(answers),
            score: score
          };
        });
      } catch (e) {
        return Promise.reject(e);
      }
      return this._turmsClient.driver.send({
        createGroupJoinQuestionsRequest: {
          groupId: groupId,
          questions: newQuestions
        }
      }).then(function (n) {
        return Response.fromNotification(n, function (data) {
          var _a;
          return ((_a = data.longsWithVersion) === null || _a === void 0 ? void 0 : _a.longs) || [];
        });
      });
    };
    GroupService.prototype.deleteGroupJoinQuestions = function (_a) {
      var groupId = _a.groupId,
        questionIds = _a.questionIds;
      if (Validator.isFalsy(questionIds)) {
        return Promise.resolve(Response.nullValue());
      }
      return this._turmsClient.driver.send({
        deleteGroupJoinQuestionsRequest: {
          groupId: groupId,
          questionIds: questionIds
        }
      }).then(function (n) {
        return Response.fromNotification(n);
      });
    };
    GroupService.prototype.updateGroupJoinQuestion = function (_a) {
      var questionId = _a.questionId,
        question = _a.question,
        answers = _a.answers,
        score = _a.score;
      if (Validator.isFalsy(questionId)) {
        return ResponseError.notFalsyPromise('questionId');
      }
      if (Validator.areAllFalsy(question, answers, score)) {
        return Promise.resolve(Response.nullValue());
      }
      return this._turmsClient.driver.send({
        updateGroupJoinQuestionRequest: {
          questionId: questionId,
          question: question,
          answers: answers || [],
          score: score
        }
      }).then(function (n) {
        return Response.fromNotification(n);
      });
    };
    GroupService.prototype.blockUser = function (_a) {
      var groupId = _a.groupId,
        userId = _a.userId;
      if (Validator.isFalsy(groupId)) {
        return ResponseError.notFalsyPromise('groupId');
      }
      if (Validator.isFalsy(userId)) {
        return ResponseError.notFalsyPromise('userId');
      }
      return this._turmsClient.driver.send({
        createGroupBlockedUserRequest: {
          userId: userId,
          groupId: groupId
        }
      }).then(function (n) {
        return Response.fromNotification(n);
      });
    };
    GroupService.prototype.unblockUser = function (_a) {
      var groupId = _a.groupId,
        userId = _a.userId;
      if (Validator.isFalsy(groupId)) {
        return ResponseError.notFalsyPromise('groupId');
      }
      if (Validator.isFalsy(userId)) {
        return ResponseError.notFalsyPromise('userId');
      }
      return this._turmsClient.driver.send({
        deleteGroupBlockedUserRequest: {
          groupId: groupId,
          userId: userId
        }
      }).then(function (n) {
        return Response.fromNotification(n);
      });
    };
    GroupService.prototype.queryBlockedUserIds = function (_a) {
      var groupId = _a.groupId,
        lastUpdatedDate = _a.lastUpdatedDate;
      if (Validator.isFalsy(groupId)) {
        return ResponseError.notFalsyPromise('groupId');
      }
      return this._turmsClient.driver.send({
        queryGroupBlockedUserIdsRequest: {
          groupId: groupId,
          lastUpdatedDate: DataParser.getDateTimeStr(lastUpdatedDate)
        }
      }).then(function (n) {
        return Response.fromNotification(n, function (data) {
          return NotificationUtil.getLongsWithVersion(data);
        });
      });
    };
    GroupService.prototype.queryBlockedUserInfos = function (_a) {
      var groupId = _a.groupId,
        lastUpdatedDate = _a.lastUpdatedDate;
      if (Validator.isFalsy(groupId)) {
        return ResponseError.notFalsyPromise('groupId');
      }
      return this._turmsClient.driver.send({
        queryGroupBlockedUserInfosRequest: {
          groupId: groupId,
          lastUpdatedDate: DataParser.getDateTimeStr(lastUpdatedDate)
        }
      }).then(function (n) {
        return Response.fromNotification(n, function (data) {
          return NotificationUtil.transform(data.userInfosWithVersion);
        });
      });
    };
    GroupService.prototype.createInvitation = function (_a) {
      var groupId = _a.groupId,
        inviteeId = _a.inviteeId,
        content = _a.content;
      if (Validator.isFalsy(groupId)) {
        return ResponseError.notFalsyPromise('groupId');
      }
      if (Validator.isFalsy(inviteeId)) {
        return ResponseError.notFalsyPromise('inviteeId');
      }
      if (Validator.isFalsy(content)) {
        return ResponseError.notFalsyPromise('content');
      }
      return this._turmsClient.driver.send({
        createGroupInvitationRequest: {
          groupId: groupId,
          inviteeId: inviteeId,
          content: content
        }
      }).then(function (n) {
        return Response.fromNotification(n, function (data) {
          return NotificationUtil.getLongOrThrow(data);
        });
      });
    };
    GroupService.prototype.deleteInvitation = function (_a) {
      var invitationId = _a.invitationId;
      if (Validator.isFalsy(invitationId)) {
        return ResponseError.notFalsyPromise('invitationId');
      }
      return this._turmsClient.driver.send({
        deleteGroupInvitationRequest: {
          invitationId: invitationId
        }
      }).then(function (n) {
        return Response.fromNotification(n);
      });
    };
    GroupService.prototype.queryInvitationsByGroupId = function (_a) {
      var groupId = _a.groupId,
        lastUpdatedDate = _a.lastUpdatedDate;
      if (Validator.isFalsy(groupId)) {
        return ResponseError.notFalsyPromise('groupId');
      }
      return this._turmsClient.driver.send({
        queryGroupInvitationsRequest: {
          groupId: groupId,
          lastUpdatedDate: DataParser.getDateTimeStr(lastUpdatedDate)
        }
      }).then(function (n) {
        return Response.fromNotification(n, function (data) {
          return NotificationUtil.transform(data.groupInvitationsWithVersion);
        });
      });
    };
    GroupService.prototype.queryInvitations = function (_a) {
      var areSentByMe = _a.areSentByMe,
        lastUpdatedDate = _a.lastUpdatedDate;
      if (Validator.isFalsy(areSentByMe)) {
        return ResponseError.notFalsyPromise('areSentByMe');
      }
      return this._turmsClient.driver.send({
        queryGroupInvitationsRequest: {
          areSentByMe: areSentByMe,
          lastUpdatedDate: DataParser.getDateTimeStr(lastUpdatedDate)
        }
      }).then(function (n) {
        return Response.fromNotification(n, function (data) {
          return NotificationUtil.transform(data.groupInvitationsWithVersion);
        });
      });
    };
    GroupService.prototype.createJoinRequest = function (_a) {
      var groupId = _a.groupId,
        content = _a.content;
      if (Validator.isFalsy(groupId)) {
        return ResponseError.notFalsyPromise('groupId');
      }
      if (Validator.isFalsy(content)) {
        return ResponseError.notFalsyPromise('content');
      }
      return this._turmsClient.driver.send({
        createGroupJoinRequestRequest: {
          groupId: groupId,
          content: content
        }
      }).then(function (n) {
        return Response.fromNotification(n, function (data) {
          return NotificationUtil.getLongOrThrow(data);
        });
      });
    };
    GroupService.prototype.deleteJoinRequest = function (_a) {
      var requestId = _a.requestId;
      if (Validator.isFalsy(requestId)) {
        return ResponseError.notFalsyPromise('requestId');
      }
      return this._turmsClient.driver.send({
        deleteGroupJoinRequestRequest: {
          requestId: requestId
        }
      }).then(function (n) {
        return Response.fromNotification(n);
      });
    };
    GroupService.prototype.queryJoinRequests = function (_a) {
      var groupId = _a.groupId,
        lastUpdatedDate = _a.lastUpdatedDate;
      if (Validator.isFalsy(groupId)) {
        return ResponseError.notFalsyPromise('groupId');
      }
      return this._turmsClient.driver.send({
        queryGroupJoinRequestsRequest: {
          groupId: groupId,
          lastUpdatedDate: DataParser.getDateTimeStr(lastUpdatedDate)
        }
      }).then(function (n) {
        return Response.fromNotification(n, function (data) {
          return NotificationUtil.transform(data.groupJoinRequestsWithVersion);
        });
      });
    };
    GroupService.prototype.querySentJoinRequests = function (_a) {
      var _b = _a === void 0 ? {} : _a,
        lastUpdatedDate = _b.lastUpdatedDate;
      return this._turmsClient.driver.send({
        queryGroupJoinRequestsRequest: {
          lastUpdatedDate: DataParser.getDateTimeStr(lastUpdatedDate)
        }
      }).then(function (n) {
        return Response.fromNotification(n, function (data) {
          return NotificationUtil.transform(data.groupJoinRequestsWithVersion);
        });
      });
    };
    GroupService.prototype.queryGroupJoinQuestions = function (_a) {
      var groupId = _a.groupId,
        _b = _a.withAnswers,
        withAnswers = _b === void 0 ? false : _b,
        lastUpdatedDate = _a.lastUpdatedDate;
      if (Validator.isFalsy(groupId)) {
        return ResponseError.notFalsyPromise('groupId');
      }
      return this._turmsClient.driver.send({
        queryGroupJoinQuestionsRequest: {
          groupId: groupId,
          withAnswers: withAnswers,
          lastUpdatedDate: DataParser.getDateTimeStr(lastUpdatedDate)
        }
      }).then(function (n) {
        return Response.fromNotification(n, function (data) {
          return NotificationUtil.transform(data.groupJoinQuestionsWithVersion);
        });
      });
    };
    GroupService.prototype.answerGroupQuestions = function (_a) {
      var questionIdToAnswer = _a.questionIdToAnswer;
      if (Validator.isFalsy(questionIdToAnswer)) {
        return ResponseError.notFalsyPromise('questionIdToAnswer', true);
      }
      return this._turmsClient.driver.send({
        checkGroupJoinQuestionsAnswersRequest: {
          questionIdToAnswer: questionIdToAnswer
        }
      }).then(function (n) {
        return Response.fromNotification(n, function (data) {
          var result = NotificationUtil.transform(data.groupJoinQuestionAnswerResult);
          if (result) {
            return result;
          } else {
            throw ResponseError.from({
              code: ResponseStatusCode$1.INVALID_RESPONSE
            });
          }
        });
      });
    };
    GroupService.prototype.addGroupMembers = function (_a) {
      var groupId = _a.groupId,
        userIds = _a.userIds,
        name = _a.name,
        role = _a.role,
        muteEndDate = _a.muteEndDate;
      if (Validator.isFalsy(groupId)) {
        return ResponseError.notFalsyPromise('groupId');
      }
      if (typeof role === 'string') {
        role = GroupMemberRole[role];
        if (Validator.isFalsy(role)) {
          return ResponseError.notFalsyPromise('role');
        }
      }
      if (Validator.isFalsy(userIds)) {
        return Promise.resolve(Response.nullValue());
      }
      return this._turmsClient.driver.send({
        createGroupMembersRequest: {
          groupId: groupId,
          userIds: userIds,
          name: name,
          role: role,
          muteEndDate: DataParser.getDateTimeStr(muteEndDate)
        }
      }).then(function (n) {
        return Response.fromNotification(n);
      });
    };
    GroupService.prototype.joinGroup = function (_a) {
      var groupId = _a.groupId;
      if (Validator.isFalsy(groupId)) {
        return ResponseError.notFalsyPromise('groupId');
      }
      var userId = this._turmsClient.userService.userInfo.userId;
      if (userId == null) {
        return Promise.reject(ResponseError.from({
          code: ResponseStatusCode$1.CLIENT_SESSION_HAS_BEEN_CLOSED
        }));
      }
      return this.addGroupMembers({
        groupId: groupId,
        userIds: [userId]
      });
    };
    GroupService.prototype.quitGroup = function (_a) {
      var groupId = _a.groupId,
        successorId = _a.successorId,
        quitAfterTransfer = _a.quitAfterTransfer;
      if (Validator.isFalsy(groupId)) {
        return ResponseError.notFalsyPromise('groupId');
      }
      var userId = this._turmsClient.userService.userInfo.userId;
      if (userId == null) {
        return Promise.reject(ResponseError.from({
          code: ResponseStatusCode$1.CLIENT_SESSION_HAS_BEEN_CLOSED
        }));
      }
      return this._turmsClient.driver.send({
        deleteGroupMembersRequest: {
          groupId: groupId,
          memberIds: [userId],
          successorId: successorId,
          quitAfterTransfer: quitAfterTransfer
        }
      }).then(function (n) {
        return Response.fromNotification(n);
      });
    };
    GroupService.prototype.removeGroupMembers = function (_a) {
      var groupId = _a.groupId,
        memberIds = _a.memberIds;
      if (Validator.isFalsy(groupId)) {
        return ResponseError.notFalsyPromise('groupId');
      }
      if (Validator.isFalsy(memberIds)) {
        return Promise.resolve(Response.nullValue());
      }
      return this._turmsClient.driver.send({
        deleteGroupMembersRequest: {
          groupId: groupId,
          memberIds: memberIds
        }
      }).then(function (n) {
        return Response.fromNotification(n);
      });
    };
    GroupService.prototype.updateGroupMemberInfo = function (_a) {
      var groupId = _a.groupId,
        memberId = _a.memberId,
        name = _a.name,
        role = _a.role,
        muteEndDate = _a.muteEndDate;
      if (Validator.isFalsy(groupId)) {
        return ResponseError.notFalsyPromise('groupId');
      }
      if (Validator.isFalsy(memberId)) {
        return ResponseError.notFalsyPromise('memberId');
      }
      if (Validator.areAllFalsy(name, role, muteEndDate)) {
        return Promise.resolve(Response.nullValue());
      }
      if (typeof role === 'string') {
        role = GroupMemberRole[role];
        if (Validator.isFalsy(role)) {
          return ResponseError.notFalsyPromise('role');
        }
      }
      return this._turmsClient.driver.send({
        updateGroupMemberRequest: {
          groupId: groupId,
          memberId: memberId,
          name: name,
          role: role,
          muteEndDate: DataParser.getDateTimeStr(muteEndDate)
        }
      }).then(function (n) {
        return Response.fromNotification(n);
      });
    };
    GroupService.prototype.muteGroupMember = function (_a) {
      var groupId = _a.groupId,
        memberId = _a.memberId,
        muteEndDate = _a.muteEndDate;
      if (Validator.isFalsy(groupId)) {
        return ResponseError.notFalsyPromise('groupId');
      }
      if (Validator.isFalsy(memberId)) {
        return ResponseError.notFalsyPromise('memberId');
      }
      if (Validator.isFalsy(muteEndDate)) {
        return ResponseError.notFalsyPromise('muteEndDate');
      }
      return this.updateGroupMemberInfo({
        groupId: groupId,
        memberId: memberId,
        muteEndDate: muteEndDate
      });
    };
    GroupService.prototype.unmuteGroupMember = function (_a) {
      var groupId = _a.groupId,
        memberId = _a.memberId;
      return this.muteGroupMember({
        groupId: groupId,
        memberId: memberId,
        muteEndDate: new Date(0)
      });
    };
    GroupService.prototype.queryGroupMembers = function (_a) {
      var groupId = _a.groupId,
        _b = _a.withStatus,
        withStatus = _b === void 0 ? false : _b,
        lastUpdatedDate = _a.lastUpdatedDate;
      if (Validator.isFalsy(groupId)) {
        return ResponseError.notFalsyPromise('groupId');
      }
      return this._turmsClient.driver.send({
        queryGroupMembersRequest: {
          groupId: groupId,
          lastUpdatedDate: DataParser.getDateTimeStr(lastUpdatedDate),
          withStatus: withStatus,
          memberIds: []
        }
      }).then(function (n) {
        return Response.fromNotification(n, function (data) {
          return NotificationUtil.transform(data.groupMembersWithVersion);
        });
      });
    };
    GroupService.prototype.queryGroupMembersByMemberIds = function (_a) {
      var groupId = _a.groupId,
        memberIds = _a.memberIds,
        _b = _a.withStatus,
        withStatus = _b === void 0 ? false : _b;
      if (Validator.isFalsy(groupId)) {
        return ResponseError.notFalsyPromise('groupId');
      }
      if (Validator.isFalsy(memberIds)) {
        return ResponseError.notFalsyPromise('memberIds', true);
      }
      return this._turmsClient.driver.send({
        queryGroupMembersRequest: {
          groupId: groupId,
          memberIds: memberIds,
          withStatus: withStatus
        }
      }).then(function (n) {
        return Response.fromNotification(n, function (data) {
          return NotificationUtil.transform(data.groupMembersWithVersion);
        });
      });
    };
    return GroupService;
  }();

  var fails$8 = fails$E;
  var global$6 = global$x;

  // babel-minify and Closure Compiler transpiles RegExp('a', 'y') -> /a/y and it causes SyntaxError
  var $RegExp$2 = global$6.RegExp;

  var UNSUPPORTED_Y$1 = fails$8(function () {
    var re = $RegExp$2('a', 'y');
    re.lastIndex = 2;
    return re.exec('abcd') != null;
  });

  // UC Browser bug
  // https://github.com/zloirock/core-js/issues/1008
  var MISSED_STICKY = UNSUPPORTED_Y$1 || fails$8(function () {
    return !$RegExp$2('a', 'y').sticky;
  });

  var BROKEN_CARET = UNSUPPORTED_Y$1 || fails$8(function () {
    // https://bugzilla.mozilla.org/show_bug.cgi?id=773687
    var re = $RegExp$2('^r', 'gy');
    re.lastIndex = 2;
    return re.exec('str') != null;
  });

  var regexpStickyHelpers = {
    BROKEN_CARET: BROKEN_CARET,
    MISSED_STICKY: MISSED_STICKY,
    UNSUPPORTED_Y: UNSUPPORTED_Y$1
  };

  var fails$7 = fails$E;
  var global$5 = global$x;

  // babel-minify and Closure Compiler transpiles RegExp('.', 's') -> /./s and it causes SyntaxError
  var $RegExp$1 = global$5.RegExp;

  var regexpUnsupportedDotAll = fails$7(function () {
    var re = $RegExp$1('.', 's');
    return !(re.dotAll && re.exec('\n') && re.flags === 's');
  });

  var fails$6 = fails$E;
  var global$4 = global$x;

  // babel-minify and Closure Compiler transpiles RegExp('(?<a>b)', 'g') -> /(?<a>b)/g and it causes SyntaxError
  var $RegExp = global$4.RegExp;

  var regexpUnsupportedNcg = fails$6(function () {
    var re = $RegExp('(?<a>b)', 'g');
    return re.exec('b').groups.a !== 'b' ||
      'b'.replace(re, '$<a>c') !== 'bc';
  });

  /* eslint-disable regexp/no-empty-capturing-group, regexp/no-empty-group, regexp/no-lazy-ends -- testing */
  /* eslint-disable regexp/no-useless-quantifier -- testing */
  var call$5 = functionCall;
  var uncurryThis$8 = functionUncurryThis;
  var toString$5 = toString$9;
  var regexpFlags = regexpFlags$1;
  var stickyHelpers = regexpStickyHelpers;
  var shared$3 = sharedExports;
  var create = objectCreate;
  var getInternalState$1 = internalState.get;
  var UNSUPPORTED_DOT_ALL = regexpUnsupportedDotAll;
  var UNSUPPORTED_NCG = regexpUnsupportedNcg;

  var nativeReplace = shared$3('native-string-replace', String.prototype.replace);
  var nativeExec = RegExp.prototype.exec;
  var patchedExec = nativeExec;
  var charAt$3 = uncurryThis$8(''.charAt);
  var indexOf = uncurryThis$8(''.indexOf);
  var replace$3 = uncurryThis$8(''.replace);
  var stringSlice$4 = uncurryThis$8(''.slice);

  var UPDATES_LAST_INDEX_WRONG = (function () {
    var re1 = /a/;
    var re2 = /b*/g;
    call$5(nativeExec, re1, 'a');
    call$5(nativeExec, re2, 'a');
    return re1.lastIndex !== 0 || re2.lastIndex !== 0;
  })();

  var UNSUPPORTED_Y = stickyHelpers.BROKEN_CARET;

  // nonparticipating capturing group, copied from es5-shim's String#split patch.
  var NPCG_INCLUDED = /()??/.exec('')[1] !== undefined;

  var PATCH = UPDATES_LAST_INDEX_WRONG || NPCG_INCLUDED || UNSUPPORTED_Y || UNSUPPORTED_DOT_ALL || UNSUPPORTED_NCG;

  if (PATCH) {
    patchedExec = function exec(string) {
      var re = this;
      var state = getInternalState$1(re);
      var str = toString$5(string);
      var raw = state.raw;
      var result, reCopy, lastIndex, match, i, object, group;

      if (raw) {
        raw.lastIndex = re.lastIndex;
        result = call$5(patchedExec, raw, str);
        re.lastIndex = raw.lastIndex;
        return result;
      }

      var groups = state.groups;
      var sticky = UNSUPPORTED_Y && re.sticky;
      var flags = call$5(regexpFlags, re);
      var source = re.source;
      var charsAdded = 0;
      var strCopy = str;

      if (sticky) {
        flags = replace$3(flags, 'y', '');
        if (indexOf(flags, 'g') === -1) {
          flags += 'g';
        }

        strCopy = stringSlice$4(str, re.lastIndex);
        // Support anchored sticky behavior.
        if (re.lastIndex > 0 && (!re.multiline || re.multiline && charAt$3(str, re.lastIndex - 1) !== '\n')) {
          source = '(?: ' + source + ')';
          strCopy = ' ' + strCopy;
          charsAdded++;
        }
        // ^(? + rx + ) is needed, in combination with some str slicing, to
        // simulate the 'y' flag.
        reCopy = new RegExp('^(?:' + source + ')', flags);
      }

      if (NPCG_INCLUDED) {
        reCopy = new RegExp('^' + source + '$(?!\\s)', flags);
      }
      if (UPDATES_LAST_INDEX_WRONG) lastIndex = re.lastIndex;

      match = call$5(nativeExec, sticky ? reCopy : re, strCopy);

      if (sticky) {
        if (match) {
          match.input = stringSlice$4(match.input, charsAdded);
          match[0] = stringSlice$4(match[0], charsAdded);
          match.index = re.lastIndex;
          re.lastIndex += match[0].length;
        } else re.lastIndex = 0;
      } else if (UPDATES_LAST_INDEX_WRONG && match) {
        re.lastIndex = re.global ? match.index + match[0].length : lastIndex;
      }
      if (NPCG_INCLUDED && match && match.length > 1) {
        // Fix browsers whose `exec` methods don't consistently return `undefined`
        // for NPCG, like IE8. NOTE: This doesn't work for /(.?)?/
        call$5(nativeReplace, match[0], reCopy, function () {
          for (i = 1; i < arguments.length - 2; i++) {
            if (arguments[i] === undefined) match[i] = undefined;
          }
        });
      }

      if (match && groups) {
        match.groups = object = create(null);
        for (i = 0; i < groups.length; i++) {
          group = groups[i];
          object[group[0]] = match[group[1]];
        }
      }

      return match;
    };
  }

  var regexpExec$2 = patchedExec;

  var $$8 = _export;
  var exec$1 = regexpExec$2;

  // `RegExp.prototype.exec` method
  // https://tc39.es/ecma262/#sec-regexp.prototype.exec
  $$8({ target: 'RegExp', proto: true, forced: /./.exec !== exec$1 }, {
    exec: exec$1
  });

  var wellKnownSymbolWrapped = {};

  var wellKnownSymbol$4 = wellKnownSymbol$q;

  wellKnownSymbolWrapped.f = wellKnownSymbol$4;

  var global$3 = global$x;

  var path$1 = global$3;

  var path = path$1;
  var hasOwn$4 = hasOwnProperty_1;
  var wrappedWellKnownSymbolModule$1 = wellKnownSymbolWrapped;
  var defineProperty = objectDefineProperty.f;

  var wellKnownSymbolDefine = function (NAME) {
    var Symbol = path.Symbol || (path.Symbol = {});
    if (!hasOwn$4(Symbol, NAME)) defineProperty(Symbol, NAME, {
      value: wrappedWellKnownSymbolModule$1.f(NAME)
    });
  };

  var call$4 = functionCall;
  var getBuiltIn$3 = getBuiltIn$b;
  var wellKnownSymbol$3 = wellKnownSymbol$q;
  var defineBuiltIn$3 = defineBuiltIn$e;

  var symbolDefineToPrimitive = function () {
    var Symbol = getBuiltIn$3('Symbol');
    var SymbolPrototype = Symbol && Symbol.prototype;
    var valueOf = SymbolPrototype && SymbolPrototype.valueOf;
    var TO_PRIMITIVE = wellKnownSymbol$3('toPrimitive');

    if (SymbolPrototype && !SymbolPrototype[TO_PRIMITIVE]) {
      // `Symbol.prototype[@@toPrimitive]` method
      // https://tc39.es/ecma262/#sec-symbol.prototype-@@toprimitive
      // eslint-disable-next-line no-unused-vars -- required for .length
      defineBuiltIn$3(SymbolPrototype, TO_PRIMITIVE, function (hint) {
        return call$4(valueOf, this);
      }, { arity: 1 });
    }
  };

  var $$7 = _export;
  var global$2 = global$x;
  var call$3 = functionCall;
  var uncurryThis$7 = functionUncurryThis;
  var DESCRIPTORS$1 = descriptors;
  var NATIVE_SYMBOL$4 = symbolConstructorDetection;
  var fails$5 = fails$E;
  var hasOwn$3 = hasOwnProperty_1;
  var isPrototypeOf$1 = objectIsPrototypeOf;
  var anObject$2 = anObject$g;
  var toIndexedObject = toIndexedObject$a;
  var toPropertyKey = toPropertyKey$5;
  var $toString = toString$9;
  var createPropertyDescriptor = createPropertyDescriptor$6;
  var nativeObjectCreate = objectCreate;
  var objectKeys = objectKeys$4;
  var getOwnPropertyNamesModule = objectGetOwnPropertyNames;
  var getOwnPropertyNamesExternal = objectGetOwnPropertyNamesExternal;
  var getOwnPropertySymbolsModule$1 = objectGetOwnPropertySymbols;
  var getOwnPropertyDescriptorModule = objectGetOwnPropertyDescriptor;
  var definePropertyModule = objectDefineProperty;
  var definePropertiesModule = objectDefineProperties;
  var propertyIsEnumerableModule = objectPropertyIsEnumerable;
  var defineBuiltIn$2 = defineBuiltIn$e;
  var defineBuiltInAccessor$1 = defineBuiltInAccessor$8;
  var shared$2 = sharedExports;
  var sharedKey = sharedKey$4;
  var hiddenKeys = hiddenKeys$6;
  var uid = uid$5;
  var wellKnownSymbol$2 = wellKnownSymbol$q;
  var wrappedWellKnownSymbolModule = wellKnownSymbolWrapped;
  var defineWellKnownSymbol = wellKnownSymbolDefine;
  var defineSymbolToPrimitive = symbolDefineToPrimitive;
  var setToStringTag = setToStringTag$6;
  var InternalStateModule = internalState;
  var $forEach = arrayIteration.forEach;

  var HIDDEN = sharedKey('hidden');
  var SYMBOL = 'Symbol';
  var PROTOTYPE = 'prototype';

  var setInternalState = InternalStateModule.set;
  var getInternalState = InternalStateModule.getterFor(SYMBOL);

  var ObjectPrototype = Object[PROTOTYPE];
  var $Symbol = global$2.Symbol;
  var SymbolPrototype$1 = $Symbol && $Symbol[PROTOTYPE];
  var TypeError$1 = global$2.TypeError;
  var QObject = global$2.QObject;
  var nativeGetOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
  var nativeDefineProperty = definePropertyModule.f;
  var nativeGetOwnPropertyNames = getOwnPropertyNamesExternal.f;
  var nativePropertyIsEnumerable = propertyIsEnumerableModule.f;
  var push$2 = uncurryThis$7([].push);

  var AllSymbols = shared$2('symbols');
  var ObjectPrototypeSymbols = shared$2('op-symbols');
  var WellKnownSymbolsStore = shared$2('wks');

  // Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
  var USE_SETTER = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

  // fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
  var setSymbolDescriptor = DESCRIPTORS$1 && fails$5(function () {
    return nativeObjectCreate(nativeDefineProperty({}, 'a', {
      get: function () { return nativeDefineProperty(this, 'a', { value: 7 }).a; }
    })).a != 7;
  }) ? function (O, P, Attributes) {
    var ObjectPrototypeDescriptor = nativeGetOwnPropertyDescriptor(ObjectPrototype, P);
    if (ObjectPrototypeDescriptor) delete ObjectPrototype[P];
    nativeDefineProperty(O, P, Attributes);
    if (ObjectPrototypeDescriptor && O !== ObjectPrototype) {
      nativeDefineProperty(ObjectPrototype, P, ObjectPrototypeDescriptor);
    }
  } : nativeDefineProperty;

  var wrap = function (tag, description) {
    var symbol = AllSymbols[tag] = nativeObjectCreate(SymbolPrototype$1);
    setInternalState(symbol, {
      type: SYMBOL,
      tag: tag,
      description: description
    });
    if (!DESCRIPTORS$1) symbol.description = description;
    return symbol;
  };

  var $defineProperty = function defineProperty(O, P, Attributes) {
    if (O === ObjectPrototype) $defineProperty(ObjectPrototypeSymbols, P, Attributes);
    anObject$2(O);
    var key = toPropertyKey(P);
    anObject$2(Attributes);
    if (hasOwn$3(AllSymbols, key)) {
      if (!Attributes.enumerable) {
        if (!hasOwn$3(O, HIDDEN)) nativeDefineProperty(O, HIDDEN, createPropertyDescriptor(1, {}));
        O[HIDDEN][key] = true;
      } else {
        if (hasOwn$3(O, HIDDEN) && O[HIDDEN][key]) O[HIDDEN][key] = false;
        Attributes = nativeObjectCreate(Attributes, { enumerable: createPropertyDescriptor(0, false) });
      } return setSymbolDescriptor(O, key, Attributes);
    } return nativeDefineProperty(O, key, Attributes);
  };

  var $defineProperties = function defineProperties(O, Properties) {
    anObject$2(O);
    var properties = toIndexedObject(Properties);
    var keys = objectKeys(properties).concat($getOwnPropertySymbols(properties));
    $forEach(keys, function (key) {
      if (!DESCRIPTORS$1 || call$3($propertyIsEnumerable, properties, key)) $defineProperty(O, key, properties[key]);
    });
    return O;
  };

  var $create = function create(O, Properties) {
    return Properties === undefined ? nativeObjectCreate(O) : $defineProperties(nativeObjectCreate(O), Properties);
  };

  var $propertyIsEnumerable = function propertyIsEnumerable(V) {
    var P = toPropertyKey(V);
    var enumerable = call$3(nativePropertyIsEnumerable, this, P);
    if (this === ObjectPrototype && hasOwn$3(AllSymbols, P) && !hasOwn$3(ObjectPrototypeSymbols, P)) return false;
    return enumerable || !hasOwn$3(this, P) || !hasOwn$3(AllSymbols, P) || hasOwn$3(this, HIDDEN) && this[HIDDEN][P]
      ? enumerable : true;
  };

  var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(O, P) {
    var it = toIndexedObject(O);
    var key = toPropertyKey(P);
    if (it === ObjectPrototype && hasOwn$3(AllSymbols, key) && !hasOwn$3(ObjectPrototypeSymbols, key)) return;
    var descriptor = nativeGetOwnPropertyDescriptor(it, key);
    if (descriptor && hasOwn$3(AllSymbols, key) && !(hasOwn$3(it, HIDDEN) && it[HIDDEN][key])) {
      descriptor.enumerable = true;
    }
    return descriptor;
  };

  var $getOwnPropertyNames = function getOwnPropertyNames(O) {
    var names = nativeGetOwnPropertyNames(toIndexedObject(O));
    var result = [];
    $forEach(names, function (key) {
      if (!hasOwn$3(AllSymbols, key) && !hasOwn$3(hiddenKeys, key)) push$2(result, key);
    });
    return result;
  };

  var $getOwnPropertySymbols = function (O) {
    var IS_OBJECT_PROTOTYPE = O === ObjectPrototype;
    var names = nativeGetOwnPropertyNames(IS_OBJECT_PROTOTYPE ? ObjectPrototypeSymbols : toIndexedObject(O));
    var result = [];
    $forEach(names, function (key) {
      if (hasOwn$3(AllSymbols, key) && (!IS_OBJECT_PROTOTYPE || hasOwn$3(ObjectPrototype, key))) {
        push$2(result, AllSymbols[key]);
      }
    });
    return result;
  };

  // `Symbol` constructor
  // https://tc39.es/ecma262/#sec-symbol-constructor
  if (!NATIVE_SYMBOL$4) {
    $Symbol = function Symbol() {
      if (isPrototypeOf$1(SymbolPrototype$1, this)) throw TypeError$1('Symbol is not a constructor');
      var description = !arguments.length || arguments[0] === undefined ? undefined : $toString(arguments[0]);
      var tag = uid(description);
      var setter = function (value) {
        if (this === ObjectPrototype) call$3(setter, ObjectPrototypeSymbols, value);
        if (hasOwn$3(this, HIDDEN) && hasOwn$3(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
        setSymbolDescriptor(this, tag, createPropertyDescriptor(1, value));
      };
      if (DESCRIPTORS$1 && USE_SETTER) setSymbolDescriptor(ObjectPrototype, tag, { configurable: true, set: setter });
      return wrap(tag, description);
    };

    SymbolPrototype$1 = $Symbol[PROTOTYPE];

    defineBuiltIn$2(SymbolPrototype$1, 'toString', function toString() {
      return getInternalState(this).tag;
    });

    defineBuiltIn$2($Symbol, 'withoutSetter', function (description) {
      return wrap(uid(description), description);
    });

    propertyIsEnumerableModule.f = $propertyIsEnumerable;
    definePropertyModule.f = $defineProperty;
    definePropertiesModule.f = $defineProperties;
    getOwnPropertyDescriptorModule.f = $getOwnPropertyDescriptor;
    getOwnPropertyNamesModule.f = getOwnPropertyNamesExternal.f = $getOwnPropertyNames;
    getOwnPropertySymbolsModule$1.f = $getOwnPropertySymbols;

    wrappedWellKnownSymbolModule.f = function (name) {
      return wrap(wellKnownSymbol$2(name), name);
    };

    if (DESCRIPTORS$1) {
      // https://github.com/tc39/proposal-Symbol-description
      defineBuiltInAccessor$1(SymbolPrototype$1, 'description', {
        configurable: true,
        get: function description() {
          return getInternalState(this).description;
        }
      });
      {
        defineBuiltIn$2(ObjectPrototype, 'propertyIsEnumerable', $propertyIsEnumerable, { unsafe: true });
      }
    }
  }

  $$7({ global: true, constructor: true, wrap: true, forced: !NATIVE_SYMBOL$4, sham: !NATIVE_SYMBOL$4 }, {
    Symbol: $Symbol
  });

  $forEach(objectKeys(WellKnownSymbolsStore), function (name) {
    defineWellKnownSymbol(name);
  });

  $$7({ target: SYMBOL, stat: true, forced: !NATIVE_SYMBOL$4 }, {
    useSetter: function () { USE_SETTER = true; },
    useSimple: function () { USE_SETTER = false; }
  });

  $$7({ target: 'Object', stat: true, forced: !NATIVE_SYMBOL$4, sham: !DESCRIPTORS$1 }, {
    // `Object.create` method
    // https://tc39.es/ecma262/#sec-object.create
    create: $create,
    // `Object.defineProperty` method
    // https://tc39.es/ecma262/#sec-object.defineproperty
    defineProperty: $defineProperty,
    // `Object.defineProperties` method
    // https://tc39.es/ecma262/#sec-object.defineproperties
    defineProperties: $defineProperties,
    // `Object.getOwnPropertyDescriptor` method
    // https://tc39.es/ecma262/#sec-object.getownpropertydescriptors
    getOwnPropertyDescriptor: $getOwnPropertyDescriptor
  });

  $$7({ target: 'Object', stat: true, forced: !NATIVE_SYMBOL$4 }, {
    // `Object.getOwnPropertyNames` method
    // https://tc39.es/ecma262/#sec-object.getownpropertynames
    getOwnPropertyNames: $getOwnPropertyNames
  });

  // `Symbol.prototype[@@toPrimitive]` method
  // https://tc39.es/ecma262/#sec-symbol.prototype-@@toprimitive
  defineSymbolToPrimitive();

  // `Symbol.prototype[@@toStringTag]` property
  // https://tc39.es/ecma262/#sec-symbol.prototype-@@tostringtag
  setToStringTag($Symbol, SYMBOL);

  hiddenKeys[HIDDEN] = true;

  var NATIVE_SYMBOL$3 = symbolConstructorDetection;

  /* eslint-disable es/no-symbol -- safe */
  var symbolRegistryDetection = NATIVE_SYMBOL$3 && !!Symbol['for'] && !!Symbol.keyFor;

  var $$6 = _export;
  var getBuiltIn$2 = getBuiltIn$b;
  var hasOwn$2 = hasOwnProperty_1;
  var toString$4 = toString$9;
  var shared$1 = sharedExports;
  var NATIVE_SYMBOL_REGISTRY$1 = symbolRegistryDetection;

  var StringToSymbolRegistry = shared$1('string-to-symbol-registry');
  var SymbolToStringRegistry$1 = shared$1('symbol-to-string-registry');

  // `Symbol.for` method
  // https://tc39.es/ecma262/#sec-symbol.for
  $$6({ target: 'Symbol', stat: true, forced: !NATIVE_SYMBOL_REGISTRY$1 }, {
    'for': function (key) {
      var string = toString$4(key);
      if (hasOwn$2(StringToSymbolRegistry, string)) return StringToSymbolRegistry[string];
      var symbol = getBuiltIn$2('Symbol')(string);
      StringToSymbolRegistry[string] = symbol;
      SymbolToStringRegistry$1[symbol] = string;
      return symbol;
    }
  });

  var $$5 = _export;
  var hasOwn$1 = hasOwnProperty_1;
  var isSymbol$1 = isSymbol$5;
  var tryToString = tryToString$7;
  var shared = sharedExports;
  var NATIVE_SYMBOL_REGISTRY = symbolRegistryDetection;

  var SymbolToStringRegistry = shared('symbol-to-string-registry');

  // `Symbol.keyFor` method
  // https://tc39.es/ecma262/#sec-symbol.keyfor
  $$5({ target: 'Symbol', stat: true, forced: !NATIVE_SYMBOL_REGISTRY }, {
    keyFor: function keyFor(sym) {
      if (!isSymbol$1(sym)) throw TypeError(tryToString(sym) + ' is not a symbol');
      if (hasOwn$1(SymbolToStringRegistry, sym)) return SymbolToStringRegistry[sym];
    }
  });

  var uncurryThis$6 = functionUncurryThis;
  var isArray = isArray$3;
  var isCallable$5 = isCallable$t;
  var classof$1 = classofRaw$2;
  var toString$3 = toString$9;

  var push$1 = uncurryThis$6([].push);

  var getJsonReplacerFunction = function (replacer) {
    if (isCallable$5(replacer)) return replacer;
    if (!isArray(replacer)) return;
    var rawLength = replacer.length;
    var keys = [];
    for (var i = 0; i < rawLength; i++) {
      var element = replacer[i];
      if (typeof element == 'string') push$1(keys, element);
      else if (typeof element == 'number' || classof$1(element) == 'Number' || classof$1(element) == 'String') push$1(keys, toString$3(element));
    }
    var keysLength = keys.length;
    var root = true;
    return function (key, value) {
      if (root) {
        root = false;
        return value;
      }
      if (isArray(this)) return value;
      for (var j = 0; j < keysLength; j++) if (keys[j] === key) return value;
    };
  };

  var $$4 = _export;
  var getBuiltIn$1 = getBuiltIn$b;
  var apply$1 = functionApply;
  var call$2 = functionCall;
  var uncurryThis$5 = functionUncurryThis;
  var fails$4 = fails$E;
  var isCallable$4 = isCallable$t;
  var isSymbol = isSymbol$5;
  var arraySlice = arraySlice$7;
  var getReplacerFunction = getJsonReplacerFunction;
  var NATIVE_SYMBOL$2 = symbolConstructorDetection;

  var $String = String;
  var $stringify = getBuiltIn$1('JSON', 'stringify');
  var exec = uncurryThis$5(/./.exec);
  var charAt$2 = uncurryThis$5(''.charAt);
  var charCodeAt = uncurryThis$5(''.charCodeAt);
  var replace$2 = uncurryThis$5(''.replace);
  var numberToString = uncurryThis$5(1.0.toString);

  var tester = /[\uD800-\uDFFF]/g;
  var low = /^[\uD800-\uDBFF]$/;
  var hi = /^[\uDC00-\uDFFF]$/;

  var WRONG_SYMBOLS_CONVERSION = !NATIVE_SYMBOL$2 || fails$4(function () {
    var symbol = getBuiltIn$1('Symbol')();
    // MS Edge converts symbol values to JSON as {}
    return $stringify([symbol]) != '[null]'
      // WebKit converts symbol values to JSON as null
      || $stringify({ a: symbol }) != '{}'
      // V8 throws on boxed symbols
      || $stringify(Object(symbol)) != '{}';
  });

  // https://github.com/tc39/proposal-well-formed-stringify
  var ILL_FORMED_UNICODE = fails$4(function () {
    return $stringify('\uDF06\uD834') !== '"\\udf06\\ud834"'
      || $stringify('\uDEAD') !== '"\\udead"';
  });

  var stringifyWithSymbolsFix = function (it, replacer) {
    var args = arraySlice(arguments);
    var $replacer = getReplacerFunction(replacer);
    if (!isCallable$4($replacer) && (it === undefined || isSymbol(it))) return; // IE8 returns string on undefined
    args[1] = function (key, value) {
      // some old implementations (like WebKit) could pass numbers as keys
      if (isCallable$4($replacer)) value = call$2($replacer, this, $String(key), value);
      if (!isSymbol(value)) return value;
    };
    return apply$1($stringify, null, args);
  };

  var fixIllFormed = function (match, offset, string) {
    var prev = charAt$2(string, offset - 1);
    var next = charAt$2(string, offset + 1);
    if ((exec(low, match) && !exec(hi, next)) || (exec(hi, match) && !exec(low, prev))) {
      return '\\u' + numberToString(charCodeAt(match, 0), 16);
    } return match;
  };

  if ($stringify) {
    // `JSON.stringify` method
    // https://tc39.es/ecma262/#sec-json.stringify
    $$4({ target: 'JSON', stat: true, arity: 3, forced: WRONG_SYMBOLS_CONVERSION || ILL_FORMED_UNICODE }, {
      // eslint-disable-next-line no-unused-vars -- required for `.length`
      stringify: function stringify(it, replacer, space) {
        var args = arraySlice(arguments);
        var result = apply$1(WRONG_SYMBOLS_CONVERSION ? stringifyWithSymbolsFix : $stringify, null, args);
        return ILL_FORMED_UNICODE && typeof result == 'string' ? replace$2(result, tester, fixIllFormed) : result;
      }
    });
  }

  var $$3 = _export;
  var NATIVE_SYMBOL$1 = symbolConstructorDetection;
  var fails$3 = fails$E;
  var getOwnPropertySymbolsModule = objectGetOwnPropertySymbols;
  var toObject$1 = toObject$d;

  // V8 ~ Chrome 38 and 39 `Object.getOwnPropertySymbols` fails on primitives
  // https://bugs.chromium.org/p/v8/issues/detail?id=3443
  var FORCED = !NATIVE_SYMBOL$1 || fails$3(function () { getOwnPropertySymbolsModule.f(1); });

  // `Object.getOwnPropertySymbols` method
  // https://tc39.es/ecma262/#sec-object.getownpropertysymbols
  $$3({ target: 'Object', stat: true, forced: FORCED }, {
    getOwnPropertySymbols: function getOwnPropertySymbols(it) {
      var $getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
      return $getOwnPropertySymbols ? $getOwnPropertySymbols(toObject$1(it)) : [];
    }
  });

  var $$2 = _export;
  var DESCRIPTORS = descriptors;
  var global$1 = global$x;
  var uncurryThis$4 = functionUncurryThis;
  var hasOwn = hasOwnProperty_1;
  var isCallable$3 = isCallable$t;
  var isPrototypeOf = objectIsPrototypeOf;
  var toString$2 = toString$9;
  var defineBuiltInAccessor = defineBuiltInAccessor$8;
  var copyConstructorProperties = copyConstructorProperties$2;

  var NativeSymbol = global$1.Symbol;
  var SymbolPrototype = NativeSymbol && NativeSymbol.prototype;

  if (DESCRIPTORS && isCallable$3(NativeSymbol) && (!('description' in SymbolPrototype) ||
    // Safari 12 bug
    NativeSymbol().description !== undefined
  )) {
    var EmptyStringDescriptionStore = {};
    // wrap Symbol constructor for correct work with undefined description
    var SymbolWrapper = function Symbol() {
      var description = arguments.length < 1 || arguments[0] === undefined ? undefined : toString$2(arguments[0]);
      var result = isPrototypeOf(SymbolPrototype, this)
        ? new NativeSymbol(description)
        // in Edge 13, String(Symbol(undefined)) === 'Symbol(undefined)'
        : description === undefined ? NativeSymbol() : NativeSymbol(description);
      if (description === '') EmptyStringDescriptionStore[result] = true;
      return result;
    };

    copyConstructorProperties(SymbolWrapper, NativeSymbol);
    SymbolWrapper.prototype = SymbolPrototype;
    SymbolPrototype.constructor = SymbolWrapper;

    var NATIVE_SYMBOL = String(NativeSymbol('test')) == 'Symbol(test)';
    var thisSymbolValue = uncurryThis$4(SymbolPrototype.valueOf);
    var symbolDescriptiveString = uncurryThis$4(SymbolPrototype.toString);
    var regexp = /^Symbol\((.*)\)[^)]+$/;
    var replace$1 = uncurryThis$4(''.replace);
    var stringSlice$3 = uncurryThis$4(''.slice);

    defineBuiltInAccessor(SymbolPrototype, 'description', {
      configurable: true,
      get: function description() {
        var symbol = thisSymbolValue(this);
        if (hasOwn(EmptyStringDescriptionStore, symbol)) return '';
        var string = symbolDescriptiveString(symbol);
        var desc = NATIVE_SYMBOL ? stringSlice$3(string, 7, -1) : replace$1(string, regexp, '$1');
        return desc === '' ? undefined : desc;
      }
    });

    $$2({ global: true, constructor: true, forced: true }, {
      Symbol: SymbolWrapper
    });
  }

  function createBaseAudioFile() {
    return {
      description: undefined,
      data: undefined
    };
  }
  var AudioFile = {
    encode: function encode(message, writer) {
      if (writer === void 0) {
        writer = _m0.Writer.create();
      }
      if (message.description !== undefined) {
        AudioFile_Description.encode(message.description, writer.uint32(10).fork()).ldelim();
      }
      if (message.data !== undefined) {
        writer.uint32(18).bytes(message.data);
      }
      return writer;
    },
    decode: function decode(input, length) {
      var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
      var end = length === undefined ? reader.len : reader.pos + length;
      var message = createBaseAudioFile();
      while (reader.pos < end) {
        var tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            message.description = AudioFile_Description.decode(reader, reader.uint32());
            break;
          case 2:
            message.data = reader.bytes();
            break;
          default:
            reader.skipType(tag & 7);
            break;
        }
      }
      return message;
    }
  };
  function createBaseAudioFile_Description() {
    return {
      url: "",
      duration: undefined,
      size: undefined,
      format: undefined
    };
  }
  var AudioFile_Description = {
    encode: function encode(message, writer) {
      if (writer === void 0) {
        writer = _m0.Writer.create();
      }
      if (message.url !== "") {
        writer.uint32(10).string(message.url);
      }
      if (message.duration !== undefined) {
        writer.uint32(16).int32(message.duration);
      }
      if (message.size !== undefined) {
        writer.uint32(24).int32(message.size);
      }
      if (message.format !== undefined) {
        writer.uint32(34).string(message.format);
      }
      return writer;
    },
    decode: function decode(input, length) {
      var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
      var end = length === undefined ? reader.len : reader.pos + length;
      var message = createBaseAudioFile_Description();
      while (reader.pos < end) {
        var tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            message.url = reader.string();
            break;
          case 2:
            message.duration = reader.int32();
            break;
          case 3:
            message.size = reader.int32();
            break;
          case 4:
            message.format = reader.string();
            break;
          default:
            reader.skipType(tag & 7);
            break;
        }
      }
      return message;
    }
  };

  var BuiltinSystemMessageType;
  (function (BuiltinSystemMessageType) {
    BuiltinSystemMessageType[BuiltinSystemMessageType["NORMAL"] = 0] = "NORMAL";
    BuiltinSystemMessageType[BuiltinSystemMessageType["RECALL_MESSAGE"] = 1] = "RECALL_MESSAGE";
  })(BuiltinSystemMessageType || (BuiltinSystemMessageType = {}));
  var BuiltinSystemMessageType$1 = BuiltinSystemMessageType;

  function createBaseFile() {
    return {
      description: undefined,
      data: undefined
    };
  }
  var File = {
    encode: function encode(message, writer) {
      if (writer === void 0) {
        writer = _m0.Writer.create();
      }
      if (message.description !== undefined) {
        File_Description.encode(message.description, writer.uint32(10).fork()).ldelim();
      }
      if (message.data !== undefined) {
        writer.uint32(18).bytes(message.data);
      }
      return writer;
    },
    decode: function decode(input, length) {
      var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
      var end = length === undefined ? reader.len : reader.pos + length;
      var message = createBaseFile();
      while (reader.pos < end) {
        var tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            message.description = File_Description.decode(reader, reader.uint32());
            break;
          case 2:
            message.data = reader.bytes();
            break;
          default:
            reader.skipType(tag & 7);
            break;
        }
      }
      return message;
    }
  };
  function createBaseFile_Description() {
    return {
      url: "",
      size: undefined,
      format: undefined
    };
  }
  var File_Description = {
    encode: function encode(message, writer) {
      if (writer === void 0) {
        writer = _m0.Writer.create();
      }
      if (message.url !== "") {
        writer.uint32(10).string(message.url);
      }
      if (message.size !== undefined) {
        writer.uint32(16).int32(message.size);
      }
      if (message.format !== undefined) {
        writer.uint32(26).string(message.format);
      }
      return writer;
    },
    decode: function decode(input, length) {
      var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
      var end = length === undefined ? reader.len : reader.pos + length;
      var message = createBaseFile_Description();
      while (reader.pos < end) {
        var tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            message.url = reader.string();
            break;
          case 2:
            message.size = reader.int32();
            break;
          case 3:
            message.format = reader.string();
            break;
          default:
            reader.skipType(tag & 7);
            break;
        }
      }
      return message;
    }
  };

  function createBaseImageFile() {
    return {
      description: undefined,
      data: undefined
    };
  }
  var ImageFile = {
    encode: function encode(message, writer) {
      if (writer === void 0) {
        writer = _m0.Writer.create();
      }
      if (message.description !== undefined) {
        ImageFile_Description.encode(message.description, writer.uint32(10).fork()).ldelim();
      }
      if (message.data !== undefined) {
        writer.uint32(18).bytes(message.data);
      }
      return writer;
    },
    decode: function decode(input, length) {
      var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
      var end = length === undefined ? reader.len : reader.pos + length;
      var message = createBaseImageFile();
      while (reader.pos < end) {
        var tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            message.description = ImageFile_Description.decode(reader, reader.uint32());
            break;
          case 2:
            message.data = reader.bytes();
            break;
          default:
            reader.skipType(tag & 7);
            break;
        }
      }
      return message;
    }
  };
  function createBaseImageFile_Description() {
    return {
      url: "",
      original: undefined,
      imageSize: undefined,
      fileSize: undefined
    };
  }
  var ImageFile_Description = {
    encode: function encode(message, writer) {
      if (writer === void 0) {
        writer = _m0.Writer.create();
      }
      if (message.url !== "") {
        writer.uint32(10).string(message.url);
      }
      if (message.original !== undefined) {
        writer.uint32(16).bool(message.original);
      }
      if (message.imageSize !== undefined) {
        writer.uint32(24).int32(message.imageSize);
      }
      if (message.fileSize !== undefined) {
        writer.uint32(32).int32(message.fileSize);
      }
      return writer;
    },
    decode: function decode(input, length) {
      var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
      var end = length === undefined ? reader.len : reader.pos + length;
      var message = createBaseImageFile_Description();
      while (reader.pos < end) {
        var tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            message.url = reader.string();
            break;
          case 2:
            message.original = reader.bool();
            break;
          case 3:
            message.imageSize = reader.int32();
            break;
          case 4:
            message.fileSize = reader.int32();
            break;
          default:
            reader.skipType(tag & 7);
            break;
        }
      }
      return message;
    }
  };

  var MessageAddition = function () {
    function MessageAddition(isMentioned, mentionedUserIds, recalledMessageIds) {
      this.isMentioned = isMentioned;
      this.mentionedUserIds = mentionedUserIds;
      this.recalledMessageIds = recalledMessageIds;
    }
    return MessageAddition;
  }();

  function createBaseVideoFile() {
    return {
      description: undefined,
      data: undefined
    };
  }
  var VideoFile = {
    encode: function encode(message, writer) {
      if (writer === void 0) {
        writer = _m0.Writer.create();
      }
      if (message.description !== undefined) {
        VideoFile_Description.encode(message.description, writer.uint32(10).fork()).ldelim();
      }
      if (message.data !== undefined) {
        writer.uint32(18).bytes(message.data);
      }
      return writer;
    },
    decode: function decode(input, length) {
      var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
      var end = length === undefined ? reader.len : reader.pos + length;
      var message = createBaseVideoFile();
      while (reader.pos < end) {
        var tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            message.description = VideoFile_Description.decode(reader, reader.uint32());
            break;
          case 2:
            message.data = reader.bytes();
            break;
          default:
            reader.skipType(tag & 7);
            break;
        }
      }
      return message;
    }
  };
  function createBaseVideoFile_Description() {
    return {
      url: "",
      duration: undefined,
      size: undefined,
      format: undefined
    };
  }
  var VideoFile_Description = {
    encode: function encode(message, writer) {
      if (writer === void 0) {
        writer = _m0.Writer.create();
      }
      if (message.url !== "") {
        writer.uint32(10).string(message.url);
      }
      if (message.duration !== undefined) {
        writer.uint32(16).int32(message.duration);
      }
      if (message.size !== undefined) {
        writer.uint32(24).int32(message.size);
      }
      if (message.format !== undefined) {
        writer.uint32(34).string(message.format);
      }
      return writer;
    },
    decode: function decode(input, length) {
      var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
      var end = length === undefined ? reader.len : reader.pos + length;
      var message = createBaseVideoFile_Description();
      while (reader.pos < end) {
        var tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            message.url = reader.string();
            break;
          case 2:
            message.duration = reader.int32();
            break;
          case 3:
            message.size = reader.int32();
            break;
          case 4:
            message.format = reader.string();
            break;
          default:
            reader.skipType(tag & 7);
            break;
        }
      }
      return message;
    }
  };

  var MessageService = function () {
    function MessageService(turmsClient) {
      var _this = this;
      this._messageListeners = [];
      this._turmsClient = turmsClient;
      this._turmsClient.driver.addNotificationListener(function (notification) {
        if (_this._messageListeners.length && notification.relayedRequest) {
          var request = notification.relayedRequest.createMessageRequest;
          if (request) {
            var message_1 = MessageService._createMessageRequest2Message(notification.requesterId, request);
            var addition_1 = _this._parseMessageAddition(message_1);
            _this._messageListeners.forEach(function (listener) {
              return listener(message_1, addition_1);
            });
          }
        }
      });
    }
    MessageService.prototype.addMessageListener = function (listener) {
      this._messageListeners.push(listener);
    };
    MessageService.prototype.removeMessageListener = function (listener) {
      this._messageListeners = this._messageListeners.filter(function (cur) {
        return cur !== listener;
      });
    };
    MessageService.prototype.sendMessage = function (_a) {
      var isGroupMessage = _a.isGroupMessage,
        targetId = _a.targetId,
        deliveryDate = _a.deliveryDate,
        text = _a.text,
        records = _a.records,
        burnAfter = _a.burnAfter,
        preMessageId = _a.preMessageId;
      if (Validator.isFalsy(targetId)) {
        return ResponseError.notFalsyPromise('targetId');
      }
      if (Validator.isFalsy(text) && Validator.isFalsy(records)) {
        return ResponseError.illegalParamPromise('text and records must not all be null');
      }
      return this._turmsClient.driver.send({
        createMessageRequest: {
          groupId: isGroupMessage ? targetId : undefined,
          recipientId: !isGroupMessage ? targetId : undefined,
          deliveryDate: DataParser.getDateTimeStr(deliveryDate),
          text: text,
          records: records || [],
          burnAfter: burnAfter,
          preMessageId: preMessageId
        }
      }).then(function (n) {
        return Response.fromNotification(n, function (data) {
          return NotificationUtil.getLongOrThrow(data);
        });
      });
    };
    MessageService.prototype.forwardMessage = function (_a) {
      var messageId = _a.messageId,
        isGroupMessage = _a.isGroupMessage,
        targetId = _a.targetId;
      if (Validator.isFalsy(messageId)) {
        return ResponseError.notFalsyPromise('messageId');
      }
      if (Validator.isFalsy(targetId)) {
        return ResponseError.notFalsyPromise('targetId');
      }
      return this._turmsClient.driver.send({
        createMessageRequest: {
          messageId: messageId,
          groupId: isGroupMessage ? targetId : undefined,
          recipientId: !isGroupMessage ? targetId : undefined,
          records: []
        }
      }).then(function (n) {
        return Response.fromNotification(n, function (data) {
          return NotificationUtil.getLongOrThrow(data);
        });
      });
    };
    MessageService.prototype.updateSentMessage = function (_a) {
      var messageId = _a.messageId,
        text = _a.text,
        records = _a.records;
      if (Validator.isFalsy(messageId)) {
        return ResponseError.notFalsyPromise('messageId');
      }
      if (Validator.areAllFalsy(text, records)) {
        return Promise.resolve(Response.nullValue());
      }
      return this._turmsClient.driver.send({
        updateMessageRequest: {
          messageId: messageId,
          text: text,
          records: records || []
        }
      }).then(function (n) {
        return Response.fromNotification(n);
      });
    };
    MessageService.prototype.queryMessages = function (_a) {
      var ids = _a.ids,
        areGroupMessages = _a.areGroupMessages,
        areSystemMessages = _a.areSystemMessages,
        fromIds = _a.fromIds,
        deliveryDateStart = _a.deliveryDateStart,
        deliveryDateEnd = _a.deliveryDateEnd,
        _b = _a.maxCount,
        maxCount = _b === void 0 ? 50 : _b,
        descending = _a.descending;
      return this._turmsClient.driver.send({
        queryMessagesRequest: {
          ids: ids || [],
          areGroupMessages: areGroupMessages,
          areSystemMessages: areSystemMessages,
          fromIds: fromIds || [],
          deliveryDateStart: DataParser.getDateTimeStr(deliveryDateStart),
          deliveryDateEnd: DataParser.getDateTimeStr(deliveryDateEnd),
          maxCount: maxCount,
          descending: descending != null && descending ? true : null,
          withTotal: false
        }
      }).then(function (n) {
        return Response.fromNotification(n, function (data) {
          var _a;
          return NotificationUtil.transformOrEmpty((_a = data.messages) === null || _a === void 0 ? void 0 : _a.messages);
        });
      });
    };
    MessageService.prototype.queryMessagesWithTotal = function (_a) {
      var ids = _a.ids,
        areGroupMessages = _a.areGroupMessages,
        areSystemMessages = _a.areSystemMessages,
        fromIds = _a.fromIds,
        deliveryDateStart = _a.deliveryDateStart,
        deliveryDateEnd = _a.deliveryDateEnd,
        _b = _a.maxCount,
        maxCount = _b === void 0 ? 1 : _b,
        descending = _a.descending;
      return this._turmsClient.driver.send({
        queryMessagesRequest: {
          ids: ids || [],
          areGroupMessages: areGroupMessages,
          areSystemMessages: areSystemMessages,
          fromIds: fromIds || [],
          deliveryDateStart: DataParser.getDateTimeStr(deliveryDateStart),
          deliveryDateEnd: DataParser.getDateTimeStr(deliveryDateEnd),
          maxCount: maxCount,
          descending: descending != null && descending ? true : null,
          withTotal: true
        }
      }).then(function (n) {
        return Response.fromNotification(n, function (data) {
          var _a;
          return NotificationUtil.transformOrEmpty((_a = data.messagesWithTotalList) === null || _a === void 0 ? void 0 : _a.messagesWithTotalList);
        });
      });
    };
    MessageService.prototype.recallMessage = function (_a) {
      var messageId = _a.messageId,
        _b = _a.recallDate,
        recallDate = _b === void 0 ? new Date() : _b;
      if (Validator.isFalsy(messageId)) {
        return ResponseError.notFalsyPromise('messageId');
      }
      return this._turmsClient.driver.send({
        updateMessageRequest: {
          messageId: messageId,
          recallDate: DataParser.getDateTimeStr(recallDate),
          records: []
        }
      }).then(function (n) {
        return Response.fromNotification(n);
      });
    };
    MessageService.prototype.isMentionEnabled = function () {
      return this._mentionedUserIdsParser != null;
    };
    MessageService.prototype.enableMention = function (mentionedUserIdsParser) {
      if (mentionedUserIdsParser) {
        this._mentionedUserIdsParser = mentionedUserIdsParser;
      } else if (!this._mentionedUserIdsParser) {
        this._mentionedUserIdsParser = MessageService.DEFAULT_MENTIONED_USER_IDS_PARSER;
      }
    };
    MessageService.generateLocationRecord = function (_a) {
      var latitude = _a.latitude,
        longitude = _a.longitude,
        details = _a.details;
      Validator.throwIfAnyFalsy(latitude, longitude);
      return UserLocation$1.encode({
        latitude: latitude,
        longitude: longitude,
        details: details || {}
      }).finish();
    };
    MessageService.generateAudioRecordByDescription = function (_a) {
      var url = _a.url,
        duration = _a.duration,
        format = _a.format,
        size = _a.size;
      Validator.throwIfAnyFalsy(url);
      return AudioFile.encode({
        description: {
          url: url,
          duration: duration,
          format: format,
          size: size
        }
      }).finish();
    };
    MessageService.generateAudioRecordByData = function (_a) {
      var data = _a.data;
      Validator.throwIfAnyFalsy(data);
      return AudioFile.encode({
        data: new Uint8Array(data)
      }).finish();
    };
    MessageService.generateVideoRecordByDescription = function (_a) {
      var url = _a.url,
        duration = _a.duration,
        format = _a.format,
        size = _a.size;
      Validator.throwIfAnyFalsy(url);
      return VideoFile.encode({
        description: {
          url: url,
          duration: duration,
          format: format,
          size: size
        }
      }).finish();
    };
    MessageService.generateVideoRecordByData = function (_a) {
      var data = _a.data;
      Validator.throwIfAnyFalsy(data);
      return VideoFile.encode({
        data: new Uint8Array(data)
      }).finish();
    };
    MessageService.generateImageRecordByData = function (_a) {
      var data = _a.data;
      Validator.throwIfAnyFalsy(data);
      return ImageFile.encode({
        data: new Uint8Array(data)
      }).finish();
    };
    MessageService.generateImageRecordByDescription = function (_a) {
      var url = _a.url,
        fileSize = _a.fileSize,
        imageSize = _a.imageSize,
        original = _a.original;
      Validator.throwIfAnyFalsy(url);
      return ImageFile.encode({
        description: {
          url: url,
          fileSize: fileSize,
          imageSize: imageSize,
          original: original
        }
      }).finish();
    };
    MessageService.generateFileRecordByDate = function (_a) {
      var data = _a.data;
      Validator.throwIfAnyFalsy(data);
      return File.encode({
        data: new Uint8Array(data)
      }).finish();
    };
    MessageService.generateFileRecordByDescription = function (_a) {
      var url = _a.url,
        format = _a.format,
        size = _a.size;
      Validator.throwIfAnyFalsy(url);
      return File.encode({
        description: {
          url: url,
          format: format,
          size: size
        }
      }).finish();
    };
    MessageService.prototype._parseMessageAddition = function (message) {
      var _a;
      var mentionedUserIds = this._mentionedUserIdsParser ? this._mentionedUserIdsParser(message) : [];
      var isMentioned = mentionedUserIds.indexOf(this._turmsClient.userService.userInfo.userId) >= 0;
      var systemMessageType = message.isSystemMessage && ((_a = message.records[0]) === null || _a === void 0 ? void 0 : _a[0]);
      var recalledMessageIds = [];
      if (systemMessageType === BuiltinSystemMessageType$1.RECALL_MESSAGE) {
        var size = message.records.length;
        for (var i = 1; i < size; i++) {
          var id = long.fromBytes(message.records[i]).toString();
          recalledMessageIds.push(id);
        }
      }
      return new MessageAddition(isMentioned, mentionedUserIds, recalledMessageIds);
    };
    MessageService._createMessageRequest2Message = function (requesterId, request) {
      return {
        id: request.messageId,
        isSystemMessage: request.isSystemMessage,
        deliveryDate: request.deliveryDate,
        text: request.text,
        records: request.records,
        senderId: requesterId,
        groupId: request.groupId,
        recipientId: request.recipientId
      };
    };
    MessageService.DEFAULT_MENTIONED_USER_IDS_PARSER = function (message) {
      var regex = /@{(\d+?)}/g;
      if (!message.text) {
        return [];
      }
      var userIds = [];
      var matches;
      while (matches = regex.exec(message.text)) {
        var match = matches[1];
        if (!isNaN(match)) {
          userIds.push(match);
        }
      }
      return CollectionUtil.uniqueArray(userIds);
    };
    return MessageService;
  }();

  var Notification = function () {
    function Notification(timestamp, relayedRequest) {
      this.timestamp = timestamp;
      this.relayedRequest = relayedRequest;
    }
    return Notification;
  }();

  var NotificationService = function () {
    function NotificationService(turmsClient) {
      var _this = this;
      this._notificationListeners = [];
      this._turmsClient = turmsClient;
      this._turmsClient.driver.addNotificationListener(function (notification) {
        var isBusinessNotification = notification.relayedRequest && !notification.relayedRequest.createMessageRequest && !notification.closeStatus;
        if (isBusinessNotification) {
          var n_1 = new Notification(new Date(parseInt(notification.timestamp)), notification.relayedRequest);
          _this._notificationListeners.forEach(function (listener) {
            return listener(n_1);
          });
        }
      });
    }
    NotificationService.prototype.addNotificationListener = function (listener) {
      this._notificationListeners.push(listener);
    };
    NotificationService.prototype.removeNotificationListener = function (listener) {
      this._notificationListeners = this._notificationListeners.filter(function (cur) {
        return cur !== listener;
      });
    };
    return NotificationService;
  }();

  var $$1 = _export;
  var uncurryThis$3 = functionUncurryThisClause;
  var getOwnPropertyDescriptor = objectGetOwnPropertyDescriptor.f;
  var toLength$1 = toLength$8;
  var toString$1 = toString$9;
  var notARegExp = notARegexp;
  var requireObjectCoercible$1 = requireObjectCoercible$6;
  var correctIsRegExpLogic = correctIsRegexpLogic;

  // eslint-disable-next-line es/no-string-prototype-startswith -- safe
  var nativeStartsWith = uncurryThis$3(''.startsWith);
  var stringSlice$2 = uncurryThis$3(''.slice);
  var min$1 = Math.min;

  var CORRECT_IS_REGEXP_LOGIC = correctIsRegExpLogic('startsWith');
  // https://github.com/zloirock/core-js/pull/702
  var MDN_POLYFILL_BUG = !CORRECT_IS_REGEXP_LOGIC && !!function () {
    var descriptor = getOwnPropertyDescriptor(String.prototype, 'startsWith');
    return descriptor && !descriptor.writable;
  }();

  // `String.prototype.startsWith` method
  // https://tc39.es/ecma262/#sec-string.prototype.startswith
  $$1({ target: 'String', proto: true, forced: !MDN_POLYFILL_BUG && !CORRECT_IS_REGEXP_LOGIC }, {
    startsWith: function startsWith(searchString /* , position = 0 */) {
      var that = toString$1(requireObjectCoercible$1(this));
      notARegExp(searchString);
      var index = toLength$1(min$1(arguments.length > 1 ? arguments[1] : undefined, that.length));
      var search = toString$1(searchString);
      return nativeStartsWith
        ? nativeStartsWith(that, search, index)
        : stringSlice$2(that, index, index + search.length) === search;
    }
  });

  // TODO: Remove from `core-js@4` since it's moved to entry points

  var uncurryThis$2 = functionUncurryThisClause;
  var defineBuiltIn$1 = defineBuiltIn$e;
  var regexpExec$1 = regexpExec$2;
  var fails$2 = fails$E;
  var wellKnownSymbol$1 = wellKnownSymbol$q;
  var createNonEnumerableProperty = createNonEnumerableProperty$9;

  var SPECIES = wellKnownSymbol$1('species');
  var RegExpPrototype = RegExp.prototype;

  var fixRegexpWellKnownSymbolLogic = function (KEY, exec, FORCED, SHAM) {
    var SYMBOL = wellKnownSymbol$1(KEY);

    var DELEGATES_TO_SYMBOL = !fails$2(function () {
      // String methods call symbol-named RegEp methods
      var O = {};
      O[SYMBOL] = function () { return 7; };
      return ''[KEY](O) != 7;
    });

    var DELEGATES_TO_EXEC = DELEGATES_TO_SYMBOL && !fails$2(function () {
      // Symbol-named RegExp methods call .exec
      var execCalled = false;
      var re = /a/;

      if (KEY === 'split') {
        // We can't use real regex here since it causes deoptimization
        // and serious performance degradation in V8
        // https://github.com/zloirock/core-js/issues/306
        re = {};
        // RegExp[@@split] doesn't call the regex's exec method, but first creates
        // a new one. We need to return the patched regex when creating the new one.
        re.constructor = {};
        re.constructor[SPECIES] = function () { return re; };
        re.flags = '';
        re[SYMBOL] = /./[SYMBOL];
      }

      re.exec = function () { execCalled = true; return null; };

      re[SYMBOL]('');
      return !execCalled;
    });

    if (
      !DELEGATES_TO_SYMBOL ||
      !DELEGATES_TO_EXEC ||
      FORCED
    ) {
      var uncurriedNativeRegExpMethod = uncurryThis$2(/./[SYMBOL]);
      var methods = exec(SYMBOL, ''[KEY], function (nativeMethod, regexp, str, arg2, forceStringMethod) {
        var uncurriedNativeMethod = uncurryThis$2(nativeMethod);
        var $exec = regexp.exec;
        if ($exec === regexpExec$1 || $exec === RegExpPrototype.exec) {
          if (DELEGATES_TO_SYMBOL && !forceStringMethod) {
            // The native String method already delegates to @@method (this
            // polyfilled function), leasing to infinite recursion.
            // We avoid it by directly calling the native @@method method.
            return { done: true, value: uncurriedNativeRegExpMethod(regexp, str, arg2) };
          }
          return { done: true, value: uncurriedNativeMethod(str, regexp, arg2) };
        }
        return { done: false };
      });

      defineBuiltIn$1(String.prototype, KEY, methods[0]);
      defineBuiltIn$1(RegExpPrototype, SYMBOL, methods[1]);
    }

    if (SHAM) createNonEnumerableProperty(RegExpPrototype[SYMBOL], 'sham', true);
  };

  var charAt$1 = stringMultibyte.charAt;

  // `AdvanceStringIndex` abstract operation
  // https://tc39.es/ecma262/#sec-advancestringindex
  var advanceStringIndex$1 = function (S, index, unicode) {
    return index + (unicode ? charAt$1(S, index).length : 1);
  };

  var uncurryThis$1 = functionUncurryThis;
  var toObject = toObject$d;

  var floor = Math.floor;
  var charAt = uncurryThis$1(''.charAt);
  var replace = uncurryThis$1(''.replace);
  var stringSlice$1 = uncurryThis$1(''.slice);
  // eslint-disable-next-line redos/no-vulnerable -- safe
  var SUBSTITUTION_SYMBOLS = /\$([$&'`]|\d{1,2}|<[^>]*>)/g;
  var SUBSTITUTION_SYMBOLS_NO_NAMED = /\$([$&'`]|\d{1,2})/g;

  // `GetSubstitution` abstract operation
  // https://tc39.es/ecma262/#sec-getsubstitution
  var getSubstitution$1 = function (matched, str, position, captures, namedCaptures, replacement) {
    var tailPos = position + matched.length;
    var m = captures.length;
    var symbols = SUBSTITUTION_SYMBOLS_NO_NAMED;
    if (namedCaptures !== undefined) {
      namedCaptures = toObject(namedCaptures);
      symbols = SUBSTITUTION_SYMBOLS;
    }
    return replace(replacement, symbols, function (match, ch) {
      var capture;
      switch (charAt(ch, 0)) {
        case '$': return '$';
        case '&': return matched;
        case '`': return stringSlice$1(str, 0, position);
        case "'": return stringSlice$1(str, tailPos);
        case '<':
          capture = namedCaptures[stringSlice$1(ch, 1, -1)];
          break;
        default: // \d\d?
          var n = +ch;
          if (n === 0) return match;
          if (n > m) {
            var f = floor(n / 10);
            if (f === 0) return match;
            if (f <= m) return captures[f - 1] === undefined ? charAt(ch, 1) : captures[f - 1] + charAt(ch, 1);
            return match;
          }
          capture = captures[n - 1];
      }
      return capture === undefined ? '' : capture;
    });
  };

  var call$1 = functionCall;
  var anObject$1 = anObject$g;
  var isCallable$2 = isCallable$t;
  var classof = classofRaw$2;
  var regexpExec = regexpExec$2;

  var $TypeError = TypeError;

  // `RegExpExec` abstract operation
  // https://tc39.es/ecma262/#sec-regexpexec
  var regexpExecAbstract = function (R, S) {
    var exec = R.exec;
    if (isCallable$2(exec)) {
      var result = call$1(exec, R, S);
      if (result !== null) anObject$1(result);
      return result;
    }
    if (classof(R) === 'RegExp') return call$1(regexpExec, R, S);
    throw $TypeError('RegExp#exec called on incompatible receiver');
  };

  var apply = functionApply;
  var call = functionCall;
  var uncurryThis = functionUncurryThis;
  var fixRegExpWellKnownSymbolLogic = fixRegexpWellKnownSymbolLogic;
  var fails$1 = fails$E;
  var anObject = anObject$g;
  var isCallable$1 = isCallable$t;
  var isNullOrUndefined = isNullOrUndefined$7;
  var toIntegerOrInfinity = toIntegerOrInfinity$8;
  var toLength = toLength$8;
  var toString = toString$9;
  var requireObjectCoercible = requireObjectCoercible$6;
  var advanceStringIndex = advanceStringIndex$1;
  var getMethod = getMethod$4;
  var getSubstitution = getSubstitution$1;
  var regExpExec = regexpExecAbstract;
  var wellKnownSymbol = wellKnownSymbol$q;

  var REPLACE = wellKnownSymbol('replace');
  var max = Math.max;
  var min = Math.min;
  var concat = uncurryThis([].concat);
  var push = uncurryThis([].push);
  var stringIndexOf = uncurryThis(''.indexOf);
  var stringSlice = uncurryThis(''.slice);

  var maybeToString = function (it) {
    return it === undefined ? it : String(it);
  };

  // IE <= 11 replaces $0 with the whole match, as if it was $&
  // https://stackoverflow.com/questions/6024666/getting-ie-to-replace-a-regex-with-the-literal-string-0
  var REPLACE_KEEPS_$0 = (function () {
    // eslint-disable-next-line regexp/prefer-escape-replacement-dollar-char -- required for testing
    return 'a'.replace(/./, '$0') === '$0';
  })();

  // Safari <= 13.0.3(?) substitutes nth capture where n>m with an empty string
  var REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE = (function () {
    if (/./[REPLACE]) {
      return /./[REPLACE]('a', '$0') === '';
    }
    return false;
  })();

  var REPLACE_SUPPORTS_NAMED_GROUPS = !fails$1(function () {
    var re = /./;
    re.exec = function () {
      var result = [];
      result.groups = { a: '7' };
      return result;
    };
    // eslint-disable-next-line regexp/no-useless-dollar-replacements -- false positive
    return ''.replace(re, '$<a>') !== '7';
  });

  // @@replace logic
  fixRegExpWellKnownSymbolLogic('replace', function (_, nativeReplace, maybeCallNative) {
    var UNSAFE_SUBSTITUTE = REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE ? '$' : '$0';

    return [
      // `String.prototype.replace` method
      // https://tc39.es/ecma262/#sec-string.prototype.replace
      function replace(searchValue, replaceValue) {
        var O = requireObjectCoercible(this);
        var replacer = isNullOrUndefined(searchValue) ? undefined : getMethod(searchValue, REPLACE);
        return replacer
          ? call(replacer, searchValue, O, replaceValue)
          : call(nativeReplace, toString(O), searchValue, replaceValue);
      },
      // `RegExp.prototype[@@replace]` method
      // https://tc39.es/ecma262/#sec-regexp.prototype-@@replace
      function (string, replaceValue) {
        var rx = anObject(this);
        var S = toString(string);

        if (
          typeof replaceValue == 'string' &&
          stringIndexOf(replaceValue, UNSAFE_SUBSTITUTE) === -1 &&
          stringIndexOf(replaceValue, '$<') === -1
        ) {
          var res = maybeCallNative(nativeReplace, rx, S, replaceValue);
          if (res.done) return res.value;
        }

        var functionalReplace = isCallable$1(replaceValue);
        if (!functionalReplace) replaceValue = toString(replaceValue);

        var global = rx.global;
        if (global) {
          var fullUnicode = rx.unicode;
          rx.lastIndex = 0;
        }
        var results = [];
        while (true) {
          var result = regExpExec(rx, S);
          if (result === null) break;

          push(results, result);
          if (!global) break;

          var matchStr = toString(result[0]);
          if (matchStr === '') rx.lastIndex = advanceStringIndex(S, toLength(rx.lastIndex), fullUnicode);
        }

        var accumulatedResult = '';
        var nextSourcePosition = 0;
        for (var i = 0; i < results.length; i++) {
          result = results[i];

          var matched = toString(result[0]);
          var position = max(min(toIntegerOrInfinity(result.index), S.length), 0);
          var captures = [];
          // NOTE: This is equivalent to
          //   captures = result.slice(1).map(maybeToString)
          // but for some reason `nativeSlice.call(result, 1, result.length)` (called in
          // the slice polyfill when slicing native arrays) "doesn't work" in safari 9 and
          // causes a crash (https://pastebin.com/N21QzeQA) when trying to debug it.
          for (var j = 1; j < result.length; j++) push(captures, maybeToString(result[j]));
          var namedCaptures = result.groups;
          if (functionalReplace) {
            var replacerArgs = concat([matched], captures, position, S);
            if (namedCaptures !== undefined) push(replacerArgs, namedCaptures);
            var replacement = toString(apply(replaceValue, undefined, replacerArgs));
          } else {
            replacement = getSubstitution(matched, S, position, captures, namedCaptures, replaceValue);
          }
          if (position >= nextSourcePosition) {
            accumulatedResult += stringSlice(S, nextSourcePosition, position) + replacement;
            nextSourcePosition = position + matched.length;
          }
        }
        return accumulatedResult + stringSlice(S, nextSourcePosition);
      }
    ];
  }, !REPLACE_SUPPORTS_NAMED_GROUPS || !REPLACE_KEEPS_$0 || REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE);

  function unfetch(e,n){return n=n||{},new Promise(function(t,r){var s=new XMLHttpRequest,o=[],u=[],i={},a=function(){return {ok:2==(s.status/100|0),statusText:s.statusText,status:s.status,url:s.responseURL,text:function(){return Promise.resolve(s.responseText)},json:function(){return Promise.resolve(s.responseText).then(JSON.parse)},blob:function(){return Promise.resolve(new Blob([s.response]))},clone:a,headers:{keys:function(){return o},entries:function(){return u},get:function(e){return i[e.toLowerCase()]},has:function(e){return e.toLowerCase()in i}}}};for(var l in s.open(n.method||"get",e,!0),s.onload=function(){s.getAllResponseHeaders().replace(/^(.*?):[^\S\n]*([\s\S]*?)$/gm,function(e,n,t){o.push(n=n.toLowerCase()),u.push([n,t]),i[n]=i[n]?i[n]+","+t:t;}),t(a());},s.onerror=r,s.withCredentials="include"==n.credentials,n.headers)s.setRequestHeader(l,n.headers[l]);s.send(n.body||null);})}

  var StorageResourceType;
  (function (StorageResourceType) {
    StorageResourceType[StorageResourceType["USER_PROFILE_PICTURE"] = 0] = "USER_PROFILE_PICTURE";
    StorageResourceType[StorageResourceType["GROUP_PROFILE_PICTURE"] = 1] = "GROUP_PROFILE_PICTURE";
    StorageResourceType[StorageResourceType["MESSAGE_ATTACHMENT"] = 2] = "MESSAGE_ATTACHMENT";
    StorageResourceType[StorageResourceType["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
  })(StorageResourceType || (StorageResourceType = {}));

  var StorageResource = function () {
    function StorageResource(uri, data) {
      this.uri = uri;
      this.data = data;
    }
    return StorageResource;
  }();

  var StorageUpdateResult = function () {
    function StorageUpdateResult(uri, data, resourceIdNum, resourceIdStr) {
      this.uri = uri;
      this.data = data;
      this.resourceIdNum = resourceIdNum;
      this.resourceIdStr = resourceIdStr;
    }
    return StorageUpdateResult;
  }();

  var isResponseSuccessful = function isResponseSuccessful(res) {
    return res.statusText.startsWith('2');
  };
  var StorageService = function () {
    function StorageService(turmsClient, storageServerUrl) {
      this._serverUrl = 'http://localhost:9000';
      this._turmsClient = turmsClient;
      if (storageServerUrl != null) {
        this._serverUrl = storageServerUrl;
      }
    }
    Object.defineProperty(StorageService.prototype, "serverUrl", {
      get: function get() {
        return this._serverUrl;
      },
      set: function set(serverUrl) {
        this._serverUrl = serverUrl;
      },
      enumerable: false,
      configurable: true
    });
    StorageService.prototype.uploadUserProfilePicture = function (_a) {
      var _this = this;
      var data = _a.data,
        name = _a.name,
        mediaType = _a.mediaType,
        extra = _a.extra,
        urlKeyName = _a.urlKeyName;
      if (!data.length) {
        return Promise.reject(ResponseError.from({
          code: ResponseStatusCode$1.ILLEGAL_ARGUMENT,
          reason: 'The data of user profile picture must not be empty'
        }));
      }
      return this.queryUserProfilePictureUploadInfo({
        name: name,
        mediaType: mediaType,
        extra: extra
      }).then(function (uploadInfo) {
        var url = StorageService._getAndRemoveResourceUrl(uploadInfo.data, urlKeyName);
        var id = StorageService._getAndRemoveResourceId(uploadInfo.data);
        if (id == null) {
          throw ResponseError.from({
            code: ResponseStatusCode$1.DATA_NOT_FOUND,
            reason: "Could not get the resource ID because the key \"".concat(StorageService._RESOURCE_ID_KEY_NAME, "\" does not exist in the data: ").concat(JSON.stringify(uploadInfo.data))
          });
        }
        return _this._upload({
          url: url,
          formData: uploadInfo.data,
          data: data,
          id: id,
          name: name,
          mediaType: mediaType
        });
      });
    };
    StorageService.prototype.deleteUserProfilePicture = function (_a) {
      var _b = _a === void 0 ? {} : _a,
        extra = _b.extra;
      return this._deleteResource({
        type: StorageResourceType.USER_PROFILE_PICTURE,
        extra: extra
      });
    };
    StorageService.prototype.queryUserProfilePicture = function (_a) {
      var _this = this;
      var userId = _a.userId,
        extra = _a.extra,
        urlKeyName = _a.urlKeyName,
        fetchDownloadInfo = _a.fetchDownloadInfo;
      return this.queryUserProfilePictureDownloadInfo({
        userId: userId,
        extra: extra,
        fetch: fetchDownloadInfo,
        urlKeyName: urlKeyName
      }).then(function (downloadInfo) {
        var url = StorageService._getAndRemoveResourceUrl(downloadInfo.data, urlKeyName);
        return _this._queryResource(url);
      });
    };
    StorageService.prototype.queryUserProfilePictureUploadInfo = function (_a) {
      var _b = _a === void 0 ? {} : _a,
        name = _b.name,
        mediaType = _b.mediaType,
        extra = _b.extra;
      return this._queryResourceUploadInfo({
        type: StorageResourceType.USER_PROFILE_PICTURE,
        name: name,
        mediaType: mediaType,
        extra: extra
      });
    };
    StorageService.prototype.queryUserProfilePictureDownloadInfo = function (_a) {
      var userId = _a.userId,
        extra = _a.extra,
        fetch = _a.fetch,
        urlKeyName = _a.urlKeyName;
      if (fetch) {
        return this._queryResourceDownloadInfo({
          type: StorageResourceType.USER_PROFILE_PICTURE,
          idNum: userId,
          extra: extra
        });
      }
      var url = "".concat(this._serverUrl, "/").concat(StorageService._getBucketName(StorageResourceType.USER_PROFILE_PICTURE), "/").concat(userId);
      var info = {};
      info[urlKeyName || StorageService._DEFAULT_URL_KEY_NAME] = url;
      return Promise.resolve(Response.value(info));
    };
    StorageService.prototype.uploadGroupProfilePicture = function (_a) {
      var _this = this;
      var groupId = _a.groupId,
        data = _a.data,
        name = _a.name,
        mediaType = _a.mediaType,
        extra = _a.extra,
        urlKeyName = _a.urlKeyName;
      if (!data.length) {
        return Promise.reject(ResponseError.from({
          code: ResponseStatusCode$1.ILLEGAL_ARGUMENT,
          reason: 'The data of group profile picture must not be empty'
        }));
      }
      return this.queryGroupProfilePictureUploadInfo({
        groupId: groupId,
        name: name,
        mediaType: mediaType,
        extra: extra
      }).then(function (uploadInfo) {
        var _a;
        var url = StorageService._getAndRemoveResourceUrl(uploadInfo.data, urlKeyName);
        var id = (_a = StorageService._getAndRemoveResourceId(uploadInfo.data)) !== null && _a !== void 0 ? _a : groupId;
        if (id == null) {
          throw ResponseError.from({
            code: ResponseStatusCode$1.DATA_NOT_FOUND,
            reason: "Could not get the resource ID because the key \"".concat(StorageService._RESOURCE_ID_KEY_NAME, "\" does not exist in the data: ").concat(JSON.stringify(uploadInfo.data))
          });
        }
        return _this._upload({
          url: url,
          formData: uploadInfo.data,
          data: data,
          id: id,
          name: name,
          mediaType: mediaType
        });
      });
    };
    StorageService.prototype.deleteGroupProfilePicture = function (_a) {
      var groupId = _a.groupId,
        extra = _a.extra;
      return this._deleteResource({
        type: StorageResourceType.GROUP_PROFILE_PICTURE,
        idNum: groupId,
        extra: extra
      });
    };
    StorageService.prototype.queryGroupProfilePicture = function (_a) {
      var _this = this;
      var groupId = _a.groupId,
        extra = _a.extra,
        fetchDownloadInfo = _a.fetchDownloadInfo,
        urlKeyName = _a.urlKeyName;
      return this.queryGroupProfilePictureDownloadInfo({
        groupId: groupId,
        extra: extra,
        fetch: fetchDownloadInfo,
        urlKeyName: urlKeyName
      }).then(function (downloadInfo) {
        var url = StorageService._getAndRemoveResourceUrl(downloadInfo.data, urlKeyName);
        return _this._queryResource(url);
      });
    };
    StorageService.prototype.queryGroupProfilePictureUploadInfo = function (_a) {
      var groupId = _a.groupId,
        name = _a.name,
        mediaType = _a.mediaType,
        extra = _a.extra;
      return this._queryResourceUploadInfo({
        type: StorageResourceType.GROUP_PROFILE_PICTURE,
        idNum: groupId,
        name: name,
        mediaType: mediaType,
        extra: extra
      });
    };
    StorageService.prototype.queryGroupProfilePictureDownloadInfo = function (_a) {
      var groupId = _a.groupId,
        extra = _a.extra,
        fetch = _a.fetch,
        urlKeyName = _a.urlKeyName;
      if (fetch) {
        return this._queryResourceDownloadInfo({
          type: StorageResourceType.GROUP_PROFILE_PICTURE,
          idNum: groupId,
          extra: extra
        });
      }
      var url = "".concat(this._serverUrl, "/").concat(StorageService._getBucketName(StorageResourceType.GROUP_PROFILE_PICTURE), "/").concat(groupId);
      var info = {};
      info[urlKeyName || StorageService._DEFAULT_URL_KEY_NAME] = url;
      return Promise.resolve(Response.value(info));
    };
    StorageService.prototype.uploadMessageAttachment = function (_a) {
      var data = _a.data,
        name = _a.name,
        mediaType = _a.mediaType,
        extra = _a.extra,
        urlKeyName = _a.urlKeyName;
      return this._uploadMessageAttachment({
        data: data,
        name: name,
        mediaType: mediaType,
        extra: extra,
        urlKeyName: urlKeyName
      });
    };
    StorageService.prototype.uploadMessageAttachmentInPrivateConversation = function (_a) {
      var userId = _a.userId,
        data = _a.data,
        name = _a.name,
        mediaType = _a.mediaType,
        extra = _a.extra,
        urlKeyName = _a.urlKeyName;
      return this._uploadMessageAttachment({
        userId: userId,
        data: data,
        name: name,
        mediaType: mediaType,
        extra: extra,
        urlKeyName: urlKeyName
      });
    };
    StorageService.prototype.uploadMessageAttachmentInGroupConversation = function (_a) {
      var groupId = _a.groupId,
        data = _a.data,
        name = _a.name,
        mediaType = _a.mediaType,
        extra = _a.extra,
        urlKeyName = _a.urlKeyName;
      return this._uploadMessageAttachment({
        groupId: groupId,
        data: data,
        name: name,
        mediaType: mediaType,
        extra: extra,
        urlKeyName: urlKeyName
      });
    };
    StorageService.prototype._uploadMessageAttachment = function (_a) {
      var _this = this;
      var userId = _a.userId,
        groupId = _a.groupId,
        data = _a.data,
        name = _a.name,
        mediaType = _a.mediaType,
        extra = _a.extra,
        urlKeyName = _a.urlKeyName;
      if (!data.length) {
        return Promise.reject(ResponseError.from({
          code: ResponseStatusCode$1.ILLEGAL_ARGUMENT,
          reason: 'The data of message attachment must not be empty'
        }));
      }
      var queryUploadInfo;
      if (userId == null && groupId == null) {
        queryUploadInfo = this.queryMessageAttachmentUploadInfo({
          name: name,
          mediaType: mediaType,
          extra: extra
        });
      } else if (userId != null) {
        if (groupId != null) {
          return Promise.reject(ResponseError.from({
            code: ResponseStatusCode$1.ILLEGAL_ARGUMENT,
            reason: 'The user ID and the group ID must not both be non-null'
          }));
        }
        queryUploadInfo = this.queryMessageAttachmentUploadInfoInPrivateConversation({
          userId: userId,
          name: name,
          mediaType: mediaType,
          extra: extra
        });
      } else {
        queryUploadInfo = this.queryMessageAttachmentUploadInfoInGroupConversation({
          groupId: groupId,
          name: name,
          mediaType: mediaType,
          extra: extra
        });
      }
      return queryUploadInfo.then(function (uploadInfo) {
        var url = StorageService._getAndRemoveResourceUrl(uploadInfo.data, urlKeyName);
        var id = StorageService._getAndRemoveResourceId(uploadInfo.data);
        if (id == null) {
          throw ResponseError.from({
            code: ResponseStatusCode$1.DATA_NOT_FOUND,
            reason: "Could not get the resource ID because the key \"".concat(StorageService._RESOURCE_ID_KEY_NAME, "\" does not exist in the data: ").concat(JSON.stringify(uploadInfo.data))
          });
        }
        return _this._upload({
          url: url,
          formData: uploadInfo.data,
          data: data,
          id: id,
          name: name,
          mediaType: mediaType
        });
      });
    };
    StorageService.prototype.deleteMessageAttachment = function (_a) {
      var attachmentIdNum = _a.attachmentIdNum,
        attachmentIdStr = _a.attachmentIdStr,
        extra = _a.extra;
      if (Validator.areAllNullOrNonNull([attachmentIdNum, attachmentIdStr])) {
        return Promise.reject(ResponseError.from({
          code: ResponseStatusCode$1.ILLEGAL_ARGUMENT,
          reason: 'One and only one attachment ID must be specified'
        }));
      }
      return this._deleteResource({
        type: StorageResourceType.MESSAGE_ATTACHMENT,
        idNum: attachmentIdNum,
        idStr: attachmentIdStr,
        extra: extra
      });
    };
    StorageService.prototype.shareMessageAttachmentWithUser = function (_a) {
      var userId = _a.userId,
        attachmentIdNum = _a.attachmentIdNum,
        attachmentIdStr = _a.attachmentIdStr;
      if (Validator.areAllNullOrNonNull([attachmentIdNum, attachmentIdStr])) {
        return Promise.reject(ResponseError.from({
          code: ResponseStatusCode$1.ILLEGAL_ARGUMENT,
          reason: 'One and only one attachment ID must be specified'
        }));
      }
      return this._turmsClient.driver.send({
        updateMessageAttachmentInfoRequest: {
          attachmentIdNum: attachmentIdNum,
          attachmentIdStr: attachmentIdStr,
          userIdToShareWith: userId
        }
      }).then(function (n) {
        return Response.fromNotification(n);
      });
    };
    StorageService.prototype.shareMessageAttachmentWithGroup = function (_a) {
      var groupId = _a.groupId,
        attachmentIdNum = _a.attachmentIdNum,
        attachmentIdStr = _a.attachmentIdStr;
      if (Validator.areAllNullOrNonNull([attachmentIdNum, attachmentIdStr])) {
        return Promise.reject(ResponseError.from({
          code: ResponseStatusCode$1.ILLEGAL_ARGUMENT,
          reason: 'One and only one attachment ID must be specified'
        }));
      }
      return this._turmsClient.driver.send({
        updateMessageAttachmentInfoRequest: {
          attachmentIdNum: attachmentIdNum,
          attachmentIdStr: attachmentIdStr,
          groupIdToShareWith: groupId
        }
      }).then(function (n) {
        return Response.fromNotification(n);
      });
    };
    StorageService.prototype.unshareMessageAttachmentWithUser = function (_a) {
      var userId = _a.userId,
        attachmentIdNum = _a.attachmentIdNum,
        attachmentIdStr = _a.attachmentIdStr;
      if (Validator.areAllNullOrNonNull([attachmentIdNum, attachmentIdStr])) {
        return Promise.reject(ResponseError.from({
          code: ResponseStatusCode$1.ILLEGAL_ARGUMENT,
          reason: 'One and only one attachment ID must be specified'
        }));
      }
      return this._turmsClient.driver.send({
        updateMessageAttachmentInfoRequest: {
          attachmentIdNum: attachmentIdNum,
          attachmentIdStr: attachmentIdStr,
          userIdToUnshareWith: userId
        }
      }).then(function (n) {
        return Response.fromNotification(n);
      });
    };
    StorageService.prototype.unshareMessageAttachmentWithGroup = function (_a) {
      var groupId = _a.groupId,
        attachmentIdNum = _a.attachmentIdNum,
        attachmentIdStr = _a.attachmentIdStr;
      if (Validator.areAllNullOrNonNull([attachmentIdNum, attachmentIdStr])) {
        return Promise.reject(ResponseError.from({
          code: ResponseStatusCode$1.ILLEGAL_ARGUMENT,
          reason: 'One and only one attachment ID must be specified'
        }));
      }
      return this._turmsClient.driver.send({
        updateMessageAttachmentInfoRequest: {
          attachmentIdNum: attachmentIdNum,
          attachmentIdStr: attachmentIdStr,
          groupIdToUnshareWith: groupId
        }
      }).then(function (n) {
        return Response.fromNotification(n);
      });
    };
    StorageService.prototype.queryMessageAttachment = function (_a) {
      var _this = this;
      var attachmentIdNum = _a.attachmentIdNum,
        attachmentIdStr = _a.attachmentIdStr,
        extra = _a.extra,
        fetchDownloadInfo = _a.fetchDownloadInfo,
        urlKeyName = _a.urlKeyName;
      return this.queryMessageAttachmentDownloadInfo({
        attachmentIdNum: attachmentIdNum,
        attachmentIdStr: attachmentIdStr,
        extra: extra,
        fetch: fetchDownloadInfo,
        urlKeyName: urlKeyName
      }).then(function (downloadInfo) {
        var url = StorageService._getAndRemoveResourceUrl(downloadInfo.data, urlKeyName);
        return _this._queryResource(url);
      });
    };
    StorageService.prototype.queryMessageAttachmentUploadInfo = function (_a) {
      var _b = _a === void 0 ? {} : _a,
        name = _b.name,
        mediaType = _b.mediaType,
        extra = _b.extra;
      return this._queryResourceUploadInfo({
        type: StorageResourceType.MESSAGE_ATTACHMENT,
        name: name,
        mediaType: mediaType,
        extra: extra
      });
    };
    StorageService.prototype.queryMessageAttachmentUploadInfoInPrivateConversation = function (_a) {
      var userId = _a.userId,
        name = _a.name,
        mediaType = _a.mediaType,
        extra = _a.extra;
      return this._queryResourceUploadInfo({
        type: StorageResourceType.MESSAGE_ATTACHMENT,
        idNum: userId,
        name: name,
        mediaType: mediaType,
        extra: extra
      });
    };
    StorageService.prototype.queryMessageAttachmentUploadInfoInGroupConversation = function (_a) {
      var groupId = _a.groupId,
        name = _a.name,
        mediaType = _a.mediaType,
        extra = _a.extra;
      return this._queryResourceUploadInfo({
        type: StorageResourceType.MESSAGE_ATTACHMENT,
        idNum: "-".concat(groupId),
        name: name,
        mediaType: mediaType,
        extra: extra
      });
    };
    StorageService.prototype.queryMessageAttachmentDownloadInfo = function (_a) {
      var attachmentIdNum = _a.attachmentIdNum,
        attachmentIdStr = _a.attachmentIdStr,
        extra = _a.extra,
        fetch = _a.fetch,
        urlKeyName = _a.urlKeyName;
      if (Validator.areAllNullOrNonNull([attachmentIdNum, attachmentIdStr])) {
        return Promise.reject(ResponseError.from({
          code: ResponseStatusCode$1.ILLEGAL_ARGUMENT,
          reason: 'One and only one attachment ID must be specified'
        }));
      }
      if (fetch) {
        return this._queryResourceDownloadInfo({
          type: StorageResourceType.MESSAGE_ATTACHMENT,
          idNum: attachmentIdNum,
          idStr: attachmentIdStr,
          extra: extra
        });
      }
      var url = "".concat(this._serverUrl, "/").concat(StorageService._getBucketName(StorageResourceType.MESSAGE_ATTACHMENT), "/").concat(attachmentIdNum || attachmentIdStr);
      var info = {};
      info[urlKeyName || StorageService._DEFAULT_URL_KEY_NAME] = url;
      return Promise.resolve(Response.value(info));
    };
    StorageService.prototype.queryMessageAttachmentInfosUploadedByMe = function (_a) {
      var _b = _a === void 0 ? {} : _a,
        _c = _b.creationDateStart,
        creationDateStart = _c === void 0 ? null : _c,
        _d = _b.creationDateEnd,
        creationDateEnd = _d === void 0 ? null : _d;
      return this._turmsClient.driver.send({
        queryMessageAttachmentInfosRequest: {
          userIds: [],
          groupIds: [],
          creationDateStart: DataParser.getDateTimeStr(creationDateStart),
          creationDateEnd: DataParser.getDateTimeStr(creationDateEnd)
        }
      }).then(function (n) {
        return Response.fromNotification(n, function (data) {
          return NotificationUtil.transform(data.storageResourceInfos.infos);
        });
      });
    };
    StorageService.prototype.queryMessageAttachmentInfosInPrivateConversations = function (_a) {
      var userIds = _a.userIds,
        areSharedByMe = _a.areSharedByMe,
        creationDateStart = _a.creationDateStart,
        creationDateEnd = _a.creationDateEnd;
      return this._turmsClient.driver.send({
        queryMessageAttachmentInfosRequest: {
          userIds: CollectionUtil.uniqueArray(userIds),
          groupIds: [],
          areSharedByMe: areSharedByMe,
          creationDateStart: DataParser.getDateTimeStr(creationDateStart),
          creationDateEnd: DataParser.getDateTimeStr(creationDateEnd)
        }
      }).then(function (n) {
        return Response.fromNotification(n, function (data) {
          return NotificationUtil.transform(data.storageResourceInfos.infos);
        });
      });
    };
    StorageService.prototype.queryMessageAttachmentInfosInGroupConversations = function (_a) {
      var groupIds = _a.groupIds,
        userIds = _a.userIds,
        creationDateStart = _a.creationDateStart,
        creationDateEnd = _a.creationDateEnd;
      return this._turmsClient.driver.send({
        queryMessageAttachmentInfosRequest: {
          groupIds: CollectionUtil.uniqueArray(groupIds),
          userIds: userIds == null ? undefined : CollectionUtil.uniqueArray(userIds),
          creationDateStart: DataParser.getDateTimeStr(creationDateStart),
          creationDateEnd: DataParser.getDateTimeStr(creationDateEnd)
        }
      }).then(function (n) {
        return Response.fromNotification(n, function (data) {
          return NotificationUtil.transform(data.storageResourceInfos.infos);
        });
      });
    };
    StorageService.prototype._upload = function (_a) {
      var url = _a.url,
        formData = _a.formData,
        data = _a.data,
        id = _a.id,
        name = _a.name,
        mediaType = _a.mediaType;
      if (!data.length) {
        return Promise.reject(ResponseError.from({
          code: ResponseStatusCode$1.ILLEGAL_ARGUMENT,
          reason: 'The data of resource must not be empty'
        }));
      }
      var requestFormData = new FormData();
      for (var _i = 0, _b = Object.entries(formData); _i < _b.length; _i++) {
        var _c = _b[_i],
          key = _c[0],
          value = _c[1];
        requestFormData.set(key, value);
      }
      requestFormData.set('key', id);
      var options;
      if (mediaType) {
        requestFormData.set('Content-Type', mediaType);
        options = {
          type: mediaType
        };
      }
      requestFormData.set('file', new Blob([data], options), name !== null && name !== void 0 ? name : id);
      return unfetch(url, {
        method: 'POST',
        body: requestFormData
      }).catch(function (e) {
        throw ResponseError.from({
          code: ResponseStatusCode$1.HTTP_ERROR,
          reason: 'Caught an error while sending an HTTP POST request to update the resource',
          cause: e
        });
      }).then(function (res) {
        return res.text().catch(function (e) {
          throw ResponseError.from({
            code: ResponseStatusCode$1.INVALID_RESPONSE,
            reason: 'Failed to get the response body as a string',
            cause: e
          });
        }).then(function (text) {
          var idNum;
          var idStr;
          if (isNaN(parseInt(id))) {
            idStr = id;
            idNum = null;
          } else {
            idStr = null;
            idNum = id;
          }
          return Response.value(new StorageUpdateResult(url, text, idNum, idStr));
        });
      });
    };
    StorageService.prototype._deleteResource = function (_a) {
      var type = _a.type,
        idNum = _a.idNum,
        idStr = _a.idStr,
        extra = _a.extra;
      return this._turmsClient.driver.send({
        deleteResourceRequest: {
          type: type,
          idNum: idNum,
          idStr: idStr,
          extra: extra
        }
      }).then(function (n) {
        return Response.fromNotification(n);
      });
    };
    StorageService.prototype._queryResource = function (url) {
      return unfetch(url).catch(function (e) {
        throw ResponseError.from({
          code: ResponseStatusCode$1.HTTP_ERROR,
          reason: 'Caught an error while sending an HTTP GET request to retrieve the resource',
          cause: e
        });
      }).then(function (res) {
        if (isResponseSuccessful(res)) {
          return res.blob();
        } else {
          throw ResponseError.from({
            code: ResponseStatusCode$1.HTTP_NOT_SUCCESSFUL_RESPONSE,
            reason: "Failed to retrieve the resource because the HTTP response status code is: ".concat(res.status)
          });
        }
      }).then(function (data) {
        return new Promise(function (resolve, reject) {
          var reader = new FileReader();
          reader.onload = function (e) {
            var data = new Uint8Array(e.target.result);
            resolve(Response.value(new StorageResource(url, data)));
          };
          reader.onerror = function () {
            reject(ResponseError.from({
              code: ResponseStatusCode$1.INVALID_RESPONSE,
              reason: 'Failed to get the response body as an array buffer',
              cause: reader.error
            }));
          };
          reader.readAsArrayBuffer(data);
        });
      });
    };
    StorageService.prototype._queryResourceUploadInfo = function (_a) {
      var type = _a.type,
        idNum = _a.idNum,
        idStr = _a.idStr,
        name = _a.name,
        mediaType = _a.mediaType,
        extra = _a.extra;
      return this._turmsClient.driver.send({
        queryResourceUploadInfoRequest: {
          type: type,
          idNum: idNum,
          idStr: idStr,
          name: name,
          mediaType: mediaType,
          extra: extra
        }
      }).then(function (n) {
        return Response.fromNotification(n, function (data) {
          return NotificationUtil.toMap(data.stringsWithVersion.strings);
        });
      });
    };
    StorageService.prototype._queryResourceDownloadInfo = function (_a) {
      var type = _a.type,
        idNum = _a.idNum,
        idStr = _a.idStr,
        extra = _a.extra;
      return this._turmsClient.driver.send({
        queryResourceDownloadInfoRequest: {
          type: type,
          idNum: idNum,
          idStr: idStr,
          extra: extra
        }
      }).then(function (n) {
        return Response.fromNotification(n, function (data) {
          return NotificationUtil.toMap(data.stringsWithVersion.strings);
        });
      });
    };
    StorageService._getBucketName = function (resourceType) {
      return StorageService._RESOURCE_TYPE_TO_BUCKET_NAME[resourceType];
    };
    StorageService._getAndRemoveResourceId = function (data) {
      var name = data[StorageService._RESOURCE_ID_KEY_NAME];
      delete data[StorageService._RESOURCE_ID_KEY_NAME];
      return name;
    };
    StorageService._getAndRemoveResourceUrl = function (data, urlKeyName) {
      if (!urlKeyName) {
        urlKeyName = StorageService._DEFAULT_URL_KEY_NAME;
      }
      var url = data[urlKeyName];
      if (url == null) {
        throw ResponseError.from({
          code: ResponseStatusCode$1.DATA_NOT_FOUND,
          reason: "Could not get the resource URL because the key \"".concat(urlKeyName, "\" does not exist in the data: ").concat(JSON.stringify(data))
        });
      }
      delete data[urlKeyName];
      return url;
    };
    StorageService._RESOURCE_ID_KEY_NAME = 'id';
    StorageService._DEFAULT_URL_KEY_NAME = 'url';
    StorageService._RESOURCE_TYPE_TO_BUCKET_NAME = Object.keys(StorageResourceType).filter(function (value) {
      return value !== StorageResourceType[StorageResourceType.UNRECOGNIZED];
    }).map(function (value) {
      return value.toLowerCase().replace(/_/g, '-');
    });
    return StorageService;
  }();

  var $ = _export;
  var NativePromiseConstructor = promiseNativeConstructor;
  var fails = fails$E;
  var getBuiltIn = getBuiltIn$b;
  var isCallable = isCallable$t;
  var speciesConstructor = speciesConstructor$3;
  var promiseResolve = promiseResolve$2;
  var defineBuiltIn = defineBuiltIn$e;

  var NativePromisePrototype = NativePromiseConstructor && NativePromiseConstructor.prototype;

  // Safari bug https://bugs.webkit.org/show_bug.cgi?id=200829
  var NON_GENERIC = !!NativePromiseConstructor && fails(function () {
    // eslint-disable-next-line unicorn/no-thenable -- required for testing
    NativePromisePrototype['finally'].call({ then: function () { /* empty */ } }, function () { /* empty */ });
  });

  // `Promise.prototype.finally` method
  // https://tc39.es/ecma262/#sec-promise.prototype.finally
  $({ target: 'Promise', proto: true, real: true, forced: NON_GENERIC }, {
    'finally': function (onFinally) {
      var C = speciesConstructor(this, getBuiltIn('Promise'));
      var isFunction = isCallable(onFinally);
      return this.then(
        isFunction ? function (x) {
          return promiseResolve(C, onFinally()).then(function () { return x; });
        } : onFinally,
        isFunction ? function (e) {
          return promiseResolve(C, onFinally()).then(function () { throw e; });
        } : onFinally
      );
    }
  });

  // makes sure that native promise-based APIs `Promise#finally` properly works with patched `Promise#then`
  if (isCallable(NativePromiseConstructor)) {
    var method = getBuiltIn('Promise').prototype['finally'];
    if (NativePromisePrototype['finally'] !== method) {
      defineBuiltIn(NativePromisePrototype, 'finally', method, { unsafe: true });
    }
  }

  var ProfileAccessStrategy;
  (function (ProfileAccessStrategy) {
    ProfileAccessStrategy[ProfileAccessStrategy["ALL"] = 0] = "ALL";
    ProfileAccessStrategy[ProfileAccessStrategy["ALL_EXCEPT_BLOCKED_USERS"] = 1] = "ALL_EXCEPT_BLOCKED_USERS";
    ProfileAccessStrategy[ProfileAccessStrategy["FRIENDS"] = 2] = "FRIENDS";
    ProfileAccessStrategy[ProfileAccessStrategy["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
  })(ProfileAccessStrategy || (ProfileAccessStrategy = {}));

  var ResponseAction;
  (function (ResponseAction) {
    ResponseAction[ResponseAction["ACCEPT"] = 0] = "ACCEPT";
    ResponseAction[ResponseAction["DECLINE"] = 1] = "DECLINE";
    ResponseAction[ResponseAction["IGNORE"] = 2] = "IGNORE";
    ResponseAction[ResponseAction["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
  })(ResponseAction || (ResponseAction = {}));

  var SessionCloseStatus;
  (function (SessionCloseStatus) {
    SessionCloseStatus[SessionCloseStatus["ILLEGAL_REQUEST"] = 100] = "ILLEGAL_REQUEST";
    SessionCloseStatus[SessionCloseStatus["HEARTBEAT_TIMEOUT"] = 110] = "HEARTBEAT_TIMEOUT";
    SessionCloseStatus[SessionCloseStatus["LOGIN_TIMEOUT"] = 111] = "LOGIN_TIMEOUT";
    SessionCloseStatus[SessionCloseStatus["SWITCH"] = 112] = "SWITCH";
    SessionCloseStatus[SessionCloseStatus["SERVER_ERROR"] = 200] = "SERVER_ERROR";
    SessionCloseStatus[SessionCloseStatus["SERVER_CLOSED"] = 201] = "SERVER_CLOSED";
    SessionCloseStatus[SessionCloseStatus["SERVER_UNAVAILABLE"] = 202] = "SERVER_UNAVAILABLE";
    SessionCloseStatus[SessionCloseStatus["CONNECTION_CLOSED"] = 300] = "CONNECTION_CLOSED";
    SessionCloseStatus[SessionCloseStatus["UNKNOWN_ERROR"] = 400] = "UNKNOWN_ERROR";
    SessionCloseStatus[SessionCloseStatus["DISCONNECTED_BY_CLIENT"] = 500] = "DISCONNECTED_BY_CLIENT";
    SessionCloseStatus[SessionCloseStatus["DISCONNECTED_BY_OTHER_DEVICE"] = 501] = "DISCONNECTED_BY_OTHER_DEVICE";
    SessionCloseStatus[SessionCloseStatus["DISCONNECTED_BY_ADMIN"] = 600] = "DISCONNECTED_BY_ADMIN";
    SessionCloseStatus[SessionCloseStatus["USER_IS_DELETED_OR_INACTIVATED"] = 700] = "USER_IS_DELETED_OR_INACTIVATED";
    SessionCloseStatus[SessionCloseStatus["USER_IS_BLOCKED"] = 701] = "USER_IS_BLOCKED";
  })(SessionCloseStatus || (SessionCloseStatus = {}));
  var SessionCloseStatus$1 = SessionCloseStatus;

  var UserLocation = function () {
    function UserLocation(longitude, latitude, details) {
      this.longitude = longitude;
      this.latitude = latitude;
      this.details = details;
    }
    UserLocation.prototype.toString = function () {
      return "".concat(this.longitude, ":").concat(this.latitude, ":").concat(JSON.stringify(this.details));
    };
    return UserLocation;
  }();

  var UserStatus;
  (function (UserStatus) {
    UserStatus[UserStatus["AVAILABLE"] = 0] = "AVAILABLE";
    UserStatus[UserStatus["OFFLINE"] = 1] = "OFFLINE";
    UserStatus[UserStatus["INVISIBLE"] = 2] = "INVISIBLE";
    UserStatus[UserStatus["BUSY"] = 3] = "BUSY";
    UserStatus[UserStatus["DO_NOT_DISTURB"] = 4] = "DO_NOT_DISTURB";
    UserStatus[UserStatus["AWAY"] = 5] = "AWAY";
    UserStatus[UserStatus["BE_RIGHT_BACK"] = 6] = "BE_RIGHT_BACK";
    UserStatus[UserStatus["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
  })(UserStatus || (UserStatus = {}));

  var UserService = function () {
    function UserService(turmsClient) {
      var _this = this;
      this._userInfo = {};
      this._storePassword = false;
      this._onOnlineListeners = [];
      this._onOfflineListeners = [];
      this._turmsClient = turmsClient;
      this._stateStore = turmsClient.driver.stateStore();
      turmsClient.driver.addOnDisconnectedListener(function () {
        return _this._changeToOffline({
          closeStatus: SessionCloseStatus$1.CONNECTION_CLOSED
        });
      });
      turmsClient.driver.addNotificationListener(function (notification) {
        if (notification.closeStatus && _this.isLoggedIn) {
          _this._changeToOffline({
            closeStatus: notification.closeStatus,
            businessStatus: notification.code,
            reason: notification.reason
          });
        }
      });
      turmsClient.driver.addSharedContextNotificationListener("updateLoggedInUserInfo", function (notification) {
        var wasLoggedIn = _this.isLoggedIn;
        _this._userInfo = notification.data;
        var isLoggedIn = _this.isLoggedIn;
        if (wasLoggedIn) {
          if (!isLoggedIn) {
            _this._changeToOffline({
              closeStatus: SessionCloseStatus$1.UNKNOWN_ERROR
            }, false);
          }
        } else {
          if (isLoggedIn) {
            _this._changeToOnline(false);
          }
        }
      });
    }
    Object.defineProperty(UserService.prototype, "userInfo", {
      get: function get() {
        return JSON.parse(JSON.stringify(this._userInfo));
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(UserService.prototype, "isLoggedIn", {
      get: function get() {
        var info = this._userInfo;
        return info && info.onlineStatus >= 0 && info.onlineStatus !== UserStatus.OFFLINE;
      },
      enumerable: false,
      configurable: true
    });
    UserService.prototype.addOnOnlineListener = function (listener) {
      this._onOnlineListeners.push(listener);
    };
    UserService.prototype.addOnOfflineListener = function (listener) {
      this._onOfflineListeners.push(listener);
    };
    UserService.prototype.removeOnOnlineListener = function (listener) {
      this._onOnlineListeners = this._onOnlineListeners.filter(function (cur) {
        return cur !== listener;
      });
    };
    UserService.prototype.removeOnOfflineListener = function (listener) {
      this._onOfflineListeners = this._onOfflineListeners.filter(function (cur) {
        return cur !== listener;
      });
    };
    UserService.getUserLocationFromBrowser = function () {
      return new Promise(function (resolve, reject) {
        navigator.geolocation.getCurrentPosition(function (position) {
          resolve(position);
        }, function (e) {
          reject(e);
        });
      });
    };
    UserService.prototype.login = function (_a) {
      var _this = this;
      var _b;
      var userId = _a.userId,
        password = _a.password,
        deviceType = _a.deviceType,
        deviceDetails = _a.deviceDetails,
        onlineStatus = _a.onlineStatus,
        location = _a.location,
        storePassword = _a.storePassword;
      if (Validator.isFalsy(userId)) {
        return ResponseError.notFalsyPromise('userId');
      }
      var userInfo = {};
      userInfo.userId = userId;
      userInfo.password = storePassword ? password : null;
      try {
        userInfo.deviceType = (_b = UserService._parseDeviceType(deviceType)) !== null && _b !== void 0 ? _b : SystemUtil.getDeviceType();
      } catch (e) {
        return Promise.reject(e);
      }
      userInfo.deviceDetails = deviceDetails;
      try {
        userInfo.onlineStatus = UserService._parseUserStatus(onlineStatus) || UserStatus.AVAILABLE;
      } catch (e) {
        return Promise.reject(e);
      }
      if (location) {
        var parsedLocation = location['coords'] || location;
        if (Validator.isFalsy(parsedLocation.longitude)) {
          return ResponseError.notFalsyPromise('longitude');
        }
        if (Validator.isFalsy(parsedLocation.latitude)) {
          return ResponseError.notFalsyPromise('latitude');
        }
        userInfo.location = new UserLocation(parsedLocation.longitude, parsedLocation.latitude, parsedLocation.details);
      }
      this._storePassword = storePassword;
      return new Promise(function (resolve, reject) {
        var driver = _this._turmsClient.driver;
        var useSharedContext = _this._stateStore.useSharedContext;
        _this._connect(useSharedContext, userId, userInfo.deviceType).then(function () {
          var isLoggedInUser = _this.isLoggedIn && JSON.stringify(_this._userInfo) === JSON.stringify(userInfo);
          if (isLoggedInUser) {
            return false;
          }
          if (!useSharedContext) {
            return true;
          }
          return driver.requestSharedContext({
            type: "requestLogin"
          }).then(function (authorized) {
            if (!authorized) {
              throw new Error('Another session is logging in');
            }
            return true;
          });
        }).then(function (needLogin) {
          if (!needLogin) {
            _this._changeToOnline();
            return resolve(Response.nullValue());
          }
          return driver.send({
            createSessionRequest: {
              version: 1,
              userId: userId,
              password: password,
              deviceType: userInfo.deviceType,
              deviceDetails: userInfo.deviceDetails || {},
              userStatus: userInfo.onlineStatus,
              location: userInfo.location
            }
          }).then(function (n) {
            _this._changeToOnline();
            _this._userInfo = userInfo;
            _this._updateSharedUserInfo();
            return useSharedContext ? driver.requestSharedContext({
              type: "finishLoginRequest"
            }).finally(function () {
              return resolve(Response.fromNotification(n));
            }) : resolve(Response.fromNotification(n));
          }).catch(function (e) {
            return useSharedContext ? driver.requestSharedContext({
              type: "finishLoginRequest"
            }).finally(function () {
              return reject(e);
            }) : reject(e);
          });
        }).catch(function (e) {
          return reject(e);
        });
      });
    };
    UserService.prototype._connect = function (useSharedContext, userId, deviceType) {
      var connect;
      var driver = this._turmsClient.driver;
      if (driver.isConnected) {
        connect = Promise.resolve();
      } else if (useSharedContext) {
        connect = driver.requestSharedContext({
          type: "rebindContextId",
          data: {
            userId: userId,
            deviceType: deviceType
          }
        }).then(function () {
          return driver.connect();
        });
      } else {
        connect = driver.connect();
      }
      return connect;
    };
    UserService.prototype.logout = function (_a) {
      var _this = this;
      var _b = _a === void 0 ? {} : _a,
        _c = _b.immediate,
        immediate = _c === void 0 ? true : _c;
      var promise;
      if (immediate) {
        promise = this._turmsClient.driver.disconnect();
      } else {
        promise = this._turmsClient.driver.send({
          deleteSessionRequest: {}
        }).catch(function (e) {
          if ((e === null || e === void 0 ? void 0 : e.code) !== ResponseStatusCode$1.CLIENT_SESSION_HAS_BEEN_CLOSED) {
            throw e;
          }
        });
      }
      return promise.then(function () {
        _this._changeToOffline({
          closeStatus: SessionCloseStatus$1.DISCONNECTED_BY_CLIENT
        });
        return Response.nullValue();
      });
    };
    UserService.prototype.updateOnlineStatus = function (_a) {
      var _this = this;
      var onlineStatus = _a.onlineStatus;
      if (Validator.isFalsy(onlineStatus)) {
        return ResponseError.notFalsyPromise('onlineStatus');
      }
      try {
        onlineStatus = UserService._parseUserStatus(onlineStatus);
      } catch (e) {
        return Promise.reject(e);
      }
      return this._turmsClient.driver.send({
        updateUserOnlineStatusRequest: {
          deviceTypes: [],
          userStatus: onlineStatus
        }
      }).then(function (n) {
        _this._userInfo.onlineStatus = onlineStatus;
        _this._updateSharedUserInfo();
        return Response.fromNotification(n);
      });
    };
    UserService.prototype.disconnectOnlineDevices = function (_a) {
      var deviceTypes = _a.deviceTypes;
      if (Validator.isFalsy(deviceTypes)) {
        return ResponseError.notFalsyPromise('deviceTypes', true);
      }
      try {
        deviceTypes = deviceTypes.map(function (type) {
          return UserService._parseDeviceType(type);
        });
      } catch (e) {
        return Promise.reject(e);
      }
      return this._turmsClient.driver.send({
        updateUserOnlineStatusRequest: {
          userStatus: UserStatus.OFFLINE,
          deviceTypes: deviceTypes
        }
      }).then(function (n) {
        return Response.fromNotification(n);
      });
    };
    UserService.prototype.updatePassword = function (_a) {
      var _this = this;
      var password = _a.password;
      if (Validator.isFalsy(password)) {
        return ResponseError.notFalsyPromise('password');
      }
      return this._turmsClient.driver.send({
        updateUserRequest: {
          password: password
        }
      }).then(function (n) {
        if (_this._storePassword) {
          _this._userInfo.password = password;
          _this._updateSharedUserInfo();
        }
        return Response.fromNotification(n);
      });
    };
    UserService.prototype.updateProfile = function (_a) {
      var name = _a.name,
        intro = _a.intro,
        profilePicture = _a.profilePicture,
        profileAccessStrategy = _a.profileAccessStrategy;
      if (Validator.areAllFalsy(name, intro, profileAccessStrategy)) {
        return Promise.resolve(Response.nullValue());
      }
      if (typeof profileAccessStrategy === 'string') {
        profileAccessStrategy = ProfileAccessStrategy[profileAccessStrategy];
        if (Validator.isFalsy(profileAccessStrategy)) {
          return ResponseError.notFalsyPromise('profileAccessStrategy');
        }
      }
      return this._turmsClient.driver.send({
        updateUserRequest: {
          name: name,
          intro: intro,
          profilePicture: profilePicture,
          profileAccessStrategy: profileAccessStrategy
        }
      }).then(function (n) {
        return Response.fromNotification(n);
      });
    };
    UserService.prototype.queryUserProfiles = function (_a) {
      var userIds = _a.userIds,
        lastUpdatedDate = _a.lastUpdatedDate;
      if (!(userIds === null || userIds === void 0 ? void 0 : userIds.length)) {
        return Promise.resolve(Response.emptyList());
      }
      return this._turmsClient.driver.send({
        queryUserProfilesRequest: {
          userIds: CollectionUtil.uniqueArray(userIds),
          lastUpdatedDate: DataParser.getDateTimeStr(lastUpdatedDate)
        }
      }).then(function (n) {
        return Response.fromNotification(n, function (data) {
          var _a;
          return NotificationUtil.transformOrEmpty((_a = data.userInfosWithVersion) === null || _a === void 0 ? void 0 : _a.userInfos);
        });
      });
    };
    UserService.prototype.queryNearbyUsers = function (_a) {
      var latitude = _a.latitude,
        longitude = _a.longitude,
        maxCount = _a.maxCount,
        maxDistance = _a.maxDistance,
        withCoordinates = _a.withCoordinates,
        withDistance = _a.withDistance,
        withUserInfo = _a.withUserInfo;
      if (Validator.isFalsy(latitude)) {
        return ResponseError.notFalsyPromise('latitude');
      }
      if (Validator.isFalsy(longitude)) {
        return ResponseError.notFalsyPromise('longitude');
      }
      return this._turmsClient.driver.send({
        queryNearbyUsersRequest: {
          latitude: latitude,
          longitude: longitude,
          maxCount: maxCount,
          maxDistance: maxDistance,
          withCoordinates: withCoordinates,
          withDistance: withDistance,
          withUserInfo: withUserInfo
        }
      }).then(function (n) {
        return Response.fromNotification(n, function (data) {
          var _a;
          return NotificationUtil.transformOrEmpty((_a = data.nearbyUsers) === null || _a === void 0 ? void 0 : _a.nearbyUsers);
        });
      });
    };
    UserService.prototype.queryOnlineStatusesRequest = function (_a) {
      var userIds = _a.userIds;
      if (Validator.isFalsy(userIds)) {
        return Promise.resolve(Response.emptyList());
      }
      return this._turmsClient.driver.send({
        queryUserOnlineStatusesRequest: {
          userIds: userIds
        }
      }).then(function (n) {
        return Response.fromNotification(n, function (data) {
          var _a;
          return NotificationUtil.transformOrEmpty((_a = data.userOnlineStatuses) === null || _a === void 0 ? void 0 : _a.statuses);
        });
      });
    };
    UserService.prototype.queryRelationships = function (_a) {
      var relatedUserIds = _a.relatedUserIds,
        isBlocked = _a.isBlocked,
        groupIndexes = _a.groupIndexes,
        lastUpdatedDate = _a.lastUpdatedDate;
      return this._turmsClient.driver.send({
        queryRelationshipsRequest: {
          userIds: relatedUserIds || [],
          blocked: isBlocked,
          groupIndexes: groupIndexes || [],
          lastUpdatedDate: DataParser.getDateTimeStr(lastUpdatedDate)
        }
      }).then(function (n) {
        return Response.fromNotification(n, function (data) {
          return NotificationUtil.transform(data.userRelationshipsWithVersion);
        });
      });
    };
    UserService.prototype.queryRelatedUserIds = function (_a) {
      var _b = _a === void 0 ? {} : _a,
        isBlocked = _b.isBlocked,
        groupIndexes = _b.groupIndexes,
        lastUpdatedDate = _b.lastUpdatedDate;
      return this._turmsClient.driver.send({
        queryRelatedUserIdsRequest: {
          blocked: isBlocked,
          groupIndexes: groupIndexes || [],
          lastUpdatedDate: DataParser.getDateTimeStr(lastUpdatedDate)
        }
      }).then(function (n) {
        return Response.fromNotification(n, function (data) {
          return NotificationUtil.getLongsWithVersion(data);
        });
      });
    };
    UserService.prototype.queryFriends = function (_a) {
      var _b = _a === void 0 ? {} : _a,
        groupIndexes = _b.groupIndexes,
        lastUpdatedDate = _b.lastUpdatedDate;
      return this.queryRelationships({
        isBlocked: false,
        groupIndexes: groupIndexes,
        lastUpdatedDate: lastUpdatedDate
      });
    };
    UserService.prototype.queryBlockedUsers = function (_a) {
      var _b = _a === void 0 ? {} : _a,
        groupIndexes = _b.groupIndexes,
        lastUpdatedDate = _b.lastUpdatedDate;
      return this.queryRelationships({
        isBlocked: true,
        groupIndexes: groupIndexes,
        lastUpdatedDate: lastUpdatedDate
      });
    };
    UserService.prototype.createRelationship = function (_a) {
      var userId = _a.userId,
        isBlocked = _a.isBlocked,
        groupIndex = _a.groupIndex;
      if (Validator.isFalsy(userId)) {
        return ResponseError.notFalsyPromise('userId');
      }
      if (Validator.isFalsy(isBlocked)) {
        return ResponseError.notFalsyPromise('isBlocked');
      }
      return this._turmsClient.driver.send({
        createRelationshipRequest: {
          userId: userId,
          blocked: isBlocked,
          groupIndex: groupIndex
        }
      }).then(function (n) {
        return Response.fromNotification(n);
      });
    };
    UserService.prototype.createFriendRelationship = function (_a) {
      var userId = _a.userId,
        groupIndex = _a.groupIndex;
      return this.createRelationship({
        userId: userId,
        groupIndex: groupIndex,
        isBlocked: false
      });
    };
    UserService.prototype.createBlockedUserRelationship = function (_a) {
      var userId = _a.userId,
        groupIndex = _a.groupIndex;
      return this.createRelationship({
        userId: userId,
        groupIndex: groupIndex,
        isBlocked: true
      });
    };
    UserService.prototype.deleteRelationship = function (_a) {
      var relatedUserId = _a.relatedUserId,
        deleteGroupIndex = _a.deleteGroupIndex,
        targetGroupIndex = _a.targetGroupIndex;
      if (Validator.isFalsy(relatedUserId)) {
        return ResponseError.notFalsyPromise('relatedUserId');
      }
      return this._turmsClient.driver.send({
        deleteRelationshipRequest: {
          userId: relatedUserId,
          groupIndex: deleteGroupIndex,
          targetGroupIndex: targetGroupIndex
        }
      }).then(function (n) {
        return Response.fromNotification(n);
      });
    };
    UserService.prototype.updateRelationship = function (_a) {
      var relatedUserId = _a.relatedUserId,
        isBlocked = _a.isBlocked,
        groupIndex = _a.groupIndex;
      if (Validator.isFalsy(relatedUserId)) {
        return ResponseError.notFalsyPromise('relatedUserId');
      }
      if (Validator.areAllFalsy(isBlocked, groupIndex)) {
        return Promise.resolve(Response.nullValue());
      }
      return this._turmsClient.driver.send({
        updateRelationshipRequest: {
          userId: relatedUserId,
          blocked: isBlocked,
          newGroupIndex: groupIndex
        }
      }).then(function (n) {
        return Response.fromNotification(n);
      });
    };
    UserService.prototype.sendFriendRequest = function (_a) {
      var recipientId = _a.recipientId,
        content = _a.content;
      if (Validator.isFalsy(recipientId)) {
        return ResponseError.notFalsyPromise('recipientId');
      }
      if (Validator.isFalsy(content)) {
        return ResponseError.notFalsyPromise('content');
      }
      return this._turmsClient.driver.send({
        createFriendRequestRequest: {
          recipientId: recipientId,
          content: content
        }
      }).then(function (n) {
        return Response.fromNotification(n, function (data) {
          return NotificationUtil.getLongOrThrow(data);
        });
      });
    };
    UserService.prototype.replyFriendRequest = function (_a) {
      var requestId = _a.requestId,
        responseAction = _a.responseAction,
        reason = _a.reason;
      if (Validator.isFalsy(requestId)) {
        return ResponseError.notFalsyPromise('requestId');
      }
      if (Validator.isFalsy(responseAction)) {
        return ResponseError.notFalsyPromise('responseAction');
      }
      if (typeof responseAction === 'string') {
        responseAction = ResponseAction[responseAction];
        if (Validator.isFalsy(responseAction)) {
          return ResponseError.notFalsyPromise('reponseAction');
        }
      }
      return this._turmsClient.driver.send({
        updateFriendRequestRequest: {
          requestId: requestId,
          responseAction: responseAction,
          reason: reason
        }
      }).then(function (n) {
        return Response.fromNotification(n);
      });
    };
    UserService.prototype.queryFriendRequests = function (_a) {
      var areSentByMe = _a.areSentByMe,
        lastUpdatedDate = _a.lastUpdatedDate;
      return this._turmsClient.driver.send({
        queryFriendRequestsRequest: {
          areSentByMe: areSentByMe,
          lastUpdatedDate: DataParser.getDateTimeStr(lastUpdatedDate)
        }
      }).then(function (n) {
        return Response.fromNotification(n, function (data) {
          return NotificationUtil.transform(data.userFriendRequestsWithVersion);
        });
      });
    };
    UserService.prototype.createRelationshipGroup = function (_a) {
      var name = _a.name;
      if (Validator.isFalsy(name)) {
        return ResponseError.notFalsyPromise('name');
      }
      return this._turmsClient.driver.send({
        createRelationshipGroupRequest: {
          name: name
        }
      }).then(function (n) {
        return Response.fromNotification(n, function (data) {
          return parseInt(NotificationUtil.getLongOrThrow(data));
        });
      });
    };
    UserService.prototype.deleteRelationshipGroups = function (_a) {
      var groupIndex = _a.groupIndex,
        targetGroupIndex = _a.targetGroupIndex;
      if (Validator.isFalsy(groupIndex)) {
        return ResponseError.notFalsyPromise('groupIndex');
      }
      return this._turmsClient.driver.send({
        deleteRelationshipGroupRequest: {
          groupIndex: groupIndex,
          targetGroupIndex: targetGroupIndex
        }
      }).then(function (n) {
        return Response.fromNotification(n);
      });
    };
    UserService.prototype.updateRelationshipGroup = function (_a) {
      var groupIndex = _a.groupIndex,
        newName = _a.newName;
      if (Validator.isFalsy(groupIndex)) {
        return ResponseError.notFalsyPromise('groupIndex');
      }
      if (Validator.isFalsy(newName)) {
        return ResponseError.notFalsyPromise('newName');
      }
      return this._turmsClient.driver.send({
        updateRelationshipGroupRequest: {
          groupIndex: groupIndex,
          newName: newName
        }
      }).then(function (n) {
        return Response.fromNotification(n);
      });
    };
    UserService.prototype.queryRelationshipGroups = function (_a) {
      var _b = _a === void 0 ? {} : _a,
        lastUpdatedDate = _b.lastUpdatedDate;
      return this._turmsClient.driver.send({
        queryRelationshipGroupsRequest: {
          lastUpdatedDate: DataParser.getDateTimeStr(lastUpdatedDate)
        }
      }).then(function (n) {
        return Response.fromNotification(n, function (data) {
          return NotificationUtil.transform(data.userRelationshipGroupsWithVersion);
        });
      });
    };
    UserService.prototype.moveRelatedUserToGroup = function (_a) {
      var relatedUserId = _a.relatedUserId,
        groupIndex = _a.groupIndex;
      if (Validator.isFalsy(relatedUserId)) {
        return ResponseError.notFalsyPromise('relatedUserId');
      }
      if (Validator.isFalsy(groupIndex)) {
        return ResponseError.notFalsyPromise('groupIndex');
      }
      return this._turmsClient.driver.send({
        updateRelationshipRequest: {
          userId: relatedUserId,
          newGroupIndex: groupIndex
        }
      }).then(function (n) {
        return Response.fromNotification(n);
      });
    };
    UserService.prototype.updateLocation = function (_a) {
      var latitude = _a.latitude,
        longitude = _a.longitude,
        details = _a.details;
      if (Validator.isFalsy(latitude)) {
        return ResponseError.notFalsyPromise('latitude');
      }
      if (Validator.isFalsy(longitude)) {
        return ResponseError.notFalsyPromise('longitude');
      }
      return this._turmsClient.driver.send({
        updateUserLocationRequest: {
          latitude: latitude,
          longitude: longitude,
          details: details || {}
        }
      }).then(function (n) {
        return Response.fromNotification(n);
      });
    };
    UserService._parseDeviceType = function (deviceType) {
      if (typeof deviceType === 'string') {
        deviceType = DeviceType[deviceType];
        if (Validator.isFalsy(deviceType)) {
          throw ResponseError.from({
            code: ResponseStatusCode$1.ILLEGAL_ARGUMENT,
            reason: 'illegal DeviceType'
          });
        }
        return deviceType;
      } else if (typeof deviceType === 'number') {
        if (deviceType >= 0 && deviceType <= DeviceType.UNKNOWN) {
          return deviceType;
        } else {
          throw ResponseError.from({
            code: ResponseStatusCode$1.ILLEGAL_ARGUMENT,
            reason: 'illegal DeviceType'
          });
        }
      }
    };
    UserService._parseUserStatus = function (onlineStatus) {
      if (typeof onlineStatus === 'string') {
        onlineStatus = UserStatus[onlineStatus];
        if (Validator.isFalsy(onlineStatus)) {
          ResponseError.notFalsy('onlineStatus');
        }
      }
      if (onlineStatus === UserStatus.OFFLINE) {
        throw ResponseError.illegalParam('onlineStatus cannot be OFFLINE');
      }
      return onlineStatus;
    };
    UserService.prototype._updateSharedUserInfo = function () {
      if (this._stateStore.useSharedContext) {
        this._turmsClient.driver.requestSharedContext({
          type: "updateLoggedInUserInfo",
          data: this._userInfo
        });
      }
    };
    UserService.prototype._changeToOnline = function (check) {
      if (check === void 0) {
        check = true;
      }
      if (!check || !this.isLoggedIn) {
        this._stateStore.isSessionOpen = true;
        this._onOnlineListeners.forEach(function (listener) {
          return listener();
        });
      }
    };
    UserService.prototype._changeToOffline = function (sessionCloseInfo, check) {
      if (check === void 0) {
        check = true;
      }
      if (!check || this.isLoggedIn) {
        this._userInfo.onlineStatus = UserStatus.OFFLINE;
        this._stateStore.isSessionOpen = false;
        this._onOfflineListeners.forEach(function (listener) {
          return listener(sessionCloseInfo);
        });
      }
    };
    return UserService;
  }();

  var TurmsClient = function () {
    function TurmsClient(wsUrlOrOptions, connectionTimeout, requestTimeout, minRequestInterval, heartbeatInterval, storageServerUrl, useSharedContext) {
      if (_typeof(wsUrlOrOptions) === 'object') {
        connectionTimeout = wsUrlOrOptions.connectionTimeout;
        requestTimeout = wsUrlOrOptions.requestTimeout;
        minRequestInterval = wsUrlOrOptions.minRequestInterval;
        heartbeatInterval = wsUrlOrOptions.heartbeatInterval;
        storageServerUrl = wsUrlOrOptions.storageServerUrl;
        useSharedContext = wsUrlOrOptions.useSharedContext;
        wsUrlOrOptions = wsUrlOrOptions.wsUrl;
      }
      if (useSharedContext && !TurmsClient.isSharedContextSupported()) {
        throw new Error('Cannot use the shared context because the browser does not support SharedWorker');
      }
      this._driver = new TurmsDriver(wsUrlOrOptions, connectionTimeout, requestTimeout, minRequestInterval, heartbeatInterval, useSharedContext);
      this._userService = new UserService(this);
      this._groupService = new GroupService(this);
      this._conversationService = new ConversationService(this);
      this._messageService = new MessageService(this);
      this._storageService = new StorageService(this, storageServerUrl);
      this._notificationService = new NotificationService(this);
    }
    TurmsClient.isSharedContextSupported = function () {
      return typeof SharedWorker === 'function';
    };
    Object.defineProperty(TurmsClient.prototype, "driver", {
      get: function get() {
        return this._driver;
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(TurmsClient.prototype, "userService", {
      get: function get() {
        return this._userService;
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(TurmsClient.prototype, "groupService", {
      get: function get() {
        return this._groupService;
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(TurmsClient.prototype, "conversationService", {
      get: function get() {
        return this._conversationService;
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(TurmsClient.prototype, "messageService", {
      get: function get() {
        return this._messageService;
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(TurmsClient.prototype, "storageService", {
      get: function get() {
        return this._storageService;
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(TurmsClient.prototype, "notificationService", {
      get: function get() {
        return this._notificationService;
      },
      enumerable: false,
      configurable: true
    });
    TurmsClient.prototype.close = function () {
      return this.driver.close();
    };
    TurmsClient.version = version$1;
    return TurmsClient;
  }();

  return TurmsClient;

})();
//# sourceMappingURL=turms-client.iife.js.map

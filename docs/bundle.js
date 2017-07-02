/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 21);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var keys = __webpack_require__(2);
var foreach = __webpack_require__(25);
var hasSymbols = typeof Symbol === 'function' && typeof Symbol() === 'symbol';

var toStr = Object.prototype.toString;

var isFunction = function (fn) {
	return typeof fn === 'function' && toStr.call(fn) === '[object Function]';
};

var arePropertyDescriptorsSupported = function () {
	var obj = {};
	try {
		Object.defineProperty(obj, 'x', { enumerable: false, value: obj });
        /* eslint-disable no-unused-vars, no-restricted-syntax */
        for (var _ in obj) { return false; }
        /* eslint-enable no-unused-vars, no-restricted-syntax */
		return obj.x === obj;
	} catch (e) { /* this is IE 8. */
		return false;
	}
};
var supportsDescriptors = Object.defineProperty && arePropertyDescriptorsSupported();

var defineProperty = function (object, name, value, predicate) {
	if (name in object && (!isFunction(predicate) || !predicate())) {
		return;
	}
	if (supportsDescriptors) {
		Object.defineProperty(object, name, {
			configurable: true,
			enumerable: false,
			value: value,
			writable: true
		});
	} else {
		object[name] = value;
	}
};

var defineProperties = function (object, map) {
	var predicates = arguments.length > 2 ? arguments[2] : {};
	var props = keys(map);
	if (hasSymbols) {
		props = props.concat(Object.getOwnPropertySymbols(map));
	}
	foreach(props, function (name) {
		defineProperty(object, name, map[name], predicates[name]);
	});
};

defineProperties.supportsDescriptors = !!supportsDescriptors;

module.exports = defineProperties;


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__define__ = __webpack_require__(52);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "define", function() { return __WEBPACK_IMPORTED_MODULE_0__define__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__emit__ = __webpack_require__(53);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "emit", function() { return __WEBPACK_IMPORTED_MODULE_1__emit__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__link__ = __webpack_require__(55);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "link", function() { return __WEBPACK_IMPORTED_MODULE_2__link__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__with_component__ = __webpack_require__(56);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "withComponent", function() { return __WEBPACK_IMPORTED_MODULE_3__with_component__["c"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "Component", function() { return __WEBPACK_IMPORTED_MODULE_3__with_component__["a"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "h", function() { return __WEBPACK_IMPORTED_MODULE_3__with_component__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__with_props__ = __webpack_require__(18);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "withProps", function() { return __WEBPACK_IMPORTED_MODULE_4__with_props__["b"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "props", function() { return __WEBPACK_IMPORTED_MODULE_4__with_props__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__with_render__ = __webpack_require__(19);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "withRender", function() { return __WEBPACK_IMPORTED_MODULE_5__with_render__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__with_unique__ = __webpack_require__(20);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "withUnique", function() { return __WEBPACK_IMPORTED_MODULE_6__with_unique__["a"]; });








/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// modified from https://github.com/es-shims/es5-shim
var has = Object.prototype.hasOwnProperty;
var toStr = Object.prototype.toString;
var slice = Array.prototype.slice;
var isArgs = __webpack_require__(24);
var isEnumerable = Object.prototype.propertyIsEnumerable;
var hasDontEnumBug = !isEnumerable.call({ toString: null }, 'toString');
var hasProtoEnumBug = isEnumerable.call(function () {}, 'prototype');
var dontEnums = [
	'toString',
	'toLocaleString',
	'valueOf',
	'hasOwnProperty',
	'isPrototypeOf',
	'propertyIsEnumerable',
	'constructor'
];
var equalsConstructorPrototype = function (o) {
	var ctor = o.constructor;
	return ctor && ctor.prototype === o;
};
var excludedKeys = {
	$console: true,
	$external: true,
	$frame: true,
	$frameElement: true,
	$frames: true,
	$innerHeight: true,
	$innerWidth: true,
	$outerHeight: true,
	$outerWidth: true,
	$pageXOffset: true,
	$pageYOffset: true,
	$parent: true,
	$scrollLeft: true,
	$scrollTop: true,
	$scrollX: true,
	$scrollY: true,
	$self: true,
	$webkitIndexedDB: true,
	$webkitStorageInfo: true,
	$window: true
};
var hasAutomationEqualityBug = (function () {
	/* global window */
	if (typeof window === 'undefined') { return false; }
	for (var k in window) {
		try {
			if (!excludedKeys['$' + k] && has.call(window, k) && window[k] !== null && typeof window[k] === 'object') {
				try {
					equalsConstructorPrototype(window[k]);
				} catch (e) {
					return true;
				}
			}
		} catch (e) {
			return true;
		}
	}
	return false;
}());
var equalsConstructorPrototypeIfNotBuggy = function (o) {
	/* global window */
	if (typeof window === 'undefined' || !hasAutomationEqualityBug) {
		return equalsConstructorPrototype(o);
	}
	try {
		return equalsConstructorPrototype(o);
	} catch (e) {
		return false;
	}
};

var keysShim = function keys(object) {
	var isObject = object !== null && typeof object === 'object';
	var isFunction = toStr.call(object) === '[object Function]';
	var isArguments = isArgs(object);
	var isString = isObject && toStr.call(object) === '[object String]';
	var theKeys = [];

	if (!isObject && !isFunction && !isArguments) {
		throw new TypeError('Object.keys called on a non-object');
	}

	var skipProto = hasProtoEnumBug && isFunction;
	if (isString && object.length > 0 && !has.call(object, 0)) {
		for (var i = 0; i < object.length; ++i) {
			theKeys.push(String(i));
		}
	}

	if (isArguments && object.length > 0) {
		for (var j = 0; j < object.length; ++j) {
			theKeys.push(String(j));
		}
	} else {
		for (var name in object) {
			if (!(skipProto && name === 'prototype') && has.call(object, name)) {
				theKeys.push(String(name));
			}
		}
	}

	if (hasDontEnumBug) {
		var skipConstructor = equalsConstructorPrototypeIfNotBuggy(object);

		for (var k = 0; k < dontEnums.length; ++k) {
			if (!(skipConstructor && dontEnums[k] === 'constructor') && has.call(object, dontEnums[k])) {
				theKeys.push(dontEnums[k]);
			}
		}
	}
	return theKeys;
};

keysShim.shim = function shimObjectKeys() {
	if (Object.keys) {
		var keysWorksWithArguments = (function () {
			// Safari 5.0 bug
			return (Object.keys(arguments) || '').length === 2;
		}(1, 2));
		if (!keysWorksWithArguments) {
			var originalKeys = Object.keys;
			Object.keys = function keys(object) {
				if (isArgs(object)) {
					return originalKeys(slice.call(object));
				} else {
					return originalKeys(object);
				}
			};
		}
	} else {
		Object.keys = keysShim;
	}
	return Object.keys || keysShim;
};

module.exports = keysShim;


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var fnToStr = Function.prototype.toString;

var constructorRegex = /^\s*class /;
var isES6ClassFn = function isES6ClassFn(value) {
	try {
		var fnStr = fnToStr.call(value);
		var singleStripped = fnStr.replace(/\/\/.*\n/g, '');
		var multiStripped = singleStripped.replace(/\/\*[.\s\S]*\*\//g, '');
		var spaceStripped = multiStripped.replace(/\n/mg, ' ').replace(/ {2}/g, ' ');
		return constructorRegex.test(spaceStripped);
	} catch (e) {
		return false; // not a function
	}
};

var tryFunctionObject = function tryFunctionObject(value) {
	try {
		if (isES6ClassFn(value)) { return false; }
		fnToStr.call(value);
		return true;
	} catch (e) {
		return false;
	}
};
var toStr = Object.prototype.toString;
var fnClass = '[object Function]';
var genClass = '[object GeneratorFunction]';
var hasToStringTag = typeof Symbol === 'function' && typeof Symbol.toStringTag === 'symbol';

module.exports = function isCallable(value) {
	if (!value) { return false; }
	if (typeof value !== 'function' && typeof value !== 'object') { return false; }
	if (hasToStringTag) { return tryFunctionObject(value); }
	if (isES6ClassFn(value)) { return false; }
	var strClass = toStr.call(value);
	return strClass === fnClass || strClass === genClass;
};


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

var implementation = __webpack_require__(31);

module.exports = Function.prototype.bind || implementation;


/***/ }),
/* 5 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = dashCase;
/* harmony export (immutable) */ __webpack_exports__["b"] = debounce;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return empty; });
/* harmony export (immutable) */ __webpack_exports__["d"] = keys;
/* harmony export (immutable) */ __webpack_exports__["e"] = sym;
/* unused harmony export uniqueId */
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Mo = typeof MutationObserver === 'function' ? MutationObserver : function () {
  function _class(func) {
    _classCallCheck(this, _class);

    this.func = func;
  }

  _class.prototype.observe = function observe(node) {
    var func = this.func;

    var prop = {
      set: function set() {
        if (typeof Promise === 'undefined') {
          setTimeout(func);
        } else {
          new Promise(function (resolve) {
            return resolve();
          }).then(func);
        }
      }
    };
    Object.defineProperty(node, 'textContent', prop);
  };

  return _class;
}();

function dashCase(str) {
  return str.split(/([_A-Z])/).reduce(function (one, two, idx) {
    var dash = !one || idx % 2 === 0 ? '' : '-';
    two = two === '_' ? '' : two;
    return '' + one + dash + two.toLowerCase();
  });
}

function debounce(cbFunc) {
  var scheduled = false;
  var i = 0;
  var elem = document.createElement('span');
  var observer = new Mo(function () {
    cbFunc();
    scheduled = false;
  });

  observer.observe(elem, { childList: true });

  return function () {
    if (!scheduled) {
      scheduled = true;
      elem.textContent = '' + i;
      i += 1;
    }
  };
}

var empty = function empty(val) {
  return val == null;
};

function keys() {
  var obj = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  var names = Object.getOwnPropertyNames(obj);
  return Object.getOwnPropertySymbols ? names.concat(Object.getOwnPropertySymbols(obj)) : names;
}

function sym(description) {
  return typeof Symbol === 'function' ? Symbol(description ? String(description) : undefined) : uniqueId(description);
}

function uniqueId(description) {
  return (description ? String(description) : '') + 'xxxxxxxx'.replace(/[xy]/g, function (c) {
    var r = Math.random() * 16 | 0;
    var v = c === 'x' ? r : r & 0x3 | 0x8;
    return v.toString(16);
  });
}

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var ES = __webpack_require__(8);
var supportsDescriptors = __webpack_require__(0).supportsDescriptors;

/*! https://mths.be/array-from v0.2.0 by @mathias */
module.exports = function from(arrayLike) {
	var defineProperty = supportsDescriptors ? Object.defineProperty : function put(object, key, descriptor) {
		object[key] = descriptor.value;
	};
	var C = this;
	if (arrayLike === null || typeof arrayLike === 'undefined') {
		throw new TypeError('`Array.from` requires an array-like object, not `null` or `undefined`');
	}
	var items = ES.ToObject(arrayLike);

	var mapFn, T;
	if (typeof arguments[1] !== 'undefined') {
		mapFn = arguments[1];
		if (!ES.IsCallable(mapFn)) {
			throw new TypeError('When provided, the second argument to `Array.from` must be a function');
		}
		if (arguments.length > 2) {
			T = arguments[2];
		}
	}

	var len = ES.ToLength(items.length);
	var A = ES.IsCallable(C) ? ES.ToObject(new C(len)) : new Array(len);
	var k = 0;
	var kValue, mappedValue;
	while (k < len) {
		kValue = items[k];
		if (mapFn) {
			mappedValue = typeof T === 'undefined' ? mapFn(kValue, k) : ES.Call(mapFn, T, [kValue, k]);
		} else {
			mappedValue = kValue;
		}
		defineProperty(A, k, {
			'configurable': true,
			'enumerable': true,
			'value': mappedValue,
			'writable': true
		});
		k += 1;
	}
	A.length = len;
	return A;
};


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var toStr = Object.prototype.toString;
var hasSymbols = typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol';
var symbolToStr = hasSymbols ? Symbol.prototype.toString : toStr;

var $isNaN = __webpack_require__(9);
var $isFinite = __webpack_require__(10);
var MAX_SAFE_INTEGER = Number.MAX_SAFE_INTEGER || Math.pow(2, 53) - 1;

var assign = __webpack_require__(26);
var sign = __webpack_require__(11);
var mod = __webpack_require__(12);
var isPrimitive = __webpack_require__(27);
var toPrimitive = __webpack_require__(28);
var parseInteger = parseInt;
var bind = __webpack_require__(4);
var strSlice = bind.call(Function.call, String.prototype.slice);
var isBinary = bind.call(Function.call, RegExp.prototype.test, /^0b[01]+$/i);
var isOctal = bind.call(Function.call, RegExp.prototype.test, /^0o[0-7]+$/i);
var nonWS = ['\u0085', '\u200b', '\ufffe'].join('');
var nonWSregex = new RegExp('[' + nonWS + ']', 'g');
var hasNonWS = bind.call(Function.call, RegExp.prototype.test, nonWSregex);
var invalidHexLiteral = /^[-+]0x[0-9a-f]+$/i;
var isInvalidHexLiteral = bind.call(Function.call, RegExp.prototype.test, invalidHexLiteral);

// whitespace from: http://es5.github.io/#x15.5.4.20
// implementation from https://github.com/es-shims/es5-shim/blob/v3.4.0/es5-shim.js#L1304-L1324
var ws = [
	'\x09\x0A\x0B\x0C\x0D\x20\xA0\u1680\u180E\u2000\u2001\u2002\u2003',
	'\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028',
	'\u2029\uFEFF'
].join('');
var trimRegex = new RegExp('(^[' + ws + ']+)|([' + ws + ']+$)', 'g');
var replace = bind.call(Function.call, String.prototype.replace);
var trim = function (value) {
	return replace(value, trimRegex, '');
};

var ES5 = __webpack_require__(32);

var hasRegExpMatcher = __webpack_require__(34);

// https://people.mozilla.org/~jorendorff/es6-draft.html#sec-abstract-operations
var ES6 = assign(assign({}, ES5), {

	// https://people.mozilla.org/~jorendorff/es6-draft.html#sec-call-f-v-args
	Call: function Call(F, V) {
		var args = arguments.length > 2 ? arguments[2] : [];
		if (!this.IsCallable(F)) {
			throw new TypeError(F + ' is not a function');
		}
		return F.apply(V, args);
	},

	// https://people.mozilla.org/~jorendorff/es6-draft.html#sec-toprimitive
	ToPrimitive: toPrimitive,

	// https://people.mozilla.org/~jorendorff/es6-draft.html#sec-toboolean
	// ToBoolean: ES5.ToBoolean,

	// http://www.ecma-international.org/ecma-262/6.0/#sec-tonumber
	ToNumber: function ToNumber(argument) {
		var value = isPrimitive(argument) ? argument : toPrimitive(argument, 'number');
		if (typeof value === 'symbol') {
			throw new TypeError('Cannot convert a Symbol value to a number');
		}
		if (typeof value === 'string') {
			if (isBinary(value)) {
				return this.ToNumber(parseInteger(strSlice(value, 2), 2));
			} else if (isOctal(value)) {
				return this.ToNumber(parseInteger(strSlice(value, 2), 8));
			} else if (hasNonWS(value) || isInvalidHexLiteral(value)) {
				return NaN;
			} else {
				var trimmed = trim(value);
				if (trimmed !== value) {
					return this.ToNumber(trimmed);
				}
			}
		}
		return Number(value);
	},

	// https://people.mozilla.org/~jorendorff/es6-draft.html#sec-tointeger
	// ToInteger: ES5.ToNumber,

	// https://people.mozilla.org/~jorendorff/es6-draft.html#sec-toint32
	// ToInt32: ES5.ToInt32,

	// https://people.mozilla.org/~jorendorff/es6-draft.html#sec-touint32
	// ToUint32: ES5.ToUint32,

	// https://people.mozilla.org/~jorendorff/es6-draft.html#sec-toint16
	ToInt16: function ToInt16(argument) {
		var int16bit = this.ToUint16(argument);
		return int16bit >= 0x8000 ? int16bit - 0x10000 : int16bit;
	},

	// https://people.mozilla.org/~jorendorff/es6-draft.html#sec-touint16
	// ToUint16: ES5.ToUint16,

	// https://people.mozilla.org/~jorendorff/es6-draft.html#sec-toint8
	ToInt8: function ToInt8(argument) {
		var int8bit = this.ToUint8(argument);
		return int8bit >= 0x80 ? int8bit - 0x100 : int8bit;
	},

	// https://people.mozilla.org/~jorendorff/es6-draft.html#sec-touint8
	ToUint8: function ToUint8(argument) {
		var number = this.ToNumber(argument);
		if ($isNaN(number) || number === 0 || !$isFinite(number)) { return 0; }
		var posInt = sign(number) * Math.floor(Math.abs(number));
		return mod(posInt, 0x100);
	},

	// https://people.mozilla.org/~jorendorff/es6-draft.html#sec-touint8clamp
	ToUint8Clamp: function ToUint8Clamp(argument) {
		var number = this.ToNumber(argument);
		if ($isNaN(number) || number <= 0) { return 0; }
		if (number >= 0xFF) { return 0xFF; }
		var f = Math.floor(argument);
		if (f + 0.5 < number) { return f + 1; }
		if (number < f + 0.5) { return f; }
		if (f % 2 !== 0) { return f + 1; }
		return f;
	},

	// https://people.mozilla.org/~jorendorff/es6-draft.html#sec-tostring
	ToString: function ToString(argument) {
		if (typeof argument === 'symbol') {
			throw new TypeError('Cannot convert a Symbol value to a string');
		}
		return String(argument);
	},

	// https://people.mozilla.org/~jorendorff/es6-draft.html#sec-toobject
	ToObject: function ToObject(value) {
		this.RequireObjectCoercible(value);
		return Object(value);
	},

	// https://people.mozilla.org/~jorendorff/es6-draft.html#sec-topropertykey
	ToPropertyKey: function ToPropertyKey(argument) {
		var key = this.ToPrimitive(argument, String);
		return typeof key === 'symbol' ? symbolToStr.call(key) : this.ToString(key);
	},

	// https://people.mozilla.org/~jorendorff/es6-draft.html#sec-tolength
	ToLength: function ToLength(argument) {
		var len = this.ToInteger(argument);
		if (len <= 0) { return 0; } // includes converting -0 to +0
		if (len > MAX_SAFE_INTEGER) { return MAX_SAFE_INTEGER; }
		return len;
	},

	// http://www.ecma-international.org/ecma-262/6.0/#sec-canonicalnumericindexstring
	CanonicalNumericIndexString: function CanonicalNumericIndexString(argument) {
		if (toStr.call(argument) !== '[object String]') {
			throw new TypeError('must be a string');
		}
		if (argument === '-0') { return -0; }
		var n = this.ToNumber(argument);
		if (this.SameValue(this.ToString(n), argument)) { return n; }
		return void 0;
	},

	// https://people.mozilla.org/~jorendorff/es6-draft.html#sec-requireobjectcoercible
	RequireObjectCoercible: ES5.CheckObjectCoercible,

	// https://people.mozilla.org/~jorendorff/es6-draft.html#sec-isarray
	IsArray: Array.isArray || function IsArray(argument) {
		return toStr.call(argument) === '[object Array]';
	},

	// https://people.mozilla.org/~jorendorff/es6-draft.html#sec-iscallable
	// IsCallable: ES5.IsCallable,

	// https://people.mozilla.org/~jorendorff/es6-draft.html#sec-isconstructor
	IsConstructor: function IsConstructor(argument) {
		return typeof argument === 'function' && !!argument.prototype; // unfortunately there's no way to truly check this without try/catch `new argument`
	},

	// https://people.mozilla.org/~jorendorff/es6-draft.html#sec-isextensible-o
	IsExtensible: function IsExtensible(obj) {
		if (!Object.preventExtensions) { return true; }
		if (isPrimitive(obj)) {
			return false;
		}
		return Object.isExtensible(obj);
	},

	// https://people.mozilla.org/~jorendorff/es6-draft.html#sec-isinteger
	IsInteger: function IsInteger(argument) {
		if (typeof argument !== 'number' || $isNaN(argument) || !$isFinite(argument)) {
			return false;
		}
		var abs = Math.abs(argument);
		return Math.floor(abs) === abs;
	},

	// https://people.mozilla.org/~jorendorff/es6-draft.html#sec-ispropertykey
	IsPropertyKey: function IsPropertyKey(argument) {
		return typeof argument === 'string' || typeof argument === 'symbol';
	},

	// http://www.ecma-international.org/ecma-262/6.0/#sec-isregexp
	IsRegExp: function IsRegExp(argument) {
		if (!argument || typeof argument !== 'object') {
			return false;
		}
		if (hasSymbols) {
			var isRegExp = argument[Symbol.match];
			if (typeof isRegExp !== 'undefined') {
				return ES5.ToBoolean(isRegExp);
			}
		}
		return hasRegExpMatcher(argument);
	},

	// https://people.mozilla.org/~jorendorff/es6-draft.html#sec-samevalue
	// SameValue: ES5.SameValue,

	// https://people.mozilla.org/~jorendorff/es6-draft.html#sec-samevaluezero
	SameValueZero: function SameValueZero(x, y) {
		return (x === y) || ($isNaN(x) && $isNaN(y));
	},

	/**
	 * 7.3.2 GetV (V, P)
	 * 1. Assert: IsPropertyKey(P) is true.
	 * 2. Let O be ToObject(V).
	 * 3. ReturnIfAbrupt(O).
	 * 4. Return O.[[Get]](P, V).
	 */
	GetV: function GetV(V, P) {
		// 7.3.2.1
		if (!this.IsPropertyKey(P)) {
			throw new TypeError('Assertion failed: IsPropertyKey(P) is not true');
		}

		// 7.3.2.2-3
		var O = this.ToObject(V);

		// 7.3.2.4
		return O[P];
	},

	/**
	 * 7.3.9 - http://www.ecma-international.org/ecma-262/6.0/#sec-getmethod
	 * 1. Assert: IsPropertyKey(P) is true.
	 * 2. Let func be GetV(O, P).
	 * 3. ReturnIfAbrupt(func).
	 * 4. If func is either undefined or null, return undefined.
	 * 5. If IsCallable(func) is false, throw a TypeError exception.
	 * 6. Return func.
	 */
	GetMethod: function GetMethod(O, P) {
		// 7.3.9.1
		if (!this.IsPropertyKey(P)) {
			throw new TypeError('Assertion failed: IsPropertyKey(P) is not true');
		}

		// 7.3.9.2
		var func = this.GetV(O, P);

		// 7.3.9.4
		if (func == null) {
			return undefined;
		}

		// 7.3.9.5
		if (!this.IsCallable(func)) {
			throw new TypeError(P + 'is not a function');
		}

		// 7.3.9.6
		return func;
	},

	/**
	 * 7.3.1 Get (O, P) - http://www.ecma-international.org/ecma-262/6.0/#sec-get-o-p
	 * 1. Assert: Type(O) is Object.
	 * 2. Assert: IsPropertyKey(P) is true.
	 * 3. Return O.[[Get]](P, O).
	 */
	Get: function Get(O, P) {
		// 7.3.1.1
		if (this.Type(O) !== 'Object') {
			throw new TypeError('Assertion failed: Type(O) is not Object');
		}
		// 7.3.1.2
		if (!this.IsPropertyKey(P)) {
			throw new TypeError('Assertion failed: IsPropertyKey(P) is not true');
		}
		// 7.3.1.3
		return O[P];
	},

	Type: function Type(x) {
		if (typeof x === 'symbol') {
			return 'Symbol';
		}
		return ES5.Type(x);
	},

	// http://www.ecma-international.org/ecma-262/6.0/#sec-speciesconstructor
	SpeciesConstructor: function SpeciesConstructor(O, defaultConstructor) {
		if (this.Type(O) !== 'Object') {
			throw new TypeError('Assertion failed: Type(O) is not Object');
		}
		var C = O.constructor;
		if (typeof C === 'undefined') {
			return defaultConstructor;
		}
		if (this.Type(C) !== 'Object') {
			throw new TypeError('O.constructor is not an Object');
		}
		var S = hasSymbols && Symbol.species ? C[Symbol.species] : undefined;
		if (S == null) {
			return defaultConstructor;
		}
		if (this.IsConstructor(S)) {
			return S;
		}
		throw new TypeError('no constructor found');
	}
});

delete ES6.CheckObjectCoercible; // renamed in ES6 to RequireObjectCoercible

module.exports = ES6;


/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = Number.isNaN || function isNaN(a) {
	return a !== a;
};


/***/ }),
/* 10 */
/***/ (function(module, exports) {

var $isNaN = Number.isNaN || function (a) { return a !== a; };

module.exports = Number.isFinite || function (x) { return typeof x === 'number' && !$isNaN(x) && x !== Infinity && x !== -Infinity; };


/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = function sign(number) {
	return number >= 0 ? 1 : -1;
};


/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = function mod(number, modulo) {
	var remain = number % modulo;
	return Math.floor(remain >= 0 ? remain : remain + modulo);
};


/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = function isPrimitive(value) {
	return value === null || (typeof value !== 'function' && typeof value !== 'object');
};


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var ES = __webpack_require__(8);
var implementation = __webpack_require__(7);

var tryCall = function (fn) {
	try {
		fn();
		return true;
	} catch (e) {
		return false;
	}
};

module.exports = function getPolyfill() {
	var implemented = ES.IsCallable(Array.from)
		&& tryCall(function () { Array.from({ 'length': -Infinity }); })
		&& !tryCall(function () { Array.from([], undefined); });

	return implemented ? Array.from : implementation;
};


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// modified from https://github.com/es-shims/es6-shim
var keys = __webpack_require__(2);
var bind = __webpack_require__(4);
var canBeObject = function (obj) {
	return typeof obj !== 'undefined' && obj !== null;
};
var hasSymbols = __webpack_require__(38)();
var toObject = Object;
var push = bind.call(Function.call, Array.prototype.push);
var propIsEnumerable = bind.call(Function.call, Object.prototype.propertyIsEnumerable);
var originalGetSymbols = hasSymbols ? Object.getOwnPropertySymbols : null;

module.exports = function assign(target, source1) {
	if (!canBeObject(target)) { throw new TypeError('target must be an object'); }
	var objTarget = toObject(target);
	var s, source, i, props, syms, value, key;
	for (s = 1; s < arguments.length; ++s) {
		source = toObject(arguments[s]);
		props = keys(source);
		var getSymbols = hasSymbols && (Object.getOwnPropertySymbols || originalGetSymbols);
		if (getSymbols) {
			syms = getSymbols(source);
			for (i = 0; i < syms.length; ++i) {
				key = syms[i];
				if (propIsEnumerable(source, key)) {
					push(props, key);
				}
			}
		}
		for (i = 0; i < props.length; ++i) {
			key = props[i];
			value = source[key];
			if (propIsEnumerable(source, key)) {
				objTarget[key] = value;
			}
		}
	}
	return objTarget;
};


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var implementation = __webpack_require__(15);

var lacksProperEnumerationOrder = function () {
	if (!Object.assign) {
		return false;
	}
	// v8, specifically in node 4.x, has a bug with incorrect property enumeration order
	// note: this does not detect the bug unless there's 20 characters
	var str = 'abcdefghijklmnopqrst';
	var letters = str.split('');
	var map = {};
	for (var i = 0; i < letters.length; ++i) {
		map[letters[i]] = letters[i];
	}
	var obj = Object.assign({}, map);
	var actual = '';
	for (var k in obj) {
		actual += k;
	}
	return str !== actual;
};

var assignHasPendingExceptions = function () {
	if (!Object.assign || !Object.preventExtensions) {
		return false;
	}
	// Firefox 37 still has "pending exception" logic in its Object.assign implementation,
	// which is 72% slower than our shim, and Firefox 40's native implementation.
	var thrower = Object.preventExtensions({ 1: 2 });
	try {
		Object.assign(thrower, 'xy');
	} catch (e) {
		return thrower[1] === 'y';
	}
	return false;
};

module.exports = function getPolyfill() {
	if (!Object.assign) {
		return implementation;
	}
	if (lacksProperEnumerationOrder()) {
		return implementation;
	}
	if (assignHasPendingExceptions()) {
		return implementation;
	}
	return Object.assign;
};


/***/ }),
/* 17 */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return withProps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return props; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util_with_props__ = __webpack_require__(58);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





var withProps = function withProps() {
  var Base = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : HTMLElement;
  return function (_Base) {
    _inherits(_class2, _Base);

    _createClass(_class2, [{
      key: 'props',
      get: function get() {
        var _this2 = this;

        return __WEBPACK_IMPORTED_MODULE_0__util__["d" /* keys */](this.constructor.props).reduce(function (prev, curr) {
          prev[curr] = _this2[curr];
          return prev;
        }, {});
      },
      set: function set(props) {
        var _this3 = this;

        var ctorProps = this.constructor.props;
        __WEBPACK_IMPORTED_MODULE_0__util__["d" /* keys */](props).forEach(function (k) {
          return k in ctorProps && (_this3[k] = props[k]);
        });
      }
    }], [{
      key: 'observedAttributes',
      get: function get() {
        var props = __WEBPACK_IMPORTED_MODULE_1__util_with_props__["b" /* normPropDefs */](this);
        return __WEBPACK_IMPORTED_MODULE_0__util__["d" /* keys */](props).map(function (k) {
          return props[k].attribute;
        }).filter(Boolean)
        // $FlowFixMe - find out how to do a.source while accepting non-object primitives.
        .map(function (a) {
          return a.source;
        }).concat(this._observedAttributes || []);
      },
      set: function set(attrs) {
        this._observedAttributes = attrs;
      }
    }]);

    function _class2() {
      _classCallCheck(this, _class2);

      var _this = _possibleConstructorReturn(this, _Base.call(this));

      _this._updateCallback = function () {
        if (_this._updating || !_this._connected) {
          return;
        }

        // Flag as rendering. This prevents anything from trying to render - or
        // queueing a render - while there is a pending render.
        _this._updating = true;

        // Prev / next props for prop lifecycle callbacks.
        var prev = _this._prevProps;
        var next = _this._prevProps = _this.props;

        // Always call set, but only call changed if the props updated.
        _this.propsSetCallback(next, prev);
        if (_this.propsUpdatedCallback(next, prev)) {
          _this.propsChangedCallback(next, prev);
        }

        _this._updating = false;
      };

      if (_this._constructed) return _possibleConstructorReturn(_this);
      _this._constructed = true;
      __WEBPACK_IMPORTED_MODULE_1__util_with_props__["a" /* defineProps */](_this.constructor);
      _this._updateDebounced = __WEBPACK_IMPORTED_MODULE_0__util__["b" /* debounce */](_this._updateCallback);
      return _this;
    }

    _class2.prototype.connectedCallback = function connectedCallback() {
      if (this._connected) return;
      this._connected = true;
      // $FlowFixMe - HTMLElement doesn't implement connectedCallback.
      if (_Base.prototype.connectedCallback) _Base.prototype.connectedCallback.call(this);
      this._updateDebounced();
    };

    _class2.prototype.disconnectedCallback = function disconnectedCallback() {
      if (!this._connected) return;
      this._connected = false;
      // $FlowFixMe - HTMLElement doesn't implement disConnectedCallback.
      if (_Base.prototype.disconnectedCallback) _Base.prototype.disconnectedCallback.call(this);
    };

    // Called when props actually change.


    _class2.prototype.propsChangedCallback = function propsChangedCallback() {};

    // Called whenever props are set, even if they don't change.


    _class2.prototype.propsSetCallback = function propsSetCallback() {};

    // Called to see if the props changed.


    _class2.prototype.propsUpdatedCallback = function propsUpdatedCallback(next, prev) {
      return !prev || __WEBPACK_IMPORTED_MODULE_0__util__["d" /* keys */](prev).some(function (k) {
        return prev[k] !== next[k];
      });
    };

    _class2.prototype.attributeChangedCallback = function attributeChangedCallback(name, oldValue, newValue) {
      // $FlowFixMe - HTMLElement doesn't implement attributeChangedCallback.
      if (_Base.prototype.attributeChangedCallback) _Base.prototype.attributeChangedCallback.call(this, name, oldValue, newValue);
      __WEBPACK_IMPORTED_MODULE_1__util_with_props__["c" /* syncAttributeToProperty */](this, name, newValue);
    };

    // Invokes the complete render lifecycle.


    return _class2;
  }(Base);
};

var parse = JSON.parse,
    stringify = JSON.stringify;

var attribute = Object.freeze({ source: true });
var createProp = function createProp(obj) {
  return Object.freeze(_extends({ attribute: attribute }, obj));
};
var zeroOrNumber = function zeroOrNumber(val) {
  return __WEBPACK_IMPORTED_MODULE_0__util__["c" /* empty */](val) ? 0 : Number(val);
};

var array = createProp({
  coerce: function coerce(val) {
    return Array.isArray(val) ? val : __WEBPACK_IMPORTED_MODULE_0__util__["c" /* empty */](val) ? null : [val];
  },
  default: Object.freeze([]),
  deserialize: parse,
  serialize: stringify
});

var boolean = createProp({
  coerce: Boolean,
  default: false,
  deserialize: function deserialize(val) {
    return !__WEBPACK_IMPORTED_MODULE_0__util__["c" /* empty */](val);
  },
  serialize: function serialize(val) {
    return val ? '' : null;
  }
});

var number = createProp({
  default: 0,
  coerce: zeroOrNumber,
  deserialize: zeroOrNumber,
  serialize: function serialize(val) {
    return __WEBPACK_IMPORTED_MODULE_0__util__["c" /* empty */](val) ? null : String(Number(val));
  }
});

var object = createProp({
  default: Object.freeze({}),
  deserialize: parse,
  serialize: stringify
});

var string = createProp({
  default: '',
  coerce: String,
  serialize: function serialize(val) {
    return __WEBPACK_IMPORTED_MODULE_0__util__["c" /* empty */](val) ? null : String(val);
  }
});

var props = {
  array: array,
  boolean: boolean,
  number: number,
  object: object,
  string: string
};

/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return withRender; });
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var attachShadowOptions = { mode: 'open' };

function attachShadow(elem) {
  return elem.attachShadow ? elem.attachShadow(attachShadowOptions) : elem;
}

var withRender = function withRender() {
  var Base = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : HTMLElement;
  return function (_Base) {
    _inherits(_class, _Base);

    function _class() {
      _classCallCheck(this, _class);

      return _possibleConstructorReturn(this, _Base.apply(this, arguments));
    }

    _class.prototype.propsChangedCallback = function propsChangedCallback() {
      var _this2 = this;

      this.rendererCallback(this.renderRoot, function () {
        return _this2.renderCallback(_this2);
      });
      this.renderedCallback();
    };

    _class.prototype.renderCallback = function renderCallback() {};

    _class.prototype.renderedCallback = function renderedCallback() {};

    _class.prototype.rendererCallback = function rendererCallback() {};

    _createClass(_class, [{
      key: 'renderRoot',
      get: function get() {
        this._shadowRoot = this._shadowRoot || (this._shadowRoot = this.shadowRoot || attachShadow(this));
        return this._shadowRoot;
      }
    }]);

    return _class;
  }(Base);
};

/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return withUnique; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util_with_unique__ = __webpack_require__(59);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



var withUnique = function withUnique() {
  var Base = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : HTMLElement;
  return function (_Base) {
    _inherits(_class, _Base);

    function _class() {
      _classCallCheck(this, _class);

      return _possibleConstructorReturn(this, _Base.apply(this, arguments));
    }

    _createClass(_class, null, [{
      key: 'is',
      get: function get() {
        return this._is || (this._is = __WEBPACK_IMPORTED_MODULE_0__util_with_unique__["a" /* generateName */](this));
      },
      set: function set(is) {
        this._is = is;
      }
    }]);

    return _class;
  }(Base);
};

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(22);
module.exports = __webpack_require__(49);


/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

// NOTE!!!
//
// We have to load polyfills directly from source as non-minified files are not
// published by the polyfills. An issue was raised to discuss this problem and
// to see if it can be resolved.
//
// See https://github.com/webcomponents/custom-elements/issues/45

// ES2015 polyfills required for the polyfills to work in older browsers.
__webpack_require__(23).shim();
__webpack_require__(37).shim();
__webpack_require__(40).polyfill();

// We have to include this first so that it can patch native. This must be done
// before any polyfills are loaded.
__webpack_require__(42);

// Template polyfill is necessary to use shadycss in IE11
// this comes before custom elements because of
// https://github.com/webcomponents/template/blob/master/template.js#L39
__webpack_require__(43);

// This comes after the native shim because it requries it to be patched first.
__webpack_require__(44);

// Force the polyfill in Safari 10.0.0 and 10.0.1.
var _window = window,
    navigator = _window.navigator;
var userAgent = navigator.userAgent;

var safari = userAgent.indexOf('Safari/60') !== -1;
var safariVersion = safari && userAgent.match(/Version\/([^\s]+)/)[1];
var safariVersions = [0, 1].map(function (v) {
  return '10.0.' + v;
}).concat(['10.0']);

if (safari && safariVersions.indexOf(safariVersion) > -1) {
  window.ShadyDOM = { force: true };
}

// ShadyDOM comes first. Both because it may need to be forced and the
// ShadyCSS polyfill requires it to function.
__webpack_require__(45);
__webpack_require__(46);
__webpack_require__(47);
__webpack_require__(48);

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var define = __webpack_require__(0);

var implementation = __webpack_require__(7);
var getPolyfill = __webpack_require__(14);
var shim = __webpack_require__(36);

// eslint-disable-next-line no-unused-vars
var boundFromShim = function from(array) {
    // eslint-disable-next-line no-invalid-this
	return implementation.apply(this || Array, arguments);
};

define(boundFromShim, {
	'getPolyfill': getPolyfill,
	'implementation': implementation,
	'shim': shim
});

module.exports = boundFromShim;


/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var toStr = Object.prototype.toString;

module.exports = function isArguments(value) {
	var str = toStr.call(value);
	var isArgs = str === '[object Arguments]';
	if (!isArgs) {
		isArgs = str !== '[object Array]' &&
			value !== null &&
			typeof value === 'object' &&
			typeof value.length === 'number' &&
			value.length >= 0 &&
			toStr.call(value.callee) === '[object Function]';
	}
	return isArgs;
};


/***/ }),
/* 25 */
/***/ (function(module, exports) {


var hasOwn = Object.prototype.hasOwnProperty;
var toString = Object.prototype.toString;

module.exports = function forEach (obj, fn, ctx) {
    if (toString.call(fn) !== '[object Function]') {
        throw new TypeError('iterator must be a function');
    }
    var l = obj.length;
    if (l === +l) {
        for (var i = 0; i < l; i++) {
            fn.call(ctx, obj[i], i, obj);
        }
    } else {
        for (var k in obj) {
            if (hasOwn.call(obj, k)) {
                fn.call(ctx, obj[k], k, obj);
            }
        }
    }
};



/***/ }),
/* 26 */
/***/ (function(module, exports) {

var has = Object.prototype.hasOwnProperty;
module.exports = Object.assign || function assign(target, source) {
	for (var key in source) {
		if (has.call(source, key)) {
			target[key] = source[key];
		}
	}
	return target;
};


/***/ }),
/* 27 */
/***/ (function(module, exports) {

module.exports = function isPrimitive(value) {
	return value === null || (typeof value !== 'function' && typeof value !== 'object');
};


/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var hasSymbols = typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol';

var isPrimitive = __webpack_require__(13);
var isCallable = __webpack_require__(3);
var isDate = __webpack_require__(29);
var isSymbol = __webpack_require__(30);

var ordinaryToPrimitive = function OrdinaryToPrimitive(O, hint) {
	if (typeof O === 'undefined' || O === null) {
		throw new TypeError('Cannot call method on ' + O);
	}
	if (typeof hint !== 'string' || (hint !== 'number' && hint !== 'string')) {
		throw new TypeError('hint must be "string" or "number"');
	}
	var methodNames = hint === 'string' ? ['toString', 'valueOf'] : ['valueOf', 'toString'];
	var method, result, i;
	for (i = 0; i < methodNames.length; ++i) {
		method = O[methodNames[i]];
		if (isCallable(method)) {
			result = method.call(O);
			if (isPrimitive(result)) {
				return result;
			}
		}
	}
	throw new TypeError('No default value');
};

var GetMethod = function GetMethod(O, P) {
	var func = O[P];
	if (func !== null && typeof func !== 'undefined') {
		if (!isCallable(func)) {
			throw new TypeError(func + ' returned for property ' + P + ' of object ' + O + ' is not a function');
		}
		return func;
	}
};

// http://www.ecma-international.org/ecma-262/6.0/#sec-toprimitive
module.exports = function ToPrimitive(input, PreferredType) {
	if (isPrimitive(input)) {
		return input;
	}
	var hint = 'default';
	if (arguments.length > 1) {
		if (PreferredType === String) {
			hint = 'string';
		} else if (PreferredType === Number) {
			hint = 'number';
		}
	}

	var exoticToPrim;
	if (hasSymbols) {
		if (Symbol.toPrimitive) {
			exoticToPrim = GetMethod(input, Symbol.toPrimitive);
		} else if (isSymbol(input)) {
			exoticToPrim = Symbol.prototype.valueOf;
		}
	}
	if (typeof exoticToPrim !== 'undefined') {
		var result = exoticToPrim.call(input, hint);
		if (isPrimitive(result)) {
			return result;
		}
		throw new TypeError('unable to convert exotic object to primitive');
	}
	if (hint === 'default' && (isDate(input) || isSymbol(input))) {
		hint = 'string';
	}
	return ordinaryToPrimitive(input, hint === 'default' ? 'number' : hint);
};


/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var getDay = Date.prototype.getDay;
var tryDateObject = function tryDateObject(value) {
	try {
		getDay.call(value);
		return true;
	} catch (e) {
		return false;
	}
};

var toStr = Object.prototype.toString;
var dateClass = '[object Date]';
var hasToStringTag = typeof Symbol === 'function' && typeof Symbol.toStringTag === 'symbol';

module.exports = function isDateObject(value) {
	if (typeof value !== 'object' || value === null) { return false; }
	return hasToStringTag ? tryDateObject(value) : toStr.call(value) === dateClass;
};


/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var toStr = Object.prototype.toString;
var hasSymbols = typeof Symbol === 'function' && typeof Symbol() === 'symbol';

if (hasSymbols) {
	var symToStr = Symbol.prototype.toString;
	var symStringRegex = /^Symbol\(.*\)$/;
	var isSymbolObject = function isSymbolObject(value) {
		if (typeof value.valueOf() !== 'symbol') { return false; }
		return symStringRegex.test(symToStr.call(value));
	};
	module.exports = function isSymbol(value) {
		if (typeof value === 'symbol') { return true; }
		if (toStr.call(value) !== '[object Symbol]') { return false; }
		try {
			return isSymbolObject(value);
		} catch (e) {
			return false;
		}
	};
} else {
	module.exports = function isSymbol(value) {
		// this environment does not support Symbols.
		return false;
	};
}


/***/ }),
/* 31 */
/***/ (function(module, exports) {

var ERROR_MESSAGE = 'Function.prototype.bind called on incompatible ';
var slice = Array.prototype.slice;
var toStr = Object.prototype.toString;
var funcType = '[object Function]';

module.exports = function bind(that) {
    var target = this;
    if (typeof target !== 'function' || toStr.call(target) !== funcType) {
        throw new TypeError(ERROR_MESSAGE + target);
    }
    var args = slice.call(arguments, 1);

    var bound;
    var binder = function () {
        if (this instanceof bound) {
            var result = target.apply(
                this,
                args.concat(slice.call(arguments))
            );
            if (Object(result) === result) {
                return result;
            }
            return this;
        } else {
            return target.apply(
                that,
                args.concat(slice.call(arguments))
            );
        }
    };

    var boundLength = Math.max(0, target.length - args.length);
    var boundArgs = [];
    for (var i = 0; i < boundLength; i++) {
        boundArgs.push('$' + i);
    }

    bound = Function('binder', 'return function (' + boundArgs.join(',') + '){ return binder.apply(this,arguments); }')(binder);

    if (target.prototype) {
        var Empty = function Empty() {};
        Empty.prototype = target.prototype;
        bound.prototype = new Empty();
        Empty.prototype = null;
    }

    return bound;
};


/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var $isNaN = __webpack_require__(9);
var $isFinite = __webpack_require__(10);

var sign = __webpack_require__(11);
var mod = __webpack_require__(12);

var IsCallable = __webpack_require__(3);
var toPrimitive = __webpack_require__(33);

// https://es5.github.io/#x9
var ES5 = {
	ToPrimitive: toPrimitive,

	ToBoolean: function ToBoolean(value) {
		return Boolean(value);
	},
	ToNumber: function ToNumber(value) {
		return Number(value);
	},
	ToInteger: function ToInteger(value) {
		var number = this.ToNumber(value);
		if ($isNaN(number)) { return 0; }
		if (number === 0 || !$isFinite(number)) { return number; }
		return sign(number) * Math.floor(Math.abs(number));
	},
	ToInt32: function ToInt32(x) {
		return this.ToNumber(x) >> 0;
	},
	ToUint32: function ToUint32(x) {
		return this.ToNumber(x) >>> 0;
	},
	ToUint16: function ToUint16(value) {
		var number = this.ToNumber(value);
		if ($isNaN(number) || number === 0 || !$isFinite(number)) { return 0; }
		var posInt = sign(number) * Math.floor(Math.abs(number));
		return mod(posInt, 0x10000);
	},
	ToString: function ToString(value) {
		return String(value);
	},
	ToObject: function ToObject(value) {
		this.CheckObjectCoercible(value);
		return Object(value);
	},
	CheckObjectCoercible: function CheckObjectCoercible(value, optMessage) {
		/* jshint eqnull:true */
		if (value == null) {
			throw new TypeError(optMessage || 'Cannot call method on ' + value);
		}
		return value;
	},
	IsCallable: IsCallable,
	SameValue: function SameValue(x, y) {
		if (x === y) { // 0 === -0, but they are not identical.
			if (x === 0) { return 1 / x === 1 / y; }
			return true;
		}
		return $isNaN(x) && $isNaN(y);
	},

	// http://www.ecma-international.org/ecma-262/5.1/#sec-8
	Type: function Type(x) {
		if (x === null) {
			return 'Null';
		}
		if (typeof x === 'undefined') {
			return 'Undefined';
		}
		if (typeof x === 'function' || typeof x === 'object') {
			return 'Object';
		}
		if (typeof x === 'number') {
			return 'Number';
		}
		if (typeof x === 'boolean') {
			return 'Boolean';
		}
		if (typeof x === 'string') {
			return 'String';
		}
	}
};

module.exports = ES5;


/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var toStr = Object.prototype.toString;

var isPrimitive = __webpack_require__(13);

var isCallable = __webpack_require__(3);

// https://es5.github.io/#x8.12
var ES5internalSlots = {
	'[[DefaultValue]]': function (O, hint) {
		var actualHint = hint || (toStr.call(O) === '[object Date]' ? String : Number);

		if (actualHint === String || actualHint === Number) {
			var methods = actualHint === String ? ['toString', 'valueOf'] : ['valueOf', 'toString'];
			var value, i;
			for (i = 0; i < methods.length; ++i) {
				if (isCallable(O[methods[i]])) {
					value = O[methods[i]]();
					if (isPrimitive(value)) {
						return value;
					}
				}
			}
			throw new TypeError('No default value');
		}
		throw new TypeError('invalid [[DefaultValue]] hint supplied');
	}
};

// https://es5.github.io/#x9
module.exports = function ToPrimitive(input, PreferredType) {
	if (isPrimitive(input)) {
		return input;
	}
	return ES5internalSlots['[[DefaultValue]]'](input, PreferredType);
};


/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var has = __webpack_require__(35);
var regexExec = RegExp.prototype.exec;
var gOPD = Object.getOwnPropertyDescriptor;

var tryRegexExecCall = function tryRegexExec(value) {
	try {
		var lastIndex = value.lastIndex;
		value.lastIndex = 0;

		regexExec.call(value);
		return true;
	} catch (e) {
		return false;
	} finally {
		value.lastIndex = lastIndex;
	}
};
var toStr = Object.prototype.toString;
var regexClass = '[object RegExp]';
var hasToStringTag = typeof Symbol === 'function' && typeof Symbol.toStringTag === 'symbol';

module.exports = function isRegex(value) {
	if (!value || typeof value !== 'object') {
		return false;
	}
	if (!hasToStringTag) {
		return toStr.call(value) === regexClass;
	}

	var descriptor = gOPD(value, 'lastIndex');
	var hasLastIndexDataProperty = descriptor && has(descriptor, 'value');
	if (!hasLastIndexDataProperty) {
		return false;
	}

	return tryRegexExecCall(value);
};


/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

var bind = __webpack_require__(4);

module.exports = bind.call(Function.call, Object.prototype.hasOwnProperty);


/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var define = __webpack_require__(0);
var getPolyfill = __webpack_require__(14);

module.exports = function shimArrayFrom() {
	var polyfill = getPolyfill();

	define(Array, { 'from': polyfill }, {
		'from': function () {
			return Array.from !== polyfill;
		}
	});

	return polyfill;
};


/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var defineProperties = __webpack_require__(0);

var implementation = __webpack_require__(15);
var getPolyfill = __webpack_require__(16);
var shim = __webpack_require__(39);

var polyfill = getPolyfill();

defineProperties(polyfill, {
	implementation: implementation,
	getPolyfill: getPolyfill,
	shim: shim
});

module.exports = polyfill;


/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var keys = __webpack_require__(2);

module.exports = function hasSymbols() {
	if (typeof Symbol !== 'function' || typeof Object.getOwnPropertySymbols !== 'function') { return false; }
	if (typeof Symbol.iterator === 'symbol') { return true; }

	var obj = {};
	var sym = Symbol('test');
	var symObj = Object(sym);
	if (typeof sym === 'string') { return false; }

	if (Object.prototype.toString.call(sym) !== '[object Symbol]') { return false; }
	if (Object.prototype.toString.call(symObj) !== '[object Symbol]') { return false; }

	// temp disabled per https://github.com/ljharb/object.assign/issues/17
	// if (sym instanceof Symbol) { return false; }
	// temp disabled per https://github.com/WebReflection/get-own-property-symbols/issues/4
	// if (!(symObj instanceof Symbol)) { return false; }

	var symVal = 42;
	obj[sym] = symVal;
	for (sym in obj) { return false; }
	if (keys(obj).length !== 0) { return false; }
	if (typeof Object.keys === 'function' && Object.keys(obj).length !== 0) { return false; }

	if (typeof Object.getOwnPropertyNames === 'function' && Object.getOwnPropertyNames(obj).length !== 0) { return false; }

	var syms = Object.getOwnPropertySymbols(obj);
	if (syms.length !== 1 || syms[0] !== sym) { return false; }

	if (!Object.prototype.propertyIsEnumerable.call(obj, sym)) { return false; }

	if (typeof Object.getOwnPropertyDescriptor === 'function') {
		var descriptor = Object.getOwnPropertyDescriptor(obj, sym);
		if (descriptor.value !== symVal || descriptor.enumerable !== true) { return false; }
	}

	return true;
};


/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var define = __webpack_require__(0);
var getPolyfill = __webpack_require__(16);

module.exports = function shimAssign() {
	var polyfill = getPolyfill();
	define(
		Object,
		{ assign: polyfill },
		{ assign: function () { return Object.assign !== polyfill; } }
	);
	return polyfill;
};


/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process, global) {var require;/*!
 * @overview es6-promise - a tiny implementation of Promises/A+.
 * @copyright Copyright (c) 2014 Yehuda Katz, Tom Dale, Stefan Penner and contributors (Conversion to ES6 API by Jake Archibald)
 * @license   Licensed under MIT license
 *            See https://raw.githubusercontent.com/stefanpenner/es6-promise/master/LICENSE
 * @version   4.1.1
 */

(function (global, factory) {
	 true ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(global.ES6Promise = factory());
}(this, (function () { 'use strict';

function objectOrFunction(x) {
  var type = typeof x;
  return x !== null && (type === 'object' || type === 'function');
}

function isFunction(x) {
  return typeof x === 'function';
}

var _isArray = undefined;
if (Array.isArray) {
  _isArray = Array.isArray;
} else {
  _isArray = function (x) {
    return Object.prototype.toString.call(x) === '[object Array]';
  };
}

var isArray = _isArray;

var len = 0;
var vertxNext = undefined;
var customSchedulerFn = undefined;

var asap = function asap(callback, arg) {
  queue[len] = callback;
  queue[len + 1] = arg;
  len += 2;
  if (len === 2) {
    // If len is 2, that means that we need to schedule an async flush.
    // If additional callbacks are queued before the queue is flushed, they
    // will be processed by this flush that we are scheduling.
    if (customSchedulerFn) {
      customSchedulerFn(flush);
    } else {
      scheduleFlush();
    }
  }
};

function setScheduler(scheduleFn) {
  customSchedulerFn = scheduleFn;
}

function setAsap(asapFn) {
  asap = asapFn;
}

var browserWindow = typeof window !== 'undefined' ? window : undefined;
var browserGlobal = browserWindow || {};
var BrowserMutationObserver = browserGlobal.MutationObserver || browserGlobal.WebKitMutationObserver;
var isNode = typeof self === 'undefined' && typeof process !== 'undefined' && ({}).toString.call(process) === '[object process]';

// test for web worker but not in IE10
var isWorker = typeof Uint8ClampedArray !== 'undefined' && typeof importScripts !== 'undefined' && typeof MessageChannel !== 'undefined';

// node
function useNextTick() {
  // node version 0.10.x displays a deprecation warning when nextTick is used recursively
  // see https://github.com/cujojs/when/issues/410 for details
  return function () {
    return process.nextTick(flush);
  };
}

// vertx
function useVertxTimer() {
  if (typeof vertxNext !== 'undefined') {
    return function () {
      vertxNext(flush);
    };
  }

  return useSetTimeout();
}

function useMutationObserver() {
  var iterations = 0;
  var observer = new BrowserMutationObserver(flush);
  var node = document.createTextNode('');
  observer.observe(node, { characterData: true });

  return function () {
    node.data = iterations = ++iterations % 2;
  };
}

// web worker
function useMessageChannel() {
  var channel = new MessageChannel();
  channel.port1.onmessage = flush;
  return function () {
    return channel.port2.postMessage(0);
  };
}

function useSetTimeout() {
  // Store setTimeout reference so es6-promise will be unaffected by
  // other code modifying setTimeout (like sinon.useFakeTimers())
  var globalSetTimeout = setTimeout;
  return function () {
    return globalSetTimeout(flush, 1);
  };
}

var queue = new Array(1000);
function flush() {
  for (var i = 0; i < len; i += 2) {
    var callback = queue[i];
    var arg = queue[i + 1];

    callback(arg);

    queue[i] = undefined;
    queue[i + 1] = undefined;
  }

  len = 0;
}

function attemptVertx() {
  try {
    var r = require;
    var vertx = __webpack_require__(41);
    vertxNext = vertx.runOnLoop || vertx.runOnContext;
    return useVertxTimer();
  } catch (e) {
    return useSetTimeout();
  }
}

var scheduleFlush = undefined;
// Decide what async method to use to triggering processing of queued callbacks:
if (isNode) {
  scheduleFlush = useNextTick();
} else if (BrowserMutationObserver) {
  scheduleFlush = useMutationObserver();
} else if (isWorker) {
  scheduleFlush = useMessageChannel();
} else if (browserWindow === undefined && "function" === 'function') {
  scheduleFlush = attemptVertx();
} else {
  scheduleFlush = useSetTimeout();
}

function then(onFulfillment, onRejection) {
  var _arguments = arguments;

  var parent = this;

  var child = new this.constructor(noop);

  if (child[PROMISE_ID] === undefined) {
    makePromise(child);
  }

  var _state = parent._state;

  if (_state) {
    (function () {
      var callback = _arguments[_state - 1];
      asap(function () {
        return invokeCallback(_state, child, callback, parent._result);
      });
    })();
  } else {
    subscribe(parent, child, onFulfillment, onRejection);
  }

  return child;
}

/**
  `Promise.resolve` returns a promise that will become resolved with the
  passed `value`. It is shorthand for the following:

  ```javascript
  let promise = new Promise(function(resolve, reject){
    resolve(1);
  });

  promise.then(function(value){
    // value === 1
  });
  ```

  Instead of writing the above, your code now simply becomes the following:

  ```javascript
  let promise = Promise.resolve(1);

  promise.then(function(value){
    // value === 1
  });
  ```

  @method resolve
  @static
  @param {Any} value value that the returned promise will be resolved with
  Useful for tooling.
  @return {Promise} a promise that will become fulfilled with the given
  `value`
*/
function resolve$1(object) {
  /*jshint validthis:true */
  var Constructor = this;

  if (object && typeof object === 'object' && object.constructor === Constructor) {
    return object;
  }

  var promise = new Constructor(noop);
  resolve(promise, object);
  return promise;
}

var PROMISE_ID = Math.random().toString(36).substring(16);

function noop() {}

var PENDING = void 0;
var FULFILLED = 1;
var REJECTED = 2;

var GET_THEN_ERROR = new ErrorObject();

function selfFulfillment() {
  return new TypeError("You cannot resolve a promise with itself");
}

function cannotReturnOwn() {
  return new TypeError('A promises callback cannot return that same promise.');
}

function getThen(promise) {
  try {
    return promise.then;
  } catch (error) {
    GET_THEN_ERROR.error = error;
    return GET_THEN_ERROR;
  }
}

function tryThen(then$$1, value, fulfillmentHandler, rejectionHandler) {
  try {
    then$$1.call(value, fulfillmentHandler, rejectionHandler);
  } catch (e) {
    return e;
  }
}

function handleForeignThenable(promise, thenable, then$$1) {
  asap(function (promise) {
    var sealed = false;
    var error = tryThen(then$$1, thenable, function (value) {
      if (sealed) {
        return;
      }
      sealed = true;
      if (thenable !== value) {
        resolve(promise, value);
      } else {
        fulfill(promise, value);
      }
    }, function (reason) {
      if (sealed) {
        return;
      }
      sealed = true;

      reject(promise, reason);
    }, 'Settle: ' + (promise._label || ' unknown promise'));

    if (!sealed && error) {
      sealed = true;
      reject(promise, error);
    }
  }, promise);
}

function handleOwnThenable(promise, thenable) {
  if (thenable._state === FULFILLED) {
    fulfill(promise, thenable._result);
  } else if (thenable._state === REJECTED) {
    reject(promise, thenable._result);
  } else {
    subscribe(thenable, undefined, function (value) {
      return resolve(promise, value);
    }, function (reason) {
      return reject(promise, reason);
    });
  }
}

function handleMaybeThenable(promise, maybeThenable, then$$1) {
  if (maybeThenable.constructor === promise.constructor && then$$1 === then && maybeThenable.constructor.resolve === resolve$1) {
    handleOwnThenable(promise, maybeThenable);
  } else {
    if (then$$1 === GET_THEN_ERROR) {
      reject(promise, GET_THEN_ERROR.error);
      GET_THEN_ERROR.error = null;
    } else if (then$$1 === undefined) {
      fulfill(promise, maybeThenable);
    } else if (isFunction(then$$1)) {
      handleForeignThenable(promise, maybeThenable, then$$1);
    } else {
      fulfill(promise, maybeThenable);
    }
  }
}

function resolve(promise, value) {
  if (promise === value) {
    reject(promise, selfFulfillment());
  } else if (objectOrFunction(value)) {
    handleMaybeThenable(promise, value, getThen(value));
  } else {
    fulfill(promise, value);
  }
}

function publishRejection(promise) {
  if (promise._onerror) {
    promise._onerror(promise._result);
  }

  publish(promise);
}

function fulfill(promise, value) {
  if (promise._state !== PENDING) {
    return;
  }

  promise._result = value;
  promise._state = FULFILLED;

  if (promise._subscribers.length !== 0) {
    asap(publish, promise);
  }
}

function reject(promise, reason) {
  if (promise._state !== PENDING) {
    return;
  }
  promise._state = REJECTED;
  promise._result = reason;

  asap(publishRejection, promise);
}

function subscribe(parent, child, onFulfillment, onRejection) {
  var _subscribers = parent._subscribers;
  var length = _subscribers.length;

  parent._onerror = null;

  _subscribers[length] = child;
  _subscribers[length + FULFILLED] = onFulfillment;
  _subscribers[length + REJECTED] = onRejection;

  if (length === 0 && parent._state) {
    asap(publish, parent);
  }
}

function publish(promise) {
  var subscribers = promise._subscribers;
  var settled = promise._state;

  if (subscribers.length === 0) {
    return;
  }

  var child = undefined,
      callback = undefined,
      detail = promise._result;

  for (var i = 0; i < subscribers.length; i += 3) {
    child = subscribers[i];
    callback = subscribers[i + settled];

    if (child) {
      invokeCallback(settled, child, callback, detail);
    } else {
      callback(detail);
    }
  }

  promise._subscribers.length = 0;
}

function ErrorObject() {
  this.error = null;
}

var TRY_CATCH_ERROR = new ErrorObject();

function tryCatch(callback, detail) {
  try {
    return callback(detail);
  } catch (e) {
    TRY_CATCH_ERROR.error = e;
    return TRY_CATCH_ERROR;
  }
}

function invokeCallback(settled, promise, callback, detail) {
  var hasCallback = isFunction(callback),
      value = undefined,
      error = undefined,
      succeeded = undefined,
      failed = undefined;

  if (hasCallback) {
    value = tryCatch(callback, detail);

    if (value === TRY_CATCH_ERROR) {
      failed = true;
      error = value.error;
      value.error = null;
    } else {
      succeeded = true;
    }

    if (promise === value) {
      reject(promise, cannotReturnOwn());
      return;
    }
  } else {
    value = detail;
    succeeded = true;
  }

  if (promise._state !== PENDING) {
    // noop
  } else if (hasCallback && succeeded) {
      resolve(promise, value);
    } else if (failed) {
      reject(promise, error);
    } else if (settled === FULFILLED) {
      fulfill(promise, value);
    } else if (settled === REJECTED) {
      reject(promise, value);
    }
}

function initializePromise(promise, resolver) {
  try {
    resolver(function resolvePromise(value) {
      resolve(promise, value);
    }, function rejectPromise(reason) {
      reject(promise, reason);
    });
  } catch (e) {
    reject(promise, e);
  }
}

var id = 0;
function nextId() {
  return id++;
}

function makePromise(promise) {
  promise[PROMISE_ID] = id++;
  promise._state = undefined;
  promise._result = undefined;
  promise._subscribers = [];
}

function Enumerator$1(Constructor, input) {
  this._instanceConstructor = Constructor;
  this.promise = new Constructor(noop);

  if (!this.promise[PROMISE_ID]) {
    makePromise(this.promise);
  }

  if (isArray(input)) {
    this.length = input.length;
    this._remaining = input.length;

    this._result = new Array(this.length);

    if (this.length === 0) {
      fulfill(this.promise, this._result);
    } else {
      this.length = this.length || 0;
      this._enumerate(input);
      if (this._remaining === 0) {
        fulfill(this.promise, this._result);
      }
    }
  } else {
    reject(this.promise, validationError());
  }
}

function validationError() {
  return new Error('Array Methods must be provided an Array');
}

Enumerator$1.prototype._enumerate = function (input) {
  for (var i = 0; this._state === PENDING && i < input.length; i++) {
    this._eachEntry(input[i], i);
  }
};

Enumerator$1.prototype._eachEntry = function (entry, i) {
  var c = this._instanceConstructor;
  var resolve$$1 = c.resolve;

  if (resolve$$1 === resolve$1) {
    var _then = getThen(entry);

    if (_then === then && entry._state !== PENDING) {
      this._settledAt(entry._state, i, entry._result);
    } else if (typeof _then !== 'function') {
      this._remaining--;
      this._result[i] = entry;
    } else if (c === Promise$2) {
      var promise = new c(noop);
      handleMaybeThenable(promise, entry, _then);
      this._willSettleAt(promise, i);
    } else {
      this._willSettleAt(new c(function (resolve$$1) {
        return resolve$$1(entry);
      }), i);
    }
  } else {
    this._willSettleAt(resolve$$1(entry), i);
  }
};

Enumerator$1.prototype._settledAt = function (state, i, value) {
  var promise = this.promise;

  if (promise._state === PENDING) {
    this._remaining--;

    if (state === REJECTED) {
      reject(promise, value);
    } else {
      this._result[i] = value;
    }
  }

  if (this._remaining === 0) {
    fulfill(promise, this._result);
  }
};

Enumerator$1.prototype._willSettleAt = function (promise, i) {
  var enumerator = this;

  subscribe(promise, undefined, function (value) {
    return enumerator._settledAt(FULFILLED, i, value);
  }, function (reason) {
    return enumerator._settledAt(REJECTED, i, reason);
  });
};

/**
  `Promise.all` accepts an array of promises, and returns a new promise which
  is fulfilled with an array of fulfillment values for the passed promises, or
  rejected with the reason of the first passed promise to be rejected. It casts all
  elements of the passed iterable to promises as it runs this algorithm.

  Example:

  ```javascript
  let promise1 = resolve(1);
  let promise2 = resolve(2);
  let promise3 = resolve(3);
  let promises = [ promise1, promise2, promise3 ];

  Promise.all(promises).then(function(array){
    // The array here would be [ 1, 2, 3 ];
  });
  ```

  If any of the `promises` given to `all` are rejected, the first promise
  that is rejected will be given as an argument to the returned promises's
  rejection handler. For example:

  Example:

  ```javascript
  let promise1 = resolve(1);
  let promise2 = reject(new Error("2"));
  let promise3 = reject(new Error("3"));
  let promises = [ promise1, promise2, promise3 ];

  Promise.all(promises).then(function(array){
    // Code here never runs because there are rejected promises!
  }, function(error) {
    // error.message === "2"
  });
  ```

  @method all
  @static
  @param {Array} entries array of promises
  @param {String} label optional string for labeling the promise.
  Useful for tooling.
  @return {Promise} promise that is fulfilled when all `promises` have been
  fulfilled, or rejected if any of them become rejected.
  @static
*/
function all$1(entries) {
  return new Enumerator$1(this, entries).promise;
}

/**
  `Promise.race` returns a new promise which is settled in the same way as the
  first passed promise to settle.

  Example:

  ```javascript
  let promise1 = new Promise(function(resolve, reject){
    setTimeout(function(){
      resolve('promise 1');
    }, 200);
  });

  let promise2 = new Promise(function(resolve, reject){
    setTimeout(function(){
      resolve('promise 2');
    }, 100);
  });

  Promise.race([promise1, promise2]).then(function(result){
    // result === 'promise 2' because it was resolved before promise1
    // was resolved.
  });
  ```

  `Promise.race` is deterministic in that only the state of the first
  settled promise matters. For example, even if other promises given to the
  `promises` array argument are resolved, but the first settled promise has
  become rejected before the other promises became fulfilled, the returned
  promise will become rejected:

  ```javascript
  let promise1 = new Promise(function(resolve, reject){
    setTimeout(function(){
      resolve('promise 1');
    }, 200);
  });

  let promise2 = new Promise(function(resolve, reject){
    setTimeout(function(){
      reject(new Error('promise 2'));
    }, 100);
  });

  Promise.race([promise1, promise2]).then(function(result){
    // Code here never runs
  }, function(reason){
    // reason.message === 'promise 2' because promise 2 became rejected before
    // promise 1 became fulfilled
  });
  ```

  An example real-world use case is implementing timeouts:

  ```javascript
  Promise.race([ajax('foo.json'), timeout(5000)])
  ```

  @method race
  @static
  @param {Array} promises array of promises to observe
  Useful for tooling.
  @return {Promise} a promise which settles in the same way as the first passed
  promise to settle.
*/
function race$1(entries) {
  /*jshint validthis:true */
  var Constructor = this;

  if (!isArray(entries)) {
    return new Constructor(function (_, reject) {
      return reject(new TypeError('You must pass an array to race.'));
    });
  } else {
    return new Constructor(function (resolve, reject) {
      var length = entries.length;
      for (var i = 0; i < length; i++) {
        Constructor.resolve(entries[i]).then(resolve, reject);
      }
    });
  }
}

/**
  `Promise.reject` returns a promise rejected with the passed `reason`.
  It is shorthand for the following:

  ```javascript
  let promise = new Promise(function(resolve, reject){
    reject(new Error('WHOOPS'));
  });

  promise.then(function(value){
    // Code here doesn't run because the promise is rejected!
  }, function(reason){
    // reason.message === 'WHOOPS'
  });
  ```

  Instead of writing the above, your code now simply becomes the following:

  ```javascript
  let promise = Promise.reject(new Error('WHOOPS'));

  promise.then(function(value){
    // Code here doesn't run because the promise is rejected!
  }, function(reason){
    // reason.message === 'WHOOPS'
  });
  ```

  @method reject
  @static
  @param {Any} reason value that the returned promise will be rejected with.
  Useful for tooling.
  @return {Promise} a promise rejected with the given `reason`.
*/
function reject$1(reason) {
  /*jshint validthis:true */
  var Constructor = this;
  var promise = new Constructor(noop);
  reject(promise, reason);
  return promise;
}

function needsResolver() {
  throw new TypeError('You must pass a resolver function as the first argument to the promise constructor');
}

function needsNew() {
  throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.");
}

/**
  Promise objects represent the eventual result of an asynchronous operation. The
  primary way of interacting with a promise is through its `then` method, which
  registers callbacks to receive either a promise's eventual value or the reason
  why the promise cannot be fulfilled.

  Terminology
  -----------

  - `promise` is an object or function with a `then` method whose behavior conforms to this specification.
  - `thenable` is an object or function that defines a `then` method.
  - `value` is any legal JavaScript value (including undefined, a thenable, or a promise).
  - `exception` is a value that is thrown using the throw statement.
  - `reason` is a value that indicates why a promise was rejected.
  - `settled` the final resting state of a promise, fulfilled or rejected.

  A promise can be in one of three states: pending, fulfilled, or rejected.

  Promises that are fulfilled have a fulfillment value and are in the fulfilled
  state.  Promises that are rejected have a rejection reason and are in the
  rejected state.  A fulfillment value is never a thenable.

  Promises can also be said to *resolve* a value.  If this value is also a
  promise, then the original promise's settled state will match the value's
  settled state.  So a promise that *resolves* a promise that rejects will
  itself reject, and a promise that *resolves* a promise that fulfills will
  itself fulfill.


  Basic Usage:
  ------------

  ```js
  let promise = new Promise(function(resolve, reject) {
    // on success
    resolve(value);

    // on failure
    reject(reason);
  });

  promise.then(function(value) {
    // on fulfillment
  }, function(reason) {
    // on rejection
  });
  ```

  Advanced Usage:
  ---------------

  Promises shine when abstracting away asynchronous interactions such as
  `XMLHttpRequest`s.

  ```js
  function getJSON(url) {
    return new Promise(function(resolve, reject){
      let xhr = new XMLHttpRequest();

      xhr.open('GET', url);
      xhr.onreadystatechange = handler;
      xhr.responseType = 'json';
      xhr.setRequestHeader('Accept', 'application/json');
      xhr.send();

      function handler() {
        if (this.readyState === this.DONE) {
          if (this.status === 200) {
            resolve(this.response);
          } else {
            reject(new Error('getJSON: `' + url + '` failed with status: [' + this.status + ']'));
          }
        }
      };
    });
  }

  getJSON('/posts.json').then(function(json) {
    // on fulfillment
  }, function(reason) {
    // on rejection
  });
  ```

  Unlike callbacks, promises are great composable primitives.

  ```js
  Promise.all([
    getJSON('/posts'),
    getJSON('/comments')
  ]).then(function(values){
    values[0] // => postsJSON
    values[1] // => commentsJSON

    return values;
  });
  ```

  @class Promise
  @param {function} resolver
  Useful for tooling.
  @constructor
*/
function Promise$2(resolver) {
  this[PROMISE_ID] = nextId();
  this._result = this._state = undefined;
  this._subscribers = [];

  if (noop !== resolver) {
    typeof resolver !== 'function' && needsResolver();
    this instanceof Promise$2 ? initializePromise(this, resolver) : needsNew();
  }
}

Promise$2.all = all$1;
Promise$2.race = race$1;
Promise$2.resolve = resolve$1;
Promise$2.reject = reject$1;
Promise$2._setScheduler = setScheduler;
Promise$2._setAsap = setAsap;
Promise$2._asap = asap;

Promise$2.prototype = {
  constructor: Promise$2,

  /**
    The primary way of interacting with a promise is through its `then` method,
    which registers callbacks to receive either a promise's eventual value or the
    reason why the promise cannot be fulfilled.
  
    ```js
    findUser().then(function(user){
      // user is available
    }, function(reason){
      // user is unavailable, and you are given the reason why
    });
    ```
  
    Chaining
    --------
  
    The return value of `then` is itself a promise.  This second, 'downstream'
    promise is resolved with the return value of the first promise's fulfillment
    or rejection handler, or rejected if the handler throws an exception.
  
    ```js
    findUser().then(function (user) {
      return user.name;
    }, function (reason) {
      return 'default name';
    }).then(function (userName) {
      // If `findUser` fulfilled, `userName` will be the user's name, otherwise it
      // will be `'default name'`
    });
  
    findUser().then(function (user) {
      throw new Error('Found user, but still unhappy');
    }, function (reason) {
      throw new Error('`findUser` rejected and we're unhappy');
    }).then(function (value) {
      // never reached
    }, function (reason) {
      // if `findUser` fulfilled, `reason` will be 'Found user, but still unhappy'.
      // If `findUser` rejected, `reason` will be '`findUser` rejected and we're unhappy'.
    });
    ```
    If the downstream promise does not specify a rejection handler, rejection reasons will be propagated further downstream.
  
    ```js
    findUser().then(function (user) {
      throw new PedagogicalException('Upstream error');
    }).then(function (value) {
      // never reached
    }).then(function (value) {
      // never reached
    }, function (reason) {
      // The `PedgagocialException` is propagated all the way down to here
    });
    ```
  
    Assimilation
    ------------
  
    Sometimes the value you want to propagate to a downstream promise can only be
    retrieved asynchronously. This can be achieved by returning a promise in the
    fulfillment or rejection handler. The downstream promise will then be pending
    until the returned promise is settled. This is called *assimilation*.
  
    ```js
    findUser().then(function (user) {
      return findCommentsByAuthor(user);
    }).then(function (comments) {
      // The user's comments are now available
    });
    ```
  
    If the assimliated promise rejects, then the downstream promise will also reject.
  
    ```js
    findUser().then(function (user) {
      return findCommentsByAuthor(user);
    }).then(function (comments) {
      // If `findCommentsByAuthor` fulfills, we'll have the value here
    }, function (reason) {
      // If `findCommentsByAuthor` rejects, we'll have the reason here
    });
    ```
  
    Simple Example
    --------------
  
    Synchronous Example
  
    ```javascript
    let result;
  
    try {
      result = findResult();
      // success
    } catch(reason) {
      // failure
    }
    ```
  
    Errback Example
  
    ```js
    findResult(function(result, err){
      if (err) {
        // failure
      } else {
        // success
      }
    });
    ```
  
    Promise Example;
  
    ```javascript
    findResult().then(function(result){
      // success
    }, function(reason){
      // failure
    });
    ```
  
    Advanced Example
    --------------
  
    Synchronous Example
  
    ```javascript
    let author, books;
  
    try {
      author = findAuthor();
      books  = findBooksByAuthor(author);
      // success
    } catch(reason) {
      // failure
    }
    ```
  
    Errback Example
  
    ```js
  
    function foundBooks(books) {
  
    }
  
    function failure(reason) {
  
    }
  
    findAuthor(function(author, err){
      if (err) {
        failure(err);
        // failure
      } else {
        try {
          findBoooksByAuthor(author, function(books, err) {
            if (err) {
              failure(err);
            } else {
              try {
                foundBooks(books);
              } catch(reason) {
                failure(reason);
              }
            }
          });
        } catch(error) {
          failure(err);
        }
        // success
      }
    });
    ```
  
    Promise Example;
  
    ```javascript
    findAuthor().
      then(findBooksByAuthor).
      then(function(books){
        // found books
    }).catch(function(reason){
      // something went wrong
    });
    ```
  
    @method then
    @param {Function} onFulfilled
    @param {Function} onRejected
    Useful for tooling.
    @return {Promise}
  */
  then: then,

  /**
    `catch` is simply sugar for `then(undefined, onRejection)` which makes it the same
    as the catch block of a try/catch statement.
  
    ```js
    function findAuthor(){
      throw new Error('couldn't find that author');
    }
  
    // synchronous
    try {
      findAuthor();
    } catch(reason) {
      // something went wrong
    }
  
    // async with promises
    findAuthor().catch(function(reason){
      // something went wrong
    });
    ```
  
    @method catch
    @param {Function} onRejection
    Useful for tooling.
    @return {Promise}
  */
  'catch': function _catch(onRejection) {
    return this.then(null, onRejection);
  }
};

/*global self*/
function polyfill$1() {
    var local = undefined;

    if (typeof global !== 'undefined') {
        local = global;
    } else if (typeof self !== 'undefined') {
        local = self;
    } else {
        try {
            local = Function('return this')();
        } catch (e) {
            throw new Error('polyfill failed because global object is unavailable in this environment');
        }
    }

    var P = local.Promise;

    if (P) {
        var promiseToString = null;
        try {
            promiseToString = Object.prototype.toString.call(P.resolve());
        } catch (e) {
            // silently ignored
        }

        if (promiseToString === '[object Promise]' && !P.cast) {
            return;
        }
    }

    local.Promise = Promise$2;
}

// Strange compat..
Promise$2.polyfill = polyfill$1;
Promise$2.Promise = Promise$2;

return Promise$2;

})));

//# sourceMappingURL=es6-promise.map

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(17), __webpack_require__(5)))

/***/ }),
/* 41 */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),
/* 42 */
/***/ (function(module, exports) {

window.customElements && eval("/**\n * @license\n * Copyright (c) 2016 The Polymer Project Authors. All rights reserved.\n * This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt\n * The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt\n * The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt\n * Code distributed by Google as part of the polymer project is also\n * subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt\n */\n\n/**\n * This shim allows elements written in, or compiled to, ES5 to work on native\n * implementations of Custom Elements.\n *\n * ES5-style classes don't work with native Custom Elements because the\n * HTMLElement constructor uses the value of `new.target` to look up the custom\n * element definition for the currently called constructor. `new.target` is only\n * set when `new` is called and is only propagated via super() calls. super()\n * is not emulatable in ES5. The pattern of `SuperClass.call(this)`` only works\n * when extending other ES5-style classes, and does not propagate `new.target`.\n *\n * This shim allows the native HTMLElement constructor to work by generating and\n * registering a stand-in class instead of the users custom element class. This\n * stand-in class's constructor has an actual call to super().\n * `customElements.define()` and `customElements.get()` are both overridden to\n * hide this stand-in class from users.\n *\n * In order to create instance of the user-defined class, rather than the stand\n * in, the stand-in's constructor swizzles its instances prototype and invokes\n * the user-defined constructor. When the user-defined constructor is called\n * directly it creates an instance of the stand-in class to get a real extension\n * of HTMLElement and returns that.\n *\n * There are two important constructors: A patched HTMLElement constructor, and\n * the StandInElement constructor. They both will be called to create an element\n * but which is called first depends on whether the browser creates the element\n * or the user-defined constructor is called directly. The variables\n * `browserConstruction` and `userConstruction` control the flow between the\n * two constructors.\n *\n * This shim should be better than forcing the polyfill because:\n *   1. It's smaller\n *   2. All reaction timings are the same as native (mostly synchronous)\n *   3. All reaction triggering DOM operations are automatically supported\n *\n * There are some restrictions and requirements on ES5 constructors:\n *   1. All constructors in a inheritance hierarchy must be ES5-style, so that\n *      they can be called with Function.call(). This effectively means that the\n *      whole application must be compiled to ES5.\n *   2. Constructors must return the value of the emulated super() call. Like\n *      `return SuperClass.call(this)`\n *   3. The `this` reference should not be used before the emulated super() call\n *      just like `this` is illegal to use before super() in ES6.\n *   4. Constructors should not create other custom elements before the emulated\n *      super() call. This is the same restriction as with native custom\n *      elements.\n *\n *  Compiling valid class-based custom elements to ES5 will satisfy these\n *  requirements with the latest version of popular transpilers.\n */\n(() => {\n  'use strict';\n\n  const NativeHTMLElement = window.HTMLElement;\n  const nativeDefine = window.customElements.define;\n  const nativeGet = window.customElements.get;\n\n  /**\n   * Map of user-provided constructors to tag names.\n   *\n   * @type {Map<Function, string>}\n   */\n  const tagnameByConstructor = new Map();\n\n  /**\n   * Map of tag names to user-provided constructors.\n   *\n   * @type {Map<string, Function>}\n   */\n  const constructorByTagname = new Map();\n\n\n  /**\n   * Whether the constructors are being called by a browser process, ie parsing\n   * or createElement.\n   */\n  let browserConstruction = false;\n\n  /**\n   * Whether the constructors are being called by a user-space process, ie\n   * calling an element constructor.\n   */\n  let userConstruction = false;\n\n  window.HTMLElement = function() {\n    if (!browserConstruction) {\n      const tagname = tagnameByConstructor.get(this.constructor);\n      const fakeClass = nativeGet.call(window.customElements, tagname);\n\n      // Make sure that the fake constructor doesn't call back to this constructor\n      userConstruction = true;\n      const instance = new (fakeClass)();\n      return instance;\n    }\n    // Else do nothing. This will be reached by ES5-style classes doing\n    // HTMLElement.call() during initialization\n    browserConstruction = false;\n  };\n  // By setting the patched HTMLElement's prototype property to the native\n  // HTMLElement's prototype we make sure that:\n  //     document.createElement('a') instanceof HTMLElement\n  // works because instanceof uses HTMLElement.prototype, which is on the\n  // ptototype chain of built-in elements.\n  window.HTMLElement.prototype = NativeHTMLElement.prototype;\n\n  window.customElements.define = (tagname, elementClass) => {\n    const elementProto = elementClass.prototype;\n    const StandInElement = class extends NativeHTMLElement {\n      constructor() {\n        // Call the native HTMLElement constructor, this gives us the\n        // under-construction instance as `this`:\n        super();\n\n        // The prototype will be wrong up because the browser used our fake\n        // class, so fix it:\n        Object.setPrototypeOf(this, elementProto);\n\n        if (!userConstruction) {\n          // Make sure that user-defined constructor bottom's out to a do-nothing\n          // HTMLElement() call\n          browserConstruction = true;\n          // Call the user-defined constructor on our instance:\n          elementClass.call(this);\n        }\n        userConstruction = false;\n      }\n    };\n    const standInProto = StandInElement.prototype;\n    StandInElement.observedAttributes = elementClass.observedAttributes;\n    standInProto.connectedCallback = elementProto.connectedCallback;\n    standInProto.disconnectedCallback = elementProto.disconnectedCallback;\n    standInProto.attributeChangedCallback = elementProto.attributeChangedCallback;\n    standInProto.adoptedCallback = elementProto.adoptedCallback;\n\n    tagnameByConstructor.set(elementClass, tagname);\n    constructorByTagname.set(tagname, elementClass);\n    nativeDefine.call(window.customElements, tagname, StandInElement);\n  };\n\n  window.customElements.get = (tagname) => constructorByTagname.get(tagname);\n\n})();");

/***/ }),
/* 43 */
/***/ (function(module, exports) {

/**
 * @license
 * Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
 */

// minimal template polyfill
(function() {

  var needsTemplate = (typeof HTMLTemplateElement === 'undefined');

  // NOTE: Patch document.importNode to work around IE11 bug that
  // casues children of a document fragment imported while
  // there is a mutation observer to not have a parentNode (!?!)
  // It's important that this is the first patch to `importNode` so that
  // dom produced for later patches is correct.
  if (/Trident/.test(navigator.userAgent)) {
    (function() {
      var Native_importNode = Document.prototype.importNode;
      Document.prototype.importNode = function() {
        var n = Native_importNode.apply(this, arguments);
        // Copy all children to a new document fragment since
        // this one may be broken
        if (n.nodeType === Node.DOCUMENT_FRAGMENT_NODE) {
          var f = this.createDocumentFragment();
          f.appendChild(n);
          return f;
        } else {
          return n;
        }
      };
    })();
  }

  // NOTE: we rely on this cloneNode not causing element upgrade.
  // This means this polyfill must load before the CE polyfill and
  // this would need to be re-worked if a browser supports native CE
  // but not <template>.
  var Native_cloneNode = Node.prototype.cloneNode;
  var Native_createElement = Document.prototype.createElement;
  var Native_importNode = Document.prototype.importNode;

  // returns true if nested templates cannot be cloned (they cannot be on
  // some impl's like Safari 8 and Edge)
  // OR if cloning a document fragment does not result in a document fragment
  var needsCloning = (function() {
    if (!needsTemplate) {
      var t = document.createElement('template');
      var t2 = document.createElement('template');
      t2.content.appendChild(document.createElement('div'));
      t.content.appendChild(t2);
      var clone = t.cloneNode(true);
      return (clone.content.childNodes.length === 0 || clone.content.firstChild.content.childNodes.length === 0
        || !(document.createDocumentFragment().cloneNode() instanceof DocumentFragment));
    }
  })();

  var TEMPLATE_TAG = 'template';
  var PolyfilledHTMLTemplateElement = function() {};

  if (needsTemplate) {

    var contentDoc = document.implementation.createHTMLDocument('template');
    var canDecorate = true;

    var templateStyle = document.createElement('style');
    templateStyle.textContent = TEMPLATE_TAG + '{display:none;}';

    var head = document.head;
    head.insertBefore(templateStyle, head.firstElementChild);

    /**
      Provides a minimal shim for the <template> element.
    */
    PolyfilledHTMLTemplateElement.prototype = Object.create(HTMLElement.prototype);


    // if elements do not have `innerHTML` on instances, then
    // templates can be patched by swizzling their prototypes.
    var canProtoPatch =
      !(document.createElement('div').hasOwnProperty('innerHTML'));

    /**
      The `decorate` method moves element children to the template's `content`.
      NOTE: there is no support for dynamically adding elements to templates.
    */
    PolyfilledHTMLTemplateElement.decorate = function(template) {
      // if the template is decorated, return fast
      if (template.content) {
        return;
      }
      template.content = contentDoc.createDocumentFragment();
      var child;
      while (child = template.firstChild) {
        template.content.appendChild(child);
      }
      // NOTE: prefer prototype patching for performance and
      // because on some browsers (IE11), re-defining `innerHTML`
      // can result in intermittent errors.
      if (canProtoPatch) {
        template.__proto__ = PolyfilledHTMLTemplateElement.prototype;
      } else {
        template.cloneNode = function(deep) {
          return PolyfilledHTMLTemplateElement._cloneNode(this, deep);
        };
        // add innerHTML to template, if possible
        // Note: this throws on Safari 7
        if (canDecorate) {
          try {
            defineInnerHTML(template);
          } catch (err) {
            canDecorate = false;
          }
        }
      }
      // bootstrap recursively
      PolyfilledHTMLTemplateElement.bootstrap(template.content);
    };

    function defineInnerHTML(obj) {
      Object.defineProperty(obj, 'innerHTML', {
        get: function() {
          var o = '';
          for (var e = this.content.firstChild; e; e = e.nextSibling) {
            o += e.outerHTML || escapeData(e.data);
          }
          return o;
        },
        set: function(text) {
          contentDoc.body.innerHTML = text;
          PolyfilledHTMLTemplateElement.bootstrap(contentDoc);
          while (this.content.firstChild) {
            this.content.removeChild(this.content.firstChild);
          }
          while (contentDoc.body.firstChild) {
            this.content.appendChild(contentDoc.body.firstChild);
          }
        },
        configurable: true
      });
    }

    defineInnerHTML(PolyfilledHTMLTemplateElement.prototype);

    /**
      The `bootstrap` method is called automatically and "fixes" all
      <template> elements in the document referenced by the `doc` argument.
    */
    PolyfilledHTMLTemplateElement.bootstrap = function(doc) {
      var templates = doc.querySelectorAll(TEMPLATE_TAG);
      for (var i=0, l=templates.length, t; (i<l) && (t=templates[i]); i++) {
        PolyfilledHTMLTemplateElement.decorate(t);
      }
    };

    // auto-bootstrapping for main document
    document.addEventListener('DOMContentLoaded', function() {
      PolyfilledHTMLTemplateElement.bootstrap(document);
    });

    // Patch document.createElement to ensure newly created templates have content
    Document.prototype.createElement = function() {
      'use strict';
      var el = Native_createElement.apply(this, arguments);
      if (el.localName === 'template') {
        PolyfilledHTMLTemplateElement.decorate(el);
      }
      return el;
    };

    var escapeDataRegExp = /[&\u00A0<>]/g;

    function escapeReplace(c) {
      switch (c) {
        case '&':
          return '&amp;';
        case '<':
          return '&lt;';
        case '>':
          return '&gt;';
        case '\u00A0':
          return '&nbsp;';
      }
    }

    function escapeData(s) {
      return s.replace(escapeDataRegExp, escapeReplace);
    }
  }

  // make cloning/importing work!
  if (needsTemplate || needsCloning) {

    PolyfilledHTMLTemplateElement._cloneNode = function(template, deep) {
      var clone = Native_cloneNode.call(template, false);
      // NOTE: decorate doesn't auto-fix children because they are already
      // decorated so they need special clone fixup.
      if (this.decorate) {
        this.decorate(clone);
      }
      if (deep) {
        // NOTE: use native clone node to make sure CE's wrapped
        // cloneNode does not cause elements to upgrade.
        clone.content.appendChild(
            Native_cloneNode.call(template.content, true));
        // now ensure nested templates are cloned correctly.
        this.fixClonedDom(clone.content, template.content);
      }
      return clone;
    };

    PolyfilledHTMLTemplateElement.prototype.cloneNode = function(deep) {
      return PolyfilledHTMLTemplateElement._cloneNode(this, deep);
    }

    // Given a source and cloned subtree, find <template>'s in the cloned
    // subtree and replace them with cloned <template>'s from source.
    // We must do this because only the source templates have proper .content.
    PolyfilledHTMLTemplateElement.fixClonedDom = function(clone, source) {
      // do nothing if cloned node is not an element
      if (!source.querySelectorAll) return;
      // these two lists should be coincident
      var s$ = source.querySelectorAll(TEMPLATE_TAG);
      var t$ = clone.querySelectorAll(TEMPLATE_TAG);
      for (var i=0, l=t$.length, t, s; i<l; i++) {
        s = s$[i];
        t = t$[i];
        if (this.decorate) {
          this.decorate(s);
        }
        t.parentNode.replaceChild(s.cloneNode(true), t);
      }
    };

    // override all cloning to fix the cloned subtree to contain properly
    // cloned templates.
    Node.prototype.cloneNode = function(deep) {
      var dom;
      // workaround for Edge bug cloning documentFragments
      // https://developer.microsoft.com/en-us/microsoft-edge/platform/issues/8619646/
      if (this instanceof DocumentFragment) {
        if (!deep) {
          return this.ownerDocument.createDocumentFragment();
        } else {
          dom = this.ownerDocument.importNode(this, true);
        }
      } else {
        dom = Native_cloneNode.call(this, deep);
      }
      // template.content is cloned iff `deep`.
      if (deep) {
        PolyfilledHTMLTemplateElement.fixClonedDom(dom, this);
      }
      return dom;
    };

    // NOTE: we are cloning instead of importing <template>'s.
    // However, the ownerDocument of the cloned template will be correct!
    // This is because the native import node creates the right document owned
    // subtree and `fixClonedDom` inserts cloned templates into this subtree,
    // thus updating the owner doc.
    Document.prototype.importNode = function(element, deep) {
      if (element.localName === TEMPLATE_TAG) {
        return PolyfilledHTMLTemplateElement._cloneNode(element, deep);
      } else {
        var dom = Native_importNode.call(this, element, deep);
        if (deep) {
          PolyfilledHTMLTemplateElement.fixClonedDom(dom, element);
        }
        return dom;
      }
    };

    if (needsCloning) {
      window.HTMLTemplateElement.prototype.cloneNode = function(deep) {
        return PolyfilledHTMLTemplateElement._cloneNode(this, deep);
      };
    }
  }

  if (needsTemplate) {
    window.HTMLTemplateElement = PolyfilledHTMLTemplateElement;
  }

})();


/***/ }),
/* 44 */
/***/ (function(module, exports) {

(function(){
'use strict';var g=new function(){};var aa=new Set("annotation-xml color-profile font-face font-face-src font-face-uri font-face-format font-face-name missing-glyph".split(" "));function k(b){var a=aa.has(b);b=/^[a-z][.0-9_a-z]*-[\-.0-9_a-z]*$/.test(b);return!a&&b}function l(b){var a=b.isConnected;if(void 0!==a)return a;for(;b&&!(b.__CE_isImportDocument||b instanceof Document);)b=b.parentNode||(window.ShadowRoot&&b instanceof ShadowRoot?b.host:void 0);return!(!b||!(b.__CE_isImportDocument||b instanceof Document))}
function m(b,a){for(;a&&a!==b&&!a.nextSibling;)a=a.parentNode;return a&&a!==b?a.nextSibling:null}
function n(b,a,e){e=e?e:new Set;for(var c=b;c;){if(c.nodeType===Node.ELEMENT_NODE){var d=c;a(d);var h=d.localName;if("link"===h&&"import"===d.getAttribute("rel")){c=d.import;if(c instanceof Node&&!e.has(c))for(e.add(c),c=c.firstChild;c;c=c.nextSibling)n(c,a,e);c=m(b,d);continue}else if("template"===h){c=m(b,d);continue}if(d=d.__CE_shadowRoot)for(d=d.firstChild;d;d=d.nextSibling)n(d,a,e)}c=c.firstChild?c.firstChild:m(b,c)}}function q(b,a,e){b[a]=e};function r(){this.a=new Map;this.m=new Map;this.f=[];this.b=!1}function ba(b,a,e){b.a.set(a,e);b.m.set(e.constructor,e)}function t(b,a){b.b=!0;b.f.push(a)}function v(b,a){b.b&&n(a,function(a){return w(b,a)})}function w(b,a){if(b.b&&!a.__CE_patched){a.__CE_patched=!0;for(var e=0;e<b.f.length;e++)b.f[e](a)}}function x(b,a){var e=[];n(a,function(b){return e.push(b)});for(a=0;a<e.length;a++){var c=e[a];1===c.__CE_state?b.connectedCallback(c):y(b,c)}}
function z(b,a){var e=[];n(a,function(b){return e.push(b)});for(a=0;a<e.length;a++){var c=e[a];1===c.__CE_state&&b.disconnectedCallback(c)}}
function A(b,a,e){e=e?e:new Set;var c=[];n(a,function(d){if("link"===d.localName&&"import"===d.getAttribute("rel")){var a=d.import;a instanceof Node&&"complete"===a.readyState?(a.__CE_isImportDocument=!0,a.__CE_hasRegistry=!0):d.addEventListener("load",function(){var a=d.import;a.__CE_documentLoadHandled||(a.__CE_documentLoadHandled=!0,a.__CE_isImportDocument=!0,a.__CE_hasRegistry=!0,e.delete(a),A(b,a,e))})}else c.push(d)},e);if(b.b)for(a=0;a<c.length;a++)w(b,c[a]);for(a=0;a<c.length;a++)y(b,c[a])}
function y(b,a){if(void 0===a.__CE_state){var e=b.a.get(a.localName);if(e){e.constructionStack.push(a);var c=e.constructor;try{try{if(new c!==a)throw Error("The custom element constructor did not produce the element being upgraded.");}finally{e.constructionStack.pop()}}catch(f){throw a.__CE_state=2,f;}a.__CE_state=1;a.__CE_definition=e;if(e.attributeChangedCallback)for(e=e.observedAttributes,c=0;c<e.length;c++){var d=e[c],h=a.getAttribute(d);null!==h&&b.attributeChangedCallback(a,d,null,h,null)}l(a)&&
b.connectedCallback(a)}}}r.prototype.connectedCallback=function(b){var a=b.__CE_definition;a.connectedCallback&&a.connectedCallback.call(b)};r.prototype.disconnectedCallback=function(b){var a=b.__CE_definition;a.disconnectedCallback&&a.disconnectedCallback.call(b)};r.prototype.attributeChangedCallback=function(b,a,e,c,d){var h=b.__CE_definition;h.attributeChangedCallback&&-1<h.observedAttributes.indexOf(a)&&h.attributeChangedCallback.call(b,a,e,c,d)};function B(b,a){this.c=b;this.a=a;this.b=void 0;A(this.c,this.a);"loading"===this.a.readyState&&(this.b=new MutationObserver(this.f.bind(this)),this.b.observe(this.a,{childList:!0,subtree:!0}))}function C(b){b.b&&b.b.disconnect()}B.prototype.f=function(b){var a=this.a.readyState;"interactive"!==a&&"complete"!==a||C(this);for(a=0;a<b.length;a++)for(var e=b[a].addedNodes,c=0;c<e.length;c++)A(this.c,e[c])};function ca(){var b=this;this.b=this.a=void 0;this.f=new Promise(function(a){b.b=a;b.a&&a(b.a)})}function D(b){if(b.a)throw Error("Already resolved.");b.a=void 0;b.b&&b.b(void 0)};function E(b){this.i=!1;this.c=b;this.l=new Map;this.j=function(b){return b()};this.g=!1;this.h=[];this.s=new B(b,document)}
E.prototype.define=function(b,a){var e=this;if(!(a instanceof Function))throw new TypeError("Custom element constructors must be functions.");if(!k(b))throw new SyntaxError("The element name '"+b+"' is not valid.");if(this.c.a.get(b))throw Error("A custom element with name '"+b+"' has already been defined.");if(this.i)throw Error("A custom element is already being defined.");this.i=!0;var c,d,h,f,u;try{var p=function(b){var a=P[b];if(void 0!==a&&!(a instanceof Function))throw Error("The '"+b+"' callback must be a function.");
return a},P=a.prototype;if(!(P instanceof Object))throw new TypeError("The custom element constructor's prototype is not an object.");c=p("connectedCallback");d=p("disconnectedCallback");h=p("adoptedCallback");f=p("attributeChangedCallback");u=a.observedAttributes||[]}catch(ua){return}finally{this.i=!1}ba(this.c,b,{localName:b,constructor:a,connectedCallback:c,disconnectedCallback:d,adoptedCallback:h,attributeChangedCallback:f,observedAttributes:u,constructionStack:[]});this.h.push(b);this.g||(this.g=
!0,this.j(function(){if(!1!==e.g)for(e.g=!1,A(e.c,document);0<e.h.length;){var b=e.h.shift();(b=e.l.get(b))&&D(b)}}))};E.prototype.get=function(b){if(b=this.c.a.get(b))return b.constructor};E.prototype.whenDefined=function(b){if(!k(b))return Promise.reject(new SyntaxError("'"+b+"' is not a valid custom element name."));var a=this.l.get(b);if(a)return a.f;a=new ca;this.l.set(b,a);this.c.a.get(b)&&-1===this.h.indexOf(b)&&D(a);return a.f};E.prototype.u=function(b){C(this.s);var a=this.j;this.j=function(e){return b(function(){return a(e)})}};
window.CustomElementRegistry=E;E.prototype.define=E.prototype.define;E.prototype.get=E.prototype.get;E.prototype.whenDefined=E.prototype.whenDefined;E.prototype.polyfillWrapFlushCallback=E.prototype.u;var F=window.Document.prototype.createElement,da=window.Document.prototype.createElementNS,ea=window.Document.prototype.importNode,fa=window.Document.prototype.prepend,ga=window.Document.prototype.append,G=window.Node.prototype.cloneNode,H=window.Node.prototype.appendChild,I=window.Node.prototype.insertBefore,J=window.Node.prototype.removeChild,K=window.Node.prototype.replaceChild,L=Object.getOwnPropertyDescriptor(window.Node.prototype,"textContent"),M=window.Element.prototype.attachShadow,N=Object.getOwnPropertyDescriptor(window.Element.prototype,
"innerHTML"),O=window.Element.prototype.getAttribute,Q=window.Element.prototype.setAttribute,R=window.Element.prototype.removeAttribute,S=window.Element.prototype.getAttributeNS,T=window.Element.prototype.setAttributeNS,U=window.Element.prototype.removeAttributeNS,V=window.Element.prototype.insertAdjacentElement,ha=window.Element.prototype.prepend,ia=window.Element.prototype.append,ja=window.Element.prototype.before,ka=window.Element.prototype.after,la=window.Element.prototype.replaceWith,ma=window.Element.prototype.remove,
na=window.HTMLElement,W=Object.getOwnPropertyDescriptor(window.HTMLElement.prototype,"innerHTML"),X=window.HTMLElement.prototype.insertAdjacentElement;function oa(){var b=Y;window.HTMLElement=function(){function a(){var a=this.constructor,c=b.m.get(a);if(!c)throw Error("The custom element being constructed was not registered with `customElements`.");var d=c.constructionStack;if(!d.length)return d=F.call(document,c.localName),Object.setPrototypeOf(d,a.prototype),d.__CE_state=1,d.__CE_definition=c,w(b,d),d;var c=d.length-1,h=d[c];if(h===g)throw Error("The HTMLElement constructor was either called reentrantly for this constructor or called multiple times.");
d[c]=g;Object.setPrototypeOf(h,a.prototype);w(b,h);return h}a.prototype=na.prototype;return a}()};function pa(b,a,e){a.prepend=function(a){for(var d=[],c=0;c<arguments.length;++c)d[c-0]=arguments[c];c=d.filter(function(b){return b instanceof Node&&l(b)});e.o.apply(this,d);for(var f=0;f<c.length;f++)z(b,c[f]);if(l(this))for(c=0;c<d.length;c++)f=d[c],f instanceof Element&&x(b,f)};a.append=function(a){for(var d=[],c=0;c<arguments.length;++c)d[c-0]=arguments[c];c=d.filter(function(b){return b instanceof Node&&l(b)});e.append.apply(this,d);for(var f=0;f<c.length;f++)z(b,c[f]);if(l(this))for(c=0;c<
d.length;c++)f=d[c],f instanceof Element&&x(b,f)}};function qa(){var b=Y;q(Document.prototype,"createElement",function(a){if(this.__CE_hasRegistry){var e=b.a.get(a);if(e)return new e.constructor}a=F.call(this,a);w(b,a);return a});q(Document.prototype,"importNode",function(a,e){a=ea.call(this,a,e);this.__CE_hasRegistry?A(b,a):v(b,a);return a});q(Document.prototype,"createElementNS",function(a,e){if(this.__CE_hasRegistry&&(null===a||"http://www.w3.org/1999/xhtml"===a)){var c=b.a.get(e);if(c)return new c.constructor}a=da.call(this,a,e);w(b,a);return a});
pa(b,Document.prototype,{o:fa,append:ga})};function ra(){var b=Y;function a(a,c){Object.defineProperty(a,"textContent",{enumerable:c.enumerable,configurable:!0,get:c.get,set:function(a){if(this.nodeType===Node.TEXT_NODE)c.set.call(this,a);else{var d=void 0;if(this.firstChild){var e=this.childNodes,u=e.length;if(0<u&&l(this))for(var d=Array(u),p=0;p<u;p++)d[p]=e[p]}c.set.call(this,a);if(d)for(a=0;a<d.length;a++)z(b,d[a])}}})}q(Node.prototype,"insertBefore",function(a,c){if(a instanceof DocumentFragment){var d=Array.prototype.slice.apply(a.childNodes);
a=I.call(this,a,c);if(l(this))for(c=0;c<d.length;c++)x(b,d[c]);return a}d=l(a);c=I.call(this,a,c);d&&z(b,a);l(this)&&x(b,a);return c});q(Node.prototype,"appendChild",function(a){if(a instanceof DocumentFragment){var c=Array.prototype.slice.apply(a.childNodes);a=H.call(this,a);if(l(this))for(var d=0;d<c.length;d++)x(b,c[d]);return a}c=l(a);d=H.call(this,a);c&&z(b,a);l(this)&&x(b,a);return d});q(Node.prototype,"cloneNode",function(a){a=G.call(this,a);this.ownerDocument.__CE_hasRegistry?A(b,a):v(b,a);
return a});q(Node.prototype,"removeChild",function(a){var c=l(a),d=J.call(this,a);c&&z(b,a);return d});q(Node.prototype,"replaceChild",function(a,c){if(a instanceof DocumentFragment){var d=Array.prototype.slice.apply(a.childNodes);a=K.call(this,a,c);if(l(this))for(z(b,c),c=0;c<d.length;c++)x(b,d[c]);return a}var d=l(a),e=K.call(this,a,c),f=l(this);f&&z(b,c);d&&z(b,a);f&&x(b,a);return e});L&&L.get?a(Node.prototype,L):t(b,function(b){a(b,{enumerable:!0,configurable:!0,get:function(){for(var a=[],b=
0;b<this.childNodes.length;b++)a.push(this.childNodes[b].textContent);return a.join("")},set:function(a){for(;this.firstChild;)J.call(this,this.firstChild);H.call(this,document.createTextNode(a))}})})};function sa(b){var a=Element.prototype;a.before=function(a){for(var c=[],d=0;d<arguments.length;++d)c[d-0]=arguments[d];d=c.filter(function(a){return a instanceof Node&&l(a)});ja.apply(this,c);for(var e=0;e<d.length;e++)z(b,d[e]);if(l(this))for(d=0;d<c.length;d++)e=c[d],e instanceof Element&&x(b,e)};a.after=function(a){for(var c=[],d=0;d<arguments.length;++d)c[d-0]=arguments[d];d=c.filter(function(a){return a instanceof Node&&l(a)});ka.apply(this,c);for(var e=0;e<d.length;e++)z(b,d[e]);if(l(this))for(d=
0;d<c.length;d++)e=c[d],e instanceof Element&&x(b,e)};a.replaceWith=function(a){for(var c=[],d=0;d<arguments.length;++d)c[d-0]=arguments[d];var d=c.filter(function(a){return a instanceof Node&&l(a)}),e=l(this);la.apply(this,c);for(var f=0;f<d.length;f++)z(b,d[f]);if(e)for(z(b,this),d=0;d<c.length;d++)e=c[d],e instanceof Element&&x(b,e)};a.remove=function(){var a=l(this);ma.call(this);a&&z(b,this)}};function ta(){var b=Y;function a(a,c){Object.defineProperty(a,"innerHTML",{enumerable:c.enumerable,configurable:!0,get:c.get,set:function(a){var d=this,e=void 0;l(this)&&(e=[],n(this,function(a){a!==d&&e.push(a)}));c.set.call(this,a);if(e)for(var f=0;f<e.length;f++){var h=e[f];1===h.__CE_state&&b.disconnectedCallback(h)}this.ownerDocument.__CE_hasRegistry?A(b,this):v(b,this);return a}})}function e(a,c){q(a,"insertAdjacentElement",function(a,d){var e=l(d);a=c.call(this,a,d);e&&z(b,d);l(a)&&x(b,d);
return a})}M?q(Element.prototype,"attachShadow",function(a){return this.__CE_shadowRoot=a=M.call(this,a)}):console.warn("Custom Elements: `Element#attachShadow` was not patched.");if(N&&N.get)a(Element.prototype,N);else if(W&&W.get)a(HTMLElement.prototype,W);else{var c=F.call(document,"div");t(b,function(b){a(b,{enumerable:!0,configurable:!0,get:function(){return G.call(this,!0).innerHTML},set:function(a){var b="template"===this.localName?this.content:this;for(c.innerHTML=a;0<b.childNodes.length;)J.call(b,
b.childNodes[0]);for(;0<c.childNodes.length;)H.call(b,c.childNodes[0])}})})}q(Element.prototype,"setAttribute",function(a,c){if(1!==this.__CE_state)return Q.call(this,a,c);var d=O.call(this,a);Q.call(this,a,c);c=O.call(this,a);b.attributeChangedCallback(this,a,d,c,null)});q(Element.prototype,"setAttributeNS",function(a,c,e){if(1!==this.__CE_state)return T.call(this,a,c,e);var d=S.call(this,a,c);T.call(this,a,c,e);e=S.call(this,a,c);b.attributeChangedCallback(this,c,d,e,a)});q(Element.prototype,"removeAttribute",
function(a){if(1!==this.__CE_state)return R.call(this,a);var c=O.call(this,a);R.call(this,a);null!==c&&b.attributeChangedCallback(this,a,c,null,null)});q(Element.prototype,"removeAttributeNS",function(a,c){if(1!==this.__CE_state)return U.call(this,a,c);var d=S.call(this,a,c);U.call(this,a,c);var e=S.call(this,a,c);d!==e&&b.attributeChangedCallback(this,c,d,e,a)});X?e(HTMLElement.prototype,X):V?e(Element.prototype,V):console.warn("Custom Elements: `Element#insertAdjacentElement` was not patched.");
pa(b,Element.prototype,{o:ha,append:ia});sa(b)};/*

 Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
 This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 Code distributed by Google as part of the polymer project is also
 subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
var Z=window.customElements;if(!Z||Z.forcePolyfill||"function"!=typeof Z.define||"function"!=typeof Z.get){var Y=new r;oa();qa();ra();ta();document.__CE_hasRegistry=!0;var customElements=new E(Y);Object.defineProperty(window,"customElements",{configurable:!0,enumerable:!0,value:customElements})};
}).call(self);

//# sourceMappingURL=custom-elements.min.js.map


/***/ }),
/* 45 */
/***/ (function(module, exports) {

(function(){
/*

Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
'use strict';function n(a,b){return{index:a,i:[],m:b}}
function aa(a,b,c,d){var e=0,h=0,g=0,f=0,k=Math.min(b-e,d-h);if(0==e&&0==h)a:{for(g=0;g<k;g++)if(a[g]!==c[g])break a;g=k}if(b==a.length&&d==c.length){for(var f=a.length,l=c.length,m=0;m<k-g&&ba(a[--f],c[--l]);)m++;f=m}e+=g;h+=g;b-=f;d-=f;if(!(b-e||d-h))return[];if(e==b){for(b=n(e,0);h<d;)b.i.push(c[h++]);return[b]}if(h==d)return[n(e,b-e)];k=e;g=h;d=d-g+1;f=b-k+1;b=Array(d);for(l=0;l<d;l++)b[l]=Array(f),b[l][0]=l;for(l=0;l<f;l++)b[0][l]=l;for(l=1;l<d;l++)for(m=1;m<f;m++)if(a[k+m-1]===c[g+l-1])b[l][m]=
b[l-1][m-1];else{var q=b[l-1][m]+1,y=b[l][m-1]+1;b[l][m]=q<y?q:y}k=b.length-1;g=b[0].length-1;d=b[k][g];for(a=[];0<k||0<g;)k?g?(f=b[k-1][g-1],l=b[k-1][g],m=b[k][g-1],q=l<m?l<f?l:f:m<f?m:f,q==f?(f==d?a.push(0):(a.push(1),d=f),k--,g--):q==l?(a.push(3),k--,d=l):(a.push(2),g--,d=m)):(a.push(3),k--):(a.push(2),g--);a.reverse();b=void 0;k=[];for(g=0;g<a.length;g++)switch(a[g]){case 0:b&&(k.push(b),b=void 0);e++;h++;break;case 1:b||(b=n(e,0));b.m++;e++;b.i.push(c[h]);h++;break;case 2:b||(b=n(e,0));b.m++;
e++;break;case 3:b||(b=n(e,0)),b.i.push(c[h]),h++}b&&k.push(b);return k}function ba(a,b){return a===b};var p=window.ShadyDOM||{};p.S=!(!Element.prototype.attachShadow||!Node.prototype.getRootNode);var t=Object.getOwnPropertyDescriptor(Node.prototype,"firstChild");p.g=!!(t&&t.configurable&&t.get);p.J=p.force||!p.S;function u(a){return"ShadyRoot"===a.M}function v(a){a=a.getRootNode();if(u(a))return a}var w=Element.prototype,ca=w.matches||w.matchesSelector||w.mozMatchesSelector||w.msMatchesSelector||w.oMatchesSelector||w.webkitMatchesSelector;
function x(a,b){if(a&&b)for(var c=Object.getOwnPropertyNames(b),d=0,e;d<c.length&&(e=c[d]);d++){var h=Object.getOwnPropertyDescriptor(b,e);h&&Object.defineProperty(a,e,h)}}function z(a,b){for(var c=[],d=1;d<arguments.length;++d)c[d-1]=arguments[d];for(d=0;d<c.length;d++)x(a,c[d]);return a}function da(a,b){for(var c in b)a[c]=b[c]}var A=document.createTextNode(""),ea=0,B=[];(new MutationObserver(function(){for(;B.length;)try{B.shift()()}catch(a){throw A.textContent=ea++,a;}})).observe(A,{characterData:!0});
function fa(a){B.push(a);A.textContent=ea++};var D=[],E;function ga(a){E||(E=!0,fa(F));D.push(a)}function F(){E=!1;for(var a=!!D.length;D.length;)D.shift()();return a}F.list=D;var ha=/[&\u00A0"]/g,ia=/[&\u00A0<>]/g;function ja(a){switch(a){case "&":return"&amp;";case "<":return"&lt;";case ">":return"&gt;";case '"':return"&quot;";case "\u00a0":return"&nbsp;"}}function ka(a){for(var b={},c=0;c<a.length;c++)b[a[c]]=!0;return b}var la=ka("area base br col command embed hr img input keygen link meta param source track wbr".split(" ")),ma=ka("style script xmp iframe noembed noframes plaintext noscript".split(" "));
function H(a,b){"template"===a.localName&&(a=a.content);for(var c="",d=b?b(a):a.childNodes,e=0,h=d.length,g;e<h&&(g=d[e]);e++){var f;a:{var k;f=g;k=a;var l=b;switch(f.nodeType){case Node.ELEMENT_NODE:for(var m=f.localName,q="<"+m,y=f.attributes,r=0;k=y[r];r++)q+=" "+k.name+'="'+k.value.replace(ha,ja)+'"';q+=">";f=la[m]?q:q+H(f,l)+"</"+m+">";break a;case Node.TEXT_NODE:f=f.data;f=k&&ma[k.localName]?f:f.replace(ia,ja);break a;case Node.COMMENT_NODE:f="\x3c!--"+f.data+"--\x3e";break a;default:throw window.console.error(f),
Error("not implemented");}}c+=f}return c};var I={},J=document.createTreeWalker(document,NodeFilter.SHOW_ALL,null,!1),K=document.createTreeWalker(document,NodeFilter.SHOW_ELEMENT,null,!1);function na(a){var b=[];J.currentNode=a;for(a=J.firstChild();a;)b.push(a),a=J.nextSibling();b.item=function(a){return b[a]};return b}I.parentNode=function(a){J.currentNode=a;return J.parentNode()};I.firstChild=function(a){J.currentNode=a;return J.firstChild()};I.lastChild=function(a){J.currentNode=a;return J.lastChild()};
I.previousSibling=function(a){J.currentNode=a;return J.previousSibling()};I.nextSibling=function(a){J.currentNode=a;return J.nextSibling()};I.childNodes=na;I.parentElement=function(a){K.currentNode=a;return K.parentNode()};I.firstElementChild=function(a){K.currentNode=a;return K.firstChild()};I.lastElementChild=function(a){K.currentNode=a;return K.lastChild()};I.previousElementSibling=function(a){K.currentNode=a;return K.previousSibling()};I.nextElementSibling=function(a){K.currentNode=a;return K.nextSibling()};
I.children=function(a){var b=[];K.currentNode=a;for(a=K.firstChild();a;)b.push(a),a=K.nextSibling();return b};I.innerHTML=function(a){return H(a,function(a){return na(a)})};I.textContent=function(a){if(a.nodeType!==Node.ELEMENT_NODE&&a.nodeType!==Node.DOCUMENT_FRAGMENT_NODE)return a.nodeValue;a=document.createTreeWalker(a,NodeFilter.SHOW_TEXT,null,!1);for(var b="",c;c=a.nextNode();)b+=c.nodeValue;return b};function M(a){for(;a.firstChild;)a.removeChild(a.firstChild)}
var N=Object.getOwnPropertyDescriptor(Element.prototype,"innerHTML")||Object.getOwnPropertyDescriptor(HTMLElement.prototype,"innerHTML"),O=document.implementation.createHTMLDocument("inert").createElement("div"),P=Object.getOwnPropertyDescriptor(Document.prototype,"activeElement"),oa={parentElement:{get:function(){var a=this.__shady&&this.__shady.parentNode;a&&a.nodeType!==Node.ELEMENT_NODE&&(a=null);return void 0!==a?a:I.parentElement(this)},configurable:!0},parentNode:{get:function(){var a=this.__shady&&
this.__shady.parentNode;return void 0!==a?a:I.parentNode(this)},configurable:!0},nextSibling:{get:function(){var a=this.__shady&&this.__shady.nextSibling;return void 0!==a?a:I.nextSibling(this)},configurable:!0},previousSibling:{get:function(){var a=this.__shady&&this.__shady.previousSibling;return void 0!==a?a:I.previousSibling(this)},configurable:!0},className:{get:function(){return this.getAttribute("class")||""},set:function(a){this.setAttribute("class",a)},configurable:!0},nextElementSibling:{get:function(){if(this.__shady&&
void 0!==this.__shady.nextSibling){for(var a=this.nextSibling;a&&a.nodeType!==Node.ELEMENT_NODE;)a=a.nextSibling;return a}return I.nextElementSibling(this)},configurable:!0},previousElementSibling:{get:function(){if(this.__shady&&void 0!==this.__shady.previousSibling){for(var a=this.previousSibling;a&&a.nodeType!==Node.ELEMENT_NODE;)a=a.previousSibling;return a}return I.previousElementSibling(this)},configurable:!0}},Q={childNodes:{get:function(){var a;if(this.__shady&&void 0!==this.__shady.firstChild){if(!this.__shady.childNodes){this.__shady.childNodes=
[];for(var b=this.firstChild;b;b=b.nextSibling)this.__shady.childNodes.push(b)}a=this.__shady.childNodes}else a=I.childNodes(this);a.item=function(b){return a[b]};return a},configurable:!0},childElementCount:{get:function(){return this.children.length},configurable:!0},firstChild:{get:function(){var a=this.__shady&&this.__shady.firstChild;return void 0!==a?a:I.firstChild(this)},configurable:!0},lastChild:{get:function(){var a=this.__shady&&this.__shady.lastChild;return void 0!==a?a:I.lastChild(this)},
configurable:!0},textContent:{get:function(){if(this.__shady&&void 0!==this.__shady.firstChild){for(var a=[],b=0,c=this.childNodes,d;d=c[b];b++)d.nodeType!==Node.COMMENT_NODE&&a.push(d.textContent);return a.join("")}return I.textContent(this)},set:function(a){this.nodeType===Node.ELEMENT_NODE||this.nodeType===Node.DOCUMENT_FRAGMENT_NODE?(M(this),(this.nodeType===Node.ELEMENT_NODE||0<a.length)&&this.appendChild(document.createTextNode(a))):(M(this),this.appendChild(document.createTextNode(a)))},configurable:!0},
firstElementChild:{get:function(){if(this.__shady&&void 0!==this.__shady.firstChild){for(var a=this.firstChild;a&&a.nodeType!==Node.ELEMENT_NODE;)a=a.nextSibling;return a}return I.firstElementChild(this)},configurable:!0},lastElementChild:{get:function(){if(this.__shady&&void 0!==this.__shady.lastChild){for(var a=this.lastChild;a&&a.nodeType!==Node.ELEMENT_NODE;)a=a.previousSibling;return a}return I.lastElementChild(this)},configurable:!0},children:{get:function(){var a;this.__shady&&void 0!==this.__shady.firstChild?
a=Array.prototype.filter.call(this.childNodes,function(a){return a.nodeType===Node.ELEMENT_NODE}):a=I.children(this);a.item=function(b){return a[b]};return a},configurable:!0},innerHTML:{get:function(){var a="template"===this.localName?this.content:this;return this.__shady&&void 0!==this.__shady.firstChild?H(a):I.innerHTML(a)},set:function(a){var b="template"===this.localName?this.content:this;M(b);for(N&&N.set?N.set.call(O,a):O.innerHTML=a;O.firstChild;)b.appendChild(O.firstChild)},configurable:!0}},
pa={shadowRoot:{get:function(){return this.__shady&&this.__shady.root||null},set:function(a){this.__shady=this.__shady||{};this.__shady.root=a},configurable:!0}},R={activeElement:{get:function(){var a;a=P&&P.get?P.get.call(document):p.g?void 0:document.activeElement;if(a&&a.nodeType){var b=!!u(this);if(this===document||b&&this.host!==a&&this.host.contains(a)){for(b=v(a);b&&b!==this;)a=b.host,b=v(a);a=this===document?b?null:a:b===this?a:null}else a=null}else a=null;return a},set:function(){},configurable:!0}};
function S(a,b,c){for(var d in b){var e=Object.getOwnPropertyDescriptor(a,d);e&&e.configurable||!e&&c?Object.defineProperty(a,d,b[d]):c&&console.warn("Could not define",d,"on",a)}}function T(a){S(a,oa);S(a,Q);S(a,R)}var qa=p.g?function(){}:function(a){a.__shady&&a.__shady.N||(a.__shady=a.__shady||{},a.__shady.N=!0,S(a,oa,!0))},ra=p.g?function(){}:function(a){a.__shady&&a.__shady.L||(a.__shady=a.__shady||{},a.__shady.L=!0,S(a,Q,!0),S(a,pa,!0))};function sa(a,b,c){qa(a);c=c||null;a.__shady=a.__shady||{};b.__shady=b.__shady||{};c&&(c.__shady=c.__shady||{});a.__shady.previousSibling=c?c.__shady.previousSibling:b.lastChild;var d=a.__shady.previousSibling;d&&d.__shady&&(d.__shady.nextSibling=a);(d=a.__shady.nextSibling=c)&&d.__shady&&(d.__shady.previousSibling=a);a.__shady.parentNode=b;c?c===b.__shady.firstChild&&(b.__shady.firstChild=a):(b.__shady.lastChild=a,b.__shady.firstChild||(b.__shady.firstChild=a));b.__shady.childNodes=null}
function U(a){if(!a.__shady||void 0===a.__shady.firstChild){a.__shady=a.__shady||{};a.__shady.firstChild=I.firstChild(a);a.__shady.lastChild=I.lastChild(a);ra(a);for(var b=a.__shady.childNodes=I.childNodes(a),c=0,d;c<b.length&&(d=b[c]);c++)d.__shady=d.__shady||{},d.__shady.parentNode=a,d.__shady.nextSibling=b[c+1]||null,d.__shady.previousSibling=b[c-1]||null,qa(d)}};var V={},ta=Element.prototype.insertBefore,ua=Element.prototype.removeChild,va=Element.prototype.setAttribute,wa=Element.prototype.removeAttribute,xa=Element.prototype.cloneNode,ya=Document.prototype.importNode,za=Element.prototype.addEventListener,Aa=Element.prototype.removeEventListener,Ba=Window.prototype.addEventListener,Ca=Window.prototype.removeEventListener,Da=Element.prototype.dispatchEvent;V.appendChild=Element.prototype.appendChild;V.insertBefore=ta;V.removeChild=ua;V.setAttribute=va;
V.removeAttribute=wa;V.cloneNode=xa;V.importNode=ya;V.addEventListener=za;V.removeEventListener=Aa;V.T=Ba;V.U=Ca;V.dispatchEvent=Da;var Ea="function"===typeof Event?Event:function(a,b){b=b||{};var c=document.createEvent("Event");c.initEvent(a,!!b.bubbles,!!b.cancelable);return c};function Fa(a){this.root=a;this.s="slot"}
Fa.prototype.D=function(){var a;if(Ga(this.root)){a=[];for(var b=0,c=this.root.host.firstChild;c;c=c.nextSibling)a[b++]=c;for(var b=[],c=Ha(this.root),d=0,e=c.length,h;d<e&&(h=c[d]);d++){var g=void 0,f,k=h,l=a,m=k.__shady.assignedNodes;m&&Ia(k,!0);k.__shady.assignedNodes=[];for(var q=!1,y=!1,r=0,L=l.length;r<L;r++){f=l[r];var C;if(C=f){var G=f;C=(C=k.getAttribute("name"))?C.trim():"";G=(G=G.getAttribute&&G.getAttribute("slot"))?G.trim():"";C=G==C}C&&(f.__shady.C!=k&&(q=!0),y=k,y.__shady.assignedNodes.push(f),
f.__shady.assignedSlot=y,l[r]=void 0,y=!0)}if(!y)for(l=k.childNodes,r=0;r<l.length;r++)f=l[r],f.__shady.C!=k&&(q=!0),L=k,L.__shady.assignedNodes.push(f),f.__shady.assignedSlot=L;if(m){for(f=0;f<m.length;f++)m[f].__shady.C=null;k.__shady.assignedNodes.length<m.length&&(q=!0)}m=k.__shady.assignedNodes;k.__shady.f=[];for(f=0;f<m.length&&(g=m[f]);f++)if(g.localName&&"slot"==g.localName){if(l=g.__shady.f)for(r=0;r<l.length;r++)k.__shady.f.push(l[r])}else k.__shady.f.push(m[f]);q&&Ja(this,k);(g=(g=h.parentNode)&&
g.__shady&&g.__shady.root)&&Ga(g)&&b.push(g)}for(c=0;c<a.length;c++)if(h=a[c])h.__shady=h.__shady||{},h.__shady.assignedSlot=void 0,(d=I.parentNode(h))&&V.removeChild.call(d,h);a=b}else a=[];return a};function Ia(a,b){var c=a.__shady.assignedNodes;if(c)for(var d=0;d<c.length;d++){var e=c[d];b&&(e.__shady.C=e.__shady.assignedSlot);e.__shady.assignedSlot===a&&(e.__shady.assignedSlot=null)}}
function Ja(a,b){V.dispatchEvent.call(b,new Ea("slotchange"));b.__shady.assignedSlot&&Ja(a,b.__shady.assignedSlot)}Fa.prototype.u=function(a){return!a.__shady.assignedSlot};var Ka={};function W(a,b){if(a!==Ka)throw new TypeError("Illegal constructor");a=document.createDocumentFragment();a.__proto__=W.prototype;a.M="ShadyRoot";U(b);U(a);b.shadowRoot=a;a.host=b;a.c=!1;a.B=!1;a.b=new Fa(a);a.update();return a}W.prototype=Object.create(DocumentFragment.prototype);W.prototype.update=function(){var a=this;this.c||(this.c=!0,ga(function(){return La(a)}))};
function La(a){if(a.c){for(var b=a;a;){a.c&&(b=a);a:{var c;c=a;a=c.host.getRootNode();if(u(a))for(var d=c.host.childNodes,e=0;e<d.length;e++)if(c=d[e],c.localName&&"slot"==c.localName)break a;a=void 0}}b._render()}}W.prototype._render=function(){this.B=this.c=!1;this.l||Ma(this);this.l=!1;this.D();Na(this.host,Oa(this,this.host));for(var a=Ha(this),b=0,c=a.length,d,e;b<c&&(d=a[b]);b++)e=d.parentNode,e!==this.host&&e!==this&&Na(e,Oa(this,e))};W.prototype.D=function(){for(var a=this.b.D(),b=0;b<a.length;b++)a[b]._render()};
function Ma(a){var b=a.a;if(b)for(var c=0,d;c<b.length;c++)d=b[c],d.getRootNode()!==a&&Ia(d);b=a.a=a.b.root.querySelectorAll("slot");for(a=0;a<b.length;a++)d=b[a],d.__shady=d.__shady||{},U(d),U(d.parentNode)}function Oa(a,b){var c=[];b=(b.__shady&&b.__shady.root||b).childNodes;for(var d=0;d<b.length;d++){var e=b[d];if(e.localName&&"slot"==e.localName)for(var h=e.__shady.f||(e.__shady.f=[]),g=0;g<h.length;g++){var f=h[g];a.u(e,f)&&c.push(f)}else c.push(e)}return c}
W.prototype.u=function(a,b){return this.b.u(a,b)};function Na(a,b){for(var c=I.childNodes(a),d=aa(b,b.length,c,c.length),e=0,h=0,g;e<d.length&&(g=d[e]);e++){for(var f=0,k;f<g.i.length&&(k=g.i[f]);f++)I.parentNode(k)===a&&V.removeChild.call(a,k),c.splice(g.index+h,1);h-=g.m}for(e=0;e<d.length&&(g=d[e]);e++)for(h=c[g.index],f=g.index;f<g.index+g.m;f++)k=b[f],V.insertBefore.call(a,k,h),c.splice(f,0,k)}function Ga(a){return!(!a.a||!a.a.length)}function Ha(a){a.a||Ma(a);return a.a}
W.prototype.addEventListener=function(a,b,c){"object"!==typeof c&&(c={capture:!!c});c.A=this;this.host.addEventListener(a,b,c)};W.prototype.removeEventListener=function(a,b,c){"object"!==typeof c&&(c={capture:!!c});c.A=this;this.host.removeEventListener(a,b,c)};W.prototype.getElementById=function(a){return this.querySelector("#"+a)};var Pa=W.prototype;S(Pa,Q,!0);S(Pa,R,!0);function Qa(a){var b=a.__shady&&a.__shady.parentNode,c,d=v(a);if(b||d){c=Ra(a);if(b){a.__shady=a.__shady||{};b.__shady=b.__shady||{};a===b.__shady.firstChild&&(b.__shady.firstChild=a.__shady.nextSibling);a===b.__shady.lastChild&&(b.__shady.lastChild=a.__shady.previousSibling);var e=a.__shady.previousSibling,h=a.__shady.nextSibling;e&&(e.__shady=e.__shady||{},e.__shady.nextSibling=h);h&&(h.__shady=h.__shady||{},h.__shady.previousSibling=e);a.__shady.parentNode=a.__shady.previousSibling=a.__shady.nextSibling=
void 0;void 0!==b.__shady.childNodes&&(b.__shady.childNodes=null)}if(e=d){for(var g,e=Ha(d),h=0;h<e.length;h++){var f=e[h],k;a:{for(k=f;k;){if(k==a){k=!0;break a}k=k.parentNode}k=void 0}if(k)for(f=f.assignedNodes({flatten:!0}),k=0;k<f.length;k++){g=!0;var l=f[k],m=I.parentNode(l);m&&V.removeChild.call(m,l)}}e=g}b=b&&d&&b.localName===d.b.s;if(e||b)d.l=!1,X(d)}Sa(a);return c}function Ta(a,b,c){if(a=a.__shady&&a.__shady.h)b&&a.addedNodes.push(b),c&&a.removedNodes.push(c),Ua(a)}
function Va(a){if(a&&a.nodeType){a.__shady=a.__shady||{};var b=a.__shady.F;void 0===b&&(u(a)?b=a:b=(b=a.parentNode)?Va(b):a,document.documentElement.contains(a)&&(a.__shady.F=b));return b}}function Wa(a,b,c){var d,e=c.b.s;if(a.nodeType!==Node.DOCUMENT_FRAGMENT_NODE||a.__noInsertionPoint)a.localName===e&&(U(b),U(a),d=!0);else for(var e=a.querySelectorAll(e),h=0,g,f;h<e.length&&(g=e[h]);h++)f=g.parentNode,f===a&&(f=b),f=Wa(g,f,c),d=d||f;return d}
function Xa(a){return(a=a&&a.__shady&&a.__shady.root)&&Ga(a)}function Sa(a){if(a.__shady&&void 0!==a.__shady.F)for(var b=a.childNodes,c=0,d=b.length,e;c<d&&(e=b[c]);c++)Sa(e);a.__shady=a.__shady||{};a.__shady.F=void 0}function Ra(a){a=a.parentNode;if(Xa(a))return X(a.__shady.root),!0}function X(a){a.B=!0;a.update()}function Ya(a,b){"slot"===b?Ra(a):"slot"===a.localName&&"name"===b&&(a=v(a))&&a.update()}function Za(a,b,c){var d=[];$a(a.childNodes,b,c,d);return d}
function $a(a,b,c,d){for(var e=0,h=a.length,g;e<h&&(g=a[e]);e++){var f;if(f=g.nodeType===Node.ELEMENT_NODE){f=g;var k=b,l=c,m=d,q=k(f);q&&m.push(f);l&&l(q)?f=q:($a(f.childNodes,k,l,m),f=void 0)}if(f)break}}var Y=null;
function ab(a,b,c){if(c){var d=c.__shady&&c.__shady.parentNode;if(void 0!==d&&d!==a||void 0===d&&I.parentNode(c)!==a)throw Error("Failed to execute 'insertBefore' on 'Node': The node before which the new node is to be inserted is not a child of this node.");}if(c===b)return b;b.nodeType!==Node.DOCUMENT_FRAGMENT_NODE&&((d=b.__shady&&b.__shady.parentNode)?(Ta(d,null,b),Qa(b)):(b.parentNode&&V.removeChild.call(b.parentNode,b),Sa(b)));var d=c,e=v(a),h;e&&(b.__noInsertionPoint&&!e.B&&(e.l=!0),h=Wa(b,a,
e))&&(e.l=!1);if(a.__shady&&void 0!==a.__shady.firstChild)if(ra(a),a.__shady=a.__shady||{},void 0!==a.__shady.firstChild&&(a.__shady.childNodes=null),b.nodeType===Node.DOCUMENT_FRAGMENT_NODE){for(var g=b.childNodes,f=0;f<g.length;f++)sa(g[f],a,d);b.__shady=b.__shady||{};g=void 0!==b.__shady.firstChild?null:void 0;b.__shady.firstChild=b.__shady.lastChild=g;b.__shady.childNodes=g}else sa(b,a,d);var g=h,f=e&&e.b.s||"",k=b.nodeType===Node.DOCUMENT_FRAGMENT_NODE&&!b.__noInsertionPoint&&f&&b.querySelector(f);
h=k&&k.parentNode.nodeType!==Node.DOCUMENT_FRAGMENT_NODE;((k=k||b.localName===f)||a.localName===f||g)&&e&&X(e);(e=Xa(a))&&X(a.__shady&&a.__shady.root);if(!(e||k&&!h||a.__shady.root||d&&u(d.parentNode)&&d.parentNode.c)){if(c&&(d=v(c))){var l;if(c.localName===d.b.s)a:{d=c.assignedNodes({flatten:!0});e=Va(c);h=0;for(g=d.length;h<g&&(l=d[h]);h++)if(e.u(c,l))break a;l=void 0}else l=c;c=l}l=u(a)?a.host:a;c?V.insertBefore.call(l,b,c):V.appendChild.call(l,b)}Ta(a,b);return b}
function bb(a,b){if(a.ownerDocument!==document)return V.importNode.call(document,a,b);var c=V.importNode.call(document,a,!1);if(b){a=a.childNodes;b=0;for(var d;b<a.length;b++)d=bb(a[b],!0),c.appendChild(d)}return c};function cb(){this.a=!1;this.addedNodes=[];this.removedNodes=[];this.o=new Set}function Ua(a){a.a||(a.a=!0,fa(function(){db(a)}))}function db(a){if(a.a){a.a=!1;var b=a.takeRecords();b.length&&a.o.forEach(function(a){a(b)})}}cb.prototype.takeRecords=function(){if(this.addedNodes.length||this.removedNodes.length){var a=[{addedNodes:this.addedNodes,removedNodes:this.removedNodes}];this.addedNodes=[];this.removedNodes=[];return a}return[]};
function eb(a,b){a.__shady=a.__shady||{};a.__shady.h||(a.__shady.h=new cb);a.__shady.h.o.add(b);var c=a.__shady.h;return{O:b,R:c,P:a,takeRecords:function(){return c.takeRecords()}}}function fb(a){var b=a&&a.R;b&&(b.o.delete(a.O),b.o.size||(a.P.__shady.h=null))}
function gb(a,b){var c=b.getRootNode();return a.map(function(a){var b=c===a.target.getRootNode();if(b&&a.addedNodes){if(b=Array.from(a.addedNodes).filter(function(a){return c===a.getRootNode()}),b.length)return a=Object.create(a),Object.defineProperty(a,"addedNodes",{value:b,configurable:!0}),a}else if(b)return a}).filter(function(a){return a})};var hb={blur:!0,focus:!0,focusin:!0,focusout:!0,click:!0,dblclick:!0,mousedown:!0,mouseenter:!0,mouseleave:!0,mousemove:!0,mouseout:!0,mouseover:!0,mouseup:!0,wheel:!0,beforeinput:!0,input:!0,keydown:!0,keyup:!0,compositionstart:!0,compositionupdate:!0,compositionend:!0,touchstart:!0,touchend:!0,touchmove:!0,touchcancel:!0,pointerover:!0,pointerenter:!0,pointerdown:!0,pointermove:!0,pointerup:!0,pointercancel:!0,pointerout:!0,pointerleave:!0,gotpointercapture:!0,lostpointercapture:!0,dragstart:!0,
drag:!0,dragenter:!0,dragleave:!0,dragover:!0,drop:!0,dragend:!0,DOMActivate:!0,DOMFocusIn:!0,DOMFocusOut:!0,keypress:!0};function ib(a,b){var c=[],d=a;for(a=a===window?window:a.getRootNode();d;)c.push(d),d=d.assignedSlot?d.assignedSlot:d.nodeType===Node.DOCUMENT_FRAGMENT_NODE&&d.host&&(b||d!==a)?d.host:d.parentNode;c[c.length-1]===document&&c.push(window);return c}
function jb(a,b){if(!u)return a;a=ib(a,!0);for(var c=0,d,e,h,g;c<b.length;c++)if(d=b[c],h=d===window?window:d.getRootNode(),h!==e&&(g=a.indexOf(h),e=h),!u(h)||-1<g)return d}
var kb={get composed(){!1!==this.isTrusted&&void 0===this.v&&(this.v=hb[this.type]);return this.v||!1},composedPath:function(){this.G||(this.G=ib(this.__target,this.composed));return this.G},get target(){return jb(this.currentTarget,this.composedPath())},get relatedTarget(){if(!this.H)return null;this.I||(this.I=ib(this.H,!0));return jb(this.currentTarget,this.I)},stopPropagation:function(){Event.prototype.stopPropagation.call(this);this.w=!0},stopImmediatePropagation:function(){Event.prototype.stopImmediatePropagation.call(this);
this.w=this.K=!0}};function lb(a){function b(b,d){b=new a(b,d);b.v=d&&!!d.composed;return b}da(b,a);b.prototype=a.prototype;return b}var mb={focus:!0,blur:!0};function nb(a,b,c){if(c=b.__handlers&&b.__handlers[a.type]&&b.__handlers[a.type][c])for(var d=0,e;(e=c[d])&&a.target!==a.relatedTarget&&(e.call(b,a),!a.K);d++);}
function ob(a){var b=a.composedPath(),c;Object.defineProperty(a,"currentTarget",{get:function(){return c},configurable:!0});for(var d=b.length-1;0<=d;d--)if(c=b[d],nb(a,c,"capture"),a.w)return;Object.defineProperty(a,"eventPhase",{get:function(){return Event.AT_TARGET}});for(var e,d=0;d<b.length;d++)if(c=b[d],!d||c.shadowRoot&&c.shadowRoot===e)if(nb(a,c,"bubble"),c!==window&&(e=c.getRootNode()),a.w)break}
function pb(a,b,c,d,e,h){for(var g=0;g<a.length;g++){var f=a[g],k=f.type,l=f.capture,m=f.once,q=f.passive;if(b===f.node&&c===k&&d===l&&e===m&&h===q)return g}return-1}
function qb(a,b,c){if(b){var d,e,h;"object"===typeof c?(d=!!c.capture,e=!!c.once,h=!!c.passive):(d=!!c,h=e=!1);var g=c&&c.A||this,f=b.j;if(f){if(-1<pb(f,g,a,d,e,h))return}else b.j=[];f=function(d){e&&this.removeEventListener(a,b,c);d.__target||rb(d);var f;g!==this&&(f=Object.getOwnPropertyDescriptor(d,"currentTarget"),Object.defineProperty(d,"currentTarget",{get:function(){return g},configurable:!0}));if(d.composed||-1<d.composedPath().indexOf(g))if(d.target===d.relatedTarget)d.eventPhase===Event.BUBBLING_PHASE&&
d.stopImmediatePropagation();else if(d.eventPhase===Event.CAPTURING_PHASE||d.bubbles||d.target===g){var h="object"===typeof b&&b.handleEvent?b.handleEvent(d):b.call(g,d);g!==this&&(f?(Object.defineProperty(d,"currentTarget",f),f=null):delete d.currentTarget);return h}};b.j.push({node:this,type:a,capture:d,once:e,passive:h,V:f});mb[a]?(this.__handlers=this.__handlers||{},this.__handlers[a]=this.__handlers[a]||{capture:[],bubble:[]},this.__handlers[a][d?"capture":"bubble"].push(f)):(this instanceof
Window?V.T:V.addEventListener).call(this,a,f,c)}}function sb(a,b,c){if(b){var d,e,h;"object"===typeof c?(d=!!c.capture,e=!!c.once,h=!!c.passive):(d=!!c,h=e=!1);var g=c&&c.A||this,f=void 0,k;k=null;try{k=b.j}catch(l){}k&&(e=pb(k,g,a,d,e,h),-1<e&&(f=k.splice(e,1)[0].V,k.length||(b.j=void 0)));(this instanceof Window?V.U:V.removeEventListener).call(this,a,f||b,c);f&&mb[a]&&this.__handlers&&this.__handlers[a]&&(a=this.__handlers[a][d?"capture":"bubble"],f=a.indexOf(f),-1<f&&a.splice(f,1))}}
function tb(){for(var a in mb)window.addEventListener(a,function(a){a.__target||(rb(a),ob(a))},!0)}function rb(a){a.__target=a.target;a.H=a.relatedTarget;if(p.g){var b=Object.getPrototypeOf(a);if(!b.hasOwnProperty("__patchProto")){var c=Object.create(b);c.W=b;x(c,kb);b.__patchProto=c}a.__proto__=b.__patchProto}else x(a,kb)}var ub=lb(window.Event),vb=lb(window.CustomEvent),wb=lb(window.MouseEvent);function xb(a){var b=a.getRootNode();u(b)&&La(b);return a.__shady&&a.__shady.assignedSlot||null}
var yb={addEventListener:qb.bind(window),removeEventListener:sb.bind(window)},zb={addEventListener:qb,removeEventListener:sb,appendChild:function(a){return ab(this,a)},insertBefore:function(a,b){return ab(this,a,b)},removeChild:function(a){if(a.parentNode!==this)throw Error("The node to be removed is not a child of this node: "+a);if(!Qa(a)){var b=u(this)?this.host:this,c=I.parentNode(a);b===c&&V.removeChild.call(b,a)}Ta(this,null,a);return a},replaceChild:function(a,b){this.insertBefore(a,b);this.removeChild(b);
return a},cloneNode:function(a){var b;if("template"==this.localName)b=V.cloneNode.call(this,a);else if(b=V.cloneNode.call(this,!1),a){a=this.childNodes;for(var c=0,d;c<a.length;c++)d=a[c].cloneNode(!0),b.appendChild(d)}return b},getRootNode:function(){return Va(this)},get isConnected(){var a=this.ownerDocument;if(a&&a.contains&&a.contains(this)||(a=a.documentElement)&&a.contains&&a.contains(this))return!0;for(a=this;a&&!(a instanceof Document);)a=a.parentNode||(a instanceof W?a.host:void 0);return!!(a&&
a instanceof Document)},dispatchEvent:function(a){F();return V.dispatchEvent.call(this,a)}},Ab={get assignedSlot(){return xb(this)}},Bb={querySelector:function(a){return Za(this,function(b){return ca.call(b,a)},function(a){return!!a})[0]||null},querySelectorAll:function(a){return Za(this,function(b){return ca.call(b,a)})}},Cb={assignedNodes:function(a){if("slot"===this.localName){var b=this.getRootNode();u(b)&&La(b);return this.__shady?(a&&a.flatten?this.__shady.f:this.__shady.assignedNodes)||[]:
[]}}},Db=z({setAttribute:function(a,b){Y||(Y=window.ShadyCSS&&window.ShadyCSS.ScopingShim);Y&&"class"===a?Y.setElementClass(this,b):(V.setAttribute.call(this,a,b),Ya(this,a))},removeAttribute:function(a){V.removeAttribute.call(this,a);Ya(this,a)},attachShadow:function(a){if(!this)throw"Must provide a host.";if(!a)throw"Not enough arguments.";return new W(Ka,this)},get slot(){return this.getAttribute("slot")},set slot(a){this.setAttribute("slot",a)},get assignedSlot(){return xb(this)}},Bb,Cb);
Object.defineProperties(Db,pa);var Eb=z({importNode:function(a,b){return bb(a,b)},getElementById:function(a){return this.querySelector("#"+a)}},Bb);Object.defineProperties(Eb,{_activeElement:R.activeElement});var Fb=HTMLElement.prototype.blur,Gb=z({blur:function(){var a=this.shadowRoot;(a=a&&a.activeElement)?a.blur():Fb.call(this)}});
function Z(a,b){for(var c=Object.getOwnPropertyNames(b),d=0;d<c.length;d++){var e=c[d],h=Object.getOwnPropertyDescriptor(b,e);h.value?a[e]=h.value:Object.defineProperty(a,e,h)}};if(p.J){window.ShadyDOM={inUse:p.J,patch:function(a){return a},isShadyRoot:u,enqueue:ga,flush:F,settings:p,filterMutations:gb,observeChildren:eb,unobserveChildren:fb,nativeMethods:V,nativeTree:I};window.Event=ub;window.CustomEvent=vb;window.MouseEvent=wb;tb();var Hb=window.customElements&&window.customElements.nativeHTMLElement||HTMLElement;Z(window.Node.prototype,zb);Z(window.Window.prototype,yb);Z(window.Text.prototype,Ab);Z(window.DocumentFragment.prototype,Bb);Z(window.Element.prototype,Db);Z(window.Document.prototype,
Eb);window.HTMLSlotElement&&Z(window.HTMLSlotElement.prototype,Cb);Z(Hb.prototype,Gb);p.g&&(T(window.Node.prototype),T(window.Text.prototype),T(window.DocumentFragment.prototype),T(window.Element.prototype),T(Hb.prototype),T(window.Document.prototype),window.HTMLSlotElement&&T(window.HTMLSlotElement.prototype));window.ShadowRoot=W};
}).call(self);

//# sourceMappingURL=cloudydom.min.js.map


/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {(function(){
/*

Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
'use strict';var l,aa="undefined"!=typeof window&&window===this?this:"undefined"!=typeof global&&null!=global?global:this,m={};function n(){this.end=this.start=0;this.rules=this.parent=this.previous=null;this.cssText=this.parsedCssText="";this.atRule=!1;this.type=0;this.parsedSelector=this.selector=this.keyframesName=""}
function p(a){a=a.replace(ba,"").replace(ca,"");var b=da,c=a,e=new n;e.start=0;e.end=c.length;for(var d=e,f=0,g=c.length;f<g;f++)if("{"===c[f]){d.rules||(d.rules=[]);var h=d,k=h.rules[h.rules.length-1]||null,d=new n;d.start=f+1;d.parent=h;d.previous=k;h.rules.push(d)}else"}"===c[f]&&(d.end=f+1,d=d.parent||e);return b(e,a)}
function da(a,b){var c=b.substring(a.start,a.end-1);a.parsedCssText=a.cssText=c.trim();a.parent&&((c=b.substring(a.previous?a.previous.end:a.parent.start,a.start-1),c=ea(c),c=c.replace(fa," "),c=c.substring(c.lastIndexOf(";")+1),c=a.parsedSelector=a.selector=c.trim(),a.atRule=!c.indexOf("@"),a.atRule)?c.indexOf("@media")?c.match(ha)&&(a.type=r,a.keyframesName=a.selector.split(fa).pop()):a.type=ga:a.type=c.indexOf("--")?ia:ja);if(c=a.rules)for(var e=0,d=c.length,f;e<d&&(f=c[e]);e++)da(f,b);return a}
function ea(a){return a.replace(/\\([0-9a-f]{1,6})\s/gi,function(a,c){a=c;for(c=6-a.length;c--;)a="0"+a;return"\\"+a})}
function ka(a,b,c){c=void 0===c?"":c;var e="";if(a.cssText||a.rules){var d=a.rules,f;if(f=d)f=d[0],f=!(f&&f.selector&&0===f.selector.indexOf("--"));if(f){f=0;for(var g=d.length,h;f<g&&(h=d[f]);f++)e=ka(h,b,e)}else b?b=a.cssText:(b=a.cssText,b=b.replace(la,"").replace(ma,""),b=b.replace(na,"").replace(oa,"")),(e=b.trim())&&(e="  "+e+"\n")}e&&(a.selector&&(c+=a.selector+" {\n"),c+=e,a.selector&&(c+="}\n\n"));return c}
var ia=1,r=7,ga=4,ja=1E3,ba=/\/\*[^*]*\*+([^/*][^*]*\*+)*\//gim,ca=/@import[^;]*;/gim,la=/(?:^[^;\-\s}]+)?--[^;{}]*?:[^{};]*?(?:[;\n]|$)/gim,ma=/(?:^[^;\-\s}]+)?--[^;{}]*?:[^{};]*?{[^}]*?}(?:[;\n]|$)?/gim,na=/@apply\s*\(?[^);]*\)?\s*(?:[;\n]|$)?/gim,oa=/[^;:]*?:[^;]*?var\([^;]*\)(?:[;\n]|$)?/gim,ha=/^@[^\s]*keyframes/,fa=/\s+/g;var pa=Promise.resolve();function qa(a){(a=m[a])&&(a._applyShimInvalid=!0)}function ra(a){a.a||(a.a=!0,pa.then(function(){a._applyShimInvalid=!1;a.a=!1}))};var sa=/(?:^|[;\s{]\s*)(--[\w-]*?)\s*:\s*(?:([^;{]*)|{([^}]*)})(?:(?=[;\s}])|$)/gi,ta=/(?:^|\W+)@apply\s*\(?([^);\n]*)\)?/gi,ua=/(--[\w-]+)\s*([:,;)]|$)/gi,va=/(animation\s*:)|(animation-name\s*:)/,wa=/@media[^(]*(\([^)]*\))/,xa=/\{[^}]*\}/g;var t=!(window.ShadyDOM&&window.ShadyDOM.inUse),u=!navigator.userAgent.match("AppleWebKit/601")&&window.CSS&&CSS.supports&&CSS.supports("box-shadow","0 0 0 var(--foo)");function ya(a){a&&(u=u&&!a.nativeCss&&!a.shimcssproperties,t=t&&!a.nativeShadow&&!a.shimshadow)}window.ShadyCSS?ya(window.ShadyCSS):window.WebComponents&&ya(window.WebComponents.flags);var v=t,w=u;function y(a,b){if(!a)return"";"string"===typeof a&&(a=p(a));b&&z(a,b);return ka(a,w)}function A(a){!a.__cssRules&&a.textContent&&(a.__cssRules=p(a.textContent));return a.__cssRules||null}function za(a){return!!a.parent&&a.parent.type===r}function z(a,b,c,e){if(a){var d=!1,f=a.type;if(e&&f===ga){var g=a.selector.match(wa);g&&(window.matchMedia(g[1]).matches||(d=!0))}f===ia?b(a):c&&f===r?c(a):f===ja&&(d=!0);if((a=a.rules)&&!d)for(var d=0,f=a.length,h;d<f&&(h=a[d]);d++)z(h,b,c,e)}}
function B(a,b,c,e){var d=document.createElement("style");b&&d.setAttribute("scope",b);d.textContent=a;Aa(d,c,e);return d}var C=null;function Aa(a,b,c){b=b||document.head;b.insertBefore(a,c&&c.nextSibling||b.firstChild);C?a.compareDocumentPosition(C)===Node.DOCUMENT_POSITION_PRECEDING&&(C=a):C=a}
function Ba(a,b){var c=a.indexOf("var(");if(-1===c)return b(a,"","","");var e;a:{var d=0;e=c+3;for(var f=a.length;e<f;e++)if("("===a[e])d++;else if(")"===a[e]&&!--d)break a;e=-1}d=a.substring(c+4,e);c=a.substring(0,c);a=Ba(a.substring(e+1),b);e=d.indexOf(",");return-1===e?b(c,d.trim(),"",a):b(c,d.substring(0,e).trim(),d.substring(e+1).trim(),a)}function D(a,b){v?a.setAttribute("class",b):window.ShadyDOM.nativeMethods.setAttribute.call(a,"class",b)}
function E(a){var b=a.localName,c="";b?-1<b.indexOf("-")||(c=b,b=a.getAttribute&&a.getAttribute("is")||""):(b=a.is,c=a.extends);return{is:b,u:c}};var F=null,Ca=window.HTMLImports&&window.HTMLImports.whenReady||null,G;function Da(a){Ca?Ca(a):(F||(F=new Promise(function(a){G=a}),"complete"===document.readyState?G():document.addEventListener("readystatechange",function(){"complete"===document.readyState&&G()})),F.then(function(){a&&a()}))};function H(){}function I(a,b,c){var e=J;a.__styleScoped?a.__styleScoped=null:Ea(e,a,b||"",c)}
function Ea(a,b,c,e){if(b.nodeType===Node.ELEMENT_NODE&&c)if(b.classList)e?(b.classList.remove("style-scope"),b.classList.remove(c)):(b.classList.add("style-scope"),b.classList.add(c));else if(b.getAttribute){var d=b.getAttribute(Fa);e?d&&(d=d.replace("style-scope","").replace(c,""),D(b,d)):D(b,(d?d+" ":"")+"style-scope "+c)}if(b="template"===b.localName?(b.content||b.R).childNodes:b.children||b.childNodes)for(d=0;d<b.length;d++)Ea(a,b[d],c,e)}
function K(a,b,c){var e=J,d=a.__cssBuild;v||"shady"===d?b=y(b,c):(a=E(a),b=Ga(e,b,a.is,a.u,c)+"\n\n");return b.trim()}function Ga(a,b,c,e,d){var f=L(c,e);c=c?Ha+c:"";return y(b,function(b){b.c||(b.selector=b.g=N(a,b,a.b,c,f),b.c=!0);d&&d(b,c,f)})}function L(a,b){return b?"[is="+a+"]":a}function N(a,b,c,e,d){var f=b.selector.split(Ia);if(!za(b)){b=0;for(var g=f.length,h;b<g&&(h=f[b]);b++)f[b]=c.call(a,h,e,d)}return f.join(Ia)}
H.prototype.b=function(a,b,c){var e=!1;a=a.trim();a=a.replace(Ja,function(a,b,c){return":"+b+"("+c.replace(/\s/g,"")+")"});a=a.replace(Ka,La+" $1");return a=a.replace(Ma,function(a,f,g){e||(a=Na(g,f,b,c),e=e||a.stop,f=a.H,g=a.value);return f+g})};
function Na(a,b,c,e){var d=a.indexOf(Oa);0<=a.indexOf(La)?a=Pa(a,e):0!==d&&(a=c?Qa(a,c):a);c=!1;0<=d&&(b="",c=!0);var f;c&&(f=!0,c&&(a=a.replace(Ra,function(a,b){return" > "+b})));a=a.replace(Sa,function(a,b,c){return'[dir="'+c+'"] '+b+", "+b+'[dir="'+c+'"]'});return{value:a,H:b,stop:f}}function Qa(a,b){a=a.split(Ta);a[0]+=b;return a.join(Ta)}
function Pa(a,b){var c=a.match(Ua);return(c=c&&c[2].trim()||"")?c[0].match(Va)?a.replace(Ua,function(a,c,f){return b+f}):c.split(Va)[0]===b?c:Wa:a.replace(La,b)}function Xa(a){a.selector===Ya&&(a.selector="html")}H.prototype.c=function(a){return a.match(Oa)?this.b(a,Za):Qa(a.trim(),Za)};aa.Object.defineProperties(H.prototype,{a:{configurable:!0,enumerable:!0,get:function(){return"style-scope"}}});
var Ja=/:(nth[-\w]+)\(([^)]+)\)/,Za=":not(.style-scope)",Ia=",",Ma=/(^|[\s>+~]+)((?:\[.+?\]|[^\s>+~=\[])+)/g,Va=/[[.:#*]/,La=":host",Ya=":root",Oa="::slotted",Ka=new RegExp("^("+Oa+")"),Ua=/(:host)(?:\(((?:\([^)(]*\)|[^)(]*)+?)\))/,Ra=/(?:::slotted)(?:\(((?:\([^)(]*\)|[^)(]*)+?)\))/,Sa=/(.*):dir\((?:(ltr|rtl))\)/,Ha=".",Ta=":",Fa="class",Wa="should_not_match",J=new H;function $a(){}
if(!v){var ab=function(a){for(var b=0;b<a.length;b++){var c=a[b];if(c.target!==document.documentElement&&c.target!==document.head){for(var e=0;e<c.addedNodes.length;e++){var d=c.addedNodes[e];if(d.classList&&!d.classList.contains(J.a)||d instanceof window.SVGElement&&(!d.hasAttribute("class")||0>d.getAttribute("class").indexOf(J.a))){var f=d.getRootNode();f.nodeType===Node.DOCUMENT_FRAGMENT_NODE&&(f=f.host)&&(f=E(f).is,I(d,f))}}for(e=0;e<c.removedNodes.length;e++)if(d=c.removedNodes[e],d.nodeType===
Node.ELEMENT_NODE&&(f=void 0,d.classList?f=Array.from(d.classList):d.hasAttribute("class")&&(f=d.getAttribute("class").split(/\s+/)),f)){var g=f.indexOf(J.a);0<=g&&(f=f[g+1])&&I(d,f,!0)}}}},bb=new MutationObserver(ab),cb=function(a){bb.observe(a,{childList:!0,subtree:!0})};if(window.a&&!window.customElements.flush)cb(document);else{var db=function(){cb(document.body)};window.HTMLImports?window.HTMLImports.whenReady(db):requestAnimationFrame(function(){if("loading"===document.readyState){var a=function(){db();
document.removeEventListener("readystatechange",a)};document.addEventListener("readystatechange",a)}else db()})}$a=function(){ab(bb.takeRecords())}}var eb=$a;function O(a,b,c,e,d){this.j=a||null;this.b=b||null;this.B=c||[];this.s=null;this.u=d||"";this.a=this.h=this.m=null}function P(a){return a?a.__styleInfo:null}function fb(a,b){return a.__styleInfo=b}O.prototype.c=function(){return this.j};O.prototype._getStyleRules=O.prototype.c;var Q=window.Element.prototype,gb=Q.matches||Q.matchesSelector||Q.mozMatchesSelector||Q.msMatchesSelector||Q.oMatchesSelector||Q.webkitMatchesSelector,hb=navigator.userAgent.match("Trident");function ib(){}function jb(a){var b={},c=[],e=0;z(a,function(a){R(a);a.index=e++;a=a.f.cssText;for(var c;c=ua.exec(a);){var d=c[1];":"!==c[2]&&(b[d]=!0)}},function(a){c.push(a)});a.b=c;a=[];for(var d in b)a.push(d);return a}
function R(a){if(!a.f){var b={},c={};S(a,c)&&(b.i=c,a.rules=null);b.cssText=a.parsedCssText.replace(xa,"").replace(sa,"");a.f=b}}function S(a,b){var c=a.f;if(c){if(c.i)return Object.assign(b,c.i),!0}else{for(var c=a.parsedCssText,e;a=sa.exec(c);){e=(a[2]||a[3]).trim();if("inherit"!==e||"unset"!==e)b[a[1].trim()]=e;e=!0}return e}}
function T(a,b,c){b&&(b=0<=b.indexOf(";")?kb(a,b,c):Ba(b,function(b,d,f,g){if(!d)return b+g;(d=T(a,c[d],c))&&"initial"!==d?"apply-shim-inherit"===d&&(d="inherit"):d=T(a,c[f]||f,c)||f;return b+(d||"")+g}));return b&&b.trim()||""}
function kb(a,b,c){b=b.split(";");for(var e=0,d,f;e<b.length;e++)if(d=b[e]){ta.lastIndex=0;if(f=ta.exec(d))d=T(a,c[f[1]],c);else if(f=d.indexOf(":"),-1!==f){var g=d.substring(f),g=g.trim(),g=T(a,g,c)||g;d=d.substring(0,f)+g}b[e]=d&&d.lastIndexOf(";")===d.length-1?d.slice(0,-1):d||""}return b.join(";")}
function lb(a,b){var c={},e=[];z(a,function(a){a.f||R(a);var d=a.g||a.parsedSelector;b&&a.f.i&&d&&gb.call(b,d)&&(S(a,c),a=a.index,d=parseInt(a/32,10),e[d]=(e[d]||0)|1<<a%32)},null,!0);return{i:c,key:e}}
function mb(a,b,c,e,d){c.f||R(c);if(c.f.i){b=E(b);a=b.is;b=b.u;b=a?L(a,b):"html";var f=c.parsedSelector,g=":host > *"===f||"html"===f,h=0===f.indexOf(":host")&&!g;"shady"===e&&(g=f===b+" > *."+b||-1!==f.indexOf("html"),h=!g&&0===f.indexOf(b));"shadow"===e&&(g=":host > *"===f||"html"===f,h=h&&!g);if(g||h)e=b,h&&(v&&!c.g&&(c.g=N(J,c,J.b,a?Ha+a:"",b)),e=c.g||b),d({M:e,K:h,S:g})}}
function nb(a,b){var c={},e={},d=U,f=b&&b.__cssBuild;z(b,function(b){mb(d,a,b,f,function(d){gb.call(a.A||a,d.M)&&(d.K?S(b,c):S(b,e))})},null,!0);return{L:e,J:c}}
function ob(a,b,c,e){var d=E(b),f=L(d.is,d.u),g=new RegExp("(?:^|[^.#[:])"+(b.extends?"\\"+f.slice(0,-1)+"\\]":f)+"($|[.:[\\s>+~])"),d=P(b).j,h=pb(d,e);return K(b,d,function(b){var d="";b.f||R(b);b.f.cssText&&(d=kb(a,b.f.cssText,c));b.cssText=d;if(!v&&!za(b)&&b.cssText){var k=d=b.cssText;null==b.C&&(b.C=va.test(d));if(b.C)if(null==b.w){b.w=[];for(var q in h)k=h[q],k=k(d),d!==k&&(d=k,b.w.push(q))}else{for(q=0;q<b.w.length;++q)k=h[b.w[q]],d=k(d);k=d}b.cssText=k;b.g=b.g||b.selector;d="."+e;q=b.g.split(",");
for(var k=0,vb=q.length,M;k<vb&&(M=q[k]);k++)q[k]=M.match(g)?M.replace(f,d):d+" "+M;b.selector=q.join(",")}})}function pb(a,b){a=a.b;var c={};if(!v&&a)for(var e=0,d=a[e];e<a.length;d=a[++e]){var f=d,g=b;f.l=new RegExp(f.keyframesName,"g");f.a=f.keyframesName+"-"+g;f.g=f.g||f.selector;f.selector=f.g.replace(f.keyframesName,f.a);c[d.keyframesName]=qb(d)}return c}function qb(a){return function(b){return b.replace(a.l,a.a)}}
function rb(a,b){var c=U,e=A(a);a.textContent=y(e,function(a){var d=a.cssText=a.parsedCssText;a.f&&a.f.cssText&&(d=d.replace(la,"").replace(ma,""),a.cssText=kb(c,d,b))})}aa.Object.defineProperties(ib.prototype,{a:{configurable:!0,enumerable:!0,get:function(){return"x-scope"}}});var U=new ib;var sb={},V=window.customElements;if(V&&!v){var tb=V.define;V.define=function(a,b,c){var e=document.createComment(" Shady DOM styles for "+a+" "),d=document.head;d.insertBefore(e,(C?C.nextSibling:null)||d.firstChild);C=e;sb[a]=e;return tb.call(V,a,b,c)}};var W=new function(){this.cache={};this.a=100};function X(){var a=this;this.A={};this.c=document.documentElement;var b=new n;b.rules=[];this.l=fb(this.c,new O(b));this.v=!1;this.a=this.b=null;Da(function(){Y(a)})}l=X.prototype;l.F=function(){eb()};l.I=function(a){return A(a)};l.O=function(a){return y(a)};
l.prepareTemplate=function(a,b,c){if(!a.l){a.l=!0;a.name=b;a.extends=c;m[b]=a;var e;e=(e=a.content.querySelector("style"))?e.getAttribute("css-build")||"":"";var d;d=a.content.querySelectorAll("style");for(var f=[],g=0;g<d.length;g++){var h=d[g];f.push(h.textContent);h.parentNode.removeChild(h)}d=f.join("").trim();c={is:b,extends:c,P:e};v||I(a.content,b);Y(this);f=this.b.detectMixin(d);d=p(d);f&&w&&this.b.transformRules(d,b);a._styleAst=d;a.v=e;e=[];w||(e=jb(a._styleAst));if(!e.length||w)d=v?a.content:
null,b=sb[b],f=K(c,a._styleAst),b=f.length?B(f,c.is,d,b):void 0,a.b=b;a.c=e}};function ub(a){if(!a.b)if(window.ShadyCSS.ApplyShim)a.b=window.ShadyCSS.ApplyShim,a.b.invalidCallback=qa;else{var b={};a.b=(b.detectMixin=function(){return!1},b.transformRule=function(){},b.transformRules=function(){},b)}}
function wb(a){if(!a.a)if(window.ShadyCSS.CustomStyleInterface)a.a=window.ShadyCSS.CustomStyleInterface,a.a.transformCallback=function(b){a.D(b)},a.a.validateCallback=function(){requestAnimationFrame(function(){(a.a.enqueued||a.v)&&a.o()})};else{var b={};a.a=(b.processStyles=function(){},b.enqueued=!1,b.getStyleForCustomStyle=function(){return null},b)}}function Y(a){ub(a);wb(a)}
l.o=function(){Y(this);var a=this.a.processStyles();if(this.a.enqueued){if(w)for(var b=0;b<a.length;b++){var c=this.a.getStyleForCustomStyle(a[b]);if(c&&w){var e=A(c);Y(this);this.b.transformRules(e);c.textContent=y(e)}}else for(xb(this,this.c,this.l),b=0;b<a.length;b++)(c=this.a.getStyleForCustomStyle(a[b]))&&rb(c,this.l.m);this.a.enqueued=!1;this.v&&!w&&this.styleDocument()}};
l.styleElement=function(a,b){var c=E(a).is,e=P(a);if(!e){var d=E(a),e=d.is,d=d.u,f=sb[e],e=m[e],g,h;e&&(g=e._styleAst,h=e.c);e=fb(a,new O(g,f,h,0,d))}a!==this.c&&(this.v=!0);b&&(e.s=e.s||{},Object.assign(e.s,b));if(w){if(e.s){b=e.s;for(var k in b)null===k?a.style.removeProperty(k):a.style.setProperty(k,b[k])}((k=m[c])||a===this.c)&&k&&k.b&&k._applyShimInvalid&&(k.a||(Y(this),this.b.transformRules(k._styleAst,c),k.b.textContent=K(a,e.j),ra(k)),v&&(c=a.shadowRoot)&&(c.querySelector("style").textContent=
K(a,e.j)),e.j=k._styleAst)}else if(xb(this,a,e),e.B&&e.B.length){c=e;k=E(a).is;a:{if(b=W.cache[k])for(g=b.length-1;0<=g;g--){h=b[g];b:{e=c.B;for(d=0;d<e.length;d++)if(f=e[d],h.i[f]!==c.m[f]){e=!1;break b}e=!0}if(e){b=h;break a}}b=void 0}e=b?b.styleElement:null;g=c.h;(h=b&&b.h)||(h=this.A[k]=(this.A[k]||0)+1,h=k+"-"+h);c.h=h;h=c.h;var d=U,d=e?e.textContent||"":ob(d,a,c.m,h),f=P(a),x=f.a;x&&!v&&x!==e&&(x._useCount--,0>=x._useCount&&x.parentNode&&x.parentNode.removeChild(x));v?f.a?(f.a.textContent=d,
e=f.a):d&&(e=B(d,h,a.shadowRoot,f.b)):e?e.parentNode||Aa(e,null,f.b):d&&(e=B(d,h,null,f.b));e&&(e._useCount=e._useCount||0,f.a!=e&&e._useCount++,f.a=e);hb&&(e.textContent=e.textContent);h=e;v||(e=c.h,f=d=a.getAttribute("class")||"",g&&(f=d.replace(new RegExp("\\s*x-scope\\s*"+g+"\\s*","g")," ")),f+=(f?" ":"")+"x-scope "+e,d!==f&&D(a,f));b||(a=W.cache[k]||[],a.push({i:c.m,styleElement:h,h:c.h}),a.length>W.a&&a.shift(),W.cache[k]=a)}};
function yb(a,b){return(b=b.getRootNode().host)?P(b)?b:yb(a,b):a.c}function xb(a,b,c){a=yb(a,b);var e=P(a);a=Object.create(e.m||null);var d=nb(b,c.j);b=lb(e.j,b).i;Object.assign(a,d.J,b,d.L);b=c.s;for(var f in b)if((d=b[f])||0===d)a[f]=d;f=U;b=Object.getOwnPropertyNames(a);for(d=0;d<b.length;d++)e=b[d],a[e]=T(f,a[e],a);c.m=a}l.styleDocument=function(a){this.styleSubtree(this.c,a)};
l.styleSubtree=function(a,b){var c=a.shadowRoot;(c||a===this.c)&&this.styleElement(a,b);if(b=c&&(c.children||c.childNodes))for(a=0;a<b.length;a++)this.styleSubtree(b[a]);else if(a=a.children||a.childNodes)for(b=0;b<a.length;b++)this.styleSubtree(a[b])};l.D=function(a){var b=this,c=A(a);z(c,function(a){if(v)Xa(a);else{var c=J;a.selector=a.parsedSelector;Xa(a);a.selector=a.g=N(c,a,c.c,void 0,void 0)}w&&(Y(b),b.b.transformRule(a))});w?a.textContent=y(c):this.l.j.rules.push(c)};
l.getComputedStyleValue=function(a,b){var c;w||(c=(P(a)||P(yb(this,a))).m[b]);return(c=c||window.getComputedStyle(a).getPropertyValue(b))?c.trim():""};l.N=function(a,b){var c=a.getRootNode();b=b?b.split(/\s/):[];c=c.host&&c.host.localName;if(!c){var e=a.getAttribute("class");if(e)for(var e=e.split(/\s/),d=0;d<e.length;d++)if(e[d]===J.a){c=e[d+1];break}}c&&b.push(J.a,c);w||(c=P(a))&&c.h&&b.push(U.a,c.h);D(a,b.join(" "))};l.G=function(a){return P(a)};X.prototype.flush=X.prototype.F;
X.prototype.prepareTemplate=X.prototype.prepareTemplate;X.prototype.styleElement=X.prototype.styleElement;X.prototype.styleDocument=X.prototype.styleDocument;X.prototype.styleSubtree=X.prototype.styleSubtree;X.prototype.getComputedStyleValue=X.prototype.getComputedStyleValue;X.prototype.setElementClass=X.prototype.N;X.prototype._styleInfoForNode=X.prototype.G;X.prototype.transformCustomStyleForDocument=X.prototype.D;X.prototype.getStyleAst=X.prototype.I;X.prototype.styleAstToString=X.prototype.O;
X.prototype.flushCustomStyles=X.prototype.o;Object.defineProperties(X.prototype,{nativeShadow:{get:function(){return v}},nativeCss:{get:function(){return w}}});var Z=new X,zb,Ab;window.ShadyCSS&&(zb=window.ShadyCSS.ApplyShim,Ab=window.ShadyCSS.CustomStyleInterface);window.ShadyCSS={ScopingShim:Z,prepareTemplate:function(a,b,c){Z.o();Z.prepareTemplate(a,b,c)},styleSubtree:function(a,b){Z.o();Z.styleSubtree(a,b)},styleElement:function(a){Z.o();Z.styleElement(a)},styleDocument:function(a){Z.o();Z.styleDocument(a)},getComputedStyleValue:function(a,b){return Z.getComputedStyleValue(a,b)},nativeCss:w,nativeShadow:v};zb&&(window.ShadyCSS.ApplyShim=zb);
Ab&&(window.ShadyCSS.CustomStyleInterface=Ab);
}).call(self)

//# sourceMappingURL=scoping-shim.min.js.map

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(5)))

/***/ }),
/* 47 */
/***/ (function(module, exports) {

(function(){
/*

Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
'use strict';var l={};function m(){this.end=this.start=0;this.rules=this.parent=this.previous=null;this.cssText=this.parsedCssText="";this.atRule=!1;this.type=0;this.parsedSelector=this.selector=this.keyframesName=""}
function p(a){a=a.replace(aa,"").replace(ba,"");var c=q,b=a,d=new m;d.start=0;d.end=b.length;for(var e=d,f=0,h=b.length;f<h;f++)if("{"===b[f]){e.rules||(e.rules=[]);var g=e,k=g.rules[g.rules.length-1]||null,e=new m;e.start=f+1;e.parent=g;e.previous=k;g.rules.push(e)}else"}"===b[f]&&(e.end=f+1,e=e.parent||d);return c(d,a)}
function q(a,c){var b=c.substring(a.start,a.end-1);a.parsedCssText=a.cssText=b.trim();a.parent&&((b=c.substring(a.previous?a.previous.end:a.parent.start,a.start-1),b=ca(b),b=b.replace(r," "),b=b.substring(b.lastIndexOf(";")+1),b=a.parsedSelector=a.selector=b.trim(),a.atRule=!b.indexOf("@"),a.atRule)?b.indexOf("@media")?b.match(da)&&(a.type=u,a.keyframesName=a.selector.split(r).pop()):a.type=t:a.type=b.indexOf("--")?v:y);if(b=a.rules)for(var d=0,e=b.length,f;d<e&&(f=b[d]);d++)q(f,c);return a}
function ca(a){return a.replace(/\\([0-9a-f]{1,6})\s/gi,function(a,b){a=b;for(b=6-a.length;b--;)a="0"+a;return"\\"+a})}
function z(a,c,b){b=void 0===b?"":b;var d="";if(a.cssText||a.rules){var e=a.rules,f;if(f=e)f=e[0],f=!(f&&f.selector&&0===f.selector.indexOf("--"));if(f){f=0;for(var h=e.length,g;f<h&&(g=e[f]);f++)d=z(g,c,d)}else c?c=a.cssText:(c=a.cssText,c=c.replace(ea,"").replace(fa,""),c=c.replace(ga,"").replace(ha,"")),(d=c.trim())&&(d="  "+d+"\n")}d&&(a.selector&&(b+=a.selector+" {\n"),b+=d,a.selector&&(b+="}\n\n"));return b}
var v=1,u=7,t=4,y=1E3,aa=/\/\*[^*]*\*+([^/*][^*]*\*+)*\//gim,ba=/@import[^;]*;/gim,ea=/(?:^[^;\-\s}]+)?--[^;{}]*?:[^{};]*?(?:[;\n]|$)/gim,fa=/(?:^[^;\-\s}]+)?--[^;{}]*?:[^{};]*?{[^}]*?}(?:[;\n]|$)?/gim,ga=/@apply\s*\(?[^);]*\)?\s*(?:[;\n]|$)?/gim,ha=/[^;:]*?:[^;]*?var\([^;]*\)(?:[;\n]|$)?/gim,da=/^@[^\s]*keyframes/,r=/\s+/g;var ia=Promise.resolve();function ja(a){(a=l[a])&&(a._applyShimInvalid=!0)}function ka(a){a.a||(a.a=!0,ia.then(function(){a._applyShimInvalid=!1;a.a=!1}))};var A=/(?:^|[;\s{]\s*)(--[\w-]*?)\s*:\s*(?:([^;{]*)|{([^}]*)})(?:(?=[;\s}])|$)/gi,B=/(?:^|\W+)@apply\s*\(?([^);\n]*)\)?/gi,la=/@media[^(]*(\([^)]*\))/;var C=!(window.ShadyDOM&&window.ShadyDOM.inUse),D=!navigator.userAgent.match("AppleWebKit/601")&&window.CSS&&CSS.supports&&CSS.supports("box-shadow","0 0 0 var(--foo)");function E(a){a&&(D=D&&!a.nativeCss&&!a.shimcssproperties,C=C&&!a.nativeShadow&&!a.shimshadow)}window.ShadyCSS?E(window.ShadyCSS):window.WebComponents&&E(window.WebComponents.flags);var ma=C,F=D;function G(a){if(!a)return"";"string"===typeof a&&(a=p(a));return z(a,F)}function H(a){!a.__cssRules&&a.textContent&&(a.__cssRules=p(a.textContent));return a.__cssRules||null}function I(a,c,b,d){if(a){var e=!1,f=a.type;if(d&&f===t){var h=a.selector.match(la);h&&(window.matchMedia(h[1]).matches||(e=!0))}f===v?c(a):b&&f===u?b(a):f===y&&(e=!0);if((a=a.rules)&&!e)for(var e=0,f=a.length,g;e<f&&(g=a[e]);e++)I(g,c,b,d)}}
function J(a,c){var b=a.indexOf("var(");if(-1===b)return c(a,"","","");var d;a:{var e=0;d=b+3;for(var f=a.length;d<f;d++)if("("===a[d])e++;else if(")"===a[d]&&!--e)break a;d=-1}e=a.substring(b+4,d);b=a.substring(0,b);a=J(a.substring(d+1),c);d=e.indexOf(",");return-1===d?c(b,e.trim(),"",a):c(b,e.substring(0,d).trim(),e.substring(d+1).trim(),a)};var na=/;\s*/m,oa=/^\s*(initial)|(inherit)\s*$/;function K(){this.a={}}K.prototype.set=function(a,c){a=a.trim();this.a[a]={h:c,i:{}}};K.prototype.get=function(a){a=a.trim();return this.a[a]||null};var L=null;function M(){this.b=this.c=null;this.a=new K}M.prototype.o=function(a){a=B.test(a)||A.test(a);B.lastIndex=0;A.lastIndex=0;return a};M.prototype.m=function(a,c){a=a.content.querySelector("style");var b=null;a&&(b=this.j(a,c));return b};
M.prototype.j=function(a,c){c=void 0===c?"":c;var b=H(a);this.l(b,c);a.textContent=G(b);return b};M.prototype.f=function(a){var c=this,b=H(a);I(b,function(a){":root"===a.selector&&(a.selector="html");c.g(a)});a.textContent=G(b);return b};M.prototype.l=function(a,c){var b=this;this.c=c;I(a,function(a){b.g(a)});this.c=null};M.prototype.g=function(a){a.cssText=pa(this,a.parsedCssText);":root"===a.selector&&(a.selector=":host > *")};
function pa(a,c){c=c.replace(A,function(c,d,e,f){return qa(a,c,d,e,f)});return N(a,c)}function N(a,c){for(var b;b=B.exec(c);){var d=b[0],e=b[1];b=b.index;var f=c.slice(0,b+d.indexOf("@apply"));c=c.slice(b+d.length);var h=O(a,f),g,k,d=void 0;g=a;var e=e.replace(na,""),n=[];k=g.a.get(e);k||(g.a.set(e,{}),k=g.a.get(e));if(k)for(d in g.c&&(k.i[g.c]=!0),k.h)g=h&&h[d],k=[d,": var(",e,"_-_",d],g&&k.push(",",g),k.push(")"),n.push(k.join(""));d=n.join("; ");c=""+f+d+c;B.lastIndex=b+d.length}return c}
function O(a,c){c=c.split(";");for(var b,d,e={},f=0,h;f<c.length;f++)if(b=c[f])if(h=b.split(":"),1<h.length){b=h[0].trim();var g=a;d=b;h=h.slice(1).join(":");var k=oa.exec(h);k&&(k[1]?(g.b||(g.b=document.createElement("meta"),g.b.setAttribute("apply-shim-measure",""),g.b.style.all="initial",document.head.appendChild(g.b)),d=window.getComputedStyle(g.b).getPropertyValue(d)):d="apply-shim-inherit",h=d);d=h;e[b]=d}return e}function ra(a,c){if(L)for(var b in c.i)b!==a.c&&L(b)}
function qa(a,c,b,d,e){d&&J(d,function(c,b){b&&a.a.get(b)&&(e="@apply "+b+";")});if(!e)return c;var f=N(a,e),h=c.slice(0,c.indexOf("--")),g=f=O(a,f),k=a.a.get(b),n=k&&k.h;n?g=Object.assign(Object.create(n),f):a.a.set(b,g);var W=[],w,x,X=!1;for(w in g)x=f[w],void 0===x&&(x="initial"),!n||w in n||(X=!0),W.push(""+b+"_-_"+w+": "+x);X&&ra(a,k);k&&(k.h=g);d&&(h=c+";"+h);return""+h+W.join("; ")+";"}M.prototype.detectMixin=M.prototype.o;M.prototype.transformStyle=M.prototype.j;
M.prototype.transformCustomStyle=M.prototype.f;M.prototype.transformRules=M.prototype.l;M.prototype.transformRule=M.prototype.g;M.prototype.transformTemplate=M.prototype.m;M.prototype._separator="_-_";Object.defineProperty(M.prototype,"invalidCallback",{get:function(){return L},set:function(a){L=a}});var P=null,Q=window.HTMLImports&&window.HTMLImports.whenReady||null,R;function sa(a){Q?Q(a):(P||(P=new Promise(function(a){R=a}),"complete"===document.readyState?R():document.addEventListener("readystatechange",function(){"complete"===document.readyState&&R()})),P.then(function(){a&&a()}))};var S=new M;function T(){var a=this;this.a=null;this.b=!1;sa(function(){U(a)});S.invalidCallback=ja}function U(a){a.b||(a.a=window.ShadyCSS.CustomStyleInterface,a.a&&(a.a.transformCallback=function(a){S.f(a)},a.a.validateCallback=function(){requestAnimationFrame(function(){a.a.enqueued&&V(a)})}),a.b=!0)}T.prototype.prepareTemplate=function(a,c){U(this);l[c]=a;c=S.m(a,c);a._styleAst=c};
function V(a){U(a);if(a.a){var c=a.a.processStyles();if(a.a.enqueued){for(var b=0;b<c.length;b++){var d=a.a.getStyleForCustomStyle(c[b]);d&&S.f(d)}a.a.enqueued=!1}}}T.prototype.styleSubtree=function(a,c){U(this);if(c)for(var b in c)null===b?a.style.removeProperty(b):a.style.setProperty(b,c[b]);if(a.shadowRoot)for(this.styleElement(a),a=a.shadowRoot.children||a.shadowRoot.childNodes,c=0;c<a.length;c++)this.styleSubtree(a[c]);else for(a=a.children||a.childNodes,c=0;c<a.length;c++)this.styleSubtree(a[c])};
T.prototype.styleElement=function(a){U(this);var c=a.localName,b;c?-1<c.indexOf("-")?b=c:b=a.getAttribute&&a.getAttribute("is")||"":b=a.is;(c=l[b])&&c._applyShimInvalid&&(c.a||(this.prepareTemplate(c,b),ka(c)),a=a.shadowRoot)&&(a=a.querySelector("style"))&&(a.__cssRules=c._styleAst,a.textContent=G(c._styleAst))};T.prototype.styleDocument=function(a){U(this);this.styleSubtree(document.body,a)};
if(!window.ShadyCSS||!window.ShadyCSS.ScopingShim){var Y=new T,Z=window.ShadyCSS&&window.ShadyCSS.CustomStyleInterface;window.ShadyCSS={prepareTemplate:function(a,c){V(Y);Y.prepareTemplate(a,c)},styleSubtree:function(a,c){V(Y);Y.styleSubtree(a,c)},styleElement:function(a){V(Y);Y.styleElement(a)},styleDocument:function(a){V(Y);Y.styleDocument(a)},getComputedStyleValue:function(a,c){return(a=window.getComputedStyle(a).getPropertyValue(c))?a.trim():""},nativeCss:F,nativeShadow:ma};Z&&(window.ShadyCSS.CustomStyleInterface=
Z)}window.ShadyCSS.ApplyShim=S;
}).call(self)

//# sourceMappingURL=apply-shim.min.js.map


/***/ }),
/* 48 */
/***/ (function(module, exports) {

(function(){
/*

Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
'use strict';var c=!(window.ShadyDOM&&window.ShadyDOM.inUse),f=!navigator.userAgent.match("AppleWebKit/601")&&window.CSS&&CSS.supports&&CSS.supports("box-shadow","0 0 0 var(--foo)");function g(a){a&&(f=f&&!a.nativeCss&&!a.shimcssproperties,c=c&&!a.nativeShadow&&!a.shimshadow)}window.ShadyCSS?g(window.ShadyCSS):window.WebComponents&&g(window.WebComponents.flags);var h=c,k=f;function l(a,b){for(var d in b)null===d?a.style.removeProperty(d):a.style.setProperty(d,b[d])};var m=null,n=window.HTMLImports&&window.HTMLImports.whenReady||null,r;function t(){var a=u;n?n(a):(m||(m=new Promise(function(a){r=a}),"complete"===document.readyState?r():document.addEventListener("readystatechange",function(){"complete"===document.readyState&&r()})),m.then(function(){a&&a()}))};var v=null,u=null;function x(){this.customStyles=[];this.enqueued=!1}function y(a){!a.enqueued&&u&&(a.enqueued=!0,t())}x.prototype.c=function(a){a.__seenByShadyCSS||(a.__seenByShadyCSS=!0,this.customStyles.push(a),y(this))};x.prototype.b=function(a){if(a.__shadyCSSCachedStyle)return a.__shadyCSSCachedStyle;var b;a.getStyle?b=a.getStyle():b=a;return b};
x.prototype.a=function(){for(var a=this.customStyles,b=0;b<a.length;b++){var d=a[b];if(!d.__shadyCSSCachedStyle){var e=this.b(d);if(e){var p=e.__appliedElement;if(p)for(var q=0;q<e.attributes.length;q++){var w=e.attributes[q];p.setAttribute(w.name,w.value)}e=p||e;v&&v(e);d.__shadyCSSCachedStyle=e}}}return a};x.prototype.addCustomStyle=x.prototype.c;x.prototype.getStyleForCustomStyle=x.prototype.b;x.prototype.processStyles=x.prototype.a;
Object.defineProperties(x.prototype,{transformCallback:{get:function(){return v},set:function(a){v=a}},validateCallback:{get:function(){return u},set:function(a){var b=!1;u||(b=!0);u=a;b&&y(this)}}});var z=new x;window.ShadyCSS||(window.ShadyCSS={prepareTemplate:function(){},styleSubtree:function(a,b){z.a();l(a,b)},styleElement:function(){z.a()},styleDocument:function(a){z.a();l(document.body,a)},getComputedStyleValue:function(a,b){return(a=window.getComputedStyle(a).getPropertyValue(b))?a.trim():""},nativeCss:k,nativeShadow:h});window.ShadyCSS.CustomStyleInterface=z;
}).call(self)

//# sourceMappingURL=custom-style-interface.min.js.map


/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(setImmediate) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _skatejs = __webpack_require__(1);

var _hud = __webpack_require__(60);

var _hud2 = _interopRequireDefault(_hud);

var _board = __webpack_require__(61);

var _board2 = _interopRequireDefault(_board);

var _victoryScreen = __webpack_require__(63);

var _victoryScreen2 = _interopRequireDefault(_victoryScreen);

var _db = __webpack_require__(64);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var styles = {
  container: {
    width: '100vw',
    height: '100vh',
    backgroundColor: 'black',
    color: 'white',
    fontFamily: 'Roboto, Helvetica',
    padding: '16px',
    boxSizing: 'border-box',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'stretch',
    justifyContent: 'space-around'
  }
};

var Game = function (_Component) {
  _inherits(Game, _Component);

  function Game() {
    _classCallCheck(this, Game);

    return _possibleConstructorReturn(this, (Game.__proto__ || Object.getPrototypeOf(Game)).apply(this, arguments));
  }

  _createClass(Game, [{
    key: 'connectedCallback',
    value: function connectedCallback() {
      this.boardRef = null;
      this.level = 1;
      _get(Game.prototype.__proto__ || Object.getPrototypeOf(Game.prototype), 'connectedCallback', this).call(this);
    }
  }, {
    key: 'handleVictory',
    value: function handleVictory() {
      this.isVictory = true;

      if (this.level > (0, _db.getBest)()) {
        (0, _db.setBest)(this.level);
      }
    }
  }, {
    key: 'handleRestart',
    value: function handleRestart() {
      var _this2 = this;

      this.isVictory = false;

      if (this.boardRef) {
        this.level += 1;

        // Wait for level to propagate
        setImmediate(function () {
          return _this2.boardRef.resetState();
        });
      }
    }
  }, {
    key: 'renderCallback',
    value: function renderCallback() {
      var _this3 = this;

      return (0, _skatejs.h)(
        'div',
        { style: styles.container },
        (0, _skatejs.h)(_hud2.default, { level: this.level, best: (0, _db.getBest)() }),
        (0, _skatejs.h)('lsg-board', {
          ref: function ref(_ref) {
            return _this3.boardRef = _ref;
          },
          level: this.level,
          onVictory: function onVictory() {
            return _this3.handleVictory();
          }
        }),
        (0, _skatejs.h)('lsg-victory-screen', {
          isVisible: this.isVictory,
          onRestart: function onRestart() {
            return _this3.handleRestart();
          }
        })
      );
    }
  }], [{
    key: 'is',
    get: function get() {
      return 'lsg-game';
    }
  }, {
    key: 'props',
    get: function get() {
      return {
        isVictory: _skatejs.props.bool
      };
    }
  }]);

  return Game;
}(_skatejs.Component);

exports.default = Game;


(0, _skatejs.define)(Game);
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(50).setImmediate))

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

var apply = Function.prototype.apply;

// DOM APIs, for completeness

exports.setTimeout = function() {
  return new Timeout(apply.call(setTimeout, window, arguments), clearTimeout);
};
exports.setInterval = function() {
  return new Timeout(apply.call(setInterval, window, arguments), clearInterval);
};
exports.clearTimeout =
exports.clearInterval = function(timeout) {
  if (timeout) {
    timeout.close();
  }
};

function Timeout(id, clearFn) {
  this._id = id;
  this._clearFn = clearFn;
}
Timeout.prototype.unref = Timeout.prototype.ref = function() {};
Timeout.prototype.close = function() {
  this._clearFn.call(window, this._id);
};

// Does not start the time, just sets up the members needed.
exports.enroll = function(item, msecs) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = msecs;
};

exports.unenroll = function(item) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = -1;
};

exports._unrefActive = exports.active = function(item) {
  clearTimeout(item._idleTimeoutId);

  var msecs = item._idleTimeout;
  if (msecs >= 0) {
    item._idleTimeoutId = setTimeout(function onTimeout() {
      if (item._onTimeout)
        item._onTimeout();
    }, msecs);
  }
};

// setimmediate attaches itself to the global object
__webpack_require__(51);
exports.setImmediate = setImmediate;
exports.clearImmediate = clearImmediate;


/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global, process) {(function (global, undefined) {
    "use strict";

    if (global.setImmediate) {
        return;
    }

    var nextHandle = 1; // Spec says greater than zero
    var tasksByHandle = {};
    var currentlyRunningATask = false;
    var doc = global.document;
    var registerImmediate;

    function setImmediate(callback) {
      // Callback can either be a function or a string
      if (typeof callback !== "function") {
        callback = new Function("" + callback);
      }
      // Copy function arguments
      var args = new Array(arguments.length - 1);
      for (var i = 0; i < args.length; i++) {
          args[i] = arguments[i + 1];
      }
      // Store and register the task
      var task = { callback: callback, args: args };
      tasksByHandle[nextHandle] = task;
      registerImmediate(nextHandle);
      return nextHandle++;
    }

    function clearImmediate(handle) {
        delete tasksByHandle[handle];
    }

    function run(task) {
        var callback = task.callback;
        var args = task.args;
        switch (args.length) {
        case 0:
            callback();
            break;
        case 1:
            callback(args[0]);
            break;
        case 2:
            callback(args[0], args[1]);
            break;
        case 3:
            callback(args[0], args[1], args[2]);
            break;
        default:
            callback.apply(undefined, args);
            break;
        }
    }

    function runIfPresent(handle) {
        // From the spec: "Wait until any invocations of this algorithm started before this one have completed."
        // So if we're currently running a task, we'll need to delay this invocation.
        if (currentlyRunningATask) {
            // Delay by doing a setTimeout. setImmediate was tried instead, but in Firefox 7 it generated a
            // "too much recursion" error.
            setTimeout(runIfPresent, 0, handle);
        } else {
            var task = tasksByHandle[handle];
            if (task) {
                currentlyRunningATask = true;
                try {
                    run(task);
                } finally {
                    clearImmediate(handle);
                    currentlyRunningATask = false;
                }
            }
        }
    }

    function installNextTickImplementation() {
        registerImmediate = function(handle) {
            process.nextTick(function () { runIfPresent(handle); });
        };
    }

    function canUsePostMessage() {
        // The test against `importScripts` prevents this implementation from being installed inside a web worker,
        // where `global.postMessage` means something completely different and can't be used for this purpose.
        if (global.postMessage && !global.importScripts) {
            var postMessageIsAsynchronous = true;
            var oldOnMessage = global.onmessage;
            global.onmessage = function() {
                postMessageIsAsynchronous = false;
            };
            global.postMessage("", "*");
            global.onmessage = oldOnMessage;
            return postMessageIsAsynchronous;
        }
    }

    function installPostMessageImplementation() {
        // Installs an event handler on `global` for the `message` event: see
        // * https://developer.mozilla.org/en/DOM/window.postMessage
        // * http://www.whatwg.org/specs/web-apps/current-work/multipage/comms.html#crossDocumentMessages

        var messagePrefix = "setImmediate$" + Math.random() + "$";
        var onGlobalMessage = function(event) {
            if (event.source === global &&
                typeof event.data === "string" &&
                event.data.indexOf(messagePrefix) === 0) {
                runIfPresent(+event.data.slice(messagePrefix.length));
            }
        };

        if (global.addEventListener) {
            global.addEventListener("message", onGlobalMessage, false);
        } else {
            global.attachEvent("onmessage", onGlobalMessage);
        }

        registerImmediate = function(handle) {
            global.postMessage(messagePrefix + handle, "*");
        };
    }

    function installMessageChannelImplementation() {
        var channel = new MessageChannel();
        channel.port1.onmessage = function(event) {
            var handle = event.data;
            runIfPresent(handle);
        };

        registerImmediate = function(handle) {
            channel.port2.postMessage(handle);
        };
    }

    function installReadyStateChangeImplementation() {
        var html = doc.documentElement;
        registerImmediate = function(handle) {
            // Create a <script> element; its readystatechange event will be fired asynchronously once it is inserted
            // into the document. Do so, thus queuing up the task. Remember to clean up once it's been called.
            var script = doc.createElement("script");
            script.onreadystatechange = function () {
                runIfPresent(handle);
                script.onreadystatechange = null;
                html.removeChild(script);
                script = null;
            };
            html.appendChild(script);
        };
    }

    function installSetTimeoutImplementation() {
        registerImmediate = function(handle) {
            setTimeout(runIfPresent, 0, handle);
        };
    }

    // If supported, we should attach to the prototype of global, since that is where setTimeout et al. live.
    var attachTo = Object.getPrototypeOf && Object.getPrototypeOf(global);
    attachTo = attachTo && attachTo.setTimeout ? attachTo : global;

    // Don't get fooled by e.g. browserify environments.
    if ({}.toString.call(global.process) === "[object process]") {
        // For Node.js before 0.9
        installNextTickImplementation();

    } else if (canUsePostMessage()) {
        // For non-IE10 modern browsers
        installPostMessageImplementation();

    } else if (global.MessageChannel) {
        // For web workers, where supported
        installMessageChannelImplementation();

    } else if (doc && "onreadystatechange" in doc.createElement("script")) {
        // For IE 6–8
        installReadyStateChangeImplementation();

    } else {
        // For older browsers
        installSetTimeoutImplementation();
    }

    attachTo.setImmediate = setImmediate;
    attachTo.clearImmediate = clearImmediate;
}(typeof self === "undefined" ? typeof global === "undefined" ? this : global : self));

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(5), __webpack_require__(17)))

/***/ }),
/* 52 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = define;


function define(Ctor) {
  var registry = customElements;
  var is = Ctor.is;
  if (!registry.get(is)) {
    registry.define(is, Ctor);
  }
  return Ctor;
}

/***/ }),
/* 53 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = emit;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__types__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__types__);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };



var defs = {
  bubbles: true,
  cancelable: true,
  composed: false
};

function emit(elem, name, opts) {
  opts = _extends({}, defs, opts);
  var e = document.createEvent('CustomEvent');
  e.initCustomEvent(name, opts.bubbles, opts.cancelable, opts.detail);
  Object.defineProperty(e, 'composed', { value: opts.composed });
  return elem.dispatchEvent(e);
}

/***/ }),
/* 54 */
/***/ (function(module, exports) {



/***/ }),
/* 55 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = link;


function getValue(elem) {
  var checked = elem.checked,
      type = elem.type,
      value = elem.value;

  if (type === 'checkbox' || type === 'radio') {
    return checked ? value || true : false;
  }
  return value;
}

function link(elem, target) {
  return function (e) {
    // TODO revisit once all browsers have native support.
    //
    // We fallback to checking the composed path. Unfortunately this behaviour
    // is difficult to impossible to reproduce as it seems to be a possible
    // quirk in the shadydom polyfill that incorrectly returns null for the
    var localTarget = e.target || e.composedPath && e.composedPath()[0];
    var value = getValue(localTarget);
    var localTargetName = target || localTarget.name || 'value';

    if (localTargetName.indexOf('.') > -1) {
      var parts = localTargetName.split('.');
      var firstPart = parts[0];
      var propName = parts.pop();
      var obj = parts.reduce(function (prev, curr) {
        return prev[curr];
      }, elem);

      obj[propName || localTarget.name] = value;
      elem[firstPart] = elem[firstPart];
    } else {
      elem[localTargetName] = value;
    }
  };
}

/***/ }),
/* 56 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return withComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Component; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_preact__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_preact___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_preact__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__with_props__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__with_render__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__with_unique__ = __webpack_require__(20);
/* harmony reexport (binding) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_0_preact__, "h")) __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0_preact__["h"]; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






var withComponent = function withComponent() {
  var Base = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : HTMLElement;
  return function (_withRender) {
    _inherits(_class, _withRender);

    function _class() {
      _classCallCheck(this, _class);

      return _possibleConstructorReturn(this, _withRender.apply(this, arguments));
    }

    _class.prototype.rendererCallback = function rendererCallback(shadowRoot, renderCallback) {
      this._preactDom = __WEBPACK_IMPORTED_MODULE_0_preact__["render"](renderCallback(), shadowRoot, this._preactDom);
    };

    return _class;
  }(__WEBPACK_IMPORTED_MODULE_2__with_render__["a" /* withRender */](__WEBPACK_IMPORTED_MODULE_3__with_unique__["a" /* withUnique */](__WEBPACK_IMPORTED_MODULE_1__with_props__["b" /* withProps */](Base))));
};

var Component = withComponent(typeof window === 'undefined' ? function () {
  function _class2() {
    _classCallCheck(this, _class2);
  }

  return _class2;
}() : HTMLElement);


/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

!function() {
    'use strict';
    function VNode() {}
    function h(nodeName, attributes) {
        var lastSimple, child, simple, i, children = EMPTY_CHILDREN;
        for (i = arguments.length; i-- > 2; ) stack.push(arguments[i]);
        if (attributes && null != attributes.children) {
            if (!stack.length) stack.push(attributes.children);
            delete attributes.children;
        }
        while (stack.length) if ((child = stack.pop()) && void 0 !== child.pop) for (i = child.length; i--; ) stack.push(child[i]); else {
            if (child === !0 || child === !1) child = null;
            if (simple = 'function' != typeof nodeName) if (null == child) child = ''; else if ('number' == typeof child) child = String(child); else if ('string' != typeof child) simple = !1;
            if (simple && lastSimple) children[children.length - 1] += child; else if (children === EMPTY_CHILDREN) children = [ child ]; else children.push(child);
            lastSimple = simple;
        }
        var p = new VNode();
        p.nodeName = nodeName;
        p.children = children;
        p.attributes = null == attributes ? void 0 : attributes;
        p.key = null == attributes ? void 0 : attributes.key;
        if (void 0 !== options.vnode) options.vnode(p);
        return p;
    }
    function extend(obj, props) {
        for (var i in props) obj[i] = props[i];
        return obj;
    }
    function cloneElement(vnode, props) {
        return h(vnode.nodeName, extend(extend({}, vnode.attributes), props), arguments.length > 2 ? [].slice.call(arguments, 2) : vnode.children);
    }
    function enqueueRender(component) {
        if (!component.__d && (component.__d = !0) && 1 == items.push(component)) (options.debounceRendering || setTimeout)(rerender);
    }
    function rerender() {
        var p, list = items;
        items = [];
        while (p = list.pop()) if (p.__d) renderComponent(p);
    }
    function isSameNodeType(node, vnode, hydrating) {
        if ('string' == typeof vnode || 'number' == typeof vnode) return void 0 !== node.splitText;
        if ('string' == typeof vnode.nodeName) return !node._componentConstructor && isNamedNode(node, vnode.nodeName); else return hydrating || node._componentConstructor === vnode.nodeName;
    }
    function isNamedNode(node, nodeName) {
        return node.__n === nodeName || node.nodeName.toLowerCase() === nodeName.toLowerCase();
    }
    function getNodeProps(vnode) {
        var props = extend({}, vnode.attributes);
        props.children = vnode.children;
        var defaultProps = vnode.nodeName.defaultProps;
        if (void 0 !== defaultProps) for (var i in defaultProps) if (void 0 === props[i]) props[i] = defaultProps[i];
        return props;
    }
    function createNode(nodeName, isSvg) {
        var node = isSvg ? document.createElementNS('http://www.w3.org/2000/svg', nodeName) : document.createElement(nodeName);
        node.__n = nodeName;
        return node;
    }
    function removeNode(node) {
        if (node.parentNode) node.parentNode.removeChild(node);
    }
    function setAccessor(node, name, old, value, isSvg) {
        if ('className' === name) name = 'class';
        if ('key' === name) ; else if ('ref' === name) {
            if (old) old(null);
            if (value) value(node);
        } else if ('class' === name && !isSvg) node.className = value || ''; else if ('style' === name) {
            if (!value || 'string' == typeof value || 'string' == typeof old) node.style.cssText = value || '';
            if (value && 'object' == typeof value) {
                if ('string' != typeof old) for (var i in old) if (!(i in value)) node.style[i] = '';
                for (var i in value) node.style[i] = 'number' == typeof value[i] && IS_NON_DIMENSIONAL.test(i) === !1 ? value[i] + 'px' : value[i];
            }
        } else if ('dangerouslySetInnerHTML' === name) {
            if (value) node.innerHTML = value.__html || '';
        } else if ('o' == name[0] && 'n' == name[1]) {
            var useCapture = name !== (name = name.replace(/Capture$/, ''));
            name = name.toLowerCase().substring(2);
            if (value) {
                if (!old) node.addEventListener(name, eventProxy, useCapture);
            } else node.removeEventListener(name, eventProxy, useCapture);
            (node.__l || (node.__l = {}))[name] = value;
        } else if ('list' !== name && 'type' !== name && !isSvg && name in node) {
            setProperty(node, name, null == value ? '' : value);
            if (null == value || value === !1) node.removeAttribute(name);
        } else {
            var ns = isSvg && name !== (name = name.replace(/^xlink\:?/, ''));
            if (null == value || value === !1) if (ns) node.removeAttributeNS('http://www.w3.org/1999/xlink', name.toLowerCase()); else node.removeAttribute(name); else if ('function' != typeof value) if (ns) node.setAttributeNS('http://www.w3.org/1999/xlink', name.toLowerCase(), value); else node.setAttribute(name, value);
        }
    }
    function setProperty(node, name, value) {
        try {
            node[name] = value;
        } catch (e) {}
    }
    function eventProxy(e) {
        return this.__l[e.type](options.event && options.event(e) || e);
    }
    function flushMounts() {
        var c;
        while (c = mounts.pop()) {
            if (options.afterMount) options.afterMount(c);
            if (c.componentDidMount) c.componentDidMount();
        }
    }
    function diff(dom, vnode, context, mountAll, parent, componentRoot) {
        if (!diffLevel++) {
            isSvgMode = null != parent && void 0 !== parent.ownerSVGElement;
            hydrating = null != dom && !('__preactattr_' in dom);
        }
        var ret = idiff(dom, vnode, context, mountAll, componentRoot);
        if (parent && ret.parentNode !== parent) parent.appendChild(ret);
        if (!--diffLevel) {
            hydrating = !1;
            if (!componentRoot) flushMounts();
        }
        return ret;
    }
    function idiff(dom, vnode, context, mountAll, componentRoot) {
        var out = dom, prevSvgMode = isSvgMode;
        if (null == vnode) vnode = '';
        if ('string' == typeof vnode) {
            if (dom && void 0 !== dom.splitText && dom.parentNode && (!dom._component || componentRoot)) {
                if (dom.nodeValue != vnode) dom.nodeValue = vnode;
            } else {
                out = document.createTextNode(vnode);
                if (dom) {
                    if (dom.parentNode) dom.parentNode.replaceChild(out, dom);
                    recollectNodeTree(dom, !0);
                }
            }
            out.__preactattr_ = !0;
            return out;
        }
        if ('function' == typeof vnode.nodeName) return buildComponentFromVNode(dom, vnode, context, mountAll);
        isSvgMode = 'svg' === vnode.nodeName ? !0 : 'foreignObject' === vnode.nodeName ? !1 : isSvgMode;
        if (!dom || !isNamedNode(dom, String(vnode.nodeName))) {
            out = createNode(String(vnode.nodeName), isSvgMode);
            if (dom) {
                while (dom.firstChild) out.appendChild(dom.firstChild);
                if (dom.parentNode) dom.parentNode.replaceChild(out, dom);
                recollectNodeTree(dom, !0);
            }
        }
        var fc = out.firstChild, props = out.__preactattr_ || (out.__preactattr_ = {}), vchildren = vnode.children;
        if (!hydrating && vchildren && 1 === vchildren.length && 'string' == typeof vchildren[0] && null != fc && void 0 !== fc.splitText && null == fc.nextSibling) {
            if (fc.nodeValue != vchildren[0]) fc.nodeValue = vchildren[0];
        } else if (vchildren && vchildren.length || null != fc) innerDiffNode(out, vchildren, context, mountAll, hydrating || null != props.dangerouslySetInnerHTML);
        diffAttributes(out, vnode.attributes, props);
        isSvgMode = prevSvgMode;
        return out;
    }
    function innerDiffNode(dom, vchildren, context, mountAll, isHydrating) {
        var j, c, vchild, child, originalChildren = dom.childNodes, children = [], keyed = {}, keyedLen = 0, min = 0, len = originalChildren.length, childrenLen = 0, vlen = vchildren ? vchildren.length : 0;
        if (0 !== len) for (var i = 0; i < len; i++) {
            var _child = originalChildren[i], props = _child.__preactattr_, key = vlen && props ? _child._component ? _child._component.__k : props.key : null;
            if (null != key) {
                keyedLen++;
                keyed[key] = _child;
            } else if (props || (void 0 !== _child.splitText ? isHydrating ? _child.nodeValue.trim() : !0 : isHydrating)) children[childrenLen++] = _child;
        }
        if (0 !== vlen) for (var i = 0; i < vlen; i++) {
            vchild = vchildren[i];
            child = null;
            var key = vchild.key;
            if (null != key) {
                if (keyedLen && void 0 !== keyed[key]) {
                    child = keyed[key];
                    keyed[key] = void 0;
                    keyedLen--;
                }
            } else if (!child && min < childrenLen) for (j = min; j < childrenLen; j++) if (void 0 !== children[j] && isSameNodeType(c = children[j], vchild, isHydrating)) {
                child = c;
                children[j] = void 0;
                if (j === childrenLen - 1) childrenLen--;
                if (j === min) min++;
                break;
            }
            child = idiff(child, vchild, context, mountAll);
            if (child && child !== dom) if (i >= len) dom.appendChild(child); else if (child !== originalChildren[i]) if (child === originalChildren[i + 1]) removeNode(originalChildren[i]); else dom.insertBefore(child, originalChildren[i] || null);
        }
        if (keyedLen) for (var i in keyed) if (void 0 !== keyed[i]) recollectNodeTree(keyed[i], !1);
        while (min <= childrenLen) if (void 0 !== (child = children[childrenLen--])) recollectNodeTree(child, !1);
    }
    function recollectNodeTree(node, unmountOnly) {
        var component = node._component;
        if (component) unmountComponent(component); else {
            if (null != node.__preactattr_ && node.__preactattr_.ref) node.__preactattr_.ref(null);
            if (unmountOnly === !1 || null == node.__preactattr_) removeNode(node);
            removeChildren(node);
        }
    }
    function removeChildren(node) {
        node = node.lastChild;
        while (node) {
            var next = node.previousSibling;
            recollectNodeTree(node, !0);
            node = next;
        }
    }
    function diffAttributes(dom, attrs, old) {
        var name;
        for (name in old) if ((!attrs || null == attrs[name]) && null != old[name]) setAccessor(dom, name, old[name], old[name] = void 0, isSvgMode);
        for (name in attrs) if (!('children' === name || 'innerHTML' === name || name in old && attrs[name] === ('value' === name || 'checked' === name ? dom[name] : old[name]))) setAccessor(dom, name, old[name], old[name] = attrs[name], isSvgMode);
    }
    function collectComponent(component) {
        var name = component.constructor.name;
        (components[name] || (components[name] = [])).push(component);
    }
    function createComponent(Ctor, props, context) {
        var inst, list = components[Ctor.name];
        if (Ctor.prototype && Ctor.prototype.render) {
            inst = new Ctor(props, context);
            Component.call(inst, props, context);
        } else {
            inst = new Component(props, context);
            inst.constructor = Ctor;
            inst.render = doRender;
        }
        if (list) for (var i = list.length; i--; ) if (list[i].constructor === Ctor) {
            inst.__b = list[i].__b;
            list.splice(i, 1);
            break;
        }
        return inst;
    }
    function doRender(props, state, context) {
        return this.constructor(props, context);
    }
    function setComponentProps(component, props, opts, context, mountAll) {
        if (!component.__x) {
            component.__x = !0;
            if (component.__r = props.ref) delete props.ref;
            if (component.__k = props.key) delete props.key;
            if (!component.base || mountAll) {
                if (component.componentWillMount) component.componentWillMount();
            } else if (component.componentWillReceiveProps) component.componentWillReceiveProps(props, context);
            if (context && context !== component.context) {
                if (!component.__c) component.__c = component.context;
                component.context = context;
            }
            if (!component.__p) component.__p = component.props;
            component.props = props;
            component.__x = !1;
            if (0 !== opts) if (1 === opts || options.syncComponentUpdates !== !1 || !component.base) renderComponent(component, 1, mountAll); else enqueueRender(component);
            if (component.__r) component.__r(component);
        }
    }
    function renderComponent(component, opts, mountAll, isChild) {
        if (!component.__x) {
            var rendered, inst, cbase, props = component.props, state = component.state, context = component.context, previousProps = component.__p || props, previousState = component.__s || state, previousContext = component.__c || context, isUpdate = component.base, nextBase = component.__b, initialBase = isUpdate || nextBase, initialChildComponent = component._component, skip = !1;
            if (isUpdate) {
                component.props = previousProps;
                component.state = previousState;
                component.context = previousContext;
                if (2 !== opts && component.shouldComponentUpdate && component.shouldComponentUpdate(props, state, context) === !1) skip = !0; else if (component.componentWillUpdate) component.componentWillUpdate(props, state, context);
                component.props = props;
                component.state = state;
                component.context = context;
            }
            component.__p = component.__s = component.__c = component.__b = null;
            component.__d = !1;
            if (!skip) {
                rendered = component.render(props, state, context);
                if (component.getChildContext) context = extend(extend({}, context), component.getChildContext());
                var toUnmount, base, childComponent = rendered && rendered.nodeName;
                if ('function' == typeof childComponent) {
                    var childProps = getNodeProps(rendered);
                    inst = initialChildComponent;
                    if (inst && inst.constructor === childComponent && childProps.key == inst.__k) setComponentProps(inst, childProps, 1, context, !1); else {
                        toUnmount = inst;
                        component._component = inst = createComponent(childComponent, childProps, context);
                        inst.__b = inst.__b || nextBase;
                        inst.__u = component;
                        setComponentProps(inst, childProps, 0, context, !1);
                        renderComponent(inst, 1, mountAll, !0);
                    }
                    base = inst.base;
                } else {
                    cbase = initialBase;
                    toUnmount = initialChildComponent;
                    if (toUnmount) cbase = component._component = null;
                    if (initialBase || 1 === opts) {
                        if (cbase) cbase._component = null;
                        base = diff(cbase, rendered, context, mountAll || !isUpdate, initialBase && initialBase.parentNode, !0);
                    }
                }
                if (initialBase && base !== initialBase && inst !== initialChildComponent) {
                    var baseParent = initialBase.parentNode;
                    if (baseParent && base !== baseParent) {
                        baseParent.replaceChild(base, initialBase);
                        if (!toUnmount) {
                            initialBase._component = null;
                            recollectNodeTree(initialBase, !1);
                        }
                    }
                }
                if (toUnmount) unmountComponent(toUnmount);
                component.base = base;
                if (base && !isChild) {
                    var componentRef = component, t = component;
                    while (t = t.__u) (componentRef = t).base = base;
                    base._component = componentRef;
                    base._componentConstructor = componentRef.constructor;
                }
            }
            if (!isUpdate || mountAll) mounts.unshift(component); else if (!skip) {
                flushMounts();
                if (component.componentDidUpdate) component.componentDidUpdate(previousProps, previousState, previousContext);
                if (options.afterUpdate) options.afterUpdate(component);
            }
            if (null != component.__h) while (component.__h.length) component.__h.pop().call(component);
            if (!diffLevel && !isChild) flushMounts();
        }
    }
    function buildComponentFromVNode(dom, vnode, context, mountAll) {
        var c = dom && dom._component, originalComponent = c, oldDom = dom, isDirectOwner = c && dom._componentConstructor === vnode.nodeName, isOwner = isDirectOwner, props = getNodeProps(vnode);
        while (c && !isOwner && (c = c.__u)) isOwner = c.constructor === vnode.nodeName;
        if (c && isOwner && (!mountAll || c._component)) {
            setComponentProps(c, props, 3, context, mountAll);
            dom = c.base;
        } else {
            if (originalComponent && !isDirectOwner) {
                unmountComponent(originalComponent);
                dom = oldDom = null;
            }
            c = createComponent(vnode.nodeName, props, context);
            if (dom && !c.__b) {
                c.__b = dom;
                oldDom = null;
            }
            setComponentProps(c, props, 1, context, mountAll);
            dom = c.base;
            if (oldDom && dom !== oldDom) {
                oldDom._component = null;
                recollectNodeTree(oldDom, !1);
            }
        }
        return dom;
    }
    function unmountComponent(component) {
        if (options.beforeUnmount) options.beforeUnmount(component);
        var base = component.base;
        component.__x = !0;
        if (component.componentWillUnmount) component.componentWillUnmount();
        component.base = null;
        var inner = component._component;
        if (inner) unmountComponent(inner); else if (base) {
            if (base.__preactattr_ && base.__preactattr_.ref) base.__preactattr_.ref(null);
            component.__b = base;
            removeNode(base);
            collectComponent(component);
            removeChildren(base);
        }
        if (component.__r) component.__r(null);
    }
    function Component(props, context) {
        this.__d = !0;
        this.context = context;
        this.props = props;
        this.state = this.state || {};
    }
    function render(vnode, parent, merge) {
        return diff(merge, vnode, {}, !1, parent, !1);
    }
    var options = {};
    var stack = [];
    var EMPTY_CHILDREN = [];
    var IS_NON_DIMENSIONAL = /acit|ex(?:s|g|n|p|$)|rph|ows|mnc|ntw|ine[ch]|zoo|^ord/i;
    var items = [];
    var mounts = [];
    var diffLevel = 0;
    var isSvgMode = !1;
    var hydrating = !1;
    var components = {};
    extend(Component.prototype, {
        setState: function(state, callback) {
            var s = this.state;
            if (!this.__s) this.__s = extend({}, s);
            extend(s, 'function' == typeof state ? state(s, this.props) : state);
            if (callback) (this.__h = this.__h || []).push(callback);
            enqueueRender(this);
        },
        forceUpdate: function(callback) {
            if (callback) (this.__h = this.__h || []).push(callback);
            renderComponent(this, 2);
        },
        render: function() {}
    });
    var preact = {
        h: h,
        createElement: h,
        cloneElement: cloneElement,
        Component: Component,
        render: render,
        rerender: rerender,
        options: options
    };
    if (true) module.exports = preact; else self.preact = preact;
}();
//# sourceMappingURL=preact.js.map

/***/ }),
/* 58 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = defineProps;
/* unused harmony export normAttribute */
/* unused harmony export normPropDef */
/* harmony export (immutable) */ __webpack_exports__["b"] = normPropDefs;
/* harmony export (immutable) */ __webpack_exports__["c"] = syncAttributeToProperty;
/* unused harmony export syncPropertyToAttribute */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0____ = __webpack_require__(6);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };



function defineProps(Ctor) {
  if (Ctor._definedProps) return;
  Ctor._definedProps = true;
  var props = normPropDefs(Ctor);

  Object.defineProperties(Ctor.prototype, __WEBPACK_IMPORTED_MODULE_0____["d" /* keys */](props).reduce(function (prev, curr) {
    var _props$curr = props[curr],
        target = _props$curr.attribute.target,
        coerce = _props$curr.coerce,
        def = _props$curr.default,
        serialize = _props$curr.serialize;

    var _value = __WEBPACK_IMPORTED_MODULE_0____["e" /* sym */](curr);
    prev[curr] = {
      configurable: true,
      get: function get() {
        var val = this[_value];
        return val == null ? def : val;
      },
      set: function set(val) {
        this[_value] = coerce(val);
        syncPropertyToAttribute(this, target, serialize, val);
        this._updateDebounced();
      }
    };
    return prev;
  }, {}));
}

function normAttribute(name, prop) {
  var attribute = prop.attribute;

  var obj = (typeof attribute === 'undefined' ? 'undefined' : _typeof(attribute)) === 'object' ? _extends({}, attribute) : {
    source: attribute,
    target: attribute
  };
  if (obj.source === true) {
    obj.source = __WEBPACK_IMPORTED_MODULE_0____["a" /* dashCase */](name);
  }
  if (obj.target === true) {
    obj.target = __WEBPACK_IMPORTED_MODULE_0____["a" /* dashCase */](name);
  }
  return obj;
}

function normPropDef(name, prop) {
  var coerce = prop.coerce,
      def = prop.default,
      deserialize = prop.deserialize,
      serialize = prop.serialize;

  return {
    attribute: normAttribute(name, prop),
    coerce: coerce || function (v) {
      return v;
    },
    default: def,
    deserialize: deserialize || function (v) {
      return v;
    },
    serialize: serialize || function (v) {
      return v;
    }
  };
}

function normPropDefs(Ctor) {
  return Ctor._normalizedProps || (Ctor._normalizedProps = __WEBPACK_IMPORTED_MODULE_0____["d" /* keys */](Ctor.props).reduce(function (prev, curr) {
    prev[curr] = normPropDef(curr, Ctor.props[curr] || {});
    return prev;
  }, {}));
}

function syncAttributeToProperty(elem, name, value) {
  if (elem._syncingPropertyToAttribute) {
    return;
  }
  var propDefs = normPropDefs(elem.constructor);
  for (var propName in propDefs) {
    var _propDefs$propName = propDefs[propName],
        source = _propDefs$propName.attribute.source,
        deserialize = _propDefs$propName.deserialize;

    if (source === name) {
      elem._syncingAttributeToProperty = propName;
      elem[propName] = value == null ? value : deserialize(value);
      elem._syncingAttributeToProperty = null;
    }
  }
}

function syncPropertyToAttribute(elem, target, serialize, val) {
  if (target && elem._syncingAttributeToProperty !== target) {
    var serialized = serialize(val);
    elem._syncingPropertyToAttribute = true;
    if (serialized == null) {
      elem.removeAttribute(target);
    } else {
      elem.setAttribute(target, serialized);
    }
    elem._syncingPropertyToAttribute = false;
  }
}

/***/ }),
/* 59 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export formatName */
/* harmony export (immutable) */ __webpack_exports__["a"] = generateName;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0____ = __webpack_require__(6);




var suffix = 0;

function formatName(prefix, suffix) {
  prefix = prefix || 'element';
  return (prefix.indexOf('-') === -1 ? 'x-' + prefix : prefix) + (suffix ? '-' + suffix : '');
}

function generateName(Ctor) {
  var registry = customElements;
  var prefix = __WEBPACK_IMPORTED_MODULE_0____["a" /* dashCase */](Ctor.name);
  while (registry.get(formatName(prefix, suffix))) {
    suffix++;
  }
  return formatName(prefix, suffix++);
}

/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Hud;

var _skatejs = __webpack_require__(1);

var styles = {
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
};

function Hud(_ref) {
  var level = _ref.level,
      best = _ref.best;

  return (0, _skatejs.h)(
    'div',
    { style: styles.container },
    (0, _skatejs.h)(
      'span',
      null,
      'Level: ',
      level
    ),
    (0, _skatejs.h)(
      'span',
      null,
      'Best: ',
      best || 'N/A'
    )
  );
}

/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _skatejs = __webpack_require__(1);

var _cell = __webpack_require__(62);

var _cell2 = _interopRequireDefault(_cell);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var styles = {
  container: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gridGap: '12px',
    marginTop: '16px'
  }
};

var Board = function (_Component) {
  _inherits(Board, _Component);

  function Board() {
    _classCallCheck(this, Board);

    return _possibleConstructorReturn(this, (Board.__proto__ || Object.getPrototypeOf(Board)).apply(this, arguments));
  }

  _createClass(Board, [{
    key: 'connectedCallback',
    value: function connectedCallback() {
      _get(Board.prototype.__proto__ || Object.getPrototypeOf(Board.prototype), 'connectedCallback', this).call(this);
      this.resetState();
    }
  }, {
    key: 'resetState',
    value: function resetState() {
      var cells = new Array(9);
      cells.fill(true);

      for (var i = 0; i < this.level; i += 1) {
        cells = this._triggerImpulse(cells, Math.floor(Math.random() * cells.length));
      }

      this.cells = cells;
    }
  }, {
    key: '_getXFor',
    value: function _getXFor(index) {
      return index % 3;
    }
  }, {
    key: '_getYFor',
    value: function _getYFor(index) {
      return Math.floor(index / 3);
    }
  }, {
    key: '_triggerImpulse',
    value: function _triggerImpulse(cells, cellIndex) {
      var _this2 = this;

      var x = this._getXFor(cellIndex);
      var y = this._getYFor(cellIndex);
      return cells.map(function (cell, cellIndex) {
        var x2 = _this2._getXFor(cellIndex);
        var y2 = _this2._getYFor(cellIndex);

        if (Math.abs(x - x2) <= 1 && Math.abs(y - y2) <= 1) {
          return !cell;
        }
        return cell;
      });
    }
  }, {
    key: '_checkVictory',
    value: function _checkVictory() {
      if (this.isVictory) {
        this.dispatchEvent(new Event('victory'));
      }
    }
  }, {
    key: 'handleChange',
    value: function handleChange(cellIndex) {
      this.cells = this._triggerImpulse(this.cells, cellIndex);
      this._checkVictory();
    }
  }, {
    key: 'renderCell',
    value: function renderCell(cell, index) {
      var _this3 = this;

      return (0, _skatejs.h)('lsg-cell', {
        lit: cell,
        onClick: function onClick() {
          return _this3.handleChange(index);
        }
      });
    }
  }, {
    key: 'renderCallback',
    value: function renderCallback() {
      return (0, _skatejs.h)(
        'div',
        { style: styles.container },
        this.cells ? this.cells.map(this.renderCell.bind(this)) : null
      );
    }
  }, {
    key: 'isVictory',
    get: function get() {
      return this.cells.every(function (cell) {
        return cell;
      });
    }
  }], [{
    key: 'is',
    get: function get() {
      return 'lsg-board';
    }
  }, {
    key: 'props',
    get: function get() {
      return {
        cells: {},
        level: _skatejs.props.number
      };
    }
  }]);

  return Board;
}(_skatejs.Component);

exports.default = Board;


(0, _skatejs.define)(Board);

/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _skatejs = __webpack_require__(1);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Cell = function (_Component) {
  _inherits(Cell, _Component);

  function Cell() {
    _classCallCheck(this, Cell);

    return _possibleConstructorReturn(this, (Cell.__proto__ || Object.getPrototypeOf(Cell)).apply(this, arguments));
  }

  _createClass(Cell, [{
    key: 'renderCallback',
    value: function renderCallback() {
      var classNames = ['cell'];

      if (this.lit) {
        classNames.push('lit');
      }

      return (0, _skatejs.h)(
        'div',
        { 'class': classNames.join(' ') },
        (0, _skatejs.h)(
          'style',
          null,
          '\n        .cell button {\n          display: block;\n          width: 100%;\n          padding: 0;\n          padding-top: 100%;\n          border: transparent;\n          background-color: #c0c0c0;\n          border-radius: 4px;\n          transition: background-color 0.2s ease-in;\n        }\n\n        .cell button:hover {\n          background-color: #e0e0e0;\n        }\n\n        .cell.lit button {\n          background-color: #ffff61;\n        }\n\n        .cell.lit button:hover {\n          background-color: #ffffc0;\n        }\n      '
        ),
        (0, _skatejs.h)('button', { type: 'button' })
      );
    }
  }], [{
    key: 'is',
    get: function get() {
      return 'lsg-cell';
    }
  }, {
    key: 'props',
    get: function get() {
      return {
        lit: _skatejs.props.bool
      };
    }
  }]);

  return Cell;
}(_skatejs.Component);

exports.default = Cell;


(0, _skatejs.define)(Cell);

/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _skatejs = __webpack_require__(1);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var style = '\n.victory-screen {\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n\n  background-color: rgba(128, 128, 128, 0.5);\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  transition: opacity 0.3s ease-in;\n\n  text-align: center;\n}\n\n.victory-screen.hidden {\n  opacity: 0;\n  pointer-events: none;\n}\n\n.victory-screen span {\n  display: inline-block;\n  color: white;\n  font-size: 32px;\n  margin-bottom: 32px;\n}\n\n.victory-screen button {\n  background-color: lightblue;\n  color: white;\n  border: none;\n  padding: 12px;\n  font-size: 16px;\n}\n';

var VictoryScreen = function (_Component) {
  _inherits(VictoryScreen, _Component);

  function VictoryScreen() {
    _classCallCheck(this, VictoryScreen);

    return _possibleConstructorReturn(this, (VictoryScreen.__proto__ || Object.getPrototypeOf(VictoryScreen)).apply(this, arguments));
  }

  _createClass(VictoryScreen, [{
    key: 'handleClick',
    value: function handleClick(event) {
      event.stopPropagation();
      this.dispatchEvent(new Event('restart'));
    }
  }, {
    key: 'renderCallback',
    value: function renderCallback() {
      var _this2 = this;

      var classNames = ['victory-screen'];

      if (!this.isVisible) {
        classNames.push('hidden');
      }

      return (0, _skatejs.h)(
        'div',
        { 'class': classNames.join(' ') },
        (0, _skatejs.h)(
          'style',
          null,
          style
        ),
        (0, _skatejs.h)(
          'span',
          null,
          'Well done!'
        ),
        (0, _skatejs.h)(
          'button',
          { type: 'button', onClick: function onClick(evt) {
              return _this2.handleClick(evt);
            } },
          'Click to restart'
        )
      );
    }
  }], [{
    key: 'is',
    get: function get() {
      return 'lsg-victory-screen';
    }
  }, {
    key: 'props',
    get: function get() {
      return {
        isVisible: _skatejs.props.bool
      };
    }
  }]);

  return VictoryScreen;
}(_skatejs.Component);

exports.default = VictoryScreen;


(0, _skatejs.define)(VictoryScreen);

/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setBest = setBest;
exports.getBest = getBest;
function setBest(best) {
  localStorage.setItem('lsg-best', best);
}

function getBest() {
  return +localStorage.getItem('lsg-best');
}

/***/ })
/******/ ]);
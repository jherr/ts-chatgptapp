function $m(A) {
  return A && A.__esModule && Object.prototype.hasOwnProperty.call(A, "default") ? A.default : A;
}
var nc = { exports: {} }, be = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var md;
function km() {
  if (md) return be;
  md = 1;
  var A = Symbol.for("react.transitional.element"), ul = Symbol.for("react.fragment");
  function V(h, cl, zl) {
    var _l = null;
    if (zl !== void 0 && (_l = "" + zl), cl.key !== void 0 && (_l = "" + cl.key), "key" in cl) {
      zl = {};
      for (var Rl in cl)
        Rl !== "key" && (zl[Rl] = cl[Rl]);
    } else zl = cl;
    return cl = zl.ref, {
      $$typeof: A,
      type: h,
      key: _l,
      ref: cl !== void 0 ? cl : null,
      props: zl
    };
  }
  return be.Fragment = ul, be.jsx = V, be.jsxs = V, be;
}
var od;
function Fm() {
  return od || (od = 1, nc.exports = km()), nc.exports;
}
var Yl = Fm(), fc = { exports: {} }, C = {};
/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var hd;
function Im() {
  if (hd) return C;
  hd = 1;
  var A = Symbol.for("react.transitional.element"), ul = Symbol.for("react.portal"), V = Symbol.for("react.fragment"), h = Symbol.for("react.strict_mode"), cl = Symbol.for("react.profiler"), zl = Symbol.for("react.consumer"), _l = Symbol.for("react.context"), Rl = Symbol.for("react.forward_ref"), H = Symbol.for("react.suspense"), E = Symbol.for("react.memo"), $ = Symbol.for("react.lazy"), R = Symbol.for("react.activity"), sl = Symbol.iterator;
  function Wl(y) {
    return y === null || typeof y != "object" ? null : (y = sl && y[sl] || y["@@iterator"], typeof y == "function" ? y : null);
  }
  var Gl = {
    isMounted: function() {
      return !1;
    },
    enqueueForceUpdate: function() {
    },
    enqueueReplaceState: function() {
    },
    enqueueSetState: function() {
    }
  }, ql = Object.assign, Dt = {};
  function $l(y, T, p) {
    this.props = y, this.context = T, this.refs = Dt, this.updater = p || Gl;
  }
  $l.prototype.isReactComponent = {}, $l.prototype.setState = function(y, T) {
    if (typeof y != "object" && typeof y != "function" && y != null)
      throw Error(
        "takes an object of state variables to update or a function which returns an object of state variables."
      );
    this.updater.enqueueSetState(this, y, T, "setState");
  }, $l.prototype.forceUpdate = function(y) {
    this.updater.enqueueForceUpdate(this, y, "forceUpdate");
  };
  function Wt() {
  }
  Wt.prototype = $l.prototype;
  function Hl(y, T, p) {
    this.props = y, this.context = T, this.refs = Dt, this.updater = p || Gl;
  }
  var ft = Hl.prototype = new Wt();
  ft.constructor = Hl, ql(ft, $l.prototype), ft.isPureReactComponent = !0;
  var Tt = Array.isArray;
  function jl() {
  }
  var L = { H: null, A: null, T: null, S: null }, Xl = Object.prototype.hasOwnProperty;
  function Et(y, T, p) {
    var M = p.ref;
    return {
      $$typeof: A,
      type: y,
      key: T,
      ref: M !== void 0 ? M : null,
      props: p
    };
  }
  function Qa(y, T) {
    return Et(y.type, T, y.props);
  }
  function At(y) {
    return typeof y == "object" && y !== null && y.$$typeof === A;
  }
  function Ql(y) {
    var T = { "=": "=0", ":": "=2" };
    return "$" + y.replace(/[=:]/g, function(p) {
      return T[p];
    });
  }
  var za = /\/+/g;
  function Ut(y, T) {
    return typeof y == "object" && y !== null && y.key != null ? Ql("" + y.key) : T.toString(36);
  }
  function St(y) {
    switch (y.status) {
      case "fulfilled":
        return y.value;
      case "rejected":
        throw y.reason;
      default:
        switch (typeof y.status == "string" ? y.then(jl, jl) : (y.status = "pending", y.then(
          function(T) {
            y.status === "pending" && (y.status = "fulfilled", y.value = T);
          },
          function(T) {
            y.status === "pending" && (y.status = "rejected", y.reason = T);
          }
        )), y.status) {
          case "fulfilled":
            return y.value;
          case "rejected":
            throw y.reason;
        }
    }
    throw y;
  }
  function r(y, T, p, M, B) {
    var j = typeof y;
    (j === "undefined" || j === "boolean") && (y = null);
    var k = !1;
    if (y === null) k = !0;
    else
      switch (j) {
        case "bigint":
        case "string":
        case "number":
          k = !0;
          break;
        case "object":
          switch (y.$$typeof) {
            case A:
            case ul:
              k = !0;
              break;
            case $:
              return k = y._init, r(
                k(y._payload),
                T,
                p,
                M,
                B
              );
          }
      }
    if (k)
      return B = B(y), k = M === "" ? "." + Ut(y, 0) : M, Tt(B) ? (p = "", k != null && (p = k.replace(za, "$&/") + "/"), r(B, T, p, "", function(Ou) {
        return Ou;
      })) : B != null && (At(B) && (B = Qa(
        B,
        p + (B.key == null || y && y.key === B.key ? "" : ("" + B.key).replace(
          za,
          "$&/"
        ) + "/") + k
      )), T.push(B)), 1;
    k = 0;
    var Cl = M === "" ? "." : M + ":";
    if (Tt(y))
      for (var ml = 0; ml < y.length; ml++)
        M = y[ml], j = Cl + Ut(M, ml), k += r(
          M,
          T,
          p,
          j,
          B
        );
    else if (ml = Wl(y), typeof ml == "function")
      for (y = ml.call(y), ml = 0; !(M = y.next()).done; )
        M = M.value, j = Cl + Ut(M, ml++), k += r(
          M,
          T,
          p,
          j,
          B
        );
    else if (j === "object") {
      if (typeof y.then == "function")
        return r(
          St(y),
          T,
          p,
          M,
          B
        );
      throw T = String(y), Error(
        "Objects are not valid as a React child (found: " + (T === "[object Object]" ? "object with keys {" + Object.keys(y).join(", ") + "}" : T) + "). If you meant to render a collection of children, use an array instead."
      );
    }
    return k;
  }
  function _(y, T, p) {
    if (y == null) return y;
    var M = [], B = 0;
    return r(y, M, "", "", function(j) {
      return T.call(p, j, B++);
    }), M;
  }
  function q(y) {
    if (y._status === -1) {
      var T = y._result;
      T = T(), T.then(
        function(p) {
          (y._status === 0 || y._status === -1) && (y._status = 1, y._result = p);
        },
        function(p) {
          (y._status === 0 || y._status === -1) && (y._status = 2, y._result = p);
        }
      ), y._status === -1 && (y._status = 0, y._result = T);
    }
    if (y._status === 1) return y._result.default;
    throw y._result;
  }
  var P = typeof reportError == "function" ? reportError : function(y) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var T = new window.ErrorEvent("error", {
        bubbles: !0,
        cancelable: !0,
        message: typeof y == "object" && y !== null && typeof y.message == "string" ? String(y.message) : String(y),
        error: y
      });
      if (!window.dispatchEvent(T)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", y);
      return;
    }
    console.error(y);
  }, el = {
    map: _,
    forEach: function(y, T, p) {
      _(
        y,
        function() {
          T.apply(this, arguments);
        },
        p
      );
    },
    count: function(y) {
      var T = 0;
      return _(y, function() {
        T++;
      }), T;
    },
    toArray: function(y) {
      return _(y, function(T) {
        return T;
      }) || [];
    },
    only: function(y) {
      if (!At(y))
        throw Error(
          "React.Children.only expected to receive a single React element child."
        );
      return y;
    }
  };
  return C.Activity = R, C.Children = el, C.Component = $l, C.Fragment = V, C.Profiler = cl, C.PureComponent = Hl, C.StrictMode = h, C.Suspense = H, C.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = L, C.__COMPILER_RUNTIME = {
    __proto__: null,
    c: function(y) {
      return L.H.useMemoCache(y);
    }
  }, C.cache = function(y) {
    return function() {
      return y.apply(null, arguments);
    };
  }, C.cacheSignal = function() {
    return null;
  }, C.cloneElement = function(y, T, p) {
    if (y == null)
      throw Error(
        "The argument must be a React element, but you passed " + y + "."
      );
    var M = ql({}, y.props), B = y.key;
    if (T != null)
      for (j in T.key !== void 0 && (B = "" + T.key), T)
        !Xl.call(T, j) || j === "key" || j === "__self" || j === "__source" || j === "ref" && T.ref === void 0 || (M[j] = T[j]);
    var j = arguments.length - 2;
    if (j === 1) M.children = p;
    else if (1 < j) {
      for (var k = Array(j), Cl = 0; Cl < j; Cl++)
        k[Cl] = arguments[Cl + 2];
      M.children = k;
    }
    return Et(y.type, B, M);
  }, C.createContext = function(y) {
    return y = {
      $$typeof: _l,
      _currentValue: y,
      _currentValue2: y,
      _threadCount: 0,
      Provider: null,
      Consumer: null
    }, y.Provider = y, y.Consumer = {
      $$typeof: zl,
      _context: y
    }, y;
  }, C.createElement = function(y, T, p) {
    var M, B = {}, j = null;
    if (T != null)
      for (M in T.key !== void 0 && (j = "" + T.key), T)
        Xl.call(T, M) && M !== "key" && M !== "__self" && M !== "__source" && (B[M] = T[M]);
    var k = arguments.length - 2;
    if (k === 1) B.children = p;
    else if (1 < k) {
      for (var Cl = Array(k), ml = 0; ml < k; ml++)
        Cl[ml] = arguments[ml + 2];
      B.children = Cl;
    }
    if (y && y.defaultProps)
      for (M in k = y.defaultProps, k)
        B[M] === void 0 && (B[M] = k[M]);
    return Et(y, j, B);
  }, C.createRef = function() {
    return { current: null };
  }, C.forwardRef = function(y) {
    return { $$typeof: Rl, render: y };
  }, C.isValidElement = At, C.lazy = function(y) {
    return {
      $$typeof: $,
      _payload: { _status: -1, _result: y },
      _init: q
    };
  }, C.memo = function(y, T) {
    return {
      $$typeof: E,
      type: y,
      compare: T === void 0 ? null : T
    };
  }, C.startTransition = function(y) {
    var T = L.T, p = {};
    L.T = p;
    try {
      var M = y(), B = L.S;
      B !== null && B(p, M), typeof M == "object" && M !== null && typeof M.then == "function" && M.then(jl, P);
    } catch (j) {
      P(j);
    } finally {
      T !== null && p.types !== null && (T.types = p.types), L.T = T;
    }
  }, C.unstable_useCacheRefresh = function() {
    return L.H.useCacheRefresh();
  }, C.use = function(y) {
    return L.H.use(y);
  }, C.useActionState = function(y, T, p) {
    return L.H.useActionState(y, T, p);
  }, C.useCallback = function(y, T) {
    return L.H.useCallback(y, T);
  }, C.useContext = function(y) {
    return L.H.useContext(y);
  }, C.useDebugValue = function() {
  }, C.useDeferredValue = function(y, T) {
    return L.H.useDeferredValue(y, T);
  }, C.useEffect = function(y, T) {
    return L.H.useEffect(y, T);
  }, C.useEffectEvent = function(y) {
    return L.H.useEffectEvent(y);
  }, C.useId = function() {
    return L.H.useId();
  }, C.useImperativeHandle = function(y, T, p) {
    return L.H.useImperativeHandle(y, T, p);
  }, C.useInsertionEffect = function(y, T) {
    return L.H.useInsertionEffect(y, T);
  }, C.useLayoutEffect = function(y, T) {
    return L.H.useLayoutEffect(y, T);
  }, C.useMemo = function(y, T) {
    return L.H.useMemo(y, T);
  }, C.useOptimistic = function(y, T) {
    return L.H.useOptimistic(y, T);
  }, C.useReducer = function(y, T, p) {
    return L.H.useReducer(y, T, p);
  }, C.useRef = function(y) {
    return L.H.useRef(y);
  }, C.useState = function(y) {
    return L.H.useState(y);
  }, C.useSyncExternalStore = function(y, T, p) {
    return L.H.useSyncExternalStore(
      y,
      T,
      p
    );
  }, C.useTransition = function() {
    return L.H.useTransition();
  }, C.version = "19.2.0", C;
}
var gd;
function dc() {
  return gd || (gd = 1, fc.exports = Im()), fc.exports;
}
var pu = dc();
const Pm = /* @__PURE__ */ $m(pu);
var ic = { exports: {} }, ze = {}, cc = { exports: {} }, sc = {};
/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Sd;
function lo() {
  return Sd || (Sd = 1, (function(A) {
    function ul(r, _) {
      var q = r.length;
      r.push(_);
      l: for (; 0 < q; ) {
        var P = q - 1 >>> 1, el = r[P];
        if (0 < cl(el, _))
          r[P] = _, r[q] = el, q = P;
        else break l;
      }
    }
    function V(r) {
      return r.length === 0 ? null : r[0];
    }
    function h(r) {
      if (r.length === 0) return null;
      var _ = r[0], q = r.pop();
      if (q !== _) {
        r[0] = q;
        l: for (var P = 0, el = r.length, y = el >>> 1; P < y; ) {
          var T = 2 * (P + 1) - 1, p = r[T], M = T + 1, B = r[M];
          if (0 > cl(p, q))
            M < el && 0 > cl(B, p) ? (r[P] = B, r[M] = q, P = M) : (r[P] = p, r[T] = q, P = T);
          else if (M < el && 0 > cl(B, q))
            r[P] = B, r[M] = q, P = M;
          else break l;
        }
      }
      return _;
    }
    function cl(r, _) {
      var q = r.sortIndex - _.sortIndex;
      return q !== 0 ? q : r.id - _.id;
    }
    if (A.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") {
      var zl = performance;
      A.unstable_now = function() {
        return zl.now();
      };
    } else {
      var _l = Date, Rl = _l.now();
      A.unstable_now = function() {
        return _l.now() - Rl;
      };
    }
    var H = [], E = [], $ = 1, R = null, sl = 3, Wl = !1, Gl = !1, ql = !1, Dt = !1, $l = typeof setTimeout == "function" ? setTimeout : null, Wt = typeof clearTimeout == "function" ? clearTimeout : null, Hl = typeof setImmediate < "u" ? setImmediate : null;
    function ft(r) {
      for (var _ = V(E); _ !== null; ) {
        if (_.callback === null) h(E);
        else if (_.startTime <= r)
          h(E), _.sortIndex = _.expirationTime, ul(H, _);
        else break;
        _ = V(E);
      }
    }
    function Tt(r) {
      if (ql = !1, ft(r), !Gl)
        if (V(H) !== null)
          Gl = !0, jl || (jl = !0, Ql());
        else {
          var _ = V(E);
          _ !== null && St(Tt, _.startTime - r);
        }
    }
    var jl = !1, L = -1, Xl = 5, Et = -1;
    function Qa() {
      return Dt ? !0 : !(A.unstable_now() - Et < Xl);
    }
    function At() {
      if (Dt = !1, jl) {
        var r = A.unstable_now();
        Et = r;
        var _ = !0;
        try {
          l: {
            Gl = !1, ql && (ql = !1, Wt(L), L = -1), Wl = !0;
            var q = sl;
            try {
              t: {
                for (ft(r), R = V(H); R !== null && !(R.expirationTime > r && Qa()); ) {
                  var P = R.callback;
                  if (typeof P == "function") {
                    R.callback = null, sl = R.priorityLevel;
                    var el = P(
                      R.expirationTime <= r
                    );
                    if (r = A.unstable_now(), typeof el == "function") {
                      R.callback = el, ft(r), _ = !0;
                      break t;
                    }
                    R === V(H) && h(H), ft(r);
                  } else h(H);
                  R = V(H);
                }
                if (R !== null) _ = !0;
                else {
                  var y = V(E);
                  y !== null && St(
                    Tt,
                    y.startTime - r
                  ), _ = !1;
                }
              }
              break l;
            } finally {
              R = null, sl = q, Wl = !1;
            }
            _ = void 0;
          }
        } finally {
          _ ? Ql() : jl = !1;
        }
      }
    }
    var Ql;
    if (typeof Hl == "function")
      Ql = function() {
        Hl(At);
      };
    else if (typeof MessageChannel < "u") {
      var za = new MessageChannel(), Ut = za.port2;
      za.port1.onmessage = At, Ql = function() {
        Ut.postMessage(null);
      };
    } else
      Ql = function() {
        $l(At, 0);
      };
    function St(r, _) {
      L = $l(function() {
        r(A.unstable_now());
      }, _);
    }
    A.unstable_IdlePriority = 5, A.unstable_ImmediatePriority = 1, A.unstable_LowPriority = 4, A.unstable_NormalPriority = 3, A.unstable_Profiling = null, A.unstable_UserBlockingPriority = 2, A.unstable_cancelCallback = function(r) {
      r.callback = null;
    }, A.unstable_forceFrameRate = function(r) {
      0 > r || 125 < r ? console.error(
        "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
      ) : Xl = 0 < r ? Math.floor(1e3 / r) : 5;
    }, A.unstable_getCurrentPriorityLevel = function() {
      return sl;
    }, A.unstable_next = function(r) {
      switch (sl) {
        case 1:
        case 2:
        case 3:
          var _ = 3;
          break;
        default:
          _ = sl;
      }
      var q = sl;
      sl = _;
      try {
        return r();
      } finally {
        sl = q;
      }
    }, A.unstable_requestPaint = function() {
      Dt = !0;
    }, A.unstable_runWithPriority = function(r, _) {
      switch (r) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          r = 3;
      }
      var q = sl;
      sl = r;
      try {
        return _();
      } finally {
        sl = q;
      }
    }, A.unstable_scheduleCallback = function(r, _, q) {
      var P = A.unstable_now();
      switch (typeof q == "object" && q !== null ? (q = q.delay, q = typeof q == "number" && 0 < q ? P + q : P) : q = P, r) {
        case 1:
          var el = -1;
          break;
        case 2:
          el = 250;
          break;
        case 5:
          el = 1073741823;
          break;
        case 4:
          el = 1e4;
          break;
        default:
          el = 5e3;
      }
      return el = q + el, r = {
        id: $++,
        callback: _,
        priorityLevel: r,
        startTime: q,
        expirationTime: el,
        sortIndex: -1
      }, q > P ? (r.sortIndex = q, ul(E, r), V(H) === null && r === V(E) && (ql ? (Wt(L), L = -1) : ql = !0, St(Tt, q - P))) : (r.sortIndex = el, ul(H, r), Gl || Wl || (Gl = !0, jl || (jl = !0, Ql()))), r;
    }, A.unstable_shouldYield = Qa, A.unstable_wrapCallback = function(r) {
      var _ = sl;
      return function() {
        var q = sl;
        sl = _;
        try {
          return r.apply(this, arguments);
        } finally {
          sl = q;
        }
      };
    };
  })(sc)), sc;
}
var rd;
function to() {
  return rd || (rd = 1, cc.exports = lo()), cc.exports;
}
var yc = { exports: {} }, Nl = {};
/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var bd;
function ao() {
  if (bd) return Nl;
  bd = 1;
  var A = dc();
  function ul(H) {
    var E = "https://react.dev/errors/" + H;
    if (1 < arguments.length) {
      E += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var $ = 2; $ < arguments.length; $++)
        E += "&args[]=" + encodeURIComponent(arguments[$]);
    }
    return "Minified React error #" + H + "; visit " + E + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function V() {
  }
  var h = {
    d: {
      f: V,
      r: function() {
        throw Error(ul(522));
      },
      D: V,
      C: V,
      L: V,
      m: V,
      X: V,
      S: V,
      M: V
    },
    p: 0,
    findDOMNode: null
  }, cl = Symbol.for("react.portal");
  function zl(H, E, $) {
    var R = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: cl,
      key: R == null ? null : "" + R,
      children: H,
      containerInfo: E,
      implementation: $
    };
  }
  var _l = A.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function Rl(H, E) {
    if (H === "font") return "";
    if (typeof E == "string")
      return E === "use-credentials" ? E : "";
  }
  return Nl.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = h, Nl.createPortal = function(H, E) {
    var $ = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!E || E.nodeType !== 1 && E.nodeType !== 9 && E.nodeType !== 11)
      throw Error(ul(299));
    return zl(H, E, null, $);
  }, Nl.flushSync = function(H) {
    var E = _l.T, $ = h.p;
    try {
      if (_l.T = null, h.p = 2, H) return H();
    } finally {
      _l.T = E, h.p = $, h.d.f();
    }
  }, Nl.preconnect = function(H, E) {
    typeof H == "string" && (E ? (E = E.crossOrigin, E = typeof E == "string" ? E === "use-credentials" ? E : "" : void 0) : E = null, h.d.C(H, E));
  }, Nl.prefetchDNS = function(H) {
    typeof H == "string" && h.d.D(H);
  }, Nl.preinit = function(H, E) {
    if (typeof H == "string" && E && typeof E.as == "string") {
      var $ = E.as, R = Rl($, E.crossOrigin), sl = typeof E.integrity == "string" ? E.integrity : void 0, Wl = typeof E.fetchPriority == "string" ? E.fetchPriority : void 0;
      $ === "style" ? h.d.S(
        H,
        typeof E.precedence == "string" ? E.precedence : void 0,
        {
          crossOrigin: R,
          integrity: sl,
          fetchPriority: Wl
        }
      ) : $ === "script" && h.d.X(H, {
        crossOrigin: R,
        integrity: sl,
        fetchPriority: Wl,
        nonce: typeof E.nonce == "string" ? E.nonce : void 0
      });
    }
  }, Nl.preinitModule = function(H, E) {
    if (typeof H == "string")
      if (typeof E == "object" && E !== null) {
        if (E.as == null || E.as === "script") {
          var $ = Rl(
            E.as,
            E.crossOrigin
          );
          h.d.M(H, {
            crossOrigin: $,
            integrity: typeof E.integrity == "string" ? E.integrity : void 0,
            nonce: typeof E.nonce == "string" ? E.nonce : void 0
          });
        }
      } else E == null && h.d.M(H);
  }, Nl.preload = function(H, E) {
    if (typeof H == "string" && typeof E == "object" && E !== null && typeof E.as == "string") {
      var $ = E.as, R = Rl($, E.crossOrigin);
      h.d.L(H, $, {
        crossOrigin: R,
        integrity: typeof E.integrity == "string" ? E.integrity : void 0,
        nonce: typeof E.nonce == "string" ? E.nonce : void 0,
        type: typeof E.type == "string" ? E.type : void 0,
        fetchPriority: typeof E.fetchPriority == "string" ? E.fetchPriority : void 0,
        referrerPolicy: typeof E.referrerPolicy == "string" ? E.referrerPolicy : void 0,
        imageSrcSet: typeof E.imageSrcSet == "string" ? E.imageSrcSet : void 0,
        imageSizes: typeof E.imageSizes == "string" ? E.imageSizes : void 0,
        media: typeof E.media == "string" ? E.media : void 0
      });
    }
  }, Nl.preloadModule = function(H, E) {
    if (typeof H == "string")
      if (E) {
        var $ = Rl(E.as, E.crossOrigin);
        h.d.m(H, {
          as: typeof E.as == "string" && E.as !== "script" ? E.as : void 0,
          crossOrigin: $,
          integrity: typeof E.integrity == "string" ? E.integrity : void 0
        });
      } else h.d.m(H);
  }, Nl.requestFormReset = function(H) {
    h.d.r(H);
  }, Nl.unstable_batchedUpdates = function(H, E) {
    return H(E);
  }, Nl.useFormState = function(H, E, $) {
    return _l.H.useFormState(H, E, $);
  }, Nl.useFormStatus = function() {
    return _l.H.useHostTransitionStatus();
  }, Nl.version = "19.2.0", Nl;
}
var zd;
function uo() {
  if (zd) return yc.exports;
  zd = 1;
  function A() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(A);
      } catch (ul) {
        console.error(ul);
      }
  }
  return A(), yc.exports = ao(), yc.exports;
}
/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Td;
function eo() {
  if (Td) return ze;
  Td = 1;
  var A = to(), ul = dc(), V = uo();
  function h(l) {
    var t = "https://react.dev/errors/" + l;
    if (1 < arguments.length) {
      t += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var a = 2; a < arguments.length; a++)
        t += "&args[]=" + encodeURIComponent(arguments[a]);
    }
    return "Minified React error #" + l + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function cl(l) {
    return !(!l || l.nodeType !== 1 && l.nodeType !== 9 && l.nodeType !== 11);
  }
  function zl(l) {
    var t = l, a = l;
    if (l.alternate) for (; t.return; ) t = t.return;
    else {
      l = t;
      do
        t = l, (t.flags & 4098) !== 0 && (a = t.return), l = t.return;
      while (l);
    }
    return t.tag === 3 ? a : null;
  }
  function _l(l) {
    if (l.tag === 13) {
      var t = l.memoizedState;
      if (t === null && (l = l.alternate, l !== null && (t = l.memoizedState)), t !== null) return t.dehydrated;
    }
    return null;
  }
  function Rl(l) {
    if (l.tag === 31) {
      var t = l.memoizedState;
      if (t === null && (l = l.alternate, l !== null && (t = l.memoizedState)), t !== null) return t.dehydrated;
    }
    return null;
  }
  function H(l) {
    if (zl(l) !== l)
      throw Error(h(188));
  }
  function E(l) {
    var t = l.alternate;
    if (!t) {
      if (t = zl(l), t === null) throw Error(h(188));
      return t !== l ? null : l;
    }
    for (var a = l, u = t; ; ) {
      var e = a.return;
      if (e === null) break;
      var n = e.alternate;
      if (n === null) {
        if (u = e.return, u !== null) {
          a = u;
          continue;
        }
        break;
      }
      if (e.child === n.child) {
        for (n = e.child; n; ) {
          if (n === a) return H(e), l;
          if (n === u) return H(e), t;
          n = n.sibling;
        }
        throw Error(h(188));
      }
      if (a.return !== u.return) a = e, u = n;
      else {
        for (var f = !1, i = e.child; i; ) {
          if (i === a) {
            f = !0, a = e, u = n;
            break;
          }
          if (i === u) {
            f = !0, u = e, a = n;
            break;
          }
          i = i.sibling;
        }
        if (!f) {
          for (i = n.child; i; ) {
            if (i === a) {
              f = !0, a = n, u = e;
              break;
            }
            if (i === u) {
              f = !0, u = n, a = e;
              break;
            }
            i = i.sibling;
          }
          if (!f) throw Error(h(189));
        }
      }
      if (a.alternate !== u) throw Error(h(190));
    }
    if (a.tag !== 3) throw Error(h(188));
    return a.stateNode.current === a ? l : t;
  }
  function $(l) {
    var t = l.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return l;
    for (l = l.child; l !== null; ) {
      if (t = $(l), t !== null) return t;
      l = l.sibling;
    }
    return null;
  }
  var R = Object.assign, sl = Symbol.for("react.element"), Wl = Symbol.for("react.transitional.element"), Gl = Symbol.for("react.portal"), ql = Symbol.for("react.fragment"), Dt = Symbol.for("react.strict_mode"), $l = Symbol.for("react.profiler"), Wt = Symbol.for("react.consumer"), Hl = Symbol.for("react.context"), ft = Symbol.for("react.forward_ref"), Tt = Symbol.for("react.suspense"), jl = Symbol.for("react.suspense_list"), L = Symbol.for("react.memo"), Xl = Symbol.for("react.lazy"), Et = Symbol.for("react.activity"), Qa = Symbol.for("react.memo_cache_sentinel"), At = Symbol.iterator;
  function Ql(l) {
    return l === null || typeof l != "object" ? null : (l = At && l[At] || l["@@iterator"], typeof l == "function" ? l : null);
  }
  var za = Symbol.for("react.client.reference");
  function Ut(l) {
    if (l == null) return null;
    if (typeof l == "function")
      return l.$$typeof === za ? null : l.displayName || l.name || null;
    if (typeof l == "string") return l;
    switch (l) {
      case ql:
        return "Fragment";
      case $l:
        return "Profiler";
      case Dt:
        return "StrictMode";
      case Tt:
        return "Suspense";
      case jl:
        return "SuspenseList";
      case Et:
        return "Activity";
    }
    if (typeof l == "object")
      switch (l.$$typeof) {
        case Gl:
          return "Portal";
        case Hl:
          return l.displayName || "Context";
        case Wt:
          return (l._context.displayName || "Context") + ".Consumer";
        case ft:
          var t = l.render;
          return l = l.displayName, l || (l = t.displayName || t.name || "", l = l !== "" ? "ForwardRef(" + l + ")" : "ForwardRef"), l;
        case L:
          return t = l.displayName || null, t !== null ? t : Ut(l.type) || "Memo";
        case Xl:
          t = l._payload, l = l._init;
          try {
            return Ut(l(t));
          } catch {
          }
      }
    return null;
  }
  var St = Array.isArray, r = ul.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, _ = V.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, q = {
    pending: !1,
    data: null,
    method: null,
    action: null
  }, P = [], el = -1;
  function y(l) {
    return { current: l };
  }
  function T(l) {
    0 > el || (l.current = P[el], P[el] = null, el--);
  }
  function p(l, t) {
    el++, P[el] = l.current, l.current = t;
  }
  var M = y(null), B = y(null), j = y(null), k = y(null);
  function Cl(l, t) {
    switch (p(j, t), p(B, l), p(M, null), t.nodeType) {
      case 9:
      case 11:
        l = (l = t.documentElement) && (l = l.namespaceURI) ? Yy(l) : 0;
        break;
      default:
        if (l = t.tagName, t = t.namespaceURI)
          t = Yy(t), l = Gy(t, l);
        else
          switch (l) {
            case "svg":
              l = 1;
              break;
            case "math":
              l = 2;
              break;
            default:
              l = 0;
          }
    }
    T(M), p(M, l);
  }
  function ml() {
    T(M), T(B), T(j);
  }
  function Ou(l) {
    l.memoizedState !== null && p(k, l);
    var t = M.current, a = Gy(t, l.type);
    t !== a && (p(B, l), p(M, a));
  }
  function Te(l) {
    B.current === l && (T(M), T(B)), k.current === l && (T(k), he._currentValue = q);
  }
  var Qn, vc;
  function Ta(l) {
    if (Qn === void 0)
      try {
        throw Error();
      } catch (a) {
        var t = a.stack.trim().match(/\n( *(at )?)/);
        Qn = t && t[1] || "", vc = -1 < a.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < a.stack.indexOf("@") ? "@unknown:0:0" : "";
      }
    return `
` + Qn + l + vc;
  }
  var Zn = !1;
  function xn(l, t) {
    if (!l || Zn) return "";
    Zn = !0;
    var a = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var u = {
        DetermineComponentFrameRoot: function() {
          try {
            if (t) {
              var z = function() {
                throw Error();
              };
              if (Object.defineProperty(z.prototype, "props", {
                set: function() {
                  throw Error();
                }
              }), typeof Reflect == "object" && Reflect.construct) {
                try {
                  Reflect.construct(z, []);
                } catch (g) {
                  var o = g;
                }
                Reflect.construct(l, [], z);
              } else {
                try {
                  z.call();
                } catch (g) {
                  o = g;
                }
                l.call(z.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (g) {
                o = g;
              }
              (z = l()) && typeof z.catch == "function" && z.catch(function() {
              });
            }
          } catch (g) {
            if (g && o && typeof g.stack == "string")
              return [g.stack, o.stack];
          }
          return [null, null];
        }
      };
      u.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
      var e = Object.getOwnPropertyDescriptor(
        u.DetermineComponentFrameRoot,
        "name"
      );
      e && e.configurable && Object.defineProperty(
        u.DetermineComponentFrameRoot,
        "name",
        { value: "DetermineComponentFrameRoot" }
      );
      var n = u.DetermineComponentFrameRoot(), f = n[0], i = n[1];
      if (f && i) {
        var c = f.split(`
`), m = i.split(`
`);
        for (e = u = 0; u < c.length && !c[u].includes("DetermineComponentFrameRoot"); )
          u++;
        for (; e < m.length && !m[e].includes(
          "DetermineComponentFrameRoot"
        ); )
          e++;
        if (u === c.length || e === m.length)
          for (u = c.length - 1, e = m.length - 1; 1 <= u && 0 <= e && c[u] !== m[e]; )
            e--;
        for (; 1 <= u && 0 <= e; u--, e--)
          if (c[u] !== m[e]) {
            if (u !== 1 || e !== 1)
              do
                if (u--, e--, 0 > e || c[u] !== m[e]) {
                  var S = `
` + c[u].replace(" at new ", " at ");
                  return l.displayName && S.includes("<anonymous>") && (S = S.replace("<anonymous>", l.displayName)), S;
                }
              while (1 <= u && 0 <= e);
            break;
          }
      }
    } finally {
      Zn = !1, Error.prepareStackTrace = a;
    }
    return (a = l ? l.displayName || l.name : "") ? Ta(a) : "";
  }
  function Od(l, t) {
    switch (l.tag) {
      case 26:
      case 27:
      case 5:
        return Ta(l.type);
      case 16:
        return Ta("Lazy");
      case 13:
        return l.child !== t && t !== null ? Ta("Suspense Fallback") : Ta("Suspense");
      case 19:
        return Ta("SuspenseList");
      case 0:
      case 15:
        return xn(l.type, !1);
      case 11:
        return xn(l.type.render, !1);
      case 1:
        return xn(l.type, !0);
      case 31:
        return Ta("Activity");
      default:
        return "";
    }
  }
  function mc(l) {
    try {
      var t = "", a = null;
      do
        t += Od(l, a), a = l, l = l.return;
      while (l);
      return t;
    } catch (u) {
      return `
Error generating stack: ` + u.message + `
` + u.stack;
    }
  }
  var Vn = Object.prototype.hasOwnProperty, Ln = A.unstable_scheduleCallback, Kn = A.unstable_cancelCallback, Md = A.unstable_shouldYield, Dd = A.unstable_requestPaint, kl = A.unstable_now, Ud = A.unstable_getCurrentPriorityLevel, oc = A.unstable_ImmediatePriority, hc = A.unstable_UserBlockingPriority, Ee = A.unstable_NormalPriority, Hd = A.unstable_LowPriority, gc = A.unstable_IdlePriority, Nd = A.log, Rd = A.unstable_setDisableYieldValue, Mu = null, Fl = null;
  function $t(l) {
    if (typeof Nd == "function" && Rd(l), Fl && typeof Fl.setStrictMode == "function")
      try {
        Fl.setStrictMode(Mu, l);
      } catch {
      }
  }
  var Il = Math.clz32 ? Math.clz32 : Bd, qd = Math.log, Cd = Math.LN2;
  function Bd(l) {
    return l >>>= 0, l === 0 ? 32 : 31 - (qd(l) / Cd | 0) | 0;
  }
  var Ae = 256, _e = 262144, pe = 4194304;
  function Ea(l) {
    var t = l & 42;
    if (t !== 0) return t;
    switch (l & -l) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
        return 64;
      case 128:
        return 128;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
        return l & 261888;
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return l & 3932160;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return l & 62914560;
      case 67108864:
        return 67108864;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 0;
      default:
        return l;
    }
  }
  function Oe(l, t, a) {
    var u = l.pendingLanes;
    if (u === 0) return 0;
    var e = 0, n = l.suspendedLanes, f = l.pingedLanes;
    l = l.warmLanes;
    var i = u & 134217727;
    return i !== 0 ? (u = i & ~n, u !== 0 ? e = Ea(u) : (f &= i, f !== 0 ? e = Ea(f) : a || (a = i & ~l, a !== 0 && (e = Ea(a))))) : (i = u & ~n, i !== 0 ? e = Ea(i) : f !== 0 ? e = Ea(f) : a || (a = u & ~l, a !== 0 && (e = Ea(a)))), e === 0 ? 0 : t !== 0 && t !== e && (t & n) === 0 && (n = e & -e, a = t & -t, n >= a || n === 32 && (a & 4194048) !== 0) ? t : e;
  }
  function Du(l, t) {
    return (l.pendingLanes & ~(l.suspendedLanes & ~l.pingedLanes) & t) === 0;
  }
  function Yd(l, t) {
    switch (l) {
      case 1:
      case 2:
      case 4:
      case 8:
      case 64:
        return t + 250;
      case 16:
      case 32:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return t + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return -1;
      case 67108864:
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function Sc() {
    var l = pe;
    return pe <<= 1, (pe & 62914560) === 0 && (pe = 4194304), l;
  }
  function Jn(l) {
    for (var t = [], a = 0; 31 > a; a++) t.push(l);
    return t;
  }
  function Uu(l, t) {
    l.pendingLanes |= t, t !== 268435456 && (l.suspendedLanes = 0, l.pingedLanes = 0, l.warmLanes = 0);
  }
  function Gd(l, t, a, u, e, n) {
    var f = l.pendingLanes;
    l.pendingLanes = a, l.suspendedLanes = 0, l.pingedLanes = 0, l.warmLanes = 0, l.expiredLanes &= a, l.entangledLanes &= a, l.errorRecoveryDisabledLanes &= a, l.shellSuspendCounter = 0;
    var i = l.entanglements, c = l.expirationTimes, m = l.hiddenUpdates;
    for (a = f & ~a; 0 < a; ) {
      var S = 31 - Il(a), z = 1 << S;
      i[S] = 0, c[S] = -1;
      var o = m[S];
      if (o !== null)
        for (m[S] = null, S = 0; S < o.length; S++) {
          var g = o[S];
          g !== null && (g.lane &= -536870913);
        }
      a &= ~z;
    }
    u !== 0 && rc(l, u, 0), n !== 0 && e === 0 && l.tag !== 0 && (l.suspendedLanes |= n & ~(f & ~t));
  }
  function rc(l, t, a) {
    l.pendingLanes |= t, l.suspendedLanes &= ~t;
    var u = 31 - Il(t);
    l.entangledLanes |= t, l.entanglements[u] = l.entanglements[u] | 1073741824 | a & 261930;
  }
  function bc(l, t) {
    var a = l.entangledLanes |= t;
    for (l = l.entanglements; a; ) {
      var u = 31 - Il(a), e = 1 << u;
      e & t | l[u] & t && (l[u] |= t), a &= ~e;
    }
  }
  function zc(l, t) {
    var a = t & -t;
    return a = (a & 42) !== 0 ? 1 : wn(a), (a & (l.suspendedLanes | t)) !== 0 ? 0 : a;
  }
  function wn(l) {
    switch (l) {
      case 2:
        l = 1;
        break;
      case 8:
        l = 4;
        break;
      case 32:
        l = 16;
        break;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        l = 128;
        break;
      case 268435456:
        l = 134217728;
        break;
      default:
        l = 0;
    }
    return l;
  }
  function Wn(l) {
    return l &= -l, 2 < l ? 8 < l ? (l & 134217727) !== 0 ? 32 : 268435456 : 8 : 2;
  }
  function Tc() {
    var l = _.p;
    return l !== 0 ? l : (l = window.event, l === void 0 ? 32 : fd(l.type));
  }
  function Ec(l, t) {
    var a = _.p;
    try {
      return _.p = l, t();
    } finally {
      _.p = a;
    }
  }
  var kt = Math.random().toString(36).slice(2), pl = "__reactFiber$" + kt, Zl = "__reactProps$" + kt, Za = "__reactContainer$" + kt, $n = "__reactEvents$" + kt, jd = "__reactListeners$" + kt, Xd = "__reactHandles$" + kt, Ac = "__reactResources$" + kt, Hu = "__reactMarker$" + kt;
  function kn(l) {
    delete l[pl], delete l[Zl], delete l[$n], delete l[jd], delete l[Xd];
  }
  function xa(l) {
    var t = l[pl];
    if (t) return t;
    for (var a = l.parentNode; a; ) {
      if (t = a[Za] || a[pl]) {
        if (a = t.alternate, t.child !== null || a !== null && a.child !== null)
          for (l = Ly(l); l !== null; ) {
            if (a = l[pl]) return a;
            l = Ly(l);
          }
        return t;
      }
      l = a, a = l.parentNode;
    }
    return null;
  }
  function Va(l) {
    if (l = l[pl] || l[Za]) {
      var t = l.tag;
      if (t === 5 || t === 6 || t === 13 || t === 31 || t === 26 || t === 27 || t === 3)
        return l;
    }
    return null;
  }
  function Nu(l) {
    var t = l.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return l.stateNode;
    throw Error(h(33));
  }
  function La(l) {
    var t = l[Ac];
    return t || (t = l[Ac] = { hoistableStyles: /* @__PURE__ */ new Map(), hoistableScripts: /* @__PURE__ */ new Map() }), t;
  }
  function El(l) {
    l[Hu] = !0;
  }
  var _c = /* @__PURE__ */ new Set(), pc = {};
  function Aa(l, t) {
    Ka(l, t), Ka(l + "Capture", t);
  }
  function Ka(l, t) {
    for (pc[l] = t, l = 0; l < t.length; l++)
      _c.add(t[l]);
  }
  var Qd = RegExp(
    "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
  ), Oc = {}, Mc = {};
  function Zd(l) {
    return Vn.call(Mc, l) ? !0 : Vn.call(Oc, l) ? !1 : Qd.test(l) ? Mc[l] = !0 : (Oc[l] = !0, !1);
  }
  function Me(l, t, a) {
    if (Zd(t))
      if (a === null) l.removeAttribute(t);
      else {
        switch (typeof a) {
          case "undefined":
          case "function":
          case "symbol":
            l.removeAttribute(t);
            return;
          case "boolean":
            var u = t.toLowerCase().slice(0, 5);
            if (u !== "data-" && u !== "aria-") {
              l.removeAttribute(t);
              return;
            }
        }
        l.setAttribute(t, "" + a);
      }
  }
  function De(l, t, a) {
    if (a === null) l.removeAttribute(t);
    else {
      switch (typeof a) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          l.removeAttribute(t);
          return;
      }
      l.setAttribute(t, "" + a);
    }
  }
  function Ht(l, t, a, u) {
    if (u === null) l.removeAttribute(a);
    else {
      switch (typeof u) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          l.removeAttribute(a);
          return;
      }
      l.setAttributeNS(t, a, "" + u);
    }
  }
  function it(l) {
    switch (typeof l) {
      case "bigint":
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return l;
      case "object":
        return l;
      default:
        return "";
    }
  }
  function Dc(l) {
    var t = l.type;
    return (l = l.nodeName) && l.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
  }
  function xd(l, t, a) {
    var u = Object.getOwnPropertyDescriptor(
      l.constructor.prototype,
      t
    );
    if (!l.hasOwnProperty(t) && typeof u < "u" && typeof u.get == "function" && typeof u.set == "function") {
      var e = u.get, n = u.set;
      return Object.defineProperty(l, t, {
        configurable: !0,
        get: function() {
          return e.call(this);
        },
        set: function(f) {
          a = "" + f, n.call(this, f);
        }
      }), Object.defineProperty(l, t, {
        enumerable: u.enumerable
      }), {
        getValue: function() {
          return a;
        },
        setValue: function(f) {
          a = "" + f;
        },
        stopTracking: function() {
          l._valueTracker = null, delete l[t];
        }
      };
    }
  }
  function Fn(l) {
    if (!l._valueTracker) {
      var t = Dc(l) ? "checked" : "value";
      l._valueTracker = xd(
        l,
        t,
        "" + l[t]
      );
    }
  }
  function Uc(l) {
    if (!l) return !1;
    var t = l._valueTracker;
    if (!t) return !0;
    var a = t.getValue(), u = "";
    return l && (u = Dc(l) ? l.checked ? "true" : "false" : l.value), l = u, l !== a ? (t.setValue(l), !0) : !1;
  }
  function Ue(l) {
    if (l = l || (typeof document < "u" ? document : void 0), typeof l > "u") return null;
    try {
      return l.activeElement || l.body;
    } catch {
      return l.body;
    }
  }
  var Vd = /[\n"\\]/g;
  function ct(l) {
    return l.replace(
      Vd,
      function(t) {
        return "\\" + t.charCodeAt(0).toString(16) + " ";
      }
    );
  }
  function In(l, t, a, u, e, n, f, i) {
    l.name = "", f != null && typeof f != "function" && typeof f != "symbol" && typeof f != "boolean" ? l.type = f : l.removeAttribute("type"), t != null ? f === "number" ? (t === 0 && l.value === "" || l.value != t) && (l.value = "" + it(t)) : l.value !== "" + it(t) && (l.value = "" + it(t)) : f !== "submit" && f !== "reset" || l.removeAttribute("value"), t != null ? Pn(l, f, it(t)) : a != null ? Pn(l, f, it(a)) : u != null && l.removeAttribute("value"), e == null && n != null && (l.defaultChecked = !!n), e != null && (l.checked = e && typeof e != "function" && typeof e != "symbol"), i != null && typeof i != "function" && typeof i != "symbol" && typeof i != "boolean" ? l.name = "" + it(i) : l.removeAttribute("name");
  }
  function Hc(l, t, a, u, e, n, f, i) {
    if (n != null && typeof n != "function" && typeof n != "symbol" && typeof n != "boolean" && (l.type = n), t != null || a != null) {
      if (!(n !== "submit" && n !== "reset" || t != null)) {
        Fn(l);
        return;
      }
      a = a != null ? "" + it(a) : "", t = t != null ? "" + it(t) : a, i || t === l.value || (l.value = t), l.defaultValue = t;
    }
    u = u ?? e, u = typeof u != "function" && typeof u != "symbol" && !!u, l.checked = i ? l.checked : !!u, l.defaultChecked = !!u, f != null && typeof f != "function" && typeof f != "symbol" && typeof f != "boolean" && (l.name = f), Fn(l);
  }
  function Pn(l, t, a) {
    t === "number" && Ue(l.ownerDocument) === l || l.defaultValue === "" + a || (l.defaultValue = "" + a);
  }
  function Ja(l, t, a, u) {
    if (l = l.options, t) {
      t = {};
      for (var e = 0; e < a.length; e++)
        t["$" + a[e]] = !0;
      for (a = 0; a < l.length; a++)
        e = t.hasOwnProperty("$" + l[a].value), l[a].selected !== e && (l[a].selected = e), e && u && (l[a].defaultSelected = !0);
    } else {
      for (a = "" + it(a), t = null, e = 0; e < l.length; e++) {
        if (l[e].value === a) {
          l[e].selected = !0, u && (l[e].defaultSelected = !0);
          return;
        }
        t !== null || l[e].disabled || (t = l[e]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function Nc(l, t, a) {
    if (t != null && (t = "" + it(t), t !== l.value && (l.value = t), a == null)) {
      l.defaultValue !== t && (l.defaultValue = t);
      return;
    }
    l.defaultValue = a != null ? "" + it(a) : "";
  }
  function Rc(l, t, a, u) {
    if (t == null) {
      if (u != null) {
        if (a != null) throw Error(h(92));
        if (St(u)) {
          if (1 < u.length) throw Error(h(93));
          u = u[0];
        }
        a = u;
      }
      a == null && (a = ""), t = a;
    }
    a = it(t), l.defaultValue = a, u = l.textContent, u === a && u !== "" && u !== null && (l.value = u), Fn(l);
  }
  function wa(l, t) {
    if (t) {
      var a = l.firstChild;
      if (a && a === l.lastChild && a.nodeType === 3) {
        a.nodeValue = t;
        return;
      }
    }
    l.textContent = t;
  }
  var Ld = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " "
    )
  );
  function qc(l, t, a) {
    var u = t.indexOf("--") === 0;
    a == null || typeof a == "boolean" || a === "" ? u ? l.setProperty(t, "") : t === "float" ? l.cssFloat = "" : l[t] = "" : u ? l.setProperty(t, a) : typeof a != "number" || a === 0 || Ld.has(t) ? t === "float" ? l.cssFloat = a : l[t] = ("" + a).trim() : l[t] = a + "px";
  }
  function Cc(l, t, a) {
    if (t != null && typeof t != "object")
      throw Error(h(62));
    if (l = l.style, a != null) {
      for (var u in a)
        !a.hasOwnProperty(u) || t != null && t.hasOwnProperty(u) || (u.indexOf("--") === 0 ? l.setProperty(u, "") : u === "float" ? l.cssFloat = "" : l[u] = "");
      for (var e in t)
        u = t[e], t.hasOwnProperty(e) && a[e] !== u && qc(l, e, u);
    } else
      for (var n in t)
        t.hasOwnProperty(n) && qc(l, n, t[n]);
  }
  function lf(l) {
    if (l.indexOf("-") === -1) return !1;
    switch (l) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return !1;
      default:
        return !0;
    }
  }
  var Kd = /* @__PURE__ */ new Map([
    ["acceptCharset", "accept-charset"],
    ["htmlFor", "for"],
    ["httpEquiv", "http-equiv"],
    ["crossOrigin", "crossorigin"],
    ["accentHeight", "accent-height"],
    ["alignmentBaseline", "alignment-baseline"],
    ["arabicForm", "arabic-form"],
    ["baselineShift", "baseline-shift"],
    ["capHeight", "cap-height"],
    ["clipPath", "clip-path"],
    ["clipRule", "clip-rule"],
    ["colorInterpolation", "color-interpolation"],
    ["colorInterpolationFilters", "color-interpolation-filters"],
    ["colorProfile", "color-profile"],
    ["colorRendering", "color-rendering"],
    ["dominantBaseline", "dominant-baseline"],
    ["enableBackground", "enable-background"],
    ["fillOpacity", "fill-opacity"],
    ["fillRule", "fill-rule"],
    ["floodColor", "flood-color"],
    ["floodOpacity", "flood-opacity"],
    ["fontFamily", "font-family"],
    ["fontSize", "font-size"],
    ["fontSizeAdjust", "font-size-adjust"],
    ["fontStretch", "font-stretch"],
    ["fontStyle", "font-style"],
    ["fontVariant", "font-variant"],
    ["fontWeight", "font-weight"],
    ["glyphName", "glyph-name"],
    ["glyphOrientationHorizontal", "glyph-orientation-horizontal"],
    ["glyphOrientationVertical", "glyph-orientation-vertical"],
    ["horizAdvX", "horiz-adv-x"],
    ["horizOriginX", "horiz-origin-x"],
    ["imageRendering", "image-rendering"],
    ["letterSpacing", "letter-spacing"],
    ["lightingColor", "lighting-color"],
    ["markerEnd", "marker-end"],
    ["markerMid", "marker-mid"],
    ["markerStart", "marker-start"],
    ["overlinePosition", "overline-position"],
    ["overlineThickness", "overline-thickness"],
    ["paintOrder", "paint-order"],
    ["panose-1", "panose-1"],
    ["pointerEvents", "pointer-events"],
    ["renderingIntent", "rendering-intent"],
    ["shapeRendering", "shape-rendering"],
    ["stopColor", "stop-color"],
    ["stopOpacity", "stop-opacity"],
    ["strikethroughPosition", "strikethrough-position"],
    ["strikethroughThickness", "strikethrough-thickness"],
    ["strokeDasharray", "stroke-dasharray"],
    ["strokeDashoffset", "stroke-dashoffset"],
    ["strokeLinecap", "stroke-linecap"],
    ["strokeLinejoin", "stroke-linejoin"],
    ["strokeMiterlimit", "stroke-miterlimit"],
    ["strokeOpacity", "stroke-opacity"],
    ["strokeWidth", "stroke-width"],
    ["textAnchor", "text-anchor"],
    ["textDecoration", "text-decoration"],
    ["textRendering", "text-rendering"],
    ["transformOrigin", "transform-origin"],
    ["underlinePosition", "underline-position"],
    ["underlineThickness", "underline-thickness"],
    ["unicodeBidi", "unicode-bidi"],
    ["unicodeRange", "unicode-range"],
    ["unitsPerEm", "units-per-em"],
    ["vAlphabetic", "v-alphabetic"],
    ["vHanging", "v-hanging"],
    ["vIdeographic", "v-ideographic"],
    ["vMathematical", "v-mathematical"],
    ["vectorEffect", "vector-effect"],
    ["vertAdvY", "vert-adv-y"],
    ["vertOriginX", "vert-origin-x"],
    ["vertOriginY", "vert-origin-y"],
    ["wordSpacing", "word-spacing"],
    ["writingMode", "writing-mode"],
    ["xmlnsXlink", "xmlns:xlink"],
    ["xHeight", "x-height"]
  ]), Jd = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function He(l) {
    return Jd.test("" + l) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : l;
  }
  function Nt() {
  }
  var tf = null;
  function af(l) {
    return l = l.target || l.srcElement || window, l.correspondingUseElement && (l = l.correspondingUseElement), l.nodeType === 3 ? l.parentNode : l;
  }
  var Wa = null, $a = null;
  function Bc(l) {
    var t = Va(l);
    if (t && (l = t.stateNode)) {
      var a = l[Zl] || null;
      l: switch (l = t.stateNode, t.type) {
        case "input":
          if (In(
            l,
            a.value,
            a.defaultValue,
            a.defaultValue,
            a.checked,
            a.defaultChecked,
            a.type,
            a.name
          ), t = a.name, a.type === "radio" && t != null) {
            for (a = l; a.parentNode; ) a = a.parentNode;
            for (a = a.querySelectorAll(
              'input[name="' + ct(
                "" + t
              ) + '"][type="radio"]'
            ), t = 0; t < a.length; t++) {
              var u = a[t];
              if (u !== l && u.form === l.form) {
                var e = u[Zl] || null;
                if (!e) throw Error(h(90));
                In(
                  u,
                  e.value,
                  e.defaultValue,
                  e.defaultValue,
                  e.checked,
                  e.defaultChecked,
                  e.type,
                  e.name
                );
              }
            }
            for (t = 0; t < a.length; t++)
              u = a[t], u.form === l.form && Uc(u);
          }
          break l;
        case "textarea":
          Nc(l, a.value, a.defaultValue);
          break l;
        case "select":
          t = a.value, t != null && Ja(l, !!a.multiple, t, !1);
      }
    }
  }
  var uf = !1;
  function Yc(l, t, a) {
    if (uf) return l(t, a);
    uf = !0;
    try {
      var u = l(t);
      return u;
    } finally {
      if (uf = !1, (Wa !== null || $a !== null) && (rn(), Wa && (t = Wa, l = $a, $a = Wa = null, Bc(t), l)))
        for (t = 0; t < l.length; t++) Bc(l[t]);
    }
  }
  function Ru(l, t) {
    var a = l.stateNode;
    if (a === null) return null;
    var u = a[Zl] || null;
    if (u === null) return null;
    a = u[t];
    l: switch (t) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        (u = !u.disabled) || (l = l.type, u = !(l === "button" || l === "input" || l === "select" || l === "textarea")), l = !u;
        break l;
      default:
        l = !1;
    }
    if (l) return null;
    if (a && typeof a != "function")
      throw Error(
        h(231, t, typeof a)
      );
    return a;
  }
  var Rt = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), ef = !1;
  if (Rt)
    try {
      var qu = {};
      Object.defineProperty(qu, "passive", {
        get: function() {
          ef = !0;
        }
      }), window.addEventListener("test", qu, qu), window.removeEventListener("test", qu, qu);
    } catch {
      ef = !1;
    }
  var Ft = null, nf = null, Ne = null;
  function Gc() {
    if (Ne) return Ne;
    var l, t = nf, a = t.length, u, e = "value" in Ft ? Ft.value : Ft.textContent, n = e.length;
    for (l = 0; l < a && t[l] === e[l]; l++) ;
    var f = a - l;
    for (u = 1; u <= f && t[a - u] === e[n - u]; u++) ;
    return Ne = e.slice(l, 1 < u ? 1 - u : void 0);
  }
  function Re(l) {
    var t = l.keyCode;
    return "charCode" in l ? (l = l.charCode, l === 0 && t === 13 && (l = 13)) : l = t, l === 10 && (l = 13), 32 <= l || l === 13 ? l : 0;
  }
  function qe() {
    return !0;
  }
  function jc() {
    return !1;
  }
  function xl(l) {
    function t(a, u, e, n, f) {
      this._reactName = a, this._targetInst = e, this.type = u, this.nativeEvent = n, this.target = f, this.currentTarget = null;
      for (var i in l)
        l.hasOwnProperty(i) && (a = l[i], this[i] = a ? a(n) : n[i]);
      return this.isDefaultPrevented = (n.defaultPrevented != null ? n.defaultPrevented : n.returnValue === !1) ? qe : jc, this.isPropagationStopped = jc, this;
    }
    return R(t.prototype, {
      preventDefault: function() {
        this.defaultPrevented = !0;
        var a = this.nativeEvent;
        a && (a.preventDefault ? a.preventDefault() : typeof a.returnValue != "unknown" && (a.returnValue = !1), this.isDefaultPrevented = qe);
      },
      stopPropagation: function() {
        var a = this.nativeEvent;
        a && (a.stopPropagation ? a.stopPropagation() : typeof a.cancelBubble != "unknown" && (a.cancelBubble = !0), this.isPropagationStopped = qe);
      },
      persist: function() {
      },
      isPersistent: qe
    }), t;
  }
  var _a = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function(l) {
      return l.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0
  }, Ce = xl(_a), Cu = R({}, _a, { view: 0, detail: 0 }), wd = xl(Cu), ff, cf, Bu, Be = R({}, Cu, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: yf,
    button: 0,
    buttons: 0,
    relatedTarget: function(l) {
      return l.relatedTarget === void 0 ? l.fromElement === l.srcElement ? l.toElement : l.fromElement : l.relatedTarget;
    },
    movementX: function(l) {
      return "movementX" in l ? l.movementX : (l !== Bu && (Bu && l.type === "mousemove" ? (ff = l.screenX - Bu.screenX, cf = l.screenY - Bu.screenY) : cf = ff = 0, Bu = l), ff);
    },
    movementY: function(l) {
      return "movementY" in l ? l.movementY : cf;
    }
  }), Xc = xl(Be), Wd = R({}, Be, { dataTransfer: 0 }), $d = xl(Wd), kd = R({}, Cu, { relatedTarget: 0 }), sf = xl(kd), Fd = R({}, _a, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), Id = xl(Fd), Pd = R({}, _a, {
    clipboardData: function(l) {
      return "clipboardData" in l ? l.clipboardData : window.clipboardData;
    }
  }), lv = xl(Pd), tv = R({}, _a, { data: 0 }), Qc = xl(tv), av = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified"
  }, uv = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta"
  }, ev = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
  };
  function nv(l) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(l) : (l = ev[l]) ? !!t[l] : !1;
  }
  function yf() {
    return nv;
  }
  var fv = R({}, Cu, {
    key: function(l) {
      if (l.key) {
        var t = av[l.key] || l.key;
        if (t !== "Unidentified") return t;
      }
      return l.type === "keypress" ? (l = Re(l), l === 13 ? "Enter" : String.fromCharCode(l)) : l.type === "keydown" || l.type === "keyup" ? uv[l.keyCode] || "Unidentified" : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: yf,
    charCode: function(l) {
      return l.type === "keypress" ? Re(l) : 0;
    },
    keyCode: function(l) {
      return l.type === "keydown" || l.type === "keyup" ? l.keyCode : 0;
    },
    which: function(l) {
      return l.type === "keypress" ? Re(l) : l.type === "keydown" || l.type === "keyup" ? l.keyCode : 0;
    }
  }), iv = xl(fv), cv = R({}, Be, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0
  }), Zc = xl(cv), sv = R({}, Cu, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: yf
  }), yv = xl(sv), dv = R({}, _a, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), vv = xl(dv), mv = R({}, Be, {
    deltaX: function(l) {
      return "deltaX" in l ? l.deltaX : "wheelDeltaX" in l ? -l.wheelDeltaX : 0;
    },
    deltaY: function(l) {
      return "deltaY" in l ? l.deltaY : "wheelDeltaY" in l ? -l.wheelDeltaY : "wheelDelta" in l ? -l.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), ov = xl(mv), hv = R({}, _a, {
    newState: 0,
    oldState: 0
  }), gv = xl(hv), Sv = [9, 13, 27, 32], df = Rt && "CompositionEvent" in window, Yu = null;
  Rt && "documentMode" in document && (Yu = document.documentMode);
  var rv = Rt && "TextEvent" in window && !Yu, xc = Rt && (!df || Yu && 8 < Yu && 11 >= Yu), Vc = " ", Lc = !1;
  function Kc(l, t) {
    switch (l) {
      case "keyup":
        return Sv.indexOf(t.keyCode) !== -1;
      case "keydown":
        return t.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function Jc(l) {
    return l = l.detail, typeof l == "object" && "data" in l ? l.data : null;
  }
  var ka = !1;
  function bv(l, t) {
    switch (l) {
      case "compositionend":
        return Jc(t);
      case "keypress":
        return t.which !== 32 ? null : (Lc = !0, Vc);
      case "textInput":
        return l = t.data, l === Vc && Lc ? null : l;
      default:
        return null;
    }
  }
  function zv(l, t) {
    if (ka)
      return l === "compositionend" || !df && Kc(l, t) ? (l = Gc(), Ne = nf = Ft = null, ka = !1, l) : null;
    switch (l) {
      case "paste":
        return null;
      case "keypress":
        if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
          if (t.char && 1 < t.char.length)
            return t.char;
          if (t.which) return String.fromCharCode(t.which);
        }
        return null;
      case "compositionend":
        return xc && t.locale !== "ko" ? null : t.data;
      default:
        return null;
    }
  }
  var Tv = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0
  };
  function wc(l) {
    var t = l && l.nodeName && l.nodeName.toLowerCase();
    return t === "input" ? !!Tv[l.type] : t === "textarea";
  }
  function Wc(l, t, a, u) {
    Wa ? $a ? $a.push(u) : $a = [u] : Wa = u, t = pn(t, "onChange"), 0 < t.length && (a = new Ce(
      "onChange",
      "change",
      null,
      a,
      u
    ), l.push({ event: a, listeners: t }));
  }
  var Gu = null, ju = null;
  function Ev(l) {
    Hy(l, 0);
  }
  function Ye(l) {
    var t = Nu(l);
    if (Uc(t)) return l;
  }
  function $c(l, t) {
    if (l === "change") return t;
  }
  var kc = !1;
  if (Rt) {
    var vf;
    if (Rt) {
      var mf = "oninput" in document;
      if (!mf) {
        var Fc = document.createElement("div");
        Fc.setAttribute("oninput", "return;"), mf = typeof Fc.oninput == "function";
      }
      vf = mf;
    } else vf = !1;
    kc = vf && (!document.documentMode || 9 < document.documentMode);
  }
  function Ic() {
    Gu && (Gu.detachEvent("onpropertychange", Pc), ju = Gu = null);
  }
  function Pc(l) {
    if (l.propertyName === "value" && Ye(ju)) {
      var t = [];
      Wc(
        t,
        ju,
        l,
        af(l)
      ), Yc(Ev, t);
    }
  }
  function Av(l, t, a) {
    l === "focusin" ? (Ic(), Gu = t, ju = a, Gu.attachEvent("onpropertychange", Pc)) : l === "focusout" && Ic();
  }
  function _v(l) {
    if (l === "selectionchange" || l === "keyup" || l === "keydown")
      return Ye(ju);
  }
  function pv(l, t) {
    if (l === "click") return Ye(t);
  }
  function Ov(l, t) {
    if (l === "input" || l === "change")
      return Ye(t);
  }
  function Mv(l, t) {
    return l === t && (l !== 0 || 1 / l === 1 / t) || l !== l && t !== t;
  }
  var Pl = typeof Object.is == "function" ? Object.is : Mv;
  function Xu(l, t) {
    if (Pl(l, t)) return !0;
    if (typeof l != "object" || l === null || typeof t != "object" || t === null)
      return !1;
    var a = Object.keys(l), u = Object.keys(t);
    if (a.length !== u.length) return !1;
    for (u = 0; u < a.length; u++) {
      var e = a[u];
      if (!Vn.call(t, e) || !Pl(l[e], t[e]))
        return !1;
    }
    return !0;
  }
  function l0(l) {
    for (; l && l.firstChild; ) l = l.firstChild;
    return l;
  }
  function t0(l, t) {
    var a = l0(l);
    l = 0;
    for (var u; a; ) {
      if (a.nodeType === 3) {
        if (u = l + a.textContent.length, l <= t && u >= t)
          return { node: a, offset: t - l };
        l = u;
      }
      l: {
        for (; a; ) {
          if (a.nextSibling) {
            a = a.nextSibling;
            break l;
          }
          a = a.parentNode;
        }
        a = void 0;
      }
      a = l0(a);
    }
  }
  function a0(l, t) {
    return l && t ? l === t ? !0 : l && l.nodeType === 3 ? !1 : t && t.nodeType === 3 ? a0(l, t.parentNode) : "contains" in l ? l.contains(t) : l.compareDocumentPosition ? !!(l.compareDocumentPosition(t) & 16) : !1 : !1;
  }
  function u0(l) {
    l = l != null && l.ownerDocument != null && l.ownerDocument.defaultView != null ? l.ownerDocument.defaultView : window;
    for (var t = Ue(l.document); t instanceof l.HTMLIFrameElement; ) {
      try {
        var a = typeof t.contentWindow.location.href == "string";
      } catch {
        a = !1;
      }
      if (a) l = t.contentWindow;
      else break;
      t = Ue(l.document);
    }
    return t;
  }
  function of(l) {
    var t = l && l.nodeName && l.nodeName.toLowerCase();
    return t && (t === "input" && (l.type === "text" || l.type === "search" || l.type === "tel" || l.type === "url" || l.type === "password") || t === "textarea" || l.contentEditable === "true");
  }
  var Dv = Rt && "documentMode" in document && 11 >= document.documentMode, Fa = null, hf = null, Qu = null, gf = !1;
  function e0(l, t, a) {
    var u = a.window === a ? a.document : a.nodeType === 9 ? a : a.ownerDocument;
    gf || Fa == null || Fa !== Ue(u) || (u = Fa, "selectionStart" in u && of(u) ? u = { start: u.selectionStart, end: u.selectionEnd } : (u = (u.ownerDocument && u.ownerDocument.defaultView || window).getSelection(), u = {
      anchorNode: u.anchorNode,
      anchorOffset: u.anchorOffset,
      focusNode: u.focusNode,
      focusOffset: u.focusOffset
    }), Qu && Xu(Qu, u) || (Qu = u, u = pn(hf, "onSelect"), 0 < u.length && (t = new Ce(
      "onSelect",
      "select",
      null,
      t,
      a
    ), l.push({ event: t, listeners: u }), t.target = Fa)));
  }
  function pa(l, t) {
    var a = {};
    return a[l.toLowerCase()] = t.toLowerCase(), a["Webkit" + l] = "webkit" + t, a["Moz" + l] = "moz" + t, a;
  }
  var Ia = {
    animationend: pa("Animation", "AnimationEnd"),
    animationiteration: pa("Animation", "AnimationIteration"),
    animationstart: pa("Animation", "AnimationStart"),
    transitionrun: pa("Transition", "TransitionRun"),
    transitionstart: pa("Transition", "TransitionStart"),
    transitioncancel: pa("Transition", "TransitionCancel"),
    transitionend: pa("Transition", "TransitionEnd")
  }, Sf = {}, n0 = {};
  Rt && (n0 = document.createElement("div").style, "AnimationEvent" in window || (delete Ia.animationend.animation, delete Ia.animationiteration.animation, delete Ia.animationstart.animation), "TransitionEvent" in window || delete Ia.transitionend.transition);
  function Oa(l) {
    if (Sf[l]) return Sf[l];
    if (!Ia[l]) return l;
    var t = Ia[l], a;
    for (a in t)
      if (t.hasOwnProperty(a) && a in n0)
        return Sf[l] = t[a];
    return l;
  }
  var f0 = Oa("animationend"), i0 = Oa("animationiteration"), c0 = Oa("animationstart"), Uv = Oa("transitionrun"), Hv = Oa("transitionstart"), Nv = Oa("transitioncancel"), s0 = Oa("transitionend"), y0 = /* @__PURE__ */ new Map(), rf = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
    " "
  );
  rf.push("scrollEnd");
  function rt(l, t) {
    y0.set(l, t), Aa(t, [l]);
  }
  var Ge = typeof reportError == "function" ? reportError : function(l) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var t = new window.ErrorEvent("error", {
        bubbles: !0,
        cancelable: !0,
        message: typeof l == "object" && l !== null && typeof l.message == "string" ? String(l.message) : String(l),
        error: l
      });
      if (!window.dispatchEvent(t)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", l);
      return;
    }
    console.error(l);
  }, st = [], Pa = 0, bf = 0;
  function je() {
    for (var l = Pa, t = bf = Pa = 0; t < l; ) {
      var a = st[t];
      st[t++] = null;
      var u = st[t];
      st[t++] = null;
      var e = st[t];
      st[t++] = null;
      var n = st[t];
      if (st[t++] = null, u !== null && e !== null) {
        var f = u.pending;
        f === null ? e.next = e : (e.next = f.next, f.next = e), u.pending = e;
      }
      n !== 0 && d0(a, e, n);
    }
  }
  function Xe(l, t, a, u) {
    st[Pa++] = l, st[Pa++] = t, st[Pa++] = a, st[Pa++] = u, bf |= u, l.lanes |= u, l = l.alternate, l !== null && (l.lanes |= u);
  }
  function zf(l, t, a, u) {
    return Xe(l, t, a, u), Qe(l);
  }
  function Ma(l, t) {
    return Xe(l, null, null, t), Qe(l);
  }
  function d0(l, t, a) {
    l.lanes |= a;
    var u = l.alternate;
    u !== null && (u.lanes |= a);
    for (var e = !1, n = l.return; n !== null; )
      n.childLanes |= a, u = n.alternate, u !== null && (u.childLanes |= a), n.tag === 22 && (l = n.stateNode, l === null || l._visibility & 1 || (e = !0)), l = n, n = n.return;
    return l.tag === 3 ? (n = l.stateNode, e && t !== null && (e = 31 - Il(a), l = n.hiddenUpdates, u = l[e], u === null ? l[e] = [t] : u.push(t), t.lane = a | 536870912), n) : null;
  }
  function Qe(l) {
    if (50 < ce)
      throw ce = 0, Ui = null, Error(h(185));
    for (var t = l.return; t !== null; )
      l = t, t = l.return;
    return l.tag === 3 ? l.stateNode : null;
  }
  var lu = {};
  function Rv(l, t, a, u) {
    this.tag = l, this.key = a, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = u, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function lt(l, t, a, u) {
    return new Rv(l, t, a, u);
  }
  function Tf(l) {
    return l = l.prototype, !(!l || !l.isReactComponent);
  }
  function qt(l, t) {
    var a = l.alternate;
    return a === null ? (a = lt(
      l.tag,
      t,
      l.key,
      l.mode
    ), a.elementType = l.elementType, a.type = l.type, a.stateNode = l.stateNode, a.alternate = l, l.alternate = a) : (a.pendingProps = t, a.type = l.type, a.flags = 0, a.subtreeFlags = 0, a.deletions = null), a.flags = l.flags & 65011712, a.childLanes = l.childLanes, a.lanes = l.lanes, a.child = l.child, a.memoizedProps = l.memoizedProps, a.memoizedState = l.memoizedState, a.updateQueue = l.updateQueue, t = l.dependencies, a.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, a.sibling = l.sibling, a.index = l.index, a.ref = l.ref, a.refCleanup = l.refCleanup, a;
  }
  function v0(l, t) {
    l.flags &= 65011714;
    var a = l.alternate;
    return a === null ? (l.childLanes = 0, l.lanes = t, l.child = null, l.subtreeFlags = 0, l.memoizedProps = null, l.memoizedState = null, l.updateQueue = null, l.dependencies = null, l.stateNode = null) : (l.childLanes = a.childLanes, l.lanes = a.lanes, l.child = a.child, l.subtreeFlags = 0, l.deletions = null, l.memoizedProps = a.memoizedProps, l.memoizedState = a.memoizedState, l.updateQueue = a.updateQueue, l.type = a.type, t = a.dependencies, l.dependencies = t === null ? null : {
      lanes: t.lanes,
      firstContext: t.firstContext
    }), l;
  }
  function Ze(l, t, a, u, e, n) {
    var f = 0;
    if (u = l, typeof l == "function") Tf(l) && (f = 1);
    else if (typeof l == "string")
      f = Gm(
        l,
        a,
        M.current
      ) ? 26 : l === "html" || l === "head" || l === "body" ? 27 : 5;
    else
      l: switch (l) {
        case Et:
          return l = lt(31, a, t, e), l.elementType = Et, l.lanes = n, l;
        case ql:
          return Da(a.children, e, n, t);
        case Dt:
          f = 8, e |= 24;
          break;
        case $l:
          return l = lt(12, a, t, e | 2), l.elementType = $l, l.lanes = n, l;
        case Tt:
          return l = lt(13, a, t, e), l.elementType = Tt, l.lanes = n, l;
        case jl:
          return l = lt(19, a, t, e), l.elementType = jl, l.lanes = n, l;
        default:
          if (typeof l == "object" && l !== null)
            switch (l.$$typeof) {
              case Hl:
                f = 10;
                break l;
              case Wt:
                f = 9;
                break l;
              case ft:
                f = 11;
                break l;
              case L:
                f = 14;
                break l;
              case Xl:
                f = 16, u = null;
                break l;
            }
          f = 29, a = Error(
            h(130, l === null ? "null" : typeof l, "")
          ), u = null;
      }
    return t = lt(f, a, t, e), t.elementType = l, t.type = u, t.lanes = n, t;
  }
  function Da(l, t, a, u) {
    return l = lt(7, l, u, t), l.lanes = a, l;
  }
  function Ef(l, t, a) {
    return l = lt(6, l, null, t), l.lanes = a, l;
  }
  function m0(l) {
    var t = lt(18, null, null, 0);
    return t.stateNode = l, t;
  }
  function Af(l, t, a) {
    return t = lt(
      4,
      l.children !== null ? l.children : [],
      l.key,
      t
    ), t.lanes = a, t.stateNode = {
      containerInfo: l.containerInfo,
      pendingChildren: null,
      implementation: l.implementation
    }, t;
  }
  var o0 = /* @__PURE__ */ new WeakMap();
  function yt(l, t) {
    if (typeof l == "object" && l !== null) {
      var a = o0.get(l);
      return a !== void 0 ? a : (t = {
        value: l,
        source: t,
        stack: mc(t)
      }, o0.set(l, t), t);
    }
    return {
      value: l,
      source: t,
      stack: mc(t)
    };
  }
  var tu = [], au = 0, xe = null, Zu = 0, dt = [], vt = 0, It = null, _t = 1, pt = "";
  function Ct(l, t) {
    tu[au++] = Zu, tu[au++] = xe, xe = l, Zu = t;
  }
  function h0(l, t, a) {
    dt[vt++] = _t, dt[vt++] = pt, dt[vt++] = It, It = l;
    var u = _t;
    l = pt;
    var e = 32 - Il(u) - 1;
    u &= ~(1 << e), a += 1;
    var n = 32 - Il(t) + e;
    if (30 < n) {
      var f = e - e % 5;
      n = (u & (1 << f) - 1).toString(32), u >>= f, e -= f, _t = 1 << 32 - Il(t) + e | a << e | u, pt = n + l;
    } else
      _t = 1 << n | a << e | u, pt = l;
  }
  function _f(l) {
    l.return !== null && (Ct(l, 1), h0(l, 1, 0));
  }
  function pf(l) {
    for (; l === xe; )
      xe = tu[--au], tu[au] = null, Zu = tu[--au], tu[au] = null;
    for (; l === It; )
      It = dt[--vt], dt[vt] = null, pt = dt[--vt], dt[vt] = null, _t = dt[--vt], dt[vt] = null;
  }
  function g0(l, t) {
    dt[vt++] = _t, dt[vt++] = pt, dt[vt++] = It, _t = t.id, pt = t.overflow, It = l;
  }
  var Ol = null, fl = null, K = !1, Pt = null, mt = !1, Of = Error(h(519));
  function la(l) {
    var t = Error(
      h(
        418,
        1 < arguments.length && arguments[1] !== void 0 && arguments[1] ? "text" : "HTML",
        ""
      )
    );
    throw xu(yt(t, l)), Of;
  }
  function S0(l) {
    var t = l.stateNode, a = l.type, u = l.memoizedProps;
    switch (t[pl] = l, t[Zl] = u, a) {
      case "dialog":
        Q("cancel", t), Q("close", t);
        break;
      case "iframe":
      case "object":
      case "embed":
        Q("load", t);
        break;
      case "video":
      case "audio":
        for (a = 0; a < ye.length; a++)
          Q(ye[a], t);
        break;
      case "source":
        Q("error", t);
        break;
      case "img":
      case "image":
      case "link":
        Q("error", t), Q("load", t);
        break;
      case "details":
        Q("toggle", t);
        break;
      case "input":
        Q("invalid", t), Hc(
          t,
          u.value,
          u.defaultValue,
          u.checked,
          u.defaultChecked,
          u.type,
          u.name,
          !0
        );
        break;
      case "select":
        Q("invalid", t);
        break;
      case "textarea":
        Q("invalid", t), Rc(t, u.value, u.defaultValue, u.children);
    }
    a = u.children, typeof a != "string" && typeof a != "number" && typeof a != "bigint" || t.textContent === "" + a || u.suppressHydrationWarning === !0 || Cy(t.textContent, a) ? (u.popover != null && (Q("beforetoggle", t), Q("toggle", t)), u.onScroll != null && Q("scroll", t), u.onScrollEnd != null && Q("scrollend", t), u.onClick != null && (t.onclick = Nt), t = !0) : t = !1, t || la(l, !0);
  }
  function r0(l) {
    for (Ol = l.return; Ol; )
      switch (Ol.tag) {
        case 5:
        case 31:
        case 13:
          mt = !1;
          return;
        case 27:
        case 3:
          mt = !0;
          return;
        default:
          Ol = Ol.return;
      }
  }
  function uu(l) {
    if (l !== Ol) return !1;
    if (!K) return r0(l), K = !0, !1;
    var t = l.tag, a;
    if ((a = t !== 3 && t !== 27) && ((a = t === 5) && (a = l.type, a = !(a !== "form" && a !== "button") || Li(l.type, l.memoizedProps)), a = !a), a && fl && la(l), r0(l), t === 13) {
      if (l = l.memoizedState, l = l !== null ? l.dehydrated : null, !l) throw Error(h(317));
      fl = Vy(l);
    } else if (t === 31) {
      if (l = l.memoizedState, l = l !== null ? l.dehydrated : null, !l) throw Error(h(317));
      fl = Vy(l);
    } else
      t === 27 ? (t = fl, oa(l.type) ? (l = $i, $i = null, fl = l) : fl = t) : fl = Ol ? ht(l.stateNode.nextSibling) : null;
    return !0;
  }
  function Ua() {
    fl = Ol = null, K = !1;
  }
  function Mf() {
    var l = Pt;
    return l !== null && (Jl === null ? Jl = l : Jl.push.apply(
      Jl,
      l
    ), Pt = null), l;
  }
  function xu(l) {
    Pt === null ? Pt = [l] : Pt.push(l);
  }
  var Df = y(null), Ha = null, Bt = null;
  function ta(l, t, a) {
    p(Df, t._currentValue), t._currentValue = a;
  }
  function Yt(l) {
    l._currentValue = Df.current, T(Df);
  }
  function Uf(l, t, a) {
    for (; l !== null; ) {
      var u = l.alternate;
      if ((l.childLanes & t) !== t ? (l.childLanes |= t, u !== null && (u.childLanes |= t)) : u !== null && (u.childLanes & t) !== t && (u.childLanes |= t), l === a) break;
      l = l.return;
    }
  }
  function Hf(l, t, a, u) {
    var e = l.child;
    for (e !== null && (e.return = l); e !== null; ) {
      var n = e.dependencies;
      if (n !== null) {
        var f = e.child;
        n = n.firstContext;
        l: for (; n !== null; ) {
          var i = n;
          n = e;
          for (var c = 0; c < t.length; c++)
            if (i.context === t[c]) {
              n.lanes |= a, i = n.alternate, i !== null && (i.lanes |= a), Uf(
                n.return,
                a,
                l
              ), u || (f = null);
              break l;
            }
          n = i.next;
        }
      } else if (e.tag === 18) {
        if (f = e.return, f === null) throw Error(h(341));
        f.lanes |= a, n = f.alternate, n !== null && (n.lanes |= a), Uf(f, a, l), f = null;
      } else f = e.child;
      if (f !== null) f.return = e;
      else
        for (f = e; f !== null; ) {
          if (f === l) {
            f = null;
            break;
          }
          if (e = f.sibling, e !== null) {
            e.return = f.return, f = e;
            break;
          }
          f = f.return;
        }
      e = f;
    }
  }
  function eu(l, t, a, u) {
    l = null;
    for (var e = t, n = !1; e !== null; ) {
      if (!n) {
        if ((e.flags & 524288) !== 0) n = !0;
        else if ((e.flags & 262144) !== 0) break;
      }
      if (e.tag === 10) {
        var f = e.alternate;
        if (f === null) throw Error(h(387));
        if (f = f.memoizedProps, f !== null) {
          var i = e.type;
          Pl(e.pendingProps.value, f.value) || (l !== null ? l.push(i) : l = [i]);
        }
      } else if (e === k.current) {
        if (f = e.alternate, f === null) throw Error(h(387));
        f.memoizedState.memoizedState !== e.memoizedState.memoizedState && (l !== null ? l.push(he) : l = [he]);
      }
      e = e.return;
    }
    l !== null && Hf(
      t,
      l,
      a,
      u
    ), t.flags |= 262144;
  }
  function Ve(l) {
    for (l = l.firstContext; l !== null; ) {
      if (!Pl(
        l.context._currentValue,
        l.memoizedValue
      ))
        return !0;
      l = l.next;
    }
    return !1;
  }
  function Na(l) {
    Ha = l, Bt = null, l = l.dependencies, l !== null && (l.firstContext = null);
  }
  function Ml(l) {
    return b0(Ha, l);
  }
  function Le(l, t) {
    return Ha === null && Na(l), b0(l, t);
  }
  function b0(l, t) {
    var a = t._currentValue;
    if (t = { context: t, memoizedValue: a, next: null }, Bt === null) {
      if (l === null) throw Error(h(308));
      Bt = t, l.dependencies = { lanes: 0, firstContext: t }, l.flags |= 524288;
    } else Bt = Bt.next = t;
    return a;
  }
  var qv = typeof AbortController < "u" ? AbortController : function() {
    var l = [], t = this.signal = {
      aborted: !1,
      addEventListener: function(a, u) {
        l.push(u);
      }
    };
    this.abort = function() {
      t.aborted = !0, l.forEach(function(a) {
        return a();
      });
    };
  }, Cv = A.unstable_scheduleCallback, Bv = A.unstable_NormalPriority, gl = {
    $$typeof: Hl,
    Consumer: null,
    Provider: null,
    _currentValue: null,
    _currentValue2: null,
    _threadCount: 0
  };
  function Nf() {
    return {
      controller: new qv(),
      data: /* @__PURE__ */ new Map(),
      refCount: 0
    };
  }
  function Vu(l) {
    l.refCount--, l.refCount === 0 && Cv(Bv, function() {
      l.controller.abort();
    });
  }
  var Lu = null, Rf = 0, nu = 0, fu = null;
  function Yv(l, t) {
    if (Lu === null) {
      var a = Lu = [];
      Rf = 0, nu = Bi(), fu = {
        status: "pending",
        value: void 0,
        then: function(u) {
          a.push(u);
        }
      };
    }
    return Rf++, t.then(z0, z0), t;
  }
  function z0() {
    if (--Rf === 0 && Lu !== null) {
      fu !== null && (fu.status = "fulfilled");
      var l = Lu;
      Lu = null, nu = 0, fu = null;
      for (var t = 0; t < l.length; t++) (0, l[t])();
    }
  }
  function Gv(l, t) {
    var a = [], u = {
      status: "pending",
      value: null,
      reason: null,
      then: function(e) {
        a.push(e);
      }
    };
    return l.then(
      function() {
        u.status = "fulfilled", u.value = t;
        for (var e = 0; e < a.length; e++) (0, a[e])(t);
      },
      function(e) {
        for (u.status = "rejected", u.reason = e, e = 0; e < a.length; e++)
          (0, a[e])(void 0);
      }
    ), u;
  }
  var T0 = r.S;
  r.S = function(l, t) {
    ey = kl(), typeof t == "object" && t !== null && typeof t.then == "function" && Yv(l, t), T0 !== null && T0(l, t);
  };
  var Ra = y(null);
  function qf() {
    var l = Ra.current;
    return l !== null ? l : nl.pooledCache;
  }
  function Ke(l, t) {
    t === null ? p(Ra, Ra.current) : p(Ra, t.pool);
  }
  function E0() {
    var l = qf();
    return l === null ? null : { parent: gl._currentValue, pool: l };
  }
  var iu = Error(h(460)), Cf = Error(h(474)), Je = Error(h(542)), we = { then: function() {
  } };
  function A0(l) {
    return l = l.status, l === "fulfilled" || l === "rejected";
  }
  function _0(l, t, a) {
    switch (a = l[a], a === void 0 ? l.push(t) : a !== t && (t.then(Nt, Nt), t = a), t.status) {
      case "fulfilled":
        return t.value;
      case "rejected":
        throw l = t.reason, O0(l), l;
      default:
        if (typeof t.status == "string") t.then(Nt, Nt);
        else {
          if (l = nl, l !== null && 100 < l.shellSuspendCounter)
            throw Error(h(482));
          l = t, l.status = "pending", l.then(
            function(u) {
              if (t.status === "pending") {
                var e = t;
                e.status = "fulfilled", e.value = u;
              }
            },
            function(u) {
              if (t.status === "pending") {
                var e = t;
                e.status = "rejected", e.reason = u;
              }
            }
          );
        }
        switch (t.status) {
          case "fulfilled":
            return t.value;
          case "rejected":
            throw l = t.reason, O0(l), l;
        }
        throw Ca = t, iu;
    }
  }
  function qa(l) {
    try {
      var t = l._init;
      return t(l._payload);
    } catch (a) {
      throw a !== null && typeof a == "object" && typeof a.then == "function" ? (Ca = a, iu) : a;
    }
  }
  var Ca = null;
  function p0() {
    if (Ca === null) throw Error(h(459));
    var l = Ca;
    return Ca = null, l;
  }
  function O0(l) {
    if (l === iu || l === Je)
      throw Error(h(483));
  }
  var cu = null, Ku = 0;
  function We(l) {
    var t = Ku;
    return Ku += 1, cu === null && (cu = []), _0(cu, l, t);
  }
  function Ju(l, t) {
    t = t.props.ref, l.ref = t !== void 0 ? t : null;
  }
  function $e(l, t) {
    throw t.$$typeof === sl ? Error(h(525)) : (l = Object.prototype.toString.call(t), Error(
      h(
        31,
        l === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : l
      )
    ));
  }
  function M0(l) {
    function t(d, s) {
      if (l) {
        var v = d.deletions;
        v === null ? (d.deletions = [s], d.flags |= 16) : v.push(s);
      }
    }
    function a(d, s) {
      if (!l) return null;
      for (; s !== null; )
        t(d, s), s = s.sibling;
      return null;
    }
    function u(d) {
      for (var s = /* @__PURE__ */ new Map(); d !== null; )
        d.key !== null ? s.set(d.key, d) : s.set(d.index, d), d = d.sibling;
      return s;
    }
    function e(d, s) {
      return d = qt(d, s), d.index = 0, d.sibling = null, d;
    }
    function n(d, s, v) {
      return d.index = v, l ? (v = d.alternate, v !== null ? (v = v.index, v < s ? (d.flags |= 67108866, s) : v) : (d.flags |= 67108866, s)) : (d.flags |= 1048576, s);
    }
    function f(d) {
      return l && d.alternate === null && (d.flags |= 67108866), d;
    }
    function i(d, s, v, b) {
      return s === null || s.tag !== 6 ? (s = Ef(v, d.mode, b), s.return = d, s) : (s = e(s, v), s.return = d, s);
    }
    function c(d, s, v, b) {
      var U = v.type;
      return U === ql ? S(
        d,
        s,
        v.props.children,
        b,
        v.key
      ) : s !== null && (s.elementType === U || typeof U == "object" && U !== null && U.$$typeof === Xl && qa(U) === s.type) ? (s = e(s, v.props), Ju(s, v), s.return = d, s) : (s = Ze(
        v.type,
        v.key,
        v.props,
        null,
        d.mode,
        b
      ), Ju(s, v), s.return = d, s);
    }
    function m(d, s, v, b) {
      return s === null || s.tag !== 4 || s.stateNode.containerInfo !== v.containerInfo || s.stateNode.implementation !== v.implementation ? (s = Af(v, d.mode, b), s.return = d, s) : (s = e(s, v.children || []), s.return = d, s);
    }
    function S(d, s, v, b, U) {
      return s === null || s.tag !== 7 ? (s = Da(
        v,
        d.mode,
        b,
        U
      ), s.return = d, s) : (s = e(s, v), s.return = d, s);
    }
    function z(d, s, v) {
      if (typeof s == "string" && s !== "" || typeof s == "number" || typeof s == "bigint")
        return s = Ef(
          "" + s,
          d.mode,
          v
        ), s.return = d, s;
      if (typeof s == "object" && s !== null) {
        switch (s.$$typeof) {
          case Wl:
            return v = Ze(
              s.type,
              s.key,
              s.props,
              null,
              d.mode,
              v
            ), Ju(v, s), v.return = d, v;
          case Gl:
            return s = Af(
              s,
              d.mode,
              v
            ), s.return = d, s;
          case Xl:
            return s = qa(s), z(d, s, v);
        }
        if (St(s) || Ql(s))
          return s = Da(
            s,
            d.mode,
            v,
            null
          ), s.return = d, s;
        if (typeof s.then == "function")
          return z(d, We(s), v);
        if (s.$$typeof === Hl)
          return z(
            d,
            Le(d, s),
            v
          );
        $e(d, s);
      }
      return null;
    }
    function o(d, s, v, b) {
      var U = s !== null ? s.key : null;
      if (typeof v == "string" && v !== "" || typeof v == "number" || typeof v == "bigint")
        return U !== null ? null : i(d, s, "" + v, b);
      if (typeof v == "object" && v !== null) {
        switch (v.$$typeof) {
          case Wl:
            return v.key === U ? c(d, s, v, b) : null;
          case Gl:
            return v.key === U ? m(d, s, v, b) : null;
          case Xl:
            return v = qa(v), o(d, s, v, b);
        }
        if (St(v) || Ql(v))
          return U !== null ? null : S(d, s, v, b, null);
        if (typeof v.then == "function")
          return o(
            d,
            s,
            We(v),
            b
          );
        if (v.$$typeof === Hl)
          return o(
            d,
            s,
            Le(d, v),
            b
          );
        $e(d, v);
      }
      return null;
    }
    function g(d, s, v, b, U) {
      if (typeof b == "string" && b !== "" || typeof b == "number" || typeof b == "bigint")
        return d = d.get(v) || null, i(s, d, "" + b, U);
      if (typeof b == "object" && b !== null) {
        switch (b.$$typeof) {
          case Wl:
            return d = d.get(
              b.key === null ? v : b.key
            ) || null, c(s, d, b, U);
          case Gl:
            return d = d.get(
              b.key === null ? v : b.key
            ) || null, m(s, d, b, U);
          case Xl:
            return b = qa(b), g(
              d,
              s,
              v,
              b,
              U
            );
        }
        if (St(b) || Ql(b))
          return d = d.get(v) || null, S(s, d, b, U, null);
        if (typeof b.then == "function")
          return g(
            d,
            s,
            v,
            We(b),
            U
          );
        if (b.$$typeof === Hl)
          return g(
            d,
            s,
            v,
            Le(s, b),
            U
          );
        $e(s, b);
      }
      return null;
    }
    function O(d, s, v, b) {
      for (var U = null, J = null, D = s, G = s = 0, x = null; D !== null && G < v.length; G++) {
        D.index > G ? (x = D, D = null) : x = D.sibling;
        var w = o(
          d,
          D,
          v[G],
          b
        );
        if (w === null) {
          D === null && (D = x);
          break;
        }
        l && D && w.alternate === null && t(d, D), s = n(w, s, G), J === null ? U = w : J.sibling = w, J = w, D = x;
      }
      if (G === v.length)
        return a(d, D), K && Ct(d, G), U;
      if (D === null) {
        for (; G < v.length; G++)
          D = z(d, v[G], b), D !== null && (s = n(
            D,
            s,
            G
          ), J === null ? U = D : J.sibling = D, J = D);
        return K && Ct(d, G), U;
      }
      for (D = u(D); G < v.length; G++)
        x = g(
          D,
          d,
          G,
          v[G],
          b
        ), x !== null && (l && x.alternate !== null && D.delete(
          x.key === null ? G : x.key
        ), s = n(
          x,
          s,
          G
        ), J === null ? U = x : J.sibling = x, J = x);
      return l && D.forEach(function(ba) {
        return t(d, ba);
      }), K && Ct(d, G), U;
    }
    function N(d, s, v, b) {
      if (v == null) throw Error(h(151));
      for (var U = null, J = null, D = s, G = s = 0, x = null, w = v.next(); D !== null && !w.done; G++, w = v.next()) {
        D.index > G ? (x = D, D = null) : x = D.sibling;
        var ba = o(d, D, w.value, b);
        if (ba === null) {
          D === null && (D = x);
          break;
        }
        l && D && ba.alternate === null && t(d, D), s = n(ba, s, G), J === null ? U = ba : J.sibling = ba, J = ba, D = x;
      }
      if (w.done)
        return a(d, D), K && Ct(d, G), U;
      if (D === null) {
        for (; !w.done; G++, w = v.next())
          w = z(d, w.value, b), w !== null && (s = n(w, s, G), J === null ? U = w : J.sibling = w, J = w);
        return K && Ct(d, G), U;
      }
      for (D = u(D); !w.done; G++, w = v.next())
        w = g(D, d, G, w.value, b), w !== null && (l && w.alternate !== null && D.delete(w.key === null ? G : w.key), s = n(w, s, G), J === null ? U = w : J.sibling = w, J = w);
      return l && D.forEach(function(Wm) {
        return t(d, Wm);
      }), K && Ct(d, G), U;
    }
    function al(d, s, v, b) {
      if (typeof v == "object" && v !== null && v.type === ql && v.key === null && (v = v.props.children), typeof v == "object" && v !== null) {
        switch (v.$$typeof) {
          case Wl:
            l: {
              for (var U = v.key; s !== null; ) {
                if (s.key === U) {
                  if (U = v.type, U === ql) {
                    if (s.tag === 7) {
                      a(
                        d,
                        s.sibling
                      ), b = e(
                        s,
                        v.props.children
                      ), b.return = d, d = b;
                      break l;
                    }
                  } else if (s.elementType === U || typeof U == "object" && U !== null && U.$$typeof === Xl && qa(U) === s.type) {
                    a(
                      d,
                      s.sibling
                    ), b = e(s, v.props), Ju(b, v), b.return = d, d = b;
                    break l;
                  }
                  a(d, s);
                  break;
                } else t(d, s);
                s = s.sibling;
              }
              v.type === ql ? (b = Da(
                v.props.children,
                d.mode,
                b,
                v.key
              ), b.return = d, d = b) : (b = Ze(
                v.type,
                v.key,
                v.props,
                null,
                d.mode,
                b
              ), Ju(b, v), b.return = d, d = b);
            }
            return f(d);
          case Gl:
            l: {
              for (U = v.key; s !== null; ) {
                if (s.key === U)
                  if (s.tag === 4 && s.stateNode.containerInfo === v.containerInfo && s.stateNode.implementation === v.implementation) {
                    a(
                      d,
                      s.sibling
                    ), b = e(s, v.children || []), b.return = d, d = b;
                    break l;
                  } else {
                    a(d, s);
                    break;
                  }
                else t(d, s);
                s = s.sibling;
              }
              b = Af(v, d.mode, b), b.return = d, d = b;
            }
            return f(d);
          case Xl:
            return v = qa(v), al(
              d,
              s,
              v,
              b
            );
        }
        if (St(v))
          return O(
            d,
            s,
            v,
            b
          );
        if (Ql(v)) {
          if (U = Ql(v), typeof U != "function") throw Error(h(150));
          return v = U.call(v), N(
            d,
            s,
            v,
            b
          );
        }
        if (typeof v.then == "function")
          return al(
            d,
            s,
            We(v),
            b
          );
        if (v.$$typeof === Hl)
          return al(
            d,
            s,
            Le(d, v),
            b
          );
        $e(d, v);
      }
      return typeof v == "string" && v !== "" || typeof v == "number" || typeof v == "bigint" ? (v = "" + v, s !== null && s.tag === 6 ? (a(d, s.sibling), b = e(s, v), b.return = d, d = b) : (a(d, s), b = Ef(v, d.mode, b), b.return = d, d = b), f(d)) : a(d, s);
    }
    return function(d, s, v, b) {
      try {
        Ku = 0;
        var U = al(
          d,
          s,
          v,
          b
        );
        return cu = null, U;
      } catch (D) {
        if (D === iu || D === Je) throw D;
        var J = lt(29, D, null, d.mode);
        return J.lanes = b, J.return = d, J;
      } finally {
      }
    };
  }
  var Ba = M0(!0), D0 = M0(!1), aa = !1;
  function Bf(l) {
    l.updateQueue = {
      baseState: l.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null
    };
  }
  function Yf(l, t) {
    l = l.updateQueue, t.updateQueue === l && (t.updateQueue = {
      baseState: l.baseState,
      firstBaseUpdate: l.firstBaseUpdate,
      lastBaseUpdate: l.lastBaseUpdate,
      shared: l.shared,
      callbacks: null
    });
  }
  function ua(l) {
    return { lane: l, tag: 0, payload: null, callback: null, next: null };
  }
  function ea(l, t, a) {
    var u = l.updateQueue;
    if (u === null) return null;
    if (u = u.shared, (W & 2) !== 0) {
      var e = u.pending;
      return e === null ? t.next = t : (t.next = e.next, e.next = t), u.pending = t, t = Qe(l), d0(l, null, a), t;
    }
    return Xe(l, u, t, a), Qe(l);
  }
  function wu(l, t, a) {
    if (t = t.updateQueue, t !== null && (t = t.shared, (a & 4194048) !== 0)) {
      var u = t.lanes;
      u &= l.pendingLanes, a |= u, t.lanes = a, bc(l, a);
    }
  }
  function Gf(l, t) {
    var a = l.updateQueue, u = l.alternate;
    if (u !== null && (u = u.updateQueue, a === u)) {
      var e = null, n = null;
      if (a = a.firstBaseUpdate, a !== null) {
        do {
          var f = {
            lane: a.lane,
            tag: a.tag,
            payload: a.payload,
            callback: null,
            next: null
          };
          n === null ? e = n = f : n = n.next = f, a = a.next;
        } while (a !== null);
        n === null ? e = n = t : n = n.next = t;
      } else e = n = t;
      a = {
        baseState: u.baseState,
        firstBaseUpdate: e,
        lastBaseUpdate: n,
        shared: u.shared,
        callbacks: u.callbacks
      }, l.updateQueue = a;
      return;
    }
    l = a.lastBaseUpdate, l === null ? a.firstBaseUpdate = t : l.next = t, a.lastBaseUpdate = t;
  }
  var jf = !1;
  function Wu() {
    if (jf) {
      var l = fu;
      if (l !== null) throw l;
    }
  }
  function $u(l, t, a, u) {
    jf = !1;
    var e = l.updateQueue;
    aa = !1;
    var n = e.firstBaseUpdate, f = e.lastBaseUpdate, i = e.shared.pending;
    if (i !== null) {
      e.shared.pending = null;
      var c = i, m = c.next;
      c.next = null, f === null ? n = m : f.next = m, f = c;
      var S = l.alternate;
      S !== null && (S = S.updateQueue, i = S.lastBaseUpdate, i !== f && (i === null ? S.firstBaseUpdate = m : i.next = m, S.lastBaseUpdate = c));
    }
    if (n !== null) {
      var z = e.baseState;
      f = 0, S = m = c = null, i = n;
      do {
        var o = i.lane & -536870913, g = o !== i.lane;
        if (g ? (Z & o) === o : (u & o) === o) {
          o !== 0 && o === nu && (jf = !0), S !== null && (S = S.next = {
            lane: 0,
            tag: i.tag,
            payload: i.payload,
            callback: null,
            next: null
          });
          l: {
            var O = l, N = i;
            o = t;
            var al = a;
            switch (N.tag) {
              case 1:
                if (O = N.payload, typeof O == "function") {
                  z = O.call(al, z, o);
                  break l;
                }
                z = O;
                break l;
              case 3:
                O.flags = O.flags & -65537 | 128;
              case 0:
                if (O = N.payload, o = typeof O == "function" ? O.call(al, z, o) : O, o == null) break l;
                z = R({}, z, o);
                break l;
              case 2:
                aa = !0;
            }
          }
          o = i.callback, o !== null && (l.flags |= 64, g && (l.flags |= 8192), g = e.callbacks, g === null ? e.callbacks = [o] : g.push(o));
        } else
          g = {
            lane: o,
            tag: i.tag,
            payload: i.payload,
            callback: i.callback,
            next: null
          }, S === null ? (m = S = g, c = z) : S = S.next = g, f |= o;
        if (i = i.next, i === null) {
          if (i = e.shared.pending, i === null)
            break;
          g = i, i = g.next, g.next = null, e.lastBaseUpdate = g, e.shared.pending = null;
        }
      } while (!0);
      S === null && (c = z), e.baseState = c, e.firstBaseUpdate = m, e.lastBaseUpdate = S, n === null && (e.shared.lanes = 0), sa |= f, l.lanes = f, l.memoizedState = z;
    }
  }
  function U0(l, t) {
    if (typeof l != "function")
      throw Error(h(191, l));
    l.call(t);
  }
  function H0(l, t) {
    var a = l.callbacks;
    if (a !== null)
      for (l.callbacks = null, l = 0; l < a.length; l++)
        U0(a[l], t);
  }
  var su = y(null), ke = y(0);
  function N0(l, t) {
    l = Kt, p(ke, l), p(su, t), Kt = l | t.baseLanes;
  }
  function Xf() {
    p(ke, Kt), p(su, su.current);
  }
  function Qf() {
    Kt = ke.current, T(su), T(ke);
  }
  var tt = y(null), ot = null;
  function na(l) {
    var t = l.alternate;
    p(ol, ol.current & 1), p(tt, l), ot === null && (t === null || su.current !== null || t.memoizedState !== null) && (ot = l);
  }
  function Zf(l) {
    p(ol, ol.current), p(tt, l), ot === null && (ot = l);
  }
  function R0(l) {
    l.tag === 22 ? (p(ol, ol.current), p(tt, l), ot === null && (ot = l)) : fa();
  }
  function fa() {
    p(ol, ol.current), p(tt, tt.current);
  }
  function at(l) {
    T(tt), ot === l && (ot = null), T(ol);
  }
  var ol = y(0);
  function Fe(l) {
    for (var t = l; t !== null; ) {
      if (t.tag === 13) {
        var a = t.memoizedState;
        if (a !== null && (a = a.dehydrated, a === null || wi(a) || Wi(a)))
          return t;
      } else if (t.tag === 19 && (t.memoizedProps.revealOrder === "forwards" || t.memoizedProps.revealOrder === "backwards" || t.memoizedProps.revealOrder === "unstable_legacy-backwards" || t.memoizedProps.revealOrder === "together")) {
        if ((t.flags & 128) !== 0) return t;
      } else if (t.child !== null) {
        t.child.return = t, t = t.child;
        continue;
      }
      if (t === l) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === l) return null;
        t = t.return;
      }
      t.sibling.return = t.return, t = t.sibling;
    }
    return null;
  }
  var Gt = 0, Y = null, ll = null, Sl = null, Ie = !1, yu = !1, Ya = !1, Pe = 0, ku = 0, du = null, jv = 0;
  function dl() {
    throw Error(h(321));
  }
  function xf(l, t) {
    if (t === null) return !1;
    for (var a = 0; a < t.length && a < l.length; a++)
      if (!Pl(l[a], t[a])) return !1;
    return !0;
  }
  function Vf(l, t, a, u, e, n) {
    return Gt = n, Y = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, r.H = l === null || l.memoizedState === null ? hs : ei, Ya = !1, n = a(u, e), Ya = !1, yu && (n = C0(
      t,
      a,
      u,
      e
    )), q0(l), n;
  }
  function q0(l) {
    r.H = Pu;
    var t = ll !== null && ll.next !== null;
    if (Gt = 0, Sl = ll = Y = null, Ie = !1, ku = 0, du = null, t) throw Error(h(300));
    l === null || rl || (l = l.dependencies, l !== null && Ve(l) && (rl = !0));
  }
  function C0(l, t, a, u) {
    Y = l;
    var e = 0;
    do {
      if (yu && (du = null), ku = 0, yu = !1, 25 <= e) throw Error(h(301));
      if (e += 1, Sl = ll = null, l.updateQueue != null) {
        var n = l.updateQueue;
        n.lastEffect = null, n.events = null, n.stores = null, n.memoCache != null && (n.memoCache.index = 0);
      }
      r.H = gs, n = t(a, u);
    } while (yu);
    return n;
  }
  function Xv() {
    var l = r.H, t = l.useState()[0];
    return t = typeof t.then == "function" ? Fu(t) : t, l = l.useState()[0], (ll !== null ? ll.memoizedState : null) !== l && (Y.flags |= 1024), t;
  }
  function Lf() {
    var l = Pe !== 0;
    return Pe = 0, l;
  }
  function Kf(l, t, a) {
    t.updateQueue = l.updateQueue, t.flags &= -2053, l.lanes &= ~a;
  }
  function Jf(l) {
    if (Ie) {
      for (l = l.memoizedState; l !== null; ) {
        var t = l.queue;
        t !== null && (t.pending = null), l = l.next;
      }
      Ie = !1;
    }
    Gt = 0, Sl = ll = Y = null, yu = !1, ku = Pe = 0, du = null;
  }
  function Bl() {
    var l = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null
    };
    return Sl === null ? Y.memoizedState = Sl = l : Sl = Sl.next = l, Sl;
  }
  function hl() {
    if (ll === null) {
      var l = Y.alternate;
      l = l !== null ? l.memoizedState : null;
    } else l = ll.next;
    var t = Sl === null ? Y.memoizedState : Sl.next;
    if (t !== null)
      Sl = t, ll = l;
    else {
      if (l === null)
        throw Y.alternate === null ? Error(h(467)) : Error(h(310));
      ll = l, l = {
        memoizedState: ll.memoizedState,
        baseState: ll.baseState,
        baseQueue: ll.baseQueue,
        queue: ll.queue,
        next: null
      }, Sl === null ? Y.memoizedState = Sl = l : Sl = Sl.next = l;
    }
    return Sl;
  }
  function ln() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function Fu(l) {
    var t = ku;
    return ku += 1, du === null && (du = []), l = _0(du, l, t), t = Y, (Sl === null ? t.memoizedState : Sl.next) === null && (t = t.alternate, r.H = t === null || t.memoizedState === null ? hs : ei), l;
  }
  function tn(l) {
    if (l !== null && typeof l == "object") {
      if (typeof l.then == "function") return Fu(l);
      if (l.$$typeof === Hl) return Ml(l);
    }
    throw Error(h(438, String(l)));
  }
  function wf(l) {
    var t = null, a = Y.updateQueue;
    if (a !== null && (t = a.memoCache), t == null) {
      var u = Y.alternate;
      u !== null && (u = u.updateQueue, u !== null && (u = u.memoCache, u != null && (t = {
        data: u.data.map(function(e) {
          return e.slice();
        }),
        index: 0
      })));
    }
    if (t == null && (t = { data: [], index: 0 }), a === null && (a = ln(), Y.updateQueue = a), a.memoCache = t, a = t.data[t.index], a === void 0)
      for (a = t.data[t.index] = Array(l), u = 0; u < l; u++)
        a[u] = Qa;
    return t.index++, a;
  }
  function jt(l, t) {
    return typeof t == "function" ? t(l) : t;
  }
  function an(l) {
    var t = hl();
    return Wf(t, ll, l);
  }
  function Wf(l, t, a) {
    var u = l.queue;
    if (u === null) throw Error(h(311));
    u.lastRenderedReducer = a;
    var e = l.baseQueue, n = u.pending;
    if (n !== null) {
      if (e !== null) {
        var f = e.next;
        e.next = n.next, n.next = f;
      }
      t.baseQueue = e = n, u.pending = null;
    }
    if (n = l.baseState, e === null) l.memoizedState = n;
    else {
      t = e.next;
      var i = f = null, c = null, m = t, S = !1;
      do {
        var z = m.lane & -536870913;
        if (z !== m.lane ? (Z & z) === z : (Gt & z) === z) {
          var o = m.revertLane;
          if (o === 0)
            c !== null && (c = c.next = {
              lane: 0,
              revertLane: 0,
              gesture: null,
              action: m.action,
              hasEagerState: m.hasEagerState,
              eagerState: m.eagerState,
              next: null
            }), z === nu && (S = !0);
          else if ((Gt & o) === o) {
            m = m.next, o === nu && (S = !0);
            continue;
          } else
            z = {
              lane: 0,
              revertLane: m.revertLane,
              gesture: null,
              action: m.action,
              hasEagerState: m.hasEagerState,
              eagerState: m.eagerState,
              next: null
            }, c === null ? (i = c = z, f = n) : c = c.next = z, Y.lanes |= o, sa |= o;
          z = m.action, Ya && a(n, z), n = m.hasEagerState ? m.eagerState : a(n, z);
        } else
          o = {
            lane: z,
            revertLane: m.revertLane,
            gesture: m.gesture,
            action: m.action,
            hasEagerState: m.hasEagerState,
            eagerState: m.eagerState,
            next: null
          }, c === null ? (i = c = o, f = n) : c = c.next = o, Y.lanes |= z, sa |= z;
        m = m.next;
      } while (m !== null && m !== t);
      if (c === null ? f = n : c.next = i, !Pl(n, l.memoizedState) && (rl = !0, S && (a = fu, a !== null)))
        throw a;
      l.memoizedState = n, l.baseState = f, l.baseQueue = c, u.lastRenderedState = n;
    }
    return e === null && (u.lanes = 0), [l.memoizedState, u.dispatch];
  }
  function $f(l) {
    var t = hl(), a = t.queue;
    if (a === null) throw Error(h(311));
    a.lastRenderedReducer = l;
    var u = a.dispatch, e = a.pending, n = t.memoizedState;
    if (e !== null) {
      a.pending = null;
      var f = e = e.next;
      do
        n = l(n, f.action), f = f.next;
      while (f !== e);
      Pl(n, t.memoizedState) || (rl = !0), t.memoizedState = n, t.baseQueue === null && (t.baseState = n), a.lastRenderedState = n;
    }
    return [n, u];
  }
  function B0(l, t, a) {
    var u = Y, e = hl(), n = K;
    if (n) {
      if (a === void 0) throw Error(h(407));
      a = a();
    } else a = t();
    var f = !Pl(
      (ll || e).memoizedState,
      a
    );
    if (f && (e.memoizedState = a, rl = !0), e = e.queue, If(j0.bind(null, u, e, l), [
      l
    ]), e.getSnapshot !== t || f || Sl !== null && Sl.memoizedState.tag & 1) {
      if (u.flags |= 2048, vu(
        9,
        { destroy: void 0 },
        G0.bind(
          null,
          u,
          e,
          a,
          t
        ),
        null
      ), nl === null) throw Error(h(349));
      n || (Gt & 127) !== 0 || Y0(u, t, a);
    }
    return a;
  }
  function Y0(l, t, a) {
    l.flags |= 16384, l = { getSnapshot: t, value: a }, t = Y.updateQueue, t === null ? (t = ln(), Y.updateQueue = t, t.stores = [l]) : (a = t.stores, a === null ? t.stores = [l] : a.push(l));
  }
  function G0(l, t, a, u) {
    t.value = a, t.getSnapshot = u, X0(t) && Q0(l);
  }
  function j0(l, t, a) {
    return a(function() {
      X0(t) && Q0(l);
    });
  }
  function X0(l) {
    var t = l.getSnapshot;
    l = l.value;
    try {
      var a = t();
      return !Pl(l, a);
    } catch {
      return !0;
    }
  }
  function Q0(l) {
    var t = Ma(l, 2);
    t !== null && wl(t, l, 2);
  }
  function kf(l) {
    var t = Bl();
    if (typeof l == "function") {
      var a = l;
      if (l = a(), Ya) {
        $t(!0);
        try {
          a();
        } finally {
          $t(!1);
        }
      }
    }
    return t.memoizedState = t.baseState = l, t.queue = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: jt,
      lastRenderedState: l
    }, t;
  }
  function Z0(l, t, a, u) {
    return l.baseState = a, Wf(
      l,
      ll,
      typeof u == "function" ? u : jt
    );
  }
  function Qv(l, t, a, u, e) {
    if (nn(l)) throw Error(h(485));
    if (l = t.action, l !== null) {
      var n = {
        payload: e,
        action: l,
        next: null,
        isTransition: !0,
        status: "pending",
        value: null,
        reason: null,
        listeners: [],
        then: function(f) {
          n.listeners.push(f);
        }
      };
      r.T !== null ? a(!0) : n.isTransition = !1, u(n), a = t.pending, a === null ? (n.next = t.pending = n, x0(t, n)) : (n.next = a.next, t.pending = a.next = n);
    }
  }
  function x0(l, t) {
    var a = t.action, u = t.payload, e = l.state;
    if (t.isTransition) {
      var n = r.T, f = {};
      r.T = f;
      try {
        var i = a(e, u), c = r.S;
        c !== null && c(f, i), V0(l, t, i);
      } catch (m) {
        Ff(l, t, m);
      } finally {
        n !== null && f.types !== null && (n.types = f.types), r.T = n;
      }
    } else
      try {
        n = a(e, u), V0(l, t, n);
      } catch (m) {
        Ff(l, t, m);
      }
  }
  function V0(l, t, a) {
    a !== null && typeof a == "object" && typeof a.then == "function" ? a.then(
      function(u) {
        L0(l, t, u);
      },
      function(u) {
        return Ff(l, t, u);
      }
    ) : L0(l, t, a);
  }
  function L0(l, t, a) {
    t.status = "fulfilled", t.value = a, K0(t), l.state = a, t = l.pending, t !== null && (a = t.next, a === t ? l.pending = null : (a = a.next, t.next = a, x0(l, a)));
  }
  function Ff(l, t, a) {
    var u = l.pending;
    if (l.pending = null, u !== null) {
      u = u.next;
      do
        t.status = "rejected", t.reason = a, K0(t), t = t.next;
      while (t !== u);
    }
    l.action = null;
  }
  function K0(l) {
    l = l.listeners;
    for (var t = 0; t < l.length; t++) (0, l[t])();
  }
  function J0(l, t) {
    return t;
  }
  function w0(l, t) {
    if (K) {
      var a = nl.formState;
      if (a !== null) {
        l: {
          var u = Y;
          if (K) {
            if (fl) {
              t: {
                for (var e = fl, n = mt; e.nodeType !== 8; ) {
                  if (!n) {
                    e = null;
                    break t;
                  }
                  if (e = ht(
                    e.nextSibling
                  ), e === null) {
                    e = null;
                    break t;
                  }
                }
                n = e.data, e = n === "F!" || n === "F" ? e : null;
              }
              if (e) {
                fl = ht(
                  e.nextSibling
                ), u = e.data === "F!";
                break l;
              }
            }
            la(u);
          }
          u = !1;
        }
        u && (t = a[0]);
      }
    }
    return a = Bl(), a.memoizedState = a.baseState = t, u = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: J0,
      lastRenderedState: t
    }, a.queue = u, a = vs.bind(
      null,
      Y,
      u
    ), u.dispatch = a, u = kf(!1), n = ui.bind(
      null,
      Y,
      !1,
      u.queue
    ), u = Bl(), e = {
      state: t,
      dispatch: null,
      action: l,
      pending: null
    }, u.queue = e, a = Qv.bind(
      null,
      Y,
      e,
      n,
      a
    ), e.dispatch = a, u.memoizedState = l, [t, a, !1];
  }
  function W0(l) {
    var t = hl();
    return $0(t, ll, l);
  }
  function $0(l, t, a) {
    if (t = Wf(
      l,
      t,
      J0
    )[0], l = an(jt)[0], typeof t == "object" && t !== null && typeof t.then == "function")
      try {
        var u = Fu(t);
      } catch (f) {
        throw f === iu ? Je : f;
      }
    else u = t;
    t = hl();
    var e = t.queue, n = e.dispatch;
    return a !== t.memoizedState && (Y.flags |= 2048, vu(
      9,
      { destroy: void 0 },
      Zv.bind(null, e, a),
      null
    )), [u, n, l];
  }
  function Zv(l, t) {
    l.action = t;
  }
  function k0(l) {
    var t = hl(), a = ll;
    if (a !== null)
      return $0(t, a, l);
    hl(), t = t.memoizedState, a = hl();
    var u = a.queue.dispatch;
    return a.memoizedState = l, [t, u, !1];
  }
  function vu(l, t, a, u) {
    return l = { tag: l, create: a, deps: u, inst: t, next: null }, t = Y.updateQueue, t === null && (t = ln(), Y.updateQueue = t), a = t.lastEffect, a === null ? t.lastEffect = l.next = l : (u = a.next, a.next = l, l.next = u, t.lastEffect = l), l;
  }
  function F0() {
    return hl().memoizedState;
  }
  function un(l, t, a, u) {
    var e = Bl();
    Y.flags |= l, e.memoizedState = vu(
      1 | t,
      { destroy: void 0 },
      a,
      u === void 0 ? null : u
    );
  }
  function en(l, t, a, u) {
    var e = hl();
    u = u === void 0 ? null : u;
    var n = e.memoizedState.inst;
    ll !== null && u !== null && xf(u, ll.memoizedState.deps) ? e.memoizedState = vu(t, n, a, u) : (Y.flags |= l, e.memoizedState = vu(
      1 | t,
      n,
      a,
      u
    ));
  }
  function I0(l, t) {
    un(8390656, 8, l, t);
  }
  function If(l, t) {
    en(2048, 8, l, t);
  }
  function xv(l) {
    Y.flags |= 4;
    var t = Y.updateQueue;
    if (t === null)
      t = ln(), Y.updateQueue = t, t.events = [l];
    else {
      var a = t.events;
      a === null ? t.events = [l] : a.push(l);
    }
  }
  function P0(l) {
    var t = hl().memoizedState;
    return xv({ ref: t, nextImpl: l }), function() {
      if ((W & 2) !== 0) throw Error(h(440));
      return t.impl.apply(void 0, arguments);
    };
  }
  function ls(l, t) {
    return en(4, 2, l, t);
  }
  function ts(l, t) {
    return en(4, 4, l, t);
  }
  function as(l, t) {
    if (typeof t == "function") {
      l = l();
      var a = t(l);
      return function() {
        typeof a == "function" ? a() : t(null);
      };
    }
    if (t != null)
      return l = l(), t.current = l, function() {
        t.current = null;
      };
  }
  function us(l, t, a) {
    a = a != null ? a.concat([l]) : null, en(4, 4, as.bind(null, t, l), a);
  }
  function Pf() {
  }
  function es(l, t) {
    var a = hl();
    t = t === void 0 ? null : t;
    var u = a.memoizedState;
    return t !== null && xf(t, u[1]) ? u[0] : (a.memoizedState = [l, t], l);
  }
  function ns(l, t) {
    var a = hl();
    t = t === void 0 ? null : t;
    var u = a.memoizedState;
    if (t !== null && xf(t, u[1]))
      return u[0];
    if (u = l(), Ya) {
      $t(!0);
      try {
        l();
      } finally {
        $t(!1);
      }
    }
    return a.memoizedState = [u, t], u;
  }
  function li(l, t, a) {
    return a === void 0 || (Gt & 1073741824) !== 0 && (Z & 261930) === 0 ? l.memoizedState = t : (l.memoizedState = a, l = fy(), Y.lanes |= l, sa |= l, a);
  }
  function fs(l, t, a, u) {
    return Pl(a, t) ? a : su.current !== null ? (l = li(l, a, u), Pl(l, t) || (rl = !0), l) : (Gt & 42) === 0 || (Gt & 1073741824) !== 0 && (Z & 261930) === 0 ? (rl = !0, l.memoizedState = a) : (l = fy(), Y.lanes |= l, sa |= l, t);
  }
  function is(l, t, a, u, e) {
    var n = _.p;
    _.p = n !== 0 && 8 > n ? n : 8;
    var f = r.T, i = {};
    r.T = i, ui(l, !1, t, a);
    try {
      var c = e(), m = r.S;
      if (m !== null && m(i, c), c !== null && typeof c == "object" && typeof c.then == "function") {
        var S = Gv(
          c,
          u
        );
        Iu(
          l,
          t,
          S,
          nt(l)
        );
      } else
        Iu(
          l,
          t,
          u,
          nt(l)
        );
    } catch (z) {
      Iu(
        l,
        t,
        { then: function() {
        }, status: "rejected", reason: z },
        nt()
      );
    } finally {
      _.p = n, f !== null && i.types !== null && (f.types = i.types), r.T = f;
    }
  }
  function Vv() {
  }
  function ti(l, t, a, u) {
    if (l.tag !== 5) throw Error(h(476));
    var e = cs(l).queue;
    is(
      l,
      e,
      t,
      q,
      a === null ? Vv : function() {
        return ss(l), a(u);
      }
    );
  }
  function cs(l) {
    var t = l.memoizedState;
    if (t !== null) return t;
    t = {
      memoizedState: q,
      baseState: q,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: jt,
        lastRenderedState: q
      },
      next: null
    };
    var a = {};
    return t.next = {
      memoizedState: a,
      baseState: a,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: jt,
        lastRenderedState: a
      },
      next: null
    }, l.memoizedState = t, l = l.alternate, l !== null && (l.memoizedState = t), t;
  }
  function ss(l) {
    var t = cs(l);
    t.next === null && (t = l.alternate.memoizedState), Iu(
      l,
      t.next.queue,
      {},
      nt()
    );
  }
  function ai() {
    return Ml(he);
  }
  function ys() {
    return hl().memoizedState;
  }
  function ds() {
    return hl().memoizedState;
  }
  function Lv(l) {
    for (var t = l.return; t !== null; ) {
      switch (t.tag) {
        case 24:
        case 3:
          var a = nt();
          l = ua(a);
          var u = ea(t, l, a);
          u !== null && (wl(u, t, a), wu(u, t, a)), t = { cache: Nf() }, l.payload = t;
          return;
      }
      t = t.return;
    }
  }
  function Kv(l, t, a) {
    var u = nt();
    a = {
      lane: u,
      revertLane: 0,
      gesture: null,
      action: a,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, nn(l) ? ms(t, a) : (a = zf(l, t, a, u), a !== null && (wl(a, l, u), os(a, t, u)));
  }
  function vs(l, t, a) {
    var u = nt();
    Iu(l, t, a, u);
  }
  function Iu(l, t, a, u) {
    var e = {
      lane: u,
      revertLane: 0,
      gesture: null,
      action: a,
      hasEagerState: !1,
      eagerState: null,
      next: null
    };
    if (nn(l)) ms(t, e);
    else {
      var n = l.alternate;
      if (l.lanes === 0 && (n === null || n.lanes === 0) && (n = t.lastRenderedReducer, n !== null))
        try {
          var f = t.lastRenderedState, i = n(f, a);
          if (e.hasEagerState = !0, e.eagerState = i, Pl(i, f))
            return Xe(l, t, e, 0), nl === null && je(), !1;
        } catch {
        } finally {
        }
      if (a = zf(l, t, e, u), a !== null)
        return wl(a, l, u), os(a, t, u), !0;
    }
    return !1;
  }
  function ui(l, t, a, u) {
    if (u = {
      lane: 2,
      revertLane: Bi(),
      gesture: null,
      action: u,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, nn(l)) {
      if (t) throw Error(h(479));
    } else
      t = zf(
        l,
        a,
        u,
        2
      ), t !== null && wl(t, l, 2);
  }
  function nn(l) {
    var t = l.alternate;
    return l === Y || t !== null && t === Y;
  }
  function ms(l, t) {
    yu = Ie = !0;
    var a = l.pending;
    a === null ? t.next = t : (t.next = a.next, a.next = t), l.pending = t;
  }
  function os(l, t, a) {
    if ((a & 4194048) !== 0) {
      var u = t.lanes;
      u &= l.pendingLanes, a |= u, t.lanes = a, bc(l, a);
    }
  }
  var Pu = {
    readContext: Ml,
    use: tn,
    useCallback: dl,
    useContext: dl,
    useEffect: dl,
    useImperativeHandle: dl,
    useLayoutEffect: dl,
    useInsertionEffect: dl,
    useMemo: dl,
    useReducer: dl,
    useRef: dl,
    useState: dl,
    useDebugValue: dl,
    useDeferredValue: dl,
    useTransition: dl,
    useSyncExternalStore: dl,
    useId: dl,
    useHostTransitionStatus: dl,
    useFormState: dl,
    useActionState: dl,
    useOptimistic: dl,
    useMemoCache: dl,
    useCacheRefresh: dl
  };
  Pu.useEffectEvent = dl;
  var hs = {
    readContext: Ml,
    use: tn,
    useCallback: function(l, t) {
      return Bl().memoizedState = [
        l,
        t === void 0 ? null : t
      ], l;
    },
    useContext: Ml,
    useEffect: I0,
    useImperativeHandle: function(l, t, a) {
      a = a != null ? a.concat([l]) : null, un(
        4194308,
        4,
        as.bind(null, t, l),
        a
      );
    },
    useLayoutEffect: function(l, t) {
      return un(4194308, 4, l, t);
    },
    useInsertionEffect: function(l, t) {
      un(4, 2, l, t);
    },
    useMemo: function(l, t) {
      var a = Bl();
      t = t === void 0 ? null : t;
      var u = l();
      if (Ya) {
        $t(!0);
        try {
          l();
        } finally {
          $t(!1);
        }
      }
      return a.memoizedState = [u, t], u;
    },
    useReducer: function(l, t, a) {
      var u = Bl();
      if (a !== void 0) {
        var e = a(t);
        if (Ya) {
          $t(!0);
          try {
            a(t);
          } finally {
            $t(!1);
          }
        }
      } else e = t;
      return u.memoizedState = u.baseState = e, l = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: l,
        lastRenderedState: e
      }, u.queue = l, l = l.dispatch = Kv.bind(
        null,
        Y,
        l
      ), [u.memoizedState, l];
    },
    useRef: function(l) {
      var t = Bl();
      return l = { current: l }, t.memoizedState = l;
    },
    useState: function(l) {
      l = kf(l);
      var t = l.queue, a = vs.bind(null, Y, t);
      return t.dispatch = a, [l.memoizedState, a];
    },
    useDebugValue: Pf,
    useDeferredValue: function(l, t) {
      var a = Bl();
      return li(a, l, t);
    },
    useTransition: function() {
      var l = kf(!1);
      return l = is.bind(
        null,
        Y,
        l.queue,
        !0,
        !1
      ), Bl().memoizedState = l, [!1, l];
    },
    useSyncExternalStore: function(l, t, a) {
      var u = Y, e = Bl();
      if (K) {
        if (a === void 0)
          throw Error(h(407));
        a = a();
      } else {
        if (a = t(), nl === null)
          throw Error(h(349));
        (Z & 127) !== 0 || Y0(u, t, a);
      }
      e.memoizedState = a;
      var n = { value: a, getSnapshot: t };
      return e.queue = n, I0(j0.bind(null, u, n, l), [
        l
      ]), u.flags |= 2048, vu(
        9,
        { destroy: void 0 },
        G0.bind(
          null,
          u,
          n,
          a,
          t
        ),
        null
      ), a;
    },
    useId: function() {
      var l = Bl(), t = nl.identifierPrefix;
      if (K) {
        var a = pt, u = _t;
        a = (u & ~(1 << 32 - Il(u) - 1)).toString(32) + a, t = "_" + t + "R_" + a, a = Pe++, 0 < a && (t += "H" + a.toString(32)), t += "_";
      } else
        a = jv++, t = "_" + t + "r_" + a.toString(32) + "_";
      return l.memoizedState = t;
    },
    useHostTransitionStatus: ai,
    useFormState: w0,
    useActionState: w0,
    useOptimistic: function(l) {
      var t = Bl();
      t.memoizedState = t.baseState = l;
      var a = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: null,
        lastRenderedState: null
      };
      return t.queue = a, t = ui.bind(
        null,
        Y,
        !0,
        a
      ), a.dispatch = t, [l, t];
    },
    useMemoCache: wf,
    useCacheRefresh: function() {
      return Bl().memoizedState = Lv.bind(
        null,
        Y
      );
    },
    useEffectEvent: function(l) {
      var t = Bl(), a = { impl: l };
      return t.memoizedState = a, function() {
        if ((W & 2) !== 0)
          throw Error(h(440));
        return a.impl.apply(void 0, arguments);
      };
    }
  }, ei = {
    readContext: Ml,
    use: tn,
    useCallback: es,
    useContext: Ml,
    useEffect: If,
    useImperativeHandle: us,
    useInsertionEffect: ls,
    useLayoutEffect: ts,
    useMemo: ns,
    useReducer: an,
    useRef: F0,
    useState: function() {
      return an(jt);
    },
    useDebugValue: Pf,
    useDeferredValue: function(l, t) {
      var a = hl();
      return fs(
        a,
        ll.memoizedState,
        l,
        t
      );
    },
    useTransition: function() {
      var l = an(jt)[0], t = hl().memoizedState;
      return [
        typeof l == "boolean" ? l : Fu(l),
        t
      ];
    },
    useSyncExternalStore: B0,
    useId: ys,
    useHostTransitionStatus: ai,
    useFormState: W0,
    useActionState: W0,
    useOptimistic: function(l, t) {
      var a = hl();
      return Z0(a, ll, l, t);
    },
    useMemoCache: wf,
    useCacheRefresh: ds
  };
  ei.useEffectEvent = P0;
  var gs = {
    readContext: Ml,
    use: tn,
    useCallback: es,
    useContext: Ml,
    useEffect: If,
    useImperativeHandle: us,
    useInsertionEffect: ls,
    useLayoutEffect: ts,
    useMemo: ns,
    useReducer: $f,
    useRef: F0,
    useState: function() {
      return $f(jt);
    },
    useDebugValue: Pf,
    useDeferredValue: function(l, t) {
      var a = hl();
      return ll === null ? li(a, l, t) : fs(
        a,
        ll.memoizedState,
        l,
        t
      );
    },
    useTransition: function() {
      var l = $f(jt)[0], t = hl().memoizedState;
      return [
        typeof l == "boolean" ? l : Fu(l),
        t
      ];
    },
    useSyncExternalStore: B0,
    useId: ys,
    useHostTransitionStatus: ai,
    useFormState: k0,
    useActionState: k0,
    useOptimistic: function(l, t) {
      var a = hl();
      return ll !== null ? Z0(a, ll, l, t) : (a.baseState = l, [l, a.queue.dispatch]);
    },
    useMemoCache: wf,
    useCacheRefresh: ds
  };
  gs.useEffectEvent = P0;
  function ni(l, t, a, u) {
    t = l.memoizedState, a = a(u, t), a = a == null ? t : R({}, t, a), l.memoizedState = a, l.lanes === 0 && (l.updateQueue.baseState = a);
  }
  var fi = {
    enqueueSetState: function(l, t, a) {
      l = l._reactInternals;
      var u = nt(), e = ua(u);
      e.payload = t, a != null && (e.callback = a), t = ea(l, e, u), t !== null && (wl(t, l, u), wu(t, l, u));
    },
    enqueueReplaceState: function(l, t, a) {
      l = l._reactInternals;
      var u = nt(), e = ua(u);
      e.tag = 1, e.payload = t, a != null && (e.callback = a), t = ea(l, e, u), t !== null && (wl(t, l, u), wu(t, l, u));
    },
    enqueueForceUpdate: function(l, t) {
      l = l._reactInternals;
      var a = nt(), u = ua(a);
      u.tag = 2, t != null && (u.callback = t), t = ea(l, u, a), t !== null && (wl(t, l, a), wu(t, l, a));
    }
  };
  function Ss(l, t, a, u, e, n, f) {
    return l = l.stateNode, typeof l.shouldComponentUpdate == "function" ? l.shouldComponentUpdate(u, n, f) : t.prototype && t.prototype.isPureReactComponent ? !Xu(a, u) || !Xu(e, n) : !0;
  }
  function rs(l, t, a, u) {
    l = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(a, u), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(a, u), t.state !== l && fi.enqueueReplaceState(t, t.state, null);
  }
  function Ga(l, t) {
    var a = t;
    if ("ref" in t) {
      a = {};
      for (var u in t)
        u !== "ref" && (a[u] = t[u]);
    }
    if (l = l.defaultProps) {
      a === t && (a = R({}, a));
      for (var e in l)
        a[e] === void 0 && (a[e] = l[e]);
    }
    return a;
  }
  function bs(l) {
    Ge(l);
  }
  function zs(l) {
    console.error(l);
  }
  function Ts(l) {
    Ge(l);
  }
  function fn(l, t) {
    try {
      var a = l.onUncaughtError;
      a(t.value, { componentStack: t.stack });
    } catch (u) {
      setTimeout(function() {
        throw u;
      });
    }
  }
  function Es(l, t, a) {
    try {
      var u = l.onCaughtError;
      u(a.value, {
        componentStack: a.stack,
        errorBoundary: t.tag === 1 ? t.stateNode : null
      });
    } catch (e) {
      setTimeout(function() {
        throw e;
      });
    }
  }
  function ii(l, t, a) {
    return a = ua(a), a.tag = 3, a.payload = { element: null }, a.callback = function() {
      fn(l, t);
    }, a;
  }
  function As(l) {
    return l = ua(l), l.tag = 3, l;
  }
  function _s(l, t, a, u) {
    var e = a.type.getDerivedStateFromError;
    if (typeof e == "function") {
      var n = u.value;
      l.payload = function() {
        return e(n);
      }, l.callback = function() {
        Es(t, a, u);
      };
    }
    var f = a.stateNode;
    f !== null && typeof f.componentDidCatch == "function" && (l.callback = function() {
      Es(t, a, u), typeof e != "function" && (ya === null ? ya = /* @__PURE__ */ new Set([this]) : ya.add(this));
      var i = u.stack;
      this.componentDidCatch(u.value, {
        componentStack: i !== null ? i : ""
      });
    });
  }
  function Jv(l, t, a, u, e) {
    if (a.flags |= 32768, u !== null && typeof u == "object" && typeof u.then == "function") {
      if (t = a.alternate, t !== null && eu(
        t,
        a,
        e,
        !0
      ), a = tt.current, a !== null) {
        switch (a.tag) {
          case 31:
          case 13:
            return ot === null ? bn() : a.alternate === null && vl === 0 && (vl = 3), a.flags &= -257, a.flags |= 65536, a.lanes = e, u === we ? a.flags |= 16384 : (t = a.updateQueue, t === null ? a.updateQueue = /* @__PURE__ */ new Set([u]) : t.add(u), Ri(l, u, e)), !1;
          case 22:
            return a.flags |= 65536, u === we ? a.flags |= 16384 : (t = a.updateQueue, t === null ? (t = {
              transitions: null,
              markerInstances: null,
              retryQueue: /* @__PURE__ */ new Set([u])
            }, a.updateQueue = t) : (a = t.retryQueue, a === null ? t.retryQueue = /* @__PURE__ */ new Set([u]) : a.add(u)), Ri(l, u, e)), !1;
        }
        throw Error(h(435, a.tag));
      }
      return Ri(l, u, e), bn(), !1;
    }
    if (K)
      return t = tt.current, t !== null ? ((t.flags & 65536) === 0 && (t.flags |= 256), t.flags |= 65536, t.lanes = e, u !== Of && (l = Error(h(422), { cause: u }), xu(yt(l, a)))) : (u !== Of && (t = Error(h(423), {
        cause: u
      }), xu(
        yt(t, a)
      )), l = l.current.alternate, l.flags |= 65536, e &= -e, l.lanes |= e, u = yt(u, a), e = ii(
        l.stateNode,
        u,
        e
      ), Gf(l, e), vl !== 4 && (vl = 2)), !1;
    var n = Error(h(520), { cause: u });
    if (n = yt(n, a), ie === null ? ie = [n] : ie.push(n), vl !== 4 && (vl = 2), t === null) return !0;
    u = yt(u, a), a = t;
    do {
      switch (a.tag) {
        case 3:
          return a.flags |= 65536, l = e & -e, a.lanes |= l, l = ii(a.stateNode, u, l), Gf(a, l), !1;
        case 1:
          if (t = a.type, n = a.stateNode, (a.flags & 128) === 0 && (typeof t.getDerivedStateFromError == "function" || n !== null && typeof n.componentDidCatch == "function" && (ya === null || !ya.has(n))))
            return a.flags |= 65536, e &= -e, a.lanes |= e, e = As(e), _s(
              e,
              l,
              a,
              u
            ), Gf(a, e), !1;
      }
      a = a.return;
    } while (a !== null);
    return !1;
  }
  var ci = Error(h(461)), rl = !1;
  function Dl(l, t, a, u) {
    t.child = l === null ? D0(t, null, a, u) : Ba(
      t,
      l.child,
      a,
      u
    );
  }
  function ps(l, t, a, u, e) {
    a = a.render;
    var n = t.ref;
    if ("ref" in u) {
      var f = {};
      for (var i in u)
        i !== "ref" && (f[i] = u[i]);
    } else f = u;
    return Na(t), u = Vf(
      l,
      t,
      a,
      f,
      n,
      e
    ), i = Lf(), l !== null && !rl ? (Kf(l, t, e), Xt(l, t, e)) : (K && i && _f(t), t.flags |= 1, Dl(l, t, u, e), t.child);
  }
  function Os(l, t, a, u, e) {
    if (l === null) {
      var n = a.type;
      return typeof n == "function" && !Tf(n) && n.defaultProps === void 0 && a.compare === null ? (t.tag = 15, t.type = n, Ms(
        l,
        t,
        n,
        u,
        e
      )) : (l = Ze(
        a.type,
        null,
        u,
        t,
        t.mode,
        e
      ), l.ref = t.ref, l.return = t, t.child = l);
    }
    if (n = l.child, !gi(l, e)) {
      var f = n.memoizedProps;
      if (a = a.compare, a = a !== null ? a : Xu, a(f, u) && l.ref === t.ref)
        return Xt(l, t, e);
    }
    return t.flags |= 1, l = qt(n, u), l.ref = t.ref, l.return = t, t.child = l;
  }
  function Ms(l, t, a, u, e) {
    if (l !== null) {
      var n = l.memoizedProps;
      if (Xu(n, u) && l.ref === t.ref)
        if (rl = !1, t.pendingProps = u = n, gi(l, e))
          (l.flags & 131072) !== 0 && (rl = !0);
        else
          return t.lanes = l.lanes, Xt(l, t, e);
    }
    return si(
      l,
      t,
      a,
      u,
      e
    );
  }
  function Ds(l, t, a, u) {
    var e = u.children, n = l !== null ? l.memoizedState : null;
    if (l === null && t.stateNode === null && (t.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }), u.mode === "hidden") {
      if ((t.flags & 128) !== 0) {
        if (n = n !== null ? n.baseLanes | a : a, l !== null) {
          for (u = t.child = l.child, e = 0; u !== null; )
            e = e | u.lanes | u.childLanes, u = u.sibling;
          u = e & ~n;
        } else u = 0, t.child = null;
        return Us(
          l,
          t,
          n,
          a,
          u
        );
      }
      if ((a & 536870912) !== 0)
        t.memoizedState = { baseLanes: 0, cachePool: null }, l !== null && Ke(
          t,
          n !== null ? n.cachePool : null
        ), n !== null ? N0(t, n) : Xf(), R0(t);
      else
        return u = t.lanes = 536870912, Us(
          l,
          t,
          n !== null ? n.baseLanes | a : a,
          a,
          u
        );
    } else
      n !== null ? (Ke(t, n.cachePool), N0(t, n), fa(), t.memoizedState = null) : (l !== null && Ke(t, null), Xf(), fa());
    return Dl(l, t, e, a), t.child;
  }
  function le(l, t) {
    return l !== null && l.tag === 22 || t.stateNode !== null || (t.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }), t.sibling;
  }
  function Us(l, t, a, u, e) {
    var n = qf();
    return n = n === null ? null : { parent: gl._currentValue, pool: n }, t.memoizedState = {
      baseLanes: a,
      cachePool: n
    }, l !== null && Ke(t, null), Xf(), R0(t), l !== null && eu(l, t, u, !0), t.childLanes = e, null;
  }
  function cn(l, t) {
    return t = yn(
      { mode: t.mode, children: t.children },
      l.mode
    ), t.ref = l.ref, l.child = t, t.return = l, t;
  }
  function Hs(l, t, a) {
    return Ba(t, l.child, null, a), l = cn(t, t.pendingProps), l.flags |= 2, at(t), t.memoizedState = null, l;
  }
  function wv(l, t, a) {
    var u = t.pendingProps, e = (t.flags & 128) !== 0;
    if (t.flags &= -129, l === null) {
      if (K) {
        if (u.mode === "hidden")
          return l = cn(t, u), t.lanes = 536870912, le(null, l);
        if (Zf(t), (l = fl) ? (l = xy(
          l,
          mt
        ), l = l !== null && l.data === "&" ? l : null, l !== null && (t.memoizedState = {
          dehydrated: l,
          treeContext: It !== null ? { id: _t, overflow: pt } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, a = m0(l), a.return = t, t.child = a, Ol = t, fl = null)) : l = null, l === null) throw la(t);
        return t.lanes = 536870912, null;
      }
      return cn(t, u);
    }
    var n = l.memoizedState;
    if (n !== null) {
      var f = n.dehydrated;
      if (Zf(t), e)
        if (t.flags & 256)
          t.flags &= -257, t = Hs(
            l,
            t,
            a
          );
        else if (t.memoizedState !== null)
          t.child = l.child, t.flags |= 128, t = null;
        else throw Error(h(558));
      else if (rl || eu(l, t, a, !1), e = (a & l.childLanes) !== 0, rl || e) {
        if (u = nl, u !== null && (f = zc(u, a), f !== 0 && f !== n.retryLane))
          throw n.retryLane = f, Ma(l, f), wl(u, l, f), ci;
        bn(), t = Hs(
          l,
          t,
          a
        );
      } else
        l = n.treeContext, fl = ht(f.nextSibling), Ol = t, K = !0, Pt = null, mt = !1, l !== null && g0(t, l), t = cn(t, u), t.flags |= 4096;
      return t;
    }
    return l = qt(l.child, {
      mode: u.mode,
      children: u.children
    }), l.ref = t.ref, t.child = l, l.return = t, l;
  }
  function sn(l, t) {
    var a = t.ref;
    if (a === null)
      l !== null && l.ref !== null && (t.flags |= 4194816);
    else {
      if (typeof a != "function" && typeof a != "object")
        throw Error(h(284));
      (l === null || l.ref !== a) && (t.flags |= 4194816);
    }
  }
  function si(l, t, a, u, e) {
    return Na(t), a = Vf(
      l,
      t,
      a,
      u,
      void 0,
      e
    ), u = Lf(), l !== null && !rl ? (Kf(l, t, e), Xt(l, t, e)) : (K && u && _f(t), t.flags |= 1, Dl(l, t, a, e), t.child);
  }
  function Ns(l, t, a, u, e, n) {
    return Na(t), t.updateQueue = null, a = C0(
      t,
      u,
      a,
      e
    ), q0(l), u = Lf(), l !== null && !rl ? (Kf(l, t, n), Xt(l, t, n)) : (K && u && _f(t), t.flags |= 1, Dl(l, t, a, n), t.child);
  }
  function Rs(l, t, a, u, e) {
    if (Na(t), t.stateNode === null) {
      var n = lu, f = a.contextType;
      typeof f == "object" && f !== null && (n = Ml(f)), n = new a(u, n), t.memoizedState = n.state !== null && n.state !== void 0 ? n.state : null, n.updater = fi, t.stateNode = n, n._reactInternals = t, n = t.stateNode, n.props = u, n.state = t.memoizedState, n.refs = {}, Bf(t), f = a.contextType, n.context = typeof f == "object" && f !== null ? Ml(f) : lu, n.state = t.memoizedState, f = a.getDerivedStateFromProps, typeof f == "function" && (ni(
        t,
        a,
        f,
        u
      ), n.state = t.memoizedState), typeof a.getDerivedStateFromProps == "function" || typeof n.getSnapshotBeforeUpdate == "function" || typeof n.UNSAFE_componentWillMount != "function" && typeof n.componentWillMount != "function" || (f = n.state, typeof n.componentWillMount == "function" && n.componentWillMount(), typeof n.UNSAFE_componentWillMount == "function" && n.UNSAFE_componentWillMount(), f !== n.state && fi.enqueueReplaceState(n, n.state, null), $u(t, u, n, e), Wu(), n.state = t.memoizedState), typeof n.componentDidMount == "function" && (t.flags |= 4194308), u = !0;
    } else if (l === null) {
      n = t.stateNode;
      var i = t.memoizedProps, c = Ga(a, i);
      n.props = c;
      var m = n.context, S = a.contextType;
      f = lu, typeof S == "object" && S !== null && (f = Ml(S));
      var z = a.getDerivedStateFromProps;
      S = typeof z == "function" || typeof n.getSnapshotBeforeUpdate == "function", i = t.pendingProps !== i, S || typeof n.UNSAFE_componentWillReceiveProps != "function" && typeof n.componentWillReceiveProps != "function" || (i || m !== f) && rs(
        t,
        n,
        u,
        f
      ), aa = !1;
      var o = t.memoizedState;
      n.state = o, $u(t, u, n, e), Wu(), m = t.memoizedState, i || o !== m || aa ? (typeof z == "function" && (ni(
        t,
        a,
        z,
        u
      ), m = t.memoizedState), (c = aa || Ss(
        t,
        a,
        c,
        u,
        o,
        m,
        f
      )) ? (S || typeof n.UNSAFE_componentWillMount != "function" && typeof n.componentWillMount != "function" || (typeof n.componentWillMount == "function" && n.componentWillMount(), typeof n.UNSAFE_componentWillMount == "function" && n.UNSAFE_componentWillMount()), typeof n.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof n.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = u, t.memoizedState = m), n.props = u, n.state = m, n.context = f, u = c) : (typeof n.componentDidMount == "function" && (t.flags |= 4194308), u = !1);
    } else {
      n = t.stateNode, Yf(l, t), f = t.memoizedProps, S = Ga(a, f), n.props = S, z = t.pendingProps, o = n.context, m = a.contextType, c = lu, typeof m == "object" && m !== null && (c = Ml(m)), i = a.getDerivedStateFromProps, (m = typeof i == "function" || typeof n.getSnapshotBeforeUpdate == "function") || typeof n.UNSAFE_componentWillReceiveProps != "function" && typeof n.componentWillReceiveProps != "function" || (f !== z || o !== c) && rs(
        t,
        n,
        u,
        c
      ), aa = !1, o = t.memoizedState, n.state = o, $u(t, u, n, e), Wu();
      var g = t.memoizedState;
      f !== z || o !== g || aa || l !== null && l.dependencies !== null && Ve(l.dependencies) ? (typeof i == "function" && (ni(
        t,
        a,
        i,
        u
      ), g = t.memoizedState), (S = aa || Ss(
        t,
        a,
        S,
        u,
        o,
        g,
        c
      ) || l !== null && l.dependencies !== null && Ve(l.dependencies)) ? (m || typeof n.UNSAFE_componentWillUpdate != "function" && typeof n.componentWillUpdate != "function" || (typeof n.componentWillUpdate == "function" && n.componentWillUpdate(u, g, c), typeof n.UNSAFE_componentWillUpdate == "function" && n.UNSAFE_componentWillUpdate(
        u,
        g,
        c
      )), typeof n.componentDidUpdate == "function" && (t.flags |= 4), typeof n.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof n.componentDidUpdate != "function" || f === l.memoizedProps && o === l.memoizedState || (t.flags |= 4), typeof n.getSnapshotBeforeUpdate != "function" || f === l.memoizedProps && o === l.memoizedState || (t.flags |= 1024), t.memoizedProps = u, t.memoizedState = g), n.props = u, n.state = g, n.context = c, u = S) : (typeof n.componentDidUpdate != "function" || f === l.memoizedProps && o === l.memoizedState || (t.flags |= 4), typeof n.getSnapshotBeforeUpdate != "function" || f === l.memoizedProps && o === l.memoizedState || (t.flags |= 1024), u = !1);
    }
    return n = u, sn(l, t), u = (t.flags & 128) !== 0, n || u ? (n = t.stateNode, a = u && typeof a.getDerivedStateFromError != "function" ? null : n.render(), t.flags |= 1, l !== null && u ? (t.child = Ba(
      t,
      l.child,
      null,
      e
    ), t.child = Ba(
      t,
      null,
      a,
      e
    )) : Dl(l, t, a, e), t.memoizedState = n.state, l = t.child) : l = Xt(
      l,
      t,
      e
    ), l;
  }
  function qs(l, t, a, u) {
    return Ua(), t.flags |= 256, Dl(l, t, a, u), t.child;
  }
  var yi = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null
  };
  function di(l) {
    return { baseLanes: l, cachePool: E0() };
  }
  function vi(l, t, a) {
    return l = l !== null ? l.childLanes & ~a : 0, t && (l |= et), l;
  }
  function Cs(l, t, a) {
    var u = t.pendingProps, e = !1, n = (t.flags & 128) !== 0, f;
    if ((f = n) || (f = l !== null && l.memoizedState === null ? !1 : (ol.current & 2) !== 0), f && (e = !0, t.flags &= -129), f = (t.flags & 32) !== 0, t.flags &= -33, l === null) {
      if (K) {
        if (e ? na(t) : fa(), (l = fl) ? (l = xy(
          l,
          mt
        ), l = l !== null && l.data !== "&" ? l : null, l !== null && (t.memoizedState = {
          dehydrated: l,
          treeContext: It !== null ? { id: _t, overflow: pt } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, a = m0(l), a.return = t, t.child = a, Ol = t, fl = null)) : l = null, l === null) throw la(t);
        return Wi(l) ? t.lanes = 32 : t.lanes = 536870912, null;
      }
      var i = u.children;
      return u = u.fallback, e ? (fa(), e = t.mode, i = yn(
        { mode: "hidden", children: i },
        e
      ), u = Da(
        u,
        e,
        a,
        null
      ), i.return = t, u.return = t, i.sibling = u, t.child = i, u = t.child, u.memoizedState = di(a), u.childLanes = vi(
        l,
        f,
        a
      ), t.memoizedState = yi, le(null, u)) : (na(t), mi(t, i));
    }
    var c = l.memoizedState;
    if (c !== null && (i = c.dehydrated, i !== null)) {
      if (n)
        t.flags & 256 ? (na(t), t.flags &= -257, t = oi(
          l,
          t,
          a
        )) : t.memoizedState !== null ? (fa(), t.child = l.child, t.flags |= 128, t = null) : (fa(), i = u.fallback, e = t.mode, u = yn(
          { mode: "visible", children: u.children },
          e
        ), i = Da(
          i,
          e,
          a,
          null
        ), i.flags |= 2, u.return = t, i.return = t, u.sibling = i, t.child = u, Ba(
          t,
          l.child,
          null,
          a
        ), u = t.child, u.memoizedState = di(a), u.childLanes = vi(
          l,
          f,
          a
        ), t.memoizedState = yi, t = le(null, u));
      else if (na(t), Wi(i)) {
        if (f = i.nextSibling && i.nextSibling.dataset, f) var m = f.dgst;
        f = m, u = Error(h(419)), u.stack = "", u.digest = f, xu({ value: u, source: null, stack: null }), t = oi(
          l,
          t,
          a
        );
      } else if (rl || eu(l, t, a, !1), f = (a & l.childLanes) !== 0, rl || f) {
        if (f = nl, f !== null && (u = zc(f, a), u !== 0 && u !== c.retryLane))
          throw c.retryLane = u, Ma(l, u), wl(f, l, u), ci;
        wi(i) || bn(), t = oi(
          l,
          t,
          a
        );
      } else
        wi(i) ? (t.flags |= 192, t.child = l.child, t = null) : (l = c.treeContext, fl = ht(
          i.nextSibling
        ), Ol = t, K = !0, Pt = null, mt = !1, l !== null && g0(t, l), t = mi(
          t,
          u.children
        ), t.flags |= 4096);
      return t;
    }
    return e ? (fa(), i = u.fallback, e = t.mode, c = l.child, m = c.sibling, u = qt(c, {
      mode: "hidden",
      children: u.children
    }), u.subtreeFlags = c.subtreeFlags & 65011712, m !== null ? i = qt(
      m,
      i
    ) : (i = Da(
      i,
      e,
      a,
      null
    ), i.flags |= 2), i.return = t, u.return = t, u.sibling = i, t.child = u, le(null, u), u = t.child, i = l.child.memoizedState, i === null ? i = di(a) : (e = i.cachePool, e !== null ? (c = gl._currentValue, e = e.parent !== c ? { parent: c, pool: c } : e) : e = E0(), i = {
      baseLanes: i.baseLanes | a,
      cachePool: e
    }), u.memoizedState = i, u.childLanes = vi(
      l,
      f,
      a
    ), t.memoizedState = yi, le(l.child, u)) : (na(t), a = l.child, l = a.sibling, a = qt(a, {
      mode: "visible",
      children: u.children
    }), a.return = t, a.sibling = null, l !== null && (f = t.deletions, f === null ? (t.deletions = [l], t.flags |= 16) : f.push(l)), t.child = a, t.memoizedState = null, a);
  }
  function mi(l, t) {
    return t = yn(
      { mode: "visible", children: t },
      l.mode
    ), t.return = l, l.child = t;
  }
  function yn(l, t) {
    return l = lt(22, l, null, t), l.lanes = 0, l;
  }
  function oi(l, t, a) {
    return Ba(t, l.child, null, a), l = mi(
      t,
      t.pendingProps.children
    ), l.flags |= 2, t.memoizedState = null, l;
  }
  function Bs(l, t, a) {
    l.lanes |= t;
    var u = l.alternate;
    u !== null && (u.lanes |= t), Uf(l.return, t, a);
  }
  function hi(l, t, a, u, e, n) {
    var f = l.memoizedState;
    f === null ? l.memoizedState = {
      isBackwards: t,
      rendering: null,
      renderingStartTime: 0,
      last: u,
      tail: a,
      tailMode: e,
      treeForkCount: n
    } : (f.isBackwards = t, f.rendering = null, f.renderingStartTime = 0, f.last = u, f.tail = a, f.tailMode = e, f.treeForkCount = n);
  }
  function Ys(l, t, a) {
    var u = t.pendingProps, e = u.revealOrder, n = u.tail;
    u = u.children;
    var f = ol.current, i = (f & 2) !== 0;
    if (i ? (f = f & 1 | 2, t.flags |= 128) : f &= 1, p(ol, f), Dl(l, t, u, a), u = K ? Zu : 0, !i && l !== null && (l.flags & 128) !== 0)
      l: for (l = t.child; l !== null; ) {
        if (l.tag === 13)
          l.memoizedState !== null && Bs(l, a, t);
        else if (l.tag === 19)
          Bs(l, a, t);
        else if (l.child !== null) {
          l.child.return = l, l = l.child;
          continue;
        }
        if (l === t) break l;
        for (; l.sibling === null; ) {
          if (l.return === null || l.return === t)
            break l;
          l = l.return;
        }
        l.sibling.return = l.return, l = l.sibling;
      }
    switch (e) {
      case "forwards":
        for (a = t.child, e = null; a !== null; )
          l = a.alternate, l !== null && Fe(l) === null && (e = a), a = a.sibling;
        a = e, a === null ? (e = t.child, t.child = null) : (e = a.sibling, a.sibling = null), hi(
          t,
          !1,
          e,
          a,
          n,
          u
        );
        break;
      case "backwards":
      case "unstable_legacy-backwards":
        for (a = null, e = t.child, t.child = null; e !== null; ) {
          if (l = e.alternate, l !== null && Fe(l) === null) {
            t.child = e;
            break;
          }
          l = e.sibling, e.sibling = a, a = e, e = l;
        }
        hi(
          t,
          !0,
          a,
          null,
          n,
          u
        );
        break;
      case "together":
        hi(
          t,
          !1,
          null,
          null,
          void 0,
          u
        );
        break;
      default:
        t.memoizedState = null;
    }
    return t.child;
  }
  function Xt(l, t, a) {
    if (l !== null && (t.dependencies = l.dependencies), sa |= t.lanes, (a & t.childLanes) === 0)
      if (l !== null) {
        if (eu(
          l,
          t,
          a,
          !1
        ), (a & t.childLanes) === 0)
          return null;
      } else return null;
    if (l !== null && t.child !== l.child)
      throw Error(h(153));
    if (t.child !== null) {
      for (l = t.child, a = qt(l, l.pendingProps), t.child = a, a.return = t; l.sibling !== null; )
        l = l.sibling, a = a.sibling = qt(l, l.pendingProps), a.return = t;
      a.sibling = null;
    }
    return t.child;
  }
  function gi(l, t) {
    return (l.lanes & t) !== 0 ? !0 : (l = l.dependencies, !!(l !== null && Ve(l)));
  }
  function Wv(l, t, a) {
    switch (t.tag) {
      case 3:
        Cl(t, t.stateNode.containerInfo), ta(t, gl, l.memoizedState.cache), Ua();
        break;
      case 27:
      case 5:
        Ou(t);
        break;
      case 4:
        Cl(t, t.stateNode.containerInfo);
        break;
      case 10:
        ta(
          t,
          t.type,
          t.memoizedProps.value
        );
        break;
      case 31:
        if (t.memoizedState !== null)
          return t.flags |= 128, Zf(t), null;
        break;
      case 13:
        var u = t.memoizedState;
        if (u !== null)
          return u.dehydrated !== null ? (na(t), t.flags |= 128, null) : (a & t.child.childLanes) !== 0 ? Cs(l, t, a) : (na(t), l = Xt(
            l,
            t,
            a
          ), l !== null ? l.sibling : null);
        na(t);
        break;
      case 19:
        var e = (l.flags & 128) !== 0;
        if (u = (a & t.childLanes) !== 0, u || (eu(
          l,
          t,
          a,
          !1
        ), u = (a & t.childLanes) !== 0), e) {
          if (u)
            return Ys(
              l,
              t,
              a
            );
          t.flags |= 128;
        }
        if (e = t.memoizedState, e !== null && (e.rendering = null, e.tail = null, e.lastEffect = null), p(ol, ol.current), u) break;
        return null;
      case 22:
        return t.lanes = 0, Ds(
          l,
          t,
          a,
          t.pendingProps
        );
      case 24:
        ta(t, gl, l.memoizedState.cache);
    }
    return Xt(l, t, a);
  }
  function Gs(l, t, a) {
    if (l !== null)
      if (l.memoizedProps !== t.pendingProps)
        rl = !0;
      else {
        if (!gi(l, a) && (t.flags & 128) === 0)
          return rl = !1, Wv(
            l,
            t,
            a
          );
        rl = (l.flags & 131072) !== 0;
      }
    else
      rl = !1, K && (t.flags & 1048576) !== 0 && h0(t, Zu, t.index);
    switch (t.lanes = 0, t.tag) {
      case 16:
        l: {
          var u = t.pendingProps;
          if (l = qa(t.elementType), t.type = l, typeof l == "function")
            Tf(l) ? (u = Ga(l, u), t.tag = 1, t = Rs(
              null,
              t,
              l,
              u,
              a
            )) : (t.tag = 0, t = si(
              null,
              t,
              l,
              u,
              a
            ));
          else {
            if (l != null) {
              var e = l.$$typeof;
              if (e === ft) {
                t.tag = 11, t = ps(
                  null,
                  t,
                  l,
                  u,
                  a
                );
                break l;
              } else if (e === L) {
                t.tag = 14, t = Os(
                  null,
                  t,
                  l,
                  u,
                  a
                );
                break l;
              }
            }
            throw t = Ut(l) || l, Error(h(306, t, ""));
          }
        }
        return t;
      case 0:
        return si(
          l,
          t,
          t.type,
          t.pendingProps,
          a
        );
      case 1:
        return u = t.type, e = Ga(
          u,
          t.pendingProps
        ), Rs(
          l,
          t,
          u,
          e,
          a
        );
      case 3:
        l: {
          if (Cl(
            t,
            t.stateNode.containerInfo
          ), l === null) throw Error(h(387));
          u = t.pendingProps;
          var n = t.memoizedState;
          e = n.element, Yf(l, t), $u(t, u, null, a);
          var f = t.memoizedState;
          if (u = f.cache, ta(t, gl, u), u !== n.cache && Hf(
            t,
            [gl],
            a,
            !0
          ), Wu(), u = f.element, n.isDehydrated)
            if (n = {
              element: u,
              isDehydrated: !1,
              cache: f.cache
            }, t.updateQueue.baseState = n, t.memoizedState = n, t.flags & 256) {
              t = qs(
                l,
                t,
                u,
                a
              );
              break l;
            } else if (u !== e) {
              e = yt(
                Error(h(424)),
                t
              ), xu(e), t = qs(
                l,
                t,
                u,
                a
              );
              break l;
            } else {
              switch (l = t.stateNode.containerInfo, l.nodeType) {
                case 9:
                  l = l.body;
                  break;
                default:
                  l = l.nodeName === "HTML" ? l.ownerDocument.body : l;
              }
              for (fl = ht(l.firstChild), Ol = t, K = !0, Pt = null, mt = !0, a = D0(
                t,
                null,
                u,
                a
              ), t.child = a; a; )
                a.flags = a.flags & -3 | 4096, a = a.sibling;
            }
          else {
            if (Ua(), u === e) {
              t = Xt(
                l,
                t,
                a
              );
              break l;
            }
            Dl(l, t, u, a);
          }
          t = t.child;
        }
        return t;
      case 26:
        return sn(l, t), l === null ? (a = Wy(
          t.type,
          null,
          t.pendingProps,
          null
        )) ? t.memoizedState = a : K || (a = t.type, l = t.pendingProps, u = On(
          j.current
        ).createElement(a), u[pl] = t, u[Zl] = l, Ul(u, a, l), El(u), t.stateNode = u) : t.memoizedState = Wy(
          t.type,
          l.memoizedProps,
          t.pendingProps,
          l.memoizedState
        ), null;
      case 27:
        return Ou(t), l === null && K && (u = t.stateNode = Ky(
          t.type,
          t.pendingProps,
          j.current
        ), Ol = t, mt = !0, e = fl, oa(t.type) ? ($i = e, fl = ht(u.firstChild)) : fl = e), Dl(
          l,
          t,
          t.pendingProps.children,
          a
        ), sn(l, t), l === null && (t.flags |= 4194304), t.child;
      case 5:
        return l === null && K && ((e = u = fl) && (u = _m(
          u,
          t.type,
          t.pendingProps,
          mt
        ), u !== null ? (t.stateNode = u, Ol = t, fl = ht(u.firstChild), mt = !1, e = !0) : e = !1), e || la(t)), Ou(t), e = t.type, n = t.pendingProps, f = l !== null ? l.memoizedProps : null, u = n.children, Li(e, n) ? u = null : f !== null && Li(e, f) && (t.flags |= 32), t.memoizedState !== null && (e = Vf(
          l,
          t,
          Xv,
          null,
          null,
          a
        ), he._currentValue = e), sn(l, t), Dl(l, t, u, a), t.child;
      case 6:
        return l === null && K && ((l = a = fl) && (a = pm(
          a,
          t.pendingProps,
          mt
        ), a !== null ? (t.stateNode = a, Ol = t, fl = null, l = !0) : l = !1), l || la(t)), null;
      case 13:
        return Cs(l, t, a);
      case 4:
        return Cl(
          t,
          t.stateNode.containerInfo
        ), u = t.pendingProps, l === null ? t.child = Ba(
          t,
          null,
          u,
          a
        ) : Dl(l, t, u, a), t.child;
      case 11:
        return ps(
          l,
          t,
          t.type,
          t.pendingProps,
          a
        );
      case 7:
        return Dl(
          l,
          t,
          t.pendingProps,
          a
        ), t.child;
      case 8:
        return Dl(
          l,
          t,
          t.pendingProps.children,
          a
        ), t.child;
      case 12:
        return Dl(
          l,
          t,
          t.pendingProps.children,
          a
        ), t.child;
      case 10:
        return u = t.pendingProps, ta(t, t.type, u.value), Dl(l, t, u.children, a), t.child;
      case 9:
        return e = t.type._context, u = t.pendingProps.children, Na(t), e = Ml(e), u = u(e), t.flags |= 1, Dl(l, t, u, a), t.child;
      case 14:
        return Os(
          l,
          t,
          t.type,
          t.pendingProps,
          a
        );
      case 15:
        return Ms(
          l,
          t,
          t.type,
          t.pendingProps,
          a
        );
      case 19:
        return Ys(l, t, a);
      case 31:
        return wv(l, t, a);
      case 22:
        return Ds(
          l,
          t,
          a,
          t.pendingProps
        );
      case 24:
        return Na(t), u = Ml(gl), l === null ? (e = qf(), e === null && (e = nl, n = Nf(), e.pooledCache = n, n.refCount++, n !== null && (e.pooledCacheLanes |= a), e = n), t.memoizedState = { parent: u, cache: e }, Bf(t), ta(t, gl, e)) : ((l.lanes & a) !== 0 && (Yf(l, t), $u(t, null, null, a), Wu()), e = l.memoizedState, n = t.memoizedState, e.parent !== u ? (e = { parent: u, cache: u }, t.memoizedState = e, t.lanes === 0 && (t.memoizedState = t.updateQueue.baseState = e), ta(t, gl, u)) : (u = n.cache, ta(t, gl, u), u !== e.cache && Hf(
          t,
          [gl],
          a,
          !0
        ))), Dl(
          l,
          t,
          t.pendingProps.children,
          a
        ), t.child;
      case 29:
        throw t.pendingProps;
    }
    throw Error(h(156, t.tag));
  }
  function Qt(l) {
    l.flags |= 4;
  }
  function Si(l, t, a, u, e) {
    if ((t = (l.mode & 32) !== 0) && (t = !1), t) {
      if (l.flags |= 16777216, (e & 335544128) === e)
        if (l.stateNode.complete) l.flags |= 8192;
        else if (yy()) l.flags |= 8192;
        else
          throw Ca = we, Cf;
    } else l.flags &= -16777217;
  }
  function js(l, t) {
    if (t.type !== "stylesheet" || (t.state.loading & 4) !== 0)
      l.flags &= -16777217;
    else if (l.flags |= 16777216, !Py(t))
      if (yy()) l.flags |= 8192;
      else
        throw Ca = we, Cf;
  }
  function dn(l, t) {
    t !== null && (l.flags |= 4), l.flags & 16384 && (t = l.tag !== 22 ? Sc() : 536870912, l.lanes |= t, gu |= t);
  }
  function te(l, t) {
    if (!K)
      switch (l.tailMode) {
        case "hidden":
          t = l.tail;
          for (var a = null; t !== null; )
            t.alternate !== null && (a = t), t = t.sibling;
          a === null ? l.tail = null : a.sibling = null;
          break;
        case "collapsed":
          a = l.tail;
          for (var u = null; a !== null; )
            a.alternate !== null && (u = a), a = a.sibling;
          u === null ? t || l.tail === null ? l.tail = null : l.tail.sibling = null : u.sibling = null;
      }
  }
  function il(l) {
    var t = l.alternate !== null && l.alternate.child === l.child, a = 0, u = 0;
    if (t)
      for (var e = l.child; e !== null; )
        a |= e.lanes | e.childLanes, u |= e.subtreeFlags & 65011712, u |= e.flags & 65011712, e.return = l, e = e.sibling;
    else
      for (e = l.child; e !== null; )
        a |= e.lanes | e.childLanes, u |= e.subtreeFlags, u |= e.flags, e.return = l, e = e.sibling;
    return l.subtreeFlags |= u, l.childLanes = a, t;
  }
  function $v(l, t, a) {
    var u = t.pendingProps;
    switch (pf(t), t.tag) {
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return il(t), null;
      case 1:
        return il(t), null;
      case 3:
        return a = t.stateNode, u = null, l !== null && (u = l.memoizedState.cache), t.memoizedState.cache !== u && (t.flags |= 2048), Yt(gl), ml(), a.pendingContext && (a.context = a.pendingContext, a.pendingContext = null), (l === null || l.child === null) && (uu(t) ? Qt(t) : l === null || l.memoizedState.isDehydrated && (t.flags & 256) === 0 || (t.flags |= 1024, Mf())), il(t), null;
      case 26:
        var e = t.type, n = t.memoizedState;
        return l === null ? (Qt(t), n !== null ? (il(t), js(t, n)) : (il(t), Si(
          t,
          e,
          null,
          u,
          a
        ))) : n ? n !== l.memoizedState ? (Qt(t), il(t), js(t, n)) : (il(t), t.flags &= -16777217) : (l = l.memoizedProps, l !== u && Qt(t), il(t), Si(
          t,
          e,
          l,
          u,
          a
        )), null;
      case 27:
        if (Te(t), a = j.current, e = t.type, l !== null && t.stateNode != null)
          l.memoizedProps !== u && Qt(t);
        else {
          if (!u) {
            if (t.stateNode === null)
              throw Error(h(166));
            return il(t), null;
          }
          l = M.current, uu(t) ? S0(t) : (l = Ky(e, u, a), t.stateNode = l, Qt(t));
        }
        return il(t), null;
      case 5:
        if (Te(t), e = t.type, l !== null && t.stateNode != null)
          l.memoizedProps !== u && Qt(t);
        else {
          if (!u) {
            if (t.stateNode === null)
              throw Error(h(166));
            return il(t), null;
          }
          if (n = M.current, uu(t))
            S0(t);
          else {
            var f = On(
              j.current
            );
            switch (n) {
              case 1:
                n = f.createElementNS(
                  "http://www.w3.org/2000/svg",
                  e
                );
                break;
              case 2:
                n = f.createElementNS(
                  "http://www.w3.org/1998/Math/MathML",
                  e
                );
                break;
              default:
                switch (e) {
                  case "svg":
                    n = f.createElementNS(
                      "http://www.w3.org/2000/svg",
                      e
                    );
                    break;
                  case "math":
                    n = f.createElementNS(
                      "http://www.w3.org/1998/Math/MathML",
                      e
                    );
                    break;
                  case "script":
                    n = f.createElement("div"), n.innerHTML = "<script><\/script>", n = n.removeChild(
                      n.firstChild
                    );
                    break;
                  case "select":
                    n = typeof u.is == "string" ? f.createElement("select", {
                      is: u.is
                    }) : f.createElement("select"), u.multiple ? n.multiple = !0 : u.size && (n.size = u.size);
                    break;
                  default:
                    n = typeof u.is == "string" ? f.createElement(e, { is: u.is }) : f.createElement(e);
                }
            }
            n[pl] = t, n[Zl] = u;
            l: for (f = t.child; f !== null; ) {
              if (f.tag === 5 || f.tag === 6)
                n.appendChild(f.stateNode);
              else if (f.tag !== 4 && f.tag !== 27 && f.child !== null) {
                f.child.return = f, f = f.child;
                continue;
              }
              if (f === t) break l;
              for (; f.sibling === null; ) {
                if (f.return === null || f.return === t)
                  break l;
                f = f.return;
              }
              f.sibling.return = f.return, f = f.sibling;
            }
            t.stateNode = n;
            l: switch (Ul(n, e, u), e) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                u = !!u.autoFocus;
                break l;
              case "img":
                u = !0;
                break l;
              default:
                u = !1;
            }
            u && Qt(t);
          }
        }
        return il(t), Si(
          t,
          t.type,
          l === null ? null : l.memoizedProps,
          t.pendingProps,
          a
        ), null;
      case 6:
        if (l && t.stateNode != null)
          l.memoizedProps !== u && Qt(t);
        else {
          if (typeof u != "string" && t.stateNode === null)
            throw Error(h(166));
          if (l = j.current, uu(t)) {
            if (l = t.stateNode, a = t.memoizedProps, u = null, e = Ol, e !== null)
              switch (e.tag) {
                case 27:
                case 5:
                  u = e.memoizedProps;
              }
            l[pl] = t, l = !!(l.nodeValue === a || u !== null && u.suppressHydrationWarning === !0 || Cy(l.nodeValue, a)), l || la(t, !0);
          } else
            l = On(l).createTextNode(
              u
            ), l[pl] = t, t.stateNode = l;
        }
        return il(t), null;
      case 31:
        if (a = t.memoizedState, l === null || l.memoizedState !== null) {
          if (u = uu(t), a !== null) {
            if (l === null) {
              if (!u) throw Error(h(318));
              if (l = t.memoizedState, l = l !== null ? l.dehydrated : null, !l) throw Error(h(557));
              l[pl] = t;
            } else
              Ua(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
            il(t), l = !1;
          } else
            a = Mf(), l !== null && l.memoizedState !== null && (l.memoizedState.hydrationErrors = a), l = !0;
          if (!l)
            return t.flags & 256 ? (at(t), t) : (at(t), null);
          if ((t.flags & 128) !== 0)
            throw Error(h(558));
        }
        return il(t), null;
      case 13:
        if (u = t.memoizedState, l === null || l.memoizedState !== null && l.memoizedState.dehydrated !== null) {
          if (e = uu(t), u !== null && u.dehydrated !== null) {
            if (l === null) {
              if (!e) throw Error(h(318));
              if (e = t.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(h(317));
              e[pl] = t;
            } else
              Ua(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
            il(t), e = !1;
          } else
            e = Mf(), l !== null && l.memoizedState !== null && (l.memoizedState.hydrationErrors = e), e = !0;
          if (!e)
            return t.flags & 256 ? (at(t), t) : (at(t), null);
        }
        return at(t), (t.flags & 128) !== 0 ? (t.lanes = a, t) : (a = u !== null, l = l !== null && l.memoizedState !== null, a && (u = t.child, e = null, u.alternate !== null && u.alternate.memoizedState !== null && u.alternate.memoizedState.cachePool !== null && (e = u.alternate.memoizedState.cachePool.pool), n = null, u.memoizedState !== null && u.memoizedState.cachePool !== null && (n = u.memoizedState.cachePool.pool), n !== e && (u.flags |= 2048)), a !== l && a && (t.child.flags |= 8192), dn(t, t.updateQueue), il(t), null);
      case 4:
        return ml(), l === null && Xi(t.stateNode.containerInfo), il(t), null;
      case 10:
        return Yt(t.type), il(t), null;
      case 19:
        if (T(ol), u = t.memoizedState, u === null) return il(t), null;
        if (e = (t.flags & 128) !== 0, n = u.rendering, n === null)
          if (e) te(u, !1);
          else {
            if (vl !== 0 || l !== null && (l.flags & 128) !== 0)
              for (l = t.child; l !== null; ) {
                if (n = Fe(l), n !== null) {
                  for (t.flags |= 128, te(u, !1), l = n.updateQueue, t.updateQueue = l, dn(t, l), t.subtreeFlags = 0, l = a, a = t.child; a !== null; )
                    v0(a, l), a = a.sibling;
                  return p(
                    ol,
                    ol.current & 1 | 2
                  ), K && Ct(t, u.treeForkCount), t.child;
                }
                l = l.sibling;
              }
            u.tail !== null && kl() > gn && (t.flags |= 128, e = !0, te(u, !1), t.lanes = 4194304);
          }
        else {
          if (!e)
            if (l = Fe(n), l !== null) {
              if (t.flags |= 128, e = !0, l = l.updateQueue, t.updateQueue = l, dn(t, l), te(u, !0), u.tail === null && u.tailMode === "hidden" && !n.alternate && !K)
                return il(t), null;
            } else
              2 * kl() - u.renderingStartTime > gn && a !== 536870912 && (t.flags |= 128, e = !0, te(u, !1), t.lanes = 4194304);
          u.isBackwards ? (n.sibling = t.child, t.child = n) : (l = u.last, l !== null ? l.sibling = n : t.child = n, u.last = n);
        }
        return u.tail !== null ? (l = u.tail, u.rendering = l, u.tail = l.sibling, u.renderingStartTime = kl(), l.sibling = null, a = ol.current, p(
          ol,
          e ? a & 1 | 2 : a & 1
        ), K && Ct(t, u.treeForkCount), l) : (il(t), null);
      case 22:
      case 23:
        return at(t), Qf(), u = t.memoizedState !== null, l !== null ? l.memoizedState !== null !== u && (t.flags |= 8192) : u && (t.flags |= 8192), u ? (a & 536870912) !== 0 && (t.flags & 128) === 0 && (il(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : il(t), a = t.updateQueue, a !== null && dn(t, a.retryQueue), a = null, l !== null && l.memoizedState !== null && l.memoizedState.cachePool !== null && (a = l.memoizedState.cachePool.pool), u = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (u = t.memoizedState.cachePool.pool), u !== a && (t.flags |= 2048), l !== null && T(Ra), null;
      case 24:
        return a = null, l !== null && (a = l.memoizedState.cache), t.memoizedState.cache !== a && (t.flags |= 2048), Yt(gl), il(t), null;
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(h(156, t.tag));
  }
  function kv(l, t) {
    switch (pf(t), t.tag) {
      case 1:
        return l = t.flags, l & 65536 ? (t.flags = l & -65537 | 128, t) : null;
      case 3:
        return Yt(gl), ml(), l = t.flags, (l & 65536) !== 0 && (l & 128) === 0 ? (t.flags = l & -65537 | 128, t) : null;
      case 26:
      case 27:
      case 5:
        return Te(t), null;
      case 31:
        if (t.memoizedState !== null) {
          if (at(t), t.alternate === null)
            throw Error(h(340));
          Ua();
        }
        return l = t.flags, l & 65536 ? (t.flags = l & -65537 | 128, t) : null;
      case 13:
        if (at(t), l = t.memoizedState, l !== null && l.dehydrated !== null) {
          if (t.alternate === null)
            throw Error(h(340));
          Ua();
        }
        return l = t.flags, l & 65536 ? (t.flags = l & -65537 | 128, t) : null;
      case 19:
        return T(ol), null;
      case 4:
        return ml(), null;
      case 10:
        return Yt(t.type), null;
      case 22:
      case 23:
        return at(t), Qf(), l !== null && T(Ra), l = t.flags, l & 65536 ? (t.flags = l & -65537 | 128, t) : null;
      case 24:
        return Yt(gl), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function Xs(l, t) {
    switch (pf(t), t.tag) {
      case 3:
        Yt(gl), ml();
        break;
      case 26:
      case 27:
      case 5:
        Te(t);
        break;
      case 4:
        ml();
        break;
      case 31:
        t.memoizedState !== null && at(t);
        break;
      case 13:
        at(t);
        break;
      case 19:
        T(ol);
        break;
      case 10:
        Yt(t.type);
        break;
      case 22:
      case 23:
        at(t), Qf(), l !== null && T(Ra);
        break;
      case 24:
        Yt(gl);
    }
  }
  function ae(l, t) {
    try {
      var a = t.updateQueue, u = a !== null ? a.lastEffect : null;
      if (u !== null) {
        var e = u.next;
        a = e;
        do {
          if ((a.tag & l) === l) {
            u = void 0;
            var n = a.create, f = a.inst;
            u = n(), f.destroy = u;
          }
          a = a.next;
        } while (a !== e);
      }
    } catch (i) {
      I(t, t.return, i);
    }
  }
  function ia(l, t, a) {
    try {
      var u = t.updateQueue, e = u !== null ? u.lastEffect : null;
      if (e !== null) {
        var n = e.next;
        u = n;
        do {
          if ((u.tag & l) === l) {
            var f = u.inst, i = f.destroy;
            if (i !== void 0) {
              f.destroy = void 0, e = t;
              var c = a, m = i;
              try {
                m();
              } catch (S) {
                I(
                  e,
                  c,
                  S
                );
              }
            }
          }
          u = u.next;
        } while (u !== n);
      }
    } catch (S) {
      I(t, t.return, S);
    }
  }
  function Qs(l) {
    var t = l.updateQueue;
    if (t !== null) {
      var a = l.stateNode;
      try {
        H0(t, a);
      } catch (u) {
        I(l, l.return, u);
      }
    }
  }
  function Zs(l, t, a) {
    a.props = Ga(
      l.type,
      l.memoizedProps
    ), a.state = l.memoizedState;
    try {
      a.componentWillUnmount();
    } catch (u) {
      I(l, t, u);
    }
  }
  function ue(l, t) {
    try {
      var a = l.ref;
      if (a !== null) {
        switch (l.tag) {
          case 26:
          case 27:
          case 5:
            var u = l.stateNode;
            break;
          case 30:
            u = l.stateNode;
            break;
          default:
            u = l.stateNode;
        }
        typeof a == "function" ? l.refCleanup = a(u) : a.current = u;
      }
    } catch (e) {
      I(l, t, e);
    }
  }
  function Ot(l, t) {
    var a = l.ref, u = l.refCleanup;
    if (a !== null)
      if (typeof u == "function")
        try {
          u();
        } catch (e) {
          I(l, t, e);
        } finally {
          l.refCleanup = null, l = l.alternate, l != null && (l.refCleanup = null);
        }
      else if (typeof a == "function")
        try {
          a(null);
        } catch (e) {
          I(l, t, e);
        }
      else a.current = null;
  }
  function xs(l) {
    var t = l.type, a = l.memoizedProps, u = l.stateNode;
    try {
      l: switch (t) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          a.autoFocus && u.focus();
          break l;
        case "img":
          a.src ? u.src = a.src : a.srcSet && (u.srcset = a.srcSet);
      }
    } catch (e) {
      I(l, l.return, e);
    }
  }
  function ri(l, t, a) {
    try {
      var u = l.stateNode;
      rm(u, l.type, a, t), u[Zl] = t;
    } catch (e) {
      I(l, l.return, e);
    }
  }
  function Vs(l) {
    return l.tag === 5 || l.tag === 3 || l.tag === 26 || l.tag === 27 && oa(l.type) || l.tag === 4;
  }
  function bi(l) {
    l: for (; ; ) {
      for (; l.sibling === null; ) {
        if (l.return === null || Vs(l.return)) return null;
        l = l.return;
      }
      for (l.sibling.return = l.return, l = l.sibling; l.tag !== 5 && l.tag !== 6 && l.tag !== 18; ) {
        if (l.tag === 27 && oa(l.type) || l.flags & 2 || l.child === null || l.tag === 4) continue l;
        l.child.return = l, l = l.child;
      }
      if (!(l.flags & 2)) return l.stateNode;
    }
  }
  function zi(l, t, a) {
    var u = l.tag;
    if (u === 5 || u === 6)
      l = l.stateNode, t ? (a.nodeType === 9 ? a.body : a.nodeName === "HTML" ? a.ownerDocument.body : a).insertBefore(l, t) : (t = a.nodeType === 9 ? a.body : a.nodeName === "HTML" ? a.ownerDocument.body : a, t.appendChild(l), a = a._reactRootContainer, a != null || t.onclick !== null || (t.onclick = Nt));
    else if (u !== 4 && (u === 27 && oa(l.type) && (a = l.stateNode, t = null), l = l.child, l !== null))
      for (zi(l, t, a), l = l.sibling; l !== null; )
        zi(l, t, a), l = l.sibling;
  }
  function vn(l, t, a) {
    var u = l.tag;
    if (u === 5 || u === 6)
      l = l.stateNode, t ? a.insertBefore(l, t) : a.appendChild(l);
    else if (u !== 4 && (u === 27 && oa(l.type) && (a = l.stateNode), l = l.child, l !== null))
      for (vn(l, t, a), l = l.sibling; l !== null; )
        vn(l, t, a), l = l.sibling;
  }
  function Ls(l) {
    var t = l.stateNode, a = l.memoizedProps;
    try {
      for (var u = l.type, e = t.attributes; e.length; )
        t.removeAttributeNode(e[0]);
      Ul(t, u, a), t[pl] = l, t[Zl] = a;
    } catch (n) {
      I(l, l.return, n);
    }
  }
  var Zt = !1, bl = !1, Ti = !1, Ks = typeof WeakSet == "function" ? WeakSet : Set, Al = null;
  function Fv(l, t) {
    if (l = l.containerInfo, xi = qn, l = u0(l), of(l)) {
      if ("selectionStart" in l)
        var a = {
          start: l.selectionStart,
          end: l.selectionEnd
        };
      else
        l: {
          a = (a = l.ownerDocument) && a.defaultView || window;
          var u = a.getSelection && a.getSelection();
          if (u && u.rangeCount !== 0) {
            a = u.anchorNode;
            var e = u.anchorOffset, n = u.focusNode;
            u = u.focusOffset;
            try {
              a.nodeType, n.nodeType;
            } catch {
              a = null;
              break l;
            }
            var f = 0, i = -1, c = -1, m = 0, S = 0, z = l, o = null;
            t: for (; ; ) {
              for (var g; z !== a || e !== 0 && z.nodeType !== 3 || (i = f + e), z !== n || u !== 0 && z.nodeType !== 3 || (c = f + u), z.nodeType === 3 && (f += z.nodeValue.length), (g = z.firstChild) !== null; )
                o = z, z = g;
              for (; ; ) {
                if (z === l) break t;
                if (o === a && ++m === e && (i = f), o === n && ++S === u && (c = f), (g = z.nextSibling) !== null) break;
                z = o, o = z.parentNode;
              }
              z = g;
            }
            a = i === -1 || c === -1 ? null : { start: i, end: c };
          } else a = null;
        }
      a = a || { start: 0, end: 0 };
    } else a = null;
    for (Vi = { focusedElem: l, selectionRange: a }, qn = !1, Al = t; Al !== null; )
      if (t = Al, l = t.child, (t.subtreeFlags & 1028) !== 0 && l !== null)
        l.return = t, Al = l;
      else
        for (; Al !== null; ) {
          switch (t = Al, n = t.alternate, l = t.flags, t.tag) {
            case 0:
              if ((l & 4) !== 0 && (l = t.updateQueue, l = l !== null ? l.events : null, l !== null))
                for (a = 0; a < l.length; a++)
                  e = l[a], e.ref.impl = e.nextImpl;
              break;
            case 11:
            case 15:
              break;
            case 1:
              if ((l & 1024) !== 0 && n !== null) {
                l = void 0, a = t, e = n.memoizedProps, n = n.memoizedState, u = a.stateNode;
                try {
                  var O = Ga(
                    a.type,
                    e
                  );
                  l = u.getSnapshotBeforeUpdate(
                    O,
                    n
                  ), u.__reactInternalSnapshotBeforeUpdate = l;
                } catch (N) {
                  I(
                    a,
                    a.return,
                    N
                  );
                }
              }
              break;
            case 3:
              if ((l & 1024) !== 0) {
                if (l = t.stateNode.containerInfo, a = l.nodeType, a === 9)
                  Ji(l);
                else if (a === 1)
                  switch (l.nodeName) {
                    case "HEAD":
                    case "HTML":
                    case "BODY":
                      Ji(l);
                      break;
                    default:
                      l.textContent = "";
                  }
              }
              break;
            case 5:
            case 26:
            case 27:
            case 6:
            case 4:
            case 17:
              break;
            default:
              if ((l & 1024) !== 0) throw Error(h(163));
          }
          if (l = t.sibling, l !== null) {
            l.return = t.return, Al = l;
            break;
          }
          Al = t.return;
        }
  }
  function Js(l, t, a) {
    var u = a.flags;
    switch (a.tag) {
      case 0:
      case 11:
      case 15:
        Vt(l, a), u & 4 && ae(5, a);
        break;
      case 1:
        if (Vt(l, a), u & 4)
          if (l = a.stateNode, t === null)
            try {
              l.componentDidMount();
            } catch (f) {
              I(a, a.return, f);
            }
          else {
            var e = Ga(
              a.type,
              t.memoizedProps
            );
            t = t.memoizedState;
            try {
              l.componentDidUpdate(
                e,
                t,
                l.__reactInternalSnapshotBeforeUpdate
              );
            } catch (f) {
              I(
                a,
                a.return,
                f
              );
            }
          }
        u & 64 && Qs(a), u & 512 && ue(a, a.return);
        break;
      case 3:
        if (Vt(l, a), u & 64 && (l = a.updateQueue, l !== null)) {
          if (t = null, a.child !== null)
            switch (a.child.tag) {
              case 27:
              case 5:
                t = a.child.stateNode;
                break;
              case 1:
                t = a.child.stateNode;
            }
          try {
            H0(l, t);
          } catch (f) {
            I(a, a.return, f);
          }
        }
        break;
      case 27:
        t === null && u & 4 && Ls(a);
      case 26:
      case 5:
        Vt(l, a), t === null && u & 4 && xs(a), u & 512 && ue(a, a.return);
        break;
      case 12:
        Vt(l, a);
        break;
      case 31:
        Vt(l, a), u & 4 && $s(l, a);
        break;
      case 13:
        Vt(l, a), u & 4 && ks(l, a), u & 64 && (l = a.memoizedState, l !== null && (l = l.dehydrated, l !== null && (a = fm.bind(
          null,
          a
        ), Om(l, a))));
        break;
      case 22:
        if (u = a.memoizedState !== null || Zt, !u) {
          t = t !== null && t.memoizedState !== null || bl, e = Zt;
          var n = bl;
          Zt = u, (bl = t) && !n ? Lt(
            l,
            a,
            (a.subtreeFlags & 8772) !== 0
          ) : Vt(l, a), Zt = e, bl = n;
        }
        break;
      case 30:
        break;
      default:
        Vt(l, a);
    }
  }
  function ws(l) {
    var t = l.alternate;
    t !== null && (l.alternate = null, ws(t)), l.child = null, l.deletions = null, l.sibling = null, l.tag === 5 && (t = l.stateNode, t !== null && kn(t)), l.stateNode = null, l.return = null, l.dependencies = null, l.memoizedProps = null, l.memoizedState = null, l.pendingProps = null, l.stateNode = null, l.updateQueue = null;
  }
  var yl = null, Vl = !1;
  function xt(l, t, a) {
    for (a = a.child; a !== null; )
      Ws(l, t, a), a = a.sibling;
  }
  function Ws(l, t, a) {
    if (Fl && typeof Fl.onCommitFiberUnmount == "function")
      try {
        Fl.onCommitFiberUnmount(Mu, a);
      } catch {
      }
    switch (a.tag) {
      case 26:
        bl || Ot(a, t), xt(
          l,
          t,
          a
        ), a.memoizedState ? a.memoizedState.count-- : a.stateNode && (a = a.stateNode, a.parentNode.removeChild(a));
        break;
      case 27:
        bl || Ot(a, t);
        var u = yl, e = Vl;
        oa(a.type) && (yl = a.stateNode, Vl = !1), xt(
          l,
          t,
          a
        ), ve(a.stateNode), yl = u, Vl = e;
        break;
      case 5:
        bl || Ot(a, t);
      case 6:
        if (u = yl, e = Vl, yl = null, xt(
          l,
          t,
          a
        ), yl = u, Vl = e, yl !== null)
          if (Vl)
            try {
              (yl.nodeType === 9 ? yl.body : yl.nodeName === "HTML" ? yl.ownerDocument.body : yl).removeChild(a.stateNode);
            } catch (n) {
              I(
                a,
                t,
                n
              );
            }
          else
            try {
              yl.removeChild(a.stateNode);
            } catch (n) {
              I(
                a,
                t,
                n
              );
            }
        break;
      case 18:
        yl !== null && (Vl ? (l = yl, Qy(
          l.nodeType === 9 ? l.body : l.nodeName === "HTML" ? l.ownerDocument.body : l,
          a.stateNode
        ), _u(l)) : Qy(yl, a.stateNode));
        break;
      case 4:
        u = yl, e = Vl, yl = a.stateNode.containerInfo, Vl = !0, xt(
          l,
          t,
          a
        ), yl = u, Vl = e;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        ia(2, a, t), bl || ia(4, a, t), xt(
          l,
          t,
          a
        );
        break;
      case 1:
        bl || (Ot(a, t), u = a.stateNode, typeof u.componentWillUnmount == "function" && Zs(
          a,
          t,
          u
        )), xt(
          l,
          t,
          a
        );
        break;
      case 21:
        xt(
          l,
          t,
          a
        );
        break;
      case 22:
        bl = (u = bl) || a.memoizedState !== null, xt(
          l,
          t,
          a
        ), bl = u;
        break;
      default:
        xt(
          l,
          t,
          a
        );
    }
  }
  function $s(l, t) {
    if (t.memoizedState === null && (l = t.alternate, l !== null && (l = l.memoizedState, l !== null))) {
      l = l.dehydrated;
      try {
        _u(l);
      } catch (a) {
        I(t, t.return, a);
      }
    }
  }
  function ks(l, t) {
    if (t.memoizedState === null && (l = t.alternate, l !== null && (l = l.memoizedState, l !== null && (l = l.dehydrated, l !== null))))
      try {
        _u(l);
      } catch (a) {
        I(t, t.return, a);
      }
  }
  function Iv(l) {
    switch (l.tag) {
      case 31:
      case 13:
      case 19:
        var t = l.stateNode;
        return t === null && (t = l.stateNode = new Ks()), t;
      case 22:
        return l = l.stateNode, t = l._retryCache, t === null && (t = l._retryCache = new Ks()), t;
      default:
        throw Error(h(435, l.tag));
    }
  }
  function mn(l, t) {
    var a = Iv(l);
    t.forEach(function(u) {
      if (!a.has(u)) {
        a.add(u);
        var e = im.bind(null, l, u);
        u.then(e, e);
      }
    });
  }
  function Ll(l, t) {
    var a = t.deletions;
    if (a !== null)
      for (var u = 0; u < a.length; u++) {
        var e = a[u], n = l, f = t, i = f;
        l: for (; i !== null; ) {
          switch (i.tag) {
            case 27:
              if (oa(i.type)) {
                yl = i.stateNode, Vl = !1;
                break l;
              }
              break;
            case 5:
              yl = i.stateNode, Vl = !1;
              break l;
            case 3:
            case 4:
              yl = i.stateNode.containerInfo, Vl = !0;
              break l;
          }
          i = i.return;
        }
        if (yl === null) throw Error(h(160));
        Ws(n, f, e), yl = null, Vl = !1, n = e.alternate, n !== null && (n.return = null), e.return = null;
      }
    if (t.subtreeFlags & 13886)
      for (t = t.child; t !== null; )
        Fs(t, l), t = t.sibling;
  }
  var bt = null;
  function Fs(l, t) {
    var a = l.alternate, u = l.flags;
    switch (l.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        Ll(t, l), Kl(l), u & 4 && (ia(3, l, l.return), ae(3, l), ia(5, l, l.return));
        break;
      case 1:
        Ll(t, l), Kl(l), u & 512 && (bl || a === null || Ot(a, a.return)), u & 64 && Zt && (l = l.updateQueue, l !== null && (u = l.callbacks, u !== null && (a = l.shared.hiddenCallbacks, l.shared.hiddenCallbacks = a === null ? u : a.concat(u))));
        break;
      case 26:
        var e = bt;
        if (Ll(t, l), Kl(l), u & 512 && (bl || a === null || Ot(a, a.return)), u & 4) {
          var n = a !== null ? a.memoizedState : null;
          if (u = l.memoizedState, a === null)
            if (u === null)
              if (l.stateNode === null) {
                l: {
                  u = l.type, a = l.memoizedProps, e = e.ownerDocument || e;
                  t: switch (u) {
                    case "title":
                      n = e.getElementsByTagName("title")[0], (!n || n[Hu] || n[pl] || n.namespaceURI === "http://www.w3.org/2000/svg" || n.hasAttribute("itemprop")) && (n = e.createElement(u), e.head.insertBefore(
                        n,
                        e.querySelector("head > title")
                      )), Ul(n, u, a), n[pl] = l, El(n), u = n;
                      break l;
                    case "link":
                      var f = Fy(
                        "link",
                        "href",
                        e
                      ).get(u + (a.href || ""));
                      if (f) {
                        for (var i = 0; i < f.length; i++)
                          if (n = f[i], n.getAttribute("href") === (a.href == null || a.href === "" ? null : a.href) && n.getAttribute("rel") === (a.rel == null ? null : a.rel) && n.getAttribute("title") === (a.title == null ? null : a.title) && n.getAttribute("crossorigin") === (a.crossOrigin == null ? null : a.crossOrigin)) {
                            f.splice(i, 1);
                            break t;
                          }
                      }
                      n = e.createElement(u), Ul(n, u, a), e.head.appendChild(n);
                      break;
                    case "meta":
                      if (f = Fy(
                        "meta",
                        "content",
                        e
                      ).get(u + (a.content || ""))) {
                        for (i = 0; i < f.length; i++)
                          if (n = f[i], n.getAttribute("content") === (a.content == null ? null : "" + a.content) && n.getAttribute("name") === (a.name == null ? null : a.name) && n.getAttribute("property") === (a.property == null ? null : a.property) && n.getAttribute("http-equiv") === (a.httpEquiv == null ? null : a.httpEquiv) && n.getAttribute("charset") === (a.charSet == null ? null : a.charSet)) {
                            f.splice(i, 1);
                            break t;
                          }
                      }
                      n = e.createElement(u), Ul(n, u, a), e.head.appendChild(n);
                      break;
                    default:
                      throw Error(h(468, u));
                  }
                  n[pl] = l, El(n), u = n;
                }
                l.stateNode = u;
              } else
                Iy(
                  e,
                  l.type,
                  l.stateNode
                );
            else
              l.stateNode = ky(
                e,
                u,
                l.memoizedProps
              );
          else
            n !== u ? (n === null ? a.stateNode !== null && (a = a.stateNode, a.parentNode.removeChild(a)) : n.count--, u === null ? Iy(
              e,
              l.type,
              l.stateNode
            ) : ky(
              e,
              u,
              l.memoizedProps
            )) : u === null && l.stateNode !== null && ri(
              l,
              l.memoizedProps,
              a.memoizedProps
            );
        }
        break;
      case 27:
        Ll(t, l), Kl(l), u & 512 && (bl || a === null || Ot(a, a.return)), a !== null && u & 4 && ri(
          l,
          l.memoizedProps,
          a.memoizedProps
        );
        break;
      case 5:
        if (Ll(t, l), Kl(l), u & 512 && (bl || a === null || Ot(a, a.return)), l.flags & 32) {
          e = l.stateNode;
          try {
            wa(e, "");
          } catch (O) {
            I(l, l.return, O);
          }
        }
        u & 4 && l.stateNode != null && (e = l.memoizedProps, ri(
          l,
          e,
          a !== null ? a.memoizedProps : e
        )), u & 1024 && (Ti = !0);
        break;
      case 6:
        if (Ll(t, l), Kl(l), u & 4) {
          if (l.stateNode === null)
            throw Error(h(162));
          u = l.memoizedProps, a = l.stateNode;
          try {
            a.nodeValue = u;
          } catch (O) {
            I(l, l.return, O);
          }
        }
        break;
      case 3:
        if (Un = null, e = bt, bt = Mn(t.containerInfo), Ll(t, l), bt = e, Kl(l), u & 4 && a !== null && a.memoizedState.isDehydrated)
          try {
            _u(t.containerInfo);
          } catch (O) {
            I(l, l.return, O);
          }
        Ti && (Ti = !1, Is(l));
        break;
      case 4:
        u = bt, bt = Mn(
          l.stateNode.containerInfo
        ), Ll(t, l), Kl(l), bt = u;
        break;
      case 12:
        Ll(t, l), Kl(l);
        break;
      case 31:
        Ll(t, l), Kl(l), u & 4 && (u = l.updateQueue, u !== null && (l.updateQueue = null, mn(l, u)));
        break;
      case 13:
        Ll(t, l), Kl(l), l.child.flags & 8192 && l.memoizedState !== null != (a !== null && a.memoizedState !== null) && (hn = kl()), u & 4 && (u = l.updateQueue, u !== null && (l.updateQueue = null, mn(l, u)));
        break;
      case 22:
        e = l.memoizedState !== null;
        var c = a !== null && a.memoizedState !== null, m = Zt, S = bl;
        if (Zt = m || e, bl = S || c, Ll(t, l), bl = S, Zt = m, Kl(l), u & 8192)
          l: for (t = l.stateNode, t._visibility = e ? t._visibility & -2 : t._visibility | 1, e && (a === null || c || Zt || bl || ja(l)), a = null, t = l; ; ) {
            if (t.tag === 5 || t.tag === 26) {
              if (a === null) {
                c = a = t;
                try {
                  if (n = c.stateNode, e)
                    f = n.style, typeof f.setProperty == "function" ? f.setProperty("display", "none", "important") : f.display = "none";
                  else {
                    i = c.stateNode;
                    var z = c.memoizedProps.style, o = z != null && z.hasOwnProperty("display") ? z.display : null;
                    i.style.display = o == null || typeof o == "boolean" ? "" : ("" + o).trim();
                  }
                } catch (O) {
                  I(c, c.return, O);
                }
              }
            } else if (t.tag === 6) {
              if (a === null) {
                c = t;
                try {
                  c.stateNode.nodeValue = e ? "" : c.memoizedProps;
                } catch (O) {
                  I(c, c.return, O);
                }
              }
            } else if (t.tag === 18) {
              if (a === null) {
                c = t;
                try {
                  var g = c.stateNode;
                  e ? Zy(g, !0) : Zy(c.stateNode, !1);
                } catch (O) {
                  I(c, c.return, O);
                }
              }
            } else if ((t.tag !== 22 && t.tag !== 23 || t.memoizedState === null || t === l) && t.child !== null) {
              t.child.return = t, t = t.child;
              continue;
            }
            if (t === l) break l;
            for (; t.sibling === null; ) {
              if (t.return === null || t.return === l) break l;
              a === t && (a = null), t = t.return;
            }
            a === t && (a = null), t.sibling.return = t.return, t = t.sibling;
          }
        u & 4 && (u = l.updateQueue, u !== null && (a = u.retryQueue, a !== null && (u.retryQueue = null, mn(l, a))));
        break;
      case 19:
        Ll(t, l), Kl(l), u & 4 && (u = l.updateQueue, u !== null && (l.updateQueue = null, mn(l, u)));
        break;
      case 30:
        break;
      case 21:
        break;
      default:
        Ll(t, l), Kl(l);
    }
  }
  function Kl(l) {
    var t = l.flags;
    if (t & 2) {
      try {
        for (var a, u = l.return; u !== null; ) {
          if (Vs(u)) {
            a = u;
            break;
          }
          u = u.return;
        }
        if (a == null) throw Error(h(160));
        switch (a.tag) {
          case 27:
            var e = a.stateNode, n = bi(l);
            vn(l, n, e);
            break;
          case 5:
            var f = a.stateNode;
            a.flags & 32 && (wa(f, ""), a.flags &= -33);
            var i = bi(l);
            vn(l, i, f);
            break;
          case 3:
          case 4:
            var c = a.stateNode.containerInfo, m = bi(l);
            zi(
              l,
              m,
              c
            );
            break;
          default:
            throw Error(h(161));
        }
      } catch (S) {
        I(l, l.return, S);
      }
      l.flags &= -3;
    }
    t & 4096 && (l.flags &= -4097);
  }
  function Is(l) {
    if (l.subtreeFlags & 1024)
      for (l = l.child; l !== null; ) {
        var t = l;
        Is(t), t.tag === 5 && t.flags & 1024 && t.stateNode.reset(), l = l.sibling;
      }
  }
  function Vt(l, t) {
    if (t.subtreeFlags & 8772)
      for (t = t.child; t !== null; )
        Js(l, t.alternate, t), t = t.sibling;
  }
  function ja(l) {
    for (l = l.child; l !== null; ) {
      var t = l;
      switch (t.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          ia(4, t, t.return), ja(t);
          break;
        case 1:
          Ot(t, t.return);
          var a = t.stateNode;
          typeof a.componentWillUnmount == "function" && Zs(
            t,
            t.return,
            a
          ), ja(t);
          break;
        case 27:
          ve(t.stateNode);
        case 26:
        case 5:
          Ot(t, t.return), ja(t);
          break;
        case 22:
          t.memoizedState === null && ja(t);
          break;
        case 30:
          ja(t);
          break;
        default:
          ja(t);
      }
      l = l.sibling;
    }
  }
  function Lt(l, t, a) {
    for (a = a && (t.subtreeFlags & 8772) !== 0, t = t.child; t !== null; ) {
      var u = t.alternate, e = l, n = t, f = n.flags;
      switch (n.tag) {
        case 0:
        case 11:
        case 15:
          Lt(
            e,
            n,
            a
          ), ae(4, n);
          break;
        case 1:
          if (Lt(
            e,
            n,
            a
          ), u = n, e = u.stateNode, typeof e.componentDidMount == "function")
            try {
              e.componentDidMount();
            } catch (m) {
              I(u, u.return, m);
            }
          if (u = n, e = u.updateQueue, e !== null) {
            var i = u.stateNode;
            try {
              var c = e.shared.hiddenCallbacks;
              if (c !== null)
                for (e.shared.hiddenCallbacks = null, e = 0; e < c.length; e++)
                  U0(c[e], i);
            } catch (m) {
              I(u, u.return, m);
            }
          }
          a && f & 64 && Qs(n), ue(n, n.return);
          break;
        case 27:
          Ls(n);
        case 26:
        case 5:
          Lt(
            e,
            n,
            a
          ), a && u === null && f & 4 && xs(n), ue(n, n.return);
          break;
        case 12:
          Lt(
            e,
            n,
            a
          );
          break;
        case 31:
          Lt(
            e,
            n,
            a
          ), a && f & 4 && $s(e, n);
          break;
        case 13:
          Lt(
            e,
            n,
            a
          ), a && f & 4 && ks(e, n);
          break;
        case 22:
          n.memoizedState === null && Lt(
            e,
            n,
            a
          ), ue(n, n.return);
          break;
        case 30:
          break;
        default:
          Lt(
            e,
            n,
            a
          );
      }
      t = t.sibling;
    }
  }
  function Ei(l, t) {
    var a = null;
    l !== null && l.memoizedState !== null && l.memoizedState.cachePool !== null && (a = l.memoizedState.cachePool.pool), l = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (l = t.memoizedState.cachePool.pool), l !== a && (l != null && l.refCount++, a != null && Vu(a));
  }
  function Ai(l, t) {
    l = null, t.alternate !== null && (l = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== l && (t.refCount++, l != null && Vu(l));
  }
  function zt(l, t, a, u) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; )
        Ps(
          l,
          t,
          a,
          u
        ), t = t.sibling;
  }
  function Ps(l, t, a, u) {
    var e = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        zt(
          l,
          t,
          a,
          u
        ), e & 2048 && ae(9, t);
        break;
      case 1:
        zt(
          l,
          t,
          a,
          u
        );
        break;
      case 3:
        zt(
          l,
          t,
          a,
          u
        ), e & 2048 && (l = null, t.alternate !== null && (l = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== l && (t.refCount++, l != null && Vu(l)));
        break;
      case 12:
        if (e & 2048) {
          zt(
            l,
            t,
            a,
            u
          ), l = t.stateNode;
          try {
            var n = t.memoizedProps, f = n.id, i = n.onPostCommit;
            typeof i == "function" && i(
              f,
              t.alternate === null ? "mount" : "update",
              l.passiveEffectDuration,
              -0
            );
          } catch (c) {
            I(t, t.return, c);
          }
        } else
          zt(
            l,
            t,
            a,
            u
          );
        break;
      case 31:
        zt(
          l,
          t,
          a,
          u
        );
        break;
      case 13:
        zt(
          l,
          t,
          a,
          u
        );
        break;
      case 23:
        break;
      case 22:
        n = t.stateNode, f = t.alternate, t.memoizedState !== null ? n._visibility & 2 ? zt(
          l,
          t,
          a,
          u
        ) : ee(l, t) : n._visibility & 2 ? zt(
          l,
          t,
          a,
          u
        ) : (n._visibility |= 2, mu(
          l,
          t,
          a,
          u,
          (t.subtreeFlags & 10256) !== 0 || !1
        )), e & 2048 && Ei(f, t);
        break;
      case 24:
        zt(
          l,
          t,
          a,
          u
        ), e & 2048 && Ai(t.alternate, t);
        break;
      default:
        zt(
          l,
          t,
          a,
          u
        );
    }
  }
  function mu(l, t, a, u, e) {
    for (e = e && ((t.subtreeFlags & 10256) !== 0 || !1), t = t.child; t !== null; ) {
      var n = l, f = t, i = a, c = u, m = f.flags;
      switch (f.tag) {
        case 0:
        case 11:
        case 15:
          mu(
            n,
            f,
            i,
            c,
            e
          ), ae(8, f);
          break;
        case 23:
          break;
        case 22:
          var S = f.stateNode;
          f.memoizedState !== null ? S._visibility & 2 ? mu(
            n,
            f,
            i,
            c,
            e
          ) : ee(
            n,
            f
          ) : (S._visibility |= 2, mu(
            n,
            f,
            i,
            c,
            e
          )), e && m & 2048 && Ei(
            f.alternate,
            f
          );
          break;
        case 24:
          mu(
            n,
            f,
            i,
            c,
            e
          ), e && m & 2048 && Ai(f.alternate, f);
          break;
        default:
          mu(
            n,
            f,
            i,
            c,
            e
          );
      }
      t = t.sibling;
    }
  }
  function ee(l, t) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; ) {
        var a = l, u = t, e = u.flags;
        switch (u.tag) {
          case 22:
            ee(a, u), e & 2048 && Ei(
              u.alternate,
              u
            );
            break;
          case 24:
            ee(a, u), e & 2048 && Ai(u.alternate, u);
            break;
          default:
            ee(a, u);
        }
        t = t.sibling;
      }
  }
  var ne = 8192;
  function ou(l, t, a) {
    if (l.subtreeFlags & ne)
      for (l = l.child; l !== null; )
        ly(
          l,
          t,
          a
        ), l = l.sibling;
  }
  function ly(l, t, a) {
    switch (l.tag) {
      case 26:
        ou(
          l,
          t,
          a
        ), l.flags & ne && l.memoizedState !== null && jm(
          a,
          bt,
          l.memoizedState,
          l.memoizedProps
        );
        break;
      case 5:
        ou(
          l,
          t,
          a
        );
        break;
      case 3:
      case 4:
        var u = bt;
        bt = Mn(l.stateNode.containerInfo), ou(
          l,
          t,
          a
        ), bt = u;
        break;
      case 22:
        l.memoizedState === null && (u = l.alternate, u !== null && u.memoizedState !== null ? (u = ne, ne = 16777216, ou(
          l,
          t,
          a
        ), ne = u) : ou(
          l,
          t,
          a
        ));
        break;
      default:
        ou(
          l,
          t,
          a
        );
    }
  }
  function ty(l) {
    var t = l.alternate;
    if (t !== null && (l = t.child, l !== null)) {
      t.child = null;
      do
        t = l.sibling, l.sibling = null, l = t;
      while (l !== null);
    }
  }
  function fe(l) {
    var t = l.deletions;
    if ((l.flags & 16) !== 0) {
      if (t !== null)
        for (var a = 0; a < t.length; a++) {
          var u = t[a];
          Al = u, uy(
            u,
            l
          );
        }
      ty(l);
    }
    if (l.subtreeFlags & 10256)
      for (l = l.child; l !== null; )
        ay(l), l = l.sibling;
  }
  function ay(l) {
    switch (l.tag) {
      case 0:
      case 11:
      case 15:
        fe(l), l.flags & 2048 && ia(9, l, l.return);
        break;
      case 3:
        fe(l);
        break;
      case 12:
        fe(l);
        break;
      case 22:
        var t = l.stateNode;
        l.memoizedState !== null && t._visibility & 2 && (l.return === null || l.return.tag !== 13) ? (t._visibility &= -3, on(l)) : fe(l);
        break;
      default:
        fe(l);
    }
  }
  function on(l) {
    var t = l.deletions;
    if ((l.flags & 16) !== 0) {
      if (t !== null)
        for (var a = 0; a < t.length; a++) {
          var u = t[a];
          Al = u, uy(
            u,
            l
          );
        }
      ty(l);
    }
    for (l = l.child; l !== null; ) {
      switch (t = l, t.tag) {
        case 0:
        case 11:
        case 15:
          ia(8, t, t.return), on(t);
          break;
        case 22:
          a = t.stateNode, a._visibility & 2 && (a._visibility &= -3, on(t));
          break;
        default:
          on(t);
      }
      l = l.sibling;
    }
  }
  function uy(l, t) {
    for (; Al !== null; ) {
      var a = Al;
      switch (a.tag) {
        case 0:
        case 11:
        case 15:
          ia(8, a, t);
          break;
        case 23:
        case 22:
          if (a.memoizedState !== null && a.memoizedState.cachePool !== null) {
            var u = a.memoizedState.cachePool.pool;
            u != null && u.refCount++;
          }
          break;
        case 24:
          Vu(a.memoizedState.cache);
      }
      if (u = a.child, u !== null) u.return = a, Al = u;
      else
        l: for (a = l; Al !== null; ) {
          u = Al;
          var e = u.sibling, n = u.return;
          if (ws(u), u === a) {
            Al = null;
            break l;
          }
          if (e !== null) {
            e.return = n, Al = e;
            break l;
          }
          Al = n;
        }
    }
  }
  var Pv = {
    getCacheForType: function(l) {
      var t = Ml(gl), a = t.data.get(l);
      return a === void 0 && (a = l(), t.data.set(l, a)), a;
    },
    cacheSignal: function() {
      return Ml(gl).controller.signal;
    }
  }, lm = typeof WeakMap == "function" ? WeakMap : Map, W = 0, nl = null, X = null, Z = 0, F = 0, ut = null, ca = !1, hu = !1, _i = !1, Kt = 0, vl = 0, sa = 0, Xa = 0, pi = 0, et = 0, gu = 0, ie = null, Jl = null, Oi = !1, hn = 0, ey = 0, gn = 1 / 0, Sn = null, ya = null, Tl = 0, da = null, Su = null, Jt = 0, Mi = 0, Di = null, ny = null, ce = 0, Ui = null;
  function nt() {
    return (W & 2) !== 0 && Z !== 0 ? Z & -Z : r.T !== null ? Bi() : Tc();
  }
  function fy() {
    if (et === 0)
      if ((Z & 536870912) === 0 || K) {
        var l = _e;
        _e <<= 1, (_e & 3932160) === 0 && (_e = 262144), et = l;
      } else et = 536870912;
    return l = tt.current, l !== null && (l.flags |= 32), et;
  }
  function wl(l, t, a) {
    (l === nl && (F === 2 || F === 9) || l.cancelPendingCommit !== null) && (ru(l, 0), va(
      l,
      Z,
      et,
      !1
    )), Uu(l, a), ((W & 2) === 0 || l !== nl) && (l === nl && ((W & 2) === 0 && (Xa |= a), vl === 4 && va(
      l,
      Z,
      et,
      !1
    )), Mt(l));
  }
  function iy(l, t, a) {
    if ((W & 6) !== 0) throw Error(h(327));
    var u = !a && (t & 127) === 0 && (t & l.expiredLanes) === 0 || Du(l, t), e = u ? um(l, t) : Ni(l, t, !0), n = u;
    do {
      if (e === 0) {
        hu && !u && va(l, t, 0, !1);
        break;
      } else {
        if (a = l.current.alternate, n && !tm(a)) {
          e = Ni(l, t, !1), n = !1;
          continue;
        }
        if (e === 2) {
          if (n = t, l.errorRecoveryDisabledLanes & n)
            var f = 0;
          else
            f = l.pendingLanes & -536870913, f = f !== 0 ? f : f & 536870912 ? 536870912 : 0;
          if (f !== 0) {
            t = f;
            l: {
              var i = l;
              e = ie;
              var c = i.current.memoizedState.isDehydrated;
              if (c && (ru(i, f).flags |= 256), f = Ni(
                i,
                f,
                !1
              ), f !== 2) {
                if (_i && !c) {
                  i.errorRecoveryDisabledLanes |= n, Xa |= n, e = 4;
                  break l;
                }
                n = Jl, Jl = e, n !== null && (Jl === null ? Jl = n : Jl.push.apply(
                  Jl,
                  n
                ));
              }
              e = f;
            }
            if (n = !1, e !== 2) continue;
          }
        }
        if (e === 1) {
          ru(l, 0), va(l, t, 0, !0);
          break;
        }
        l: {
          switch (u = l, n = e, n) {
            case 0:
            case 1:
              throw Error(h(345));
            case 4:
              if ((t & 4194048) !== t) break;
            case 6:
              va(
                u,
                t,
                et,
                !ca
              );
              break l;
            case 2:
              Jl = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(h(329));
          }
          if ((t & 62914560) === t && (e = hn + 300 - kl(), 10 < e)) {
            if (va(
              u,
              t,
              et,
              !ca
            ), Oe(u, 0, !0) !== 0) break l;
            Jt = t, u.timeoutHandle = jy(
              cy.bind(
                null,
                u,
                a,
                Jl,
                Sn,
                Oi,
                t,
                et,
                Xa,
                gu,
                ca,
                n,
                "Throttled",
                -0,
                0
              ),
              e
            );
            break l;
          }
          cy(
            u,
            a,
            Jl,
            Sn,
            Oi,
            t,
            et,
            Xa,
            gu,
            ca,
            n,
            null,
            -0,
            0
          );
        }
      }
      break;
    } while (!0);
    Mt(l);
  }
  function cy(l, t, a, u, e, n, f, i, c, m, S, z, o, g) {
    if (l.timeoutHandle = -1, z = t.subtreeFlags, z & 8192 || (z & 16785408) === 16785408) {
      z = {
        stylesheets: null,
        count: 0,
        imgCount: 0,
        imgBytes: 0,
        suspenseyImages: [],
        waitingForImages: !0,
        waitingForViewTransition: !1,
        unsuspend: Nt
      }, ly(
        t,
        n,
        z
      );
      var O = (n & 62914560) === n ? hn - kl() : (n & 4194048) === n ? ey - kl() : 0;
      if (O = Xm(
        z,
        O
      ), O !== null) {
        Jt = n, l.cancelPendingCommit = O(
          gy.bind(
            null,
            l,
            t,
            n,
            a,
            u,
            e,
            f,
            i,
            c,
            S,
            z,
            null,
            o,
            g
          )
        ), va(l, n, f, !m);
        return;
      }
    }
    gy(
      l,
      t,
      n,
      a,
      u,
      e,
      f,
      i,
      c
    );
  }
  function tm(l) {
    for (var t = l; ; ) {
      var a = t.tag;
      if ((a === 0 || a === 11 || a === 15) && t.flags & 16384 && (a = t.updateQueue, a !== null && (a = a.stores, a !== null)))
        for (var u = 0; u < a.length; u++) {
          var e = a[u], n = e.getSnapshot;
          e = e.value;
          try {
            if (!Pl(n(), e)) return !1;
          } catch {
            return !1;
          }
        }
      if (a = t.child, t.subtreeFlags & 16384 && a !== null)
        a.return = t, t = a;
      else {
        if (t === l) break;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === l) return !0;
          t = t.return;
        }
        t.sibling.return = t.return, t = t.sibling;
      }
    }
    return !0;
  }
  function va(l, t, a, u) {
    t &= ~pi, t &= ~Xa, l.suspendedLanes |= t, l.pingedLanes &= ~t, u && (l.warmLanes |= t), u = l.expirationTimes;
    for (var e = t; 0 < e; ) {
      var n = 31 - Il(e), f = 1 << n;
      u[n] = -1, e &= ~f;
    }
    a !== 0 && rc(l, a, t);
  }
  function rn() {
    return (W & 6) === 0 ? (se(0), !1) : !0;
  }
  function Hi() {
    if (X !== null) {
      if (F === 0)
        var l = X.return;
      else
        l = X, Bt = Ha = null, Jf(l), cu = null, Ku = 0, l = X;
      for (; l !== null; )
        Xs(l.alternate, l), l = l.return;
      X = null;
    }
  }
  function ru(l, t) {
    var a = l.timeoutHandle;
    a !== -1 && (l.timeoutHandle = -1, Tm(a)), a = l.cancelPendingCommit, a !== null && (l.cancelPendingCommit = null, a()), Jt = 0, Hi(), nl = l, X = a = qt(l.current, null), Z = t, F = 0, ut = null, ca = !1, hu = Du(l, t), _i = !1, gu = et = pi = Xa = sa = vl = 0, Jl = ie = null, Oi = !1, (t & 8) !== 0 && (t |= t & 32);
    var u = l.entangledLanes;
    if (u !== 0)
      for (l = l.entanglements, u &= t; 0 < u; ) {
        var e = 31 - Il(u), n = 1 << e;
        t |= l[e], u &= ~n;
      }
    return Kt = t, je(), a;
  }
  function sy(l, t) {
    Y = null, r.H = Pu, t === iu || t === Je ? (t = p0(), F = 3) : t === Cf ? (t = p0(), F = 4) : F = t === ci ? 8 : t !== null && typeof t == "object" && typeof t.then == "function" ? 6 : 1, ut = t, X === null && (vl = 1, fn(
      l,
      yt(t, l.current)
    ));
  }
  function yy() {
    var l = tt.current;
    return l === null ? !0 : (Z & 4194048) === Z ? ot === null : (Z & 62914560) === Z || (Z & 536870912) !== 0 ? l === ot : !1;
  }
  function dy() {
    var l = r.H;
    return r.H = Pu, l === null ? Pu : l;
  }
  function vy() {
    var l = r.A;
    return r.A = Pv, l;
  }
  function bn() {
    vl = 4, ca || (Z & 4194048) !== Z && tt.current !== null || (hu = !0), (sa & 134217727) === 0 && (Xa & 134217727) === 0 || nl === null || va(
      nl,
      Z,
      et,
      !1
    );
  }
  function Ni(l, t, a) {
    var u = W;
    W |= 2;
    var e = dy(), n = vy();
    (nl !== l || Z !== t) && (Sn = null, ru(l, t)), t = !1;
    var f = vl;
    l: do
      try {
        if (F !== 0 && X !== null) {
          var i = X, c = ut;
          switch (F) {
            case 8:
              Hi(), f = 6;
              break l;
            case 3:
            case 2:
            case 9:
            case 6:
              tt.current === null && (t = !0);
              var m = F;
              if (F = 0, ut = null, bu(l, i, c, m), a && hu) {
                f = 0;
                break l;
              }
              break;
            default:
              m = F, F = 0, ut = null, bu(l, i, c, m);
          }
        }
        am(), f = vl;
        break;
      } catch (S) {
        sy(l, S);
      }
    while (!0);
    return t && l.shellSuspendCounter++, Bt = Ha = null, W = u, r.H = e, r.A = n, X === null && (nl = null, Z = 0, je()), f;
  }
  function am() {
    for (; X !== null; ) my(X);
  }
  function um(l, t) {
    var a = W;
    W |= 2;
    var u = dy(), e = vy();
    nl !== l || Z !== t ? (Sn = null, gn = kl() + 500, ru(l, t)) : hu = Du(
      l,
      t
    );
    l: do
      try {
        if (F !== 0 && X !== null) {
          t = X;
          var n = ut;
          t: switch (F) {
            case 1:
              F = 0, ut = null, bu(l, t, n, 1);
              break;
            case 2:
            case 9:
              if (A0(n)) {
                F = 0, ut = null, oy(t);
                break;
              }
              t = function() {
                F !== 2 && F !== 9 || nl !== l || (F = 7), Mt(l);
              }, n.then(t, t);
              break l;
            case 3:
              F = 7;
              break l;
            case 4:
              F = 5;
              break l;
            case 7:
              A0(n) ? (F = 0, ut = null, oy(t)) : (F = 0, ut = null, bu(l, t, n, 7));
              break;
            case 5:
              var f = null;
              switch (X.tag) {
                case 26:
                  f = X.memoizedState;
                case 5:
                case 27:
                  var i = X;
                  if (f ? Py(f) : i.stateNode.complete) {
                    F = 0, ut = null;
                    var c = i.sibling;
                    if (c !== null) X = c;
                    else {
                      var m = i.return;
                      m !== null ? (X = m, zn(m)) : X = null;
                    }
                    break t;
                  }
              }
              F = 0, ut = null, bu(l, t, n, 5);
              break;
            case 6:
              F = 0, ut = null, bu(l, t, n, 6);
              break;
            case 8:
              Hi(), vl = 6;
              break l;
            default:
              throw Error(h(462));
          }
        }
        em();
        break;
      } catch (S) {
        sy(l, S);
      }
    while (!0);
    return Bt = Ha = null, r.H = u, r.A = e, W = a, X !== null ? 0 : (nl = null, Z = 0, je(), vl);
  }
  function em() {
    for (; X !== null && !Md(); )
      my(X);
  }
  function my(l) {
    var t = Gs(l.alternate, l, Kt);
    l.memoizedProps = l.pendingProps, t === null ? zn(l) : X = t;
  }
  function oy(l) {
    var t = l, a = t.alternate;
    switch (t.tag) {
      case 15:
      case 0:
        t = Ns(
          a,
          t,
          t.pendingProps,
          t.type,
          void 0,
          Z
        );
        break;
      case 11:
        t = Ns(
          a,
          t,
          t.pendingProps,
          t.type.render,
          t.ref,
          Z
        );
        break;
      case 5:
        Jf(t);
      default:
        Xs(a, t), t = X = v0(t, Kt), t = Gs(a, t, Kt);
    }
    l.memoizedProps = l.pendingProps, t === null ? zn(l) : X = t;
  }
  function bu(l, t, a, u) {
    Bt = Ha = null, Jf(t), cu = null, Ku = 0;
    var e = t.return;
    try {
      if (Jv(
        l,
        e,
        t,
        a,
        Z
      )) {
        vl = 1, fn(
          l,
          yt(a, l.current)
        ), X = null;
        return;
      }
    } catch (n) {
      if (e !== null) throw X = e, n;
      vl = 1, fn(
        l,
        yt(a, l.current)
      ), X = null;
      return;
    }
    t.flags & 32768 ? (K || u === 1 ? l = !0 : hu || (Z & 536870912) !== 0 ? l = !1 : (ca = l = !0, (u === 2 || u === 9 || u === 3 || u === 6) && (u = tt.current, u !== null && u.tag === 13 && (u.flags |= 16384))), hy(t, l)) : zn(t);
  }
  function zn(l) {
    var t = l;
    do {
      if ((t.flags & 32768) !== 0) {
        hy(
          t,
          ca
        );
        return;
      }
      l = t.return;
      var a = $v(
        t.alternate,
        t,
        Kt
      );
      if (a !== null) {
        X = a;
        return;
      }
      if (t = t.sibling, t !== null) {
        X = t;
        return;
      }
      X = t = l;
    } while (t !== null);
    vl === 0 && (vl = 5);
  }
  function hy(l, t) {
    do {
      var a = kv(l.alternate, l);
      if (a !== null) {
        a.flags &= 32767, X = a;
        return;
      }
      if (a = l.return, a !== null && (a.flags |= 32768, a.subtreeFlags = 0, a.deletions = null), !t && (l = l.sibling, l !== null)) {
        X = l;
        return;
      }
      X = l = a;
    } while (l !== null);
    vl = 6, X = null;
  }
  function gy(l, t, a, u, e, n, f, i, c) {
    l.cancelPendingCommit = null;
    do
      Tn();
    while (Tl !== 0);
    if ((W & 6) !== 0) throw Error(h(327));
    if (t !== null) {
      if (t === l.current) throw Error(h(177));
      if (n = t.lanes | t.childLanes, n |= bf, Gd(
        l,
        a,
        n,
        f,
        i,
        c
      ), l === nl && (X = nl = null, Z = 0), Su = t, da = l, Jt = a, Mi = n, Di = e, ny = u, (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? (l.callbackNode = null, l.callbackPriority = 0, cm(Ee, function() {
        return Ty(), null;
      })) : (l.callbackNode = null, l.callbackPriority = 0), u = (t.flags & 13878) !== 0, (t.subtreeFlags & 13878) !== 0 || u) {
        u = r.T, r.T = null, e = _.p, _.p = 2, f = W, W |= 4;
        try {
          Fv(l, t, a);
        } finally {
          W = f, _.p = e, r.T = u;
        }
      }
      Tl = 1, Sy(), ry(), by();
    }
  }
  function Sy() {
    if (Tl === 1) {
      Tl = 0;
      var l = da, t = Su, a = (t.flags & 13878) !== 0;
      if ((t.subtreeFlags & 13878) !== 0 || a) {
        a = r.T, r.T = null;
        var u = _.p;
        _.p = 2;
        var e = W;
        W |= 4;
        try {
          Fs(t, l);
          var n = Vi, f = u0(l.containerInfo), i = n.focusedElem, c = n.selectionRange;
          if (f !== i && i && i.ownerDocument && a0(
            i.ownerDocument.documentElement,
            i
          )) {
            if (c !== null && of(i)) {
              var m = c.start, S = c.end;
              if (S === void 0 && (S = m), "selectionStart" in i)
                i.selectionStart = m, i.selectionEnd = Math.min(
                  S,
                  i.value.length
                );
              else {
                var z = i.ownerDocument || document, o = z && z.defaultView || window;
                if (o.getSelection) {
                  var g = o.getSelection(), O = i.textContent.length, N = Math.min(c.start, O), al = c.end === void 0 ? N : Math.min(c.end, O);
                  !g.extend && N > al && (f = al, al = N, N = f);
                  var d = t0(
                    i,
                    N
                  ), s = t0(
                    i,
                    al
                  );
                  if (d && s && (g.rangeCount !== 1 || g.anchorNode !== d.node || g.anchorOffset !== d.offset || g.focusNode !== s.node || g.focusOffset !== s.offset)) {
                    var v = z.createRange();
                    v.setStart(d.node, d.offset), g.removeAllRanges(), N > al ? (g.addRange(v), g.extend(s.node, s.offset)) : (v.setEnd(s.node, s.offset), g.addRange(v));
                  }
                }
              }
            }
            for (z = [], g = i; g = g.parentNode; )
              g.nodeType === 1 && z.push({
                element: g,
                left: g.scrollLeft,
                top: g.scrollTop
              });
            for (typeof i.focus == "function" && i.focus(), i = 0; i < z.length; i++) {
              var b = z[i];
              b.element.scrollLeft = b.left, b.element.scrollTop = b.top;
            }
          }
          qn = !!xi, Vi = xi = null;
        } finally {
          W = e, _.p = u, r.T = a;
        }
      }
      l.current = t, Tl = 2;
    }
  }
  function ry() {
    if (Tl === 2) {
      Tl = 0;
      var l = da, t = Su, a = (t.flags & 8772) !== 0;
      if ((t.subtreeFlags & 8772) !== 0 || a) {
        a = r.T, r.T = null;
        var u = _.p;
        _.p = 2;
        var e = W;
        W |= 4;
        try {
          Js(l, t.alternate, t);
        } finally {
          W = e, _.p = u, r.T = a;
        }
      }
      Tl = 3;
    }
  }
  function by() {
    if (Tl === 4 || Tl === 3) {
      Tl = 0, Dd();
      var l = da, t = Su, a = Jt, u = ny;
      (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? Tl = 5 : (Tl = 0, Su = da = null, zy(l, l.pendingLanes));
      var e = l.pendingLanes;
      if (e === 0 && (ya = null), Wn(a), t = t.stateNode, Fl && typeof Fl.onCommitFiberRoot == "function")
        try {
          Fl.onCommitFiberRoot(
            Mu,
            t,
            void 0,
            (t.current.flags & 128) === 128
          );
        } catch {
        }
      if (u !== null) {
        t = r.T, e = _.p, _.p = 2, r.T = null;
        try {
          for (var n = l.onRecoverableError, f = 0; f < u.length; f++) {
            var i = u[f];
            n(i.value, {
              componentStack: i.stack
            });
          }
        } finally {
          r.T = t, _.p = e;
        }
      }
      (Jt & 3) !== 0 && Tn(), Mt(l), e = l.pendingLanes, (a & 261930) !== 0 && (e & 42) !== 0 ? l === Ui ? ce++ : (ce = 0, Ui = l) : ce = 0, se(0);
    }
  }
  function zy(l, t) {
    (l.pooledCacheLanes &= t) === 0 && (t = l.pooledCache, t != null && (l.pooledCache = null, Vu(t)));
  }
  function Tn() {
    return Sy(), ry(), by(), Ty();
  }
  function Ty() {
    if (Tl !== 5) return !1;
    var l = da, t = Mi;
    Mi = 0;
    var a = Wn(Jt), u = r.T, e = _.p;
    try {
      _.p = 32 > a ? 32 : a, r.T = null, a = Di, Di = null;
      var n = da, f = Jt;
      if (Tl = 0, Su = da = null, Jt = 0, (W & 6) !== 0) throw Error(h(331));
      var i = W;
      if (W |= 4, ay(n.current), Ps(
        n,
        n.current,
        f,
        a
      ), W = i, se(0, !1), Fl && typeof Fl.onPostCommitFiberRoot == "function")
        try {
          Fl.onPostCommitFiberRoot(Mu, n);
        } catch {
        }
      return !0;
    } finally {
      _.p = e, r.T = u, zy(l, t);
    }
  }
  function Ey(l, t, a) {
    t = yt(a, t), t = ii(l.stateNode, t, 2), l = ea(l, t, 2), l !== null && (Uu(l, 2), Mt(l));
  }
  function I(l, t, a) {
    if (l.tag === 3)
      Ey(l, l, a);
    else
      for (; t !== null; ) {
        if (t.tag === 3) {
          Ey(
            t,
            l,
            a
          );
          break;
        } else if (t.tag === 1) {
          var u = t.stateNode;
          if (typeof t.type.getDerivedStateFromError == "function" || typeof u.componentDidCatch == "function" && (ya === null || !ya.has(u))) {
            l = yt(a, l), a = As(2), u = ea(t, a, 2), u !== null && (_s(
              a,
              u,
              t,
              l
            ), Uu(u, 2), Mt(u));
            break;
          }
        }
        t = t.return;
      }
  }
  function Ri(l, t, a) {
    var u = l.pingCache;
    if (u === null) {
      u = l.pingCache = new lm();
      var e = /* @__PURE__ */ new Set();
      u.set(t, e);
    } else
      e = u.get(t), e === void 0 && (e = /* @__PURE__ */ new Set(), u.set(t, e));
    e.has(a) || (_i = !0, e.add(a), l = nm.bind(null, l, t, a), t.then(l, l));
  }
  function nm(l, t, a) {
    var u = l.pingCache;
    u !== null && u.delete(t), l.pingedLanes |= l.suspendedLanes & a, l.warmLanes &= ~a, nl === l && (Z & a) === a && (vl === 4 || vl === 3 && (Z & 62914560) === Z && 300 > kl() - hn ? (W & 2) === 0 && ru(l, 0) : pi |= a, gu === Z && (gu = 0)), Mt(l);
  }
  function Ay(l, t) {
    t === 0 && (t = Sc()), l = Ma(l, t), l !== null && (Uu(l, t), Mt(l));
  }
  function fm(l) {
    var t = l.memoizedState, a = 0;
    t !== null && (a = t.retryLane), Ay(l, a);
  }
  function im(l, t) {
    var a = 0;
    switch (l.tag) {
      case 31:
      case 13:
        var u = l.stateNode, e = l.memoizedState;
        e !== null && (a = e.retryLane);
        break;
      case 19:
        u = l.stateNode;
        break;
      case 22:
        u = l.stateNode._retryCache;
        break;
      default:
        throw Error(h(314));
    }
    u !== null && u.delete(t), Ay(l, a);
  }
  function cm(l, t) {
    return Ln(l, t);
  }
  var En = null, zu = null, qi = !1, An = !1, Ci = !1, ma = 0;
  function Mt(l) {
    l !== zu && l.next === null && (zu === null ? En = zu = l : zu = zu.next = l), An = !0, qi || (qi = !0, ym());
  }
  function se(l, t) {
    if (!Ci && An) {
      Ci = !0;
      do
        for (var a = !1, u = En; u !== null; ) {
          if (l !== 0) {
            var e = u.pendingLanes;
            if (e === 0) var n = 0;
            else {
              var f = u.suspendedLanes, i = u.pingedLanes;
              n = (1 << 31 - Il(42 | l) + 1) - 1, n &= e & ~(f & ~i), n = n & 201326741 ? n & 201326741 | 1 : n ? n | 2 : 0;
            }
            n !== 0 && (a = !0, My(u, n));
          } else
            n = Z, n = Oe(
              u,
              u === nl ? n : 0,
              u.cancelPendingCommit !== null || u.timeoutHandle !== -1
            ), (n & 3) === 0 || Du(u, n) || (a = !0, My(u, n));
          u = u.next;
        }
      while (a);
      Ci = !1;
    }
  }
  function sm() {
    _y();
  }
  function _y() {
    An = qi = !1;
    var l = 0;
    ma !== 0 && zm() && (l = ma);
    for (var t = kl(), a = null, u = En; u !== null; ) {
      var e = u.next, n = py(u, t);
      n === 0 ? (u.next = null, a === null ? En = e : a.next = e, e === null && (zu = a)) : (a = u, (l !== 0 || (n & 3) !== 0) && (An = !0)), u = e;
    }
    Tl !== 0 && Tl !== 5 || se(l), ma !== 0 && (ma = 0);
  }
  function py(l, t) {
    for (var a = l.suspendedLanes, u = l.pingedLanes, e = l.expirationTimes, n = l.pendingLanes & -62914561; 0 < n; ) {
      var f = 31 - Il(n), i = 1 << f, c = e[f];
      c === -1 ? ((i & a) === 0 || (i & u) !== 0) && (e[f] = Yd(i, t)) : c <= t && (l.expiredLanes |= i), n &= ~i;
    }
    if (t = nl, a = Z, a = Oe(
      l,
      l === t ? a : 0,
      l.cancelPendingCommit !== null || l.timeoutHandle !== -1
    ), u = l.callbackNode, a === 0 || l === t && (F === 2 || F === 9) || l.cancelPendingCommit !== null)
      return u !== null && u !== null && Kn(u), l.callbackNode = null, l.callbackPriority = 0;
    if ((a & 3) === 0 || Du(l, a)) {
      if (t = a & -a, t === l.callbackPriority) return t;
      switch (u !== null && Kn(u), Wn(a)) {
        case 2:
        case 8:
          a = hc;
          break;
        case 32:
          a = Ee;
          break;
        case 268435456:
          a = gc;
          break;
        default:
          a = Ee;
      }
      return u = Oy.bind(null, l), a = Ln(a, u), l.callbackPriority = t, l.callbackNode = a, t;
    }
    return u !== null && u !== null && Kn(u), l.callbackPriority = 2, l.callbackNode = null, 2;
  }
  function Oy(l, t) {
    if (Tl !== 0 && Tl !== 5)
      return l.callbackNode = null, l.callbackPriority = 0, null;
    var a = l.callbackNode;
    if (Tn() && l.callbackNode !== a)
      return null;
    var u = Z;
    return u = Oe(
      l,
      l === nl ? u : 0,
      l.cancelPendingCommit !== null || l.timeoutHandle !== -1
    ), u === 0 ? null : (iy(l, u, t), py(l, kl()), l.callbackNode != null && l.callbackNode === a ? Oy.bind(null, l) : null);
  }
  function My(l, t) {
    if (Tn()) return null;
    iy(l, t, !0);
  }
  function ym() {
    Em(function() {
      (W & 6) !== 0 ? Ln(
        oc,
        sm
      ) : _y();
    });
  }
  function Bi() {
    if (ma === 0) {
      var l = nu;
      l === 0 && (l = Ae, Ae <<= 1, (Ae & 261888) === 0 && (Ae = 256)), ma = l;
    }
    return ma;
  }
  function Dy(l) {
    return l == null || typeof l == "symbol" || typeof l == "boolean" ? null : typeof l == "function" ? l : He("" + l);
  }
  function Uy(l, t) {
    var a = t.ownerDocument.createElement("input");
    return a.name = t.name, a.value = t.value, l.id && a.setAttribute("form", l.id), t.parentNode.insertBefore(a, t), l = new FormData(l), a.parentNode.removeChild(a), l;
  }
  function dm(l, t, a, u, e) {
    if (t === "submit" && a && a.stateNode === e) {
      var n = Dy(
        (e[Zl] || null).action
      ), f = u.submitter;
      f && (t = (t = f[Zl] || null) ? Dy(t.formAction) : f.getAttribute("formAction"), t !== null && (n = t, f = null));
      var i = new Ce(
        "action",
        "action",
        null,
        u,
        e
      );
      l.push({
        event: i,
        listeners: [
          {
            instance: null,
            listener: function() {
              if (u.defaultPrevented) {
                if (ma !== 0) {
                  var c = f ? Uy(e, f) : new FormData(e);
                  ti(
                    a,
                    {
                      pending: !0,
                      data: c,
                      method: e.method,
                      action: n
                    },
                    null,
                    c
                  );
                }
              } else
                typeof n == "function" && (i.preventDefault(), c = f ? Uy(e, f) : new FormData(e), ti(
                  a,
                  {
                    pending: !0,
                    data: c,
                    method: e.method,
                    action: n
                  },
                  n,
                  c
                ));
            },
            currentTarget: e
          }
        ]
      });
    }
  }
  for (var Yi = 0; Yi < rf.length; Yi++) {
    var Gi = rf[Yi], vm = Gi.toLowerCase(), mm = Gi[0].toUpperCase() + Gi.slice(1);
    rt(
      vm,
      "on" + mm
    );
  }
  rt(f0, "onAnimationEnd"), rt(i0, "onAnimationIteration"), rt(c0, "onAnimationStart"), rt("dblclick", "onDoubleClick"), rt("focusin", "onFocus"), rt("focusout", "onBlur"), rt(Uv, "onTransitionRun"), rt(Hv, "onTransitionStart"), rt(Nv, "onTransitionCancel"), rt(s0, "onTransitionEnd"), Ka("onMouseEnter", ["mouseout", "mouseover"]), Ka("onMouseLeave", ["mouseout", "mouseover"]), Ka("onPointerEnter", ["pointerout", "pointerover"]), Ka("onPointerLeave", ["pointerout", "pointerover"]), Aa(
    "onChange",
    "change click focusin focusout input keydown keyup selectionchange".split(" ")
  ), Aa(
    "onSelect",
    "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
      " "
    )
  ), Aa("onBeforeInput", [
    "compositionend",
    "keypress",
    "textInput",
    "paste"
  ]), Aa(
    "onCompositionEnd",
    "compositionend focusout keydown keypress keyup mousedown".split(" ")
  ), Aa(
    "onCompositionStart",
    "compositionstart focusout keydown keypress keyup mousedown".split(" ")
  ), Aa(
    "onCompositionUpdate",
    "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
  );
  var ye = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
    " "
  ), om = new Set(
    "beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(ye)
  );
  function Hy(l, t) {
    t = (t & 4) !== 0;
    for (var a = 0; a < l.length; a++) {
      var u = l[a], e = u.event;
      u = u.listeners;
      l: {
        var n = void 0;
        if (t)
          for (var f = u.length - 1; 0 <= f; f--) {
            var i = u[f], c = i.instance, m = i.currentTarget;
            if (i = i.listener, c !== n && e.isPropagationStopped())
              break l;
            n = i, e.currentTarget = m;
            try {
              n(e);
            } catch (S) {
              Ge(S);
            }
            e.currentTarget = null, n = c;
          }
        else
          for (f = 0; f < u.length; f++) {
            if (i = u[f], c = i.instance, m = i.currentTarget, i = i.listener, c !== n && e.isPropagationStopped())
              break l;
            n = i, e.currentTarget = m;
            try {
              n(e);
            } catch (S) {
              Ge(S);
            }
            e.currentTarget = null, n = c;
          }
      }
    }
  }
  function Q(l, t) {
    var a = t[$n];
    a === void 0 && (a = t[$n] = /* @__PURE__ */ new Set());
    var u = l + "__bubble";
    a.has(u) || (Ny(t, l, 2, !1), a.add(u));
  }
  function ji(l, t, a) {
    var u = 0;
    t && (u |= 4), Ny(
      a,
      l,
      u,
      t
    );
  }
  var _n = "_reactListening" + Math.random().toString(36).slice(2);
  function Xi(l) {
    if (!l[_n]) {
      l[_n] = !0, _c.forEach(function(a) {
        a !== "selectionchange" && (om.has(a) || ji(a, !1, l), ji(a, !0, l));
      });
      var t = l.nodeType === 9 ? l : l.ownerDocument;
      t === null || t[_n] || (t[_n] = !0, ji("selectionchange", !1, t));
    }
  }
  function Ny(l, t, a, u) {
    switch (fd(t)) {
      case 2:
        var e = xm;
        break;
      case 8:
        e = Vm;
        break;
      default:
        e = lc;
    }
    a = e.bind(
      null,
      t,
      a,
      l
    ), e = void 0, !ef || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (e = !0), u ? e !== void 0 ? l.addEventListener(t, a, {
      capture: !0,
      passive: e
    }) : l.addEventListener(t, a, !0) : e !== void 0 ? l.addEventListener(t, a, {
      passive: e
    }) : l.addEventListener(t, a, !1);
  }
  function Qi(l, t, a, u, e) {
    var n = u;
    if ((t & 1) === 0 && (t & 2) === 0 && u !== null)
      l: for (; ; ) {
        if (u === null) return;
        var f = u.tag;
        if (f === 3 || f === 4) {
          var i = u.stateNode.containerInfo;
          if (i === e) break;
          if (f === 4)
            for (f = u.return; f !== null; ) {
              var c = f.tag;
              if ((c === 3 || c === 4) && f.stateNode.containerInfo === e)
                return;
              f = f.return;
            }
          for (; i !== null; ) {
            if (f = xa(i), f === null) return;
            if (c = f.tag, c === 5 || c === 6 || c === 26 || c === 27) {
              u = n = f;
              continue l;
            }
            i = i.parentNode;
          }
        }
        u = u.return;
      }
    Yc(function() {
      var m = n, S = af(a), z = [];
      l: {
        var o = y0.get(l);
        if (o !== void 0) {
          var g = Ce, O = l;
          switch (l) {
            case "keypress":
              if (Re(a) === 0) break l;
            case "keydown":
            case "keyup":
              g = iv;
              break;
            case "focusin":
              O = "focus", g = sf;
              break;
            case "focusout":
              O = "blur", g = sf;
              break;
            case "beforeblur":
            case "afterblur":
              g = sf;
              break;
            case "click":
              if (a.button === 2) break l;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              g = Xc;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              g = $d;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              g = yv;
              break;
            case f0:
            case i0:
            case c0:
              g = Id;
              break;
            case s0:
              g = vv;
              break;
            case "scroll":
            case "scrollend":
              g = wd;
              break;
            case "wheel":
              g = ov;
              break;
            case "copy":
            case "cut":
            case "paste":
              g = lv;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              g = Zc;
              break;
            case "toggle":
            case "beforetoggle":
              g = gv;
          }
          var N = (t & 4) !== 0, al = !N && (l === "scroll" || l === "scrollend"), d = N ? o !== null ? o + "Capture" : null : o;
          N = [];
          for (var s = m, v; s !== null; ) {
            var b = s;
            if (v = b.stateNode, b = b.tag, b !== 5 && b !== 26 && b !== 27 || v === null || d === null || (b = Ru(s, d), b != null && N.push(
              de(s, b, v)
            )), al) break;
            s = s.return;
          }
          0 < N.length && (o = new g(
            o,
            O,
            null,
            a,
            S
          ), z.push({ event: o, listeners: N }));
        }
      }
      if ((t & 7) === 0) {
        l: {
          if (o = l === "mouseover" || l === "pointerover", g = l === "mouseout" || l === "pointerout", o && a !== tf && (O = a.relatedTarget || a.fromElement) && (xa(O) || O[Za]))
            break l;
          if ((g || o) && (o = S.window === S ? S : (o = S.ownerDocument) ? o.defaultView || o.parentWindow : window, g ? (O = a.relatedTarget || a.toElement, g = m, O = O ? xa(O) : null, O !== null && (al = zl(O), N = O.tag, O !== al || N !== 5 && N !== 27 && N !== 6) && (O = null)) : (g = null, O = m), g !== O)) {
            if (N = Xc, b = "onMouseLeave", d = "onMouseEnter", s = "mouse", (l === "pointerout" || l === "pointerover") && (N = Zc, b = "onPointerLeave", d = "onPointerEnter", s = "pointer"), al = g == null ? o : Nu(g), v = O == null ? o : Nu(O), o = new N(
              b,
              s + "leave",
              g,
              a,
              S
            ), o.target = al, o.relatedTarget = v, b = null, xa(S) === m && (N = new N(
              d,
              s + "enter",
              O,
              a,
              S
            ), N.target = v, N.relatedTarget = al, b = N), al = b, g && O)
              t: {
                for (N = hm, d = g, s = O, v = 0, b = d; b; b = N(b))
                  v++;
                b = 0;
                for (var U = s; U; U = N(U))
                  b++;
                for (; 0 < v - b; )
                  d = N(d), v--;
                for (; 0 < b - v; )
                  s = N(s), b--;
                for (; v--; ) {
                  if (d === s || s !== null && d === s.alternate) {
                    N = d;
                    break t;
                  }
                  d = N(d), s = N(s);
                }
                N = null;
              }
            else N = null;
            g !== null && Ry(
              z,
              o,
              g,
              N,
              !1
            ), O !== null && al !== null && Ry(
              z,
              al,
              O,
              N,
              !0
            );
          }
        }
        l: {
          if (o = m ? Nu(m) : window, g = o.nodeName && o.nodeName.toLowerCase(), g === "select" || g === "input" && o.type === "file")
            var J = $c;
          else if (wc(o))
            if (kc)
              J = Ov;
            else {
              J = _v;
              var D = Av;
            }
          else
            g = o.nodeName, !g || g.toLowerCase() !== "input" || o.type !== "checkbox" && o.type !== "radio" ? m && lf(m.elementType) && (J = $c) : J = pv;
          if (J && (J = J(l, m))) {
            Wc(
              z,
              J,
              a,
              S
            );
            break l;
          }
          D && D(l, o, m), l === "focusout" && m && o.type === "number" && m.memoizedProps.value != null && Pn(o, "number", o.value);
        }
        switch (D = m ? Nu(m) : window, l) {
          case "focusin":
            (wc(D) || D.contentEditable === "true") && (Fa = D, hf = m, Qu = null);
            break;
          case "focusout":
            Qu = hf = Fa = null;
            break;
          case "mousedown":
            gf = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            gf = !1, e0(z, a, S);
            break;
          case "selectionchange":
            if (Dv) break;
          case "keydown":
          case "keyup":
            e0(z, a, S);
        }
        var G;
        if (df)
          l: {
            switch (l) {
              case "compositionstart":
                var x = "onCompositionStart";
                break l;
              case "compositionend":
                x = "onCompositionEnd";
                break l;
              case "compositionupdate":
                x = "onCompositionUpdate";
                break l;
            }
            x = void 0;
          }
        else
          ka ? Kc(l, a) && (x = "onCompositionEnd") : l === "keydown" && a.keyCode === 229 && (x = "onCompositionStart");
        x && (xc && a.locale !== "ko" && (ka || x !== "onCompositionStart" ? x === "onCompositionEnd" && ka && (G = Gc()) : (Ft = S, nf = "value" in Ft ? Ft.value : Ft.textContent, ka = !0)), D = pn(m, x), 0 < D.length && (x = new Qc(
          x,
          l,
          null,
          a,
          S
        ), z.push({ event: x, listeners: D }), G ? x.data = G : (G = Jc(a), G !== null && (x.data = G)))), (G = rv ? bv(l, a) : zv(l, a)) && (x = pn(m, "onBeforeInput"), 0 < x.length && (D = new Qc(
          "onBeforeInput",
          "beforeinput",
          null,
          a,
          S
        ), z.push({
          event: D,
          listeners: x
        }), D.data = G)), dm(
          z,
          l,
          m,
          a,
          S
        );
      }
      Hy(z, t);
    });
  }
  function de(l, t, a) {
    return {
      instance: l,
      listener: t,
      currentTarget: a
    };
  }
  function pn(l, t) {
    for (var a = t + "Capture", u = []; l !== null; ) {
      var e = l, n = e.stateNode;
      if (e = e.tag, e !== 5 && e !== 26 && e !== 27 || n === null || (e = Ru(l, a), e != null && u.unshift(
        de(l, e, n)
      ), e = Ru(l, t), e != null && u.push(
        de(l, e, n)
      )), l.tag === 3) return u;
      l = l.return;
    }
    return [];
  }
  function hm(l) {
    if (l === null) return null;
    do
      l = l.return;
    while (l && l.tag !== 5 && l.tag !== 27);
    return l || null;
  }
  function Ry(l, t, a, u, e) {
    for (var n = t._reactName, f = []; a !== null && a !== u; ) {
      var i = a, c = i.alternate, m = i.stateNode;
      if (i = i.tag, c !== null && c === u) break;
      i !== 5 && i !== 26 && i !== 27 || m === null || (c = m, e ? (m = Ru(a, n), m != null && f.unshift(
        de(a, m, c)
      )) : e || (m = Ru(a, n), m != null && f.push(
        de(a, m, c)
      ))), a = a.return;
    }
    f.length !== 0 && l.push({ event: t, listeners: f });
  }
  var gm = /\r\n?/g, Sm = /\u0000|\uFFFD/g;
  function qy(l) {
    return (typeof l == "string" ? l : "" + l).replace(gm, `
`).replace(Sm, "");
  }
  function Cy(l, t) {
    return t = qy(t), qy(l) === t;
  }
  function tl(l, t, a, u, e, n) {
    switch (a) {
      case "children":
        typeof u == "string" ? t === "body" || t === "textarea" && u === "" || wa(l, u) : (typeof u == "number" || typeof u == "bigint") && t !== "body" && wa(l, "" + u);
        break;
      case "className":
        De(l, "class", u);
        break;
      case "tabIndex":
        De(l, "tabindex", u);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        De(l, a, u);
        break;
      case "style":
        Cc(l, u, n);
        break;
      case "data":
        if (t !== "object") {
          De(l, "data", u);
          break;
        }
      case "src":
      case "href":
        if (u === "" && (t !== "a" || a !== "href")) {
          l.removeAttribute(a);
          break;
        }
        if (u == null || typeof u == "function" || typeof u == "symbol" || typeof u == "boolean") {
          l.removeAttribute(a);
          break;
        }
        u = He("" + u), l.setAttribute(a, u);
        break;
      case "action":
      case "formAction":
        if (typeof u == "function") {
          l.setAttribute(
            a,
            "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')"
          );
          break;
        } else
          typeof n == "function" && (a === "formAction" ? (t !== "input" && tl(l, t, "name", e.name, e, null), tl(
            l,
            t,
            "formEncType",
            e.formEncType,
            e,
            null
          ), tl(
            l,
            t,
            "formMethod",
            e.formMethod,
            e,
            null
          ), tl(
            l,
            t,
            "formTarget",
            e.formTarget,
            e,
            null
          )) : (tl(l, t, "encType", e.encType, e, null), tl(l, t, "method", e.method, e, null), tl(l, t, "target", e.target, e, null)));
        if (u == null || typeof u == "symbol" || typeof u == "boolean") {
          l.removeAttribute(a);
          break;
        }
        u = He("" + u), l.setAttribute(a, u);
        break;
      case "onClick":
        u != null && (l.onclick = Nt);
        break;
      case "onScroll":
        u != null && Q("scroll", l);
        break;
      case "onScrollEnd":
        u != null && Q("scrollend", l);
        break;
      case "dangerouslySetInnerHTML":
        if (u != null) {
          if (typeof u != "object" || !("__html" in u))
            throw Error(h(61));
          if (a = u.__html, a != null) {
            if (e.children != null) throw Error(h(60));
            l.innerHTML = a;
          }
        }
        break;
      case "multiple":
        l.multiple = u && typeof u != "function" && typeof u != "symbol";
        break;
      case "muted":
        l.muted = u && typeof u != "function" && typeof u != "symbol";
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "defaultValue":
      case "defaultChecked":
      case "innerHTML":
      case "ref":
        break;
      case "autoFocus":
        break;
      case "xlinkHref":
        if (u == null || typeof u == "function" || typeof u == "boolean" || typeof u == "symbol") {
          l.removeAttribute("xlink:href");
          break;
        }
        a = He("" + u), l.setAttributeNS(
          "http://www.w3.org/1999/xlink",
          "xlink:href",
          a
        );
        break;
      case "contentEditable":
      case "spellCheck":
      case "draggable":
      case "value":
      case "autoReverse":
      case "externalResourcesRequired":
      case "focusable":
      case "preserveAlpha":
        u != null && typeof u != "function" && typeof u != "symbol" ? l.setAttribute(a, "" + u) : l.removeAttribute(a);
        break;
      case "inert":
      case "allowFullScreen":
      case "async":
      case "autoPlay":
      case "controls":
      case "default":
      case "defer":
      case "disabled":
      case "disablePictureInPicture":
      case "disableRemotePlayback":
      case "formNoValidate":
      case "hidden":
      case "loop":
      case "noModule":
      case "noValidate":
      case "open":
      case "playsInline":
      case "readOnly":
      case "required":
      case "reversed":
      case "scoped":
      case "seamless":
      case "itemScope":
        u && typeof u != "function" && typeof u != "symbol" ? l.setAttribute(a, "") : l.removeAttribute(a);
        break;
      case "capture":
      case "download":
        u === !0 ? l.setAttribute(a, "") : u !== !1 && u != null && typeof u != "function" && typeof u != "symbol" ? l.setAttribute(a, u) : l.removeAttribute(a);
        break;
      case "cols":
      case "rows":
      case "size":
      case "span":
        u != null && typeof u != "function" && typeof u != "symbol" && !isNaN(u) && 1 <= u ? l.setAttribute(a, u) : l.removeAttribute(a);
        break;
      case "rowSpan":
      case "start":
        u == null || typeof u == "function" || typeof u == "symbol" || isNaN(u) ? l.removeAttribute(a) : l.setAttribute(a, u);
        break;
      case "popover":
        Q("beforetoggle", l), Q("toggle", l), Me(l, "popover", u);
        break;
      case "xlinkActuate":
        Ht(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:actuate",
          u
        );
        break;
      case "xlinkArcrole":
        Ht(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:arcrole",
          u
        );
        break;
      case "xlinkRole":
        Ht(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:role",
          u
        );
        break;
      case "xlinkShow":
        Ht(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:show",
          u
        );
        break;
      case "xlinkTitle":
        Ht(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:title",
          u
        );
        break;
      case "xlinkType":
        Ht(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:type",
          u
        );
        break;
      case "xmlBase":
        Ht(
          l,
          "http://www.w3.org/XML/1998/namespace",
          "xml:base",
          u
        );
        break;
      case "xmlLang":
        Ht(
          l,
          "http://www.w3.org/XML/1998/namespace",
          "xml:lang",
          u
        );
        break;
      case "xmlSpace":
        Ht(
          l,
          "http://www.w3.org/XML/1998/namespace",
          "xml:space",
          u
        );
        break;
      case "is":
        Me(l, "is", u);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < a.length) || a[0] !== "o" && a[0] !== "O" || a[1] !== "n" && a[1] !== "N") && (a = Kd.get(a) || a, Me(l, a, u));
    }
  }
  function Zi(l, t, a, u, e, n) {
    switch (a) {
      case "style":
        Cc(l, u, n);
        break;
      case "dangerouslySetInnerHTML":
        if (u != null) {
          if (typeof u != "object" || !("__html" in u))
            throw Error(h(61));
          if (a = u.__html, a != null) {
            if (e.children != null) throw Error(h(60));
            l.innerHTML = a;
          }
        }
        break;
      case "children":
        typeof u == "string" ? wa(l, u) : (typeof u == "number" || typeof u == "bigint") && wa(l, "" + u);
        break;
      case "onScroll":
        u != null && Q("scroll", l);
        break;
      case "onScrollEnd":
        u != null && Q("scrollend", l);
        break;
      case "onClick":
        u != null && (l.onclick = Nt);
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "innerHTML":
      case "ref":
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        if (!pc.hasOwnProperty(a))
          l: {
            if (a[0] === "o" && a[1] === "n" && (e = a.endsWith("Capture"), t = a.slice(2, e ? a.length - 7 : void 0), n = l[Zl] || null, n = n != null ? n[a] : null, typeof n == "function" && l.removeEventListener(t, n, e), typeof u == "function")) {
              typeof n != "function" && n !== null && (a in l ? l[a] = null : l.hasAttribute(a) && l.removeAttribute(a)), l.addEventListener(t, u, e);
              break l;
            }
            a in l ? l[a] = u : u === !0 ? l.setAttribute(a, "") : Me(l, a, u);
          }
    }
  }
  function Ul(l, t, a) {
    switch (t) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "img":
        Q("error", l), Q("load", l);
        var u = !1, e = !1, n;
        for (n in a)
          if (a.hasOwnProperty(n)) {
            var f = a[n];
            if (f != null)
              switch (n) {
                case "src":
                  u = !0;
                  break;
                case "srcSet":
                  e = !0;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(h(137, t));
                default:
                  tl(l, t, n, f, a, null);
              }
          }
        e && tl(l, t, "srcSet", a.srcSet, a, null), u && tl(l, t, "src", a.src, a, null);
        return;
      case "input":
        Q("invalid", l);
        var i = n = f = e = null, c = null, m = null;
        for (u in a)
          if (a.hasOwnProperty(u)) {
            var S = a[u];
            if (S != null)
              switch (u) {
                case "name":
                  e = S;
                  break;
                case "type":
                  f = S;
                  break;
                case "checked":
                  c = S;
                  break;
                case "defaultChecked":
                  m = S;
                  break;
                case "value":
                  n = S;
                  break;
                case "defaultValue":
                  i = S;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (S != null)
                    throw Error(h(137, t));
                  break;
                default:
                  tl(l, t, u, S, a, null);
              }
          }
        Hc(
          l,
          n,
          i,
          c,
          m,
          f,
          e,
          !1
        );
        return;
      case "select":
        Q("invalid", l), u = f = n = null;
        for (e in a)
          if (a.hasOwnProperty(e) && (i = a[e], i != null))
            switch (e) {
              case "value":
                n = i;
                break;
              case "defaultValue":
                f = i;
                break;
              case "multiple":
                u = i;
              default:
                tl(l, t, e, i, a, null);
            }
        t = n, a = f, l.multiple = !!u, t != null ? Ja(l, !!u, t, !1) : a != null && Ja(l, !!u, a, !0);
        return;
      case "textarea":
        Q("invalid", l), n = e = u = null;
        for (f in a)
          if (a.hasOwnProperty(f) && (i = a[f], i != null))
            switch (f) {
              case "value":
                u = i;
                break;
              case "defaultValue":
                e = i;
                break;
              case "children":
                n = i;
                break;
              case "dangerouslySetInnerHTML":
                if (i != null) throw Error(h(91));
                break;
              default:
                tl(l, t, f, i, a, null);
            }
        Rc(l, u, e, n);
        return;
      case "option":
        for (c in a)
          if (a.hasOwnProperty(c) && (u = a[c], u != null))
            switch (c) {
              case "selected":
                l.selected = u && typeof u != "function" && typeof u != "symbol";
                break;
              default:
                tl(l, t, c, u, a, null);
            }
        return;
      case "dialog":
        Q("beforetoggle", l), Q("toggle", l), Q("cancel", l), Q("close", l);
        break;
      case "iframe":
      case "object":
        Q("load", l);
        break;
      case "video":
      case "audio":
        for (u = 0; u < ye.length; u++)
          Q(ye[u], l);
        break;
      case "image":
        Q("error", l), Q("load", l);
        break;
      case "details":
        Q("toggle", l);
        break;
      case "embed":
      case "source":
      case "link":
        Q("error", l), Q("load", l);
      case "area":
      case "base":
      case "br":
      case "col":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "track":
      case "wbr":
      case "menuitem":
        for (m in a)
          if (a.hasOwnProperty(m) && (u = a[m], u != null))
            switch (m) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(h(137, t));
              default:
                tl(l, t, m, u, a, null);
            }
        return;
      default:
        if (lf(t)) {
          for (S in a)
            a.hasOwnProperty(S) && (u = a[S], u !== void 0 && Zi(
              l,
              t,
              S,
              u,
              a,
              void 0
            ));
          return;
        }
    }
    for (i in a)
      a.hasOwnProperty(i) && (u = a[i], u != null && tl(l, t, i, u, a, null));
  }
  function rm(l, t, a, u) {
    switch (t) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "input":
        var e = null, n = null, f = null, i = null, c = null, m = null, S = null;
        for (g in a) {
          var z = a[g];
          if (a.hasOwnProperty(g) && z != null)
            switch (g) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                c = z;
              default:
                u.hasOwnProperty(g) || tl(l, t, g, null, u, z);
            }
        }
        for (var o in u) {
          var g = u[o];
          if (z = a[o], u.hasOwnProperty(o) && (g != null || z != null))
            switch (o) {
              case "type":
                n = g;
                break;
              case "name":
                e = g;
                break;
              case "checked":
                m = g;
                break;
              case "defaultChecked":
                S = g;
                break;
              case "value":
                f = g;
                break;
              case "defaultValue":
                i = g;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (g != null)
                  throw Error(h(137, t));
                break;
              default:
                g !== z && tl(
                  l,
                  t,
                  o,
                  g,
                  u,
                  z
                );
            }
        }
        In(
          l,
          f,
          i,
          c,
          m,
          S,
          n,
          e
        );
        return;
      case "select":
        g = f = i = o = null;
        for (n in a)
          if (c = a[n], a.hasOwnProperty(n) && c != null)
            switch (n) {
              case "value":
                break;
              case "multiple":
                g = c;
              default:
                u.hasOwnProperty(n) || tl(
                  l,
                  t,
                  n,
                  null,
                  u,
                  c
                );
            }
        for (e in u)
          if (n = u[e], c = a[e], u.hasOwnProperty(e) && (n != null || c != null))
            switch (e) {
              case "value":
                o = n;
                break;
              case "defaultValue":
                i = n;
                break;
              case "multiple":
                f = n;
              default:
                n !== c && tl(
                  l,
                  t,
                  e,
                  n,
                  u,
                  c
                );
            }
        t = i, a = f, u = g, o != null ? Ja(l, !!a, o, !1) : !!u != !!a && (t != null ? Ja(l, !!a, t, !0) : Ja(l, !!a, a ? [] : "", !1));
        return;
      case "textarea":
        g = o = null;
        for (i in a)
          if (e = a[i], a.hasOwnProperty(i) && e != null && !u.hasOwnProperty(i))
            switch (i) {
              case "value":
                break;
              case "children":
                break;
              default:
                tl(l, t, i, null, u, e);
            }
        for (f in u)
          if (e = u[f], n = a[f], u.hasOwnProperty(f) && (e != null || n != null))
            switch (f) {
              case "value":
                o = e;
                break;
              case "defaultValue":
                g = e;
                break;
              case "children":
                break;
              case "dangerouslySetInnerHTML":
                if (e != null) throw Error(h(91));
                break;
              default:
                e !== n && tl(l, t, f, e, u, n);
            }
        Nc(l, o, g);
        return;
      case "option":
        for (var O in a)
          if (o = a[O], a.hasOwnProperty(O) && o != null && !u.hasOwnProperty(O))
            switch (O) {
              case "selected":
                l.selected = !1;
                break;
              default:
                tl(
                  l,
                  t,
                  O,
                  null,
                  u,
                  o
                );
            }
        for (c in u)
          if (o = u[c], g = a[c], u.hasOwnProperty(c) && o !== g && (o != null || g != null))
            switch (c) {
              case "selected":
                l.selected = o && typeof o != "function" && typeof o != "symbol";
                break;
              default:
                tl(
                  l,
                  t,
                  c,
                  o,
                  u,
                  g
                );
            }
        return;
      case "img":
      case "link":
      case "area":
      case "base":
      case "br":
      case "col":
      case "embed":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "source":
      case "track":
      case "wbr":
      case "menuitem":
        for (var N in a)
          o = a[N], a.hasOwnProperty(N) && o != null && !u.hasOwnProperty(N) && tl(l, t, N, null, u, o);
        for (m in u)
          if (o = u[m], g = a[m], u.hasOwnProperty(m) && o !== g && (o != null || g != null))
            switch (m) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (o != null)
                  throw Error(h(137, t));
                break;
              default:
                tl(
                  l,
                  t,
                  m,
                  o,
                  u,
                  g
                );
            }
        return;
      default:
        if (lf(t)) {
          for (var al in a)
            o = a[al], a.hasOwnProperty(al) && o !== void 0 && !u.hasOwnProperty(al) && Zi(
              l,
              t,
              al,
              void 0,
              u,
              o
            );
          for (S in u)
            o = u[S], g = a[S], !u.hasOwnProperty(S) || o === g || o === void 0 && g === void 0 || Zi(
              l,
              t,
              S,
              o,
              u,
              g
            );
          return;
        }
    }
    for (var d in a)
      o = a[d], a.hasOwnProperty(d) && o != null && !u.hasOwnProperty(d) && tl(l, t, d, null, u, o);
    for (z in u)
      o = u[z], g = a[z], !u.hasOwnProperty(z) || o === g || o == null && g == null || tl(l, t, z, o, u, g);
  }
  function By(l) {
    switch (l) {
      case "css":
      case "script":
      case "font":
      case "img":
      case "image":
      case "input":
      case "link":
        return !0;
      default:
        return !1;
    }
  }
  function bm() {
    if (typeof performance.getEntriesByType == "function") {
      for (var l = 0, t = 0, a = performance.getEntriesByType("resource"), u = 0; u < a.length; u++) {
        var e = a[u], n = e.transferSize, f = e.initiatorType, i = e.duration;
        if (n && i && By(f)) {
          for (f = 0, i = e.responseEnd, u += 1; u < a.length; u++) {
            var c = a[u], m = c.startTime;
            if (m > i) break;
            var S = c.transferSize, z = c.initiatorType;
            S && By(z) && (c = c.responseEnd, f += S * (c < i ? 1 : (i - m) / (c - m)));
          }
          if (--u, t += 8 * (n + f) / (e.duration / 1e3), l++, 10 < l) break;
        }
      }
      if (0 < l) return t / l / 1e6;
    }
    return navigator.connection && (l = navigator.connection.downlink, typeof l == "number") ? l : 5;
  }
  var xi = null, Vi = null;
  function On(l) {
    return l.nodeType === 9 ? l : l.ownerDocument;
  }
  function Yy(l) {
    switch (l) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function Gy(l, t) {
    if (l === 0)
      switch (t) {
        case "svg":
          return 1;
        case "math":
          return 2;
        default:
          return 0;
      }
    return l === 1 && t === "foreignObject" ? 0 : l;
  }
  function Li(l, t) {
    return l === "textarea" || l === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.children == "bigint" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
  }
  var Ki = null;
  function zm() {
    var l = window.event;
    return l && l.type === "popstate" ? l === Ki ? !1 : (Ki = l, !0) : (Ki = null, !1);
  }
  var jy = typeof setTimeout == "function" ? setTimeout : void 0, Tm = typeof clearTimeout == "function" ? clearTimeout : void 0, Xy = typeof Promise == "function" ? Promise : void 0, Em = typeof queueMicrotask == "function" ? queueMicrotask : typeof Xy < "u" ? function(l) {
    return Xy.resolve(null).then(l).catch(Am);
  } : jy;
  function Am(l) {
    setTimeout(function() {
      throw l;
    });
  }
  function oa(l) {
    return l === "head";
  }
  function Qy(l, t) {
    var a = t, u = 0;
    do {
      var e = a.nextSibling;
      if (l.removeChild(a), e && e.nodeType === 8)
        if (a = e.data, a === "/$" || a === "/&") {
          if (u === 0) {
            l.removeChild(e), _u(t);
            return;
          }
          u--;
        } else if (a === "$" || a === "$?" || a === "$~" || a === "$!" || a === "&")
          u++;
        else if (a === "html")
          ve(l.ownerDocument.documentElement);
        else if (a === "head") {
          a = l.ownerDocument.head, ve(a);
          for (var n = a.firstChild; n; ) {
            var f = n.nextSibling, i = n.nodeName;
            n[Hu] || i === "SCRIPT" || i === "STYLE" || i === "LINK" && n.rel.toLowerCase() === "stylesheet" || a.removeChild(n), n = f;
          }
        } else
          a === "body" && ve(l.ownerDocument.body);
      a = e;
    } while (a);
    _u(t);
  }
  function Zy(l, t) {
    var a = l;
    l = 0;
    do {
      var u = a.nextSibling;
      if (a.nodeType === 1 ? t ? (a._stashedDisplay = a.style.display, a.style.display = "none") : (a.style.display = a._stashedDisplay || "", a.getAttribute("style") === "" && a.removeAttribute("style")) : a.nodeType === 3 && (t ? (a._stashedText = a.nodeValue, a.nodeValue = "") : a.nodeValue = a._stashedText || ""), u && u.nodeType === 8)
        if (a = u.data, a === "/$") {
          if (l === 0) break;
          l--;
        } else
          a !== "$" && a !== "$?" && a !== "$~" && a !== "$!" || l++;
      a = u;
    } while (a);
  }
  function Ji(l) {
    var t = l.firstChild;
    for (t && t.nodeType === 10 && (t = t.nextSibling); t; ) {
      var a = t;
      switch (t = t.nextSibling, a.nodeName) {
        case "HTML":
        case "HEAD":
        case "BODY":
          Ji(a), kn(a);
          continue;
        case "SCRIPT":
        case "STYLE":
          continue;
        case "LINK":
          if (a.rel.toLowerCase() === "stylesheet") continue;
      }
      l.removeChild(a);
    }
  }
  function _m(l, t, a, u) {
    for (; l.nodeType === 1; ) {
      var e = a;
      if (l.nodeName.toLowerCase() !== t.toLowerCase()) {
        if (!u && (l.nodeName !== "INPUT" || l.type !== "hidden"))
          break;
      } else if (u) {
        if (!l[Hu])
          switch (t) {
            case "meta":
              if (!l.hasAttribute("itemprop")) break;
              return l;
            case "link":
              if (n = l.getAttribute("rel"), n === "stylesheet" && l.hasAttribute("data-precedence"))
                break;
              if (n !== e.rel || l.getAttribute("href") !== (e.href == null || e.href === "" ? null : e.href) || l.getAttribute("crossorigin") !== (e.crossOrigin == null ? null : e.crossOrigin) || l.getAttribute("title") !== (e.title == null ? null : e.title))
                break;
              return l;
            case "style":
              if (l.hasAttribute("data-precedence")) break;
              return l;
            case "script":
              if (n = l.getAttribute("src"), (n !== (e.src == null ? null : e.src) || l.getAttribute("type") !== (e.type == null ? null : e.type) || l.getAttribute("crossorigin") !== (e.crossOrigin == null ? null : e.crossOrigin)) && n && l.hasAttribute("async") && !l.hasAttribute("itemprop"))
                break;
              return l;
            default:
              return l;
          }
      } else if (t === "input" && l.type === "hidden") {
        var n = e.name == null ? null : "" + e.name;
        if (e.type === "hidden" && l.getAttribute("name") === n)
          return l;
      } else return l;
      if (l = ht(l.nextSibling), l === null) break;
    }
    return null;
  }
  function pm(l, t, a) {
    if (t === "") return null;
    for (; l.nodeType !== 3; )
      if ((l.nodeType !== 1 || l.nodeName !== "INPUT" || l.type !== "hidden") && !a || (l = ht(l.nextSibling), l === null)) return null;
    return l;
  }
  function xy(l, t) {
    for (; l.nodeType !== 8; )
      if ((l.nodeType !== 1 || l.nodeName !== "INPUT" || l.type !== "hidden") && !t || (l = ht(l.nextSibling), l === null)) return null;
    return l;
  }
  function wi(l) {
    return l.data === "$?" || l.data === "$~";
  }
  function Wi(l) {
    return l.data === "$!" || l.data === "$?" && l.ownerDocument.readyState !== "loading";
  }
  function Om(l, t) {
    var a = l.ownerDocument;
    if (l.data === "$~") l._reactRetry = t;
    else if (l.data !== "$?" || a.readyState !== "loading")
      t();
    else {
      var u = function() {
        t(), a.removeEventListener("DOMContentLoaded", u);
      };
      a.addEventListener("DOMContentLoaded", u), l._reactRetry = u;
    }
  }
  function ht(l) {
    for (; l != null; l = l.nextSibling) {
      var t = l.nodeType;
      if (t === 1 || t === 3) break;
      if (t === 8) {
        if (t = l.data, t === "$" || t === "$!" || t === "$?" || t === "$~" || t === "&" || t === "F!" || t === "F")
          break;
        if (t === "/$" || t === "/&") return null;
      }
    }
    return l;
  }
  var $i = null;
  function Vy(l) {
    l = l.nextSibling;
    for (var t = 0; l; ) {
      if (l.nodeType === 8) {
        var a = l.data;
        if (a === "/$" || a === "/&") {
          if (t === 0)
            return ht(l.nextSibling);
          t--;
        } else
          a !== "$" && a !== "$!" && a !== "$?" && a !== "$~" && a !== "&" || t++;
      }
      l = l.nextSibling;
    }
    return null;
  }
  function Ly(l) {
    l = l.previousSibling;
    for (var t = 0; l; ) {
      if (l.nodeType === 8) {
        var a = l.data;
        if (a === "$" || a === "$!" || a === "$?" || a === "$~" || a === "&") {
          if (t === 0) return l;
          t--;
        } else a !== "/$" && a !== "/&" || t++;
      }
      l = l.previousSibling;
    }
    return null;
  }
  function Ky(l, t, a) {
    switch (t = On(a), l) {
      case "html":
        if (l = t.documentElement, !l) throw Error(h(452));
        return l;
      case "head":
        if (l = t.head, !l) throw Error(h(453));
        return l;
      case "body":
        if (l = t.body, !l) throw Error(h(454));
        return l;
      default:
        throw Error(h(451));
    }
  }
  function ve(l) {
    for (var t = l.attributes; t.length; )
      l.removeAttributeNode(t[0]);
    kn(l);
  }
  var gt = /* @__PURE__ */ new Map(), Jy = /* @__PURE__ */ new Set();
  function Mn(l) {
    return typeof l.getRootNode == "function" ? l.getRootNode() : l.nodeType === 9 ? l : l.ownerDocument;
  }
  var wt = _.d;
  _.d = {
    f: Mm,
    r: Dm,
    D: Um,
    C: Hm,
    L: Nm,
    m: Rm,
    X: Cm,
    S: qm,
    M: Bm
  };
  function Mm() {
    var l = wt.f(), t = rn();
    return l || t;
  }
  function Dm(l) {
    var t = Va(l);
    t !== null && t.tag === 5 && t.type === "form" ? ss(t) : wt.r(l);
  }
  var Tu = typeof document > "u" ? null : document;
  function wy(l, t, a) {
    var u = Tu;
    if (u && typeof t == "string" && t) {
      var e = ct(t);
      e = 'link[rel="' + l + '"][href="' + e + '"]', typeof a == "string" && (e += '[crossorigin="' + a + '"]'), Jy.has(e) || (Jy.add(e), l = { rel: l, crossOrigin: a, href: t }, u.querySelector(e) === null && (t = u.createElement("link"), Ul(t, "link", l), El(t), u.head.appendChild(t)));
    }
  }
  function Um(l) {
    wt.D(l), wy("dns-prefetch", l, null);
  }
  function Hm(l, t) {
    wt.C(l, t), wy("preconnect", l, t);
  }
  function Nm(l, t, a) {
    wt.L(l, t, a);
    var u = Tu;
    if (u && l && t) {
      var e = 'link[rel="preload"][as="' + ct(t) + '"]';
      t === "image" && a && a.imageSrcSet ? (e += '[imagesrcset="' + ct(
        a.imageSrcSet
      ) + '"]', typeof a.imageSizes == "string" && (e += '[imagesizes="' + ct(
        a.imageSizes
      ) + '"]')) : e += '[href="' + ct(l) + '"]';
      var n = e;
      switch (t) {
        case "style":
          n = Eu(l);
          break;
        case "script":
          n = Au(l);
      }
      gt.has(n) || (l = R(
        {
          rel: "preload",
          href: t === "image" && a && a.imageSrcSet ? void 0 : l,
          as: t
        },
        a
      ), gt.set(n, l), u.querySelector(e) !== null || t === "style" && u.querySelector(me(n)) || t === "script" && u.querySelector(oe(n)) || (t = u.createElement("link"), Ul(t, "link", l), El(t), u.head.appendChild(t)));
    }
  }
  function Rm(l, t) {
    wt.m(l, t);
    var a = Tu;
    if (a && l) {
      var u = t && typeof t.as == "string" ? t.as : "script", e = 'link[rel="modulepreload"][as="' + ct(u) + '"][href="' + ct(l) + '"]', n = e;
      switch (u) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          n = Au(l);
      }
      if (!gt.has(n) && (l = R({ rel: "modulepreload", href: l }, t), gt.set(n, l), a.querySelector(e) === null)) {
        switch (u) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (a.querySelector(oe(n)))
              return;
        }
        u = a.createElement("link"), Ul(u, "link", l), El(u), a.head.appendChild(u);
      }
    }
  }
  function qm(l, t, a) {
    wt.S(l, t, a);
    var u = Tu;
    if (u && l) {
      var e = La(u).hoistableStyles, n = Eu(l);
      t = t || "default";
      var f = e.get(n);
      if (!f) {
        var i = { loading: 0, preload: null };
        if (f = u.querySelector(
          me(n)
        ))
          i.loading = 5;
        else {
          l = R(
            { rel: "stylesheet", href: l, "data-precedence": t },
            a
          ), (a = gt.get(n)) && ki(l, a);
          var c = f = u.createElement("link");
          El(c), Ul(c, "link", l), c._p = new Promise(function(m, S) {
            c.onload = m, c.onerror = S;
          }), c.addEventListener("load", function() {
            i.loading |= 1;
          }), c.addEventListener("error", function() {
            i.loading |= 2;
          }), i.loading |= 4, Dn(f, t, u);
        }
        f = {
          type: "stylesheet",
          instance: f,
          count: 1,
          state: i
        }, e.set(n, f);
      }
    }
  }
  function Cm(l, t) {
    wt.X(l, t);
    var a = Tu;
    if (a && l) {
      var u = La(a).hoistableScripts, e = Au(l), n = u.get(e);
      n || (n = a.querySelector(oe(e)), n || (l = R({ src: l, async: !0 }, t), (t = gt.get(e)) && Fi(l, t), n = a.createElement("script"), El(n), Ul(n, "link", l), a.head.appendChild(n)), n = {
        type: "script",
        instance: n,
        count: 1,
        state: null
      }, u.set(e, n));
    }
  }
  function Bm(l, t) {
    wt.M(l, t);
    var a = Tu;
    if (a && l) {
      var u = La(a).hoistableScripts, e = Au(l), n = u.get(e);
      n || (n = a.querySelector(oe(e)), n || (l = R({ src: l, async: !0, type: "module" }, t), (t = gt.get(e)) && Fi(l, t), n = a.createElement("script"), El(n), Ul(n, "link", l), a.head.appendChild(n)), n = {
        type: "script",
        instance: n,
        count: 1,
        state: null
      }, u.set(e, n));
    }
  }
  function Wy(l, t, a, u) {
    var e = (e = j.current) ? Mn(e) : null;
    if (!e) throw Error(h(446));
    switch (l) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof a.precedence == "string" && typeof a.href == "string" ? (t = Eu(a.href), a = La(
          e
        ).hoistableStyles, u = a.get(t), u || (u = {
          type: "style",
          instance: null,
          count: 0,
          state: null
        }, a.set(t, u)), u) : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (a.rel === "stylesheet" && typeof a.href == "string" && typeof a.precedence == "string") {
          l = Eu(a.href);
          var n = La(
            e
          ).hoistableStyles, f = n.get(l);
          if (f || (e = e.ownerDocument || e, f = {
            type: "stylesheet",
            instance: null,
            count: 0,
            state: { loading: 0, preload: null }
          }, n.set(l, f), (n = e.querySelector(
            me(l)
          )) && !n._p && (f.instance = n, f.state.loading = 5), gt.has(l) || (a = {
            rel: "preload",
            as: "style",
            href: a.href,
            crossOrigin: a.crossOrigin,
            integrity: a.integrity,
            media: a.media,
            hrefLang: a.hrefLang,
            referrerPolicy: a.referrerPolicy
          }, gt.set(l, a), n || Ym(
            e,
            l,
            a,
            f.state
          ))), t && u === null)
            throw Error(h(528, ""));
          return f;
        }
        if (t && u !== null)
          throw Error(h(529, ""));
        return null;
      case "script":
        return t = a.async, a = a.src, typeof a == "string" && t && typeof t != "function" && typeof t != "symbol" ? (t = Au(a), a = La(
          e
        ).hoistableScripts, u = a.get(t), u || (u = {
          type: "script",
          instance: null,
          count: 0,
          state: null
        }, a.set(t, u)), u) : { type: "void", instance: null, count: 0, state: null };
      default:
        throw Error(h(444, l));
    }
  }
  function Eu(l) {
    return 'href="' + ct(l) + '"';
  }
  function me(l) {
    return 'link[rel="stylesheet"][' + l + "]";
  }
  function $y(l) {
    return R({}, l, {
      "data-precedence": l.precedence,
      precedence: null
    });
  }
  function Ym(l, t, a, u) {
    l.querySelector('link[rel="preload"][as="style"][' + t + "]") ? u.loading = 1 : (t = l.createElement("link"), u.preload = t, t.addEventListener("load", function() {
      return u.loading |= 1;
    }), t.addEventListener("error", function() {
      return u.loading |= 2;
    }), Ul(t, "link", a), El(t), l.head.appendChild(t));
  }
  function Au(l) {
    return '[src="' + ct(l) + '"]';
  }
  function oe(l) {
    return "script[async]" + l;
  }
  function ky(l, t, a) {
    if (t.count++, t.instance === null)
      switch (t.type) {
        case "style":
          var u = l.querySelector(
            'style[data-href~="' + ct(a.href) + '"]'
          );
          if (u)
            return t.instance = u, El(u), u;
          var e = R({}, a, {
            "data-href": a.href,
            "data-precedence": a.precedence,
            href: null,
            precedence: null
          });
          return u = (l.ownerDocument || l).createElement(
            "style"
          ), El(u), Ul(u, "style", e), Dn(u, a.precedence, l), t.instance = u;
        case "stylesheet":
          e = Eu(a.href);
          var n = l.querySelector(
            me(e)
          );
          if (n)
            return t.state.loading |= 4, t.instance = n, El(n), n;
          u = $y(a), (e = gt.get(e)) && ki(u, e), n = (l.ownerDocument || l).createElement("link"), El(n);
          var f = n;
          return f._p = new Promise(function(i, c) {
            f.onload = i, f.onerror = c;
          }), Ul(n, "link", u), t.state.loading |= 4, Dn(n, a.precedence, l), t.instance = n;
        case "script":
          return n = Au(a.src), (e = l.querySelector(
            oe(n)
          )) ? (t.instance = e, El(e), e) : (u = a, (e = gt.get(n)) && (u = R({}, a), Fi(u, e)), l = l.ownerDocument || l, e = l.createElement("script"), El(e), Ul(e, "link", u), l.head.appendChild(e), t.instance = e);
        case "void":
          return null;
        default:
          throw Error(h(443, t.type));
      }
    else
      t.type === "stylesheet" && (t.state.loading & 4) === 0 && (u = t.instance, t.state.loading |= 4, Dn(u, a.precedence, l));
    return t.instance;
  }
  function Dn(l, t, a) {
    for (var u = a.querySelectorAll(
      'link[rel="stylesheet"][data-precedence],style[data-precedence]'
    ), e = u.length ? u[u.length - 1] : null, n = e, f = 0; f < u.length; f++) {
      var i = u[f];
      if (i.dataset.precedence === t) n = i;
      else if (n !== e) break;
    }
    n ? n.parentNode.insertBefore(l, n.nextSibling) : (t = a.nodeType === 9 ? a.head : a, t.insertBefore(l, t.firstChild));
  }
  function ki(l, t) {
    l.crossOrigin == null && (l.crossOrigin = t.crossOrigin), l.referrerPolicy == null && (l.referrerPolicy = t.referrerPolicy), l.title == null && (l.title = t.title);
  }
  function Fi(l, t) {
    l.crossOrigin == null && (l.crossOrigin = t.crossOrigin), l.referrerPolicy == null && (l.referrerPolicy = t.referrerPolicy), l.integrity == null && (l.integrity = t.integrity);
  }
  var Un = null;
  function Fy(l, t, a) {
    if (Un === null) {
      var u = /* @__PURE__ */ new Map(), e = Un = /* @__PURE__ */ new Map();
      e.set(a, u);
    } else
      e = Un, u = e.get(a), u || (u = /* @__PURE__ */ new Map(), e.set(a, u));
    if (u.has(l)) return u;
    for (u.set(l, null), a = a.getElementsByTagName(l), e = 0; e < a.length; e++) {
      var n = a[e];
      if (!(n[Hu] || n[pl] || l === "link" && n.getAttribute("rel") === "stylesheet") && n.namespaceURI !== "http://www.w3.org/2000/svg") {
        var f = n.getAttribute(t) || "";
        f = l + f;
        var i = u.get(f);
        i ? i.push(n) : u.set(f, [n]);
      }
    }
    return u;
  }
  function Iy(l, t, a) {
    l = l.ownerDocument || l, l.head.insertBefore(
      a,
      t === "title" ? l.querySelector("head > title") : null
    );
  }
  function Gm(l, t, a) {
    if (a === 1 || t.itemProp != null) return !1;
    switch (l) {
      case "meta":
      case "title":
        return !0;
      case "style":
        if (typeof t.precedence != "string" || typeof t.href != "string" || t.href === "")
          break;
        return !0;
      case "link":
        if (typeof t.rel != "string" || typeof t.href != "string" || t.href === "" || t.onLoad || t.onError)
          break;
        switch (t.rel) {
          case "stylesheet":
            return l = t.disabled, typeof t.precedence == "string" && l == null;
          default:
            return !0;
        }
      case "script":
        if (t.async && typeof t.async != "function" && typeof t.async != "symbol" && !t.onLoad && !t.onError && t.src && typeof t.src == "string")
          return !0;
    }
    return !1;
  }
  function Py(l) {
    return !(l.type === "stylesheet" && (l.state.loading & 3) === 0);
  }
  function jm(l, t, a, u) {
    if (a.type === "stylesheet" && (typeof u.media != "string" || matchMedia(u.media).matches !== !1) && (a.state.loading & 4) === 0) {
      if (a.instance === null) {
        var e = Eu(u.href), n = t.querySelector(
          me(e)
        );
        if (n) {
          t = n._p, t !== null && typeof t == "object" && typeof t.then == "function" && (l.count++, l = Hn.bind(l), t.then(l, l)), a.state.loading |= 4, a.instance = n, El(n);
          return;
        }
        n = t.ownerDocument || t, u = $y(u), (e = gt.get(e)) && ki(u, e), n = n.createElement("link"), El(n);
        var f = n;
        f._p = new Promise(function(i, c) {
          f.onload = i, f.onerror = c;
        }), Ul(n, "link", u), a.instance = n;
      }
      l.stylesheets === null && (l.stylesheets = /* @__PURE__ */ new Map()), l.stylesheets.set(a, t), (t = a.state.preload) && (a.state.loading & 3) === 0 && (l.count++, a = Hn.bind(l), t.addEventListener("load", a), t.addEventListener("error", a));
    }
  }
  var Ii = 0;
  function Xm(l, t) {
    return l.stylesheets && l.count === 0 && Rn(l, l.stylesheets), 0 < l.count || 0 < l.imgCount ? function(a) {
      var u = setTimeout(function() {
        if (l.stylesheets && Rn(l, l.stylesheets), l.unsuspend) {
          var n = l.unsuspend;
          l.unsuspend = null, n();
        }
      }, 6e4 + t);
      0 < l.imgBytes && Ii === 0 && (Ii = 62500 * bm());
      var e = setTimeout(
        function() {
          if (l.waitingForImages = !1, l.count === 0 && (l.stylesheets && Rn(l, l.stylesheets), l.unsuspend)) {
            var n = l.unsuspend;
            l.unsuspend = null, n();
          }
        },
        (l.imgBytes > Ii ? 50 : 800) + t
      );
      return l.unsuspend = a, function() {
        l.unsuspend = null, clearTimeout(u), clearTimeout(e);
      };
    } : null;
  }
  function Hn() {
    if (this.count--, this.count === 0 && (this.imgCount === 0 || !this.waitingForImages)) {
      if (this.stylesheets) Rn(this, this.stylesheets);
      else if (this.unsuspend) {
        var l = this.unsuspend;
        this.unsuspend = null, l();
      }
    }
  }
  var Nn = null;
  function Rn(l, t) {
    l.stylesheets = null, l.unsuspend !== null && (l.count++, Nn = /* @__PURE__ */ new Map(), t.forEach(Qm, l), Nn = null, Hn.call(l));
  }
  function Qm(l, t) {
    if (!(t.state.loading & 4)) {
      var a = Nn.get(l);
      if (a) var u = a.get(null);
      else {
        a = /* @__PURE__ */ new Map(), Nn.set(l, a);
        for (var e = l.querySelectorAll(
          "link[data-precedence],style[data-precedence]"
        ), n = 0; n < e.length; n++) {
          var f = e[n];
          (f.nodeName === "LINK" || f.getAttribute("media") !== "not all") && (a.set(f.dataset.precedence, f), u = f);
        }
        u && a.set(null, u);
      }
      e = t.instance, f = e.getAttribute("data-precedence"), n = a.get(f) || u, n === u && a.set(null, e), a.set(f, e), this.count++, u = Hn.bind(this), e.addEventListener("load", u), e.addEventListener("error", u), n ? n.parentNode.insertBefore(e, n.nextSibling) : (l = l.nodeType === 9 ? l.head : l, l.insertBefore(e, l.firstChild)), t.state.loading |= 4;
    }
  }
  var he = {
    $$typeof: Hl,
    Provider: null,
    Consumer: null,
    _currentValue: q,
    _currentValue2: q,
    _threadCount: 0
  };
  function Zm(l, t, a, u, e, n, f, i, c) {
    this.tag = 1, this.containerInfo = l, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = Jn(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Jn(0), this.hiddenUpdates = Jn(null), this.identifierPrefix = u, this.onUncaughtError = e, this.onCaughtError = n, this.onRecoverableError = f, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = c, this.incompleteTransitions = /* @__PURE__ */ new Map();
  }
  function ld(l, t, a, u, e, n, f, i, c, m, S, z) {
    return l = new Zm(
      l,
      t,
      a,
      f,
      c,
      m,
      S,
      z,
      i
    ), t = 1, n === !0 && (t |= 24), n = lt(3, null, null, t), l.current = n, n.stateNode = l, t = Nf(), t.refCount++, l.pooledCache = t, t.refCount++, n.memoizedState = {
      element: u,
      isDehydrated: a,
      cache: t
    }, Bf(n), l;
  }
  function td(l) {
    return l ? (l = lu, l) : lu;
  }
  function ad(l, t, a, u, e, n) {
    e = td(e), u.context === null ? u.context = e : u.pendingContext = e, u = ua(t), u.payload = { element: a }, n = n === void 0 ? null : n, n !== null && (u.callback = n), a = ea(l, u, t), a !== null && (wl(a, l, t), wu(a, l, t));
  }
  function ud(l, t) {
    if (l = l.memoizedState, l !== null && l.dehydrated !== null) {
      var a = l.retryLane;
      l.retryLane = a !== 0 && a < t ? a : t;
    }
  }
  function Pi(l, t) {
    ud(l, t), (l = l.alternate) && ud(l, t);
  }
  function ed(l) {
    if (l.tag === 13 || l.tag === 31) {
      var t = Ma(l, 67108864);
      t !== null && wl(t, l, 67108864), Pi(l, 67108864);
    }
  }
  function nd(l) {
    if (l.tag === 13 || l.tag === 31) {
      var t = nt();
      t = wn(t);
      var a = Ma(l, t);
      a !== null && wl(a, l, t), Pi(l, t);
    }
  }
  var qn = !0;
  function xm(l, t, a, u) {
    var e = r.T;
    r.T = null;
    var n = _.p;
    try {
      _.p = 2, lc(l, t, a, u);
    } finally {
      _.p = n, r.T = e;
    }
  }
  function Vm(l, t, a, u) {
    var e = r.T;
    r.T = null;
    var n = _.p;
    try {
      _.p = 8, lc(l, t, a, u);
    } finally {
      _.p = n, r.T = e;
    }
  }
  function lc(l, t, a, u) {
    if (qn) {
      var e = tc(u);
      if (e === null)
        Qi(
          l,
          t,
          u,
          Cn,
          a
        ), id(l, u);
      else if (Km(
        e,
        l,
        t,
        a,
        u
      ))
        u.stopPropagation();
      else if (id(l, u), t & 4 && -1 < Lm.indexOf(l)) {
        for (; e !== null; ) {
          var n = Va(e);
          if (n !== null)
            switch (n.tag) {
              case 3:
                if (n = n.stateNode, n.current.memoizedState.isDehydrated) {
                  var f = Ea(n.pendingLanes);
                  if (f !== 0) {
                    var i = n;
                    for (i.pendingLanes |= 2, i.entangledLanes |= 2; f; ) {
                      var c = 1 << 31 - Il(f);
                      i.entanglements[1] |= c, f &= ~c;
                    }
                    Mt(n), (W & 6) === 0 && (gn = kl() + 500, se(0));
                  }
                }
                break;
              case 31:
              case 13:
                i = Ma(n, 2), i !== null && wl(i, n, 2), rn(), Pi(n, 2);
            }
          if (n = tc(u), n === null && Qi(
            l,
            t,
            u,
            Cn,
            a
          ), n === e) break;
          e = n;
        }
        e !== null && u.stopPropagation();
      } else
        Qi(
          l,
          t,
          u,
          null,
          a
        );
    }
  }
  function tc(l) {
    return l = af(l), ac(l);
  }
  var Cn = null;
  function ac(l) {
    if (Cn = null, l = xa(l), l !== null) {
      var t = zl(l);
      if (t === null) l = null;
      else {
        var a = t.tag;
        if (a === 13) {
          if (l = _l(t), l !== null) return l;
          l = null;
        } else if (a === 31) {
          if (l = Rl(t), l !== null) return l;
          l = null;
        } else if (a === 3) {
          if (t.stateNode.current.memoizedState.isDehydrated)
            return t.tag === 3 ? t.stateNode.containerInfo : null;
          l = null;
        } else t !== l && (l = null);
      }
    }
    return Cn = l, null;
  }
  function fd(l) {
    switch (l) {
      case "beforetoggle":
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "resize":
      case "seeked":
      case "submit":
      case "toggle":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 2;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "scroll":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 8;
      case "message":
        switch (Ud()) {
          case oc:
            return 2;
          case hc:
            return 8;
          case Ee:
          case Hd:
            return 32;
          case gc:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var uc = !1, ha = null, ga = null, Sa = null, ge = /* @__PURE__ */ new Map(), Se = /* @__PURE__ */ new Map(), ra = [], Lm = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
    " "
  );
  function id(l, t) {
    switch (l) {
      case "focusin":
      case "focusout":
        ha = null;
        break;
      case "dragenter":
      case "dragleave":
        ga = null;
        break;
      case "mouseover":
      case "mouseout":
        Sa = null;
        break;
      case "pointerover":
      case "pointerout":
        ge.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Se.delete(t.pointerId);
    }
  }
  function re(l, t, a, u, e, n) {
    return l === null || l.nativeEvent !== n ? (l = {
      blockedOn: t,
      domEventName: a,
      eventSystemFlags: u,
      nativeEvent: n,
      targetContainers: [e]
    }, t !== null && (t = Va(t), t !== null && ed(t)), l) : (l.eventSystemFlags |= u, t = l.targetContainers, e !== null && t.indexOf(e) === -1 && t.push(e), l);
  }
  function Km(l, t, a, u, e) {
    switch (t) {
      case "focusin":
        return ha = re(
          ha,
          l,
          t,
          a,
          u,
          e
        ), !0;
      case "dragenter":
        return ga = re(
          ga,
          l,
          t,
          a,
          u,
          e
        ), !0;
      case "mouseover":
        return Sa = re(
          Sa,
          l,
          t,
          a,
          u,
          e
        ), !0;
      case "pointerover":
        var n = e.pointerId;
        return ge.set(
          n,
          re(
            ge.get(n) || null,
            l,
            t,
            a,
            u,
            e
          )
        ), !0;
      case "gotpointercapture":
        return n = e.pointerId, Se.set(
          n,
          re(
            Se.get(n) || null,
            l,
            t,
            a,
            u,
            e
          )
        ), !0;
    }
    return !1;
  }
  function cd(l) {
    var t = xa(l.target);
    if (t !== null) {
      var a = zl(t);
      if (a !== null) {
        if (t = a.tag, t === 13) {
          if (t = _l(a), t !== null) {
            l.blockedOn = t, Ec(l.priority, function() {
              nd(a);
            });
            return;
          }
        } else if (t === 31) {
          if (t = Rl(a), t !== null) {
            l.blockedOn = t, Ec(l.priority, function() {
              nd(a);
            });
            return;
          }
        } else if (t === 3 && a.stateNode.current.memoizedState.isDehydrated) {
          l.blockedOn = a.tag === 3 ? a.stateNode.containerInfo : null;
          return;
        }
      }
    }
    l.blockedOn = null;
  }
  function Bn(l) {
    if (l.blockedOn !== null) return !1;
    for (var t = l.targetContainers; 0 < t.length; ) {
      var a = tc(l.nativeEvent);
      if (a === null) {
        a = l.nativeEvent;
        var u = new a.constructor(
          a.type,
          a
        );
        tf = u, a.target.dispatchEvent(u), tf = null;
      } else
        return t = Va(a), t !== null && ed(t), l.blockedOn = a, !1;
      t.shift();
    }
    return !0;
  }
  function sd(l, t, a) {
    Bn(l) && a.delete(t);
  }
  function Jm() {
    uc = !1, ha !== null && Bn(ha) && (ha = null), ga !== null && Bn(ga) && (ga = null), Sa !== null && Bn(Sa) && (Sa = null), ge.forEach(sd), Se.forEach(sd);
  }
  function Yn(l, t) {
    l.blockedOn === t && (l.blockedOn = null, uc || (uc = !0, A.unstable_scheduleCallback(
      A.unstable_NormalPriority,
      Jm
    )));
  }
  var Gn = null;
  function yd(l) {
    Gn !== l && (Gn = l, A.unstable_scheduleCallback(
      A.unstable_NormalPriority,
      function() {
        Gn === l && (Gn = null);
        for (var t = 0; t < l.length; t += 3) {
          var a = l[t], u = l[t + 1], e = l[t + 2];
          if (typeof u != "function") {
            if (ac(u || a) === null)
              continue;
            break;
          }
          var n = Va(a);
          n !== null && (l.splice(t, 3), t -= 3, ti(
            n,
            {
              pending: !0,
              data: e,
              method: a.method,
              action: u
            },
            u,
            e
          ));
        }
      }
    ));
  }
  function _u(l) {
    function t(c) {
      return Yn(c, l);
    }
    ha !== null && Yn(ha, l), ga !== null && Yn(ga, l), Sa !== null && Yn(Sa, l), ge.forEach(t), Se.forEach(t);
    for (var a = 0; a < ra.length; a++) {
      var u = ra[a];
      u.blockedOn === l && (u.blockedOn = null);
    }
    for (; 0 < ra.length && (a = ra[0], a.blockedOn === null); )
      cd(a), a.blockedOn === null && ra.shift();
    if (a = (l.ownerDocument || l).$$reactFormReplay, a != null)
      for (u = 0; u < a.length; u += 3) {
        var e = a[u], n = a[u + 1], f = e[Zl] || null;
        if (typeof n == "function")
          f || yd(a);
        else if (f) {
          var i = null;
          if (n && n.hasAttribute("formAction")) {
            if (e = n, f = n[Zl] || null)
              i = f.formAction;
            else if (ac(e) !== null) continue;
          } else i = f.action;
          typeof i == "function" ? a[u + 1] = i : (a.splice(u, 3), u -= 3), yd(a);
        }
      }
  }
  function dd() {
    function l(n) {
      n.canIntercept && n.info === "react-transition" && n.intercept({
        handler: function() {
          return new Promise(function(f) {
            return e = f;
          });
        },
        focusReset: "manual",
        scroll: "manual"
      });
    }
    function t() {
      e !== null && (e(), e = null), u || setTimeout(a, 20);
    }
    function a() {
      if (!u && !navigation.transition) {
        var n = navigation.currentEntry;
        n && n.url != null && navigation.navigate(n.url, {
          state: n.getState(),
          info: "react-transition",
          history: "replace"
        });
      }
    }
    if (typeof navigation == "object") {
      var u = !1, e = null;
      return navigation.addEventListener("navigate", l), navigation.addEventListener("navigatesuccess", t), navigation.addEventListener("navigateerror", t), setTimeout(a, 100), function() {
        u = !0, navigation.removeEventListener("navigate", l), navigation.removeEventListener("navigatesuccess", t), navigation.removeEventListener("navigateerror", t), e !== null && (e(), e = null);
      };
    }
  }
  function ec(l) {
    this._internalRoot = l;
  }
  jn.prototype.render = ec.prototype.render = function(l) {
    var t = this._internalRoot;
    if (t === null) throw Error(h(409));
    var a = t.current, u = nt();
    ad(a, u, l, t, null, null);
  }, jn.prototype.unmount = ec.prototype.unmount = function() {
    var l = this._internalRoot;
    if (l !== null) {
      this._internalRoot = null;
      var t = l.containerInfo;
      ad(l.current, 2, null, l, null, null), rn(), t[Za] = null;
    }
  };
  function jn(l) {
    this._internalRoot = l;
  }
  jn.prototype.unstable_scheduleHydration = function(l) {
    if (l) {
      var t = Tc();
      l = { blockedOn: null, target: l, priority: t };
      for (var a = 0; a < ra.length && t !== 0 && t < ra[a].priority; a++) ;
      ra.splice(a, 0, l), a === 0 && cd(l);
    }
  };
  var vd = ul.version;
  if (vd !== "19.2.0")
    throw Error(
      h(
        527,
        vd,
        "19.2.0"
      )
    );
  _.findDOMNode = function(l) {
    var t = l._reactInternals;
    if (t === void 0)
      throw typeof l.render == "function" ? Error(h(188)) : (l = Object.keys(l).join(","), Error(h(268, l)));
    return l = E(t), l = l !== null ? $(l) : null, l = l === null ? null : l.stateNode, l;
  };
  var wm = {
    bundleType: 0,
    version: "19.2.0",
    rendererPackageName: "react-dom",
    currentDispatcherRef: r,
    reconcilerVersion: "19.2.0"
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Xn = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Xn.isDisabled && Xn.supportsFiber)
      try {
        Mu = Xn.inject(
          wm
        ), Fl = Xn;
      } catch {
      }
  }
  return ze.createRoot = function(l, t) {
    if (!cl(l)) throw Error(h(299));
    var a = !1, u = "", e = bs, n = zs, f = Ts;
    return t != null && (t.unstable_strictMode === !0 && (a = !0), t.identifierPrefix !== void 0 && (u = t.identifierPrefix), t.onUncaughtError !== void 0 && (e = t.onUncaughtError), t.onCaughtError !== void 0 && (n = t.onCaughtError), t.onRecoverableError !== void 0 && (f = t.onRecoverableError)), t = ld(
      l,
      1,
      !1,
      null,
      null,
      a,
      u,
      null,
      e,
      n,
      f,
      dd
    ), l[Za] = t.current, Xi(l), new ec(t);
  }, ze.hydrateRoot = function(l, t, a) {
    if (!cl(l)) throw Error(h(299));
    var u = !1, e = "", n = bs, f = zs, i = Ts, c = null;
    return a != null && (a.unstable_strictMode === !0 && (u = !0), a.identifierPrefix !== void 0 && (e = a.identifierPrefix), a.onUncaughtError !== void 0 && (n = a.onUncaughtError), a.onCaughtError !== void 0 && (f = a.onCaughtError), a.onRecoverableError !== void 0 && (i = a.onRecoverableError), a.formState !== void 0 && (c = a.formState)), t = ld(
      l,
      1,
      !0,
      t,
      a ?? null,
      u,
      e,
      c,
      n,
      f,
      i,
      dd
    ), t.context = td(null), a = t.current, u = nt(), u = wn(u), e = ua(u), e.callback = null, ea(a, e, u), a = u, t.current.lanes = a, Uu(t, a), Mt(t), l[Za] = t.current, Xi(l), new jn(t);
  }, ze.version = "19.2.0", ze;
}
var Ed;
function no() {
  if (Ed) return ic.exports;
  Ed = 1;
  function A() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(A);
      } catch (ul) {
        console.error(ul);
      }
  }
  return A(), ic.exports = eo(), ic.exports;
}
var fo = no();
const _d = () => "https://rw-ts-test-app-production.up.railway.app/", io = [
  {
    id: 1,
    name: "Video Game Guitar",
    image: "example-guitar-video-games.jpg",
    description: "The Video Game Guitar is a unique acoustic guitar that features a design inspired by video games. It has a sleek, high-gloss finish and a comfortable playability. The guitar's ergonomic body and fast neck profile ensure comfortable playability for hours on end.",
    shortDescription: "A unique electric guitar with a video game design, high-gloss finish, and comfortable playability.",
    price: 699
  },
  {
    id: 2,
    name: "Superhero Guitar",
    image: "example-guitar-superhero.jpg",
    description: "The Superhero Guitar is a bold black electric guitar that stands out with its unique superhero logo design. Its sleek, high-gloss finish and powerful pickups make it perfect for high-energy performances. The guitar's ergonomic body and fast neck profile ensure comfortable playability for hours on end.",
    shortDescription: "A bold black electric guitar with a unique superhero logo, high-gloss finish, and powerful pickups.",
    price: 699
  },
  {
    id: 3,
    name: "Motherboard Guitar",
    image: "example-guitar-motherboard.jpg",
    description: "This guitar is a tribute to the motherboard of a computer. It's a unique and stylish instrument that will make you feel like a hacker. The intricate circuit-inspired design features actual LED lights that pulse with your playing intensity, while the neck is inlaid with binary code patterns that glow under stage lights. Each pickup has been custom-wound to produce tones ranging from clean digital precision to glitched-out distortion, perfect for electronic music fusion. The Motherboard Guitar seamlessly bridges the gap between traditional craftsmanship and cutting-edge technology, making it the ultimate instrument for the digital age musician.",
    shortDescription: "A tech-inspired electric guitar featuring LED lights and binary code inlays that glow under stage lights.",
    price: 649
  },
  {
    id: 4,
    name: "Racing Guitar",
    image: "example-guitar-racing.jpg",
    description: "Engineered for speed and precision, the Racing Guitar embodies the spirit of motorsport in every curve and contour. Its aerodynamic body, painted in classic racing stripes and high-gloss finish, is crafted from lightweight materials that allow for effortless play during extended performances. The custom low-action setup and streamlined neck profile enable lightning-fast fretwork, while specially designed pickups deliver a high-octane tone that cuts through any mix. Built with performance-grade hardware including racing-inspired control knobs and checkered flag inlays, this guitar isn't just played—it's driven to the limits of musical possibility.",
    shortDescription: "A lightweight, aerodynamic guitar with racing stripes and a low-action setup designed for speed and precision.",
    price: 679
  },
  {
    id: 5,
    name: "Steamer Trunk Guitar",
    image: "example-guitar-steamer-trunk.jpg",
    description: "The Steamer Trunk Guitar is a semi-hollow body instrument that exudes vintage charm and character. Crafted from reclaimed antique luggage wood, it features brass hardware that adds a touch of elegance and durability. The fretboard is adorned with a world map inlay, making it a unique piece that tells a story of travel and adventure.",
    shortDescription: "A semi-hollow body guitar with brass hardware and a world map inlay, crafted from reclaimed antique luggage wood.",
    price: 629
  },
  {
    id: 6,
    name: "Travelin' Man Guitar",
    image: "example-guitar-traveling.jpg",
    description: "The Travelin' Man Guitar is an acoustic masterpiece adorned with vintage postcards from around the world. Each postcard tells a story of adventure and wanderlust, making this guitar a unique piece of art. Its rich, resonant tones and comfortable playability make it perfect for musicians who love to travel and perform.",
    shortDescription: "An acoustic guitar with vintage postcards, rich tones, and comfortable playability.",
    price: 499
  },
  {
    id: 7,
    name: "Flowerly Love Guitar",
    image: "example-guitar-flowers.jpg",
    description: "The Flowerly Love Guitar is an acoustic masterpiece adorned with intricate floral designs on its body. Each flower is hand-painted, adding a touch of nature's beauty to the instrument. Its warm, resonant tones make it perfect for both intimate performances and larger gatherings.",
    shortDescription: "An acoustic guitar with hand-painted floral designs and warm, resonant tones.",
    price: 599
  }
];
function co({
  id: A,
  children: ul
}) {
  const V = io.find((h) => h.id === +A);
  return V ? /* @__PURE__ */ Yl.jsxs("div", { className: "my-4 rounded-lg overflow-hidden border border-orange-500/20 bg-gray-800/50", children: [
    /* @__PURE__ */ Yl.jsx("div", { className: "aspect-4/3 relative overflow-hidden", children: /* @__PURE__ */ Yl.jsx(
      "img",
      {
        src: `${_d()}${V.image}`,
        alt: V.name,
        className: "w-full h-full object-cover"
      }
    ) }),
    /* @__PURE__ */ Yl.jsxs("div", { className: "p-4", children: [
      /* @__PURE__ */ Yl.jsx("h3", { className: "text-lg font-semibold text-white mb-2", children: V.name }),
      /* @__PURE__ */ Yl.jsx("p", { className: "text-sm text-gray-300 mb-3 line-clamp-2", children: V.shortDescription }),
      /* @__PURE__ */ Yl.jsxs("div", { className: "flex items-center justify-between", children: [
        /* @__PURE__ */ Yl.jsxs("div", { className: "text-lg font-bold text-emerald-400", children: [
          "$",
          V.price
        ] }),
        ul
      ] })
    ] })
  ] }) : null;
}
const pd = pu.createContext({
  toolOutput: null
});
function so({
  children: A
}) {
  const [ul, V] = pu.useState(() => window.openai.toolOutput);
  pu.useEffect(() => {
    let cl = setInterval(() => {
      window.openai && window.openai.toolOutput && (V(window.openai.toolOutput), clearInterval(cl));
    }, 100);
    return () => clearInterval(cl);
  }, []);
  const h = pu.useMemo(
    () => ({
      toolOutput: ul
    }),
    [ul]
  );
  return /* @__PURE__ */ Yl.jsx(pd.Provider, { value: h, children: A });
}
function yo() {
  const { toolOutput: A } = pu.useContext(pd);
  return A;
}
const Ad = "tanstack-app-root";
function vo() {
  const A = document.getElementById(Ad);
  if (!A)
    throw new Error(`Container #${Ad} not found`);
  let ul = A._reactRoot;
  return ul || (ul = fo.createRoot(A), A._reactRoot = ul), ul;
}
function mo() {
  const A = yo();
  return A?.id ? /* @__PURE__ */ Yl.jsx(co, { id: A.id, children: /* @__PURE__ */ Yl.jsx(
    "a",
    {
      onClick: () => {
        window.openai.openExternal({
          href: `${_d()}example/guitars/${A.id}`
        });
      },
      children: /* @__PURE__ */ Yl.jsx("button", { className: "bg-linear-to-r from-orange-500 to-red-600 text-white px-4 py-1.5 rounded-lg text-sm hover:opacity-90 transition-opacity", children: "View Details" })
    }
  ) }) : null;
}
function oo() {
  vo().render(
    /* @__PURE__ */ Yl.jsx(Pm.StrictMode, { children: /* @__PURE__ */ Yl.jsx(so, { children: /* @__PURE__ */ Yl.jsx(mo, {}) }) })
  );
}
oo();

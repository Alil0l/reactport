function Ed(e, t) {
  for (var n = 0; n < t.length; n++) {
    const r = t[n];
    if (typeof r != "string" && !Array.isArray(r)) {
      for (const i in r)
        if (i !== "default" && !(i in e)) {
          const o = Object.getOwnPropertyDescriptor(r, i);
          o &&
            Object.defineProperty(
              e,
              i,
              o.get ? o : { enumerable: !0, get: () => r[i] }
            );
        }
    }
  }
  return Object.freeze(
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" })
  );
}
(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const i of document.querySelectorAll('link[rel="modulepreload"]')) r(i);
  new MutationObserver((i) => {
    for (const o of i)
      if (o.type === "childList")
        for (const l of o.addedNodes)
          l.tagName === "LINK" && l.rel === "modulepreload" && r(l);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(i) {
    const o = {};
    return (
      i.integrity && (o.integrity = i.integrity),
      i.referrerPolicy && (o.referrerPolicy = i.referrerPolicy),
      i.crossOrigin === "use-credentials"
        ? (o.credentials = "include")
        : i.crossOrigin === "anonymous"
        ? (o.credentials = "omit")
        : (o.credentials = "same-origin"),
      o
    );
  }
  function r(i) {
    if (i.ep) return;
    i.ep = !0;
    const o = n(i);
    fetch(i.href, o);
  }
})();
function Ws(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
var kd = { exports: {} },
  El = {},
  Cd = { exports: {} },
  X = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Ki = Symbol.for("react.element"),
  Zm = Symbol.for("react.portal"),
  qm = Symbol.for("react.fragment"),
  ev = Symbol.for("react.strict_mode"),
  tv = Symbol.for("react.profiler"),
  nv = Symbol.for("react.provider"),
  rv = Symbol.for("react.context"),
  iv = Symbol.for("react.forward_ref"),
  ov = Symbol.for("react.suspense"),
  lv = Symbol.for("react.memo"),
  av = Symbol.for("react.lazy"),
  gc = Symbol.iterator;
function sv(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (gc && e[gc]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var Pd = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  _d = Object.assign,
  Nd = {};
function Vr(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = Nd),
    (this.updater = n || Pd);
}
Vr.prototype.isReactComponent = {};
Vr.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
    );
  this.updater.enqueueSetState(this, e, t, "setState");
};
Vr.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function Rd() {}
Rd.prototype = Vr.prototype;
function Hs(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = Nd),
    (this.updater = n || Pd);
}
var Vs = (Hs.prototype = new Rd());
Vs.constructor = Hs;
_d(Vs, Vr.prototype);
Vs.isPureReactComponent = !0;
var yc = Array.isArray,
  Ld = Object.prototype.hasOwnProperty,
  Ys = { current: null },
  Td = { key: !0, ref: !0, __self: !0, __source: !0 };
function Od(e, t, n) {
  var r,
    i = {},
    o = null,
    l = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (l = t.ref),
    t.key !== void 0 && (o = "" + t.key),
    t))
      Ld.call(t, r) && !Td.hasOwnProperty(r) && (i[r] = t[r]);
  var a = arguments.length - 2;
  if (a === 1) i.children = n;
  else if (1 < a) {
    for (var s = Array(a), u = 0; u < a; u++) s[u] = arguments[u + 2];
    i.children = s;
  }
  if (e && e.defaultProps)
    for (r in ((a = e.defaultProps), a)) i[r] === void 0 && (i[r] = a[r]);
  return {
    $$typeof: Ki,
    type: e,
    key: o,
    ref: l,
    props: i,
    _owner: Ys.current,
  };
}
function uv(e, t) {
  return {
    $$typeof: Ki,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function Qs(e) {
  return typeof e == "object" && e !== null && e.$$typeof === Ki;
}
function cv(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var wc = /\/+/g;
function Xl(e, t) {
  return typeof e == "object" && e !== null && e.key != null
    ? cv("" + e.key)
    : t.toString(36);
}
function Oo(e, t, n, r, i) {
  var o = typeof e;
  (o === "undefined" || o === "boolean") && (e = null);
  var l = !1;
  if (e === null) l = !0;
  else
    switch (o) {
      case "string":
      case "number":
        l = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case Ki:
          case Zm:
            l = !0;
        }
    }
  if (l)
    return (
      (l = e),
      (i = i(l)),
      (e = r === "" ? "." + Xl(l, 0) : r),
      yc(i)
        ? ((n = ""),
          e != null && (n = e.replace(wc, "$&/") + "/"),
          Oo(i, t, n, "", function (u) {
            return u;
          }))
        : i != null &&
          (Qs(i) &&
            (i = uv(
              i,
              n +
                (!i.key || (l && l.key === i.key)
                  ? ""
                  : ("" + i.key).replace(wc, "$&/") + "/") +
                e
            )),
          t.push(i)),
      1
    );
  if (((l = 0), (r = r === "" ? "." : r + ":"), yc(e)))
    for (var a = 0; a < e.length; a++) {
      o = e[a];
      var s = r + Xl(o, a);
      l += Oo(o, t, n, s, i);
    }
  else if (((s = sv(e)), typeof s == "function"))
    for (e = s.call(e), a = 0; !(o = e.next()).done; )
      (o = o.value), (s = r + Xl(o, a++)), (l += Oo(o, t, n, s, i));
  else if (o === "object")
    throw (
      ((t = String(e)),
      Error(
        "Objects are not valid as a React child (found: " +
          (t === "[object Object]"
            ? "object with keys {" + Object.keys(e).join(", ") + "}"
            : t) +
          "). If you meant to render a collection of children, use an array instead."
      ))
    );
  return l;
}
function fo(e, t, n) {
  if (e == null) return e;
  var r = [],
    i = 0;
  return (
    Oo(e, r, "", "", function (o) {
      return t.call(n, o, i++);
    }),
    r
  );
}
function fv(e) {
  if (e._status === -1) {
    var t = e._result;
    (t = t()),
      t.then(
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 1), (e._result = n));
        },
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 2), (e._result = n));
        }
      ),
      e._status === -1 && ((e._status = 0), (e._result = t));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var Ve = { current: null },
  Mo = { transition: null },
  dv = {
    ReactCurrentDispatcher: Ve,
    ReactCurrentBatchConfig: Mo,
    ReactCurrentOwner: Ys,
  };
function Md() {
  throw Error("act(...) is not supported in production builds of React.");
}
X.Children = {
  map: fo,
  forEach: function (e, t, n) {
    fo(
      e,
      function () {
        t.apply(this, arguments);
      },
      n
    );
  },
  count: function (e) {
    var t = 0;
    return (
      fo(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      fo(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!Qs(e))
      throw Error(
        "React.Children.only expected to receive a single React element child."
      );
    return e;
  },
};
X.Component = Vr;
X.Fragment = qm;
X.Profiler = tv;
X.PureComponent = Hs;
X.StrictMode = ev;
X.Suspense = ov;
X.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = dv;
X.act = Md;
X.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        e +
        "."
    );
  var r = _d({}, e.props),
    i = e.key,
    o = e.ref,
    l = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((o = t.ref), (l = Ys.current)),
      t.key !== void 0 && (i = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var a = e.type.defaultProps;
    for (s in t)
      Ld.call(t, s) &&
        !Td.hasOwnProperty(s) &&
        (r[s] = t[s] === void 0 && a !== void 0 ? a[s] : t[s]);
  }
  var s = arguments.length - 2;
  if (s === 1) r.children = n;
  else if (1 < s) {
    a = Array(s);
    for (var u = 0; u < s; u++) a[u] = arguments[u + 2];
    r.children = a;
  }
  return { $$typeof: Ki, type: e.type, key: i, ref: o, props: r, _owner: l };
};
X.createContext = function (e) {
  return (
    (e = {
      $$typeof: rv,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: nv, _context: e }),
    (e.Consumer = e)
  );
};
X.createElement = Od;
X.createFactory = function (e) {
  var t = Od.bind(null, e);
  return (t.type = e), t;
};
X.createRef = function () {
  return { current: null };
};
X.forwardRef = function (e) {
  return { $$typeof: iv, render: e };
};
X.isValidElement = Qs;
X.lazy = function (e) {
  return { $$typeof: av, _payload: { _status: -1, _result: e }, _init: fv };
};
X.memo = function (e, t) {
  return { $$typeof: lv, type: e, compare: t === void 0 ? null : t };
};
X.startTransition = function (e) {
  var t = Mo.transition;
  Mo.transition = {};
  try {
    e();
  } finally {
    Mo.transition = t;
  }
};
X.unstable_act = Md;
X.useCallback = function (e, t) {
  return Ve.current.useCallback(e, t);
};
X.useContext = function (e) {
  return Ve.current.useContext(e);
};
X.useDebugValue = function () {};
X.useDeferredValue = function (e) {
  return Ve.current.useDeferredValue(e);
};
X.useEffect = function (e, t) {
  return Ve.current.useEffect(e, t);
};
X.useId = function () {
  return Ve.current.useId();
};
X.useImperativeHandle = function (e, t, n) {
  return Ve.current.useImperativeHandle(e, t, n);
};
X.useInsertionEffect = function (e, t) {
  return Ve.current.useInsertionEffect(e, t);
};
X.useLayoutEffect = function (e, t) {
  return Ve.current.useLayoutEffect(e, t);
};
X.useMemo = function (e, t) {
  return Ve.current.useMemo(e, t);
};
X.useReducer = function (e, t, n) {
  return Ve.current.useReducer(e, t, n);
};
X.useRef = function (e) {
  return Ve.current.useRef(e);
};
X.useState = function (e) {
  return Ve.current.useState(e);
};
X.useSyncExternalStore = function (e, t, n) {
  return Ve.current.useSyncExternalStore(e, t, n);
};
X.useTransition = function () {
  return Ve.current.useTransition();
};
X.version = "18.3.1";
Cd.exports = X;
var N = Cd.exports;
const Ks = Ws(N),
  pv = Ed({ __proto__: null, default: Ks }, [N]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var hv = N,
  mv = Symbol.for("react.element"),
  vv = Symbol.for("react.fragment"),
  gv = Object.prototype.hasOwnProperty,
  yv = hv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  wv = { key: !0, ref: !0, __self: !0, __source: !0 };
function Ad(e, t, n) {
  var r,
    i = {},
    o = null,
    l = null;
  n !== void 0 && (o = "" + n),
    t.key !== void 0 && (o = "" + t.key),
    t.ref !== void 0 && (l = t.ref);
  for (r in t) gv.call(t, r) && !wv.hasOwnProperty(r) && (i[r] = t[r]);
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) i[r] === void 0 && (i[r] = t[r]);
  return {
    $$typeof: mv,
    type: e,
    key: o,
    ref: l,
    props: i,
    _owner: yv.current,
  };
}
El.Fragment = vv;
El.jsx = Ad;
El.jsxs = Ad;
kd.exports = El;
var R = kd.exports,
  Ta = {},
  zd = { exports: {} },
  lt = {},
  jd = { exports: {} },
  Dd = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(A, W) {
    var H = A.length;
    A.push(W);
    e: for (; 0 < H; ) {
      var Z = (H - 1) >>> 1,
        ae = A[Z];
      if (0 < i(ae, W)) (A[Z] = W), (A[H] = ae), (H = Z);
      else break e;
    }
  }
  function n(A) {
    return A.length === 0 ? null : A[0];
  }
  function r(A) {
    if (A.length === 0) return null;
    var W = A[0],
      H = A.pop();
    if (H !== W) {
      A[0] = H;
      e: for (var Z = 0, ae = A.length, Pt = ae >>> 1; Z < Pt; ) {
        var Oe = 2 * (Z + 1) - 1,
          mt = A[Oe],
          be = Oe + 1,
          ir = A[be];
        if (0 > i(mt, H))
          be < ae && 0 > i(ir, mt)
            ? ((A[Z] = ir), (A[be] = H), (Z = be))
            : ((A[Z] = mt), (A[Oe] = H), (Z = Oe));
        else if (be < ae && 0 > i(ir, H)) (A[Z] = ir), (A[be] = H), (Z = be);
        else break e;
      }
    }
    return W;
  }
  function i(A, W) {
    var H = A.sortIndex - W.sortIndex;
    return H !== 0 ? H : A.id - W.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var o = performance;
    e.unstable_now = function () {
      return o.now();
    };
  } else {
    var l = Date,
      a = l.now();
    e.unstable_now = function () {
      return l.now() - a;
    };
  }
  var s = [],
    u = [],
    f = 1,
    c = null,
    p = 3,
    E = !1,
    x = !1,
    w = !1,
    P = typeof setTimeout == "function" ? setTimeout : null,
    h = typeof clearTimeout == "function" ? clearTimeout : null,
    d = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function m(A) {
    for (var W = n(u); W !== null; ) {
      if (W.callback === null) r(u);
      else if (W.startTime <= A)
        r(u), (W.sortIndex = W.expirationTime), t(s, W);
      else break;
      W = n(u);
    }
  }
  function k(A) {
    if (((w = !1), m(A), !x))
      if (n(s) !== null) (x = !0), en(_);
      else {
        var W = n(u);
        W !== null && de(k, W.startTime - A);
      }
  }
  function _(A, W) {
    (x = !1), w && ((w = !1), h(T), (T = -1)), (E = !0);
    var H = p;
    try {
      for (
        m(W), c = n(s);
        c !== null && (!(c.expirationTime > W) || (A && !G()));

      ) {
        var Z = c.callback;
        if (typeof Z == "function") {
          (c.callback = null), (p = c.priorityLevel);
          var ae = Z(c.expirationTime <= W);
          (W = e.unstable_now()),
            typeof ae == "function" ? (c.callback = ae) : c === n(s) && r(s),
            m(W);
        } else r(s);
        c = n(s);
      }
      if (c !== null) var Pt = !0;
      else {
        var Oe = n(u);
        Oe !== null && de(k, Oe.startTime - W), (Pt = !1);
      }
      return Pt;
    } finally {
      (c = null), (p = H), (E = !1);
    }
  }
  var g = !1,
    O = null,
    T = -1,
    I = 5,
    D = -1;
  function G() {
    return !(e.unstable_now() - D < I);
  }
  function fe() {
    if (O !== null) {
      var A = e.unstable_now();
      D = A;
      var W = !0;
      try {
        W = O(!0, A);
      } finally {
        W ? Re() : ((g = !1), (O = null));
      }
    } else g = !1;
  }
  var Re;
  if (typeof d == "function")
    Re = function () {
      d(fe);
    };
  else if (typeof MessageChannel < "u") {
    var ie = new MessageChannel(),
      Ct = ie.port2;
    (ie.port1.onmessage = fe),
      (Re = function () {
        Ct.postMessage(null);
      });
  } else
    Re = function () {
      P(fe, 0);
    };
  function en(A) {
    (O = A), g || ((g = !0), Re());
  }
  function de(A, W) {
    T = P(function () {
      A(e.unstable_now());
    }, W);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (A) {
      A.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      x || E || ((x = !0), en(_));
    }),
    (e.unstable_forceFrameRate = function (A) {
      0 > A || 125 < A
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
          )
        : (I = 0 < A ? Math.floor(1e3 / A) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return p;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(s);
    }),
    (e.unstable_next = function (A) {
      switch (p) {
        case 1:
        case 2:
        case 3:
          var W = 3;
          break;
        default:
          W = p;
      }
      var H = p;
      p = W;
      try {
        return A();
      } finally {
        p = H;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (A, W) {
      switch (A) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          A = 3;
      }
      var H = p;
      p = A;
      try {
        return W();
      } finally {
        p = H;
      }
    }),
    (e.unstable_scheduleCallback = function (A, W, H) {
      var Z = e.unstable_now();
      switch (
        (typeof H == "object" && H !== null
          ? ((H = H.delay), (H = typeof H == "number" && 0 < H ? Z + H : Z))
          : (H = Z),
        A)
      ) {
        case 1:
          var ae = -1;
          break;
        case 2:
          ae = 250;
          break;
        case 5:
          ae = 1073741823;
          break;
        case 4:
          ae = 1e4;
          break;
        default:
          ae = 5e3;
      }
      return (
        (ae = H + ae),
        (A = {
          id: f++,
          callback: W,
          priorityLevel: A,
          startTime: H,
          expirationTime: ae,
          sortIndex: -1,
        }),
        H > Z
          ? ((A.sortIndex = H),
            t(u, A),
            n(s) === null &&
              A === n(u) &&
              (w ? (h(T), (T = -1)) : (w = !0), de(k, H - Z)))
          : ((A.sortIndex = ae), t(s, A), x || E || ((x = !0), en(_))),
        A
      );
    }),
    (e.unstable_shouldYield = G),
    (e.unstable_wrapCallback = function (A) {
      var W = p;
      return function () {
        var H = p;
        p = W;
        try {
          return A.apply(this, arguments);
        } finally {
          p = H;
        }
      };
    });
})(Dd);
jd.exports = Dd;
var xv = jd.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Sv = N,
  ot = xv;
function L(e) {
  for (
    var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1;
    n < arguments.length;
    n++
  )
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return (
    "Minified React error #" +
    e +
    "; visit " +
    t +
    " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  );
}
var Id = new Set(),
  Ni = {};
function nr(e, t) {
  zr(e, t), zr(e + "Capture", t);
}
function zr(e, t) {
  for (Ni[e] = t, e = 0; e < t.length; e++) Id.add(t[e]);
}
var Vt = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  Oa = Object.prototype.hasOwnProperty,
  Ev =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  xc = {},
  Sc = {};
function kv(e) {
  return Oa.call(Sc, e)
    ? !0
    : Oa.call(xc, e)
    ? !1
    : Ev.test(e)
    ? (Sc[e] = !0)
    : ((xc[e] = !0), !1);
}
function Cv(e, t, n, r) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof t) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return r
        ? !1
        : n !== null
        ? !n.acceptsBooleans
        : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function Pv(e, t, n, r) {
  if (t === null || typeof t > "u" || Cv(e, t, n, r)) return !0;
  if (r) return !1;
  if (n !== null)
    switch (n.type) {
      case 3:
        return !t;
      case 4:
        return t === !1;
      case 5:
        return isNaN(t);
      case 6:
        return isNaN(t) || 1 > t;
    }
  return !1;
}
function Ye(e, t, n, r, i, o, l) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = i),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = o),
    (this.removeEmptyString = l);
}
var je = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    je[e] = new Ye(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  je[t] = new Ye(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  je[e] = new Ye(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  je[e] = new Ye(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    je[e] = new Ye(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  je[e] = new Ye(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  je[e] = new Ye(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  je[e] = new Ye(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  je[e] = new Ye(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var Xs = /[\-:]([a-z])/g;
function Gs(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(Xs, Gs);
    je[t] = new Ye(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(Xs, Gs);
    je[t] = new Ye(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(Xs, Gs);
  je[t] = new Ye(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  je[e] = new Ye(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
je.xlinkHref = new Ye(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1
);
["src", "href", "action", "formAction"].forEach(function (e) {
  je[e] = new Ye(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function Js(e, t, n, r) {
  var i = je.hasOwnProperty(t) ? je[t] : null;
  (i !== null
    ? i.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== "o" && t[0] !== "O") ||
      (t[1] !== "n" && t[1] !== "N")) &&
    (Pv(t, n, i, r) && (n = null),
    r || i === null
      ? kv(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
      : i.mustUseProperty
      ? (e[i.propertyName] = n === null ? (i.type === 3 ? !1 : "") : n)
      : ((t = i.attributeName),
        (r = i.attributeNamespace),
        n === null
          ? e.removeAttribute(t)
          : ((i = i.type),
            (n = i === 3 || (i === 4 && n === !0) ? "" : "" + n),
            r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var Zt = Sv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  po = Symbol.for("react.element"),
  dr = Symbol.for("react.portal"),
  pr = Symbol.for("react.fragment"),
  Zs = Symbol.for("react.strict_mode"),
  Ma = Symbol.for("react.profiler"),
  Fd = Symbol.for("react.provider"),
  Ud = Symbol.for("react.context"),
  qs = Symbol.for("react.forward_ref"),
  Aa = Symbol.for("react.suspense"),
  za = Symbol.for("react.suspense_list"),
  eu = Symbol.for("react.memo"),
  sn = Symbol.for("react.lazy"),
  bd = Symbol.for("react.offscreen"),
  Ec = Symbol.iterator;
function Zr(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (Ec && e[Ec]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var we = Object.assign,
  Gl;
function ui(e) {
  if (Gl === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      Gl = (t && t[1]) || "";
    }
  return (
    `
` +
    Gl +
    e
  );
}
var Jl = !1;
function Zl(e, t) {
  if (!e || Jl) return "";
  Jl = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t)
      if (
        ((t = function () {
          throw Error();
        }),
        Object.defineProperty(t.prototype, "props", {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == "object" && Reflect.construct)
      ) {
        try {
          Reflect.construct(t, []);
        } catch (u) {
          var r = u;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (u) {
          r = u;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (u) {
        r = u;
      }
      e();
    }
  } catch (u) {
    if (u && r && typeof u.stack == "string") {
      for (
        var i = u.stack.split(`
`),
          o = r.stack.split(`
`),
          l = i.length - 1,
          a = o.length - 1;
        1 <= l && 0 <= a && i[l] !== o[a];

      )
        a--;
      for (; 1 <= l && 0 <= a; l--, a--)
        if (i[l] !== o[a]) {
          if (l !== 1 || a !== 1)
            do
              if ((l--, a--, 0 > a || i[l] !== o[a])) {
                var s =
                  `
` + i[l].replace(" at new ", " at ");
                return (
                  e.displayName &&
                    s.includes("<anonymous>") &&
                    (s = s.replace("<anonymous>", e.displayName)),
                  s
                );
              }
            while (1 <= l && 0 <= a);
          break;
        }
    }
  } finally {
    (Jl = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : "") ? ui(e) : "";
}
function _v(e) {
  switch (e.tag) {
    case 5:
      return ui(e.type);
    case 16:
      return ui("Lazy");
    case 13:
      return ui("Suspense");
    case 19:
      return ui("SuspenseList");
    case 0:
    case 2:
    case 15:
      return (e = Zl(e.type, !1)), e;
    case 11:
      return (e = Zl(e.type.render, !1)), e;
    case 1:
      return (e = Zl(e.type, !0)), e;
    default:
      return "";
  }
}
function ja(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case pr:
      return "Fragment";
    case dr:
      return "Portal";
    case Ma:
      return "Profiler";
    case Zs:
      return "StrictMode";
    case Aa:
      return "Suspense";
    case za:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case Ud:
        return (e.displayName || "Context") + ".Consumer";
      case Fd:
        return (e._context.displayName || "Context") + ".Provider";
      case qs:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case eu:
        return (
          (t = e.displayName || null), t !== null ? t : ja(e.type) || "Memo"
        );
      case sn:
        (t = e._payload), (e = e._init);
        try {
          return ja(e(t));
        } catch {}
    }
  return null;
}
function Nv(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return "Cache";
    case 9:
      return (t.displayName || "Context") + ".Consumer";
    case 10:
      return (t._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return (
        (e = t.render),
        (e = e.displayName || e.name || ""),
        t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
      );
    case 7:
      return "Fragment";
    case 5:
      return t;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return ja(t);
    case 8:
      return t === Zs ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == "function") return t.displayName || t.name || null;
      if (typeof t == "string") return t;
  }
  return null;
}
function kn(e) {
  switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return e;
    case "object":
      return e;
    default:
      return "";
  }
}
function Bd(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (t === "checkbox" || t === "radio")
  );
}
function Rv(e) {
  var t = Bd(e) ? "checked" : "value",
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = "" + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof n < "u" &&
    typeof n.get == "function" &&
    typeof n.set == "function"
  ) {
    var i = n.get,
      o = n.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return i.call(this);
        },
        set: function (l) {
          (r = "" + l), o.call(this, l);
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (l) {
          r = "" + l;
        },
        stopTracking: function () {
          (e._valueTracker = null), delete e[t];
        },
      }
    );
  }
}
function ho(e) {
  e._valueTracker || (e._valueTracker = Rv(e));
}
function $d(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = "";
  return (
    e && (r = Bd(e) ? (e.checked ? "true" : "false") : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function Yo(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function Da(e, t) {
  var n = t.checked;
  return we({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function kc(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  (n = kn(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === "checkbox" || t.type === "radio"
          ? t.checked != null
          : t.value != null,
    });
}
function Wd(e, t) {
  (t = t.checked), t != null && Js(e, "checked", t, !1);
}
function Ia(e, t) {
  Wd(e, t);
  var n = kn(t.value),
    r = t.type;
  if (n != null)
    r === "number"
      ? ((n === 0 && e.value === "") || e.value != n) && (e.value = "" + n)
      : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value")
    ? Fa(e, t.type, n)
    : t.hasOwnProperty("defaultValue") && Fa(e, t.type, kn(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked);
}
function Cc(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (
      !(
        (r !== "submit" && r !== "reset") ||
        (t.value !== void 0 && t.value !== null)
      )
    )
      return;
    (t = "" + e._wrapperState.initialValue),
      n || t === e.value || (e.value = t),
      (e.defaultValue = t);
  }
  (n = e.name),
    n !== "" && (e.name = ""),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    n !== "" && (e.name = n);
}
function Fa(e, t, n) {
  (t !== "number" || Yo(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var ci = Array.isArray;
function Nr(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var i = 0; i < n.length; i++) t["$" + n[i]] = !0;
    for (n = 0; n < e.length; n++)
      (i = t.hasOwnProperty("$" + e[n].value)),
        e[n].selected !== i && (e[n].selected = i),
        i && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + kn(n), t = null, i = 0; i < e.length; i++) {
      if (e[i].value === n) {
        (e[i].selected = !0), r && (e[i].defaultSelected = !0);
        return;
      }
      t !== null || e[i].disabled || (t = e[i]);
    }
    t !== null && (t.selected = !0);
  }
}
function Ua(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(L(91));
  return we({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function Pc(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(L(92));
      if (ci(n)) {
        if (1 < n.length) throw Error(L(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), (n = t);
  }
  e._wrapperState = { initialValue: kn(n) };
}
function Hd(e, t) {
  var n = kn(t.value),
    r = kn(t.defaultValue);
  n != null &&
    ((n = "" + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r);
}
function _c(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function Vd(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function ba(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? Vd(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
    ? "http://www.w3.org/1999/xhtml"
    : e;
}
var mo,
  Yd = (function (e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
      ? function (t, n, r, i) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, i);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
      e.innerHTML = t;
    else {
      for (
        mo = mo || document.createElement("div"),
          mo.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
          t = mo.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function Ri(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var vi = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0,
  },
  Lv = ["Webkit", "ms", "Moz", "O"];
Object.keys(vi).forEach(function (e) {
  Lv.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (vi[t] = vi[e]);
  });
});
function Qd(e, t, n) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : n || typeof t != "number" || t === 0 || (vi.hasOwnProperty(e) && vi[e])
    ? ("" + t).trim()
    : t + "px";
}
function Kd(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0,
        i = Qd(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, i) : (e[n] = i);
    }
}
var Tv = we(
  { menuitem: !0 },
  {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0,
  }
);
function Ba(e, t) {
  if (t) {
    if (Tv[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(L(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(L(60));
      if (
        typeof t.dangerouslySetInnerHTML != "object" ||
        !("__html" in t.dangerouslySetInnerHTML)
      )
        throw Error(L(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(L(62));
  }
}
function $a(e, t) {
  if (e.indexOf("-") === -1) return typeof t.is == "string";
  switch (e) {
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
var Wa = null;
function tu(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var Ha = null,
  Rr = null,
  Lr = null;
function Nc(e) {
  if ((e = Ji(e))) {
    if (typeof Ha != "function") throw Error(L(280));
    var t = e.stateNode;
    t && ((t = Nl(t)), Ha(e.stateNode, e.type, t));
  }
}
function Xd(e) {
  Rr ? (Lr ? Lr.push(e) : (Lr = [e])) : (Rr = e);
}
function Gd() {
  if (Rr) {
    var e = Rr,
      t = Lr;
    if (((Lr = Rr = null), Nc(e), t)) for (e = 0; e < t.length; e++) Nc(t[e]);
  }
}
function Jd(e, t) {
  return e(t);
}
function Zd() {}
var ql = !1;
function qd(e, t, n) {
  if (ql) return e(t, n);
  ql = !0;
  try {
    return Jd(e, t, n);
  } finally {
    (ql = !1), (Rr !== null || Lr !== null) && (Zd(), Gd());
  }
}
function Li(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = Nl(n);
  if (r === null) return null;
  n = r[t];
  e: switch (t) {
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
      (r = !r.disabled) ||
        ((e = e.type),
        (r = !(
          e === "button" ||
          e === "input" ||
          e === "select" ||
          e === "textarea"
        ))),
        (e = !r);
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && typeof n != "function") throw Error(L(231, t, typeof n));
  return n;
}
var Va = !1;
if (Vt)
  try {
    var qr = {};
    Object.defineProperty(qr, "passive", {
      get: function () {
        Va = !0;
      },
    }),
      window.addEventListener("test", qr, qr),
      window.removeEventListener("test", qr, qr);
  } catch {
    Va = !1;
  }
function Ov(e, t, n, r, i, o, l, a, s) {
  var u = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, u);
  } catch (f) {
    this.onError(f);
  }
}
var gi = !1,
  Qo = null,
  Ko = !1,
  Ya = null,
  Mv = {
    onError: function (e) {
      (gi = !0), (Qo = e);
    },
  };
function Av(e, t, n, r, i, o, l, a, s) {
  (gi = !1), (Qo = null), Ov.apply(Mv, arguments);
}
function zv(e, t, n, r, i, o, l, a, s) {
  if ((Av.apply(this, arguments), gi)) {
    if (gi) {
      var u = Qo;
      (gi = !1), (Qo = null);
    } else throw Error(L(198));
    Ko || ((Ko = !0), (Ya = u));
  }
}
function rr(e) {
  var t = e,
    n = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do (t = e), t.flags & 4098 && (n = t.return), (e = t.return);
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function ep(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (
      (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
      t !== null)
    )
      return t.dehydrated;
  }
  return null;
}
function Rc(e) {
  if (rr(e) !== e) throw Error(L(188));
}
function jv(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = rr(e)), t === null)) throw Error(L(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var i = n.return;
    if (i === null) break;
    var o = i.alternate;
    if (o === null) {
      if (((r = i.return), r !== null)) {
        n = r;
        continue;
      }
      break;
    }
    if (i.child === o.child) {
      for (o = i.child; o; ) {
        if (o === n) return Rc(i), e;
        if (o === r) return Rc(i), t;
        o = o.sibling;
      }
      throw Error(L(188));
    }
    if (n.return !== r.return) (n = i), (r = o);
    else {
      for (var l = !1, a = i.child; a; ) {
        if (a === n) {
          (l = !0), (n = i), (r = o);
          break;
        }
        if (a === r) {
          (l = !0), (r = i), (n = o);
          break;
        }
        a = a.sibling;
      }
      if (!l) {
        for (a = o.child; a; ) {
          if (a === n) {
            (l = !0), (n = o), (r = i);
            break;
          }
          if (a === r) {
            (l = !0), (r = o), (n = i);
            break;
          }
          a = a.sibling;
        }
        if (!l) throw Error(L(189));
      }
    }
    if (n.alternate !== r) throw Error(L(190));
  }
  if (n.tag !== 3) throw Error(L(188));
  return n.stateNode.current === n ? e : t;
}
function tp(e) {
  return (e = jv(e)), e !== null ? np(e) : null;
}
function np(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = np(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var rp = ot.unstable_scheduleCallback,
  Lc = ot.unstable_cancelCallback,
  Dv = ot.unstable_shouldYield,
  Iv = ot.unstable_requestPaint,
  Ee = ot.unstable_now,
  Fv = ot.unstable_getCurrentPriorityLevel,
  nu = ot.unstable_ImmediatePriority,
  ip = ot.unstable_UserBlockingPriority,
  Xo = ot.unstable_NormalPriority,
  Uv = ot.unstable_LowPriority,
  op = ot.unstable_IdlePriority,
  kl = null,
  zt = null;
function bv(e) {
  if (zt && typeof zt.onCommitFiberRoot == "function")
    try {
      zt.onCommitFiberRoot(kl, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var St = Math.clz32 ? Math.clz32 : Wv,
  Bv = Math.log,
  $v = Math.LN2;
function Wv(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((Bv(e) / $v) | 0)) | 0;
}
var vo = 64,
  go = 4194304;
function fi(e) {
  switch (e & -e) {
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
      return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e;
  }
}
function Go(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    i = e.suspendedLanes,
    o = e.pingedLanes,
    l = n & 268435455;
  if (l !== 0) {
    var a = l & ~i;
    a !== 0 ? (r = fi(a)) : ((o &= l), o !== 0 && (r = fi(o)));
  } else (l = n & ~i), l !== 0 ? (r = fi(l)) : o !== 0 && (r = fi(o));
  if (r === 0) return 0;
  if (
    t !== 0 &&
    t !== r &&
    !(t & i) &&
    ((i = r & -r), (o = t & -t), i >= o || (i === 16 && (o & 4194240) !== 0))
  )
    return t;
  if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t; )
      (n = 31 - St(t)), (i = 1 << n), (r |= e[n]), (t &= ~i);
  return r;
}
function Hv(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
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
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function Vv(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      i = e.expirationTimes,
      o = e.pendingLanes;
    0 < o;

  ) {
    var l = 31 - St(o),
      a = 1 << l,
      s = i[l];
    s === -1
      ? (!(a & n) || a & r) && (i[l] = Hv(a, t))
      : s <= t && (e.expiredLanes |= a),
      (o &= ~a);
  }
}
function Qa(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function lp() {
  var e = vo;
  return (vo <<= 1), !(vo & 4194240) && (vo = 64), e;
}
function ea(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function Xi(e, t, n) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - St(t)),
    (e[t] = n);
}
function Yv(e, t) {
  var n = e.pendingLanes & ~t;
  (e.pendingLanes = t),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= t),
    (e.mutableReadLanes &= t),
    (e.entangledLanes &= t),
    (t = e.entanglements);
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var i = 31 - St(n),
      o = 1 << i;
    (t[i] = 0), (r[i] = -1), (e[i] = -1), (n &= ~o);
  }
}
function ru(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - St(n),
      i = 1 << r;
    (i & t) | (e[r] & t) && (e[r] |= t), (n &= ~i);
  }
}
var te = 0;
function ap(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var sp,
  iu,
  up,
  cp,
  fp,
  Ka = !1,
  yo = [],
  mn = null,
  vn = null,
  gn = null,
  Ti = new Map(),
  Oi = new Map(),
  cn = [],
  Qv =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " "
    );
function Tc(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      mn = null;
      break;
    case "dragenter":
    case "dragleave":
      vn = null;
      break;
    case "mouseover":
    case "mouseout":
      gn = null;
      break;
    case "pointerover":
    case "pointerout":
      Ti.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      Oi.delete(t.pointerId);
  }
}
function ei(e, t, n, r, i, o) {
  return e === null || e.nativeEvent !== o
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: o,
        targetContainers: [i],
      }),
      t !== null && ((t = Ji(t)), t !== null && iu(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      i !== null && t.indexOf(i) === -1 && t.push(i),
      e);
}
function Kv(e, t, n, r, i) {
  switch (t) {
    case "focusin":
      return (mn = ei(mn, e, t, n, r, i)), !0;
    case "dragenter":
      return (vn = ei(vn, e, t, n, r, i)), !0;
    case "mouseover":
      return (gn = ei(gn, e, t, n, r, i)), !0;
    case "pointerover":
      var o = i.pointerId;
      return Ti.set(o, ei(Ti.get(o) || null, e, t, n, r, i)), !0;
    case "gotpointercapture":
      return (
        (o = i.pointerId), Oi.set(o, ei(Oi.get(o) || null, e, t, n, r, i)), !0
      );
  }
  return !1;
}
function dp(e) {
  var t = Un(e.target);
  if (t !== null) {
    var n = rr(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = ep(n)), t !== null)) {
          (e.blockedOn = t),
            fp(e.priority, function () {
              up(n);
            });
          return;
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function Ao(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = Xa(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      (Wa = r), n.target.dispatchEvent(r), (Wa = null);
    } else return (t = Ji(n)), t !== null && iu(t), (e.blockedOn = n), !1;
    t.shift();
  }
  return !0;
}
function Oc(e, t, n) {
  Ao(e) && n.delete(t);
}
function Xv() {
  (Ka = !1),
    mn !== null && Ao(mn) && (mn = null),
    vn !== null && Ao(vn) && (vn = null),
    gn !== null && Ao(gn) && (gn = null),
    Ti.forEach(Oc),
    Oi.forEach(Oc);
}
function ti(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    Ka ||
      ((Ka = !0),
      ot.unstable_scheduleCallback(ot.unstable_NormalPriority, Xv)));
}
function Mi(e) {
  function t(i) {
    return ti(i, e);
  }
  if (0 < yo.length) {
    ti(yo[0], e);
    for (var n = 1; n < yo.length; n++) {
      var r = yo[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    mn !== null && ti(mn, e),
      vn !== null && ti(vn, e),
      gn !== null && ti(gn, e),
      Ti.forEach(t),
      Oi.forEach(t),
      n = 0;
    n < cn.length;
    n++
  )
    (r = cn[n]), r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < cn.length && ((n = cn[0]), n.blockedOn === null); )
    dp(n), n.blockedOn === null && cn.shift();
}
var Tr = Zt.ReactCurrentBatchConfig,
  Jo = !0;
function Gv(e, t, n, r) {
  var i = te,
    o = Tr.transition;
  Tr.transition = null;
  try {
    (te = 1), ou(e, t, n, r);
  } finally {
    (te = i), (Tr.transition = o);
  }
}
function Jv(e, t, n, r) {
  var i = te,
    o = Tr.transition;
  Tr.transition = null;
  try {
    (te = 4), ou(e, t, n, r);
  } finally {
    (te = i), (Tr.transition = o);
  }
}
function ou(e, t, n, r) {
  if (Jo) {
    var i = Xa(e, t, n, r);
    if (i === null) ca(e, t, r, Zo, n), Tc(e, r);
    else if (Kv(i, e, t, n, r)) r.stopPropagation();
    else if ((Tc(e, r), t & 4 && -1 < Qv.indexOf(e))) {
      for (; i !== null; ) {
        var o = Ji(i);
        if (
          (o !== null && sp(o),
          (o = Xa(e, t, n, r)),
          o === null && ca(e, t, r, Zo, n),
          o === i)
        )
          break;
        i = o;
      }
      i !== null && r.stopPropagation();
    } else ca(e, t, r, null, n);
  }
}
var Zo = null;
function Xa(e, t, n, r) {
  if (((Zo = null), (e = tu(r)), (e = Un(e)), e !== null))
    if (((t = rr(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = ep(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (Zo = e), null;
}
function pp(e) {
  switch (e) {
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
      return 1;
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
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 4;
    case "message":
      switch (Fv()) {
        case nu:
          return 1;
        case ip:
          return 4;
        case Xo:
        case Uv:
          return 16;
        case op:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var dn = null,
  lu = null,
  zo = null;
function hp() {
  if (zo) return zo;
  var e,
    t = lu,
    n = t.length,
    r,
    i = "value" in dn ? dn.value : dn.textContent,
    o = i.length;
  for (e = 0; e < n && t[e] === i[e]; e++);
  var l = n - e;
  for (r = 1; r <= l && t[n - r] === i[o - r]; r++);
  return (zo = i.slice(e, 1 < r ? 1 - r : void 0));
}
function jo(e) {
  var t = e.keyCode;
  return (
    "charCode" in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function wo() {
  return !0;
}
function Mc() {
  return !1;
}
function at(e) {
  function t(n, r, i, o, l) {
    (this._reactName = n),
      (this._targetInst = i),
      (this.type = r),
      (this.nativeEvent = o),
      (this.target = l),
      (this.currentTarget = null);
    for (var a in e)
      e.hasOwnProperty(a) && ((n = e[a]), (this[a] = n ? n(o) : o[a]));
    return (
      (this.isDefaultPrevented = (
        o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1
      )
        ? wo
        : Mc),
      (this.isPropagationStopped = Mc),
      this
    );
  }
  return (
    we(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != "unknown" && (n.returnValue = !1),
          (this.isDefaultPrevented = wo));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
          (this.isPropagationStopped = wo));
      },
      persist: function () {},
      isPersistent: wo,
    }),
    t
  );
}
var Yr = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  au = at(Yr),
  Gi = we({}, Yr, { view: 0, detail: 0 }),
  Zv = at(Gi),
  ta,
  na,
  ni,
  Cl = we({}, Gi, {
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
    getModifierState: su,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return e.relatedTarget === void 0
        ? e.fromElement === e.srcElement
          ? e.toElement
          : e.fromElement
        : e.relatedTarget;
    },
    movementX: function (e) {
      return "movementX" in e
        ? e.movementX
        : (e !== ni &&
            (ni && e.type === "mousemove"
              ? ((ta = e.screenX - ni.screenX), (na = e.screenY - ni.screenY))
              : (na = ta = 0),
            (ni = e)),
          ta);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : na;
    },
  }),
  Ac = at(Cl),
  qv = we({}, Cl, { dataTransfer: 0 }),
  eg = at(qv),
  tg = we({}, Gi, { relatedTarget: 0 }),
  ra = at(tg),
  ng = we({}, Yr, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  rg = at(ng),
  ig = we({}, Yr, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  og = at(ig),
  lg = we({}, Yr, { data: 0 }),
  zc = at(lg),
  ag = {
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
    MozPrintableKey: "Unidentified",
  },
  sg = {
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
    224: "Meta",
  },
  ug = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function cg(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = ug[e]) ? !!t[e] : !1;
}
function su() {
  return cg;
}
var fg = we({}, Gi, {
    key: function (e) {
      if (e.key) {
        var t = ag[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = jo(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
        ? sg[e.keyCode] || "Unidentified"
        : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: su,
    charCode: function (e) {
      return e.type === "keypress" ? jo(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? jo(e)
        : e.type === "keydown" || e.type === "keyup"
        ? e.keyCode
        : 0;
    },
  }),
  dg = at(fg),
  pg = we({}, Cl, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0,
  }),
  jc = at(pg),
  hg = we({}, Gi, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: su,
  }),
  mg = at(hg),
  vg = we({}, Yr, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  gg = at(vg),
  yg = we({}, Cl, {
    deltaX: function (e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function (e) {
      return "deltaY" in e
        ? e.deltaY
        : "wheelDeltaY" in e
        ? -e.wheelDeltaY
        : "wheelDelta" in e
        ? -e.wheelDelta
        : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  wg = at(yg),
  xg = [9, 13, 27, 32],
  uu = Vt && "CompositionEvent" in window,
  yi = null;
Vt && "documentMode" in document && (yi = document.documentMode);
var Sg = Vt && "TextEvent" in window && !yi,
  mp = Vt && (!uu || (yi && 8 < yi && 11 >= yi)),
  Dc = " ",
  Ic = !1;
function vp(e, t) {
  switch (e) {
    case "keyup":
      return xg.indexOf(t.keyCode) !== -1;
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
function gp(e) {
  return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var hr = !1;
function Eg(e, t) {
  switch (e) {
    case "compositionend":
      return gp(t);
    case "keypress":
      return t.which !== 32 ? null : ((Ic = !0), Dc);
    case "textInput":
      return (e = t.data), e === Dc && Ic ? null : e;
    default:
      return null;
  }
}
function kg(e, t) {
  if (hr)
    return e === "compositionend" || (!uu && vp(e, t))
      ? ((e = hp()), (zo = lu = dn = null), (hr = !1), e)
      : null;
  switch (e) {
    case "paste":
      return null;
    case "keypress":
      if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case "compositionend":
      return mp && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var Cg = {
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
  week: !0,
};
function Fc(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!Cg[e.type] : t === "textarea";
}
function yp(e, t, n, r) {
  Xd(r),
    (t = qo(t, "onChange")),
    0 < t.length &&
      ((n = new au("onChange", "change", null, n, r)),
      e.push({ event: n, listeners: t }));
}
var wi = null,
  Ai = null;
function Pg(e) {
  Lp(e, 0);
}
function Pl(e) {
  var t = gr(e);
  if ($d(t)) return e;
}
function _g(e, t) {
  if (e === "change") return t;
}
var wp = !1;
if (Vt) {
  var ia;
  if (Vt) {
    var oa = "oninput" in document;
    if (!oa) {
      var Uc = document.createElement("div");
      Uc.setAttribute("oninput", "return;"),
        (oa = typeof Uc.oninput == "function");
    }
    ia = oa;
  } else ia = !1;
  wp = ia && (!document.documentMode || 9 < document.documentMode);
}
function bc() {
  wi && (wi.detachEvent("onpropertychange", xp), (Ai = wi = null));
}
function xp(e) {
  if (e.propertyName === "value" && Pl(Ai)) {
    var t = [];
    yp(t, Ai, e, tu(e)), qd(Pg, t);
  }
}
function Ng(e, t, n) {
  e === "focusin"
    ? (bc(), (wi = t), (Ai = n), wi.attachEvent("onpropertychange", xp))
    : e === "focusout" && bc();
}
function Rg(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return Pl(Ai);
}
function Lg(e, t) {
  if (e === "click") return Pl(t);
}
function Tg(e, t) {
  if (e === "input" || e === "change") return Pl(t);
}
function Og(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var kt = typeof Object.is == "function" ? Object.is : Og;
function zi(e, t) {
  if (kt(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var i = n[r];
    if (!Oa.call(t, i) || !kt(e[i], t[i])) return !1;
  }
  return !0;
}
function Bc(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function $c(e, t) {
  var n = Bc(e);
  e = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (((r = e + n.textContent.length), e <= t && r >= t))
        return { node: n, offset: t - e };
      e = r;
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e;
        }
        n = n.parentNode;
      }
      n = void 0;
    }
    n = Bc(n);
  }
}
function Sp(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
      ? !1
      : t && t.nodeType === 3
      ? Sp(e, t.parentNode)
      : "contains" in e
      ? e.contains(t)
      : e.compareDocumentPosition
      ? !!(e.compareDocumentPosition(t) & 16)
      : !1
    : !1;
}
function Ep() {
  for (var e = window, t = Yo(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = Yo(e.document);
  }
  return t;
}
function cu(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return (
    t &&
    ((t === "input" &&
      (e.type === "text" ||
        e.type === "search" ||
        e.type === "tel" ||
        e.type === "url" ||
        e.type === "password")) ||
      t === "textarea" ||
      e.contentEditable === "true")
  );
}
function Mg(e) {
  var t = Ep(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    Sp(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && cu(n)) {
      if (
        ((t = r.start),
        (e = r.end),
        e === void 0 && (e = t),
        "selectionStart" in n)
      )
        (n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length));
      else if (
        ((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
        e.getSelection)
      ) {
        e = e.getSelection();
        var i = n.textContent.length,
          o = Math.min(r.start, i);
        (r = r.end === void 0 ? o : Math.min(r.end, i)),
          !e.extend && o > r && ((i = r), (r = o), (o = i)),
          (i = $c(n, o));
        var l = $c(n, r);
        i &&
          l &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== i.node ||
            e.anchorOffset !== i.offset ||
            e.focusNode !== l.node ||
            e.focusOffset !== l.offset) &&
          ((t = t.createRange()),
          t.setStart(i.node, i.offset),
          e.removeAllRanges(),
          o > r
            ? (e.addRange(t), e.extend(l.node, l.offset))
            : (t.setEnd(l.node, l.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; (e = e.parentNode); )
      e.nodeType === 1 &&
        t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
      (e = t[n]),
        (e.element.scrollLeft = e.left),
        (e.element.scrollTop = e.top);
  }
}
var Ag = Vt && "documentMode" in document && 11 >= document.documentMode,
  mr = null,
  Ga = null,
  xi = null,
  Ja = !1;
function Wc(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  Ja ||
    mr == null ||
    mr !== Yo(r) ||
    ((r = mr),
    "selectionStart" in r && cu(r)
      ? (r = { start: r.selectionStart, end: r.selectionEnd })
      : ((r = (
          (r.ownerDocument && r.ownerDocument.defaultView) ||
          window
        ).getSelection()),
        (r = {
          anchorNode: r.anchorNode,
          anchorOffset: r.anchorOffset,
          focusNode: r.focusNode,
          focusOffset: r.focusOffset,
        })),
    (xi && zi(xi, r)) ||
      ((xi = r),
      (r = qo(Ga, "onSelect")),
      0 < r.length &&
        ((t = new au("onSelect", "select", null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = mr))));
}
function xo(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n["Webkit" + e] = "webkit" + t),
    (n["Moz" + e] = "moz" + t),
    n
  );
}
var vr = {
    animationend: xo("Animation", "AnimationEnd"),
    animationiteration: xo("Animation", "AnimationIteration"),
    animationstart: xo("Animation", "AnimationStart"),
    transitionend: xo("Transition", "TransitionEnd"),
  },
  la = {},
  kp = {};
Vt &&
  ((kp = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete vr.animationend.animation,
    delete vr.animationiteration.animation,
    delete vr.animationstart.animation),
  "TransitionEvent" in window || delete vr.transitionend.transition);
function _l(e) {
  if (la[e]) return la[e];
  if (!vr[e]) return e;
  var t = vr[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in kp) return (la[e] = t[n]);
  return e;
}
var Cp = _l("animationend"),
  Pp = _l("animationiteration"),
  _p = _l("animationstart"),
  Np = _l("transitionend"),
  Rp = new Map(),
  Hc =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " "
    );
function Rn(e, t) {
  Rp.set(e, t), nr(t, [e]);
}
for (var aa = 0; aa < Hc.length; aa++) {
  var sa = Hc[aa],
    zg = sa.toLowerCase(),
    jg = sa[0].toUpperCase() + sa.slice(1);
  Rn(zg, "on" + jg);
}
Rn(Cp, "onAnimationEnd");
Rn(Pp, "onAnimationIteration");
Rn(_p, "onAnimationStart");
Rn("dblclick", "onDoubleClick");
Rn("focusin", "onFocus");
Rn("focusout", "onBlur");
Rn(Np, "onTransitionEnd");
zr("onMouseEnter", ["mouseout", "mouseover"]);
zr("onMouseLeave", ["mouseout", "mouseover"]);
zr("onPointerEnter", ["pointerout", "pointerover"]);
zr("onPointerLeave", ["pointerout", "pointerover"]);
nr(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(" ")
);
nr(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " "
  )
);
nr("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
nr(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" ")
);
nr(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" ")
);
nr(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
);
var di =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " "
    ),
  Dg = new Set("cancel close invalid load scroll toggle".split(" ").concat(di));
function Vc(e, t, n) {
  var r = e.type || "unknown-event";
  (e.currentTarget = n), zv(r, t, void 0, e), (e.currentTarget = null);
}
function Lp(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      i = r.event;
    r = r.listeners;
    e: {
      var o = void 0;
      if (t)
        for (var l = r.length - 1; 0 <= l; l--) {
          var a = r[l],
            s = a.instance,
            u = a.currentTarget;
          if (((a = a.listener), s !== o && i.isPropagationStopped())) break e;
          Vc(i, a, u), (o = s);
        }
      else
        for (l = 0; l < r.length; l++) {
          if (
            ((a = r[l]),
            (s = a.instance),
            (u = a.currentTarget),
            (a = a.listener),
            s !== o && i.isPropagationStopped())
          )
            break e;
          Vc(i, a, u), (o = s);
        }
    }
  }
  if (Ko) throw ((e = Ya), (Ko = !1), (Ya = null), e);
}
function se(e, t) {
  var n = t[ns];
  n === void 0 && (n = t[ns] = new Set());
  var r = e + "__bubble";
  n.has(r) || (Tp(t, e, 2, !1), n.add(r));
}
function ua(e, t, n) {
  var r = 0;
  t && (r |= 4), Tp(n, e, r, t);
}
var So = "_reactListening" + Math.random().toString(36).slice(2);
function ji(e) {
  if (!e[So]) {
    (e[So] = !0),
      Id.forEach(function (n) {
        n !== "selectionchange" && (Dg.has(n) || ua(n, !1, e), ua(n, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[So] || ((t[So] = !0), ua("selectionchange", !1, t));
  }
}
function Tp(e, t, n, r) {
  switch (pp(t)) {
    case 1:
      var i = Gv;
      break;
    case 4:
      i = Jv;
      break;
    default:
      i = ou;
  }
  (n = i.bind(null, t, n, e)),
    (i = void 0),
    !Va ||
      (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
      (i = !0),
    r
      ? i !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: i })
        : e.addEventListener(t, n, !0)
      : i !== void 0
      ? e.addEventListener(t, n, { passive: i })
      : e.addEventListener(t, n, !1);
}
function ca(e, t, n, r, i) {
  var o = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var l = r.tag;
      if (l === 3 || l === 4) {
        var a = r.stateNode.containerInfo;
        if (a === i || (a.nodeType === 8 && a.parentNode === i)) break;
        if (l === 4)
          for (l = r.return; l !== null; ) {
            var s = l.tag;
            if (
              (s === 3 || s === 4) &&
              ((s = l.stateNode.containerInfo),
              s === i || (s.nodeType === 8 && s.parentNode === i))
            )
              return;
            l = l.return;
          }
        for (; a !== null; ) {
          if (((l = Un(a)), l === null)) return;
          if (((s = l.tag), s === 5 || s === 6)) {
            r = o = l;
            continue e;
          }
          a = a.parentNode;
        }
      }
      r = r.return;
    }
  qd(function () {
    var u = o,
      f = tu(n),
      c = [];
    e: {
      var p = Rp.get(e);
      if (p !== void 0) {
        var E = au,
          x = e;
        switch (e) {
          case "keypress":
            if (jo(n) === 0) break e;
          case "keydown":
          case "keyup":
            E = dg;
            break;
          case "focusin":
            (x = "focus"), (E = ra);
            break;
          case "focusout":
            (x = "blur"), (E = ra);
            break;
          case "beforeblur":
          case "afterblur":
            E = ra;
            break;
          case "click":
            if (n.button === 2) break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            E = Ac;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            E = eg;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            E = mg;
            break;
          case Cp:
          case Pp:
          case _p:
            E = rg;
            break;
          case Np:
            E = gg;
            break;
          case "scroll":
            E = Zv;
            break;
          case "wheel":
            E = wg;
            break;
          case "copy":
          case "cut":
          case "paste":
            E = og;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            E = jc;
        }
        var w = (t & 4) !== 0,
          P = !w && e === "scroll",
          h = w ? (p !== null ? p + "Capture" : null) : p;
        w = [];
        for (var d = u, m; d !== null; ) {
          m = d;
          var k = m.stateNode;
          if (
            (m.tag === 5 &&
              k !== null &&
              ((m = k),
              h !== null && ((k = Li(d, h)), k != null && w.push(Di(d, k, m)))),
            P)
          )
            break;
          d = d.return;
        }
        0 < w.length &&
          ((p = new E(p, x, null, n, f)), c.push({ event: p, listeners: w }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((p = e === "mouseover" || e === "pointerover"),
          (E = e === "mouseout" || e === "pointerout"),
          p &&
            n !== Wa &&
            (x = n.relatedTarget || n.fromElement) &&
            (Un(x) || x[Yt]))
        )
          break e;
        if (
          (E || p) &&
          ((p =
            f.window === f
              ? f
              : (p = f.ownerDocument)
              ? p.defaultView || p.parentWindow
              : window),
          E
            ? ((x = n.relatedTarget || n.toElement),
              (E = u),
              (x = x ? Un(x) : null),
              x !== null &&
                ((P = rr(x)), x !== P || (x.tag !== 5 && x.tag !== 6)) &&
                (x = null))
            : ((E = null), (x = u)),
          E !== x)
        ) {
          if (
            ((w = Ac),
            (k = "onMouseLeave"),
            (h = "onMouseEnter"),
            (d = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((w = jc),
              (k = "onPointerLeave"),
              (h = "onPointerEnter"),
              (d = "pointer")),
            (P = E == null ? p : gr(E)),
            (m = x == null ? p : gr(x)),
            (p = new w(k, d + "leave", E, n, f)),
            (p.target = P),
            (p.relatedTarget = m),
            (k = null),
            Un(f) === u &&
              ((w = new w(h, d + "enter", x, n, f)),
              (w.target = m),
              (w.relatedTarget = P),
              (k = w)),
            (P = k),
            E && x)
          )
            t: {
              for (w = E, h = x, d = 0, m = w; m; m = ur(m)) d++;
              for (m = 0, k = h; k; k = ur(k)) m++;
              for (; 0 < d - m; ) (w = ur(w)), d--;
              for (; 0 < m - d; ) (h = ur(h)), m--;
              for (; d--; ) {
                if (w === h || (h !== null && w === h.alternate)) break t;
                (w = ur(w)), (h = ur(h));
              }
              w = null;
            }
          else w = null;
          E !== null && Yc(c, p, E, w, !1),
            x !== null && P !== null && Yc(c, P, x, w, !0);
        }
      }
      e: {
        if (
          ((p = u ? gr(u) : window),
          (E = p.nodeName && p.nodeName.toLowerCase()),
          E === "select" || (E === "input" && p.type === "file"))
        )
          var _ = _g;
        else if (Fc(p))
          if (wp) _ = Tg;
          else {
            _ = Rg;
            var g = Ng;
          }
        else
          (E = p.nodeName) &&
            E.toLowerCase() === "input" &&
            (p.type === "checkbox" || p.type === "radio") &&
            (_ = Lg);
        if (_ && (_ = _(e, u))) {
          yp(c, _, n, f);
          break e;
        }
        g && g(e, p, u),
          e === "focusout" &&
            (g = p._wrapperState) &&
            g.controlled &&
            p.type === "number" &&
            Fa(p, "number", p.value);
      }
      switch (((g = u ? gr(u) : window), e)) {
        case "focusin":
          (Fc(g) || g.contentEditable === "true") &&
            ((mr = g), (Ga = u), (xi = null));
          break;
        case "focusout":
          xi = Ga = mr = null;
          break;
        case "mousedown":
          Ja = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          (Ja = !1), Wc(c, n, f);
          break;
        case "selectionchange":
          if (Ag) break;
        case "keydown":
        case "keyup":
          Wc(c, n, f);
      }
      var O;
      if (uu)
        e: {
          switch (e) {
            case "compositionstart":
              var T = "onCompositionStart";
              break e;
            case "compositionend":
              T = "onCompositionEnd";
              break e;
            case "compositionupdate":
              T = "onCompositionUpdate";
              break e;
          }
          T = void 0;
        }
      else
        hr
          ? vp(e, n) && (T = "onCompositionEnd")
          : e === "keydown" && n.keyCode === 229 && (T = "onCompositionStart");
      T &&
        (mp &&
          n.locale !== "ko" &&
          (hr || T !== "onCompositionStart"
            ? T === "onCompositionEnd" && hr && (O = hp())
            : ((dn = f),
              (lu = "value" in dn ? dn.value : dn.textContent),
              (hr = !0))),
        (g = qo(u, T)),
        0 < g.length &&
          ((T = new zc(T, e, null, n, f)),
          c.push({ event: T, listeners: g }),
          O ? (T.data = O) : ((O = gp(n)), O !== null && (T.data = O)))),
        (O = Sg ? Eg(e, n) : kg(e, n)) &&
          ((u = qo(u, "onBeforeInput")),
          0 < u.length &&
            ((f = new zc("onBeforeInput", "beforeinput", null, n, f)),
            c.push({ event: f, listeners: u }),
            (f.data = O)));
    }
    Lp(c, t);
  });
}
function Di(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function qo(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var i = e,
      o = i.stateNode;
    i.tag === 5 &&
      o !== null &&
      ((i = o),
      (o = Li(e, n)),
      o != null && r.unshift(Di(e, o, i)),
      (o = Li(e, t)),
      o != null && r.push(Di(e, o, i))),
      (e = e.return);
  }
  return r;
}
function ur(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function Yc(e, t, n, r, i) {
  for (var o = t._reactName, l = []; n !== null && n !== r; ) {
    var a = n,
      s = a.alternate,
      u = a.stateNode;
    if (s !== null && s === r) break;
    a.tag === 5 &&
      u !== null &&
      ((a = u),
      i
        ? ((s = Li(n, o)), s != null && l.unshift(Di(n, s, a)))
        : i || ((s = Li(n, o)), s != null && l.push(Di(n, s, a)))),
      (n = n.return);
  }
  l.length !== 0 && e.push({ event: t, listeners: l });
}
var Ig = /\r\n?/g,
  Fg = /\u0000|\uFFFD/g;
function Qc(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      Ig,
      `
`
    )
    .replace(Fg, "");
}
function Eo(e, t, n) {
  if (((t = Qc(t)), Qc(e) !== t && n)) throw Error(L(425));
}
function el() {}
var Za = null,
  qa = null;
function es(e, t) {
  return (
    e === "textarea" ||
    e === "noscript" ||
    typeof t.children == "string" ||
    typeof t.children == "number" ||
    (typeof t.dangerouslySetInnerHTML == "object" &&
      t.dangerouslySetInnerHTML !== null &&
      t.dangerouslySetInnerHTML.__html != null)
  );
}
var ts = typeof setTimeout == "function" ? setTimeout : void 0,
  Ug = typeof clearTimeout == "function" ? clearTimeout : void 0,
  Kc = typeof Promise == "function" ? Promise : void 0,
  bg =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof Kc < "u"
      ? function (e) {
          return Kc.resolve(null).then(e).catch(Bg);
        }
      : ts;
function Bg(e) {
  setTimeout(function () {
    throw e;
  });
}
function fa(e, t) {
  var n = t,
    r = 0;
  do {
    var i = n.nextSibling;
    if ((e.removeChild(n), i && i.nodeType === 8))
      if (((n = i.data), n === "/$")) {
        if (r === 0) {
          e.removeChild(i), Mi(t);
          return;
        }
        r--;
      } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
    n = i;
  } while (n);
  Mi(t);
}
function yn(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break;
      if (t === "/$") return null;
    }
  }
  return e;
}
function Xc(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === "$" || n === "$!" || n === "$?") {
        if (t === 0) return e;
        t--;
      } else n === "/$" && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var Qr = Math.random().toString(36).slice(2),
  Tt = "__reactFiber$" + Qr,
  Ii = "__reactProps$" + Qr,
  Yt = "__reactContainer$" + Qr,
  ns = "__reactEvents$" + Qr,
  $g = "__reactListeners$" + Qr,
  Wg = "__reactHandles$" + Qr;
function Un(e) {
  var t = e[Tt];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[Yt] || n[Tt])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = Xc(e); e !== null; ) {
          if ((n = e[Tt])) return n;
          e = Xc(e);
        }
      return t;
    }
    (e = n), (n = e.parentNode);
  }
  return null;
}
function Ji(e) {
  return (
    (e = e[Tt] || e[Yt]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function gr(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(L(33));
}
function Nl(e) {
  return e[Ii] || null;
}
var rs = [],
  yr = -1;
function Ln(e) {
  return { current: e };
}
function ue(e) {
  0 > yr || ((e.current = rs[yr]), (rs[yr] = null), yr--);
}
function le(e, t) {
  yr++, (rs[yr] = e.current), (e.current = t);
}
var Cn = {},
  Ue = Ln(Cn),
  Xe = Ln(!1),
  Kn = Cn;
function jr(e, t) {
  var n = e.type.contextTypes;
  if (!n) return Cn;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var i = {},
    o;
  for (o in n) i[o] = t[o];
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = i)),
    i
  );
}
function Ge(e) {
  return (e = e.childContextTypes), e != null;
}
function tl() {
  ue(Xe), ue(Ue);
}
function Gc(e, t, n) {
  if (Ue.current !== Cn) throw Error(L(168));
  le(Ue, t), le(Xe, n);
}
function Op(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
    return n;
  r = r.getChildContext();
  for (var i in r) if (!(i in t)) throw Error(L(108, Nv(e) || "Unknown", i));
  return we({}, n, r);
}
function nl(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || Cn),
    (Kn = Ue.current),
    le(Ue, e),
    le(Xe, Xe.current),
    !0
  );
}
function Jc(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(L(169));
  n
    ? ((e = Op(e, t, Kn)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      ue(Xe),
      ue(Ue),
      le(Ue, e))
    : ue(Xe),
    le(Xe, n);
}
var bt = null,
  Rl = !1,
  da = !1;
function Mp(e) {
  bt === null ? (bt = [e]) : bt.push(e);
}
function Hg(e) {
  (Rl = !0), Mp(e);
}
function Tn() {
  if (!da && bt !== null) {
    da = !0;
    var e = 0,
      t = te;
    try {
      var n = bt;
      for (te = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      (bt = null), (Rl = !1);
    } catch (i) {
      throw (bt !== null && (bt = bt.slice(e + 1)), rp(nu, Tn), i);
    } finally {
      (te = t), (da = !1);
    }
  }
  return null;
}
var wr = [],
  xr = 0,
  rl = null,
  il = 0,
  ut = [],
  ct = 0,
  Xn = null,
  Bt = 1,
  $t = "";
function jn(e, t) {
  (wr[xr++] = il), (wr[xr++] = rl), (rl = e), (il = t);
}
function Ap(e, t, n) {
  (ut[ct++] = Bt), (ut[ct++] = $t), (ut[ct++] = Xn), (Xn = e);
  var r = Bt;
  e = $t;
  var i = 32 - St(r) - 1;
  (r &= ~(1 << i)), (n += 1);
  var o = 32 - St(t) + i;
  if (30 < o) {
    var l = i - (i % 5);
    (o = (r & ((1 << l) - 1)).toString(32)),
      (r >>= l),
      (i -= l),
      (Bt = (1 << (32 - St(t) + i)) | (n << i) | r),
      ($t = o + e);
  } else (Bt = (1 << o) | (n << i) | r), ($t = e);
}
function fu(e) {
  e.return !== null && (jn(e, 1), Ap(e, 1, 0));
}
function du(e) {
  for (; e === rl; )
    (rl = wr[--xr]), (wr[xr] = null), (il = wr[--xr]), (wr[xr] = null);
  for (; e === Xn; )
    (Xn = ut[--ct]),
      (ut[ct] = null),
      ($t = ut[--ct]),
      (ut[ct] = null),
      (Bt = ut[--ct]),
      (ut[ct] = null);
}
var nt = null,
  tt = null,
  he = !1,
  xt = null;
function zp(e, t) {
  var n = ft(5, null, null, 0);
  (n.elementType = "DELETED"),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function Zc(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (nt = e), (tt = yn(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (nt = e), (tt = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = Xn !== null ? { id: Bt, overflow: $t } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = ft(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (nt = e),
            (tt = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function is(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function os(e) {
  if (he) {
    var t = tt;
    if (t) {
      var n = t;
      if (!Zc(e, t)) {
        if (is(e)) throw Error(L(418));
        t = yn(n.nextSibling);
        var r = nt;
        t && Zc(e, t)
          ? zp(r, n)
          : ((e.flags = (e.flags & -4097) | 2), (he = !1), (nt = e));
      }
    } else {
      if (is(e)) throw Error(L(418));
      (e.flags = (e.flags & -4097) | 2), (he = !1), (nt = e);
    }
  }
}
function qc(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  nt = e;
}
function ko(e) {
  if (e !== nt) return !1;
  if (!he) return qc(e), (he = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== "head" && t !== "body" && !es(e.type, e.memoizedProps))),
    t && (t = tt))
  ) {
    if (is(e)) throw (jp(), Error(L(418)));
    for (; t; ) zp(e, t), (t = yn(t.nextSibling));
  }
  if ((qc(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(L(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              tt = yn(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      tt = null;
    }
  } else tt = nt ? yn(e.stateNode.nextSibling) : null;
  return !0;
}
function jp() {
  for (var e = tt; e; ) e = yn(e.nextSibling);
}
function Dr() {
  (tt = nt = null), (he = !1);
}
function pu(e) {
  xt === null ? (xt = [e]) : xt.push(e);
}
var Vg = Zt.ReactCurrentBatchConfig;
function ri(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(L(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(L(147, e));
      var i = r,
        o = "" + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == "function" &&
        t.ref._stringRef === o
        ? t.ref
        : ((t = function (l) {
            var a = i.refs;
            l === null ? delete a[o] : (a[o] = l);
          }),
          (t._stringRef = o),
          t);
    }
    if (typeof e != "string") throw Error(L(284));
    if (!n._owner) throw Error(L(290, e));
  }
  return e;
}
function Co(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      L(
        31,
        e === "[object Object]"
          ? "object with keys {" + Object.keys(t).join(", ") + "}"
          : e
      )
    ))
  );
}
function ef(e) {
  var t = e._init;
  return t(e._payload);
}
function Dp(e) {
  function t(h, d) {
    if (e) {
      var m = h.deletions;
      m === null ? ((h.deletions = [d]), (h.flags |= 16)) : m.push(d);
    }
  }
  function n(h, d) {
    if (!e) return null;
    for (; d !== null; ) t(h, d), (d = d.sibling);
    return null;
  }
  function r(h, d) {
    for (h = new Map(); d !== null; )
      d.key !== null ? h.set(d.key, d) : h.set(d.index, d), (d = d.sibling);
    return h;
  }
  function i(h, d) {
    return (h = En(h, d)), (h.index = 0), (h.sibling = null), h;
  }
  function o(h, d, m) {
    return (
      (h.index = m),
      e
        ? ((m = h.alternate),
          m !== null
            ? ((m = m.index), m < d ? ((h.flags |= 2), d) : m)
            : ((h.flags |= 2), d))
        : ((h.flags |= 1048576), d)
    );
  }
  function l(h) {
    return e && h.alternate === null && (h.flags |= 2), h;
  }
  function a(h, d, m, k) {
    return d === null || d.tag !== 6
      ? ((d = wa(m, h.mode, k)), (d.return = h), d)
      : ((d = i(d, m)), (d.return = h), d);
  }
  function s(h, d, m, k) {
    var _ = m.type;
    return _ === pr
      ? f(h, d, m.props.children, k, m.key)
      : d !== null &&
        (d.elementType === _ ||
          (typeof _ == "object" &&
            _ !== null &&
            _.$$typeof === sn &&
            ef(_) === d.type))
      ? ((k = i(d, m.props)), (k.ref = ri(h, d, m)), (k.return = h), k)
      : ((k = $o(m.type, m.key, m.props, null, h.mode, k)),
        (k.ref = ri(h, d, m)),
        (k.return = h),
        k);
  }
  function u(h, d, m, k) {
    return d === null ||
      d.tag !== 4 ||
      d.stateNode.containerInfo !== m.containerInfo ||
      d.stateNode.implementation !== m.implementation
      ? ((d = xa(m, h.mode, k)), (d.return = h), d)
      : ((d = i(d, m.children || [])), (d.return = h), d);
  }
  function f(h, d, m, k, _) {
    return d === null || d.tag !== 7
      ? ((d = Vn(m, h.mode, k, _)), (d.return = h), d)
      : ((d = i(d, m)), (d.return = h), d);
  }
  function c(h, d, m) {
    if ((typeof d == "string" && d !== "") || typeof d == "number")
      return (d = wa("" + d, h.mode, m)), (d.return = h), d;
    if (typeof d == "object" && d !== null) {
      switch (d.$$typeof) {
        case po:
          return (
            (m = $o(d.type, d.key, d.props, null, h.mode, m)),
            (m.ref = ri(h, null, d)),
            (m.return = h),
            m
          );
        case dr:
          return (d = xa(d, h.mode, m)), (d.return = h), d;
        case sn:
          var k = d._init;
          return c(h, k(d._payload), m);
      }
      if (ci(d) || Zr(d))
        return (d = Vn(d, h.mode, m, null)), (d.return = h), d;
      Co(h, d);
    }
    return null;
  }
  function p(h, d, m, k) {
    var _ = d !== null ? d.key : null;
    if ((typeof m == "string" && m !== "") || typeof m == "number")
      return _ !== null ? null : a(h, d, "" + m, k);
    if (typeof m == "object" && m !== null) {
      switch (m.$$typeof) {
        case po:
          return m.key === _ ? s(h, d, m, k) : null;
        case dr:
          return m.key === _ ? u(h, d, m, k) : null;
        case sn:
          return (_ = m._init), p(h, d, _(m._payload), k);
      }
      if (ci(m) || Zr(m)) return _ !== null ? null : f(h, d, m, k, null);
      Co(h, m);
    }
    return null;
  }
  function E(h, d, m, k, _) {
    if ((typeof k == "string" && k !== "") || typeof k == "number")
      return (h = h.get(m) || null), a(d, h, "" + k, _);
    if (typeof k == "object" && k !== null) {
      switch (k.$$typeof) {
        case po:
          return (h = h.get(k.key === null ? m : k.key) || null), s(d, h, k, _);
        case dr:
          return (h = h.get(k.key === null ? m : k.key) || null), u(d, h, k, _);
        case sn:
          var g = k._init;
          return E(h, d, m, g(k._payload), _);
      }
      if (ci(k) || Zr(k)) return (h = h.get(m) || null), f(d, h, k, _, null);
      Co(d, k);
    }
    return null;
  }
  function x(h, d, m, k) {
    for (
      var _ = null, g = null, O = d, T = (d = 0), I = null;
      O !== null && T < m.length;
      T++
    ) {
      O.index > T ? ((I = O), (O = null)) : (I = O.sibling);
      var D = p(h, O, m[T], k);
      if (D === null) {
        O === null && (O = I);
        break;
      }
      e && O && D.alternate === null && t(h, O),
        (d = o(D, d, T)),
        g === null ? (_ = D) : (g.sibling = D),
        (g = D),
        (O = I);
    }
    if (T === m.length) return n(h, O), he && jn(h, T), _;
    if (O === null) {
      for (; T < m.length; T++)
        (O = c(h, m[T], k)),
          O !== null &&
            ((d = o(O, d, T)), g === null ? (_ = O) : (g.sibling = O), (g = O));
      return he && jn(h, T), _;
    }
    for (O = r(h, O); T < m.length; T++)
      (I = E(O, h, T, m[T], k)),
        I !== null &&
          (e && I.alternate !== null && O.delete(I.key === null ? T : I.key),
          (d = o(I, d, T)),
          g === null ? (_ = I) : (g.sibling = I),
          (g = I));
    return (
      e &&
        O.forEach(function (G) {
          return t(h, G);
        }),
      he && jn(h, T),
      _
    );
  }
  function w(h, d, m, k) {
    var _ = Zr(m);
    if (typeof _ != "function") throw Error(L(150));
    if (((m = _.call(m)), m == null)) throw Error(L(151));
    for (
      var g = (_ = null), O = d, T = (d = 0), I = null, D = m.next();
      O !== null && !D.done;
      T++, D = m.next()
    ) {
      O.index > T ? ((I = O), (O = null)) : (I = O.sibling);
      var G = p(h, O, D.value, k);
      if (G === null) {
        O === null && (O = I);
        break;
      }
      e && O && G.alternate === null && t(h, O),
        (d = o(G, d, T)),
        g === null ? (_ = G) : (g.sibling = G),
        (g = G),
        (O = I);
    }
    if (D.done) return n(h, O), he && jn(h, T), _;
    if (O === null) {
      for (; !D.done; T++, D = m.next())
        (D = c(h, D.value, k)),
          D !== null &&
            ((d = o(D, d, T)), g === null ? (_ = D) : (g.sibling = D), (g = D));
      return he && jn(h, T), _;
    }
    for (O = r(h, O); !D.done; T++, D = m.next())
      (D = E(O, h, T, D.value, k)),
        D !== null &&
          (e && D.alternate !== null && O.delete(D.key === null ? T : D.key),
          (d = o(D, d, T)),
          g === null ? (_ = D) : (g.sibling = D),
          (g = D));
    return (
      e &&
        O.forEach(function (fe) {
          return t(h, fe);
        }),
      he && jn(h, T),
      _
    );
  }
  function P(h, d, m, k) {
    if (
      (typeof m == "object" &&
        m !== null &&
        m.type === pr &&
        m.key === null &&
        (m = m.props.children),
      typeof m == "object" && m !== null)
    ) {
      switch (m.$$typeof) {
        case po:
          e: {
            for (var _ = m.key, g = d; g !== null; ) {
              if (g.key === _) {
                if (((_ = m.type), _ === pr)) {
                  if (g.tag === 7) {
                    n(h, g.sibling),
                      (d = i(g, m.props.children)),
                      (d.return = h),
                      (h = d);
                    break e;
                  }
                } else if (
                  g.elementType === _ ||
                  (typeof _ == "object" &&
                    _ !== null &&
                    _.$$typeof === sn &&
                    ef(_) === g.type)
                ) {
                  n(h, g.sibling),
                    (d = i(g, m.props)),
                    (d.ref = ri(h, g, m)),
                    (d.return = h),
                    (h = d);
                  break e;
                }
                n(h, g);
                break;
              } else t(h, g);
              g = g.sibling;
            }
            m.type === pr
              ? ((d = Vn(m.props.children, h.mode, k, m.key)),
                (d.return = h),
                (h = d))
              : ((k = $o(m.type, m.key, m.props, null, h.mode, k)),
                (k.ref = ri(h, d, m)),
                (k.return = h),
                (h = k));
          }
          return l(h);
        case dr:
          e: {
            for (g = m.key; d !== null; ) {
              if (d.key === g)
                if (
                  d.tag === 4 &&
                  d.stateNode.containerInfo === m.containerInfo &&
                  d.stateNode.implementation === m.implementation
                ) {
                  n(h, d.sibling),
                    (d = i(d, m.children || [])),
                    (d.return = h),
                    (h = d);
                  break e;
                } else {
                  n(h, d);
                  break;
                }
              else t(h, d);
              d = d.sibling;
            }
            (d = xa(m, h.mode, k)), (d.return = h), (h = d);
          }
          return l(h);
        case sn:
          return (g = m._init), P(h, d, g(m._payload), k);
      }
      if (ci(m)) return x(h, d, m, k);
      if (Zr(m)) return w(h, d, m, k);
      Co(h, m);
    }
    return (typeof m == "string" && m !== "") || typeof m == "number"
      ? ((m = "" + m),
        d !== null && d.tag === 6
          ? (n(h, d.sibling), (d = i(d, m)), (d.return = h), (h = d))
          : (n(h, d), (d = wa(m, h.mode, k)), (d.return = h), (h = d)),
        l(h))
      : n(h, d);
  }
  return P;
}
var Ir = Dp(!0),
  Ip = Dp(!1),
  ol = Ln(null),
  ll = null,
  Sr = null,
  hu = null;
function mu() {
  hu = Sr = ll = null;
}
function vu(e) {
  var t = ol.current;
  ue(ol), (e._currentValue = t);
}
function ls(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if (
      ((e.childLanes & t) !== t
        ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
        : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
      e === n)
    )
      break;
    e = e.return;
  }
}
function Or(e, t) {
  (ll = e),
    (hu = Sr = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (Ke = !0), (e.firstContext = null));
}
function pt(e) {
  var t = e._currentValue;
  if (hu !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), Sr === null)) {
      if (ll === null) throw Error(L(308));
      (Sr = e), (ll.dependencies = { lanes: 0, firstContext: e });
    } else Sr = Sr.next = e;
  return t;
}
var bn = null;
function gu(e) {
  bn === null ? (bn = [e]) : bn.push(e);
}
function Fp(e, t, n, r) {
  var i = t.interleaved;
  return (
    i === null ? ((n.next = n), gu(t)) : ((n.next = i.next), (i.next = n)),
    (t.interleaved = n),
    Qt(e, r)
  );
}
function Qt(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    (e.childLanes |= t),
      (n = e.alternate),
      n !== null && (n.childLanes |= t),
      (n = e),
      (e = e.return);
  return n.tag === 3 ? n.stateNode : null;
}
var un = !1;
function yu(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function Up(e, t) {
  (e = e.updateQueue),
    t.updateQueue === e &&
      (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      });
}
function Wt(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function wn(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), J & 2)) {
    var i = r.pending;
    return (
      i === null ? (t.next = t) : ((t.next = i.next), (i.next = t)),
      (r.pending = t),
      Qt(e, n)
    );
  }
  return (
    (i = r.interleaved),
    i === null ? ((t.next = t), gu(r)) : ((t.next = i.next), (i.next = t)),
    (r.interleaved = t),
    Qt(e, n)
  );
}
function Do(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), ru(e, n);
  }
}
function tf(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var i = null,
      o = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var l = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        o === null ? (i = o = l) : (o = o.next = l), (n = n.next);
      } while (n !== null);
      o === null ? (i = o = t) : (o = o.next = t);
    } else i = o = t;
    (n = {
      baseState: r.baseState,
      firstBaseUpdate: i,
      lastBaseUpdate: o,
      shared: r.shared,
      effects: r.effects,
    }),
      (e.updateQueue = n);
    return;
  }
  (e = n.lastBaseUpdate),
    e === null ? (n.firstBaseUpdate = t) : (e.next = t),
    (n.lastBaseUpdate = t);
}
function al(e, t, n, r) {
  var i = e.updateQueue;
  un = !1;
  var o = i.firstBaseUpdate,
    l = i.lastBaseUpdate,
    a = i.shared.pending;
  if (a !== null) {
    i.shared.pending = null;
    var s = a,
      u = s.next;
    (s.next = null), l === null ? (o = u) : (l.next = u), (l = s);
    var f = e.alternate;
    f !== null &&
      ((f = f.updateQueue),
      (a = f.lastBaseUpdate),
      a !== l &&
        (a === null ? (f.firstBaseUpdate = u) : (a.next = u),
        (f.lastBaseUpdate = s)));
  }
  if (o !== null) {
    var c = i.baseState;
    (l = 0), (f = u = s = null), (a = o);
    do {
      var p = a.lane,
        E = a.eventTime;
      if ((r & p) === p) {
        f !== null &&
          (f = f.next =
            {
              eventTime: E,
              lane: 0,
              tag: a.tag,
              payload: a.payload,
              callback: a.callback,
              next: null,
            });
        e: {
          var x = e,
            w = a;
          switch (((p = t), (E = n), w.tag)) {
            case 1:
              if (((x = w.payload), typeof x == "function")) {
                c = x.call(E, c, p);
                break e;
              }
              c = x;
              break e;
            case 3:
              x.flags = (x.flags & -65537) | 128;
            case 0:
              if (
                ((x = w.payload),
                (p = typeof x == "function" ? x.call(E, c, p) : x),
                p == null)
              )
                break e;
              c = we({}, c, p);
              break e;
            case 2:
              un = !0;
          }
        }
        a.callback !== null &&
          a.lane !== 0 &&
          ((e.flags |= 64),
          (p = i.effects),
          p === null ? (i.effects = [a]) : p.push(a));
      } else
        (E = {
          eventTime: E,
          lane: p,
          tag: a.tag,
          payload: a.payload,
          callback: a.callback,
          next: null,
        }),
          f === null ? ((u = f = E), (s = c)) : (f = f.next = E),
          (l |= p);
      if (((a = a.next), a === null)) {
        if (((a = i.shared.pending), a === null)) break;
        (p = a),
          (a = p.next),
          (p.next = null),
          (i.lastBaseUpdate = p),
          (i.shared.pending = null);
      }
    } while (!0);
    if (
      (f === null && (s = c),
      (i.baseState = s),
      (i.firstBaseUpdate = u),
      (i.lastBaseUpdate = f),
      (t = i.shared.interleaved),
      t !== null)
    ) {
      i = t;
      do (l |= i.lane), (i = i.next);
      while (i !== t);
    } else o === null && (i.shared.lanes = 0);
    (Jn |= l), (e.lanes = l), (e.memoizedState = c);
  }
}
function nf(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        i = r.callback;
      if (i !== null) {
        if (((r.callback = null), (r = n), typeof i != "function"))
          throw Error(L(191, i));
        i.call(r);
      }
    }
}
var Zi = {},
  jt = Ln(Zi),
  Fi = Ln(Zi),
  Ui = Ln(Zi);
function Bn(e) {
  if (e === Zi) throw Error(L(174));
  return e;
}
function wu(e, t) {
  switch ((le(Ui, t), le(Fi, e), le(jt, Zi), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : ba(null, "");
      break;
    default:
      (e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = ba(t, e));
  }
  ue(jt), le(jt, t);
}
function Fr() {
  ue(jt), ue(Fi), ue(Ui);
}
function bp(e) {
  Bn(Ui.current);
  var t = Bn(jt.current),
    n = ba(t, e.type);
  t !== n && (le(Fi, e), le(jt, n));
}
function xu(e) {
  Fi.current === e && (ue(jt), ue(Fi));
}
var ge = Ln(0);
function sl(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (
        n !== null &&
        ((n = n.dehydrated), n === null || n.data === "$?" || n.data === "$!")
      )
        return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t;
    } else if (t.child !== null) {
      (t.child.return = t), (t = t.child);
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    (t.sibling.return = t.return), (t = t.sibling);
  }
  return null;
}
var pa = [];
function Su() {
  for (var e = 0; e < pa.length; e++)
    pa[e]._workInProgressVersionPrimary = null;
  pa.length = 0;
}
var Io = Zt.ReactCurrentDispatcher,
  ha = Zt.ReactCurrentBatchConfig,
  Gn = 0,
  ye = null,
  _e = null,
  Le = null,
  ul = !1,
  Si = !1,
  bi = 0,
  Yg = 0;
function De() {
  throw Error(L(321));
}
function Eu(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!kt(e[n], t[n])) return !1;
  return !0;
}
function ku(e, t, n, r, i, o) {
  if (
    ((Gn = o),
    (ye = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (Io.current = e === null || e.memoizedState === null ? Gg : Jg),
    (e = n(r, i)),
    Si)
  ) {
    o = 0;
    do {
      if (((Si = !1), (bi = 0), 25 <= o)) throw Error(L(301));
      (o += 1),
        (Le = _e = null),
        (t.updateQueue = null),
        (Io.current = Zg),
        (e = n(r, i));
    } while (Si);
  }
  if (
    ((Io.current = cl),
    (t = _e !== null && _e.next !== null),
    (Gn = 0),
    (Le = _e = ye = null),
    (ul = !1),
    t)
  )
    throw Error(L(300));
  return e;
}
function Cu() {
  var e = bi !== 0;
  return (bi = 0), e;
}
function Rt() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return Le === null ? (ye.memoizedState = Le = e) : (Le = Le.next = e), Le;
}
function ht() {
  if (_e === null) {
    var e = ye.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = _e.next;
  var t = Le === null ? ye.memoizedState : Le.next;
  if (t !== null) (Le = t), (_e = e);
  else {
    if (e === null) throw Error(L(310));
    (_e = e),
      (e = {
        memoizedState: _e.memoizedState,
        baseState: _e.baseState,
        baseQueue: _e.baseQueue,
        queue: _e.queue,
        next: null,
      }),
      Le === null ? (ye.memoizedState = Le = e) : (Le = Le.next = e);
  }
  return Le;
}
function Bi(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function ma(e) {
  var t = ht(),
    n = t.queue;
  if (n === null) throw Error(L(311));
  n.lastRenderedReducer = e;
  var r = _e,
    i = r.baseQueue,
    o = n.pending;
  if (o !== null) {
    if (i !== null) {
      var l = i.next;
      (i.next = o.next), (o.next = l);
    }
    (r.baseQueue = i = o), (n.pending = null);
  }
  if (i !== null) {
    (o = i.next), (r = r.baseState);
    var a = (l = null),
      s = null,
      u = o;
    do {
      var f = u.lane;
      if ((Gn & f) === f)
        s !== null &&
          (s = s.next =
            {
              lane: 0,
              action: u.action,
              hasEagerState: u.hasEagerState,
              eagerState: u.eagerState,
              next: null,
            }),
          (r = u.hasEagerState ? u.eagerState : e(r, u.action));
      else {
        var c = {
          lane: f,
          action: u.action,
          hasEagerState: u.hasEagerState,
          eagerState: u.eagerState,
          next: null,
        };
        s === null ? ((a = s = c), (l = r)) : (s = s.next = c),
          (ye.lanes |= f),
          (Jn |= f);
      }
      u = u.next;
    } while (u !== null && u !== o);
    s === null ? (l = r) : (s.next = a),
      kt(r, t.memoizedState) || (Ke = !0),
      (t.memoizedState = r),
      (t.baseState = l),
      (t.baseQueue = s),
      (n.lastRenderedState = r);
  }
  if (((e = n.interleaved), e !== null)) {
    i = e;
    do (o = i.lane), (ye.lanes |= o), (Jn |= o), (i = i.next);
    while (i !== e);
  } else i === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function va(e) {
  var t = ht(),
    n = t.queue;
  if (n === null) throw Error(L(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    i = n.pending,
    o = t.memoizedState;
  if (i !== null) {
    n.pending = null;
    var l = (i = i.next);
    do (o = e(o, l.action)), (l = l.next);
    while (l !== i);
    kt(o, t.memoizedState) || (Ke = !0),
      (t.memoizedState = o),
      t.baseQueue === null && (t.baseState = o),
      (n.lastRenderedState = o);
  }
  return [o, r];
}
function Bp() {}
function $p(e, t) {
  var n = ye,
    r = ht(),
    i = t(),
    o = !kt(r.memoizedState, i);
  if (
    (o && ((r.memoizedState = i), (Ke = !0)),
    (r = r.queue),
    Pu(Vp.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || o || (Le !== null && Le.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      $i(9, Hp.bind(null, n, r, i, t), void 0, null),
      Te === null)
    )
      throw Error(L(349));
    Gn & 30 || Wp(n, t, i);
  }
  return i;
}
function Wp(e, t, n) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = ye.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (ye.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function Hp(e, t, n, r) {
  (t.value = n), (t.getSnapshot = r), Yp(t) && Qp(e);
}
function Vp(e, t, n) {
  return n(function () {
    Yp(t) && Qp(e);
  });
}
function Yp(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !kt(e, n);
  } catch {
    return !0;
  }
}
function Qp(e) {
  var t = Qt(e, 1);
  t !== null && Et(t, e, 1, -1);
}
function rf(e) {
  var t = Rt();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Bi,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = Xg.bind(null, ye, e)),
    [t.memoizedState, e]
  );
}
function $i(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = ye.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (ye.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function Kp() {
  return ht().memoizedState;
}
function Fo(e, t, n, r) {
  var i = Rt();
  (ye.flags |= e),
    (i.memoizedState = $i(1 | t, n, void 0, r === void 0 ? null : r));
}
function Ll(e, t, n, r) {
  var i = ht();
  r = r === void 0 ? null : r;
  var o = void 0;
  if (_e !== null) {
    var l = _e.memoizedState;
    if (((o = l.destroy), r !== null && Eu(r, l.deps))) {
      i.memoizedState = $i(t, n, o, r);
      return;
    }
  }
  (ye.flags |= e), (i.memoizedState = $i(1 | t, n, o, r));
}
function of(e, t) {
  return Fo(8390656, 8, e, t);
}
function Pu(e, t) {
  return Ll(2048, 8, e, t);
}
function Xp(e, t) {
  return Ll(4, 2, e, t);
}
function Gp(e, t) {
  return Ll(4, 4, e, t);
}
function Jp(e, t) {
  if (typeof t == "function")
    return (
      (e = e()),
      t(e),
      function () {
        t(null);
      }
    );
  if (t != null)
    return (
      (e = e()),
      (t.current = e),
      function () {
        t.current = null;
      }
    );
}
function Zp(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null), Ll(4, 4, Jp.bind(null, t, e), n)
  );
}
function _u() {}
function qp(e, t) {
  var n = ht();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Eu(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function eh(e, t) {
  var n = ht();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Eu(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function th(e, t, n) {
  return Gn & 21
    ? (kt(n, t) || ((n = lp()), (ye.lanes |= n), (Jn |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (Ke = !0)), (e.memoizedState = n));
}
function Qg(e, t) {
  var n = te;
  (te = n !== 0 && 4 > n ? n : 4), e(!0);
  var r = ha.transition;
  ha.transition = {};
  try {
    e(!1), t();
  } finally {
    (te = n), (ha.transition = r);
  }
}
function nh() {
  return ht().memoizedState;
}
function Kg(e, t, n) {
  var r = Sn(e);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    rh(e))
  )
    ih(t, n);
  else if (((n = Fp(e, t, n, r)), n !== null)) {
    var i = He();
    Et(n, e, r, i), oh(n, t, r);
  }
}
function Xg(e, t, n) {
  var r = Sn(e),
    i = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (rh(e)) ih(t, i);
  else {
    var o = e.alternate;
    if (
      e.lanes === 0 &&
      (o === null || o.lanes === 0) &&
      ((o = t.lastRenderedReducer), o !== null)
    )
      try {
        var l = t.lastRenderedState,
          a = o(l, n);
        if (((i.hasEagerState = !0), (i.eagerState = a), kt(a, l))) {
          var s = t.interleaved;
          s === null
            ? ((i.next = i), gu(t))
            : ((i.next = s.next), (s.next = i)),
            (t.interleaved = i);
          return;
        }
      } catch {
      } finally {
      }
    (n = Fp(e, t, i, r)),
      n !== null && ((i = He()), Et(n, e, r, i), oh(n, t, r));
  }
}
function rh(e) {
  var t = e.alternate;
  return e === ye || (t !== null && t === ye);
}
function ih(e, t) {
  Si = ul = !0;
  var n = e.pending;
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t);
}
function oh(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), ru(e, n);
  }
}
var cl = {
    readContext: pt,
    useCallback: De,
    useContext: De,
    useEffect: De,
    useImperativeHandle: De,
    useInsertionEffect: De,
    useLayoutEffect: De,
    useMemo: De,
    useReducer: De,
    useRef: De,
    useState: De,
    useDebugValue: De,
    useDeferredValue: De,
    useTransition: De,
    useMutableSource: De,
    useSyncExternalStore: De,
    useId: De,
    unstable_isNewReconciler: !1,
  },
  Gg = {
    readContext: pt,
    useCallback: function (e, t) {
      return (Rt().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: pt,
    useEffect: of,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        Fo(4194308, 4, Jp.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return Fo(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return Fo(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = Rt();
      return (
        (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
      );
    },
    useReducer: function (e, t, n) {
      var r = Rt();
      return (
        (t = n !== void 0 ? n(t) : t),
        (r.memoizedState = r.baseState = t),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: t,
        }),
        (r.queue = e),
        (e = e.dispatch = Kg.bind(null, ye, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = Rt();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: rf,
    useDebugValue: _u,
    useDeferredValue: function (e) {
      return (Rt().memoizedState = e);
    },
    useTransition: function () {
      var e = rf(!1),
        t = e[0];
      return (e = Qg.bind(null, e[1])), (Rt().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = ye,
        i = Rt();
      if (he) {
        if (n === void 0) throw Error(L(407));
        n = n();
      } else {
        if (((n = t()), Te === null)) throw Error(L(349));
        Gn & 30 || Wp(r, t, n);
      }
      i.memoizedState = n;
      var o = { value: n, getSnapshot: t };
      return (
        (i.queue = o),
        of(Vp.bind(null, r, o, e), [e]),
        (r.flags |= 2048),
        $i(9, Hp.bind(null, r, o, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = Rt(),
        t = Te.identifierPrefix;
      if (he) {
        var n = $t,
          r = Bt;
        (n = (r & ~(1 << (32 - St(r) - 1))).toString(32) + n),
          (t = ":" + t + "R" + n),
          (n = bi++),
          0 < n && (t += "H" + n.toString(32)),
          (t += ":");
      } else (n = Yg++), (t = ":" + t + "r" + n.toString(32) + ":");
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  Jg = {
    readContext: pt,
    useCallback: qp,
    useContext: pt,
    useEffect: Pu,
    useImperativeHandle: Zp,
    useInsertionEffect: Xp,
    useLayoutEffect: Gp,
    useMemo: eh,
    useReducer: ma,
    useRef: Kp,
    useState: function () {
      return ma(Bi);
    },
    useDebugValue: _u,
    useDeferredValue: function (e) {
      var t = ht();
      return th(t, _e.memoizedState, e);
    },
    useTransition: function () {
      var e = ma(Bi)[0],
        t = ht().memoizedState;
      return [e, t];
    },
    useMutableSource: Bp,
    useSyncExternalStore: $p,
    useId: nh,
    unstable_isNewReconciler: !1,
  },
  Zg = {
    readContext: pt,
    useCallback: qp,
    useContext: pt,
    useEffect: Pu,
    useImperativeHandle: Zp,
    useInsertionEffect: Xp,
    useLayoutEffect: Gp,
    useMemo: eh,
    useReducer: va,
    useRef: Kp,
    useState: function () {
      return va(Bi);
    },
    useDebugValue: _u,
    useDeferredValue: function (e) {
      var t = ht();
      return _e === null ? (t.memoizedState = e) : th(t, _e.memoizedState, e);
    },
    useTransition: function () {
      var e = va(Bi)[0],
        t = ht().memoizedState;
      return [e, t];
    },
    useMutableSource: Bp,
    useSyncExternalStore: $p,
    useId: nh,
    unstable_isNewReconciler: !1,
  };
function gt(e, t) {
  if (e && e.defaultProps) {
    (t = we({}, t)), (e = e.defaultProps);
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function as(e, t, n, r) {
  (t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : we({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n);
}
var Tl = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? rr(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = He(),
      i = Sn(e),
      o = Wt(r, i);
    (o.payload = t),
      n != null && (o.callback = n),
      (t = wn(e, o, i)),
      t !== null && (Et(t, e, i, r), Do(t, e, i));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = He(),
      i = Sn(e),
      o = Wt(r, i);
    (o.tag = 1),
      (o.payload = t),
      n != null && (o.callback = n),
      (t = wn(e, o, i)),
      t !== null && (Et(t, e, i, r), Do(t, e, i));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = He(),
      r = Sn(e),
      i = Wt(n, r);
    (i.tag = 2),
      t != null && (i.callback = t),
      (t = wn(e, i, r)),
      t !== null && (Et(t, e, r, n), Do(t, e, r));
  },
};
function lf(e, t, n, r, i, o, l) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(r, o, l)
      : t.prototype && t.prototype.isPureReactComponent
      ? !zi(n, r) || !zi(i, o)
      : !0
  );
}
function lh(e, t, n) {
  var r = !1,
    i = Cn,
    o = t.contextType;
  return (
    typeof o == "object" && o !== null
      ? (o = pt(o))
      : ((i = Ge(t) ? Kn : Ue.current),
        (r = t.contextTypes),
        (o = (r = r != null) ? jr(e, i) : Cn)),
    (t = new t(n, o)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = Tl),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = i),
      (e.__reactInternalMemoizedMaskedChildContext = o)),
    t
  );
}
function af(e, t, n, r) {
  (e = t.state),
    typeof t.componentWillReceiveProps == "function" &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && Tl.enqueueReplaceState(t, t.state, null);
}
function ss(e, t, n, r) {
  var i = e.stateNode;
  (i.props = n), (i.state = e.memoizedState), (i.refs = {}), yu(e);
  var o = t.contextType;
  typeof o == "object" && o !== null
    ? (i.context = pt(o))
    : ((o = Ge(t) ? Kn : Ue.current), (i.context = jr(e, o))),
    (i.state = e.memoizedState),
    (o = t.getDerivedStateFromProps),
    typeof o == "function" && (as(e, t, o, n), (i.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof i.getSnapshotBeforeUpdate == "function" ||
      (typeof i.UNSAFE_componentWillMount != "function" &&
        typeof i.componentWillMount != "function") ||
      ((t = i.state),
      typeof i.componentWillMount == "function" && i.componentWillMount(),
      typeof i.UNSAFE_componentWillMount == "function" &&
        i.UNSAFE_componentWillMount(),
      t !== i.state && Tl.enqueueReplaceState(i, i.state, null),
      al(e, n, i, r),
      (i.state = e.memoizedState)),
    typeof i.componentDidMount == "function" && (e.flags |= 4194308);
}
function Ur(e, t) {
  try {
    var n = "",
      r = t;
    do (n += _v(r)), (r = r.return);
    while (r);
    var i = n;
  } catch (o) {
    i =
      `
Error generating stack: ` +
      o.message +
      `
` +
      o.stack;
  }
  return { value: e, source: t, stack: i, digest: null };
}
function ga(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function us(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var qg = typeof WeakMap == "function" ? WeakMap : Map;
function ah(e, t, n) {
  (n = Wt(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var r = t.value;
  return (
    (n.callback = function () {
      dl || ((dl = !0), (ws = r)), us(e, t);
    }),
    n
  );
}
function sh(e, t, n) {
  (n = Wt(-1, n)), (n.tag = 3);
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var i = t.value;
    (n.payload = function () {
      return r(i);
    }),
      (n.callback = function () {
        us(e, t);
      });
  }
  var o = e.stateNode;
  return (
    o !== null &&
      typeof o.componentDidCatch == "function" &&
      (n.callback = function () {
        us(e, t),
          typeof r != "function" &&
            (xn === null ? (xn = new Set([this])) : xn.add(this));
        var l = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: l !== null ? l : "",
        });
      }),
    n
  );
}
function sf(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new qg();
    var i = new Set();
    r.set(t, i);
  } else (i = r.get(t)), i === void 0 && ((i = new Set()), r.set(t, i));
  i.has(n) || (i.add(n), (e = p1.bind(null, e, t, n)), t.then(e, e));
}
function uf(e) {
  do {
    var t;
    if (
      ((t = e.tag === 13) &&
        ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)),
      t)
    )
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function cf(e, t, n, r, i) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = i), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 &&
            (n.alternate === null
              ? (n.tag = 17)
              : ((t = Wt(-1, 1)), (t.tag = 2), wn(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var e1 = Zt.ReactCurrentOwner,
  Ke = !1;
function We(e, t, n, r) {
  t.child = e === null ? Ip(t, null, n, r) : Ir(t, e.child, n, r);
}
function ff(e, t, n, r, i) {
  n = n.render;
  var o = t.ref;
  return (
    Or(t, i),
    (r = ku(e, t, n, r, o, i)),
    (n = Cu()),
    e !== null && !Ke
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~i),
        Kt(e, t, i))
      : (he && n && fu(t), (t.flags |= 1), We(e, t, r, i), t.child)
  );
}
function df(e, t, n, r, i) {
  if (e === null) {
    var o = n.type;
    return typeof o == "function" &&
      !zu(o) &&
      o.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = o), uh(e, t, o, r, i))
      : ((e = $o(n.type, null, r, t, t.mode, i)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((o = e.child), !(e.lanes & i))) {
    var l = o.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : zi), n(l, r) && e.ref === t.ref)
    )
      return Kt(e, t, i);
  }
  return (
    (t.flags |= 1),
    (e = En(o, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function uh(e, t, n, r, i) {
  if (e !== null) {
    var o = e.memoizedProps;
    if (zi(o, r) && e.ref === t.ref)
      if (((Ke = !1), (t.pendingProps = r = o), (e.lanes & i) !== 0))
        e.flags & 131072 && (Ke = !0);
      else return (t.lanes = e.lanes), Kt(e, t, i);
  }
  return cs(e, t, n, r, i);
}
function ch(e, t, n) {
  var r = t.pendingProps,
    i = r.children,
    o = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(t.mode & 1))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        le(kr, qe),
        (qe |= n);
    else {
      if (!(n & 1073741824))
        return (
          (e = o !== null ? o.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (t.updateQueue = null),
          le(kr, qe),
          (qe |= e),
          null
        );
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = o !== null ? o.baseLanes : n),
        le(kr, qe),
        (qe |= r);
    }
  else
    o !== null ? ((r = o.baseLanes | n), (t.memoizedState = null)) : (r = n),
      le(kr, qe),
      (qe |= r);
  return We(e, t, i, n), t.child;
}
function fh(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function cs(e, t, n, r, i) {
  var o = Ge(n) ? Kn : Ue.current;
  return (
    (o = jr(t, o)),
    Or(t, i),
    (n = ku(e, t, n, r, o, i)),
    (r = Cu()),
    e !== null && !Ke
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~i),
        Kt(e, t, i))
      : (he && r && fu(t), (t.flags |= 1), We(e, t, n, i), t.child)
  );
}
function pf(e, t, n, r, i) {
  if (Ge(n)) {
    var o = !0;
    nl(t);
  } else o = !1;
  if ((Or(t, i), t.stateNode === null))
    Uo(e, t), lh(t, n, r), ss(t, n, r, i), (r = !0);
  else if (e === null) {
    var l = t.stateNode,
      a = t.memoizedProps;
    l.props = a;
    var s = l.context,
      u = n.contextType;
    typeof u == "object" && u !== null
      ? (u = pt(u))
      : ((u = Ge(n) ? Kn : Ue.current), (u = jr(t, u)));
    var f = n.getDerivedStateFromProps,
      c =
        typeof f == "function" ||
        typeof l.getSnapshotBeforeUpdate == "function";
    c ||
      (typeof l.UNSAFE_componentWillReceiveProps != "function" &&
        typeof l.componentWillReceiveProps != "function") ||
      ((a !== r || s !== u) && af(t, l, r, u)),
      (un = !1);
    var p = t.memoizedState;
    (l.state = p),
      al(t, r, l, i),
      (s = t.memoizedState),
      a !== r || p !== s || Xe.current || un
        ? (typeof f == "function" && (as(t, n, f, r), (s = t.memoizedState)),
          (a = un || lf(t, n, a, r, p, s, u))
            ? (c ||
                (typeof l.UNSAFE_componentWillMount != "function" &&
                  typeof l.componentWillMount != "function") ||
                (typeof l.componentWillMount == "function" &&
                  l.componentWillMount(),
                typeof l.UNSAFE_componentWillMount == "function" &&
                  l.UNSAFE_componentWillMount()),
              typeof l.componentDidMount == "function" && (t.flags |= 4194308))
            : (typeof l.componentDidMount == "function" && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = s)),
          (l.props = r),
          (l.state = s),
          (l.context = u),
          (r = a))
        : (typeof l.componentDidMount == "function" && (t.flags |= 4194308),
          (r = !1));
  } else {
    (l = t.stateNode),
      Up(e, t),
      (a = t.memoizedProps),
      (u = t.type === t.elementType ? a : gt(t.type, a)),
      (l.props = u),
      (c = t.pendingProps),
      (p = l.context),
      (s = n.contextType),
      typeof s == "object" && s !== null
        ? (s = pt(s))
        : ((s = Ge(n) ? Kn : Ue.current), (s = jr(t, s)));
    var E = n.getDerivedStateFromProps;
    (f =
      typeof E == "function" ||
      typeof l.getSnapshotBeforeUpdate == "function") ||
      (typeof l.UNSAFE_componentWillReceiveProps != "function" &&
        typeof l.componentWillReceiveProps != "function") ||
      ((a !== c || p !== s) && af(t, l, r, s)),
      (un = !1),
      (p = t.memoizedState),
      (l.state = p),
      al(t, r, l, i);
    var x = t.memoizedState;
    a !== c || p !== x || Xe.current || un
      ? (typeof E == "function" && (as(t, n, E, r), (x = t.memoizedState)),
        (u = un || lf(t, n, u, r, p, x, s) || !1)
          ? (f ||
              (typeof l.UNSAFE_componentWillUpdate != "function" &&
                typeof l.componentWillUpdate != "function") ||
              (typeof l.componentWillUpdate == "function" &&
                l.componentWillUpdate(r, x, s),
              typeof l.UNSAFE_componentWillUpdate == "function" &&
                l.UNSAFE_componentWillUpdate(r, x, s)),
            typeof l.componentDidUpdate == "function" && (t.flags |= 4),
            typeof l.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
          : (typeof l.componentDidUpdate != "function" ||
              (a === e.memoizedProps && p === e.memoizedState) ||
              (t.flags |= 4),
            typeof l.getSnapshotBeforeUpdate != "function" ||
              (a === e.memoizedProps && p === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = x)),
        (l.props = r),
        (l.state = x),
        (l.context = s),
        (r = u))
      : (typeof l.componentDidUpdate != "function" ||
          (a === e.memoizedProps && p === e.memoizedState) ||
          (t.flags |= 4),
        typeof l.getSnapshotBeforeUpdate != "function" ||
          (a === e.memoizedProps && p === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return fs(e, t, n, r, o, i);
}
function fs(e, t, n, r, i, o) {
  fh(e, t);
  var l = (t.flags & 128) !== 0;
  if (!r && !l) return i && Jc(t, n, !1), Kt(e, t, o);
  (r = t.stateNode), (e1.current = t);
  var a =
    l && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && l
      ? ((t.child = Ir(t, e.child, null, o)), (t.child = Ir(t, null, a, o)))
      : We(e, t, a, o),
    (t.memoizedState = r.state),
    i && Jc(t, n, !0),
    t.child
  );
}
function dh(e) {
  var t = e.stateNode;
  t.pendingContext
    ? Gc(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && Gc(e, t.context, !1),
    wu(e, t.containerInfo);
}
function hf(e, t, n, r, i) {
  return Dr(), pu(i), (t.flags |= 256), We(e, t, n, r), t.child;
}
var ds = { dehydrated: null, treeContext: null, retryLane: 0 };
function ps(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function ph(e, t, n) {
  var r = t.pendingProps,
    i = ge.current,
    o = !1,
    l = (t.flags & 128) !== 0,
    a;
  if (
    ((a = l) ||
      (a = e !== null && e.memoizedState === null ? !1 : (i & 2) !== 0),
    a
      ? ((o = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (i |= 1),
    le(ge, i & 1),
    e === null)
  )
    return (
      os(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1
            ? e.data === "$!"
              ? (t.lanes = 8)
              : (t.lanes = 1073741824)
            : (t.lanes = 1),
          null)
        : ((l = r.children),
          (e = r.fallback),
          o
            ? ((r = t.mode),
              (o = t.child),
              (l = { mode: "hidden", children: l }),
              !(r & 1) && o !== null
                ? ((o.childLanes = 0), (o.pendingProps = l))
                : (o = Al(l, r, 0, null)),
              (e = Vn(e, r, n, null)),
              (o.return = t),
              (e.return = t),
              (o.sibling = e),
              (t.child = o),
              (t.child.memoizedState = ps(n)),
              (t.memoizedState = ds),
              e)
            : Nu(t, l))
    );
  if (((i = e.memoizedState), i !== null && ((a = i.dehydrated), a !== null)))
    return t1(e, t, l, r, a, i, n);
  if (o) {
    (o = r.fallback), (l = t.mode), (i = e.child), (a = i.sibling);
    var s = { mode: "hidden", children: r.children };
    return (
      !(l & 1) && t.child !== i
        ? ((r = t.child),
          (r.childLanes = 0),
          (r.pendingProps = s),
          (t.deletions = null))
        : ((r = En(i, s)), (r.subtreeFlags = i.subtreeFlags & 14680064)),
      a !== null ? (o = En(a, o)) : ((o = Vn(o, l, n, null)), (o.flags |= 2)),
      (o.return = t),
      (r.return = t),
      (r.sibling = o),
      (t.child = r),
      (r = o),
      (o = t.child),
      (l = e.child.memoizedState),
      (l =
        l === null
          ? ps(n)
          : {
              baseLanes: l.baseLanes | n,
              cachePool: null,
              transitions: l.transitions,
            }),
      (o.memoizedState = l),
      (o.childLanes = e.childLanes & ~n),
      (t.memoizedState = ds),
      r
    );
  }
  return (
    (o = e.child),
    (e = o.sibling),
    (r = En(o, { mode: "visible", children: r.children })),
    !(t.mode & 1) && (r.lanes = n),
    (r.return = t),
    (r.sibling = null),
    e !== null &&
      ((n = t.deletions),
      n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
    (t.child = r),
    (t.memoizedState = null),
    r
  );
}
function Nu(e, t) {
  return (
    (t = Al({ mode: "visible", children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function Po(e, t, n, r) {
  return (
    r !== null && pu(r),
    Ir(t, e.child, null, n),
    (e = Nu(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function t1(e, t, n, r, i, o, l) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = ga(Error(L(422)))), Po(e, t, l, r))
      : t.memoizedState !== null
      ? ((t.child = e.child), (t.flags |= 128), null)
      : ((o = r.fallback),
        (i = t.mode),
        (r = Al({ mode: "visible", children: r.children }, i, 0, null)),
        (o = Vn(o, i, l, null)),
        (o.flags |= 2),
        (r.return = t),
        (o.return = t),
        (r.sibling = o),
        (t.child = r),
        t.mode & 1 && Ir(t, e.child, null, l),
        (t.child.memoizedState = ps(l)),
        (t.memoizedState = ds),
        o);
  if (!(t.mode & 1)) return Po(e, t, l, null);
  if (i.data === "$!") {
    if (((r = i.nextSibling && i.nextSibling.dataset), r)) var a = r.dgst;
    return (r = a), (o = Error(L(419))), (r = ga(o, r, void 0)), Po(e, t, l, r);
  }
  if (((a = (l & e.childLanes) !== 0), Ke || a)) {
    if (((r = Te), r !== null)) {
      switch (l & -l) {
        case 4:
          i = 2;
          break;
        case 16:
          i = 8;
          break;
        case 64:
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
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          i = 32;
          break;
        case 536870912:
          i = 268435456;
          break;
        default:
          i = 0;
      }
      (i = i & (r.suspendedLanes | l) ? 0 : i),
        i !== 0 &&
          i !== o.retryLane &&
          ((o.retryLane = i), Qt(e, i), Et(r, e, i, -1));
    }
    return Au(), (r = ga(Error(L(421)))), Po(e, t, l, r);
  }
  return i.data === "$?"
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = h1.bind(null, e)),
      (i._reactRetry = t),
      null)
    : ((e = o.treeContext),
      (tt = yn(i.nextSibling)),
      (nt = t),
      (he = !0),
      (xt = null),
      e !== null &&
        ((ut[ct++] = Bt),
        (ut[ct++] = $t),
        (ut[ct++] = Xn),
        (Bt = e.id),
        ($t = e.overflow),
        (Xn = t)),
      (t = Nu(t, r.children)),
      (t.flags |= 4096),
      t);
}
function mf(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), ls(e.return, t, n);
}
function ya(e, t, n, r, i) {
  var o = e.memoizedState;
  o === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: i,
      })
    : ((o.isBackwards = t),
      (o.rendering = null),
      (o.renderingStartTime = 0),
      (o.last = r),
      (o.tail = n),
      (o.tailMode = i));
}
function hh(e, t, n) {
  var r = t.pendingProps,
    i = r.revealOrder,
    o = r.tail;
  if ((We(e, t, r.children, n), (r = ge.current), r & 2))
    (r = (r & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && mf(e, n, t);
        else if (e.tag === 19) mf(e, n, t);
        else if (e.child !== null) {
          (e.child.return = e), (e = e.child);
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        (e.sibling.return = e.return), (e = e.sibling);
      }
    r &= 1;
  }
  if ((le(ge, r), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (i) {
      case "forwards":
        for (n = t.child, i = null; n !== null; )
          (e = n.alternate),
            e !== null && sl(e) === null && (i = n),
            (n = n.sibling);
        (n = i),
          n === null
            ? ((i = t.child), (t.child = null))
            : ((i = n.sibling), (n.sibling = null)),
          ya(t, !1, i, n, o);
        break;
      case "backwards":
        for (n = null, i = t.child, t.child = null; i !== null; ) {
          if (((e = i.alternate), e !== null && sl(e) === null)) {
            t.child = i;
            break;
          }
          (e = i.sibling), (i.sibling = n), (n = i), (i = e);
        }
        ya(t, !0, n, null, o);
        break;
      case "together":
        ya(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function Uo(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function Kt(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (Jn |= t.lanes),
    !(n & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(L(153));
  if (t.child !== null) {
    for (
      e = t.child, n = En(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (n = n.sibling = En(e, e.pendingProps)), (n.return = t);
    n.sibling = null;
  }
  return t.child;
}
function n1(e, t, n) {
  switch (t.tag) {
    case 3:
      dh(t), Dr();
      break;
    case 5:
      bp(t);
      break;
    case 1:
      Ge(t.type) && nl(t);
      break;
    case 4:
      wu(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        i = t.memoizedProps.value;
      le(ol, r._currentValue), (r._currentValue = i);
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (le(ge, ge.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
          ? ph(e, t, n)
          : (le(ge, ge.current & 1),
            (e = Kt(e, t, n)),
            e !== null ? e.sibling : null);
      le(ge, ge.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return hh(e, t, n);
        t.flags |= 128;
      }
      if (
        ((i = t.memoizedState),
        i !== null &&
          ((i.rendering = null), (i.tail = null), (i.lastEffect = null)),
        le(ge, ge.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), ch(e, t, n);
  }
  return Kt(e, t, n);
}
var mh, hs, vh, gh;
mh = function (e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      (n.child.return = n), (n = n.child);
      continue;
    }
    if (n === t) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return;
      n = n.return;
    }
    (n.sibling.return = n.return), (n = n.sibling);
  }
};
hs = function () {};
vh = function (e, t, n, r) {
  var i = e.memoizedProps;
  if (i !== r) {
    (e = t.stateNode), Bn(jt.current);
    var o = null;
    switch (n) {
      case "input":
        (i = Da(e, i)), (r = Da(e, r)), (o = []);
        break;
      case "select":
        (i = we({}, i, { value: void 0 })),
          (r = we({}, r, { value: void 0 })),
          (o = []);
        break;
      case "textarea":
        (i = Ua(e, i)), (r = Ua(e, r)), (o = []);
        break;
      default:
        typeof i.onClick != "function" &&
          typeof r.onClick == "function" &&
          (e.onclick = el);
    }
    Ba(n, r);
    var l;
    n = null;
    for (u in i)
      if (!r.hasOwnProperty(u) && i.hasOwnProperty(u) && i[u] != null)
        if (u === "style") {
          var a = i[u];
          for (l in a) a.hasOwnProperty(l) && (n || (n = {}), (n[l] = ""));
        } else
          u !== "dangerouslySetInnerHTML" &&
            u !== "children" &&
            u !== "suppressContentEditableWarning" &&
            u !== "suppressHydrationWarning" &&
            u !== "autoFocus" &&
            (Ni.hasOwnProperty(u)
              ? o || (o = [])
              : (o = o || []).push(u, null));
    for (u in r) {
      var s = r[u];
      if (
        ((a = i != null ? i[u] : void 0),
        r.hasOwnProperty(u) && s !== a && (s != null || a != null))
      )
        if (u === "style")
          if (a) {
            for (l in a)
              !a.hasOwnProperty(l) ||
                (s && s.hasOwnProperty(l)) ||
                (n || (n = {}), (n[l] = ""));
            for (l in s)
              s.hasOwnProperty(l) &&
                a[l] !== s[l] &&
                (n || (n = {}), (n[l] = s[l]));
          } else n || (o || (o = []), o.push(u, n)), (n = s);
        else
          u === "dangerouslySetInnerHTML"
            ? ((s = s ? s.__html : void 0),
              (a = a ? a.__html : void 0),
              s != null && a !== s && (o = o || []).push(u, s))
            : u === "children"
            ? (typeof s != "string" && typeof s != "number") ||
              (o = o || []).push(u, "" + s)
            : u !== "suppressContentEditableWarning" &&
              u !== "suppressHydrationWarning" &&
              (Ni.hasOwnProperty(u)
                ? (s != null && u === "onScroll" && se("scroll", e),
                  o || a === s || (o = []))
                : (o = o || []).push(u, s));
    }
    n && (o = o || []).push("style", n);
    var u = o;
    (t.updateQueue = u) && (t.flags |= 4);
  }
};
gh = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function ii(e, t) {
  if (!he)
    switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var n = null; t !== null; )
          t.alternate !== null && (n = t), (t = t.sibling);
        n === null ? (e.tail = null) : (n.sibling = null);
        break;
      case "collapsed":
        n = e.tail;
        for (var r = null; n !== null; )
          n.alternate !== null && (r = n), (n = n.sibling);
        r === null
          ? t || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (r.sibling = null);
    }
}
function Ie(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    r = 0;
  if (t)
    for (var i = e.child; i !== null; )
      (n |= i.lanes | i.childLanes),
        (r |= i.subtreeFlags & 14680064),
        (r |= i.flags & 14680064),
        (i.return = e),
        (i = i.sibling);
  else
    for (i = e.child; i !== null; )
      (n |= i.lanes | i.childLanes),
        (r |= i.subtreeFlags),
        (r |= i.flags),
        (i.return = e),
        (i = i.sibling);
  return (e.subtreeFlags |= r), (e.childLanes = n), t;
}
function r1(e, t, n) {
  var r = t.pendingProps;
  switch ((du(t), t.tag)) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return Ie(t), null;
    case 1:
      return Ge(t.type) && tl(), Ie(t), null;
    case 3:
      return (
        (r = t.stateNode),
        Fr(),
        ue(Xe),
        ue(Ue),
        Su(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (ko(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), xt !== null && (Es(xt), (xt = null)))),
        hs(e, t),
        Ie(t),
        null
      );
    case 5:
      xu(t);
      var i = Bn(Ui.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        vh(e, t, n, r, i),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(L(166));
          return Ie(t), null;
        }
        if (((e = Bn(jt.current)), ko(t))) {
          (r = t.stateNode), (n = t.type);
          var o = t.memoizedProps;
          switch (((r[Tt] = t), (r[Ii] = o), (e = (t.mode & 1) !== 0), n)) {
            case "dialog":
              se("cancel", r), se("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              se("load", r);
              break;
            case "video":
            case "audio":
              for (i = 0; i < di.length; i++) se(di[i], r);
              break;
            case "source":
              se("error", r);
              break;
            case "img":
            case "image":
            case "link":
              se("error", r), se("load", r);
              break;
            case "details":
              se("toggle", r);
              break;
            case "input":
              kc(r, o), se("invalid", r);
              break;
            case "select":
              (r._wrapperState = { wasMultiple: !!o.multiple }),
                se("invalid", r);
              break;
            case "textarea":
              Pc(r, o), se("invalid", r);
          }
          Ba(n, o), (i = null);
          for (var l in o)
            if (o.hasOwnProperty(l)) {
              var a = o[l];
              l === "children"
                ? typeof a == "string"
                  ? r.textContent !== a &&
                    (o.suppressHydrationWarning !== !0 &&
                      Eo(r.textContent, a, e),
                    (i = ["children", a]))
                  : typeof a == "number" &&
                    r.textContent !== "" + a &&
                    (o.suppressHydrationWarning !== !0 &&
                      Eo(r.textContent, a, e),
                    (i = ["children", "" + a]))
                : Ni.hasOwnProperty(l) &&
                  a != null &&
                  l === "onScroll" &&
                  se("scroll", r);
            }
          switch (n) {
            case "input":
              ho(r), Cc(r, o, !0);
              break;
            case "textarea":
              ho(r), _c(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof o.onClick == "function" && (r.onclick = el);
          }
          (r = i), (t.updateQueue = r), r !== null && (t.flags |= 4);
        } else {
          (l = i.nodeType === 9 ? i : i.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = Vd(n)),
            e === "http://www.w3.org/1999/xhtml"
              ? n === "script"
                ? ((e = l.createElement("div")),
                  (e.innerHTML = "<script></script>"),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is == "string"
                ? (e = l.createElement(n, { is: r.is }))
                : ((e = l.createElement(n)),
                  n === "select" &&
                    ((l = e),
                    r.multiple
                      ? (l.multiple = !0)
                      : r.size && (l.size = r.size)))
              : (e = l.createElementNS(e, n)),
            (e[Tt] = t),
            (e[Ii] = r),
            mh(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((l = $a(n, r)), n)) {
              case "dialog":
                se("cancel", e), se("close", e), (i = r);
                break;
              case "iframe":
              case "object":
              case "embed":
                se("load", e), (i = r);
                break;
              case "video":
              case "audio":
                for (i = 0; i < di.length; i++) se(di[i], e);
                i = r;
                break;
              case "source":
                se("error", e), (i = r);
                break;
              case "img":
              case "image":
              case "link":
                se("error", e), se("load", e), (i = r);
                break;
              case "details":
                se("toggle", e), (i = r);
                break;
              case "input":
                kc(e, r), (i = Da(e, r)), se("invalid", e);
                break;
              case "option":
                i = r;
                break;
              case "select":
                (e._wrapperState = { wasMultiple: !!r.multiple }),
                  (i = we({}, r, { value: void 0 })),
                  se("invalid", e);
                break;
              case "textarea":
                Pc(e, r), (i = Ua(e, r)), se("invalid", e);
                break;
              default:
                i = r;
            }
            Ba(n, i), (a = i);
            for (o in a)
              if (a.hasOwnProperty(o)) {
                var s = a[o];
                o === "style"
                  ? Kd(e, s)
                  : o === "dangerouslySetInnerHTML"
                  ? ((s = s ? s.__html : void 0), s != null && Yd(e, s))
                  : o === "children"
                  ? typeof s == "string"
                    ? (n !== "textarea" || s !== "") && Ri(e, s)
                    : typeof s == "number" && Ri(e, "" + s)
                  : o !== "suppressContentEditableWarning" &&
                    o !== "suppressHydrationWarning" &&
                    o !== "autoFocus" &&
                    (Ni.hasOwnProperty(o)
                      ? s != null && o === "onScroll" && se("scroll", e)
                      : s != null && Js(e, o, s, l));
              }
            switch (n) {
              case "input":
                ho(e), Cc(e, r, !1);
                break;
              case "textarea":
                ho(e), _c(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + kn(r.value));
                break;
              case "select":
                (e.multiple = !!r.multiple),
                  (o = r.value),
                  o != null
                    ? Nr(e, !!r.multiple, o, !1)
                    : r.defaultValue != null &&
                      Nr(e, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof i.onClick == "function" && (e.onclick = el);
            }
            switch (n) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                r = !!r.autoFocus;
                break e;
              case "img":
                r = !0;
                break e;
              default:
                r = !1;
            }
          }
          r && (t.flags |= 4);
        }
        t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
      }
      return Ie(t), null;
    case 6:
      if (e && t.stateNode != null) gh(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(L(166));
        if (((n = Bn(Ui.current)), Bn(jt.current), ko(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[Tt] = t),
            (o = r.nodeValue !== n) && ((e = nt), e !== null))
          )
            switch (e.tag) {
              case 3:
                Eo(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  Eo(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          o && (t.flags |= 4);
        } else
          (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[Tt] = t),
            (t.stateNode = r);
      }
      return Ie(t), null;
    case 13:
      if (
        (ue(ge),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (he && tt !== null && t.mode & 1 && !(t.flags & 128))
          jp(), Dr(), (t.flags |= 98560), (o = !1);
        else if (((o = ko(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!o) throw Error(L(318));
            if (
              ((o = t.memoizedState),
              (o = o !== null ? o.dehydrated : null),
              !o)
            )
              throw Error(L(317));
            o[Tt] = t;
          } else
            Dr(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
          Ie(t), (o = !1);
        } else xt !== null && (Es(xt), (xt = null)), (o = !0);
        if (!o) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || ge.current & 1 ? Ne === 0 && (Ne = 3) : Au())),
          t.updateQueue !== null && (t.flags |= 4),
          Ie(t),
          null);
    case 4:
      return (
        Fr(), hs(e, t), e === null && ji(t.stateNode.containerInfo), Ie(t), null
      );
    case 10:
      return vu(t.type._context), Ie(t), null;
    case 17:
      return Ge(t.type) && tl(), Ie(t), null;
    case 19:
      if ((ue(ge), (o = t.memoizedState), o === null)) return Ie(t), null;
      if (((r = (t.flags & 128) !== 0), (l = o.rendering), l === null))
        if (r) ii(o, !1);
        else {
          if (Ne !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((l = sl(e)), l !== null)) {
                for (
                  t.flags |= 128,
                    ii(o, !1),
                    r = l.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;

                )
                  (o = n),
                    (e = r),
                    (o.flags &= 14680066),
                    (l = o.alternate),
                    l === null
                      ? ((o.childLanes = 0),
                        (o.lanes = e),
                        (o.child = null),
                        (o.subtreeFlags = 0),
                        (o.memoizedProps = null),
                        (o.memoizedState = null),
                        (o.updateQueue = null),
                        (o.dependencies = null),
                        (o.stateNode = null))
                      : ((o.childLanes = l.childLanes),
                        (o.lanes = l.lanes),
                        (o.child = l.child),
                        (o.subtreeFlags = 0),
                        (o.deletions = null),
                        (o.memoizedProps = l.memoizedProps),
                        (o.memoizedState = l.memoizedState),
                        (o.updateQueue = l.updateQueue),
                        (o.type = l.type),
                        (e = l.dependencies),
                        (o.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (n = n.sibling);
                return le(ge, (ge.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          o.tail !== null &&
            Ee() > br &&
            ((t.flags |= 128), (r = !0), ii(o, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = sl(l)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              ii(o, !0),
              o.tail === null && o.tailMode === "hidden" && !l.alternate && !he)
            )
              return Ie(t), null;
          } else
            2 * Ee() - o.renderingStartTime > br &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), ii(o, !1), (t.lanes = 4194304));
        o.isBackwards
          ? ((l.sibling = t.child), (t.child = l))
          : ((n = o.last),
            n !== null ? (n.sibling = l) : (t.child = l),
            (o.last = l));
      }
      return o.tail !== null
        ? ((t = o.tail),
          (o.rendering = t),
          (o.tail = t.sibling),
          (o.renderingStartTime = Ee()),
          (t.sibling = null),
          (n = ge.current),
          le(ge, r ? (n & 1) | 2 : n & 1),
          t)
        : (Ie(t), null);
    case 22:
    case 23:
      return (
        Mu(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? qe & 1073741824 && (Ie(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : Ie(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(L(156, t.tag));
}
function i1(e, t) {
  switch ((du(t), t.tag)) {
    case 1:
      return (
        Ge(t.type) && tl(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        Fr(),
        ue(Xe),
        ue(Ue),
        Su(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return xu(t), null;
    case 13:
      if (
        (ue(ge), (e = t.memoizedState), e !== null && e.dehydrated !== null)
      ) {
        if (t.alternate === null) throw Error(L(340));
        Dr();
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return ue(ge), null;
    case 4:
      return Fr(), null;
    case 10:
      return vu(t.type._context), null;
    case 22:
    case 23:
      return Mu(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var _o = !1,
  Fe = !1,
  o1 = typeof WeakSet == "function" ? WeakSet : Set,
  j = null;
function Er(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (r) {
        Se(e, t, r);
      }
    else n.current = null;
}
function ms(e, t, n) {
  try {
    n();
  } catch (r) {
    Se(e, t, r);
  }
}
var vf = !1;
function l1(e, t) {
  if (((Za = Jo), (e = Ep()), cu(e))) {
    if ("selectionStart" in e)
      var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var i = r.anchorOffset,
            o = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, o.nodeType;
          } catch {
            n = null;
            break e;
          }
          var l = 0,
            a = -1,
            s = -1,
            u = 0,
            f = 0,
            c = e,
            p = null;
          t: for (;;) {
            for (
              var E;
              c !== n || (i !== 0 && c.nodeType !== 3) || (a = l + i),
                c !== o || (r !== 0 && c.nodeType !== 3) || (s = l + r),
                c.nodeType === 3 && (l += c.nodeValue.length),
                (E = c.firstChild) !== null;

            )
              (p = c), (c = E);
            for (;;) {
              if (c === e) break t;
              if (
                (p === n && ++u === i && (a = l),
                p === o && ++f === r && (s = l),
                (E = c.nextSibling) !== null)
              )
                break;
              (c = p), (p = c.parentNode);
            }
            c = E;
          }
          n = a === -1 || s === -1 ? null : { start: a, end: s };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (qa = { focusedElem: e, selectionRange: n }, Jo = !1, j = t; j !== null; )
    if (((t = j), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), (j = e);
    else
      for (; j !== null; ) {
        t = j;
        try {
          var x = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (x !== null) {
                  var w = x.memoizedProps,
                    P = x.memoizedState,
                    h = t.stateNode,
                    d = h.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? w : gt(t.type, w),
                      P
                    );
                  h.__reactInternalSnapshotBeforeUpdate = d;
                }
                break;
              case 3:
                var m = t.stateNode.containerInfo;
                m.nodeType === 1
                  ? (m.textContent = "")
                  : m.nodeType === 9 &&
                    m.documentElement &&
                    m.removeChild(m.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(L(163));
            }
        } catch (k) {
          Se(t, t.return, k);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (j = e);
          break;
        }
        j = t.return;
      }
  return (x = vf), (vf = !1), x;
}
function Ei(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var i = (r = r.next);
    do {
      if ((i.tag & e) === e) {
        var o = i.destroy;
        (i.destroy = void 0), o !== void 0 && ms(t, n, o);
      }
      i = i.next;
    } while (i !== r);
  }
}
function Ol(e, t) {
  if (
    ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
  ) {
    var n = (t = t.next);
    do {
      if ((n.tag & e) === e) {
        var r = n.create;
        n.destroy = r();
      }
      n = n.next;
    } while (n !== t);
  }
}
function vs(e) {
  var t = e.ref;
  if (t !== null) {
    var n = e.stateNode;
    switch (e.tag) {
      case 5:
        e = n;
        break;
      default:
        e = n;
    }
    typeof t == "function" ? t(e) : (t.current = e);
  }
}
function yh(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), yh(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[Tt], delete t[Ii], delete t[ns], delete t[$g], delete t[Wg])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function wh(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function gf(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || wh(e.return)) return null;
      e = e.return;
    }
    for (
      e.sibling.return = e.return, e = e.sibling;
      e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

    ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      (e.child.return = e), (e = e.child);
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function gs(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode),
      t
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(e, t)
          : n.insertBefore(e, t)
        : (n.nodeType === 8
            ? ((t = n.parentNode), t.insertBefore(e, n))
            : ((t = n), t.appendChild(e)),
          (n = n._reactRootContainer),
          n != null || t.onclick !== null || (t.onclick = el));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (gs(e, t, n), e = e.sibling; e !== null; ) gs(e, t, n), (e = e.sibling);
}
function ys(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && ((e = e.child), e !== null))
    for (ys(e, t, n), e = e.sibling; e !== null; ) ys(e, t, n), (e = e.sibling);
}
var Ae = null,
  yt = !1;
function on(e, t, n) {
  for (n = n.child; n !== null; ) xh(e, t, n), (n = n.sibling);
}
function xh(e, t, n) {
  if (zt && typeof zt.onCommitFiberUnmount == "function")
    try {
      zt.onCommitFiberUnmount(kl, n);
    } catch {}
  switch (n.tag) {
    case 5:
      Fe || Er(n, t);
    case 6:
      var r = Ae,
        i = yt;
      (Ae = null),
        on(e, t, n),
        (Ae = r),
        (yt = i),
        Ae !== null &&
          (yt
            ? ((e = Ae),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : Ae.removeChild(n.stateNode));
      break;
    case 18:
      Ae !== null &&
        (yt
          ? ((e = Ae),
            (n = n.stateNode),
            e.nodeType === 8
              ? fa(e.parentNode, n)
              : e.nodeType === 1 && fa(e, n),
            Mi(e))
          : fa(Ae, n.stateNode));
      break;
    case 4:
      (r = Ae),
        (i = yt),
        (Ae = n.stateNode.containerInfo),
        (yt = !0),
        on(e, t, n),
        (Ae = r),
        (yt = i);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !Fe &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        i = r = r.next;
        do {
          var o = i,
            l = o.destroy;
          (o = o.tag),
            l !== void 0 && (o & 2 || o & 4) && ms(n, t, l),
            (i = i.next);
        } while (i !== r);
      }
      on(e, t, n);
      break;
    case 1:
      if (
        !Fe &&
        (Er(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == "function")
      )
        try {
          (r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount();
        } catch (a) {
          Se(n, t, a);
        }
      on(e, t, n);
      break;
    case 21:
      on(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((Fe = (r = Fe) || n.memoizedState !== null), on(e, t, n), (Fe = r))
        : on(e, t, n);
      break;
    default:
      on(e, t, n);
  }
}
function yf(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new o1()),
      t.forEach(function (r) {
        var i = m1.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(i, i));
      });
  }
}
function vt(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var i = n[r];
      try {
        var o = e,
          l = t,
          a = l;
        e: for (; a !== null; ) {
          switch (a.tag) {
            case 5:
              (Ae = a.stateNode), (yt = !1);
              break e;
            case 3:
              (Ae = a.stateNode.containerInfo), (yt = !0);
              break e;
            case 4:
              (Ae = a.stateNode.containerInfo), (yt = !0);
              break e;
          }
          a = a.return;
        }
        if (Ae === null) throw Error(L(160));
        xh(o, l, i), (Ae = null), (yt = !1);
        var s = i.alternate;
        s !== null && (s.return = null), (i.return = null);
      } catch (u) {
        Se(i, t, u);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) Sh(t, e), (t = t.sibling);
}
function Sh(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((vt(t, e), Nt(e), r & 4)) {
        try {
          Ei(3, e, e.return), Ol(3, e);
        } catch (w) {
          Se(e, e.return, w);
        }
        try {
          Ei(5, e, e.return);
        } catch (w) {
          Se(e, e.return, w);
        }
      }
      break;
    case 1:
      vt(t, e), Nt(e), r & 512 && n !== null && Er(n, n.return);
      break;
    case 5:
      if (
        (vt(t, e),
        Nt(e),
        r & 512 && n !== null && Er(n, n.return),
        e.flags & 32)
      ) {
        var i = e.stateNode;
        try {
          Ri(i, "");
        } catch (w) {
          Se(e, e.return, w);
        }
      }
      if (r & 4 && ((i = e.stateNode), i != null)) {
        var o = e.memoizedProps,
          l = n !== null ? n.memoizedProps : o,
          a = e.type,
          s = e.updateQueue;
        if (((e.updateQueue = null), s !== null))
          try {
            a === "input" && o.type === "radio" && o.name != null && Wd(i, o),
              $a(a, l);
            var u = $a(a, o);
            for (l = 0; l < s.length; l += 2) {
              var f = s[l],
                c = s[l + 1];
              f === "style"
                ? Kd(i, c)
                : f === "dangerouslySetInnerHTML"
                ? Yd(i, c)
                : f === "children"
                ? Ri(i, c)
                : Js(i, f, c, u);
            }
            switch (a) {
              case "input":
                Ia(i, o);
                break;
              case "textarea":
                Hd(i, o);
                break;
              case "select":
                var p = i._wrapperState.wasMultiple;
                i._wrapperState.wasMultiple = !!o.multiple;
                var E = o.value;
                E != null
                  ? Nr(i, !!o.multiple, E, !1)
                  : p !== !!o.multiple &&
                    (o.defaultValue != null
                      ? Nr(i, !!o.multiple, o.defaultValue, !0)
                      : Nr(i, !!o.multiple, o.multiple ? [] : "", !1));
            }
            i[Ii] = o;
          } catch (w) {
            Se(e, e.return, w);
          }
      }
      break;
    case 6:
      if ((vt(t, e), Nt(e), r & 4)) {
        if (e.stateNode === null) throw Error(L(162));
        (i = e.stateNode), (o = e.memoizedProps);
        try {
          i.nodeValue = o;
        } catch (w) {
          Se(e, e.return, w);
        }
      }
      break;
    case 3:
      if (
        (vt(t, e), Nt(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          Mi(t.containerInfo);
        } catch (w) {
          Se(e, e.return, w);
        }
      break;
    case 4:
      vt(t, e), Nt(e);
      break;
    case 13:
      vt(t, e),
        Nt(e),
        (i = e.child),
        i.flags & 8192 &&
          ((o = i.memoizedState !== null),
          (i.stateNode.isHidden = o),
          !o ||
            (i.alternate !== null && i.alternate.memoizedState !== null) ||
            (Tu = Ee())),
        r & 4 && yf(e);
      break;
    case 22:
      if (
        ((f = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((Fe = (u = Fe) || f), vt(t, e), (Fe = u)) : vt(t, e),
        Nt(e),
        r & 8192)
      ) {
        if (
          ((u = e.memoizedState !== null),
          (e.stateNode.isHidden = u) && !f && e.mode & 1)
        )
          for (j = e, f = e.child; f !== null; ) {
            for (c = j = f; j !== null; ) {
              switch (((p = j), (E = p.child), p.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Ei(4, p, p.return);
                  break;
                case 1:
                  Er(p, p.return);
                  var x = p.stateNode;
                  if (typeof x.componentWillUnmount == "function") {
                    (r = p), (n = p.return);
                    try {
                      (t = r),
                        (x.props = t.memoizedProps),
                        (x.state = t.memoizedState),
                        x.componentWillUnmount();
                    } catch (w) {
                      Se(r, n, w);
                    }
                  }
                  break;
                case 5:
                  Er(p, p.return);
                  break;
                case 22:
                  if (p.memoizedState !== null) {
                    xf(c);
                    continue;
                  }
              }
              E !== null ? ((E.return = p), (j = E)) : xf(c);
            }
            f = f.sibling;
          }
        e: for (f = null, c = e; ; ) {
          if (c.tag === 5) {
            if (f === null) {
              f = c;
              try {
                (i = c.stateNode),
                  u
                    ? ((o = i.style),
                      typeof o.setProperty == "function"
                        ? o.setProperty("display", "none", "important")
                        : (o.display = "none"))
                    : ((a = c.stateNode),
                      (s = c.memoizedProps.style),
                      (l =
                        s != null && s.hasOwnProperty("display")
                          ? s.display
                          : null),
                      (a.style.display = Qd("display", l)));
              } catch (w) {
                Se(e, e.return, w);
              }
            }
          } else if (c.tag === 6) {
            if (f === null)
              try {
                c.stateNode.nodeValue = u ? "" : c.memoizedProps;
              } catch (w) {
                Se(e, e.return, w);
              }
          } else if (
            ((c.tag !== 22 && c.tag !== 23) ||
              c.memoizedState === null ||
              c === e) &&
            c.child !== null
          ) {
            (c.child.return = c), (c = c.child);
            continue;
          }
          if (c === e) break e;
          for (; c.sibling === null; ) {
            if (c.return === null || c.return === e) break e;
            f === c && (f = null), (c = c.return);
          }
          f === c && (f = null), (c.sibling.return = c.return), (c = c.sibling);
        }
      }
      break;
    case 19:
      vt(t, e), Nt(e), r & 4 && yf(e);
      break;
    case 21:
      break;
    default:
      vt(t, e), Nt(e);
  }
}
function Nt(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (wh(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(L(160));
      }
      switch (r.tag) {
        case 5:
          var i = r.stateNode;
          r.flags & 32 && (Ri(i, ""), (r.flags &= -33));
          var o = gf(e);
          ys(e, o, i);
          break;
        case 3:
        case 4:
          var l = r.stateNode.containerInfo,
            a = gf(e);
          gs(e, a, l);
          break;
        default:
          throw Error(L(161));
      }
    } catch (s) {
      Se(e, e.return, s);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function a1(e, t, n) {
  (j = e), Eh(e);
}
function Eh(e, t, n) {
  for (var r = (e.mode & 1) !== 0; j !== null; ) {
    var i = j,
      o = i.child;
    if (i.tag === 22 && r) {
      var l = i.memoizedState !== null || _o;
      if (!l) {
        var a = i.alternate,
          s = (a !== null && a.memoizedState !== null) || Fe;
        a = _o;
        var u = Fe;
        if (((_o = l), (Fe = s) && !u))
          for (j = i; j !== null; )
            (l = j),
              (s = l.child),
              l.tag === 22 && l.memoizedState !== null
                ? Sf(i)
                : s !== null
                ? ((s.return = l), (j = s))
                : Sf(i);
        for (; o !== null; ) (j = o), Eh(o), (o = o.sibling);
        (j = i), (_o = a), (Fe = u);
      }
      wf(e);
    } else
      i.subtreeFlags & 8772 && o !== null ? ((o.return = i), (j = o)) : wf(e);
  }
}
function wf(e) {
  for (; j !== null; ) {
    var t = j;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              Fe || Ol(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !Fe)
                if (n === null) r.componentDidMount();
                else {
                  var i =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : gt(t.type, n.memoizedProps);
                  r.componentDidUpdate(
                    i,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate
                  );
                }
              var o = t.updateQueue;
              o !== null && nf(t, o, r);
              break;
            case 3:
              var l = t.updateQueue;
              if (l !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                nf(t, l, n);
              }
              break;
            case 5:
              var a = t.stateNode;
              if (n === null && t.flags & 4) {
                n = a;
                var s = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    s.autoFocus && n.focus();
                    break;
                  case "img":
                    s.src && (n.src = s.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (t.memoizedState === null) {
                var u = t.alternate;
                if (u !== null) {
                  var f = u.memoizedState;
                  if (f !== null) {
                    var c = f.dehydrated;
                    c !== null && Mi(c);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(L(163));
          }
        Fe || (t.flags & 512 && vs(t));
      } catch (p) {
        Se(t, t.return, p);
      }
    }
    if (t === e) {
      j = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      (n.return = t.return), (j = n);
      break;
    }
    j = t.return;
  }
}
function xf(e) {
  for (; j !== null; ) {
    var t = j;
    if (t === e) {
      j = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      (n.return = t.return), (j = n);
      break;
    }
    j = t.return;
  }
}
function Sf(e) {
  for (; j !== null; ) {
    var t = j;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            Ol(4, t);
          } catch (s) {
            Se(t, n, s);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var i = t.return;
            try {
              r.componentDidMount();
            } catch (s) {
              Se(t, i, s);
            }
          }
          var o = t.return;
          try {
            vs(t);
          } catch (s) {
            Se(t, o, s);
          }
          break;
        case 5:
          var l = t.return;
          try {
            vs(t);
          } catch (s) {
            Se(t, l, s);
          }
      }
    } catch (s) {
      Se(t, t.return, s);
    }
    if (t === e) {
      j = null;
      break;
    }
    var a = t.sibling;
    if (a !== null) {
      (a.return = t.return), (j = a);
      break;
    }
    j = t.return;
  }
}
var s1 = Math.ceil,
  fl = Zt.ReactCurrentDispatcher,
  Ru = Zt.ReactCurrentOwner,
  dt = Zt.ReactCurrentBatchConfig,
  J = 0,
  Te = null,
  Pe = null,
  ze = 0,
  qe = 0,
  kr = Ln(0),
  Ne = 0,
  Wi = null,
  Jn = 0,
  Ml = 0,
  Lu = 0,
  ki = null,
  Qe = null,
  Tu = 0,
  br = 1 / 0,
  Ut = null,
  dl = !1,
  ws = null,
  xn = null,
  No = !1,
  pn = null,
  pl = 0,
  Ci = 0,
  xs = null,
  bo = -1,
  Bo = 0;
function He() {
  return J & 6 ? Ee() : bo !== -1 ? bo : (bo = Ee());
}
function Sn(e) {
  return e.mode & 1
    ? J & 2 && ze !== 0
      ? ze & -ze
      : Vg.transition !== null
      ? (Bo === 0 && (Bo = lp()), Bo)
      : ((e = te),
        e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : pp(e.type))),
        e)
    : 1;
}
function Et(e, t, n, r) {
  if (50 < Ci) throw ((Ci = 0), (xs = null), Error(L(185)));
  Xi(e, n, r),
    (!(J & 2) || e !== Te) &&
      (e === Te && (!(J & 2) && (Ml |= n), Ne === 4 && fn(e, ze)),
      Je(e, r),
      n === 1 && J === 0 && !(t.mode & 1) && ((br = Ee() + 500), Rl && Tn()));
}
function Je(e, t) {
  var n = e.callbackNode;
  Vv(e, t);
  var r = Go(e, e === Te ? ze : 0);
  if (r === 0)
    n !== null && Lc(n), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && Lc(n), t === 1))
      e.tag === 0 ? Hg(Ef.bind(null, e)) : Mp(Ef.bind(null, e)),
        bg(function () {
          !(J & 6) && Tn();
        }),
        (n = null);
    else {
      switch (ap(r)) {
        case 1:
          n = nu;
          break;
        case 4:
          n = ip;
          break;
        case 16:
          n = Xo;
          break;
        case 536870912:
          n = op;
          break;
        default:
          n = Xo;
      }
      n = Th(n, kh.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = n);
  }
}
function kh(e, t) {
  if (((bo = -1), (Bo = 0), J & 6)) throw Error(L(327));
  var n = e.callbackNode;
  if (Mr() && e.callbackNode !== n) return null;
  var r = Go(e, e === Te ? ze : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = hl(e, r);
  else {
    t = r;
    var i = J;
    J |= 2;
    var o = Ph();
    (Te !== e || ze !== t) && ((Ut = null), (br = Ee() + 500), Hn(e, t));
    do
      try {
        f1();
        break;
      } catch (a) {
        Ch(e, a);
      }
    while (!0);
    mu(),
      (fl.current = o),
      (J = i),
      Pe !== null ? (t = 0) : ((Te = null), (ze = 0), (t = Ne));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((i = Qa(e)), i !== 0 && ((r = i), (t = Ss(e, i)))), t === 1)
    )
      throw ((n = Wi), Hn(e, 0), fn(e, r), Je(e, Ee()), n);
    if (t === 6) fn(e, r);
    else {
      if (
        ((i = e.current.alternate),
        !(r & 30) &&
          !u1(i) &&
          ((t = hl(e, r)),
          t === 2 && ((o = Qa(e)), o !== 0 && ((r = o), (t = Ss(e, o)))),
          t === 1))
      )
        throw ((n = Wi), Hn(e, 0), fn(e, r), Je(e, Ee()), n);
      switch (((e.finishedWork = i), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(L(345));
        case 2:
          Dn(e, Qe, Ut);
          break;
        case 3:
          if (
            (fn(e, r), (r & 130023424) === r && ((t = Tu + 500 - Ee()), 10 < t))
          ) {
            if (Go(e, 0) !== 0) break;
            if (((i = e.suspendedLanes), (i & r) !== r)) {
              He(), (e.pingedLanes |= e.suspendedLanes & i);
              break;
            }
            e.timeoutHandle = ts(Dn.bind(null, e, Qe, Ut), t);
            break;
          }
          Dn(e, Qe, Ut);
          break;
        case 4:
          if ((fn(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, i = -1; 0 < r; ) {
            var l = 31 - St(r);
            (o = 1 << l), (l = t[l]), l > i && (i = l), (r &= ~o);
          }
          if (
            ((r = i),
            (r = Ee() - r),
            (r =
              (120 > r
                ? 120
                : 480 > r
                ? 480
                : 1080 > r
                ? 1080
                : 1920 > r
                ? 1920
                : 3e3 > r
                ? 3e3
                : 4320 > r
                ? 4320
                : 1960 * s1(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = ts(Dn.bind(null, e, Qe, Ut), r);
            break;
          }
          Dn(e, Qe, Ut);
          break;
        case 5:
          Dn(e, Qe, Ut);
          break;
        default:
          throw Error(L(329));
      }
    }
  }
  return Je(e, Ee()), e.callbackNode === n ? kh.bind(null, e) : null;
}
function Ss(e, t) {
  var n = ki;
  return (
    e.current.memoizedState.isDehydrated && (Hn(e, t).flags |= 256),
    (e = hl(e, t)),
    e !== 2 && ((t = Qe), (Qe = n), t !== null && Es(t)),
    e
  );
}
function Es(e) {
  Qe === null ? (Qe = e) : Qe.push.apply(Qe, e);
}
function u1(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var i = n[r],
            o = i.getSnapshot;
          i = i.value;
          try {
            if (!kt(o(), i)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
      (n.return = t), (t = n);
    else {
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
  }
  return !0;
}
function fn(e, t) {
  for (
    t &= ~Lu,
      t &= ~Ml,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - St(t),
      r = 1 << n;
    (e[n] = -1), (t &= ~r);
  }
}
function Ef(e) {
  if (J & 6) throw Error(L(327));
  Mr();
  var t = Go(e, 0);
  if (!(t & 1)) return Je(e, Ee()), null;
  var n = hl(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = Qa(e);
    r !== 0 && ((t = r), (n = Ss(e, r)));
  }
  if (n === 1) throw ((n = Wi), Hn(e, 0), fn(e, t), Je(e, Ee()), n);
  if (n === 6) throw Error(L(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    Dn(e, Qe, Ut),
    Je(e, Ee()),
    null
  );
}
function Ou(e, t) {
  var n = J;
  J |= 1;
  try {
    return e(t);
  } finally {
    (J = n), J === 0 && ((br = Ee() + 500), Rl && Tn());
  }
}
function Zn(e) {
  pn !== null && pn.tag === 0 && !(J & 6) && Mr();
  var t = J;
  J |= 1;
  var n = dt.transition,
    r = te;
  try {
    if (((dt.transition = null), (te = 1), e)) return e();
  } finally {
    (te = r), (dt.transition = n), (J = t), !(J & 6) && Tn();
  }
}
function Mu() {
  (qe = kr.current), ue(kr);
}
function Hn(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), Ug(n)), Pe !== null))
    for (n = Pe.return; n !== null; ) {
      var r = n;
      switch ((du(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && tl();
          break;
        case 3:
          Fr(), ue(Xe), ue(Ue), Su();
          break;
        case 5:
          xu(r);
          break;
        case 4:
          Fr();
          break;
        case 13:
          ue(ge);
          break;
        case 19:
          ue(ge);
          break;
        case 10:
          vu(r.type._context);
          break;
        case 22:
        case 23:
          Mu();
      }
      n = n.return;
    }
  if (
    ((Te = e),
    (Pe = e = En(e.current, null)),
    (ze = qe = t),
    (Ne = 0),
    (Wi = null),
    (Lu = Ml = Jn = 0),
    (Qe = ki = null),
    bn !== null)
  ) {
    for (t = 0; t < bn.length; t++)
      if (((n = bn[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var i = r.next,
          o = n.pending;
        if (o !== null) {
          var l = o.next;
          (o.next = i), (r.next = l);
        }
        n.pending = r;
      }
    bn = null;
  }
  return e;
}
function Ch(e, t) {
  do {
    var n = Pe;
    try {
      if ((mu(), (Io.current = cl), ul)) {
        for (var r = ye.memoizedState; r !== null; ) {
          var i = r.queue;
          i !== null && (i.pending = null), (r = r.next);
        }
        ul = !1;
      }
      if (
        ((Gn = 0),
        (Le = _e = ye = null),
        (Si = !1),
        (bi = 0),
        (Ru.current = null),
        n === null || n.return === null)
      ) {
        (Ne = 1), (Wi = t), (Pe = null);
        break;
      }
      e: {
        var o = e,
          l = n.return,
          a = n,
          s = t;
        if (
          ((t = ze),
          (a.flags |= 32768),
          s !== null && typeof s == "object" && typeof s.then == "function")
        ) {
          var u = s,
            f = a,
            c = f.tag;
          if (!(f.mode & 1) && (c === 0 || c === 11 || c === 15)) {
            var p = f.alternate;
            p
              ? ((f.updateQueue = p.updateQueue),
                (f.memoizedState = p.memoizedState),
                (f.lanes = p.lanes))
              : ((f.updateQueue = null), (f.memoizedState = null));
          }
          var E = uf(l);
          if (E !== null) {
            (E.flags &= -257),
              cf(E, l, a, o, t),
              E.mode & 1 && sf(o, u, t),
              (t = E),
              (s = u);
            var x = t.updateQueue;
            if (x === null) {
              var w = new Set();
              w.add(s), (t.updateQueue = w);
            } else x.add(s);
            break e;
          } else {
            if (!(t & 1)) {
              sf(o, u, t), Au();
              break e;
            }
            s = Error(L(426));
          }
        } else if (he && a.mode & 1) {
          var P = uf(l);
          if (P !== null) {
            !(P.flags & 65536) && (P.flags |= 256),
              cf(P, l, a, o, t),
              pu(Ur(s, a));
            break e;
          }
        }
        (o = s = Ur(s, a)),
          Ne !== 4 && (Ne = 2),
          ki === null ? (ki = [o]) : ki.push(o),
          (o = l);
        do {
          switch (o.tag) {
            case 3:
              (o.flags |= 65536), (t &= -t), (o.lanes |= t);
              var h = ah(o, s, t);
              tf(o, h);
              break e;
            case 1:
              a = s;
              var d = o.type,
                m = o.stateNode;
              if (
                !(o.flags & 128) &&
                (typeof d.getDerivedStateFromError == "function" ||
                  (m !== null &&
                    typeof m.componentDidCatch == "function" &&
                    (xn === null || !xn.has(m))))
              ) {
                (o.flags |= 65536), (t &= -t), (o.lanes |= t);
                var k = sh(o, a, t);
                tf(o, k);
                break e;
              }
          }
          o = o.return;
        } while (o !== null);
      }
      Nh(n);
    } catch (_) {
      (t = _), Pe === n && n !== null && (Pe = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function Ph() {
  var e = fl.current;
  return (fl.current = cl), e === null ? cl : e;
}
function Au() {
  (Ne === 0 || Ne === 3 || Ne === 2) && (Ne = 4),
    Te === null || (!(Jn & 268435455) && !(Ml & 268435455)) || fn(Te, ze);
}
function hl(e, t) {
  var n = J;
  J |= 2;
  var r = Ph();
  (Te !== e || ze !== t) && ((Ut = null), Hn(e, t));
  do
    try {
      c1();
      break;
    } catch (i) {
      Ch(e, i);
    }
  while (!0);
  if ((mu(), (J = n), (fl.current = r), Pe !== null)) throw Error(L(261));
  return (Te = null), (ze = 0), Ne;
}
function c1() {
  for (; Pe !== null; ) _h(Pe);
}
function f1() {
  for (; Pe !== null && !Dv(); ) _h(Pe);
}
function _h(e) {
  var t = Lh(e.alternate, e, qe);
  (e.memoizedProps = e.pendingProps),
    t === null ? Nh(e) : (Pe = t),
    (Ru.current = null);
}
function Nh(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = i1(n, t)), n !== null)) {
        (n.flags &= 32767), (Pe = n);
        return;
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (Ne = 6), (Pe = null);
        return;
      }
    } else if (((n = r1(n, t, qe)), n !== null)) {
      Pe = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      Pe = t;
      return;
    }
    Pe = t = e;
  } while (t !== null);
  Ne === 0 && (Ne = 5);
}
function Dn(e, t, n) {
  var r = te,
    i = dt.transition;
  try {
    (dt.transition = null), (te = 1), d1(e, t, n, r);
  } finally {
    (dt.transition = i), (te = r);
  }
  return null;
}
function d1(e, t, n, r) {
  do Mr();
  while (pn !== null);
  if (J & 6) throw Error(L(327));
  n = e.finishedWork;
  var i = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(L(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var o = n.lanes | n.childLanes;
  if (
    (Yv(e, o),
    e === Te && ((Pe = Te = null), (ze = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      No ||
      ((No = !0),
      Th(Xo, function () {
        return Mr(), null;
      })),
    (o = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || o)
  ) {
    (o = dt.transition), (dt.transition = null);
    var l = te;
    te = 1;
    var a = J;
    (J |= 4),
      (Ru.current = null),
      l1(e, n),
      Sh(n, e),
      Mg(qa),
      (Jo = !!Za),
      (qa = Za = null),
      (e.current = n),
      a1(n),
      Iv(),
      (J = a),
      (te = l),
      (dt.transition = o);
  } else e.current = n;
  if (
    (No && ((No = !1), (pn = e), (pl = i)),
    (o = e.pendingLanes),
    o === 0 && (xn = null),
    bv(n.stateNode),
    Je(e, Ee()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      (i = t[n]), r(i.value, { componentStack: i.stack, digest: i.digest });
  if (dl) throw ((dl = !1), (e = ws), (ws = null), e);
  return (
    pl & 1 && e.tag !== 0 && Mr(),
    (o = e.pendingLanes),
    o & 1 ? (e === xs ? Ci++ : ((Ci = 0), (xs = e))) : (Ci = 0),
    Tn(),
    null
  );
}
function Mr() {
  if (pn !== null) {
    var e = ap(pl),
      t = dt.transition,
      n = te;
    try {
      if (((dt.transition = null), (te = 16 > e ? 16 : e), pn === null))
        var r = !1;
      else {
        if (((e = pn), (pn = null), (pl = 0), J & 6)) throw Error(L(331));
        var i = J;
        for (J |= 4, j = e.current; j !== null; ) {
          var o = j,
            l = o.child;
          if (j.flags & 16) {
            var a = o.deletions;
            if (a !== null) {
              for (var s = 0; s < a.length; s++) {
                var u = a[s];
                for (j = u; j !== null; ) {
                  var f = j;
                  switch (f.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Ei(8, f, o);
                  }
                  var c = f.child;
                  if (c !== null) (c.return = f), (j = c);
                  else
                    for (; j !== null; ) {
                      f = j;
                      var p = f.sibling,
                        E = f.return;
                      if ((yh(f), f === u)) {
                        j = null;
                        break;
                      }
                      if (p !== null) {
                        (p.return = E), (j = p);
                        break;
                      }
                      j = E;
                    }
                }
              }
              var x = o.alternate;
              if (x !== null) {
                var w = x.child;
                if (w !== null) {
                  x.child = null;
                  do {
                    var P = w.sibling;
                    (w.sibling = null), (w = P);
                  } while (w !== null);
                }
              }
              j = o;
            }
          }
          if (o.subtreeFlags & 2064 && l !== null) (l.return = o), (j = l);
          else
            e: for (; j !== null; ) {
              if (((o = j), o.flags & 2048))
                switch (o.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Ei(9, o, o.return);
                }
              var h = o.sibling;
              if (h !== null) {
                (h.return = o.return), (j = h);
                break e;
              }
              j = o.return;
            }
        }
        var d = e.current;
        for (j = d; j !== null; ) {
          l = j;
          var m = l.child;
          if (l.subtreeFlags & 2064 && m !== null) (m.return = l), (j = m);
          else
            e: for (l = d; j !== null; ) {
              if (((a = j), a.flags & 2048))
                try {
                  switch (a.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Ol(9, a);
                  }
                } catch (_) {
                  Se(a, a.return, _);
                }
              if (a === l) {
                j = null;
                break e;
              }
              var k = a.sibling;
              if (k !== null) {
                (k.return = a.return), (j = k);
                break e;
              }
              j = a.return;
            }
        }
        if (
          ((J = i), Tn(), zt && typeof zt.onPostCommitFiberRoot == "function")
        )
          try {
            zt.onPostCommitFiberRoot(kl, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      (te = n), (dt.transition = t);
    }
  }
  return !1;
}
function kf(e, t, n) {
  (t = Ur(n, t)),
    (t = ah(e, t, 1)),
    (e = wn(e, t, 1)),
    (t = He()),
    e !== null && (Xi(e, 1, t), Je(e, t));
}
function Se(e, t, n) {
  if (e.tag === 3) kf(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        kf(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == "function" ||
          (typeof r.componentDidCatch == "function" &&
            (xn === null || !xn.has(r)))
        ) {
          (e = Ur(n, e)),
            (e = sh(t, e, 1)),
            (t = wn(t, e, 1)),
            (e = He()),
            t !== null && (Xi(t, 1, e), Je(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function p1(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t),
    (t = He()),
    (e.pingedLanes |= e.suspendedLanes & n),
    Te === e &&
      (ze & n) === n &&
      (Ne === 4 || (Ne === 3 && (ze & 130023424) === ze && 500 > Ee() - Tu)
        ? Hn(e, 0)
        : (Lu |= n)),
    Je(e, t);
}
function Rh(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = go), (go <<= 1), !(go & 130023424) && (go = 4194304))
      : (t = 1));
  var n = He();
  (e = Qt(e, t)), e !== null && (Xi(e, t, n), Je(e, n));
}
function h1(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), Rh(e, n);
}
function m1(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        i = e.memoizedState;
      i !== null && (n = i.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(L(314));
  }
  r !== null && r.delete(t), Rh(e, n);
}
var Lh;
Lh = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || Xe.current) Ke = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return (Ke = !1), n1(e, t, n);
      Ke = !!(e.flags & 131072);
    }
  else (Ke = !1), he && t.flags & 1048576 && Ap(t, il, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      Uo(e, t), (e = t.pendingProps);
      var i = jr(t, Ue.current);
      Or(t, n), (i = ku(null, t, r, e, i, n));
      var o = Cu();
      return (
        (t.flags |= 1),
        typeof i == "object" &&
        i !== null &&
        typeof i.render == "function" &&
        i.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            Ge(r) ? ((o = !0), nl(t)) : (o = !1),
            (t.memoizedState =
              i.state !== null && i.state !== void 0 ? i.state : null),
            yu(t),
            (i.updater = Tl),
            (t.stateNode = i),
            (i._reactInternals = t),
            ss(t, r, e, n),
            (t = fs(null, t, r, !0, o, n)))
          : ((t.tag = 0), he && o && fu(t), We(null, t, i, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (Uo(e, t),
          (e = t.pendingProps),
          (i = r._init),
          (r = i(r._payload)),
          (t.type = r),
          (i = t.tag = g1(r)),
          (e = gt(r, e)),
          i)
        ) {
          case 0:
            t = cs(null, t, r, e, n);
            break e;
          case 1:
            t = pf(null, t, r, e, n);
            break e;
          case 11:
            t = ff(null, t, r, e, n);
            break e;
          case 14:
            t = df(null, t, r, gt(r.type, e), n);
            break e;
        }
        throw Error(L(306, r, ""));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : gt(r, i)),
        cs(e, t, r, i, n)
      );
    case 1:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : gt(r, i)),
        pf(e, t, r, i, n)
      );
    case 3:
      e: {
        if ((dh(t), e === null)) throw Error(L(387));
        (r = t.pendingProps),
          (o = t.memoizedState),
          (i = o.element),
          Up(e, t),
          al(t, r, null, n);
        var l = t.memoizedState;
        if (((r = l.element), o.isDehydrated))
          if (
            ((o = {
              element: r,
              isDehydrated: !1,
              cache: l.cache,
              pendingSuspenseBoundaries: l.pendingSuspenseBoundaries,
              transitions: l.transitions,
            }),
            (t.updateQueue.baseState = o),
            (t.memoizedState = o),
            t.flags & 256)
          ) {
            (i = Ur(Error(L(423)), t)), (t = hf(e, t, r, n, i));
            break e;
          } else if (r !== i) {
            (i = Ur(Error(L(424)), t)), (t = hf(e, t, r, n, i));
            break e;
          } else
            for (
              tt = yn(t.stateNode.containerInfo.firstChild),
                nt = t,
                he = !0,
                xt = null,
                n = Ip(t, null, r, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if ((Dr(), r === i)) {
            t = Kt(e, t, n);
            break e;
          }
          We(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        bp(t),
        e === null && os(t),
        (r = t.type),
        (i = t.pendingProps),
        (o = e !== null ? e.memoizedProps : null),
        (l = i.children),
        es(r, i) ? (l = null) : o !== null && es(r, o) && (t.flags |= 32),
        fh(e, t),
        We(e, t, l, n),
        t.child
      );
    case 6:
      return e === null && os(t), null;
    case 13:
      return ph(e, t, n);
    case 4:
      return (
        wu(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = Ir(t, null, r, n)) : We(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : gt(r, i)),
        ff(e, t, r, i, n)
      );
    case 7:
      return We(e, t, t.pendingProps, n), t.child;
    case 8:
      return We(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return We(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (i = t.pendingProps),
          (o = t.memoizedProps),
          (l = i.value),
          le(ol, r._currentValue),
          (r._currentValue = l),
          o !== null)
        )
          if (kt(o.value, l)) {
            if (o.children === i.children && !Xe.current) {
              t = Kt(e, t, n);
              break e;
            }
          } else
            for (o = t.child, o !== null && (o.return = t); o !== null; ) {
              var a = o.dependencies;
              if (a !== null) {
                l = o.child;
                for (var s = a.firstContext; s !== null; ) {
                  if (s.context === r) {
                    if (o.tag === 1) {
                      (s = Wt(-1, n & -n)), (s.tag = 2);
                      var u = o.updateQueue;
                      if (u !== null) {
                        u = u.shared;
                        var f = u.pending;
                        f === null
                          ? (s.next = s)
                          : ((s.next = f.next), (f.next = s)),
                          (u.pending = s);
                      }
                    }
                    (o.lanes |= n),
                      (s = o.alternate),
                      s !== null && (s.lanes |= n),
                      ls(o.return, n, t),
                      (a.lanes |= n);
                    break;
                  }
                  s = s.next;
                }
              } else if (o.tag === 10) l = o.type === t.type ? null : o.child;
              else if (o.tag === 18) {
                if (((l = o.return), l === null)) throw Error(L(341));
                (l.lanes |= n),
                  (a = l.alternate),
                  a !== null && (a.lanes |= n),
                  ls(l, n, t),
                  (l = o.sibling);
              } else l = o.child;
              if (l !== null) l.return = o;
              else
                for (l = o; l !== null; ) {
                  if (l === t) {
                    l = null;
                    break;
                  }
                  if (((o = l.sibling), o !== null)) {
                    (o.return = l.return), (l = o);
                    break;
                  }
                  l = l.return;
                }
              o = l;
            }
        We(e, t, i.children, n), (t = t.child);
      }
      return t;
    case 9:
      return (
        (i = t.type),
        (r = t.pendingProps.children),
        Or(t, n),
        (i = pt(i)),
        (r = r(i)),
        (t.flags |= 1),
        We(e, t, r, n),
        t.child
      );
    case 14:
      return (
        (r = t.type),
        (i = gt(r, t.pendingProps)),
        (i = gt(r.type, i)),
        df(e, t, r, i, n)
      );
    case 15:
      return uh(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : gt(r, i)),
        Uo(e, t),
        (t.tag = 1),
        Ge(r) ? ((e = !0), nl(t)) : (e = !1),
        Or(t, n),
        lh(t, r, i),
        ss(t, r, i, n),
        fs(null, t, r, !0, e, n)
      );
    case 19:
      return hh(e, t, n);
    case 22:
      return ch(e, t, n);
  }
  throw Error(L(156, t.tag));
};
function Th(e, t) {
  return rp(e, t);
}
function v1(e, t, n, r) {
  (this.tag = e),
    (this.key = n),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = t),
    (this.dependencies =
      this.memoizedState =
      this.updateQueue =
      this.memoizedProps =
        null),
    (this.mode = r),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null);
}
function ft(e, t, n, r) {
  return new v1(e, t, n, r);
}
function zu(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function g1(e) {
  if (typeof e == "function") return zu(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === qs)) return 11;
    if (e === eu) return 14;
  }
  return 2;
}
function En(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = ft(e.tag, t, e.key, e.mode)),
        (n.elementType = e.elementType),
        (n.type = e.type),
        (n.stateNode = e.stateNode),
        (n.alternate = e),
        (e.alternate = n))
      : ((n.pendingProps = t),
        (n.type = e.type),
        (n.flags = 0),
        (n.subtreeFlags = 0),
        (n.deletions = null)),
    (n.flags = e.flags & 14680064),
    (n.childLanes = e.childLanes),
    (n.lanes = e.lanes),
    (n.child = e.child),
    (n.memoizedProps = e.memoizedProps),
    (n.memoizedState = e.memoizedState),
    (n.updateQueue = e.updateQueue),
    (t = e.dependencies),
    (n.dependencies =
      t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
    (n.sibling = e.sibling),
    (n.index = e.index),
    (n.ref = e.ref),
    n
  );
}
function $o(e, t, n, r, i, o) {
  var l = 2;
  if (((r = e), typeof e == "function")) zu(e) && (l = 1);
  else if (typeof e == "string") l = 5;
  else
    e: switch (e) {
      case pr:
        return Vn(n.children, i, o, t);
      case Zs:
        (l = 8), (i |= 8);
        break;
      case Ma:
        return (
          (e = ft(12, n, t, i | 2)), (e.elementType = Ma), (e.lanes = o), e
        );
      case Aa:
        return (e = ft(13, n, t, i)), (e.elementType = Aa), (e.lanes = o), e;
      case za:
        return (e = ft(19, n, t, i)), (e.elementType = za), (e.lanes = o), e;
      case bd:
        return Al(n, i, o, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case Fd:
              l = 10;
              break e;
            case Ud:
              l = 9;
              break e;
            case qs:
              l = 11;
              break e;
            case eu:
              l = 14;
              break e;
            case sn:
              (l = 16), (r = null);
              break e;
          }
        throw Error(L(130, e == null ? e : typeof e, ""));
    }
  return (
    (t = ft(l, n, t, i)), (t.elementType = e), (t.type = r), (t.lanes = o), t
  );
}
function Vn(e, t, n, r) {
  return (e = ft(7, e, r, t)), (e.lanes = n), e;
}
function Al(e, t, n, r) {
  return (
    (e = ft(22, e, r, t)),
    (e.elementType = bd),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function wa(e, t, n) {
  return (e = ft(6, e, null, t)), (e.lanes = n), e;
}
function xa(e, t, n) {
  return (
    (t = ft(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function y1(e, t, n, r, i) {
  (this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = ea(0)),
    (this.expirationTimes = ea(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = ea(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = i),
    (this.mutableSourceEagerHydrationData = null);
}
function ju(e, t, n, r, i, o, l, a, s) {
  return (
    (e = new y1(e, t, n, a, s)),
    t === 1 ? ((t = 1), o === !0 && (t |= 8)) : (t = 0),
    (o = ft(3, null, null, t)),
    (e.current = o),
    (o.stateNode = e),
    (o.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    yu(o),
    e
  );
}
function w1(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: dr,
    key: r == null ? null : "" + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function Oh(e) {
  if (!e) return Cn;
  e = e._reactInternals;
  e: {
    if (rr(e) !== e || e.tag !== 1) throw Error(L(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (Ge(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(L(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (Ge(n)) return Op(e, n, t);
  }
  return t;
}
function Mh(e, t, n, r, i, o, l, a, s) {
  return (
    (e = ju(n, r, !0, e, i, o, l, a, s)),
    (e.context = Oh(null)),
    (n = e.current),
    (r = He()),
    (i = Sn(n)),
    (o = Wt(r, i)),
    (o.callback = t ?? null),
    wn(n, o, i),
    (e.current.lanes = i),
    Xi(e, i, r),
    Je(e, r),
    e
  );
}
function zl(e, t, n, r) {
  var i = t.current,
    o = He(),
    l = Sn(i);
  return (
    (n = Oh(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = Wt(o, l)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = wn(i, t, l)),
    e !== null && (Et(e, i, l, o), Do(e, i, l)),
    l
  );
}
function ml(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function Cf(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function Du(e, t) {
  Cf(e, t), (e = e.alternate) && Cf(e, t);
}
function x1() {
  return null;
}
var Ah =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function Iu(e) {
  this._internalRoot = e;
}
jl.prototype.render = Iu.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(L(409));
  zl(e, t, null, null);
};
jl.prototype.unmount = Iu.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    Zn(function () {
      zl(null, e, null, null);
    }),
      (t[Yt] = null);
  }
};
function jl(e) {
  this._internalRoot = e;
}
jl.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = cp();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < cn.length && t !== 0 && t < cn[n].priority; n++);
    cn.splice(n, 0, e), n === 0 && dp(e);
  }
};
function Fu(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function Dl(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function Pf() {}
function S1(e, t, n, r, i) {
  if (i) {
    if (typeof r == "function") {
      var o = r;
      r = function () {
        var u = ml(l);
        o.call(u);
      };
    }
    var l = Mh(t, r, e, 0, null, !1, !1, "", Pf);
    return (
      (e._reactRootContainer = l),
      (e[Yt] = l.current),
      ji(e.nodeType === 8 ? e.parentNode : e),
      Zn(),
      l
    );
  }
  for (; (i = e.lastChild); ) e.removeChild(i);
  if (typeof r == "function") {
    var a = r;
    r = function () {
      var u = ml(s);
      a.call(u);
    };
  }
  var s = ju(e, 0, !1, null, null, !1, !1, "", Pf);
  return (
    (e._reactRootContainer = s),
    (e[Yt] = s.current),
    ji(e.nodeType === 8 ? e.parentNode : e),
    Zn(function () {
      zl(t, s, n, r);
    }),
    s
  );
}
function Il(e, t, n, r, i) {
  var o = n._reactRootContainer;
  if (o) {
    var l = o;
    if (typeof i == "function") {
      var a = i;
      i = function () {
        var s = ml(l);
        a.call(s);
      };
    }
    zl(t, l, e, i);
  } else l = S1(n, t, e, i, r);
  return ml(l);
}
sp = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = fi(t.pendingLanes);
        n !== 0 &&
          (ru(t, n | 1), Je(t, Ee()), !(J & 6) && ((br = Ee() + 500), Tn()));
      }
      break;
    case 13:
      Zn(function () {
        var r = Qt(e, 1);
        if (r !== null) {
          var i = He();
          Et(r, e, 1, i);
        }
      }),
        Du(e, 1);
  }
};
iu = function (e) {
  if (e.tag === 13) {
    var t = Qt(e, 134217728);
    if (t !== null) {
      var n = He();
      Et(t, e, 134217728, n);
    }
    Du(e, 134217728);
  }
};
up = function (e) {
  if (e.tag === 13) {
    var t = Sn(e),
      n = Qt(e, t);
    if (n !== null) {
      var r = He();
      Et(n, e, t, r);
    }
    Du(e, t);
  }
};
cp = function () {
  return te;
};
fp = function (e, t) {
  var n = te;
  try {
    return (te = e), t();
  } finally {
    te = n;
  }
};
Ha = function (e, t, n) {
  switch (t) {
    case "input":
      if ((Ia(e, n), (t = n.name), n.type === "radio" && t != null)) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (
          n = n.querySelectorAll(
            "input[name=" + JSON.stringify("" + t) + '][type="radio"]'
          ),
            t = 0;
          t < n.length;
          t++
        ) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var i = Nl(r);
            if (!i) throw Error(L(90));
            $d(r), Ia(r, i);
          }
        }
      }
      break;
    case "textarea":
      Hd(e, n);
      break;
    case "select":
      (t = n.value), t != null && Nr(e, !!n.multiple, t, !1);
  }
};
Jd = Ou;
Zd = Zn;
var E1 = { usingClientEntryPoint: !1, Events: [Ji, gr, Nl, Xd, Gd, Ou] },
  oi = {
    findFiberByHostInstance: Un,
    bundleType: 0,
    version: "18.3.1",
    rendererPackageName: "react-dom",
  },
  k1 = {
    bundleType: oi.bundleType,
    version: oi.version,
    rendererPackageName: oi.rendererPackageName,
    rendererConfig: oi.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: Zt.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = tp(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: oi.findFiberByHostInstance || x1,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.3.1-next-f1338f8080-20240426",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var Ro = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!Ro.isDisabled && Ro.supportsFiber)
    try {
      (kl = Ro.inject(k1)), (zt = Ro);
    } catch {}
}
lt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = E1;
lt.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!Fu(t)) throw Error(L(200));
  return w1(e, t, null, n);
};
lt.createRoot = function (e, t) {
  if (!Fu(e)) throw Error(L(299));
  var n = !1,
    r = "",
    i = Ah;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (i = t.onRecoverableError)),
    (t = ju(e, 1, !1, null, null, n, !1, r, i)),
    (e[Yt] = t.current),
    ji(e.nodeType === 8 ? e.parentNode : e),
    new Iu(t)
  );
};
lt.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function"
      ? Error(L(188))
      : ((e = Object.keys(e).join(",")), Error(L(268, e)));
  return (e = tp(t)), (e = e === null ? null : e.stateNode), e;
};
lt.flushSync = function (e) {
  return Zn(e);
};
lt.hydrate = function (e, t, n) {
  if (!Dl(t)) throw Error(L(200));
  return Il(null, e, t, !0, n);
};
lt.hydrateRoot = function (e, t, n) {
  if (!Fu(e)) throw Error(L(405));
  var r = (n != null && n.hydratedSources) || null,
    i = !1,
    o = "",
    l = Ah;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (i = !0),
      n.identifierPrefix !== void 0 && (o = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (l = n.onRecoverableError)),
    (t = Mh(t, null, e, 1, n ?? null, i, !1, o, l)),
    (e[Yt] = t.current),
    ji(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (n = r[e]),
        (i = n._getVersion),
        (i = i(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, i])
          : t.mutableSourceEagerHydrationData.push(n, i);
  return new jl(t);
};
lt.render = function (e, t, n) {
  if (!Dl(t)) throw Error(L(200));
  return Il(null, e, t, !1, n);
};
lt.unmountComponentAtNode = function (e) {
  if (!Dl(e)) throw Error(L(40));
  return e._reactRootContainer
    ? (Zn(function () {
        Il(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[Yt] = null);
        });
      }),
      !0)
    : !1;
};
lt.unstable_batchedUpdates = Ou;
lt.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!Dl(n)) throw Error(L(200));
  if (e == null || e._reactInternals === void 0) throw Error(L(38));
  return Il(e, t, n, !1, r);
};
lt.version = "18.3.1-next-f1338f8080-20240426";
function zh() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(zh);
    } catch (e) {
      console.error(e);
    }
}
zh(), (zd.exports = lt);
var Uu = zd.exports;
const C1 = Ws(Uu),
  P1 = Ed({ __proto__: null, default: C1 }, [Uu]);
var _f = Uu;
(Ta.createRoot = _f.createRoot), (Ta.hydrateRoot = _f.hydrateRoot);
/**
 * @remix-run/router v1.18.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function ve() {
  return (
    (ve = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    ve.apply(this, arguments)
  );
}
var Ce;
(function (e) {
  (e.Pop = "POP"), (e.Push = "PUSH"), (e.Replace = "REPLACE");
})(Ce || (Ce = {}));
const Nf = "popstate";
function _1(e) {
  e === void 0 && (e = {});
  function t(r, i) {
    let { pathname: o, search: l, hash: a } = r.location;
    return Hi(
      "",
      { pathname: o, search: l, hash: a },
      (i.state && i.state.usr) || null,
      (i.state && i.state.key) || "default"
    );
  }
  function n(r, i) {
    return typeof i == "string" ? i : qn(i);
  }
  return R1(t, n, null, e);
}
function Q(e, t) {
  if (e === !1 || e === null || typeof e > "u") throw new Error(t);
}
function Br(e, t) {
  if (!e) {
    typeof console < "u" && console.warn(t);
    try {
      throw new Error(t);
    } catch {}
  }
}
function N1() {
  return Math.random().toString(36).substr(2, 8);
}
function Rf(e, t) {
  return { usr: e.state, key: e.key, idx: t };
}
function Hi(e, t, n, r) {
  return (
    n === void 0 && (n = null),
    ve(
      { pathname: typeof e == "string" ? e : e.pathname, search: "", hash: "" },
      typeof t == "string" ? On(t) : t,
      { state: n, key: (t && t.key) || r || N1() }
    )
  );
}
function qn(e) {
  let { pathname: t = "/", search: n = "", hash: r = "" } = e;
  return (
    n && n !== "?" && (t += n.charAt(0) === "?" ? n : "?" + n),
    r && r !== "#" && (t += r.charAt(0) === "#" ? r : "#" + r),
    t
  );
}
function On(e) {
  let t = {};
  if (e) {
    let n = e.indexOf("#");
    n >= 0 && ((t.hash = e.substr(n)), (e = e.substr(0, n)));
    let r = e.indexOf("?");
    r >= 0 && ((t.search = e.substr(r)), (e = e.substr(0, r))),
      e && (t.pathname = e);
  }
  return t;
}
function R1(e, t, n, r) {
  r === void 0 && (r = {});
  let { window: i = document.defaultView, v5Compat: o = !1 } = r,
    l = i.history,
    a = Ce.Pop,
    s = null,
    u = f();
  u == null && ((u = 0), l.replaceState(ve({}, l.state, { idx: u }), ""));
  function f() {
    return (l.state || { idx: null }).idx;
  }
  function c() {
    a = Ce.Pop;
    let P = f(),
      h = P == null ? null : P - u;
    (u = P), s && s({ action: a, location: w.location, delta: h });
  }
  function p(P, h) {
    a = Ce.Push;
    let d = Hi(w.location, P, h);
    u = f() + 1;
    let m = Rf(d, u),
      k = w.createHref(d);
    try {
      l.pushState(m, "", k);
    } catch (_) {
      if (_ instanceof DOMException && _.name === "DataCloneError") throw _;
      i.location.assign(k);
    }
    o && s && s({ action: a, location: w.location, delta: 1 });
  }
  function E(P, h) {
    a = Ce.Replace;
    let d = Hi(w.location, P, h);
    u = f();
    let m = Rf(d, u),
      k = w.createHref(d);
    l.replaceState(m, "", k),
      o && s && s({ action: a, location: w.location, delta: 0 });
  }
  function x(P) {
    let h = i.location.origin !== "null" ? i.location.origin : i.location.href,
      d = typeof P == "string" ? P : qn(P);
    return (
      (d = d.replace(/ $/, "%20")),
      Q(
        h,
        "No window.location.(origin|href) available to create URL for href: " +
          d
      ),
      new URL(d, h)
    );
  }
  let w = {
    get action() {
      return a;
    },
    get location() {
      return e(i, l);
    },
    listen(P) {
      if (s) throw new Error("A history only accepts one active listener");
      return (
        i.addEventListener(Nf, c),
        (s = P),
        () => {
          i.removeEventListener(Nf, c), (s = null);
        }
      );
    },
    createHref(P) {
      return t(i, P);
    },
    createURL: x,
    encodeLocation(P) {
      let h = x(P);
      return { pathname: h.pathname, search: h.search, hash: h.hash };
    },
    push: p,
    replace: E,
    go(P) {
      return l.go(P);
    },
  };
  return w;
}
var oe;
(function (e) {
  (e.data = "data"),
    (e.deferred = "deferred"),
    (e.redirect = "redirect"),
    (e.error = "error");
})(oe || (oe = {}));
const L1 = new Set([
  "lazy",
  "caseSensitive",
  "path",
  "id",
  "index",
  "children",
]);
function T1(e) {
  return e.index === !0;
}
function Vi(e, t, n, r) {
  return (
    n === void 0 && (n = []),
    r === void 0 && (r = {}),
    e.map((i, o) => {
      let l = [...n, String(o)],
        a = typeof i.id == "string" ? i.id : l.join("-");
      if (
        (Q(
          i.index !== !0 || !i.children,
          "Cannot specify children on an index route"
        ),
        Q(
          !r[a],
          'Found a route id collision on id "' +
            a +
            `".  Route id's must be globally unique within Data Router usages`
        ),
        T1(i))
      ) {
        let s = ve({}, i, t(i), { id: a });
        return (r[a] = s), s;
      } else {
        let s = ve({}, i, t(i), { id: a, children: void 0 });
        return (
          (r[a] = s), i.children && (s.children = Vi(i.children, t, l, r)), s
        );
      }
    })
  );
}
function In(e, t, n) {
  return n === void 0 && (n = "/"), Wo(e, t, n, !1);
}
function Wo(e, t, n, r) {
  let i = typeof t == "string" ? On(t) : t,
    o = Xt(i.pathname || "/", n);
  if (o == null) return null;
  let l = jh(e);
  M1(l);
  let a = null;
  for (let s = 0; a == null && s < l.length; ++s) {
    let u = W1(o);
    a = B1(l[s], u, r);
  }
  return a;
}
function O1(e, t) {
  let { route: n, pathname: r, params: i } = e;
  return { id: n.id, pathname: r, params: i, data: t[n.id], handle: n.handle };
}
function jh(e, t, n, r) {
  t === void 0 && (t = []), n === void 0 && (n = []), r === void 0 && (r = "");
  let i = (o, l, a) => {
    let s = {
      relativePath: a === void 0 ? o.path || "" : a,
      caseSensitive: o.caseSensitive === !0,
      childrenIndex: l,
      route: o,
    };
    s.relativePath.startsWith("/") &&
      (Q(
        s.relativePath.startsWith(r),
        'Absolute route path "' +
          s.relativePath +
          '" nested under path ' +
          ('"' + r + '" is not valid. An absolute child route path ') +
          "must start with the combined path of all its parent routes."
      ),
      (s.relativePath = s.relativePath.slice(r.length)));
    let u = Ht([r, s.relativePath]),
      f = n.concat(s);
    o.children &&
      o.children.length > 0 &&
      (Q(
        o.index !== !0,
        "Index routes must not have child routes. Please remove " +
          ('all child routes from route path "' + u + '".')
      ),
      jh(o.children, t, f, u)),
      !(o.path == null && !o.index) &&
        t.push({ path: u, score: U1(u, o.index), routesMeta: f });
  };
  return (
    e.forEach((o, l) => {
      var a;
      if (o.path === "" || !((a = o.path) != null && a.includes("?"))) i(o, l);
      else for (let s of Dh(o.path)) i(o, l, s);
    }),
    t
  );
}
function Dh(e) {
  let t = e.split("/");
  if (t.length === 0) return [];
  let [n, ...r] = t,
    i = n.endsWith("?"),
    o = n.replace(/\?$/, "");
  if (r.length === 0) return i ? [o, ""] : [o];
  let l = Dh(r.join("/")),
    a = [];
  return (
    a.push(...l.map((s) => (s === "" ? o : [o, s].join("/")))),
    i && a.push(...l),
    a.map((s) => (e.startsWith("/") && s === "" ? "/" : s))
  );
}
function M1(e) {
  e.sort((t, n) =>
    t.score !== n.score
      ? n.score - t.score
      : b1(
          t.routesMeta.map((r) => r.childrenIndex),
          n.routesMeta.map((r) => r.childrenIndex)
        )
  );
}
const A1 = /^:[\w-]+$/,
  z1 = 3,
  j1 = 2,
  D1 = 1,
  I1 = 10,
  F1 = -2,
  Lf = (e) => e === "*";
function U1(e, t) {
  let n = e.split("/"),
    r = n.length;
  return (
    n.some(Lf) && (r += F1),
    t && (r += j1),
    n
      .filter((i) => !Lf(i))
      .reduce((i, o) => i + (A1.test(o) ? z1 : o === "" ? D1 : I1), r)
  );
}
function b1(e, t) {
  return e.length === t.length && e.slice(0, -1).every((r, i) => r === t[i])
    ? e[e.length - 1] - t[t.length - 1]
    : 0;
}
function B1(e, t, n) {
  n === void 0 && (n = !1);
  let { routesMeta: r } = e,
    i = {},
    o = "/",
    l = [];
  for (let a = 0; a < r.length; ++a) {
    let s = r[a],
      u = a === r.length - 1,
      f = o === "/" ? t : t.slice(o.length) || "/",
      c = vl(
        { path: s.relativePath, caseSensitive: s.caseSensitive, end: u },
        f
      ),
      p = s.route;
    if (
      (!c &&
        u &&
        n &&
        !r[r.length - 1].route.index &&
        (c = vl(
          { path: s.relativePath, caseSensitive: s.caseSensitive, end: !1 },
          f
        )),
      !c)
    )
      return null;
    Object.assign(i, c.params),
      l.push({
        params: i,
        pathname: Ht([o, c.pathname]),
        pathnameBase: Y1(Ht([o, c.pathnameBase])),
        route: p,
      }),
      c.pathnameBase !== "/" && (o = Ht([o, c.pathnameBase]));
  }
  return l;
}
function vl(e, t) {
  typeof e == "string" && (e = { path: e, caseSensitive: !1, end: !0 });
  let [n, r] = $1(e.path, e.caseSensitive, e.end),
    i = t.match(n);
  if (!i) return null;
  let o = i[0],
    l = o.replace(/(.)\/+$/, "$1"),
    a = i.slice(1);
  return {
    params: r.reduce((u, f, c) => {
      let { paramName: p, isOptional: E } = f;
      if (p === "*") {
        let w = a[c] || "";
        l = o.slice(0, o.length - w.length).replace(/(.)\/+$/, "$1");
      }
      const x = a[c];
      return (
        E && !x ? (u[p] = void 0) : (u[p] = (x || "").replace(/%2F/g, "/")), u
      );
    }, {}),
    pathname: o,
    pathnameBase: l,
    pattern: e,
  };
}
function $1(e, t, n) {
  t === void 0 && (t = !1),
    n === void 0 && (n = !0),
    Br(
      e === "*" || !e.endsWith("*") || e.endsWith("/*"),
      'Route path "' +
        e +
        '" will be treated as if it were ' +
        ('"' + e.replace(/\*$/, "/*") + '" because the `*` character must ') +
        "always follow a `/` in the pattern. To get rid of this warning, " +
        ('please change the route path to "' + e.replace(/\*$/, "/*") + '".')
    );
  let r = [],
    i =
      "^" +
      e
        .replace(/\/*\*?$/, "")
        .replace(/^\/*/, "/")
        .replace(/[\\.*+^${}|()[\]]/g, "\\$&")
        .replace(
          /\/:([\w-]+)(\?)?/g,
          (l, a, s) => (
            r.push({ paramName: a, isOptional: s != null }),
            s ? "/?([^\\/]+)?" : "/([^\\/]+)"
          )
        );
  return (
    e.endsWith("*")
      ? (r.push({ paramName: "*" }),
        (i += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$"))
      : n
      ? (i += "\\/*$")
      : e !== "" && e !== "/" && (i += "(?:(?=\\/|$))"),
    [new RegExp(i, t ? void 0 : "i"), r]
  );
}
function W1(e) {
  try {
    return e
      .split("/")
      .map((t) => decodeURIComponent(t).replace(/\//g, "%2F"))
      .join("/");
  } catch (t) {
    return (
      Br(
        !1,
        'The URL path "' +
          e +
          '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' +
          ("encoding (" + t + ").")
      ),
      e
    );
  }
}
function Xt(e, t) {
  if (t === "/") return e;
  if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
  let n = t.endsWith("/") ? t.length - 1 : t.length,
    r = e.charAt(n);
  return r && r !== "/" ? null : e.slice(n) || "/";
}
function H1(e, t) {
  t === void 0 && (t = "/");
  let {
    pathname: n,
    search: r = "",
    hash: i = "",
  } = typeof e == "string" ? On(e) : e;
  return {
    pathname: n ? (n.startsWith("/") ? n : V1(n, t)) : t,
    search: Q1(r),
    hash: K1(i),
  };
}
function V1(e, t) {
  let n = t.replace(/\/+$/, "").split("/");
  return (
    e.split("/").forEach((i) => {
      i === ".." ? n.length > 1 && n.pop() : i !== "." && n.push(i);
    }),
    n.length > 1 ? n.join("/") : "/"
  );
}
function Sa(e, t, n, r) {
  return (
    "Cannot include a '" +
    e +
    "' character in a manually specified " +
    ("`to." +
      t +
      "` field [" +
      JSON.stringify(r) +
      "].  Please separate it out to the ") +
    ("`to." + n + "` field. Alternatively you may provide the full path as ") +
    'a string in <Link to="..."> and the router will parse it for you.'
  );
}
function Ih(e) {
  return e.filter(
    (t, n) => n === 0 || (t.route.path && t.route.path.length > 0)
  );
}
function bu(e, t) {
  let n = Ih(e);
  return t
    ? n.map((r, i) => (i === n.length - 1 ? r.pathname : r.pathnameBase))
    : n.map((r) => r.pathnameBase);
}
function Bu(e, t, n, r) {
  r === void 0 && (r = !1);
  let i;
  typeof e == "string"
    ? (i = On(e))
    : ((i = ve({}, e)),
      Q(
        !i.pathname || !i.pathname.includes("?"),
        Sa("?", "pathname", "search", i)
      ),
      Q(
        !i.pathname || !i.pathname.includes("#"),
        Sa("#", "pathname", "hash", i)
      ),
      Q(!i.search || !i.search.includes("#"), Sa("#", "search", "hash", i)));
  let o = e === "" || i.pathname === "",
    l = o ? "/" : i.pathname,
    a;
  if (l == null) a = n;
  else {
    let c = t.length - 1;
    if (!r && l.startsWith("..")) {
      let p = l.split("/");
      for (; p[0] === ".."; ) p.shift(), (c -= 1);
      i.pathname = p.join("/");
    }
    a = c >= 0 ? t[c] : "/";
  }
  let s = H1(i, a),
    u = l && l !== "/" && l.endsWith("/"),
    f = (o || l === ".") && n.endsWith("/");
  return !s.pathname.endsWith("/") && (u || f) && (s.pathname += "/"), s;
}
const Ht = (e) => e.join("/").replace(/\/\/+/g, "/"),
  Y1 = (e) => e.replace(/\/+$/, "").replace(/^\/*/, "/"),
  Q1 = (e) => (!e || e === "?" ? "" : e.startsWith("?") ? e : "?" + e),
  K1 = (e) => (!e || e === "#" ? "" : e.startsWith("#") ? e : "#" + e);
class $u {
  constructor(t, n, r, i) {
    i === void 0 && (i = !1),
      (this.status = t),
      (this.statusText = n || ""),
      (this.internal = i),
      r instanceof Error
        ? ((this.data = r.toString()), (this.error = r))
        : (this.data = r);
  }
}
function Fl(e) {
  return (
    e != null &&
    typeof e.status == "number" &&
    typeof e.statusText == "string" &&
    typeof e.internal == "boolean" &&
    "data" in e
  );
}
const Fh = ["post", "put", "patch", "delete"],
  X1 = new Set(Fh),
  G1 = ["get", ...Fh],
  J1 = new Set(G1),
  Z1 = new Set([301, 302, 303, 307, 308]),
  q1 = new Set([307, 308]),
  Ea = {
    state: "idle",
    location: void 0,
    formMethod: void 0,
    formAction: void 0,
    formEncType: void 0,
    formData: void 0,
    json: void 0,
    text: void 0,
  },
  e0 = {
    state: "idle",
    data: void 0,
    formMethod: void 0,
    formAction: void 0,
    formEncType: void 0,
    formData: void 0,
    json: void 0,
    text: void 0,
  },
  li = { state: "unblocked", proceed: void 0, reset: void 0, location: void 0 },
  Wu = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  t0 = (e) => ({ hasErrorBoundary: !!e.hasErrorBoundary }),
  Uh = "remix-router-transitions";
function n0(e) {
  const t = e.window ? e.window : typeof window < "u" ? window : void 0,
    n =
      typeof t < "u" &&
      typeof t.document < "u" &&
      typeof t.document.createElement < "u",
    r = !n;
  Q(
    e.routes.length > 0,
    "You must provide a non-empty routes array to createRouter"
  );
  let i;
  if (e.mapRouteProperties) i = e.mapRouteProperties;
  else if (e.detectErrorBoundary) {
    let v = e.detectErrorBoundary;
    i = (y) => ({ hasErrorBoundary: v(y) });
  } else i = t0;
  let o = {},
    l = Vi(e.routes, i, void 0, o),
    a,
    s = e.basename || "/",
    u = e.unstable_dataStrategy || a0,
    f = e.unstable_patchRoutesOnMiss,
    c = ve(
      {
        v7_fetcherPersist: !1,
        v7_normalizeFormMethod: !1,
        v7_partialHydration: !1,
        v7_prependBasename: !1,
        v7_relativeSplatPath: !1,
        v7_skipActionErrorRevalidation: !1,
      },
      e.future
    ),
    p = null,
    E = new Set(),
    x = null,
    w = null,
    P = null,
    h = e.hydrationData != null,
    d = In(l, e.history.location, s),
    m = null;
  if (d == null && !f) {
    let v = $e(404, { pathname: e.history.location.pathname }),
      { matches: y, route: S } = Uf(l);
    (d = y), (m = { [S.id]: v });
  }
  d &&
    f &&
    !e.hydrationData &&
    Kl(d, l, e.history.location.pathname).active &&
    (d = null);
  let k;
  if (!d) (k = !1), (d = []);
  else if (d.some((v) => v.route.lazy)) k = !1;
  else if (!d.some((v) => v.route.loader)) k = !0;
  else if (c.v7_partialHydration) {
    let v = e.hydrationData ? e.hydrationData.loaderData : null,
      y = e.hydrationData ? e.hydrationData.errors : null,
      S = (C) =>
        C.route.loader
          ? typeof C.route.loader == "function" && C.route.loader.hydrate === !0
            ? !1
            : (v && v[C.route.id] !== void 0) || (y && y[C.route.id] !== void 0)
          : !0;
    if (y) {
      let C = d.findIndex((z) => y[z.route.id] !== void 0);
      k = d.slice(0, C + 1).every(S);
    } else k = d.every(S);
  } else k = e.hydrationData != null;
  let _,
    g = {
      historyAction: e.history.action,
      location: e.history.location,
      matches: d,
      initialized: k,
      navigation: Ea,
      restoreScrollPosition: e.hydrationData != null ? !1 : null,
      preventScrollReset: !1,
      revalidation: "idle",
      loaderData: (e.hydrationData && e.hydrationData.loaderData) || {},
      actionData: (e.hydrationData && e.hydrationData.actionData) || null,
      errors: (e.hydrationData && e.hydrationData.errors) || m,
      fetchers: new Map(),
      blockers: new Map(),
    },
    O = Ce.Pop,
    T = !1,
    I,
    D = !1,
    G = new Map(),
    fe = null,
    Re = !1,
    ie = !1,
    Ct = [],
    en = [],
    de = new Map(),
    A = 0,
    W = -1,
    H = new Map(),
    Z = new Set(),
    ae = new Map(),
    Pt = new Map(),
    Oe = new Set(),
    mt = new Map(),
    be = new Map(),
    ir = new Map(),
    Hl = !1;
  function jm() {
    if (
      ((p = e.history.listen((v) => {
        let { action: y, location: S, delta: C } = v;
        if (Hl) {
          Hl = !1;
          return;
        }
        Br(
          be.size === 0 || C != null,
          "You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL."
        );
        let z = pc({
          currentLocation: g.location,
          nextLocation: S,
          historyAction: y,
        });
        if (z && C != null) {
          (Hl = !0),
            e.history.go(C * -1),
            oo(z, {
              state: "blocked",
              location: S,
              proceed() {
                oo(z, {
                  state: "proceeding",
                  proceed: void 0,
                  reset: void 0,
                  location: S,
                }),
                  e.history.go(C);
              },
              reset() {
                let U = new Map(g.blockers);
                U.set(z, li), Be({ blockers: U });
              },
            });
          return;
        }
        return zn(y, S);
      })),
      n)
    ) {
      x0(t, G);
      let v = () => S0(t, G);
      t.addEventListener("pagehide", v),
        (fe = () => t.removeEventListener("pagehide", v));
    }
    return g.initialized || zn(Ce.Pop, g.location, { initialHydration: !0 }), _;
  }
  function Dm() {
    p && p(),
      fe && fe(),
      E.clear(),
      I && I.abort(),
      g.fetchers.forEach((v, y) => io(y)),
      g.blockers.forEach((v, y) => dc(y));
  }
  function Im(v) {
    return E.add(v), () => E.delete(v);
  }
  function Be(v, y) {
    y === void 0 && (y = {}), (g = ve({}, g, v));
    let S = [],
      C = [];
    c.v7_fetcherPersist &&
      g.fetchers.forEach((z, U) => {
        z.state === "idle" && (Oe.has(U) ? C.push(U) : S.push(U));
      }),
      [...E].forEach((z) =>
        z(g, {
          deletedFetchers: C,
          unstable_viewTransitionOpts: y.viewTransitionOpts,
          unstable_flushSync: y.flushSync === !0,
        })
      ),
      c.v7_fetcherPersist &&
        (S.forEach((z) => g.fetchers.delete(z)), C.forEach((z) => io(z)));
  }
  function or(v, y, S) {
    var C, z;
    let { flushSync: U } = S === void 0 ? {} : S,
      $ =
        g.actionData != null &&
        g.navigation.formMethod != null &&
        wt(g.navigation.formMethod) &&
        g.navigation.state === "loading" &&
        ((C = v.state) == null ? void 0 : C._isRedirect) !== !0,
      M;
    y.actionData
      ? Object.keys(y.actionData).length > 0
        ? (M = y.actionData)
        : (M = null)
      : $
      ? (M = g.actionData)
      : (M = null);
    let V = y.loaderData
        ? If(g.loaderData, y.loaderData, y.matches || [], y.errors)
        : g.loaderData,
      b = g.blockers;
    b.size > 0 && ((b = new Map(b)), b.forEach((ee, re) => b.set(re, li)));
    let B =
      T === !0 ||
      (g.navigation.formMethod != null &&
        wt(g.navigation.formMethod) &&
        ((z = v.state) == null ? void 0 : z._isRedirect) !== !0);
    a && ((l = a), (a = void 0)),
      Re ||
        O === Ce.Pop ||
        (O === Ce.Push
          ? e.history.push(v, v.state)
          : O === Ce.Replace && e.history.replace(v, v.state));
    let ne;
    if (O === Ce.Pop) {
      let ee = G.get(g.location.pathname);
      ee && ee.has(v.pathname)
        ? (ne = { currentLocation: g.location, nextLocation: v })
        : G.has(v.pathname) &&
          (ne = { currentLocation: v, nextLocation: g.location });
    } else if (D) {
      let ee = G.get(g.location.pathname);
      ee
        ? ee.add(v.pathname)
        : ((ee = new Set([v.pathname])), G.set(g.location.pathname, ee)),
        (ne = { currentLocation: g.location, nextLocation: v });
    }
    Be(
      ve({}, y, {
        actionData: M,
        loaderData: V,
        historyAction: O,
        location: v,
        initialized: !0,
        navigation: Ea,
        revalidation: "idle",
        restoreScrollPosition: mc(v, y.matches || g.matches),
        preventScrollReset: B,
        blockers: b,
      }),
      { viewTransitionOpts: ne, flushSync: U === !0 }
    ),
      (O = Ce.Pop),
      (T = !1),
      (D = !1),
      (Re = !1),
      (ie = !1),
      (Ct = []),
      (en = []);
  }
  async function oc(v, y) {
    if (typeof v == "number") {
      e.history.go(v);
      return;
    }
    let S = ks(
        g.location,
        g.matches,
        s,
        c.v7_prependBasename,
        v,
        c.v7_relativeSplatPath,
        y == null ? void 0 : y.fromRouteId,
        y == null ? void 0 : y.relative
      ),
      {
        path: C,
        submission: z,
        error: U,
      } = Tf(c.v7_normalizeFormMethod, !1, S, y),
      $ = g.location,
      M = Hi(g.location, C, y && y.state);
    M = ve({}, M, e.history.encodeLocation(M));
    let V = y && y.replace != null ? y.replace : void 0,
      b = Ce.Push;
    V === !0
      ? (b = Ce.Replace)
      : V === !1 ||
        (z != null &&
          wt(z.formMethod) &&
          z.formAction === g.location.pathname + g.location.search &&
          (b = Ce.Replace));
    let B =
        y && "preventScrollReset" in y ? y.preventScrollReset === !0 : void 0,
      ne = (y && y.unstable_flushSync) === !0,
      ee = pc({ currentLocation: $, nextLocation: M, historyAction: b });
    if (ee) {
      oo(ee, {
        state: "blocked",
        location: M,
        proceed() {
          oo(ee, {
            state: "proceeding",
            proceed: void 0,
            reset: void 0,
            location: M,
          }),
            oc(v, y);
        },
        reset() {
          let re = new Map(g.blockers);
          re.set(ee, li), Be({ blockers: re });
        },
      });
      return;
    }
    return await zn(b, M, {
      submission: z,
      pendingError: U,
      preventScrollReset: B,
      replace: y && y.replace,
      enableViewTransition: y && y.unstable_viewTransition,
      flushSync: ne,
    });
  }
  function Fm() {
    if (
      (Vl(),
      Be({ revalidation: "loading" }),
      g.navigation.state !== "submitting")
    ) {
      if (g.navigation.state === "idle") {
        zn(g.historyAction, g.location, { startUninterruptedRevalidation: !0 });
        return;
      }
      zn(O || g.historyAction, g.navigation.location, {
        overrideNavigation: g.navigation,
      });
    }
  }
  async function zn(v, y, S) {
    I && I.abort(),
      (I = null),
      (O = v),
      (Re = (S && S.startUninterruptedRevalidation) === !0),
      Km(g.location, g.matches),
      (T = (S && S.preventScrollReset) === !0),
      (D = (S && S.enableViewTransition) === !0);
    let C = a || l,
      z = S && S.overrideNavigation,
      U = In(C, y, s),
      $ = (S && S.flushSync) === !0,
      M = Kl(U, C, y.pathname);
    if ((M.active && M.matches && (U = M.matches), !U)) {
      let { error: q, notFoundMatches: Me, route: ke } = Yl(y.pathname);
      or(
        y,
        { matches: Me, loaderData: {}, errors: { [ke.id]: q } },
        { flushSync: $ }
      );
      return;
    }
    if (
      g.initialized &&
      !ie &&
      p0(g.location, y) &&
      !(S && S.submission && wt(S.submission.formMethod))
    ) {
      or(y, { matches: U }, { flushSync: $ });
      return;
    }
    I = new AbortController();
    let V = cr(e.history, y, I.signal, S && S.submission),
      b;
    if (S && S.pendingError)
      b = [Cr(U).route.id, { type: oe.error, error: S.pendingError }];
    else if (S && S.submission && wt(S.submission.formMethod)) {
      let q = await Um(V, y, S.submission, U, M.active, {
        replace: S.replace,
        flushSync: $,
      });
      if (q.shortCircuited) return;
      if (q.pendingActionResult) {
        let [Me, ke] = q.pendingActionResult;
        if (et(ke) && Fl(ke.error) && ke.error.status === 404) {
          (I = null),
            or(y, {
              matches: q.matches,
              loaderData: {},
              errors: { [Me]: ke.error },
            });
          return;
        }
      }
      (U = q.matches || U),
        (b = q.pendingActionResult),
        (z = ka(y, S.submission)),
        ($ = !1),
        (M.active = !1),
        (V = cr(e.history, V.url, V.signal));
    }
    let {
      shortCircuited: B,
      matches: ne,
      loaderData: ee,
      errors: re,
    } = await bm(
      V,
      y,
      U,
      M.active,
      z,
      S && S.submission,
      S && S.fetcherSubmission,
      S && S.replace,
      S && S.initialHydration === !0,
      $,
      b
    );
    B ||
      ((I = null),
      or(y, ve({ matches: ne || U }, Ff(b), { loaderData: ee, errors: re })));
  }
  async function Um(v, y, S, C, z, U) {
    U === void 0 && (U = {}), Vl();
    let $ = y0(y, S);
    if ((Be({ navigation: $ }, { flushSync: U.flushSync === !0 }), z)) {
      let b = await ao(C, y.pathname, v.signal);
      if (b.type === "aborted") return { shortCircuited: !0 };
      if (b.type === "error") {
        let { boundaryId: B, error: ne } = lo(y.pathname, b);
        return {
          matches: b.partialMatches,
          pendingActionResult: [B, { type: oe.error, error: ne }],
        };
      } else if (b.matches) C = b.matches;
      else {
        let { notFoundMatches: B, error: ne, route: ee } = Yl(y.pathname);
        return {
          matches: B,
          pendingActionResult: [ee.id, { type: oe.error, error: ne }],
        };
      }
    }
    let M,
      V = pi(C, y);
    if (!V.route.action && !V.route.lazy)
      M = {
        type: oe.error,
        error: $e(405, {
          method: v.method,
          pathname: y.pathname,
          routeId: V.route.id,
        }),
      };
    else if (((M = (await Gr("action", v, [V], C))[0]), v.signal.aborted))
      return { shortCircuited: !0 };
    if (Wn(M)) {
      let b;
      return (
        U && U.replace != null
          ? (b = U.replace)
          : (b =
              zf(M.response.headers.get("Location"), new URL(v.url), s) ===
              g.location.pathname + g.location.search),
        await Xr(v, M, { submission: S, replace: b }),
        { shortCircuited: !0 }
      );
    }
    if ($n(M)) throw $e(400, { type: "defer-action" });
    if (et(M)) {
      let b = Cr(C, V.route.id);
      return (
        (U && U.replace) !== !0 && (O = Ce.Push),
        { matches: C, pendingActionResult: [b.route.id, M] }
      );
    }
    return { matches: C, pendingActionResult: [V.route.id, M] };
  }
  async function bm(v, y, S, C, z, U, $, M, V, b, B) {
    let ne = z || ka(y, U),
      ee = U || $ || $f(ne),
      re = !Re && (!c.v7_partialHydration || !V);
    if (C) {
      if (re) {
        let xe = lc(B);
        Be(ve({ navigation: ne }, xe !== void 0 ? { actionData: xe } : {}), {
          flushSync: b,
        });
      }
      let Y = await ao(S, y.pathname, v.signal);
      if (Y.type === "aborted") return { shortCircuited: !0 };
      if (Y.type === "error") {
        let { boundaryId: xe, error: Ze } = lo(y.pathname, Y);
        return {
          matches: Y.partialMatches,
          loaderData: {},
          errors: { [xe]: Ze },
        };
      } else if (Y.matches) S = Y.matches;
      else {
        let { error: xe, notFoundMatches: Ze, route: pe } = Yl(y.pathname);
        return { matches: Ze, loaderData: {}, errors: { [pe.id]: xe } };
      }
    }
    let q = a || l,
      [Me, ke] = Of(
        e.history,
        g,
        S,
        ee,
        y,
        c.v7_partialHydration && V === !0,
        c.v7_skipActionErrorRevalidation,
        ie,
        Ct,
        en,
        Oe,
        ae,
        Z,
        q,
        s,
        B
      );
    if (
      (Ql(
        (Y) =>
          !(S && S.some((xe) => xe.route.id === Y)) ||
          (Me && Me.some((xe) => xe.route.id === Y))
      ),
      (W = ++A),
      Me.length === 0 && ke.length === 0)
    ) {
      let Y = cc();
      return (
        or(
          y,
          ve(
            {
              matches: S,
              loaderData: {},
              errors: B && et(B[1]) ? { [B[0]]: B[1].error } : null,
            },
            Ff(B),
            Y ? { fetchers: new Map(g.fetchers) } : {}
          ),
          { flushSync: b }
        ),
        { shortCircuited: !0 }
      );
    }
    if (re) {
      let Y = {};
      if (!C) {
        Y.navigation = ne;
        let xe = lc(B);
        xe !== void 0 && (Y.actionData = xe);
      }
      ke.length > 0 && (Y.fetchers = Bm(ke)), Be(Y, { flushSync: b });
    }
    ke.forEach((Y) => {
      de.has(Y.key) && nn(Y.key), Y.controller && de.set(Y.key, Y.controller);
    });
    let Jr = () => ke.forEach((Y) => nn(Y.key));
    I && I.signal.addEventListener("abort", Jr);
    let { loaderResults: rn, fetcherResults: lr } = await ac(
      g.matches,
      S,
      Me,
      ke,
      v
    );
    if (v.signal.aborted) return { shortCircuited: !0 };
    I && I.signal.removeEventListener("abort", Jr),
      ke.forEach((Y) => de.delete(Y.key));
    let ar = bf([...rn, ...lr]);
    if (ar) {
      if (ar.idx >= Me.length) {
        let Y = ke[ar.idx - Me.length].key;
        Z.add(Y);
      }
      return await Xr(v, ar.result, { replace: M }), { shortCircuited: !0 };
    }
    let { loaderData: sr, errors: _t } = Df(g, S, Me, rn, B, ke, lr, mt);
    mt.forEach((Y, xe) => {
      Y.subscribe((Ze) => {
        (Ze || Y.done) && mt.delete(xe);
      });
    }),
      c.v7_partialHydration &&
        V &&
        g.errors &&
        Object.entries(g.errors)
          .filter((Y) => {
            let [xe] = Y;
            return !Me.some((Ze) => Ze.route.id === xe);
          })
          .forEach((Y) => {
            let [xe, Ze] = Y;
            _t = Object.assign(_t || {}, { [xe]: Ze });
          });
    let so = cc(),
      uo = fc(W),
      co = so || uo || ke.length > 0;
    return ve(
      { matches: S, loaderData: sr, errors: _t },
      co ? { fetchers: new Map(g.fetchers) } : {}
    );
  }
  function lc(v) {
    if (v && !et(v[1])) return { [v[0]]: v[1].data };
    if (g.actionData)
      return Object.keys(g.actionData).length === 0 ? null : g.actionData;
  }
  function Bm(v) {
    return (
      v.forEach((y) => {
        let S = g.fetchers.get(y.key),
          C = ai(void 0, S ? S.data : void 0);
        g.fetchers.set(y.key, C);
      }),
      new Map(g.fetchers)
    );
  }
  function $m(v, y, S, C) {
    if (r)
      throw new Error(
        "router.fetch() was called during the server render, but it shouldn't be. You are likely calling a useFetcher() method in the body of your component. Try moving it to a useEffect or a callback."
      );
    de.has(v) && nn(v);
    let z = (C && C.unstable_flushSync) === !0,
      U = a || l,
      $ = ks(
        g.location,
        g.matches,
        s,
        c.v7_prependBasename,
        S,
        c.v7_relativeSplatPath,
        y,
        C == null ? void 0 : C.relative
      ),
      M = In(U, $, s),
      V = Kl(M, U, $);
    if ((V.active && V.matches && (M = V.matches), !M)) {
      It(v, y, $e(404, { pathname: $ }), { flushSync: z });
      return;
    }
    let {
      path: b,
      submission: B,
      error: ne,
    } = Tf(c.v7_normalizeFormMethod, !0, $, C);
    if (ne) {
      It(v, y, ne, { flushSync: z });
      return;
    }
    let ee = pi(M, b);
    if (((T = (C && C.preventScrollReset) === !0), B && wt(B.formMethod))) {
      Wm(v, y, b, ee, M, V.active, z, B);
      return;
    }
    ae.set(v, { routeId: y, path: b }), Hm(v, y, b, ee, M, V.active, z, B);
  }
  async function Wm(v, y, S, C, z, U, $, M) {
    Vl(), ae.delete(v);
    function V(pe) {
      if (!pe.route.action && !pe.route.lazy) {
        let Ft = $e(405, { method: M.formMethod, pathname: S, routeId: y });
        return It(v, y, Ft, { flushSync: $ }), !0;
      }
      return !1;
    }
    if (!U && V(C)) return;
    let b = g.fetchers.get(v);
    tn(v, w0(M, b), { flushSync: $ });
    let B = new AbortController(),
      ne = cr(e.history, S, B.signal, M);
    if (U) {
      let pe = await ao(z, S, ne.signal);
      if (pe.type === "aborted") return;
      if (pe.type === "error") {
        let { error: Ft } = lo(S, pe);
        It(v, y, Ft, { flushSync: $ });
        return;
      } else if (pe.matches) {
        if (((z = pe.matches), (C = pi(z, S)), V(C))) return;
      } else {
        It(v, y, $e(404, { pathname: S }), { flushSync: $ });
        return;
      }
    }
    de.set(v, B);
    let ee = A,
      q = (await Gr("action", ne, [C], z))[0];
    if (ne.signal.aborted) {
      de.get(v) === B && de.delete(v);
      return;
    }
    if (c.v7_fetcherPersist && Oe.has(v)) {
      if (Wn(q) || et(q)) {
        tn(v, an(void 0));
        return;
      }
    } else {
      if (Wn(q))
        if ((de.delete(v), W > ee)) {
          tn(v, an(void 0));
          return;
        } else
          return Z.add(v), tn(v, ai(M)), Xr(ne, q, { fetcherSubmission: M });
      if (et(q)) {
        It(v, y, q.error);
        return;
      }
    }
    if ($n(q)) throw $e(400, { type: "defer-action" });
    let Me = g.navigation.location || g.location,
      ke = cr(e.history, Me, B.signal),
      Jr = a || l,
      rn =
        g.navigation.state !== "idle"
          ? In(Jr, g.navigation.location, s)
          : g.matches;
    Q(rn, "Didn't find any matches after fetcher action");
    let lr = ++A;
    H.set(v, lr);
    let ar = ai(M, q.data);
    g.fetchers.set(v, ar);
    let [sr, _t] = Of(
      e.history,
      g,
      rn,
      M,
      Me,
      !1,
      c.v7_skipActionErrorRevalidation,
      ie,
      Ct,
      en,
      Oe,
      ae,
      Z,
      Jr,
      s,
      [C.route.id, q]
    );
    _t
      .filter((pe) => pe.key !== v)
      .forEach((pe) => {
        let Ft = pe.key,
          vc = g.fetchers.get(Ft),
          Jm = ai(void 0, vc ? vc.data : void 0);
        g.fetchers.set(Ft, Jm),
          de.has(Ft) && nn(Ft),
          pe.controller && de.set(Ft, pe.controller);
      }),
      Be({ fetchers: new Map(g.fetchers) });
    let so = () => _t.forEach((pe) => nn(pe.key));
    B.signal.addEventListener("abort", so);
    let { loaderResults: uo, fetcherResults: co } = await ac(
      g.matches,
      rn,
      sr,
      _t,
      ke
    );
    if (B.signal.aborted) return;
    B.signal.removeEventListener("abort", so),
      H.delete(v),
      de.delete(v),
      _t.forEach((pe) => de.delete(pe.key));
    let Y = bf([...uo, ...co]);
    if (Y) {
      if (Y.idx >= sr.length) {
        let pe = _t[Y.idx - sr.length].key;
        Z.add(pe);
      }
      return Xr(ke, Y.result);
    }
    let { loaderData: xe, errors: Ze } = Df(
      g,
      g.matches,
      sr,
      uo,
      void 0,
      _t,
      co,
      mt
    );
    if (g.fetchers.has(v)) {
      let pe = an(q.data);
      g.fetchers.set(v, pe);
    }
    fc(lr),
      g.navigation.state === "loading" && lr > W
        ? (Q(O, "Expected pending action"),
          I && I.abort(),
          or(g.navigation.location, {
            matches: rn,
            loaderData: xe,
            errors: Ze,
            fetchers: new Map(g.fetchers),
          }))
        : (Be({
            errors: Ze,
            loaderData: If(g.loaderData, xe, rn, Ze),
            fetchers: new Map(g.fetchers),
          }),
          (ie = !1));
  }
  async function Hm(v, y, S, C, z, U, $, M) {
    let V = g.fetchers.get(v);
    tn(v, ai(M, V ? V.data : void 0), { flushSync: $ });
    let b = new AbortController(),
      B = cr(e.history, S, b.signal);
    if (U) {
      let q = await ao(z, S, B.signal);
      if (q.type === "aborted") return;
      if (q.type === "error") {
        let { error: Me } = lo(S, q);
        It(v, y, Me, { flushSync: $ });
        return;
      } else if (q.matches) (z = q.matches), (C = pi(z, S));
      else {
        It(v, y, $e(404, { pathname: S }), { flushSync: $ });
        return;
      }
    }
    de.set(v, b);
    let ne = A,
      re = (await Gr("loader", B, [C], z))[0];
    if (
      ($n(re) && (re = (await Hh(re, B.signal, !0)) || re),
      de.get(v) === b && de.delete(v),
      !B.signal.aborted)
    ) {
      if (Oe.has(v)) {
        tn(v, an(void 0));
        return;
      }
      if (Wn(re))
        if (W > ne) {
          tn(v, an(void 0));
          return;
        } else {
          Z.add(v), await Xr(B, re);
          return;
        }
      if (et(re)) {
        It(v, y, re.error);
        return;
      }
      Q(!$n(re), "Unhandled fetcher deferred data"), tn(v, an(re.data));
    }
  }
  async function Xr(v, y, S) {
    let {
      submission: C,
      fetcherSubmission: z,
      replace: U,
    } = S === void 0 ? {} : S;
    y.response.headers.has("X-Remix-Revalidate") && (ie = !0);
    let $ = y.response.headers.get("Location");
    Q($, "Expected a Location header on the redirect Response"),
      ($ = zf($, new URL(v.url), s));
    let M = Hi(g.location, $, { _isRedirect: !0 });
    if (n) {
      let re = !1;
      if (y.response.headers.has("X-Remix-Reload-Document")) re = !0;
      else if (Wu.test($)) {
        const q = e.history.createURL($);
        re = q.origin !== t.location.origin || Xt(q.pathname, s) == null;
      }
      if (re) {
        U ? t.location.replace($) : t.location.assign($);
        return;
      }
    }
    I = null;
    let V = U === !0 ? Ce.Replace : Ce.Push,
      { formMethod: b, formAction: B, formEncType: ne } = g.navigation;
    !C && !z && b && B && ne && (C = $f(g.navigation));
    let ee = C || z;
    if (q1.has(y.response.status) && ee && wt(ee.formMethod))
      await zn(V, M, {
        submission: ve({}, ee, { formAction: $ }),
        preventScrollReset: T,
      });
    else {
      let re = ka(M, C);
      await zn(V, M, {
        overrideNavigation: re,
        fetcherSubmission: z,
        preventScrollReset: T,
      });
    }
  }
  async function Gr(v, y, S, C) {
    try {
      let z = await s0(u, v, y, S, C, o, i);
      return await Promise.all(
        z.map((U, $) => {
          if (m0(U)) {
            let M = U.result;
            return {
              type: oe.redirect,
              response: f0(M, y, S[$].route.id, C, s, c.v7_relativeSplatPath),
            };
          }
          return c0(U);
        })
      );
    } catch (z) {
      return S.map(() => ({ type: oe.error, error: z }));
    }
  }
  async function ac(v, y, S, C, z) {
    let [U, ...$] = await Promise.all([
      S.length ? Gr("loader", z, S, y) : [],
      ...C.map((M) => {
        if (M.matches && M.match && M.controller) {
          let V = cr(e.history, M.path, M.controller.signal);
          return Gr("loader", V, [M.match], M.matches).then((b) => b[0]);
        } else
          return Promise.resolve({
            type: oe.error,
            error: $e(404, { pathname: M.path }),
          });
      }),
    ]);
    return (
      await Promise.all([
        Bf(
          v,
          S,
          U,
          U.map(() => z.signal),
          !1,
          g.loaderData
        ),
        Bf(
          v,
          C.map((M) => M.match),
          $,
          C.map((M) => (M.controller ? M.controller.signal : null)),
          !0
        ),
      ]),
      { loaderResults: U, fetcherResults: $ }
    );
  }
  function Vl() {
    (ie = !0),
      Ct.push(...Ql()),
      ae.forEach((v, y) => {
        de.has(y) && (en.push(y), nn(y));
      });
  }
  function tn(v, y, S) {
    S === void 0 && (S = {}),
      g.fetchers.set(v, y),
      Be(
        { fetchers: new Map(g.fetchers) },
        { flushSync: (S && S.flushSync) === !0 }
      );
  }
  function It(v, y, S, C) {
    C === void 0 && (C = {});
    let z = Cr(g.matches, y);
    io(v),
      Be(
        { errors: { [z.route.id]: S }, fetchers: new Map(g.fetchers) },
        { flushSync: (C && C.flushSync) === !0 }
      );
  }
  function sc(v) {
    return (
      c.v7_fetcherPersist &&
        (Pt.set(v, (Pt.get(v) || 0) + 1), Oe.has(v) && Oe.delete(v)),
      g.fetchers.get(v) || e0
    );
  }
  function io(v) {
    let y = g.fetchers.get(v);
    de.has(v) && !(y && y.state === "loading" && H.has(v)) && nn(v),
      ae.delete(v),
      H.delete(v),
      Z.delete(v),
      Oe.delete(v),
      g.fetchers.delete(v);
  }
  function Vm(v) {
    if (c.v7_fetcherPersist) {
      let y = (Pt.get(v) || 0) - 1;
      y <= 0 ? (Pt.delete(v), Oe.add(v)) : Pt.set(v, y);
    } else io(v);
    Be({ fetchers: new Map(g.fetchers) });
  }
  function nn(v) {
    let y = de.get(v);
    Q(y, "Expected fetch controller: " + v), y.abort(), de.delete(v);
  }
  function uc(v) {
    for (let y of v) {
      let S = sc(y),
        C = an(S.data);
      g.fetchers.set(y, C);
    }
  }
  function cc() {
    let v = [],
      y = !1;
    for (let S of Z) {
      let C = g.fetchers.get(S);
      Q(C, "Expected fetcher: " + S),
        C.state === "loading" && (Z.delete(S), v.push(S), (y = !0));
    }
    return uc(v), y;
  }
  function fc(v) {
    let y = [];
    for (let [S, C] of H)
      if (C < v) {
        let z = g.fetchers.get(S);
        Q(z, "Expected fetcher: " + S),
          z.state === "loading" && (nn(S), H.delete(S), y.push(S));
      }
    return uc(y), y.length > 0;
  }
  function Ym(v, y) {
    let S = g.blockers.get(v) || li;
    return be.get(v) !== y && be.set(v, y), S;
  }
  function dc(v) {
    g.blockers.delete(v), be.delete(v);
  }
  function oo(v, y) {
    let S = g.blockers.get(v) || li;
    Q(
      (S.state === "unblocked" && y.state === "blocked") ||
        (S.state === "blocked" && y.state === "blocked") ||
        (S.state === "blocked" && y.state === "proceeding") ||
        (S.state === "blocked" && y.state === "unblocked") ||
        (S.state === "proceeding" && y.state === "unblocked"),
      "Invalid blocker state transition: " + S.state + " -> " + y.state
    );
    let C = new Map(g.blockers);
    C.set(v, y), Be({ blockers: C });
  }
  function pc(v) {
    let { currentLocation: y, nextLocation: S, historyAction: C } = v;
    if (be.size === 0) return;
    be.size > 1 && Br(!1, "A router only supports one blocker at a time");
    let z = Array.from(be.entries()),
      [U, $] = z[z.length - 1],
      M = g.blockers.get(U);
    if (
      !(M && M.state === "proceeding") &&
      $({ currentLocation: y, nextLocation: S, historyAction: C })
    )
      return U;
  }
  function Yl(v) {
    let y = $e(404, { pathname: v }),
      S = a || l,
      { matches: C, route: z } = Uf(S);
    return Ql(), { notFoundMatches: C, route: z, error: y };
  }
  function lo(v, y) {
    return {
      boundaryId: Cr(y.partialMatches).route.id,
      error: $e(400, {
        type: "route-discovery",
        pathname: v,
        message:
          y.error != null && "message" in y.error ? y.error : String(y.error),
      }),
    };
  }
  function Ql(v) {
    let y = [];
    return (
      mt.forEach((S, C) => {
        (!v || v(C)) && (S.cancel(), y.push(C), mt.delete(C));
      }),
      y
    );
  }
  function Qm(v, y, S) {
    if (((x = v), (P = y), (w = S || null), !h && g.navigation === Ea)) {
      h = !0;
      let C = mc(g.location, g.matches);
      C != null && Be({ restoreScrollPosition: C });
    }
    return () => {
      (x = null), (P = null), (w = null);
    };
  }
  function hc(v, y) {
    return (
      (w &&
        w(
          v,
          y.map((C) => O1(C, g.loaderData))
        )) ||
      v.key
    );
  }
  function Km(v, y) {
    if (x && P) {
      let S = hc(v, y);
      x[S] = P();
    }
  }
  function mc(v, y) {
    if (x) {
      let S = hc(v, y),
        C = x[S];
      if (typeof C == "number") return C;
    }
    return null;
  }
  function Kl(v, y, S) {
    if (f)
      if (v) {
        let C = v[v.length - 1].route;
        if (C.path && (C.path === "*" || C.path.endsWith("/*")))
          return { active: !0, matches: Wo(y, S, s, !0) };
      } else return { active: !0, matches: Wo(y, S, s, !0) || [] };
    return { active: !1, matches: null };
  }
  async function ao(v, y, S) {
    let C = v,
      z = C.length > 0 ? C[C.length - 1].route : null;
    for (;;) {
      let U = a == null,
        $ = a || l;
      try {
        await l0(f, y, C, $, o, i, ir, S);
      } catch (B) {
        return { type: "error", error: B, partialMatches: C };
      } finally {
        U && (l = [...l]);
      }
      if (S.aborted) return { type: "aborted" };
      let M = In($, y, s),
        V = !1;
      if (M) {
        let B = M[M.length - 1].route;
        if (B.index) return { type: "success", matches: M };
        if (B.path && B.path.length > 0)
          if (B.path === "*") V = !0;
          else return { type: "success", matches: M };
      }
      let b = Wo($, y, s, !0);
      if (
        !b ||
        C.map((B) => B.route.id).join("-") ===
          b.map((B) => B.route.id).join("-")
      )
        return { type: "success", matches: V ? M : null };
      if (((C = b), (z = C[C.length - 1].route), z.path === "*"))
        return { type: "success", matches: C };
    }
  }
  function Xm(v) {
    (o = {}), (a = Vi(v, i, void 0, o));
  }
  function Gm(v, y) {
    let S = a == null;
    Bh(v, y, a || l, o, i), S && ((l = [...l]), Be({}));
  }
  return (
    (_ = {
      get basename() {
        return s;
      },
      get future() {
        return c;
      },
      get state() {
        return g;
      },
      get routes() {
        return l;
      },
      get window() {
        return t;
      },
      initialize: jm,
      subscribe: Im,
      enableScrollRestoration: Qm,
      navigate: oc,
      fetch: $m,
      revalidate: Fm,
      createHref: (v) => e.history.createHref(v),
      encodeLocation: (v) => e.history.encodeLocation(v),
      getFetcher: sc,
      deleteFetcher: Vm,
      dispose: Dm,
      getBlocker: Ym,
      deleteBlocker: dc,
      patchRoutes: Gm,
      _internalFetchControllers: de,
      _internalActiveDeferreds: mt,
      _internalSetRoutes: Xm,
    }),
    _
  );
}
function r0(e) {
  return (
    e != null &&
    (("formData" in e && e.formData != null) ||
      ("body" in e && e.body !== void 0))
  );
}
function ks(e, t, n, r, i, o, l, a) {
  let s, u;
  if (l) {
    s = [];
    for (let c of t)
      if ((s.push(c), c.route.id === l)) {
        u = c;
        break;
      }
  } else (s = t), (u = t[t.length - 1]);
  let f = Bu(i || ".", bu(s, o), Xt(e.pathname, n) || e.pathname, a === "path");
  return (
    i == null && ((f.search = e.search), (f.hash = e.hash)),
    (i == null || i === "" || i === ".") &&
      u &&
      u.route.index &&
      !Hu(f.search) &&
      (f.search = f.search ? f.search.replace(/^\?/, "?index&") : "?index"),
    r &&
      n !== "/" &&
      (f.pathname = f.pathname === "/" ? n : Ht([n, f.pathname])),
    qn(f)
  );
}
function Tf(e, t, n, r) {
  if (!r || !r0(r)) return { path: n };
  if (r.formMethod && !g0(r.formMethod))
    return { path: n, error: $e(405, { method: r.formMethod }) };
  let i = () => ({ path: n, error: $e(400, { type: "invalid-body" }) }),
    o = r.formMethod || "get",
    l = e ? o.toUpperCase() : o.toLowerCase(),
    a = $h(n);
  if (r.body !== void 0) {
    if (r.formEncType === "text/plain") {
      if (!wt(l)) return i();
      let p =
        typeof r.body == "string"
          ? r.body
          : r.body instanceof FormData || r.body instanceof URLSearchParams
          ? Array.from(r.body.entries()).reduce((E, x) => {
              let [w, P] = x;
              return (
                "" +
                E +
                w +
                "=" +
                P +
                `
`
              );
            }, "")
          : String(r.body);
      return {
        path: n,
        submission: {
          formMethod: l,
          formAction: a,
          formEncType: r.formEncType,
          formData: void 0,
          json: void 0,
          text: p,
        },
      };
    } else if (r.formEncType === "application/json") {
      if (!wt(l)) return i();
      try {
        let p = typeof r.body == "string" ? JSON.parse(r.body) : r.body;
        return {
          path: n,
          submission: {
            formMethod: l,
            formAction: a,
            formEncType: r.formEncType,
            formData: void 0,
            json: p,
            text: void 0,
          },
        };
      } catch {
        return i();
      }
    }
  }
  Q(
    typeof FormData == "function",
    "FormData is not available in this environment"
  );
  let s, u;
  if (r.formData) (s = Cs(r.formData)), (u = r.formData);
  else if (r.body instanceof FormData) (s = Cs(r.body)), (u = r.body);
  else if (r.body instanceof URLSearchParams) (s = r.body), (u = jf(s));
  else if (r.body == null) (s = new URLSearchParams()), (u = new FormData());
  else
    try {
      (s = new URLSearchParams(r.body)), (u = jf(s));
    } catch {
      return i();
    }
  let f = {
    formMethod: l,
    formAction: a,
    formEncType: (r && r.formEncType) || "application/x-www-form-urlencoded",
    formData: u,
    json: void 0,
    text: void 0,
  };
  if (wt(f.formMethod)) return { path: n, submission: f };
  let c = On(n);
  return (
    t && c.search && Hu(c.search) && s.append("index", ""),
    (c.search = "?" + s),
    { path: qn(c), submission: f }
  );
}
function i0(e, t) {
  let n = e;
  if (t) {
    let r = e.findIndex((i) => i.route.id === t);
    r >= 0 && (n = e.slice(0, r));
  }
  return n;
}
function Of(e, t, n, r, i, o, l, a, s, u, f, c, p, E, x, w) {
  let P = w ? (et(w[1]) ? w[1].error : w[1].data) : void 0,
    h = e.createURL(t.location),
    d = e.createURL(i),
    m = w && et(w[1]) ? w[0] : void 0,
    k = m ? i0(n, m) : n,
    _ = w ? w[1].statusCode : void 0,
    g = l && _ && _ >= 400,
    O = k.filter((I, D) => {
      let { route: G } = I;
      if (G.lazy) return !0;
      if (G.loader == null) return !1;
      if (o)
        return typeof G.loader != "function" || G.loader.hydrate
          ? !0
          : t.loaderData[G.id] === void 0 &&
              (!t.errors || t.errors[G.id] === void 0);
      if (
        o0(t.loaderData, t.matches[D], I) ||
        s.some((ie) => ie === I.route.id)
      )
        return !0;
      let fe = t.matches[D],
        Re = I;
      return Mf(
        I,
        ve(
          {
            currentUrl: h,
            currentParams: fe.params,
            nextUrl: d,
            nextParams: Re.params,
          },
          r,
          {
            actionResult: P,
            actionStatus: _,
            defaultShouldRevalidate: g
              ? !1
              : a ||
                h.pathname + h.search === d.pathname + d.search ||
                h.search !== d.search ||
                bh(fe, Re),
          }
        )
      );
    }),
    T = [];
  return (
    c.forEach((I, D) => {
      if (o || !n.some((Ct) => Ct.route.id === I.routeId) || f.has(D)) return;
      let G = In(E, I.path, x);
      if (!G) {
        T.push({
          key: D,
          routeId: I.routeId,
          path: I.path,
          matches: null,
          match: null,
          controller: null,
        });
        return;
      }
      let fe = t.fetchers.get(D),
        Re = pi(G, I.path),
        ie = !1;
      p.has(D)
        ? (ie = !1)
        : u.includes(D)
        ? (ie = !0)
        : fe && fe.state !== "idle" && fe.data === void 0
        ? (ie = a)
        : (ie = Mf(
            Re,
            ve(
              {
                currentUrl: h,
                currentParams: t.matches[t.matches.length - 1].params,
                nextUrl: d,
                nextParams: n[n.length - 1].params,
              },
              r,
              {
                actionResult: P,
                actionStatus: _,
                defaultShouldRevalidate: g ? !1 : a,
              }
            )
          )),
        ie &&
          T.push({
            key: D,
            routeId: I.routeId,
            path: I.path,
            matches: G,
            match: Re,
            controller: new AbortController(),
          });
    }),
    [O, T]
  );
}
function o0(e, t, n) {
  let r = !t || n.route.id !== t.route.id,
    i = e[n.route.id] === void 0;
  return r || i;
}
function bh(e, t) {
  let n = e.route.path;
  return (
    e.pathname !== t.pathname ||
    (n != null && n.endsWith("*") && e.params["*"] !== t.params["*"])
  );
}
function Mf(e, t) {
  if (e.route.shouldRevalidate) {
    let n = e.route.shouldRevalidate(t);
    if (typeof n == "boolean") return n;
  }
  return t.defaultShouldRevalidate;
}
async function l0(e, t, n, r, i, o, l, a) {
  let s = [t, ...n.map((u) => u.route.id)].join("-");
  try {
    let u = l.get(s);
    u ||
      ((u = e({
        path: t,
        matches: n,
        patch: (f, c) => {
          a.aborted || Bh(f, c, r, i, o);
        },
      })),
      l.set(s, u)),
      u && h0(u) && (await u);
  } finally {
    l.delete(s);
  }
}
function Bh(e, t, n, r, i) {
  if (e) {
    var o;
    let l = r[e];
    Q(l, "No route found to patch children into: routeId = " + e);
    let a = Vi(
      t,
      i,
      [
        e,
        "patch",
        String(((o = l.children) == null ? void 0 : o.length) || "0"),
      ],
      r
    );
    l.children ? l.children.push(...a) : (l.children = a);
  } else {
    let l = Vi(t, i, ["patch", String(n.length || "0")], r);
    n.push(...l);
  }
}
async function Af(e, t, n) {
  if (!e.lazy) return;
  let r = await e.lazy();
  if (!e.lazy) return;
  let i = n[e.id];
  Q(i, "No route found in manifest");
  let o = {};
  for (let l in r) {
    let s = i[l] !== void 0 && l !== "hasErrorBoundary";
    Br(
      !s,
      'Route "' +
        i.id +
        '" has a static property "' +
        l +
        '" defined but its lazy function is also returning a value for this property. ' +
        ('The lazy route property "' + l + '" will be ignored.')
    ),
      !s && !L1.has(l) && (o[l] = r[l]);
  }
  Object.assign(i, o), Object.assign(i, ve({}, t(i), { lazy: void 0 }));
}
function a0(e) {
  return Promise.all(e.matches.map((t) => t.resolve()));
}
async function s0(e, t, n, r, i, o, l, a) {
  let s = r.reduce((c, p) => c.add(p.route.id), new Set()),
    u = new Set(),
    f = await e({
      matches: i.map((c) => {
        let p = s.has(c.route.id);
        return ve({}, c, {
          shouldLoad: p,
          resolve: (x) => (
            u.add(c.route.id),
            p
              ? u0(t, n, c, o, l, x, a)
              : Promise.resolve({ type: oe.data, result: void 0 })
          ),
        });
      }),
      request: n,
      params: i[0].params,
      context: a,
    });
  return (
    i.forEach((c) =>
      Q(
        u.has(c.route.id),
        '`match.resolve()` was not called for route id "' +
          c.route.id +
          '". You must call `match.resolve()` on every match passed to `dataStrategy` to ensure all routes are properly loaded.'
      )
    ),
    f.filter((c, p) => s.has(i[p].route.id))
  );
}
async function u0(e, t, n, r, i, o, l) {
  let a,
    s,
    u = (f) => {
      let c,
        p = new Promise((w, P) => (c = P));
      (s = () => c()), t.signal.addEventListener("abort", s);
      let E = (w) =>
          typeof f != "function"
            ? Promise.reject(
                new Error(
                  "You cannot call the handler for a route which defines a boolean " +
                    ('"' + e + '" [routeId: ' + n.route.id + "]")
                )
              )
            : f(
                { request: t, params: n.params, context: l },
                ...(w !== void 0 ? [w] : [])
              ),
        x;
      return (
        o
          ? (x = o((w) => E(w)))
          : (x = (async () => {
              try {
                return { type: "data", result: await E() };
              } catch (w) {
                return { type: "error", result: w };
              }
            })()),
        Promise.race([x, p])
      );
    };
  try {
    let f = n.route[e];
    if (n.route.lazy)
      if (f) {
        let c,
          [p] = await Promise.all([
            u(f).catch((E) => {
              c = E;
            }),
            Af(n.route, i, r),
          ]);
        if (c !== void 0) throw c;
        a = p;
      } else if ((await Af(n.route, i, r), (f = n.route[e]), f)) a = await u(f);
      else if (e === "action") {
        let c = new URL(t.url),
          p = c.pathname + c.search;
        throw $e(405, { method: t.method, pathname: p, routeId: n.route.id });
      } else return { type: oe.data, result: void 0 };
    else if (f) a = await u(f);
    else {
      let c = new URL(t.url),
        p = c.pathname + c.search;
      throw $e(404, { pathname: p });
    }
    Q(
      a.result !== void 0,
      "You defined " +
        (e === "action" ? "an action" : "a loader") +
        " for route " +
        ('"' +
          n.route.id +
          "\" but didn't return anything from your `" +
          e +
          "` ") +
        "function. Please return a value or `null`."
    );
  } catch (f) {
    return { type: oe.error, result: f };
  } finally {
    s && t.signal.removeEventListener("abort", s);
  }
  return a;
}
async function c0(e) {
  let { result: t, type: n, status: r } = e;
  if (Wh(t)) {
    let l;
    try {
      let a = t.headers.get("Content-Type");
      a && /\bapplication\/json\b/.test(a)
        ? t.body == null
          ? (l = null)
          : (l = await t.json())
        : (l = await t.text());
    } catch (a) {
      return { type: oe.error, error: a };
    }
    return n === oe.error
      ? {
          type: oe.error,
          error: new $u(t.status, t.statusText, l),
          statusCode: t.status,
          headers: t.headers,
        }
      : { type: oe.data, data: l, statusCode: t.status, headers: t.headers };
  }
  if (n === oe.error)
    return { type: oe.error, error: t, statusCode: Fl(t) ? t.status : r };
  if (v0(t)) {
    var i, o;
    return {
      type: oe.deferred,
      deferredData: t,
      statusCode: (i = t.init) == null ? void 0 : i.status,
      headers:
        ((o = t.init) == null ? void 0 : o.headers) &&
        new Headers(t.init.headers),
    };
  }
  return { type: oe.data, data: t, statusCode: r };
}
function f0(e, t, n, r, i, o) {
  let l = e.headers.get("Location");
  if (
    (Q(
      l,
      "Redirects returned/thrown from loaders/actions must have a Location header"
    ),
    !Wu.test(l))
  ) {
    let a = r.slice(0, r.findIndex((s) => s.route.id === n) + 1);
    (l = ks(new URL(t.url), a, i, !0, l, o)), e.headers.set("Location", l);
  }
  return e;
}
function zf(e, t, n) {
  if (Wu.test(e)) {
    let r = e,
      i = r.startsWith("//") ? new URL(t.protocol + r) : new URL(r),
      o = Xt(i.pathname, n) != null;
    if (i.origin === t.origin && o) return i.pathname + i.search + i.hash;
  }
  return e;
}
function cr(e, t, n, r) {
  let i = e.createURL($h(t)).toString(),
    o = { signal: n };
  if (r && wt(r.formMethod)) {
    let { formMethod: l, formEncType: a } = r;
    (o.method = l.toUpperCase()),
      a === "application/json"
        ? ((o.headers = new Headers({ "Content-Type": a })),
          (o.body = JSON.stringify(r.json)))
        : a === "text/plain"
        ? (o.body = r.text)
        : a === "application/x-www-form-urlencoded" && r.formData
        ? (o.body = Cs(r.formData))
        : (o.body = r.formData);
  }
  return new Request(i, o);
}
function Cs(e) {
  let t = new URLSearchParams();
  for (let [n, r] of e.entries())
    t.append(n, typeof r == "string" ? r : r.name);
  return t;
}
function jf(e) {
  let t = new FormData();
  for (let [n, r] of e.entries()) t.append(n, r);
  return t;
}
function d0(e, t, n, r, i, o) {
  let l = {},
    a = null,
    s,
    u = !1,
    f = {},
    c = r && et(r[1]) ? r[1].error : void 0;
  return (
    n.forEach((p, E) => {
      let x = t[E].route.id;
      if (
        (Q(!Wn(p), "Cannot handle redirect results in processLoaderData"),
        et(p))
      ) {
        let w = p.error;
        c !== void 0 && ((w = c), (c = void 0)), (a = a || {});
        {
          let P = Cr(e, x);
          a[P.route.id] == null && (a[P.route.id] = w);
        }
        (l[x] = void 0),
          u || ((u = !0), (s = Fl(p.error) ? p.error.status : 500)),
          p.headers && (f[x] = p.headers);
      } else
        $n(p)
          ? (i.set(x, p.deferredData),
            (l[x] = p.deferredData.data),
            p.statusCode != null &&
              p.statusCode !== 200 &&
              !u &&
              (s = p.statusCode),
            p.headers && (f[x] = p.headers))
          : ((l[x] = p.data),
            p.statusCode && p.statusCode !== 200 && !u && (s = p.statusCode),
            p.headers && (f[x] = p.headers));
    }),
    c !== void 0 && r && ((a = { [r[0]]: c }), (l[r[0]] = void 0)),
    { loaderData: l, errors: a, statusCode: s || 200, loaderHeaders: f }
  );
}
function Df(e, t, n, r, i, o, l, a) {
  let { loaderData: s, errors: u } = d0(t, n, r, i, a);
  for (let f = 0; f < o.length; f++) {
    let { key: c, match: p, controller: E } = o[f];
    Q(
      l !== void 0 && l[f] !== void 0,
      "Did not find corresponding fetcher result"
    );
    let x = l[f];
    if (!(E && E.signal.aborted))
      if (et(x)) {
        let w = Cr(e.matches, p == null ? void 0 : p.route.id);
        (u && u[w.route.id]) || (u = ve({}, u, { [w.route.id]: x.error })),
          e.fetchers.delete(c);
      } else if (Wn(x)) Q(!1, "Unhandled fetcher revalidation redirect");
      else if ($n(x)) Q(!1, "Unhandled fetcher deferred data");
      else {
        let w = an(x.data);
        e.fetchers.set(c, w);
      }
  }
  return { loaderData: s, errors: u };
}
function If(e, t, n, r) {
  let i = ve({}, t);
  for (let o of n) {
    let l = o.route.id;
    if (
      (t.hasOwnProperty(l)
        ? t[l] !== void 0 && (i[l] = t[l])
        : e[l] !== void 0 && o.route.loader && (i[l] = e[l]),
      r && r.hasOwnProperty(l))
    )
      break;
  }
  return i;
}
function Ff(e) {
  return e
    ? et(e[1])
      ? { actionData: {} }
      : { actionData: { [e[0]]: e[1].data } }
    : {};
}
function Cr(e, t) {
  return (
    (t ? e.slice(0, e.findIndex((r) => r.route.id === t) + 1) : [...e])
      .reverse()
      .find((r) => r.route.hasErrorBoundary === !0) || e[0]
  );
}
function Uf(e) {
  let t =
    e.length === 1
      ? e[0]
      : e.find((n) => n.index || !n.path || n.path === "/") || {
          id: "__shim-error-route__",
        };
  return {
    matches: [{ params: {}, pathname: "", pathnameBase: "", route: t }],
    route: t,
  };
}
function $e(e, t) {
  let {
      pathname: n,
      routeId: r,
      method: i,
      type: o,
      message: l,
    } = t === void 0 ? {} : t,
    a = "Unknown Server Error",
    s = "Unknown @remix-run/router error";
  return (
    e === 400
      ? ((a = "Bad Request"),
        o === "route-discovery"
          ? (s =
              'Unable to match URL "' +
              n +
              '" - the `unstable_patchRoutesOnMiss()` ' +
              (`function threw the following error:
` +
                l))
          : i && n && r
          ? (s =
              "You made a " +
              i +
              ' request to "' +
              n +
              '" but ' +
              ('did not provide a `loader` for route "' + r + '", ') +
              "so there is no way to handle the request.")
          : o === "defer-action"
          ? (s = "defer() is not supported in actions")
          : o === "invalid-body" && (s = "Unable to encode submission body"))
      : e === 403
      ? ((a = "Forbidden"),
        (s = 'Route "' + r + '" does not match URL "' + n + '"'))
      : e === 404
      ? ((a = "Not Found"), (s = 'No route matches URL "' + n + '"'))
      : e === 405 &&
        ((a = "Method Not Allowed"),
        i && n && r
          ? (s =
              "You made a " +
              i.toUpperCase() +
              ' request to "' +
              n +
              '" but ' +
              ('did not provide an `action` for route "' + r + '", ') +
              "so there is no way to handle the request.")
          : i && (s = 'Invalid request method "' + i.toUpperCase() + '"')),
    new $u(e || 500, a, new Error(s), !0)
  );
}
function bf(e) {
  for (let t = e.length - 1; t >= 0; t--) {
    let n = e[t];
    if (Wn(n)) return { result: n, idx: t };
  }
}
function $h(e) {
  let t = typeof e == "string" ? On(e) : e;
  return qn(ve({}, t, { hash: "" }));
}
function p0(e, t) {
  return e.pathname !== t.pathname || e.search !== t.search
    ? !1
    : e.hash === ""
    ? t.hash !== ""
    : e.hash === t.hash
    ? !0
    : t.hash !== "";
}
function h0(e) {
  return typeof e == "object" && e != null && "then" in e;
}
function m0(e) {
  return Wh(e.result) && Z1.has(e.result.status);
}
function $n(e) {
  return e.type === oe.deferred;
}
function et(e) {
  return e.type === oe.error;
}
function Wn(e) {
  return (e && e.type) === oe.redirect;
}
function v0(e) {
  let t = e;
  return (
    t &&
    typeof t == "object" &&
    typeof t.data == "object" &&
    typeof t.subscribe == "function" &&
    typeof t.cancel == "function" &&
    typeof t.resolveData == "function"
  );
}
function Wh(e) {
  return (
    e != null &&
    typeof e.status == "number" &&
    typeof e.statusText == "string" &&
    typeof e.headers == "object" &&
    typeof e.body < "u"
  );
}
function g0(e) {
  return J1.has(e.toLowerCase());
}
function wt(e) {
  return X1.has(e.toLowerCase());
}
async function Bf(e, t, n, r, i, o) {
  for (let l = 0; l < n.length; l++) {
    let a = n[l],
      s = t[l];
    if (!s) continue;
    let u = e.find((c) => c.route.id === s.route.id),
      f = u != null && !bh(u, s) && (o && o[s.route.id]) !== void 0;
    if ($n(a) && (i || f)) {
      let c = r[l];
      Q(c, "Expected an AbortSignal for revalidating fetcher deferred result"),
        await Hh(a, c, i).then((p) => {
          p && (n[l] = p || n[l]);
        });
    }
  }
}
async function Hh(e, t, n) {
  if ((n === void 0 && (n = !1), !(await e.deferredData.resolveData(t)))) {
    if (n)
      try {
        return { type: oe.data, data: e.deferredData.unwrappedData };
      } catch (i) {
        return { type: oe.error, error: i };
      }
    return { type: oe.data, data: e.deferredData.data };
  }
}
function Hu(e) {
  return new URLSearchParams(e).getAll("index").some((t) => t === "");
}
function pi(e, t) {
  let n = typeof t == "string" ? On(t).search : t.search;
  if (e[e.length - 1].route.index && Hu(n || "")) return e[e.length - 1];
  let r = Ih(e);
  return r[r.length - 1];
}
function $f(e) {
  let {
    formMethod: t,
    formAction: n,
    formEncType: r,
    text: i,
    formData: o,
    json: l,
  } = e;
  if (!(!t || !n || !r)) {
    if (i != null)
      return {
        formMethod: t,
        formAction: n,
        formEncType: r,
        formData: void 0,
        json: void 0,
        text: i,
      };
    if (o != null)
      return {
        formMethod: t,
        formAction: n,
        formEncType: r,
        formData: o,
        json: void 0,
        text: void 0,
      };
    if (l !== void 0)
      return {
        formMethod: t,
        formAction: n,
        formEncType: r,
        formData: void 0,
        json: l,
        text: void 0,
      };
  }
}
function ka(e, t) {
  return t
    ? {
        state: "loading",
        location: e,
        formMethod: t.formMethod,
        formAction: t.formAction,
        formEncType: t.formEncType,
        formData: t.formData,
        json: t.json,
        text: t.text,
      }
    : {
        state: "loading",
        location: e,
        formMethod: void 0,
        formAction: void 0,
        formEncType: void 0,
        formData: void 0,
        json: void 0,
        text: void 0,
      };
}
function y0(e, t) {
  return {
    state: "submitting",
    location: e,
    formMethod: t.formMethod,
    formAction: t.formAction,
    formEncType: t.formEncType,
    formData: t.formData,
    json: t.json,
    text: t.text,
  };
}
function ai(e, t) {
  return e
    ? {
        state: "loading",
        formMethod: e.formMethod,
        formAction: e.formAction,
        formEncType: e.formEncType,
        formData: e.formData,
        json: e.json,
        text: e.text,
        data: t,
      }
    : {
        state: "loading",
        formMethod: void 0,
        formAction: void 0,
        formEncType: void 0,
        formData: void 0,
        json: void 0,
        text: void 0,
        data: t,
      };
}
function w0(e, t) {
  return {
    state: "submitting",
    formMethod: e.formMethod,
    formAction: e.formAction,
    formEncType: e.formEncType,
    formData: e.formData,
    json: e.json,
    text: e.text,
    data: t ? t.data : void 0,
  };
}
function an(e) {
  return {
    state: "idle",
    formMethod: void 0,
    formAction: void 0,
    formEncType: void 0,
    formData: void 0,
    json: void 0,
    text: void 0,
    data: e,
  };
}
function x0(e, t) {
  try {
    let n = e.sessionStorage.getItem(Uh);
    if (n) {
      let r = JSON.parse(n);
      for (let [i, o] of Object.entries(r || {}))
        o && Array.isArray(o) && t.set(i, new Set(o || []));
    }
  } catch {}
}
function S0(e, t) {
  if (t.size > 0) {
    let n = {};
    for (let [r, i] of t) n[r] = [...i];
    try {
      e.sessionStorage.setItem(Uh, JSON.stringify(n));
    } catch (r) {
      Br(
        !1,
        "Failed to save applied view transitions in sessionStorage (" + r + ")."
      );
    }
  }
}
/**
 * React Router v6.25.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function gl() {
  return (
    (gl = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    gl.apply(this, arguments)
  );
}
const qi = N.createContext(null),
  Vu = N.createContext(null),
  Mn = N.createContext(null),
  Yu = N.createContext(null),
  An = N.createContext({ outlet: null, matches: [], isDataRoute: !1 }),
  Vh = N.createContext(null);
function E0(e, t) {
  let { relative: n } = t === void 0 ? {} : t;
  eo() || Q(!1);
  let { basename: r, navigator: i } = N.useContext(Mn),
    { hash: o, pathname: l, search: a } = Ul(e, { relative: n }),
    s = l;
  return (
    r !== "/" && (s = l === "/" ? r : Ht([r, l])),
    i.createHref({ pathname: s, search: a, hash: o })
  );
}
function eo() {
  return N.useContext(Yu) != null;
}
function to() {
  return eo() || Q(!1), N.useContext(Yu).location;
}
function Yh(e) {
  N.useContext(Mn).static || N.useLayoutEffect(e);
}
function k0() {
  let { isDataRoute: e } = N.useContext(An);
  return e ? I0() : C0();
}
function C0() {
  eo() || Q(!1);
  let e = N.useContext(qi),
    { basename: t, future: n, navigator: r } = N.useContext(Mn),
    { matches: i } = N.useContext(An),
    { pathname: o } = to(),
    l = JSON.stringify(bu(i, n.v7_relativeSplatPath)),
    a = N.useRef(!1);
  return (
    Yh(() => {
      a.current = !0;
    }),
    N.useCallback(
      function (u, f) {
        if ((f === void 0 && (f = {}), !a.current)) return;
        if (typeof u == "number") {
          r.go(u);
          return;
        }
        let c = Bu(u, JSON.parse(l), o, f.relative === "path");
        e == null &&
          t !== "/" &&
          (c.pathname = c.pathname === "/" ? t : Ht([t, c.pathname])),
          (f.replace ? r.replace : r.push)(c, f.state, f);
      },
      [t, r, l, o, e]
    )
  );
}
const P0 = N.createContext(null);
function _0(e) {
  let t = N.useContext(An).outlet;
  return t && N.createElement(P0.Provider, { value: e }, t);
}
function Ul(e, t) {
  let { relative: n } = t === void 0 ? {} : t,
    { future: r } = N.useContext(Mn),
    { matches: i } = N.useContext(An),
    { pathname: o } = to(),
    l = JSON.stringify(bu(i, r.v7_relativeSplatPath));
  return N.useMemo(() => Bu(e, JSON.parse(l), o, n === "path"), [e, l, o, n]);
}
function N0(e, t, n, r) {
  eo() || Q(!1);
  let { navigator: i } = N.useContext(Mn),
    { matches: o } = N.useContext(An),
    l = o[o.length - 1],
    a = l ? l.params : {};
  l && l.pathname;
  let s = l ? l.pathnameBase : "/";
  l && l.route;
  let u = to(),
    f;
  f = u;
  let c = f.pathname || "/",
    p = c;
  if (s !== "/") {
    let w = s.replace(/^\//, "").split("/");
    p = "/" + c.replace(/^\//, "").split("/").slice(w.length).join("/");
  }
  let E = In(e, { pathname: p });
  return M0(
    E &&
      E.map((w) =>
        Object.assign({}, w, {
          params: Object.assign({}, a, w.params),
          pathname: Ht([
            s,
            i.encodeLocation
              ? i.encodeLocation(w.pathname).pathname
              : w.pathname,
          ]),
          pathnameBase:
            w.pathnameBase === "/"
              ? s
              : Ht([
                  s,
                  i.encodeLocation
                    ? i.encodeLocation(w.pathnameBase).pathname
                    : w.pathnameBase,
                ]),
        })
      ),
    o,
    n,
    r
  );
}
function R0() {
  let e = D0(),
    t = Fl(e)
      ? e.status + " " + e.statusText
      : e instanceof Error
      ? e.message
      : JSON.stringify(e),
    n = e instanceof Error ? e.stack : null,
    i = { padding: "0.5rem", backgroundColor: "rgba(200,200,200, 0.5)" };
  return N.createElement(
    N.Fragment,
    null,
    N.createElement("h2", null, "Unexpected Application Error!"),
    N.createElement("h3", { style: { fontStyle: "italic" } }, t),
    n ? N.createElement("pre", { style: i }, n) : null,
    null
  );
}
const L0 = N.createElement(R0, null);
class T0 extends N.Component {
  constructor(t) {
    super(t),
      (this.state = {
        location: t.location,
        revalidation: t.revalidation,
        error: t.error,
      });
  }
  static getDerivedStateFromError(t) {
    return { error: t };
  }
  static getDerivedStateFromProps(t, n) {
    return n.location !== t.location ||
      (n.revalidation !== "idle" && t.revalidation === "idle")
      ? { error: t.error, location: t.location, revalidation: t.revalidation }
      : {
          error: t.error !== void 0 ? t.error : n.error,
          location: n.location,
          revalidation: t.revalidation || n.revalidation,
        };
  }
  componentDidCatch(t, n) {
    console.error(
      "React Router caught the following error during render",
      t,
      n
    );
  }
  render() {
    return this.state.error !== void 0
      ? N.createElement(
          An.Provider,
          { value: this.props.routeContext },
          N.createElement(Vh.Provider, {
            value: this.state.error,
            children: this.props.component,
          })
        )
      : this.props.children;
  }
}
function O0(e) {
  let { routeContext: t, match: n, children: r } = e,
    i = N.useContext(qi);
  return (
    i &&
      i.static &&
      i.staticContext &&
      (n.route.errorElement || n.route.ErrorBoundary) &&
      (i.staticContext._deepestRenderedBoundaryId = n.route.id),
    N.createElement(An.Provider, { value: t }, r)
  );
}
function M0(e, t, n, r) {
  var i;
  if (
    (t === void 0 && (t = []),
    n === void 0 && (n = null),
    r === void 0 && (r = null),
    e == null)
  ) {
    var o;
    if ((o = n) != null && o.errors) e = n.matches;
    else return null;
  }
  let l = e,
    a = (i = n) == null ? void 0 : i.errors;
  if (a != null) {
    let f = l.findIndex(
      (c) => c.route.id && (a == null ? void 0 : a[c.route.id]) !== void 0
    );
    f >= 0 || Q(!1), (l = l.slice(0, Math.min(l.length, f + 1)));
  }
  let s = !1,
    u = -1;
  if (n && r && r.v7_partialHydration)
    for (let f = 0; f < l.length; f++) {
      let c = l[f];
      if (
        ((c.route.HydrateFallback || c.route.hydrateFallbackElement) && (u = f),
        c.route.id)
      ) {
        let { loaderData: p, errors: E } = n,
          x =
            c.route.loader &&
            p[c.route.id] === void 0 &&
            (!E || E[c.route.id] === void 0);
        if (c.route.lazy || x) {
          (s = !0), u >= 0 ? (l = l.slice(0, u + 1)) : (l = [l[0]]);
          break;
        }
      }
    }
  return l.reduceRight((f, c, p) => {
    let E,
      x = !1,
      w = null,
      P = null;
    n &&
      ((E = a && c.route.id ? a[c.route.id] : void 0),
      (w = c.route.errorElement || L0),
      s &&
        (u < 0 && p === 0
          ? ((x = !0), (P = null))
          : u === p &&
            ((x = !0), (P = c.route.hydrateFallbackElement || null))));
    let h = t.concat(l.slice(0, p + 1)),
      d = () => {
        let m;
        return (
          E
            ? (m = w)
            : x
            ? (m = P)
            : c.route.Component
            ? (m = N.createElement(c.route.Component, null))
            : c.route.element
            ? (m = c.route.element)
            : (m = f),
          N.createElement(O0, {
            match: c,
            routeContext: { outlet: f, matches: h, isDataRoute: n != null },
            children: m,
          })
        );
      };
    return n && (c.route.ErrorBoundary || c.route.errorElement || p === 0)
      ? N.createElement(T0, {
          location: n.location,
          revalidation: n.revalidation,
          component: w,
          error: E,
          children: d(),
          routeContext: { outlet: null, matches: h, isDataRoute: !0 },
        })
      : d();
  }, null);
}
var Qh = (function (e) {
    return (
      (e.UseBlocker = "useBlocker"),
      (e.UseRevalidator = "useRevalidator"),
      (e.UseNavigateStable = "useNavigate"),
      e
    );
  })(Qh || {}),
  yl = (function (e) {
    return (
      (e.UseBlocker = "useBlocker"),
      (e.UseLoaderData = "useLoaderData"),
      (e.UseActionData = "useActionData"),
      (e.UseRouteError = "useRouteError"),
      (e.UseNavigation = "useNavigation"),
      (e.UseRouteLoaderData = "useRouteLoaderData"),
      (e.UseMatches = "useMatches"),
      (e.UseRevalidator = "useRevalidator"),
      (e.UseNavigateStable = "useNavigate"),
      (e.UseRouteId = "useRouteId"),
      e
    );
  })(yl || {});
function A0(e) {
  let t = N.useContext(qi);
  return t || Q(!1), t;
}
function z0(e) {
  let t = N.useContext(Vu);
  return t || Q(!1), t;
}
function j0(e) {
  let t = N.useContext(An);
  return t || Q(!1), t;
}
function Kh(e) {
  let t = j0(),
    n = t.matches[t.matches.length - 1];
  return n.route.id || Q(!1), n.route.id;
}
function D0() {
  var e;
  let t = N.useContext(Vh),
    n = z0(yl.UseRouteError),
    r = Kh(yl.UseRouteError);
  return t !== void 0 ? t : (e = n.errors) == null ? void 0 : e[r];
}
function I0() {
  let { router: e } = A0(Qh.UseNavigateStable),
    t = Kh(yl.UseNavigateStable),
    n = N.useRef(!1);
  return (
    Yh(() => {
      n.current = !0;
    }),
    N.useCallback(
      function (i, o) {
        o === void 0 && (o = {}),
          n.current &&
            (typeof i == "number"
              ? e.navigate(i)
              : e.navigate(i, gl({ fromRouteId: t }, o)));
      },
      [e, t]
    )
  );
}
function F0(e) {
  return _0(e.context);
}
function U0(e) {
  let {
    basename: t = "/",
    children: n = null,
    location: r,
    navigationType: i = Ce.Pop,
    navigator: o,
    static: l = !1,
    future: a,
  } = e;
  eo() && Q(!1);
  let s = t.replace(/^\/*/, "/"),
    u = N.useMemo(
      () => ({
        basename: s,
        navigator: o,
        static: l,
        future: gl({ v7_relativeSplatPath: !1 }, a),
      }),
      [s, a, o, l]
    );
  typeof r == "string" && (r = On(r));
  let {
      pathname: f = "/",
      search: c = "",
      hash: p = "",
      state: E = null,
      key: x = "default",
    } = r,
    w = N.useMemo(() => {
      let P = Xt(f, s);
      return P == null
        ? null
        : {
            location: { pathname: P, search: c, hash: p, state: E, key: x },
            navigationType: i,
          };
    }, [s, f, c, p, E, x, i]);
  return w == null
    ? null
    : N.createElement(
        Mn.Provider,
        { value: u },
        N.createElement(Yu.Provider, { children: n, value: w })
      );
}
new Promise(() => {});
function b0(e) {
  let t = {
    hasErrorBoundary: e.ErrorBoundary != null || e.errorElement != null,
  };
  return (
    e.Component &&
      Object.assign(t, {
        element: N.createElement(e.Component),
        Component: void 0,
      }),
    e.HydrateFallback &&
      Object.assign(t, {
        hydrateFallbackElement: N.createElement(e.HydrateFallback),
        HydrateFallback: void 0,
      }),
    e.ErrorBoundary &&
      Object.assign(t, {
        errorElement: N.createElement(e.ErrorBoundary),
        ErrorBoundary: void 0,
      }),
    t
  );
}
/**
 * React Router DOM v6.25.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function $r() {
  return (
    ($r = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    $r.apply(this, arguments)
  );
}
function Xh(e, t) {
  if (e == null) return {};
  var n = {},
    r = Object.keys(e),
    i,
    o;
  for (o = 0; o < r.length; o++)
    (i = r[o]), !(t.indexOf(i) >= 0) && (n[i] = e[i]);
  return n;
}
function B0(e) {
  return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
}
function $0(e, t) {
  return e.button === 0 && (!t || t === "_self") && !B0(e);
}
const W0 = [
    "onClick",
    "relative",
    "reloadDocument",
    "replace",
    "state",
    "target",
    "to",
    "preventScrollReset",
    "unstable_viewTransition",
  ],
  H0 = [
    "aria-current",
    "caseSensitive",
    "className",
    "end",
    "style",
    "to",
    "unstable_viewTransition",
    "children",
  ],
  V0 = "6";
try {
  window.__reactRouterVersion = V0;
} catch {}
function Y0(e, t) {
  return n0({
    basename: void 0,
    future: $r({}, void 0, { v7_prependBasename: !0 }),
    history: _1({ window: void 0 }),
    hydrationData: Q0(),
    routes: e,
    mapRouteProperties: b0,
    unstable_dataStrategy: void 0,
    unstable_patchRoutesOnMiss: void 0,
    window: void 0,
  }).initialize();
}
function Q0() {
  var e;
  let t = (e = window) == null ? void 0 : e.__staticRouterHydrationData;
  return t && t.errors && (t = $r({}, t, { errors: K0(t.errors) })), t;
}
function K0(e) {
  if (!e) return null;
  let t = Object.entries(e),
    n = {};
  for (let [r, i] of t)
    if (i && i.__type === "RouteErrorResponse")
      n[r] = new $u(i.status, i.statusText, i.data, i.internal === !0);
    else if (i && i.__type === "Error") {
      if (i.__subType) {
        let o = window[i.__subType];
        if (typeof o == "function")
          try {
            let l = new o(i.message);
            (l.stack = ""), (n[r] = l);
          } catch {}
      }
      if (n[r] == null) {
        let o = new Error(i.message);
        (o.stack = ""), (n[r] = o);
      }
    } else n[r] = i;
  return n;
}
const Gh = N.createContext({ isTransitioning: !1 }),
  X0 = N.createContext(new Map()),
  G0 = "startTransition",
  Wf = pv[G0],
  J0 = "flushSync",
  Hf = P1[J0];
function Z0(e) {
  Wf ? Wf(e) : e();
}
function si(e) {
  Hf ? Hf(e) : e();
}
class q0 {
  constructor() {
    (this.status = "pending"),
      (this.promise = new Promise((t, n) => {
        (this.resolve = (r) => {
          this.status === "pending" && ((this.status = "resolved"), t(r));
        }),
          (this.reject = (r) => {
            this.status === "pending" && ((this.status = "rejected"), n(r));
          });
      }));
  }
}
function ey(e) {
  let { fallbackElement: t, router: n, future: r } = e,
    [i, o] = N.useState(n.state),
    [l, a] = N.useState(),
    [s, u] = N.useState({ isTransitioning: !1 }),
    [f, c] = N.useState(),
    [p, E] = N.useState(),
    [x, w] = N.useState(),
    P = N.useRef(new Map()),
    { v7_startTransition: h } = r || {},
    d = N.useCallback(
      (T) => {
        h ? Z0(T) : T();
      },
      [h]
    ),
    m = N.useCallback(
      (T, I) => {
        let {
          deletedFetchers: D,
          unstable_flushSync: G,
          unstable_viewTransitionOpts: fe,
        } = I;
        D.forEach((ie) => P.current.delete(ie)),
          T.fetchers.forEach((ie, Ct) => {
            ie.data !== void 0 && P.current.set(Ct, ie.data);
          });
        let Re =
          n.window == null ||
          n.window.document == null ||
          typeof n.window.document.startViewTransition != "function";
        if (!fe || Re) {
          G ? si(() => o(T)) : d(() => o(T));
          return;
        }
        if (G) {
          si(() => {
            p && (f && f.resolve(), p.skipTransition()),
              u({
                isTransitioning: !0,
                flushSync: !0,
                currentLocation: fe.currentLocation,
                nextLocation: fe.nextLocation,
              });
          });
          let ie = n.window.document.startViewTransition(() => {
            si(() => o(T));
          });
          ie.finished.finally(() => {
            si(() => {
              c(void 0), E(void 0), a(void 0), u({ isTransitioning: !1 });
            });
          }),
            si(() => E(ie));
          return;
        }
        p
          ? (f && f.resolve(),
            p.skipTransition(),
            w({
              state: T,
              currentLocation: fe.currentLocation,
              nextLocation: fe.nextLocation,
            }))
          : (a(T),
            u({
              isTransitioning: !0,
              flushSync: !1,
              currentLocation: fe.currentLocation,
              nextLocation: fe.nextLocation,
            }));
      },
      [n.window, p, f, P, d]
    );
  N.useLayoutEffect(() => n.subscribe(m), [n, m]),
    N.useEffect(() => {
      s.isTransitioning && !s.flushSync && c(new q0());
    }, [s]),
    N.useEffect(() => {
      if (f && l && n.window) {
        let T = l,
          I = f.promise,
          D = n.window.document.startViewTransition(async () => {
            d(() => o(T)), await I;
          });
        D.finished.finally(() => {
          c(void 0), E(void 0), a(void 0), u({ isTransitioning: !1 });
        }),
          E(D);
      }
    }, [d, l, f, n.window]),
    N.useEffect(() => {
      f && l && i.location.key === l.location.key && f.resolve();
    }, [f, p, i.location, l]),
    N.useEffect(() => {
      !s.isTransitioning &&
        x &&
        (a(x.state),
        u({
          isTransitioning: !0,
          flushSync: !1,
          currentLocation: x.currentLocation,
          nextLocation: x.nextLocation,
        }),
        w(void 0));
    }, [s.isTransitioning, x]),
    N.useEffect(() => {}, []);
  let k = N.useMemo(
      () => ({
        createHref: n.createHref,
        encodeLocation: n.encodeLocation,
        go: (T) => n.navigate(T),
        push: (T, I, D) =>
          n.navigate(T, {
            state: I,
            preventScrollReset: D == null ? void 0 : D.preventScrollReset,
          }),
        replace: (T, I, D) =>
          n.navigate(T, {
            replace: !0,
            state: I,
            preventScrollReset: D == null ? void 0 : D.preventScrollReset,
          }),
      }),
      [n]
    ),
    _ = n.basename || "/",
    g = N.useMemo(
      () => ({ router: n, navigator: k, static: !1, basename: _ }),
      [n, k, _]
    ),
    O = N.useMemo(
      () => ({ v7_relativeSplatPath: n.future.v7_relativeSplatPath }),
      [n.future.v7_relativeSplatPath]
    );
  return N.createElement(
    N.Fragment,
    null,
    N.createElement(
      qi.Provider,
      { value: g },
      N.createElement(
        Vu.Provider,
        { value: i },
        N.createElement(
          X0.Provider,
          { value: P.current },
          N.createElement(
            Gh.Provider,
            { value: s },
            N.createElement(
              U0,
              {
                basename: _,
                location: i.location,
                navigationType: i.historyAction,
                navigator: k,
                future: O,
              },
              i.initialized || n.future.v7_partialHydration
                ? N.createElement(ty, {
                    routes: n.routes,
                    future: n.future,
                    state: i,
                  })
                : t
            )
          )
        )
      )
    ),
    null
  );
}
const ty = N.memo(ny);
function ny(e) {
  let { routes: t, future: n, state: r } = e;
  return N0(t, void 0, r, n);
}
const ry =
    typeof window < "u" &&
    typeof window.document < "u" &&
    typeof window.document.createElement < "u",
  iy = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  oy = N.forwardRef(function (t, n) {
    let {
        onClick: r,
        relative: i,
        reloadDocument: o,
        replace: l,
        state: a,
        target: s,
        to: u,
        preventScrollReset: f,
        unstable_viewTransition: c,
      } = t,
      p = Xh(t, W0),
      { basename: E } = N.useContext(Mn),
      x,
      w = !1;
    if (typeof u == "string" && iy.test(u) && ((x = u), ry))
      try {
        let m = new URL(window.location.href),
          k = u.startsWith("//") ? new URL(m.protocol + u) : new URL(u),
          _ = Xt(k.pathname, E);
        k.origin === m.origin && _ != null
          ? (u = _ + k.search + k.hash)
          : (w = !0);
      } catch {}
    let P = E0(u, { relative: i }),
      h = ay(u, {
        replace: l,
        state: a,
        target: s,
        preventScrollReset: f,
        relative: i,
        unstable_viewTransition: c,
      });
    function d(m) {
      r && r(m), m.defaultPrevented || h(m);
    }
    return N.createElement(
      "a",
      $r({}, p, { href: x || P, onClick: w || o ? r : d, ref: n, target: s })
    );
  }),
  Lo = N.forwardRef(function (t, n) {
    let {
        "aria-current": r = "page",
        caseSensitive: i = !1,
        className: o = "",
        end: l = !1,
        style: a,
        to: s,
        unstable_viewTransition: u,
        children: f,
      } = t,
      c = Xh(t, H0),
      p = Ul(s, { relative: c.relative }),
      E = to(),
      x = N.useContext(Vu),
      { navigator: w, basename: P } = N.useContext(Mn),
      h = x != null && sy(p) && u === !0,
      d = w.encodeLocation ? w.encodeLocation(p).pathname : p.pathname,
      m = E.pathname,
      k =
        x && x.navigation && x.navigation.location
          ? x.navigation.location.pathname
          : null;
    i ||
      ((m = m.toLowerCase()),
      (k = k ? k.toLowerCase() : null),
      (d = d.toLowerCase())),
      k && P && (k = Xt(k, P) || k);
    const _ = d !== "/" && d.endsWith("/") ? d.length - 1 : d.length;
    let g = m === d || (!l && m.startsWith(d) && m.charAt(_) === "/"),
      O =
        k != null &&
        (k === d || (!l && k.startsWith(d) && k.charAt(d.length) === "/")),
      T = { isActive: g, isPending: O, isTransitioning: h },
      I = g ? r : void 0,
      D;
    typeof o == "function"
      ? (D = o(T))
      : (D = [
          o,
          g ? "active" : null,
          O ? "pending" : null,
          h ? "transitioning" : null,
        ]
          .filter(Boolean)
          .join(" "));
    let G = typeof a == "function" ? a(T) : a;
    return N.createElement(
      oy,
      $r({}, c, {
        "aria-current": I,
        className: D,
        ref: n,
        style: G,
        to: s,
        unstable_viewTransition: u,
      }),
      typeof f == "function" ? f(T) : f
    );
  });
var Ps;
(function (e) {
  (e.UseScrollRestoration = "useScrollRestoration"),
    (e.UseSubmit = "useSubmit"),
    (e.UseSubmitFetcher = "useSubmitFetcher"),
    (e.UseFetcher = "useFetcher"),
    (e.useViewTransitionState = "useViewTransitionState");
})(Ps || (Ps = {}));
var Vf;
(function (e) {
  (e.UseFetcher = "useFetcher"),
    (e.UseFetchers = "useFetchers"),
    (e.UseScrollRestoration = "useScrollRestoration");
})(Vf || (Vf = {}));
function ly(e) {
  let t = N.useContext(qi);
  return t || Q(!1), t;
}
function ay(e, t) {
  let {
      target: n,
      replace: r,
      state: i,
      preventScrollReset: o,
      relative: l,
      unstable_viewTransition: a,
    } = t === void 0 ? {} : t,
    s = k0(),
    u = to(),
    f = Ul(e, { relative: l });
  return N.useCallback(
    (c) => {
      if ($0(c, n)) {
        c.preventDefault();
        let p = r !== void 0 ? r : qn(u) === qn(f);
        s(e, {
          replace: p,
          state: i,
          preventScrollReset: o,
          relative: l,
          unstable_viewTransition: a,
        });
      }
    },
    [u, s, f, r, i, n, e, o, l, a]
  );
}
function sy(e, t) {
  t === void 0 && (t = {});
  let n = N.useContext(Gh);
  n == null && Q(!1);
  let { basename: r } = ly(Ps.useViewTransitionState),
    i = Ul(e, { relative: t.relative });
  if (!n.isTransitioning) return !1;
  let o = Xt(n.currentLocation.pathname, r) || n.currentLocation.pathname,
    l = Xt(n.nextLocation.pathname, r) || n.nextLocation.pathname;
  return vl(i.pathname, l) != null || vl(i.pathname, o) != null;
}
const uy = {
    prefix: "fas",
    iconName: "bars",
    icon: [
      448,
      512,
      ["navicon"],
      "f0c9",
      "M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z",
    ],
  },
  Jh = {
    prefix: "fas",
    iconName: "star",
    icon: [
      576,
      512,
      [11088, 61446],
      "f005",
      "M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z",
    ],
  },
  cy = {
    prefix: "fas",
    iconName: "plus",
    icon: [
      448,
      512,
      [10133, 61543, "add"],
      "2b",
      "M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 144L48 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l144 0 0 144c0 17.7 14.3 32 32 32s32-14.3 32-32l0-144 144 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-144 0 0-144z",
    ],
  },
  Yf = () => {};
let Qu = {},
  Zh = {},
  qh = null,
  em = { mark: Yf, measure: Yf };
try {
  typeof window < "u" && (Qu = window),
    typeof document < "u" && (Zh = document),
    typeof MutationObserver < "u" && (qh = MutationObserver),
    typeof performance < "u" && (em = performance);
} catch {}
const { userAgent: Qf = "" } = Qu.navigator || {},
  Pn = Qu,
  ce = Zh,
  Kf = qh,
  To = em;
Pn.document;
const qt =
    !!ce.documentElement &&
    !!ce.head &&
    typeof ce.addEventListener == "function" &&
    typeof ce.createElement == "function",
  tm = ~Qf.indexOf("MSIE") || ~Qf.indexOf("Trident/");
var me = "classic",
  nm = "duotone",
  rt = "sharp",
  it = "sharp-duotone",
  fy = [me, nm, rt, it],
  dy = {
    classic: { 900: "fas", 400: "far", normal: "far", 300: "fal", 100: "fat" },
    sharp: { 900: "fass", 400: "fasr", 300: "fasl", 100: "fast" },
    "sharp-duotone": { 900: "fasds" },
  },
  Xf = {
    kit: { fak: "kit", "fa-kit": "kit" },
    "kit-duotone": { fakd: "kit-duotone", "fa-kit-duotone": "kit-duotone" },
  },
  py = ["kit"],
  hy = /fa(s|r|l|t|d|b|k|kd|ss|sr|sl|st|sds)?[\-\ ]/,
  my =
    /Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit)?.*/i,
  vy = {
    "Font Awesome 5 Free": { 900: "fas", 400: "far" },
    "Font Awesome 5 Pro": { 900: "fas", 400: "far", normal: "far", 300: "fal" },
    "Font Awesome 5 Brands": { 400: "fab", normal: "fab" },
    "Font Awesome 5 Duotone": { 900: "fad" },
  },
  gy = {
    "Font Awesome 6 Free": { 900: "fas", 400: "far" },
    "Font Awesome 6 Pro": {
      900: "fas",
      400: "far",
      normal: "far",
      300: "fal",
      100: "fat",
    },
    "Font Awesome 6 Brands": { 400: "fab", normal: "fab" },
    "Font Awesome 6 Duotone": { 900: "fad" },
    "Font Awesome 6 Sharp": {
      900: "fass",
      400: "fasr",
      normal: "fasr",
      300: "fasl",
      100: "fast",
    },
    "Font Awesome 6 Sharp Duotone": { 900: "fasds" },
  },
  yy = {
    classic: {
      "fa-brands": "fab",
      "fa-duotone": "fad",
      "fa-light": "fal",
      "fa-regular": "far",
      "fa-solid": "fas",
      "fa-thin": "fat",
    },
    sharp: {
      "fa-solid": "fass",
      "fa-regular": "fasr",
      "fa-light": "fasl",
      "fa-thin": "fast",
    },
    "sharp-duotone": { "fa-solid": "fasds" },
  },
  wy = {
    classic: ["fas", "far", "fal", "fat"],
    sharp: ["fass", "fasr", "fasl", "fast"],
    "sharp-duotone": ["fasds"],
  },
  xy = {
    classic: {
      fab: "fa-brands",
      fad: "fa-duotone",
      fal: "fa-light",
      far: "fa-regular",
      fas: "fa-solid",
      fat: "fa-thin",
    },
    sharp: {
      fass: "fa-solid",
      fasr: "fa-regular",
      fasl: "fa-light",
      fast: "fa-thin",
    },
    "sharp-duotone": { fasds: "fa-solid" },
  },
  Sy = {
    classic: {
      solid: "fas",
      regular: "far",
      light: "fal",
      thin: "fat",
      duotone: "fad",
      brands: "fab",
    },
    sharp: { solid: "fass", regular: "fasr", light: "fasl", thin: "fast" },
    "sharp-duotone": { solid: "fasds" },
  },
  rm = {
    classic: {
      fa: "solid",
      fas: "solid",
      "fa-solid": "solid",
      far: "regular",
      "fa-regular": "regular",
      fal: "light",
      "fa-light": "light",
      fat: "thin",
      "fa-thin": "thin",
      fad: "duotone",
      "fa-duotone": "duotone",
      fab: "brands",
      "fa-brands": "brands",
    },
    sharp: {
      fa: "solid",
      fass: "solid",
      "fa-solid": "solid",
      fasr: "regular",
      "fa-regular": "regular",
      fasl: "light",
      "fa-light": "light",
      fast: "thin",
      "fa-thin": "thin",
    },
    "sharp-duotone": { fa: "solid", fasds: "solid", "fa-solid": "solid" },
  },
  Ey = ["solid", "regular", "light", "thin", "duotone", "brands"],
  im = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  ky = im.concat([11, 12, 13, 14, 15, 16, 17, 18, 19, 20]),
  hi = {
    GROUP: "duotone-group",
    SWAP_OPACITY: "swap-opacity",
    PRIMARY: "primary",
    SECONDARY: "secondary",
  },
  Cy = [
    ...Object.keys(wy),
    ...Ey,
    "2xs",
    "xs",
    "sm",
    "lg",
    "xl",
    "2xl",
    "beat",
    "border",
    "fade",
    "beat-fade",
    "bounce",
    "flip-both",
    "flip-horizontal",
    "flip-vertical",
    "flip",
    "fw",
    "inverse",
    "layers-counter",
    "layers-text",
    "layers",
    "li",
    "pull-left",
    "pull-right",
    "pulse",
    "rotate-180",
    "rotate-270",
    "rotate-90",
    "rotate-by",
    "shake",
    "spin-pulse",
    "spin-reverse",
    "spin",
    "stack-1x",
    "stack-2x",
    "stack",
    "ul",
    hi.GROUP,
    hi.SWAP_OPACITY,
    hi.PRIMARY,
    hi.SECONDARY,
  ]
    .concat(im.map((e) => "".concat(e, "x")))
    .concat(ky.map((e) => "w-".concat(e))),
  Py = {
    "Font Awesome Kit": { 400: "fak", normal: "fak" },
    "Font Awesome Kit Duotone": { 400: "fakd", normal: "fakd" },
  },
  _y = {
    kit: { "fa-kit": "fak" },
    "kit-duotone": { "fa-kit-duotone": "fakd" },
  },
  Ny = { kit: { fak: "fa-kit" }, "kit-duotone": { fakd: "fa-kit-duotone" } },
  Gf = { kit: { kit: "fak" }, "kit-duotone": { "kit-duotone": "fakd" } };
const Gt = "___FONT_AWESOME___",
  _s = 16,
  om = "fa",
  lm = "svg-inline--fa",
  er = "data-fa-i2svg",
  Ns = "data-fa-pseudo-element",
  Ry = "data-fa-pseudo-element-pending",
  Ku = "data-prefix",
  Xu = "data-icon",
  Jf = "fontawesome-i2svg",
  Ly = "async",
  Ty = ["HTML", "HEAD", "STYLE", "SCRIPT"],
  am = (() => {
    try {
      return !0;
    } catch {
      return !1;
    }
  })(),
  sm = [me, rt, it];
function no(e) {
  return new Proxy(e, {
    get(t, n) {
      return n in t ? t[n] : t[me];
    },
  });
}
const um = { ...rm };
um[me] = { ...rm[me], ...Xf.kit, ...Xf["kit-duotone"] };
const Yn = no(um),
  Rs = { ...Sy };
Rs[me] = { ...Rs[me], ...Gf.kit, ...Gf["kit-duotone"] };
const Yi = no(Rs),
  Ls = { ...xy };
Ls[me] = { ...Ls[me], ...Ny.kit };
const Qn = no(Ls),
  Ts = { ...yy };
Ts[me] = { ...Ts[me], ..._y.kit };
const Oy = no(Ts),
  My = hy,
  cm = "fa-layers-text",
  Ay = my,
  zy = { ...dy };
no(zy);
const jy = [
    "class",
    "data-prefix",
    "data-icon",
    "data-fa-transform",
    "data-fa-mask",
  ],
  Ca = hi,
  Wr = new Set();
Object.keys(Yi[me]).map(Wr.add.bind(Wr));
Object.keys(Yi[rt]).map(Wr.add.bind(Wr));
Object.keys(Yi[it]).map(Wr.add.bind(Wr));
const Dy = [...py, ...Cy],
  Pi = Pn.FontAwesomeConfig || {};
function Iy(e) {
  var t = ce.querySelector("script[" + e + "]");
  if (t) return t.getAttribute(e);
}
function Fy(e) {
  return e === "" ? !0 : e === "false" ? !1 : e === "true" ? !0 : e;
}
ce &&
  typeof ce.querySelector == "function" &&
  [
    ["data-family-prefix", "familyPrefix"],
    ["data-css-prefix", "cssPrefix"],
    ["data-family-default", "familyDefault"],
    ["data-style-default", "styleDefault"],
    ["data-replacement-class", "replacementClass"],
    ["data-auto-replace-svg", "autoReplaceSvg"],
    ["data-auto-add-css", "autoAddCss"],
    ["data-auto-a11y", "autoA11y"],
    ["data-search-pseudo-elements", "searchPseudoElements"],
    ["data-observe-mutations", "observeMutations"],
    ["data-mutate-approach", "mutateApproach"],
    ["data-keep-original-source", "keepOriginalSource"],
    ["data-measure-performance", "measurePerformance"],
    ["data-show-missing-icons", "showMissingIcons"],
  ].forEach((t) => {
    let [n, r] = t;
    const i = Fy(Iy(n));
    i != null && (Pi[r] = i);
  });
const fm = {
  styleDefault: "solid",
  familyDefault: "classic",
  cssPrefix: om,
  replacementClass: lm,
  autoReplaceSvg: !0,
  autoAddCss: !0,
  autoA11y: !0,
  searchPseudoElements: !1,
  observeMutations: !0,
  mutateApproach: "async",
  keepOriginalSource: !0,
  measurePerformance: !1,
  showMissingIcons: !0,
};
Pi.familyPrefix && (Pi.cssPrefix = Pi.familyPrefix);
const Hr = { ...fm, ...Pi };
Hr.autoReplaceSvg || (Hr.observeMutations = !1);
const F = {};
Object.keys(fm).forEach((e) => {
  Object.defineProperty(F, e, {
    enumerable: !0,
    set: function (t) {
      (Hr[e] = t), _i.forEach((n) => n(F));
    },
    get: function () {
      return Hr[e];
    },
  });
});
Object.defineProperty(F, "familyPrefix", {
  enumerable: !0,
  set: function (e) {
    (Hr.cssPrefix = e), _i.forEach((t) => t(F));
  },
  get: function () {
    return Hr.cssPrefix;
  },
});
Pn.FontAwesomeConfig = F;
const _i = [];
function Uy(e) {
  return (
    _i.push(e),
    () => {
      _i.splice(_i.indexOf(e), 1);
    }
  );
}
const ln = _s,
  Ot = { size: 16, x: 0, y: 0, rotate: 0, flipX: !1, flipY: !1 };
function by(e) {
  if (!e || !qt) return;
  const t = ce.createElement("style");
  t.setAttribute("type", "text/css"), (t.innerHTML = e);
  const n = ce.head.childNodes;
  let r = null;
  for (let i = n.length - 1; i > -1; i--) {
    const o = n[i],
      l = (o.tagName || "").toUpperCase();
    ["STYLE", "LINK"].indexOf(l) > -1 && (r = o);
  }
  return ce.head.insertBefore(t, r), e;
}
const By = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
function Qi() {
  let e = 12,
    t = "";
  for (; e-- > 0; ) t += By[(Math.random() * 62) | 0];
  return t;
}
function Kr(e) {
  const t = [];
  for (let n = (e || []).length >>> 0; n--; ) t[n] = e[n];
  return t;
}
function Gu(e) {
  return e.classList
    ? Kr(e.classList)
    : (e.getAttribute("class") || "").split(" ").filter((t) => t);
}
function dm(e) {
  return ""
    .concat(e)
    .replace(/&/g, "&amp;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}
function $y(e) {
  return Object.keys(e || {})
    .reduce((t, n) => t + "".concat(n, '="').concat(dm(e[n]), '" '), "")
    .trim();
}
function bl(e) {
  return Object.keys(e || {}).reduce(
    (t, n) => t + "".concat(n, ": ").concat(e[n].trim(), ";"),
    ""
  );
}
function Ju(e) {
  return (
    e.size !== Ot.size ||
    e.x !== Ot.x ||
    e.y !== Ot.y ||
    e.rotate !== Ot.rotate ||
    e.flipX ||
    e.flipY
  );
}
function Wy(e) {
  let { transform: t, containerWidth: n, iconWidth: r } = e;
  const i = { transform: "translate(".concat(n / 2, " 256)") },
    o = "translate(".concat(t.x * 32, ", ").concat(t.y * 32, ") "),
    l = "scale("
      .concat((t.size / 16) * (t.flipX ? -1 : 1), ", ")
      .concat((t.size / 16) * (t.flipY ? -1 : 1), ") "),
    a = "rotate(".concat(t.rotate, " 0 0)"),
    s = { transform: "".concat(o, " ").concat(l, " ").concat(a) },
    u = { transform: "translate(".concat((r / 2) * -1, " -256)") };
  return { outer: i, inner: s, path: u };
}
function Hy(e) {
  let {
      transform: t,
      width: n = _s,
      height: r = _s,
      startCentered: i = !1,
    } = e,
    o = "";
  return (
    i && tm
      ? (o += "translate("
          .concat(t.x / ln - n / 2, "em, ")
          .concat(t.y / ln - r / 2, "em) "))
      : i
      ? (o += "translate(calc(-50% + "
          .concat(t.x / ln, "em), calc(-50% + ")
          .concat(t.y / ln, "em)) "))
      : (o += "translate(".concat(t.x / ln, "em, ").concat(t.y / ln, "em) ")),
    (o += "scale("
      .concat((t.size / ln) * (t.flipX ? -1 : 1), ", ")
      .concat((t.size / ln) * (t.flipY ? -1 : 1), ") ")),
    (o += "rotate(".concat(t.rotate, "deg) ")),
    o
  );
}
var Vy = `:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Free";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Free";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Pro";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Pro";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-duotone-solid: normal 900 1em/1 "Font Awesome 6 Sharp Duotone";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-counter-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(-1 * var(--fa-li-width, 2em));
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  animation-name: fa-beat;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  animation-name: fa-bounce;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  animation-name: fa-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  animation-name: fa-beat-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  animation-name: fa-flip;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  animation-name: fa-shake;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  animation-name: fa-spin;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 2s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  animation-name: fa-spin;
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    animation-delay: -1ms;
    animation-duration: 1ms;
    animation-iteration-count: 1;
    transition-delay: 0s;
    transition-duration: 0s;
  }
}
@keyframes fa-beat {
  0%, 90% {
    transform: scale(1);
  }
  45% {
    transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-bounce {
  0% {
    transform: scale(1, 1) translateY(0);
  }
  10% {
    transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    transform: scale(1, 1) translateY(0);
  }
  100% {
    transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    transform: scale(1);
  }
  50% {
    opacity: 1;
    transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-flip {
  50% {
    transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-shake {
  0% {
    transform: rotate(-15deg);
  }
  4% {
    transform: rotate(15deg);
  }
  8%, 24% {
    transform: rotate(-18deg);
  }
  12%, 28% {
    transform: rotate(18deg);
  }
  16% {
    transform: rotate(-22deg);
  }
  20% {
    transform: rotate(22deg);
  }
  32% {
    transform: rotate(-12deg);
  }
  36% {
    transform: rotate(12deg);
  }
  40%, 100% {
    transform: rotate(0deg);
  }
}
@keyframes fa-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  transform: rotate(90deg);
}

.fa-rotate-180 {
  transform: rotate(180deg);
}

.fa-rotate-270 {
  transform: rotate(270deg);
}

.fa-flip-horizontal {
  transform: scale(-1, 1);
}

.fa-flip-vertical {
  transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  transform: scale(-1, -1);
}

.fa-rotate-by {
  transform: rotate(var(--fa-rotate-angle, 0));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;
function pm() {
  const e = om,
    t = lm,
    n = F.cssPrefix,
    r = F.replacementClass;
  let i = Vy;
  if (n !== e || r !== t) {
    const o = new RegExp("\\.".concat(e, "\\-"), "g"),
      l = new RegExp("\\--".concat(e, "\\-"), "g"),
      a = new RegExp("\\.".concat(t), "g");
    i = i
      .replace(o, ".".concat(n, "-"))
      .replace(l, "--".concat(n, "-"))
      .replace(a, ".".concat(r));
  }
  return i;
}
let Zf = !1;
function Pa() {
  F.autoAddCss && !Zf && (by(pm()), (Zf = !0));
}
var Yy = {
  mixout() {
    return { dom: { css: pm, insertCss: Pa } };
  },
  hooks() {
    return {
      beforeDOMElementCreation() {
        Pa();
      },
      beforeI2svg() {
        Pa();
      },
    };
  },
};
const Jt = Pn || {};
Jt[Gt] || (Jt[Gt] = {});
Jt[Gt].styles || (Jt[Gt].styles = {});
Jt[Gt].hooks || (Jt[Gt].hooks = {});
Jt[Gt].shims || (Jt[Gt].shims = []);
var Mt = Jt[Gt];
const hm = [],
  mm = function () {
    ce.removeEventListener("DOMContentLoaded", mm),
      (wl = 1),
      hm.map((e) => e());
  };
let wl = !1;
qt &&
  ((wl = (ce.documentElement.doScroll ? /^loaded|^c/ : /^loaded|^i|^c/).test(
    ce.readyState
  )),
  wl || ce.addEventListener("DOMContentLoaded", mm));
function Qy(e) {
  qt && (wl ? setTimeout(e, 0) : hm.push(e));
}
function ro(e) {
  const { tag: t, attributes: n = {}, children: r = [] } = e;
  return typeof e == "string"
    ? dm(e)
    : "<"
        .concat(t, " ")
        .concat($y(n), ">")
        .concat(r.map(ro).join(""), "</")
        .concat(t, ">");
}
function qf(e, t, n) {
  if (e && e[t] && e[t][n]) return { prefix: t, iconName: n, icon: e[t][n] };
}
var _a = function (t, n, r, i) {
  var o = Object.keys(t),
    l = o.length,
    a = n,
    s,
    u,
    f;
  for (r === void 0 ? ((s = 1), (f = t[o[0]])) : ((s = 0), (f = r)); s < l; s++)
    (u = o[s]), (f = a(f, t[u], u, t));
  return f;
};
function Ky(e) {
  const t = [];
  let n = 0;
  const r = e.length;
  for (; n < r; ) {
    const i = e.charCodeAt(n++);
    if (i >= 55296 && i <= 56319 && n < r) {
      const o = e.charCodeAt(n++);
      (o & 64512) == 56320
        ? t.push(((i & 1023) << 10) + (o & 1023) + 65536)
        : (t.push(i), n--);
    } else t.push(i);
  }
  return t;
}
function Os(e) {
  const t = Ky(e);
  return t.length === 1 ? t[0].toString(16) : null;
}
function Xy(e, t) {
  const n = e.length;
  let r = e.charCodeAt(t),
    i;
  return r >= 55296 &&
    r <= 56319 &&
    n > t + 1 &&
    ((i = e.charCodeAt(t + 1)), i >= 56320 && i <= 57343)
    ? (r - 55296) * 1024 + i - 56320 + 65536
    : r;
}
function ed(e) {
  return Object.keys(e).reduce((t, n) => {
    const r = e[n];
    return !!r.icon ? (t[r.iconName] = r.icon) : (t[n] = r), t;
  }, {});
}
function Ms(e, t) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  const { skipHooks: r = !1 } = n,
    i = ed(t);
  typeof Mt.hooks.addPack == "function" && !r
    ? Mt.hooks.addPack(e, ed(t))
    : (Mt.styles[e] = { ...(Mt.styles[e] || {}), ...i }),
    e === "fas" && Ms("fa", t);
}
const { styles: Fn, shims: Gy } = Mt,
  Jy = {
    [me]: Object.values(Qn[me]),
    [rt]: Object.values(Qn[rt]),
    [it]: Object.values(Qn[it]),
  };
let Zu = null,
  vm = {},
  gm = {},
  ym = {},
  wm = {},
  xm = {};
const Zy = {
  [me]: Object.keys(Yn[me]),
  [rt]: Object.keys(Yn[rt]),
  [it]: Object.keys(Yn[it]),
};
function qy(e) {
  return ~Dy.indexOf(e);
}
function e2(e, t) {
  const n = t.split("-"),
    r = n[0],
    i = n.slice(1).join("-");
  return r === e && i !== "" && !qy(i) ? i : null;
}
const Sm = () => {
  const e = (r) => _a(Fn, (i, o, l) => ((i[l] = _a(o, r, {})), i), {});
  (vm = e(
    (r, i, o) => (
      i[3] && (r[i[3]] = o),
      i[2] &&
        i[2]
          .filter((a) => typeof a == "number")
          .forEach((a) => {
            r[a.toString(16)] = o;
          }),
      r
    )
  )),
    (gm = e(
      (r, i, o) => (
        (r[o] = o),
        i[2] &&
          i[2]
            .filter((a) => typeof a == "string")
            .forEach((a) => {
              r[a] = o;
            }),
        r
      )
    )),
    (xm = e((r, i, o) => {
      const l = i[2];
      return (
        (r[o] = o),
        l.forEach((a) => {
          r[a] = o;
        }),
        r
      );
    }));
  const t = "far" in Fn || F.autoFetchSvg,
    n = _a(
      Gy,
      (r, i) => {
        const o = i[0];
        let l = i[1];
        const a = i[2];
        return (
          l === "far" && !t && (l = "fas"),
          typeof o == "string" && (r.names[o] = { prefix: l, iconName: a }),
          typeof o == "number" &&
            (r.unicodes[o.toString(16)] = { prefix: l, iconName: a }),
          r
        );
      },
      { names: {}, unicodes: {} }
    );
  (ym = n.names),
    (wm = n.unicodes),
    (Zu = Bl(F.styleDefault, { family: F.familyDefault }));
};
Uy((e) => {
  Zu = Bl(e.styleDefault, { family: F.familyDefault });
});
Sm();
function qu(e, t) {
  return (vm[e] || {})[t];
}
function t2(e, t) {
  return (gm[e] || {})[t];
}
function hn(e, t) {
  return (xm[e] || {})[t];
}
function Em(e) {
  return ym[e] || { prefix: null, iconName: null };
}
function n2(e) {
  const t = wm[e],
    n = qu("fas", e);
  return (
    t ||
    (n ? { prefix: "fas", iconName: n } : null) || {
      prefix: null,
      iconName: null,
    }
  );
}
function _n() {
  return Zu;
}
const ec = () => ({ prefix: null, iconName: null, rest: [] });
function Bl(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  const { family: n = me } = t,
    r = Yn[n][e],
    i = Yi[n][e] || Yi[n][r],
    o = e in Mt.styles ? e : null;
  return i || o || null;
}
const r2 = {
  [me]: Object.keys(Qn[me]),
  [rt]: Object.keys(Qn[rt]),
  [it]: Object.keys(Qn[it]),
};
function $l(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  const { skipLookups: n = !1 } = t,
    r = {
      [me]: "".concat(F.cssPrefix, "-").concat(me),
      [rt]: "".concat(F.cssPrefix, "-").concat(rt),
      [it]: "".concat(F.cssPrefix, "-").concat(it),
    };
  let i = null,
    o = me;
  const l = fy.filter((s) => s !== nm);
  l.forEach((s) => {
    (e.includes(r[s]) || e.some((u) => r2[s].includes(u))) && (o = s);
  });
  const a = e.reduce((s, u) => {
    const f = e2(F.cssPrefix, u);
    if (
      (Fn[u]
        ? ((u = Jy[o].includes(u) ? Oy[o][u] : u), (i = u), (s.prefix = u))
        : Zy[o].indexOf(u) > -1
        ? ((i = u), (s.prefix = Bl(u, { family: o })))
        : f
        ? (s.iconName = f)
        : u !== F.replacementClass &&
          !l.some((c) => u === r[c]) &&
          s.rest.push(u),
      !n && s.prefix && s.iconName)
    ) {
      const c = i === "fa" ? Em(s.iconName) : {},
        p = hn(s.prefix, s.iconName);
      c.prefix && (i = null),
        (s.iconName = c.iconName || p || s.iconName),
        (s.prefix = c.prefix || s.prefix),
        s.prefix === "far" &&
          !Fn.far &&
          Fn.fas &&
          !F.autoFetchSvg &&
          (s.prefix = "fas");
    }
    return s;
  }, ec());
  return (
    (e.includes("fa-brands") || e.includes("fab")) && (a.prefix = "fab"),
    (e.includes("fa-duotone") || e.includes("fad")) && (a.prefix = "fad"),
    !a.prefix &&
      o === rt &&
      (Fn.fass || F.autoFetchSvg) &&
      ((a.prefix = "fass"),
      (a.iconName = hn(a.prefix, a.iconName) || a.iconName)),
    !a.prefix &&
      o === it &&
      (Fn.fasds || F.autoFetchSvg) &&
      ((a.prefix = "fasds"),
      (a.iconName = hn(a.prefix, a.iconName) || a.iconName)),
    (a.prefix === "fa" || i === "fa") && (a.prefix = _n() || "fas"),
    a
  );
}
class i2 {
  constructor() {
    this.definitions = {};
  }
  add() {
    for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)
      n[r] = arguments[r];
    const i = n.reduce(this._pullDefinitions, {});
    Object.keys(i).forEach((o) => {
      (this.definitions[o] = { ...(this.definitions[o] || {}), ...i[o] }),
        Ms(o, i[o]);
      const l = Qn[me][o];
      l && Ms(l, i[o]), Sm();
    });
  }
  reset() {
    this.definitions = {};
  }
  _pullDefinitions(t, n) {
    const r = n.prefix && n.iconName && n.icon ? { 0: n } : n;
    return (
      Object.keys(r).map((i) => {
        const { prefix: o, iconName: l, icon: a } = r[i],
          s = a[2];
        t[o] || (t[o] = {}),
          s.length > 0 &&
            s.forEach((u) => {
              typeof u == "string" && (t[o][u] = a);
            }),
          (t[o][l] = a);
      }),
      t
    );
  }
}
let td = [],
  Pr = {};
const Ar = {},
  o2 = Object.keys(Ar);
function l2(e, t) {
  let { mixoutsTo: n } = t;
  return (
    (td = e),
    (Pr = {}),
    Object.keys(Ar).forEach((r) => {
      o2.indexOf(r) === -1 && delete Ar[r];
    }),
    td.forEach((r) => {
      const i = r.mixout ? r.mixout() : {};
      if (
        (Object.keys(i).forEach((o) => {
          typeof i[o] == "function" && (n[o] = i[o]),
            typeof i[o] == "object" &&
              Object.keys(i[o]).forEach((l) => {
                n[o] || (n[o] = {}), (n[o][l] = i[o][l]);
              });
        }),
        r.hooks)
      ) {
        const o = r.hooks();
        Object.keys(o).forEach((l) => {
          Pr[l] || (Pr[l] = []), Pr[l].push(o[l]);
        });
      }
      r.provides && r.provides(Ar);
    }),
    n
  );
}
function As(e, t) {
  for (
    var n = arguments.length, r = new Array(n > 2 ? n - 2 : 0), i = 2;
    i < n;
    i++
  )
    r[i - 2] = arguments[i];
  return (
    (Pr[e] || []).forEach((l) => {
      t = l.apply(null, [t, ...r]);
    }),
    t
  );
}
function tr(e) {
  for (
    var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1;
    r < t;
    r++
  )
    n[r - 1] = arguments[r];
  (Pr[e] || []).forEach((o) => {
    o.apply(null, n);
  });
}
function Nn() {
  const e = arguments[0],
    t = Array.prototype.slice.call(arguments, 1);
  return Ar[e] ? Ar[e].apply(null, t) : void 0;
}
function zs(e) {
  e.prefix === "fa" && (e.prefix = "fas");
  let { iconName: t } = e;
  const n = e.prefix || _n();
  if (t)
    return (t = hn(n, t) || t), qf(km.definitions, n, t) || qf(Mt.styles, n, t);
}
const km = new i2(),
  a2 = () => {
    (F.autoReplaceSvg = !1), (F.observeMutations = !1), tr("noAuto");
  },
  s2 = {
    i2svg: function () {
      let e =
        arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
      return qt
        ? (tr("beforeI2svg", e), Nn("pseudoElements2svg", e), Nn("i2svg", e))
        : Promise.reject(new Error("Operation requires a DOM of some kind."));
    },
    watch: function () {
      let e =
        arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
      const { autoReplaceSvgRoot: t } = e;
      F.autoReplaceSvg === !1 && (F.autoReplaceSvg = !0),
        (F.observeMutations = !0),
        Qy(() => {
          c2({ autoReplaceSvgRoot: t }), tr("watch", e);
        });
    },
  },
  u2 = {
    icon: (e) => {
      if (e === null) return null;
      if (typeof e == "object" && e.prefix && e.iconName)
        return {
          prefix: e.prefix,
          iconName: hn(e.prefix, e.iconName) || e.iconName,
        };
      if (Array.isArray(e) && e.length === 2) {
        const t = e[1].indexOf("fa-") === 0 ? e[1].slice(3) : e[1],
          n = Bl(e[0]);
        return { prefix: n, iconName: hn(n, t) || t };
      }
      if (
        typeof e == "string" &&
        (e.indexOf("".concat(F.cssPrefix, "-")) > -1 || e.match(My))
      ) {
        const t = $l(e.split(" "), { skipLookups: !0 });
        return {
          prefix: t.prefix || _n(),
          iconName: hn(t.prefix, t.iconName) || t.iconName,
        };
      }
      if (typeof e == "string") {
        const t = _n();
        return { prefix: t, iconName: hn(t, e) || e };
      }
    },
  },
  st = {
    noAuto: a2,
    config: F,
    dom: s2,
    parse: u2,
    library: km,
    findIconDefinition: zs,
    toHtml: ro,
  },
  c2 = function () {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    const { autoReplaceSvgRoot: t = ce } = e;
    (Object.keys(Mt.styles).length > 0 || F.autoFetchSvg) &&
      qt &&
      F.autoReplaceSvg &&
      st.dom.i2svg({ node: t });
  };
function Wl(e, t) {
  return (
    Object.defineProperty(e, "abstract", { get: t }),
    Object.defineProperty(e, "html", {
      get: function () {
        return e.abstract.map((n) => ro(n));
      },
    }),
    Object.defineProperty(e, "node", {
      get: function () {
        if (!qt) return;
        const n = ce.createElement("div");
        return (n.innerHTML = e.html), n.children;
      },
    }),
    e
  );
}
function f2(e) {
  let {
    children: t,
    main: n,
    mask: r,
    attributes: i,
    styles: o,
    transform: l,
  } = e;
  if (Ju(l) && n.found && !r.found) {
    const { width: a, height: s } = n,
      u = { x: a / s / 2, y: 0.5 };
    i.style = bl({
      ...o,
      "transform-origin": ""
        .concat(u.x + l.x / 16, "em ")
        .concat(u.y + l.y / 16, "em"),
    });
  }
  return [{ tag: "svg", attributes: i, children: t }];
}
function d2(e) {
  let { prefix: t, iconName: n, children: r, attributes: i, symbol: o } = e;
  const l = o === !0 ? "".concat(t, "-").concat(F.cssPrefix, "-").concat(n) : o;
  return [
    {
      tag: "svg",
      attributes: { style: "display: none;" },
      children: [{ tag: "symbol", attributes: { ...i, id: l }, children: r }],
    },
  ];
}
function tc(e) {
  const {
      icons: { main: t, mask: n },
      prefix: r,
      iconName: i,
      transform: o,
      symbol: l,
      title: a,
      maskId: s,
      titleId: u,
      extra: f,
      watchable: c = !1,
    } = e,
    { width: p, height: E } = n.found ? n : t,
    x = r === "fak",
    w = [F.replacementClass, i ? "".concat(F.cssPrefix, "-").concat(i) : ""]
      .filter((_) => f.classes.indexOf(_) === -1)
      .filter((_) => _ !== "" || !!_)
      .concat(f.classes)
      .join(" ");
  let P = {
    children: [],
    attributes: {
      ...f.attributes,
      "data-prefix": r,
      "data-icon": i,
      class: w,
      role: f.attributes.role || "img",
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 ".concat(p, " ").concat(E),
    },
  };
  const h =
    x && !~f.classes.indexOf("fa-fw")
      ? { width: "".concat((p / E) * 16 * 0.0625, "em") }
      : {};
  c && (P.attributes[er] = ""),
    a &&
      (P.children.push({
        tag: "title",
        attributes: {
          id: P.attributes["aria-labelledby"] || "title-".concat(u || Qi()),
        },
        children: [a],
      }),
      delete P.attributes.title);
  const d = {
      ...P,
      prefix: r,
      iconName: i,
      main: t,
      mask: n,
      maskId: s,
      transform: o,
      symbol: l,
      styles: { ...h, ...f.styles },
    },
    { children: m, attributes: k } =
      n.found && t.found
        ? Nn("generateAbstractMask", d) || { children: [], attributes: {} }
        : Nn("generateAbstractIcon", d) || { children: [], attributes: {} };
  return (d.children = m), (d.attributes = k), l ? d2(d) : f2(d);
}
function nd(e) {
  const {
      content: t,
      width: n,
      height: r,
      transform: i,
      title: o,
      extra: l,
      watchable: a = !1,
    } = e,
    s = {
      ...l.attributes,
      ...(o ? { title: o } : {}),
      class: l.classes.join(" "),
    };
  a && (s[er] = "");
  const u = { ...l.styles };
  Ju(i) &&
    ((u.transform = Hy({
      transform: i,
      startCentered: !0,
      width: n,
      height: r,
    })),
    (u["-webkit-transform"] = u.transform));
  const f = bl(u);
  f.length > 0 && (s.style = f);
  const c = [];
  return (
    c.push({ tag: "span", attributes: s, children: [t] }),
    o &&
      c.push({ tag: "span", attributes: { class: "sr-only" }, children: [o] }),
    c
  );
}
function p2(e) {
  const { content: t, title: n, extra: r } = e,
    i = {
      ...r.attributes,
      ...(n ? { title: n } : {}),
      class: r.classes.join(" "),
    },
    o = bl(r.styles);
  o.length > 0 && (i.style = o);
  const l = [];
  return (
    l.push({ tag: "span", attributes: i, children: [t] }),
    n &&
      l.push({ tag: "span", attributes: { class: "sr-only" }, children: [n] }),
    l
  );
}
const { styles: Na } = Mt;
function js(e) {
  const t = e[0],
    n = e[1],
    [r] = e.slice(4);
  let i = null;
  return (
    Array.isArray(r)
      ? (i = {
          tag: "g",
          attributes: { class: "".concat(F.cssPrefix, "-").concat(Ca.GROUP) },
          children: [
            {
              tag: "path",
              attributes: {
                class: "".concat(F.cssPrefix, "-").concat(Ca.SECONDARY),
                fill: "currentColor",
                d: r[0],
              },
            },
            {
              tag: "path",
              attributes: {
                class: "".concat(F.cssPrefix, "-").concat(Ca.PRIMARY),
                fill: "currentColor",
                d: r[1],
              },
            },
          ],
        })
      : (i = { tag: "path", attributes: { fill: "currentColor", d: r } }),
    { found: !0, width: t, height: n, icon: i }
  );
}
const h2 = { found: !1, width: 512, height: 512 };
function m2(e, t) {
  !am &&
    !F.showMissingIcons &&
    e &&
    console.error(
      'Icon with name "'.concat(e, '" and prefix "').concat(t, '" is missing.')
    );
}
function Ds(e, t) {
  let n = t;
  return (
    t === "fa" && F.styleDefault !== null && (t = _n()),
    new Promise((r, i) => {
      if (n === "fa") {
        const o = Em(e) || {};
        (e = o.iconName || e), (t = o.prefix || t);
      }
      if (e && t && Na[t] && Na[t][e]) {
        const o = Na[t][e];
        return r(js(o));
      }
      m2(e, t),
        r({
          ...h2,
          icon: F.showMissingIcons && e ? Nn("missingIconAbstract") || {} : {},
        });
    })
  );
}
const rd = () => {},
  Is =
    F.measurePerformance && To && To.mark && To.measure
      ? To
      : { mark: rd, measure: rd },
  mi = 'FA "6.6.0"',
  v2 = (e) => (Is.mark("".concat(mi, " ").concat(e, " begins")), () => Cm(e)),
  Cm = (e) => {
    Is.mark("".concat(mi, " ").concat(e, " ends")),
      Is.measure(
        "".concat(mi, " ").concat(e),
        "".concat(mi, " ").concat(e, " begins"),
        "".concat(mi, " ").concat(e, " ends")
      );
  };
var nc = { begin: v2, end: Cm };
const Ho = () => {};
function id(e) {
  return typeof (e.getAttribute ? e.getAttribute(er) : null) == "string";
}
function g2(e) {
  const t = e.getAttribute ? e.getAttribute(Ku) : null,
    n = e.getAttribute ? e.getAttribute(Xu) : null;
  return t && n;
}
function y2(e) {
  return (
    e &&
    e.classList &&
    e.classList.contains &&
    e.classList.contains(F.replacementClass)
  );
}
function w2() {
  return F.autoReplaceSvg === !0
    ? Vo.replace
    : Vo[F.autoReplaceSvg] || Vo.replace;
}
function x2(e) {
  return ce.createElementNS("http://www.w3.org/2000/svg", e);
}
function S2(e) {
  return ce.createElement(e);
}
function Pm(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  const { ceFn: n = e.tag === "svg" ? x2 : S2 } = t;
  if (typeof e == "string") return ce.createTextNode(e);
  const r = n(e.tag);
  return (
    Object.keys(e.attributes || []).forEach(function (o) {
      r.setAttribute(o, e.attributes[o]);
    }),
    (e.children || []).forEach(function (o) {
      r.appendChild(Pm(o, { ceFn: n }));
    }),
    r
  );
}
function E2(e) {
  let t = " ".concat(e.outerHTML, " ");
  return (t = "".concat(t, "Font Awesome fontawesome.com ")), t;
}
const Vo = {
  replace: function (e) {
    const t = e[0];
    if (t.parentNode)
      if (
        (e[1].forEach((n) => {
          t.parentNode.insertBefore(Pm(n), t);
        }),
        t.getAttribute(er) === null && F.keepOriginalSource)
      ) {
        let n = ce.createComment(E2(t));
        t.parentNode.replaceChild(n, t);
      } else t.remove();
  },
  nest: function (e) {
    const t = e[0],
      n = e[1];
    if (~Gu(t).indexOf(F.replacementClass)) return Vo.replace(e);
    const r = new RegExp("".concat(F.cssPrefix, "-.*"));
    if ((delete n[0].attributes.id, n[0].attributes.class)) {
      const o = n[0].attributes.class
        .split(" ")
        .reduce(
          (l, a) => (
            a === F.replacementClass || a.match(r)
              ? l.toSvg.push(a)
              : l.toNode.push(a),
            l
          ),
          { toNode: [], toSvg: [] }
        );
      (n[0].attributes.class = o.toSvg.join(" ")),
        o.toNode.length === 0
          ? t.removeAttribute("class")
          : t.setAttribute("class", o.toNode.join(" "));
    }
    const i = n.map((o) => ro(o)).join(`
`);
    t.setAttribute(er, ""), (t.innerHTML = i);
  },
};
function od(e) {
  e();
}
function _m(e, t) {
  const n = typeof t == "function" ? t : Ho;
  if (e.length === 0) n();
  else {
    let r = od;
    F.mutateApproach === Ly && (r = Pn.requestAnimationFrame || od),
      r(() => {
        const i = w2(),
          o = nc.begin("mutate");
        e.map(i), o(), n();
      });
  }
}
let rc = !1;
function Nm() {
  rc = !0;
}
function Fs() {
  rc = !1;
}
let xl = null;
function ld(e) {
  if (!Kf || !F.observeMutations) return;
  const {
    treeCallback: t = Ho,
    nodeCallback: n = Ho,
    pseudoElementsCallback: r = Ho,
    observeMutationsRoot: i = ce,
  } = e;
  (xl = new Kf((o) => {
    if (rc) return;
    const l = _n();
    Kr(o).forEach((a) => {
      if (
        (a.type === "childList" &&
          a.addedNodes.length > 0 &&
          !id(a.addedNodes[0]) &&
          (F.searchPseudoElements && r(a.target), t(a.target)),
        a.type === "attributes" &&
          a.target.parentNode &&
          F.searchPseudoElements &&
          r(a.target.parentNode),
        a.type === "attributes" && id(a.target) && ~jy.indexOf(a.attributeName))
      )
        if (a.attributeName === "class" && g2(a.target)) {
          const { prefix: s, iconName: u } = $l(Gu(a.target));
          a.target.setAttribute(Ku, s || l), u && a.target.setAttribute(Xu, u);
        } else y2(a.target) && n(a.target);
    });
  })),
    qt &&
      xl.observe(i, {
        childList: !0,
        attributes: !0,
        characterData: !0,
        subtree: !0,
      });
}
function k2() {
  xl && xl.disconnect();
}
function C2(e) {
  const t = e.getAttribute("style");
  let n = [];
  return (
    t &&
      (n = t.split(";").reduce((r, i) => {
        const o = i.split(":"),
          l = o[0],
          a = o.slice(1);
        return l && a.length > 0 && (r[l] = a.join(":").trim()), r;
      }, {})),
    n
  );
}
function P2(e) {
  const t = e.getAttribute("data-prefix"),
    n = e.getAttribute("data-icon"),
    r = e.innerText !== void 0 ? e.innerText.trim() : "";
  let i = $l(Gu(e));
  return (
    i.prefix || (i.prefix = _n()),
    t && n && ((i.prefix = t), (i.iconName = n)),
    (i.iconName && i.prefix) ||
      (i.prefix &&
        r.length > 0 &&
        (i.iconName =
          t2(i.prefix, e.innerText) || qu(i.prefix, Os(e.innerText))),
      !i.iconName &&
        F.autoFetchSvg &&
        e.firstChild &&
        e.firstChild.nodeType === Node.TEXT_NODE &&
        (i.iconName = e.firstChild.data)),
    i
  );
}
function _2(e) {
  const t = Kr(e.attributes).reduce(
      (i, o) => (
        i.name !== "class" && i.name !== "style" && (i[o.name] = o.value), i
      ),
      {}
    ),
    n = e.getAttribute("title"),
    r = e.getAttribute("data-fa-title-id");
  return (
    F.autoA11y &&
      (n
        ? (t["aria-labelledby"] = ""
            .concat(F.replacementClass, "-title-")
            .concat(r || Qi()))
        : ((t["aria-hidden"] = "true"), (t.focusable = "false"))),
    t
  );
}
function N2() {
  return {
    iconName: null,
    title: null,
    titleId: null,
    prefix: null,
    transform: Ot,
    symbol: !1,
    mask: { iconName: null, prefix: null, rest: [] },
    maskId: null,
    extra: { classes: [], styles: {}, attributes: {} },
  };
}
function ad(e) {
  let t =
    arguments.length > 1 && arguments[1] !== void 0
      ? arguments[1]
      : { styleParser: !0 };
  const { iconName: n, prefix: r, rest: i } = P2(e),
    o = _2(e),
    l = As("parseNodeAttributes", {}, e);
  let a = t.styleParser ? C2(e) : [];
  return {
    iconName: n,
    title: e.getAttribute("title"),
    titleId: e.getAttribute("data-fa-title-id"),
    prefix: r,
    transform: Ot,
    mask: { iconName: null, prefix: null, rest: [] },
    maskId: null,
    symbol: !1,
    extra: { classes: i, styles: a, attributes: o },
    ...l,
  };
}
const { styles: R2 } = Mt;
function Rm(e) {
  const t = F.autoReplaceSvg === "nest" ? ad(e, { styleParser: !1 }) : ad(e);
  return ~t.extra.classes.indexOf(cm)
    ? Nn("generateLayersText", e, t)
    : Nn("generateSvgReplacementMutation", e, t);
}
let Dt = new Set();
sm.map((e) => {
  Dt.add("fa-".concat(e));
});
Object.keys(Yn[me]).map(Dt.add.bind(Dt));
Object.keys(Yn[rt]).map(Dt.add.bind(Dt));
Object.keys(Yn[it]).map(Dt.add.bind(Dt));
Dt = [...Dt];
function sd(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
  if (!qt) return Promise.resolve();
  const n = ce.documentElement.classList,
    r = (f) => n.add("".concat(Jf, "-").concat(f)),
    i = (f) => n.remove("".concat(Jf, "-").concat(f)),
    o = F.autoFetchSvg
      ? Dt
      : sm.map((f) => "fa-".concat(f)).concat(Object.keys(R2));
  o.includes("fa") || o.push("fa");
  const l = [".".concat(cm, ":not([").concat(er, "])")]
    .concat(o.map((f) => ".".concat(f, ":not([").concat(er, "])")))
    .join(", ");
  if (l.length === 0) return Promise.resolve();
  let a = [];
  try {
    a = Kr(e.querySelectorAll(l));
  } catch {}
  if (a.length > 0) r("pending"), i("complete");
  else return Promise.resolve();
  const s = nc.begin("onTree"),
    u = a.reduce((f, c) => {
      try {
        const p = Rm(c);
        p && f.push(p);
      } catch (p) {
        am || (p.name === "MissingIcon" && console.error(p));
      }
      return f;
    }, []);
  return new Promise((f, c) => {
    Promise.all(u)
      .then((p) => {
        _m(p, () => {
          r("active"),
            r("complete"),
            i("pending"),
            typeof t == "function" && t(),
            s(),
            f();
        });
      })
      .catch((p) => {
        s(), c(p);
      });
  });
}
function L2(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
  Rm(e).then((n) => {
    n && _m([n], t);
  });
}
function T2(e) {
  return function (t) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    const r = (t || {}).icon ? t : zs(t || {});
    let { mask: i } = n;
    return i && (i = (i || {}).icon ? i : zs(i || {})), e(r, { ...n, mask: i });
  };
}
const O2 = function (e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  const {
    transform: n = Ot,
    symbol: r = !1,
    mask: i = null,
    maskId: o = null,
    title: l = null,
    titleId: a = null,
    classes: s = [],
    attributes: u = {},
    styles: f = {},
  } = t;
  if (!e) return;
  const { prefix: c, iconName: p, icon: E } = e;
  return Wl(
    { type: "icon", ...e },
    () => (
      tr("beforeDOMElementCreation", { iconDefinition: e, params: t }),
      F.autoA11y &&
        (l
          ? (u["aria-labelledby"] = ""
              .concat(F.replacementClass, "-title-")
              .concat(a || Qi()))
          : ((u["aria-hidden"] = "true"), (u.focusable = "false"))),
      tc({
        icons: {
          main: js(E),
          mask: i
            ? js(i.icon)
            : { found: !1, width: null, height: null, icon: {} },
        },
        prefix: c,
        iconName: p,
        transform: { ...Ot, ...n },
        symbol: r,
        title: l,
        maskId: o,
        titleId: a,
        extra: { attributes: u, styles: f, classes: s },
      })
    )
  );
};
var M2 = {
    mixout() {
      return { icon: T2(O2) };
    },
    hooks() {
      return {
        mutationObserverCallbacks(e) {
          return (e.treeCallback = sd), (e.nodeCallback = L2), e;
        },
      };
    },
    provides(e) {
      (e.i2svg = function (t) {
        const { node: n = ce, callback: r = () => {} } = t;
        return sd(n, r);
      }),
        (e.generateSvgReplacementMutation = function (t, n) {
          const {
            iconName: r,
            title: i,
            titleId: o,
            prefix: l,
            transform: a,
            symbol: s,
            mask: u,
            maskId: f,
            extra: c,
          } = n;
          return new Promise((p, E) => {
            Promise.all([
              Ds(r, l),
              u.iconName
                ? Ds(u.iconName, u.prefix)
                : Promise.resolve({
                    found: !1,
                    width: 512,
                    height: 512,
                    icon: {},
                  }),
            ])
              .then((x) => {
                let [w, P] = x;
                p([
                  t,
                  tc({
                    icons: { main: w, mask: P },
                    prefix: l,
                    iconName: r,
                    transform: a,
                    symbol: s,
                    maskId: f,
                    title: i,
                    titleId: o,
                    extra: c,
                    watchable: !0,
                  }),
                ]);
              })
              .catch(E);
          });
        }),
        (e.generateAbstractIcon = function (t) {
          let {
            children: n,
            attributes: r,
            main: i,
            transform: o,
            styles: l,
          } = t;
          const a = bl(l);
          a.length > 0 && (r.style = a);
          let s;
          return (
            Ju(o) &&
              (s = Nn("generateAbstractTransformGrouping", {
                main: i,
                transform: o,
                containerWidth: i.width,
                iconWidth: i.width,
              })),
            n.push(s || i.icon),
            { children: n, attributes: r }
          );
        });
    },
  },
  A2 = {
    mixout() {
      return {
        layer(e) {
          let t =
            arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
          const { classes: n = [] } = t;
          return Wl({ type: "layer" }, () => {
            tr("beforeDOMElementCreation", { assembler: e, params: t });
            let r = [];
            return (
              e((i) => {
                Array.isArray(i)
                  ? i.map((o) => {
                      r = r.concat(o.abstract);
                    })
                  : (r = r.concat(i.abstract));
              }),
              [
                {
                  tag: "span",
                  attributes: {
                    class: ["".concat(F.cssPrefix, "-layers"), ...n].join(" "),
                  },
                  children: r,
                },
              ]
            );
          });
        },
      };
    },
  },
  z2 = {
    mixout() {
      return {
        counter(e) {
          let t =
            arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
          const {
            title: n = null,
            classes: r = [],
            attributes: i = {},
            styles: o = {},
          } = t;
          return Wl(
            { type: "counter", content: e },
            () => (
              tr("beforeDOMElementCreation", { content: e, params: t }),
              p2({
                content: e.toString(),
                title: n,
                extra: {
                  attributes: i,
                  styles: o,
                  classes: ["".concat(F.cssPrefix, "-layers-counter"), ...r],
                },
              })
            )
          );
        },
      };
    },
  },
  j2 = {
    mixout() {
      return {
        text(e) {
          let t =
            arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
          const {
            transform: n = Ot,
            title: r = null,
            classes: i = [],
            attributes: o = {},
            styles: l = {},
          } = t;
          return Wl(
            { type: "text", content: e },
            () => (
              tr("beforeDOMElementCreation", { content: e, params: t }),
              nd({
                content: e,
                transform: { ...Ot, ...n },
                title: r,
                extra: {
                  attributes: o,
                  styles: l,
                  classes: ["".concat(F.cssPrefix, "-layers-text"), ...i],
                },
              })
            )
          );
        },
      };
    },
    provides(e) {
      e.generateLayersText = function (t, n) {
        const { title: r, transform: i, extra: o } = n;
        let l = null,
          a = null;
        if (tm) {
          const s = parseInt(getComputedStyle(t).fontSize, 10),
            u = t.getBoundingClientRect();
          (l = u.width / s), (a = u.height / s);
        }
        return (
          F.autoA11y && !r && (o.attributes["aria-hidden"] = "true"),
          Promise.resolve([
            t,
            nd({
              content: t.innerHTML,
              width: l,
              height: a,
              transform: i,
              title: r,
              extra: o,
              watchable: !0,
            }),
          ])
        );
      };
    },
  };
const D2 = new RegExp('"', "ug"),
  ud = [1105920, 1112319],
  cd = { FontAwesome: { normal: "fas", 400: "fas" }, ...gy, ...vy, ...Py },
  Us = Object.keys(cd).reduce((e, t) => ((e[t.toLowerCase()] = cd[t]), e), {}),
  I2 = Object.keys(Us).reduce((e, t) => {
    const n = Us[t];
    return (e[t] = n[900] || [...Object.entries(n)][0][1]), e;
  }, {});
function F2(e) {
  const t = e.replace(D2, ""),
    n = Xy(t, 0),
    r = n >= ud[0] && n <= ud[1],
    i = t.length === 2 ? t[0] === t[1] : !1;
  return { value: Os(i ? t[0] : t), isSecondary: r || i };
}
function U2(e, t) {
  const n = e.replace(/^['"]|['"]$/g, "").toLowerCase(),
    r = parseInt(t),
    i = isNaN(r) ? "normal" : r;
  return (Us[n] || {})[i] || I2[n];
}
function fd(e, t) {
  const n = "".concat(Ry).concat(t.replace(":", "-"));
  return new Promise((r, i) => {
    if (e.getAttribute(n) !== null) return r();
    const l = Kr(e.children).filter((p) => p.getAttribute(Ns) === t)[0],
      a = Pn.getComputedStyle(e, t),
      s = a.getPropertyValue("font-family"),
      u = s.match(Ay),
      f = a.getPropertyValue("font-weight"),
      c = a.getPropertyValue("content");
    if (l && !u) return e.removeChild(l), r();
    if (u && c !== "none" && c !== "") {
      const p = a.getPropertyValue("content");
      let E = U2(s, f);
      const { value: x, isSecondary: w } = F2(p),
        P = u[0].startsWith("FontAwesome");
      let h = qu(E, x),
        d = h;
      if (P) {
        const m = n2(x);
        m.iconName && m.prefix && ((h = m.iconName), (E = m.prefix));
      }
      if (
        h &&
        !w &&
        (!l || l.getAttribute(Ku) !== E || l.getAttribute(Xu) !== d)
      ) {
        e.setAttribute(n, d), l && e.removeChild(l);
        const m = N2(),
          { extra: k } = m;
        (k.attributes[Ns] = t),
          Ds(h, E)
            .then((_) => {
              const g = tc({
                  ...m,
                  icons: { main: _, mask: ec() },
                  prefix: E,
                  iconName: d,
                  extra: k,
                  watchable: !0,
                }),
                O = ce.createElementNS("http://www.w3.org/2000/svg", "svg");
              t === "::before"
                ? e.insertBefore(O, e.firstChild)
                : e.appendChild(O),
                (O.outerHTML = g.map((T) => ro(T)).join(`
`)),
                e.removeAttribute(n),
                r();
            })
            .catch(i);
      } else r();
    } else r();
  });
}
function b2(e) {
  return Promise.all([fd(e, "::before"), fd(e, "::after")]);
}
function B2(e) {
  return (
    e.parentNode !== document.head &&
    !~Ty.indexOf(e.tagName.toUpperCase()) &&
    !e.getAttribute(Ns) &&
    (!e.parentNode || e.parentNode.tagName !== "svg")
  );
}
function dd(e) {
  if (qt)
    return new Promise((t, n) => {
      const r = Kr(e.querySelectorAll("*")).filter(B2).map(b2),
        i = nc.begin("searchPseudoElements");
      Nm(),
        Promise.all(r)
          .then(() => {
            i(), Fs(), t();
          })
          .catch(() => {
            i(), Fs(), n();
          });
    });
}
var $2 = {
  hooks() {
    return {
      mutationObserverCallbacks(e) {
        return (e.pseudoElementsCallback = dd), e;
      },
    };
  },
  provides(e) {
    e.pseudoElements2svg = function (t) {
      const { node: n = ce } = t;
      F.searchPseudoElements && dd(n);
    };
  },
};
let pd = !1;
var W2 = {
  mixout() {
    return {
      dom: {
        unwatch() {
          Nm(), (pd = !0);
        },
      },
    };
  },
  hooks() {
    return {
      bootstrap() {
        ld(As("mutationObserverCallbacks", {}));
      },
      noAuto() {
        k2();
      },
      watch(e) {
        const { observeMutationsRoot: t } = e;
        pd
          ? Fs()
          : ld(As("mutationObserverCallbacks", { observeMutationsRoot: t }));
      },
    };
  },
};
const hd = (e) => {
  let t = { size: 16, x: 0, y: 0, flipX: !1, flipY: !1, rotate: 0 };
  return e
    .toLowerCase()
    .split(" ")
    .reduce((n, r) => {
      const i = r.toLowerCase().split("-"),
        o = i[0];
      let l = i.slice(1).join("-");
      if (o && l === "h") return (n.flipX = !0), n;
      if (o && l === "v") return (n.flipY = !0), n;
      if (((l = parseFloat(l)), isNaN(l))) return n;
      switch (o) {
        case "grow":
          n.size = n.size + l;
          break;
        case "shrink":
          n.size = n.size - l;
          break;
        case "left":
          n.x = n.x - l;
          break;
        case "right":
          n.x = n.x + l;
          break;
        case "up":
          n.y = n.y - l;
          break;
        case "down":
          n.y = n.y + l;
          break;
        case "rotate":
          n.rotate = n.rotate + l;
          break;
      }
      return n;
    }, t);
};
var H2 = {
  mixout() {
    return { parse: { transform: (e) => hd(e) } };
  },
  hooks() {
    return {
      parseNodeAttributes(e, t) {
        const n = t.getAttribute("data-fa-transform");
        return n && (e.transform = hd(n)), e;
      },
    };
  },
  provides(e) {
    e.generateAbstractTransformGrouping = function (t) {
      let { main: n, transform: r, containerWidth: i, iconWidth: o } = t;
      const l = { transform: "translate(".concat(i / 2, " 256)") },
        a = "translate(".concat(r.x * 32, ", ").concat(r.y * 32, ") "),
        s = "scale("
          .concat((r.size / 16) * (r.flipX ? -1 : 1), ", ")
          .concat((r.size / 16) * (r.flipY ? -1 : 1), ") "),
        u = "rotate(".concat(r.rotate, " 0 0)"),
        f = { transform: "".concat(a, " ").concat(s, " ").concat(u) },
        c = { transform: "translate(".concat((o / 2) * -1, " -256)") },
        p = { outer: l, inner: f, path: c };
      return {
        tag: "g",
        attributes: { ...p.outer },
        children: [
          {
            tag: "g",
            attributes: { ...p.inner },
            children: [
              {
                tag: n.icon.tag,
                children: n.icon.children,
                attributes: { ...n.icon.attributes, ...p.path },
              },
            ],
          },
        ],
      };
    };
  },
};
const Ra = { x: 0, y: 0, width: "100%", height: "100%" };
function md(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
  return (
    e.attributes && (e.attributes.fill || t) && (e.attributes.fill = "black"), e
  );
}
function V2(e) {
  return e.tag === "g" ? e.children : [e];
}
var Y2 = {
    hooks() {
      return {
        parseNodeAttributes(e, t) {
          const n = t.getAttribute("data-fa-mask"),
            r = n ? $l(n.split(" ").map((i) => i.trim())) : ec();
          return (
            r.prefix || (r.prefix = _n()),
            (e.mask = r),
            (e.maskId = t.getAttribute("data-fa-mask-id")),
            e
          );
        },
      };
    },
    provides(e) {
      e.generateAbstractMask = function (t) {
        let {
          children: n,
          attributes: r,
          main: i,
          mask: o,
          maskId: l,
          transform: a,
        } = t;
        const { width: s, icon: u } = i,
          { width: f, icon: c } = o,
          p = Wy({ transform: a, containerWidth: f, iconWidth: s }),
          E = { tag: "rect", attributes: { ...Ra, fill: "white" } },
          x = u.children ? { children: u.children.map(md) } : {},
          w = {
            tag: "g",
            attributes: { ...p.inner },
            children: [
              md({
                tag: u.tag,
                attributes: { ...u.attributes, ...p.path },
                ...x,
              }),
            ],
          },
          P = { tag: "g", attributes: { ...p.outer }, children: [w] },
          h = "mask-".concat(l || Qi()),
          d = "clip-".concat(l || Qi()),
          m = {
            tag: "mask",
            attributes: {
              ...Ra,
              id: h,
              maskUnits: "userSpaceOnUse",
              maskContentUnits: "userSpaceOnUse",
            },
            children: [E, P],
          },
          k = {
            tag: "defs",
            children: [
              { tag: "clipPath", attributes: { id: d }, children: V2(c) },
              m,
            ],
          };
        return (
          n.push(k, {
            tag: "rect",
            attributes: {
              fill: "currentColor",
              "clip-path": "url(#".concat(d, ")"),
              mask: "url(#".concat(h, ")"),
              ...Ra,
            },
          }),
          { children: n, attributes: r }
        );
      };
    },
  },
  Q2 = {
    provides(e) {
      let t = !1;
      Pn.matchMedia &&
        (t = Pn.matchMedia("(prefers-reduced-motion: reduce)").matches),
        (e.missingIconAbstract = function () {
          const n = [],
            r = { fill: "currentColor" },
            i = { attributeType: "XML", repeatCount: "indefinite", dur: "2s" };
          n.push({
            tag: "path",
            attributes: {
              ...r,
              d: "M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z",
            },
          });
          const o = { ...i, attributeName: "opacity" },
            l = {
              tag: "circle",
              attributes: { ...r, cx: "256", cy: "364", r: "28" },
              children: [],
            };
          return (
            t ||
              l.children.push(
                {
                  tag: "animate",
                  attributes: {
                    ...i,
                    attributeName: "r",
                    values: "28;14;28;28;14;28;",
                  },
                },
                { tag: "animate", attributes: { ...o, values: "1;0;1;1;0;1;" } }
              ),
            n.push(l),
            n.push({
              tag: "path",
              attributes: {
                ...r,
                opacity: "1",
                d: "M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z",
              },
              children: t
                ? []
                : [
                    {
                      tag: "animate",
                      attributes: { ...o, values: "1;0;0;0;0;1;" },
                    },
                  ],
            }),
            t ||
              n.push({
                tag: "path",
                attributes: {
                  ...r,
                  opacity: "0",
                  d: "M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z",
                },
                children: [
                  {
                    tag: "animate",
                    attributes: { ...o, values: "0;0;1;1;0;0;" },
                  },
                ],
              }),
            { tag: "g", attributes: { class: "missing" }, children: n }
          );
        });
    },
  },
  K2 = {
    hooks() {
      return {
        parseNodeAttributes(e, t) {
          const n = t.getAttribute("data-fa-symbol"),
            r = n === null ? !1 : n === "" ? !0 : n;
          return (e.symbol = r), e;
        },
      };
    },
  },
  X2 = [Yy, M2, A2, z2, j2, $2, W2, H2, Y2, Q2, K2];
l2(X2, { mixoutsTo: st });
st.noAuto;
st.config;
st.library;
st.dom;
const bs = st.parse;
st.findIconDefinition;
st.toHtml;
const G2 = st.icon;
st.layer;
st.text;
st.counter;
var Lm = { exports: {} },
  J2 = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",
  Z2 = J2,
  q2 = Z2;
function Tm() {}
function Om() {}
Om.resetWarningCache = Tm;
var ew = function () {
  function e(r, i, o, l, a, s) {
    if (s !== q2) {
      var u = new Error(
        "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
      );
      throw ((u.name = "Invariant Violation"), u);
    }
  }
  e.isRequired = e;
  function t() {
    return e;
  }
  var n = {
    array: e,
    bigint: e,
    bool: e,
    func: e,
    number: e,
    object: e,
    string: e,
    symbol: e,
    any: e,
    arrayOf: t,
    element: e,
    elementType: e,
    instanceOf: t,
    node: e,
    objectOf: t,
    oneOf: t,
    oneOfType: t,
    shape: t,
    exact: t,
    checkPropTypes: Om,
    resetWarningCache: Tm,
  };
  return (n.PropTypes = n), n;
};
Lm.exports = ew();
var tw = Lm.exports;
const K = Ws(tw);
function vd(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t &&
      (r = r.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      n.push.apply(n, r);
  }
  return n;
}
function Lt(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? vd(Object(n), !0).forEach(function (r) {
          _r(e, r, n[r]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
      : vd(Object(n)).forEach(function (r) {
          Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
        });
  }
  return e;
}
function Sl(e) {
  "@babel/helpers - typeof";
  return (
    (Sl =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    Sl(e)
  );
}
function _r(e, t, n) {
  return (
    t in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  );
}
function nw(e, t) {
  if (e == null) return {};
  var n = {},
    r = Object.keys(e),
    i,
    o;
  for (o = 0; o < r.length; o++)
    (i = r[o]), !(t.indexOf(i) >= 0) && (n[i] = e[i]);
  return n;
}
function rw(e, t) {
  if (e == null) return {};
  var n = nw(e, t),
    r,
    i;
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    for (i = 0; i < o.length; i++)
      (r = o[i]),
        !(t.indexOf(r) >= 0) &&
          Object.prototype.propertyIsEnumerable.call(e, r) &&
          (n[r] = e[r]);
  }
  return n;
}
function Bs(e) {
  return iw(e) || ow(e) || lw(e) || aw();
}
function iw(e) {
  if (Array.isArray(e)) return $s(e);
}
function ow(e) {
  if (
    (typeof Symbol < "u" && e[Symbol.iterator] != null) ||
    e["@@iterator"] != null
  )
    return Array.from(e);
}
function lw(e, t) {
  if (e) {
    if (typeof e == "string") return $s(e, t);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    if (
      (n === "Object" && e.constructor && (n = e.constructor.name),
      n === "Map" || n === "Set")
    )
      return Array.from(e);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return $s(e, t);
  }
}
function $s(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
  return r;
}
function aw() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function sw(e) {
  var t,
    n = e.beat,
    r = e.fade,
    i = e.beatFade,
    o = e.bounce,
    l = e.shake,
    a = e.flash,
    s = e.spin,
    u = e.spinPulse,
    f = e.spinReverse,
    c = e.pulse,
    p = e.fixedWidth,
    E = e.inverse,
    x = e.border,
    w = e.listItem,
    P = e.flip,
    h = e.size,
    d = e.rotation,
    m = e.pull,
    k =
      ((t = {
        "fa-beat": n,
        "fa-fade": r,
        "fa-beat-fade": i,
        "fa-bounce": o,
        "fa-shake": l,
        "fa-flash": a,
        "fa-spin": s,
        "fa-spin-reverse": f,
        "fa-spin-pulse": u,
        "fa-pulse": c,
        "fa-fw": p,
        "fa-inverse": E,
        "fa-border": x,
        "fa-li": w,
        "fa-flip": P === !0,
        "fa-flip-horizontal": P === "horizontal" || P === "both",
        "fa-flip-vertical": P === "vertical" || P === "both",
      }),
      _r(t, "fa-".concat(h), typeof h < "u" && h !== null),
      _r(t, "fa-rotate-".concat(d), typeof d < "u" && d !== null && d !== 0),
      _r(t, "fa-pull-".concat(m), typeof m < "u" && m !== null),
      _r(t, "fa-swap-opacity", e.swapOpacity),
      t);
  return Object.keys(k)
    .map(function (_) {
      return k[_] ? _ : null;
    })
    .filter(function (_) {
      return _;
    });
}
function uw(e) {
  return (e = e - 0), e === e;
}
function Mm(e) {
  return uw(e)
    ? e
    : ((e = e.replace(/[\-_\s]+(.)?/g, function (t, n) {
        return n ? n.toUpperCase() : "";
      })),
      e.substr(0, 1).toLowerCase() + e.substr(1));
}
var cw = ["style"];
function fw(e) {
  return e.charAt(0).toUpperCase() + e.slice(1);
}
function dw(e) {
  return e
    .split(";")
    .map(function (t) {
      return t.trim();
    })
    .filter(function (t) {
      return t;
    })
    .reduce(function (t, n) {
      var r = n.indexOf(":"),
        i = Mm(n.slice(0, r)),
        o = n.slice(r + 1).trim();
      return i.startsWith("webkit") ? (t[fw(i)] = o) : (t[i] = o), t;
    }, {});
}
function Am(e, t) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  if (typeof t == "string") return t;
  var r = (t.children || []).map(function (s) {
      return Am(e, s);
    }),
    i = Object.keys(t.attributes || {}).reduce(
      function (s, u) {
        var f = t.attributes[u];
        switch (u) {
          case "class":
            (s.attrs.className = f), delete t.attributes.class;
            break;
          case "style":
            s.attrs.style = dw(f);
            break;
          default:
            u.indexOf("aria-") === 0 || u.indexOf("data-") === 0
              ? (s.attrs[u.toLowerCase()] = f)
              : (s.attrs[Mm(u)] = f);
        }
        return s;
      },
      { attrs: {} }
    ),
    o = n.style,
    l = o === void 0 ? {} : o,
    a = rw(n, cw);
  return (
    (i.attrs.style = Lt(Lt({}, i.attrs.style), l)),
    e.apply(void 0, [t.tag, Lt(Lt({}, i.attrs), a)].concat(Bs(r)))
  );
}
var zm = !1;
try {
  zm = !0;
} catch {}
function pw() {
  if (!zm && console && typeof console.error == "function") {
    var e;
    (e = console).error.apply(e, arguments);
  }
}
function gd(e) {
  if (e && Sl(e) === "object" && e.prefix && e.iconName && e.icon) return e;
  if (bs.icon) return bs.icon(e);
  if (e === null) return null;
  if (e && Sl(e) === "object" && e.prefix && e.iconName) return e;
  if (Array.isArray(e) && e.length === 2)
    return { prefix: e[0], iconName: e[1] };
  if (typeof e == "string") return { prefix: "fas", iconName: e };
}
function La(e, t) {
  return (Array.isArray(t) && t.length > 0) || (!Array.isArray(t) && t)
    ? _r({}, e, t)
    : {};
}
var yd = {
    border: !1,
    className: "",
    mask: null,
    maskId: null,
    fixedWidth: !1,
    inverse: !1,
    flip: !1,
    icon: null,
    listItem: !1,
    pull: null,
    pulse: !1,
    rotation: null,
    size: null,
    spin: !1,
    spinPulse: !1,
    spinReverse: !1,
    beat: !1,
    fade: !1,
    beatFade: !1,
    bounce: !1,
    shake: !1,
    symbol: !1,
    title: "",
    titleId: null,
    transform: null,
    swapOpacity: !1,
  },
  At = Ks.forwardRef(function (e, t) {
    var n = Lt(Lt({}, yd), e),
      r = n.icon,
      i = n.mask,
      o = n.symbol,
      l = n.className,
      a = n.title,
      s = n.titleId,
      u = n.maskId,
      f = gd(r),
      c = La("classes", [].concat(Bs(sw(n)), Bs((l || "").split(" ")))),
      p = La(
        "transform",
        typeof n.transform == "string" ? bs.transform(n.transform) : n.transform
      ),
      E = La("mask", gd(i)),
      x = G2(
        f,
        Lt(
          Lt(Lt(Lt({}, c), p), E),
          {},
          { symbol: o, title: a, titleId: s, maskId: u }
        )
      );
    if (!x) return pw("Could not find icon", f), null;
    var w = x.abstract,
      P = { ref: t };
    return (
      Object.keys(n).forEach(function (h) {
        yd.hasOwnProperty(h) || (P[h] = n[h]);
      }),
      hw(w[0], P)
    );
  });
At.displayName = "FontAwesomeIcon";
At.propTypes = {
  beat: K.bool,
  border: K.bool,
  beatFade: K.bool,
  bounce: K.bool,
  className: K.string,
  fade: K.bool,
  flash: K.bool,
  mask: K.oneOfType([K.object, K.array, K.string]),
  maskId: K.string,
  fixedWidth: K.bool,
  inverse: K.bool,
  flip: K.oneOf([!0, !1, "horizontal", "vertical", "both"]),
  icon: K.oneOfType([K.object, K.array, K.string]),
  listItem: K.bool,
  pull: K.oneOf(["right", "left"]),
  pulse: K.bool,
  rotation: K.oneOf([0, 90, 180, 270]),
  shake: K.bool,
  size: K.oneOf([
    "2xs",
    "xs",
    "sm",
    "lg",
    "xl",
    "2xl",
    "1x",
    "2x",
    "3x",
    "4x",
    "5x",
    "6x",
    "7x",
    "8x",
    "9x",
    "10x",
  ]),
  spin: K.bool,
  spinPulse: K.bool,
  spinReverse: K.bool,
  symbol: K.oneOfType([K.bool, K.string]),
  title: K.string,
  titleId: K.string,
  transform: K.oneOfType([K.string, K.object]),
  swapOpacity: K.bool,
};
var hw = Am.bind(null, Ks.createElement);
function mw() {
  return R.jsxs("div", {
    className: "about",
    children: [
      R.jsx("h1", { children: "About Component" }),
      R.jsxs("div", {
        className: "lines",
        children: [
          R.jsx("div", { className: "line" }),
          R.jsx(At, { icon: Jh }),
          R.jsx("div", { className: "line" }),
        ],
      }),
      R.jsxs("div", {
        className: "topics",
        children: [
          R.jsx("p", {
            children:
              "Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.",
          }),
          R.jsx("p", {
            children:
              "Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.",
          }),
        ],
      }),
    ],
  });
}
function ic({ title: e }) {
  return R.jsxs(R.Fragment, {
    children: [
      R.jsx("h1", { className: "tit", children: e }),
      R.jsxs("div", {
        className: "lines",
        children: [
          R.jsx("div", { className: "line" }),
          R.jsx(At, { icon: Jh }),
          R.jsx("div", { className: "line" }),
        ],
      }),
    ],
  });
}
function vw() {
  return R.jsxs("div", {
    className: "form ",
    children: [
      R.jsx(ic, { title: "Contact Section" }),
      R.jsxs("form", {
        className: "form-container",
        children: [
          R.jsxs("div", {
            className: "form-group",
            children: [
              R.jsx("label", {
                htmlFor: "fname",
                className: "form-label",
                children: "First Name",
              }),
              R.jsx("input", {
                type: "text",
                id: "fname",
                name: "fname",
                className: "form-input",
              }),
            ],
          }),
          R.jsxs("div", {
            className: "form-group",
            children: [
              R.jsx("label", {
                htmlFor: "lname",
                className: "form-label",
                children: "Last Name",
              }),
              R.jsx("input", {
                type: "text",
                id: "lname",
                name: "lname",
                className: "form-input",
              }),
            ],
          }),
          R.jsxs("div", {
            className: "form-group",
            children: [
              R.jsx("label", {
                htmlFor: "age",
                className: "form-label",
                children: "Age",
              }),
              R.jsx("input", {
                type: "number",
                id: "age",
                name: "age",
                className: "form-input",
              }),
            ],
          }),
          R.jsxs("div", {
            className: "form-group",
            children: [
              R.jsx("label", {
                htmlFor: "email",
                className: "form-label",
                children: "Email",
              }),
              R.jsx("input", {
                type: "email",
                id: "email",
                name: "email",
                className: "form-input",
              }),
            ],
          }),
          R.jsx("div", {
            className: "form-action",
            children: R.jsx("button", {
              type: "button",
              className: "form-button",
              children: "Submit",
            }),
          }),
        ],
      }),
    ],
  });
}
const gw = "/reactport/assets/avater-BNoonRVv.svg";
function yw() {
  return R.jsxs("div", {
    className: "home",
    children: [
      R.jsx("div", {
        className: "profile",
        children: R.jsx("img", { src: gw, alt: "" }),
      }),
      R.jsx(ic, { title: "Start Framwork" }),
      R.jsx("p", {
        children: "FrontEnd Developer , UI Designer , Flutter Developer",
      }),
    ],
  });
}
function fr({ img: e }) {
  const [t, n] = N.useState(!1);
  function r() {
    n(!t);
  }
  return R.jsxs(R.Fragment, {
    children: [
      R.jsxs("div", {
        className: "card",
        children: [
          R.jsx("img", { src: e, alt: "" }),
          R.jsx("div", {
            className: "overlay",
            onClick: r,
            children: R.jsx(At, { icon: cy }),
          }),
        ],
      }),
      t &&
        R.jsx("div", {
          className: "popup",
          onClick: r,
          children: R.jsx("img", { src: e, alt: "" }),
        }),
    ],
  });
}
const wd = "/reactport/assets/port1-xPKRo3H2.png",
  xd = "/reactport/assets/port2-BXsgW1Ky.png",
  Sd = "/reactport/assets/port3-D3FP2wGo.png";
function ww() {
  return R.jsxs("div", {
    className: "portfolio",
    children: [
      R.jsx(ic, { title: "portfolio component" }),
      R.jsxs("div", {
        className: "cards",
        children: [
          R.jsx(fr, { img: wd }),
          R.jsx(fr, { img: xd }),
          R.jsx(fr, { img: Sd }),
          R.jsx(fr, { img: wd }),
          R.jsx(fr, { img: xd }),
          R.jsx(fr, { img: Sd }),
        ],
      }),
    ],
  });
}
function xw() {
  const [e, t] = N.useState(!1);
  function n() {
    window.innerWidth <= 1024 && t(!e);
  }
  return (
    N.useEffect(() => {
      function r() {
        window.innerWidth >= 1024 && t(!1);
      }
      return (
        window.addEventListener("resize", r),
        () => window.removeEventListener("resize", r)
      );
    }, []),
    R.jsx("div", {
      className: "navB",
      children: R.jsx("nav", {
        children: R.jsxs("div", {
          className: "container",
          children: [
            R.jsx("div", {
              className: "logoA",
              children: R.jsx(Lo, { to: "/reactport", children: "Ali" }),
            }),
            R.jsxs("ul", {
              className: `navLinks ${e ? "menu" : ""}`,
              children: [
                R.jsx("li", {
                  children: R.jsx(Lo, {
                    onClick: n,
                    to: "About",
                    children: "About",
                  }),
                }),
                R.jsx("li", {
                  children: R.jsx(Lo, {
                    onClick: n,
                    to: "Portfolio",
                    children: "Portfolio",
                  }),
                }),
                R.jsx("li", {
                  children: R.jsx(Lo, {
                    onClick: n,
                    to: "Contact",
                    children: "Contact",
                  }),
                }),
              ],
            }),
            R.jsx("button", {
              onClick: n,
              className: "menuButton",
              children: R.jsx(At, { className: "text-white", icon: uy }),
            }),
          ],
        }),
      }),
    })
  );
}
const Sw = {
    prefix: "fab",
    iconName: "linkedin",
    icon: [
      448,
      512,
      [],
      "f08c",
      "M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z",
    ],
  },
  Ew = {
    prefix: "fab",
    iconName: "instagram",
    icon: [
      448,
      512,
      [],
      "f16d",
      "M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z",
    ],
  },
  kw = {
    prefix: "fab",
    iconName: "facebook",
    icon: [
      512,
      512,
      [62e3],
      "f09a",
      "M512 256C512 114.6 397.4 0 256 0S0 114.6 0 256C0 376 82.7 476.8 194.2 504.5V334.2H141.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H287V510.1C413.8 494.8 512 386.9 512 256h0z",
    ],
  },
  Cw = {
    prefix: "fab",
    iconName: "twitter",
    icon: [
      512,
      512,
      [],
      "f099",
      "M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z",
    ],
  };
function Pw() {
  return R.jsxs("div", {
    className: "footer",
    children: [
      R.jsx("div", {
        className: "container",
        children: R.jsxs("footer", {
          className: "mainFooter",
          children: [
            R.jsxs("div", {
              className: "location",
              children: [
                R.jsx("h2", { children: "Location" }),
                R.jsx("p", { children: "123 Main St, Anytown, USA 12345" }),
              ],
            }),
            R.jsxs("div", {
              className: "links",
              children: [
                R.jsx("h2", { children: "Links" }),
                R.jsxs("div", {
                  className: "icons",
                  children: [
                    R.jsx(At, { icon: kw }),
                    R.jsx(At, { icon: Cw }),
                    R.jsx(At, { icon: Ew }),
                    R.jsx(At, { icon: Sw }),
                  ],
                }),
              ],
            }),
            R.jsxs("div", {
              className: "aboutMe",
              children: [
                R.jsx("h2", { children: "About Me" }),
                R.jsx("p", {
                  children:
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, hic.",
                }),
              ],
            }),
          ],
        }),
      }),
      R.jsx("footer", {
        className: "copyRights",
        children: R.jsx("p", { children: " Ali Mostafa © 2024 Cairo, Egypt." }),
      }),
    ],
  });
}
function _w() {
  return R.jsxs("div", {
    className: "appoo",
    children: [R.jsx(xw, {}), R.jsx(F0, {}), R.jsx(Pw, {})],
  });
}
const Nw = Y0([
  {
    path: "reactport",
    element: R.jsx(_w, {}),
    children: [
      { index: !0, element: R.jsx(yw, {}) },
      { path: "About", element: R.jsx(mw, {}) },
      { path: "Portfolio", element: R.jsx(ww, {}) },
      { path: "Contact", element: R.jsx(vw, {}) },
    ],
  },
]);
function Rw() {
  return R.jsx(ey, { router: Nw });
}
Ta.createRoot(document.getElementById("root")).render(R.jsx(Rw, {}));

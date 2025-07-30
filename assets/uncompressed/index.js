function Vc(e, t) {
    for (var n = 0; n < t.length; n++) {
        const r = t[n];
        if (typeof r != "string" && !Array.isArray(r)) {
            for (const l in r)
                if (l !== "default" && !(l in e)) {
                    const i = Object.getOwnPropertyDescriptor(r, l);
                    i && Object.defineProperty(e, l, i.get ? i : {
                        enumerable: !0,
                        get: () => r[l]
                    })
                }
        }
    }
    return Object.freeze(Object.defineProperty(e, Symbol.toStringTag, {
        value: "Module"
    }))
}(function() {
    const t = document.createElement("link").relList;
    if (t && t.supports && t.supports("modulepreload")) return;
    for (const l of document.querySelectorAll('link[rel="modulepreload"]')) r(l);
    new MutationObserver(l => {
        for (const i of l)
            if (i.type === "childList")
                for (const o of i.addedNodes) o.tagName === "LINK" && o.rel === "modulepreload" && r(o)
    }).observe(document, {
        childList: !0,
        subtree: !0
    });

    function n(l) {
        const i = {};
        return l.integrity && (i.integrity = l.integrity), l.referrerPolicy && (i.referrerPolicy = l.referrerPolicy), l.crossOrigin === "use-credentials" ? i.credentials = "include" : l.crossOrigin === "anonymous" ? i.credentials = "omit" : i.credentials = "same-origin", i
    }

    function r(l) {
        if (l.ep) return;
        l.ep = !0;
        const i = n(l);
        fetch(l.href, i)
    }
})();

function Hc(e) {
    return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e
}
var ga = {
        exports: {}
    },
    ul = {},
    va = {
        exports: {}
    },
    R = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var tr = Symbol.for("react.element"),
    $c = Symbol.for("react.portal"),
    Qc = Symbol.for("react.fragment"),
    Yc = Symbol.for("react.strict_mode"),
    Gc = Symbol.for("react.profiler"),
    Kc = Symbol.for("react.provider"),
    Xc = Symbol.for("react.context"),
    Jc = Symbol.for("react.forward_ref"),
    Zc = Symbol.for("react.suspense"),
    qc = Symbol.for("react.memo"),
    bc = Symbol.for("react.lazy"),
    bo = Symbol.iterator;

function ed(e) {
    return e === null || typeof e != "object" ? null : (e = bo && e[bo] || e["@@iterator"], typeof e == "function" ? e : null)
}
var ya = {
        isMounted: function() {
            return !1
        },
        enqueueForceUpdate: function() {},
        enqueueReplaceState: function() {},
        enqueueSetState: function() {}
    },
    xa = Object.assign,
    wa = {};

function cn(e, t, n) {
    this.props = e, this.context = t, this.refs = wa, this.updater = n || ya
}
cn.prototype.isReactComponent = {};
cn.prototype.setState = function(e, t) {
    if (typeof e != "object" && typeof e != "function" && e != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, e, t, "setState")
};
cn.prototype.forceUpdate = function(e) {
    this.updater.enqueueForceUpdate(this, e, "forceUpdate")
};

function ka() {}
ka.prototype = cn.prototype;

function to(e, t, n) {
    this.props = e, this.context = t, this.refs = wa, this.updater = n || ya
}
var no = to.prototype = new ka;
no.constructor = to;
xa(no, cn.prototype);
no.isPureReactComponent = !0;
var es = Array.isArray,
    Na = Object.prototype.hasOwnProperty,
    ro = {
        current: null
    },
    Sa = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
    };

function ja(e, t, n) {
    var r, l = {},
        i = null,
        o = null;
    if (t != null)
        for (r in t.ref !== void 0 && (o = t.ref), t.key !== void 0 && (i = "" + t.key), t) Na.call(t, r) && !Sa.hasOwnProperty(r) && (l[r] = t[r]);
    var a = arguments.length - 2;
    if (a === 1) l.children = n;
    else if (1 < a) {
        for (var u = Array(a), c = 0; c < a; c++) u[c] = arguments[c + 2];
        l.children = u
    }
    if (e && e.defaultProps)
        for (r in a = e.defaultProps, a) l[r] === void 0 && (l[r] = a[r]);
    return {
        $$typeof: tr,
        type: e,
        key: i,
        ref: o,
        props: l,
        _owner: ro.current
    }
}

function td(e, t) {
    return {
        $$typeof: tr,
        type: e.type,
        key: t,
        ref: e.ref,
        props: e.props,
        _owner: e._owner
    }
}

function lo(e) {
    return typeof e == "object" && e !== null && e.$$typeof === tr
}

function nd(e) {
    var t = {
        "=": "=0",
        ":": "=2"
    };
    return "$" + e.replace(/[=:]/g, function(n) {
        return t[n]
    })
}
var ts = /\/+/g;

function Rl(e, t) {
    return typeof e == "object" && e !== null && e.key != null ? nd("" + e.key) : t.toString(36)
}

function Cr(e, t, n, r, l) {
    var i = typeof e;
    (i === "undefined" || i === "boolean") && (e = null);
    var o = !1;
    if (e === null) o = !0;
    else switch (i) {
        case "string":
        case "number":
            o = !0;
            break;
        case "object":
            switch (e.$$typeof) {
                case tr:
                case $c:
                    o = !0
            }
    }
    if (o) return o = e, l = l(o), e = r === "" ? "." + Rl(o, 0) : r, es(l) ? (n = "", e != null && (n = e.replace(ts, "$&/") + "/"), Cr(l, t, n, "", function(c) {
        return c
    })) : l != null && (lo(l) && (l = td(l, n + (!l.key || o && o.key === l.key ? "" : ("" + l.key).replace(ts, "$&/") + "/") + e)), t.push(l)), 1;
    if (o = 0, r = r === "" ? "." : r + ":", es(e))
        for (var a = 0; a < e.length; a++) {
            i = e[a];
            var u = r + Rl(i, a);
            o += Cr(i, t, n, u, l)
        } else if (u = ed(e), typeof u == "function")
            for (e = u.call(e), a = 0; !(i = e.next()).done;) i = i.value, u = r + Rl(i, a++), o += Cr(i, t, n, u, l);
        else if (i === "object") throw t = String(e), Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
    return o
}

function ar(e, t, n) {
    if (e == null) return e;
    var r = [],
        l = 0;
    return Cr(e, r, "", "", function(i) {
        return t.call(n, i, l++)
    }), r
}

function rd(e) {
    if (e._status === -1) {
        var t = e._result;
        t = t(), t.then(function(n) {
            (e._status === 0 || e._status === -1) && (e._status = 1, e._result = n)
        }, function(n) {
            (e._status === 0 || e._status === -1) && (e._status = 2, e._result = n)
        }), e._status === -1 && (e._status = 0, e._result = t)
    }
    if (e._status === 1) return e._result.default;
    throw e._result
}
var ue = {
        current: null
    },
    Er = {
        transition: null
    },
    ld = {
        ReactCurrentDispatcher: ue,
        ReactCurrentBatchConfig: Er,
        ReactCurrentOwner: ro
    };

function Ca() {
    throw Error("act(...) is not supported in production builds of React.")
}
R.Children = {
    map: ar,
    forEach: function(e, t, n) {
        ar(e, function() {
            t.apply(this, arguments)
        }, n)
    },
    count: function(e) {
        var t = 0;
        return ar(e, function() {
            t++
        }), t
    },
    toArray: function(e) {
        return ar(e, function(t) {
            return t
        }) || []
    },
    only: function(e) {
        if (!lo(e)) throw Error("React.Children.only expected to receive a single React element child.");
        return e
    }
};
R.Component = cn;
R.Fragment = Qc;
R.Profiler = Gc;
R.PureComponent = to;
R.StrictMode = Yc;
R.Suspense = Zc;
R.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ld;
R.act = Ca;
R.cloneElement = function(e, t, n) {
    if (e == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
    var r = xa({}, e.props),
        l = e.key,
        i = e.ref,
        o = e._owner;
    if (t != null) {
        if (t.ref !== void 0 && (i = t.ref, o = ro.current), t.key !== void 0 && (l = "" + t.key), e.type && e.type.defaultProps) var a = e.type.defaultProps;
        for (u in t) Na.call(t, u) && !Sa.hasOwnProperty(u) && (r[u] = t[u] === void 0 && a !== void 0 ? a[u] : t[u])
    }
    var u = arguments.length - 2;
    if (u === 1) r.children = n;
    else if (1 < u) {
        a = Array(u);
        for (var c = 0; c < u; c++) a[c] = arguments[c + 2];
        r.children = a
    }
    return {
        $$typeof: tr,
        type: e.type,
        key: l,
        ref: i,
        props: r,
        _owner: o
    }
};
R.createContext = function(e) {
    return e = {
        $$typeof: Xc,
        _currentValue: e,
        _currentValue2: e,
        _threadCount: 0,
        Provider: null,
        Consumer: null,
        _defaultValue: null,
        _globalName: null
    }, e.Provider = {
        $$typeof: Kc,
        _context: e
    }, e.Consumer = e
};
R.createElement = ja;
R.createFactory = function(e) {
    var t = ja.bind(null, e);
    return t.type = e, t
};
R.createRef = function() {
    return {
        current: null
    }
};
R.forwardRef = function(e) {
    return {
        $$typeof: Jc,
        render: e
    }
};
R.isValidElement = lo;
R.lazy = function(e) {
    return {
        $$typeof: bc,
        _payload: {
            _status: -1,
            _result: e
        },
        _init: rd
    }
};
R.memo = function(e, t) {
    return {
        $$typeof: qc,
        type: e,
        compare: t === void 0 ? null : t
    }
};
R.startTransition = function(e) {
    var t = Er.transition;
    Er.transition = {};
    try {
        e()
    } finally {
        Er.transition = t
    }
};
R.unstable_act = Ca;
R.useCallback = function(e, t) {
    return ue.current.useCallback(e, t)
};
R.useContext = function(e) {
    return ue.current.useContext(e)
};
R.useDebugValue = function() {};
R.useDeferredValue = function(e) {
    return ue.current.useDeferredValue(e)
};
R.useEffect = function(e, t) {
    return ue.current.useEffect(e, t)
};
R.useId = function() {
    return ue.current.useId()
};
R.useImperativeHandle = function(e, t, n) {
    return ue.current.useImperativeHandle(e, t, n)
};
R.useInsertionEffect = function(e, t) {
    return ue.current.useInsertionEffect(e, t)
};
R.useLayoutEffect = function(e, t) {
    return ue.current.useLayoutEffect(e, t)
};
R.useMemo = function(e, t) {
    return ue.current.useMemo(e, t)
};
R.useReducer = function(e, t, n) {
    return ue.current.useReducer(e, t, n)
};
R.useRef = function(e) {
    return ue.current.useRef(e)
};
R.useState = function(e) {
    return ue.current.useState(e)
};
R.useSyncExternalStore = function(e, t, n) {
    return ue.current.useSyncExternalStore(e, t, n)
};
R.useTransition = function() {
    return ue.current.useTransition()
};
R.version = "18.3.1";
va.exports = R;
var T = va.exports;
const oi = Hc(T),
    id = Vc({
        __proto__: null,
        default: oi
    }, [T]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var od = T,
    sd = Symbol.for("react.element"),
    ad = Symbol.for("react.fragment"),
    ud = Object.prototype.hasOwnProperty,
    cd = od.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
    dd = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
    };

function Ea(e, t, n) {
    var r, l = {},
        i = null,
        o = null;
    n !== void 0 && (i = "" + n), t.key !== void 0 && (i = "" + t.key), t.ref !== void 0 && (o = t.ref);
    for (r in t) ud.call(t, r) && !dd.hasOwnProperty(r) && (l[r] = t[r]);
    if (e && e.defaultProps)
        for (r in t = e.defaultProps, t) l[r] === void 0 && (l[r] = t[r]);
    return {
        $$typeof: sd,
        type: e,
        key: i,
        ref: o,
        props: l,
        _owner: cd.current
    }
}
ul.Fragment = ad;
ul.jsx = Ea;
ul.jsxs = Ea;
ga.exports = ul;
var s = ga.exports,
    Pa = {
        exports: {}
    },
    we = {},
    Ta = {
        exports: {}
    },
    _a = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
(function(e) {
    function t(j, L) {
        var z = j.length;
        j.push(L);
        e: for (; 0 < z;) {
            var Y = z - 1 >>> 1,
                Z = j[Y];
            if (0 < l(Z, L)) j[Y] = L, j[z] = Z, z = Y;
            else break e
        }
    }

    function n(j) {
        return j.length === 0 ? null : j[0]
    }

    function r(j) {
        if (j.length === 0) return null;
        var L = j[0],
            z = j.pop();
        if (z !== L) {
            j[0] = z;
            e: for (var Y = 0, Z = j.length, or = Z >>> 1; Y < or;) {
                var wt = 2 * (Y + 1) - 1,
                    zl = j[wt],
                    kt = wt + 1,
                    sr = j[kt];
                if (0 > l(zl, z)) kt < Z && 0 > l(sr, zl) ? (j[Y] = sr, j[kt] = z, Y = kt) : (j[Y] = zl, j[wt] = z, Y = wt);
                else if (kt < Z && 0 > l(sr, z)) j[Y] = sr, j[kt] = z, Y = kt;
                else break e
            }
        }
        return L
    }

    function l(j, L) {
        var z = j.sortIndex - L.sortIndex;
        return z !== 0 ? z : j.id - L.id
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
        var i = performance;
        e.unstable_now = function() {
            return i.now()
        }
    } else {
        var o = Date,
            a = o.now();
        e.unstable_now = function() {
            return o.now() - a
        }
    }
    var u = [],
        c = [],
        m = 1,
        h = null,
        g = 3,
        w = !1,
        k = !1,
        x = !1,
        _ = typeof setTimeout == "function" ? setTimeout : null,
        f = typeof clearTimeout == "function" ? clearTimeout : null,
        d = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);

    function p(j) {
        for (var L = n(c); L !== null;) {
            if (L.callback === null) r(c);
            else if (L.startTime <= j) r(c), L.sortIndex = L.expirationTime, t(u, L);
            else break;
            L = n(c)
        }
    }

    function v(j) {
        if (x = !1, p(j), !k)
            if (n(u) !== null) k = !0, _l(N);
            else {
                var L = n(c);
                L !== null && Ll(v, L.startTime - j)
            }
    }

    function N(j, L) {
        k = !1, x && (x = !1, f(P), P = -1), w = !0;
        var z = g;
        try {
            for (p(L), h = n(u); h !== null && (!(h.expirationTime > L) || j && !Te());) {
                var Y = h.callback;
                if (typeof Y == "function") {
                    h.callback = null, g = h.priorityLevel;
                    var Z = Y(h.expirationTime <= L);
                    L = e.unstable_now(), typeof Z == "function" ? h.callback = Z : h === n(u) && r(u), p(L)
                } else r(u);
                h = n(u)
            }
            if (h !== null) var or = !0;
            else {
                var wt = n(c);
                wt !== null && Ll(v, wt.startTime - L), or = !1
            }
            return or
        } finally {
            h = null, g = z, w = !1
        }
    }
    var C = !1,
        E = null,
        P = -1,
        Q = 5,
        M = -1;

    function Te() {
        return !(e.unstable_now() - M < Q)
    }

    function mn() {
        if (E !== null) {
            var j = e.unstable_now();
            M = j;
            var L = !0;
            try {
                L = E(!0, j)
            } finally {
                L ? hn() : (C = !1, E = null)
            }
        } else C = !1
    }
    var hn;
    if (typeof d == "function") hn = function() {
        d(mn)
    };
    else if (typeof MessageChannel < "u") {
        var qo = new MessageChannel,
            Wc = qo.port2;
        qo.port1.onmessage = mn, hn = function() {
            Wc.postMessage(null)
        }
    } else hn = function() {
        _(mn, 0)
    };

    function _l(j) {
        E = j, C || (C = !0, hn())
    }

    function Ll(j, L) {
        P = _(function() {
            j(e.unstable_now())
        }, L)
    }
    e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function(j) {
        j.callback = null
    }, e.unstable_continueExecution = function() {
        k || w || (k = !0, _l(N))
    }, e.unstable_forceFrameRate = function(j) {
        0 > j || 125 < j ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : Q = 0 < j ? Math.floor(1e3 / j) : 5
    }, e.unstable_getCurrentPriorityLevel = function() {
        return g
    }, e.unstable_getFirstCallbackNode = function() {
        return n(u)
    }, e.unstable_next = function(j) {
        switch (g) {
            case 1:
            case 2:
            case 3:
                var L = 3;
                break;
            default:
                L = g
        }
        var z = g;
        g = L;
        try {
            return j()
        } finally {
            g = z
        }
    }, e.unstable_pauseExecution = function() {}, e.unstable_requestPaint = function() {}, e.unstable_runWithPriority = function(j, L) {
        switch (j) {
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
                break;
            default:
                j = 3
        }
        var z = g;
        g = j;
        try {
            return L()
        } finally {
            g = z
        }
    }, e.unstable_scheduleCallback = function(j, L, z) {
        var Y = e.unstable_now();
        switch (typeof z == "object" && z !== null ? (z = z.delay, z = typeof z == "number" && 0 < z ? Y + z : Y) : z = Y, j) {
            case 1:
                var Z = -1;
                break;
            case 2:
                Z = 250;
                break;
            case 5:
                Z = 1073741823;
                break;
            case 4:
                Z = 1e4;
                break;
            default:
                Z = 5e3
        }
        return Z = z + Z, j = {
            id: m++,
            callback: L,
            priorityLevel: j,
            startTime: z,
            expirationTime: Z,
            sortIndex: -1
        }, z > Y ? (j.sortIndex = z, t(c, j), n(u) === null && j === n(c) && (x ? (f(P), P = -1) : x = !0, Ll(v, z - Y))) : (j.sortIndex = Z, t(u, j), k || w || (k = !0, _l(N))), j
    }, e.unstable_shouldYield = Te, e.unstable_wrapCallback = function(j) {
        var L = g;
        return function() {
            var z = g;
            g = L;
            try {
                return j.apply(this, arguments)
            } finally {
                g = z
            }
        }
    }
})(_a);
Ta.exports = _a;
var fd = Ta.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var pd = T,
    xe = fd;

function y(e) {
    for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
    return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
}
var La = new Set,
    Dn = {};

function It(e, t) {
    nn(e, t), nn(e + "Capture", t)
}

function nn(e, t) {
    for (Dn[e] = t, e = 0; e < t.length; e++) La.add(t[e])
}
var Xe = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"),
    si = Object.prototype.hasOwnProperty,
    md = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
    ns = {},
    rs = {};

function hd(e) {
    return si.call(rs, e) ? !0 : si.call(ns, e) ? !1 : md.test(e) ? rs[e] = !0 : (ns[e] = !0, !1)
}

function gd(e, t, n, r) {
    if (n !== null && n.type === 0) return !1;
    switch (typeof t) {
        case "function":
        case "symbol":
            return !0;
        case "boolean":
            return r ? !1 : n !== null ? !n.acceptsBooleans : (e = e.toLowerCase().slice(0, 5), e !== "data-" && e !== "aria-");
        default:
            return !1
    }
}

function vd(e, t, n, r) {
    if (t === null || typeof t > "u" || gd(e, t, n, r)) return !0;
    if (r) return !1;
    if (n !== null) switch (n.type) {
        case 3:
            return !t;
        case 4:
            return t === !1;
        case 5:
            return isNaN(t);
        case 6:
            return isNaN(t) || 1 > t
    }
    return !1
}

function ce(e, t, n, r, l, i, o) {
    this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = r, this.attributeNamespace = l, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = i, this.removeEmptyString = o
}
var ne = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
    ne[e] = new ce(e, 0, !1, e, null, !1, !1)
});
[
    ["acceptCharset", "accept-charset"],
    ["className", "class"],
    ["htmlFor", "for"],
    ["httpEquiv", "http-equiv"]
].forEach(function(e) {
    var t = e[0];
    ne[t] = new ce(t, 1, !1, e[1], null, !1, !1)
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
    ne[e] = new ce(e, 2, !1, e.toLowerCase(), null, !1, !1)
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
    ne[e] = new ce(e, 2, !1, e, null, !1, !1)
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
    ne[e] = new ce(e, 3, !1, e.toLowerCase(), null, !1, !1)
});
["checked", "multiple", "muted", "selected"].forEach(function(e) {
    ne[e] = new ce(e, 3, !0, e, null, !1, !1)
});
["capture", "download"].forEach(function(e) {
    ne[e] = new ce(e, 4, !1, e, null, !1, !1)
});
["cols", "rows", "size", "span"].forEach(function(e) {
    ne[e] = new ce(e, 6, !1, e, null, !1, !1)
});
["rowSpan", "start"].forEach(function(e) {
    ne[e] = new ce(e, 5, !1, e.toLowerCase(), null, !1, !1)
});
var io = /[\-:]([a-z])/g;

function oo(e) {
    return e[1].toUpperCase()
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
    var t = e.replace(io, oo);
    ne[t] = new ce(t, 1, !1, e, null, !1, !1)
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
    var t = e.replace(io, oo);
    ne[t] = new ce(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1)
});
["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
    var t = e.replace(io, oo);
    ne[t] = new ce(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1)
});
["tabIndex", "crossOrigin"].forEach(function(e) {
    ne[e] = new ce(e, 1, !1, e.toLowerCase(), null, !1, !1)
});
ne.xlinkHref = new ce("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
["src", "href", "action", "formAction"].forEach(function(e) {
    ne[e] = new ce(e, 1, !1, e.toLowerCase(), null, !0, !0)
});

function so(e, t, n, r) {
    var l = ne.hasOwnProperty(t) ? ne[t] : null;
    (l !== null ? l.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (vd(t, n, l, r) && (n = null), r || l === null ? hd(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : l.mustUseProperty ? e[l.propertyName] = n === null ? l.type === 3 ? !1 : "" : n : (t = l.attributeName, r = l.attributeNamespace, n === null ? e.removeAttribute(t) : (l = l.type, n = l === 3 || l === 4 && n === !0 ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))))
}
var be = pd.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
    ur = Symbol.for("react.element"),
    Ut = Symbol.for("react.portal"),
    At = Symbol.for("react.fragment"),
    ao = Symbol.for("react.strict_mode"),
    ai = Symbol.for("react.profiler"),
    za = Symbol.for("react.provider"),
    Ra = Symbol.for("react.context"),
    uo = Symbol.for("react.forward_ref"),
    ui = Symbol.for("react.suspense"),
    ci = Symbol.for("react.suspense_list"),
    co = Symbol.for("react.memo"),
    tt = Symbol.for("react.lazy"),
    Ma = Symbol.for("react.offscreen"),
    ls = Symbol.iterator;

function gn(e) {
    return e === null || typeof e != "object" ? null : (e = ls && e[ls] || e["@@iterator"], typeof e == "function" ? e : null)
}
var H = Object.assign,
    Ml;

function jn(e) {
    if (Ml === void 0) try {
        throw Error()
    } catch (n) {
        var t = n.stack.trim().match(/\n( *(at )?)/);
        Ml = t && t[1] || ""
    }
    return `
` + Ml + e
}
var Fl = !1;

function Il(e, t) {
    if (!e || Fl) return "";
    Fl = !0;
    var n = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
        if (t)
            if (t = function() {
                    throw Error()
                }, Object.defineProperty(t.prototype, "props", {
                    set: function() {
                        throw Error()
                    }
                }), typeof Reflect == "object" && Reflect.construct) {
                try {
                    Reflect.construct(t, [])
                } catch (c) {
                    var r = c
                }
                Reflect.construct(e, [], t)
            } else {
                try {
                    t.call()
                } catch (c) {
                    r = c
                }
                e.call(t.prototype)
            }
        else {
            try {
                throw Error()
            } catch (c) {
                r = c
            }
            e()
        }
    } catch (c) {
        if (c && r && typeof c.stack == "string") {
            for (var l = c.stack.split(`
`), i = r.stack.split(`
`), o = l.length - 1, a = i.length - 1; 1 <= o && 0 <= a && l[o] !== i[a];) a--;
            for (; 1 <= o && 0 <= a; o--, a--)
                if (l[o] !== i[a]) {
                    if (o !== 1 || a !== 1)
                        do
                            if (o--, a--, 0 > a || l[o] !== i[a]) {
                                var u = `
` + l[o].replace(" at new ", " at ");
                                return e.displayName && u.includes("<anonymous>") && (u = u.replace("<anonymous>", e.displayName)), u
                            } while (1 <= o && 0 <= a);
                    break
                }
        }
    } finally {
        Fl = !1, Error.prepareStackTrace = n
    }
    return (e = e ? e.displayName || e.name : "") ? jn(e) : ""
}

function yd(e) {
    switch (e.tag) {
        case 5:
            return jn(e.type);
        case 16:
            return jn("Lazy");
        case 13:
            return jn("Suspense");
        case 19:
            return jn("SuspenseList");
        case 0:
        case 2:
        case 15:
            return e = Il(e.type, !1), e;
        case 11:
            return e = Il(e.type.render, !1), e;
        case 1:
            return e = Il(e.type, !0), e;
        default:
            return ""
    }
}

function di(e) {
    if (e == null) return null;
    if (typeof e == "function") return e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
        case At:
            return "Fragment";
        case Ut:
            return "Portal";
        case ai:
            return "Profiler";
        case ao:
            return "StrictMode";
        case ui:
            return "Suspense";
        case ci:
            return "SuspenseList"
    }
    if (typeof e == "object") switch (e.$$typeof) {
        case Ra:
            return (e.displayName || "Context") + ".Consumer";
        case za:
            return (e._context.displayName || "Context") + ".Provider";
        case uo:
            var t = e.render;
            return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
        case co:
            return t = e.displayName || null, t !== null ? t : di(e.type) || "Memo";
        case tt:
            t = e._payload, e = e._init;
            try {
                return di(e(t))
            } catch {}
    }
    return null
}

function xd(e) {
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
            return e = t.render, e = e.displayName || e.name || "", t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef");
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
            return di(t);
        case 8:
            return t === ao ? "StrictMode" : "Mode";
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
            if (typeof t == "string") return t
    }
    return null
}

function ht(e) {
    switch (typeof e) {
        case "boolean":
        case "number":
        case "string":
        case "undefined":
            return e;
        case "object":
            return e;
        default:
            return ""
    }
}

function Fa(e) {
    var t = e.type;
    return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio")
}

function wd(e) {
    var t = Fa(e) ? "checked" : "value",
        n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
        r = "" + e[t];
    if (!e.hasOwnProperty(t) && typeof n < "u" && typeof n.get == "function" && typeof n.set == "function") {
        var l = n.get,
            i = n.set;
        return Object.defineProperty(e, t, {
            configurable: !0,
            get: function() {
                return l.call(this)
            },
            set: function(o) {
                r = "" + o, i.call(this, o)
            }
        }), Object.defineProperty(e, t, {
            enumerable: n.enumerable
        }), {
            getValue: function() {
                return r
            },
            setValue: function(o) {
                r = "" + o
            },
            stopTracking: function() {
                e._valueTracker = null, delete e[t]
            }
        }
    }
}

function cr(e) {
    e._valueTracker || (e._valueTracker = wd(e))
}

function Ia(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var n = t.getValue(),
        r = "";
    return e && (r = Fa(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== n ? (t.setValue(e), !0) : !1
}

function Dr(e) {
    if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
    try {
        return e.activeElement || e.body
    } catch {
        return e.body
    }
}

function fi(e, t) {
    var n = t.checked;
    return H({}, t, {
        defaultChecked: void 0,
        defaultValue: void 0,
        value: void 0,
        checked: n ?? e._wrapperState.initialChecked
    })
}

function is(e, t) {
    var n = t.defaultValue == null ? "" : t.defaultValue,
        r = t.checked != null ? t.checked : t.defaultChecked;
    n = ht(t.value != null ? t.value : n), e._wrapperState = {
        initialChecked: r,
        initialValue: n,
        controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null
    }
}

function Oa(e, t) {
    t = t.checked, t != null && so(e, "checked", t, !1)
}

function pi(e, t) {
    Oa(e, t);
    var n = ht(t.value),
        r = t.type;
    if (n != null) r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
    else if (r === "submit" || r === "reset") {
        e.removeAttribute("value");
        return
    }
    t.hasOwnProperty("value") ? mi(e, t.type, n) : t.hasOwnProperty("defaultValue") && mi(e, t.type, ht(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked)
}

function os(e, t, n) {
    if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
        var r = t.type;
        if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null)) return;
        t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t
    }
    n = e.name, n !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, n !== "" && (e.name = n)
}

function mi(e, t, n) {
    (t !== "number" || Dr(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n))
}
var Cn = Array.isArray;

function Jt(e, t, n, r) {
    if (e = e.options, t) {
        t = {};
        for (var l = 0; l < n.length; l++) t["$" + n[l]] = !0;
        for (n = 0; n < e.length; n++) l = t.hasOwnProperty("$" + e[n].value), e[n].selected !== l && (e[n].selected = l), l && r && (e[n].defaultSelected = !0)
    } else {
        for (n = "" + ht(n), t = null, l = 0; l < e.length; l++) {
            if (e[l].value === n) {
                e[l].selected = !0, r && (e[l].defaultSelected = !0);
                return
            }
            t !== null || e[l].disabled || (t = e[l])
        }
        t !== null && (t.selected = !0)
    }
}

function hi(e, t) {
    if (t.dangerouslySetInnerHTML != null) throw Error(y(91));
    return H({}, t, {
        value: void 0,
        defaultValue: void 0,
        children: "" + e._wrapperState.initialValue
    })
}

function ss(e, t) {
    var n = t.value;
    if (n == null) {
        if (n = t.children, t = t.defaultValue, n != null) {
            if (t != null) throw Error(y(92));
            if (Cn(n)) {
                if (1 < n.length) throw Error(y(93));
                n = n[0]
            }
            t = n
        }
        t == null && (t = ""), n = t
    }
    e._wrapperState = {
        initialValue: ht(n)
    }
}

function Da(e, t) {
    var n = ht(t.value),
        r = ht(t.defaultValue);
    n != null && (n = "" + n, n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)), r != null && (e.defaultValue = "" + r)
}

function as(e) {
    var t = e.textContent;
    t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t)
}

function Ua(e) {
    switch (e) {
        case "svg":
            return "http://www.w3.org/2000/svg";
        case "math":
            return "http://www.w3.org/1998/Math/MathML";
        default:
            return "http://www.w3.org/1999/xhtml"
    }
}

function gi(e, t) {
    return e == null || e === "http://www.w3.org/1999/xhtml" ? Ua(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e
}
var dr, Aa = function(e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, r, l) {
        MSApp.execUnsafeLocalFunction(function() {
            return e(t, n, r, l)
        })
    } : e
}(function(e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e) e.innerHTML = t;
    else {
        for (dr = dr || document.createElement("div"), dr.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = dr.firstChild; e.firstChild;) e.removeChild(e.firstChild);
        for (; t.firstChild;) e.appendChild(t.firstChild)
    }
});

function Un(e, t) {
    if (t) {
        var n = e.firstChild;
        if (n && n === e.lastChild && n.nodeType === 3) {
            n.nodeValue = t;
            return
        }
    }
    e.textContent = t
}
var Tn = {
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
        strokeWidth: !0
    },
    kd = ["Webkit", "ms", "Moz", "O"];
Object.keys(Tn).forEach(function(e) {
    kd.forEach(function(t) {
        t = t + e.charAt(0).toUpperCase() + e.substring(1), Tn[t] = Tn[e]
    })
});

function Ba(e, t, n) {
    return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || Tn.hasOwnProperty(e) && Tn[e] ? ("" + t).trim() : t + "px"
}

function Wa(e, t) {
    e = e.style;
    for (var n in t)
        if (t.hasOwnProperty(n)) {
            var r = n.indexOf("--") === 0,
                l = Ba(n, t[n], r);
            n === "float" && (n = "cssFloat"), r ? e.setProperty(n, l) : e[n] = l
        }
}
var Nd = H({
    menuitem: !0
}, {
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
    wbr: !0
});

function vi(e, t) {
    if (t) {
        if (Nd[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(y(137, e));
        if (t.dangerouslySetInnerHTML != null) {
            if (t.children != null) throw Error(y(60));
            if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML)) throw Error(y(61))
        }
        if (t.style != null && typeof t.style != "object") throw Error(y(62))
    }
}

function yi(e, t) {
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
            return !0
    }
}
var xi = null;

function fo(e) {
    return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e
}
var wi = null,
    Zt = null,
    qt = null;

function us(e) {
    if (e = lr(e)) {
        if (typeof wi != "function") throw Error(y(280));
        var t = e.stateNode;
        t && (t = ml(t), wi(e.stateNode, e.type, t))
    }
}

function Va(e) {
    Zt ? qt ? qt.push(e) : qt = [e] : Zt = e
}

function Ha() {
    if (Zt) {
        var e = Zt,
            t = qt;
        if (qt = Zt = null, us(e), t)
            for (e = 0; e < t.length; e++) us(t[e])
    }
}

function $a(e, t) {
    return e(t)
}

function Qa() {}
var Ol = !1;

function Ya(e, t, n) {
    if (Ol) return e(t, n);
    Ol = !0;
    try {
        return $a(e, t, n)
    } finally {
        Ol = !1, (Zt !== null || qt !== null) && (Qa(), Ha())
    }
}

function An(e, t) {
    var n = e.stateNode;
    if (n === null) return null;
    var r = ml(n);
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
            (r = !r.disabled) || (e = e.type, r = !(e === "button" || e === "input" || e === "select" || e === "textarea")), e = !r;
            break e;
        default:
            e = !1
    }
    if (e) return null;
    if (n && typeof n != "function") throw Error(y(231, t, typeof n));
    return n
}
var ki = !1;
if (Xe) try {
    var vn = {};
    Object.defineProperty(vn, "passive", {
        get: function() {
            ki = !0
        }
    }), window.addEventListener("test", vn, vn), window.removeEventListener("test", vn, vn)
} catch {
    ki = !1
}

function Sd(e, t, n, r, l, i, o, a, u) {
    var c = Array.prototype.slice.call(arguments, 3);
    try {
        t.apply(n, c)
    } catch (m) {
        this.onError(m)
    }
}
var _n = !1,
    Ur = null,
    Ar = !1,
    Ni = null,
    jd = {
        onError: function(e) {
            _n = !0, Ur = e
        }
    };

function Cd(e, t, n, r, l, i, o, a, u) {
    _n = !1, Ur = null, Sd.apply(jd, arguments)
}

function Ed(e, t, n, r, l, i, o, a, u) {
    if (Cd.apply(this, arguments), _n) {
        if (_n) {
            var c = Ur;
            _n = !1, Ur = null
        } else throw Error(y(198));
        Ar || (Ar = !0, Ni = c)
    }
}

function Ot(e) {
    var t = e,
        n = e;
    if (e.alternate)
        for (; t.return;) t = t.return;
    else {
        e = t;
        do t = e, t.flags & 4098 && (n = t.return), e = t.return; while (e)
    }
    return t.tag === 3 ? n : null
}

function Ga(e) {
    if (e.tag === 13) {
        var t = e.memoizedState;
        if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated
    }
    return null
}

function cs(e) {
    if (Ot(e) !== e) throw Error(y(188))
}

function Pd(e) {
    var t = e.alternate;
    if (!t) {
        if (t = Ot(e), t === null) throw Error(y(188));
        return t !== e ? null : e
    }
    for (var n = e, r = t;;) {
        var l = n.return;
        if (l === null) break;
        var i = l.alternate;
        if (i === null) {
            if (r = l.return, r !== null) {
                n = r;
                continue
            }
            break
        }
        if (l.child === i.child) {
            for (i = l.child; i;) {
                if (i === n) return cs(l), e;
                if (i === r) return cs(l), t;
                i = i.sibling
            }
            throw Error(y(188))
        }
        if (n.return !== r.return) n = l, r = i;
        else {
            for (var o = !1, a = l.child; a;) {
                if (a === n) {
                    o = !0, n = l, r = i;
                    break
                }
                if (a === r) {
                    o = !0, r = l, n = i;
                    break
                }
                a = a.sibling
            }
            if (!o) {
                for (a = i.child; a;) {
                    if (a === n) {
                        o = !0, n = i, r = l;
                        break
                    }
                    if (a === r) {
                        o = !0, r = i, n = l;
                        break
                    }
                    a = a.sibling
                }
                if (!o) throw Error(y(189))
            }
        }
        if (n.alternate !== r) throw Error(y(190))
    }
    if (n.tag !== 3) throw Error(y(188));
    return n.stateNode.current === n ? e : t
}

function Ka(e) {
    return e = Pd(e), e !== null ? Xa(e) : null
}

function Xa(e) {
    if (e.tag === 5 || e.tag === 6) return e;
    for (e = e.child; e !== null;) {
        var t = Xa(e);
        if (t !== null) return t;
        e = e.sibling
    }
    return null
}
var Ja = xe.unstable_scheduleCallback,
    ds = xe.unstable_cancelCallback,
    Td = xe.unstable_shouldYield,
    _d = xe.unstable_requestPaint,
    G = xe.unstable_now,
    Ld = xe.unstable_getCurrentPriorityLevel,
    po = xe.unstable_ImmediatePriority,
    Za = xe.unstable_UserBlockingPriority,
    Br = xe.unstable_NormalPriority,
    zd = xe.unstable_LowPriority,
    qa = xe.unstable_IdlePriority,
    cl = null,
    We = null;

function Rd(e) {
    if (We && typeof We.onCommitFiberRoot == "function") try {
        We.onCommitFiberRoot(cl, e, void 0, (e.current.flags & 128) === 128)
    } catch {}
}
var Fe = Math.clz32 ? Math.clz32 : Id,
    Md = Math.log,
    Fd = Math.LN2;

function Id(e) {
    return e >>>= 0, e === 0 ? 32 : 31 - (Md(e) / Fd | 0) | 0
}
var fr = 64,
    pr = 4194304;

function En(e) {
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
            return e
    }
}

function Wr(e, t) {
    var n = e.pendingLanes;
    if (n === 0) return 0;
    var r = 0,
        l = e.suspendedLanes,
        i = e.pingedLanes,
        o = n & 268435455;
    if (o !== 0) {
        var a = o & ~l;
        a !== 0 ? r = En(a) : (i &= o, i !== 0 && (r = En(i)))
    } else o = n & ~l, o !== 0 ? r = En(o) : i !== 0 && (r = En(i));
    if (r === 0) return 0;
    if (t !== 0 && t !== r && !(t & l) && (l = r & -r, i = t & -t, l >= i || l === 16 && (i & 4194240) !== 0)) return t;
    if (r & 4 && (r |= n & 16), t = e.entangledLanes, t !== 0)
        for (e = e.entanglements, t &= r; 0 < t;) n = 31 - Fe(t), l = 1 << n, r |= e[n], t &= ~l;
    return r
}

function Od(e, t) {
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
            return -1
    }
}

function Dd(e, t) {
    for (var n = e.suspendedLanes, r = e.pingedLanes, l = e.expirationTimes, i = e.pendingLanes; 0 < i;) {
        var o = 31 - Fe(i),
            a = 1 << o,
            u = l[o];
        u === -1 ? (!(a & n) || a & r) && (l[o] = Od(a, t)) : u <= t && (e.expiredLanes |= a), i &= ~a
    }
}

function Si(e) {
    return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
}

function ba() {
    var e = fr;
    return fr <<= 1, !(fr & 4194240) && (fr = 64), e
}

function Dl(e) {
    for (var t = [], n = 0; 31 > n; n++) t.push(e);
    return t
}

function nr(e, t, n) {
    e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - Fe(t), e[t] = n
}

function Ud(e, t) {
    var n = e.pendingLanes & ~t;
    e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
    var r = e.eventTimes;
    for (e = e.expirationTimes; 0 < n;) {
        var l = 31 - Fe(n),
            i = 1 << l;
        t[l] = 0, r[l] = -1, e[l] = -1, n &= ~i
    }
}

function mo(e, t) {
    var n = e.entangledLanes |= t;
    for (e = e.entanglements; n;) {
        var r = 31 - Fe(n),
            l = 1 << r;
        l & t | e[r] & t && (e[r] |= t), n &= ~l
    }
}
var O = 0;

function eu(e) {
    return e &= -e, 1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1
}
var tu, ho, nu, ru, lu, ji = !1,
    mr = [],
    st = null,
    at = null,
    ut = null,
    Bn = new Map,
    Wn = new Map,
    rt = [],
    Ad = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");

function fs(e, t) {
    switch (e) {
        case "focusin":
        case "focusout":
            st = null;
            break;
        case "dragenter":
        case "dragleave":
            at = null;
            break;
        case "mouseover":
        case "mouseout":
            ut = null;
            break;
        case "pointerover":
        case "pointerout":
            Bn.delete(t.pointerId);
            break;
        case "gotpointercapture":
        case "lostpointercapture":
            Wn.delete(t.pointerId)
    }
}

function yn(e, t, n, r, l, i) {
    return e === null || e.nativeEvent !== i ? (e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: i,
        targetContainers: [l]
    }, t !== null && (t = lr(t), t !== null && ho(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, l !== null && t.indexOf(l) === -1 && t.push(l), e)
}

function Bd(e, t, n, r, l) {
    switch (t) {
        case "focusin":
            return st = yn(st, e, t, n, r, l), !0;
        case "dragenter":
            return at = yn(at, e, t, n, r, l), !0;
        case "mouseover":
            return ut = yn(ut, e, t, n, r, l), !0;
        case "pointerover":
            var i = l.pointerId;
            return Bn.set(i, yn(Bn.get(i) || null, e, t, n, r, l)), !0;
        case "gotpointercapture":
            return i = l.pointerId, Wn.set(i, yn(Wn.get(i) || null, e, t, n, r, l)), !0
    }
    return !1
}

function iu(e) {
    var t = jt(e.target);
    if (t !== null) {
        var n = Ot(t);
        if (n !== null) {
            if (t = n.tag, t === 13) {
                if (t = Ga(n), t !== null) {
                    e.blockedOn = t, lu(e.priority, function() {
                        nu(n)
                    });
                    return
                }
            } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
                e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
                return
            }
        }
    }
    e.blockedOn = null
}

function Pr(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length;) {
        var n = Ci(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
        if (n === null) {
            n = e.nativeEvent;
            var r = new n.constructor(n.type, n);
            xi = r, n.target.dispatchEvent(r), xi = null
        } else return t = lr(n), t !== null && ho(t), e.blockedOn = n, !1;
        t.shift()
    }
    return !0
}

function ps(e, t, n) {
    Pr(e) && n.delete(t)
}

function Wd() {
    ji = !1, st !== null && Pr(st) && (st = null), at !== null && Pr(at) && (at = null), ut !== null && Pr(ut) && (ut = null), Bn.forEach(ps), Wn.forEach(ps)
}

function xn(e, t) {
    e.blockedOn === t && (e.blockedOn = null, ji || (ji = !0, xe.unstable_scheduleCallback(xe.unstable_NormalPriority, Wd)))
}

function Vn(e) {
    function t(l) {
        return xn(l, e)
    }
    if (0 < mr.length) {
        xn(mr[0], e);
        for (var n = 1; n < mr.length; n++) {
            var r = mr[n];
            r.blockedOn === e && (r.blockedOn = null)
        }
    }
    for (st !== null && xn(st, e), at !== null && xn(at, e), ut !== null && xn(ut, e), Bn.forEach(t), Wn.forEach(t), n = 0; n < rt.length; n++) r = rt[n], r.blockedOn === e && (r.blockedOn = null);
    for (; 0 < rt.length && (n = rt[0], n.blockedOn === null);) iu(n), n.blockedOn === null && rt.shift()
}
var bt = be.ReactCurrentBatchConfig,
    Vr = !0;

function Vd(e, t, n, r) {
    var l = O,
        i = bt.transition;
    bt.transition = null;
    try {
        O = 1, go(e, t, n, r)
    } finally {
        O = l, bt.transition = i
    }
}

function Hd(e, t, n, r) {
    var l = O,
        i = bt.transition;
    bt.transition = null;
    try {
        O = 4, go(e, t, n, r)
    } finally {
        O = l, bt.transition = i
    }
}

function go(e, t, n, r) {
    if (Vr) {
        var l = Ci(e, t, n, r);
        if (l === null) Gl(e, t, r, Hr, n), fs(e, r);
        else if (Bd(l, e, t, n, r)) r.stopPropagation();
        else if (fs(e, r), t & 4 && -1 < Ad.indexOf(e)) {
            for (; l !== null;) {
                var i = lr(l);
                if (i !== null && tu(i), i = Ci(e, t, n, r), i === null && Gl(e, t, r, Hr, n), i === l) break;
                l = i
            }
            l !== null && r.stopPropagation()
        } else Gl(e, t, r, null, n)
    }
}
var Hr = null;

function Ci(e, t, n, r) {
    if (Hr = null, e = fo(r), e = jt(e), e !== null)
        if (t = Ot(e), t === null) e = null;
        else if (n = t.tag, n === 13) {
        if (e = Ga(t), e !== null) return e;
        e = null
    } else if (n === 3) {
        if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
        e = null
    } else t !== e && (e = null);
    return Hr = e, null
}

function ou(e) {
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
            switch (Ld()) {
                case po:
                    return 1;
                case Za:
                    return 4;
                case Br:
                case zd:
                    return 16;
                case qa:
                    return 536870912;
                default:
                    return 16
            }
        default:
            return 16
    }
}
var it = null,
    vo = null,
    Tr = null;

function su() {
    if (Tr) return Tr;
    var e, t = vo,
        n = t.length,
        r, l = "value" in it ? it.value : it.textContent,
        i = l.length;
    for (e = 0; e < n && t[e] === l[e]; e++);
    var o = n - e;
    for (r = 1; r <= o && t[n - r] === l[i - r]; r++);
    return Tr = l.slice(e, 1 < r ? 1 - r : void 0)
}

function _r(e) {
    var t = e.keyCode;
    return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0
}

function hr() {
    return !0
}

function ms() {
    return !1
}

function ke(e) {
    function t(n, r, l, i, o) {
        this._reactName = n, this._targetInst = l, this.type = r, this.nativeEvent = i, this.target = o, this.currentTarget = null;
        for (var a in e) e.hasOwnProperty(a) && (n = e[a], this[a] = n ? n(i) : i[a]);
        return this.isDefaultPrevented = (i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1) ? hr : ms, this.isPropagationStopped = ms, this
    }
    return H(t.prototype, {
        preventDefault: function() {
            this.defaultPrevented = !0;
            var n = this.nativeEvent;
            n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = hr)
        },
        stopPropagation: function() {
            var n = this.nativeEvent;
            n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = hr)
        },
        persist: function() {},
        isPersistent: hr
    }), t
}
var dn = {
        eventPhase: 0,
        bubbles: 0,
        cancelable: 0,
        timeStamp: function(e) {
            return e.timeStamp || Date.now()
        },
        defaultPrevented: 0,
        isTrusted: 0
    },
    yo = ke(dn),
    rr = H({}, dn, {
        view: 0,
        detail: 0
    }),
    $d = ke(rr),
    Ul, Al, wn, dl = H({}, rr, {
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
        getModifierState: xo,
        button: 0,
        buttons: 0,
        relatedTarget: function(e) {
            return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget
        },
        movementX: function(e) {
            return "movementX" in e ? e.movementX : (e !== wn && (wn && e.type === "mousemove" ? (Ul = e.screenX - wn.screenX, Al = e.screenY - wn.screenY) : Al = Ul = 0, wn = e), Ul)
        },
        movementY: function(e) {
            return "movementY" in e ? e.movementY : Al
        }
    }),
    hs = ke(dl),
    Qd = H({}, dl, {
        dataTransfer: 0
    }),
    Yd = ke(Qd),
    Gd = H({}, rr, {
        relatedTarget: 0
    }),
    Bl = ke(Gd),
    Kd = H({}, dn, {
        animationName: 0,
        elapsedTime: 0,
        pseudoElement: 0
    }),
    Xd = ke(Kd),
    Jd = H({}, dn, {
        clipboardData: function(e) {
            return "clipboardData" in e ? e.clipboardData : window.clipboardData
        }
    }),
    Zd = ke(Jd),
    qd = H({}, dn, {
        data: 0
    }),
    gs = ke(qd),
    bd = {
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
    },
    ef = {
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
    },
    tf = {
        Alt: "altKey",
        Control: "ctrlKey",
        Meta: "metaKey",
        Shift: "shiftKey"
    };

function nf(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = tf[e]) ? !!t[e] : !1
}

function xo() {
    return nf
}
var rf = H({}, rr, {
        key: function(e) {
            if (e.key) {
                var t = bd[e.key] || e.key;
                if (t !== "Unidentified") return t
            }
            return e.type === "keypress" ? (e = _r(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? ef[e.keyCode] || "Unidentified" : ""
        },
        code: 0,
        location: 0,
        ctrlKey: 0,
        shiftKey: 0,
        altKey: 0,
        metaKey: 0,
        repeat: 0,
        locale: 0,
        getModifierState: xo,
        charCode: function(e) {
            return e.type === "keypress" ? _r(e) : 0
        },
        keyCode: function(e) {
            return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
        },
        which: function(e) {
            return e.type === "keypress" ? _r(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
        }
    }),
    lf = ke(rf),
    of = H({}, dl, {
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
    }),
    vs = ke(of),
    sf = H({}, rr, {
        touches: 0,
        targetTouches: 0,
        changedTouches: 0,
        altKey: 0,
        metaKey: 0,
        ctrlKey: 0,
        shiftKey: 0,
        getModifierState: xo
    }),
    af = ke(sf),
    uf = H({}, dn, {
        propertyName: 0,
        elapsedTime: 0,
        pseudoElement: 0
    }),
    cf = ke(uf),
    df = H({}, dl, {
        deltaX: function(e) {
            return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0
        },
        deltaY: function(e) {
            return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0
        },
        deltaZ: 0,
        deltaMode: 0
    }),
    ff = ke(df),
    pf = [9, 13, 27, 32],
    wo = Xe && "CompositionEvent" in window,
    Ln = null;
Xe && "documentMode" in document && (Ln = document.documentMode);
var mf = Xe && "TextEvent" in window && !Ln,
    au = Xe && (!wo || Ln && 8 < Ln && 11 >= Ln),
    ys = " ",
    xs = !1;

function uu(e, t) {
    switch (e) {
        case "keyup":
            return pf.indexOf(t.keyCode) !== -1;
        case "keydown":
            return t.keyCode !== 229;
        case "keypress":
        case "mousedown":
        case "focusout":
            return !0;
        default:
            return !1
    }
}

function cu(e) {
    return e = e.detail, typeof e == "object" && "data" in e ? e.data : null
}
var Bt = !1;

function hf(e, t) {
    switch (e) {
        case "compositionend":
            return cu(t);
        case "keypress":
            return t.which !== 32 ? null : (xs = !0, ys);
        case "textInput":
            return e = t.data, e === ys && xs ? null : e;
        default:
            return null
    }
}

function gf(e, t) {
    if (Bt) return e === "compositionend" || !wo && uu(e, t) ? (e = su(), Tr = vo = it = null, Bt = !1, e) : null;
    switch (e) {
        case "paste":
            return null;
        case "keypress":
            if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
                if (t.char && 1 < t.char.length) return t.char;
                if (t.which) return String.fromCharCode(t.which)
            }
            return null;
        case "compositionend":
            return au && t.locale !== "ko" ? null : t.data;
        default:
            return null
    }
}
var vf = {
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

function ws(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!vf[e.type] : t === "textarea"
}

function du(e, t, n, r) {
    Va(r), t = $r(t, "onChange"), 0 < t.length && (n = new yo("onChange", "change", null, n, r), e.push({
        event: n,
        listeners: t
    }))
}
var zn = null,
    Hn = null;

function yf(e) {
    Nu(e, 0)
}

function fl(e) {
    var t = Ht(e);
    if (Ia(t)) return e
}

function xf(e, t) {
    if (e === "change") return t
}
var fu = !1;
if (Xe) {
    var Wl;
    if (Xe) {
        var Vl = "oninput" in document;
        if (!Vl) {
            var ks = document.createElement("div");
            ks.setAttribute("oninput", "return;"), Vl = typeof ks.oninput == "function"
        }
        Wl = Vl
    } else Wl = !1;
    fu = Wl && (!document.documentMode || 9 < document.documentMode)
}

function Ns() {
    zn && (zn.detachEvent("onpropertychange", pu), Hn = zn = null)
}

function pu(e) {
    if (e.propertyName === "value" && fl(Hn)) {
        var t = [];
        du(t, Hn, e, fo(e)), Ya(yf, t)
    }
}

function wf(e, t, n) {
    e === "focusin" ? (Ns(), zn = t, Hn = n, zn.attachEvent("onpropertychange", pu)) : e === "focusout" && Ns()
}

function kf(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown") return fl(Hn)
}

function Nf(e, t) {
    if (e === "click") return fl(t)
}

function Sf(e, t) {
    if (e === "input" || e === "change") return fl(t)
}

function jf(e, t) {
    return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t
}
var De = typeof Object.is == "function" ? Object.is : jf;

function $n(e, t) {
    if (De(e, t)) return !0;
    if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
    var n = Object.keys(e),
        r = Object.keys(t);
    if (n.length !== r.length) return !1;
    for (r = 0; r < n.length; r++) {
        var l = n[r];
        if (!si.call(t, l) || !De(e[l], t[l])) return !1
    }
    return !0
}

function Ss(e) {
    for (; e && e.firstChild;) e = e.firstChild;
    return e
}

function js(e, t) {
    var n = Ss(e);
    e = 0;
    for (var r; n;) {
        if (n.nodeType === 3) {
            if (r = e + n.textContent.length, e <= t && r >= t) return {
                node: n,
                offset: t - e
            };
            e = r
        }
        e: {
            for (; n;) {
                if (n.nextSibling) {
                    n = n.nextSibling;
                    break e
                }
                n = n.parentNode
            }
            n = void 0
        }
        n = Ss(n)
    }
}

function mu(e, t) {
    return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? mu(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1
}

function hu() {
    for (var e = window, t = Dr(); t instanceof e.HTMLIFrameElement;) {
        try {
            var n = typeof t.contentWindow.location.href == "string"
        } catch {
            n = !1
        }
        if (n) e = t.contentWindow;
        else break;
        t = Dr(e.document)
    }
    return t
}

function ko(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true")
}

function Cf(e) {
    var t = hu(),
        n = e.focusedElem,
        r = e.selectionRange;
    if (t !== n && n && n.ownerDocument && mu(n.ownerDocument.documentElement, n)) {
        if (r !== null && ko(n)) {
            if (t = r.start, e = r.end, e === void 0 && (e = t), "selectionStart" in n) n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);
            else if (e = (t = n.ownerDocument || document) && t.defaultView || window, e.getSelection) {
                e = e.getSelection();
                var l = n.textContent.length,
                    i = Math.min(r.start, l);
                r = r.end === void 0 ? i : Math.min(r.end, l), !e.extend && i > r && (l = r, r = i, i = l), l = js(n, i);
                var o = js(n, r);
                l && o && (e.rangeCount !== 1 || e.anchorNode !== l.node || e.anchorOffset !== l.offset || e.focusNode !== o.node || e.focusOffset !== o.offset) && (t = t.createRange(), t.setStart(l.node, l.offset), e.removeAllRanges(), i > r ? (e.addRange(t), e.extend(o.node, o.offset)) : (t.setEnd(o.node, o.offset), e.addRange(t)))
            }
        }
        for (t = [], e = n; e = e.parentNode;) e.nodeType === 1 && t.push({
            element: e,
            left: e.scrollLeft,
            top: e.scrollTop
        });
        for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++) e = t[n], e.element.scrollLeft = e.left, e.element.scrollTop = e.top
    }
}
var Ef = Xe && "documentMode" in document && 11 >= document.documentMode,
    Wt = null,
    Ei = null,
    Rn = null,
    Pi = !1;

function Cs(e, t, n) {
    var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    Pi || Wt == null || Wt !== Dr(r) || (r = Wt, "selectionStart" in r && ko(r) ? r = {
        start: r.selectionStart,
        end: r.selectionEnd
    } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = {
        anchorNode: r.anchorNode,
        anchorOffset: r.anchorOffset,
        focusNode: r.focusNode,
        focusOffset: r.focusOffset
    }), Rn && $n(Rn, r) || (Rn = r, r = $r(Ei, "onSelect"), 0 < r.length && (t = new yo("onSelect", "select", null, t, n), e.push({
        event: t,
        listeners: r
    }), t.target = Wt)))
}

function gr(e, t) {
    var n = {};
    return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n
}
var Vt = {
        animationend: gr("Animation", "AnimationEnd"),
        animationiteration: gr("Animation", "AnimationIteration"),
        animationstart: gr("Animation", "AnimationStart"),
        transitionend: gr("Transition", "TransitionEnd")
    },
    Hl = {},
    gu = {};
Xe && (gu = document.createElement("div").style, "AnimationEvent" in window || (delete Vt.animationend.animation, delete Vt.animationiteration.animation, delete Vt.animationstart.animation), "TransitionEvent" in window || delete Vt.transitionend.transition);

function pl(e) {
    if (Hl[e]) return Hl[e];
    if (!Vt[e]) return e;
    var t = Vt[e],
        n;
    for (n in t)
        if (t.hasOwnProperty(n) && n in gu) return Hl[e] = t[n];
    return e
}
var vu = pl("animationend"),
    yu = pl("animationiteration"),
    xu = pl("animationstart"),
    wu = pl("transitionend"),
    ku = new Map,
    Es = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");

function vt(e, t) {
    ku.set(e, t), It(t, [e])
}
for (var $l = 0; $l < Es.length; $l++) {
    var Ql = Es[$l],
        Pf = Ql.toLowerCase(),
        Tf = Ql[0].toUpperCase() + Ql.slice(1);
    vt(Pf, "on" + Tf)
}
vt(vu, "onAnimationEnd");
vt(yu, "onAnimationIteration");
vt(xu, "onAnimationStart");
vt("dblclick", "onDoubleClick");
vt("focusin", "onFocus");
vt("focusout", "onBlur");
vt(wu, "onTransitionEnd");
nn("onMouseEnter", ["mouseout", "mouseover"]);
nn("onMouseLeave", ["mouseout", "mouseover"]);
nn("onPointerEnter", ["pointerout", "pointerover"]);
nn("onPointerLeave", ["pointerout", "pointerover"]);
It("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
It("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
It("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
It("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
It("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
It("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var Pn = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),
    _f = new Set("cancel close invalid load scroll toggle".split(" ").concat(Pn));

function Ps(e, t, n) {
    var r = e.type || "unknown-event";
    e.currentTarget = n, Ed(r, t, void 0, e), e.currentTarget = null
}

function Nu(e, t) {
    t = (t & 4) !== 0;
    for (var n = 0; n < e.length; n++) {
        var r = e[n],
            l = r.event;
        r = r.listeners;
        e: {
            var i = void 0;
            if (t)
                for (var o = r.length - 1; 0 <= o; o--) {
                    var a = r[o],
                        u = a.instance,
                        c = a.currentTarget;
                    if (a = a.listener, u !== i && l.isPropagationStopped()) break e;
                    Ps(l, a, c), i = u
                } else
                    for (o = 0; o < r.length; o++) {
                        if (a = r[o], u = a.instance, c = a.currentTarget, a = a.listener, u !== i && l.isPropagationStopped()) break e;
                        Ps(l, a, c), i = u
                    }
        }
    }
    if (Ar) throw e = Ni, Ar = !1, Ni = null, e
}

function U(e, t) {
    var n = t[Ri];
    n === void 0 && (n = t[Ri] = new Set);
    var r = e + "__bubble";
    n.has(r) || (Su(t, e, 2, !1), n.add(r))
}

function Yl(e, t, n) {
    var r = 0;
    t && (r |= 4), Su(n, e, r, t)
}
var vr = "_reactListening" + Math.random().toString(36).slice(2);

function Qn(e) {
    if (!e[vr]) {
        e[vr] = !0, La.forEach(function(n) {
            n !== "selectionchange" && (_f.has(n) || Yl(n, !1, e), Yl(n, !0, e))
        });
        var t = e.nodeType === 9 ? e : e.ownerDocument;
        t === null || t[vr] || (t[vr] = !0, Yl("selectionchange", !1, t))
    }
}

function Su(e, t, n, r) {
    switch (ou(t)) {
        case 1:
            var l = Vd;
            break;
        case 4:
            l = Hd;
            break;
        default:
            l = go
    }
    n = l.bind(null, t, n, e), l = void 0, !ki || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (l = !0), r ? l !== void 0 ? e.addEventListener(t, n, {
        capture: !0,
        passive: l
    }) : e.addEventListener(t, n, !0) : l !== void 0 ? e.addEventListener(t, n, {
        passive: l
    }) : e.addEventListener(t, n, !1)
}

function Gl(e, t, n, r, l) {
    var i = r;
    if (!(t & 1) && !(t & 2) && r !== null) e: for (;;) {
        if (r === null) return;
        var o = r.tag;
        if (o === 3 || o === 4) {
            var a = r.stateNode.containerInfo;
            if (a === l || a.nodeType === 8 && a.parentNode === l) break;
            if (o === 4)
                for (o = r.return; o !== null;) {
                    var u = o.tag;
                    if ((u === 3 || u === 4) && (u = o.stateNode.containerInfo, u === l || u.nodeType === 8 && u.parentNode === l)) return;
                    o = o.return
                }
            for (; a !== null;) {
                if (o = jt(a), o === null) return;
                if (u = o.tag, u === 5 || u === 6) {
                    r = i = o;
                    continue e
                }
                a = a.parentNode
            }
        }
        r = r.return
    }
    Ya(function() {
        var c = i,
            m = fo(n),
            h = [];
        e: {
            var g = ku.get(e);
            if (g !== void 0) {
                var w = yo,
                    k = e;
                switch (e) {
                    case "keypress":
                        if (_r(n) === 0) break e;
                    case "keydown":
                    case "keyup":
                        w = lf;
                        break;
                    case "focusin":
                        k = "focus", w = Bl;
                        break;
                    case "focusout":
                        k = "blur", w = Bl;
                        break;
                    case "beforeblur":
                    case "afterblur":
                        w = Bl;
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
                        w = hs;
                        break;
                    case "drag":
                    case "dragend":
                    case "dragenter":
                    case "dragexit":
                    case "dragleave":
                    case "dragover":
                    case "dragstart":
                    case "drop":
                        w = Yd;
                        break;
                    case "touchcancel":
                    case "touchend":
                    case "touchmove":
                    case "touchstart":
                        w = af;
                        break;
                    case vu:
                    case yu:
                    case xu:
                        w = Xd;
                        break;
                    case wu:
                        w = cf;
                        break;
                    case "scroll":
                        w = $d;
                        break;
                    case "wheel":
                        w = ff;
                        break;
                    case "copy":
                    case "cut":
                    case "paste":
                        w = Zd;
                        break;
                    case "gotpointercapture":
                    case "lostpointercapture":
                    case "pointercancel":
                    case "pointerdown":
                    case "pointermove":
                    case "pointerout":
                    case "pointerover":
                    case "pointerup":
                        w = vs
                }
                var x = (t & 4) !== 0,
                    _ = !x && e === "scroll",
                    f = x ? g !== null ? g + "Capture" : null : g;
                x = [];
                for (var d = c, p; d !== null;) {
                    p = d;
                    var v = p.stateNode;
                    if (p.tag === 5 && v !== null && (p = v, f !== null && (v = An(d, f), v != null && x.push(Yn(d, v, p)))), _) break;
                    d = d.return
                }
                0 < x.length && (g = new w(g, k, null, n, m), h.push({
                    event: g,
                    listeners: x
                }))
            }
        }
        if (!(t & 7)) {
            e: {
                if (g = e === "mouseover" || e === "pointerover", w = e === "mouseout" || e === "pointerout", g && n !== xi && (k = n.relatedTarget || n.fromElement) && (jt(k) || k[Je])) break e;
                if ((w || g) && (g = m.window === m ? m : (g = m.ownerDocument) ? g.defaultView || g.parentWindow : window, w ? (k = n.relatedTarget || n.toElement, w = c, k = k ? jt(k) : null, k !== null && (_ = Ot(k), k !== _ || k.tag !== 5 && k.tag !== 6) && (k = null)) : (w = null, k = c), w !== k)) {
                    if (x = hs, v = "onMouseLeave", f = "onMouseEnter", d = "mouse", (e === "pointerout" || e === "pointerover") && (x = vs, v = "onPointerLeave", f = "onPointerEnter", d = "pointer"), _ = w == null ? g : Ht(w), p = k == null ? g : Ht(k), g = new x(v, d + "leave", w, n, m), g.target = _, g.relatedTarget = p, v = null, jt(m) === c && (x = new x(f, d + "enter", k, n, m), x.target = p, x.relatedTarget = _, v = x), _ = v, w && k) t: {
                        for (x = w, f = k, d = 0, p = x; p; p = Dt(p)) d++;
                        for (p = 0, v = f; v; v = Dt(v)) p++;
                        for (; 0 < d - p;) x = Dt(x),
                        d--;
                        for (; 0 < p - d;) f = Dt(f),
                        p--;
                        for (; d--;) {
                            if (x === f || f !== null && x === f.alternate) break t;
                            x = Dt(x), f = Dt(f)
                        }
                        x = null
                    }
                    else x = null;
                    w !== null && Ts(h, g, w, x, !1), k !== null && _ !== null && Ts(h, _, k, x, !0)
                }
            }
            e: {
                if (g = c ? Ht(c) : window, w = g.nodeName && g.nodeName.toLowerCase(), w === "select" || w === "input" && g.type === "file") var N = xf;
                else if (ws(g))
                    if (fu) N = Sf;
                    else {
                        N = kf;
                        var C = wf
                    }
                else(w = g.nodeName) && w.toLowerCase() === "input" && (g.type === "checkbox" || g.type === "radio") && (N = Nf);
                if (N && (N = N(e, c))) {
                    du(h, N, n, m);
                    break e
                }
                C && C(e, g, c),
                e === "focusout" && (C = g._wrapperState) && C.controlled && g.type === "number" && mi(g, "number", g.value)
            }
            switch (C = c ? Ht(c) : window, e) {
                case "focusin":
                    (ws(C) || C.contentEditable === "true") && (Wt = C, Ei = c, Rn = null);
                    break;
                case "focusout":
                    Rn = Ei = Wt = null;
                    break;
                case "mousedown":
                    Pi = !0;
                    break;
                case "contextmenu":
                case "mouseup":
                case "dragend":
                    Pi = !1, Cs(h, n, m);
                    break;
                case "selectionchange":
                    if (Ef) break;
                case "keydown":
                case "keyup":
                    Cs(h, n, m)
            }
            var E;
            if (wo) e: {
                switch (e) {
                    case "compositionstart":
                        var P = "onCompositionStart";
                        break e;
                    case "compositionend":
                        P = "onCompositionEnd";
                        break e;
                    case "compositionupdate":
                        P = "onCompositionUpdate";
                        break e
                }
                P = void 0
            }
            else Bt ? uu(e, n) && (P = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (P = "onCompositionStart");P && (au && n.locale !== "ko" && (Bt || P !== "onCompositionStart" ? P === "onCompositionEnd" && Bt && (E = su()) : (it = m, vo = "value" in it ? it.value : it.textContent, Bt = !0)), C = $r(c, P), 0 < C.length && (P = new gs(P, e, null, n, m), h.push({
                event: P,
                listeners: C
            }), E ? P.data = E : (E = cu(n), E !== null && (P.data = E)))),
            (E = mf ? hf(e, n) : gf(e, n)) && (c = $r(c, "onBeforeInput"), 0 < c.length && (m = new gs("onBeforeInput", "beforeinput", null, n, m), h.push({
                event: m,
                listeners: c
            }), m.data = E))
        }
        Nu(h, t)
    })
}

function Yn(e, t, n) {
    return {
        instance: e,
        listener: t,
        currentTarget: n
    }
}

function $r(e, t) {
    for (var n = t + "Capture", r = []; e !== null;) {
        var l = e,
            i = l.stateNode;
        l.tag === 5 && i !== null && (l = i, i = An(e, n), i != null && r.unshift(Yn(e, i, l)), i = An(e, t), i != null && r.push(Yn(e, i, l))), e = e.return
    }
    return r
}

function Dt(e) {
    if (e === null) return null;
    do e = e.return; while (e && e.tag !== 5);
    return e || null
}

function Ts(e, t, n, r, l) {
    for (var i = t._reactName, o = []; n !== null && n !== r;) {
        var a = n,
            u = a.alternate,
            c = a.stateNode;
        if (u !== null && u === r) break;
        a.tag === 5 && c !== null && (a = c, l ? (u = An(n, i), u != null && o.unshift(Yn(n, u, a))) : l || (u = An(n, i), u != null && o.push(Yn(n, u, a)))), n = n.return
    }
    o.length !== 0 && e.push({
        event: t,
        listeners: o
    })
}
var Lf = /\r\n?/g,
    zf = /\u0000|\uFFFD/g;

function _s(e) {
    return (typeof e == "string" ? e : "" + e).replace(Lf, `
`).replace(zf, "")
}

function yr(e, t, n) {
    if (t = _s(t), _s(e) !== t && n) throw Error(y(425))
}

function Qr() {}
var Ti = null,
    _i = null;

function Li(e, t) {
    return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null
}
var zi = typeof setTimeout == "function" ? setTimeout : void 0,
    Rf = typeof clearTimeout == "function" ? clearTimeout : void 0,
    Ls = typeof Promise == "function" ? Promise : void 0,
    Mf = typeof queueMicrotask == "function" ? queueMicrotask : typeof Ls < "u" ? function(e) {
        return Ls.resolve(null).then(e).catch(Ff)
    } : zi;

function Ff(e) {
    setTimeout(function() {
        throw e
    })
}

function Kl(e, t) {
    var n = t,
        r = 0;
    do {
        var l = n.nextSibling;
        if (e.removeChild(n), l && l.nodeType === 8)
            if (n = l.data, n === "/$") {
                if (r === 0) {
                    e.removeChild(l), Vn(t);
                    return
                }
                r--
            } else n !== "$" && n !== "$?" && n !== "$!" || r++;
        n = l
    } while (n);
    Vn(t)
}

function ct(e) {
    for (; e != null; e = e.nextSibling) {
        var t = e.nodeType;
        if (t === 1 || t === 3) break;
        if (t === 8) {
            if (t = e.data, t === "$" || t === "$!" || t === "$?") break;
            if (t === "/$") return null
        }
    }
    return e
}

function zs(e) {
    e = e.previousSibling;
    for (var t = 0; e;) {
        if (e.nodeType === 8) {
            var n = e.data;
            if (n === "$" || n === "$!" || n === "$?") {
                if (t === 0) return e;
                t--
            } else n === "/$" && t++
        }
        e = e.previousSibling
    }
    return null
}
var fn = Math.random().toString(36).slice(2),
    Be = "__reactFiber$" + fn,
    Gn = "__reactProps$" + fn,
    Je = "__reactContainer$" + fn,
    Ri = "__reactEvents$" + fn,
    If = "__reactListeners$" + fn,
    Of = "__reactHandles$" + fn;

function jt(e) {
    var t = e[Be];
    if (t) return t;
    for (var n = e.parentNode; n;) {
        if (t = n[Je] || n[Be]) {
            if (n = t.alternate, t.child !== null || n !== null && n.child !== null)
                for (e = zs(e); e !== null;) {
                    if (n = e[Be]) return n;
                    e = zs(e)
                }
            return t
        }
        e = n, n = e.parentNode
    }
    return null
}

function lr(e) {
    return e = e[Be] || e[Je], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e
}

function Ht(e) {
    if (e.tag === 5 || e.tag === 6) return e.stateNode;
    throw Error(y(33))
}

function ml(e) {
    return e[Gn] || null
}
var Mi = [],
    $t = -1;

function yt(e) {
    return {
        current: e
    }
}

function A(e) {
    0 > $t || (e.current = Mi[$t], Mi[$t] = null, $t--)
}

function D(e, t) {
    $t++, Mi[$t] = e.current, e.current = t
}
var gt = {},
    oe = yt(gt),
    pe = yt(!1),
    Lt = gt;

function rn(e, t) {
    var n = e.type.contextTypes;
    if (!n) return gt;
    var r = e.stateNode;
    if (r && r.__reactInternalMemoizedUnmaskedChildContext === t) return r.__reactInternalMemoizedMaskedChildContext;
    var l = {},
        i;
    for (i in n) l[i] = t[i];
    return r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = l), l
}

function me(e) {
    return e = e.childContextTypes, e != null
}

function Yr() {
    A(pe), A(oe)
}

function Rs(e, t, n) {
    if (oe.current !== gt) throw Error(y(168));
    D(oe, t), D(pe, n)
}

function ju(e, t, n) {
    var r = e.stateNode;
    if (t = t.childContextTypes, typeof r.getChildContext != "function") return n;
    r = r.getChildContext();
    for (var l in r)
        if (!(l in t)) throw Error(y(108, xd(e) || "Unknown", l));
    return H({}, n, r)
}

function Gr(e) {
    return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || gt, Lt = oe.current, D(oe, e), D(pe, pe.current), !0
}

function Ms(e, t, n) {
    var r = e.stateNode;
    if (!r) throw Error(y(169));
    n ? (e = ju(e, t, Lt), r.__reactInternalMemoizedMergedChildContext = e, A(pe), A(oe), D(oe, e)) : A(pe), D(pe, n)
}
var Qe = null,
    hl = !1,
    Xl = !1;

function Cu(e) {
    Qe === null ? Qe = [e] : Qe.push(e)
}

function Df(e) {
    hl = !0, Cu(e)
}

function xt() {
    if (!Xl && Qe !== null) {
        Xl = !0;
        var e = 0,
            t = O;
        try {
            var n = Qe;
            for (O = 1; e < n.length; e++) {
                var r = n[e];
                do r = r(!0); while (r !== null)
            }
            Qe = null, hl = !1
        } catch (l) {
            throw Qe !== null && (Qe = Qe.slice(e + 1)), Ja(po, xt), l
        } finally {
            O = t, Xl = !1
        }
    }
    return null
}
var Qt = [],
    Yt = 0,
    Kr = null,
    Xr = 0,
    Ne = [],
    Se = 0,
    zt = null,
    Ye = 1,
    Ge = "";

function Nt(e, t) {
    Qt[Yt++] = Xr, Qt[Yt++] = Kr, Kr = e, Xr = t
}

function Eu(e, t, n) {
    Ne[Se++] = Ye, Ne[Se++] = Ge, Ne[Se++] = zt, zt = e;
    var r = Ye;
    e = Ge;
    var l = 32 - Fe(r) - 1;
    r &= ~(1 << l), n += 1;
    var i = 32 - Fe(t) + l;
    if (30 < i) {
        var o = l - l % 5;
        i = (r & (1 << o) - 1).toString(32), r >>= o, l -= o, Ye = 1 << 32 - Fe(t) + l | n << l | r, Ge = i + e
    } else Ye = 1 << i | n << l | r, Ge = e
}

function No(e) {
    e.return !== null && (Nt(e, 1), Eu(e, 1, 0))
}

function So(e) {
    for (; e === Kr;) Kr = Qt[--Yt], Qt[Yt] = null, Xr = Qt[--Yt], Qt[Yt] = null;
    for (; e === zt;) zt = Ne[--Se], Ne[Se] = null, Ge = Ne[--Se], Ne[Se] = null, Ye = Ne[--Se], Ne[Se] = null
}
var ye = null,
    ve = null,
    B = !1,
    Me = null;

function Pu(e, t) {
    var n = je(5, null, null, 0);
    n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [n], e.flags |= 16) : t.push(n)
}

function Fs(e, t) {
    switch (e.tag) {
        case 5:
            var n = e.type;
            return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, ye = e, ve = ct(t.firstChild), !0) : !1;
        case 6:
            return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, ye = e, ve = null, !0) : !1;
        case 13:
            return t = t.nodeType !== 8 ? null : t, t !== null ? (n = zt !== null ? {
                id: Ye,
                overflow: Ge
            } : null, e.memoizedState = {
                dehydrated: t,
                treeContext: n,
                retryLane: 1073741824
            }, n = je(18, null, null, 0), n.stateNode = t, n.return = e, e.child = n, ye = e, ve = null, !0) : !1;
        default:
            return !1
    }
}

function Fi(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0
}

function Ii(e) {
    if (B) {
        var t = ve;
        if (t) {
            var n = t;
            if (!Fs(e, t)) {
                if (Fi(e)) throw Error(y(418));
                t = ct(n.nextSibling);
                var r = ye;
                t && Fs(e, t) ? Pu(r, n) : (e.flags = e.flags & -4097 | 2, B = !1, ye = e)
            }
        } else {
            if (Fi(e)) throw Error(y(418));
            e.flags = e.flags & -4097 | 2, B = !1, ye = e
        }
    }
}

function Is(e) {
    for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13;) e = e.return;
    ye = e
}

function xr(e) {
    if (e !== ye) return !1;
    if (!B) return Is(e), B = !0, !1;
    var t;
    if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !Li(e.type, e.memoizedProps)), t && (t = ve)) {
        if (Fi(e)) throw Tu(), Error(y(418));
        for (; t;) Pu(e, t), t = ct(t.nextSibling)
    }
    if (Is(e), e.tag === 13) {
        if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(y(317));
        e: {
            for (e = e.nextSibling, t = 0; e;) {
                if (e.nodeType === 8) {
                    var n = e.data;
                    if (n === "/$") {
                        if (t === 0) {
                            ve = ct(e.nextSibling);
                            break e
                        }
                        t--
                    } else n !== "$" && n !== "$!" && n !== "$?" || t++
                }
                e = e.nextSibling
            }
            ve = null
        }
    } else ve = ye ? ct(e.stateNode.nextSibling) : null;
    return !0
}

function Tu() {
    for (var e = ve; e;) e = ct(e.nextSibling)
}

function ln() {
    ve = ye = null, B = !1
}

function jo(e) {
    Me === null ? Me = [e] : Me.push(e)
}
var Uf = be.ReactCurrentBatchConfig;

function kn(e, t, n) {
    if (e = n.ref, e !== null && typeof e != "function" && typeof e != "object") {
        if (n._owner) {
            if (n = n._owner, n) {
                if (n.tag !== 1) throw Error(y(309));
                var r = n.stateNode
            }
            if (!r) throw Error(y(147, e));
            var l = r,
                i = "" + e;
            return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === i ? t.ref : (t = function(o) {
                var a = l.refs;
                o === null ? delete a[i] : a[i] = o
            }, t._stringRef = i, t)
        }
        if (typeof e != "string") throw Error(y(284));
        if (!n._owner) throw Error(y(290, e))
    }
    return e
}

function wr(e, t) {
    throw e = Object.prototype.toString.call(t), Error(y(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e))
}

function Os(e) {
    var t = e._init;
    return t(e._payload)
}

function _u(e) {
    function t(f, d) {
        if (e) {
            var p = f.deletions;
            p === null ? (f.deletions = [d], f.flags |= 16) : p.push(d)
        }
    }

    function n(f, d) {
        if (!e) return null;
        for (; d !== null;) t(f, d), d = d.sibling;
        return null
    }

    function r(f, d) {
        for (f = new Map; d !== null;) d.key !== null ? f.set(d.key, d) : f.set(d.index, d), d = d.sibling;
        return f
    }

    function l(f, d) {
        return f = mt(f, d), f.index = 0, f.sibling = null, f
    }

    function i(f, d, p) {
        return f.index = p, e ? (p = f.alternate, p !== null ? (p = p.index, p < d ? (f.flags |= 2, d) : p) : (f.flags |= 2, d)) : (f.flags |= 1048576, d)
    }

    function o(f) {
        return e && f.alternate === null && (f.flags |= 2), f
    }

    function a(f, d, p, v) {
        return d === null || d.tag !== 6 ? (d = ni(p, f.mode, v), d.return = f, d) : (d = l(d, p), d.return = f, d)
    }

    function u(f, d, p, v) {
        var N = p.type;
        return N === At ? m(f, d, p.props.children, v, p.key) : d !== null && (d.elementType === N || typeof N == "object" && N !== null && N.$$typeof === tt && Os(N) === d.type) ? (v = l(d, p.props), v.ref = kn(f, d, p), v.return = f, v) : (v = Or(p.type, p.key, p.props, null, f.mode, v), v.ref = kn(f, d, p), v.return = f, v)
    }

    function c(f, d, p, v) {
        return d === null || d.tag !== 4 || d.stateNode.containerInfo !== p.containerInfo || d.stateNode.implementation !== p.implementation ? (d = ri(p, f.mode, v), d.return = f, d) : (d = l(d, p.children || []), d.return = f, d)
    }

    function m(f, d, p, v, N) {
        return d === null || d.tag !== 7 ? (d = _t(p, f.mode, v, N), d.return = f, d) : (d = l(d, p), d.return = f, d)
    }

    function h(f, d, p) {
        if (typeof d == "string" && d !== "" || typeof d == "number") return d = ni("" + d, f.mode, p), d.return = f, d;
        if (typeof d == "object" && d !== null) {
            switch (d.$$typeof) {
                case ur:
                    return p = Or(d.type, d.key, d.props, null, f.mode, p), p.ref = kn(f, null, d), p.return = f, p;
                case Ut:
                    return d = ri(d, f.mode, p), d.return = f, d;
                case tt:
                    var v = d._init;
                    return h(f, v(d._payload), p)
            }
            if (Cn(d) || gn(d)) return d = _t(d, f.mode, p, null), d.return = f, d;
            wr(f, d)
        }
        return null
    }

    function g(f, d, p, v) {
        var N = d !== null ? d.key : null;
        if (typeof p == "string" && p !== "" || typeof p == "number") return N !== null ? null : a(f, d, "" + p, v);
        if (typeof p == "object" && p !== null) {
            switch (p.$$typeof) {
                case ur:
                    return p.key === N ? u(f, d, p, v) : null;
                case Ut:
                    return p.key === N ? c(f, d, p, v) : null;
                case tt:
                    return N = p._init, g(f, d, N(p._payload), v)
            }
            if (Cn(p) || gn(p)) return N !== null ? null : m(f, d, p, v, null);
            wr(f, p)
        }
        return null
    }

    function w(f, d, p, v, N) {
        if (typeof v == "string" && v !== "" || typeof v == "number") return f = f.get(p) || null, a(d, f, "" + v, N);
        if (typeof v == "object" && v !== null) {
            switch (v.$$typeof) {
                case ur:
                    return f = f.get(v.key === null ? p : v.key) || null, u(d, f, v, N);
                case Ut:
                    return f = f.get(v.key === null ? p : v.key) || null, c(d, f, v, N);
                case tt:
                    var C = v._init;
                    return w(f, d, p, C(v._payload), N)
            }
            if (Cn(v) || gn(v)) return f = f.get(p) || null, m(d, f, v, N, null);
            wr(d, v)
        }
        return null
    }

    function k(f, d, p, v) {
        for (var N = null, C = null, E = d, P = d = 0, Q = null; E !== null && P < p.length; P++) {
            E.index > P ? (Q = E, E = null) : Q = E.sibling;
            var M = g(f, E, p[P], v);
            if (M === null) {
                E === null && (E = Q);
                break
            }
            e && E && M.alternate === null && t(f, E), d = i(M, d, P), C === null ? N = M : C.sibling = M, C = M, E = Q
        }
        if (P === p.length) return n(f, E), B && Nt(f, P), N;
        if (E === null) {
            for (; P < p.length; P++) E = h(f, p[P], v), E !== null && (d = i(E, d, P), C === null ? N = E : C.sibling = E, C = E);
            return B && Nt(f, P), N
        }
        for (E = r(f, E); P < p.length; P++) Q = w(E, f, P, p[P], v), Q !== null && (e && Q.alternate !== null && E.delete(Q.key === null ? P : Q.key), d = i(Q, d, P), C === null ? N = Q : C.sibling = Q, C = Q);
        return e && E.forEach(function(Te) {
            return t(f, Te)
        }), B && Nt(f, P), N
    }

    function x(f, d, p, v) {
        var N = gn(p);
        if (typeof N != "function") throw Error(y(150));
        if (p = N.call(p), p == null) throw Error(y(151));
        for (var C = N = null, E = d, P = d = 0, Q = null, M = p.next(); E !== null && !M.done; P++, M = p.next()) {
            E.index > P ? (Q = E, E = null) : Q = E.sibling;
            var Te = g(f, E, M.value, v);
            if (Te === null) {
                E === null && (E = Q);
                break
            }
            e && E && Te.alternate === null && t(f, E), d = i(Te, d, P), C === null ? N = Te : C.sibling = Te, C = Te, E = Q
        }
        if (M.done) return n(f, E), B && Nt(f, P), N;
        if (E === null) {
            for (; !M.done; P++, M = p.next()) M = h(f, M.value, v), M !== null && (d = i(M, d, P), C === null ? N = M : C.sibling = M, C = M);
            return B && Nt(f, P), N
        }
        for (E = r(f, E); !M.done; P++, M = p.next()) M = w(E, f, P, M.value, v), M !== null && (e && M.alternate !== null && E.delete(M.key === null ? P : M.key), d = i(M, d, P), C === null ? N = M : C.sibling = M, C = M);
        return e && E.forEach(function(mn) {
            return t(f, mn)
        }), B && Nt(f, P), N
    }

    function _(f, d, p, v) {
        if (typeof p == "object" && p !== null && p.type === At && p.key === null && (p = p.props.children), typeof p == "object" && p !== null) {
            switch (p.$$typeof) {
                case ur:
                    e: {
                        for (var N = p.key, C = d; C !== null;) {
                            if (C.key === N) {
                                if (N = p.type, N === At) {
                                    if (C.tag === 7) {
                                        n(f, C.sibling), d = l(C, p.props.children), d.return = f, f = d;
                                        break e
                                    }
                                } else if (C.elementType === N || typeof N == "object" && N !== null && N.$$typeof === tt && Os(N) === C.type) {
                                    n(f, C.sibling), d = l(C, p.props), d.ref = kn(f, C, p), d.return = f, f = d;
                                    break e
                                }
                                n(f, C);
                                break
                            } else t(f, C);
                            C = C.sibling
                        }
                        p.type === At ? (d = _t(p.props.children, f.mode, v, p.key), d.return = f, f = d) : (v = Or(p.type, p.key, p.props, null, f.mode, v), v.ref = kn(f, d, p), v.return = f, f = v)
                    }
                    return o(f);
                case Ut:
                    e: {
                        for (C = p.key; d !== null;) {
                            if (d.key === C)
                                if (d.tag === 4 && d.stateNode.containerInfo === p.containerInfo && d.stateNode.implementation === p.implementation) {
                                    n(f, d.sibling), d = l(d, p.children || []), d.return = f, f = d;
                                    break e
                                } else {
                                    n(f, d);
                                    break
                                }
                            else t(f, d);
                            d = d.sibling
                        }
                        d = ri(p, f.mode, v),
                        d.return = f,
                        f = d
                    }
                    return o(f);
                case tt:
                    return C = p._init, _(f, d, C(p._payload), v)
            }
            if (Cn(p)) return k(f, d, p, v);
            if (gn(p)) return x(f, d, p, v);
            wr(f, p)
        }
        return typeof p == "string" && p !== "" || typeof p == "number" ? (p = "" + p, d !== null && d.tag === 6 ? (n(f, d.sibling), d = l(d, p), d.return = f, f = d) : (n(f, d), d = ni(p, f.mode, v), d.return = f, f = d), o(f)) : n(f, d)
    }
    return _
}
var on = _u(!0),
    Lu = _u(!1),
    Jr = yt(null),
    Zr = null,
    Gt = null,
    Co = null;

function Eo() {
    Co = Gt = Zr = null
}

function Po(e) {
    var t = Jr.current;
    A(Jr), e._currentValue = t
}

function Oi(e, t, n) {
    for (; e !== null;) {
        var r = e.alternate;
        if ((e.childLanes & t) !== t ? (e.childLanes |= t, r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t), e === n) break;
        e = e.return
    }
}

function en(e, t) {
    Zr = e, Co = Gt = null, e = e.dependencies, e !== null && e.firstContext !== null && (e.lanes & t && (fe = !0), e.firstContext = null)
}

function Ee(e) {
    var t = e._currentValue;
    if (Co !== e)
        if (e = {
                context: e,
                memoizedValue: t,
                next: null
            }, Gt === null) {
            if (Zr === null) throw Error(y(308));
            Gt = e, Zr.dependencies = {
                lanes: 0,
                firstContext: e
            }
        } else Gt = Gt.next = e;
    return t
}
var Ct = null;

function To(e) {
    Ct === null ? Ct = [e] : Ct.push(e)
}

function zu(e, t, n, r) {
    var l = t.interleaved;
    return l === null ? (n.next = n, To(t)) : (n.next = l.next, l.next = n), t.interleaved = n, Ze(e, r)
}

function Ze(e, t) {
    e.lanes |= t;
    var n = e.alternate;
    for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null;) e.childLanes |= t, n = e.alternate, n !== null && (n.childLanes |= t), n = e, e = e.return;
    return n.tag === 3 ? n.stateNode : null
}
var nt = !1;

function _o(e) {
    e.updateQueue = {
        baseState: e.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: {
            pending: null,
            interleaved: null,
            lanes: 0
        },
        effects: null
    }
}

function Ru(e, t) {
    e = e.updateQueue, t.updateQueue === e && (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects
    })
}

function Ke(e, t) {
    return {
        eventTime: e,
        lane: t,
        tag: 0,
        payload: null,
        callback: null,
        next: null
    }
}

function dt(e, t, n) {
    var r = e.updateQueue;
    if (r === null) return null;
    if (r = r.shared, I & 2) {
        var l = r.pending;
        return l === null ? t.next = t : (t.next = l.next, l.next = t), r.pending = t, Ze(e, n)
    }
    return l = r.interleaved, l === null ? (t.next = t, To(r)) : (t.next = l.next, l.next = t), r.interleaved = t, Ze(e, n)
}

function Lr(e, t, n) {
    if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194240) !== 0)) {
        var r = t.lanes;
        r &= e.pendingLanes, n |= r, t.lanes = n, mo(e, n)
    }
}

function Ds(e, t) {
    var n = e.updateQueue,
        r = e.alternate;
    if (r !== null && (r = r.updateQueue, n === r)) {
        var l = null,
            i = null;
        if (n = n.firstBaseUpdate, n !== null) {
            do {
                var o = {
                    eventTime: n.eventTime,
                    lane: n.lane,
                    tag: n.tag,
                    payload: n.payload,
                    callback: n.callback,
                    next: null
                };
                i === null ? l = i = o : i = i.next = o, n = n.next
            } while (n !== null);
            i === null ? l = i = t : i = i.next = t
        } else l = i = t;
        n = {
            baseState: r.baseState,
            firstBaseUpdate: l,
            lastBaseUpdate: i,
            shared: r.shared,
            effects: r.effects
        }, e.updateQueue = n;
        return
    }
    e = n.lastBaseUpdate, e === null ? n.firstBaseUpdate = t : e.next = t, n.lastBaseUpdate = t
}

function qr(e, t, n, r) {
    var l = e.updateQueue;
    nt = !1;
    var i = l.firstBaseUpdate,
        o = l.lastBaseUpdate,
        a = l.shared.pending;
    if (a !== null) {
        l.shared.pending = null;
        var u = a,
            c = u.next;
        u.next = null, o === null ? i = c : o.next = c, o = u;
        var m = e.alternate;
        m !== null && (m = m.updateQueue, a = m.lastBaseUpdate, a !== o && (a === null ? m.firstBaseUpdate = c : a.next = c, m.lastBaseUpdate = u))
    }
    if (i !== null) {
        var h = l.baseState;
        o = 0, m = c = u = null, a = i;
        do {
            var g = a.lane,
                w = a.eventTime;
            if ((r & g) === g) {
                m !== null && (m = m.next = {
                    eventTime: w,
                    lane: 0,
                    tag: a.tag,
                    payload: a.payload,
                    callback: a.callback,
                    next: null
                });
                e: {
                    var k = e,
                        x = a;
                    switch (g = t, w = n, x.tag) {
                        case 1:
                            if (k = x.payload, typeof k == "function") {
                                h = k.call(w, h, g);
                                break e
                            }
                            h = k;
                            break e;
                        case 3:
                            k.flags = k.flags & -65537 | 128;
                        case 0:
                            if (k = x.payload, g = typeof k == "function" ? k.call(w, h, g) : k, g == null) break e;
                            h = H({}, h, g);
                            break e;
                        case 2:
                            nt = !0
                    }
                }
                a.callback !== null && a.lane !== 0 && (e.flags |= 64, g = l.effects, g === null ? l.effects = [a] : g.push(a))
            } else w = {
                eventTime: w,
                lane: g,
                tag: a.tag,
                payload: a.payload,
                callback: a.callback,
                next: null
            }, m === null ? (c = m = w, u = h) : m = m.next = w, o |= g;
            if (a = a.next, a === null) {
                if (a = l.shared.pending, a === null) break;
                g = a, a = g.next, g.next = null, l.lastBaseUpdate = g, l.shared.pending = null
            }
        } while (!0);
        if (m === null && (u = h), l.baseState = u, l.firstBaseUpdate = c, l.lastBaseUpdate = m, t = l.shared.interleaved, t !== null) {
            l = t;
            do o |= l.lane, l = l.next; while (l !== t)
        } else i === null && (l.shared.lanes = 0);
        Mt |= o, e.lanes = o, e.memoizedState = h
    }
}

function Us(e, t, n) {
    if (e = t.effects, t.effects = null, e !== null)
        for (t = 0; t < e.length; t++) {
            var r = e[t],
                l = r.callback;
            if (l !== null) {
                if (r.callback = null, r = n, typeof l != "function") throw Error(y(191, l));
                l.call(r)
            }
        }
}
var ir = {},
    Ve = yt(ir),
    Kn = yt(ir),
    Xn = yt(ir);

function Et(e) {
    if (e === ir) throw Error(y(174));
    return e
}

function Lo(e, t) {
    switch (D(Xn, t), D(Kn, e), D(Ve, ir), e = t.nodeType, e) {
        case 9:
        case 11:
            t = (t = t.documentElement) ? t.namespaceURI : gi(null, "");
            break;
        default:
            e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = gi(t, e)
    }
    A(Ve), D(Ve, t)
}

function sn() {
    A(Ve), A(Kn), A(Xn)
}

function Mu(e) {
    Et(Xn.current);
    var t = Et(Ve.current),
        n = gi(t, e.type);
    t !== n && (D(Kn, e), D(Ve, n))
}

function zo(e) {
    Kn.current === e && (A(Ve), A(Kn))
}
var W = yt(0);

function br(e) {
    for (var t = e; t !== null;) {
        if (t.tag === 13) {
            var n = t.memoizedState;
            if (n !== null && (n = n.dehydrated, n === null || n.data === "$?" || n.data === "$!")) return t
        } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
            if (t.flags & 128) return t
        } else if (t.child !== null) {
            t.child.return = t, t = t.child;
            continue
        }
        if (t === e) break;
        for (; t.sibling === null;) {
            if (t.return === null || t.return === e) return null;
            t = t.return
        }
        t.sibling.return = t.return, t = t.sibling
    }
    return null
}
var Jl = [];

function Ro() {
    for (var e = 0; e < Jl.length; e++) Jl[e]._workInProgressVersionPrimary = null;
    Jl.length = 0
}
var zr = be.ReactCurrentDispatcher,
    Zl = be.ReactCurrentBatchConfig,
    Rt = 0,
    V = null,
    X = null,
    q = null,
    el = !1,
    Mn = !1,
    Jn = 0,
    Af = 0;

function re() {
    throw Error(y(321))
}

function Mo(e, t) {
    if (t === null) return !1;
    for (var n = 0; n < t.length && n < e.length; n++)
        if (!De(e[n], t[n])) return !1;
    return !0
}

function Fo(e, t, n, r, l, i) {
    if (Rt = i, V = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, zr.current = e === null || e.memoizedState === null ? Hf : $f, e = n(r, l), Mn) {
        i = 0;
        do {
            if (Mn = !1, Jn = 0, 25 <= i) throw Error(y(301));
            i += 1, q = X = null, t.updateQueue = null, zr.current = Qf, e = n(r, l)
        } while (Mn)
    }
    if (zr.current = tl, t = X !== null && X.next !== null, Rt = 0, q = X = V = null, el = !1, t) throw Error(y(300));
    return e
}

function Io() {
    var e = Jn !== 0;
    return Jn = 0, e
}

function Ae() {
    var e = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null
    };
    return q === null ? V.memoizedState = q = e : q = q.next = e, q
}

function Pe() {
    if (X === null) {
        var e = V.alternate;
        e = e !== null ? e.memoizedState : null
    } else e = X.next;
    var t = q === null ? V.memoizedState : q.next;
    if (t !== null) q = t, X = e;
    else {
        if (e === null) throw Error(y(310));
        X = e, e = {
            memoizedState: X.memoizedState,
            baseState: X.baseState,
            baseQueue: X.baseQueue,
            queue: X.queue,
            next: null
        }, q === null ? V.memoizedState = q = e : q = q.next = e
    }
    return q
}

function Zn(e, t) {
    return typeof t == "function" ? t(e) : t
}

function ql(e) {
    var t = Pe(),
        n = t.queue;
    if (n === null) throw Error(y(311));
    n.lastRenderedReducer = e;
    var r = X,
        l = r.baseQueue,
        i = n.pending;
    if (i !== null) {
        if (l !== null) {
            var o = l.next;
            l.next = i.next, i.next = o
        }
        r.baseQueue = l = i, n.pending = null
    }
    if (l !== null) {
        i = l.next, r = r.baseState;
        var a = o = null,
            u = null,
            c = i;
        do {
            var m = c.lane;
            if ((Rt & m) === m) u !== null && (u = u.next = {
                lane: 0,
                action: c.action,
                hasEagerState: c.hasEagerState,
                eagerState: c.eagerState,
                next: null
            }), r = c.hasEagerState ? c.eagerState : e(r, c.action);
            else {
                var h = {
                    lane: m,
                    action: c.action,
                    hasEagerState: c.hasEagerState,
                    eagerState: c.eagerState,
                    next: null
                };
                u === null ? (a = u = h, o = r) : u = u.next = h, V.lanes |= m, Mt |= m
            }
            c = c.next
        } while (c !== null && c !== i);
        u === null ? o = r : u.next = a, De(r, t.memoizedState) || (fe = !0), t.memoizedState = r, t.baseState = o, t.baseQueue = u, n.lastRenderedState = r
    }
    if (e = n.interleaved, e !== null) {
        l = e;
        do i = l.lane, V.lanes |= i, Mt |= i, l = l.next; while (l !== e)
    } else l === null && (n.lanes = 0);
    return [t.memoizedState, n.dispatch]
}

function bl(e) {
    var t = Pe(),
        n = t.queue;
    if (n === null) throw Error(y(311));
    n.lastRenderedReducer = e;
    var r = n.dispatch,
        l = n.pending,
        i = t.memoizedState;
    if (l !== null) {
        n.pending = null;
        var o = l = l.next;
        do i = e(i, o.action), o = o.next; while (o !== l);
        De(i, t.memoizedState) || (fe = !0), t.memoizedState = i, t.baseQueue === null && (t.baseState = i), n.lastRenderedState = i
    }
    return [i, r]
}

function Fu() {}

function Iu(e, t) {
    var n = V,
        r = Pe(),
        l = t(),
        i = !De(r.memoizedState, l);
    if (i && (r.memoizedState = l, fe = !0), r = r.queue, Oo(Uu.bind(null, n, r, e), [e]), r.getSnapshot !== t || i || q !== null && q.memoizedState.tag & 1) {
        if (n.flags |= 2048, qn(9, Du.bind(null, n, r, l, t), void 0, null), b === null) throw Error(y(349));
        Rt & 30 || Ou(n, t, l)
    }
    return l
}

function Ou(e, t, n) {
    e.flags |= 16384, e = {
        getSnapshot: t,
        value: n
    }, t = V.updateQueue, t === null ? (t = {
        lastEffect: null,
        stores: null
    }, V.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e))
}

function Du(e, t, n, r) {
    t.value = n, t.getSnapshot = r, Au(t) && Bu(e)
}

function Uu(e, t, n) {
    return n(function() {
        Au(t) && Bu(e)
    })
}

function Au(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
        var n = t();
        return !De(e, n)
    } catch {
        return !0
    }
}

function Bu(e) {
    var t = Ze(e, 1);
    t !== null && Ie(t, e, 1, -1)
}

function As(e) {
    var t = Ae();
    return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = {
        pending: null,
        interleaved: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Zn,
        lastRenderedState: e
    }, t.queue = e, e = e.dispatch = Vf.bind(null, V, e), [t.memoizedState, e]
}

function qn(e, t, n, r) {
    return e = {
        tag: e,
        create: t,
        destroy: n,
        deps: r,
        next: null
    }, t = V.updateQueue, t === null ? (t = {
        lastEffect: null,
        stores: null
    }, V.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e)), e
}

function Wu() {
    return Pe().memoizedState
}

function Rr(e, t, n, r) {
    var l = Ae();
    V.flags |= e, l.memoizedState = qn(1 | t, n, void 0, r === void 0 ? null : r)
}

function gl(e, t, n, r) {
    var l = Pe();
    r = r === void 0 ? null : r;
    var i = void 0;
    if (X !== null) {
        var o = X.memoizedState;
        if (i = o.destroy, r !== null && Mo(r, o.deps)) {
            l.memoizedState = qn(t, n, i, r);
            return
        }
    }
    V.flags |= e, l.memoizedState = qn(1 | t, n, i, r)
}

function Bs(e, t) {
    return Rr(8390656, 8, e, t)
}

function Oo(e, t) {
    return gl(2048, 8, e, t)
}

function Vu(e, t) {
    return gl(4, 2, e, t)
}

function Hu(e, t) {
    return gl(4, 4, e, t)
}

function $u(e, t) {
    if (typeof t == "function") return e = e(), t(e),
        function() {
            t(null)
        };
    if (t != null) return e = e(), t.current = e,
        function() {
            t.current = null
        }
}

function Qu(e, t, n) {
    return n = n != null ? n.concat([e]) : null, gl(4, 4, $u.bind(null, t, e), n)
}

function Do() {}

function Yu(e, t) {
    var n = Pe();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && Mo(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e)
}

function Gu(e, t) {
    var n = Pe();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && Mo(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e)
}

function Ku(e, t, n) {
    return Rt & 21 ? (De(n, t) || (n = ba(), V.lanes |= n, Mt |= n, e.baseState = !0), t) : (e.baseState && (e.baseState = !1, fe = !0), e.memoizedState = n)
}

function Bf(e, t) {
    var n = O;
    O = n !== 0 && 4 > n ? n : 4, e(!0);
    var r = Zl.transition;
    Zl.transition = {};
    try {
        e(!1), t()
    } finally {
        O = n, Zl.transition = r
    }
}

function Xu() {
    return Pe().memoizedState
}

function Wf(e, t, n) {
    var r = pt(e);
    if (n = {
            lane: r,
            action: n,
            hasEagerState: !1,
            eagerState: null,
            next: null
        }, Ju(e)) Zu(t, n);
    else if (n = zu(e, t, n, r), n !== null) {
        var l = ae();
        Ie(n, e, r, l), qu(n, t, r)
    }
}

function Vf(e, t, n) {
    var r = pt(e),
        l = {
            lane: r,
            action: n,
            hasEagerState: !1,
            eagerState: null,
            next: null
        };
    if (Ju(e)) Zu(t, l);
    else {
        var i = e.alternate;
        if (e.lanes === 0 && (i === null || i.lanes === 0) && (i = t.lastRenderedReducer, i !== null)) try {
            var o = t.lastRenderedState,
                a = i(o, n);
            if (l.hasEagerState = !0, l.eagerState = a, De(a, o)) {
                var u = t.interleaved;
                u === null ? (l.next = l, To(t)) : (l.next = u.next, u.next = l), t.interleaved = l;
                return
            }
        } catch {} finally {}
        n = zu(e, t, l, r), n !== null && (l = ae(), Ie(n, e, r, l), qu(n, t, r))
    }
}

function Ju(e) {
    var t = e.alternate;
    return e === V || t !== null && t === V
}

function Zu(e, t) {
    Mn = el = !0;
    var n = e.pending;
    n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t
}

function qu(e, t, n) {
    if (n & 4194240) {
        var r = t.lanes;
        r &= e.pendingLanes, n |= r, t.lanes = n, mo(e, n)
    }
}
var tl = {
        readContext: Ee,
        useCallback: re,
        useContext: re,
        useEffect: re,
        useImperativeHandle: re,
        useInsertionEffect: re,
        useLayoutEffect: re,
        useMemo: re,
        useReducer: re,
        useRef: re,
        useState: re,
        useDebugValue: re,
        useDeferredValue: re,
        useTransition: re,
        useMutableSource: re,
        useSyncExternalStore: re,
        useId: re,
        unstable_isNewReconciler: !1
    },
    Hf = {
        readContext: Ee,
        useCallback: function(e, t) {
            return Ae().memoizedState = [e, t === void 0 ? null : t], e
        },
        useContext: Ee,
        useEffect: Bs,
        useImperativeHandle: function(e, t, n) {
            return n = n != null ? n.concat([e]) : null, Rr(4194308, 4, $u.bind(null, t, e), n)
        },
        useLayoutEffect: function(e, t) {
            return Rr(4194308, 4, e, t)
        },
        useInsertionEffect: function(e, t) {
            return Rr(4, 2, e, t)
        },
        useMemo: function(e, t) {
            var n = Ae();
            return t = t === void 0 ? null : t, e = e(), n.memoizedState = [e, t], e
        },
        useReducer: function(e, t, n) {
            var r = Ae();
            return t = n !== void 0 ? n(t) : t, r.memoizedState = r.baseState = t, e = {
                pending: null,
                interleaved: null,
                lanes: 0,
                dispatch: null,
                lastRenderedReducer: e,
                lastRenderedState: t
            }, r.queue = e, e = e.dispatch = Wf.bind(null, V, e), [r.memoizedState, e]
        },
        useRef: function(e) {
            var t = Ae();
            return e = {
                current: e
            }, t.memoizedState = e
        },
        useState: As,
        useDebugValue: Do,
        useDeferredValue: function(e) {
            return Ae().memoizedState = e
        },
        useTransition: function() {
            var e = As(!1),
                t = e[0];
            return e = Bf.bind(null, e[1]), Ae().memoizedState = e, [t, e]
        },
        useMutableSource: function() {},
        useSyncExternalStore: function(e, t, n) {
            var r = V,
                l = Ae();
            if (B) {
                if (n === void 0) throw Error(y(407));
                n = n()
            } else {
                if (n = t(), b === null) throw Error(y(349));
                Rt & 30 || Ou(r, t, n)
            }
            l.memoizedState = n;
            var i = {
                value: n,
                getSnapshot: t
            };
            return l.queue = i, Bs(Uu.bind(null, r, i, e), [e]), r.flags |= 2048, qn(9, Du.bind(null, r, i, n, t), void 0, null), n
        },
        useId: function() {
            var e = Ae(),
                t = b.identifierPrefix;
            if (B) {
                var n = Ge,
                    r = Ye;
                n = (r & ~(1 << 32 - Fe(r) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = Jn++, 0 < n && (t += "H" + n.toString(32)), t += ":"
            } else n = Af++, t = ":" + t + "r" + n.toString(32) + ":";
            return e.memoizedState = t
        },
        unstable_isNewReconciler: !1
    },
    $f = {
        readContext: Ee,
        useCallback: Yu,
        useContext: Ee,
        useEffect: Oo,
        useImperativeHandle: Qu,
        useInsertionEffect: Vu,
        useLayoutEffect: Hu,
        useMemo: Gu,
        useReducer: ql,
        useRef: Wu,
        useState: function() {
            return ql(Zn)
        },
        useDebugValue: Do,
        useDeferredValue: function(e) {
            var t = Pe();
            return Ku(t, X.memoizedState, e)
        },
        useTransition: function() {
            var e = ql(Zn)[0],
                t = Pe().memoizedState;
            return [e, t]
        },
        useMutableSource: Fu,
        useSyncExternalStore: Iu,
        useId: Xu,
        unstable_isNewReconciler: !1
    },
    Qf = {
        readContext: Ee,
        useCallback: Yu,
        useContext: Ee,
        useEffect: Oo,
        useImperativeHandle: Qu,
        useInsertionEffect: Vu,
        useLayoutEffect: Hu,
        useMemo: Gu,
        useReducer: bl,
        useRef: Wu,
        useState: function() {
            return bl(Zn)
        },
        useDebugValue: Do,
        useDeferredValue: function(e) {
            var t = Pe();
            return X === null ? t.memoizedState = e : Ku(t, X.memoizedState, e)
        },
        useTransition: function() {
            var e = bl(Zn)[0],
                t = Pe().memoizedState;
            return [e, t]
        },
        useMutableSource: Fu,
        useSyncExternalStore: Iu,
        useId: Xu,
        unstable_isNewReconciler: !1
    };

function ze(e, t) {
    if (e && e.defaultProps) {
        t = H({}, t), e = e.defaultProps;
        for (var n in e) t[n] === void 0 && (t[n] = e[n]);
        return t
    }
    return t
}

function Di(e, t, n, r) {
    t = e.memoizedState, n = n(r, t), n = n == null ? t : H({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n)
}
var vl = {
    isMounted: function(e) {
        return (e = e._reactInternals) ? Ot(e) === e : !1
    },
    enqueueSetState: function(e, t, n) {
        e = e._reactInternals;
        var r = ae(),
            l = pt(e),
            i = Ke(r, l);
        i.payload = t, n != null && (i.callback = n), t = dt(e, i, l), t !== null && (Ie(t, e, l, r), Lr(t, e, l))
    },
    enqueueReplaceState: function(e, t, n) {
        e = e._reactInternals;
        var r = ae(),
            l = pt(e),
            i = Ke(r, l);
        i.tag = 1, i.payload = t, n != null && (i.callback = n), t = dt(e, i, l), t !== null && (Ie(t, e, l, r), Lr(t, e, l))
    },
    enqueueForceUpdate: function(e, t) {
        e = e._reactInternals;
        var n = ae(),
            r = pt(e),
            l = Ke(n, r);
        l.tag = 2, t != null && (l.callback = t), t = dt(e, l, r), t !== null && (Ie(t, e, r, n), Lr(t, e, r))
    }
};

function Ws(e, t, n, r, l, i, o) {
    return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, i, o) : t.prototype && t.prototype.isPureReactComponent ? !$n(n, r) || !$n(l, i) : !0
}

function bu(e, t, n) {
    var r = !1,
        l = gt,
        i = t.contextType;
    return typeof i == "object" && i !== null ? i = Ee(i) : (l = me(t) ? Lt : oe.current, r = t.contextTypes, i = (r = r != null) ? rn(e, l) : gt), t = new t(n, i), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = vl, e.stateNode = t, t._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = l, e.__reactInternalMemoizedMaskedChildContext = i), t
}

function Vs(e, t, n, r) {
    e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && vl.enqueueReplaceState(t, t.state, null)
}

function Ui(e, t, n, r) {
    var l = e.stateNode;
    l.props = n, l.state = e.memoizedState, l.refs = {}, _o(e);
    var i = t.contextType;
    typeof i == "object" && i !== null ? l.context = Ee(i) : (i = me(t) ? Lt : oe.current, l.context = rn(e, i)), l.state = e.memoizedState, i = t.getDerivedStateFromProps, typeof i == "function" && (Di(e, t, i, n), l.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof l.getSnapshotBeforeUpdate == "function" || typeof l.UNSAFE_componentWillMount != "function" && typeof l.componentWillMount != "function" || (t = l.state, typeof l.componentWillMount == "function" && l.componentWillMount(), typeof l.UNSAFE_componentWillMount == "function" && l.UNSAFE_componentWillMount(), t !== l.state && vl.enqueueReplaceState(l, l.state, null), qr(e, n, l, r), l.state = e.memoizedState), typeof l.componentDidMount == "function" && (e.flags |= 4194308)
}

function an(e, t) {
    try {
        var n = "",
            r = t;
        do n += yd(r), r = r.return; while (r);
        var l = n
    } catch (i) {
        l = `
Error generating stack: ` + i.message + `
` + i.stack
    }
    return {
        value: e,
        source: t,
        stack: l,
        digest: null
    }
}

function ei(e, t, n) {
    return {
        value: e,
        source: null,
        stack: n ?? null,
        digest: t ?? null
    }
}

function Ai(e, t) {
    try {
        console.error(t.value)
    } catch (n) {
        setTimeout(function() {
            throw n
        })
    }
}
var Yf = typeof WeakMap == "function" ? WeakMap : Map;

function ec(e, t, n) {
    n = Ke(-1, n), n.tag = 3, n.payload = {
        element: null
    };
    var r = t.value;
    return n.callback = function() {
        rl || (rl = !0, Xi = r), Ai(e, t)
    }, n
}

function tc(e, t, n) {
    n = Ke(-1, n), n.tag = 3;
    var r = e.type.getDerivedStateFromError;
    if (typeof r == "function") {
        var l = t.value;
        n.payload = function() {
            return r(l)
        }, n.callback = function() {
            Ai(e, t)
        }
    }
    var i = e.stateNode;
    return i !== null && typeof i.componentDidCatch == "function" && (n.callback = function() {
        Ai(e, t), typeof r != "function" && (ft === null ? ft = new Set([this]) : ft.add(this));
        var o = t.stack;
        this.componentDidCatch(t.value, {
            componentStack: o !== null ? o : ""
        })
    }), n
}

function Hs(e, t, n) {
    var r = e.pingCache;
    if (r === null) {
        r = e.pingCache = new Yf;
        var l = new Set;
        r.set(t, l)
    } else l = r.get(t), l === void 0 && (l = new Set, r.set(t, l));
    l.has(n) || (l.add(n), e = op.bind(null, e, t, n), t.then(e, e))
}

function $s(e) {
    do {
        var t;
        if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : !0), t) return e;
        e = e.return
    } while (e !== null);
    return null
}

function Qs(e, t, n, r, l) {
    return e.mode & 1 ? (e.flags |= 65536, e.lanes = l, e) : (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = Ke(-1, 1), t.tag = 2, dt(n, t, 1))), n.lanes |= 1), e)
}
var Gf = be.ReactCurrentOwner,
    fe = !1;

function se(e, t, n, r) {
    t.child = e === null ? Lu(t, null, n, r) : on(t, e.child, n, r)
}

function Ys(e, t, n, r, l) {
    n = n.render;
    var i = t.ref;
    return en(t, l), r = Fo(e, t, n, r, i, l), n = Io(), e !== null && !fe ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~l, qe(e, t, l)) : (B && n && No(t), t.flags |= 1, se(e, t, r, l), t.child)
}

function Gs(e, t, n, r, l) {
    if (e === null) {
        var i = n.type;
        return typeof i == "function" && !Qo(i) && i.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = i, nc(e, t, i, r, l)) : (e = Or(n.type, null, r, t, t.mode, l), e.ref = t.ref, e.return = t, t.child = e)
    }
    if (i = e.child, !(e.lanes & l)) {
        var o = i.memoizedProps;
        if (n = n.compare, n = n !== null ? n : $n, n(o, r) && e.ref === t.ref) return qe(e, t, l)
    }
    return t.flags |= 1, e = mt(i, r), e.ref = t.ref, e.return = t, t.child = e
}

function nc(e, t, n, r, l) {
    if (e !== null) {
        var i = e.memoizedProps;
        if ($n(i, r) && e.ref === t.ref)
            if (fe = !1, t.pendingProps = r = i, (e.lanes & l) !== 0) e.flags & 131072 && (fe = !0);
            else return t.lanes = e.lanes, qe(e, t, l)
    }
    return Bi(e, t, n, r, l)
}

function rc(e, t, n) {
    var r = t.pendingProps,
        l = r.children,
        i = e !== null ? e.memoizedState : null;
    if (r.mode === "hidden")
        if (!(t.mode & 1)) t.memoizedState = {
            baseLanes: 0,
            cachePool: null,
            transitions: null
        }, D(Xt, ge), ge |= n;
        else {
            if (!(n & 1073741824)) return e = i !== null ? i.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = {
                baseLanes: e,
                cachePool: null,
                transitions: null
            }, t.updateQueue = null, D(Xt, ge), ge |= e, null;
            t.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null
            }, r = i !== null ? i.baseLanes : n, D(Xt, ge), ge |= r
        }
    else i !== null ? (r = i.baseLanes | n, t.memoizedState = null) : r = n, D(Xt, ge), ge |= r;
    return se(e, t, l, n), t.child
}

function lc(e, t) {
    var n = t.ref;
    (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152)
}

function Bi(e, t, n, r, l) {
    var i = me(n) ? Lt : oe.current;
    return i = rn(t, i), en(t, l), n = Fo(e, t, n, r, i, l), r = Io(), e !== null && !fe ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~l, qe(e, t, l)) : (B && r && No(t), t.flags |= 1, se(e, t, n, l), t.child)
}

function Ks(e, t, n, r, l) {
    if (me(n)) {
        var i = !0;
        Gr(t)
    } else i = !1;
    if (en(t, l), t.stateNode === null) Mr(e, t), bu(t, n, r), Ui(t, n, r, l), r = !0;
    else if (e === null) {
        var o = t.stateNode,
            a = t.memoizedProps;
        o.props = a;
        var u = o.context,
            c = n.contextType;
        typeof c == "object" && c !== null ? c = Ee(c) : (c = me(n) ? Lt : oe.current, c = rn(t, c));
        var m = n.getDerivedStateFromProps,
            h = typeof m == "function" || typeof o.getSnapshotBeforeUpdate == "function";
        h || typeof o.UNSAFE_componentWillReceiveProps != "function" && typeof o.componentWillReceiveProps != "function" || (a !== r || u !== c) && Vs(t, o, r, c), nt = !1;
        var g = t.memoizedState;
        o.state = g, qr(t, r, o, l), u = t.memoizedState, a !== r || g !== u || pe.current || nt ? (typeof m == "function" && (Di(t, n, m, r), u = t.memoizedState), (a = nt || Ws(t, n, a, r, g, u, c)) ? (h || typeof o.UNSAFE_componentWillMount != "function" && typeof o.componentWillMount != "function" || (typeof o.componentWillMount == "function" && o.componentWillMount(), typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount()), typeof o.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof o.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = u), o.props = r, o.state = u, o.context = c, r = a) : (typeof o.componentDidMount == "function" && (t.flags |= 4194308), r = !1)
    } else {
        o = t.stateNode, Ru(e, t), a = t.memoizedProps, c = t.type === t.elementType ? a : ze(t.type, a), o.props = c, h = t.pendingProps, g = o.context, u = n.contextType, typeof u == "object" && u !== null ? u = Ee(u) : (u = me(n) ? Lt : oe.current, u = rn(t, u));
        var w = n.getDerivedStateFromProps;
        (m = typeof w == "function" || typeof o.getSnapshotBeforeUpdate == "function") || typeof o.UNSAFE_componentWillReceiveProps != "function" && typeof o.componentWillReceiveProps != "function" || (a !== h || g !== u) && Vs(t, o, r, u), nt = !1, g = t.memoizedState, o.state = g, qr(t, r, o, l);
        var k = t.memoizedState;
        a !== h || g !== k || pe.current || nt ? (typeof w == "function" && (Di(t, n, w, r), k = t.memoizedState), (c = nt || Ws(t, n, c, r, g, k, u) || !1) ? (m || typeof o.UNSAFE_componentWillUpdate != "function" && typeof o.componentWillUpdate != "function" || (typeof o.componentWillUpdate == "function" && o.componentWillUpdate(r, k, u), typeof o.UNSAFE_componentWillUpdate == "function" && o.UNSAFE_componentWillUpdate(r, k, u)), typeof o.componentDidUpdate == "function" && (t.flags |= 4), typeof o.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof o.componentDidUpdate != "function" || a === e.memoizedProps && g === e.memoizedState || (t.flags |= 4), typeof o.getSnapshotBeforeUpdate != "function" || a === e.memoizedProps && g === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = k), o.props = r, o.state = k, o.context = u, r = c) : (typeof o.componentDidUpdate != "function" || a === e.memoizedProps && g === e.memoizedState || (t.flags |= 4), typeof o.getSnapshotBeforeUpdate != "function" || a === e.memoizedProps && g === e.memoizedState || (t.flags |= 1024), r = !1)
    }
    return Wi(e, t, n, r, i, l)
}

function Wi(e, t, n, r, l, i) {
    lc(e, t);
    var o = (t.flags & 128) !== 0;
    if (!r && !o) return l && Ms(t, n, !1), qe(e, t, i);
    r = t.stateNode, Gf.current = t;
    var a = o && typeof n.getDerivedStateFromError != "function" ? null : r.render();
    return t.flags |= 1, e !== null && o ? (t.child = on(t, e.child, null, i), t.child = on(t, null, a, i)) : se(e, t, a, i), t.memoizedState = r.state, l && Ms(t, n, !0), t.child
}

function ic(e) {
    var t = e.stateNode;
    t.pendingContext ? Rs(e, t.pendingContext, t.pendingContext !== t.context) : t.context && Rs(e, t.context, !1), Lo(e, t.containerInfo)
}

function Xs(e, t, n, r, l) {
    return ln(), jo(l), t.flags |= 256, se(e, t, n, r), t.child
}
var Vi = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0
};

function Hi(e) {
    return {
        baseLanes: e,
        cachePool: null,
        transitions: null
    }
}

function oc(e, t, n) {
    var r = t.pendingProps,
        l = W.current,
        i = !1,
        o = (t.flags & 128) !== 0,
        a;
    if ((a = o) || (a = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0), a ? (i = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (l |= 1), D(W, l & 1), e === null) return Ii(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1, null) : (o = r.children, e = r.fallback, i ? (r = t.mode, i = t.child, o = {
        mode: "hidden",
        children: o
    }, !(r & 1) && i !== null ? (i.childLanes = 0, i.pendingProps = o) : i = wl(o, r, 0, null), e = _t(e, r, n, null), i.return = t, e.return = t, i.sibling = e, t.child = i, t.child.memoizedState = Hi(n), t.memoizedState = Vi, e) : Uo(t, o));
    if (l = e.memoizedState, l !== null && (a = l.dehydrated, a !== null)) return Kf(e, t, o, r, a, l, n);
    if (i) {
        i = r.fallback, o = t.mode, l = e.child, a = l.sibling;
        var u = {
            mode: "hidden",
            children: r.children
        };
        return !(o & 1) && t.child !== l ? (r = t.child, r.childLanes = 0, r.pendingProps = u, t.deletions = null) : (r = mt(l, u), r.subtreeFlags = l.subtreeFlags & 14680064), a !== null ? i = mt(a, i) : (i = _t(i, o, n, null), i.flags |= 2), i.return = t, r.return = t, r.sibling = i, t.child = r, r = i, i = t.child, o = e.child.memoizedState, o = o === null ? Hi(n) : {
            baseLanes: o.baseLanes | n,
            cachePool: null,
            transitions: o.transitions
        }, i.memoizedState = o, i.childLanes = e.childLanes & ~n, t.memoizedState = Vi, r
    }
    return i = e.child, e = i.sibling, r = mt(i, {
        mode: "visible",
        children: r.children
    }), !(t.mode & 1) && (r.lanes = n), r.return = t, r.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = r, t.memoizedState = null, r
}

function Uo(e, t) {
    return t = wl({
        mode: "visible",
        children: t
    }, e.mode, 0, null), t.return = e, e.child = t
}

function kr(e, t, n, r) {
    return r !== null && jo(r), on(t, e.child, null, n), e = Uo(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e
}

function Kf(e, t, n, r, l, i, o) {
    if (n) return t.flags & 256 ? (t.flags &= -257, r = ei(Error(y(422))), kr(e, t, o, r)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (i = r.fallback, l = t.mode, r = wl({
        mode: "visible",
        children: r.children
    }, l, 0, null), i = _t(i, l, o, null), i.flags |= 2, r.return = t, i.return = t, r.sibling = i, t.child = r, t.mode & 1 && on(t, e.child, null, o), t.child.memoizedState = Hi(o), t.memoizedState = Vi, i);
    if (!(t.mode & 1)) return kr(e, t, o, null);
    if (l.data === "$!") {
        if (r = l.nextSibling && l.nextSibling.dataset, r) var a = r.dgst;
        return r = a, i = Error(y(419)), r = ei(i, r, void 0), kr(e, t, o, r)
    }
    if (a = (o & e.childLanes) !== 0, fe || a) {
        if (r = b, r !== null) {
            switch (o & -o) {
                case 4:
                    l = 2;
                    break;
                case 16:
                    l = 8;
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
                    l = 32;
                    break;
                case 536870912:
                    l = 268435456;
                    break;
                default:
                    l = 0
            }
            l = l & (r.suspendedLanes | o) ? 0 : l, l !== 0 && l !== i.retryLane && (i.retryLane = l, Ze(e, l), Ie(r, e, l, -1))
        }
        return $o(), r = ei(Error(y(421))), kr(e, t, o, r)
    }
    return l.data === "$?" ? (t.flags |= 128, t.child = e.child, t = sp.bind(null, e), l._reactRetry = t, null) : (e = i.treeContext, ve = ct(l.nextSibling), ye = t, B = !0, Me = null, e !== null && (Ne[Se++] = Ye, Ne[Se++] = Ge, Ne[Se++] = zt, Ye = e.id, Ge = e.overflow, zt = t), t = Uo(t, r.children), t.flags |= 4096, t)
}

function Js(e, t, n) {
    e.lanes |= t;
    var r = e.alternate;
    r !== null && (r.lanes |= t), Oi(e.return, t, n)
}

function ti(e, t, n, r, l) {
    var i = e.memoizedState;
    i === null ? e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: l
    } : (i.isBackwards = t, i.rendering = null, i.renderingStartTime = 0, i.last = r, i.tail = n, i.tailMode = l)
}

function sc(e, t, n) {
    var r = t.pendingProps,
        l = r.revealOrder,
        i = r.tail;
    if (se(e, t, r.children, n), r = W.current, r & 2) r = r & 1 | 2, t.flags |= 128;
    else {
        if (e !== null && e.flags & 128) e: for (e = t.child; e !== null;) {
            if (e.tag === 13) e.memoizedState !== null && Js(e, n, t);
            else if (e.tag === 19) Js(e, n, t);
            else if (e.child !== null) {
                e.child.return = e, e = e.child;
                continue
            }
            if (e === t) break e;
            for (; e.sibling === null;) {
                if (e.return === null || e.return === t) break e;
                e = e.return
            }
            e.sibling.return = e.return, e = e.sibling
        }
        r &= 1
    }
    if (D(W, r), !(t.mode & 1)) t.memoizedState = null;
    else switch (l) {
        case "forwards":
            for (n = t.child, l = null; n !== null;) e = n.alternate, e !== null && br(e) === null && (l = n), n = n.sibling;
            n = l, n === null ? (l = t.child, t.child = null) : (l = n.sibling, n.sibling = null), ti(t, !1, l, n, i);
            break;
        case "backwards":
            for (n = null, l = t.child, t.child = null; l !== null;) {
                if (e = l.alternate, e !== null && br(e) === null) {
                    t.child = l;
                    break
                }
                e = l.sibling, l.sibling = n, n = l, l = e
            }
            ti(t, !0, n, null, i);
            break;
        case "together":
            ti(t, !1, null, null, void 0);
            break;
        default:
            t.memoizedState = null
    }
    return t.child
}

function Mr(e, t) {
    !(t.mode & 1) && e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2)
}

function qe(e, t, n) {
    if (e !== null && (t.dependencies = e.dependencies), Mt |= t.lanes, !(n & t.childLanes)) return null;
    if (e !== null && t.child !== e.child) throw Error(y(153));
    if (t.child !== null) {
        for (e = t.child, n = mt(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null;) e = e.sibling, n = n.sibling = mt(e, e.pendingProps), n.return = t;
        n.sibling = null
    }
    return t.child
}

function Xf(e, t, n) {
    switch (t.tag) {
        case 3:
            ic(t), ln();
            break;
        case 5:
            Mu(t);
            break;
        case 1:
            me(t.type) && Gr(t);
            break;
        case 4:
            Lo(t, t.stateNode.containerInfo);
            break;
        case 10:
            var r = t.type._context,
                l = t.memoizedProps.value;
            D(Jr, r._currentValue), r._currentValue = l;
            break;
        case 13:
            if (r = t.memoizedState, r !== null) return r.dehydrated !== null ? (D(W, W.current & 1), t.flags |= 128, null) : n & t.child.childLanes ? oc(e, t, n) : (D(W, W.current & 1), e = qe(e, t, n), e !== null ? e.sibling : null);
            D(W, W.current & 1);
            break;
        case 19:
            if (r = (n & t.childLanes) !== 0, e.flags & 128) {
                if (r) return sc(e, t, n);
                t.flags |= 128
            }
            if (l = t.memoizedState, l !== null && (l.rendering = null, l.tail = null, l.lastEffect = null), D(W, W.current), r) break;
            return null;
        case 22:
        case 23:
            return t.lanes = 0, rc(e, t, n)
    }
    return qe(e, t, n)
}
var ac, $i, uc, cc;
ac = function(e, t) {
    for (var n = t.child; n !== null;) {
        if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
        else if (n.tag !== 4 && n.child !== null) {
            n.child.return = n, n = n.child;
            continue
        }
        if (n === t) break;
        for (; n.sibling === null;) {
            if (n.return === null || n.return === t) return;
            n = n.return
        }
        n.sibling.return = n.return, n = n.sibling
    }
};
$i = function() {};
uc = function(e, t, n, r) {
    var l = e.memoizedProps;
    if (l !== r) {
        e = t.stateNode, Et(Ve.current);
        var i = null;
        switch (n) {
            case "input":
                l = fi(e, l), r = fi(e, r), i = [];
                break;
            case "select":
                l = H({}, l, {
                    value: void 0
                }), r = H({}, r, {
                    value: void 0
                }), i = [];
                break;
            case "textarea":
                l = hi(e, l), r = hi(e, r), i = [];
                break;
            default:
                typeof l.onClick != "function" && typeof r.onClick == "function" && (e.onclick = Qr)
        }
        vi(n, r);
        var o;
        n = null;
        for (c in l)
            if (!r.hasOwnProperty(c) && l.hasOwnProperty(c) && l[c] != null)
                if (c === "style") {
                    var a = l[c];
                    for (o in a) a.hasOwnProperty(o) && (n || (n = {}), n[o] = "")
                } else c !== "dangerouslySetInnerHTML" && c !== "children" && c !== "suppressContentEditableWarning" && c !== "suppressHydrationWarning" && c !== "autoFocus" && (Dn.hasOwnProperty(c) ? i || (i = []) : (i = i || []).push(c, null));
        for (c in r) {
            var u = r[c];
            if (a = l != null ? l[c] : void 0, r.hasOwnProperty(c) && u !== a && (u != null || a != null))
                if (c === "style")
                    if (a) {
                        for (o in a) !a.hasOwnProperty(o) || u && u.hasOwnProperty(o) || (n || (n = {}), n[o] = "");
                        for (o in u) u.hasOwnProperty(o) && a[o] !== u[o] && (n || (n = {}), n[o] = u[o])
                    } else n || (i || (i = []), i.push(c, n)), n = u;
            else c === "dangerouslySetInnerHTML" ? (u = u ? u.__html : void 0, a = a ? a.__html : void 0, u != null && a !== u && (i = i || []).push(c, u)) : c === "children" ? typeof u != "string" && typeof u != "number" || (i = i || []).push(c, "" + u) : c !== "suppressContentEditableWarning" && c !== "suppressHydrationWarning" && (Dn.hasOwnProperty(c) ? (u != null && c === "onScroll" && U("scroll", e), i || a === u || (i = [])) : (i = i || []).push(c, u))
        }
        n && (i = i || []).push("style", n);
        var c = i;
        (t.updateQueue = c) && (t.flags |= 4)
    }
};
cc = function(e, t, n, r) {
    n !== r && (t.flags |= 4)
};

function Nn(e, t) {
    if (!B) switch (e.tailMode) {
        case "hidden":
            t = e.tail;
            for (var n = null; t !== null;) t.alternate !== null && (n = t), t = t.sibling;
            n === null ? e.tail = null : n.sibling = null;
            break;
        case "collapsed":
            n = e.tail;
            for (var r = null; n !== null;) n.alternate !== null && (r = n), n = n.sibling;
            r === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : r.sibling = null
    }
}

function le(e) {
    var t = e.alternate !== null && e.alternate.child === e.child,
        n = 0,
        r = 0;
    if (t)
        for (var l = e.child; l !== null;) n |= l.lanes | l.childLanes, r |= l.subtreeFlags & 14680064, r |= l.flags & 14680064, l.return = e, l = l.sibling;
    else
        for (l = e.child; l !== null;) n |= l.lanes | l.childLanes, r |= l.subtreeFlags, r |= l.flags, l.return = e, l = l.sibling;
    return e.subtreeFlags |= r, e.childLanes = n, t
}

function Jf(e, t, n) {
    var r = t.pendingProps;
    switch (So(t), t.tag) {
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
            return le(t), null;
        case 1:
            return me(t.type) && Yr(), le(t), null;
        case 3:
            return r = t.stateNode, sn(), A(pe), A(oe), Ro(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (xr(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024, Me !== null && (qi(Me), Me = null))), $i(e, t), le(t), null;
        case 5:
            zo(t);
            var l = Et(Xn.current);
            if (n = t.type, e !== null && t.stateNode != null) uc(e, t, n, r, l), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
            else {
                if (!r) {
                    if (t.stateNode === null) throw Error(y(166));
                    return le(t), null
                }
                if (e = Et(Ve.current), xr(t)) {
                    r = t.stateNode, n = t.type;
                    var i = t.memoizedProps;
                    switch (r[Be] = t, r[Gn] = i, e = (t.mode & 1) !== 0, n) {
                        case "dialog":
                            U("cancel", r), U("close", r);
                            break;
                        case "iframe":
                        case "object":
                        case "embed":
                            U("load", r);
                            break;
                        case "video":
                        case "audio":
                            for (l = 0; l < Pn.length; l++) U(Pn[l], r);
                            break;
                        case "source":
                            U("error", r);
                            break;
                        case "img":
                        case "image":
                        case "link":
                            U("error", r), U("load", r);
                            break;
                        case "details":
                            U("toggle", r);
                            break;
                        case "input":
                            is(r, i), U("invalid", r);
                            break;
                        case "select":
                            r._wrapperState = {
                                wasMultiple: !!i.multiple
                            }, U("invalid", r);
                            break;
                        case "textarea":
                            ss(r, i), U("invalid", r)
                    }
                    vi(n, i), l = null;
                    for (var o in i)
                        if (i.hasOwnProperty(o)) {
                            var a = i[o];
                            o === "children" ? typeof a == "string" ? r.textContent !== a && (i.suppressHydrationWarning !== !0 && yr(r.textContent, a, e), l = ["children", a]) : typeof a == "number" && r.textContent !== "" + a && (i.suppressHydrationWarning !== !0 && yr(r.textContent, a, e), l = ["children", "" + a]) : Dn.hasOwnProperty(o) && a != null && o === "onScroll" && U("scroll", r)
                        } switch (n) {
                        case "input":
                            cr(r), os(r, i, !0);
                            break;
                        case "textarea":
                            cr(r), as(r);
                            break;
                        case "select":
                        case "option":
                            break;
                        default:
                            typeof i.onClick == "function" && (r.onclick = Qr)
                    }
                    r = l, t.updateQueue = r, r !== null && (t.flags |= 4)
                } else {
                    o = l.nodeType === 9 ? l : l.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = Ua(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = o.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = o.createElement(n, {
                        is: r.is
                    }) : (e = o.createElement(n), n === "select" && (o = e, r.multiple ? o.multiple = !0 : r.size && (o.size = r.size))) : e = o.createElementNS(e, n), e[Be] = t, e[Gn] = r, ac(e, t, !1, !1), t.stateNode = e;
                    e: {
                        switch (o = yi(n, r), n) {
                            case "dialog":
                                U("cancel", e), U("close", e), l = r;
                                break;
                            case "iframe":
                            case "object":
                            case "embed":
                                U("load", e), l = r;
                                break;
                            case "video":
                            case "audio":
                                for (l = 0; l < Pn.length; l++) U(Pn[l], e);
                                l = r;
                                break;
                            case "source":
                                U("error", e), l = r;
                                break;
                            case "img":
                            case "image":
                            case "link":
                                U("error", e), U("load", e), l = r;
                                break;
                            case "details":
                                U("toggle", e), l = r;
                                break;
                            case "input":
                                is(e, r), l = fi(e, r), U("invalid", e);
                                break;
                            case "option":
                                l = r;
                                break;
                            case "select":
                                e._wrapperState = {
                                    wasMultiple: !!r.multiple
                                }, l = H({}, r, {
                                    value: void 0
                                }), U("invalid", e);
                                break;
                            case "textarea":
                                ss(e, r), l = hi(e, r), U("invalid", e);
                                break;
                            default:
                                l = r
                        }
                        vi(n, l),
                        a = l;
                        for (i in a)
                            if (a.hasOwnProperty(i)) {
                                var u = a[i];
                                i === "style" ? Wa(e, u) : i === "dangerouslySetInnerHTML" ? (u = u ? u.__html : void 0, u != null && Aa(e, u)) : i === "children" ? typeof u == "string" ? (n !== "textarea" || u !== "") && Un(e, u) : typeof u == "number" && Un(e, "" + u) : i !== "suppressContentEditableWarning" && i !== "suppressHydrationWarning" && i !== "autoFocus" && (Dn.hasOwnProperty(i) ? u != null && i === "onScroll" && U("scroll", e) : u != null && so(e, i, u, o))
                            } switch (n) {
                            case "input":
                                cr(e), os(e, r, !1);
                                break;
                            case "textarea":
                                cr(e), as(e);
                                break;
                            case "option":
                                r.value != null && e.setAttribute("value", "" + ht(r.value));
                                break;
                            case "select":
                                e.multiple = !!r.multiple, i = r.value, i != null ? Jt(e, !!r.multiple, i, !1) : r.defaultValue != null && Jt(e, !!r.multiple, r.defaultValue, !0);
                                break;
                            default:
                                typeof l.onClick == "function" && (e.onclick = Qr)
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
                                r = !1
                        }
                    }
                    r && (t.flags |= 4)
                }
                t.ref !== null && (t.flags |= 512, t.flags |= 2097152)
            }
            return le(t), null;
        case 6:
            if (e && t.stateNode != null) cc(e, t, e.memoizedProps, r);
            else {
                if (typeof r != "string" && t.stateNode === null) throw Error(y(166));
                if (n = Et(Xn.current), Et(Ve.current), xr(t)) {
                    if (r = t.stateNode, n = t.memoizedProps, r[Be] = t, (i = r.nodeValue !== n) && (e = ye, e !== null)) switch (e.tag) {
                        case 3:
                            yr(r.nodeValue, n, (e.mode & 1) !== 0);
                            break;
                        case 5:
                            e.memoizedProps.suppressHydrationWarning !== !0 && yr(r.nodeValue, n, (e.mode & 1) !== 0)
                    }
                    i && (t.flags |= 4)
                } else r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r), r[Be] = t, t.stateNode = r
            }
            return le(t), null;
        case 13:
            if (A(W), r = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
                if (B && ve !== null && t.mode & 1 && !(t.flags & 128)) Tu(), ln(), t.flags |= 98560, i = !1;
                else if (i = xr(t), r !== null && r.dehydrated !== null) {
                    if (e === null) {
                        if (!i) throw Error(y(318));
                        if (i = t.memoizedState, i = i !== null ? i.dehydrated : null, !i) throw Error(y(317));
                        i[Be] = t
                    } else ln(), !(t.flags & 128) && (t.memoizedState = null), t.flags |= 4;
                    le(t), i = !1
                } else Me !== null && (qi(Me), Me = null), i = !0;
                if (!i) return t.flags & 65536 ? t : null
            }
            return t.flags & 128 ? (t.lanes = n, t) : (r = r !== null, r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192, t.mode & 1 && (e === null || W.current & 1 ? J === 0 && (J = 3) : $o())), t.updateQueue !== null && (t.flags |= 4), le(t), null);
        case 4:
            return sn(), $i(e, t), e === null && Qn(t.stateNode.containerInfo), le(t), null;
        case 10:
            return Po(t.type._context), le(t), null;
        case 17:
            return me(t.type) && Yr(), le(t), null;
        case 19:
            if (A(W), i = t.memoizedState, i === null) return le(t), null;
            if (r = (t.flags & 128) !== 0, o = i.rendering, o === null)
                if (r) Nn(i, !1);
                else {
                    if (J !== 0 || e !== null && e.flags & 128)
                        for (e = t.child; e !== null;) {
                            if (o = br(e), o !== null) {
                                for (t.flags |= 128, Nn(i, !1), r = o.updateQueue, r !== null && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; n !== null;) i = n, e = r, i.flags &= 14680066, o = i.alternate, o === null ? (i.childLanes = 0, i.lanes = e, i.child = null, i.subtreeFlags = 0, i.memoizedProps = null, i.memoizedState = null, i.updateQueue = null, i.dependencies = null, i.stateNode = null) : (i.childLanes = o.childLanes, i.lanes = o.lanes, i.child = o.child, i.subtreeFlags = 0, i.deletions = null, i.memoizedProps = o.memoizedProps, i.memoizedState = o.memoizedState, i.updateQueue = o.updateQueue, i.type = o.type, e = o.dependencies, i.dependencies = e === null ? null : {
                                    lanes: e.lanes,
                                    firstContext: e.firstContext
                                }), n = n.sibling;
                                return D(W, W.current & 1 | 2), t.child
                            }
                            e = e.sibling
                        }
                    i.tail !== null && G() > un && (t.flags |= 128, r = !0, Nn(i, !1), t.lanes = 4194304)
                }
            else {
                if (!r)
                    if (e = br(o), e !== null) {
                        if (t.flags |= 128, r = !0, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), Nn(i, !0), i.tail === null && i.tailMode === "hidden" && !o.alternate && !B) return le(t), null
                    } else 2 * G() - i.renderingStartTime > un && n !== 1073741824 && (t.flags |= 128, r = !0, Nn(i, !1), t.lanes = 4194304);
                i.isBackwards ? (o.sibling = t.child, t.child = o) : (n = i.last, n !== null ? n.sibling = o : t.child = o, i.last = o)
            }
            return i.tail !== null ? (t = i.tail, i.rendering = t, i.tail = t.sibling, i.renderingStartTime = G(), t.sibling = null, n = W.current, D(W, r ? n & 1 | 2 : n & 1), t) : (le(t), null);
        case 22:
        case 23:
            return Ho(), r = t.memoizedState !== null, e !== null && e.memoizedState !== null !== r && (t.flags |= 8192), r && t.mode & 1 ? ge & 1073741824 && (le(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : le(t), null;
        case 24:
            return null;
        case 25:
            return null
    }
    throw Error(y(156, t.tag))
}

function Zf(e, t) {
    switch (So(t), t.tag) {
        case 1:
            return me(t.type) && Yr(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
        case 3:
            return sn(), A(pe), A(oe), Ro(), e = t.flags, e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128, t) : null;
        case 5:
            return zo(t), null;
        case 13:
            if (A(W), e = t.memoizedState, e !== null && e.dehydrated !== null) {
                if (t.alternate === null) throw Error(y(340));
                ln()
            }
            return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
        case 19:
            return A(W), null;
        case 4:
            return sn(), null;
        case 10:
            return Po(t.type._context), null;
        case 22:
        case 23:
            return Ho(), null;
        case 24:
            return null;
        default:
            return null
    }
}
var Nr = !1,
    ie = !1,
    qf = typeof WeakSet == "function" ? WeakSet : Set,
    S = null;

function Kt(e, t) {
    var n = e.ref;
    if (n !== null)
        if (typeof n == "function") try {
            n(null)
        } catch (r) {
            $(e, t, r)
        } else n.current = null
}

function Qi(e, t, n) {
    try {
        n()
    } catch (r) {
        $(e, t, r)
    }
}
var Zs = !1;

function bf(e, t) {
    if (Ti = Vr, e = hu(), ko(e)) {
        if ("selectionStart" in e) var n = {
            start: e.selectionStart,
            end: e.selectionEnd
        };
        else e: {
            n = (n = e.ownerDocument) && n.defaultView || window;
            var r = n.getSelection && n.getSelection();
            if (r && r.rangeCount !== 0) {
                n = r.anchorNode;
                var l = r.anchorOffset,
                    i = r.focusNode;
                r = r.focusOffset;
                try {
                    n.nodeType, i.nodeType
                } catch {
                    n = null;
                    break e
                }
                var o = 0,
                    a = -1,
                    u = -1,
                    c = 0,
                    m = 0,
                    h = e,
                    g = null;
                t: for (;;) {
                    for (var w; h !== n || l !== 0 && h.nodeType !== 3 || (a = o + l), h !== i || r !== 0 && h.nodeType !== 3 || (u = o + r), h.nodeType === 3 && (o += h.nodeValue.length), (w = h.firstChild) !== null;) g = h, h = w;
                    for (;;) {
                        if (h === e) break t;
                        if (g === n && ++c === l && (a = o), g === i && ++m === r && (u = o), (w = h.nextSibling) !== null) break;
                        h = g, g = h.parentNode
                    }
                    h = w
                }
                n = a === -1 || u === -1 ? null : {
                    start: a,
                    end: u
                }
            } else n = null
        }
        n = n || {
            start: 0,
            end: 0
        }
    } else n = null;
    for (_i = {
            focusedElem: e,
            selectionRange: n
        }, Vr = !1, S = t; S !== null;)
        if (t = S, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null) e.return = t, S = e;
        else
            for (; S !== null;) {
                t = S;
                try {
                    var k = t.alternate;
                    if (t.flags & 1024) switch (t.tag) {
                        case 0:
                        case 11:
                        case 15:
                            break;
                        case 1:
                            if (k !== null) {
                                var x = k.memoizedProps,
                                    _ = k.memoizedState,
                                    f = t.stateNode,
                                    d = f.getSnapshotBeforeUpdate(t.elementType === t.type ? x : ze(t.type, x), _);
                                f.__reactInternalSnapshotBeforeUpdate = d
                            }
                            break;
                        case 3:
                            var p = t.stateNode.containerInfo;
                            p.nodeType === 1 ? p.textContent = "" : p.nodeType === 9 && p.documentElement && p.removeChild(p.documentElement);
                            break;
                        case 5:
                        case 6:
                        case 4:
                        case 17:
                            break;
                        default:
                            throw Error(y(163))
                    }
                } catch (v) {
                    $(t, t.return, v)
                }
                if (e = t.sibling, e !== null) {
                    e.return = t.return, S = e;
                    break
                }
                S = t.return
            }
    return k = Zs, Zs = !1, k
}

function Fn(e, t, n) {
    var r = t.updateQueue;
    if (r = r !== null ? r.lastEffect : null, r !== null) {
        var l = r = r.next;
        do {
            if ((l.tag & e) === e) {
                var i = l.destroy;
                l.destroy = void 0, i !== void 0 && Qi(t, n, i)
            }
            l = l.next
        } while (l !== r)
    }
}

function yl(e, t) {
    if (t = t.updateQueue, t = t !== null ? t.lastEffect : null, t !== null) {
        var n = t = t.next;
        do {
            if ((n.tag & e) === e) {
                var r = n.create;
                n.destroy = r()
            }
            n = n.next
        } while (n !== t)
    }
}

function Yi(e) {
    var t = e.ref;
    if (t !== null) {
        var n = e.stateNode;
        switch (e.tag) {
            case 5:
                e = n;
                break;
            default:
                e = n
        }
        typeof t == "function" ? t(e) : t.current = e
    }
}

function dc(e) {
    var t = e.alternate;
    t !== null && (e.alternate = null, dc(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[Be], delete t[Gn], delete t[Ri], delete t[If], delete t[Of])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null
}

function fc(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4
}

function qs(e) {
    e: for (;;) {
        for (; e.sibling === null;) {
            if (e.return === null || fc(e.return)) return null;
            e = e.return
        }
        for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18;) {
            if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
            e.child.return = e, e = e.child
        }
        if (!(e.flags & 2)) return e.stateNode
    }
}

function Gi(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6) e = e.stateNode, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = Qr));
    else if (r !== 4 && (e = e.child, e !== null))
        for (Gi(e, t, n), e = e.sibling; e !== null;) Gi(e, t, n), e = e.sibling
}

function Ki(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6) e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
    else if (r !== 4 && (e = e.child, e !== null))
        for (Ki(e, t, n), e = e.sibling; e !== null;) Ki(e, t, n), e = e.sibling
}
var ee = null,
    Re = !1;

function et(e, t, n) {
    for (n = n.child; n !== null;) pc(e, t, n), n = n.sibling
}

function pc(e, t, n) {
    if (We && typeof We.onCommitFiberUnmount == "function") try {
        We.onCommitFiberUnmount(cl, n)
    } catch {}
    switch (n.tag) {
        case 5:
            ie || Kt(n, t);
        case 6:
            var r = ee,
                l = Re;
            ee = null, et(e, t, n), ee = r, Re = l, ee !== null && (Re ? (e = ee, n = n.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : ee.removeChild(n.stateNode));
            break;
        case 18:
            ee !== null && (Re ? (e = ee, n = n.stateNode, e.nodeType === 8 ? Kl(e.parentNode, n) : e.nodeType === 1 && Kl(e, n), Vn(e)) : Kl(ee, n.stateNode));
            break;
        case 4:
            r = ee, l = Re, ee = n.stateNode.containerInfo, Re = !0, et(e, t, n), ee = r, Re = l;
            break;
        case 0:
        case 11:
        case 14:
        case 15:
            if (!ie && (r = n.updateQueue, r !== null && (r = r.lastEffect, r !== null))) {
                l = r = r.next;
                do {
                    var i = l,
                        o = i.destroy;
                    i = i.tag, o !== void 0 && (i & 2 || i & 4) && Qi(n, t, o), l = l.next
                } while (l !== r)
            }
            et(e, t, n);
            break;
        case 1:
            if (!ie && (Kt(n, t), r = n.stateNode, typeof r.componentWillUnmount == "function")) try {
                r.props = n.memoizedProps, r.state = n.memoizedState, r.componentWillUnmount()
            } catch (a) {
                $(n, t, a)
            }
            et(e, t, n);
            break;
        case 21:
            et(e, t, n);
            break;
        case 22:
            n.mode & 1 ? (ie = (r = ie) || n.memoizedState !== null, et(e, t, n), ie = r) : et(e, t, n);
            break;
        default:
            et(e, t, n)
    }
}

function bs(e) {
    var t = e.updateQueue;
    if (t !== null) {
        e.updateQueue = null;
        var n = e.stateNode;
        n === null && (n = e.stateNode = new qf), t.forEach(function(r) {
            var l = ap.bind(null, e, r);
            n.has(r) || (n.add(r), r.then(l, l))
        })
    }
}

function _e(e, t) {
    var n = t.deletions;
    if (n !== null)
        for (var r = 0; r < n.length; r++) {
            var l = n[r];
            try {
                var i = e,
                    o = t,
                    a = o;
                e: for (; a !== null;) {
                    switch (a.tag) {
                        case 5:
                            ee = a.stateNode, Re = !1;
                            break e;
                        case 3:
                            ee = a.stateNode.containerInfo, Re = !0;
                            break e;
                        case 4:
                            ee = a.stateNode.containerInfo, Re = !0;
                            break e
                    }
                    a = a.return
                }
                if (ee === null) throw Error(y(160));
                pc(i, o, l), ee = null, Re = !1;
                var u = l.alternate;
                u !== null && (u.return = null), l.return = null
            } catch (c) {
                $(l, t, c)
            }
        }
    if (t.subtreeFlags & 12854)
        for (t = t.child; t !== null;) mc(t, e), t = t.sibling
}

function mc(e, t) {
    var n = e.alternate,
        r = e.flags;
    switch (e.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
            if (_e(t, e), Ue(e), r & 4) {
                try {
                    Fn(3, e, e.return), yl(3, e)
                } catch (x) {
                    $(e, e.return, x)
                }
                try {
                    Fn(5, e, e.return)
                } catch (x) {
                    $(e, e.return, x)
                }
            }
            break;
        case 1:
            _e(t, e), Ue(e), r & 512 && n !== null && Kt(n, n.return);
            break;
        case 5:
            if (_e(t, e), Ue(e), r & 512 && n !== null && Kt(n, n.return), e.flags & 32) {
                var l = e.stateNode;
                try {
                    Un(l, "")
                } catch (x) {
                    $(e, e.return, x)
                }
            }
            if (r & 4 && (l = e.stateNode, l != null)) {
                var i = e.memoizedProps,
                    o = n !== null ? n.memoizedProps : i,
                    a = e.type,
                    u = e.updateQueue;
                if (e.updateQueue = null, u !== null) try {
                    a === "input" && i.type === "radio" && i.name != null && Oa(l, i), yi(a, o);
                    var c = yi(a, i);
                    for (o = 0; o < u.length; o += 2) {
                        var m = u[o],
                            h = u[o + 1];
                        m === "style" ? Wa(l, h) : m === "dangerouslySetInnerHTML" ? Aa(l, h) : m === "children" ? Un(l, h) : so(l, m, h, c)
                    }
                    switch (a) {
                        case "input":
                            pi(l, i);
                            break;
                        case "textarea":
                            Da(l, i);
                            break;
                        case "select":
                            var g = l._wrapperState.wasMultiple;
                            l._wrapperState.wasMultiple = !!i.multiple;
                            var w = i.value;
                            w != null ? Jt(l, !!i.multiple, w, !1) : g !== !!i.multiple && (i.defaultValue != null ? Jt(l, !!i.multiple, i.defaultValue, !0) : Jt(l, !!i.multiple, i.multiple ? [] : "", !1))
                    }
                    l[Gn] = i
                } catch (x) {
                    $(e, e.return, x)
                }
            }
            break;
        case 6:
            if (_e(t, e), Ue(e), r & 4) {
                if (e.stateNode === null) throw Error(y(162));
                l = e.stateNode, i = e.memoizedProps;
                try {
                    l.nodeValue = i
                } catch (x) {
                    $(e, e.return, x)
                }
            }
            break;
        case 3:
            if (_e(t, e), Ue(e), r & 4 && n !== null && n.memoizedState.isDehydrated) try {
                Vn(t.containerInfo)
            } catch (x) {
                $(e, e.return, x)
            }
            break;
        case 4:
            _e(t, e), Ue(e);
            break;
        case 13:
            _e(t, e), Ue(e), l = e.child, l.flags & 8192 && (i = l.memoizedState !== null, l.stateNode.isHidden = i, !i || l.alternate !== null && l.alternate.memoizedState !== null || (Wo = G())), r & 4 && bs(e);
            break;
        case 22:
            if (m = n !== null && n.memoizedState !== null, e.mode & 1 ? (ie = (c = ie) || m, _e(t, e), ie = c) : _e(t, e), Ue(e), r & 8192) {
                if (c = e.memoizedState !== null, (e.stateNode.isHidden = c) && !m && e.mode & 1)
                    for (S = e, m = e.child; m !== null;) {
                        for (h = S = m; S !== null;) {
                            switch (g = S, w = g.child, g.tag) {
                                case 0:
                                case 11:
                                case 14:
                                case 15:
                                    Fn(4, g, g.return);
                                    break;
                                case 1:
                                    Kt(g, g.return);
                                    var k = g.stateNode;
                                    if (typeof k.componentWillUnmount == "function") {
                                        r = g, n = g.return;
                                        try {
                                            t = r, k.props = t.memoizedProps, k.state = t.memoizedState, k.componentWillUnmount()
                                        } catch (x) {
                                            $(r, n, x)
                                        }
                                    }
                                    break;
                                case 5:
                                    Kt(g, g.return);
                                    break;
                                case 22:
                                    if (g.memoizedState !== null) {
                                        ta(h);
                                        continue
                                    }
                            }
                            w !== null ? (w.return = g, S = w) : ta(h)
                        }
                        m = m.sibling
                    }
                e: for (m = null, h = e;;) {
                    if (h.tag === 5) {
                        if (m === null) {
                            m = h;
                            try {
                                l = h.stateNode, c ? (i = l.style, typeof i.setProperty == "function" ? i.setProperty("display", "none", "important") : i.display = "none") : (a = h.stateNode, u = h.memoizedProps.style, o = u != null && u.hasOwnProperty("display") ? u.display : null, a.style.display = Ba("display", o))
                            } catch (x) {
                                $(e, e.return, x)
                            }
                        }
                    } else if (h.tag === 6) {
                        if (m === null) try {
                            h.stateNode.nodeValue = c ? "" : h.memoizedProps
                        } catch (x) {
                            $(e, e.return, x)
                        }
                    } else if ((h.tag !== 22 && h.tag !== 23 || h.memoizedState === null || h === e) && h.child !== null) {
                        h.child.return = h, h = h.child;
                        continue
                    }
                    if (h === e) break e;
                    for (; h.sibling === null;) {
                        if (h.return === null || h.return === e) break e;
                        m === h && (m = null), h = h.return
                    }
                    m === h && (m = null), h.sibling.return = h.return, h = h.sibling
                }
            }
            break;
        case 19:
            _e(t, e), Ue(e), r & 4 && bs(e);
            break;
        case 21:
            break;
        default:
            _e(t, e), Ue(e)
    }
}

function Ue(e) {
    var t = e.flags;
    if (t & 2) {
        try {
            e: {
                for (var n = e.return; n !== null;) {
                    if (fc(n)) {
                        var r = n;
                        break e
                    }
                    n = n.return
                }
                throw Error(y(160))
            }
            switch (r.tag) {
                case 5:
                    var l = r.stateNode;
                    r.flags & 32 && (Un(l, ""), r.flags &= -33);
                    var i = qs(e);
                    Ki(e, i, l);
                    break;
                case 3:
                case 4:
                    var o = r.stateNode.containerInfo,
                        a = qs(e);
                    Gi(e, a, o);
                    break;
                default:
                    throw Error(y(161))
            }
        }
        catch (u) {
            $(e, e.return, u)
        }
        e.flags &= -3
    }
    t & 4096 && (e.flags &= -4097)
}

function ep(e, t, n) {
    S = e, hc(e)
}

function hc(e, t, n) {
    for (var r = (e.mode & 1) !== 0; S !== null;) {
        var l = S,
            i = l.child;
        if (l.tag === 22 && r) {
            var o = l.memoizedState !== null || Nr;
            if (!o) {
                var a = l.alternate,
                    u = a !== null && a.memoizedState !== null || ie;
                a = Nr;
                var c = ie;
                if (Nr = o, (ie = u) && !c)
                    for (S = l; S !== null;) o = S, u = o.child, o.tag === 22 && o.memoizedState !== null ? na(l) : u !== null ? (u.return = o, S = u) : na(l);
                for (; i !== null;) S = i, hc(i), i = i.sibling;
                S = l, Nr = a, ie = c
            }
            ea(e)
        } else l.subtreeFlags & 8772 && i !== null ? (i.return = l, S = i) : ea(e)
    }
}

function ea(e) {
    for (; S !== null;) {
        var t = S;
        if (t.flags & 8772) {
            var n = t.alternate;
            try {
                if (t.flags & 8772) switch (t.tag) {
                    case 0:
                    case 11:
                    case 15:
                        ie || yl(5, t);
                        break;
                    case 1:
                        var r = t.stateNode;
                        if (t.flags & 4 && !ie)
                            if (n === null) r.componentDidMount();
                            else {
                                var l = t.elementType === t.type ? n.memoizedProps : ze(t.type, n.memoizedProps);
                                r.componentDidUpdate(l, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate)
                            } var i = t.updateQueue;
                        i !== null && Us(t, i, r);
                        break;
                    case 3:
                        var o = t.updateQueue;
                        if (o !== null) {
                            if (n = null, t.child !== null) switch (t.child.tag) {
                                case 5:
                                    n = t.child.stateNode;
                                    break;
                                case 1:
                                    n = t.child.stateNode
                            }
                            Us(t, o, n)
                        }
                        break;
                    case 5:
                        var a = t.stateNode;
                        if (n === null && t.flags & 4) {
                            n = a;
                            var u = t.memoizedProps;
                            switch (t.type) {
                                case "button":
                                case "input":
                                case "select":
                                case "textarea":
                                    u.autoFocus && n.focus();
                                    break;
                                case "img":
                                    u.src && (n.src = u.src)
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
                            var c = t.alternate;
                            if (c !== null) {
                                var m = c.memoizedState;
                                if (m !== null) {
                                    var h = m.dehydrated;
                                    h !== null && Vn(h)
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
                        throw Error(y(163))
                }
                ie || t.flags & 512 && Yi(t)
            } catch (g) {
                $(t, t.return, g)
            }
        }
        if (t === e) {
            S = null;
            break
        }
        if (n = t.sibling, n !== null) {
            n.return = t.return, S = n;
            break
        }
        S = t.return
    }
}

function ta(e) {
    for (; S !== null;) {
        var t = S;
        if (t === e) {
            S = null;
            break
        }
        var n = t.sibling;
        if (n !== null) {
            n.return = t.return, S = n;
            break
        }
        S = t.return
    }
}

function na(e) {
    for (; S !== null;) {
        var t = S;
        try {
            switch (t.tag) {
                case 0:
                case 11:
                case 15:
                    var n = t.return;
                    try {
                        yl(4, t)
                    } catch (u) {
                        $(t, n, u)
                    }
                    break;
                case 1:
                    var r = t.stateNode;
                    if (typeof r.componentDidMount == "function") {
                        var l = t.return;
                        try {
                            r.componentDidMount()
                        } catch (u) {
                            $(t, l, u)
                        }
                    }
                    var i = t.return;
                    try {
                        Yi(t)
                    } catch (u) {
                        $(t, i, u)
                    }
                    break;
                case 5:
                    var o = t.return;
                    try {
                        Yi(t)
                    } catch (u) {
                        $(t, o, u)
                    }
            }
        } catch (u) {
            $(t, t.return, u)
        }
        if (t === e) {
            S = null;
            break
        }
        var a = t.sibling;
        if (a !== null) {
            a.return = t.return, S = a;
            break
        }
        S = t.return
    }
}
var tp = Math.ceil,
    nl = be.ReactCurrentDispatcher,
    Ao = be.ReactCurrentOwner,
    Ce = be.ReactCurrentBatchConfig,
    I = 0,
    b = null,
    K = null,
    te = 0,
    ge = 0,
    Xt = yt(0),
    J = 0,
    bn = null,
    Mt = 0,
    xl = 0,
    Bo = 0,
    In = null,
    de = null,
    Wo = 0,
    un = 1 / 0,
    $e = null,
    rl = !1,
    Xi = null,
    ft = null,
    Sr = !1,
    ot = null,
    ll = 0,
    On = 0,
    Ji = null,
    Fr = -1,
    Ir = 0;

function ae() {
    return I & 6 ? G() : Fr !== -1 ? Fr : Fr = G()
}

function pt(e) {
    return e.mode & 1 ? I & 2 && te !== 0 ? te & -te : Uf.transition !== null ? (Ir === 0 && (Ir = ba()), Ir) : (e = O, e !== 0 || (e = window.event, e = e === void 0 ? 16 : ou(e.type)), e) : 1
}

function Ie(e, t, n, r) {
    if (50 < On) throw On = 0, Ji = null, Error(y(185));
    nr(e, n, r), (!(I & 2) || e !== b) && (e === b && (!(I & 2) && (xl |= n), J === 4 && lt(e, te)), he(e, r), n === 1 && I === 0 && !(t.mode & 1) && (un = G() + 500, hl && xt()))
}

function he(e, t) {
    var n = e.callbackNode;
    Dd(e, t);
    var r = Wr(e, e === b ? te : 0);
    if (r === 0) n !== null && ds(n), e.callbackNode = null, e.callbackPriority = 0;
    else if (t = r & -r, e.callbackPriority !== t) {
        if (n != null && ds(n), t === 1) e.tag === 0 ? Df(ra.bind(null, e)) : Cu(ra.bind(null, e)), Mf(function() {
            !(I & 6) && xt()
        }), n = null;
        else {
            switch (eu(r)) {
                case 1:
                    n = po;
                    break;
                case 4:
                    n = Za;
                    break;
                case 16:
                    n = Br;
                    break;
                case 536870912:
                    n = qa;
                    break;
                default:
                    n = Br
            }
            n = Sc(n, gc.bind(null, e))
        }
        e.callbackPriority = t, e.callbackNode = n
    }
}

function gc(e, t) {
    if (Fr = -1, Ir = 0, I & 6) throw Error(y(327));
    var n = e.callbackNode;
    if (tn() && e.callbackNode !== n) return null;
    var r = Wr(e, e === b ? te : 0);
    if (r === 0) return null;
    if (r & 30 || r & e.expiredLanes || t) t = il(e, r);
    else {
        t = r;
        var l = I;
        I |= 2;
        var i = yc();
        (b !== e || te !== t) && ($e = null, un = G() + 500, Tt(e, t));
        do try {
            lp();
            break
        } catch (a) {
            vc(e, a)
        }
        while (!0);
        Eo(), nl.current = i, I = l, K !== null ? t = 0 : (b = null, te = 0, t = J)
    }
    if (t !== 0) {
        if (t === 2 && (l = Si(e), l !== 0 && (r = l, t = Zi(e, l))), t === 1) throw n = bn, Tt(e, 0), lt(e, r), he(e, G()), n;
        if (t === 6) lt(e, r);
        else {
            if (l = e.current.alternate, !(r & 30) && !np(l) && (t = il(e, r), t === 2 && (i = Si(e), i !== 0 && (r = i, t = Zi(e, i))), t === 1)) throw n = bn, Tt(e, 0), lt(e, r), he(e, G()), n;
            switch (e.finishedWork = l, e.finishedLanes = r, t) {
                case 0:
                case 1:
                    throw Error(y(345));
                case 2:
                    St(e, de, $e);
                    break;
                case 3:
                    if (lt(e, r), (r & 130023424) === r && (t = Wo + 500 - G(), 10 < t)) {
                        if (Wr(e, 0) !== 0) break;
                        if (l = e.suspendedLanes, (l & r) !== r) {
                            ae(), e.pingedLanes |= e.suspendedLanes & l;
                            break
                        }
                        e.timeoutHandle = zi(St.bind(null, e, de, $e), t);
                        break
                    }
                    St(e, de, $e);
                    break;
                case 4:
                    if (lt(e, r), (r & 4194240) === r) break;
                    for (t = e.eventTimes, l = -1; 0 < r;) {
                        var o = 31 - Fe(r);
                        i = 1 << o, o = t[o], o > l && (l = o), r &= ~i
                    }
                    if (r = l, r = G() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * tp(r / 1960)) - r, 10 < r) {
                        e.timeoutHandle = zi(St.bind(null, e, de, $e), r);
                        break
                    }
                    St(e, de, $e);
                    break;
                case 5:
                    St(e, de, $e);
                    break;
                default:
                    throw Error(y(329))
            }
        }
    }
    return he(e, G()), e.callbackNode === n ? gc.bind(null, e) : null
}

function Zi(e, t) {
    var n = In;
    return e.current.memoizedState.isDehydrated && (Tt(e, t).flags |= 256), e = il(e, t), e !== 2 && (t = de, de = n, t !== null && qi(t)), e
}

function qi(e) {
    de === null ? de = e : de.push.apply(de, e)
}

function np(e) {
    for (var t = e;;) {
        if (t.flags & 16384) {
            var n = t.updateQueue;
            if (n !== null && (n = n.stores, n !== null))
                for (var r = 0; r < n.length; r++) {
                    var l = n[r],
                        i = l.getSnapshot;
                    l = l.value;
                    try {
                        if (!De(i(), l)) return !1
                    } catch {
                        return !1
                    }
                }
        }
        if (n = t.child, t.subtreeFlags & 16384 && n !== null) n.return = t, t = n;
        else {
            if (t === e) break;
            for (; t.sibling === null;) {
                if (t.return === null || t.return === e) return !0;
                t = t.return
            }
            t.sibling.return = t.return, t = t.sibling
        }
    }
    return !0
}

function lt(e, t) {
    for (t &= ~Bo, t &= ~xl, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t;) {
        var n = 31 - Fe(t),
            r = 1 << n;
        e[n] = -1, t &= ~r
    }
}

function ra(e) {
    if (I & 6) throw Error(y(327));
    tn();
    var t = Wr(e, 0);
    if (!(t & 1)) return he(e, G()), null;
    var n = il(e, t);
    if (e.tag !== 0 && n === 2) {
        var r = Si(e);
        r !== 0 && (t = r, n = Zi(e, r))
    }
    if (n === 1) throw n = bn, Tt(e, 0), lt(e, t), he(e, G()), n;
    if (n === 6) throw Error(y(345));
    return e.finishedWork = e.current.alternate, e.finishedLanes = t, St(e, de, $e), he(e, G()), null
}

function Vo(e, t) {
    var n = I;
    I |= 1;
    try {
        return e(t)
    } finally {
        I = n, I === 0 && (un = G() + 500, hl && xt())
    }
}

function Ft(e) {
    ot !== null && ot.tag === 0 && !(I & 6) && tn();
    var t = I;
    I |= 1;
    var n = Ce.transition,
        r = O;
    try {
        if (Ce.transition = null, O = 1, e) return e()
    } finally {
        O = r, Ce.transition = n, I = t, !(I & 6) && xt()
    }
}

function Ho() {
    ge = Xt.current, A(Xt)
}

function Tt(e, t) {
    e.finishedWork = null, e.finishedLanes = 0;
    var n = e.timeoutHandle;
    if (n !== -1 && (e.timeoutHandle = -1, Rf(n)), K !== null)
        for (n = K.return; n !== null;) {
            var r = n;
            switch (So(r), r.tag) {
                case 1:
                    r = r.type.childContextTypes, r != null && Yr();
                    break;
                case 3:
                    sn(), A(pe), A(oe), Ro();
                    break;
                case 5:
                    zo(r);
                    break;
                case 4:
                    sn();
                    break;
                case 13:
                    A(W);
                    break;
                case 19:
                    A(W);
                    break;
                case 10:
                    Po(r.type._context);
                    break;
                case 22:
                case 23:
                    Ho()
            }
            n = n.return
        }
    if (b = e, K = e = mt(e.current, null), te = ge = t, J = 0, bn = null, Bo = xl = Mt = 0, de = In = null, Ct !== null) {
        for (t = 0; t < Ct.length; t++)
            if (n = Ct[t], r = n.interleaved, r !== null) {
                n.interleaved = null;
                var l = r.next,
                    i = n.pending;
                if (i !== null) {
                    var o = i.next;
                    i.next = l, r.next = o
                }
                n.pending = r
            } Ct = null
    }
    return e
}

function vc(e, t) {
    do {
        var n = K;
        try {
            if (Eo(), zr.current = tl, el) {
                for (var r = V.memoizedState; r !== null;) {
                    var l = r.queue;
                    l !== null && (l.pending = null), r = r.next
                }
                el = !1
            }
            if (Rt = 0, q = X = V = null, Mn = !1, Jn = 0, Ao.current = null, n === null || n.return === null) {
                J = 1, bn = t, K = null;
                break
            }
            e: {
                var i = e,
                    o = n.return,
                    a = n,
                    u = t;
                if (t = te, a.flags |= 32768, u !== null && typeof u == "object" && typeof u.then == "function") {
                    var c = u,
                        m = a,
                        h = m.tag;
                    if (!(m.mode & 1) && (h === 0 || h === 11 || h === 15)) {
                        var g = m.alternate;
                        g ? (m.updateQueue = g.updateQueue, m.memoizedState = g.memoizedState, m.lanes = g.lanes) : (m.updateQueue = null, m.memoizedState = null)
                    }
                    var w = $s(o);
                    if (w !== null) {
                        w.flags &= -257, Qs(w, o, a, i, t), w.mode & 1 && Hs(i, c, t), t = w, u = c;
                        var k = t.updateQueue;
                        if (k === null) {
                            var x = new Set;
                            x.add(u), t.updateQueue = x
                        } else k.add(u);
                        break e
                    } else {
                        if (!(t & 1)) {
                            Hs(i, c, t), $o();
                            break e
                        }
                        u = Error(y(426))
                    }
                } else if (B && a.mode & 1) {
                    var _ = $s(o);
                    if (_ !== null) {
                        !(_.flags & 65536) && (_.flags |= 256), Qs(_, o, a, i, t), jo(an(u, a));
                        break e
                    }
                }
                i = u = an(u, a),
                J !== 4 && (J = 2),
                In === null ? In = [i] : In.push(i),
                i = o;do {
                    switch (i.tag) {
                        case 3:
                            i.flags |= 65536, t &= -t, i.lanes |= t;
                            var f = ec(i, u, t);
                            Ds(i, f);
                            break e;
                        case 1:
                            a = u;
                            var d = i.type,
                                p = i.stateNode;
                            if (!(i.flags & 128) && (typeof d.getDerivedStateFromError == "function" || p !== null && typeof p.componentDidCatch == "function" && (ft === null || !ft.has(p)))) {
                                i.flags |= 65536, t &= -t, i.lanes |= t;
                                var v = tc(i, a, t);
                                Ds(i, v);
                                break e
                            }
                    }
                    i = i.return
                } while (i !== null)
            }
            wc(n)
        } catch (N) {
            t = N, K === n && n !== null && (K = n = n.return);
            continue
        }
        break
    } while (!0)
}

function yc() {
    var e = nl.current;
    return nl.current = tl, e === null ? tl : e
}

function $o() {
    (J === 0 || J === 3 || J === 2) && (J = 4), b === null || !(Mt & 268435455) && !(xl & 268435455) || lt(b, te)
}

function il(e, t) {
    var n = I;
    I |= 2;
    var r = yc();
    (b !== e || te !== t) && ($e = null, Tt(e, t));
    do try {
        rp();
        break
    } catch (l) {
        vc(e, l)
    }
    while (!0);
    if (Eo(), I = n, nl.current = r, K !== null) throw Error(y(261));
    return b = null, te = 0, J
}

function rp() {
    for (; K !== null;) xc(K)
}

function lp() {
    for (; K !== null && !Td();) xc(K)
}

function xc(e) {
    var t = Nc(e.alternate, e, ge);
    e.memoizedProps = e.pendingProps, t === null ? wc(e) : K = t, Ao.current = null
}

function wc(e) {
    var t = e;
    do {
        var n = t.alternate;
        if (e = t.return, t.flags & 32768) {
            if (n = Zf(n, t), n !== null) {
                n.flags &= 32767, K = n;
                return
            }
            if (e !== null) e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
            else {
                J = 6, K = null;
                return
            }
        } else if (n = Jf(n, t, ge), n !== null) {
            K = n;
            return
        }
        if (t = t.sibling, t !== null) {
            K = t;
            return
        }
        K = t = e
    } while (t !== null);
    J === 0 && (J = 5)
}

function St(e, t, n) {
    var r = O,
        l = Ce.transition;
    try {
        Ce.transition = null, O = 1, ip(e, t, n, r)
    } finally {
        Ce.transition = l, O = r
    }
    return null
}

function ip(e, t, n, r) {
    do tn(); while (ot !== null);
    if (I & 6) throw Error(y(327));
    n = e.finishedWork;
    var l = e.finishedLanes;
    if (n === null) return null;
    if (e.finishedWork = null, e.finishedLanes = 0, n === e.current) throw Error(y(177));
    e.callbackNode = null, e.callbackPriority = 0;
    var i = n.lanes | n.childLanes;
    if (Ud(e, i), e === b && (K = b = null, te = 0), !(n.subtreeFlags & 2064) && !(n.flags & 2064) || Sr || (Sr = !0, Sc(Br, function() {
            return tn(), null
        })), i = (n.flags & 15990) !== 0, n.subtreeFlags & 15990 || i) {
        i = Ce.transition, Ce.transition = null;
        var o = O;
        O = 1;
        var a = I;
        I |= 4, Ao.current = null, bf(e, n), mc(n, e), Cf(_i), Vr = !!Ti, _i = Ti = null, e.current = n, ep(n), _d(), I = a, O = o, Ce.transition = i
    } else e.current = n;
    if (Sr && (Sr = !1, ot = e, ll = l), i = e.pendingLanes, i === 0 && (ft = null), Rd(n.stateNode), he(e, G()), t !== null)
        for (r = e.onRecoverableError, n = 0; n < t.length; n++) l = t[n], r(l.value, {
            componentStack: l.stack,
            digest: l.digest
        });
    if (rl) throw rl = !1, e = Xi, Xi = null, e;
    return ll & 1 && e.tag !== 0 && tn(), i = e.pendingLanes, i & 1 ? e === Ji ? On++ : (On = 0, Ji = e) : On = 0, xt(), null
}

function tn() {
    if (ot !== null) {
        var e = eu(ll),
            t = Ce.transition,
            n = O;
        try {
            if (Ce.transition = null, O = 16 > e ? 16 : e, ot === null) var r = !1;
            else {
                if (e = ot, ot = null, ll = 0, I & 6) throw Error(y(331));
                var l = I;
                for (I |= 4, S = e.current; S !== null;) {
                    var i = S,
                        o = i.child;
                    if (S.flags & 16) {
                        var a = i.deletions;
                        if (a !== null) {
                            for (var u = 0; u < a.length; u++) {
                                var c = a[u];
                                for (S = c; S !== null;) {
                                    var m = S;
                                    switch (m.tag) {
                                        case 0:
                                        case 11:
                                        case 15:
                                            Fn(8, m, i)
                                    }
                                    var h = m.child;
                                    if (h !== null) h.return = m, S = h;
                                    else
                                        for (; S !== null;) {
                                            m = S;
                                            var g = m.sibling,
                                                w = m.return;
                                            if (dc(m), m === c) {
                                                S = null;
                                                break
                                            }
                                            if (g !== null) {
                                                g.return = w, S = g;
                                                break
                                            }
                                            S = w
                                        }
                                }
                            }
                            var k = i.alternate;
                            if (k !== null) {
                                var x = k.child;
                                if (x !== null) {
                                    k.child = null;
                                    do {
                                        var _ = x.sibling;
                                        x.sibling = null, x = _
                                    } while (x !== null)
                                }
                            }
                            S = i
                        }
                    }
                    if (i.subtreeFlags & 2064 && o !== null) o.return = i, S = o;
                    else e: for (; S !== null;) {
                        if (i = S, i.flags & 2048) switch (i.tag) {
                            case 0:
                            case 11:
                            case 15:
                                Fn(9, i, i.return)
                        }
                        var f = i.sibling;
                        if (f !== null) {
                            f.return = i.return, S = f;
                            break e
                        }
                        S = i.return
                    }
                }
                var d = e.current;
                for (S = d; S !== null;) {
                    o = S;
                    var p = o.child;
                    if (o.subtreeFlags & 2064 && p !== null) p.return = o, S = p;
                    else e: for (o = d; S !== null;) {
                        if (a = S, a.flags & 2048) try {
                            switch (a.tag) {
                                case 0:
                                case 11:
                                case 15:
                                    yl(9, a)
                            }
                        } catch (N) {
                            $(a, a.return, N)
                        }
                        if (a === o) {
                            S = null;
                            break e
                        }
                        var v = a.sibling;
                        if (v !== null) {
                            v.return = a.return, S = v;
                            break e
                        }
                        S = a.return
                    }
                }
                if (I = l, xt(), We && typeof We.onPostCommitFiberRoot == "function") try {
                    We.onPostCommitFiberRoot(cl, e)
                } catch {}
                r = !0
            }
            return r
        } finally {
            O = n, Ce.transition = t
        }
    }
    return !1
}

function la(e, t, n) {
    t = an(n, t), t = ec(e, t, 1), e = dt(e, t, 1), t = ae(), e !== null && (nr(e, 1, t), he(e, t))
}

function $(e, t, n) {
    if (e.tag === 3) la(e, e, n);
    else
        for (; t !== null;) {
            if (t.tag === 3) {
                la(t, e, n);
                break
            } else if (t.tag === 1) {
                var r = t.stateNode;
                if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (ft === null || !ft.has(r))) {
                    e = an(n, e), e = tc(t, e, 1), t = dt(t, e, 1), e = ae(), t !== null && (nr(t, 1, e), he(t, e));
                    break
                }
            }
            t = t.return
        }
}

function op(e, t, n) {
    var r = e.pingCache;
    r !== null && r.delete(t), t = ae(), e.pingedLanes |= e.suspendedLanes & n, b === e && (te & n) === n && (J === 4 || J === 3 && (te & 130023424) === te && 500 > G() - Wo ? Tt(e, 0) : Bo |= n), he(e, t)
}

function kc(e, t) {
    t === 0 && (e.mode & 1 ? (t = pr, pr <<= 1, !(pr & 130023424) && (pr = 4194304)) : t = 1);
    var n = ae();
    e = Ze(e, t), e !== null && (nr(e, t, n), he(e, n))
}

function sp(e) {
    var t = e.memoizedState,
        n = 0;
    t !== null && (n = t.retryLane), kc(e, n)
}

function ap(e, t) {
    var n = 0;
    switch (e.tag) {
        case 13:
            var r = e.stateNode,
                l = e.memoizedState;
            l !== null && (n = l.retryLane);
            break;
        case 19:
            r = e.stateNode;
            break;
        default:
            throw Error(y(314))
    }
    r !== null && r.delete(t), kc(e, n)
}
var Nc;
Nc = function(e, t, n) {
    if (e !== null)
        if (e.memoizedProps !== t.pendingProps || pe.current) fe = !0;
        else {
            if (!(e.lanes & n) && !(t.flags & 128)) return fe = !1, Xf(e, t, n);
            fe = !!(e.flags & 131072)
        }
    else fe = !1, B && t.flags & 1048576 && Eu(t, Xr, t.index);
    switch (t.lanes = 0, t.tag) {
        case 2:
            var r = t.type;
            Mr(e, t), e = t.pendingProps;
            var l = rn(t, oe.current);
            en(t, n), l = Fo(null, t, r, e, l, n);
            var i = Io();
            return t.flags |= 1, typeof l == "object" && l !== null && typeof l.render == "function" && l.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, me(r) ? (i = !0, Gr(t)) : i = !1, t.memoizedState = l.state !== null && l.state !== void 0 ? l.state : null, _o(t), l.updater = vl, t.stateNode = l, l._reactInternals = t, Ui(t, r, e, n), t = Wi(null, t, r, !0, i, n)) : (t.tag = 0, B && i && No(t), se(null, t, l, n), t = t.child), t;
        case 16:
            r = t.elementType;
            e: {
                switch (Mr(e, t), e = t.pendingProps, l = r._init, r = l(r._payload), t.type = r, l = t.tag = cp(r), e = ze(r, e), l) {
                    case 0:
                        t = Bi(null, t, r, e, n);
                        break e;
                    case 1:
                        t = Ks(null, t, r, e, n);
                        break e;
                    case 11:
                        t = Ys(null, t, r, e, n);
                        break e;
                    case 14:
                        t = Gs(null, t, r, ze(r.type, e), n);
                        break e
                }
                throw Error(y(306, r, ""))
            }
            return t;
        case 0:
            return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : ze(r, l), Bi(e, t, r, l, n);
        case 1:
            return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : ze(r, l), Ks(e, t, r, l, n);
        case 3:
            e: {
                if (ic(t), e === null) throw Error(y(387));r = t.pendingProps,
                i = t.memoizedState,
                l = i.element,
                Ru(e, t),
                qr(t, r, null, n);
                var o = t.memoizedState;
                if (r = o.element, i.isDehydrated)
                    if (i = {
                            element: r,
                            isDehydrated: !1,
                            cache: o.cache,
                            pendingSuspenseBoundaries: o.pendingSuspenseBoundaries,
                            transitions: o.transitions
                        }, t.updateQueue.baseState = i, t.memoizedState = i, t.flags & 256) {
                        l = an(Error(y(423)), t), t = Xs(e, t, r, n, l);
                        break e
                    } else if (r !== l) {
                    l = an(Error(y(424)), t), t = Xs(e, t, r, n, l);
                    break e
                } else
                    for (ve = ct(t.stateNode.containerInfo.firstChild), ye = t, B = !0, Me = null, n = Lu(t, null, r, n), t.child = n; n;) n.flags = n.flags & -3 | 4096, n = n.sibling;
                else {
                    if (ln(), r === l) {
                        t = qe(e, t, n);
                        break e
                    }
                    se(e, t, r, n)
                }
                t = t.child
            }
            return t;
        case 5:
            return Mu(t), e === null && Ii(t), r = t.type, l = t.pendingProps, i = e !== null ? e.memoizedProps : null, o = l.children, Li(r, l) ? o = null : i !== null && Li(r, i) && (t.flags |= 32), lc(e, t), se(e, t, o, n), t.child;
        case 6:
            return e === null && Ii(t), null;
        case 13:
            return oc(e, t, n);
        case 4:
            return Lo(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = on(t, null, r, n) : se(e, t, r, n), t.child;
        case 11:
            return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : ze(r, l), Ys(e, t, r, l, n);
        case 7:
            return se(e, t, t.pendingProps, n), t.child;
        case 8:
            return se(e, t, t.pendingProps.children, n), t.child;
        case 12:
            return se(e, t, t.pendingProps.children, n), t.child;
        case 10:
            e: {
                if (r = t.type._context, l = t.pendingProps, i = t.memoizedProps, o = l.value, D(Jr, r._currentValue), r._currentValue = o, i !== null)
                    if (De(i.value, o)) {
                        if (i.children === l.children && !pe.current) {
                            t = qe(e, t, n);
                            break e
                        }
                    } else
                        for (i = t.child, i !== null && (i.return = t); i !== null;) {
                            var a = i.dependencies;
                            if (a !== null) {
                                o = i.child;
                                for (var u = a.firstContext; u !== null;) {
                                    if (u.context === r) {
                                        if (i.tag === 1) {
                                            u = Ke(-1, n & -n), u.tag = 2;
                                            var c = i.updateQueue;
                                            if (c !== null) {
                                                c = c.shared;
                                                var m = c.pending;
                                                m === null ? u.next = u : (u.next = m.next, m.next = u), c.pending = u
                                            }
                                        }
                                        i.lanes |= n, u = i.alternate, u !== null && (u.lanes |= n), Oi(i.return, n, t), a.lanes |= n;
                                        break
                                    }
                                    u = u.next
                                }
                            } else if (i.tag === 10) o = i.type === t.type ? null : i.child;
                            else if (i.tag === 18) {
                                if (o = i.return, o === null) throw Error(y(341));
                                o.lanes |= n, a = o.alternate, a !== null && (a.lanes |= n), Oi(o, n, t), o = i.sibling
                            } else o = i.child;
                            if (o !== null) o.return = i;
                            else
                                for (o = i; o !== null;) {
                                    if (o === t) {
                                        o = null;
                                        break
                                    }
                                    if (i = o.sibling, i !== null) {
                                        i.return = o.return, o = i;
                                        break
                                    }
                                    o = o.return
                                }
                            i = o
                        }
                se(e, t, l.children, n),
                t = t.child
            }
            return t;
        case 9:
            return l = t.type, r = t.pendingProps.children, en(t, n), l = Ee(l), r = r(l), t.flags |= 1, se(e, t, r, n), t.child;
        case 14:
            return r = t.type, l = ze(r, t.pendingProps), l = ze(r.type, l), Gs(e, t, r, l, n);
        case 15:
            return nc(e, t, t.type, t.pendingProps, n);
        case 17:
            return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : ze(r, l), Mr(e, t), t.tag = 1, me(r) ? (e = !0, Gr(t)) : e = !1, en(t, n), bu(t, r, l), Ui(t, r, l, n), Wi(null, t, r, !0, e, n);
        case 19:
            return sc(e, t, n);
        case 22:
            return rc(e, t, n)
    }
    throw Error(y(156, t.tag))
};

function Sc(e, t) {
    return Ja(e, t)
}

function up(e, t, n, r) {
    this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null
}

function je(e, t, n, r) {
    return new up(e, t, n, r)
}

function Qo(e) {
    return e = e.prototype, !(!e || !e.isReactComponent)
}

function cp(e) {
    if (typeof e == "function") return Qo(e) ? 1 : 0;
    if (e != null) {
        if (e = e.$$typeof, e === uo) return 11;
        if (e === co) return 14
    }
    return 2
}

function mt(e, t) {
    var n = e.alternate;
    return n === null ? (n = je(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 14680064, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : {
        lanes: t.lanes,
        firstContext: t.firstContext
    }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n
}

function Or(e, t, n, r, l, i) {
    var o = 2;
    if (r = e, typeof e == "function") Qo(e) && (o = 1);
    else if (typeof e == "string") o = 5;
    else e: switch (e) {
        case At:
            return _t(n.children, l, i, t);
        case ao:
            o = 8, l |= 8;
            break;
        case ai:
            return e = je(12, n, t, l | 2), e.elementType = ai, e.lanes = i, e;
        case ui:
            return e = je(13, n, t, l), e.elementType = ui, e.lanes = i, e;
        case ci:
            return e = je(19, n, t, l), e.elementType = ci, e.lanes = i, e;
        case Ma:
            return wl(n, l, i, t);
        default:
            if (typeof e == "object" && e !== null) switch (e.$$typeof) {
                case za:
                    o = 10;
                    break e;
                case Ra:
                    o = 9;
                    break e;
                case uo:
                    o = 11;
                    break e;
                case co:
                    o = 14;
                    break e;
                case tt:
                    o = 16, r = null;
                    break e
            }
            throw Error(y(130, e == null ? e : typeof e, ""))
    }
    return t = je(o, n, t, l), t.elementType = e, t.type = r, t.lanes = i, t
}

function _t(e, t, n, r) {
    return e = je(7, e, r, t), e.lanes = n, e
}

function wl(e, t, n, r) {
    return e = je(22, e, r, t), e.elementType = Ma, e.lanes = n, e.stateNode = {
        isHidden: !1
    }, e
}

function ni(e, t, n) {
    return e = je(6, e, null, t), e.lanes = n, e
}

function ri(e, t, n) {
    return t = je(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        implementation: e.implementation
    }, t
}

function dp(e, t, n, r, l) {
    this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = Dl(0), this.expirationTimes = Dl(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Dl(0), this.identifierPrefix = r, this.onRecoverableError = l, this.mutableSourceEagerHydrationData = null
}

function Yo(e, t, n, r, l, i, o, a, u) {
    return e = new dp(e, t, n, a, u), t === 1 ? (t = 1, i === !0 && (t |= 8)) : t = 0, i = je(3, null, null, t), e.current = i, i.stateNode = e, i.memoizedState = {
        element: r,
        isDehydrated: n,
        cache: null,
        transitions: null,
        pendingSuspenseBoundaries: null
    }, _o(i), e
}

function fp(e, t, n) {
    var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
        $$typeof: Ut,
        key: r == null ? null : "" + r,
        children: e,
        containerInfo: t,
        implementation: n
    }
}

function jc(e) {
    if (!e) return gt;
    e = e._reactInternals;
    e: {
        if (Ot(e) !== e || e.tag !== 1) throw Error(y(170));
        var t = e;do {
            switch (t.tag) {
                case 3:
                    t = t.stateNode.context;
                    break e;
                case 1:
                    if (me(t.type)) {
                        t = t.stateNode.__reactInternalMemoizedMergedChildContext;
                        break e
                    }
            }
            t = t.return
        } while (t !== null);
        throw Error(y(171))
    }
    if (e.tag === 1) {
        var n = e.type;
        if (me(n)) return ju(e, n, t)
    }
    return t
}

function Cc(e, t, n, r, l, i, o, a, u) {
    return e = Yo(n, r, !0, e, l, i, o, a, u), e.context = jc(null), n = e.current, r = ae(), l = pt(n), i = Ke(r, l), i.callback = t ?? null, dt(n, i, l), e.current.lanes = l, nr(e, l, r), he(e, r), e
}

function kl(e, t, n, r) {
    var l = t.current,
        i = ae(),
        o = pt(l);
    return n = jc(n), t.context === null ? t.context = n : t.pendingContext = n, t = Ke(i, o), t.payload = {
        element: e
    }, r = r === void 0 ? null : r, r !== null && (t.callback = r), e = dt(l, t, o), e !== null && (Ie(e, l, o, i), Lr(e, l, o)), o
}

function ol(e) {
    if (e = e.current, !e.child) return null;
    switch (e.child.tag) {
        case 5:
            return e.child.stateNode;
        default:
            return e.child.stateNode
    }
}

function ia(e, t) {
    if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
        var n = e.retryLane;
        e.retryLane = n !== 0 && n < t ? n : t
    }
}

function Go(e, t) {
    ia(e, t), (e = e.alternate) && ia(e, t)
}

function pp() {
    return null
}
var Ec = typeof reportError == "function" ? reportError : function(e) {
    console.error(e)
};

function Ko(e) {
    this._internalRoot = e
}
Nl.prototype.render = Ko.prototype.render = function(e) {
    var t = this._internalRoot;
    if (t === null) throw Error(y(409));
    kl(e, t, null, null)
};
Nl.prototype.unmount = Ko.prototype.unmount = function() {
    var e = this._internalRoot;
    if (e !== null) {
        this._internalRoot = null;
        var t = e.containerInfo;
        Ft(function() {
            kl(null, e, null, null)
        }), t[Je] = null
    }
};

function Nl(e) {
    this._internalRoot = e
}
Nl.prototype.unstable_scheduleHydration = function(e) {
    if (e) {
        var t = ru();
        e = {
            blockedOn: null,
            target: e,
            priority: t
        };
        for (var n = 0; n < rt.length && t !== 0 && t < rt[n].priority; n++);
        rt.splice(n, 0, e), n === 0 && iu(e)
    }
};

function Xo(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11)
}

function Sl(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
}

function oa() {}

function mp(e, t, n, r, l) {
    if (l) {
        if (typeof r == "function") {
            var i = r;
            r = function() {
                var c = ol(o);
                i.call(c)
            }
        }
        var o = Cc(t, r, e, 0, null, !1, !1, "", oa);
        return e._reactRootContainer = o, e[Je] = o.current, Qn(e.nodeType === 8 ? e.parentNode : e), Ft(), o
    }
    for (; l = e.lastChild;) e.removeChild(l);
    if (typeof r == "function") {
        var a = r;
        r = function() {
            var c = ol(u);
            a.call(c)
        }
    }
    var u = Yo(e, 0, !1, null, null, !1, !1, "", oa);
    return e._reactRootContainer = u, e[Je] = u.current, Qn(e.nodeType === 8 ? e.parentNode : e), Ft(function() {
        kl(t, u, n, r)
    }), u
}

function jl(e, t, n, r, l) {
    var i = n._reactRootContainer;
    if (i) {
        var o = i;
        if (typeof l == "function") {
            var a = l;
            l = function() {
                var u = ol(o);
                a.call(u)
            }
        }
        kl(t, o, e, l)
    } else o = mp(n, t, e, l, r);
    return ol(o)
}
tu = function(e) {
    switch (e.tag) {
        case 3:
            var t = e.stateNode;
            if (t.current.memoizedState.isDehydrated) {
                var n = En(t.pendingLanes);
                n !== 0 && (mo(t, n | 1), he(t, G()), !(I & 6) && (un = G() + 500, xt()))
            }
            break;
        case 13:
            Ft(function() {
                var r = Ze(e, 1);
                if (r !== null) {
                    var l = ae();
                    Ie(r, e, 1, l)
                }
            }), Go(e, 1)
    }
};
ho = function(e) {
    if (e.tag === 13) {
        var t = Ze(e, 134217728);
        if (t !== null) {
            var n = ae();
            Ie(t, e, 134217728, n)
        }
        Go(e, 134217728)
    }
};
nu = function(e) {
    if (e.tag === 13) {
        var t = pt(e),
            n = Ze(e, t);
        if (n !== null) {
            var r = ae();
            Ie(n, e, t, r)
        }
        Go(e, t)
    }
};
ru = function() {
    return O
};
lu = function(e, t) {
    var n = O;
    try {
        return O = e, t()
    } finally {
        O = n
    }
};
wi = function(e, t, n) {
    switch (t) {
        case "input":
            if (pi(e, n), t = n.name, n.type === "radio" && t != null) {
                for (n = e; n.parentNode;) n = n.parentNode;
                for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
                    var r = n[t];
                    if (r !== e && r.form === e.form) {
                        var l = ml(r);
                        if (!l) throw Error(y(90));
                        Ia(r), pi(r, l)
                    }
                }
            }
            break;
        case "textarea":
            Da(e, n);
            break;
        case "select":
            t = n.value, t != null && Jt(e, !!n.multiple, t, !1)
    }
};
$a = Vo;
Qa = Ft;
var hp = {
        usingClientEntryPoint: !1,
        Events: [lr, Ht, ml, Va, Ha, Vo]
    },
    Sn = {
        findFiberByHostInstance: jt,
        bundleType: 0,
        version: "18.3.1",
        rendererPackageName: "react-dom"
    },
    gp = {
        bundleType: Sn.bundleType,
        version: Sn.version,
        rendererPackageName: Sn.rendererPackageName,
        rendererConfig: Sn.rendererConfig,
        overrideHookState: null,
        overrideHookStateDeletePath: null,
        overrideHookStateRenamePath: null,
        overrideProps: null,
        overridePropsDeletePath: null,
        overridePropsRenamePath: null,
        setErrorHandler: null,
        setSuspenseHandler: null,
        scheduleUpdate: null,
        currentDispatcherRef: be.ReactCurrentDispatcher,
        findHostInstanceByFiber: function(e) {
            return e = Ka(e), e === null ? null : e.stateNode
        },
        findFiberByHostInstance: Sn.findFiberByHostInstance || pp,
        findHostInstancesForRefresh: null,
        scheduleRefresh: null,
        scheduleRoot: null,
        setRefreshHandler: null,
        getCurrentFiber: null,
        reconcilerVersion: "18.3.1-next-f1338f8080-20240426"
    };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var jr = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!jr.isDisabled && jr.supportsFiber) try {
        cl = jr.inject(gp), We = jr
    } catch {}
}
we.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = hp;
we.createPortal = function(e, t) {
    var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!Xo(t)) throw Error(y(200));
    return fp(e, t, null, n)
};
we.createRoot = function(e, t) {
    if (!Xo(e)) throw Error(y(299));
    var n = !1,
        r = "",
        l = Ec;
    return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onRecoverableError !== void 0 && (l = t.onRecoverableError)), t = Yo(e, 1, !1, null, null, n, !1, r, l), e[Je] = t.current, Qn(e.nodeType === 8 ? e.parentNode : e), new Ko(t)
};
we.findDOMNode = function(e) {
    if (e == null) return null;
    if (e.nodeType === 1) return e;
    var t = e._reactInternals;
    if (t === void 0) throw typeof e.render == "function" ? Error(y(188)) : (e = Object.keys(e).join(","), Error(y(268, e)));
    return e = Ka(t), e = e === null ? null : e.stateNode, e
};
we.flushSync = function(e) {
    return Ft(e)
};
we.hydrate = function(e, t, n) {
    if (!Sl(t)) throw Error(y(200));
    return jl(null, e, t, !0, n)
};
we.hydrateRoot = function(e, t, n) {
    if (!Xo(e)) throw Error(y(405));
    var r = n != null && n.hydratedSources || null,
        l = !1,
        i = "",
        o = Ec;
    if (n != null && (n.unstable_strictMode === !0 && (l = !0), n.identifierPrefix !== void 0 && (i = n.identifierPrefix), n.onRecoverableError !== void 0 && (o = n.onRecoverableError)), t = Cc(t, null, e, 1, n ?? null, l, !1, i, o), e[Je] = t.current, Qn(e), r)
        for (e = 0; e < r.length; e++) n = r[e], l = n._getVersion, l = l(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, l] : t.mutableSourceEagerHydrationData.push(n, l);
    return new Nl(t)
};
we.render = function(e, t, n) {
    if (!Sl(t)) throw Error(y(200));
    return jl(null, e, t, !1, n)
};
we.unmountComponentAtNode = function(e) {
    if (!Sl(e)) throw Error(y(40));
    return e._reactRootContainer ? (Ft(function() {
        jl(null, null, e, !1, function() {
            e._reactRootContainer = null, e[Je] = null
        })
    }), !0) : !1
};
we.unstable_batchedUpdates = Vo;
we.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
    if (!Sl(n)) throw Error(y(200));
    if (e == null || e._reactInternals === void 0) throw Error(y(38));
    return jl(e, t, n, !1, r)
};
we.version = "18.3.1-next-f1338f8080-20240426";

function Pc() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Pc)
    } catch (e) {
        console.error(e)
    }
}
Pc(), Pa.exports = we;
var vp = Pa.exports,
    Tc, sa = vp;
Tc = sa.createRoot, sa.hydrateRoot;
/**
 * @remix-run/router v1.23.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function er() {
    return er = Object.assign ? Object.assign.bind() : function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
        }
        return e
    }, er.apply(this, arguments)
}
var Pt;
(function(e) {
    e.Pop = "POP", e.Push = "PUSH", e.Replace = "REPLACE"
})(Pt || (Pt = {}));
const aa = "popstate";

function yp(e) {
    e === void 0 && (e = {});

    function t(r, l) {
        let {
            pathname: i,
            search: o,
            hash: a
        } = r.location;
        return bi("", {
            pathname: i,
            search: o,
            hash: a
        }, l.state && l.state.usr || null, l.state && l.state.key || "default")
    }

    function n(r, l) {
        return typeof l == "string" ? l : sl(l)
    }
    return wp(t, n, null, e)
}

function Oe(e, t) {
    if (e === !1 || e === null || typeof e > "u") throw new Error(t)
}

function xp() {
    return Math.random().toString(36).substr(2, 8)
}

function ua(e, t) {
    return {
        usr: e.state,
        key: e.key,
        idx: t
    }
}

function bi(e, t, n, r) {
    return n === void 0 && (n = null), er({
        pathname: typeof e == "string" ? e : e.pathname,
        search: "",
        hash: ""
    }, typeof t == "string" ? Cl(t) : t, {
        state: n,
        key: t && t.key || r || xp()
    })
}

function sl(e) {
    let {
        pathname: t = "/",
        search: n = "",
        hash: r = ""
    } = e;
    return n && n !== "?" && (t += n.charAt(0) === "?" ? n : "?" + n), r && r !== "#" && (t += r.charAt(0) === "#" ? r : "#" + r), t
}

function Cl(e) {
    let t = {};
    if (e) {
        let n = e.indexOf("#");
        n >= 0 && (t.hash = e.substr(n), e = e.substr(0, n));
        let r = e.indexOf("?");
        r >= 0 && (t.search = e.substr(r), e = e.substr(0, r)), e && (t.pathname = e)
    }
    return t
}

function wp(e, t, n, r) {
    r === void 0 && (r = {});
    let {
        window: l = document.defaultView,
        v5Compat: i = !1
    } = r, o = l.history, a = Pt.Pop, u = null, c = m();
    c == null && (c = 0, o.replaceState(er({}, o.state, {
        idx: c
    }), ""));

    function m() {
        return (o.state || {
            idx: null
        }).idx
    }

    function h() {
        a = Pt.Pop;
        let _ = m(),
            f = _ == null ? null : _ - c;
        c = _, u && u({
            action: a,
            location: x.location,
            delta: f
        })
    }

    function g(_, f) {
        a = Pt.Push;
        let d = bi(x.location, _, f);
        c = m() + 1;
        let p = ua(d, c),
            v = x.createHref(d);
        try {
            o.pushState(p, "", v)
        } catch (N) {
            if (N instanceof DOMException && N.name === "DataCloneError") throw N;
            l.location.assign(v)
        }
        i && u && u({
            action: a,
            location: x.location,
            delta: 1
        })
    }

    function w(_, f) {
        a = Pt.Replace;
        let d = bi(x.location, _, f);
        c = m();
        let p = ua(d, c),
            v = x.createHref(d);
        o.replaceState(p, "", v), i && u && u({
            action: a,
            location: x.location,
            delta: 0
        })
    }

    function k(_) {
        let f = l.location.origin !== "null" ? l.location.origin : l.location.href,
            d = typeof _ == "string" ? _ : sl(_);
        return d = d.replace(/ $/, "%20"), Oe(f, "No window.location.(origin|href) available to create URL for href: " + d), new URL(d, f)
    }
    let x = {
        get action() {
            return a
        },
        get location() {
            return e(l, o)
        },
        listen(_) {
            if (u) throw new Error("A history only accepts one active listener");
            return l.addEventListener(aa, h), u = _, () => {
                l.removeEventListener(aa, h), u = null
            }
        },
        createHref(_) {
            return t(l, _)
        },
        createURL: k,
        encodeLocation(_) {
            let f = k(_);
            return {
                pathname: f.pathname,
                search: f.search,
                hash: f.hash
            }
        },
        push: g,
        replace: w,
        go(_) {
            return o.go(_)
        }
    };
    return x
}
var ca;
(function(e) {
    e.data = "data", e.deferred = "deferred", e.redirect = "redirect", e.error = "error"
})(ca || (ca = {}));

function _c(e, t) {
    if (t === "/") return e;
    if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
    let n = t.endsWith("/") ? t.length - 1 : t.length,
        r = e.charAt(n);
    return r && r !== "/" ? null : e.slice(n) || "/"
}

function kp(e, t) {
    t === void 0 && (t = "/");
    let {
        pathname: n,
        search: r = "",
        hash: l = ""
    } = typeof e == "string" ? Cl(e) : e;
    return {
        pathname: n ? n.startsWith("/") ? n : Np(n, t) : t,
        search: jp(r),
        hash: Cp(l)
    }
}

function Np(e, t) {
    let n = t.replace(/\/+$/, "").split("/");
    return e.split("/").forEach(l => {
        l === ".." ? n.length > 1 && n.pop() : l !== "." && n.push(l)
    }), n.length > 1 ? n.join("/") : "/"
}

function li(e, t, n, r) {
    return "Cannot include a '" + e + "' character in a manually specified " + ("`to." + t + "` field [" + JSON.stringify(r) + "].  Please separate it out to the ") + ("`to." + n + "` field. Alternatively you may provide the full path as ") + 'a string in <Link to="..."> and the router will parse it for you.'
}

function Sp(e) {
    return e.filter((t, n) => n === 0 || t.route.path && t.route.path.length > 0)
}

function Lc(e, t) {
    let n = Sp(e);
    return t ? n.map((r, l) => l === n.length - 1 ? r.pathname : r.pathnameBase) : n.map(r => r.pathnameBase)
}

function zc(e, t, n, r) {
    r === void 0 && (r = !1);
    let l;
    typeof e == "string" ? l = Cl(e) : (l = er({}, e), Oe(!l.pathname || !l.pathname.includes("?"), li("?", "pathname", "search", l)), Oe(!l.pathname || !l.pathname.includes("#"), li("#", "pathname", "hash", l)), Oe(!l.search || !l.search.includes("#"), li("#", "search", "hash", l)));
    let i = e === "" || l.pathname === "",
        o = i ? "/" : l.pathname,
        a;
    if (o == null) a = n;
    else {
        let h = t.length - 1;
        if (!r && o.startsWith("..")) {
            let g = o.split("/");
            for (; g[0] === "..";) g.shift(), h -= 1;
            l.pathname = g.join("/")
        }
        a = h >= 0 ? t[h] : "/"
    }
    let u = kp(l, a),
        c = o && o !== "/" && o.endsWith("/"),
        m = (i || o === ".") && n.endsWith("/");
    return !u.pathname.endsWith("/") && (c || m) && (u.pathname += "/"), u
}
const Rc = e => e.join("/").replace(/\/\/+/g, "/"),
    jp = e => !e || e === "?" ? "" : e.startsWith("?") ? e : "?" + e,
    Cp = e => !e || e === "#" ? "" : e.startsWith("#") ? e : "#" + e,
    Mc = ["post", "put", "patch", "delete"];
new Set(Mc);
const Ep = ["get", ...Mc];
new Set(Ep);
/**
 * React Router v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function al() {
    return al = Object.assign ? Object.assign.bind() : function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
        }
        return e
    }, al.apply(this, arguments)
}
const Fc = T.createContext(null),
    pn = T.createContext(null),
    Jo = T.createContext(null),
    El = T.createContext({
        outlet: null,
        matches: [],
        isDataRoute: !1
    });

function Pp(e, t) {
    let {
        relative: n
    } = t === void 0 ? {} : t;
    Pl() || Oe(!1);
    let {
        basename: r,
        navigator: l
    } = T.useContext(pn), {
        hash: i,
        pathname: o,
        search: a
    } = Oc(e, {
        relative: n
    }), u = o;
    return r !== "/" && (u = o === "/" ? r : Rc([r, o])), l.createHref({
        pathname: u,
        search: a,
        hash: i
    })
}

function Pl() {
    return T.useContext(Jo) != null
}

function Zo() {
    return Pl() || Oe(!1), T.useContext(Jo).location
}

function Ic(e) {
    T.useContext(pn).static || T.useLayoutEffect(e)
}

function Tp() {
    let {
        isDataRoute: e
    } = T.useContext(El);
    return e ? Mp() : _p()
}

function _p() {
    Pl() || Oe(!1);
    let e = T.useContext(Fc),
        {
            basename: t,
            future: n,
            navigator: r
        } = T.useContext(pn),
        {
            matches: l
        } = T.useContext(El),
        {
            pathname: i
        } = Zo(),
        o = JSON.stringify(Lc(l, n.v7_relativeSplatPath)),
        a = T.useRef(!1);
    return Ic(() => {
        a.current = !0
    }), T.useCallback(function(c, m) {
        if (m === void 0 && (m = {}), !a.current) return;
        if (typeof c == "number") {
            r.go(c);
            return
        }
        let h = zc(c, JSON.parse(o), i, m.relative === "path");
        e == null && t !== "/" && (h.pathname = h.pathname === "/" ? t : Rc([t, h.pathname])), (m.replace ? r.replace : r.push)(h, m.state, m)
    }, [t, r, o, i, e])
}

function Oc(e, t) {
    let {
        relative: n
    } = t === void 0 ? {} : t, {
        future: r
    } = T.useContext(pn), {
        matches: l
    } = T.useContext(El), {
        pathname: i
    } = Zo(), o = JSON.stringify(Lc(l, r.v7_relativeSplatPath));
    return T.useMemo(() => zc(e, JSON.parse(o), i, n === "path"), [e, o, i, n])
}
var Dc = function(e) {
        return e.UseBlocker = "useBlocker", e.UseRevalidator = "useRevalidator", e.UseNavigateStable = "useNavigate", e
    }(Dc || {}),
    Uc = function(e) {
        return e.UseBlocker = "useBlocker", e.UseLoaderData = "useLoaderData", e.UseActionData = "useActionData", e.UseRouteError = "useRouteError", e.UseNavigation = "useNavigation", e.UseRouteLoaderData = "useRouteLoaderData", e.UseMatches = "useMatches", e.UseRevalidator = "useRevalidator", e.UseNavigateStable = "useNavigate", e.UseRouteId = "useRouteId", e
    }(Uc || {});

function Lp(e) {
    let t = T.useContext(Fc);
    return t || Oe(!1), t
}

function zp(e) {
    let t = T.useContext(El);
    return t || Oe(!1), t
}

function Rp(e) {
    let t = zp(),
        n = t.matches[t.matches.length - 1];
    return n.route.id || Oe(!1), n.route.id
}

function Mp() {
    let {
        router: e
    } = Lp(Dc.UseNavigateStable), t = Rp(Uc.UseNavigateStable), n = T.useRef(!1);
    return Ic(() => {
        n.current = !0
    }), T.useCallback(function(l, i) {
        i === void 0 && (i = {}), n.current && (typeof l == "number" ? e.navigate(l) : e.navigate(l, al({
            fromRouteId: t
        }, i)))
    }, [e, t])
}

function Fp(e, t) {
    e == null || e.v7_startTransition, e == null || e.v7_relativeSplatPath
}

function Ip(e) {
    let {
        basename: t = "/",
        children: n = null,
        location: r,
        navigationType: l = Pt.Pop,
        navigator: i,
        static: o = !1,
        future: a
    } = e;
    Pl() && Oe(!1);
    let u = t.replace(/^\/*/, "/"),
        c = T.useMemo(() => ({
            basename: u,
            navigator: i,
            static: o,
            future: al({
                v7_relativeSplatPath: !1
            }, a)
        }), [u, a, i, o]);
    typeof r == "string" && (r = Cl(r));
    let {
        pathname: m = "/",
        search: h = "",
        hash: g = "",
        state: w = null,
        key: k = "default"
    } = r, x = T.useMemo(() => {
        let _ = _c(m, u);
        return _ == null ? null : {
            location: {
                pathname: _,
                search: h,
                hash: g,
                state: w,
                key: k
            },
            navigationType: l
        }
    }, [u, m, h, g, w, k, l]);
    return x == null ? null : T.createElement(pn.Provider, {
        value: c
    }, T.createElement(Jo.Provider, {
        children: n,
        value: x
    }))
}
new Promise(() => {});
/**
 * React Router DOM v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function eo() {
    return eo = Object.assign ? Object.assign.bind() : function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
        }
        return e
    }, eo.apply(this, arguments)
}

function Op(e, t) {
    if (e == null) return {};
    var n = {},
        r = Object.keys(e),
        l, i;
    for (i = 0; i < r.length; i++) l = r[i], !(t.indexOf(l) >= 0) && (n[l] = e[l]);
    return n
}

function Dp(e) {
    return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey)
}

function Up(e, t) {
    return e.button === 0 && (!t || t === "_self") && !Dp(e)
}
const Ap = ["onClick", "relative", "reloadDocument", "replace", "state", "target", "to", "preventScrollReset", "viewTransition"],
    Bp = "6";
try {
    window.__reactRouterVersion = Bp
} catch {}
const Wp = "startTransition",
    da = id[Wp];

function Vp(e) {
    let {
        basename: t,
        children: n,
        future: r,
        window: l
    } = e, i = T.useRef();
    i.current == null && (i.current = yp({
        window: l,
        v5Compat: !0
    }));
    let o = i.current,
        [a, u] = T.useState({
            action: o.action,
            location: o.location
        }),
        {
            v7_startTransition: c
        } = r || {},
        m = T.useCallback(h => {
            c && da ? da(() => u(h)) : u(h)
        }, [u, c]);
    return T.useLayoutEffect(() => o.listen(m), [o, m]), T.useEffect(() => Fp(r), [r]), T.createElement(Ip, {
        basename: t,
        children: n,
        location: a.location,
        navigationType: a.action,
        navigator: o,
        future: r
    })
}
const Hp = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u",
    $p = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
    F = T.forwardRef(function(t, n) {
        let {
            onClick: r,
            relative: l,
            reloadDocument: i,
            replace: o,
            state: a,
            target: u,
            to: c,
            preventScrollReset: m,
            viewTransition: h
        } = t, g = Op(t, Ap), {
            basename: w
        } = T.useContext(pn), k, x = !1;
        if (typeof c == "string" && $p.test(c) && (k = c, Hp)) try {
            let p = new URL(window.location.href),
                v = c.startsWith("//") ? new URL(p.protocol + c) : new URL(c),
                N = _c(v.pathname, w);
            v.origin === p.origin && N != null ? c = N + v.search + v.hash : x = !0
        } catch {}
        let _ = Pp(c, {
                relative: l
            }),
            f = Qp(c, {
                replace: o,
                state: a,
                target: u,
                preventScrollReset: m,
                relative: l,
                viewTransition: h
            });

        function d(p) {
            r && r(p), p.defaultPrevented || f(p)
        }
        return T.createElement("a", eo({}, g, {
            href: k || _,
            onClick: x || i ? r : d,
            ref: n,
            target: u
        }))
    });
var fa;
(function(e) {
    e.UseScrollRestoration = "useScrollRestoration", e.UseSubmit = "useSubmit", e.UseSubmitFetcher = "useSubmitFetcher", e.UseFetcher = "useFetcher", e.useViewTransitionState = "useViewTransitionState"
})(fa || (fa = {}));
var pa;
(function(e) {
    e.UseFetcher = "useFetcher", e.UseFetchers = "useFetchers", e.UseScrollRestoration = "useScrollRestoration"
})(pa || (pa = {}));

function Qp(e, t) {
    let {
        target: n,
        replace: r,
        state: l,
        preventScrollReset: i,
        relative: o,
        viewTransition: a
    } = t === void 0 ? {} : t, u = Tp(), c = Zo(), m = Oc(e, {
        relative: o
    });
    return T.useCallback(h => {
        if (Up(h, n)) {
            h.preventDefault();
            let g = r !== void 0 ? r : sl(c) === sl(m);
            u(e, {
                replace: g,
                state: l,
                preventScrollReset: i,
                relative: o,
                viewTransition: a
            })
        }
    }, [c, u, m, r, l, n, e, i, o, a])
}
const Yp = "assets/logo-BkElnY3d.png",
    Ac = ({
        darkMode: e = !1
    }) => s.jsx("a", {
        href: "/",
        className: "flex items-center mix-blend-multiply",
        children: s.jsx("img", {
            src: Yp,
            alt: "STEP Logo"
        })
    }),
    Gp = () => {
        const [e, t] = T.useState(!1);
        return s.jsx("header", {
            className: "bg-white py-4 border-b border-gray-200",
            style: {
                opacity: 1
            },
            children: s.jsxs("div", {
                className: "container mx-auto px-6 lg:max-w-6xl",
                children: [s.jsxs("nav", {
                    className: "flex items-center justify-between",
                    children: [s.jsx("div", {
                        className: "flex items-center space-x-8",
                        children: s.jsx(Ac, {})
                    }), s.jsxs("div", {
                        className: "hidden md:flex items-center space-x-8",
                        children: [s.jsx("a", {
                            href: "/for-corporate",
                            className: "text-sm font-medium transition-colors duration-200",
                            style: {
                                color: "#1E2C53"
                            },
                            children: "For Corporate"
                        }), s.jsx("a", {
                            href: "/for-institutions",
                            className: "text-sm font-medium transition-colors duration-200",
                            style: {
                                color: "#1E2C53"
                            },
                            children: "For Institutions"
                        }), s.jsx("a", {
                            href: "/login",
                            className: "text-sm font-medium transition-colors duration-200",
                            style: {
                                color: "#1E2C53"
                            },
                            children: "Login"
                        })]
                    }), s.jsx("button", {
                        className: "md:hidden flex items-center px-3 py-2 border border-gray-300 rounded-md transition-colors",
                        style: {
                            color: "#1E2C53"
                        },
                        onClick: () => t(!e),
                        children: s.jsx("svg", {
                            className: "w-5 h-5",
                            fill: "none",
                            stroke: "currentColor",
                            viewBox: "0 0 24 24",
                            children: s.jsx("path", {
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                                strokeWidth: 2,
                                d: "M4 6h16M4 12h16M4 18h16"
                            })
                        })
                    })]
                }), e && s.jsx("div", {
                    className: "md:hidden mt-4 pb-4 border-t border-gray-200",
                    children: s.jsxs("div", {
                        className: "flex flex-col space-y-3 pt-4",
                        children: [s.jsx("a", {
                            href: "/for-corporate",
                            className: "text-sm font-medium transition-colors duration-200",
                            style: {
                                color: "#1E2C53"
                            },
                            onClick: () => t(!1),
                            children: "For Corporate"
                        }), s.jsx("a", {
                            href: "/for-institutions",
                            className: "text-sm font-medium transition-colors duration-200",
                            style: {
                                color: "#1E2C53"
                            },
                            onClick: () => t(!1),
                            children: "For Institutions"
                        }), s.jsx("a", {
                            href: "/login",
                            className: "text-sm font-medium transition-colors duration-200",
                            style: {
                                color: "#1E2C53"
                            },
                            onClick: () => t(!1),
                            children: "Login"
                        })]
                    })
                })]
            })
        })
    },
    Kp = () => s.jsx("section", {
        className: "w-full",
        style: {
            background: "#F2F2F2"
        },
        children: s.jsx("div", {
            className: "container mx-auto px-6 py-10 lg:max-w-6xl",
            children: s.jsxs("div", {
                className: "flex flex-col lg:flex-row items-center gap-4 lg:gap-6",
                children: [s.jsx("div", {
                    className: "order-2 lg:order-1 flex justify-end",
                    children: s.jsx("div", {
                        className: "relative",
                        children: s.jsx("img", {
                            src: "https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
                            alt: "Team collaborating",
                            className: "w-full rounded-lg shadow-lg",
                            style: {
                                maxWidth: "450px",
                                width: "100%",
                                maxHeight: "auto"
                            }
                        })
                    })
                }), s.jsxs("div", {
                    className: "lg:w-[55%] order-1 lg:order-2 lg:pl-4",
                    children: [s.jsx("h1", {
                        className: "text-[30px] font-bold mb-6",
                        style: {
                            color: "#1E2C53",
                            lineHeight: "1.2"
                        },
                        children: "Elevate Workplace Communication with STEP"
                    }), s.jsx("p", {
                        className: "text-lg mb-8",
                        style: {
                            color: "#1E2C53",
                            opacity: .8,
                            lineHeight: "1.6"
                        },
                        children: "Specialized workplace training and English skill development programs designed for your teams. Build confidence, efficiency and cultural fluency in your team."
                    }), s.jsxs("div", {
                        className: "flex flex-col sm:flex-row gap-4",
                        children: [s.jsx("button", {
                            className: "px-8 py-3 uppercase rounded-md font-semibold text-white transition-all duration-300 hover:opacity-90",
                            style: {
                                background: "#1E2C53"
                            },
                            children: "Schedule a Demo"
                        }), s.jsx("button", {
                            className: "px-8 py-3 uppercase rounded-md font-semibold border-2 transition-all duration-300 hover:opacity-80",
                            style: {
                                color: "#1E2C53",
                                borderColor: "#1E2C53",
                                background: "transparent"
                            },
                            children: "Request a call back"
                        })]
                    })]
                })]
            })
        })
    });
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var Xp = {
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round"
};
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Jp = e => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase().trim(),
    He = (e, t) => {
        const n = T.forwardRef(({
            color: r = "currentColor",
            size: l = 24,
            strokeWidth: i = 2,
            absoluteStrokeWidth: o,
            className: a = "",
            children: u,
            ...c
        }, m) => T.createElement("svg", {
            ref: m,
            ...Xp,
            width: l,
            height: l,
            stroke: r,
            strokeWidth: o ? Number(i) * 24 / Number(l) : i,
            className: ["lucide", `lucide-${Jp(e)}`, a].join(" "),
            ...c
        }, [...t.map(([h, g]) => T.createElement(h, g)), ...Array.isArray(u) ? u : [u]]));
        return n.displayName = `${e}`, n
    };
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Zp = He("ArrowUp", [
    ["path", {
        d: "m5 12 7-7 7 7",
        key: "hav0vg"
    }],
    ["path", {
        d: "M12 19V5",
        key: "x0mq9r"
    }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const qp = He("Calendar", [
    ["path", {
        d: "M8 2v4",
        key: "1cmpym"
    }],
    ["path", {
        d: "M16 2v4",
        key: "4m81vk"
    }],
    ["rect", {
        width: "18",
        height: "18",
        x: "3",
        y: "4",
        rx: "2",
        key: "1hopcy"
    }],
    ["path", {
        d: "M3 10h18",
        key: "8toen8"
    }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const bp = He("ClipboardCheck", [
    ["rect", {
        width: "8",
        height: "4",
        x: "8",
        y: "2",
        rx: "1",
        ry: "1",
        key: "tgr4d6"
    }],
    ["path", {
        d: "M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2",
        key: "116196"
    }],
    ["path", {
        d: "m9 14 2 2 4-4",
        key: "df797q"
    }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Bc = He("Clock", [
    ["circle", {
        cx: "12",
        cy: "12",
        r: "10",
        key: "1mglay"
    }],
    ["polyline", {
        points: "12 6 12 12 16 14",
        key: "68esgv"
    }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const em = He("LayoutGrid", [
    ["rect", {
        width: "7",
        height: "7",
        x: "3",
        y: "3",
        rx: "1",
        key: "1g98yp"
    }],
    ["rect", {
        width: "7",
        height: "7",
        x: "14",
        y: "3",
        rx: "1",
        key: "6d4xhi"
    }],
    ["rect", {
        width: "7",
        height: "7",
        x: "14",
        y: "14",
        rx: "1",
        key: "nxv5o0"
    }],
    ["rect", {
        width: "7",
        height: "7",
        x: "3",
        y: "14",
        rx: "1",
        key: "1bb6yr"
    }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const tm = He("Lightbulb", [
    ["path", {
        d: "M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5",
        key: "1gvzjb"
    }],
    ["path", {
        d: "M9 18h6",
        key: "x1upvd"
    }],
    ["path", {
        d: "M10 22h4",
        key: "ceow96"
    }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const nm = He("Network", [
    ["rect", {
        x: "16",
        y: "16",
        width: "6",
        height: "6",
        rx: "1",
        key: "4q2zg0"
    }],
    ["rect", {
        x: "2",
        y: "16",
        width: "6",
        height: "6",
        rx: "1",
        key: "8cvhb9"
    }],
    ["rect", {
        x: "9",
        y: "2",
        width: "6",
        height: "6",
        rx: "1",
        key: "1egb70"
    }],
    ["path", {
        d: "M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3",
        key: "1jsf9p"
    }],
    ["path", {
        d: "M12 12V8",
        key: "2874zd"
    }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const rm = He("User", [
    ["path", {
        d: "M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",
        key: "975kel"
    }],
    ["circle", {
        cx: "12",
        cy: "7",
        r: "4",
        key: "17ys0d"
    }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Tl = He("Users", [
    ["path", {
        d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",
        key: "1yyitq"
    }],
    ["circle", {
        cx: "9",
        cy: "7",
        r: "4",
        key: "nufk8"
    }],
    ["path", {
        d: "M22 21v-2a4 4 0 0 0-3-3.87",
        key: "kshegd"
    }],
    ["path", {
        d: "M16 3.13a4 4 0 0 1 0 7.75",
        key: "1da9ce"
    }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const lm = He("Video", [
        ["path", {
            d: "m22 8-6 4 6 4V8Z",
            key: "50v9me"
        }],
        ["rect", {
            width: "14",
            height: "12",
            x: "2",
            y: "6",
            rx: "2",
            ry: "2",
            key: "1rqjg6"
        }]
    ]),
    ma = [{
        title: "Self-Paced Learning",
        description: "Personalized online programs aligned to each employee’s needs",
        icon: s.jsx(em, {
            className: "h-8 w-8 text-gray-600"
        })
    }, {
        title: "Assessment",
        description: "From fresher hiring to advanced language skill assessments",
        icon: s.jsx(bp, {
            className: "h-8 w-8 text-gray-600"
        })
    }, {
        title: "On-site classroom training",
        description: "Expert trainers delivering customized content at your location",
        icon: s.jsx(Tl, {
            className: "h-8 w-8 text-gray-600"
        })
    }, {
        title: "Virtual Instructor Lead Trainin",
        description: "Expert coaches deliver high-impact programs through digital classrooms",
        icon: s.jsx(lm, {
            className: "h-8 w-8 text-gray-600"
        })
    }, {
        title: "Coach",
        description: "One-on-one on-demand learning through realistic coach call",
        icon: s.jsx(tm, {
            className: "h-8 w-8 text-gray-600"
        })
    }],
    im = () => s.jsx("section", {
        className: "py-10 bg-white",
        children: s.jsxs("div", {
            className: "container mx-auto px-4 lg:max-w-6xl",
            children: [s.jsx("h2", {
                className: "text-[30px] font-bold text-center text-[#1E2C53] mb-2",
                children: "How we train your employees?"
            }), s.jsx("p", {
                className: "text-center text-[#000000] font-normal text-lg mb-12",
                children: "Depending on your organizations need and size, we deliver customized programs"
            }), s.jsx("div", {
                className: "grid grid-cols-1 md:grid-cols-3 gap-6 mb-6",
                children: ma.slice(0, 3).map((e, t) => s.jsx("div", {
                    className: "bg-gray-50 p-8 rounded-lg border border-gray-200",
                    children: s.jsxs("div", {
                        className: "flex flex-col items-center text-center",
                        children: [s.jsx("div", {
                            className: "mb-4",
                            children: e.icon
                        }), s.jsx("h3", {
                            className: "text-lg font-semibold text-gray-900 mb-3",
                            children: e.title
                        }), s.jsx("p", {
                            className: "text-sm w-[65%] leading-relaxed text-black",
                            children: e.description
                        })]
                    })
                }, t))
            }), s.jsx("div", {
                className: "flex justify-center",
                children: s.jsx("div", {
                    className: "grid grid-cols-1 md:grid-cols-2 gap-6 w-full lg:max-w-2xl",
                    children: ma.slice(3, 5).map((e, t) => s.jsx("div", {
                        className: "bg-gray-50 p-8 rounded-lg border border-gray-200",
                        children: s.jsxs("div", {
                            className: "flex flex-col items-center text-center",
                            children: [s.jsx("div", {
                                className: "mb-4",
                                children: e.icon
                            }), s.jsx("h3", {
                                className: "text-lg font-semibold text-gray-900 mb-3",
                                children: e.title
                            }), s.jsx("p", {
                                className: "text-sm w-[65%] leading-relaxed text-black",
                                children: e.description
                            })]
                        })
                    }, t + 3))
                })
            })]
        })
    }),
    ii = [{
        title: "Email Writing",
        image: "https://images.pexels.com/photos/1851415/pexels-photo-1851415.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        features: ["Effective subject line", "Structured communication", "Follow up"]
    }, {
        title: "Workplace Conversation",
        image: "https://images.pexels.com/photos/7648047/pexels-photo-7648047.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        features: ["Using the right phrases", "Effective meetings", "Listening"]
    }, {
        title: "Negotiation",
        image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        features: ["Negotiating workload", "Negotiating deadlines with customer/boss", "Mutual compromise"]
    }, {
        title: "Presentation Skills",
        image: "https://images.pexels.com/photos/3184317/pexels-photo-3184317.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        features: ["Rehearsing and practicing", "Varying the tone", "Eliciting response"]
    }, {
        title: "Business Writing",
        image: "https://images.pexels.com/photos/416405/pexels-photo-416405.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        features: ["Professional reports", "Clear documentation", "Executive summaries"]
    }, {
        title: "Leadership Communication",
        image: "https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        features: ["Team motivation", "Conflict resolution", "Vision communication"]
    }],
    om = () => s.jsx("svg", {
        width: "20",
        height: "40",
        viewBox: "0 0 20 40",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: s.jsx("path", {
            d: "M15 5L5 20L15 35",
            stroke: "#1E2C53",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round"
        })
    }),
    sm = () => s.jsx("svg", {
        width: "20",
        height: "40",
        viewBox: "0 0 20 40",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: s.jsx("path", {
            d: "M5 5L15 20L5 35",
            stroke: "#1E2C53",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round"
        })
    }),
    am = () => {
        const [e, t] = T.useState(0), n = () => {
            if (typeof window < "u") {
                const c = window.innerWidth;
                return c >= 1024 ? 4 : c >= 768 ? 2 : 1
            }
            return 4
        }, [r, l] = T.useState(n);
        oi.useEffect(() => {
            const c = () => {
                l(n())
            };
            if (typeof window < "u") return window.addEventListener("resize", c), () => window.removeEventListener("resize", c)
        }, []), oi.useEffect(() => {
            const c = setInterval(() => {
                t(m => {
                    const h = Math.max(0, ii.length - r);
                    return m >= h ? 0 : m + 1
                })
            }, 3e3);
            return () => clearInterval(c)
        }, [r]);
        const i = Math.max(0, ii.length - r),
            o = () => {
                t(c => c === 0 ? i : c - 1)
            },
            a = () => {
                t(c => c >= i ? 0 : c + 1)
            },
            u = ii.slice(e, e + r);
        return s.jsx("section", {
            className: "py-10 bg-white",
            children: s.jsxs("div", {
                className: "container mx-auto px-4 lg:max-w-6xl",
                children: [s.jsxs("div", {
                    className: "text-center mb-8",
                    children: [s.jsx("h2", {
                        className: "text-[30px] font-bold text-[#1E2C53] mb-2",
                        children: "Customizable Content"
                    }), s.jsx("p", {
                        className: "text-[#000000] font-normal text-lg",
                        children: "We cover the below and more in our online and in class corporate training programs"
                    })]
                }), s.jsxs("div", {
                    className: "relative",
                    children: [s.jsx("div", {
                        className: "absolute left:0 lg:-left-5 top-1/2 transform -translate-y-1/2 -translate-x-4 z-10",
                        children: s.jsx("button", {
                            onClick: o,
                            className: "p-2 hover:opacity-80 cursor-pointer transition-opacity",
                            children: s.jsx(om, {})
                        })
                    }), s.jsx("div", {
                        className: "absolute -right-1 lg:-right-5 top-1/2 transform -translate-y-1/2 translate-x-4 z-10",
                        children: s.jsx("button", {
                            onClick: a,
                            className: "p-2 hover:opacity-80 cursor-pointer transition-opacity",
                            children: s.jsx(sm, {})
                        })
                    }), s.jsx("div", {
                        className: "bg-[#F5F5F5] p-1",
                        children: s.jsx("div", {
                            className: `grid gap-2 ${r===1?"grid-cols-1":r===2?"grid-cols-2":"grid-cols-4"}`,
                            children: u.map((c, m) => s.jsxs("div", {
                                className: "bg-white shadow-lg border border-gray-200 overflow-hidden h-[auto] transition-all duration-300 ease-in-out",
                                children: [s.jsx("div", {
                                    className: "h-auto bg-white overflow-hidden mx-auto flex items-center justify-center",
                                    children: s.jsx("img", {
                                        src: c.image,
                                        alt: c.title,
                                        className: "max-w-[280px] max-h-[159px] object-cover"
                                    })
                                }), s.jsxs("div", {
                                    className: "p-4",
                                    children: [s.jsx("h3", {
                                        className: "text-base font-semibold text-[#1E2C53] mb-2",
                                        children: c.title
                                    }), s.jsx("ul", {
                                        className: "space-y-1",
                                        children: c.features.map((h, g) => s.jsxs("li", {
                                            className: "text-sm text-[#000000] flex items-start",
                                            children: [s.jsx("span", {
                                                className: "text-orange-400 mr-2 mt-0.5",
                                                children: "→"
                                            }), h]
                                        }, g))
                                    })]
                                })]
                            }, e + m))
                        })
                    }), s.jsx("div", {
                        className: "flex justify-center mt-6 space-x-2",
                        children: Array.from({
                            length: i + 1
                        }, (c, m) => s.jsx("button", {
                            onClick: () => t(m),
                            className: `w-3 h-3 rounded-full transition-colors duration-200 ${m===e?"bg-[#1E2C53]":"bg-gray-300 hover:bg-gray-400"}`
                        }, m))
                    })]
                })]
            })
        })
    },
    um = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFgAAAA4CAYAAAB5YT9uAAAABHNCSVQICAgIfAhkiAAACZVJREFUeF7tXG1sW1cZPu+5bpN23ToxygY0jjs6tCZ2F4Qqxo82GduPteMjiZ2xAqINE/wBtg4QKuoAjzGGEIx2Hz8YmhrEx8YSJxEwAhKDdPvBYGwLje1UW7c6doY2WlC3pWuy5J7Dc67tzHb8dexr+1riSFd2c9/znuc8fs/H+573lFgVZcu2/naT827J5A7i1MGk9EDde/GsxbNEjL0iGUswRjOQeZYEeyIeDUWqaLLqqm2+/l1M0k5g+wCUvR/Pe/BcggdQ2Vt4XmZEMSlklBg9bQhx7NTM6GylDaMdvbKpY2DDOi5uBpqbUPlqvdqW9AwIf9QwxdFqgOu0u9nr384ZuxntfhI8XqpTV8mir0+hr4+cF/yh09HheZ36ZRO8devulsWWdYeI6Cto4AKdRgrLyp+4hPG9l6LDcXv0ZWvx+PxXCilvB7Gftkn/OSnlPS2L5+86eXJisRydZRHc1hm4iUj+AArbylGqKbMkiR1MTIfu0axXVNzt8x+E6d1tp84MXQkp6euJyMgjpfSXJNjt7b8XFvDlUoqqfS8ZjRmu5c/FpsbPVqNrc+fAOziXR7EefLwaPeXVlffFw6O3FJMtSLDHs79VbHh9BOTeUF5jtkiFObGB2HToRCXaklMCG0ZdbyX1K6sjH+PzFwVisaGFfPXzEqzINTe8MYGXPZU1WlWtWSb5nnhkOKqjxd050MFI/B512nXq2SGLRXDSmL9wdz6S8xKMaeF3dbbc3H6eWMNF94vHx/5dDgHv2973riXBj0H2ynLkayMjH8N08dFc3asIrtecW6qTUrKJRCS0p5Scet/W2T+B3c315cjWVmb1nJxFcGq38HBtQehol0FYxR3FasAgvo3RFtTRWktZ7C72Zu4uVghW+9y3Wte/oAyilgB0dRtSdJ2KjP0zX70tnX1XmcSndHXWWD6xduHNK9L75BWCMcy+g2H2zRo3Xon6UDwcCuSr6Pb6scth/kqU1rIOnJE7E5HRb6k2LIJT7u8r+GqTh2YvfCHY1XPR0N8ytW7u8H+Ic/aUvS3Zpu0c3OrLlFttEQxLuBUfh21Tb7ciYj+NT4e+kKkWntqD8NQ+b3dTNuo7gJF3xCK4zev/a4WBGxvxFFU1Hw/7NjIWFEmpIHd7p1/Dlw31AqDbjgoQJcKhD5MVcjQopqug/vL0sXh4BPtzNeIC2G/K39Yfg16Lhik95O4MfJaR/Jle1fpLI1bxo0R45GvJERf4ITH51fqj0GxR0j5q6/TfR8S+pFm1EeJPYE7rTlqwX3ltuxoBQqdNOEv3k9sXeByRp4/oVGyMLJ3BFLEpNUWcxhTxzsbg0GiV6M8Ea3gRVS7XqNYwUWzgsdDhXKd1vVrgmqG8pAhWYbaWZkArmblV4SRmnGwGvMC4qAhWW5+SgXcndAhAr1I4cL6W13V2AsYcDFIRrE5Tm6OIVCCds3BzAIblguAzAKuOrR1fTC6tQJQhCKkATVH+owg+Dqi+ZoAb38ZdCqd7Riw3A15gnFYEOzIilYfAF7APVokiah/8PD6uaAKSQ4Q4xCGscN9tArCPgmAkjlgE/xofNzodMxa320mlEpEk5Rk5uihvc3Y69IAC2d7p/yJyKe53NGCAkyS7U+HKAGLB+ilF9eyg2gMnwuPKKWJuX//lQG99d26hV+F5XpaOBx8B0KIJFA3tiGSPxyOh6zIxtHv7JxEAsmITDi33Ykq71SI4lRzn2M07giafwglz1mEsglR7MW38yqHkMuUUzYVDx1c8OJzO/gPb4g86EPCzsIS8uJy7h5e/xGn4ZxSXbxO8vfdaJow/OY1gwWT/XHh0LB+uzT7/3Vyyg07DjPSvben0r6wYBCziXwD7bscAlmwIc+9gMTzArNJIVcK3Mwqxb+D88PtpMNkEd/YfQHb3j52BlM0s8vU7Xj3+83NFCfb1/wI7Crvyf6vrOtFv4tMjn8hUkkWwp6vXI5aNU9W1YkvtBSHM7rno+N9LaWvz+XtJsjGcMGNT0cCoILGIEHzXXGT4vwUJVi9wHD4EqPvwVcWJW0t1sBbvsTu4AU6FypQsqzhgyzaLeff6fGm3q+LAsOKLYcUx9GwjXL2XIaAutdSrnAe5AR1yFTBPx0CX4OK5FMh6G8YJpNv6C6Xb5k9fTc3F6oYQSfE8I35tHRgOo71B5BJgu6hfsNipxBkk0MhnsDlSJzQ1T8KGK/yHtST3FUuzLXiSgSDQFF7iBIGQ3Yi88VpmMEr24NrFN28p92JJPvozRx4SsW9kgl+HGTkrG0j/ZytWo3Tmp6pdkGCPN9CDPehflBB+qUGXkM8hk1ElB9qXbCfZk/jl7oKX9kc7Oo/A1X4Ero5C11ku+DUmiUvRwUPo5U479Kd0hJDxeWehjM/cdoqexWUAtkhOTI8OWUl3Bu6cSbYXyipLXSIaQeLIUd25thySMhZpi+RYdHiq3effgy3GINIT8mZplqF3Hj/Sw8JkD+UmIZaqW/Kw052xN+aMromFRyaTSlV+WBjAWQ/I2oHB0FEgV+ENddMTMs9gonnSWGNOVHuTqFSn8pFsLYZYwM0lYzdW/J0gHO633IY/X7haH+EYTUYh8zQImoyHvdjRpPPiSrWe/b4kwUq8EODcppDEfdFia8smyYwL5LJYIMN1JndfqAevcukszC5zS6EfVV37YkJcwgy2jph5rmVh8TTWgtcrb7kCgnNJxnRxm5ou7AJRCz2WtS4bk8mFGnMyo763R18tWsyvsywLTlfNsAq1Oo6Tyxys9XCvhgpFslzm4ytxY6LDcGVvq0anbl0tgpXylGuqrHcjFroYl7xPLSS6DddTHumuQcypuCxjlSnuMvtgGLF6YNAmWIFSMQsMv/HU8MNfZJC7xBFHW3PS2xsHWHVREdd15eF6YK6I4JUpI9sy1L3/Ib7GvKNe1qFrgZYzsmQMYX5LR7xqTnRVBFvWrBwSkvtTAaJkn51ONDBLJoIZZ3pnEaYd4sayGoW2Th1VE5y2IivUaRrBHKIV2En1wLKP2Q1e14Jz5ZVx5BCtjCPGOGFhxP1jY1lhrur2v20EZxG9bBzAv/fjsfJ5V4oCrwgnmbISOitSFwldJnutUYtlhnH0rsKMRRHWPcmkSBItKSY4t/C7jKXZUkZjO8GZfFphRDJ74Mn1YN7DZw7hq03wCA441Y/TsJLGjLBpbzlpAekQQiHANSV41ZAE4aZhdpHknuQ7eTFc6K60nCA25DQHRk0jCBp5VjATbg4l//MnqxDjwWIOTF0JbphZNrDh/xNcY/L/BxCclh4NvaFOAAAAAElFTkSuQmCC",
    Le = [{
        id: 1,
        name: "Soumitra JaiswalSoumitra Jaiswal ",
        role: "Assistant Manager",
        company: "Hindustan Petroleum Corporation Limited",
        image: "",
        quote: "In senior roles, communication isn't just about speaking — it's about influencing, aligning, and leading with clarity. STEP learning adds real value to my growth as a future-ready leader — and aligns perfectly with my aspiration to transition into top-tier management roles."
    }, {
        id: 2,
        name: "Shivanand Mohan",
        role: "Global Head",
        company: "L&D, Talent Management, Organisational Development",
        image: "./assets/shivanand-mohan.jpeg",
        quote: "The beauty of STEP communication is that it packages the essential elements of business communication in short understandable formats. It also has a blend of listening, reading  and all elements of communication."
    // }, {
    //     id: 3,
    //     name: "Sarah Chen",
    //     role: "HR Director",
    //     company: "Nexus Group",
    //     image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    //     quote: "The customized training program developed by STEP has transformed our team's ability to communicate with international clients. Highly recommended!"
    }],
    cm = () => {
        const [e, t] = T.useState(0), [n, r] = T.useState(!1);
        T.useEffect(() => {
            const i = setInterval(() => {
                n || (r(!0), t(o => (o + 1) % Le.length), setTimeout(() => r(!1), 600))
            }, 5e3);
            return () => clearInterval(i)
        }, [n]);
        const l = i => {
            i !== e && !n && (r(!0), t(i), setTimeout(() => r(!1), 600))
        };
        return s.jsxs("section", {
            className: "py-10 bg-white",
            style: {
                backgroundColor: "#F5F5F5"
            },
            children: [s.jsx("style", {
                children: `
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeInDelayed {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fadeIn 0.6s ease-out forwards;
          animation-delay: 0.1s;
        }
        .animate-fade-in-delayed {
          animation: fadeInDelayed 0.6s ease-out forwards;
          animation-delay: 0.3s;
        }
        .testimonial-container {
          opacity: 0;
        }
      `
            }), s.jsxs("div", {
                className: "container mx-auto px-4 max-w-6xl",
                children: [s.jsxs("div", {
                    className: "text-center mb-8",
                    children: [s.jsx("h2", {
                        className: "text-[30px] font-bold text-[#1E2C53] mb-2",
                        children: "Testimonials from Global Leaders"
                    }), s.jsxs("p", {
                        className: "text-[#000000] font-normal text-lg",
                        children: ["Let’s hear from our enterprise clients across industries who have transformed their global communication with STEP."]
                    }), s.jsxs("p", {
                        className: "text-[#000000] font-normal text-lg",
                        children: ["We need testimonials from 4 to 5 clients from our different industries mentioned"]
                    })]
                }), s.jsx("div", {
                    className: "text-center mb-8",
                    children: s.jsx("img", {
                        src: um,
                        alt: "Quote symbol",
                        style: {
                            width: "88px",
                            height: "55px"
                        },
                        className: ""
                    })
                }), s.jsx("div", {
                    className: "relative overflow-hidden",
                    children: s.jsx("div", {
                        className: "flex transition-transform duration-500 ease-in-out",
                        style: {
                            transform: `translateX(-${e*100}%)`
                        },
                        children: Le.map((i, o) => s.jsx("div", {
                            className: "w-full flex-shrink-0",
                            children: s.jsxs("div", {
                                className: "grid grid-cols-1 md:grid-cols-2 gap-8 px-4",
                                children: [s.jsxs("div", {
                                    className: `flex items-start space-x-4 testimonial-container ${o===e?"animate-fade-in":""}`,
                                    children: [s.jsx("div", {
                                        className: "flex-shrink-0",
                                        children: s.jsx("div", {
                                            className: "w-16 h-16 rounded-full overflow-hidden",
                                            children: s.jsx("img", {
                                                src: i.image,
                                                alt: i.name,
                                                className: "w-full h-full object-cover"
                                            })
                                        })
                                    }), s.jsxs("div", {
                                        className: "flex-1",
                                        children: [s.jsx("h3", {
                                            className: "font-semibold text-gray-900 text-lg mb-1",
                                            children: i.name
                                        }), s.jsxs("p", {
                                            className: "text-sm italic text-gray-700 leading-relaxed",
                                            children: ['"', i.quote, '"']
                                        })]
                                    })]
                                }), s.jsxs("div", {
                                    className: `flex items-start space-x-4 testimonial-container ${o===e?"animate-fade-in-delayed":""}`,
                                    children: [s.jsx("div", {
                                        className: "flex-shrink-0",
                                        children: s.jsx("div", {
                                            className: "w-16 h-16 rounded-full overflow-hidden",
                                            children: s.jsx("img", {
                                                src: Le[(o + 1) % Le.length].image,
                                                alt: Le[(o + 1) % Le.length].name,
                                                className: "w-full h-full object-cover"
                                            })
                                        })
                                    }), s.jsxs("div", {
                                        className: "flex-1",
                                        children: [s.jsx("h3", {
                                            className: "font-semibold text-gray-900 text-lg mb-1",
                                            children: Le[(o + 1) % Le.length].name
                                        }), s.jsxs("p", {
                                            className: "text-sm italic text-gray-700 leading-relaxed",
                                            children: ['"', Le[(o + 1) % Le.length].quote, '"']
                                        })]
                                    })]
                                })]
                            })
                        }, i.id))
                    })
                }), s.jsx("div", {
                    className: "mb-8"
                }), s.jsx("div", {
                    className: "flex justify-center space-x-2",
                    children: Le.map((i, o) => s.jsx("button", {
                        onClick: () => l(o),
                        disabled: n,
                        className: `w-2 h-2 rounded-full transition-all duration-300 transform hover:scale-125 ${o===e?"bg-gray-800":"bg-gray-300"} ${n?"cursor-not-allowed":"cursor-pointer"}`,
                        "aria-label": `Go to testimonial ${o+1}`
                    }, o))
                })]
            })]
        })
    },
    dm = [{
        id: 1,
        title: "Enhancing Workplace Communication Aligning Skills with Business Objectives",
        type: "WEBINAR",
        date: "5th September 2024",
        time: "3pm IST",
        image: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        targetLink: "https://www.youtube.com/watch?v=nScFksfThRI&ab_channel=STEP-TheHinduGroup",
        speakers: ["Pundi Sriram", "Shivanand Mohan"]
    }, {
        id: 2,
        title: "The Role of Communication in Purposeful Leadership and Employee Engagement",
        type: "WEBINAR",
        date: "16th November 2024",
        time: "11 am IST",
        image: "https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        targetLink: "https://www.youtube.com/watch?v=v00WtuJlYJo&ab_channel=STEP-TheHinduGroup",
        speakers: ["Pundi Sriram", "Rohan Nabar"]
    // }, {
    //     id: 3,
    //     title: "Technical Communication Excellence",
    //     type: "WEBINAR",
    //     date: "March 15, 2024",
    //     time: "2:00 PM IST",
    //     image: "https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    //     speakers: ["Sarah Johnson", "Rajiv Mehta"]
    // }, {
    //     id: 4,
    //     title: "Technical Communication Excellence",
    //     type: "WEBINAR",
    //     date: "March 15, 2024",
    //     time: "2:00 PM IST",
    //     image: "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    //     speakers: ["Sarah Johnson", "Rajiv Mehta"]
    }],
    fm = () => s.jsx("section", {
        className: "py-10 bg-white",
        children: s.jsxs("div", {
            className: "container mx-auto px-4 lg:max-w-6xl",
            children: [s.jsxs("div", {
                className: "text-center mb-8",
                children: [s.jsx("h2", {
                    className: "text-[30px] font-bold text-[#1E2C53] mb-2",
                    children: "Events & Webinars"
                }), s.jsxs("p", {
                    className: "max-w-2xl mx-auto text-[#000000] font-normal text-lg",
                    children: ["Join our expert-led sessions to learn more about effective business", s.jsx("br", {}), "communication strategies."]
                })]
            }), s.jsx("div", {
                className: "flex flex-wrap justify-center gap-6",
                children: dm.map(e => s.jsxs("a", {
                    className: "bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 cursor-pointer hover:scale-105 duration-300 transform w-full sm:w-50 lg:w-25",
                    href: e.targetLink,
                    children: [s.jsxs("div", {
                        className: "relative h-40 bg-[#F2F2F2] overflow-hidden",
                        children: [s.jsx("img", {
                            src: e.image,
                            alt: e.title,
                            className: "w-full h-full object-cover"
                        }), s.jsx("div", {
                            className: "absolute top-3 left-3",
                            children: s.jsx("span", {
                                className: "bg-[#1E2C53] text-white text-xs font-medium px-2 py-1 rounded-xl",
                                children: e.type
                            })
                        })]
                    }), s.jsxs("div", {
                        className: "p-4",
                        children: [s.jsx("h3", {
                            className: "text-sm font-semibold text-gray-900 mb-3 leading-tight",
                            children: e.title
                        }), s.jsxs("div", {
                            className: "flex items-center mb-2",
                            children: [s.jsx(qp, {
                                className: "h-3 w-3 text-gray-500 mr-2"
                            }), s.jsx("span", {
                                className: "text-xs text-gray-600",
                                children: e.date
                            })]
                        }), s.jsxs("div", {
                            className: "flex items-center mb-2",
                            children: [s.jsx(Bc, {
                                className: "h-3 w-3 text-gray-500 mr-2"
                            }), s.jsx("span", {
                                className: "text-xs text-gray-600",
                                children: e.time
                            })]
                        }), s.jsxs("div", {
                            className: "flex items-center",
                            children: [s.jsx(Tl, {
                                className: "h-3 w-3 text-gray-500 mr-2"
                            }), s.jsx("span", {
                                className: "text-xs text-gray-600",
                                children: e.speakers.join(", ")
                            })]
                        })]
                    })]
                }, e.id))
            })]
        })
    }),
    pm = () => s.jsxs("div", {
        className: "px-2 md:px-0 bg-[#F2F2F2] lg:w-[80%] mx-auto mb-[0.4375rem]",
        children: [s.jsx("h2", {
            className: "text-[#1E2C53] font-semibold text-xl mb-6",
            children: "Get in touch"
        }), s.jsxs("div", {
            className: "grid grid-cols-1 md:grid-cols-2 gap-6",
            children: [s.jsxs("div", {
                className: "space-y-6",
                children: [s.jsxs("div", {
                    children: [s.jsx("label", {
                        htmlFor: "enquiringFor",
                        className: "block text-sm font-medium text-gray-700 sr-only",
                        children: "Enquiring for"
                    }), s.jsx("div", {
                        className: "relative",
                        children: s.jsxs("select", {
                            id: "enquiringFor",
                            name: "enquiringFor",
                            className: "mt-1 block w-full pl-3 pr-10 py-2 text-base border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md",
                            defaultValue: "Myself",
                            children: [s.jsx("option", {
                                children: "Myself"
                            }), s.jsx("option", {
                                children: "My team"
                            }), s.jsx("option", {
                                children: "My organization"
                            })]
                        })
                    })]
                }), s.jsxs("div", {
                    children: [s.jsx("label", {
                        htmlFor: "name",
                        className: "block text-sm font-medium text-gray-700 sr-only",
                        children: "Name"
                    }), s.jsx("input", {
                        type: "text",
                        name: "name",
                        id: "name",
                        className: "mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm",
                        placeholder: "Name"
                    })]
                }), s.jsxs("div", {
                    children: [s.jsx("label", {
                        htmlFor: "email",
                        className: "block text-sm font-medium text-gray-700 sr-only",
                        children: "Email Id"
                    }), s.jsx("input", {
                        type: "email",
                        name: "email",
                        id: "email",
                        className: "mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm",
                        placeholder: "Email Id"
                    })]
                })]
            }), s.jsxs("div", {
                className: "space-y-6",
                children: [s.jsxs("div", {
                    children: [s.jsx("label", {
                        htmlFor: "phone",
                        className: "block text-sm font-medium text-gray-700 sr-only",
                        children: "Phone"
                    }), s.jsx("input", {
                        type: "text",
                        name: "phone",
                        id: "phone",
                        className: "mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm",
                        placeholder: "Phone"
                    })]
                }), s.jsxs("div", {
                    children: [s.jsx("label", {
                        htmlFor: "message",
                        className: "block text-sm font-medium text-gray-700 sr-only",
                        children: "Message"
                    }), s.jsx("textarea", {
                        id: "message",
                        name: "message",
                        rows: 4,
                        className: "mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm",
                        placeholder: "Message"
                    })]
                })]
            })]
        }), s.jsx("div", {
            className: "mt-[6.313rem] text-center",
            children: s.jsx("button", {
                type: "submit",
                className: "inline-flex justify-center py-2 px-8 border border-transparent shadow-sm text-lg font-medium rounded-md text-white bg-orange-500 hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500",
                children: "SUBMIT"
            })
        })]
    }),
    
    mm = () => {
        const [e, t] = T.useState(31);
    const [n, r] = T.useState(null);
    const [l, i] = T.useState("scheduleDemo");

    // Load Calendly script only once
    T.useEffect(() => {
        const existingScript = document.querySelector("script[src='https://assets.calendly.com/assets/external/widget.js']");
        if (!existingScript) {
            const script = document.createElement("script");
            script.src = "https://assets.calendly.com/assets/external/widget.js";
            script.async = true;
            document.body.appendChild(script);
        }
    }, []);

    // Force Calendly widget to re-initialize when tab is "scheduleDemo"
    T.useEffect(() => {
        if (l === "scheduleDemo" && window.Calendly) {
            window.Calendly.initInlineWidgets(); // <-- this triggers the reload
        }
    }, [l]);

    const o = u => t(u);
    const a = u => r(u);
    
        return s.jsx("section", {
            className: "py-10 bg-white",
            children: s.jsxs("div", {
                className: "container lg:mx-auto max-w-6xl",
                children: [
                s.jsx("div", {
                    className: "flex justify-center",
                    children: s.jsxs("div", {
                        className: "flex overflow-hidden",
                        children: [
                            s.jsx("button", {
                                onClick: () => i("scheduleDemo"),
                                className: `px-6 py-3 font-medium text-xl ${l === "scheduleDemo" ? "bg-gray-800 text-white" : "bg-[#F2F2F2] text-[#1E2C53] hover:bg-gray-50"}`,
                                children: "Schedule A Demo"
                            }),
                            s.jsx("button", {
                                onClick: () => i("contactUs"),
                                className: `px-6 py-3 font-medium text-xl ${l === "contactUs" ? "bg-gray-800 text-white" : "bg-[#F2F2F2] text-[#1E2C53] hover:bg-gray-50"}`,
                                children: "Contact Us"
                            })
                        ]
                    })
                }),
                
                s.jsx("div", {
                    className: "bg-[#F2F2F2] py-8",
                    children: l === "scheduleDemo" ? s.jsxs(s.Fragment, {
                        children: [s.jsx("div", 
                            {
                            className: "flex justify-center",
                            children: s.jsx("div", {
                                className: "calendly-inline-widget",
                                "data-url": "https://calendly.com/corporate-steptest/30min",
                                style: { minWidth: "320px",width: "100%", height: "700px" }
                            })
                        })]
                    }) : s.jsx(pm, {})
                })]
            })
        })
    },
    hm = "assets/Mask%20Group%203281-zlcsAIrC.png",
    gm = () => {
        const [e, t] = T.useState(!1), n = () => {
            t(!e)
        };
        return s.jsx("section", {
            // className: "py-10 bg-[#F2F2F2]",
            // children: s.jsx("div", {
            //     className: "container mx-auto px-4 max-w-6xl",
            //     children: s.jsxs("div", {
            //         className: "flex flex-col lg:flex-row items-center gap-8",
            //         children: [s.jsx("div", {
            //             className: "lg:w-[55%]",
            //             children: s.jsxs("div", {
            //                 className: "relative rounded-2xl overflow-hidden shadow-lg",
            //                 children: [s.jsx("img", {
            //                     src: hm,
            //                     alt: "Woman with headphones in online learning session",
            //                     className: "w-full h-auto aspect-video object-cover"
            //                 }), s.jsx("div", {
            //                     className: "absolute bottom-6 left-6",
            //                     children: s.jsx("button", {
            //                         onClick: n,
            //                         className: "flex items-center justify-center w-16 h-16 bg-transparent rounded-full border-2 border-white hover:bg-white hover:bg-opacity-20 transition-all",
            //                         "aria-label": "Play video",
            //                         children: s.jsx("svg", {
            //                             width: "20",
            //                             height: "24",
            //                             viewBox: "0 0 20 24",
            //                             fill: "none",
            //                             xmlns: "http://www.w3.org/2000/svg",
            //                             className: "ml-1",
            //                             children: s.jsx("path", {
            //                                 d: "M0 0V24L20 12L0 0Z",
            //                                 fill: "white"
            //                             })
            //                         })
            //                     })
            //                 })]
            //             })
            //         }), s.jsxs("div", {
            //             className: "lg:w-[45%] space-y-6",
            //             children: [s.jsx("h2", {
            //                 className: "text-[30px] font-bold text-[#1E2C53] mb-6",
            //                 children: "Video Session"
            //             }), s.jsxs("div", {
            //                 className: "space-y-4",
            //                 children: [s.jsxs("div", {
            //                     className: "flex items-start space-x-3",
            //                     children: [s.jsx("div", {
            //                         className: "w-2 h-2 bg-gray-900 rounded-full mt-2 flex-shrink-0"
            //                     }), s.jsx("p", {
            //                         className: "text-[#000000] font-normal text-lg leading-relaxed",
            //                         children: "Improve your English skills and confidence. Live classes and interactive lessons online."
            //                     })]
            //                 }), s.jsxs("div", {
            //                     className: "flex items-start space-x-3",
            //                     children: [s.jsx("div", {
            //                         className: "w-2 h-2 bg-gray-900 rounded-full mt-2 flex-shrink-0"
            //                     }), s.jsx("p", {
            //                         className: "text-[#000000] font-normal text-lg leading-relaxed",
            //                         children: "You will develop your ability to understand a variety of accents and speakers, as well as a range of colloquial and idiomatic language in context."
            //                     })]
            //                 }), s.jsxs("div", {
            //                     className: "flex items-start space-x-3",
            //                     children: [s.jsx("div", {
            //                         className: "w-2 h-2 bg-gray-900 rounded-full mt-2 flex-shrink-0"
            //                     }), s.jsx("p", {
            //                         className: "text-[#000000] font-normal text-lg leading-relaxed",
            //                         children: "What role does technology play in your life? Watch the video to hear people discussing this question."
            //                     })]
            //                 })]
            //             })]
            //         })]
            //     })
            // })
        })
    },
    ha = [{
        id: 1,
        name: "IT Services and IT Consulting",
        image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
    }, {
        id: 2,
        name: "Pharmaceutical Research & Manufacturing",
        image: "https://images.pexels.com/photos/3985165/pexels-photo-3985165.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
    }, {
        id: 3,
        name: "Banking & Finance",
        image: "https://images.pexels.com/photos/3760067/pexels-photo-3760067.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
    }, {
        id: 4,
        name: "Education & Training",
        image: "https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
    }, {
        id: 5,
        name: "Production & Manufacturing",
        image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
    }],
    vm = () => s.jsx("section", {
        className: "px-2 md:px-0 py-10 bg-white",
        children: s.jsxs("div", {
            className: "container mx-auto max-w-6xl",
            children: [s.jsx("div", {
                className: "text-center mb-8",
                children: s.jsx("h2", {
                    className: "text-[30px] font-bold text-[#1E2C53] mb-2",
                    children: "Industries Served"
                })
            }), s.jsxs("div", {
                className: "space-y-4",
                children: [s.jsx("div", {
                    className: "flex justify-center",
                    children: s.jsx("div", {
                        className: "flex items-center justify-center flex-warp-content gap-4 lg:max-w-5xl w-full",
                        children: ha.slice(0, 2).map(e => s.jsxs("div", {
                            className: "flex items-center max-content-width bg-[#F5F5F5] rounded-full hover:bg-gray-100 transition-colors",
                            children: [s.jsx("div", {
                                className: "flex-shrink-0 mr-4",
                                children: s.jsx("div", {
                                    className: "w-[50px] h-[50px] rounded-full overflow-hidden",
                                    children: s.jsx("img", {
                                        src: e.image,
                                        alt: e.name,
                                        className: "w-full h-full object-cover"
                                    })
                                })
                            }), s.jsx("div", {
                                className: "flex-1 mr-6",
                                children: s.jsx("h3", {
                                    className: "text-[20px] font-bold text-[#1E2C53] text-left",
                                    children: e.name
                                })
                            })]
                        }, e.id))
                    })
                }), s.jsx("div", {
                    className: "flex justify-center",
                    children: s.jsx("div", {
                        className: "flex items-center justify-center flex-warp-content gap-4 lg:max-w-6xl w-full",
                        children: ha.slice(2, 5).map(e => s.jsxs("div", {
                            className: "flex items-center max-content-width bg-[#F5F5F5] rounded-full hover:bg-gray-100 transition-colors",
                            children: [s.jsx("div", {
                                className: "flex-shrink-0 mr-4",
                                children: s.jsx("div", {
                                    className: "w-[50px] h-[50px] rounded-full overflow-hidden",
                                    children: s.jsx("img", {
                                        src: e.image,
                                        alt: e.name,
                                        className: "w-full h-full object-cover"
                                    })
                                })
                            }), s.jsx("div", {
                                className: "flex-1 mr-6",
                                children: s.jsx("h3", {
                                    className: "text-[20px] font-bold text-[#1E2C53] text-left",
                                    children: e.name
                                })
                            })]
                        }, e.id))
                    })
                })]
            })]
        })
    }),
    ym = [{
        id: 1,
        title: "HR Leaders",
        description: "For HR executives managing large-scale workforce communications",
        icon: s.jsx(rm, {
            className: "h-8 w-8 text-blue-600"
        }),
        features: ["Centralized communication hub", "Talent evaluation", "Talent management", "Employee reach"]
    }, {
        id: 2,
        title: "Talent Development Leaders",
        description: "For L&D and OD leaders focused on building capabilities",
        icon: s.jsx(Tl, {
            className: "h-8 w-8 text-blue-600"
        }),
        features: ["Learning communications", "Program tracking", "Platform integration", "Development insights"]
    }, {
        id: 3,
        title: "Operations Leaders",
        description: "For operations executives improving communication efficiency",
        icon: s.jsx(nm, {
            className: "h-8 w-8 text-blue-600"
        }),
        features: ["Critical updates", "Cross-team alignment", "Escalations & Conflict management", "Standard messaging"]
    }],
    xm = () => s.jsx("section", {
        className: "py-10 bg-[#F5F5F5]",
        children: s.jsxs("div", {
            className: "container mx-auto px-4 max-w-6xl",
            children: [s.jsxs("div", {
                className: "text-center mb-4",
                children: [s.jsx("h2", {
                    className: "text-[30px] font-bold text-center text-[#1E2C53] mb-2",
                    children: "Who should consider infusing STEP"
                })
                // , s.jsx("div", {
                //     className: "inline-block bg-blue-100 px-4 py-2 rounded-full text-[20px] font-bold text-center text-[#1E2C53] mb-2",
                //     children: "500+ Employee Organisation"
                // })
              ]
            }), s.jsx("div", {
                className: "grid grid-cols-1 md:grid-cols-3 gap-6",
                children: ym.map(e => s.jsxs("div", {
                    className: "bg-white rounded-lg shadow-sm p-6 border border-gray-200",
                    children: [s.jsx("div", {
                        className: "flex justify-center mb-4",
                        children: e.icon
                    }), s.jsx("h3", {
                        className: "text-base font-semibold text-[#1E2C53] mb-2 text-center ",
                        children: e.title
                    }), s.jsx("p", {
                        className: "text-sm text-gray-600 text-center mb-6 leading-relaxed",
                        children: e.description
                    }), s.jsx("div", {
                        className: "space-y-2",
                        children: e.features.map((t, n) => s.jsxs("li", {
                            className: "text-sm text-[#000000] flex items-start",
                            children: [s.jsx("span", {
                                className: "text-orange-400 mr-2 mt-0.5",
                                children: "→"
                            }), t]
                        }, n))
                    })]
                }, e.id))
            })]
        })
    }),
    wm = () => s.jsxs("div", {
        className: "flex flex-col w-full",
        children: [s.jsx(Kp, {}), s.jsx(im, {}), s.jsx(gm, {}), s.jsx(am, {}), s.jsx(xm, {}), s.jsx(vm, {}), s.jsx(cm, {}), s.jsx(fm, {}), s.jsx(mm, {})]
    }),
    km = () => {
        const e = () => {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            })
        };
        return s.jsx("footer", {
            className: "bg-gray-100 py-8",
            children: s.jsxs("div", {
                className: "container mx-auto px-4 lg:max-w-6xl",
                children: [s.jsxs("div", {
                    className: "flex flex-col md:flex-row justify-between items-center",
                    children: [s.jsx("div", {
                        className: "mb-4 md:mb-0",
                        children: s.jsx(Ac, {})
                    }), s.jsxs("div", {
                        className: "flex items-center space-x-4",
                        children: [s.jsx("span", {
                            className: "text-sm text-gray-700",
                            children: "Step also available in Play Store"
                        }), s.jsx("a", {
                            href: "https://play.google.com/store/apps/details?id=com.mobstac.thehindu",
                            title: "Google Play",
                            className: "block",
                            children: s.jsx("img", {
                                src: "https://www.thehindu.com/theme/images/th-online/google-playstore-icon.svg",
                                alt: "Google Play",
                                className: "w-32 h-10"
                            })
                        })]
                    })]
                }), s.jsxs("div", {
                    className: "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 py-8",
                    children: [s.jsxs("div", {
                        className: "col-span-1",
                        children: [s.jsx("h5", {
                            className: "text-sm font-extrabold text-black mb-3 border-t-4 border-black pt-3",
                            children: "Courses for Individuals"
                        }), s.jsxs("div", {
                            className: "space-y-2",
                            children: [s.jsx(F, {
                                to: "#",
                                className: "block text-sm text-black hover:text-red-600 transition-colors py-1",
                                children: "General Communication - Online"
                            }), s.jsx(F, {
                                to: "#",
                                className: "block text-sm text-black hover:text-red-600 transition-colors py-1",
                                children: "General Communication - Crash Course"
                            }), s.jsx(F, {
                                to: "#",
                                className: "block text-sm text-black hover:text-red-600 transition-colors py-1",
                                children: "General Communication - Unlimited"
                            }), s.jsx(F, {
                                to: "#",
                                className: "block text-sm text-black hover:text-red-600 transition-colors py-1",
                                children: "Working Professionals - Crash Course"
                            }), s.jsx(F, {
                                to: "#",
                                className: "block text-sm text-black hover:text-red-600 transition-colors py-1",
                                children: "Working Professionals - Unlimited"
                            }), s.jsx(F, {
                                to: "#",
                                className: "block text-sm text-black hover:text-red-600 transition-colors py-1",
                                children: "Competitive Exams - Crash Course"
                            }), s.jsx(F, {
                                to: "#",
                                className: "block text-sm text-black hover:text-red-600 transition-colors py-1",
                                children: "Competitive Exams - Unlimited"
                            }), s.jsx(F, {
                                to: "#",
                                className: "block text-sm text-black hover:text-red-600 transition-colors py-1",
                                children: "IELTS - Crash Course"
                            })]
                        })]
                    }), s.jsxs("div", {
                        className: "col-span-1",
                        children: [s.jsx("h5", {
                            className: "text-sm font-extrabold text-black mb-3 border-t-4 border-black pt-3",
                            children: "Solutions"
                        }), s.jsxs("div", {
                            className: "space-y-2 mb-6",
                            children: [s.jsx(F, {
                                to: "#",
                                className: "block text-sm text-black hover:text-red-600 transition-colors py-1",
                                children: "For Corporate"
                            }), s.jsx(F, {
                                to: "#",
                                className: "block text-sm text-black hover:text-red-600 transition-colors py-1",
                                children: "For Institutions"
                            })]
                        }), s.jsx("h5", {
                            className: "text-sm font-extrabold text-black mb-3",
                            children: "Support"
                        }), s.jsxs("div", {
                            className: "space-y-2",
                            children: [s.jsx(F, {
                                to: "#",
                                className: "block text-sm text-black hover:text-red-600 transition-colors py-1",
                                children: "Help Center"
                            }), s.jsx(F, {
                                to: "#",
                                className: "block text-sm text-black hover:text-red-600 transition-colors py-1",
                                children: "Contact Us"
                            }), s.jsx(F, {
                                to: "#",
                                className: "block text-sm text-black hover:text-red-600 transition-colors py-1",
                                children: "Privacy"
                            }), s.jsx(F, {
                                to: "#",
                                className: "block text-sm text-black hover:text-red-600 transition-colors py-1",
                                children: "Terms and Conditions"
                            })]
                        })]
                    }), s.jsxs("div", {
                        className: "col-span-1",
                        children: [s.jsx("h5", {
                            className: "text-sm font-extrabold text-black mb-3 border-t-4 border-black pt-3",
                            children: "About STEP"
                        }), s.jsxs("div", {
                            className: "space-y-2",
                            children: [s.jsx(F, {
                                to: "#",
                                className: "block text-sm text-black hover:text-red-600 transition-colors py-1",
                                children: "Blog"
                            }), s.jsx(F, {
                                to: "#",
                                className: "block text-sm text-black hover:text-red-600 transition-colors py-1",
                                children: "Testimonials"
                            }), s.jsx(F, {
                                to: "#",
                                className: "block text-sm text-black hover:text-red-600 transition-colors py-1",
                                children: "Careers"
                            })]
                        })]
                    }), s.jsxs("div", {
                        className: "col-span-1",
                        children: [s.jsx("h5", {
                            className: "text-sm font-extrabold text-black mb-3 border-t-4 border-black pt-3",
                            children: "The Hindu"
                        }), s.jsxs("div", {
                            className: "space-y-2",
                            children: [s.jsx(F, {
                                to: "#",
                                className: "block text-sm text-black hover:text-red-600 transition-colors py-1",
                                children: "The Hindu"
                            }), s.jsx(F, {
                                to: "#",
                                className: "block text-sm text-black hover:text-red-600 transition-colors py-1",
                                children: "BL on Campus"
                            }), s.jsx(F, {
                                to: "#",
                                className: "block text-sm text-black hover:text-red-600 transition-colors py-1",
                                children: "Sportstar"
                            }), s.jsx(F, {
                                to: "#",
                                className: "block text-sm text-black hover:text-red-600 transition-colors py-1",
                                children: "Business Line"
                            }), s.jsx(F, {
                                to: "#",
                                className: "block text-sm text-black hover:text-red-600 transition-colors py-1",
                                children: "இந்து தமிழ் திசை"
                            }), s.jsx(F, {
                                to: "#",
                                className: "block text-sm text-black hover:text-red-600 transition-colors py-1",
                                children: "The Hindu Centre for Politics and Public Policy"
                            }), s.jsx(F, {
                                to: "#",
                                className: "block text-sm text-black hover:text-red-600 transition-colors py-1",
                                children: "Frontline"
                            }), s.jsx(F, {
                                to: "#",
                                className: "block text-sm text-black hover:text-red-600 transition-colors py-1",
                                children: "Young World Club"
                            }), s.jsx(F, {
                                to: "#",
                                className: "block text-sm text-black hover:text-red-600 transition-colors py-1",
                                children: "The Hindu E-Paper"
                            }), s.jsx(F, {
                                to: "#",
                                className: "block text-sm text-black hover:text-red-600 transition-colors py-1",
                                children: "BusinessLine E-Paper"
                            }), s.jsx(F, {
                                to: "#",
                                className: "block text-sm text-black hover:text-red-600 transition-colors py-1",
                                children: 'Crossword+ "Free Games"'
                            }), s.jsx(F, {
                                to: "#",
                                className: "block text-sm text-black hover:text-red-600 transition-colors py-1",
                                children: "Coupons"
                            })]
                        })]
                    }), s.jsxs("div", {
                        className: "col-span-1",
                        children: [s.jsx("h5", {
                            className: "text-sm font-extrabold text-black mb-3 border-t-4 border-black pt-3",
                            children: "Follow us"
                        }), s.jsxs("div", {
                            className: "space-y-2",
                            children: [s.jsx(F, {
                                to: "#",
                                className: "block text-sm text-black hover:text-red-600 transition-colors py-1",
                                children: "Blog"
                            }), s.jsx(F, {
                                to: "#",
                                className: "block text-sm text-black hover:text-red-600 transition-colors py-1",
                                children: "Facebook"
                            }), s.jsx(F, {
                                to: "#",
                                className: "block text-sm text-black hover:text-red-600 transition-colors py-1",
                                children: "Instagram"
                            }), s.jsx(F, {
                                to: "#",
                                className: "block text-sm text-black hover:text-red-600 transition-colors py-1",
                                children: "Twitter"
                            })]
                        })]
                    })]
                }), s.jsxs("div", {
                    className: "flex flex-col md:flex-row justify-between items-start md:items-center pt-4 relative",
                    children: [s.jsxs("div", {
                        className: "flex flex-col md:flex-row md:items-center mb-4 md:mb-0",
                        children: [s.jsxs("div", {
                            className: "flex items-center space-x-4 mb-2 md:mb-0 md:mr-6",
                            children: [s.jsxs(F, {
                                to: "/terms",
                                className: "text-xs text-black hover:text-red-600 hover:underline underline-offset-4 uppercase font-medium relative",
                                children: ["Terms of use", s.jsx("span", {
                                    className: "absolute -right-3 top-0 text-gray-500",
                                    children: "/"
                                })]
                            }), s.jsx(F, {
                                to: "/privacy",
                                className: "text-xs text-black hover:text-red-600 hover:underline underline-offset-4 uppercase font-medium",
                                children: "Privacy policy"
                            })]
                        }), s.jsxs("p", {
                            className: "text-xs text-black font-medium",
                            children: ["Copyright© ", new Date().getFullYear(), ", THG PUBLISHING PVT LTD. or its affiliated companies. All rights reserved."]
                        })]
                    }), s.jsxs("button", {
                        onClick: e,
                        className: "flex items-center text-xs font-bold text-black hover:text-red-600 transition-colors cursor-pointer absolute md:relative right-0 bottom-0 md:bottom-auto md:right-auto",
                        children: ["BACK TO TOP", s.jsx(Zp, {
                            className: "ml-2 w-3 h-3"
                        })]
                    })]
                })]
            })
        })
    };

function Nm() {
    return s.jsx(Vp, {
        children: s.jsxs("div", {
            className: "flex flex-col min-h-screen",
            children: [s.jsx(Gp, {}), s.jsx("main", {
                className: "flex-grow",
                children: s.jsx(wm, {})
            }), s.jsx(km, {})]
        })
    })
}
Tc(document.getElementById("root")).render(s.jsx(Nm, {}));
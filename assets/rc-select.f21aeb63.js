import { r as a } from "./react.aaec2051.js";
import "./react-is.64ecdad3.js";
import { c as ze } from "./classnames.4fb4381a.js";
import {
  w as rt,
  y as it,
  f as ut,
  z as cn,
  K as x,
  A as lt,
  B as ct,
  d as mn,
  g as st,
  c as dt,
  t as ft,
  a as vt,
  o as pt
} from "./rc-util.5fc3e0fc.js";
import { a as Z, l as mt, f as Ie, b as en, d as te, _ as bn, c as oe } from "./@babel.3781e41b.js";
import { T as gt } from "./rc-trigger.1ca4bf78.js";
import { j as E, b as Ke, F as wn } from "./@ant-design.023abccc.js";
import { F as ht } from "./rc-overflow.e2939c70.js";
import { L as bt } from "./rc-virtual-list.491606d2.js";

function Pn(n, e) {
  var o = n.key, t;
  return "value" in n && (t = n.value), o != null ? o : t !== void 0 ? t : "rc-index-key-".concat(e)
}

function Ln(n, e) {
  var o = n || {}, t = o.label, i = o.value, r = o.options;
  return { label: t || (e ? "children" : "label"), value: i || "value", options: r || "options" }
}

function wt(n) {
  var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, o = e.fieldNames, t = e.childrenAsData,
    i = [], r = Ln(o, !1), c = r.label, v = r.value, l = r.options;

  function h(g, u) {
    g.forEach(function (f) {
      var s = f[c];
      if (u || !(l in f)) {
        var y = f[v];
        i.push({ key: Pn(f, i.length), groupOption: u, data: f, label: s, value: y })
      } else {
        var P = s;
        P === void 0 && t && (P = f.label), i.push({ key: Pn(f, i.length), group: !0, data: f, label: P }), h(f[l], !0)
      }
    })
  }

  return h(n, !1), i
}

function gn(n) {
  var e = Z({}, n);
  return "props" in e || Object.defineProperty(e, "props", {
    get: function () {
      return rt(!1, "Return type is option instead of Option instance. Please read value directly instead of reading from `props`."), e
    }
  }), e
}

function St(n, e) {
  if (!e || !e.length) return null;
  var o = !1;

  function t(r, c) {
    var v = mt(c), l = v[0], h = v.slice(1);
    if (!l) return [r];
    var g = r.split(l);
    return o = o || g.length > 1, g.reduce(function (u, f) {
      return [].concat(Ie(u), Ie(t(f, h)))
    }, []).filter(function (u) {
      return u
    })
  }

  var i = t(n, e);
  return o ? i : null
}

var Ct = ["prefixCls", "disabled", "visible", "children", "popupElement", "containerWidth", "animation", "transitionName", "dropdownStyle", "dropdownClassName", "direction", "placement", "dropdownMatchSelectWidth", "dropdownRender", "dropdownAlign", "getPopupContainer", "empty", "getTriggerDOMNode", "onPopupVisibleChange", "onPopupMouseEnter"],
  xt = function (e) {
    var o = e === !0 ? 0 : 1;
    return {
      bottomLeft: { points: ["tl", "bl"], offset: [0, 4], overflow: { adjustX: o, adjustY: 1 } },
      bottomRight: { points: ["tr", "br"], offset: [0, 4], overflow: { adjustX: o, adjustY: 1 } },
      topLeft: { points: ["bl", "tl"], offset: [0, -4], overflow: { adjustX: o, adjustY: 1 } },
      topRight: { points: ["br", "tr"], offset: [0, -4], overflow: { adjustX: o, adjustY: 1 } }
    }
  }, yt = function (e, o) {
    var t = e.prefixCls;
    e.disabled;
    var i = e.visible, r = e.children, c = e.popupElement, v = e.containerWidth, l = e.animation, h = e.transitionName,
      g = e.dropdownStyle, u = e.dropdownClassName, f = e.direction, s = f === void 0 ? "ltr" : f, y = e.placement,
      P = e.dropdownMatchSelectWidth, z = e.dropdownRender, O = e.dropdownAlign, M = e.getPopupContainer, _ = e.empty,
      Q = e.getTriggerDOMNode, H = e.onPopupVisibleChange, le = e.onPopupMouseEnter, se = en(e, Ct),
      N = "".concat(t, "-dropdown"), k = c;
    z && (k = z(c));
    var X = a.exports.useMemo(function () {
      return xt(P)
    }, [P]), j = l ? "".concat(N, "-").concat(l) : h, Y = a.exports.useRef(null);
    a.exports.useImperativeHandle(o, function () {
      return {
        getPopupElement: function () {
          return Y.current
        }
      }
    });
    var T = Z({ minWidth: v }, g);
    return typeof P == "number" ? T.width = P : P && (T.width = v), E(gt, {
      ...se,
      showAction: H ? ["click"] : [],
      hideAction: H ? ["click"] : [],
      popupPlacement: y || (s === "rtl" ? "bottomRight" : "bottomLeft"),
      builtinPlacements: X,
      prefixCls: N,
      popupTransitionName: j,
      popup: E("div", { ref: Y, onMouseEnter: le, children: k }),
      popupAlign: O,
      popupVisible: i,
      getPopupContainer: M,
      popupClassName: ze(u, te({}, "".concat(N, "-empty"), _)),
      popupStyle: T,
      getTriggerDOMNode: Q,
      onPopupVisibleChange: H,
      children: r
    })
  }, _n = a.exports.forwardRef(yt);
_n.displayName = "SelectTrigger";
var sn = function (e) {
  var o = e.className, t = e.customizeIcon, i = e.customizeIconProps, r = e.onMouseDown, c = e.onClick, v = e.children,
    l;
  return typeof t == "function" ? l = t(i) : l = t, E("span", {
    className: o,
    onMouseDown: function (g) {
      g.preventDefault(), r && r(g)
    },
    style: { userSelect: "none", WebkitUserSelect: "none" },
    unselectable: "on",
    onClick: c,
    "aria-hidden": !0,
    children: l !== void 0 ? l : E("span", {
      className: ze(o.split(/\s+/).map(function (h) {
        return "".concat(h, "-icon")
      })), children: v
    })
  })
}, It = function (e, o) {
  var t, i, r = e.prefixCls, c = e.id, v = e.inputElement, l = e.disabled, h = e.tabIndex, g = e.autoFocus,
    u = e.autoComplete, f = e.editable, s = e.activeDescendantId, y = e.value, P = e.maxLength, z = e.onKeyDown,
    O = e.onMouseDown, M = e.onChange, _ = e.onPaste, Q = e.onCompositionStart, H = e.onCompositionEnd, le = e.open,
    se = e.attrs, N = v || E("input", {}), k = N, X = k.ref, j = k.props, Y = j.onKeyDown, T = j.onChange,
    ie = j.onMouseDown, F = j.onCompositionStart, w = j.onCompositionEnd, A = j.style;
  return it(!("maxLength" in N.props)), N = a.exports.cloneElement(N, Z(Z(Z({ type: "search" }, j), {}, {
    id: c,
    ref: ut(o, X),
    disabled: l,
    tabIndex: h,
    autoComplete: u || "off",
    autoFocus: g,
    className: ze("".concat(r, "-selection-search-input"), (t = N) === null || t === void 0 || (i = t.props) === null || i === void 0 ? void 0 : i.className),
    role: "combobox",
    "aria-expanded": le,
    "aria-haspopup": "listbox",
    "aria-owns": "".concat(c, "_list"),
    "aria-autocomplete": "list",
    "aria-controls": "".concat(c, "_list"),
    "aria-activedescendant": s
  }, se), {}, {
    value: f ? y : "",
    maxLength: P,
    readOnly: !f,
    unselectable: f ? null : "on",
    style: Z(Z({}, A), {}, { opacity: f ? null : 0 }),
    onKeyDown: function (K) {
      z(K), Y && Y(K)
    },
    onMouseDown: function (K) {
      O(K), ie && ie(K)
    },
    onChange: function (K) {
      M(K), T && T(K)
    },
    onCompositionStart: function (K) {
      Q(K), F && F(K)
    },
    onCompositionEnd: function (K) {
      H(K), w && w(K)
    },
    onPaste: _
  })), N
}, Sn = a.exports.forwardRef(It);
Sn.displayName = "Input";

function kn(n) {
  return Array.isArray(n) ? n : n !== void 0 ? [n] : []
}

var Dt = typeof window < "u" && window.document && window.document.documentElement, Rt = Dt;

function Ot(n) {
  return n != null
}

function Nn(n) {
  return ["string", "number"].includes(bn(n))
}

function Kn(n) {
  var e = void 0;
  return n && (Nn(n.title) ? e = n.title.toString() : Nn(n.label) && (e = n.label.toString())), e
}

function Mt(n, e) {
  Rt ? a.exports.useLayoutEffect(n, e) : a.exports.useEffect(n, e)
}

function Et(n) {
  var e;
  return (e = n.key) !== null && e !== void 0 ? e : n.value
}

var Tn = function (e) {
  e.preventDefault(), e.stopPropagation()
}, Pt = function (e) {
  var o = e.id, t = e.prefixCls, i = e.values, r = e.open, c = e.searchValue, v = e.inputRef, l = e.placeholder,
    h = e.disabled, g = e.mode, u = e.showSearch, f = e.autoFocus, s = e.autoComplete, y = e.activeDescendantId,
    P = e.tabIndex, z = e.removeIcon, O = e.maxTagCount, M = e.maxTagTextLength, _ = e.maxTagPlaceholder,
    Q = _ === void 0 ? function (B) {
      return "+ ".concat(B.length, " ...")
    } : _, H = e.tagRender, le = e.onToggleOpen, se = e.onRemove, N = e.onInputChange, k = e.onInputPaste,
    X = e.onInputKeyDown, j = e.onInputMouseDown, Y = e.onInputCompositionStart, T = e.onInputCompositionEnd,
    ie = a.exports.useRef(null), F = a.exports.useState(0), w = oe(F, 2), A = w[0], G = w[1],
    K = a.exports.useState(!1), ge = oe(K, 2), de = ge[0], Fe = ge[1], $ = "".concat(t, "-selection"),
    R = r || g === "tags" ? c : "", p = g === "tags" || u && (r || de);
  Mt(function () {
    G(ie.current.scrollWidth)
  }, [R]);

  function D(B, ae, ve, ce, he) {
    return Ke("span", {
      className: ze("".concat($, "-item"), te({}, "".concat($, "-item-disabled"), ve)),
      title: Kn(B),
      children: [E("span", {
        className: "".concat($, "-item-content"),
        children: ae
      }), ce && E(sn, {
        className: "".concat($, "-item-remove"),
        onMouseDown: Tn,
        onClick: he,
        customizeIcon: z,
        children: "\xD7"
      })]
    })
  }

  function W(B, ae, ve, ce, he) {
    var xe = function (be) {
      Tn(be), le(!r)
    };
    return E("span", { onMouseDown: xe, children: H({ label: ae, value: B, disabled: ve, closable: ce, onClose: he }) })
  }

  function V(B) {
    var ae = B.disabled, ve = B.label, ce = B.value, he = !h && !ae, xe = ve;
    if (typeof M == "number" && (typeof ve == "string" || typeof ve == "number")) {
      var pe = String(xe);
      pe.length > M && (xe = "".concat(pe.slice(0, M), "..."))
    }
    var be = function (we) {
      we && we.stopPropagation(), se(B)
    };
    return typeof H == "function" ? W(ce, xe, ae, he, be) : D(B, xe, ae, he, be)
  }

  function L(B) {
    var ae = typeof Q == "function" ? Q(B) : Q;
    return D({ title: ae }, ae, !1)
  }

  var ee = Ke("div", {
    className: "".concat($, "-search"),
    style: { width: A },
    onFocus: function () {
      Fe(!0)
    },
    onBlur: function () {
      Fe(!1)
    },
    children: [E(Sn, {
      ref: v,
      open: r,
      prefixCls: t,
      id: o,
      inputElement: null,
      disabled: h,
      autoFocus: f,
      autoComplete: s,
      editable: p,
      activeDescendantId: y,
      value: R,
      onKeyDown: X,
      onMouseDown: j,
      onChange: N,
      onPaste: k,
      onCompositionStart: Y,
      onCompositionEnd: T,
      tabIndex: P,
      attrs: cn(e, !0)
    }), Ke("span", { ref: ie, className: "".concat($, "-search-mirror"), "aria-hidden": !0, children: [R, "\xA0"] })]
  }), fe = E(ht, {
    prefixCls: "".concat($, "-overflow"),
    data: i,
    renderItem: V,
    renderRest: L,
    suffix: ee,
    itemKey: Et,
    maxCount: O
  });
  return Ke(wn, {
    children: [fe, !i.length && !R && E("span", {
      className: "".concat($, "-placeholder"),
      children: l
    })]
  })
}, Nt = function (e) {
  var o = e.inputElement, t = e.prefixCls, i = e.id, r = e.inputRef, c = e.disabled, v = e.autoFocus,
    l = e.autoComplete, h = e.activeDescendantId, g = e.mode, u = e.open, f = e.values, s = e.placeholder,
    y = e.tabIndex, P = e.showSearch, z = e.searchValue, O = e.activeValue, M = e.maxLength, _ = e.onInputKeyDown,
    Q = e.onInputMouseDown, H = e.onInputChange, le = e.onInputPaste, se = e.onInputCompositionStart,
    N = e.onInputCompositionEnd, k = a.exports.useState(!1), X = oe(k, 2), j = X[0], Y = X[1], T = g === "combobox",
    ie = T || P, F = f[0], w = z || "";
  T && O && !j && (w = O), a.exports.useEffect(function () {
    T && Y(!1)
  }, [T, O]);
  var A = g !== "combobox" && !u && !P ? !1 : !!w, G = Kn(F), K = function () {
    if (F) return null;
    var de = A ? { visibility: "hidden" } : void 0;
    return E("span", { className: "".concat(t, "-selection-placeholder"), style: de, children: s })
  };
  return Ke(wn, {
    children: [E("span", {
      className: "".concat(t, "-selection-search"),
      children: E(Sn, {
        ref: r,
        prefixCls: t,
        id: i,
        open: u,
        inputElement: o,
        disabled: c,
        autoFocus: v,
        autoComplete: l,
        editable: ie,
        activeDescendantId: h,
        value: w,
        onKeyDown: _,
        onMouseDown: Q,
        onChange: function (de) {
          Y(!0), H(de)
        },
        onPaste: le,
        onCompositionStart: se,
        onCompositionEnd: N,
        tabIndex: y,
        attrs: cn(e, !0),
        maxLength: T ? M : void 0
      })
    }), !T && F && !A && E("span", { className: "".concat(t, "-selection-item"), title: G, children: F.label }), K()]
  })
};

function $n() {
  var n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 250, e = a.exports.useRef(null),
    o = a.exports.useRef(null);
  a.exports.useEffect(function () {
    return function () {
      window.clearTimeout(o.current)
    }
  }, []);

  function t(i) {
    (i || e.current === null) && (e.current = i), window.clearTimeout(o.current), o.current = window.setTimeout(function () {
      e.current = null
    }, n)
  }

  return [function () {
    return e.current
  }, t]
}

function Tt(n) {
  return ![x.ESC, x.SHIFT, x.BACKSPACE, x.TAB, x.WIN_KEY, x.ALT, x.META, x.WIN_KEY_RIGHT, x.CTRL, x.SEMICOLON, x.EQUALS, x.CAPS_LOCK, x.CONTEXT_MENU, x.F1, x.F2, x.F3, x.F4, x.F5, x.F6, x.F7, x.F8, x.F9, x.F10, x.F11, x.F12].includes(n)
}

var Vt = function (e, o) {
  var t = a.exports.useRef(null), i = a.exports.useRef(!1), r = e.prefixCls, c = e.open, v = e.mode, l = e.showSearch,
    h = e.tokenWithEnter, g = e.onSearch, u = e.onSearchSubmit, f = e.onToggleOpen, s = e.onInputKeyDown, y = e.domRef;
  a.exports.useImperativeHandle(o, function () {
    return {
      focus: function () {
        t.current.focus()
      }, blur: function () {
        t.current.blur()
      }
    }
  });
  var P = $n(0), z = oe(P, 2), O = z[0], M = z[1], _ = function (w) {
    var A = w.which;
    (A === x.UP || A === x.DOWN) && w.preventDefault(), s && s(w), A === x.ENTER && v === "tags" && !i.current && !c && (u == null || u(w.target.value)), Tt(A) && f(!0)
  }, Q = function () {
    M(!0)
  }, H = a.exports.useRef(null), le = function (w) {
    g(w, !0, i.current) !== !1 && f(!0)
  }, se = function () {
    i.current = !0
  }, N = function (w) {
    i.current = !1, v !== "combobox" && le(w.target.value)
  }, k = function (w) {
    var A = w.target.value;
    if (h && H.current && /[\r\n]/.test(H.current)) {
      var G = H.current.replace(/[\r\n]+$/, "").replace(/\r\n/g, " ").replace(/[\r\n]/g, " ");
      A = A.replace(G, H.current)
    }
    H.current = null, le(A)
  }, X = function (w) {
    var A = w.clipboardData, G = A.getData("text");
    H.current = G
  }, j = function (w) {
    var A = w.target;
    if (A !== t.current) {
      var G = document.body.style.msTouchAction !== void 0;
      G ? setTimeout(function () {
        t.current.focus()
      }) : t.current.focus()
    }
  }, Y = function (w) {
    var A = O();
    w.target !== t.current && !A && v !== "combobox" && w.preventDefault(), (v !== "combobox" && (!l || !A) || !c) && (c && g("", !0, !1), f())
  }, T = {
    inputRef: t,
    onInputKeyDown: _,
    onInputMouseDown: Q,
    onInputChange: k,
    onInputPaste: X,
    onInputCompositionStart: se,
    onInputCompositionEnd: N
  }, ie = v === "multiple" || v === "tags" ? E(Pt, { ...e, ...T }) : E(Nt, { ...e, ...T });
  return E("div", { ref: y, className: "".concat(r, "-selector"), onClick: j, onMouseDown: Y, children: ie })
}, Wn = a.exports.forwardRef(Vt);
Wn.displayName = "Selector";

function At(n, e, o, t) {
  var i = a.exports.useRef(null);
  i.current = { open: e, triggerOpen: o, customizedTrigger: t }, a.exports.useEffect(function () {
    function r(c) {
      var v;
      if (!(!((v = i.current) === null || v === void 0) && v.customizedTrigger)) {
        var l = c.target;
        l.shadowRoot && c.composed && (l = c.composedPath()[0] || l), i.current.open && n().filter(function (h) {
          return h
        }).every(function (h) {
          return !h.contains(l) && h !== l
        }) && i.current.triggerOpen(!1)
      }
    }

    return window.addEventListener("mousedown", r), function () {
      return window.removeEventListener("mousedown", r)
    }
  }, [])
}

function Ft() {
  var n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 10, e = a.exports.useState(!1), o = oe(e, 2),
    t = o[0], i = o[1], r = a.exports.useRef(null), c = function () {
      window.clearTimeout(r.current)
    };
  a.exports.useEffect(function () {
    return c
  }, []);
  var v = function (h, g) {
    c(), r.current = window.setTimeout(function () {
      i(h), g && g()
    }, n)
  };
  return [t, v, c]
}

var Bn = a.exports.createContext(null);

function Lt() {
  return a.exports.useContext(Bn)
}

var _t = ["id", "prefixCls", "className", "showSearch", "tagRender", "direction", "omitDomProps", "displayValues", "onDisplayValuesChange", "emptyOptions", "notFoundContent", "onClear", "mode", "disabled", "loading", "getInputElement", "getRawInputElement", "open", "defaultOpen", "onDropdownVisibleChange", "activeValue", "onActiveValueChange", "activeDescendantId", "searchValue", "onSearch", "onSearchSplit", "tokenSeparators", "allowClear", "showArrow", "inputIcon", "clearIcon", "OptionList", "animation", "transitionName", "dropdownStyle", "dropdownClassName", "dropdownMatchSelectWidth", "dropdownRender", "dropdownAlign", "placement", "getPopupContainer", "showAction", "onFocus", "onBlur", "onKeyUp", "onKeyDown", "onMouseDown"],
  kt = ["value", "onChange", "removeIcon", "placeholder", "autoFocus", "maxTagCount", "maxTagTextLength", "maxTagPlaceholder", "choiceTransitionName", "onInputKeyDown", "onPopupScroll", "tabIndex"];

function hn(n) {
  return n === "tags" || n === "multiple"
}

var Kt = a.exports.forwardRef(function (n, e) {
  var o, t, i = n.id, r = n.prefixCls, c = n.className, v = n.showSearch, l = n.tagRender, h = n.direction,
    g = n.omitDomProps, u = n.displayValues, f = n.onDisplayValuesChange, s = n.emptyOptions, y = n.notFoundContent,
    P = y === void 0 ? "Not Found" : y, z = n.onClear, O = n.mode, M = n.disabled, _ = n.loading, Q = n.getInputElement,
    H = n.getRawInputElement, le = n.open, se = n.defaultOpen, N = n.onDropdownVisibleChange, k = n.activeValue,
    X = n.onActiveValueChange, j = n.activeDescendantId, Y = n.searchValue, T = n.onSearch, ie = n.onSearchSplit,
    F = n.tokenSeparators, w = n.allowClear, A = n.showArrow, G = n.inputIcon, K = n.clearIcon, ge = n.OptionList,
    de = n.animation, Fe = n.transitionName, $ = n.dropdownStyle, R = n.dropdownClassName,
    p = n.dropdownMatchSelectWidth, D = n.dropdownRender, W = n.dropdownAlign, V = n.placement, L = n.getPopupContainer,
    ee = n.showAction, fe = ee === void 0 ? [] : ee, B = n.onFocus, ae = n.onBlur, ve = n.onKeyUp, ce = n.onKeyDown,
    he = n.onMouseDown, xe = en(n, _t), pe = hn(O), be = (v !== void 0 ? v : pe) || O === "combobox", q = Z({}, xe);
  kt.forEach(function (C) {
    delete q[C]
  }), g == null || g.forEach(function (C) {
    delete q[C]
  });
  var we = a.exports.useState(!1), De = oe(we, 2), $e = De[0], Ee = De[1];
  a.exports.useEffect(function () {
    Ee(lt())
  }, []);
  var je = a.exports.useRef(null), ye = a.exports.useRef(null), Pe = a.exports.useRef(null),
    Le = a.exports.useRef(null), Ne = a.exports.useRef(null), Ge = Ft(), nn = oe(Ge, 3), Je = nn[0], tn = nn[1],
    Qe = nn[2];
  a.exports.useImperativeHandle(e, function () {
    var C, S;
    return {
      focus: (C = Le.current) === null || C === void 0 ? void 0 : C.focus,
      blur: (S = Le.current) === null || S === void 0 ? void 0 : S.blur,
      scrollTo: function (Se) {
        var ne;
        return (ne = Ne.current) === null || ne === void 0 ? void 0 : ne.scrollTo(Se)
      }
    }
  });
  var Re = a.exports.useMemo(function () {
      var C;
      if (O !== "combobox") return Y;
      var S = (C = u[0]) === null || C === void 0 ? void 0 : C.value;
      return typeof S == "string" || typeof S == "number" ? String(S) : ""
    }, [Y, O, u]), on = O === "combobox" && typeof Q == "function" && Q() || null, Te = typeof H == "function" && H(),
    dn = ct(ye, Te == null || (o = Te.props) === null || o === void 0 ? void 0 : o.ref),
    un = mn(void 0, { defaultValue: se, value: le }), an = oe(un, 2), Xe = an[0], qe = an[1], re = Xe, ln = !P && s;
  (M || ln && re && O === "combobox") && (re = !1);
  var We = ln ? !1 : re, Oe = a.exports.useCallback(function (C) {
    var S = C !== void 0 ? C : !re;
    re !== S && !M && (qe(S), N == null || N(S))
  }, [M, re, qe, N]), b = a.exports.useMemo(function () {
    return (F || []).some(function (C) {
      return [`
`, `\r
`].includes(C)
    })
  }, [F]), m = function (S, me, Se) {
    var ne = !0, Ce = S;
    X == null || X(null);
    var Me = Se ? null : St(S, F);
    return O !== "combobox" && Me && (Ce = "", ie == null || ie(Me), Oe(!1), ne = !1), T && Re !== Ce && T(Ce, { source: me ? "typing" : "effect" }), ne
  }, d = function (S) {
    !S || !S.trim() || T(S, { source: "submit" })
  };
  a.exports.useEffect(function () {
    !re && !pe && O !== "combobox" && m("", !1, !1)
  }, [re]), a.exports.useEffect(function () {
    Xe && M && qe(!1), M && tn(!1)
  }, [M]);
  var I = $n(), U = oe(I, 2), J = U[0], Be = U[1], Ve = function (S) {
    var me = J(), Se = S.which;
    if (Se === x.ENTER && (O !== "combobox" && S.preventDefault(), re || Oe(!0)), Be(!!Re), Se === x.BACKSPACE && !me && pe && !Re && u.length) {
      for (var ne = Ie(u), Ce = null, Me = ne.length - 1; Me >= 0; Me -= 1) {
        var rn = ne[Me];
        if (!rn.disabled) {
          ne.splice(Me, 1), Ce = rn;
          break
        }
      }
      Ce && f(ne, { type: "remove", values: [Ce] })
    }
    for (var He = arguments.length, Ze = new Array(He > 1 ? He - 1 : 0), Ue = 1; Ue < He; Ue++) Ze[Ue - 1] = arguments[Ue];
    if (re && Ne.current) {
      var En;
      (En = Ne.current).onKeyDown.apply(En, [S].concat(Ze))
    }
    ce == null || ce.apply(void 0, [S].concat(Ze))
  }, Ye = function (S) {
    for (var me = arguments.length, Se = new Array(me > 1 ? me - 1 : 0), ne = 1; ne < me; ne++) Se[ne - 1] = arguments[ne];
    if (re && Ne.current) {
      var Ce;
      (Ce = Ne.current).onKeyUp.apply(Ce, [S].concat(Se))
    }
    ve == null || ve.apply(void 0, [S].concat(Se))
  }, ue = function (S) {
    var me = u.filter(function (Se) {
      return Se !== S
    });
    f(me, { type: "remove", values: [S] })
  }, _e = a.exports.useRef(!1), fn = function () {
    tn(!0), M || (B && !_e.current && B.apply(void 0, arguments), fe.includes("focus") && Oe(!0)), _e.current = !0
  }, Cn = function () {
    tn(!1, function () {
      _e.current = !1, Oe(!1)
    }), !M && (Re && (O === "tags" ? T(Re, { source: "submit" }) : O === "multiple" && T("", { source: "blur" })), ae && ae.apply(void 0, arguments))
  }, Ae = [];
  a.exports.useEffect(function () {
    return function () {
      Ae.forEach(function (C) {
        return clearTimeout(C)
      }), Ae.splice(0, Ae.length)
    }
  }, []);
  var ke = function (S) {
      var me, Se = S.target, ne = (me = Pe.current) === null || me === void 0 ? void 0 : me.getPopupElement();
      if (ne && ne.contains(Se)) {
        var Ce = setTimeout(function () {
          var Ze = Ae.indexOf(Ce);
          if (Ze !== -1 && Ae.splice(Ze, 1), Qe(), !$e && !ne.contains(document.activeElement)) {
            var Ue;
            (Ue = Le.current) === null || Ue === void 0 || Ue.focus()
          }
        });
        Ae.push(Ce)
      }
      for (var Me = arguments.length, rn = new Array(Me > 1 ? Me - 1 : 0), He = 1; He < Me; He++) rn[He - 1] = arguments[He];
      he == null || he.apply(void 0, [S].concat(rn))
    }, Yn = a.exports.useState(null), xn = oe(Yn, 2), yn = xn[0], Jn = xn[1], Qn = a.exports.useState({}), qn = oe(Qn, 2),
    Zn = qn[1];

  function et() {
    Zn({})
  }

  st(function () {
    if (We) {
      var C, S = Math.ceil((C = je.current) === null || C === void 0 ? void 0 : C.offsetWidth);
      yn !== S && !Number.isNaN(S) && Jn(S)
    }
  }, [We]);
  var In;
  Te && (In = function (S) {
    Oe(S)
  }), At(function () {
    var C;
    return [je.current, (C = Pe.current) === null || C === void 0 ? void 0 : C.getPopupElement()]
  }, We, Oe, !!Te);
  var nt = a.exports.useMemo(function () {
    return Z(Z({}, n), {}, {
      notFoundContent: P,
      open: re,
      triggerOpen: We,
      id: i,
      showSearch: be,
      multiple: pe,
      toggleOpen: Oe
    })
  }, [n, P, We, re, i, be, pe, Oe]), Dn = A !== void 0 ? A : _ || !pe && O !== "combobox", Rn;
  Dn && (Rn = E(sn, {
    className: ze("".concat(r, "-arrow"), te({}, "".concat(r, "-arrow-loading"), _)),
    customizeIcon: G,
    customizeIconProps: { loading: _, searchValue: Re, open: re, focused: Je, showSearch: be }
  }));
  var On, tt = function () {
    z == null || z(), f([], { type: "clear", values: u }), m("", !1, !1)
  };
  !M && w && (u.length || Re) && !(O === "combobox" && Re === "") && (On = E(sn, {
    className: "".concat(r, "-clear"),
    onMouseDown: tt,
    customizeIcon: K,
    children: "\xD7"
  }));
  var ot = E(ge, { ref: Ne }),
    at = ze(r, c, (t = {}, te(t, "".concat(r, "-focused"), Je), te(t, "".concat(r, "-multiple"), pe), te(t, "".concat(r, "-single"), !pe), te(t, "".concat(r, "-allow-clear"), w), te(t, "".concat(r, "-show-arrow"), Dn), te(t, "".concat(r, "-disabled"), M), te(t, "".concat(r, "-loading"), _), te(t, "".concat(r, "-open"), re), te(t, "".concat(r, "-customize-input"), on), te(t, "".concat(r, "-show-search"), be), t)),
    Mn = E(_n, {
      ref: Pe,
      disabled: M,
      prefixCls: r,
      visible: We,
      popupElement: ot,
      containerWidth: yn,
      animation: de,
      transitionName: Fe,
      dropdownStyle: $,
      dropdownClassName: R,
      direction: h,
      dropdownMatchSelectWidth: p,
      dropdownRender: D,
      dropdownAlign: W,
      placement: V,
      getPopupContainer: L,
      empty: s,
      getTriggerDOMNode: function () {
        return ye.current
      },
      onPopupVisibleChange: In,
      onPopupMouseEnter: et,
      children: Te ? a.exports.cloneElement(Te, { ref: dn }) : E(Wn, {
        ...n,
        domRef: ye,
        prefixCls: r,
        inputElement: on,
        ref: Le,
        id: i,
        showSearch: be,
        mode: O,
        activeDescendantId: j,
        tagRender: l,
        values: u,
        open: re,
        onToggleOpen: Oe,
        activeValue: k,
        searchValue: Re,
        onSearch: m,
        onSearchSubmit: d,
        onRemove: ue,
        tokenWithEnter: b
      })
    }), vn;
  return Te ? vn = Mn : vn = Ke("div", {
    className: at, ...q,
    ref: je,
    onMouseDown: ke,
    onKeyDown: Ve,
    onKeyUp: Ye,
    onFocus: fn,
    onBlur: Cn,
    children: [Je && !re && E("span", {
      style: {
        width: 0,
        height: 0,
        position: "absolute",
        overflow: "hidden",
        opacity: 0
      }, "aria-live": "polite", children: "".concat(u.map(function (C) {
        var S = C.label, me = C.value;
        return ["number", "string"].includes(bn(S)) ? S : me
      }).join(", "))
    }), Mn, Rn, On]
  }), E(Bn.Provider, { value: nt, children: vn })
});
const $t = function (n, e) {
  var o = a.exports.useRef({ values: new Map, options: new Map }), t = a.exports.useMemo(function () {
    var r = o.current, c = r.values, v = r.options, l = n.map(function (u) {
      if (u.label === void 0) {
        var f;
        return Z(Z({}, u), {}, { label: (f = c.get(u.value)) === null || f === void 0 ? void 0 : f.label })
      }
      return u
    }), h = new Map, g = new Map;
    return l.forEach(function (u) {
      h.set(u.value, u), g.set(u.value, e.get(u.value) || v.get(u.value))
    }), o.current.values = h, o.current.options = g, l
  }, [n, e]), i = a.exports.useCallback(function (r) {
    return e.get(r) || o.current.options.get(r)
  }, [e]);
  return [t, i]
};

function pn(n, e) {
  return kn(n).join("").toUpperCase().includes(e)
}

const Wt = function (n, e, o, t, i) {
  return a.exports.useMemo(function () {
    if (!o || t === !1) return n;
    var r = e.options, c = e.label, v = e.value, l = [], h = typeof t == "function", g = o.toUpperCase(),
      u = h ? t : function (s, y) {
        return i ? pn(y[i], g) : y[r] ? pn(y[c !== "children" ? c : "label"], g) : pn(y[v], g)
      }, f = h ? function (s) {
        return gn(s)
      } : function (s) {
        return s
      };
    return n.forEach(function (s) {
      if (s[r]) {
        var y = u(o, f(s));
        if (y) l.push(s); else {
          var P = s[r].filter(function (z) {
            return u(o, f(z))
          });
          P.length && l.push(Z(Z({}, s), {}, te({}, r, P)))
        }
        return
      }
      u(o, f(s)) && l.push(s)
    }), l
  }, [n, t, i, o, e])
};
var Vn = 0, Bt = dt();

function Ht() {
  var n;
  return Bt ? (n = Vn, Vn += 1) : n = "TEST_OR_SSR", n
}

function Ut(n) {
  var e = a.exports.useState(), o = oe(e, 2), t = o[0], i = o[1];
  return a.exports.useEffect(function () {
    i("rc_select_".concat(Ht()))
  }, []), n || t
}

var zt = ["children", "value"], jt = ["children"];

function Gt(n) {
  var e = n.key, o = n.props, t = o.children, i = o.value, r = en(o, zt);
  return Z({ key: e, value: i !== void 0 ? i : e, children: t }, r)
}

function Hn(n) {
  var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
  return ft(n).map(function (o, t) {
    if (!a.exports.isValidElement(o) || !o.type) return null;
    var i = o.type.isSelectOptGroup, r = o.key, c = o.props, v = c.children, l = en(c, jt);
    return e || !i ? Gt(o) : Z(Z({
      key: "__RC_SELECT_GRP__".concat(r === null ? t : r, "__"),
      label: r
    }, l), {}, { options: Hn(v) })
  }).filter(function (o) {
    return o
  })
}

function Xt(n, e, o, t, i) {
  return a.exports.useMemo(function () {
    var r = n, c = !n;
    c && (r = Hn(e));
    var v = new Map, l = new Map, h = function (f, s, y) {
      y && typeof y == "string" && f.set(s[y], s)
    };

    function g(u) {
      for (var f = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, s = 0; s < u.length; s += 1) {
        var y = u[s];
        !y[o.options] || f ? (v.set(y[o.value], y), h(l, y, o.label), h(l, y, t), h(l, y, i)) : g(y[o.options], !0)
      }
    }

    return g(r), { options: r, valueOptions: v, labelOptions: l }
  }, [n, e, o, t, i])
}

function An(n) {
  var e = a.exports.useRef();
  e.current = n;
  var o = a.exports.useCallback(function () {
    return e.current.apply(e, arguments)
  }, []);
  return o
}

var Un = function () {
  return null
};
Un.isSelectOptGroup = !0;
var zn = function () {
  return null
};
zn.isSelectOption = !0;

function Yt() {
  return /(mac\sos|macintosh)/i.test(navigator.appVersion)
}

var jn = a.exports.createContext(null), Jt = ["disabled", "title", "children", "style", "className"];

function Fn(n) {
  return typeof n == "string" || typeof n == "number"
}

var Qt = function (e, o) {
  var t = Lt(), i = t.prefixCls, r = t.id, c = t.open, v = t.multiple, l = t.mode, h = t.searchValue, g = t.toggleOpen,
    u = t.notFoundContent, f = t.onPopupScroll, s = a.exports.useContext(jn), y = s.flattenOptions, P = s.onActiveValue,
    z = s.defaultActiveFirstOption, O = s.onSelect, M = s.menuItemSelectedIcon, _ = s.rawValues, Q = s.fieldNames,
    H = s.virtual, le = s.listHeight, se = s.listItemHeight, N = "".concat(i, "-item"), k = vt(function () {
      return y
    }, [c, y], function (R, p) {
      return p[0] && R[1] !== p[1]
    }), X = a.exports.useRef(null), j = function (p) {
      p.preventDefault()
    }, Y = function (p) {
      X.current && X.current.scrollTo(typeof p == "number" ? { index: p } : p)
    }, T = function (p) {
      for (var D = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1, W = k.length, V = 0; V < W; V += 1) {
        var L = (p + V * D + W) % W, ee = k[L], fe = ee.group, B = ee.data;
        if (!fe && !B.disabled) return L
      }
      return -1
    }, ie = a.exports.useState(function () {
      return T(0)
    }), F = oe(ie, 2), w = F[0], A = F[1], G = function (p) {
      var D = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
      A(p);
      var W = { source: D ? "keyboard" : "mouse" }, V = k[p];
      if (!V) {
        P(null, -1, W);
        return
      }
      P(V.value, p, W)
    };
  a.exports.useEffect(function () {
    G(z !== !1 ? T(0) : -1)
  }, [k.length, h]);
  var K = a.exports.useCallback(function (R) {
    return _.has(R) && l !== "combobox"
  }, [l, Ie(_).toString()]);
  a.exports.useEffect(function () {
    var R = setTimeout(function () {
      if (!v && c && _.size === 1) {
        var D = Array.from(_)[0], W = k.findIndex(function (V) {
          var L = V.data;
          return L.value === D
        });
        W !== -1 && (G(W), Y(W))
      }
    });
    if (c) {
      var p;
      (p = X.current) === null || p === void 0 || p.scrollTo(void 0)
    }
    return function () {
      return clearTimeout(R)
    }
  }, [c, h]);
  var ge = function (p) {
    p !== void 0 && O(p, { selected: !_.has(p) }), v || g(!1)
  };
  if (a.exports.useImperativeHandle(o, function () {
    return {
      onKeyDown: function (p) {
        var D = p.which, W = p.ctrlKey;
        switch (D) {
          case x.N:
          case x.P:
          case x.UP:
          case x.DOWN: {
            var V = 0;
            if (D === x.UP ? V = -1 : D === x.DOWN ? V = 1 : Yt() && W && (D === x.N ? V = 1 : D === x.P && (V = -1)), V !== 0) {
              var L = T(w + V, V);
              Y(L), G(L, !0)
            }
            break
          }
          case x.ENTER: {
            var ee = k[w];
            ee && !ee.data.disabled ? ge(ee.value) : ge(void 0), c && p.preventDefault();
            break
          }
          case x.ESC:
            g(!1), c && p.stopPropagation()
        }
      }, onKeyUp: function () {
      }, scrollTo: function (p) {
        Y(p)
      }
    }
  }), k.length === 0) return E("div", {
    role: "listbox",
    id: "".concat(r, "_list"),
    className: "".concat(N, "-empty"),
    onMouseDown: j,
    children: u
  });
  var de = Object.keys(Q).map(function (R) {
    return Q[R]
  }), Fe = function (p) {
    return p.label
  }, $ = function (p) {
    var D = k[p];
    if (!D) return null;
    var W = D.data || {}, V = W.value, L = D.group, ee = cn(W, !0), fe = Fe(D);
    return D ? a.exports.createElement("div", {
      "aria-label": typeof fe == "string" && !L ? fe : null, ...ee,
      key: p,
      role: L ? "presentation" : "option",
      id: "".concat(r, "_list_").concat(p),
      "aria-selected": K(V)
    }, V) : null
  };
  return Ke(wn, {
    children: [Ke("div", {
      role: "listbox",
      id: "".concat(r, "_list"),
      style: { height: 0, width: 0, overflow: "hidden" },
      children: [$(w - 1), $(w), $(w + 1)]
    }), E(bt, {
      itemKey: "key",
      ref: X,
      data: k,
      height: le,
      itemHeight: se,
      fullHeight: !1,
      onMouseDown: j,
      onScroll: f,
      virtual: H,
      children: function (R, p) {
        var D, W = R.group, V = R.groupOption, L = R.data, ee = R.label, fe = R.value, B = L.key;
        if (W) {
          var ae, ve = (ae = L.title) !== null && ae !== void 0 ? ae : Fn(ee) ? ee.toString() : void 0;
          return E("div", { className: ze(N, "".concat(N, "-group")), title: ve, children: ee !== void 0 ? ee : B })
        }
        var ce = L.disabled, he = L.title;
        L.children;
        var xe = L.style, pe = L.className, be = en(L, Jt), q = pt(be, de), we = K(fe), De = "".concat(N, "-option"),
          $e = ze(N, De, pe, (D = {}, te(D, "".concat(De, "-grouped"), V), te(D, "".concat(De, "-active"), w === p && !ce), te(D, "".concat(De, "-disabled"), ce), te(D, "".concat(De, "-selected"), we), D)),
          Ee = Fe(R), je = !M || typeof M == "function" || we, ye = typeof Ee == "number" ? Ee : Ee || fe,
          Pe = Fn(ye) ? ye.toString() : void 0;
        return he !== void 0 && (Pe = he), Ke("div", {
          ...cn(q),
          "aria-selected": we,
          className: $e,
          title: Pe,
          onMouseMove: function () {
            w === p || ce || G(p)
          },
          onClick: function () {
            ce || ge(fe)
          },
          style: xe,
          children: [E("div", {
            className: "".concat(De, "-content"),
            children: ye
          }), a.exports.isValidElement(M) || we, je && E(sn, {
            className: "".concat(N, "-option-state"),
            customizeIcon: M,
            customizeIconProps: { isSelected: we },
            children: we ? "\u2713" : null
          })]
        })
      }
    })]
  })
}, Gn = a.exports.forwardRef(Qt);
Gn.displayName = "OptionList";
var qt = ["id", "mode", "prefixCls", "backfill", "fieldNames", "inputValue", "searchValue", "onSearch", "autoClearSearchValue", "onSelect", "onDeselect", "dropdownMatchSelectWidth", "filterOption", "filterSort", "optionFilterProp", "optionLabelProp", "options", "children", "defaultActiveFirstOption", "menuItemSelectedIcon", "virtual", "listHeight", "listItemHeight", "value", "defaultValue", "labelInValue", "onChange"],
  Zt = ["inputValue"];

function eo(n) {
  return !n || bn(n) !== "object"
}

var no = a.exports.forwardRef(function (n, e) {
  var o = n.id, t = n.mode, i = n.prefixCls, r = i === void 0 ? "rc-select" : i, c = n.backfill, v = n.fieldNames,
    l = n.inputValue, h = n.searchValue, g = n.onSearch, u = n.autoClearSearchValue, f = u === void 0 ? !0 : u,
    s = n.onSelect, y = n.onDeselect, P = n.dropdownMatchSelectWidth, z = P === void 0 ? !0 : P, O = n.filterOption,
    M = n.filterSort, _ = n.optionFilterProp, Q = n.optionLabelProp, H = n.options, le = n.children,
    se = n.defaultActiveFirstOption, N = n.menuItemSelectedIcon, k = n.virtual, X = n.listHeight,
    j = X === void 0 ? 200 : X, Y = n.listItemHeight, T = Y === void 0 ? 20 : Y, ie = n.value, F = n.defaultValue,
    w = n.labelInValue, A = n.onChange, G = en(n, qt), K = Ut(o), ge = hn(t), de = !!(!H && le),
    Fe = a.exports.useMemo(function () {
      return O === void 0 && t === "combobox" ? !1 : O
    }, [O, t]), $ = a.exports.useMemo(function () {
      return Ln(v, de)
    }, [JSON.stringify(v), de]), R = mn("", {
      value: h !== void 0 ? h : l, postState: function (m) {
        return m || ""
      }
    }), p = oe(R, 2), D = p[0], W = p[1], V = Xt(H, le, $, _, Q), L = V.valueOptions, ee = V.labelOptions, fe = V.options,
    B = a.exports.useCallback(function (b) {
      var m = kn(b);
      return m.map(function (d) {
        var I, U, J, Be, Ve;
        if (eo(d)) I = d; else {
          var Ye;
          J = d.key, U = d.label, I = (Ye = d.value) !== null && Ye !== void 0 ? Ye : J
        }
        var ue = L.get(I);
        if (ue) {
          var _e;
          U === void 0 && (U = ue == null ? void 0 : ue[Q || $.label]), J === void 0 && (J = (_e = ue == null ? void 0 : ue.key) !== null && _e !== void 0 ? _e : I), Be = ue == null ? void 0 : ue.disabled, Ve = ue == null ? void 0 : ue.title
        }
        return { label: U, value: I, key: J, disabled: Be, title: Ve }
      })
    }, [$, Q, L]), ae = mn(F, { value: ie }), ve = oe(ae, 2), ce = ve[0], he = ve[1],
    xe = a.exports.useMemo(function () {
      var b, m = B(ce);
      return t === "combobox" && !(!((b = m[0]) === null || b === void 0) && b.value) ? [] : m
    }, [ce, B, t]), pe = $t(xe, L), be = oe(pe, 2), q = be[0], we = be[1], De = a.exports.useMemo(function () {
      if (!t && q.length === 1) {
        var b = q[0];
        if (b.value === null && (b.label === null || b.label === void 0)) return []
      }
      return q.map(function (m) {
        var d;
        return Z(Z({}, m), {}, { label: (d = m.label) !== null && d !== void 0 ? d : m.value })
      })
    }, [t, q]), $e = a.exports.useMemo(function () {
      return new Set(q.map(function (b) {
        return b.value
      }))
    }, [q]);
  a.exports.useEffect(function () {
    if (t === "combobox") {
      var b, m = (b = q[0]) === null || b === void 0 ? void 0 : b.value;
      W(Ot(m) ? String(m) : "")
    }
  }, [q]);
  var Ee = An(function (b, m) {
      var d, I = m != null ? m : b;
      return d = {}, te(d, $.value, b), te(d, $.label, I), d
    }), je = a.exports.useMemo(function () {
      if (t !== "tags") return fe;
      var b = Ie(fe), m = function (I) {
        return L.has(I)
      };
      return Ie(q).sort(function (d, I) {
        return d.value < I.value ? -1 : 1
      }).forEach(function (d) {
        var I = d.value;
        m(I) || b.push(Ee(I, d.label))
      }), b
    }, [Ee, fe, L, q, t]), ye = Wt(je, $, D, Fe, _), Pe = a.exports.useMemo(function () {
      return t !== "tags" || !D || ye.some(function (b) {
        return b[_ || "value"] === D
      }) ? ye : [Ee(D)].concat(Ie(ye))
    }, [Ee, _, t, ye, D]), Le = a.exports.useMemo(function () {
      return M ? Ie(Pe).sort(function (b, m) {
        return M(b, m)
      }) : Pe
    }, [Pe, M]), Ne = a.exports.useMemo(function () {
      return wt(Le, { fieldNames: $, childrenAsData: de })
    }, [Le, $, de]), Ge = function (m) {
      var d = B(m);
      if (he(d), A && (d.length !== q.length || d.some(function (J, Be) {
        var Ve;
        return ((Ve = q[Be]) === null || Ve === void 0 ? void 0 : Ve.value) !== (J == null ? void 0 : J.value)
      }))) {
        var I = w ? d : d.map(function (J) {
          return J.value
        }), U = d.map(function (J) {
          return gn(we(J.value))
        });
        A(ge ? I : I[0], ge ? U : U[0])
      }
    }, nn = a.exports.useState(null), Je = oe(nn, 2), tn = Je[0], Qe = Je[1], Re = a.exports.useState(0), on = oe(Re, 2),
    Te = on[0], dn = on[1], un = se !== void 0 ? se : t !== "combobox", an = a.exports.useCallback(function (b, m) {
      var d = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, I = d.source,
        U = I === void 0 ? "keyboard" : I;
      dn(m), c && t === "combobox" && b !== null && U === "keyboard" && Qe(String(b))
    }, [c, t]), Xe = function (m, d) {
      var I = function () {
        var Ae, ke = we(m);
        return [w ? {
          label: ke == null ? void 0 : ke[$.label],
          value: m,
          key: (Ae = ke == null ? void 0 : ke.key) !== null && Ae !== void 0 ? Ae : m
        } : m, gn(ke)]
      };
      if (d && s) {
        var U = I(), J = oe(U, 2), Be = J[0], Ve = J[1];
        s(Be, Ve)
      } else if (!d && y) {
        var Ye = I(), ue = oe(Ye, 2), _e = ue[0], fn = ue[1];
        y(_e, fn)
      }
    }, qe = An(function (b, m) {
      var d, I = ge ? m.selected : !0;
      I ? d = ge ? [].concat(Ie(q), [b]) : [b] : d = q.filter(function (U) {
        return U.value !== b
      }), Ge(d), Xe(b, I), t === "combobox" ? Qe("") : (!hn || f) && (W(""), Qe(""))
    }), re = function (m, d) {
      Ge(m), (d.type === "remove" || d.type === "clear") && d.values.forEach(function (I) {
        Xe(I.value, !1)
      })
    }, ln = function (m, d) {
      if (W(m), Qe(null), d.source === "submit") {
        var I = (m || "").trim();
        if (I) {
          var U = Array.from(new Set([].concat(Ie($e), [I])));
          Ge(U), Xe(I, !0), W("")
        }
        return
      }
      d.source !== "blur" && (t === "combobox" && Ge(m), g == null || g(m))
    }, We = function (m) {
      var d = m;
      t !== "tags" && (d = m.map(function (U) {
        var J = ee.get(U);
        return J == null ? void 0 : J.value
      }).filter(function (U) {
        return U !== void 0
      }));
      var I = Array.from(new Set([].concat(Ie($e), Ie(d))));
      Ge(I), I.forEach(function (U) {
        Xe(U, !0)
      })
    }, Oe = a.exports.useMemo(function () {
      var b = k !== !1 && z !== !1;
      return Z(Z({}, V), {}, {
        flattenOptions: Ne,
        onActiveValue: an,
        defaultActiveFirstOption: un,
        onSelect: qe,
        menuItemSelectedIcon: N,
        rawValues: $e,
        fieldNames: $,
        virtual: b,
        listHeight: j,
        listItemHeight: T,
        childrenAsData: de
      })
    }, [V, Ne, an, un, qe, N, $e, $, k, z, j, T, de]);
  return E(jn.Provider, {
    value: Oe,
    children: E(Kt, {
      ...G,
      id: K,
      prefixCls: r,
      ref: e,
      omitDomProps: Zt,
      mode: t,
      displayValues: De,
      onDisplayValuesChange: re,
      searchValue: D,
      onSearch: ln,
      onSearchSplit: We,
      dropdownMatchSelectWidth: z,
      OptionList: Gn,
      emptyOptions: !Ne.length,
      activeValue: tn,
      activeDescendantId: "".concat(K, "_list_").concat(Te)
    })
  })
}), Xn = no;
Xn.Option = zn;
Xn.OptGroup = Un;
export { zn as O, Xn as T, Un as a };

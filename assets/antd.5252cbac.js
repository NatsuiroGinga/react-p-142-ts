import {
  c as Sa,
  u as Na,
  a as Oi,
  b as Ot,
  o as Ve,
  t as Xt,
  d as It,
  e as Oa,
  s as Ia,
  f as Lt,
  g as Ii,
  h as ka,
  K as _a
} from "./rc-util.5fc3e0fc.js";
import { r as ki } from "./react-dom.18596681.js";
import { c as F } from "./classnames.4fb4381a.js";
import "./rc-resize-observer.c7f31fe7.js";
import { r as d, R as sr } from "./react.aaec2051.js";
import { C as Or, a as Ra } from "./rc-motion.a15f39b3.js";
import "./react-is.64ecdad3.js";
import {
  e as S,
  c as le,
  d as g,
  f as ye,
  g as Ir,
  h as kr,
  i as _r,
  j as Rr,
  _ as $e,
  k as _i,
  l as Ri,
  m as Gn
} from "./@babel.3781e41b.js";
import {
  j as s,
  I as $i,
  C as Sn,
  a as xt,
  E as Nn,
  L as gt,
  b as re,
  c as Qt,
  d as Ti,
  e as Ei,
  f as Mi,
  g as Di,
  h as Hn,
  i as Fi,
  k as $a,
  F as He,
  S as On,
  D as In,
  B as zi,
  R as vr,
  l as ln,
  m as kn,
  n as Li,
  P as ji,
  o as Ai,
  p as Ta,
  q as Ea,
  Q as Bi,
  r as Ma,
  s as Ki,
  t as Vi,
  u as Ui,
  v as cn,
  w as Da,
  x as Wi,
  y as Gi,
  M as Hi,
  z as qi,
  A as Yi,
  H as Xi,
  G as Qi,
  J as Ji,
  K as Zi,
  N as el,
  O as tl,
  T as rl,
  U as nl,
  V as al
} from "./@ant-design.023abccc.js";
import { d as ol, i as qn } from "./lodash.367d7372.js";
import { l as il, R as ll, P as cl, g as sl, a as ul } from "./rc-picker.aa869190.js";
import "./rc-trigger.1ca4bf78.js";
import "./moment.8aa368ab.js";
import { F as dl } from "./rc-tabs.79c41ffb.js";
import "./resize-observer-polyfill.8deb1e21.js";
import { O as fl, a as vl, T as ml } from "./rc-select.f21aeb63.js";
import { c as Fa, a as pl, b as hl, T as gl, C as Cl, d as Vr, e as xl, f as bl } from "./rc-tree.0817552b.js";
import { F as za, u as yl, R as Pl, C as wl, L as Sl, W as Nl, a as Ol, b as Il } from "./rc-field-form.49e35d01.js";
import { s as kl } from "./scroll-into-view-if-needed.5191fdbf.js";
import { D as _l, M as Rl, u as $l, S as Tl, a as La, E as El } from "./rc-menu.5d7efaea.js";
import { I as Ur, T as ja, F as Ml, c as Dl, a as Fl } from "./rc-table.4891c499.js";
import { e as Aa, P as zl } from "./rc-pagination.e8468ef3.js";
import { C as Ba } from "./rc-checkbox.79f571f2.js";
import { D as Ll } from "./rc-dropdown.ac181cf6.js";
import { I as jl } from "./rc-input.90b4a57e.js";
import { T as Al } from "./rc-textarea.ff63c5d3.js";
import { U as Yn } from "./rc-upload.46af2202.js";
import { u as Ka, N as Va } from "./rc-notification.0bf301ee.js";
import { T as Wr } from "./@ctrl.a33f4eba.js";
import { C as Bl } from "./rc-progress.823ac27d.js";
import { p as Kl, T as Vl } from "./rc-tooltip.3e5a5891.js";

var Ul = { placeholder: "Select time", rangePlaceholder: ["Start time", "End time"] };
const Ua = Ul;
var Wl = {
  lang: S({
    placeholder: "Select date",
    yearPlaceholder: "Select year",
    quarterPlaceholder: "Select quarter",
    monthPlaceholder: "Select month",
    weekPlaceholder: "Select week",
    rangePlaceholder: ["Start date", "End date"],
    rangeYearPlaceholder: ["Start year", "End year"],
    rangeQuarterPlaceholder: ["Start quarter", "End quarter"],
    rangeMonthPlaceholder: ["Start month", "End month"],
    rangeWeekPlaceholder: ["Start week", "End week"]
  }, il), timePickerLocale: S({}, Ua)
};
const mr = Wl;
var et = "${label} is not a valid ${type}", Gl = {
  locale: "en",
  Pagination: Aa,
  DatePicker: mr,
  TimePicker: Ua,
  Calendar: mr,
  global: { placeholder: "Please select" },
  Table: {
    filterTitle: "Filter menu",
    filterConfirm: "OK",
    filterReset: "Reset",
    filterEmptyText: "No filters",
    filterCheckall: "Select all items",
    filterSearchPlaceholder: "Search in filters",
    emptyText: "No data",
    selectAll: "Select current page",
    selectInvert: "Invert current page",
    selectNone: "Clear all data",
    selectionAll: "Select all data",
    sortTitle: "Sort",
    expand: "Expand row",
    collapse: "Collapse row",
    triggerDesc: "Click to sort descending",
    triggerAsc: "Click to sort ascending",
    cancelSort: "Click to cancel sorting"
  },
  Modal: { okText: "OK", cancelText: "Cancel", justOkText: "OK" },
  Popconfirm: { okText: "OK", cancelText: "Cancel" },
  Transfer: {
    titles: ["", ""],
    searchPlaceholder: "Search here",
    itemUnit: "item",
    itemsUnit: "items",
    remove: "Remove",
    selectCurrent: "Select current page",
    removeCurrent: "Remove current page",
    selectAll: "Select all data",
    removeAll: "Remove all data",
    selectInvert: "Invert current page"
  },
  Upload: {
    uploading: "Uploading...",
    removeFile: "Remove file",
    uploadError: "Upload error",
    previewFile: "Preview file",
    downloadFile: "Download file"
  },
  Empty: { description: "No data" },
  Icon: { icon: "icon" },
  Text: { edit: "Edit", copy: "Copy", copied: "Copied", expand: "Expand" },
  PageHeader: { back: "Back" },
  Form: {
    optional: "(optional)", defaultValidateMessages: {
      default: "Field validation error for ${label}",
      required: "Please enter ${label}",
      enum: "${label} must be one of [${enum}]",
      whitespace: "${label} cannot be a blank character",
      date: {
        format: "${label} date format is invalid",
        parse: "${label} cannot be converted to a date",
        invalid: "${label} is an invalid date"
      },
      types: {
        string: et,
        method: et,
        array: et,
        object: et,
        number: et,
        date: et,
        boolean: et,
        integer: et,
        float: et,
        regexp: et,
        email: et,
        url: et,
        hex: et
      },
      string: {
        len: "${label} must be ${len} characters",
        min: "${label} must be at least ${min} characters",
        max: "${label} must be up to ${max} characters",
        range: "${label} must be between ${min}-${max} characters"
      },
      number: {
        len: "${label} must be equal to ${len}",
        min: "${label} must be minimum ${min}",
        max: "${label} must be maximum ${max}",
        range: "${label} must be between ${min}-${max}"
      },
      array: {
        len: "Must be ${len} ${label}",
        min: "At least ${min} ${label}",
        max: "At most ${max} ${label}",
        range: "The amount of ${label} must be between ${min}-${max}"
      },
      pattern: { mismatch: "${label} does not match the pattern ${pattern}" }
    }
  },
  Image: { preview: "Preview" }
};
const at = Gl;
var Gr = S({}, at.Modal);

function Xn(e) {
  e ? Gr = S(S({}, Gr), e) : Gr = S({}, at.Modal)
}

var Hl = d.exports.createContext(void 0);
const _n = Hl;
var ql = "internalMark", Yl = function (t) {
  var n = t.locale, r = n === void 0 ? {} : n, a = t.children;
  t._ANT_MARK__, d.exports.useEffect(function () {
    return Xn(r && r.Modal), function () {
      Xn()
    }
  }, [r]);
  var o = d.exports.useMemo(function () {
    return S(S({}, r), { exist: !0 })
  }, [r]);
  return s(_n.Provider, { value: o, children: a })
};
const Xl = Yl;
var Ql = function (t) {
  var n = t.componentName, r = n === void 0 ? "global" : n, a = t.defaultLocale, o = t.children,
    l = d.exports.useContext(_n), c = d.exports.useMemo(function () {
      var u, v = a || at[r], f = (u = l == null ? void 0 : l[r]) !== null && u !== void 0 ? u : {};
      return S(S({}, v instanceof Function ? v() : v), f || {})
    }, [r, a, l]), i = d.exports.useMemo(function () {
      var u = l && l.locale;
      return l && l.exist && !u ? at.locale : u
    }, [l]);
  return o(c, i, l)
};
const kt = Ql;
var Jl = function (t, n) {
  var r = d.exports.useContext(_n), a = d.exports.useMemo(function () {
    var o, l = n || at[t], c = (o = r == null ? void 0 : r[t]) !== null && o !== void 0 ? o : {};
    return S(S({}, typeof l == "function" ? l() : l), c || {})
  }, [t, n, r]);
  return [a]
};

function Zl(e, t) {
  var n = function () {
    var a, o, l = null, c = {
      add: function (y, m) {
        l == null || l.component.add(y, m)
      }
    }, i = Ka(c), u = le(i, 2), v = u[0], f = u[1];

    function p(h) {
      var y = h.prefixCls, m = a("message", y), x = a(), b = h.key || Ja(), N = new Promise(function (O) {
        var w = function () {
          return typeof h.onClose == "function" && h.onClose(), O(!0)
        };
        e(S(S({}, h), { prefixCls: m, rootPrefixCls: x, getPopupContainer: o }), function (R) {
          var I = R.prefixCls, _ = R.instance;
          l = _, v(t(S(S({}, h), { key: b, onClose: w }), I))
        })
      }), P = function () {
        l && l.removeNotice(b)
      };
      return P.then = function (O, w) {
        return N.then(O, w)
      }, P.promise = N, P
    }

    var C = d.exports.useRef({});
    return C.current.open = p, to.forEach(function (h) {
      return no(C.current, h)
    }), [C.current, s(st, {
      children: function (h) {
        return a = h.getPrefixCls, o = h.getPopupContainer, f
      }
    }, "holder")]
  };
  return n
}

var Ye, Wa = 3, Ga, ec = 1, Ha = "", sn = "move-up", qa = !1, Ya, Xa, Qa = !1;

function Ja() {
  return ec++
}

function tc(e) {
  e.top !== void 0 && (Ga = e.top, Ye = null), e.duration !== void 0 && (Wa = e.duration), e.prefixCls !== void 0 && (Ha = e.prefixCls), e.getContainer !== void 0 && (Ya = e.getContainer, Ye = null), e.transitionName !== void 0 && (sn = e.transitionName, Ye = null, qa = !0), e.maxCount !== void 0 && (Xa = e.maxCount, Ye = null), e.rtl !== void 0 && (Qa = e.rtl)
}

function Za(e, t) {
  var n = e.prefixCls, r = e.getPopupContainer, a = Co(), o = a.getPrefixCls, l = a.getRootPrefixCls,
    c = a.getIconPrefixCls, i = o("message", n || Ha), u = l(e.rootPrefixCls, i), v = c();
  if (Ye) {
    t({ prefixCls: i, rootPrefixCls: u, iconPrefixCls: v, instance: Ye });
    return
  }
  var f = {
    prefixCls: i,
    transitionName: qa ? sn : "".concat(u, "-").concat(sn),
    style: { top: Ga },
    getContainer: Ya || r,
    maxCount: Xa
  };
  Va.newInstance(f, function (p) {
    if (Ye) {
      t({ prefixCls: i, rootPrefixCls: u, iconPrefixCls: v, instance: Ye });
      return
    }
    Ye = p, t({ prefixCls: i, rootPrefixCls: u, iconPrefixCls: v, instance: p })
  })
}

var eo = { info: $i, success: Sn, error: xt, warning: Nn, loading: gt }, to = Object.keys(eo);

function ro(e, t, n) {
  var r, a = e.duration !== void 0 ? e.duration : Wa, o = eo[e.type],
    l = F("".concat(t, "-custom-content"), (r = {}, g(r, "".concat(t, "-").concat(e.type), e.type), g(r, "".concat(t, "-rtl"), Qa === !0), r));
  return {
    key: e.key,
    duration: a,
    style: e.style || {},
    className: e.className,
    content: s(Jt, {
      iconPrefixCls: n,
      children: re("div", { className: l, children: [e.icon || o && s(o, {}), s("span", { children: e.content })] })
    }),
    onClose: e.onClose,
    onClick: e.onClick
  }
}

function rc(e) {
  var t = e.key || Ja(), n = new Promise(function (a) {
    var o = function () {
      return typeof e.onClose == "function" && e.onClose(), a(!0)
    };
    Za(e, function (l) {
      var c = l.prefixCls, i = l.iconPrefixCls, u = l.instance;
      u.notice(ro(S(S({}, e), { key: t, onClose: o }), c, i))
    })
  }), r = function () {
    Ye && Ye.removeNotice(t)
  };
  return r.then = function (a, o) {
    return n.then(a, o)
  }, r.promise = n, r
}

function nc(e) {
  return Object.prototype.toString.call(e) === "[object Object]" && !!e.content
}

var qt = {
  open: rc, config: tc, destroy: function (t) {
    if (Ye) if (t) {
      var n = Ye, r = n.removeNotice;
      r(t)
    } else {
      var a = Ye, o = a.destroy;
      o(), Ye = null
    }
  }
};

function no(e, t) {
  e[t] = function (n, r, a) {
    return nc(n) ? e.open(S(S({}, n), { type: t })) : (typeof r == "function" && (a = r, r = void 0), e.open({
      content: n,
      duration: r,
      type: t,
      onClose: a
    }))
  }
}

to.forEach(function (e) {
  return no(qt, e)
});
qt.warn = qt.warning;
qt.useMessage = Zl(Za, ro);
const ac = qt;

function oc(e, t) {
  var n = function () {
    var a, o = null, l = {
      add: function (h, y) {
        o == null || o.component.add(h, y)
      }
    }, c = Ka(l), i = le(c, 2), u = i[0], v = i[1];

    function f(C) {
      var h = C.prefixCls, y = a("notification", h);
      e(S(S({}, C), { prefixCls: y }), function (m) {
        var x = m.prefixCls, b = m.instance;
        o = b, u(t(C, x))
      })
    }

    var p = d.exports.useRef({});
    return p.current.open = f, ["success", "info", "warning", "error"].forEach(function (C) {
      p.current[C] = function (h) {
        return p.current.open(S(S({}, h), { type: C }))
      }
    }), [p.current, s(st, {
      children: function (C) {
        return a = C.getPrefixCls, v
      }
    }, "holder")]
  };
  return n
}

globalThis && globalThis.__awaiter;
var wt = {}, ao = 4.5, oo = 24, io = 24, lo = "", un = "topRight", co, so, uo = !1, fo;

function ic(e) {
  var t = e.duration, n = e.placement, r = e.bottom, a = e.top, o = e.getContainer, l = e.closeIcon, c = e.prefixCls;
  c !== void 0 && (lo = c), t !== void 0 && (ao = t), n !== void 0 ? un = n : e.rtl && (un = "topLeft"), r !== void 0 && (io = r), a !== void 0 && (oo = a), o !== void 0 && (co = o), l !== void 0 && (so = l), e.rtl !== void 0 && (uo = e.rtl), e.maxCount !== void 0 && (fo = e.maxCount)
}

function lc(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : oo,
    n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : io, r;
  switch (e) {
    case"top":
      r = { left: "50%", transform: "translateX(-50%)", right: "auto", top: t, bottom: "auto" };
      break;
    case"topLeft":
      r = { left: 0, top: t, bottom: "auto" };
      break;
    case"topRight":
      r = { right: 0, top: t, bottom: "auto" };
      break;
    case"bottom":
      r = { left: "50%", transform: "translateX(-50%)", right: "auto", top: "auto", bottom: n };
      break;
    case"bottomLeft":
      r = { left: 0, top: "auto", bottom: n };
      break;
    default:
      r = { right: 0, top: "auto", bottom: n };
      break
  }
  return r
}

function vo(e, t) {
  var n = e.placement, r = n === void 0 ? un : n, a = e.top, o = e.bottom, l = e.getContainer,
    c = l === void 0 ? co : l, i = e.prefixCls, u = Co(), v = u.getPrefixCls, f = u.getIconPrefixCls,
    p = v("notification", i || lo), C = f(), h = "".concat(p, "-").concat(r), y = wt[h];
  if (y) {
    Promise.resolve(y).then(function (x) {
      t({ prefixCls: "".concat(p, "-notice"), iconPrefixCls: C, instance: x })
    });
    return
  }
  var m = F("".concat(p, "-").concat(r), g({}, "".concat(p, "-rtl"), uo === !0));
  wt[h] = new Promise(function (x) {
    Va.newInstance({ prefixCls: p, className: m, style: lc(r, a, o), getContainer: c, maxCount: fo }, function (b) {
      x(b), t({ prefixCls: "".concat(p, "-notice"), iconPrefixCls: C, instance: b })
    })
  })
}

var cc = { success: Ti, info: Ei, error: Mi, warning: Di };

function mo(e, t, n) {
  var r = e.duration, a = e.icon, o = e.type, l = e.description, c = e.message, i = e.btn, u = e.onClose, v = e.onClick,
    f = e.key, p = e.style, C = e.className, h = e.closeIcon, y = h === void 0 ? so : h, m = e.props,
    x = r === void 0 ? ao : r, b = null;
  a ? b = s("span", {
    className: "".concat(t, "-icon"),
    children: e.icon
  }) : o && (b = d.exports.createElement(cc[o] || null, { className: "".concat(t, "-icon ").concat(t, "-icon-").concat(o) }));
  var N = s("span", {
    className: "".concat(t, "-close-x"),
    children: y || s(Qt, { className: "".concat(t, "-close-icon") })
  }), P = !l && b ? s("span", { className: "".concat(t, "-message-single-line-auto-margin") }) : null;
  return {
    content: s(Jt, {
      iconPrefixCls: n,
      children: re("div", {
        className: b ? "".concat(t, "-with-icon") : "",
        role: "alert",
        children: [b, re("div", {
          className: "".concat(t, "-message"),
          children: [P, c]
        }), s("div", {
          className: "".concat(t, "-description"),
          children: l
        }), i ? s("span", { className: "".concat(t, "-btn"), children: i }) : null]
      })
    }),
    duration: x,
    closable: !0,
    closeIcon: N,
    onClose: u,
    onClick: v,
    key: f,
    style: p || {},
    className: F(C, g({}, "".concat(t, "-").concat(o), !!o)),
    props: m
  }
}

function sc(e) {
  vo(e, function (t) {
    var n = t.prefixCls, r = t.iconPrefixCls, a = t.instance;
    a.notice(mo(e, n, r))
  })
}

var Ft = {
  open: sc, close: function (t) {
    Object.keys(wt).forEach(function (n) {
      return Promise.resolve(wt[n]).then(function (r) {
        r.removeNotice(t)
      })
    })
  }, config: ic, destroy: function () {
    Object.keys(wt).forEach(function (t) {
      Promise.resolve(wt[t]).then(function (n) {
        n.destroy()
      }), delete wt[t]
    })
  }
};
["success", "info", "warning", "error"].forEach(function (e) {
  Ft[e] = function (t) {
    return Ft.open(S(S({}, t), { type: e }))
  }
});
Ft.warn = Ft.warning;
Ft.useNotification = oc(vo, mo);
const uc = Ft;
var dc = function (t, n) {
    return n || (t ? "ant-".concat(t) : "ant")
  }, oe = d.exports.createContext({ getPrefixCls: dc }), st = oe.Consumer,
  fc = "-ant-".concat(Date.now(), "-").concat(Math.random());

function vc(e, t) {
  var n = {}, r = function (v, f) {
    var p = v.clone();
    return p = (f == null ? void 0 : f(p)) || p, p.toRgbString()
  }, a = function (v, f) {
    var p = new Wr(v), C = Hn(p.toRgbString());
    n["".concat(f, "-color")] = r(p), n["".concat(f, "-color-disabled")] = C[1], n["".concat(f, "-color-hover")] = C[4], n["".concat(f, "-color-active")] = C[6], n["".concat(f, "-color-outline")] = p.clone().setAlpha(.2).toRgbString(), n["".concat(f, "-color-deprecated-bg")] = C[0], n["".concat(f, "-color-deprecated-border")] = C[2]
  };
  if (t.primaryColor) {
    a(t.primaryColor, "primary");
    var o = new Wr(t.primaryColor), l = Hn(o.toRgbString());
    l.forEach(function (u, v) {
      n["primary-".concat(v + 1)] = u
    }), n["primary-color-deprecated-l-35"] = r(o, function (u) {
      return u.lighten(35)
    }), n["primary-color-deprecated-l-20"] = r(o, function (u) {
      return u.lighten(20)
    }), n["primary-color-deprecated-t-20"] = r(o, function (u) {
      return u.tint(20)
    }), n["primary-color-deprecated-t-50"] = r(o, function (u) {
      return u.tint(50)
    }), n["primary-color-deprecated-f-12"] = r(o, function (u) {
      return u.setAlpha(u.getAlpha() * .12)
    });
    var c = new Wr(l[0]);
    n["primary-color-active-deprecated-f-30"] = r(c, function (u) {
      return u.setAlpha(u.getAlpha() * .3)
    }), n["primary-color-active-deprecated-d-02"] = r(c, function (u) {
      return u.darken(2)
    })
  }
  t.successColor && a(t.successColor, "success"), t.warningColor && a(t.warningColor, "warning"), t.errorColor && a(t.errorColor, "error"), t.infoColor && a(t.infoColor, "info");
  var i = Object.keys(n).map(function (u) {
    return "--".concat(e, "-").concat(u, ": ").concat(n[u], ";")
  });
  return `
  :root {
    `.concat(i.join(`
`), `
  }
  `).trim()
}

function mc(e, t) {
  var n = vc(e, t);
  Sa() && Na(n, "".concat(fc, "-dynamic-theme"))
}

var dn = d.exports.createContext(!1), po = function (t) {
  var n = t.children, r = t.disabled, a = d.exports.useContext(dn);
  return s(dn.Provider, { value: r || a, children: n })
};
const it = dn;
var fn = d.exports.createContext(void 0), ho = function (t) {
  var n = t.children, r = t.size;
  return s(fn.Consumer, {
    children: function (a) {
      return s(fn.Provider, { value: r || a, children: n })
    }
  })
};
const tt = fn;
var pc = ["getTargetContainer", "getPopupContainer", "renderEmpty", "pageHeader", "input", "pagination", "form"],
  hc = "ant", gc = "anticon", pr, go;

function ur() {
  return pr || hc
}

function Cc() {
  return go || gc
}

var xc = function (t) {
  var n = t.prefixCls, r = t.iconPrefixCls, a = t.theme;
  n !== void 0 && (pr = n), r !== void 0 && (go = r), a && mc(ur(), a)
}, Co = function () {
  return {
    getPrefixCls: function (n, r) {
      return r || (n ? "".concat(ur(), "-").concat(n) : ur())
    }, getIconPrefixCls: Cc, getRootPrefixCls: function (n, r) {
      return n || pr || (r && r.includes("-") ? r.replace(/^(.*)-[^-]*$/, "$1") : ur())
    }
  }
}, bc = function (t) {
  var n, r, a = t.children, o = t.csp, l = t.autoInsertSpaceInButton, c = t.form, i = t.locale, u = t.componentSize,
    v = t.direction, f = t.space, p = t.virtual, C = t.dropdownMatchSelectWidth, h = t.legacyLocale,
    y = t.parentContext, m = t.iconPrefixCls, x = t.componentDisabled, b = d.exports.useCallback(function (I, _) {
      var $ = t.prefixCls;
      if (_) return _;
      var M = $ || y.getPrefixCls("");
      return I ? "".concat(M, "-").concat(I) : M
    }, [y.getPrefixCls, t.prefixCls]), N = S(S({}, y), {
      csp: o,
      autoInsertSpaceInButton: l,
      locale: i || h,
      direction: v,
      space: f,
      virtual: p,
      dropdownMatchSelectWidth: C,
      getPrefixCls: b
    });
  pc.forEach(function (I) {
    var _ = t[I];
    _ && (N[I] = _)
  });
  var P = Oi(function () {
    return N
  }, N, function (I, _) {
    var $ = Object.keys(I), M = Object.keys(_);
    return $.length !== M.length || $.some(function (E) {
      return I[E] !== _[E]
    })
  }), O = d.exports.useMemo(function () {
    return { prefixCls: m, csp: o }
  }, [m, o]), w = a, R = {};
  return i && (R = ((n = i.Form) === null || n === void 0 ? void 0 : n.defaultValidateMessages) || ((r = at.Form) === null || r === void 0 ? void 0 : r.defaultValidateMessages) || {}), c && c.validateMessages && (R = S(S({}, R), c.validateMessages)), Object.keys(R).length > 0 && (w = s(za, {
    validateMessages: R,
    children: a
  })), i && (w = s(Xl, { locale: i, _ANT_MARK__: ql, children: w })), (m || o) && (w = s(Fi.Provider, {
    value: O,
    children: w
  })), u && (w = s(ho, { size: u, children: w })), x !== void 0 && (w = s(po, {
    disabled: x,
    children: w
  })), s(oe.Provider, { value: P, children: w })
}, Jt = function (t) {
  return d.exports.useEffect(function () {
    t.direction && (ac.config({ rtl: t.direction === "rtl" }), uc.config({ rtl: t.direction === "rtl" }))
  }, [t.direction]), s(kt, {
    children: function (n, r, a) {
      return s(st, {
        children: function (o) {
          return s(bc, { parentContext: o, legacyLocale: a, ...t })
        }
      })
    }
  })
};
Jt.ConfigContext = oe;
Jt.SizeContext = tt;
Jt.config = xc;

function yc(e) {
  return Object.keys(e).reduce(function (t, n) {
    return (n.startsWith("data-") || n.startsWith("aria-") || n === "role") && !n.startsWith("data-__") && (t[n] = e[n]), t
  }, {})
}

var Xe = d.exports.isValidElement;

function xo(e) {
  return e && Xe(e) && e.type === d.exports.Fragment
}

function Pc(e, t, n) {
  return Xe(e) ? d.exports.cloneElement(e, typeof n == "function" ? n(e.props || {}) : n) : t
}

function ze(e, t) {
  return Pc(e, e, t)
}

function vn(e) {
  return e != null && e === e.window
}

function wc(e, t) {
  var n, r;
  if (typeof window > "u") return 0;
  var a = t ? "scrollTop" : "scrollLeft", o = 0;
  return vn(e) ? o = e[t ? "pageYOffset" : "pageXOffset"] : e instanceof Document ? o = e.documentElement[a] : (e instanceof HTMLElement || e) && (o = e[a]), e && !vn(e) && typeof o != "number" && (o = (r = ((n = e.ownerDocument) !== null && n !== void 0 ? n : e).documentElement) === null || r === void 0 ? void 0 : r[a]), o
}

function Sc(e, t, n, r) {
  var a = n - t;
  return e /= r / 2, e < 1 ? a / 2 * e * e * e + t : a / 2 * ((e -= 2) * e * e + 2) + t
}

function Nc(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = t.getContainer,
    r = n === void 0 ? function () {
      return window
    } : n, a = t.callback, o = t.duration, l = o === void 0 ? 450 : o, c = r(), i = wc(c, !0), u = Date.now(),
    v = function f() {
      var p = Date.now(), C = p - u, h = Sc(C > l ? l : C, i, e, l);
      vn(c) ? c.scrollTo(window.pageXOffset, h) : c instanceof Document || c.constructor.name === "HTMLDocument" ? c.documentElement.scrollTop = h : c.scrollTop = h, C < l ? Ot(f) : typeof a == "function" && a()
    };
  Ot(v)
}

var Oc = function () {
  var t = d.exports.useContext(oe), n = t.getPrefixCls, r = n("empty-img-default");
  return s("svg", {
    className: r,
    width: "184",
    height: "152",
    viewBox: "0 0 184 152",
    xmlns: "http://www.w3.org/2000/svg",
    children: re("g", {
      fill: "none", fillRule: "evenodd", children: [re("g", {
        transform: "translate(24 31.67)",
        children: [s("ellipse", {
          className: "".concat(r, "-ellipse"),
          cx: "67.797",
          cy: "106.89",
          rx: "67.797",
          ry: "12.668"
        }), s("path", {
          className: "".concat(r, "-path-1"),
          d: "M122.034 69.674L98.109 40.229c-1.148-1.386-2.826-2.225-4.593-2.225h-51.44c-1.766 0-3.444.839-4.592 2.225L13.56 69.674v15.383h108.475V69.674z"
        }), s("path", {
          className: "".concat(r, "-path-2"),
          d: "M101.537 86.214L80.63 61.102c-1.001-1.207-2.507-1.867-4.048-1.867H31.724c-1.54 0-3.047.66-4.048 1.867L6.769 86.214v13.792h94.768V86.214z",
          transform: "translate(13.56)"
        }), s("path", {
          className: "".concat(r, "-path-3"),
          d: "M33.83 0h67.933a4 4 0 0 1 4 4v93.344a4 4 0 0 1-4 4H33.83a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4z"
        }), s("path", {
          className: "".concat(r, "-path-4"),
          d: "M42.678 9.953h50.237a2 2 0 0 1 2 2V36.91a2 2 0 0 1-2 2H42.678a2 2 0 0 1-2-2V11.953a2 2 0 0 1 2-2zM42.94 49.767h49.713a2.262 2.262 0 1 1 0 4.524H42.94a2.262 2.262 0 0 1 0-4.524zM42.94 61.53h49.713a2.262 2.262 0 1 1 0 4.525H42.94a2.262 2.262 0 0 1 0-4.525zM121.813 105.032c-.775 3.071-3.497 5.36-6.735 5.36H20.515c-3.238 0-5.96-2.29-6.734-5.36a7.309 7.309 0 0 1-.222-1.79V69.675h26.318c2.907 0 5.25 2.448 5.25 5.42v.04c0 2.971 2.37 5.37 5.277 5.37h34.785c2.907 0 5.277-2.421 5.277-5.393V75.1c0-2.972 2.343-5.426 5.25-5.426h26.318v33.569c0 .617-.077 1.216-.221 1.789z"
        })]
      }), s("path", {
        className: "".concat(r, "-path-5"),
        d: "M149.121 33.292l-6.83 2.65a1 1 0 0 1-1.317-1.23l1.937-6.207c-2.589-2.944-4.109-6.534-4.109-10.408C138.802 8.102 148.92 0 161.402 0 173.881 0 184 8.102 184 18.097c0 9.995-10.118 18.097-22.599 18.097-4.528 0-8.744-1.066-12.28-2.902z"
      }), re("g", {
        className: "".concat(r, "-g"),
        transform: "translate(149.65 15.383)",
        children: [s("ellipse", {
          cx: "20.654",
          cy: "3.167",
          rx: "2.849",
          ry: "2.815"
        }), s("path", { d: "M5.698 5.63H0L2.898.704zM9.259.704h4.985V5.63H9.259z" })]
      })]
    })
  })
};
const Ic = Oc;
var kc = function () {
  var t = d.exports.useContext(oe), n = t.getPrefixCls, r = n("empty-img-simple");
  return s("svg", {
    className: r,
    width: "64",
    height: "41",
    viewBox: "0 0 64 41",
    xmlns: "http://www.w3.org/2000/svg",
    children: re("g", {
      transform: "translate(0 1)",
      fill: "none",
      fillRule: "evenodd",
      children: [s("ellipse", {
        className: "".concat(r, "-ellipse"),
        cx: "32",
        cy: "33",
        rx: "32",
        ry: "7"
      }), re("g", {
        className: "".concat(r, "-g"),
        fillRule: "nonzero",
        children: [s("path", { d: "M55 12.76L44.854 1.258C44.367.474 43.656 0 42.907 0H21.093c-.749 0-1.46.474-1.947 1.257L9 12.761V22h46v-9.24z" }), s("path", {
          d: "M41.613 15.931c0-1.605.994-2.93 2.227-2.931H55v18.137C55 33.26 53.68 35 52.05 35h-40.1C10.32 35 9 33.259 9 31.137V13h11.16c1.233 0 2.227 1.323 2.227 2.928v.022c0 1.605 1.005 2.901 2.237 2.901h14.752c1.232 0 2.237-1.308 2.237-2.913v-.007z",
          className: "".concat(r, "-path")
        })]
      })]
    })
  })
};
const _c = kc;
var Rc = globalThis && globalThis.__rest || function (e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var a = 0, r = Object.getOwnPropertySymbols(e); a < r.length; a++) t.indexOf(r[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[a]) && (n[r[a]] = e[r[a]]);
  return n
}, bo = s(Ic, {}), yo = s(_c, {}), Rn = function (t) {
  var n = t.className, r = t.prefixCls, a = t.image, o = a === void 0 ? bo : a, l = t.description, c = t.children,
    i = t.imageStyle, u = Rc(t, ["className", "prefixCls", "image", "description", "children", "imageStyle"]),
    v = d.exports.useContext(oe), f = v.getPrefixCls, p = v.direction;
  return s(kt, {
    componentName: "Empty", children: function (C) {
      var h, y = f("empty", r), m = typeof l < "u" ? l : C.description, x = typeof m == "string" ? m : "empty",
        b = null;
      return typeof o == "string" ? b = s("img", {
        alt: x,
        src: o
      }) : b = o, re("div", {
        className: F(y, (h = {}, g(h, "".concat(y, "-normal"), o === yo), g(h, "".concat(y, "-rtl"), p === "rtl"), h), n), ...u,
        children: [s("div", {
          className: "".concat(y, "-image"),
          style: i,
          children: b
        }), m && s("div", {
          className: "".concat(y, "-description"),
          children: m
        }), c && s("div", { className: "".concat(y, "-footer"), children: c })]
      })
    }
  })
};
Rn.PRESENTED_IMAGE_DEFAULT = bo;
Rn.PRESENTED_IMAGE_SIMPLE = yo;
const St = Rn;
var $c = function (t) {
  return s(st, {
    children: function (n) {
      var r = n.getPrefixCls, a = r("empty");
      switch (t) {
        case"Table":
        case"List":
          return s(St, { image: St.PRESENTED_IMAGE_SIMPLE });
        case"Select":
        case"TreeSelect":
        case"Cascader":
        case"Transfer":
        case"Mentions":
          return s(St, { image: St.PRESENTED_IMAGE_SIMPLE, className: "".concat(a, "-small") });
        default:
          return s(St, {})
      }
    }
  })
};
const Po = $c;
var Ct = d.exports.createContext({
  labelAlign: "right", vertical: !1, itemRef: function () {
  }
}), wo = d.exports.createContext(null), Tc = function (t) {
  var n = Ve(t, ["prefixCls"]);
  return s(za, { ...n })
}, $n = d.exports.createContext({ prefixCls: "" }), Qe = d.exports.createContext({}), Qn = function (t) {
  var n = t.children, r = t.status, a = t.override, o = d.exports.useContext(Qe), l = d.exports.useMemo(function () {
    var c = S({}, o);
    return a && delete c.isFormItemInput, r && (delete c.status, delete c.hasFeedback, delete c.feedbackIcon), c
  }, [r, a, o]);
  return s(Qe.Provider, { value: l, children: n })
}, qe = function () {
  for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++) n[r] = arguments[r];
  return n
}, Hr = function () {
  return { height: 0, opacity: 0 }
}, Jn = function (t) {
  var n = t.scrollHeight;
  return { height: n, opacity: 1 }
}, Ec = function (t) {
  return { height: t ? t.offsetHeight : 0 }
}, qr = function (t, n) {
  return (n == null ? void 0 : n.deadline) === !0 || n.propertyName === "height"
}, Mc = {
  motionName: "ant-motion-collapse",
  onAppearStart: Hr,
  onEnterStart: Hr,
  onAppearActive: Jn,
  onEnterActive: Jn,
  onLeaveStart: Ec,
  onLeaveActive: Hr,
  onAppearEnd: qr,
  onEnterEnd: qr,
  onLeaveEnd: qr,
  motionDeadline: 500
};
qe("bottomLeft", "bottomRight", "topLeft", "topRight");
var Dc = function (t) {
  return t !== void 0 && (t === "topLeft" || t === "topRight") ? "slide-down" : "slide-up"
}, $r = function (t, n, r) {
  return r !== void 0 ? r : "".concat(t, "-").concat(n)
};
const Yt = Mc;
qe("warning", "error", "");

function ct(e, t, n) {
  var r;
  return F((r = {}, g(r, "".concat(e, "-status-success"), t === "success"), g(r, "".concat(e, "-status-warning"), t === "warning"), g(r, "".concat(e, "-status-error"), t === "error"), g(r, "".concat(e, "-status-validating"), t === "validating"), g(r, "".concat(e, "-has-feedback"), n), r))
}

var jt = function (t, n) {
  return n || t
};

function Fc(e) {
  var t = e.suffixIcon, n = e.clearIcon, r = e.menuItemSelectedIcon, a = e.removeIcon, o = e.loading, l = e.multiple,
    c = e.hasFeedback, i = e.prefixCls, u = e.showArrow, v = e.feedbackIcon, f = n != null ? n : s(xt, {}),
    p = function (b) {
      return re(He, { children: [u !== !1 && b, c && v] })
    }, C = null;
  if (t !== void 0) C = p(t); else if (o) C = p(s(gt, { spin: !0 })); else {
    var h = "".concat(i, "-suffix");
    C = function (b) {
      var N = b.open, P = b.showSearch;
      return p(N && P ? s(On, { className: h }) : s(In, { className: h }))
    }
  }
  var y = null;
  r !== void 0 ? y = r : l ? y = s($a, {}) : y = null;
  var m = null;
  return a !== void 0 ? m = a : m = s(Qt, {}), { clearIcon: f, suffixIcon: C, itemIcon: y, removeIcon: m }
}

var So = globalThis && globalThis.__rest || function (e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var a = 0, r = Object.getOwnPropertySymbols(e); a < r.length; a++) t.indexOf(r[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[a]) && (n[r[a]] = e[r[a]]);
  return n
}, Tr = d.exports.createContext(null), _t = function (t, n) {
  var r = d.exports.useContext(Tr), a = d.exports.useMemo(function () {
    var o;
    if (!r) return "";
    var l = r.compactDirection, c = r.isFirstItem, i = r.isLastItem, u = l === "vertical" ? "-vertical-" : "-";
    return F((o = {}, g(o, "".concat(t, "-compact").concat(u, "item"), !0), g(o, "".concat(t, "-compact").concat(u, "first-item"), c), g(o, "".concat(t, "-compact").concat(u, "last-item"), i), g(o, "".concat(t, "-compact").concat(u, "item-rtl"), n === "rtl"), o))
  }, [t, n, r]);
  return {
    compactSize: r == null ? void 0 : r.compactSize,
    compactDirection: r == null ? void 0 : r.compactDirection,
    compactItemClassnames: a
  }
}, Zn = function (t) {
  var n = t.children;
  return s(Tr.Provider, { value: null, children: n })
}, zc = function (t) {
  var n = t.children, r = So(t, ["children"]);
  return s(Tr.Provider, { value: r, children: n })
}, Lc = function (t) {
  var n, r = d.exports.useContext(oe), a = r.getPrefixCls, o = r.direction, l = t.size, c = l === void 0 ? "middle" : l,
    i = t.direction, u = t.block, v = t.prefixCls, f = t.className, p = t.children,
    C = So(t, ["size", "direction", "block", "prefixCls", "className", "children"]), h = a("space-compact", v),
    y = F(h, (n = {}, g(n, "".concat(h, "-rtl"), o === "rtl"), g(n, "".concat(h, "-block"), u), g(n, "".concat(h, "-vertical"), i === "vertical"), n), f),
    m = d.exports.useContext(Tr), x = Xt(p), b = d.exports.useMemo(function () {
      return x.map(function (N, P) {
        var O = N && N.key || "".concat(h, "-item-").concat(P);
        return s(zc, {
          compactSize: c,
          compactDirection: i,
          isFirstItem: P === 0 && (!m || (m == null ? void 0 : m.isFirstItem)),
          isLastItem: P === x.length - 1 && (!m || (m == null ? void 0 : m.isLastItem)),
          children: N
        }, O)
      })
    }, [c, x, m]);
  return x.length === 0 ? null : s("div", { className: y, ...C, children: b })
};
const jc = Lc;
var Ac = globalThis && globalThis.__rest || function (e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var a = 0, r = Object.getOwnPropertySymbols(e); a < r.length; a++) t.indexOf(r[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[a]) && (n[r[a]] = e[r[a]]);
  return n
}, No = "SECRET_COMBOBOX_MODE_DO_NOT_USE", Bc = function (t, n) {
  var r, a = t.prefixCls, o = t.bordered, l = o === void 0 ? !0 : o, c = t.className, i = t.getPopupContainer,
    u = t.dropdownClassName, v = t.popupClassName, f = t.listHeight, p = f === void 0 ? 256 : f, C = t.placement,
    h = t.listItemHeight, y = h === void 0 ? 24 : h, m = t.size, x = t.disabled, b = t.notFoundContent, N = t.status,
    P = t.showArrow,
    O = Ac(t, ["prefixCls", "bordered", "className", "getPopupContainer", "dropdownClassName", "popupClassName", "listHeight", "placement", "listItemHeight", "size", "disabled", "notFoundContent", "status", "showArrow"]),
    w = d.exports.useContext(oe), R = w.getPopupContainer, I = w.getPrefixCls, _ = w.renderEmpty, $ = w.direction,
    M = w.virtual, E = w.dropdownMatchSelectWidth, T = d.exports.useContext(tt), k = I("select", a), V = I(),
    z = _t(k, $), j = z.compactSize, D = z.compactItemClassnames, B = d.exports.useMemo(function () {
      var W = O.mode;
      if (W !== "combobox") return W === No ? "combobox" : W
    }, [O.mode]), te = B === "multiple" || B === "tags", ne = P !== void 0 ? P : O.loading || !(te || B === "combobox"),
    X = d.exports.useContext(Qe), Z = X.status, G = X.hasFeedback, K = X.isFormItemInput, A = X.feedbackIcon,
    L = jt(Z, N), q;
  b !== void 0 ? q = b : B === "combobox" ? q = null : q = (_ || Po)("Select");
  var H = Fc(S(S({}, O), { multiple: te, hasFeedback: G, feedbackIcon: A, showArrow: ne, prefixCls: k })),
    Q = H.suffixIcon, J = H.itemIcon, de = H.removeIcon, ae = H.clearIcon, pe = Ve(O, ["suffixIcon", "itemIcon"]),
    Y = F(v || u, g({}, "".concat(k, "-dropdown-").concat($), $ === "rtl")), ie = j || m || T,
    ue = d.exports.useContext(it), xe = x != null ? x : ue,
    fe = F((r = {}, g(r, "".concat(k, "-lg"), ie === "large"), g(r, "".concat(k, "-sm"), ie === "small"), g(r, "".concat(k, "-rtl"), $ === "rtl"), g(r, "".concat(k, "-borderless"), !l), g(r, "".concat(k, "-in-form-item"), K), r), ct(k, L, G), D, c),
    ce = function () {
      return C !== void 0 ? C : $ === "rtl" ? "bottomRight" : "bottomLeft"
    };
  return s(ml, {
    ref: n,
    virtual: M,
    dropdownMatchSelectWidth: E, ...pe,
    transitionName: $r(V, Dc(C), O.transitionName),
    listHeight: p,
    listItemHeight: y,
    mode: B,
    prefixCls: k,
    placement: ce(),
    direction: $,
    inputIcon: Q,
    menuItemSelectedIcon: J,
    removeIcon: de,
    clearIcon: ae,
    notFoundContent: q,
    className: fe,
    getPopupContainer: i || R,
    dropdownClassName: Y,
    showArrow: G || P,
    disabled: xe
  })
}, Er = d.exports.forwardRef(Bc);
Er.SECRET_COMBOBOX_MODE_DO_NOT_USE = No;
Er.Option = fl;
Er.OptGroup = vl;
const Mr = Er;

function Tn() {
  var e = d.exports.useReducer(function (r) {
    return r + 1
  }, 0), t = le(e, 2), n = t[1];
  return n
}

var hr = ["xxl", "xl", "lg", "md", "sm", "xs"], ar = {
  xs: "(max-width: 575px)",
  sm: "(min-width: 576px)",
  md: "(min-width: 768px)",
  lg: "(min-width: 992px)",
  xl: "(min-width: 1200px)",
  xxl: "(min-width: 1600px)"
}, Pt = new Map, Yr = -1, or = {}, Kc = {
  matchHandlers: {}, dispatch: function (t) {
    return or = t, Pt.forEach(function (n) {
      return n(or)
    }), Pt.size >= 1
  }, subscribe: function (t) {
    return Pt.size || this.register(), Yr += 1, Pt.set(Yr, t), t(or), Yr
  }, unsubscribe: function (t) {
    Pt.delete(t), Pt.size || this.unregister()
  }, unregister: function () {
    var t = this;
    Object.keys(ar).forEach(function (n) {
      var r = ar[n], a = t.matchHandlers[r];
      a == null || a.mql.removeListener(a == null ? void 0 : a.listener)
    }), Pt.clear()
  }, register: function () {
    var t = this;
    Object.keys(ar).forEach(function (n) {
      var r = ar[n], a = function (c) {
        var i = c.matches;
        t.dispatch(S(S({}, or), g({}, n, i)))
      }, o = window.matchMedia(r);
      o.addListener(a), t.matchHandlers[r] = { mql: o, listener: a }, a(o)
    })
  }
};
const gr = Kc;

function Oo() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !0, t = d.exports.useRef({}), n = Tn();
  return d.exports.useEffect(function () {
    var r = gr.subscribe(function (a) {
      t.current = a, e && n()
    });
    return function () {
      return gr.unsubscribe(r)
    }
  }, []), t.current
}

var Vc = qe("success", "processing", "error", "default", "warning"),
  Io = qe("pink", "red", "yellow", "orange", "cyan", "green", "blue", "purple", "geekblue", "magenta", "volcano", "gold", "lime"),
  Uc = { adjustX: 1, adjustY: 1 }, ea = { adjustX: 0, adjustY: 0 }, Wc = [0, 0];

function ta(e) {
  return typeof e == "boolean" ? e ? Uc : ea : S(S({}, ea), e)
}

function ko(e) {
  var t = e.arrowWidth, n = t === void 0 ? 4 : t, r = e.horizontalArrowShift, a = r === void 0 ? 16 : r,
    o = e.verticalArrowShift, l = o === void 0 ? 8 : o, c = e.autoAdjustOverflow, i = e.arrowPointAtCenter, u = {
      left: { points: ["cr", "cl"], offset: [-4, 0] },
      right: { points: ["cl", "cr"], offset: [4, 0] },
      top: { points: ["bc", "tc"], offset: [0, -4] },
      bottom: { points: ["tc", "bc"], offset: [0, 4] },
      topLeft: { points: ["bl", "tc"], offset: [-(a + n), -4] },
      leftTop: { points: ["tr", "cl"], offset: [-4, -(l + n)] },
      topRight: { points: ["br", "tc"], offset: [a + n, -4] },
      rightTop: { points: ["tl", "cr"], offset: [4, -(l + n)] },
      bottomRight: { points: ["tr", "bc"], offset: [a + n, 4] },
      rightBottom: { points: ["bl", "cr"], offset: [4, l + n] },
      bottomLeft: { points: ["tl", "bc"], offset: [-(a + n), 4] },
      leftBottom: { points: ["br", "cl"], offset: [-4, l + n] }
    };
  return Object.keys(u).forEach(function (v) {
    u[v] = i ? S(S({}, u[v]), {
      overflow: ta(c),
      targetOffset: Wc
    }) : S(S({}, Kl[v]), { overflow: ta(c) }), u[v].ignoreShake = !0
  }), u
}

var Gc = globalThis && globalThis.__rest || function (e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var a = 0, r = Object.getOwnPropertySymbols(e); a < r.length; a++) t.indexOf(r[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[a]) && (n[r[a]] = e[r[a]]);
  return n
}, Hc = function (t, n) {
  var r = {}, a = S({}, t);
  return n.forEach(function (o) {
    t && o in t && (r[o] = t[o], delete a[o])
  }), { picked: r, omitted: a }
}, ra = new RegExp("^(".concat(Io.join("|"), ")(-inverse)?$"));

function qc(e, t) {
  var n = e.type;
  if ((n.__ANT_BUTTON === !0 || e.type === "button") && e.props.disabled || n.__ANT_SWITCH === !0 && (e.props.disabled || e.props.loading) || n.__ANT_RADIO === !0 && e.props.disabled) {
    var r = Hc(e.props.style, ["position", "left", "right", "top", "bottom", "float", "display", "zIndex"]),
      a = r.picked, o = r.omitted,
      l = S(S({ display: "inline-block" }, a), { cursor: "not-allowed", width: e.props.block ? "100%" : void 0 }),
      c = S(S({}, o), { pointerEvents: "none" }), i = ze(e, { style: c, className: null });
    return s("span", {
      style: l,
      className: F(e.props.className, "".concat(t, "-disabled-compatible-wrapper")),
      children: i
    })
  }
  return e
}

var Yc = d.exports.forwardRef(function (e, t) {
  var n, r = d.exports.useContext(oe), a = r.getPopupContainer, o = r.getPrefixCls, l = r.direction, c = It(!1, {
      value: e.open !== void 0 ? e.open : e.visible,
      defaultValue: e.defaultOpen !== void 0 ? e.defaultOpen : e.defaultVisible
    }), i = le(c, 2), u = i[0], v = i[1], f = function () {
      var K = e.title, A = e.overlay;
      return !K && !A && K !== 0
    }, p = function (K) {
      var A, L;
      v(f() ? !1 : K), f() || ((A = e.onOpenChange) === null || A === void 0 || A.call(e, K), (L = e.onVisibleChange) === null || L === void 0 || L.call(e, K))
    }, C = function () {
      var K = e.builtinPlacements, A = e.arrowPointAtCenter, L = A === void 0 ? !1 : A, q = e.autoAdjustOverflow,
        H = q === void 0 ? !0 : q;
      return K || ko({ arrowPointAtCenter: L, autoAdjustOverflow: H })
    }, h = function (K, A) {
      var L = C(), q = Object.keys(L).find(function (J) {
        var de, ae;
        return L[J].points[0] === ((de = A.points) === null || de === void 0 ? void 0 : de[0]) && L[J].points[1] === ((ae = A.points) === null || ae === void 0 ? void 0 : ae[1])
      });
      if (!!q) {
        var H = K.getBoundingClientRect(), Q = { top: "50%", left: "50%" };
        /top|Bottom/.test(q) ? Q.top = "".concat(H.height - A.offset[1], "px") : /Top|bottom/.test(q) && (Q.top = "".concat(-A.offset[1], "px")), /left|Right/.test(q) ? Q.left = "".concat(H.width - A.offset[0], "px") : /right|Left/.test(q) && (Q.left = "".concat(-A.offset[0], "px")), K.style.transformOrigin = "".concat(Q.left, " ").concat(Q.top)
      }
    }, y = function () {
      var K = e.title, A = e.overlay;
      return K === 0 ? K : A || K || ""
    }, m = e.getPopupContainer, x = e.placement, b = x === void 0 ? "top" : x, N = e.mouseEnterDelay,
    P = N === void 0 ? .1 : N, O = e.mouseLeaveDelay, w = O === void 0 ? .1 : O,
    R = Gc(e, ["getPopupContainer", "placement", "mouseEnterDelay", "mouseLeaveDelay"]), I = e.prefixCls,
    _ = e.openClassName, $ = e.getTooltipContainer, M = e.overlayClassName, E = e.color, T = e.overlayInnerStyle,
    k = e.children, V = o("tooltip", I), z = o(), j = u;
  !("open" in e) && !("visible" in e) && f() && (j = !1);
  var D = qc(Xe(k) && !xo(k) ? k : s("span", { children: k }), V), B = D.props,
    te = !B.className || typeof B.className == "string" ? F(B.className, g({}, _ || "".concat(V, "-open"), !0)) : B.className,
    ne = F(M, (n = {}, g(n, "".concat(V, "-rtl"), l === "rtl"), g(n, "".concat(V, "-").concat(E), E && ra.test(E)), n)),
    X = T, Z = {};
  return E && !ra.test(E) && (X = S(S({}, T), { background: E }), Z = { "--antd-arrow-background-color": E }), s(Vl, {
    ...R,
    placement: b,
    mouseEnterDelay: P,
    mouseLeaveDelay: w,
    prefixCls: V,
    overlayClassName: ne,
    getTooltipContainer: m || $ || a,
    ref: t,
    builtinPlacements: C(),
    overlay: y(),
    visible: j,
    onVisibleChange: p,
    onPopupAlign: h,
    overlayInnerStyle: X,
    arrowContent: s("span", { className: "".concat(V, "-arrow-content"), style: Z }),
    motion: { motionName: $r(z, "zoom-big-fast", e.transitionName), motionDeadline: 1e3 },
    children: j ? ze(D, { className: te }) : D
  })
});
const Zt = Yc;
var mn = function (t) {
  if (!t) return null;
  var n = typeof t == "function";
  return n ? t() : t
}, Xc = globalThis && globalThis.__rest || function (e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var a = 0, r = Object.getOwnPropertySymbols(e); a < r.length; a++) t.indexOf(r[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[a]) && (n[r[a]] = e[r[a]]);
  return n
}, Qc = function (t) {
  var n = t.title, r = t.content, a = t.prefixCls;
  return !n && !r ? null : re(He, {
    children: [n && s("div", {
      className: "".concat(a, "-title"),
      children: mn(n)
    }), s("div", { className: "".concat(a, "-inner-content"), children: mn(r) })]
  })
}, Jc = d.exports.forwardRef(function (e, t) {
  var n = e.prefixCls, r = e.title, a = e.content, o = e._overlay, l = e.placement, c = l === void 0 ? "top" : l,
    i = e.trigger, u = i === void 0 ? "hover" : i, v = e.mouseEnterDelay, f = v === void 0 ? .1 : v,
    p = e.mouseLeaveDelay, C = p === void 0 ? .1 : p, h = e.overlayStyle, y = h === void 0 ? {} : h,
    m = Xc(e, ["prefixCls", "title", "content", "_overlay", "placement", "trigger", "mouseEnterDelay", "mouseLeaveDelay", "overlayStyle"]),
    x = d.exports.useContext(oe), b = x.getPrefixCls, N = b("popover", n), P = b();
  return s(Zt, {
    placement: c,
    trigger: u,
    mouseEnterDelay: f,
    mouseLeaveDelay: C,
    overlayStyle: y, ...m,
    prefixCls: N,
    ref: t,
    overlay: o || s(Qc, { prefixCls: N, title: r, content: a }),
    transitionName: $r(P, "zoom-big", m.transitionName)
  })
});
const Zc = Jc;
var es = function (t) {
  return !isNaN(parseFloat(t)) && isFinite(t)
};
const ts = es;
var _o = globalThis && globalThis.__rest || function (e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var a = 0, r = Object.getOwnPropertySymbols(e); a < r.length; a++) t.indexOf(r[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[a]) && (n[r[a]] = e[r[a]]);
  return n
}, Ro = d.exports.createContext({
  siderHook: {
    addSider: function () {
      return null
    }, removeSider: function () {
      return null
    }
  }
});

function Dr(e) {
  var t = e.suffixCls, n = e.tagName;
  return e.displayName, function (r) {
    var a = d.exports.forwardRef(function (o, l) {
      var c = d.exports.useContext(oe), i = c.getPrefixCls, u = o.prefixCls, v = i(t, u);
      return s(r, { ref: l, prefixCls: v, tagName: n, ...o })
    });
    return a
  }
}

var En = d.exports.forwardRef(function (e, t) {
    var n = e.prefixCls, r = e.className, a = e.children, o = e.tagName,
      l = _o(e, ["prefixCls", "className", "children", "tagName"]), c = F(n, r);
    return d.exports.createElement(o, S(S({ className: c }, l), { ref: t }), a)
  }), rs = d.exports.forwardRef(function (e, t) {
    var n, r = d.exports.useContext(oe), a = r.direction, o = d.exports.useState([]), l = le(o, 2), c = l[0], i = l[1],
      u = e.prefixCls, v = e.className, f = e.children, p = e.hasSider, C = e.tagName,
      h = _o(e, ["prefixCls", "className", "children", "hasSider", "tagName"]),
      y = F(u, (n = {}, g(n, "".concat(u, "-has-sider"), typeof p == "boolean" ? p : c.length > 0), g(n, "".concat(u, "-rtl"), a === "rtl"), n), v),
      m = d.exports.useMemo(function () {
        return {
          siderHook: {
            addSider: function (b) {
              i(function (N) {
                return [].concat(ye(N), [b])
              })
            }, removeSider: function (b) {
              i(function (N) {
                return N.filter(function (P) {
                  return P !== b
                })
              })
            }
          }
        }
      }, []);
    return s(Ro.Provider, { value: m, children: s(C, { ref: t, className: y, ...h, children: f }) })
  }), ns = Dr({ suffixCls: "layout", tagName: "section", displayName: "Layout" })(rs),
  as = Dr({ suffixCls: "layout-header", tagName: "header", displayName: "Header" })(En),
  os = Dr({ suffixCls: "layout-footer", tagName: "footer", displayName: "Footer" })(En),
  is = Dr({ suffixCls: "layout-content", tagName: "main", displayName: "Content" })(En);
const ls = ns;
var cs = globalThis && globalThis.__rest || function (e, t) {
    var n = {};
    for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
    if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var a = 0, r = Object.getOwnPropertySymbols(e); a < r.length; a++) t.indexOf(r[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[a]) && (n[r[a]] = e[r[a]]);
    return n
  }, na = { xs: "479.98px", sm: "575.98px", md: "767.98px", lg: "991.98px", xl: "1199.98px", xxl: "1599.98px" },
  Mn = d.exports.createContext({}), ss = function () {
    var e = 0;
    return function () {
      var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
      return e += 1, "".concat(t).concat(e)
    }
  }(), us = d.exports.forwardRef(function (e, t) {
    var n = e.prefixCls, r = e.className, a = e.trigger, o = e.children, l = e.defaultCollapsed,
      c = l === void 0 ? !1 : l, i = e.theme, u = i === void 0 ? "dark" : i, v = e.style, f = v === void 0 ? {} : v,
      p = e.collapsible, C = p === void 0 ? !1 : p, h = e.reverseArrow, y = h === void 0 ? !1 : h, m = e.width,
      x = m === void 0 ? 200 : m, b = e.collapsedWidth, N = b === void 0 ? 80 : b, P = e.zeroWidthTriggerStyle,
      O = e.breakpoint, w = e.onCollapse, R = e.onBreakpoint,
      I = cs(e, ["prefixCls", "className", "trigger", "children", "defaultCollapsed", "theme", "style", "collapsible", "reverseArrow", "width", "collapsedWidth", "zeroWidthTriggerStyle", "breakpoint", "onCollapse", "onBreakpoint"]),
      _ = d.exports.useContext(Ro), $ = _.siderHook, M = d.exports.useState("collapsed" in I ? I.collapsed : c),
      E = le(M, 2), T = E[0], k = E[1], V = d.exports.useState(!1), z = le(V, 2), j = z[0], D = z[1];
    d.exports.useEffect(function () {
      "collapsed" in I && k(I.collapsed)
    }, [I.collapsed]);
    var B = function (L, q) {
      "collapsed" in I || k(L), w == null || w(L, q)
    }, te = d.exports.useRef();
    te.current = function (A) {
      D(A.matches), R == null || R(A.matches), T !== A.matches && B(A.matches, "responsive")
    }, d.exports.useEffect(function () {
      function A(Q) {
        return te.current(Q)
      }

      var L;
      if (typeof window < "u") {
        var q = window, H = q.matchMedia;
        if (H && O && O in na) {
          L = H("(max-width: ".concat(na[O], ")"));
          try {
            L.addEventListener("change", A)
          } catch {
            L.addListener(A)
          }
          A(L)
        }
      }
      return function () {
        try {
          L == null || L.removeEventListener("change", A)
        } catch {
          L == null || L.removeListener(A)
        }
      }
    }, [O]), d.exports.useEffect(function () {
      var A = ss("ant-sider-");
      return $.addSider(A), function () {
        return $.removeSider(A)
      }
    }, []);
    var ne = function () {
      B(!T, "clickTrigger")
    }, X = d.exports.useContext(oe), Z = X.getPrefixCls, G = function () {
      var L, q = Z("layout-sider", n), H = Ve(I, ["collapsed"]), Q = T ? N : x,
        J = ts(Q) ? "".concat(Q, "px") : String(Q), de = parseFloat(String(N || 0)) === 0 ? s("span", {
          onClick: ne,
          className: F("".concat(q, "-zero-width-trigger"), "".concat(q, "-zero-width-trigger-").concat(y ? "right" : "left")),
          style: P,
          children: a || s(zi, {})
        }) : null, ae = { expanded: y ? s(vr, {}) : s(ln, {}), collapsed: y ? s(ln, {}) : s(vr, {}) },
        pe = T ? "collapsed" : "expanded", Y = ae[pe], ie = a !== null ? de || s("div", {
          className: "".concat(q, "-trigger"),
          onClick: ne,
          style: { width: J },
          children: a || Y
        }) : null, ue = S(S({}, f), { flex: "0 0 ".concat(J), maxWidth: J, minWidth: J, width: J }),
        xe = F(q, "".concat(q, "-").concat(u), (L = {}, g(L, "".concat(q, "-collapsed"), !!T), g(L, "".concat(q, "-has-trigger"), C && a !== null && !de), g(L, "".concat(q, "-below"), !!j), g(L, "".concat(q, "-zero-width"), parseFloat(J) === 0), L), r);
      return re("aside", {
        className: xe, ...H,
        style: ue,
        ref: t,
        children: [s("div", { className: "".concat(q, "-children"), children: o }), C || j && de ? ie : null]
      })
    }, K = d.exports.useMemo(function () {
      return { siderCollapsed: T }
    }, [T]);
    return s(Mn.Provider, { value: K, children: G() })
  });
const ds = us;
var fs = globalThis && globalThis.__rest || function (e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var a = 0, r = Object.getOwnPropertySymbols(e); a < r.length; a++) t.indexOf(r[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[a]) && (n[r[a]] = e[r[a]]);
  return n
}, vs = function (t) {
  var n = t.prefixCls, r = t.className, a = t.dashed, o = fs(t, ["prefixCls", "className", "dashed"]),
    l = d.exports.useContext(oe), c = l.getPrefixCls, i = c("menu", n),
    u = F(g({}, "".concat(i, "-item-divider-dashed"), !!a), r);
  return s(_l, { className: u, ...o })
};
const $o = vs;
var ms = d.exports.createContext({ prefixCls: "", firstLevel: !0, inlineCollapsed: !1 });
const Cr = ms;
var ps = globalThis && globalThis.__rest || function (e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var a = 0, r = Object.getOwnPropertySymbols(e); a < r.length; a++) t.indexOf(r[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[a]) && (n[r[a]] = e[r[a]]);
  return n
}, Dn = function (e) {
  Ir(n, e);
  var t = kr(n);

  function n() {
    var r;
    return _r(this, n), r = t.apply(this, arguments), r.renderItem = function (a) {
      var o, l = a.siderCollapsed, c, i = r.context, u = i.prefixCls, v = i.firstLevel, f = i.inlineCollapsed,
        p = i.direction, C = i.disableMenuItemTitleTooltip, h = r.props, y = h.className, m = h.children, x = r.props,
        b = x.title, N = x.icon, P = x.danger, O = ps(x, ["title", "icon", "danger"]), w = b;
      typeof b > "u" ? w = v ? m : "" : b === !1 && (w = "");
      var R = { title: w };
      !l && !f && (R.title = null, R.open = !1);
      var I = Xt(m).length, _ = re(Rl, {
        ...O,
        className: F((o = {}, g(o, "".concat(u, "-item-danger"), P), g(o, "".concat(u, "-item-only-child"), (N ? I + 1 : I) === 1), o), y),
        title: typeof b == "string" ? b : void 0,
        children: [ze(N, { className: F(Xe(N) ? (c = N.props) === null || c === void 0 ? void 0 : c.className : "", "".concat(u, "-item-icon")) }), r.renderItemChildren(f)]
      });
      return C || (_ = s(Zt, {
        ...R,
        placement: p === "rtl" ? "left" : "right",
        overlayClassName: "".concat(u, "-inline-collapsed-tooltip"),
        children: _
      })), _
    }, r
  }

  return Rr(n, [{
    key: "renderItemChildren", value: function (a) {
      var o = this.context, l = o.prefixCls, c = o.firstLevel, i = this.props, u = i.icon, v = i.children,
        f = s("span", { className: "".concat(l, "-title-content"), children: v });
      return (!u || Xe(v) && v.type === "span") && v && a && c && typeof v == "string" ? s("div", {
        className: "".concat(l, "-inline-collapsed-noicon"),
        children: v.charAt(0)
      }) : f
    }
  }, {
    key: "render", value: function () {
      return s(Mn.Consumer, { children: this.renderItem })
    }
  }]), n
}(d.exports.Component);
Dn.contextType = Cr;

function To(e) {
  var t, n = e.popupClassName, r = e.icon, a = e.title, o = e.theme, l = d.exports.useContext(Cr), c = l.prefixCls,
    i = l.inlineCollapsed, u = l.antdMenuTheme, v = $l(), f;
  if (!r) f = i && !v.length && a && typeof a == "string" ? s("div", {
    className: "".concat(c, "-inline-collapsed-noicon"),
    children: a.charAt(0)
  }) : s("span", { className: "".concat(c, "-title-content"), children: a }); else {
    var p = Xe(a) && a.type === "span";
    f = re(He, {
      children: [ze(r, { className: F(Xe(r) ? (t = r.props) === null || t === void 0 ? void 0 : t.className : "", "".concat(c, "-item-icon")) }), p ? a : s("span", {
        className: "".concat(c, "-title-content"),
        children: a
      })]
    })
  }
  var C = d.exports.useMemo(function () {
    return S(S({}, l), { firstLevel: !1 })
  }, [l]);
  return s(Cr.Provider, {
    value: C,
    children: s(Tl, { ...Ve(e, ["icon"]), title: f, popupClassName: F(c, "".concat(c, "-").concat(o || u), n) })
  })
}

var hs = globalThis && globalThis.__rest || function (e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var a = 0, r = Object.getOwnPropertySymbols(e); a < r.length; a++) t.indexOf(r[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[a]) && (n[r[a]] = e[r[a]]);
  return n
};

function pn(e) {
  return (e || []).map(function (t, n) {
    if (t && $e(t) === "object") {
      var r = t, a = r.label, o = r.children, l = r.key, c = r.type, i = hs(r, ["label", "children", "key", "type"]),
        u = l != null ? l : "tmp-".concat(n);
      return o || c === "group" ? c === "group" ? s(La, { ...i, title: a, children: pn(o) }, u) : s(To, {
        ...i,
        title: a,
        children: pn(o)
      }, u) : c === "divider" ? s($o, { ...i }, u) : s(Dn, { ...i, children: a }, u)
    }
    return null
  }).filter(function (t) {
    return t
  })
}

function gs(e) {
  return d.exports.useMemo(function () {
    return e && pn(e)
  }, [e])
}

var Cs = globalThis && globalThis.__rest || function (e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var a = 0, r = Object.getOwnPropertySymbols(e); a < r.length; a++) t.indexOf(r[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[a]) && (n[r[a]] = e[r[a]]);
  return n
}, hn = d.exports.createContext(null), Eo = function (t) {
  var n = t.children, r = Cs(t, ["children"]), a = d.exports.useContext(hn), o = d.exports.useMemo(function () {
    return S(S({}, a), r)
  }, [a, r.prefixCls, r.mode, r.selectable]);
  return s(hn.Provider, { value: o, children: n })
};
const aa = hn;
var xs = globalThis && globalThis.__rest || function (e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var a = 0, r = Object.getOwnPropertySymbols(e); a < r.length; a++) t.indexOf(r[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[a]) && (n[r[a]] = e[r[a]]);
  return n
}, bs = d.exports.forwardRef(function (e, t) {
  var n, r = d.exports.useContext(aa) || {}, a = d.exports.useContext(oe), o = a.getPrefixCls, l = a.getPopupContainer,
    c = a.direction, i = o(), u = e.prefixCls, v = e.className, f = e.theme, p = f === void 0 ? "light" : f,
    C = e.expandIcon, h = e._internalDisableMenuItemTitleTooltip, y = e.inlineCollapsed, m = e.siderCollapsed,
    x = e.items, b = e.children, N = e.mode, P = e.selectable, O = e.onClick,
    w = xs(e, ["prefixCls", "className", "theme", "expandIcon", "_internalDisableMenuItemTitleTooltip", "inlineCollapsed", "siderCollapsed", "items", "children", "mode", "selectable", "onClick"]),
    R = Ve(w, ["collapsedWidth"]), I = gs(x) || b;
  (n = r.validator) === null || n === void 0 || n.call(r, { mode: N });
  var _ = Oa(function () {
    var D;
    O == null || O.apply(void 0, arguments), (D = r == null ? void 0 : r.onClick) === null || D === void 0 || D.call(r)
  }), $ = r.mode || N, M = P != null ? P : r.selectable, E = d.exports.useMemo(function () {
    return m !== void 0 ? m : y
  }, [y, m]), T = {
    horizontal: { motionName: "".concat(i, "-slide-up") },
    inline: Yt,
    other: { motionName: "".concat(i, "-zoom-big") }
  }, k = o("menu", u || r.prefixCls), V = F("".concat(k, "-").concat(p), v), z;
  typeof C == "function" ? z = C : z = ze(C || r.expandIcon, { className: "".concat(k, "-submenu-expand-icon") });
  var j = d.exports.useMemo(function () {
    return {
      prefixCls: k,
      inlineCollapsed: E || !1,
      antdMenuTheme: p,
      direction: c,
      firstLevel: !0,
      disableMenuItemTitleTooltip: h
    }
  }, [k, E, p, c, h]);
  return s(aa.Provider, {
    value: null,
    children: s(Cr.Provider, {
      value: j,
      children: s(El, {
        getPopupContainer: l,
        overflowedIndicator: s(kn, {}),
        overflowedIndicatorPopupClassName: "".concat(k, "-").concat(p),
        mode: $,
        selectable: M,
        onClick: _, ...R,
        inlineCollapsed: E,
        className: V,
        prefixCls: k,
        direction: c,
        defaultMotions: T,
        expandIcon: z,
        ref: t,
        children: I
      })
    })
  })
}), er = function (e) {
  Ir(n, e);
  var t = kr(n);

  function n() {
    var r;
    return _r(this, n), r = t.apply(this, arguments), r.focus = function (a) {
      var o;
      (o = r.menu) === null || o === void 0 || o.focus(a)
    }, r
  }

  return Rr(n, [{
    key: "render", value: function () {
      var a = this;
      return s(Mn.Consumer, {
        children: function (o) {
          return s(bs, {
            ref: function (c) {
              a.menu = c
            }, ...a.props, ...o
          })
        }
      })
    }
  }]), n
}(d.exports.Component);
er.Divider = $o;
er.Item = Dn;
er.SubMenu = To;
er.ItemGroup = La;
const Fn = er;
var ys = 0, Mt = {};

function xr(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1, n = ys++, r = t;

  function a() {
    r -= 1, r <= 0 ? (e(), delete Mt[n]) : Mt[n] = Ot(a)
  }

  return Mt[n] = Ot(a), n
}

xr.cancel = function (t) {
  t !== void 0 && (Ot.cancel(Mt[t]), delete Mt[t])
};
xr.ids = Mt;
var Xr;

function oa(e) {
  return !e || e.offsetParent === null || e.hidden
}

function Ps(e) {
  return e instanceof Document ? e.body : Array.from(e.childNodes).find(function (t) {
    return (t == null ? void 0 : t.nodeType) === Node.ELEMENT_NODE
  })
}

function ws(e) {
  var t = (e || "").match(/rgba?\((\d*), (\d*), (\d*)(, [\d.]*)?\)/);
  return t && t[1] && t[2] && t[3] ? !(t[1] === t[2] && t[2] === t[3]) : !0
}

var Mo = function (e) {
  Ir(n, e);
  var t = kr(n);

  function n() {
    var r;
    return _r(this, n), r = t.apply(this, arguments), r.containerRef = d.exports.createRef(), r.animationStart = !1, r.destroyed = !1, r.onClick = function (a, o) {
      var l, c, i = r.props, u = i.insertExtraNode, v = i.disabled;
      if (!(v || !a || oa(a) || a.className.includes("-leave"))) {
        r.extraNode = document.createElement("div");
        var f = _i(r), p = f.extraNode, C = r.context.getPrefixCls;
        p.className = "".concat(C(""), "-click-animating-node");
        var h = r.getAttributeName();
        if (a.setAttribute(h, "true"), o && o !== "#fff" && o !== "#ffffff" && o !== "rgb(255, 255, 255)" && o !== "rgba(255, 255, 255, 1)" && ws(o) && !/rgba\((?:\d*, ){3}0\)/.test(o) && o !== "transparent") {
          p.style.borderColor = o;
          var y = ((l = a.getRootNode) === null || l === void 0 ? void 0 : l.call(a)) || a.ownerDocument,
            m = (c = Ps(y)) !== null && c !== void 0 ? c : y;
          Xr = Na(`
      [`.concat(C(""), "-click-animating-without-extra-node='true']::after, .").concat(C(""), `-click-animating-node {
        --antd-wave-shadow-color: `).concat(o, `;
      }`), "antd-wave", { csp: r.csp, attachTo: m })
        }
        u && a.appendChild(p), ["transition", "animation"].forEach(function (x) {
          a.addEventListener("".concat(x, "start"), r.onTransitionStart), a.addEventListener("".concat(x, "end"), r.onTransitionEnd)
        })
      }
    }, r.onTransitionStart = function (a) {
      if (!r.destroyed) {
        var o = r.containerRef.current;
        !a || a.target !== o || r.animationStart || r.resetEffect(o)
      }
    }, r.onTransitionEnd = function (a) {
      !a || a.animationName !== "fadeEffect" || r.resetEffect(a.target)
    }, r.bindAnimationEvent = function (a) {
      if (!(!a || !a.getAttribute || a.getAttribute("disabled") || a.className.includes("disabled"))) {
        var o = function (c) {
          if (!(c.target.tagName === "INPUT" || oa(c.target))) {
            r.resetEffect(a);
            var i = getComputedStyle(a).getPropertyValue("border-top-color") || getComputedStyle(a).getPropertyValue("border-color") || getComputedStyle(a).getPropertyValue("background-color");
            r.clickWaveTimeoutId = window.setTimeout(function () {
              return r.onClick(a, i)
            }, 0), xr.cancel(r.animationStartId), r.animationStart = !0, r.animationStartId = xr(function () {
              r.animationStart = !1
            }, 10)
          }
        };
        return a.addEventListener("click", o, !0), {
          cancel: function () {
            a.removeEventListener("click", o, !0)
          }
        }
      }
    }, r.renderWave = function (a) {
      var o = a.csp, l = r.props.children;
      if (r.csp = o, !d.exports.isValidElement(l)) return l;
      var c = r.containerRef;
      return Ia(l) && (c = Lt(l.ref, r.containerRef)), ze(l, { ref: c })
    }, r
  }

  return Rr(n, [{
    key: "componentDidMount", value: function () {
      this.destroyed = !1;
      var a = this.containerRef.current;
      !a || a.nodeType !== 1 || (this.instance = this.bindAnimationEvent(a))
    }
  }, {
    key: "componentWillUnmount", value: function () {
      this.instance && this.instance.cancel(), this.clickWaveTimeoutId && clearTimeout(this.clickWaveTimeoutId), this.destroyed = !0
    }
  }, {
    key: "getAttributeName", value: function () {
      var a = this.context.getPrefixCls, o = this.props.insertExtraNode;
      return o ? "".concat(a(""), "-click-animating") : "".concat(a(""), "-click-animating-without-extra-node")
    }
  }, {
    key: "resetEffect", value: function (a) {
      var o = this;
      if (!(!a || a === this.extraNode || !(a instanceof Element))) {
        var l = this.props.insertExtraNode, c = this.getAttributeName();
        a.setAttribute(c, "false"), Xr && (Xr.innerHTML = ""), l && this.extraNode && a.contains(this.extraNode) && a.removeChild(this.extraNode), ["transition", "animation"].forEach(function (i) {
          a.removeEventListener("".concat(i, "start"), o.onTransitionStart), a.removeEventListener("".concat(i, "end"), o.onTransitionEnd)
        })
      }
    }
  }, {
    key: "render", value: function () {
      return s(st, { children: this.renderWave })
    }
  }]), n
}(d.exports.Component);
Mo.contextType = oe;
const Do = Mo;
var Ss = globalThis && globalThis.__rest || function (e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var a = 0, r = Object.getOwnPropertySymbols(e); a < r.length; a++) t.indexOf(r[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[a]) && (n[r[a]] = e[r[a]]);
  return n
}, Fo = d.exports.createContext(void 0), Ns = function (t) {
  var n, r = d.exports.useContext(oe), a = r.getPrefixCls, o = r.direction, l = t.prefixCls, c = t.size,
    i = t.className, u = Ss(t, ["prefixCls", "size", "className"]), v = a("btn-group", l), f = "";
  switch (c) {
    case"large":
      f = "lg";
      break;
    case"small":
      f = "sm";
      break
  }
  var p = F(v, (n = {}, g(n, "".concat(v, "-").concat(f), f), g(n, "".concat(v, "-rtl"), o === "rtl"), n), i);
  return s(Fo.Provider, { value: c, children: s("div", { ...u, className: p }) })
};
const Os = Ns;
var Qr = function () {
  return { width: 0, opacity: 0, transform: "scale(0)" }
}, Jr = function (t) {
  return { width: t.scrollWidth, opacity: 1, transform: "scale(1)" }
}, Is = function (t) {
  var n = t.prefixCls, r = t.loading, a = t.existIcon, o = !!r;
  return a ? s("span", { className: "".concat(n, "-loading-icon"), children: s(gt, {}) }) : s(Or, {
    visible: o,
    motionName: "".concat(n, "-loading-icon-motion"),
    removeOnLeave: !0,
    onAppearStart: Qr,
    onAppearActive: Jr,
    onEnterStart: Qr,
    onEnterActive: Jr,
    onLeaveStart: Jr,
    onLeaveActive: Qr,
    children: function (l, c) {
      var i = l.className, u = l.style;
      return s("span", {
        className: "".concat(n, "-loading-icon"),
        style: u,
        ref: c,
        children: s(gt, { className: i })
      })
    }
  })
};
const ks = Is;
var _s = globalThis && globalThis.__rest || function (e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var a = 0, r = Object.getOwnPropertySymbols(e); a < r.length; a++) t.indexOf(r[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[a]) && (n[r[a]] = e[r[a]]);
  return n
}, ia = /^[\u4e00-\u9fa5]{2}$/, gn = ia.test.bind(ia);

function Rs(e) {
  return typeof e == "string"
}

function Zr(e) {
  return e === "text" || e === "link"
}

function $s(e, t) {
  if (e != null) {
    var n = t ? " " : "";
    return typeof e != "string" && typeof e != "number" && Rs(e.type) && gn(e.props.children) ? ze(e, { children: e.props.children.split("").join(n) }) : typeof e == "string" ? gn(e) ? s("span", { children: e.split("").join(n) }) : s("span", { children: e }) : xo(e) ? s("span", { children: e }) : e
  }
}

function Ts(e, t) {
  var n = !1, r = [];
  return d.exports.Children.forEach(e, function (a) {
    var o = $e(a), l = o === "string" || o === "number";
    if (n && l) {
      var c = r.length - 1, i = r[c];
      r[c] = "".concat(i).concat(a)
    } else r.push(a);
    n = l
  }), d.exports.Children.map(r, function (a) {
    return $s(a, t)
  })
}

qe("default", "primary", "ghost", "dashed", "link", "text");
qe("default", "circle", "round");
qe("submit", "button", "reset");

function zo(e) {
  return e === "danger" ? { danger: !0 } : { type: e }
}

var Es = function (t, n) {
  var r, a = t.loading, o = a === void 0 ? !1 : a, l = t.prefixCls, c = t.type, i = c === void 0 ? "default" : c,
    u = t.danger, v = t.shape, f = v === void 0 ? "default" : v, p = t.size, C = t.disabled, h = t.className,
    y = t.children, m = t.icon, x = t.ghost, b = x === void 0 ? !1 : x, N = t.block, P = N === void 0 ? !1 : N,
    O = t.htmlType, w = O === void 0 ? "button" : O,
    R = _s(t, ["loading", "prefixCls", "type", "danger", "shape", "size", "disabled", "className", "children", "icon", "ghost", "block", "htmlType"]),
    I = d.exports.useContext(tt), _ = d.exports.useContext(it), $ = C != null ? C : _, M = d.exports.useContext(Fo),
    E = d.exports.useState(!!o), T = le(E, 2), k = T[0], V = T[1], z = d.exports.useState(!1), j = le(z, 2), D = j[0],
    B = j[1], te = d.exports.useContext(oe), ne = te.getPrefixCls, X = te.autoInsertSpaceInButton, Z = te.direction,
    G = n || d.exports.createRef(), K = function () {
      return d.exports.Children.count(y) === 1 && !m && !Zr(i)
    }, A = function () {
      if (!(!G || !G.current || X === !1)) {
        var ge = G.current.textContent;
        K() && gn(ge) ? D || B(!0) : D && B(!1)
      }
    }, L = typeof o == "boolean" ? o : (o == null ? void 0 : o.delay) || !0;
  d.exports.useEffect(function () {
    var ee = null;
    return typeof L == "number" ? ee = window.setTimeout(function () {
      ee = null, V(L)
    }, L) : V(L), function () {
      ee && (window.clearTimeout(ee), ee = null)
    }
  }, [L]), d.exports.useEffect(A, [G]);
  var q = function (ge) {
      var be = t.onClick;
      if (k || $) {
        ge.preventDefault();
        return
      }
      be == null || be(ge)
    }, H = ne("btn", l), Q = X !== !1, J = _t(H, Z), de = J.compactSize, ae = J.compactItemClassnames,
    pe = { large: "lg", small: "sm", middle: void 0 }, Y = de || M || p || I, ie = Y && pe[Y] || "",
    ue = k ? "loading" : m, xe = Ve(R, ["navigate"]),
    fe = F(H, (r = {}, g(r, "".concat(H, "-").concat(f), f !== "default" && f), g(r, "".concat(H, "-").concat(i), i), g(r, "".concat(H, "-").concat(ie), ie), g(r, "".concat(H, "-icon-only"), !y && y !== 0 && !!ue), g(r, "".concat(H, "-background-ghost"), b && !Zr(i)), g(r, "".concat(H, "-loading"), k), g(r, "".concat(H, "-two-chinese-chars"), D && Q && !k), g(r, "".concat(H, "-block"), P), g(r, "".concat(H, "-dangerous"), !!u), g(r, "".concat(H, "-rtl"), Z === "rtl"), g(r, "".concat(H, "-disabled"), xe.href !== void 0 && $), r), ae, h),
    ce = m && !k ? m : s(ks, { existIcon: !!m, prefixCls: H, loading: !!k }), W = y || y === 0 ? Ts(y, K() && Q) : null;
  if (xe.href !== void 0) return re("a", { ...xe, className: fe, onClick: q, ref: G, children: [ce, W] });
  var U = re("button", { ...R, type: w, className: fe, onClick: q, disabled: $, ref: G, children: [ce, W] });
  return Zr(i) ? U : s(Do, { disabled: !!k, children: U })
}, zn = d.exports.forwardRef(Es);
zn.Group = Os;
zn.__ANT_BUTTON = !0;
const ot = zn;
var Ms = function () {
  return Sa() && window.document.documentElement
}, ir, Ds = function () {
  if (!Ms()) return !1;
  if (ir !== void 0) return ir;
  var t = document.createElement("div");
  return t.style.display = "flex", t.style.flexDirection = "column", t.style.rowGap = "1px", t.appendChild(document.createElement("div")), t.appendChild(document.createElement("div")), document.body.appendChild(t), ir = t.scrollHeight === 1, document.body.removeChild(t), ir
};
const Lo = function () {
  var e = d.exports.useState(!1), t = le(e, 2), n = t[0], r = t[1];
  return d.exports.useEffect(function () {
    r(Ds())
  }, []), n
};

function Fs(e) {
  var t = e.className, n = e.direction, r = e.index, a = e.marginDirection, o = e.children, l = e.split, c = e.wrap,
    i = d.exports.useContext(jo), u = i.horizontalSize, v = i.verticalSize, f = i.latestIndex, p = i.supportFlexGap,
    C = {};
  return p || (n === "vertical" ? r < f && (C = { marginBottom: u / (l ? 2 : 1) }) : C = S(S({}, r < f && g({}, a, u / (l ? 2 : 1))), c && { paddingBottom: v })), o == null ? null : re(He, {
    children: [s("div", {
      className: t,
      style: C,
      children: o
    }), r < f && l && s("span", { className: "".concat(t, "-split"), style: C, children: l })]
  })
}

var zs = globalThis && globalThis.__rest || function (e, t) {
    var n = {};
    for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
    if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var a = 0, r = Object.getOwnPropertySymbols(e); a < r.length; a++) t.indexOf(r[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[a]) && (n[r[a]] = e[r[a]]);
    return n
  }, jo = d.exports.createContext({ latestIndex: 0, horizontalSize: 0, verticalSize: 0, supportFlexGap: !1 }),
  Ls = { small: 8, middle: 16, large: 24 };

function js(e) {
  return typeof e == "string" ? Ls[e] : e || 0
}

var As = function (t) {
  var n, r = d.exports.useContext(oe), a = r.getPrefixCls, o = r.space, l = r.direction, c = t.size,
    i = c === void 0 ? (o == null ? void 0 : o.size) || "small" : c, u = t.align, v = t.className, f = t.children,
    p = t.direction, C = p === void 0 ? "horizontal" : p, h = t.prefixCls, y = t.split, m = t.style, x = t.wrap,
    b = x === void 0 ? !1 : x,
    N = zs(t, ["size", "align", "className", "children", "direction", "prefixCls", "split", "style", "wrap"]), P = Lo(),
    O = d.exports.useMemo(function () {
      return (Array.isArray(i) ? i : [i, i]).map(function (B) {
        return js(B)
      })
    }, [i]), w = le(O, 2), R = w[0], I = w[1], _ = Xt(f, { keepEmpty: !0 }),
    $ = u === void 0 && C === "horizontal" ? "center" : u, M = a("space", h),
    E = F(M, "".concat(M, "-").concat(C), (n = {}, g(n, "".concat(M, "-rtl"), l === "rtl"), g(n, "".concat(M, "-align-").concat($), $), n), v),
    T = "".concat(M, "-item"), k = l === "rtl" ? "marginLeft" : "marginRight", V = 0, z = _.map(function (B, te) {
      B != null && (V = te);
      var ne = B && B.key || "".concat(T, "-").concat(te);
      return s(Fs, { className: T, direction: C, index: te, marginDirection: k, split: y, wrap: b, children: B }, ne)
    }), j = d.exports.useMemo(function () {
      return { horizontalSize: R, verticalSize: I, latestIndex: V, supportFlexGap: P }
    }, [R, I, V, P]);
  if (_.length === 0) return null;
  var D = {};
  return b && (D.flexWrap = "wrap", P || (D.marginBottom = -I)), P && (D.columnGap = R, D.rowGap = I), s("div", {
    className: E,
    style: S(S({}, D), m), ...N,
    children: s(jo.Provider, { value: j, children: z })
  })
}, Ao = As;
Ao.Compact = jc;
const Bs = Ao;
var Ks = globalThis && globalThis.__rest || function (e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var a = 0, r = Object.getOwnPropertySymbols(e); a < r.length; a++) t.indexOf(r[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[a]) && (n[r[a]] = e[r[a]]);
  return n
}, Bo = function (t) {
  var n = d.exports.useContext(oe), r = n.getPopupContainer, a = n.getPrefixCls, o = n.direction, l = t.prefixCls,
    c = t.type, i = c === void 0 ? "default" : c, u = t.danger, v = t.disabled, f = t.loading, p = t.onClick,
    C = t.htmlType, h = t.children, y = t.className, m = t.menu, x = t.arrow, b = t.autoFocus, N = t.overlay,
    P = t.trigger, O = t.align, w = t.visible, R = t.open, I = t.onVisibleChange, _ = t.onOpenChange, $ = t.placement,
    M = t.getPopupContainer, E = t.href, T = t.icon, k = T === void 0 ? s(kn, {}) : T, V = t.title, z = t.buttonsRender,
    j = z === void 0 ? function (ie) {
      return ie
    } : z, D = t.mouseEnterDelay, B = t.mouseLeaveDelay, te = t.overlayClassName, ne = t.overlayStyle,
    X = t.destroyPopupOnHide,
    Z = Ks(t, ["prefixCls", "type", "danger", "disabled", "loading", "onClick", "htmlType", "children", "className", "menu", "arrow", "autoFocus", "overlay", "trigger", "align", "visible", "open", "onVisibleChange", "onOpenChange", "placement", "getPopupContainer", "href", "icon", "title", "buttonsRender", "mouseEnterDelay", "mouseLeaveDelay", "overlayClassName", "overlayStyle", "destroyPopupOnHide"]),
    G = a("dropdown-button", l), K = {
      menu: m,
      arrow: x,
      autoFocus: b,
      align: O,
      overlay: N,
      disabled: v,
      trigger: v ? [] : P,
      onOpenChange: _ || I,
      getPopupContainer: M || r,
      mouseEnterDelay: D,
      mouseLeaveDelay: B,
      overlayClassName: te,
      overlayStyle: ne,
      destroyPopupOnHide: X
    }, A = _t(G, o), L = A.compactSize, q = A.compactItemClassnames, H = F(G, q, y);
  "open" in t ? K.open = R : "visible" in t && (K.open = w), "placement" in t ? K.placement = $ : K.placement = o === "rtl" ? "bottomLeft" : "bottomRight";
  var Q = s(ot, {
    type: i,
    danger: u,
    disabled: v,
    loading: f,
    onClick: p,
    htmlType: C,
    href: E,
    title: V,
    children: h
  }), J = s(ot, { type: i, danger: u, icon: k }), de = j([Q, J]), ae = le(de, 2), pe = ae[0], Y = ae[1];
  return re(Bs.Compact, { className: H, size: L, block: !0, ...Z, children: [pe, s(Fr, { ...K, children: Y })] })
};
Bo.__ANT_BUTTON = !0;
const Vs = Bo;
qe("topLeft", "topCenter", "topRight", "bottomLeft", "bottomCenter", "bottomRight", "top", "bottom");
var Ko = function (t) {
  var n = d.exports.useContext(oe), r = n.getPopupContainer, a = n.getPrefixCls, o = n.direction, l = function () {
      var G = a(), K = t.placement, A = K === void 0 ? "" : K, L = t.transitionName;
      return L !== void 0 ? L : A.includes("top") ? "".concat(G, "-slide-down") : "".concat(G, "-slide-up")
    }, c = function () {
      var G = t.placement;
      if (!G) return o === "rtl" ? "bottomRight" : "bottomLeft";
      if (G.includes("Center")) {
        var K = G.slice(0, G.indexOf("Center"));
        return K
      }
      return G
    }, i = t.menu, u = t.arrow, v = t.prefixCls, f = t.children, p = t.trigger, C = t.disabled, h = t.dropdownRender,
    y = t.getPopupContainer, m = t.overlayClassName, x = t.visible, b = t.open, N = t.onVisibleChange,
    P = t.onOpenChange, O = t.mouseEnterDelay, w = O === void 0 ? .15 : O, R = t.mouseLeaveDelay,
    I = R === void 0 ? .1 : R, _ = a("dropdown", v), $ = d.exports.Children.only(f), M = ze($, {
      className: F("".concat(_, "-trigger"), g({}, "".concat(_, "-rtl"), o === "rtl"), $.props.className),
      disabled: C
    }), E = C ? [] : p, T;
  E && E.includes("contextMenu") && (T = !0);
  var k = It(!1, { value: b !== void 0 ? b : x }), V = le(k, 2), z = V[0], j = V[1], D = Oa(function (Z) {
      N == null || N(Z), P == null || P(Z), j(Z)
    }), B = F(m, g({}, "".concat(_, "-rtl"), o === "rtl")),
    te = ko({ arrowPointAtCenter: $e(u) === "object" && u.pointAtCenter, autoAdjustOverflow: !0 }),
    ne = d.exports.useCallback(function () {
      j(!1)
    }, []), X = function () {
      var G = t.overlay, K;
      return i != null && i.items ? K = s(Fn, { ...i }) : typeof G == "function" ? K = G() : K = G, h && (K = h(K)), K = d.exports.Children.only(typeof K == "string" ? s("span", { children: K }) : K), s(Eo, {
        prefixCls: "".concat(_, "-menu"),
        expandIcon: s("span", {
          className: "".concat(_, "-menu-submenu-arrow"),
          children: s(vr, { className: "".concat(_, "-menu-submenu-arrow-icon") })
        }),
        mode: "vertical",
        selectable: !1,
        onClick: ne,
        validator: function (L) {
          L.mode
        },
        children: K
      })
    };
  return s(Ll, {
    alignPoint: T, ...t,
    mouseEnterDelay: w,
    mouseLeaveDelay: I,
    visible: z,
    builtinPlacements: te,
    arrow: !!u,
    overlayClassName: B,
    prefixCls: _,
    getPopupContainer: y || r,
    transitionName: l(),
    trigger: E,
    overlay: X,
    placement: c(),
    onVisibleChange: D,
    children: M
  })
};
Ko.Button = Vs;
const Fr = Ko;
var Us = globalThis && globalThis.__rest || function (e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var a = 0, r = Object.getOwnPropertySymbols(e); a < r.length; a++) t.indexOf(r[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[a]) && (n[r[a]] = e[r[a]]);
  return n
}, Vo = function (t) {
  var n = t.prefixCls, r = t.separator, a = r === void 0 ? "/" : r, o = t.children, l = t.menu, c = t.overlay,
    i = t.dropdownProps, u = Us(t, ["prefixCls", "separator", "children", "menu", "overlay", "dropdownProps"]),
    v = d.exports.useContext(oe), f = v.getPrefixCls, p = f("breadcrumb", n), C = function (m) {
      return l || c ? s(Fr, {
        menu: l,
        overlay: c,
        placement: "bottom", ...i,
        children: re("span", { className: "".concat(p, "-overlay-link"), children: [m, s(In, {})] })
      }) : m
    }, h;
  return "href" in u ? h = s("a", {
    className: "".concat(p, "-link"), ...u,
    children: o
  }) : h = s("span", {
    className: "".concat(p, "-link"), ...u,
    children: o
  }), h = C(h), o != null ? re("li", {
    children: [h, a && s("span", {
      className: "".concat(p, "-separator"),
      children: a
    })]
  }) : null
};
Vo.__ANT_BREADCRUMB_ITEM = !0;
const Uo = Vo;
var Wo = function (t) {
  var n = t.children, r = d.exports.useContext(oe), a = r.getPrefixCls, o = a("breadcrumb");
  return s("span", { className: "".concat(o, "-separator"), children: n || "/" })
};
Wo.__ANT_BREADCRUMB_SEPARATOR = !0;
const Ws = Wo;
var Gs = globalThis && globalThis.__rest || function (e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var a = 0, r = Object.getOwnPropertySymbols(e); a < r.length; a++) t.indexOf(r[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[a]) && (n[r[a]] = e[r[a]]);
  return n
};

function Hs(e, t) {
  if (!e.breadcrumbName) return null;
  var n = Object.keys(t).join("|"), r = e.breadcrumbName.replace(new RegExp(":(".concat(n, ")"), "g"), function (a, o) {
    return t[o] || a
  });
  return r
}

function qs(e, t, n, r) {
  var a = n.indexOf(e) === n.length - 1, o = Hs(e, t);
  return a ? s("span", { children: o }) : s("a", { href: "#/".concat(r.join("/")), children: o })
}

var Go = function (t, n) {
  return t = (t || "").replace(/^\//, ""), Object.keys(n).forEach(function (r) {
    t = t.replace(":".concat(r), n[r])
  }), t
}, Ys = function (t, n, r) {
  var a = ye(t), o = Go(n || "", r);
  return o && a.push(o), a
}, Ln = function (t) {
  var n = t.prefixCls, r = t.separator, a = r === void 0 ? "/" : r, o = t.style, l = t.className, c = t.routes,
    i = t.children, u = t.itemRender, v = u === void 0 ? qs : u, f = t.params, p = f === void 0 ? {} : f,
    C = Gs(t, ["prefixCls", "separator", "style", "className", "routes", "children", "itemRender", "params"]),
    h = d.exports.useContext(oe), y = h.getPrefixCls, m = h.direction, x, b = y("breadcrumb", n);
  if (c && c.length > 0) {
    var N = [];
    x = c.map(function (O) {
      var w = Go(O.path, p);
      w && N.push(w);
      var R;
      return O.children && O.children.length && (R = s(Fn, {
        items: O.children.map(function (I) {
          return { key: I.path || I.breadcrumbName, label: v(I, p, c, Ys(N, I.path, p)) }
        })
      })), s(Uo, { overlay: R, separator: a, children: v(O, p, c, N) }, w || O.breadcrumbName)
    })
  } else i && (x = Xt(i).map(function (O, w) {
    return O && ze(O, { separator: a, key: w })
  }));
  var P = F(b, g({}, "".concat(b, "-rtl"), m === "rtl"), l);
  return s("nav", { className: P, style: o, ...C, children: s("ol", { children: x }) })
};
Ln.Item = Uo;
Ln.Separator = Ws;
const gm = Ln;
var Ho = d.exports.createContext(null), Xs = Ho.Provider, qo = d.exports.createContext(null), Qs = qo.Provider,
  Js = globalThis && globalThis.__rest || function (e, t) {
    var n = {};
    for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
    if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var a = 0, r = Object.getOwnPropertySymbols(e); a < r.length; a++) t.indexOf(r[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[a]) && (n[r[a]] = e[r[a]]);
    return n
  }, Zs = function (t, n) {
    var r, a = d.exports.useContext(Ho), o = d.exports.useContext(qo), l = d.exports.useContext(oe), c = l.getPrefixCls,
      i = l.direction, u = d.exports.useRef(), v = Lt(n, u), f = d.exports.useContext(Qe), p = f.isFormItemInput,
      C = function ($) {
        var M, E;
        (M = t.onChange) === null || M === void 0 || M.call(t, $), (E = a == null ? void 0 : a.onChange) === null || E === void 0 || E.call(a, $)
      }, h = t.prefixCls, y = t.className, m = t.children, x = t.style, b = t.disabled,
      N = Js(t, ["prefixCls", "className", "children", "style", "disabled"]), P = c("radio", h),
      O = ((a == null ? void 0 : a.optionType) || o) === "button" ? "".concat(P, "-button") : P, w = S({}, N),
      R = d.exports.useContext(it);
    w.disabled = b || R, a && (w.name = a.name, w.onChange = C, w.checked = t.value === a.value, w.disabled = w.disabled || a.disabled);
    var I = F("".concat(O, "-wrapper"), (r = {}, g(r, "".concat(O, "-wrapper-checked"), w.checked), g(r, "".concat(O, "-wrapper-disabled"), w.disabled), g(r, "".concat(O, "-wrapper-rtl"), i === "rtl"), g(r, "".concat(O, "-wrapper-in-form-item"), p), r), y);
    return re("label", {
      className: I,
      style: x,
      onMouseEnter: t.onMouseEnter,
      onMouseLeave: t.onMouseLeave,
      children: [s(Ba, { ...w, type: "radio", prefixCls: O, ref: v }), m !== void 0 ? s("span", { children: m }) : null]
    })
  }, eu = d.exports.forwardRef(Zs);
const br = eu;
var tu = d.exports.forwardRef(function (e, t) {
  var n, r = d.exports.useContext(oe), a = r.getPrefixCls, o = r.direction, l = d.exports.useContext(tt),
    c = It(e.defaultValue, { value: e.value }), i = le(c, 2), u = i[0], v = i[1], f = function (j) {
      var D = u, B = j.target.value;
      "value" in e || v(B);
      var te = e.onChange;
      te && B !== D && te(j)
    }, p = e.prefixCls, C = e.className, h = C === void 0 ? "" : C, y = e.options, m = e.buttonStyle,
    x = m === void 0 ? "outline" : m, b = e.disabled, N = e.children, P = e.size, O = e.style, w = e.id,
    R = e.onMouseEnter, I = e.onMouseLeave, _ = e.onFocus, $ = e.onBlur, M = a("radio", p), E = "".concat(M, "-group"),
    T = N;
  y && y.length > 0 && (T = y.map(function (z) {
    return typeof z == "string" || typeof z == "number" ? s(br, {
      prefixCls: M,
      disabled: b,
      value: z,
      checked: u === z,
      children: z
    }, z.toString()) : s(br, {
      prefixCls: M,
      disabled: z.disabled || b,
      value: z.value,
      checked: u === z.value,
      style: z.style,
      children: z.label
    }, "radio-group-value-options-".concat(z.value))
  }));
  var k = P || l,
    V = F(E, "".concat(E, "-").concat(x), (n = {}, g(n, "".concat(E, "-").concat(k), k), g(n, "".concat(E, "-rtl"), o === "rtl"), n), h);
  return s("div", {
    ...yc(e),
    className: V,
    style: O,
    onMouseEnter: R,
    onMouseLeave: I,
    onFocus: _,
    onBlur: $,
    id: w,
    ref: t,
    children: s(Xs, {
      value: { onChange: f, value: u, disabled: e.disabled, name: e.name, optionType: e.optionType },
      children: T
    })
  })
});
const ru = d.exports.memo(tu);
var nu = globalThis && globalThis.__rest || function (e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var a = 0, r = Object.getOwnPropertySymbols(e); a < r.length; a++) t.indexOf(r[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[a]) && (n[r[a]] = e[r[a]]);
  return n
}, au = function (t, n) {
  var r = d.exports.useContext(oe), a = r.getPrefixCls, o = t.prefixCls, l = nu(t, ["prefixCls"]), c = a("radio", o);
  return s(Qs, { value: "button", children: s(br, { prefixCls: c, ...l, type: "radio", ref: n }) })
};
const ou = d.exports.forwardRef(au);
var zr = br;
zr.Button = ou;
zr.Group = ru;
zr.__ANT_RADIO = !0;
const Yo = zr;
var iu = function (t) {
  var n, r, a = t.prefixCls, o = t.className, l = t.style, c = t.size, i = t.shape,
    u = F((n = {}, g(n, "".concat(a, "-lg"), c === "large"), g(n, "".concat(a, "-sm"), c === "small"), n)),
    v = F((r = {}, g(r, "".concat(a, "-circle"), i === "circle"), g(r, "".concat(a, "-square"), i === "square"), g(r, "".concat(a, "-round"), i === "round"), r)),
    f = d.exports.useMemo(function () {
      return typeof c == "number" ? { width: c, height: c, lineHeight: "".concat(c, "px") } : {}
    }, [c]);
  return s("span", { className: F(a, u, v, o), style: S(S({}, f), l) })
};
const Lr = iu;
var lu = function (t) {
  var n = t.prefixCls, r = t.className, a = t.active, o = t.shape, l = o === void 0 ? "circle" : o, c = t.size,
    i = c === void 0 ? "default" : c, u = d.exports.useContext(oe), v = u.getPrefixCls, f = v("skeleton", n),
    p = Ve(t, ["prefixCls", "className"]), C = F(f, "".concat(f, "-element"), g({}, "".concat(f, "-active"), a), r);
  return s("div", { className: C, children: s(Lr, { prefixCls: "".concat(f, "-avatar"), shape: l, size: i, ...p }) })
};
const cu = lu;
var su = function (t) {
  var n, r = t.prefixCls, a = t.className, o = t.active, l = t.block, c = l === void 0 ? !1 : l, i = t.size,
    u = i === void 0 ? "default" : i, v = d.exports.useContext(oe), f = v.getPrefixCls, p = f("skeleton", r),
    C = Ve(t, ["prefixCls"]),
    h = F(p, "".concat(p, "-element"), (n = {}, g(n, "".concat(p, "-active"), o), g(n, "".concat(p, "-block"), c), n), a);
  return s("div", { className: h, children: s(Lr, { prefixCls: "".concat(p, "-button"), size: u, ...C }) })
};
const uu = su;
var du = function (t) {
  var n = t.prefixCls, r = t.className, a = t.style, o = t.active, l = t.children, c = d.exports.useContext(oe),
    i = c.getPrefixCls, u = i("skeleton", n), v = F(u, "".concat(u, "-element"), g({}, "".concat(u, "-active"), o), r),
    f = l != null ? l : s(Li, {});
  return s("div", {
    className: v,
    children: s("div", { className: F("".concat(u, "-image"), r), style: a, children: f })
  })
};
const fu = du;
var vu = "M365.714286 329.142857q0 45.714286-32.036571 77.677714t-77.677714 32.036571-77.677714-32.036571-32.036571-77.677714 32.036571-77.677714 77.677714-32.036571 77.677714 32.036571 32.036571 77.677714zM950.857143 548.571429l0 256-804.571429 0 0-109.714286 182.857143-182.857143 91.428571 91.428571 292.571429-292.571429zM1005.714286 146.285714l-914.285714 0q-7.460571 0-12.873143 5.412571t-5.412571 12.873143l0 694.857143q0 7.460571 5.412571 12.873143t12.873143 5.412571l914.285714 0q7.460571 0 12.873143-5.412571t5.412571-12.873143l0-694.857143q0-7.460571-5.412571-12.873143t-12.873143-5.412571zM1097.142857 164.571429l0 694.857143q0 37.741714-26.843429 64.585143t-64.585143 26.843429l-914.285714 0q-37.741714 0-64.585143-26.843429t-26.843429-64.585143l0-694.857143q0-37.741714 26.843429-64.585143t64.585143-26.843429l914.285714 0q37.741714 0 64.585143 26.843429t26.843429 64.585143z",
  mu = function (t) {
    var n = t.prefixCls, r = t.className, a = t.style, o = t.active, l = d.exports.useContext(oe), c = l.getPrefixCls,
      i = c("skeleton", n), u = F(i, "".concat(i, "-element"), g({}, "".concat(i, "-active"), o), r);
    return s("div", {
      className: u,
      children: s("div", {
        className: F("".concat(i, "-image"), r),
        style: a,
        children: s("svg", {
          viewBox: "0 0 1098 1024",
          xmlns: "http://www.w3.org/2000/svg",
          className: "".concat(i, "-image-svg"),
          children: s("path", { d: vu, className: "".concat(i, "-image-path") })
        })
      })
    })
  };
const pu = mu;
var hu = function (t) {
  var n, r = t.prefixCls, a = t.className, o = t.active, l = t.block, c = t.size, i = c === void 0 ? "default" : c,
    u = d.exports.useContext(oe), v = u.getPrefixCls, f = v("skeleton", r), p = Ve(t, ["prefixCls"]),
    C = F(f, "".concat(f, "-element"), (n = {}, g(n, "".concat(f, "-active"), o), g(n, "".concat(f, "-block"), l), n), a);
  return s("div", { className: C, children: s(Lr, { prefixCls: "".concat(f, "-input"), size: i, ...p }) })
};
const gu = hu;
var Cu = function (t) {
  var n = function (u) {
    var v = t.width, f = t.rows, p = f === void 0 ? 2 : f;
    if (Array.isArray(v)) return v[u];
    if (p - 1 === u) return v
  }, r = t.prefixCls, a = t.className, o = t.style, l = t.rows, c = ye(Array(l)).map(function (i, u) {
    return s("li", { style: { width: n(u) } }, u)
  });
  return s("ul", { className: F(r, a), style: o, children: c })
};
const xu = Cu;
var bu = function (t) {
  var n = t.prefixCls, r = t.className, a = t.width, o = t.style;
  return s("h3", { className: F(n, r), style: S({ width: a }, o) })
};
const yu = bu;

function en(e) {
  return e && $e(e) === "object" ? e : {}
}

function Pu(e, t) {
  return e && !t ? { size: "large", shape: "square" } : { size: "large", shape: "circle" }
}

function wu(e, t) {
  return !e && t ? { width: "38%" } : e && t ? { width: "50%" } : {}
}

function Su(e, t) {
  var n = {};
  return (!e || !t) && (n.width = "61%"), !e && t ? n.rows = 3 : n.rows = 2, n
}

var At = function (t) {
  var n = t.prefixCls, r = t.loading, a = t.className, o = t.style, l = t.children, c = t.avatar,
    i = c === void 0 ? !1 : c, u = t.title, v = u === void 0 ? !0 : u, f = t.paragraph, p = f === void 0 ? !0 : f,
    C = t.active, h = t.round, y = d.exports.useContext(oe), m = y.getPrefixCls, x = y.direction, b = m("skeleton", n);
  if (r || !("loading" in t)) {
    var N, P = !!i, O = !!v, w = !!p, R;
    if (P) {
      var I = S(S({ prefixCls: "".concat(b, "-avatar") }, Pu(O, w)), en(i));
      R = s("div", { className: "".concat(b, "-header"), children: s(Lr, { ...I }) })
    }
    var _;
    if (O || w) {
      var $;
      if (O) {
        var M = S(S({ prefixCls: "".concat(b, "-title") }, wu(P, w)), en(v));
        $ = s(yu, { ...M })
      }
      var E;
      if (w) {
        var T = S(S({ prefixCls: "".concat(b, "-paragraph") }, Su(P, O)), en(p));
        E = s(xu, { ...T })
      }
      _ = re("div", { className: "".concat(b, "-content"), children: [$, E] })
    }
    var k = F(b, (N = {}, g(N, "".concat(b, "-with-avatar"), P), g(N, "".concat(b, "-active"), C), g(N, "".concat(b, "-rtl"), x === "rtl"), g(N, "".concat(b, "-round"), h), N), a);
    return re("div", { className: k, style: o, children: [R, _] })
  }
  return typeof l < "u" ? l : null
};
At.Button = uu;
At.Avatar = cu;
At.Input = gu;
At.Image = pu;
At.Node = fu;
const Nu = At;
var Ou = { motionAppear: !1, motionEnter: !0, motionLeave: !0 };

function Iu(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : { inkBar: !0, tabPane: !1 }, n;
  return t === !1 ? n = { inkBar: !1, tabPane: !1 } : t === !0 ? n = {
    inkBar: !0,
    tabPane: !0
  } : n = S({ inkBar: !0 }, $e(t) === "object" ? t : {}), n.tabPane && (n.tabPaneMotion = S(S({}, Ou), { motionName: $r(e, "switch") })), n
}

var ku = globalThis && globalThis.__rest || function (e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var a = 0, r = Object.getOwnPropertySymbols(e); a < r.length; a++) t.indexOf(r[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[a]) && (n[r[a]] = e[r[a]]);
  return n
};

function _u(e) {
  return e.filter(function (t) {
    return t
  })
}

function Ru(e, t) {
  if (e) return e;
  var n = Xt(t).map(function (r) {
    if (d.exports.isValidElement(r)) {
      var a = r.key, o = r.props, l = o || {}, c = l.tab, i = ku(l, ["tab"]),
        u = S(S({ key: String(a) }, i), { label: c });
      return u
    }
    return null
  });
  return _u(n)
}

var $u = function () {
  return null
};
const Tu = $u;
var Eu = globalThis && globalThis.__rest || function (e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var a = 0, r = Object.getOwnPropertySymbols(e); a < r.length; a++) t.indexOf(r[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[a]) && (n[r[a]] = e[r[a]]);
  return n
};

function Xo(e) {
  var t = e.type, n = e.className, r = e.size, a = e.onEdit, o = e.hideAdd, l = e.centered, c = e.addIcon,
    i = e.children, u = e.items, v = e.animated,
    f = Eu(e, ["type", "className", "size", "onEdit", "hideAdd", "centered", "addIcon", "children", "items", "animated"]),
    p = f.prefixCls, C = f.moreIcon, h = C === void 0 ? s(kn, {}) : C, y = d.exports.useContext(oe), m = y.getPrefixCls,
    x = y.direction, b = y.getPopupContainer, N = m("tabs", p), P;
  t === "editable-card" && (P = {
    onEdit: function (_, $) {
      var M = $.key, E = $.event;
      a == null || a(_ === "add" ? E : M, _)
    }, removeIcon: s(Qt, {}), addIcon: c || s(ji, {}), showAdd: o !== !0
  });
  var O = m(), w = Ru(u, i), R = Iu(N, v);
  return s(tt.Consumer, {
    children: function (I) {
      var _, $ = r !== void 0 ? r : I;
      return s(dl, {
        direction: x,
        getPopupContainer: b,
        moreTransitionName: "".concat(O, "-slide-up"), ...f,
        items: w,
        className: F((_ = {}, g(_, "".concat(N, "-").concat($), $), g(_, "".concat(N, "-card"), ["card", "editable-card"].includes(t)), g(_, "".concat(N, "-editable-card"), t === "editable-card"), g(_, "".concat(N, "-centered"), l), _), n),
        editable: P,
        moreIcon: h,
        prefixCls: N,
        animated: R
      })
    }
  })
}

Xo.TabPane = Tu;
var Mu = globalThis && globalThis.__rest || function (e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var a = 0, r = Object.getOwnPropertySymbols(e); a < r.length; a++) t.indexOf(r[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[a]) && (n[r[a]] = e[r[a]]);
  return n
}, Du = function (t) {
  var n = t.prefixCls, r = t.className, a = t.hoverable, o = a === void 0 ? !0 : a,
    l = Mu(t, ["prefixCls", "className", "hoverable"]);
  return s(st, {
    children: function (c) {
      var i = c.getPrefixCls, u = i("card", n),
        v = F("".concat(u, "-grid"), r, g({}, "".concat(u, "-grid-hoverable"), o));
      return s("div", { ...l, className: v })
    }
  })
};
const Qo = Du;
var Fu = globalThis && globalThis.__rest || function (e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var a = 0, r = Object.getOwnPropertySymbols(e); a < r.length; a++) t.indexOf(r[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[a]) && (n[r[a]] = e[r[a]]);
  return n
};

function zu(e) {
  var t = e.map(function (n, r) {
    return s("li", {
      style: { width: "".concat(100 / e.length, "%") },
      children: s("span", { children: n })
    }, "action-".concat(r))
  });
  return t
}

var Lu = d.exports.forwardRef(function (e, t) {
  var n, r, a = d.exports.useContext(oe), o = a.getPrefixCls, l = a.direction, c = d.exports.useContext(tt),
    i = function (J) {
      var de;
      (de = e.onTabChange) === null || de === void 0 || de.call(e, J)
    }, u = function () {
      var J;
      return d.exports.Children.forEach(e.children, function (de) {
        de && de.type && de.type === Qo && (J = !0)
      }), J
    }, v = e.prefixCls, f = e.className, p = e.extra, C = e.headStyle, h = C === void 0 ? {} : C, y = e.bodyStyle,
    m = y === void 0 ? {} : y, x = e.title, b = e.loading, N = e.bordered, P = N === void 0 ? !0 : N, O = e.size,
    w = e.type, R = e.cover, I = e.actions, _ = e.tabList, $ = e.children, M = e.activeTabKey,
    E = e.defaultActiveTabKey, T = e.tabBarExtraContent, k = e.hoverable, V = e.tabProps, z = V === void 0 ? {} : V,
    j = Fu(e, ["prefixCls", "className", "extra", "headStyle", "bodyStyle", "title", "loading", "bordered", "size", "type", "cover", "actions", "tabList", "children", "activeTabKey", "defaultActiveTabKey", "tabBarExtraContent", "hoverable", "tabProps"]),
    D = o("card", v), B = s(Nu, { loading: !0, active: !0, paragraph: { rows: 4 }, title: !1, children: $ }),
    te = M !== void 0,
    ne = S(S({}, z), (n = {}, g(n, te ? "activeKey" : "defaultActiveKey", te ? M : E), g(n, "tabBarExtraContent", T), n)),
    X, Z = _ && _.length ? s(Xo, {
      size: "large", ...ne,
      className: "".concat(D, "-head-tabs"),
      onChange: i,
      items: _.map(function (Q) {
        var J;
        return { label: Q.tab, key: Q.key, disabled: (J = Q.disabled) !== null && J !== void 0 ? J : !1 }
      })
    }) : null;
  (x || p || Z) && (X = re("div", {
    className: "".concat(D, "-head"),
    style: h,
    children: [re("div", {
      className: "".concat(D, "-head-wrapper"),
      children: [x && s("div", {
        className: "".concat(D, "-head-title"),
        children: x
      }), p && s("div", { className: "".concat(D, "-extra"), children: p })]
    }), Z]
  }));
  var G = R ? s("div", { className: "".concat(D, "-cover"), children: R }) : null,
    K = s("div", { className: "".concat(D, "-body"), style: m, children: b ? B : $ }),
    A = I && I.length ? s("ul", { className: "".concat(D, "-actions"), children: zu(I) }) : null,
    L = Ve(j, ["onTabChange"]), q = O || c,
    H = F(D, (r = {}, g(r, "".concat(D, "-loading"), b), g(r, "".concat(D, "-bordered"), P), g(r, "".concat(D, "-hoverable"), k), g(r, "".concat(D, "-contain-grid"), u()), g(r, "".concat(D, "-contain-tabs"), _ && _.length), g(r, "".concat(D, "-").concat(q), q), g(r, "".concat(D, "-type-").concat(w), !!w), g(r, "".concat(D, "-rtl"), l === "rtl"), r), f);
  return re("div", { ref: t, ...L, className: H, children: [X, G, K, A] })
});
const ju = Lu;
var Au = globalThis && globalThis.__rest || function (e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var a = 0, r = Object.getOwnPropertySymbols(e); a < r.length; a++) t.indexOf(r[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[a]) && (n[r[a]] = e[r[a]]);
  return n
}, Bu = function (t) {
  return s(st, {
    children: function (n) {
      var r = n.getPrefixCls, a = t.prefixCls, o = t.className, l = t.avatar, c = t.title, i = t.description,
        u = Au(t, ["prefixCls", "className", "avatar", "title", "description"]), v = r("card", a),
        f = F("".concat(v, "-meta"), o),
        p = l ? s("div", { className: "".concat(v, "-meta-avatar"), children: l }) : null,
        C = c ? s("div", { className: "".concat(v, "-meta-title"), children: c }) : null,
        h = i ? s("div", { className: "".concat(v, "-meta-description"), children: i }) : null,
        y = C || h ? re("div", { className: "".concat(v, "-meta-detail"), children: [C, h] }) : null;
      return re("div", { ...u, className: f, children: [p, y] })
    }
  })
};
const Ku = Bu;
var jn = ju;
jn.Grid = Qo;
jn.Meta = Ku;
const Cm = jn;
var Vu = globalThis && globalThis.__rest || function (e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var a = 0, r = Object.getOwnPropertySymbols(e); a < r.length; a++) t.indexOf(r[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[a]) && (n[r[a]] = e[r[a]]);
  return n
}, Jo = d.exports.createContext(null), Uu = function (t, n) {
  var r = t.defaultValue, a = t.children, o = t.options, l = o === void 0 ? [] : o, c = t.prefixCls, i = t.className,
    u = t.style, v = t.onChange,
    f = Vu(t, ["defaultValue", "children", "options", "prefixCls", "className", "style", "onChange"]),
    p = d.exports.useContext(oe), C = p.getPrefixCls, h = p.direction, y = d.exports.useState(f.value || r || []),
    m = le(y, 2), x = m[0], b = m[1], N = d.exports.useState([]), P = le(N, 2), O = P[0], w = P[1];
  d.exports.useEffect(function () {
    "value" in f && b(f.value || [])
  }, [f.value]);
  var R = function () {
    return l.map(function (j) {
      return typeof j == "string" || typeof j == "number" ? { label: j, value: j } : j
    })
  }, I = function (j) {
    w(function (D) {
      return D.filter(function (B) {
        return B !== j
      })
    })
  }, _ = function (j) {
    w(function (D) {
      return [].concat(ye(D), [j])
    })
  }, $ = function (j) {
    var D = x.indexOf(j.value), B = ye(x);
    D === -1 ? B.push(j.value) : B.splice(D, 1), "value" in f || b(B);
    var te = R();
    v == null || v(B.filter(function (ne) {
      return O.includes(ne)
    }).sort(function (ne, X) {
      var Z = te.findIndex(function (K) {
        return K.value === ne
      }), G = te.findIndex(function (K) {
        return K.value === X
      });
      return Z - G
    }))
  }, M = C("checkbox", c), E = "".concat(M, "-group"), T = Ve(f, ["value", "disabled"]);
  l && l.length > 0 && (a = R().map(function (z) {
    return s(Zo, {
      prefixCls: M,
      disabled: "disabled" in z ? z.disabled : f.disabled,
      value: z.value,
      checked: x.includes(z.value),
      onChange: z.onChange,
      className: "".concat(E, "-item"),
      style: z.style,
      children: z.label
    }, z.value.toString())
  }));
  var k = { toggleOption: $, value: x, disabled: f.disabled, name: f.name, registerValue: _, cancelValue: I },
    V = F(E, g({}, "".concat(E, "-rtl"), h === "rtl"), i);
  return s("div", { className: V, style: u, ...T, ref: n, children: s(Jo.Provider, { value: k, children: a }) })
}, Wu = d.exports.forwardRef(Uu);
const Gu = d.exports.memo(Wu);
var Hu = globalThis && globalThis.__rest || function (e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var a = 0, r = Object.getOwnPropertySymbols(e); a < r.length; a++) t.indexOf(r[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[a]) && (n[r[a]] = e[r[a]]);
  return n
}, qu = function (t, n) {
  var r, a, o = t.prefixCls, l = t.className, c = t.children, i = t.indeterminate, u = i === void 0 ? !1 : i,
    v = t.style, f = t.onMouseEnter, p = t.onMouseLeave, C = t.skipGroup, h = C === void 0 ? !1 : C, y = t.disabled,
    m = Hu(t, ["prefixCls", "className", "children", "indeterminate", "style", "onMouseEnter", "onMouseLeave", "skipGroup", "disabled"]),
    x = d.exports.useContext(oe), b = x.getPrefixCls, N = x.direction, P = d.exports.useContext(Jo),
    O = d.exports.useContext(Qe), w = O.isFormItemInput, R = d.exports.useContext(it),
    I = (a = (P == null ? void 0 : P.disabled) || y) !== null && a !== void 0 ? a : R, _ = d.exports.useRef(m.value);
  d.exports.useEffect(function () {
    P == null || P.registerValue(m.value)
  }, []), d.exports.useEffect(function () {
    if (!h) return m.value !== _.current && (P == null || P.cancelValue(_.current), P == null || P.registerValue(m.value), _.current = m.value), function () {
      return P == null ? void 0 : P.cancelValue(m.value)
    }
  }, [m.value]);
  var $ = b("checkbox", o), M = S({}, m);
  P && !h && (M.onChange = function () {
    m.onChange && m.onChange.apply(m, arguments), P.toggleOption && P.toggleOption({ label: c, value: m.value })
  }, M.name = P.name, M.checked = P.value.includes(m.value));
  var E = F((r = {}, g(r, "".concat($, "-wrapper"), !0), g(r, "".concat($, "-rtl"), N === "rtl"), g(r, "".concat($, "-wrapper-checked"), M.checked), g(r, "".concat($, "-wrapper-disabled"), I), g(r, "".concat($, "-wrapper-in-form-item"), w), r), l),
    T = F(g({}, "".concat($, "-indeterminate"), u)), k = u ? "mixed" : void 0;
  return re("label", {
    className: E,
    style: v,
    onMouseEnter: f,
    onMouseLeave: p,
    children: [s(Ba, {
      "aria-checked": k, ...M,
      prefixCls: $,
      className: T,
      disabled: I,
      ref: n
    }), c !== void 0 && s("span", { children: c })]
  })
}, Yu = d.exports.forwardRef(qu);
const Zo = Yu;
var An = Zo;
An.Group = Gu;
An.__ANT_CHECKBOX = !0;
const yr = An;
var Xu = d.exports.createContext({});
const ei = Xu;
var Qu = globalThis && globalThis.__rest || function (e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var a = 0, r = Object.getOwnPropertySymbols(e); a < r.length; a++) t.indexOf(r[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[a]) && (n[r[a]] = e[r[a]]);
  return n
};

function Ju(e) {
  return typeof e == "number" ? "".concat(e, " ").concat(e, " auto") : /^\d+(\.\d+)?(px|em|rem|%)$/.test(e) ? "0 0 ".concat(e) : e
}

var Zu = ["xs", "sm", "md", "lg", "xl", "xxl"], ed = d.exports.forwardRef(function (e, t) {
  var n, r = d.exports.useContext(oe), a = r.getPrefixCls, o = r.direction, l = d.exports.useContext(ei), c = l.gutter,
    i = l.wrap, u = l.supportFlexGap, v = e.prefixCls, f = e.span, p = e.order, C = e.offset, h = e.push, y = e.pull,
    m = e.className, x = e.children, b = e.flex, N = e.style,
    P = Qu(e, ["prefixCls", "span", "order", "offset", "push", "pull", "className", "children", "flex", "style"]),
    O = a("col", v), w = {};
  Zu.forEach(function (M) {
    var E, T = {}, k = e[M];
    typeof k == "number" ? T.span = k : $e(k) === "object" && (T = k || {}), delete P[M], w = S(S({}, w), (E = {}, g(E, "".concat(O, "-").concat(M, "-").concat(T.span), T.span !== void 0), g(E, "".concat(O, "-").concat(M, "-order-").concat(T.order), T.order || T.order === 0), g(E, "".concat(O, "-").concat(M, "-offset-").concat(T.offset), T.offset || T.offset === 0), g(E, "".concat(O, "-").concat(M, "-push-").concat(T.push), T.push || T.push === 0), g(E, "".concat(O, "-").concat(M, "-pull-").concat(T.pull), T.pull || T.pull === 0), g(E, "".concat(O, "-rtl"), o === "rtl"), E))
  });
  var R = F(O, (n = {}, g(n, "".concat(O, "-").concat(f), f !== void 0), g(n, "".concat(O, "-order-").concat(p), p), g(n, "".concat(O, "-offset-").concat(C), C), g(n, "".concat(O, "-push-").concat(h), h), g(n, "".concat(O, "-pull-").concat(y), y), n), m, w),
    I = {};
  if (c && c[0] > 0) {
    var _ = c[0] / 2;
    I.paddingLeft = _, I.paddingRight = _
  }
  if (c && c[1] > 0 && !u) {
    var $ = c[1] / 2;
    I.paddingTop = $, I.paddingBottom = $
  }
  return b && (I.flex = Ju(b), i === !1 && !I.minWidth && (I.minWidth = 0)), s("div", {
    ...P,
    style: S(S({}, I), N),
    className: R,
    ref: t,
    children: x
  })
});
const ti = ed;
var td = globalThis && globalThis.__rest || function (e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var a = 0, r = Object.getOwnPropertySymbols(e); a < r.length; a++) t.indexOf(r[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[a]) && (n[r[a]] = e[r[a]]);
  return n
};
qe("top", "middle", "bottom", "stretch");
qe("start", "end", "center", "space-around", "space-between", "space-evenly");

function la(e, t) {
  var n = d.exports.useState(typeof e == "string" ? e : ""), r = le(n, 2), a = r[0], o = r[1], l = function () {
    if ($e(e) === "object") for (var i = 0; i < hr.length; i++) {
      var u = hr[i];
      if (!!t[u]) {
        var v = e[u];
        if (v !== void 0) {
          o(v);
          return
        }
      }
    }
  };
  return d.exports.useEffect(function () {
    l()
  }, [JSON.stringify(e), t]), a
}

var rd = d.exports.forwardRef(function (e, t) {
  var n, r = e.prefixCls, a = e.justify, o = e.align, l = e.className, c = e.style, i = e.children, u = e.gutter,
    v = u === void 0 ? 0 : u, f = e.wrap,
    p = td(e, ["prefixCls", "justify", "align", "className", "style", "children", "gutter", "wrap"]),
    C = d.exports.useContext(oe), h = C.getPrefixCls, y = C.direction,
    m = d.exports.useState({ xs: !0, sm: !0, md: !0, lg: !0, xl: !0, xxl: !0 }), x = le(m, 2), b = x[0], N = x[1],
    P = d.exports.useState({ xs: !1, sm: !1, md: !1, lg: !1, xl: !1, xxl: !1 }), O = le(P, 2), w = O[0], R = O[1],
    I = la(o, w), _ = la(a, w), $ = Lo(), M = d.exports.useRef(v);
  d.exports.useEffect(function () {
    var G = gr.subscribe(function (K) {
      R(K);
      var A = M.current || 0;
      (!Array.isArray(A) && $e(A) === "object" || Array.isArray(A) && ($e(A[0]) === "object" || $e(A[1]) === "object")) && N(K)
    });
    return function () {
      return gr.unsubscribe(G)
    }
  }, []);
  var E = function () {
      var K = [void 0, void 0], A = Array.isArray(v) ? v : [v, void 0];
      return A.forEach(function (L, q) {
        if ($e(L) === "object") for (var H = 0; H < hr.length; H++) {
          var Q = hr[H];
          if (b[Q] && L[Q] !== void 0) {
            K[q] = L[Q];
            break
          }
        } else K[q] = L
      }), K
    }, T = h("row", r), k = E(),
    V = F(T, (n = {}, g(n, "".concat(T, "-no-wrap"), f === !1), g(n, "".concat(T, "-").concat(_), _), g(n, "".concat(T, "-").concat(I), I), g(n, "".concat(T, "-rtl"), y === "rtl"), n), l),
    z = {}, j = k[0] != null && k[0] > 0 ? k[0] / -2 : void 0, D = k[1] != null && k[1] > 0 ? k[1] / -2 : void 0;
  if (j && (z.marginLeft = j, z.marginRight = j), $) {
    var B = le(k, 2);
    z.rowGap = B[1]
  } else D && (z.marginTop = D, z.marginBottom = D);
  var te = le(k, 2), ne = te[0], X = te[1], Z = d.exports.useMemo(function () {
    return { gutter: [ne, X], wrap: f, supportFlexGap: $ }
  }, [ne, X, f, $]);
  return s(ei.Provider, {
    value: Z,
    children: s("div", { ...p, className: V, style: S(S({}, z), c), ref: t, children: i })
  })
});
const nd = rd;

function ad(e) {
  return s(ot, { size: "small", type: "primary", ...e })
}

var od = globalThis && globalThis.__rest || function (e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var a = 0, r = Object.getOwnPropertySymbols(e); a < r.length; a++) t.indexOf(r[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[a]) && (n[r[a]] = e[r[a]]);
  return n
}, id = function (t) {
  var n, r = t.prefixCls, a = t.className, o = t.checked, l = t.onChange, c = t.onClick,
    i = od(t, ["prefixCls", "className", "checked", "onChange", "onClick"]), u = d.exports.useContext(oe),
    v = u.getPrefixCls, f = function (y) {
      l == null || l(!o), c == null || c(y)
    }, p = v("tag", r),
    C = F(p, (n = {}, g(n, "".concat(p, "-checkable"), !0), g(n, "".concat(p, "-checkable-checked"), o), n), a);
  return s("span", { ...i, className: C, onClick: f })
};
const ld = id;
var cd = globalThis && globalThis.__rest || function (e, t) {
    var n = {};
    for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
    if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var a = 0, r = Object.getOwnPropertySymbols(e); a < r.length; a++) t.indexOf(r[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[a]) && (n[r[a]] = e[r[a]]);
    return n
  }, sd = new RegExp("^(".concat(Io.join("|"), ")(-inverse)?$")), ud = new RegExp("^(".concat(Vc.join("|"), ")$")),
  dd = function (t, n) {
    var r, a = t.prefixCls, o = t.className, l = t.style, c = t.children, i = t.icon, u = t.color, v = t.onClose,
      f = t.closeIcon, p = t.closable, C = p === void 0 ? !1 : p,
      h = cd(t, ["prefixCls", "className", "style", "children", "icon", "color", "onClose", "closeIcon", "closable"]),
      y = d.exports.useContext(oe), m = y.getPrefixCls, x = y.direction, b = d.exports.useState(!0), N = le(b, 2),
      P = N[0], O = N[1];
    d.exports.useEffect(function () {
      "visible" in h && O(h.visible)
    }, [h.visible]);
    var w = function () {
        return u ? sd.test(u) || ud.test(u) : !1
      }, R = S({ backgroundColor: u && !w() ? u : void 0 }, l), I = w(), _ = m("tag", a),
      $ = F(_, (r = {}, g(r, "".concat(_, "-").concat(u), I), g(r, "".concat(_, "-has-color"), u && !I), g(r, "".concat(_, "-hidden"), !P), g(r, "".concat(_, "-rtl"), x === "rtl"), r), o),
      M = function (B) {
        B.stopPropagation(), v == null || v(B), !B.defaultPrevented && ("visible" in h || O(!1))
      }, E = function () {
        return C ? f ? s("span", {
          className: "".concat(_, "-close-icon"),
          onClick: M,
          children: f
        }) : s(Qt, { className: "".concat(_, "-close-icon"), onClick: M }) : null
      }, T = "onClick" in h || c && c.type === "a", k = Ve(h, ["visible"]), V = i || null,
      z = V ? re(He, { children: [V, s("span", { children: c })] }) : c,
      j = re("span", { ...k, ref: n, className: $, style: R, children: [z, E()] });
    return T ? s(Do, { children: j }) : j
  }, ri = d.exports.forwardRef(dd);
ri.CheckableTag = ld;
const fd = ri;

function vd(e) {
  return s(fd, { color: "blue", ...e })
}

function md(e, t, n) {
  return n !== void 0 ? n : e === "year" && t.lang.yearPlaceholder ? t.lang.yearPlaceholder : e === "quarter" && t.lang.quarterPlaceholder ? t.lang.quarterPlaceholder : e === "month" && t.lang.monthPlaceholder ? t.lang.monthPlaceholder : e === "week" && t.lang.weekPlaceholder ? t.lang.weekPlaceholder : e === "time" && t.timePickerLocale.placeholder ? t.timePickerLocale.placeholder : t.lang.placeholder
}

function pd(e, t, n) {
  return n !== void 0 ? n : e === "year" && t.lang.yearPlaceholder ? t.lang.rangeYearPlaceholder : e === "quarter" && t.lang.quarterPlaceholder ? t.lang.rangeQuarterPlaceholder : e === "month" && t.lang.monthPlaceholder ? t.lang.rangeMonthPlaceholder : e === "week" && t.lang.weekPlaceholder ? t.lang.rangeWeekPlaceholder : e === "time" && t.timePickerLocale.placeholder ? t.timePickerLocale.rangePlaceholder : t.lang.rangePlaceholder
}

function ni(e, t) {
  var n = { adjustX: 1, adjustY: 1 };
  switch (t) {
    case"bottomLeft":
      return { points: ["tl", "bl"], offset: [0, 4], overflow: n };
    case"bottomRight":
      return { points: ["tr", "br"], offset: [0, 4], overflow: n };
    case"topLeft":
      return { points: ["bl", "tl"], offset: [0, -4], overflow: n };
    case"topRight":
      return { points: ["br", "tr"], offset: [0, -4], overflow: n };
    default:
      return { points: e === "rtl" ? ["tr", "br"] : ["tl", "bl"], offset: [0, 4], overflow: n }
  }
}

var hd = globalThis && globalThis.__rest || function (e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var a = 0, r = Object.getOwnPropertySymbols(e); a < r.length; a++) t.indexOf(r[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[a]) && (n[r[a]] = e[r[a]]);
  return n
};

function gd(e) {
  var t = d.exports.forwardRef(function (n, r) {
    var a = n.prefixCls, o = n.getPopupContainer, l = n.className, c = n.placement, i = n.size, u = n.disabled,
      v = n.bordered, f = v === void 0 ? !0 : v, p = n.placeholder, C = n.popupClassName, h = n.dropdownClassName,
      y = n.status,
      m = hd(n, ["prefixCls", "getPopupContainer", "className", "placement", "size", "disabled", "bordered", "placeholder", "popupClassName", "dropdownClassName", "status"]),
      x = d.exports.useRef(null), b = d.exports.useContext(oe), N = b.getPrefixCls, P = b.direction,
      O = b.getPopupContainer, w = N("picker", a), R = _t(w, P), I = R.compactSize, _ = R.compactItemClassnames,
      $ = n.format, M = n.showTime, E = n.picker, T = N(), k = {};
    k = S(S(S({}, k), M ? Pr(S({
      format: $,
      picker: E
    }, M)) : {}), E === "time" ? Pr(S(S({ format: $ }, n), { picker: E })) : {});
    var V = d.exports.useContext(tt), z = I || i || V, j = d.exports.useContext(it), D = u != null ? u : j,
      B = d.exports.useContext(Qe), te = B.hasFeedback, ne = B.status, X = B.feedbackIcon,
      Z = re(He, { children: [E === "time" ? s(Ta, {}) : s(Ea, {}), te && X] });
    return d.exports.useImperativeHandle(r, function () {
      return {
        focus: function () {
          var K;
          return (K = x.current) === null || K === void 0 ? void 0 : K.focus()
        }, blur: function () {
          var K;
          return (K = x.current) === null || K === void 0 ? void 0 : K.blur()
        }
      }
    }), s(kt, {
      componentName: "DatePicker", defaultLocale: mr, children: function (G) {
        var K, A = S(S({}, G), n.locale);
        return s(ll, {
          separator: s("span", {
            "aria-label": "to",
            className: "".concat(w, "-separator"),
            children: s(Ai, {})
          }),
          disabled: D,
          ref: x,
          dropdownClassName: C || h,
          dropdownAlign: ni(P, c),
          placeholder: pd(E, A, p),
          suffixIcon: Z,
          clearIcon: s(xt, {}),
          prevIcon: s("span", { className: "".concat(w, "-prev-icon") }),
          nextIcon: s("span", { className: "".concat(w, "-next-icon") }),
          superPrevIcon: s("span", { className: "".concat(w, "-super-prev-icon") }),
          superNextIcon: s("span", { className: "".concat(w, "-super-next-icon") }),
          allowClear: !0,
          transitionName: "".concat(T, "-slide-up"), ...m, ...k,
          className: F((K = {}, g(K, "".concat(w, "-").concat(z), z), g(K, "".concat(w, "-borderless"), !f), K), ct(w, jt(ne, y), te), _, l),
          locale: A.lang,
          prefixCls: w,
          getPopupContainer: o || O,
          generateConfig: e,
          components: ai,
          direction: P
        })
      }
    })
  });
  return t
}

var Cd = globalThis && globalThis.__rest || function (e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var a = 0, r = Object.getOwnPropertySymbols(e); a < r.length; a++) t.indexOf(r[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[a]) && (n[r[a]] = e[r[a]]);
  return n
};

function xd(e) {
  function t(i, u) {
    var v = d.exports.forwardRef(function (f, p) {
      var C = f.prefixCls, h = f.getPopupContainer, y = f.className, m = f.size, x = f.bordered,
        b = x === void 0 ? !0 : x, N = f.placement, P = f.placeholder, O = f.popupClassName, w = f.dropdownClassName,
        R = f.disabled, I = f.status,
        _ = Cd(f, ["prefixCls", "getPopupContainer", "className", "size", "bordered", "placement", "placeholder", "popupClassName", "dropdownClassName", "disabled", "status"]),
        $ = d.exports.useContext(oe), M = $.getPrefixCls, E = $.direction, T = $.getPopupContainer, k = M("picker", C),
        V = _t(k, E), z = V.compactSize, j = V.compactItemClassnames, D = d.exports.useRef(null), B = f.format,
        te = f.showTime;
      d.exports.useImperativeHandle(p, function () {
        return {
          focus: function () {
            var Y;
            return (Y = D.current) === null || Y === void 0 ? void 0 : Y.focus()
          }, blur: function () {
            var Y;
            return (Y = D.current) === null || Y === void 0 ? void 0 : Y.blur()
          }
        }
      });
      var ne = { showToday: !0 }, X = {};
      i && (X.picker = i);
      var Z = i || f.picker;
      X = S(S(S({}, X), te ? Pr(S({
        format: B,
        picker: Z
      }, te)) : {}), Z === "time" ? Pr(S(S({ format: B }, f), { picker: Z })) : {});
      var G = M(), K = d.exports.useContext(tt), A = z || m || K, L = d.exports.useContext(it), q = R != null ? R : L,
        H = d.exports.useContext(Qe), Q = H.hasFeedback, J = H.status, de = H.feedbackIcon,
        ae = re(He, { children: [Z === "time" ? s(Ta, {}) : s(Ea, {}), Q && de] });
      return s(kt, {
        componentName: "DatePicker", defaultLocale: mr, children: function (pe) {
          var Y, ie = S(S({}, pe), f.locale);
          return s(cl, {
            ref: D,
            placeholder: md(Z, ie, P),
            suffixIcon: ae,
            dropdownAlign: ni(E, N),
            dropdownClassName: O || w,
            clearIcon: s(xt, {}),
            prevIcon: s("span", { className: "".concat(k, "-prev-icon") }),
            nextIcon: s("span", { className: "".concat(k, "-next-icon") }),
            superPrevIcon: s("span", { className: "".concat(k, "-super-prev-icon") }),
            superNextIcon: s("span", { className: "".concat(k, "-super-next-icon") }),
            allowClear: !0,
            transitionName: "".concat(G, "-slide-up"), ...ne, ..._, ...X,
            locale: ie.lang,
            className: F((Y = {}, g(Y, "".concat(k, "-").concat(A), A), g(Y, "".concat(k, "-borderless"), !b), Y), ct(k, jt(J, I), Q), j, y),
            prefixCls: k,
            getPopupContainer: h || T,
            generateConfig: e,
            components: ai,
            direction: E,
            disabled: q
          })
        }
      })
    });
    return u && (v.displayName = u), v
  }

  var n = t(), r = t("week", "WeekPicker"), a = t("month", "MonthPicker"), o = t("year", "YearPicker"),
    l = t("time", "TimePicker"), c = t("quarter", "QuarterPicker");
  return { DatePicker: n, WeekPicker: r, MonthPicker: a, YearPicker: o, TimePicker: l, QuarterPicker: c }
}

var ai = { button: ad, rangeItem: vd };

function bd(e) {
  return e ? Array.isArray(e) ? e : [e] : []
}

function Pr(e) {
  var t = e.format, n = e.picker, r = e.showHour, a = e.showMinute, o = e.showSecond, l = e.use12Hours, c = bd(t)[0],
    i = S({}, e);
  return c && typeof c == "string" && (!c.includes("s") && o === void 0 && (i.showSecond = !1), !c.includes("m") && a === void 0 && (i.showMinute = !1), !c.includes("H") && !c.includes("h") && r === void 0 && (i.showHour = !1), (c.includes("a") || c.includes("A")) && l === void 0 && (i.use12Hours = !0)), n === "time" ? i : (typeof c == "function" && delete i.format, { showTime: i })
}

qe("bottomLeft", "bottomRight", "topLeft", "topRight");

function yd(e) {
  var t = xd(e), n = t.DatePicker, r = t.WeekPicker, a = t.MonthPicker, o = t.YearPicker, l = t.TimePicker,
    c = t.QuarterPicker, i = gd(e), u = n;
  return u.WeekPicker = r, u.MonthPicker = a, u.YearPicker = o, u.RangePicker = i, u.TimePicker = l, u.QuarterPicker = c, u
}

var Pd = yd(sl);
const xm = Pd;

function wr(e) {
  var t = d.exports.useState(e), n = le(t, 2), r = n[0], a = n[1];
  return d.exports.useEffect(function () {
    var o = setTimeout(function () {
      a(e)
    }, e.length ? 0 : 10);
    return function () {
      clearTimeout(o)
    }
  }, [e]), r
}

var ca = [];

function tn(e, t, n) {
  var r = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : 0;
  return { key: typeof e == "string" ? e : "".concat(n, "-").concat(r), error: e, errorStatus: t }
}

function oi(e) {
  var t = e.help, n = e.helpStatus, r = e.errors, a = r === void 0 ? ca : r, o = e.warnings, l = o === void 0 ? ca : o,
    c = e.className, i = e.fieldId, u = e.onVisibleChanged, v = d.exports.useContext($n), f = v.prefixCls,
    p = d.exports.useContext(oe), C = p.getPrefixCls, h = "".concat(f, "-item-explain"), y = C(), m = wr(a), x = wr(l),
    b = d.exports.useMemo(function () {
      return t != null ? [tn(t, n, "help")] : [].concat(ye(m.map(function (P, O) {
        return tn(P, "error", "error", O)
      })), ye(x.map(function (P, O) {
        return tn(P, "warning", "warning", O)
      })))
    }, [t, n, m, x]), N = {};
  return i && (N.id = "".concat(i, "_help")), s(Or, {
    motionDeadline: Yt.motionDeadline,
    motionName: "".concat(y, "-show-help"),
    visible: !!b.length,
    onVisibleChanged: u,
    children: function (P) {
      var O = P.className, w = P.style;
      return s("div", {
        ...N,
        className: F(h, O, c),
        style: w,
        role: "alert",
        children: s(Ra, {
          keys: b, ...Yt,
          motionName: "".concat(y, "-show-help-item"),
          component: !1,
          children: function (R) {
            var I = R.key, _ = R.error, $ = R.errorStatus, M = R.className, E = R.style;
            return s("div", { className: F(M, g({}, "".concat(h, "-").concat($), $)), style: E, children: _ }, I)
          }
        })
      })
    }
  })
}

var wd = ["parentNode"], Sd = "form_item";

function Gt(e) {
  return e === void 0 || e === !1 ? [] : Array.isArray(e) ? e : [e]
}

function ii(e, t) {
  if (!!e.length) {
    var n = e.join("_");
    if (t) return "".concat(t, "_").concat(n);
    var r = wd.includes(n);
    return r ? "".concat(Sd, "_").concat(n) : n
  }
}

function sa(e) {
  var t = Gt(e);
  return t.join("_")
}

function li(e) {
  var t = yl(), n = le(t, 1), r = n[0], a = d.exports.useRef({}), o = d.exports.useMemo(function () {
    return e != null ? e : S(S({}, r), {
      __INTERNAL__: {
        itemRef: function (c) {
          return function (i) {
            var u = sa(c);
            i ? a.current[u] = i : delete a.current[u]
          }
        }
      }, scrollToField: function (c) {
        var i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, u = Gt(c),
          v = ii(u, o.__INTERNAL__.name), f = v ? document.getElementById(v) : null;
        f && kl(f, S({ scrollMode: "if-needed", block: "nearest" }, i))
      }, getFieldInstance: function (c) {
        var i = sa(c);
        return a.current[i]
      }
    })
  }, [e, r]);
  return [o]
}

var Nd = globalThis && globalThis.__rest || function (e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var a = 0, r = Object.getOwnPropertySymbols(e); a < r.length; a++) t.indexOf(r[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[a]) && (n[r[a]] = e[r[a]]);
  return n
}, Od = function (t, n) {
  var r, a = d.exports.useContext(tt), o = d.exports.useContext(it), l = d.exports.useContext(oe), c = l.getPrefixCls,
    i = l.direction, u = l.form, v = t.prefixCls, f = t.className, p = f === void 0 ? "" : f, C = t.size,
    h = C === void 0 ? a : C, y = t.disabled, m = y === void 0 ? o : y, x = t.form, b = t.colon, N = t.labelAlign,
    P = t.labelWrap, O = t.labelCol, w = t.wrapperCol, R = t.hideRequiredMark, I = t.layout,
    _ = I === void 0 ? "horizontal" : I, $ = t.scrollToFirstError, M = t.requiredMark, E = t.onFinishFailed, T = t.name,
    k = Nd(t, ["prefixCls", "className", "size", "disabled", "form", "colon", "labelAlign", "labelWrap", "labelCol", "wrapperCol", "hideRequiredMark", "layout", "scrollToFirstError", "requiredMark", "onFinishFailed", "name"]),
    V = d.exports.useMemo(function () {
      return M !== void 0 ? M : u && u.requiredMark !== void 0 ? u.requiredMark : !R
    }, [R, M, u]), z = b != null ? b : u == null ? void 0 : u.colon, j = c("form", v),
    D = F(j, (r = {}, g(r, "".concat(j, "-").concat(_), !0), g(r, "".concat(j, "-hide-required-mark"), V === !1), g(r, "".concat(j, "-rtl"), i === "rtl"), g(r, "".concat(j, "-").concat(h), h), r), p),
    B = li(x), te = le(B, 1), ne = te[0], X = ne.__INTERNAL__;
  X.name = T;
  var Z = d.exports.useMemo(function () {
    return {
      name: T,
      labelAlign: N,
      labelCol: O,
      labelWrap: P,
      wrapperCol: w,
      vertical: _ === "vertical",
      colon: z,
      requiredMark: V,
      itemRef: X.itemRef,
      form: ne
    }
  }, [T, N, O, w, _, z, V, ne]);
  d.exports.useImperativeHandle(n, function () {
    return ne
  });
  var G = function (A) {
    E == null || E(A);
    var L = { block: "nearest" };
    $ && A.errorFields.length && ($e($) === "object" && (L = $), ne.scrollToField(A.errorFields[0].name, L))
  };
  return s(po, {
    disabled: m,
    children: s(ho, {
      size: h,
      children: s(Ct.Provider, {
        value: Z,
        children: s(Pl, { id: T, ...k, name: T, onFinishFailed: G, form: ne, className: D })
      })
    })
  })
}, Id = d.exports.forwardRef(Od);
const kd = Id;
var _d = function () {
  var t = d.exports.useContext(Qe), n = t.status;
  return { status: n }
};
const Rd = _d;

function $d(e) {
  var t = d.exports.useState(e), n = le(t, 2), r = n[0], a = n[1], o = d.exports.useRef(null), l = d.exports.useRef([]),
    c = d.exports.useRef(!1);
  d.exports.useEffect(function () {
    return c.current = !1, function () {
      c.current = !0, Ot.cancel(o.current), o.current = null
    }
  }, []);

  function i(u) {
    c.current || (o.current === null && (l.current = [], o.current = Ot(function () {
      o.current = null, a(function (v) {
        var f = v;
        return l.current.forEach(function (p) {
          f = p(f)
        }), f
      })
    })), l.current.push(u))
  }

  return [r, i]
}

function Td() {
  var e = d.exports.useContext(Ct), t = e.itemRef, n = d.exports.useRef({});

  function r(a, o) {
    var l = o && $e(o) === "object" && o.ref, c = a.join("_");
    return (n.current.name !== c || n.current.originRef !== l) && (n.current.name = c, n.current.originRef = l, n.current.ref = Lt(t(a), l)), n.current.ref
  }

  return r
}

var Ed = globalThis && globalThis.__rest || function (e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var a = 0, r = Object.getOwnPropertySymbols(e); a < r.length; a++) t.indexOf(r[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[a]) && (n[r[a]] = e[r[a]]);
  return n
};

function Md(e) {
  return e ? $e(e) === "object" && !d.exports.isValidElement(e) ? e : { title: e } : null
}

var Dd = function (t) {
  var n = t.prefixCls, r = t.label, a = t.htmlFor, o = t.labelCol, l = t.labelAlign, c = t.colon, i = t.required,
    u = t.requiredMark, v = t.tooltip, f = Jl("Form"), p = le(f, 1), C = p[0];
  return r ? s(Ct.Consumer, {
    children: function (h) {
      var y, m = h.vertical, x = h.labelAlign, b = h.labelCol, N = h.labelWrap, P = h.colon, O, w = o || b || {},
        R = l || x, I = "".concat(n, "-item-label"),
        _ = F(I, R === "left" && "".concat(I, "-left"), w.className, g({}, "".concat(I, "-wrap"), !!N)), $ = r,
        M = c === !0 || P !== !1 && c !== !1, E = M && !m;
      E && typeof r == "string" && r.trim() !== "" && ($ = r.replace(/[:|：]\s*$/, ""));
      var T = Md(v);
      if (T) {
        var k = T.icon, V = k === void 0 ? s(Bi, {}) : k, z = Ed(T, ["icon"]), j = s(Zt, {
          ...z,
          children: d.exports.cloneElement(V, { className: "".concat(n, "-item-tooltip"), title: "" })
        });
        $ = re(He, { children: [$, j] })
      }
      u === "optional" && !i && ($ = re(He, {
        children: [$, s("span", {
          className: "".concat(n, "-item-optional"),
          title: "",
          children: (C == null ? void 0 : C.optional) || ((O = at.Form) === null || O === void 0 ? void 0 : O.optional)
        })]
      }));
      var D = F((y = {}, g(y, "".concat(n, "-item-required"), i), g(y, "".concat(n, "-item-required-mark-optional"), u === "optional"), g(y, "".concat(n, "-item-no-colon"), !M), y));
      return s(ti, {
        ...w,
        className: _,
        children: s("label", { htmlFor: a, className: D, title: typeof r == "string" ? r : "", children: $ })
      })
    }
  }, "label") : null
};
const Fd = Dd;
var zd = function (t) {
  var n = t.prefixCls, r = t.status, a = t.wrapperCol, o = t.children, l = t.errors, c = t.warnings,
    i = t._internalItemRender, u = t.extra, v = t.help, f = t.fieldId, p = t.marginBottom, C = t.onErrorVisibleChanged,
    h = "".concat(n, "-item"), y = d.exports.useContext(Ct), m = a || y.wrapperCol || {},
    x = F("".concat(h, "-control"), m.className), b = d.exports.useMemo(function () {
      return S({}, y)
    }, [y]);
  delete b.labelCol, delete b.wrapperCol;
  var N = s("div", {
    className: "".concat(h, "-control-input"),
    children: s("div", { className: "".concat(h, "-control-input-content"), children: o })
  }), P = d.exports.useMemo(function () {
    return { prefixCls: n, status: r }
  }, [n, r]), O = p !== null || l.length || c.length ? re("div", {
    style: { display: "flex", flexWrap: "nowrap" },
    children: [s($n.Provider, {
      value: P,
      children: s(oi, {
        fieldId: f,
        errors: l,
        warnings: c,
        help: v,
        helpStatus: r,
        className: "".concat(h, "-explain-connected"),
        onVisibleChanged: C
      })
    }), !!p && s("div", { style: { width: 0, height: p } })]
  }) : null, w = {};
  f && (w.id = "".concat(f, "_extra"));
  var R = u ? s("div", { ...w, className: "".concat(h, "-extra"), children: u }) : null,
    I = i && i.mark === "pro_table_render" && i.render ? i.render(t, {
      input: N,
      errorList: O,
      extra: R
    }) : re(He, { children: [N, O, R] });
  return s(Ct.Provider, { value: b, children: s(ti, { ...m, className: x, children: I }) })
};
const Ld = zd;
var jd = globalThis && globalThis.__rest || function (e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var a = 0, r = Object.getOwnPropertySymbols(e); a < r.length; a++) t.indexOf(r[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[a]) && (n[r[a]] = e[r[a]]);
  return n
}, Ad = { success: Sn, warning: Nn, error: xt, validating: gt };

function Bd(e) {
  var t, n = e.prefixCls, r = e.className, a = e.style, o = e.help, l = e.errors, c = e.warnings, i = e.validateStatus,
    u = e.meta, v = e.hasFeedback, f = e.hidden, p = e.children, C = e.fieldId, h = e.isRequired,
    y = e.onSubItemMetaChange,
    m = jd(e, ["prefixCls", "className", "style", "help", "errors", "warnings", "validateStatus", "meta", "hasFeedback", "hidden", "children", "fieldId", "isRequired", "onSubItemMetaChange"]),
    x = "".concat(n, "-item"), b = d.exports.useContext(Ct), N = b.requiredMark, P = d.exports.useRef(null), O = wr(l),
    w = wr(c), R = o != null, I = !!(R || l.length || c.length), _ = d.exports.useState(null), $ = le(_, 2), M = $[0],
    E = $[1];
  Ii(function () {
    if (I && P.current) {
      var j = getComputedStyle(P.current);
      E(parseInt(j.marginBottom, 10))
    }
  }, [I]);
  var T = function (D) {
    D || E(null)
  }, k = "";
  i !== void 0 ? k = i : u.validating ? k = "validating" : O.length ? k = "error" : w.length ? k = "warning" : u.touched && (k = "success");
  var V = d.exports.useMemo(function () {
      var j;
      if (v) {
        var D = k && Ad[k];
        j = D ? s("span", {
          className: F("".concat(x, "-feedback-icon"), "".concat(x, "-feedback-icon-").concat(k)),
          children: s(D, {})
        }) : null
      }
      return { status: k, hasFeedback: v, feedbackIcon: j, isFormItemInput: !0 }
    }, [k, v]),
    z = (t = {}, g(t, x, !0), g(t, "".concat(x, "-with-help"), R || O.length || w.length), g(t, "".concat(r), !!r), g(t, "".concat(x, "-has-feedback"), k && v), g(t, "".concat(x, "-has-success"), k === "success"), g(t, "".concat(x, "-has-warning"), k === "warning"), g(t, "".concat(x, "-has-error"), k === "error"), g(t, "".concat(x, "-is-validating"), k === "validating"), g(t, "".concat(x, "-hidden"), f), t);
  return re("div", {
    className: F(z),
    style: a,
    ref: P,
    children: [re(nd, {
      className: "".concat(x, "-row"), ...Ve(m, ["_internalItemRender", "colon", "dependencies", "extra", "fieldKey", "getValueFromEvent", "getValueProps", "htmlFor", "id", "initialValue", "isListField", "label", "labelAlign", "labelCol", "labelWrap", "messageVariables", "name", "normalize", "noStyle", "preserve", "required", "requiredMark", "rules", "shouldUpdate", "trigger", "tooltip", "validateFirst", "validateTrigger", "valuePropName", "wrapperCol"]),
      children: [s(Fd, { htmlFor: C, required: h, requiredMark: N, ...e, prefixCls: n }), s(Ld, {
        ...e, ...u,
        errors: O,
        warnings: w,
        prefixCls: n,
        status: k,
        help: o,
        marginBottom: M,
        onErrorVisibleChanged: T,
        children: s(wo.Provider, { value: y, children: s(Qe.Provider, { value: V, children: p }) })
      })]
    }), !!M && s("div", { className: "".concat(x, "-margin-offset"), style: { marginBottom: -M } })]
  })
}

var Kd = "__SPLIT__";
qe("success", "warning", "error", "validating", "");
var Vd = d.exports.memo(function (e) {
  var t = e.children;
  return t
}, function (e, t) {
  return e.value === t.value && e.update === t.update && e.childProps.length === t.childProps.length && e.childProps.every(function (n, r) {
    return n === t.childProps[r]
  })
});

function Ud(e) {
  return e != null
}

function ua() {
  return { errors: [], warnings: [], touched: !1, validating: !1, name: [] }
}

function Wd(e) {
  var t = e.name, n = e.noStyle, r = e.dependencies, a = e.prefixCls, o = e.shouldUpdate, l = e.rules, c = e.children,
    i = e.required, u = e.label, v = e.messageVariables, f = e.trigger, p = f === void 0 ? "onChange" : f,
    C = e.validateTrigger, h = e.hidden, y = d.exports.useContext(oe), m = y.getPrefixCls, x = d.exports.useContext(Ct),
    b = x.name, N = typeof c == "function", P = d.exports.useContext(wo), O = d.exports.useContext(wl),
    w = O.validateTrigger, R = C !== void 0 ? C : w, I = Ud(t), _ = m("form", a), $ = d.exports.useContext(Sl),
    M = d.exports.useRef(), E = $d({}), T = le(E, 2), k = T[0], V = T[1], z = ka(function () {
      return ua()
    }), j = le(z, 2), D = j[0], B = j[1], te = function (Q) {
      var J = $ == null ? void 0 : $.getKey(Q.name);
      if (B(Q.destroy ? ua() : Q, !0), n && P) {
        var de = Q.name;
        if (Q.destroy) de = M.current || de; else if (J !== void 0) {
          var ae = le(J, 2), pe = ae[0], Y = ae[1];
          de = [pe].concat(ye(Y)), M.current = de
        }
        P(Q, de)
      }
    }, ne = function (Q, J) {
      V(function (de) {
        var ae = S({}, de), pe = [].concat(ye(Q.name.slice(0, -1)), ye(J)), Y = pe.join(Kd);
        return Q.destroy ? delete ae[Y] : ae[Y] = Q, ae
      })
    }, X = d.exports.useMemo(function () {
      var H = ye(D.errors), Q = ye(D.warnings);
      return Object.values(k).forEach(function (J) {
        H.push.apply(H, ye(J.errors || [])), Q.push.apply(Q, ye(J.warnings || []))
      }), [H, Q]
    }, [k, D.errors, D.warnings]), Z = le(X, 2), G = Z[0], K = Z[1], A = Td();

  function L(H, Q, J) {
    return n && !h ? H : s(Bd, {
      ...e,
      prefixCls: _,
      fieldId: Q,
      isRequired: J,
      errors: G,
      warnings: K,
      meta: D,
      onSubItemMetaChange: ne,
      children: H
    }, "row")
  }

  if (!I && !N && !r) return L(c);
  var q = {};
  return typeof u == "string" ? q.label = u : t && (q.label = String(t)), v && (q = S(S({}, q), v)), s(Nl, {
    ...e, messageVariables: q, trigger: p, validateTrigger: R, onMetaChange: te, children: function (H, Q, J) {
      var de = Gt(t).length && Q ? Q.name : [], ae = ii(de, b), pe = i !== void 0 ? i : !!(l && l.some(function (W) {
        if (W && $e(W) === "object" && W.required && !W.warningOnly) return !0;
        if (typeof W == "function") {
          var U = W(J);
          return U && U.required && !U.warningOnly
        }
        return !1
      })), Y = S({}, H), ie = null;
      if (Array.isArray(c) && I) ie = c; else if (!(N && (!(o || r) || I))) {
        if (!(r && !N && !I)) if (Xe(c)) {
          var ue = S(S({}, c.props), Y);
          if (ue.id || (ue.id = ae), e.help || G.length > 0 || K.length > 0 || e.extra) {
            var xe = [];
            (e.help || G.length > 0) && xe.push("".concat(ae, "_help")), e.extra && xe.push("".concat(ae, "_extra")), ue["aria-describedby"] = xe.join(" ")
          }
          G.length > 0 && (ue["aria-invalid"] = "true"), pe && (ue["aria-required"] = "true"), Ia(c) && (ue.ref = A(de, c));
          var fe = new Set([].concat(ye(Gt(p)), ye(Gt(R))));
          fe.forEach(function (W) {
            ue[W] = function () {
              for (var U, ee, ge, be, we, _e = arguments.length, Ce = new Array(_e), se = 0; se < _e; se++) Ce[se] = arguments[se];
              (ge = Y[W]) === null || ge === void 0 || (U = ge).call.apply(U, [Y].concat(Ce)), (we = (be = c.props)[W]) === null || we === void 0 || (ee = we).call.apply(ee, [be].concat(Ce))
            }
          });
          var ce = [ue["aria-required"], ue["aria-invalid"], ue["aria-describedby"]];
          ie = s(Vd, { value: Y[e.valuePropName || "value"], update: c, childProps: ce, children: ze(c, ue) })
        } else N && (o || r) && !I ? ie = c(J) : ie = c
      }
      return L(ie, ae, pe)
    }
  })
}

var ci = Wd;
ci.useStatus = Rd;
const Gd = ci;
var Hd = globalThis && globalThis.__rest || function (e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var a = 0, r = Object.getOwnPropertySymbols(e); a < r.length; a++) t.indexOf(r[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[a]) && (n[r[a]] = e[r[a]]);
  return n
}, qd = function (t) {
  var n = t.prefixCls, r = t.children, a = Hd(t, ["prefixCls", "children"]), o = d.exports.useContext(oe),
    l = o.getPrefixCls, c = l("form", n), i = d.exports.useMemo(function () {
      return { prefixCls: c, status: "error" }
    }, [c]);
  return s(Ol, {
    ...a, children: function (u, v, f) {
      return s($n.Provider, {
        value: i, children: r(u.map(function (p) {
          return S(S({}, p), { fieldKey: p.key })
        }), v, { errors: f.errors, warnings: f.warnings })
      })
    }
  })
};
const Yd = qd;

function Xd() {
  var e = d.exports.useContext(Ct), t = e.form;
  return t
}

var ut = kd;
ut.Item = Gd;
ut.List = Yd;
ut.ErrorList = oi;
ut.useForm = li;
ut.useFormInstance = Xd;
ut.useWatch = Il;
ut.Provider = Tc;
ut.create = function () {
};
const bm = ut;
var Qd = function (t) {
  var n, r = d.exports.useContext(oe), a = r.getPrefixCls, o = r.direction, l = t.prefixCls, c = t.className,
    i = c === void 0 ? "" : c, u = a("input-group", l),
    v = F(u, (n = {}, g(n, "".concat(u, "-lg"), t.size === "large"), g(n, "".concat(u, "-sm"), t.size === "small"), g(n, "".concat(u, "-compact"), t.compact), g(n, "".concat(u, "-rtl"), o === "rtl"), n), i),
    f = d.exports.useContext(Qe), p = d.exports.useMemo(function () {
      return S(S({}, f), { isFormItemInput: !1 })
    }, [f]);
  return s("span", {
    className: v,
    style: t.style,
    onMouseEnter: t.onMouseEnter,
    onMouseLeave: t.onMouseLeave,
    onFocus: t.onFocus,
    onBlur: t.onBlur,
    children: s(Qe.Provider, { value: p, children: t.children })
  })
};
const Jd = Qd;

function si(e, t) {
  var n = d.exports.useRef([]), r = function () {
    n.current.push(window.setTimeout(function () {
      var o, l, c, i;
      ((o = e.current) === null || o === void 0 ? void 0 : o.input) && ((l = e.current) === null || l === void 0 ? void 0 : l.input.getAttribute("type")) === "password" && ((c = e.current) === null || c === void 0 ? void 0 : c.input.hasAttribute("value")) && ((i = e.current) === null || i === void 0 || i.input.removeAttribute("value"))
    }))
  };
  return d.exports.useEffect(function () {
    return t && r(), function () {
      return n.current.forEach(function (a) {
        return window.clearTimeout(a)
      })
    }
  }, []), r
}

function Zd(e) {
  return !!(e.prefix || e.suffix || e.allowClear)
}

var ef = globalThis && globalThis.__rest || function (e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var a = 0, r = Object.getOwnPropertySymbols(e); a < r.length; a++) t.indexOf(r[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[a]) && (n[r[a]] = e[r[a]]);
  return n
};

function tf(e) {
  return typeof e > "u" || e === null ? "" : String(e)
}

function rn(e, t, n, r) {
  if (!!n) {
    var a = t;
    if (t.type === "click") {
      var o = e.cloneNode(!0);
      a = Object.create(t, { target: { value: o }, currentTarget: { value: o } }), o.value = "", n(a);
      return
    }
    if (r !== void 0) {
      a = Object.create(t, { target: { value: e }, currentTarget: { value: e } }), e.value = r, n(a);
      return
    }
    n(a)
  }
}

function rf(e, t) {
  if (!!e) {
    e.focus(t);
    var n = t || {}, r = n.cursor;
    if (r) {
      var a = e.value.length;
      switch (r) {
        case"start":
          e.setSelectionRange(0, 0);
          break;
        case"end":
          e.setSelectionRange(a, a);
          break;
        default:
          e.setSelectionRange(0, a);
          break
      }
    }
  }
}

var nf = d.exports.forwardRef(function (e, t) {
  var n, r, a, o = e.prefixCls, l = e.bordered, c = l === void 0 ? !0 : l, i = e.status, u = e.size, v = e.disabled,
    f = e.onBlur, p = e.onFocus, C = e.suffix, h = e.allowClear, y = e.addonAfter, m = e.addonBefore, x = e.className,
    b = e.onChange,
    N = ef(e, ["prefixCls", "bordered", "status", "size", "disabled", "onBlur", "onFocus", "suffix", "allowClear", "addonAfter", "addonBefore", "className", "onChange"]),
    P = sr.useContext(oe), O = P.getPrefixCls, w = P.direction, R = P.input, I = O("input", o),
    _ = d.exports.useRef(null), $ = _t(I, w), M = $.compactSize, E = $.compactItemClassnames, T = sr.useContext(tt),
    k = M || u || T, V = sr.useContext(it), z = v != null ? v : V, j = d.exports.useContext(Qe), D = j.status,
    B = j.hasFeedback, te = j.feedbackIcon, ne = jt(D, i), X = Zd(e) || !!B, Z = d.exports.useRef(X);
  d.exports.useEffect(function () {
    X && Z.current, Z.current = X
  }, [X]);
  var G = si(_, !0), K = function (J) {
    G(), f == null || f(J)
  }, A = function (J) {
    G(), p == null || p(J)
  }, L = function (J) {
    G(), b == null || b(J)
  }, q = (B || C) && re(He, { children: [C, B && te] }), H;
  return $e(h) === "object" && (h == null ? void 0 : h.clearIcon) ? H = h : h && (H = { clearIcon: s(xt, {}) }), s(jl, {
    ref: Lt(t, _),
    prefixCls: I,
    autoComplete: R == null ? void 0 : R.autoComplete, ...N,
    disabled: z || void 0,
    onBlur: K,
    onFocus: A,
    suffix: q,
    allowClear: H,
    className: F(x, E),
    onChange: L,
    addonAfter: y && s(Zn, { children: s(Qn, { override: !0, status: !0, children: y }) }),
    addonBefore: m && s(Zn, { children: s(Qn, { override: !0, status: !0, children: m }) }),
    inputClassName: F((n = {}, g(n, "".concat(I, "-sm"), k === "small"), g(n, "".concat(I, "-lg"), k === "large"), g(n, "".concat(I, "-rtl"), w === "rtl"), g(n, "".concat(I, "-borderless"), !c), n), !X && ct(I, ne)),
    affixWrapperClassName: F((r = {}, g(r, "".concat(I, "-affix-wrapper-sm"), k === "small"), g(r, "".concat(I, "-affix-wrapper-lg"), k === "large"), g(r, "".concat(I, "-affix-wrapper-rtl"), w === "rtl"), g(r, "".concat(I, "-affix-wrapper-borderless"), !c), r), ct("".concat(I, "-affix-wrapper"), ne, B)),
    wrapperClassName: F(g({}, "".concat(I, "-group-rtl"), w === "rtl")),
    groupClassName: F((a = {}, g(a, "".concat(I, "-group-wrapper-sm"), k === "small"), g(a, "".concat(I, "-group-wrapper-lg"), k === "large"), g(a, "".concat(I, "-group-wrapper-rtl"), w === "rtl"), a), ct("".concat(I, "-group-wrapper"), ne, B))
  })
});
const Bn = nf;
var af = globalThis && globalThis.__rest || function (e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var a = 0, r = Object.getOwnPropertySymbols(e); a < r.length; a++) t.indexOf(r[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[a]) && (n[r[a]] = e[r[a]]);
  return n
}, of = function (t) {
  return t ? s(Ma, {}) : s(Ki, {})
}, lf = { click: "onClick", hover: "onMouseOver" }, cf = d.exports.forwardRef(function (e, t) {
  var n = e.visibilityToggle, r = n === void 0 ? !0 : n, a = $e(r) === "object" && r.visible !== void 0,
    o = d.exports.useState(function () {
      return a ? r.visible : !1
    }), l = le(o, 2), c = l[0], i = l[1], u = d.exports.useRef(null);
  d.exports.useEffect(function () {
    a && i(r.visible)
  }, [a, r]);
  var v = si(u), f = function () {
    var y = e.disabled;
    y || (c && v(), i(function (m) {
      var x, b = !m;
      return $e(r) === "object" && ((x = r.onVisibleChange) === null || x === void 0 || x.call(r, b)), b
    }))
  }, p = function (y) {
    var m, x = e.action, b = x === void 0 ? "click" : x, N = e.iconRender, P = N === void 0 ? of : N, O = lf[b] || "",
      w = P(c),
      R = (m = {}, g(m, O, f), g(m, "className", "".concat(y, "-icon")), g(m, "key", "passwordIcon"), g(m, "onMouseDown", function (_) {
        _.preventDefault()
      }), g(m, "onMouseUp", function (_) {
        _.preventDefault()
      }), m);
    return d.exports.cloneElement(d.exports.isValidElement(w) ? w : s("span", { children: w }), R)
  }, C = function (y) {
    var m = y.getPrefixCls, x = e.className, b = e.prefixCls, N = e.inputPrefixCls, P = e.size,
      O = af(e, ["className", "prefixCls", "inputPrefixCls", "size"]), w = m("input", N), R = m("input-password", b),
      I = r && p(R), _ = F(R, x, g({}, "".concat(R, "-").concat(P), !!P)),
      $ = S(S({}, Ve(O, ["suffix", "iconRender", "visibilityToggle"])), {
        type: c ? "text" : "password",
        className: _,
        prefixCls: w,
        suffix: I
      });
    return P && ($.size = P), s(Bn, { ref: Lt(t, u), ...$ })
  };
  return s(st, { children: C })
});
const sf = cf;
var uf = globalThis && globalThis.__rest || function (e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var a = 0, r = Object.getOwnPropertySymbols(e); a < r.length; a++) t.indexOf(r[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[a]) && (n[r[a]] = e[r[a]]);
  return n
}, df = d.exports.forwardRef(function (e, t) {
  var n, r = e.prefixCls, a = e.inputPrefixCls, o = e.className, l = e.size, c = e.suffix, i = e.enterButton,
    u = i === void 0 ? !1 : i, v = e.addonAfter, f = e.loading, p = e.disabled, C = e.onSearch, h = e.onChange,
    y = e.onCompositionStart, m = e.onCompositionEnd,
    x = uf(e, ["prefixCls", "inputPrefixCls", "className", "size", "suffix", "enterButton", "addonAfter", "loading", "disabled", "onSearch", "onChange", "onCompositionStart", "onCompositionEnd"]),
    b = d.exports.useContext(oe), N = b.getPrefixCls, P = b.direction, O = d.exports.useContext(tt),
    w = d.exports.useRef(!1), R = N("input-search", r), I = N("input", a), _ = _t(R, P), $ = _.compactSize,
    M = $ || l || O, E = d.exports.useRef(null), T = function (A) {
      A && A.target && A.type === "click" && C && C(A.target.value, A), h && h(A)
    }, k = function (A) {
      var L;
      document.activeElement === ((L = E.current) === null || L === void 0 ? void 0 : L.input) && A.preventDefault()
    }, V = function (A) {
      var L, q;
      C && C((q = (L = E.current) === null || L === void 0 ? void 0 : L.input) === null || q === void 0 ? void 0 : q.value, A)
    }, z = function (A) {
      w.current || V(A)
    }, j = typeof u == "boolean" ? s(On, {}) : null, D = "".concat(R, "-button"), B, te = u || {},
    ne = te.type && te.type.__ANT_BUTTON === !0;
  ne || te.type === "button" ? B = ze(te, S({
    onMouseDown: k, onClick: function (A) {
      var L, q;
      (q = (L = te == null ? void 0 : te.props) === null || L === void 0 ? void 0 : L.onClick) === null || q === void 0 || q.call(L, A), V(A)
    }, key: "enterButton"
  }, ne ? { className: D, size: M } : {})) : B = s(ot, {
    className: D,
    type: u ? "primary" : void 0,
    size: M,
    disabled: p,
    onMouseDown: k,
    onClick: V,
    loading: f,
    icon: j,
    children: u
  }, "enterButton"), v && (B = [B, ze(v, { key: "addonAfter" })]);
  var X = F(R, (n = {}, g(n, "".concat(R, "-rtl"), P === "rtl"), g(n, "".concat(R, "-").concat(M), !!M), g(n, "".concat(R, "-with-button"), !!u), n), o),
    Z = function (A) {
      w.current = !0, y == null || y(A)
    }, G = function (A) {
      w.current = !1, m == null || m(A)
    };
  return s(Bn, {
    ref: Lt(E, t),
    onPressEnter: z, ...x,
    size: M,
    onCompositionStart: Z,
    onCompositionEnd: G,
    prefixCls: I,
    addonAfter: B,
    suffix: c,
    onChange: T,
    className: X,
    disabled: p
  })
});
const ff = df;
var vf = qe("text", "input");

function mf(e) {
  return !!(e.addonBefore || e.addonAfter)
}

var pf = function (e) {
  Ir(n, e);
  var t = kr(n);

  function n() {
    return _r(this, n), t.apply(this, arguments)
  }

  return Rr(n, [{
    key: "renderClearIcon", value: function (a) {
      var o, l = this.props, c = l.value, i = l.disabled, u = l.readOnly, v = l.handleReset, f = l.suffix,
        p = !i && !u && c, C = "".concat(a, "-clear-icon");
      return s(xt, {
        onClick: v,
        onMouseDown: function (y) {
          return y.preventDefault()
        },
        className: F((o = {}, g(o, "".concat(C, "-hidden"), !p), g(o, "".concat(C, "-has-suffix"), !!f), o), C),
        role: "button"
      })
    }
  }, {
    key: "renderTextAreaWithClearIcon", value: function (a, o, l) {
      var c, i = this.props, u = i.value, v = i.allowClear, f = i.className, p = i.style, C = i.direction,
        h = i.bordered, y = i.hidden, m = i.status, x = l.status, b = l.hasFeedback;
      if (!v) return ze(o, { value: u });
      var N = F("".concat(a, "-affix-wrapper"), "".concat(a, "-affix-wrapper-textarea-with-clear-btn"), ct("".concat(a, "-affix-wrapper"), jt(x, m), b), (c = {}, g(c, "".concat(a, "-affix-wrapper-rtl"), C === "rtl"), g(c, "".concat(a, "-affix-wrapper-borderless"), !h), g(c, "".concat(f), !mf(this.props) && f), c));
      return re("span", {
        className: N,
        style: p,
        hidden: y,
        children: [ze(o, { style: null, value: u }), this.renderClearIcon(a)]
      })
    }
  }, {
    key: "render", value: function () {
      var a = this;
      return s(Qe.Consumer, {
        children: function (o) {
          var l = a.props, c = l.prefixCls, i = l.inputType, u = l.element;
          if (i === vf[0]) return a.renderTextAreaWithClearIcon(c, u, o)
        }
      })
    }
  }]), n
}(d.exports.Component);
const hf = pf;
var gf = globalThis && globalThis.__rest || function (e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var a = 0, r = Object.getOwnPropertySymbols(e); a < r.length; a++) t.indexOf(r[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[a]) && (n[r[a]] = e[r[a]]);
  return n
};

function ui(e, t) {
  return ye(e || "").slice(0, t).join("")
}

function da(e, t, n, r) {
  var a = n;
  return e ? a = ui(n, r) : ye(t || "").length < n.length && ye(n || "").length > r && (a = t), a
}

var Cf = d.exports.forwardRef(function (e, t) {
  var n, r = e.prefixCls, a = e.bordered, o = a === void 0 ? !0 : a, l = e.showCount, c = l === void 0 ? !1 : l,
    i = e.maxLength, u = e.className, v = e.style, f = e.size, p = e.disabled, C = e.onCompositionStart,
    h = e.onCompositionEnd, y = e.onChange, m = e.status,
    x = gf(e, ["prefixCls", "bordered", "showCount", "maxLength", "className", "style", "size", "disabled", "onCompositionStart", "onCompositionEnd", "onChange", "status"]),
    b = d.exports.useContext(oe), N = b.getPrefixCls, P = b.direction, O = d.exports.useContext(tt),
    w = d.exports.useContext(it), R = p != null ? p : w, I = d.exports.useContext(Qe), _ = I.status, $ = I.hasFeedback,
    M = I.isFormItemInput, E = I.feedbackIcon, T = jt(_, m), k = d.exports.useRef(null), V = d.exports.useRef(null),
    z = d.exports.useState(!1), j = le(z, 2), D = j[0], B = j[1], te = d.exports.useRef(), ne = d.exports.useRef(0),
    X = It(x.defaultValue, { value: x.value }), Z = le(X, 2), G = Z[0], K = Z[1], A = x.hidden, L = function (W, U) {
      x.value === void 0 && (K(W), U == null || U())
    }, q = Number(i) > 0, H = function (W) {
      B(!0), te.current = G, ne.current = W.currentTarget.selectionStart, C == null || C(W)
    }, Q = function (W) {
      var U;
      B(!1);
      var ee = W.currentTarget.value;
      if (q) {
        var ge = ne.current >= i + 1 || ne.current === ((U = te.current) === null || U === void 0 ? void 0 : U.length);
        ee = da(ge, te.current, ee, i)
      }
      ee !== G && (L(ee), rn(W.currentTarget, W, y, ee)), h == null || h(W)
    }, J = function (W) {
      var U = W.target.value;
      if (!D && q) {
        var ee = W.target.selectionStart >= i + 1 || W.target.selectionStart === U.length || !W.target.selectionStart;
        U = da(ee, G, U, i)
      }
      L(U), rn(W.currentTarget, W, y, U)
    }, de = function (W) {
      var U, ee, ge;
      L(""), (U = k.current) === null || U === void 0 || U.focus(), rn((ge = (ee = k.current) === null || ee === void 0 ? void 0 : ee.resizableTextArea) === null || ge === void 0 ? void 0 : ge.textArea, W, y)
    }, ae = N("input", r);
  d.exports.useImperativeHandle(t, function () {
    var ce;
    return {
      resizableTextArea: (ce = k.current) === null || ce === void 0 ? void 0 : ce.resizableTextArea,
      focus: function (U) {
        var ee, ge;
        rf((ge = (ee = k.current) === null || ee === void 0 ? void 0 : ee.resizableTextArea) === null || ge === void 0 ? void 0 : ge.textArea, U)
      },
      blur: function () {
        var U;
        return (U = k.current) === null || U === void 0 ? void 0 : U.blur()
      }
    }
  });
  var pe = s(Al, {
    ...Ve(x, ["allowClear"]),
    disabled: R,
    className: F((n = {}, g(n, "".concat(ae, "-borderless"), !o), g(n, u, u && !c), g(n, "".concat(ae, "-sm"), O === "small" || f === "small"), g(n, "".concat(ae, "-lg"), O === "large" || f === "large"), n), ct(ae, T)),
    style: c ? { resize: v == null ? void 0 : v.resize } : v,
    prefixCls: ae,
    onCompositionStart: H,
    onChange: J,
    onCompositionEnd: Q,
    ref: k
  }), Y = tf(G);
  !D && q && (x.value === null || x.value === void 0) && (Y = ui(Y, i));
  var ie = s(hf, {
    disabled: R, ...x,
    prefixCls: ae,
    direction: P,
    inputType: "text",
    value: Y,
    element: pe,
    handleReset: de,
    ref: V,
    bordered: o,
    status: m,
    style: c ? void 0 : v
  });
  if (c || $) {
    var ue, xe = ye(Y).length, fe = "";
    return $e(c) === "object" ? fe = c.formatter({
      value: Y,
      count: xe,
      maxLength: i
    }) : fe = "".concat(xe).concat(q ? " / ".concat(i) : ""), re("div", {
      hidden: A,
      className: F("".concat(ae, "-textarea"), (ue = {}, g(ue, "".concat(ae, "-textarea-rtl"), P === "rtl"), g(ue, "".concat(ae, "-textarea-show-count"), c), g(ue, "".concat(ae, "-textarea-in-form-item"), M), ue), ct("".concat(ae, "-textarea"), T, $), u),
      style: v,
      "data-count": fe,
      children: [ie, $ && s("span", { className: "".concat(ae, "-textarea-suffix"), children: E })]
    })
  }
  return ie
});
const xf = Cf;
var tr = Bn;
tr.Group = Jd;
tr.Search = ff;
tr.TextArea = xf;
tr.Password = sf;
const bf = tr;
var rr = ls;
rr.Header = as;
rr.Footer = os;
rr.Content = is;
rr.Sider = ds;
const ym = rr;
var di = function (t) {
  return s(Mr, { ...t, size: "small" })
}, fi = function (t) {
  return s(Mr, { ...t, size: "middle" })
};
di.Option = Mr.Option;
fi.Option = Mr.Option;
var yf = globalThis && globalThis.__rest || function (e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var a = 0, r = Object.getOwnPropertySymbols(e); a < r.length; a++) t.indexOf(r[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[a]) && (n[r[a]] = e[r[a]]);
  return n
}, Pf = function (t) {
  var n = t.prefixCls, r = t.selectPrefixCls, a = t.className, o = t.size, l = t.locale, c = t.selectComponentClass,
    i = t.responsive, u = t.showSizeChanger,
    v = yf(t, ["prefixCls", "selectPrefixCls", "className", "size", "locale", "selectComponentClass", "responsive", "showSizeChanger"]),
    f = Oo(i), p = f.xs, C = d.exports.useContext(oe), h = C.getPrefixCls, y = C.direction, m = C.pagination,
    x = m === void 0 ? {} : m, b = h("pagination", n), N = u != null ? u : x.showSizeChanger, P = function () {
      var w = s("span", { className: "".concat(b, "-item-ellipsis"), children: "\u2022\u2022\u2022" }),
        R = s("button", { className: "".concat(b, "-item-link"), type: "button", tabIndex: -1, children: s(ln, {}) }),
        I = s("button", { className: "".concat(b, "-item-link"), type: "button", tabIndex: -1, children: s(vr, {}) }),
        _ = s("a", {
          className: "".concat(b, "-item-link"),
          children: re("div", {
            className: "".concat(b, "-item-container"),
            children: [s(Vi, { className: "".concat(b, "-item-link-icon") }), w]
          })
        }), $ = s("a", {
          className: "".concat(b, "-item-link"),
          children: re("div", {
            className: "".concat(b, "-item-container"),
            children: [s(Ui, { className: "".concat(b, "-item-link-icon") }), w]
          })
        });
      if (y === "rtl") {
        var M = [I, R];
        R = M[0], I = M[1];
        var E = [$, _];
        _ = E[0], $ = E[1]
      }
      return { prevIcon: R, nextIcon: I, jumpPrevIcon: _, jumpNextIcon: $ }
    };
  return s(kt, {
    componentName: "Pagination", defaultLocale: Aa, children: function (O) {
      var w, R = S(S({}, O), l), I = o === "small" || !!(p && !o && i), _ = h("select", r),
        $ = F((w = {}, g(w, "".concat(b, "-mini"), I), g(w, "".concat(b, "-rtl"), y === "rtl"), w), a);
      return s(zl, {
        ...P(), ...v,
        prefixCls: b,
        selectPrefixCls: _,
        className: $,
        selectComponentClass: c || (I ? di : fi),
        locale: R,
        showSizeChanger: N
      })
    }
  })
};
const wf = Pf;
var Sf = globalThis && globalThis.__rest || function (e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var a = 0, r = Object.getOwnPropertySymbols(e); a < r.length; a++) t.indexOf(r[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[a]) && (n[r[a]] = e[r[a]]);
  return n
};
qe("small", "default", "large");
var dr = null;

function Nf(e, t) {
  var n = t.indicator, r = "".concat(e, "-dot");
  return n === null ? null : Xe(n) ? ze(n, { className: F(n.props.className, r) }) : Xe(dr) ? ze(dr, { className: F(dr.props.className, r) }) : re("span", {
    className: F(r, "".concat(e, "-dot-spin")),
    children: [s("i", { className: "".concat(e, "-dot-item") }), s("i", { className: "".concat(e, "-dot-item") }), s("i", { className: "".concat(e, "-dot-item") }), s("i", { className: "".concat(e, "-dot-item") })]
  })
}

function Of(e, t) {
  return !!e && !!t && !isNaN(Number(t))
}

var If = function (t) {
  var n = t.spinPrefixCls, r = t.spinning, a = r === void 0 ? !0 : r, o = t.delay, l = t.className, c = t.size,
    i = c === void 0 ? "default" : c, u = t.tip, v = t.wrapperClassName, f = t.style, p = t.children,
    C = Sf(t, ["spinPrefixCls", "spinning", "delay", "className", "size", "tip", "wrapperClassName", "style", "children"]),
    h = d.exports.useState(function () {
      return a && !Of(a, o)
    }), y = le(h, 2), m = y[0], x = y[1];
  d.exports.useEffect(function () {
    var P = ol(function () {
      x(a)
    }, o);
    return P(), function () {
      var O;
      (O = P == null ? void 0 : P.cancel) === null || O === void 0 || O.call(P)
    }
  }, [o, a]);
  var b = function () {
    return typeof p < "u"
  }, N = function (O) {
    var w, R = O.direction,
      I = F(n, (w = {}, g(w, "".concat(n, "-sm"), i === "small"), g(w, "".concat(n, "-lg"), i === "large"), g(w, "".concat(n, "-spinning"), m), g(w, "".concat(n, "-show-text"), !!u), g(w, "".concat(n, "-rtl"), R === "rtl"), w), l),
      _ = Ve(C, ["indicator", "prefixCls"]), $ = re("div", {
        ..._,
        style: f,
        className: I,
        "aria-live": "polite",
        "aria-busy": m,
        children: [Nf(n, t), u ? s("div", { className: "".concat(n, "-text"), children: u }) : null]
      });
    if (b()) {
      var M = F("".concat(n, "-container"), g({}, "".concat(n, "-blur"), m));
      return re("div", {
        ..._,
        className: F("".concat(n, "-nested-loading"), v),
        children: [m && s("div", { children: $ }, "loading"), s("div", { className: M, children: p }, "container")]
      })
    }
    return $
  };
  return s(st, { children: N })
}, vi = function (t) {
  var n = t.prefixCls, r = d.exports.useContext(oe), a = r.getPrefixCls, o = a("spin", n),
    l = S(S({}, t), { spinPrefixCls: o });
  return s(If, { ...l })
};
vi.setDefaultIndicator = function (e) {
  dr = e
};
const kf = vi;

function fa(e) {
  return !!(e && !!e.then)
}

var _f = function (t) {
  var n = d.exports.useRef(!1), r = d.exports.useRef(), a = ka(!1), o = le(a, 2), l = o[0], c = o[1], i = t.close,
    u = function () {
      i == null || i.apply(void 0, arguments)
    };
  d.exports.useEffect(function () {
    var m;
    if (t.autoFocus) {
      var x = r.current;
      m = setTimeout(function () {
        return x.focus()
      })
    }
    return function () {
      m && clearTimeout(m)
    }
  }, []);
  var v = function (x) {
    !fa(x) || (c(!0), x.then(function () {
      c(!1, !0), u.apply(void 0, arguments), n.current = !1
    }, function (b) {
      console.error(b), c(!1, !0), n.current = !1
    }))
  }, f = function (x) {
    var b = t.actionFn;
    if (!n.current) {
      if (n.current = !0, !b) {
        u();
        return
      }
      var N;
      if (t.emitEvent) {
        if (N = b(x), t.quitOnNullishReturnValue && !fa(N)) {
          n.current = !1, u(x);
          return
        }
      } else if (b.length) N = b(i), n.current = !1; else if (N = b(), !N) {
        u();
        return
      }
      v(N)
    }
  }, p = t.type, C = t.children, h = t.prefixCls, y = t.buttonProps;
  return s(ot, { ...zo(p), onClick: f, loading: l, prefixCls: h, ...y, ref: r, children: C })
};
const Rf = _f;
var $f = function (t) {
  var n = t.prefixCls, r = t.okButtonProps, a = t.cancelButtonProps, o = t.title, l = t.cancelText, c = t.okText,
    i = t.okType, u = t.icon, v = t.showCancel, f = v === void 0 ? !0 : v, p = t.close, C = t.onConfirm, h = t.onCancel,
    y = d.exports.useContext(oe), m = y.getPrefixCls;
  return s(kt, {
    componentName: "Popconfirm", defaultLocale: at.Popconfirm, children: function (x) {
      return re("div", {
        className: "".concat(n, "-inner-content"),
        children: [re("div", {
          className: "".concat(n, "-message"),
          children: [u && s("span", {
            className: "".concat(n, "-message-icon"),
            children: u
          }), s("div", { className: "".concat(n, "-message-title"), children: mn(o) })]
        }), re("div", {
          className: "".concat(n, "-buttons"),
          children: [f && s(ot, {
            onClick: h,
            size: "small", ...a,
            children: l != null ? l : x.cancelText
          }), s(Rf, {
            buttonProps: S(S({ size: "small" }, zo(i)), r),
            actionFn: C,
            close: p,
            prefixCls: m("btn"),
            quitOnNullishReturnValue: !0,
            emitEvent: !0,
            children: c != null ? c : x.okText
          })]
        })]
      })
    }
  })
}, va = globalThis, Tf = globalThis && globalThis.__rest || function (e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var a = 0, r = Object.getOwnPropertySymbols(e); a < r.length; a++) t.indexOf(r[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[a]) && (n[r[a]] = e[r[a]]);
  return n
}, Ef = d.exports.forwardRef(function (e, t) {
  var n = d.exports.useContext(oe), r = n.getPrefixCls, a = It(!1, {
      value: e.open !== void 0 ? e.open : e.visible,
      defaultValue: e.defaultOpen !== void 0 ? e.defaultOpen : e.defaultVisible
    }), o = le(a, 2), l = o[0], c = o[1], i = function (k, V) {
      var z, j;
      c(k, !0), (z = e.onVisibleChange) === null || z === void 0 || z.call(e, k, V), (j = e.onOpenChange) === null || j === void 0 || j.call(e, k, V)
    }, u = function (k) {
      i(!1, k)
    }, v = function (k) {
      var V;
      return (V = e.onConfirm) === null || V === void 0 ? void 0 : V.call(va, k)
    }, f = function (k) {
      var V;
      i(!1, k), (V = e.onCancel) === null || V === void 0 || V.call(va, k)
    }, p = function (k) {
      k.keyCode === _a.ESC && l && i(!1, k)
    }, C = function (k) {
      var V = e.disabled, z = V === void 0 ? !1 : V;
      z || i(k)
    }, h = e.prefixCls, y = e.placement, m = y === void 0 ? "top" : y, x = e.trigger, b = x === void 0 ? "click" : x,
    N = e.okType, P = N === void 0 ? "primary" : N, O = e.icon, w = O === void 0 ? s(Nn, {}) : O, R = e.children,
    I = e.overlayClassName,
    _ = Tf(e, ["prefixCls", "placement", "trigger", "okType", "icon", "children", "overlayClassName"]),
    $ = r("popover", h), M = r("popconfirm", h), E = F(M, I);
  return s(Zc, {
    ..._,
    trigger: b,
    prefixCls: $,
    placement: m,
    onOpenChange: C,
    open: l,
    ref: t,
    overlayClassName: E,
    _overlay: s($f, { okType: P, icon: w, ...e, prefixCls: $, close: u, onConfirm: v, onCancel: f }),
    children: ze(R, {
      onKeyDown: function (k) {
        var V, z;
        d.exports.isValidElement(R) && ((z = R == null ? void 0 : (V = R.props).onKeyDown) === null || z === void 0 || z.call(V, k)), p(k)
      }
    })
  })
});
const Pm = Ef;

function Nt(e) {
  return !e || e < 0 ? 0 : e > 100 ? 100 : e
}

function Sr(e) {
  var t = e.success, n = e.successPercent, r = n;
  return t && "progress" in t && (r = t.progress), t && "percent" in t && (r = t.percent), r
}

function Mf(e) {
  var t = e.percent, n = e.success, r = e.successPercent, a = Nt(Sr({ success: n, successPercent: r }));
  return [a, Nt(Nt(t) - a)]
}

function Df(e) {
  var t = e.success, n = t === void 0 ? {} : t, r = e.strokeColor, a = n.strokeColor;
  return [a || cn.green, r || null]
}

var Ff = function (t) {
  var n = t.prefixCls, r = t.width, a = t.strokeWidth, o = t.trailColor, l = o === void 0 ? null : o,
    c = t.strokeLinecap, i = c === void 0 ? "round" : c, u = t.gapPosition, v = t.gapDegree, f = t.type, p = t.children,
    C = t.success, h = r || 120, y = { width: h, height: h, fontSize: h * .15 + 6 }, m = a || 6,
    x = u || f === "dashboard" && "bottom" || void 0, b = function () {
      if (v || v === 0) return v;
      if (f === "dashboard") return 75
    }, N = Object.prototype.toString.call(t.strokeColor) === "[object Object]",
    P = Df({ success: C, strokeColor: t.strokeColor }),
    O = F("".concat(n, "-inner"), g({}, "".concat(n, "-circle-gradient"), N));
  return re("div", {
    className: O,
    style: y,
    children: [s(Bl, {
      percent: Mf(t),
      strokeWidth: m,
      trailWidth: m,
      strokeColor: P,
      strokeLinecap: i,
      trailColor: l,
      prefixCls: n,
      gapDegree: b(),
      gapPosition: x
    }), p]
  })
};
const zf = Ff;
var Lf = globalThis && globalThis.__rest || function (e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var a = 0, r = Object.getOwnPropertySymbols(e); a < r.length; a++) t.indexOf(r[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[a]) && (n[r[a]] = e[r[a]]);
  return n
}, jf = function (t) {
  var n = [];
  return Object.keys(t).forEach(function (r) {
    var a = parseFloat(r.replace(/%/g, ""));
    isNaN(a) || n.push({ key: a, value: t[r] })
  }), n = n.sort(function (r, a) {
    return r.key - a.key
  }), n.map(function (r) {
    var a = r.key, o = r.value;
    return "".concat(o, " ").concat(a, "%")
  }).join(", ")
}, Af = function (t, n) {
  var r = t.from, a = r === void 0 ? cn.blue : r, o = t.to, l = o === void 0 ? cn.blue : o, c = t.direction,
    i = c === void 0 ? n === "rtl" ? "to left" : "to right" : c, u = Lf(t, ["from", "to", "direction"]);
  if (Object.keys(u).length !== 0) {
    var v = jf(u);
    return { backgroundImage: "linear-gradient(".concat(i, ", ").concat(v, ")") }
  }
  return { backgroundImage: "linear-gradient(".concat(i, ", ").concat(a, ", ").concat(l, ")") }
}, Bf = function (t) {
  var n = t.prefixCls, r = t.direction, a = t.percent, o = t.strokeWidth, l = t.size, c = t.strokeColor,
    i = t.strokeLinecap, u = i === void 0 ? "round" : i, v = t.children, f = t.trailColor, p = f === void 0 ? null : f,
    C = t.success, h = c && typeof c != "string" ? Af(c, r) : { background: c },
    y = u === "square" || u === "butt" ? 0 : void 0, m = { backgroundColor: p || void 0, borderRadius: y },
    x = S({ width: "".concat(Nt(a), "%"), height: o || (l === "small" ? 6 : 8), borderRadius: y }, h), b = Sr(t), N = {
      width: "".concat(Nt(b), "%"),
      height: o || (l === "small" ? 6 : 8),
      borderRadius: y,
      backgroundColor: C == null ? void 0 : C.strokeColor
    }, P = b !== void 0 ? s("div", { className: "".concat(n, "-success-bg"), style: N }) : null;
  return re(He, {
    children: [s("div", {
      className: "".concat(n, "-outer"),
      children: re("div", {
        className: "".concat(n, "-inner"),
        style: m,
        children: [s("div", { className: "".concat(n, "-bg"), style: x }), P]
      })
    }), v]
  })
};
const Kf = Bf;
var Vf = function (t) {
  for (var n = t.size, r = t.steps, a = t.percent, o = a === void 0 ? 0 : a, l = t.strokeWidth, c = l === void 0 ? 8 : l, i = t.strokeColor, u = t.trailColor, v = u === void 0 ? null : u, f = t.prefixCls, p = t.children, C = Math.round(r * (o / 100)), h = n === "small" ? 2 : 14, y = new Array(r), m = 0; m < r; m++) {
    var x = Array.isArray(i) ? i[m] : i;
    y[m] = s("div", {
      className: F("".concat(f, "-steps-item"), g({}, "".concat(f, "-steps-item-active"), m <= C - 1)),
      style: { backgroundColor: m <= C - 1 ? x : v, width: h, height: c }
    }, m)
  }
  return re("div", { className: "".concat(f, "-steps-outer"), children: [y, p] })
};
const Uf = Vf;
var Wf = globalThis && globalThis.__rest || function (e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var a = 0, r = Object.getOwnPropertySymbols(e); a < r.length; a++) t.indexOf(r[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[a]) && (n[r[a]] = e[r[a]]);
  return n
};
qe("line", "circle", "dashboard");
var Gf = qe("normal", "exception", "active", "success"), Hf = function (t) {
  var n, r = t.prefixCls, a = t.className, o = t.steps, l = t.strokeColor, c = t.percent, i = c === void 0 ? 0 : c,
    u = t.size, v = u === void 0 ? "default" : u, f = t.showInfo, p = f === void 0 ? !0 : f, C = t.type,
    h = C === void 0 ? "line" : C,
    y = Wf(t, ["prefixCls", "className", "steps", "strokeColor", "percent", "size", "showInfo", "type"]);

  function m() {
    var T = Sr(t);
    return parseInt(T !== void 0 ? T.toString() : i.toString(), 10)
  }

  function x() {
    var T = t.status;
    return !Gf.includes(T) && m() >= 100 ? "success" : T || "normal"
  }

  function b(T, k) {
    var V = t.format, z = Sr(t);
    if (!p) return null;
    var j, D = V || function (te) {
      return "".concat(te, "%")
    }, B = h === "line";
    return V || k !== "exception" && k !== "success" ? j = D(Nt(i), Nt(z)) : k === "exception" ? j = B ? s(xt, {}) : s(Qt, {}) : k === "success" && (j = B ? s(Sn, {}) : s($a, {})), s("span", {
      className: "".concat(T, "-text"),
      title: typeof j == "string" ? j : void 0,
      children: j
    })
  }

  var N = d.exports.useContext(oe), P = N.getPrefixCls, O = N.direction, w = P("progress", r), R = x(), I = b(w, R),
    _ = Array.isArray(l) ? l[0] : l, $ = typeof l == "string" || Array.isArray(l) ? l : void 0, M;
  h === "line" ? M = o ? s(Uf, { ...t, strokeColor: $, prefixCls: w, steps: o, children: I }) : s(Kf, {
    ...t,
    strokeColor: _,
    prefixCls: w,
    direction: O,
    children: I
  }) : (h === "circle" || h === "dashboard") && (M = s(zf, {
    ...t,
    strokeColor: _,
    prefixCls: w,
    progressStatus: R,
    children: I
  }));
  var E = F(w, (n = {}, g(n, "".concat(w, "-").concat(h === "dashboard" && "circle" || o && "steps" || h), !0), g(n, "".concat(w, "-status-").concat(R), !0), g(n, "".concat(w, "-show-info"), p), g(n, "".concat(w, "-").concat(v), v), g(n, "".concat(w, "-rtl"), O === "rtl"), n), a);
  return s("div", {
    ...Ve(y, ["status", "format", "trailColor", "strokeWidth", "width", "gapDegree", "gapPosition", "strokeLinecap", "success", "successPercent"]),
    className: E,
    children: M
  })
};
const qf = Hf;

function Yf(e) {
  return null
}

function Xf(e) {
  return null
}

function Qf(e) {
  return function (n) {
    var r, a = n.prefixCls, o = n.onExpand, l = n.record, c = n.expanded, i = n.expandable,
      u = "".concat(a, "-row-expand-icon");
    return s("button", {
      type: "button",
      onClick: function (f) {
        o(l, f), f.stopPropagation()
      },
      className: F(u, (r = {}, g(r, "".concat(u, "-spaced"), !i), g(r, "".concat(u, "-expanded"), i && c), g(r, "".concat(u, "-collapsed"), i && !c), r)),
      "aria-label": c ? e.collapse : e.expand,
      "aria-expanded": c
    })
  }
}

function zt(e, t) {
  return "key" in e && e.key !== void 0 && e.key !== null ? e.key : e.dataIndex ? Array.isArray(e.dataIndex) ? e.dataIndex.join(".") : e.dataIndex : t
}

function jr(e, t) {
  return t ? "".concat(t, "-").concat(e) : "".concat(e)
}

function mi(e) {
  var t, n, r;
  return !e || !e.props || !e.props.children ? "" : typeof e.props.children == "string" ? e.props.children : ((r = (n = (t = e.props.children) === null || t === void 0 ? void 0 : t.map) === null || n === void 0 ? void 0 : n.call(t, function (a) {
    return mi(a)
  })) === null || r === void 0 ? void 0 : r[0]) || ""
}

function Ht(e, t) {
  return typeof e == "function" ? e(t) : sr.isValidElement(e) && mi(e) || e
}

var lt;
(function (e) {
  e[e.None = 0] = "None", e[e.Start = 1] = "Start", e[e.End = 2] = "End"
})(lt || (lt = {}));

function Kn(e, t) {
  function n(r) {
    var a = r.key, o = r.children;
    t(a, r) !== !1 && Kn(o || [], t)
  }

  e.forEach(n)
}

function Jf(e) {
  var t = e.treeData, n = e.expandedKeys, r = e.startKey, a = e.endKey, o = [], l = lt.None;
  if (r && r === a) return [r];
  if (!r || !a) return [];

  function c(i) {
    return i === r || i === a
  }

  return Kn(t, function (i) {
    if (l === lt.End) return !1;
    if (c(i)) {
      if (o.push(i), l === lt.None) l = lt.Start; else if (l === lt.Start) return l = lt.End, !1
    } else l === lt.Start && o.push(i);
    return n.includes(i)
  }), o
}

function nn(e, t) {
  var n = ye(t), r = [];
  return Kn(e, function (a, o) {
    var l = n.indexOf(a);
    return l !== -1 && (r.push(o), n.splice(l, 1)), !!n.length
  }), r
}

var ma = globalThis && globalThis.__rest || function (e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var a = 0, r = Object.getOwnPropertySymbols(e); a < r.length; a++) t.indexOf(r[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[a]) && (n[r[a]] = e[r[a]]);
  return n
};

function Zf(e) {
  var t = e.isLeaf, n = e.expanded;
  return t ? s(Da, {}) : n ? s(Wi, {}) : s(Gi, {})
}

function pa(e) {
  var t = e.treeData, n = e.children;
  return t || hl(n)
}

var ev = function (t, n) {
  var r = t.defaultExpandAll, a = t.defaultExpandParent, o = t.defaultExpandedKeys,
    l = ma(t, ["defaultExpandAll", "defaultExpandParent", "defaultExpandedKeys"]), c = d.exports.useRef(),
    i = d.exports.useRef(), u = function () {
      var j = Fa(pa(l)), D = j.keyEntities, B;
      return r ? B = Object.keys(D) : a ? B = pl(l.expandedKeys || o || [], D) : B = l.expandedKeys || o, B
    }, v = d.exports.useState(l.selectedKeys || l.defaultSelectedKeys || []), f = le(v, 2), p = f[0], C = f[1],
    h = d.exports.useState(function () {
      return u()
    }), y = le(h, 2), m = y[0], x = y[1];
  d.exports.useEffect(function () {
    "selectedKeys" in l && C(l.selectedKeys)
  }, [l.selectedKeys]), d.exports.useEffect(function () {
    "expandedKeys" in l && x(l.expandedKeys)
  }, [l.expandedKeys]);
  var b = function (j, D) {
      var B;
      return "expandedKeys" in l || x(j), (B = l.onExpand) === null || B === void 0 ? void 0 : B.call(l, j, D)
    }, N = function (j, D) {
      var B, te = l.multiple, ne = D.node, X = D.nativeEvent, Z = ne.key, G = Z === void 0 ? "" : Z, K = pa(l),
        A = S(S({}, D), { selected: !0 }), L = (X == null ? void 0 : X.ctrlKey) || (X == null ? void 0 : X.metaKey),
        q = X == null ? void 0 : X.shiftKey, H;
      te && L ? (H = j, c.current = G, i.current = H, A.selectedNodes = nn(K, H)) : te && q ? (H = Array.from(new Set([].concat(ye(i.current || []), ye(Jf({
        treeData: K,
        expandedKeys: m,
        startKey: G,
        endKey: c.current
      }))))), A.selectedNodes = nn(K, H)) : (H = [G], c.current = G, i.current = H, A.selectedNodes = nn(K, H)), (B = l.onSelect) === null || B === void 0 || B.call(l, H, A), "selectedKeys" in l || C(H)
    }, P = d.exports.useContext(oe), O = P.getPrefixCls, w = P.direction, R = l.prefixCls, I = l.className,
    _ = l.showIcon, $ = _ === void 0 ? !0 : _, M = l.expandAction, E = M === void 0 ? "click" : M,
    T = ma(l, ["prefixCls", "className", "showIcon", "expandAction"]), k = O("tree", R),
    V = F("".concat(k, "-directory"), g({}, "".concat(k, "-directory-rtl"), w === "rtl"), I);
  return s(pi, {
    icon: Zf,
    ref: n,
    blockNode: !0, ...T,
    showIcon: $,
    expandAction: E,
    prefixCls: k,
    className: V,
    expandedKeys: m,
    selectedKeys: p,
    onSelect: N,
    onExpand: b
  })
}, tv = d.exports.forwardRef(ev);
const rv = tv;
var ha = 4;

function nv(e) {
  var t, n = e.dropPosition, r = e.dropLevelOffset, a = e.prefixCls, o = e.indent, l = e.direction,
    c = l === void 0 ? "ltr" : l, i = c === "ltr" ? "left" : "right", u = c === "ltr" ? "right" : "left",
    v = (t = {}, g(t, i, -r * o + ha), g(t, u, 0), t);
  switch (n) {
    case-1:
      v.top = -3;
      break;
    case 1:
      v.bottom = -3;
      break;
    default:
      v.bottom = -3, v[i] = o + ha;
      break
  }
  return s("div", { style: v, className: "".concat(a, "-drop-indicator") })
}

function av(e, t, n, r) {
  var a = r.isLeaf, o = r.expanded, l = r.loading;
  if (l) return s(gt, { className: "".concat(e, "-switcher-loading-icon") });
  var c;
  if (n && $e(n) === "object" && (c = n.showLeafIcon), a) {
    if (!n) return null;
    if (typeof c != "boolean" && !!c) {
      var i = typeof c == "function" ? c(r) : c, u = "".concat(e, "-switcher-line-custom-icon");
      return Xe(i) ? ze(i, { className: F(i.props.className || "", u) }) : i
    }
    return c ? s(Da, { className: "".concat(e, "-switcher-line-icon") }) : s("span", { className: "".concat(e, "-switcher-leaf-line") })
  }
  var v = "".concat(e, "-switcher-icon"), f = typeof t == "function" ? t(r) : t;
  return Xe(f) ? ze(f, { className: F(f.props.className || "", v) }) : f || (n ? o ? s(Hi, { className: "".concat(e, "-switcher-line-icon") }) : s(qi, { className: "".concat(e, "-switcher-line-icon") }) : s(Yi, { className: v }))
}

var Vn = d.exports.forwardRef(function (e, t) {
  var n, r = d.exports.useContext(oe), a = r.getPrefixCls, o = r.direction, l = r.virtual, c = e.prefixCls,
    i = e.className, u = e.showIcon, v = u === void 0 ? !1 : u, f = e.showLine, p = e.switcherIcon, C = e.blockNode,
    h = C === void 0 ? !1 : C, y = e.children, m = e.checkable, x = m === void 0 ? !1 : m, b = e.selectable,
    N = b === void 0 ? !0 : b, P = e.draggable, O = e.motion, w = O === void 0 ? S(S({}, Yt), { motionAppear: !1 }) : O,
    R = a("tree", c), I = S(S({}, e), {
      checkable: x,
      selectable: N,
      showIcon: v,
      motion: w,
      blockNode: h,
      showLine: Boolean(f),
      dropIndicatorRender: nv
    }), _ = d.exports.useMemo(function () {
      if (!P) return !1;
      var $ = {};
      switch ($e(P)) {
        case"function":
          $.nodeDraggable = P;
          break;
        case"object":
          $ = S({}, P);
          break
      }
      return $.icon !== !1 && ($.icon = $.icon || s(Xi, {})), $
    }, [P]);
  return s(gl, {
    itemHeight: 20,
    ref: t,
    virtual: l, ...I,
    prefixCls: R,
    className: F((n = {}, g(n, "".concat(R, "-icon-hide"), !v), g(n, "".concat(R, "-block-node"), h), g(n, "".concat(R, "-unselectable"), !N), g(n, "".concat(R, "-rtl"), o === "rtl"), n), i),
    direction: o,
    checkable: x && s("span", { className: "".concat(R, "-checkbox-inner") }),
    selectable: N,
    switcherIcon: function (M) {
      return av(R, p, f, M)
    },
    draggable: _,
    children: y
  })
});
Vn.TreeNode = Cl;
Vn.DirectoryTree = rv;
const pi = Vn;

function ov(e) {
  var t = d.exports.useRef(e), n = Tn();
  return [function () {
    return t.current
  }, function (r) {
    t.current = r, n()
  }]
}

function ga(e) {
  var t = e.value, n = e.onChange, r = e.filterSearch, a = e.tablePrefixCls, o = e.locale;
  return r ? s("div", {
    className: "".concat(a, "-filter-dropdown-search"),
    children: s(bf, {
      prefix: s(On, {}),
      placeholder: o.filterSearchPlaceholder,
      onChange: n,
      value: t,
      htmlSize: 1,
      className: "".concat(a, "-filter-dropdown-search-input")
    })
  }) : null
}

var iv = function (t) {
  return s("div", {
    className: t.className, onClick: function (r) {
      return r.stopPropagation()
    }, children: t.children
  })
};
const lv = iv;

function cv(e) {
  return e.some(function (t) {
    var n = t.children;
    return n
  })
}

function hi(e, t) {
  return typeof t == "string" || typeof t == "number" ? t == null ? void 0 : t.toString().toLowerCase().includes(e.trim().toLowerCase()) : !1
}

function gi(e) {
  var t = e.filters, n = e.prefixCls, r = e.filteredKeys, a = e.filterMultiple, o = e.searchValue, l = e.filterSearch;
  return t.map(function (c, i) {
    var u = String(c.value);
    if (c.children) return {
      key: u || i,
      label: c.text,
      popupClassName: "".concat(n, "-dropdown-submenu"),
      children: gi({
        filters: c.children,
        prefixCls: n,
        filteredKeys: r,
        filterMultiple: a,
        searchValue: o,
        filterSearch: l
      })
    };
    var v = a ? yr : Yo, f = {
      key: c.value !== void 0 ? u : i,
      label: re(He, { children: [s(v, { checked: r.includes(u) }), s("span", { children: c.text })] })
    };
    return o.trim() ? typeof l == "function" ? l(o, c) ? f : null : hi(o, c.text) ? f : null : f
  })
}

function sv(e) {
  var t, n = e.tablePrefixCls, r = e.prefixCls, a = e.column, o = e.dropdownPrefixCls, l = e.columnKey,
    c = e.filterMultiple, i = e.filterMode, u = i === void 0 ? "menu" : i, v = e.filterSearch,
    f = v === void 0 ? !1 : v, p = e.filterState, C = e.triggerFilter, h = e.locale, y = e.children,
    m = e.getPopupContainer, x = a.filterDropdownOpen, b = a.onFilterDropdownOpenChange, N = a.filterDropdownVisible,
    P = a.onFilterDropdownVisibleChange, O = a.filterResetToDefaultFilteredValue, w = a.defaultFilteredValue,
    R = d.exports.useState(!1), I = le(R, 2), _ = I[0], $ = I[1],
    M = !!(p && (((t = p.filteredKeys) === null || t === void 0 ? void 0 : t.length) || p.forceFiltered)),
    E = function (se) {
      $(se), b == null || b(se), P == null || P(se)
    }, T;
  typeof x == "boolean" ? T = x : T = typeof N == "boolean" ? N : _;
  var k = p == null ? void 0 : p.filteredKeys, V = ov(k || []), z = le(V, 2), j = z[0], D = z[1], B = function (se) {
    var Ie = se.selectedKeys;
    D(Ie)
  }, te = function (se, Ie) {
    var Ee = Ie.node, Je = Ie.checked;
    B(c ? { selectedKeys: se } : { selectedKeys: Je && Ee.key ? [Ee.key] : [] })
  };
  d.exports.useEffect(function () {
    !_ || B({ selectedKeys: k || [] })
  }, [k]);
  var ne = d.exports.useState([]), X = le(ne, 2), Z = X[0], G = X[1], K = function (se) {
    G(se)
  }, A = d.exports.useState(""), L = le(A, 2), q = L[0], H = L[1], Q = function (se) {
    var Ie = se.target.value;
    H(Ie)
  };
  d.exports.useEffect(function () {
    _ || H("")
  }, [_]);
  var J = function (se) {
    var Ie = se && se.length ? se : null;
    if (Ie === null && (!p || !p.filteredKeys) || qn(Ie, p == null ? void 0 : p.filteredKeys)) return null;
    C({ column: a, key: l, filteredKeys: Ie })
  }, de = function () {
    E(!1), J(j())
  }, ae = function () {
    var se = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : { confirm: !1, closeDropdown: !1 },
      Ie = se.confirm, Ee = se.closeDropdown;
    Ie && J([]), Ee && E(!1), H(""), D(O ? (w || []).map(function (Je) {
      return String(Je)
    }) : [])
  }, pe = function () {
    var se = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : { closeDropdown: !0 },
      Ie = se.closeDropdown;
    Ie && E(!1), J(j())
  }, Y = function (se) {
    se && k !== void 0 && D(k || []), E(se), !se && !a.filterDropdown && de()
  }, ie = F(g({}, "".concat(o, "-menu-without-submenu"), !cv(a.filters || []))), ue = function (se) {
    if (se.target.checked) {
      var Ie = Dt(a == null ? void 0 : a.filters).map(function (Ee) {
        return String(Ee)
      });
      D(Ie)
    } else D([])
  }, xe = function Ce(se) {
    var Ie = se.filters;
    return (Ie || []).map(function (Ee, Je) {
      var Le = String(Ee.value), ve = { title: Ee.text, key: Ee.value !== void 0 ? Le : Je };
      return Ee.children && (ve.children = Ce({ filters: Ee.children })), ve
    })
  }, fe = function Ce(se) {
    var Ie;
    return S(S({}, se), {
      text: se.title,
      value: se.key,
      children: ((Ie = se.children) === null || Ie === void 0 ? void 0 : Ie.map(function (Ee) {
        return Ce(Ee)
      })) || []
    })
  }, ce;
  if (typeof a.filterDropdown == "function") ce = a.filterDropdown({
    prefixCls: "".concat(o, "-custom"),
    setSelectedKeys: function (se) {
      return B({ selectedKeys: se })
    },
    selectedKeys: j(),
    confirm: pe,
    clearFilters: ae,
    filters: a.filters,
    visible: T,
    close: function () {
      E(!1)
    }
  }); else if (a.filterDropdown) ce = a.filterDropdown; else {
    var W = j() || [], U = function () {
      return (a.filters || []).length === 0 ? s(St, {
        image: St.PRESENTED_IMAGE_SIMPLE,
        description: h.filterEmptyText,
        imageStyle: { height: 24 },
        style: { margin: 0, padding: "16px 0" }
      }) : u === "tree" ? re(He, {
        children: [s(ga, {
          filterSearch: f,
          value: q,
          onChange: Q,
          tablePrefixCls: n,
          locale: h
        }), re("div", {
          className: "".concat(n, "-filter-dropdown-tree"),
          children: [c ? s(yr, {
            checked: W.length === Dt(a.filters).length,
            indeterminate: W.length > 0 && W.length < Dt(a.filters).length,
            className: "".concat(n, "-filter-dropdown-checkall"),
            onChange: ue,
            children: h.filterCheckall
          }) : null, s(pi, {
            checkable: !0,
            selectable: !1,
            blockNode: !0,
            multiple: c,
            checkStrictly: !c,
            className: "".concat(o, "-menu"),
            onCheck: te,
            checkedKeys: W,
            selectedKeys: W,
            showIcon: !1,
            treeData: xe({ filters: a.filters }),
            autoExpandParent: !0,
            defaultExpandAll: !0,
            filterTreeNode: q.trim() ? function (se) {
              return typeof f == "function" ? f(q, fe(se)) : hi(q, se.title)
            } : void 0
          })]
        })]
      }) : re(He, {
        children: [s(ga, {
          filterSearch: f,
          value: q,
          onChange: Q,
          tablePrefixCls: n,
          locale: h
        }), s(Fn, {
          selectable: !0,
          multiple: c,
          prefixCls: "".concat(o, "-menu"),
          className: ie,
          onSelect: B,
          onDeselect: B,
          selectedKeys: W,
          getPopupContainer: m,
          openKeys: Z,
          onOpenChange: K,
          items: gi({
            filters: a.filters || [],
            filterSearch: f,
            prefixCls: r,
            filteredKeys: j(),
            filterMultiple: c,
            searchValue: q
          })
        })]
      })
    }, ee = function () {
      return O ? qn((w || []).map(function (se) {
        return String(se)
      }), W) : W.length === 0
    };
    ce = re(He, {
      children: [U(), re("div", {
        className: "".concat(r, "-dropdown-btns"),
        children: [s(ot, {
          type: "link", size: "small", disabled: ee(), onClick: function () {
            return ae()
          }, children: h.filterReset
        }), s(ot, { type: "primary", size: "small", onClick: de, children: h.filterConfirm })]
      })]
    })
  }
  a.filterDropdown && (ce = s(Eo, { selectable: void 0, children: ce }));
  var ge = function () {
    return s(lv, { className: "".concat(r, "-dropdown"), children: ce })
  }, be;
  typeof a.filterIcon == "function" ? be = a.filterIcon(M) : a.filterIcon ? be = a.filterIcon : be = s(Qi, {});
  var we = d.exports.useContext(oe), _e = we.direction;
  return re("div", {
    className: "".concat(r, "-column"),
    children: [s("span", { className: "".concat(n, "-column-title"), children: y }), s(Fr, {
      dropdownRender: ge,
      trigger: ["click"],
      open: T,
      onOpenChange: Y,
      getPopupContainer: m,
      placement: _e === "rtl" ? "bottomLeft" : "bottomRight",
      children: s("span", {
        role: "button",
        tabIndex: -1,
        className: F("".concat(r, "-trigger"), { active: M }),
        onClick: function (se) {
          se.stopPropagation()
        },
        children: be
      })
    })]
  })
}

function Cn(e, t, n) {
  var r = [];
  return (e || []).forEach(function (a, o) {
    var l, c = jr(o, n);
    if (a.filters || "filterDropdown" in a || "onFilter" in a) if ("filteredValue" in a) {
      var i = a.filteredValue;
      "filterDropdown" in a || (i = (l = i == null ? void 0 : i.map(String)) !== null && l !== void 0 ? l : i), r.push({
        column: a,
        key: zt(a, c),
        filteredKeys: i,
        forceFiltered: a.filtered
      })
    } else r.push({
      column: a,
      key: zt(a, c),
      filteredKeys: t && a.defaultFilteredValue ? a.defaultFilteredValue : void 0,
      forceFiltered: a.filtered
    });
    "children" in a && (r = [].concat(ye(r), ye(Cn(a.children, t, c))))
  }), r
}

function Ci(e, t, n, r, a, o, l, c) {
  return n.map(function (i, u) {
    var v = jr(u, c), f = i.filterMultiple, p = f === void 0 ? !0 : f, C = i.filterMode, h = i.filterSearch, y = i;
    if (y.filters || y.filterDropdown) {
      var m = zt(y, v), x = r.find(function (b) {
        var N = b.key;
        return m === N
      });
      y = S(S({}, y), {
        title: function (N) {
          return s(sv, {
            tablePrefixCls: e,
            prefixCls: "".concat(e, "-filter"),
            dropdownPrefixCls: t,
            column: y,
            columnKey: m,
            filterState: x,
            filterMultiple: p,
            filterMode: C,
            filterSearch: h,
            triggerFilter: a,
            locale: l,
            getPopupContainer: o,
            children: Ht(i.title, N)
          })
        }
      })
    }
    return "children" in y && (y = S(S({}, y), { children: Ci(e, t, y.children, r, a, o, l, v) })), y
  })
}

function Dt(e) {
  var t = [];
  return (e || []).forEach(function (n) {
    var r = n.value, a = n.children;
    t.push(r), a && (t = [].concat(ye(t), ye(Dt(a))))
  }), t
}

function Ca(e) {
  var t = {};
  return e.forEach(function (n) {
    var r = n.key, a = n.filteredKeys, o = n.column, l = o.filters, c = o.filterDropdown;
    if (c) t[r] = a || null; else if (Array.isArray(a)) {
      var i = Dt(l);
      t[r] = i.filter(function (u) {
        return a.includes(String(u))
      })
    } else t[r] = null
  }), t
}

function xa(e, t) {
  return t.reduce(function (n, r) {
    var a = r.column, o = a.onFilter, l = a.filters, c = r.filteredKeys;
    return o && c && c.length ? n.filter(function (i) {
      return c.some(function (u) {
        var v = Dt(l), f = v.findIndex(function (C) {
          return String(C) === String(u)
        }), p = f !== -1 ? v[f] : u;
        return o(p, i)
      })
    }) : n
  }, e)
}

function uv(e) {
  var t = e.prefixCls, n = e.dropdownPrefixCls, r = e.mergedColumns, a = e.onFilterChange, o = e.getPopupContainer,
    l = e.locale, c = d.exports.useState(function () {
      return Cn(r, !0)
    }), i = le(c, 2), u = i[0], v = i[1], f = d.exports.useMemo(function () {
      var y = Cn(r, !1), m = !0;
      return y.forEach(function (x) {
        var b = x.filteredKeys;
        b !== void 0 && (m = !1)
      }), m ? u : y
    }, [r, u]), p = d.exports.useMemo(function () {
      return Ca(f)
    }, [f]), C = function (m) {
      var x = f.filter(function (b) {
        var N = b.key;
        return N !== m.key
      });
      x.push(m), v(x), a(Ca(x), x)
    }, h = function (m) {
      return Ci(t, n, m, f, C, o, l)
    };
  return [h, f, p]
}

function dv(e, t, n) {
  var r = d.exports.useRef({});

  function a(o) {
    if (!r.current || r.current.data !== e || r.current.childrenColumnName !== t || r.current.getRowKey !== n) {
      let c = function (i) {
        i.forEach(function (u, v) {
          var f = n(u, v);
          l.set(f, u), u && $e(u) === "object" && t in u && c(u[t] || [])
        })
      };
      var l = new Map;
      c(e), r.current = { data: e, childrenColumnName: t, kvMap: l, getRowKey: n }
    }
    return r.current.kvMap.get(o)
  }

  return [a]
}

var fv = globalThis && globalThis.__rest || function (e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var a = 0, r = Object.getOwnPropertySymbols(e); a < r.length; a++) t.indexOf(r[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[a]) && (n[r[a]] = e[r[a]]);
  return n
}, xi = 10;

function vv(e, t) {
  var n = { current: t.current, pageSize: t.pageSize }, r = e && $e(e) === "object" ? e : {};
  return Object.keys(r).forEach(function (a) {
    var o = t[a];
    typeof o != "function" && (n[a] = o)
  }), n
}

function mv() {
  for (var e = {}, t = arguments.length, n = new Array(t), r = 0; r < t; r++) n[r] = arguments[r];
  return n.forEach(function (a) {
    a && Object.keys(a).forEach(function (o) {
      var l = a[o];
      l !== void 0 && (e[o] = l)
    })
  }), e
}

function pv(e, t, n) {
  var r = t && $e(t) === "object" ? t : {}, a = r.total, o = a === void 0 ? 0 : a, l = fv(r, ["total"]),
    c = d.exports.useState(function () {
      return {
        current: "defaultCurrent" in l ? l.defaultCurrent : 1,
        pageSize: "defaultPageSize" in l ? l.defaultPageSize : xi
      }
    }), i = le(c, 2), u = i[0], v = i[1], f = mv(u, l, { total: o > 0 ? o : e }), p = Math.ceil((o || e) / f.pageSize);
  f.current > p && (f.current = p || 1);
  var C = function (m, x) {
    v({ current: m != null ? m : 1, pageSize: x || f.pageSize })
  }, h = function (m, x) {
    var b;
    t && ((b = t.onChange) === null || b === void 0 || b.call(t, m, x)), C(m, x), n(m, x || (f == null ? void 0 : f.pageSize))
  };
  return t === !1 ? [{}, function () {
  }] : [S(S({}, f), { onChange: h }), C]
}

var ht = {}, xn = "SELECT_ALL", bn = "SELECT_INVERT", yn = "SELECT_NONE", ba = [];

function bi(e, t) {
  var n = [];
  return (e || []).forEach(function (r) {
    n.push(r), r && $e(r) === "object" && t in r && (n = [].concat(ye(n), ye(bi(r[t], t))))
  }), n
}

function hv(e, t) {
  var n = e || {}, r = n.preserveSelectedRowKeys, a = n.selectedRowKeys, o = n.defaultSelectedRowKeys,
    l = n.getCheckboxProps, c = n.onChange, i = n.onSelect, u = n.onSelectAll, v = n.onSelectInvert, f = n.onSelectNone,
    p = n.onSelectMultiple, C = n.columnWidth, h = n.type, y = n.selections, m = n.fixed, x = n.renderCell,
    b = n.hideSelectAll, N = n.checkStrictly, P = N === void 0 ? !0 : N, O = t.prefixCls, w = t.data, R = t.pageData,
    I = t.getRecordByKey, _ = t.getRowKey, $ = t.expandType, M = t.childrenColumnName, E = t.locale,
    T = t.getPopupContainer, k = It(a || o || ba, { value: a }), V = le(k, 2), z = V[0], j = V[1],
    D = d.exports.useRef(new Map), B = d.exports.useCallback(function (fe) {
      if (r) {
        var ce = new Map;
        fe.forEach(function (W) {
          var U = I(W);
          !U && D.current.has(W) && (U = D.current.get(W)), ce.set(W, U)
        }), D.current = ce
      }
    }, [I, r]);
  d.exports.useEffect(function () {
    B(z)
  }, [z]);
  var te = d.exports.useMemo(function () {
    return P ? { keyEntities: null } : Fa(w, { externalGetKey: _, childrenPropName: M })
  }, [w, _, P, M]), ne = te.keyEntities, X = d.exports.useMemo(function () {
    return bi(R, M)
  }, [R, M]), Z = d.exports.useMemo(function () {
    var fe = new Map;
    return X.forEach(function (ce, W) {
      var U = _(ce, W), ee = (l ? l(ce) : null) || {};
      fe.set(U, ee)
    }), fe
  }, [X, _, l]), G = d.exports.useCallback(function (fe) {
    var ce;
    return !!(!((ce = Z.get(_(fe))) === null || ce === void 0) && ce.disabled)
  }, [Z, _]), K = d.exports.useMemo(function () {
    if (P) return [z || [], []];
    var fe = Vr(z, !0, ne, G), ce = fe.checkedKeys, W = fe.halfCheckedKeys;
    return [ce || [], W]
  }, [z, P, ne, G]), A = le(K, 2), L = A[0], q = A[1], H = d.exports.useMemo(function () {
    var fe = h === "radio" ? L.slice(0, 1) : L;
    return new Set(fe)
  }, [L, h]), Q = d.exports.useMemo(function () {
    return h === "radio" ? new Set : new Set(q)
  }, [q, h]), J = d.exports.useState(null), de = le(J, 2), ae = de[0], pe = de[1];
  d.exports.useEffect(function () {
    e || j(ba)
  }, [!!e]);
  var Y = d.exports.useCallback(function (fe, ce) {
    var W, U;
    B(fe), r ? (W = fe, U = fe.map(function (ee) {
      return D.current.get(ee)
    })) : (W = [], U = [], fe.forEach(function (ee) {
      var ge = I(ee);
      ge !== void 0 && (W.push(ee), U.push(ge))
    })), j(W), c == null || c(W, U, { type: ce })
  }, [j, I, c, r]), ie = d.exports.useCallback(function (fe, ce, W, U) {
    if (i) {
      var ee = W.map(function (ge) {
        return I(ge)
      });
      i(I(fe), ce, ee, U)
    }
    Y(W, "single")
  }, [i, I, Y]), ue = d.exports.useMemo(function () {
    if (!y || b) return null;
    var fe = y === !0 ? [xn, bn, yn] : y;
    return fe.map(function (ce) {
      return ce === xn ? {
        key: "all", text: E.selectionAll, onSelect: function () {
          Y(w.map(function (U, ee) {
            return _(U, ee)
          }).filter(function (U) {
            var ee = Z.get(U);
            return !(ee != null && ee.disabled) || H.has(U)
          }), "all")
        }
      } : ce === bn ? {
        key: "invert", text: E.selectInvert, onSelect: function () {
          var U = new Set(H);
          R.forEach(function (ge, be) {
            var we = _(ge, be), _e = Z.get(we);
            _e != null && _e.disabled || (U.has(we) ? U.delete(we) : U.add(we))
          });
          var ee = Array.from(U);
          v && v(ee), Y(ee, "invert")
        }
      } : ce === yn ? {
        key: "none", text: E.selectNone, onSelect: function () {
          f == null || f(), Y(Array.from(H).filter(function (U) {
            var ee = Z.get(U);
            return ee == null ? void 0 : ee.disabled
          }), "none")
        }
      } : ce
    }).map(function (ce) {
      return S(S({}, ce), {
        onSelect: function () {
          for (var U, ee, ge = arguments.length, be = new Array(ge), we = 0; we < ge; we++) be[we] = arguments[we];
          (ee = ce.onSelect) === null || ee === void 0 || (U = ee).call.apply(U, [ce].concat(be)), pe(null)
        }
      })
    })
  }, [y, H, R, _, v, Y]), xe = d.exports.useCallback(function (fe) {
    var ce;
    if (!e) return fe.filter(function (Ne) {
      return Ne !== ht
    });
    var W = ye(fe), U = new Set(H), ee = X.map(_).filter(function (Ne) {
      return !Z.get(Ne).disabled
    }), ge = ee.every(function (Ne) {
      return U.has(Ne)
    }), be = ee.some(function (Ne) {
      return U.has(Ne)
    }), we = function () {
      var he = [];
      ge ? ee.forEach(function (Me) {
        U.delete(Me), he.push(Me)
      }) : ee.forEach(function (Me) {
        U.has(Me) || (U.add(Me), he.push(Me))
      });
      var We = Array.from(U);
      u == null || u(!ge, We.map(function (Me) {
        return I(Me)
      }), he.map(function (Me) {
        return I(Me)
      })), Y(We, "all"), pe(null)
    }, _e;
    if (h !== "radio") {
      var Ce;
      if (ue) {
        var se = {
          getPopupContainer: T, items: ue.map(function (Ne, he) {
            var We = Ne.key, Me = Ne.text, Ke = Ne.onSelect;
            return {
              key: We || he, onClick: function () {
                Ke == null || Ke(ee)
              }, label: Me
            }
          })
        };
        Ce = s("div", {
          className: "".concat(O, "-selection-extra"),
          children: s(Fr, { menu: se, getPopupContainer: T, children: s("span", { children: s(In, {}) }) })
        })
      }
      var Ie = X.map(function (Ne, he) {
        var We = _(Ne, he), Me = Z.get(We) || {};
        return S({ checked: U.has(We) }, Me)
      }).filter(function (Ne) {
        var he = Ne.disabled;
        return he
      }), Ee = !!Ie.length && Ie.length === X.length, Je = Ee && Ie.every(function (Ne) {
        var he = Ne.checked;
        return he
      }), Le = Ee && Ie.some(function (Ne) {
        var he = Ne.checked;
        return he
      });
      _e = !b && re("div", {
        className: "".concat(O, "-selection"),
        children: [s(yr, {
          checked: Ee ? Je : !!X.length && ge,
          indeterminate: Ee ? !Je && Le : !ge && be,
          onChange: we,
          disabled: X.length === 0 || Ee,
          skipGroup: !0
        }), Ce]
      })
    }
    var ve;
    h === "radio" ? ve = function (he, We, Me) {
      var Ke = _(We, Me), De = U.has(Ke);
      return {
        node: s(Yo, {
          ...Z.get(Ke), checked: De, onClick: function (ft) {
            return ft.stopPropagation()
          }, onChange: function (ft) {
            U.has(Ke) || ie(Ke, !0, [Ke], ft.nativeEvent)
          }
        }), checked: De
      }
    } : ve = function (he, We, Me) {
      var Ke, De = _(We, Me), Ge = U.has(De), ft = Q.has(De), Rt = Z.get(De), Bt;
      return $ === "nest" ? Bt = ft : Bt = (Ke = Rt == null ? void 0 : Rt.indeterminate) !== null && Ke !== void 0 ? Ke : ft, {
        node: s(yr, {
          ...Rt,
          indeterminate: Bt,
          checked: Ge,
          skipGroup: !0,
          onClick: function (vt) {
            return vt.stopPropagation()
          },
          onChange: function (vt) {
            var bt = vt.nativeEvent, $t = bt.shiftKey, yt = -1, nt = -1;
            if ($t && P) {
              var Kt = new Set([ae, De]);
              ee.some(function (Ze, Wn) {
                if (Kt.has(Ze)) if (yt === -1) yt = Wn; else return nt = Wn, !0;
                return !1
              })
            }
            if (nt !== -1 && yt !== nt && P) {
              var Tt = ee.slice(yt, nt + 1), Vt = [];
              Ge ? Tt.forEach(function (Ze) {
                U.has(Ze) && (Vt.push(Ze), U.delete(Ze))
              }) : Tt.forEach(function (Ze) {
                U.has(Ze) || (Vt.push(Ze), U.add(Ze))
              });
              var Et = Array.from(U);
              p == null || p(!Ge, Et.map(function (Ze) {
                return I(Ze)
              }), Vt.map(function (Ze) {
                return I(Ze)
              })), Y(Et, "multiple")
            } else {
              var Ut = L;
              if (P) {
                var Se = Ge ? xl(Ut, De) : bl(Ut, De);
                ie(De, !Ge, Se, bt)
              } else {
                var Oe = Vr([].concat(ye(Ut), [De]), !0, ne, G), Ue = Oe.checkedKeys, mt = Oe.halfCheckedKeys, Fe = Ue;
                if (Ge) {
                  var Kr = new Set(Ue);
                  Kr.delete(De), Fe = Vr(Array.from(Kr), { checked: !1, halfCheckedKeys: mt }, ne, G).checkedKeys
                }
                ie(De, !Ge, Fe, bt)
              }
            }
            pe(Ge ? null : De)
          }
        }), checked: Ge
      }
    };
    var Re = function (he, We, Me) {
      var Ke = ve(he, We, Me), De = Ke.node, Ge = Ke.checked;
      return x ? x(Ge, We, Me, De) : De
    };
    if (!W.includes(ht)) if (W.findIndex(function (Ne) {
      var he;
      return ((he = Ne[Ur]) === null || he === void 0 ? void 0 : he.columnType) === "EXPAND_COLUMN"
    }) === 0) {
      var Te = W, me = Ri(Te), Pe = me[0], Be = me.slice(1);
      W = [Pe, ht].concat(ye(Be))
    } else W = [ht].concat(ye(W));
    var je = W.indexOf(ht);
    W = W.filter(function (Ne, he) {
      return Ne !== ht || he === je
    });
    var Ae = W[je - 1], ke = W[je + 1], rt = m;
    rt === void 0 && ((ke == null ? void 0 : ke.fixed) !== void 0 ? rt = ke.fixed : (Ae == null ? void 0 : Ae.fixed) !== void 0 && (rt = Ae.fixed)), rt && Ae && ((ce = Ae[Ur]) === null || ce === void 0 ? void 0 : ce.columnType) === "EXPAND_COLUMN" && Ae.fixed === void 0 && (Ae.fixed = rt);
    var Br = g({
      fixed: rt,
      width: C,
      className: "".concat(O, "-selection-column"),
      title: e.columnTitle || _e,
      render: Re
    }, Ur, { className: "".concat(O, "-selection-col") });
    return W.map(function (Ne) {
      return Ne === ht ? Br : Ne
    })
  }, [_, X, e, L, H, Q, C, ue, $, ae, Z, p, ie, G]);
  return [xe, H]
}

var fr = "ascend", an = "descend";

function Nr(e) {
  return $e(e.sorter) === "object" && typeof e.sorter.multiple == "number" ? e.sorter.multiple : !1
}

function ya(e) {
  return typeof e == "function" ? e : e && $e(e) === "object" && e.compare ? e.compare : !1
}

function gv(e, t) {
  return t ? e[e.indexOf(t) + 1] : e[0]
}

function Pn(e, t, n) {
  var r = [];

  function a(o, l) {
    r.push({ column: o, key: zt(o, l), multiplePriority: Nr(o), sortOrder: o.sortOrder })
  }

  return (e || []).forEach(function (o, l) {
    var c = jr(l, n);
    o.children ? ("sortOrder" in o && a(o, c), r = [].concat(ye(r), ye(Pn(o.children, t, c)))) : o.sorter && ("sortOrder" in o ? a(o, c) : t && o.defaultSortOrder && r.push({
      column: o,
      key: zt(o, c),
      multiplePriority: Nr(o),
      sortOrder: o.defaultSortOrder
    }))
  }), r
}

function yi(e, t, n, r, a, o, l, c) {
  return (t || []).map(function (i, u) {
    var v = jr(u, c), f = i;
    if (f.sorter) {
      var p = f.sortDirections || a, C = f.showSorterTooltip === void 0 ? l : f.showSorterTooltip, h = zt(f, v),
        y = n.find(function ($) {
          var M = $.key;
          return M === h
        }), m = y ? y.sortOrder : null, x = gv(p, m), b = p.includes(fr) && s(Ji, {
          className: F("".concat(e, "-column-sorter-up"), { active: m === fr }),
          role: "presentation"
        }), N = p.includes(an) && s(Zi, {
          className: F("".concat(e, "-column-sorter-down"), { active: m === an }),
          role: "presentation"
        }), P = o || {}, O = P.cancelSort, w = P.triggerAsc, R = P.triggerDesc, I = O;
      x === an ? I = R : x === fr && (I = w);
      var _ = $e(C) === "object" ? C : { title: I };
      f = S(S({}, f), {
        className: F(f.className, g({}, "".concat(e, "-column-sort"), m)), title: function (M) {
          var E = re("div", {
            className: "".concat(e, "-column-sorters"),
            children: [s("span", {
              className: "".concat(e, "-column-title"),
              children: Ht(i.title, M)
            }), s("span", {
              className: F("".concat(e, "-column-sorter"), g({}, "".concat(e, "-column-sorter-full"), !!(b && N))),
              children: re("span", { className: "".concat(e, "-column-sorter-inner"), children: [b, N] })
            })]
          });
          return C ? s(Zt, { ..._, children: E }) : E
        }, onHeaderCell: function (M) {
          var E, T = i.onHeaderCell && i.onHeaderCell(M) || {}, k = T.onClick, V = T.onKeyDown;
          return T.onClick = function (z) {
            r({ column: i, key: h, sortOrder: x, multiplePriority: Nr(i) }), k == null || k(z)
          }, T.onKeyDown = function (z) {
            z.keyCode === _a.ENTER && (r({
              column: i,
              key: h,
              sortOrder: x,
              multiplePriority: Nr(i)
            }), V == null || V(z))
          }, m ? T["aria-sort"] = m === "ascend" ? "ascending" : "descending" : T["aria-label"] = "".concat(Ht(i.title, {}), " sortable"), T.className = F(T.className, "".concat(e, "-column-has-sorters")), T.tabIndex = 0, i.ellipsis && (T.title = ((E = Ht(i.title, {})) !== null && E !== void 0 ? E : "").toString()), T
        }
      })
    }
    return "children" in f && (f = S(S({}, f), { children: yi(e, f.children, n, r, a, o, l, v) })), f
  })
}

function Pa(e) {
  var t = e.column, n = e.sortOrder;
  return { column: t, order: n, field: t.dataIndex, columnKey: t.key }
}

function wa(e) {
  var t = e.filter(function (n) {
    var r = n.sortOrder;
    return r
  }).map(Pa);
  return t.length === 0 && e.length ? S(S({}, Pa(e[e.length - 1])), { column: void 0 }) : t.length <= 1 ? t[0] || {} : t
}

function wn(e, t, n) {
  var r = t.slice().sort(function (l, c) {
    return c.multiplePriority - l.multiplePriority
  }), a = e.slice(), o = r.filter(function (l) {
    var c = l.column.sorter, i = l.sortOrder;
    return ya(c) && i
  });
  return o.length ? a.sort(function (l, c) {
    for (var i = 0; i < o.length; i += 1) {
      var u = o[i], v = u.column.sorter, f = u.sortOrder, p = ya(v);
      if (p && f) {
        var C = p(l, c, f);
        if (C !== 0) return f === fr ? C : -C
      }
    }
    return 0
  }).map(function (l) {
    var c = l[n];
    return c ? S(S({}, l), g({}, n, wn(c, t, n))) : l
  }) : a
}

function Cv(e) {
  var t = e.prefixCls, n = e.mergedColumns, r = e.onSorterChange, a = e.sortDirections, o = e.tableLocale,
    l = e.showSorterTooltip, c = d.exports.useState(Pn(n, !0)), i = le(c, 2), u = i[0], v = i[1],
    f = d.exports.useMemo(function () {
      var m = !0, x = Pn(n, !1);
      if (!x.length) return u;
      var b = [];

      function N(O) {
        m ? b.push(O) : b.push(S(S({}, O), { sortOrder: null }))
      }

      var P = null;
      return x.forEach(function (O) {
        P === null ? (N(O), O.sortOrder && (O.multiplePriority === !1 ? m = !1 : P = !0)) : (P && O.multiplePriority !== !1 || (m = !1), N(O))
      }), b
    }, [n, u]), p = d.exports.useMemo(function () {
      var m = f.map(function (x) {
        var b = x.column, N = x.sortOrder;
        return { column: b, order: N }
      });
      return { sortColumns: m, sortColumn: m[0] && m[0].column, sortOrder: m[0] && m[0].order }
    }, [f]);

  function C(m) {
    var x;
    m.multiplePriority === !1 || !f.length || f[0].multiplePriority === !1 ? x = [m] : x = [].concat(ye(f.filter(function (b) {
      var N = b.key;
      return N !== m.key
    })), [m]), v(x), r(wa(x), x)
  }

  var h = function (x) {
    return yi(t, x, f, C, a, o, l)
  }, y = function () {
    return wa(f)
  };
  return [h, f, p, y]
}

function Pi(e, t) {
  return e.map(function (n) {
    var r = S({}, n);
    return r.title = Ht(n.title, t), "children" in r && (r.children = Pi(r.children, t)), r
  })
}

function xv(e) {
  var t = d.exports.useCallback(function (n) {
    return Pi(n, e)
  }, [e]);
  return [t]
}

var bv = [];

function yv(e, t) {
  var n, r = e.prefixCls, a = e.className, o = e.style, l = e.size, c = e.bordered, i = e.dropdownPrefixCls,
    u = e.dataSource, v = e.pagination, f = e.rowSelection, p = e.rowKey, C = p === void 0 ? "key" : p,
    h = e.rowClassName, y = e.columns, m = e.children, x = e.childrenColumnName, b = e.onChange,
    N = e.getPopupContainer, P = e.loading, O = e.expandIcon, w = e.expandable, R = e.expandedRowRender,
    I = e.expandIconColumnIndex, _ = e.indentSize, $ = e.scroll, M = e.sortDirections, E = e.locale,
    T = e.showSorterTooltip, k = T === void 0 ? !0 : T;
  [["filterDropdownVisible", "filterDropdownOpen"], ["onFilterDropdownVisibleChange", "onFilterDropdownOpenChange"]].forEach(function (Se) {
    var Oe = le(Se, 2);
    Oe[0], Oe[1]
  });
  var V = d.exports.useMemo(function () {
      return y || Dl(m)
    }, [y, m]), z = d.exports.useMemo(function () {
      return V.some(function (Se) {
        return Se.responsive
      })
    }, [V]), j = Oo(z), D = d.exports.useMemo(function () {
      var Se = new Set(Object.keys(j).filter(function (Oe) {
        return j[Oe]
      }));
      return V.filter(function (Oe) {
        return !Oe.responsive || Oe.responsive.some(function (Ue) {
          return Se.has(Ue)
        })
      })
    }, [V, j]), B = Ve(e, ["className", "style", "columns"]), te = d.exports.useContext(tt),
    ne = d.exports.useContext(oe), X = ne.locale, Z = X === void 0 ? at : X, G = ne.renderEmpty, K = ne.direction,
    A = l || te, L = S(S({}, Z.Table), E), q = u || bv, H = d.exports.useContext(oe), Q = H.getPrefixCls,
    J = Q("table", r), de = Q("dropdown", i), ae = S({ childrenColumnName: x, expandIconColumnIndex: I }, w),
    pe = ae.childrenColumnName, Y = pe === void 0 ? "children" : pe, ie = d.exports.useMemo(function () {
      return q.some(function (Se) {
        return Se == null ? void 0 : Se[Y]
      }) ? "nest" : R || w && w.expandedRowRender ? "row" : null
    }, [q]), ue = { body: d.exports.useRef() }, xe = d.exports.useMemo(function () {
      return typeof C == "function" ? C : function (Se) {
        return Se == null ? void 0 : Se[C]
      }
    }, [C]), fe = dv(q, Y, xe), ce = le(fe, 1), W = ce[0], U = {}, ee = function (Oe, Ue) {
      var mt = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1, Fe = S(S({}, U), Oe);
      mt && (U.resetPagination(), Fe.pagination.current && (Fe.pagination.current = 1), v && v.onChange && v.onChange(1, Fe.pagination.pageSize)), $ && $.scrollToFirstRowOnChange !== !1 && ue.body.current && Nc(0, {
        getContainer: function () {
          return ue.body.current
        }
      }), b == null || b(Fe.pagination, Fe.filters, Fe.sorter, {
        currentDataSource: xa(wn(q, Fe.sorterStates, Y), Fe.filterStates),
        action: Ue
      })
    }, ge = function (Oe, Ue) {
      ee({ sorter: Oe, sorterStates: Ue }, "sort", !1)
    }, be = Cv({
      prefixCls: J,
      mergedColumns: D,
      onSorterChange: ge,
      sortDirections: M || ["ascend", "descend"],
      tableLocale: L,
      showSorterTooltip: k
    }), we = le(be, 4), _e = we[0], Ce = we[1], se = we[2], Ie = we[3], Ee = d.exports.useMemo(function () {
      return wn(q, Ce, Y)
    }, [q, Ce]);
  U.sorter = Ie(), U.sorterStates = Ce;
  var Je = function (Oe, Ue) {
    ee({ filters: Oe, filterStates: Ue }, "filter", !0)
  }, Le = uv({
    prefixCls: J,
    locale: L,
    dropdownPrefixCls: de,
    mergedColumns: D,
    onFilterChange: Je,
    getPopupContainer: N
  }), ve = le(Le, 3), Re = ve[0], Te = ve[1], me = ve[2], Pe = xa(Ee, Te);
  U.filters = me, U.filterStates = Te;
  var Be = d.exports.useMemo(function () {
    var Se = {};
    return Object.keys(me).forEach(function (Oe) {
      me[Oe] !== null && (Se[Oe] = me[Oe])
    }), S(S({}, se), { filters: Se })
  }, [se, me]), je = xv(Be), Ae = le(je, 1), ke = Ae[0], rt = function (Oe, Ue) {
    ee({ pagination: S(S({}, U.pagination), { current: Oe, pageSize: Ue }) }, "paginate")
  }, Br = pv(Pe.length, v, rt), Ne = le(Br, 2), he = Ne[0], We = Ne[1];
  U.pagination = v === !1 ? {} : vv(v, he), U.resetPagination = We;
  var Me = d.exports.useMemo(function () {
    if (v === !1 || !he.pageSize) return Pe;
    var Se = he.current, Oe = Se === void 0 ? 1 : Se, Ue = he.total, mt = he.pageSize, Fe = mt === void 0 ? xi : mt;
    return Pe.length < Ue ? Pe.length > Fe ? Pe.slice((Oe - 1) * Fe, Oe * Fe) : Pe : Pe.slice((Oe - 1) * Fe, Oe * Fe)
  }, [!!v, Pe, he && he.current, he && he.pageSize, he && he.total]), Ke = hv(f, {
    prefixCls: J,
    data: Pe,
    pageData: Me,
    getRowKey: xe,
    getRecordByKey: W,
    expandType: ie,
    childrenColumnName: Y,
    locale: L,
    getPopupContainer: N
  }), De = le(Ke, 2), Ge = De[0], ft = De[1], Rt = function (Oe, Ue, mt) {
    var Fe;
    return typeof h == "function" ? Fe = F(h(Oe, Ue, mt)) : Fe = F(h), F(g({}, "".concat(J, "-row-selected"), ft.has(xe(Oe, Ue))), Fe)
  };
  ae.__PARENT_RENDER_ICON__ = ae.expandIcon, ae.expandIcon = ae.expandIcon || O || Qf(L), ie === "nest" && ae.expandIconColumnIndex === void 0 ? ae.expandIconColumnIndex = f ? 1 : 0 : ae.expandIconColumnIndex > 0 && f && (ae.expandIconColumnIndex -= 1), typeof ae.indentSize != "number" && (ae.indentSize = typeof _ == "number" ? _ : 15);
  var Bt = d.exports.useCallback(function (Se) {
    return ke(Ge(Re(_e(Se))))
  }, [_e, Re, Ge]), nr, vt;
  if (v !== !1 && (he == null ? void 0 : he.total)) {
    var bt;
    he.size ? bt = he.size : bt = A === "small" || A === "middle" ? "small" : void 0;
    var $t = function (Oe) {
      return s(wf, {
        ...he,
        className: F("".concat(J, "-pagination ").concat(J, "-pagination-").concat(Oe), he.className),
        size: bt
      })
    }, yt = K === "rtl" ? "left" : "right", nt = he.position;
    if (nt !== null && Array.isArray(nt)) {
      var Kt = nt.find(function (Se) {
        return Se.includes("top")
      }), Tt = nt.find(function (Se) {
        return Se.includes("bottom")
      }), Vt = nt.every(function (Se) {
        return "".concat(Se) === "none"
      });
      !Kt && !Tt && !Vt && (vt = $t(yt)), Kt && (nr = $t(Kt.toLowerCase().replace("top", ""))), Tt && (vt = $t(Tt.toLowerCase().replace("bottom", "")))
    } else vt = $t(yt)
  }
  var Et;
  typeof P == "boolean" ? Et = { spinning: P } : $e(P) === "object" && (Et = S({ spinning: !0 }, P));
  var Ut = F("".concat(J, "-wrapper"), g({}, "".concat(J, "-wrapper-rtl"), K === "rtl"), a);
  return s("div", {
    ref: t,
    className: Ut,
    style: o,
    children: re(kf, {
      spinning: !1, ...Et,
      children: [nr, s(ja, {
        ...B,
        columns: D,
        direction: K,
        expandable: ae,
        prefixCls: J,
        className: F((n = {}, g(n, "".concat(J, "-middle"), A === "middle"), g(n, "".concat(J, "-small"), A === "small"), g(n, "".concat(J, "-bordered"), c), g(n, "".concat(J, "-empty"), q.length === 0), n)),
        data: Me,
        rowKey: xe,
        rowClassName: Rt,
        emptyText: E && E.emptyText || (G || Po)("Table"),
        internalHooks: Fl,
        internalRefs: ue,
        transformColumns: Bt
      }), vt]
    })
  })
}

var Pv = d.exports.forwardRef(yv), dt = Pv;
dt.SELECTION_COLUMN = ht;
dt.EXPAND_COLUMN = ja.EXPAND_COLUMN;
dt.SELECTION_ALL = xn;
dt.SELECTION_INVERT = bn;
dt.SELECTION_NONE = yn;
dt.Column = Yf;
dt.ColumnGroup = Xf;
dt.Summary = Ml;
const wm = dt;

function lr(e) {
  return S(S({}, e), {
    lastModified: e.lastModified,
    lastModifiedDate: e.lastModifiedDate,
    name: e.name,
    size: e.size,
    type: e.type,
    uid: e.uid,
    percent: 0,
    originFileObj: e
  })
}

function cr(e, t) {
  var n = ye(t), r = n.findIndex(function (a) {
    var o = a.uid;
    return o === e.uid
  });
  return r === -1 ? n.push(e) : n[r] = e, n
}

function on(e, t) {
  var n = e.uid !== void 0 ? "uid" : "name";
  return t.filter(function (r) {
    return r[n] === e[n]
  })[0]
}

function wv(e, t) {
  var n = e.uid !== void 0 ? "uid" : "name", r = t.filter(function (a) {
    return a[n] !== e[n]
  });
  return r.length === t.length ? null : r
}

var Sv = function () {
  var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "", n = t.split("/"), r = n[n.length - 1],
    a = r.split(/#|\?/)[0];
  return (/\.[^./\\]*$/.exec(a) || [""])[0]
}, wi = function (t) {
  return t.indexOf("image/") === 0
}, Nv = function (t) {
  if (t.type && !t.thumbUrl) return wi(t.type);
  var n = t.thumbUrl || t.url || "", r = Sv(n);
  return /^data:image\//.test(n) || /(webp|svg|png|gif|jpg|jpeg|jfif|bmp|dpg|ico|heic|heif)$/i.test(r) ? !0 : !(/^data:/.test(n) || r)
}, pt = 200;

function Ov(e) {
  return new Promise(function (t) {
    if (!e.type || !wi(e.type)) {
      t("");
      return
    }
    var n = document.createElement("canvas");
    n.width = pt, n.height = pt, n.style.cssText = "position: fixed; left: 0; top: 0; width: ".concat(pt, "px; height: ").concat(pt, "px; z-index: 9999; display: none;"), document.body.appendChild(n);
    var r = n.getContext("2d"), a = new Image;
    if (a.onload = function () {
      var l = a.width, c = a.height, i = pt, u = pt, v = 0, f = 0;
      l > c ? (u = c * (pt / l), f = -(u - i) / 2) : (i = l * (pt / c), v = -(i - u) / 2), r.drawImage(a, v, f, i, u);
      var p = n.toDataURL();
      document.body.removeChild(n), t(p)
    }, a.crossOrigin = "anonymous", e.type.startsWith("image/svg+xml")) {
      var o = new FileReader;
      o.addEventListener("load", function () {
        o.result && (a.src = o.result)
      }), o.readAsDataURL(e)
    } else a.src = window.URL.createObjectURL(e)
  })
}

var Iv = d.exports.forwardRef(function (e, t) {
  var n, r = e.prefixCls, a = e.className, o = e.style, l = e.locale, c = e.listType, i = e.file, u = e.items,
    v = e.progress, f = e.iconRender, p = e.actionIconRender, C = e.itemRender, h = e.isImgUrl, y = e.showPreviewIcon,
    m = e.showRemoveIcon, x = e.showDownloadIcon, b = e.previewIcon, N = e.removeIcon, P = e.downloadIcon,
    O = e.onPreview, w = e.onDownload, R = e.onClose, I, _, $ = i.status, M = d.exports.useState($), E = le(M, 2),
    T = E[0], k = E[1];
  d.exports.useEffect(function () {
    $ !== "removed" && k($)
  }, [$]);
  var V = d.exports.useState(!1), z = le(V, 2), j = z[0], D = z[1], B = d.exports.useRef();
  d.exports.useEffect(function () {
    return B.current = setTimeout(function () {
      D(!0)
    }, 300), function () {
      window.clearTimeout(B.current)
    }
  }, []);
  var te = "".concat(r, "-span"), ne = f(i), X = s("div", { className: "".concat(r, "-text-icon"), children: ne });
  if (c === "picture" || c === "picture-card") if (T === "uploading" || !i.thumbUrl && !i.url) {
    var Z,
      G = F((Z = {}, g(Z, "".concat(r, "-list-item-thumbnail"), !0), g(Z, "".concat(r, "-list-item-file"), T !== "uploading"), Z));
    X = s("div", { className: G, children: ne })
  } else {
    var K, A = h != null && h(i) ? s("img", {
        src: i.thumbUrl || i.url,
        alt: i.name,
        className: "".concat(r, "-list-item-image"),
        crossOrigin: i.crossOrigin
      }) : ne,
      L = F((K = {}, g(K, "".concat(r, "-list-item-thumbnail"), !0), g(K, "".concat(r, "-list-item-file"), h && !h(i)), K));
    X = s("a", {
      className: L, onClick: function (_e) {
        return O(i, _e)
      }, href: i.url || i.thumbUrl, target: "_blank", rel: "noopener noreferrer", children: A
    })
  }
  var q = F((n = {}, g(n, "".concat(r, "-list-item"), !0), g(n, "".concat(r, "-list-item-").concat(T), !0), g(n, "".concat(r, "-list-item-list-type-").concat(c), !0), n)),
    H = typeof i.linkProps == "string" ? JSON.parse(i.linkProps) : i.linkProps,
    Q = m ? p((typeof N == "function" ? N(i) : N) || s(el, {}), function () {
      return R(i)
    }, r, l.removeFile) : null,
    J = x && T === "done" ? p((typeof P == "function" ? P(i) : P) || s(tl, {}), function () {
      return w(i)
    }, r, l.downloadFile) : null, de = c !== "picture-card" && re("span", {
      className: F("".concat(r, "-list-item-card-actions"), { picture: c === "picture" }),
      children: [J, Q]
    }, "download-delete"), ae = F("".concat(r, "-list-item-name")), pe = i.url ? [s("a", {
      target: "_blank",
      rel: "noopener noreferrer",
      className: ae,
      title: i.name, ...H,
      href: i.url,
      onClick: function (_e) {
        return O(i, _e)
      },
      children: i.name
    }, "view"), de] : [s("span", {
      className: ae, onClick: function (_e) {
        return O(i, _e)
      }, title: i.name, children: i.name
    }, "view"), de], Y = { pointerEvents: "none", opacity: .5 }, ie = y ? s("a", {
      href: i.url || i.thumbUrl,
      target: "_blank",
      rel: "noopener noreferrer",
      style: i.url || i.thumbUrl ? void 0 : Y,
      onClick: function (_e) {
        return O(i, _e)
      },
      title: l.previewFile,
      children: typeof b == "function" ? b(i) : b || s(Ma, {})
    }) : null, ue = c === "picture-card" && T !== "uploading" && re("span", {
      className: "".concat(r, "-list-item-actions"),
      children: [ie, T === "done" && J, Q]
    }), xe;
  i.response && typeof i.response == "string" ? xe = i.response : xe = ((I = i.error) === null || I === void 0 ? void 0 : I.statusText) || ((_ = i.error) === null || _ === void 0 ? void 0 : _.message) || l.uploadError;
  var fe = re("span", { className: te, children: [X, pe] }), ce = d.exports.useContext(oe), W = ce.getPrefixCls,
    U = W(), ee = re("div", {
      className: q,
      children: [s("div", {
        className: "".concat(r, "-list-item-info"),
        children: fe
      }), ue, j && s(Or, {
        motionName: "".concat(U, "-fade"),
        visible: T === "uploading",
        motionDeadline: 2e3,
        children: function (we) {
          var _e = we.className, Ce = "percent" in i ? s(qf, { ...v, type: "line", percent: i.percent }) : null;
          return s("div", { className: F("".concat(r, "-list-item-progress"), _e), children: Ce })
        }
      })]
    }), ge = F("".concat(r, "-list-").concat(c, "-container"), a), be = T === "error" ? s(Zt, {
      title: xe, getPopupContainer: function (_e) {
        return _e.parentNode
      }, children: ee
    }) : ee;
  return s("div", {
    className: ge,
    style: o,
    ref: t,
    children: C ? C(be, i, u, { download: w.bind(null, i), preview: O.bind(null, i), remove: R.bind(null, i) }) : be
  })
});
const kv = Iv;
var Ar = S({}, Yt);
delete Ar.onAppearEnd;
delete Ar.onEnterEnd;
delete Ar.onLeaveEnd;
var _v = function (t, n) {
  var r, a = t.listType, o = a === void 0 ? "text" : a, l = t.previewFile, c = l === void 0 ? Ov : l, i = t.onPreview,
    u = t.onDownload, v = t.onRemove, f = t.locale, p = t.iconRender, C = t.isImageUrl, h = C === void 0 ? Nv : C,
    y = t.prefixCls, m = t.items, x = m === void 0 ? [] : m, b = t.showPreviewIcon, N = b === void 0 ? !0 : b,
    P = t.showRemoveIcon, O = P === void 0 ? !0 : P, w = t.showDownloadIcon, R = w === void 0 ? !1 : w,
    I = t.removeIcon, _ = t.previewIcon, $ = t.downloadIcon, M = t.progress,
    E = M === void 0 ? { strokeWidth: 2, showInfo: !1 } : M, T = t.appendAction, k = t.appendActionVisible,
    V = k === void 0 ? !0 : k, z = t.itemRender, j = Tn(), D = d.exports.useState(!1), B = le(D, 2), te = B[0],
    ne = B[1];
  d.exports.useEffect(function () {
    o !== "picture" && o !== "picture-card" || (x || []).forEach(function (Y) {
      typeof document > "u" || typeof window > "u" || !window.FileReader || !window.File || !(Y.originFileObj instanceof File || Y.originFileObj instanceof Blob) || Y.thumbUrl !== void 0 || (Y.thumbUrl = "", c && c(Y.originFileObj).then(function (ie) {
        Y.thumbUrl = ie || "", j()
      }))
    })
  }, [o, x, c]), d.exports.useEffect(function () {
    ne(!0)
  }, []);
  var X = function (ie, ue) {
    if (!!i) return ue == null || ue.preventDefault(), i(ie)
  }, Z = function (ie) {
    typeof u == "function" ? u(ie) : ie.url && window.open(ie.url)
  }, G = function (ie) {
    v == null || v(ie)
  }, K = function (ie) {
    if (p) return p(ie, o);
    var ue = ie.status === "uploading", xe = h && h(ie) ? s(rl, {}) : s(nl, {}), fe = ue ? s(gt, {}) : s(al, {});
    return o === "picture" ? fe = ue ? s(gt, {}) : xe : o === "picture-card" && (fe = ue ? f.uploading : xe), fe
  }, A = function (ie, ue, xe, fe) {
    var ce = {
      type: "text", size: "small", title: fe, onClick: function (ee) {
        ue(), Xe(ie) && ie.props.onClick && ie.props.onClick(ee)
      }, className: "".concat(xe, "-list-item-card-actions-btn")
    };
    if (Xe(ie)) {
      var W = ze(ie, S(S({}, ie.props), {
        onClick: function () {
        }
      }));
      return s(ot, { ...ce, icon: W })
    }
    return s(ot, { ...ce, children: s("span", { children: ie }) })
  };
  d.exports.useImperativeHandle(n, function () {
    return { handlePreview: X, handleDownload: Z }
  });
  var L = d.exports.useContext(oe), q = L.getPrefixCls, H = L.direction, Q = q("upload", y),
    J = F((r = {}, g(r, "".concat(Q, "-list"), !0), g(r, "".concat(Q, "-list-").concat(o), !0), g(r, "".concat(Q, "-list-rtl"), H === "rtl"), r)),
    de = ye(x.map(function (Y) {
      return { key: Y.uid, file: Y }
    })), ae = o === "picture-card" ? "animate-inline" : "animate",
    pe = { motionDeadline: 2e3, motionName: "".concat(Q, "-").concat(ae), keys: de, motionAppear: te };
  return o !== "picture-card" && (pe = S(S({}, Ar), pe)), re("div", {
    className: J,
    children: [s(Ra, {
      ...pe, component: !1, children: function (Y) {
        var ie = Y.key, ue = Y.file, xe = Y.className, fe = Y.style;
        return s(kv, {
          locale: f,
          prefixCls: Q,
          className: xe,
          style: fe,
          file: ue,
          items: x,
          progress: E,
          listType: o,
          isImgUrl: h,
          showPreviewIcon: N,
          showRemoveIcon: O,
          showDownloadIcon: R,
          removeIcon: I,
          previewIcon: _,
          downloadIcon: $,
          iconRender: K,
          actionIconRender: A,
          itemRender: z,
          onPreview: X,
          onDownload: Z,
          onClose: G
        }, ie)
      }
    }), T && s(Or, {
      ...pe, visible: V, forceRender: !0, children: function (Y) {
        var ie = Y.className, ue = Y.style;
        return ze(T, function (xe) {
          return {
            className: F(xe.className, ie),
            style: S(S(S({}, ue), { pointerEvents: ie ? "none" : void 0 }), xe.style)
          }
        })
      }
    })]
  })
}, Rv = d.exports.forwardRef(_v);
const $v = Rv;
var Tv = globalThis && globalThis.__awaiter || function (e, t, n, r) {
  function a(o) {
    return o instanceof n ? o : new n(function (l) {
      l(o)
    })
  }

  return new (n || (n = Promise))(function (o, l) {
    function c(v) {
      try {
        u(r.next(v))
      } catch (f) {
        l(f)
      }
    }

    function i(v) {
      try {
        u(r.throw(v))
      } catch (f) {
        l(f)
      }
    }

    function u(v) {
      v.done ? o(v.value) : a(v.value).then(c, i)
    }

    u((r = r.apply(e, t || [])).next())
  })
}, Wt = "__LIST_IGNORE_".concat(Date.now(), "__"), Ev = function (t, n) {
  var r, a = t.fileList, o = t.defaultFileList, l = t.onRemove, c = t.showUploadList, i = c === void 0 ? !0 : c,
    u = t.listType, v = u === void 0 ? "text" : u, f = t.onPreview, p = t.onDownload, C = t.onChange, h = t.onDrop,
    y = t.previewFile, m = t.disabled, x = t.locale, b = t.iconRender, N = t.isImageUrl, P = t.progress,
    O = t.prefixCls, w = t.className, R = t.type, I = R === void 0 ? "select" : R, _ = t.children, $ = t.style,
    M = t.itemRender, E = t.maxCount, T = t.data, k = T === void 0 ? {} : T, V = t.multiple, z = V === void 0 ? !1 : V,
    j = t.action, D = j === void 0 ? "" : j, B = t.accept, te = B === void 0 ? "" : B, ne = t.supportServerRender,
    X = ne === void 0 ? !0 : ne, Z = d.exports.useContext(it), G = m != null ? m : Z, K = It(o || [], {
      value: a, postState: function (ve) {
        return ve != null ? ve : []
      }
    }), A = le(K, 2), L = A[0], q = A[1], H = d.exports.useState("drop"), Q = le(H, 2), J = Q[0], de = Q[1],
    ae = d.exports.useRef();
  d.exports.useMemo(function () {
    var Le = Date.now();
    (a || []).forEach(function (ve, Re) {
      !ve.uid && !Object.isFrozen(ve) && (ve.uid = "__AUTO__".concat(Le, "_").concat(Re, "__"))
    })
  }, [a]);
  var pe = function (ve, Re, Te) {
    var me = ye(Re);
    E === 1 ? me = me.slice(-1) : E && (me = me.slice(0, E)), ki.exports.flushSync(function () {
      q(me)
    });
    var Pe = { file: ve, fileList: me };
    Te && (Pe.event = Te), C == null || C(Pe)
  }, Y = function (ve, Re) {
    return Tv(void 0, void 0, void 0, Gn().mark(function Te() {
      var me, Pe, Be, je;
      return Gn().wrap(function (ke) {
        for (; ;) switch (ke.prev = ke.next) {
          case 0:
            if (me = t.beforeUpload, Pe = t.transformFile, Be = ve, !me) {
              ke.next = 13;
              break
            }
            return ke.next = 5, me(ve, Re);
          case 5:
            if (je = ke.sent, je !== !1) {
              ke.next = 8;
              break
            }
            return ke.abrupt("return", !1);
          case 8:
            if (delete ve[Wt], je !== Wt) {
              ke.next = 12;
              break
            }
            return Object.defineProperty(ve, Wt, { value: !0, configurable: !0 }), ke.abrupt("return", !1);
          case 12:
            $e(je) === "object" && je && (Be = je);
          case 13:
            if (!Pe) {
              ke.next = 17;
              break
            }
            return ke.next = 16, Pe(Be);
          case 16:
            Be = ke.sent;
          case 17:
            return ke.abrupt("return", Be);
          case 18:
          case"end":
            return ke.stop()
        }
      }, Te)
    }))
  }, ie = function (ve) {
    var Re = ve.filter(function (Pe) {
      return !Pe.file[Wt]
    });
    if (!!Re.length) {
      var Te = Re.map(function (Pe) {
        return lr(Pe.file)
      }), me = ye(L);
      Te.forEach(function (Pe) {
        me = cr(Pe, me)
      }), Te.forEach(function (Pe, Be) {
        var je = Pe;
        if (Re[Be].parsedFile) Pe.status = "uploading"; else {
          var Ae = Pe.originFileObj, ke;
          try {
            ke = new File([Ae], Ae.name, { type: Ae.type })
          } catch {
            ke = new Blob([Ae], { type: Ae.type }), ke.name = Ae.name, ke.lastModifiedDate = new Date, ke.lastModified = new Date().getTime()
          }
          ke.uid = Pe.uid, je = ke
        }
        pe(je, me)
      })
    }
  }, ue = function (ve, Re, Te) {
    try {
      typeof ve == "string" && (ve = JSON.parse(ve))
    } catch {
    }
    if (!!on(Re, L)) {
      var me = lr(Re);
      me.status = "done", me.percent = 100, me.response = ve, me.xhr = Te;
      var Pe = cr(me, L);
      pe(me, Pe)
    }
  }, xe = function (ve, Re) {
    if (!!on(Re, L)) {
      var Te = lr(Re);
      Te.status = "uploading", Te.percent = ve.percent;
      var me = cr(Te, L);
      pe(Te, me, ve)
    }
  }, fe = function (ve, Re, Te) {
    if (!!on(Te, L)) {
      var me = lr(Te);
      me.error = ve, me.response = Re, me.status = "error";
      var Pe = cr(me, L);
      pe(me, Pe)
    }
  }, ce = function (ve) {
    var Re;
    Promise.resolve(typeof l == "function" ? l(ve) : l).then(function (Te) {
      var me;
      if (Te !== !1) {
        var Pe = wv(ve, L);
        Pe && (Re = S(S({}, ve), { status: "removed" }), L == null || L.forEach(function (Be) {
          var je = Re.uid !== void 0 ? "uid" : "name";
          Be[je] === Re[je] && !Object.isFrozen(Be) && (Be.status = "removed")
        }), (me = ae.current) === null || me === void 0 || me.abort(Re), pe(Re, Pe))
      }
    })
  }, W = function (ve) {
    de(ve.type), ve.type === "drop" && (h == null || h(ve))
  };
  d.exports.useImperativeHandle(n, function () {
    return { onBatchStart: ie, onSuccess: ue, onProgress: xe, onError: fe, fileList: L, upload: ae.current }
  });
  var U = d.exports.useContext(oe), ee = U.getPrefixCls, ge = U.direction, be = ee("upload", O),
    we = S(S({ onBatchStart: ie, onError: fe, onProgress: xe, onSuccess: ue }, t), {
      data: k,
      multiple: z,
      action: D,
      accept: te,
      supportServerRender: X,
      prefixCls: be,
      disabled: G,
      beforeUpload: Y,
      onChange: void 0
    });
  delete we.className, delete we.style, (!_ || G) && delete we.id;
  var _e = function (ve, Re) {
    return i ? s(kt, {
      componentName: "Upload", defaultLocale: at.Upload, children: function (Te) {
        var me = typeof i == "boolean" ? {} : i, Pe = me.showRemoveIcon, Be = me.showPreviewIcon,
          je = me.showDownloadIcon, Ae = me.removeIcon, ke = me.previewIcon, rt = me.downloadIcon;
        return s($v, {
          prefixCls: be,
          listType: v,
          items: L,
          previewFile: y,
          onPreview: f,
          onDownload: p,
          onRemove: ce,
          showRemoveIcon: !G && Pe,
          showPreviewIcon: Be,
          showDownloadIcon: je,
          removeIcon: Ae,
          previewIcon: ke,
          downloadIcon: rt,
          iconRender: b,
          locale: S(S({}, Te), x),
          isImageUrl: N,
          progress: P,
          appendAction: ve,
          appendActionVisible: Re,
          itemRender: M
        })
      }
    }) : ve
  };
  if (I === "drag") {
    var Ce,
      se = F(be, (Ce = {}, g(Ce, "".concat(be, "-drag"), !0), g(Ce, "".concat(be, "-drag-uploading"), L.some(function (Le) {
        return Le.status === "uploading"
      })), g(Ce, "".concat(be, "-drag-hover"), J === "dragover"), g(Ce, "".concat(be, "-disabled"), G), g(Ce, "".concat(be, "-rtl"), ge === "rtl"), Ce), w);
    return re("span", {
      children: [s("div", {
        className: se,
        onDrop: W,
        onDragOver: W,
        onDragLeave: W,
        style: $,
        children: s(Yn, {
          ...we,
          ref: ae,
          className: "".concat(be, "-btn"),
          children: s("div", { className: "".concat(be, "-drag-container"), children: _ })
        })
      }), _e()]
    })
  }
  var Ie = F(be, (r = {}, g(r, "".concat(be, "-select"), !0), g(r, "".concat(be, "-select-").concat(v), !0), g(r, "".concat(be, "-disabled"), G), g(r, "".concat(be, "-rtl"), ge === "rtl"), r)),
    Ee = function (ve) {
      return s("div", { className: Ie, style: ve, children: s(Yn, { ...we, ref: ae }) })
    }, Je = Ee(_ ? void 0 : { display: "none" });
  return v === "picture-card" ? s("span", {
    className: F("".concat(be, "-picture-card-wrapper"), w),
    children: _e(Je, !!_)
  }) : re("span", { className: w, children: [Je, _e()] })
}, Mv = d.exports.forwardRef(Ev);
const Si = Mv;
var Dv = globalThis && globalThis.__rest || function (e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var a = 0, r = Object.getOwnPropertySymbols(e); a < r.length; a++) t.indexOf(r[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[a]) && (n[r[a]] = e[r[a]]);
  return n
}, Fv = d.exports.forwardRef(function (e, t) {
  var n = e.style, r = e.height, a = Dv(e, ["style", "height"]);
  return s(Si, { ref: t, ...a, type: "drag", style: S(S({}, n), { height: r }) })
});
const zv = Fv;
var Un = Si;
Un.Dragger = zv;
Un.LIST_IGNORE = Wt;
const Sm = Un;
var Lv = {
  placeholder: "\u8BF7\u9009\u62E9\u65F6\u95F4",
  rangePlaceholder: ["\u5F00\u59CB\u65F6\u95F4", "\u7ED3\u675F\u65F6\u95F4"]
};
const jv = Lv;
var Ni = {
  lang: S({
    placeholder: "\u8BF7\u9009\u62E9\u65E5\u671F",
    yearPlaceholder: "\u8BF7\u9009\u62E9\u5E74\u4EFD",
    quarterPlaceholder: "\u8BF7\u9009\u62E9\u5B63\u5EA6",
    monthPlaceholder: "\u8BF7\u9009\u62E9\u6708\u4EFD",
    weekPlaceholder: "\u8BF7\u9009\u62E9\u5468",
    rangePlaceholder: ["\u5F00\u59CB\u65E5\u671F", "\u7ED3\u675F\u65E5\u671F"],
    rangeYearPlaceholder: ["\u5F00\u59CB\u5E74\u4EFD", "\u7ED3\u675F\u5E74\u4EFD"],
    rangeMonthPlaceholder: ["\u5F00\u59CB\u6708\u4EFD", "\u7ED3\u675F\u6708\u4EFD"],
    rangeQuarterPlaceholder: ["\u5F00\u59CB\u5B63\u5EA6", "\u7ED3\u675F\u5B63\u5EA6"],
    rangeWeekPlaceholder: ["\u5F00\u59CB\u5468", "\u7ED3\u675F\u5468"]
  }, ul), timePickerLocale: S({}, jv)
};
Ni.lang.ok = "\u786E\u5B9A";
const Nm = Ni;
export {
  ot as B,
  Cm as C,
  xm as D,
  bm as F,
  bf as I,
  ym as L,
  Fn as M,
  Pm as P,
  Yo as R,
  ds as S,
  wm as T,
  Sm as U,
  yr as a,
  gm as b,
  Mr as c,
  Bs as d,
  fd as e,
  Nm as l,
  ac as m
};

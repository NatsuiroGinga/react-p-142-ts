import { h as gn } from "./moment.8aa368ab.js";
import { x as cr, K as z, b as ea, k as sr, a as la, d as We, w as Mt } from "./rc-util.5fc3e0fc.js";
import { a as Z, d as R, f as fr, c as T, _ as En, g as ua, h as ia, i as ca, j as sa } from "./@babel.3781e41b.js";
import { r as x } from "./react.aaec2051.js";
import { c as oe } from "./classnames.4fb4381a.js";
import { b as ae, j as h, F as zn } from "./@ant-design.023abccc.js";
import { T as dr } from "./rc-trigger.1ca4bf78.js";
import { s as vr } from "./shallowequal.ea8d8004.js";

var go = {
  locale: "en_US",
  today: "Today",
  now: "Now",
  backToToday: "Back to today",
  ok: "OK",
  clear: "Clear",
  month: "Month",
  year: "Year",
  timeSelect: "select time",
  dateSelect: "select date",
  weekSelect: "Choose a week",
  monthSelect: "Choose a month",
  yearSelect: "Choose a year",
  decadeSelect: "Choose a decade",
  yearFormat: "YYYY",
  dateFormat: "M/D/YYYY",
  dayFormat: "D",
  dateTimeFormat: "M/D/YYYY HH:mm:ss",
  monthBeforeYear: !0,
  previousMonth: "Previous month (PageUp)",
  nextMonth: "Next month (PageDown)",
  previousYear: "Last year (Control + left)",
  nextYear: "Next year (Control + right)",
  previousDecade: "Last decade",
  nextDecade: "Next decade",
  previousCentury: "Last century",
  nextCentury: "Next century"
}, ho = {
  getNow: function () {
    return gn()
  }, getFixedDate: function (n) {
    return gn(n, "YYYY-MM-DD")
  }, getEndDate: function (n) {
    var t = n.clone();
    return t.endOf("month")
  }, getWeekDay: function (n) {
    var t = n.clone().locale("en_US");
    return t.weekday() + t.localeData().firstDayOfWeek()
  }, getYear: function (n) {
    return n.year()
  }, getMonth: function (n) {
    return n.month()
  }, getDate: function (n) {
    return n.date()
  }, getHour: function (n) {
    return n.hour()
  }, getMinute: function (n) {
    return n.minute()
  }, getSecond: function (n) {
    return n.second()
  }, addYear: function (n, t) {
    var a = n.clone();
    return a.add(t, "year")
  }, addMonth: function (n, t) {
    var a = n.clone();
    return a.add(t, "month")
  }, addDate: function (n, t) {
    var a = n.clone();
    return a.add(t, "day")
  }, setYear: function (n, t) {
    var a = n.clone();
    return a.year(t)
  }, setMonth: function (n, t) {
    var a = n.clone();
    return a.month(t)
  }, setDate: function (n, t) {
    var a = n.clone();
    return a.date(t)
  }, setHour: function (n, t) {
    var a = n.clone();
    return a.hour(t)
  }, setMinute: function (n, t) {
    var a = n.clone();
    return a.minute(t)
  }, setSecond: function (n, t) {
    var a = n.clone();
    return a.second(t)
  }, isAfter: function (n, t) {
    return n.isAfter(t)
  }, isValidate: function (n) {
    return n.isValid()
  }, locale: {
    getWeekFirstDay: function (n) {
      var t = gn().locale(n);
      return t.localeData().firstDayOfWeek()
    }, getWeekFirstDate: function (n, t) {
      var a = t.clone(), o = a.locale(n);
      return o.weekday(0)
    }, getWeek: function (n, t) {
      var a = t.clone(), o = a.locale(n);
      return o.week()
    }, getShortWeekDays: function (n) {
      var t = gn().locale(n);
      return t.localeData().weekdaysMin()
    }, getShortMonths: function (n) {
      var t = gn().locale(n);
      return t.localeData().monthsShort()
    }, format: function (n, t, a) {
      var o = t.clone(), r = o.locale(n);
      return r.format(a)
    }, parse: function (n, t, a) {
      for (var o = [], r = 0; r < a.length; r += 1) {
        var l = a[r], c = t;
        if (l.includes("wo") || l.includes("Wo")) {
          l = l.replace(/wo/g, "w").replace(/Wo/g, "W");
          var f = l.match(/[-YyMmDdHhSsWwGg]+/g), d = c.match(/[-\d]+/g);
          f && d ? (l = f.join(""), c = d.join("")) : o.push(l.replace(/o/g, ""))
        }
        var C = gn(c, l, n, !0);
        if (C.isValid()) return C
      }
      for (var g = 0; g < o.length; g += 1) {
        var u = gn(t, o[g], n, !1);
        if (u.isValid()) return cr(!1, "Not match any format strictly and fallback to fuzzy match. Please help to fire a issue about this."), u
      }
      return null
    }
  }
}, Ye = x.exports.createContext({}), Un = { visibility: "hidden" };

function Sn(e) {
  var n = e.prefixCls, t = e.prevIcon, a = t === void 0 ? "\u2039" : t, o = e.nextIcon, r = o === void 0 ? "\u203A" : o,
    l = e.superPrevIcon, c = l === void 0 ? "\xAB" : l, f = e.superNextIcon, d = f === void 0 ? "\xBB" : f,
    C = e.onSuperPrev, g = e.onSuperNext, u = e.onPrev, s = e.onNext, i = e.children, m = x.exports.useContext(Ye),
    v = m.hideNextBtn, w = m.hidePrevBtn;
  return ae("div", {
    className: n,
    children: [C && h("button", {
      type: "button",
      onClick: C,
      tabIndex: -1,
      className: "".concat(n, "-super-prev-btn"),
      style: w ? Un : {},
      children: c
    }), u && h("button", {
      type: "button",
      onClick: u,
      tabIndex: -1,
      className: "".concat(n, "-prev-btn"),
      style: w ? Un : {},
      children: a
    }), h("div", { className: "".concat(n, "-view"), children: i }), s && h("button", {
      type: "button",
      onClick: s,
      tabIndex: -1,
      className: "".concat(n, "-next-btn"),
      style: v ? Un : {},
      children: r
    }), g && h("button", {
      type: "button",
      onClick: g,
      tabIndex: -1,
      className: "".concat(n, "-super-next-btn"),
      style: v ? Un : {},
      children: d
    })]
  })
}

function gr(e) {
  var n = e.prefixCls, t = e.generateConfig, a = e.viewDate, o = e.onPrevDecades, r = e.onNextDecades,
    l = x.exports.useContext(Ye), c = l.hideHeader;
  if (c) return null;
  var f = "".concat(n, "-header"), d = t.getYear(a), C = Math.floor(d / Je) * Je, g = C + Je - 1;
  return ae(Sn, { ...e, prefixCls: f, onSuperPrev: o, onSuperNext: r, children: [C, "-", g] })
}

function fa(e, n, t, a, o) {
  var r = e.setHour(n, t);
  return r = e.setMinute(r, a), r = e.setSecond(r, o), r
}

function da(e, n, t) {
  if (!t) return n;
  var a = n;
  return a = e.setHour(a, e.getHour(t)), a = e.setMinute(a, e.getMinute(t)), a = e.setSecond(a, e.getSecond(t)), a
}

function hr(e, n, t, a, o, r) {
  var l = Math.floor(e / a) * a;
  if (l < e) return [l, 60 - o, 60 - r];
  var c = Math.floor(n / o) * o;
  if (c < n) return [l, c, 60 - r];
  var f = Math.floor(t / r) * r;
  return [l, c, f]
}

function Cr(e, n) {
  var t = e.getYear(n), a = e.getMonth(n) + 1, o = e.getEndDate(e.getFixedDate("".concat(t, "-").concat(a, "-01"))),
    r = e.getDate(o), l = a < 10 ? "0".concat(a) : "".concat(a);
  return "".concat(t, "-").concat(l, "-").concat(r)
}

function Ln(e) {
  for (var n = e.prefixCls, t = e.disabledDate, a = e.onSelect, o = e.picker, r = e.rowNum, l = e.colNum, c = e.prefixColumn, f = e.rowClassName, d = e.baseDate, C = e.getCellClassName, g = e.getCellText, u = e.getCellNode, s = e.getCellDate, i = e.generateConfig, m = e.titleCell, v = e.headerCells, w = x.exports.useContext(Ye), S = w.onDateMouseEnter, p = w.onDateMouseLeave, F = w.mode, N = "".concat(n, "-cell"), k = [], O = 0; O < r; O += 1) {
    for (var P = [], E = void 0, G = function (le) {
      var ie, De = O * l + le, j = s(d, De), ve = mt({ cellDate: j, mode: F, disabledDate: t, generateConfig: i });
      le === 0 && (E = j, c && P.push(c(E)));
      var ge = m && m(j);
      P.push(h("td", {
        title: ge,
        className: oe(N, Z((ie = {}, R(ie, "".concat(N, "-disabled"), ve), R(ie, "".concat(N, "-start"), g(j) === 1 || o === "year" && Number(ge) % 10 === 0), R(ie, "".concat(N, "-end"), ge === Cr(i, j) || o === "year" && Number(ge) % 10 === 9), ie), C(j))),
        onClick: function () {
          ve || a(j)
        },
        onMouseEnter: function () {
          !ve && S && S(j)
        },
        onMouseLeave: function () {
          !ve && p && p(j)
        },
        children: u ? u(j) : h("div", { className: "".concat(N, "-inner"), children: g(j) })
      }, le))
    }, B = 0; B < l; B += 1) G(B);
    k.push(h("tr", { className: f && f(E), children: P }, O))
  }
  return h("div", {
    className: "".concat(n, "-body"),
    children: ae("table", {
      className: "".concat(n, "-content"),
      children: [v && h("thead", { children: h("tr", { children: v }) }), h("tbody", { children: k })]
    })
  })
}

var gt = 3, na = 4;

function mr(e) {
  var n = Fe - 1, t = e.prefixCls, a = e.viewDate, o = e.generateConfig, r = "".concat(t, "-cell"), l = o.getYear(a),
    c = Math.floor(l / Fe) * Fe, f = Math.floor(l / Je) * Je, d = f + Je - 1,
    C = o.setYear(a, f - Math.ceil((gt * na * Fe - Je) / 2)), g = function (s) {
      var i, m = o.getYear(s), v = m + n;
      return i = {}, R(i, "".concat(r, "-in-view"), f <= m && v <= d), R(i, "".concat(r, "-selected"), m === c), i
    };
  return h(Ln, {
    ...e, rowNum: na, colNum: gt, baseDate: C, getCellText: function (s) {
      var i = o.getYear(s);
      return "".concat(i, "-").concat(i + n)
    }, getCellClassName: g, getCellDate: function (s, i) {
      return o.addYear(s, i * Fe)
    }
  })
}

var Wn = new Map;

function xr(e, n) {
  var t;

  function a() {
    sr(e) ? n() : t = ea(function () {
      a()
    })
  }

  return a(), function () {
    ea.cancel(t)
  }
}

function ht(e, n, t) {
  if (Wn.get(e) && cancelAnimationFrame(Wn.get(e)), t <= 0) {
    Wn.set(e, requestAnimationFrame(function () {
      e.scrollTop = n
    }));
    return
  }
  var a = n - e.scrollTop, o = a / t * 10;
  Wn.set(e, requestAnimationFrame(function () {
    e.scrollTop += o, e.scrollTop !== n && ht(e, n, t - 10)
  }))
}

function Mn(e, n) {
  var t = n.onLeftRight, a = n.onCtrlLeftRight, o = n.onUpDown, r = n.onPageUpDown, l = n.onEnter, c = e.which,
    f = e.ctrlKey, d = e.metaKey;
  switch (c) {
    case z.LEFT:
      if (f || d) {
        if (a) return a(-1), !0
      } else if (t) return t(-1), !0;
      break;
    case z.RIGHT:
      if (f || d) {
        if (a) return a(1), !0
      } else if (t) return t(1), !0;
      break;
    case z.UP:
      if (o) return o(-1), !0;
      break;
    case z.DOWN:
      if (o) return o(1), !0;
      break;
    case z.PAGE_UP:
      if (r) return r(-1), !0;
      break;
    case z.PAGE_DOWN:
      if (r) return r(1), !0;
      break;
    case z.ENTER:
      if (l) return l(), !0;
      break
  }
  return !1
}

function va(e, n, t, a) {
  var o = e;
  if (!o) switch (n) {
    case"time":
      o = a ? "hh:mm:ss a" : "HH:mm:ss";
      break;
    case"week":
      o = "gggg-wo";
      break;
    case"month":
      o = "YYYY-MM";
      break;
    case"quarter":
      o = "YYYY-[Q]Q";
      break;
    case"year":
      o = "YYYY";
      break;
    default:
      o = t ? "YYYY-MM-DD HH:mm:ss" : "YYYY-MM-DD"
  }
  return o
}

function ga(e, n, t) {
  var a = e === "time" ? 8 : 10, o = typeof n == "function" ? n(t.getNow()).length : n.length;
  return Math.max(a, o) + 2
}

var Vn = null, qn = new Set;

function Dr(e) {
  return !Vn && typeof window < "u" && window.addEventListener && (Vn = function (t) {
    fr(qn).forEach(function (a) {
      a(t)
    })
  }, window.addEventListener("mousedown", Vn)), qn.add(e), function () {
    qn.delete(e), qn.size === 0 && (window.removeEventListener("mousedown", Vn), Vn = null)
  }
}

function wr(e) {
  var n = e.target;
  if (e.composed && n.shadowRoot) {
    var t;
    return ((t = e.composedPath) === null || t === void 0 ? void 0 : t.call(e)[0]) || n
  }
  return n
}

var Sr = function (n) {
  return n === "month" || n === "date" ? "year" : n
}, Mr = function (n) {
  return n === "date" ? "month" : n
}, Nr = function (n) {
  return n === "month" || n === "date" ? "quarter" : n
}, br = function (n) {
  return n === "date" ? "week" : n
}, yr = { year: Sr, month: Mr, quarter: Nr, week: br, time: null, date: null };

function ha(e, n) {
  return e.some(function (t) {
    return t && t.contains(n)
  })
}

var Fe = 10, Je = Fe * 10;

function pr(e) {
  var n = e.prefixCls, t = e.onViewDateChange, a = e.generateConfig, o = e.viewDate, r = e.operationRef, l = e.onSelect,
    c = e.onPanelChange, f = "".concat(n, "-decade-panel");
  r.current = {
    onKeyDown: function (u) {
      return Mn(u, {
        onLeftRight: function (i) {
          l(a.addYear(o, i * Fe), "key")
        }, onCtrlLeftRight: function (i) {
          l(a.addYear(o, i * Je), "key")
        }, onUpDown: function (i) {
          l(a.addYear(o, i * Fe * gt), "key")
        }, onEnter: function () {
          c("year", o)
        }
      })
    }
  };
  var d = function (u) {
    var s = a.addYear(o, u * Je);
    t(s), c(null, s)
  }, C = function (u) {
    l(u, "mouse"), c("year", u)
  };
  return ae("div", {
    className: f, children: [h(gr, {
      ...e, prefixCls: n, onPrevDecades: function () {
        d(-1)
      }, onNextDecades: function () {
        d(1)
      }
    }), h(mr, { ...e, prefixCls: n, onSelect: C })]
  })
}

var Gn = 7;

function hn(e, n) {
  if (!e && !n) return !0;
  if (!e || !n) return !1
}

function kr(e, n, t) {
  var a = hn(n, t);
  if (typeof a == "boolean") return a;
  var o = Math.floor(e.getYear(n) / 10), r = Math.floor(e.getYear(t) / 10);
  return o === r
}

function Jn(e, n, t) {
  var a = hn(n, t);
  return typeof a == "boolean" ? a : e.getYear(n) === e.getYear(t)
}

function Ct(e, n) {
  var t = Math.floor(e.getMonth(n) / 3);
  return t + 1
}

function Ca(e, n, t) {
  var a = hn(n, t);
  return typeof a == "boolean" ? a : Jn(e, n, t) && Ct(e, n) === Ct(e, t)
}

function Nt(e, n, t) {
  var a = hn(n, t);
  return typeof a == "boolean" ? a : Jn(e, n, t) && e.getMonth(n) === e.getMonth(t)
}

function Ze(e, n, t) {
  var a = hn(n, t);
  return typeof a == "boolean" ? a : e.getYear(n) === e.getYear(t) && e.getMonth(n) === e.getMonth(t) && e.getDate(n) === e.getDate(t)
}

function Rr(e, n, t) {
  var a = hn(n, t);
  return typeof a == "boolean" ? a : e.getHour(n) === e.getHour(t) && e.getMinute(n) === e.getMinute(t) && e.getSecond(n) === e.getSecond(t)
}

function ma(e, n, t, a) {
  var o = hn(t, a);
  return typeof o == "boolean" ? o : e.locale.getWeek(n, t) === e.locale.getWeek(n, a)
}

function In(e, n, t) {
  return Ze(e, n, t) && Rr(e, n, t)
}

function jn(e, n, t, a) {
  return !n || !t || !a ? !1 : !Ze(e, n, a) && !Ze(e, t, a) && e.isAfter(a, n) && e.isAfter(t, a)
}

function Pr(e, n, t) {
  var a = n.locale.getWeekFirstDay(e), o = n.setDate(t, 1), r = n.getWeekDay(o), l = n.addDate(o, a - r);
  return n.getMonth(l) === n.getMonth(t) && n.getDate(l) > 1 && (l = n.addDate(l, -7)), l
}

function Tn(e, n, t) {
  var a = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : 1;
  switch (n) {
    case"year":
      return t.addYear(e, a * 10);
    case"quarter":
    case"month":
      return t.addYear(e, a);
    default:
      return t.addMonth(e, a)
  }
}

function de(e, n) {
  var t = n.generateConfig, a = n.locale, o = n.format;
  return typeof o == "function" ? o(e) : t.locale.format(a.locale, e, o)
}

function xa(e, n) {
  var t = n.generateConfig, a = n.locale, o = n.formatList;
  return !e || typeof o[0] == "function" ? null : t.locale.parse(a.locale, e, o)
}

function mt(e) {
  var n = e.cellDate, t = e.mode, a = e.disabledDate, o = e.generateConfig;
  if (!a) return !1;
  var r = function (i, m, v) {
    for (var w = m; w <= v;) {
      var S = void 0;
      switch (i) {
        case"date": {
          if (S = o.setDate(n, w), !a(S)) return !1;
          break
        }
        case"month": {
          if (S = o.setMonth(n, w), !mt({ cellDate: S, mode: "month", generateConfig: o, disabledDate: a })) return !1;
          break
        }
        case"year": {
          if (S = o.setYear(n, w), !mt({ cellDate: S, mode: "year", generateConfig: o, disabledDate: a })) return !1;
          break
        }
      }
      w += 1
    }
    return !0
  };
  switch (t) {
    case"date":
    case"week":
      return a(n);
    case"month": {
      var l = 1, c = o.getDate(o.getEndDate(n));
      return r("date", l, c)
    }
    case"quarter": {
      var f = Math.floor(o.getMonth(n) / 3) * 3, d = f + 2;
      return r("month", f, d)
    }
    case"year":
      return r("month", 0, 11);
    case"decade": {
      var C = o.getYear(n), g = Math.floor(C / Fe) * Fe, u = g + Fe - 1;
      return r("year", g, u)
    }
  }
}

function Yr(e) {
  var n = x.exports.useContext(Ye), t = n.hideHeader;
  if (t) return null;
  var a = e.prefixCls, o = e.generateConfig, r = e.locale, l = e.value, c = e.format, f = "".concat(a, "-header");
  return h(Sn, { prefixCls: f, children: l ? de(l, { locale: r, format: c, generateConfig: o }) : "\xA0" })
}

function Qn(e) {
  var n = e.prefixCls, t = e.units, a = e.onSelect, o = e.value, r = e.active, l = e.hideDisabledOptions,
    c = "".concat(n, "-cell"), f = x.exports.useContext(Ye), d = f.open, C = x.exports.useRef(null),
    g = x.exports.useRef(new Map), u = x.exports.useRef();
  return x.exports.useLayoutEffect(function () {
    var s = g.current.get(o);
    s && d !== !1 && ht(C.current, s.offsetTop, 120)
  }, [o]), x.exports.useLayoutEffect(function () {
    if (d) {
      var s = g.current.get(o);
      s && (u.current = xr(s, function () {
        ht(C.current, s.offsetTop, 0)
      }))
    }
    return function () {
      var i;
      (i = u.current) === null || i === void 0 || i.call(u)
    }
  }, [d]), h("ul", {
    className: oe("".concat(n, "-column"), R({}, "".concat(n, "-column-active"), r)),
    ref: C,
    style: { position: "relative" },
    children: t.map(function (s) {
      var i;
      return l && s.disabled ? null : h("li", {
        ref: function (v) {
          g.current.set(s.value, v)
        },
        className: oe(c, (i = {}, R(i, "".concat(c, "-disabled"), s.disabled), R(i, "".concat(c, "-selected"), o === s.value), i)),
        onClick: function () {
          s.disabled || a(s.value)
        },
        children: h("div", { className: "".concat(c, "-inner"), children: s.label })
      }, s.value)
    })
  })
}

function Da(e, n) {
  for (var t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "0", a = String(e); a.length < n;) a = "".concat(t).concat(e);
  return a
}

var Vr = function () {
  for (var n = arguments.length, t = new Array(n), a = 0; a < n; a++) t[a] = arguments[a];
  return t
};

function wa(e) {
  return e == null ? [] : Array.isArray(e) ? e : [e]
}

function Sa(e) {
  var n = {};
  return Object.keys(e).forEach(function (t) {
    (t.substr(0, 5) === "data-" || t.substr(0, 5) === "aria-" || t === "role" || t === "name") && t.substr(0, 7) !== "data-__" && (n[t] = e[t])
  }), n
}

function _(e, n) {
  return e ? e[n] : null
}

function _e(e, n, t) {
  var a = [_(e, 0), _(e, 1)];
  return a[t] = typeof n == "function" ? n(a[t]) : n, !a[0] && !a[1] ? null : a
}

function Tr(e, n) {
  if (e.length !== n.length) return !0;
  for (var t = 0; t < e.length; t += 1) if (e[t].disabled !== n[t].disabled) return !0;
  return !1
}

function vt(e, n, t, a) {
  for (var o = [], r = e; r <= n; r += t) o.push({ label: Da(r, 2), value: r, disabled: (a || []).includes(r) });
  return o
}

function Er(e) {
  var n = e.generateConfig, t = e.prefixCls, a = e.operationRef, o = e.activeColumnIndex, r = e.value, l = e.showHour,
    c = e.showMinute, f = e.showSecond, d = e.use12Hours, C = e.hourStep, g = C === void 0 ? 1 : C, u = e.minuteStep,
    s = u === void 0 ? 1 : u, i = e.secondStep, m = i === void 0 ? 1 : i, v = e.disabledHours, w = e.disabledMinutes,
    S = e.disabledSeconds, p = e.disabledTime, F = e.hideDisabledOptions, N = e.onSelect, k = [],
    O = "".concat(t, "-content"), P = "".concat(t, "-time-panel"), E, G = r ? n.getHour(r) : -1, B = G,
    pe = r ? n.getMinute(r) : -1, le = r ? n.getSecond(r) : -1, ie = n.getNow(), De = x.exports.useMemo(function () {
      if (p) {
        var L = p(ie);
        return [L.disabledHours, L.disabledMinutes, L.disabledSeconds]
      }
      return [v, w, S]
    }, [v, w, S, p, ie]), j = T(De, 3), ve = j[0], ge = j[1], we = j[2], Se = function (X, K, J, U) {
      var re = r || n.getNow(), ke = Math.max(0, K), Te = Math.max(0, J), ee = Math.max(0, U);
      return re = fa(n, re, !d || !X ? ke : ke + 12, Te, ee), re
    }, qe = vt(0, 23, g, ve && ve()), Ve = la(function () {
      return qe
    }, qe, Tr);
  d && (E = B >= 12, B %= 12);
  var ln = x.exports.useMemo(function () {
    if (!d) return [!1, !1];
    var L = [!0, !0];
    return Ve.forEach(function (X) {
      var K = X.disabled, J = X.value;
      K || (J >= 12 ? L[1] = !1 : L[0] = !1)
    }), L
  }, [d, Ve]), $e = T(ln, 2), Me = $e[0], en = $e[1], un = x.exports.useMemo(function () {
    return d ? Ve.filter(E ? function (L) {
      return L.value >= 12
    } : function (L) {
      return L.value < 12
    }).map(function (L) {
      var X = L.value % 12, K = X === 0 ? "12" : Da(X, 2);
      return Z(Z({}, L), {}, { label: K, value: X })
    }) : Ve
  }, [d, E, Ve]), je = vt(0, 59, s, ge && ge(G)), Be = vt(0, 59, m, we && we(G, pe));
  a.current = {
    onUpDown: function (X) {
      var K = k[o];
      if (K) for (var J = K.units.findIndex(function (Te) {
        return Te.value === K.value
      }), U = K.units.length, re = 1; re < U; re += 1) {
        var ke = K.units[(J + X * re + U) % U];
        if (ke.disabled !== !0) {
          K.onSelect(ke.value);
          break
        }
      }
    }
  };

  function Ne(L, X, K, J, U) {
    L !== !1 && k.push({
      node: x.exports.cloneElement(X, {
        prefixCls: P,
        value: K,
        active: o === k.length,
        onSelect: U,
        units: J,
        hideDisabledOptions: F
      }), onSelect: U, value: K, units: J
    })
  }

  Ne(l, h(Qn, {}, "hour"), B, un, function (L) {
    N(Se(E, L, pe, le), "mouse")
  }), Ne(c, h(Qn, {}, "minute"), pe, je, function (L) {
    N(Se(E, B, L, le), "mouse")
  }), Ne(f, h(Qn, {}, "second"), le, Be, function (L) {
    N(Se(E, B, pe, L), "mouse")
  });
  var Ce = -1;
  return typeof E == "boolean" && (Ce = E ? 1 : 0), Ne(d === !0, h(Qn, {}, "12hours"), Ce, [{
    label: "AM",
    value: 0,
    disabled: Me
  }, { label: "PM", value: 1, disabled: en }], function (L) {
    N(Se(!!L, B, pe, le), "mouse")
  }), h("div", {
    className: O, children: k.map(function (L) {
      var X = L.node;
      return X
    })
  })
}

var Ir = function (n) {
  return n.filter(function (t) {
    return t !== !1
  }).length
};

function Ma(e) {
  var n = e.generateConfig, t = e.format, a = t === void 0 ? "HH:mm:ss" : t, o = e.prefixCls, r = e.active,
    l = e.operationRef, c = e.showHour, f = e.showMinute, d = e.showSecond, C = e.use12Hours, g = C === void 0 ? !1 : C,
    u = e.onSelect, s = e.value, i = "".concat(o, "-time-panel"), m = x.exports.useRef(), v = x.exports.useState(-1),
    w = T(v, 2), S = w[0], p = w[1], F = Ir([c, f, d, g]);
  return l.current = {
    onKeyDown: function (k) {
      return Mn(k, {
        onLeftRight: function (P) {
          p((S + P + F) % F)
        }, onUpDown: function (P) {
          S === -1 ? p(0) : m.current && m.current.onUpDown(P)
        }, onEnter: function () {
          u(s || n.getNow(), "key"), p(-1)
        }
      })
    }, onBlur: function () {
      p(-1)
    }
  }, ae("div", {
    className: oe(i, R({}, "".concat(i, "-active"), r)),
    children: [h(Yr, { ...e, format: a, prefixCls: o }), h(Er, {
      ...e,
      prefixCls: o,
      activeColumnIndex: S,
      operationRef: m
    })]
  })
}

var Nn = x.exports.createContext({});

function Zn(e) {
  var n = e.cellPrefixCls, t = e.generateConfig, a = e.rangedValue, o = e.hoverRangedValue, r = e.isInView,
    l = e.isSameCell, c = e.offsetCell, f = e.today, d = e.value;

  function C(g) {
    var u, s = c(g, -1), i = c(g, 1), m = _(a, 0), v = _(a, 1), w = _(o, 0), S = _(o, 1), p = jn(t, w, S, g);

    function F(G) {
      return l(m, G)
    }

    function N(G) {
      return l(v, G)
    }

    var k = l(w, g), O = l(S, g), P = (p || O) && (!r(s) || N(s)), E = (p || k) && (!r(i) || F(i));
    return u = {}, R(u, "".concat(n, "-in-view"), r(g)), R(u, "".concat(n, "-in-range"), jn(t, m, v, g)), R(u, "".concat(n, "-range-start"), F(g)), R(u, "".concat(n, "-range-end"), N(g)), R(u, "".concat(n, "-range-start-single"), F(g) && !v), R(u, "".concat(n, "-range-end-single"), N(g) && !m), R(u, "".concat(n, "-range-start-near-hover"), F(g) && (l(s, w) || jn(t, w, S, s))), R(u, "".concat(n, "-range-end-near-hover"), N(g) && (l(i, S) || jn(t, w, S, i))), R(u, "".concat(n, "-range-hover"), p), R(u, "".concat(n, "-range-hover-start"), k), R(u, "".concat(n, "-range-hover-end"), O), R(u, "".concat(n, "-range-hover-edge-start"), P), R(u, "".concat(n, "-range-hover-edge-end"), E), R(u, "".concat(n, "-range-hover-edge-start-near-range"), P && l(s, v)), R(u, "".concat(n, "-range-hover-edge-end-near-range"), E && l(i, m)), R(u, "".concat(n, "-today"), l(f, g)), R(u, "".concat(n, "-selected"), l(d, g)), u
  }

  return C
}

function Lr(e) {
  var n = e.prefixCls, t = e.generateConfig, a = e.prefixColumn, o = e.locale, r = e.rowCount, l = e.viewDate,
    c = e.value, f = e.dateRender, d = x.exports.useContext(Nn), C = d.rangedValue, g = d.hoverRangedValue,
    u = Pr(o.locale, t, l), s = "".concat(n, "-cell"), i = t.locale.getWeekFirstDay(o.locale), m = t.getNow(), v = [],
    w = o.shortWeekDays || (t.locale.getShortWeekDays ? t.locale.getShortWeekDays(o.locale) : []);
  a && v.push(h("th", { "aria-label": "empty cell" }, "empty"));
  for (var S = 0; S < Gn; S += 1) v.push(h("th", { children: w[(S + i) % Gn] }, S));
  var p = Zn({
    cellPrefixCls: s,
    today: m,
    value: c,
    generateConfig: t,
    rangedValue: a ? null : C,
    hoverRangedValue: a ? null : g,
    isSameCell: function (k, O) {
      return Ze(t, k, O)
    },
    isInView: function (k) {
      return Nt(t, k, l)
    },
    offsetCell: function (k, O) {
      return t.addDate(k, O)
    }
  }), F = f ? function (N) {
    return f(N, m)
  } : void 0;
  return h(Ln, {
    ...e,
    rowNum: r,
    colNum: Gn,
    baseDate: u,
    getCellNode: F,
    getCellText: t.getDate,
    getCellClassName: p,
    getCellDate: t.addDate,
    titleCell: function (k) {
      return de(k, { locale: o, format: "YYYY-MM-DD", generateConfig: t })
    },
    headerCells: v
  })
}

function Hr(e) {
  var n = e.prefixCls, t = e.generateConfig, a = e.locale, o = e.viewDate, r = e.onNextMonth, l = e.onPrevMonth,
    c = e.onNextYear, f = e.onPrevYear, d = e.onYearClick, C = e.onMonthClick, g = x.exports.useContext(Ye),
    u = g.hideHeader;
  if (u) return null;
  var s = "".concat(n, "-header"),
    i = a.shortMonths || (t.locale.getShortMonths ? t.locale.getShortMonths(a.locale) : []), m = t.getMonth(o),
    v = h("button", {
      type: "button",
      onClick: d,
      tabIndex: -1,
      className: "".concat(n, "-year-btn"),
      children: de(o, { locale: a, format: a.yearFormat, generateConfig: t })
    }, "year"), w = h("button", {
      type: "button",
      onClick: C,
      tabIndex: -1,
      className: "".concat(n, "-month-btn"),
      children: a.monthFormat ? de(o, { locale: a, format: a.monthFormat, generateConfig: t }) : i[m]
    }, "month"), S = a.monthBeforeYear ? [w, v] : [v, w];
  return h(Sn, { ...e, prefixCls: s, onSuperPrev: f, onPrev: l, onNext: r, onSuperNext: c, children: S })
}

var _r = 6;

function bt(e) {
  var n = e.prefixCls, t = e.panelName, a = t === void 0 ? "date" : t, o = e.keyboardConfig, r = e.active,
    l = e.operationRef, c = e.generateConfig, f = e.value, d = e.viewDate, C = e.onViewDateChange, g = e.onPanelChange,
    u = e.onSelect, s = "".concat(n, "-").concat(a, "-panel");
  l.current = {
    onKeyDown: function (w) {
      return Mn(w, Z({
        onLeftRight: function (p) {
          u(c.addDate(f || d, p), "key")
        }, onCtrlLeftRight: function (p) {
          u(c.addYear(f || d, p), "key")
        }, onUpDown: function (p) {
          u(c.addDate(f || d, p * Gn), "key")
        }, onPageUpDown: function (p) {
          u(c.addMonth(f || d, p), "key")
        }
      }, o))
    }
  };
  var i = function (w) {
    var S = c.addYear(d, w);
    C(S), g(null, S)
  }, m = function (w) {
    var S = c.addMonth(d, w);
    C(S), g(null, S)
  };
  return ae("div", {
    className: oe(s, R({}, "".concat(s, "-active"), r)),
    children: [h(Hr, {
      ...e, prefixCls: n, value: f, viewDate: d, onPrevYear: function () {
        i(-1)
      }, onNextYear: function () {
        i(1)
      }, onPrevMonth: function () {
        m(-1)
      }, onNextMonth: function () {
        m(1)
      }, onMonthClick: function () {
        g("month", d)
      }, onYearClick: function () {
        g("year", d)
      }
    }), h(Lr, {
      ...e, onSelect: function (w) {
        return u(w, "mouse")
      }, prefixCls: n, value: f, viewDate: d, rowCount: _r
    })]
  })
}

var ta = Vr("date", "time");

function Or(e) {
  var n = e.prefixCls, t = e.operationRef, a = e.generateConfig, o = e.value, r = e.defaultValue, l = e.disabledTime,
    c = e.showTime, f = e.onSelect, d = "".concat(n, "-datetime-panel"), C = x.exports.useState(null), g = T(C, 2),
    u = g[0], s = g[1], i = x.exports.useRef({}), m = x.exports.useRef({}), v = En(c) === "object" ? Z({}, c) : {};

  function w(N) {
    var k = ta.indexOf(u) + N, O = ta[k] || null;
    return O
  }

  var S = function (k) {
    m.current.onBlur && m.current.onBlur(k), s(null)
  };
  t.current = {
    onKeyDown: function (k) {
      if (k.which === z.TAB) {
        var O = w(k.shiftKey ? -1 : 1);
        return s(O), O && k.preventDefault(), !0
      }
      if (u) {
        var P = u === "date" ? i : m;
        return P.current && P.current.onKeyDown && P.current.onKeyDown(k), !0
      }
      return [z.LEFT, z.RIGHT, z.UP, z.DOWN].includes(k.which) ? (s("date"), !0) : !1
    }, onBlur: S, onClose: S
  };
  var p = function (k, O) {
    var P = k;
    O === "date" && !o && v.defaultValue ? (P = a.setHour(P, a.getHour(v.defaultValue)), P = a.setMinute(P, a.getMinute(v.defaultValue)), P = a.setSecond(P, a.getSecond(v.defaultValue))) : O === "time" && !o && r && (P = a.setYear(P, a.getYear(r)), P = a.setMonth(P, a.getMonth(r)), P = a.setDate(P, a.getDate(r))), f && f(P, "mouse")
  }, F = l ? l(o || null) : {};
  return ae("div", {
    className: oe(d, R({}, "".concat(d, "-active"), u)),
    children: [h(bt, {
      ...e, operationRef: i, active: u === "date", onSelect: function (k) {
        p(da(a, k, !o && En(c) === "object" ? c.defaultValue : null), "date")
      }
    }), h(Ma, {
      ...e,
      format: void 0, ...v, ...F,
      disabledTime: null,
      defaultValue: void 0,
      operationRef: m,
      active: u === "time",
      onSelect: function (k) {
        p(k, "time")
      }
    })]
  })
}

function Ar(e) {
  var n = e.prefixCls, t = e.generateConfig, a = e.locale, o = e.value, r = "".concat(n, "-cell"), l = function (C) {
    return h("td", { className: oe(r, "".concat(r, "-week")), children: t.locale.getWeek(a.locale, C) }, "week")
  }, c = "".concat(n, "-week-panel-row"), f = function (C) {
    return oe(c, R({}, "".concat(c, "-selected"), ma(t, a.locale, o, C)))
  };
  return h(bt, { ...e, panelName: "week", prefixColumn: l, rowClassName: f, keyboardConfig: { onLeftRight: null } })
}

function Fr(e) {
  var n = e.prefixCls, t = e.generateConfig, a = e.locale, o = e.viewDate, r = e.onNextYear, l = e.onPrevYear,
    c = e.onYearClick, f = x.exports.useContext(Ye), d = f.hideHeader;
  if (d) return null;
  var C = "".concat(n, "-header");
  return h(Sn, {
    ...e,
    prefixCls: C,
    onSuperPrev: l,
    onSuperNext: r,
    children: h("button", {
      type: "button",
      onClick: c,
      className: "".concat(n, "-year-btn"),
      children: de(o, { locale: a, format: a.yearFormat, generateConfig: t })
    })
  })
}

var Na = 3, $r = 4;

function Br(e) {
  var n = e.prefixCls, t = e.locale, a = e.value, o = e.viewDate, r = e.generateConfig, l = e.monthCellRender,
    c = x.exports.useContext(Nn), f = c.rangedValue, d = c.hoverRangedValue, C = "".concat(n, "-cell"), g = Zn({
      cellPrefixCls: C,
      value: a,
      generateConfig: r,
      rangedValue: f,
      hoverRangedValue: d,
      isSameCell: function (v, w) {
        return Nt(r, v, w)
      },
      isInView: function () {
        return !0
      },
      offsetCell: function (v, w) {
        return r.addMonth(v, w)
      }
    }), u = t.shortMonths || (r.locale.getShortMonths ? r.locale.getShortMonths(t.locale) : []), s = r.setMonth(o, 0),
    i = l ? function (m) {
      return l(m, t)
    } : void 0;
  return h(Ln, {
    ...e, rowNum: $r, colNum: Na, baseDate: s, getCellNode: i, getCellText: function (v) {
      return t.monthFormat ? de(v, { locale: t, format: t.monthFormat, generateConfig: r }) : u[r.getMonth(v)]
    }, getCellClassName: g, getCellDate: r.addMonth, titleCell: function (v) {
      return de(v, { locale: t, format: "YYYY-MM", generateConfig: r })
    }
  })
}

function Kr(e) {
  var n = e.prefixCls, t = e.operationRef, a = e.onViewDateChange, o = e.generateConfig, r = e.value, l = e.viewDate,
    c = e.onPanelChange, f = e.onSelect, d = "".concat(n, "-month-panel");
  t.current = {
    onKeyDown: function (u) {
      return Mn(u, {
        onLeftRight: function (i) {
          f(o.addMonth(r || l, i), "key")
        }, onCtrlLeftRight: function (i) {
          f(o.addYear(r || l, i), "key")
        }, onUpDown: function (i) {
          f(o.addMonth(r || l, i * Na), "key")
        }, onEnter: function () {
          c("date", r || l)
        }
      })
    }
  };
  var C = function (u) {
    var s = o.addYear(l, u);
    a(s), c(null, s)
  };
  return ae("div", {
    className: d, children: [h(Fr, {
      ...e, prefixCls: n, onPrevYear: function () {
        C(-1)
      }, onNextYear: function () {
        C(1)
      }, onYearClick: function () {
        c("year", l)
      }
    }), h(Br, {
      ...e, prefixCls: n, onSelect: function (u) {
        f(u, "mouse"), c("date", u)
      }
    })]
  })
}

function Ur(e) {
  var n = e.prefixCls, t = e.generateConfig, a = e.locale, o = e.viewDate, r = e.onNextYear, l = e.onPrevYear,
    c = e.onYearClick, f = x.exports.useContext(Ye), d = f.hideHeader;
  if (d) return null;
  var C = "".concat(n, "-header");
  return h(Sn, {
    ...e,
    prefixCls: C,
    onSuperPrev: l,
    onSuperNext: r,
    children: h("button", {
      type: "button",
      onClick: c,
      className: "".concat(n, "-year-btn"),
      children: de(o, { locale: a, format: a.yearFormat, generateConfig: t })
    })
  })
}

var Wr = 4, qr = 1;

function jr(e) {
  var n = e.prefixCls, t = e.locale, a = e.value, o = e.viewDate, r = e.generateConfig, l = x.exports.useContext(Nn),
    c = l.rangedValue, f = l.hoverRangedValue, d = "".concat(n, "-cell"), C = Zn({
      cellPrefixCls: d,
      value: a,
      generateConfig: r,
      rangedValue: c,
      hoverRangedValue: f,
      isSameCell: function (s, i) {
        return Ca(r, s, i)
      },
      isInView: function () {
        return !0
      },
      offsetCell: function (s, i) {
        return r.addMonth(s, i * 3)
      }
    }), g = r.setDate(r.setMonth(o, 0), 1);
  return h(Ln, {
    ...e, rowNum: qr, colNum: Wr, baseDate: g, getCellText: function (s) {
      return de(s, { locale: t, format: t.quarterFormat || "[Q]Q", generateConfig: r })
    }, getCellClassName: C, getCellDate: function (s, i) {
      return r.addMonth(s, i * 3)
    }, titleCell: function (s) {
      return de(s, { locale: t, format: "YYYY-[Q]Q", generateConfig: r })
    }
  })
}

function Qr(e) {
  var n = e.prefixCls, t = e.operationRef, a = e.onViewDateChange, o = e.generateConfig, r = e.value, l = e.viewDate,
    c = e.onPanelChange, f = e.onSelect, d = "".concat(n, "-quarter-panel");
  t.current = {
    onKeyDown: function (u) {
      return Mn(u, {
        onLeftRight: function (i) {
          f(o.addMonth(r || l, i * 3), "key")
        }, onCtrlLeftRight: function (i) {
          f(o.addYear(r || l, i), "key")
        }, onUpDown: function (i) {
          f(o.addYear(r || l, i), "key")
        }
      })
    }
  };
  var C = function (u) {
    var s = o.addYear(l, u);
    a(s), c(null, s)
  };
  return ae("div", {
    className: d, children: [h(Ur, {
      ...e, prefixCls: n, onPrevYear: function () {
        C(-1)
      }, onNextYear: function () {
        C(1)
      }, onYearClick: function () {
        c("year", l)
      }
    }), h(jr, {
      ...e, prefixCls: n, onSelect: function (u) {
        f(u, "mouse")
      }
    })]
  })
}

function zr(e) {
  var n = e.prefixCls, t = e.generateConfig, a = e.viewDate, o = e.onPrevDecade, r = e.onNextDecade,
    l = e.onDecadeClick, c = x.exports.useContext(Ye), f = c.hideHeader;
  if (f) return null;
  var d = "".concat(n, "-header"), C = t.getYear(a), g = Math.floor(C / on) * on, u = g + on - 1;
  return h(Sn, {
    ...e,
    prefixCls: d,
    onSuperPrev: o,
    onSuperNext: r,
    children: ae("button", {
      type: "button",
      onClick: l,
      className: "".concat(n, "-decade-btn"),
      children: [g, "-", u]
    })
  })
}

var xt = 3, aa = 4;

function Gr(e) {
  var n = e.prefixCls, t = e.value, a = e.viewDate, o = e.locale, r = e.generateConfig, l = x.exports.useContext(Nn),
    c = l.rangedValue, f = l.hoverRangedValue, d = "".concat(n, "-cell"), C = r.getYear(a), g = Math.floor(C / on) * on,
    u = g + on - 1, s = r.setYear(a, g - Math.ceil((xt * aa - on) / 2)), i = function (w) {
      var S = r.getYear(w);
      return g <= S && S <= u
    }, m = Zn({
      cellPrefixCls: d,
      value: t,
      generateConfig: r,
      rangedValue: c,
      hoverRangedValue: f,
      isSameCell: function (w, S) {
        return Jn(r, w, S)
      },
      isInView: i,
      offsetCell: function (w, S) {
        return r.addYear(w, S)
      }
    });
  return h(Ln, {
    ...e,
    rowNum: aa,
    colNum: xt,
    baseDate: s,
    getCellText: r.getYear,
    getCellClassName: m,
    getCellDate: r.addYear,
    titleCell: function (w) {
      return de(w, { locale: o, format: "YYYY", generateConfig: r })
    }
  })
}

var on = 10;

function Xr(e) {
  var n = e.prefixCls, t = e.operationRef, a = e.onViewDateChange, o = e.generateConfig, r = e.value, l = e.viewDate,
    c = e.sourceMode, f = e.onSelect, d = e.onPanelChange, C = "".concat(n, "-year-panel");
  t.current = {
    onKeyDown: function (s) {
      return Mn(s, {
        onLeftRight: function (m) {
          f(o.addYear(r || l, m), "key")
        }, onCtrlLeftRight: function (m) {
          f(o.addYear(r || l, m * on), "key")
        }, onUpDown: function (m) {
          f(o.addYear(r || l, m * xt), "key")
        }, onEnter: function () {
          d(c === "date" ? "date" : "month", r || l)
        }
      })
    }
  };
  var g = function (s) {
    var i = o.addYear(l, s * 10);
    a(i), d(null, i)
  };
  return ae("div", {
    className: C, children: [h(zr, {
      ...e, prefixCls: n, onPrevDecade: function () {
        g(-1)
      }, onNextDecade: function () {
        g(1)
      }, onDecadeClick: function () {
        d("decade", l)
      }
    }), h(Gr, {
      ...e, prefixCls: n, onSelect: function (s) {
        d(c === "date" ? "date" : "month", s), f(s, "mouse")
      }
    })]
  })
}

function ba(e, n, t) {
  return t ? h("div", { className: "".concat(e, "-footer-extra"), children: t(n) }) : null
}

function ya(e) {
  var n = e.prefixCls, t = e.rangeList, a = t === void 0 ? [] : t, o = e.components, r = o === void 0 ? {} : o,
    l = e.needConfirmButton, c = e.onNow, f = e.onOk, d = e.okDisabled, C = e.showNow, g = e.locale, u, s;
  if (a.length) {
    var i = r.rangeItem || "span";
    u = h(zn, {
      children: a.map(function (v) {
        var w = v.label, S = v.onClick, p = v.onMouseEnter, F = v.onMouseLeave;
        return h("li", {
          className: "".concat(n, "-preset"),
          children: h(i, { onClick: S, onMouseEnter: p, onMouseLeave: F, children: w })
        }, w)
      })
    })
  }
  if (l) {
    var m = r.button || "button";
    c && !u && C !== !1 && (u = h("li", {
      className: "".concat(n, "-now"),
      children: h("a", { className: "".concat(n, "-now-btn"), onClick: c, children: g.now })
    })), s = l && h("li", {
      className: "".concat(n, "-ok"),
      children: h(m, { disabled: d, onClick: f, children: g.ok })
    })
  }
  return !u && !s ? null : ae("ul", { className: "".concat(n, "-ranges"), children: [u, s] })
}

function pa(e) {
  var n, t = e.prefixCls, a = t === void 0 ? "rc-picker" : t, o = e.className, r = e.style, l = e.locale,
    c = e.generateConfig, f = e.value, d = e.defaultValue, C = e.pickerValue, g = e.defaultPickerValue,
    u = e.disabledDate, s = e.mode, i = e.picker, m = i === void 0 ? "date" : i, v = e.tabIndex,
    w = v === void 0 ? 0 : v, S = e.showNow, p = e.showTime, F = e.showToday, N = e.renderExtraFooter, k = e.hideHeader,
    O = e.onSelect, P = e.onChange, E = e.onPanelChange, G = e.onMouseDown, B = e.onPickerValueChange, pe = e.onOk,
    le = e.components, ie = e.direction, De = e.hourStep, j = De === void 0 ? 1 : De, ve = e.minuteStep,
    ge = ve === void 0 ? 1 : ve, we = e.secondStep, Se = we === void 0 ? 1 : we,
    qe = m === "date" && !!p || m === "time", Ve = 24 % j === 0, ln = 60 % ge === 0, $e = 60 % Se === 0,
    Me = x.exports.useContext(Ye), en = Me.operationRef, un = Me.panelRef, je = Me.onSelect, Be = Me.hideRanges,
    Ne = Me.defaultOpenValue, Ce = x.exports.useContext(Nn), L = Ce.inRange, X = Ce.panelPosition, K = Ce.rangedValue,
    J = Ce.hoverRangedValue, U = x.exports.useRef({}), re = x.exports.useRef(!0), ke = We(null, {
      value: f, defaultValue: d, postState: function (M) {
        return !M && Ne && m === "time" ? Ne : M
      }
    }), Te = T(ke, 2), ee = Te[0], bn = Te[1], cn = We(null, {
      value: C, defaultValue: g || ee, postState: function (M) {
        var H = c.getNow();
        if (!M) return H;
        if (!ee && p) {
          var ye = En(p) === "object" ? p.defaultValue : d;
          return da(c, Array.isArray(M) ? M[0] : M, ye || H)
        }
        return Array.isArray(M) ? M[0] : M
      }
    }), ue = T(cn, 2), sn = ue[0], fn = ue[1], me = function (M) {
      fn(M), B && B(M)
    }, Ee = function (M) {
      var H = yr[m];
      return H ? H(M) : M
    }, ce = We(function () {
      return m === "time" ? "time" : Ee("date")
    }, { value: s }), xe = T(ce, 2), se = xe[0], Ie = xe[1];
  x.exports.useEffect(function () {
    Ie(m)
  }, [m]);
  var be = x.exports.useState(function () {
    return se
  }), Qe = T(be, 2), Le = Qe[0], Oe = Qe[1], Re = function (M, H) {
    var ye = Ee(M || se);
    Oe(se), Ie(ye), E && (se !== ye || In(c, sn, sn)) && E(H, ye)
  }, Q = function (M, H) {
    var ye = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1;
    (se === m || ye) && (bn(M), O && O(M), je && je(M, H), P && !In(c, M, ee) && !(u != null && u(M)) && P(M))
  }, Cn = function (M) {
    return U.current && U.current.onKeyDown ? ([z.LEFT, z.RIGHT, z.UP, z.DOWN, z.PAGE_UP, z.PAGE_DOWN, z.ENTER].includes(M.which) && M.preventDefault(), U.current.onKeyDown(M)) : (Mt(!1, "Panel not correct handle keyDown event. Please help to fire issue about this."), !1)
  }, nn = function (M) {
    U.current && U.current.onBlur && U.current.onBlur(M)
  };
  en && X !== "right" && (en.current = {
    onKeyDown: Cn, onClose: function () {
      U.current && U.current.onClose && U.current.onClose()
    }
  }), x.exports.useEffect(function () {
    f && !re.current && fn(f)
  }, [f]), x.exports.useEffect(function () {
    re.current = !1
  }, []);
  var b, fe = Z(Z({}, e), {}, {
    operationRef: U,
    prefixCls: a,
    viewDate: sn,
    value: ee,
    onViewDateChange: me,
    sourceMode: Le,
    onPanelChange: Re,
    disabledDate: u
  });
  switch (delete fe.onChange, delete fe.onSelect, se) {
    case"decade":
      b = h(pr, {
        ...fe, onSelect: function (M, H) {
          me(M), Q(M, H)
        }
      });
      break;
    case"year":
      b = h(Xr, {
        ...fe, onSelect: function (M, H) {
          me(M), Q(M, H)
        }
      });
      break;
    case"month":
      b = h(Kr, {
        ...fe, onSelect: function (M, H) {
          me(M), Q(M, H)
        }
      });
      break;
    case"quarter":
      b = h(Qr, {
        ...fe, onSelect: function (M, H) {
          me(M), Q(M, H)
        }
      });
      break;
    case"week":
      b = h(Ar, {
        ...fe, onSelect: function (M, H) {
          me(M), Q(M, H)
        }
      });
      break;
    case"time":
      delete fe.showTime, b = h(Ma, {
        ...fe, ...En(p) === "object" ? p : null, onSelect: function (M, H) {
          me(M), Q(M, H)
        }
      });
      break;
    default:
      p ? b = h(Or, {
        ...fe, onSelect: function (M, H) {
          me(M), Q(M, H)
        }
      }) : b = h(bt, {
        ...fe, onSelect: function (M, H) {
          me(M), Q(M, H)
        }
      })
  }
  var he, $, Ke = function () {
    var M = c.getNow(), H = hr(c.getHour(M), c.getMinute(M), c.getSecond(M), Ve ? j : 1, ln ? ge : 1, $e ? Se : 1),
      ye = fa(c, M, H[0], H[1], H[2]);
    Q(ye, "submit")
  };
  Be || (he = ba(a, se, N), $ = ya({
    prefixCls: a,
    components: le,
    needConfirmButton: qe,
    okDisabled: !ee || u && u(ee),
    locale: l,
    showNow: S,
    onNow: qe && Ke,
    onOk: function () {
      ee && (Q(ee, "submit", !0), pe && pe(ee))
    }
  }));
  var tn;
  if (F && se === "date" && m === "date" && !p) {
    var ne = c.getNow(), mn = "".concat(a, "-today-btn"), an = u && u(ne);
    tn = h("a", {
      className: oe(mn, an && "".concat(mn, "-disabled")), "aria-disabled": an, onClick: function () {
        an || Q(ne, "mouse", !0)
      }, children: l.today
    })
  }
  return h(Ye.Provider, {
    value: Z(Z({}, Me), {}, {
      mode: se,
      hideHeader: "hideHeader" in e ? k : Me.hideHeader,
      hidePrevBtn: L && X === "right",
      hideNextBtn: L && X === "left"
    }),
    children: ae("div", {
      tabIndex: w,
      className: oe("".concat(a, "-panel"), o, (n = {}, R(n, "".concat(a, "-panel-has-range"), K && K[0] && K[1]), R(n, "".concat(a, "-panel-has-range-hover"), J && J[0] && J[1]), R(n, "".concat(a, "-panel-rtl"), ie === "rtl"), n)),
      style: r,
      onKeyDown: Cn,
      onBlur: nn,
      onMouseDown: G,
      ref: un,
      children: [b, he || $ || tn ? ae("div", { className: "".concat(a, "-footer"), children: [he, $, tn] }) : null]
    })
  })
}

var Jr = {
  bottomLeft: { points: ["tl", "bl"], offset: [0, 4], overflow: { adjustX: 1, adjustY: 1 } },
  bottomRight: { points: ["tr", "br"], offset: [0, 4], overflow: { adjustX: 1, adjustY: 1 } },
  topLeft: { points: ["bl", "tl"], offset: [0, -4], overflow: { adjustX: 0, adjustY: 1 } },
  topRight: { points: ["br", "tr"], offset: [0, -4], overflow: { adjustX: 0, adjustY: 1 } }
};

function ka(e) {
  var n, t = e.prefixCls, a = e.popupElement, o = e.popupStyle, r = e.visible, l = e.dropdownClassName,
    c = e.dropdownAlign, f = e.transitionName, d = e.getPopupContainer, C = e.children, g = e.range,
    u = e.popupPlacement, s = e.direction, i = "".concat(t, "-dropdown"), m = function () {
      return u !== void 0 ? u : s === "rtl" ? "bottomRight" : "bottomLeft"
    };
  return h(dr, {
    showAction: [],
    hideAction: [],
    popupPlacement: m(),
    builtinPlacements: Jr,
    prefixCls: i,
    popupTransitionName: f,
    popup: a,
    popupAlign: c,
    popupVisible: r,
    popupClassName: oe(l, (n = {}, R(n, "".concat(i, "-range"), g), R(n, "".concat(i, "-rtl"), s === "rtl"), n)),
    popupStyle: o,
    getPopupContainer: d,
    children: C
  })
}

function Dt(e) {
  var n = e.open, t = e.value, a = e.isClickOutside, o = e.triggerOpen, r = e.forwardKeyDown, l = e.onKeyDown,
    c = e.blurToCancel, f = e.onSubmit, d = e.onCancel, C = e.onFocus, g = e.onBlur, u = x.exports.useState(!1),
    s = T(u, 2), i = s[0], m = s[1], v = x.exports.useState(!1), w = T(v, 2), S = w[0], p = w[1],
    F = x.exports.useRef(!1), N = x.exports.useRef(!1), k = x.exports.useRef(!1), O = {
      onMouseDown: function () {
        m(!0), o(!0)
      }, onKeyDown: function (E) {
        var G = function () {
          k.current = !0
        };
        if (l(E, G), !k.current) {
          switch (E.which) {
            case z.ENTER: {
              n ? f() !== !1 && m(!0) : o(!0), E.preventDefault();
              return
            }
            case z.TAB: {
              i && n && !E.shiftKey ? (m(!1), E.preventDefault()) : !i && n && !r(E) && E.shiftKey && (m(!0), E.preventDefault());
              return
            }
            case z.ESC: {
              m(!0), d();
              return
            }
          }
          !n && ![z.SHIFT].includes(E.which) ? o(!0) : i || r(E)
        }
      }, onFocus: function (E) {
        m(!0), p(!0), C && C(E)
      }, onBlur: function (E) {
        if (F.current || !a(document.activeElement)) {
          F.current = !1;
          return
        }
        c ? setTimeout(function () {
          for (var G = document, B = G.activeElement; B && B.shadowRoot;) B = B.shadowRoot.activeElement;
          a(B) && d()
        }, 0) : n && (o(!1), N.current && f()), p(!1), g && g(E)
      }
    };
  return x.exports.useEffect(function () {
    N.current = !1
  }, [n]), x.exports.useEffect(function () {
    N.current = !0
  }, [t]), x.exports.useEffect(function () {
    return Dr(function (P) {
      var E = wr(P);
      if (n) {
        var G = a(E);
        G ? (!S || G) && o(!1) : (F.current = !0, requestAnimationFrame(function () {
          F.current = !1
        }))
      }
    })
  }), [O, { focused: S, typing: i }]
}

function wt(e) {
  var n = e.valueTexts, t = e.onTextChange, a = x.exports.useState(""), o = T(a, 2), r = o[0], l = o[1],
    c = x.exports.useRef([]);
  c.current = n;

  function f(C) {
    l(C), t(C)
  }

  function d() {
    l(c.current[0])
  }

  return x.exports.useEffect(function () {
    n.every(function (C) {
      return C !== r
    }) && d()
  }, [n.join("||")]), [r, f, d]
}

function Xn(e, n) {
  var t = n.formatList, a = n.generateConfig, o = n.locale;
  return la(function () {
    if (!e) return [[""], ""];
    for (var r = "", l = [], c = 0; c < t.length; c += 1) {
      var f = t[c], d = de(e, { generateConfig: a, locale: o, format: f });
      l.push(d), c === 0 && (r = d)
    }
    return [l, r]
  }, [e, t], function (r, l) {
    return r[0] !== l[0] || !vr(r[1], l[1])
  })
}

function St(e, n) {
  var t = n.formatList, a = n.generateConfig, o = n.locale, r = x.exports.useState(null), l = T(r, 2), c = l[0],
    f = l[1], d = x.exports.useRef(null);

  function C(v) {
    var w = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
    if (cancelAnimationFrame(d.current), w) {
      f(v);
      return
    }
    d.current = requestAnimationFrame(function () {
      f(v)
    })
  }

  var g = Xn(c, { formatList: t, generateConfig: a, locale: o }), u = T(g, 2), s = u[1];

  function i(v) {
    C(v)
  }

  function m() {
    var v = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !1;
    C(null, v)
  }

  return x.exports.useEffect(function () {
    m(!0)
  }, [e]), x.exports.useEffect(function () {
    return function () {
      return cancelAnimationFrame(d.current)
    }
  }, []), [s, i, m]
}

function Zr(e) {
  var n, t = e.prefixCls, a = t === void 0 ? "rc-picker" : t, o = e.id, r = e.tabIndex, l = e.style, c = e.className,
    f = e.dropdownClassName, d = e.dropdownAlign, C = e.popupStyle, g = e.transitionName, u = e.generateConfig,
    s = e.locale, i = e.inputReadOnly, m = e.allowClear, v = e.autoFocus, w = e.showTime, S = e.picker,
    p = S === void 0 ? "date" : S, F = e.format, N = e.use12Hours, k = e.value, O = e.defaultValue, P = e.open,
    E = e.defaultOpen, G = e.defaultOpenValue, B = e.suffixIcon, pe = e.clearIcon, le = e.disabled, ie = e.disabledDate,
    De = e.placeholder, j = e.getPopupContainer, ve = e.pickerRef, ge = e.panelRender, we = e.onChange,
    Se = e.onOpenChange, qe = e.onFocus, Ve = e.onBlur, ln = e.onMouseDown, $e = e.onMouseUp, Me = e.onMouseEnter,
    en = e.onMouseLeave, un = e.onContextMenu, je = e.onClick, Be = e.onKeyDown, Ne = e.onSelect, Ce = e.direction,
    L = e.autoComplete, X = L === void 0 ? "off" : L, K = e.inputRender, J = x.exports.useRef(null),
    U = p === "date" && !!w || p === "time", re = wa(va(F, p, w, N)), ke = x.exports.useRef(null),
    Te = x.exports.useRef(null), ee = x.exports.useRef(null), bn = We(null, { value: k, defaultValue: O }),
    cn = T(bn, 2), ue = cn[0], sn = cn[1], fn = x.exports.useState(ue), me = T(fn, 2), Ee = me[0], ce = me[1],
    xe = x.exports.useRef(null), se = We(!1, {
      value: P, defaultValue: E, postState: function (Y) {
        return le ? !1 : Y
      }, onChange: function (Y) {
        Se && Se(Y), !Y && xe.current && xe.current.onClose && xe.current.onClose()
      }
    }), Ie = T(se, 2), be = Ie[0], Qe = Ie[1], Le = Xn(Ee, { formatList: re, generateConfig: u, locale: s }),
    Oe = T(Le, 2), Re = Oe[0], Q = Oe[1], Cn = wt({
      valueTexts: Re, onTextChange: function (Y) {
        var He = xa(Y, { locale: s, formatList: re, generateConfig: u });
        He && (!ie || !ie(He)) && ce(He)
      }
    }), nn = T(Cn, 3), b = nn[0], fe = nn[1], he = nn[2], $ = function (Y) {
      ce(Y), sn(Y), we && !In(u, ue, Y) && we(Y, Y ? de(Y, { generateConfig: u, locale: s, format: re[0] }) : "")
    }, Ke = function (Y) {
      le && Y || Qe(Y)
    }, tn = function (Y) {
      return be && xe.current && xe.current.onKeyDown ? xe.current.onKeyDown(Y) : (Mt(!1, "Picker not correct forward KeyDown operation. Please help to fire issue about this."), !1)
    }, ne = function () {
      $e && $e.apply(void 0, arguments), J.current && (J.current.focus(), Ke(!0))
    }, mn = Dt({
      blurToCancel: U, open: be, value: b, triggerOpen: Ke, forwardKeyDown: tn, isClickOutside: function (Y) {
        return !ha([ke.current, Te.current, ee.current], Y)
      }, onSubmit: function () {
        return !Ee || ie && ie(Ee) ? !1 : ($(Ee), Ke(!1), he(), !0)
      }, onCancel: function () {
        Ke(!1), ce(ue), he()
      }, onKeyDown: function (Y, He) {
        Be == null || Be(Y, He)
      }, onFocus: qe, onBlur: Ve
    }), an = T(mn, 2), W = an[0], M = an[1], H = M.focused, ye = M.typing;
  x.exports.useEffect(function () {
    be || (ce(ue), !Re.length || Re[0] === "" ? fe("") : Q !== b && he())
  }, [be, Re]), x.exports.useEffect(function () {
    be || he()
  }, [p]), x.exports.useEffect(function () {
    ce(ue)
  }, [ue]), ve && (ve.current = {
    focus: function () {
      J.current && J.current.focus()
    }, blur: function () {
      J.current && J.current.blur()
    }
  });
  var Hn = St(b, { formatList: re, generateConfig: u, locale: s }), q = T(Hn, 3), ze = q[0], et = q[1], yn = q[2],
    dn = Z(Z({}, e), {}, {
      className: void 0,
      style: void 0,
      pickerValue: void 0,
      onPickerValueChange: void 0,
      onChange: null
    }), xn = h(pa, {
      ...dn,
      generateConfig: u,
      className: oe(R({}, "".concat(a, "-panel-focused"), !ye)),
      value: Ee,
      locale: s,
      tabIndex: -1,
      onSelect: function (Y) {
        Ne == null || Ne(Y), ce(Y)
      },
      direction: Ce,
      onPanelChange: function (Y, He) {
        var Rn = e.onPanelChange;
        yn(!0), Rn == null || Rn(Y, He)
      }
    });
  ge && (xn = ge(xn));
  var nt = h("div", {
    className: "".concat(a, "-panel-container"), onMouseDown: function (Y) {
      Y.preventDefault()
    }, children: xn
  }), _n;
  B && (_n = h("span", { className: "".concat(a, "-suffix"), children: B }));
  var pn;
  m && ue && !le && (pn = h("span", {
    onMouseDown: function (Y) {
      Y.preventDefault(), Y.stopPropagation()
    },
    onMouseUp: function (Y) {
      Y.preventDefault(), Y.stopPropagation(), $(null), Ke(!1)
    },
    className: "".concat(a, "-clear"),
    role: "button",
    children: pe || h("span", { className: "".concat(a, "-clear-btn") })
  }));
  var kn = Z(Z(Z({
      id: o,
      tabIndex: r,
      disabled: le,
      readOnly: i || typeof re[0] == "function" || !ye,
      value: ze || b,
      onChange: function (Y) {
        fe(Y.target.value)
      },
      autoFocus: v,
      placeholder: De,
      ref: J,
      title: b
    }, W), {}, { size: ga(p, re[0], u) }, Sa(e)), {}, { autoComplete: X }), On = K ? K(kn) : h("input", { ...kn }),
    tt = function (Y, He) {
      (He === "submit" || He !== "key" && !U) && ($(Y), Ke(!1))
    }, An = Ce === "rtl" ? "bottomRight" : "bottomLeft";
  return h(Ye.Provider, {
    value: {
      operationRef: xe,
      hideHeader: p === "time",
      panelRef: ke,
      onSelect: tt,
      open: be,
      defaultOpenValue: G,
      onDateMouseEnter: et,
      onDateMouseLeave: yn
    },
    children: h(ka, {
      visible: be,
      popupElement: nt,
      popupStyle: C,
      prefixCls: a,
      dropdownClassName: f,
      dropdownAlign: d,
      getPopupContainer: j,
      transitionName: g,
      popupPlacement: An,
      direction: Ce,
      children: h("div", {
        ref: ee,
        className: oe(a, c, (n = {}, R(n, "".concat(a, "-disabled"), le), R(n, "".concat(a, "-focused"), H), R(n, "".concat(a, "-rtl"), Ce === "rtl"), n)),
        style: l,
        onMouseDown: ln,
        onMouseUp: ne,
        onMouseEnter: Me,
        onMouseLeave: en,
        onContextMenu: un,
        onClick: je,
        children: ae("div", {
          className: oe("".concat(a, "-input"), R({}, "".concat(a, "-input-placeholder"), !!ze)),
          ref: Te,
          children: [On, _n, pn]
        })
      })
    })
  })
}

var Co = function (e) {
  ua(t, e);
  var n = ia(t);

  function t() {
    var a;
    ca(this, t);
    for (var o = arguments.length, r = new Array(o), l = 0; l < o; l++) r[l] = arguments[l];
    return a = n.call.apply(n, [this].concat(r)), a.pickerRef = x.exports.createRef(), a.focus = function () {
      a.pickerRef.current && a.pickerRef.current.focus()
    }, a.blur = function () {
      a.pickerRef.current && a.pickerRef.current.blur()
    }, a
  }

  return sa(t, [{
    key: "render", value: function () {
      return h(Zr, { ...this.props, pickerRef: this.pickerRef })
    }
  }]), t
}(x.exports.Component);

function eo(e, n, t) {
  var a = e.picker, o = e.locale, r = e.selectedValue, l = e.disabledDate, c = e.disabled, f = e.generateConfig,
    d = _(r, 0), C = _(r, 1);

  function g(v) {
    return f.locale.getWeekFirstDate(o.locale, v)
  }

  function u(v) {
    var w = f.getYear(v), S = f.getMonth(v);
    return w * 100 + S
  }

  function s(v) {
    var w = f.getYear(v), S = Ct(f, v);
    return w * 10 + S
  }

  var i = x.exports.useCallback(function (v) {
    if (l && l(v)) return !0;
    if (c[1] && C) return !Ze(f, v, C) && f.isAfter(v, C);
    if (n && C) switch (a) {
      case"quarter":
        return s(v) > s(C);
      case"month":
        return u(v) > u(C);
      case"week":
        return g(v) > g(C);
      default:
        return !Ze(f, v, C) && f.isAfter(v, C)
    }
    return !1
  }, [l, c[1], C, n]), m = x.exports.useCallback(function (v) {
    if (l && l(v)) return !0;
    if (c[0] && d) return !Ze(f, v, C) && f.isAfter(d, v);
    if (t && d) switch (a) {
      case"quarter":
        return s(v) < s(d);
      case"month":
        return u(v) < u(d);
      case"week":
        return g(v) < g(d);
      default:
        return !Ze(f, v, d) && f.isAfter(d, v)
    }
    return !1
  }, [l, c[0], d, t]);
  return [i, m]
}

function no(e, n, t, a) {
  var o = Tn(e, t, a, 1);

  function r(l) {
    return l(e, n) ? "same" : l(o, n) ? "closing" : "far"
  }

  switch (t) {
    case"year":
      return r(function (l, c) {
        return kr(a, l, c)
      });
    case"quarter":
    case"month":
      return r(function (l, c) {
        return Jn(a, l, c)
      });
    default:
      return r(function (l, c) {
        return Nt(a, l, c)
      })
  }
}

function to(e, n, t, a) {
  var o = _(e, 0), r = _(e, 1);
  if (n === 0) return o;
  if (o && r) {
    var l = no(o, r, t, a);
    switch (l) {
      case"same":
        return o;
      case"closing":
        return o;
      default:
        return Tn(r, t, a, -1)
    }
  }
  return o
}

function ao(e) {
  var n = e.values, t = e.picker, a = e.defaultDates, o = e.generateConfig, r = x.exports.useState(function () {
      return [_(a, 0), _(a, 1)]
    }), l = T(r, 2), c = l[0], f = l[1], d = x.exports.useState(null), C = T(d, 2), g = C[0], u = C[1], s = _(n, 0),
    i = _(n, 1);

  function m(w) {
    return c[w] ? c[w] : _(g, w) || to(n, w, t, o) || s || i || o.getNow()
  }

  function v(w, S) {
    if (w) {
      var p = _e(g, w, S);
      f(_e(c, null, S) || [null, null]);
      var F = (S + 1) % 2;
      _(n, F) || (p = _e(p, w, F)), u(p)
    } else (s || i) && u(null)
  }

  return [m, v]
}

function ra(e, n) {
  return e && e[0] && e[1] && n.isAfter(e[0], e[1]) ? [e[1], e[0]] : e
}

function oa(e, n, t, a) {
  return !!(e || a && a[n] || t[(n + 1) % 2])
}

function ro(e) {
  var n, t, a, o = e.prefixCls, r = o === void 0 ? "rc-picker" : o, l = e.id, c = e.style, f = e.className,
    d = e.popupStyle, C = e.dropdownClassName, g = e.transitionName, u = e.dropdownAlign, s = e.getPopupContainer,
    i = e.generateConfig, m = e.locale, v = e.placeholder, w = e.autoFocus, S = e.disabled, p = e.format, F = e.picker,
    N = F === void 0 ? "date" : F, k = e.showTime, O = e.use12Hours, P = e.separator, E = P === void 0 ? "~" : P,
    G = e.value, B = e.defaultValue, pe = e.defaultPickerValue, le = e.open, ie = e.defaultOpen, De = e.disabledDate,
    j = e.disabledTime, ve = e.dateRender, ge = e.panelRender, we = e.ranges, Se = e.allowEmpty, qe = e.allowClear,
    Ve = e.suffixIcon, ln = e.clearIcon, $e = e.pickerRef, Me = e.inputReadOnly, en = e.mode, un = e.renderExtraFooter,
    je = e.onChange, Be = e.onOpenChange, Ne = e.onPanelChange, Ce = e.onCalendarChange, L = e.onFocus, X = e.onBlur,
    K = e.onMouseDown, J = e.onMouseUp, U = e.onMouseEnter, re = e.onMouseLeave, ke = e.onClick, Te = e.onOk,
    ee = e.onKeyDown, bn = e.components, cn = e.order, ue = e.direction, sn = e.activePickerIndex, fn = e.autoComplete,
    me = fn === void 0 ? "off" : fn, Ee = N === "date" && !!k || N === "time", ce = x.exports.useRef({}),
    xe = x.exports.useRef(null), se = x.exports.useRef(null), Ie = x.exports.useRef(null), be = x.exports.useRef(null),
    Qe = x.exports.useRef(null), Le = x.exports.useRef(null), Oe = x.exports.useRef(null), Re = x.exports.useRef(null),
    Q = wa(va(p, N, k, O)), Cn = We(0, { value: sn }), nn = T(Cn, 2), b = nn[0], fe = nn[1],
    he = x.exports.useRef(null), $ = x.exports.useMemo(function () {
      return Array.isArray(S) ? S : [S || !1, S || !1]
    }, [S]), Ke = We(null, {
      value: G, defaultValue: B, postState: function (D) {
        return N === "time" && !cn ? D : ra(D, i)
      }
    }), tn = T(Ke, 2), ne = tn[0], mn = tn[1], an = ao({ values: ne, picker: N, defaultDates: pe, generateConfig: i }),
    W = T(an, 2), M = W[0], H = W[1], ye = We(ne, {
      postState: function (D) {
        var y = D;
        if ($[0] && $[1]) return y;
        for (var I = 0; I < 2; I += 1) $[I] && !_(y, I) && !_(Se, I) && (y = _e(y, i.getNow(), I));
        return y
      }
    }), Hn = T(ye, 2), q = Hn[0], ze = Hn[1], et = We([N, N], { value: en }), yn = T(et, 2), dn = yn[0], xn = yn[1];
  x.exports.useEffect(function () {
    xn([N, N])
  }, [N]);
  var nt = function (D, y) {
      xn(D), Ne && Ne(y, D)
    }, _n = eo({
      picker: N,
      selectedValue: q,
      locale: m,
      disabled: $,
      disabledDate: De,
      generateConfig: i
    }, ce.current[1], ce.current[0]), pn = T(_n, 2), kn = pn[0], On = pn[1], tt = We(!1, {
      value: le, defaultValue: ie, postState: function (D) {
        return $[b] ? !1 : D
      }, onChange: function (D) {
        Be && Be(D), !D && he.current && he.current.onClose && he.current.onClose()
      }
    }), An = T(tt, 2), A = An[0], Y = An[1], He = A && b === 0, Rn = A && b === 1, Ra = x.exports.useState(0),
    yt = T(Ra, 2), Pa = yt[0], Ya = yt[1];
  x.exports.useEffect(function () {
    !A && xe.current && Ya(xe.current.offsetWidth)
  }, [A]);
  var pt = x.exports.useRef();

  function Dn(V, D) {
    if (V) clearTimeout(pt.current), ce.current[D] = !0, fe(D), Y(V), A || H(null, D); else if (b === D) {
      Y(V);
      var y = ce.current;
      pt.current = setTimeout(function () {
        y === ce.current && (ce.current = {})
      })
    }
  }

  function at(V) {
    Dn(!0, V), setTimeout(function () {
      var D = [Le, Oe][V];
      D.current && D.current.focus()
    }, 0)
  }

  function Pn(V, D) {
    var y = V, I = _(y, 0), te = _(y, 1);
    I && te && i.isAfter(I, te) && (N === "week" && !ma(i, m.locale, I, te) || N === "quarter" && !Ca(i, I, te) || N !== "week" && N !== "quarter" && N !== "time" && !Ze(i, I, te) ? (D === 0 ? (y = [I, null], te = null) : (I = null, y = [null, te]), ce.current = R({}, D, !0)) : (N !== "time" || cn !== !1) && (y = ra(y, i))), ze(y);
    var vn = y && y[0] ? de(y[0], { generateConfig: i, locale: m, format: Q[0] }) : "",
      Ge = y && y[1] ? de(y[1], { generateConfig: i, locale: m, format: Q[0] }) : "";
    if (Ce) {
      var Ae = { range: D === 0 ? "start" : "end" };
      Ce(y, [vn, Ge], Ae)
    }
    var Ue = oa(I, 0, $, Se), Xe = oa(te, 1, $, Se), Yn = y === null || Ue && Xe;
    Yn && (mn(y), je && (!In(i, _(ne, 0), I) || !In(i, _(ne, 1), te)) && je(y, [vn, Ge]));
    var Pe = null;
    D === 0 && !$[1] ? Pe = 1 : D === 1 && !$[0] && (Pe = 0), Pe !== null && Pe !== b && (!ce.current[Pe] || !_(y, Pe)) && _(y, D) ? at(Pe) : Dn(!1, D)
  }

  var Va = function (D) {
      return A && he.current && he.current.onKeyDown ? he.current.onKeyDown(D) : (Mt(!1, "Picker not correct forward KeyDown operation. Please help to fire issue about this."), !1)
    }, kt = { formatList: Q, generateConfig: i, locale: m }, Ta = Xn(_(q, 0), kt), Rt = T(Ta, 2), Fn = Rt[0], Ea = Rt[1],
    Ia = Xn(_(q, 1), kt), Pt = T(Ia, 2), $n = Pt[0], La = Pt[1], Yt = function (D, y) {
      var I = xa(D, { locale: m, formatList: Q, generateConfig: i }), te = y === 0 ? kn : On;
      I && !te(I) && (ze(_e(q, I, y)), H(I, y))
    }, Ha = wt({
      valueTexts: Fn, onTextChange: function (D) {
        return Yt(D, 0)
      }
    }), rt = T(Ha, 3), Bn = rt[0], Vt = rt[1], Tt = rt[2], _a = wt({
      valueTexts: $n, onTextChange: function (D) {
        return Yt(D, 1)
      }
    }), ot = T(_a, 3), Kn = ot[0], Et = ot[1], It = ot[2], Oa = x.exports.useState(null), Lt = T(Oa, 2), Aa = Lt[0],
    Ht = Lt[1], Fa = x.exports.useState(null), _t = T(Fa, 2), wn = _t[0], Ot = _t[1],
    $a = St(Bn, { formatList: Q, generateConfig: i, locale: m }), lt = T($a, 3), At = lt[0], Ba = lt[1], ut = lt[2],
    Ka = St(Kn, { formatList: Q, generateConfig: i, locale: m }), it = T(Ka, 3), Ft = it[0], Ua = it[1], ct = it[2],
    Wa = function (D) {
      Ot(_e(q, D, b)), b === 0 ? Ba(D) : Ua(D)
    }, qa = function () {
      Ot(_e(q, null, b)), b === 0 ? ut() : ct()
    }, $t = function (D, y) {
      return {
        blurToCancel: Ee, forwardKeyDown: Va, onBlur: X, isClickOutside: function (te) {
          return !ha([se.current, Ie.current, be.current, xe.current], te)
        }, onFocus: function (te) {
          fe(D), L && L(te)
        }, triggerOpen: function (te) {
          Dn(te, D)
        }, onSubmit: function () {
          if (!q || De && De(q[D])) return !1;
          Pn(q, D), y()
        }, onCancel: function () {
          Dn(!1, D), ze(ne), y()
        }
      }
    }, ja = Dt(Z(Z({}, $t(0, Tt)), {}, {
      open: He, value: Bn, onKeyDown: function (D, y) {
        ee == null || ee(D, y)
      }
    })), Bt = T(ja, 2), Qa = Bt[0], Kt = Bt[1], Ut = Kt.focused, Wt = Kt.typing, za = Dt(Z(Z({}, $t(1, It)), {}, {
      open: Rn, value: Kn, onKeyDown: function (D, y) {
        ee == null || ee(D, y)
      }
    })), qt = T(za, 2), Ga = qt[0], jt = qt[1], Qt = jt.focused, zt = jt.typing, Xa = function (D) {
      ke && ke(D), !A && !Le.current.contains(D.target) && !Oe.current.contains(D.target) && ($[0] ? $[1] || at(1) : at(0))
    }, Ja = function (D) {
      K && K(D), A && (Ut || Qt) && !Le.current.contains(D.target) && !Oe.current.contains(D.target) && D.preventDefault()
    }, Za = ne && ne[0] ? de(ne[0], { locale: m, format: "YYYYMMDDHHmmss", generateConfig: i }) : "",
    er = ne && ne[1] ? de(ne[1], { locale: m, format: "YYYYMMDDHHmmss", generateConfig: i }) : "";
  x.exports.useEffect(function () {
    A || (ze(ne), !Fn.length || Fn[0] === "" ? Vt("") : Ea !== Bn && Tt(), !$n.length || $n[0] === "" ? Et("") : La !== Kn && It())
  }, [A, Fn, $n]), x.exports.useEffect(function () {
    ze(ne)
  }, [Za, er]), $e && ($e.current = {
    focus: function () {
      Le.current && Le.current.focus()
    }, blur: function () {
      Le.current && Le.current.blur(), Oe.current && Oe.current.blur()
    }
  });
  var nr = Object.keys(we || {}), tr = nr.map(function (V) {
    var D = we[V], y = typeof D == "function" ? D() : D;
    return {
      label: V, onClick: function () {
        Pn(y, null), Dn(!1, b)
      }, onMouseEnter: function () {
        Ht(y)
      }, onMouseLeave: function () {
        Ht(null)
      }
    }
  });

  function st() {
    var V = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !1,
      D = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, y = null;
    A && wn && wn[0] && wn[1] && i.isAfter(wn[1], wn[0]) && (y = wn);
    var I = k;
    if (k && En(k) === "object" && k.defaultValue) {
      var te = k.defaultValue;
      I = Z(Z({}, k), {}, { defaultValue: _(te, b) || void 0 })
    }
    var vn = null;
    return ve && (vn = function (Ae, Ue) {
      return ve(Ae, Ue, { range: b ? "end" : "start" })
    }), h(Nn.Provider, {
      value: { inRange: !0, panelPosition: V, rangedValue: Aa || q, hoverRangedValue: y },
      children: h(pa, {
        ...e, ...D,
        dateRender: vn,
        showTime: I,
        mode: dn[b],
        generateConfig: i,
        style: void 0,
        direction: ue,
        disabledDate: b === 0 ? kn : On,
        disabledTime: function (Ae) {
          return j ? j(Ae, b === 0 ? "start" : "end") : !1
        },
        className: oe(R({}, "".concat(r, "-panel-focused"), b === 0 ? !Wt : !zt)),
        value: _(q, b),
        locale: m,
        tabIndex: -1,
        onPanelChange: function (Ae, Ue) {
          b === 0 && ut(!0), b === 1 && ct(!0), nt(_e(dn, Ue, b), _e(q, Ae, b));
          var Xe = Ae;
          V === "right" && dn[b] === Ue && (Xe = Tn(Xe, Ue, i, -1)), H(Xe, b)
        },
        onOk: null,
        onSelect: void 0,
        onChange: void 0,
        defaultValue: b === 0 ? _(q, 1) : _(q, 0)
      })
    })
  }

  var rn = 0, Gt = 0;
  if (b && Ie.current && Qe.current && se.current) {
    rn = Ie.current.offsetWidth + Qe.current.offsetWidth;
    var ar = Re.current.offsetLeft > rn ? Re.current.offsetLeft - rn : Re.current.offsetLeft;
    se.current.offsetWidth && Re.current.offsetWidth && rn > se.current.offsetWidth - Re.current.offsetWidth - (ue === "rtl" ? 0 : ar) && (Gt = rn)
  }
  var rr = ue === "rtl" ? { right: rn } : { left: rn };

  function or() {
    var V, D = ba(r, dn[b], un), y = ya({
      prefixCls: r,
      components: bn,
      needConfirmButton: Ee,
      okDisabled: !_(q, b) || De && De(q[b]),
      locale: m,
      rangeList: tr,
      onOk: function () {
        _(q, b) && (Pn(q, b), Te && Te(q))
      }
    });
    if (N !== "time" && !k) {
      var I = M(b), te = Tn(I, N, i), vn = dn[b], Ge = vn === N, Ae = st(Ge ? "left" : !1, {
        pickerValue: I, onPickerValueChange: function (Pe) {
          H(Pe, b)
        }
      }), Ue = st("right", {
        pickerValue: te, onPickerValueChange: function (Pe) {
          H(Tn(Pe, N, i, -1), b)
        }
      });
      ue === "rtl" ? V = ae(zn, { children: [Ue, Ge && Ae] }) : V = ae(zn, { children: [Ae, Ge && Ue] })
    } else V = st();
    var Xe = ae(zn, {
      children: [h("div", {
        className: "".concat(r, "-panels"),
        children: V
      }), (D || y) && ae("div", { className: "".concat(r, "-footer"), children: [D, y] })]
    });
    return ge && (Xe = ge(Xe)), h("div", {
      className: "".concat(r, "-panel-container"),
      style: { marginLeft: Gt },
      ref: se,
      onMouseDown: function (Pe) {
        Pe.preventDefault()
      },
      children: Xe
    })
  }

  var lr = ae("div", {
    className: oe("".concat(r, "-range-wrapper"), "".concat(r, "-").concat(N, "-range-wrapper")),
    style: { minWidth: Pa },
    children: [h("div", { ref: Re, className: "".concat(r, "-range-arrow"), style: rr }), or()]
  }), Xt;
  Ve && (Xt = h("span", { className: "".concat(r, "-suffix"), children: Ve }));
  var Jt;
  qe && (_(ne, 0) && !$[0] || _(ne, 1) && !$[1]) && (Jt = h("span", {
    onMouseDown: function (D) {
      D.preventDefault(), D.stopPropagation()
    }, onMouseUp: function (D) {
      D.preventDefault(), D.stopPropagation();
      var y = ne;
      $[0] || (y = _e(y, null, 0)), $[1] || (y = _e(y, null, 1)), Pn(y, null), Dn(!1, b)
    }, className: "".concat(r, "-clear"), children: ln || h("span", { className: "".concat(r, "-clear-btn") })
  }));
  var Zt = { size: ga(N, Q[0], i) }, ft = 0, dt = 0;
  Ie.current && be.current && Qe.current && (b === 0 ? dt = Ie.current.offsetWidth : (ft = rn, dt = be.current.offsetWidth));
  var ur = ue === "rtl" ? { right: ft } : { left: ft }, ir = function (D, y) {
    var I = _e(q, D, b);
    y === "submit" || y !== "key" && !Ee ? (Pn(I, b), b === 0 ? ut() : ct()) : ze(I)
  };
  return h(Ye.Provider, {
    value: {
      operationRef: he,
      hideHeader: N === "time",
      onDateMouseEnter: Wa,
      onDateMouseLeave: qa,
      hideRanges: !0,
      onSelect: ir,
      open: A
    }, children: h(ka, {
      visible: A,
      popupElement: lr,
      popupStyle: d,
      prefixCls: r,
      dropdownClassName: C,
      dropdownAlign: u,
      getPopupContainer: s,
      transitionName: g,
      range: !0,
      direction: ue,
      children: ae("div", {
        ref: xe,
        className: oe(r, "".concat(r, "-range"), f, (n = {}, R(n, "".concat(r, "-disabled"), $[0] && $[1]), R(n, "".concat(r, "-focused"), b === 0 ? Ut : Qt), R(n, "".concat(r, "-rtl"), ue === "rtl"), n)),
        style: c,
        onClick: Xa,
        onMouseEnter: U,
        onMouseLeave: re,
        onMouseDown: Ja,
        onMouseUp: J, ...Sa(e),
        children: [h("div", {
          className: oe("".concat(r, "-input"), (t = {}, R(t, "".concat(r, "-input-active"), b === 0), R(t, "".concat(r, "-input-placeholder"), !!At), t)),
          ref: Ie,
          children: h("input", {
            id: l,
            disabled: $[0],
            readOnly: Me || typeof Q[0] == "function" || !Wt,
            value: At || Bn,
            onChange: function (D) {
              Vt(D.target.value)
            },
            autoFocus: w,
            placeholder: _(v, 0) || "",
            ref: Le, ...Qa, ...Zt,
            autoComplete: me
          })
        }), h("div", {
          className: "".concat(r, "-range-separator"),
          ref: Qe,
          children: E
        }), h("div", {
          className: oe("".concat(r, "-input"), (a = {}, R(a, "".concat(r, "-input-active"), b === 1), R(a, "".concat(r, "-input-placeholder"), !!Ft), a)),
          ref: be,
          children: h("input", {
            disabled: $[1],
            readOnly: Me || typeof Q[0] == "function" || !zt,
            value: Ft || Kn,
            onChange: function (D) {
              Et(D.target.value)
            },
            placeholder: _(v, 1) || "",
            ref: Oe, ...Ga, ...Zt,
            autoComplete: me
          })
        }), h("div", {
          className: "".concat(r, "-active-bar"),
          style: Z(Z({}, ur), {}, { width: dt, position: "absolute" })
        }), Xt, Jt]
      })
    })
  })
}

var mo = function (e) {
  ua(t, e);
  var n = ia(t);

  function t() {
    var a;
    ca(this, t);
    for (var o = arguments.length, r = new Array(o), l = 0; l < o; l++) r[l] = arguments[l];
    return a = n.call.apply(n, [this].concat(r)), a.pickerRef = x.exports.createRef(), a.focus = function () {
      a.pickerRef.current && a.pickerRef.current.focus()
    }, a.blur = function () {
      a.pickerRef.current && a.pickerRef.current.blur()
    }, a
  }

  return sa(t, [{
    key: "render", value: function () {
      return h(ro, { ...this.props, pickerRef: this.pickerRef })
    }
  }]), t
}(x.exports.Component), xo = {
  locale: "zh_CN",
  today: "\u4ECA\u5929",
  now: "\u6B64\u523B",
  backToToday: "\u8FD4\u56DE\u4ECA\u5929",
  ok: "\u786E\u5B9A",
  timeSelect: "\u9009\u62E9\u65F6\u95F4",
  dateSelect: "\u9009\u62E9\u65E5\u671F",
  weekSelect: "\u9009\u62E9\u5468",
  clear: "\u6E05\u9664",
  month: "\u6708",
  year: "\u5E74",
  previousMonth: "\u4E0A\u4E2A\u6708 (\u7FFB\u9875\u4E0A\u952E)",
  nextMonth: "\u4E0B\u4E2A\u6708 (\u7FFB\u9875\u4E0B\u952E)",
  monthSelect: "\u9009\u62E9\u6708\u4EFD",
  yearSelect: "\u9009\u62E9\u5E74\u4EFD",
  decadeSelect: "\u9009\u62E9\u5E74\u4EE3",
  yearFormat: "YYYY\u5E74",
  dayFormat: "D\u65E5",
  dateFormat: "YYYY\u5E74M\u6708D\u65E5",
  dateTimeFormat: "YYYY\u5E74M\u6708D\u65E5 HH\u65F6mm\u5206ss\u79D2",
  previousYear: "\u4E0A\u4E00\u5E74 (Control\u952E\u52A0\u5DE6\u65B9\u5411\u952E)",
  nextYear: "\u4E0B\u4E00\u5E74 (Control\u952E\u52A0\u53F3\u65B9\u5411\u952E)",
  previousDecade: "\u4E0A\u4E00\u5E74\u4EE3",
  nextDecade: "\u4E0B\u4E00\u5E74\u4EE3",
  previousCentury: "\u4E0A\u4E00\u4E16\u7EAA",
  nextCentury: "\u4E0B\u4E00\u4E16\u7EAA"
};
export { Co as P, mo as R, xo as a, ho as g, go as l };

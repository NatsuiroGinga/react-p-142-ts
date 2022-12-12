import {
  a as M,
  c as S,
  o as xe,
  m as ae,
  b as Pe,
  d as a,
  g as ye,
  h as be,
  i as ke,
  k as u,
  j as Se
} from "./@babel.3781e41b.js";
import { r as c } from "./react.aaec2051.js";
import { R as we } from "./react-dom.18596681.js";
import {
  h as De,
  b as O,
  g as ue,
  A as Ne,
  i as Q,
  q as Ae,
  j as $,
  s as Oe,
  f as Re,
  P as Ee
} from "./rc-util.5fc3e0fc.js";
import { c as z } from "./classnames.4fb4381a.js";
import { C as K } from "./rc-motion.a15f39b3.js";
import { j as x, b as ce } from "./@ant-design.023abccc.js";
import { R as He } from "./rc-align.6e44f820.js";

function Ve(n, f, p) {
  return p ? n[0] === f[0] : n[0] === f[0] && n[1] === f[1]
}

function _e(n, f, p) {
  var d = n[f] || {};
  return M(M({}, d), p)
}

function Le(n, f, p, d) {
  for (var m = p.points, s = Object.keys(n), e = 0; e < s.length; e += 1) {
    var i = s[e];
    if (Ve(n[i].points, m, d)) return "".concat(f, "-placement-").concat(i)
  }
  return ""
}

function fe(n) {
  var f = n.prefixCls, p = n.motion, d = n.animation, m = n.transitionName;
  return p || (d ? { motionName: "".concat(f, "-").concat(d) } : m ? { motionName: m } : null)
}

function Ie(n) {
  var f = n.prefixCls, p = n.visible, d = n.zIndex, m = n.mask, s = n.maskMotion, e = n.maskAnimation,
    i = n.maskTransitionName;
  if (!m) return null;
  var o = {};
  return (s || i || e) && (o = M({ motionAppear: !0 }, fe({
    motion: s,
    prefixCls: f,
    transitionName: i,
    animation: e
  }))), x(K, {
    ...o, visible: p, removeOnLeave: !0, children: function (t) {
      var r = t.className;
      return x("div", { style: { zIndex: d }, className: z("".concat(f, "-mask"), r) })
    }
  })
}

var le = ["measure", "alignPre", "align", null, "motion"];
const Fe = function (n, f) {
  var p = De(null), d = S(p, 2), m = d[0], s = d[1], e = c.exports.useRef();

  function i(r) {
    s(r, !0)
  }

  function o() {
    O.cancel(e.current)
  }

  function t(r) {
    o(), e.current = O(function () {
      i(function (h) {
        switch (m) {
          case"align":
            return "motion";
          case"motion":
            return "stable"
        }
        return h
      }), r == null || r()
    })
  }

  return c.exports.useEffect(function () {
    i("measure")
  }, [n]), c.exports.useEffect(function () {
    switch (m) {
      case"measure":
        f();
        break
    }
    m && (e.current = O(xe(ae().mark(function r() {
      var h, g;
      return ae().wrap(function (l) {
        for (; ;) switch (l.prev = l.next) {
          case 0:
            h = le.indexOf(m), g = le[h + 1], g && h !== -1 && i(g);
          case 3:
          case"end":
            return l.stop()
        }
      }, r)
    }))))
  }, [m]), c.exports.useEffect(function () {
    return function () {
      o()
    }
  }, []), [m, t]
}, $e = function (n) {
  var f = c.exports.useState({ width: 0, height: 0 }), p = S(f, 2), d = p[0], m = p[1];

  function s(i) {
    m({ width: i.offsetWidth, height: i.offsetHeight })
  }

  var e = c.exports.useMemo(function () {
    var i = {};
    if (n) {
      var o = d.width, t = d.height;
      n.indexOf("height") !== -1 && t ? i.height = t : n.indexOf("minHeight") !== -1 && t && (i.minHeight = t), n.indexOf("width") !== -1 && o ? i.width = o : n.indexOf("minWidth") !== -1 && o && (i.minWidth = o)
    }
    return i
  }, [n, d]);
  return [e, s]
};
var de = c.exports.forwardRef(function (n, f) {
  var p = n.visible, d = n.prefixCls, m = n.className, s = n.style, e = n.children, i = n.zIndex, o = n.stretch,
    t = n.destroyPopupOnHide, r = n.forceRender, h = n.align, g = n.point, v = n.getRootDomNode,
    l = n.getClassNameFromAlign, T = n.onAlign, P = n.onMouseEnter, w = n.onMouseLeave, b = n.onMouseDown,
    R = n.onTouchStart, E = n.onClick, L = c.exports.useRef(), N = c.exports.useRef(), B = c.exports.useState(),
    I = S(B, 2), F = I[0], j = I[1], U = $e(o), H = S(U, 2), W = H[0], X = H[1];

  function Y() {
    o && X(v())
  }

  var D = Fe(p, Y), Z = S(D, 2), y = Z[0], q = Z[1], ve = c.exports.useState(0), ee = S(ve, 2), oe = ee[0], te = ee[1],
    G = c.exports.useRef();
  ue(function () {
    y === "alignPre" && te(0)
  }, [y]);

  function ge() {
    return g || v
  }

  function ie() {
    var C;
    (C = L.current) === null || C === void 0 || C.forceAlign()
  }

  function Ce(C, k) {
    var A = l(k);
    F !== A && j(A), te(function (_) {
      return _ + 1
    }), y === "align" && (T == null || T(C, k))
  }

  ue(function () {
    y === "align" && (oe < 3 ? ie() : q(function () {
      var C;
      (C = G.current) === null || C === void 0 || C.call(G)
    }))
  }, [oe]);
  var V = M({}, fe(n));
  ["onAppearEnd", "onEnterEnd", "onLeaveEnd"].forEach(function (C) {
    var k = V[C];
    V[C] = function (A, _) {
      return q(), k == null ? void 0 : k(A, _)
    }
  });

  function ne() {
    return new Promise(function (C) {
      G.current = C
    })
  }

  c.exports.useEffect(function () {
    !V.motionName && y === "motion" && q()
  }, [V.motionName, y]), c.exports.useImperativeHandle(f, function () {
    return {
      forceAlign: ie, getElement: function () {
        return N.current
      }
    }
  });
  var Te = M(M({}, W), {}, {
    zIndex: i,
    opacity: y === "motion" || y === "stable" || !p ? void 0 : 0,
    pointerEvents: !p && y !== "stable" ? "none" : void 0
  }, s), se = !0;
  h != null && h.points && (y === "align" || y === "stable") && (se = !1);
  var re = e;
  return c.exports.Children.count(e) > 1 && (re = x("div", {
    className: "".concat(d, "-content"),
    children: e
  })), x(K, {
    visible: p,
    ref: N,
    leavedClassName: "".concat(d, "-hidden"), ...V,
    onAppearPrepare: ne,
    onEnterPrepare: ne,
    removeOnLeave: t,
    forceRender: r,
    children: function (C, k) {
      var A = C.className, _ = C.style, Me = z(d, m, F, A);
      return x(He, {
        target: ge(),
        ref: L,
        monitorWindowResize: !0,
        disabled: se,
        align: h,
        onAlign: Ce,
        children: x("div", {
          ref: k,
          className: Me,
          onMouseEnter: P,
          onMouseLeave: w,
          onMouseDownCapture: b,
          onTouchStartCapture: R,
          onClick: E,
          style: M(M({}, _), Te),
          children: re
        })
      }, "popup")
    }
  })
});
de.displayName = "PopupInner";
var me = c.exports.forwardRef(function (n, f) {
  var p = n.prefixCls, d = n.visible, m = n.zIndex, s = n.children, e = n.mobile;
  e = e === void 0 ? {} : e;
  var i = e.popupClassName, o = e.popupStyle, t = e.popupMotion, r = t === void 0 ? {} : t, h = e.popupRender,
    g = n.onClick, v = c.exports.useRef();
  c.exports.useImperativeHandle(f, function () {
    return {
      forceAlign: function () {
      }, getElement: function () {
        return v.current
      }
    }
  });
  var l = M({ zIndex: m }, o), T = s;
  return c.exports.Children.count(s) > 1 && (T = x("div", {
    className: "".concat(p, "-content"),
    children: s
  })), h && (T = h(T)), x(K, {
    visible: d, ref: v, removeOnLeave: !0, ...r, children: function (P, w) {
      var b = P.className, R = P.style, E = z(p, i, b);
      return x("div", { ref: w, className: E, onClick: g, style: M(M({}, R), l), children: T })
    }
  })
});
me.displayName = "MobilePopupInner";
var ze = ["visible", "mobile"], he = c.exports.forwardRef(function (n, f) {
  var p = n.visible, d = n.mobile, m = Pe(n, ze), s = c.exports.useState(p), e = S(s, 2), i = e[0], o = e[1],
    t = c.exports.useState(!1), r = S(t, 2), h = r[0], g = r[1], v = M(M({}, m), {}, { visible: i });
  c.exports.useEffect(function () {
    o(p), p && d && g(Ne())
  }, [p, d]);
  var l = h ? x(me, { ...v, mobile: d, ref: f }) : x(de, { ...v, ref: f });
  return ce("div", { children: [x(Ie, { ...v }), l] })
});
he.displayName = "Popup";
var pe = c.exports.createContext(null);

function J() {
}

function Be() {
  return ""
}

function je(n) {
  return n ? n.ownerDocument : window.document
}

var Ue = ["onClick", "onMouseDown", "onTouchStart", "onMouseEnter", "onMouseLeave", "onFocus", "onBlur", "onContextMenu"];

function We(n) {
  var f = function (p) {
    ye(m, p);
    var d = be(m);

    function m(s) {
      var e;
      ke(this, m), e = d.call(this, s), a(u(e), "popupRef", c.exports.createRef()), a(u(e), "triggerRef", c.exports.createRef()), a(u(e), "portalContainer", void 0), a(u(e), "attachId", void 0), a(u(e), "clickOutsideHandler", void 0), a(u(e), "touchOutsideHandler", void 0), a(u(e), "contextMenuOutsideHandler1", void 0), a(u(e), "contextMenuOutsideHandler2", void 0), a(u(e), "mouseDownTimeout", void 0), a(u(e), "focusTime", void 0), a(u(e), "preClickTime", void 0), a(u(e), "preTouchTime", void 0), a(u(e), "delayTimer", void 0), a(u(e), "hasPopupMouseDown", void 0), a(u(e), "onMouseEnter", function (o) {
        var t = e.props.mouseEnterDelay;
        e.fireEvents("onMouseEnter", o), e.delaySetPopupVisible(!0, t, t ? null : o)
      }), a(u(e), "onMouseMove", function (o) {
        e.fireEvents("onMouseMove", o), e.setPoint(o)
      }), a(u(e), "onMouseLeave", function (o) {
        e.fireEvents("onMouseLeave", o), e.delaySetPopupVisible(!1, e.props.mouseLeaveDelay)
      }), a(u(e), "onPopupMouseEnter", function () {
        e.clearDelayTimer()
      }), a(u(e), "onPopupMouseLeave", function (o) {
        var t;
        o.relatedTarget && !o.relatedTarget.setTimeout && Q((t = e.popupRef.current) === null || t === void 0 ? void 0 : t.getElement(), o.relatedTarget) || e.delaySetPopupVisible(!1, e.props.mouseLeaveDelay)
      }), a(u(e), "onFocus", function (o) {
        e.fireEvents("onFocus", o), e.clearDelayTimer(), e.isFocusToShow() && (e.focusTime = Date.now(), e.delaySetPopupVisible(!0, e.props.focusDelay))
      }), a(u(e), "onMouseDown", function (o) {
        e.fireEvents("onMouseDown", o), e.preClickTime = Date.now()
      }), a(u(e), "onTouchStart", function (o) {
        e.fireEvents("onTouchStart", o), e.preTouchTime = Date.now()
      }), a(u(e), "onBlur", function (o) {
        e.fireEvents("onBlur", o), e.clearDelayTimer(), e.isBlurToHide() && e.delaySetPopupVisible(!1, e.props.blurDelay)
      }), a(u(e), "onContextMenu", function (o) {
        o.preventDefault(), e.fireEvents("onContextMenu", o), e.setPopupVisible(!0, o)
      }), a(u(e), "onContextMenuClose", function () {
        e.isContextMenuToShow() && e.close()
      }), a(u(e), "onClick", function (o) {
        if (e.fireEvents("onClick", o), e.focusTime) {
          var t;
          if (e.preClickTime && e.preTouchTime ? t = Math.min(e.preClickTime, e.preTouchTime) : e.preClickTime ? t = e.preClickTime : e.preTouchTime && (t = e.preTouchTime), Math.abs(t - e.focusTime) < 20) return;
          e.focusTime = 0
        }
        e.preClickTime = 0, e.preTouchTime = 0, e.isClickToShow() && (e.isClickToHide() || e.isBlurToHide()) && o && o.preventDefault && o.preventDefault();
        var r = !e.state.popupVisible;
        (e.isClickToHide() && !r || r && e.isClickToShow()) && e.setPopupVisible(!e.state.popupVisible, o)
      }), a(u(e), "onPopupMouseDown", function () {
        if (e.hasPopupMouseDown = !0, clearTimeout(e.mouseDownTimeout), e.mouseDownTimeout = window.setTimeout(function () {
          e.hasPopupMouseDown = !1
        }, 0), e.context) {
          var o;
          (o = e.context).onPopupMouseDown.apply(o, arguments)
        }
      }), a(u(e), "onDocumentClick", function (o) {
        if (!(e.props.mask && !e.props.maskClosable)) {
          var t = o.target, r = e.getRootDomNode(), h = e.getPopupDomNode();
          (!Q(r, t) || e.isContextMenuOnly()) && !Q(h, t) && !e.hasPopupMouseDown && e.close()
        }
      }), a(u(e), "getRootDomNode", function () {
        var o = e.props.getTriggerDOMNode;
        if (o) return o(e.triggerRef.current);
        try {
          var t = Ae(e.triggerRef.current);
          if (t) return t
        } catch {
        }
        return we.findDOMNode(u(e))
      }), a(u(e), "getPopupClassNameFromAlign", function (o) {
        var t = [], r = e.props, h = r.popupPlacement, g = r.builtinPlacements, v = r.prefixCls, l = r.alignPoint,
          T = r.getPopupClassNameFromAlign;
        return h && g && t.push(Le(g, v, o, l)), T && t.push(T(o)), t.join(" ")
      }), a(u(e), "getComponent", function () {
        var o = e.props, t = o.prefixCls, r = o.destroyPopupOnHide, h = o.popupClassName, g = o.onPopupAlign,
          v = o.popupMotion, l = o.popupAnimation, T = o.popupTransitionName, P = o.popupStyle, w = o.mask,
          b = o.maskAnimation, R = o.maskTransitionName, E = o.maskMotion, L = o.zIndex, N = o.popup, B = o.stretch,
          I = o.alignPoint, F = o.mobile, j = o.forceRender, U = o.onPopupClick, H = e.state, W = H.popupVisible,
          X = H.point, Y = e.getPopupAlign(), D = {};
        return e.isMouseEnterToShow() && (D.onMouseEnter = e.onPopupMouseEnter), e.isMouseLeaveToHide() && (D.onMouseLeave = e.onPopupMouseLeave), D.onMouseDown = e.onPopupMouseDown, D.onTouchStart = e.onPopupMouseDown, x(he, {
          prefixCls: t,
          destroyPopupOnHide: r,
          visible: W,
          point: I && X,
          className: h,
          align: Y,
          onAlign: g,
          animation: l,
          getClassNameFromAlign: e.getPopupClassNameFromAlign, ...D,
          stretch: B,
          getRootDomNode: e.getRootDomNode,
          style: P,
          mask: w,
          zIndex: L,
          transitionName: T,
          maskAnimation: b,
          maskTransitionName: R,
          maskMotion: E,
          ref: e.popupRef,
          motion: v,
          mobile: F,
          forceRender: j,
          onClick: U,
          children: typeof N == "function" ? N() : N
        })
      }), a(u(e), "attachParent", function (o) {
        O.cancel(e.attachId);
        var t = e.props, r = t.getPopupContainer, h = t.getDocument, g = e.getRootDomNode(), v;
        r ? (g || r.length === 0) && (v = r(g)) : v = h(e.getRootDomNode()).body, v ? v.appendChild(o) : e.attachId = O(function () {
          e.attachParent(o)
        })
      }), a(u(e), "getContainer", function () {
        if (!e.portalContainer) {
          var o = e.props.getDocument, t = o(e.getRootDomNode()).createElement("div");
          t.style.position = "absolute", t.style.top = "0", t.style.left = "0", t.style.width = "100%", e.portalContainer = t
        }
        return e.attachParent(e.portalContainer), e.portalContainer
      }), a(u(e), "setPoint", function (o) {
        var t = e.props.alignPoint;
        !t || !o || e.setState({ point: { pageX: o.pageX, pageY: o.pageY } })
      }), a(u(e), "handlePortalUpdate", function () {
        e.state.prevPopupVisible !== e.state.popupVisible && e.props.afterPopupVisibleChange(e.state.popupVisible)
      }), a(u(e), "triggerContextValue", { onPopupMouseDown: e.onPopupMouseDown });
      var i;
      return "popupVisible" in s ? i = !!s.popupVisible : i = !!s.defaultPopupVisible, e.state = {
        prevPopupVisible: i,
        popupVisible: i
      }, Ue.forEach(function (o) {
        e["fire".concat(o)] = function (t) {
          e.fireEvents(o, t)
        }
      }), e
    }

    return Se(m, [{
      key: "componentDidMount", value: function () {
        this.componentDidUpdate()
      }
    }, {
      key: "componentDidUpdate", value: function () {
        var e = this.props, i = this.state;
        if (i.popupVisible) {
          var o;
          !this.clickOutsideHandler && (this.isClickToHide() || this.isContextMenuToShow()) && (o = e.getDocument(this.getRootDomNode()), this.clickOutsideHandler = $(o, "mousedown", this.onDocumentClick)), this.touchOutsideHandler || (o = o || e.getDocument(this.getRootDomNode()), this.touchOutsideHandler = $(o, "touchstart", this.onDocumentClick)), !this.contextMenuOutsideHandler1 && this.isContextMenuToShow() && (o = o || e.getDocument(this.getRootDomNode()), this.contextMenuOutsideHandler1 = $(o, "scroll", this.onContextMenuClose)), !this.contextMenuOutsideHandler2 && this.isContextMenuToShow() && (this.contextMenuOutsideHandler2 = $(window, "blur", this.onContextMenuClose));
          return
        }
        this.clearOutsideHandler()
      }
    }, {
      key: "componentWillUnmount", value: function () {
        this.clearDelayTimer(), this.clearOutsideHandler(), clearTimeout(this.mouseDownTimeout), O.cancel(this.attachId)
      }
    }, {
      key: "getPopupDomNode", value: function () {
        var e;
        return ((e = this.popupRef.current) === null || e === void 0 ? void 0 : e.getElement()) || null
      }
    }, {
      key: "getPopupAlign", value: function () {
        var e = this.props, i = e.popupPlacement, o = e.popupAlign, t = e.builtinPlacements;
        return i && t ? _e(t, i, o) : o
      }
    }, {
      key: "setPopupVisible", value: function (e, i) {
        var o = this.props.alignPoint, t = this.state.popupVisible;
        this.clearDelayTimer(), t !== e && ("popupVisible" in this.props || this.setState({
          popupVisible: e,
          prevPopupVisible: t
        }), this.props.onPopupVisibleChange(e)), o && i && e && this.setPoint(i)
      }
    }, {
      key: "delaySetPopupVisible", value: function (e, i, o) {
        var t = this, r = i * 1e3;
        if (this.clearDelayTimer(), r) {
          var h = o ? { pageX: o.pageX, pageY: o.pageY } : null;
          this.delayTimer = window.setTimeout(function () {
            t.setPopupVisible(e, h), t.clearDelayTimer()
          }, r)
        } else this.setPopupVisible(e, o)
      }
    }, {
      key: "clearDelayTimer", value: function () {
        this.delayTimer && (clearTimeout(this.delayTimer), this.delayTimer = null)
      }
    }, {
      key: "clearOutsideHandler", value: function () {
        this.clickOutsideHandler && (this.clickOutsideHandler.remove(), this.clickOutsideHandler = null), this.contextMenuOutsideHandler1 && (this.contextMenuOutsideHandler1.remove(), this.contextMenuOutsideHandler1 = null), this.contextMenuOutsideHandler2 && (this.contextMenuOutsideHandler2.remove(), this.contextMenuOutsideHandler2 = null), this.touchOutsideHandler && (this.touchOutsideHandler.remove(), this.touchOutsideHandler = null)
      }
    }, {
      key: "createTwoChains", value: function (e) {
        var i = this.props.children.props, o = this.props;
        return i[e] && o[e] ? this["fire".concat(e)] : i[e] || o[e]
      }
    }, {
      key: "isClickToShow", value: function () {
        var e = this.props, i = e.action, o = e.showAction;
        return i.indexOf("click") !== -1 || o.indexOf("click") !== -1
      }
    }, {
      key: "isContextMenuOnly", value: function () {
        var e = this.props.action;
        return e === "contextMenu" || e.length === 1 && e[0] === "contextMenu"
      }
    }, {
      key: "isContextMenuToShow", value: function () {
        var e = this.props, i = e.action, o = e.showAction;
        return i.indexOf("contextMenu") !== -1 || o.indexOf("contextMenu") !== -1
      }
    }, {
      key: "isClickToHide", value: function () {
        var e = this.props, i = e.action, o = e.hideAction;
        return i.indexOf("click") !== -1 || o.indexOf("click") !== -1
      }
    }, {
      key: "isMouseEnterToShow", value: function () {
        var e = this.props, i = e.action, o = e.showAction;
        return i.indexOf("hover") !== -1 || o.indexOf("mouseEnter") !== -1
      }
    }, {
      key: "isMouseLeaveToHide", value: function () {
        var e = this.props, i = e.action, o = e.hideAction;
        return i.indexOf("hover") !== -1 || o.indexOf("mouseLeave") !== -1
      }
    }, {
      key: "isFocusToShow", value: function () {
        var e = this.props, i = e.action, o = e.showAction;
        return i.indexOf("focus") !== -1 || o.indexOf("focus") !== -1
      }
    }, {
      key: "isBlurToHide", value: function () {
        var e = this.props, i = e.action, o = e.hideAction;
        return i.indexOf("focus") !== -1 || o.indexOf("blur") !== -1
      }
    }, {
      key: "forcePopupAlign", value: function () {
        if (this.state.popupVisible) {
          var e;
          (e = this.popupRef.current) === null || e === void 0 || e.forceAlign()
        }
      }
    }, {
      key: "fireEvents", value: function (e, i) {
        var o = this.props.children.props[e];
        o && o(i);
        var t = this.props[e];
        t && t(i)
      }
    }, {
      key: "close", value: function () {
        this.setPopupVisible(!1)
      }
    }, {
      key: "render", value: function () {
        var e = this.state.popupVisible, i = this.props, o = i.children, t = i.forceRender, r = i.alignPoint,
          h = i.className, g = i.autoDestroy, v = c.exports.Children.only(o), l = { key: "trigger" };
        this.isContextMenuToShow() ? l.onContextMenu = this.onContextMenu : l.onContextMenu = this.createTwoChains("onContextMenu"), this.isClickToHide() || this.isClickToShow() ? (l.onClick = this.onClick, l.onMouseDown = this.onMouseDown, l.onTouchStart = this.onTouchStart) : (l.onClick = this.createTwoChains("onClick"), l.onMouseDown = this.createTwoChains("onMouseDown"), l.onTouchStart = this.createTwoChains("onTouchStart")), this.isMouseEnterToShow() ? (l.onMouseEnter = this.onMouseEnter, r && (l.onMouseMove = this.onMouseMove)) : l.onMouseEnter = this.createTwoChains("onMouseEnter"), this.isMouseLeaveToHide() ? l.onMouseLeave = this.onMouseLeave : l.onMouseLeave = this.createTwoChains("onMouseLeave"), this.isFocusToShow() || this.isBlurToHide() ? (l.onFocus = this.onFocus, l.onBlur = this.onBlur) : (l.onFocus = this.createTwoChains("onFocus"), l.onBlur = this.createTwoChains("onBlur"));
        var T = z(v && v.props && v.props.className, h);
        T && (l.className = T);
        var P = M({}, l);
        Oe(v) && (P.ref = Re(this.triggerRef, v.ref));
        var w = c.exports.cloneElement(v, P), b;
        return (e || this.popupRef.current || t) && (b = x(n, {
          getContainer: this.getContainer,
          didUpdate: this.handlePortalUpdate,
          children: this.getComponent()
        }, "portal")), !e && g && (b = null), ce(pe.Provider, { value: this.triggerContextValue, children: [w, b] })
      }
    }], [{
      key: "getDerivedStateFromProps", value: function (e, i) {
        var o = e.popupVisible, t = {};
        return o !== void 0 && i.popupVisible !== o && (t.popupVisible = o, t.prevPopupVisible = i.popupVisible), t
      }
    }]), m
  }(c.exports.Component);
  return a(f, "contextType", pe), a(f, "defaultProps", {
    prefixCls: "rc-trigger-popup",
    getPopupClassNameFromAlign: Be,
    getDocument: je,
    onPopupVisibleChange: J,
    afterPopupVisibleChange: J,
    onPopupAlign: J,
    popupClassName: "",
    mouseEnterDelay: 0,
    mouseLeaveDelay: .1,
    focusDelay: 0,
    blurDelay: .15,
    popupStyle: {},
    destroyPopupOnHide: !1,
    popupAlign: {},
    defaultPopupVisible: !1,
    mask: !1,
    maskClosable: !0,
    action: [],
    showAction: [],
    hideAction: [],
    autoDestroy: !1
  }), f
}

const eo = We(Ee);
export { eo as T };

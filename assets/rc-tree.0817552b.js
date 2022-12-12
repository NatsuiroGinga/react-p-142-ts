import {
  d as L,
  g as We,
  h as qe,
  i as ze,
  k as Y,
  a as $,
  j as Ye,
  b as Ke,
  _ as Te,
  f as ee,
  c as oe,
  e as Xe
} from "./@babel.3781e41b.js";
import { r as O } from "./react.aaec2051.js";
import { w as X, z as Ve, t as dt, o as it, K as ae } from "./rc-util.5fc3e0fc.js";
import { c as G } from "./classnames.4fb4381a.js";
import { j as S, b as Se, F as st } from "./@ant-design.023abccc.js";
import { L as lt } from "./rc-virtual-list.491606d2.js";
import { C as ct } from "./rc-motion.a15f39b3.js";

function Je(a, i) {
  var p = new Set;
  return a.forEach(function (e) {
    i.has(e) || p.add(e)
  }), p
}

function ut(a) {
  var i = a || {}, p = i.disabled, e = i.disableCheckbox, o = i.checkable;
  return !!(p || e) || o === !1
}

function ft(a, i, p, e) {
  for (var o = new Set(a), u = new Set, h = 0; h <= p; h += 1) {
    var t = i.get(h) || new Set;
    t.forEach(function (s) {
      var l = s.key, f = s.node, v = s.children, g = v === void 0 ? [] : v;
      o.has(l) && !e(f) && g.filter(function (y) {
        return !e(y.node)
      }).forEach(function (y) {
        o.add(y.key)
      })
    })
  }
  for (var n = new Set, r = p; r >= 0; r -= 1) {
    var d = i.get(r) || new Set;
    d.forEach(function (s) {
      var l = s.parent, f = s.node;
      if (!(e(f) || !s.parent || n.has(s.parent.key))) {
        if (e(s.parent.node)) {
          n.add(l.key);
          return
        }
        var v = !0, g = !1;
        (l.children || []).filter(function (y) {
          return !e(y.node)
        }).forEach(function (y) {
          var c = y.key, K = o.has(c);
          v && !K && (v = !1), !g && (K || u.has(c)) && (g = !0)
        }), v && o.add(l.key), g && u.add(l.key), n.add(l.key)
      }
    })
  }
  return { checkedKeys: Array.from(o), halfCheckedKeys: Array.from(Je(u, o)) }
}

function pt(a, i, p, e, o) {
  for (var u = new Set(a), h = new Set(i), t = 0; t <= e; t += 1) {
    var n = p.get(t) || new Set;
    n.forEach(function (l) {
      var f = l.key, v = l.node, g = l.children, y = g === void 0 ? [] : g;
      !u.has(f) && !h.has(f) && !o(v) && y.filter(function (c) {
        return !o(c.node)
      }).forEach(function (c) {
        u.delete(c.key)
      })
    })
  }
  h = new Set;
  for (var r = new Set, d = e; d >= 0; d -= 1) {
    var s = p.get(d) || new Set;
    s.forEach(function (l) {
      var f = l.parent, v = l.node;
      if (!(o(v) || !l.parent || r.has(l.parent.key))) {
        if (o(l.parent.node)) {
          r.add(f.key);
          return
        }
        var g = !0, y = !1;
        (f.children || []).filter(function (c) {
          return !o(c.node)
        }).forEach(function (c) {
          var K = c.key, k = u.has(K);
          g && !k && (g = !1), !y && (k || h.has(K)) && (y = !0)
        }), g || u.delete(f.key), y && h.add(f.key), r.add(f.key)
      }
    })
  }
  return { checkedKeys: Array.from(u), halfCheckedKeys: Array.from(Je(h, u)) }
}

function Ee(a, i, p, e) {
  var o = [], u;
  e ? u = e : u = ut;
  var h = new Set(a.filter(function (d) {
    var s = !!p[d];
    return s || o.push(d), s
  })), t = new Map, n = 0;
  Object.keys(p).forEach(function (d) {
    var s = p[d], l = s.level, f = t.get(l);
    f || (f = new Set, t.set(l, f)), f.add(s), n = Math.max(n, l)
  }), X(!o.length, "Tree missing follow keys: ".concat(o.slice(0, 100).map(function (d) {
    return "'".concat(d, "'")
  }).join(", ")));
  var r;
  return i === !0 ? r = ft(h, t, n, u) : r = pt(h, i.halfCheckedKeys, t, n, u), r
}

var Oe = O.exports.createContext(null), vt = function (i) {
  for (var p = i.prefixCls, e = i.level, o = i.isStart, u = i.isEnd, h = "".concat(p, "-indent-unit"), t = [], n = 0; n < e; n += 1) {
    var r;
    t.push(S("span", { className: G(h, (r = {}, L(r, "".concat(h, "-start"), o[n]), L(r, "".concat(h, "-end"), u[n]), r)) }, n))
  }
  return S("span", { "aria-hidden": "true", className: "".concat(p, "-indent"), children: t })
};
const ht = O.exports.memo(vt);
var gt = ["eventKey", "className", "style", "dragOver", "dragOverGapTop", "dragOverGapBottom", "isLeaf", "isStart", "isEnd", "expanded", "selected", "checked", "halfChecked", "loading", "domRef", "active", "data", "onMouseMove", "selectable"],
  Ie = "open", $e = "close", yt = "---", Kt = function (a) {
    We(p, a);
    var i = qe(p);

    function p() {
      var e;
      ze(this, p);
      for (var o = arguments.length, u = new Array(o), h = 0; h < o; h++) u[h] = arguments[h];
      return e = i.call.apply(i, [this].concat(u)), e.state = { dragNodeHighlight: !1 }, e.selectHandle = void 0, e.onSelectorClick = function (t) {
        var n = e.props.context.onNodeClick;
        n(t, R(e.props)), e.isSelectable() ? e.onSelect(t) : e.onCheck(t)
      }, e.onSelectorDoubleClick = function (t) {
        var n = e.props.context.onNodeDoubleClick;
        n(t, R(e.props))
      }, e.onSelect = function (t) {
        if (!e.isDisabled()) {
          var n = e.props.context.onNodeSelect;
          t.preventDefault(), n(t, R(e.props))
        }
      }, e.onCheck = function (t) {
        if (!e.isDisabled()) {
          var n = e.props, r = n.disableCheckbox, d = n.checked, s = e.props.context.onNodeCheck;
          if (!(!e.isCheckable() || r)) {
            t.preventDefault();
            var l = !d;
            s(t, R(e.props), l)
          }
        }
      }, e.onMouseEnter = function (t) {
        var n = e.props.context.onNodeMouseEnter;
        n(t, R(e.props))
      }, e.onMouseLeave = function (t) {
        var n = e.props.context.onNodeMouseLeave;
        n(t, R(e.props))
      }, e.onContextMenu = function (t) {
        var n = e.props.context.onNodeContextMenu;
        n(t, R(e.props))
      }, e.onDragStart = function (t) {
        var n = e.props.context.onNodeDragStart;
        t.stopPropagation(), e.setState({ dragNodeHighlight: !0 }), n(t, Y(e));
        try {
          t.dataTransfer.setData("text/plain", "")
        } catch {
        }
      }, e.onDragEnter = function (t) {
        var n = e.props.context.onNodeDragEnter;
        t.preventDefault(), t.stopPropagation(), n(t, Y(e))
      }, e.onDragOver = function (t) {
        var n = e.props.context.onNodeDragOver;
        t.preventDefault(), t.stopPropagation(), n(t, Y(e))
      }, e.onDragLeave = function (t) {
        var n = e.props.context.onNodeDragLeave;
        t.stopPropagation(), n(t, Y(e))
      }, e.onDragEnd = function (t) {
        var n = e.props.context.onNodeDragEnd;
        t.stopPropagation(), e.setState({ dragNodeHighlight: !1 }), n(t, Y(e))
      }, e.onDrop = function (t) {
        var n = e.props.context.onNodeDrop;
        t.preventDefault(), t.stopPropagation(), e.setState({ dragNodeHighlight: !1 }), n(t, Y(e))
      }, e.onExpand = function (t) {
        var n = e.props, r = n.loading, d = n.context.onNodeExpand;
        r || d(t, R(e.props))
      }, e.setSelectHandle = function (t) {
        e.selectHandle = t
      }, e.getNodeState = function () {
        var t = e.props.expanded;
        return e.isLeaf() ? null : t ? Ie : $e
      }, e.hasChildren = function () {
        var t = e.props.eventKey, n = e.props.context.keyEntities, r = n[t] || {}, d = r.children;
        return !!(d || []).length
      }, e.isLeaf = function () {
        var t = e.props, n = t.isLeaf, r = t.loaded, d = e.props.context.loadData, s = e.hasChildren();
        return n === !1 ? !1 : n || !d && !s || d && r && !s
      }, e.isDisabled = function () {
        var t = e.props.disabled, n = e.props.context.disabled;
        return !!(n || t)
      }, e.isCheckable = function () {
        var t = e.props.checkable, n = e.props.context.checkable;
        return !n || t === !1 ? !1 : n
      }, e.syncLoadData = function (t) {
        var n = t.expanded, r = t.loading, d = t.loaded, s = e.props.context, l = s.loadData, f = s.onNodeLoad;
        r || l && n && !e.isLeaf() && !e.hasChildren() && !d && f(R(e.props))
      }, e.isDraggable = function () {
        var t = e.props, n = t.data, r = t.context.draggable;
        return !!(r && (!r.nodeDraggable || r.nodeDraggable(n)))
      }, e.renderDragHandler = function () {
        var t = e.props.context, n = t.draggable, r = t.prefixCls;
        return n != null && n.icon ? S("span", { className: "".concat(r, "-draggable-icon"), children: n.icon }) : null
      }, e.renderSwitcherIconDom = function (t) {
        var n = e.props.switcherIcon, r = e.props.context.switcherIcon, d = n || r;
        return typeof d == "function" ? d($($({}, e.props), {}, { isLeaf: t })) : d
      }, e.renderSwitcher = function () {
        var t = e.props.expanded, n = e.props.context.prefixCls;
        if (e.isLeaf()) {
          var r = e.renderSwitcherIconDom(!0);
          return r !== !1 ? S("span", {
            className: G("".concat(n, "-switcher"), "".concat(n, "-switcher-noop")),
            children: r
          }) : null
        }
        var d = G("".concat(n, "-switcher"), "".concat(n, "-switcher_").concat(t ? Ie : $e)),
          s = e.renderSwitcherIconDom(!1);
        return s !== !1 ? S("span", { onClick: e.onExpand, className: d, children: s }) : null
      }, e.renderCheckbox = function () {
        var t = e.props, n = t.checked, r = t.halfChecked, d = t.disableCheckbox, s = e.props.context.prefixCls,
          l = e.isDisabled(), f = e.isCheckable();
        if (!f) return null;
        var v = typeof f != "boolean" ? f : null;
        return S("span", {
          className: G("".concat(s, "-checkbox"), n && "".concat(s, "-checkbox-checked"), !n && r && "".concat(s, "-checkbox-indeterminate"), (l || d) && "".concat(s, "-checkbox-disabled")),
          onClick: e.onCheck,
          children: v
        })
      }, e.renderIcon = function () {
        var t = e.props.loading, n = e.props.context.prefixCls;
        return S("span", { className: G("".concat(n, "-iconEle"), "".concat(n, "-icon__").concat(e.getNodeState() || "docu"), t && "".concat(n, "-icon_loading")) })
      }, e.renderSelector = function () {
        var t = e.state.dragNodeHighlight, n = e.props, r = n.title, d = n.selected, s = n.icon, l = n.loading,
          f = n.data, v = e.props.context, g = v.prefixCls, y = v.showIcon, c = v.icon, K = v.loadData, k = v.titleRender,
          x = e.isDisabled(), N = "".concat(g, "-node-content-wrapper"), C;
        if (y) {
          var E = s || c;
          C = E ? S("span", {
            className: G("".concat(g, "-iconEle"), "".concat(g, "-icon__customize")),
            children: typeof E == "function" ? E(e.props) : E
          }) : e.renderIcon()
        } else K && l && (C = e.renderIcon());
        var b;
        typeof r == "function" ? b = r(f) : k ? b = k(f) : b = r;
        var m = S("span", { className: "".concat(g, "-title"), children: b });
        return Se("span", {
          ref: e.setSelectHandle,
          title: typeof r == "string" ? r : "",
          className: G("".concat(N), "".concat(N, "-").concat(e.getNodeState() || "normal"), !x && (d || t) && "".concat(g, "-node-selected")),
          onMouseEnter: e.onMouseEnter,
          onMouseLeave: e.onMouseLeave,
          onContextMenu: e.onContextMenu,
          onClick: e.onSelectorClick,
          onDoubleClick: e.onSelectorDoubleClick,
          children: [C, m, e.renderDropIndicator()]
        })
      }, e.renderDropIndicator = function () {
        var t = e.props, n = t.disabled, r = t.eventKey, d = e.props.context, s = d.draggable, l = d.dropLevelOffset,
          f = d.dropPosition, v = d.prefixCls, g = d.indent, y = d.dropIndicatorRender, c = d.dragOverNodeKey,
          K = d.direction, k = s !== !1, x = !n && k && c === r;
        return x ? y({ dropPosition: f, dropLevelOffset: l, indent: g, prefixCls: v, direction: K }) : null
      }, e
    }

    return Ye(p, [{
      key: "componentDidMount", value: function () {
        this.syncLoadData(this.props)
      }
    }, {
      key: "componentDidUpdate", value: function () {
        this.syncLoadData(this.props)
      }
    }, {
      key: "isSelectable", value: function () {
        var o = this.props.selectable, u = this.props.context.selectable;
        return typeof o == "boolean" ? o : u
      }
    }, {
      key: "render", value: function () {
        var o, u = this.props, h = u.eventKey, t = u.className, n = u.style, r = u.dragOver, d = u.dragOverGapTop,
          s = u.dragOverGapBottom, l = u.isLeaf, f = u.isStart, v = u.isEnd, g = u.expanded, y = u.selected,
          c = u.checked, K = u.halfChecked, k = u.loading, x = u.domRef, N = u.active;
        u.data;
        var C = u.onMouseMove, E = u.selectable, b = Ke(u, gt), m = this.props.context, D = m.prefixCls,
          T = m.filterTreeNode, P = m.keyEntities, w = m.dropContainerKey, I = m.dropTargetKey, A = m.draggingNodeKey,
          _ = this.isDisabled(), F = Ve(b, { aria: !0, data: !0 }), B = P[h] || {}, ie = B.level, se = v[v.length - 1],
          H = this.isDraggable(), U = !_ && H, V = A === h, le = E !== void 0 ? { "aria-selected": !!E } : void 0;
        return Se("div", {
          ref: x,
          className: G(t, "".concat(D, "-treenode"), (o = {}, L(o, "".concat(D, "-treenode-disabled"), _), L(o, "".concat(D, "-treenode-switcher-").concat(g ? "open" : "close"), !l), L(o, "".concat(D, "-treenode-checkbox-checked"), c), L(o, "".concat(D, "-treenode-checkbox-indeterminate"), K), L(o, "".concat(D, "-treenode-selected"), y), L(o, "".concat(D, "-treenode-loading"), k), L(o, "".concat(D, "-treenode-active"), N), L(o, "".concat(D, "-treenode-leaf-last"), se), L(o, "".concat(D, "-treenode-draggable"), H), L(o, "dragging", V), L(o, "drop-target", I === h), L(o, "drop-container", w === h), L(o, "drag-over", !_ && r), L(o, "drag-over-gap-top", !_ && d), L(o, "drag-over-gap-bottom", !_ && s), L(o, "filter-node", T && T(R(this.props))), o)),
          style: n,
          draggable: U,
          "aria-grabbed": V,
          onDragStart: U ? this.onDragStart : void 0,
          onDragEnter: H ? this.onDragEnter : void 0,
          onDragOver: H ? this.onDragOver : void 0,
          onDragLeave: H ? this.onDragLeave : void 0,
          onDrop: H ? this.onDrop : void 0,
          onDragEnd: H ? this.onDragEnd : void 0,
          onMouseMove: C, ...le, ...F,
          children: [S(ht, {
            prefixCls: D,
            level: ie,
            isStart: f,
            isEnd: v
          }), this.renderDragHandler(), this.renderSwitcher(), this.renderCheckbox(), this.renderSelector()]
        })
      }
    }]), p
  }(O.exports.Component), de = function (i) {
    return S(Oe.Consumer, {
      children: function (p) {
        return S(Kt, { ...i, context: p })
      }
    })
  };
de.displayName = "TreeNode";
de.defaultProps = { title: yt };
de.isTreeNode = 1;

function j(a, i) {
  if (!a) return [];
  var p = a.slice(), e = p.indexOf(i);
  return e >= 0 && p.splice(e, 1), p
}

function z(a, i) {
  var p = (a || []).slice();
  return p.indexOf(i) === -1 && p.push(i), p
}

function we(a) {
  return a.split("-")
}

function Qe(a, i) {
  return "".concat(a, "-").concat(i)
}

function kt(a) {
  return a && a.type && a.type.isTreeNode
}

function xt(a, i) {
  var p = [], e = i[a];

  function o() {
    var u = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
    u.forEach(function (h) {
      var t = h.key, n = h.children;
      p.push(t), o(n)
    })
  }

  return o(e.children), p
}

function Nt(a) {
  if (a.parent) {
    var i = we(a.pos);
    return Number(i[i.length - 1]) === a.parent.children.length - 1
  }
  return !1
}

function mt(a) {
  var i = we(a.pos);
  return Number(i[i.length - 1]) === 0
}

function Ae(a, i, p, e, o, u, h, t, n, r) {
  var d, s = a.clientX, l = a.clientY, f = a.target.getBoundingClientRect(), v = f.top, g = f.height,
    y = (r === "rtl" ? -1 : 1) * (((o == null ? void 0 : o.x) || 0) - s), c = (y - 12) / e, K = t[p.props.eventKey];
  if (l < v + g / 2) {
    var k = h.findIndex(function (A) {
      return A.key === K.key
    }), x = k <= 0 ? 0 : k - 1, N = h[x].key;
    K = t[N]
  }
  var C = K.key, E = K, b = K.key, m = 0, D = 0;
  if (!n.includes(C)) for (var T = 0; T < c && Nt(K); T += 1) K = K.parent, D += 1;
  var P = i.props.data, w = K.node, I = !0;
  return mt(K) && K.level === 0 && l < v + g / 2 && u({
    dragNode: P,
    dropNode: w,
    dropPosition: -1
  }) && K.key === p.props.eventKey ? m = -1 : (E.children || []).length && n.includes(b) ? u({
    dragNode: P,
    dropNode: w,
    dropPosition: 0
  }) ? m = 0 : I = !1 : D === 0 ? c > -1.5 ? u({
    dragNode: P,
    dropNode: w,
    dropPosition: 1
  }) ? m = 1 : I = !1 : u({ dragNode: P, dropNode: w, dropPosition: 0 }) ? m = 0 : u({
    dragNode: P,
    dropNode: w,
    dropPosition: 1
  }) ? m = 1 : I = !1 : u({ dragNode: P, dropNode: w, dropPosition: 1 }) ? m = 1 : I = !1, {
    dropPosition: m,
    dropLevelOffset: D,
    dropTargetKey: K.key,
    dropTargetPos: K.pos,
    dragOverNodeKey: b,
    dropContainerKey: m === 0 ? null : ((d = K.parent) === null || d === void 0 ? void 0 : d.key) || null,
    dropAllowed: I
  }
}

function _e(a, i) {
  if (!!a) {
    var p = i.multiple;
    return p ? a.slice() : a.length ? [a[0]] : a
  }
}

function be(a) {
  if (!a) return null;
  var i;
  if (Array.isArray(a)) i = {
    checkedKeys: a,
    halfCheckedKeys: void 0
  }; else if (Te(a) === "object") i = {
    checkedKeys: a.checked || void 0,
    halfCheckedKeys: a.halfChecked || void 0
  }; else return X(!1, "`checkedKeys` is not an array or an object"), null;
  return i
}

function Fe(a, i) {
  var p = new Set;

  function e(o) {
    if (!p.has(o)) {
      var u = i[o];
      if (!!u) {
        p.add(o);
        var h = u.parent, t = u.node;
        t.disabled || h && e(h.key)
      }
    }
  }

  return (a || []).forEach(function (o) {
    e(o)
  }), ee(p)
}

var Ct = ["children"];

function pe(a, i) {
  return a != null ? a : i
}

function ye(a) {
  var i = a || {}, p = i.title, e = i._title, o = i.key, u = i.children, h = p || "title";
  return { title: h, _title: e || [h], key: o || "key", children: u || "children" }
}

function Et(a) {
  function i(p) {
    var e = dt(p);
    return e.map(function (o) {
      if (!kt(o)) return X(!o, "Tree/TreeNode can only accept TreeNode as children."), null;
      var u = o.key, h = o.props, t = h.children, n = Ke(h, Ct), r = $({ key: u }, n), d = i(t);
      return d.length && (r.children = d), r
    }).filter(function (o) {
      return o
    })
  }

  return i(a)
}

function De(a, i, p) {
  var e = ye(p), o = e._title, u = e.key, h = e.children, t = new Set(i === !0 ? [] : i), n = [];

  function r(d) {
    var s = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
    return d.map(function (l, f) {
      for (var v = Qe(s ? s.pos : "0", f), g = pe(l[u], v), y, c = 0; c < o.length; c += 1) {
        var K = o[c];
        if (l[K] !== void 0) {
          y = l[K];
          break
        }
      }
      var k = $($({}, it(l, [].concat(ee(o), [u, h]))), {}, {
        title: y,
        key: g,
        parent: s,
        pos: v,
        children: null,
        data: l,
        isStart: [].concat(ee(s ? s.isStart : []), [f === 0]),
        isEnd: [].concat(ee(s ? s.isEnd : []), [f === d.length - 1])
      });
      return n.push(k), i === !0 || t.has(g) ? k.children = r(l[h] || [], k) : k.children = [], k
    })
  }

  return r(a), n
}

function bt(a, i, p) {
  var e = {};
  Te(p) === "object" ? e = p : e = { externalGetKey: p }, e = e || {};
  var o = e, u = o.childrenPropName, h = o.externalGetKey, t = o.fieldNames, n = ye(t), r = n.key, d = n.children,
    s = u || d, l;
  h ? typeof h == "string" ? l = function (g) {
    return g[h]
  } : typeof h == "function" && (l = function (g) {
    return h(g)
  }) : l = function (g, y) {
    return pe(g[r], y)
  };

  function f(v, g, y, c) {
    var K = v ? v[s] : a, k = v ? Qe(y.pos, g) : "0", x = v ? [].concat(ee(c), [v]) : [];
    if (v) {
      var N = l(v, k),
        C = { node: v, index: g, pos: k, key: N, parentPos: y.node ? y.pos : null, level: y.level + 1, nodes: x };
      i(C)
    }
    K && K.forEach(function (E, b) {
      f(E, b, { node: v, pos: k, level: y ? y.level + 1 : -1 }, x)
    })
  }

  f(null)
}

function Dt(a) {
  var i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, p = i.initWrapper, e = i.processEntity,
    o = i.onProcessFinished, u = i.externalGetKey, h = i.childrenPropName, t = i.fieldNames,
    n = arguments.length > 2 ? arguments[2] : void 0, r = u || n, d = {}, s = {},
    l = { posEntities: d, keyEntities: s };
  return p && (l = p(l) || l), bt(a, function (f) {
    var v = f.node, g = f.index, y = f.pos, c = f.key, K = f.parentPos, k = f.level, x = f.nodes,
      N = { node: v, nodes: x, index: g, key: c, pos: y, level: k }, C = pe(c, y);
    d[y] = N, s[C] = N, N.parent = d[K], N.parent && (N.parent.children = N.parent.children || [], N.parent.children.push(N)), e && e(N, l)
  }, { externalGetKey: r, childrenPropName: h, fieldNames: t }), o && o(l), l
}

function fe(a, i) {
  var p = i.expandedKeys, e = i.selectedKeys, o = i.loadedKeys, u = i.loadingKeys, h = i.checkedKeys,
    t = i.halfCheckedKeys, n = i.dragOverNodeKey, r = i.dropPosition, d = i.keyEntities, s = d[a], l = {
      eventKey: a,
      expanded: p.indexOf(a) !== -1,
      selected: e.indexOf(a) !== -1,
      loaded: o.indexOf(a) !== -1,
      loading: u.indexOf(a) !== -1,
      checked: h.indexOf(a) !== -1,
      halfChecked: t.indexOf(a) !== -1,
      pos: String(s ? s.pos : ""),
      dragOver: n === a && r === 0,
      dragOverGapTop: n === a && r === -1,
      dragOverGapBottom: n === a && r === 1
    };
  return l
}

function R(a) {
  var i = a.data, p = a.expanded, e = a.selected, o = a.checked, u = a.loaded, h = a.loading, t = a.halfChecked,
    n = a.dragOver, r = a.dragOverGapTop, d = a.dragOverGapBottom, s = a.pos, l = a.active, f = a.eventKey,
    v = $($({}, i), {}, {
      expanded: p,
      selected: e,
      checked: o,
      loaded: u,
      loading: h,
      halfChecked: t,
      dragOver: n,
      dragOverGapTop: r,
      dragOverGapBottom: d,
      pos: s,
      active: l,
      key: f
    });
  return "props" in v || Object.defineProperty(v, "props", {
    get: function () {
      return X(!1, "Second param return from event is node data instead of TreeNode instance. Please read value directly instead of reading from `props`."), a
    }
  }), v
}

var St = ["className", "style", "motion", "motionNodes", "motionType", "onMotionStart", "onMotionEnd", "active", "treeNodeRequiredProps"],
  Ze = function (i, p) {
    var e = i.className, o = i.style, u = i.motion, h = i.motionNodes, t = i.motionType, n = i.onMotionStart,
      r = i.onMotionEnd, d = i.active, s = i.treeNodeRequiredProps, l = Ke(i, St), f = O.exports.useState(!0),
      v = oe(f, 2), g = v[0], y = v[1], c = O.exports.useContext(Oe), K = c.prefixCls, k = O.exports.useRef(!1),
      x = function () {
        k.current || r(), k.current = !0
      };
    return O.exports.useEffect(function () {
      h && t === "hide" && g && y(!1)
    }, [h]), O.exports.useEffect(function () {
      return h && n(), function () {
        h && x()
      }
    }, []), h ? S(ct, {
      ref: p,
      visible: g, ...u,
      motionAppear: t === "show",
      onAppearEnd: x,
      onLeaveEnd: x,
      children: function (N, C) {
        var E = N.className, b = N.style;
        return S("div", {
          ref: C,
          className: G("".concat(K, "-treenode-motion"), E),
          style: b,
          children: h.map(function (m) {
            var D = Xe({}, m.data), T = m.title, P = m.key, w = m.isStart, I = m.isEnd;
            delete D.children;
            var A = fe(P, s);
            return O.exports.createElement(de, {
              ...D, ...A,
              title: T,
              active: d,
              data: m.data,
              key: P,
              isStart: w,
              isEnd: I
            })
          })
        })
      }
    }) : S(de, { domRef: p, className: e, style: o, ...l, active: d })
  };
Ze.displayName = "MotionTreeNode";
var Pt = O.exports.forwardRef(Ze);

function Tt() {
  var a = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [],
    i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [], p = a.length, e = i.length;
  if (Math.abs(p - e) !== 1) return { add: !1, key: null };

  function o(u, h) {
    var t = new Map;
    u.forEach(function (r) {
      t.set(r, !0)
    });
    var n = h.filter(function (r) {
      return !t.has(r)
    });
    return n.length === 1 ? n[0] : null
  }

  return p < e ? { add: !0, key: o(a, i) } : { add: !1, key: o(i, a) }
}

function He(a, i, p) {
  var e = a.findIndex(function (t) {
    return t.key === p
  }), o = a[e + 1], u = i.findIndex(function (t) {
    return t.key === p
  });
  if (o) {
    var h = i.findIndex(function (t) {
      return t.key === o.key
    });
    return i.slice(u + 1, h)
  }
  return i.slice(u + 1)
}

var Ot = ["prefixCls", "data", "selectable", "checkable", "expandedKeys", "selectedKeys", "checkedKeys", "loadedKeys", "loadingKeys", "halfCheckedKeys", "keyEntities", "disabled", "dragging", "dragOverNodeKey", "dropPosition", "motion", "height", "itemHeight", "virtual", "focusable", "activeItem", "focused", "tabIndex", "onKeyDown", "onFocus", "onBlur", "onActiveChange", "onListChangeStart", "onListChangeEnd"],
  Ue = { width: 0, height: 0, display: "flex", overflow: "hidden", opacity: 0, border: 0, padding: 0, margin: 0 },
  wt = function () {
  }, te = "RC_TREE_MOTION_".concat(Math.random()), Pe = { key: te },
  et = { key: te, level: 0, index: 0, pos: "0", node: Pe, nodes: [Pe] },
  Ge = { parent: null, children: [], pos: et.pos, data: Pe, title: null, key: te, isStart: [], isEnd: [] };

function je(a, i, p, e) {
  return i === !1 || !p ? a : a.slice(0, Math.ceil(p / e) + 1)
}

function Be(a) {
  var i = a.key, p = a.pos;
  return pe(i, p)
}

function Lt(a) {
  for (var i = String(a.data.key), p = a; p.parent;) p = p.parent, i = "".concat(p.data.key, " > ").concat(i);
  return i
}

var tt = O.exports.forwardRef(function (a, i) {
  var p = a.prefixCls, e = a.data;
  a.selectable, a.checkable;
  var o = a.expandedKeys, u = a.selectedKeys, h = a.checkedKeys, t = a.loadedKeys, n = a.loadingKeys,
    r = a.halfCheckedKeys, d = a.keyEntities, s = a.disabled, l = a.dragging, f = a.dragOverNodeKey, v = a.dropPosition,
    g = a.motion, y = a.height, c = a.itemHeight, K = a.virtual, k = a.focusable, x = a.activeItem, N = a.focused,
    C = a.tabIndex, E = a.onKeyDown, b = a.onFocus, m = a.onBlur, D = a.onActiveChange, T = a.onListChangeStart,
    P = a.onListChangeEnd, w = Ke(a, Ot), I = O.exports.useRef(null), A = O.exports.useRef(null);
  O.exports.useImperativeHandle(i, function () {
    return {
      scrollTo: function (q) {
        I.current.scrollTo(q)
      }, getIndentWidth: function () {
        return A.current.offsetWidth
      }
    }
  });
  var _ = O.exports.useState(o), F = oe(_, 2), B = F[0], ie = F[1], se = O.exports.useState(e), H = oe(se, 2), U = H[0],
    V = H[1], le = O.exports.useState(e), ve = oe(le, 2), ke = ve[0], ne = ve[1], xe = O.exports.useState([]),
    he = oe(xe, 2), Ne = he[0], W = he[1], rt = O.exports.useState(null), Le = oe(rt, 2), at = Le[0], me = Le[1],
    Me = O.exports.useRef(e);
  Me.current = e;

  function Ce() {
    var M = Me.current;
    V(M), ne(M), W([]), me(null), P()
  }

  O.exports.useEffect(function () {
    ie(o);
    var M = Tt(B, o);
    if (M.key !== null) if (M.add) {
      var q = U.findIndex(function (ce) {
        var ue = ce.key;
        return ue === M.key
      }), J = je(He(U, e, M.key), K, y, c), re = U.slice();
      re.splice(q + 1, 0, Ge), ne(re), W(J), me("show")
    } else {
      var Q = e.findIndex(function (ce) {
        var ue = ce.key;
        return ue === M.key
      }), Z = je(He(e, U, M.key), K, y, c), ge = e.slice();
      ge.splice(Q + 1, 0, Ge), ne(ge), W(Z), me("hide")
    } else U !== e && (V(e), ne(e))
  }, [o, e]), O.exports.useEffect(function () {
    l || Ce()
  }, [l]);
  var ot = g ? ke : e, Re = {
    expandedKeys: o,
    selectedKeys: u,
    loadedKeys: t,
    loadingKeys: n,
    checkedKeys: h,
    halfCheckedKeys: r,
    dragOverNodeKey: f,
    dropPosition: v,
    keyEntities: d
  };
  return Se(st, {
    children: [N && x && S("span", {
      style: Ue,
      "aria-live": "assertive",
      children: Lt(x)
    }), S("div", {
      children: S("input", {
        style: Ue,
        disabled: k === !1 || s,
        tabIndex: k !== !1 ? C : null,
        onKeyDown: E,
        onFocus: b,
        onBlur: m,
        value: "",
        onChange: wt,
        "aria-label": "for screen reader"
      })
    }), S("div", {
      className: "".concat(p, "-treenode"),
      "aria-hidden": !0,
      style: { position: "absolute", pointerEvents: "none", visibility: "hidden", height: 0, overflow: "hidden" },
      children: S("div", {
        className: "".concat(p, "-indent"),
        children: S("div", { ref: A, className: "".concat(p, "-indent-unit") })
      })
    }), S(lt, {
      ...w,
      data: ot,
      itemKey: Be,
      height: y,
      fullHeight: !1,
      virtual: K,
      itemHeight: c,
      prefixCls: "".concat(p, "-list"),
      ref: I,
      onVisibleChange: function (q, J) {
        var re = new Set(q), Q = J.filter(function (Z) {
          return !re.has(Z)
        });
        Q.some(function (Z) {
          return Be(Z) === te
        }) && Ce()
      },
      children: function (M) {
        var q = M.pos, J = Xe({}, M.data), re = M.title, Q = M.key, Z = M.isStart, ge = M.isEnd, ce = pe(Q, q);
        delete J.key, delete J.children;
        var ue = fe(ce, Re);
        return S(Pt, {
          ...J, ...ue,
          title: re,
          active: !!x && Q === x.key,
          pos: q,
          data: M.data,
          isStart: Z,
          isEnd: ge,
          motion: g,
          motionNodes: Q === te ? Ne : null,
          motionType: at,
          onMotionStart: T,
          onMotionEnd: Ce,
          treeNodeRequiredProps: Re,
          onMouseMove: function () {
            D(null)
          }
        })
      }
    })]
  })
});
tt.displayName = "NodeList";

function Mt(a) {
  var i = a.dropPosition, p = a.dropLevelOffset, e = a.indent,
    o = { pointerEvents: "none", position: "absolute", right: 0, backgroundColor: "red", height: 2 };
  switch (i) {
    case-1:
      o.top = 0, o.left = -p * e;
      break;
    case 1:
      o.bottom = 0, o.left = -p * e;
      break;
    case 0:
      o.bottom = 0, o.left = e;
      break
  }
  return S("div", { style: o })
}

var Rt = 10, nt = function (a) {
  We(p, a);
  var i = qe(p);

  function p() {
    var e;
    ze(this, p);
    for (var o = arguments.length, u = new Array(o), h = 0; h < o; h++) u[h] = arguments[h];
    return e = i.call.apply(i, [this].concat(u)), e.destroyed = !1, e.delayedDragEnterLogic = void 0, e.loadingRetryTimes = {}, e.state = {
      keyEntities: {},
      indent: null,
      selectedKeys: [],
      checkedKeys: [],
      halfCheckedKeys: [],
      loadedKeys: [],
      loadingKeys: [],
      expandedKeys: [],
      draggingNodeKey: null,
      dragChildrenKeys: [],
      dropTargetKey: null,
      dropPosition: null,
      dropContainerKey: null,
      dropLevelOffset: null,
      dropTargetPos: null,
      dropAllowed: !0,
      dragOverNodeKey: null,
      treeData: [],
      flattenNodes: [],
      focused: !1,
      activeKey: null,
      listChanging: !1,
      prevProps: null,
      fieldNames: ye()
    }, e.dragStartMousePosition = null, e.dragNode = void 0, e.currentMouseOverDroppableNodeKey = null, e.listRef = O.exports.createRef(), e.onNodeDragStart = function (t, n) {
      var r = e.state, d = r.expandedKeys, s = r.keyEntities, l = e.props.onDragStart, f = n.props.eventKey;
      e.dragNode = n, e.dragStartMousePosition = { x: t.clientX, y: t.clientY };
      var v = j(d, f);
      e.setState({
        draggingNodeKey: f,
        dragChildrenKeys: xt(f, s),
        indent: e.listRef.current.getIndentWidth()
      }), e.setExpandedKeys(v), window.addEventListener("dragend", e.onWindowDragEnd), l == null || l({
        event: t,
        node: R(n.props)
      })
    }, e.onNodeDragEnter = function (t, n) {
      var r = e.state, d = r.expandedKeys, s = r.keyEntities, l = r.dragChildrenKeys, f = r.flattenNodes, v = r.indent,
        g = e.props, y = g.onDragEnter, c = g.onExpand, K = g.allowDrop, k = g.direction, x = n.props, N = x.pos,
        C = x.eventKey, E = Y(e), b = E.dragNode;
      if (e.currentMouseOverDroppableNodeKey !== C && (e.currentMouseOverDroppableNodeKey = C), !b) {
        e.resetDragState();
        return
      }
      var m = Ae(t, b, n, v, e.dragStartMousePosition, K, f, s, d, k), D = m.dropPosition, T = m.dropLevelOffset,
        P = m.dropTargetKey, w = m.dropContainerKey, I = m.dropTargetPos, A = m.dropAllowed, _ = m.dragOverNodeKey;
      if (l.indexOf(P) !== -1 || !A) {
        e.resetDragState();
        return
      }
      if (e.delayedDragEnterLogic || (e.delayedDragEnterLogic = {}), Object.keys(e.delayedDragEnterLogic).forEach(function (F) {
        clearTimeout(e.delayedDragEnterLogic[F])
      }), b.props.eventKey !== n.props.eventKey && (t.persist(), e.delayedDragEnterLogic[N] = window.setTimeout(function () {
        if (e.state.draggingNodeKey !== null) {
          var F = ee(d), B = s[n.props.eventKey];
          B && (B.children || []).length && (F = z(d, n.props.eventKey)), "expandedKeys" in e.props || e.setExpandedKeys(F), c == null || c(F, {
            node: R(n.props),
            expanded: !0,
            nativeEvent: t.nativeEvent
          })
        }
      }, 800)), b.props.eventKey === P && T === 0) {
        e.resetDragState();
        return
      }
      e.setState({
        dragOverNodeKey: _,
        dropPosition: D,
        dropLevelOffset: T,
        dropTargetKey: P,
        dropContainerKey: w,
        dropTargetPos: I,
        dropAllowed: A
      }), y == null || y({ event: t, node: R(n.props), expandedKeys: d })
    }, e.onNodeDragOver = function (t, n) {
      var r = e.state, d = r.dragChildrenKeys, s = r.flattenNodes, l = r.keyEntities, f = r.expandedKeys, v = r.indent,
        g = e.props, y = g.onDragOver, c = g.allowDrop, K = g.direction, k = Y(e), x = k.dragNode;
      if (!!x) {
        var N = Ae(t, x, n, v, e.dragStartMousePosition, c, s, l, f, K), C = N.dropPosition, E = N.dropLevelOffset,
          b = N.dropTargetKey, m = N.dropContainerKey, D = N.dropAllowed, T = N.dropTargetPos, P = N.dragOverNodeKey;
        d.indexOf(b) !== -1 || !D || (x.props.eventKey === b && E === 0 ? e.state.dropPosition === null && e.state.dropLevelOffset === null && e.state.dropTargetKey === null && e.state.dropContainerKey === null && e.state.dropTargetPos === null && e.state.dropAllowed === !1 && e.state.dragOverNodeKey === null || e.resetDragState() : C === e.state.dropPosition && E === e.state.dropLevelOffset && b === e.state.dropTargetKey && m === e.state.dropContainerKey && T === e.state.dropTargetPos && D === e.state.dropAllowed && P === e.state.dragOverNodeKey || e.setState({
          dropPosition: C,
          dropLevelOffset: E,
          dropTargetKey: b,
          dropContainerKey: m,
          dropTargetPos: T,
          dropAllowed: D,
          dragOverNodeKey: P
        }), y == null || y({ event: t, node: R(n.props) }))
      }
    }, e.onNodeDragLeave = function (t, n) {
      e.currentMouseOverDroppableNodeKey === n.props.eventKey && !t.currentTarget.contains(t.relatedTarget) && (e.resetDragState(), e.currentMouseOverDroppableNodeKey = null);
      var r = e.props.onDragLeave;
      r == null || r({ event: t, node: R(n.props) })
    }, e.onWindowDragEnd = function (t) {
      e.onNodeDragEnd(t, null, !0), window.removeEventListener("dragend", e.onWindowDragEnd)
    }, e.onNodeDragEnd = function (t, n) {
      var r = e.props.onDragEnd;
      e.setState({ dragOverNodeKey: null }), e.cleanDragState(), r == null || r({
        event: t,
        node: R(n.props)
      }), e.dragNode = null, window.removeEventListener("dragend", e.onWindowDragEnd)
    }, e.onNodeDrop = function (t, n) {
      var r, d = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1, s = e.state,
        l = s.dragChildrenKeys, f = s.dropPosition, v = s.dropTargetKey, g = s.dropTargetPos, y = s.dropAllowed;
      if (!!y) {
        var c = e.props.onDrop;
        if (e.setState({ dragOverNodeKey: null }), e.cleanDragState(), v !== null) {
          var K = $($({}, fe(v, e.getTreeNodeRequiredProps())), {}, {
            active: ((r = e.getActiveItem()) === null || r === void 0 ? void 0 : r.key) === v,
            data: e.state.keyEntities[v].node
          }), k = l.indexOf(v) !== -1;
          X(!k, "Can not drop to dragNode's children node. This is a bug of rc-tree. Please report an issue.");
          var x = we(g), N = {
            event: t,
            node: R(K),
            dragNode: e.dragNode ? R(e.dragNode.props) : null,
            dragNodesKeys: [e.dragNode.props.eventKey].concat(l),
            dropToGap: f !== 0,
            dropPosition: f + Number(x[x.length - 1])
          };
          d || c == null || c(N), e.dragNode = null
        }
      }
    }, e.cleanDragState = function () {
      var t = e.state.draggingNodeKey;
      t !== null && e.setState({
        draggingNodeKey: null,
        dropPosition: null,
        dropContainerKey: null,
        dropTargetKey: null,
        dropLevelOffset: null,
        dropAllowed: !0,
        dragOverNodeKey: null
      }), e.dragStartMousePosition = null, e.currentMouseOverDroppableNodeKey = null
    }, e.triggerExpandActionExpand = function (t, n) {
      var r = e.state, d = r.expandedKeys, s = r.flattenNodes, l = n.expanded, f = n.key, v = n.isLeaf;
      if (!(v || t.shiftKey || t.metaKey || t.ctrlKey)) {
        var g = s.filter(function (c) {
          return c.key === f
        })[0], y = R($($({}, fe(f, e.getTreeNodeRequiredProps())), {}, { data: g.data }));
        e.setExpandedKeys(l ? j(d, f) : z(d, f)), e.onNodeExpand(t, y)
      }
    }, e.onNodeClick = function (t, n) {
      var r = e.props, d = r.onClick, s = r.expandAction;
      s === "click" && e.triggerExpandActionExpand(t, n), d == null || d(t, n)
    }, e.onNodeDoubleClick = function (t, n) {
      var r = e.props, d = r.onDoubleClick, s = r.expandAction;
      s === "doubleClick" && e.triggerExpandActionExpand(t, n), d == null || d(t, n)
    }, e.onNodeSelect = function (t, n) {
      var r = e.state.selectedKeys, d = e.state, s = d.keyEntities, l = d.fieldNames, f = e.props, v = f.onSelect,
        g = f.multiple, y = n.selected, c = n[l.key], K = !y;
      K ? g ? r = z(r, c) : r = [c] : r = j(r, c);
      var k = r.map(function (x) {
        var N = s[x];
        return N ? N.node : null
      }).filter(function (x) {
        return x
      });
      e.setUncontrolledState({ selectedKeys: r }), v == null || v(r, {
        event: "select",
        selected: K,
        node: n,
        selectedNodes: k,
        nativeEvent: t.nativeEvent
      })
    }, e.onNodeCheck = function (t, n, r) {
      var d = e.state, s = d.keyEntities, l = d.checkedKeys, f = d.halfCheckedKeys, v = e.props, g = v.checkStrictly,
        y = v.onCheck, c = n.key, K, k = { event: "check", node: n, checked: r, nativeEvent: t.nativeEvent };
      if (g) {
        var x = r ? z(l, c) : j(l, c), N = j(f, c);
        K = { checked: x, halfChecked: N }, k.checkedNodes = x.map(function (T) {
          return s[T]
        }).filter(function (T) {
          return T
        }).map(function (T) {
          return T.node
        }), e.setUncontrolledState({ checkedKeys: x })
      } else {
        var C = Ee([].concat(ee(l), [c]), !0, s), E = C.checkedKeys, b = C.halfCheckedKeys;
        if (!r) {
          var m = new Set(E);
          m.delete(c);
          var D = Ee(Array.from(m), { checked: !1, halfCheckedKeys: b }, s);
          E = D.checkedKeys, b = D.halfCheckedKeys
        }
        K = E, k.checkedNodes = [], k.checkedNodesPositions = [], k.halfCheckedKeys = b, E.forEach(function (T) {
          var P = s[T];
          if (!!P) {
            var w = P.node, I = P.pos;
            k.checkedNodes.push(w), k.checkedNodesPositions.push({ node: w, pos: I })
          }
        }), e.setUncontrolledState({ checkedKeys: E }, !1, { halfCheckedKeys: b })
      }
      y == null || y(K, k)
    }, e.onNodeLoad = function (t) {
      var n = t.key, r = new Promise(function (d, s) {
        e.setState(function (l) {
          var f = l.loadedKeys, v = f === void 0 ? [] : f, g = l.loadingKeys, y = g === void 0 ? [] : g, c = e.props,
            K = c.loadData, k = c.onLoad;
          if (!K || v.indexOf(n) !== -1 || y.indexOf(n) !== -1) return null;
          var x = K(t);
          return x.then(function () {
            var N = e.state.loadedKeys, C = z(N, n);
            k == null || k(C, {
              event: "load",
              node: t
            }), e.setUncontrolledState({ loadedKeys: C }), e.setState(function (E) {
              return { loadingKeys: j(E.loadingKeys, n) }
            }), d()
          }).catch(function (N) {
            if (e.setState(function (E) {
              return { loadingKeys: j(E.loadingKeys, n) }
            }), e.loadingRetryTimes[n] = (e.loadingRetryTimes[n] || 0) + 1, e.loadingRetryTimes[n] >= Rt) {
              var C = e.state.loadedKeys;
              X(!1, "Retry for `loadData` many times but still failed. No more retry."), e.setUncontrolledState({ loadedKeys: z(C, n) }), d()
            }
            s(N)
          }), { loadingKeys: z(y, n) }
        })
      });
      return r.catch(function () {
      }), r
    }, e.onNodeMouseEnter = function (t, n) {
      var r = e.props.onMouseEnter;
      r == null || r({ event: t, node: n })
    }, e.onNodeMouseLeave = function (t, n) {
      var r = e.props.onMouseLeave;
      r == null || r({ event: t, node: n })
    }, e.onNodeContextMenu = function (t, n) {
      var r = e.props.onRightClick;
      r && (t.preventDefault(), r({ event: t, node: n }))
    }, e.onFocus = function () {
      var t = e.props.onFocus;
      e.setState({ focused: !0 });
      for (var n = arguments.length, r = new Array(n), d = 0; d < n; d++) r[d] = arguments[d];
      t == null || t.apply(void 0, r)
    }, e.onBlur = function () {
      var t = e.props.onBlur;
      e.setState({ focused: !1 }), e.onActiveChange(null);
      for (var n = arguments.length, r = new Array(n), d = 0; d < n; d++) r[d] = arguments[d];
      t == null || t.apply(void 0, r)
    }, e.getTreeNodeRequiredProps = function () {
      var t = e.state, n = t.expandedKeys, r = t.selectedKeys, d = t.loadedKeys, s = t.loadingKeys, l = t.checkedKeys,
        f = t.halfCheckedKeys, v = t.dragOverNodeKey, g = t.dropPosition, y = t.keyEntities;
      return {
        expandedKeys: n || [],
        selectedKeys: r || [],
        loadedKeys: d || [],
        loadingKeys: s || [],
        checkedKeys: l || [],
        halfCheckedKeys: f || [],
        dragOverNodeKey: v,
        dropPosition: g,
        keyEntities: y
      }
    }, e.setExpandedKeys = function (t) {
      var n = e.state, r = n.treeData, d = n.fieldNames, s = De(r, t, d);
      e.setUncontrolledState({ expandedKeys: t, flattenNodes: s }, !0)
    }, e.onNodeExpand = function (t, n) {
      var r = e.state.expandedKeys, d = e.state, s = d.listChanging, l = d.fieldNames, f = e.props, v = f.onExpand,
        g = f.loadData, y = n.expanded, c = n[l.key];
      if (!s) {
        var K = r.indexOf(c), k = !y;
        if (X(y && K !== -1 || !y && K === -1, "Expand state not sync with index check"), k ? r = z(r, c) : r = j(r, c), e.setExpandedKeys(r), v == null || v(r, {
          node: n,
          expanded: k,
          nativeEvent: t.nativeEvent
        }), k && g) {
          var x = e.onNodeLoad(n);
          x && x.then(function () {
            var N = De(e.state.treeData, r, l);
            e.setUncontrolledState({ flattenNodes: N })
          }).catch(function () {
            var N = e.state.expandedKeys, C = j(N, c);
            e.setExpandedKeys(C)
          })
        }
      }
    }, e.onListChangeStart = function () {
      e.setUncontrolledState({ listChanging: !0 })
    }, e.onListChangeEnd = function () {
      setTimeout(function () {
        e.setUncontrolledState({ listChanging: !1 })
      })
    }, e.onActiveChange = function (t) {
      var n = e.state.activeKey, r = e.props.onActiveChange;
      n !== t && (e.setState({ activeKey: t }), t !== null && e.scrollTo({ key: t }), r == null || r(t))
    }, e.getActiveItem = function () {
      var t = e.state, n = t.activeKey, r = t.flattenNodes;
      return n === null ? null : r.find(function (d) {
        var s = d.key;
        return s === n
      }) || null
    }, e.offsetActiveKey = function (t) {
      var n = e.state, r = n.flattenNodes, d = n.activeKey, s = r.findIndex(function (v) {
        var g = v.key;
        return g === d
      });
      s === -1 && t < 0 && (s = r.length), s = (s + t + r.length) % r.length;
      var l = r[s];
      if (l) {
        var f = l.key;
        e.onActiveChange(f)
      } else e.onActiveChange(null)
    }, e.onKeyDown = function (t) {
      var n = e.state, r = n.activeKey, d = n.expandedKeys, s = n.checkedKeys, l = n.fieldNames, f = e.props,
        v = f.onKeyDown, g = f.checkable, y = f.selectable;
      switch (t.which) {
        case ae.UP: {
          e.offsetActiveKey(-1), t.preventDefault();
          break
        }
        case ae.DOWN: {
          e.offsetActiveKey(1), t.preventDefault();
          break
        }
      }
      var c = e.getActiveItem();
      if (c && c.data) {
        var K = e.getTreeNodeRequiredProps(), k = c.data.isLeaf === !1 || !!(c.data[l.children] || []).length,
          x = R($($({}, fe(r, K)), {}, { data: c.data, active: !0 }));
        switch (t.which) {
          case ae.LEFT: {
            k && d.includes(r) ? e.onNodeExpand({}, x) : c.parent && e.onActiveChange(c.parent.key), t.preventDefault();
            break
          }
          case ae.RIGHT: {
            k && !d.includes(r) ? e.onNodeExpand({}, x) : c.children && c.children.length && e.onActiveChange(c.children[0].key), t.preventDefault();
            break
          }
          case ae.ENTER:
          case ae.SPACE: {
            g && !x.disabled && x.checkable !== !1 && !x.disableCheckbox ? e.onNodeCheck({}, x, !s.includes(r)) : !g && y && !x.disabled && x.selectable !== !1 && e.onNodeSelect({}, x);
            break
          }
        }
      }
      v == null || v(t)
    }, e.setUncontrolledState = function (t) {
      var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1,
        r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null;
      if (!e.destroyed) {
        var d = !1, s = !0, l = {};
        Object.keys(t).forEach(function (f) {
          if (f in e.props) {
            s = !1;
            return
          }
          d = !0, l[f] = t[f]
        }), d && (!n || s) && e.setState($($({}, l), r))
      }
    }, e.scrollTo = function (t) {
      e.listRef.current.scrollTo(t)
    }, e
  }

  return Ye(p, [{
    key: "componentDidMount", value: function () {
      this.destroyed = !1, this.onUpdated()
    }
  }, {
    key: "componentDidUpdate", value: function () {
      this.onUpdated()
    }
  }, {
    key: "onUpdated", value: function () {
      var o = this.props.activeKey;
      o !== void 0 && o !== this.state.activeKey && (this.setState({ activeKey: o }), o !== null && this.scrollTo({ key: o }))
    }
  }, {
    key: "componentWillUnmount", value: function () {
      window.removeEventListener("dragend", this.onWindowDragEnd), this.destroyed = !0
    }
  }, {
    key: "resetDragState", value: function () {
      this.setState({
        dragOverNodeKey: null,
        dropPosition: null,
        dropLevelOffset: null,
        dropTargetKey: null,
        dropContainerKey: null,
        dropTargetPos: null,
        dropAllowed: !1
      })
    }
  }, {
    key: "render", value: function () {
      var o, u = this.state, h = u.focused, t = u.flattenNodes, n = u.keyEntities, r = u.draggingNodeKey,
        d = u.activeKey, s = u.dropLevelOffset, l = u.dropContainerKey, f = u.dropTargetKey, v = u.dropPosition,
        g = u.dragOverNodeKey, y = u.indent, c = this.props, K = c.prefixCls, k = c.className, x = c.style,
        N = c.showLine, C = c.focusable, E = c.tabIndex, b = E === void 0 ? 0 : E, m = c.selectable, D = c.showIcon,
        T = c.icon, P = c.switcherIcon, w = c.draggable, I = c.checkable, A = c.checkStrictly, _ = c.disabled,
        F = c.motion, B = c.loadData, ie = c.filterTreeNode, se = c.height, H = c.itemHeight, U = c.virtual,
        V = c.titleRender, le = c.dropIndicatorRender, ve = c.onContextMenu, ke = c.onScroll, ne = c.direction,
        xe = c.rootClassName, he = c.rootStyle, Ne = Ve(this.props, { aria: !0, data: !0 }), W;
      return w && (Te(w) === "object" ? W = w : typeof w == "function" ? W = { nodeDraggable: w } : W = {}), S(Oe.Provider, {
        value: {
          prefixCls: K,
          selectable: m,
          showIcon: D,
          icon: T,
          switcherIcon: P,
          draggable: W,
          draggingNodeKey: r,
          checkable: I,
          checkStrictly: A,
          disabled: _,
          keyEntities: n,
          dropLevelOffset: s,
          dropContainerKey: l,
          dropTargetKey: f,
          dropPosition: v,
          dragOverNodeKey: g,
          indent: y,
          direction: ne,
          dropIndicatorRender: le,
          loadData: B,
          filterTreeNode: ie,
          titleRender: V,
          onNodeClick: this.onNodeClick,
          onNodeDoubleClick: this.onNodeDoubleClick,
          onNodeExpand: this.onNodeExpand,
          onNodeSelect: this.onNodeSelect,
          onNodeCheck: this.onNodeCheck,
          onNodeLoad: this.onNodeLoad,
          onNodeMouseEnter: this.onNodeMouseEnter,
          onNodeMouseLeave: this.onNodeMouseLeave,
          onNodeContextMenu: this.onNodeContextMenu,
          onNodeDragStart: this.onNodeDragStart,
          onNodeDragEnter: this.onNodeDragEnter,
          onNodeDragOver: this.onNodeDragOver,
          onNodeDragLeave: this.onNodeDragLeave,
          onNodeDragEnd: this.onNodeDragEnd,
          onNodeDrop: this.onNodeDrop
        },
        children: S("div", {
          role: "tree",
          className: G(K, k, xe, (o = {}, L(o, "".concat(K, "-show-line"), N), L(o, "".concat(K, "-focused"), h), L(o, "".concat(K, "-active-focused"), d !== null), o)),
          style: he,
          children: S(tt, {
            ref: this.listRef,
            prefixCls: K,
            style: x,
            data: t,
            disabled: _,
            selectable: m,
            checkable: !!I,
            motion: F,
            dragging: r !== null,
            height: se,
            itemHeight: H,
            virtual: U,
            focusable: C,
            focused: h,
            tabIndex: b,
            activeItem: this.getActiveItem(),
            onFocus: this.onFocus,
            onBlur: this.onBlur,
            onKeyDown: this.onKeyDown,
            onActiveChange: this.onActiveChange,
            onListChangeStart: this.onListChangeStart,
            onListChangeEnd: this.onListChangeEnd,
            onContextMenu: ve,
            onScroll: ke, ...this.getTreeNodeRequiredProps(), ...Ne
          })
        })
      })
    }
  }], [{
    key: "getDerivedStateFromProps", value: function (o, u) {
      var h = u.prevProps, t = { prevProps: o };

      function n(C) {
        return !h && C in o || h && h[C] !== o[C]
      }

      var r, d = u.fieldNames;
      if (n("fieldNames") && (d = ye(o.fieldNames), t.fieldNames = d), n("treeData") ? r = o.treeData : n("children") && (X(!1, "`children` of Tree is deprecated. Please use `treeData` instead."), r = Et(o.children)), r) {
        t.treeData = r;
        var s = Dt(r, { fieldNames: d });
        t.keyEntities = $(L({}, te, et), s.keyEntities)
      }
      var l = t.keyEntities || u.keyEntities;
      if (n("expandedKeys") || h && n("autoExpandParent")) t.expandedKeys = o.autoExpandParent || !h && o.defaultExpandParent ? Fe(o.expandedKeys, l) : o.expandedKeys; else if (!h && o.defaultExpandAll) {
        var f = $({}, l);
        delete f[te], t.expandedKeys = Object.keys(f).map(function (C) {
          return f[C].key
        })
      } else !h && o.defaultExpandedKeys && (t.expandedKeys = o.autoExpandParent || o.defaultExpandParent ? Fe(o.defaultExpandedKeys, l) : o.defaultExpandedKeys);
      if (t.expandedKeys || delete t.expandedKeys, r || t.expandedKeys) {
        var v = De(r || u.treeData, t.expandedKeys || u.expandedKeys, d);
        t.flattenNodes = v
      }
      if (o.selectable && (n("selectedKeys") ? t.selectedKeys = _e(o.selectedKeys, o) : !h && o.defaultSelectedKeys && (t.selectedKeys = _e(o.defaultSelectedKeys, o))), o.checkable) {
        var g;
        if (n("checkedKeys") ? g = be(o.checkedKeys) || {} : !h && o.defaultCheckedKeys ? g = be(o.defaultCheckedKeys) || {} : r && (g = be(o.checkedKeys) || {
          checkedKeys: u.checkedKeys,
          halfCheckedKeys: u.halfCheckedKeys
        }), g) {
          var y = g, c = y.checkedKeys, K = c === void 0 ? [] : c, k = y.halfCheckedKeys, x = k === void 0 ? [] : k;
          if (!o.checkStrictly) {
            var N = Ee(K, !0, l);
            K = N.checkedKeys, x = N.halfCheckedKeys
          }
          t.checkedKeys = K, t.halfCheckedKeys = x
        }
      }
      return n("loadedKeys") && (t.loadedKeys = o.loadedKeys), t
    }
  }]), p
}(O.exports.Component);
nt.defaultProps = {
  prefixCls: "rc-tree",
  showLine: !1,
  showIcon: !0,
  selectable: !0,
  multiple: !1,
  checkable: !1,
  disabled: !1,
  checkStrictly: !1,
  draggable: !1,
  defaultExpandParent: !0,
  autoExpandParent: !1,
  defaultExpandAll: !1,
  defaultExpandedKeys: [],
  defaultCheckedKeys: [],
  defaultSelectedKeys: [],
  dropIndicatorRender: Mt,
  allowDrop: function () {
    return !0
  },
  expandAction: !1
};
nt.TreeNode = de;
export { de as C, nt as T, Fe as a, Et as b, Dt as c, Ee as d, j as e, z as f };

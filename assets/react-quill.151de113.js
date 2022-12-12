import { n as u } from "./@babel.3781e41b.js";
import { r as C } from "./react.aaec2051.js";
import { r as b } from "./react-dom.18596681.js";
import { i as w } from "./lodash.367d7372.js";
import { q as S } from "./quill.ba09d970.js";

var x = u && u.__extends || function () {
  var r = function (o, t) {
    return r = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (e, n) {
      e.__proto__ = n
    } || function (e, n) {
      for (var i in n) n.hasOwnProperty(i) && (e[i] = n[i])
    }, r(o, t)
  };
  return function (o, t) {
    r(o, t);

    function e() {
      this.constructor = o
    }

    o.prototype = t === null ? Object.create(t) : (e.prototype = t.prototype, new e)
  }
}(), v = u && u.__assign || function () {
  return v = Object.assign || function (r) {
    for (var o, t = 1, e = arguments.length; t < e; t++) {
      o = arguments[t];
      for (var n in o) Object.prototype.hasOwnProperty.call(o, n) && (r[n] = o[n])
    }
    return r
  }, v.apply(this, arguments)
}, D = u && u.__spreadArrays || function () {
  for (var r = 0, o = 0, t = arguments.length; o < t; o++) r += arguments[o].length;
  for (var e = Array(r), n = 0, o = 0; o < t; o++) for (var i = arguments[o], s = 0, a = i.length; s < a; s++, n++) e[n] = i[s];
  return e
}, y = u && u.__importDefault || function (r) {
  return r && r.__esModule ? r : { default: r }
}, d = y(C.exports), O = y(b.exports), g = y(w), m = y(S.exports), A = function (r) {
  x(o, r);

  function o(t) {
    var e = r.call(this, t) || this;
    e.dirtyProps = ["modules", "formats", "bounds", "theme", "children"], e.cleanProps = ["id", "className", "style", "placeholder", "tabIndex", "onChange", "onChangeSelection", "onFocus", "onBlur", "onKeyPress", "onKeyDown", "onKeyUp"], e.state = { generation: 0 }, e.selection = null, e.onEditorChange = function (i, s, a, l) {
      var h, p, c, f;
      i === "text-change" ? (p = (h = e).onEditorChangeText) === null || p === void 0 || p.call(h, e.editor.root.innerHTML, s, l, e.unprivilegedEditor) : i === "selection-change" && ((f = (c = e).onEditorChangeSelection) === null || f === void 0 || f.call(c, s, l, e.unprivilegedEditor))
    };
    var n = e.isControlled() ? t.value : t.defaultValue;
    return e.value = n != null ? n : "", e
  }

  return o.prototype.validateProps = function (t) {
    var e;
    if (d.default.Children.count(t.children) > 1) throw new Error("The Quill editing area can only be composed of a single React element.");
    if (d.default.Children.count(t.children)) {
      var n = d.default.Children.only(t.children);
      if (((e = n) === null || e === void 0 ? void 0 : e.type) === "textarea") throw new Error("Quill does not support editing on a <textarea>. Use a <div> instead.")
    }
    if (this.lastDeltaChangeSet && t.value === this.lastDeltaChangeSet) throw new Error("You are passing the `delta` object from the `onChange` event back as `value`. You most probably want `editor.getContents()` instead. See: https://github.com/zenoamaro/react-quill#using-deltas")
  }, o.prototype.shouldComponentUpdate = function (t, e) {
    var n = this, i;
    if (this.validateProps(t), !this.editor || this.state.generation !== e.generation) return !0;
    if ("value" in t) {
      var s = this.getEditorContents(), a = (i = t.value, i != null ? i : "");
      this.isEqualValue(a, s) || this.setEditorContents(this.editor, a)
    }
    return t.readOnly !== this.props.readOnly && this.setEditorReadOnly(this.editor, t.readOnly), D(this.cleanProps, this.dirtyProps).some(function (l) {
      return !g.default(t[l], n.props[l])
    })
  }, o.prototype.shouldComponentRegenerate = function (t) {
    var e = this;
    return this.dirtyProps.some(function (n) {
      return !g.default(t[n], e.props[n])
    })
  }, o.prototype.componentDidMount = function () {
    this.instantiateEditor(), this.setEditorContents(this.editor, this.getEditorContents())
  }, o.prototype.componentWillUnmount = function () {
    this.destroyEditor()
  }, o.prototype.componentDidUpdate = function (t, e) {
    var n = this;
    if (this.editor && this.shouldComponentRegenerate(t)) {
      var i = this.editor.getContents(), s = this.editor.getSelection();
      this.regenerationSnapshot = {
        delta: i,
        selection: s
      }, this.setState({ generation: this.state.generation + 1 }), this.destroyEditor()
    }
    if (this.state.generation !== e.generation) {
      var a = this.regenerationSnapshot, i = a.delta, l = a.selection;
      delete this.regenerationSnapshot, this.instantiateEditor();
      var h = this.editor;
      h.setContents(i), E(function () {
        return n.setEditorSelection(h, l)
      })
    }
  }, o.prototype.instantiateEditor = function () {
    this.editor ? this.hookEditor(this.editor) : this.editor = this.createEditor(this.getEditingArea(), this.getEditorConfig())
  }, o.prototype.destroyEditor = function () {
    !this.editor || this.unhookEditor(this.editor)
  }, o.prototype.isControlled = function () {
    return "value" in this.props
  }, o.prototype.getEditorConfig = function () {
    return {
      bounds: this.props.bounds,
      formats: this.props.formats,
      modules: this.props.modules,
      placeholder: this.props.placeholder,
      readOnly: this.props.readOnly,
      scrollingContainer: this.props.scrollingContainer,
      tabIndex: this.props.tabIndex,
      theme: this.props.theme
    }
  }, o.prototype.getEditor = function () {
    if (!this.editor) throw new Error("Accessing non-instantiated editor");
    return this.editor
  }, o.prototype.createEditor = function (t, e) {
    var n = new m.default(t, e);
    return e.tabIndex != null && this.setEditorTabIndex(n, e.tabIndex), this.hookEditor(n), n
  }, o.prototype.hookEditor = function (t) {
    this.unprivilegedEditor = this.makeUnprivilegedEditor(t), t.on("editor-change", this.onEditorChange)
  }, o.prototype.unhookEditor = function (t) {
    t.off("editor-change", this.onEditorChange)
  }, o.prototype.getEditorContents = function () {
    return this.value
  }, o.prototype.getEditorSelection = function () {
    return this.selection
  }, o.prototype.isDelta = function (t) {
    return t && t.ops
  }, o.prototype.isEqualValue = function (t, e) {
    return this.isDelta(t) && this.isDelta(e) ? g.default(t.ops, e.ops) : g.default(t, e)
  }, o.prototype.setEditorContents = function (t, e) {
    var n = this;
    this.value = e;
    var i = this.getEditorSelection();
    typeof e == "string" ? t.setContents(t.clipboard.convert(e)) : t.setContents(e), E(function () {
      return n.setEditorSelection(t, i)
    })
  }, o.prototype.setEditorSelection = function (t, e) {
    if (this.selection = e, e) {
      var n = t.getLength();
      e.index = Math.max(0, Math.min(e.index, n - 1)), e.length = Math.max(0, Math.min(e.length, n - 1 - e.index)), t.setSelection(e)
    }
  }, o.prototype.setEditorTabIndex = function (t, e) {
    var n, i;
    !((i = (n = t) === null || n === void 0 ? void 0 : n.scroll) === null || i === void 0) && i.domNode && (t.scroll.domNode.tabIndex = e)
  }, o.prototype.setEditorReadOnly = function (t, e) {
    e ? t.disable() : t.enable()
  }, o.prototype.makeUnprivilegedEditor = function (t) {
    var e = t;
    return {
      getHTML: function () {
        return e.root.innerHTML
      },
      getLength: e.getLength.bind(e),
      getText: e.getText.bind(e),
      getContents: e.getContents.bind(e),
      getSelection: e.getSelection.bind(e),
      getBounds: e.getBounds.bind(e)
    }
  }, o.prototype.getEditingArea = function () {
    if (!this.editingArea) throw new Error("Instantiating on missing editing area");
    var t = O.default.findDOMNode(this.editingArea);
    if (!t) throw new Error("Cannot find element for editing area");
    if (t.nodeType === 3) throw new Error("Editing area cannot be a text node");
    return t
  }, o.prototype.renderEditingArea = function () {
    var t = this, e = this.props, n = e.children, i = e.preserveWhitespace, s = this.state.generation, a = {
      key: s, ref: function (l) {
        t.editingArea = l
      }
    };
    return d.default.Children.count(n) ? d.default.cloneElement(d.default.Children.only(n), a) : i ? d.default.createElement("pre", v({}, a)) : d.default.createElement("div", v({}, a))
  }, o.prototype.render = function () {
    var t;
    return d.default.createElement("div", {
      id: this.props.id,
      style: this.props.style,
      key: this.state.generation,
      className: "quill " + (t = this.props.className, t != null ? t : ""),
      onKeyPress: this.props.onKeyPress,
      onKeyDown: this.props.onKeyDown,
      onKeyUp: this.props.onKeyUp
    }, this.renderEditingArea())
  }, o.prototype.onEditorChangeText = function (t, e, n, i) {
    var s, a;
    if (!!this.editor) {
      var l = this.isDelta(this.value) ? i.getContents() : i.getHTML();
      l !== this.getEditorContents() && (this.lastDeltaChangeSet = e, this.value = l, (a = (s = this.props).onChange) === null || a === void 0 || a.call(s, t, e, n, i))
    }
  }, o.prototype.onEditorChangeSelection = function (t, e, n) {
    var i, s, a, l, h, p;
    if (!!this.editor) {
      var c = this.getEditorSelection(), f = !c && t, _ = c && !t;
      g.default(t, c) || (this.selection = t, (s = (i = this.props).onChangeSelection) === null || s === void 0 || s.call(i, t, e, n), f ? (l = (a = this.props).onFocus) === null || l === void 0 || l.call(a, t, e, n) : _ && ((p = (h = this.props).onBlur) === null || p === void 0 || p.call(h, c, e, n)))
    }
  }, o.prototype.focus = function () {
    !this.editor || this.editor.focus()
  }, o.prototype.blur = function () {
    !this.editor || (this.selection = null, this.editor.blur())
  }, o.displayName = "React Quill", o.Quill = m.default, o.defaultProps = {
    theme: "snow",
    modules: {},
    readOnly: !1
  }, o
}(d.default.Component);

function E(r) {
  Promise.resolve().then(r)
}

var I = A;
export { I as l };

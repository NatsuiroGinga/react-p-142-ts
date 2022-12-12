import{b as G,a as E,f as ye,d as R,g as Cn,h as gn,i as bn,j as In,_ as yn,c as U}from "./@babel.3781e41b.js";import{r as i}from "./react.aaec2051.js";import{c as pe}from "./classnames.4fb4381a.js";import{s as Et}from "./shallowequal.ea8d8004.js";import{a as Mn,w as Dt,o as Ot,K as ne,t as Sn,b as Ae,l as Pn,d as He}from "./rc-util.5fc3e0fc.js";import{F as Le}from "./rc-overflow.e2939c70.js";import{j as m,b as ke}from "./@ant-design.023abccc.js";import{T as Rn}from "./rc-trigger.1ca4bf78.js";import{C as Kn}from "./rc-motion.a15f39b3.js";var Nn=["children","locked"],Q=i.exports.createContext(null);function wn(e, t){var n=E({},e);return Object.keys(t).forEach(function(r){var l=t[r];l!==void 0&&(n[r]=l)}),n}function Te(e){var t=e.children,n=e.locked,r=G(e,Nn),l=i.exports.useContext(Q),o=Mn(function(){return wn(l,r)},[l,r],function(a, u){return!n&&(a[0]!==u[0]||!Et(a[1],u[1]))});return m(Q.Provider,{value:o,children:t})}function At(e, t, n, r){var l=i.exports.useContext(Q),o=l.activeKey,a=l.onActive,u=l.onInactive,s={active:o===e};return t||(s.onMouseEnter=function(d){n==null||n({key:e,domEvent:d}),a(e)},s.onMouseLeave=function(d){r==null||r({key:e,domEvent:d}),u(e)}),s}var _n=["item"];function qe(e){var t=e.item,n=G(e,_n);return Object.defineProperty(n,"item",{get:function(){return Dt(!1,"`info.item` is deprecated since we will move to function component that not provides React Node instance in future."),t}}),n}function Lt(e){var t=e.icon,n=e.props,r=e.children,l;return typeof t=="function"?l=i.exports.createElement(t,E({},n)):l=t,l||r||null}function kt(e){var t=i.exports.useContext(Q),n=t.mode,r=t.rtl,l=t.inlineIndent;if(n!=="inline")return null;var o=e;return r?{paddingRight:o*l}:{paddingLeft:o*l}}var En=[],Tt=i.exports.createContext(null);function Ye(){return i.exports.useContext(Tt)}var $t=i.exports.createContext(En);function $e(e){var t=i.exports.useContext($t);return i.exports.useMemo(function(){return e!==void 0?[].concat(ye(t),[e]):t},[t,e])}var Ft=i.exports.createContext(null),Vt=i.exports.createContext(null);function dt(e, t){return e===void 0?null:"".concat(e,"-").concat(t)}function Ut(e){var t=i.exports.useContext(Vt);return dt(t,e)}var vt=i.exports.createContext({}),Dn=["title","attribute","elementRef"],On=["style","className","eventKey","warnKey","disabled","itemIcon","children","role","onMouseEnter","onMouseLeave","onClick","onKeyDown","onFocus"],An=["active"],Ln=function(e){Cn(n,e);var t=gn(n);function n(){return bn(this,n),t.apply(this,arguments)}return In(n,[{key:"render",value:function(){var l=this.props,o=l.title,a=l.attribute,u=l.elementRef,s=G(l,Dn),d=Ot(s,["eventKey"]);return Dt(!a,"`attribute` of Menu.Item is deprecated. Please pass attribute directly."),m(Le.Item,{...a,title:typeof o=="string"?o:void 0,...d,ref:u})}}]),n}(i.exports.Component),kn=function(t){var n,r=t.style,l=t.className,o=t.eventKey;t.warnKey;var a=t.disabled,u=t.itemIcon,s=t.children,d=t.role,v=t.onMouseEnter,K=t.onMouseLeave,x=t.onClick,N=t.onKeyDown,p=t.onFocus,b=G(t,On),y=Ut(o),I=i.exports.useContext(Q),w=I.prefixCls,h=I.onItemClick,f=I.disabled,C=I.overflowDisabled,c=I.itemIcon,W=I.selectedKeys,M=I.onActive,z=i.exports.useContext(vt),j=z._internalRenderMenuItem,_="".concat(w,"-item"),H=i.exports.useRef(),q=i.exports.useRef(),Y=f||a,D=$e(o),O=function(L){return{key:o,keyPath:ye(D).reverse(),item:H.current,domEvent:L}},A=u||c,ee=At(o,Y,v,K),le=ee.active,re=G(ee,An),te=W.includes(o),ue=kt(D.length),se=function(L){if(!Y){var B=O(L);x==null||x(qe(B)),h(B)}},k=function(L){if(N==null||N(L),L.which===ne.ENTER){var B=O(L);x==null||x(qe(B)),h(B)}},T=function(L){M(o),p==null||p(L)},he={};t.role==="option"&&(he["aria-selected"]=te);var ce=ke(Ln,{ref:H,elementRef:q,role:d===null?"none":d||"menuitem",tabIndex:a?null:-1,"data-menu-id":C&&y?null:y,...b,...re,...he,component:"li","aria-disabled":a,style:E(E({},ue),r),className:pe(_,(n={},R(n,"".concat(_,"-active"),le),R(n,"".concat(_,"-selected"),te),R(n,"".concat(_,"-disabled"),Y),n),l),onClick:se,onKeyDown:k,onFocus:T,children:[s,m(Lt,{props:E(E({},t),{},{isSelected:te}),icon:A})]});return j&&(ce=j(ce,t,{selected:te})),ce};function ft(e){var t=e.eventKey,n=Ye(),r=$e(t);return i.exports.useEffect(function(){if(n)return n.registerPath(t,r),function(){n.unregisterPath(t,r)}},[r]),n?null:m(kn,{...e})}var Tn=["label","children","key","type"];function mt(e, t){return Sn(e).map(function(n, r){if(i.exports.isValidElement(n)){var l,o,a=n.key,u=(l=(o=n.props)===null||o===void 0?void 0:o.eventKey)!==null&&l!==void 0?l:a,s=u==null;s&&(u="tmp_key-".concat([].concat(ye(t),[r]).join("-")));var d={key:u,eventKey:u};return i.exports.cloneElement(n,d)}return n})}function ot(e){return(e||[]).map(function(t, n){if(t&&yn(t)==="object"){var r=t.label,l=t.children,o=t.key,a=t.type,u=G(t,Tn),s=o!=null?o:"tmp-".concat(n);return l||a==="group"?a==="group"?m(Gt,{...u,title:r,children:ot(l)},s):m(ht,{...u,title:r,children:ot(l)},s):a==="divider"?m(Wt,{...u},s):m(ft,{...u,children:r},s)}return null}).filter(function(t){return t})}function $n(e, t, n){var r=e;return t&&(r=ot(t)),mt(r,n)}function Ie(e){var t=i.exports.useRef(e);t.current=e;var n=i.exports.useCallback(function(){for(var r,l=arguments.length,o=new Array(l),a=0; a<l; a++)o[a]=arguments[a];return(r=t.current)===null||r===void 0?void 0:r.call.apply(r,[t].concat(o))},[]);return e?n:void 0}var Fn=["className","children"],Vn=function(t, n){var r=t.className,l=t.children,o=G(t,Fn),a=i.exports.useContext(Q),u=a.prefixCls,s=a.mode,d=a.rtl;return m("ul",{className:pe(u,d&&"".concat(u,"-rtl"),"".concat(u,"-sub"),"".concat(u,"-").concat(s==="inline"?"inline":"vertical"),r),...o,"data-menu-list":!0,ref:n,children:l})},pt=i.exports.forwardRef(Vn);pt.displayName="SubMenuList";var oe={adjustX:1,adjustY:1},Un={topLeft:{points:["bl","tl"],overflow:oe,offset:[0,-7]},bottomLeft:{points:["tl","bl"],overflow:oe,offset:[0,7]},leftTop:{points:["tr","tl"],overflow:oe,offset:[-4,0]},rightTop:{points:["tl","tr"],overflow:oe,offset:[4,0]}},zn={topLeft:{points:["bl","tl"],overflow:oe,offset:[0,-7]},bottomLeft:{points:["tl","bl"],overflow:oe,offset:[0,7]},rightTop:{points:["tr","tl"],overflow:oe,offset:[-4,0]},leftTop:{points:["tl","tr"],overflow:oe,offset:[4,0]}};function zt(e, t, n){if(t)return t;if(n)return n[e]||n.other}var jn={horizontal:"bottomLeft",vertical:"rightTop","vertical-left":"rightTop","vertical-right":"leftTop"};function Hn(e){var t=e.prefixCls,n=e.visible,r=e.children,l=e.popup,o=e.popupClassName,a=e.popupOffset,u=e.disabled,s=e.mode,d=e.onVisibleChange,v=i.exports.useContext(Q),K=v.getPopupContainer,x=v.rtl,N=v.subMenuOpenDelay,p=v.subMenuCloseDelay,b=v.builtinPlacements,y=v.triggerSubMenuAction,I=v.forceSubMenuRender,w=v.rootClassName,h=v.motion,f=v.defaultMotions,C=i.exports.useState(!1),c=U(C,2),W=c[0],M=c[1],z=x?E(E({},zn),b):E(E({},Un),b),j=jn[s],_=zt(s,h,f),H=E(E({},_),{},{leavedClassName:"".concat(t,"-hidden"),removeOnLeave:!1,motionAppear:!0}),q=i.exports.useRef();return i.exports.useEffect(function(){return q.current=Ae(function(){M(n)}),function(){Ae.cancel(q.current)}},[n]),m(Rn,{prefixCls:t,popupClassName:pe("".concat(t,"-popup"),R({},"".concat(t,"-rtl"),x),o,w),stretch:s==="horizontal"?"minWidth":null,getPopupContainer:K,builtinPlacements:z,popupPlacement:j,popupVisible:W,popup:l,popupAlign:a&&{offset:a},action:u?[]:[y],mouseEnterDelay:N,mouseLeaveDelay:p,onPopupVisibleChange:d,forceRender:I,popupMotion:H,children:r})}function Gn(e){var t=e.id,n=e.open,r=e.keyPath,l=e.children,o="inline",a=i.exports.useContext(Q),u=a.prefixCls,s=a.forceSubMenuRender,d=a.motion,v=a.defaultMotions,K=a.mode,x=i.exports.useRef(!1);x.current=K===o;var N=i.exports.useState(!x.current),p=U(N,2),b=p[0],y=p[1],I=x.current?n:!1;i.exports.useEffect(function(){x.current&&y(!1)},[K]);var w=E({},zt(o,d,v));r.length>1&&(w.motionAppear=!1);var h=w.onVisibleChanged;return w.onVisibleChanged=function(f){return!x.current&&!f&&y(!0),h==null?void 0:h(f)},b?null:m(Te,{mode:o,locked:!x.current,children:m(Kn,{visible:I,...w,forceRender:s,removeOnLeave:!1,leavedClassName:"".concat(u,"-hidden"),children:function(f){var C=f.className,c=f.style;return m(pt,{id:t,className:C,style:c,children:l})}})})}var Wn=["style","className","title","eventKey","warnKey","disabled","internalPopupClose","children","itemIcon","expandIcon","popupClassName","popupOffset","onClick","onMouseEnter","onMouseLeave","onTitleClick","onTitleMouseEnter","onTitleMouseLeave"],qn=["active"],Yn=function(t){var n,r=t.style,l=t.className,o=t.title,a=t.eventKey;t.warnKey;var u=t.disabled,s=t.internalPopupClose,d=t.children,v=t.itemIcon,K=t.expandIcon,x=t.popupClassName,N=t.popupOffset,p=t.onClick,b=t.onMouseEnter,y=t.onMouseLeave,I=t.onTitleClick,w=t.onTitleMouseEnter,h=t.onTitleMouseLeave,f=G(t,Wn),C=Ut(a),c=i.exports.useContext(Q),W=c.prefixCls,M=c.mode,z=c.openKeys,j=c.disabled,_=c.overflowDisabled,H=c.activeKey,q=c.selectedKeys,Y=c.itemIcon,D=c.expandIcon,O=c.onItemClick,A=c.onOpenChange,ee=c.onActive,le=i.exports.useContext(vt),re=le._internalRenderSubMenuItem,te=i.exports.useContext(Ft),ue=te.isSubPathKey,se=$e(),k="".concat(W,"-submenu"),T=j||u,he=i.exports.useRef(),ce=i.exports.useRef(),de=v||Y,L=K||D,B=z.includes(a),ae=!_&&B,Fe=ue(q,a),Ve=At(a,T,w,h),ve=Ve.active,Me=G(Ve,qn),Xe=i.exports.useState(!1),Se=U(Xe,2),Pe=Se[0],Je=Se[1],X=function(J){T||Je(J)},Ze=function(J){X(!0),b==null||b({key:a,domEvent:J})},Ue=function(J){X(!1),y==null||y({key:a,domEvent:J})},Re=i.exports.useMemo(function(){return ve||(M!=="inline"?Pe||ue([H],a):!1)},[M,ve,H,Pe,a,ue]),Qe=kt(se.length),xe=function(J){T||(I==null||I({key:a,domEvent:J}),M==="inline"&&A(a,!B))},Ke=Ie(function(F){p==null||p(qe(F)),O(F)}),Ne=function(J){M!=="inline"&&A(a,J)},et=function(){ee(a)},Ce=C&&"".concat(C,"-popup"),$=ke("div",{role:"menuitem",style:Qe,className:"".concat(k,"-title"),tabIndex:T?null:-1,ref:he,title:typeof o=="string"?o:null,"data-menu-id":_&&C?null:C,"aria-expanded":ae,"aria-haspopup":!0,"aria-controls":Ce,"aria-disabled":T,onClick:xe,onFocus:et,...Me,children:[o,m(Lt,{icon:M!=="horizontal"?L:null,props:E(E({},t),{},{isOpen:ae,isSubMenu:!0}),children:m("i",{className:"".concat(k,"-arrow")})})]}),ze=i.exports.useRef(M);if(M!=="inline"&&(ze.current=se.length>1?"vertical":M),!_){var we=ze.current;$=m(Hn,{mode:we,prefixCls:k,visible:!s&&ae&&M!=="inline",popupClassName:x,popupOffset:N,popup:m(Te,{mode:we==="horizontal"?"vertical":we,children:m(pt,{id:Ce,ref:ce,children:d})}),disabled:T,onVisibleChange:Ne,children:$})}var ge=ke(Le.Item,{role:"none",...f,component:"li",style:r,className:pe(k,"".concat(k,"-").concat(M),l,(n={},R(n,"".concat(k,"-open"),ae),R(n,"".concat(k,"-active"),Re),R(n,"".concat(k,"-selected"),Fe),R(n,"".concat(k,"-disabled"),T),n)),onMouseEnter:Ze,onMouseLeave:Ue,children:[$,!_&&m(Gn,{id:Ce,open:ae,keyPath:se,children:d})]});return re&&(ge=re(ge,t,{selected:Fe,active:Re,open:ae,disabled:T})),m(Te,{onItemClick:Ke,mode:M==="horizontal"?"vertical":M,itemIcon:de,expandIcon:L,children:ge})};function ht(e){var t=e.eventKey,n=e.children,r=$e(t),l=mt(n,r),o=Ye();i.exports.useEffect(function(){if(o)return o.registerPath(t,r),function(){o.unregisterPath(t,r)}},[r]);var a;return o?a=l:a=m(Yn,{...e,children:l}),m($t.Provider,{value:r,children:a})}var lt=ne.LEFT,ut=ne.RIGHT,st=ne.UP,Ge=ne.DOWN,We=ne.ENTER,jt=ne.ESC,De=ne.HOME,Oe=ne.END,Kt=[st,Ge,lt,ut];function Bn(e, t, n, r){var l,o,a,u,s="prev",d="next",v="children",K="parent";if(e==="inline"&&r===We)return{inlineTrigger:!0};var x=(l={},R(l,st,s),R(l,Ge,d),l),N=(o={},R(o,lt,n?d:s),R(o,ut,n?s:d),R(o,Ge,v),R(o,We,v),o),p=(a={},R(a,st,s),R(a,Ge,d),R(a,We,v),R(a,jt,K),R(a,lt,n?v:K),R(a,ut,n?K:v),a),b={inline:x,horizontal:N,vertical:p,inlineSub:x,horizontalSub:p,verticalSub:p},y=(u=b["".concat(e).concat(t?"":"Sub")])===null||u===void 0?void 0:u[r];switch(y){case s:return{offset:-1,sibling:!0};case d:return{offset:1,sibling:!0};case K:return{offset:-1,sibling:!1};case v:return{offset:1,sibling:!1};default:return null}}function Xn(e){for(var t=e; t;){if(t.getAttribute("data-menu-list"))return t;t=t.parentElement}return null}function Jn(e, t){for(var n=e||document.activeElement; n;){if(t.has(n))return n;n=n.parentElement}return null}function Ht(e, t){var n=Pn(e,!0);return n.filter(function(r){return t.has(r)})}function Nt(e, t, n){var r=arguments.length>3&&arguments[3]!==void 0?arguments[3]:1;if(!e)return null;var l=Ht(e,t),o=l.length,a=l.findIndex(function(u){return n===u});return r<0?a===-1?a=o-1:a-=1:r>0&&(a+=1),a=(a+o)%o,l[a]}function Zn(e, t, n, r, l, o, a, u, s, d){var v=i.exports.useRef(),K=i.exports.useRef();K.current=t;var x=function(){Ae.cancel(v.current)};return i.exports.useEffect(function(){return function(){x()}},[]),function(N){var p=N.which;if([].concat(Kt,[We,jt,De,Oe]).includes(p)){var b,y,I,w=function(){b=new Set,y=new Map,I=new Map;var D=o();return D.forEach(function(O){var A=document.querySelector("[data-menu-id='".concat(dt(r,O),"']"));A&&(b.add(A),I.set(A,O),y.set(O,A))}),b};w();var h=y.get(t),f=Jn(h,b),C=I.get(f),c=Bn(e,a(C,!0).length===1,n,p);if(!c&&p!==De&&p!==Oe)return;(Kt.includes(p)||[De,Oe].includes(p))&&N.preventDefault();var W=function(D){if(D){var O=D,A=D.querySelector("a");A!=null&&A.getAttribute("href")&&(O=A);var ee=I.get(D);u(ee),x(),v.current=Ae(function(){K.current===ee&&O.focus()})}};if([De,Oe].includes(p)||c.sibling||!f){var M;!f||e==="inline"?M=l.current:M=Xn(f);var z,j=Ht(M,b);p===De?z=j[0]:p===Oe?z=j[j.length-1]:z=Nt(M,b,f,c.offset),W(z)}else if(c.inlineTrigger)s(C);else if(c.offset>0)s(C,!0),x(),v.current=Ae(function(){w();var Y=f.getAttribute("aria-controls"),D=document.getElementById(Y),O=Nt(D,b);W(O)},5);else if(c.offset<0){var _=a(C,!0),H=_[_.length-2],q=y.get(H);s(H,!1),W(q)}}d==null||d(N)}}var Qn=Math.random().toFixed(5).toString().slice(2),wt=0;function er(e){var t=He(e,{value:e}),n=U(t,2),r=n[0],l=n[1];return i.exports.useEffect(function(){wt+=1;var o="".concat(Qn,"-").concat(wt);l("rc-menu-uuid-".concat(o))},[]),r}function tr(e){Promise.resolve().then(e)}var xt="__RC_UTIL_PATH_SPLIT__",_t=function(t){return t.join(xt)},nr=function(t){return t.split(xt)},ct="rc-menu-more";function rr(){var e=i.exports.useState({}),t=U(e,2),n=t[1],r=i.exports.useRef(new Map),l=i.exports.useRef(new Map),o=i.exports.useState([]),a=U(o,2),u=a[0],s=a[1],d=i.exports.useRef(0),v=i.exports.useRef(!1),K=function(){v.current||n({})},x=i.exports.useCallback(function(h, f){var C=_t(f);l.current.set(C,h),r.current.set(h,C),d.current+=1;var c=d.current;tr(function(){c===d.current&&K()})},[]),N=i.exports.useCallback(function(h, f){var C=_t(f);l.current.delete(C),r.current.delete(h)},[]),p=i.exports.useCallback(function(h){s(h)},[]),b=i.exports.useCallback(function(h, f){var C=r.current.get(h)||"",c=nr(C);return f&&u.includes(c[0])&&c.unshift(ct),c},[u]),y=i.exports.useCallback(function(h, f){return h.some(function(C){var c=b(C,!0);return c.includes(f)})},[b]),I=function(){var f=ye(r.current.keys());return u.length&&f.push(ct),f},w=i.exports.useCallback(function(h){var f="".concat(r.current.get(h)).concat(xt),C=new Set;return ye(l.current.keys()).forEach(function(c){c.startsWith(f)&&C.add(l.current.get(c))}),C},[]);return i.exports.useEffect(function(){return function(){v.current=!0}},[]),{registerPath:x,unregisterPath:N,refreshOverflowKeys:p,isSubPathKey:y,getKeyPath:b,getKeys:I,getSubPathKeys:w}}var ar=["prefixCls","rootClassName","style","className","tabIndex","items","children","direction","id","mode","inlineCollapsed","disabled","disabledOverflow","subMenuOpenDelay","subMenuCloseDelay","forceSubMenuRender","defaultOpenKeys","openKeys","activeKey","defaultActiveFirst","selectable","multiple","defaultSelectedKeys","selectedKeys","onSelect","onDeselect","inlineIndent","motion","defaultMotions","triggerSubMenuAction","builtinPlacements","itemIcon","expandIcon","overflowedIndicator","overflowedIndicatorPopupClassName","getPopupContainer","onClick","onOpenChange","onKeyDown","openAnimation","openTransitionName","_internalRenderMenuItem","_internalRenderSubMenuItem"],be=[],ir=i.exports.forwardRef(function(e, t){var n,r,l=e.prefixCls,o=l===void 0?"rc-menu":l,a=e.rootClassName,u=e.style,s=e.className,d=e.tabIndex,v=d===void 0?0:d,K=e.items,x=e.children,N=e.direction,p=e.id,b=e.mode,y=b===void 0?"vertical":b,I=e.inlineCollapsed,w=e.disabled,h=e.disabledOverflow,f=e.subMenuOpenDelay,C=f===void 0?.1:f,c=e.subMenuCloseDelay,W=c===void 0?.1:c,M=e.forceSubMenuRender,z=e.defaultOpenKeys,j=e.openKeys,_=e.activeKey,H=e.defaultActiveFirst,q=e.selectable,Y=q===void 0?!0:q,D=e.multiple,O=D===void 0?!1:D,A=e.defaultSelectedKeys,ee=e.selectedKeys,le=e.onSelect,re=e.onDeselect,te=e.inlineIndent,ue=te===void 0?24:te,se=e.motion,k=e.defaultMotions,T=e.triggerSubMenuAction,he=T===void 0?"hover":T,ce=e.builtinPlacements,de=e.itemIcon,L=e.expandIcon,B=e.overflowedIndicator,ae=B===void 0?"...":B,Fe=e.overflowedIndicatorPopupClassName,Ve=e.getPopupContainer,ve=e.onClick,Me=e.onOpenChange,Xe=e.onKeyDown;e.openAnimation,e.openTransitionName;var Se=e._internalRenderMenuItem,Pe=e._internalRenderSubMenuItem,Je=G(e,ar),X=i.exports.useMemo(function(){return $n(x,K,be)},[x,K]),Ze=i.exports.useState(!1),Ue=U(Ze,2),Re=Ue[0],Qe=Ue[1],xe=i.exports.useRef(),Ke=er(p),Ne=N==="rtl",et=i.exports.useMemo(function(){return(y==="inline"||y==="vertical")&&I?["vertical",I]:[y,!1]},[y,I]),Ce=U(et,2),$=Ce[0],ze=Ce[1],we=i.exports.useState(0),ge=U(we,2),F=ge[0],J=ge[1],tt=F>=X.length-1||$!=="horizontal"||h,qt=He(z,{value:j,postState:function(g){return g||be}}),Ct=U(qt,2),ie=Ct[0],gt=Ct[1],nt=function(g){gt(g),Me==null||Me(g)},Yt=i.exports.useState(ie),bt=U(Yt,2),Bt=bt[0],Xt=bt[1],rt=$==="inline",at=i.exports.useRef(!1);i.exports.useEffect(function(){rt&&Xt(ie)},[ie]),i.exports.useEffect(function(){!at.current||(rt?gt(Bt):nt(be))},[rt]),i.exports.useEffect(function(){return at.current=!0,function(){at.current=!1}},[]);var fe=rr(),It=fe.registerPath,yt=fe.unregisterPath,Jt=fe.refreshOverflowKeys,Mt=fe.isSubPathKey,Zt=fe.getKeyPath,Qt=fe.getKeys,en=fe.getSubPathKeys,tn=i.exports.useMemo(function(){return{registerPath:It,unregisterPath:yt}},[It,yt]),nn=i.exports.useMemo(function(){return{isSubPathKey:Mt}},[Mt]);i.exports.useEffect(function(){Jt(tt?be:X.slice(F+1).map(function(S){return S.key}))},[F,tt]);var rn=He(_||H&&((n=X[0])===null||n===void 0?void 0:n.key),{value:_}),St=U(rn,2),_e=St[0],it=St[1],an=Ie(function(S){it(S)}),on=Ie(function(){it(void 0)});i.exports.useImperativeHandle(t,function(){return{list:xe.current,focus:function(g){var P,Z=_e!=null?_e:(P=X.find(function(xn){return!xn.props.disabled}))===null||P===void 0?void 0:P.key;if(Z){var V,me,Ee;(V=xe.current)===null||V===void 0||(me=V.querySelector("li[data-menu-id='".concat(dt(Ke,Z),"']")))===null||me===void 0||(Ee=me.focus)===null||Ee===void 0||Ee.call(me,g)}}}});var ln=He(A||[],{value:ee,postState:function(g){return Array.isArray(g)?g:g==null?be:[g]}}),Pt=U(ln,2),je=Pt[0],un=Pt[1],sn=function(g){if(Y){var P=g.key,Z=je.includes(P),V;O?Z?V=je.filter(function(Ee){return Ee!==P}):V=[].concat(ye(je),[P]):V=[P],un(V);var me=E(E({},g),{},{selectedKeys:V});Z?re==null||re(me):le==null||le(me)}!O&&ie.length&&$!=="inline"&&nt(be)},cn=Ie(function(S){ve==null||ve(qe(S)),sn(S)}),Rt=Ie(function(S, g){var P=ie.filter(function(V){return V!==S});if(g)P.push(S);else if($!=="inline"){var Z=en(S);P=P.filter(function(V){return!Z.has(V)})}Et(ie,P)||nt(P)}),dn=Ie(Ve),vn=function(g, P){var Z=P!=null?P:!ie.includes(g);Rt(g,Z)},fn=Zn($,_e,Ne,Ke,xe,Qt,Zt,it,vn,Xe);i.exports.useEffect(function(){Qe(!0)},[]);var mn=i.exports.useMemo(function(){return{_internalRenderMenuItem:Se,_internalRenderSubMenuItem:Pe}},[Se,Pe]),pn=$!=="horizontal"||h?X:X.map(function(S, g){return m(Te,{overflowDisabled:g>F,children:S},S.key)}),hn=m(Le,{id:p,ref:xe,prefixCls:"".concat(o,"-overflow"),component:"ul",itemComponent:ft,className:pe(o,"".concat(o,"-root"),"".concat(o,"-").concat($),s,(r={},R(r,"".concat(o,"-inline-collapsed"),ze),R(r,"".concat(o,"-rtl"),Ne),r),a),dir:N,style:u,role:"menu",tabIndex:v,data:pn,renderRawItem:function(g){return g},renderRawRest:function(g){var P=g.length,Z=P?X.slice(-P):null;return m(ht,{eventKey:ct,title:ae,disabled:tt,internalPopupClose:P===0,popupClassName:Fe,children:Z})},maxCount:$!=="horizontal"||h?Le.INVALIDATE:Le.RESPONSIVE,ssr:"full","data-menu-list":!0,onVisibleChange:function(g){J(g)},onKeyDown:fn,...Je});return m(vt.Provider,{value:mn,children:m(Vt.Provider,{value:Ke,children:ke(Te,{prefixCls:o,rootClassName:a,mode:$,openKeys:ie,rtl:Ne,disabled:w,motion:Re?se:null,defaultMotions:Re?k:null,activeKey:_e,onActive:an,onInactive:on,selectedKeys:je,inlineIndent:ue,subMenuOpenDelay:C,subMenuCloseDelay:W,forceSubMenuRender:M,builtinPlacements:ce,triggerSubMenuAction:he,getPopupContainer:dn,itemIcon:de,expandIcon:L,onItemClick:cn,onOpenChange:Rt,children:[m(Ft.Provider,{value:nn,children:hn}),m("div",{style:{display:"none"},"aria-hidden":!0,children:m(Tt.Provider,{value:tn,children:X})})]})})})}),or=["className","title","eventKey","children"],lr=["children"],ur=function(t){var n=t.className,r=t.title;t.eventKey;var l=t.children,o=G(t,or),a=i.exports.useContext(Q),u=a.prefixCls,s="".concat(u,"-item-group");return ke("li",{...o,onClick:function(v){return v.stopPropagation()},className:pe(s,n),children:[m("div",{className:"".concat(s,"-title"),title:typeof r=="string"?r:void 0,children:r}),m("ul",{className:"".concat(s,"-list"),children:l})]})};function Gt(e){var t=e.children,n=G(e,lr),r=$e(n.eventKey),l=mt(t,r),o=Ye();return o?l:m(ur,{...Ot(n,["warnKey"]),children:l})}function Wt(e){var t=e.className,n=e.style,r=i.exports.useContext(Q),l=r.prefixCls,o=Ye();return o?null:m("li",{className:pe("".concat(l,"-item-divider"),t),style:n})}var Be=ir;Be.Item=ft;Be.SubMenu=ht;Be.ItemGroup=Gt;Be.Divider=Wt;export{Wt as D,Be as E,ft as M,ht as S,Gt as a,$e as u};
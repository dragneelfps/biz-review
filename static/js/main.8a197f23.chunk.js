(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{59:function(e,a,t){e.exports=t(78)},64:function(e,a,t){},65:function(e,a,t){},66:function(e,a,t){},78:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(8),c=t.n(r),i=(t(64),t(36)),o=t(17),u=t(122),m=t(120),v=(t(65),t(52)),d=t(123),E=t(110),s=t(124),g=t(121),w=t(125),b=t(111),f=t(112),h=t(113),O=t(114);t(66);var p=function(e){var a=e.onAddReview,t=e.isEditMode,r=e.onEditReview,c=e.onDeleteReview,i=Object(v.a)(e,["onAddReview","isEditMode","onEditReview","onDeleteReview"]),u=String((new Date).getFullYear()),m=String((new Date).getMonth()+1).padStart(2,"0"),p=String((new Date).getDate()).padStart(2,"0"),j="".concat(u,"-").concat(m,"-").concat(p),S="Expedia",R="drag@gmail.com",k=4,C="Fantasic Place to Work",D=j;t?(S=i.review.bizName,R=i.review.email,k=i.review.rating,C=i.review.comment,D=i.review.date):D=j;var y=Object(n.useState)(S),x=Object(o.a)(y,2),N=x[0],A=x[1],F=Object(n.useState)(R),z=Object(o.a)(F,2),M=z[0],B=z[1],P=Object(n.useState)(k),W=Object(o.a)(P,2),I=W[0],J=W[1],L=Object(n.useState)(C),Y=Object(o.a)(L,2),$=Y[0],q=Y[1],G=Object(n.useState)(D),H=Object(o.a)(G,2),K=H[0],Q=H[1],T=function(){return!(N.length<=0)&&!(M.length<=0)&&!(I.length<=0)&&!($.length<=0)},U=Object(n.useCallback)(function(){T()&&a({bizName:N,email:M,rating:I,comment:$,date:K})},[N,M,I,$,K]),V=Object(n.useCallback)(function(){t?c(i.review.id):(A(""),B(""),J(""),q(""),Q(j))},[j,t,i]),X=Object(n.useCallback)(function(){T()&&r({id:i.review.id,bizName:N,email:M,rating:I,comment:$,date:K})},[N,M,I,$,K]);return l.a.createElement("form",{className:"form"},l.a.createElement(d.a,{margin:"normal",label:"Business Name",value:N,onChange:function(e){A(e.target.value)}}),l.a.createElement(d.a,{margin:"normal",label:"Email",value:M,onChange:function(e){B(e.target.value)}}),l.a.createElement(E.a,{margin:"normal"},l.a.createElement(s.a,{htmlFor:"rating"},"Rating"),l.a.createElement(g.a,{value:I,onChange:function(e){J(e.target.value)},inputProps:{name:"rating",id:"rating"}},l.a.createElement(w.a,{value:1},"1 Star"),l.a.createElement(w.a,{value:2},"2 Star"),l.a.createElement(w.a,{value:3},"3 Star"),l.a.createElement(w.a,{value:4},"4 Star"),l.a.createElement(w.a,{value:5},"5 Star"))),l.a.createElement(d.a,{label:"Comment",value:$,onChange:function(e){q(e.target.value)},margin:"normal"}),l.a.createElement(d.a,{label:"Review Date",value:K,onChange:function(e){Q(e.target.value)},type:"date",margin:"normal",InputLabelProps:{shrink:!0}}),l.a.createElement("div",{className:"add-review-actions"},t?l.a.createElement(b.a,{color:"primary",variant:"extended",onClick:X},l.a.createElement(h.a,null),"Save"):l.a.createElement(b.a,{color:"primary",variant:"extended",onClick:U},l.a.createElement(f.a,null)," Add"),l.a.createElement(b.a,{color:"secondary",variant:"extended",onClick:V},l.a.createElement(O.a,null)," ",t?"Delete":"Reset")))},j=t(116),S=t(117),R=t(118),k=t(119),C=t(115);var D=function(e){var a=e.reviews,t=e.onDeleteReview,n=e.onOpenEditReview;return a.length<=0?l.a.createElement(l.a.Fragment,null):l.a.createElement(l.a.Fragment,null,a.map(function(e){return l.a.createElement(j.a,{key:e.id},l.a.createElement(S.a,null,l.a.createElement(R.a,null,e.bizName),function(e){for(var a=[],t=0;t<e;t++){var n=l.a.createElement(C.a,{key:t});a.push(n)}return a}(e.rating),l.a.createElement(R.a,null,e.comment),l.a.createElement(R.a,null,e.email)),l.a.createElement(k.a,null,l.a.createElement(b.a,{color:"primary",variant:"extended",onClick:function(){return function(e){n(e)}(e)}},l.a.createElement(h.a,null),"Edit"),l.a.createElement(b.a,{color:"secondary",variant:"extended",onClick:function(){return t(e.id)}},l.a.createElement(O.a,null),"Delete")))}))},y=0;var x=function(){var e=Object(n.useState)([]),a=Object(o.a)(e,2),t=a[0],r=a[1],c=Object(n.useState)(0),v=Object(o.a)(c,2),d=v[0],E=v[1],s=Object(n.useState)(!1),g=Object(o.a)(s,2),w=g[0],b=g[1],f=Object(n.useState)(null),h=Object(o.a)(f,2),O=h[0],j=h[1],S=function(e){var a=[];t.forEach(function(t){t.id!==e&&a.push(t)}),r(a),w&&(b(!1),j(null),E(0))};return l.a.createElement("div",null,l.a.createElement(u.a,{value:d,onChange:function(e,a){E(a),console.log(a)},centered:!0},l.a.createElement(m.a,{label:"Add Review"}),t.length>0&&l.a.createElement(m.a,{label:"All Reviews"}),w&&l.a.createElement(m.a,{label:"Edit Review"})),0===d&&l.a.createElement(p,{onAddReview:function(e){e.id=++y,console.log(e),r([].concat(Object(i.a)(t),[e]))}}),1===d&&l.a.createElement(D,{reviews:t,onDeleteReview:S,onOpenEditReview:function(e){b(!0),j(e)}}),2===d&&w&&l.a.createElement(p,{onEditReview:function(e){var a=[];t.forEach(function(t){t.id!==e.id?a.push(t):a.push(e)}),r(a)},isEditMode:w,review:O,onDeleteReview:S}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(x,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[59,1,2]]]);
//# sourceMappingURL=main.8a197f23.chunk.js.map
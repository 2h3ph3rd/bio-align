(this["webpackJsonpbio-align"]=this["webpackJsonpbio-align"]||[]).push([[0],{101:function(e,t,n){},108:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),c=n(32),r=n.n(c),l=(n(101),n(162)),s=n(159),o=n(163),j=n(80),h=n(165),b=n(2);function u(e){return Object(b.jsx)(h.a,{sx:Object(j.a)({p:3},e.style),elevation:12,children:e.children})}function d(){return Object(b.jsx)(u,{children:Object(b.jsxs)(l.a,{sx:g.container,children:[Object(b.jsx)(s.a,{sx:g.logo,src:"/bio-align/icon.png",alt:"app icon"}),Object(b.jsx)(o.a,{sx:g.title,variant:"h3",component:"h1",children:"BioAlign"})]})})}var x="80px",g={container:{display:"flex",flexDirection:"row"},logo:{width:x,height:x},title:{lineHeight:x}},O=n(12),p=n(156),m=n(154),f=n(166),v=n(153),w=n(168),C=n(82),A=n.n(C);function T(e){var t=a.useState("edit"),n=Object(O.a)(t,2),i=n[0],c=n[1];return Object(b.jsxs)(f.a,{fullWidth:!0,margin:"normal",children:[Object(b.jsx)(p.a,{id:"algorithm-label",children:"Algorithm"}),Object(b.jsxs)(v.a,{labelId:"algorithm-label",id:"algorithm",label:"Algorithm",value:i,onChange:function(e){c(e.target.value)},startAdornment:Object(b.jsx)(w.a,{position:"start",children:Object(b.jsx)(A.a,{})}),children:[Object(b.jsx)(m.a,{value:"edit",children:"Edit Distance"}),Object(b.jsx)(m.a,{value:"lcs",children:"Longest common subsequence"}),Object(b.jsx)(m.a,{value:"nw",children:"Needleman\u2013Wunsch"}),Object(b.jsx)(m.a,{value:"sw",children:"Smith\u2013Waterman"})]})]})}var y=n(157),S=n(83),k=n.n(S);function F(e){var t=a.useState(e.defaultValue),n=Object(O.a)(t,2),i=n[0],c=n[1],r=function(){return i.length>20};return Object(b.jsx)(f.a,{fullWidth:!0,margin:"normal",children:Object(b.jsx)(y.a,{onChange:function(t){var n=t.target.value.toUpperCase();c(n),e.handleChange(n)},label:e.label,value:i,error:r(),variant:"outlined",helperText:r()?"Max 20 alphabetic characters":"","data-testid":"value-input",InputProps:{startAdornment:Object(b.jsx)(w.a,{position:"start",children:Object(b.jsx)(k.a,{})})}})})}var I,B=n(36),W=n(5),M=n(160),P=n(155),V=n(167),D=n(84),L=n.n(D),_=Object(W.a)(V.a)(I||(I=Object(B.a)(["\n  width: 42px;\n"])));function z(){var e=a.useState(0),t=Object(O.a)(e,2),n=t[0],i=t[1];return Object(b.jsxs)(l.a,{sx:{mb:3},children:[Object(b.jsx)(o.a,{id:"input-slider",gutterBottom:!0,children:"Weight"}),Object(b.jsxs)(M.a,{container:!0,spacing:2,alignItems:"center",children:[Object(b.jsx)(M.a,{item:!0,children:Object(b.jsx)(L.a,{})}),Object(b.jsx)(M.a,{item:!0,xs:!0,children:Object(b.jsx)(P.a,{value:"number"===typeof n?n:0,onChange:function(e,t){i(t)},defaultValue:30,step:1,min:-10,max:10})}),Object(b.jsx)(M.a,{item:!0,children:Object(b.jsx)(_,{value:n,variant:"outlined",size:"small",onChange:function(e){i(""===e.target.value?"":Number(e.target.value))},onBlur:function(){n<0?i(0):n>10&&i(1)},inputProps:{step:1,min:-10,max:10,type:"number","aria-labelledby":"input-slider"}})})]})]})}function E(){return Object(b.jsxs)(u,{children:[Object(b.jsx)(T,{}),Object(b.jsx)(F,{label:"First word",defaultValue:"ATTACTC",handleChange:H}),Object(b.jsx)(F,{label:"Second word",defaultValue:"ATATGTC",handleChange:J}),Object(b.jsx)(z,{}),Object(b.jsx)(z,{}),Object(b.jsx)(z,{})]})}function H(e){console.log(e)}function J(e){console.log(e)}var N=n(164),U=n(85),q=n.n(U);function G(){var e=Object(b.jsx)(N.a,{underline:"none",target:"_blank",href:"https://mui.com",children:"MUI"}),t=Object(b.jsx)(N.a,{underline:"none",target:"_blank",href:"https://reactjs.org/",children:"React.js"}),n=Object(b.jsx)(N.a,{underline:"none",display:"inline",color:"red",children:"\u2665"});return Object(b.jsx)(u,{style:K.container,children:Object(b.jsxs)(l.a,{sx:K.inner,children:[Object(b.jsx)(l.a,{}),Object(b.jsx)(l.a,{sx:K.center,children:Object(b.jsxs)(o.a,{sx:K.text,children:["Made with ",n," using ",t," and ",e]})}),Object(b.jsx)(l.a,{sx:K.right,children:Object(b.jsx)(q.a,{sx:K.icon,fontSize:"large",onClick:R})})]})})}function R(){window.open("https://github.com/francescopastore/bio-align","_blank")}var K={container:{position:"absolute",top:"98vh",left:"5vw",width:"90vw",height:"5vh"},inner:{display:"grid",gridTemplateColumns:"repeat(3, 1fr)"},text:{lineHeight:"5vh"},icon:{cursor:"pointer",height:"100%"},center:{textAlign:"center"},right:{textAlign:"right"}};var Q={container:{position:"absolute",top:"10vh",left:"5vw",width:"20vw"},inner:{mb:3}},X=function(){return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsxs)(l.a,{sx:Q.container,children:[Object(b.jsx)(l.a,{sx:Q.inner,children:Object(b.jsx)(d,{})}),Object(b.jsx)(E,{})]}),Object(b.jsx)(G,{})]})},Y=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,170)).then((function(t){var n=t.getCLS,a=t.getFID,i=t.getFCP,c=t.getLCP,r=t.getTTFB;n(e),a(e),i(e),c(e),r(e)}))};r.a.render(Object(b.jsx)(i.a.StrictMode,{children:Object(b.jsx)(X,{})}),document.getElementById("root")),Y()}},[[108,1,2]]]);
//# sourceMappingURL=main.e222b10d.chunk.js.map
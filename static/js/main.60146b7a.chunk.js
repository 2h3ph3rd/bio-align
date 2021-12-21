(this["webpackJsonpbio-align"]=this["webpackJsonpbio-align"]||[]).push([[0],{107:function(t,e,a){},115:function(t,e,a){"use strict";a.r(e);var n=a(0),i=a.n(n),r=a(24),l=a.n(r),s=(a(107),a(164)),c=a(165),h=a(2);function o(t){return Object(h.jsx)(c.a,{sx:{p:1,width:t.width,height:t.height},elevation:4,children:Object(h.jsx)("img",{style:{width:"100%",height:"100%",objectFit:"contain"},src:"/bio-align/header.png",alt:"header"})})}var u=a(166),d=a(13),g=a(160),b=a(159),j=a(168),f=a(157),v=a(169),p=a(82),x=a.n(p);function m(t){var e=n.useState(t.default),a=Object(d.a)(e,2),i=a[0],r=a[1],l=t.options.map((function(t,e){return Object(h.jsx)(b.a,{value:e,children:t.label},e)}));return Object(h.jsxs)(j.a,{fullWidth:!0,margin:"normal",children:[Object(h.jsx)(g.a,{id:"algorithm-label",children:"Algorithm"}),Object(h.jsx)(f.a,{labelId:"algorithm-label",id:"algorithm",label:"Algorithm",value:i,onChange:function(e){var a=e.target.value;r(a),t.handle(a)},"data-testid":"value-input",startAdornment:Object(h.jsx)(v.a,{position:"start",children:Object(h.jsx)(x.a,{})}),children:l})]})}var O=a(161),W=a(170),S=a(83),w=a.n(S),C=a(84),y=a.n(C);function A(t){var e=n.useState(t.default),a=Object(d.a)(e,2),i=a[0],r=a[1],l=function(e){r(e),s(e)||t.handle(e)},s=function(t){return t.length>8};return Object(h.jsx)(j.a,{fullWidth:!0,margin:"normal",children:Object(h.jsx)(O.a,{onChange:function(t){var e=t.target.value.toUpperCase();l(e)},label:t.label,value:i,variant:"outlined",error:s(i),helperText:s(i)?"Max 8 alphabetic characters":"","data-testid":"value-input",InputProps:{startAdornment:Object(h.jsx)(v.a,{position:"start",children:Object(h.jsx)(w.a,{})}),endAdornment:Object(h.jsx)(v.a,{position:"end",children:Object(h.jsx)(W.a,{"data-testid":"shuffle-button",onClick:function(){var t=function(t,e){for(var a="",n=t+Math.round(Math.random()*(e-t)),i=0;i<n;i++){switch(Math.round(3*Math.random())){default:a+="A";break;case 1:a+="C";break;case 2:a+="G";break;case 3:a+="T"}}return a}(4,8);l(t)},children:Object(h.jsx)(y.a,{})})})}})})}var k=a(85),M=a.n(k);function T(t){var e=n.useState(t.default),a=Object(d.a)(e,2),i=a[0],r=a[1];n.useEffect((function(){r(t.default)}),[t.default]);var l=function(t){return isNaN(parseInt(t))&&"-"!==t||t<-10||t>10};return Object(h.jsx)(j.a,{margin:"normal",sx:t.style,children:Object(h.jsx)(O.a,{disabled:t.disabled,onChange:function(e){var a=e.target.value;r(a),l(a)||isNaN(a)||t.handle(parseInt(a))},label:t.label,value:i,error:l(i),helperText:(l(i),""),variant:"outlined","data-testid":"value-input",InputProps:{startAdornment:Object(h.jsx)(v.a,{position:"start",children:Object(h.jsx)(M.a,{})})}})})}var P={algorithms:[{label:"Levenshtein distance",calculate:function(t){var e=[],a="-"+t.firstString,n="-"+t.secondString;return e=function(t,e,a,n){t[0]=[{value:0,isPath:!0}];for(var i=1;i<a.length;i++){var r=n+t[0][i-1].value;t[0].push({value:r,left:!0})}for(var l=1;l<e.length;l++){t[l]=[];var s=n+t[l-1][0].value;t[l].push({value:s,top:!0})}return t}(e,a,n,t.gapWeight),e=function(t,e,a,n){for(var i=1;i<e.length;i++)for(var r=1;r<a.length;r++){var l=t[i][r-1].value+1,s=t[i-1][r].value+1,c=0,h=l;s<h&&(h=s),(c=e[i]===a[r]?t[i-1][r-1].value:t[i-1][r-1].value+1)<h&&(h=c),t[i].push({value:h,left:l===h,top:s===h,diag:c===h})}return t}(e,a,n),e=function(t,e,a){var n=e.length-1,i=a.length-1;for(;0!==n||0!==i;)t[n][i].isPath=!0,t[n][i].diag?(n--,i--):t[n][i].left?i--:n--;return t}(e,a,n),e},disableWeights:!0,matchWeight:0,mismatchWeight:1,gapWeight:1},{label:"Needleman-Wunsch",calculate:function(t){var e=[],a="-"+t.firstString,n="-"+t.secondString;return e=function(t,e,a,n){t[0]=[{value:0,isPath:!0}];for(var i=1;i<a.length;i++){var r=n+t[0][i-1].value;t[0].push({value:r,left:!0})}for(var l=1;l<e.length;l++){t[l]=[];var s=n+t[l-1][0].value;t[l].push({value:s,top:!0})}return t}(e,a,n,t.gapWeight),e=function(t,e,a,n){for(var i=1;i<e.length;i++)for(var r=1;r<a.length;r++){var l=n.gapWeight+t[i][r-1].value,s=n.gapWeight+t[i-1][r].value,c=0,h=l;s>h&&(h=s),(c=e[i]===a[r]?n.matchWeight+t[i-1][r-1].value:n.mismatchWeight+t[i-1][r-1].value)>h&&(h=c),t[i].push({value:h,left:h===l,top:h===s,diag:h===c})}return t}(e,a,n,t),e=function(t,e,a){var n=e.length-1,i=a.length-1;for(;0!==n||0!==i;)t[n][i].isPath=!0,t[n][i].diag?(n--,i--):t[n][i].left?i--:n--;return t}(e,a,n),e},disableWeights:!1,matchWeight:1,mismatchWeight:-1,gapWeight:-1},{label:"Longest Common Subsequence",calculate:function(t){var e=[],a="-"+t.firstString,n="-"+t.secondString;e=function(t,e,a){t[0]=[{value:0}];for(var n=1;n<a.length;n++)t[0].push({value:0});for(var i=1;i<e.length;i++)t[i]=[],t[i].push({value:0});return t}(e,a,n);var i=function(t,e,a){for(var n=0,i=1;i<e.length;i++)for(var r=1;r<a.length;r++){var l=t[i][r-1].value,s=t[i-1][r].value,c=0,h=l;s>h&&(h=s),(c=e[i]===a[r]?t[i-1][r-1].value+1:t[i-1][r-1].value)>h&&(h=c),h>n&&(n=h),t[i].push({value:h,left:0!==h&&h===l,top:0!==h&&h===s,diag:0!==h&&h===c})}return{table:t,tableMax:n}}(e,a,n);return e=function(t,e,a,n){for(var i=0,r=0,l=1;l<e.length;l++){for(var s=1;s<a.length;s++)if(t[l][s].value===n){i=l,r=s;break}if(0!==i)break}for(;0!==t[i][r].value&&0!==i&&0!==r;)t[i][r].isPath=!0,t[i][r].diag?(i--,r--):t[i][r].left?r--:i--;return t}(e=i.table,a,n,i.tableMax),e},disableWeights:!0,matchWeight:0,mismatchWeight:0,gapWeight:0}]},F=a(37),I=a(59),N={algorithm:0,firstString:"ATTACTC",secondString:"ATATGTC",disableWeights:P.algorithms[0].disableWeights,matchWeight:P.algorithms[0].matchWeight,mismatchWeight:P.algorithms[0].mismatchWeight,gapWeight:P.algorithms[0].gapWeight},G=Object(I.b)({name:"counter",initialState:N,reducers:{setAlgorithm:function(t,e){t.algorithm=e.payload;var a=P.algorithms[t.algorithm];t.disableWeights=a.disableWeights,t.matchWeight=a.matchWeight,t.mismatchWeight=a.mismatchWeight,t.gapWeight=a.gapWeight},setFirstString:function(t,e){t.firstString=e.payload},setSecondString:function(t,e){t.secondString=e.payload},setMatchWeight:function(t,e){t.matchWeight=e.payload},setMismatchWeight:function(t,e){t.mismatchWeight=e.payload},setGapWeight:function(t,e){t.gapWeight=e.payload}}}),z=G.actions,L=z.setAlgorithm,_=z.setFirstString,B=z.setSecondString,E=z.setMatchWeight,J=z.setMismatchWeight,U=z.setGapWeight,q=G.reducer;function D(){var t=Object(F.b)(),e=Object(F.c)((function(t){return t.form}));return Object(h.jsxs)(c.a,{sx:H.container,elevation:4,children:[Object(h.jsx)(m,{options:P.algorithms,default:0,handle:function(e){return t(L(e))}}),Object(h.jsx)(A,{label:"First string",default:e.firstString,handle:function(e){return t(_(e))}}),Object(h.jsx)(A,{label:"Second string",default:e.secondString,handle:function(e){return t(B(e))}}),Object(h.jsxs)(s.a,{sx:{display:"flex",justifyContent:"space-around"},children:[Object(h.jsx)(T,{label:"Match",default:e.matchWeight,handle:function(e){return t(E(e))},disabled:e.disableWeights,style:{mr:2}}),Object(h.jsx)(T,{label:"Mismatch",default:e.mismatchWeight,handle:function(e){return t(J(e))},disabled:e.disableWeights,style:{mr:2}}),Object(h.jsx)(T,{label:"Gap",default:e.gapWeight,handle:function(e){return t(U(e))},disabled:e.disableWeights})]}),Object(h.jsx)(u.a,{variant:"caption",children:"Only weights between -10 and 10 are allowed"})]})}var H={container:{p:3}},R=a(155);function K(t){return Q.paper.backgroundColor=t.backgroundColor,Object(h.jsx)(c.a,{sx:Q.paper,children:t.children})}var Q={paper:{p:1,width:50,height:50,mr:2,mb:2,alignItems:"center",display:"flex",justifyContent:"center"}};function V(t){return Object(h.jsx)(K,{backgroundColor:R.a.A100,children:Object(h.jsx)(u.a,{sx:{fontWeight:"bold"},children:t.letter})})}var X=a(72),Y=a.n(X),Z=a(87),$=a.n(Z),tt=a(81),et=a(156),at=tt.a.A100,nt=et.a.A200;function it(t){var e=t.cell,a=e.isPath?nt:at;return Object(h.jsx)(K,{backgroundColor:a,children:Object(h.jsxs)(s.a,{sx:lt.boxNumber,children:[Object(h.jsx)(Y.a,{sx:{transform:"rotate(-45deg)",fontSize:24,visibility:rt(e.diag)}}),Object(h.jsx)(Y.a,{sx:{fontSize:24,visibility:rt(e.top)}}),Object(h.jsx)($.a,{sx:{fontSize:24,visibility:rt(e.left)}}),Object(h.jsx)(u.a,{variant:"h6",children:e.value})]})})}function rt(t){return t?"visible":"hidden"}var lt={boxNumber:{display:"flex",justifyContent:"space-around",flexWrap:"wrap"}};function st(){var t=Object(F.c)((function(t){return t.form}));return Object(h.jsxs)(s.a,{sx:ut.container,children:[ht(t),ct(t)]})}function ct(t){for(var e=P.algorithms[t.algorithm].calculate(t),a=[],n="-"+t.firstString,i=0;i<n.length;i++){var r=[];r.push(ot(n[i],"left"+i,!1));for(var l=0;l<e[i].length;l++)r.push(Object(h.jsx)(s.a,{children:Object(h.jsx)(it,{cell:e[i][l]})},l));a.push(Object(h.jsx)(s.a,{sx:ut.row,children:r},i))}return a}function ht(t){var e=[];e.push(ot("","hidden",!0)),e.push(ot("-","top empty",!1));for(var a=0;a<t.secondString.length;a++)e.push(ot(t.secondString[a],"top"+a,!1));return Object(h.jsx)(s.a,{sx:ut.row,children:e},"top")}function ot(t,e,a){var n={};return a&&(n.visibility="hidden"),Object(h.jsx)(s.a,{sx:n,children:Object(h.jsx)(V,{letter:t})},e)}var ut={row:{display:"flex"}},dt=a(167),gt=a(88),bt=a.n(gt);function jt(){var t=Object(h.jsx)(dt.a,{underline:"none",target:"_blank",href:"https://mui.com",children:"MUI"}),e=Object(h.jsx)(dt.a,{underline:"none",target:"_blank",href:"https://reactjs.org/",children:"React.js"}),a=Object(h.jsx)(dt.a,{underline:"none",display:"inline",color:"red",children:"\u2665"});return Object(h.jsx)(c.a,{sx:vt.container,elevation:4,children:Object(h.jsxs)(s.a,{sx:vt.inner,children:[Object(h.jsx)(s.a,{}),Object(h.jsx)(s.a,{sx:vt.center,children:Object(h.jsxs)(u.a,{sx:vt.text,children:["Made with ",a," using ",e," and ",t]})}),Object(h.jsx)(s.a,{sx:vt.right,children:Object(h.jsx)(bt.a,{sx:vt.icon,fontSize:"large",onClick:ft})})]})})}function ft(){window.open("https://github.com/francescopastore/bio-align","_blank")}var vt={container:{p:3},inner:{display:"grid",gridTemplateColumns:"repeat(3, 1fr)"},text:{lineHeight:"5vh"},icon:{cursor:"pointer",height:"100%"},center:{textAlign:"center"},right:{textAlign:"right"}};var pt={headerContainer:{position:"absolute",top:"10vh",left:"8.5vw",width:"18vw",height:"10vh"},leftContainer:{position:"absolute",top:"25vh",left:"5vw",width:"25vw"},rightContainer:{position:"absolute",top:"10vh",left:"35vw",width:"60vw"},inner:{mb:3},footer:{position:"absolute",top:"98vh",left:"5vw",width:"90vw"}},xt=function(){return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(s.a,{sx:pt.headerContainer,children:Object(h.jsx)(s.a,{sx:pt.inner,children:Object(h.jsx)(o,{width:pt.headerContainer.width,height:pt.headerContainer.height})})}),Object(h.jsx)(s.a,{sx:pt.leftContainer,children:Object(h.jsx)(D,{})}),Object(h.jsx)(s.a,{sx:pt.rightContainer,children:Object(h.jsx)(st,{})}),Object(h.jsx)(s.a,{sx:pt.footer,children:Object(h.jsx)(jt,{})})]})},mt=function(t){t&&t instanceof Function&&a.e(3).then(a.bind(null,173)).then((function(e){var a=e.getCLS,n=e.getFID,i=e.getFCP,r=e.getLCP,l=e.getTTFB;a(t),n(t),i(t),r(t),l(t)}))},Ot=Object(I.a)({reducer:{form:q}});l.a.render(Object(h.jsx)(i.a.StrictMode,{children:Object(h.jsx)(F.a,{store:Ot,children:Object(h.jsx)(xt,{})})}),document.getElementById("root")),mt()}},[[115,1,2]]]);
//# sourceMappingURL=main.60146b7a.chunk.js.map
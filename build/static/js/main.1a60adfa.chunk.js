(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{145:function(e,a,t){},147:function(e,a,t){},236:function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),l=t(22),i=t.n(l),s=(t(145),t(146),t(147),t(100)),r=t(97),u=t.n(r),m=t(243),b=t(136),j=t(240),d=t(244),o=t(238),p=t(239),v=t(242),h=t(245),x=t(134),g=t(241),O=t(7),T=g.a.Title,I=function(e){var a=e.result;return 1===a?Object(O.jsx)(T,{level:4,children:"\u2705 YES \u2705 This patient may need a treatment replan "}):0===a?Object(O.jsx)(T,{level:4,children:"\u274c No \u274c  This patient may not need a treatment replan"}):Object(O.jsx)(T,{level:4,children:"Loading..."})},N=t(99),S=t.n(N),f=t(129),y=t(130),V=t.n(y),q="https://replanning-backend.herokuapp.com";function D(){return(D=Object(f.a)(S.a.mark((function e(a){var t,n,c,l;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=["cm0","cmx","cn0","cn1","cn2","ct1","ct1a","ct2","ct2b","ct3","ct4","ebv+","m0","m1","mx","n0","n1","n1b","n2","n2a","n2b","n2c","n3b","nx","p16+","p16-","pn0","pn1","pn2b","pn3b","pnx","pt2","pt3","pt4a","r1","stgi","stgii","stgiia","stgiii","stgiiia","stgiv","stgiva","stgivb","stgx","t0","t1","t1a","t1b","t2","t2a","t2m","t3","t3a","t3b","t4","t4a","t4b","tx"],n=a.staging.map((function(e){return e.toLowerCase()})),c=t.map((function(e){return n.includes(e)?1:0})),l={neckWidth:a.neckWidth,neckDepth:a.neckDepth,bodyEqSphDi:a.bodyEqSphDi,bodyVolume:a.bodyVolume,weight:a.weight,ctvVol:a.ctvVol,ctvEqdDi:a.ctvEqdDi,ptvVol:a.ptvVol,ptvEqdDi:a.ptvEqdDi,staging:c},e.abrupt("return",V.a.post("".concat(q,"/api"),l));case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var E=m.a.Option,k=[{value:"cM0",name:"cM0"},{value:"cMx",name:"cMx"},{value:"cN0",name:"cN0"},{value:"cN1",name:"cN1"},{value:"cN2",name:"cN2"},{value:"cT1",name:"cT1"},{value:"cT1a",name:"cT1a"},{value:"cT2",name:"cT2"},{value:"cT2b",name:"cT2b"},{value:"cT3",name:"cT3"},{value:"cT4",name:"cT4"},{value:"EBV+",name:"EBV+"},{value:"M0",name:"M0"},{value:"M1",name:"M1"},{value:"Mx",name:"Mx"},{value:"N0",name:"N0"},{value:"N1",name:"N1"},{value:"N1b",name:"N1b"},{value:"N2",name:"N2"},{value:"N2a",name:"N2a"},{value:"N2b",name:"N2b"},{value:"N2c",name:"N2c"},{value:"N3b",name:"N3b"},{value:"Nx",name:"Nx"},{value:"p16+",name:"p16+"},{value:"p16-",name:"p16-"},{value:"pN0",name:"pN0"},{value:"pN1",name:"pN1"},{value:"pN2b",name:"pN2b"},{value:"pN3b",name:"pN3b"},{value:"pNx",name:"pNx"},{value:"pT2",name:"pT2"},{value:"pT3",name:"pT3"},{value:"pT4a",name:"pT4a"},{value:"R1",name:"R1"},{value:"StgI",name:"StgI"},{value:"StgII",name:"StgII"},{value:"StgIIa",name:"StgIIa"},{value:"StgIII",name:"StgIII"},{value:"StgIIIa",name:"StgIIIa"},{value:"StgIV",name:"StgIV"},{value:"StgIVa",name:"StgIVa"},{value:"StgIVb",name:"StgIVb"},{value:"Stgx",name:"Stgx"},{value:"T0",name:"T0"},{value:"T1",name:"T1"},{value:"T1a",name:"T1a"},{value:"T2",name:"T2"},{value:"T2a",name:"T2a"},{value:"T3",name:"T3"},{value:"T3a",name:"T3a"},{value:"T3b",name:"T3b"},{value:"T4",name:"T4"},{value:"T4a",name:"T4a"},{value:"T4b",name:"T4b"},{value:"Tx",name:"Tx"}],M=function(){var e=Object(n.useState)(""),a=Object(s.a)(e,2),t=a[0],l=a[1],i=c.a.useState(!1),r=Object(s.a)(i,2),g=r[0],T=r[1];return Object(O.jsx)("div",{className:u.a.container,children:Object(O.jsxs)("div",{className:u.a.inputContainer,children:[Object(O.jsx)("h1",{className:"title",children:"Radiotherapy Replanning Suggestion System"}),Object(O.jsx)("div",{style:{paddingLeft:"2%"},children:Object(O.jsxs)(j.a,{onFinish:function(e){(function(e){return D.apply(this,arguments)})(e).then((function(e){var a=e.data.prediction;l(a),b.b.success("Sucessfully submit",3)}),(function(e){b.b.error("Failed to submit data, please try again.",3),console.log(e)})),console.log("Success:",e),T(!0)},children:[Object(O.jsx)(j.a.Item,{name:"name",label:"Name / ID",children:Object(O.jsx)(d.a,{})}),Object(O.jsxs)(o.a,{gutter:{xs:8,sm:16,md:24,lg:32},children:[Object(O.jsx)(p.a,{span:12,children:Object(O.jsx)(j.a.Item,{name:"weight",label:"Weight (kg)",rules:[{required:!0}],children:Object(O.jsx)(v.a,{})})}),Object(O.jsx)(p.a,{span:12,children:Object(O.jsx)(j.a.Item,{name:"neckWidth",label:"Neck Width (cm)",rules:[{required:!0}],children:Object(O.jsx)(v.a,{})})}),Object(O.jsx)(p.a,{span:12,children:Object(O.jsx)(j.a.Item,{name:"neckDepth",label:"Neck Depth (cm)",rules:[{required:!0}],children:Object(O.jsx)(v.a,{})})}),Object(O.jsx)(p.a,{span:12,children:Object(O.jsx)(j.a.Item,{name:"bodyVolume",label:"Body Volume (cc)",rules:[{required:!0}],children:Object(O.jsx)(v.a,{})})}),Object(O.jsx)(p.a,{span:12,children:Object(O.jsx)(j.a.Item,{name:"bodyEqSphDi",label:"Body Eq Sph Di (cm)",rules:[{required:!0}],children:Object(O.jsx)(v.a,{})})})]}),Object(O.jsxs)(o.a,{gutter:{xs:8,sm:16,md:24,lg:32},children:[Object(O.jsx)(p.a,{span:12,children:Object(O.jsx)(h.a,{title:"the radiotherapy clinical target volume",content:"Please use the min value",children:Object(O.jsx)(j.a.Item,{name:"ctvVol",label:"CTV Vol",rules:[{required:!0}],children:Object(O.jsx)(v.a,{})})})}),Object(O.jsx)(p.a,{span:12,children:Object(O.jsx)(j.a.Item,{name:"ctvEqdDi",label:"CTV Eqd Di",rules:[{required:!0}],children:Object(O.jsx)(v.a,{})})}),Object(O.jsx)(p.a,{span:12,children:Object(O.jsx)(h.a,{title:"the radiotherapy planning target volume",content:"Please use the min value",children:Object(O.jsx)(j.a.Item,{name:"ptvVol",label:"PTV Vol",rules:[{required:!0}],children:Object(O.jsx)(v.a,{})})})}),Object(O.jsx)(p.a,{span:12,children:Object(O.jsx)(j.a.Item,{name:"ptvEqdDi",label:"PTV Eqd Di",rules:[{required:!0}],children:Object(O.jsx)(v.a,{})})})]}),Object(O.jsx)(h.a,{title:"the stages of cancer",content:"You can choose multiple options",children:Object(O.jsx)(j.a.Item,{name:"staging",rules:[{required:!0}],label:"Staging",children:Object(O.jsx)(m.a,{mode:"multiple",placeholder:"Please select",style:{width:"100%"},children:k.map((function(e){return Object(O.jsx)(E,{value:e.value,children:e.name})}))})})}),Object(O.jsx)(j.a.Item,{children:Object(O.jsxs)(o.a,{justify:"center",children:[Object(O.jsx)(p.a,{span:4,children:Object(O.jsx)(x.a,{type:"primary",htmlType:"submit",children:"Submit"})}),Object(O.jsx)(p.a,{span:4,children:Object(O.jsx)(x.a,{onClick:function(){window.location.reload(!1)},children:"Reset"})})]})})]})}),g?Object(O.jsx)(I,{result:t}):null]})})};var w=function(){return Object(O.jsx)(M,{})},C=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,246)).then((function(a){var t=a.getCLS,n=a.getFID,c=a.getFCP,l=a.getLCP,i=a.getTTFB;t(e),n(e),c(e),l(e),i(e)}))};i.a.render(Object(O.jsx)(c.a.StrictMode,{children:Object(O.jsx)(w,{})}),document.getElementById("root")),C()},97:function(e,a,t){e.exports={container:"MainPage_container__2eNq4",inputContainer:"MainPage_inputContainer__1MWcd",title:"MainPage_title__1IIcw"}}},[[236,1,2]]]);
//# sourceMappingURL=main.1a60adfa.chunk.js.map
"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[699],{699:function(e,n,t){t.r(n),t.d(n,{default:function(){return X}});var a=t(4224),r=t(9434),i=t(1413),s=t(4942),c=t(4925),o=t(9439),l=t(4363),u=t(9886),d=t(7200),m=t(7872),f=t(9219),p=t(9477),h=t(1999),x=t(184),v=["children","styleType","stylePosition","spacing"],y=["as"],g=["as"],Z=(0,u.k)({name:"ListStylesContext",errorMessage:"useListStyles returned is 'undefined'. Seems you forgot to wrap the components in \"<List />\" "}),j=(0,o.Z)(Z,2),b=j[0],w=j[1],N=(0,m.G)((function(e,n){var t=(0,f.jC)("List",e),a=(0,p.Lr)(e),r=a.children,o=a.styleType,l=void 0===o?"none":o,u=a.stylePosition,m=a.spacing,y=(0,c.Z)(a,v),g=(0,d.W)(r),Z=m?(0,s.Z)({},"& > *:not(style) ~ *:not(style)",{mt:m}):{};return(0,x.jsx)(b,{value:t,children:(0,x.jsx)(h.m.ul,(0,i.Z)((0,i.Z)({ref:n,listStyleType:l,listStylePosition:u,role:"list",__css:(0,i.Z)((0,i.Z)({},t.container),Z)},y),{},{children:g}))})}));N.displayName="List",(0,m.G)((function(e,n){e.as;var t=(0,c.Z)(e,y);return(0,x.jsx)(N,(0,i.Z)({ref:n,as:"ol",styleType:"decimal",marginStart:"1em"},t))})).displayName="OrderedList",(0,m.G)((function(e,n){e.as;var t=(0,c.Z)(e,g);return(0,x.jsx)(N,(0,i.Z)({ref:n,as:"ul",styleType:"initial",marginStart:"1em"},t))})).displayName="UnorderedList";var C=(0,m.G)((function(e,n){var t=w();return(0,x.jsx)(h.m.li,(0,i.Z)((0,i.Z)({ref:n},e),{},{__css:t.item}))}));C.displayName="ListItem";var L=(0,m.G)((function(e,n){var t=w();return(0,x.jsx)(l.J,(0,i.Z)((0,i.Z)({ref:n,role:"presentation"},e),{},{__css:t.icon}))}));L.displayName="ListIcon";var k=t(2791);function _(e){var n=e.viewBox,t=void 0===n?"0 0 24 24":n,a=e.d,r=e.displayName,s=e.defaultProps,c=void 0===s?{}:s,o=k.Children.toArray(e.path),u=(0,m.G)((function(e,n){return(0,x.jsx)(l.J,(0,i.Z)((0,i.Z)((0,i.Z)({ref:n,viewBox:t},c),e),{},{children:o.length?o:(0,x.jsx)("path",{fill:"currentColor",d:a})}))}));return u.displayName=r,u}var z=_({displayName:"CheckCircleIcon",d:"M12,0A12,12,0,1,0,24,12,12.014,12.014,0,0,0,12,0Zm6.927,8.2-6.845,9.289a1.011,1.011,0,0,1-1.43.188L5.764,13.769a1,1,0,1,1,1.25-1.562l4.076,3.261,6.227-8.451A1,1,0,1,1,18.927,8.2Z"}),A=_({displayName:"DeleteIcon",path:(0,x.jsx)("g",{fill:"currentColor",children:(0,x.jsx)("path",{d:"M19.452 7.5H4.547a.5.5 0 00-.5.545l1.287 14.136A2 2 0 007.326 24h9.347a2 2 0 001.992-1.819L19.95 8.045a.5.5 0 00-.129-.382.5.5 0 00-.369-.163zm-9.2 13a.75.75 0 01-1.5 0v-9a.75.75 0 011.5 0zm5 0a.75.75 0 01-1.5 0v-9a.75.75 0 011.5 0zM22 4h-4.75a.25.25 0 01-.25-.25V2.5A2.5 2.5 0 0014.5 0h-5A2.5 2.5 0 007 2.5v1.25a.25.25 0 01-.25.25H2a1 1 0 000 2h20a1 1 0 000-2zM9 3.75V2.5a.5.5 0 01.5-.5h5a.5.5 0 01.5.5v1.25a.25.25 0 01-.25.25h-5.5A.25.25 0 019 3.75z"})})}),P=t(93),I=function(e){var n=e.id,t=e.name,i=e.number,s=e.onDelite,c=(0,r.v9)(P.M6);return(0,x.jsxs)(C,{children:[(0,x.jsx)(L,{as:z,color:"green.500"}),t," : ",i,(0,x.jsx)(a.z,{colorScheme:"telegram",size:"xs",type:"button",ml:"10px",disabled:c,onClick:function(){return s(n)},children:(0,x.jsx)(l.J,{as:A,ml:0,color:"white.500"})})]})},G=t(8208),S=t(5218),M=function(){var e=(0,r.v9)(P.BI),n=(0,r.v9)(P.Gx),t=(0,r.I0)(),a=function(n){var a=e.find((function(e){return e.id===n}));t((0,G.GK)(n)).unwrap().then((function(){return(0,S.ZP)("\u274c ".concat(a.name," delited from contacts list"))})).catch((function(e){return S.ZP.error(e)}))},i=function(){var t=n.toLowerCase();return e.filter((function(e){return e.name.toLowerCase().includes(t)}))}();return(0,x.jsx)(N,{spacing:4,mt:"20px",children:i.map((function(e){var n=e.id,t=e.name,r=e.number;return(0,x.jsx)(I,{id:n,name:t,number:r,onDelite:a},n)}))})},T=t(7762),B=t(5705),F=t(876),J=t(7697),E={name:"",number:""},H=function(){var e=(0,r.v9)(P.BI),n=(0,r.v9)(P.M6),t=(0,r.I0)();return(0,x.jsx)(B.J9,{initialValues:E,onSubmit:function(n,a){var r,s=a.resetForm,c=[],o=(0,T.Z)(e);try{for(o.s();!(r=o.n()).done;){var l=r.value;c.push(l.name.toLowerCase())}}catch(d){o.e(d)}finally{o.f()}if(c.includes(n.name.toLowerCase()))(0,S.ZP)("\ud83d\ude31 ".concat(n.name," already in contacts list"));else{var u=(0,i.Z)({},n);t((0,G.uK)(u)).unwrap().then((function(){return(0,S.ZP)("\u2705 ".concat(n.name," added"))})).catch((function(e){return S.ZP.error(e)})),s()}},children:(0,x.jsxs)(F.G,{children:[(0,x.jsx)(J.I,{as:B.gN,_active:{transform:"scale(1.5)"},width:["100%","70%","40%"],placeholder:"Enter Name \ud83d\ude4b\ud83c\udffc\u200d\u2640\ufe0f",variant:"filled",type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0}),(0,x.jsx)(J.I,{as:B.gN,_active:{transform:"scale(1.5)"},width:["100%","70%","40%"],placeholder:"Enter Phone-Number \ud83d\udcf2",variant:"filled",type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0}),(0,x.jsx)(a.z,{colorScheme:"telegram",_active:{transform:"scale(1.5)"},type:"submit",disabled:n,children:"Add contact"})]})})},q=t(5946),D=t(3767),K=function(){var e=(0,r.v9)(P.Gx),n=(0,r.I0)();return(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(q.X,{size:"md",mt:"50px",children:"Find contacts by name"}),(0,x.jsx)(J.I,{_active:{transform:"scale(1.5)"},mt:"20px",width:["100%","50%","25%"],placeholder:"Enter Name \ud83d\udc81\ud83c\udffc\u200d\u2640\ufe0f",variant:"filled",type:"text",value:e,onChange:function(e){n((0,D.K)(e.currentTarget.value))}})]})},V=t(8527);function X(){var e=(0,r.I0)(),n=(0,r.v9)((function(e){return e.contacts.contacts}));return(0,k.useEffect)((function(){e((0,G.yF)()).unwrap().then().catch((function(e){return S.Am.error(e)}))}),[e]),(0,x.jsxs)(V.$,{children:[(0,x.jsx)(H,{}),(0,x.jsx)(q.X,{mt:50,ml:[20,40,60],children:"Contacts"}),(0,x.jsx)(K,{}),n.length>0&&(0,x.jsx)(M,{})]})}},876:function(e,n,t){t.d(n,{G:function(){return s}});var a,r=t(168),i=t(5705),s=(0,t(7691).ZP)(i.l0)(a||(a=(0,r.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 25px;\n  padding-top: 58px;\n"])))},8527:function(e,n,t){t.d(n,{$:function(){return o}});var a,r=t(168),i=t(7691),s=t(4311),c=t(6256),o=i.ZP.section(a||(a=(0,r.Z)(["\n  display: flex;\n  flex-direction: column;\n  min-height: calc(100vh - 130px);\n\n  padding: 40px;\n\n  background-image: url(","), url(",");\n  background-size: 50%, 20%;\n  background-position: right 96%;\n  background-repeat: no-repeat;\n  background-attachment: fixed;\n  animation: 0.8s show ease;\n\n  @keyframes show {\n    from {\n      opacity: 0;\n    }\n    to {\n      opacity: 1;\n    }\n  }\n"])),s,c)},4311:function(e,n,t){e.exports=t.p+"static/media/Wall.a453b59b2ac36194f79e.png"},6256:function(e,n,t){e.exports=t.p+"static/media/homePage.9b4b95be67e33ce0e39c.png"},5946:function(e,n,t){t.d(n,{X:function(){return m}});var a=t(1413),r=t(4925),i=t(7872),s=t(9219),c=t(9477),o=t(1999),l=t(6992),u=t(184),d=["className"],m=(0,i.G)((function(e,n){var t=(0,s.mq)("Heading",e),i=(0,c.Lr)(e),m=(i.className,(0,r.Z)(i,d));return(0,u.jsx)(o.m.h2,(0,a.Z)((0,a.Z)({ref:n,className:(0,l.cx)("chakra-heading",e.className)},m),{},{__css:t}))}));m.displayName="Heading"}}]);
//# sourceMappingURL=699.0b3196dd.chunk.js.map
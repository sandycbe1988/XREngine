(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3710,5747],{22265:function(t,e,n){"use strict";var i=n(87400),a=n(68625),r=n(26395),o=n(27878),s=n(10101),c=n(31451),u=n(81879),l=o.forwardRef((function(t,e){var n=t.classes,r=t.className,c=t.component,l=void 0===c?"div":c,d=t.disableGutters,f=void 0!==d&&d,m=t.fixed,p=void 0!==m&&m,g=t.maxWidth,x=void 0===g?"lg":g,b=(0,a.Z)(t,["classes","className","component","disableGutters","fixed","maxWidth"]);return o.createElement(l,(0,i.Z)({className:(0,s.Z)(n.root,r,p&&n.fixed,f&&n.disableGutters,!1!==x&&n["maxWidth".concat((0,u.Z)(String(x)))]),ref:e},b))}));e.Z=(0,c.Z)((function(t){return{root:(0,r.Z)({width:"100%",marginLeft:"auto",boxSizing:"border-box",marginRight:"auto",paddingLeft:t.spacing(2),paddingRight:t.spacing(2),display:"block"},t.breakpoints.up("sm"),{paddingLeft:t.spacing(3),paddingRight:t.spacing(3)}),disableGutters:{paddingLeft:0,paddingRight:0},fixed:Object.keys(t.breakpoints.values).reduce((function(e,n){var i=t.breakpoints.values[n];return 0!==i&&(e[t.breakpoints.up(n)]={maxWidth:i}),e}),{}),maxWidthXs:(0,r.Z)({},t.breakpoints.up("xs"),{maxWidth:Math.max(t.breakpoints.values.xs,444)}),maxWidthSm:(0,r.Z)({},t.breakpoints.up("sm"),{maxWidth:t.breakpoints.values.sm}),maxWidthMd:(0,r.Z)({},t.breakpoints.up("md"),{maxWidth:t.breakpoints.values.md}),maxWidthLg:(0,r.Z)({},t.breakpoints.up("lg"),{maxWidth:t.breakpoints.values.lg}),maxWidthXl:(0,r.Z)({},t.breakpoints.up("xl"),{maxWidth:t.breakpoints.values.xl})}}),{name:"MuiContainer"})(l)},34335:function(t,e,n){"use strict";var i=n(68625),a=n(87400),r=n(27878),o=n(10101),s=n(31451),c=[0,1,2,3,4,5,6,7,8,9,10],u=["auto",!0,1,2,3,4,5,6,7,8,9,10,11,12];function l(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,n=parseFloat(t);return"".concat(n/e).concat(String(t).replace(String(n),"")||"px")}var d=r.forwardRef((function(t,e){var n=t.alignContent,s=void 0===n?"stretch":n,c=t.alignItems,u=void 0===c?"stretch":c,l=t.classes,d=t.className,f=t.component,m=void 0===f?"div":f,p=t.container,g=void 0!==p&&p,x=t.direction,b=void 0===x?"row":x,v=t.item,h=void 0!==v&&v,w=t.justify,y=void 0===w?"flex-start":w,_=t.lg,k=void 0!==_&&_,Z=t.md,S=void 0!==Z&&Z,W=t.sm,j=void 0!==W&&W,O=t.spacing,P=void 0===O?0:O,C=t.wrap,E=void 0===C?"wrap":C,N=t.xl,M=void 0!==N&&N,A=t.xs,D=void 0!==A&&A,G=t.zeroMinWidth,L=void 0!==G&&G,I=(0,i.Z)(t,["alignContent","alignItems","classes","className","component","container","direction","item","justify","lg","md","sm","spacing","wrap","xl","xs","zeroMinWidth"]),z=(0,o.Z)(l.root,d,g&&[l.container,0!==P&&l["spacing-xs-".concat(String(P))]],h&&l.item,L&&l.zeroMinWidth,"row"!==b&&l["direction-xs-".concat(String(b))],"wrap"!==E&&l["wrap-xs-".concat(String(E))],"stretch"!==u&&l["align-items-xs-".concat(String(u))],"stretch"!==s&&l["align-content-xs-".concat(String(s))],"flex-start"!==y&&l["justify-xs-".concat(String(y))],!1!==D&&l["grid-xs-".concat(String(D))],!1!==j&&l["grid-sm-".concat(String(j))],!1!==S&&l["grid-md-".concat(String(S))],!1!==k&&l["grid-lg-".concat(String(k))],!1!==M&&l["grid-xl-".concat(String(M))]);return r.createElement(m,(0,a.Z)({className:z,ref:e},I))})),f=(0,s.Z)((function(t){return(0,a.Z)({root:{},container:{boxSizing:"border-box",display:"flex",flexWrap:"wrap",width:"100%"},item:{boxSizing:"border-box",margin:"0"},zeroMinWidth:{minWidth:0},"direction-xs-column":{flexDirection:"column"},"direction-xs-column-reverse":{flexDirection:"column-reverse"},"direction-xs-row-reverse":{flexDirection:"row-reverse"},"wrap-xs-nowrap":{flexWrap:"nowrap"},"wrap-xs-wrap-reverse":{flexWrap:"wrap-reverse"},"align-items-xs-center":{alignItems:"center"},"align-items-xs-flex-start":{alignItems:"flex-start"},"align-items-xs-flex-end":{alignItems:"flex-end"},"align-items-xs-baseline":{alignItems:"baseline"},"align-content-xs-center":{alignContent:"center"},"align-content-xs-flex-start":{alignContent:"flex-start"},"align-content-xs-flex-end":{alignContent:"flex-end"},"align-content-xs-space-between":{alignContent:"space-between"},"align-content-xs-space-around":{alignContent:"space-around"},"justify-xs-center":{justifyContent:"center"},"justify-xs-flex-end":{justifyContent:"flex-end"},"justify-xs-space-between":{justifyContent:"space-between"},"justify-xs-space-around":{justifyContent:"space-around"},"justify-xs-space-evenly":{justifyContent:"space-evenly"}},function(t,e){var n={};return c.forEach((function(i){var a=t.spacing(i);0!==a&&(n["spacing-".concat(e,"-").concat(i)]={margin:"-".concat(l(a,2)),width:"calc(100% + ".concat(l(a),")"),"& > $item":{padding:l(a,2)}})})),n}(t,"xs"),t.breakpoints.keys.reduce((function(e,n){return function(t,e,n){var i={};u.forEach((function(t){var e="grid-".concat(n,"-").concat(t);if(!0!==t)if("auto"!==t){var a="".concat(Math.round(t/12*1e8)/1e6,"%");i[e]={flexBasis:a,flexGrow:0,maxWidth:a}}else i[e]={flexBasis:"auto",flexGrow:0,maxWidth:"none"};else i[e]={flexBasis:0,flexGrow:1,maxWidth:"100%"}})),"xs"===n?(0,a.Z)(t,i):t[e.breakpoints.up(n)]=i}(e,t,n),e}),{}))}),{name:"MuiGrid"})(d);e.Z=f},89733:function(t,e,n){"use strict";n.r(e),n.d(e,{ForgotPasswordPage:function(){return o}});var i=n(27878),a=n(97809),r=i.createElement,o=function(){return r(a.o,null)};e.default=o},97809:function(t,e,n){"use strict";n.d(e,{o:function(){return h}});var i=n(15194),a=n(27878),r=n(52299),o=n(84135),s=n(66226),c=n(22265),u=n(14571),l=n(69744),d=n(24892),f=n(34335),m=n(75810),p=n.n(m),g=a.createElement;function x(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function b(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?x(Object(n),!0).forEach((function(e){(0,i.Z)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):x(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var v=function(t){var e=t.forgotPassword,n=(t.classes,(0,a.useState)({email:"",isSubmitted:!1})),u=n[0],l=n[1];return g(c.Z,{component:"main",maxWidth:"xs"},g("div",{className:p().paper},g(s.Z,{component:"h1",variant:"h5"},"Forgot Password"),g(s.Z,{variant:"body2",color:"textSecondary",align:"center"},"Please enter your registered email address and we'll send you a password reset link."),g("form",{className:p().form,noValidate:!0,onSubmit:function(t){return function(t){t.preventDefault(),e(u.email),l(b(b({},u),{},{isSubmitted:!0}))}(t)}},g(f.Z,{container:!0},g(f.Z,{item:!0,xs:12},g(o.Z,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"email",label:"Email Address",name:"email",autoComplete:"email",autoFocus:!0,onChange:function(t){return function(t){t.preventDefault(),l(b(b({},u),{},(0,i.Z)({},t.target.name,t.target.value)))}(t)}})),g(f.Z,{item:!0,xs:12},g(r.Z,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:p().submit},"Submit")))),u.isSubmitted?g(s.Z,{variant:"body2",color:"textSecondary",align:"center"},g("br",null),"Reset Password Email was sent. Please check your email."):""))},h=(0,u.$j)(null,(function(t){return{forgotPassword:(0,l.DE)(d.gF,t)}}))((function(t){return g(v,t)}))},60867:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/auth/forgotpassword",function(){return n(89733)}])},75810:function(t){t.exports={paper:"Auth_paper__2h-yH",avatar:"Auth_avatar__1fGnk",form:"Auth_form__1tFJu",submit:"Auth_submit__1i57J","MuiButton-contained":"Auth_MuiButton-contained__17TSp",facebook:"Auth_facebook__2s11N",google:"Auth_google__1aLo_",github:"Auth_github__3IK8I",termsLink:"Auth_termsLink__ZL_9e"}},35747:function(t){"use strict";t.exports=fs},40418:function(){}},0,[[60867,2272,9774,2182,4546,1514,3828,6231,9351,8900,3600,6508,6835,5774,5327,4135]]]);
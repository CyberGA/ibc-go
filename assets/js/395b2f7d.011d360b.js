"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8535],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>u});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},f="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),f=s(n),h=i,u=f["".concat(c,".").concat(h)]||f[h]||d[h]||o;return n?r.createElement(u,a(a({ref:t},p),{},{components:n})):r.createElement(u,a({ref:t},p))}));function u(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=h;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[f]="string"==typeof e?e:i,a[1]=l;for(var s=2;s<o;s++)a[s]=n[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},90814:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var r=n(87462),i=(n(67294),n(3905));const o={title:"State Verification",sidebar_label:"State Verification",sidebar_position:5,slug:"/ibc/light-clients/localhost/state-verification"},a="State verification",l={unversionedId:"ibc/localhost/state-verification",id:"version-v7.3.x/ibc/localhost/state-verification",title:"State Verification",description:"The localhost client handles state verification through the ClientState interface methods VerifyMembership and VerifyNonMembership by performing read-only operations directly on the core IBC store.",source:"@site/versioned_docs/version-v7.3.x/03-ibc/03-localhost/05-state-verification.md",sourceDirName:"03-ibc/03-localhost",slug:"/ibc/light-clients/localhost/state-verification",permalink:"/v7.3.x/ibc/light-clients/localhost/state-verification",draft:!1,tags:[],version:"v7.3.x",sidebarPosition:5,frontMatter:{title:"State Verification",sidebar_label:"State Verification",sidebar_position:5,slug:"/ibc/light-clients/localhost/state-verification"},sidebar:"defaultSidebar",previous:{title:"Connection",permalink:"/v7.3.x/ibc/light-clients/localhost/connection"},next:{title:"Overview",permalink:"/v7.3.x/middleware/ics29-fee/overview"}},c={},s=[],p={toc:s},f="wrapper";function d(e){let{components:t,...n}=e;return(0,i.kt)(f,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"state-verification"},"State verification"),(0,i.kt)("p",null,"The localhost client handles state verification through the ",(0,i.kt)("inlineCode",{parentName:"p"},"ClientState")," interface methods ",(0,i.kt)("inlineCode",{parentName:"p"},"VerifyMembership")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"VerifyNonMembership")," by performing read-only operations directly on the core IBC store."),(0,i.kt)("p",null,"When verifying channel state in handshakes or processing packets the ",(0,i.kt)("inlineCode",{parentName:"p"},"09-localhost")," client can simply compare bytes stored under the standardized key paths defined by ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/cosmos/ibc/tree/main/spec/core/ics-024-host-requirements"},"ICS-24"),"."),(0,i.kt)("p",null,"For existence proofs via ",(0,i.kt)("inlineCode",{parentName:"p"},"VerifyMembership")," the 09-localhost client will retrieve the value stored under the provided key path and compare it against the value provided by the caller. In contrast, non-existence proofs via ",(0,i.kt)("inlineCode",{parentName:"p"},"VerifyNonMembership")," assert the absence of a value at the provided key path."),(0,i.kt)("p",null,"Relayers are expected to provide a sentinel proof when sending IBC messages. Submission of nil or empty proofs is disallowed in core IBC messaging.\nThe 09-localhost light client module defines a ",(0,i.kt)("inlineCode",{parentName:"p"},"SentinelProof")," as a single byte. Localhost client state verification will fail if the sentintel proof value is not provided."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},"var SentinelProof = []byte{0x01}\n")))}d.isMDXComponent=!0}}]);
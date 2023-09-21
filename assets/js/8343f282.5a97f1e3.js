"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3596],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>g});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),s=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),m=s(a),d=r,g=m["".concat(l,".").concat(d)]||m[d]||u[d]||o;return a?n.createElement(g,i(i({ref:t},c),{},{components:a})):n.createElement(g,i({ref:t},c))}));function g(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=d;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p[m]="string"==typeof e?e:r,i[1]=p;for(var s=2;s<o;s++)i[s]=a[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},61819:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>p,toc:()=>s});var n=a(87462),r=(a(67294),a(3905));const o={title:"IBC-Go v7 to v8",sidebar_label:"IBC-Go v7 to v8",sidebar_position:11,slug:"/migrations/v7-to-v8"},i="Migrating from v7 to v8",p={unversionedId:"migrations/v7-to-v8",id:"migrations/v7-to-v8",title:"IBC-Go v7 to v8",description:"This guide provides instructions for migrating to version v8.0.0 of ibc-go.",source:"@site/docs/05-migrations/11-v7-to-v8.md",sourceDirName:"05-migrations",slug:"/migrations/v7-to-v8",permalink:"/main/migrations/v7-to-v8",draft:!1,tags:[],version:"current",sidebarPosition:11,frontMatter:{title:"IBC-Go v7 to v8",sidebar_label:"IBC-Go v7 to v8",sidebar_position:11,slug:"/migrations/v7-to-v8"},sidebar:"defaultSidebar",previous:{title:"IBC-Go v7.2 to v7.3",permalink:"/main/migrations/v7_2-to-v7_3"}},l={},s=[{value:"Chains",id:"chains",level:2},{value:"Params migration",id:"params-migration",level:3},{value:"Governance V1 migration",id:"governance-v1-migration",level:3},{value:"Transfer migration",id:"transfer-migration",level:3},{value:"IBC Apps",id:"ibc-apps",level:2},{value:"Relayers",id:"relayers",level:2},{value:"IBC Light Clients",id:"ibc-light-clients",level:2}],c={toc:s},m="wrapper";function u(e){let{components:t,...a}=e;return(0,r.kt)(m,(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"migrating-from-v7-to-v8"},"Migrating from v7 to v8"),(0,r.kt)("p",null,"This guide provides instructions for migrating to version ",(0,r.kt)("inlineCode",{parentName:"p"},"v8.0.0")," of ibc-go."),(0,r.kt)("p",null,"There are four sections based on the four potential user groups of this document:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#migrating-from-v7-to-v8"},"Migrating from v7 to v8"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#chains"},"Chains")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#ibc-apps"},"IBC Apps")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#relayers"},"Relayers")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#ibc-light-clients"},"IBC Light Clients"))))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Note:")," ibc-go supports golang semantic versioning and therefore all imports must be updated on major version releases."),(0,r.kt)("h2",{id:"chains"},"Chains"),(0,r.kt)("p",null,"The type of the ",(0,r.kt)("inlineCode",{parentName:"p"},"PortKeeper")," field of the IBC keeper have been changed to ",(0,r.kt)("inlineCode",{parentName:"p"},"*portkeeper.Keeper"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-diff"},"// Keeper defines each ICS keeper for IBC\ntype Keeper struct {\n  // implements gRPC QueryServer interface\n  types.QueryServer\n\n  cdc codec.BinaryCodec\n\n  ClientKeeper     clientkeeper.Keeper\n  ConnectionKeeper connectionkeeper.Keeper\n  ChannelKeeper    channelkeeper.Keeper\n- PortKeeper       portkeeper.Keeper\n+ PortKeeper       *portkeeper.Keeper\n  Router           *porttypes.Router\n\n  authority string\n}\n")),(0,r.kt)("p",null,"See ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/cosmos/ibc-go/pull/4703/files#diff-d18972debee5e64f16e40807b2ae112ddbe609504a93ea5e1c80a5d489c3a08a"},"this PR")," for the changes required in ",(0,r.kt)("inlineCode",{parentName:"p"},"app.go"),"."),(0,r.kt)("p",null,"TODO: ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/cosmos/ibc-go/pull/3505"},"https://github.com/cosmos/ibc-go/pull/3505")," (extra parameter added to transfer's ",(0,r.kt)("inlineCode",{parentName:"p"},"GenesisState"),")"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"You must pass the ",(0,r.kt)("inlineCode",{parentName:"li"},"authority")," to the icahost keeper. (",(0,r.kt)("a",{parentName:"li",href:"https://github.com/cosmos/ibc-go/pull/3520"},"#3520"),") See ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/cosmos/ibc-go/pull/3520/files#diff-d18972debee5e64f16e40807b2ae112ddbe609504a93ea5e1c80a5d489c3a08a"},"diff"),".")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-diff"},"// app.go\n\n    // ICA Host keeper\n    app.ICAHostKeeper = icahostkeeper.NewKeeper(\n        appCodec, keys[icahosttypes.StoreKey], app.GetSubspace(icahosttypes.SubModuleName),\n        app.IBCFeeKeeper, // use ics29 fee as ics4Wrapper in middleware stack\n        app.IBCKeeper.ChannelKeeper, &app.IBCKeeper.PortKeeper,\n        app.AccountKeeper, scopedICAHostKeeper, app.MsgServiceRouter(),\n+       authtypes.NewModuleAddress(govtypes.ModuleName).String(),\n    )\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"You must pass the ",(0,r.kt)("inlineCode",{parentName:"li"},"authority")," to the icacontroller keeper. (",(0,r.kt)("a",{parentName:"li",href:"https://github.com/cosmos/ibc-go/pull/3590"},"#3590"),") See ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/cosmos/ibc-go/pull/3590/files#diff-d18972debee5e64f16e40807b2ae112ddbe609504a93ea5e1c80a5d489c3a08a"},"diff"),".")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-diff"},"// app.go\n\n    // ICA Controller keeper\n    app.ICAControllerKeeper = icacontrollerkeeper.NewKeeper(\n        appCodec, keys[icacontrollertypes.StoreKey], app.GetSubspace(icacontrollertypes.SubModuleName),\n        app.IBCFeeKeeper, // use ics29 fee as ics4Wrapper in middleware stack\n        app.IBCKeeper.ChannelKeeper, &app.IBCKeeper.PortKeeper,\n        scopedICAControllerKeeper, app.MsgServiceRouter(),\n+       authtypes.NewModuleAddress(govtypes.ModuleName).String(),\n    )\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"You must pass the ",(0,r.kt)("inlineCode",{parentName:"li"},"authority")," to the ibctransfer keeper. (",(0,r.kt)("a",{parentName:"li",href:"https://github.com/cosmos/ibc-go/pull/3553"},"#3553"),") See ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/cosmos/ibc-go/pull/3553/files#diff-d18972debee5e64f16e40807b2ae112ddbe609504a93ea5e1c80a5d489c3a08a"},"diff"),".")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-diff"},"// app.go\n\n    // Create Transfer Keeper and pass IBCFeeKeeper as expected Channel and PortKeeper\n    // since fee middleware will wrap the IBCKeeper for underlying application.\n    app.TransferKeeper = ibctransferkeeper.NewKeeper(\n        appCodec, keys[ibctransfertypes.StoreKey], app.GetSubspace(ibctransfertypes.ModuleName),\n        app.IBCFeeKeeper, // ISC4 Wrapper: fee IBC middleware\n        app.IBCKeeper.ChannelKeeper, &app.IBCKeeper.PortKeeper,\n        app.AccountKeeper, app.BankKeeper, scopedTransferKeeper,\n+       authtypes.NewModuleAddress(govtypes.ModuleName).String(),\n    )\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"You should pass the ",(0,r.kt)("inlineCode",{parentName:"li"},"authority")," to the IBC keeper. (",(0,r.kt)("a",{parentName:"li",href:"https://github.com/cosmos/ibc-go/pull/3640"},"#3640")," and ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/cosmos/ibc-go/pull/3650"},"#3650"),") See ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/cosmos/ibc-go/pull/3640/files#diff-d18972debee5e64f16e40807b2ae112ddbe609504a93ea5e1c80a5d489c3a08a"},"diff"),".")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-diff"},"// app.go\n\n    // IBC Keepers\n    app.IBCKeeper = ibckeeper.NewKeeper(\n-       appCodec, keys[ibcexported.StoreKey], app.GetSubspace(ibcexported.ModuleName), app.StakingKeeper, app.UpgradeKeeper, scopedIBCKeeper,\n+       appCodec, keys[ibcexported.StoreKey], app.GetSubspace(ibcexported.ModuleName), app.StakingKeeper, app.UpgradeKeeper, scopedIBCKeeper, authtypes.NewModuleAddress(govtypes.ModuleName).String(),\n    )\n")),(0,r.kt)("h3",{id:"params-migration"},"Params migration"),(0,r.kt)("p",null,"Params are now self managed in the following submodules:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"ica/controller ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/cosmos/ibc-go/pull/3590"},"#3590")),(0,r.kt)("li",{parentName:"ul"},"ica/host ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/cosmos/ibc-go/pull/3520"},"#3520")),(0,r.kt)("li",{parentName:"ul"},"ibc/connection ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/cosmos/ibc-go/pull/3650"},"#3650")),(0,r.kt)("li",{parentName:"ul"},"ibc/client ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/cosmos/ibc-go/pull/3640"},"#3640")),(0,r.kt)("li",{parentName:"ul"},"ibc/transfer ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/cosmos/ibc-go/pull/3553"},"#3553"))),(0,r.kt)("p",null,"Each module has a corresponding ",(0,r.kt)("inlineCode",{parentName:"p"},"MsgUpdateParams")," message with a ",(0,r.kt)("inlineCode",{parentName:"p"},"Params")," which can be specified in full to update the modules' ",(0,r.kt)("inlineCode",{parentName:"p"},"Params"),"."),(0,r.kt)("p",null,"Legacy params subspaces must still be initialised in app.go in order to successfully migrate from x/params to the new self-contained approach. See reference: ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/cosmos/ibc-go/blob/main/testing/simapp/app.go#L1001-L1006"},"https://github.com/cosmos/ibc-go/blob/main/testing/simapp/app.go#L1001-L1006")),(0,r.kt)("h3",{id:"governance-v1-migration"},"Governance V1 migration"),(0,r.kt)("p",null,"Proposals have been migrated to ",(0,r.kt)("a",{parentName:"p",href:"https://docs.cosmos.network/v0.50/modules/gov#messages"},"gov v1 messages")," ref: ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/cosmos/ibc-go/pull/4620"},"#4620"),". The proposal ",(0,r.kt)("inlineCode",{parentName:"p"},"ClientUpdateProposal")," has been removed and replaced with ",(0,r.kt)("inlineCode",{parentName:"p"},"MsgRecoverClient")," and the proposal ",(0,r.kt)("inlineCode",{parentName:"p"},"UpgradeProposal")," has been removed and replaced with ",(0,r.kt)("inlineCode",{parentName:"p"},"MsgIBCSoftwareUpgrade"),"."),(0,r.kt)("p",null,"Ensure that the correct authority field is provided to the ibc keeper."),(0,r.kt)("p",null,"Remove legacy proposal registration from app.go ref: ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/cosmos/ibc-go/pull/4602"},"#4602"),"."),(0,r.kt)("p",null,"Remove the 02-client proposal handler from the ",(0,r.kt)("inlineCode",{parentName:"p"},"govRouter"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-diff"},"govRouter := govv1beta1.NewRouter()\ngovRouter.AddRoute(govtypes.RouterKey, govv1beta1.ProposalHandler).\n  AddRoute(paramproposal.RouterKey, params.NewParamChangeProposalHandler(app.ParamsKeeper)).\n- AddRoute(ibcclienttypes.RouterKey, ibcclient.NewClientProposalHandler(app.IBCKeeper.ClientKeeper))\n")),(0,r.kt)("p",null,"Remove the UpgradeProposalHandler from the BasicModuleManager"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-diff"},"app.BasicModuleManager = module.NewBasicManagerFromManager(\n  app.ModuleManager,\n  map[string]module.AppModuleBasic{\n    genutiltypes.ModuleName: genutil.NewAppModuleBasic(genutiltypes.DefaultMessageValidator),\n    govtypes.ModuleName: gov.NewAppModuleBasic(\n      []govclient.ProposalHandler{\n      paramsclient.ProposalHandler,\n-     ibcclientclient.UpgradeProposalHandler,\n    },\n  ),\n})\n")),(0,r.kt)("h3",{id:"transfer-migration"},"Transfer migration"),(0,r.kt)("p",null,"An automatic migration handler (TODO: add link after ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/cosmos/ibc-go/pull/3104"},"https://github.com/cosmos/ibc-go/pull/3104")," is merged) is configured in the transfer module to set the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/cosmos/cosmos-sdk/blob/95178ce036741ae6aa7af131fa9fccf3e13fff7a/proto/cosmos/bank/v1beta1/bank.proto#L96-L125"},"denomination metadata")," for the IBC denominations of all vouchers minted by the transfer module."),(0,r.kt)("h2",{id:"ibc-apps"},"IBC Apps"),(0,r.kt)("p",null,"TODO: "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/cosmos/ibc-go/pull/3303"},"https://github.com/cosmos/ibc-go/pull/3303")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/cosmos/ibc-go/pull/3967"},"https://github.com/cosmos/ibc-go/pull/3967"))),(0,r.kt)("h2",{id:"relayers"},"Relayers"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Getter functions in ",(0,r.kt)("inlineCode",{parentName:"li"},"MsgChannelOpenInitResponse"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"MsgChannelOpenTryResponse"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"MsgTransferResponse"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"MsgRegisterInterchainAccountResponse")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"MsgSendTxResponse")," have been removed. The fields can be accessed directly."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"channeltypes.EventTypeTimeoutPacketOnClose")," (where ",(0,r.kt)("inlineCode",{parentName:"li"},"channeltypes")," is an import alias for ",(0,r.kt)("inlineCode",{parentName:"li"},'"github.com/cosmos/ibc-go/v8/modules/core/04-channel"'),") has been removed, since core IBC does not emit any event with this key."),(0,r.kt)("li",{parentName:"ul"},"Attribute with key ",(0,r.kt)("inlineCode",{parentName:"li"},"counterparty_connection_id")," has been removed from event with key ",(0,r.kt)("inlineCode",{parentName:"li"},"connectiontypes.EventTypeConnectionOpenInit")," (where ",(0,r.kt)("inlineCode",{parentName:"li"},"connectiontypes")," is an import alias for ",(0,r.kt)("inlineCode",{parentName:"li"},'"github.com/cosmos/ibc-go/v8/modules/core/03-connection/types"'),") and attribute with key ",(0,r.kt)("inlineCode",{parentName:"li"},"counterparty_channel_id")," has been removed from event with key ",(0,r.kt)("inlineCode",{parentName:"li"},"channeltypes.EventTypeChannelOpenInit")," (where ",(0,r.kt)("inlineCode",{parentName:"li"},"channeltypes")," is an import alias for ",(0,r.kt)("inlineCode",{parentName:"li"},'"github.com/cosmos/ibc-go/v8/modules/core/04-channel"'),") since both (counterparty connection ID and counterparty channel ID) are empty on ",(0,r.kt)("inlineCode",{parentName:"li"},"ConnectionOpenInit")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"ChannelOpenInit")," respectively. ")),(0,r.kt)("h2",{id:"ibc-light-clients"},"IBC Light Clients"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"No relevant changes were made in this release.")))}u.isMDXComponent=!0}}]);
import{l as a,W as s,o as n,c as e,q as t,u as l,t as d,e as c,F as o,s as i,w as r,aa as p,aq as u,ai as v,ad as m,y as b,a1 as f,Y as g,R as h,T as k}from"./vendor-nLmjWMLT.js";import{g as y}from"./index-bSZALp9n.js";import{i as C,a as I,b as j}from"./data-5Z7NccX7.js";import{_ as x,u as _}from"./index-Dg1jL7gn.js";import{b as w}from"./api-wuboqdNi.js";import"./index-1zYz0Z2q.js";const P=a=>(h("data-v-e558910d"),a=a(),k(),a),T={class:"user-info"},U={class:"header-account"},q={class:"top-info"},D=["src"],F={class:"element-info"},R={class:"element-top"},S={class:"code"},z=P((()=>t("p",null,"账户安全等级",-1))),N={class:"progress"},W={class:"user-balance"},Y={class:"title"},$={key:0},A={class:"number"},B={class:"btns"},E=["onClick"],G=["onClick"],H={class:"card-box"},J={class:"title"},K=P((()=>t("span",null,"我的订单",-1))),L=p('<div class="get-goods" data-v-e558910d><span data-v-e558910d>竞买中 ： <span data-v-e558910d>1</span></span><span data-v-e558910d>已得标 ： <span class="active" data-v-e558910d>3</span></span><span data-v-e558910d>未得标 ： <span class="active" data-v-e558910d>1</span></span><span data-v-e558910d>未支付 ： <span data-v-e558910d>0</span></span><span data-v-e558910d>不支付 ： <span data-v-e558910d>0</span></span><span data-v-e558910d>未发货 ： <span data-v-e558910d>0</span></span><span data-v-e558910d>已发货 ： <span data-v-e558910d>0</span></span></div>',1),M={class:"card-box"},O={class:"title"},Q=P((()=>t("span",null,"我的委托",-1))),V={class:"btn-details"},X=x({__name:"UserInfo",setup(p){const h=_(),k=a();s((async()=>{try{let a=await w(),s=a.Data.userProfileInfos[1].IsFillIn;h.changeUserTranslate(a.Data),h.changeUserTranslate({verifyPhone:s})}catch(a){}}));const x=()=>{k.push("/user/userinfo/show-grand")};return(a,s)=>{const p=u,_=v;return n(),e("div",T,[t("div",U,[t("div",q,[t("img",{src:l(y)("jingmai/list/list2.png"),alt:""},null,8,D),t("div",F,[t("div",R,[t("h5",null,d(l(h).userInfo.RealName),1),t("p",null,"客户编号: "+d(l(h).userInfo.UserId),1)]),t("p",{class:"show-grade",onClick:x},d("五钻三星")),t("div",S,[z,t("div",N,[c(p,{strokeColor:"#e33d31",percent:l(h).userTranslate.ProfilePercent,size:"small"},null,8,["percent"])]),t("p",{class:"nav-details",onClick:s[0]||(s[0]=a=>l(k).push("/user/account-management"))}," 完善资料 ")])])]),t("div",W,[(n(!0),e(o,null,i(l(C),(a=>(n(),e("div",{class:"balance-item",style:m({backgroundImage:`url(${l(y)(a.img)})`}),key:a.img},[t("p",Y,[b(d(a.title)+" ",1),a.icon?(n(),e("span",$,d(a.icon),1)):f("",!0)]),t("p",A,[b(d(a.num)+" ",1),t("span",null,d(a.danwei),1)]),t("div",B,[t("button",{class:"btn1",onClick:s=>l(k).push(a.router)},d(a.btn1),9,E),a.btn2?(n(),e("button",{key:0,class:"btn2",onClick:s=>l(k).push(a.router2)},d(a.btn2),9,G)):f("",!0)])],4)))),128))])]),t("div",H,[t("div",J,[K,t("span",{class:"move",onClick:s[1]||(s[1]=a=>l(k).push("/user/quick-sell"))},"查看更多")]),L]),t("div",M,[t("div",O,[Q,t("span",{class:"move",onClick:s[2]||(s[2]=a=>l(k).push("/user/my-entrustment/"))},"查看更多")]),c(_,{pagination:!1,dataSource:l(I),columns:l(j)},{status:r((({record:a})=>[t("span",null,[t("span",{class:g(0==a.status||"已成交"==a.status?"":"active")},d(a.status),3)])])),operate:r((({record:a})=>[t("span",V,d(a.operate),1)])),_:1},8,["dataSource","columns"])])])}}},[["__scopeId","data-v-e558910d"]]);export{X as default};
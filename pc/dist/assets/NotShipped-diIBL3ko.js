import{l as e,V as a,W as l,n as t,ag as n,r as s,o,c as i,q as d,e as c,w as u,ap as r,u as p,at as g,y as v,a1 as y,F as m,t as h,R as k,T as f,a7 as b,E as x,K as w,ai as _}from"./vendor-nLmjWMLT.js";import{g as I}from"./index-bSZALp9n.js";import{_ as C}from"./ShowModal-VOY3TJnR.js";import{_ as K}from"./index-Dg1jL7gn.js";const R=e=>(k("data-v-461fdf13"),e=e(),f(),e),z={class:"my-logistics"},j={class:"card-box"},q=R((()=>d("div",{class:"title"},"未发货",-1))),U={class:"search-cate"},$={key:0,class:"table-item-gooods-info"},S=["src"],T={class:"add-array"},E={class:"add-array"},F=R((()=>d("p",{class:"label"},"藏品暂不开放支付后退货退款流程。如有退货，请收货后联系客服021-23099900",-1))),L=R((()=>d("p",{class:"label"},"收藏证书不可委托，包含收藏证书的藏品一键转卖后，证书费用将退还您的账户的余额中",-1))),M=K({__name:"NotShipped",props:{},setup(k){e(),a(),l((()=>{}));const f=[{title:"藏品编号",dataIndex:"code",key:"code",align:"center"},{title:"藏品图片",dataIndex:"zhaopian",key:"zhaopian",align:"center"},{title:"藏品名称",dataIndex:"name",key:"name",align:"center"},{title:"类型",dataIndex:"cate",key:"cate",align:"center"},{title:"成交日期",dataIndex:"time",key:"time",align:"center"},{title:"成交价/价值",dataIndex:"chengjiao",key:"chengjiao",align:"center"},{title:"仓储期",dataIndex:"cangchuqi",key:"cangchuqi",align:"center"},{title:"仓储费",dataIndex:"price",align:"center",key:"price"},{title:"收藏证书",dataIndex:"caozuo",align:"center",key:"caozuo"}],K=t([]);for(let e=0;e<10;e++)K.push({key:e,code:"63932729",name:"清朝瓷器",cate:"竞买",chengjiao:"3,960.00元",cangchuqi:"剩余114天(免费)",laoban:"壳子社",time:"2023.10.02",price:"1.00",zhaopian:"register/logo.png",caozuo:"无"});const R=t({selectedRowKeys:[],loading:!1}),M=n((()=>R.selectedRowKeys.length>0)),N=()=>{R.loading=!0,setTimeout((()=>{R.loading=!1,R.selectedRowKeys=[]}),1e3)},V=e=>{R.selectedRowKeys=e},W=s([{value:"cate1",label:"所有分类"},{value:"lucy",label:"Lucy"},{value:"yiminghe",label:"Yiminghe"}]),Y=s(!1),A=s(""),B=s("cate1"),D=e=>{},G=()=>{Y.value=!0};return(e,a)=>{const l=b,t=x,n=w,s=_;return o(),i("div",z,[d("div",j,[q,c(C,null,{active1:u((()=>[d("div",U,[c(l,{ref:"select",placeholder:"所有分类",value:B.value,"onUpdate:value":a[0]||(a[0]=e=>B.value=e),class:"item",options:W.value,onChange:D},null,8,["value","options"]),c(l,{ref:"select",placeholder:"所有时间",value:B.value,"onUpdate:value":a[1]||(a[1]=e=>B.value=e),class:"item",options:W.value,onChange:D},null,8,["value","options"]),c(l,{ref:"select",placeholder:"所有类别",value:B.value,"onUpdate:value":a[2]||(a[2]=e=>B.value=e),class:"item",options:W.value,onChange:D},null,8,["value","options"]),c(t,{value:A.value,"onUpdate:value":a[3]||(a[3]=e=>A.value=e),class:"item-input",placeholder:"名称和藏品"},null,8,["value"]),c(n,{type:"primary",loading:Y.value,onClick:G,icon:r(p(g))},{default:u((()=>[v("搜索")])),_:1},8,["loading","icon"])])])),active3:u((()=>[c(s,{pagination:!1,"row-selection":{selectedRowKeys:R.selectedRowKeys,onChange:V},columns:f,"data-source":K},{bodyCell:u((({column:e,record:a})=>["zhaopian"===e.key?(o(),i("div",$,[d("img",{src:p(I)(a.zhaopian),alt:""},null,8,S)])):y("",!0)])),_:1},8,["row-selection","data-source"]),d("div",T,[d("div",null,[d("span",null,[M.value?(o(),i(m,{key:0},[v(h(`总计 ${K.length} 项 已选 ${R.selectedRowKeys.length} 项`),1)],64)):y("",!0)])]),d("span",null,[M.value?(o(),i(m,{key:0},[v(h(`未发货总数 ${K.length} 项 已选 ${R.selectedRowKeys.length} 项`),1)],64)):y("",!0)])]),d("div",E,[c(n,{type:"primary",disabled:!M.value,loading:R.loading,onClick:N},{default:u((()=>[v(" 撤销所有已选 ")])),_:1},8,["disabled","loading"]),c(n,{type:"primary",disabled:!M.value,loading:R.loading,onClick:N},{default:u((()=>[v(" 已选发货 ")])),_:1},8,["disabled","loading"]),c(n,{type:"primary",disabled:!M.value,loading:R.loading,onClick:N},{default:u((()=>[v(" 一键专卖 ")])),_:1},8,["disabled","loading"])]),F,L])),_:1})])])}}},[["__scopeId","data-v-461fdf13"]]);export{M as default};

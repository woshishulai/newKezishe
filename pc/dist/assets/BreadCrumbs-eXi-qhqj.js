import{V as a,l as s,r as e,am as m,o as t,c,F as n,s as r,y as l,t as p,q as o}from"./vendor-nLmjWMLT.js";const u={class:"bread-crumbs"},d=o("p",null,"您当前的位置:",-1),h=["onClick"],b=o("span",{class:"nav"},">",-1),i={__name:"BreadCrumbs",setup(o){const i=a(),v=s(),k=e(i.matched.map((a=>a.meta.name)));m((()=>i.matched.map((a=>a.meta.name))),(a=>{k.value=a}));return(a,s)=>(t(),c("div",u,[d,(t(!0),c(n,null,r(k.value,((a,s)=>(t(),c("p",{key:a,onClick:()=>(a=>{const s=i.matched[a];s&&s.path&&v.push(s.path)})(s),class:"breadcrumb-item"},[l(p(a)+" ",1),b],8,h)))),128))]))}};export{i as _};
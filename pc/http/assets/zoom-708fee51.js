import{ap as o}from"./index-39cdb170.js";import{A as f}from"./index-f804e123.js";const c=new o("antZoomIn",{"0%":{transform:"scale(0.2)",opacity:0},"100%":{transform:"scale(1)",opacity:1}}),y=new o("antZoomOut",{"0%":{transform:"scale(1)"},"100%":{transform:"scale(0.2)",opacity:0}}),a=new o("antZoomBigIn",{"0%":{transform:"scale(0.8)",opacity:0},"100%":{transform:"scale(1)",opacity:1}}),s=new o("antZoomBigOut",{"0%":{transform:"scale(1)"},"100%":{transform:"scale(0.8)",opacity:0}}),g=new o("antZoomUpIn",{"0%":{transform:"scale(0.8)",transformOrigin:"50% 0%",opacity:0},"100%":{transform:"scale(1)",transformOrigin:"50% 0%"}}),O=new o("antZoomUpOut",{"0%":{transform:"scale(1)",transformOrigin:"50% 0%"},"100%":{transform:"scale(0.8)",transformOrigin:"50% 0%",opacity:0}}),l=new o("antZoomLeftIn",{"0%":{transform:"scale(0.8)",transformOrigin:"0% 50%",opacity:0},"100%":{transform:"scale(1)",transformOrigin:"0% 50%"}}),p=new o("antZoomLeftOut",{"0%":{transform:"scale(1)",transformOrigin:"0% 50%"},"100%":{transform:"scale(0.8)",transformOrigin:"0% 50%",opacity:0}}),u=new o("antZoomRightIn",{"0%":{transform:"scale(0.8)",transformOrigin:"100% 50%",opacity:0},"100%":{transform:"scale(1)",transformOrigin:"100% 50%"}}),z=new o("antZoomRightOut",{"0%":{transform:"scale(1)",transformOrigin:"100% 50%"},"100%":{transform:"scale(0.8)",transformOrigin:"100% 50%",opacity:0}}),w=new o("antZoomDownIn",{"0%":{transform:"scale(0.8)",transformOrigin:"50% 100%",opacity:0},"100%":{transform:"scale(1)",transformOrigin:"50% 100%"}}),K=new o("antZoomDownOut",{"0%":{transform:"scale(1)",transformOrigin:"50% 100%"},"100%":{transform:"scale(0.8)",transformOrigin:"50% 100%",opacity:0}}),I={zoom:{inKeyframes:c,outKeyframes:y},"zoom-big":{inKeyframes:a,outKeyframes:s},"zoom-big-fast":{inKeyframes:a,outKeyframes:s},"zoom-left":{inKeyframes:l,outKeyframes:p},"zoom-right":{inKeyframes:u,outKeyframes:z},"zoom-up":{inKeyframes:g,outKeyframes:O},"zoom-down":{inKeyframes:w,outKeyframes:K}},h=(n,r)=>{const{antCls:m}=n,t=`${m}-${r}`,{inKeyframes:i,outKeyframes:e}=I[r];return[f(t,i,e,r==="zoom-big-fast"?n.motionDurationFast:n.motionDurationMid),{[`
        ${t}-enter,
        ${t}-appear
      `]:{transform:"scale(0)",opacity:0,animationTimingFunction:n.motionEaseOutCirc,"&-prepare":{transform:"none"}},[`${t}-leave`]:{animationTimingFunction:n.motionEaseInOutCirc}}]};export{h as i,c as z};

import{s as C,v as O,h as R,d as g,n as E}from"../chunks/scheduler.0355249e.js";import{S as z,i as B,d as y,v as D,j as b,o as w,s as H,k as $,l as S,p as j,g as d,c as N,a as u,z as k,q}from"../chunks/index.0bee43c3.js";import{p as _}from"../chunks/stores.a8d6a1d2.js";const x="node_modules/@sveltejs/kit/src/runtime/components/error.svelte";function f(r){var v;let e,i=r[0].status+"",o,l,n,c=((v=r[0].error)==null?void 0:v.message)+"",s;const h={c:function(){e=b("h1"),o=w(i),l=H(),n=b("p"),s=w(c),this.h()},l:function(t){e=$(t,"H1",{});var a=S(e);o=j(a,i),a.forEach(d),l=N(t),n=$(t,"P",{});var m=S(n);s=j(m,c),m.forEach(d),this.h()},h:function(){g(e,x,4,0,57),g(n,x,5,0,81)},m:function(t,a){u(t,e,a),k(e,o),u(t,l,a),u(t,n,a),k(n,s)},p:function(t,[a]){var m;a&1&&i!==(i=t[0].status+"")&&q(o,i),a&1&&c!==(c=((m=t[0].error)==null?void 0:m.message)+"")&&q(s,c)},i:E,o:E,d:function(t){t&&(d(e),d(l),d(n))}};return y("SvelteRegisterBlock",{block:h,id:f.name,type:"component",source:"",ctx:r}),h}function P(r,e,i){let o;O(_,"page"),R(r,_,s=>i(0,o=s));let{$$slots:l={},$$scope:n}=e;D("Error",l,[]);const c=[];return Object.keys(e).forEach(s=>{!~c.indexOf(s)&&s.slice(0,2)!=="$$"&&s!=="slot"&&console.warn(`<Error> was created with unknown prop '${s}'`)}),r.$capture_state=()=>({page:_,$page:o}),[o]}class I extends z{constructor(e){super(e),B(this,e,P,f,C,{}),y("SvelteRegisterComponent",{component:this,tagName:"Error",options:e,id:f.name})}}export{I as component};
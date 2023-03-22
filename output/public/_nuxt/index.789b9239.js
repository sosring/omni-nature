import{_ as $}from"./Loading.acec9e31.js";import{o as s,c as r,a as t,f as d,y as C,g as N,z as L,A as g,t as B,_ as F,b as M,B as P,l as m,w as S,j as V,q as H,k as l,F as I,r as T,C as j,p as A,e as q}from"./entry.8019bc0b.js";import{u as z}from"./fetch.d236ad28.js";import{u as E}from"./useAnimate.a164f955.js";const D={class:"rounded-xl shadow-md bg-gradient-to-r from-indigo-50 to-blue-50 overflow-hidden"},J={class:"h-36 lg:h-48 relative bg-gradient-to-br from-slate-100 to-slate-300"},K=["src","alt"],O={class:"p-4"},Q=["innerHTML"],G={class:"flex items-center flex-wrap"},R={__name:"Card",props:{campaign:Object},setup(e){const a=e.campaign.description.slice(0,150)+"...";return(i,n)=>{const c=L;return s(),r("article",D,[t("div",J,[t("img",{class:"absolute h-full w-full object-cover",src:`${e.campaign.thumbnail}`,alt:e.campaign.thumbnail},null,8,K)]),t("div",O,[t("h3",{class:"text-sm md:text-base font-montserrat font-medium text-gray-600 mb-2",innerHTML:e.campaign.title.slice(0,30)+".."},null,8,Q),t("p",{class:"leading-relaxed mb-2 text-xs font-raleway break-all",innerHTML:a}),t("div",G,[d(c,{to:`/campaign/${e.campaign._id}`,class:"blue-btn text-xs rounded text-white font-poppins"},{default:C(()=>[N(" Learn more ")]),_:1},8,["to"])])])])}}},U={class:"my-6 text-right"},W={"aria-label":"Page navigation example"},X={class:"inline-flex"},Y=["disabled"],Z={type:"button",class:"border border-gray-300 h-10 py-2 px-3 bg-blue-50 hover:bg-blue-100 text-blue-700"},ee=["disabled"],te={__name:"Pagination",props:{page:{type:Number},max:{type:Number},skip:{type:Number},next:{type:Function},previous:{type:Function}},setup(e){return(o,a)=>(s(),r("div",U,[t("nav",W,[t("ul",X,[t("li",null,[t("button",{disabled:e.page<=1,class:g([{"disabled-btn":e.page<=1},"bg-white border border-gray-300 text-gray-500 hover:bg-gray-100 hover:text-gray-700 ml-0 rounded-l-lg leading-tight px-3 h-10"]),type:"button",onClick:a[0]||(a[0]=(...i)=>e.previous&&e.previous(...i))}," Previous ",10,Y)]),t("li",null,[t("p",Z,B(e.page),1)]),t("li",null,[t("button",{type:"button",onClick:a[1]||(a[1]=(...i)=>e.next&&e.next(...i)),disabled:e.skip>e.max,class:g([{"disabled-btn":e.skip>e.max},"bg-white border border-gray-300 text-gray-500 hover:bg-gray-100 hover:text-gray-700 rounded-r-lg leading-tight h-10 px-3"])}," Next ",10,ee)])])])]))}};const ae=e=>(A("data-v-38ccfc26"),e=e(),q(),e),ne={class:"wrapper container px-5 mx-auto text-title"},se=ae(()=>t("h1",{class:"heading font-bold py-4 text-secoundary uppercase"}," Campaigns ",-1)),oe={key:0},ie={key:1,class:"wrapper grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"},re={__name:"index",async setup(e){let o,a;const{slide:i}=E();M(()=>{i(".wrapper")});const n=P("page",()=>1),c=m(3),{data:u,pending:_,error:x}=([o,a]=S(()=>z("/api/campaign",{query:{page:n,limit:c}},"$KV6uH0JrlQ")),o=await o,a(),o);if(x.value)throw V({statusCode:404,statusMessage:"Please check your network connection!"});const p=m(n.value*c.value);H(n,v=>{p.value=n.value*c.value});function b(){n.value++}function h(){n.value--}return(v,ce)=>{const y=$,f=R,w=te;return s(),r("div",ne,[se,t("article",null,[l(_)?(s(),r("div",oe,[d(y)])):(s(),r("div",ie,[(s(!0),r(I,null,T(l(u),k=>(s(),j(f,{campaign:k},null,8,["campaign"]))),256))])),d(w,{page:l(n),skip:l(p),previous:h,max:l(u).length,next:b},null,8,["page","skip","max"])])])}}},ge=F(re,[["__scopeId","data-v-38ccfc26"]]);export{ge as default};

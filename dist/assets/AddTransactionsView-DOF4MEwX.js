import{r as i,k as v,b as o,c as u,e as a,y as l,z as c,A as g,B as f,F as T,m as b,q as y,C as w,f as x}from"./index-4nWCMC3S.js";const A={__name:"AddTransaction",setup(d){const s=i("ingresos"),t=i(0),p=v(),m=async()=>{const r=b.currentUser;if(r&&t.value!=null){const e=y(p,`transactions/${r.uid}`),n={type:s.value,amount:t.value,date:new Date().toISOString().slice(0,10),userId:r.uid,time:new Date().toLocaleTimeString(0,8)};await w(e,n),alert("Transacción anadida"),t.value=null}else alert("Debes ingresar una cantidad valida")};return(r,e)=>(o(),u(T,null,[e[6]||(e[6]=a("h1",null,"Añadir Transacción",-1)),a("form",{onSubmit:f(m,["prevent"])},[a("div",null,[e[3]||(e[3]=a("label",{style:{"margin-right":"5px"}},"Tipo de Transacción",-1)),l(a("select",{"onUpdate:modelValue":e[0]||(e[0]=n=>s.value=n),id:""},e[2]||(e[2]=[a("option",{value:"ingresos"},"Ingresos",-1),a("option",{value:"gastos"},"Gastos",-1)]),512),[[c,s.value]])]),a("div",null,[e[4]||(e[4]=a("label",{style:{"margin-right":"5px"}},"Cantidad",-1)),l(a("input",{"onUpdate:modelValue":e[1]||(e[1]=n=>t.value=n),type:"number",required:""},null,512),[[g,t.value]])]),e[5]||(e[5]=a("button",{type:"submit"},"Agregar Transacción",-1))],32)],64))}},S={__name:"AddTransactionsView",setup(d){return(s,t)=>(o(),u("div",null,[x(A)]))}};export{S as default};

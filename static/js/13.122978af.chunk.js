(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[13],{621:function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));var r=n(44),c=n(20),a=n(158),i=n(1),o=n.n(i),s=n(620),l=function(e){var t=e.name,n=e.text,i=Object(a.a)(e,["name","text"]),o=t?"https://coreui.io/react/docs/components/".concat(t):e.href;return Object(c.jsx)("div",{className:"card-header-actions",children:Object(c.jsx)(s.db,Object(r.a)(Object(r.a)({},i),{},{href:o,rel:"noreferrer noopener",target:"_blank",className:"card-header-action",children:Object(c.jsx)("small",{className:"text-muted",children:n||"Create New"})}))})},u=o.a.memo(l)},622:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var r=n(624);function c(e,t){if(e){if("string"===typeof e)return Object(r.a)(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Object(r.a)(e,t):void 0}}},623:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var r=n(622);function c(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var n=[],r=!0,c=!1,a=void 0;try{for(var i,o=e[Symbol.iterator]();!(r=(i=o.next()).done)&&(n.push(i.value),!t||n.length!==t);r=!0);}catch(s){c=!0,a=s}finally{try{r||null==o.return||o.return()}finally{if(c)throw a}}return n}}(e,t)||Object(r.a)(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},624:function(e,t,n){"use strict";function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}n.d(t,"a",(function(){return r}))},626:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var r=n(622);function c(e,t){var n;if("undefined"===typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(n=Object(r.a)(e))||t&&e&&"number"===typeof e.length){n&&(e=n);var c=0,a=function(){};return{s:a,n:function(){return c>=e.length?{done:!0}:{done:!1,value:e[c++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,o=!0,s=!1;return{s:function(){n=e[Symbol.iterator]()},n:function(){var e=n.next();return o=e.done,e},e:function(e){s=!0,i=e},f:function(){try{o||null==n.return||n.return()}finally{if(s)throw i}}}}},692:function(e,t,n){"use strict";n.r(t);var r=n(20),c=n(159),a=n(44),i=n(626),o=n(623),s=n(1),l=(n(625),n(620)),u=(n(621),function(e){switch(e){case"Active":return"success";case"Inactive":return"secondary";case"Pending":return"warning";case"Banned":return"danger";default:return"primary"}}),d=[{key:"Department_Name",_style:{width:"40%"}},{key:"Department_Code",_style:{width:"20%"}},{key:"Status",_style:{width:"20%"}},{key:"edit_details",label:"",_style:{width:"1%"},sorter:!1,filter:!1},{key:"delete",label:"",_style:{width:"1%"},sorter:!1,filter:!1}];t.default=function(){var e={DEPARTMENT_NAME:"",DEPARTMENT_CODE:"",PK_DEPARTMENT_ID:0,IS_ACTIVE:0,StatusSwitch:!1,ModelLabel:"Create Departments"},t=Object(s.useState)(1),n=Object(o.a)(t,2),j=n[0],b=(n[1],Object(s.useState)(!0)),h=Object(o.a)(b,2),f=(h[0],h[1]),O=Object(s.useState)([]),m=Object(o.a)(O,2),E=m[0],D=m[1],p=Object(s.useState)(!1),T=Object(o.a)(p,2),_=T[0],x=T[1],y=Object(s.useState)(!1),A=Object(o.a)(y,2),N=A[0],S=A[1],v=Object(s.useState)(e),P=Object(o.a)(v,2),C=P[0],M=P[1],w=function(){fetch("http://localhost:51264/api/Departments").then((function(e){return e.json()})).then((function(e){var t=[];D([]);var n,r=Object(i.a)(e);try{for(r.s();!(n=r.n()).done;){var c=n.value,a={};a.Department_Name=c.departmenT_NAME,a.Department_Code=c.departmenT_CODE,a.PK_DEPARTMENT_ID=c.pK_DEPARTMENT_ID,a.Status=c.iS_ACTIVE,t.push(a)}}catch(o){r.e(o)}finally{r.f()}D(t),f(!1)})).catch((function(e){return console.log(e)}))},g=function(e){var t=e.target,n=t.name,r=t.value;M(Object(a.a)(Object(a.a)({},C),{},Object(c.a)({},n,r)))},I=function(){M(e),x(!_)},R=function(e){e>0?(w(),alert("Success"),x(!_)):(e=-1)?alert("Input Already Exist"):alert("Failed")},k=function(e){e>0?(w(),alert("Success"),S(!N)):alert("failed")};return Object(s.useEffect)((function(){w()}),[j]),Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(l.wb,{}),Object(r.jsx)(l.wb,{children:Object(r.jsx)(l.u,{xs:"12",lg:"12",children:Object(r.jsxs)(l.j,{children:[Object(r.jsxs)(l.n,{children:["Department Create",Object(r.jsx)("div",{className:"card-header-actions",children:Object(r.jsx)(l.db,{href:"/dashboard",rel:"noreferrer noopener",target:"_blank",className:"card-header-action",children:Object(r.jsx)("small",{className:"text-muted",children:"Create New"})})})]}),Object(r.jsx)(l.k,{children:Object(r.jsx)(l.y,{items:E,fields:d,itemsPerPage:5,pagination:!0,scopedSlots:{Status:function(e){return Object(r.jsx)("td",{children:Object(r.jsx)(l.b,{color:u(1==e.Status?"Active":"Inactive"),children:1==e.Status?"Active":"Inactive"})})},edit_details:function(e,t){return Object(r.jsx)("td",{className:"py-2",children:Object(r.jsx)(l.f,{color:"primary",variant:"outline",shape:"square",size:"sm",onClick:function(t){return function(e){if(e>0){var t=E.filter((function(t){return t.PK_DEPARTMENT_ID===e}))[0];C.PK_DEPARTMENT_ID=t.PK_DEPARTMENT_ID,C.DEPARTMENT_NAME=t.Department_Name,C.DEPARTMENT_CODE=t.Department_Code,C.IS_ACTIVE=t.Status,C.StatusSwitch=1==t.Status,C.ModelLabel="Update Departments",M(C)}x(!_)}(e.PK_DEPARTMENT_ID)},children:"Edit"})})},delete:function(e,t){return Object(r.jsx)("td",{className:"py-2",children:Object(r.jsx)(l.f,{color:"danger",variant:"outline",shape:"square",size:"sm",onClick:function(t){return function(e){if(e>0){var t=E.filter((function(t){return t.PK_DEPARTMENT_ID===e}))[0];C.PK_DEPARTMENT_ID=t.PK_DEPARTMENT_ID,C.DEPARTMENT_NAME=t.Department_Name,C.DEPARTMENT_CODE=t.Department_Code,C.IS_ACTIVE=t.Status,C.StatusSwitch=1==t.Status,C.ModelLabel="Update Department",M(C)}S(!N)}(e.PK_DEPARTMENT_ID)},children:"Delete"})})}}})})]})})}),Object(r.jsxs)(l.gb,{show:_,onClose:I,children:[Object(r.jsx)(l.jb,{closeButton:!0,children:C.ModelLabel}),Object(r.jsx)(l.hb,{children:Object(r.jsx)(l.wb,{children:Object(r.jsx)(l.u,{xs:"12",sm:"12",children:Object(r.jsx)(l.j,{children:Object(r.jsxs)(l.k,{children:[Object(r.jsxs)(l.wb,{children:[Object(r.jsx)(l.u,{xs:"6",children:Object(r.jsxs)(l.K,{children:[Object(r.jsx)(l.cb,{htmlFor:"name",children:"Department name"}),Object(r.jsx)(l.S,{id:"name",placeholder:"Enter Department name",name:"DEPARTMENT_NAME",value:C.DEPARTMENT_NAME,required:!0,onChange:function(e){return g(e)}})]})}),Object(r.jsx)(l.u,{xs:"6",children:Object(r.jsxs)(l.K,{children:[Object(r.jsx)(l.cb,{htmlFor:"ccnumber",children:"Department Code"}),Object(r.jsx)(l.S,{id:"COUNTRY_CODE",placeholder:"Enter Department Code",name:"DEPARTMENT_CODE",value:C.DEPARTMENT_CODE,required:!0,onChange:function(e){return g(e)}})]})})]}),Object(r.jsxs)(l.wb,{children:[Object(r.jsx)(l.u,{xs:"6",children:Object(r.jsxs)(l.K,{children:[Object(r.jsx)(l.cb,{htmlFor:"name",children:"Status"}),Object(r.jsx)(l.Hb,{className:"mx-1",variant:"3d",name:"StatusSwitch",color:"primary",checked:C.StatusSwitch,onChange:function(e){return function(e){var t=e.target,n=t.name;t.value,C.StatusSwitch=e.target.checked,C.IS_ACTIVE=1==e.target.checked?1:0,M(Object(a.a)(Object(a.a)({},C),{},Object(c.a)({},n,e.target.checked)))}(e)}})]})}),Object(r.jsx)(l.u,{xs:"6"})]})]})})})})}),Object(r.jsxs)(l.ib,{children:[Object(r.jsx)(l.f,{color:"success",onClick:function(e){return function(){if(C.DEPARTMENT_NAME&&C.DEPARTMENT_CODE){var e="http://localhost:51264/api/Departments"+(C.PK_DEPARTMENT_ID>0?"/"+C.PK_DEPARTMENT_ID:""),t={method:C.PK_DEPARTMENT_ID>0?"PUT":"POST",headers:{"Content-Type":"application/json"},"Access-Control-Allow-Origin":"*",body:JSON.stringify(C)};fetch(e,t).then((function(e){return e.json()})).then((function(e){return R(e)}))}else alert("Please fill out the fields")}()},children:"Save"}),Object(r.jsx)(l.f,{color:"secondary",onClick:I,children:"Cancel"})]})]}),Object(r.jsxs)(l.gb,{show:N,onClose:function(){return S(!N)},color:"danger",children:[Object(r.jsx)(l.jb,{closeButton:!0,children:Object(r.jsx)(l.kb,{children:"Delete Confirm"})}),Object(r.jsx)(l.hb,{children:"Do you want to delete this data?"}),Object(r.jsxs)(l.ib,{children:[Object(r.jsx)(l.f,{color:"danger",onClick:function(e){return function(){var e="http://localhost:51264/api/Departments/"+C.PK_DEPARTMENT_ID;fetch(e,{method:"DELETE",headers:{"Content-Type":"application/json"},"Access-Control-Allow-Origin":"*"}).then((function(e){return e.json()})).then((function(e){return k(e)}))}()},children:"Delete"})," ",Object(r.jsx)(l.f,{color:"secondary",onClick:function(){return S(!N)},children:"Cancel"})]})]})]})}}}]);
//# sourceMappingURL=13.122978af.chunk.js.map
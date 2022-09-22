"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[988],{8988:function(e,t,n){n.r(t),n.d(t,{default:function(){return y}});var a=n(2791),r=n(9434),s=n(885),c=n(335),i=function(e){return e.contacts.items},o=function(e){var t=e.contacts,n=e.filter;if(!n)return t.items;var a=n.toLowerCase();return t.items.filter((function(e){return e.name.toLowerCase().includes(a)}))},l={label:"ContactForm_label__-cVXI",input:"ContactForm_input__Bl93P",button:"ContactForm_button__eSwX9"},u=n(5206),d=(n(5462),n(9926)),m=n(2419),h=n(184),v=function(){var e=(0,a.useState)(""),t=(0,s.Z)(e,2),n=t[0],o=t[1],v=(0,a.useState)(""),f=(0,s.Z)(v,2),p=f[0],b=f[1],x=(0,r.v9)(i),_=(0,r.I0)(),j=function(e){var t=e.target,n=t.name,a=t.value;switch(n){case"name":o(a);break;case"number":b(a);break;default:return}};return(0,h.jsx)(h.Fragment,{children:(0,h.jsxs)("form",{className:l.form,onSubmit:function(e){e.preventDefault(),x.find((function(e){return e.name.toLowerCase()===n.toLowerCase()}))?u.Am.info("".concat(n," is already in contacts.")):(_((0,c.uK)({name:n,number:p})),o(""),b(""))},children:[(0,h.jsxs)("label",{className:l.label,children:["Name",(0,h.jsx)("input",{className:l.input,type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0,value:n,onChange:j})]}),(0,h.jsxs)("label",{className:l.label,children:["Number",(0,h.jsx)("input",{className:l.input,type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0,value:p,onChange:j})]}),(0,h.jsx)(d.Z,{type:"submit",variant:"contained",startIcon:(0,h.jsx)(m.Z,{}),children:"Add"})]})})},f="ContactList_list__csErn",p="ContactList_item__EZYHO",b=n(7247),x=function(e){var t=e.contacts,n=e.removeContact,a=t.map((function(e){var t=e.id,a=e.name,r=e.number;return(0,h.jsxs)("li",{className:p,children:[a,": ",r,(0,h.jsx)(d.Z,{onClick:function(){return n(t)},variant:"contained",startIcon:(0,h.jsx)(b.Z,{}),children:"Delete"})]},t)}));return(0,h.jsx)("ul",{className:f,children:a})},_=n(2988),j=function(e){return e.filter},C="MyContacts_label__vXZyt",Z="MyContacts_input__bl0Id",N=function(){var e=(0,r.v9)(o),t=(0,r.v9)(j),n=(0,r.I0)();(0,a.useEffect)((function(){n((0,c.yF)())}),[n]);return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)("h1",{children:"Phonebook"}),(0,h.jsx)(v,{}),(0,h.jsxs)("div",{title:"Contacts",children:[(0,h.jsxs)("label",{className:C,children:["Find contacts by name",(0,h.jsx)("input",{className:Z,type:"text",value:t,onChange:function(e){var t=e.target;n((0,_.i)(t.value))}})]}),(0,h.jsx)(x,{contacts:e,removeContact:function(e){n((0,c.zY)(e))}})]})]})},y=function(){return(0,h.jsx)("div",{className:"container",children:(0,h.jsx)(N,{})})}},2419:function(e,t,n){var a=n(4836);t.Z=void 0;var r=a(n(5649)),s=n(184),c=(0,r.default)((0,s.jsx)("path",{d:"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"}),"Add");t.Z=c},7247:function(e,t,n){var a=n(4836);t.Z=void 0;var r=a(n(5649)),s=n(184),c=(0,r.default)((0,s.jsx)("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"}),"Delete");t.Z=c}}]);
//# sourceMappingURL=988.c6d11538.chunk.js.map
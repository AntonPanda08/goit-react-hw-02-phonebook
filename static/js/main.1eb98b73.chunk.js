(this["webpackJsonpgoit-react-hw-02-phonebook"]=this["webpackJsonpgoit-react-hw-02-phonebook"]||[]).push([[0],{14:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(2),c=n.n(l),o=n(6),u=n(3),i=n(4),m=n(5),s=n(8),b=n(7),h=n(16);function f(e,t){return{name:e,id:Object(h.a)(),number:t}}var d=function(e){var t=e.contacts,n=e.onRemoveContact;return r.a.createElement("ul",null,t.map((function(e){var t=e.name,a=e.id,l=e.number;return r.a.createElement("li",{key:a},r.a.createElement("span",null,t,": ",l),r.a.createElement("button",{type:"button",onClick:function(){return n(a)}},"Delete"))})))},E=function(e){var t=e.filter,n=e.onChangeFilter;return r.a.createElement(r.a.Fragment,null,r.a.createElement("label",null,"Find contacts by name",r.a.createElement("br",null),r.a.createElement("input",{type:"text",value:t,onChange:n})))},v=function(e){var t=e.onHandleSubmit,n=e.onHandleChange,a=e.name,l=e.number;return r.a.createElement("form",{onSubmit:t},r.a.createElement("label",null,"Name",r.a.createElement("br",null),r.a.createElement("input",{type:"text",name:"name",value:a,onChange:n,required:!0})),r.a.createElement("br",null),r.a.createElement("label",null,"Contact",r.a.createElement("br",null),r.a.createElement("input",{type:"tel",name:"number",value:l,onChange:n,required:!0})),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("button",{type:"submit",value:"submit"},"Add contact"))},p=function(e){Object(s.a)(n,e);var t=Object(b.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,r=new Array(a),l=0;l<a;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={contacts:[],name:"",number:"",filter:""},e.handleChange=function(t){var n=t.target,a=n.name,r=n.value;e.setState(Object(u.a)({},a,r))},e.handleSubmit=function(t){t.preventDefault(),e.addContact()},e.changeFilter=function(t){e.setState({filter:t.target.value})},e.addContact=function(){var t=e.state,n=f(t.name,t.number);e.setState((function(t){return e.state.contacts.map((function(e){return e.name})).includes(t.name)?alert("".concat(t.name," is already in list")):{contacts:[].concat(Object(o.a)(t.contacts),[n])}}))},e.getContacts=function(){var t=e.state,n=t.contacts,a=t.filter;return n.filter((function(e){return e.name.toLowerCase().includes(a.toLocaleLowerCase())}))},e.removeContact=function(t){e.setState((function(e){return{contacts:e.contacts.filter((function(e){return e.id!==t}))}}))},e}return Object(m.a)(n,[{key:"render",value:function(){var e=this.state,t=e.contacts,n=e.name,a=e.number,l=e.filter;return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,"Phonebook"),r.a.createElement(v,{onHandleSubmit:this.handleSubmit,onHandleChange:this.handleChange,name:n,number:a}),r.a.createElement("br",null),t.length>1&&r.a.createElement(E,{filter:l,onChangeFilter:this.changeFilter}),r.a.createElement(d,{contacts:this.getContacts(),onRemoveContact:this.removeContact}))}}]),n}(a.Component);c.a.render(r.a.createElement(p,null),document.querySelector("#root"))},9:function(e,t,n){e.exports=n(14)}},[[9,1,2]]]);
//# sourceMappingURL=main.1eb98b73.chunk.js.map
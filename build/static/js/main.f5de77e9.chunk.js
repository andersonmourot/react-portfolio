(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],[,,,,,,,,,,,function(e,t,n){},,function(e,t,n){var r={"./virtual-event-pro.jpg":14,"./weather-dashboard.jpg":15,"./work-day-scheduler.jpg":16};function c(e){var t=a(e);return n(t)}function a(e){if(!n.o(r,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return r[e]}c.keys=function(){return Object.keys(r)},c.resolve=a,e.exports=c,c.id=13},function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/media/virtual-event-pro.4bc3d817.jpg"},function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/media/weather-dashboard.1a7ccd43.jpg"},function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/media/work-day-scheduler.c0e48f14.jpg"},function(e,t,n){"use strict";n.r(t);var r=n(1),c=n.n(r),a=n(6),i=n.n(a),s=(n(11),n(2)),o=(n.p,n(0));var l=function(e){return Object(o.jsxs)("header",{className:"flex-row space-between px-1",children:[Object(o.jsx)("h1",{children:"Anderson Mourot"}),e.children]})};function j(e){return e.charAt(0).toUpperCase()+e.slice(1)}function d(e){return e.replace(/-/g," ").replace(/(^\w|\s\w)/g,(function(e){return e.toUpperCase()}))}var u=function(e){var t=e.pages,n=void 0===t?[]:t,c=e.setCurrentPage,a=e.currentPage;return Object(r.useEffect)((function(){document.title=j(a.name)}),[a]),Object(o.jsx)("nav",{children:Object(o.jsx)("ul",{className:"flex-row",children:n.map((function(e){return Object(o.jsx)("li",{className:"mx-5 ".concat(a.name===e.name&&"navActive"),children:Object(o.jsx)("span",{onClick:function(){return c(e)},children:j(e.name)})},e.name)}))})})},h=function(e){return Object(o.jsx)("div",{children:e.children})};var m=function(){return Object(o.jsx)("section",{className:"my-5",children:Object(o.jsxs)("div",{className:"my-2",children:[Object(o.jsx)("div",{className:"profile-img my-5",children:Object(o.jsx)("i",{className:"fas fa-user-circle",style:{fontSize:"96px"}})}),Object(o.jsx)("p",{children:"My name is Anderson Mourot and I am from Little Rock, Arkansas. I recently completed the SMU Fullstack Coding Bootcamp to learn the front-end and back-end skills needed to find a job I am passionate about. Using HTML, CSS, and JavaScript to build websites are some of my favorite skills I have acquired. I have become very familiar with React and my ability to create dynamic applications that a user can easily navigate is something I value highly. Designing applications with user authentication and security is something I have worked with in many projects through my course work and a skill I am confident in. In my free time I enjoy going to concerts, basketball with friends, and skiing. I also enjoy traveling around the world and seeing new cities and cultures. In my portfolio you can view examples of the apps I have created, as well as contact me for more information. Thank you for visiting!"}),Object(o.jsx)("p",{children:"Contact me: andersongraymourot@gmail.com"})]})})};var b=function(e){var t=e.project,r=t.name,c=t.repo,a=t.link,i=t.description;return Object(o.jsxs)("div",{className:"project",children:[Object(o.jsx)("img",{src:n(13)("./".concat(r,".jpg")).default,alt:d(r),className:"project-bg"}),Object(o.jsxs)("div",{className:"project-text",children:[Object(o.jsxs)("h3",{children:[Object(o.jsx)("a",{href:a,children:d(r)})," ",Object(o.jsx)("a",{href:c,children:Object(o.jsx)("i",{className:"fab fa-github"})})]}),Object(o.jsx)("p",{children:i})]})]},r)};var p=function(){var e=Object(r.useState)([{name:"virtual-event-pro",description:"Event planning app",link:"https://virtual-event-pro.herokuapp.com/",repo:"https://github.com/andersonmourot/virtual-event-pro"},{name:"work-day-scheduler",description:"Daily planner",link:"https://andersonmourot.github.io/planner-project/",repo:"https://github.com/andersonmourot/planner-project"},{name:"weather-dashboard",description:"Weather searching engine",link:"https://andersonmourot.github.io/Weather-Dashboard/",repo:"https://github.com/andersonmourot/Weather-Dashboard"}]),t=Object(s.a)(e,1)[0];return Object(o.jsx)("div",{children:Object(o.jsx)("div",{className:"flex-row",children:t.map((function(e,t){return Object(o.jsx)(b,{project:e},"project"+t)}))})})},O=n(3),x=n(4);var f=function(){var e=Object(r.useState)({name:"",email:"",message:""}),t=Object(s.a)(e,2),n=t[0],c=t[1],a=Object(r.useState)(""),i=Object(s.a)(a,2),l=i[0],j=i[1],d=n.name,u=n.email,h=n.message,m=function(e){if("email"===e.target.name){var t=function(e){return/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(e).toLowerCase())}(e.target.value);j(t?"":"Your email is invalid.")}else e.target.value.length?j(""):j("".concat(e.target.name," is required."));l||(c(Object(x.a)(Object(x.a)({},n),{},Object(O.a)({},e.target.name,e.target.value))),console.log("Handle Form",n))};return Object(o.jsx)("section",{children:Object(o.jsxs)("form",{id:"contact-form",onSubmit:function(e){e.preventDefault(),l||console.log("Submit Form",n)},children:[Object(o.jsxs)("div",{children:[Object(o.jsx)("p",{children:"Email: andersongraymourot@gmail.com"}),Object(o.jsx)("label",{htmlFor:"name",children:"Name:"}),Object(o.jsx)("input",{type:"text",name:"name",defaultValue:d,onBlur:m})]}),Object(o.jsxs)("div",{children:[Object(o.jsx)("label",{htmlFor:"email",children:"Email address:"}),Object(o.jsx)("input",{type:"email",name:"email",defaultValue:u,onBlur:m})]}),Object(o.jsxs)("div",{children:[Object(o.jsx)("label",{htmlFor:"message",children:"Message:"}),Object(o.jsx)("textarea",{name:"message",rows:"5",defaultValue:h,onBlur:m})]}),l&&Object(o.jsx)("div",{children:Object(o.jsx)("p",{className:"error-text",children:l})}),Object(o.jsx)("button",{type:"submit",children:"Submit"})]})})};var g=function(){return Object(o.jsx)("section",{className:"my-5",children:Object(o.jsxs)("div",{className:"my-2",children:[Object(o.jsxs)("p",{children:["Download my ",Object(o.jsx)("a",{href:"https://docs.google.com/document/d/1zTbcfJn25Nduy70J9shicxz3l5dDaf5M6_dlP18Mrd4/edit?usp=sharing",children:"resum\xe9"})]}),Object(o.jsx)("h3",{children:"Front-end Experience"}),Object(o.jsxs)("ul",{className:"skills",children:[Object(o.jsx)("li",{children:"HTML"}),Object(o.jsx)("li",{children:"CSS"}),Object(o.jsx)("li",{children:"JavaScript"}),Object(o.jsx)("li",{children:"jQuery"}),Object(o.jsx)("li",{children:"Responsive design"}),Object(o.jsx)("li",{children:"React"}),Object(o.jsx)("li",{children:"Bootstrap"}),Object(o.jsx)("li",{children:"MERN Stack"}),Object(o.jsx)("li",{children:"State Manipulation"}),Object(o.jsx)("li",{children:"Model-View-Controller Pattern"})]}),Object(o.jsx)("h3",{children:"Back-end Experiece"}),Object(o.jsxs)("ul",{className:"skills",children:[Object(o.jsx)("li",{children:"APIs"}),Object(o.jsx)("li",{children:"Node.js"}),Object(o.jsx)("li",{children:"Express.js"}),Object(o.jsx)("li",{children:"MySQL, Sequelize"}),Object(o.jsx)("li",{children:"MongoDB, Mongoose"}),Object(o.jsx)("li",{children:"REST"}),Object(o.jsx)("li",{children:"GraphQL"}),Object(o.jsx)("li",{children:"Object-Oriented Programming"}),Object(o.jsx)("li",{children:"Bcrypt"}),Object(o.jsx)("li",{children:"User Authentication"})]}),Object(o.jsx)("p",{children:"Contact me: andersongraymourot@gmail.com"})]})})};var v=function(e){var t=e.currentPage;return Object(o.jsxs)("section",{children:[Object(o.jsx)("h2",{children:j(t.name)}),Object(o.jsx)(h,{children:function(){switch(t.name){case"portfolio":return Object(o.jsx)(p,{});case"about me":default:return Object(o.jsx)(m,{});case"contact":return Object(o.jsx)(f,{});case"resume":return Object(o.jsx)(g,{})}}()})]})};var w=function(){return Object(o.jsx)("footer",{className:"flex-row px-1",children:[{name:"fab fa-github",link:"https://github.com/"},{name:"fab fa-linkedin",link:"https://www.linkedin.com/"},{name:"fab fa-stack-overflow",link:"https://stackoverflow.com/"}].map((function(e){return Object(o.jsx)("a",{href:e.link,target:"_blank",rel:"noopener noreferrer",children:Object(o.jsx)("i",{className:e.name})},e.name)}))})};var y=function(){var e=Object(r.useState)([{name:"portfolio"},{name:"resume"},{name:"about me"},{name:"contact"}]),t=Object(s.a)(e,1)[0],n=Object(r.useState)(t[0]),c=Object(s.a)(n,2),a=c[0],i=c[1];return Object(o.jsxs)("div",{children:[Object(o.jsx)(l,{children:Object(o.jsx)(u,{pages:t,setCurrentPage:i,currentPage:a})}),Object(o.jsx)("main",{children:Object(o.jsx)(v,{currentPage:a})}),Object(o.jsx)(w,{})]})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(Object(o.jsx)(c.a.StrictMode,{children:Object(o.jsx)(y,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[17,1,2]]]);
//# sourceMappingURL=main.f5de77e9.chunk.js.map
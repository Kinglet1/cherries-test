(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,n,o){e.exports=o(18)},16:function(e,n,o){},17:function(e,n,o){},18:function(e,n,o){"use strict";o.r(n);var t=o(0),a=o.n(t),i=o(3),c=o.n(i),s=(o(16),o(4)),r=o(5),l=o(8),d=o(6),p=o(9),u=o(7),m=o.n(u),h=(o(17),o(1)),g=o.n(h),w=function(e){function n(){return Object(s.a)(this,n),Object(l.a)(this,Object(d.a)(n).apply(this,arguments))}return Object(p.a)(n,e),Object(r.a)(n,[{key:"componentDidMount",value:function(){console.log("start component did mount"),g.a.send("VKWebAppInit",{}),g.a.subscribe(function(e){console.log(e)}),window.addEventListener("message",function(e){console.log(e)}),window.addEventListener("vk-connect",function(e){console.log(e)}),g.a.send("VKWebAppGetUserInfo",{}),g.a.send("VKWebAppResizeWindow",{width:1e3,height:550}),setTimeout(function(){g.a.send("VKWebAppResizeWindow",{width:600,height:550})},3e3),setTimeout(function(){g.a.send("VKWebAppResizeWindow",{width:800,height:550})},5e3),console.log("end component did mount")}},{key:"render",value:function(){return a.a.createElement("div",{className:"App"},a.a.createElement("header",{className:"App-header"},a.a.createElement("img",{src:m.a,className:"App-logo",alt:"logo"}),a.a.createElement("p",null,"Edit ",a.a.createElement("code",null,"src/App.js")," and save to reload."),a.a.createElement("a",{className:"App-link",href:"https://reactjs.org",target:"_blank",rel:"noopener noreferrer"},"Learn React")))}}]),n}(t.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));g.a.send("VKWebAppInit",{}),g.a.subscribe(function(e){console.log(e)}),console.log("subscribed"),c.a.render(a.a.createElement(w,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},7:function(e,n,o){e.exports=o.p+"static/media/logo.5d5d9eef.svg"}},[[10,1,2]]]);
//# sourceMappingURL=main.f153d451.chunk.js.map
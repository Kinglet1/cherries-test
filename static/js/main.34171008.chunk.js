(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{130:function(e,t,n){e.exports=n(326)},136:function(e,t,n){},137:function(e,t,n){e.exports=n.p+"static/media/logo.5d5d9eef.svg"},138:function(e,t,n){},326:function(e,t,n){"use strict";n.r(t);var a=n(17),i=n.n(a),s=n(124),o=n.n(s),r=(n(136),n(125)),l=n(126),d=n(128),c=n(127),u=n(129),p=(n(137),n(138),n(45)),m=n.n(p),h=(n(139),function(e){function t(){var e,n;Object(r.a)(this,t);for(var a=arguments.length,i=new Array(a),s=0;s<a;s++)i[s]=arguments[s];return(n=Object(d.a)(this,(e=Object(c.a)(t)).call.apply(e,[this].concat(i)))).state={isInitHandled:!1,isInitHandledPromise:!1,isUserDataRequestHandled:!1,userFirstName:null},n}return Object(u.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this;m.a.subscribe(function(t){console.log(t),"VKWebAppInitResult"===t.detail.type&&e.setState({isInitHandled:!0}),"VKWebAppGetUserInfoResult"===t.detail.type&&(e.setState({isUserDataRequestHandled:!0}),e.setState({userFirstName:t.detail.data.first_name}))}),m.a.send("VKWebAppGetUserInfo",{}),m.a.send("VKWebAppResizeWindow",{width:1e3,height:550})}},{key:"render",value:function(){return i.a.createElement("div",{className:"App"},i.a.createElement("div",{style:{backgroundColor:"lightblue"}},i.a.createElement("div",null,"isInitHandled: ",this.state.isInitHandled.toString()),i.a.createElement("div",null,"isInitHandledPromise: ",this.state.isInitHandledPromise.toString()),i.a.createElement("div",null,"isUserDataRequestHandled: ",this.state.isUserDataRequestHandled.toString()),i.a.createElement("div",null,"userFirstName: ",this.state.userFirstName)))}}]),t}(a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));m.a.send("VKWebAppInit",{}),o.a.render(i.a.createElement(h,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[130,1,2]]]);
//# sourceMappingURL=main.34171008.chunk.js.map
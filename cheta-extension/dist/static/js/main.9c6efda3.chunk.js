(this["webpackJsonpcheta-extension"]=this["webpackJsonpcheta-extension"]||[]).push([[0],{12:function(e,t,a){},14:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),l=a(2),c=a.n(l),r=(a(12),a(3)),s=a(4),i=a(6),u=a(5),d=(a(13),function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(r.a)(this,a),(n=t.call(this,e)).loadJquery=function(){},n.makeid=function(e){for(var t="",a="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=a.length,o=0;o<e;o++)t+=a.charAt(Math.floor(Math.random()*n));return t},n.detectUniqueCode=function(){n.setState({loadingUniqueCode:!0});var e=document.querySelectorAll("input");console.log(e),e.forEach((function(e,t){console.log(e)})),n.setState({loadingUniqueCode:!1})},n.nextTapped_det=function(){console.log("test");var e={code:n.state.uniqueCode};chrome.tabs.executeScript({code:"var config = "+JSON.stringify(e)},(function(){chrome.tabs.executeScript({file:"switch.js"})}))},n.state={uniqueCode:"cheta-detectme_",loadingUniqueCode:!1},n}return Object(s.a)(a,[{key:"componentDidMount",value:function(){this.loadJquery()}},{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement("div",{className:"header"},o.a.createElement("h1",null,"ChETA"),o.a.createElement("p",null,"Chrome Extension for Text Analysis")),o.a.createElement("div",{className:"contentBox"},o.a.createElement("div",{className:"no-tf-dtctd"},o.a.createElement("p",null,"To start analysing a textfield, ",o.a.createElement("span",{className:"resalted"},"follow the steps"),":"),o.a.createElement("p",null,"1. ",o.a.createElement("span",{className:"resalted"},"Locate the field")," you want to analyse"),o.a.createElement("p",null,"2. Replace or ",o.a.createElement("span",{className:"resalted"},"add")," anywhere on the field ",o.a.createElement("span",{className:"resalted"},"the following code"),":"),o.a.createElement("p",null,"Code: ",o.a.createElement("span",{className:"resalted"},this.state.uniqueCode)),o.a.createElement("p",null,"3. When ready, click start"),this.state.loadingUniqueCode?o.a.createElement("p",null,"Loading..."):o.a.createElement("a",{href:"#",onClick:this.nextTapped_det},"Start"))),o.a.createElement("div",{className:"footer"},o.a.createElement("a",{href:"https://juancurti.com",target:"_blank"},o.a.createElement("p",null,"Juan Curti - 2020"))))}}]),a}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(d,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},7:function(e,t,a){e.exports=a(14)}},[[7,1,2]]]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,function(e,a,s){e.exports=s(18)},,,,,,function(e,a,s){},function(e,a,s){},function(e,a,s){},function(e,a,s){},function(e,a,s){"use strict";s.r(a);var t=s(0),r=s.n(t),c=s(2),n=s.n(c),o=(s(14),s(3)),l=s(4),i=s(6),m=s(5),d=s(7);s(15);var u=function(e){return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row",id:"topBanner"},r.a.createElement("div",{className:"col-md-4",id:"name"},"Clicky Game!"),r.a.createElement("div",{className:"col-md-4",id:"message"},e.message),r.a.createElement("div",{className:"col-md-4",id:"scores"},"Your score = ",e.numGuesses,r.a.createElement("br",null),"Top Score = ",e.highScore)))};s(16);var g=function(e){return r.a.createElement("div",{className:"card imageCard"},r.a.createElement("div",{className:"card-body"},r.a.createElement("img",{src:e.source,className:"images",alt:"character",onClick:function(){return e.chooseImage(e.refId)}})))},h=(s(17),[{url:"../images/buggs.jpg",refId:0,selected:!1},{url:"../images/daffy.jpg",refId:1,selected:!1},{url:"../images/elmer.jpg",refId:2,selected:!1},{url:"../images/foghorn.jpg",refId:3,selected:!1},{url:"../images/marvin.png",refId:4,selected:!1},{url:"../images/porky.png",refId:5,selected:!1},{url:"../images/sam.png",refId:6,selected:!1},{url:"../images/sylvester.png",refId:7,selected:!1},{url:"../images/taz.jpg",refId:8,selected:!1},{url:"../images/tweety.png",refId:9,selected:!1},{url:"../images/wile.jpg",refId:10,selected:!1},{url:"../images/gossamer.jpg",refId:11,selected:!1}]),f=function(e){function a(){var e,s;Object(o.a)(this,a);for(var t=arguments.length,r=new Array(t),c=0;c<t;c++)r[c]=arguments[c];return(s=Object(i.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(r)))).state={images:h,numGuesses:0,highScore:0,message:"Click on a character. But don't choose the same one twice!"},s.stopShake=function(){document.querySelectorAll("div.imageCard").forEach(function(e){e.classList.remove("apply-shake")})},s.shakeImages=function(){document.querySelectorAll("div.imageCard").forEach(function(e){e.classList.add("apply-shake")}),setTimeout(s.stopShake,750)},s.shuffelImages=function(e){for(var a=e.slice(0),s=[],t=0,r=0;r<e.length;r++)t=Math.floor(Math.random()*(a.length-1+1)),s.push(a[t]),a.splice(t,1);return s},s.chooseImage=function(e){var a=s.state.highScore,t=0,r="";if(!1===h[e].selected)h[e].selected=!0,r="You chose correctly!  Choose another.",(t=s.state.numGuesses+1)>a&&(a=t,r="You have the new high score!  Keep going");else{s.shakeImages(),r="Game over, loser!  Start again.";for(var c=0;c<h.length-1;c++)console.log(c),h[c].selected=!1}var n=s.shuffelImages(h);s.setState({images:n,numGuesses:t,highScore:a,message:r}),console.log(h)},s}return Object(d.a)(a,e),Object(l.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"container",id:"fullScreen"},r.a.createElement(u,{numGuesses:this.state.numGuesses,highScore:this.state.highScore,message:this.state.message}),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-2"}),r.a.createElement("div",{className:"col-md-8"},this.state.images.map(function(a){return r.a.createElement(g,{chooseImage:e.chooseImage,key:a.refId,source:a.url,refId:a.refId})})),r.a.createElement("div",{className:"col-md-2"})))}}]),a}(t.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n.a.render(r.a.createElement(f,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[8,1,2]]]);
//# sourceMappingURL=main.bf2f5b55.chunk.js.map
(()=>{"use strict";var n=[{fond:"#333333",screen:{fond:"#b8c0a9",data:"#333333"},buttons:{fond:"#838383",data:"#fcfcfc"}},{fond:"#333333",screen:{fond:"aliceblue",data:"#333333"},buttons:{fond:"aliceblue",data:"#333333"}},{fond:"#019a9c",screen:{fond:"aliceblue",data:"#333333"},buttons:{fond:"aliceblue",data:"#333333"}},{fond:"#565c6c",screen:{fond:"#36b7d4",data:"#333333"},buttons:{fond:"#36b7d4",data:"#333333"}}],t={"--fond":n[0].fond,"--screenFond":n[0].screen.fond,"--screenColor":n[0].screen.data,"--buttonsFond":n[0].buttons.fond,"--buttonsColor":n[0].buttons.data};const o=n,e=function(n){var t=document.documentElement;Object.entries(n).forEach((function(n){t.style.setProperty(n[0],n[1])}))};var d=document.getElementById("color_scheme");o.forEach((function(n,t){var o=document.createElement("div");o.setAttribute("index",t),o.setAttribute("class","colors_container");var c={"--fond":n.fond,"--screenFond":n.screen.fond,"--screenColor":n.screen.data,"--buttonsFond":n.buttons.fond,"--buttonsColor":n.buttons.data};o.addEventListener("click",(function(){e(c)}));for(var a=1;a<=3;a++){var r=document.createElement("div");1===a&&(r.style.backgroundColor=n.fond),2===a&&(r.style.backgroundColor=n.screen.fond),3===a&&(r.style.backgroundColor=n.buttons.fond),r.setAttribute("class","colors_container_child_".concat(a)),o.append(r)}d.append(o)})),e(t)})();
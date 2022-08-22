         win = window.open();
         win.document.body.style.margin = "0";
         win.document.body.style.height = "100vh";
    
         var iframe = win.document.createElement("iframe");
         iframe.style.border = "none";
         iframe.style.width = "100%";
         iframe.style.height = "100%";
         iframe.style.margin = "0";
         iframe.referrerpolicy = "no-referrer";
         iframe.allow = "fullscreen";
         win.document.body.appendChild(iframe);
         iframe.src = "https://cyclonehacks.github.io";

         window.close()




"use strict";

!function() {
    var t = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyY2NiMzIxZTFhMzAyNmQ2MTVjNTc4NCIsInRva2VuVHlwZSI6InB1YmxpYyIsImlhdCI6MTY1NzU4MjU3OCwiZXhwIjoxNDI3MTk4MjU3OH0.ISHUHimbSXV16jAfgS50PartQWZlOBSSDXRNkOfdsro";
    function e() {
        var e = document.createElement("script"), a = navigator.language || navigator.userLanguage;
        e.type = "text/javascript", e.async = !0, e.src = "https://api.searchbar.org/v1/widget/" + t + "/" + a;
        var n = document.getElementsByTagName("script")[0];
        n.parentNode.insertBefore(e, n);
    }
    "complete" === document.readyState ? e() : window.attachEvent ? window.attachEvent("onload", e) : window.addEventListener("load", e, !1);
}();

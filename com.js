  if (!window.hcb_user) {
        hcb_user = {};
      }(function() {
        var s = document.createElement("script"),
          l = hcb_user.PAGE || ("" + window.location).replace(/'/g, "%27"),
          h = "https://www.htmlcommentbox.com";
        s.setAttribute("type", "text/javascript");
        s.setAttribute("src", h + "/jread?page=" + encodeURIComponent(l).replace("+", "%2B") + "&opts=16798&num=10&ts=1656613942991");
        if (typeof s != "undefined") document.getElementsByTagName("head")[0].appendChild(s);
      })(); /*-->*/
    </script>
    <script>
      window.alert Hello welcome.Thank you
      for going on our website.Please tell your friends about us.Thank you;
    </script>
    <script data-sil-id="62bdf054e431f8001edbbb4e">
      var loadWidget = function() {
        var d = document,
          w = window,
          l = window.location,
          p = l.protocol == "file:" ? "http://" : "//";
        if (!w.WS) w.WS = {};
        c = w.WS;
        var m = function(t, o) {
          var e = d.getElementsByTagName("script");
          e = e[e.length - 1];
          var n = d.createElement(t);
          if (t == "script") {
            n.async = true;
          }
          for (k in o) n[k] = o[k];
          e.parentNode.insertBefore(n, e)
        };
        m("script", {
          src: p + "bawkbox.com/widget/like-dislike/62bdf054e431f8001edbbb4e?page=" + encodeURIComponent(l + ''),
          type: 'text/javascript'
        });
        c.load_net = m;
      };
      if (window.Squarespace) {
        document.addEventListener('DOMContentLoaded', loadWidget);
        setTimeOut(function() {
          document.addEventListener('DOMContentLoaded', loadWidget);
        }, 3000)
      } else {
        loadWidget()
      }

/*
Browserx
Version 1.0
Author : Dilusha Gonagala
License : MIT
*/


/*Main Anonymous function wrapper */
(function(Browserx) {

  "use strict";

  var browserx = {

    /*ThisBrowser :: Browser Detection Component : Beta ( Not Recommended, but for badly wanted users.. :)  )*/
    getInfo: function() {
      "use strict";

      var ua = navigator.userAgent,
        tem, M = ua.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || [];
      if (/trident/i.test(M[1])) {
        tem = /\brv[ :]+(\d+)/g.exec(ua) || [];
        return {
          name: 'IE',
          version: (tem[1] || '')
        };
      }
      if (M[1] === 'Chrome') {
        tem = ua.match(/\bOPR\/(\d+)/)
        if (tem != null) {
          return {
            name: 'Opera',
            version: tem[1]
          };
        }
      }
      M = M[2] ? [M[1], M[2]] : [navigator.appName, navigator.appVersion, '-?'];
      if ((tem = ua.match(/version\/(\d+)/i)) != null) {
        M.splice(1, 1, tem[1]);
      }
      return {
        name: M[0],
        version: M[1]
      };



    },




  };

  window.browserx = browserx;

}(window.browserx = window.browserx || {}));

(function(document) {
  //'use strict'; 

  // Grab a reference to our auto-binding template
  // and give it some initial binding values
  // Learn more about auto-binding templates at http://goo.gl/Dx1u2g
  var app = document.querySelector('#app');
  
  app.displayInstalledToast = function() {
    document.querySelector('#caching-complete').show();
  };

  // Listen for template bound event
  app.addEventListener('dom-change', function() {
    console.log('bindings have resolved and content has been stamped to the page');
  });

  // See https://github.com/Polymer/polymer/issues/1381
  // window.addEventListener('WebComponentsReady', function() {
  //   console.log('imports are loaded and elements have been registered');
  // });

  // Close drawer after menu item is selected if drawerPanel is narrow
  app.onMenuSelect = function() {
    var drawerPanel = document.querySelector('#paperDrawerPanel');
    if (drawerPanel.narrow) {
      drawerPanel.closeDrawer();
    }
  };

  function onDeviceReady() { StatusBar.backgroundColorByHexString("#388E3C") }
  document.addEventListener("deviceready", onDeviceReady, false);


/********************************************** TAGIHAN SCRIPT **********************************************/

    window.addEventListener('WebComponentsReady', function() {
        app.triggerRefresh = Math.random()
    });

    app.refreshClick = function() {
        app.triggerRefresh = Math.random()
    }

    app.fabClick = function() {
        app.triggerTambah = true
    }

    app.halaman_sekarang = "Tagihan";
    app.total = "Rp0";

/********************************************** TAGIHAN SCRIPT **********************************************/


})(document);

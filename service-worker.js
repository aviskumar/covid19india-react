if (typeof importScripts === 'function') {
  importScripts(
    'https://storage.googleapis.com/workbox-cdn/releases/5.0.0/workbox-sw.js'
  );

  /* global workbox */
  if (workbox) {
    console.log('Workbox is loaded 🚀');
    workbox.core.skipWaiting();

    /* injection point for manifest files.  */
    workbox.precaching.precacheAndRoute([{"revision":"b34bd6c1fb95d6824cb6353c06da6252","url":"404.html"},{"revision":"0c209acdd19f6732370568f7a6ae0bdf","url":"ece08537062c28a2a7c1.worker.js"},{"revision":"ad8463d1313fed60e1d10324511efdc3","url":"fonts/Archia/archia-bold-webfont.woff2"},{"revision":"80da55a565ba8976b8e9e84e8c511bf7","url":"fonts/Archia/archia-medium-webfont.woff2"},{"revision":"890ee929da47c4931933ff77fd557520","url":"fonts/Archia/archia-semibold-webfont.woff2"},{"revision":"b34bd6c1fb95d6824cb6353c06da6252","url":"index.html"},{"revision":"3a9110ae9e9919cf864852f316e8e086","url":"static/css/2.1432c553.chunk.css"},{"revision":"1139c7f91659b8d1e1f13fd2fdfdf753","url":"static/css/21.f5f9d973.chunk.css"},{"revision":"e1b4bb7171f893224fd40d3fb983c9a2","url":"static/css/22.80df4701.chunk.css"},{"revision":"038a830223503314180873a2c08b9a52","url":"static/js/0.3d2b55ab.chunk.js"},{"revision":"18c9d2bfc722eff8d10783b637c092bc","url":"static/js/1.30ca0fff.chunk.js"},{"revision":"b2b36ba74ff7557b0696ee8c3f06b696","url":"static/js/11.0d4e9953.chunk.js"},{"revision":"f0e56ef0238fc71aa1aa0f8bf2e053c6","url":"static/js/12.c586d1ae.chunk.js"},{"revision":"6eb5204046a4c3fbcea90ebdc52db2e5","url":"static/js/13.dc5ddae5.chunk.js"},{"revision":"1ada49f99ef7dd8530daaab32654ac58","url":"static/js/14.2963e855.chunk.js"},{"revision":"e8fa3ebb53dac5a045e860b798a01685","url":"static/js/15.9e68ff3e.chunk.js"},{"revision":"b01b27c5c0077c7f6e3a714f59837567","url":"static/js/16.0f36c5df.chunk.js"},{"revision":"96576d9bf2a8c516ac90e8a81cde4583","url":"static/js/17.70104996.chunk.js"},{"revision":"998ebb327fdeef610d459ca0b03eacc4","url":"static/js/18.9616a3da.chunk.js"},{"revision":"f06d1118a387cc093e08cc34be408983","url":"static/js/19.98e7f1a4.chunk.js"},{"revision":"f0fbd43ae3c7cb2bce87ae3f37d9b816","url":"static/js/2.b9040596.chunk.js"},{"revision":"830a95f4fc87cc309076b2576a5d427b","url":"static/js/20.92951fb5.chunk.js"},{"revision":"7fe2244f7c541c5b306ada08aba7882c","url":"static/js/21.7aa10b85.chunk.js"},{"revision":"ad9b81997b299d05ee1f693215c08f01","url":"static/js/22.469dede5.chunk.js"},{"revision":"f11fd49ee91bf0ccfbc7d20d3848f0c9","url":"static/js/23.da08791a.chunk.js"},{"revision":"1c9e0f5320a47551acfbb2f402a07859","url":"static/js/24.5885dac0.chunk.js"},{"revision":"6a51925bab612152421d5aa072ac3de4","url":"static/js/25.61311f90.chunk.js"},{"revision":"1ec8c0d99cc8a365440558b944428bda","url":"static/js/26.27fbc2c4.chunk.js"},{"revision":"e23c6c1573ae6273a15f2af089f1feab","url":"static/js/27.f8f901a7.chunk.js"},{"revision":"68602eb39d94762e6971200cfd7a0378","url":"static/js/28.4cd44dcc.chunk.js"},{"revision":"57e6ab56f29d5879970e0d4630fb999a","url":"static/js/29.d35901d5.chunk.js"},{"revision":"a449927f023e35bc1f16ee17230bdb8d","url":"static/js/3.9b19a045.chunk.js"},{"revision":"7678096d759baba6ac506f4ff6ee0521","url":"static/js/30.b89a15b2.chunk.js"},{"revision":"a0caa46545114dbf7bdd85d8ed292436","url":"static/js/31.297ef46f.chunk.js"},{"revision":"4df30bb992f4a38eaf6ddf73f7b1c891","url":"static/js/32.c030089c.chunk.js"},{"revision":"861a6fc58da8209b9b757af0129ee84f","url":"static/js/33.6ce94854.chunk.js"},{"revision":"1a7d0f77ca3518bcadbb7b993d2db172","url":"static/js/34.97ebdad7.chunk.js"},{"revision":"99cc2e331a3fa57cb625740148ee68ff","url":"static/js/35.a5d78a3a.chunk.js"},{"revision":"e4f0b0a09624eb8e6f702a8ebe344dad","url":"static/js/36.9e317986.chunk.js"},{"revision":"8f42d1fff05b2906b2d8d37cc288cd02","url":"static/js/37.a4d84b9f.chunk.js"},{"revision":"84888cd96c83bb3038399f352bace760","url":"static/js/38.eaebc025.chunk.js"},{"revision":"cb9917dd5169c3f7513d0b40ba2ee29f","url":"static/js/39.97db4fe0.chunk.js"},{"revision":"6f2d773a71432e513a78fcdf2626b9a0","url":"static/js/4.2c0898e3.chunk.js"},{"revision":"66fe498228c787b5fa84d26609aafd4b","url":"static/js/40.9b152785.chunk.js"},{"revision":"6762dc4549227e6005eaa82ce85a37ad","url":"static/js/41.c93a542b.chunk.js"},{"revision":"82d77aeec6dd8502a120ca111620e34e","url":"static/js/42.bf6a8fcc.chunk.js"},{"revision":"6df0f62b143a875f176d87f6496473e6","url":"static/js/43.756b44c3.chunk.js"},{"revision":"8a5ee77505336a9767bae92e13cd2703","url":"static/js/44.d39fb641.chunk.js"},{"revision":"16420bf4cc6eaaabf9bd5ed07eec2b84","url":"static/js/45.d3aa4888.chunk.js"},{"revision":"33d3745b8c81230ed14d088c152051f8","url":"static/js/5.84109924.chunk.js"},{"revision":"37a80a63c38d674ed0b59258ea8a8425","url":"static/js/6.536ea07e.chunk.js"},{"revision":"685a5ab8c030d3b9b38ab827d8d37336","url":"static/js/7.25f0e432.chunk.js"},{"revision":"a1903eec76e649faf902b823ffe782dd","url":"static/js/8.88baea78.chunk.js"},{"revision":"b8dfd0a4fad8cbed721d5ca8e636186e","url":"static/js/main.ccc7ea1b.chunk.js"},{"revision":"c8f60e3961a1a5e52151d67fa18d81a9","url":"static/js/runtime-main.f88c2072.js"}]);

    /* custom cache rules */
    workbox.routing.registerRoute(
      new workbox.routing.NavigationRoute(
        new workbox.strategies.NetworkFirst({
          cacheName: 'PRODUCTION',
        })
      )
    );

    // Adding staleWhileRevalidate for all js files. Provide faster access from cache while revalidating in the background
    workbox.routing.registerRoute(
      /.*\.js$/,
      new workbox.strategies.StaleWhileRevalidate()
    );

    // Adding staleWhileRevalidate for all html files
    workbox.routing.registerRoute(
      /.*\.html/,
      new workbox.strategies.StaleWhileRevalidate()
    );

    // Adding staleWhileRevalidate for all css files
    workbox.routing.registerRoute(
      /.*\.css/,
      new workbox.strategies.StaleWhileRevalidate()
    );

    // Adding networkFirst for all json data. In offline mode will be fetched from cache
    workbox.routing.registerRoute(
      new RegExp('https://data\\.covid19india\\.org/.*\\.json'),
      new workbox.strategies.NetworkFirst(),
      'GET'
    );
  } else {
    console.log('Workbox could not be loaded. Hence, no offline support.');
  }
}

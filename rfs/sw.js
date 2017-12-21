self.importScripts('/assets/js/vendor/workbox-sw.prod.v2.1.2.js')

const workboxSW = new self.WorkboxSW()
workboxSW.precache([
  {
    "url": "assets/brand/bootstrap-outline.svg",
    "revision": "9537646a9202cb5dca44e9034c1b414b"
  },
  {
    "url": "assets/brand/bootstrap-punchout.svg",
    "revision": "372e344ac243c4fa7c6c8b8a2af0e5ff"
  },
  {
    "url": "assets/brand/bootstrap-social-logo.png",
    "revision": "1e9e93d863b7811934889f9aac89c7de"
  },
  {
    "url": "assets/brand/bootstrap-social.png",
    "revision": "56be615bbca4502de5d55d721dae917f"
  },
  {
    "url": "assets/brand/bootstrap-solid.svg",
    "revision": "ea931a5b98a97e8b8658d9f6d537329e"
  },
  {
    "url": "assets/css/docs.min.css",
    "revision": "50ca526a897ae307c213b491a57fcfeb"
  },
  {
    "url": "assets/img/bootstrap-stack.png",
    "revision": "7384412324c769e447d3c4f86e9ff068"
  },
  {
    "url": "assets/img/bootstrap-themes.png",
    "revision": "3976b58ff407451e8e8b598fdcde2cd2"
  },
  {
    "url": "assets/img/favicons/android-chrome-192x192.png",
    "revision": "643718426d0a7d60036217ba988155be"
  },
  {
    "url": "assets/img/favicons/android-chrome-512x512.png",
    "revision": "eb512e79165f504fd4da4d2758d5584b"
  },
  {
    "url": "assets/img/favicons/apple-touch-icon.png",
    "revision": "042a7e9fdd293212aca19150aef71b0d"
  },
  {
    "url": "assets/img/favicons/favicon-16x16.png",
    "revision": "50c62448d4014e5fb411887c05c2935b"
  },
  {
    "url": "assets/img/favicons/favicon-32x32.png",
    "revision": "fed84e16b6ccfe88ee7ffaae5dfefd34"
  },
  {
    "url": "assets/img/favicons/manifest.json",
    "revision": "37b2f47624e77e4086eec1a09dc8c5bd"
  },
  {
    "url": "assets/img/favicons/mstile-144x144.png",
    "revision": "84892991321e7998ca4c80ae21175f78"
  },
  {
    "url": "assets/img/favicons/mstile-150x150.png",
    "revision": "61821c45a353e259bb83f9b0d338f5e8"
  },
  {
    "url": "assets/img/favicons/mstile-310x150.png",
    "revision": "913e1b81006831c72a7bca38e4125edb"
  },
  {
    "url": "assets/img/favicons/mstile-310x310.png",
    "revision": "29d79a7e648876504496211f003c4076"
  },
  {
    "url": "assets/img/favicons/mstile-70x70.png",
    "revision": "386d71707992eb91fc53df303e99c2e7"
  },
  {
    "url": "assets/img/favicons/safari-pinned-tab.svg",
    "revision": "6b6b78894033fd91ce75affb548d8e67"
  },
  {
    "url": "assets/js/docs.min.js",
    "revision": "b9509f415a899970396c5cf61dc0e6a0"
  },
  {
    "url": "assets/js/src/application.js",
    "revision": "4c2767f364febfaf08e0bd9fb6f1cd94"
  },
  {
    "url": "assets/js/src/ie-emulation-modes-warning.js",
    "revision": "cd93c9a569232ea30bb22244eebff1e0"
  },
  {
    "url": "assets/js/src/pwa.js",
    "revision": "e707568440725d56f34b93b0bb2350a4"
  },
  {
    "url": "assets/js/vendor/anchor.min.js",
    "revision": "01e6254e9f69c0c00f05060b0e1990fc"
  },
  {
    "url": "assets/js/vendor/clipboard.min.js",
    "revision": "3e5e0fa949e0e7c5ed5fed7b4cc0ee00"
  },
  {
    "url": "assets/js/vendor/holder.min.js",
    "revision": "6266d87979b32f717d298f7adf36984a"
  },
  {
    "url": "assets/js/vendor/jquery-slim.min.js",
    "revision": "5f48fc77cac90c4778fa24ec9c57f37d"
  },
  {
    "url": "assets/js/vendor/popper.min.js",
    "revision": "70d3fda195602fe8b75e0097eed74dde"
  },
  {
    "url": "assets/js/vendor/workbox-sw.prod.v2.1.2.js",
    "revision": "d41d8cd98f00b204e9800998ecf8427e"
  },
  {
    "url": "dist/css/bootstrap-grid.css",
    "revision": "ed38d6758667b540407ea1dbff88e9b7"
  },
  {
    "url": "dist/css/bootstrap-grid.min.css",
    "revision": "c9654d9c891fe3e57fde9cd355a916a4"
  },
  {
    "url": "dist/css/bootstrap-reboot.css",
    "revision": "8e072948c9492a5ffe92ace1c9ea1c03"
  },
  {
    "url": "dist/css/bootstrap-reboot.min.css",
    "revision": "53d752f395539ab69389bb8c4a6c2920"
  },
  {
    "url": "dist/css/bootstrap.css",
    "revision": "fae8fdb028b27d56bae54e65802c13df"
  },
  {
    "url": "dist/css/bootstrap.min.css",
    "revision": "8ded1acdf961f3c54a96f8facbe61627"
  },
  {
    "url": "dist/js/bootstrap.bundle.js",
    "revision": "162f33bc7582b500d9e7338218be4792"
  },
  {
    "url": "dist/js/bootstrap.bundle.min.js",
    "revision": "1c659d53f5ec0189bf170bdcbca00ea0"
  },
  {
    "url": "dist/js/bootstrap.js",
    "revision": "499b6cc5c6c3cc1c78f52d9bcc3ef997"
  },
  {
    "url": "dist/js/bootstrap.min.js",
    "revision": "bb3e9707a392922a62a2d28b3fa3a88e"
  },
  {
    "url": "docs/4.0/about/brand/index.html",
    "revision": "233cf3dfa820fcc017a8ec7db0cf2e09"
  },
  {
    "url": "docs/4.0/about/index.html",
    "revision": "902df84ffd060fc0e2d651fe659f0896"
  },
  {
    "url": "docs/4.0/about/license/index.html",
    "revision": "4bdb813926474d32cbcb22a6d7c0d1ca"
  },
  {
    "url": "docs/4.0/about/overview/index.html",
    "revision": "77d07943dbfaafc5157e519e9bdcba7d"
  },
  {
    "url": "docs/4.0/about/translations/index.html",
    "revision": "93a7609fc9660b866bcad78320120a68"
  },
  {
    "url": "docs/4.0/browser-bugs/index.html",
    "revision": "709546c2003ced34a6243f63840b7239"
  },
  {
    "url": "docs/4.0/components/alerts/index.html",
    "revision": "7a83384a0b08a32720180a967e58fa85"
  },
  {
    "url": "docs/4.0/components/badge/index.html",
    "revision": "50a027be0df17df95d22f853f754a9b7"
  },
  {
    "url": "docs/4.0/components/breadcrumb/index.html",
    "revision": "6e47d79c3bbaa10950cf7c5ed77015f3"
  },
  {
    "url": "docs/4.0/components/button-group/index.html",
    "revision": "287573a48c907ceda5181cc42c2b047b"
  },
  {
    "url": "docs/4.0/components/buttons/index.html",
    "revision": "d55fb6f9a3ab5d9522f449eb8cece041"
  },
  {
    "url": "docs/4.0/components/card/index.html",
    "revision": "d2db33a9e5a5d3d4bc8521ff98ff5d56"
  },
  {
    "url": "docs/4.0/components/carousel/index.html",
    "revision": "73303099fac798d126926cf1464f6fcc"
  },
  {
    "url": "docs/4.0/components/collapse/index.html",
    "revision": "2970337110b002311334299469fce28a"
  },
  {
    "url": "docs/4.0/components/dropdowns/index.html",
    "revision": "741878a77012e385fec242d2a4d110dc"
  },
  {
    "url": "docs/4.0/components/forms/index.html",
    "revision": "2363f3272a1623b4ae0071ee0ab10673"
  },
  {
    "url": "docs/4.0/components/index.html",
    "revision": "7673d471202305b4dc81dd6f05deb3d3"
  },
  {
    "url": "docs/4.0/components/input-group/index.html",
    "revision": "28be8dcf20e97d943d08b42b3403d2c0"
  },
  {
    "url": "docs/4.0/components/jumbotron/index.html",
    "revision": "615037f91061680ee93e22bdd10e43be"
  },
  {
    "url": "docs/4.0/components/list-group/index.html",
    "revision": "4bb5923afa95952999e66e17758e0a5a"
  },
  {
    "url": "docs/4.0/components/modal/index.html",
    "revision": "8e07aeaf554ac19ac062641a9c1bfa4e"
  },
  {
    "url": "docs/4.0/components/navbar/index.html",
    "revision": "a5c8c36c38ab0ad3099d8cc4f374b03c"
  },
  {
    "url": "docs/4.0/components/navs/index.html",
    "revision": "b76c2daa5d03fcdd6b3b777809237973"
  },
  {
    "url": "docs/4.0/components/pagination/index.html",
    "revision": "405ea589f84dfcdc9bfff2297aaa16e0"
  },
  {
    "url": "docs/4.0/components/popovers/index.html",
    "revision": "0e55122cf2a67c2725519c472c8beabb"
  },
  {
    "url": "docs/4.0/components/progress/index.html",
    "revision": "647d220b336be317dffde3b3560d91cd"
  },
  {
    "url": "docs/4.0/components/scrollspy/index.html",
    "revision": "ff5e76d89b0a89f879b7b49ed4d0694a"
  },
  {
    "url": "docs/4.0/components/tooltips/index.html",
    "revision": "564377b695fad7eb8cec53025750a42b"
  },
  {
    "url": "docs/4.0/content/code/index.html",
    "revision": "d19af507953cbc199dc8d79a2c458b79"
  },
  {
    "url": "docs/4.0/content/figures/index.html",
    "revision": "d505b653e2e2b8f89e8008f5b8bfcc6c"
  },
  {
    "url": "docs/4.0/content/images/index.html",
    "revision": "380c4d6507aefa8ebfffa5ca06b3ed50"
  },
  {
    "url": "docs/4.0/content/index.html",
    "revision": "81b84aef5d0bb7c1e4e7e176cac7b8fa"
  },
  {
    "url": "docs/4.0/content/reboot/index.html",
    "revision": "640ea41204cf89da0a10f37393cd52f9"
  },
  {
    "url": "docs/4.0/content/tables/index.html",
    "revision": "cb2b91f0e8273826f608e386acd2527d"
  },
  {
    "url": "docs/4.0/content/typography/index.html",
    "revision": "56a3c4635bdac21d6f918ebe742f50b8"
  },
  {
    "url": "docs/4.0/examples/album/album.css",
    "revision": "c55364aec72e931ec6e447fef8d7d1fb"
  },
  {
    "url": "docs/4.0/examples/album/index.html",
    "revision": "b6cf65de0e6e62e7cc86cc34fa64bdc4"
  },
  {
    "url": "docs/4.0/examples/blog/blog.css",
    "revision": "aba189d8acd7ee7adc61bcdf1fc0323f"
  },
  {
    "url": "docs/4.0/examples/blog/index.html",
    "revision": "a30e42252fbca562ea09080f5ac6da54"
  },
  {
    "url": "docs/4.0/examples/carousel/carousel.css",
    "revision": "b66cce64afc73959e79561e633327805"
  },
  {
    "url": "docs/4.0/examples/carousel/index.html",
    "revision": "14ed354965a5aef8409d40f9bc71d3a4"
  },
  {
    "url": "docs/4.0/examples/cover/cover.css",
    "revision": "1d0127b6309e72780dd3e87093a9d7e3"
  },
  {
    "url": "docs/4.0/examples/cover/index.html",
    "revision": "60ab17e2c5af81defdf5a93e1865a89c"
  },
  {
    "url": "docs/4.0/examples/dashboard/dashboard.css",
    "revision": "cea2ce48e209721ca537d8ffcad510b9"
  },
  {
    "url": "docs/4.0/examples/dashboard/index.html",
    "revision": "23f3d648bd4641aaabc51676ed84ca6f"
  },
  {
    "url": "docs/4.0/examples/grid/grid.css",
    "revision": "4cd2e5cc5e19dc692d50ed6f077154ef"
  },
  {
    "url": "docs/4.0/examples/grid/index.html",
    "revision": "1a634e4a3281204f8d46c5fdaea35a96"
  },
  {
    "url": "docs/4.0/examples/index.html",
    "revision": "754b85af2be18978b17f04bac387697c"
  },
  {
    "url": "docs/4.0/examples/jumbotron/index.html",
    "revision": "041900abf4b6c5525641775885200d5a"
  },
  {
    "url": "docs/4.0/examples/jumbotron/jumbotron.css",
    "revision": "0ef7edc6babea5a47645bda0c45368aa"
  },
  {
    "url": "docs/4.0/examples/justified-nav/index.html",
    "revision": "1709885cd4375a48ab7104c9c1bc752d"
  },
  {
    "url": "docs/4.0/examples/justified-nav/justified-nav.css",
    "revision": "e974d97e147b0ef8caf40471258722c5"
  },
  {
    "url": "docs/4.0/examples/narrow-jumbotron/index.html",
    "revision": "526182d9c63d8d3befa2380347f4cb6e"
  },
  {
    "url": "docs/4.0/examples/narrow-jumbotron/narrow-jumbotron.css",
    "revision": "19fa713362c505cad79d242b797a2688"
  },
  {
    "url": "docs/4.0/examples/navbar-bottom/index.html",
    "revision": "35d8cd3a5a267e316ab45f480a191eeb"
  },
  {
    "url": "docs/4.0/examples/navbar-top-fixed/index.html",
    "revision": "1ce40c76fb831fb9bfb81f7a04705555"
  },
  {
    "url": "docs/4.0/examples/navbar-top-fixed/navbar-top-fixed.css",
    "revision": "3d46ddff119cfe2886a34b72aefd42a6"
  },
  {
    "url": "docs/4.0/examples/navbar-top/index.html",
    "revision": "86ce704638e9227d79683e9928ad258a"
  },
  {
    "url": "docs/4.0/examples/navbar-top/navbar-top.css",
    "revision": "ae704085e05c4bc6a705b225b03a5aea"
  },
  {
    "url": "docs/4.0/examples/navbars/index.html",
    "revision": "cb279d345c72f6f4fab4a17df396696e"
  },
  {
    "url": "docs/4.0/examples/navbars/navbar.css",
    "revision": "f95ea8bb033949bba31b05925773e223"
  },
  {
    "url": "docs/4.0/examples/offcanvas/index.html",
    "revision": "6263d8ff8ab234d8b1e6d29216021af8"
  },
  {
    "url": "docs/4.0/examples/offcanvas/offcanvas.css",
    "revision": "77eca95a4f55dd917ba95db9ac28bac9"
  },
  {
    "url": "docs/4.0/examples/offcanvas/offcanvas.js",
    "revision": "fe67880b053d4a4a9f318db8e0e71fb2"
  },
  {
    "url": "docs/4.0/examples/screenshots/album.png",
    "revision": "ffaf0fd56864daafaa2ea23a3f2a8a4c"
  },
  {
    "url": "docs/4.0/examples/screenshots/blog.png",
    "revision": "db2571d976d8b910af2dd7fee0a97794"
  },
  {
    "url": "docs/4.0/examples/screenshots/carousel.png",
    "revision": "3ef960de8ed9de239dbebf855d3e693e"
  },
  {
    "url": "docs/4.0/examples/screenshots/cover.png",
    "revision": "f8234debe0727d830d378804fa6920ba"
  },
  {
    "url": "docs/4.0/examples/screenshots/dashboard.png",
    "revision": "564c98a3e0fb945b7cfa4941a9bfc072"
  },
  {
    "url": "docs/4.0/examples/screenshots/grid.png",
    "revision": "a3501bda7dcdde8a731e60988375ff71"
  },
  {
    "url": "docs/4.0/examples/screenshots/jumbotron-narrow.png",
    "revision": "da2fea942e2b79e889461234b2dce637"
  },
  {
    "url": "docs/4.0/examples/screenshots/jumbotron.png",
    "revision": "56e944951506af4971317a0e1d6a6b53"
  },
  {
    "url": "docs/4.0/examples/screenshots/justified-nav.png",
    "revision": "4f24d1d5953e79423cbe0254adf1ab5e"
  },
  {
    "url": "docs/4.0/examples/screenshots/navbar-bottom.png",
    "revision": "88f890990c2f75a00cec172d401aef10"
  },
  {
    "url": "docs/4.0/examples/screenshots/navbar-fixed.png",
    "revision": "c3af88c33126f669f2006f9e2c629fa2"
  },
  {
    "url": "docs/4.0/examples/screenshots/navbar-static.png",
    "revision": "a289e262bb99e84a494fad461082e8f3"
  },
  {
    "url": "docs/4.0/examples/screenshots/navbar.png",
    "revision": "c93f7634deb8db461efd121fae384de7"
  },
  {
    "url": "docs/4.0/examples/screenshots/offcanvas.png",
    "revision": "983be61f621aac2d19131df71a8ae309"
  },
  {
    "url": "docs/4.0/examples/screenshots/sign-in.png",
    "revision": "11f97fb403f227e059e00c4afa6a12fd"
  },
  {
    "url": "docs/4.0/examples/screenshots/starter-template.png",
    "revision": "a12386401c848ad90d4e3627858e973d"
  },
  {
    "url": "docs/4.0/examples/screenshots/sticky-footer-navbar.png",
    "revision": "3047deed467cfc70d9ab33b1ac75cda6"
  },
  {
    "url": "docs/4.0/examples/screenshots/sticky-footer.png",
    "revision": "525e473da6359f1db1c5c1769190c438"
  },
  {
    "url": "docs/4.0/examples/signin/index.html",
    "revision": "b4194ddd0649c17ca4cd965b044b84ca"
  },
  {
    "url": "docs/4.0/examples/signin/signin.css",
    "revision": "035a6fbcb0779153ee01bd0f0606ad21"
  },
  {
    "url": "docs/4.0/examples/starter-template/index.html",
    "revision": "c7e901f8203094969c3e25ff764531ca"
  },
  {
    "url": "docs/4.0/examples/starter-template/starter-template.css",
    "revision": "8cb4aab3660723b641b6458f1a1d3ab1"
  },
  {
    "url": "docs/4.0/examples/sticky-footer-navbar/index.html",
    "revision": "61f4c1014db3fd049b854a8127bddc0c"
  },
  {
    "url": "docs/4.0/examples/sticky-footer-navbar/sticky-footer-navbar.css",
    "revision": "c5c610f36d8c2a89e7d587880ee0cd68"
  },
  {
    "url": "docs/4.0/examples/sticky-footer/index.html",
    "revision": "0cd4be44abfd7e0a43438dc5f072d1e4"
  },
  {
    "url": "docs/4.0/examples/sticky-footer/sticky-footer.css",
    "revision": "09630d01995ef9c0f8fc9ae622f00466"
  },
  {
    "url": "docs/4.0/examples/tooltip-viewport/index.html",
    "revision": "9a79ac79c088c8913be8f1b73cad5352"
  },
  {
    "url": "docs/4.0/examples/tooltip-viewport/tooltip-viewport.css",
    "revision": "59ee4352f399bfe798346b4be4a5f88f"
  },
  {
    "url": "docs/4.0/examples/tooltip-viewport/tooltip-viewport.js",
    "revision": "8b7dceb6d175f264b789114201387bfa"
  },
  {
    "url": "docs/4.0/extend/approach/index.html",
    "revision": "2a590a0846bb7fed8d105e6eb91427a3"
  },
  {
    "url": "docs/4.0/extend/icons/index.html",
    "revision": "37423919648de569c748d02292e9d182"
  },
  {
    "url": "docs/4.0/extend/index.html",
    "revision": "957888271fc95b2e5dfd56fe5dd21645"
  },
  {
    "url": "docs/4.0/getting-started/accessibility/index.html",
    "revision": "cee162c8e1af4814ea5ee9dfb93bb6ff"
  },
  {
    "url": "docs/4.0/getting-started/best-practices/index.html",
    "revision": "86f2cb92449975307ab545f33aca53ad"
  },
  {
    "url": "docs/4.0/getting-started/browsers-devices/index.html",
    "revision": "10ee5725ceb8c00196b6c9a94e08f191"
  },
  {
    "url": "docs/4.0/getting-started/build-tools/index.html",
    "revision": "a248c54bc5b5d957397caea1c2c22f08"
  },
  {
    "url": "docs/4.0/getting-started/contents/index.html",
    "revision": "27bd80be14e70bd0239d4cbbe6a75927"
  },
  {
    "url": "docs/4.0/getting-started/download/index.html",
    "revision": "52b061118dd1eec3a9eecbfd5ba68f6f"
  },
  {
    "url": "docs/4.0/getting-started/index.html",
    "revision": "2449b0c2f82b9f9b6099e8bf51a426d7"
  },
  {
    "url": "docs/4.0/getting-started/introduction/index.html",
    "revision": "e20851576dc84cae9b28e40983c22646"
  },
  {
    "url": "docs/4.0/getting-started/javascript/index.html",
    "revision": "9483fdddfe193ae1a5707120e30c4210"
  },
  {
    "url": "docs/4.0/getting-started/options/index.html",
    "revision": "956b1be10afdd760db04f99225535b46"
  },
  {
    "url": "docs/4.0/getting-started/theming/index.html",
    "revision": "8942e80e44b987990f55fb5e29a4b084"
  },
  {
    "url": "docs/4.0/getting-started/webpack/index.html",
    "revision": "237948ecd0e9ffb4e6f9957e86f43307"
  },
  {
    "url": "docs/4.0/history/index.html",
    "revision": "902df84ffd060fc0e2d651fe659f0896"
  },
  {
    "url": "docs/4.0/index.html",
    "revision": "2449b0c2f82b9f9b6099e8bf51a426d7"
  },
  {
    "url": "docs/4.0/layout/grid/index.html",
    "revision": "eec5862749bce1967cfa0b45bdec63b4"
  },
  {
    "url": "docs/4.0/layout/index.html",
    "revision": "73bf7900b3d847dd4836bf9a5bb1dfb0"
  },
  {
    "url": "docs/4.0/layout/media-object/index.html",
    "revision": "b668bbcdcd961f13dbe327db9423f8d2"
  },
  {
    "url": "docs/4.0/layout/overview/index.html",
    "revision": "3d593fb8aca42b65a3b9496c805c7670"
  },
  {
    "url": "docs/4.0/layout/utilities-for-layout/index.html",
    "revision": "5fc94d9d9240458ba1cc8e3919b35c2b"
  },
  {
    "url": "docs/4.0/migration/index.html",
    "revision": "a9b314f25f977cfbc4e196b1758cd572"
  },
  {
    "url": "docs/4.0/team/index.html",
    "revision": "902df84ffd060fc0e2d651fe659f0896"
  },
  {
    "url": "docs/4.0/utilities/borders/index.html",
    "revision": "020c59dfa04846b8290b2bc5a6db29be"
  },
  {
    "url": "docs/4.0/utilities/clearfix/index.html",
    "revision": "6f1e6ac44d1df70430f6a48ddb12acaf"
  },
  {
    "url": "docs/4.0/utilities/close-icon/index.html",
    "revision": "ea7077da08a3afdea7d5bdca212e62c3"
  },
  {
    "url": "docs/4.0/utilities/colors/index.html",
    "revision": "88d0d129311d3ad9849f5e0024256c45"
  },
  {
    "url": "docs/4.0/utilities/display/index.html",
    "revision": "52db40469b7151114dc0756b5174732c"
  },
  {
    "url": "docs/4.0/utilities/embed/index.html",
    "revision": "5502aa2bed4e4d7e21889c32e9a47b62"
  },
  {
    "url": "docs/4.0/utilities/flex/index.html",
    "revision": "48d4ce01b25e131c9bfb4a480367f213"
  },
  {
    "url": "docs/4.0/utilities/float/index.html",
    "revision": "7880e7db5651a394bd43cec825cfde53"
  },
  {
    "url": "docs/4.0/utilities/image-replacement/index.html",
    "revision": "ccb7875c96653b6589a40110ba37d14c"
  },
  {
    "url": "docs/4.0/utilities/index.html",
    "revision": "d163d8a25c2cdd3a3f0675597010243c"
  },
  {
    "url": "docs/4.0/utilities/position/index.html",
    "revision": "b4674f4ffa3e4928210908fe53cfdb91"
  },
  {
    "url": "docs/4.0/utilities/screenreaders/index.html",
    "revision": "b4ba4f3e0438ecf7572012324b517d45"
  },
  {
    "url": "docs/4.0/utilities/sizing/index.html",
    "revision": "e40188daab10e0d0dd037c76fb7cdb81"
  },
  {
    "url": "docs/4.0/utilities/spacing/index.html",
    "revision": "73e789cec7f5bf173ac349ee2d0ea620"
  },
  {
    "url": "docs/4.0/utilities/text/index.html",
    "revision": "065b0a2b373b8adffb895889c367d472"
  },
  {
    "url": "docs/4.0/utilities/vertical-align/index.html",
    "revision": "ee7566486e650f4cab39c96e69940aac"
  },
  {
    "url": "docs/4.0/utilities/visibility/index.html",
    "revision": "663b082fcec339f73793b2f348288306"
  },
  {
    "url": "docs/getting-started/index.html",
    "revision": "2449b0c2f82b9f9b6099e8bf51a426d7"
  },
  {
    "url": "docs/index.html",
    "revision": "2449b0c2f82b9f9b6099e8bf51a426d7"
  },
  {
    "url": "examples/index.html",
    "revision": "614e2c2af948c258c59594594193b8f8"
  },
  {
    "url": "index.html",
    "revision": "f8cbc4b10f3703c1b8c1329fc1737dd4"
  },
  {
    "url": "redirects.json",
    "revision": "c19b6f53d2cb0139871444eb5a245c44"
  },
  {
    "url": "sw.js",
    "revision": "42f72988cbd613ae00b4a2c3390712ae"
  }
])

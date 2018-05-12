/* global workbox:false */

self.importScripts('/assets/js/vendor/workbox-sw.js')

workbox.precaching.precacheAndRoute([
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
    "revision": "6e3cd62366e30b36d229cb7eb5c064ed"
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
    "revision": "5df7c25f57358314501896915abc7e75"
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
    "revision": "9109c979ae60b0c5584b59ca6945d630"
  },
  {
    "url": "assets/js/src/application.js",
    "revision": "83edc01382cfd889f982162964ec374e"
  },
  {
    "url": "assets/js/src/ie-emulation-modes-warning.js",
    "revision": "c6e7032adf9bd98ac39e83c83108977b"
  },
  {
    "url": "assets/js/src/pwa.js",
    "revision": "cac6034355863d6205e66862f6a729f7"
  },
  {
    "url": "assets/js/src/search.js",
    "revision": "5b8bb2081b9e10ee9a469dd5feca5996"
  },
  {
    "url": "assets/js/vendor/anchor.min.js",
    "revision": "01e6254e9f69c0c00f05060b0e1990fc"
  },
  {
    "url": "assets/js/vendor/clipboard.min.js",
    "revision": "3f3688138a1b9fc4ef669ce9056b6674"
  },
  {
    "url": "assets/js/vendor/holder.min.js",
    "revision": "6266d87979b32f717d298f7adf36984a"
  },
  {
    "url": "assets/js/vendor/jquery-slim.min.js",
    "revision": "99b0a83cf1b0b1e2cb16041520e87641"
  },
  {
    "url": "assets/js/vendor/popper.min.js",
    "revision": "83fb8c4d9199dce0224da0206423106f"
  },
  {
    "url": "assets/js/vendor/workbox-sw.js",
    "revision": "d41d8cd98f00b204e9800998ecf8427e"
  },
  {
    "url": "dist/css/bootstrap-grid.css",
    "revision": "db438cff680b6d0c029f75647b4b138a"
  },
  {
    "url": "dist/css/bootstrap-grid.min.css",
    "revision": "2206c9fb0197956129137af662b31115"
  },
  {
    "url": "dist/css/bootstrap-reboot.css",
    "revision": "cceed351e3a8401f573988a38e78d3a8"
  },
  {
    "url": "dist/css/bootstrap-reboot.min.css",
    "revision": "e2b23d34f3fcc9ce074c942e76f25d61"
  },
  {
    "url": "dist/css/bootstrap.css",
    "revision": "82252d754417f95f7779be349acc6361"
  },
  {
    "url": "dist/css/bootstrap.min.css",
    "revision": "a7022c6fa83d91db67738d6e3cd3252d"
  },
  {
    "url": "dist/js/bootstrap.bundle.js",
    "revision": "ee08eb7f44335a3cf385e03d4406e4a5"
  },
  {
    "url": "dist/js/bootstrap.bundle.min.js",
    "revision": "d70c474886678aebe3e9d91965dc8b62"
  },
  {
    "url": "dist/js/bootstrap.js",
    "revision": "c2cdb900858c3e63ce8cd9f69171d342"
  },
  {
    "url": "dist/js/bootstrap.min.js",
    "revision": "eb5fac582a82f296aeb74900b01a2fa3"
  },
  {
    "url": "docs/4.1/about/brand/index.html",
    "revision": "1b59e73355c1e6238ee1879a2d617a84"
  },
  {
    "url": "docs/4.1/about/index.html",
    "revision": "74299fc766b784f8cde28e92d41639f4"
  },
  {
    "url": "docs/4.1/about/license/index.html",
    "revision": "9080c4c2c9589f5603db529f4ed58908"
  },
  {
    "url": "docs/4.1/about/overview/index.html",
    "revision": "7eb4a3b99e9d57e69c3504823c4358db"
  },
  {
    "url": "docs/4.1/about/translations/index.html",
    "revision": "ce30f4916c75aa5306de4e43e38cc24e"
  },
  {
    "url": "docs/4.1/browser-bugs/index.html",
    "revision": "a54ea05ef5a92fddfd64f3adb0d523b5"
  },
  {
    "url": "docs/4.1/components/alerts/index.html",
    "revision": "9277ee38dc902cb71b7ec145975ddf7d"
  },
  {
    "url": "docs/4.1/components/badge/index.html",
    "revision": "606e0febf8d767ae2bcc867ec95b7754"
  },
  {
    "url": "docs/4.1/components/breadcrumb/index.html",
    "revision": "1cf3a059a39240835bb290a477a60fa3"
  },
  {
    "url": "docs/4.1/components/button-group/index.html",
    "revision": "0d841cc7e53cd7ba351e1597614fc42f"
  },
  {
    "url": "docs/4.1/components/buttons/index.html",
    "revision": "0d3c0d0958d28ffe082b4a183717f3b2"
  },
  {
    "url": "docs/4.1/components/card/index.html",
    "revision": "94de0c14f6ab1e98707b704156b2fbe2"
  },
  {
    "url": "docs/4.1/components/carousel/index.html",
    "revision": "5c372113d702c37ca77e8377e7b898b2"
  },
  {
    "url": "docs/4.1/components/collapse/index.html",
    "revision": "ffc47aee64398505c239e158bee447cd"
  },
  {
    "url": "docs/4.1/components/dropdowns/index.html",
    "revision": "8c294c87502ed6c46f2f6bb353227ec9"
  },
  {
    "url": "docs/4.1/components/forms/index.html",
    "revision": "f18e657d6911e275018c5871f4799ef5"
  },
  {
    "url": "docs/4.1/components/index.html",
    "revision": "f7ade703992030de9ad5bbb4cd14b6f0"
  },
  {
    "url": "docs/4.1/components/input-group/index.html",
    "revision": "330e3ab0ac284c2e74fd7601187f7c7e"
  },
  {
    "url": "docs/4.1/components/jumbotron/index.html",
    "revision": "383bdbfd6fc95c9921136ea179d70f15"
  },
  {
    "url": "docs/4.1/components/list-group/index.html",
    "revision": "6a280d2876e3771e46d3f2f0976c385c"
  },
  {
    "url": "docs/4.1/components/modal/index.html",
    "revision": "2bd56536958efce78f882f530de99c08"
  },
  {
    "url": "docs/4.1/components/navbar/index.html",
    "revision": "95ae488e1075503d2f5488d750727750"
  },
  {
    "url": "docs/4.1/components/navs/index.html",
    "revision": "0ecc852bb87ec3a1bfa0f355b31d4484"
  },
  {
    "url": "docs/4.1/components/pagination/index.html",
    "revision": "0f5862415cbb8b4eaaa8a20b270e3d7e"
  },
  {
    "url": "docs/4.1/components/popovers/index.html",
    "revision": "0a7cb880b32b067d084ece5e79720cfa"
  },
  {
    "url": "docs/4.1/components/progress/index.html",
    "revision": "3dcc4fcc380ccb743b48e4fdecdc6399"
  },
  {
    "url": "docs/4.1/components/scrollspy/index.html",
    "revision": "272f2853383a79000bad4b720dadc5b0"
  },
  {
    "url": "docs/4.1/components/tooltips/index.html",
    "revision": "43265c4b21695e79a158806ac7c9f9f4"
  },
  {
    "url": "docs/4.1/content/code/index.html",
    "revision": "93b23c8f7eefb6c880f452510d9620dc"
  },
  {
    "url": "docs/4.1/content/figures/index.html",
    "revision": "0d3887d730a6c91149f14e93fb5fcda0"
  },
  {
    "url": "docs/4.1/content/images/index.html",
    "revision": "8191eb3f11451b4532af184337f4a8fd"
  },
  {
    "url": "docs/4.1/content/index.html",
    "revision": "c20d418489c8580cf37881d798f9291c"
  },
  {
    "url": "docs/4.1/content/reboot/index.html",
    "revision": "992c8d9f8640b41f9303a582ded6f4d4"
  },
  {
    "url": "docs/4.1/content/tables/index.html",
    "revision": "4034848f3f1d8216fddff3994b4b5ee0"
  },
  {
    "url": "docs/4.1/content/typography/index.html",
    "revision": "50130b5f9e566a18c77058ffd285c36f"
  },
  {
    "url": "docs/4.1/examples/album/album.css",
    "revision": "e8343131a0fefafe6ae0f37db6d10f3c"
  },
  {
    "url": "docs/4.1/examples/album/index.html",
    "revision": "8088e1d95bc9263681886821a80f5bcc"
  },
  {
    "url": "docs/4.1/examples/blog/blog.css",
    "revision": "095c85e484178b56ad0446775869e628"
  },
  {
    "url": "docs/4.1/examples/blog/index.html",
    "revision": "c1d0cf090944a6369dcfeaeebbf73eff"
  },
  {
    "url": "docs/4.1/examples/carousel/carousel.css",
    "revision": "e1ef0ffa84cc98db13f90dd02b9981e7"
  },
  {
    "url": "docs/4.1/examples/carousel/index.html",
    "revision": "b60a1b9d8a622551914f1869d2070ca6"
  },
  {
    "url": "docs/4.1/examples/checkout/form-validation.css",
    "revision": "d13d35a0c04021ceacd8c153719860bc"
  },
  {
    "url": "docs/4.1/examples/checkout/index.html",
    "revision": "79021acecd4d9e2e84e26cf84153153b"
  },
  {
    "url": "docs/4.1/examples/cover/cover.css",
    "revision": "211daf4eee015cb38fb10893c4645bbb"
  },
  {
    "url": "docs/4.1/examples/cover/index.html",
    "revision": "3c6d961d4b1d583a8cf972d66d6b8171"
  },
  {
    "url": "docs/4.1/examples/dashboard/dashboard.css",
    "revision": "419f2b36ccf58f5cb1b5b557658b65dd"
  },
  {
    "url": "docs/4.1/examples/dashboard/index.html",
    "revision": "de15dff920a3aebbb324d257985e4ba8"
  },
  {
    "url": "docs/4.1/examples/floating-labels/floating-labels.css",
    "revision": "0711f793d4f6bc20572f9b357c061b5b"
  },
  {
    "url": "docs/4.1/examples/floating-labels/index.html",
    "revision": "e16e25d95c2a41f6d3d8ff7b94b82936"
  },
  {
    "url": "docs/4.1/examples/grid/grid.css",
    "revision": "4cd2e5cc5e19dc692d50ed6f077154ef"
  },
  {
    "url": "docs/4.1/examples/grid/index.html",
    "revision": "1a634e4a3281204f8d46c5fdaea35a96"
  },
  {
    "url": "docs/4.1/examples/index.html",
    "revision": "a223a596fcc8a71b153d9a78bf66ddce"
  },
  {
    "url": "docs/4.1/examples/jumbotron/index.html",
    "revision": "187a48844da8e19e0765d417a5077f81"
  },
  {
    "url": "docs/4.1/examples/jumbotron/jumbotron.css",
    "revision": "0ef7edc6babea5a47645bda0c45368aa"
  },
  {
    "url": "docs/4.1/examples/navbar-bottom/index.html",
    "revision": "dd165c45857a4239ce7787aea5a7bff5"
  },
  {
    "url": "docs/4.1/examples/navbar-fixed/index.html",
    "revision": "1178a7c1f06eeeea76176173b2e0d7fd"
  },
  {
    "url": "docs/4.1/examples/navbar-fixed/navbar-top-fixed.css",
    "revision": "3d46ddff119cfe2886a34b72aefd42a6"
  },
  {
    "url": "docs/4.1/examples/navbar-static/index.html",
    "revision": "8f818f7c1ab4e90bf1ea9b0bd0adb5b3"
  },
  {
    "url": "docs/4.1/examples/navbar-static/navbar-top.css",
    "revision": "ae704085e05c4bc6a705b225b03a5aea"
  },
  {
    "url": "docs/4.1/examples/navbars/index.html",
    "revision": "84494d9562fd4bfb7a613cde029e839f"
  },
  {
    "url": "docs/4.1/examples/navbars/navbar.css",
    "revision": "f95ea8bb033949bba31b05925773e223"
  },
  {
    "url": "docs/4.1/examples/offcanvas/index.html",
    "revision": "7543497ce75575f523a11efb856b54e8"
  },
  {
    "url": "docs/4.1/examples/offcanvas/offcanvas.css",
    "revision": "b5d28d8db34c23de78c46784c4ba4331"
  },
  {
    "url": "docs/4.1/examples/offcanvas/offcanvas.js",
    "revision": "5c0edf2d5a4d88ec65e801c0f58ef23a"
  },
  {
    "url": "docs/4.1/examples/pricing/index.html",
    "revision": "418289199fbd0b6749424611483058fd"
  },
  {
    "url": "docs/4.1/examples/pricing/pricing.css",
    "revision": "1e170831b26afb7a6bcde4f0bc2cb29b"
  },
  {
    "url": "docs/4.1/examples/product/index.html",
    "revision": "7424fe35dc94c1190849c8627cc33ef0"
  },
  {
    "url": "docs/4.1/examples/product/product.css",
    "revision": "9db57bf56394ba8cd85abd5f7ebc8ef1"
  },
  {
    "url": "docs/4.1/examples/screenshots/album.png",
    "revision": "685d5277fdf6f04aefbcbe01ba93e9ef"
  },
  {
    "url": "docs/4.1/examples/screenshots/blog.png",
    "revision": "d06dc15ae8285908ec7ba9f4b1f98a44"
  },
  {
    "url": "docs/4.1/examples/screenshots/carousel.png",
    "revision": "dc04e087b8ad4f000fa64e266812fc0f"
  },
  {
    "url": "docs/4.1/examples/screenshots/checkout.png",
    "revision": "030255900e0b73653cf6a2d074f17b31"
  },
  {
    "url": "docs/4.1/examples/screenshots/cover.png",
    "revision": "ece97a4eb488c46a86a67d61db25dda2"
  },
  {
    "url": "docs/4.1/examples/screenshots/dashboard.png",
    "revision": "2fc93187d09b5b8c342b962576eaf39e"
  },
  {
    "url": "docs/4.1/examples/screenshots/floating-labels.png",
    "revision": "fae0436f9d026a67778f3a37d29b3dfc"
  },
  {
    "url": "docs/4.1/examples/screenshots/grid.png",
    "revision": "cb63b8b5fd89749a2d87342876306dd8"
  },
  {
    "url": "docs/4.1/examples/screenshots/jumbotron.png",
    "revision": "0f579cb67e8c8535d8fffef7d17b7e45"
  },
  {
    "url": "docs/4.1/examples/screenshots/navbar-bottom.png",
    "revision": "0cefd6caed82af75be57d758633d9094"
  },
  {
    "url": "docs/4.1/examples/screenshots/navbar-fixed.png",
    "revision": "1d38f157f0bbbd90957044d30eaef242"
  },
  {
    "url": "docs/4.1/examples/screenshots/navbar-static.png",
    "revision": "2ff01be7ee251fc5c7f51ccf9de5f48d"
  },
  {
    "url": "docs/4.1/examples/screenshots/navbars.png",
    "revision": "d4fbce8e1e38d78a5134e6be05cdd4d7"
  },
  {
    "url": "docs/4.1/examples/screenshots/offcanvas.png",
    "revision": "c581d49a56f3e9d0d1753195c62e719a"
  },
  {
    "url": "docs/4.1/examples/screenshots/pricing.png",
    "revision": "e33e2f37741c6d15c99f3378e2e551ea"
  },
  {
    "url": "docs/4.1/examples/screenshots/product.png",
    "revision": "af74e4f7ddfc8cf2a44a9c601881329f"
  },
  {
    "url": "docs/4.1/examples/screenshots/sign-in.png",
    "revision": "9e4bf345a8c21403868f70b777efb483"
  },
  {
    "url": "docs/4.1/examples/screenshots/starter-template.png",
    "revision": "1761d4e831e7c0659962e1abdb95421f"
  },
  {
    "url": "docs/4.1/examples/screenshots/sticky-footer-navbar.png",
    "revision": "428112965cf6826db55bcc6db07d9e5f"
  },
  {
    "url": "docs/4.1/examples/screenshots/sticky-footer.png",
    "revision": "59b69c34997abee3d477f836d44ce8a3"
  },
  {
    "url": "docs/4.1/examples/sign-in/index.html",
    "revision": "0739de40d4fb2333772503ff6a475b18"
  },
  {
    "url": "docs/4.1/examples/sign-in/signin.css",
    "revision": "00e205f17ee0cd3f59d5e1e1e9cf3b3f"
  },
  {
    "url": "docs/4.1/examples/starter-template/index.html",
    "revision": "d405e899854462588983ff1b304f7d0d"
  },
  {
    "url": "docs/4.1/examples/starter-template/starter-template.css",
    "revision": "8cb4aab3660723b641b6458f1a1d3ab1"
  },
  {
    "url": "docs/4.1/examples/sticky-footer-navbar/index.html",
    "revision": "cf52f64c92b9c1fae606d610fe2d2116"
  },
  {
    "url": "docs/4.1/examples/sticky-footer-navbar/sticky-footer-navbar.css",
    "revision": "c5c610f36d8c2a89e7d587880ee0cd68"
  },
  {
    "url": "docs/4.1/examples/sticky-footer/index.html",
    "revision": "7f8a7abbce45fa7d948f8fe3a41c3545"
  },
  {
    "url": "docs/4.1/examples/sticky-footer/sticky-footer.css",
    "revision": "09630d01995ef9c0f8fc9ae622f00466"
  },
  {
    "url": "docs/4.1/examples/tooltip-viewport/index.html",
    "revision": "b1074cded6dd5b3603fd470151af233e"
  },
  {
    "url": "docs/4.1/examples/tooltip-viewport/tooltip-viewport.css",
    "revision": "59ee4352f399bfe798346b4be4a5f88f"
  },
  {
    "url": "docs/4.1/examples/tooltip-viewport/tooltip-viewport.js",
    "revision": "8b7dceb6d175f264b789114201387bfa"
  },
  {
    "url": "docs/4.1/extend/approach/index.html",
    "revision": "f5d957b3114b02577ab41114edfeed1b"
  },
  {
    "url": "docs/4.1/extend/icons/index.html",
    "revision": "1e1ce25fb06240c947bf77b677c72722"
  },
  {
    "url": "docs/4.1/extend/index.html",
    "revision": "19f4dc1e6f6ced074c91f7af73b7e84f"
  },
  {
    "url": "docs/4.1/getting-started/accessibility/index.html",
    "revision": "a9458a94ee0deaa68cf6941ac2ea7aa9"
  },
  {
    "url": "docs/4.1/getting-started/best-practices/index.html",
    "revision": "7fcb4c3d60d55490d7dfd022a245075f"
  },
  {
    "url": "docs/4.1/getting-started/browsers-devices/index.html",
    "revision": "52180cb4e18bc5d31379f311bc8e4d1f"
  },
  {
    "url": "docs/4.1/getting-started/build-tools/index.html",
    "revision": "79801098ed1a1a3d505a443aa64183e8"
  },
  {
    "url": "docs/4.1/getting-started/contents/index.html",
    "revision": "239c55d0b6dded7a4c87c2756ab5ed29"
  },
  {
    "url": "docs/4.1/getting-started/download/index.html",
    "revision": "a23deec64ee52ddd94d6ff32d55b565f"
  },
  {
    "url": "docs/4.1/getting-started/index.html",
    "revision": "7e0e2242c146d9a75c28cebc81a60e2a"
  },
  {
    "url": "docs/4.1/getting-started/introduction/index.html",
    "revision": "1288ec18524d066b4f35beaa26c60225"
  },
  {
    "url": "docs/4.1/getting-started/javascript/index.html",
    "revision": "7148db0601086bf281e4e5efcc36c6a9"
  },
  {
    "url": "docs/4.1/getting-started/options/index.html",
    "revision": "427431ecc738d04f87576bd8d2f4f4f4"
  },
  {
    "url": "docs/4.1/getting-started/theming/index.html",
    "revision": "9e44b24cb1e7ad35fa268c541c586cdd"
  },
  {
    "url": "docs/4.1/getting-started/webpack/index.html",
    "revision": "57775d9c32ad14d23f7fbebc15fe469d"
  },
  {
    "url": "docs/4.1/history/index.html",
    "revision": "74299fc766b784f8cde28e92d41639f4"
  },
  {
    "url": "docs/4.1/index.html",
    "revision": "7e0e2242c146d9a75c28cebc81a60e2a"
  },
  {
    "url": "docs/4.1/layout/grid/index.html",
    "revision": "1440d07c247de9b3e6de965184dbfccc"
  },
  {
    "url": "docs/4.1/layout/index.html",
    "revision": "4c5a590a727128a7525a80339fc0a19a"
  },
  {
    "url": "docs/4.1/layout/media-object/index.html",
    "revision": "915fb949b37ee6c462081423bc81d094"
  },
  {
    "url": "docs/4.1/layout/overview/index.html",
    "revision": "6b97ffbfa34191edca1e15d65364fafb"
  },
  {
    "url": "docs/4.1/layout/utilities-for-layout/index.html",
    "revision": "901a630287799b6e78a9079d1a0d56b7"
  },
  {
    "url": "docs/4.1/migration/index.html",
    "revision": "2bf7b30c3c9044e6e5669c09db53cf1d"
  },
  {
    "url": "docs/4.1/mixins/index.html",
    "revision": "278a5521848079075fea687dcfceb7ff"
  },
  {
    "url": "docs/4.1/team/index.html",
    "revision": "74299fc766b784f8cde28e92d41639f4"
  },
  {
    "url": "docs/4.1/utilities/borders/index.html",
    "revision": "af7eeb11a3f295799f8ee3b3e2747a53"
  },
  {
    "url": "docs/4.1/utilities/clearfix/index.html",
    "revision": "9c85eda76e5b49807381f6998b70631b"
  },
  {
    "url": "docs/4.1/utilities/close-icon/index.html",
    "revision": "cbaec5909f2da0b342e55de2114158f0"
  },
  {
    "url": "docs/4.1/utilities/colors/index.html",
    "revision": "e8db0847f9afd2cfa8b2875bd3fd708a"
  },
  {
    "url": "docs/4.1/utilities/display/index.html",
    "revision": "1156f75d6676bd4d5eb6c824f8b47909"
  },
  {
    "url": "docs/4.1/utilities/embed/index.html",
    "revision": "0972bbcf179495aaa80c83995bb877e5"
  },
  {
    "url": "docs/4.1/utilities/flex/index.html",
    "revision": "1fe2baf0e0ac2de0c6b3e99ff91e3539"
  },
  {
    "url": "docs/4.1/utilities/float/index.html",
    "revision": "617ba254b6bb4ff261404eebd7310899"
  },
  {
    "url": "docs/4.1/utilities/image-replacement/index.html",
    "revision": "e83b62cdef4d3c64376e95086ea68e27"
  },
  {
    "url": "docs/4.1/utilities/index.html",
    "revision": "6104321df6f9a8f121b9918a2378544b"
  },
  {
    "url": "docs/4.1/utilities/position/index.html",
    "revision": "40fefd3d3be5c5e238b0cfb53a7411c3"
  },
  {
    "url": "docs/4.1/utilities/screenreaders/index.html",
    "revision": "5eb7cc2094aaeb4eca6da5f0355517c6"
  },
  {
    "url": "docs/4.1/utilities/shadows/index.html",
    "revision": "8729fc8447f4ba4f410b3536fd0399ab"
  },
  {
    "url": "docs/4.1/utilities/sizing/index.html",
    "revision": "00672d33390ca82fd4eb102af8d04856"
  },
  {
    "url": "docs/4.1/utilities/spacing/index.html",
    "revision": "5326b6b46b37784ba4fbc8321d1b563d"
  },
  {
    "url": "docs/4.1/utilities/text/index.html",
    "revision": "e0597349b59dd659e4a8b0192b30e722"
  },
  {
    "url": "docs/4.1/utilities/vertical-align/index.html",
    "revision": "6366755ac5a14d15d7dd6d0896e6f807"
  },
  {
    "url": "docs/4.1/utilities/visibility/index.html",
    "revision": "4c38a84b8aaf8e58e11d00820646390e"
  },
  {
    "url": "docs/getting-started/index.html",
    "revision": "7e0e2242c146d9a75c28cebc81a60e2a"
  },
  {
    "url": "docs/index.html",
    "revision": "7e0e2242c146d9a75c28cebc81a60e2a"
  },
  {
    "url": "examples/index.html",
    "revision": "a37d63d4368ced202040418db84a8bf8"
  },
  {
    "url": "index.html",
    "revision": "973053da4be4504ca35bfcbe80b51e15"
  },
  {
    "url": "redirects.json",
    "revision": "1f50f884751e5c828eb2de64f29ea801"
  }
])

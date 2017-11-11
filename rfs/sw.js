self.importScripts('/assets/js/vendor/workbox-sw.prod.v2.1.0.js')

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
    "revision": "37f78ed1c0afbe40080eddb521676f5c"
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
    "revision": "57ed6fe5c4b8a29202d329ec06265a80"
  },
  {
    "url": "assets/js/ie-emulation-modes-warning.js",
    "revision": "cc2d7790e3f75807d93de0cec949b346"
  },
  {
    "url": "assets/js/ie10-viewport-bug-workaround.js",
    "revision": "56e8a7b0282409fd020be51b4995a79c"
  },
  {
    "url": "assets/js/src/application.js",
    "revision": "4c2767f364febfaf08e0bd9fb6f1cd94"
  },
  {
    "url": "assets/js/src/pwa.js",
    "revision": "3aababbcbf5c4064697af1867e554b24"
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
    "revision": "141a233eb463680161c38ed28a126e62"
  },
  {
    "url": "assets/js/vendor/workbox-sw.prod.v2.1.0.js",
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
    "revision": "c89b24777a51b5dfa83c5409af8b8d2d"
  },
  {
    "url": "dist/css/bootstrap-reboot.min.css",
    "revision": "433ef7fa9ce3e12982125ddee5b33db4"
  },
  {
    "url": "dist/css/bootstrap.css",
    "revision": "16923e15195c5f238fb81eb4cb84df4d"
  },
  {
    "url": "dist/css/bootstrap.min.css",
    "revision": "66e5a2f90a68935dca301cc53b13ebba"
  },
  {
    "url": "dist/js/bootstrap.bundle.js",
    "revision": "391328c786dc4bfe80805961dc9f9188"
  },
  {
    "url": "dist/js/bootstrap.bundle.min.js",
    "revision": "a2574500079d6182e06d4583500deefa"
  },
  {
    "url": "dist/js/bootstrap.js",
    "revision": "a78f611be0b4f9a97d1480a8140757ac"
  },
  {
    "url": "dist/js/bootstrap.min.js",
    "revision": "de5298050f129124101f809a3bdfa8bc"
  },
  {
    "url": "docs/4.0/about/brand/index.html",
    "revision": "02806dce821aa3e7af74895e96a45128"
  },
  {
    "url": "docs/4.0/about/index.html",
    "revision": "15d05188bfad19aacab442076279ee13"
  },
  {
    "url": "docs/4.0/about/license/index.html",
    "revision": "b67b3e300e35a24928c744f318cb6a87"
  },
  {
    "url": "docs/4.0/about/overview/index.html",
    "revision": "0825ab91317be6dcf3146c4184c834c7"
  },
  {
    "url": "docs/4.0/about/translations/index.html",
    "revision": "4d0a56b980b7771bb899549e670dc946"
  },
  {
    "url": "docs/4.0/browser-bugs/index.html",
    "revision": "4fc4363cac631938037205be8c5f67f8"
  },
  {
    "url": "docs/4.0/components/alerts/index.html",
    "revision": "ec21787f72c7c01a463a10e598255ad0"
  },
  {
    "url": "docs/4.0/components/badge/index.html",
    "revision": "3aadb54422c72b441a660ab43c87235c"
  },
  {
    "url": "docs/4.0/components/breadcrumb/index.html",
    "revision": "bec1790512a2976f663c825aeb7ca1bb"
  },
  {
    "url": "docs/4.0/components/button-group/index.html",
    "revision": "c1d63051051d2f8103b0723e8e4a93ec"
  },
  {
    "url": "docs/4.0/components/buttons/index.html",
    "revision": "451338c7baa2e961227a0dd6410322db"
  },
  {
    "url": "docs/4.0/components/card/index.html",
    "revision": "7f3400b340aaf92f1344b5de6ab2f9ad"
  },
  {
    "url": "docs/4.0/components/carousel/index.html",
    "revision": "c523f3bab01da90c92fd4cb7a5172a74"
  },
  {
    "url": "docs/4.0/components/collapse/index.html",
    "revision": "c9e4e2003c58928e283950e725ce451b"
  },
  {
    "url": "docs/4.0/components/dropdowns/index.html",
    "revision": "0661b04c551f07845c007487b3ad95cd"
  },
  {
    "url": "docs/4.0/components/forms/index.html",
    "revision": "1e9e0b7e55953ea402bf925399112faf"
  },
  {
    "url": "docs/4.0/components/index.html",
    "revision": "c68777af559680421516463391d927b4"
  },
  {
    "url": "docs/4.0/components/input-group/index.html",
    "revision": "86443f3a140f807db2f9965180ed480a"
  },
  {
    "url": "docs/4.0/components/jumbotron/index.html",
    "revision": "b680cd6b55d80a25bd2941b618255026"
  },
  {
    "url": "docs/4.0/components/list-group/index.html",
    "revision": "69500f10d582d9ad0a09aca5338c75bd"
  },
  {
    "url": "docs/4.0/components/modal/index.html",
    "revision": "f09c7d4af815e3d9de7a31f9a4f37be5"
  },
  {
    "url": "docs/4.0/components/navbar/index.html",
    "revision": "51b30fb6650563c835a2de4d322b1ed7"
  },
  {
    "url": "docs/4.0/components/navs/index.html",
    "revision": "2027f8e2e17d190941ae3c98d031a271"
  },
  {
    "url": "docs/4.0/components/pagination/index.html",
    "revision": "0d3e0d4dd126d6e94ca11fdcf664e0fe"
  },
  {
    "url": "docs/4.0/components/popovers/index.html",
    "revision": "13bc4c9b442df331567108207d3e860d"
  },
  {
    "url": "docs/4.0/components/progress/index.html",
    "revision": "9573cf8478e6eef8d9086ce12741d16b"
  },
  {
    "url": "docs/4.0/components/scrollspy/index.html",
    "revision": "dfd1d07923b77c44bae990c4b773901f"
  },
  {
    "url": "docs/4.0/components/tooltips/index.html",
    "revision": "c2ad7ba9626e27bea30680e7b96e60ef"
  },
  {
    "url": "docs/4.0/content/code/index.html",
    "revision": "f2c5cc5092cc4bd3b7999da78a3c46ba"
  },
  {
    "url": "docs/4.0/content/figures/index.html",
    "revision": "32048576c0c306e45fad3e9c4c242aea"
  },
  {
    "url": "docs/4.0/content/images/index.html",
    "revision": "bf607cf0cb047a1033647ace7a221db1"
  },
  {
    "url": "docs/4.0/content/index.html",
    "revision": "345e29b97ee530d80814da31c201c7f4"
  },
  {
    "url": "docs/4.0/content/reboot/index.html",
    "revision": "89a0d17b278978cea76f9b1daa7f08d4"
  },
  {
    "url": "docs/4.0/content/tables/index.html",
    "revision": "5c74dc496232afa775c41efec7ac72bd"
  },
  {
    "url": "docs/4.0/content/typography/index.html",
    "revision": "d7997b2662240bcfcfc81c4480aedea6"
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
    "revision": "750f2ac42509b1d901295d087cac5ef6"
  },
  {
    "url": "docs/4.0/examples/blog/index.html",
    "revision": "a30e42252fbca562ea09080f5ac6da54"
  },
  {
    "url": "docs/4.0/examples/carousel/carousel.css",
    "revision": "e1ef0ffa84cc98db13f90dd02b9981e7"
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
    "revision": "e57c6473b70653314c69d18689e8ffad"
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
    "revision": "e58e81c43f4575cd7f3d2709fb96115c"
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
    "revision": "04ce7b8379c81529b418edbdb4e677aa"
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
    "revision": "ff2edd652319dc612b0adbf97ac300ef"
  },
  {
    "url": "docs/4.0/extend/icons/index.html",
    "revision": "19eb6e66e45ca58fd104879cd454b0a8"
  },
  {
    "url": "docs/4.0/extend/index.html",
    "revision": "eb7049e4ba9c404a99ce7906308aff51"
  },
  {
    "url": "docs/4.0/getting-started/accessibility/index.html",
    "revision": "81377872a2354b3fdc72685fbe790c3a"
  },
  {
    "url": "docs/4.0/getting-started/best-practices/index.html",
    "revision": "9a284846c03b875b2eb8155503e9a35c"
  },
  {
    "url": "docs/4.0/getting-started/browsers-devices/index.html",
    "revision": "e3db66201cc366c4fd6d17722119899f"
  },
  {
    "url": "docs/4.0/getting-started/build-tools/index.html",
    "revision": "9f01a25122777b0eaad8f2d273ad7835"
  },
  {
    "url": "docs/4.0/getting-started/contents/index.html",
    "revision": "3ed538e29e10b695e55642093d524473"
  },
  {
    "url": "docs/4.0/getting-started/download/index.html",
    "revision": "ec122ff21ef6e5d539e292923c81ee82"
  },
  {
    "url": "docs/4.0/getting-started/index.html",
    "revision": "68aeba8387149271a9419727d2339b91"
  },
  {
    "url": "docs/4.0/getting-started/introduction/index.html",
    "revision": "914dc67e46d69549a32acc50de87a1c1"
  },
  {
    "url": "docs/4.0/getting-started/javascript/index.html",
    "revision": "162a9fb31e91093cf04dd2bef1ab68d6"
  },
  {
    "url": "docs/4.0/getting-started/options/index.html",
    "revision": "cf7d2a5f5d6e5419d9566a3fde4c736d"
  },
  {
    "url": "docs/4.0/getting-started/theming/index.html",
    "revision": "68994bdb38a61aff74650c159ba30d7d"
  },
  {
    "url": "docs/4.0/getting-started/webpack/index.html",
    "revision": "424bbb65fc0e705e93c2b891b60fa819"
  },
  {
    "url": "docs/4.0/history/index.html",
    "revision": "15d05188bfad19aacab442076279ee13"
  },
  {
    "url": "docs/4.0/index.html",
    "revision": "68aeba8387149271a9419727d2339b91"
  },
  {
    "url": "docs/4.0/layout/grid/index.html",
    "revision": "ad69c3533a4b1d970014fcf6e69c46ed"
  },
  {
    "url": "docs/4.0/layout/index.html",
    "revision": "285d5a014cd2da3f33bc05a75f0dd042"
  },
  {
    "url": "docs/4.0/layout/media-object/index.html",
    "revision": "c6ddd36f6e53ac3132553497b530e2f8"
  },
  {
    "url": "docs/4.0/layout/overview/index.html",
    "revision": "2af7ea9223a9862b2e5b43d56c7d1739"
  },
  {
    "url": "docs/4.0/layout/utilities-for-layout/index.html",
    "revision": "342d9b8fb9a44a4d3cbf58eaa36075ba"
  },
  {
    "url": "docs/4.0/migration/index.html",
    "revision": "5feffafca6adbd23103cf5cb62625aee"
  },
  {
    "url": "docs/4.0/team/index.html",
    "revision": "15d05188bfad19aacab442076279ee13"
  },
  {
    "url": "docs/4.0/utilities/borders/index.html",
    "revision": "77fb5a69bee3f5ad81f6cd7ba60a8862"
  },
  {
    "url": "docs/4.0/utilities/clearfix/index.html",
    "revision": "bcc7fc2ace03c80baf341c2c01bb6c6f"
  },
  {
    "url": "docs/4.0/utilities/close-icon/index.html",
    "revision": "c103d42ca1945e8c6d083581ba39f1f8"
  },
  {
    "url": "docs/4.0/utilities/colors/index.html",
    "revision": "1a8d1a95fc0cb243e609c1724957bc57"
  },
  {
    "url": "docs/4.0/utilities/display/index.html",
    "revision": "c67fcc367236cf66a06ec6ae29d6d4bd"
  },
  {
    "url": "docs/4.0/utilities/embed/index.html",
    "revision": "3657e1f9e01c92a46082fb5e1abebd74"
  },
  {
    "url": "docs/4.0/utilities/flex/index.html",
    "revision": "98026a4ee1140bc70f7caad3bbc047ee"
  },
  {
    "url": "docs/4.0/utilities/float/index.html",
    "revision": "21b99b928ab0d3418575c4b4e60dcd54"
  },
  {
    "url": "docs/4.0/utilities/image-replacement/index.html",
    "revision": "fb5398749f4d2575eca15948eced3470"
  },
  {
    "url": "docs/4.0/utilities/index.html",
    "revision": "21ec3880655efdae9264e9daa6769a20"
  },
  {
    "url": "docs/4.0/utilities/position/index.html",
    "revision": "612a08a3e11efe56082bc85344b77c03"
  },
  {
    "url": "docs/4.0/utilities/screenreaders/index.html",
    "revision": "3458dde1f247be3cb7a5a450dc3d8781"
  },
  {
    "url": "docs/4.0/utilities/sizing/index.html",
    "revision": "dc857a1e9acd326816c5a40c8a2b972c"
  },
  {
    "url": "docs/4.0/utilities/spacing/index.html",
    "revision": "e744d13899d54cc03229dfc924de2a61"
  },
  {
    "url": "docs/4.0/utilities/text/index.html",
    "revision": "3e41184227baf323ce1e225c1cddb106"
  },
  {
    "url": "docs/4.0/utilities/vertical-align/index.html",
    "revision": "b4028b1f42162633b9e66f184bdc508d"
  },
  {
    "url": "docs/4.0/utilities/visibility/index.html",
    "revision": "5b20e0f2d9bca1c5d2955e31f7ebd2f3"
  },
  {
    "url": "docs/getting-started/index.html",
    "revision": "68aeba8387149271a9419727d2339b91"
  },
  {
    "url": "docs/index.html",
    "revision": "68aeba8387149271a9419727d2339b91"
  },
  {
    "url": "examples/index.html",
    "revision": "f0d25faf10df8f2b645b4b7fbff8d34d"
  },
  {
    "url": "index.html",
    "revision": "e8b7db4da2d4f6a28791cd1e09994fd8"
  },
  {
    "url": "sw.js",
    "revision": "42f72988cbd613ae00b4a2c3390712ae"
  }
])

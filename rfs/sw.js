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
    "revision": "bd2b9d46fc48b58540b761485448fbec"
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
    "revision": "f4a798839f4a1e656acaafbec63bb9b6"
  },
  {
    "url": "assets/js/src/application.js",
    "revision": "ff0bf4bbaf98bbf0b021380c221bdf3e"
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
    "revision": "5593fc2dfee3468dbcedb771cf0b183d"
  },
  {
    "url": "dist/css/bootstrap-grid.min.css",
    "revision": "b3a788e679986b5f9cfd753081d5cf0c"
  },
  {
    "url": "dist/css/bootstrap-reboot.css",
    "revision": "3fd6bbc250a274cfe8bf7cca19ecb5a9"
  },
  {
    "url": "dist/css/bootstrap-reboot.min.css",
    "revision": "3879bb21905025d35090d243fcd01ceb"
  },
  {
    "url": "dist/css/bootstrap.css",
    "revision": "97b7c5dc7e821af1f6be97fa8eef652c"
  },
  {
    "url": "dist/css/bootstrap.min.css",
    "revision": "cf1fd7d971014e0d8b95387139ff3cbd"
  },
  {
    "url": "dist/js/bootstrap.bundle.js",
    "revision": "0f67b04b0ff1277c0b954e03e2297137"
  },
  {
    "url": "dist/js/bootstrap.bundle.min.js",
    "revision": "de5525bda03cc8684ad3032c2199e9bf"
  },
  {
    "url": "dist/js/bootstrap.js",
    "revision": "fec2e21f33d3983c4817637fca629ad8"
  },
  {
    "url": "dist/js/bootstrap.min.js",
    "revision": "6b8ccc1e58d6ec934b144e48ccbc63e5"
  },
  {
    "url": "docs/4.0/about/brand/index.html",
    "revision": "37d905d4c3c28fb632645476c6e93f05"
  },
  {
    "url": "docs/4.0/about/index.html",
    "revision": "ea69fefe601f0330d13b18521176f4a3"
  },
  {
    "url": "docs/4.0/about/license/index.html",
    "revision": "cde180f80378bceb51826306d6fe1169"
  },
  {
    "url": "docs/4.0/about/overview/index.html",
    "revision": "9e58cbe65639b81af3d770849e98f358"
  },
  {
    "url": "docs/4.0/about/translations/index.html",
    "revision": "bedb3390f5ca4de301e3c6f8dc12ed30"
  },
  {
    "url": "docs/4.0/browser-bugs/index.html",
    "revision": "20b0ca36d6b602a7a0ff49a53473b34f"
  },
  {
    "url": "docs/4.0/components/alerts/index.html",
    "revision": "21b1d7ad5fa60573c65750c312e9d61e"
  },
  {
    "url": "docs/4.0/components/badge/index.html",
    "revision": "037618ac5b2cee54dc3fd160d04c5cc7"
  },
  {
    "url": "docs/4.0/components/breadcrumb/index.html",
    "revision": "80d0c4af9e75f074f54d10ce00d4df8d"
  },
  {
    "url": "docs/4.0/components/button-group/index.html",
    "revision": "7f8398446c68b07aaf16fd32f1066cfa"
  },
  {
    "url": "docs/4.0/components/buttons/index.html",
    "revision": "b056fa6cdddae0f2b8734d90751f386f"
  },
  {
    "url": "docs/4.0/components/card/index.html",
    "revision": "96da0ab3131a8ac7ebea75463de910af"
  },
  {
    "url": "docs/4.0/components/carousel/index.html",
    "revision": "12ddb4fec2cf364e13b23fe42e6c106e"
  },
  {
    "url": "docs/4.0/components/collapse/index.html",
    "revision": "46cc488ed5c291719e015d3bbf9f0ade"
  },
  {
    "url": "docs/4.0/components/dropdowns/index.html",
    "revision": "a355bae5235f87d5b77fa578d0302d2b"
  },
  {
    "url": "docs/4.0/components/forms/index.html",
    "revision": "5bcd3b287b6242684b1f01fae452abc8"
  },
  {
    "url": "docs/4.0/components/index.html",
    "revision": "c4496ecf8b78f1f0b57a686eed882f3f"
  },
  {
    "url": "docs/4.0/components/input-group/index.html",
    "revision": "9746eb213d408b18e94188858fa865f0"
  },
  {
    "url": "docs/4.0/components/jumbotron/index.html",
    "revision": "4c11cec83041396aeb5c3291eff46f8d"
  },
  {
    "url": "docs/4.0/components/list-group/index.html",
    "revision": "8e211713f547144a76904bfabf062abe"
  },
  {
    "url": "docs/4.0/components/modal/index.html",
    "revision": "fc50b416fca6909854a719175f0157ae"
  },
  {
    "url": "docs/4.0/components/navbar/index.html",
    "revision": "7d718f3678862c5bf1e9106a1ca33322"
  },
  {
    "url": "docs/4.0/components/navs/index.html",
    "revision": "8733636e329166fbba34809fe9455baa"
  },
  {
    "url": "docs/4.0/components/pagination/index.html",
    "revision": "4fafe00af3f56e198a0119596795db0f"
  },
  {
    "url": "docs/4.0/components/popovers/index.html",
    "revision": "266e5ee715fabf71cb65a636a2325833"
  },
  {
    "url": "docs/4.0/components/progress/index.html",
    "revision": "91f05c6ed6ef5e2035391f0788136e31"
  },
  {
    "url": "docs/4.0/components/scrollspy/index.html",
    "revision": "211f36b05e87ebcd43692fca584a0bd4"
  },
  {
    "url": "docs/4.0/components/tooltips/index.html",
    "revision": "5e41c5403c12974a76a5e05cdf3ff69c"
  },
  {
    "url": "docs/4.0/content/code/index.html",
    "revision": "36c297c14023d8410df0056fe9b4f174"
  },
  {
    "url": "docs/4.0/content/figures/index.html",
    "revision": "3d02c306fbc5afc19434ff7588698b23"
  },
  {
    "url": "docs/4.0/content/images/index.html",
    "revision": "4c8eff17c4ff803d8ecee4a745a50e9e"
  },
  {
    "url": "docs/4.0/content/index.html",
    "revision": "62e2c83e0bc11963b390431f65f88d4d"
  },
  {
    "url": "docs/4.0/content/reboot/index.html",
    "revision": "0f387e6c7c22d904c801dd954f624e39"
  },
  {
    "url": "docs/4.0/content/tables/index.html",
    "revision": "887a05ddf4313118c0763a6602bd7b98"
  },
  {
    "url": "docs/4.0/content/typography/index.html",
    "revision": "7c1fad5bedd54a27c3024e47cb52d460"
  },
  {
    "url": "docs/4.0/examples/album/album.css",
    "revision": "c55364aec72e931ec6e447fef8d7d1fb"
  },
  {
    "url": "docs/4.0/examples/album/index.html",
    "revision": "7dc85228269dae12047b7fbb43e3a7cd"
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
    "revision": "2bfc115c5f0e5746516c45785fbf7c42"
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
    "revision": "fbca50a7cf320d280ca61b20ef5b1434"
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
    "revision": "f1f9c72e08e32aa33ac8b8efb155f476"
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
    "revision": "07c82569f1f8f761c80b9b36671544dd"
  },
  {
    "url": "docs/4.0/extend/icons/index.html",
    "revision": "798b71b95679a5f98f110c59c883ad4a"
  },
  {
    "url": "docs/4.0/extend/index.html",
    "revision": "e6d480c04fa75c8a69676879bd54d1e0"
  },
  {
    "url": "docs/4.0/getting-started/accessibility/index.html",
    "revision": "cf9503c50ab061f1f691ecb98d62bf54"
  },
  {
    "url": "docs/4.0/getting-started/best-practices/index.html",
    "revision": "162642fc8d90c7371648f034cf828e4a"
  },
  {
    "url": "docs/4.0/getting-started/browsers-devices/index.html",
    "revision": "dfe17deb940cdc6980019e03bc780293"
  },
  {
    "url": "docs/4.0/getting-started/build-tools/index.html",
    "revision": "9f4d6994bc7ea8553d20df8440388e95"
  },
  {
    "url": "docs/4.0/getting-started/contents/index.html",
    "revision": "a18aa51e7bd2725c5c203159980a9626"
  },
  {
    "url": "docs/4.0/getting-started/download/index.html",
    "revision": "8efb733ce4eb2f73a1eb149bbaff2e77"
  },
  {
    "url": "docs/4.0/getting-started/index.html",
    "revision": "a96a5b2510a6600aebcf8426fb047c4c"
  },
  {
    "url": "docs/4.0/getting-started/introduction/index.html",
    "revision": "986848a9a85e8ee73de0f69a7bb7b46f"
  },
  {
    "url": "docs/4.0/getting-started/javascript/index.html",
    "revision": "f503828faf1fc51f3df0e033ede6dea4"
  },
  {
    "url": "docs/4.0/getting-started/options/index.html",
    "revision": "63a85073b857faaf80a21799b395c010"
  },
  {
    "url": "docs/4.0/getting-started/theming/index.html",
    "revision": "5d508db16f4a2af13b69c494d8a1f33e"
  },
  {
    "url": "docs/4.0/getting-started/webpack/index.html",
    "revision": "af8e77df7784b40df48c4afa3db45801"
  },
  {
    "url": "docs/4.0/history/index.html",
    "revision": "ea69fefe601f0330d13b18521176f4a3"
  },
  {
    "url": "docs/4.0/index.html",
    "revision": "a96a5b2510a6600aebcf8426fb047c4c"
  },
  {
    "url": "docs/4.0/layout/grid/index.html",
    "revision": "4ae6ffb3659cb1fd1fb8656b60cf4a75"
  },
  {
    "url": "docs/4.0/layout/index.html",
    "revision": "d6f13795903fe95419152c9883b13689"
  },
  {
    "url": "docs/4.0/layout/media-object/index.html",
    "revision": "caf4f7b463a1974eaa6eca5caf4c4522"
  },
  {
    "url": "docs/4.0/layout/overview/index.html",
    "revision": "10d73d3da9d343136cf381a1567646d4"
  },
  {
    "url": "docs/4.0/layout/utilities-for-layout/index.html",
    "revision": "350c896bc29959a9333b6c2f3253fc78"
  },
  {
    "url": "docs/4.0/migration/index.html",
    "revision": "e28e294e97dc3d9064f57659f63f2fa5"
  },
  {
    "url": "docs/4.0/team/index.html",
    "revision": "ea69fefe601f0330d13b18521176f4a3"
  },
  {
    "url": "docs/4.0/utilities/borders/index.html",
    "revision": "b9c48f9b8811973b9ade47c5b2051a1d"
  },
  {
    "url": "docs/4.0/utilities/clearfix/index.html",
    "revision": "8198237d1d61aac067bd9946a3749d78"
  },
  {
    "url": "docs/4.0/utilities/close-icon/index.html",
    "revision": "0c4cbd47d85348b91504e852f721992c"
  },
  {
    "url": "docs/4.0/utilities/colors/index.html",
    "revision": "65f1451d3cb4cbf419a634327b52d2c3"
  },
  {
    "url": "docs/4.0/utilities/display/index.html",
    "revision": "4367ca6080eda528ae3b6ff4145f1e42"
  },
  {
    "url": "docs/4.0/utilities/embed/index.html",
    "revision": "884ce48fd08a1dadd675fccc7a3f9da9"
  },
  {
    "url": "docs/4.0/utilities/flex/index.html",
    "revision": "191694e8297c3b941cc057944ffbf08a"
  },
  {
    "url": "docs/4.0/utilities/float/index.html",
    "revision": "90f14a5fb819c25ff2c5c3ff03af2fc5"
  },
  {
    "url": "docs/4.0/utilities/image-replacement/index.html",
    "revision": "487ffd50d9229a0adacae53c9cfaa0cd"
  },
  {
    "url": "docs/4.0/utilities/index.html",
    "revision": "398ac9fd82aace9913a71673e7bbd6b6"
  },
  {
    "url": "docs/4.0/utilities/position/index.html",
    "revision": "bc71455a01a983257693429febde6264"
  },
  {
    "url": "docs/4.0/utilities/screenreaders/index.html",
    "revision": "539b67e85ee5047daf5e1db6b0b9e547"
  },
  {
    "url": "docs/4.0/utilities/sizing/index.html",
    "revision": "d48a4738f18b0e0cf0d0e00ca1ce7668"
  },
  {
    "url": "docs/4.0/utilities/spacing/index.html",
    "revision": "c4fd1d2ef1a7a466b68fc38ee591bd3f"
  },
  {
    "url": "docs/4.0/utilities/text/index.html",
    "revision": "590a5a8bba455c3c4ddc7520efa6598c"
  },
  {
    "url": "docs/4.0/utilities/vertical-align/index.html",
    "revision": "5b4e4512ad0a23887b4b8ba7ac1b3dbd"
  },
  {
    "url": "docs/4.0/utilities/visibility/index.html",
    "revision": "6b261a8ddcf88d9eb0ce48895309db99"
  },
  {
    "url": "docs/getting-started/index.html",
    "revision": "a96a5b2510a6600aebcf8426fb047c4c"
  },
  {
    "url": "docs/index.html",
    "revision": "a96a5b2510a6600aebcf8426fb047c4c"
  },
  {
    "url": "examples/index.html",
    "revision": "b51579d469c54815a1da77bc071c07d5"
  },
  {
    "url": "index.html",
    "revision": "a22798a743b0ac5e74c143c5ed0cb773"
  },
  {
    "url": "redirects.json",
    "revision": "b2386b1cf98ce2b388f9c38c8ca90bbb"
  },
  {
    "url": "sw.js",
    "revision": "42f72988cbd613ae00b4a2c3390712ae"
  }
])

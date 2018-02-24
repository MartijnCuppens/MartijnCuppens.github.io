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
    "revision": "67aac3b6f464afa7345f5f5b2f77f840"
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
    "revision": "ac8702c660a236c2e9236eec0bcea6ed"
  },
  {
    "url": "assets/js/src/application.js",
    "revision": "c08f239f0942146feddd3f078fec831b"
  },
  {
    "url": "assets/js/src/ie-emulation-modes-warning.js",
    "revision": "fe80ecce8d355bac77f7bd95639ad04a"
  },
  {
    "url": "assets/js/src/pwa.js",
    "revision": "4de108c33799a18cec3362c52e333eff"
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
    "revision": "99b0a83cf1b0b1e2cb16041520e87641"
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
    "revision": "f95501c020559de0a12a6a01c4879a07"
  },
  {
    "url": "dist/css/bootstrap-grid.min.css",
    "revision": "3bf268f154c3a9362b5b74ddf9b43803"
  },
  {
    "url": "dist/css/bootstrap-reboot.css",
    "revision": "97c0e8089028719904160874fa5540d1"
  },
  {
    "url": "dist/css/bootstrap-reboot.min.css",
    "revision": "4e559333725069a33a9d0f3387652ea5"
  },
  {
    "url": "dist/css/bootstrap.css",
    "revision": "cbca0eff31d3d08d6fde36f25bbbee90"
  },
  {
    "url": "dist/css/bootstrap.min.css",
    "revision": "c565c22c60fa521048bbcf7c5f12be23"
  },
  {
    "url": "dist/js/bootstrap.bundle.js",
    "revision": "573ecdef65bd38b46aebd83e46c989db"
  },
  {
    "url": "dist/js/bootstrap.bundle.min.js",
    "revision": "b6c8c50a453419443fdb663e96e04229"
  },
  {
    "url": "dist/js/bootstrap.js",
    "revision": "914c3d8f113eab79c16030cf455df2ed"
  },
  {
    "url": "dist/js/bootstrap.min.js",
    "revision": "2c1633df4896c354b6c2201bad62aa2b"
  },
  {
    "url": "docs/4.0/about/brand/index.html",
    "revision": "3696059fdb0900e2ea8a5f030f69055f"
  },
  {
    "url": "docs/4.0/about/index.html",
    "revision": "902df84ffd060fc0e2d651fe659f0896"
  },
  {
    "url": "docs/4.0/about/license/index.html",
    "revision": "441db23fd8722ba0d55d6bab4f2416a8"
  },
  {
    "url": "docs/4.0/about/overview/index.html",
    "revision": "ecb64c0c8786a82c2791f863bc564486"
  },
  {
    "url": "docs/4.0/about/translations/index.html",
    "revision": "7e6a37afee651bf03375d0389e69606a"
  },
  {
    "url": "docs/4.0/browser-bugs/index.html",
    "revision": "9aa026a4ca9ba99d4131054a8e79a254"
  },
  {
    "url": "docs/4.0/components/alerts/index.html",
    "revision": "3d3e5189eef9d111fbb696928901454e"
  },
  {
    "url": "docs/4.0/components/badge/index.html",
    "revision": "391712d49b362d5c555567104c3dd40c"
  },
  {
    "url": "docs/4.0/components/breadcrumb/index.html",
    "revision": "095e4297d0bdbee006de592298e65c78"
  },
  {
    "url": "docs/4.0/components/button-group/index.html",
    "revision": "9feb8ef420a8ae19d19af8a0da977743"
  },
  {
    "url": "docs/4.0/components/buttons/index.html",
    "revision": "bcf53531f6a47e93bd8937042d4054fc"
  },
  {
    "url": "docs/4.0/components/card/index.html",
    "revision": "280649790d1f63e37f1aba478805890b"
  },
  {
    "url": "docs/4.0/components/carousel/index.html",
    "revision": "75953b340c38a8e074b352a88658a069"
  },
  {
    "url": "docs/4.0/components/collapse/index.html",
    "revision": "4b9d906ea4089721f80f9b5e3455bb70"
  },
  {
    "url": "docs/4.0/components/dropdowns/index.html",
    "revision": "b39159c560c6e5eb698903a119916b17"
  },
  {
    "url": "docs/4.0/components/forms/index.html",
    "revision": "414961e205e77308451b26f836886cd2"
  },
  {
    "url": "docs/4.0/components/index.html",
    "revision": "7673d471202305b4dc81dd6f05deb3d3"
  },
  {
    "url": "docs/4.0/components/input-group/index.html",
    "revision": "6369b1b145378379a94dc578f0bacf5b"
  },
  {
    "url": "docs/4.0/components/jumbotron/index.html",
    "revision": "37d511c5d727a626de4ac45a882d96b0"
  },
  {
    "url": "docs/4.0/components/list-group/index.html",
    "revision": "fcc22d71bf3bccbc96193e3f31e0d334"
  },
  {
    "url": "docs/4.0/components/modal/index.html",
    "revision": "c04b352ebe5aea1be167f9250dfa59ce"
  },
  {
    "url": "docs/4.0/components/navbar/index.html",
    "revision": "2df2f4414f231f0092c0fffac659f94a"
  },
  {
    "url": "docs/4.0/components/navs/index.html",
    "revision": "986e0e56f37ea2c35229866651f39775"
  },
  {
    "url": "docs/4.0/components/pagination/index.html",
    "revision": "789f569b6cdb6462b338038d0f1fb0d1"
  },
  {
    "url": "docs/4.0/components/popovers/index.html",
    "revision": "977a2404e6368bc59b6c50618788dab4"
  },
  {
    "url": "docs/4.0/components/progress/index.html",
    "revision": "796339414c6fbaf38d4ccd09737eb075"
  },
  {
    "url": "docs/4.0/components/scrollspy/index.html",
    "revision": "f1d48ac7deb1bf8f0445df7db1c82123"
  },
  {
    "url": "docs/4.0/components/tooltips/index.html",
    "revision": "1a8a50fc6fffe49c00983f9c7cf16091"
  },
  {
    "url": "docs/4.0/content/code/index.html",
    "revision": "509f5d0e8164168bc61dca1319ba065c"
  },
  {
    "url": "docs/4.0/content/figures/index.html",
    "revision": "dfa9b1c1bfaf6d33e5ab2fbc0085f4eb"
  },
  {
    "url": "docs/4.0/content/images/index.html",
    "revision": "cdca45bce3c4f37c28d68d5bfe538e2d"
  },
  {
    "url": "docs/4.0/content/index.html",
    "revision": "81b84aef5d0bb7c1e4e7e176cac7b8fa"
  },
  {
    "url": "docs/4.0/content/reboot/index.html",
    "revision": "eb8b99ca82c01cc6ae0262f286da6145"
  },
  {
    "url": "docs/4.0/content/tables/index.html",
    "revision": "c02cc4649b4693b591b2d8484b33e78a"
  },
  {
    "url": "docs/4.0/content/typography/index.html",
    "revision": "c30fd466c0c9a25181d1071c4c1a685b"
  },
  {
    "url": "docs/4.0/examples/album/album.css",
    "revision": "e8343131a0fefafe6ae0f37db6d10f3c"
  },
  {
    "url": "docs/4.0/examples/album/index.html",
    "revision": "8088e1d95bc9263681886821a80f5bcc"
  },
  {
    "url": "docs/4.0/examples/blog/blog.css",
    "revision": "6b2adbbe23ff51a880fccd3bf4b7ea3d"
  },
  {
    "url": "docs/4.0/examples/blog/index.html",
    "revision": "c1d0cf090944a6369dcfeaeebbf73eff"
  },
  {
    "url": "docs/4.0/examples/carousel/carousel.css",
    "revision": "b66cce64afc73959e79561e633327805"
  },
  {
    "url": "docs/4.0/examples/carousel/index.html",
    "revision": "b60a1b9d8a622551914f1869d2070ca6"
  },
  {
    "url": "docs/4.0/examples/checkout/form-validation.css",
    "revision": "d13d35a0c04021ceacd8c153719860bc"
  },
  {
    "url": "docs/4.0/examples/checkout/index.html",
    "revision": "79021acecd4d9e2e84e26cf84153153b"
  },
  {
    "url": "docs/4.0/examples/cover/cover.css",
    "revision": "61f7cbbe930976e62264268abe51ebd3"
  },
  {
    "url": "docs/4.0/examples/cover/index.html",
    "revision": "f9fc2e9345ccfaded27c5060100ecd2b"
  },
  {
    "url": "docs/4.0/examples/dashboard/dashboard.css",
    "revision": "d6bfe00466c3e7f263705880aff477b5"
  },
  {
    "url": "docs/4.0/examples/dashboard/index.html",
    "revision": "b5747e593aa49f09d6807d00b4d87e00"
  },
  {
    "url": "docs/4.0/examples/floating-labels/floating-labels.css",
    "revision": "f8ad6eff1ca35ca94cd62510741f8514"
  },
  {
    "url": "docs/4.0/examples/floating-labels/index.html",
    "revision": "e16e25d95c2a41f6d3d8ff7b94b82936"
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
    "revision": "df4641bc8a2183a92d5e42c210c2d829"
  },
  {
    "url": "docs/4.0/examples/jumbotron/index.html",
    "revision": "187a48844da8e19e0765d417a5077f81"
  },
  {
    "url": "docs/4.0/examples/jumbotron/jumbotron.css",
    "revision": "0ef7edc6babea5a47645bda0c45368aa"
  },
  {
    "url": "docs/4.0/examples/navbar-bottom/index.html",
    "revision": "dd165c45857a4239ce7787aea5a7bff5"
  },
  {
    "url": "docs/4.0/examples/navbar-fixed/index.html",
    "revision": "1178a7c1f06eeeea76176173b2e0d7fd"
  },
  {
    "url": "docs/4.0/examples/navbar-fixed/navbar-top-fixed.css",
    "revision": "3d46ddff119cfe2886a34b72aefd42a6"
  },
  {
    "url": "docs/4.0/examples/navbar-static/index.html",
    "revision": "8f818f7c1ab4e90bf1ea9b0bd0adb5b3"
  },
  {
    "url": "docs/4.0/examples/navbar-static/navbar-top.css",
    "revision": "ae704085e05c4bc6a705b225b03a5aea"
  },
  {
    "url": "docs/4.0/examples/navbars/index.html",
    "revision": "08d8de3d5416b5d62729b6f02ef27ed2"
  },
  {
    "url": "docs/4.0/examples/navbars/navbar.css",
    "revision": "f95ea8bb033949bba31b05925773e223"
  },
  {
    "url": "docs/4.0/examples/offcanvas/index.html",
    "revision": "0c1f17f3f2369c39c7f4caf5e9245017"
  },
  {
    "url": "docs/4.0/examples/offcanvas/offcanvas.css",
    "revision": "00c5c9021f80048da34d17c70730894a"
  },
  {
    "url": "docs/4.0/examples/offcanvas/offcanvas.js",
    "revision": "5c0edf2d5a4d88ec65e801c0f58ef23a"
  },
  {
    "url": "docs/4.0/examples/pricing/index.html",
    "revision": "418289199fbd0b6749424611483058fd"
  },
  {
    "url": "docs/4.0/examples/pricing/pricing.css",
    "revision": "25645f3f439673c14bc29068fa282d09"
  },
  {
    "url": "docs/4.0/examples/product/index.html",
    "revision": "7424fe35dc94c1190849c8627cc33ef0"
  },
  {
    "url": "docs/4.0/examples/product/product.css",
    "revision": "139ada632a48dc6b96a46a265a2cc60c"
  },
  {
    "url": "docs/4.0/examples/screenshots/album.png",
    "revision": "685d5277fdf6f04aefbcbe01ba93e9ef"
  },
  {
    "url": "docs/4.0/examples/screenshots/blog.png",
    "revision": "d06dc15ae8285908ec7ba9f4b1f98a44"
  },
  {
    "url": "docs/4.0/examples/screenshots/carousel.png",
    "revision": "dc04e087b8ad4f000fa64e266812fc0f"
  },
  {
    "url": "docs/4.0/examples/screenshots/checkout.png",
    "revision": "030255900e0b73653cf6a2d074f17b31"
  },
  {
    "url": "docs/4.0/examples/screenshots/cover.png",
    "revision": "ece97a4eb488c46a86a67d61db25dda2"
  },
  {
    "url": "docs/4.0/examples/screenshots/dashboard.png",
    "revision": "2fc93187d09b5b8c342b962576eaf39e"
  },
  {
    "url": "docs/4.0/examples/screenshots/floating-labels.png",
    "revision": "fae0436f9d026a67778f3a37d29b3dfc"
  },
  {
    "url": "docs/4.0/examples/screenshots/grid.png",
    "revision": "cb63b8b5fd89749a2d87342876306dd8"
  },
  {
    "url": "docs/4.0/examples/screenshots/jumbotron.png",
    "revision": "0f579cb67e8c8535d8fffef7d17b7e45"
  },
  {
    "url": "docs/4.0/examples/screenshots/navbar-bottom.png",
    "revision": "0cefd6caed82af75be57d758633d9094"
  },
  {
    "url": "docs/4.0/examples/screenshots/navbar-fixed.png",
    "revision": "1d38f157f0bbbd90957044d30eaef242"
  },
  {
    "url": "docs/4.0/examples/screenshots/navbar-static.png",
    "revision": "2ff01be7ee251fc5c7f51ccf9de5f48d"
  },
  {
    "url": "docs/4.0/examples/screenshots/navbars.png",
    "revision": "d4fbce8e1e38d78a5134e6be05cdd4d7"
  },
  {
    "url": "docs/4.0/examples/screenshots/offcanvas.png",
    "revision": "c581d49a56f3e9d0d1753195c62e719a"
  },
  {
    "url": "docs/4.0/examples/screenshots/pricing.png",
    "revision": "e33e2f37741c6d15c99f3378e2e551ea"
  },
  {
    "url": "docs/4.0/examples/screenshots/product.png",
    "revision": "af74e4f7ddfc8cf2a44a9c601881329f"
  },
  {
    "url": "docs/4.0/examples/screenshots/sign-in.png",
    "revision": "9e4bf345a8c21403868f70b777efb483"
  },
  {
    "url": "docs/4.0/examples/screenshots/starter-template.png",
    "revision": "1761d4e831e7c0659962e1abdb95421f"
  },
  {
    "url": "docs/4.0/examples/screenshots/sticky-footer-navbar.png",
    "revision": "428112965cf6826db55bcc6db07d9e5f"
  },
  {
    "url": "docs/4.0/examples/screenshots/sticky-footer.png",
    "revision": "59b69c34997abee3d477f836d44ce8a3"
  },
  {
    "url": "docs/4.0/examples/sign-in/index.html",
    "revision": "0739de40d4fb2333772503ff6a475b18"
  },
  {
    "url": "docs/4.0/examples/sign-in/signin.css",
    "revision": "a405ec1b388bf472e47bc544918f0887"
  },
  {
    "url": "docs/4.0/examples/starter-template/index.html",
    "revision": "b54e5fb4fb0c6bfad8e6ff47b6434d4e"
  },
  {
    "url": "docs/4.0/examples/starter-template/starter-template.css",
    "revision": "8cb4aab3660723b641b6458f1a1d3ab1"
  },
  {
    "url": "docs/4.0/examples/sticky-footer-navbar/index.html",
    "revision": "cf52f64c92b9c1fae606d610fe2d2116"
  },
  {
    "url": "docs/4.0/examples/sticky-footer-navbar/sticky-footer-navbar.css",
    "revision": "c5c610f36d8c2a89e7d587880ee0cd68"
  },
  {
    "url": "docs/4.0/examples/sticky-footer/index.html",
    "revision": "7f8a7abbce45fa7d948f8fe3a41c3545"
  },
  {
    "url": "docs/4.0/examples/sticky-footer/sticky-footer.css",
    "revision": "09630d01995ef9c0f8fc9ae622f00466"
  },
  {
    "url": "docs/4.0/examples/tooltip-viewport/index.html",
    "revision": "b1074cded6dd5b3603fd470151af233e"
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
    "revision": "2102a2a202a438033d2c8a6d67eb8dfb"
  },
  {
    "url": "docs/4.0/extend/icons/index.html",
    "revision": "8923135ca40e6b47bc757fed36c825f5"
  },
  {
    "url": "docs/4.0/extend/index.html",
    "revision": "66097341930616307ed986a906172fa0"
  },
  {
    "url": "docs/4.0/getting-started/accessibility/index.html",
    "revision": "e3e1fd90613be8224452bd5a05b8fb6c"
  },
  {
    "url": "docs/4.0/getting-started/best-practices/index.html",
    "revision": "b8bfe0bf61faec976c08674ab1f7ffab"
  },
  {
    "url": "docs/4.0/getting-started/browsers-devices/index.html",
    "revision": "efd07763005cef656adfbe81bdc53d70"
  },
  {
    "url": "docs/4.0/getting-started/build-tools/index.html",
    "revision": "8f731dba72bca5f5991f4dffeee253ca"
  },
  {
    "url": "docs/4.0/getting-started/contents/index.html",
    "revision": "044190f335924157a88d124ecda14747"
  },
  {
    "url": "docs/4.0/getting-started/download/index.html",
    "revision": "21536aa7cbba55d9d11828d5631a3c59"
  },
  {
    "url": "docs/4.0/getting-started/index.html",
    "revision": "2449b0c2f82b9f9b6099e8bf51a426d7"
  },
  {
    "url": "docs/4.0/getting-started/introduction/index.html",
    "revision": "6c24babe55b49aafde8d80ffeb91e4b6"
  },
  {
    "url": "docs/4.0/getting-started/javascript/index.html",
    "revision": "2d99ba624c7ab7acae66610a4db78a11"
  },
  {
    "url": "docs/4.0/getting-started/options/index.html",
    "revision": "956b1be10afdd760db04f99225535b46"
  },
  {
    "url": "docs/4.0/getting-started/theming/index.html",
    "revision": "f1e0048bd53d619f30c9236f36c9d54d"
  },
  {
    "url": "docs/4.0/getting-started/webpack/index.html",
    "revision": "38f422d8e4ccea60e0504d927f87290a"
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
    "revision": "36e521fc4c1f38d496aa9c6ff2e2ee3b"
  },
  {
    "url": "docs/4.0/layout/index.html",
    "revision": "73bf7900b3d847dd4836bf9a5bb1dfb0"
  },
  {
    "url": "docs/4.0/layout/media-object/index.html",
    "revision": "9014a188cd4804c57e61457503bd3bfa"
  },
  {
    "url": "docs/4.0/layout/overview/index.html",
    "revision": "75cf543ed3dd29ceb34fd88c10122c27"
  },
  {
    "url": "docs/4.0/layout/utilities-for-layout/index.html",
    "revision": "910d83a1983428f13452591224a4d55d"
  },
  {
    "url": "docs/4.0/migration/index.html",
    "revision": "bb349b40a0ee58b8394b3358550fcc0c"
  },
  {
    "url": "docs/4.0/team/index.html",
    "revision": "902df84ffd060fc0e2d651fe659f0896"
  },
  {
    "url": "docs/4.0/utilities/borders/index.html",
    "revision": "893a6212865b0c7264c8b701614adef7"
  },
  {
    "url": "docs/4.0/utilities/clearfix/index.html",
    "revision": "cb3f05be6f6a599555de557f2e7794e3"
  },
  {
    "url": "docs/4.0/utilities/close-icon/index.html",
    "revision": "50653f5dc37725c5ca4b2901280ecc12"
  },
  {
    "url": "docs/4.0/utilities/colors/index.html",
    "revision": "b9f4f93cf694243626befa027d67ef9e"
  },
  {
    "url": "docs/4.0/utilities/display/index.html",
    "revision": "eae49dc041202fe5a1ce406d630b114b"
  },
  {
    "url": "docs/4.0/utilities/embed/index.html",
    "revision": "c0463884114e05e9eab2657ec1da7d7b"
  },
  {
    "url": "docs/4.0/utilities/flex/index.html",
    "revision": "81107f9ca552c4300b8e1f25ab83cd78"
  },
  {
    "url": "docs/4.0/utilities/float/index.html",
    "revision": "da4b3a9771ae4cb0cb87da9cfec93bc4"
  },
  {
    "url": "docs/4.0/utilities/image-replacement/index.html",
    "revision": "6605529742e3c95d51ae3a150df576a4"
  },
  {
    "url": "docs/4.0/utilities/index.html",
    "revision": "d163d8a25c2cdd3a3f0675597010243c"
  },
  {
    "url": "docs/4.0/utilities/position/index.html",
    "revision": "dcd258009907045ce2e4303cfb65b06f"
  },
  {
    "url": "docs/4.0/utilities/screenreaders/index.html",
    "revision": "6454d4087990bff313183a76a8e3d9d9"
  },
  {
    "url": "docs/4.0/utilities/sizing/index.html",
    "revision": "eccc18dfbc87c532477cc2eb4cf40160"
  },
  {
    "url": "docs/4.0/utilities/spacing/index.html",
    "revision": "0fcd739a744e9f045b4aa4594bb7e8e5"
  },
  {
    "url": "docs/4.0/utilities/text/index.html",
    "revision": "c66f3397d9b63a12213bef974b32b072"
  },
  {
    "url": "docs/4.0/utilities/vertical-align/index.html",
    "revision": "643a60a0a1417452ce6bb42b085e9b23"
  },
  {
    "url": "docs/4.0/utilities/visibility/index.html",
    "revision": "ffba7854e72e71e25b1ae75e86b95563"
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
    "revision": "424fa4dde3786d931d16e3781f450b87"
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

<?php
ini_set('display_startup_errors',1);
ini_set('display_errors',1);
error_reporting(-1);
$pages = [
'playground' => [
'title' => 'Playground',
'text' => '&lArr; Projects are listed there. Feel free to report bugs or improvements.',
'active' => ['playgroundActive']
],
'css-collection' => [
'title' => 'Css collection',
'text' => '<p>Css collection is a collection of css-plugins, still in testing phase.</p>',
'active' => ['playgroundActive','playgroundCssCollection']
],
'navigation' => [
'title' => 'Css collection navigation',
'text' => '<p>This site uses a responsive navigation without js.</p>',
'active' => ['playgroundActive','playgroundCssCollection','playgroundCssCollectionNavigation']
],
'carousel' => [
'title' => 'Carousel',
'text' => '<div class="carousel">
<input type="radio" name="carousel" id="carousel-slide-1" checked>
<input type="radio" name="carousel" id="carousel-slide-2">
<input type="radio" name="carousel" id="carousel-slide-3">
<input type="radio" name="carousel" id="carousel-slide-4">
<input type="radio" name="carousel" id="carousel-slide-5">
<ul class="carousel-slides carousel-slides-5">
<li>
<img src="http://lorempixel.com/600/340/abstract/1" height="340" width="600" alt="Slide 1">
</li>
<li>
<img src="http://lorempixel.com/600/340/abstract/2" height="340" width="600" alt="Slide 2">
</li>
<li>
<img src="http://lorempixel.com/600/340/abstract/3" height="340" width="600" alt="Slide 3">
</li>
<li>
<img src="http://lorempixel.com/600/340/abstract/4" height="340" width="600" alt="Slide 4">
</li>
<li>
<img src="http://lorempixel.com/600/340/abstract/5" height="340" width="600" alt="Slide 5">
</li>
</ul>
<ul class="carousel-dots">
<li>
<label for="carousel-slide-1">Slide 1</label>
</li>
<li>
<label for="carousel-slide-2">Slide 2</label>
</li>
<li>
<label for="carousel-slide-3">Slide 3</label>
</li>
<li>
<label for="carousel-slide-4">Slide 4</label>
</li>
<li>
<label for="carousel-slide-5">Slide 5</label>
</li>
</ul>
<ul class="carousel-arrows">
<li>
<label class="btn-arrow prev" for="carousel-slide-5">Previous</label>
<label class="btn-arrow next" for="carousel-slide-2">Next</label>
</li>
<li>
<label class="btn-arrow prev" for="carousel-slide-1">Previous</label>
<label class="btn-arrow next" for="carousel-slide-3">Next</label>
</li>
<li>
<label class="btn-arrow prev" for="carousel-slide-2">Previous</label>
<label class="btn-arrow next" for="carousel-slide-4">Next</label>
</li>
<li>
<label class="btn-arrow prev" for="carousel-slide-3">Previous</label>
<label class="btn-arrow next" for="carousel-slide-5">Next</label>
</li>
<li>
<label class="btn-arrow prev" for="carousel-slide-4">Previous</label>
<label class="btn-arrow next" for="carousel-slide-1">Next</label>
</li>
</ul>
</div>',
'active' => ['playgroundActive','playgroundCssCollection','playgroundCssCollectionCarousel']
],
'overlay' => [
'title' => 'Overlay',
'text' => '
<ul class="gallery">
<li>
<label for="overlay-slide-1">
<img src="http://lorempixel.com/200/200/abstract/1" width="200" height="200" alt="slide 1">
</label>
</li>
<li>
<label for="overlay-slide-2">
<img src="http://lorempixel.com/200/200/abstract/2" width="200" height="200" alt="slide 2">
</label>
</li>
<li>
<label for="overlay-slide-3">
<img src="http://lorempixel.com/200/200/abstract/3" width="200" height="200" alt="slide 3">
</label>
</li>
<li>
<label for="overlay-slide-4">
<img src="http://lorempixel.com/200/200/abstract/4" width="200" height="200" alt="slide 4">
</label>
</li>
<li>
<label for="overlay-slide-5">
<img src="http://lorempixel.com/200/200/abstract/5" width="200" height="200" alt="slide 5">
</label>
</li>
<li>
<label for="overlay-slide-6">
<img src="http://lorempixel.com/200/200/abstract/6" width="200" height="200" alt="slide 6">
</label>
</li>
<li>
<label for="overlay-slide-7">
<img src="http://lorempixel.com/200/200/abstract/7" width="200" height="200" alt="slide 7">
</label>
</li>
<li>
<label for="overlay-slide-8">
<img src="http://lorempixel.com/200/200/abstract/8" width="200" height="200" alt="slide 8">
</label>
</li>
</ul>
<div class="overlay">
<input type="radio" name="overlay" id="overlay-slide-1">
<input type="radio" name="overlay" id="overlay-slide-2">
<input type="radio" name="overlay" id="overlay-slide-3">
<input type="radio" name="overlay" id="overlay-slide-4">
<input type="radio" name="overlay" id="overlay-slide-5">
<input type="radio" name="overlay" id="overlay-slide-6">
<input type="radio" name="overlay" id="overlay-slide-7">
<input type="radio" name="overlay" id="overlay-slide-8">
<input type="radio" name="overlay" id="overlay-close" class="overlay-close">
<div class="overlay-inner">
<ul class="overlay-slides overlay-slides-8">
<li>
<div class="overlay-item">
<img src="http://lorempixel.com/1200/900/abstract/1" width="900"height="1200" alt="Slide 1">
<span class="title">Slide 1</span>
</li>
<li>
<div class="overlay-item">
<img src="http://lorempixel.com/1600/800/abstract/2" width="1600" height="340"  alt="Slide 2">
<span class="title">Slide 2</span>
</div>
</li>
<li>
<div class="overlay-item">
<img src="http://lorempixel.com/800/450/abstract/3" width="800" height="340" alt="Slide 3">
<span class="title">Slide 3</span>
</div>
</li>
<li>
<div class="overlay-item">
<img src="http://lorempixel.com/600/340/abstract/4" width="600" height="340" alt="Slide 4">
<span class="title">Slide 4 - (next slide has no title)</span>
</div>
</li>
<li>
<div class="overlay-item">
<img src="http://lorempixel.com/1200/700/abstract/5" width="1200" height="700" alt="Slide 5">
</div>
</li>
<li>
<div class="overlay-item">
<img src="http://lorempixel.com/1600/900/abstract/6" width="1600" height="900" alt="Slide 6">
<span class="title">Slide 6</span>
</div>
</li>
<li>
<div class="overlay-item">
<img src="http://lorempixel.com/1600/900/abstract/7" width="1600" height="900" alt="Slide 7">
<span class="title">Slide 7</span>
</div>
</li>
<li>
<div class="overlay-item">
<img src="http://lorempixel.com/1600/900/abstract/8" width="1600" height="900" alt="Slide 8">
<span class="title">Slide 8</span>
</div>
</li>
<li class="overlay-close-item">
<label class="overlay-close-overlay" for="overlay-close" title="Close overlay">Close</label>
</li>
</ul>
<ul class="overlay-dots">
<li>
<label for="overlay-slide-1">Slide 1</label>
</li>
<li>
<label for="overlay-slide-2">Slide 2</label>
</li>
<li>
<label for="overlay-slide-3">Slide 3</label>
</li>
<li>
<label for="overlay-slide-4">Slide 4</label>
</li>
<li>
<label for="overlay-slide-5">Slide 5</label>
</li>
<li>
<label for="overlay-slide-6">Slide 6</label>
</li>
<li>
<label for="overlay-slide-7">Slide 7</label>
</li>
<li>
<label for="overlay-slide-8">Slide 8</label>
</li>
</ul>
<ul class="overlay-arrows">
<li>
<label class="btn-arrow prev" for="overlay-slide-8">Previous</label>
<label class="btn-arrow next" for="overlay-slide-2">Next</label>
</li>
<li>
<label class="btn-arrow prev" for="overlay-slide-1">Previous</label>
<label class="btn-arrow next" for="overlay-slide-3">Next</label>
</li>
<li>
<label class="btn-arrow prev" for="overlay-slide-2">Previous</label>
<label class="btn-arrow next" for="overlay-slide-4">Next</label>
</li>
<li>
<label class="btn-arrow prev" for="overlay-slide-3">Previous</label>
<label class="btn-arrow next" for="overlay-slide-5">Next</label>
</li>
<li>
<label class="btn-arrow prev" for="overlay-slide-4">Previous</label>
<label class="btn-arrow next" for="overlay-slide-6">Next</label>
</li>
<li>
<label class="btn-arrow prev" for="overlay-slide-5">Previous</label>
<label class="btn-arrow next" for="overlay-slide-7">Next</label>
</li>
<li>
<label class="btn-arrow prev" for="overlay-slide-6">Previous</label>
<label class="btn-arrow next" for="overlay-slide-8">Next</label>
</li>
<li>
<label class="btn-arrow prev" for="overlay-slide-7">Previous</label>
<label class="btn-arrow next" for="overlay-slide-1">Next</label>
</li>
</ul>
</div>
</div>',
'active' => ['playgroundActive','playgroundCssCollection','playgroundCssCollectionOverlay']
],
'responsive-menu' => [
'title' => 'Responsive menu',
'text' => 'This site uses a responsive navigation that works without Javascript.',
'active' => ['playgroundActive','playgroundCssCollection','playgroundCssCollectionResponsiveMenu']
],
'the-css-race' => [
'title' => 'The css race',
'text' => '
<div class="the-race">
<input type="radio" id="level-1" name="race" checked>
<input type="radio" id="level-1-ended" name="race">
<input type="radio" id="level-2" name="race">
<input type="radio" id="level-2-ended" name="race">
<input type="radio" id="level-3" name="race">
<input type="radio" id="level-3-ended" name="race">

<div class="level level-1">
<div class="tile">
<div class="tile right">
<div class="tile down">
<div class="tile down">
<div class="tile right">
<div class="tile right">
<div class="tile right">
<div class="tile up">
<div class="tile up">
<div class="tile right">
<div class="tile right">
<div class="tile right">
<div class="tile down">
<div class="tile down">
<div class="tile down">
<div class="tile left">
<div class="tile down">
<div class="tile left">
<div class="tile down">
<div class="tile down">
<div class="tile right">
<div class="tile right">
<div class="tile right">
<div class="tile up">
<div class="tile right">
<div class="tile up">
<div class="tile right">
<div class="tile up">
<div class="tile up">
<div class="tile left">
<div class="tile up">
<div class="tile up">
<div class="tile right">
<div class="tile right">
<div class="tile right">
<div class="tile right">
<div class="tile right">
<div class="tile right">
<div class="tile down">
<div class="tile right">
<div class="tile right">
<div class="tile right">
<div class="tile down">
<div class="tile down">
<div class="tile right">
<div class="tile down">
<div class="tile down">
<div class="tile down">
<div class="tile left">
<div class="tile left">
<div class="tile left">
<div class="tile up">
<div class="tile left">
<div class="tile up">
<div class="tile up">
<div class="tile right">
<label class="finish" for="level-1-ended">
Finish
</label>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>

<div class="level level-ended level-1-ended">
<h2 class="level-ended-title">Congratulations, level 1 passed!</h2>
<label class="restart-level" for="level-1">
Restart level 1
</label>
<label class="next-level" for="level-2">
Go to level 2
</label>
</div>


<div class="level level-2">
<div class="tile">
<div class="tile right">
<div class="tile down">
<div class="tile down">
<div class="tile right">
<div class="tile right">
<div class="tile up">
<div class="tile right">
<div class="tile right">
<div class="tile down">
<div class="tile down">
<div class="tile left">
<div class="tile down">
<div class="tile left">
<div class="tile down">
<div class="tile down">
<div class="tile left">
<div class="tile left">
<div class="tile up">
<div class="tile left">
<div class="tile left">
<div class="tile down">
<div class="tile down">
<div class="tile down">
<div class="tile right">
<div class="tile right">
<div class="tile right">
<div class="tile right">
<div class="tile down">
<div class="tile right">
<div class="tile down">
<div class="tile down">
<div class="tile down">
<div class="tile right">
<div class="tile right">
<div class="tile right">
<div class="tile up">
<div class="tile up">
<div class="tile up">
<div class="tile up">
<div class="tile left">
<div class="tile up">
<div class="tile left">
<div class="tile up">
<div class="tile up">
<div class="tile right">
<div class="tile right">
<div class="tile up">
<div class="tile right">
<div class="tile right">
<div class="tile down">
<div class="tile right">
<div class="tile right">
<div class="tile right">
<div class="tile right">
<div class="tile down">
<div class="tile right">
<div class="tile right">
<div class="tile up">
<div class="tile right">
<div class="tile right">
<div class="tile right">
<div class="tile right">
<div class="tile right">
<div class="tile down">
<div class="tile right">
<div class="tile right">
<div class="tile down">
<div class="tile down">
<div class="tile left">
<div class="tile left">
<div class="tile left">
<div class="tile up">
<div class="tile left">
<div class="tile left">
<div class="tile down">
<div class="tile down">
<div class="tile left">
<label class="finish" for="level-2-ended">
Finish
</label>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>

<div class="level level-ended level-2-ended">
<h2 class="level-ended-title">Congratulations, level 2 passed!</h2>
<label class="restart-level" for="level-1">
Restart level 1
</label>
<label class="restart-level" for="level-2">
Restart level 2
</label>
<label class="next-level" for="level-3">
Go to level 3
</label>
</div>

<div class="level level-3">
<div class="tile">
<div class="tile left">
<div class="tile up">
<div class="tile up">
<div class="tile left">
<div class="tile left">
<div class="tile down">
<div class="tile left">
<div class="tile left">
<div class="tile up">
<div class="tile up">
<div class="tile right">
<div class="tile up">
<div class="tile right">
<div class="tile up">
<div class="tile up">
<div class="tile right">
<div class="tile right">
<div class="tile down">
<div class="tile right">
<div class="tile right">
<div class="tile up">
<div class="tile up">
<div class="tile up">
<div class="tile left">
<div class="tile left">
<div class="tile left">
<div class="tile left">
<div class="tile up">
<div class="tile left">
<div class="tile up">
<div class="tile up">
<div class="tile up">
<div class="tile left">
<div class="tile left">
<div class="tile left">
<div class="tile down">
<div class="tile down">
<div class="tile down">
<div class="tile down">
<div class="tile right">
<div class="tile down">
<div class="tile right">
<div class="tile down">
<div class="tile down">
<div class="tile left">
<div class="tile left">
<div class="tile down">
<div class="tile left">
<div class="tile left">
<div class="tile up">
<div class="tile left">
<div class="tile left">
<div class="tile left">
<div class="tile left">
<div class="tile up">
<div class="tile left">
<div class="tile left">
<div class="tile down">
<div class="tile left">
<div class="tile left">
<div class="tile left">
<div class="tile left">
<div class="tile left">
<div class="tile up">
<div class="tile left">
<div class="tile left">
<div class="tile up">
<div class="tile up">
<div class="tile right">
<div class="tile right">
<div class="tile right">
<div class="tile down">
<div class="tile right">
<div class="tile right">
<div class="tile up">
<div class="tile up">
<div class="tile right">
<label class="finish" for="level-3-ended">
Finish
</label>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>

<div class="level level-ended level-3-ended">
<h2 class="level-ended-title">Congratulations, all levels done!</h2>
<label class="restart-level" for="level-1">
Restart level 1
</label>
<label class="restart-level" for="level-2">
Restart level 2
</label>
<label class="restart-level" for="level-3">
Restart level 3
</label>
</div>

</div>
',
'active' => ['playgroundActive','playgroundTheCssRace']
],
'index' => [
'title' => '&Mscr;artijn Cuppens',
'text' => 'Front-end &amp; Drupal back-end developer. More info comming soon.',
'active' => ['homeActive']
]
];
foreach ($pages as $key => $page) {
  $homeActive = false;
  $playgroundActive = false;
  $playgroundCssCollection = false;
  $playgroundCssCollectionCarousel = false;
  $playgroundCssCollectionOverlay = false;
  $playgroundCssCollectionResponsiveMenu = false;
  $playgroundTheCssRace = false;
  $contactActive = false;
  $title = $page['title'];
  $text = $page['text'];
  foreach ($page['active'] as $active) {
    ${$active} = true;
  }
  ob_start();
  ?>
  <!doctype html>
  <html class="no-js" lang="en">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="x-ua-compatible" content="ie=edge">
    <title><?php if(!$homeActive) { print  $title. ' | '; } ?>&Mscr;artijn Cuppens</title>
    <meta name="description" content="">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <link rel="icon" type="image/png" href="http://martijncuppens.github.io/favicon-32x32.png" sizes="32x32">
    <link rel="icon" type="image/png" href="http://martijncuppens.github.io/favicon-16x16.png" sizes="16x16">

    <link rel="stylesheet" href="css/normalize.css">
    <link rel="stylesheet" href="css/main.css">
    <link rel="stylesheet" href="css/style.css">
    <link rel="stylesheet" href="css/navigation.css">
    <link rel="stylesheet" href="css/carousel.css">
    <link rel="stylesheet" href="css/overlay.css">
    <link rel="stylesheet" href="css/the-css-race.css">
  </head>
  <body>
    <!--[if IE]><p class="browserupgrade">You are using an <strong>outdated</strong> browser. Please <a href="http://browsehappy.com/">upgrade your browser</a> to improve your experience.</p><![endif]-->
    <header class="site-header">
      <div class="container clearfix">
        <h1 class="site-title"><a href="index.html">&Mscr;artijn Cuppens</a></h1>
        <nav class="site-nav">
          <input type="checkbox" id="main-menu">
          <label class="menu-toggle" for="main-menu">
            Menu
            <span class="hamburger"><span class="toast-top"></span><span class="meat"></span><span class="toast-bottom"></span></span>
          </label>
          <div class="nav-item">
            <ul>
              <li>
                <a <?php if ($homeActive){print 'class="active" ';}  ?>href="index.html">Home</a>
              </li>
              <li>
                <input <?php if ($playgroundActive){print 'checked ';}  ?>type="checkbox" id="playground">
                <label class="open-nav-item<?php if ($playgroundActive){print ' active';}  ?>" for="playground">Playground</label>
                <div class="nav-item">
                  <label class="back" for="playground">Back</label>
                  <a <?php if ($playgroundActive){print 'class="active" ';}  ?>href="playground.html">Playground</a>
                  <ul>
                    <li>
                      <input <?php if ($playgroundCssCollection){print 'checked ';}  ?>type="checkbox" id="css-collection">
                      <label class="open-nav-item<?php if ($playgroundCssCollection){print ' active';}  ?>" for="css-collection">Css collection</label>
                      <div class="nav-item">
                        <label class="back" for="css-collection">Back</label>
                        <a <?php if ($playgroundCssCollection){print 'class="active" ';}  ?>href="css-collection.html">Css collection</a>
                        <ul>
                          <li>
                            <a <?php if ($playgroundCssCollectionCarousel){print 'class="active" ';}  ?>href="carousel.html">Carousel</a>
                          </li>
                          <li>
                            <a <?php if ($playgroundCssCollectionOverlay){print 'class="active" ';}  ?>href="overlay.html">Overlay</a>
                          </li>
                          <li>
                            <a <?php if ($playgroundCssCollectionResponsiveMenu){print 'class="active" ';}  ?>href="responsive-menu.html">Responsive menu</a>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li>
                      <a <?php if ($playgroundTheCssRace){print 'class="active" ';}  ?> href="the-css-race.html">The css race</a>
                    </li>
                  </ul>
                </div>
              </li>
              <li>
                <a target="_blank" href="https://twitter.com/Martijn_Cuppens">Twitter</a>
              </li>
              <li>
                <a target="_blank" href="https://github.com/MartijnCuppens">Github</a>
              </li>
              <li>
                <a href="mailto:martijn.cuppens@gmail.com">Mail me</a>
              </li>
            </ul>
          </div>

        </nav>
      </div>
    </header>

    <div class="container site-content clearfix">

      <main class="site-main">
        <h2><?php print $title; ?></h2>
        <?php print $text; ?>
        <?php if ($playgroundActive): ?>
        <div id="disqus_thread"></div>
        <script type="text/javascript">
        var disqus_shortname = 'martijncuppensgithub';
        (function() {
          var dsq = document.createElement('script'); dsq.type = 'text/javascript'; dsq.async = true;
          dsq.src = 'http://' + disqus_shortname + '.disqus.com/embed.js';
          (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(dsq);
        })();
        </script>
      <?php endif; ?>
    </main>

    <?php if ($playgroundActive): ?>

    <aside class="site-subnav">
      <h2>Playground</h2>
      <nav>
        <ul>
          <li>
            <a  <?php if ($playgroundCssCollection){print 'class="active" ';}  ?>href="css-collection.html">Css collection</a>
            <ul>
              <li>
                <a <?php if ($playgroundCssCollectionCarousel){print 'class="active" ';}  ?>href="carousel.html">Carousel</a>
              </li>
              <li>
                <a <?php if ($playgroundCssCollectionOverlay){print 'class="active" ';}  ?>href="overlay.html">Overlay</a>
              </li>
              <li>
                <a <?php if ($playgroundCssCollectionResponsiveMenu){print 'class="active" ';}  ?>href="responsive-menu.html">Responsive menu</a>
              </li>
            </ul>
          </li>
          <li>
            <a <?php if ($playgroundTheCssRace){print 'class="active" ';}  ?> href="the-css-race.html">The css race</a>
          </li>
        </ul>
      </nav>
    </aside>

  <?php endif; ?>

</div>


<script>
if(location.hostname != '192.168.0.48'){
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
    (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
    m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-63576762-2', 'auto');
  ga('send', 'pageview');
}
</script>
</body>
</html>
<?php
file_put_contents($key.'.html', ob_get_contents());
}
?>

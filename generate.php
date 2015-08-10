<?php
ini_set('display_startup_errors',1);
ini_set('display_errors',1);
error_reporting(-1);
$pages = [
'about' => [
'title' => 'About',
'text' => 'Pellentesque commodo eros a enim. Morbi ac felis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Sed aliquam, nisi quis porttitor congue, elit erat euismod orci, ac placerat dolor lectus quis orci.
Cras id dui. Nunc egestas, augue at pellentesque laoreet, felis eros vehicula leo, at malesuada velit leo quis pede. Cras id dui. Morbi ac felis. Cras non dolor. Cras varius. Vestibulum purus quam, scelerisque ut, mollis sed, nonummy id, metus.',
'active' => ['aboutActive']
],
'carousel' => [
'title' => 'Carousel',
'text' => '<div class="carousel">
  <input type="radio" name="carousel" id="slide-1" checked>
  <input type="radio" name="carousel" id="slide-2">
  <input type="radio" name="carousel" id="slide-3">
  <input type="radio" name="carousel" id="slide-4">
  <input type="radio" name="carousel" id="slide-5">
  <ul class="slides slides-5">
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
  <ul class="dots">
  <li>
  <label for="slide-1">Slide 1</label>
  </li>
  <li>
  <label for="slide-2">Slide 2</label>
  </li>
  <li>
  <label for="slide-3">Slide 3</label>
  </li>
  <li>
  <label for="slide-4">Slide 4</label>
  </li>
  <li>
  <label for="slide-5">Slide 5</label>
  </li>
  </ul>
  <ul class="arrows">
  <li>
  <label class="prev" for="slide-5">Previous</label>
  <label class="next" for="slide-2">Next</label>
  </li>
  <li>
  <label class="prev" for="slide-1">Previous</label>
  <label class="next" for="slide-3">Next</label>
  </li>
  <li>
  <label class="prev" for="slide-2">Previous</label>
  <label class="next" for="slide-4">Next</label>
  </li>
  <li>
  <label class="prev" for="slide-3">Previous</label>
  <label class="next" for="slide-5">Next</label>
  </li>
  <li>
  <label class="prev" for="slide-4">Previous</label>
  <label class="next" for="slide-1">Next</label>
  </li>
  </ul>

</div>',
'active' => ['aboutActive', 'about1Active']
],
'about-2' => [
'title' => 'About 2',
'text' => 'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Sed aliquam, nisi quis porttitor congue, elit erat euismod orci, ac placerat dolor lectus quis orci.
Pellentesque commodo eros a enim. Morbi ac felis. Cras id dui. Nunc egestas, augue at pellentesque laoreet, felis eros vehicula leo, at malesuada velit leo quis pede. Cras id dui. Morbi ac felis.
Cras non dolor. Cras varius. Vestibulum purus quam, scelerisque ut, mollis sed, nonummy id, metus.',
'active' => ['aboutActive', 'about3Active']
],
'about-3' => [
'title' => 'About 3',
'text' => 'Phasellus ullamcorper ipsum rutrum nunc. Vivamus elementum semper nisi. Praesent vestibulum dapibus nibh. Etiam sollicitudin, ipsum eu pulvinar rutrum, tellus ipsum laoreet sapien, quis venenatis ante odio sit amet eros.
Cras risus ipsum, faucibus ut, ullamcorper id, varius ac, leo. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Sed aliquam, nisi quis porttitor congue, elit erat euismod orci, ac placerat dolor lectus quis orci.
Pellentesque commodo eros a enim. Morbi ac felis. Cras id dui. Nunc egestas, augue at pellentesque laoreet, felis eros vehicula leo, at malesuada velit leo quis pede. Cras id dui. Morbi ac felis.
Cras non dolor. Cras varius. Vestibulum purus quam, scelerisque ut, mollis sed, nonummy id, metus.',
'active' => ['aboutActive', 'about3Active']
],
'about-3-1' => [
'title' => 'About 3.1',
'text' => 'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Sed aliquam, nisi quis porttitor congue, elit erat euismod orci, ac placerat dolor lectus quis orci.
Pellentesque commodo eros a enim. Morbi ac felis. Cras id dui. Nunc egestas, augue at pellentesque laoreet, felis eros vehicula leo, at malesuada velit leo quis pede. Cras id dui. Morbi ac felis.
Cras non dolor. Cras varius. Vestibulum purus quam, scelerisque ut, mollis sed, nonummy id, metus.',
'active' => ['aboutActive', 'about3Active', 'about31Active']
],
'about-3-2' => [
'title' => 'About 3.2',
'text' => 'Nunc egestas, augue at pellentesque laoreet, felis eros vehicula leo, at malesuada velit leo quis pede. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae;
Sed aliquam, nisi quis porttitor congue, elit erat euismod orci, ac placerat dolor lectus quis orci. Cras varius. Vestibulum purus quam, scelerisque ut, mollis sed, nonummy id, metus
Pellentesque commodo eros a enim. Morbi ac felis. Cras id dui.  Cras id dui. Morbi ac felis. Cras non dolor.',
'active' => ['aboutActive', 'about3Active', 'about32Active']
],
'news' => [
'title' => 'News',
'text' => 'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Sed aliquam, nisi quis porttitor congue, elit erat euismod orci, ac placerat dolor lectus quis orci.
Pellentesque commodo eros a enim. Morbi ac felis. Aliquam eu nunc. Quisque libero metus, condimentum nec, tempor a, commodo mollis, magna.
Nunc egestas, augue at pellentesque laoreet, felis eros vehicula leo, at malesuada velit leo quis pede. Cras id dui. Morbi ac felis. Cras non dolor. Cras varius. Vestibulum purus quam, scelerisque ut, mollis sed, nonummy id, metus.',
'active' => ['newsActive']
],
'agenda' => [
'title' => 'Agenda',
'text' => 'Sed aliquam, nisi quis porttitor congue, elit erat euismod orci, ac placerat dolor lectus quis orci.
Aliquam eu nunc. Quisque libero metus, condimentum nec, tempor a, commodo mollis, magna. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae;
Pellentesque commodo eros a enim. Morbi ac felis. Cras id dui. Nunc egestas, augue at pellentesque laoreet, felis eros vehicula leo, at malesuada velit leo quis pede. Cras id dui. Morbi ac felis.
Cras non dolor. Cras varius. Vestibulum purus quam, scelerisque ut, mollis sed, nonummy id, metus.',
'active' => ['agendaActive']
],
'contact' => [
'title' => 'Contact',
'text' => '<ul>
  <li>
    <a target="_blank" href="https://twitter.com/Martijn_Cuppens">@Martijn_Cuppens</a>
  </li>
  <li>
    <a target="_blank" href="mailto:martijn.cuppens@gmail.com" data-after="martijn.cuppens@gmail.com"></a>
  </li>
</ul>',
'active' => ['contactActive']
],
'index' => [
'title' => 'Responsive navigation without javascript',
'text' => 'Documentation is pending, all other pages are Lorem Ipsum pages.',
'active' => ['homeActive']
]
];
foreach ($pages as $key => $page) {
  $homeActive = false;
  $aboutActive = false;
  $about1Active = false;
  $about2Active = false;
  $about3Active = false;
  $about31Active = false;
  $about32Active = false;
  $newsActive = false;
  $agendaActive = false;
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
  <title><?php print $title; ?> | Css responsive menu</title>
  <meta name="description" content="">
  <meta name="viewport" content="width=device-width, initial-scale=1">

  <link rel="apple-touch-icon" href="apple-touch-icon.png">

  <link rel="stylesheet" href="css/normalize.css">
  <link rel="stylesheet" href="css/main.css">
  <link rel="stylesheet" href="css/style.css">
  <link rel="stylesheet" href="css/navigation.css">
  <link rel="stylesheet" href="css/carousel.css">
</head>
<body>
  <!--[if IE]><p class="browserupgrade">You are using an <strong>outdated</strong> browser. Please <a href="http://browsehappy.com/">upgrade your browser</a> to improve your experience.</p><![endif]-->
  <header class="site-header">
    <div class="container clearfix">
      <h1 class="site-title"><a href="index.html">Company logo</a></h1>
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
              <input <?php if ($aboutActive){print 'checked ';}  ?>type="checkbox" id="about">
              <label class="open-nav-item<?php if ($aboutActive){print ' active';}  ?>" for="about">About</label>
              <div class="nav-item">
                <label class="back" for="about">Back</label>
                <a <?php if ($aboutActive){print 'class="active" ';}  ?>href="about.html">About</a>
                <ul>
                  <li>
                    <a <?php if ($about1Active){print 'class="active" ';}  ?>href="about-1.html">About 1</a>
                  </li>
                  <li>
                    <a <?php if ($about2Active){print 'class="active" ';}  ?>href="about-2.html">About 2</a>
                  </li>
                  <li>
                    <input <?php if ($about3Active){print 'checked ';}  ?>type="checkbox" id="about-3">
                    <label class="open-nav-item<?php if ($about3Active){print ' active';}  ?>" for="about-3">About 3</label>
                    <div class="nav-item">
                      <label class="back" for="about-3">Back</label>
                      <a  <?php if ($about3Active){print 'class="active" ';}  ?>href="about-3.html">About 3</a>
                      <ul>
                        <li>
                          <a <?php if ($about31Active){print 'class="active" ';}  ?>href="about-3-1.html">About 3.1</a>
                        </li>
                        <li>
                          <a <?php if ($about32Active){print 'class="active" ';}  ?>href="about-3-2.html">About 3.2</a>
                        </li>
                      </ul>
                    </div>
                  </li>
                </ul>
              </div>
            </li>
            <li>
              <a <?php if ($agendaActive){print 'class="active" ';}  ?>href="agenda.html">Agenda</a>
            </li>
            <li>
              <a <?php if ($newsActive){print 'class="active" ';}  ?>href="news.html">News</a>
            </li>
            <li>
              <a <?php if ($contactActive){print 'class="active" ';}  ?>href="contact.html">Contact</a>
            </li>
          </ul>
        </div>

      </nav>
    </div>
  </header>

  <div class="container site-content clearfix">

    <main class="site-main">
      <h2><?php print $title; ?></h2>
      <p><?php print $text; ?></p>
    </main>

    <?php if ($aboutActive): ?>

    <aside class="site-subnav">
      <h2>About</h2>
      <nav>
        <ul>
          <li>
            <a <?php if ($about1Active){print 'class="active" ';}  ?>href="about-1.html">About 1</a>
          </li>
          <li>
            <a <?php if ($about2Active){print 'class="active" ';}  ?>href="about-2.html">About 2</a>
          </li>
          <li>
            <a  <?php if ($about3Active){print 'class="active" ';}  ?>href="about-3.html">About 3</a>
            <ul>
              <li>
                <a <?php if ($about31Active){print 'class="active" ';}  ?>href="about-3-1.html">About 3.1</a>
              </li>
              <li>
                <a <?php if ($about32Active){print 'class="active" ';}  ?>href="about-3-2.html">About 3.2</a>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
    </aside>

  <?php endif; ?>

</div>


<footer class="site-footer">
  Created by Martijn Cuppens
</footer>



<script>
if(location.hostname != '192.168.0.48'){
(function(b,o,i,l,e,r){b.GoogleAnalyticsObject=l;b[l]||(b[l]=
  function(){(b[l].q=b[l].q||[]).push(arguments)});b[l].l=+new Date;
e=o.createElement(i);r=o.getElementsByTagName(i)[0];
e.src='https://www.google-analytics.com/analytics.js';
r.parentNode.insertBefore(e,r)}(window,document,'script','ga'));
ga('create','UA-XXXXX-X','auto');ga('send','pageview');
}
</script>
</body>
</html>
<?php
file_put_contents($key.'.html', ob_get_contents());
}
?>

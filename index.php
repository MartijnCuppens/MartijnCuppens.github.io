<?php
ini_set('display_startup_errors',1);
ini_set('display_errors',1);
error_reporting(-1);
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
$q = ( isset($_GET['q']) && is_string($_GET['q'])) ? $_GET['q'] : 'home';
switch ($q) {

  case 'about':
  $aboutActive = true;
  $title = 'About';
  $text = 'Pellentesque commodo eros a enim. Morbi ac felis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Sed aliquam, nisi quis porttitor congue, elit erat euismod orci, ac placerat dolor lectus quis orci.
  Cras id dui. Nunc egestas, augue at pellentesque laoreet, felis eros vehicula leo, at malesuada velit leo quis pede. Cras id dui. Morbi ac felis. Cras non dolor. Cras varius. Vestibulum purus quam, scelerisque ut, mollis sed, nonummy id, metus.';
  break;

  case 'about-1':
  $aboutActive = true;
  $about1Active = true;
  $title = 'About 1';
  $text = 'Morbi ac felis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Sed aliquam, nisi quis porttitor congue, elit erat euismod orci, ac placerat dolor lectus quis orci.
  Pellentesque commodo eros a enim. Cras id dui. Nunc egestas, augue at pellentesque laoreet, felis eros vehicula leo, at malesuada velit leo quis pede. Cras id dui. Morbi ac felis. Cras non dolor. Cras varius. Vestibulum purus quam, scelerisque ut, mollis sed, nonummy id, metus.';
  break;

  case 'about-2':
  $aboutActive = true;
  $about2Active = true;
  $title = 'About 2';
  $text = 'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Sed aliquam, nisi quis porttitor congue, elit erat euismod orci, ac placerat dolor lectus quis orci.
  Pellentesque commodo eros a enim. Morbi ac felis. Cras id dui. Nunc egestas, augue at pellentesque laoreet, felis eros vehicula leo, at malesuada velit leo quis pede. Cras id dui. Morbi ac felis. Cras non dolor. Cras varius. Vestibulum purus quam, scelerisque ut, mollis sed, nonummy id, metus.';
  break;

  case 'about-3':
  $aboutActive = true;
  $about3Active = true;
  $title = 'About 3';
  $text = 'Phasellus ullamcorper ipsum rutrum nunc. Vivamus elementum semper nisi. Praesent vestibulum dapibus nibh. Etiam sollicitudin, ipsum eu pulvinar rutrum, tellus ipsum laoreet sapien, quis venenatis ante odio sit amet eros. Cras risus ipsum, faucibus ut, ullamcorper id, varius ac, leo. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Sed aliquam, nisi quis porttitor congue, elit erat euismod orci, ac placerat dolor lectus quis orci.
  Pellentesque commodo eros a enim. Morbi ac felis. Cras id dui. Nunc egestas, augue at pellentesque laoreet, felis eros vehicula leo, at malesuada velit leo quis pede. Cras id dui. Morbi ac felis. Cras non dolor. Cras varius. Vestibulum purus quam, scelerisque ut, mollis sed, nonummy id, metus.';
  break;

  case 'about-3-1':
  $aboutActive = true;
  $about3Active = true;
  $about31Active = true;
  $title = 'About 3.1';
  $text = 'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos hymenaeos. Suspendisse enim turpis, dictum sed, iaculis a, condimentum nec, nisi. Vivamus quis mi. Suspendisse eu ligula. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Sed aliquam, nisi quis porttitor congue, elit erat euismod orci, ac placerat dolor lectus quis orci.
  Pellentesque commodo eros a enim. Morbi ac felis. Cras id dui. Nunc egestas, augue at pellentesque laoreet, felis eros vehicula leo, at malesuada velit leo quis pede. Cras id dui. Morbi ac felis. Cras non dolor. Cras varius. Vestibulum purus quam, scelerisque ut, mollis sed, nonummy id, metus.';
  break;

  case 'about-3-2':
  $aboutActive = true;
  $about3Active = true;
  $about32Active = true;
  $title = 'About 3.2';
  $text = 'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Sed aliquam, nisi quis porttitor congue, elit erat euismod orci, ac placerat dolor lectus quis orci.
  Pellentesque commodo eros a enim. Morbi ac felis. Cras id dui. Nunc egestas, augue at pellentesque laoreet, felis eros vehicula leo, at malesuada velit leo quis pede. Cras id dui. Morbi ac felis. Cras non dolor. Cras varius. Vestibulum purus quam, scelerisque ut, mollis sed, nonummy id, metus.';
  break;

  case 'agenda':
  $agendaActive = true;
  $title = 'Agenda';
  $text = 'Sed aliquam, nisi quis porttitor congue, elit erat euismod orci, ac placerat dolor lectus quis orci.
  Aliquam eu nunc. Quisque libero metus, condimentum nec, tempor a, commodo mollis, magna. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae;  Pellentesque commodo eros a enim. Morbi ac felis. Cras id dui. Nunc egestas, augue at pellentesque laoreet, felis eros vehicula leo, at malesuada velit leo quis pede. Cras id dui. Morbi ac felis. Cras non dolor. Cras varius. Vestibulum purus quam, scelerisque ut, mollis sed, nonummy id, metus.';
  break;

  case 'news':
  $newsActive = true;
  $title = 'News';
  $text = ' Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Sed aliquam, nisi quis porttitor congue, elit erat euismod orci, ac placerat dolor lectus quis orci.
  Pellentesque commodo eros a enim. Morbi ac felis. Aliquam eu nunc. Quisque libero metus, condimentum nec, tempor a, commodo mollis, magna. Nunc egestas, augue at pellentesque laoreet, felis eros vehicula leo, at malesuada velit leo quis pede. Cras id dui. Morbi ac felis. Cras non dolor. Cras varius. Vestibulum purus quam, scelerisque ut, mollis sed, nonummy id, metus.';
  break;

  case 'contact':
  $contactActive = true;
  $title = 'Contact';
  $text = 'Aliquam eu nunc. Quisque libero metus, condimentum nec, tempor a, commodo mollis, magna. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Sed aliquam, nisi quis porttitor congue, elit erat euismod orci, ac placerat dolor lectus quis orci.
  Pellentesque commodo eros a enim. Morbi ac felis. Cras id dui. Nunc egestas, augue at pellentesque laoreet, felis eros vehicula leo, at malesuada velit leo quis pede. Cras id dui. Morbi ac felis. Cras non dolor. Cras varius. Vestibulum purus quam, scelerisque ut, mollis sed, nonummy id, metus.';
  break;

  default:
  $homeActive = true;
  $title = 'Home';
  $text = 'Cras id dui. Nunc egestas, augue at pellentesque laoreet, felis eros vehicula leo, at malesuada velit leo quis pede.  Cras non dolor. Cras varius. Pellentesque commodo eros a enim. Morbi ac felis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Sed aliquam, nisi quis porttitor congue, elit erat euismod orci, ac placerat dolor lectus quis orci.
  Cras id dui. Morbi ac felis. Vestibulum purus quam, scelerisque ut, mollis sed, nonummy id, metus.';
  break;
}
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
  <link rel="stylesheet" href="css/custom.css">
</head>
<body>
  <!--[if IE]><p class="browserupgrade">You are using an <strong>outdated</strong> browser. Please <a href="http://browsehappy.com/">upgrade your browser</a> to improve your experience.</p><![endif]-->
  <header class="site-header">
    <div class="container clearfix">
      <h1 class="site-title"><a href="?q=home">Company logo</a></h1>
      <nav class="site-nav">
        <input type="checkbox" id="main-menu">
        <label class="menu-toggle" for="main-menu">
          Menu
          <span class="hamburger"><span class="toast-top"></span><span class="meat"></span><span class="toast-bottom"></span></span>
        </label>
        <div class="nav-item">
          <ul>
            <li>
              <a <?php if ($homeActive){print 'class="active" ';}  ?>href="?q=home">Home</a>
            </li>
            <li>
              <input <?php if ($aboutActive){print 'checked ';}  ?>type="checkbox" id="about">
              <label class="open-nav-item<?php if ($aboutActive){print ' active';}  ?>" for="about">About</label>
              <div class="nav-item">
                <label class="back" for="about">Back</label>
                <a <?php if ($aboutActive){print 'class="active" ';}  ?>href="?q=about">About</a>
                <ul>
                  <li>
                    <a <?php if ($about1Active){print 'class="active" ';}  ?>href="?q=about-1">About 1</a>
                  </li>
                  <li>
                    <a <?php if ($about2Active){print 'class="active" ';}  ?>href="?q=about-2">About 2</a>
                  </li>
                  <li>
                    <input <?php if ($about3Active){print 'checked ';}  ?>type="checkbox" id="about-3">
                    <label class="open-nav-item<?php if ($about3Active){print ' active';}  ?>" for="about-3">About 3</label>
                    <div class="nav-item">
                      <label class="back" for="about-3">Back</label>
                      <a  <?php if ($about3Active){print 'class="active" ';}  ?>href="?q=about-3">About 3</a>
                      <ul>
                        <li>
                          <a <?php if ($about31Active){print 'class="active" ';}  ?>href="?q=about-3-1">About 3.1</a>
                        </li>
                        <li>
                          <a <?php if ($about32Active){print 'class="active" ';}  ?>href="?q=about-3-2">About 3.2</a>
                        </li>
                      </ul>
                    </div>
                  </li>
                </ul>
              </div>
            </li>
            <li>
              <a <?php if ($agendaActive){print 'class="active" ';}  ?>href="?q=agenda">Agenda</a>
            </li>
            <li>
              <a <?php if ($newsActive){print 'class="active" ';}  ?>href="?q=news">News</a>
            </li>
            <li>
              <a <?php if ($contactActive){print 'class="active" ';}  ?>href="?q=contact">Contact</a>
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
            <a <?php if ($about1Active){print 'class="active" ';}  ?>href="?q=about-1">About 1</a>
          </li>
          <li>
            <a <?php if ($about2Active){print 'class="active" ';}  ?>href="?q=about-2">About 2</a>
          </li>
          <li>
            <a  <?php if ($about3Active){print 'class="active" ';}  ?>href="?q=about-3">About 3</a>
            <ul>
              <li>
                <a <?php if ($about31Active){print 'class="active" ';}  ?>href="?q=about-3-1">About 3.1</a>
              </li>
              <li>
                <a <?php if ($about32Active){print 'class="active" ';}  ?>href="?q=about-3-2">About 3.2</a>
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
  (function(b,o,i,l,e,r){b.GoogleAnalyticsObject=l;b[l]||(b[l]=
    function(){(b[l].q=b[l].q||[]).push(arguments)});b[l].l=+new Date;
  e=o.createElement(i);r=o.getElementsByTagName(i)[0];
  e.src='https://www.google-analytics.com/analytics.js';
  r.parentNode.insertBefore(e,r)}(window,document,'script','ga'));
  ga('create','UA-XXXXX-X','auto');ga('send','pageview');
  </script>
</body>
</html>

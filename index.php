<!DOCTYPE html>
<html lang="fr">
<head>
  <link rel="icon" type="image/png" href="asset/img/map.png" />
  <meta name="description" content="my maps" />
  <link href='http://fonts.googleapis.com/css?family=Open+Sans:400,300,600' rel='stylesheet' type='text/css'>
  <link href='http://fonts.googleapis.com/css?family=Roboto:400,100,300,500,400italic' rel='stylesheet' type='text/css'>
  <link rel="stylesheet/less" type="text/css" href="asset/css/style.less" />
  <link href="//maxcdn.bootstrapcdn.com/font-awesome/4.2.0/css/font-awesome.min.css" rel="stylesheet">
  <script src="asset/less/less.js" type="text/javascript"></script>
  <title>My Maps</title>
  <link href="//maxcdn.bootstrapcdn.com/font-awesome/4.2.0/css/font-awesome.min.css" rel="stylesheet">
  <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
  <meta charset="utf-8">
</head>
<body>
  <h2>Bienvenue sur My Maps</h2>

  <div id="search">
    <h3>Itineraire</h3>
    <form>
      <span class="mapIcon"><i class="fa fa-map-marker"></i></span>
      <input type="text" class="search" id="start" name="search" placeholder="Depart"/>
      <span class="locate" id="locateStart"><i class="fa fa-location-arrow"></i></span>
      <span class="mapIcon"><i class="fa fa-map-marker"></i></span>
      <input type="text" class="search" id="end" name="search" placeholder="Arrivée"/>
      <span class="locate" id="locateEnd"><i class="fa fa-location-arrow"></i></span>
      <a href="#" id="itinerary" class="btn">Go</a>
    </form>

    <span>____________</span>

    <h3>Recherche</h3>
    <form>
      <span class="mapIcon"><i class="fa fa-map-marker"></i></span>
      <input type="text" class="search" id="place" name="search" placeholder="Recherche"/>
      <a href="#" id="searchBtn" class="btn"><i class="fa fa-search"></i></a>
      <a href="#" id="localize" class="btn"><i class="fa fa-location-arrow"></i></a>
    </form>

  </div>

  <div id="blur"></div>


  <div id="main">
  <span id="bars"><i class="fa fa-bars"></i></span>

   <div id="map">
   </div>

   <div id="fullScreen">
    <a id="new" href="#" title="Plein ecran">
      <span><i class="fa fa-expand" id="fs"></i></span>
    </a>
  </div>
</div>

<script type="text/javascript" src="asset/js/main.js"></script>
<script type="text/javascript" src="asset/js/slide.js"></script>
</body>
</html>
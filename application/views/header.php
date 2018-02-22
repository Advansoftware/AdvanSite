<!DOCTYPE html>
<html lang="en">

  <head>

    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="description" content="">
    <meta name="author" content="">

    <title><?php echo $titulo;?></title>

    <!-- Bootstrap core CSS -->
    <?= link_tag('content/css/bootstrap.css') ?>
    <?= link_tag('content/css/normalize.css') ?>
    <?= link_tag('content/css/font-awesome.css') ?>
    <?= link_tag('content/css/glyphicons.css') ?>
    <?= link_tag("https://fonts.googleapis.com/css?family=Montserrat:400,700");?>
    <?= link_tag("https://fonts.googleapis.com/css?family=Kaushan+Script");?>
    <?= link_tag("https://fonts.googleapis.com/css?family=Droid+Serif:400,700,400italic,700italic");?>
    <?= link_tag("https://fonts.googleapis.com/css?family=Roboto+Slab:400,100,300,700");?>
    <?= link_tag("content/css/agency.min.css");?>
  </head>

  <body id="page-top">

    <!-- Navigation -->
    <nav class="navbar navbar-expand-lg navbar-dark fixed-top" id="mainNav">
      <div class="container">
        <a href="#page-top"  class="js-scroll-trigger"><img src="content/img/logo.png"  class="navbar-brand" title="Inicio" alt="Inicio"></a>
        <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
          Menu
          <i class="fa fa-bars"></i>
        </button>
        <div class="collapse navbar-collapse" id="navbarResponsive">
          <ul class="navbar-nav text-uppercase ml-auto">
            <li class="nav-item">
              <a class="nav-link js-scroll-trigger" href="http://advansoftware.servebeer.com:8096">Filmes</a>
            </li>
            <li class="nav-item">
              <a class="nav-link js-scroll-trigger" href="#services">Serviços</a>
            </li>
            <li class="nav-item">
              <a class="nav-link js-scroll-trigger" href="#portfolio">Portfolio</a>
            </li>
            <li class="nav-item">
              <a class="nav-link js-scroll-trigger" href="#about">Sobre</a>
            </li>
            <li class="nav-item">
              <a class="nav-link js-scroll-trigger" href="#team">Equipe</a>
            </li>
            <li class="nav-item">
              <a class="nav-link js-scroll-trigger" href="#contact">Contato</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <!-- Header -->
    <header class="masthead">
      <div class="container">
        <div class="intro-text">
          <div class="intro-heading text-uppercase"><?php echo $bemvindo;?></div>
          <div class="intro-lead-in"><?php echo $frase;?></div>
          <a class="btn btn-primary btn-xl text-uppercase js-scroll-trigger" href="#services">Mostrar Mais</a>
        </div>
      </div>
    </header>
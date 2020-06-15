<!doctype html>
<html>

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="initial-scale=1, maximum-scale=1">
    <title>n o e n a s</title>
    <link rel='stylesheet' href='bootstrap/css/bootstrap.min.css' type='text/css' />
    <link rel='stylesheet' href='appmobil.css?<?php echo rand(10, 99); ?>' type='text/css' />
    <link rel="icon" href="favicon.ico" />
    <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet">
    <style>
        body,
        html,
        * {
            font-family: "pxn" !important;
        }
        
        body {
            background: #1a1a1a !important;
        }
        
        .miidiomas {
            text-align: right;
            padding: 0px;
            display: inline;
            margin: 0px;
        }
        
        .miidiomas>li {
            display: inline-block;
        }
        
        .ido {
            text-transform: uppercase;
            margin: 0px;
            padding: 0px;
        }
        
        .ido>a {
            background: #0d0d0d;
            margin: 0px !important;
            color: white;
            padding: 2px 10px !important;
            font-weight: 100;
            border: solid 2px white;
            border-radius: 20px;
            font-size: 8px;
        }
        
        .ido>.active {
            background: white;
            color: #0d0d0d;
            font-weight: 600;
        }
        
        .ba-mmap {
            z-index: 200;
        }
        
        .st3 {
            cursor: pointer;
            fill: #fff;
        }
    </style>
</head>



<body class="home page-template page-template-page-templates 
            page-template-front page-template-page-templatesfront-php 
            page page-id-5 wp-custom-logo offcanvas">
    <div class="off-canvas-wrapper">
        <div class="off-canvas-wrapper-inner">
            <div class="off-canvas-content">




                <header class="ba-header" style="width: 100%;">
                    <div class="row column">
                        <div class="ba-header-bar">
                            <a href="#home" class="ba-extra-text ba-explore-dark" style="opacity: 0;width: 0px;" data-for-people data-anchor="home"></a>
                            <a class="ba-logo" href="#home" rel="home" title="Noenas">
                                <img src="noenaslogo.svg" alt="Noenas" style="height:22px" />
                            </a>
                            <ul class="miidiomas">
                                <li class="nav-item ido mr-2">
                                    <a class="nav-link smoth-scroll" href="../">ENGLISH</a>
                                </li>
                                <li class="nav-item ido">
                                    <a class="nav-link smoth-scroll active" href="#">FRANÇAIS</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </header>

                <center><br><br><br><br>
                    <img src="aniani.gif" />
                </center><br><br>

                <center>
                    <h2 class="ba-section-title" data-title style="font-size: 22px; margin:0px 30px;">
                        INVESTING INTO<br> NON-ECONOMIC<br> CONSEQUENCES OF<br> ECONOMIC ACTIONS
                    </h2><br><br>
                    <p style="font-size: 15px; margin:0px 30px;">We are a corporation with a number of subsidiary<br>companies under its control, which<br>are diversified in different industries. We carry out all the equity financing activities to meet the equity financing needs of our companies</p><br>

                    <p style="font-size: 15px; margin:0px 30px;">We only focus on Ethical Finance principles such as Transparency, Sobriety, Accountability and Efficiency to help create a society that protect and promotes quality of life and human dignity for all</p>
                </center><br><br><br><br>




                <ul class="ba-projects-list">
                    <li class="ba-project" data-aos="fade-right" data-aos-offset="200" data-aos-delay="50" data-aos-easing="ease-in-sine">
                        <img class="ba-project__img" src="noenasmenu.svg">
                        <span class="ba-extra-t ext">
                                            TEXTILES
                                        </span>
                        <span class="ba-project__line" data-line></span>
                        <span class="ba-project__line-h" data-line-h></span>
                    </li>
                    <li class="ba-project" data-aos="fade-right" data-aos-offset="200" data-aos-delay="100" data-aos-easing="ease-in-sine">
                        <img class="ba-project__img" src="noenasmenu.svg">
                        <span class="ba-extra-text">
                                            TECH
                                        </span>
                        <span class="ba-project__line" data-line></span>
                        <span class="ba-project__line-h" data-line-h></span>
                    </li>
                    <li class="ba-project" data-aos="fade-right" data-aos-offset="200" data-aos-delay="150" data-aos-easing="ease-in-sine">
                        <img class="ba-project__img" src="noenasmenu.svg">
                        <span class="ba-extra-text">
                                            FOOD
                                        </span>
                        <span class="ba-project__line" data-line></span>
                        <span class="ba-project__line-h" data-line-h></span>
                    </li>
                    <li class="ba-project" data-aos="fade-right" data-aos-offset="200" data-aos-delay="200" data-aos-easing="ease-in-sine">
                        <img class="ba-project__img" src="noenasmenu.svg">
                        <span class="ba-extra-text">
                                            REAL ESTATE
                                        </span>
                        <span class="ba-project__line" data-line></span>
                        <span class="ba-project__line-h" data-line-h></span>
                    </li>


                </ul><br><br><br><br><br><br>



                <div class="ba-section-body">
                    <div class="row column">

                        <div class="ba-offcanvas-contacts text-right" style="float: right;">
                            <p class="mb-3" style="font-weight: 700;font-size: 16px;">Siège social</p>
                            <p style="margin-bottom: -6px;">20 des Souers Grises, Montreal,</p>
                            <p class="mb-3">Quebec, Canada, H3C 5M1</p>
                            <p class="mb-3">
                                <a href="tel:+1 514 962 0493">+1 514 962 0493</a>
                            </p>
                            <p>
                                <a href="mailto:info@noenas.com">info@noenas.com</a>
                            </p><br>


                        </div>

                    </div>

                </div>

                <div onClick="irMapa(1);">
                    <?php require_once('mapa2.php'); ?>
                </div>






            </div>
        </div>
    </div>
    <script type='text/javascript' src='jquery.min.js'></script>
    <script type='text/javascript' src='popper.min.js'></script>
    <script type='text/javascript' src='bootstrap/js/bootstrap.min.js'></script>
    <script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>

    <script>

        AOS.init();

        function irMapa() {
            var url = "https://www.google.com/maps/place/20+Rue+des+Soeurs+Grises,+Montr%C3%A9al,+QC+H3C+5M1,+Canad%C3%A1/@45.4984018,-73.5529588,17z/data=!4m5!3m4!1s0x4cc91af5e668fe83:0x80034759d1b5f82d!8m2!3d45.4981837!4d-73.5535274";
            window.open(url, "_blank");
        }
     
    </script>

</body>

</html>
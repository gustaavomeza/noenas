<!doctype html>
<html>

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="initial-scale=1, maximum-scale=1">
    <title>noenas</title>
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


.btng {
    background: #313131;
    margin: 0px !important;
    color: white;
    padding: 2px 10px !important;
    font-weight: 100;
    border: solid 2px white;
    border-radius: 20px;
    font-size: 13px;
}


.modal-content {
    position: relative;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    width: 100%;
    pointer-events: auto;
    background-color: #313131;
    background-clip: padding-box;
    border: 1px solid rgba(0,0,0,.2);
    border-radius: .3rem;
    outline: 0;
}

.modal-header {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: start;
    -ms-flex-align: start;
    align-items: flex-start;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    padding: 1rem;
    border-bottom: 1px solid #000000;
    border-top-left-radius: .3rem;
    border-top-right-radius: .3rem;
}
.modal-footer {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: end;
    -ms-flex-pack: end;
    justify-content: flex-end;
    padding: 1rem;
    border-top: 1px solid #000000;
}


#textitle{
    line-height: 20px;
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
                                    <a class="nav-link smoth-scroll active" href="#">ENGLISH</a>
                                </li>
                                <li class="nav-item ido">
                                    <a class="nav-link smoth-scroll" href="fr">FRANÇAIS</a>
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
                    <p style="font-size: 15px; margin:0px 30px;">We are a multi-subsidiary company with diversified participation in different business sectors. We execute all the relevant financing activities that our companies need.</p><br>

                    <p style="font-size: 15px; margin:0px 30px;">Our guiding principles are based on Ethical Finance principles such as transparency, accountability and efficiency, in order to help create a society that protects and promotes the quality of life and human dignity for all.</p>
                </center><br><br><br><br>




                <ul class="ba-projects-list">
                    <li class="ba-project" data-aos="fade-right" data-aos-offset="200" data-aos-delay="50" data-aos-easing="ease-in-sine" onclick="abremodal(1)">
                        <img class="ba-project__img" src="noenasmenu.svg">
                        <span class="ba-extra-t ext">
                                            TEXTILE
                                        </span>
                        <span class="ba-project__line" data-line></span>
                        <span class="ba-project__line-h" data-line-h></span>
                    </li>

                    <li class="ba-project" data-aos="fade-right" data-aos-offset="200" data-aos-delay="150" data-aos-easing="ease-in-sine" onclick="abremodal(3)">
                        <img class="ba-project__img" src="noenasmenu.svg">
                        <span class="ba-extra-text">
                                            FOOD
                                        </span>
                        <span class="ba-project__line" data-line></span>
                        <span class="ba-project__line-h" data-line-h></span>
                    </li>


                    <li class="ba-project" data-aos="fade-right" data-aos-offset="200" data-aos-delay="100" data-aos-easing="ease-in-sine" onclick="abremodal(2)">
                        <img class="ba-project__img" src="noenasmenu.svg">
                        <span class="ba-extra-text">
                                          TECHNOLOGY
                                        </span>
                        <span class="ba-project__line" data-line></span>
                        <span class="ba-project__line-h" data-line-h></span>
                    </li>

                    <li class="ba-project" data-aos="fade-right" data-aos-offset="200" data-aos-delay="200" data-aos-easing="ease-in-sine" onclick="abremodal(4)">
                        <img class="ba-project__img" src="noenasmenu.svg">
                        <span class="ba-extra-text">
                                            REAL ESTATE
                                        </span>
                        <span class="ba-project__line" data-line></span>
                        <span class="ba-project__line-h" data-line-h></span>
                    </li>

                </ul><br><br><br><br><br><br>

                
                
                
                <!-- Modal -->
                <div class="modal fade m-5" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                  <div class="modal-dialog" role="document">
                    <div class="modal-content">
                      <div class="modal-header">
                        <h5 class="modal-title" id="modtitle">?</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                          <span aria-hidden="true">&times;</span>
                        </button>
                      </div>
                      <div class="modal-body">
                        <h3 id="textitle">. . .</h3>
                      </div>
                      <div class="modal-footer">
                        <button type="button" class="btn btng" data-dismiss="modal">Close</button>
                      </div>
                    </div>
                  </div>
                </div>
                






                <div class="ba-section-body">
                    <div class="row column">

                        <div class="ba-offcanvas-contacts text-right" style="float: right;">
                            <p class="mb-3" style="font-weight: 700;font-size: 16px;">Headquarters</p>
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


        function abremodal(num){

            if(num==1){
                $("#modtitle").html("TEXTILE");
                $("#textitle").html("A full-service provider of custom uniforms and apparel for corporate and law enforcement agencies.");
            }
            if(num==2){
                $("#modtitle").html("TECHNOLOGY");
                $("#textitle").html("An online end-to-end platform that generates data intelligence which predicts, identifies and addresses pain points and root causes of production and quality failures.");
            }

            if(num==3){
                $("#modtitle").html("FOOD");
                $("#textitle").html("A grower, producer and supplier specialized in a wide range of high-quality fresh produce.");
            }
            if(num==4){
                $("#modtitle").html("REAL ESTATE");
                $("#textitle").html("A developer, owner and operator of worldwide prime real estate locations.");
            }

            $("#exampleModal").modal("show");

        }

        AOS.init();

        function irMapa() {
            var url = "https://www.google.com/maps/place/20+Rue+des+Soeurs+Grises,+Montr%C3%A9al,+QC+H3C+5M1,+Canad%C3%A1/@45.4984018,-73.5529588,17z/data=!4m5!3m4!1s0x4cc91af5e668fe83:0x80034759d1b5f82d!8m2!3d45.4981837!4d-73.5535274";
            window.open(url, "_blank");
        }
     
    </script>

</body>

</html>
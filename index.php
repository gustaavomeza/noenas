<!doctype html>
<html>

<head>
    <meta charset="UTF-8">
    <title>noenas</title>

    <link rel="stylesheet" href="assets/animate.compat.css">
    <link rel='stylesheet' href='app.css?<?php echo rand(10, 99); ?>' type='text/css' />
    <link rel="icon" href="favicon.ico" />

    <style>







#containerr {
  margin: 20px;
  width: 400px;
  height: 8px;
  position: relative;
}







        body,
        html,
        * {
            font-family: "pxn" !important;
        }
        
        .miidiomas {
            padding: 0px;
            display: inline;
            margin: 0px;
        }
        
        .miidiomas>li {
            display: inline-block;
        }

        #ex5 {
            height: 25px;
            position: relative;
            top: 3.8px;
            left: -195px;
        }
        
        #ex4 {
            height: 25px;
            position: relative;
            top: -3.3px;
            left: -152.5px;
        }

        #ex5 path {
            fill: none;
            stroke: #002dff;
            stroke-width: 6px;
            stroke-dasharray: 720;
            stroke-dashoffset: 720;
            transition: stroke-dashoffset 1s linear;
        }

        #ex4 path {
            fill: none;
            stroke: #00cf00;
            stroke-width: 6px;
            stroke-dasharray: 720;
            stroke-dashoffset: 720;
            transition: stroke-dashoffset 1s linear;
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
            padding: 3px 9px 2px 9px !important;
            font-weight: 100;
            border: solid 2px white;
            border-radius: 20px;
            font-size: 10px;
        }
        
        .ido>.active {
            background: white;
            color: #0d0d0d;
            font-weight: 600;
        }
        
        .ba-mmap {
            /*  z-index: 200; */
        }
        
        .st3 {
            cursor: pointer;
            fill: #fff;
        }
        
        #contact-inner {
            overflow: hidden;
        }
        
        #contact-inner>.ba-section-title-line-wrap {
            height: 100% !important;
            overflow: hidden;
        }
        
        #contact-inner>.ba-section-title-line-wrap>div {
            height: 100% !important;
            overflow: hidden;
        }
        
        .nocolor {
            color: transparent !important;
            height: 0px !important;
            margin: 0px !important;
        }
    </style>



    <script>
        if (
            /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(
                navigator.userAgent
            ) ||
            /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(
                navigator.userAgent.substr(0, 4)
            )
        ) {
            var url = "mobil.php";
            window.location = url;
        }
    </script>



</head>









<body class="home page-template page-template-page-templates 
            page-template-front page-template-page-templatesfront-php 
            page page-id-5 wp-custom-logo offcanvas">
    <div class="off-canvas-wrapper">
        <div class="off-canvas-wrapper-inner" data-off-canvas-wrapper>
            <div class="off-canvas-content" data-off-canvas-content data-content-scroll="false">




                <header class="ba-header">
                    <div class="row column">
                        <div class="ba-header-bar">
                            <a href="#home" class="ba-extra-text ba-explore-dark" style="opacity: 0;width: 0px;" data-for-people data-anchor="home"></a>
                            <a class="ba-logo" href="#home" rel="home" title="Noenas">
                                <img src="noenaslogo.svg" alt="Noenas" style="height:26px" />



<svg version="1.1" id="ex4" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 viewBox="0 0 76.3 51" style="enable-background:new 0 0 76.3 51;" xml:space="preserve">
<path id="path2" d="M12,42c-2.2-3.7-2.2-8.5-2.2-9.4c0-12.8,10.7-22.6,23-22.9C39.8,9.7,47,13.4,51.3,18l15.2-8.2L59.5,9l2,3.8"/>
</svg>
<svg version="1.1" id="ex5" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 viewBox="0 0 76.3 51" style="enable-background:new 0 0 76.3 51;" xml:space="preserve">
<path id="path2" d="M64.3,9c2.2,3.7,2.2,8.5,2.2,9.4c0,12.8-10.7,22.6-23,22.9C36.5,41.3,29.3,37.7,25,33L9.8,41.2l6.9,0.8l-2-3.8"
	/>
</svg>




                                
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






                <div class="ba-loader-shades" data-loader-shades></div>
                <div class="ba-loader" data-loader>

                    <center>
                      
                        <img src="assets/img/pred.gif" style="width: 100%;max-width: 80px;margin-top:18%;" />

                
                    
                        <div style="position: absolute;width: 100%;bottom: 150px;">
                            <div id="containerr">
                                <span style="position: absolute;left: -26px;top: 1px;">0</span>
                                <span style="position: absolute;left: 0%;top: 1px;" id="contprogres">0%</span>
                            </div>
                        </div>










                    
                    </center>
                  
                
                </div>

                <main id="fullpage">

                    <section class="section fp-noscroll" data-anchor="home" data-section="home">
                        <div class="ba-section ba-section--intro">
                            <div class="ba-section-body">
                                <div class="row">
                                    <div class="column small-12 hide-for-large">
                                        <div class="ba-ghost-shape"></div>
                                    </div>
                                    <div class="column medium-8 large-4 small-12 position-relative" data-box>
                                        <div data-box-content>
                                            <h2 class="ba-section-title" data-title style="font-size: 35px;">
                                                INVESTING INTO<br> NON-ECONOMIC<br> CONSEQUENCES OF<br> ECONOMIC ACTIONS
                                            </h2>
                                            <div data-text>
                                                <p style="font-size: 17px;">We are a multi-subsidiary company with diversified participation in different business sectors. We execute all the relevant financing activities that our companies need.</p>

                                                <p style="font-size: 17px;">Our guiding principles are based on Ethical Finance principles such as transparency, accountability and efficiency, in order to help create a society that protects and promotes the quality of life and human dignity for all.</p>

                                            </div>
                                            <a href="#industries" class="ba-extra-text ba-scroll-link">
                                                <span data-scroll>
                                                    SCROLL
                                                </span>
                                            </a>
                                        </div>
                                        <div class="ba-section-line" data-sline></div>
                                        <!-- /.ba-section -->
                                    </div>
                                </div>

                            </div>
                        </div>
                    </section>








                    <!--  LISTA MENU   -->
                    <section class="section fp-section-industries" data-anchor="industries" data-section="industries">
                        <div class="ba-section ba-section-industries">
                            <div class="ba-section-body">
                                <div class="row">
                                    <div class="column medium-12 large-6 small-12 position-relative" data-box>
                                        <div data-box-content>




                                            <div class="ba-industries-slider show-for-large" data-industries-slider>


                                                <div>
                                                    <h2 class="h1 ba-section-title nocolor" data-title>X_X</h2>
                                                    <div class="ba-section-text" data-text>
                                                        <span style="display: block;height: 150px;"></span>
                                                        <strong style="font-size: 35px;">INDUSTRIES</strong>
                                                        <span style="display: block;height: 325px;"></span>
                                            
                                                    </div>
                                                    <a href="#contact" class="ba-extra-text ba-scroll-link">
                                                        <span data-scroll>
                                                            SCROLL
                                                        </span>
                                                    </a>
                                                </div>

                                                <div>
                                                    <h2 class="h1 ba-section-title nocolor" data-title>X_X</h2>
                                                    <div class="ba-section-text" data-text>
                                                        <span style="display: block;height: 150px;"></span>
                                                        <p style="font-size: 17px;height: 350px;">A full-service provider of custom uniforms and apparel for corporate and law enforcement agencies.</p>
                                                        
                                                    </div>
                                                    <a href="#contact" class="ba-extra-text ba-scroll-link" data-scroll>
                                                        <span data-scroll>
                                                            SCROLL
                                                        </span>
                                                    </a>
                                                </div>


                                                <div>
                                                    <h2 class="h1 ba-section-title nocolor" data-title>X_X</h2>
                                                    <div class="ba-section-text" data-text>
                                                        <span style="display: block;height: 150px;"></span>
                                                        <p style="font-size: 17px;height: 350px;">A grower, producer and supplier specialized in a wide range of high-quality fresh produce.</p>
                                                       
                                                    </div>
                                                    <a href="#contact" class="ba-extra-text ba-scroll-link" data-scroll>
                                                        <span data-scroll>
                                                            SCROLL
                                                        </span>
                                                    </a>
                                                </div>


                                                <div>
                                                    <h2 class="h1 ba-section-title nocolor" data-title>X_X</h2>
                                                    <div class="ba-section-text" data-text>
                                                        <span style="display: block;height: 150px;"></span>
                                                        <p style="font-size: 17px;height: 350px;">An online end-to-end platform that generates data intelligence which predicts, identifies and addresses pain points and root causes of production and quality failures.</p>
                                                   
                                                    </div>
                                                    <a href="#contact" class="ba-extra-text ba-scroll-link" data-scroll>
                                                        <span data-scroll>
                                                            SCROLL
                                                        </span>
                                                    </a>
                                                </div>

                                                <div>
                                                    <h2 class="h1 ba-section-title nocolor" data-title>X_X</h2>
                                                    <div class="ba-section-text" data-text>
                                                        <span style="display: block;height: 150px;"></span>
                                                        <p style="font-size: 17px;height: 350px;">A developer, owner and operator of worldwide prime real estate locations.</p>
                                                   
                                                    </div>
                                                    <a href="#contact" class="ba-extra-text ba-scroll-link" data-scroll>
                                                        <span data-scroll>
                                                            SCROLL
                                                        </span>
                                                    </a>
                                                </div>




                                            </div>



                                        </div>
                                        <div class="ba-section-line" data-sline></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <!--  LISTA MENU 5d5d5d   -->











                    <section class="section fp-section-contact fp-noscroll" data-anchor="contact" data-section="contact" style="height: 305px;">




                        <div class="ba-section ba-section-contact" id="contact-inner" data-title>














                            <div class="offcanvas-menu" data-map="map.svg">






                                <div class="ba-section-body" data-text>
                                    <div class="row column">

                                        <div class="ba-offcanvas-contacts text-right" style="float: right;">
                                            <p class="mb-3" style="font-weight: 700;font-size: 20px;">Headquarters</p>
                                            <p style="font-size: 17px; margin-bottom: -6px;">20 des Souers Grises, Montreal,</p>
                                            <p style="font-size: 17px;" class="mb-3">Quebec, Canada, H3C 5M1</p>
                                            <p style="font-size: 17px;" class="mb-3">
                                                <a href="tel:+1 514 962 0493">+1 514 962 0493</a>
                                            </p>
                                            <p style="font-size: 17px;">
                                                <a href="mailto:info@noenas.com">info@noenas.com</a>
                                            </p>


                                        </div>

                                    </div>

                                </div>




                                <?php require_once('mapa.php'); ?>



                            </div>
                            <div class="ba-contact-slider" data-contact-slider data-scroll-reveal></div>
                            <div class="row" data-scroll-reveal data-scroll-trigger="0.8"></div>
                        </div>
                    </section>


                    <div class="ba-loader-bg" data-loader-bg></div>


                    <div class="ba-industries-bar ba-industries-bar--desk show-for-large">
                        <div class="ba-industries-bar-wrap" data-industries-scroll-wrap>
                            <div class="ba-industries-bar-wrap__fade ba-industries-bar-wrap__fade--top" data-industries-scroll-fade></div>
                            <div data-industries-scroll-list>
                                <ul class="ba-industries-list" data-industries-list>




                                    <li class="ba-project" data-industries-list-item>
                                        <img class="ba-project__img" src="noenasmenu.svg">
                                        <span class="ba-extra-text" data-project-list-title>
                                            TEXTILE
                                        </span>
                                        <span class="ba-project__line" data-line></span>
                                        <span class="ba-project__line-h" data-line-h></span>
                                    </li>


                                    <li class="ba-project" data-industries-list-item>
                                        <img class="ba-project__img" src="noenasmenu.svg">
                                        <span class="ba-extra-text" data-project-list-title>
                                           FOOD
                                        </span>
                                        <span class="ba-project__line" data-line></span>
                                        <span class="ba-project__line-h" data-line-h></span>
                                    </li>

                                    
                                    <li class="ba-project" data-industries-list-item>
                                        <img class="ba-project__img" src="noenasmenu.svg">
                                        <span class="ba-extra-text" data-project-list-title>
                                           TECHNOLOGY
                                        </span>
                                        <span class="ba-project__line" data-line></span>
                                        <span class="ba-project__line-h" data-line-h></span>
                                    </li>
                                    <li class="ba-project" data-industries-list-item>
                                        <img class="ba-project__img" src="noenasmenu.svg">
                                        <span class="ba-extra-text" data-project-list-title>
                                            REAL ESTATE
                                        </span>
                                        <span class="ba-project__line" data-line></span>
                                        <span class="ba-project__line-h" data-line-h></span>
                                    </li>



                                </ul>

                            </div>
                            <div class="ba-industries-bar-wrap__fade ba-industries-bar-wrap__fade--bot" data-industries-scroll-fade></div>
                        </div>
                    </div>
                </main>





                <div class="ba-section ba-section--shape">
                    <div class="ba-section-body">
                        <div class="row">
                            <div class="column large-6 large-offset-6">
                                <div class="ba-shape" id="container"></div>
                            </div>
                        </div>

                    </div>
                </div>







            </div>
        </div>
    </div>

    <script src="wow.js"></script>
    <script>
        new WOW().init();
    </script>

    <script defer src="three.min.js"></script>
    <script src="TweenMax.min.js"></script>
    <script src="ScrollToPlugin.min.js"></script>
    <script type='text/javascript' src='jquery-2.2.4.min.js'></script>

    <script src="https://cdnjs.cloudflare.com/ajax/libs/progressbar.js/0.6.1/progressbar.min.js" integrity="sha512-7IoDEsIJGxz/gNyJY/0LRtS45wDSvPFXGPuC7Fo4YueWMNOmWKMAllEqo2Im3pgOjeEwsOoieyliRgdkZnY0ow==" crossorigin="anonymous"></script>

    
    <script type='text/javascript' src='ScrollMagic.min.js'></script>
    <script type='text/javascript' src='animation.gsap.js'></script>
    <script type='text/javascript' src='thickbox.js?<?php echo rand(10, 99); ?>'></script>






    <script>
        function irMapa() {
            var url = "https://www.google.com/maps/place/20+Rue+des+Soeurs+Grises,+Montr%C3%A9al,+QC+H3C+5M1,+Canad%C3%A1/@45.4984018,-73.5529588,17z/data=!4m5!3m4!1s0x4cc91af5e668fe83:0x80034759d1b5f82d!8m2!3d45.4981837!4d-73.5535274";
            window.open(url, "_blank");
        }

        var THREE = document.createElement("script");
        var app = document.createElement("script");
        TweenMax.to('[data-loader-logo]', 0, {
            opacity: 1,
            onComplete: function() {

                THREE.src = "three.min.js";
                app.src = "app.js?<?php echo rand(10, 99); ?>";
                document.body.appendChild(app);

            }
        })


        
        $(function() {
            $('.ba-logo').hover(
                function() {
                    $("path").css('stroke-dashoffset', '0');
                },
                function() {
                    $("path").css('stroke-dashoffset', '720');
                }
            );
        });





        
var bar = new ProgressBar.Line(containerr, {
  strokeWidth: 0.3,
  easing: 'easeInOut',
  duration: 5000,
  color: '#fff',
  trailColor: '#000',
  trailWidth: 1,
  svgStyle: {width: '100%', height: '100%'},
  text: {
    style: {
      // Text color.
      // Default: same as stroke color (options.color)
      color: '#999',
      position: 'absolute',
      right: '0',
      top: '30px',
      padding: 0,
      margin: 0,
      transform: null
    },
    autoStyleContainer: false
  },
  from: {color: '#FFEA82'},
  to: {color: '#ED6A5A'},
  step: (state, bar) => {
    var pro = Math.round(bar.value() * 100);
    var oro = Math.round(bar.value() * 100 + 4) + '%';
    document.getElementById("contprogres").style.left=oro;
    $("#contprogres").html(pro);
  }
});
bar.animate(1.0);







    </script>
</body>

</html>
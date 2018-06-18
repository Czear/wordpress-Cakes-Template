<!DOCTYPE html>
<head>
    <title>Project</title>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="<?php echo get_bloginfo('template_directory'); ?>/style.css">
</head>
<html>
    <body>
        <nav id="mainNavigation">
            <ul>
                <li>Aktualności</li>
                <li>Oferta</li>
                    <li id="navLogo">
                        <img src="<?php echo get_bloginfo('template_directory'); ?>/assets/images/logo.png" alt="Logo">
                    </li>
                <li>Galeria</li>
                <li>Lokale</li>
                <li>Kontakt</li>
            </ul>
        </nav>
            <header>
                <img src="<?php echo get_bloginfo('template_directory'); ?>/assets/images/main_photo.png" alt="main photo">
                <div class="teeths upTeeths"></div>
            </header>
        <main>
            <section id="news">
                <div class="sectionContent">
                    <div id="newsHeading">
                        <h2>Co nowego?</h2>
                        <h4>Aktualności</h4>
                        <img src="<?php echo get_bloginfo('template_directory'); ?>/assets/images/italian_flat_flag.png" alt="italian Flag">
                    </div>

                    <div id="newsContent">
                        <img id="newsSidePhoto" src="<?php echo get_bloginfo('template_directory'); ?>/assets/images/news_photo.png" alt="side photo">
                        <article id="newsArticle">
                            
                        </article>
                    </div>  
                    <footer id="newsPagination">
                                <div id="newsPaginationStartingPage">1</div>
                                <div>2</div>
                                <div>3</div>
                    </footer> 
                </div>                    
            </section>

            <section id="offer">
                <div class="teeths downTeeths"></div>
                    <div id="firstChoiceMenu" class="sectionContent">
                        <div id="offerHeading">
                            <h2>Nasza</h2>
                            <h4>Oferta</h4>
                            <img src="<?php echo get_bloginfo('template_directory'); ?>/assets/images/italian_flat_flag.png" alt="italian Flag">
                        </div>
                    <div id="offerContent">
                        <figure id="pieIcon">
                            <img src="<?php echo get_bloginfo('template_directory') . "/assets/images/pie_ico.png"; ?>" alt="pie icon">
                            <h6>CIASTA</h6>
                        </figure>
                        <figure id="cakeIcon">
                            <img src="<?php echo get_bloginfo('template_directory') . "/assets/images/cake_ico.png"; ?>" alt="cake icon">
                            <h6>TORTY</h6>
                        </figure>
                        <figure id="cookieIcon">
                            <img src="<?php echo get_bloginfo('template_directory') . "/assets/images/cookie_ico.png"; ?>" alt="cookie icon">  
                            <h6>CIASTKA</h6>
                        </figure>
                        <figure id="icecreamIcon">
                            <img src="<?php echo get_bloginfo('template_directory') . "/assets/images/icecream_ico.png"; ?>" alt="icecream icon">
                            <h6>LODY</h6>
                        </figure>
                        <footer>
                            Smacznego!
                        </footer>
                    </div>
                </div>
                <div id="secondChoiceMenu" class="sectionContent">
                        <div id="offerHeading">
                            <h2>Ciasta</h2>
                            <img src="<?php echo get_bloginfo('template_directory'); ?>/assets/images/italian_flat_flag.png" alt="italian Flag">
                        </div>
                    <div id="secondOfferContent">
                        <div id="secondOfferContentContainer">
                            <div class='singleProduct'>
                                    <img src="<?php echo get_bloginfo('template_directory') . "/assets/images/cakes/cake_0.png"?>" alt="cake">
                                    <div>
                                        <h6>Name</h6>
                                        <article>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed d copy 3m</article>
                                        <p>Cena: 23zl/ kg</p>
                                    </div>
                            </div>
                            <div class='singleProduct'>
                                    <img src="<?php echo get_bloginfo('template_directory') . "/assets/images/cakes/cake_1.png"?>" alt="cake">
                                    <div>
                                        <h6>Name</h6>
                                        <article>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed d copy 3</article>
                                        <p>Cena: 23zl/ kg</p>
                                    </div>
                            </div>
                            <div class='singleProduct'>
                                    <img src="<?php echo get_bloginfo('template_directory') . "/assets/images/cakes/cake_2.png"?>" alt="cake">
                                    <div>
                                        <h6>Name</h6>
                                        <article>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed d copy 3</article>
                                        <p>Cena: 23zl/ kg</p>
                                    </div>
                            </div>
                            <div class='singleProduct'>
                                    <img src="<?php echo get_bloginfo('template_directory') . "/assets/images/cakes/cake_3.png"?>" alt="cake">
                                    <div>
                                        <h6>Name</h6>
                                        <article>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed d copy 3</article>
                                        <p>Cena: 23zl/ kg</p>
                                    </div>
                            </div>
                            <div class='singleProduct'>
                                    <img src="<?php echo get_bloginfo('template_directory') . "/assets/images/cakes/cake_4.png"?>" alt="cake">
                                    <div>
                                        <h6>Name</h6>
                                        <article>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed d copy 3</article>
                                        <p>Cena: 23zl/ kg</p>
                                    </div>
                            </div>
                            <div class='singleProduct'>
                                    <img src="<?php echo get_bloginfo('template_directory') . "/assets/images/cakes/cake_5.png"?>" alt="cake">
                                    <div>
                                        <h6>Name</h6>
                                        <article>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed d copy 3</article>
                                        <p>Cena: 23zl/ kg</p>
                                    </div>
                            </div>
                    
                        </div>
                        <footer>
                            <div class="active">1</div>
                            <div>2</div>
                            <div>3</div>
                        </footer>
                    </div>
                </div>
            </section>
        <div class="teeths upTeeths galeryTeeths"></div>
            <section id="galery">
                <div class="sectionContent">
                    <div id="galeryHeading">
                        <h2>Cukiernia</h2>
                        <h4>Galeria</h4>
                        <img src="<?php echo get_bloginfo('template_directory'); ?>/assets/images/italian_flat_flag.png" alt="italian Flag">
                    </div>
                    <nav id="galeryNavigation">
                        <ul>
                            <li class="activeNav">Lody</li>
                            <li>Ciasta</li>
                            <li>Desery</li>
                        </ul>
                    </nav>
                    <div id="galeryImages">
                        <div class="imagesBunch">
                            <img src="<?php echo get_bloginfo('template_directory'); ?>/assets/images/iceCream_galert_0.png" alt="icecream">
                            <img src="<?php echo get_bloginfo('template_directory'); ?>/assets/images/iceCream_galert_1.png" alt="icecream">
                            <img src="<?php echo get_bloginfo('template_directory'); ?>/assets/images/iceCream_galert_2.png" alt="icecream">
                            <img src="<?php echo get_bloginfo('template_directory'); ?>/assets/images/iceCream_galert_3.png" alt="icecream">
                        </div>
                        <div class="imagesBunch">
                            <img src="<?php echo get_bloginfo('template_directory'); ?>/assets/images/iceCream_galert_0.png" alt="icecream">
                            <img src="<?php echo get_bloginfo('template_directory'); ?>/assets/images/iceCream_galert_1.png" alt="icecream">
                            <img src="<?php echo get_bloginfo('template_directory'); ?>/assets/images/iceCream_galert_2.png" alt="icecream">
                            <img src="<?php echo get_bloginfo('template_directory'); ?>/assets/images/iceCream_galert_3.png" alt="icecream">
                        </div>
                        <div class="imagesBunch">
                            <img src="<?php echo get_bloginfo('template_directory'); ?>/assets/images/iceCream_galert_0.png" alt="icecream">
                            <img src="<?php echo get_bloginfo('template_directory'); ?>/assets/images/iceCream_galert_1.png" alt="icecream">
                            <img src="<?php echo get_bloginfo('template_directory'); ?>/assets/images/iceCream_galert_2.png" alt="icecream">
                            <img src="<?php echo get_bloginfo('template_directory'); ?>/assets/images/iceCream_galert_3.png" alt="icecream">
                        </div>
                    </div>
                    <footer id="galeryPagination">
                                <div id="galeryPaginationStartingPage">1</div>
                                <div>2</div>
                                <div>3</div>
                    </footer> 
                </div>
            </section>
            <section id="localization">
        <div class="teeths downTeeths"></div>
                <div class="sectionContent">
                    <div id="localizationSideContent">
                        <h2>Nasze</h2>
                        <h4>Lokale</h4>
                        <img src="<?php echo get_bloginfo('template_directory'); ?>/assets/images/italian_flat_flag.png" alt="italian Flag">
                        <img id="upperArrow" class="scrollArrow" src="<?php echo get_bloginfo('template_directory'); ?>/assets/images/arrow_up.png" alt="arrow UP">
                            <div id="localizationMainContent"> 
                                <img src="<?php echo get_bloginfo('template_directory'); ?>/assets/images/map.png" alt="map">            
                                        <div id="LocalizationsList">
                                            <div class="listItem">
                                                <div>
                                                    <div class="resteurantLocalization">
                                                        <img src="<?php echo get_bloginfo('template_directory'); ?>/assets/images/shop_ico.png" alt="shop icon">
                                                        <span>Placeholder localization 1</span>
                                                    </div>
                                                    <div class="resteurantContact">
                                                        <img src="<?php echo get_bloginfo('template_directory'); ?>/assets/images/old_phone_ico.png" alt="phone icon">
                                                        <span>Placeholder adress 1</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="listItem">
                                                <div>
                                                    <div class="resteurantLocalization">
                                                        <img src="<?php echo get_bloginfo('template_directory'); ?>/assets/images/shop_ico.png" alt="shop icon">
                                                        <span>Placeholder localization 2</span>
                                                    </div>
                                                    <div class="resteurantContact">
                                                        <img src="<?php echo get_bloginfo('template_directory'); ?>/assets/images/old_phone_ico.png" alt="phone icon">
                                                        <span>Placeholder adress 2</span>
                                                    </div>
                                                </div>
                                            </div> <div class="listItem">
                                                <div>
                                                    <div class="resteurantLocalization">
                                                        <img src="<?php echo get_bloginfo('template_directory'); ?>/assets/images/shop_ico.png" alt="shop icon">
                                                        <span>Placeholder localization 3</span>
                                                    </div>
                                                    <div class="resteurantContact">
                                                        <img src="<?php echo get_bloginfo('template_directory'); ?>/assets/images/old_phone_ico.png" alt="phone icon">
                                                        <span>Placeholder adress 3</span>
                                                    </div>
                                                </div>
                                            </div> <div class="listItem">
                                                <div>
                                                    <div class="resteurantLocalization">
                                                        <img src="<?php echo get_bloginfo('template_directory'); ?>/assets/images/shop_ico.png" alt="shop icon">
                                                        <span>Placeholder localization 4</span>
                                                    </div>
                                                    <div class="resteurantContact">
                                                        <img src="<?php echo get_bloginfo('template_directory'); ?>/assets/images/old_phone_ico.png" alt="phone icon">
                                                        <span>Placeholder adress 4</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="listItem">
                                                <div>
                                                    <div class="resteurantLocalization">
                                                        <img src="<?php echo get_bloginfo('template_directory'); ?>/assets/images/shop_ico.png" alt="shop icon">
                                                        <span>Placeholder localization 5</span>
                                                    </div>
                                                    <div class="resteurantContact">
                                                        <img src="<?php echo get_bloginfo('template_directory'); ?>/assets/images/old_phone_ico.png" alt="phone icon">
                                                        <span>Placeholder adress 5</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="listItem">
                                                <div>
                                                    <div class="resteurantLocalization">
                                                        <img src="<?php echo get_bloginfo('template_directory'); ?>/assets/images/shop_ico.png" alt="shop icon">
                                                        <span>Placeholder localization 6</span>
                                                    </div>
                                                    <div class="resteurantContact">
                                                        <img src="<?php echo get_bloginfo('template_directory'); ?>/assets/images/old_phone_ico.png" alt="phone icon">
                                                        <span>Placeholder adress 6</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="listItem">
                                                <div>
                                                    <div class="resteurantLocalization">
                                                        <img src="<?php echo get_bloginfo('template_directory'); ?>/assets/images/shop_ico.png" alt="shop icon">
                                                        <span>Placeholder localization 7</span>
                                                    </div>
                                                    <div class="resteurantContact">
                                                        <img src="<?php echo get_bloginfo('template_directory'); ?>/assets/images/old_phone_ico.png" alt="phone icon">
                                                        <span>Placeholder adress 7</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                  <img id="lowerArrow" class="scrollArrow" src="<?php echo get_bloginfo('template_directory'); ?>/assets/images/arrow_down.png" alt="arrow Down">
                               </div>
                            </div>
                    </div>
             </div>
            </section>
            <section id="contact">
                <div class="sectionContent">
                    <h3>Napisz do nas!</h3>
                    <p>Telefon <strong>517 101 671</strong></p>
                    <p>Godziny otwarcia <strong>08:00-21:00</strong></p>
                    <p>cukiernia@osterialimoni.pl</p>
                </div>
            </section>
        </main>
        <footer id="mainFooter">
            Created By <strong>Cezary Wakuliński</strong>
        <footer>
            <div id="modal">
                <span id="modalClose">X</span>
                    <div id="modalContent">
                        
                    </div>
            </div>
    </body>
    <script src="<?php echo get_bloginfo('template_directory') .'/script.js'; ?>"></script>
</html>
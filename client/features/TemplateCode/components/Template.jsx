import React from 'react';
import PropTypes from 'prop-types';

const Template = ({}) => (
  <div>
        <div class="wrapper" id="top">
        <div class="comming">
            <h2 class="comming__header"><span class="comming__header-start">our website</span>is coming very soon</h2>
            <br></br>
            <p class="comming__describe">In the meantime,</p>
            <div class="login">
                    <div class="row">
                        <div class="col-md-6">
                            <a class="btn btn--decorated btn-warning login__btn" href="about.html">About</a>
                        </div>
                        <div class="col-md-6">
                            <a class="btn btn--decorated btn-warning login__btn" href="asqill_create-talent.html">Register</a>
                        </div>
                    </div>
            </div>
            <div class="social social--default">
                <ul>
                    <li class="social__item"><a class="social__link" href="#" target="_blank"><i class="social__icon fa fa-twitter"></i></a></li>
                    <li class="social__item"><a class="social__link" href="#" target="_blank"><i class="social__icon fa fa-facebook"></i></a></li>
                    <li class="social__item"><a class="social__link" href="#" target="_blank"><i class="social__icon fa fa-google-plus"></i></a></li>
                    <li class="social__item"><a class="social__link" href="#" target="_blank"><i class="social__icon fa fa-linkedin"></i></a></li>
                    <li class="social__item"><a class="social__link" href="#" target="_blank"><i class="social__icon fa fa-youtube"></i></a></li>
                    <li class="social__item"><a class="social__link" href="#" target="_blank"><i class="social__icon fa fa-instagram"></i></a></li>
                </ul>
            </div>
        </div>
        <section class="page-indecator">
            <div class="container">
                <h2 class="heading">Our Team</h2>
                <div class="divider"></div>
            </div>
        </section>
        <div class="row testimonial-area">
                <div class="col-sm-6 col-md-3">
                    <div class="testimonial testimonial--centered">
                        <div class="testimonial__images">
                            <img src={require("../../../images/avatars/1.jpg")} alt=""/>
                        </div>
                        <p class="testimonial__author">Valentino Sorano</p>
                        <p class="testimonial__info">CEO, Themeforest</p>
                        <p class="testimonial__text">“Donec euismod turpis id ullamcorper lobortis. Maecenas faucibus ipsum sem, sed consequat ante consectetur non. Nam at neque dui. Integer id risus sit amet justo varius semper quis ut enim.”</p>
                    </div>
                    <div class="testimonial testimonial--centered">
                        <div class="testimonial__images">
                            <img src={require("../../../images/avatars/7.jpg")}  alt=""/>
                        </div>
                        <p class="testimonial__author">Sara Wheeler</p>
                        <p class="testimonial__info">CEO, Themeforest</p>
                        <p class="testimonial__text">“Donec molestie odio non magna volutpat, vel tincidunt est feugiat. Ut sollicitudin nisl dictum.”</p>
                    </div>
                </div>
                <div class="col-sm-6 col-md-3">
                    <div class="testimonial testimonial--centered">
                        <div class="testimonial__images">
                            <img src={require("../../../images/avatars/4.jpg")}  alt=""/>
                        </div>
                        <p class="testimonial__author">Valentino Sorano</p>
                        <p class="testimonial__info">CEO, Themeforest</p>
                        <p class="testimonial__text">“Aenean venenatis dolor ligula, id venenatis ligula lobortis et. Pellentesque id dignissim neque, ut dignissim arcu. Donec molestie odio non magna volutpat, vel tincidunt est feugiat.”</p>
                    </div>
                    <div class="testimonial testimonial--centered">
                        <div class="testimonial__images">
                            <img src={require("../../../images/avatars/8.jpg")}  alt=""/>
                        </div>
                        <p class="testimonial__author">Stanley Obrien</p>
                        <p class="testimonial__info">CEO, Themeforest</p>
                        <p class="testimonial__text">“Lorem viverra, augue nec pellen tesque sagittis, quam tortor suscipit elit lectus eget mollis ligula nostra mattis nulla eleifend bulum vitae.”</p>
                    </div>
                </div>
                <div class="col-sm-6 col-md-3">
                    <div class="testimonial testimonial--centered">
                        <div class="testimonial__images">
                            <img src={require("../../../images/avatars/5.jpg")} alt=""/>
                        </div>
                        <p class="testimonial__author">Brian Gilbert</p>
                        <p class="testimonial__info">CEO, Themeforest</p>
                        <p class="testimonial__text">“Dolor ipsum ipsum sit teturu amet mauris ornare dapibus. Morbi pellen dolor tesque vehicula nisi. ”</p>
                    </div>
                    <div class="testimonial testimonial--centered">
                        <div class="testimonial__images">
                            <img src={require("../../../images/avatars/9.jpg")} alt=""/>
                        </div>
                        <p class="testimonial__author">Kitty Jackson</p>
                        <p class="testimonial__info">CEO, Themeforest</p>
                        <p class="testimonial__text">“Donec euismod turpis id ullamcorper lobortis. Maecenas faucibus ipsum sem, sed consequat ante consectetur non. Nam at neque dui. Integer id risus sit amet justo varius semper quis ut enim.”</p>
                    </div>
                </div>
                <div class="col-sm-6 col-md-3">
                    <div class="testimonial testimonial--centered">
                        <div class="testimonial__images">
                            <img src={require("../../../images/avatars/6.jpg")}  alt=""/>
                        </div>
                        <p class="testimonial__author">Richard Brown</p>
                        <p class="testimonial__info">CEO, Themeforest</p>
                        <p class="testimonial__text">“Lorem viverra, augue nec pellen tesque sagittis, quam tortor suscipit elit lectus eget mollis ligula nostra mattis nulla eleifend bulum vitae.”</p>
                    </div>
                    <div class="testimonial testimonial--centered">
                        <div class="testimonial__images">
                            <img src={require("../../../images/avatars/2.jpg")}  alt=""/>
                        </div>
                        <p class="testimonial__author">Tracy Holland</p>
                        <p class="testimonial__info">CEO, Themeforest</p>
                        <p class="testimonial__text">“Donec molestie odio non magna volutpat, vel tincidunt est feugiat. Ut sollicitudin nisl dictum.”</p>
                    </div>
                </div>
            </div>
        <footer class="footer footer--cut footer--light">
            <div class="container">
                <h3 class="heading-info heading-info--mobile">Contact info:</h3>
                <address class="contact-info contact-info--primary">
                    <a href="http://maps.google.com/?q=101 West Street, New York, NY 10014" class="contact-info__item" target="_blank">
                        <i class="fa fa-location-arrow"></i> 101 West Street, New York, NY 12345
                    </a>
                    <a href="tel://1-888-555-5555" class="contact-info__item">
                        <i class="fa fa-mobile"></i> +1-888-555-5555
                    </a>
                    <a class="contact-info__item" href="mailto:info@allec.com,sales@allec.com?subject=Email from website">
                        <i class="fa fa-envelope"></i> info@allec.com / sales@allec.com
                    </a>
                    <a class="contact-info__item" href="skype:allec-support?call">
                        <i class="fa fa-skype"></i> allec-support
                    </a>
                </address>
                <div class="copy">
                    &copy; <a href="index.html">Allec, 2016.</a> All rights reserved. Done by <a href="http://themeforest.net/user/olechka" target="_blank">Congruity Hub</a>
                </div>
            </div>
        </footer>
    </div>
  </div>

);

Template.propTypes = {
};

export default Template;

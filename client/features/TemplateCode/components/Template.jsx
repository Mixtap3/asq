import React from 'react';
import PropTypes from 'prop-types';

const Template = ({}) => (
  <div>
        <div className="wrapper" id="top">
        <div className="comming">
            <h2 className="comming__header"><span className="comming__header-start">our website</span>is coming very soon</h2>
            <br></br>
            <p className="comming__describe">In the meantime,</p>
            <div className="login">
                    <div className="row">
                        <div className="col-md-6">
                            <a className="btn btn--decorated btn-warning login__btn" href="about.html">About</a>
                        </div>
                        <div className="col-md-6">
                            <a className="btn btn--decorated btn-warning login__btn" href="asqill_create-talent.html">Register</a>
                        </div>
                    </div>
            </div>
            <div className="social social--default">
                <ul>
                    <li className="social__item"><a className="social__link" href="#" target="_blank"><i className="social__icon fa fa-twitter"></i></a></li>
                    <li className="social__item"><a className="social__link" href="#" target="_blank"><i className="social__icon fa fa-facebook"></i></a></li>
                    <li className="social__item"><a className="social__link" href="#" target="_blank"><i className="social__icon fa fa-google-plus"></i></a></li>
                    <li className="social__item"><a className="social__link" href="#" target="_blank"><i className="social__icon fa fa-linkedin"></i></a></li>
                    <li className="social__item"><a className="social__link" href="#" target="_blank"><i className="social__icon fa fa-youtube"></i></a></li>
                    <li className="social__item"><a className="social__link" href="#" target="_blank"><i className="social__icon fa fa-instagram"></i></a></li>
                </ul>
            </div>
        </div>
        <section className="page-indecator">
            <div className="container">
                <h2 className="heading">Our Team</h2>
                <div className="divider"></div>
            </div>
        </section>
        <div className="row testimonial-area">
                <div className="col-sm-6 col-md-3">
                    <div className="testimonial testimonial--centered">
                        <div className="testimonial__images">
                            <img src={require("../../../images/avatars/1.jpg")} alt=""/>
                        </div>
                        <p className="testimonial__author">Valentino Sorano</p>
                        <p className="testimonial__info">CEO, Themeforest</p>
                        <p className="testimonial__text">“Donec euismod turpis id ullamcorper lobortis. Maecenas faucibus ipsum sem, sed consequat ante consectetur non. Nam at neque dui. Integer id risus sit amet justo varius semper quis ut enim.”</p>
                    </div>
                    <div className="testimonial testimonial--centered">
                        <div className="testimonial__images">
                            <img src={require("../../../images/avatars/7.jpg")}  alt=""/>
                        </div>
                        <p className="testimonial__author">Sara Wheeler</p>
                        <p className="testimonial__info">CEO, Themeforest</p>
                        <p className="testimonial__text">“Donec molestie odio non magna volutpat, vel tincidunt est feugiat. Ut sollicitudin nisl dictum.”</p>
                    </div>
                </div>
                <div className="col-sm-6 col-md-3">
                    <div className="testimonial testimonial--centered">
                        <div className="testimonial__images">
                            <img src={require("../../../images/avatars/4.jpg")}  alt=""/>
                        </div>
                        <p className="testimonial__author">Valentino Sorano</p>
                        <p className="testimonial__info">CEO, Themeforest</p>
                        <p className="testimonial__text">“Aenean venenatis dolor ligula, id venenatis ligula lobortis et. Pellentesque id dignissim neque, ut dignissim arcu. Donec molestie odio non magna volutpat, vel tincidunt est feugiat.”</p>
                    </div>
                    <div className="testimonial testimonial--centered">
                        <div className="testimonial__images">
                            <img src={require("../../../images/avatars/8.jpg")}  alt=""/>
                        </div>
                        <p className="testimonial__author">Stanley Obrien</p>
                        <p className="testimonial__info">CEO, Themeforest</p>
                        <p className="testimonial__text">“Lorem viverra, augue nec pellen tesque sagittis, quam tortor suscipit elit lectus eget mollis ligula nostra mattis nulla eleifend bulum vitae.”</p>
                    </div>
                </div>
                <div className="col-sm-6 col-md-3">
                    <div className="testimonial testimonial--centered">
                        <div className="testimonial__images">
                            <img src={require("../../../images/avatars/5.jpg")} alt=""/>
                        </div>
                        <p className="testimonial__author">Brian Gilbert</p>
                        <p className="testimonial__info">CEO, Themeforest</p>
                        <p className="testimonial__text">“Dolor ipsum ipsum sit teturu amet mauris ornare dapibus. Morbi pellen dolor tesque vehicula nisi. ”</p>
                    </div>
                    <div className="testimonial testimonial--centered">
                        <div className="testimonial__images">
                            <img src={require("../../../images/avatars/9.jpg")} alt=""/>
                        </div>
                        <p className="testimonial__author">Kitty Jackson</p>
                        <p className="testimonial__info">CEO, Themeforest</p>
                        <p className="testimonial__text">“Donec euismod turpis id ullamcorper lobortis. Maecenas faucibus ipsum sem, sed consequat ante consectetur non. Nam at neque dui. Integer id risus sit amet justo varius semper quis ut enim.”</p>
                    </div>
                </div>
                <div className="col-sm-6 col-md-3">
                    <div className="testimonial testimonial--centered">
                        <div className="testimonial__images">
                            <img src={require("../../../images/avatars/6.jpg")}  alt=""/>
                        </div>
                        <p className="testimonial__author">Richard Brown</p>
                        <p className="testimonial__info">CEO, Themeforest</p>
                        <p className="testimonial__text">“Lorem viverra, augue nec pellen tesque sagittis, quam tortor suscipit elit lectus eget mollis ligula nostra mattis nulla eleifend bulum vitae.”</p>
                    </div>
                    <div className="testimonial testimonial--centered">
                        <div className="testimonial__images">
                            <img src={require("../../../images/avatars/2.jpg")}  alt=""/>
                        </div>
                        <p className="testimonial__author">Tracy Holland</p>
                        <p className="testimonial__info">CEO, Themeforest</p>
                        <p className="testimonial__text">“Donec molestie odio non magna volutpat, vel tincidunt est feugiat. Ut sollicitudin nisl dictum.”</p>
                    </div>
                </div>
            </div>
        <footer className="footer footer--cut footer--light">
            <div className="container">
                <h3 className="heading-info heading-info--mobile">Contact info:</h3>
                <address className="contact-info contact-info--primary">
                    <a href="http://maps.google.com/?q=101 West Street, New York, NY 10014" className="contact-info__item" target="_blank">
                        <i className="fa fa-location-arrow"></i> 101 West Street, New York, NY 12345
                    </a>
                    <a href="tel://1-888-555-5555" className="contact-info__item">
                        <i className="fa fa-mobile"></i> +1-888-555-5555
                    </a>
                    <a className="contact-info__item" href="mailto:info@allec.com,sales@allec.com?subject=Email from website">
                        <i className="fa fa-envelope"></i> info@allec.com / sales@allec.com
                    </a>
                    <a className="contact-info__item" href="skype:allec-support?call">
                        <i className="fa fa-skype"></i> allec-support
                    </a>
                </address>
                <div className="copy">
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

import React from 'react';
import PropTypes from 'prop-types';

const About = ({}) => (
	<div>
        <div className="wrapper" id="top">
          {/* Header section */}
          <header className="header-placement header--light">
            <div className="header-fixed">
              <div className="header-line waypoint" data-animate-down="header-up" data-animate-up="header-down">
                {/* end container */}
              </div>
              <div className="fixed-top header-down">
                <div className="container">
                  {/*  Logo  */}
                  <a className="logo" href="index.html">
                    {/* Remove comments to choose image and add comment to h1 */}
                    {/*<img src="images/logo-full.png" alt="">*/}
                    <svg className="logo__svg" width={32} height={32} xmlns="http://www.w3.org/2000/svg" xmlns:svg="http://www.w3.org/2000/svg">
                      <g>
                        <path className="logo__svg-path" d="m18.8,14c-1.2,-0.2 -2.3,0.1 -3.2,0.6c-0.8,0.5 -1.8,0.2 -2.4,-0.7c-0.4,-0.8 -0.2,-1.8 0.7,-2.3c1.4,-0.7 3,-1.2 4.7,-1.1c-0.2,-0.1 -0.4,-0.2 -0.6,-0.4c-0.8,-0.7 -1.8,-1.3 -3,-1.4c-2.6,-0.3 -5.1,1.5 -5.4,4s1.6,4.9 4.2,5.2c1.2,0.1 2.3,-0.1 3.2,-0.6c0.8,-0.5 1.8,-0.2 2.4,0.7c0.4,0.8 0.2,1.8 -0.7,2.3c-1.3,0.7 -3,1.2 -4.7,1.1c0.2,0.1 0.4,0.2 0.6,0.4c0.8,0.7 1.8,1.3 3,1.4c2.6,0.3 5.1,-1.5 5.4,-4c0.4,-2.4 -1.5,-4.8 -4.2,-5.2zm-2.8,-14c-8.8,0 -16,7.2 -16,16s7.2,16 16,16c8.8,0 16,-7.2 16,-16s-7.2,-16 -16,-16zm10.5,19.7c-0.6,4.5 -4.8,7.5 -9.4,7c-2,-0.3 -3.7,-1.2 -4.9,-2.4c-0.7,-0.7 -0.7,-1.8 0,-2.4c0.3,-0.3 0.7,-0.4 1,-0.5c-4.4,-0.6 -7.6,-4.7 -7.1,-9c0.6,-4.5 4.8,-7.5 9.3,-7c2,0.2 3.7,1.2 5,2.4c0.7,0.7 0.7,1.8 0,2.4c-0.3,0.3 -0.7,0.4 -1,0.5c4.5,0.6 7.7,4.6 7.1,9z" fill="#ffffff">
                        </path></g>
                    </svg>
                    <h1 className="logo__text">asqill</h1>
                  </a>
                  {/* End Logo */}
                  {/* Navigation section */}
                  <nav className="z-nav">
                    {/* Toggle for menu mobile view */}
                    <a href="#" className="z-nav__toggle">
                      <span className="menu-icon" />
                      <span className="menu-text">navigation</span>
                      <div className="menu-head" />
                    </a>
                    <div className="z-nav-inner">
                      <ul className="z-nav__list">
                        <li className="z-nav__item">
                          {/* Subsidiary menu toogle button */}
                          <span className="z-nav__toggle-sub plus"><i className="fa fa-plus" /><i className="fa fa-minus" /></span>
                          <a className="z-nav__link" href="index.html">Home</a>
                        </li>
                        <li className="z-nav__item">
                          {/* Subsidiary menu toogle button */}
                          <span className="z-nav__toggle-sub plus"><i className="fa fa-plus" /><i className="fa fa-minus" /></span>
                          <a className="z-nav__link" href="about.html">About</a>
                        </li>
                        <li className="z-nav__item">
                          {/* Subsidiary menu toogle button */}
                          <span className="z-nav__toggle-sub plus"><i className="fa fa-plus" /><i className="fa fa-minus" /></span>
                          <a className="z-nav__link" href="asqill_create-talent.html">Be a talent</a>
                        </li>
                      </ul>
                    </div>
                    {/* end list menu inner container */}
                    {/* end list menu item */}
                  </nav>
                  {/* end navigation section */}
                </div>
                {/* end container */}
              </div>
              {/* end fixed top block */}
            </div>
          </header>
          {/* end header section */}
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <section className="container">
            <h2 className="block-title">About</h2>
            <div className="col-sm-6">
              <h2 className="heading-cascade"><span className="heading-cascade__step">High Professional Staff &amp;</span> Best Engineers Ever</h2>
              <p className="p-space">Nam auctor dapibus ante vel facilisis. Cras eget adipiscing nisi. Duis aliquet ligula non risus sollicitudin commodo. Donec ullamcorper lacinia turpis at aliquet. Cras consectetur fermentum erat, in placerat ligula pharetra eget. </p>
              <p className="p-null">Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Aliquam dolor nisi, fermentum at vulputate in, aliquam id justo. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nullam et accumsan ante, et consequat neque. Fusce quis molestie eros. </p>
            </div>
            {/* end col */}
            <div className="col-sm-6">
              <img className="about-img" src="images/3.jpg" />
            </div>
            {/* end col */}
          </section></div>
        {/* end about */}
        {/* end row */}
        <div className="staff-container" id="team">
          <section className="container">
            <h2 className="block-title block-title--top-larger">Companies</h2>
            <div className="swiper-container staff-slider">
              <div className="swiper-wrapper">
                {/*Slide*/}
                <div className="swiper-slide">
                  <div className="row">
                    <div className="col-sm-12 col-md-6">
                      <article>
                        <a className="post post--preview-link staff" href="#">
                          <div className="row container1">
                            <div className="one-column col-xs-6 col-md-7 col-lg-6 picChild">
                              <div className="image-container image-container--max image--border-hover pic1">
                                <img src="images/stockLogo1.jpg" alt />
                              </div>
                            </div>
                            {/* end col */}
                            <div className="one-column col-xs-6 col-md-5 col-lg-6">
                              <h3 className="staff__name">Lorem</h3>
                              <p className="post__text">Pellentesque in lacinia quam. Fusce quis nulla tincidunt, interdum magna vitae, viverra est.</p>
                            </div>
                            {/* end col */}
                          </div>
                          {/* end row */}
                        </a>
                      </article>
                      {/* end article */}
                    </div>
                    {/* end col */}
                    <div className="col-sm-12 col-md-6">
                      <article>
                        <a className="post post--preview-link staff" href="#">
                          <div className="row container1">
                            <div className="one-column col-xs-6 col-md-7 col-lg-6 picChild">
                              <div className="image-container image-container--max image--border-hover pic1">
                                <img src="images/stockLogo2.jpg" alt />
                              </div>
                            </div>
                            {/* end col */}
                            <div className="one-column col-xs-6 col-md-5 col-lg-6">
                              <h3 className="staff__name">Tech Company</h3>
                              <p className="post__text"> Sed in lacus adipiscing, dictum elit viverra, ultricies mi. Aliquam quis placerat massa. Mauris at augue erat. </p>
                            </div>
                            {/* end col */}
                          </div>
                          {/* end row */}
                        </a>
                      </article>
                      {/* end article */}
                    </div>
                    {/* end col */}
                    <div className="col-sm-12 col-md-6">
                      <article>
                        <a className="post post--preview-link staff" href="#">
                          <div className="row container1">
                            {/* end col */}
                            <div className="one-column col-xs-6 col-md-7 col-lg-6 picChild">
                              <div className="image-container image-container--max image--border-hover pic1">
                                <img src="images/stockLogo3.jpg" alt />
                              </div>
                            </div>
                            {/* end col */}
                            <div className="one-column col-xs-6 col-md-5 col-lg-6">
                              <h3 className="staff__name">Creative Logos</h3>
                              <p className="post__text">Ut eleifend a erat sed facilisis. Mauris laoreet vitae lorem eget aliquet. Nullam rhoncus nisi quis nulla lobortis consequat. </p>
                            </div>
                          </div>
                          {/* end row */}
                        </a>
                      </article>
                      {/* end article */}
                    </div>
                    {/* end col */}
                    <div className="col-sm-12 col-md-6">
                      <article>
                        <a className="post post--preview-link staff" href="#&quot;">
                          <div className="row container1">
                            <div className="one-column col-xs-6 col-md-7 col-lg-6 picChild">
                              <div className="image-container image-container--max image--border-hover pic1">
                                <img src="images/stockLogo4.jpg" alt />
                              </div>
                            </div>
                            {/* end col */}
                            <div className="one-column col-xs-6 col-md-5 col-lg-6">
                              <h3 className="staff__name">Electronic</h3>
                              <p className="post__text">Cras eget hendrerit nunc. Duis aliquet volutpat ligula, id posuere neque pulvinar et. Donec sodales condimentum condimentum. </p>
                            </div>
                            {/* end col */}
                          </div>
                          {/* end row */}
                        </a>
                      </article>
                      {/* end article */}
                    </div>
                    {/* end col */}
                  </div>
                  {/* end row */}
                </div>
                {/*Slide*/}
              </div></div></section>
          {/* end container */}
          <footer className="footer footer--simple footer--light">
            <div className="container">
              <ul className="navigation navigation--add">
                <li><a href>Sitemap</a></li>
                <li><a href>About</a></li>
                <li><a href>Terms of use</a></li>
                <li><a href>Support</a></li>
                <li><a href>Careers</a></li>
              </ul>
              <div className="copy">
                <svg className="logo__svg" width={32} height={32} xmlns="http://www.w3.org/2000/svg" xmlns:svg="http://www.w3.org/2000/svg">
                  <g>
                    <path className="logo__svg-path" d="m18.8,14c-1.2,-0.2 -2.3,0.1 -3.2,0.6c-0.8,0.5 -1.8,0.2 -2.4,-0.7c-0.4,-0.8 -0.2,-1.8 0.7,-2.3c1.4,-0.7 3,-1.2 4.7,-1.1c-0.2,-0.1 -0.4,-0.2 -0.6,-0.4c-0.8,-0.7 -1.8,-1.3 -3,-1.4c-2.6,-0.3 -5.1,1.5 -5.4,4s1.6,4.9 4.2,5.2c1.2,0.1 2.3,-0.1 3.2,-0.6c0.8,-0.5 1.8,-0.2 2.4,0.7c0.4,0.8 0.2,1.8 -0.7,2.3c-1.3,0.7 -3,1.2 -4.7,1.1c0.2,0.1 0.4,0.2 0.6,0.4c0.8,0.7 1.8,1.3 3,1.4c2.6,0.3 5.1,-1.5 5.4,-4c0.4,-2.4 -1.5,-4.8 -4.2,-5.2zm-2.8,-14c-8.8,0 -16,7.2 -16,16s7.2,16 16,16c8.8,0 16,-7.2 16,-16s-7.2,-16 -16,-16zm10.5,19.7c-0.6,4.5 -4.8,7.5 -9.4,7c-2,-0.3 -3.7,-1.2 -4.9,-2.4c-0.7,-0.7 -0.7,-1.8 0,-2.4c0.3,-0.3 0.7,-0.4 1,-0.5c-4.4,-0.6 -7.6,-4.7 -7.1,-9c0.6,-4.5 4.8,-7.5 9.3,-7c2,0.2 3.7,1.2 5,2.4c0.7,0.7 0.7,1.8 0,2.4c-0.3,0.3 -0.7,0.4 -1,0.5c4.5,0.6 7.7,4.6 7.1,9z" fill="#ffffff">
                    </path></g>
                </svg>
                © asqill, 2016. All rights reserved.
              </div>
            </div>
            {/* end container */}
          </footer>
          {/* end footer section */}
          <div className="top-scroll"><i className="fa fa-angle-up" /></div>
        </div>
      </div>

	);

About.propTypes = {
};

export default About;
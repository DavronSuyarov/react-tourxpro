import React from 'react';
import { Link } from 'react-router-dom';

const Gallery = () => {
  return (
    <>
      <div>
        <div className='breadcrumb breadcrumb-style-one'>
          <div className='container'>
            <div className='col-lg-12 text-center'>
              <h2 className='breadcrumb-title'>Gallery</h2>
              <ul className='d-flex justify-content-center breadcrumb-items'>
                <li className='breadcrumb-item'>
                  <Link to='/'>Home</Link>
                </li>
                {/* <li className='breadcrumb-item active'>Gallery</li> */}
              </ul>
            </div>
          </div>
        </div>
        <div className='gallary-wrapper'>
          <div className='container'>
            <div className='gallary-group pt-80'>
              <div className='gallary-group-header'>
                <h4 className='gallary-group-title'>Tour Gallery</h4>
                <div className='gallary-arrows text-center d-lg-block d-none'>
                  <div
                    className='gallary-button-prev gallary-prev1'
                    tabIndex={0}
                    role='button'
                    aria-label='Previous slide'
                  >
                    <i className='bi bi-chevron-double-left' />
                  </div>
                  <div
                    className='gallary-button-next gallary-next1'
                    tabIndex={0}
                    role='button'
                    aria-label='Next slide'
                  >
                    <i className='bi bi-chevron-double-right' />
                  </div>
                </div>
              </div>
              <div className='row'>
                <div className='swiper gallary-slider'>
                  <div className='swiper-wrapper'>
                    <div className='swiper-slide'>
                      <div className='gallary-item'>
                        <img
                          src='assets/images/gallary/g-sm2.png'
                          alt='Image Gallery'
                        />
                        <a
                          href='assets/images/gallary/g-sm2.png'
                          data-fancybox='gallery'
                          data-caption='Caption Here'
                          className='gallary-item-overlay'
                        >
                          <i className='bi bi-eye' />
                        </a>
                      </div>
                      <div className='gallary-item'>
                        <img
                          src='assets/images/gallary/g-sm1.png'
                          alt='Image Gallery'
                        />
                        <a
                          href='assets/images/gallary/g-sm1.png'
                          data-fancybox='gallery'
                          data-caption='Caption Here'
                          className='gallary-item-overlay'
                        >
                          <i className='bi bi-eye' />
                        </a>
                      </div>
                      <div className='gallary-item'>
                        <img
                          src='assets/images/gallary/g-11.png'
                          alt='Image Gallery'
                        />
                        <a
                          href='assets/images/gallary/g-11.png'
                          data-fancybox='gallery'
                          data-caption='Caption Here'
                          className='gallary-item-overlay'
                        >
                          <i className='bi bi-eye' />
                        </a>
                      </div>
                    </div>
                    <div className='swiper-slide'>
                      <div className='gallary-item'>
                        <img
                          src='assets/images/gallary/g-xl1.png'
                          alt='Image Gallery'
                        />
                        <a
                          className='gallary-item-overlay'
                          data-fancybox='gallery'
                          data-caption='Caption Here'
                          href='assets/images/gallary/g-xl1.png'
                        >
                          <i className='bi bi-eye' />
                        </a>
                      </div>
                      <div className='gallary-item'>
                        <img
                          src='assets/images/gallary/g-12.png'
                          alt='Image Gallery'
                        />
                        <a
                          href='assets/images/gallary/g-12.png'
                          data-fancybox='gallery'
                          data-caption='Caption Here'
                          className='gallary-item-overlay'
                        >
                          <i className='bi bi-eye' />
                        </a>
                      </div>
                    </div>
                    <div className='swiper-slide'>
                      <div className='gallary-item'>
                        <img
                          src='assets/images/gallary/g-xl2.png'
                          alt='Image Gallery'
                        />
                        <a
                          href='assets/images/gallary/g-xl2.png'
                          data-fancybox='gallery'
                          data-caption='Caption Here'
                          className='gallary-item-overlay'
                        >
                          <i className='bi bi-eye' />
                        </a>
                      </div>
                      <div className='gallary-item'>
                        <img
                          src='assets/images/gallary/g-13.png'
                          alt='Image Gallery'
                        />
                        <a
                          href='assets/images/gallary/g-13.png'
                          data-fancybox='gallery'
                          data-caption='Caption Here'
                          className='gallary-item-overlay'
                        >
                          <i className='bi bi-eye' />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='gallary-group pt-80'>
              <div className='gallary-group-header'>
                <h4 className='gallary-group-title'>Tour Guide Gallery</h4>
                <div className='gallary-arrows text-center d-lg-block d-none'>
                  <div
                    className='gallary-button-prev gallary-prev2'
                    tabIndex={0}
                    role='button'
                    aria-label='Previous slide'
                  >
                    <i className='bi bi-chevron-double-left' />
                  </div>
                  <div
                    className='gallary-button-next gallary-next2'
                    tabIndex={0}
                    role='button'
                    aria-label='Next slide'
                  >
                    <i className='bi bi-chevron-double-right' />
                  </div>
                </div>
              </div>
              <div className='row'>
                <div className='swiper gallary-slider2'>
                  <div className='swiper-wrapper'>
                    <div className='swiper-slide'>
                      <div className='gallary-item'>
                        <img
                          src='assets/images/gallary/g-sm3.png'
                          alt='Image Gallery'
                        />
                        <a
                          href='assets/images/gallary/g-sm3.png'
                          data-fancybox='gallery'
                          data-caption='Caption Here'
                          className='gallary-item-overlay'
                        >
                          <i className='bi bi-eye' />
                        </a>
                      </div>
                      <div className='gallary-item'>
                        <img
                          src='assets/images/gallary/g-sm4.png'
                          alt='Image Gallery'
                        />
                        <a
                          href='assets/images/gallary/g-sm4.png'
                          data-fancybox='gallery'
                          data-caption='Caption Here'
                          className='gallary-item-overlay'
                        >
                          <i className='bi bi-eye' />
                        </a>
                      </div>
                      <div className='gallary-item'>
                        <img
                          src='assets/images/gallary/g-16.png'
                          alt='Image Gallery'
                        />
                        <a
                          href='assets/images/gallary/g-16.png'
                          data-fancybox='gallery'
                          data-caption='Caption Here'
                          className='gallary-item-overlay'
                        >
                          <i className='bi bi-eye' />
                        </a>
                      </div>
                    </div>
                    <div className='swiper-slide'>
                      <div className='gallary-item'>
                        <img
                          src='assets/images/gallary/g-xl4.png'
                          alt='Image Gallery'
                        />
                        <a
                          className='gallary-item-overlay'
                          data-fancybox='gallery'
                          data-caption='Caption Here'
                          href='assets/images/gallary/g-xl4.png'
                        >
                          <i className='bi bi-eye' />
                        </a>
                      </div>
                      <div className='gallary-item'>
                        <img
                          src='assets/images/gallary/g-15.png'
                          alt='Image Gallery'
                        />
                        <a
                          href='assets/images/gallary/g-15.png'
                          data-fancybox='gallery'
                          data-caption='Caption Here'
                          className='gallary-item-overlay'
                        >
                          <i className='bi bi-eye' />
                        </a>
                      </div>
                    </div>
                    <div className='swiper-slide'>
                      <div className='gallary-item'>
                        <img
                          src='assets/images/gallary/g-xl3.png'
                          alt='Image Gallery'
                        />
                        <a
                          href='assets/images/gallary/g-xl3.png'
                          data-fancybox='gallery'
                          data-caption='Caption Here'
                          className='gallary-item-overlay'
                        >
                          <i className='bi bi-eye' />
                        </a>
                      </div>
                      <div className='gallary-item'>
                        <img
                          src='assets/images/gallary/g-14.png'
                          alt='Image Gallery'
                        />
                        <a
                          href='assets/images/gallary/g-14.png'
                          data-fancybox='gallery'
                          data-caption='Caption Here'
                          className='gallary-item-overlay'
                        >
                          <i className='bi bi-eye' />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Gallery;

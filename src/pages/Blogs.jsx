import React from 'react';
import { Link } from 'react-router-dom';

const Blogs = () => {
  return (
    <>
      <div>
        <div className='breadcrumb breadcrumb-style-one'>
          <div className='container'>
            <div className='col-lg-12 text-center'>
              <h2 className='breadcrumb-title'>Blog</h2>
              <ul className='d-flex justify-content-center breadcrumb-items'>
                <li className='breadcrumb-item'>
                  <Link to='/'>Home</Link>
                </li>
                {/* <li className='breadcrumb-item active'>Blog Sidebar</li> */}
              </ul>
            </div>
          </div>
        </div>
        <div className='blog-sidebar-wrapper pt-80'>
          <div className='container'>
            <div className='row'>
              <div className='col-lg-8'>
                <div className='row'>
                  <div className='col-md-6'>
                    <div className='blog-card-gamma'>
                      <div className='blog-thumb'>
                        <a href='blog-details.html'>
                          <img src='assets/images/blog/blog-md-1.png' alt='' />
                        </a>
                        <div className='blog-lavel'>
                          <a href='#'>Tourist</a>
                        </div>
                      </div>
                      <div className='blog-content'>
                        <div className='blog-body-top'>
                          <a href='#' className='blog-writer'>
                            <i className='bi bi-person-circle' /> By John Smith
                          </a>
                          <a href='#' className='blog-comments'>
                            <i className='bi bi-calendar3' /> Novembar 16, 2021
                          </a>
                        </div>
                        <h4 className='blog-title'>
                          <Link to='/blogs/1'>
                            sollicitudin urna metus iaculis odio eget efficitur
                            leo eros id lectus.
                          </Link>
                        </h4>
                      </div>
                    </div>
                  </div>
                  <div className='col-md-6'>
                    <div className='blog-card-gamma'>
                      <div className='blog-thumb'>
                        <a href='blog-details.html'>
                          <img src='assets/images/blog/blog-md-2.png' alt='' />
                        </a>
                        <div className='blog-lavel'>
                          <a href='#'>Travel</a>
                        </div>
                      </div>
                      <div className='blog-content'>
                        <div className='blog-body-top'>
                          <a href='#' className='blog-writer'>
                            <i className='bi bi-person-circle' /> By John Smith
                          </a>
                          <a href='#' className='blog-comments'>
                            <i className='bi bi-calendar3' /> Novembar 16, 2021
                          </a>
                        </div>
                        <h4 className='blog-title'>
                          <Link to='/blogs/2'>
                            vitae tempor convallis, mi ligula an suscipit nunc,
                            ornare suscipit.
                          </Link>
                        </h4>
                      </div>
                    </div>
                  </div>
                  <div className='col-md-6'>
                    <div className='blog-card-gamma'>
                      <div className='blog-thumb'>
                        <a href='blog-details.html'>
                          <img src='assets/images/blog/blog-md-3.png' alt='' />
                        </a>
                        <div className='blog-lavel'>
                          <a href='#'>Tourist</a>
                        </div>
                      </div>
                      <div className='blog-content'>
                        <div className='blog-body-top'>
                          <a href='#' className='blog-writer'>
                            <i className='bi bi-person-circle' /> By John Smith
                          </a>
                          <a href='#' className='blog-comments'>
                            <i className='bi bi-calendar3' /> Novembar 16, 2021
                          </a>
                        </div>
                        <h4 className='blog-title'>
                          <a href='blog-details.html'>
                            Aenean auctor porta sodales. Suspendisse fringilla
                            neque nulla.
                          </a>
                        </h4>
                      </div>
                    </div>
                  </div>
                  <div className='col-md-6'>
                    <div className='blog-card-gamma'>
                      <div className='blog-thumb'>
                        <a href='blog-details.html'>
                          <img src='assets/images/blog/blog-md-4.png' alt='' />
                        </a>
                        <div className='blog-lavel'>
                          <a href='#'>Travel</a>
                        </div>
                      </div>
                      <div className='blog-content'>
                        <div className='blog-body-top'>
                          <a href='#' className='blog-writer'>
                            <i className='bi bi-person-circle' /> By John Smith
                          </a>
                          <a href='#' className='blog-comments'>
                            <i className='bi bi-calendar3' /> Novembar 16, 2021
                          </a>
                        </div>
                        <h4 className='blog-title'>
                          <a href='blog-details.html'>
                            sollicitudin urna metus iaculis odio eget efficitur
                            leo eros id lectus.
                          </a>
                        </h4>
                      </div>
                    </div>
                  </div>
                  <div className='col-md-6'>
                    <div className='blog-card-gamma'>
                      <div className='blog-thumb'>
                        <a href='blog-details.html'>
                          <img src='assets/images/blog/blog-md-5.png' alt='' />
                        </a>
                        <div className='blog-lavel'>
                          <a href='#'>Guide</a>
                        </div>
                      </div>
                      <div className='blog-content'>
                        <div className='blog-body-top'>
                          <a href='#' className='blog-writer'>
                            <i className='bi bi-person-circle' /> By John Smith
                          </a>
                          <a href='#' className='blog-comments'>
                            <i className='bi bi-calendar3' /> Novembar 16, 2021
                          </a>
                        </div>
                        <h4 className='blog-title'>
                          <a href='blog-details.html'>
                            vitae tempor convallis, mi ligula an suscipit nunc,
                            ornare suscipit.
                          </a>
                        </h4>
                      </div>
                    </div>
                  </div>
                  <div className='col-md-6'>
                    <div className='blog-card-gamma'>
                      <div className='blog-thumb'>
                        <a href='blog-details.html'>
                          <img src='assets/images/blog/blog-md-6.png' alt='' />
                        </a>
                        <div className='blog-lavel'>
                          <a href='#'>Travel</a>
                        </div>
                      </div>
                      <div className='blog-content'>
                        <div className='blog-body-top'>
                          <a href='#' className='blog-writer'>
                            <i className='bi bi-person-circle' /> By John Smith
                          </a>
                          <a href='#' className='blog-comments'>
                            <i className='bi bi-calendar3' /> Novembar 16, 2021
                          </a>
                        </div>
                        <h4 className='blog-title'>
                          <a href='blog-details.html'>
                            Nulla urna leo, volutpat eu maurisa eget luctus
                            malesuada urna.
                          </a>
                        </h4>
                      </div>
                    </div>
                  </div>
                  <div className='col-md-6'>
                    <div className='blog-card-gamma'>
                      <div className='blog-thumb'>
                        <a href='blog-details.html'>
                          <img src='assets/images/blog/blog-md-7.png' alt='' />
                        </a>
                        <div className='blog-lavel'>
                          <a href='#'>Story</a>
                        </div>
                      </div>
                      <div className='blog-content'>
                        <div className='blog-body-top'>
                          <a href='#' className='blog-writer'>
                            <i className='bi bi-person-circle' /> By John Smith
                          </a>
                          <a href='#' className='blog-comments'>
                            <i className='bi bi-calendar3' /> Novembar 16, 2021
                          </a>
                        </div>
                        <h4 className='blog-title'>
                          <a href='blog-details.html'>
                            Duis pretium sit amet nisi a malesuada Fusce congue
                            justo dui.
                          </a>
                        </h4>
                      </div>
                    </div>
                  </div>
                  <div className='col-md-6'>
                    <div className='blog-card-gamma'>
                      <div className='blog-thumb'>
                        <a href='blog-details.html'>
                          <img src='assets/images/blog/blog-md-8.png' alt='' />
                        </a>
                        <div className='blog-lavel'>
                          <a href='#'>Travel</a>
                        </div>
                      </div>
                      <div className='blog-content'>
                        <div className='blog-body-top'>
                          <a href='#' className='blog-writer'>
                            <i className='bi bi-person-circle' /> By John Smith
                          </a>
                          <a href='#' className='blog-comments'>
                            <i className='bi bi-calendar3' /> Novembar 16, 2021
                          </a>
                        </div>
                        <h4 className='blog-title'>
                          <a href='blog-details.html'>
                            Nam efficitur facilisis tinciduntent Curabitur vitae
                            enim sed nunc.
                          </a>
                        </h4>
                      </div>
                    </div>
                  </div>
                  <div className='col-md-6'>
                    <div className='blog-card-gamma'>
                      <div className='blog-thumb'>
                        <a href='blog-details.html'>
                          <img src='assets/images/blog/blog-md-9.png' alt='' />
                        </a>
                        <div className='blog-lavel'>
                          <a href='#'>Travel</a>
                        </div>
                      </div>
                      <div className='blog-content'>
                        <div className='blog-body-top'>
                          <a href='#' className='blog-writer'>
                            <i className='bi bi-person-circle' /> By John Smith
                          </a>
                          <a href='#' className='blog-comments'>
                            <i className='bi bi-calendar3' /> Novembar 16, 2021
                          </a>
                        </div>
                        <h4 className='blog-title'>
                          <a href='blog-details.html'>
                            vitae tempor convallis, mi ligula an suscipit nunc,
                            ornare suscipit.
                          </a>
                        </h4>
                      </div>
                    </div>
                  </div>
                  <div className='col-md-6'>
                    <div className='blog-card-gamma'>
                      <div className='blog-thumb'>
                        <a href='blog-details.html'>
                          <img src='assets/images/blog/blog-md-10.png' alt='' />
                        </a>
                        <div className='blog-lavel'>
                          <a href='#'>Travel</a>
                        </div>
                      </div>
                      <div className='blog-content'>
                        <div className='blog-body-top'>
                          <a href='#' className='blog-writer'>
                            <i className='bi bi-person-circle' /> By John Smith
                          </a>
                          <a href='#' className='blog-comments'>
                            <i className='bi bi-calendar3' /> Novembar 16, 2021
                          </a>
                        </div>
                        <h4 className='blog-title'>
                          <a href='blog-details.html'>
                            Nullam tristique laoreet tortor, in interdum elit
                            efficitur at Interdum.
                          </a>
                        </h4>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='row'>
                  <div className='col-lg-12'>
                    <nav>
                      <ul className='pagination pagination-style-one justify-content-center pt-80'>
                        <li className='page-item page-arrow'>
                          <a className='page-link' href='#'>
                            <i className='bi bi-chevron-double-left' />
                          </a>
                        </li>
                        <li className='page-item active'>
                          <a className='page-link' href='#'>
                            01
                          </a>
                        </li>
                        <li className='page-item'>
                          <a className='page-link' href='#'>
                            02
                          </a>
                        </li>
                        <li className='page-item'>
                          <a className='page-link' href='#'>
                            03
                          </a>
                        </li>
                        <li className='page-item'>
                          <a className='page-link' href='#'>
                            04
                          </a>
                        </li>
                        <li className='page-item page-arrow'>
                          <a className='page-link' href='#'>
                            <i className='bi bi-chevron-double-right' />
                          </a>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </div>
              </div>
              <div className='col-lg-4'>
                <div className='blog-sidebar'>
                  <aside className='blog-widget widget-search'>
                    <div className='widget-title'>
                      <h4>Search Here</h4>
                    </div>
                    <div className='widget-body'>
                      <form action='#' method='post' id='blog-sidebar-search'>
                        <div className='search-input-group'>
                          <input type='search' placeholder='Your Destination' />
                          <button type='submit'>SEAECH</button>
                        </div>
                      </form>
                    </div>
                  </aside>
                  <aside className='blog-widget widget-categories mt-30'>
                    <div className='widget-title'>
                      <h4>Categories</h4>
                    </div>
                    <ul className='widget-body'>
                      <li>
                        <a href='#'>
                          <h6>
                            <i className='bi bi-chevron-double-right' /> New
                            York City
                          </h6>
                          <span>(20)</span>
                        </a>
                      </li>
                      <li>
                        <a href='#'>
                          <h6>
                            <i className='bi bi-chevron-double-right' />{' '}
                            Adventure Tour
                          </h6>
                          <span>(08)</span>
                        </a>
                      </li>
                      <li>
                        <a href='#'>
                          <h6>
                            <i className='bi bi-chevron-double-right' /> Couple
                            Tour
                          </h6>
                          <span>(18)</span>
                        </a>
                      </li>
                      <li>
                        <a href='#'>
                          <h6>
                            <i className='bi bi-chevron-double-right' /> Village
                            Tour
                          </h6>
                          <span>(21)</span>
                        </a>
                      </li>
                      <li>
                        <a href='#'>
                          <h6>
                            <i className='bi bi-chevron-double-right' /> Group
                            Tour
                          </h6>
                          <span>(09)</span>
                        </a>
                      </li>
                    </ul>
                  </aside>
                  <aside className='blog-widget widget-recent-entries-custom mt-30'>
                    <div className='widget-title'>
                      <h4>New Post</h4>
                    </div>
                    <ul className='widget-body'>
                      <li className='clearfix'>
                        <div className='wi'>
                          <a href='blog-details.html'>
                            <img
                              src='assets/images/blog/blog-thumb-sm1.png'
                              alt=''
                            />
                          </a>
                        </div>
                        <div className='wb'>
                          <h6>
                            <a href='blog-details.html'>
                              Map where your photos were taken and discover
                              local points.
                            </a>
                          </h6>
                          <div className='wb-info'>
                            <span className='post-date'>
                              <i className='bi bi-person-circle' /> By John
                              Smith
                            </span>
                            <span className='post-date'>
                              <i className='bi bi-calendar3' /> May 8, 2016
                            </span>
                          </div>
                        </div>
                      </li>
                      <li className='clearfix'>
                        <div className='wi'>
                          <a href='blog-details.html'>
                            <img
                              src='assets/images/blog/blog-thumb-sm2.png'
                              alt=''
                            />
                          </a>
                        </div>
                        <div className='wb'>
                          <h6>
                            <a href='blog-details.html'>
                              San Francisco Golden Gate Bridge, cable cars &amp;
                              fog.
                            </a>
                          </h6>
                          <div className='wb-info'>
                            <span className='post-date'>
                              <i className='bi bi-person-circle' /> By John
                              Smith
                            </span>
                            <span className='post-date'>
                              <i className='bi bi-calendar3' /> May 8, 2016
                            </span>
                          </div>
                        </div>
                      </li>
                      <li className='clearfix'>
                        <div className='wi'>
                          <a href='blog-details.html'>
                            <img
                              src='assets/images/blog/blog-thumb-sm3.png'
                              alt=''
                            />
                          </a>
                        </div>
                        <div className='wb'>
                          <h6>
                            <a href='blog-details.html'>
                              Vestibulum luctus hendrerit verba neque, et
                              blandit.
                            </a>
                          </h6>
                          <div className='wb-info'>
                            <span className='post-date'>
                              <i className='bi bi-person-circle' /> By John
                              Smith
                            </span>
                            <span className='post-date'>
                              <i className='bi bi-calendar3' /> May 8, 2016
                            </span>
                          </div>
                        </div>
                      </li>
                      <li className='clearfix'>
                        <div className='wi'>
                          <a href='blog-details.html'>
                            <img
                              src='assets/images/blog/blog-thumb-sm4.png'
                              alt=''
                            />
                          </a>
                        </div>
                        <div className='wb'>
                          <h6>
                            <a href='blog-details.html'>
                              Aenean auctor porta sodales anve Suspendisse
                              fringilla.
                            </a>
                          </h6>
                          <div className='wb-info'>
                            <span className='post-date'>
                              <i className='bi bi-person-circle' /> By John
                              Smith
                            </span>
                            <span className='post-date'>
                              <i className='bi bi-calendar3' /> May 8, 2016
                            </span>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </aside>
                  <aside className='blog-widget widget-tag-cloud mt-30'>
                    <div className='widget-title'>
                      <h4>Tags</h4>
                    </div>
                    <div className='tag-cloud widget-body'>
                      <a href='#'>Adventure</a>
                      <a href='#'>Trip</a>
                      <a href='#'>Guided</a>
                      <a href='#'>Historical</a>
                      <a href='#'>Road Trips</a>
                      <a href='#'>Tourist</a>
                      <a href='#'>Cultural</a>
                      <a href='#'>Natural Tour</a>
                      <a href='#'>Journey</a>
                    </div>
                  </aside>
                  <aside className='blog-widget widget-gallary mt-30'>
                    <div className='widget-title'>
                      <h4>Gallery</h4>
                    </div>
                    <ul className='widget-body'>
                      <li>
                        <a
                          href='assets/images/gallary/sb-gallary-1.png'
                          data-fancybox='gallery'
                          data-caption='Caption Here'
                          className='gallary-overlay'
                        >
                          <img
                            src='assets/images/gallary/sb-gallary-1.png'
                            alt=''
                          />
                        </a>
                      </li>
                      <li>
                        <a
                          href='assets/images/gallary/sb-gallary-2.png'
                          data-fancybox='gallery'
                          data-caption='Caption Here'
                          className='gallary-overlay'
                        >
                          <img
                            src='assets/images/gallary/sb-gallary-2.png'
                            alt=''
                          />
                        </a>
                      </li>
                      <li>
                        <a
                          href='assets/images/gallary/sb-gallary-3.png'
                          data-fancybox='gallery'
                          data-caption='Caption Here'
                          className='gallary-overlay'
                        >
                          <img
                            src='assets/images/gallary/sb-gallary-3.png'
                            alt=''
                          />
                        </a>
                      </li>
                      <li>
                        <a
                          href='assets/images/gallary/sb-gallary-4.png'
                          data-fancybox='gallery'
                          data-caption='Caption Here'
                          className='gallary-overlay'
                        >
                          <img
                            src='assets/images/gallary/sb-gallary-4.png'
                            alt=''
                          />
                        </a>
                      </li>
                      <li>
                        <a
                          href='assets/images/gallary/sb-gallary-5.png'
                          data-fancybox='gallery'
                          data-caption='Caption Here'
                          className='gallary-overlay'
                        >
                          <img
                            src='assets/images/gallary/sb-gallary-5.png'
                            alt=''
                          />
                        </a>
                      </li>
                      <li>
                        <a
                          href='assets/images/gallary/sb-gallary-6.png'
                          data-fancybox='gallery'
                          data-caption='Caption Here'
                          className='gallary-overlay'
                        >
                          <img
                            src='assets/images/gallary/sb-gallary-6.png'
                            alt=''
                          />
                        </a>
                      </li>
                    </ul>
                  </aside>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blogs;

import React from 'react';
import { Link } from 'react-router-dom';

const Packages = () => {
  return (
    <>
      <div>
        <div className='breadcrumb breadcrumb-style-one'>
          <div className='container'>
            <div className='col-lg-12 text-center'>
              <h2 className='breadcrumb-title'>Tour Package</h2>
              <ul className='d-flex justify-content-center breadcrumb-items'>
                <li className='breadcrumb-item'>
                  <Link to='/'>Home</Link>
                </li>
                {/* <li className='breadcrumb-item active'>Tour Package</li> */}
              </ul>
            </div>
          </div>
        </div>
        <div className='package-wrapper pt-80'>
          <div className='container'>
            <div className='row'>
              <div className='col-lg-4 col-md-6'>
                <div className='package-card-alpha'>
                  <div className='package-thumb'>
                    <a href='package-details.html'>
                      <img src='assets/images/package/p-alpha1.png' alt='' />
                    </a>
                    <p className='card-lavel'>
                      <i className='bi bi-clock' />{' '}
                      <span>3 Day &amp; 2 night</span>
                    </p>
                  </div>
                  <div className='package-card-body'>
                    <h3 className='p-card-title'>
                      <Link to='/packages/1'>
                        Etiam placerat dictum consequat an Pellentesque habitant
                        morbi.
                      </Link>
                    </h3>
                    <div className='p-card-bottom'>
                      <div className='book-btn'>
                        <a href='package-details.html'>
                          Book Now <i className='bx bxs-right-arrow-alt' />
                        </a>
                      </div>
                      <div className='p-card-info'>
                        <span>From</span>
                        <h6>
                          $88.00 <span>Per Person</span>
                        </h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='col-lg-4 col-md-6'>
                <div className='package-card-alpha'>
                  <div className='package-thumb'>
                    <a href='package-details.html'>
                      <img src='assets/images/package/p-alpha2.png' alt='' />
                    </a>
                    <p className='card-lavel'>
                      <i className='bi bi-clock' />{' '}
                      <span>3 Day &amp; 2 night</span>
                    </p>
                  </div>
                  <div className='package-card-body'>
                    <h3 className='p-card-title'>
                      <Link to='/packages/2'>
                        varius condimentum consequat frin Aenean pretium risus
                        eu.
                      </Link>
                    </h3>
                    <div className='p-card-bottom'>
                      <div className='book-btn'>
                        <a href='package-details.html'>
                          Book Now <i className='bx bxs-right-arrow-alt' />
                        </a>
                      </div>
                      <div className='p-card-info'>
                        <span>From</span>
                        <h6>
                          $67.00 <span>Per Person</span>
                        </h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='col-lg-4 col-md-6'>
                <div className='package-card-alpha'>
                  <div className='package-thumb'>
                    <a href='package-details.html'>
                      <img src='assets/images/package/p-alpha3.png' alt='' />
                    </a>
                    <p className='card-lavel'>
                      <i className='bi bi-clock' />{' '}
                      <span>7 Day &amp; 6 night</span>
                    </p>
                  </div>
                  <div className='package-card-body'>
                    <h3 className='p-card-title'>
                      <a href='package-details.html'>
                        Praesent sed elit mi. In risus nullaam efficitur non
                        elementum eget.
                      </a>
                    </h3>
                    <div className='p-card-bottom'>
                      <div className='book-btn'>
                        <a href='package-details.html'>
                          Book Now <i className='bx bxs-right-arrow-alt' />
                        </a>
                      </div>
                      <div className='p-card-info'>
                        <span>From</span>
                        <h6>
                          $91.00 <span>Per Person</span>
                        </h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='col-lg-4 col-md-6'>
                <div className='package-card-alpha'>
                  <div className='package-thumb'>
                    <a href='package-details.html'>
                      <img src='assets/images/package/p-alpha4.png' alt='' />
                    </a>
                    <p className='card-lavel'>
                      <i className='bi bi-clock' />{' '}
                      <span>4 Day &amp; 3 night</span>
                    </p>
                  </div>
                  <div className='package-card-body'>
                    <h3 className='p-card-title'>
                      <a href='package-details.html'>
                        Sed ultricies sapien arcu, sed cong feugiat sapien
                        dignissim id.
                      </a>
                    </h3>
                    <div className='p-card-bottom'>
                      <div className='book-btn'>
                        <a href='package-details.html'>
                          Book Now <i className='bx bxs-right-arrow-alt' />
                        </a>
                      </div>
                      <div className='p-card-info'>
                        <span>From</span>
                        <h6>
                          $79.00 <span>Per Person</span>
                        </h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='col-lg-4 col-md-6'>
                <div className='package-card-alpha'>
                  <div className='package-thumb'>
                    <a href='package-details.html'>
                      <img src='assets/images/package/p-alpha5.png' alt='' />
                    </a>
                    <p className='card-lavel'>
                      <i className='bi bi-clock' />{' '}
                      <span>4 Day &amp; 4 night</span>
                    </p>
                  </div>
                  <div className='package-card-body'>
                    <h3 className='p-card-title'>
                      <a href='package-details.html'>
                        Pellentesque habitant morbi malesua tristique senectus
                        et netus et.
                      </a>
                    </h3>
                    <div className='p-card-bottom'>
                      <div className='book-btn'>
                        <a href='package-details.html'>
                          Book Now <i className='bx bxs-right-arrow-alt' />
                        </a>
                      </div>
                      <div className='p-card-info'>
                        <span>From</span>
                        <h6>
                          $88.00 <span>Per Person</span>
                        </h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='col-lg-4 col-md-6'>
                <div className='package-card-alpha'>
                  <div className='package-thumb'>
                    <a href='package-details.html'>
                      <img src='assets/images/package/p-alpha6.png' alt='' />
                    </a>
                    <p className='card-lavel'>
                      <i className='bi bi-clock' />{' '}
                      <span>3 Day &amp; 2 night</span>
                    </p>
                  </div>
                  <div className='package-card-body'>
                    <h3 className='p-card-title'>
                      <a href='package-details.html'>
                        San Francisco Golden Gate Bridge, cable cars &amp; fog.
                      </a>
                    </h3>
                    <div className='p-card-bottom'>
                      <div className='book-btn'>
                        <a href='package-details.html'>
                          Book Now <i className='bx bxs-right-arrow-alt' />
                        </a>
                      </div>
                      <div className='p-card-info'>
                        <span>From</span>
                        <h6>
                          $79.00 <span>Per Person</span>
                        </h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='col-lg-4 col-md-6'>
                <div className='package-card-alpha'>
                  <div className='package-thumb'>
                    <a href='package-details.html'>
                      <img src='assets/images/package/p-alpha7.png' alt='' />
                    </a>
                    <p className='card-lavel'>
                      <i className='bi bi-clock' />{' '}
                      <span>3 Day &amp; 2 night</span>
                    </p>
                  </div>
                  <div className='package-card-body'>
                    <h3 className='p-card-title'>
                      <a href='package-details.html'>
                        Etiam placerat dictum consequat an Pellentesque habitant
                        morbi.
                      </a>
                    </h3>
                    <div className='p-card-bottom'>
                      <div className='book-btn'>
                        <a href='package-details.html'>
                          Book Now <i className='bx bxs-right-arrow-alt' />
                        </a>
                      </div>
                      <div className='p-card-info'>
                        <span>From</span>
                        <h6>
                          $79.00 <span>Per Person</span>
                        </h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='col-lg-4 col-md-6'>
                <div className='package-card-alpha'>
                  <div className='package-thumb'>
                    <a href='package-details.html'>
                      <img src='assets/images/package/p-alpha8.png' alt='' />
                    </a>
                    <p className='card-lavel'>
                      <i className='bi bi-clock' />{' '}
                      <span>5 Day &amp; 6 night</span>
                    </p>
                  </div>
                  <div className='package-card-body'>
                    <h3 className='p-card-title'>
                      <a href='package-details.html'>
                        varius condimentum consequat frin Aenean pretium risus
                        eu.
                      </a>
                    </h3>
                    <div className='p-card-bottom'>
                      <div className='book-btn'>
                        <a href='package-details.html'>
                          Book Now <i className='bx bxs-right-arrow-alt' />
                        </a>
                      </div>
                      <div className='p-card-info'>
                        <span>From</span>
                        <h6>
                          $88.00 <span>Per Person</span>
                        </h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='col-lg-4 col-md-6'>
                <div className='package-card-alpha'>
                  <div className='package-thumb'>
                    <a href='package-details.html'>
                      <img src='assets/images/package/p-alpha9.png' alt='' />
                    </a>
                    <p className='card-lavel'>
                      <i className='bi bi-clock' />{' '}
                      <span>5 Day &amp; 6 night</span>
                    </p>
                  </div>
                  <div className='package-card-body'>
                    <h3 className='p-card-title'>
                      <a href='package-details.html'>
                        Praesent sed elit mi. In risus nullaam efficitur non
                        elementum eget.
                      </a>
                    </h3>
                    <div className='p-card-bottom'>
                      <div className='book-btn'>
                        <a href='package-details.html'>
                          Book Now <i className='bx bxs-right-arrow-alt' />
                        </a>
                      </div>
                      <div className='p-card-info'>
                        <span>From</span>
                        <h6>
                          $79.00 <span>Per Person</span>
                        </h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='col-lg-4 col-md-6'>
                <div className='package-card-alpha'>
                  <div className='package-thumb'>
                    <a href='package-details.html'>
                      <img src='assets/images/package/p-alpha10.png' alt='' />
                    </a>
                    <p className='card-lavel'>
                      <i className='bi bi-clock' />{' '}
                      <span>4 Day &amp; 3 night</span>
                    </p>
                  </div>
                  <div className='package-card-body'>
                    <h3 className='p-card-title'>
                      <a href='package-details.html'>
                        Sed ultricies sapien arcu, sed cong feugiat sapien
                        dignissim id.
                      </a>
                    </h3>
                    <div className='p-card-bottom'>
                      <div className='book-btn'>
                        <a href='package-details.html'>
                          Book Now <i className='bx bxs-right-arrow-alt' />
                        </a>
                      </div>
                      <div className='p-card-info'>
                        <span>From</span>
                        <h6>
                          $67.00 <span>Per Person</span>
                        </h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='col-lg-4 col-md-6'>
                <div className='package-card-alpha'>
                  <div className='package-thumb'>
                    <a href='package-details.html'>
                      <img src='assets/images/package/p-alpha11.png' alt='' />
                    </a>
                    <p className='card-lavel'>
                      <i className='bi bi-clock' />{' '}
                      <span>3 Day &amp; 2 night</span>
                    </p>
                  </div>
                  <div className='package-card-body'>
                    <h3 className='p-card-title'>
                      <a href='package-details.html'>
                        Pellentesque habitant morbi malesua tristique senectus
                        et netus et.
                      </a>
                    </h3>
                    <div className='p-card-bottom'>
                      <div className='book-btn'>
                        <a href='package-details.html'>
                          Book Now <i className='bx bxs-right-arrow-alt' />
                        </a>
                      </div>
                      <div className='p-card-info'>
                        <span>From</span>
                        <h6>
                          $91.00 <span>Per Person</span>
                        </h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='col-lg-4 col-md-6'>
                <div className='package-card-alpha'>
                  <div className='package-thumb'>
                    <a href='package-details.html'>
                      <img src='assets/images/package/p-alpha1.png' alt='' />
                    </a>
                    <p className='card-lavel'>
                      <i className='bi bi-clock' />{' '}
                      <span>2 Day &amp; 1 night</span>
                    </p>
                  </div>
                  <div className='package-card-body'>
                    <h3 className='p-card-title'>
                      <a href='package-details.html'>
                        San Francisco Golden Gate Bridge, cable cars &amp; fog.
                      </a>
                    </h3>
                    <div className='p-card-bottom'>
                      <div className='book-btn'>
                        <a href='package-details.html'>
                          Book Now <i className='bx bxs-right-arrow-alt' />
                        </a>
                      </div>
                      <div className='p-card-info'>
                        <span>From</span>
                        <h6>
                          $88.00 <span>Per Person</span>
                        </h6>
                      </div>
                    </div>
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
        </div>
      </div>
    </>
  );
};

export default Packages;

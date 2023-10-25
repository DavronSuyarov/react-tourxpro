import React from 'react';
import { Link } from 'react-router-dom';

const Destinations = () => {
  return (
    <>
      <div>
        <div className='breadcrumb breadcrumb-style-one'>
          <div className='container'>
            <div className='col-lg-12 text-center'>
              <h2 className='breadcrumb-title'>Destination</h2>
              <ul className='d-flex justify-content-center breadcrumb-items'>
                <li className='breadcrumb-item'>
                  <Link to='/'>Home</Link>
                </li>
                {/* <li className='breadcrumb-item active'>Destination</li> */}
              </ul>
            </div>
          </div>
        </div>
        <div className='destination-wrapper pt-110'>
          <div className='container'>
            <div className='row g-3'>
              <div className='col-lg-3 col-md-4 col-sm-6'>
                <div className='destination-card-style-two'>
                  <div className='d-card-thumb'>
                    <img src='assets/images/destination/des-sm2.png' alt='' />
                  </div>
                  <div className='d-card-content'>
                    <h4 className='destination-title'>
                      <Link to='/destinations/1'>Düsseldorf</Link>
                    </h4>
                    <div className='place-count'>
                      <span>45</span> Place
                    </div>
                  </div>
                </div>
              </div>
              <div className='col-lg-3 col-md-4 col-sm-6'>
                <div className='destination-card-style-two'>
                  <div className='d-card-thumb'>
                    <img src='assets/images/destination/des-sm1.png' alt='' />
                  </div>
                  <div className='d-card-content'>
                    <h4 className='destination-title'>
                      <a href='destination-details.html'>Hamburg</a>
                    </h4>
                    <div className='place-count'>
                      <span>45</span> Place
                    </div>
                  </div>
                </div>
              </div>
              <div className='col-lg-3 col-md-4 col-sm-6'>
                <div className='destination-card-style-two'>
                  <div className='d-card-thumb'>
                    <img src='assets/images/destination/des-sm3.png' alt='' />
                  </div>
                  <div className='d-card-content'>
                    <h4 className='destination-title'>
                      <a href='destination-details.html'>Augsburg</a>
                    </h4>
                    <div className='place-count'>
                      <span>45</span> Place
                    </div>
                  </div>
                </div>
              </div>
              <div className='col-lg-3 col-md-4 col-sm-6'>
                <div className='destination-card-style-two'>
                  <div className='d-card-thumb'>
                    <img src='assets/images/destination/des-sm4.png' alt='' />
                  </div>
                  <div className='d-card-content'>
                    <h4 className='destination-title'>
                      <a href='destination-details.html'>Wiesbaden</a>
                    </h4>
                    <div className='place-count'>
                      <span>45</span> Place
                    </div>
                  </div>
                </div>
              </div>
              <div className='col-lg-3 col-md-4 col-sm-6'>
                <div className='destination-card-style-two'>
                  <div className='d-card-thumb'>
                    <img src='assets/images/destination/des-sm5.png' alt='' />
                  </div>
                  <div className='d-card-content'>
                    <h4 className='destination-title'>
                      <a href='destination-details.html'>Nuremberg</a>
                    </h4>
                    <div className='place-count'>
                      <span>45</span> Place
                    </div>
                  </div>
                </div>
              </div>
              <div className='col-lg-3 col-md-4 col-sm-6'>
                <div className='destination-card-style-two'>
                  <div className='d-card-thumb'>
                    <img src='assets/images/destination/des-sm6.png' alt='' />
                  </div>
                  <div className='d-card-content'>
                    <h4 className='destination-title'>
                      <a href='destination-details.html'>Chemnitz</a>
                    </h4>
                    <div className='place-count'>
                      <span>45</span> Place
                    </div>
                  </div>
                </div>
              </div>
              <div className='col-lg-3 col-md-4 col-sm-6'>
                <div className='destination-card-style-two'>
                  <div className='d-card-thumb'>
                    <img src='assets/images/destination/des-sm7.png' alt='' />
                  </div>
                  <div className='d-card-content'>
                    <h4 className='destination-title'>
                      <a href='destination-details.html'>Bielefeld</a>
                    </h4>
                    <div className='place-count'>
                      <span>45</span> Place
                    </div>
                  </div>
                </div>
              </div>
              <div className='col-lg-3 col-md-4 col-sm-6'>
                <div className='destination-card-style-two'>
                  <div className='d-card-thumb'>
                    <img src='assets/images/destination/des-sm8.png' alt='' />
                  </div>
                  <div className='d-card-content'>
                    <h4 className='destination-title'>
                      <a href='destination-details.html'>Oberhausen</a>
                    </h4>
                    <div className='place-count'>
                      <span>45</span> Place
                    </div>
                  </div>
                </div>
              </div>
              <div className='col-lg-3 col-md-4 col-sm-6'>
                <div className='destination-card-style-two'>
                  <div className='d-card-thumb'>
                    <img src='assets/images/destination/des-sm7.png' alt='' />
                  </div>
                  <div className='d-card-content'>
                    <h4 className='destination-title'>
                      <a href='destination-details.html'>Bielefeld</a>
                    </h4>
                    <div className='place-count'>
                      <span>45</span> Place
                    </div>
                  </div>
                </div>
              </div>
              <div className='col-lg-3 col-md-4 col-sm-6'>
                <div className='destination-card-style-two'>
                  <div className='d-card-thumb'>
                    <img src='assets/images/destination/des-sm9.png' alt='' />
                  </div>
                  <div className='d-card-content'>
                    <h4 className='destination-title'>
                      <a href='destination-details.html'>Middle Chaina</a>
                    </h4>
                    <div className='place-count'>
                      <span>45</span> Place
                    </div>
                  </div>
                </div>
              </div>
              <div className='col-lg-3 col-md-4 col-sm-6'>
                <div className='destination-card-style-two'>
                  <div className='d-card-thumb'>
                    <img src='assets/images/destination/des-sm8.png' alt='' />
                  </div>
                  <div className='d-card-content'>
                    <h4 className='destination-title'>
                      <a href='destination-details.html'>Parshia la</a>
                    </h4>
                    <div className='place-count'>
                      <span>45</span> Place
                    </div>
                  </div>
                </div>
              </div>
              <div className='col-lg-3 col-md-4 col-sm-6'>
                <div className='destination-card-style-two'>
                  <div className='d-card-thumb'>
                    <img src='assets/images/destination/des-sm8.png' alt='' />
                  </div>
                  <div className='d-card-content'>
                    <h4 className='destination-title'>
                      <a href='destination-details.html'>New Delhi</a>
                    </h4>
                    <div className='place-count'>
                      <span>45</span> Place
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='row'>
              <div className='col-lg-12'>
                <nav>
                  <ul className='pagination pagination-style-one justify-content-center pt-50'>
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

export default Destinations;

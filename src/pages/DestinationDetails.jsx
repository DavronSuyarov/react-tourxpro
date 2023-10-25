import React from 'react';
import { Link } from 'react-router-dom';

const DestinationDetails = () => {
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
                <li className='breadcrumb-item active'>Destination Details</li>
              </ul>
            </div>
          </div>
        </div>
        <div className='destination-details-wrapper pt-110'>
          <div className='container'>
            <div className='row'>
              <div className='col-lg-8'>
                <div className='destination-details'>
                  <div className='dd-thumb'>
                    <img src='assets/images/destination/dd-thumb.png' alt='' />
                  </div>
                  <div className='dd-body'>
                    <h3 className='dd-subtitle'>Discover New York</h3>
                    <p>
                      Duis rutrum nisl urna. Maecenas vel libero faucibus nisi
                      venenatis hendrerit a id lectus. Suspendissendt blandit
                      interdum. Sed pellentesque at nunc eget consente Duis
                      rutrum nisl urna. Maecenas vel libero faucibus nisiteden
                      venenatis hendrerit a id lectus. Suspendissendt blandit
                      interdum. Sed pellentesque at nunc eget consente andit
                      consectetur.Duis rutrum nisl urna. Maecenas vel libero
                      faucibus nisi venenatis hendrerit a id lectus. Maecenas
                      Suspendissendt blandit interdum. libero faucibus nisi
                      venenatis hendrerit a id lectus. Suspendissendt blandit
                      interdum. <br />
                      Sed pellentesque at nunc consectetur.Duis rutrum nisl
                      urna. Maecenas vel libero faucibus nisi venenatis
                      hendrerit a id lectus. Suspendissendt blandit interdum.
                      Sed pellentesque at nunc consectetur.Duis rutrum nisl
                      urna. Maecenas vel libero faucibus nisi venenatis
                      hendrerit a id lectus. Suspendissendt blandit interdum.
                      Sed pellentesque at nunc consectetur.Duis rutrum nisl
                      urna.
                    </p>
                    <div className='row dd-img-group g-3'>
                      <div className='col-sm-6'>
                        <div className='dd-inner-group'>
                          <img
                            src='assets/images/destination/dd-img1.png'
                            alt=''
                          />
                        </div>
                      </div>
                      <div className='col-sm-6'>
                        <div className='dd-inner-group'>
                          <img
                            src='assets/images/destination/dd-img2.png'
                            alt=''
                          />
                        </div>
                      </div>
                    </div>
                    <p>
                      Duis rutrum nisl urna. Maecenas vel libero faucibus nisi
                      venenatis hendrerit a id lectus. Suspendissendt blandit
                      interdum. Sed pellentesque at nunc eget consente Duis
                      rutrum nisl urna. Maecenas vel libero faucibus nisiteden
                      venenatis hendrerit a id lectus. Suspendissendt blandit
                      interdum. Sed pellentesque at nunc eget consente andit
                      consectetur.Duis rutrum nisl urna. Maecenas vel libero
                      faucibus nisi venenatis hendrerit a id lectus. Maecenas
                      Suspendissendt blandit interdum.
                    </p>
                    <p>
                      libero faucibus nisi venenatis hendrerit a id lectus.
                      Suspendissendt blandit interdum. Sed pellentesque at nunc
                      consectetur.Duis rutrum nisl urna. Maecenas vel libero
                      faucibus nisi venenatis hendrerit a id lectus.
                    </p>
                    <div className='destination-overview-table'>
                      <h3 className='dd-subtitle'>Overview</h3>
                      <table className='table overview-table'>
                        <tbody>
                          <tr>
                            <th>Destination</th>
                            <td>New York City</td>
                          </tr>
                          <tr>
                            <th>Departure</th>
                            <td>Yes Required</td>
                          </tr>
                          <tr>
                            <th>Departure Time</th>
                            <td>
                              01 April, 2021 <span>10.00AM</span>
                            </td>
                          </tr>
                          <tr>
                            <th>Return Time</th>
                            <td>
                              08 April, 2021 <span>10.00AM</span>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <div className='destination-map'>
                      <h3 className='dd-subtitle'>Map</h3>
                      <div className='mapouter'>
                        <div className='gmap_canvas'>
                          <iframe
                            id='gmap_canvas'
                            src='https://maps.google.com/maps?q=2880%20Broadway,%20New%20York&t=&z=9&ie=UTF8&iwloc=&output=embed'
                          />
                          <a href='https://123movies-to.org' />
                          <br />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='col-lg-4 mt-5 mt-lg-0'>
                <div className='package-sidebar'>
                  <aside className='package-widget widget-search'>
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
                  <aside className='package-widget widget-tour-categoris mt-30'>
                    <div className='widget-title'>
                      <h4>Category</h4>
                    </div>
                    <div className='widget-body'>
                      <ul>
                        <li className='category-check'>
                          <label className='form-check-label' htmlFor='cate'>
                            <i className='bi bi-chevron-double-right' /> New
                            York City
                          </label>
                          <input
                            className='form-check-input'
                            type='checkbox'
                            id='cate'
                          />
                        </li>
                        <li className='category-check'>
                          <label className='form-check-label' htmlFor='cate2'>
                            <i className='bi bi-chevron-double-right' />
                            Adventure Tour
                          </label>
                          <input
                            className='form-check-input'
                            type='checkbox'
                            id='cate2'
                          />
                        </li>
                        <li className='category-check'>
                          <label className='form-check-label' htmlFor='cate3'>
                            <i className='bi bi-chevron-double-right' /> Couple
                            Tour
                          </label>
                          <input
                            className='form-check-input'
                            type='checkbox'
                            id='cate3'
                          />
                        </li>
                        <li className='category-check'>
                          <label className='form-check-label' htmlFor='cate4'>
                            <i className='bi bi-chevron-double-right' /> Village
                            Tour
                          </label>
                          <input
                            className='form-check-input'
                            type='checkbox'
                            id='cate4'
                          />
                        </li>
                        <li className='category-check'>
                          <label className='form-check-label' htmlFor='cate5'>
                            <i className='bi bi-chevron-double-right' />
                            Group Tour
                          </label>
                          <input
                            className='form-check-input'
                            type='checkbox'
                            id='cate5'
                          />
                        </li>
                      </ul>
                    </div>
                  </aside>
                  <aside className='package-widget widget-gallary mt-30'>
                    <div className='widget-title'>
                      <h4>New Destination</h4>
                    </div>
                    <ul className='widget-body'>
                      <li>
                        <a
                          href='assets/images/gallary/sb-gallary-1.png'
                          data-fancybox='gallery'
                          data-caption='Caption Here'
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
                        >
                          <img
                            src='assets/images/gallary/sb-gallary-6.png'
                            alt=''
                          />
                        </a>
                      </li>
                    </ul>
                  </aside>
                  <aside className='widget-banner mt-30'>
                    <a href='#'>
                      <img
                        src='assets/images/banner/sidebar-banner.png'
                        alt=''
                        className='img-fluid'
                      />
                    </a>
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

export default DestinationDetails;

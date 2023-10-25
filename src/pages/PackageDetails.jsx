import React from 'react';
import { Link } from 'react-router-dom';

const PackageDetails = () => {
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
                <li className='breadcrumb-item active'>Package details</li>
              </ul>
            </div>
          </div>
        </div>
        <div className='package-details-wrapper pt-76'>
          <div className='container'>
            <div className='row'>
              <div className='col-lg-8'>
                <div className='tour-package-details'>
                  <div className='pd-header'>
                    <div className='pd-top row row-cols-lg-4 row-cols-md-2 row-cols-2 gy-4'>
                      <div className='col'>
                        <div className='pd-single-info'>
                          <div className='info-icon'>
                            <img src='assets/images/icons/pd1.svg' alt='' />
                          </div>
                          <div className='info'>
                            <h6>Duration</h6>
                            <span>4 Days</span>
                          </div>
                        </div>
                      </div>
                      <div className='col'>
                        <div className='pd-single-info'>
                          <div className='info-icon'>
                            <img src='assets/images/icons/pd2.svg' alt='' />
                          </div>
                          <div className='info'>
                            <h6>Tour Type</h6>
                            <span>Daily Tour</span>
                          </div>
                        </div>
                      </div>
                      <div className='col'>
                        <div className='pd-single-info'>
                          <div className='info-icon'>
                            <img src='assets/images/icons/pd3.svg' alt='' />
                          </div>
                          <div className='info'>
                            <h6>Group Size</h6>
                            <span>30 People</span>
                          </div>
                        </div>
                      </div>
                      <div className='col'>
                        <div className='pd-single-info'>
                          <div className='info-icon'>
                            <img src='assets/images/icons/pd4.svg' alt='' />
                          </div>
                          <div className='info'>
                            <h6>Tour Guide</h6>
                            <span>05 People</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className='pd-thumb'>
                      <img src='assets/images/package/pd-thumb.png' alt='' />
                    </div>
                    <div className='header-bottom'>
                      <div className='pd-lavel d-flex justify-content-between align-items-center flex-wrap gap-2'>
                        <h5 className='location'>
                          <i className='bi bi-geo-alt' /> Mount Dtna, Spain
                        </h5>
                        <ul className='d-flex align-items-center rating'>
                          <li>
                            <i className='bi bi-star-fill' />
                          </li>
                          <li>
                            <i className='bi bi-star-fill' />
                          </li>
                          <li>
                            <i className='bi bi-star-fill' />
                          </li>
                          <li>
                            <i className='bi bi-star-fill' />
                          </li>
                          <li>
                            <i className='bi bi-star-fill' />
                          </li>
                        </ul>
                      </div>
                      <h2 className='pd-title'>
                        San Francisco Golden Gate Bridge.
                      </h2>
                    </div>
                  </div>
                  <div className='package-details-tabs'>
                    <ul
                      className='nav nav-pills tab-switchers gap-xxl-4 gap-3'
                      id='pills-tab'
                      role='tablist'
                    >
                      <li className='nav-item' role='presentation'>
                        <button
                          className='nav-link active'
                          id='pills-package1'
                          data-bs-toggle='pill'
                          data-bs-target='#pill-body1'
                          type='button'
                          role='tab'
                          aria-controls='pill-body1'
                          aria-selected='true'
                        >
                          <i className='bi bi-info-lg' /> Information
                        </button>
                      </li>
                      <li className='nav-item' role='presentation'>
                        <button
                          className='nav-link'
                          id='pills-package2'
                          data-bs-toggle='pill'
                          data-bs-target='#pill-body2'
                          type='button'
                          role='tab'
                          aria-controls='pill-body2'
                          aria-selected='false'
                        >
                          <i className='bi bi-file-earmark-spreadsheet' />{' '}
                          Travel Plan
                        </button>
                      </li>
                      <li className='nav-item' role='presentation'>
                        <button
                          className='nav-link'
                          id='pills-package3'
                          data-bs-toggle='pill'
                          data-bs-target='#pill-body3'
                          type='button'
                          role='tab'
                          aria-controls='pill-body3'
                          aria-selected='false'
                        >
                          <i className='bi bi-images' /> Tour Gallary
                        </button>
                      </li>
                      <li className='nav-item' role='presentation'>
                        <button
                          className='nav-link'
                          id='pills-package4'
                          data-bs-toggle='pill'
                          data-bs-target='#pill-body4'
                          type='button'
                          role='tab'
                          aria-controls='pill-body4'
                          aria-selected='false'
                        >
                          <i className='bi bi-geo-alt' /> Location
                        </button>
                      </li>
                    </ul>
                    <div className='tab-content' id='pills-tabContent'>
                      <div
                        className='tab-pane fade show active package-info-tab mt-3'
                        id='pill-body1'
                        role='tabpanel'
                        aria-labelledby='pills-package1'
                      >
                        <h3 className='d-subtitle'>Package Details</h3>
                        <p>
                          Pellentesque accumsan magna in augue sagittis, non
                          fringilla eros molestie. Sed feugiat mi nec ex
                          vehicula, nec vestibulum orci semper. Class aptent
                          taciti sociosqu ad litora torquent per conubia nostra,
                          per inceptos himenaeos. Donec tristique commodo
                          fringilla. Duis aliquet varius mauris eget rutrum.
                          Nullam sit amet justo consequat, bibendum orci in,
                          convallis enim. Proin convallis neque viverra finibus
                          cursus. Mauris lacinia lacinia erat in finibus. In non
                          enim libero.Pellentesque accumsan magna in augue
                          sagittis, non fringilla eros molestie. Sed feugiat mi
                          nec ex vehicula, nec vestibulum orci semper. Class
                          aptent taciti sociosqu ad litora torquent per conubia
                          nostra, per inceptos himenaeos. Donec tristique
                          commodo fringilla. Duis aliquet varius mauris eget
                          rutrum. Nullam sit amet justo consequat, bibendum orci
                          in, convallis enim. Proin convallis neque viverra
                          finibus cursus. Mauris lacinia lacinia erat in
                          finibus. In non enim libero.
                        </p>
                        <div className='p-info-featured-img row position-relative g-4 row-cols-1 row-cols-sm-2'>
                          <div className='col'>
                            <div className='featured-img'>
                              <img
                                src='assets/images/package/feat-img1.png'
                                alt=''
                              />
                            </div>
                          </div>
                          <div className='col'>
                            <div className='featured-img'>
                              <img
                                src='assets/images/package/feat-img2.png'
                                alt=''
                              />
                            </div>
                          </div>
                          <div className='featured-video position-absolute'>
                            <img
                              src='assets/images/package/feat-img3.png'
                              alt=''
                            />
                            <div className='video-overlay'>
                              <a
                                href='https://www.youtube.com/watch?v=_sI_Ps7JSEk'
                                className='play-icon video-popup'
                                data-fancybox
                              >
                                <i className='bi bi-play-fill' />
                              </a>
                            </div>
                          </div>
                        </div>
                        <table className='table package-info-table mb-0'>
                          <tbody>
                            <tr>
                              <th>Destination</th>
                              <td>New York City</td>
                            </tr>
                            <tr>
                              <th>Depature</th>
                              <td>Yes Required</td>
                            </tr>
                            <tr>
                              <th>Departure Time</th>
                              <td>01 April, 2021 10.00AM</td>
                            </tr>
                            <tr>
                              <th>Return Time</th>
                              <td>08 April, 2021 10.00AM</td>
                            </tr>
                            <tr>
                              <th>Included</th>
                              <td>
                                <ul className='included-list'>
                                  <li>
                                    <i className='bi bi-check2' />
                                    Specilaized Bilingual Guide
                                  </li>
                                  <li>
                                    <i className='bi bi-check2' />
                                    Private Transport
                                  </li>
                                  <li>
                                    <i className='bi bi-check2' /> Entrance Fees
                                  </li>
                                  <li>
                                    <i className='bi bi-check2' /> Box
                                    Lunch,Water,Dinner and Snacks
                                  </li>
                                </ul>
                              </td>
                            </tr>
                            <tr>
                              <th>Excluded</th>
                              <td>
                                <ul className='excluded-list'>
                                  <li>
                                    <i className='bi bi-x-lg' /> Additional
                                    Services
                                  </li>
                                  <li>
                                    <i className='bi bi-x-lg' /> Insurance
                                  </li>
                                  <li>
                                    <i className='bi bi-x-lg' /> Drink
                                  </li>
                                  <li>
                                    <i className='bi bi-x-lg' /> Tickets
                                  </li>
                                </ul>
                              </td>
                            </tr>
                            <tr>
                              <td colSpan={2} className='tour-transport-col'>
                                <div className='tour-transport d-flex align-items-center justify-content-center'>
                                  <img
                                    src='assets/images/icons/bus.svg'
                                    alt=''
                                  />
                                  <span>Travel With Bus</span>
                                </div>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                        <div className='rating-overview'>
                          <h3 className='d-subtitle'>Overview</h3>
                          <div className='rating-overview-row row g-0'>
                            <div className='col-lg-4 col-md-5 col-sm-5'>
                              <div className='total-rating d-flex justify-content-center align-items-center flex-column h-100'>
                                <h3>10.00</h3>
                                <h5>Excellent</h5>
                              </div>
                            </div>
                            <div className='col-lg-8 col-md-7 col-sm-7'>
                              <div className='rating-info'>
                                <div className='rating-box'>
                                  <h6>
                                    Accommodation <span>5.0</span>
                                  </h6>
                                  <div className='rating-bar' />
                                </div>
                                <div className='rating-box'>
                                  <h6>
                                    Transport <span>5.0</span>
                                  </h6>
                                  <div className='rating-bar' />
                                </div>
                                <div className='rating-box'>
                                  <h6>
                                    Comfort <span>5.0</span>
                                  </h6>
                                  <div className='rating-bar' />
                                </div>
                                <div className='rating-box'>
                                  <h6>
                                    Hospitality <span>5.0</span>
                                  </h6>
                                  <div className='rating-bar' />
                                </div>
                                <div className='rating-box'>
                                  <h6>
                                    Food <span>5.0</span>
                                  </h6>
                                  <div className='rating-bar' />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className='comment-section'>
                          <ul className='comment-list'>
                            <li className='single-comment d-flex flex-sm-row flex-column'>
                              <div className='commmentor'>
                                <img
                                  src='assets/images/reviewer/commertor2.png'
                                  alt=''
                                />
                              </div>
                              <div className='comment mt-4 mt-sm-0'>
                                <div className='d-flex align-items-center justify-content-between'>
                                  <div className='info'>
                                    <h6>Silvia Perry</h6>
                                    <span>2 April, 2021 10.00PM</span>
                                  </div>
                                  <ul className='rating d-flex'>
                                    <li>
                                      <i className='bi bi-star-fill' />
                                    </li>
                                    <li>
                                      <i className='bi bi-star-fill' />
                                    </li>
                                    <li>
                                      <i className='bi bi-star-fill' />
                                    </li>
                                    <li>
                                      <i className='bi bi-star-fill' />
                                    </li>
                                    <li>
                                      <i className='bi bi-star-fill' />
                                    </li>
                                  </ul>
                                </div>
                                <p>
                                  Morbi dictum pulvinar velit, id mollis lorem
                                  faucibus acUt sed lacinia ipsum. cibuses acUt
                                  sed lacinia ipsum. Suspendisse
                                </p>
                                <div className='reply-btn'>
                                  <a href='#'>
                                    <i className='bi bi-reply-all-fill' /> Reply
                                  </a>
                                </div>
                              </div>
                            </li>
                            <li className='single-comment d-flex flex-sm-row flex-column'>
                              <div className='commmentor'>
                                <img
                                  src='assets/images/reviewer/commertor3.png'
                                  alt=''
                                />
                              </div>
                              <div className='comment mt-4 mt-sm-0'>
                                <div className='d-flex align-items-center justify-content-between'>
                                  <div className='info'>
                                    <h6>Lilyan Antu</h6>
                                    <span>2 April, 2021 10.00PM</span>
                                  </div>
                                  <ul className='rating d-flex'>
                                    <li>
                                      <i className='bi bi-star-fill' />
                                    </li>
                                    <li>
                                      <i className='bi bi-star-fill' />
                                    </li>
                                    <li>
                                      <i className='bi bi-star-fill' />
                                    </li>
                                    <li>
                                      <i className='bi bi-star-fill' />
                                    </li>
                                    <li>
                                      <i className='bi bi-star-fill' />
                                    </li>
                                  </ul>
                                </div>
                                <p>
                                  Morbi dictum pulvinar velit, id mollis lorem
                                  faucibus acUt sed lacinia ipsum. cibuses acUt
                                  sed lacinia ipsum. Suspendisse
                                </p>
                                <div className='reply-btn'>
                                  <a href='#'>
                                    <i className='bi bi-reply-all-fill' /> Reply
                                  </a>
                                </div>
                              </div>
                            </li>
                            <li className='single-comment d-flex flex-sm-row flex-column'>
                              <div className='commmentor'>
                                <img
                                  src='assets/images/reviewer/commertor1.png'
                                  alt=''
                                />
                              </div>
                              <div className='comment mt-4 mt-sm-0'>
                                <div className='d-flex align-items-center justify-content-between'>
                                  <div className='info'>
                                    <h6>Adama Grof</h6>
                                    <span>2 April, 2021 10.00PM</span>
                                  </div>
                                  <ul className='rating d-flex'>
                                    <li>
                                      <i className='bi bi-star-fill' />
                                    </li>
                                    <li>
                                      <i className='bi bi-star-fill' />
                                    </li>
                                    <li>
                                      <i className='bi bi-star-fill' />
                                    </li>
                                    <li>
                                      <i className='bi bi-star-fill' />
                                    </li>
                                    <li>
                                      <i className='bi bi-star-fill' />
                                    </li>
                                  </ul>
                                </div>
                                <p>
                                  Morbi dictum pulvinar velit, id mollis lorem
                                  faucibus acUt sed lacinia ipsum. cibuses acUt
                                  sed lacinia ipsum. Suspendisse
                                </p>
                                <div className='reply-btn'>
                                  <a href='#'>
                                    <i className='bi bi-reply-all-fill' /> Reply
                                  </a>
                                </div>
                              </div>
                            </li>
                          </ul>
                          <div className='comment-btn text-center'>
                            <a href='#'>View All Comment</a>
                          </div>
                        </div>
                        <form action='#' id='comment_form' method='post'>
                          <div className='comment-form mt-110'>
                            <h4>Leave Your Comment</h4>
                            <div className='row'>
                              <div className='col-lg-6'>
                                <div className='custom-input-group'>
                                  <input
                                    type='text'
                                    placeholder='Your Full Name'
                                    id='name1'
                                  />
                                </div>
                              </div>
                              <div className='col-lg-6'>
                                <div className='custom-input-group'>
                                  <input
                                    type='text'
                                    placeholder='Your Email'
                                    id='email1'
                                  />
                                </div>
                              </div>
                            </div>
                            <div className='custom-input-group'>
                              <input
                                type='text'
                                placeholder='Tour Type'
                                id='type'
                              />
                            </div>
                            <div className='custom-input-group'>
                              <textarea
                                cols={20}
                                rows={7}
                                placeholder='Write Message'
                                defaultValue={''}
                              />
                            </div>
                            <ul className='form-rating d-flex'>
                              <li>
                                <i className='bi bi-star' />
                              </li>
                              <li>
                                <i className='bi bi-star' />
                              </li>
                              <li>
                                <i className='bi bi-star' />
                              </li>
                              <li>
                                <i className='bi bi-star' />
                              </li>
                              <li>
                                <i className='bi bi-star' />
                              </li>
                            </ul>
                            <div className='custom-input-group'>
                              <div className='submite-btn'>
                                <button type='submit'>Send Message</button>
                              </div>
                            </div>
                          </div>
                        </form>
                      </div>
                      <div
                        className='tab-pane fade package-plan-tab tab-body mt-3'
                        id='pill-body2'
                        role='tabpanel'
                        aria-labelledby='pills-package2'
                      >
                        <h3 className='d-subtitle'>Details</h3>
                        <p>
                          Pellentesque accumsan magna in augue sagittis, non
                          fringilla eros molestie. Sed feugiat mi nec ex
                          vehicula, nec vestibulum orci semper. Class aptent
                          taciti sociosqu ad litora torquent per conubia nostra,
                          per inceptos himenaeos. Donec tristique commodo
                          fringilla. Duis aliquet varius mauris eget rutrum.
                          Nullam sit amet justo consequat, bibendum orci in,
                          convallis enim. Proin convallis neque viverra finibus
                          cursus. Mauris lacinia lacinia erat in finibus.
                        </p>
                        <div
                          className='accordion plans-accordion'
                          id='planAccordion'
                        >
                          <div className='accordion-item plans-accordion-single'>
                            <div
                              className='accordion-header'
                              id='planHeadingOne'
                            >
                              <div
                                className='accordion-button'
                                data-bs-toggle='collapse'
                                data-bs-target='#planCollapse1'
                                aria-expanded='true'
                                role='navigation'
                              >
                                <div className='paln-index-circle'>
                                  <h4>01</h4>
                                </div>
                                <div className='plan-title'>
                                  <h5>DAY 1 : Departure And Small Tour</h5>
                                  <h6>10.00 AM to 10.00 PM</h6>
                                </div>
                              </div>
                            </div>
                            <div
                              id='planCollapse1'
                              className='accordion-collapse collapse show'
                              aria-labelledby='planHeadingOne'
                              data-bs-parent='#planAccordion'
                            >
                              <div className='accordion-body plan-info'>
                                <p>
                                  Pellentesque accumsan magna in augue sagittis,
                                  non fringilla eros molestie. Sed feugiat mi
                                  nec ex vehicula, nec vestibulum orci semper.
                                  Class aptent taciti sociosqu ad litora
                                  torquent per conubia nostra, per inceptos
                                  himenaeos. Donec tristique commodo fringilla.
                                </p>
                                <ul>
                                  <li>
                                    <i className='bi bi-check-lg' /> Specilaized
                                    Bilingual Guide
                                  </li>
                                  <li>
                                    <i className='bi bi-check-lg' /> Private
                                    Transport
                                  </li>
                                  <li>
                                    <i className='bi bi-check-lg' /> Entrance
                                    Fees
                                  </li>
                                  <li>
                                    <i className='bi bi-check-lg' /> Box
                                    Lunch,Water,Dinner and Snacks
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                          <div className='accordion-item plans-accordion-single'>
                            <div
                              className='accordion-header'
                              id='planHeadingTwo'
                            >
                              <div
                                className='accordion-button collapsed'
                                data-bs-toggle='collapse'
                                data-bs-target='#planCollapse2'
                                aria-expanded='true'
                                role='navigation'
                              >
                                <div className='paln-index-circle'>
                                  <h4>02</h4>
                                </div>
                                <div className='plan-title'>
                                  <h5>DAY 1 : Departure And Small Tour</h5>
                                  <h6>10.00 AM to 10.00 PM</h6>
                                </div>
                              </div>
                            </div>
                            <div
                              id='planCollapse2'
                              className='accordion-collapse collapse'
                              aria-labelledby='planHeadingTwo'
                              data-bs-parent='#planAccordion'
                            >
                              <div className='accordion-body plan-info'>
                                <p>
                                  Pellentesque accumsan magna in augue sagittis,
                                  non fringilla eros molestie. Sed feugiat mi
                                  nec ex vehicula, nec vestibulum orci semper.
                                  Class aptent taciti sociosqu ad litora
                                  torquent per conubia nostra, per inceptos
                                  himenaeos. Donec tristique commodo fringilla.
                                </p>
                                <ul>
                                  <li>
                                    <i className='bi bi-check-lg' /> Specilaized
                                    Bilingual Guide
                                  </li>
                                  <li>
                                    <i className='bi bi-check-lg' /> Private
                                    Transport
                                  </li>
                                  <li>
                                    <i className='bi bi-check-lg' /> Entrance
                                    Fees
                                  </li>
                                  <li>
                                    <i className='bi bi-check-lg' /> Box
                                    Lunch,Water,Dinner and Snacks
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                          <div className='accordion-item plans-accordion-single'>
                            <div
                              className='accordion-header'
                              id='planHeadingThree'
                            >
                              <div
                                className='accordion-button collapsed'
                                data-bs-toggle='collapse'
                                data-bs-target='#planCollapse3'
                                aria-expanded='true'
                                aria-controls='planCollapse1'
                                role='navigation'
                              >
                                <div className='paln-index-circle'>
                                  <h4>03</h4>
                                </div>
                                <div className='plan-title'>
                                  <h5>DAY 1 : Departure And Small Tour</h5>
                                  <h6>10.00 AM to 10.00 PM</h6>
                                </div>
                              </div>
                            </div>
                            <div
                              id='planCollapse3'
                              className='accordion-collapse collapse'
                              aria-labelledby='planHeadingThree'
                              data-bs-parent='#planAccordion'
                            >
                              <div className='accordion-body plan-info'>
                                <p>
                                  Pellentesque accumsan magna in augue sagittis,
                                  non fringilla eros molestie. Sed feugiat mi
                                  nec ex vehicula, nec vestibulum orci semper.
                                  Class aptent taciti sociosqu ad litora
                                  torquent per conubia nostra, per inceptos
                                  himenaeos. Donec tristique commodo fringilla.
                                </p>
                                <ul>
                                  <li>
                                    <i className='bi bi-check-lg' /> Specilaized
                                    Bilingual Guide
                                  </li>
                                  <li>
                                    <i className='bi bi-check-lg' /> Private
                                    Transport
                                  </li>
                                  <li>
                                    <i className='bi bi-check-lg' /> Entrance
                                    Fees
                                  </li>
                                  <li>
                                    <i className='bi bi-check-lg' /> Box
                                    Lunch,Water,Dinner and Snacks
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                          <div className='accordion-item plans-accordion-single'>
                            <div
                              className='accordion-header'
                              id='planHeadingFour'
                            >
                              <div
                                className='accordion-button collapsed'
                                data-bs-toggle='collapse'
                                data-bs-target='#planCollapse4'
                                aria-expanded='true'
                                role='navigation'
                              >
                                <div className='paln-index-circle'>
                                  <h4>04</h4>
                                </div>
                                <div className='plan-title'>
                                  <h5>DAY 1 : Departure And Small Tour</h5>
                                  <h6>10.00 AM to 10.00 PM</h6>
                                </div>
                              </div>
                            </div>
                            <div
                              id='planCollapse4'
                              className='accordion-collapse collapse'
                              aria-labelledby='planHeadingFour'
                              data-bs-parent='#planAccordion'
                            >
                              <div className='accordion-body plan-info'>
                                <p>
                                  Pellentesque accumsan magna in augue sagittis,
                                  non fringilla eros molestie. Sed feugiat mi
                                  nec ex vehicula, nec vestibulum orci semper.
                                  Class aptent taciti sociosqu ad litora
                                  torquent per conubia nostra, per inceptos
                                  himenaeos. Donec tristique commodo fringilla.
                                </p>
                                <ul>
                                  <li>
                                    <i className='bi bi-check-lg' /> Specilaized
                                    Bilingual Guide
                                  </li>
                                  <li>
                                    <i className='bi bi-check-lg' /> Private
                                    Transport
                                  </li>
                                  <li>
                                    <i className='bi bi-check-lg' /> Entrance
                                    Fees
                                  </li>
                                  <li>
                                    <i className='bi bi-check-lg' /> Box
                                    Lunch,Water,Dinner and Snacks
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                          <div className='accordion-item plans-accordion-single'>
                            <div
                              className='accordion-header'
                              id='planHeadingFive'
                            >
                              <div
                                className='accordion-button collapsed'
                                data-bs-toggle='collapse'
                                data-bs-target='#planCollapse5'
                                aria-expanded='true'
                                role='navigation'
                              >
                                <div className='paln-index-circle'>
                                  <h4>04</h4>
                                </div>
                                <div className='plan-title'>
                                  <h5>DAY 1 : Departure And Small Tour</h5>
                                  <h6>10.00 AM to 10.00 PM</h6>
                                </div>
                              </div>
                            </div>
                            <div
                              id='planCollapse5'
                              className='accordion-collapse collapse'
                              aria-labelledby='planHeadingFive'
                              data-bs-parent='#planAccordion'
                            >
                              <div className='accordion-body plan-info'>
                                <p>
                                  Pellentesque accumsan magna in augue sagittis,
                                  non fringilla eros molestie. Sed feugiat mi
                                  nec ex vehicula, nec vestibulum orci semper.
                                  Class aptent taciti sociosqu ad litora
                                  torquent per conubia nostra, per inceptos
                                  himenaeos. Donec tristique commodo fringilla.
                                </p>
                                <ul>
                                  <li>
                                    <i className='bi bi-check-lg' /> Specilaized
                                    Bilingual Guide
                                  </li>
                                  <li>
                                    <i className='bi bi-check-lg' /> Private
                                    Transport
                                  </li>
                                  <li>
                                    <i className='bi bi-check-lg' /> Entrance
                                    Fees
                                  </li>
                                  <li>
                                    <i className='bi bi-check-lg' /> Box
                                    Lunch,Water,Dinner and Snacks
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className='tab-pane fade package-gallary-tab mt-3'
                        id='pill-body3'
                        role='tabpanel'
                        aria-labelledby='pills-package3'
                      >
                        <div className='row g-4'>
                          <div className='col-6'>
                            <div className='package-gallary-item'>
                              <a
                                href='assets/images/gallary/pgl-1.png'
                                data-fancybox='gallery'
                                data-caption='Caption Here'
                              >
                                <img
                                  src='assets/images/gallary/pgl-1.png'
                                  alt=''
                                />
                              </a>
                            </div>
                          </div>
                          <div className='col-6'>
                            <div className='package-gallary-item'>
                              <a
                                href='assets/images/gallary/pgl-2.png'
                                data-fancybox='gallery'
                                data-caption='Caption Here'
                              >
                                <img
                                  src='assets/images/gallary/pgl-2.png'
                                  alt=''
                                />
                              </a>
                            </div>
                          </div>
                          <div className='col-12'>
                            <div className='package-gallary-item'>
                              <a
                                href='assets/images/gallary/pgx-1.png'
                                data-fancybox='gallery'
                                data-caption='Caption Here'
                              >
                                <img
                                  src='assets/images/gallary/pgx-1.png'
                                  alt=''
                                />
                              </a>
                            </div>
                          </div>
                          <div className='col-6'>
                            <div className='package-gallary-item'>
                              <a
                                href='assets/images/gallary/pgl-3.png'
                                data-fancybox='gallery'
                                data-caption='Caption Here'
                              >
                                <img
                                  src='assets/images/gallary/pgl-3.png'
                                  alt=''
                                />
                              </a>
                            </div>
                          </div>
                          <div className='col-6'>
                            <div className='package-gallary-item'>
                              <a
                                href='assets/images/gallary/pgl-4.png'
                                data-fancybox='gallery'
                                data-caption='Caption Here'
                              >
                                <img
                                  src='assets/images/gallary/pgl-4.png'
                                  alt=''
                                />
                              </a>
                            </div>
                          </div>
                          <div className='col-12'>
                            <div className='package-gallary-item'>
                              <a
                                href='assets/images/gallary/pgx-2.png'
                                data-fancybox='gallery'
                                data-caption='Caption Here'
                              >
                                <img
                                  src='assets/images/gallary/pgx-2.png'
                                  alt=''
                                />
                              </a>
                            </div>
                          </div>
                          <div className='col-6'>
                            <div className='package-gallary-item'>
                              <a
                                href='assets/images/gallary/pgl-5.png'
                                data-fancybox='gallery'
                                data-caption='Caption Here'
                              >
                                <img
                                  src='assets/images/gallary/pgl-5.png'
                                  alt=''
                                />
                              </a>
                            </div>
                          </div>
                          <div className='col-6'>
                            <div className='package-gallary-item'>
                              <a
                                href='assets/images/gallary/pgl-6.png'
                                data-fancybox='gallery'
                                data-caption='Caption Here'
                              >
                                <img
                                  src='assets/images/gallary/pgl-6.png'
                                  alt=''
                                />
                              </a>
                            </div>
                          </div>
                          <div className='col-12'>
                            <div className='package-gallary-item'>
                              <a
                                href='assets/images/gallary/pgx-3.png'
                                data-fancybox='gallery'
                                data-caption='Caption Here'
                              >
                                <img
                                  src='assets/images/gallary/pgx-3.png'
                                  alt=''
                                />
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className='tab-pane fade package-location-tab mt-3'
                        id='pill-body4'
                        role='tabpanel'
                        aria-labelledby='pills-package4'
                      >
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
              </div>
              <div className='col-lg-4'>
                <div className='package-sidebar'>
                  <aside className='package-widget-style-2 widget-form mt-30'>
                    <div className='widget-title text-center d-flex justify-content-between'>
                      <h4>Book This Tour</h4>
                      <h3 className='widget-lavel'>
                        $75 <span>Per Person</span>
                      </h3>
                    </div>
                    <div className='widget-body'>
                      <form action='#' method='post' id='booking-form'>
                        <div className='booking-form-wrapper'>
                          <div className='custom-input-group'>
                            <input
                              type='text'
                              placeholder='Your Full Name'
                              id='name'
                            />
                          </div>
                          <div className='custom-input-group'>
                            <input
                              type='email'
                              placeholder='Your Email'
                              id='email'
                            />
                          </div>
                          <div className='custom-input-group'>
                            <input type='tel' placeholder='Phone' id='phone' />
                          </div>
                          <div className='custom-input-group'>
                            <i className='bi bi-chevron-down' />
                            <select id='ticket_type'>
                              <option selected>Tickets Type</option>
                              <option value={1}>Tickets Type 1</option>
                              <option value={2}>Tickets Type 2</option>
                              <option value={3}>Tickets Type 3</option>
                            </select>
                          </div>
                          <div className='row'>
                            <div className='col-sm-6'>
                              <div className='custom-input-group'>
                                <i className='bi bi-chevron-down' />
                                <select id='truist-adult'>
                                  <option selected>Adult</option>
                                  <option value={1}>1</option>
                                  <option value={2}>2</option>
                                  <option value={3}>3</option>
                                </select>
                              </div>
                            </div>
                            <div className='col-sm-6'>
                              <div className='custom-input-group'>
                                <i className='bi bi-chevron-down' />
                                <select id='tourist-child'>
                                  <option selected>Child</option>
                                  <option value={1}>1</option>
                                  <option value={2}>2</option>
                                  <option value={3}>3</option>
                                </select>
                              </div>
                            </div>
                          </div>
                          <div className='custom-input-group'>
                            <i className='bi bi-calendar3' />
                            <input
                              placeholder='Select your date'
                              type='text'
                              name='checkIn'
                              id='datepicker2'
                              defaultValue
                              className='calendar'
                            />
                          </div>
                          <div className='custom-input-group'>
                            <textarea
                              cols={20}
                              rows={7}
                              placeholder='Your message'
                              defaultValue={''}
                            />
                          </div>
                          <div className='custom-input-group'>
                            <div className='submite-btn'>
                              <button type='submit'>Book Now</button>
                            </div>
                          </div>
                        </div>
                      </form>
                    </div>
                  </aside>
                  <aside className='package-widget-style-2 widget-recent-package-entries mt-30'>
                    <div className='widget-title text-center'>
                      <h4>Offer Package</h4>
                    </div>
                    <div className='widget-body'>
                      <ul>
                        <li className='package-sm'>
                          <div className='thumb'>
                            <a href='package-details.html'>
                              <img
                                src='assets/images/package/package-sm4.png'
                                alt=''
                              />
                            </a>
                          </div>
                          <div className='info'>
                            <h6>
                              <a href='package-details.html'>
                                San Francisco Golden Gate Bridge, cable cars
                                &amp; fog
                              </a>
                            </h6>
                            <div className='price'>
                              <span>From</span>
                              <h6>
                                $67.00 <span>Per Person</span>
                              </h6>
                            </div>
                          </div>
                        </li>
                        <li className='package-sm'>
                          <div className='thumb'>
                            <a href='package-details.html'>
                              <img
                                src='assets/images/package/package-sm3.png'
                                alt=''
                              />
                            </a>
                          </div>
                          <div className='info'>
                            <h6>
                              <a href='package-details.html'>
                                Praesent porttitor tellus sed ande ultrices
                                pulvinar magna mauris.
                              </a>
                            </h6>
                            <div className='price'>
                              <span>From</span>
                              <h6>
                                $88.00 <span>Per Person</span>
                              </h6>
                            </div>
                          </div>
                        </li>
                        <li className='package-sm'>
                          <div className='thumb'>
                            <a href='package-details.html'>
                              <img
                                src='assets/images/package/package-sm2.png'
                                alt=''
                              />
                            </a>
                          </div>
                          <div className='info'>
                            <h6>
                              <a href='package-details.html'>
                                Vestibulum luctus hendrerit vitae neque, et
                                blandit orci tincidunt.
                              </a>
                            </h6>
                            <div className='price'>
                              <span>From</span>
                              <h6>
                                $91.00 <span>Per Person</span>
                              </h6>
                            </div>
                          </div>
                        </li>
                        <li className='package-sm'>
                          <div className='thumb'>
                            <a href='package-details.html'>
                              <img
                                src='assets/images/package/package-sm1.png'
                                alt=''
                              />
                            </a>
                          </div>
                          <div className='info'>
                            <h6>
                              <a href='package-details.html'>
                                San Francisco Golden Gate Bridge, cable cars
                                &amp; fog
                              </a>
                            </h6>
                            <div className='price'>
                              <span>From</span>
                              <h6>
                                $67.00 <span>Per Person</span>
                              </h6>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </aside>
                  <aside className='package-widget-style-2 widget-tag-cloud mt-30'>
                    <div className='widget-title text-center'>
                      <h4>Package Tag</h4>
                    </div>
                    <div className='tag-cloud widget-body'>
                      <a href='#'>Adventure</a>
                      <a href='#'>Trip</a>
                      <a href='#'>Guided</a>
                      <a href='#'>Historical</a>
                      <a href='#'>Road Trips</a>
                      <a href='#'>Tourist</a>
                      <a href='#'>Weekend</a>
                      <a href='#'>Hill</a>
                    </div>
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

export default PackageDetails;

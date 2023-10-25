import React from 'react';
import navbarData from '../data/navbar.data';
import { Link } from 'react-router-dom';
const Navbar = () => {
  return (
    <>
      <div className='main-searchbar-wrapper'>
        <div className='container'>
          <div className='multi-main-searchber'>
            <div className='main-searchbar-close search-toggle'>
              <i className='bi bi-x-lg' />
            </div>
            <form action='#' method='post' id='main_searchbar'>
              <div className='row g-4'>
                <div className='col-lg-10'>
                  <div className='row gx-0 gy-4'>
                    <div className='col-lg-3 col-md-6'>
                      <div className='search-box-single destination-box'>
                        <div className='searchbox-icon '>
                          <i className='bi bi-geo-alt' />
                        </div>
                        <div className='searchbox-input'>
                          <label htmlFor='deatination_drop'>Destination</label>
                          <select
                            data-placeholder='Where Are You Going?'
                            id='deatination_drop'
                          >
                            <option value>Where Are You Going?</option>
                            <optgroup label='India'>
                              <option>Solt Lake</option>
                              <option>Kolkata</option>
                              <option>Mohamia</option>
                              <option>Mumbai</option>
                              <option>New Delhi</option>
                            </optgroup>
                            <optgroup label=' Bangladash'>
                              <option>Cox's Bazer</option>
                              <option>Rangamati</option>
                              <option>Banderban</option>
                            </optgroup>
                          </select>
                        </div>
                      </div>
                    </div>
                    <div className='col-lg-3 col-md-6'>
                      <div className='search-box-single type-box'>
                        <div className='searchbox-icon'>
                          <i className='bi bi-text-paragraph' />
                        </div>
                        <div className='searchbox-input'>
                          <label htmlFor='activity-dropdown'>Travel Type</label>
                          <select
                            className='defult-select-drowpown'
                            data-placeholder='All Activity'
                            id='activity-dropdown'
                          >
                            <option value>All Activity</option>
                            <option value={1}>Type 1</option>
                            <option value={2}>Type 2</option>
                            <option value={3}>Type 3</option>
                            <option value={4}>Type 4</option>
                          </select>
                        </div>
                      </div>
                    </div>
                    <div className='col-lg-3 col-md-6'>
                      <div className='search-box-single type-box'>
                        <div className='searchbox-icon'>
                          <i className='bi bi-person-plus' />
                        </div>
                        <div className='searchbox-input'>
                          <label htmlFor='person-dropdown'>Person</label>
                          <select
                            className='defult-select-drowpown'
                            id='person-dropdown'
                          >
                            <option selected value={0}>
                              01
                            </option>
                            <option value={1}>02</option>
                            <option value={2}>03</option>
                            <option value={3}>04</option>
                            <option value={4}>05</option>
                          </select>
                        </div>
                      </div>
                    </div>
                    <div className='col-lg-3 col-md-6'>
                      <div className='search-box-single date-box'>
                        <div className='searchbox-icon'>
                          <i className='bi bi-capslock' />
                        </div>
                        <div className='searchbox-input date-picker-input'>
                          <label htmlFor='datepicker'>When</label>
                          <input
                            placeholder='Select your date'
                            type='text'
                            name='checkIn'
                            id='datepicker'
                            defaultValue
                            className='calendar'
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='col-lg-2'>
                  <div className='main-form-submit'>
                    <button type='submit'>Find Now</button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className='category-sidebar-wrapper'>
        <div className='category-sidebar'>
          <div className='category-header d-flex justify-content-between align-items-center'>
            <h4>Category</h4>
            <div className='category-toggle'>
              <i className='bi bi-x-lg' />
            </div>
          </div>
          <div className='row row-cols-lg-3 row-cols-2 gy-5 mt-3'>
            <div className='col'>
              <a className='category-box' href='package.html'>
                <div className='cate-icon mx-auto'>
                  <img src='assets/images/icons/cate1.svg' alt='' />
                </div>
                <h5>Adventure</h5>
              </a>
            </div>
            <div className='col'>
              <a className='category-box' href='package.html'>
                <div className='cate-icon mx-auto'>
                  <img src='assets/images/icons/cate2.svg' alt='' />
                </div>
                <h5>Group Tour</h5>
              </a>
            </div>
            <div className='col'>
              <a className='category-box' href='package.html'>
                <div className='cate-icon mx-auto'>
                  <img src='assets/images/icons/cate3.svg' alt='' />
                </div>
                <h5>Couple Tour</h5>
              </a>
            </div>
            <div className='col'>
              <a className='category-box' href='package.html'>
                <div className='cate-icon mx-auto'>
                  <img src='assets/images/icons/cate4.svg' alt='' />
                </div>
                <h5>Single Tour</h5>
              </a>
            </div>
            <div className='col'>
              <a className='category-box' href='package.html'>
                <div className='cate-icon mx-auto'>
                  <img src='assets/images/icons/cate5.svg' alt='' />
                </div>
                <h5>Honeymoon</h5>
              </a>
            </div>
            <div className='col'>
              <a className='category-box' href='package.html'>
                <div className='cate-icon mx-auto'>
                  <img src='assets/images/icons/cate6.svg' alt='' />
                </div>
                <h5>Sea Beach</h5>
              </a>
            </div>
            <div className='col'>
              <a className='category-box' href='package.html'>
                <div className='cate-icon mx-auto'>
                  <img src='assets/images/icons/cate7.svg' alt='' />
                </div>
                <h5>Mountain Tour</h5>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className='topbar-area topbar-style-one'>
        <div className='container'>
          <div className='row'>
            <div className='col-xl-4 align-items-center d-xl-flex d-none'>
              <div className='topbar-contact-left'>
                <ul className='contact-list'>
                  <li>
                    <i className='bi bi-telephone-fill' />{' '}
                    <a href='tel:+17632275032'>+1 763-227-5032</a>
                  </li>
                  <li>
                    <i className='bi bi-envelope-fill' />{' '}
                    <a href='../../../cdn-cgi/l/email-protection.html#5e373038311e3b263f332e323b703d3133'>
                      <span
                        className='__cf_email__'
                        data-cfemail='e58c8b838aa5809d8488958980cb868a88'
                      >
                        [email&nbsp;protected]
                      </span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className='col-xl-5 col-lg-6 col-md-6 text-xl-center text-md-start text-center'>
              <div className='topbar-ad'>
                <a href='#'>Black Friday Big Offer</a>
              </div>
            </div>
            <div className='col-xl-3 col-lg-6 col-md-6 d-md-flex  d-none align-items-center justify-content-end'>
              <ul className='topbar-social-links'>
                <li>
                  <a href='#'>
                    <i className='bx bxl-facebook' />
                  </a>
                </li>
                <li>
                  <a href='#'>
                    <i className='bx bxl-instagram-alt' />
                  </a>
                </li>
                <li>
                  <a href='#'>
                    <i className='bx bxl-twitter' />
                  </a>
                </li>
                <li>
                  <a href='#'>
                    <i className='bx bxl-whatsapp-square' />
                  </a>
                </li>
                <li>
                  <a href='#'>
                    <i className='bx bxl-pinterest' />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <header>
        <div className='header-area header-style-one'>
          <div className='container'>
            <div className='row'>
              <div className='col-xl-2 col-lg-12 col-md-12 col-sm-12 col-xs-12 align-items-center d-xl-flex d-lg-block'>
                <div className='nav-logo d-flex justify-content-between align-items-center'>
                  <Link to='/'>
                    <img src='assets/images/logo.png' alt='logo' />
                  </Link>
                  <div className='d-flex align-items-center gap-4'>
                    <div className='nav-right d-xl-none'>
                      <ul className='nav-actions'>
                        <li className='category-toggle'>
                          <i className='bx bx-category' />
                        </li>
                        <li className='search-toggle'>
                          <i className='bx bx-search-alt' />
                        </li>
                      </ul>
                    </div>
                    <div className='mobile-menu d-flex '>
                      <a
                        href='javascript:void(0)'
                        className='hamburger d-block d-xl-none'
                      >
                        <span className='h-top' />
                        <span className='h-middle' />
                        <span className='h-bottom' />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className='col-xl-8 col-lg-8 col-md-8 col-sm-6 col-xs-6'>
                <nav className='main-nav float-end'>
                  <div className='inner-logo d-xl-none text-center'>
                    <Link to='/'>
                      <img src='assets/images/logo.png' alt='' />
                    </Link>
                  </div>
                  <ul>
                    {navbarData.map((item, index) => (
                      <li key={index}>
                        <Link to={item.path}>{item.title}</Link>
                      </li>
                    ))}
                  </ul>
                  <div className='inner-contact-options d-xl-none'>
                    <div className='contact-box-inner'>
                      <i className='bi bi-telephone-fill' />{' '}
                      <a href='tel:+17632275032'>+1 763-227-5032</a>
                    </div>
                    <div className='contact-box-inner'>
                      <i className='bi bi-envelope-fill' />{' '}
                      <a href='../../../cdn-cgi/l/email-protection.html#bcd5d2dad3fcd9c4ddd1ccd0d992dfd3d1'>
                        <span
                          className='__cf_email__'
                          data-cfemail='157c7b737a55706d74786579703b767a78'
                        >
                          [email&nbsp;protected]
                        </span>
                      </a>
                    </div>
                  </div>
                </nav>
              </div>
              <div className='col-xl-2'>
                <div className='nav-right float-end d-xl-flex d-none '>
                  <ul className='nav-actions'>
                    <li className='category-toggle'>
                      <i className='bx bx-category' />
                    </li>
                    <li className='search-toggle'>
                      <i className='bx bx-search-alt' />
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;

import React from 'react';
import { Link } from 'react-router-dom';

const BlogDegails = () => {
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
                <li className='breadcrumb-item active'>Blog Details</li>
              </ul>
            </div>
          </div>
        </div>
        <div className='blog-details-wrapper pt-80'>
          <div className='container'>
            <div className='row'>
              <div className='col-lg-8'>
                <div className='blog-details'>
                  <div className='post-header'>
                    <h2 className='post-title'>
                      Sed nec lacinia sapien. Sed pretium lorem at leo Sed
                      necles lacinia sapien. Sed pretium.
                    </h2>
                    <div className='post-meta'>
                      <a href='#' className='blog-writer'>
                        <i className='bi bi-person-circle' /> By John Smith
                      </a>
                      <a href='#' className='blog-comments'>
                        <i className='bi bi-calendar3' /> Novembar 16, 2021
                      </a>
                      <a href='#' className='blog-comments'>
                        <i className='bi bi-chat-left-quote' /> Comment (08)
                      </a>
                    </div>
                  </div>
                  <div className='post-thumb'>
                    <img src='assets/images/blog/blog-thumb-xl1.png' alt='' />
                  </div>
                  <div className='post-body'>
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
                      venenatis hendrerit a id lectus. <br />
                      Suspendissendt blandit interdum. Sed pellentesque at nunc
                      consectetur.Duis rutrum nisl urna. Maecenas vel libero
                      faucibus nisi venenatis hendrerit a id lectus.
                      Suspendissendt blandit interdum. Sed pellentesque at nunc
                      consectetur.Duis rutrum nisl urna. Maecenas vel libero
                      faucibus nisi venenatis hendrerit a id lectus.
                      Suspendissendt blandit interdum. Sed pellentesque at nunc
                      consectetur.Duis rutrum nisl urna.
                    </p>
                    <div className='blog-quote-box-one d-flex flex-column flex-sm-row'>
                      <div className='quote-icon'>
                        <img src='assets/images/icons/blogquote.svg' alt='' />
                      </div>
                      <blockquote>
                        <p>
                          Duis rutrum nisl urna. Maecenas vel libero faucibus
                          nisi venenatis themex hendrerit a id lectus.
                          Suspendissendt blandit interdum. Sed pellentesque at
                          nunc eget consente Duis rutrum nisl urna.
                        </p>
                      </blockquote>
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
                    <div className='post-innner-image'>
                      <img src='assets/images/blog/blog-d-inner.png' alt='' />
                    </div>
                    <h3 className='sub-title'>Things You Can Do to a vibe</h3>
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
                    <div className='blog-quote-box-two text-center'>
                      <div className='quote-icon'>
                        <img src='assets/images/icons/blogquote.svg' alt='' />
                      </div>
                      <blockquote>
                        <p>
                          Duis rutrum nisl urna. Maecenas vel libero faucibus
                          nisi venenatis themex hendrerit a id lectus.
                          Suspendissendt blandit interdum. Sed pellentesque at
                          nunc eget consente Duis rutrum nisl urna.
                        </p>
                      </blockquote>
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
                      Suspendissendt blandit interdum.Suspendissendt blandit
                      interdum. Sed pellentesque at nunc eget moris.
                    </p>
                  </div>
                  <div className='post-footer flex-wrap flex-md-nowrap'>
                    <a href='#' className='post-switcher prev-post'>
                      <i className='bi bi-chevron-left' /> Previous
                    </a>
                    <a href='#' className='next-post-link'>
                      Hendrerit a id lectus. Suspendissendt blandit interdum.
                      Sed pellentesque at nunc eget consente.
                    </a>
                    <a href='#' className='post-switcher next-post'>
                      Next <i className='bi bi-chevron-right' />
                    </a>
                  </div>
                </div>
                <div className='comment-section'>
                  <h4>Comment (05)</h4>
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
                          Morbi dictum pulvinar velit, id mollis lorem faucibus
                          acUt sed lacinia ipsum. cibuses acUt sed lacinia
                          ipsum. Suspendisse
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
                          Morbi dictum pulvinar velit, id mollis lorem faucibus
                          acUt sed lacinia ipsum. cibuses acUt sed lacinia
                          ipsum. Suspendisse
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
                          Morbi dictum pulvinar velit, id mollis lorem faucibus
                          acUt sed lacinia ipsum. cibuses acUt sed lacinia
                          ipsum. Suspendisse
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
                            id='name'
                          />
                        </div>
                      </div>
                      <div className='col-lg-6'>
                        <div className='custom-input-group'>
                          <input
                            type='text'
                            placeholder='Your Email'
                            id='email'
                          />
                        </div>
                      </div>
                    </div>
                    <div className='custom-input-group'>
                      <input type='text' placeholder='Tour Type' id='type' />
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

export default BlogDegails;

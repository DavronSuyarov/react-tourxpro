import React from 'react';

const FaqPage = () => {
  return (
    <>
      <div>
        <div className='breadcrumb breadcrumb-style-one'>
          <div className='container'>
            <div className='col-lg-12 text-center'>
              <h2 className='breadcrumb-title'>FAQ</h2>
              <ul className='d-flex justify-content-center breadcrumb-items'>
                <li className='breadcrumb-item'>
                  <a href='index.html'>Home</a>
                </li>
                <li className='breadcrumb-item active'>FAQ</li>
              </ul>
            </div>
          </div>
        </div>
        <div className='faq-wrapper pt-76'>
          <div className='container'>
            <div className='row'>
              <div className='col-lg-8'>
                <div className='faqs mt-30'>
                  <h2>
                    Frequently <span>Asked </span>
                    <br />
                    Question
                  </h2>
                  <div
                    className='accordion faq-accordion accordion-flush'
                    id='faq-accordion-example'
                  >
                    <div className='accordion-item faq-accordion'>
                      <h2 className='accordion-header' id='faq-headingOne'>
                        <button
                          className='accordion-button collapsed'
                          type='button'
                          data-bs-toggle='collapse'
                          data-bs-target='#faq-collapseOne'
                          aria-expanded='false'
                          aria-controls='faq-collapseOne'
                        >
                          Nulla sed volutpat libero In consequat feugia?
                        </button>
                      </h2>
                      <div
                        id='faq-collapseOne'
                        className='accordion-collapse collapse show'
                        aria-labelledby='faq-headingOne'
                        data-bs-parent='#faq-accordion-example'
                      >
                        <div className='accordion-body'>
                          <p>
                            Duis rutrum nisl urna. Maecenas vel libero faucibus
                            nisi venenatis hendrerit a id lectus. Suspendissendt
                            molestie turpis nec lacinia vehicula. Quisque eget
                            volutpat purus. Aenean blandit magna maximus landi
                            quam facilisis, tempor porttitor elit hendrerit.
                            Aliquam cursus arcu vel bibendum pulvinar.
                          </p>
                          <div className='row pt-2'>
                            <div className='col-xl-6'>
                              <ul className='faq-list'>
                                <li>
                                  <strong>01.</strong> Nullam eget mauris
                                  imperdiet turpis.
                                </li>
                                <li>
                                  <strong>02.</strong> lacus mi dictum urna,
                                  quis cursus.
                                </li>
                              </ul>
                            </div>
                            <div className='col-xl-6'>
                              <ul className='faq-list'>
                                <li>
                                  <strong>03.</strong> Sed feugiat sed erat sed
                                  eleifend. Done velit.
                                </li>
                                <li>
                                  <strong>04.</strong> augue dignissim Sed vel
                                  molestie ligula.
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className='accordion-item faq-accordion'>
                      <h2 className='accordion-header' id='faq-headingTwo'>
                        <button
                          className='accordion-button collapsed'
                          type='button'
                          data-bs-toggle='collapse'
                          data-bs-target='#faq-collapseTwo'
                          aria-expanded='false'
                          aria-controls='faq-collapseTwo'
                        >
                          Aenean tempor ac odio ut placerat. Pellentesque ut?
                        </button>
                      </h2>
                      <div
                        id='faq-collapseTwo'
                        className='accordion-collapse collapse'
                        aria-labelledby='faq-headingTwo'
                        data-bs-parent='#faq-accordion-example'
                      >
                        <div className='accordion-body'>
                          <p>
                            Duis rutrum nisl urna. Maecenas vel libero faucibus
                            nisi venenatis hendrerit a id lectus. Suspendissendt
                            molestie turpis nec lacinia vehicula. Quisque eget
                            volutpat purus. Aenean blandit magna maximus landi
                            quam facilisis, tempor porttitor elit hendrerit.
                            Aliquam cursus arcu vel bibendum pulvinar.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className='accordion-item faq-accordion'>
                      <h2 className='accordion-header' id='faq-headingThree'>
                        <button
                          className='accordion-button collapsed'
                          type='button'
                          data-bs-toggle='collapse'
                          data-bs-target='#faq-collapseThree'
                          aria-expanded='false'
                          aria-controls='faq-collapseThree'
                        >
                          Donec ullamcorper dolor vel elit facilisis egestas?
                        </button>
                      </h2>
                      <div
                        id='faq-collapseThree'
                        className='accordion-collapse collapse'
                        aria-labelledby='faq-headingThree'
                        data-bs-parent='#faq-accordion-example'
                      >
                        <div className='accordion-body'>
                          <p>
                            Duis rutrum nisl urna. Maecenas vel libero faucibus
                            nisi venenatis hendrerit a id lectus. Suspendissendt
                            molestie turpis nec lacinia vehicula. Quisque eget
                            volutpat purus. Aenean blandit magna maximus landi
                            quam facilisis, tempor porttitor elit hendrerit.
                            Aliquam cursus arcu vel bibendum pulvinar.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className='accordion-item faq-accordion'>
                      <h2 className='accordion-header' id='faq-headingFour'>
                        <button
                          className='accordion-button collapsed'
                          type='button'
                          data-bs-toggle='collapse'
                          data-bs-target='#faq-collapseFour'
                          aria-expanded='false'
                          aria-controls='faq-collapseFour'
                        >
                          Ut iaculis vulputate odio ac laoreet. Aliquam euontep
                          bunt?
                        </button>
                      </h2>
                      <div
                        id='faq-collapseFour'
                        className='accordion-collapse collapse'
                        aria-labelledby='faq-headingFour'
                        data-bs-parent='#faq-accordion-example'
                      >
                        <div className='accordion-body'>
                          <p>
                            Duis rutrum nisl urna. Maecenas vel libero faucibus
                            nisi venenatis hendrerit a id lectus. Suspendissendt
                            molestie turpis nec lacinia vehicula. Quisque eget
                            volutpat purus. Aenean blandit magna maximus landi
                            quam facilisis, tempor porttitor elit hendrerit.
                            Aliquam cursus arcu vel bibendum pulvinar.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className='accordion-item faq-accordion'>
                      <h2 className='accordion-header' id='faq-headingFive'>
                        <button
                          className='accordion-button collapsed'
                          type='button'
                          data-bs-toggle='collapse'
                          data-bs-target='#faq-collapseFive'
                          aria-expanded='false'
                          aria-controls='faq-collapseFive'
                        >
                          Suspendisse convallis dui eget orci mollis?
                        </button>
                      </h2>
                      <div
                        id='faq-collapseFive'
                        className='accordion-collapse collapse'
                        aria-labelledby='faq-headingFive'
                        data-bs-parent='#faq-accordion-example'
                      >
                        <div className='accordion-body'>
                          <p>
                            Duis rutrum nisl urna. Maecenas vel libero faucibus
                            nisi venenatis hendrerit a id lectus. Suspendissendt
                            molestie turpis nec lacinia vehicula. Quisque eget
                            volutpat purus. Aenean blandit magna maximus landi
                            quam facilisis, tempor porttitor elit hendrerit.
                            Aliquam cursus arcu vel bibendum pulvinar.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='col-lg-4'>
                <div className='faq-sidebar mt-30'>
                  <div className='faq-topics'>
                    <h3>FAQ Topic</h3>
                    <div className='radio-group'>
                      <input
                        className='form-check-input'
                        type='radio'
                        name='radioGroup'
                        id='radioGroup1'
                      />
                      <label className='form-check-label' htmlFor='radioGroup1'>
                        General Question
                      </label>
                    </div>
                    <div className='radio-group'>
                      <input
                        className='form-check-input'
                        type='radio'
                        name='radioGroup'
                        id='radioGroup2'
                        defaultChecked
                      />
                      <label className='form-check-label' htmlFor='radioGroup2'>
                        Financial Topic
                      </label>
                    </div>
                    <div className='radio-group'>
                      <input
                        className='form-check-input'
                        type='radio'
                        name='radioGroup'
                        id='radioGroup3'
                        defaultChecked
                      />
                      <label className='form-check-label' htmlFor='radioGroup3'>
                        Privacy Policy
                      </label>
                    </div>
                    <div className='radio-group'>
                      <input
                        className='form-check-input'
                        type='radio'
                        name='radioGroup'
                        id='radioGroup4'
                        defaultChecked
                      />
                      <label className='form-check-label' htmlFor='radioGroup4'>
                        Other Questions
                      </label>
                    </div>
                  </div>
                  <form action='#' id='faq-form' method='post'>
                    <div className='faq-form'>
                      <h3>Ask Your Question</h3>
                      <div className='custom-input-group'>
                        <input type='text' placeholder='Your Name' id='name' />
                      </div>
                      <div className='custom-input-group'>
                        <input
                          type='text'
                          placeholder='Your Email'
                          id='email'
                        />
                      </div>
                      <div className='custom-input-group'>
                        <input
                          type='tel'
                          placeholder='Phone Number'
                          id='phone'
                        />
                      </div>
                      <div className='custom-input-group'>
                        <textarea
                          cols={20}
                          rows={6}
                          placeholder='Your message'
                          defaultValue={''}
                        />
                      </div>
                      <div className='custom-input-group'>
                        <div className='submite-btn'>
                          <button type='submit'>Submit Now</button>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FaqPage;

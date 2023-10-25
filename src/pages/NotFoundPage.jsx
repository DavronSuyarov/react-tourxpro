import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <>
      <div>
        <div className='breadcrumb breadcrumb-style-one'>
          <div className='container'>
            <div className='col-lg-12 text-center'>
              <h2 className='breadcrumb-title'>Error</h2>
              <ul className='d-flex justify-content-center breadcrumb-items'>
                <li className='breadcrumb-item'>
                  <Link to='/'>Home</Link>
                </li>
                <li className='breadcrumb-item active'>Error</li>
              </ul>
            </div>
          </div>
        </div>
        <div className='error-wrapper pt-100'>
          <div className='container'>
            <div className='row justify-content-center'>
              <div className='col-lg-8'>
                <div className='error-content text-center'>
                  <div className='error-vactor text-center'>
                    <img
                      src='assets/images/shapes/error-vactor.png'
                      alt=''
                      className='img-fluid'
                    />
                  </div>
                  <div className='error-text'>
                    <h2>That Page Are Not Found</h2>
                    <p>
                      Duis rutrum nisl urna. Maecenas vel libero faucibus nisi
                      venenatis hendrerit a id lectus. Suspendissendt blandit
                      interdum. Sed pellentesque at nunc eget consente
                      consectetur.Duis rutrum nisl urna. Maecenas vel libero
                    </p>
                    <div className='error-btn'>
                      <Link to='/'>
                        <i className='bi bi-house-door' /> GO TO HOME
                      </Link>
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

export default NotFoundPage;

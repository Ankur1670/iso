import React from 'react';
import './banner.css'
import Button from 'react-bootstrap/Button';

const Banner = () => {
  return (
    // <div className='a'>
    //   <div className="conatiner mx-5">
    

    //     <div className="row">
    //         <div className="col-md-7 col-lg-7">
    //         <button className="btn btn-danger hover-zoom">
    //     Govt. Approved
    //   </button>
    //   <h1 class="">ISO Certification Body - Apply For Certification</h1>

    //         </div>
    //     </div>
    //   </div>
    // </div>
    <div className="banner-section pt-100 pb-2">
      <div className="container">
        <div className="row align-item-center">
          <div className="col-md-7 col-lg-7">
          <button className="btn btn-danger ">
        Govt. Approved
      </button>
<h1 className="mt-5">ISO Certification Body - Apply For Certification</h1>
<p class="lead">Our legal experts &amp; auditor can help you implement and secure wide range of ISO Certification.</p>
<div className="enq">
<Button variant="outline-secondary" className='a'>Enquiry Now</Button>{' '}
<Button variant="outline-secondary mx-5 "className='a'>Enquiry Now</Button>{' '}
</div>



          </div>
          <div className="col-md-5 col-lg-5">
            <div className='hero-img-right  position-relative z-index'>
              <div className="sign-up-form-wrap position-relative z-index shadow-lg rounded p-5 w-100 gray-light-bg">
                <div className="sign-up-form-header text-center mb-4">
                <h3 class="mb-0">Request a Free Sample of ISO</h3>
                <p>Please fill in the details to register.</p>

                </div>
                <form action="" className="login-signup-form" method='' acceptCharset=''>
                <div class="form-group">
                                <div class="input-group input-group-merge">
                                    <div class="input-icon">
                                        <span class="ti-user"></span>
                                    </div>
                                    <input type="text" name="name" class="form-control" placeholder="Name" required=""/>
                                </div>
                            </div>

                            <div class="form-group">
                                <div class="input-group input-group-merge">
                                    <div class="input-icon">
                                        <span class="ti-email"></span>
                                    </div>
                                    <input type="text" name="email" class="form-control" placeholder="Email" required="" />
                                </div>
                            </div>

                            <div class="form-group">
                            <div class="input-group input-group-merge">
                                    <div class="input-icon">
                                        <span class="ti-mobile"></span>
                                    </div>
                                    <input type="text" name="phone" class="form-control" placeholder="Phone" required="" />
                                </div>
                              
                            </div>

                            <div class="form-group">
                            <div class="input-group input-group-merge">
                                    <div class="input-icon">
                                        <span class="ti-home"></span>
                                    </div>
                                    <input type="text" name="company" class="form-control" placeholder="Company Name" />
                                </div>
                              <br />

 <input type="text" name="enteredcaptcha" required="" placeholder="Fill Captcha Code" />
   <label for="first_name" className='px-2 '>Fill Captcha Code</label>
<p>o9w48usj</p>       <input type="hidden" name="captcha" value="o9w48usj" required="" placeholder="Fill Captcha Code" />     
                            </div>

                            <button class="btn btn-block solid-btn border-radius shadow mt-4 mb-3"> Send Now
                            </button>
                </form>

              </div>
            </div>


          </div>
          
        </div>
        
      </div>
    </div>
  )
}

export default Banner

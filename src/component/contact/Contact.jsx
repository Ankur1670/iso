import React from 'react'
import './contact.css'
const Contact = () => {
  return (
    <div>
      <section id="contact" class="contact-us-section ptb-100">
       <div class="container">
            <div class="row justify-content-around">
                <div class="col-md-6 c-form">
                <div className='hero-img-right  position-relative z-index'>
              <div className="sign-up-form-wrap position-relative z-index shadow-lg rounded p-5 w-100 gray-light-bg">
                <div className="sign-up-form-header text-center mb-4">
                <h3 class="mb-0">Fill Form To Get ISO Free Sample</h3>
\
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
                <div class="col-md-5">
                    <div class="contact-us-content">
                        <h2>Looking for a excellent ISO Certificate ?</h2>
                        <p class="lead">Seamlessly deliver pandemic e-services and next-generation initiatives.</p>

                        <a href="#" class="btn outline-btn align-items-center">Get Directions <span class="ti-arrow-right pl-2"></span></a>

                        <hr class="my-5"/>

                        <h5>Address</h5>
                        <address>
                            House No: k9
 Kirloskar layout 
Near Jindal Aluminium ltd 
Bangalore 560073
                        </address>
                        
                        <span><strong>Phone:</strong>   +91-7877389759</span> <br/>
                        <span><strong>Email: </strong><a href="#" class="link-color">info@easyiso.in</a></span>

                    </div>
                </div>
            </div>
        </div> 
           </section>
    </div>
  )
}

export default Contact

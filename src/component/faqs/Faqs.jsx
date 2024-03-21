import React from 'react'
import './faqs.css'
const Faqs = () => {
  return (
    <div>
       <div id="faq" class="faq-section pt-100">
        <div class="container">
            <div class="row justify-content-around align-items-end">
                <div class="col-md-6 col-lg-6">
                    <div class="faq-content-wrap pb-100">
                        <div class="section-heading mb-5">
                            <h2>FAQ - Easy ISO</h2>
                            <p>Fast &amp; Hazel Free Process, Best 
service at Best Price Guarantee, Certificate Valid Internationally, 
Tender and Assistance on ISO Certification. <a href="#contact" class="page-scroll">Contact us</a></p>
                        </div>
                        <div id="accordion" class="accordion">
                            <div class="card mb-0">
                                <a class="card-header collapsed" data-toggle="collapse" href="#collapseOne">
                                    <h6 class="mb-0 d-inline-block"><span class="ti-receipt mr-3"></span> What is the benefit of being ISO certified?</h6>
                                </a>
                                <div id="collapseOne" class="collapse" data-parent="#accordion" style="">
                                    <div class="card-body">
                                        <p> 
Organizations use the standard to demonstrate the ability to 
consistently provide products and services that meet customer and 
regulatory requirements. The benefits of being ISO 9001 certified are 
that it will help and support your staff and improve your level of 
customer satisfaction..
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div class="card mb-0">
                                <a class="card-header collapsed" data-toggle="collapse" href="#collapseTwo">
                                    <h6 class="mb-0 d-inline-block"><span class="ti-gallery mr-3"></span>What you about say your Business palnning?</h6>
                                </a>
                                <div id="collapseTwo" class="collapse" data-parent="#accordion" style="">
                                    <div class="card-body">
                                        <p> Organizations use the 
standard to demonstrate the ability to consistently provide products and
 services that meet customer and regulatory requirements. The benefits 
of being ISO 9001 certified are that it will help and support your staff
 and improve your level of customer satisfaction.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div class="card mb-0">
                                <a class="card-header collapsed" data-toggle="collapse" href="#collapseThree">
                                    <h6 class="mb-0 d-inline-block"><span class="ti-wallet mr-3"></span> My company is very small. Can I get certified?
                                    </h6>
                                </a>
                                <div id="collapseThree" class="collapse" data-parent="#accordion" style="">
                                    <div class="card-body">
                                        <p>
Absolutely yes, we've worked with companies of one or two people who 
decided to get certified. The processes that you'll put in place would 
have the same intent as a much larger company; it's just that the 
implementation will be simpler.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div class="card mb-0">
                                <a class="card-header collapsed" data-toggle="collapse" href="#collapseFour">
                                    <h6 class="mb-0 d-inline-block"><span class="ti-headphone-alt mr-3"></span> What Is The Validity Of ISO Certification?
                                    </h6>
                                </a>
                                <div id="collapseFour" class="collapse" data-parent="#accordion" style="">
                                    <div class="card-body">
                                        <p> 
Generally, ISO certificate will be valid for 3 years subject to surveillance.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-5 col-lg-5">
                    <div class="d-flex align-items-end">
                        <img class="img-fluid" src="" alt="faqs"/>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Faqs

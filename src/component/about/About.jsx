import React from 'react'
import './about.css'
import about from './../../assets/about.png'
import Button from 'react-bootstrap/Button';

const About = () => {
  return (
    <div className='about-section mt-5 '>
      <div className="container">
        <div className="row ">
            <div className="col-md-4 col-lg-4">
<div className="img-wrap img-fluid m-auto">
    <img src={about} alt="" />
</div>
            </div>
            <div className="col-md-8 col-lg-8 mt-5">
                <div className="content">
                    <h2>Welcome to Easy ISO</h2>
                    <p align='justify'>
                    We, Easy ISO, incorporated 
our operations in the year 2014, as one of the noted Certification 
Services. Our services include ISO system certification services, ISO 
auditing and consulting services,
<strong>ISO 9001:2015 Certifications, 
ISO 14001:2015, OHSAS 18001:2007, ISO 13485:2016, ISO 20000:2018, ISO 
22000: 2018, HACCP, ISO 29990:2010, 27001:2013, GMP, CE Marking, ISO 
45001:2018, etc.</strong>
Being a customer-centric organization, we are 
very concerned with the quality that is provided from our end, whether 
it is our reliable services or the assortment of chocolates prepared by 
us. <br /> <br />
ISO certifications are extremely important for any type of business, and
 we understand the importance of these, thus providing valuable ISO 
certifications to our valued customers. We adopt a customer-centric 
approach when performing our services and follow the Plan-Do-Check-Act 
(PDCA) policy. To achieve these services, we have recruited a team of 
competent experts in this field and are continuously striving to meet 
the exact needs of the customers.
                    </p>
                    <Button variant="outline-secondary" className='v'>Read More</Button>{' '}

                </div>

            </div>
        </div>

      </div>
    </div>
  )
}

export default About

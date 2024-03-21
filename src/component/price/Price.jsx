import React from 'react'
import './price.css'
import p1 from '../../assets/p1.png'
const Price = () => {
  return (
    <div>
<section id="download" class="gradient-overlay">
        <div class="container">
            <div class="row justify-content-around align-items-end">
                <div class="col-md-6 col-lg-6">
                    <div class="download-txt text-white ptb-100">
                        <h2 class="text-white">
                         Yes ! Get ISO 9001 Certification For Rs.1500/-
                        </h2>
                        <p class="lead">ISO Stands for Legal way 
Certification. ISO is an independent, non-governmental international 
organization with a membership of 162 national standard bodies.</p>
                        <div class="action-btns download-btn mt-4">
                            <a href="#" class="btn solid-white-btn mr-3"> <span class="ti-desktop mr-2"></span> Enquiry Now </a>
                            <a href="tel:+91-7877389759" class="btn outline-white-btn"> <span class="ti-mobile mr-2"></span>   Request a Call</a>
                        </div>
                    </div>
                </div>
                <div class="col-md-6 col-lg-6">
                    <div class="d-flex align-items-end price-img">
                        <img class="img-fluid " src={p1} alt="download"/>
                    </div>
                </div>
            </div>
        </div>
    </section>    </div>
  )
}

export default Price

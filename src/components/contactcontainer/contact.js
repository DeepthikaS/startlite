import React from 'react'
import Form from './form'

class Contact extends React.Component{
    render(){
        return(
            <section id="contact" class="contact-area">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-lg-6">
                        <div class="section-title text-center pb-10">
                            <h4 class="title">Get In touch</h4>
                            <p class="text">Stop wasting time and money designing and managing a website that doesn’t get results. Happiness guaranteed!</p>
                        </div> 
                    </div>
                </div> 
                <div class="row justify-content-center">
                    <div class="col-lg-8">
                        <div class="contact-form">
                            <form id="contact-form" action="assets/contact.php" method="post" data-toggle="validator">
                                <div class="row">
                                    <Form type="text" names="name" pholder="Your Name" de="Name is required." />
                                    <Form type="email" names="email" pholder="Your Email" de="Valid Email is required." />
                                    <Form type="text" names="subject" pholder="Subject" de="Subject is required." />
                                    <Form type="text" names="phone" pholder="Phone" de="Phone is required." />
                                    
                                    <div class="col-md-12">
                                        <div class="single-form form-group">
                                            <textarea placeholder="Your Mesaage" name="message" data-error="Please, leave us a message." required="required"></textarea>
                                            <div class="help-block with-errors"></div>
                                        </div> 
                                    </div>
                                    <p class="form-message"></p>
                                    <div class="col-md-12">
                                        <div class="single-form form-group text-center">
                                            <button type="submit" class="main-btn">send message</button>
                                        </div> 
                                    </div>
                                </div> 
                            </form>
                        </div> 
                    </div>
                </div> 
            </div> 
        </section>
        )
    }
}

export default Contact
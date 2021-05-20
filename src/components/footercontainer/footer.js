import React from 'react'
import logo from '../assets/images/logo.svg'
import Flinks from './flinks'

class Footer extends React.Component{
    render(){
        return(
            <div>
            <footer id="footer" class="footer-area">
        <div class="footer-widget">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="footer-logo-support d-md-flex align-items-end justify-content-between">
                            <div class="footer-logo d-flex align-items-end">
                                <a class="mt-30" href="index.html"><img src={logo} alt="Logo" /></a>

                                <ul class="social mt-30">
                                    <li><a href="#"><i class="lni-facebook-filled"></i></a></li>
                                    <li><a href="#"><i class="lni-twitter-original"></i></a></li>
                                    <li><a href="#"><i class="lni-instagram-original"></i></a></li>
                                    <li><a href="#"><i class="lni-linkedin-original"></i></a></li>
                                </ul>
                            </div> 
                            
                        </div> 
                    </div>
                </div> 
                <div class="row">
                    <Flinks title="Company" a="About" b="Contact" c="Career" />
                    <Flinks title="Product & Services" a="Products" b="Business" c="Developer" />
                    {/* <div style={{marginRight:"95px"}}></div> */}
                    <Flinks title="Help & Support" a="Support Center" b="FAQ" c="Terms & Conditions" />
                    {/* <div style={{marginRight:"95px"}}></div> */}
                    <div class="col-lg-4 col-md-6 col-sm-7">
                        <div class="footer-newsletter">
                            <h6 class="footer-title">Subscribe Newsletter</h6>
                            <div class="newsletter">
                                <form action="#">
                                    <input type="text" placeholder="Your Email"/>
                                    <button type="submit"><i class="lni-angle-double-right"></i></button>
                                </form>
                            </div>
                            <p class="text">Subscribe weekly newsletter to stay upto date. We don’t send spam.</p>
                        </div> 
                    </div>
                </div> 
            </div> 
        </div> 
        
        <div class="footer-copyright">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="copyright text-center">
                            <p class="text">Template Crafted by <a rel="nofollow" href="https://uideck.com">UIdeck</a> - UI Powered by <a el="nofollow" href="https://rebrand.ly/ayroui">AyroUI</a></p>
                        </div>
                    </div>
                </div> 
            </div> 
        </div> 
    </footer>
    <a class="back-to-top" href="#" style={{display:"block"}}><i class="lni-chevron-up"></i></a>

    
    

    </div>
        )
    }
}

export default Footer
import React from 'react'
import service from '../assets/images/services.png'
import Scontent from './scontent'


class Services extends React.Component{
    render(){
        return(
            <section id="service" class="services-area">
            <div class="container">
                <div class="row">
                    <div class="col-lg-6">
                        <div class="section-title pb-10" style={{textAlign:"left"}}>
                            <h4 class="title">Crafted For</h4>
                            <p class="text">Stop wasting time and money designing and managing a website that doesn’t get results. Happiness guaranteed!</p>
                        </div> 
                    </div>
                </div> 
                <div class="row">
                    <div class="col-lg-8">
                        <div class="row">
                            <Scontent icon="lni-bolt" title="Startup"/>
                            <Scontent icon="lni-bar-chart" title="Saas Business"/>
                            <Scontent icon="lni-brush" title="Agency"/>
                            <Scontent icon="lni-bulb" title="App Landing"/>
                            
                        </div> 
                        
                    </div> 
                    
                </div> 
                
            </div> 
            
            <div class="services-image d-lg-flex align-items-center">
                <div class="image">
                    <img src={service} alt="Services"/>
                </div>
            </div> 
            
        </section> 
        )
    }
}

export default Services
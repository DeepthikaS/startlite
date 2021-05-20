import React from 'react'
import flower from '../assets/images/flower.svg'
import baloon from '../assets/images/baloon.svg'
import Pcards from './pcards'

class Pricing extends React.Component{
    render(){
        return(
            <section id="pricing" class="pricing-area">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-lg-6">
                    <div class="section-title text-center pb-10">
                        <h4 class="title">Our Pricing</h4>
                        <p class="text">Stop wasting time and money designing and managing a website that doesn’t get results. Happiness guaranteed!</p>
                    </div> 
                </div>
            </div> 
            <div class="row justify-content-center">
                <Pcards cl4="single-pricing mt-40"  cl1="pricing-header text-center " title="Basic" price="$ 199" cl21="cls-1 color-1" cl22="cls-2 color-1" cl23="cls-3 color-1" cl24="cls-4 color-1"/>
                <Pcards cl4="single-pricing pro mt-40" cl3="pricing-baloon" source={baloon} cl1="pricing-header text-left" title="Pro" price="$ 399" cl21="cls-1 color-2" cl22="cls-2 color-2" cl23="cls-3 color-2" cl24="cls-4 color-2"/>
                <Pcards cl4="single-pricing enterprise mt-40" cl3="pricing-flower" source={flower} cl1="pricing-header text-right" title="Enterprise" price="$ 799" cl21="cls-1 color-3" cl22="cls-2 color-3" cl23="cls-3 color-3" cl24="cls-4 color-3"/>
            </div> 
        </div> 
    </section>
        )
    }
}

export default Pricing
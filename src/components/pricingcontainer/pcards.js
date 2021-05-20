import React from 'react'
import flower from '../assets/images/flower.svg'
import baloon from '../assets/images/baloon.svg'

const Pcards=({cl4,cl3,source,cl1,title,price,cl21,cl22,cl23,cl24})=>{
    return(
            <div class="col-lg-4 col-md-7 col-sm-9">
                    <div class={cl4}>
                        <div class={cl3}>
                            <img src={source} />
                        </div>
                        <div class={cl1}>
                            <h5 class="sub-title">{title}</h5>
                            <span class="price">{price}</span>
                            <p class="year">per year</p>
                        </div>
                        <div class="pricing-list">
                            <ul>
                                <li><i class="lni-check-mark-circle"></i> Carefully crafted components</li>
                                <li><i class="lni-check-mark-circle"></i> Amazing page examples</li>
                                <li><i class="lni-check-mark-circle"></i> Super friendly support team</li>
                                <li><i class="lni-check-mark-circle"></i> Awesome Support</li>
                            </ul>
                        </div>
                        <div class="pricing-btn text-center">
                            <a class="main-btn" href="#">GET STARTED</a>
                        </div>
                        <div class="buttom-shape">
                            <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 350 112.35">
                                <title>bottom-part1</title>
                                <g id="bottom-part">
                                    <g id="Group_747" data-name="Group 747">
                                        <path id="Path_294" data-name="Path 294" class={cl21} d="M0,24.21c120-55.74,214.32,2.57,267,0S349.18,7.4,349.18,7.4V82.35H0Z" transform="translate(0 0)"/>
                                        <path id="Path_297" data-name="Path 297" class={cl22} d="M350,34.21c-120-55.74-214.32,2.57-267,0S.82,17.4.82,17.4V92.35H350Z" transform="translate(0 0)"/>
                                        <path id="Path_296" data-name="Path 296" class={cl23} d="M0,44.21c120-55.74,214.32,2.57,267,0S349.18,27.4,349.18,27.4v74.95H0Z" transform="translate(0 0)"/>
                                        <path id="Path_295" data-name="Path 295" class={cl24} d="M349.17,54.21c-120-55.74-214.32,2.57-267,0S0,37.4,0,37.4v74.95H349.17Z" transform="translate(0 0)"/>
                                    </g>
                                </g>
                            </svg>
                        </div>
                    </div> 
            </div>
    )
}

export default Pcards
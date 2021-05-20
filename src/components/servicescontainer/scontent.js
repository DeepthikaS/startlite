import React from 'react'

const Scontent=({icon,title})=>{
    return(
        <div class="col-md-6">
            <div class="services-content mt-40 d-sm-flex">
                <div class="services-icon">
                    <i class={icon}></i>
                </div>
                <div class="services-content media-body" style={{textAlign:"left"}}>
                    <h4 class="services-title">{title}</h4>
                    <p class="text">Short description for the ones<br/> who look for something new.</p>
                </div>
            </div> 
        </div>
    )
}

export default Scontent
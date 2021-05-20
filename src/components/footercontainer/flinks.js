import React from 'react'

const Flinks=({title,a,b,c})=>{
    return(
        <div class="col-lg-2 col-md-4 col-sm-6">
            <div class="footer-link">
                <h6 class="footer-title">{title}</h6>
                    <ul>
                        <li><a href="#">{a}</a></li>
                        <li><a href="#">{b}</a></li>
                        <li><a href="#">{c}</a></li>
                    </ul>
            </div> 
        </div>
    )
}

export default Flinks
import React from 'react'

const ClientLogo=({source})=>{
    return(
        <div class="col-md-3 col-6">
            <div class="single-client mt-30 text-center">
                <img src={source} alt="Logo"/>
            </div> 
        </div>
    )
}

export default ClientLogo
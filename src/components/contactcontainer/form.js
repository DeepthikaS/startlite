import React from 'react'

const Form=({type,names,pholder,de})=>{
    return(
        <div class="col-md-6">
            <div class="single-form form-group">
                <input type={type} name={names} placeholder={pholder} data-error={de} required="required"/>
                    <div class="help-block with-errors"></div>
            </div> 
        </div>
    )
}

export default Form
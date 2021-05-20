import React from 'react'

const Content=({img,aname,title})=>{
    return(

        
        
                
                    <div class="card" style={{marginRight:"25px" , width:"350px" , boxShadow:"0 4px 8px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19)"}}>
                        <div class="card-header" style={{ backgroundColor:"white"}}>
                            <div class="testimonial-image">
                                <img src={img} alt="Author" style={{borderRadius:"50%"}}/>
                            </div>
                            <div class="testimonial-content" style={{paddingTop:"25px"}}>
                                <p class="text">Stop wasting time and money designing and managing a website that doesn’t get results. Happiness guaranteed! Stop wasting time and money designing and managing a website that doesn’t get results. Happiness guaranteed!</p>
                                <hr/><h6 class="author-name">{aname}</h6>
                                <span class="sub-title">{title}</span>
                            </div>
                        </div>
                    </div>
               
            
        

    );
}

export default Content
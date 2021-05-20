import React from 'react'
import Content from './content'

class Testimonial extends React.Component{
    render(){
        return(
            <div>
                <section id="testimonial" class="testimonial-area">
                    <div class="container"> 
                        <div class="row justify-content-center">
                            <div class="col-lg-6">
                                <div class="section-title text-center pb-10">
                                    <h4 class="title">Testimonial</h4>
                                    <p class="text">Stop wasting time and money designing and managing a website that doesn’t get results. Happiness guaranteed!</p>
                                </div> 
                            </div>  
                        </div>
                    </div>
                </section>
                
                <div id="demo" class="carousel slide" data-ride="carousel" style={{marginLeft:"10%"}}>
                    <ol class="carousel-indicators">
                        <li data-target="#demo" data-slide-to="0" class="active"></li>
                        <li data-target="#demo" data-slide-to="1"></li>
                        <li data-target="#demo" data-slide-to="2"></li>
                        <li data-target="#demo" data-slide-to="3"></li>
                    </ol>
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <div class="row">
                                <div class="col-md-4 mb-3">
                                    <Content img="https://preview.uideck.com/items/start/assets/images/author-3.jpg" aname="Isabela Moreira" title="CEO, GrayGrids"/>
                                </div>
                                <div class="col-md-4 mb-3">
                                <Content img="https://preview.uideck.com/items/start/assets/images/author-1.jpg" aname="Fiona" title="Lead Designer, Uldeck"/>
                                </div>
                                <div class="col-md-4 mb-3">
                                    <Content img="https://preview.uideck.com/items/start/assets/images/author-2.jpg" aname="Elon Musk" title="CEO, SpaceX"/>
                                </div>
                            </div>
                        </div>
                        <div class="carousel-item ">
                            <div class="row">
                                <div class="col-md-4 mb-3">
                                <Content img="https://preview.uideck.com/items/start/assets/images/author-1.jpg" aname="Fiona" title="Lead Designer, Uldeck"/>
                                </div>
                                <div class="col-md-4 mb-3">
                                    <Content img="https://preview.uideck.com/items/start/assets/images/author-2.jpg" aname="Elon Musk" title="CEO, SpaceX"/>
                                </div>
                                <div class="col-md-4 mb-3">
                                <Content img="https://preview.uideck.com/items/start/assets/images/author-4.jpg" aname="Fajar Siddiq" title="CEO, MakerFlix"/>
                                </div>
                            </div>
                        </div>
                        <div class="carousel-item ">
                            <div class="row">
                                <div class="col-md-4 mb-3">
                                    <Content img="https://preview.uideck.com/items/start/assets/images/author-2.jpg" aname="Elon Musk" title="CEO, SpaceX"/>
                                </div>
                                <div class="col-md-4 mb-3">
                                <Content img="https://preview.uideck.com/items/start/assets/images/author-4.jpg" aname="Fajar Siddiq" title="CEO, MakerFlix"/>
                                </div>
                                <div class="col-md-4 mb-3">
                                    <Content img="https://preview.uideck.com/items/start/assets/images/author-3.jpg" aname="Isabela Moreira" title="CEO, GrayGrids"/>
                                </div>
                            </div>
                        </div>
                        <div class="carousel-item ">
                            <div class="row">
                                <div class="col-md-4 mb-3">
                                    <Content img="https://preview.uideck.com/items/start/assets/images/author-4.jpg" aname="Fajar Siddiq" title="CEO, MakerFlix"/>
                                </div>
                                <div class="col-md-4 mb-3">
                                    <Content img="https://preview.uideck.com/items/start/assets/images/author-3.jpg" aname="Isabela Moreira" title="CEO, GrayGrids"/>
                                </div>
                                <div class="col-md-4 mb-3">
                                <Content img="https://preview.uideck.com/items/start/assets/images/author-1.jpg" aname="Fiona" title="Lead Designer, Uldeck"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>   
                                    
            </div>
        )
    }
}

export default Testimonial
import React from "react";
import { Container, Row } from "react-bootstrap";
import background from './images/HeaderImage.jpg'
import vector2 from './images/Vector.svg';
import ordergen from './images/ordergen.svg'
import demands from './images/demands.svg'
import delevery from './images/dilevery.svg'
import badge1 from './images/cil_badge.png'
import placeholderimg from './images/placeholderimg.jpg'
import sell from './images/sell 1.png'
import food from './images/food.png'
import lightbox from './images/Lightbox.jpg'
import service from './images/service 1.png'
import cleaness from './images/cleanliness 1.png'
import labour from './images/labor dependence 1.png'
import cost from './images/cost 1.png'
import frame3 from './images/Frame 3.png'
import frame4 from './images/Frame 4.png'
import frame5 from './images/Frame 5.png'
import frame6 from './images/Frame 6.png'


const Home = () =>{
    return(
        <Container className="p-0" fluid>
            <Row>
                <Row>
                    <div className="px-5" style={{height: '665px', background: `url(${background})`,backgroundRepeat: 'no-repeat', backgroundPosition: 'right ', backgroundSize: '900px 765px'}}>
                    <p className="" style={{fontSize: '36px', fontfamily: 'Zabal DEMO', paddingTop: '100px'}}>
                        Getting fresh produce.  
                    </p>
                    <p className="text-break col-2" style={{fontSize: '36px'}}>From farm. To fork.</p>
                    <p className="col-3 text-muted">
                    Buy fresh fruits & Vegetables for your businesses.
                    </p>

                    {/* find your area */}
                    <div className="d-flex">
                        <div class="form-group d-flex">
                        <div class="input-group">
                            <input type="text" class="form-control" placeholder="find your area"/>
                        </div>
                        <div className="btn bg-success col-5 mx-2 text-light p-2">Find produce</div>
                        </div>
                    </div>
                    {/* find your area */}
                    <p className="pt-5"><a className="text-decoration-none" href="/">Already have an account?<span className="text-success mx-2">Sign In<img style={{width: '10px', height: '12px'}} className="mx-2" src={vector2} alt='vec2'/></span></a></p>
                    </div>

                    {/* How TerraLima Works section  */}
                    <div>
                        <p className="fs-1 text-center p-5 fw-bold">How TerraLima Works</p>
                        <div className="d-flex justify-content-center mx-5">

                            <div style={{marginLeft: '120px'}} className="">
                                <img className="px-5" src={ordergen} alt="orger generated"/>
                                <p className="fs-5 fw-bold p-2">Order Generated</p>
                                <p className=" p-1 text-muted">We aggregate & secure demand from businesses</p>

                            </div>
                            <div style={{marginLeft: '120px'}}>
                                <img className="px-5" src={demands} alt="orger generated"/>
                                <p className="fs-5 fw-bold p-2">On-demand Harvesting</p>
                                <p className="p-1 text-muted">The fresh produce is harvested & delivered to our nearest drop-off point</p>

                            </div>
                            <div style={{marginLeft: '120px'}}>
                                <img className="px-5" src={delevery} alt="orger generated"/>
                                <p className="fs-5 fw-bold p-3">Collection, Delivery</p>
                                <p className="p-1 text-muted">The produce is packaged and delivered in less than 24 hours</p>

                            </div>

                        </div>
                    </div> 
                    {/* How TerraLima Works section */}

                    <div style={{backgroundColor: '#E8F2F2'}}>
                        <p className="fs-1 fw-bold text-center pt-5">Why use TerraLima?</p>
                        <p className="text-center p-5 text-muted fs-4">
                        Our mission is to increase the income of farmers by streamlining the agricultural supply chain. 
                        Terralima helps farmers access extension services, 
                        financial services and fair produce prices.
                        </p>
                    </div>

                    {/* for Farmers section */}
                    <div className="d-flex justify-content-center">
                          <div className="mx-5">
                          <p className="fs-2 fw-bold pt-5 mt-5">For Farmers</p>
                            <div>
                            <img src={badge1} alt="src"/>
                            <p className=" pt-2 fw-bold">Fair Minimun Guaranteed Price Offer</p>
                            <p className="text-muted">Farmers unable to get fair price due to lack of visibility on market demand</p>
                            </div>
                            <div>
                            <img src={sell} alt="src"/>
                            <p className=" pt-2 fw-bold">Waste Reduction</p>
                            <p className="text-muted">30 - 40% Post-harvest loss due to lack of effiecient storage and transporation.</p>
                            </div>
                            <div>
                            <img src={food} alt="src"/>
                            <p className=" pt-2 fw-bold">Prevent Food Adulteration</p>
                            <p className="text-muted">Inefficiences within the supply chain lead to dangerous levels of chemicals applied to the produce along the intermediary chain.</p>
                            </div>
                          </div>
                          <img className="pt-5 mx-5" src={placeholderimg} alt='placeholder'/>
                    </div>
                    {/* For farmer section */}

                     {/* For Bussiness section */}
                    <div className="d-flex justify-content-center p-5">
                           <img className="mt-5" src={lightbox} alt='light'/>
                           <div className="mx-3">
                             <h2 className="mt-5 pt-5">For Bussiness</h2>
                             
                            <div className="d-flex pt-5">
                            <div>
                             <div>
                            <img className="px-2" src={service} alt="src"/>
                            <p className=" pt-2 fw-bold px-2">Support Local Farmers</p>
                            <p className="text-muted px-2">Unlike buying from the local market, you know exactly where your produce is grown.</p>
                            </div>
                            <div>
                            <img className="px-2" src={cleaness} alt="src"/>
                            <p className=" pt-2 fw-bold px-2">Assured Quality</p>
                            <p className="text-muted px-2">Products on average reach consumers 2-3 days after harvest, leading to quality and freshness degradation.</p>
                            </div>
                             </div>
                            <div>
                             <div>
                            <img src={cost} alt="src"/>
                            <p className=" pt-2 fw-bold">Affordability</p>
                            <p className="text-muted">Prices hiked on 50 -150% on average, making it very expensive to procure.</p>
                            </div>
                            <div>
                            <img src={labour} alt="src"/>
                            <p className=" pt-2 fw-bold">Buy Now, Pay Later</p>
                            <p className="text-muted">Enjoy your purchase now and pay the rest over 2 weeks.</p>
                            </div>
                             </div>
                            </div>
                           </div>
                    </div>
                    {/* For Bussiness section */}

                    {/* Our Partners */}
                    <div className="">
                        <h2 className="text-center fw-bold pt-5">Meet Our Partners</h2>
                        <div  style={{gap: '30px', alignSelf: 'center'}} className="justify-content-center d-flex">
                            <img src={frame3} alt='frame'/>
                            <img src={frame4} alt='frame'/>
                            <img src={frame5} alt='frame'/>
                            <img src={frame6} alt='frame'/>
                        </div>
                    </div>
                     {/* Our Partners */}

                     <div style={{background: '#DAE8E8', boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)'}}>
                     <div style={{justifyContent: 'flex-end'}} className="embed-responsive embed-responsive-16by9">
                     {/*  eslint-disable-next-line jsx-a11y/iframe-has-title */}
                     <iframe style={{width: '800px', height: '600px', marginTop:'110px'}} className="embed-responsive-item" src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0" allowfullscreen></iframe>
                    </div>

                     </div>

                </Row>
            </Row>

        </Container>
    )
}

export default Home;
import React,{useState, useEffect} from "react";
import background from './images/HeaderImage.jpg'
import vector2 from './images/Vector.svg';
import badge1 from './images/cil_badge.png';
import placeholderimg from './images/placeholderimg.jpg';
import sell from './images/sell 1.png';
import food from './images/food.png';
import lightbox from './images/Lightbox.jpg';
import service from './images/service 1.png';
import cleaness from './images/cleanliness 1.png';
import labour from './images/labor dependence 1.png';
import cost from './images/cost 1.png';
import frame3 from './images/Frame 3.png';
import frame4 from './images/Frame 4.png';
import frame5 from './images/Frame 5.png';
import frame6 from './images/Frame 6.png';
import leaves from './images/Leaves.png';
import placeholderimg2 from './images/placeholderimage2.jpg';
import Footer from "./FooterComp";
import Threecolprop from "./Threecolprops";
import ordergen from './images/ordergen.svg'
import demands from './images/demands.svg';
import delevery from './images/dilevery.svg'
import comingsoon from './images/comingsoon.png'
import modalimg from './images/modalimg.png'



const Home = () =>{
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        if (isOpen) {
          document.body.style.overflow = 'hidden';
        } else {
          document.body.style.overflow = '';
        }
      }, [isOpen]);
    return(
        <div>
            <div>
                <div>
                    <div className="px-5" style={{height: '665px', background: `url(${background})`,backgroundRepeat: 'no-repeat', backgroundPosition: 'right ', backgroundSize: '900px 765px'}}>
                    <p className="fw-bold title-header" style={{fontSize: '46px', paddingTop: '100px'}}>
                        Getting fresh produce. <br/>From farm. <br/>To fork.
                    </p>
                    {/* <p className=" fw-bold " style={{fontSize: '46px'}}>From farm.</p>
                    <p className="fw-bold" style={{fontSize: '46px'}}>To fork.</p> */}
                    <p className="col-3 text-muted">
                    Buy fresh fruits & Vegetables<br/> for your businesses.
                    </p>

                    {/* find your area */}
                    <div className="d-flex">
                        <div class="form-group d-flex">
                        <div class="input-group">
                        <input type="text" class="form-control" placeholder="find your area"></input>
                        </div>
                        <div onClick={() => setIsOpen(true)} className="btn bg-success col-5 mx-2 text-light p-2">Find produce</div>
                        {isOpen &&(
                            <div className="my-modal pb-5">
                            <button onClick={() => setIsOpen(false)}>close</button>
                            <div className="modal-content w-100">
                            <p style={{fontFamily: 'ZabalBold', fontSize: '36px', lineHeight: '36px',padding:'24px 16px 0px 16px'}} className="text-center text-success">Yes, we deliver in your city! </p>
                            <img style={{width:'180px', height:'150px', alignSelf:'center'}} src={modalimg} alt='modal'/>
                            <p className="text-center fw-bold pt-3">Explore fresh fruits & vegetables</p>
                            <p className="text-center">We deliver under 24 hours!<br/>Delivery is <span className="text-warning">free</span> or businesses.</p>
                            <button className="bg-success w-25 text-white d-flex align-self-center justify-content-center p-2 rounded">Continue</button>
                            </div>
                           </div>
                        )}
                        </div>
                    </div>
                    {/* find your area */}
                    <p className="pt-5"><a className="text-decoration-none nav-text-color" href="/">Already have an account?<span className="text-success mx-2">Sign In<img style={{width: '10px', height: '12px'}} className="mx-2" src={vector2} alt='vec2'/></span></a></p>
                    </div>

                    {/* How TerraLima Works section  */}
                    <div>
                        <p style={{fontFamily:'ZabalBold'}} className="fs-1 text-center fw-bold">How TerraLima Works</p>
                        <div style={{display: "flex", alignItems: 'center'}} className="">
                            <div className="col-4">
                            <Threecolprop 
                               img = {ordergen}
                               title = "Oder Generated"
                               info = "We aggregate & secure demand from businesses"
                            />
                            </div>
                           
                           <div className="col-4">
                           <Threecolprop 
                               img = {demands}
                               title = "On-demand Harvesting"
                               info = "The fresh produce is harvested & delivered to our nearest drop-off point"
                            />
                           </div>
                         
                            <div className="col-4">
                            <Threecolprop 
                               img = {delevery}
                               title = "Collection, Delivery"
                               info = "The produce is packaged and delivered in less than 24 hours"
                            />
                            </div>
                            

                        </div>
                    </div> 
                    {/* How TerraLima Works section */}

                    <div style={{backgroundColor: '#E8F2F2'}}>
                        <p style={{fontFamily:'ZabalBold'}} className="fs-1 fw-bold text-center pt-5 ">Why use TerraLima?</p>
                        <p className="text-center p-5 text-muted ">
                        Our mission is to increase the income of farmers by streamlining the agricultural supply chain. 
                        Terralima helps farmers access extension services, 
                        financial services and fair produce prices.
                        </p>
                    </div>

                    {/* for Farmers section */}
                    <div style={{margin: '5%'}} className="d-flex justify-content-center">
                          <div style={{margin: '50px 0px 0px 54px'}} className="">
                          <p style={{fontFamily:'ZabalBold'}} className="fs-2 fw-bold pt-5 mt-5">For Farmers</p>
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
                          <img style={{height:'700px'}} className="pt-5 mx-5" src={placeholderimg} alt='placeholder'/>
                    </div>
                    {/* For farmer section */}

                     {/* For Bussiness section */}
                    <div style={{gap: '20px', margin: '5%'}} className="d-flex justify-content-evenly">

                           <img style={{height:'600px'}} className="" src={lightbox} alt='light'/>
                           <div className="">
                             <h2 style={{fonFamily:'ZabalBold'}} className="mt-5 pt-5 fw-bold">For Bussiness</h2>
                             
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
                    <div className="pb-5">
                        <h2 className="text-center fw-bold pt-5">Meet Our Partners</h2>
                        <div  style={{gap: '30px', alignSelf: 'center'}} className="justify-content-center d-flex">
                            <img src={frame3} alt='frame'/>
                            <img src={frame4} alt='frame'/>
                            <img src={frame5} alt='frame'/>
                            <img src={frame6} alt='frame'/>
                        </div>
                    </div>
                     {/* Our Partners */}

                     <div className=" align-items-center" style={{backgroundColor: '#DAE8E8',background:`url ${leaves}` , boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)', display:'flex', position:'relative'}}>
                       <div style={{position:'absolute',marginLeft:'10%', marginTop:'30px', width:'512px',height:'327px'}} className="bg-light">
                        <p className="mx-5 fs-5 mt-5" style={{color:'#699698'}}>VIDEO SPOTLIGHT</p>
                        <p className="mx-5 fw-bold fs-3">Meet the Farmers</p>
                        <div className="btn bg-success col-4 text-light mx-5">Watch Video</div> 
                       
                       </div>
                     <div style={{marginLeft:'35%', marginTop:'100px', marginBottom:'100px'}} className="embed-responsive embed-responsive-16by9">
                     {/*  eslint-disable-next-line jsx-a11y/iframe-has-title */}
                     <iframe style={{width:'800px', height:'640px'}} className="embed-responsive-item" src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0" allowfullscreen>
                    
                     </iframe>
                    </div>
                     </div>

                     <div style={{margin: '5%'}} className="d-flex justify-content-evenly">
                        <div className="">
                        <img className="" src={placeholderimg2} alt='farm'/>
                        </div>

                        
                        <div style={{marginTop:'250px'}} className="col-6">
                            <h1 className="mx-5">Food safety</h1>
                            <p className="m-5 text-muted">
                            At Terralima, we are committed to helping ensure that your food will always be safe to eat. 
                            Our trusted network of farmers are trained by our extension agents. 
                            Very strict measures are taken to prevent microbial contamination of fruits and vegetables as they are produced, packed, handled and stored. 
                            During harvesting and collection, we quality check the produce at the drop-off points to ensure they meet healthy standards. 
                            All packages are tagged to ensure traceability right from the farm to delivery. 
                            </p>

                        </div>

                     </div>
                     <div>
                     <img style={{width: '100%'}} src={comingsoon} alt="coming soon"/>
                     </div>
                     <Footer />

                </div>
            </div>

        </div>
    )
}

export default Home;
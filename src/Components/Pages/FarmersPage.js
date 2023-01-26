import React from "react";
import farm from '../images/farm.png'
import Threecolprop from "../Threecolprops";
import nums from '../images/nums.png';
import placeholderimage4 from '../images/placeholderImage4.png'
import mg from '../images/mg.png'
import partner from '../images/partner.png'
import partner2 from '../images/partner2.png'
import partner3 from '../images/partner3.png'
import partner4 from '../images/partner4.png'
import vector1 from '../images/Vector1.png'
import Footer from '../FooterComp'
import signupimg from '../images/signup.png'
import agentimg from '../images/agent.png'
import communicationimg from '../images/communication.png'


const FarmerPage = () => {
    return(
        <div>
            <img className="w-100" src={farm} alt='farm'/>
            <div style={{background: '#E8F2F2'}}>
                <h1 className="text-center pt-5">What is TerraLima?</h1>
                <p className="m-5 p-2">TerraLima provides farmers with market access and connection to extension services.

Smallholder farmers often lack access to profitable, value-added markets. In the absence of critical supporting functions – such as infrastructure and service provision – farmers struggle to shift from subsistence and barter to more productive forms of exchange. This is due to the lack of support during the early stages of the planting cycle and unfavourable low pricing and food wastage during the harvesting period.

We believe farmers work the hardest in the Agricultural value chain hence deserve to be rewarded accordingly.

We at TerraLima seek to improve the livelihoods of farmers by improving the inefficiencies in the Agricultural value chain.
</p>
            </div>

            <div>
            <p className="fs-1 text-center p-5 fw-bold">How TerraLima Works?</p>
            <img className="px-3" src={nums} alt='nums'/>
                        <div className="d-flex justify-content-center ">
                <Threecolprop
                img= {signupimg}
                title= "Sign Up via USSD"
                info= "Farmers sign up by dialing the USSD code or visiting our collection centers located in their sub-county or area." 
                />
                <Threecolprop 
                img ={agentimg}
                title= "TerraLima field agent visits"
                info= "Our field agents visit the farm to gather information about the farms such as farm location and size, verify value chains, etc"
                />
                <Threecolprop 
                img= {communicationimg}
                title= "We establish communication"
                info= "We maintain communciation with the farmer throughout the planting cycle via USSD, SMS or the field agent."
                />
                
            </div>

         </div>
         <div style={{background:'#F9FBFC'}}>
         <div className="d-flex m-5">
            <div className="p-5">
                <img src={placeholderimage4} alt='place'/>
            </div>
            <div className="p-5">
                <img src={mg} alt='mg' className="pt-5"/>
                <p className="fs-2 text-muted pt-5">
                We are creating impact by using data to forecast demand, technology to match demand and processes to reduce food wastage.
                </p>
            </div>
         </div>
         </div>
         <div className="m-3">
            <h3 className="text-center fw-bold fs-2">Why become a partner?</h3>
            <div className="d-flex pt-5 justify-content-center">
                <div className="p-3 justify-content-center col-3">
                    <img className="p-3" src={partner} alt='partner'/>
                    <p className="p-2 fw-bold">Transparent pricing</p>
                    <p className="p-2 text-muted">Farmers sign up by dialing the USSD code or visiting our collection centers located in their sub-county or area.</p>
                </div>
                <div className="p-3 justify-content-center col-3">
                 <img className="p-2" src={partner2} alt='partner1'/>
                 <p className="p-2 fw-bold">Know what to plant</p>
                 <p className="p-2 text-muted">Our field agents visit the farm to gather information about the farms such as farm location and size, verify value chains, etc</p>
                </div>
                <div className="p-3 justify-content-center col-3">
                    <img className="p-3" src={partner3} alt='partner3'/>
                    <p className="p-3 fw-bold">Instant digital payments</p>
                    <p className="p-2 text-muted">We maintain communciation with the farmer throughout the planting cycle via USSD, SMS or the field agent.</p>
                </div>
                <div className="justify-content-center col-3">
                    <img className="p-3" src={partner4} alt='partner4'/>
                    <p className="p-2 fw-bold">Access extension services</p>
                    <p className="p-1 text-muted">Soil testing, fumigation, crop analysis, satellite crop yield prediction and crop disease detection.</p>
                </div>
            </div>
         </div>
         <div style={{background:'#E8F2F2'}}>
            <h2 className="text-center fw-bold fs-2 pt-5">Frequently asked questions</h2>
            <div className="m-5 p-5 justify-content-center">
                <div className="d-flex justify-content-between">
                    <p>What is TerraLima?</p>
                    <span><img src={vector1} alt='vector'/></span>
                </div>
                <hr/>
                <div className="d-flex justify-content-between">
                <p>How does delivery work?</p>
                    <span><img src={vector1} alt='vector'/></span>
                </div>
                <hr/>
                <div className="d-flex justify-content-between">
                <p>How long does delivery takes?</p>
                    <span><img src={vector1} alt='vector'/></span>
                </div>
                <hr/>
                <div className="d-flex justify-content-between">
                <p>What products can I order on TerraLima?</p>
                    <span><img src={vector1} alt='vector'/></span>
                </div>
                <hr/>
                <div className="d-flex justify-content-between">
                <p>Does TerraLima deliver to my location?</p>
                    <span><img src={vector1} alt='vector'/></span>
                </div>
                <hr/>
            </div>
         </div>
         <Footer />
         
        </div>
    )
}
export default FarmerPage;
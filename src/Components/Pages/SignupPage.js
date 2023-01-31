import React from "react";
import { Card } from "react-bootstrap";
import placeholderimg5 from '../images/placeholderImage5.png'
import farmeracc from '../images/farmeracc.png'
import consumeracc from '../images/consumeracc.png'
import Footer from "../FooterComp";

const SignUp = () => {
    return(
      <div>
        <div className="d-flex justify-content-evenly">
            <div>
               <h2 style={{paddingTop: '100px'}} className="text-center">Choose an Accont type</h2>
               <div style={{paddingTop: '34px'}} className="d-flex justify-content-between ">
                <Card className="mx-2 sign">
                    <img className="p-3" src={farmeracc} alt='farmer'/>
                    <p className="text-center fw-bold">Farmer</p>
                    <div className="d-flex justify-content-center pt-4">
                    <button type="button" className="btn btn-success btn-sm w-50 ">Select</button>
                    </div>

                </Card>
                <Card className="mx-2 sign">
                    <img className="p-3" src={consumeracc} alt='consumer'/>
                    <p className="text-center fw-bold px-2">Bussiness / Consumer</p>
                    <div className="d-flex justify-content-center pb-4">
                    <button type="button" className="btn btn-success btn-sm w-50">Select</button>
                    </div>
                </Card>
               </div>
            </div>
            <div>
                <img style={{height: '600px'}} src={placeholderimg5} alt='placeholder'/>
            </div>
        </div>
        <Footer />
      </div>
    )
}
export default SignUp;
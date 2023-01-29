import React from "react";
import { Card } from "react-bootstrap";
import placeholderimg5 from '../images/placeholderImage5.png'
import farmeracc from '../images/farmeracc.png'
import consumeracc from '../images/consumeracc.png'
import Footer from "../FooterComp";

const SignUp = () => {
    return(
      <div>
        <div className="d-flex justify-content-between m-5">
            <div>
               <h2 className="text-center pt-5 mt-5">Choose an Accont type</h2>
               <div className="d-flex justify-content-between mt-5 pt-5">
                <Card className="mx-2">
                    <img className="p-3" src={farmeracc} alt='farmer'/>
                    <p className="text-center fw-bold">Farmer</p>
                    <div className="d-flex justify-content-center pt-4">
                    <button type="button" className="btn btn-success btn-sm w-50 ">Select</button>
                    </div>

                </Card>
                <Card className="mx-2">
                    <img className="p-3" src={consumeracc} alt='consumer'/>
                    <p className="text-center fw-bold px-2">Bussiness / Consumer</p>
                    <div className="d-flex justify-content-center pb-4">
                    <button type="button" className="btn btn-success btn-sm w-50">Select</button>
                    </div>
                </Card>
               </div>
            </div>
            <div>
                <img src={placeholderimg5} alt='placeholder'/>
            </div>
        </div>
        <Footer />
      </div>
    )
}
export default SignUp;
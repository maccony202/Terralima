import React from "react";
import partnerloginimg from '../images/partnerlogimg.png'
import Footer from '../FooterComp'

const PartnerLogin = () =>{
    return(
        <div>
            <div className="d-flex justify-content-between">
                <form style={{paddingTop: '70px', marginLeft: '5%'}} action="post">
                    <h1 className="text-center">Partner Portal</h1>
                    <p style={{width: '500px', alignItems:'center', padding:'20px'}} className="text-muted">For extension officers, field agents, country officers and administrators</p>
                    <div>
                    <div class="mb-3 mx-3">
                <label for="formGroupExampleInput2" className="form-label px-1" required>Email</label>
                <input type="email" className="form-control" id="formGroupExampleInput2"/>
                </div>
                <div class="mb-3 mx-3">
                <label for="formGroupExampleInput2" className="form-label px-1">Password</label>
                <input type="password" className="form-control" id="formGroupExampleInput2" required/>
                </div>
                 <span className="text-success mx-3">Forgot Password?</span>
                 <div className="d-flex justify-content-center mt-4">
                 <button type="submit" className="btn btn-success btn-lg">Login</button>
                 </div>
                    </div>
                </form>
                <div>
                    <img style={{height: '600px'}} src={partnerloginimg} alt='partner login'/>
                </div>
            </div>
            <Footer />
        </div>

    )
}
export default PartnerLogin;
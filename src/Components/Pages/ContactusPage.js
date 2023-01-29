import React from "react";
import contactus from '../images/contactus.png'
import emailimg from '../images/email.png'
import phoneimg from '../images/phone.png'
import whatsapp from '../images/whatsapp.png'
import conmap from '../images/conmap.png'
import Footer from "../FooterComp";

const ContactUs = () => {
    return(
       <div>
        
          <img className="w-100" src={contactus} alt='contact us'/>
          <div style={{background:'#E8F2F2'}}>
          <div className="d-flex justify-content-between m-5 pt-5 pb-5" >
            <div className="align-self-center">
                <img className="p-2" src={emailimg} alt='email'/>
                <p className="p-2">Email</p>
                <p><a className="p-1 text-muted" href="/">hello@terralima.co</a></p>
            </div>
            <div className="align-self-center">
            <img className="p-2" src={phoneimg} alt='email'/>
                <p className="p-2">Phone</p>
                <p><a className="p-1 text-muted" href="/">+234 8188 95 7790</a></p>
            </div>
            <div className="align-self-center">
            <img className="p-2" src={whatsapp} alt='email'/>
                <p className="p-2">Whatsapp</p>
                <p><a className="p-1 text-muted" href="/">+234 8098 49 7464</a></p>
            </div>
          </div>
          </div>

          <div className="d-flex justify-content-between m-5 pb-5">
            <div>
            <div className="d-flex pt-3">
             <div class="mb-3 mx-3">
                <label for="formGroupExampleInput" className="form-label px-1">First Name</label>
                <input type="text" className="form-control" id="formGroupExampleInput"/>
                </div>
                <div class="mb-3 mx-3">
                <label for="formGroupExampleInput2" className="form-label px-1">Last Name</label>
                <input type="text" className="form-control" id="formGroupExampleInput2"/>
                </div>
             </div>
             <div class="mb-3 mx-3">
                <label for="formGroupExampleInput2" className="form-label px-1">Company Email</label>
                <input type="email" className="form-control" id="formGroupExampleInput2"/>
                </div>
             <div class="mb-3 mx-3">
                <label for="formGroupExampleInput2" className="form-label px-1">Company Name</label>
                <input type="text" className="form-control" id="formGroupExampleInput2"/>
                </div>
                <div class="mb-3 mx-3">
                <label for="formGroupExampleInput2" className="form-label px-1">Comments</label>
                <textarea rows={6} type="text" className="form-control" id="formGroupExampleInput2" placeholder="type your message..."/>
                </div>
                <div class="mb-3 mx-3">
                <label for="formGroupExampleInput2" className="form-label px-1">Phone Number(Optional)</label>
                <input type="number" className="form-control" id="formGroupExampleInput2"/>
                </div>
                <button type="button" className="btn btn-success btn-lg px-4 mx-3">Submit</button>
            </div>
             
            <div>
                <img src={conmap} alt='map'/>
            </div>
          </div>
          <Footer />
          
    
       </div>
    )
}
export default ContactUs;
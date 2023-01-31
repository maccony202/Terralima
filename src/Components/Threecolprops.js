import React from "react";

const Threecolprop = (props) =>{
    return(
        <div>
                       
                            <div className="">
                                <img className="" src={props.img} alt="orger generated"/>
                                <p className="fs-5 fw-bold ">{props.title}</p>
                                <p className="  text-muted">{props.info}</p>

                            </div>
                            
                    </div> 
    )
}
export default Threecolprop;
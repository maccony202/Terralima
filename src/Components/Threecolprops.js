import React from "react";

const Threecolprop = (props) =>{
    return(
        <div>
                       
                            <div style={{marginLeft: '120px'}} className="">
                                <img className="px-5" src={props.img} alt="orger generated"/>
                                <p className="fs-5 fw-bold p-2">{props.title}</p>
                                <p className=" p-1 text-muted">{props.info}</p>

                            </div>
                            
                    </div> 
    )
}
export default Threecolprop;
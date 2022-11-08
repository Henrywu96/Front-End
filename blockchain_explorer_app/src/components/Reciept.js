import React from "react";
import { useLocation } from "react-router";

const Reciept = () => {
    const location = useLocation();

    return ( 
        <div className="div-class">
            <div className="inner-div-class">
               <h1>Reciept</h1>
                <p><b>Transaction Hash: </b>0xf5ca38f748a1d6eaf726b8a42fb575c3c71f1864a8143301782de13da2d9202b</p>
                <p><b>Block Hash: </b>0x624b60c58c9d8bfb6ff1886c2fd605d2adeb6ea4da576068201b6c6958ce93f4</p>
                <p><b>Block Number: </b>1</p>
                <p><b>From: </b>0x30DCA37EE8AF435A8892ECACEAD83879A347EFA2</p>
                <p><b>To: </b>0xD562F394887B8F5B6BA5BD7328A00DC176C04F24</p>
                <p><b>Gas Used: </b>20000</p>

                <h1>My Wallet</h1>
                <div>
                    <p><b>Address: </b>0x57E88F2C58BA02865AE27E8C345C2761EA243352</p>
                    <p><b>Blanace: </b>{location.state.amount}</p>
                </div> 
            </div>
            
        </div>
    );  
}
 
export default Reciept;
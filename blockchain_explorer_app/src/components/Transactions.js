import React from "react";
import Timer from "./Timer";

const Transactions = () => {
    return ( 
        <div className="div-class">
            <h1>Transaction History</h1>
            <div className="inner-div-class">
                <p><b>Transaction Hash: </b>4a44dc15364204a80fe80e9039455cc1608281820fe2b24f1e5233ade6af1dd5</p>
                <p><b>Status: </b>Success</p>
                <p><b>Timestamp: </b><Timer /></p>
                <p><b>From: </b>0x30DCA37EE8AF435A8892ECACEAD83879A347EFA2</p>
                <p><b>To: </b>0xDD7DBA22C3ACBE83145FCD8D450B38DB946BF40A</p>
                <p><b>Value: </b>500 <b>ETH</b></p>
                <p><b>Gas Used: </b>20000</p>
            </div>
        </div>
    );
}

export default Transactions;
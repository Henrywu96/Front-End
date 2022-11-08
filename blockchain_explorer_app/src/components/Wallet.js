import React, {useState} from "react";
import { useNavigate } from "react-router";
// import RecieptWallet from "./RecieptWallet";
import { useLocation } from 'react-router-dom';

const Wallet = () => {
    const location = useLocation();
    const [amount, setAmount] = useState();
    const navigate = useNavigate();
    const handleChange = (e) => {
        setAmount(e.target.value);
    }

    const submitForm = (e) => {
        e.preventDefault();
        navigate('/reciept', {state: {amount: amount}});
    }

    return (
        <>
            <div className="div-class">
                <h1>Transfer</h1>
                <div className="inner-div-class">
                    <form onSubmit={submitForm}>
                        <p><b>From: </b>0x30DCA37EE8AF435A8892ECACEAD83879A347EFA2</p>
                        <p><b>To: </b>{location.state.id}</p>
                        <label>
                            <b>Amount:</b> <input type='text' name='amount' value={amount} onChange={handleChange} />
                        </label>
                        <button type="submit" className="btn">Submit</button>
                    </form>
                </div>
            </div>
        </>
    );
}

export default Wallet;
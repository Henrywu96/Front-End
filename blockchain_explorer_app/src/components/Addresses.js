import React from "react";
import { Link } from "react-router-dom";

const Addresses = () => {
    // const navigate = useNavigate();

    return ( 
        <div className="div-class">
            <h1>Blockchain Node Addresses</h1>
            <div className="list-div-class">
                <ul>
                    <li><Link to='/wallet' state={{ id: "0x36069803F0C7F0FBD1E5B09B2BA21FE04BD42ACE" }}>0x36069803F0C7F0FBD1E5B09B2BA21FE04BD42ACE</Link></li>
                    <li><Link to='/wallet' state={{ id: "0xFE5360318983D98263693B562D37EA14325222B0" }}>0xFE5360318983D98263693B562D37EA14325222B0</Link></li>
                    <li><Link to='/wallet' state={{ id: "0x5E47CA3D8303A4A3E203EEA5BCD1E5D7AF765E87" }}>0x5E47CA3D8303A4A3E203EEA5BCD1E5D7AF765E87</Link></li>
                    <li><Link to='/wallet' state={{ id: "0x51227EF47D4D1144E4BD9A7C679199F055F35BA6" }}>0x51227EF47D4D1144E4BD9A7C679199F055F35BA6</Link></li>
                    <li><Link to='/wallet' state={{ id: "0xFBEE7777D2CD9A409AEE61D65C73074ECC57704B" }}>0xFBEE7777D2CD9A409AEE61D65C73074ECC57704B</Link></li>
                    <li><Link to='/wallet' state={{ id: "0xA00FAC787C08E276CCA38518677C9D0DBB26ABA9" }}>0xA00FAC787C08E276CCA38518677C9D0DBB26ABA9</Link></li>
                    <li><Link to='/wallet' state={{ id: "0x7A40D5DA7FF9F04782FFDC73550E221999FC4844" }}>0x7A40D5DA7FF9F04782FFDC73550E221999FC4844</Link></li>
                    <li><Link to='/wallet' state={{ id: "0x318AE978E233F2A2FFF94031F4C87569DA3DC084" }}>0x318AE978E233F2A2FFF94031F4C87569DA3DC084</Link></li>
                    <li><Link to='/wallet' state={{ id: "0x114C298A8E3CE2E04F130E9059D1195393D4832A" }}>0x114C298A8E3CE2E04F130E9059D1195393D4832A</Link></li>
                    <li><Link to='/wallet' state={{ id: "0xCAB504C19F87B017F779B97B7AE11DF1060F6DA4" }}>0xCAB504C19F87B017F779B97B7AE11DF1060F6DA4</Link></li>
                    <li><Link to='/wallet' state={{ id: "0xD6CF23F9C0C5DAFBD4867F7E815212FDF5EB7ACC" }}>0xD6CF23F9C0C5DAFBD4867F7E815212FDF5EB7ACC</Link></li>
                    <li><Link to='/wallet' state={{ id: "0x3160C978B175FF2ECEF59ABF4A06BA4EE770D61B" }}>0x3160C978B175FF2ECEF59ABF4A06BA4EE770D61B</Link></li>
                    <li><Link to='/wallet' state={{ id: "0x46653D293DE9C40D0AA185E22512141AC21FA7DE" }}>0x46653D293DE9C40D0AA185E22512141AC21FA7DE</Link></li>
                    <li><Link to='/wallet' state={{ id: "0xEA81B6DB8FE262771E7ECE5B0D07C360F4D5ADD2" }}>0xEA81B6DB8FE262771E7ECE5B0D07C360F4D5ADD2</Link></li>
                    <li><Link to='/wallet' state={{ id: "0xEF347D8178497809E5066A52E76084D67B005785" }}>0xEF347D8178497809E5066A52E76084D67B005785</Link></li>
                    <li><Link to='/wallet' state={{ id: "0x7C6D844DEB8E9FBAAD63EC1B30240744958AE94D" }}>0x7C6D844DEB8E9FBAAD63EC1B30240744958AE94D</Link></li>
                    <li><Link to='/wallet' state={{ id: "0xA20D5ECA8F976DF9D7EE944012330ED394BF5E5E" }}>0xA20D5ECA8F976DF9D7EE944012330ED394BF5E5E</Link></li>
                    <li><Link to='/wallet' state={{ id: "0x73949DD71C27EE63CB12EC53F59B8BBE7E72530D" }}>0x73949DD71C27EE63CB12EC53F59B8BBE7E72530D</Link></li>
                    <li><Link to='/wallet' state={{ id: "0xFD01A3263CDF0CF9A7DD528C2733B789B5B36A05" }}>0xFD01A3263CDF0CF9A7DD528C2733B789B5B36A05</Link></li>
                    <li><Link to='/wallet' state={{ id: "0x7E9600C6B90F2812A9E3BE8708F2A71E37B543EB" }}>0x7E9600C6B90F2812A9E3BE8708F2A71E37B543EB</Link></li>
                </ul>
            </div>
        </div>
    );
}

export default Addresses;
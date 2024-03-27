import React from "react";
import JumbotronAkti from "../components/JumbotronAkti";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
import ContactPhoneOutlinedIcon from "@mui/icons-material/ContactPhoneOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";

function Contact() {
  return (
    <>
      <JumbotronAkti />
      <div className="container">
        <div className="row">
          <h2 className="mt-3 mb-3 text-center">İletişim</h2>
          <hr />
        </div>
        <div className="row justify-content-md-center">
          <div className="col-6">
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <LocalPhoneOutlinedIcon />&nbsp;
                Alo 153 Beyazmasa / Santral: 444 16 00
              </li>
              <li className="list-group-item">
                <ContactPhoneOutlinedIcon />&nbsp;
                Whatsapp Hattı : 0501 153 16 16
              </li>
              <li className="list-group-item">
                <LocationOnOutlinedIcon />&nbsp;
                Zafer Mh. Ankara Yolu Cd. C Blok No:1 PK:16080 Osmangazi / BURSA
              </li>
              <li className="list-group-item">
                <EmailOutlinedIcon />&nbsp;
                beyazmasa@bursa.bel.tr
              </li>
              <li className="list-group-item">
                <EmailOutlinedIcon />&nbsp;
                abdullahakti@gmail.com
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;

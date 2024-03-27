import React from "react";
import { NavLink } from "react-router-dom";


function Footer() {
  return (
    <>
      <footer
        className="bg-dark text-light bd-footer py-4 py-md-5 mt-5 bg-body-tertiary"
        data-bs-theme="dark"
      >
        <div className="container py-4 py-md-5 px-4 px-md-3 text-body-secondary">
          <div className="row">
            {/* Logo sütunu*/}
            <div className="col-lg-3 mb-3">
              <a
                className="d-inline-flex align-items-center mb-2 text-body-emphasis text-decoration-none"
                href="/"
                aria-label="Bursa Büyükşehir Belediyesi"
              >
                <img
                  src="https://www.bursa.bel.tr/assets/images/logo_beyaz1.png"
                  width="250"
                  className="d-block me-2"
                />
              </a>
              <ul className="list-unstyled small">
                <hr />
                <li className="mb-2">
                  <span className="fs-5">Bursa Ulaşım Rehberi</span>
                </li>
                <li className="mb-2">
                  <span className="fs-5">
                    <a
                      className="alert-link text-decoration-none"
                      href="https://abdullahakti.com"
                    >
                      Abdullah AKTI
                    </a>
                  </span>
                </li>
                <li className="mb-2">Versiyon - 1.3</li>
              </ul>
            </div>
            {/* Bağlantılar sütunu*/}
            <div className="col-6 col-lg-3 offset-lg-1 mb-3">
              <h5>Bağlantılar</h5>
              <hr />
              <ul className="list-unstyled">
                <li className="mb-2">
                  <NavLink className="nav-link" to="/">
                    Ana Sayfa
                  </NavLink>
                </li>
                <li className="mb-2">
                  <NavLink
                    className="nav-link"
                    to="https://www.bursa.bel.tr/"
                    target="_blank"
                  >
                    Bursa Büyükşehir Belediyesi
                  </NavLink>
                </li>
                <li className="mb-2">
                  <NavLink
                    className="nav-link"
                    to="https://uretkenakademi.com/"
                    target="_blank"
                  >
                    Üretken Akademi
                  </NavLink>
                </li>
              </ul>
            </div>
            {/* Yardımcı Sayfalar sütunu*/}
            <div className="col-6 col-lg-3 mb-3">
              <h5>Yardımcı Sayfalar</h5>
              <hr />
              <ul className="list-unstyled">
              <li className="mb-2">
                  <NavLink
                    className="nav-link"
                    to="https://www.bursa.bel.tr/sehir-kameralari#turistik"
                    target="_blank"
                  >
                    Turistik Kameralar
                  </NavLink>
                </li>
                <li className="mb-2">
                  <NavLink
                    className="nav-link"
                    to="https://www.bursa.bel.tr/sehir-kameralari#trafik"
                    target="_blank"
                  >
                    Trafik Kameraları
                  </NavLink>                  
                </li>
                <li className="mb-2">
                  <NavLink
                    className="nav-link"
                    to="https://www.bursa.bel.tr/hizmetler/kent-ici-ulasim-agi-1"
                    target="_blank"
                  >
                    Kent İçi Ulaşım Ağı
                  </NavLink>                  
                </li>
                <li className="mb-2">
                  <NavLink
                    className="nav-link"
                    to="https://www.bursa.bel.tr/hizmet-kat/kultur---sanat-17"
                    target="_blank"
                  >
                    Bursa'da Kültür Sanat
                  </NavLink>                  
                </li>
              </ul>
            </div>

          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;

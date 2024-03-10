import React from "react";
import ThemeIcon from "./ThemeIcon";

function Footer() {
  return (
    <>
      <footer className="bg-dark text-light bd-footer py-4 py-md-5 mt-5 bg-body-tertiary" data-bs-theme="dark">
        <div className="container py-4 py-md-5 px-4 px-md-3 text-body-secondary">
          <div className="row">
            <div className="col-lg-3 mb-3">
              <a className="d-inline-flex align-items-center mb-2 text-body-emphasis text-decoration-none"
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
                <li className="mb-2"><span className="fs-5">Abdullah AKTI</span></li>
                <li className="mb-2">v1.0</li>
              </ul>
            </div>
            <div className="col-6 col-lg-2 offset-lg-1 mb-3">
              <h5>Bağlantılar</h5>
              <ul className="list-unstyled">
                <li className="mb-2">
                  <a href="/">Ana Sayfa</a>
                </li>
                <li className="mb-2">
                  <a href="/docs/5.3/">Dokümantasyon</a>
                </li>
                <li className="mb-2">
                  <a href="/docs/5.3/examples/">Örnekler</a>
                </li>
                <li className="mb-2">
                  <a href="https://blog.getbootstrap.com/">Blog</a>
                </li>

              </ul>
            </div>

            <div className="col-6 col-lg-2 mb-3">
              <h5>Projeler</h5>
              <ul className="list-unstyled">
                <li className="mb-2">
                  <a
                    href="https://github.com/twbs/icons"
                    target="_blank"
                    rel="noopener"
                  >
                    Ulaşım
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-6 col-lg-2 mb-3">
              <h5>Topluluk</h5>
              <ul className="list-unstyled">
                <li className="mb-2">
                  <a
                    href="https://github.com/twbs/bootstrap/issues"
                    target="_blank"
                    rel="noopener"
                  >
                    Geliştirme
                  </a>
                </li>
                <li className="mb-2">
                  <a
                    href="https://github.com/sponsors/twbs"
                    target="_blank"
                    rel="noopener"
                  >
                  Kurumsal Sponsor
                  </a>
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

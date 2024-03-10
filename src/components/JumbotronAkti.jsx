import React from "react";

function JumbotronAkti() {
  return (
    <>
      <div className="container my-5">
        <div className="position-relative p-5 text-center text-muted bg-body border border-dashed rounded-5">
          <img
            width="300"
            src="https://www.bursa.bel.tr/assets/images/logo_dark1.png"
            alt=""
          />
          <br />
          <br />
          <h1 className="text-body-emphasis">Bursa Ulaşım Rehberi</h1>
          <p className="col-lg-8 mx-auto mb-4">
            Bursa'daki tüm ulaşım kanallarına sitemiz üzerinden ulaşabilirsiniz. Kategorileri inceleyebilir ya da arama kutusundan içerik arayabilirsiniz.
          </p>
        </div>
      </div>
    </>
  );
}

export default JumbotronAkti;

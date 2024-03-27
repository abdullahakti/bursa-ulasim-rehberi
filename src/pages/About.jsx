import React from "react";
import JumbotronAkti from "../components/JumbotronAkti";

function About() {
  return (
    <>
      <JumbotronAkti />
      <div className="container">
        <div className="row">
          <h2 className="mt-3 mb-3 text-center">Hakkımızda</h2>
          <hr />
        </div>
        <div className="row justify-content-md-center">
          <p className="col-8">
            Bursa ulaşım rehberi,{" "}
            <a className="btn btn-light" href="https://uretkenakademi.com/">
              <strong>Üretken Akademi</strong>
            </a>{" "}
            ve{" "}
            <a className="btn btn-light" href="https://www.bursa.bel.tr/">
              <strong>Bursa Büyükşehir Belediyesi</strong>
            </a>
            'nin işbirliği ile bir araya geldiği <code>&lt;Code16&gt;</code>{" "}
            yazılım programı ile mümkün oldu. Kariyerini yazılım üzerine kurmak
            isteyen ya da mevcut kariyerini yazılım alanına çevirmek isteyenleri
            bir araya getirmeye çalışan program aynı zamanda Bursa'da akıllı
            şehircilik uygulamalarını geliştirmeyi amaçlıyor.
          </p>
          <p className="col-8">
            Bu kapsamda <strong>Bursa Ulaşım Rehberi</strong>, Bursa'yı
            keşfetmeye gelen yerli ve yabancı turistlerin şehirdeki tüm ulaşım
            alternatiflerini tek bir platform üzerinde görüntülemesini ve ulaşım
            planlamalarını çok daha kolay yönetmesini sağlamaktadır.
          </p>
        </div>
      </div>
    </>
  );
}

export default About;

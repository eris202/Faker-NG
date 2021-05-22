import Head from "next/head";
import React from "react";
import ModalComponent from "../component/modal";
export default function Home() {
  const [modalShow, setModalShow] = React.useState(false);
  return (
    <>
        <Head>
          <title>Home - Faker-NG</title>
          <meta
            name="description"
            content="Generate thousand on nigerian data e.g name, state, gender e.t.c "
          />
          <link rel="icon" href="/images/nigeria.jpeg" />
        </Head>

        <div className="container">
          <div className="row">
          <h3 className="mb-5 mt-3 text-start text-white">Eri's</h3>

            <div className="col-md-7">
              <div className="text-bg">
                <h1>
                  Generate Fake Nigerian
                  <br /> Data Or Info
                </h1>
                <div className="summary">
                  With thise tool, you can generate thousands on nigerian data
                  in a JSON or list format.
                </div>
                <div className="clearfix"></div>

                <a className="btn btn-lg mt-4 text-white btn-success" href="#" onClick={() => setModalShow(true)}>
                  Get started
                </a>
              </div>
            </div>
            <div className="col-md-5 overflow-hidden">
              <div className="text-img mt-5">
              <img className="img-fluid" src="/images/undraw_server_status_5pbv.svg" />
               
                <h3 className="text-bg">01</h3>
              </div>
            </div>
          </div>
        </div>
      <div className="clearfix my-5">
        <ModalComponent show={modalShow} onHide={() => setModalShow(false)} />
      </div>
    </>
  );
}

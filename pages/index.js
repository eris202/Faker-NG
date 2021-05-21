import Head from "next/head";
import React from "react";
import Image from "next/image";
import { useEffect, useState } from "react";
import styles from "../styles/Home.module.css";
import axios from "axios";
import ModalComponent from "../component/modal";

import { Button, Modal } from "react-bootstrap";
export default function Home() {
 
 const [modalShow, setModalShow] = React.useState(false);
  return (
    <>
      <div className={styles.container}>
        <Head>
          <title>Create Next App</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
          {/* <link
            rel="stylesheet"
            href="https://netdna.bootstrapcdn.com/font-awesome/4.0.3/css/font-awesome.css"
          />
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/fancybox/2.1.5/jquery.fancybox.min.css"
            media="screen"
          /> */}
        </Head>
        {/* <div className="loader_bg">
        <div className="loader">
          <img src="images/loading.gif" alt="#" />
        </div>
      </div> */}

        <div className="container-fluid">
          <div className="row d_flex">
            <div className="col-md-5">
              <div className="text-bg">
                <h1>
                  Generate Fake Nigerian
                  <br /> Data Or Info
                </h1>
                <strong style={{ fontSize: "20px" }}>
                  With thise tool, you can generate thousands on nigerian data
                  in a JSON or list format.
                </strong>
                <div className="clearfix"></div>

                <a href="#" onClick={() => setModalShow(true)}>
                  Generate
                </a>
              </div>
            </div>
            <div className="col-md-7 padding_right1">
              <div className="text-img">
                <figure>
                  <img src="/images/nigeria.png" alt="#" />
                </figure>
                <h3>01</h3>
              </div>
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
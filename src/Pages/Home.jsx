import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.js";
import "bootstrap/dist/js/bootstrap.bundle.min";
import heroimg from "../Assets/Homehero.png";
import homeElement from "../Assets/homeEle01.png";

export default function Home() {
  return (
    <div className="container home-bg">
      <div className="row hero d-flex">
        <div className="hero-content col-md-6 d-flex">
          <h1>Stock Prices</h1>
          <p>
            Welcome to the Stock Market Portal. You may click on stocks to view
            all the available companies or Quote to get the latest price
            information by stock symbol, or choose Price History or search to
            sample from the most recent one hundred days of information for a
            particular stock.
          </p>
          <Link to="/stock">
            <button type="button" className="btn btn-outline-light home-btn">
              View Stocks
            </button>
          </Link>
        </div>
        <div className="col-md-6 d-none d-md-flex justify-content-center ">
          <img src={heroimg} alt="hero-img" />
        </div>
      </div>
      <div className="card-area">
        <h2 className="text-center text-white mb-5">
          Deliver real time information
        </h2>
        <img id="homeEle" src={homeElement} alt="hero-img" />
      </div>
      <div className="row deck d-flex justify-content-center">
        <div className="card col-10 col-sm-10 col-md-5 col-lg-3 bg-transparent">
          <div className="card-body">
            <h5 className="card-title">Professional Analysis tool</h5>
            <p className="card-text">
              Helping shareholders understand stock information clearly
            </p>
          </div>
        </div>

        <div className="card col-10 col-sm-10 col-md-5 col-lg-3  bg-transparent">
          <div className="card-body">
            <h5 className="card-title">Real-Time stock updates</h5>
            <p className="card-text">
              The collected information has segmentation into three sections:
              Day-time, intra-day, and end-of-day.
            </p>
          </div>
        </div>

        <div className="card col-10 col-sm-10 col-md-5 col-lg-3  bg-transparent">
          <div className="card-body">
            <h5 className="card-title">Institutional Level Data mining </h5>
            <p className="card-text">
              Many other tools are available alongside to prompt
              institutional-level data mining and analysis of information
              gathered.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

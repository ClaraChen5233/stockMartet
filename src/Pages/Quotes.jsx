import InfoTable from "../Component/InfoTable";
import Error from "../Component/Error";
import Loading from "../Component/Loading";
import { UseStockData } from "../Component/api";
import MapChart from "../Component/Chart";
import HistoryTable from "../Component/HistoryTable";
import "react-datepicker/dist/react-datepicker.css";
import { useLocation } from "react-router-dom";
import React, { useState } from "react";
import { startDateSearch } from "../Component/HistoryTable";

function mapData(data) {
  const myDate = data.map((e) => e.date);
  const myOpen = data.map((e) => e.open);
  const myClose = data.map((e) => e.close);
  const myVolume = data.map((e) => e.volume);

  return { myDate, myClose, myOpen, myVolume };
}
export default function Quotes() {
  const location = useLocation();
  const Symbol = location.state.selectedSymbol;
  const { loading, rowData, compData, error } = UseStockData(Symbol);
  const [startDate, setStartDate] = useState("");
  const newData = startDateSearch(rowData, startDate);
  const { myDate, myClose, myOpen, myVolume } = mapData(newData);

  if (loading) {
    return <Loading />;
  }
  if (error != null) {
    return <Error />;
  }
  return (
    <div className="container quotes">
      <div className="row">
        <div className="col-12 col-md-6">
          <h1>Quote and Price History of Company: {Symbol}</h1>
          <div className="d-flex flex-row">
            <p className="mb-0 pb-0">Search from date:</p>
            <input
              className="input-date"
              type="date"
              name="fromDate"
              id="fromDate"
              onChange={(e) => {
                setStartDate(e.target.value);
              }}
            />
          </div>
        </div>

        <div className="col-12 col-md-6 info-table">
          <h5>Daily quote of Company:{Symbol}</h5>
          <InfoTable compData={compData} symbol={Symbol} />
        </div>
      </div>

      <HistoryTable className="row" filterData={newData} />
      <div className="row mt-5">
        <h3 className="text-center text-light">
          The trend of {Symbol} stock price{" "}
        </h3>
        <MapChart
          date={myDate}
          open={myOpen}
          close={myClose}
          volume={myVolume}
        />
      </div>
    </div>
  );
}

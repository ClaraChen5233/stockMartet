import Loading from "../Component/Loading";
import { UseNewData } from "../Component/api";
import { getSymbolList } from "../Component/SearchBar";
import { getIndustryList } from "../Component/SelectionBar";
import StockTable from "../Component/StockChart";
import SearchBar from "../Component/SearchBar";
import Error from "../Component/Error";
import React, { useState, useEffect, useLayoutEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import SelectionBar from "../Component/SelectionBar";

export default function Stock() {
  const { loading, rowData, error } = UseNewData();
  const SymbolList = getSymbolList(rowData);
  const IndustryList = getIndustryList(rowData);
  const [newData, setNewData] = useState([]);
  const [options, setOptions] = useState("");
  const [indoptions, setIndOptions] = useState("");

  useLayoutEffect(() => {
    setNewData(rowData);
  }, [rowData]);

  function filterData() {
    const final_data = rowData.filter((company) => {
      if (options === "" && (indoptions === "" || indoptions === "All")) {
        return company;
      } else if (
        company.symbol.includes(options) === true &&
        (indoptions === "" || indoptions === "All")
      ) {
        return company;
      } else if (options === "" && indoptions === company.industry) {
        return company;
      } else if (
        company.symbol.includes(options) &&
        indoptions === company.industry
      ) {
        return company;
      }
    });
    setNewData(final_data);
  }

  useEffect(() => {
    filterData();
  }, [options, indoptions]);

  if (loading) {
    return <Loading />;
  }
  if (error != null) {
    return <Error />;
  }

  return (
    <div className="container stock">
      <h1>Stocks</h1>
      <div className="row justify-content-md-between justify-content-center">
        <div className="col-12 col-md-5">
          <p>Search by Company symbol</p>
          <SearchBar options={SymbolList} onChange={setOptions} />
        </div>
        <div className="col-12 col-md-5">
          <p id="ind-text">Select by industry</p>
          <SelectionBar options={IndustryList} onSubmit={setIndOptions} />
        </div>
      </div>

      <StockTable data={newData} />
    </div>
  );
}

import { useState, useEffect } from "react";
//const API_KEY = "f0bbfa7a7c6fb22ceba827daa52f8e26";
//const API_KEY = "5eb49566d020d9a874bb1c9ca820370a";
//const API_KEY = "5c0d174bc1907b622517580121861d96";
const API_KEY = "c00387c449baaad2b88dea5822bed61e";

export function UseNewData() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [rowData, setRowData] = useState([]);

  async function fetchInfo() {
    let res = await fetch(
      `https://financialmodelingprep.com/api/v3/nasdaq_constituent?apikey=${API_KEY}`
    );
    let data = await res.json();
    // console.log(data);
    return data.map((company) => {
      return {
        symbol: company.symbol,
        name: company.name,
        industry: company.sector,
      };
    });
  }

  useEffect(() => {
    (async () => {
      try {
        setRowData(await fetchInfo());
        setLoading(false);
      } catch (err) {
        setError(err);
      }
    })();
  }, []);
  return { loading, rowData, error };
}

export function UseStockData(Symbol) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [rowData, setRowData] = useState([]);
  const [compData, setCompData] = useState([]);

  async function fetchStockInfo() {
    let res = await fetch(
      `https://financialmodelingprep.com/api/v3/historical-price-full/${Symbol}?timeseries=100&apikey=${API_KEY}`
    );

    let data = await res.json();

    let history = await data.historical;

    return history.map((company) => {
      return {
        date: company.date,
        open: company.open,
        high: company.high,
        low: company.low,
        close: company.close,
        volume: company.volume,
      };
    });
  }

  async function fetchComInfo() {
    let res = await fetch(
      `https://financialmodelingprep.com/api/v3/quote/${Symbol}?apikey=${API_KEY}`
    );
    let company = await res.json();
    console.log(company);

    return {
      name: company[0].name,
      price: company[0].price,
      change: company[0].change,
      dayLow: company[0].dayLow,
      dayHigh: company[0].dayHigh,
    };
  }

  useEffect(() => {
    (async () => {
      try {
        setRowData(await fetchStockInfo(Symbol));
        setLoading(false);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    })();
  }, []);
  useEffect(() => {
    (async () => {
      try {
        setCompData(await fetchComInfo(Symbol));
        setLoading(false);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    })();
  }, []);

  return { loading, rowData, compData, error };
}

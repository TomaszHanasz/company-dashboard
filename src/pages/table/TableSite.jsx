import React, { useState, useEffect } from "react";
import NavBar from "../../components/navBar/NavBar";
import "./tableSite.style.css";

const TableSite = () => {
  const [searchedCompany, setSearchedCompany] = useState("");
  const [searchList, setSearchList] = useState([]);

  const onSearchHandler = (e) => {
    setSearchedCompany(e.target.value);
  };

  useEffect(() => {
    const searchList = async () => {
      try {
        const response = await fetch(
          `https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=${searchedCompany}&apikey=8UR765U4TVLKLAZX`
        );
        const data = await response.json();
        if (data) {
          const searchedCompanies = data.bestMatches.map((el) => ({
            name: el["2. name"],
            symbol: el["1. symbol"],
            region: el["4. region"],
          }));
          console.log(searchedCompanies);
          setSearchList(searchedCompanies);
        }
      } catch (error) {
        console.log(error);
      }
    };
    searchList();
  }, [searchedCompany]);

  const getData = async () => {
    try {
      const response = await fetch(
        "https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=IBM&apikey=8UR765U4TVLKLAZX"
      );
      const data = await response.json();
      console.log(data);
    } catch (err) {
      console.log("fetching error", err);
    }
  };

  return (
    <div>
      <NavBar />
      <div className="table-data__container">
        <button onClick={getData}>Fetch</button>
        <div className="search__input">
          <input type="text" placeholder="Search" onChange={onSearchHandler} />
          <div className="search__list-container">
            {searchList.map((el, index) => {
              return (
                <div key={index} className="search__list">
                  <p className="search__option-symbol">{el.symbol}</p>
                  <div className="search__option-right">
                    <p className="search__option-name">{el.name}</p>
                    <p className="search__option-region">{el.region}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TableSite;

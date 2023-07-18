import React, { useState, useEffect, useContext } from "react";
import NavBar from "../../components/navBar/NavBar";
import DataTable from "../../components/dataTable/DataTable";
import Footer from "../../components/footer/Footer";
import { ThemeContext } from "../../App";
import "./tableSite.style.css";

const TableSite = () => {
  const [searchedCompany, setSearchedCompany] = useState("");
  const [searchList, setSearchList] = useState([]);
  const [companyId, setCompanyId] = useState(null);
  const [companyName, setCompanyName] = useState("");
  const [stockInfo, setStockInfo] = useState(null);
  const { theme } = useContext(ThemeContext);

  const onSearchHandler = (e) => {
    setSearchedCompany(e.target.value);
  };

  const onClickSetCompany = (el) => {
    setCompanyId(el.symbol);
    setCompanyName(el.name);
    setSearchedCompany("");
    setSearchList([]);
    getData(el);
  };

  useEffect(() => {
    const getSearchList = async () => {
      try {
        const response = await fetch(
          `https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=${searchedCompany}&apikey=8UR765U4TVLKLAZX`
        );
        const data = await response.json();
        if (data.bestMatches) {
          const searchedCompanies = data.bestMatches.map((el) => ({
            name: el["2. name"],
            symbol: el["1. symbol"],
            region: el["4. region"],
          }));
          setSearchList(searchedCompanies);
        }
      } catch (error) {
        console.log(error);
      }
    };
    if (searchList) {
      getSearchList();
    } // eslint-disable-next-line
  }, [searchedCompany]);

  const getData = async () => {
    try {
      const response = await fetch(
        `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=${companyId}&apikey=8UR765U4TVLKLAZX`
      );
      const data = await response.json();
      if (data) {
        const companyStockInfo = {
          name: companyName,
          symbol: data["Meta Data"]["2. Symbol"],
          metadata: data["Meta Data"],
          timeSeries: data["Time Series (Daily)"],
        };
        setStockInfo(companyStockInfo);
      }
    } catch (err) {
      console.log("fetching error", err);
    }
  };

  useEffect(() => {
    if (companyId) {
      getData();
    } // eslint-disable-next-line
  }, [companyId]);

  return (
    <div>
      <NavBar />
      <div className={`table-data__container home-menus-${theme}`}>
        <div className="search__input">
          <input type="text" placeholder="Search" onChange={onSearchHandler} />
          <div className="search__list-container">
            {searchList.map((el, index) => {
              return (
                <div
                  key={index}
                  className="search__list"
                  onClick={() => onClickSetCompany(el)}
                >
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
        <h1 className={`home-menus__title home-menus__title-${theme}`}>
          {stockInfo ? stockInfo.name : null}
        </h1>
        <DataTable stockInfo={stockInfo} />
      </div>
      <Footer />
    </div>
  );
};

export default TableSite;

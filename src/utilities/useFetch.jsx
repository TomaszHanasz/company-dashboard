import React, { useEffect, useState } from "react";

const UseFetch = () => {
  const [data, setData] = useState(null);

  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=tesco&apikey=8UR765U4TVLKLAZX"
      );
      const result = await response.json();
      setData(result);
    } catch (error) {
      console.error(error);
    }
  };

  return { fetchData, data };
};

export { UseFetch };

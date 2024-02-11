/* eslint-disable no-unused-vars */
import axios from "axios";

/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";
import logo from "./logo.png";
import CommonValues from "./CommonValues";

import Select from "react-select";

const App = () => {
  const top50Currencies = [
    "RON",
    "EUR",
    "USD",
    "GBP",
    "JPY",
    "AUD",
    "CAD",
    "CHF",
    "CNY",
    "SEK",
    "NZD",
    "MXN",
    "SGD",
    "HKD",
    "NOK",
    "KRW",
    "TRY",
    "RUB",
    "INR",
    "BRL",
    "ZAR",
    "DKK",
    "PLN",
    "TWD",
    "THB",
    "IDR",
    "MYR",
    "HUF",
    "CZK",
    "ILS",
    "CLP",
    "PHP",
    "AED",
    "COP",
    "SAR",
    "PKR",
    "EGP",
    "IQD",
    "KES",
    "VND",
    "MAD",
    "ARS",
    "UZS",
    "BYN",
    "QAR",
    "UGX",
    "DZD",
    "KHR",
    "BDT",
    "LKR",
  ];

  const options = top50Currencies.map((currency) => {
    return { value: currency, label: currency };
  });

  const [amount, setAmount] = useState("1");
  const [currency1, setCurrency1] = useState("RON");
  const [currency2, setCurrency2] = useState("EUR");
  const [result, setResult] = useState("");
  const [cammount, setCammount] = useState("");
  const [cammount2, setCammount2] = useState("");
  const [swap, setSwap] = useState(false);
  const [common1, setCommon1] = useState("RON");
  const [common2, setCommon2] = useState("EUR");

  useEffect(() => {
    const convert = async () => {
      const response = await axios.get(
        "https://v6.exchangerate-api.com/v6/86e34e011c24402f7c4840da/latest/ALL"
      );
      setResult(
        (amount * response.data.conversion_rates[currency2]) /
          response.data.conversion_rates[currency1]
      );

      setCammount(
        response.data.conversion_rates[currency2] /
          response.data.conversion_rates[currency1]
      );

      setCammount2(
        response.data.conversion_rates[currency1] /
          response.data.conversion_rates[currency2]
      );

      setCommon1(currency1);
      setCommon2(currency2);
    };

    if (swap === true) {
      convert();
      return () => {
        setSwap(false);
      };
    }
    if (amount && result.length < 1) {
      convert();
    } else {
      const timeoutId = setTimeout(() => {
        if (amount) {
          convert();
        }
      }, 1000);
      return () => {
        clearTimeout(timeoutId);
      };
    }
  }, [amount, currency1, currency2]);

  const swapCurrencies = () => {
    setSwap(true);
    setCurrency1(currency2);
    setCurrency2(currency1);
  };

  const currencyCodes = () => {
    window.open("https://www.xe.com/currency/");
  };

  return (
    <div className="flex flex-col">
      <div className="bg-blue-600 text-white flex flex-col items-center mt-4 lg:mt-10 max-w-screen-xl mx-auto rounded-md shadow-lg p-5">
        <div className="w-[330px] lg:w-[1000px] h-[360px] lg:h-[500px] mb-16 flex flex-col gap-6 lg:gap-20 items-center">
          <div className="flex items-center">
            <img src={logo} className="h-12 mt-3  lg:mt-6 lg:h-16" />
            <h1 className="mt-4 lg:mt-8  text-3xl lg:text-5xl font-bold">
              Currency Converter
            </h1>
          </div>

          <div className="flex flex-col lg:flex-row items-start lg:items:center gap-5 lg:gap-20 text-2xl lg:text-4xl">
            <div className="flex items-center gap-4 lg:gap-10">
              <div className="from">
                <p className="font-bold">From</p>
                <Select
                  value={options.find((option) => option.value === currency1)}
                  onChange={(e) => setCurrency1(e.value)}
                  options={options}
                  isSearchable
                  className="w-28 lg:w-32 text-lg lg:text-2xl text-gray-800 "
                />
              </div>
              <svg
                className="cursor-pointer w-10 h-10 lg:w-16 lg:h-16 p-1 lg:p-3 mt-8 lg:mt-14 border-2 border-white  rounded-full bg-white stroke-blue-700 hover:bg-blue-700 hover:stroke-white"
                onClick={() => swapCurrencies()}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5"
                />
              </svg>
              <div className="to">
                <p className="font-bold">To</p>
                <Select
                  value={options.find((option) => option.value === currency2)}
                  onChange={(e) => setCurrency2(e.value)}
                  options={options}
                  isSearchable
                  className="w-28 lg:w-32  text-lg lg:text-2xl text-gray-800 "
                />
              </div>
            </div>
            <div className="ammount">
              <p className="font-bold">Ammount</p>
              <input
                className="h-12 lg:w-64  text-gray-700 w-44 text-xl lg:text-2xl p-2 lg:p-3 rounded-sm placeholder:text-gray-500"
                maxLength="12"
                onClick={(e) => (e.target.value = "")}
                onChange={(e) => setAmount(`${e.target.value}`)}
                value={amount}
                type="text"
                placeholder="Enter sum"
              />
            </div>
          </div>

          <div className="text-2xl w-full relative left-4 lg:text-4xl lg:left-32">
            <p>
              {amount.toLocaleString("en", { useGrouping: true })} {currency1} =
            </p>
            <p>
              <strong>
                {result.toLocaleString("en", { useGrouping: true })} {currency2}
              </strong>
            </p>
          </div>

          <div
            className="relative left-28 bottom-6 cursor-pointer lg:text-xl lg:left-80 lg:bottom-20 "
            onClick={() => currencyCodes()}
          >
            <p className="text-sm lg:text-lg mt-4 lg:mt-2 ">
              Click to see <br />
              <strong>currency codes</strong>
            </p>
          </div>
        </div>
      </div>
      <div className="mb-12 lg:w-[1040px] mx-auto lg:grid lg:grid-cols-2 lg:gap-10  ">
        <CommonValues common1={common1} common2={common2} result={cammount} />
        <CommonValues common1={common2} common2={common1} result={cammount2} />
      </div>
    </div>
  );
};

export default App;

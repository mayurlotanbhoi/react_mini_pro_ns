import React, { useEffect, useState } from "react";

const Shows = (props) => {
  const [ApiData, setApiData] = useState([]);
  console.log(props.input);
  useEffect(() => {
    async function ApiCall() {
      const reapons = await fetch(
        ` https://api.tvmaze.com/search/shows?q=${props.input}`
      );
      const Data = await reapons.json();
      setApiData(Data);
      console.log(Data);
    }
    ApiCall();
  }, [props.input]);
  return (
    <>
      {ApiData[0] ? (
        <div className="Tag">
          {console.log(ApiData)}
          {ApiData.map((item) => {
            return (
              <div className="items">
                <div>{item.show.language}</div>
                <img
                  src={item.show.image ? item.show.image.medium : ""}
                  alt="img"
                ></img>{" "}
                <p className="name">{item.show.name}</p>
                <p className="DisCr">{item.show.summary}</p>
              </div>
            );
          })}
          {props.error(false)}
        </div>
      ) : (
        props.error(true)
      )}
    </>
  );
};

export default Shows;

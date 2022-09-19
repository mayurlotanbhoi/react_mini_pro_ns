import { React, useState } from "react";
import Shows from "./Shows";
import Actor from "./Actor";

const HomePage = () => {
  const [radio, setradio] = useState("");
  const [input, setinput] = useState("");
  const [error, seterror] = useState(false);
  // const [flag, setflag] = useState(false);

  function SetRediobtn() {
    // console.log(e.target.value);

    if (radio == "Show" && input) {
      return <Shows input={input} error={seterror} />;
    } else if (radio == "Actor" && input) {
      return <Actor input={input} error={seterror} />;
    } else {
      return <></>;
    }
  }

  return (
    <>
      <div className="Homepage">
        <div className="inputBox">
          <div className="Tvmaza">
            <i className="fa-solid fa-tv"></i>TVmaza
          </div>
          <div className="SearchText">Search Your Favorit Show</div>
          <div>
            <form>
              <div onChange={(e) => setradio(e.target.value)}>
                <input type="radio" value="Actor" id="people" name="radio" />
                Actor
                <input
                  type="radio"
                  value="Show"
                  id="shows"
                  name="radio"
                  error={seterror}
                />{" "}
                Show
              </div>

              <div>
                <input
                  className="input"
                  onChange={(e) => setinput(e.target.value)}
                  placeholder={radio ? "Search " + radio : "Search move"}
                />
                <br></br>
                {error ? <p style={{ color: "red" }}>NoFound</p> : <></>}
                {console.log(radio)}
              </div>
            </form>
          </div>
        </div>
      </div>
      {/* {console.log(typeof radio)} */}
      {/* {radio === "Show" && input ? <Shows input={input} /> : <Actor />} */}
      {/* {<Shows input={input} />} */}
      {SetRediobtn()}
    </>
  );
};

export default HomePage;

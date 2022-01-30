import "./calculator.scss"
import {useState} from "react";
import { faMoon } from "@fortawesome/free-solid-svg-icons"
import { faSun } from "@fortawesome/free-solid-svg-icons"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {evaluate} from "mathjs";

function App() {
  const [result, setResult] = useState("");
  const [background, setBackground] = useState("#424242");
  const [backgroundColor, setBackgroundColor] = useState("#BDBDBD")
  const [icon, setIcon] = useState(faMoon);


  const handleClick = (e) => {
    e.preventDefault();
    console.log("click")
    setResult(result.concat(e.target.value));
  }

  const handleClear = (e) => {
    e.preventDefault();
    setResult("");
  }

  const handleCalculate = (e) => {
    e.preventDefault();
    try {
      setResult(evaluate(result).toString());
    } catch (error){
      setResult("Error");
    }

  }

  const handleChange = (e) => {
    e.preventDefault();
    if (background === "#424242" && backgroundColor ==="#BDBDBD") {
      setBackground("#4CAF50");
      setBackgroundColor("#424242")
      setIcon(faSun)
    } else {
      setBackground("#424242");
      setIcon(faMoon)
      setBackgroundColor("#BDBDBD");
    }


  }


  return (
      <body style={{background}}>
      <div className="App" >
        <div className="calculator" style={{backgroundColor}}>
          <input type="text" placeholder=" 0 " className="result" value={result}/>
          <div className="buttons">
            <div className="groupOne">
              <input type="button" value='AC' className="button ac" onClick={handleClear}/>
              <input type="button" value="+" className="button operation" onClick={handleClick}/>
              <input type="button" value="-" className="button operation" onClick={handleClick}/>
              <input type="button" value="*" className="button operation" onClick={handleClick}/>
            </div>
            <div className="groupTwo">
              <input type="button" value='7' className="button" onClick={handleClick}/>
              <input type="button" value='8' className="button" onClick={handleClick}/>
              <input type="button" value='9' className="button" onClick={handleClick}/>
              <input type="button" value="/" className="button operation" onClick={handleClick}/>
            </div>
            <div className="groupThree">
              <input type="button" value='4' className="button" onClick={handleClick}/>
              <input type="button" value='5' className="button" onClick={handleClick}/>
              <input type="button" value='6' className="button" onClick={handleClick}/>
              <input type="button" value='%' className="button operation" onClick={handleClick}/>

            </div>
            <div className="groupFour">
              <div className="groupFive">
                <div className="groupFiveA">
                  <input type="button" value='1' className="button" onClick={handleClick}/>
                  <input type="button" value='2' className="button" onClick={handleClick}/>
                  <input type="button" value='3' className="button" onClick={handleClick}/>
                </div>
                <div className="groupFiveB">
                  <input type="button" value='0' className="button" onClick={handleClick}/>
                  <input type="button" value='.' className="button" onClick={handleClick}/>
                  <button onClick={handleChange}>
                    <FontAwesomeIcon icon={icon}   className="button icon"/>
                  </button>
                </div>
              </div>
              <input type="button" value='=' className="button equal" onClick={handleCalculate}/>
            </div>
          </div>
        </div>
      </div>
      </body>
  );
}

export default App;

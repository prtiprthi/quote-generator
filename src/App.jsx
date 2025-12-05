import "./App.css";
import envelope from "../images/envelope.png";
import bg2 from "../images/bg2.jpg";
import useQuoteGenerator from "./QuoteGenerator";

function App() {
  const { currentQuote, generateQuote } = useQuoteGenerator();
  return (
    <div id="wrapper">
      <img src={bg2} id="bg-image" alt="background" />

      <div id="envelope-wrapper">
        <img src={envelope} id="envelope-img" alt="envelope" />
        <p dangerouslySetInnerHTML={{ __html: currentQuote }}></p>
        <button id="open-btn" onClick={generateQuote}>
          Generate Quote
        </button>
      </div>
    </div>
  );
}

export default App;

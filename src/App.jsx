import "./App.css";
import envelope from "../images/envelope.png";
import bg4 from "../images/bg4.jpeg";
import useQuoteGenerator from "./QuoteGenerator";

function App() {
  const { currentQuote, generateQuote } = useQuoteGenerator();
  return (
    <div id="wrapper">
      <img src={bg4} id="bg-image" alt="background" />
      <h2 className="heading">Welcome to Preethi’s Little Quote Corner 🎀✨</h2>

      <div id="envelope-wrapper">
        <img src={envelope} id="envelope-img" alt="envelope" />
        <p>{currentQuote}</p>
        <button id="open-btn" onClick={generateQuote}>
          Generate Quote
        </button>
      </div>
    </div>
  );
}

export default App;

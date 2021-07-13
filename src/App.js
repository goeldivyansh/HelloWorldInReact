import React from "react";
import "./style.css";
import Button from "./Button"
//This look like a function but actually its a component
// function App() {   // We can give any name to function but by convention its nsame is App
// 	return (
// 		// <h1>Hello World</h1> we cannot return multiple things
// 		<div>
// 			<h1>Hello</h1>
// 			<h2>heading</h2>
// 		</div>
// 	)
// }

// We use this syntax now
//Double curly braces for css
const App = () => {
	return (
		<div>
			<h1 style = {{textAlign: "center"}}>Stock Market</h1> 
			<p>The stock market refers to the collection of markets and exchanges where regular activities of buying, selling, and issuance of shares of publicly-held companies take place. Such financial activities are conducted through institutionalized formal exchanges or over-the-counter (OTC) marketplaces which operate under a defined set of regulations. There can be multiple stock trading venues in a country or a region which allow transactions in stocks and other forms of securities.</p>
			{/* <br></br> */}
			
			<p>BSE Limited, also known as the Bombay Stock Exchange, is an Indian stock exchange located on Dalal Street in Mumbai. Established in 1875, it is Asia's oldest stock exchange. The BSE is the 9th largest stock exchange with an overall market capitalization of more than ₹2,18,730 billion on as of May 2021.</p>

			<p>National Stock Exchange of India Limited is the leading stock exchange of India, located in Mumbai, Maharashtra. It is under the ownership of Some leading financial institutions, Banks and Insurance companies. NSE was established in 1992 as the first dematerialized electronic exchange in the country.</p>

			<Button buttonText="BSE" href="https://www.bseindia.com/" />
			<Button buttonText="NSE" href="https://www.nseindia.com/" />
			{/* <Button buttonText="Button 3"/> */}
		</div>
	)
}


export default App;
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { MoralisProvider } from "react-moralis";
import "./index.css";
import QuickStart from "components/QuickStart";
import { MoralisDappProvider } from "./providers/MoralisDappProvider/MoralisDappProvider";

/** Get your free Moralis Account https://moralis.io/ */

const APP_ID = process.env.REACT_APP_MORALIS_APPLICATION_ID;
const SERVER_URL = process.env.REACT_APP_MORALIS_SERVER_URL;

// const Spinning = (
//   <style>
//     {`
//       @keyframes spin {
//         0% { transform: rotate(0deg); }
//         100% { transform: rotate(360deg); }
//       }
//     `}
//   </style>
// );

// const styles = ({
//   textdiv: {
//     height: '100vh',
//     position: 'relative',
//   },
//   spinningtext: {
//     color: '#62DAFB',
//     width: '200px',
//     height: '50px',
//     margin: 'auto',
//     position: 'absolute',
//     top: '0',
//     left: '0',
//     right: '0',
//     bottom: '0',
//     animation: "spin infinite 10s linear",
//   },
// });

const Application = () => {
  const isServerInfo = APP_ID && SERVER_URL ? true : false;
  if (isServerInfo)
    return (
      <MoralisProvider appId={APP_ID} serverUrl={SERVER_URL}>
        <MoralisDappProvider>
          <App isServerInfo />
        </MoralisDappProvider>
      </MoralisProvider>
    );
  else {
    return (
      <div style={{ display: "flex", justifyContent: "center" }}>
        <QuickStart />
      </div>
    );
  }
};

ReactDOM.render(
  // <React.StrictMode>
  <Application />,
  // </React.StrictMode>,
  document.getElementById("root")
);

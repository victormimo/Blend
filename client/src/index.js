import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { ChakraProvider } from "@chakra-ui/react";
// import firebase from "firebase";
// import firebaseConfig from "./firebaseConfig.json";

// firebase.initializeApp(firebaseConfig);

ReactDOM.render(
  <ChakraProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ChakraProvider>,

  document.getElementById("root")
);

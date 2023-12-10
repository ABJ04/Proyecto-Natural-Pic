import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import PhotosProvider from "./context/photosContext.jsx";
import { FavoritosProvider } from "./context/FavoritosContext.jsx"; 


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <PhotosProvider>
        <FavoritosProvider>
          <App />
        </FavoritosProvider>
      </PhotosProvider>
    </BrowserRouter>
  </React.StrictMode>
);

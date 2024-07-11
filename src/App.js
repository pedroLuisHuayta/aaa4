// src/App.js
import React from 'react';
import './App.css';
import Login from './components/Login';
import logo from './images/logo.png';
function App() {
  return (
    <div className="App">
      <header className="bg-white border-bottom shadow-sm">
        <div className="container d-flex justify-content-between align-items-center py-2">
          <div className="logo">
           
          <a href="/"><img src={logo} alt="AlertHub Logo" height="40px" /></a>


           <a href="/"><img src="./images/logo.png" alt="AlertHub Logo" height="40px" width="40px"/></a>
         
          </div>
          <div className="d-flex align-items-center">
            <div className="social-icons d-flex align-items-center">
              <a href="https://www.facebook.com/" className="mx-2"><img src="images/facebook.svg" alt="Facebook" height="24" /></a>
              <a href="https://www.instagram.com/" className="mx-2"><img src="images/instagram.svg" alt="Instagram" height="24" /></a>
              <a href="https://www.x.com/" className="mx-2"><img src="images/twitter.svg" alt="Twitter" height="24" /></a>
            </div>
            <button className="btn btn-warning ml-3 rounded-pill">Unirse</button>
          </div>
        </div>
      </header>
      <main id="main-content" className="container d-flex flex-column flex-md-row align-items-center justify-content-between py-5 main-content">
        <Login />
        <div className="image-container d-flex justify-content-center align-items-center my-3">
          <img src="images/AlertHub.png" alt="AlertHub" className="img-fluid" />
        </div>
      </main>
      <section id="info-section" className="section bg-light d-flex flex-md-row flex-column align-items-center justify-content-center py-5">
        <img src="images/AlertHub_2.svg" alt="Se Parte de Alert Hub" className="img-fluid mb-4" />
        <div className="text-content ml-md-4">
          <h2 className="text-center text-md-left">¡Publica un reporte para ayudar a tu comunidad!</h2>
        </div>
      </section>
      <section id="join-section" className="section bg-light d-flex flex-md-row flex-column align-items-center justify-content-center py-5">
        <img src="images/AlertHub_3.svg" alt="Se Parte de Alert Hub" className="img-fluid mb-4" />
        <div className="text-content ml-md-4">
          <h2 className="text-center text-md-left">¡Únete a más de 5 usuarios!</h2>
          <p className="text-center text-md-left">Sin anuncios (a veces) ni costos. ¡Totalmente gratis!</p>
        </div>
      </section>
    </div>
  );
}

export default App;

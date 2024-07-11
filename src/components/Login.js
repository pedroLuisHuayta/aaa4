// src/components/Login.js
import React, { useState } from 'react';
import axios from 'axios';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('http://localhost:8080/auth/login', {
        email,
        password,
      });
      console.log(response.data);
      // Manejar la respuesta del servidor aquí (por ejemplo, guardar el token, redirigir al usuario, etc.)
    } catch (error) {
      console.error('Error al iniciar sesión', error);
      // Manejar el error aquí (por ejemplo, mostrar un mensaje de error al usuario)
    }
  };

  return (
    <div className="login-container bg-white shadow-sm rounded p-4 my-3 position-relative">
      <h1 className="h4 mb-4 text-center">¡Mantente informado de las noticias de tu localidad!</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Correo Electrónico</label>
          <input
            type="email"
            className="form-control rounded-pill"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Contraseña</label>
          <input
            type="password"
            className="form-control rounded-pill"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <a href="#" className="text-primary d-block mb-3">¿Haz olvidado tu contraseña?</a>
        <button type="submit" className="btn btn-warning btn-block rounded-pill">Iniciar Sesión</button>
      </form>
      <div className="line-and-ellipse-container d-flex justify-content-center align-items-center mt-3">
        <div className="line-2"></div>
        <div className="ellipse-672"></div>
        <div className="line-3"></div>
      </div>
      <p className="small text-center mt-4">
        Antes de iniciar sesión es importante que sepas que al hacer click aceptas las 
        <a href="condiciones_de_uso.html">Condiciones de uso</a>, la <a href="politica_de_privacidad.html">política de privacidad</a> 
        y la <a href="politica_de_cookies.html">Política de cookies</a> de AlertHub.
      </p>
    </div>
  );
};

export default Login;

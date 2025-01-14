import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div>
      <h1>Error 404</h1>
      <p>La página que buscas no existe</p>
      <Link href="/">Volver al inicio</Link>
    </div>
  );
};

export default Error;

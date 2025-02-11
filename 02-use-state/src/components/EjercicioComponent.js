import React, { useState } from 'react';
import PropTypes from 'prop-types';

const EjercicioComponent = ({ year }) => {
  const [yearNow, setYearNow] = useState(year);

  const siguiente = () => {
    setYearNow(yearNow + 1);
  };

  const anterior = () => {
    setYearNow(yearNow - 1);
  };

  const cambiarYear = (e) => {
    const dato = parseInt(e.target.value);

    if (Number.isInteger(dato)) {
      setYearNow(dato);
    } else {
      setYearNow(year);
    }
  };

  return (
    <div>
      <h2>Ejercicio con eventos y useState</h2>
      <strong className="label label-green">{yearNow}</strong>
      <p>
        <button onClick={anterior}>anterior</button> 
        <button onClick={siguiente}>siguiente</button>
      </p>
      <p>
        Cambiar año
        <input
          onChange={cambiarYear}
          type="text"
          placeholder="Cambiar de año"
        />
      </p>
    </div>
  );
};

EjercicioComponent.propTypes = {
  year: PropTypes.number.isRequired,
};

export default EjercicioComponent;


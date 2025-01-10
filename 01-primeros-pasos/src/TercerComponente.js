import React from 'react';
import PropTypes from 'prop-types';

const TercerComponente = ({ 
                            nombre,
                            apellidos,
                            ficha }) => {
    return (
        <div>
            <h1>Comunicación</h1>
            <ul>
                <li>Nombre: {nombre}</li>
                <li>Apellidos: {apellidos}</li>
                <li>Ficha Médica:</li>
                <ul>
                    <li>Altura: {ficha.altura}</li>
                    <li>Peso: {ficha.peso}</li>
                    <li>Sangre: {ficha.sangre}</li>
                    <li>Alergia: {ficha.alergia}</li>
                </ul>
            </ul>
        </div>
    );
};

TercerComponente.propTypes = {
    nombre: PropTypes.string.isRequired,
    apellidos: PropTypes.string.isRequired,
    ficha: PropTypes.shape({
        altura: PropTypes.string.isRequired,
        peso: PropTypes.string.isRequired,
        sangre: PropTypes.string.isRequired,
        alergia: PropTypes.string.isRequired,
    }).isRequired,
};

TercerComponente.defaultProps = {
    nombre: "victor",
    apellido : "gonzalez"
}

export default TercerComponente;


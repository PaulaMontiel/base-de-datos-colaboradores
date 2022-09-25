import React, { useState } from 'react';

const InputColaboradores = ({ colaboradores }) => {

    const [nombreNuevo, setNombreNuevo] = useState("");
    const [correoNuevo, setCorreoNuevo] = useState("");

    const [error, setError] = useState(false);

    const handleInputNameChange = (event) => setNombreNuevo(event.target.value);

    const handleInputCorreoChange = (event) => setCorreoNuevo(event.target.value);

    const enviarFormulario = (e) => {
        e.preventDefault()
        if (nombreNuevo === "" || correoNuevo === "") {
            setError(true);
            setNombreNuevo('');
            setCorreoNuevo('');
            return;
        } else {
            colaboradores[1]([...colaboradores[0], { nombre: nombreNuevo, correo: correoNuevo }])
            setError(false);
            setNombreNuevo('');
            setCorreoNuevo('');
        }
    }




    return (
        <div className='d-flex flex-column'>
            <form className='m-4' onSubmit={enviarFormulario}>
                <div>
                    <label htmlFor="nombre">Nombre Colaborador</label>
                    <input name="nombre" type='text' placeholder='Nombre Completo' className='form-control' value={nombreNuevo} onChange={handleInputNameChange} />
                </div>
                <div>
                    <label htmlFor="email">E-mail</label>
                    <input name="email" type='email' placeholder='e-mail' className='form-control' value={correoNuevo} onChange={handleInputCorreoChange} />
                </div>
                {error ? (
                    <p style={{ color: "red" }}> * Todos los campos son obligatorios</p>
                ) : null}
                <button className="btn btn-secondary m-2" type='submit' > Agregar colaborador </button>
            </form>
        </div>
    );

};

export default InputColaboradores;

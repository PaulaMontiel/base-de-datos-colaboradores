import React, { useState } from "react";

const ListColaboradores = ({ colaboradores }) => {

  const [search, setSearch] = useState("");


  //funcion busqueda
  const searcher = (e) => {
    setSearch(e.target.value);
  };

  //metodo filtrado
  let results = [];
  if (!search) {
    results = colaboradores[0];
  } else {
    //Filter solo por nombre
    /*results = colaboradores[0].filter((dato) =>
      dato.nombre.toLowerCase().includes(search.toLowerCase())
    );*/

    // Filter por nombre y correo
    results = colaboradores[0].filter(obj => Object.keys(obj).some(key => obj[key].includes(search.toLowerCase())));
  }
  return (
    <div className="d-flex flex-column mynav">
      <nav className="navbar navbar-expand-lg navbar-bg-drk">
        <div className="container d-flex flex-row justify-content-between align-items-center">
          <a className="navbar-brand text-dark" href="index.html">
            <h1 className="myTitle">Colaboradores</h1>
          </a>
          <div>
            <form className="form-inline">
              <div className="input-group search-box">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Buscar colaborador"
                  aria-label="Search for..."
                  value={search}
                  onChange={searcher}
                />
                <span className="input-group-btn">
                  <button className="btn btn-secondary" type="button">
                    <i className="fa-solid fa-magnifying-glass"></i>
                  </button>
                </span>
              </div>
            </form>
          </div>
        </div>
      </nav>
      {/* fin navbar */}
      <div className="d-flex m-4">
        <table className="table table-1 p-4 m-4">
          <thead>
            <tr>
              <th scope="col">Nombre</th>
              <th scope="col">Email</th>
            </tr>
          </thead>
          <tbody>
            {results.map((colaborador, index) => (
              <tr scope='row' key={index}>
                <td>{colaborador.nombre}</td>
                <td>{colaborador.correo}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ListColaboradores;

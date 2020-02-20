let empleados = [
  { id: 1, nombre: "Javier" },
  { id: 2, nombre: "Davi" },
  { id: 3, nombre: "Manu" }
];

let salarios = [
  { id: 1, salario: 1000 },
  { id: 2, salario: 2000 }
];

let getEmpleado = async id => {
  let empleadoDB = empleados.find(empleado => empleado.id === id);
  if (!empleadoDB) {
    throw new Error(`no existe un empleado con el ID ${id}`);
  } else {
    return empleadoDB;
  }
};

let getSalario = async empleado => {
  let salarioDB = salarios.find(salario => salario.id === empleado.id);
  if (!salarioDB) {
    throw new Error(
      `no se encontro salario para el empleado ${empleado.nombre}`
    );
  } else {
    return {
      nombre: empleado.nombre,
      salario: salarioDB.salario,
      id: empleado.id
    };
  }
};

/* getEmpleado(2)
  .then(empleado => {
    return getSalario(empleado);
  })
  .then(resp => {
    console.log(`El salario de ${resp.nombre} es de $ ${resp.salario}`);
  })
  .catch(err => {
    console.log(err);
  }); */

let getInformacion = async id => {
  let empleado = await getEmpleado(3);
  let resp = await getSalario(empleado);

  return `${resp.nombre} tiene un salario de $ ${resp.salario}`;
};

getInformacion()
  .then(mensaje => console.log(mensaje))
  .catch(err => console.log(err));

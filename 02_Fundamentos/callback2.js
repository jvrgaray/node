let empleados = [
  { id: 1, nombre: "Javier" },
  { id: 2, nombre: "Davi" },
  { id: 3, nombre: "Manu" }
];

let salarios = [
  { id: 1, salario: 1000 },
  { id: 2, salario: 2000 }
];

let getEmpleadoById = (id, callback) => {
  let empleadoDB = empleados.find(empleado => empleado.id === id);
  if (!empleadoDB) {
    callback(`no existe un empleado con el ID ${id}`, null);
  } else {
    callback(null, empleadoDB);
  }
};

let getSalario = (empleado, callback2) => {
  let salarioDB = salarios.find(salario => salario.id === empleado.id);
  if (!salarioDB) {
    callback2(`no se encontro salario para el empleado ${empleado.nombre}`);
  } else {
    callback2(null, { nombre: empleado.nombre, salario: salarioDB.salario, id: empleado.id });
  }
};

getEmpleadoById(3, (err, empleado) => {
    if (err) {
      return console.log(err);
    } 
    getSalario(empleado, (err, respuesta) => {
        if (err){
            return console.log(err);
        } else {
            console.log(respuesta);
        }
    })
  });


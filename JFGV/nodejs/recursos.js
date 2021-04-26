module.exports = {
  mascotas: [
    { tipo: "Erizo", nombre: "CR7", dueno: "Fernando" },
    { tipo: "Cocodrilo", nombre: "Salchichon", dueno: "Cabral" },
    
  ],

  veterinarias: [
    { nombre: "Azahar", apellido: "Galvez", documento: "666" },
    { nombre: "Norberto", apellido: "Perez", documento: "616" },
  
  ],

  duenos: [
    { nombre: "Fernando", apellido: "Garcia", documento: "92" },
    { nombre: "Cabral", apellido: "Valdez", documento: "27" },
    
  ],

    consultas: [
      {
        mascota: 0,
        veterinaria: 0,
        fechaCreacion: new Date(),
        fechaEdicion: new Date(),
        historia: "",
        diagnostico: "",
      },
    ],
  };

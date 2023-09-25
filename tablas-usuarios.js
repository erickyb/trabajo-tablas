const { Pool } = require('pg');

const pool = new Pool({
  user: 'tu_usuario',
  host: 'localhost',
  database: 'tu_base_de_datos',
  password: 'tu_contraseña',
  port: 5432 
});


pool.connect()
  .then(() => console.log('Conectado a PostgreSQL'))
  .catch(error => console.error('Error de conexión:', error));


  const usuarios = `
  CREATE TABLE IF NOT EXISTS usuarios (
    id SERIAL PRIMARY KEY,
    nombre VARCHAR(60),
    apellido VARCHAR(60),
    email VARCHAR(30),
    fechaRegistro DATE,
    rol VARCHAR(50),
    fechaNacimiento DATE,
    genero VARCHAR(20),
    ubicacion VARCHAR(255),
    fotoPerfil VARCHAR(255),
    preferenciasNotificacion JSONB,
    estadoCuenta VARCHAR(20),
    direccion VARCHAR(255),
    numeroTelefono VARCHAR(20)

  )
`;


const perfil =`
CREATE TABLE perfil (
    id SERIAL PRIMARY KEY,
    nombre VARCHAR(50),
    apellido VARCHAR(50),
    usuario_id INT UNIQUE REFERENCES usuarios(id),
    correo VARCHAR(50),
    contraseña VARCHAR(50),
    fechaDeNacimiento DATE,
    genero VARCHAR(255),
    foto VARCHAR(255),
    numeroTelefono VARCHAR(255),
    ubicacion VARCHAR(255),
    biografia VARCHAR(255),
    intereses VARCHAR(255),
    redesSociales VARCHAR(255),
    historiaDeActividad VARCHAR(255)
)
`;
const actividad =`
CREATE TABLE actividad (
    id SERIAL PRIMARY KEY,
    nombreDeActividad VARCHAR(255),
    usuario_id INT REFERENCES usuarios(id),
    fechaHoraCreacion DATE,
    duracion VARCHAR(255),
    responsable VARCHAR(255),
    estado VARCHAR(255),
    prioridad VARCHAR(255),
    descripcion VARCHAR(255),
    nota VARCHAR(255),
    categoria VARCHAR(25),
    recursos VARCHAR(255)
)
`;



export interface Curriculum {
  datosPersonales: {
    fotoUrl: string;
    nombre: string;
    apellido: string;
    emails: { direccion: string }[];
    telefonos: { numero: string }[];
  };
  formacionAcademica: {
    grado: string;
    institucion: string;
    fechaInicio: string;
    fechaFin: string;
  }[];
  experienciaLaboral: {
    puesto: string;
    empresa: string;
    responsabilidades: { nombre: string }[];
    fechaInicio: string;
    fechaFin: string;
  }[];
  habilidades: {
    nombre: string;
    porcentaje: number;
  }[];
}

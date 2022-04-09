export interface Curriculum {
  nombre: string;
  apellido: string;
  email: string;
  habilidades: {
    nombre: string;
    porcentaje: number;
  }[];
}

// 1. Définition de l'interface Teacher
interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number; // Le '?' rend la propriété optionnelle
  location: string;
  [propName: string]: any;   // Permet d'ajouter n'importe quel attribut dynamique
}

// 2. Exemple d'utilisation (fourni dans l'énoncé)
const teacher3: Teacher = {
  firstName: 'John',
  fullTimeEmployee: false,
  lastName: 'Doe',
  location: 'London',
  contract: false, // Cet attribut dynamique est accepté grâce à [propName: string]: any
};

console.log(teacher3);

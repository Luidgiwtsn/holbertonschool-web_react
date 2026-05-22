// 1. Interface qui décrit le constructeur (les arguments pour faire 'new')
interface StudentConstructor {
  new (firstName: string, lastName: string): StudentClassInterface;
}

// 2. Interface qui décrit la classe (les méthodes disponibles sur l'objet)
interface StudentClassInterface {
  workOnHomework(): string;
  displayName(): string;
}

// 3. Implémentation de la classe StudentClass
class StudentClass implements StudentClassInterface {
  firstName: string;
  lastName: string;

  // Le constructeur reçoit le prénom et le nom
  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  // Méthode qui indique que l'étudiant travaille
  workOnHomework(): string {
    return "Currently working";
  }

  // Méthode qui retourne le prénom de l'étudiant
  displayName(): string {
    return this.firstName;
  }
}

// 4. Exemple de validation (Facultatif, pour tester)
const student = new StudentClass("Alice", "Zeta");
console.log(student.displayName()); // Affiche: Alice
console.log(student.workOnHomework()); // Affiche: Currently working

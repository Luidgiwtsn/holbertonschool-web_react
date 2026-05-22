// 1. Définition des Interfaces
interface DirectorInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workDirectorTasks(): string;
}

interface TeacherInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workTeacherTasks(): string;
}

// 2. Classe Director qui implémente DirectorInterface
class Director implements DirectorInterface {
  workFromHome(): string {
    return "Working from home";
  }

  getCoffeeBreak(): string {
    return "Getting a coffee break";
  }

  workDirectorTasks(): string {
    return "Getting to director tasks";
  }
}

// 3. Classe Teacher qui implémente TeacherInterface
class Teacher implements TeacherInterface {
  workFromHome(): string {
    return "Cannot work from home";
  }

  getCoffeeBreak(): string {
    return "Cannot have a break";
  }

  workTeacherTasks(): string {
    return "Getting to work";
  }
}

// 4. Fonction createEmployee
function createEmployee(salary: number | string): Director | Teacher {
  // Si le salaire est un nombre et qu'il est inférieur à 500
  if (typeof salary === 'number' && salary < 500) {
    return new Teacher();
  }
  // Sinon (si c'est une string ou un nombre supérieur ou égal à 500)
  return new Director();
}

// 5. Validation (Exemples fournis dans l'énoncé)
console.log(createEmployee(200));   // Affiche une instance de Teacher
console.log(createEmployee(1000));  // Affiche une instance de Director
console.log(createEmployee('$500')); // Affiche une instance de Director



// 1. Fonction isDirector (Type Predicate)
function isDirector(employee: Director | Teacher): employee is Director {
  return (employee as Director).workDirectorTasks !== undefined;
}

// 2. Fonction executeWork
function executeWork(employee: Director | Teacher): string {
  if (isDirector(employee)) {
    return employee.workDirectorTasks();
  }
  return employee.workTeacherTasks();
}

// 3. Validation (Exemples fournis dans l'énoncé)
console.log(executeWork(createEmployee(200)));    // Affiche: Getting to work
console.log(executeWork(createEmployee(1000)));   // Affiche: Getting to director tasks


// 1. Définition du String Literal Type
type Subjects = 'Math' | 'History';

// 2. Fonction teachClass
function teachClass(todayClass: Subjects): string {
  if (todayClass === 'Math') {
    return 'Teaching Math';
  }
  return 'Teaching History';
}

// 3. Validation (Exemples fournis dans l'énoncé)
console.log(teachClass('Math'));    // Affiche: Teaching Math
console.log(teachClass('History')); // Affiche: Teaching History

// 1. On définit la structure obligatoire d'un étudiant (Interface)
interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

// 2. On crée deux étudiants qui respectent cette structure
const student1: Student = {
  firstName: "Jean",
  lastName: "Dupont",
  age: 20,
  location: "Paris"
};

const student2: Student = {
  firstName: "Marie",
  lastName: "Curie",
  age: 22,
  location: "Lyon"
};

// 3. On les met dans un tableau d'étudiants
const studentsList: Student[] = [student1, student2];

// 4. On crée le tableau HTML en JavaScript
const table = document.createElement('table');
const tbody = document.createElement('tbody');

// 5. On boucle sur chaque étudiant pour l'ajouter dans le tableau HTML
studentsList.forEach((student: Student) => {
  const row = document.createElement('tr'); // Crée une ligne
  
  const nameCell = document.createElement('td'); // Crée la cellule du prénom
  nameCell.textContent = student.firstName;      // Met le prénom dedans
  
  const locationCell = document.createElement('td'); // Crée la cellule de la ville
  locationCell.textContent = student.location;      // Met la ville dedans
  
  row.appendChild(nameCell);     // Ajoute le prénom à la ligne
  row.appendChild(locationCell); // Ajoute la ville à la ligne
  tbody.appendChild(row);        // Ajoute la ligne au corps du tableau
});

table.appendChild(tbody);        // Met le corps dans la table
document.body.appendChild(table); // Affiche la table sur la page web

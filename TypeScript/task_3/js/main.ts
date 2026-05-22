/// <reference path="./crud.d.ts" />

import { RowID, RowElement } from './interface';
import * as CRUD from './crud';

// 1. Création de l'objet row initial
const row: RowElement = {
  firstName: 'Guillaume',
  lastName: 'Salva',
};

// 2. Insertion et récupération de l'ID généré
const newRowID: RowID = CRUD.insertRow(row);

// 3. Mise à jour de l'objet avec l'âge
const updatedRow: RowElement = {
  firstName: 'Guillaume',
  lastName: 'Salva',
  age: 23,
};

// 4. Appels des méthodes de mise à jour et de suppression
CRUD.updateRow(newRowID, updatedRow);
CRUD.deleteRow(newRowID);

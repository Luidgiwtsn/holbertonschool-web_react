// 1. Définition des interfaces avec la propriété "Brand"
export interface MajorCredits {
  credits: number;
  __brand: 'MajorCredits.brand'; // Propriété unique pour le typage nominal
}

export interface MinorCredits {
  credits: number;
  __brand: 'MinorCredits.brand'; // Propriété unique pour le typage nominal
}

// 2. Fonction pour additionner les Major Credits
export function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits): MajorCredits {
  return {
    credits: subject1.credits + subject2.credits,
  } as MajorCredits; // L'assertion "as" est nécessaire car la propriété __brand n'existe pas réellement à l'exécution
}

// 3. Fonction pour additionner les Minor Credits
export function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits): MinorCredits {
  return {
    credits: subject1.credits + subject2.credits,
  } as MinorCredits;
}

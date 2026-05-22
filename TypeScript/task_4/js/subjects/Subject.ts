namespace Subjects {
  export class Subject {
    teacher?: Teacher; // <-- Le "?" est crucial ici pour dire à TypeScript que cette propriété peut être 'undefined' au départ

    setTeacher(teacher: Teacher) {
      this.teacher = teacher;
    }
  }
}

class Student {
  constructor(firstName, lastName, birthYear){
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthYear = birthYear;
    this.grades = [];
    this.attendance = new Array(25).fill(null);
  }

  getAge(){
    const currentYear = new Date().getFullYear();
    const age = currentYear - this.birthYear;
    return age;
  }

  getAverageGrade() {
    let sum = 0;
    for (let num of this.grades){
      sum += num;
    }
    const average = sum / this.grades.length;
    return average;
  }

  present() {
    const emptyIndex = this.attendance.indexOf(null);
    if (emptyIndex !== -1) {
        this.attendance[emptyIndex] = true;
    } else {
      console.log("Максимальна кількість відвідуваності досягнута");
      return;
    }
  }

  absent() {
    const emptyIndex = this.attendance.indexOf(null);
    if (emptyIndex !== -1) {
        this.attendance[emptyIndex] = false;
    } else {
      console.log("Максимальна кількість відвідуваності досягнута");
      return;
    }
  }

  summary(){
    const averageValue = this.getAverageGrade();
    const attendanceValue = this.attendance.filter(value => value === true).length / this.attendance.filter(value => value !== null).length;
    if(averageValue > 90 && attendanceValue > 0.9){
      return "Молодець!";
    } else if(averageValue > 90 || attendanceValue > 0.9) {
      return "Добре, але можна краще";
    } else {
      return "Редиска!";
    }

  }

}

const student1 = new Student("Іван", "Іваненко", 2000);
const student2 = new Student("Ігор", "Василенко", 2002);
const student3 = new Student("Дмитро", "Федоренко", 2004);

student1.present();
student1.present();
student1.present();
student1.present();
student1.present();
student1.present();
student1.present();
student1.present();
student1.present();
student1.present();
student1.absent();
student1.grades = [95, 87, 92, 98, 89];
console.log(`${student1.firstName} ${student1.lastName} (${student1.getAge()} років): ${student1.summary()}`);

student2.present();
student2.present();
student2.present();
student2.present();
student2.present();
student2.present();
student2.present();
student2.absent();
student2.absent();
student2.absent();
student2.absent();
student2.grades = [90, 85, 96, 97, 93];
console.log(`${student2.firstName} ${student2.lastName} (${student2.getAge()} років): ${student2.summary()}`);

student3.present();
student3.present();
student3.present();
student3.present();
student3.absent();
student3.absent();
student3.absent();
student3.absent();
student3.absent();
student3.absent();
student3.absent();
student3.grades = [80, 70, 75, 65, 72];
console.log(`${student3.firstName} ${student3.lastName} (${student3.getAge()} років): ${student3.summary()}`);
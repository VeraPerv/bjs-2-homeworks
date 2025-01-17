function Student(name, gender, age) {
  this.name = name;
  this.gender = gender;
  this.age = age;
}

let firstStudent = new Student('Anton', 'm', 19);
let secondStudent = new Student('Anna', 'f', 18);
let thirdStudent = new Student('Fedor', 'm', 22);

Student.prototype.setSubject = function (subjectName) {
  this.subject = subjectName; //ваш код
};
firstStudent.setSubject('algebra');

// ваш код для остальных методов
Student.prototype.addMark = function (mark) {
  // this.marks = [];
  if (this.marks === undefined) {
    this.marks = [mark];
  } else {
    this.marks.push(mark);
  }
  //}
};
firstStudent.addMark(5);
secondStudent.addMark(4);



Student.prototype.addMarks = function (...marks) {
  //this.marks = [];
  this.marks = marks;
};
thirdStudent.addMarks(1, 2, 3, 4, 5);
firstStudent.addMarks(5, 5, 5);



Student.prototype.getAverage = function (marks) {
  return this.average = (this.marks.reduce((acc, item) => acc += item, 0)) / this.marks.length;
};

firstStudent.getAverage();



Student.prototype.exclude = function (reason) {
  this.excluded = reason;
  delete this.marks;
  delete this.subject;
};

firstStudent.exclude('low grades');
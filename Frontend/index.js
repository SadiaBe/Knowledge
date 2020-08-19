teachersList = document.querySelector("#teachers")
studentsList = document.querySelector("#students")

// console.log(teachersList)



teachersUrl = "http://localhost:3000/teachers"
studentsUrl = "http://localhost:3000/students"
lecturesUrl = "http://localhost:3000/lectures"
fetch(teachersUrl)
.then(r =>r.json())
.then( (teachers) =>
teachers.forEach((teacher) => {
    displayTeacher(teacher)
  }) 
)

fetch(studentsUrl)
.then(r =>r.json())
.then( (students) =>
students.forEach((student) => {
    displayStudent(student)
  }) 
)

// fetch(lecturesUrl)
// .then(r =>r.json())
// .then( (lectures) =>
// lectures.forEach((lecture) => {
//     displayLecture(lecture)
//   }) 
// )


function displayTeacher(teacher){
    let teacherName = document.createElement("li")
    teacherName.innerText = "Name:" + " " +`${teacher.name}`


    // let teacherSubject = document.createElement("li")
    teachersList.append(teacherName)
}

function displayStudent(student){

    let studentName = document.createElement("li")
    studentName.innerText = "Name:" + " " +`${student.name}`

    let studentMajor = document.createElement("p")
    studentMajor.innerText ="Major:" + " " + `${student.major}`

    
    studentsList.append(studentName, studentMajor)
}

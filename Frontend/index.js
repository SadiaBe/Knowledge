teachersList = document.querySelector("#teachers")
studentsList = document.querySelector("#students")
lectureList = document.querySelector("#lectures")

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

// function displayLecture(lecture){
//   let lectureTopic = document.createElement("p")
//   lectureTopic.innerText = lecture.topic 

//   let lectureTeacher = document.createElement("p")
//   lectureTeacher.innerText = lecture.teacher

//   lectureList.append(lectureTopic)
// }

function displayTeacher(teacher){


    let teacherName = document.createElement("li")
    teacherName.innerText = "Name:" + " " +`${teacher.name}`
    // teacherName.addEventListener("click", (e) =>{
    //   console.log(e.target) not working 
    //   })

    let classes = document.createElement("p")
    classes.innerText = "Lectures Taught by :" + " " +`${teacher.name}`
    
    teachersList.append(teacherName, classes)
    // console.log(eachTeachersLectures)
    // let teacherSubject = document.createElement("li")
    
    

let allLectures = teacher.lectures
    let eachTeachersLectures = allLectures.forEach((lecture) => {
      //console.log(lecture.topic) this works 
      // displayLecture(lecture)
      let lectureTopic = document.createElement("p")
      lectureTopic.className = "teachers-lectures"
      lectureTopic.innerText = lecture.topic 
      teachersList.append(lectureTopic)
    })


}

function displayStudent(student){

    let studentName = document.createElement("li")
    studentName.innerText = "Name:" + " " +`${student.name}`

    let studentMajor = document.createElement("p")
    studentMajor.innerText ="Major:" + " " + `${student.major}`

    
    studentsList.append(studentName, studentMajor)
}

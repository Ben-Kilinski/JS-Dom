//task 1
// var taskONE = document.getElementById("s1");
// console.log(taskONE.innerText);

//task 2
// var task2 = document.getElementById("myH1");
// task2.innerText = "my dom app";

//task 3
// var elementHello = document.getElementById("Hello");
// var elementBen = document.getElementById("Ben");
// var elementDance = document.getElementById("dance");
// var elementIsrael = document.getElementById("Israel");

// console.log(elementHello.innerText);
// console.log(elementBen.innerText);
// console.log(elementDance.innerText);
// console.log(elementIsrael.innerText);

//task 4
// var myArray = document.getElementsByClassName("four");
// for (var i = 0; i < myArray.length; i++){
//         console.log(myArray[i].innerText)
// }    

//task 5
// var myArray = document.getElementsByClassName("four");
// console.log(myArray[1])  

//task 6
// var myArray = document.getElementsByClassName("four");
// console.log(myArray[2].innerText)  

//task 7
// var myArray = document.getElementsByTagName("p");
// for (var i = 0; i < myArray.length; i++){
//         console.log(myArray[i])
// }   

//task 8
// function t8 (){
//     var userName = prompt("insert your name")
//     document.write(userName)
// }
// t8()

//task 9
// var mySpam = document.getElementById("task9")
// function t9 (){
//     var userColor = prompt("insert a color");
//     var userNumber = +prompt("insert a number");
//     for(i = 1; i <= userNumber; i++){
//         mySpam.innerHTML += "<span>" + userColor + "</span>";
//     } 
// }
// t9()

//task10 
// function t10 (){
//     var userText = prompt("write a text");
//     var userTag = prompt("insert a tag");
//     var result = `<${userTag}>${userText}</${userTag}>`;
//     document.getElementById("task10").innerHTML = result;
// }
// t10();

//task 22
// function t22 (){
//     document.getElementById("div1").innerHTML += "<ol id='countriesList'></ol>";
//     var listElem = document.getElementById("countriesList");

//     for (i = 0; i < 5; i++){
//         var country = prompt("enter a country");
//         listElem.innerHTML += "<li>" + country + "</li>";
//     }
// }
// t22()

//task 24 class
// var managersArray = [
//     {FirstName:"Ben", LastName: "Kilinski", Age:26, salary:30000},
//     {FirstName:"Jony", LastName: "Lennon", Age:36, salary:30000},
//     {FirstName:"Lana", LastName: "Birbaum", Age:40, salary:30000}
// ];
// for (var i = 0; i < managersArray.length; i++){
//     document.getElementById("myTbody").innerHTML +=
//     `<tr>
//     <td>${managersArray[i].FirstName}</td>
//     <td>${managersArray[i].LastName}</td>
//     <td>${managersArray[i].Age}</td>
//     <td>${managersArray[i].salary}</td>
//     </tr>`
// }

//task 23
// var teacher = {}
//     teacher.name = prompt("insert teacher name")
//     teacher.email = prompt("insert email")
//     teacher.note = +prompt("insert note")
//     teacher.subject = prompt("insert subject")
//     document.getElementById("teacherDiv").innerHTML = 
//     `
//     <table>
//         <thead>
//             <th>Teacher</th>
//             <th>Email</th>
//             <th>Note</th>
//             <th>Subject</th>
//         </thead>
//         <tbody>
//             <tr>
//             <td>${teacher.name}</td>
//             <td>${teacher.email}</td>
//             <td>${teacher.note}</td>
//             <td>${teacher.subject}</td>
//             </tr>
//         </tbody>
//     </table>
//     `

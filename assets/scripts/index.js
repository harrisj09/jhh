/* 
Handles mobile menu and descriptions of project displays




<div class="project" data-project="1"></div>
<div class="project" data-project="2"></div>
<div class="project" data-project="3"></div>
<div class="project" data-project="4"></div>
<div class="project" data-project="5"></div>
<div class="project" data-project="6"></div>


const projects = [...document.querySelectorAll('[data-project]')];

projects.forEach(project => project.addEventListener('click', e => {
  console.log(`you clicked project-${e.target.dataset.project}`);
}));
*/

//Event listeners
document.querySelector("#project1").addEventListener("click", project1Box);
document.querySelector("#project2").addEventListener("click", project2Box);
document.querySelector("#project3").addEventListener("click", project3Box);
document.querySelector("#project4").addEventListener("click", project4Box);
document.querySelector("#project5").addEventListener("click", project5Box);
document.querySelector("#project6").addEventListener("click", project6Box);

//Base variables
let projectDesc = "";


function project1Box() {
    console.log("project1 pressed");
}

function project2Box() {
    console.log("project2 pressed");
}

function project3Box() {
    console.log("project3 pressed");
}

function project4Box() {
    console.log("project4 pressed");
}

function project5Box() {
    console.log("project5 pressed");
}

function project6Box() {
    console.log("project6 pressed");
}

function setText() {
    
}
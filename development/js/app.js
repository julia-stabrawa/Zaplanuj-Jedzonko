

//2.3 Dodawanie imienia

const givenName = document.querySelector("#name");
const btnName = document.querySelector("#btn__name");
const userName = document.querySelector(".user__name");
const firstPage = document.querySelector(".first__entry");
const mainDesk = document.querySelector(".desk__main");

firstPage.classList.add("hide");

function saveNameToLocalStorage() {
    const user = givenName.value;
    localStorage.setItem("name", user);
    userName.innerHTML = localStorage.getItem("name");
}
btnName.addEventListener("click", e => {
    e.preventDefault()
    if (givenName.value === "") {
        alert("Musisz wpisać jakieś imię");
    } else {
        saveNameToLocalStorage();
        firstPage.classList.add("hide");
        mainDesk.classList.remove("hide");
    }
    console.log(localStorage.getItem("name"));
});

window.onload = () => {
    if (localStorage.getItem("name") !== null) {
        userName.innerHTML = localStorage.getItem("name");
        firstPage.classList.add("hide");
    }else{
        firstPage.classList.remove("hide");
    }
}


//2.1 Starting page

// const sidebar = document.querySelector(".sidebar");
// const menuEl = sidebar.querySelectorAll("a");
// const menuArrow = menuEl.querySelectorAll(".fas");
//
// for(let i = 0; i < menuEl.length; i++) {
//     menuEl[i].addEventListener("click", function (e) {
//         menuEl.forEach(el => {
//             el.classList.remove("focus");
//             el.parentElement.children[1].classList.add("hide");
//         });
//         this.classList.add("focus");
//         this.parentElement.children[1].classList.add("show");
//     });
// }

// const btnRecipe = document.querySelector("#desk__buttonrecipe");
// const recipeSection = document.querySelector("#dodaj-przepis");
//
// btnRecipe.addEventListener("click", e => {
//     e.preventDefault();
//     recipeSection.classList.remove("dodaj-przepis");
//     mainDesk.classList.add("hide");
// });


//przejscia w app

const deskButtonPlan = document.querySelector("#desk__buttonplan");
const plan = document.querySelector("#dodaj-plan");

deskButtonPlan.addEventListener("click", (e) =>{
    dodaj.classList.add("dodaj")
    plan.classList.remove("dodaj-plan")
})

const deskButtonRecipes =document.querySelector("#desk__buttonrecipe");
const recipe = document.querySelector("#dodaj-przepis");;

deskButtonRecipes.addEventListener("click", (e) => {
    dodaj.classList.add("dodaj")
    recipe.classList.remove("dodaj-przepis")
})




// 3.2 Pulpit - widget powiadomienia

const schowajto1 = document.querySelector(".desk-check-test1");
const delete1 = document.querySelector(".desk__delete1");
schowajto1.addEventListener("click", (e) => {
    delete1.classList.add("schowaj")
})
const schowajto2 = document.querySelector(".desk-check-test2");
const delete2 = document.querySelector(".desk__delete2");
schowajto2.addEventListener("click", (e) => {
    delete2.classList.add("schowaj")
})
const schowajto3 = document.querySelector(".desk-check-test3");
const delete3 = document.querySelector(".desk__delete3");
schowajto3.addEventListener("click", (e) => {
    delete3.classList.add("schowaj")
})
//2.3 Dodawanie imienia

const givenName = document.querySelector("#name");
const btnName = document.querySelector("#btn__name");
const userName = document.querySelector(".user__name");
const firstPage = document.querySelector(".first__entry");
const mainDesk = document.querySelector(".desk__main");

function saveNameToLocalStorage() {
    const user = givenName.value;
    localStorage.setItem("name", user);
    userName.innerHTML = localStorage.getItem("name");
    firstPage.classList.add("hide");
    mainDesk.classList.add("show");
}

btnName.addEventListener("click", e => {
    e.preventDefault()
    if (givenName.value === "") {
        alert("Musisz wpisać jakieś imię");
    } else {
        saveNameToLocalStorage();
    }
    console.log(localStorage.getItem("name"));
});


window.onload = () => {
    if (localStorage.getItem("name") !== "null") {
        userName.innerHTML = localStorage.getItem("name");
        firstPage.classList.add("hide");
        mainDesk.classList.add("show");
    } else {
        saveNameToLocalStorage();
    }
}


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
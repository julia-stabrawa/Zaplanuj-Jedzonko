

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
const dodaj = document.querySelector("#dodaj");

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

//btn
const btnRecipe = document.querySelector("#desk__buttonrecipe");
const recipeSection = document.querySelector("#dodaj-przepis");
btnRecipe.addEventListener("click", e => {
    e.preventDefault();
    recipeSection.classList.remove("dodaj-przepis");
    mainDesk.classList.add("hide");
});

//============================================================================================
// 4.2 Dodanie nowego przepisu - logika

const dodaj_instrukcje_button = document.getElementById("dodaj_instrukcje_button");
const dodaj_skladniki_button = document.getElementById("dodaj_skladniki_button");
// pola input (tekstowe edycyjne)
const instrukcje = document.getElementById( "instrukcje_text" );
const skladniki = document.getElementById( "skladniki_text" );
// kontener
const kontenterInstrukcje = document.getElementById("recipe-minititle2-all");
const instructionul = document .getElementById( "instruction-ul");


var instrukcjaStruktura = {
    nazwa: "" , //
    przyciskEdycja: "",
    przyciskUsun: ""//
};

var skladnikiStruktura = {
    nazwa: "" , //
    przyciskEdycja: "",
    przyciskUsun: ""//
};

function renderSingleInstrukcja (instrukcja) {
// tworzymy nowy element LI i dodajemy go do HTML
    var newLi = document.createElement( "LI" );
    newLi.innerText = instrukcja;
    instructionul.appendChild(newLi);
}
dodaj_instrukcje_button.addEventListener("click", function(e) {
    e.preventDefault();

});

function saveElementToLocalStorage (newObject) {
    localStorage.setItem('testObject', JSON.stringify(newObject));
}


//dodaj_instrucje_button.addEventListener("click", dodajInstrukcje(), true);
function dodajInstrukcje() {
    let instrukcje_text = document.getElementById("instrukcje_text");
    // walidacja danych
    if (instrukcje_text.value.length ===0 ) {
        alert("Wpisz instrukcje. ");
    }
    else
    {
        skladnikiStruktura.nazwa = instrukcje.value;
        skladnikiStruktura.przyciskEdycja = " <button class='far fa-edit'></button>";
        skladnikiStruktura.przyciskUsun = " <button class='far fa-trash-alt'></button><br>";
        localStorage.setItem(skladnikiStruktura.nazwa, JSON.stringify(skladnikiStruktura));

        let odczytanyElement = localStorage.getItem(skladnikiStruktura.nazwa);
        let ele = document.getElementById('instr-add');

        ele.innerHTML = localStorage.getElement(skladnikiStruktura.nazwa, JSON.parse(odczytanyElement));
        //localStorage.setItem("instrukcja", instrukcje_text.value );
        //alert (localStorage.getItem("instrukcja"));
        /*let ele = document.getElementById('instr-add');
        ele.innerHTML += (localStorage.getItem("instrukcja")) + " <button class='far fa-edit'></button><button class='far fa-trash-alt'></button><br>";
        */

    }
}
function dodajSkladniki() {
    let skladniki_text = document.getElementById("skladniki_text");
// walidacja danych
    if (skladniki_text.value.length ===0 ) {
        alert("Wpisz składniki. ");
    }
    else
    {
        localStorage.setItem("skladniki", skladniki_text.value );
        //alert (localStorage.getItem("skladniki"));
        let ele = document.getElementById('instr2-add');
        ele.innerHTML += (localStorage.getItem("skladniki")) + " <button class='far fa-edit'></button><button class='far fa-trash-alt'></button><br>";
    }
}
//6.2 never ending story

// pola input
let title = document.querySelector(".schedules-input-one");
let title1 = document.querySelector(".schedules-input-two");
let title2 = document.querySelector(".schedules-input-three");
let id1= document.querySelector(".id1");
let id2= document.querySelector(".id2");
let id3= document.querySelector(".id3");
let id4= document.querySelector(".id4");
let id5= document.querySelector(".id5");
let id21= document.querySelector(".id21");
let id22= document.querySelector(".id22");
let id23= document.querySelector(".id23");
let id24= document.querySelector(".id24");
let id25= document.querySelector(".id25");
let id31= document.querySelector(".id31");
let id32= document.querySelector(".id32");
let id33= document.querySelector(".id33");
let id34= document.querySelector(".id34");
let id35= document.querySelector(".id35");
let id41= document.querySelector(".id41");
let id42= document.querySelector(".id42");
let id43= document.querySelector(".id43");
let id44= document.querySelector(".id44");
let id45= document.querySelector(".id45");
let id51= document.querySelector(".id51");
let id52= document.querySelector(".id52");
let id53= document.querySelector(".id53");
let id54= document.querySelector(".id54");
let id55= document.querySelector(".id55");
let id61= document.querySelector(".id61");
let id62= document.querySelector(".id62");
let id63= document.querySelector(".id63");
let id64= document.querySelector(".id64");
let id65= document.querySelector(".id65");
let id71= document.querySelector(".id71");
let id72= document.querySelector(".id72");
let id73= document.querySelector(".id73");
let id74= document.querySelector(".id74");
let id75= document.querySelector(".id75");

// przyciski

var saveRecipeBtn = document.querySelector(".schedules-exit");



// obiekt przepisu
var newRecipe = {

    title: "", // nazwa planu
    title1: "",// plan
    title2: "",// czas trwania
    id1: "",
    id2: "",
    id3: "",
    id4: "",
    id5: "",
    id21: "",
    id22: "",
    id23: "",
    id24: "",
    id25: "",
    id31: "",
    id32: "",
    id33: "",
    id34: "",
    id35: "",
    id41: "",
    id42: "",
    id43: "",
    id44: "",
    id45: "",
    id51: "",
    id52: "",
    id53: "",
    id54: "",
    id55: "",
    id61: "",
    id62: "",
    id63: "",
    id64: "",
    id65: "",
    id71: "",
    id72: "",
    id73: "",
    id74: "",
    id75: "",

};

saveRecipeBtn.addEventListener("click", function(e) {
    e.preventDefault();
    newRecipe.title = title.value;
    newRecipe.title1 = title1.value;
    newRecipe.title2 = title2.value;
    newRecipe.id1 = id1.value;
    newRecipe.id2 = id2.value;
    newRecipe.id3 = id3.value;
    newRecipe.id4 = id4.value;
    newRecipe.id5 = id5.value;
    newRecipe.id21 = id21.value;
    newRecipe.id22 = id22.value;
    newRecipe.id23 = id23.value;
    newRecipe.id24 = id24.value;
    newRecipe.id25 = id25.value;
    newRecipe.id31 = id31.value;
    newRecipe.id32 = id32.value;
    newRecipe.id33 = id33.value;
    newRecipe.id34 = id34.value;
    newRecipe.id35 = id35.value;
    newRecipe.id41 = id41.value;
    newRecipe.id42 = id42.value;
    newRecipe.id43 = id43.value;
    newRecipe.id44 = id44.value;
    newRecipe.id45 = id45.value;
    newRecipe.id51 = id51.value;
    newRecipe.id52 = id52.value;
    newRecipe.id53 = id53.value;
    newRecipe.id54 = id54.value;
    newRecipe.id55 = id55.value;
    newRecipe.id61 = id61.value;
    newRecipe.id62 = id62.value;
    newRecipe.id63 = id63.value;
    newRecipe.id64 = id64.value;
    newRecipe.id65 = id65.value;
    newRecipe.id71 = id71.value;
    newRecipe.id72 = id72.value;
    newRecipe.id73 = id73.value;
    newRecipe.id74 = id74.value;
    newRecipe.id75 = id75.value;

    saveRecipeToLocalStorage(newRecipe);
    dodaj.classList.remove("dodaj")
    plan.classList.add("dodaj-plan")
});



function saveRecipeToLocalStorage(newObject) {
    let dataFromLocalStorage = [];
    if (title.value === ""||title1.value ===""||title2.value ==="") { alert("Uzupełnij dane")}

    else if (localStorage.getItem("recipes") != null) {
        dataFromLocalStorage = JSON.parse(localStorage.getItem("recipes"));
        dataFromLocalStorage.push(newObject);
        localStorage.setItem("recipes", JSON.stringify(dataFromLocalStorage));
    } else {
        dataFromLocalStorage.push(newObject);
        localStorage.setItem("recipes", JSON.stringify(dataFromLocalStorage));
    }
}
const calendar= document.querySelector(".calendar");
const next = document.querySelector(".next");
const last = document.querySelector(".last");

let allRecipes = JSON.parse(localStorage.getItem("recipes"));

let z = -1;
let inside = allRecipes[z]


next.addEventListener("click", e =>{
    inside = allRecipes[z = z + 1 ]
    generowanieplanu();
})

last.addEventListener("click", e =>{
    inside = allRecipes[z = z - 1 ]
    generowanieplanu();
})

function generowanieplanu () {
    calendar.innerHTML = "";
    const div = document.createElement("div")
    div.innerHTML = `<div class="calendar-header">Twój plan na ${inside.title2} tydzień</div>
                    <div class="calendar-table">
                        <table class="calendar-thead">
                            <thead class="calendar-tr">
                            <tr>
                                <th class="calendar-td-insite">Poniedziałek</th>
                                <th class="calendar-td-insite">Wtorek</th>
                                <th class="calendar-td-insite">Środa</th>
                                <th class="calendar-td-insite">Czwartek</th>
                                <th class="calendar-td-insite">Piątek</th>
                                <th class="calendar-td-insite">Sobota</th>
                                <th class="calendar-td-insite">Niedziela</th>
                            </tr>
                            </thead>
                            <tbody class="calendar-tbody">
                            <tr class="calendar-td">
                                <td class="calendar-td-insite">${inside.id1}</td>
                                <td>${inside.id21}</td>
                                <td>${inside.id31}</td>
                                <td>${inside.id41}</td>
                                <td>${inside.id51}</td>
                                <td>${inside.id61}</td>
                                <td>${inside.id71}</td>
                            </tr>
                            <tr class="calendar-td">
                                <td class="calendar-td-insite">${inside.id2}</td>
                                <td>${inside.id22}</td>
                                <td>${inside.id32}</td>
                                <td>${inside.id42}</td>
                                <td>${inside.id52}</td>
                                <td>${inside.id62}</td>
                                <td>${inside.id72}</td>
                            </tr>
                            <tr class="calendar-td">
                                <td class="calendar-td-insite">${inside.id3}</td>
                                <td>${inside.id23}</td>
                                <td>${inside.id33}</td>
                                <td>${inside.id43}</td>
                                <td>${inside.id53}</td>
                                <td>${inside.id63}</td>
                                <td>${inside.id73}</td>
                            </tr>
                            <tr class="calendar-td">
                                <td class="calendar-td-insite">${inside.id4}</td>
                                <td>${inside.id24}</td>
                                <td>${inside.id34}</td>
                                <td>${inside.id44}</td>
                                <td>${inside.id54}</td>
                                <td>${inside.id64}</td>
                                <td>${inside.id74}</td>
                            </tr>
                            <tr class="calendar-td">
                                <td class="calendar-td-insite">${inside.id5}</td>
                                <td>${inside.id25}</td>
                                <td>${inside.id35}</td>
                                <td>${inside.id45}</td>
                                <td>${inside.id55}</td>
                                <td>${inside.id65}</td>
                                <td>${inside.id75}</td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                    
`
    calendar.append(div);

}
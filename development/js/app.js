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
    } else {
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


//przejscia w app

const deskButtonPlan = document.querySelector("#desk__buttonplan");
const plan = document.querySelector("#dodaj-plan");

deskButtonPlan.addEventListener("click", (e) => {
    dodaj.classList.add("dodaj")
    plan.classList.remove("dodaj-plan")
})

const deskButtonRecipes = document.querySelector("#desk__buttonrecipe");
const recipe = document.querySelector("#dodaj-przepis");
;

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

// btn
const btnRecipe = document.querySelector("#desk__buttonrecipe");
const recipeSection = document.querySelector("#dodaj-przepis");
const mainCalendar = document.querySelector(".calendar");
btnRecipe.addEventListener("click", e => {
    e.preventDefault();
    recipeSection.classList.remove("dodaj-przepis");
    mainDesk.classList.add("hide");
    mainCalendar.classList.add("hide");
});

//ADD RECIPE FORM=================

// buttons add in ingredients and instructions
const titleRecipe = document.querySelector(".recipe-input-one");
const descriptionRecipe = document.querySelector(".recipe-input-two");
const instructions = document.querySelector("#instrukcje_text");
const instructionsBtn = document.querySelector("#dodaj_instrukcje_button");
const instructionsList = document.querySelector(".instruction-ul");
const ingredients = document.querySelector("#skladniki_text");
const ingredientsBtn = document.querySelector("#dodaj_skladniki_button");
const ingredientsList = document.querySelector(".ingredients-ul");
const deleteIngrInst = document.querySelectorAll(".fa-trash-alt");
const instructionsArr = [];
const ingredientsArr = [];

deleteIngrInst.forEach(el => {
    el.addEventListener("click", e => {
        el.remove();
    });
});


instructionsBtn.addEventListener("click", e => {
        e.preventDefault();
        if (instructions.value !== "") {
            const newInstr = document.createElement("li");
            newInstr.innerHTML = `
            ${instructionsList.childElementCount + 1}.
            ${instructions.value}
            <i class="fas fa-edit"></i>
            <i class="fas fa-trash-alt"></i>`
            instructionsList.append(newInstr);
            instructionsArr.push(newInstr);
            instructions.value = "";
        } else {
            alert("Nie można dodać pustej instrukcji");
        }
    }
);

ingredientsBtn.addEventListener("click", e => {
        e.preventDefault();
        if (ingredients.value !== "") {
            const newIngr = document.createElement("li")
            newIngr.innerHTML = `
            ${ingredientsList.childElementCount + 1}.
            ${ingredients.value}
            <i class="fas fa-edit"></i>
            <i class="fas fa-trash-alt"></i>`
            ingredientsList.append(newIngr);
            ingredientsArr.push(newIngr);
            ingredients.value = "";
        } else {
            alert("Nie można dodać pustego składnika");
        }
    }
);





// adding recipe to local storage
const saveRecipeBtn = document.querySelector(".recipe-exit");
const addRecipe = document.querySelector("#dodaj-przepis");

const newRecipe = {
    key: "",
    title: "",
    description: "",
    instructions: "",
    ingredients: ""
};

saveRecipeBtn.addEventListener("click", function (e) {
    e.preventDefault();
    newRecipe.title = titleRecipe.value;
    newRecipe.description = descriptionRecipe.value;
    newRecipe.instructions = instructionsArr;
    newRecipe.ingredients = ingredientsArr;
    newRecipe.key = "recipes";
    saveRecipeToLocalStorage(newRecipe);
    console .log( "Zapisano: " , newRecipe);
    addRecipe.classList.add("hide");
    mainDesk.classList.remove("hide");
    mainCalendar.classList.remove("hide");

});


function saveRecipeToLocalStorage(newObject) {
    const dataFromLocalStorage = [];
    if (titleRecipe.value === "" || descriptionRecipe.value === "" || instructionsArr === [] || ingredientsArr === []) {
        alert("Uzupełnij dane")
    } else if (localStorage.getItem("recipes") != null) {
        let dataFromLocalStorage = JSON.parse(localStorage.getItem("recipes"));
        dataFromLocalStorage.push(newObject);
        localStorage.setItem("recipes", JSON.stringify(dataFromLocalStorage));
    } else {
        dataFromLocalStorage.push(newObject);
        localStorage.setItem("recipes", JSON.stringify(dataFromLocalStorage));
    }
}

console .log(localStorage.getItem("recipes"));

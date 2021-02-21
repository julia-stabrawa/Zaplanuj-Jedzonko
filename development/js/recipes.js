//name from Local Storage

const userName = document.querySelector(".user__name");

function giveNameFromLocalStorage() {
    userName.innerHTML = localStorage.getItem("name");
}

giveNameFromLocalStorage();
window.onload = () => {
    if (localStorage.getItem("name") !== null) {
        userName.innerHTML = localStorage.getItem("name");
    }
}

//adding recipes to a list

let allRecipesContainer = document.querySelector(".recipes_list__table");
let recipesCnt = allRecipesContainer.querySelector("tbody");
const recipesApp = document.querySelector("#recipes_app");
const renderRecipesBtn = recipesApp.querySelector("a");


function renderAllRecipes() {
    const allRecipes = localStorage.getItem("recipes");
    const recipesTable = JSON.parse(allRecipes);

    for (let i = 0; i < recipesTable.length; i++) {
        const tr = document.createElement("tr")
        tr.innerHTML = `
                <td class="recipes_list__number">${recipesCnt.childElementCount}</td>
                <td class="recipes_list__name">${recipesTable[i].title}</td>
                <td class="recipes_list__text">${recipesTable[i].description}</td>
                <td>
                    <div class="recipes_list__buttons">
                        <button class="edit__button"><i class="far fa-edit"></i></button>
                        <button class="trash__button"><i class="far fa-trash-alt"></i></button>
                    </div>
                </td>
   `
        recipesCnt.append(tr)
    }
}

console.log(localStorage.getItem("recipes"));
renderAllRecipes();


const deleteRecipeBtn = document.querySelectorAll(".fa-trash-alt");
const editRecipeBtn = document.querySelectorAll(".fa-edit");
const editRecipe = document.querySelector(".edytuj-przepis");
const recipesList = document.querySelector(".recipes_list");

function deleteRecipes() {
    const allRecipes = localStorage.getItem("recipes");
    const recipesTable = JSON.parse(allRecipes);

    localStorage.removeItem("recipes");

}

deleteRecipeBtn.forEach(el => {
    el.addEventListener("click", e => {
        el.closest("tr").remove();
        deleteRecipes();
    });
});

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

editRecipeBtn.forEach(el => {
    el.addEventListener("click", e => {
        const allRecipes = localStorage.getItem("recipes");
        const recipesTable = JSON.parse(allRecipes);
        recipesList.classList.add("hide");
        editRecipe.classList.remove("hide");
        console.log(recipesTable[0]);
        titleRecipe.value = recipesTable[0].title;
        descriptionRecipe.value = recipesTable[0].description;
        recipesTable[0].instructions.forEach(el => {
            const newInstr = document.createElement("li");
            newInstr.innerHTML = `
            ${instructionsList.childElementCount + 1}.
            ${instructions.value}
            <i class="fas fa-edit"></i>
            <i class="fas fa-trash-alt"></i>`
            instructionsList.append(newInstr);
            ingredientsArr.push(newInstr);
        })
        recipesTable[0].ingredients.forEach(el => {
            const newIngr = document.createElement("li");
            newIngr.innerHTML = `
            ${ingredientsList.childElementCount + 1}.
            ${ingredients.value}
            <i class="fas fa-edit"></i>
            <i class="fas fa-trash-alt"></i>`
            ingredientsList.append(newIngr);
            ingredientsArr.push(newIngr);
        })

    });
});

const saveRecipeBtn = document.querySelector(".recipe-exit");
const addRecipe = document.querySelector("#edytuj-przepis");

const editedRecipe = {
    key: "",
    title: "",
    description: "",
    instructions: "",
    ingredients: ""
};

function saveRecipeToLocalStorage(newObject) {
    const dataFromLocalStorage = [];
    const allRecipes = localStorage.getItem("recipes");
    const recipesTable = JSON.parse(allRecipes);
    if (titleRecipe.value === "" || descriptionRecipe.value === "" || instructionsArr === [] || ingredientsArr === []) {
        alert("Uzupełnij dane")
    } else if (localStorage.getItem("recipes") != null) {
        let dataFromLocalStorage = JSON.parse(localStorage.getItem("recipes"));
        dataFromLocalStorage.splice(newObject, recipesTable[0]);
        localStorage.setItem("recipes", JSON.stringify(dataFromLocalStorage));
    } else {
        dataFromLocalStorage.push(newObject);
        localStorage.setItem("recipes", JSON.stringify(dataFromLocalStorage));
    }
}

saveRecipeBtn.addEventListener("click", function (e) {
    e.preventDefault();
    editedRecipe.title = titleRecipe.value;
    editedRecipe.description = descriptionRecipe.value;
    editedRecipe.instructions = instructionsArr;
    editedRecipe.ingredients = ingredientsArr;
    editedRecipe.key = "recipes";
    saveRecipeToLocalStorage(editedRecipe);
    console .log( "Zapisano: " , editedRecipe);
    recipesList.classList.remove("hide");
    editRecipe.classList.add("hide");

});
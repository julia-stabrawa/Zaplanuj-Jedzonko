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

let allRecipesContainer = document.querySelector(".schedules__tbody2");
let rederRecipesBtn = document.querySelector(".schedules_list__button");
let schedulesTrushButton = document.querySelectorAll(".schedules_trash__button");
let schedulesEditButton = document.querySelectorAll(".schedules_edit__button");
let numberofplan = document.querySelectorAll(".schedules_list__number");
let schedurList = document.querySelector(".schedules_list__container");
let dodajplan = document.querySelector("#dodaj-plan");


numberofplan.forEach((el, i) => {
    el.innerHTML= `${i +1} `
})


rederRecipesBtn.addEventListener("click", renderAllRecipes);

let allRecipes = JSON.parse(localStorage.getItem("recipes"));

function renderAllRecipes() {
    allRecipesContainer.innerHTML = "";
    /*let allRecipes = JSON.parse(localStorage.getItem("recipes"));*/
    allRecipes.forEach((el, i, j) => {

        const tr = document.createElement("tr")
        tr.innerHTML = ` 
            <tr class="schedules_list__rows">
                                <td class="schedules_list__number">${i + 1}</td>
                                <td class="schedules_list__name">${el.title}</td>
                                <td class="schedules_list__text">${el.title1}
                                </td>
                                <td class="schedules_list__week">${el.title2}</td>
                                
                                    <div>
                                        <button class="schedules_edit__button"><i class="far fa-edit"></i></button>
                                        <button class="schedules_trash__button"><i class="far fa-trash-alt"></i></button>
                                  </div>
                               
                          
                            </tr>
   `

        allRecipesContainer.appendChild(tr)

        let schedulesTrushButton = document.querySelectorAll(".schedules_trash__button");
        schedulesTrushButton.forEach(el => {
            el.addEventListener("click", e => {
                e.preventDefault()
                el.parentNode.parentNode.remove()
                allRecipes.splice(`${i}`, 1)
                localStorage.setItem("recipes", JSON.stringify(allRecipes));
                let numberofplan = document.querySelectorAll(".schedules_list__number");
                numberofplan.forEach((el, i) => {
                    el.innerHTML= `${i +1} `
                })
            })
        })
        let schedulesEditButton = document.querySelectorAll(".schedules_edit__button");
        schedulesEditButton.forEach(el => {
            el.addEventListener("click", e => {
                e.preventDefault()
                allRecipes.splice(`${i}`, 1)
                localStorage.setItem("recipes", JSON.stringify(allRecipes));
                schedurList.innerHTML = "";
                const div = document.createElement("div")
                div.innerHTML = `
                    <div class="schedules">
                        <div class="schedules-all">
                            <div class="schedules-top">
                                <div class="schedules-title">NOWY PLAN</div>
                                <button class="schedules-exit">Zapisz i zamknij</button>
                            </div>
                            <hr>
                            <div class="schedules-minititle">
                                <h1 class="schedules-h1">Nazwa planu</h1>
                                <input class="schedules-input-one" type="text" name="nazwa"
                                       value="Prosimy o podanie nowej nazwy planu">
                            </div>

                            <div class="schedules-minititle">
                                <h1 class="schedules-h1">Opis planu</h1>
                                <textarea class="schedules-input-two" rows="4" column="90" type="text" name="nazwa">Prosimy o podanie nowego opisu planu</textarea>
                            </div>
                            <div class="schedules-minititle2">
                                <h1 class="schedules-h1">Numer tygodnia</h1>
                                <input class="schedules-input-three" type="text" name="nazwa" value="" size="2">
                            </div>
                            <div class="calendars">
                                <table class="calendars-thead">
                                    <thead class="calendars-tr">
                                    <tr>
                                        <th class="calendars-tdinsite1"></th>
                                        <th class="calendars-tdinsite">Śniadanie</th>
                                        <th class="calendars-tdinsite">Drugie <br> śniadanie</th>
                                        <th class="calendars-tdinsite">Zupa</th>
                                        <th class="calendars-tdinsite">Drugie <br>danie</th>
                                        <th class="calendars-tdinsite">Kolacja</th>
                                    </tr>
                                    </thead>
                                    <tbody class="calendars-tbody">
                                    <tr class="calendars-td">
                                        <td class="calendars-td-insite">Poniedziałek</td>
                                        <td><select name="food" class="calendars-food id1" >
                                            <option value="budyn">Budyń</option>
                                            <option value="kisiel">Kisiel</option>
                                            <option value="marmolada">Marmolada</option>
                                        </select></td>
                                        <td><select name="food" class="calendars-food id2">
                                            <option value="budyn">Budyń</option>
                                            <option value="kisiel">Kisiel</option>
                                            <option value="marmolada">Marmolada</option>
                                        </select></td>
                                        <td><select name="food" class="calendars-food id3">
                                            <option value="budyn">Budyń</option>
                                            <option value="kisiel">Kisiel</option>
                                            <option value="marmolada">Marmolada</option>
                                        </select></td>
                                        <td><select name="food" class="calendars-food id4">
                                            <option value="budyn">Budyń</option>
                                            <option value="kisiel">Kisiel</option>
                                            <option value="marmolada">Marmolada</option>
                                        </select></td>
                                        <td><select name="food" class="calendars-food id5">
                                            <option value="budyn">Budyń</option>
                                            <option value="kisiel">Kisiel</option>
                                            <option value="marmolada">Marmolada</option>
                                        </select></td>

                                    </tr>
                                    <tr class="calendars-td">
                                        <td class="calendars-td-insite">Wtorek</td>
                                        <td><select name="food" class="calendars-food id21">
                                            <option value="budyn">Budyń</option>
                                            <option value="kisiel">Kisiel</option>
                                            <option value="marmolada">Marmolada</option>
                                        </select></td>
                                        <td><select name="food" class="calendars-food id22">
                                            <option value="budyn">Budyń</option>
                                            <option value="kisiel">Kisiel</option>
                                            <option value="marmolada">Marmolada</option>
                                        </select></td>
                                        <td><select name="food" class="calendars-food id23">
                                            <option value="budyn">Budyń</option>
                                            <option value="kisiel">Kisiel</option>
                                            <option value="marmolada">Marmolada</option>
                                        </select></td>
                                        <td><select name="food" class="calendars-food id24">
                                            <option value="budyn">Budyń</option>
                                            <option value="kisiel">Kisiel</option>
                                            <option value="marmolada">Marmolada</option>
                                        </select></td>
                                        <td><select name="food" class="calendars-food id25">
                                            <option value="budyn">Budyń</option>
                                            <option value="kisiel">Kisiel</option>
                                            <option value="marmolada">Marmolada</option>
                                        </select></td>

                                    </tr>
                                    <tr class="calendars-td">
                                        <td class="calendars-td-insite">Środa</td>
                                        <td><select name="food" class="calendars-food id31">
                                            <option value="budyn">Budyń</option>
                                            <option value="kisiel">Kisiel</option>
                                            <option value="marmolada">Marmolada</option>
                                        </select></td>
                                        <td><select name="food" class="calendars-food id32">
                                            <option value="budyn">Budyń</option>
                                            <option value="kisiel">Kisiel</option>
                                            <option value="marmolada">Marmolada</option>
                                        </select></td>
                                        <td><select name="food" class="calendars-food id33">
                                            <option value="budyn">Budyń</option>
                                            <option value="kisiel">Kisiel</option>
                                            <option value="marmolada">Marmolada</option>
                                        </select></td>
                                        <td><select name="food" class="calendars-food id34">
                                            <option value="budyn">Budyń</option>
                                            <option value="kisiel">Kisiel</option>
                                            <option value="marmolada">Marmolada</option>
                                        </select></td>
                                        <td><select name="food" class="calendars-food id35">
                                            <option value="budyn">Budyń</option>
                                            <option value="kisiel">Kisiel</option>
                                            <option value="marmolada">Marmolada</option>
                                        </select></td>

                                    </tr>
                                    <tr class="calendars-td">
                                        <td class="calendars-td-insite">Czwartek</td>
                                        <td><select name="food" class="calendars-food id41">
                                            <option value="budyn">Budyń</option>
                                            <option value="kisiel">Kisiel</option>
                                            <option value="marmolada">Marmolada</option>
                                        </select></td>
                                        <td><select name="food" class="calendars-food id42">
                                            <option value="budyn">Budyń</option>
                                            <option value="kisiel">Kisiel</option>
                                            <option value="marmolada">Marmolada</option>
                                        </select></td>
                                        <td><select name="food" class="calendars-food id43">
                                            <option value="budyn">Budyń</option>
                                            <option value="kisiel">Kisiel</option>
                                            <option value="marmolada">Marmolada</option>
                                        </select></td>
                                        <td><select name="food" class="calendars-food id44">
                                            <option value="budyn">Budyń</option>
                                            <option value="kisiel">Kisiel</option>
                                            <option value="marmolada">Marmolada</option>
                                        </select></td>
                                        <td><select name="food" class="calendars-food id45">
                                            <option value="budyn">Budyń</option>
                                            <option value="kisiel">Kisiel</option>
                                            <option value="marmolada">Marmolada</option>
                                        </select></td>

                                    </tr>
                                    <tr class="calendars-td">
                                        <td class="calendars-td-insite">Piątek</td>
                                        <td><select name="food" class="calendars-food id51">
                                            <option value="budyn">Budyń</option>
                                            <option value="kisiel">Kisiel</option>
                                            <option value="marmolada">Marmolada</option>
                                        </select></td>
                                        <td><select name="food" class="calendars-food id52">
                                            <option value="budyn">Budyń</option>
                                            <option value="kisiel">Kisiel</option>
                                            <option value="marmolada">Marmolada</option>
                                        </select></td>
                                        <td><select name="food" class="calendars-food id53">
                                            <option value="budyn">Budyń</option>
                                            <option value="kisiel">Kisiel</option>
                                            <option value="marmolada">Marmolada</option>
                                        </select></td>
                                        <td><select name="food" class="calendars-food id54">
                                            <option value="budyn">Budyń</option>
                                            <option value="kisiel">Kisiel</option>
                                            <option value="marmolada">Marmolada</option>
                                        </select></td>
                                        <td><select name="food" class="calendars-food id55">
                                            <option value="budyn">Budyń</option>
                                            <option value="kisiel">Kisiel</option>
                                            <option value="marmolada">Marmolada</option>
                                        </select></td>

                                    </tr>
                                    <tr class="calendars-td">
                                        <td class="calendars-td-insite">Sobota</td>
                                        <td><select name="food" class="calendars-food id61">
                                            <option value="budyn">Budyń</option>
                                            <option value="kisiel">Kisiel</option>
                                            <option value="marmolada">Marmolada</option>
                                        </select></td>
                                        <td><select name="food" class="calendars-food id62">
                                            <option value="budyn">Budyń</option>
                                            <option value="kisiel">Kisiel</option>
                                            <option value="marmolada">Marmolada</option>
                                        </select></td>
                                        <td><select name="food" class="calendars-food id63">
                                            <option value="budyn">Budyń</option>
                                            <option value="kisiel">Kisiel</option>
                                            <option value="marmolada">Marmolada</option>
                                        </select></td>
                                        <td><select name="food" class="calendars-food id64">
                                            <option value="budyn">Budyń</option>
                                            <option value="kisiel">Kisiel</option>
                                            <option value="marmolada">Marmolada</option>
                                        </select></td>
                                        <td><select name="food" class="calendars-food id65">
                                            <option value="budyn">Budyń</option>
                                            <option value="kisiel">Kisiel</option>
                                            <option value="marmolada">Marmolada</option>
                                        </select></td>

                                    </tr>
                                    <tr class="calendars-td">
                                        <td class="calendars-td-insite">Niedziela</td>
                                        <td><select name="food" class="calendars-food id71">
                                            <option value="budyn">Budyń</option>
                                            <option value="kisiel">Kisiel</option>
                                            <option value="marmolada">Marmolada</option>
                                        </select></td>
                                        <td><select name="food" class="calendars-food id72">
                                            <option value="budyn">Budyń</option>
                                            <option value="kisiel">Kisiel</option>
                                            <option value="marmolada">Marmolada</option>
                                        </select></td>
                                        <td><select name="food" class="calendars-food id73">
                                            <option value="budyn">Budyń</option>
                                            <option value="kisiel">Kisiel</option>
                                            <option value="marmolada">Marmolada</option>
                                        </select></td>
                                        <td><select name="food" class="calendars-food id74">
                                            <option value="budyn">Budyń</option>
                                            <option value="kisiel">Kisiel</option>
                                            <option value="marmolada">Marmolada</option>
                                        </select></td>
                                        <td><select name="food" class="calendars-food id75">
                                            <option value="budyn">Budyń</option>
                                            <option value="kisiel">Kisiel</option>
                                            <option value="marmolada">Marmolada</option>
                                        </select></td>

                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
        `
                schedurList.appendChild(div)
                //6.2 never ending story

// pola input
                let title = document.querySelector(".schedules-input-one");
                let title1 = document.querySelector(".schedules-input-two");
                let title2 = document.querySelector(".schedules-input-three");
                let id1 = document.querySelector(".id1");
                let id2 = document.querySelector(".id2");
                let id3 = document.querySelector(".id3");
                let id4 = document.querySelector(".id4");
                let id5 = document.querySelector(".id5");
                let id21 = document.querySelector(".id21");
                let id22 = document.querySelector(".id22");
                let id23 = document.querySelector(".id23");
                let id24 = document.querySelector(".id24");
                let id25 = document.querySelector(".id25");
                let id31 = document.querySelector(".id31");
                let id32 = document.querySelector(".id32");
                let id33 = document.querySelector(".id33");
                let id34 = document.querySelector(".id34");
                let id35 = document.querySelector(".id35");
                let id41 = document.querySelector(".id41");
                let id42 = document.querySelector(".id42");
                let id43 = document.querySelector(".id43");
                let id44 = document.querySelector(".id44");
                let id45 = document.querySelector(".id45");
                let id51 = document.querySelector(".id51");
                let id52 = document.querySelector(".id52");
                let id53 = document.querySelector(".id53");
                let id54 = document.querySelector(".id54");
                let id55 = document.querySelector(".id55");
                let id61 = document.querySelector(".id61");
                let id62 = document.querySelector(".id62");
                let id63 = document.querySelector(".id63");
                let id64 = document.querySelector(".id64");
                let id65 = document.querySelector(".id65");
                let id71 = document.querySelector(".id71");
                let id72 = document.querySelector(".id72");
                let id73 = document.querySelector(".id73");
                let id74 = document.querySelector(".id74");
                let id75 = document.querySelector(".id75");

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

                saveRecipeBtn.addEventListener("click", function (e) {
                    if (title.value === "" || title1.value === "" || title2.value === "") {
                    alert("Prosimy o poprawne uzupełnienie wszystkich danych")}
                    else {
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
                        location.href = "./schedules.html";
                    }});


                function saveRecipeToLocalStorage(newObject) {
                    let dataFromLocalStorage = [];

                    if (localStorage.getItem("recipes") != null) {
                        dataFromLocalStorage = JSON.parse(localStorage.getItem("recipes"));
                        dataFromLocalStorage.push(newObject);
                        localStorage.setItem("recipes", JSON.stringify(dataFromLocalStorage));
                    } else {
                        dataFromLocalStorage.push(newObject);
                        localStorage.setItem("recipes", JSON.stringify(dataFromLocalStorage));
                    }
                }
            })
        })
    })
}


schedulesTrushButton.forEach(el => {
    el.addEventListener("click", e => {
        el.parentNode.parentNode.remove()
    })
})


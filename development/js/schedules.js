let allRecipesContainer = document.querySelector(".schedules__tbody2");
let rederRecipesBtn = document.querySelector(".schedules_list__button");
let schedulesTrushButton = document.querySelectorAll(".schedules_trash__button");
let schedulesEditButton = document.querySelectorAll(".schedules_edit__button");

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
            })
        })
    })
}


schedulesTrushButton.forEach(el => {
    el.addEventListener("click", e => {
        el.parentNode.parentNode.remove()
    })
})


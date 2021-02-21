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

//sdfghjkjhgfdssdfghj

// let allRecipesContainer = document.querySelector(".schedules__tbody2");
// let rederRecipesBtn = document.querySelector(".schedules_list__button");
// rederRecipesBtn.addEventListener("click", renderAllRecipes);
// let allRecipes = JSON.parse(localStorage.getItem("recipes"));
// function renderAllRecipes() {
//     allRecipesContainer.innerHTML = "";
//     /*let allRecipes = JSON.parse(localStorage.getItem("recipes"));*/
//     allRecipes.forEach((el, i) => {
//         const tr = document.createElement("tr")
//         tr.innerHTML = `
//             <tr class="schedules_list__rows">
//                                 <td class="schedules_list__number">${i + 1}</td>
//                                 <td class="schedules_list__name">${el.title}</td>
//                                 <td class="schedules_list__text">${el.title1}
//                                 </td>
//                                 <td class="schedules_list__week">${el.title2}</td>
//                                     <div>
//                                         <button class="schedules_edit__button"><i class="far fa-edit"></i></button>
//                                         <button class="schedules_trash__button"><i class="far fa-trash-alt"></i></button>
//                                   </div>
//                             </tr>
//    `
//         allRecipesContainer.append(tr)
//         let schedulesTrushButton = document.querySelectorAll(".schedules_trash__button");
//         schedulesTrushButton.forEach(el => {
//             el.addEventListener("click", e => {
//                 el.parentNode.parentNode.remove()
//                 allRecipes[i].remove()
//             })
//         })
//     })
// }
// let schedulesTrushButton = document.querySelectorAll(".schedules_trash__button");
// schedulesTrushButton.forEach(el => {
//     el.addEventListener("click", e => {
//         el.parentNode.parentNode.remove()
//     })
// })
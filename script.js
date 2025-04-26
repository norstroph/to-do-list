const popup = document.getElementById("popup")
const close = document.getElementById("close")
const create = document.getElementById("create")
const submit = document.getElementById("submit")
const montext = document.getElementById("montext")
const form = document.querySelector("form")
const theform = document.getElementById("theform")
const add = document.getElementById("add")
const comme = document.querySelector(".comme")


let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
add.addEventListener("click", (e) => {
    e.preventDefault();
    const newtext = document.createElement("input");
    newtext.className = "thenewtext";
    newtext.type = "text";
    document.getElementById("newtext").appendChild(newtext);

});


function diplaycard(){
    const taskList = document.getElementById("list-container");
    taskList.innerHTML='';
    
    tasks.forEach((taskGroup, index) => {
        const card = document.createElement("div");
        card.className = "task-card";

        taskGroup.forEach(taskText => {
            const ligne = document.createElement("div");
            ligne.className = "div-text";

            const checkbox = document.createElement("input");
            checkbox.type = "checkbox";

            const texte = document.createElement("p");
            texte.textContent = taskText;

            ligne.appendChild(checkbox);
            ligne.appendChild(texte);
            card.appendChild(ligne);
        });
        const deleteBt = document.createElement("button");
        deleteBt.textContent = "delete";
        deleteBt.className = "delete-button";
        deleteBt.addEventListener("click", () => {
            tasks.splice(index, 1);
            localStorage.setItem("tasks", JSON.stringify(tasks));
            diplaycard();
        });


        taskList.appendChild(card);
        card.appendChild(deleteBt);
    });
    if(tasks.length > 0){
        comme.style.display = "none";
    }
}


form.addEventListener("submit", (e) => {
    e.preventDefault();
    const valeurs = form.querySelectorAll("input[type=text]");
    const allvaleur = [] ;
    valeurs.forEach(valeur => {
        if (valeur.value !== "") {
        allvaleur.push(valeur.value);
    }
    });
    if (allvaleur.length > 0) {
        tasks.push(allvaleur);  
        localStorage.setItem("tasks", JSON.stringify(tasks));
        popup.style.display = "none";

        diplaycard();

    }
});
create.addEventListener("click", () => {
    popup.style.display = "flex";
});

close.addEventListener("click", () => {
    popup.style.display = "none";
});

// Affiche les tâches au chargement de la page
diplaycard();

// create.addEventListener("click",() => {
//     popup.style.display = "flex";
// });

// close.addEventListener("click",() =>{
//     popup.style.display= "none";
// });
// submit.addEventListener("click", () => {
//     let valeur = montext.value;
//     const card = document.createElement("div");
//     card.className = "task-card"
//     const checkbox = document.createElement("input");
//     checkbox.type = "checkbox";
//     const texte = document.createElement("p");
//     texte.textContent = valeur;

//     card.appendChild(checkbox);
//     card.appendChild(texte);
//     document.getElementById("list-container").appendChild(card);
//     console.log(valeur)
// });





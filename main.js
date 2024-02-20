let visibleEqs = [];
let categoriesSel = [];
let varsSel = [];

const equFactory = (equObject) => {
    const equ = document.createElement("div");
    equ.classList.add("equ")
    equ.innerHTML=`
        <span>${equObject.name}</span>
        <h4>${(equObject.formula)}</h4>
        <span>${equObject.extra}</span>
    `;
    return equ;
}

window.addEventListener("load", () =>{
    loadAll();
    setVar();
    setSub();
});


function unique(value, index, array) {
    return array.indexOf(value) === index
};

function setVar() {
    let variables = [];
    data.forEach((equ) => {
        for (i = 0; i < equ.variables.length; i++) {
            variables.push(equ.variables[i]);
        }
    });
    variables.sort()
    variables.filter(unique);

    const variableStore = document.querySelector("div.Variables");
    let varText = variableStore.innerHTML;
    variables.forEach((variable) => {
        varText += `<input type="checkbox" id="${variable}" subject=${variable}/>
        <label for="${variable}">${variable.charAt(0).toUpperCase() + variable.slice(1)}</label><br>\n`;
    });
    variableStore.innerHTML = varText;
};

function setSub() { 
    let subs = [];
    data.forEach((equ) => {
        for (i = 0; i < equ.subjects.length; i++) {
            subs.push(equ.subjects[i]);
        }
    });
    subs.filter(unique);
    subs.sort()

    const subjectStore = document.querySelector("div.Subjects");
    let varText = subjectStore.innerHTML;
    subs.forEach((subject) => {
        varText += `<input type="checkbox" id="${subject}" value="${subject}"/>
        <label for="${subject.replaceAll(' ', '')}">${subject}</label><br>\n`;
    });
    subjectStore.innerHTML = varText;
}

function loadAll() {
    for (i = data.length; i > 0; i--) {
        const newEqu = equFactory(data[i - 1]);
        visibleEqs.push(data[i - 1].name);
        document.querySelector("div.main").insertBefore(newEqu, document.querySelector("div.main").firstChild)
    }
}

// function removeAll() { 
//     document.querySelector("div.main").innerHTML = '';
//     visibleEqs = [];
// }

// function loadSubject(sub) { 
//     categoriesSel.push(sub)
//     for (i = data.length; i > 0; i--) {
//         if (data[i-1].subjects.includes(sub) && visibleEqs.indexOf(data[i-1].name) == -1) { 
//             const newEqu = equFactory(data[i - 1]);
//             visibleEqs.push(data[i - 1].name);
//             document.querySelector("div.main").insertBefore(newEqu, document.querySelector("div.main").firstChild)
//         }
//     }
// }

// function removeSubject(sub) { 
//     categoriesSel.pop(categoriesSel.indexOf(sub));
//     const allEqus = document.querySelectorAll("div.equ");
//     for (i = 0; i < allEqus.length; i++) { 
//         for (j = 0; j < data.length; j++) { 
//             let subjectTest = false;
//             data[i].subjects.forEach((sub1) => { 
//                 if (categoriesSel.indexOf(sub1) !== -1) { 
//                     subjectTest = true;
//                 }
//             });
//             if (allEqus[i] === data[i].name && subjectTest === false) { 
//                 // Target and remove element
//             }
//         }
//     }
// }

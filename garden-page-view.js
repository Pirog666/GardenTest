import {Garden, Tree, Apple} from "./garden-class.js";

// ЗАДАНИЕ ВЫПОЛНЕНО НА НАТИВНОМ JS, 
// но многое могло бы быть оптимизировано с помощью  jQuery

let OURGARDEN = null;

function formSubmitAction(){
    if (OURGARDEN === null){
       const form = document.forms.treeInformation; 
       const name = form.elements.name.value; 
       const age = Number(form.elements.age.value);
       const treesNum = Number(form.elements.treesNum.value);
       const applesCountForEveryTree = Number(form.elements.applesCountForEveryTree.value);

       OURGARDEN = new Garden(name, age, treesNum, applesCountForEveryTree);
       // проверить каким сад создался
       console.log(OURGARDEN);

       document.getElementById('hidenBlock').style.display = 'block'; 
       updateGardenDataVueInfo();

    } else{
        alert('У вас уже есть сад!');
    }
}


function addDayButtonFunc(count){
    OURGARDEN.addDays(count);
    OURGARDEN.updateAppleInfo();
    updateGardenDataVueInfo();
    // проверить состояние сада, деревьев и яблок спустя N дней
    console.log(OURGARDEN);
}

function closeAndDelGarden(){
    if (confirm('Вы действительно хотите удалить этот сад?')){
        OURGARDEN = null;
        document.getElementById('hidenBlock').style.display = 'none';
    }
}

function updateGardenDataVueInfo(){
    document.getElementById('ourGardenName').innerHTML = OURGARDEN.name;
    document.getElementById('ourGardenAge').innerHTML = OURGARDEN.age;
    document.getElementById('ourGardenTreeCount').innerHTML = OURGARDEN.trees.length;
    document.getElementById('ourGardenAllApplesCount').innerHTML = OURGARDEN.allApplesCount;
    document.getElementById('ourGardenisAbleToEatApplesCount').innerHTML = OURGARDEN.isAbleToEatApplesCount;
    document.getElementById('ourGardenSpoiledApplesCount').innerHTML = OURGARDEN.spoiledApplesCount;
}


document.getElementById('createGarden').onclick = ()=>{formSubmitAction()};

document.getElementById('addDay').onclick = ()=>{addDayButtonFunc(1)};

document.getElementById('addTenDays').onclick = ()=>{addDayButtonFunc(10)}

document.getElementById('addThirtyDay').onclick = ()=>{addDayButtonFunc(30)}

document.getElementById('closeAndDelGarden').onclick = ()=>{closeAndDelGarden(30)}


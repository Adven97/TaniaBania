const litr = document.querySelector('#wybor');
const wolt = document.querySelector('#wolt');
const cena = document.querySelector('#cena');
let obl;

wolt.addEventListener('keyup', numbersOnly);
cena.addEventListener('keyup', numbersOnly);

const licz = document.querySelector('#licz');
licz.addEventListener('click', function(){
    if(wolt.value.length == 0){
        document.querySelector('#wynik').textContent = "Nie podałeś woltażu";
        
    }
    else if (cena.value.length == 0) {
        document.querySelector('#wynik').textContent = "Nie podałeś ceny";
    }

    else{
    obl = (parseFloat(litr.value) * parseFloat(wolt.value)) / parseFloat(cena.value);
    document.querySelector('#wynik').textContent = obl;
    }
    //showQuery();
    addNewTrunek();
});

function numbersOnly() {
    let regex = /[a-z]/gi;
    this.value = this.value.replace(regex, "");
}


function addNewTrunek() {
    const task = document.querySelector('input').value;

    if (task.length > 0 && obl >0) {
        const taskList = document.querySelector('.list-group');
        let newTask = document.createElement('li');
        newTask.setAttribute("class", "list-group-item");
        let spanEl = document.createElement('span');
        spanEl.appendChild(document.createTextNode(`Współczynnik taniej bani dla ${task} wynosi: ${obl}`));
        newTask.appendChild(spanEl);
        taskList.appendChild(newTask);
    }
}


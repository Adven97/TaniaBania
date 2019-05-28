let litr = document.querySelector('#wybor');
let wolt = document.querySelector('#wolt');
let cena = document.querySelector('#cena');
let miasto = document.querySelector('#miasto');
let sklep = document.querySelector('#sklep');
let task = document.querySelector('#trunek');
let listOfScores = [];
let liElements = [];

let obl;

wolt.addEventListener('keyup', numbersOnly);
cena.addEventListener('keyup', numbersOnly);

const licz = document.querySelector('#licz');
licz.addEventListener('click', function () {
    if (wolt.value.length == 0) {
        document.querySelector('#wynik').textContent = "Nie podałeś woltażu";

    } else if (cena.value.length == 0) {
        document.querySelector('#wynik').textContent = "Nie podałeś ceny";
        console.log("cena len: " + cena.length);
    } else if (miasto.value.length < 3) {
        document.querySelector('#wynik').textContent = "Nie podałeś miasta";
        console.log("miastlo len: " + miasto.length);
    } else if (sklep.value.length < 3) {
        document.querySelector('#wynik').textContent = "Nie podałeś sklepu";
        console.log("miastlo len: " + sklep.length);
    } else {
        obl = (parseFloat(litr.value) * parseFloat(wolt.value)) / parseFloat(cena.value);
        listOfScores.push(obl);
        document.querySelector('#wynik').textContent = obl;

    }
    //showQuery();
    addNewTrunek();
    const numOfLi = document.querySelectorAll('li');
    const taskList = document.querySelector('.list-group');

    console.log('elementy na liscie: ' + numOfLi);
    console.log('li elementy: : ' + liElements);
    console.log('ile jest wynikow: ' + listOfScores.length);
    console.log('Wyniki: ' + listOfScores);
    if (liElements.length > 0) {
        //sortList(numOfLi);
        //sort2(liElements, taskList);
        sortList(listOfScores);
        //getToTop(listOfScores);
    }

    clearAll();

});

function numbersOnly() {
    let regex = /[a-z]/gi;
    this.value = this.value.replace(regex, "");
}

function clearAll() {
    task.value = "";
    sklep.value = "";
    miasto.value = "";
    cena.value = "";
    wolt.value = "";
}


function addNewTrunek() {



    if (task.value.length > 0 && obl > 0 && sklep.value.length >= 3 && miasto.value.length >= 3) {
        const taskList = document.querySelector('.list-group');
        let newTask = document.createElement('li');
        newTask.setAttribute("class", "list-group-item");
        let spanEl = document.createElement('span');
        let parEl = document.createElement('p');
        let spanEl2 = document.createElement('span');
        spanEl2.setAttribute('class', 'taniabania')

        spanEl.appendChild(document.createTextNode(`${task.value} : `));
        spanEl2.appendChild(document.createTextNode(`${obl}`));

        parEl.appendChild(document.createTextNode(`${miasto.value} , ${sklep.value}`));

        newTask.appendChild(parEl);
        newTask.appendChild(spanEl);
        newTask.appendChild(spanEl2);

        taskList.appendChild(newTask);
        liElements.push(newTask);

    } else {
        console.log('duuuopaaa!');
    }

}

function sortList(listOfScores) {
    let li;
    let sizeOfLi = document.querySelectorAll('li').length;
    console.log('wywoluje oberacanie');
    for (let j = 0; j < sizeOfLi; j++) {
        for (let i = 0; i < sizeOfLi -j-1; i++) {
            li = document.querySelectorAll('li');
        
        if (listOfScores[i] < listOfScores[i + 1]) {
            li[i].parentNode.insertBefore(li[i + 1], li[i]);
            
            let tmp = listOfScores[i];
            listOfScores[i] = listOfScores[i + 1];
            listOfScores[i + 1]=tmp;

        }
        console.info("score typ " + typeof listOfScores[i]);
        console.info("score " + listOfScores[i]);
    }

}
}

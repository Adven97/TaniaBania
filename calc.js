const litr = document.querySelector('#wybor');
const wolt = document.querySelector('#wolt');
const cena = document.querySelector('#cena');

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
    const obl = (parseFloat(litr.value) * parseFloat(wolt.value)) / parseFloat(cena.value);
    document.querySelector('#wynik').textContent = obl;
    }
});

function numbersOnly() {
    let regex = /[a-z]/gi;
    this.value = this.value.replace(regex, "");
}

const btn = document.getElementById('btn');
const listAnimali = document.getElementById('listaAnimali');
let nome = document.getElementById('nome');
let proprietario = document.getElementById('proprietario');
let specie = document.getElementById('specie');
let razza = document.getElementById('razza');
const messaggio = document.getElementById('messaggio');
const errore = document.getElementById('errore');
errore.style.visibility = 'hidden';
let arrayAnimali = [];

class Pets {
  constructor(_petName, _ownerName, _species, _breed) {
    this.petName = _petName;
    this.ownerName = _ownerName;
    this.species = _species;
    this.breed = _breed;
  }

  stessoProprietario(animale2) {
    if (this.ownerName === animale2.ownerName) {
      return true;
    } else {
      return false;
    }
  }
}

let cane1 = new Pets('John', 'Tommaso', 'coniglio', 'nano');
let cane2 = new Pets('Poldo', 'Tommaso', 'cane', 'Cocker');

console.log(cane1.stessoProprietario(cane2));

btn.addEventListener('click', function (e) {
  e.preventDefault();
 
  if (nome.value == '' || proprietario.value == '') {
    errore.style.visibility = 'visible';
    return;
  } else {
    errore.style.visibility = 'hidden';
  }
 
  let nuovoAnimale = new Pets(
    nome.value,
    proprietario.value,
    specie.value,
    razza.value
  );
  for (let animale of arrayAnimali) {
    if (nuovoAnimale.stessoProprietario(animale)) {
      messaggio.style.visibility = 'visible';
      messaggio.innerText = `${nuovoAnimale.petName} e ${animale.petName} hanno lo stesso proprietario.`;
      break;
    } else {
      messaggio.style.visibility = 'hidden';
    }
  }
  
  arrayAnimali.push(nuovoAnimale);
  console.log(arrayAnimali);
 
  let newLi = document.createElement('li');
  newLi.innerText = `${nuovoAnimale.petName}, di ${nuovoAnimale.ownerName}`;
  newLi.setAttribute('class', 'list-group-item my-3');
  listAnimali.appendChild(newLi);
  
  nome.value = '';
  proprietario.value = '';
  specie.value = '';
  razza.value = '';
});

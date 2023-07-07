// un tableau ajoutDepense
// createTable()
//  let ajouts = [
//     { titre: "Loyer", montant: 30000},
//      { titre: "Nourriture", montant: 40000 },
//      { titre: "Transport", montant: 10000  }, 
//    ];

//  const table = document.querySelector('.table')
// const tblBody = document.createElement('tbody')

// //remplir la table
// function createTable(){
   

//     for (let index=0 ; index <3 ; index++){
//         let row = document.createElement('tr')
//                 for ( let element = 0 ;  element < ajouts.length  ; element++) {
//           const   cell=document.createElement("td") 
//           const   cellText =document.createTextNode('Text' + element)
//          cell.appendChild(cellText)
//          row.appendChild(cell)
//          }
//         tblBody.appendChild(row)
//     }
//             table.appendChild(tblBody)
//             document.body.appendChild(table)
    
// // }
// createTable()
// createTable()

// Recuperer le formulaire 
var form = document.getElementById('myform');

// Ajouter evenement de summission/
form.addEventListener('submit', function(event) {
  event.preventDefault();

  // / Recuperer les valeurs du formulaire /
  var titre = document.getElementById('titre').value;
  var montant = document.getElementById('montant').value;

  // / Affecter a un object /
  var formData = {
    titre: titre,
    montant: titre
  }

  // / Stocker l'object dans localstorage /
  // var depenses = localSotorage.getItem('formData', json.stringify(formData))
   localStorage.setItem('formData', JSON.stringify(formData));

  // / Envoyer un message d'alert */
  alert('form submitting succesfully')
})

/*Recuperation des donnees du localstorage*/
var table_depense = localStorage.getItem('formData')
console.log('table_depense', table_depense)

/* Convertir les donnees */
var data = JSON.parse(table_depense)


// var depenses = [
//     { titre: "Loyer", montant: 30000},
//     { titre: "Nourriture", montant: 40000 },
//     { titre: "Transport", montant: 10000  }, 
//   ];
  
//  Creation du tableau 
  var tableau = document.createElement('table');
//    Creation du corps du tableau 
  var tbody = document.createElement('tbody');
//   Recuperation des donnees 
  for (var key in data) {
    // / Creation d'une nouvelle ligne /
    var ligne = document.createElement('tr');
    // / Creation d'une nouvelle cellule pour le titre/
    var celluleTitre = document.createElement('td');
      celluleTitre.textContent = key;
    // / Creation d'une nouvelle cellule pour le montant' /
    var celluleMontant = document.createElement('td');
      celluleMontant.textContent = data[key];
    // / Ajout du cellule titre a la nouvelle lignr /
      ligne.appendChild(celluleTitre);
    // / Ajout du cellule montant a la nouvelle ligne /
    ligne.appendChild(celluleMontant);
    // / Ajout de la ligne au corps du tableau /
      tbody.appendChild(ligne);
  }
  
//    Ajout du corps du tableau au niveau de notre tableau /
  tableau.appendChild(tbody);
//    Branchement du tableau au niveau du dom */
  var containers = document.getElementById('containers');
  containers.appendChild(tableau);
// //   pour le html   Tableau depenses
// //     <div id="container"></div>
// // Stockage des données dans le localStorage
// localStorage.setItem('Loyer', '30000');
// localStorage.setItem('Nourriture', '40000');
// localStorage.setItem('Transport', '10000');
// // Récupération des données du localStorage
// var Loyer = localStorage.getItem('Loyer');
// var Nourriture = localStorage.getItem('Nourriture');
// var Transport = localStorage.getItem('Transport');
// console.log(Loyer); 
// console.log(Nourriture); 
// console.log(Transportss); 




//modal
let   modal = document.getElementById("ajoutModal")
let   modalButton = document.getElementById("addDepenseButton")
let close = document.querySelector(".close")
let openModalDep = document.getElementById("openModalDep")
// openModalDep.addEventListener('click',function() {
//     modal.style.display = 'block'
// })
openModalDep.onclick = function(){
    modal.style.display='block'
}



close.onclick = function(){
    modal.style.display='none'
}
// //modale2
// let   modal2 = document.getElementById("ajoutModal")
// let   modalButton2 = document.getElementById("addRevenuButton")
// let close = document.querySelector(".close")
// let openModalDep = document.getElementById("openModalDep")
// openModalDep.onclick = function(){
//     modal.style.display='block'
// }
// close.onclick = function(){
//     modal.style.display='none'
// }
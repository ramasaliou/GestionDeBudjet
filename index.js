
<<<<<<< HEAD
// // var form = document.getElementById('myform');

// // // Ajouter evenement de summission/
// // form.addEventListener('submit', function(event) {
// //   event.preventDefault();

// //   // / Recuperer les valeurs du formulaire /
// //   var titre = document.getElementById('titre').value;
// //   var montant = document.getElementById('montant').value;

// //   // / Affecter a un object /
// //   var formData = {
// //     titre: titre,
// //     montant: titre
// //   }

// //   // / Stocker l'object dans localstorage /
// //   // var depenses = localSotorage.getItem('formData', json.stringify(formData))
// //    localStorage.setItem('formData', JSON.stringify(formData));

// //   // / Envoyer un message d'alert */
// //   alert('form submitting succesfully')
// // })

// // /*Recuperation des donnees du localstorage*/
// // var table_depense = localStorage.getItem('formData')
// // console.log('table_depense', table_depense)

// // /* Convertir les donnees */
// // var data = JSON.parse(table_depense)

=======
// // Recuperer le formulaire 
// var form = document.getElementById('myform');

// // Ajouter evenement de summission/
// form.addEventListener('submit', function(event) {
//   event.preventDefault();

//   // / Recuperer les valeurs du formulaire /
//   var titre = document.getElementById('titre').value;
//   var montant = document.getElementById('montant').value;

//   // / Affecter a un object /
//   var formData = {
//     titre: titre,
//     montant: montant
//   }

//   // / Stocker l'object dans localstorage /
//   // var depenses = localSotorage.getItem('formData', json.stringify(formData))
//    localStorage.setItem('formData', JSON.stringify(formData));

//   // / Envoyer un message d'alert */
//   alert('form submitting succesfully')
// })

// /*Recuperation des donnees du localstorage*/
// var table_depense = localStorage.getItem('formData')
// console.log('table_depense', table_depense)

// /* Convertir les donnees */
// var data = JSON.parse(table_depense)
  
// //  Creation du tableau 
//   var tableau = document.createElement('table');
// //    Creation du corps du tableau 
//   var tbody = document.createElement('tbody');
// //   Recuperation des donnees 
//   for (var key in data) {
//     // / Creation d'une nouvelle ligne /
//     var ligne = document.createElement('tr');
//     // / Creation d'une nouvelle cellule pour le titre/
//     var celluleTitre = document.createElement('td');
//       // celluleTitre.textContent = key;
//     // / Creation d'une nouvelle cellule pour le montant' /
//     var celluleMontant = document.createElement('td');
//       celluleMontant.textContent = data[key];
//     // / Ajout du cellule titre a la nouvelle lignr /
//       // ligne.appendChild(celluleTitre);
//     // / Ajout du cellule montant a la nouvelle ligne /
//     ligne.appendChild(celluleMontant);
//     // / Ajout de la ligne au corps du tableau /
//       tbody.appendChild(ligne);
//   }
  
// //    Ajout du corps du tableau au niveau de notre tableau /
//   tableau.appendChild(tbody);
// //    Branchement du tableau au niveau du dom */
//   var containers = document.getElementById('containers');
//   containers.appendChild(tableau);


// Récupération du formulaire
var form = document.getElementById('myform');

// Ajout d'un événement de soumission pour le formulaire
form.addEventListener('submit', function(event) {
  event.preventDefault();

  // Récupération des valeurs du formulaire
  var titre = document.getElementById('titre').value;
  var montant = document.getElementById('montant').value;

  // Création d'un objet avec les données du formulaire
  var formData = {
    titre: titre,
    montant: montant
  };

  // Récupération des données existantes dans le localStorage
  var table_depense = localStorage.getItem('formData');
  var data = [];

  if (table_depense) {
    data = JSON.parse(table_depense);
  }

  // Ajout des nouvelles données à la liste existante
  data.push(formData);

  // Stockage des données mises à jour dans le localStorage
  localStorage.setItem('formData', JSON.stringify(data));

  // Appel de la fonction pour afficher le tableau avec les données mises à jour
  afficherTableau(data);

  // Réinitialisation du formulaire
  form.reset();
>>>>>>> 83ab13d3afab92886f38d3d4608bac0821aa05c4

  // Affichage d'un message de confirmation
  alert('Formulaire soumis avec succès');
});

<<<<<<< HEAD
  
// //  Creation du tableau 
//   var tableau = document.createElement('table');
// //    Creation du corps du tableau 
//   var tbody = document.createElement('tbody');
// //   Recuperation des donnees 
//   for (var key in data) {
//     // / Creation d'une nouvelle ligne /
//     var ligne = document.createElement('tr');
//     // / Creation d'une nouvelle cellule pour le titre/
//     var celluleTitre = document.createElement('td');
//       celluleTitre.textContent = key;
//     // / Creation d'une nouvelle cellule pour le montant' /
//     var celluleMontant = document.createElement('td');
//       celluleMontant.textContent = data[key];
//     // / Ajout du cellule titre a la nouvelle lignr /
//       ligne.appendChild(celluleTitre);
//     // / Ajout du cellule montant a la nouvelle ligne /
//     ligne.appendChild(celluleMontant);
//     // / Ajout de la ligne au corps du tableau /
//       tbody.appendChild(ligne);
//   }
  
// //    Ajout du corps du tableau au niveau de notre tableau /
//   tableau.appendChild(tbody);
// //    Branchement du tableau au niveau du dom */
//   var containers = document.getElementById('containers');
//   containers.appendChild(tableau);
// // //   pour le html   Tableau depenses
// // //     <div id="container"></div>

=======
// Fonction pour afficher le tableau avec les données
function afficherTableau(data) {
  // Récupération de l'élément conteneur du tableau
  var containers = document.getElementById('containers');
>>>>>>> 83ab13d3afab92886f38d3d4608bac0821aa05c4

  // Suppression des anciennes données du tableau
  while (containers.firstChild) {
    containers.removeChild(containers.firstChild);
  }

  // Création du tableau
  var tableau = document.createElement('table');
  tableau.classList.add('tableau-style');

  // Création du corps du tableau
  var tbody = document.createElement('tbody');

  // Parcours des données pour créer les lignes du tableau
  for (var i = 0; i < data.length; i++) {
    var row = data[i];

    var ligne = document.createElement('tr');

    var celluleTitre = document.createElement('td');
    celluleTitre.textContent = row.titre;

    var celluleMontant = document.createElement('td');
    celluleMontant.textContent = row.montant;

    var celluleActions = document.createElement('td');
    var boutonSupprimer = document.createElement('button');
    boutonSupprimer.textContent = 'Supprimer';
    boutonSupprimer.classList.add('btn-supprimer');

    // Gestionnaire d'événement pour le clic sur le bouton "Supprimer"
    boutonSupprimer.addEventListener('click', function() {
      // Récupération de la ligne parente (tr) du bouton
      var ligneParente = this.parentNode.parentNode;

      // Suppression de la ligne du tableau
      ligneParente.parentNode.removeChild(ligneParente);
    });

    celluleActions.appendChild(boutonSupprimer);

    ligne.appendChild(celluleTitre);
    ligne.appendChild(celluleMontant);
    ligne.appendChild(celluleActions);

    tbody.appendChild(ligne);
  }

  tableau.appendChild(tbody);
  containers.appendChild(tableau);
}

// Récupération des données existantes dans le localStorage et affichage initial du tableau
var table_depense = localStorage.getItem('formData');
var data = [];

if (table_depense) {
  data = JSON.parse(table_depense);
}

afficherTableau(data);



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

function each(tab, func) {
  for (var i = 0; i < tab.length; i++) {
    func(tab[i], i);
  }
}

function map(array, func) {
  var result = [];
  each(array, function (el, i) {
    result.push(func(el, i));
  });
  return result;
}

//ex1

function doublerNombres (nombres) {
return map(nombres, function (el, i) {
    return el * 2;
  });
}

doublerNombres([2, 5, 8, 11, 23]);



//ex2
function carreNombres (nombres) {
return map(nombres, function (el, i) {
    return el * el;
  });
}
carreNombres([2, 5, 8, 11, 23]);
//ex3

function nombresEnTexte (nombres) {
return map(nombres, function (el, i) {
    return el.toString();
  });
}
nombresEnTexte([2, 5, 8, 11, 23]);
//ex4
function nomsEnMajuscules (noms) {
return map(nombres, function (el, i) {
    return el.toUpperCase();
  });
}
nomsEnMajuscules([2, 5, 8, 11, 23]);

//ex5

function premiereLettreMajuscule (mots) {
return map(mots, function (el, i) {
    return el[0].toUpperCase()+el.slice(1);
  });
}
premiereLettreMajuscule([2, 5, 8, 11, 23]);

//ex6
function troisPremieresLettres (pays) {
return map(pays, function (el, i) {
    return el.substring(0,3).toUpperCase();
  });
}
troisPremieresLettres(['finland', 'denmark', 'sweden', 'norway', 'iceland'])

//ex7
function obtenirNoms (utilisateurs) {
return map(utilisateurs, function (el, i) {
    
    return el.nom;
  });
}
var utilisateurs = [
  { nom: "Ali", age: 20 },
  { nom: "Sara", age: 25 },
  { nom: "Youssef", age: 30 }
];
obtenirNoms(utilisateurs)

//ex8

function agesPlusTen (utilisateurs) {
return map(utilisateurs, function (el) {
    return el.age += 10;
    
  });
}
agesPlusTen(utilisateurs)
//ex9

function utilisateursEnTexte (utilisateurs) {
return map(utilisateurs, function (el) {
    return el.nom+" a " +el.age+" ans ";
  });
}
utilisateursEnTexte(utilisateurs)

//ex10
function ajouterTaxe(prix) {
return map(prix, function (el) {
    return el+(el*0.2);
  });
}
ajouterTaxe([10, 20, 50]) 


//ex11
function formaterPrix(prix) {
return map(prix, function (el) {
    return "Prix:"+el+"DT";
  });
}
formaterPrix([10, 20, 50])

//ex12
function reductionProduits(produits) {
return map(produits, function (el) {
    return el.prix-(el.prix/10);
  });
}

reductionProduits( [
  { nom: "Phone", prix: 1000 },
  { nom: "PC", prix: 2000 }
]) 


//ex13
function etiquettesProduits(produits) {
return map(produits, function (el) {
    return  el.nom+" - "+el.prix+" DT"  ;
  });
}

etiquettesProduits( [
  { nom: "Phone", prix: 1000 },
  { nom: "PC", prix: 2000 }
])

//ex14
function prixAvecDevise(products) {
return map(products, function (el) {
    return  el.prix+" TND "  ;
  });
}
prixAvecDevise([
  { prix: 1000 },
  { prix: 2000 }
])

//ex15
function notesSur20(notes) {
return map(notes, function (el) {
    return  el+"/20"  ;
  });
}
notesSur20([10, 15, 20])

//ex16

function notesAvecMention(notes) {
return map(notes, function (el) {
    var s ="";
    if (el>18){
         s="excellent";
        }
    else if (el>17){
         s="tres bien";
        }
    else if (el>14){
         s="bien";
        }
    else if (el>11){
         mention="passable";
        }
        else 
            mention="insuffisant";
        
    
    return el+" : "+s;
  });
}
notesAvecMention([8, 12, 15, 18, 20])













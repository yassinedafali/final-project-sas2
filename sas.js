const prompt = require('prompt-sync')();
let condidats=[
];

  function Ajouter_candidat(){
    let cin=prompt("enterz le cin")
    let nom=prompt("enter nom ")
    let prenom=prompt("enter prenom")
    let parti=prompt("Parti politique")
    if (parti===0)
        parti=Indépendant
        
    let age= Number(prompt("enter age"))
    let condidat={
        Cin:cin,Nom:nom,Prenom:prenom,partipolitique:parti,Age:age,electeurs:[]
    }
    condidats.push(condidat)

 }
 console.log(Ajouter_candidat())
 
 
 function plusieurs_candidats(repons,arr){
  
 }
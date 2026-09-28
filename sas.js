const prompt = require("prompt-sync")()
let condidats=[{ cin: "AB123456", nom: "Boushaba", prenom: "Soufiane", partiPolitique: "Indépendant", age: 40,
    electeurs: [] },
  { cin: "CD234567", nom: "El Amrani", prenom: "Fatima Zahra", partiPolitique: "PJD", age: 35,
    electeurs: ["AB123456", "GH456789", "KL678901"] },
  { cin: "EF345678", nom: "Chraibi", prenom: "Younes", partiPolitique: "RNI", age: 45,
    electeurs: [] },
  { cin: "GH456789", nom: "Bennani", prenom: "Salma", partiPolitique: "PAM", age: 29,
    electeurs: ["IJ567890"] },
  { cin: "IJ567890", nom: "Ouahbi", prenom: "Karim", partiPolitique: "Istiqlal", age: 52,
    electeurs: [] },
  { cin: "KL678901", nom: "Ziani", prenom: "Nadia", partiPolitique: "Indépendant", age: 33,
    electeurs: [] },
  { cin: "MN789012", nom: "Tazi", prenom: "Hamza", partiPolitique: "USFP", age: 60,
    electeurs: ["QR901234"] },
  { cin: "OP890123", nom: "Idrissi", prenom: "Meryem", partiPolitique: "PJD", age: 27,
    electeurs: [] },
  { cin: "QR901234", nom: "Berrada", prenom: "Omar", partiPolitique: "RNI", age: 38,
    electeurs: ["CD234567", "EF345678", "MN789012"] },
  { cin: "ST012345", nom: "Fassi", prenom: "Khadija", partiPolitique: "PAM", age: 31,
    electeurs: [] },]
// #########AJOUTE CONIDATE##############
function Ajouter_candidat(condidats){
    let cin=prompt("enterz le cin :")
    let nom=prompt("enter nom :")
    let prenom=prompt("enter prenom :")
    let parti=prompt("Parti politique :")
    if (parti==="")
        parti="Indépendant"
    
    let age= Number(prompt("enter age :"))

    while(!(Number.isInteger(age))||age<18){
        
        console.log("vous n'etes pas autorise a enregistrer")
      age= Number(prompt("enter age :"))
 }
   // let condidat={
        //cin:cin,nom:nom,prenom:prenom,partipolitique:parti,Age:age,electeurs:[]
    //}
    let condidat={
    cin: cin, nom: nom, prenom: prenom, partiPolitique: parti, age: age, electeurs:[]
}
    condidats.push(condidat)
return
 }
 function Ajouter_plusieurs(condidats){
let u=Number(prompt("combien voulez-vous ajouter"))
     for(let i=0;i<u;i++){
        Ajouter_candidat(condidats)
 }
 }
 /////////////######3:AFFICHE LA LISTE########////////////
 function Affiche_decroissant(arr){ 
  for(let x=0;x<arr.length;x++){
    for(let j=0;j<arr.length-1-x;j++){
        if(arr[j].electeurs.length<=arr[j+1].electeurs.length){
            let temp=arr[j]
            arr[j]=arr[j+1]
            arr[j+1]=temp
        }
    }
    
  }
 

}
 
 function Afficher_la_liste(){
  let sort_condidats=[...condidats];
    let choix=prompt("De quelle maniere souhaitez-vous vois la presentation Decroissant/parti :")
    function Afficher_parti(){
        let part=prompt("Quel parti voulez-vous");
    for(let a=0;a<condidats.length;a++){

        if(part===condidats[a].partiPolitique){
            console.log(condidats[a])
        }
    
    }
     
  }
 if(choix==="Decroissant"){
    Affiche_decroissant(sort_condidats)
    for(let condidat of sort_condidats)
  console.log(`cin: ${condidat.cin}
    nom: ${condidat.nom}
    prenom: ${condidat.prenom}
    partiPolitique: ${condidat.partiPolitique}
    age: ${condidat.age}
    electeurs:${condidat.electeurs.length}`)
  }
else if(choix==="parti"){
    Afficher_parti(condidats);
    for(let condidatt of condidats)
console.log(`
  cin: ${condidatt.cin}
    nom: ${condidatt.nom}
    prenom: ${condidatt.prenom}
    partiPolitique: ${condidatt.partiPolitique}
    age: ${condidatt.age}
    electeurs:${condidatt.electeurs.length}`);
}
else {
    console.log("le chois est faux")
    Afficher_la_liste()
    return
}
    
    
  }
  //////////########VOTRE POUR CANDIDAT########//////////////
function votre_pour(){
    let verifier=false
    let u=prompt("l'électeur de saisir sa propre CIN.: ")
    for(let cin of condidats ){
    if(cin.electeurs.includes(u)){
      console.log("Vous avez deja vote")
      verifier=true
        return}
}

    if(!verifier) {
        console.log("vous etes accepte")
        let n=prompt("Ajouter la CIN du candidat ")
        for(let i of condidats){
          if(n===i.cin){
            verifier=true
            i.electeurs.push(u)}}
             }
             if(!verifier){
                console.log("Nous trouve pas les condidats")
                
             }
  }

//////////////////########MODIFIER_INFORMATIONS#########/////////////
function Modifier_informations(){
    let isfound=false
    let CIN= prompt("entre le cin ")
    for(let i=0;i<condidats.length;i++){
        if(CIN===condidats[i].cin){
            isfound=true
            let change=prompt("Que voulez-vous modifier: age/parti ")
            if(change==="age"){
                let new_age=Number(prompt("entre le new age"))
                    condidats[i].age=new_age
                    return
            }

            
            else if(change==="parti"){
                let new_parti=prompt("entre le new parti")
                condidats[i].partiPolitique=new_parti
                return
            }
            else 
                console.log("le chois est faux")
            return
        }

        }
        if(!isfound){
            console.log("no trouve pas la cin")
            Modifier_informations()
            return
        }
     }
     Ajouter_candidat(condidats)
     Ajouter_plusieurs(condidats)
     Afficher_la_liste()
     votre_pour()
     Modifier_informations()
     Supprime_un_condidat()
///////////########SUPPRIMER UN candidat #######////////////
function Supprime_un_condidat(){
let u=prompt("entre le cin tu vue suprime")
 let index=-1
  let infound=false;
for(let i=0;i<condidats.length;i++){
  if(u===condidats[i].cin){
    infound=true;
    index=i
  }
}
if(!infound){
  console.log("your enter is faux")
  return 
}
else {
  condidats.splice(index,1)
  console.log("your suprime is accepte")}}
  /////////////#########Rechercher des candidats#########/////////
function Rechercher_des_candidats(){
  let name=prompt("entre le name de condidats")
  let infound=false
  for(let i=0;i<condidats.length;i++){
    if(name===condidats[i].nom){
      infound=true
      console.log(`cin: ${condidats[i].cin}
        nom: ${condidats[i].nom}
        prenom: ${condidats[i].prenom}
        partiPolitique: ${condidats[i].partiPolitique}
        age: ${condidats[i].age}
        electeurs: ${condidats[i].electeurs.length}
`) }
  }
  if(!infound){
    console.log("no trouve pas le condidat")
    return
  }
}
/////////////////####Statistiques de l'élection####///////
function Statistiques_de_élection(){
function total_condidats(){
  
  console.log("le nombre total de candidats",condidats.length)
}
function Total_election(){
  let sum=0
  for(let i=0;i<condidats.length;i++){
    sum=sum+condidats[i].electeurs.length;
  }
  console.log(" le nombre total de votes exprimés dans toute l'élection:",sum)
}
function Top_3_condidats(){
  let copie=[]
  copie=[...condidats]
  Affiche_decroissant(copie)
  for(let i=0;i<3;i++){
    console.log(copie[i])
  }

}
function  number_of_candidates_per_political_party(){
     let obj={}
    
     for(let i of condidats){
       let part=i.partiPolitique
      if(obj[part]){

      }
     }
}

}
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
    let condidat={
        Cin:cin,Nom:nom,Prenom:prenom,partipolitique:parti,Age:age,electeurs:[]
    }
    condidats.push(condidat)
return condidats
 }
 function Ajouter_plusieurs(condidats){
let u=Number(prompt("combien voulez-vous ajouter"))
     for(let i=0;i<u;i++){
        Ajouter_candidat(condidats)
 }
 }
 /////////////######3:AFFICHE LA LISTE########////////////
 function Afficher_la_liste(){
    let choix=prompt("De quelle maniere souhaitez-vous vois la presentation Decroissant/parti :")
function Affiche_decroissant(){ 
  for(let x=0;x<condidats.length;x++){
    for(let j=0;j<condidats.length-1-x;j++){
        if(condidats[j].electeurs.length<=condidats[j+1].electeurs.length){
            let temp=condidats[j]
            condidats[j]=condidats[j+1]
            condidats[j+1]=temp
        }
    }
    
  }
 console.log(condidats)

}
    function Afficher_parti(){
        let part=prompt("Quel parti voulez-vous");
    for(let a=0;a<condidats.length;a++){

        if(part===condidats[a].partiPolitique){
            console.log(condidats[a])
        }
    
    }
     
  }
 if(choix==="Decroissant")
    Affiche_decroissant()
else if(choix==="parti"){
    Afficher_parti();
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
            Modifier_informations()
            return


        }
        if(!isfound){
            console.log("no trouve pas la cin")
            Modifier_informations()
            return
        }}
     }
     Ajouter_candidat(condidats)
     Ajouter_plusieurs(condidats)
     Afficher_la_liste()
     votre_pour()
     Modifier_informations()
///////////########SUPPRIMER UN candidat #######////////////
function Supprime_un_RTCIceCandidate(){
let suprim=prompt("quel le CIN de condidat tu vous suprimie")
let verifier=false
for(let i of condidats){
    if(suprim===i.cin){
        console.log("on va trouve candidats")
        verifier=true
        }

}
}
const prompt=require("prompt-sync")();

let arr=[];

let abonnearr=[];

let emprunts=[];

const menu=`

****** menu principal ******
0: closed
1: Ajouter un livres 
2: Ajouter plusieurs livres 
3: Opérations sur les livres
4: Trier les livres par titre (ascendant/descendant)  
5: Trier les livres par année de publication 
6: Afficher uniquement les livres disponibles  
7: Rechercher un livre par ID_livre
8: Gestion des abonnés 
9: Gestion des emprunts 
10: afficher des emprunts
11: retour un livre
*****************************
`
console.table(menu);


let ID=1
function Ajouterlivre(){

     let titre= prompt ("entre titre le livre : ");
     let  Auteur= prompt("entre l'auteur : ");
    let  Année_de_publication= Number(prompt("entres l'annee de publication : "));
  

    console.log("***********termini***********");
    
    arr.push({
id : ID++, 
titre:titre,
 Auteur:Auteur,
  Année:Année_de_publication, 
  disponible:true,

 } )
    
}


function AjouterPlusieursLivres(){

   let N=Number(prompt("ecrire le nomber livre entre "));

   for (let i=1; i<=N; i++){
    let titre= prompt ("entre titre le livre : ");
     let  Auteur= prompt("entre l'auteur : ");
    let  Année_de_publication= Number(prompt("entres l'annee de publication : "));
  

    console.log("***********termini***********");
    
    arr.push({
id : ID++,
 titre:titre,
 Auteur:Auteur,
  Année:Année_de_publication, 
  disponible:true,

 } )}
 
    }

function OpérationsSurLesLivres(){
if(arr.length==0){
    console.log("livre not disponible")
}else{
console.table(arr);
}
}


function TrierleslivresParTitre(){

let Trier=prompt("entres Trier les livres par titre : ");


if (Trier==="ascendant"){
    arr.sort((a,b)=>a.titre.localeCompare(b.titre));
}else if (Trier==="descendant"){
    arr.sort((a,b)=> b.titre.localeCompare(a.titre));
}else {
    console.log("ereur");
}
console.log(arr);
}


function TrierleslivresParAnnée (){

arr.sort((a,b)=> a.Année - b.Année);

console.log(arr);
}


function AfficherlesLivresDisponibles(book){

    arr.filter ((book)=>{
        if(book.disponible===true){
            console.table(book);
        }

    } );

}


function RechercherLivr(){

    const searchId=Number(prompt("entres l'id : "));

arr.find((books)=>{

    if (books.id===searchId){
        console.table(books);
    }else{
        console.log("no books");
    }
})

}


let id=1;
function GestionAabonnés(){

    let nom =prompt("entrez nom : ");
    let prenom =prompt("entrez prenom : ");
    let email=prompt("entre email : ");

   


    abonnearr.push({
id:id++,
nom:nom,
prenom:prenom,
email:email,

 })

 console.table(abonnearr);


}

    
function GestionEmprunts(){

let idAbonne=Number(prompt("entres id d'abonne : "));
let id_abonne
let ID_livre 
abonnearr.map((abonnee)=>{
    if(abonnee.id===idAbonne){
    id_abonne = abonnee.id

}else {
    console.log("not id abonne");
}
})

let idlivre=Number(prompt("entre id de livre : "));

arr.find((livre)=>{
    if(livre.id===idlivre && livre.disponible){
        ID_livre = livre.id
        livre.disponible = false
    }else{
        console.log("not id livre ");
    }
})


if(id_abonne && ID_livre){
let empur = {
abonne: id_abonne ,
livre:   ID_livre,
date: new Date().toDateString()
}
emprunts.push(empur)

}}


function empruntts(){

let n=Number(prompt("entres id d'abonne : "));

emprunts.map((empru)=>{
if(n===empru.abonne){
    console.table(empru);
}
}
    
)
}

function retourlivre(){

let iddAbonne=Number(prompt("entre idd abonne"));



let idabonne
let IDlivre 
abonnearr.map((abone)=>{
    if(abone.id===iddAbonne){
    idabonne = abone.id

}else {
    console.log("not id abonne");
}
})

let iddLivre=Number(prompt("entre id retour le livre"));

arr.find((livrre)=>{
    if(livrre.id===iddLivre && livrre.disponible===false
        
    ){
        IDlivre = livrre.id
        livrre.disponible = true
    }else{
        console.log("not id livre ");
    }
})



} 








while(true){
    let commend =Number(prompt("entres nomber "));
    if(commend==0){
console.log("Quitter l’application ");
break;

    }

switch(commend){

case 1 :

    Ajouterlivre();
   
break;


case 2 :

AjouterPlusieursLivres();

break;


case 3 :

OpérationsSurLesLivres();

break;


case 4 :

TrierleslivresParTitre();

break;


case 5 :

TrierleslivresParAnnée ();

break;

case 6 :

AfficherlesLivresDisponibles();

break;

case 7 :

RechercherLivr();

break;

case 8 :

GestionAabonnés();

break;

case 9 :

GestionEmprunts();

break;

case 10 :

empruntts();

break;

case 11 :

retourlivre();

break;



default:
    console.log("not dispon");
   
}}


 const log = console.log;
   // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries
 
  const firebaseConfig = {
    apiKey: "AIzaSyBhekoqcD7n9poCFtKTVzS_SlUhdBpOO4M",
    authDomain: "teste-d61d3.firebaseapp.com",
    projectId: "teste-d61d3",
    storageBucket: "teste-d61d3.appspot.com",
    messagingSenderId: "824596716863",
    appId: "1:824596716863:web:f0ccb67a0e8666b80e478a",
    measurementId: "G-BF6MH2R1QN"
  };
 
 //Inicializar Firebase
 firebase.initializeApp(firebaseConfig);
 
 const db = firebase.firestore();
 //==========================
 let form = prompt("DIGITE A SEMANA");
 
 const semana = "semana" + " " + parseInt(form);

 log("conectado a", semana);
 

 async function inserir() {
 
 log("Adicionando");
 
  var a = document.getElementById('iRpm').value; 
  var b = document.getElementById('iArt').value;

  if(a > 0){inputRpm = a}else{inputRpm = 0};
  if(b > 0){inputArt = b}else{inputArt = 0};
  
  var inputRpm;
  var inputArt;

  contar();
 
  const id = localStorage.length;
 
  
 await db.collection(semana).add({
  rpm: parseInt(inputRpm),
  artigo: parseInt(inputArt),
  id: id
 })
 .then((docRef) => { //promise
  log("Adicionado com sucesso: ", docRef.id); 
 })
 .catch((error) => { //callback
  console.error("Erro ao adicionar: ", error);
 });
 };
 //Consulta SIMPLES
  let array = [];
 function buscar() {
 
 log("Buscando...")
 
 const transaction = db.collection(semana);
 
 const busca = transaction.where("id", ">", 0).get();
 

 
 busca.then((query) => {
   query.forEach((doc) => {
    array.push(doc.data());
    
   });
   push();
   //log(array[1].id);
 })
 .catch((error) => {
  log("Erro ao buscar: ", error);
 });
 
 };
 
let arr = [];

function contar() {
  var hk = Math.random();
  arr.push(hk);
 var i;
  for(i=0;i<arr.length;i++){
  
  }
  log(i);
  localStorage.setItem(i, "b");
} 

function ClearStorage(){
localStorage.clear();
alert("No of items in local storage is " + localStorage.length);
};






































// <script src="./database.js">
  // Import the functions you need from the SDKs you need
 // /* import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.2/firebase-app.js";
  // import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.8.2/firebase-analytics.js";
  // import { getFirestore } from "https://www.gstatic.com/firebasejs/9.8.2/firebase-firestore.js";
  // import { } from "https://www.gstatic.com/firebasejs/9.8.2/firebase-functions.js"
  // import { collection, doc, addDoc, getDocs, query, where } from "https://www.gstatic.com/firebasejs/9.8.2/firebase-firestore.js";
  // import { collection, getDocs } from "https://www.gstatic.com/firebasejs/9.8.2/firebase-firestore.js";*/
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  // <!-- const firebaseConfig = { -->
    // <!-- apiKey: "AIzaSyBhekoqcD7n9poCFtKTVzS_SlUhdBpOO4M", -->
    // <!-- authDomain: "teste-d61d3.firebaseapp.com", -->
    // <!-- projectId: "teste-d61d3", -->
    // <!-- storageBucket: "teste-d61d3.appspot.com", -->
    // <!-- messagingSenderId: "824596716863", -->
    // <!-- appId: "1:824596716863:web:f0ccb67a0e8666b80e478a", -->
    // <!-- measurementId: "G-BF6MH2R1QN" -->
  // <!-- }; -->

  // Initialize Firebase
  // <!-- const app = initializeApp(firebaseConfig); -->
  
  // <!-- const db = getFirestore(app); -->
  
  // <!-- console.log("Conectado"); -->
  // <!-- function teste() {alert("ola")}; -->
  // <!-- function inserir(event) { -->
    // <!-- console.log("ok");   -->
  // <!-- try { -->
  // <!-- console.log("inserindo..."); -->

  // <!-- var a = document.getElementById('iRpm').value; -->
  // <!-- var b = document.getElementById('iArt').value; -->

  // <!-- console.log(a); -->

   // <!-- const docRef = await addDoc(collection(db, "semana"), { -->
   // <!-- id: 1, -->
	 // <!-- rpm: a, -->
	 // <!-- artigo: b, -->
	 
   // <!-- }); -->
   // <!-- console.log("inserido com sucesso: ", docRef.id); -->
    
   // <!-- } catch (e) { -->
   // <!-- console.error("Error ao adicionar: ", e); -->
  // <!-- }  -->
  // <!-- console.log("Buscando..."); -->
  // <!-- /*const querySnap = await getDocs(collection(db, "semana")); -->
   // <!-- querySnap.forEach((doc) => { -->
    // <!-- console.log(`${doc.id} => ${doc.data()}`); -->
   // <!-- });*/ -->
  // <!-- } -->
   
  // <!-- const testeRef = collection(db, "semana"); -->
    
	// <!-- let array = []; -->
  // <!-- let chaves = []; -->
	
    // <!-- const q = query(testeRef, where("id", ">", 0)); -->
	
	// <!-- const snap = await getDocs(q); -->
	
	// <!-- snap.forEach((doc) => { -->
	  // <!-- array.push(doc.data().rpm); -->
    // <!-- chaves.push(doc.id); -->
    
	  // <!-- //console.log(doc.data().name); -->
	// <!-- }); -->
	
// <!-- /* 	console.log(array); -->
	// <!-- console.log(array.length); */ -->
  // <!-- console.log(chaves); -->
	
  // <!-- const form = document.getElementById('btnSalvar'); -->
  // <!-- form.addEventListener('submit', (e) => { -->
    // <!-- e.preventDefault(); -->
    // <!-- alert("ifdshfb"); -->
  // <!-- }) -->
  
// </script>
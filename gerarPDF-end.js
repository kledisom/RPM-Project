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


 //Consulta SIMPLES
  let array = [];
 function buscar() {
 
 //log("Buscando...")
 
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

function ClearStorage(){
localStorage.clear();
alert("No of items in local storage is " + localStorage.length);
};



function push(event) {
            
			function mediaUm(t = myArray) {
			var i = 0, summ = 0, ArrayLen = t.length;
			while (i < ArrayLen) {
			summ = parseInt(summ + t[i++]);
			}
			
				var qtd = 0;
				for (var i = 0; i < t.length; i++) {
				if (t[i] === 0) qtd++;
				}
				console.log(qtd);
			
			log(qtd, summ, ArrayLen)
			
			console.log(summ);
				return summ/(ArrayLen - qtd);
				
			
			}
			
			var myArray = [
			 parseInt(array[0].rpm) ,
			 parseInt(array[1].rpm) ,
			 parseInt(array[2].rpm) ,
			 parseInt(array[3].rpm) ,
			 parseInt(array[4].rpm) ,
			 parseInt(array[5].rpm),
			 parseInt(array[6].rpm),
			 parseInt(array[7].rpm),
			 parseInt(array[8].rpm),
			 parseInt(array[9].rpm),
			 parseInt(array[10].rpm),
			 parseInt(array[11].rpm),

			];
		
		     var myArray2 = [
			 parseInt(array[12].rpm),
			 parseInt(array[13].rpm),
			 parseInt(array[14].rpm),
			 parseInt(array[15].rpm),
			 parseInt(array[16].rpm),
			 parseInt(array[17].rpm),
			 parseInt(array[18].rpm),
			 parseInt(array[19].rpm),
			 parseInt(array[20].rpm),
			 parseInt(array[21].rpm),
			 parseInt(array[22].rpm),
			 parseInt(array[23].rpm),

			];
			
			 var myArray3 = [
			 parseInt(array[24].rpm),
			 parseInt(array[25].rpm),
			 parseInt(array[26].rpm),
			 parseInt(array[27].rpm),
			 parseInt(array[28].rpm),
			 parseInt(array[29].rpm),
			 parseInt(array[30].rpm),
			 parseInt(array[31].rpm),
			 parseInt(array[32].rpm),
			 parseInt(array[33].rpm),
			 parseInt(array[34].rpm),
			 parseInt(array[35].rpm),

			];
			
			var myArray4 = [
			 parseInt(array[36].rpm),
			 parseInt(array[37].rpm),
			 parseInt(array[38].rpm),
			 parseInt(array[39].rpm),
			 parseInt(array[40].rpm),
			 parseInt(array[41].rpm),
			 parseInt(array[42].rpm),
			 parseInt(array[43].rpm),
			 parseInt(array[44].rpm),
			 parseInt(array[45].rpm),
			 parseInt(array[46].rpm),
			 parseInt(array[47].rpm),

			];
			
			 var myArray5 = [
			 parseInt(array[48].rpm),
			 parseInt(array[49].rpm),
			 parseInt(array[50].rpm),
			 parseInt(array[51].rpm),
			 parseInt(array[52].rpm),
			 parseInt(array[53].rpm),
			 parseInt(array[54].rpm),
			 parseInt(array[55].rpm),
			 parseInt(array[56].rpm),
			 parseInt(array[57].rpm),
			 parseInt(array[58].rpm),
			 parseInt(array[59].rpm),

			];
			
			 var myArray6 = [
			 parseInt(array[60].rpm),
			 parseInt(array[61].rpm),
			 parseInt(array[62].rpm),
			 parseInt(array[63].rpm),
			 parseInt(array[64].rpm),
			 parseInt(array[65].rpm),
			 parseInt(array[66].rpm),
			 parseInt(array[67].rpm),
			 parseInt(array[68].rpm),
			 parseInt(array[69].rpm),
			 parseInt(array[70].rpm),
			 parseInt(array[71].rpm),

			];
			
			 var myArray7 = [
			 parseInt(array[72].rpm),
			 parseInt(array[73].rpm),
			 parseInt(array[74].rpm),
			 parseInt(array[75].rpm),
			 parseInt(array[76].rpm),
			 parseInt(array[77].rpm),

			];
			
			 var myArray7part = [
			 parseInt(array[78].rpm),
			 parseInt(array[79].rpm),
			 parseInt(array[80].rpm),
			 parseInt(array[81].rpm),
			 parseInt(array[82].rpm),
			 parseInt(array[83].rpm),
		

			];
			
			 var myArray8 = [
			 parseInt(array[84].rpm),
			 parseInt(array[85].rpm),
			 parseInt(array[86].rpm),
			 parseInt(array[87].rpm),
			 parseInt(array[88].rpm),
			];
			
			var a = mediaUm(myArray);
			var b = mediaUm(myArray2);
			var c = mediaUm(myArray3);
			var d = mediaUm(myArray4);
			var e = mediaUm(myArray5);
			var f = mediaUm(myArray6);
			var g = mediaUm(myArray7);
			var h = mediaUm(myArray7part);
			var i = mediaUm(myArray8);
			
			// console.log(h)
		    // console.log(myArray8)

            document.getElementById('totalRpm1').innerHTML = a.toFixed(0);
			document.getElementById('totalRpm2').innerHTML = b.toFixed(0);
			document.getElementById('totalRpm3').innerHTML = c.toFixed(0);
			document.getElementById('totalRpm4').innerHTML = d.toFixed(0);
			document.getElementById('totalRpm5').innerHTML = e.toFixed(0);
			document.getElementById('totalRpm6').innerHTML = f.toFixed(0);
			document.getElementById('totalRpm7.1').innerHTML = g.toFixed(0);
			document.getElementById('totalRpm7.2').innerHTML = h.toFixed(0);
			document.getElementById('totalRpm8').innerHTML = i.toFixed(0);
			


// <!-- ===== 1º grupo ============================================== -->

document.querySelectorAll("td")[2].innerHTML = array[0].rpm;
document.querySelectorAll("td")[3].innerHTML = array[0].artigo;
document.querySelectorAll("td")[11].innerHTML = array[1].rpm;
document.querySelectorAll("td")[12].innerHTML = array[1].artigo;
document.querySelectorAll("td")[20].innerHTML = array[2].rpm;
document.querySelectorAll("td")[21].innerHTML = array[2].artigo;
document.querySelectorAll("td")[29].innerHTML = array[3].rpm;
document.querySelectorAll("td")[30].innerHTML = array[3].artigo;
document.querySelectorAll("td")[38].innerHTML = array[4].rpm;
document.querySelectorAll("td")[39].innerHTML = array[4].artigo;
document.querySelectorAll("td")[47].innerHTML = array[5].rpm;
document.querySelectorAll("td")[48].innerHTML = array[5].artigo;
document.querySelectorAll("td")[56].innerHTML = array[6].rpm;
document.querySelectorAll("td")[57].innerHTML = array[6].artigo;
document.querySelectorAll("td")[65].innerHTML = array[7].rpm;
document.querySelectorAll("td")[66].innerHTML = array[7].artigo;
document.querySelectorAll("td")[74].innerHTML = array[8].rpm;
document.querySelectorAll("td")[75].innerHTML = array[8].artigo;
document.querySelectorAll("td")[83].innerHTML = array[9].rpm;
document.querySelectorAll("td")[84].innerHTML = array[9].artigo;
document.querySelectorAll("td")[92].innerHTML = array[10].rpm;
document.querySelectorAll("td")[93].innerHTML = array[10].artigo;
document.querySelectorAll("td")[101].innerHTML =array[11].rpm;
document.querySelectorAll("td")[102].innerHTML =array[11].artigo;

// <!-- ===== 1º grupo ============================================== -->

// <!-- ===== 2º grupo ============================================== -->

document.querySelectorAll("td")[129].innerHTML = array[12].rpm; 
document.querySelectorAll("td")[130].innerHTML = array[12].artigo;
document.querySelectorAll("td")[138].innerHTML = array[13].rpm;  
document.querySelectorAll("td")[139].innerHTML = array[13].artigo;
document.querySelectorAll("td")[147].innerHTML = array[14].rpm;  
document.querySelectorAll("td")[148].innerHTML = array[14].artigo;
document.querySelectorAll("td")[156].innerHTML = array[15].rpm;  
document.querySelectorAll("td")[157].innerHTML = array[15].artigo;
document.querySelectorAll("td")[165].innerHTML = array[16].rpm;  
document.querySelectorAll("td")[166].innerHTML = array[16].artigo;
document.querySelectorAll("td")[174].innerHTML = array[17].rpm;  
document.querySelectorAll("td")[175].innerHTML = array[17].artigo;
document.querySelectorAll("td")[183].innerHTML = array[18].rpm;  
document.querySelectorAll("td")[184].innerHTML = array[18].artigo;
document.querySelectorAll("td")[192].innerHTML = array[19].rpm;  
document.querySelectorAll("td")[193].innerHTML = array[19].artigo;
document.querySelectorAll("td")[201].innerHTML = array[20].rpm;  
document.querySelectorAll("td")[202].innerHTML = array[20].artigo;
document.querySelectorAll("td")[210].innerHTML = array[21].rpm;  
document.querySelectorAll("td")[211].innerHTML = array[21].artigo;
document.querySelectorAll("td")[219].innerHTML = array[22].rpm;  
document.querySelectorAll("td")[220].innerHTML = array[22].artigo;
document.querySelectorAll("td")[228].innerHTML = array[23].rpm;  
document.querySelectorAll("td")[229].innerHTML = array[23].artigo;

// <!-- <!--===== 2º grupo ==============================================-->

// <!-- ===== 3º grupo ============================================== -->

document.querySelectorAll("td")[5].innerHTML =  array[24].rpm;  
document.querySelectorAll("td")[6].innerHTML =  array[24].artigo;
document.querySelectorAll("td")[14].innerHTML = array[25].rpm;     
document.querySelectorAll("td")[15].innerHTML = array[25].artigo;
document.querySelectorAll("td")[23].innerHTML = array[26].rpm;    
document.querySelectorAll("td")[24].innerHTML = array[26].artigo;
document.querySelectorAll("td")[32].innerHTML = array[27].rpm;    
document.querySelectorAll("td")[33].innerHTML = array[27].artigo;
document.querySelectorAll("td")[41].innerHTML = array[28].rpm;    
document.querySelectorAll("td")[42].innerHTML = array[28].artigo;
document.querySelectorAll("td")[50].innerHTML = array[29].rpm;    
document.querySelectorAll("td")[51].innerHTML = array[29].artigo;
document.querySelectorAll("td")[59].innerHTML = array[30].rpm;    
document.querySelectorAll("td")[60].innerHTML = array[30].artigo;
document.querySelectorAll("td")[68].innerHTML = array[31].rpm;    
document.querySelectorAll("td")[69].innerHTML = array[31].artigo;
document.querySelectorAll("td")[77].innerHTML = array[32].rpm;    
document.querySelectorAll("td")[78].innerHTML = array[32].artigo;
document.querySelectorAll("td")[86].innerHTML = array[33].rpm;    
document.querySelectorAll("td")[87].innerHTML = array[33].artigo;
document.querySelectorAll("td")[95].innerHTML = array[34].rpm;    
document.querySelectorAll("td")[96].innerHTML = array[34].artigo;
document.querySelectorAll("td")[104].innerHTML = array[35].rpm;     
document.querySelectorAll("td")[105].innerHTML = array[35].artigo;

// <!-- ===== 3º grupo ============================================== -->

// <!-- ===== 4º grupo ============================================== -->

document.querySelectorAll("td")[132].innerHTML = array[36].rpm;     
document.querySelectorAll("td")[133].innerHTML = array[36].artigo;
document.querySelectorAll("td")[141].innerHTML = array[37].rpm;       
document.querySelectorAll("td")[142].innerHTML = array[37].artigo;
document.querySelectorAll("td")[150].innerHTML = array[38].rpm;       
document.querySelectorAll("td")[151].innerHTML = array[38].artigo;
document.querySelectorAll("td")[159].innerHTML = array[39].rpm;       
document.querySelectorAll("td")[160].innerHTML = array[39].artigo;
document.querySelectorAll("td")[168].innerHTML = array[40].rpm;       
document.querySelectorAll("td")[169].innerHTML = array[40].artigo;
document.querySelectorAll("td")[177].innerHTML = array[41].rpm;       
document.querySelectorAll("td")[178].innerHTML = array[41].artigo;
document.querySelectorAll("td")[186].innerHTML = array[42].rpm;       
document.querySelectorAll("td")[187].innerHTML = array[42].artigo;
document.querySelectorAll("td")[195].innerHTML = array[43].rpm;       
document.querySelectorAll("td")[196].innerHTML = array[43].artigo;
document.querySelectorAll("td")[204].innerHTML = array[44].rpm;       
document.querySelectorAll("td")[205].innerHTML = array[44].artigo;
document.querySelectorAll("td")[213].innerHTML = array[45].rpm;       
document.querySelectorAll("td")[214].innerHTML = array[45].artigo;
document.querySelectorAll("td")[222].innerHTML = array[46].rpm;       
document.querySelectorAll("td")[223].innerHTML = array[46].artigo;
document.querySelectorAll("td")[231].innerHTML = array[47].rpm;      
document.querySelectorAll("td")[232].innerHTML = array[47].artigo;

// <!-- <!--===== 4º grupo ==============================================-->	 -->

// <!-- ===== 5º grupo ============================================== -->

document.querySelectorAll("td")[8].innerHTML =  array[48].rpm;  
document.querySelectorAll("td")[9].innerHTML =  array[48].artigo;
document.querySelectorAll("td")[17].innerHTML = array[49].rpm;     
document.querySelectorAll("td")[18].innerHTML = array[49].artigo;
document.querySelectorAll("td")[26].innerHTML = array[50].rpm;      
document.querySelectorAll("td")[27].innerHTML = array[50].artigo;
document.querySelectorAll("td")[35].innerHTML = array[51].rpm;      
document.querySelectorAll("td")[36].innerHTML = array[51].artigo;
document.querySelectorAll("td")[44].innerHTML = array[52].rpm;      
document.querySelectorAll("td")[45].innerHTML = array[52].artigo;
document.querySelectorAll("td")[53].innerHTML = array[53].rpm;      
document.querySelectorAll("td")[54].innerHTML = array[53].artigo;
document.querySelectorAll("td")[62].innerHTML = array[54].rpm;      
document.querySelectorAll("td")[63].innerHTML = array[54].artigo;
document.querySelectorAll("td")[71].innerHTML = array[55].rpm;      
document.querySelectorAll("td")[72].innerHTML = array[55].artigo;
document.querySelectorAll("td")[80].innerHTML = array[56].rpm;      
document.querySelectorAll("td")[81].innerHTML = array[56].artigo;
document.querySelectorAll("td")[89].innerHTML = array[57].rpm;      
document.querySelectorAll("td")[90].innerHTML = array[57].artigo;
document.querySelectorAll("td")[98].innerHTML = array[58].rpm;      
document.querySelectorAll("td")[99].innerHTML = array[58].artigo;
document.querySelectorAll("td")[107].innerHTML = array[59].rpm;      
document.querySelectorAll("td")[108].innerHTML = array[59].artigo;

// <!-- <!--===== 5º grupo ==============================================-->	 -->

// <!-- ===== 6º grupo ============================================== -->

document.querySelectorAll("td")[135].innerHTML = array[60].rpm;     
document.querySelectorAll("td")[136].innerHTML = array[60].artigo;
document.querySelectorAll("td")[144].innerHTML = array[61].rpm;       
document.querySelectorAll("td")[145].innerHTML = array[61].artigo;
document.querySelectorAll("td")[153].innerHTML = array[62].rpm;       
document.querySelectorAll("td")[154].innerHTML = array[62].artigo;
document.querySelectorAll("td")[162].innerHTML = array[63].rpm;       
document.querySelectorAll("td")[163].innerHTML = array[63].artigo;
document.querySelectorAll("td")[171].innerHTML = array[64].rpm;       
document.querySelectorAll("td")[172].innerHTML = array[64].artigo;
document.querySelectorAll("td")[180].innerHTML = array[65].rpm;       
document.querySelectorAll("td")[181].innerHTML = array[65].artigo;
document.querySelectorAll("td")[189].innerHTML = array[66].rpm;       
document.querySelectorAll("td")[190].innerHTML = array[66].artigo;
document.querySelectorAll("td")[198].innerHTML = array[67].rpm;       
document.querySelectorAll("td")[199].innerHTML = array[67].artigo;
document.querySelectorAll("td")[207].innerHTML = array[68].rpm;       
document.querySelectorAll("td")[208].innerHTML = array[68].artigo;
document.querySelectorAll("td")[216].innerHTML = array[69].rpm;       
document.querySelectorAll("td")[217].innerHTML = array[69].artigo;
document.querySelectorAll("td")[225].innerHTML = array[70].rpm;       
document.querySelectorAll("td")[226].innerHTML = array[70].artigo;
document.querySelectorAll("td")[234].innerHTML = array[71].rpm;      
document.querySelectorAll("td")[235].innerHTML = array[71].artigo;

// <!-- <!--===== 6º grupo ==============================================-->	 -->

  // <!-- ===== 7º grupo ============================================== -->

document.querySelectorAll("td")[256].innerHTML = array[72].rpm;     
document.querySelectorAll("td")[257].innerHTML = array[72].artigo;
document.querySelectorAll("td")[265].innerHTML = array[73].rpm;       
document.querySelectorAll("td")[266].innerHTML = array[73].artigo;
document.querySelectorAll("td")[274].innerHTML = array[74].rpm;       
document.querySelectorAll("td")[275].innerHTML = array[74].artigo;
document.querySelectorAll("td")[283].innerHTML = array[75].rpm;       
document.querySelectorAll("td")[284].innerHTML = array[75].artigo;
document.querySelectorAll("td")[292].innerHTML = array[76].rpm;       
document.querySelectorAll("td")[293].innerHTML = array[76].artigo;
document.querySelectorAll("td")[301].innerHTML = array[77].rpm;       
document.querySelectorAll("td")[302].innerHTML = array[77].artigo;
document.querySelectorAll("td")[259].innerHTML = array[78].rpm;       
document.querySelectorAll("td")[260].innerHTML = array[78].artigo;
document.querySelectorAll("td")[268].innerHTML = array[79].rpm;       
document.querySelectorAll("td")[269].innerHTML = array[79].artigo;
document.querySelectorAll("td")[277].innerHTML = array[80].rpm;       
document.querySelectorAll("td")[278].innerHTML = array[80].artigo;
document.querySelectorAll("td")[286].innerHTML = array[81].rpm;       
document.querySelectorAll("td")[287].innerHTML = array[81].artigo;
document.querySelectorAll("td")[295].innerHTML = array[82].rpm;       
document.querySelectorAll("td")[296].innerHTML = array[82].artigo;
document.querySelectorAll("td")[304].innerHTML = array[83].rpm;      
document.querySelectorAll("td")[305].innerHTML = array[83].artigo;

// <!-- <!--===== 7º grupo ==============================================-->	 -->

// <!-- ===== 8º grupo ============================================== -->

document.querySelectorAll("td")[262].innerHTML = array[84].rpm;     
document.querySelectorAll("td")[263].innerHTML = array[84].artigo;
document.querySelectorAll("td")[271].innerHTML = array[85].rpm;    
document.querySelectorAll("td")[272].innerHTML = array[85].artigo;
document.querySelectorAll("td")[280].innerHTML = array[86].rpm;     
document.querySelectorAll("td")[281].innerHTML = array[86].artigo;
document.querySelectorAll("td")[289].innerHTML = array[87].rpm;     
document.querySelectorAll("td")[290].innerHTML = array[87].artigo;
document.querySelectorAll("td")[298].innerHTML = array[88].rpm;     
document.querySelectorAll("td")[299].innerHTML = array[88].artigo;


//<!--===== 8º grupo ==============================================-->

	};

//SEGUE EXEMPLO DE CALLBACK==================================

function testAsync(){
    return new Promise((resolve,reject)=>{
        //here our function should be implemented 
        setTimeout(()=>{
             buscar();
            
        } , 500
        );
		
		  setTimeout(()=>{
             resolve();
            
        } , 7000
        );
		
	
    });
}

async function callerFun(){
    console.log("Caller");
    await testAsync();
	
    console.log("After waiting");
}

callerFun();
//============================================================

// function functionOne(_callback){
    // do some asynchronus work 
 // buscar();
	// log("testes")
    // _callback();
// }

// function functionTwo(){
    // do some asynchronus work 
	
    // functionOne(()=>{
        // console.log("I am a callback");
		// push();
    // });
	
// }

// functionTwo();
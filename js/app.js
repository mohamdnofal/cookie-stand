'user strict';

let workingHours = ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'];

//SEATTLE

const salesSeattle = {
  title : 'Seattle',
  max: 65 ,min: 23 ,avg : 6.3,
  randomCustomersHour : function (min,max,avg){
      let cookiesNum = [];
      let num = 0;

      for ( i=0; i<workingHours.length ;i++) {

         num = Math.floor((Math.random() * (max + min - 1) + min ) * avg) ;
        
         cookiesNum.push(num);
         }
         return cookiesNum;
   },
   init : function () {
    let seattleList = this.randomCustomersHour(this.min,this.max,this.avg);
    console.log(seattleList);
    creatList(seattleList, this.title);
   }
   
}

salesSeattle.init();

//TOKYO

const salesTokyo = {
  title : 'Tokyo',
  max: 24 ,min: 3 ,avg : 1.2,
  randomCustomersHour : function (min,max,avg){
      let cookiesNum = [];
      let num = 0;

      for ( i=0; i<workingHours.length ;i++) {

         num = Math.floor((Math.random() * (max + min - 1) + min ) * avg) ;
        
         cookiesNum.push(num);
         }
         return cookiesNum;
   },
   init : function () {
    let tokyoList = this.randomCustomersHour(this.min,this.max,this.avg);
    console.log(tokyoList);
    creatList(tokyoList, this.title);
   }
   
}

salesTokyo.init();

// DUBAI

const salesDubai = {
  title : 'Dubai',
  max: 38 ,min: 11 ,avg : 3.7,
  randomCustomersHour : function (min,max,avg){
      let cookiesNum = [];
      let num = 0;

      for ( i=0; i<workingHours.length ;i++) {

         num = Math.floor((Math.random() * (max + min - 1) + min ) * avg) ;
        
         cookiesNum.push(num);
         }
         return cookiesNum;
   },
   init : function () {
    let dubaiList = this.randomCustomersHour(this.min,this.max,this.avg);
    console.log(dubaiList);
    creatList(dubaiList, this.title);
   }
   
}

salesDubai.init();

//PARIS

const salesParis = {
  title : 'Paris',
  max: 38 ,min: 20 ,avg : 2.3,
  randomCustomersHour : function (min,max,avg){
      let cookiesNum = [];
      let num = 0;

      for ( i=0; i<workingHours.length ;i++) {

         num = Math.floor((Math.random() * (max + min - 1) + min ) * avg) ;
        
         cookiesNum.push(num);
         }
         return cookiesNum;
   },
   init : function () {
    let parisList = this.randomCustomersHour(this.min,this.max,this.avg);
    console.log(parisList);
    creatList(parisList, this.title);
   }
   
}

salesParis.init();

//LIMA

const salesLima = {
  title : 'Lima',
  max: 16 ,min: 2 ,avg : 4.6,
  randomCustomersHour : function (min,max,avg){
      let cookiesNum = [];
      let num = 0;

      for ( i=0; i<workingHours.length ;i++) {

         num = Math.floor((Math.random() * (max + min - 1) + min ) * avg) ;
        
         cookiesNum.push(num);
         }
         return cookiesNum;
   },
   init : function () {
    let limaList = this.randomCustomersHour(this.min,this.max,this.avg);
    console.log(limaList);
    creatList(limaList, this.title);
   }
   
}

salesLima.init();


// Render HTML list

function creatList(array, cityName) {
  const title = document.createElement('h2');
  title.innerText = cityName;
  document.body.appendChild(title);
  let ul = document.createElement('ul');

  let total = 0;
  

  for(i=0; i <= workingHours.length;i++){
      
      let li = document.createElement('li');
      if(i===workingHours.length){
        li.innerText = `total ${total} cookies`;
      }else{
        li.innerText = `${workingHours[i]}: ${array[i]} cookies`;
        total += array[i];
      }
      ul.appendChild(li);

	}
  document.body.appendChild(ul);
}


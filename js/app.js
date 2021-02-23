'user strict';

let workingHours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

function country(title) {
    this.title = title;
    this.workingHours = workingHours;

  }

country.prototype.getNum = function (min, max) {
    this.num=[];
    this.totalNum = 0;
  for (i = 0; i < this.workingHours.length; i++) {
        this.getNum = generateRandomNumber(min, max);
        this.num.push(this.getNum);
        this.totalNum += this.getNum;
    }
    this.num.push(this.totalNum);
}

country.prototype.render = function () {
    


    // parentElement.appendChild(articleElement);
    // document.body.appendChild(articleElement);
    let salesTable = document.getElementById('salesTable');
    
    if (salesTable) {
      this.tableElement=document.getElementById('salesTable');
      
    } else {

        this.parentElement = document.body;
        this.articleElement = document.createElement('article');
       
        this.tableElement = document.createElement('table');
        this.tableElement.setAttribute('id', 'salesTable');
        this.parentElement.appendChild(this.articleElement);
        this.articleElement.appendChild(this.tableElement);
        const trWorkingHours = document.createElement('tr');
        const thEmpty = document.createElement('th');
        thEmpty.textContent = '';
        trWorkingHours.appendChild(thEmpty);
        for (i = 0; i < this.workingHours.length; i++) {
            const cellElement = document.createElement('th');
            cellElement.textContent = this.workingHours[i];
            trWorkingHours.appendChild(cellElement);
        }
        this.tableElement.appendChild(trWorkingHours);
        const thTotal = document.createElement('th');
        thTotal.textContent = 'Daily Location Total';
        trWorkingHours.appendChild(thTotal);

    }

    

    const trCity = document.createElement('tr');
    const cellTitle = document.createElement('th');
    cellTitle.textContent = this.title;
    trCity.appendChild(cellTitle);

    for (i = 0; i < this.num.length; i++) {
     
            const cellElement = document.createElement('td');
        
        cellElement.textContent = this.num[i];
        trCity.appendChild(cellElement);
    }

    this.tableElement.appendChild(trCity);
    
    
    
}


const Seattle = new country('Seattle');
const Tokyo = new country('Tokyo');
const Dubai = new country('Dubai');
const Paris = new country('Paris');
const Lima = new country('Lima');

Seattle.getNum(65, 3);
Tokyo.getNum(24, 3);
Dubai.getNum(38, 11);
Paris.getNum(38, 20);
Lima.getNum(16, 2);

console.log(Tokyo);

Seattle.render();
Tokyo.render();
Dubai.render();
Paris.render();
Lima.render();
getTotal();

function generateRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function getTotal() {
    let tableElement = document.getElementById('salesTable');
    const trCity = document.createElement('tr');
    const cellTitle = document.createElement('th');
    cellTitle.textContent = 'Total';
    trCity.appendChild(cellTitle);
    for(i=0; i<=workingHours.length; i++){
      let totalPerHour =0;
      totalPerHour = Seattle.num[i]+Tokyo.num[i]+Dubai.num[i]+Paris.num[i]+Lima.num[i];
      const cellElement = document.createElement('td');
      cellElement.textContent = totalPerHour;
      trCity.appendChild(cellElement);

    }
    tableElement.appendChild(trCity);
}

    
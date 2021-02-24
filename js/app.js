'user strict';

let workingHours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

function country(title, maxNum, minNum, avgNum) {
    this.title = title;
    this.workingHours = workingHours;
    this.min = minNum;
    this.max = maxNum;
    this.avg = avgNum;

}
let totalArray = [];
country.prototype.getNum = function () {
    this.num = [];
    this.totalNum = 0;
    // totalArray=[];
    for (i = 0; i < this.workingHours.length; i++) {
        this.getNum = generateRandomNumber(this.min, this.max);
        this.num.push(this.getNum);
        this.totalNum += this.getNum;
        if (totalArray[i]===undefined) {
            totalArray[i] = 0;
        }
        totalArray[i] += this.getNum;
    }
    this.num.push(this.totalNum);
    if(totalArray[i]===undefined){
        totalArray[i]=0;
    }
    totalArray[i]+=this.totalNum;
}

country.prototype.getTotal = function (newCountry) {
    let tableElement = document.getElementById('salesTable');
    let allTotal = document.getElementById('allTotal')
    if(allTotal){
        allTotal.remove();
    }
    const trCity = document.createElement('tr');
    trCity.setAttribute('id','allTotal');
    const cellTitle = document.createElement('th');
    cellTitle.textContent = 'Total';
    trCity.appendChild(cellTitle);
    for (i = 0; i <= this.workingHours.length; i++) {
        let totalPerHour = 0;
        totalPerHour += totalArray[i];
        const cellElement = document.createElement('td');
        // cellElement.setAttribute('')
        cellElement.textContent = totalArray[i];
        trCity.appendChild(cellElement);

    }
    tableElement.appendChild(trCity);
}

country.prototype.render = function () {
    this.getNum();
    let salesTable = document.getElementById('salesTable');

    if (salesTable) {
        this.tableElement = document.getElementById('salesTable');
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
    this.getTotal(this.num);
}


const Seattle = new country('Seattle', 65, 3);
const Tokyo = new country('Tokyo', 24, 3);
const Dubai = new country('Dubai', 38, 11);
const Paris = new country('Paris', 38, 20);
const Lima = new country('Lima', 16, 2);

Seattle.render();
Tokyo.render();
Dubai.render();
Paris.render();
Lima.render();

function generateRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

const formElement = document.getElementById('addNewCity');

formElement.addEventListener('submit', function (event) {
    event.preventDefault();
    const newCity = event.target.countryName.value;
    const maxNum = event.target.maxNumer.value;
     const minNum = event.target.minNumer.value;
    const avgNum = event.target.avgNumer.value;
     const newCountry = new country(newCity, maxNum, minNum, avgNum);
    formElement.reset();
  newCountry.render();
});
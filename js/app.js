'use strict'

let workingHours = ['6:00 AM', '7:00 AM', '8:00 AM', '9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM', '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM', '6:00 PM', '7:00 PM', ' 8:00 PM '];
function Branch(branchName, minCustomer, maxCustomer, avgCookieSale) {
    this.branchName = branchName;
    this.minCustomer = minCustomer;
    this.maxCustomer = maxCustomer;
    this.avgCookieSale = avgCookieSale;
    this.totalSum = 0;
    this.PurchasedPerDay = [];
    this.customerPerHourGenerator = function (minCustomer, maxCustomer) {
        let generator = Math.floor(Math.random() * (maxCustomer - minCustomer + 1) + minCustomer);
        return generator;
    };
    this.averagePurchased = function (customerPerHourGenerator, avgCookieSale) {
        for (let i = 0; i < workingHours.length; i++) {
            let simulatedAmounts = parseInt(customerPerHourGenerator(this.minCustomer, this.maxCustomer) * avgCookieSale);
            this.PurchasedPerDay.push(simulatedAmounts);
            this.totalSum = this.totalSum + simulatedAmounts;
        }
    };
    this.averagePurchased(this.customerPerHourGenerator, this.avgCookieSale);

};
// ----------------------------------------------------- Seattle Branch -------------------------------------------------------------
let seattle = new Branch('Seattle', 23, 65, 6.3);
// ----------------------------------------------------- Tokyo Branch -------------------------------------------------------------
let tokyo = new Branch('Tokyo', 3, 24, 1.2);
// ----------------------------------------------------- Dubai Branch -------------------------------------------------------------
let dubai = new Branch('Dubai', 11, 38, 3.7);
// ----------------------------------------------------- Paris Branch -------------------------------------------------------------
let paris = new Branch('Paris', 20, 38, 2.3);
// ----------------------------------------------------- Lima Branch -------------------------------------------------------------
let lima = new Branch('Lima', 2, 16, 4.6);

let branchsName = [seattle, tokyo, dubai, paris, lima];



//------------------------------ Making table inside the main by ID from the main  ------------------------------

let header = document.getElementById('table');
let table = document.createElement('table');
header.appendChild(table);
//------------------------------ making a separate header Fun. & footer Fun. for the table to apply separation of concerns ------------------------------
let headerFun = function () {
    let thead = document.createElement('thead');
    let thEmpty = document.createElement('th');
    thead.appendChild(thEmpty);
    table.appendChild(thead);
    thEmpty.innerText = 'Hour/Branch';
    for (let i = 0; i < workingHours.length; i++) {
        let th = document.createElement('th')
        thead.appendChild(th)
        th.innerText = workingHours[i];

    };
    let thTotal = document.createElement('th');
    thead.appendChild(thTotal);
    thTotal.innerText = 'Daily Location Total:'

};

let footerFun = function () {
    let tfooter = document.createElement('tfoot');
    let tdTotals = document.createElement('td');
    tfooter.appendChild(tdTotals);
    tdTotals.innerText = 'Totals:';
    let dailyLocationsTotal = 0;
    for (let i = 0; i < workingHours.length; i++) {
        let hourlyTotal = 0;
        for (let x = 0; x < branchsName.length; x++) {
            hourlyTotal += branchsName[x].PurchasedPerDay[i];
            dailyLocationsTotal += hourlyTotal;
        }
        let td = document.createElement('td');
        tfooter.appendChild(td);
        td.innerText = hourlyTotal;
    }
    let totals = document.createElement('td');
    tfooter.appendChild(totals);
    totals.innerText = dailyLocationsTotal;
    table.appendChild(tfooter);
};
//------------------------------ Now moving to make the render Fun. ------------------------------

Branch.prototype.render = function () {
    let tr = document.createElement('tr');
    let td = document.createElement('td');
    tr.appendChild(td);
    td.innerText = this.branchName;
    for (let i = 0; i < workingHours.length; i++) {
        let td = document.createElement('td');
        tr.appendChild(td);
        td.innerText = this.PurchasedPerDay[i];
    };
    let totalTd = document.createElement('td');
    tr.appendChild(totalTd);
    totalTd.innerText = this.totalSum;
    table.appendChild(tr);
}

// ------------------------------  Adding NEW branchs   ------------------------------

let form = document.getElementById('form');
form.addEventListener('submit', newBranch);
function newBranch(event) {
    event.preventDefault();
    let branchName = event.target.branchName.value;
    console.log(branchName);
    let maxCustomer = event.target.maxCustomer.value;
    let minCustomer = event.target.minCustomer.value;
    let avgCookieSale = event.target.avgCookieSale.value;
    let newBranch = new Branch(branchName, minCustomer, maxCustomer, avgCookieSale);
    console.log(newBranch);
    branchsName.push(newBranch);
    newBranch.render();
}

// ------------------------------  Calling the FULL table   ------------------------------

headerFun();
for (let i = 0; i < branchsName.length; i++) {
    branchsName[i].render();
};
footerFun();


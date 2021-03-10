'use strict'
let workingHours = ['6:00 AM', '7:00 AM', '8:00 AM', '9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM', '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM', '6:00 PM', '7:00 PM', ' 8:00 PM '];
let branchsName = ['Seattle', 'Tokyo', 'Dubai', 'Paris', 'Lima'];
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

    // this.liCreator();
    // this.headerFun();
    // this.footerFun();
};
// ----------------------------------------------------- Seattle Branch -------------------------------------------------------------
let seattle = new Branch('seattle', 23, 65, 6.3);
// ----------------------------------------------------- Tokyo Branch -------------------------------------------------------------
let tokyo = new Branch('tokyo', 3, 24, 1.2);
// ----------------------------------------------------- Dubai Branch -------------------------------------------------------------
let dubai = new Branch('dubai', 11, 38, 3.7);
// ----------------------------------------------------- Paris Branch -------------------------------------------------------------
let paris = new Branch('paris', 20, 38, 2.3);
// ----------------------------------------------------- Lima Branch -------------------------------------------------------------
let lima = new Branch('lima', 2, 16, 4.6);

// Making table inside the main by ID inside the maen
let header = document.getElementById('table');
let table = document.createElement('table');
header.appendChild(table);
// making a separate header Fun. & footer Fun. for the table to apply separation of concerns 
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
    let trTotals = document.createElement('tr');
    let tdTotals = document.createElement('td');
    trTotals.appendChild(tdTotals);
    tfooter.appendChild(trTotals);
    table.appendChild(tfooter);
    tdTotals.innerText = 'Totals:';
    let dailyLocationTotal = 0;
    for (let i = 0; i < workingHours.length + 1; i++) {
        let hourlyTotal = 0;
        for (let x = 0; x < branchsName.length; x++) {
            hourlyTotal += branchsName[x];
            dailyLocationTotal += hourlyTotal;
        }
        let tfooter = document.createElement('tfoot');
        let tr = document.createElement('tr');
        let td = document.createElement('td');
        tr.appendChild(tfooter);
        tr.appendChild(td);
        td.innerText = hourlyTotal[i];
    }
};
// Now moving to make the render Fun.

Branch.prototype.render = function () {
    for (let i = 0; i < branchsName.length; i++) {
        let th = document.createElement('th')
        let tr = document.createElement('tr');
        let td = document.createElement('td');
        th.appendChild(tr);
        tr.appendChild(td);
        table.appendChild(th);
        td.innerText = branchsName[i];
    for (let x = 0; x < this.PurchasedPerDay.length; x++) {
            let tr = document.createElement('tr');
            let td = document.createElement('td');
            table.appendChild(tr);
            tr.appendChild(td);
            td.innerText = this.PurchasedPerDay[x];
    };
    let totalPerBranchTh=document.createElement('th');
    let totalTd=document.createElement('td');
    totalPerBranchTh.appendChild(totalTd);
    table.appendChild(totalPerBranchTh);
    totalTd.innerText=this.totalSum;
    
}
}

// headerFun();
// footerFun();
// seattle.render();

    headerFun();
    for (let i = 0; i < branchsName.length; i++) {
        branchsName[i].re
    };
    footerFun();    




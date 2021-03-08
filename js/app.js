'use strict'

function Branch(branchName, minCustomer, maxCustomer, avgCookieSale) {
    this.branchName = branchName;
    this.minCustomer = minCustomer;
    this.maxCustomer = maxCustomer;
    this.avgCookieSale = avgCookieSale;
    this.totalSum = 0;
    this.workingHours = ['6 AM', '7 AM', '8 AM', '9 AM', '10 AM', '11 AM', '12 PM', '1 PM', '2 PM', '3 PM', '4 PM', '5 PM', '6 PM', '7 PM', '8 PM'];
    this.PurchasedPerDay = [];
    this.customerPerHourGenerator = function (minCustomer, maxCustomer) {
        let generator = Math.floor(Math.random() * (maxCustomer - minCustomer + 1) + minCustomer);
        return generator;
    };
    this.averagePurchased = function (customerPerHourGenerator, avgCookieSale) {
        for (let i = 0; i < this.workingHours.length; i++) {
            let simulatedAmounts = parseInt(customerPerHourGenerator(this.minCustomer, this.maxCustomer) * avgCookieSale);
            this.PurchasedPerDay.push(simulatedAmounts);
            this.totalSum = this.totalSum + simulatedAmounts;
        }
    };
    this.averagePurchased(this.customerPerHourGenerator, this.avgCookieSale);
    this.liCreator = function (array) {
        let liId = document.getElementById(this.branchName);
        for (let i = 0; i < this.workingHours.length + 1; i++) {
            if (i < this.workingHours.length) {
                let liText = document.createElement('li');
                liText.innerText = this.workingHours[i] + ' : ' + this.PurchasedPerDay[i] + ' Cookies. ';
                liId.appendChild(liText);
                console.log()
            } else if (i < this.workingHours.length + 1) {
                let liText = document.createElement('li');
                liText.innerText = 'Total Sum' + ' : ' + this.totalSum + ' Cookies.';
                liId.appendChild(liText);
            }
        };
    }
    this.liCreator();
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

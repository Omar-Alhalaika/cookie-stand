'use strict'

let seattle={
    minCustomer: 23,
    maxCustomer: 65,
    avgCookieSale: 6.3,
    workingHours:['6 AM','7 AM','8 AM','9 AM','10 AM','11 AM','12 PM','1 PM','2 PM','3 PM','4 PM','5 PM','6 PM','7 PM','8 PM'],
    seattlePurchasedPerDay:[],
    customerPerHourGenerator:function (minCustomer,maxCustomer){
        let generator=Math.floor(Math.random() * (this.maxCustomer -this.minCustomer + 1) + this.minCustomer);
              return generator;
        },
    averagePurchased:function (customerPerHourGenerator,avgCookieSale) {
        for (let i = 0; i < this.workingHours.length; i++) {
            let simulatedAmounts=parseInt(this.customerPerHourGenerator()*this.avgCookieSale);
            this.seattlePurchasedPerDay.push(simulatedAmounts);            
        }
    },
}
seattle.averagePurchased();
let liS=document.getElementById('Seattle')
function seattleLi(array) {
    for (let i = 0; i < seattle.workingHours.length+1; i++) {
        if (i < seattle.workingHours.length) {
            let liText=document.createElement('li');
            liText.innerText=seattle.workingHours[i]+' : ' +seattle.seattlePurchasedPerDay[i];
            liS.appendChild(liText);
            let sum=0;
            let totalSum=sum+seattle.seattlePurchasedPerDay[i];
        } else if (i < seattle.workingHours.length+1) {
            let liText=document.createElement('li');
            liText.innerText='Total Sum'+' : ' + 'totalSum';
            liS.appendChild(liText);
        } 
    };
}
seattleLi();
// -----------------------------------------------------Tokyo-------------------------------------------------------------
// -----------------------------------------------------Tokyo-------------------------------------------------------------

// console.log(seattle.seattlePurchasedPerDay);
// console.log(seattle.seattlePurchasedPerDay);
// console.log(seattle.customerPerHourGenerator());

let tokyo={
    minCustomer: 23,
    maxCustomer: 65,
    avgCookieSale: 6.3,
    workingHours:['6 AM','7 AM','8 AM','9 AM','10 AM','11 AM','12 PM','1 PM','2 PM','3 PM','4 PM','5 PM','6 PM','7 PM','8 PM'],
    tokyoPurchasedPerDay:[],
    customerPerHourGenerator:function (minCustomer,maxCustomer){
        let generator=Math.floor(Math.random() * (this.maxCustomer -this.minCustomer + 1) + this.minCustomer);
              return generator;
        },
    averagePurchased:function (customerPerHourGenerator,avgCookieSale) {
        for (let i = 0; i < this.workingHours.length; i++) {
            let simulatedAmounts=parseInt(this.customerPerHourGenerator()*this.avgCookieSale);
            this.tokyoPurchasedPerDay.push(simulatedAmounts);            
        }
    },
}
tokyo.averagePurchased();
let liT=document.getElementById('tokyo')
function tokyoLi(array) {
    for (let i = 0; i < tokyo.workingHours.length+1; i++) {
        if (i < tokyo.workingHours.length) {
            let liText=document.createElement('li');
            liText.innerText=tokyo.workingHours[i]+' : ' +tokyo.tokyoPurchasedPerDay[i];
            liT.appendChild(liText);
            let sum=0;
            let totalSum=sum+tokyo.tokyoPurchasedPerDay[i];
        } else if (i < tokyo.workingHours.length+1) {
            let liText=document.createElement('li');
            liText.innerText='Total Sum'+' : ' + 'totalSum';
            liT.appendChild(liText);
        } 
    };
}
tokyoLi();

// -----------------------------------------------------Dobai-------------------------------------------------------------
// -----------------------------------------------------Dobai-------------------------------------------------------------

let dubai={
    minCustomer: 23,
    maxCustomer: 65,
    avgCookieSale: 6.3,
    workingHours:['6 AM','7 AM','8 AM','9 AM','10 AM','11 AM','12 PM','1 PM','2 PM','3 PM','4 PM','5 PM','6 PM','7 PM','8 PM'],
    dubaiPurchasedPerDay:[],
    customerPerHourGenerator:function (minCustomer,maxCustomer){
        let generator=Math.floor(Math.random() * (this.maxCustomer -this.minCustomer + 1) + this.minCustomer);
              return generator;
        },
    averagePurchased:function (customerPerHourGenerator,avgCookieSale) {
        for (let i = 0; i < this.workingHours.length; i++) {
            let simulatedAmounts=parseInt(this.customerPerHourGenerator()*this.avgCookieSale);
            this.dubaiPurchasedPerDay.push(simulatedAmounts);            
        }
    },
}
dubai.averagePurchased();
let liD=document.getElementById('dubai')
function dubaiLi(array) {
    for (let i = 0; i < dubai.workingHours.length+1; i++) {
        if (i < dubai.workingHours.length) {
            let liText=document.createElement('li');
            liText.innerText=dubai.workingHours[i]+' : ' +dubai.dubaiPurchasedPerDay[i];
            liD.appendChild(liText);
            let sum=0;
            let totalSum=sum+dubai.dubaiPurchasedPerDay[i];
        } else if (i < dubai.workingHours.length+1) {
            let liText=document.createElement('li');
            liText.innerText='Total Sum'+' : ' + 'totalSum';
            liD.appendChild(liText);
        } 
    };
}
dubaiLi();

// -----------------------------------------------------Paris-------------------------------------------------------------
// -----------------------------------------------------Paris-------------------------------------------------------------

let paris={
    minCustomer: 23,
    maxCustomer: 65,
    avgCookieSale: 6.3,
    workingHours:['6 AM','7 AM','8 AM','9 AM','10 AM','11 AM','12 PM','1 PM','2 PM','3 PM','4 PM','5 PM','6 PM','7 PM','8 PM'],
    parisPurchasedPerDay:[],
    customerPerHourGenerator:function (minCustomer,maxCustomer){
        let generator=Math.floor(Math.random() * (this.maxCustomer -this.minCustomer + 1) + this.minCustomer);
              return generator;
        },
    averagePurchased:function (customerPerHourGenerator,avgCookieSale) {
        for (let i = 0; i < this.workingHours.length; i++) {
            let simulatedAmounts=parseInt(this.customerPerHourGenerator()*this.avgCookieSale);
            this.parisPurchasedPerDay.push(simulatedAmounts);            
        }
    },
}
paris.averagePurchased();
let liP=document.getElementById('paris')
function parisLi(array) {
    for (let i = 0; i < paris.workingHours.length+1; i++) {
        if (i < paris.workingHours.length) {
            let liText=document.createElement('li');
            liText.innerText=paris.workingHours[i]+' : ' +paris.parisPurchasedPerDay[i];
            liP.appendChild(liText);
            let sum=0;
            let totalSum=sum+paris.parisPurchasedPerDay[i];
        } else if (i < paris.workingHours.length+1) {
            let liText=document.createElement('li');
            liText.innerText='Total Sum'+' : ' + 'totalSum';
            liP.appendChild(liText);
        } 
    };
}
parisLi();

// -----------------------------------------------------Lima-------------------------------------------------------------
// -----------------------------------------------------Lima-------------------------------------------------------------

let lima={
    minCustomer: 23,
    maxCustomer: 65,
    avgCookieSale: 6.3,
    workingHours:['6 AM','7 AM','8 AM','9 AM','10 AM','11 AM','12 PM','1 PM','2 PM','3 PM','4 PM','5 PM','6 PM','7 PM','8 PM'],
    limaPurchasedPerDay:[],
    customerPerHourGenerator:function (minCustomer,maxCustomer){
        let generator=Math.floor(Math.random() * (this.maxCustomer -this.minCustomer + 1) + this.minCustomer);
              return generator;
        },
    averagePurchased:function (customerPerHourGenerator,avgCookieSale) {
        for (let i = 0; i < this.workingHours.length; i++) {
            let simulatedAmounts=parseInt(this.customerPerHourGenerator()*this.avgCookieSale);
            this.limaPurchasedPerDay.push(simulatedAmounts);            
        }
    },
}
lima.averagePurchased();
let liL=document.getElementById('lima')
function limaLi(array) {
    for (let i = 0; i < lima.workingHours.length+1; i++) {
        if (i < lima.workingHours.length) {
            let liText=document.createElement('li');
            liText.innerText=lima.workingHours[i]+' : ' +lima.limaPurchasedPerDay[i];
            liL.appendChild(liText);
            let sum=0;
            let totalSum=sum+lima.limaPurchasedPerDay[i];
        } else if (i < lima.workingHours.length+1) {
            let liText=document.createElement('li');
            liText.innerText='Total Sum'+' : ' + 'totalSum';
            liL.appendChild(liText);
        } 
    };
}
limaLi();

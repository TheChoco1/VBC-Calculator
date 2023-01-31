// Calculators

export const calcAttendance = (att) => {
    if (att*1.25>19008) return 19008;
    else return att*1.25;
};

export const maxTicketProfit = (ULST, ULMT, MLST, MLMT, LLST, LLMT) => {

    // Ticket Profit var declarations
    let ULSP = 0;
    let ULMP = 0;
    let MLSP = 0;
    let MLMP = 0;
    let LLSP = 0;
    let LLMP = 0;
    
    // Each section profit
    ULSP = ULST * 3168;
    ULMP = ULMT * 3168;
    MLSP = MLST * 3168;
    MLMP = MLMT * 3168;
    LLSP = LLST * 3168;
    LLMP = LLMT * 3168;

    return (
        ULSP + ULMP + MLSP + MLMP + LLSP + LLMP
    );
}

const maxConcessionsProfit = (att, amountOfStands) => {
    
    // Concessions Profit var declarations
    let popUnit = att * .4;
    let iceUnit = att * .5;
    let pretzelsUnit = att * .2;
    let bottledUnit = att * .4;
    let fountainUnit = att * .6;
    let chipsUnit = att * .2;

    let popPrice = 13.0;
    let icePrice = 13.5;
    let pretzelsPrice = 13;
    let bottledPrice = 13.5;
    let fountainPrice = 13.5;
    let chipsPrice = 13;

    let popPro = 0;
    let icePro = 0;
    let prePro = 0;
    let botPro = 0;
    let fouPro = 0;
    let chipPro = 0;
    let conStandCost = 0;

    //profits
    popPro = ((popUnit) * popPrice) - ((popUnit) * .86);
    icePro = ((iceUnit) * icePrice) - ((iceUnit) * .95);
    prePro = ((pretzelsUnit) * pretzelsPrice) - ((pretzelsUnit) * .83);
    botPro = ((bottledUnit) * bottledPrice) - ((bottledUnit) * .95);
    fouPro = ((fountainUnit) * fountainPrice) - ((fountainUnit) * .72);
    chipPro = ((chipsUnit) * chipsPrice) - ((chipsUnit) * .69);

    // stand costs (NEED TO ADD STAFF OF STAND COSTS)
    conStandCost = 3100*amountOfStands;

    return (
        popPro + icePro + prePro + botPro + fouPro + chipPro - conStandCost
    );
}

const calcStaff = (att) => {

    let ushers = att/400;
    let sec = att/300;
    let tt = att/1350;
    let pc;
    let pa;
    if (att >= 8250) {
        pc = 16;
        pa = 40;
    } else {
        pc = att/525;
        pa = att/200;
    }

    return (
        'Attendence: ' + att + 
        '; Ushers: ' + ushers + 
        '; Security: ' + sec + 
        '; Ticket Takers: ' + tt +
        '; Parking Cashiers:' + pc +
        '; Parking Assistants: ' + pa
    );
}

const mediaCosts = (SM, np, radio, tv) => SM + np + radio + tv;

const playerSalary = (fullSalary) => fullSalary/16;

const totalGameProfit = () => maxConcessionsProfit(calcAttendance(5874), 7) + maxTicketProfit(40.99, 50.99, 60.99, 65.99, 75.99, 84.99) - mediaCosts(80000, 81000) - playerSalary(2800088) - 400000 + 250000 - 40000;
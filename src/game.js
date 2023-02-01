// Calculators

const calcAttendance = (att) => {
    if (att*1.25>19008) return 19008;
    else return att*1.25;
};

const maxTicketProfit = (ULST, ULMT, MLST, MLMT, LLST, LLMT) => {

    // Ticket Profit var declarations
    let ULSP = ULST * 3168;
    let ULMP = ULMT * 3168;
    let MLSP = MLST * 3168;
    let MLMP = MLMT * 3168;
    let LLSP = LLST * 3168;
    let LLMP = LLMT * 3168;

    return (
        ULSP + ULMP + MLSP + MLMP + LLSP + LLMP
    );
}

const maxConcessionsProfit = (att, amountOfStands, employeePerStand) => {
    
    // unit calc
    let popUnit = (att * .4)/.5;
    let iceUnit = (att * .5)/.5;
    let pretzelsUnit = (att * .2)/.5;
    let bottledUnit = (att * .4)/.5;
    let fountainUnit = (att * .6)/.5;
    let chipsUnit = (att * .2)/.5;

    // pricing calc
    let popPrice = 80000/(popUnit);
    let icePrice = 100000/(iceUnit);
    let pretzelsPrice = 40000/(pretzelsUnit);
    let bottledPrice = 80000/(bottledUnit);
    let fountainPrice = 110000/(fountainUnit);
    let chipsPrice = 40000/(chipsUnit);

    // profit calc
    let popPro = ((popUnit) * popPrice) - ((popUnit) * .86);
    let icePro = ((iceUnit) * icePrice) - ((iceUnit) * .95);
    let prePro = ((pretzelsUnit) * pretzelsPrice) - ((pretzelsUnit) * .83);
    let botPro = ((bottledUnit) * bottledPrice) - ((bottledUnit) * .95);
    let fouPro = ((fountainUnit) * fountainPrice) - ((fountainUnit) * .72);
    let chipPro = ((chipsUnit) * chipsPrice) - ((chipsUnit) * .69);

    // staff costs calc
    let conStandCost = 3300*amountOfStands;
    let conStaffCost = (employeePerStand*amountOfStands)*1524.60714;

    return (
        // adding together profits of each indiv and subtracting stand costs
        popPro + icePro + prePro + botPro + fouPro + chipPro - conStandCost - conStaffCost
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

export { calcAttendance, maxTicketProfit, maxConcessionsProfit, calcStaff, mediaCosts, playerSalary, totalGameProfit };
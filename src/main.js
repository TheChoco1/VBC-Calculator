import { calcAttendance, maxTicketProfit, maxConcessionsProfit, calcStaff, mediaCosts, playerSalary, totalGameProfit } from "./game.js";

let att = calcAttendance(20000)

// game calculations
console.log(`Attendance: ${att}`);
console.log(`Max Ticket profit: ${Math.floor(maxTicketProfit(40.99, 55.99, 50.99, 75.99, 70.99, 87.99))}`);
console.log(`Max Conession profit: ${Math.floor(maxConcessionsProfit(att, 7, 4))}`);
console.log(`Salary: ${playerSalary(2800880)}`);

import { calcAttendance, maxTicketProfit, maxConcessionsProfit, calcStaff, mediaCosts, playerSalary } from "./game.js";

let att = calcAttendance(20000)

// game calculations
console.log(`Attendance -> ${att}`);
console.log(`Max Ticket profit -> ${Math.floor(maxTicketProfit(40.99, 55.99, 50.99, 75.99, 70.99, 87.99))}`);
console.log(`Max Conession profit -> ${Math.floor(maxConcessionsProfit(att, 7, 4))}`);
console.log(`Staffing -> ${calcStaff(att)}`);
console.log(`Media Costs: ${mediaCosts(20000, 0, 55000, 50000)}`)
console.log(`Salary -> ${playerSalary(2800880)}`);
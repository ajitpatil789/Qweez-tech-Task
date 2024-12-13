var month  = parseInt(prompt("Enter case number"));
let MonthName;
switch (month) {
    case 1:
        MonthName = "Jan";
      break;
    case 2:
        MonthName = "Feb";
      break;
    case 3:
        MonthName = "March";
      break;
    case 4:
        MonthName = "April";
      break;
    case 5:
        MonthName = "May";
      break;
    case 6:
        MonthName = "June";
      break;
    case 7:
        MonthName = "July";
      break;
    case 8:
        MonthName = "August";
      break;
    case 9:
        MonthName = "September";
      break;
    case 10:
        MonthName = "Octomber";
      break;
    case 11:
        MonthName = "November";
      break;
    case 12:
        MonthName = "December";
      break;
    default:
        MonthName = "Invalid Month number";
  }
  
  console.log(MonthName," 2024");
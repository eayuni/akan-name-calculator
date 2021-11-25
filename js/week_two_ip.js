/*Day of the week (d) = ( ( (CC/4) -2*CC-1) + ((5*YY/4) ) + ((26*(MM+1)/10)) + DD ) mod 7
where;
CC - is the century digits. For example 1989 has CC = 19
YY - is the Year digits (1989 has YY = 89)
MM -  is the Month
DD - is the Day of the month 
mod - is the modulus function ( % )*/

var maleNames = ["Kwame","Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi"];
var femaleNames = ["Ama","Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua"];

//Calculate yy values
function calculateYear(dob) {

    var dobTostring = dob.toString().split('').slice(2, 4);
    var yy = dobTostring.toString().replace(",", "");
    yy = parseInt(yy);
    return yy;
}
//calculate century digits
function calculateCenturyDigits(dob) {
    var dobTostring = dob.toString().split('').slice(0, 2);
    var cc = dobTostring.toString().replace(",", "");
    cc = parseInt(cc);
    return cc;
}

//Calculate day of the week value
function calculateDay(dob, mm, dd) {
    var yy = calculateYear(dob.value);
    var cc = calculateCenturyDigits(dob.value);
    console.log("YY" + yy + "CC " + cc + " MM" + mm.value + "DD" + dd.value);
    c = parseInt((cc / 4) - 2 * cc - 1);
    console.log(c);
    y = parseInt(5 * yy / 4);
    console.log(y);
    m = parseInt(26 * (mm.value + 1) / 10);
    console.log(m);
    d = parseInt(dd.value);
    console.log(d);
    var h = c + y + m + d;
    var dayofweek = (c + y + m + d) % 7;

    console.log("mod " + h);
    var day = parseInt(dayofweek);
    console.log("day: "+day);

    return day;

}
// Return the Akan name
function calculateName(dob, mm, gender, day) {
    if (dob.value == "" || mm.value == "" || gender.value == "" || day.value == "") {
        return alert("Enter the required details");
    }
    if (mm.value <= 0 || mm.value > 12) {
        return alert("Enter month value between 1 and 12");
    }
    if (day.value <= 0 || day.value > 31) {
        return alert("Enter day value between 1 and 31")
    }
    var d = calculateDay(dob, mm, day);
    console.log("d" + d);
    console.log("d" + gender.value);
    var name = "";
    if (gender.value == "male") {
        name = maleNames[d];
    }
    else if (gender.value = "female") {
        console.log("here:" + femaleNames[d]);
        name = femaleNames[d];
    }
    else {
        name = "Not Found";
    }
    alert("Your Akan name is " + name);
    console.log(name);
    return name;
}
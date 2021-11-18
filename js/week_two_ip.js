/*Day of the week (d) = ( ( (CC/4) -2*CC-1) + ((5*YY/4) ) + ((26*(MM+1)/10)) + DD ) mod 7
where;
CC - is the century digits. For example 1989 has CC = 19
YY - is the Year digits (1989 has YY = 89)
MM -  is the Month
DD - is the Day of the month 
mod - is the modulus function ( % )*/

var maleNames = ["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw","Kofi","Kwame"];
var femaleNames =["Akosua","Adwoa","Abenaa","Akua","Yaa","Afua","Ama"];

//Calculate yy values
function calculateYear(dob) {

    var dobTostring = dob.toString().split('').slice(2, 4);
    var yy = dobTostring.toString().replace(",", "");
    return yy;
}
//calculate century digits
function calculateCenturyDigits(dob) {
    var dobTostring = dob.toString().split('').slice(0, 2);
    var cc = dobTostring.toString().replace(",", "");
    return cc;
}

//Calculate d value
function calculateDay(dob, mm,dd) {
    var yy = calculateYear(dob.value);
    var cc = calculateCenturyDigits(dob.value); 
    console.log("YY"+yy+"CC "+cc+" MM"+ mm + "DD"+dd);
    c = (cc/4) - 2*cc-1;
    y = 5*yy/4;
    m = 26*(mm.value+1)/10;
    d = dd.value;

    var dayofweek = (c+y+m+d)%7;
    //var d = ( firstPart(cc) + secondPart(yy) +  thirdPart(mm.value) + dd.value ) % 7 ;
    //var d =  ( ( (cc/4) -2*cc-1) + ((5*yy/4) ) + ((26*(mm.value+1)/10)) + dd.value ) % 7;
    
    console.log("mod "+dayofweek);
    var day= parseInt(dayofweek);
    console.log(dayofweek);

    return day;

}

//broken down functio to calculate d into 3 parts as below:
function firstPart(cc){
    var firstValue = ((cc/4) - 2*cc - 1);
    console.log(firstValue);
    return firstValue;
}

function secondPart(yy){
    var secondValue = ((5*yy/4));
    console.log(secondValue);
    return secondValue;
}

function thirdPart(mm){
    var thirdValue = ((26*(mm+1)/10));
    console.log(thirdValue);
    return thirdValue;
}

// Return the Akan name
function calculateName(dob,mm,gender,day) {
    if(mm.value<=0 || mm.value > 12){
        return alert("Enter month value between 1 and 12");
    }
    if(day.value <= 0 || day.value >31){
        return alert("Enter day value between 1 and 31")
    }
    var d = calculateDay(dob,mm,day);
    console.log("d"+ d);
    console.log("d"+ gender.value);
    var name="";
    if(gender.value == "male"){
        name = maleNames[d];
    }
    else if(gender.value ="female"){
        console.log("here:" +femaleNames[d]);
        name = femaleNames[d];
    }
    else{
        name ="Not Found";
    }
    alert("Your Akan name is "+name);
    console.log(name);
    return name;
}
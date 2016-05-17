function getRomanNumeral(num) {
    var str = "";
    var romanLetters = new Array('M', 'D', 'C', 'L', 'X', 'V', 'I');
    var romanValues = new Array(1000, 500, 100, 50, 10, 5, 1);


    //Check boundries
    if (num < 1 || num > 3999) {
        alert("Sorry the number is not within a range to be represented by a roman numeral");
    }
    else {
        for (var i = 0; i < romanValues.length; i++) {

            while (num / romanValues[i] >= 1) {
                str += romanLetters[i];
                num -= romanValues[i];
            }
        }

    }
    //simplify format using -1 rule.  Special Cases IV IX XL XC CD DM
    str = str.replace("DCCCC", "CM"); //400
    str = str.replace("CCCC", "CD"); //400
    str = str.replace("LXXXX", "XC"); //90
    str = str.replace("XXXX", "XL"); //40
    str = str.replace("VIIII", "IX"); //9
    str = str.replace("IIII", "IV"); //5
    return str;
}

document.write(getRomanNumeral(3999));

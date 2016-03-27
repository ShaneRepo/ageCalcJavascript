function calcAge() {
    var today = new Date();

    var userYear = document.getElementById("year").value;
    var outputYear = document.getElementById("years");
    var userMonth = document.getElementById("month").value;
    var outputMonth = document.getElementById("months");
    var userDay = document.getElementById("day").value;
    var outputDay = document.getElementById("days");
    var outputHours = document.getElementById("hours");
    var outputMinutes = document.getElementById("minutes");
    var userBDAY = new Date(userYear,userMonth,userDay);
    var monthCalc = userBDAY.getMonth() + 1;


    if (userBDAY.getMonth() > today.getMonth()){
        var yearCalc = (today.getFullYear() - userBDAY.getFullYear()) - 1;
        outputYear.value = (today.getFullYear() - userBDAY.getFullYear()) - 1;
        outputMonth.value = (yearCalc * 12) + monthCalc;
    } else {
        var yearCalc2 = (today.getFullYear() - userBDAY.getFullYear());
        outputYear.value = today.getFullYear() - userBDAY.getFullYear();
        outputMonth.value = (yearCalc2 * 12) - monthCalc;
    }



}













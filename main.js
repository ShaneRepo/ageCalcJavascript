function calcAge() {
    var today = new Date();

    var userYear = document.getElementById("year").value;
    var outputYear = document.getElementById("years");
    var userMonth = document.getElementById("month").value;
    var outputMonth = document.getElementById("months");
    var userDay = document.getElementById("day").value;
    var outputDay = document.getElementById("days");

    var userBDAY = new Date(userYear,userMonth,userDay);



    outputYear.value = today.getFullYear() - userYear;

}













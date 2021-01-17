function showTime(){
    let H = document.getElementById("hours");
    let M = document.getElementById("minutes");
    let S = document.getElementById("seconds");

    let date = new Date();
    let h = date.getHours();
    let m = date.getMinutes();
    let s = date.getSeconds();

    partTime(h, H);
    partTime(m, M);
    partTime(s, S);

    setTimeout(showTime, 1000);
}

function partTime(part, showObject)
{
    showObject.innerHTML = (part < 10) ? "0" + part : part;
}
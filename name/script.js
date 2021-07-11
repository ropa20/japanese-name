var year;
var month;
var day;
const generate= document.getElementById("generate");

const resultDisplay= document.getElementById("result_display");

const r=[];
const gyear=(year)=>
{
    if(year=== 1990)
    {
        r.push("co")
        gmonth(month)
    }
    
    if(year=== 1991)
    {
        r.push("do")
        gmonth(month)
    }
    if(year=== 1992)
    {
        r.push("go") 
        gmonth(month)
    }
    if(year=== 1993)
    {
        r.push("ho")
        gmonth(month)
    }
    if(year=== 1994)
    {
        r.push("no")
        gmonth(month)
    }
    if(year=== 1995)
    {
        r.push("mo")
        gmonth(month)
    }
    if(year=== 1996)
    {
        r.push("po")
        gmonth(month)
    }
    if(year=== 1997)
    {
        r.push("ro")
        gmonth(month)
    }
    if(year=== 1998)
    {
        r.push("ko")
        gmonth(month)
    }
    if(year=== 1999)
    {
        r.push("zo")
        gmonth(month)
    }
    if(year=== 2000)
    {
        r.push("fo")
        gmonth(month)
    } 
}
const gmonth=(month)=>
{
    switch(month)
        {
            case 01 : r.push("bo")
                        gday(day);
                        break;
            case 02 : r.push("co")
                        gday(day);
                        break;
            case 03 : r.push("ni")
                        gday(day);
                        break;
            case 04 : r.push("mi")
                        gday(day);
                        break;
            case 05 : r.push("fi")
                        gday(day);  
                        break;
            case 06 : r.push("do")
                        gday(day);
                        break;
            case 07 : r.push("pi")
                        gday(day);
                        break;
            case 08 : r.push("to")
                        gday(day);
                        break;
            case 09 : r.push("ti")
                        gday(day);
                        break;
            case 10 : r.push("ri")
                        gday(day);
                        break;
            case 11 : r.push("wo")
                        gday(day);
                        break;
            case 12 : r.push("ko")
                        gday(day);
                        break;
        }
}
const gday=(day)=>
{
    switch(day)
    {
        case 01: r.push("ko")
        break;
        case 02: r.push("no")
                break;
        case 03: r.push("na")
                break;
        case 04: r.push("mo")
                break;
        case 05: r.push("ma")
                break;
        case 06: r.push("lo")
                break;
        case 07: r.push("li")
                break;
        case 08: r.push("to")
                break;
        case 09: r.push("do")
                break;
        case 10: r.push("ki")
                break;
        case 11: r.push("co")
                break;
        case 12: r.push("po")
                break;
        case 13: r.push("jo")
                break;
        case 14: r.push("ho")
                break;
        case 15: r.push("ka")
                break;
        case 16: r.push("ru")
                break;
        case 17: r.push("nu")
                break;
        case 18: r.push("fi")
                break;
        case 19: r.push("go")
                break;
        case 20: r.push("ku")
                break;
        case 21: r.push("pi")
                break;
        case 22: r.push("ro")
                break;
        case 23: r.push("ri")
                break;
        case 24: r.push("sa")
                break;
        case 25: r.push("wi")
                break;
        case 26: r.push("ni")
                break;
        case 27: r.push("mi")
                break;
        case 28: r.push("si")
                break;
        case 29: r.push("fu")
                break;
        case 30: r.push("du")
                break;
    }
}
generate.addEventListener('click', () =>
{
        const n= document.getElementById("f");
        var dt=document.getElementById("d").value;
        var date= new Date(dt);
        year=date.getFullYear();
        month=date.getMonth()+1;
        day =date.getDate();
   
    gyear(year);

    resultDisplay.innerHTML=r.join("");
});
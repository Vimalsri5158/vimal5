let h1=document.createElement("h1");
h1.innerHTML="Covid-19";
h1.style.textAlign="center";
h1.style.marginTop="50px"
document.body.append(h1);

let div=document.createElement("div");
div.style.textAlign="center";
let input=document.createElement("input");
input.setAttribute("type","text");
input.setAttribute("id","country");
input.setAttribute("placeholder","Enter Country name")



let lineBreak=document.createElement("br")
let button=document.createElement("button");
button.setAttribute("type","button");
button.classList.add("btn","btn-primary");
button.innerHTML="Search";
button.addEventListener("click",foo);
button.style.margin="10px"

div.append(input,lineBreak,button);
document.body.append(div);

async function foo(){
    let res=document.getElementById("country").value;
    console.log(res);
    let url=`https://api.covid19api.com/dayone/country/${res}`;
    let res1 =await fetch(url);
    let res2=await res1.json();
    console.log(res2);
    let index=res2.length-1;
    console.log(res2[index]);
}





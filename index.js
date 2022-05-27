var i=1;//for work
var i_ul=[1];//for li in work section //will be updated
var j=1;//for education
var k=1;//for skill
var l=1;//for affiliation
var m=1;//for 
document.querySelectorAll('checkbox').checked=false;
function collapsePD(div){
    if(document.querySelector(div).style.height=="40px"){
        document.querySelector(div).style.height="auto";
    }
    else{
        document.querySelector(div).style.height="40px";
    }
}
function checkbox_end_date(x){
    if(document.querySelector('.cbx'+x).checked==true){
        document.querySelector('.edl'+x).style.opacity="0.25";
        document.querySelector('.edi'+x).style.opacity="0.25";
        document.querySelector('.edi'+x).disabled=true;
    }
    if(document.querySelector('.cbx'+x).checked==false){
        document.querySelector('.edl'+x).style.opacity="1";
        document.querySelector('.edi'+x).style.opacity="1";
        document.querySelector('.edi'+x).disabled=false;
    }
}
function checkbox_end_datee(x){
    if(document.querySelector('.ecbx'+x).checked==true){
        document.querySelector('.eedl'+x).style.opacity="0.25";
        document.querySelector('.eedi'+x).style.opacity="0.25";
        document.querySelector('.eedi'+x).disabled=true;
    }
    if(document.querySelector('.ecbx'+x).checked==false){
        document.querySelector('.eedl'+x).style.opacity="1";
        document.querySelector('.eedi'+x).style.opacity="1";
        document.querySelector('.eedi'+x).disabled=false;
    }
}

function addWork(){
    i++;
    i_ul.push(1);
    let newNode=document.createElement("div");
    newNode.classList.add("q9");
    newNode.innerHTML=
    `    
                <hr width="90%">${i}.
                <!-- <div class="q q9-1">
                    <label for="name" >Work History</label>
                    <input type="text">
                    </div> -->
                <div class="q q9-2">
                    <label for="name" >Position</label>
                    <input type="text" id="inp-whpo-${i}">
                </div>
                <div class="q q9-3">
                    <label for="name" >Duration : </label>
                    <label for="name">Start Date</label>
                    <input type="date" id="inp-whdus-${i}">
                    <label class="edl${i}" for="name" > - End Date</label>
                    <input class="edi${i}" type="date" id="inp-whdue-${i}">
                    <span class="current">
                        <input class="cbx${i}" type="checkbox" onchange="checkbox_end_date(${i})" placeholder="Current">
                        Current
                    </span>
                </div>
                <div class="q q9-4">
                    <label for="name" >Place of Work</label>
                    <input type="text" id="inp-whpl-${i}">
                </div>
                <div class="q q9-5">
                    <label for="name" >Description</label>
                    <ul class="desclass${i}">
                        <li><input type="text" id="inp-whdes-${i}-1"></li>
                        <div class="dummy${i}"></div>
                    </ul>
                    
                    <button class="add addPointWD" onclick="addli(${i})">
                        Add Point +
                    </button>
                </div>
                    
                    `;
                    
    let addBtn=document.querySelector('.addWork');
    let Q4=document.querySelector('.Q4');
    Q4.insertBefore(newNode,addBtn);
}

// add li elements
function addli(x){
    i_ul[x-1]+=1;
    let newNode=document.createElement("li");
    // newNode.classList.add("");
    newNode.innerHTML=`
    <input type="text" id="inp-whdes-${x}-${i_ul[x-1]}" value="${x}-${i_ul[x-1]}">
    `;
    document.querySelector('.desclass'+x).insertBefore(newNode,document.querySelector('.dummy'+x));
}

document.querySelector('.Q4').onchange=function(){
    document.querySelector('.who').innerHTML="";
    for(var e=1;e<=i;e++){
        // alert(e);
        var temp=""
        for(var d=1;d<=i_ul[e-1];d++){
            temp+="•"+document.querySelector('#inp-whdes-'+e+'-'+d).value+"<br>";
        }
        // alert(temp);
        document.querySelector('.who').innerHTML+=
        `
        <div class="wh o-wh">
            <div class="std2">
                <span class="o-whp">
                ${document.querySelector('#inp-whpo-'+e).value}, 
                </span>
                <span class="o-whd">
                 ${document.querySelector('#inp-whdus-'+e).value+ " " +document.querySelector('#inp-whdue-'+e).value}, 
                 </span>
                <br>
                <span class="o-wha">
                ${document.querySelector('#inp-whpl-'+e).value}
                </span>
            </div>
            <div class="std3">
                <ul id="o-whde-ul-${e}">
                ${temp}
                </ul>
            </div>
        </div>


        `;
    }
}

{/* <div class="std2">
<span class="o-whp" id="o-whp-${e}">${document.querySelector('#inp-whpo-'+e).value}, </span>
<span class="o-whd" id="o-whd-${e}"> ${document.querySelector('#inp-whdus-'+e).value+ " " +document.querySelector('#inp-whdue-'+e).value}, </span>
<br>
<span class="o-wha" id="o-wha-${e}">${document.querySelector('#inp-whpl-'+e).value}.</span>
</div> */}

function addSkill(){
    k++;
    let newNode=document.createElement("span");
    newNode.classList.add("q10");
    newNode.classList.add("q");
    newNode.innerHTML=`
        <input type="text" class="skilltemp" id="skill${k}">
    `;
    let addBtn=document.querySelector('.addSkill');
    let Q5=document.querySelector('.Q5');
    Q5.insertBefore(newNode,addBtn);
}

document.getElementById("skillin").onchange=function(){
    document.getElementById("skillout").innerHTML="";
    for(var u=1;u<=k;u++){
        document.getElementById("skillout").innerHTML+=`
        <li>${document.getElementById("skill"+u).value}</li>
        `;
    }
}

function addEducation(){
    j++;
    let newNode=document.createElement("div");
    newNode.classList.add("q11");
    newNode.innerHTML=`
    <hr width="90%">
        ${j}.
        <div class="q q11-1">
            <label for="name">Education</label>
            <input id="in-edude${j}" type="text" placeholder="e.g BE Computer Science">
        </div>
        <div class="q q11-2">
            <label for="name" >School/College</label>
            <input id="in-edupn${j}" type="text">
        </div>
        <div class="q q11-3">
            <label for="name" >City</label>
            <input id="in-edupc${j}" type="text">
        </div>
        <div class="q q11-4">
            <label for="name" >Duration : </label>
            <label for="name">Start Date</label>
            <input id="in-edudus${j}" type="date">
            <label class="eedl${j}" for="name" > - End Date</label>
            <input id="in-edudue${j}" class="eedi${j}" type="date">
            <span class="current">
                <input class="ecbx${j}" type="checkbox" onchange="checkbox_end_datee(${j})" placeholder="Current">
                Current
            </span>
        </div>
    `;
    let addBtn=document.querySelector('.addEducation');
    let Q6=document.querySelector('.Q6');
    Q6.insertBefore(newNode,addBtn);
}
// document.querySelector('.Q6').onchange=function(){
//     for(var x=1;x<=j;x++){
//         document.querySelector("#edude"+x).innerHTML=document.querySelector('#in-edude'+x).value;
//         document.querySelector('#edude'+x).style.fontweight="900";
//         document.querySelector('#edup'+x).innerHTML=document.querySelector('#in-edupn'+x).value + " " +document.querySelector('#in-edupc'+x).value;
//         if(document.querySelector('.ecbx'+x).checked==false){
//             document.querySelector('#edudu'+x).innerHTML=document.querySelector('#in-edudus'+x).value + "-" + document.querySelector('#in-edudue'+x).value;
//         }
//         else{
//             document.querySelector('#edudu'+x).innerHTML=document.querySelector('#in-edudus'+x).value + " - Current";
//         }
//     }
// }

document.querySelector('.Q6').onchange=function(){
    document.getElementById("cstd3-1").innerHTML=""
    for(var x=1;x<=j;x++){
        var temp="";
        if(document.querySelector('.ecbx'+x).checked==false){
            temp=document.querySelector('#in-edudus'+x).value + " - " + document.querySelector('#in-edudue'+x).value;
        }
        else{
            temp=document.querySelector('#in-edudus'+x).value + " - Current";
        }
        document.getElementById("cstd3-1").innerHTML+= 
        `
        <b>${document.querySelector('#in-edude'+x).value}</b>
         <p>${document.querySelector('#in-edupn'+x).value + " " +document.querySelector('#in-edupc'+x).value}</p>
         <p">${temp}</p>
         <hr color="white">`;
    }
}

function addAffiliation(){
    l++;
    let newNode=document.createElement("div");
    newNode.classList.add("q12");
    newNode.classList.add("q");
    newNode.innerHTML=`
    <div class="point">
    • <input id="affill${l}" type="text" class="inputa">
    </div>
    `;
    let addBtn=document.querySelector('.addAffiliation');
    let Q7=document.querySelector('.Q7');
    Q7.insertBefore(newNode,addBtn);
}

document.querySelector('.Q7').onchange=function(){
    document.getElementById("affillout").innerHTML="";
    for(var u=1;u<=l;u++){
        document.getElementById("affillout").innerHTML+=`
        <li>${document.getElementById("affill"+u).value}</li>
        `;
    }
}

document.getElementById("fnInput").onchange=function(){
    document.getElementById("name").innerHTML=document.getElementById("fnInput").value + " " +document.getElementById("lnInput").value;
}
document.getElementById("lnInput").onchange=function(){
    document.getElementById("name").innerHTML=document.getElementById("fnInput").value + " " +document.getElementById("lnInput").value;
}
document.getElementById("profsumm").onchange=function(){
    document.getElementById("profsummout").innerHTML=document.getElementById("profsumm").value;
    document.getElementById("profsummout").style.fontFamily=" 'Saira', sans-serif";
}
document.querySelector('.q3-3').onchange=function(){
    document.getElementById("addressout").innerHTML=document.getElementById("address1").value+", "+document.getElementById("address2").value+"-"+document.getElementById("address3").value;
    document.getElementById("addressout").style.fontFamily=" 'Saira', sans-serif";
}
document.querySelector('.q6').onchange=function(){
    document.getElementById("phoneout").innerHTML=document.getElementById("phonein").value;
    document.getElementById("phoneout").style.fontFamily=" 'Saira', sans-serif";
}
document.querySelector('.q7').onchange=function(){
    document.getElementById("emailout").innerHTML=document.getElementById("emailin").value;
    document.getElementById("emailout").style.fontFamily=" 'Saira', sans-serif";
}


function printPageArea(){
    document.querySelector('.main').style.display="none";
    document.querySelector('.hideit').style.display="none";
    document.querySelector('.tittle').style.display="none";
    document.querySelector('.Resume1').style.transform="scale(1)";
    window.print();
    document.querySelector('.main').style.display="block";
    document.querySelector('.hideit').style.display="block";
    document.querySelector('.tittle').style.display="block";
    document.querySelector('.Resume1').style.transform="scale(0.75)";
}

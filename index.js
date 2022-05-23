var i=1;
var j=1;
var k=1;
var l=1;
document.querySelectorAll('checkbox').checked=false;
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

function addWork(){
    i++;
    let newNode=document.createElement("div");
    newNode.classList.add("q9");
    newNode.innerHTML=
    `    
                <hr width="90%">${i}.
                <!-- <div class="q q9-1">
                    <label for="name" >Work History</label>
                    <input type="text" >
                    </div> -->
                    <div class="q q9-2">
                    <label for="name" >Position</label>
                    <input type="text" >
                </div>
                <div class="q q9-3">
                    <label for="name" >Duration : </label>
                    <label for="name">Start Date</label>
                    <input type="date">
                    <label class="edl1" for="name" > - End Date</label>
                    <input class="edi1" type="date">
                    <span class="current">
                        <input class="cbx1" type="checkbox" onchange="checkbox_end_date(1)" placeholder="Current">
                        Current
                    </span>
                    
                    </div>
                    <div class="q q9-4">
                    <label for="name" >Place of Work</label>
                    <input type="text" >
                    </div>
                    <div class="q q9-5">
                    <label for="name" >Description</label>
                    <input type="text" >
                    </div>
                    
                    `;
                    
    let addBtn=document.querySelector('.addWork');
    let Q4=document.querySelector('.Q4');
    Q4.insertBefore(newNode,addBtn);
}

function addSkill(){
    let newNode=document.createElement("span");
    newNode.classList.add("q10");
    newNode.classList.add("q");
    newNode.innerHTML=`
        <input type="text">
    `;
    let addBtn=document.querySelector('.addSkill');
    let Q5=document.querySelector('.Q5');
    Q5.insertBefore(newNode,addBtn);
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
            <input type="text" placeholder="e.g BE Computer Science">
        </div>
        <div class="q q11-2">
            <label for="name" >School/College</label>
            <input type="text">
        </div>
        <div class="q q11-3">
            <label for="name" >City</label>
            <input type="text">
        </div>
        <div class="q q11-4">
            <label for="name" >Duration : </label>
            <label for="name">Start Date</label>
            <input type="date">
            <label class="edl2" for="name" > - End Date</label>
            <input class="edi2" type="date">
            <span class="current">
                <input class="cbx2" type="checkbox" onchange="checkbox_end_date(2)" placeholder="Current">
                Current
            </span>
        </div>
    `;
    let addBtn=document.querySelector('.addEducation');
    let Q6=document.querySelector('.Q6');
    Q6.insertBefore(newNode,addBtn);
}
function addAffiliation(){
    let newNode=document.createElement("div");
    newNode.classList.add("q12");
    newNode.classList.add("q");
    newNode.innerHTML=`
    <div class="point">
    • <input type="text" class="inputa">
    </div>
    `;
    let addBtn=document.querySelector('.addAffiliation');
    let Q7=document.querySelector('.Q7');
    Q7.insertBefore(newNode,addBtn);
}
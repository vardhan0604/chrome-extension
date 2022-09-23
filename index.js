let myLeads=[]
const inputBtn = document.getElementById("input-btn")
const inputEl=document.getElementById("input-el");
const ulEl=document.getElementById("ul-el");

inputBtn.addEventListener("click", function() {
    myLeads.push(inputEl.value);
    console.log(myLeads)
    inputEl.value='';
    
})

    let i=0;
    for(i=0;i<myLeads.length;i++){
        ulEl.innerHTML += "<li>"+myLeads[i]+"</li>"
        console.log(myLeads[i]);
    }

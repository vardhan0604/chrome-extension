let myLeads=[]
const inputBtn = document.getElementById("input-btn")
const inputEl=document.getElementById("input-el");
const ulEl=document.getElementById("ul-el");
const dltBtn=document.getElementById("dlt-btn");
const tabBtn=document.getElementById("tab-btn")

const leadsFromLocalStorage = JSON.parse( localStorage.getItem("myLeads") )
if(leadsFromLocalStorage){
    myLeads=leadsFromLocalStorage;
    output(myLeads);
}


inputBtn.addEventListener("click", function() {
// pushes input value into tha array and clears the input box
    myLeads.push(inputEl.value);
    inputEl.value='';

    // store myleads in the local storage
    localStorage.setItem("myLeads",JSON.stringify(myLeads));
    console.log(localStorage.getItem("myLeads"));

// call output function
    output(myLeads)
})


function output(leads){
    let listItems=""
    let i=0;
    for(i=0;i<leads.length;i++){
        listItems +=` 
        <li>
            <a href=${leads[i]} target="_blank">
                ${leads[i]}
            </a>
        </li>`
        
    }
    ulEl.innerHTML=listItems;

}

dltBtn.addEventListener("dblclick",function () {
    localStorage.clear;
    myLeads=[]
     output(myLeads);

})
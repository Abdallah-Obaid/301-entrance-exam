'use strict'
var arrayWhat=[];
var arraydate=[];
function Abdallah(date,what){
    this.arrayWhat=[];
    this.arraydate=[];
    arrayWhat.push(date);
    arraydate.push(what);
}
getItem1();
getItem2();
var formy =document.getElementById('formy');
formy.addEventListener('submit',function (event) {
   event.preventDefault()
   var what =event.target.what.value;
   var date =event.target.date.value; 
   arrayWhat.push(what)
   arraydate.push(date)
   console.log(arrayWhat)
   console.log(arraydate)
setItem1();
setItem2();
renderlist();
});

console.log(arrayWhat)
console.log(arraydate)

function renderlist(){
    var container = document.getElementById('list');
    var ulel=document.createElement('ul');
    container.appendChild(ulel);
    var liel=document.createElement('li')
    ulel.appendChild(liel)
    for (var i = 0; i < arrayWhat.length; i++) {
        
        liel.textContent=`${i+1}. ${arrayWhat[i]}`
        var pel=document.createElement('p')
        liel.appendChild(pel)
        liel.setAttribute('id','mel')
        pel.textContent=arraydate[i]
        pel.setAttribute('id','pel')
        

    }  
    


}
renderlist();
function setItem1(){
    var save1=JSON.stringify(arrayWhat)
    localStorage.setItem('arrayWhat',save1)
}
function setItem2(){
    var save2=JSON.stringify(arraydate)
    localStorage.setItem('arraydate',save2)
}
function getItem1(){
    var save1=localStorage.getItem('arrayWhat')
    if (JSON.parse(save1)!=null){
    arrayWhat=JSON.parse(save1)}
}
function getItem2(){
    var save2=localStorage.getItem('arraydate')
    if (JSON.parse(save2)!=null){
        arraydate=JSON.parse(save2)}

}
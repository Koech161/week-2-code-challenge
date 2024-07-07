const inputField=document.getElementById('input-box')
const Shoppinglist=document.getElementById('listContainer')

function addTask(){
    if(inputField.value===''){
        alert('enter items')
    }else{
        let li=document.createElement('li')
        li.innerHTML=inputField.value
        Shoppinglist.appendChild(li)
        let span=document.createElement('span')
        span.innerHTML='\u00d7'
        li.appendChild(span)
    }
    inputField.value=''
    saveData()
}
Shoppinglist.addEventListener('click', function(e){
    if(e.target.tagName==='LI'){
        e.target.classList.toggle('checked')
        saveData()
    }else if(e.target.tagName==='SPAN'){
        e.target.parentElement.remove()
        saveData()
    }
},false)
function saveData(){
    localStorage.setItem('data',Shoppinglist.innerHTML)
}
function saveList(){
   Shoppinglist.innerHTML= localStorage.getItem('data')
}saveList()
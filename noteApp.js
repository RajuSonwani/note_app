console.log("Hi there..!")
showElem()

let addBtn = document.getElementById('addBtn');
addBtn.addEventListener('click', function (e) {
    let addText = document.getElementById('addTxt');
    let addTittle= document.getElementById('addTitle');
    let notes = localStorage.getItem('notes');
    let noteObj;
    if (notes == null) {
        noteObj = []
    } else {
        noteObj = JSON.parse(notes)
    }

    let myObj={
        title:addTittle.value,
        values:addText.value
    }

    noteObj.push(myObj);
    localStorage.setItem('notes', JSON.stringify(noteObj));
    addText.value = '';
    addTittle.value = '';

    let noteBoxes = document.getElementById('noteBoxes');

    showElem();
    // console.log(localStorage)
})

function showElem() {
    let notes = localStorage.getItem('notes');
    let noteObj;
    if (notes == null) {
        noteObj = []
    } else {
        noteObj = JSON.parse(notes)
    }

    let html='';
    noteObj.forEach((element, index) =>{
        html += `<div class="my-2 mx-2 noteCards" style="width: 13rem;">
                    <div class="card-body">
                        <h6 class="card-title"><b>${element.title}</b></h6>
                        <p>${element.values}</p>
                        <button onclick='delet(this.id) 'class="btn btn-primary" id="${index}">delete</button>
                    </div>
                </div>`
        // document.getElementById('noteBoxes').appendChild(html)
    });
    // console.log(notes)
    if(noteObj.length==0){
        document.getElementById('noteBoxes').innerHTML="Go to the above section and add notes"
    }else{
        document.getElementById('noteBoxes').innerHTML= html;
        // document.getElementById('noteBoxes').appendChild(html);
    }
}

function delet(index){
    // console.log(`i am dedleting${index}`)
    let notes = localStorage.getItem('notes');
    let noteObj;
    if (notes == null) {
        noteObj = []
    } else {
        noteObj = JSON.parse(notes)
    }
    noteObj.splice(index,1)
    localStorage.setItem('notes', JSON.stringify(noteObj))
    showElem()
}

let searchBar=document.getElementById('searchBar');
searchBar.addEventListener('input',function(){
    let inputVal=searchBar.value;
    console.log(inputVal);
    let noteCards=document.getElementsByClassName('noteCards');
    Array.from(noteCards).forEach((element)=>{
        let cardTxt=element.getElementsByTagName('p')[0].innerText;
        if(cardTxt.includes(inputVal)){
            element.style.display='block';

        }else{
            element.style.display='none';
        }
    })

})
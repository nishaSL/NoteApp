displayNotes();
let add=document.getElementById('add');
add.addEventListener('click', function(e){
    let text=document.getElementById('text');
    let notes=localStorage.getItem('notes');
    if(notes == null){
        notesObj=[];
    }
    else{
        notesObj=JSON.parse(notes);
    }
    notesObj.push(text.value);
    localStorage.setItem('notes', JSON.stringify(notesObj));
    text.value="";
    displayNotes();
})

//function to display all notes that are created and present
function displayNotes(){
    let notes=localStorage.getItem('notes');
    if(notes == null){
        notesObj=[];
    }
    else{
        notesObj=JSON.parse(notes);
    }
    let html = "";
    notesObj.forEach((element,index) => {
        html += `
        <div class="noteCard my-2 mx-2 card" style="width: 18rem;">
                <div class="card-body">
                  <h5 class="card-title"> Note ${index+1}</h5>
                  <p class="card-text">${element}</p>
                  <button id="${index}" class="btn btn-primary" onclick="deleteNotes(this.is)">Delete</button>
                </div> 
                </div>`;
    });
    let notesElement = document.getElementById('notes');
    if(notesObj.length != 0){
        notesElement.innerHTML = html;
    }
    else{
        notesElement.innerHTML = `<h4>It seems, You don't have any notes!</h4>`
    }
}

//function to delete notes
function deleteNotes(index) {    
    let notes=localStorage.getItem('notes');
    if(notes == null){
        notesObj=[];
    }
    else{
        notesObj=JSON.parse(notes);
    }
    notesObj.splice(index, 1);
    localStorage.setItem('notes', JSON.stringify(notesObj));
    displayNotes();
}

//search notes from search box 
let search = document.getElementById("search");
search.addEventListener("input", function(){
    let inputValue = search.value.toLowerCase();
    let noteCards = document.getElementsByClassName('noteCard');
    Array.from(noteCards).forEach(function(element){
        let cardTxt = element.getElementsByTagName("p")[0].innerText
        if(cardTxt.includes(inputValue)){
            element.style.display = "block";
        }
        else{
            element.style.display = "none";
        }
    })
})




/*
1.mark important
2.add title
*/
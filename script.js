let myLibrary =[];

function Book(title,author,pages,read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.id = crypto.randomUUID();
}

function addBooktoLibrary(book){
    // const book = new Book ('me','your',102,'read')
    // const book2 = new Book('your','me',12,'read')
    
    // myLibrary.push(book2)
    

}

// getting main element area

const content = document.getElementById("content-card");


// function to print book cards

function printCard(){

if (!myLibrary)return undefined
else {

myLibrary.forEach((book)=>{
    
    const card = document.createElement('div');
    
    card.innerHTML =`<span> Title : ${book.title}</span>
                     <span> Author : ${book.author}</span>
                     <span> Pages : ${book.pages}</span>
                     <span> Status : ${book.read}</span>`

    content.appendChild(card);
})


}
} 







// D O M

const dialog = document.querySelector("dialog");
const addButton = document.querySelector(".add-button");

addButton.addEventListener("click", () => {
     dialog.showModal();
});


const form = document.querySelector("#fill-form");


form.addEventListener("submit", () =>{
    content.innerHTML= '';
    const data = Object.fromEntries(new FormData(form));
    const title = data.book_title;
    const author = data.author_name;
    const pages = data.no_ofpages;
    const status = data.reading_status;
    const book = new Book(title,author,pages,status);
    addBooktoLibrary(book);
    printCard();

    form.reset(); //* to reset the form


})






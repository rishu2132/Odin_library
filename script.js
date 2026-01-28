const myLibrary =[];

function Book(title,author,pages,read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.id = crypto.randomUUID();
}

function addBooktoLibrary(){
    const book = new Book ('me','your',102,'read')
    const book2 = new Book('your','me',12,'read')
    myLibrary.push(book)
    myLibrary.push(book2)

}

addBooktoLibrary();
console.log(myLibrary)
const body = document.querySelector("body");



myLibrary.forEach((book)=>{
    const card = document.createElement('div');
    card.innerHTML =`<span> Title : ${book.title}</span>
                     <span> Author : ${book.author}</span>
                     <span> Pages : ${book.pages}</span>
                     <span> Status : ${book.read}</span>`

    document.getElementById("content-card").appendChild(card);
})



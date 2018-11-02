
$(document).ready(function () {
    getBooks();
})

var books = [];
function getBooks() {
    $.ajax({
        url: "https://www.googleapis.com/books/v1/volumes?q=search+terms",
        type: 'GET',
        contentType: 'aplication/json',
        success: function (data) {

            orgBooks();
            getInfo();
        },
        error: function (data) {
            console.log("Error ", data);
        }
    });
}


function orgBooks(){

    for (let i = 0; i < data.items.length; i++) {
        const element = data.items[i];

        if (element.volumeInfo.imageLinks == undefined) {

            let book = new Books(element.id, element.volumeInfo.mainCategory, element.volumeInfo.title, element.volumeInfo.authors, element.volumeInfo.pageCount, element.volumeInfo.averageRating, "https://media2.giphy.com/media/3o6Zt7j5rtQUNPiw8g/giphy-downsized.gif?cid=3640f6095bc687393138505259433f42", element.volumeInfo.infoLink);

            books.push(book);        
            
        } else {

            let book = new Books(element.id, element.volumeInfo.mainCategory, element.volumeInfo.title, element.volumeInfo.authors, element.volumeInfo.pageCount, element.volumeInfo.averageRating, element.volumeInfo.imageLinks.smallThumbnail, element.volumeInfo.infoLink);

            books.push(book);
        }
    }
}

function getInfo() {

    

}
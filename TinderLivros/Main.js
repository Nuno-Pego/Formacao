
var books = [];
var likebooks = [];
var b = 0;
var a;
var l = 0;

$(document).ready(function () {
    getBooks();
})

function getBooks() {
    $.ajax({
        url: "https://www.googleapis.com/books/v1/volumes?q=" + (generateTerm()) + "&maxResults=40&startIndex=" + (books.length),
        type: 'GET',
        contentType: 'aplication/json',
        success: function (data) {

            orgBooks(data);
            console.log(books);

            if (b == 0) {
                getInfo();
            }
        },
        error: function (data) {
            console.log("Error ", data);
        }
    });
}

function orgBooks(data) {

    for (let i = 0; i < data.items.length; i++) {
        const element = data.items[i];

        if (element.volumeInfo.imageLinks == undefined) {

            let book = new Books(element.id, element.volumeInfo.title, element.volumeInfo.authors, element.volumeInfo.pageCount, "https://media1.tenor.com/images/628749cf0795d197fdc7b1f48ee589ab/tenor.gif?itemid=5291661", element.volumeInfo.infoLink, 0, element.volumeInfo.description);

            books.push(book);

        } else {

            let book = new Books(element.id, element.volumeInfo.title, element.volumeInfo.authors, element.volumeInfo.pageCount, element.volumeInfo.imageLinks.smallThumbnail, element.volumeInfo.infoLink, 0, element.volumeInfo.description);

            books.push(book);
        }
    }
}

function getInfo() {
    a = 1;
    $("#descr").hide();
    ebook = books[b];
    $("#imgbk").attr("src", ebook.image);
    $("#ttl").html(ebook.title);
    $("#d1").html("<b>Authors:</b> " + ebook.authors);
    $("#d2").html("<b>Pages:</b> " + ebook.numerPage);
    $("#d3").attr("href", ebook.link);

    if (b == books.length - 5) {
        getBooks();
    }    
}

$("#clkl").click(function () {
    ebook = books[b];
    ebook.like = ebook.like + 1;
    likebooks[l]=ebook;   
    l++;
    b++;
    getInfo();
    
})

$("#clkd").click(function () {
    b++;
    getInfo();
})

$("#clki").click(function () {
    ebook = books[b];
    if (a % 2 !== 0) {
        $("#descr").show();
        $("#descr").html("<br><b>Description:</b> " + ebook.description);
    } else {
        $("#descr").html("");
    }
    a++;
})

function generateTerm() {
    var text = "";
    var lenghtText = 1;
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghhijklmnopqrstuvwxyz";
    for (let index = 0; index < lenghtText; index++) {
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text;
}


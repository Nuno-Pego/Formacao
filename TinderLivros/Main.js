
var books = [];
var likebooks = [];
var k = 0;
var a;
var l = 0;
var text = "";


$(document).ready(function () {    
        getBooks();
        // $(".table").hide();             
})

function getBooks() {     
    $.ajax({
        url: "https://www.googleapis.com/books/v1/volumes?q=" + (generateTerm()) + "&maxResults=40&startIndex=" + (k),
        type: 'GET',
        contentType: 'aplication/json',
        success: function (data) {

            orgBooks(data);
            console.log(books);

            if (k == 0) {
                getInfo();
            }
            k = k + 40;
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
    ebook = books[0];
    $("#imgbk").attr("src", ebook.image);
    $("#ttl").html(ebook.title);
    $("#d1").html("<b>Authors:</b> " + ebook.authors);
    $("#d2").html("<b>Pages:</b> " + ebook.numerPage);
    $("#d3").attr("href", ebook.link);

    if (books.length == 5) {
        getBooks();
    }
}

// $("#clktb").click(function () {
//     $(".card text-center").hide();
//     $(".table").show();  
// })

$("#clks").click(function () {
    text = $("#ipts").val();
    books.splice(0, books.length);
    k = 0;
    getBooks();
})

$("#clkl").click(function () {
    ebook = books[0];        
    ebook.like = ebook.like + 1;
    likebooks.push(ebook);
    $("#cttb").append(creatTable(ebook));      
    books.shift();
    console.log(books);
    getInfo();
      
})

$("#clkd").click(function () {
    books.shift();
    console.log(books);
    getInfo();
})

$("#clki").click(function () {
    ebook = books[0];
    if (a % 2 !== 0) {
        $("#descr").show();
        $("#descr").html("<br><b>Description:</b> " + ebook.description);
    } else {
        $("#descr").html("");
    }
    a++;
})

function generateTerm() {

    if (text == "") {
        var lenghtText = 1;
        var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghhijklmnopqrstuvwxyz";
        for (let index = 0; index < lenghtText; index++) {
            text += possible.charAt(Math.floor(Math.random() * possible.length));
        }
    }
    return text;
}

function creatTable(ebook){

    var txt="";

    txt = ` <tr>
        <td> ${ebook.authors} </td>
        <td> ${ebook.title} </td>
        <td> ${ebook.numerPage} </td>
        <td> ${ebook.like} </td>
    </tr>`;

    return txt;
}
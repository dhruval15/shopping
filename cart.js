$('#header-import').html(header);
$('#footer-import').html(footer);

$(window).load(function() {
    cartData = JSON.parse(sessionStorage.getItem('CartProducts'))
    displaycart(cartData);
});

var cartProducts = [];
function pushCart(id) {
    console.log(id);
    show[0].forEach(api => {
        if (api.id === id) {
            JSON.parse(sessionStorage.getItem('CartProducts'));
            cartProducts.push(api);
            console.log(cartProducts);
            sessionStorage.setItem("CartProducts",JSON.stringify(cartProducts));
        }
    })
};
console.log("display",cartProducts);
// });
/*           below for display cart           */
$('.cart2').click(function () {
    displaycart(cartProducts);
    /* if (card1 != null) {
    }
    if (card1 == null) {                     //for cart empty check
        alert("cart is empty");
    }*/
});

function RemoveCart(id) {
    cartProducts.forEach((api, index) => {
        // show[0].forEach(api => {
        if (api.id === id) {
            cartProducts.splice(index, 1);
        }
    })
    // })
    displaycart(cartProducts)
}
/*          below for append value in cart            */
// console.log(show);
function displaycart(api) {
    // $(".datapush").empty();
    $('.datapush').append(`<div class="container px-4 py-4 mx-auto">
    <div class="row d-flex justify-content-center">
    <div class="col-4">
    <h4 class="heading">Shopping Bag</h4>
    </div>
    <div class="col-8">
    <div class="row text-right">
    <div class="col-4">
    <h6 class="mt-2">Product</h6>
    </div>
    <div class="col-4">
    <h6 class="mt-2">Quantity</h6>
    </div>
    <div class="col-4">
    <h6 class="mt-2">Price</h6>
    </div>
    </div>
    </div>
    </div>
    </div>`);
    let card1 = '';
    let total = 0
    for (var i = 0; i < api.length; i++) {
        product = api[i];
        // console.log(product.price, product.Netprice);
        card1 += '<hr><div class="row d-flex justify-content-center py-2">'
        card1 += '<div class="col-4"><div class="row d-flex">'
        card1 += '<div class="book d-flex gap-2">'
        card1 += '<div><img src= ' + product.thumbnail + ' class="img"></div>'
        card1 += '<div class=" d-flex "> <h6 class="mob-text">' + product.description + '</h6></div>'
        card1 += '</div></div></div>'
        card1 += '<div class="my-auto col-8"><div class="row text-right">'
        card1 += '<div class="col-4 ps-3"><p class="mob-text">' + product.title + '</p></div>'
        card1 += '<div class="col-4 ps-3"><div class="px-3">'
        card1 += `<div class="d-flex align-items-baseline fill">
        <button class="minus pe-2" onclick=" minus(this,${i}) ">-</button>`
        card1 += '<p class="result text-center" id="qty' + i + '">' + product.quantity + '</p>'
        // card1 += '<input type="text" readonly  class="border-0 result" value="1">'
        card1 += `<button class="plus ps-2" onclick=" addition(this,${i}) ">+</button>`
        card1 += '</div></div></div>'
        card1 += ' <div class="col-4 ps-4 d-flex"><h6 class="text" id="product-price">' + (product.Netprice != undefined ? product.Netprice : product.price) + '</h6>'
        card1 += `<div class=" removeCart"><button class= "border-0 bg-transparent" onclick="RemoveCart(${product.id})"><i class="fa-solid fa-xmark rmvbtn fs-3"></i></button></div></div>`
        card1 += '</div></div></div>'
        total += (product.Netprice != undefined ? product.Netprice : product.price)
    }
    console.log("total", total);

    $('.datapush').append(card1);
    $('.datapush').append(`<div class="cotainer"><div class=" d-flex justify-content-evenly my-2 mx-2 align-items-center">
    <div class="">
    <label class="t1">Total:</label><span class="output ms-2">Rs.`+ total + `</span></div>
    <button type="button" class=" btn btn-outline-primary">PROCEED TO PAY</button>
    </div>`);

};

function addition(val, i) {
    let currentProduct = cartProducts[i];
    currentProduct.quantity++
    currentProduct.Netprice = currentProduct.quantity * currentProduct.price
    cartProducts[i] = currentProduct
    displaycart(cartProducts);


};
function minus(val, i) {
    let currentProduct = cartProducts[i];
    currentProduct.quantity--
    currentProduct.Netprice = currentProduct.quantity * currentProduct.price
    cartProducts[i] = currentProduct
    displaycart(cartProducts);


};

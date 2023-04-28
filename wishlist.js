$('#header-import').html(header);
$('#footer-import').html(footer);
$(window).load(function() {
    wishlistProducts= JSON.parse(sessionStorage.getItem('wishlistProducts'))
    displayProds(wishlistProducts, true);
});
var wishlistProducts = [];
function handleWishList(id, isWishList) {

    console.log('id', isWishList);
    let isDeleted = false
    if (wishlistProducts.length === 0) {
        console.log("show", show[0]);
        show[0].forEach(api => {
            if (api.id == id) {
                console.log('her');
                wishlistProducts.push(api)
                console.log(wishlistProducts);
                let ab = sessionStorage.setItem("wishlistProducts",JSON.stringify(api));
                console.log(ab);
            }
        })
        // var add = JSON.parse(sessionStorage.getItem('wishlistProducts'));
        // console.log(add);
    } else {
        wishlistProducts.forEach((api, index) => {
            if (api.id == id) {
                JSON.parse(sessionStorage.getItem('wishlistProducts'));
                console.log(api, index);
                wishlistProducts.splice(index, 1)
                isDeleted = true;
                sessionStorage.setItem("wishlistProducts",JSON.stringify(wishlistProducts));
            }
        })
        if (!isDeleted) {
            show[0].forEach(api => {
                if (api.id == id) {
                    JSON.parse(sessionStorage.getItem('wishlistProducts'));
                    wishlistProducts.push(api)
                    isDeleted = false;
                    let ab = sessionStorage.setItem("wishlistProducts",JSON.stringify(wishlistProducts));
                }
            })
        // } var stored = JSON.parse(sessionStorage.getItem('wishlistProducts'));
        // console.log(stored);
    }
    if (isWishList) displayProds(wishlistProducts, true);
}};
$('.wish').click(function () {
    console.log('hello');
    displayProds(wishlistProducts, true);
});
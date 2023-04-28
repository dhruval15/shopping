$('#header-import').html(header);
$('#footer-import').html(footer);

const urlSearchParams = new URLSearchParams(window.location.search);
const params = Object.fromEntries(urlSearchParams.entries());

// Page load first time
$('.datapush').find(function () {
    var catProducts = [];
    let test1 = params.brand ?? '';
    let test = params.category ?? '';
    $.getJSON('https://dummyjson.com/products/?limit=100', function (data) {
        data.products.forEach(product => {
            // console.log(product.category);
            if (product.category === test || product.brand === test1) {
                catProducts.push(product)
            }
        })
        displayProds(catProducts);
    });
});

$('.dropdown-item').click(function () {
    console.log('new one');
    show.forEach(api => {
        let test = params.category ?? '';
        let test1 = params.brand ?? '';
        var catProducts = [];
        api.forEach(function (product) {
            if (product.category === test || product.brand === test1) {
                //append in products arr cartProducts
                catProducts.push(product)
            }
        });
        displayProds(catProducts);
    })
});

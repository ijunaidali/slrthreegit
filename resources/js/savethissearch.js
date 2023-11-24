import "../css/custom.css";
require("noty/src/noty.scss");
require("noty/src/themes/mint.scss");
window.Noty = require('noty');
window.axios = require('axios');

//const appDomain = "https://e702-101-50-109-25.ngrok-free.app";

var searchTextBox = document.querySelector('#Search-In-Modal');

function addSaveList(shopId) {
    var searchText = searchTextBox.value.trim();
    new Noty({
        type: 'success',
        layout: 'topRight',
        text: 'shopId + search text: '+ shopId + ' ' +searchText,
        timeout: 300
    }).show();

    console.log('SaveThisSearch clicked');

    // axios.get(appDomain+'/api/addToWishlist', {shop_id: Shopify.shop,customer_id: customer, product_id: product_id })
    //     .then(response => {
    //         console.log("Response: ", response);
    //     })
    //     .catch( error => {
    //         console.log("ERROR: ", error);
    //     });

    // ajax
}

function removeSavelist() {
    new Noty({
        type: 'warning',
        layout: 'topRight',
        text: 'removed',
        timeout: 300
    }).show();

    console.log('remove SaveThisSearch clicked');
}
var wishListButton = document.querySelector('.saveThisSearch');


wishListButton.addEventListener('click', function (){
    

    if (this.classList.contains("active")) {
        removeSavelist();
        this.classList.remove("active");
    }else{
        this.classList.add("active");``
        var shopId = this.dataset.store;
        console.log('this.dataset shopId', this.dataset, shopId);
        addSaveList(shopId);
    }

});


// searchIcon.addEventListener('click', function (){
//     new Noty({
//         type: 'success',
//         layout: 'topRight',
//         text: 'search icon clicked',
//         timeout: 300
//     }).show();
// });
import "../css/custom.css";

window.axios = require('axios');

//const appDomain = "https://e702-101-50-109-25.ngrok-free.app";



function addWishlist() {

    console.log('add wishlist button three');

    // axios.get(appDomain+'/api/addToWishlist', {shop_id: Shopify.shop,customer_id: customer, product_id: product_id })
    //     .then(response => {
    //         console.log("Response: ", response);
    //     })
    //     .catch( error => {
    //         console.log("ERROR: ", error);
    //     });


    // new Noty({
    //     type: 'success',
    //     layout: 'topRight',
    //     timeout: 3000,
    //     text: 'Added to wishlist'
    // }).show();

    // ajax
}

function removeWishlist() {

    console.log('remove wishlist button three');
}
var wishListButton = document.querySelector('.saveThisSearch');

wishListButton.addEventListener('click', function (){
    

    if (this.classList.contains("active")) {
        removeWishlist();
        this.classList.remove("active");
    }else{
        this.classList.add("active");
        addWishlist();
    }

});
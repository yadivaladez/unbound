
var productContainer = document.getElementById("product-container");
var productPreview = document.getElementById("product-preview");
var btn = document.getElementById("more-btn");
var callProducts = new XMLHttpRequest();
callProducts.open('GET', 'https://unboundbabes.com/products.json');
callProducts.onload = function(){
  var prodData = JSON.parse(callProducts.responseText);
  console.log(prodData.products);
  renderAll(prodData.products);
  renderSelect(prodData.products);

};
callProducts.send();

function renderAll(data) {
  var productDiv = "";
  for (i = 0; i < data.length; i++) {
    productDiv += "<div class='col-6 col-sm-3'>" +
    "<img src='" + data[i].images[0].src + "'class='preview'/>" +
    "<div class='product-info'>" +
    "<h6>"+ data[i].vendor +"</h6>"+
    "<h4>"+ data[i].title +"</h4>"+
    "<button type='button' class='more-btn' onclick='buttonClick();'>" + '+' + "</button>" +
    "<button class='btn' onclick='modalPop();'>" + 'Preview' + "</button>" +
    "</div>" +
    "</div>";


  }

  productContainer.insertAdjacentHTML('afterbegin', productDiv);
};
function renderSelect(data) {
  var productPreviewDiv = "";

  $.each ( data.length, function( key, val ){
          console.log ( key, val );
        })
  for (i = 0; i < data.length; i++) {
    productPreviewDiv += "<div class='col-12'>" +
    "<img src='" + data[i].images[0].src + "'class='preview' id='thumbnail'/>" +
    "<h4>"+ data[i].title +"</h4>"+
    "<button type='button' class='more-btn' onclick='buttonClick();'>" + '+' + "</button>" +
    "<a href='#' data-target='.modal' data-dismiss='modal' class='.modal-close' onclick='closeModal();'>"+ "x" + "</a>"
    "</div>";


  }

  productPreview.insertAdjacentHTML('afterbegin', productPreviewDiv);
};

var x = 0;
function buttonClick() {

     var display = document.getElementById("cart__count");
       x++;
       document.getElementById('cart__count').value = x;
       console.log(x);
       display.innerHTML = x;

   };

   function modalPop() {
     $(".modal").toggleClass("active");

   }
   function closeModal() {
     $(".modal.active").removeClass("active");

   }

import "../scss/app.scss";

window.addEventListener("DOMContentLoaded", () => {
  var productDiv = document.querySelector('.product');
  var productPrice = document.querySelectorAll('p')[1].innerHTML;
  var span = document.createElement('span');
  span.class = "data-price";
  span.className = "data-price";
  span.innerText = productPrice;
  productDiv.setAttribute('data-price', productPrice);
  productDiv.appendChild(span);
});

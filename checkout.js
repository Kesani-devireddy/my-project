import {card} from '../data/card.js';
import {products} from '../data/products.js';

let checkoutHTML = '';


card.forEach((cardItem) => {
    const productId = cardItem.productId ;

    let matchingItem;

products.forEach((product) => {
    if(product.id === productId){
        matchingItem = product ;
    }
});



checkoutHTML +=
 `  <div class="cart-item-container">
<div class="delivery-date">
  Delivery date: Tuesday, June 21
</div>

<div class="cart-item-details-grid">
  <img class="product-image"
    src="${matchingItem.image}">

  <div class="cart-item-details">
    <div class="product-name">
    ${matchingItem.name}
    </div>
    <div class="product-price">
      $${(matchingItem.priceCents/100).toFixed(2)}
    </div>
    <div class="product-quantity">
      <span>
        Quantity: <span class="quantity-label">${cardItem.quantity}</span>
      </span>
      <span class="update-quantity-link link-primary">
        Update
      </span>
      <span class="delete-quantity-link link-primary js-delete-quantity"
      data-product-id = "${matchingItem.id}">
        Delete
      </span>
    </div>
  </div>

  <div class="delivery-options">
    <div class="delivery-options-title">
      Choose a delivery option:
    </div>
    <div class="delivery-option">
      <input type="radio" checked
        class="delivery-option-input"
        name="delivery-option-${productId}">
      <div>
        <div class="delivery-option-date">
          Tuesday, June 21
        </div>
        <div class="delivery-option-price">
          FREE Shipping
        </div>
      </div>
    </div>
    <div class="delivery-option">
      <input type="radio"
        class="delivery-option-input"
        name="delivery-option-${productId}">
      <div>
        <div class="delivery-option-date">
          Wednesday, June 15
        </div>
        <div class="delivery-option-price">
          $4.99 - Shipping
        </div>
      </div>
    </div>
    <div class="delivery-option">
      <input type="radio"
        class="delivery-option-input"
        name="delivery-option-${productId}">
      <div>
        <div class="delivery-option-date">
          Monday, June 13
        </div>
        <div class="delivery-option-price">
          $9.99 - Shipping
        </div>
      </div>
    </div>
  </div>
</div>
</div>`

document.querySelector('.js-order-summary').innerHTML = checkoutHTML;


document.querySelectorAll('.js-delete-quantity')
  .forEach((button) => {
    button.addEventListener('click' , () => {
      const productId = button.dataset.productId;

      const newCart = [] ;

      card.forEach((cardItem) => {
        if(cardItem.productId !== productId){
          newCart.push(cardItem);
        }
      })
      card = newCart;
      console.log(newCart);

    });
  });

});






<template>
  <div class="product-details-area products-page pt-30 pb-60">
    <div class="container">
      <div class="row">
        <div class="col-lg-6">
          <div class="tab-content position-relative">
            <div class="tab-pane product-details-img fade show active">
              <img
                src="~/assets/images/product-details-grocery.png"
                alt="product"
              />
            </div>
            <span class="discounts">-10%</span>
          </div>
        </div>
        <div class="col-lg-6">
          <div class="product-details-content">
            <span class="stock">
              <i class="ri-check-line"></i>
              In Stock
            </span>
            <h3>Fresh Brand – Beef Chuck Center Roast, USDA Choice</h3>
            <div class="d-flex gap-1 review">
              <i class="flaticon-star"></i>
              <i class="flaticon-star"></i>
              <i class="flaticon-star"></i>
              <i class="flaticon-star"></i>
              <i class="flaticon-star"></i>
              <span>(5 Reviews)</span>
            </div>
            <h2 class="price">$399 <del>$450</del></h2>
            <div class="d-flex align-items-center mb-4 gap-3">
              <GroceryProductDetailsProductQuantity />
              <button class="btn btn-success text-white rounded-pill">
                <i class="ri-shopping-cart-line"></i>
                <span>Add To Cart</span>
              </button>
            </div>
            <button class="d-flex align-items-center gap-3 wishlist mb-3">
              <i class="ri-heart-line"></i>
              <span>Add to wishlist</span>
            </button>
            <button class="d-flex align-items-center gap-3 wishlist">
              <i class="ri-eye-line"></i>
              <span><span>565 people</span> are viewing the products</span>
            </button>
            <ul class="services-list ps-0 mb-0 list-unstyled">
              <li class="d-flex align-items-center">
                <i class="ri-check-line"></i>
                <span>Free delivery today</span>
              </li>
              <li class="d-flex align-items-center">
                <i class="ri-check-line"></i>
                <span>100% money back Guarantee</span>
              </li>
              <li class="d-flex align-items-center">
                <i class="ri-check-line"></i>
                <span>7 days product return policy</span>
              </li>
            </ul>
            <ul class="sku-list ps-0 mb-0 list-unstyled">
              <li class="d-flex align-items-center">
                <span class="title">SKU:</span>
                <span class="title2">SMTGS6T45</span>
              </li>
              <li class="d-flex align-items-center">
                <span class="title">Category:</span>
                <span class="title2">Computer</span>
              </li>
              <li class="d-flex align-items-center">
                <span class="title">Tags:</span>
                <span class="title2">laptop, macbook, PC</span>
              </li>
            </ul>
            <ul
              class="social-link ps-0 mb-0 list-unstyled d-flex gap-2 flex-wrap"
            >
              <li class="d-flex align-items-center me-2">
                <span>Share:</span>
              </li>
              <li class="d-flex align-items-center gap-2">
                <a href="https://facebook.com/" target="_blank">
                  <i class="ri-facebook-fill"></i>
                </a>
              </li>
              <li class="d-flex align-items-center gap-2">
                <a href="https://twitter.com/" target="_blank">
                  <i class="ri-twitter-x-line"></i>
                </a>
              </li>
              <li class="d-flex align-items-center gap-2">
                <a href="https://linkedin.com/" target="_blank">
                  <i class="ri-linkedin-fill"></i>
                </a>
              </li>
              <li class="d-flex align-items-center gap-2">
                <a href="https://whatsapp.com/" target="_blank">
                  <i class="ri-whatsapp-line"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div class="pt-60"></div>

      <GroceryProductDetailsTab />
    </div>
  </div>
</template>

<script>
export default {
  name: "GroceryProductDetails",
};
</script>

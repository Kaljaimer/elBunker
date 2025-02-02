<template>
  <div class="ptb-60">
    <div class="container">
      <div class="table-responsive cart-table">
        <table class="table align-middle">
          <thead>
            <tr>
              <th scope="col">Product</th>
              <th scope="col">Name</th>
              <th scope="col">Unit Price</th>
              <th scope="col">Quantity</th>
              <th scope="col">Subtotal</th>
              <th scope="col">Add To Cart</th>
              <th scope="col">Remove</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <NuxtLink to="/product-details">
                  <img
                    src="~/assets/images/product-6.png"
                    class="cart-product"
                    alt="product"
                  />
                </NuxtLink>
              </td>
              <td>
                <NuxtLink to="/product-details" class="title">
                  Multiplatform Wireless Noise-Cancelling Gaming Headset
                </NuxtLink>
              </td>
              <td>
                <span class="price">$79</span>
              </td>
              <td>
                <WishlistProductQuantity />
              </td>
              <td>
                <span class="price">$79</span>
              </td>
              <td>
                <button class="btn btn-warning text-white">Add To Cart</button>
              </td>
              <td>
                <button class="border-0 p-0 bg-transparent remove">
                  <i class="ri-delete-bin-line"></i>
                </button>
              </td>
            </tr>
            <tr>
              <td>
                <NuxtLink to="/product-details">
                  <img
                    src="~/assets/images/product-7.png"
                    class="cart-product"
                    alt="product"
                  />
                </NuxtLink>
              </td>
              <td>
                <NuxtLink to="/product-details" class="title">
                  GPS Smartwatch with Bright Touchscreen Display
                </NuxtLink>
              </td>
              <td>
                <span class="price">$119</span>
              </td>
              <td>
                <WishlistProductQuantity />
              </td>
              <td>
                <span class="price">$119</span>
              </td>
              <td>
                <button class="btn btn-warning text-white">Add To Cart</button>
              </td>
              <td>
                <button class="border-0 p-0 bg-transparent remove">
                  <i class="ri-delete-bin-line"></i>
                </button>
              </td>
            </tr>
            <tr>
              <td>
                <NuxtLink to="/product-details">
                  <img
                    src="~/assets/images/product-8.png"
                    class="cart-product"
                    alt="product"
                  />
                </NuxtLink>
              </td>
              <td>
                <NuxtLink to="/product-details" class="title">
                  SAMSUNG 32-Inch Class QLED 4K Q60C Series Quantum HDR
                </NuxtLink>
              </td>
              <td>
                <span class="price">$397</span>
              </td>
              <td>
                <WishlistProductQuantity />
              </td>
              <td>
                <span class="price">$397</span>
              </td>
              <td>
                <button class="btn btn-warning text-white">Add To Cart</button>
              </td>
              <td>
                <button class="border-0 p-0 bg-transparent remove">
                  <i class="ri-delete-bin-line"></i>
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Wishlist",
};
</script>

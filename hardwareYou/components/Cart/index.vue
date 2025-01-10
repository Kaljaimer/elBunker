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
                <CartProductQuantity />
              </td>
              <td>
                <span class="price">$79</span>
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
                <div class="product-quantity">
                  <CartProductQuantity />
                </div>
              </td>
              <td>
                <span class="price">$119</span>
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
                <div class="product-quantity">
                  <CartProductQuantity />
                </div>
              </td>
              <td>
                <span class="price">$397</span>
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
      <div class="row justify-content-between mt-4">
        <div class="col-xxl-4 col-lg-6">
          <div class="d-md-flex coupon-wrap">
            <input
              type="text"
              class="form-control w-100"
              placeholder="Coupon"
            />
            <button
              type="submit"
              class="btn btn-warning text-white mt-3 mt-md-0 w-100"
            >
              Apply Coupon
              <i class="flaticon-up-right-arrow"></i>
            </button>
          </div>
        </div>
        <div class="col-xxl-4 col-lg-6 text-end">
          <button
            type="submit"
            class="btn btn-warning text-white w-100 mt-3 mt-lg-0"
          >
            Update Price
            <i class="flaticon-up-right-arrow"></i>
          </button>
        </div>
      </div>

      <div class="total-cart">
        <h3>Cart Totals</h3>
        <ul>
          <li class="d-flex justify-content-between">
            <span class="title">Subtotal</span>
            <span class="price">$595</span>
          </li>
          <li class="d-flex justify-content-between">
            <span class="title">Total</span>
            <span class="price">$595</span>
          </li>
        </ul>
        <NuxtLink to="/checkout" class="btn btn-warning text-white">
          Proceed To Checkout
          <i class="flaticon-up-right-arrow"></i>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Cart",
};
</script>

<template>
  <section class="dashboard-area ptb-60">
    <div class="container">
      <div class="row">
        <div class="col-lg-4">
          <CommonDashboardNavigation />
        </div>

        <div class="col-lg-8">
          <div class="cart-area recent-order">
            <h3 class="mb-3">Order History</h3>
            <form class="cart-controller mb-0">
              <div class="cart-table table-responsive">
                <table class="table table-bordered align-middle">
                  <thead>
                    <tr>
                      <th scope="col">Trash</th>
                      <th scope="col">Product</th>
                      <th scope="col"></th>
                      <th scope="col">Order</th>
                      <th scope="col">Quantity</th>
                      <th scope="col">Status</th>
                      <th scope="col">Total</th>
                    </tr>
                  </thead>

                  <tbody>
                    <tr>
                      <td class="trash">
                        <a href="#" class="remove">
                          <i class="ri-delete-bin-line"></i>
                        </a>
                      </td>
                      <td class="product-thumbnail">
                        <NuxtLink to="/product-details">
                          <img
                            src="~/assets/images/product-6.png"
                            alt="Image"
                          />
                        </NuxtLink>
                      </td>

                      <td class="product-name">
                        <NuxtLink to="/product-details" class="title">
                          Multiplatform Wireless Noise-Cancelling Gaming Headset
                        </NuxtLink>
                      </td>

                      <td class="product-price">
                        <span class="unit-amount">#001</span>
                      </td>

                      <td class="product-price">
                        <span class="unit-amount">01</span>
                      </td>

                      <td class="product-subtotal">
                        <span class="subtotal-amount">Paid</span>
                      </td>

                      <td class="product-subtotal">
                        <span class="subtotal-amount">$279.00</span>
                      </td>
                    </tr>

                    <tr>
                      <td class="trash">
                        <a href="#" class="remove">
                          <i class="ri-delete-bin-line"></i>
                        </a>
                      </td>

                      <td class="product-thumbnail">
                        <NuxtLink to="/product-details">
                          <img
                            src="~/assets/images/product-7.png"
                            alt="Image"
                          />
                        </NuxtLink>
                      </td>

                      <td class="product-name">
                        <NuxtLink to="/product-details" class="title">
                          GPS Smartwatch with Bright Touchscreen Display
                        </NuxtLink>
                      </td>

                      <td class="product-price">
                        <span class="unit-amount">#005</span>
                      </td>

                      <td class="product-price">
                        <span class="unit-amount">02</span>
                      </td>

                      <td class="product-subtotal">
                        <span class="subtotal-amount">Pending</span>
                      </td>

                      <td class="product-subtotal">
                        <span class="subtotal-amount">$119.00</span>
                      </td>
                    </tr>

                    <tr>
                      <td class="trash">
                        <a href="#" class="remove">
                          <i class="ri-delete-bin-line"></i>
                        </a>
                      </td>

                      <td class="product-thumbnail">
                        <NuxtLink to="/product-details">
                          <img
                            src="~/assets/images/product-8.png"
                            alt="Image"
                          />
                        </NuxtLink>
                      </td>

                      <td class="product-name">
                        <NuxtLink to="/product-details" class="title">
                          SAMSUNG 32-Inch Class QLED 4K Q60C Series Quantum HDR
                        </NuxtLink>
                      </td>

                      <td class="product-price">
                        <span class="unit-amount">#009</span>
                      </td>

                      <td class="product-price">
                        <span class="unit-amount">02</span>
                      </td>

                      <td class="product-subtotal">
                        <span class="subtotal-amount">Failed</span>
                      </td>

                      <td class="product-subtotal">
                        <span class="subtotal-amount">$397.00</span>
                      </td>
                    </tr>

                    <tr>
                      <td class="trash">
                        <a href="#" class="remove">
                          <i class="ri-delete-bin-line"></i>
                        </a>
                      </td>

                      <td class="product-thumbnail">
                        <NuxtLink to="/product-details">
                          <img
                            src="~/assets/images/product-9.png"
                            alt="Image"
                          />
                        </NuxtLink>
                      </td>

                      <td class="product-name">
                        <NuxtLink to="/product-details" class="title">
                          Apple MacBook Pro 16.2" with Liquid Retina XDR Display
                        </NuxtLink>
                      </td>

                      <td class="product-price">
                        <span class="unit-amount">#0062</span>
                      </td>

                      <td class="product-price">
                        <span class="unit-amount">02</span>
                      </td>

                      <td class="product-subtotal">
                        <span class="subtotal-amount">Paid</span>
                      </td>

                      <td class="product-subtotal">
                        <span class="subtotal-amount">$3499.00</span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "OrderHistory",
};
</script>

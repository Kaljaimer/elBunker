<template>
  <section class="dashboard-area ptb-60">
    <div class="container">
      <div class="row">
        <div class="col-lg-4">
          <CommonDashboardNavigation />
        </div>

        <div class="col-lg-8">
          <div class="row">
            <div class="col-lg-6 col-md-6">
              <h3 class="order-details-title">Order Details</h3>
              <div class="order-details-area">
                <div class="cart-totals">
                  <h3>Order number: #001</h3>
                  <p>Order created at: 30 August, 2021</p>
                  <NuxtLink to="/order-history" class="read-more">
                    Back History
                  </NuxtLink>
                  <ul>
                    <li>Subtotal <span>$240.00</span></li>
                    <li>Shipping <span>$240.00</span></li>
                    <li>Coupon <span>$00.00</span></li>
                    <li>Total <span>$240.00</span></li>
                    <li>
                      <b>Total</b> <span><b>$240.00</b></span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div class="col-lg-6 col-md-6">
              <div class="billing-address-bar orders-details mb-0">
                <h3>Billing Address</h3>

                <ul>
                  <li class="p-0">Amanda McCarter</li>
                  <li>
                    <span>Address:</span>
                    4 Shady Pines Drive Bowling Green
                  </li>
                </ul>

                <ul>
                  <li>
                    <span>Phone:</span>
                    <a href="tel:270-957-9995">270-957-9995</a>
                  </li>
                  <li>
                    <span>Email:</span>
                    <a href="mailto:contact@tuan.com">contact@tuan.com</a>
                  </li>
                </ul>

                <div class="edit-address">
                  <NuxtLink
                    to="/edit-address"
                    class="btn btn-warning text-white"
                  >
                    Edit Address
                  </NuxtLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "OrderDetails",
};
</script>

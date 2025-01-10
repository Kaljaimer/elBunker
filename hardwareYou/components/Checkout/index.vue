<template>
  <div class="ptb-60">
    <div class="container">
      <div class="row">
        <div class="col-lg-5">
          <div class="checkout-content">
            <h3>Billing Details</h3>
            <div class="form-group mb-4">
              <label class="label">First Name</label>
              <input
                type="text"
                class="form-control"
                placeholder="First Name"
              />
            </div>
            <div class="form-group mb-4">
              <label class="label">Last Name</label>
              <input type="text" class="form-control" placeholder="Last Name" />
            </div>
            <div class="form-group mb-4">
              <label class="label">Email Address</label>
              <input
                type="email"
                class="form-control"
                placeholder="Email Address"
              />
            </div>
            <div class="form-group mb-4">
              <label class="label">Company Name</label>
              <input
                type="text"
                class="form-control"
                placeholder="Company Name (Optional)"
              />
            </div>
            <div class="form-group mb-4">
              <label class="label">Country/Region</label>
              <input
                type="text"
                class="form-control"
                placeholder="Company Name (Optional)"
              />
            </div>
            <div class="form-group mb-4">
              <label class="label">Finding Source</label>
              <select
                class="form-select form-control"
                aria-label="Default select example"
              >
                <option selected>Canada</option>
                <option value="1">United States</option>
                <option value="2">United Kingdom</option>
              </select>
            </div>
            <div class="form-group mb-4">
              <label class="label">Street Address</label>
              <input
                type="text"
                class="form-control"
                placeholder="Address line 1"
              />
            </div>
            <div class="form-group mb-4">
              <input
                type="text"
                class="form-control"
                placeholder="Address line 2"
              />
            </div>
            <div class="form-group mb-4">
              <label class="label">Town/City</label>
              <input type="text" class="form-control" placeholder="Town/City" />
            </div>
            <div class="form-group mb-4">
              <label class="label">Postal Code</label>
              <input
                type="text"
                class="form-control"
                placeholder="Postal Code"
              />
            </div>
            <div class="form-group mb-4">
              <label class="label">Phone</label>
              <input type="text" class="form-control" placeholder="Phone" />
            </div>
            <div class="form-group mb-4">
              <label class="label">Additional Info</label>
              <textarea
                class="form-control"
                placeholder="Notes (Optional)"
                cols="30"
                rows="5"
              ></textarea>
            </div>
          </div>
        </div>

        <div class="col-lg-7">
          <div class="your-order">
            <h3>Your Order</h3>

            <div class="your-order-form table-responsive bg-fffbf5">
              <table class="table table-bordered">
                <thead>
                  <tr>
                    <th scope="col">Product</th>
                    <th scope="col">Quantity</th>
                    <th scope="col">Subtotal</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td class="title">
                      <span class="text-truncate">
                        Multiplatform Wireless Noise-Cancelling Gaming Headset
                      </span>
                    </td>
                    <td class="price">$79 <sub class="text-body">x1</sub></td>
                    <td class="price">$79</td>
                  </tr>
                  <tr>
                    <td class="title">
                      <span class="text-truncate">
                        GPS Smartwatch with Bright Touchscreen Display
                      </span>
                    </td>
                    <td class="price">$59 <sub class="text-body">x2</sub></td>
                    <td class="price">$119</td>
                  </tr>
                  <tr>
                    <td class="title">
                      <span class="text-truncate">
                        SAMSUNG 32-Inch Class QLED 4K Q60C Series Quantum HDR
                      </span>
                    </td>
                    <td class="price">$398 <sub class="text-body">x1</sub></td>
                    <td class="price">$398</td>
                  </tr>
                  <tr>
                    <td class="sub-title">Subtotal</td>
                    <td class="sub-price"></td>
                    <td class="sub-price">$595</td>
                  </tr>
                  <tr class="total">
                    <td class="sub-title">Total</td>
                    <td class="sub-price"></td>
                    <td class="sub-price">$595</td>
                  </tr>
                </tbody>
              </table>

              <h3>Payment Option</h3>
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                />
                <label class="form-check-label" for="flexCheckDefault">
                  Card Payment
                </label>
              </div>
              <div class="form-check mb-0">
                <input
                  class="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckChecked"
                  checked
                />
                <label class="form-check-label" for="flexCheckChecked">
                  Cash on Delivery
                </label>
              </div>

              <div class="mt-5">
                <button class="btn btn-warning text-white">Place Order</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Checkout",
};
</script>

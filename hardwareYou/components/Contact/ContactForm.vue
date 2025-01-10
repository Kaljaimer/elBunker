<template>
  <div class="contact-area pb-60">
    <div class="container">
      <div class="authentication-content p-50 mw-100">
        <div class="row">
          <div class="col-lg-5 mb-4 mb-lg-0">
            <div class="login h-100 text-center">
              <img
                src="~/assets/images/contact-us.png"
                class="h-100 object-fit-cover"
                alt="contact-us"
              />
            </div>
          </div>
          <div class="col-lg-7">
            <div class="authentication-form form-wrap">
              <h3 class="title mb-2">Get In Touch</h3>
              <p>
                Your Gateway to Excellence: Contact Us and Unlock a World of
                Possibilities
              </p>

              <form>
                <div class="row">
                  <div class="col-lg-6">
                    <div class="form-group mb-4">
                      <label class="label">Your Name *</label>
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Enter your name"
                      />
                    </div>
                  </div>
                  <div class="col-lg-6">
                    <div class="form-group mb-4">
                      <label class="label">Your Email *</label>
                      <input
                        type="email"
                        class="form-control"
                        placeholder="Enter your  email"
                      />
                    </div>
                  </div>
                  <div class="col-lg-12">
                    <div class="form-group mb-4">
                      <label class="label">Your Subject *</label>
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Your subject"
                      />
                    </div>
                  </div>
                  <div class="col-lg-12">
                    <div class="form-group mb-4">
                      <label class="label">Your Message *</label>
                      <textarea
                        class="form-control"
                        placeholder="Write message"
                        cols="30"
                        rows="5"
                      ></textarea>
                    </div>
                  </div>

                  <div class="col-lg-12">
                    <div class="form-group mb-0">
                      <button
                        type="submit"
                        class="btn btn-warning btn-pill text-white"
                      >
                        Submit Now
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ContactForm",
};
</script>

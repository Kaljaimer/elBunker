<template>
  <div>
    <v-tabs
      v-model="tab"
      bg-color="white"
      class="product-tabs d-block border-0"
    >
      <v-tab value="description"> Description </v-tab>
      <v-tab value="specification"> Specification </v-tab>
      <v-tab value="reviews"> Reviews </v-tab>
    </v-tabs>

    <v-card-text>
      <v-tabs-window v-model="tab">
        <v-tabs-window-item value="description">
          <div class="description-conetnt">
            <p class="mb-3">
              The Apple MacBook Pro 16.2 is a cutting-edge laptop designed to
              deliver exceptional performance and advanced features for
              professionals and creative enthusiasts. With its sleek aluminum
              body and precision engineering, this MacBook Pro represents the
              pinnacle of Apple's laptop technology.
            </p>
            <p class="mb-3">
              Stay connected with a variety of ports, including Thunderbolt 3,
              USB-C, and audio jacks. These versatile ports support high-speed
              data transfer and external device connections. Enjoy a rich audio
              experience with high-fidelity speakers that deliver clear and
              immersive sound. Perfect for content creators and multimedia
              enthusiasts.
            </p>
            <p>
              Equipped with the latest processors, ample RAM, and
              high-performance graphics, the MacBook Pro 16.2 ensures smooth
              multitasking, fast rendering, and efficient handling of
              resource-intensive tasks. Seamlessly integrate with the macOS
              ecosystem, benefiting from features like iCloud, Siri, and a vast
              selection of applications available on the App Store.
            </p>
          </div>
        </v-tabs-window-item>
        <v-tabs-window-item value="specification">
          <div class="additional-info table-responsive p-0">
            <table class="table table-bordered">
              <tbody>
                <tr>
                  <td class="title text-dark">Brand</td>
                  <td class="price">Apple</td>
                </tr>
                <tr>
                  <td class="title text-dark">Categories</td>
                  <td class="price">Brond New</td>
                </tr>
                <tr>
                  <td class="title text-dark">SKU</td>
                  <td class="price">01</td>
                </tr>
                <tr>
                  <td class="title text-dark">Price</td>
                  <td class="price">$399</td>
                </tr>
              </tbody>
            </table>
          </div>
        </v-tabs-window-item>
        <v-tabs-window-item value="reviews">
          <div class="product-reviews">
            <div class="total-rating-wrap">
              <div class="row">
                <div class="col-lg-3 col-md-3">
                  <span class="title text-start">Average Rating </span>
                  <div class="total-review text-center mb-4 mb-md-0 rounded-0">
                    <h1>4.8</h1>
                    <ul
                      class="d-flex justify-content-center ps-0 list-unstyled"
                    >
                      <li>
                        <i class="ri-star-line"></i>
                      </li>
                      <li>
                        <i class="ri-star-line"></i>
                      </li>
                      <li>
                        <i class="ri-star-line"></i>
                      </li>
                      <li>
                        <i class="ri-star-line"></i>
                      </li>
                      <li>
                        <i class="ri-star-line"></i>
                      </li>
                    </ul>
                    <span>5 Rating</span>
                  </div>
                </div>

                <div class="col-lg-9 col-md-9">
                  <span class="title text-start">Detailed Rating</span>
                  <ul class="ps-0 mb-0 list-unstyled total-rating">
                    <li class="d-flex align-items-center">
                      <div class="d-flex align-items-center">
                        <span class="ms-2">5</span>
                      </div>
                      <div class="w-100 px-2">
                        <v-progress-linear
                          color="blue-accent-2"
                          model-value="100"
                          rounded
                        ></v-progress-linear>
                      </div>
                      <span class="rating">3%</span>
                    </li>
                    <li class="d-flex align-items-center">
                      <div class="d-flex align-items-center">
                        <span class="ms-2">4</span>
                      </div>
                      <div class="w-100 px-2">
                        <v-progress-linear
                          color="blue-accent-2"
                          model-value="70"
                          rounded
                        ></v-progress-linear>
                      </div>
                      <span class="rating">2%</span>
                    </li>
                    <li class="d-flex align-items-center">
                      <div class="d-flex align-items-center">
                        <span class="ms-2">3</span>
                      </div>
                      <div class="w-100 px-2">
                        <v-progress-linear
                          color="blue-accent-2"
                          model-value="0"
                          rounded
                        ></v-progress-linear>
                      </div>
                      <span class="rating">0%</span>
                    </li>
                    <li class="d-flex align-items-center">
                      <div class="d-flex align-items-center">
                        <span class="ms-2">2</span>
                      </div>
                      <div class="w-100 px-2">
                        <v-progress-linear
                          color="blue-accent-2"
                          model-value="0"
                          rounded
                        ></v-progress-linear>
                      </div>
                      <span class="rating">0%</span>
                    </li>
                    <li class="d-flex align-items-center">
                      <div class="d-flex align-items-center">
                        <span class="ms-2">1</span>
                      </div>
                      <div class="w-100 px-2">
                        <v-progress-linear
                          color="blue-accent-2"
                          model-value="0"
                          rounded
                        ></v-progress-linear>
                      </div>
                      <span class="rating">0%</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <h3>Client Feedback</h3>

            <ul class="comment-list ps-0 list-unstyled m-0 pb-5 mb-lg-5">
              <li>
                <div class="d-sm-flex">
                  <div class="flex-shrink-0">
                    <div class="border-style d-inline-block mb-3 mb-sm-0">
                      <img
                        class="rounded-circle wh-108"
                        src="~/assets/images/user-8.jpg"
                        alt="user-1"
                      />
                    </div>
                  </div>
                  <div class="flex-grow-1 ms-0 ms-sm-4">
                    <h4>Maria Cruz</h4>
                    <div class="d-flex align-items-center">
                      <div class="d-flex">
                        <i class="ri-star-fill"></i>
                        <i class="ri-star-fill"></i>
                        <i class="ri-star-fill"></i>
                        <i class="ri-star-fill"></i>
                        <i class="ri-star-fill"></i>
                      </div>
                      <span>(5.00)</span>
                    </div>
                    <p>
                      Pellentesque urna varius nunc risus. Nisl sagittis et id
                      ac faucibus sollicitudin purus. Mattis a ac purus sapien
                      mauris mauris sagittis ut in. Molestie integer luctus nam
                      duis egestas placerat amet netus. Est ut ligula aliquam
                      sed.
                    </p>
                  </div>
                </div>
              </li>
              <li>
                <div class="d-sm-flex">
                  <div class="flex-shrink-0">
                    <div class="border-style d-inline-block mb-3 mb-sm-0">
                      <img
                        class="rounded-10 wh-108 rounded-circle"
                        src="~/assets/images/user-9.jpg"
                        alt="user-2"
                      />
                    </div>
                  </div>
                  <div class="flex-grow-1 ms-0 ms-sm-4">
                    <h4>Anthony Hernandez</h4>
                    <div class="d-flex align-items-center">
                      <div class="d-flex">
                        <i class="ri-star-fill"></i>
                        <i class="ri-star-fill"></i>
                        <i class="ri-star-fill"></i>
                        <i class="ri-star-fill"></i>
                        <i class="ri-star-fill"></i>
                      </div>
                      <span>(5.00)</span>
                    </div>
                    <p>
                      Molestie integer luctus nam duis egestas placerat amet
                      netus. Est ut ligula aliquam sed. Enim tincidunt
                      adipiscing consectetur mauris tincidunt quam. Ipsum
                      aliquet aliquet cras nec in eget tristique. Facilisis
                      purus viverra interdum viverra.
                    </p>
                  </div>
                </div>
              </li>
              <li>
                <div class="d-sm-flex">
                  <div class="flex-shrink-0">
                    <div class="border-style d-inline-block mb-3 mb-sm-0">
                      <img
                        class="rounded-10 wh-108 rounded-circle"
                        src="~/assets/images/user-10.jpg"
                        alt="user-3"
                      />
                    </div>
                  </div>
                  <div class="flex-grow-1 ms-0 ms-sm-4">
                    <h4>Mildred Benally</h4>
                    <div class="d-flex align-items-center">
                      <div class="d-flex">
                        <i class="ri-star-fill"></i>
                        <i class="ri-star-fill"></i>
                        <i class="ri-star-fill"></i>
                        <i class="ri-star-fill"></i>
                        <i class="ri-star-half-fill"></i>
                      </div>
                      <span>(4.80)</span>
                    </div>
                    <p>
                      Nisl sagittis et id ac faucibus sollicitudin purus. Mattis
                      a ac purus sapien mauris mauris sagittis ut in. Molestie
                      integer luctus nam duis egestas placerat amet netus. Est
                      ut ligula aliquam sed.
                    </p>
                  </div>
                </div>
              </li>
            </ul>

            <div class="review-form">
              <h3>Write A Review</h3>
              <div class="d-flex align-items-center rate">
                <i class="ri-star-fill"></i>
                <i class="ri-star-fill"></i>
                <i class="ri-star-fill"></i>
                <i class="ri-star-fill"></i>
                <i class="ri-star-half-fill"></i>
                <span>(3)</span>
              </div>
              <form>
                <div class="row">
                  <div class="col-lg-6">
                    <div class="form-group mb-4">
                      <label class="label">Full Name</label>
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Kim Keener"
                      />
                    </div>
                  </div>
                  <div class="col-lg-6">
                    <div class="form-group mb-4">
                      <label class="label">Email</label>
                      <input
                        type="email"
                        class="form-control"
                        placeholder="hello@tuan.com"
                      />
                    </div>
                  </div>
                  <div class="col-lg-12">
                    <div class="form-group mb-4">
                      <label class="label">Summary</label>
                      <textarea
                        class="form-control"
                        placeholder="Write review summary"
                        cols="30"
                        rows="10"
                      ></textarea>
                    </div>
                  </div>
                  <div class="col-lg-12">
                    <div class="form-group mb-0">
                      <button
                        type="submit"
                        class="btn btn-warning text-white rounded-pill"
                      >
                        Submit Now
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </v-tabs-window-item>
      </v-tabs-window>
    </v-card-text>
  </div>
</template>

<script>
export default {
  name: "ProductDetailsTab",
  data: () => ({
    tab: null,
  }),
};
</script>

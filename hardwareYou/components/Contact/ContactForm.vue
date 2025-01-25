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
              <h3 class="title mb-2">Contáctanos</h3>
              <p>
                <b>Nosotros te contactamos.</b> Déjanos tus datos y nosotros te contactamos de inmediato.
              </p>

              <form>
                <div class="row">
                  <div class="col-lg-6">
                    <div class="form-group mb-4">
                      <label class="label">Nombre *</label>
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Introduce tu nombre"
                      />
                    </div>
                  </div>
                  <div class="col-lg-6">
                    <div class="form-group mb-4">
                      <label class="label">Teléfono *</label>
                      <input
                        type="phone"
                        class="form-control"
                        placeholder="Teléfono"
                      />
                    </div>
                  </div>
                  <div class="col-lg-12">
                    <div class="form-group mb-4">
                      <label class="label">Email *</label>
                      <input
                          type="email"
                          class="form-control"
                          placeholder="Introduce tu email"
                      />
                    </div>
                  </div>
                  <div class="col-lg-12">
                    <div class="form-group mb-4">
                      <label class="label">Asunto *</label>
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Indícanos tu asunto"
                      />
                    </div>
                  </div>
                  <div class="col-lg-12">
                    <div class="form-group mb-4">
                      <label class="label">Mensaje *</label>
                      <textarea
                        class="form-control"
                        placeholder="Escribe tu mensaje"
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
                        Enviar
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

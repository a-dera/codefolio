<template>
  <div>
    <Header
      :resume-url="navbar.resumeUrl"
      :external-links="navbar.externalLinks"
    />
    <main class="main">
      <section class="contact">
        <div class="contact__heading text-center my-3">
          <h1>Contact</h1>
        </div>
        <!-- Add your custom action here (i.e. formspree.io) -->
        <div class="contact__form-container">
          <form action="#" method="POST" class="contact__form">
            <div class="mb-3">
              <label for="fullname" class="form-label contact__label"
                >Full name</label
              >
              <input
                id="fullname"
                type="text"
                class="form-control contact__input"
                name="fullname"
                required
              />
            </div>
            <div class="mb-3">
              <label for="email" class="form-label contact__label">Email</label>
              <input
                id="email"
                type="email"
                class="form-control contact__input"
                name="email"
                required
              />
            </div>
            <div class="mb-3">
              <label for="subject" class="form-label contact__label"
                >Subject</label
              >
              <input
                id="subject"
                type="text"
                class="form-control contact__input"
                name="subject"
                required
              />
            </div>
            <div class="mb-3">
              <label for="message" class="form-label contact__label"
                >Message</label
              >
              <textarea
                id="message"
                class="form-control contact__textarea"
                name="message"
                rows="4"
                required
              ></textarea>
            </div>
            <div class="mb-3 d-flex justify-content-end">
              <Button primary
                >Submit <Icon name="paperplane" class="ms-1"
              /></Button>
            </div>
          </form>
        </div>
        <div class="contact__links">
          <a class="contact__link" href="mailto:someuser@mail.com">
            <Icon class="contact__icon" name="gmail" />
          </a>
          <a
            class="contact__link"
            href="https://twitter.com/username"
            target="_blank"
          >
            <Icon class="contact__icon" name="twitter" />
          </a>
          <a
            class="contact__link"
            href="https://github.com/username"
            target="_blank"
          >
            <Icon class="contact__icon" name="github" />
          </a>
          <a class="contact__link" href="username@outlook.com" target="_blank">
            <Icon class="contact__icon" name="skype" />
          </a>
        </div>
      </section>
    </main>
    <Footer />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  async asyncData({ $content }) {
    const skills = await $content('skills').fetch()
    const navbar = await $content('navbar').fetch()
    return {
      skills,
      navbar,
    }
  },
})
</script>

<style lang="scss" scoped>
@import '@/scss/abstracts';
.contact {
  padding: pxToRem(10);
  @include full-height;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: space-between;
  &__form-container {
    display: flex;
    justify-content: center;
  }
  &__form {
    padding: pxToRem(16);
    flex-basis: pxToRem(650);
    @include media-breakpoint-up(lg) {
      flex-basis: pxToRem(750);
    }
  }
  &__icon {
    width: 2em;
    height: 2em;
  }
  &__links {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    grid-gap: pxToRem(8);
    padding: pxToRem(24);
    z-index: 200;
  }
  &__link {
    backface-visibility: hidden;
    transform: translateZ(0);
    display: inline-flex;
    color: $gray-6;
    transition: all 0.2s ease;
    @include hoctive {
      transform: scale(1.2);
      color: $gray-8;
    }
  }

  &__label {
    color: $gray-6;
    font-size: pxToRem(15);
  }
  &__input {
    min-height: pxToRem(45);
  }
  &__input,
  &__textarea {
    transition: border 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
    border: 1px solid rgba($gray-2, 0.7);
    @include hocus {
      border: 1px solid rgba($primary, 0.3);
      box-shadow: 0 0 pxToRem(5) 0 rgba($primary, 0.2);
    }
  }
}
</style>

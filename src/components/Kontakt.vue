<template>
  <div id="kontakt" @click.stop="">
    <form class="form" @submit.prevent="onSubmit">
      <input
        required
        name="name"
        v-model="contact.name"
        placeholder="Name"
        type="text"
        autocomplete="off"
      />
      <br />
      <input
        required
        name="email"
        v-model="contact.email"
        placeholder="E-mail"
        type="email"
        autocomplete="off"
      />
      <br />
      <br />
      <textarea
        name="message"
        v-model="contact.message"
        rows="4"
        placeholder="Message"
      ></textarea>
      <br />
      <br />
      <button class="button">Send</button>
    </form>
  </div>
</template>

<script>
import emailjs from 'emailjs-com';
export default {
  name: 'Kontakt',
  data: function() {
    return {
      contact: {
        name: '',
        email: '',
        message: '',
      },
      isSending: false,
    };
  },
  methods: {
    /**
     * Clear the form
     */
    clearForm() {
      for (let field in this.contact) {
        this.contact[field] = '';
      }
    },

    /**
     * Handler for submit
     */
    onSubmit() {
      this.isSending = true;

      emailjs
        .send(
          'service_np5no7q',
          'template_ok66zpr',
          {
            from_name: this.contact.name,
            from_email: this.contact.email,
            message: this.contact.message,
          },
          'user_WWt88HQyee8v0EhVrqOc3'
        )
        .then(
          function(res) {
            console.log(res);
            this.$alert('Nachricht gesendet!');
            this.clearForm();
          }.bind(this),
          function(error) {
            console.log(error);
            this.$alert('Nachricht konnte nicht gesendet werden.');
          }.bind(this)
        );
    },
  },
};
</script>

<style lang="sass" scoped>
#kontakt
  display: flex
  flex-direction: row
  justify-content: space-around
  position: relative
  width: 100%
  height: 80%
  padding-top: 150px
  z-index: 100
  form
    width: 500px
  input, textarea
    font-family: "letter-gothic-std"
    font-size: 18px
    width: 100%
  textarea
    height: 300px
@media only screen and (max-width: 1000px)
    .kontakt
        padding-top: 0px
</style>

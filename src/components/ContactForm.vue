<template>
    <v-form ref="form" v-model="valid" lazy-validation>
        <v-text-field
                v-model="name"
                :rules="nameRules"
                :counter="10"
                label="Name"
                required
        ></v-text-field>
        <v-text-field
                v-model="email"
                :rules="emailRules"
                label="E-mail"
                required
        ></v-text-field>
        <v-btn
                :disabled="!valid"
                @click="submit"
        >
            submit
        </v-btn>
        <v-btn @click="clear">clear</v-btn>
    </v-form>
</template>

<script>
  export default {
    methods: {
      submit() {
        if (this.$refs.form.validate()) {
          // Native form submission is not yet supported
          // axios.post('/api/submit', {
          //   name: this.name,
          //   email: this.email,
          //   select: this.select,
          //   checkbox: this.checkbox
          // })
        }
      },
      clear() {
        this.$refs.form.reset()
      }
    }
  }
</script>

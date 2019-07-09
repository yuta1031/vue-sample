<template>
    <v-container id="contact">
        <v-layout
                text-xs-center
                wrap
        >
            <v-flex mb-4>
                <h2 class="headline font-weight-bold mb-3">
                    お問い合わせ
                </h2>
                <p class="subheading font-weight-regular">
                    For help and collaboration with other Vuetify developers,
                    <br>please join our online
                    <a href="https://community.vuetifyjs.com" target="_blank">Discord Community</a>
                </p>
            </v-flex>

            <v-flex
                    xs12
                    mb-5
            >
                <ContactForm/>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
  import ContactForm from './ContactForm'

  export default {
    components: {
      ContactForm
    },
    data: () => ({
      ecosystem: [
        {
          text: 'vuetify-loader',
          href: 'https://github.com/vuetifyjs/vuetify-loader'
        },
        {
          text: 'github',
          href: 'https://github.com/vuetifyjs/vuetify'
        },
        {
          text: 'awesome-vuetify',
          href: 'https://github.com/vuetifyjs/awesome-vuetify'
        }
      ],
      importantLinks: [
        {
          text: 'Documentation',
          href: 'https://vuetifyjs.com'
        },
        {
          text: 'Chat',
          href: 'https://community.vuetifyjs.com'
        },
        {
          text: 'Made with Vuetify',
          href: 'https://madewithvuetifyjs.com'
        },
        {
          text: 'Twitter',
          href: 'https://twitter.com/vuetifyjs'
        },
        {
          text: 'Articles',
          href: 'https://medium.com/vuetify'
        }
      ],
      whatsNext: [
        {
          text: 'Explore components',
          href: 'https://vuetifyjs.com/components/api-explorer'
        },
        {
          text: 'Select a layout',
          href: 'https://vuetifyjs.com/layout/pre-defined'
        },
        {
          text: 'Frequently Asked Questions',
          href: 'https://vuetifyjs.com/getting-started/frequently-asked-questions'
        }

      ]
    })
  }
</script>

<style>

</style>

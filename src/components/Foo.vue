<template>
    <v-container id="foo">
        <v-layout
                text-xs-center
                wrap
        >
            <v-flex xs12>
                <v-img
                        :src="require('../assets/logo.svg')"
                        class="my-3"
                        contain
                        height="200"
                ></v-img>
            </v-flex>

            <v-flex mb-4>
                <h1 class="display-2 font-weight-bold mb-3">
                    コンテンツ2
                </h1>
                <p class="subheading font-weight-regular">
                    テキストテキストテキストテキストテキストテキスト
                </p>
            </v-flex>

        </v-layout>
    </v-container>
</template>

<script>
  export default {
    data: () => ({
      //
    })
  }
</script>

<style>

</style>

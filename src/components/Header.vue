<template>
    <v-toolbar app dark class="teal">
        <v-toolbar-title class="headline">
            <router-link tag="span" to="/">
                <span>Vue </span>
                <span class="font-weight-light">Sample Website</span>
            </router-link>
        </v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn
                flat
                target="_blank"
                v-on:click="$vuetify.goTo('#about', scrollOpt)"
        >
            <span class="">About</span>
        </v-btn>
        <v-btn
                flat
                target="_blank"
                v-on:click="$vuetify.goTo('#foo', scrollOpt)"
        >
            <span class="">Content2</span>
        </v-btn>
        <v-btn
                flat
                target="_blank"
        >
            <router-link tag="span" to="/work">work</router-link>
        </v-btn>
        <v-btn
                flat
                target="_blank"
                v-on:click="$vuetify.goTo('#contact', scrollOpt)"
        >
            <span class="">Contact</span>
        </v-btn>
    </v-toolbar>
</template>

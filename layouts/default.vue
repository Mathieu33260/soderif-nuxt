<template>
  <v-app style="background-image: url('/bg.jpg');">

    <v-toolbar fixed flat app class="pa-3">

      <v-layout row justify-space-around>
        <v-flex class="text-xs-center">
          <nuxt-link to="/">
            <img src="~/assets/soderif.png">
          </nuxt-link>
        </v-flex>
        <v-flex class="text-xs-center">
          <v-btn large color="dark" class="large-text" flat nuxt to="/metier">NOTRE MÉTIER</v-btn>
          <v-btn large color="dark" class="large-text" flat nuxt to="/projets">PROJETS</v-btn>
        </v-flex>
      </v-layout>

    </v-toolbar>

    <v-content>
        <nuxt />
    </v-content>

    <v-footer dark class="pa-5">
      <v-layout row>
        <v-flex xs12 class="text-xs-center">
          Site créé par <a target="_blank" href="https://mathieu-dumez.herokuapp.com/" style="color: white;">MATHIEU DUMEZ</a>
        </v-flex>

        <v-flex xs12 class="text-xs-center">
          Copyright &copy; - SODERIF 2019
        </v-flex>
      </v-layout>
    </v-footer>
  </v-app>
</template>

<script>
  export default {
    data() {
      return {
        title: 'Sodérif',
      }
    }
  }
</script>

<style scoped>
  .large-text {
    font-size: 130%;
  }
</style>

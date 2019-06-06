<template>
    <v-layout row justify-center class="pt-2">
        <v-flex xs8 class="mt-5">
            <v-card>

                <v-carousel height="500">
                    <v-carousel-item
                            :src="require('@/assets/Pathenay/thumbnail_MDP4.jpg')"
                            max-height="500"
                    ></v-carousel-item>

                    <v-carousel-item
                            :src="require('@/assets/Pathenay/thumbnail_MDP3.jpg')"
                            max-height="500"
                    ></v-carousel-item>

                    <v-carousel-item
                            :src="require('@/assets/Pathenay/thumbnail_MDP2.jpg')"
                            max-height="500"
                    ></v-carousel-item>

                    <v-carousel-item
                            :src="require('@/assets/Pathenay/thumbnail_MDP1.jpg')"
                            max-height="500"
                    ></v-carousel-item>
                </v-carousel>

                <v-card-title primary-title class="justify-space-around">
                    <h3 class="headline">Présentation ouvrage public Parthenay</h3>
                </v-card-title>

                <v-card-text>
                    <ul>
                        <li>bail emphytéotique administratif avec Convention de mise à disposition</li>
                        <li>Ouvrage Maison de la Partenaire</li>
                        <li>Lieu :Parthenay (79200)</li>
                        <li>Budget opération : 5 200 000 € HT</li>
                        <li>Livraison ouvrage programmé au 2 ième trimestre 2021</li>
                    </ul>
                </v-card-text>
            </v-card>
        </v-flex>
    </v-layout>
</template>

<script>
    export default {
        name: "parthenay"
    }
</script>

<style scoped>

</style>

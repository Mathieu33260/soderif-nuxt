<template>
    <v-layout row justify-center class="pt-2">
        <v-flex xs8 class="mt-5">
            <v-card>
                <v-img
                        :src="require('@/assets/Niort/thumbnail_perspective_Niort_Rue_Charles_Darwin.jpg')"
                        max-height="500"
                ></v-img>

                <v-card-title primary-title class="justify-space-around">
                    <h3 class="headline">Présentation Ouvrage tertiaire Niort</h3>
                </v-card-title>

                <v-card-text>
                    <ul>
                        <li>Vente en l’état futur d’achèvement</li>
                        <li>Lieu : Niort ZAC Terre de sport Avenue de limoges</li>
                        <li>Budget opération : 2 500 000 € HT</li>
                        <li>Livraison ouvrage programmé au 2 ième trimestre 2020</li>
                    </ul>
                </v-card-text>
            </v-card>
        </v-flex>
    </v-layout>
</template>

<script>
    export default {
        name: "niort"
    }
</script>

<style scoped>

</style>

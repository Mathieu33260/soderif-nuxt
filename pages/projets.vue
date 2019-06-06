<template>
    <div>
        <v-layout row justify-center class="mt-5 pt-5">
            <v-flex xs6 class="text-xs-center">
                <nuxt-link to="/parthenay">
                    <v-hover>
                        <v-avatar
                                slot-scope="{ hover }"
                                :size="500"
                                color="grey lighten-4"
                        >
                            <v-img aspect-ratio="1" :src="require('@/assets/Pathenay/thumbnail_MDP1.jpg')" alt="Parthenay">
                                <v-expand-transition>
                                    <div
                                            v-if="hover"
                                            class="d-flex transition-fast-in-fast-out indigo darken-4 v-card--reveal display-3 white--text"
                                            style="height: 100%;"
                                    >
                                        Parthenay
                                    </div>
                                </v-expand-transition>
                            </v-img>
                        </v-avatar>
                    </v-hover>
                </nuxt-link>
            </v-flex>

            <v-flex xs6 class="text-xs-center">
                <nuxt-link to="/niort">
                    <v-hover>
                        <v-avatar
                                slot-scope="{ hover }"
                                :size="500"
                                color="grey lighten-4"
                        >
                            <v-img aspect-ratio="1" :src="require('@/assets/Niort/thumbnail_perspective_Niort_Rue_Charles_Darwin.jpg')" alt="Niort">
                                <v-expand-transition>
                                    <div
                                            v-if="hover"
                                            class="d-flex transition-fast-in-fast-out indigo darken-4 v-card--reveal display-3 white--text"
                                            style="height: 100%;"
                                    >
                                        Niort
                                    </div>
                                </v-expand-transition>
                            </v-img>
                        </v-avatar>
                    </v-hover>
                </nuxt-link>
            </v-flex>
        </v-layout>
    </div>
</template>

<script>
    export default {
        name: "projets"
    }
</script>

<style scoped>
    .v-card--reveal {
        align-items: center;
        bottom: 0;
        justify-content: center;
        opacity: .6;
        position: absolute;
        width: 100%;
    }
</style>

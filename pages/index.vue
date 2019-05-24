<template>
    <v-layout row justify-center>
        <v-flex xs9>
            <v-timeline>
                <v-timeline-item
                        color="indigo darken-4"
                        fill-dot
                        right
                        :icon="'settings'"
                >
                    <v-card>
                        <v-card-title class="indigo darken-4 justify-space-around">
                            <h2 class="display-1 white--text font-weight-light">Ingénierie immobilière</h2>
                        </v-card-title>
                        <v-container>
                            <v-layout>
                                <v-flex xs12>
                                    Opérations de construction pour les entreprises dans les domaines suivants : bureaux, hôtels,
                                    résidences services, industrie et logistique.
                                </v-flex>
                            </v-layout>
                        </v-container>
                    </v-card>
                </v-timeline-item>

                <v-timeline-item
                        color="blue darken-3"
                        fill-dot
                        left
                        :icon="'build'"
                >
                    <v-card>
                        <v-card-title class="blue darken-3 justify-space-around">
                            <h2 class="display-1 mr-3 white--text font-weight-light">Savoir-faire</h2>
                        </v-card-title>
                        <v-container>
                            <v-layout>
                                <v-flex xs12>
                                    Pour chaque opération nous assurons la conception, le calcul, la prescription et l’exécution
                                    des opérations jusqu’à l’achèvement.
                                </v-flex>
                            </v-layout>
                        </v-container>
                    </v-card>
                </v-timeline-item>

                <v-timeline-item
                        color="light-blue darken-1"
                        fill-dot
                        right
                        :icon="'question_answer'"
                >
                    <v-card>
                        <v-card-title class="light-blue darken-1 justify-space-around">
                            <h2 class="display-1 white--text font-weight-light">Compréhension mutuelle</h2>
                        </v-card-title>
                        <v-container>
                            <v-layout>
                                <v-flex xs12>
                                    Dossiers sont réalisés sous BIM (modélisation 3D des ouvrages) ce qui permet de
                                    bien communiquer avec nos preneurs sur les différentes phases du projet avant leur
                                    réalisation.
                                </v-flex>
                            </v-layout>
                        </v-container>
                    </v-card>
                </v-timeline-item>

                <v-timeline-item
                        color="green accent-3"
                        fill-dot
                        left
                        :icon="'security'"
                >
                    <v-card>
                        <v-card-title class="green accent-3 justify-space-around">
                            <h2 class="display-1 mr-3 white--text font-weight-light">Garanties</h2>
                        </v-card-title>
                        <v-container>
                            <v-layout>
                                <v-flex xs12>
                                    Tous les ouvrages sont couverts par les garanties constructeurs type dommage ouvrage
                                    et responsabilité civile et décennale.
                                </v-flex>
                            </v-layout>
                        </v-container>
                    </v-card>
                </v-timeline-item>

                <v-timeline-item
                        color="green accent-4"
                        fill-dot
                        right
                        :icon="'check_circle'"
                >
                    <v-card>
                        <v-card-title class="green accent-4 justify-space-around">
                            <h2 class="display-1 white--text font-weight-light">Qualité</h2>
                        </v-card-title>
                        <v-container>
                            <v-layout>
                                <v-flex xs12>
                                    Notre métier est de valoriser l’ouvrage à travers des choix et une optimisation
                                    technique cohérente afin de devenir un puissant levier de création de valeur au
                                    service de la performance opérationnelle et financière, mais aussi et avant tout un
                                    lieu pour la qualité de vie des utilisateurs.
                                </v-flex>
                            </v-layout>
                        </v-container>
                    </v-card>
                </v-timeline-item>

            </v-timeline>
        </v-flex>
    </v-layout>
</template>

<script>

export default {
    name: 'index',
}
</script>

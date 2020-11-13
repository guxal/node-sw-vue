<template>
  <v-sheet rounded="lg">
    <v-row>
      <v-col v-for="card in cards" :key="card" cols="12" class="pa-0">
        <v-card>
          <v-subheader>{{ card }}</v-subheader>

          <v-list two-line>
            <template v-for="(person, index) in personList">
              <v-list-item :key="person._id">
                <v-list-item-avatar color="grey darken-1"> </v-list-item-avatar>

                <v-list-item-content>
                  <v-list-item-title
                    ><b>Name:</b> <i>{{ person.name }}</i></v-list-item-title
                  >

                  <v-list-item-subtitle>
                    <strong>Weight:</strong> {{ person.weight }} | &nbsp;
                    <strong>Hair Color:</strong> {{ person.hair_color }} |
                    &nbsp; <strong>Home World:</strong> {{ person.home_world }}
                  </v-list-item-subtitle>
                </v-list-item-content>

                <v-list-item-action>
                  <v-btn-toggle multiple>
                    <v-btn
                      fab
                      dark
                      small
                      color="primary"
                      value="edit"
                      @click="editPerson(person)"
                    >
                      <v-icon>mdi-pencil</v-icon>
                    </v-btn>

                    <v-btn
                      class="mx-2"
                      fab
                      dark
                      small
                      color="red"
                      value="remove"
                      @click="deletePerson(person)"
                    >
                      <v-icon>mdi-delete</v-icon>
                    </v-btn>
                  </v-btn-toggle>
                </v-list-item-action>
              </v-list-item>

              <v-divider
                v-if="index !== 6"
                :key="`divider-${index}`"
                inset
              ></v-divider>
            </template>

            <div class="text-center">
              <v-pagination
                v-model="page"
                :length="15"
                :total-visible="7"
              ></v-pagination>
            </div>
          </v-list>
        </v-card>
      </v-col>
    </v-row>

    <!---->
  </v-sheet>
</template>

<script>
import { mapState, mapActions, mapMutations } from "vuex";
// export default {
//   computed: mapState({
//     products: state => state.products.all
//   }),
//   methods: mapActions("cart", ["addProductToCart"]),
//   created() {
//     this.$store.dispatch("products/getAllProducts");
//   }
// };

export default {
  name: "PersonList",
  data: () => ({
    cards: ["Person"],
    page: 1
  }),

  computed: mapState("person", {
    personList: state => state.person
  }),

  methods: {
    ...mapMutations(["form/setData"]),
    ...mapActions(["getAllPerson", "removePerson"]),
    deletePerson(person) {
      this.$store.dispatch("person/removePerson", person._id);
    },
    editPerson(person) {
      this.$store.commit("form/setData", person);
    }
  },

  created() {
    this.$store.dispatch("person/getAllPerson");
    console.log(this.personList);
  }
  // computed: {
  //   ...mapState({
  //     checkoutStatus: state => state.cart.checkoutStatus
  //   }),
  //   ...mapGetters("cart", {
  //     products: "cartProducts",
  //     total: "cartTotalPrice"
  //   })
  // },
  // methods: {
  //   checkout(products) {
  //     this.$store.dispatch("cart/checkout", products);
  //   }
  // }
};
</script>

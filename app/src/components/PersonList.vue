<template>
  <!--<ul>
    <li v-for="product in products" :key="product.id">
      {{ product.title }} - {{ product.price | currency }}
      <br />
      <button :disabled="!product.inventory" @click="addProductToCart(product)">
        Add to cart
      </button>
    </li>
  </ul>-->

  <v-sheet rounded="lg">
    <!--  -->

    <v-row>
      <v-col v-for="card in cards" :key="card" cols="12" class="pa-0">
        <v-card>
          <v-subheader>{{ card }}</v-subheader>

          <v-list two-line>
            <template v-for="n in 6">
              <v-list-item :key="n">
                <v-list-item-avatar color="grey darken-1"> </v-list-item-avatar>

                <v-list-item-content>
                  <v-list-item-title>Message {{ n }}</v-list-item-title>

                  <v-list-item-subtitle>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Nihil repellendus distinctio similique
                  </v-list-item-subtitle>
                </v-list-item-content>

                <v-list-item-action>
                  <v-btn-toggle v-model="toggle_exclusive" multiple>
                    <v-btn fab dark small color="primary" value="recent">
                      <v-icon>mdi-pencil</v-icon>
                    </v-btn>

                    <v-btn
                      class="mx-2"
                      fab
                      dark
                      small
                      color="red"
                      value="favorites"
                    >
                      <v-icon>mdi-delete</v-icon>
                    </v-btn>
                  </v-btn-toggle>
                </v-list-item-action>
              </v-list-item>

              <v-divider v-if="n !== 6" :key="`divider-${n}`" inset></v-divider>
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
import { mapState, mapActions } from "vuex";
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
    select: null,
    items: ["Item 1", "Item 2", "Item 3", "Item 4"],
    checkbox: null,

    cards: ["Person"],
    drawer: null,
    links: [
      ["mdi-inbox-arrow-down", "Inbox"],
      ["mdi-send", "Send"],
      ["mdi-delete", "Trash"],
      ["mdi-alert-octagon", "Spam"]
    ],
    page: 1
  }),

  computed: mapState({
    person: state => state.person.all
  }),

  methods: mapActions(["getAllPerson"]),

  created() {
    this.$store.dispatch("person/getAllPerson");
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

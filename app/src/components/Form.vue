<template>
  <!--<div class="cart">
    <h2>Your Cart</h2>
    <p v-show="!products.length"><i>Please add some products to cart.</i></p>
    <ul>
      <li v-for="product in products" :key="product.id">
        {{ product.title }} - {{ product.price | currency }} x
        {{ product.quantity }}
      </li>
    </ul>
    <p>Total: {{ total | currency }}</p>
    <p>
      <button :disabled="!products.length" @click="checkout(products)">
        Checkout
      </button>
    </p>
    <p v-show="checkoutStatus">Checkout {{ checkoutStatus }}.</p>
  </div>-->

  <v-card elevation="2" class="pa-4">
    <v-card-title>
      <h2>Create Person SW</h2>
    </v-card-title>
    <!--<v-list color="transparent" class="pa-3">-->

    <!--<v-list-item v-for="n in 5" :key="n" link>
                  <v-list-item-content>
                    <v-list-item-title> List Item {{ n }} </v-list-item-title>
                  </v-list-item-content>
                </v-list-item>-->

    <!---------------------------->

    <validation-observer ref="observer" v-slot="{ invalid }">
      <form @submit.prevent="submit">
        <validation-provider
          v-slot="{ errors }"
          name="Name"
          rules="required|max:20"
        >
          <v-text-field
            v-model="form_data.name"
            :counter="20"
            :error-messages="errors"
            label="Name"
            required
          ></v-text-field>
        </validation-provider>
        <validation-provider v-slot="{ errors }" name="weight" rules="required">
          <v-text-field
            v-model="form_data.weight"
            :error-messages="errors"
            label="Weight"
            required
          ></v-text-field>
        </validation-provider>
        <validation-provider
          v-slot="{ errors }"
          name="hair_color"
          rules="required"
        >
          <v-text-field
            v-model="form_data.hair_color"
            :error-messages="errors"
            label="Hair Color"
            required
          ></v-text-field>
        </validation-provider>
        <validation-provider
          v-slot="{ errors }"
          rules="required"
          name="home_world"
        >
          <v-text-field
            v-model="form_data.home_world"
            :error-messages="errors"
            label="Home World"
            required
          ></v-text-field>
        </validation-provider>

        <v-btn class="mr-4" type="submit" :disabled="invalid" v-if="update">
          create
        </v-btn>

        <v-btn class="mr-4" type="submit" :disabled="invalid" v-if="!update">
          update
        </v-btn>
        <v-btn @click="clear">
          clear
        </v-btn>
      </form>
    </validation-observer>
    <!---------------------------->

    <!-- <v-divider class="my-2"></v-divider>

                <v-list-item link color="grey lighten-4">
                  <v-list-item-content>
                    <v-list-item-title>
                      Refresh
                    </v-list-item-title>
                  </v-list-item-content>
                </v-list-item>-->

    <!-- </v-list> -->
  </v-card>
</template>

<script>
// import { mapGetters, mapState } from "vuex";
import { required, email, max } from "vee-validate/dist/rules";
import {
  extend,
  ValidationObserver,
  ValidationProvider,
  setInteractionMode
} from "vee-validate";
import { mapMutations, mapState, mapActions } from "vuex";

setInteractionMode("eager");

extend("required", {
  ...required,
  message: "{_field_} can not be empty"
});

extend("max", {
  ...max,
  message: "{_field_} may not be greater than {length} characters"
});

extend("email", {
  ...email,
  message: "Email must be valid"
});

export default {
  name: "Form",
  components: {
    ValidationProvider,
    ValidationObserver
  },
  data: () => ({
    //form_data: {
    //  name: "",
    //  weight: "",
    //  hair_color: "",
    //  home_world: ""
    //}
  }),
  computed: mapState("form", {
    form_data: state => state.data,
    update: state => {
      return state.data._id == "";
    }
  }),
  methods: {
    ...mapMutations(["form/clearData"]),
    ...mapActions("form", ["createPerson", "updatePerson"]),
    submit() {
      this.$refs.observer.validate();
      // console.log(this.$data);
      // let data = {
      //     "name": this.name,
      //     "weight" : this.weight,
      //     "hair_color": this.hair_color,
      //     "home_world": this.home_world
      // }
      // console.log(data);
      if (this.form_data._id != "")
        this.updatePerson({ person: this.form_data, id: this.form_data._id });
      else this.createPerson(this.form_data);
    },
    clear() {
      console.log("clear");
      this.$store.commit("form/clearData");
      // .$refs.observer.reset();
    }
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

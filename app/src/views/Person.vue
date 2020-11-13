<template>
  <v-container>
    <v-row>
      <v-col cols="4">
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
                  v-model="name"
                  :counter="20"
                  :error-messages="errors"
                  label="Name"
                  required
                ></v-text-field>
              </validation-provider>
              <validation-provider
                v-slot="{ errors }"
                name="weight"
                rules="required"
              >
                <v-text-field
                  v-model="weight"
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
                  v-model="hair_color"
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
                  v-model="home_world"
                  :error-messages="errors"
                  label="Home World"
                  required
                ></v-text-field>
              </validation-provider>

              <v-btn class="mr-4" type="submit" :disabled="invalid">
                create
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
      </v-col>

      <v-col class="col-8">
        <v-sheet rounded="lg">
          <!--  -->

          <v-row>
            <v-col v-for="card in cards" :key="card" cols="12" class="pa-0">
              <v-card>
                <v-subheader>{{ card }}</v-subheader>

                <v-list two-line>
                  <template v-for="n in 6">
                    <v-list-item :key="n">
                      <v-list-item-avatar color="grey darken-1">
                      </v-list-item-avatar>

                      <v-list-item-content>
                        <v-list-item-title>Message {{ n }}</v-list-item-title>

                        <v-list-item-subtitle>
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit. Nihil repellendus distinctio similique
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

                    <v-divider
                      v-if="n !== 6"
                      :key="`divider-${n}`"
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
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { required, email, max } from "vee-validate/dist/rules";
import {
  extend,
  ValidationObserver,
  ValidationProvider,
  setInteractionMode
} from "vee-validate";

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
  name: "Person",

  components: {
    ValidationProvider,
    ValidationObserver
  },
  data: () => ({
    name: "",
    email: "",
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
    weight: "",
    hair_color: "",
    home_world: "",
    page: 1
  }),

  methods: {
    submit() {
      this.$refs.observer.validate();
    },
    clear() {
      this.name = "";
      this.email = "";
      this.select = null;
      this.checkbox = null;
      this.$refs.observer.reset();
    }
  }
};
</script>

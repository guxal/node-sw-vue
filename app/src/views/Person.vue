<template>
  <v-container>
    <v-row>
      <v-col cols="4">
        <Form />
      </v-col>

      <v-col class="col-8">
        <PersonList />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Form from "@/components/Form.vue";
import PersonList from "@/components/PersonList.vue";

export default {
  name: "Person",

  components: {
    Form,
    PersonList
  }
};
</script>

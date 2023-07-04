<template>
  <form @submit.prevent="onSubmit">
    <label for="test-input">
      <input data-testid="name-input" type="text" v-model="name" />
    </label>
    <button type="submit">Submit</button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      name: "",
    };
  },
  methods: {
    onSubmit() {
      this.$emit("formSubmitted", { name: this.name });
    },
  },
};
</script>

<template>
  <h1>{{ text }}</h1>
</template>

<script>
export default {
  Name: "ResumeTitle",
  props: {
    text: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped>
h1 {
  font-weight: 1000;
  font-size: 30px;
  letter-spacing: 6px;
  margin: 0 0 1em 0;
  text-transform: uppercase;
}
</style>

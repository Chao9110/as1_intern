<template>
  <p>{{ text }}</p>
</template>

<script>
export default {
  name: "R_Paragraph",

  props: {
    text: {
      type: [String, Number],
      required: true,
    },
  },
};
</script>

<style scoped>
p {
  line-height: 22px;
  margin: 0;
  font-size: 15px;
  color: #303030;
}
</style>

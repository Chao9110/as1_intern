<template>
  <h3>{{ text }}</h3>
</template>

<script>
export default {
  Name: "HeadLine",

  props: {
    text: {
      type: String,
      required: true,
    },
  },
};
</script>

<style>
h3 {
  margin: 0;
  letter-spacing: 2px;
  line-height: 22px;
  font-size: 20px;
  font-weight: 800;
  text-transform: uppercase;
}
</style>

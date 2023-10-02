<template>
  <ResumeTitle class="ti" :text="profileLabel" />
  <R_Paragraph :text="profileText" />
</template>

<script>
import ResumeTitle from "@/components/ResumeTitle.vue";
import R_Paragraph from "@/components/R_Paragraph.vue";
import { getLanguage } from "@/api/resumeService"; // 请替换为正确的路径

export default {
  name: "R_Profile",

  components: { ResumeTitle, R_Paragraph },

  computed: {

    profileLabel() {
      return "自我介紹"; // 直接使用默认的英文标签
    },

    profileText() {
      // 获取 profile 部分的文本
      const data = getLanguage().data;
      return data.profile;
    },
  },
};
</script>

<style>
.ti{
  margin-top: 5%;
}
</style>

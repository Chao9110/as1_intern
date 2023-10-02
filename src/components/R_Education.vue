<template>
  <ResumeTitle :text="educationLabel" />
  <section class="education-section" v-for="(education, index) in educations" :key="index">
    <HeadLine :text="education.degreeTitle" />
    <R_Paragraph :text="education.institutionName" />
    <R_Paragraph :text="education.studyDirection" />
  </section>
</template>

<script>
import ResumeTitle from "@/components/ResumeTitle.vue";
import HeadLine from "@/components/HeadLine.vue";
import R_Paragraph from "@/components/R_Paragraph.vue";
import { getLanguage } from "@/api/resumeService"; // 请替换为正确的路径

export default {
  Name: "R_Education",

  components: { ResumeTitle, HeadLine, R_Paragraph },

  computed: {


    educationLabel() {
      return "學歷";
    },

    educations() {
      const data = getLanguage().data;
      return data.education;
    },
  },
};
</script>

<style scoped>
.education-section {
  margin-bottom: 2em;
  padding: 3%;
}

.education-section:last-child {
  margin-bottom: 0;
}
</style>

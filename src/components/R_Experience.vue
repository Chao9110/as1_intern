<template>
  <ResumeTitle :text="experienceLabel" />
  <section class="experience-section" v-for="(experience, index) in experiences" :key="index">
    <section class="work-position-section">
      <SubTitle :text="experience.workPosition" />
      <SubTitle :text="experience.workPeriod" />
    </section>

    <HeadLine :text="experience.companyName" />
    <R_Paragraph :text="experience.description" />
  </section>
</template>

<script>
import ResumeTitle from "@/components/ResumeTitle.vue";
import SubTitle from "@/components/SubTitle.vue";
import HeadLine from "@/components/HeadLine.vue";
import R_Paragraph from "@/components/R_Paragraph.vue";
import { getLanguage } from "@/api/resumeService"; // 请替换为正确的路径

export default {
  Name: "R_Experience",

  components: { ResumeTitle, SubTitle, HeadLine, R_Paragraph },

  computed: {
  
    data() {
    return {
      experienceLabel: "experience", // 设置Skills标签的值
    };
  },

    experiences() {
      const data = getLanguage().data;
      return data.experience;
    },
  },
};
</script>

<style scoped>
.experience-section {
  margin-bottom: 2em;
  padding: 3%;
}

/* .experience-section:last-child {
  margin-bottom: 0;
} */

.work-position-section {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>

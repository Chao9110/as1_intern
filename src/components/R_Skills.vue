<template>
  <ResumeTitle :text="skillsLabel" />
  <SubTitle class="sub" :text="professionalLabel" />

  <div class="skill-line" v-for="(skill, index) in skills" :key="index">
    <img class="circle" src="@/assets/circle.svg" />
    <R_Paragraph class="contact" :text="skill" />
  </div>
</template>

<script>
import ResumeTitle from "@/components/ResumeTitle.vue";
import SubTitle from "@/components/SubTitle.vue";
import R_Paragraph from "@/components/R_Paragraph.vue";
import { getLanguage } from "@/api/resumeService";

export default {
  name: "R_Skills",

  components: { ResumeTitle, SubTitle, R_Paragraph},

  data() {
    return {
      skillsLabel: "技能", // 设置Skills标签的值
      professionalLabel: "Professional", // 设置Professional标签的值
    };
  },

  computed: {
    skills() {
      const data = getLanguage().data;
      return data.skills;
    },
  },
};


</script>


<style scoped>
.circle {
  width: 8px;
  margin-left: 8px;
}

.material-icons {
  display: inline-flex;
  align-items: center;
}

.skill-line {
  display: flex;
}

.contact {
  padding-left: calc(1em + 8px);
  margin: 0.25em;
}
.sub{
  margin-top: -8.5%;
}
</style>

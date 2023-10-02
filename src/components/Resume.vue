<template>
  <div class="wrapper">

    <div class="header">
      <ResumeHeader />
    </div>
    
    <div class="contacts">
      <R_Contacts />
    </div>

    <div class="profile">
      <R_Profile />
    </div>

    <div class="skills">
      <R_Skills />
    </div>

    <div class="experience">
      <R_Experience />
    </div>

    <div class="education">
      <R_Education />
    </div>
  
  </div>
</template>


<script>
import ResumeHeader from "@/components/ResumeHeader.vue";
import R_Contacts from "@/components/R_Contacts.vue";
import R_Profile from "@/components/R_Profile.vue";
import R_Skills from "@/components/R_Skills.vue";
import R_Experience from "@/components/R_Experience.vue";
import R_Education from "@/components/R_Education.vue";


export default {
  name: 'ResumeSection',
  components:{ R_Education,R_Experience,R_Skills,R_Profile, R_Contacts,ResumeHeader},
  
};
</script>



<style scoped>

.wrapper {
  width: 60%;
  margin-top: 6%;
  background-color: rgba(211, 211, 211, 0.62);
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 3fr;
  grid-template-rows: 190px auto auto auto auto;
  grid-template-areas:
    "header header"
    "contacts profile"
    "skills experience"
    "education experience"
    "expertise experience";
}

.contacts,
.skills,
.education,
.expertise {
  padding: 0px 45px 0 45px;
  margin: 0px 0px 45px 0px;
}

.profile,
.experience {
  padding: 0px 45px 0 0;
  margin: 0px 0px 45px 0px;
}

.experience,
.expertise {
  margin: 0;
}

.header {
  display: flex;
  grid-area: header;
  background-image: url("~@/assets/wave.svg");
  background-repeat: no-repeat;
  margin-top: -10%;
}

.contacts {
  grid-area: contacts;
}

.profile {
  grid-area: profile;
}

.skills {
  grid-area: skills;
}

.experience {
  grid-area: experience;
}

.education {
  grid-area: education;
}

.expertise {
  grid-area: expertise;
}

@media (max-width: 21cm) {
  .wrapper {
    grid-template-columns: 1fr;
    grid-template-rows: repeat(7, auto);
    grid-template-areas:
      "header"
      "contacts"
      "profile"
      "experience"
      "skills"
      "education"
      "expertise";
  }

  .header {
    background-image: url("~@/assets/wave-mobile.svg") !important;
  }

  .contacts,
  .skills,
  .profile,
  .experience,
  .expertise,
  .skills,
  .education {
    padding: 0px 20px 0 20px !important;
  }
}

  .contacts,
  .skills,
  .profile,
  .experience,
  .expertise,
  .skills,
  .education {
    padding: 0px 20px 0 20px !important;
  }



@media print {
  .wrapper {
    grid-template-areas:
      "header header"
      "contacts profile"
      "skills experience"
      "education experience"
      "expertise experience";
  }
}

</style>

<template>
  <ResumeTitle class="ti" :text="contactsLabel" />
  <div v-if="phoneNumber" class="contact-line">
    <img src="@/assets/phone.svg" />
    <R_Paragraph class="contact" :text="phoneNumber" />
  </div>
  <div v-if="email" class="contact-line">
    <img src="@/assets/email.svg" />
    <R_Paragraph class="contact" :text="email" />
  </div>
 
</template>

<script>
import ResumeTitle from "@/components/ResumeTitle.vue";
import R_Paragraph from "@/components/R_Paragraph.vue";

export default {
  name: "R_Contacts",

  components: { ResumeTitle, R_Paragraph },

  computed: {
    contactsLabel() {
      return "聯絡方式"; // 将 contactsLabel 更新为中文标签
    },

    contacts() {
      return {
        phone: "0905782248", // 更新为中文的联系信息
        email: "kerryw9110@gmail.com", // 更新为中文的联系信息
        linkedIn: "non", // 更新为中文的联系信息
      };
    },

    phoneNumber() {
      return this.contacts.phone;
    },

    email() {
      return this.contacts.email;
    },

    linkedIn() {
      return this.contacts.linkedIn;
    },
  },
};
</script>


<style scoped>
.contact-line {
  display: flex;
  margin: 0 auto;
  padding-left: 3%;
  align-items: center;
}

.contact {
  padding-left: 1em;
  margin: 0.25em;
}
.ti{
  margin-top: 5%;
}
</style>

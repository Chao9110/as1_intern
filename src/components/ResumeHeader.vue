<template>

  <div class="box">
    <div class="person-info">
      <ResumeTitle class="person-info-name" :text="fullName" />
      <SubTitle class="person-info-position" :text="position" />
    </div>
    <div class="person-photo">
      <img class="person-photo-image" src="~@/assets/pic.png">
    </div>
  </div>
</template>

<script>
import ResumeTitle from "@/components/ResumeTitle";
import SubTitle from "@/components/SubTitle";
import { getLanguage } from "@/api/resumeService"; // 请替换为正确的路径

export default {
  name: "ResumeHeader",
  components: { ResumeTitle, SubTitle },
  computed: {
    fullName() {
      const data = getLanguage().data;
      const firstName = data.name["first"];
      const lastName = data.name["last"];
      return `${firstName} ${lastName}`;
    },
    position() {
      const data = getLanguage().data;
      return data.position;
    },
    // 在这里添加其他需要的计算属性
  },
  methods: {
    openPrintPage() {
      window.print();
    },
  },
};
</script>
<style scoped>


.person-info {
  display: flex;
  flex-direction: column;
}

.person-info-name {
  margin: 0;
  font-weight: 800;
  font-size: 300%;
}

.person-info-position {
  margin-top: 5%;
  font-size: 150%;
  font-weight: 450;
}

.box {
  padding: 50px;
  margin-top: 8%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
}

.person-photo {
  margin-right: -0%;
}

.person-photo-image {
  border-radius: 50%;
  width: 50%;
  height: 30%;
  
}

@media (max-width: 21cm) {
  .box {
    padding-top: 20px;
    flex-direction: column-reverse;
  }

  .person-info {
    align-items: center;
    justify-content: center;
  }

  .person-photo {
    padding-bottom: 30px;
  }

  .person-info-name{
    font-size: xx-large;

  }
  .person-info-position {
    text-align: center;
  }

  .actions-section {
    width: 100%;
    justify-content: space-between;
  }
}

@media print {
  .actions-section {
    display: none;
  }

  .box {
    padding-top: 0px;
    flex-direction: column-reverse;
  }
}
</style>

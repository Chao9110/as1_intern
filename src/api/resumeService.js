import Data from "../../resume/data.yaml";

export const language = {
  name: "中文",
  code: "ch",
  data: Data,
  resumeLabels: {
    contacts: "Contacts", // 将 "Контакты" 更新为 "Contacts"
    profile: "Profile", // 将 "Профиль" 更新为 "Profile"
    skills: "Skills", // 将 "Навыки" 更新为 "Skills"
    experience: "Experience", // 将 "Опыт работы" 更新为 "Experience"
    professional: "Professional", // 将 "Профессиональные" 更新为 "Professional"
    education: "Education", // 将 "Образование" 更新为 "Education"
  }
};

export function getLanguage() {
  return language;
}

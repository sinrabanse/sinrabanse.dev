const translations = {
  ru: {
    name: "Александр Архипов",
    title: "QA инженер | Ручное и автоматизированное тестирование",
    aboutTitle: "Обо мне",
    aboutText:
      "Я QA инженер с опытом ручного и автоматизированного тестирования. Понимаю процессы QA, умею работать с Jira, Selenium (Python), Playwright (JS), SQL и API тестированием.",
    skillsTitle: "Навыки",
    skillsList: [
      "Ручное тестирование",
      "Автоматизированное тестирование (Selenium, Playwright)",
      "Тестовая документация и тест-кейсы",
      "SQL и API тестирование",
      "Базовые навыки анализа данных",
    ],
    experienceTitle: "Опыт работы",
    experienceList: [
      "Supply & Tenders Coordinator, Logistics & Sales (6 лет)",
      "QA Projects & Automation Practice (самостоятельно)",
    ],
    contactTitle: "Контакты",
  },
  en: {
    name: "Aleksandr Arkhipov",
    title: "QA Engineer | Manual & Automated Testing",
    aboutTitle: "About me",
    aboutText:
      "I am a QA engineer with experience in manual and automated testing. I understand QA processes and work with Jira, Selenium (Python), Playwright (JS), SQL and API testing.",
    skillsTitle: "Skills",
    skillsList: [
      "Manual Testing",
      "Automated Testing (Selenium, Playwright)",
      "Test Documentation & Test Cases",
      "SQL & API Testing",
      "Data Analysis Basics",
    ],
    experienceTitle: "Experience",
    experienceList: [
      "Supply & Tenders Coordinator, Logistics & Sales (6 years)",
      "QA Projects & Automation Practice (self-study)",
    ],
    contactTitle: "Contact",
  },
  he: {
    name: "אלכסנדר ארחיפוב",
    title: "בודק תוכנה | בדיקות ידניות ואוטומטיות",
    aboutTitle: "עליי",
    aboutText:
      "אני בודק תוכנה עם ניסיון בבדיקות ידניות ואוטומטיות. מבין את תהליכי QA, עובד עם Jira, Selenium (Python), Playwright (JS), SQL ו-API Testing.",
    skillsTitle: "כישורים",
    skillsList: [
      "בדיקות ידניות",
      "בדיקות אוטומטיות (Selenium, Playwright)",
      "תיעוד ובדיקות",
      "SQL ו-API Testing",
      "יסודות ניתוח נתונים",
    ],
    experienceTitle: "ניסיון עבודה",
    experienceList: [
      "Supply & Tenders Coordinator, Logistics & Sales (6 שנים)",
      "QA Projects & Automation Practice (עצמאי)",
    ],
    contactTitle: "צור קשר",
  },
};

function setLanguage(lang) {
  document.getElementById("name").textContent = translations[lang].name;
  document.getElementById("title").textContent = translations[lang].title;
  document.getElementById("about-title").textContent =
    translations[lang].aboutTitle;
  document.getElementById("about-text").textContent =
    translations[lang].aboutText;
  document.getElementById("skills-title").textContent =
    translations[lang].skillsTitle;

  const skillsUl = document.getElementById("skills-list");
  skillsUl.innerHTML = "";
  translations[lang].skillsList.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = item;
    skillsUl.appendChild(li);
  });

  document.getElementById("experience-title").textContent =
    translations[lang].experienceTitle;
  const expUl = document.getElementById("experience-list");
  expUl.innerHTML = "";
  translations[lang].experienceList.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = item;
    expUl.appendChild(li);
  });

  document.getElementById("contact-title").textContent =
    translations[lang].contactTitle;
}

// по умолчанию русский
setLanguage("en");

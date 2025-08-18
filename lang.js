const translations = {
  ru: {
    name: "Александр Архипов",
    title: "QA инженер | Ручное и автоматизированное тестирование",
    aboutTitle: "Обо мне",
    aboutText:
      "Я инженер по тестированию (QA) с практическим опытом как ручного, так и автоматизированного \
      тестирования. Обладаю навыками работы с Selenium (Python) и Playwright (JavaScript), хорошо разбираюсь \
      в тестовой документации, SQL и API-тестировании. Увлечён автоматизацией, но при необходимости с лёгкостью выполняю ручное тестирование.",
    skillsTitle: "Навыки",
    skillsList: [
      "Ручное тестирование",
      "Автоматизированное тестирование (Selenium, Playwright)",
      "Тестовая документация и тест-кейсы",
      "SQL и API тестирование",
      "Базовые навыки анализа данных",
    ],
    educationTitle: "Образование и курсы",
    educationList: [
      "2024, Курс QA, Technion — Израильский технологический институт",
      "2023, Курс Data Analyst, TripleTen Израиль",
    ],
    projectsTitle: "Проекты",
    projectsList: [
      "2025, Ivory.co.il – Python Selenium Automation (Pet Project)",
      "2025, Ivory.co.il – JavaScript Playwright Automation (Pet Project)",
    ],
    languageTitle: "Языки",
    languageEngName: "Английский",
    languageEngLvl: "Свободно",
    languageHebName: "Иврит",
    languageHebLvl: "Средний",
    languageRusName: "Русский",
    languageRusLvl: "Родной",
    experienceTitle: "Опыт работы",
    experienceList: [
      "Supply & Tenders Coordinator, Logistics & Sales (6 лет)",
      "QA Projects & Automation Practice (самостоятельно)",
    ],
    contactTitle: "Контакты",
  },
  en: {
    name: "Aleksandr Arkhipov",
    title: "QA Engineer",
    aboutTitle: "About me",
    aboutText:
      "I am a QA Engineer with hands-on experience in both manual and automated testing. Skilled in Selenium (Python) and\
       Playwright (JavaScript), with a strong understanding of test documentation, SQL, and API testing. Passionate about \
       automation and comfortable performing manual testing when needed.",
    skillsTitle: "Skills",
    skillsList: [
      "Manual Testing",
      "Automated Testing (Selenium, Playwright)",
      "Test Documentation & Test Cases",
      "SQL & API Testing",
      "Data Analysis Basics",
    ],
    educationTitle: "Education and Courses",
    educationList: [
      "2024, QA Course, Technion - Israel Institute of Technology",
      "2023, Data Analyst Professional Course, TripleTen Israel",
    ],
    projectsTitle: "Projects",
    projectsList: [
      "2025, Ivory.co.il – Python Selenium Automation (Pet Project)",
      "2025, Ivory.co.il – JavaScript Playwright Automation (Pet Project)",
    ],
    experienceTitle: "Work Experience",
    experienceList: [
      "2025 – QA Tester, uTest (freelance)",
      "2018-2024 – Supply&Tenders Coordinator, B2China.ru (computer hardware)",
    ],
    languageTitle: "Languages",
    languageText: "English (B2), Hebrew (A2), Russian (native)",
    languageEngName: "English",
    languageEngLvl: "Fluent",
    languageHebName: "Hebrew",
    languageHebLvl: "Intermediate",
    languageRusName: "Russian",
    languageRusLvl: "Native",
    contactTitle: "Contact",
  },
  he: {
    name: "אלכסנדר ארחיפוב",
    title: "בודק תוכנה | בדיקות ידניות ואוטומטיות",
    aboutTitle: "עליי",
    aboutText:
      "אני מהנדס בדיקות תוכנה (QA) עם ניסיון מעשי גם בבדיקות ידניות וגם בבדיקות אוטומטיות. מיומן בעבודה עם \
      ‎Selenium (Python)‎ ו-‎Playwright (JavaScript)‎, בעל הבנה טובה בתיעוד בדיקות, \
      SQL ובדיקות API. נלהב לגבי אוטומציה, אך גם מבצע בדיקות ידניות כשנדרש.",
    skillsTitle: "כישורים",
    skillsList: [
      "בדיקות ידניות",
      "בדיקות אוטומטיות (Selenium, Playwright)",
      "תיעוד ובדיקות",
      "SQL ו-API Testing",
      "יסודות ניתוח נתונים",
    ],
    educationTitle: "השכלה וקורסים",
    educationList: [
      "2024, קורס QA, הטכניון - מכון טכנולוגי לישראל",
      "2023, קורס אנליסט נתונים, TripleTen ישראל",
    ],
    projectsTitle: "פרויקטים",
    projectsList: [
      "2025, Ivory.co.il – אוטומציה ב-Python Selenium (פרויקט אישי)",
      "2025, Ivory.co.il – אוטומציה ב-JavaScript Playwright (פרויקט אישי)",
    ],
    languageTitle: "שפות",
    languageEngName: "אנגלית",
    languageEngLvl: "שוטף",
    languageHebName: "עברית",
    languageHebLvl: "בינוני",
    languageRusName: "רוסית",
    languageRusLvl: "שפת אם",
    experienceTitle: "ניסיון עבודה",
    experienceList: [
      "Supply & Tenders Coordinator, Logistics & Sales (6 שנים)",
      "QA Projects & Automation Practice (עצמאי)",
    ],
    contactTitle: "צור קשר",
  },
};

function setLanguage(lang) {
  if (lang === "he") {
    document.body.setAttribute("dir", "rtl");
    document.body.style.textAlign = "right";
  } else {
    document.body.setAttribute("dir", "ltr");
    document.body.style.textAlign = "left";
  }
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

  document.getElementById("education-title").textContent =
    translations[lang].educationTitle;
  const eduUl = document.getElementById("education-list");
  eduUl.innerHTML = "";
  translations[lang].educationList.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = item;
    eduUl.appendChild(li);
  });

  document.getElementById("projects-title").textContent =
    translations[lang].projectsTitle;
  const projectsUl = document.getElementById("projects-list");
  projectsUl.innerHTML = "";
  translations[lang].projectsList.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = item;
    projectsUl.appendChild(li);
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

  document.getElementById("language-title").textContent =
    translations[lang].languageTitle;
  document.getElementById("language-eng-name").textContent =
    translations[lang].languageEngName + ": ";
  document.getElementById("language-eng-lvl").textContent =
    translations[lang].languageEngLvl + ", ";
  document.getElementById("language-heb-name").textContent =
    translations[lang].languageHebName + ": ";
  document.getElementById("language-heb-lvl").textContent =
    translations[lang].languageHebLvl + ", ";
  document.getElementById("language-rus-name").textContent =
    translations[lang].languageRusName + ": ";
  document.getElementById("language-rus-lvl").textContent =
    translations[lang].languageRusLvl + " ";

  document.getElementById("contact-title").textContent =
    translations[lang].contactTitle;
}

setLanguage("en");

let translations = {};

fetch("translations.json")
  .then((response) => response.json())
  .then((data) => {
    translations = data;
    setLanguage("en");
  });

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

  document.getElementById("experience-title").textContent =
    translations[lang].experienceTitle;

  const expUl = document.getElementById("experience-list");
  expUl.innerHTML = "";
  translations[lang].experienceList.forEach((item) => {
    const li = document.createElement("li");

    const yearSpan = document.createElement("span");
    yearSpan.classList.add("exp-year");
    yearSpan.textContent = item.year;

    const textSpan = document.createElement("span");
    textSpan.classList.add("exp-text");

    if (item.link) {
      // создаем HTML, где заменяем "RoiLabs" на ссылку
      const safeHTML = item.text.replace(
        "RoiLabs",
        `<a href="${item.link}" target="_blank" rel="noopener">RoiLabs</a>`
      );
      textSpan.innerHTML = safeHTML; // вставляем HTML со ссылкой
    } else {
      textSpan.textContent = item.text;
    }

    li.appendChild(yearSpan);
    li.appendChild(textSpan);
    expUl.appendChild(li);
  });

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
    const textNode = document.createTextNode(item.text + " (");
    const link = document.createElement("a");
    link.href = item.link;
    link.textContent = "Pet Project";
    link.target = "_blank";
    link.rel = "noopener";
    li.appendChild(textNode);
    li.appendChild(link);
    li.appendChild(document.createTextNode(")"));
    projectsUl.appendChild(li);
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

// Timeouts and intervals to trigger animations

const intro = document.getElementById("photo-intro");
let timers = [];
timers.push(setTimeout(() => intro.classList.add("peek-left"), 2000));
timers.push(
  setTimeout(() => {
    intro.classList.remove("peek-left");
    intro.classList.add("peek-right");
  }, 4000)
);
timers.push(
  setTimeout(() => {
    intro.style.display = "none";
  }, 6000)
);

function stopAnimation() {
  // удаляем классы анимации
  intro.classList.remove("peek-left", "peek-right");

  // останавливаем CSS-анимацию
  intro.style.animation = "none";
  setTimeout(() => (intro.style.animation = ""), 10);

  // очищаем все таймеры
  timers.forEach((t) => clearTimeout(t));
  timers = [];
}

// Curtain, ScrollMagic

window.addEventListener("load", function () {
  document.getElementById("curtain").classList.add("hide");
  var controller = new ScrollMagic.Controller();

  document.querySelectorAll("section").forEach(function (sec) {
    new ScrollMagic.Scene({
      triggerElement: sec,
      triggerHook: 0.9,
      reverse: false,
    })
      .setClassToggle(sec, "visible")
      .addTo(controller);
  });
});

setLanguage("en");

const navbar = document.querySelector(".navbar");
const navbarOffsetTop = navbar.offsetTop;
const sections = document.querySelectorAll("section");
const navbarLinks = document.querySelectorAll(".navbar-link");
const progress = document.querySelector(".progress-bars-wrapper");
const progressBarPercents = [97, 89, 85, 87, 80, 70, 50];

window.addEventListener("scroll", () => {
  mainFn();
});

const mainFn = () => {
  if (window.pageYOffset >= navbarOffsetTop) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }

  sections.forEach((section, i) => {
    if (window.pageYOffset >= section.offsetTop - 10) {
      navbarLinks.forEach((navbarLink) => {
        navbarLink.classList.remove("change");
      });
      navbarLinks[i].classList.add("change");
    }
  });

  if (window.pageYOffset + window.innerHeight >= progress.offsetTop) {
    document.querySelectorAll(".progress-percent").forEach((el, i) => {
      el.style.width = `${progressBarPercents[i]}%`;
      el.previousElementSibling.firstElementChild.textContent =
        progressBarPercents[i];
    });
  }
};

mainFn();

const btn = document.querySelector("button");
const inputs = document.querySelector("form");
  btn.addEventListener('click', () => {
    Email.send({
      Host : "smtp.mailtrap.io",
      Username : "d80269d5c9bb46",
      Password : "4a1d74e9595dec",
      To : 'moloantoalloyd@protonmail.com',
      From : inputs.elements["email"].value,
      Subject : "From Portfolio",
      Body : inputs.elements["message"].value + "<br>" + inputs.elements["name"].value
  }).then(
    message => alert("The email successfully sent"))
  })  

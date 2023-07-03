class Skill {
  constructor(name, image) {
    this.name = name;
    this.image = image;
  }
}

class Project {
  constructor(name, description, image, github, page) {
    this.name = name;
    this.description = description;
    this.image = image;
    this.github = github;
    this.page = page;
  }
}

class Footer {
  constructor(link, icon) {
    this.link = link;
    this.icon = icon;
  }
}

let skills = [
  new Skill(
    "HTML5",
    `<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 32 32">
    <path fill="#e44f26" d="M5.902 27.201L3.655 2h24.69l-2.25 25.197L15.985 30L5.902 27.201z" />
    <path fill="#f1662a" d="m16 27.858l8.17-2.265l1.922-21.532H16v23.797z" />
    <path fill="#ebebeb"
      d="M16 13.407h-4.09l-.282-3.165H16V7.151H8.25l.074.83l.759 8.517H16v-3.091zm0 8.027l-.014.004l-3.442-.929l-.22-2.465H9.221l.433 4.852l6.332 1.758l.014-.004v-3.216z" />
    <path fill="#fff"
      d="M15.989 13.407v3.091h3.806l-.358 4.009l-3.448.93v3.216l6.337-1.757l.046-.522l.726-8.137l.076-.83h-7.185zm0-6.256v3.091h7.466l.062-.694l.141-1.567l.074-.83h-7.743z" />
    </svg>`
  ),

  new Skill(
    "CSS",
    `<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 32 32">
  <path fill="#1572b6" d="M5.902 27.201L3.656 2h24.688l-2.249 25.197L15.985 30L5.902 27.201z" />
  <path fill="#33a9dc" d="m16 27.858l8.17-2.265l1.922-21.532H16v23.797z" />
  <path fill="#fff" d="M16 13.191h4.09l.282-3.165H16V6.935h7.75l-.074.829l-.759 8.518H16v-3.091z" />
  <path fill="#ebebeb"
    d="m16.019 21.218l-.014.004l-3.442-.93l-.22-2.465H9.24l.433 4.853l6.331 1.758l.015-.004v-3.216z" />
  <path fill="#fff" d="m19.827 16.151l-.372 4.139l-3.447.93v3.216l6.336-1.756l.047-.522l.537-6.007h-3.101z" />
  <path fill="#ebebeb"
    d="M16.011 6.935v3.091H8.545l-.062-.695l-.141-1.567l-.074-.829h7.743zM16 13.191v3.091h-3.399l-.062-.695l-.14-1.567l-.074-.829H16z" />
</svg>`
  ),

  new Skill(
    "Javascript",
    `<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 256 256">
  <g fill="none">
    <rect width="256" height="256" fill="#F0DB4F" rx="60" />
    <path fill="#323330"
      d="m67.312 213.932l19.59-11.856c3.78 6.701 7.218 12.371 15.465 12.371c7.905 0 12.889-3.092 12.889-15.12v-81.798h24.058v82.138c0 24.917-14.606 36.259-35.916 36.259c-19.245 0-30.416-9.967-36.087-21.996m85.07-2.576l19.588-11.341c5.157 8.421 11.859 14.607 23.715 14.607c9.969 0 16.325-4.984 16.325-11.858c0-8.248-6.53-11.17-17.528-15.98l-6.013-2.579c-17.357-7.388-28.871-16.668-28.871-36.258c0-18.044 13.748-31.792 35.229-31.792c15.294 0 26.292 5.328 34.196 19.247l-18.731 12.029c-4.125-7.389-8.591-10.31-15.465-10.31c-7.046 0-11.514 4.468-11.514 10.31c0 7.217 4.468 10.139 14.778 14.608l6.014 2.577c20.449 8.765 31.963 17.699 31.963 37.804c0 21.654-17.012 33.51-39.867 33.51c-22.339 0-36.774-10.654-43.819-24.574" />
  </g>
</svg>`
  ),
  new Skill(
    "React",
    `<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 256 228">
  <path fill="#00D8FF"
    d="M210.483 73.824a171.49 171.49 0 0 0-8.24-2.597c.465-1.9.893-3.777 1.273-5.621c6.238-30.281 2.16-54.676-11.769-62.708c-13.355-7.7-35.196.329-57.254 19.526a171.23 171.23 0 0 0-6.375 5.848a155.866 155.866 0 0 0-4.241-3.917C100.759 3.829 77.587-4.822 63.673 3.233C50.33 10.957 46.379 33.89 51.995 62.588a170.974 170.974 0 0 0 1.892 8.48c-3.28.932-6.445 1.924-9.474 2.98C17.309 83.498 0 98.307 0 113.668c0 15.865 18.582 31.778 46.812 41.427a145.52 145.52 0 0 0 6.921 2.165a167.467 167.467 0 0 0-2.01 9.138c-5.354 28.2-1.173 50.591 12.134 58.266c13.744 7.926 36.812-.22 59.273-19.855a145.567 145.567 0 0 0 5.342-4.923a168.064 168.064 0 0 0 6.92 6.314c21.758 18.722 43.246 26.282 56.54 18.586c13.731-7.949 18.194-32.003 12.4-61.268a145.016 145.016 0 0 0-1.535-6.842c1.62-.48 3.21-.974 4.76-1.488c29.348-9.723 48.443-25.443 48.443-41.52c0-15.417-17.868-30.326-45.517-39.844Zm-6.365 70.984c-1.4.463-2.836.91-4.3 1.345c-3.24-10.257-7.612-21.163-12.963-32.432c5.106-11 9.31-21.767 12.459-31.957c2.619.758 5.16 1.557 7.61 2.4c23.69 8.156 38.14 20.213 38.14 29.504c0 9.896-15.606 22.743-40.946 31.14Zm-10.514 20.834c2.562 12.94 2.927 24.64 1.23 33.787c-1.524 8.219-4.59 13.698-8.382 15.893c-8.067 4.67-25.32-1.4-43.927-17.412a156.726 156.726 0 0 1-6.437-5.87c7.214-7.889 14.423-17.06 21.459-27.246c12.376-1.098 24.068-2.894 34.671-5.345a134.17 134.17 0 0 1 1.386 6.193ZM87.276 214.515c-7.882 2.783-14.16 2.863-17.955.675c-8.075-4.657-11.432-22.636-6.853-46.752a156.923 156.923 0 0 1 1.869-8.499c10.486 2.32 22.093 3.988 34.498 4.994c7.084 9.967 14.501 19.128 21.976 27.15a134.668 134.668 0 0 1-4.877 4.492c-9.933 8.682-19.886 14.842-28.658 17.94ZM50.35 144.747c-12.483-4.267-22.792-9.812-29.858-15.863c-6.35-5.437-9.555-10.836-9.555-15.216c0-9.322 13.897-21.212 37.076-29.293c2.813-.98 5.757-1.905 8.812-2.773c3.204 10.42 7.406 21.315 12.477 32.332c-5.137 11.18-9.399 22.249-12.634 32.792a134.718 134.718 0 0 1-6.318-1.979Zm12.378-84.26c-4.811-24.587-1.616-43.134 6.425-47.789c8.564-4.958 27.502 2.111 47.463 19.835a144.318 144.318 0 0 1 3.841 3.545c-7.438 7.987-14.787 17.08-21.808 26.988c-12.04 1.116-23.565 2.908-34.161 5.309a160.342 160.342 0 0 1-1.76-7.887Zm110.427 27.268a347.8 347.8 0 0 0-7.785-12.803c8.168 1.033 15.994 2.404 23.343 4.08c-2.206 7.072-4.956 14.465-8.193 22.045a381.151 381.151 0 0 0-7.365-13.322Zm-45.032-43.861c5.044 5.465 10.096 11.566 15.065 18.186a322.04 322.04 0 0 0-30.257-.006c4.974-6.559 10.069-12.652 15.192-18.18ZM82.802 87.83a323.167 323.167 0 0 0-7.227 13.238c-3.184-7.553-5.909-14.98-8.134-22.152c7.304-1.634 15.093-2.97 23.209-3.984a321.524 321.524 0 0 0-7.848 12.897Zm8.081 65.352c-8.385-.936-16.291-2.203-23.593-3.793c2.26-7.3 5.045-14.885 8.298-22.6a321.187 321.187 0 0 0 7.257 13.246c2.594 4.48 5.28 8.868 8.038 13.147Zm37.542 31.03c-5.184-5.592-10.354-11.779-15.403-18.433c4.902.192 9.899.29 14.978.29c5.218 0 10.376-.117 15.453-.343c-4.985 6.774-10.018 12.97-15.028 18.486Zm52.198-57.817c3.422 7.8 6.306 15.345 8.596 22.52c-7.422 1.694-15.436 3.058-23.88 4.071a382.417 382.417 0 0 0 7.859-13.026a347.403 347.403 0 0 0 7.425-13.565Zm-16.898 8.101a358.557 358.557 0 0 1-12.281 19.815a329.4 329.4 0 0 1-23.444.823c-7.967 0-15.716-.248-23.178-.732a310.202 310.202 0 0 1-12.513-19.846h.001a307.41 307.41 0 0 1-10.923-20.627a310.278 310.278 0 0 1 10.89-20.637l-.001.001a307.318 307.318 0 0 1 12.413-19.761c7.613-.576 15.42-.876 23.31-.876H128c7.926 0 15.743.303 23.354.883a329.357 329.357 0 0 1 12.335 19.695a358.489 358.489 0 0 1 11.036 20.54a329.472 329.472 0 0 1-11 20.722Zm22.56-122.124c8.572 4.944 11.906 24.881 6.52 51.026c-.344 1.668-.73 3.367-1.15 5.09c-10.622-2.452-22.155-4.275-34.23-5.408c-7.034-10.017-14.323-19.124-21.64-27.008a160.789 160.789 0 0 1 5.888-5.4c18.9-16.447 36.564-22.941 44.612-18.3ZM128 90.808c12.625 0 22.86 10.235 22.86 22.86s-10.235 22.86-22.86 22.86s-22.86-10.235-22.86-22.86s10.235-22.86 22.86-22.86Z" />
</svg>`
  ),
  new Skill(
    "Bootstrap",
    `<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 256 204">
  <path fill="#7E13F8"
    d="M53.172 0C38.565 0 27.756 12.785 28.24 26.65c.465 13.32-.139 30.573-4.482 44.642C19.402 85.402 12.034 94.34 0 95.488v12.956c12.034 1.148 19.402 10.086 23.758 24.197c4.343 14.069 4.947 31.32 4.482 44.641c-.484 13.863 10.325 26.65 24.934 26.65h149.673c14.608 0 25.414-12.785 24.93-26.65c-.464-13.32.139-30.572 4.482-44.641c4.359-14.11 11.707-23.05 23.741-24.197V95.488c-12.034-1.148-19.382-10.086-23.74-24.196c-4.344-14.067-4.947-31.321-4.483-44.642C228.261 12.787 217.455 0 202.847 0H53.17h.002ZM173.56 125.533c0 19.092-14.24 30.67-37.872 30.67h-40.23a4.339 4.339 0 0 1-4.338-4.339V52.068a4.339 4.339 0 0 1 4.339-4.34h39.999c19.705 0 32.637 10.675 32.637 27.063c0 11.503-8.7 21.801-19.783 23.604v.601c15.089 1.655 25.248 12.104 25.248 26.537Zm-42.26-64.05h-22.937v32.4h19.32c14.934 0 23.17-6.014 23.17-16.764c0-10.073-7.082-15.636-19.552-15.636Zm-22.937 45.256v35.705h23.782c15.548 0 23.786-6.239 23.786-17.965c0-11.728-8.467-17.742-24.786-17.742h-22.782v.002Z" />
</svg>`
  ),
  new Skill(
    "Tailwind",
    `<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 256 154">
<defs>
  <linearGradient id="logosTailwindcssIcon0" x1="-2.778%" x2="100%" y1="32%" y2="67.556%">
    <stop offset="0%" stop-color="#2298BD" />
    <stop offset="100%" stop-color="#0ED7B5" />
  </linearGradient>
</defs>
<path fill="url(#logosTailwindcssIcon0)"
  d="M128 0C93.867 0 72.533 17.067 64 51.2C76.8 34.133 91.733 27.733 108.8 32c9.737 2.434 16.697 9.499 24.401 17.318C145.751 62.057 160.275 76.8 192 76.8c34.133 0 55.467-17.067 64-51.2c-12.8 17.067-27.733 23.467-44.8 19.2c-9.737-2.434-16.697-9.499-24.401-17.318C174.249 14.743 159.725 0 128 0ZM64 76.8C29.867 76.8 8.533 93.867 0 128c12.8-17.067 27.733-23.467 44.8-19.2c9.737 2.434 16.697 9.499 24.401 17.318C81.751 138.857 96.275 153.6 128 153.6c34.133 0 55.467-17.067 64-51.2c-12.8 17.067-27.733 23.467-44.8 19.2c-9.737-2.434-16.697-9.499-24.401-17.318C110.249 91.543 95.725 76.8 64 76.8Z" />
</svg>`
  ),
  new Skill(
    "Jquery",
    `<svg width="100" height="100" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
  <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
  <g id="SVGRepo_iconCarrier">
    <circle cx="16" cy="16" r="14" fill="#0769AD0769AD"></circle>
    <path
      d="M22.6573 13.4211C23.9143 13.4211 25.0652 13.0019 25.955 12.3066C25.0312 13.5238 23.5007 14.3196 21.7689 14.3196C18.9477 14.3196 16.6607 12.2077 16.6607 9.60256C16.6607 8.1581 17.3638 6.86527 18.4712 6C17.8901 6.76568 17.5491 7.6981 17.5491 8.70407C17.5491 11.3092 19.8361 13.4211 22.6573 13.4211Z"
      fill="#0769AD"></path>
    <path
      d="M25.9064 16.6586C24.5512 17.7216 22.7968 18.3628 20.8805 18.3628C16.5874 18.3628 13.1071 15.1447 13.1071 11.1749C13.1071 9.63522 13.6307 8.20859 14.5221 7.03894C12.8413 8.35742 11.7745 10.3248 11.7745 12.5226C11.7745 16.4924 15.2548 19.7106 19.5479 19.7106C22.176 19.7106 24.4994 18.5047 25.9064 16.6586Z"
      fill="#0769AD"></path>
    <path
      d="M26 20.7701C24.0689 22.6129 21.3937 23.7538 18.4375 23.7538C12.5497 23.7538 7.77678 19.2283 7.77678 13.6458C7.77678 11.8768 8.25603 10.214 9.09813 8.76767C7.18322 10.595 6 13.1125 6 15.892C6 21.4745 10.7729 26 16.6607 26C20.6827 26 24.1846 23.8881 26 20.7701Z"
      fill="#0769AD"></path>
  </g>
</svg>`
  ),
  new Skill(
    "Github",
    `<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33c.85 0 1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2Z"/></svg>`
  ),
];

let projects = [
  new Project(
    "Budge it",
    "Web application to calculate budgets dynamically.",
    "assets/images/budge-image.png",
    "https://github.com/franmbv/budget",
    "https://franmbv.github.io/budget/"
  ),

  new Project(
    "Menu",
    "Website made to streamline the display of the menu in restaurants.",
    "assets/images/menu-image.png",
    "https://github.com/franmbv/menu",
    "https://franmbv.github.io/menu/"
  ),
  
  new Project(
    "Blood interpret",
    "It is used to interpret the results of a blood test, in this case hemoglobine.",
    "assets/images/bloodinterpret.png",
    "https://github.com/franmbv/bloodinterpret",
    "https://franmbv.github.io/bloodinterpret/"
  ),
];

let footers = [
  new Footer(
    "https://www.linkedin.com/in/franner-bermudez-99b4a91a2/",
    `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#1c3879" d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77Z"/></svg>`
  ),

  new Footer(
    "https://github.com/franmbv",
    `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#1c3879" d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33c.85 0 1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2Z"/></svg>`
  ),

  new Footer(
    "mailto:frannermanuel@gmail.com",
    `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#1c3879" d="M20 18h-2V9.25L12 13L6 9.25V18H4V6h1.2l6.8 4.25L18.8 6H20m0-2H4c-1.11 0-2 .89-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Z"/></svg>`
  ),
];

window.addEventListener("DOMContentLoaded", () => {
  displaySkill(skills);
  displayProjects(projects);
  displayFooter(footers);
});

const displaySkill = (skillItem) => {
  document.getElementById("skillItem").innerHTML = skillItem
    .map((data) => {
      return `<div class="col pb-2 pt-2">${data.image}
    <h3 class="mt-2 mb-2 fs-4">${data.name}</h3>
    </div>`;
    })
    .join("");
};

const displayProjects = (projectItem) => {
  document.getElementById("project").innerHTML = projectItem
    .map((data) => {
      return `
  <div class="card mx-auto my-3" style="width: 18rem">
    <img src="${data.image}" class="card-img-top" alt="project example image" />
    <div class="card-body">
      <h5 class="card-title">${data.name}</h5>
      <p class="card-text">
        ${data.description}
      </p>
      <div class="d-flex justify-content-between align-items-center">
        <div class="btn-group">
          <a href="${data.github}">
            <button type="button" class="btn btn-sm btn-outline">Github</button>
          </a>
          <a href="${data.page}">
            <button type="button" class="btn btn-sm btn-outline">Page</button>
          </a>
        </div>
      </div>
    </div>
  </div>`;
    })
    .join("");
};

const displayFooter = (footerItem) => {
  document.querySelector("#footer .navigation-block").innerHTML = footerItem
    .map((data) => {
      return `<li class="navigation-link">
        <a href=${data.link}>
          ${data.icon}
        </a>
      </li>`;
    })
    .join("");
};

const date = new Date().getFullYear();

document.querySelector("#footer p").textContent =
  "© " + date + " Copyright FrannerBV";

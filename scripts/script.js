const lightThemeButton = document.querySelector('button.light-theme');
const darkThemeButton = document.querySelector('button.dark-theme');
const logoImage = document.querySelector('.logo')

function setDarkTheme() {
  const lightThemeElements = document.querySelectorAll('.light-theme')

  lightThemeElements.forEach((element) => {
    element.classList.forEach((className) => {
      if (className.includes('light-theme')) {
        const newClassName = className.replace('light-theme', 'dark-theme');
        element.classList.replace(className, newClassName);
      }
    })
  })

  lightThemeButton.classList.remove('accent');
  darkThemeButton.classList.add('accent');
  logoImage.src = "./images/svg/logo-light.svg";
}

function setLightTheme() {
  const darkThemeElements = document.querySelectorAll('.dark-theme')

  darkThemeElements.forEach((element) => {
    element.classList.forEach((className) => {
      if (className.includes('dark-theme')) {
        const newClassName = className.replace('dark-theme', 'light-theme');
        element.classList.replace(className, newClassName);
      }
    })
  })

  lightThemeButton.classList.add('accent');
  darkThemeButton.classList.remove('accent');
  logoImage.src = "./images/svg/logo-dark.svg";
}

darkThemeButton.addEventListener('click', setDarkTheme);
lightThemeButton.addEventListener('click', setLightTheme);

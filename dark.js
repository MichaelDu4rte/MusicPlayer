const html = document.querySelector("html")
const checkbox = document.querySelector("input[name=theme]")

const getStyle = (element, style) => 
    window
        .getComputedStyle(element)
        .getPropertyValue(style)


const initialColors = {
    bodyColor: getStyle(html, "--body-color"),
    bgColor: getStyle(html, "--bg-color"),
    bgSong: getStyle(html, "--bg-song"),
    textColor: getStyle(html, "--text-color"),
    subtitleColor: getStyle(html, "--subtitle-color"),
    iconColor: getStyle(html, "--icon-color"),
    arrowColor: getStyle(html, "--arrow-color"),
    barColor: getStyle(html, "--bar-color"),
    hoverColor: getStyle(html, "--hover-color"),
    iconColorHover: getStyle(html, "--icon-color-hover"),
    activeColor: getStyle(html, "--active-color"),
    activeMenu: getStyle(html, "--active-menu")
  }

const darkMode = {
    bodyColor: "#EEEEEE",
    bgColor: "#EEEEEE",
    bgSong: "#dddddd",
    textColor: "#000000",
    subtitleColor: "#4c5262",
    iconColor: "#000000",
    arrowColor: "#000000",
    barColor: "#3E2AD1",
    iconColorHover: "#fff",
    activeColor: '#3E2AD1',
    activeMenu: '#3E2AD1'
}

const transformKey = key => 
    "--" + key.replace(/([A-Z])/, "-$1").toLowerCase()


const changeColors = (colors) => {
    Object.keys(colors).map(key => 
        html.style.setProperty(transformKey(key), colors[key]) 
    )
}

var white = document.getElementsByClassName('white')

checkbox.addEventListener("change", ({target}) => {
  target.checked ? changeColors(darkMode) : changeColors(initialColors)
})
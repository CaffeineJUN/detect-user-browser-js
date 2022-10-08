let userAgent = navigator.userAgent
console.log(userAgent)

if (userAgent.match(/edge/i)) {
    browser = 'edge'
} else if (userAgent.match(/firefox|fxios/i)) {
    browser = 'firefox'
} else if (userAgent.match(/opr/i)) {
    browser = 'opera'
} else if (userAgent.match(/chrome|chromium|crios/i)) {
    browser = 'chrome'
} else if (userAgent.match(/safari/i)) {
    browser = 'safari'
} else {
    alert('Other browser')
}

console.log(browser)

const logo = document.querySelector(`.logos .${browser}`)
if (logo != '') {
    logo.style.opacity = '1'
}

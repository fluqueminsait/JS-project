
const footerArray = [{linkUrl: "https://www.linkedin.com/feed/",
src: "./assets/linkedin.svg",
alt: "logo Linkedin" },
{linkUrl: "https://github.com/",
src: "./assets/github.svg",
alt: "logo gitHub" },
{linkUrl: "https://instagram.com/",
src: "./assets/instagram.svg",
alt: "logo Instagram" }]

const footerContainer = document.getElementsByClassName('footer-container')
footerArray.map((iconRRSS) => {
    const aIconRRSS = document.createElement("a")
    const imgIconRRSS = document.createElement("img")

    imgIconRRSS.classList.add("footer-container__img")
    imgIconRRSS.src = iconRRSS.src;
    imgIconRRSS.alt = iconRRSS.alt;

    aIconRRSS.appendChild(imgIconRRSS)

    for (const iterator of footerContainer) {
        iterator.appendChild(aIconRRSS)
    }
} )

export {footerArray}
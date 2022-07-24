const slide = () => {
    const slideValue = document.querySelector("#slider").value
    document.querySelector("#my-img").style.clipPath = "polygon(0 0," + slideValue + "% 0," + slideValue + "% 100%, 0 100%)"
}
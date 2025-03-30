let menu = document.querySelector('.header__nav')
let menuLinks = document.querySelector('.menu__links')

console.log(menu)


menuLinks.addEventListener("click",()=>{
    
    console.log("button clicked")
})
document.addEventListener("DOMContentLoaded", function () {
    const video = document.getElementById("adventure-video");
    const videoContainer = document.querySelector(".video-container");

    function playVideoWhenVisible() {
        let rect = videoContainer.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom >= 0) {
            videoContainer.style.opacity = "1";
            videoContainer.style.transform = "translateY(0)";
            video.src += "&autoplay=1"; // Adds autoplay to the URL
            window.removeEventListener("scroll", playVideoWhenVisible); // Run only once
        }
    }

    window.addEventListener("scroll", playVideoWhenVisible);
});

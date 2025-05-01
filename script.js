const imageList = ["images/photo1.jpg", "images/photo2.jpg", "images/photo3.jpg", "images/photo4.jpg", "images/photo5.jpg", "images/photo6.jpg"];
let currentIndex = 0;

document.getElementById("prevBtn").addEventListener("click", () => {
    currentIndex = (currentIndex === 0) ? imageList.length - 1 : currentIndex - 1;
    document.getElementById("carouselImage").src = imageList[currentIndex];
});

document.getElementById("nextBtn").addEventListener("click", () => {
    currentIndex = (currentIndex === imageList.length - 1) ? 0 : currentIndex + 1;
    document.getElementById("carouselImage").src = imageList[currentIndex];
});

function scrollToEnquiry() {
    document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
}
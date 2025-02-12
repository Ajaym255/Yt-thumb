document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("darkModeToggle").addEventListener("click", toggleDarkMode);
});

function getThumbnail() {
    let videoUrl = document.getElementById("videoUrl").value;
    let videoId = extractVideoID(videoUrl);

    if (videoId) {
        document.getElementById("thumbnail-container").classList.remove("hidden");

        let maxresImg = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
        let hqImg = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
        let sdImg = `https://img.youtube.com/vi/${videoId}/sddefault.jpg`;
        let defaultImg = `https://img.youtube.com/vi/${videoId}/default.jpg`;

        checkImage(maxresImg, "maxres", "maxresDownload");
        checkImage(hqImg, "hq", "hqDownload");
        checkImage(sdImg, "sd", "sdDownload");
        checkImage(defaultImg, "default", "defaultDownload");
    } else {
        alert("⚠️ Invalid YouTube URL! Please enter a valid URL.");
    }
}

function extractVideoID(url) {
    let regex = /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/;
    let match = url.match(regex);
    return match ? match[1] : null;
}

function checkImage(url, imgId, linkId) {
    let img = new Image();
    img.src = url;
    img.onload = function () {
        document.getElementById(imgId).src = url;
        document.getElementById(linkId).href = url;
    };
    img.onerror = function () {
        console.warn(`❌ Image not found: ${url}`);
    };
}

function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");
}

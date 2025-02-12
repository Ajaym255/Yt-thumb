document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("darkModeToggle").addEventListener("click", toggleDarkMode);
});

function getThumbnail() {
    let videoUrl = document.getElementById("videoUrl").value;
    let videoId = extractVideoID(videoUrl);

    if (videoId) {
        document.getElementById("thumbnail-container").classList.remove("hidden");

        let thumbnails = {
            maxres: `https://i.ytimg.com/vi/${videoId}/maxresdefault.jpg`,
            hq: `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`,
            sd: `https://i.ytimg.com/vi/${videoId}/sddefault.jpg`,
            default: `https://i.ytimg.com/vi/${videoId}/default.jpg`
        };

        Object.keys(thumbnails).forEach(type => {
            checkImage(thumbnails[type], type);
        });

    } else {
        alert("⚠️ Invalid YouTube URL! Please enter a valid URL.");
    }
}

function extractVideoID(url) {
    let regex = /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/;
    let match = url.match(regex);
    return match ? match[1] : null;
}

function checkImage(url, type) {
    let img = new Image();
    img.src = url;
    img.onload = function () {
        document.getElementById(type).src = url;
        document.getElementById(type + "Download").href = url;
        document.getElementById(type).style.display = "block";
    };
    img.onerror = function () {
        console.warn(`❌ Image not found: ${url}`);
        document.getElementById(type).style.display = "none";
        document.getElementById(type + "Download").style.display = "none";
    };
}

function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");
}

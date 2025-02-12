document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("darkModeToggle").addEventListener("click", toggleDarkMode);
});

function getThumbnail() {
    let videoUrl = document.getElementById("videoUrl").value.trim();
    
    if (!videoUrl) {
        alert("⚠️ Please enter a YouTube video URL!");
        return;
    }

    let videoId = extractVideoId(videoUrl);
    
    if (!videoId) {
        alert("❌ Invalid YouTube URL! Please enter a correct URL.");
        return;
    }

    // Thumbnail URLs
    let maxResUrl = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
    let hqUrl = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
    let sdUrl = `https://img.youtube.com/vi/${videoId}/sddefault.jpg`;
    let defaultUrl = `https://img.youtube.com/vi/${videoId}/default.jpg`;

    // Update Image Elements
    updateThumbnail("maxres", maxResUrl);
    updateThumbnail("hq", hqUrl);
    updateThumbnail("sd", sdUrl);
    updateThumbnail("default", defaultUrl);

    // Show Thumbnail Section
    document.getElementById("thumbnail-container").classList.remove("hidden");
}

function extractVideoId(url) {
    let match = url.match(/(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/);
    return match ? match[1] : null;
}

function updateThumbnail(id, url) {
    let img = document.getElementById(id);
    let link = document.getElementById(id + "Download");

    img.src = url;
    img.style.display = "block";
    link.href = url;
    link.style.display = "inline-block";
}

function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");
}

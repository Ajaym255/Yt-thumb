function getThumbnail() {
    let url = document.getElementById("videoUrl").value;
    let videoId = extractVideoID(url);

    if (!videoId) {
        alert("Invalid YouTube URL! Please check again.");
        return;
    }

    let hdUrl = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
    let sdUrl = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;

    document.getElementById("hdThumbnail").src = hdUrl;
    document.getElementById("sdThumbnail").src = sdUrl;

    document.getElementById("hdDownload").href = hdUrl;
    document.getElementById("sdDownload").href = sdUrl;

    document.getElementById("thumbnail-container").classList.remove("hidden");
}

function extractVideoID(url) {
    let match = url.match(/(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^\/]+\/[^\/]+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/);
    return match ? match[1] : null;
}

// Dark Mode Toggle
document.getElementById("darkModeToggle").addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
});

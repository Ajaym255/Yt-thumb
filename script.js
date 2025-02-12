function getThumbnail() {
    let url = document.getElementById("videoUrl").value;
    let videoId = extractVideoID(url);

    if (!videoId) {
        alert("❌ Invalid YouTube URL! Please enter a valid link.");
        return;
    }

    document.getElementById("maxres").src = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
    document.getElementById("hq").src = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
    document.getElementById("sd").src = `https://img.youtube.com/vi/${videoId}/sddefault.jpg`;
    document.getElementById("default").src = `https://img.youtube.com/vi/${videoId}/default.jpg`;

    document.getElementById("maxresDownload").href = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
    document.getElementById("hqDownload").href = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
    document.getElementById("sdDownload").href = `https://img.youtube.com/vi/${videoId}/sddefault.jpg`;
    document.getElementById("defaultDownload").href = `https://img.youtube.com/vi/${videoId}/default.jpg`;

    document.getElementById("thumbnail-container").classList.remove("hidden");
}

function extractVideoID(url) {
    let match = url.match(/(?:youtu\.be\/|youtube\.com\/(?:.*v=|.*\/))([^&]+)/);
    return match ? match[1] : null;
}

// Dark Mode Toggle
document.getElementById("darkModeToggle").addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
});

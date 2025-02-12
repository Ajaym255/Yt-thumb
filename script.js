function getThumbnail() {
    let url = document.getElementById("videoUrl").value;
    let videoId = url.split("v=")[1]?.split("&")[0];

    if (!videoId) {
        alert("⚠ Invalid YouTube URL! Please enter a valid URL.");
        return;
    }

    document.getElementById("hdThumbnail").src = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
    document.getElementById("sdThumbnail").src = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;

    document.getElementById("hdDownload").href = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
    document.getElementById("sdDownload").href = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;

    document.getElementById("thumbnail-container").classList.remove("hidden");
}

// Dark Mode Toggle
document.getElementById("darkModeToggle").addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
});

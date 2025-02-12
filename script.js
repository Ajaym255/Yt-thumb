function getThumbnail() {
    let url = document.getElementById("videoUrl").value;
    
    // Extract video ID from YouTube URL
    let videoId = '';
    let match = url.match(/(?:youtu\.be\/|youtube\.com\/(?:.*v=|.*\/)([^#&?]*))/);
    if (match) {
        videoId = match[1];
    }

    if (!videoId) {
        alert("Invalid YouTube URL!");
        return;
    }

    // Update image and download links
    document.getElementById("hdThumbnail").src = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
    document.getElementById("sdThumbnail").src = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
    document.getElementById("hdDownload").href = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
    document.getElementById("sdDownload").href = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;

    // Show the container
    document.getElementById("thumbnail-container").classList.remove("hidden");
}

// Dark Mode Toggle
document.getElementById("darkModeToggle").addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
});

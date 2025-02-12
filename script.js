document.addEventListener("DOMContentLoaded", function () {
    console.log("🚀 Script Loaded Successfully!");

    document.getElementById("darkModeToggle").addEventListener("click", toggleDarkMode);
    console.log("🌙 Dark Mode Toggle Initialized!");
});

function getThumbnail() {
    let videoUrl = document.getElementById("videoUrl").value.trim();
    console.log("📌 Entered URL: ", videoUrl);

    if (!videoUrl) {
        alert("⚠️ Please enter a YouTube video URL!");
        return;
    }

    let videoId = extractVideoId(videoUrl);
    console.log("🔎 Extracted Video ID: ", videoId);

    if (!videoId) {
        alert("❌ Invalid YouTube URL! Please enter a correct URL.");
        return;
    }

    // Thumbnail URLs
    let maxResUrl = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
    let hqUrl = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
    let sdUrl = `https://img.youtube.com/vi/${videoId}/sddefault.jpg`;
    let defaultUrl = `https://img.youtube.com/vi/${videoId}/default.jpg`;

    console.log("🖼️ Thumbnail URLs Generated:", { maxResUrl, hqUrl, sdUrl, defaultUrl });

    // Update Image Elements
    updateThumbnail("maxres", maxResUrl);
    updateThumbnail("hq", hqUrl);
    updateThumbnail("sd", sdUrl);
    updateThumbnail("default", defaultUrl);

    // Show Thumbnail Section
    document.getElementById("thumbnail-container").classList.remove("hidden");
    console.log("✅ Thumbnails Updated & Visible!");
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

    console.log(`✅ ${id} Thumbnail Updated: ${url}`);
}

function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");
    console.log("🌙 Dark Mode Toggled!");
}

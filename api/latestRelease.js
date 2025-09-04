// api/latestRelease.js

// Latest release data for your Android app
const latestRelease = {
    "tag_name": "v1.7.3", // Update this for every new version
    "assets": [
        {
            "name": "Kreate-release.apk", // Must match BuildConfig.APP_NAME + "-release.apk"
            // Use Vercel's environment variable for host URL
            "browser_download_url": `https://${process.env.VERCEL_URL}/Kreate-release.apk`,
            // Size of APK in bytes (update manually with each release)
            "size": 12345678,
            // SHA-256 digest of APK file (update manually)
            "sha256_digest": "a1b2c3d4e5f6g7h8i9j0k1l2m3n4o5p6q7r8s9t0u1v2w3x4y5z6a7b8c9d0e1f2"
        }
    ]
};

// Vercel serverless function handler
module.exports = (req, res) => {
    console.log('Request received for latest release data.');
    res.status(200).json(latestRelease);
};

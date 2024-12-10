// background.js
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    console.log("Message received:", request);

    // Check the message type and respond accordingly
    if (request.message === "Hello from content script!") {
        sendResponse({ status: "success", data: "Hello from background script!" });
    } else {
        sendResponse({ status: "unknown", data: "Unknown message type." });
    }
}); 
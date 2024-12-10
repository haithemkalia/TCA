// content.js
chrome.runtime.sendMessage({ message: "Hello from content script!" }, (response) => {
    console.log("Response from background script:", response);
}); 
function onCreated(windowInfo) {
    console.log(`Created window: ${windowInfo.id}`);
}
  
function onError(error) {
    console.log(`Error: ${error}`);
}

function openTidalPage() {
    var popupURL = browser.extension.getURL("https://listen.tidal.com");
    
    var creating = browser.windows.create({
        url: popupURL,
        type: "popup",
        height: 1000,
        width: 1280,
        left: 640
    });
    creating.then(onCreated, onError);
}

browser.browserAction.onClicked.addListener(openTidalPage);
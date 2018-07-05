/*
Open a new tab, and load "my-page.html" into it.
*/
function openTidalPage() {
    console.log("injecting");
    browser.tabs.create({
        "url": "https://listen.tidal.com"
    });
}
  
/*
Add openMyPage() as a listener to clicks on the browser action.
*/
browser.browserAction.onClicked.addListener(openTidalPage);
function saveBaseUrl(e) {
    browser.storage.sync.set({
        url: e
    });
}

function getBaseUrls() {
    return ["https://duckduckgo.com", "https://duckduckgo.com/?q=1: {1} | 2: {2} | 3: {3} | 4: {4} 5: {5}"];

//     var gettingItem = browser.storage.sync.get('url');
//     gettingItem.then((baseUrl) => {
//         // return baseUrl;
//     })
// }

function goToUrl(e) {
    if (!e.target.classList.contains("gobutton")) {
        return;
    }
    saveBaseUrl("https://duckduckgo.com/?q=pos 1 {1} pos 2 {2} pos 3 {3} pos 1 again {1}");
    var splitting_char = ",";
    var userInput = document.getElementsByClassName("inputbox")[0].value;
    var userInputArray = userInput.split(splitting_char);
    var baseUrl = getBaseUrl();
    var newUrl = baseUrl;

    var i;
    for (i=1; i <= userInputArray.length; i++) {
        newUrl = newUrl.replaceAll("{" + i.toString() + "}", userInputArray[i-1])
    }
    console.log("waffletown")
    browser.tabs.create({
        url: newUrl
    });
}

var urls = ["one","two"]//getBaseUrls();
var sel = document.getElementById("urldropdown");
var i;
for (i=0; i<urls.length; i++) {
    var opt = document.createElement("option")
    opt.text = urls[i]
    opt.value = urls[i]
    sel.appendChild(opt)
}

document.addEventListener("click", goToUrl);

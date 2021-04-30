document.addEventListener("click", function(e) {
    if (!e.target.classList.contains("gobutton")) {
        return;
    }
    // let querying = browser.tabs.query({active:true, lastFocusedWindow:true})

    // idk how this works I copied it from stack overflow
    // browser.tabs.query({currentWindow: true, active: true}).then((tabs) => {
    //     let tab = tabs[0];
    //     var temp = tab.url;
    //     console.log(temp)
    // }, console.error)

    var splitting_char = ",";
    var userInput = document.getElementsByClassName("inputbox")[0].value;
    // userInput = querying[0].index.toString();
    var userInputArray = userInput.split(splitting_char);
    var baseUrl = "https://duckduckgo.com/?q=pos 1 {1} pos 2 {2} pos 3 {3} pos 1 again {1}";
    var newUrl = baseUrl;
    var i;
    for (i=1; i <= userInputArray.length; i++) {
        newUrl = newUrl.replaceAll("{" + i.toString() + "}", userInputArray[i-1])
    }
    console.log("waffletown")
    browser.tabs.create({
        url: newUrl
    });

});

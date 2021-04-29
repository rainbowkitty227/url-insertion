document.addEventListener("click", function(e) {
    if (!e.target.classList.contains("gobutton")) {
        return;
  }
    var splitting_char = ","
    var userInput = document.getElementsByClassName("inputbox")[0].value
    var userInputArray = userInput.split(splitting_char)
    var baseUrl = "https://duckduckgo.com/?q=pos 1 {1} pos 2 {2} pos 3 {3} pos 1 again {1}"
    var newUrl = baseUrl
    var i;
    for (i=1; i <= userInputArray.length; i++) {
        newUrl = newUrl.replaceAll("{" + i.toString() + "}", userInputArray[i-1])
    }

    browser.tabs.create({
        url: newUrl
    });

});

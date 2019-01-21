chrome.storage.sync.get(['QdefLink'], function(result) {
    document.getElementById("selOpt").selectedIndex = result.QdefLink;
    document.getElementById("setOpt").selectedIndex = result.QdefLink;
});
chrome.storage.sync.get(['QdefSrc'], function(result) {
    document.getElementById("serLogo").src =`images/serLogo/${result.QdefSrc}`
});
let checkBtn = document.getElementById('checkBtn');
checkBtn.onclick = function(element) {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        var con = document.getElementById("searchContent").value;
        var sel = document.getElementById("selOpt");
        var opt = sel.options[sel.selectedIndex].value;
        if(opt == "google"){
            let google = 'http://google.com/search?q='
            let link = google+ con;
            window.open(link);
        }
        if(opt == "youtube"){
            let youtube = "https://www.youtube.com/results?search_query="
            let Ytlink = youtube + con
            window.open(Ytlink);
        }
        if(opt == "bing"){
            let Bing = "https://www.bing.com/search?q="
            let Binglink = Bing + con
            window.open(Binglink);
        }
        if(opt == "baidu"){
            let Baidu = "https://www.baidu.com/s?ie=utf-8&f=8&rsv_bp=1&rsv_idx=1&tn=baidu&wd="
            let Baidulink = Baidu + con
            window.open(Baidulink);
        }
        if(opt == "ask"){
            let Ask = "https://www.search.ask.com/web?q="
            let Asklink = Ask + con
            window.open(Asklink);
        }
        if(opt == "stk"){
            let stake = "https://stackoverflow.com/search?q="
            let stkLink = stake + con
            window.open(stkLink);
        }
        if(opt == "wiki"){
            let wiki = "https://en.wikipedia.org/wiki/Special:Search?search="
            let wikiLink = wiki + con
            window.open(wikiLink);
        }
    });
}
let logoToSearch = document.getElementById('serLogo');
var sel = document.getElementById("selOpt");
var set = document.getElementById("setOpt");
sel.addEventListener('change',srcIcon)
set.addEventListener('change',srcIcon)
function srcIcon(){
        var opt = sel.options[sel.selectedIndex].value;
        if(opt == "google"){
            document.getElementById("serLogo").src ="images/serLogo/gl_30.png"
        }
        if (opt == "bing"){
            document.getElementById("serLogo").src ="images/serLogo/bing_30.png"
        }
        if (opt == "youtube"){
            document.getElementById("serLogo").src ="images/serLogo/yt_30.png"
        }
        if (opt == "ask"){
            document.getElementById("serLogo").src ="images/serLogo/ask_30.png"
        }
        if (opt == "baidu"){
            document.getElementById("serLogo").src ="images/serLogo/baidu_30.png"
        }
        if (opt == "stk"){
            document.getElementById("serLogo").src ="images/serLogo/stk_30.png"
        }
    if (opt == "wiki"){
        document.getElementById("serLogo").src ="images/serLogo/wiki_30.png"
    }

}
var contentTo = document.getElementById("searchContent")
contentTo.addEventListener("keydown", function (e) {
    if (e.keyCode === 13) {
        document.getElementById('checkBtn').click()
    }
});
var selOpt = document.getElementById("selOpt")
selOpt.addEventListener("keydown", function (e) {
    if (e.keyCode === 13) {
        document.getElementById('checkBtn').click()
    }
});
var set = document.getElementById('gear')
set.addEventListener("click", function(e){
    toggle();
})
var saveSet = document.getElementById("setOpt")
saveSet.addEventListener("change", function(e){
    srcIcon()
    var set = document.getElementById("setOpt");
    var QdefLinkVal = set.options[set.selectedIndex].value;
    chrome.storage.sync.set({QdefLink: QdefLinkVal}, function() {});
    if(QdefLinkVal== '0'){
        chrome.storage.sync.set({QdefSrc: 'gl_30.png'}, function() {});
    }
    if(QdefLinkVal== '1'){
        chrome.storage.sync.set({QdefSrc: 'yt_30.png'}, function() {});
    }
    if(QdefLinkVal== '2'){
        chrome.storage.sync.set({QdefSrc: 'stk_30.png'}, function() {});
    }
    if(QdefLinkVal== '3'){
        chrome.storage.sync.set({QdefSrc: 'wiki_30.png'}, function() {});
    }
    if(QdefLinkVal== '4'){
        chrome.storage.sync.set({QdefSrc: 'bing_30.png'}, function() {});
    }
    if(QdefLinkVal== '5'){
        chrome.storage.sync.set({QdefSrc: 'ask_30.png'}, function() {});
    }
    if(QdefLinkVal== '6'){
        chrome.storage.sync.set({QdefSrc: 'baidu_30.png'}, function() {});
    }
    var options = {
        type:"basic",
        title:"Settings saved",
        message:"Thanks for using Quick search",
        iconUrl:"images/icon_32.png"
    }
    chrome.notifications.create(options, function(){});
})
function toggle() {
    var element = document.getElementById("tog");
    element.classList.toggle("showHide");
}
var cmdLinked = document.getElementById("cmdlink");

cmdLinked.addEventListener('change',function(){
    var val = cmdLinked.options[cmdLinked.selectedIndex].value;
    chrome.storage.sync.set({QdefCmdLink: val}, function() {});
})



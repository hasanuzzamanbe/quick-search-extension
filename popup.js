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
    });
}
let logoToSearch = document.getElementById('serLogo');
var sel = document.getElementById("selOpt");
sel.addEventListener('change',(p)=>{
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

})
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

var cmdLink = 'http://google.com/search?q='
var meh = function () {
    var selection = window.getSelection();
    return selection.toString();
}

chrome.commands.onCommand.addListener((t)=> {
    chrome.tabs.executeScript({
        code: ';('+meh+')();',

    }, function (selection) {
        chrome.storage.sync.get(['QdefCmdLink'], function(result) {
            let link = result.QdefCmdLink+ selection;
            window.open(link);
        });

    })

});

chrome.contextMenus.create({
    title: "Quick search on",
    id: "hzByHover",
    contexts: ["selection"]

});
chrome.contextMenus.create({
    "title": "Google",
    id: "hzByHoverGoogle",
    parentId: "hzByHover",
    contexts: ["selection"]
});
chrome.contextMenus.create({
    title: "YouTube",
    id: "hzByHoverYt",
    parentId: "hzByHover",
    contexts: ["selection"],
});
chrome.contextMenus.create({
    title: "Stack overflow",
    id: "hzByHoverStk",
    parentId: "hzByHover",
    contexts: ["selection"],
});
chrome.contextMenus.create({
    title: "Wikipedia",
    id: "hzByHoverWiki",
    parentId: "hzByHover",
    contexts: ["selection"],
});
chrome.contextMenus.create({
    title: "Bing",
    id: "hzByHoverBing",
    parentId: "hzByHover",
    contexts: ["selection"],
});
chrome.contextMenus.create({
    title: "Baidu",
    id: "hzByHoverBaidu",
    parentId: "hzByHover",
    contexts: ["selection"],
});
chrome.contextMenus.create({
    title: "Ask",
    id: "hzByHoverAsk",
    parentId: "hzByHover",
    contexts: ["selection"],
});
chrome.contextMenus.onClicked.addListener((clickData) => {
    if (clickData.menuItemId == "hzByHoverGoogle" && clickData.selectionText) {
        let google = 'http://google.com/search?q='
        let googleTube = "https://www.youtube.com/results?search_query="
        let link = google + clickData.selectionText
        window.open(link);
    }
    if (clickData.menuItemId == "hzByHoverYt" && clickData.selectionText) {
        let YouTube = "https://www.youtube.com/results?search_query="
        let YouTubelink = YouTube + clickData.selectionText
        window.open(YouTubelink);
    }
    if (clickData.menuItemId == "hzByHoverBing" && clickData.selectionText) {
        let Bing = "https://www.bing.com/search?q="
        let Binglink = Bing + clickData.selectionText
        window.open(Binglink);
    }
    if (clickData.menuItemId == "hzByHoverBaidu" && clickData.selectionText) {
        let Baidu = "https://www.baidu.com/s?ie=utf-8&f=8&rsv_bp=1&rsv_idx=1&tn=baidu&wd="
        let Baidulink = Baidu + clickData.selectionText
        window.open(Baidulink);
    }
    if (clickData.menuItemId == "hzByHoverAsk" && clickData.selectionText) {
        let Ask = "https://www.search.ask.com/web?q="
        let Asklink = Ask + clickData.selectionText
        window.open(Asklink);
    }
    if (clickData.menuItemId == "hzByHoverStk" && clickData.selectionText) {
        let stk = "https://stackoverflow.com/search?q="
        let stklink = stk + clickData.selectionText
        window.open(stklink);
    }
    if (clickData.menuItemId == "hzByHoverWiki" && clickData.selectionText) {
        let wiki = "https://en.wikipedia.org/wiki/Special:Search?search="
        let wikiLink = wiki + clickData.selectionText
        window.open(wikiLink);
    }

})


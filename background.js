var contextMenuItem = {
	"id" : "hzByHover",
	"title" : "Quick Search",
	"contexts" : ["selection"]
};
chrome.contextMenus.create(contextMenuItem)
chrome.contextMenus.onClicked.addListener((clickData)=>{
		  if (clickData.menuItemId == "hzByHover" && clickData.selectionText) {
		  	var google = 'http://google.com/search?q='
		  	var googleTube = "https://www.youtube.com/results?search_query="
		  	var link = googleTube + clickData.selectionText
			    window.open(link)
		    }
        
		})


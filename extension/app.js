chrome.contextMenus.create({
	"title": "cakes view mode",
	"contexts":["all"],
	"onclick": callViewMode
});

function callViewMode(info, tabs) {
	chrome.tabs.executeScript(null, { file: "cakes.js" });
}

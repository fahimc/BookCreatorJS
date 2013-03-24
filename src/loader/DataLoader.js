var DataLoader = {
	ON_DATA_LOADED:"ON_DATA_LOADED",
	init : function() {
		Utensil.URLLoader.load("book.json", this.onLoadComplete);
	},
	onLoadComplete : function(t, x) {
		var data = eval('(' + t + ')');
		if (data.pages) {
			model.set("pages", data.pages);
		}
		if (data.contentsPage) {
			model.set("contentsPage", data.contentsPage);
		}
		
		Event.dispatch(DataLoader,DataLoader.ON_DATA_LOADED);
	}
}

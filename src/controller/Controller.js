var Controller=
{
	init:function()
	{
		Utensil.addListener(document.getElementById('addButton'),"click",this.onAddClicked);
		Utensil.addListener(document.getElementById('htmlButton'),"click",this.onHTMLClicked);
		Utensil.addListener(document.getElementById('saveButton'),"click",this.onSaveClicked);
		Utensil.addListener(document.getElementById('previewButton'),"click",this.onPreviewClicked);
		
		Book.populatePageData();
	},
	onAddClicked:function(event)
	{
		Book.createPage();
		if(Book.frame)Book.preview();
	},
	onRemoveClick:function(event)
	{
		var target = event.srcElement || event.target;
		var id = target.id.replace("-remove","");
		Book.removePage(id);
		if(Book.frame)Book.preview();
		Utensil.removeListener(target,"click",Controller.onRemoveClick);
		Book.removePageItem(id);
		
	},
	onHTMLClicked:function()
	{
		Book.getHTML();
	},
	onEditClick:function(event)
	{
		var target = event.srcElement || event.target;
		var id = target.id.replace("-edit","");
		Book.editPage(id);
	},
	onSaveClicked:function()
	{
		var data = {};
		data.contentsPage = model.get("contentsPage");
		data.pages = model.get("pages");
		data = JSON.stringify(data);
		
		Utensil.URLLoader.load("service/save.php",Controller.onSaveComplete,"POST","data="+data);
	},
	onSaveComplete:function(t,x)
	{
		console.log(t);
	},
	onPreviewClicked:function()
	{
		Book.preview();
	}
}

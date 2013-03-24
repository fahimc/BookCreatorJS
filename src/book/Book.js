var Book = {
	frame:null,
	createPage : function() {

		var contentElem = document.getElementById("sectionContent");
		var pages = model.get("pages");
		var titleItem = this.setTitle();
		content = titleItem.html + markdown.toHTML(contentElem.value);
		var item = this.getPageItem(titleItem.id);
		console.log(item, titleItem.id)
		if (!item) {
			pages.push({
				titleId : titleItem.id,
				html : content,
				value : contentElem.value
			});
			this.createPageItem(titleItem.id, titleItem.title);
		} else {
			item.titleId = titleItem.id;
			item.html = content;
			item.value = contentElem.value;
		}

	},
	populatePageData : function() {
		var arr = model.get("contentsPage");
		var a = 0;
		for (a; a < arr.length; a++) {
			this.createPageItem(arr[a].id, arr[a].title);

		}
	},
	createPageItem : function(id, title) {
		var li = document.createElement('li');
		li.id = id + "-li";
		li.innerHTML = "<p class='title'>" + title + "</p>";
		document.getElementById('pageTitles').appendChild(li);

		var button = document.createElement('button');
		button.id = id + "-remove";
		button.className = "remove"
		button.innerHTML = "remove";
		li.appendChild(button);

		editButton = document.createElement('button');
		editButton.id = id + "-edit";
		editButton.innerHTML = "edit";
		li.appendChild(editButton);

		Utensil.addListener(button, "click", Controller.onRemoveClick);
		Utensil.addListener(editButton, "click", Controller.onEditClick);
	},
	removePageItem : function(id) {
		var li = document.getElementById(id + "-li");
		document.getElementById('pageTitles').removeChild(li);
	},
	editPage : function(id) {
		var content = document.getElementById("sectionContent");
		var title = document.getElementById("sectionTitle");
		var arr = model.get("contentsPage");
		var a = 0;
		for (a; a < arr.length; a++) {
			if (arr[a].id == id) {
				title.value = arr[a].title;
			}
		}
		arr = model.get("pages");
		a = 0;
		for (a; a < arr.length; a++) {
			if (arr[a].titleId == id) {
				content.value = arr[a].value;
			}
		}
	},
	getContentsItem : function(id) {
		var arr = model.get("contentsPage");
		var a = 0;
		for (a; a < arr.length; a++) {
			if (arr[a].id == id) {
				return arr[a];
			}
		}
		return null;
	},
	getPageItem : function(id) {
		var arr = model.get("pages");
		var a = 0;
		for (a; a < arr.length; a++) {
			if (arr[a].titleId == id) {
				return arr[a];
			}
		}
		return null;
	},
	setTitle : function() {
		var contentsPage = model.get("contentsPage");
		var title = document.getElementById("sectionTitle");
		var titleId = title.value.toLowerCase().replace(" ", "-");
		var titleHTML = "<h1 id='" + titleId + "'>" + title.value + "</h1>";
		var item = this.getContentsItem(titleId);
		if (!item) {
			contentsPage.push({
				id : titleId,
				title : title.value,
				html : titleHTML
			});
			return contentsPage[contentsPage.length - 1];
		} else {
			item.id = titleId;
			item.value = title.value;
			item.titleHTML = titleHTML;
		}
		return item;

	},
	addTitleToContents : function(page, item, index) {
		return '<li class="title"><a href="#' + item.id + '">' + item.title + '</a></li><li>' + index + '</li>';
	},
	preview : function() {
		var html = "";
		html += HTMLContent.style;
		html += this.createContentsPage();
		html += this.createPageContent();
		if(!this.frame)this.frame = window.open(null, 'Book Preview', 'height=100%,width=500');
		this.frame.document.body.innerHTML = "";
		this.frame.document.write(html);
	},
	getHTML : function() {
		var html = HTMLContent.prefix;
		html += this.createContentsPage();
		html += this.createPageContent();
		html += HTMLContent.suffix;
		document.getElementById("htmlContent").value = html;
	},
	createContentsPage : function() {
		var page = HTMLContent.contentsPrefix;
		var contentsPage = model.get("contentsPage");
		for (var a = 0; a < contentsPage.length; a++) {
			var item = contentsPage[a];
			page += this.addTitleToContents(page, item, a + 1);
		}
		page += HTMLContent.contentsSuffix;

		return page;
	},
	createPageContent : function() {
		var html = "";
		var pages = model.get("pages");
		for (var a = 0; a < pages.length; a++) {
			html += HTMLContent.pagePrefix;
			html += pages[a].html;
			html += HTMLContent.pageSuffix;
		}
		return html;
	},
	removePage : function(id) {
		var arr = model.get("contentsPage");
		var a = 0;
		for (a; a < arr.length; a++) {
			if (arr[a].id == id) {
				arr.splice(a, 1);
			}
		}
		arr = model.get("pages");
		a = 0;
		for (a; a < arr.length; a++) {
			if (arr[a].titleId == id) {
				arr.splice(a, 1);
			}
		}

	}
};

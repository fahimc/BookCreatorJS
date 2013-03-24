var HTMLContent = {
	prefix : '<html xmlns="http://www.w3.org/1999/xhtml" lang="en"> <head> <meta http-equiv="Content-Type" content="text/html; charset=utf-8" /> <title>Book</title> <meta name="author" content="fahim.chowdhury" /> <!-- Date: 2013-03-22 --> <!-- <link type="text/css" rel="stylesheet" href="css/style.css"/> --> <script type="text/javascript"> function onLoad() { var children = document.body.childNodes; for (var a = 0; a < children.length; a++) { if (children[a].tagName == "DIV") { var h = children[a].clientHeight; children[a].clientHeight = Math.floor(h / 1295) * 1295; console.log(Math.ceil(h / 1295)); } } }; </script> <style type="text/css"> @import url(http://fonts.googleapis.com/css?family=Open+Sans:400,800,300); * { padding: 0; margin: 0; } html, body { width: 100%; height: 100%; font-family: "Open Sans", sans-serif; } .page { width: 895px; margin-left: auto; margin-right: auto; padding-top: 50px; border-bottom: 1px solid #666; padding-bottom: 50px; } .page img { width: 100%; } .contents, { min-height: 1295px; padding-bottom: 0px; padding-top: 10px; } .divider { padding-top: 100px; padding-bottom: 100px; } .divider h1 { font-size: 330%; } .contents ul { width: 100%; } .contents h1 { margin-bottom: 10px; } .contents ul li { display: inline-block; margin-bottom: 10px; border-bottom: 1px solid #e4e4e4; text-align: right; width: 9%; } .contents .title { width: 90%; text-align: left; } .cover { background: url(../image/bg.jpg) no-repeat #CF243A; position: relative; min-height: 1295px; padding-bottom: 0px; padding-top: 10px; } .cover .footer { bottom: 10%; right: 10%; color: #fff; position: absolute; font-size: 200%; } .cover h1 { color: #F2C623; font-weight: 700; font-size: 600%; width: 80%; text-align: left; margin-left: 10%; margin-top: 10%; line-height: 36px; } .cover h1 .small { font-size: 20%; } .cover .small { font-size: 80%; color: #F2C623; } .sectionTitle { padding: 10px 0px 10px 0px; border-bottom: 1px solid #e4e4e4; border-top: 1px solid #e4e4e4; } h2 { padding: 10px 0px 10px 0px; border-bottom: 1px solid #e4e4e4; } p { padding: 10px 0px 10px 0px; } pre { background-color: #f8f8f8; border: 1px solid #ccc; font-size: 13px; line-height: 19px; overflow: auto; padding: 6px 10px; border-radius: 3px; } pre code { margin: 0; padding: 0; background-color: transparent; border: none; } </style> </head> <!-- http://www.htmlpdf.com/ --> <body onload="onLoad()">',
	suffix : '<div class="page contents"></div></body></html>',
	style : '<style type="text/css"> @import url(http://fonts.googleapis.com/css?family=Open+Sans:400,800,300); * { padding: 0; margin: 0; } html, body { width: 100%; height: 100%; font-family: "Open Sans", sans-serif; } .page { width: 895px; margin-left: auto; margin-right: auto; padding-top: 50px; border-bottom: 1px solid #666; padding-bottom: 50px; } .page img { width: 100%; } .contents, { min-height: 1295px; padding-bottom: 0px; padding-top: 10px; } .divider { padding-top: 100px; padding-bottom: 100px; } .divider h1 { font-size: 330%; } .contents ul { width: 100%; } .contents h1 { margin-bottom: 10px; } .contents ul li { display: inline-block; margin-bottom: 10px; border-bottom: 1px solid #e4e4e4; text-align: right; width: 9%; } .contents .title { width: 90%; text-align: left; } .cover { background: url(../image/bg.jpg) no-repeat #CF243A; position: relative; min-height: 1295px; padding-bottom: 0px; padding-top: 10px; } .cover .footer { bottom: 10%; right: 10%; color: #fff; position: absolute; font-size: 200%; } .cover h1 { color: #F2C623; font-weight: 700; font-size: 600%; width: 80%; text-align: left; margin-left: 10%; margin-top: 10%; line-height: 36px; } .cover h1 .small { font-size: 20%; } .cover .small { font-size: 80%; color: #F2C623; } .sectionTitle { padding: 10px 0px 10px 0px; border-bottom: 1px solid #e4e4e4; border-top: 1px solid #e4e4e4; } h2 { padding: 10px 0px 10px 0px; border-bottom: 1px solid #e4e4e4; } p { padding: 10px 0px 10px 0px; } pre { background-color: #f8f8f8; border: 1px solid #ccc; font-size: 13px; line-height: 19px; overflow: auto; padding: 6px 10px; border-radius: 3px; } pre code { margin: 0; padding: 0; background-color: transparent; border: none; } </style>',
	contentsPrefix : '<div class="page contents"> <h1 class="sectionTitle">Contents</h1> <ul>',
	contentsSuffix : '</ul></div>',
	pagePrefix : '<div class="page">',
	pageSuffix : '</div>'
}

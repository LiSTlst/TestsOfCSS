window.onload=function(){
	var placeholder=document.createElement("img");
	placeholder.setAttribute("id","placeholder");
	placeholder.setAttribute("src","images/placeholder.jpg");
	placeholder.setAttribute("alt","my imagegallery");
	var description=document.createElement("p");
	description.setAttribute("id","description");
	var text=document.createTextNode("chose an image");
	description.appendChild(text);
	document.body.appendChild(placeholder);
	document.body.appendChild(description);
	prepareGallery();
}

function prepareGallery(){
	if(!document.getElementById) return false;
	if(!document.getElementsByTagName) return false;
	if(!document.getElementById("imagegallery")) return false;
	var gallery=document.getElementById("imagegallery");
	var links=gallery.getElementsByTagName("a");
	for(var i=0;i<links.length;i++){
		links[i].onclick=function(){
			return showPic(this)?false:true;
		}
	}
}

function showPic(whichpic){
	if(!document.getElementById("placeholder")) return false;
	var source = whichpic.getAttribute("href");
	var placeholder = document.getElementById("placeholder");
	if(placeholder.nodeName!="IMG") return false;
	placeholder.setAttribute("src",source);
	if(document.getElementById("description")){
		var text=whichpic.getAttribute("title")?whichpic.getAttribute("title"):"";
		var description=document.getElementById("description");
		if(description.firstChild.nodeType=3){
			description.firstChild.nodeValue=text;
		}
	}
	return true;
}

var script = document.createElement('script');
script.src = 'https://ajax.googleapis.com/ajax/libs/jquery/2.2.2/jquery.min.js';
script.type = 'text/javascript';
document.getElementsByTagName('head')[0].appendChild(script);

var div =document.createElement("div");
div.setAttribute("id", "showInDropDown");
div.innerHTML="<button id='Extn_button'>hello</button><ul id='Extn_ul'><li><a href='www.google.com' target='_blank'>my Site<a></li><li><a>05648231<a></li></ul>";
document.body.appendChild(div);

/*$(document).ready(function(){
    $('button').click(function(){
        $('ul').toggleClass('active')
    })
});*/
/*var button = document.createElement("Button");
button.setAttribute("id", "Extn_button");
button.onclick = function() {  };
button.innerHTML = "title...";



document.body.appendChild(button);*/
chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
      if( request.message === "clicked_browser_action" ) {

        if ( !document.getElementById("Extn_ul").classList.contains('active') )
    document.getElementById("Extn_ul").classList.add('active');
    document.getElementById("showInDropDown").classList.toggle('active');
    

document.getElementById("Extn_button").onclick=function(){
    document.getElementById("Extn_ul").classList.toggle('active');
    
}
        /*var word = prompt("enter word for search"),
  queue = [document.body],
  curr
;
while (curr = queue.pop()) {
  if (!curr.textContent.match(word)) continue;
  for (var i = 0; i < curr.childNodes.length; ++i) {
      switch (curr.childNodes[i].nodeType) {
          case Node.TEXT_NODE : // 3
              if (curr.childNodes[i].textContent.match(word)) {
                  console.log("Found!");
                  console.log(curr);
                  // you might want to end your search here.
              }
              break;
          case Node.ELEMENT_NODE : // 1
              queue.push(curr.childNodes[i]);
              break;
      }
  }
}
        var firstHref = $("a[href^='http']").eq(0).attr("href");
  
        console.log(firstHref);

      chrome.runtime.sendMessage({"message": "open_new_tab", "url": "www.google.com"});*/
      }
    }
  );
  
/*document.addEventListener('DOMContent',function(){

    var port=chrome.runtime.connect()
    
    var a=document.getElementById("results");
    a.innerHTML("<p>hi</p>")

})*/

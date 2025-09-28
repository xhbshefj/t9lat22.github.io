var win = window.open();
var url = "start.html";
var faviconUrl = "favicon.png"; 

// Transitions to the learning site named T9 OS
win.document.write(`
<!DOCTYPE html>
<html>
<head>
  <title>T9 OS</title>
  <link rel="icon" type="image/x-icon" href="${faviconUrl}">
</head>
<body style="margin:0; padding:0; overflow:hidden;"></body>
</html>
`);
win.document.close();

var iframe = win.document.createElement('iframe');
iframe.style.position = "fixed";
iframe.style.top = "0";
iframe.style.left = "0";
iframe.style.width = "100vw";
iframe.style.height = "100vh";
iframe.style.border = "none";
iframe.src = url;

win.document.body.appendChild(iframe);

function sendmail() {
      	var link = "mailto:uddhavghodake45@gmail.com" + "?cc=ghodakeuddhav18@gmail.com" + "&subject=" + escape(document.getElementById('subject').value) + "&body=" + escape(document.getElementById('myText').value);
      	window.location.href = link;
	}
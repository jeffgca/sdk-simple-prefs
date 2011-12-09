
self.port.on('get-prefs', function(data) {
	var s = ''; 
	for (i in data) {
		s += i + ': ' + data[i] + "\n";
	}
	console.log(s);
	$('#dump').html(s);
});

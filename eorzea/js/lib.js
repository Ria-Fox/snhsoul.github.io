
download = function download(canvas, prefix) {
  var dataURL = canvas.toDataURL();

  var byteString = atob(dataURL.split(',')[1]);
  var mimeString = dataURL.split(',')[0].split(':')[1].split(';')[0];

  var ia = new Uint8Array(byteString.length);
  for(var i = 0; i < byteString.length; i++) {
      ia[i] = byteString.charCodeAt(i);
  }

  saveAs(new Blob([ia], {type: mimeString}), prefix + Date.now() + '.png');
}

lastImage = false;

newImage = function newImage(src) {
  var i = new Image()
  i.src = src;
  return i
}

background = newImage('./image/passport_bg.png');

companies = {
  'MAELSTROM': newImage('./image/mark_maelstrom.png'),
  'TWIN ADDER': newImage('./image/mark_twin.png'),
  'IMMORTAL FLAME': newImage('./image/mark_immortal.png')
}

fdate = function fdate(d, current) {
  var valid = !isNaN(d.getTime())
  if(valid || current) { // is Date object valid?
    if(!valid) {
      d = new Date()
    }
    var y = d.getFullYear()
    var m = d.toString().slice(4, 7).toUpperCase()
    var d = ('0' + d.getDate()).slice(-2)
    return [d, m, y].join(' ')
  } else {
    return ''
  }
}

update = function update(image) {

  drawbg();

  var canvas = document.getElementById('passcanvas');
  var ctx = canvas.getContext('2d');

  var ptype     = document.getElementById('ptype').value;
  var surname   = document.getElementById('surname').value.toUpperCase();
  var givenname = document.getElementById('givenname').value.toUpperCase();
  var sex       = document.getElementById('sex').value;
  var bday      = fdate(new Date(document.getElementById('bday').value));
  var idate     = fdate(new Date(document.getElementById('idate').value), 1);
  var edate     = fdate(new Date(document.getElementById('edate').value));
  var author    = document.getElementById('author').value;
  var lname     = document.getElementById('lname').value;
  var pno       = document.getElementById('pno').value;

  if(image || lastImage) {
    console.log(image || lastImage)
    ctx.drawImage(image || lastImage, 57, 227, 415, 533);
  }

  ctx.font = '30px Roboto';
  ctx.fillText(ptype,     540, 190);
  ctx.fillText(surname,   540, 285);
  ctx.fillText(givenname, 540, 380);
  ctx.fillText(bday,      540, 475);
  ctx.fillText(sex,       540, 570);
  ctx.fillText(idate,     540, 665);
  ctx.fillText(edate,     540, 760);
  ctx.fillText(pno,       1020,475);
  ctx.fillText('EORZEA',  705, 190);

  if(companies[author]) {
    ctx.fillText(author, 1020, 665);
    ctx.drawImage(companies[author], 1325, 185, 120, 120);
  }
  // else ctx.fillText('PLEASE SELECT', 1020, 665);

  ctx.fillText(Math.floor(Math.random()*1000000000), 1115, 190);

  ctx.font = '700 30px "Nanum Barun Gothic"';
  ctx.fillText(lname, 1020, 760);
}

drawbg = function drawbg() {
  var canvas = document.getElementById('passcanvas');
  var ctx = canvas.getContext('2d');

  ctx.drawImage(background, 0, 0, 1476, 1039);
}

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

window.addEventListener('load', function() {
  var file = document.getElementById('file');

  file.addEventListener('click', function() {
    file.value = '';
  });

  file.addEventListener('change', function(event) {
    if(event && event.target.files) {
      var reader = new FileReader();

      reader.onload = function(event){
        image = new Image();
        image.src = event.target.result;

        lastImage = image;
        update(image);
      }

      reader.readAsDataURL(event.target.files[0]);
    }
  });

  document.getElementById('download').addEventListener('click', function() {
    download(document.getElementById('passcanvas'), 'passport');
  }, false);

  var inputs = document.querySelectorAll('.form input, .form select');

  [].forEach.call(inputs, function(o) {
    o.addEventListener('keyup',  function(){ update() });
    o.addEventListener('change', function(){ update() });
  })

  drawbg();

})

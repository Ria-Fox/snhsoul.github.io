var image = "";
lastimage = false;
window.addEventListener('load', function() {
    var bg = document.getElementById('background');
    var mst = document.getElementById('mst');
    var ife = document.getElementById('ife');
    var twa = document.getElementById('twa');

    draw = function draw() {
        bgdraw();
        var cname = $('#cname').val();
        var svrname = $('#svrname').val();
        var gender= $('#gender').val();
        var comp = $('#comp').val();
        var gcomp = $('#gcomp').val();
        var gcomp2 = $('#gcomp2').val();
        var iwith = $('#iwith').val();
        var like = $('#like').val();
        var dislike = $('#dislike').val();
        var dungeon1 = $('#dungeon1').val();
        var dungeon2 = $('#dungeon2').val();
        var now = $('#now').val();
        var want = $('#want').val();
        var style1 = $('#style1').val();
        var style2 = $('#style2').val();
        var style3 = $('#style3').val();
        var style4 = $('#style4').val();
        var style5 = $('#style5').val();
        var style6 = $('#style6').val();
        var style7 = $('#style7').val();
        var style8 = $('#style8').val();
        var job01 = $('#job01').val();
        var job02 = $('#job02').val();
        var job03 = $('#job03').val();
        var job04 = $('#job04').val();
        var job05 = $('#job05').val();
        var job06 = $('#job06').val();
        var job11 = $('#job11').val();
        var job12 = $('#job12').val();
        var job13 = $('#job13').val();
        var job21 = $('#job21').val();
        var job22 = $('#job22').val();
        var job23 = $('#job23').val();
        var job31 = $('#job31').val();
        var job32 = $('#job32').val();
        var job33 = $('#job33').val();
        var job41 = $('#job41').val();
        var job42 = $('#job42').val();
        var job43 = $('#job43').val();
        var job44 = $('#job44').val();
        var job45 = $('#job45').val();
        var job46 = $('#job46').val();
        var job47 = $('#job47').val();
        var job48 = $('#job48').val();
        var favjob1 = $('#favjob1').val();
        var favjob2 = $('#favjob2').val();
        var favjob3 = $('#favjob3').val();
        var favjob4 = $('#favjob4').val();
        var favjob5 = $('#favjob5').val();
        // var time = document.getElementById('time').value;
        // var time_m = document.getElementById('time_m').value;
        var canvas = document.getElementById("passcanvas");

        if (canvas.getContext) {
            var ctx = canvas.getContext("2d");
            var file = document.getElementById('file');
            ctx.beginPath();
            file.addEventListener('click', function() {
                file.value = ''
            });

            file.addEventListener('change', function(event) {
                if(event && event.target.files) {
                    var reader = new FileReader();
                    reader.onload = function(event){
                        image = new Image();
                        image.src = event.target.result;
                        lastImage = image;
                        image.crossOrigin = "Anonymous";
                        draw()
                    };
                    reader.readAsDataURL(event.target.files[0])
                }
            });
            if (image != '') {
                ctx.drawImage(image, 20, 132, 363, 466);
            }
            ctx.font = '500 30px "Noto Sans KR"';
            ctx.fillStyle = "rgba(255,255,255,1)";
            ctx.shadowColor = "rgba(0,0,0,1)";
            ctx.shadowOffsetY = 3;
            ctx.textAlign = "start";
            ctx.fillText(cname, 490, 167);
            ctx.fillText(svrname, 490, 233);
            ctx.fillText(gender, 490, 299);
            ctx.fillText(comp, 490, 365, 308);
            switch(gcomp) {
                case "0":
                    ctx.fillText('없음', 874, 510);
                    break;
                case "1":
                    ctx.shadowOffsetY = 0;
                    ctx.drawImage(mst, 660, 398, 141, 50);
                    ctx.shadowOffsetY = 3;
                    ctx.fillText('흑와단', 490, 433);
                    break;
                case "2":
                    ctx.shadowOffsetY = 0;
                    ctx.drawImage(twa, 660, 398, 141, 50);
                    ctx.shadowOffsetY = 3;
                    ctx.fillText('쌍사당', 490, 433);
                    break;
                case "3":
                    ctx.shadowOffsetY = 0;
                    ctx.drawImage(ife, 660, 398, 141, 50);
                    ctx.shadowOffsetY = 3;
                    ctx.fillText('불멸대', 490, 433);
                    break;
            }
            ctx.fillText(gcomp2, 582, 433);
            ctx.fillText(iwith, 490, 502);
            ctx.fillText(like, 928, 566, 586);
            ctx.fillText(dislike, 928, 630, 586);
            ctx.fillText(now, 928, 756, 586);
            ctx.fillText(want, 928, 820, 586);
            // ctx.fillText(time_m, 20, 150);
            ctx.textAlign = "center";
            ctx.fillText(style1, 124, 682);
            ctx.fillText(style2, 314, 682);
            ctx.fillText(style3, 124, 729);
            ctx.fillText(style4, 314, 729);
            ctx.fillText(style5, 124, 776);
            ctx.fillText(style6, 314, 776);
            ctx.fillText(style7, 124, 823);
            ctx.fillText(style8, 314, 823);
            ctx.fillText(job01, 874, 240);
            ctx.fillText(job02, 951, 240);
            ctx.fillText(job03, 1028, 240);
            ctx.fillText(job04, 1106, 240);
            ctx.fillText(job05, 1183, 240);
            ctx.fillText(job06, 1260, 240);
            ctx.fillText(job11, 1336, 240);
            ctx.fillText(job12, 1413, 240);
            ctx.fillText(job13, 1490, 240);
            ctx.fillText(job21, 874, 360);
            ctx.fillText(job22, 951, 360);
            ctx.fillText(job23, 1028, 360);
            ctx.fillText(job31, 1260, 360);
            ctx.fillText(job32, 1336, 360);
            ctx.fillText(job33, 1413, 360);
            ctx.fillText(job41, 874, 480);
            ctx.fillText(job42, 951, 480);
            ctx.fillText(job43, 1028, 480);
            ctx.fillText(job44, 1106, 480);
            ctx.fillText(job45, 1183, 480);
            ctx.fillText(job46, 1260, 480);
            ctx.fillText(job47, 1336, 480);
            ctx.fillText(job48, 1413, 480);
            ctx.font = '500 17px "Noto Sans KR"';
            ctx.shadowOffsetY = 2;
            switch(favjob1) {
                case "01":
                    ctx.fillText('주직업', 874, 270);
                    break;
                case "02":
                    ctx.fillText('주직업', 951, 270);
                    break;
                case "21":
                    ctx.fillText('주직업', 874, 390);
                    break;
            }
            switch(favjob2) {
                case "13":
                    ctx.fillText('주직업', 1490, 270);
                    break;
                case "23":
                    ctx.fillText('주직업', 1028, 390);
                    break;
            }
            switch(favjob3) {
                case "03":
                    ctx.fillText('주직업', 1028, 270);
                    break;
                case "04":
                    ctx.fillText('주직업', 1106, 270);
                    break;
                case "05":
                    ctx.fillText('주직업', 1183, 270);
                    break;
                case "06":
                    ctx.fillText('주직업', 1260, 270);
                    break;
                case "11":
                    ctx.fillText('주직업', 1336, 270);
                    break;
                case "12":
                    ctx.fillText('주직업', 1413, 270);
                    break;
                case "22":
                    ctx.fillText('주직업', 951, 390);
                    break;
            }
            switch(favjob4) {
                case "31":
                    ctx.fillText('주직업', 1260, 390);
                    break;
                case "32":
                    ctx.fillText('주직업', 1336, 390);
                    break;
                case "33":
                    ctx.fillText('주직업', 1413, 390);
                    break;
            }
            switch(favjob5) {
                case "41":
                    ctx.fillText('주직업', 874, 510);
                    break;
                case "42":
                    ctx.fillText('주직업', 951, 510);
                    break;
                case "43":
                    ctx.fillText('주직업', 1028, 510);
                    break;
                case "44":
                    ctx.fillText('주직업', 1106, 510);
                    break;
                case "45":
                    ctx.fillText('주직업', 1183, 510);
                    break;
                case "46":
                    ctx.fillText('주직업', 1260, 510);
                    break;
                case "47":
                    ctx.fillText('주직업', 1336, 510);
                    break;
                case "48":
                    ctx.fillText('주직업', 1413, 510);
                    break;
            }
            ctx.font = '500 16px "Noto Sans KR"';
            ctx.textAlign = "start";
            ctx.fillText(dungeon1, 928, 680, 586);
            ctx.fillText(dungeon2, 928, 700, 586);
            /*
            switch(time) {
                case "1":
                    ctx.font = '500 30px "Noto Sans KR"';
                    ctx.fillStyle = "rgba(158,44,44,1)";
                    ctx.shadowOffsetY = 0;
                    ctx.fillText('∨', 701, 560);
                    break;
                default:
                    ctx.fillText('', 701, 560);
                    break;
            }
            */
        }
    };
    bgdraw = function bgdraw() {
        var canvas = document.getElementById("passcanvas");
        if (canvas.getContext) {
            var ctx = canvas.getContext("2d");
            ctx.drawImage(bg, 0, 0, 1544, 887);
        }
    };
    downloadCanvas = function downloadCanvas(link, canvasId, filename) {
        link.href = document.getElementById(canvasId).toDataURL();
        link.download = filename;
    }
    document.getElementById('download').addEventListener('click', function() {
        downloadCanvas(this, 'passcanvas', 'ff14_tchinso.png');
    }, false);
})

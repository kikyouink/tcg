var request = require('request');
var fs = require('fs');

function format(num,n=3){
    return (Array(n).join('0') + num).slice(-n);
}

function download(src,filename){
    request(src, function (error, response, body) {
        if (!error && response.statusCode == 200){
            request(src).pipe(fs.createWriteStream('./img/' + filename));
        }
    })
}

function start(){
    console.log('开始下载...');
    for(let num=1;num<400;num++){
        let src='http://tcg.sanguosha.com/upload/cards/13/13'+format(num)+'.jpg';
        var filename = format(num)+'.jpg';
        download(src,filename);
    }
}

start();
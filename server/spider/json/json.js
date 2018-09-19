var request = require('request');
var cheerio = require('cheerio');
var fs = require('fs');

var num=0;
var json = [];

//id格式化
function format(num,n=3){
    return (Array(n).join('0') + num).slice(-n);
}

//处理数据
async function read() {
    // 2207 - 2475
    for (let i = 2207; i <= 2475; i++) {
        var url = 'http://tcg.sanguosha.com/card/' + i + '/detail';
        await dataRequest(url);
    }
    console.log('完毕! 共获得'+num+'条数据');
    json.sort(function(a,b){
        return parseInt(a.id)-parseInt(b.id);
    })
    fs.writeFileSync('./tcg.json', JSON.stringify(json));
}

//数据请求
function dataRequest(dataUrl) {
    return new Promise((res, rej) => {
        //发送请求
        request({
            url: dataUrl,
            method: 'GET'
        }, function (err, response, body) {
			// 暂时还无法判断出是否是重定向
            loadBody(body);
            res();
        })
    })
}

/**
* 解析html
*/
function loadBody(body) {
    var item = {};
    var $ = cheerio.load(body);
	// 容器
    var attributes = $('.attributes');
	// 检测容器是否存在
    if (attributes.length == 0) return;
    else num++;
	// 3个tr
    var tr0 = attributes.find('tr').eq(0);
    var tr1 = attributes.find('tr').eq(1);
    var tr2 = attributes.find('tr').eq(2);
	// 费用
    var cost = parseInt(tr0.find('.value').eq(0).text());
	// 势力支持
    var power = parseInt(tr0.find('.value').eq(1).find('ul').length);
	if(power==0) power=null;
	// 武/体
    if (tr0.find('.value').eq(2).text().indexOf('-') == -1) {
        var damage = parseInt(tr0.find('.value').eq(2).text().split('/')[0]);
        var hp = parseInt(tr0.find('.value').eq(2).text().split('/')[1]);
    }
    else {
        var damage = 0;
        var hp = 0;
    }
	// 名字
	var name = $('.name').text();
	// 融合成数据
    var data = cost + '-' + damage + '-' + hp;
	// 势力
    var country = tr1.find('.value').eq(0).text();
    if(country.indexOf('-')!=-1) country=null;
	// 类别
    var type = tr1.find('.value').eq(1).text();
	// 卡牌编号
    var id = format(tr2.find('.value').eq(2).text());
	// 描述
    var des = attributes.find('p').eq(0).text();
	// 单个对象
    item = {
        "id": id,
        "name": name,
        "country": country,
        "power": power,
        "type": type,
        "data": data,
        "des": des
    }
	// 亡羊补牢，删除一些不存在的属性，减小json文件的大小
	if(!country) delete item.country;
	if(!power) delete item.power;

    json.push(item);

    console.info('-------------- ' + id + ' ------------------');
    console.info('id：' + id);
    console.info('名称：' + name);
    if(country) console.info('国籍：' + country);
    if(power) console.info('势力需求：' + power);
    console.info('类别：' + type);
    console.info('数据：' + data);
    console.info('描述：' + des + '\n');
}

read();
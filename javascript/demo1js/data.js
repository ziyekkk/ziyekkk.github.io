var data = [];
var dataStr = '1、滚蛋吧！肿瘤君<br>\
<br>\
·生活总是要过的。<br>\
<br>\
<br>\
2、怪物之子<br>\
<br>\
·我的梦很多，都有你。<br>\
<br>\
<br>\
3、奇怪的她<br>\
<br>\
·重返青春的奶奶。<br>\
<br>\
<br>\
4、开心家族<br>\
<br>\
·我孤身一人可是无比倒霉。<br>\
<br>\
<br>\
5、让子弹飞<br>\
<br>\
·让子弹，飞一会儿。<br>\
<br>\
<br>\
6、大鱼海棠<br>\
<br>\
·北海有鱼，伴你余生。<br>\
<br>\
<br>\
7、魔兽世界<br>\
<br>\
·为了艾泽拉斯。<br>\
<br>\
<br>\
8、忍者神龟2<br>\
<br>\
·rap！rap！<br>\
<br>\
<br>\
9、惊天魔盗团2<br>\
<br>\
·哎呦不错哟~<br>\
<br>\
<br>\
10、忍者神龟<br>\
<br>\
·rap！rap！<br>\
';
var d = dataStr.split('<br><br><br>');
for (var i = 0; i < d.length; i++) {
    var c = d[i].split('<br><br>');
    data.push({
        img: 'movieinfo'+c[0].split('、')[0]+ '.jpg',
        caption: c[0].split('、')[1],
        desc: c[1]
    });
    //console.log(c[0].replace('、', ' ') + '.jpg');
};
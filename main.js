const questdb = require('./questdb'),
	  express = require('express'),
	  app = express();

let target = {
	'姜京华':785971809
	// '朱江' : 597979188,
	// '杨潮奔' : 842293890,
	// '邓杰' : 974614592,
	// '潘毅' : 407666067
};

// app.get('/', function (req, res) {
	// init(req,res);
	// res.send('Hello World!');
// });


function init(){
	var baseTime = 0;
	// for(let key in target){
		// setTimeout(function(){
	questdb(785971809,'姜京华');
			// console.log(result);
			// res.send(result);
		// },baseTime);

		// baseTime += 1000;
	// }
}

init();


/*
杨潮奔
https://h5.qzone.qq.com/proxy/domain/ic2.qzone.qq.com/cgi-bin/feeds/feeds_html_act_all?
uin=815808919
&hostuin=842293890
&scope=0
&filter=all
&flag=1
&refresh=0
&firstGetGroup=0
&mixnocache=0
&scene=0
&begintime=undefined
&icServerTime=
&start=10
&count=10
&sidomain=qzonestyle.gtimg.cn
&useutf8=1
&outputhtmlfeed=1
&refer=2
&r=0.3985664646782665&g_tk=705264284

姜京华1
https://h5.qzone.qq.com/proxy/domain/ic2.qzone.qq.com/cgi-bin/feeds/feeds_html_act_all?
uin=815808919
&hostuin=785971809
&scope=0
&filter=all
&flag=1
&refresh=0
&firstGetGroup=0
&mixnocache=0
&scene=0
&begintime=undefined
&icServerTime=
&start=10
&count=10
&sidomain=qzonestyle.gtimg.cn
&useutf8=1
&outputhtmlfeed=1
&refer=2
&r=0.6451061034772392
&g_tk=705264284

姜京华2
https://h5.qzone.qq.com/proxy/domain/ic2.qzone.qq.com/cgi-bin/feeds/feeds_html_act_all?
uin=815808919
&hostuin=785971809
&scope=0
&filter=all
&flag=1
&refresh=0
&firstGetGroup=0
&mixnocache=0
&scene=0
&begintime=undefined
&icServerTime=
&start=20
&count=10
&sidomain=qzonestyle.gtimg.cn
&useutf8=1
&outputhtmlfeed=1
&refer=2
&r=0.25324068726722837
&g_tk=705264284
*/














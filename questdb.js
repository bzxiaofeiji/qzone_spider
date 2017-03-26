//request db

const request = require('request'),
 	  cheerio = require('cheerio'),
 	  fs = require('fs');

const cookie = 'tvfe_boss_uuid=7545a2a486511537; pac_uid=1_815808919; eas_sid=k1Q4g8w5V9x41880s5e190N5k4; ptui_loginuin=190131426; pgv_pvid=5289510468; o_cookie=815808919; RK=gDni+yjaVG; pgv_pvi=1103666176; __Q_w_s__QZN_TodoMsgCnt=1; randomSeed=568653; __Q_w_s_hat_seed=1; QZ_FE_WEBP_SUPPORT=1; p_uin=o0815808919; p_skey=DzVJs4qjq6zAzJ*qAjQYtBgp*I1UMkEXMP7IR7Ts-hE_; pt4_token=a56fFi9KpCMsRRW4meOHPumCGM8TFQXu*Lvzcw5IGDo_; pt2gguin=o0815808919; ptcz=9f39a5f9f0af125a34f17ccf9f894d85f5b741679f83ba62c7747817b79c66d7';

let getUrl = (qq,start,count) => {
	return `https://h5.qzone.qq.com/proxy/domain/ic2.qzone.qq.com/cgi-bin/feeds/feeds_html_act_all?uin=815808919&hostuin=${qq}&scope=0&filter=all&flag=1&refresh=0&firstGetGroup=0&mixnocache=0&scene=0&begintime=undefined&icServerTime=&start=${start}&count=${count}&sidomain=qzonestyle.gtimg.cn&useutf8=1&outputhtmlfeed=1&refer=2&r=0.8792439652911068&g_tk=705264284`;
}

//格式化数据
let formatedDB = (str) => {

	let result = str.replace('_Callback(','');

	result = result.substring(0,result.length-2);

	let db = eval('('+result+')');
	if(db.code == 0){
		return db.data.friend_data;
	}else{
		console.log(db.message);
		return [];
	}

}

// 接拼数据
let optiondb = (olddb,newdb) => {
	newdb.forEach(function(item){
		if(item){
			olddb.push(item);	
		}
	});
	return olddb;
}

//存储数据
let savedb = (db,name) => {
	return new Promise((resolve,reject)=>{
		fs.writeFile(name+'.json',db,function(err){
			if(err){
				reject(err);
			}else{
				resolve();
			}
		})
	});
}

//请求数据
let requestdb = (option,cb) =>{
	request(option,function(error,response,body) {
		if (!error && response.statusCode == 200){
			cb(formatedDB(body));
		}
	})
}

module.exports = (qq,name) => {
	let start = 0,
		count = 50,
		db = [],
		option = {
			url:getUrl(qq,start,count),
			headers:{
				cookie:cookie
			}
		};

	let callback = (data) => {
		//数据已请求完成
		if(data.length == 1 && data[0] == null){
			console.log(db.length);
			//保存数据
			savedb(JSON.stringify(db),name)
				.then(()=>{
					console.log('存储成功');
				})
				.catch((err) => {
					console.log('存储失败 :'+err);
				});
		}else{
			//拼接数据
			db = optiondb(db,data);
			start += count;
			console.log('start='+start);
			option = {
				url:getUrl(qq,start,count),
				headers:{
					cookie:cookie
				}
			};
			//延迟5s
			setTimeout(function(){
				requestdb(option,callback);
			},5000);
		}
	};

	requestdb(option,callback);
}

//cookie
/*
tvfe_boss_uuid=7545a2a486511537;
pac_uid=1_815808919;
ptui_loginuin=190131426;    ??? 
pgv_pvid=5289510468;    1
o_cookie=815808919;    1
RK=gDni+yjaVG;    1
pgv_pvi=1103666176;    1 
__Q_w_s__QZN_TodoMsgCnt=1;    1 
pgv_si=s6314313728;    1 
randomSeed=568653;    1 
pgv_info=ssid=s8430099397;    1 
__Q_w_s_hat_seed=1;    1 
Loading=Yes;    1 
qqmusic_uin=;    1 
qqmusic_key=;    1 
qqmusic_fromtag=;    1
qzmusicplayer=qzone_player_815808919_1490407921306;    1 
QZ_FE_WEBP_SUPPORT=1;    1 
p_uin=o0815808919;   1
p_skey=DzVJs4qjq6zAzJ*qAjQYtBgp*I1UMkEXMP7IR7Ts-hE_;     1
pt4_token=a56fFi9KpCMsRRW4meOHPumCGM8TFQXu*Lvzcw5IGDo_;    1
rv2=80CF48326DCEF3782C977B69631A3A472F353C97E917FCACF4; 
property20=15C897E31D5701F4AEDA23F2433874A7043B9899C5357936B49BCBFC104487D57BD73E4F47BD648D; 
pt2gguin=o0815808919;     1
uin=o0815808919;    1 
skey=MH9nRcNNuo;    1
ptisp=cm;     1
ptcz=9f39a5f9f0af125a34f17ccf9f894d85f5b741679f83ba62c7747817b79c66d7;     1
qzspeedup=sdch    1
*/





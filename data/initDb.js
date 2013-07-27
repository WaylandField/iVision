var dao = require('./../backend/dao/base');
var naviId = '1';
var userService =require('./../backend/service/UserService');

var addDefaultUser = function(){
    userService.cryptPassword('admin', function(err, hash){
	var users = [
		{username:'admin', firstName: 'Yichang', mi: 'E', lastName: 'Tian', password: hash}
	];
	dao.delete('user', {}, function(){
	    dao.addNew('user', users, function(){
		console.log("Add user completed");
		dao.close();
	    });
	});
    });
};


var addIssue = function(){
dao.delete('issue', {}, function(){
    
    var hosts = ["www.xxx.com","www.aaa.com","www.bbb.com","www.ccc.com"];
    var issues = ["Some items are not supported",
                 "Processor load is too high",
                 "Issue 1 1 1 1",
                 "Issue 2222222"];
    var count = 100;
    var mockData = [];
    while(count-->0){
        mockData.push({
            host: hosts[count%4],
            name: issues[count%4],
            changeTime:((new Date()).getTime()-Math.ceil(Math.random()*30*86400000))
        });
    }
    // add navigation
    dao.addNew('issue', mockData, function(){
        console.log("Add issues completed");
	addDefaultUser();
    });
});
};

var addNavi = function(){
dao.delete('navi', {}, function(){
    // add navigation
    dao.addNew('navi', [{id:naviId, label:'默认导航', items:[
        {id:'home',
         label:'主控台',
         url:'navi/home',
	icon:'icon-th-large icon-white'},
        {id:'monitor',
         label:'系统监控',
         url:'navi/monitor',
	icon:'icon-eye-open icon-white'},
        {id:'alarm',
         label:'系统预警',
         url:'navi/alarm',
	icon:'icon-warning-sign icon-white'},
        {id:'inventory',
         label:'硬件设备',
         url:'navi/inventory',
	icon:'icon-hdd icon-white'},
        {id:'reports',
         label:'分析报告',
         url:'navi/reports',
	icon:'icon-list-alt icon-white'}
    ]},{id:"2", label:'电信', items:[
        {id:'delay',
         label:'实时延迟',
         url:'navi/delay',
	icon:'icon-th-large icon-white'},
        {id:'charts',
         label:'数据图表',
         url:'navi/charts',
	icon:'icon-eye-open icon-white'},
        {id:'datatable',
         label:'数据表',
         url:'navi/datatable',
	icon:'icon-warning-sign icon-white'}
    ]}], function(){
        console.log("Add navigation completed");
	    addIssue();
    });
});
};

addNavi();

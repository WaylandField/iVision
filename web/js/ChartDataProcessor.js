define(['backbone', 'underscore'],
       function(Backbone, _){
           var processor = {};

           processor.weekly = function(models, timeField){
               var now = new Date();
               return _.filter(models, function(model){
                   var lastWeek=now.getTime()-86400000*7;
                   return model.get(timeField)>lastWeek;
               });
           };
           processor.monthly = function(){};
           /**
            * return a grouped counted array for a list
            * input : list of models
            * output : [{grouper, total, counts[7]//7 days array}]
            */
           processor.weeklyGroupCount = function(models, timeField, groupField){
               models = _.groupBy(this.weekly(models, 'changeTime'), function(model){
                   return model.get(groupField);
               });
               var now = new Date();
               var result = [];
               for(var k in models){
                   var temp = {};
                   temp.grouper= k;
                   temp.total= models[k].length;
                   var group= _.countBy(models[k], function(model){
                       return Math.ceil((now.getTime()-model.get(timeField))/86400000);
                   });
                   temp.counts = [];
                   var index=7;
                   while(index-->0){
                       temp.counts.push(group[index]?group[index]:0);
                   }
                   result.push(new Backbone.Model(temp));
               }
               return result;
           };
           /**
            * input should like the out put of weeklyGroupCount
            * output
            * {xArix:{}, series:[]}
            */
           processor.formatGroupCount4Chart = function(data){
               var grouperArray = [];
               for(var k in data){
                   // get one records
                   var d = data[k];
                   grouperArray.push(d);
               }
           };

           processor.highstock =  function(){
               var chart = {
		           chart : {
			           events : {
				           load : function() {

					           // set up the updating of the chart each second
					           var series = this.series[0];
					           setInterval(function() {
						           var x = (new Date()).getTime(), // current time
						               y = Math.round(Math.random() * 100);
						           series.addPoint([x, y], true, true);
					           }, 1000);
				           }
			           }
		           },
		           
		           rangeSelector: {
			           buttons: [{
				           count: 1,
				           type: 'minute',
				           text: '1M'
			           }, {
				           count: 5,
				           type: 'minute',
				           text: '5M'
			           }, {
				           type: 'all',
				           text: 'All'
			           }],
			           inputEnabled: false,
			           selected: 0
		           },
		           
		           title : {
			           text : 'Live random data'
		           },
		           series : [{
			           name : 'Random data',
			           data : (function() {
				           // generate an array of random data
				           var data = [], time = (new Date()).getTime(), i;

				           for( i = -999; i <= 0; i++) {
					           data.push([
						           time + i * 1000,
						           Math.round(Math.random() * 100)
					           ]);
				           }
				           return data;
			           })()
		           }]
	           };
               return chart;
           },

           processor.process = function(data, options){
               var  categories= [];
               for(var k in data){
                   hosts.push(k);
               }
               
               var result = {
                   chart: {
                       type: options.type
                   },
                   title: {
                       text: options.title
                   },
                   subtitle: {
                       text: options.subtitle
                   },
                   xAxis: {
                       categories: categories,
                       title: {
                           text: null
                       }
                   },
                   yAxis: {
                       min: 0,
                       title: {
                           text: 'issue counts',
                           align: 'high'
                       },
                       labels: {
                           overflow: 'justify'
                       }
                   },
                   tooltip: {
                       valueSuffix: ' '
                   },
                   plotOptions: {
                       bar: {
                           dataLabels: {
                               enabled: true
                           }
                       }
                   },
                   legend: {
                       layout: 'vertical',
                       align: 'right',
                       verticalAlign: 'top',
                       x: -100,
                       y: 100,
                       floating: true,
                       borderWidth: 1,
                       backgroundColor: '#FFFFFF',
                       shadow: true
                   },
                   credits: {
                       enabled: false
                   },
                   series: [{
                       name: 'Monthly status',
                       data: [107, 31, 635, 203]
                   }, {
                       name: 'Weekly status',
                       data: [133, 156, 947, 408]
                   }]
               };
               return result;
           };

           processor.sampleChart = function(){
               var colors = Highcharts.getOptions().colors,
                   categories = ['MSIE', 'Firefox', 'Chrome', 'Safari', 'Opera'],
                   name = 'Browser brands',
                   data = [{
                       y: 55.11,
                       color: colors[0],
                       drilldown: {
                           name: 'MSIE versions',
                           categories: ['MSIE 6.0', 'MSIE 7.0', 'MSIE 8.0', 'MSIE 9.0'],
                           data: [10.85, 7.35, 33.06, 2.81],
                           color: colors[0]
                       }
                   }, {
                       y: 21.63,
                       color: colors[1],
                       drilldown: {
                           name: 'Firefox versions',
                           categories: ['Firefox 2.0', 'Firefox 3.0', 'Firefox 3.5', 'Firefox 3.6', 'Firefox 4.0'],
                           data: [0.20, 0.83, 1.58, 13.12, 5.43],
                           color: colors[1]
                       }
                   }, {
                       y: 11.94,
                       color: colors[2],
                       drilldown: {
                           name: 'Chrome versions',
                           categories: ['Chrome 5.0', 'Chrome 6.0', 'Chrome 7.0', 'Chrome 8.0', 'Chrome 9.0',
                                        'Chrome 10.0', 'Chrome 11.0', 'Chrome 12.0'],
                           data: [0.12, 0.19, 0.12, 0.36, 0.32, 9.91, 0.50, 0.22],
                           color: colors[2]
                       }
                   }, {
                       y: 7.15,
                       color: colors[3],
                       drilldown: {
                           name: 'Safari versions',
                           categories: ['Safari 5.0', 'Safari 4.0', 'Safari Win 5.0', 'Safari 4.1', 'Safari/Maxthon',
                                        'Safari 3.1', 'Safari 4.1'],
                           data: [4.55, 1.42, 0.23, 0.21, 0.20, 0.19, 0.14],
                           color: colors[3]
                       }
                   }, {
                       y: 2.14,
                       color: colors[4],
                       drilldown: {
                           name: 'Opera versions',
                           categories: ['Opera 9.x', 'Opera 10.x', 'Opera 11.x'],
                           data: [ 0.12, 0.37, 1.65],
                           color: colors[4]
                       }
                   }];
               
               
               // Build the data arrays
               var browserData = [];
               var versionsData = [];
               for (var i = 0; i < data.length; i++) {
                   
                   // add browser data
                   browserData.push({
                       name: categories[i],
                       y: data[i].y,
                       color: data[i].color
                   });
                   
                   // add version data
                   for (var j = 0; j < data[i].drilldown.data.length; j++) {
                       var brightness = 0.2 - (j / data[i].drilldown.data.length) / 5 ;
                       versionsData.push({
                           name: data[i].drilldown.categories[j],
                           y: data[i].drilldown.data[j],
                           color: Highcharts.Color(data[i].color).brighten(brightness).get()
                       });
                   }
               }
               
               // Create the chart
               var chart = {
                   chart: {
                       type: 'pie'
                   },
                   title: {
                       text: 'Browser market share, April, 2011'
                   },
                   yAxis: {
                       title: {
                           text: 'Total percent market share'
                       }
                   },
                   plotOptions: {
                       pie: {
                           shadow: false,
                           center: ['50%', '50%']
                       }
                   },
                   tooltip: {
        	           valueSuffix: '%'
                   },
                   series: [{
                       name: 'Browsers',
                       data: browserData,
                       size: '60%',
                       dataLabels: {
                           formatter: function() {
                               return this.y > 5 ? this.point.name : null;
                           },
                           color: 'white',
                           distance: -30
                       }
                   }, {
                       name: 'Versions',
                       data: versionsData,
                       size: '80%',
                       innerSize: '60%',
                       dataLabels: {
                           formatter: function() {
                               // display only if larger than 1
                               return this.y > 1 ? '<b>'+ this.point.name +':</b> '+ this.y +'%'  : null;
                           }
                       }
                   }]
               };
               return chart;
           };
           
           processor.bubble = function(){
               var chart = {

	               chart: {
	                   type: 'bubble',
	                   zoomType: 'xy'
	               },

	               title: {
	    	           text: 'Highcharts Bubbles'
	               },
	               
	               series: [{
	                   data: [[97,36,79],[94,74,60],[68,76,58],[64,87,56],[68,27,73],[74,99,42],[7,93,87],[51,69,40],[38,23,33],[57,86,31]]
	               }, {
	                   data: [[25,10,87],[2,75,59],[11,54,8],[86,55,93],[5,3,58],[90,63,44],[91,33,17],[97,3,56],[15,67,48],[54,25,81]]
	               }, {
	                   data: [[47,47,21],[20,12,4],[6,76,91],[38,30,60],[57,98,64],[61,17,80],[83,60,13],[67,78,75],[64,12,10],[30,77,82]]
	               }]
	               
	           };
               return chart;
           };

           processor.spider = function(){
               return {
	               
	               chart: {
	                   polar: true,
	                   type: 'line'
	               },
	               
	               title: {
	                   text: 'Budget vs spending',
	                   x: -80
	               },
	               
	               pane: {
	    	           size: '80%'
	               },
	               
	               xAxis: {
	                   categories: ['Sales', 'Marketing', 'Development', 'Customer Support', 
	                                'Information Technology', 'Administration'],
	                   tickmarkPlacement: 'on',
	                   lineWidth: 0
	               },
	               
	               yAxis: {
	                   gridLineInterpolation: 'polygon',
	                   lineWidth: 0,
	                   min: 0
	               },
	               
	               tooltip: {
	    	           shared: true,
	                   pointFormat: '<span style="color:{series.color}">{series.name}: <b>${point.y:,.0f}</b><br/>'
	               },
	               
	               legend: {
	                   align: 'right',
	                   verticalAlign: 'top',
	                   y: 100,
	                   layout: 'vertical'
	               },
	               
	               series: [{
	                   name: 'Allocated Budget',
	                   data: [43000, 19000, 60000, 35000, 17000, 10000],
	                   pointPlacement: 'on'
	               }, {
	                   name: 'Actual Spending',
	                   data: [50000, 39000, 42000, 31000, 26000, 14000],
	                   pointPlacement: 'on'
	               }]
	               
	           };
               
           };

           processor.autoUpdate = function(){
               Highcharts.setOptions({
                   global: {
                       useUTC: false
                   }
               });
               
               var chart;
               chart = {
                   chart: {
                       type: 'spline',
                       animation: Highcharts.svg, // don't animate in old IE
                       marginRight: 10,
                       events: {
                           load: function() {
                               
                               // set up the updating of the chart each second
                               var series = this.series[0];
                               setInterval(function() {
                                   var x = (new Date()).getTime(), // current time
                                       y = Math.random();
                                   series.addPoint([x, y], true, true);
                               }, 1000);
                           }
                       }
                   },
                   title: {
                       text: 'Live random data'
                   },
                   xAxis: {
                       type: 'datetime',
                       tickPixelInterval: 150
                   },
                   yAxis: {
                       title: {
                           text: 'Value'
                       },
                       plotLines: [{
                           value: 0,
                           width: 1,
                           color: '#808080'
                       }]
                   },
                   tooltip: {
                       formatter: function() {
                           return '<b>'+ this.series.name +'</b><br/>'+
                               Highcharts.dateFormat('%Y-%m-%d %H:%M:%S', this.x) +'<br/>'+
                               Highcharts.numberFormat(this.y, 2);
                       }
                   },
                   legend: {
                       enabled: false
                   },
                   exporting: {
                       enabled: false
                   },
                   series: [{
                       name: 'Random data',
                       data: (function() {
                           // generate an array of random data
                           var data = [],
                               time = (new Date()).getTime(),
                               i;
                           
                           for (i = -19; i <= 0; i++) {
                               data.push({
                                   x: time + i * 1000,
                                   y: Math.random()
                               });
                           }
                           return data;
                       })()
                   }]
               };
               return chart;
           };

           processor.areaChart = function(){
               return  {
                   chart: {
                       type: 'area'
                   },
                   title: {
                       text: 'Area chart with negative values'
                   },
                   xAxis: {
                       categories: ['Apples', 'Oranges', 'Pears', 'Grapes', 'Bananas']
                   },
                   credits: {
                       enabled: false
                   },
                   series: [{
                       name: 'John',
                       data: [5, 3, 4, 7, 2]
                   }, {
                       name: 'Jane',
                       data: [2, -2, -3, 2, 1]
                   }, {
                       name: 'Joe',
                       data: [3, 4, 4, -2, 5]
                   }]
               };
           };
           
           processor.lines = function(){
               return {
                   chart: {
                       type: 'spline'
                   },
                   title: {
                       text: 'Wind speed during two days'
                   },
                   subtitle: {
                       text: 'October 6th and 7th 2009 at two locations in Vik i Sogn, Norway'
                   },
                   xAxis: {
                       type: 'datetime'
                   },
                   yAxis: {
                       title: {
                           text: 'Wind speed (m/s)'
                       },
                       min: 0,
                       minorGridLineWidth: 0,
                       gridLineWidth: 0,
                       alternateGridColor: null,
                       plotBands: [{ // Light air
                           from: 0.3,
                           to: 1.5,
                           color: 'rgba(68, 170, 213, 0.1)',
                           label: {
                               text: 'Light air',
                               style: {
                                   color: '#606060'
                               }
                           }
                       }, { // Light breeze
                           from: 1.5,
                           to: 3.3,
                           color: 'rgba(0, 0, 0, 0)',
                           label: {
                               text: 'Light breeze',
                               style: {
                                   color: '#606060'
                               }
                           }
                       }, { // Gentle breeze
                           from: 3.3,
                           to: 5.5,
                           color: 'rgba(68, 170, 213, 0.1)',
                           label: {
                               text: 'Gentle breeze',
                               style: {
                                   color: '#606060'
                               }
                           }
                       }, { // Moderate breeze
                           from: 5.5,
                           to: 8,
                           color: 'rgba(0, 0, 0, 0)',
                           label: {
                               text: 'Moderate breeze',
                               style: {
                                   color: '#606060'
                               }
                           }
                       }, { // Fresh breeze
                           from: 8,
                           to: 11,
                           color: 'rgba(68, 170, 213, 0.1)',
                           label: {
                               text: 'Fresh breeze',
                               style: {
                                   color: '#606060'
                               }
                           }
                       }, { // Strong breeze
                           from: 11,
                           to: 14,
                           color: 'rgba(0, 0, 0, 0)',
                           label: {
                               text: 'Strong breeze',
                               style: {
                                   color: '#606060'
                               }
                           }
                       }, { // High wind
                           from: 14,
                           to: 15,
                           color: 'rgba(68, 170, 213, 0.1)',
                           label: {
                               text: 'High wind',
                               style: {
                                   color: '#606060'
                               }
                           }
                       }]
                   },
                   tooltip: {
                       valueSuffix: ' m/s'
                   },
                   plotOptions: {
                       spline: {
                           lineWidth: 4,
                           states: {
                               hover: {
                                   lineWidth: 5
                               }
                           },
                           marker: {
                               enabled: false
                           },
                           pointInterval: 3600000, // one hour
                           pointStart: Date.UTC(2009, 9, 6, 0, 0, 0)
                       }
                   },
                   series: [{
                       name: 'Hestavollane',
                       data: [4.3, 5.1, 4.3, 5.2, 5.4, 4.7, 3.5, 4.1, 5.6, 7.4, 6.9, 7.1,
                              7.9, 7.9, 7.5, 6.7, 7.7, 7.7, 7.4, 7.0, 7.1, 5.8, 5.9, 7.4,
                              8.2, 8.5, 9.4, 8.1, 10.9, 10.4, 10.9, 12.4, 12.1, 9.5, 7.5,
                              7.1, 7.5, 8.1, 6.8, 3.4, 2.1, 1.9, 2.8, 2.9, 1.3, 4.4, 4.2,
                              3.0, 3.0]
                       
                   }, {
                       name: 'Voll',
                       data: [0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.1, 0.0, 0.3, 0.0,
                              0.0, 0.4, 0.0, 0.1, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0,
                              0.0, 0.6, 1.2, 1.7, 0.7, 2.9, 4.1, 2.6, 3.7, 3.9, 1.7, 2.3,
                              3.0, 3.3, 4.8, 5.0, 4.8, 5.0, 3.2, 2.0, 0.9, 0.4, 0.3, 0.5, 0.4]
                   }]
                   ,
                   navigation: {
                       menuItemStyle: {
                           fontSize: '10px'
                       }
                   }
               }
           };

           return processor;
       });
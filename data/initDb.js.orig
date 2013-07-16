var dao = require('./../dao/base');
var naviId = dao.getObjectId();
var quickAccessId = dao.getObjectId();
var carouselId = dao.getObjectId();
var step1 = dao.getObjectId();
var step2 = dao.getObjectId();
var step3 = dao.getObjectId();
var step4 = dao.getObjectId();
var footstep1 = dao.getObjectId();

var thumb1 = dao.getObjectId();
var thumb2 = dao.getObjectId();
var thumb3 = dao.getObjectId();

var addPage = function(){
//add pages
dao.delete('page', {}, function(){
    dao.addNew('page', [
        	{
            pageId:'home',
            path:'/',
            label:'home',
            config:{
                 css:'no_fixed_navi_body'
                },
            structure:[
                {id:'navi', ui:'navibar', dataId:naviId, config:{
                    brand1: "<img src=\"/web/img/logo.png\"/><small>Time To Get Faster</small>",
                    brand: "Algoblu Cloud CDN <small>Time To Get Faster</small>",
                    container: 1,
                    innerContainer:1,
                    fixedTop:0,
                    inverse:0,
                    right:1
                }},
                {id:'carousel', ui:'carousel', dataId:carouselId, config:{
                    container:1,
                    css:'container-lead'
                }},
                {id:'steps', ui:'grid', rows:[[
                    {span:4, dataId: step1, config:{level:4}},
                    {span:4, dataId: step2, config:{level:4}},
                    {span:4, dataId: step3, config:{level:4}}
                ]],config:{
                    container:1, title: 'What We Can Do'
                }},
                {ui:'thumbnails', rows:[[
                    {span:4, dataId: thumb1, config:{level:4}},
                    {span:4, dataId: thumb2, config:{level:4}},
                    {span:4, dataId: thumb3, config:{level:4}}
                ]],config:{
                    container:1
                }},
                {ui:'grid', rows:[[
                    {span:3, dataId: step1, config:{level:5}},
                    {span:3, dataId: step2, config:{level:5}},
                    {span:3, dataId: step2, config:{level:5}},
                    {span:3, dataId: step3, config:{level:5}}
                ]],config:{
                    css:'footer'
                }}
                
            ]
        },
        {
        pageId:'product',
        path:'/product',
        label:'product',
        config:{
        	css:'fixed_navi_body'
        },
        structure:[
        	{id:'navi', ui:'navibar', dataId:naviId, config:{
                    brand1: "<img src=\"/web/img/logo.png\"/><small>Time To Get Faster</small>",
                    brand: "Algoblu <small>Time To Get Faster</small>",
                    container: 1,
                    innerContainer:1,
                    fixedTop:0,
                    inverse:0,
                    right:1
             }},
             {id:'steps', ui:'grid', rows:[[
                    {span:8, dataId: step4},
                    {span:4, dataId: step2}
                ]],config:{
                    container:1
              }},
              {ui:'grid', rows:[[
                    {span:3, dataId: step1, config:{level:5}},
                    {span:3, dataId: step2, config:{level:5}},
                    {span:3, dataId: step2, config:{level:5}},
                    {span:3, dataId: step3, config:{level:5}}
              ]],config:{
                    css:'footer',
                    container:1
              }}
        ]
        },
         {
        pageId:'solution',
        path:'/solution',
        label:'solution',
        config:{
        	css:'fixed_navi_body'
        },
         structure:[
        	{id:'navi', ui:'navibar', dataId:naviId, config:{
                    brand1: "<img src=\"/web/img/logo.png\"/><small>Time To Get Faster</small>",
                    brand: "Algoblu <small>Time To Get Faster</small>",
                    container: 1,
                    innerContainer:1,
                    fixedTop:0,
                    inverse:0,
                    right:1
             }},
             {ui:'grid', rows:[[
                    {ui:'hero', span:8, dataId: step1, config:{level:4}},
                    {ui:'hero', span:4, dataId: step2, config:{level:4}},
                ]],config:{
                    container:1
                }},
              {ui:'grid', rows:[[
                    {span:3, dataId: step1, config:{level:5}},
                    {span:3, dataId: step2, config:{level:5}},
                    {span:3, dataId: step2, config:{level:5}},
                    {span:3, dataId: step3, config:{level:5}}
              ]],config:{
                    css:'footer',
                    container:1
              }}
          ]
          },
         {
        pageId:'customer',
        path:'/customer',
        label:'customer',
        config:{
        	css:'fixed_navi_body'
        },
         structure:[
        	{id:'navi', ui:'navibar', dataId:naviId, config:{
                    brand1: "<img src=\"/web/img/logo.png\"/><small>Time To Get Faster</small>",
                    brand: "Algoblu <small>Time To Get Faster</small>",
                    container: 1,
                    innerContainer:1,
                    fixedTop:0,
                    inverse:0,
                    right:1
             }},
             {ui:'grid', rows:[[
                    {ui:'hero', span:8, dataId: step1, config:{level:4}},
                    {ui:'hero', span:4, dataId: step2, config:{level:4}},
                ]],config:{
                    container:1
                }},
              {ui:'grid', rows:[[
                    {span:3, dataId: step1, config:{level:5}},
                    {span:3, dataId: step2, config:{level:5}},
                    {span:3, dataId: step2, config:{level:5}},
                    {span:3, dataId: step3, config:{level:5}}
              ]],config:{
                    css:'footer',
                    container:1
              }}
          ]
          },
         {
        pageId:'product1',
        path:'/product1',
        label:'product1',
        config:{
        	css:'fixed_navi_body'
        },
         structure:[
        	{id:'navi', ui:'navibar', dataId:naviId, config:{
                    brand1: "<img src=\"/web/img/logo.png\"/><small>Time To Get Faster</small>",
                    brand: "Algoblu <small>Time To Get Faster</small>",
                    container: 1,
                    innerContainer:1,
                    fixedTop:0,
                    inverse:0,
                    right:1
             }},
             {ui:'grid', rows:[[
                    {ui:'hero', span:8, dataId: step1, config:{level:4}},
                    {ui:'hero', span:4, dataId: step2, config:{level:4}},
                ]],config:{
                    container:1
                }},
              {ui:'grid', rows:[[
                    {span:3, dataId: step1, config:{level:5}},
                    {span:3, dataId: step2, config:{level:5}},
                    {span:3, dataId: step2, config:{level:5}},
                    {span:3, dataId: step3, config:{level:5}}
              ]],config:{
                    css:'footer',
                    container:1
              }}
          ]
          },
         {
        pageId:'product2',
        path:'/prod2',
        label:'product2',
        config:{
        	css:'fixed_navi_body'
        },
         structure:[
        	{id:'navi', ui:'navibar', dataId:naviId, config:{
                    brand1: "<img src=\"/web/img/logo.png\"/><small>Time To Get Faster</small>",
                    brand: "Algoblu <small>Time To Get Faster</small>",
                    container: 1,
                    innerContainer:1,
                    fixedTop:0,
                    inverse:0,
                    right:1
             }},
             {ui:'grid', rows:[[
                    {ui:'hero', span:8, dataId: step1, config:{level:4}},
                    {ui:'hero', span:4, dataId: step2, config:{level:4}},
                ]],config:{
                    container:1
                }},
              {ui:'grid', rows:[[
                    {span:3, dataId: step1, config:{level:5}},
                    {span:3, dataId: step2, config:{level:5}},
                    {span:3, dataId: step2, config:{level:5}},
                    {span:3, dataId: step3, config:{level:5}}
              ]],config:{
                    css:'footer',
                    container:1
              }}
          ]
          },
         {
        pageId:'partner',
        path:'/partner',
        label:'partner',
        config:{
        	css:'fixed_navi_body'
        },
         structure:[
        	{id:'navi', ui:'navibar', dataId:naviId, config:{
                    brand1: "<img src=\"/web/img/logo.png\"/><small>Time To Get Faster</small>",
                    brand: "Algoblu <small>Time To Get Faster</small>",
                    container: 1,
                    innerContainer:1,
                    fixedTop:0,
                    inverse:0,
                    right:1
             }},
             {ui:'grid', rows:[[
                    {ui:'hero', span:8, dataId: step1, config:{level:4}},
                    {ui:'hero', span:4, dataId: step2, config:{level:4}},
                ]],config:{
                    container:1
                }},
              {ui:'grid', rows:[[
                    {span:3, dataId: step1, config:{level:5}},
                    {span:3, dataId: step2, config:{level:5}},
                    {span:3, dataId: step2, config:{level:5}},
                    {span:3, dataId: step3, config:{level:5}}
              ]],config:{
                    css:'footer',
                    container:1
              }}
          ]
          },
         {
        pageId:'about',
        path:'/about',
        label:'about',
        config:{
        	css:'fixed_navi_body'
        },
         structure:[
        	{id:'navi', ui:'navibar', dataId:naviId, config:{
                    brand1: "<img src=\"/web/img/logo.png\"/><small>Time To Get Faster</small>",
                    brand: "Algoblu <small>Time To Get Faster</small>",
                    container: 1,
                    innerContainer:1,
                    fixedTop:0,
                    inverse:0,
                    right:1
             }},
             {ui:'grid', rows:[[
                    {ui:'hero', span:8, dataId: step1, config:{level:4}},
                    {ui:'hero', span:4, dataId: step2, config:{level:4}},
                ]],config:{
                    container:1
                }},
              {ui:'grid', rows:[[
                    {span:3, dataId: step1, config:{level:5}},
                    {span:3, dataId: step2, config:{level:5}},
                    {span:3, dataId: step2, config:{level:5}},
                    {span:3, dataId: step3, config:{level:5}}
              ]],config:{
                    css:'footer',
                    container:1
              }}
          ]
          }
    ], function(){
        console.log("Add page completed");
        dao.close();
    });
});
};
var addArticle = function(){
dao.delete('article',{},function(){
    dao.addNew('article', [
        {_id: step1, src:'', label:'More Powerfull', desc:"With our cloud CDN, we provide full stack CDN services includes HTML and Stream...", btn:{label:'Check this out...', url:'/go', style:'primary', right:1 }},
        {_id: step2, label:'Much Faster', desc:"Our CDN provides on demand virtual CDN deploying services, which will greatly improve your website access...", btn:{label:'More detail...', url:'/go', style:'success', right:1 }},
<<<<<<< HEAD
        {_id: step3, label:'Less Fee', desc:"Use our cloud CDN to increase or decrease your virtual server will cut all uneccessary cost... ", btn:{label:'Register today...', url:'/go', style:'info', right:1 }},
        {_id: thumb1, src:'', url:'', label:'More Powerfull', desc:"With our cloud CDN, we provide full stack CDN services includes HTML and Stream...", btn:{label:'Check this out...', url:'/go', style:'primary', right:1 }},
        {_id: thumb2, src:'', url:'', label:'Much Faster', desc:"Our CDN provides on demand virtual CDN deploying services, which will greatly improve your website access...", btn:{label:'More detail...', url:'/go', style:'success', right:1 }},
        {_id: thumb3, src:'', url:'', label:'Less Fee', desc:"Use our cloud CDN to increase or decrease your virtual server will cut all uneccessary cost... ", btn:{label:'Register today...', url:'/go', style:'info', right:1 }}
=======
        {_id: step3, label:'Less Fee', desc:"Use our cloud CDN to increase or decrease your virtual server ", btn:{label:'Register today...', url:'/go', style:'info', right:1 }},
        {_id: step3, label:'Less Fee', desc:"Use our cloud CDN to increase or decrease your virtual server ", btn:{label:'Register today...', url:'/go', style:'info', right:1 }},
        {_id: step4, label:'Product', desc:"<img src=\"/web/img/Compare.png\"/>this is product"},
        {_id: footstep1, label:'whate is cloud CDN', desc:"Use our cloud CDN to increase or decrease your virtual server ", btn:{label:'Register today...', url:'/go', style:'info', right:1 }}
>>>>>>> 758821f57466716d9c799e4de276bf735437fe58
    ], function(){
        console.log("Add article completed");
        addPage();
    });
});
};

var addCarousel = function(){
dao.delete('carousel',{}, function(){
    dao.addNew('carousel', [
        {_id: carouselId, 
         items:[
            {src:'/web/img/cloudVpnStru.png'},
            {src:'/web/img/cloudVpnTopo.png'}
        ]}
    ], function(){
        console.log("Add carousel completed");
        addArticle();
    });
});
};

var addNavi = function(){
dao.delete('navi', {}, function(){
    // add navigation
    dao.addNew('navi', [{_id:naviId, items:[
        {_id:'home',
         label:'home',
         url:'/'},
        {_id:'product',
         label:'product',
         url:'/product'},
        {_id:'solution',
         label:'solution',
         url:'/solution'},
        {_id:'customer',
         label:'customer',
         url:'/customer',
         items:[{_id:'prod1',
                 label:'product1',
                 url:'/product'},
                {_id:'prod2',
                 label:'product2',
                 url:'/prod2'}]},
        {_id:'partner',
         label:'partner',
         url:'/partner'},
        {_id:'about',
         label:'about',
         url:'/about'}
    ]},
      {_id:quickAccessId, items:[
          {label:'contact', url:'/contact'}
      ]}], function(){
        console.log("Add navigation completed");
        addCarousel();
    });
});
};

addNavi();
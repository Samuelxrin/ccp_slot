System.register("chunks:///_virtual/index.ts",["./_rollupPluginModLoBabelHelpers.js","cc"],(function(e){"use strict";var n,t,i,o,r,a,l,s,u,c,f,p,d,m,b,g,h,w,y,P,v,C;return{setters:[function(e){n=e.applyDecoratedDescriptor,t=e.inheritsLoose,i=e.initializerDefineProperty,o=e.assertThisInitialized},function(e){r=e.cclegacy,a=e._decorator,l=e.math,s=e.Prefab,u=e.instantiate,c=e.resources,f=e.SpriteFrame,p=e.Button,d=e.AudioSource,m=e.AudioClip,b=e.tween,g=e.Vec3,h=e.UIOpacity,w=e.Sprite,y=e.Input,P=e.Label,v=e.Color,C=e.Component}],execute:function(){var B,k,O,S,z,A,F,D,x,M,E,N,R,I,_,G,H,T,L,U,j,K,V,W,q,J,Q,X,Y;r._RF.push({},"81eb7BIKEFC/5aw2c96pGPH","index",void 0);var Z=a.ccclass,$=a.property,ee=l.Rect,ne=null,te=!1,ie=null,oe=!0,re=null,ae=0,le=["bg","start","down","boom","click","trans","get","gold","transitions","alignment1","alignment2","lose","win"];e("index",(B=Z("index"),k=$(s),O=$(s),S=$(s),z=$(s),A=$(s),F=$(s),D=$(s),x=$(s),M=$(s),E=$(s),N=$(s),R=$(s),I=$(s),B((H=n((G=function(e){function n(){for(var n,t=arguments.length,r=new Array(t),a=0;a<t;a++)r[a]=arguments[a];return n=e.call.apply(e,[this].concat(r))||this,i(o(n),"backGroundPrefab",H,o(n)),i(o(n),"gameBgPrefab",T,o(n)),i(o(n),"slotPrefab",L,o(n)),i(o(n),"smokePrefab",U,o(n)),i(o(n),"pokemonPrefab",j,o(n)),i(o(n),"goldPrefab",K,o(n)),i(o(n),"walletPrefab",V,o(n)),i(o(n),"dialogPrefab",W,o(n)),i(o(n),"myBtnPrefab",q,o(n)),i(o(n),"turnAroundBtnPrefab",J,o(n)),i(o(n),"yBtnPrefab",Q,o(n)),i(o(n),"gBtnPrefab",X,o(n)),i(o(n),"sePrefab",Y,o(n)),n}t(n,e);var r=n.prototype;return r.start=function(){if(["indexCanvas"].indexOf(this.node.name)>=0){(ne=this.node).addChild(u(this.backGroundPrefab));var e=u(this.myBtnPrefab);ne.addChild(e),c.load("image/startBtn/spriteFrame",f,(function(n,t){e.getComponent(p).normalSprite=t,e.getComponent(p).normalSprite.rect=new ee(0,0,160,45)})),c.load("image/startBtnHover/spriteFrame",f,(function(n,t){e.getComponent(p).hoverSprite=t,e.getComponent(p).hoverSprite.rect=new ee(0,0,160,45)})),c.load("image/startBtnClick/spriteFrame",f,(function(n,t){e.getComponent(p).pressedSprite=t,e.getComponent(p).pressedSprite.rect=new ee(0,0,160,45)})),(re=ne.getChildByName("wallet")).active=!1;var n=this;le.forEach((function(e){le[e]=u(n.sePrefab).getComponent(d),c.load("music/"+e,m,(function(n,t){le[e].clip=t}))}))}},r.startClick=function(){var e=this;if(te)return!1;te=!0,le.start.play();var n=this,t=u(this.myBtnPrefab);ne.addChild(t),t.name="transitions";var i=ne.getChildByName("transitions");i.width=40,i.height=40,i.position.x=-60,c.load("image/transitions/spriteFrame",f,(function(i,o){t.getComponent(p).normalSprite=o,le.transitions.play(),b(t).to(1,{scale:new g(400,400,400),position:new g(-355,-600,0)}).call((function(){n.node.active=!1,ne.getChildByName("bg").destroy();var i=u(e.gameBgPrefab);ne.addChild(i),i.setSiblingIndex(1),n.fadeOut(t.getComponent(h)),ie=u(e.slotPrefab),ne.addChild(ie),ie.setPosition(new g(0,1e3,0)),ie.name="mySlot",e.scheduleOnce((function(){t.destroy(),le.down.play(),this.comeDown(ne.getChildByName("mySlot"),.5,0)}),1)})).start()}))},r.startGame=function(){var e=this;c.load("image/slotHole/spriteFrame",f,(function(e,n){ie.getComponent(w).spriteFrame=n}));var n=u(this.turnAroundBtnPrefab);ne.addChild(n),n.on(y.EventType.MOUSE_UP,(function(){e.turnAround()})),n.on(y.EventType.TOUCH_END,(function(){e.turnAround()}));var t=u(this.yBtnPrefab);ne.addChild(t);var i=u(this.gBtnPrefab);ne.addChild(i),le.bg.volume=.5,le.bg.play();var o=u(this.walletPrefab);return ne.addChild(o),ae+=100,re.active=!0,re.getComponent(P).string=ae,this.newDialog("自動充值 100元！",2),this.scheduleOnce((function(){oe=!1}),1),!1},r.fadeOut=function(e){if(null==e.opacity)return!1;e.opacity>0&&(e.opacity-=5,this.scheduleOnce((function(){this.fadeOut(e)}),.005))},r.newDialog=function(e,n){var t=u(this.dialogPrefab);ne.addChild(t);var i=u(re);t.addChild(i),i.getComponent(P).fontSize=20,i.getComponent(P).color=v.WHITE,i.getComponent(P).string=e,i.setPosition(new g(0,-20,0)),this.scheduleOnce((function(){t.destroy()}),n)},r.comeDown=function(e,n,t){if(e.position.y>t){n*=1.1;var i=e.position.y-=2*n;e.setPosition(new g(0,i>t?i:t,0)),this.scheduleOnce((function(){this.comeDown(e,n,t)}),.01)}else{var o=this;o.startGame(),le.boom.play(),["R","L"].forEach((function(e){var n=u(o.smokePrefab);ne.addChild(n),c.load("image/smoke"+e+"/spriteFrame",f,(function(e,t){n.getComponent(w).spriteFrame=t})),n.setPosition(new g("R"==e?120:-120,-201,0)),b(n).to(1,{position:new g("R"==e?300:-300,-201,0)}).call((function(){n.destroy()})).start(),o.fadeOut(n.getComponent(h))}))}},r.newRandomArray=function(e){var n=[],t=Array.apply(null,Array(e)).map((function(e,n){return n}));if(null==t)return[];for(var i=0;i<e;i++){var o=Math.floor(Math.random()*t.length);n[i]=Number(t[o])+1,t.splice(o,1)}var r=Array.apply(null,Array(e)).map((function(e,n){return n}));if(null==r)return[];for(var a=e;a<2*e;a++){var l=Math.floor(Math.random()*r.length);n[a]=Number(r[l])+1,r.splice(l,1)}return n},r.turnAround=function(){var e=this;if(oe)return!1;if(ae<=0)return this.newDialog("餘額不足！",1),!1;var n=this;oe=!0,ae-=10,re.getComponent(P).string=ae,this.newDialog("轉一次 10元！",1);for(var t=function(e){var t=ne.getChildByName("last"+e+"Pokemon");null!=t&&n.scheduleOnce((function(){b(t).to(.2,{scale:new g(0,0,0),position:new g(0,-30,0)}).call((function(){t.destroy()})).start()}),e)},i=0;i<3;i++)t(i);for(var o=[],r=function(t){var i=52*t,r=t+1;e.newRandomArray(9).forEach((function(e,a){var l=u(n.pokemonPrefab);ne.addChild(l),c.load("image/pokemon0"+e+"/spriteFrame",f,(function(e,n){if(null!=l){var t=l.getComponent(w);null!=t&&(t.spriteFrame=n)}})),l.setScale(new g(0,0,0)),l.setPosition(new g(i,70,0)),l.setSiblingIndex(2),n.scheduleOnce((function(){le.trans.play(),l.getComponent(h).opacity=255;var r=b(l).to(.1,{scale:new g(1,1,1),position:new g(i,20,0)}).call((function(){17==a&&(t<1?le["alignment"+(t+2)].play():le.lose.play(),r.stop(),l.name="last"+(t+1)+"Pokemon",o["res"+(t+1)]=e,n.scheduleOnce((function(){l.position=new g(i,20,0),l.scale=new g(1,1,1)}),.1),1===t&&(oe=!1,o.res0==o.res1&&o.res0==o.res2?n.winning(.1):o.res0!=o.res1&&o.res0!=o.res2&&o.res1!=o.res2||n.winning(.5)))})).to(.1,{scale:new g(0,0,0),position:new g(i,-30,0)}).call((function(){l.destroy()})).start()}),.1*a+r)}))},a=-1;a<2;a++)r(a)},r.winning=function(e){for(var n=this,t=function(e){if(Math.floor(10*Math.random())<7){var t=u(n.goldPrefab);ne.addChild(t),t.setPosition(new g(0,-200,0)),n.scheduleOnce((function(){var n=this;le.get.play(),b(t).to(.2,{position:new g(10*e,0,0)}).to(.2,{position:new g(20*e,100,0)}).to(.2,{position:new g(30*e,150,0)}).to(.2,{position:new g(40*e,175,0)}).to(.2,{position:new g(50*e,187,0)}).call((function(){le.gold.play()})).to(.2,{position:new g(60*e,193,0)}).to(.2,{position:new g(70*e,187,0)}).to(.2,{position:new g(80*e,175,0)}).to(.2,{position:new g(90*e,150,0)}).to(.2,{position:new g(100*e,100,0)}).to(.2,{position:new g(110*e,0,0)}).to(.2,{position:new g(120*e,-200,0)}).to(.2,{position:new g(125*e,-180,0)}).to(.2,{position:new g(127*e,-185,0)}).to(.2,{position:new g(130*e,-200,0)}).call((function(){n.scheduleOnce((function(){ae+=10,re.getComponent(P).string=ae,t.destroy()}),Math.floor(5*Math.random()))})).start()}),Number(Math.random().toFixed(2)))}},i=-5;i<=5;i+=e)t(i)},r.yBtnClick=function(){if(ae>=1e3)return this.newDialog("餘額充足！",1),!1;ae+=100,re.getComponent(P).string=ae,this.newDialog("入款 100元！",2)},n}(C)).prototype,"backGroundPrefab",[k],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),T=n(G.prototype,"gameBgPrefab",[O],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),L=n(G.prototype,"slotPrefab",[S],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),U=n(G.prototype,"smokePrefab",[z],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),j=n(G.prototype,"pokemonPrefab",[A],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),K=n(G.prototype,"goldPrefab",[F],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),V=n(G.prototype,"walletPrefab",[D],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),W=n(G.prototype,"dialogPrefab",[x],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),q=n(G.prototype,"myBtnPrefab",[M],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),J=n(G.prototype,"turnAroundBtnPrefab",[E],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),Q=n(G.prototype,"yBtnPrefab",[N],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),X=n(G.prototype,"gBtnPrefab",[R],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),Y=n(G.prototype,"sePrefab",[I],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),_=G))||_));r._RF.pop()}}}));

System.register("chunks:///_virtual/main",["./index.ts"],(function(){"use strict";return{setters:[null],execute:function(){}}}));

(function(r) {
  r('virtual:///prerequisite-imports/main', 'chunks:///_virtual/main'); 
})(function(mid, cid) {
    System.register(mid, [cid], function (_export, _context) {
    return {
        setters: [function(_m) {
            var _exportObj = {};

            for (var _key in _m) {
              if (_key !== "default" && _key !== "__esModule") _exportObj[_key] = _m[_key];
            }
      
            _export(_exportObj);
        }],
        execute: function () { }
    };
    });
});
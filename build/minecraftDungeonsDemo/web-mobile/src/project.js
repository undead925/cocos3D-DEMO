System.register("chunks:///component/UIBillboardComponent/UIBillboardComponent.js",["../../_virtual/_rollupPluginBabelHelpers.js","cc"],(function(e,t){var r,o,i,n,l,a,s,c,u,p,d,b,h,_,f,m,y,C,v,g,I,L,w,B,k,x,z;return e({_dec:void 0,_dec2:void 0,_dec3:void 0,_dec4:void 0,_class:void 0,_class2:void 0,_descriptor:void 0,_descriptor2:void 0,_descriptor3:void 0,_temp:void 0}),{setters:[function(e){r=e.applyDecoratedDescriptor,o=e.inherits,i=e.classCallCheck,n=e.possibleConstructorReturn,l=e.getPrototypeOf,a=e.initializerDefineProperty,s=e.assertThisInitialized,c=e.createClass,u=e.get},function(e){p=e.cclegacy,d=e._decorator,b=e.Material,h=e.LabelComponent,_=e.Color,f=e.renderer,m=e.BillboardComponent}],execute:function(){p._RF.push({},"6d9bfOxsTlDjaw9pukNLIHi","UIBillboardComponent",void 0),x=d.ccclass,z=d.property,e("UIBillboardComponent",(y=x("UIBillboardComponent"),C=z({type:b}),v=z({type:h}),g=z({type:_}),y((w=r((L=function(e){function t(){var e,r;i(this,t);for(var o=arguments.length,c=new Array(o),u=0;u<o;u++)c[u]=arguments[u];return(r=n(this,(e=l(t)).call.apply(e,[this].concat(c))))._material=null,a(r,"sharedMaterial",w,s(r)),a(r,"numberLabel",B,s(r)),a(r,"color",k,s(r)),r._tintColor=null,r}return o(t,e),c(t,[{key:"onLoad",value:function(){this._material=new f.MaterialInstance({parent:this.sharedMaterial}),u(l(t.prototype),"onLoad",this).call(this),this.tintColor=this.color}},{key:"setLabelTexture",value:function(){this.texture=this.numberLabel.spriteFrame.texture}},{key:"tintColor",get:function(){return this._tintColor},set:function(e){this._tintColor=e,this._material.setProperty("tintColor",this._tintColor)}}]),t}(m)).prototype,"sharedMaterial",[C],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),B=r(L.prototype,"numberLabel",[v],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),k=r(L.prototype,"color",[g],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return new _(127,127,127,127)}}),I=L))||I)),p._RF.pop()}}}));

System.register("chunks:///script/effect/blockBatching.js",["../../_virtual/_rollupPluginBabelHelpers.js","cc"],(function(t,c){var e,n,o,s,i,r,l,u,a,p,f;return t({_dec:void 0,_class:void 0}),{setters:[function(t){e=t.inherits,n=t.createClass,o=t.classCallCheck,s=t.possibleConstructorReturn,i=t.getPrototypeOf},function(t){r=t.cclegacy,l=t._decorator,u=t.Component}],execute:function(){r._RF.push({},"69df8OtislMZJo1SWOAfqx1","blockBatching",void 0),f=l.ccclass,l.property,t("blockBatching",(a=f("blockBatching"),a(p=function(t){function c(){return o(this,c),s(this,i(c).apply(this,arguments))}return e(c,t),n(c,[{key:"start",value:function(){}}]),c}(u))||p)),r._RF.pop()}}}));

System.register("chunks:///script/effect/particleRemove.js",["../../_virtual/_rollupPluginBabelHelpers.js","cc"],(function(e,t){var r,i,c,o,n,a,l,s,p,u,v,d,f,m,y,_,h,C,R;return e({_dec:void 0,_dec2:void 0,_class:void 0,_class2:void 0,_descriptor:void 0,_temp:void 0}),{setters:[function(e){r=e.applyDecoratedDescriptor,i=e.inherits,c=e.classCallCheck,o=e.possibleConstructorReturn,n=e.getPrototypeOf,a=e.initializerDefineProperty,l=e.assertThisInitialized,s=e.createClass},function(e){p=e.cclegacy,u=e._decorator,v=e.ParticleSystemComponent,d=e.Component}],execute:function(){p._RF.push({},"c248dqm1ipPdLwKIx4cPLm2","particleRemove",void 0),C=u.ccclass,R=u.property,e("particleRemove",(f=C("particleRemove"),m=R({type:v}),f((h=r((_=function(e){function t(){var e,r;c(this,t);for(var i=arguments.length,s=new Array(i),p=0;p<i;p++)s[p]=arguments[p];return r=o(this,(e=n(t)).call.apply(e,[this].concat(s))),a(r,"particleCom",h,l(r)),r._isStart=!1,r}return i(t,e),s(t,[{key:"start",value:function(){}},{key:"update",value:function(e){}}]),t}(d)).prototype,"particleCom",[m],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),y=_))||y)),p._RF.pop()}}}));

System.register("chunks:///script/game/BlockColor.js",["../../_virtual/_rollupPluginBabelHelpers.js","cc"],(function(o,t){var e,c,r,s,l,n,i,u,a,p,f;return o({_dec:void 0,_class:void 0}),{setters:[function(o){e=o.inherits,c=o.createClass,r=o.classCallCheck,s=o.possibleConstructorReturn,l=o.getPrototypeOf},function(o){n=o.cclegacy,i=o._decorator,u=o.Component}],execute:function(){n._RF.push({},"8fc20pZ9x5NU7rzW68h6KZi","BlockColor",void 0),f=i.ccclass,i.property,o("BlockColor",(a=f("BlockColor"),a(p=function(o){function t(){return r(this,t),s(this,l(t).apply(this,arguments))}return e(t,o),c(t,[{key:"start",value:function(){console.log(this.node)}}]),t}(u))||p)),n._RF.pop()}}}));

System.register("chunks:///script/game/data/Constants.js",["../../../_virtual/_rollupPluginBabelHelpers.js","cc"],(function(o,s){var e,n,c,t,i,E,a,A,r,l,L;return o({_dec:void 0,_class:void 0,_class2:void 0,_temp:void 0,PhysicsGroup:void 0,PLAYERANIMSTATE:void 0,ENEMYANIMSTATE:void 0}),{setters:[function(o){e=o.classCallCheck},function(o){n=o.cclegacy,c=o._decorator}],execute:function(){n._RF.push({},"389f09sgeRIg5LLw/Ltaqmh","Constants",void 0),A=c.ccclass,c.property,cc.macro.ENABLE_WEBGL_ANTIALIAS=!0,cc.view.setOrientation(cc.macro.ORIENTATION_LANDSCAPE),function(o){o[o.NONE=0]="NONE",o[o.ROLE=1]="ROLE",o[o.CUBE=2]="CUBE",o[o.HALFCUBE=4]="HALFCUBE",o[o.ENEMY=8]="ENEMY",o[o.ATTACK=16]="ATTACK"}(r||(r={})),function(o){o.IDLE="Char-Bones|idle",o.WALK="Char-Bones|walk",o.ROLL="Char-Bones|roll",o.WAVE="Char-Bones|wave"}(l||o("PLAYERANIMSTATE",l={})),function(o){o.IDLE="Bones:Zombie|idle",o.WALK="Bones:Zombie|walk",o.HURT="Bones:Zombie|hurt",o.WAVE="Bones:Zombie|wave"}(L||o("ENEMYANIMSTATE",L={})),o("Constants",(t=A("Constants"),t((a=E=function o(){e(this,o)},E.PhysicsGroup=r,i=a))||i)),n._RF.pop()}}}));

System.register("chunks:///script/game/data/CustomEventListener.js",["../../../_virtual/_rollupPluginBabelHelpers.js","cc"],(function(e,t){var n,r,a,s,i,o,l,c,u,h,v,f,p;return e({_dec:void 0,_class:void 0,_class2:void 0,_temp:void 0}),{setters:[function(e){n=e.inherits,r=e.classCallCheck,a=e.possibleConstructorReturn,s=e.getPrototypeOf,i=e.createClass},function(e){o=e.cclegacy,l=e._decorator,c=e.Component}],execute:function(){o._RF.push({},"0d9a1aIwqVKrZRV1/qadwdI","CustomEventListener",void 0),p=l.ccclass,l.property,e("CustomEventListener",(u=p("CustomEventListener"),u((f=v=function(e){function t(){return r(this,t),a(this,s(t).apply(this,arguments))}return n(t,e),i(t,null,[{key:"on",value:function(e,t,n){this.handle[e]||(this.handle[e]=[]);var r={func:t,target:n};this.handle[e].push(r)}},{key:"off",value:function(e,t,n){var r=this.handle[e];if(r&&!(r.length<=0))for(var a=0;a<r.length;a++){var s=r[a];if(s.func===t&&(!n||n===s.target)){r.splice(a,1);break}}}},{key:"dispatchEvent",value:function(e){var t=this.handle[e];if(t&&!(t.length<=0)){for(var n=arguments.length,r=new Array(n>1?n-1:0),a=1;a<n;a++)r[a-1]=arguments[a];for(var s=0;s<t.length;s++){var i=t[s];i.func.apply(i.target,r)}}}}]),t}(c),v.handle={},h=f))||h)),o._RF.pop()}}}));

System.register("chunks:///script/game/data/PoolManager.js",["../../../_virtual/_rollupPluginBabelHelpers.js","cc"],(function(t,e){var o,i,n,a,c,s,r,l,u;return t({_dec:void 0,_class:void 0,_temp:void 0}),{setters:[function(t){o=t.createClass,i=t.classCallCheck},function(t){n=t.cclegacy,a=t._decorator,c=t.instantiate,s=t.NodePool}],execute:function(){n._RF.push({},"a70f9Z8r79NM4PZCLJkbwwN","PoolManager",void 0),u=a.ccclass,a.property,t("PoolManager",(r=u("PoolManager"),r(l=function(){function t(){i(this,t),this.dictPool={},this.dictPrefab={}}return o(t,[{key:"getNode",value:function(t,e){var o=t.data.name;this.dictPrefab[o]=t;var i=null;if(this.dictPool.hasOwnProperty(o)){var n=this.dictPool[o];i=n.size()>0?n.get():c(t)}else{var a=new s;this.dictPool[o]=a,i=c(t)}return i.parent=e,i}},{key:"putNode",value:function(t){var e=t.name,o=null;this.dictPool.hasOwnProperty(e)?o=this.dictPool[e]:(o=new cc.NodePool,this.dictPool[e]=o),o.put(t)}},{key:"clearPool",value:function(t){this.dictPool.hasOwnProperty(t)&&this.dictPool[t].clear()}}],[{key:"instance",get:function(){return this._instance?this._instance:(this._instance=new t,this._instance)}}]),t}())||l)),n._RF.pop()}}}));

System.register("chunks:///script/game/EffectManager.js",["../../_virtual/_rollupPluginBabelHelpers.js","cc","../../component/UIBillboardComponent/UIBillboardComponent.js","./data/CustomEventListener.js","./data/PoolManager.js"],(function(e,t){var n,a,o,r,i,l,s,c,u,d,p,b,f,m,v,g,h,y,_,w,C,L,k,E,P,M,z,N,B,D,j,I,R;return e({_dec:void 0,_dec2:void 0,_dec3:void 0,_dec4:void 0,_dec5:void 0,_class:void 0,_class2:void 0,_descriptor:void 0,_descriptor2:void 0,_descriptor3:void 0,_descriptor4:void 0,_temp:void 0}),{setters:[function(e){n=e.applyDecoratedDescriptor,a=e.inherits,o=e.classCallCheck,r=e.possibleConstructorReturn,i=e.getPrototypeOf,l=e.initializerDefineProperty,s=e.assertThisInitialized,c=e.createClass},function(e){u=e.cclegacy,d=e._decorator,p=e.Vec3,b=e.Node,f=e.Prefab,m=e.Color,v=e.tween,g=e.Vec4,h=e.Component},function(e){y=e.UIBillboardComponent},function(e){_=e.CustomEventListener},function(e){w=e.PoolManager}],execute:function(){u._RF.push({},"71823FvIidH6pHBWarveZBC","EffectManager",void 0),I=d.ccclass,R=d.property,new p,e("EffectManager",(C=I("EffectManager"),L=R({type:b}),k=R({type:f}),E=R({type:f}),P=R({type:f}),C((N=n((z=function(e){function t(){var e,n;o(this,t);for(var a=arguments.length,c=new Array(a),u=0;u<a;u++)c[u]=arguments[u];return n=r(this,(e=i(t)).call.apply(e,[this].concat(c))),l(n,"canvas",N,s(n)),l(n,"attackLockEffect",B,s(n)),l(n,"numberLabel",D,s(n)),l(n,"billboardLabel",j,s(n)),n}return a(t,e),c(t,[{key:"start",value:function(){_.on("set-attack-target",this.setAttackTarget,this),_.on("show-damage-number",this.showDamageNumber,this)}},{key:"setAttackTarget",value:function(e){var t=w.instance.getNode(this.attackLockEffect,e);t.setWorldRotationFromEuler(0,0,0),t.setPosition(0,-.5,0),this.scheduleOnce((function(){w.instance.putNode(t)}),4)}},{key:"showDamageNumber",value:function(e,t){var n=e.node,a=w.instance.getNode(this.billboardLabel,n.parent),o=a.getComponent(y),r=Math.random()-.5,i=Math.random()+2,l=Math.random()-.5;a.setPosition(n.position.x+r,n.position.y+i,n.position.z+l),o.numberLabel.string=t.toString(),o.numberLabel.node.parent=this.canvas,o.numberLabel.updateRenderData(!0),o.numberLabel.node.parent=a,o.setLabelTexture(),o.tintColor=new m(127,127,127,127),v(a).by(1,{position:new p(0,1,0)},{easing:"elasticOut"}).call((function(){w.instance.putNode(a)})).start(),v(o).to(1,{tintColor:new g(.5,.5,.5,0)}).start(),e.material.setProperty("emissive",new m(255,200,80)),v(e.node).delay(.05).call((function(){e.material.setProperty("emissive",new m(0,0,0))})).start()}}]),t}(h)).prototype,"canvas",[L],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),B=n(z.prototype,"attackLockEffect",[k],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),D=n(z.prototype,"numberLabel",[E],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),j=n(z.prototype,"billboardLabel",[P],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),M=z))||M)),u._RF.pop()}}}));

System.register("chunks:///script/game/enemy/EnemyState.js",["../../../_virtual/_rollupPluginBabelHelpers.js","cc","../data/Constants.js"],(function(e,t){var n,a,i,s,c,y,h,r;return e({_dec:void 0,_class:void 0,_temp:void 0}),{setters:[function(e){n=e.createClass,a=e.classCallCheck},function(e){i=e.cclegacy,s=e._decorator},function(e){c=e.ENEMYANIMSTATE}],execute:function(){i._RF.push({},"37823qDzLBHArg8dyrDJNJo","EnemyState",void 0),r=s.ccclass,s.property,e("EnemyState",(y=r("EnemyState"),y(h=function(){function e(){a(this,e),this._enemyState=c.IDLE,this.enemy=null}return n(e,[{key:"start",value:function(){}},{key:"initialize",value:function(e){this.enemy=e}},{key:"onLastStateEnd",value:function(e,t){}},{key:"changeState",value:function(e){if(this._enemyState!==e){for(var t=arguments.length,n=new Array(t>1?t-1:0),a=1;a<t;a++)n[a-1]=arguments[a];n.length>0&&n.indexOf(this._enemyState)<0||(this.onLastStateEnd(this._enemyState,e),this.onStateStart(this._enemyState,e),this.enemy.playAnim(e),this._enemyState=e)}}},{key:"changeStateByString",value:function(e){for(var t=[],n=arguments.length,a=new Array(n>1?n-1:0),i=1;i<n;i++)a[i-1]=arguments[i];a.forEach((function(e){t.push(c[e])})),this.changeState.apply(this,[c[e]].concat(t))}},{key:"onStateStart",value:function(e,t){switch(t){case c.WALK:case c.WAVE:}}},{key:"onAnimFinish",value:function(){switch(this._enemyState){case c.WALK:case c.WAVE:case c.HURT:}this.changeState(c.IDLE)}},{key:"update",value:function(e){switch(this._enemyState){case c.IDLE:this.enemy.searchPlayer();break;case c.WALK:this.enemy.onWalk(e);break;case c.WAVE:}this.enemy.attackTarget&&this.enemy.checkAttack()}},{key:"enemyState",get:function(){return this._enemyState}}]),e}())||h)),i._RF.pop()}}}));

System.register("chunks:///script/game/player/RoleBase.js",["../../../_virtual/_rollupPluginBabelHelpers.js","cc"],(function(e,t){var n,i,o,s,l,a,r,u,h,c,d,v,p,g,y,m;return e({_dec:void 0,_class:void 0,_temp:void 0}),{setters:[function(e){n=e.inherits,i=e.classCallCheck,o=e.possibleConstructorReturn,s=e.getPrototypeOf,l=e.createClass},function(e){a=e.cclegacy,r=e._decorator,u=e.Vec3,h=e.Vec2,c=e.ColliderComponent,d=e.Component}],execute:function(){a._RF.push({},"2ea40bx5ltIGrjBF611JAFL","RoleBase",void 0),g=r.ccclass,r.property,y=new u,m=new h(1,0),e("RoleBase",(v=g("RoleBase"),v(p=function(e){function t(){var e,n;i(this,t);for(var l=arguments.length,a=new Array(l),r=0;r<l;r++)a[r]=arguments[r];return(n=o(this,(e=s(t)).call.apply(e,[this].concat(a)))).collider=null,n.rigidBody=null,n.roleState=null,n.velocity=new u,n._moveDelta=new h(0,0),n._destination=new u(0,0,0),n._moveSpeed=5,n._moveTime=null,n}return n(t,e),l(t,[{key:"start",value:function(){this.collider=this.node.getComponent(c)}},{key:"onTrigger",value:function(e){}},{key:"trunEulerAnglesByDelta",value:function(e){if(0!=e.length()){var t=180*e.angle(m)/Math.PI,n=this.node.eulerAngles;y.set(n.x,90-(Math.sign(e.y)||1)*t,n.z),this.node.eulerAngles=y}}},{key:"onDestinationChange",value:function(){this._moveDelta.set(this.destination.x-this.node.position.x,this.destination.z-this.node.position.z),this._moveTime=this._moveDelta.length()/this._moveSpeed,this.trunEulerAnglesByDelta(this._moveDelta)}},{key:"move",value:function(e,t){y.set(0,0,t*e),this.node.translate(y)}},{key:"onWalk",value:function(e){this._moveTime>0?(this._moveTime-=e,this.move(e,this._moveSpeed)):(this.node.setPosition(y.set(Math.round(10*this.node.position.x)/10,this.node.position.y,Math.round(10*this.node.position.z)/10)),this.rigidBody.setLinearVelocity(y.set(0,0,0)),this.roleState.changeStateByString("IDLE"))}},{key:"update",value:function(e){}},{key:"destination",set:function(e){e.equals(this._destination)||(this._destination.set(e),this.onDestinationChange())},get:function(){return this._destination}}]),t}(d))||p)),a._RF.pop()}}}));

System.register("chunks:///script/game/Enemy.js",["../../_virtual/_rollupPluginBabelHelpers.js","cc","../../component/UIBillboardComponent/UIBillboardComponent.js","./data/Constants.js","./data/CustomEventListener.js","./enemy/EnemyState.js","./player/RoleBase.js"],(function(t,e){var n,i,o,s,a,r,l,h,p,c,u,d,g,m,y,f,v,w,C,E,k,_,S,B,P,A,H,D,T,b,L,R,I,x,z,V,W,M,j,F;return t({_dec:void 0,_dec2:void 0,_dec3:void 0,_dec4:void 0,_class:void 0,_class2:void 0,_descriptor:void 0,_descriptor2:void 0,_descriptor3:void 0,_temp:void 0}),{setters:[function(t){n=t.applyDecoratedDescriptor,i=t.inherits,o=t.classCallCheck,s=t.possibleConstructorReturn,a=t.getPrototypeOf,r=t.initializerDefineProperty,l=t.assertThisInitialized,h=t.createClass,p=t.get},function(t){c=t.cclegacy,u=t._decorator,d=t.Vec3,g=t.Mat4,m=t.SkinningModelComponent,y=t.RigidBodyComponent,f=t.AnimationComponent,v=t.Color,w=t.tween,C=t.Vec4,E=t.Vec2},function(t){k=t.UIBillboardComponent},function(t){_=t.ENEMYANIMSTATE,S=t.Constants},function(t){B=t.CustomEventListener},function(t){P=t.EnemyState},function(t){A=t.RoleBase}],execute:function(){c._RF.push({},"7d365PHiktEfLxpAkt8wlBV","Enemy",void 0),V=u.ccclass,W=u.property,new d(0,0,0),M=new d,j=new d(0,0,0),F=new g,t("Enemy",(H=V("Enemy"),D=W({type:m}),T=W({type:k}),b=W({type:k}),H((I=n((R=function(t){function e(){var t,n;o(this,e);for(var i=arguments.length,h=new Array(i),p=0;p<i;p++)h[p]=arguments[p];return(n=s(this,(t=a(e)).call.apply(t,[this].concat(h)))).collider=null,r(n,"model",I,l(n)),r(n,"hpProgress",x,l(n)),r(n,"hpProgressBar",z,l(n)),n.animComp=null,n.material=null,n._moveSpeed=1,n.rigidBody=null,n._attackRange=1.5,n._searchRange=4,n._maxHp=30,n._hp=30,n.roleState=null,n.attackTarget=null,n.showHpProgressTween=null,n.showHpProgressBarTween=null,n}return i(e,t),h(e,[{key:"start",value:function(){p(a(e.prototype),"start",this).call(this),this.roleState=new P,this.roleState.initialize(this),this.roleState.changeState(_.IDLE),this.rigidBody=this.node.getComponent(y),this.animComp=this.node.getComponent(f),this.animComp.getState(_.IDLE).speed=.5,this.animComp.getState(_.WALK).speed=.5,this.animComp.getState(_.HURT).repeatCount=1,this.animComp.on(f.EventType.FINISHED,this.roleState.onAnimFinish,this.roleState),this.material=this.model.material,this.collider.on("onTriggerEnter",this.onTrigger,this),this.collider.setMask(S.PhysicsGroup.CUBE+S.PhysicsGroup.HALFCUBE+S.PhysicsGroup.ATTACK+S.PhysicsGroup.ENEMY),this.initHp()}},{key:"initHp",value:function(){this.updateHpView(),this.hpProgress.tintColor=new v(0,0,0,0),this.hpProgressBar.tintColor=new v(0,0,0,0),this.showHpProgressTween=w().to(.5,{tintColor:new C(48/255,18/255,23/255,1)}).delay(1).to(1,{tintColor:new C(0,0,0,0)}),this.showHpProgressBarTween=w().to(.5,{tintColor:new C(127/255,40/255,30/255,1)}).delay(1).to(1,{tintColor:new C(0,0,0,0)})}},{key:"updateHpView",value:function(){this.hpProgressBar.width=this.hp/this.maxHp}},{key:"getDamage",value:function(t){B.dispatchEvent("show-damage-number",this,t),M.set(0,.5,0),this.node.translate(M),M.set(0,0,-3),this.node.getWorldRS(F),M.transformMat4(F),this.rigidBody.setLinearVelocity(M),this.hp-=t,this.showHpProgressTween.target(this.hpProgress).start(),this.showHpProgressBarTween.target(this.hpProgressBar).start(),this.updateHpView()}},{key:"onTrigger",value:function(t){"sword"===t.otherCollider.node.name&&S.game.player.waveEnemys.indexOf(this)<0&&(this.getDamage(10+Math.floor(5*Math.random())),S.game.player.waveEnemys.push(this))}},{key:"searchPlayer",value:function(){j.set(S.game.player.node.position),this._moveDelta.set(j.x-this.node.position.x,j.z-this.node.position.z),this._moveDelta.length()<this._searchRange&&(console.log(this.node.name+" searched"),this.roleState.changeState(_.WALK),this.attackTarget=S.game.player.node)}},{key:"onDestinationChange",value:function(){p(a(e.prototype),"onDestinationChange",this).call(this),this.roleState.changeState(_.WALK,_.IDLE)}},{key:"checkAttack",value:function(){var t=this.attackTarget.position,e=new E(0,0);e.set(t.x-this.node.position.x,t.z-this.node.position.z);var n=e.length();n<this._attackRange?(this.roleState.changeState(_.WAVE,_.WALK,_.IDLE),this.trunEulerAnglesByDelta(e)):n<this._searchRange&&(this.roleState.changeState(_.IDLE,_.WAVE),this.destination=t)}},{key:"trunEulerAnglesByDelta",value:function(t){p(a(e.prototype),"trunEulerAnglesByDelta",this).call(this,t),this.node.children.forEach((function(t){"attackLockEffect"===t.name&&t.setWorldRotationFromEuler(0,0,0)}))}},{key:"onWalk",value:function(t){p(a(e.prototype),"onWalk",this).call(this,t)}},{key:"playAnim",value:function(t){this.animComp.play(t)}},{key:"update",value:function(t){p(a(e.prototype),"update",this).call(this,t),this.roleState.update(t)}},{key:"destination",set:function(t){this._destination.set(t),this.onDestinationChange()},get:function(){return this._destination}},{key:"maxHp",get:function(){return this._maxHp}},{key:"hp",get:function(){return this._hp},set:function(t){this._hp=t>0?t:0}}]),e}(A)).prototype,"model",[D],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),x=n(R.prototype,"hpProgress",[T],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),z=n(R.prototype,"hpProgressBar",[b],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),L=R))||L)),c._RF.pop()}}}));

System.register("chunks:///script/game/Game.js",["../../_virtual/_rollupPluginBabelHelpers.js","cc","./data/Constants.js"],(function(e,t){var r,a,n,i,o,c,s,l,u,p,f,m,d,v,y,_,C,h,g,b;return e({_dec:void 0,_dec2:void 0,_class:void 0,_class2:void 0,_descriptor:void 0,_temp:void 0}),{setters:[function(e){r=e.applyDecoratedDescriptor,a=e.inherits,n=e.classCallCheck,i=e.possibleConstructorReturn,o=e.getPrototypeOf,c=e.initializerDefineProperty,s=e.assertThisInitialized,l=e.createClass},function(e){u=e.cclegacy,p=e._decorator,f=e.CameraComponent,m=e.Component},function(e){d=e.Constants}],execute:function(){u._RF.push({},"b0b45GCaLNGg5VxAAfzVNfI","Game",void 0),g=p.ccclass,b=p.property,e("Game",(v=g("Game"),y=b({type:f}),v((h=r((C=function(e){function t(){var e,r;n(this,t);for(var a=arguments.length,l=new Array(a),u=0;u<a;u++)l[u]=arguments[u];return r=i(this,(e=o(t)).call.apply(e,[this].concat(l))),c(r,"cameraCom",h,s(r)),r.player=null,r}return a(t,e),l(t,[{key:"__preload",value:function(){d.game=this}},{key:"start",value:function(){}}]),t}(m)).prototype,"cameraCom",[y],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),_=C))||_)),u._RF.pop()}}}));

System.register("chunks:///script/game/IsometricCamera.js",["../../_virtual/_rollupPluginBabelHelpers.js","cc"],(function(e,t){var r,s,c,o,a,i,n,u,l,p,m;return e({_dec:void 0,_class:void 0}),{setters:[function(e){r=e.inherits,s=e.createClass,c=e.classCallCheck,o=e.possibleConstructorReturn,a=e.getPrototypeOf},function(e){i=e.cclegacy,n=e._decorator,u=e.Component}],execute:function(){i._RF.push({},"5fa1fxgUxRJBpA9gUPNqg4X","IsometricCamera",void 0),m=n.ccclass,n.property,e("IsometricCamera",(l=m("IsometricCamera"),l(p=function(e){function t(){return c(this,t),o(this,a(t).apply(this,arguments))}return r(t,e),s(t,[{key:"start",value:function(){}}]),t}(u))||p)),i._RF.pop()}}}));

System.register("chunks:///script/game/player/PlayerState.js",["../../../_virtual/_rollupPluginBabelHelpers.js","cc","../data/Constants.js"],(function(t,e){var a,s,n,r,i,l,c,h;return t({_dec:void 0,_class:void 0,_temp:void 0}),{setters:[function(t){a=t.createClass,s=t.classCallCheck},function(t){n=t.cclegacy,r=t._decorator},function(t){i=t.PLAYERANIMSTATE}],execute:function(){n._RF.push({},"64d41B4faBOhos6xyzxu9Up","PlayerState",void 0),h=r.ccclass,r.property,t("PlayerState",(l=h("PlayerState"),l(c=function(){function t(){s(this,t),this._playerState=i.IDLE,this.player=null}return a(t,[{key:"start",value:function(){}},{key:"initialize",value:function(t){this.player=t}},{key:"onLastStateEnd",value:function(t,e){this.player.resetStatus()}},{key:"changeState",value:function(t){if(this._playerState!==t){for(var e=arguments.length,a=new Array(e>1?e-1:0),s=1;s<e;s++)a[s-1]=arguments[s];a.length>0&&a.indexOf(this._playerState)<0||(this.onLastStateEnd(this._playerState,t),this.onStateStart(this._playerState,t),this.player.playAnim(t),this._playerState=t)}}},{key:"changeStateByString",value:function(t){for(var e=[],a=arguments.length,s=new Array(a>1?a-1:0),n=1;n<a;n++)s[n-1]=arguments[n];s.forEach((function(t){e.push(i[t])})),this.changeState.apply(this,[i[t]].concat(e))}},{key:"onStateStart",value:function(t,e){switch(e){case i.WALK:this.player.startWalk();break;case i.ROLL:this.player.startRoll();break;case i.WAVE:}}},{key:"onAnimFinish",value:function(){switch(this._playerState){case i.WALK:case i.ROLL:case i.WAVE:}this.changeState(i.IDLE)}},{key:"update",value:function(t){switch(this._playerState){case i.WALK:this.player.onWalk(t);break;case i.ROLL:this.player.onRoll(t);break;case i.WAVE:this.player.onWave(t)}this.player.attackTarget&&this.player.checkAttack()}},{key:"playerState",get:function(){return this._playerState}}]),t}())||c)),n._RF.pop()}}}));

System.register("chunks:///script/game/player/RoleControl.js",["../../../_virtual/_rollupPluginBabelHelpers.js","cc","../data/Constants.js"],(function(t,e){var s,o,i,n,a,c,l,h,r,u,y,p,v,f,C,_,E,T,S,m;return t({_dec:void 0,_class:void 0,_temp:void 0}),{setters:[function(t){s=t.inherits,o=t.classCallCheck,i=t.possibleConstructorReturn,n=t.getPrototypeOf,a=t.createClass},function(t){c=t.cclegacy,l=t._decorator,h=t.geometry,r=t.PhysicsSystem,u=t.systemEvent,y=t.SystemEventType,p=t.macro,v=t.Component},function(t){f=t.Constants,C=t.PLAYERANIMSTATE}],execute:function(){c._RF.push({},"38b21Wd6GNM+qnboqiiLsDJ","RoleControl",void 0),T=l.ccclass,l.property,S=h.ray,m=f.PhysicsGroup,t("RoleControl",(_=T("RoleControl"),_(E=function(t){function e(){var t,s;o(this,e);for(var a=arguments.length,c=new Array(a),l=0;l<a;l++)c[l]=arguments[l];return(s=i(this,(t=n(e)).call.apply(t,[this].concat(c)))).player=null,s._isTouch=!1,s._isShift=!1,s._lastTouch=null,s._lastMouse=null,s.physicsSystem=r.instance,s}return s(e,t),a(e,[{key:"start",value:function(){console.log("RoleControl"),u.on(y.TOUCH_START,this.onTouchStart,this),u.on(y.TOUCH_MOVE,this.onTouchMove,this),u.on(y.TOUCH_END,this.onTouchEnd,this),u.on(y.MOUSE_DOWN,this.onMouseDown,this),u.on(y.MOUSE_MOVE,this.onMouseMove,this),u.on(y.KEY_UP,this.onKeyUp,this),u.on(y.KEY_DOWN,this.onKeyDown,this)}},{key:"initialize",value:function(t){console.log("RoleControl initialize"),this.player=t}},{key:"onTouch",value:function(){if(this.player.roleState.playerState!=C.ROLL){this._isShift&&this.player.roleState.changeState(C.WAVE);var t=this._lastTouch,e=new S;f.game.cameraCom.screenPointToRay(t.getLocationX(),t.getLocationY(),e),this.physicsSystem.raycastClosest(e,m.ENEMY)?this.player.attackTarget=this.physicsSystem.raycastClosestResult.collider.node:(this.player.attackTarget=null,this.physicsSystem.raycastClosest(e,m.CUBE+m.HALFCUBE)&&(this.player.destination=this.physicsSystem.raycastClosestResult.collider.node.worldPosition))}}},{key:"onTouchStart",value:function(t){this._isTouch=!0,this._lastTouch=t,this.onTouch()}},{key:"onTouchMove",value:function(t){this._isTouch&&(this._lastTouch=t)}},{key:"onTouchEnd",value:function(t){this._isTouch=!1}},{key:"onHover",value:function(){var t=this._lastMouse,e=new S;if(f.game.cameraCom.screenPointToRay(t.getLocationX(),t.getLocationY(),e),this.physicsSystem.raycastClosest(e,m.ENEMY)){var s=this.physicsSystem.raycastClosestResult.collider.node;this.player.hoverEnemy=s,this.player.hoverEffect.active=!1}else if(this.player.hoverEnemy=null,this.physicsSystem.raycastClosest(e,m.CUBE+m.HALFCUBE)){var o=this.physicsSystem.raycastClosestResult.collider.node.worldPosition;this.player.hoverEffect.setPosition(o),this.player.hoverEffect.active=!0}}},{key:"onMouseDown",value:function(t){t.getButton()}},{key:"onMouseMove",value:function(t){this._lastMouse=t}},{key:"onKeyUp",value:function(t){switch(t.keyCode){case p.KEY.space:break;case p.KEY.shift:this._isShift=!1}}},{key:"onKeyDown",value:function(t){switch(t.keyCode){case p.KEY.space:this.player.roleState.changeState(C.ROLL);break;case p.KEY.shift:this._isShift=!0}}},{key:"playerUpdate",value:function(t){this._isTouch&&this.onTouch(),this._lastMouse&&this.onHover()}}]),e}(v))||E)),c._RF.pop()}}}));

System.register("chunks:///script/game/Player.js",["../../_virtual/_rollupPluginBabelHelpers.js","cc","./data/Constants.js","./data/CustomEventListener.js","./data/PoolManager.js","./player/RoleBase.js","./player/PlayerState.js","./player/RoleControl.js"],(function(t,e){var i,o,n,s,a,r,l,h,c,u,f,d,p,g,y,m,E,v,_,C,k,T,b,S,P,w,R,A,M,L,B,D,N,z,H,I,W,j,F,U,V,x,G,O,K,Y,q,X;return t({_dec:void 0,_dec2:void 0,_dec3:void 0,_dec4:void 0,_dec5:void 0,_dec6:void 0,_class:void 0,_class2:void 0,_descriptor:void 0,_descriptor2:void 0,_descriptor3:void 0,_descriptor4:void 0,_descriptor5:void 0,_temp:void 0}),{setters:[function(t){i=t.applyDecoratedDescriptor,o=t.inherits,n=t.classCallCheck,s=t.possibleConstructorReturn,a=t.getPrototypeOf,r=t.initializerDefineProperty,l=t.assertThisInitialized,h=t.createClass,c=t.get},function(t){u=t.cclegacy,f=t.geometry,d=t._decorator,p=t.Vec3,g=t.Vec2,y=t.Node,m=t.ParticleSystemComponent,E=t.Prefab,v=t.PhysicsSystem,_=t.AnimationComponent,C=t.ColliderComponent,k=t.RigidBodyComponent,T=t.ModelComponent},function(t){b=t.Constants,S=t.PLAYERANIMSTATE},function(t){P=t.CustomEventListener},function(t){w=t.PoolManager},function(t){R=t.RoleBase},function(t){A=t.PlayerState},function(t){M=t.RoleControl}],execute:function(){u._RF.push({},"d072dvH949Iy7Bf5fBG3biX","Player",void 0),f.ray,G=b.PhysicsGroup,O=d.ccclass,K=d.property,Y=new p,new g(1,0),new p(0,0,10),q=new p(10,10,10),X=new p(-10,-100,-10),t("Player",(L=O("Player"),B=K({type:y}),D=K({type:m}),N=K({type:E}),z=K({type:E}),H=K({type:M}),L((j=i((W=function(t){function e(){var t,i;n(this,e);for(var o=arguments.length,h=new Array(o),c=0;c<o;c++)h[c]=arguments[c];return i=s(this,(t=a(e)).call.apply(t,[this].concat(h))),r(i,"hoverEffect",j,l(i)),r(i,"trailEffect",F,l(i)),i.dustEffect=null,r(i,"dustEffectPrefab",U,l(i)),i.dustRollEffect=null,r(i,"dustRollEffectPrefab",V,l(i)),i.roleState=null,r(i,"roleControl",x,l(i)),i.material=null,i.waveEnemys=[],i.animComp=null,i.rigidBody=null,i.collider=null,i.cubeTrigger=null,i.swordTrigger=null,i.physicsSystem=v.instance,i._playerState=S.IDLE,i._moveSpeed=5,i._attackTarget=null,i._isTriggerHalf=!1,i._rollTime=0,i._hoverEnemy=null,i._hoverEnemyMat=null,i._attckTime=0,i}return o(e,t),h(e,[{key:"start",value:function(){c(a(e.prototype),"start",this).call(this),b.game.player=this,this.roleState=new A,this.roleState.initialize(this),this.roleControl.initialize(this),this.animComp=this.node.getComponent(_),this.cubeTrigger=this.node.getChildByName("trigger").getComponent(C),this.swordTrigger=this.node.getChildByPath("Arm:Right:Lower Socket/Sword:Iron/sword").getComponent(C),this.rigidBody=this.node.getComponent(k),this.animComp.getState(S.WALK).speed=2,this.animComp.getState(S.ROLL).speed=2,this.animComp.getState(S.WAVE).repeatCount=1,this.animComp.on(_.EventType.FINISHED,this.roleState.onAnimFinish,this.roleState),this.trailEffect.enabled=!0,this.trailEffect.stop(),this.dustEffect=w.instance.getNode(this.dustEffectPrefab,this.node.parent),this.dustEffect.children.forEach((function(t){t.getComponent(m).stop()})),this.dustRollEffect=w.instance.getNode(this.dustRollEffectPrefab,this.node.parent),this.dustRollEffect.children.forEach((function(t){t.getComponent(m).stop()})),this.cubeTrigger.setMask(G.CUBE+G.HALFCUBE),this.cubeTrigger.on("onTriggerEnter",this.onTrigger,this),this.collider.setGroup(this.node.layer),console.log(this.node),this.swordTrigger.setGroup(G.ATTACK),this.swordTrigger.setMask(G.ENEMY)}},{key:"onCollision",value:function(t){}},{key:"onTrigger",value:function(t){t.otherCollider.getGroup()==G.HALFCUBE&&(this._isTriggerHalf=!0)}},{key:"onDestinationChange",value:function(){this.attackTarget||(this.hoverEffect.active=!0,Y.set(this.destination.x,this.destination.y,this.destination.z),this.hoverEffect.setPosition(Y)),c(a(e.prototype),"onDestinationChange",this).call(this),this.roleState.changeState(S.WALK,S.IDLE,this.attackTarget?S.IDLE:S.WAVE)}},{key:"checkAttack",value:function(){var t=this.attackTarget.position,e=new g(0,0);e.set(t.x-this.node.position.x,t.z-this.node.position.z),e.length()<1.5?(this.roleState.changeState(S.WAVE,S.WALK,S.IDLE),this.trunEulerAnglesByDelta(e)):this.destination=t}},{key:"resetStatus",value:function(){this.trailEffect.stop(),this.swordTrigger.setMask(G.NONE),this.waveEnemys=[],this.dustEffect.children.forEach((function(t){t.getComponent(m).loop=!1})),this.dustRollEffect.children.forEach((function(t){t.getComponent(m).loop=!1})),this._attckTime=0}},{key:"playAnim",value:function(t){this.animComp.play(t)}},{key:"startWalk",value:function(){this.dustEffect.children.forEach((function(t){t.getComponent(m).play(),t.getComponent(m).loop=!0}))}},{key:"startRoll",value:function(){this.attackTarget=null,this._destination.set(X),this.dustRollEffect.children.forEach((function(t){t.getComponent(m).play(),t.getComponent(m).loop=!0})),this._rollTime=.5}},{key:"attackEnemy",value:function(){}},{key:"move",value:function(t,i){this._isTriggerHalf&&(Y.set(0,.6,0),this.node.translate(Y),this._isTriggerHalf=!1),c(a(e.prototype),"move",this).call(this,t,i)}},{key:"onWalk",value:function(t){p.add(Y,this.node.position,new p(0,.3,0)),this.dustEffect.setPosition(Y),c(a(e.prototype),"onWalk",this).call(this,t)}},{key:"onRoll",value:function(t){p.add(Y,this.node.position,new p(0,.3,0)),this.dustRollEffect.setPosition(Y),this._rollTime>0?(this._rollTime-=t,this.move(t,10)):this.roleState.changeState(S.IDLE)}},{key:"onWave",value:function(t){this._attckTime+=t,this._attckTime>.21&&(this.trailEffect.play(),this.swordTrigger.setMask(G.ENEMY)),this._attckTime>.35&&this.swordTrigger.setMask(G.NONE)}},{key:"update",value:function(t){this.roleState.update(t),this.roleControl.playerUpdate(t),p.add(Y,this.node.position,q),Y.y=(Y.y-b.game.cameraCom.node.position.y)*t+b.game.cameraCom.node.position.y,Y.y=Math.max(Y.y,5),b.game.cameraCom.node.setPosition(Y),this.node.position.y<-20&&this.node.setPosition(Y.set(0,1,0))}},{key:"destination",set:function(t){t.equals(this._destination)||this.roleState.playerState==S.ROLL||this.attackTarget&&this.roleState.playerState==S.WAVE||(this._destination.set(t),this.onDestinationChange())},get:function(){return this._destination}},{key:"attackTarget",set:function(t){this._attackTarget!==t&&(this._attackTarget=t,this._attackTarget&&(P.dispatchEvent("set-attack-target",this._attackTarget),this.hoverEffect.active=!1))},get:function(){return this._attackTarget}},{key:"hoverEnemy",set:function(t){if(this._hoverEnemy!=t&&(this._hoverEnemy=t,this._hoverEnemyMat&&(this._hoverEnemyMat.passes[0].setUniform(this._hoverEnemyMat.passes[0].getHandle("depthBias"),0),this._hoverEnemyMat=null),this._hoverEnemy)){this._hoverEnemyMat=this._hoverEnemy.getChildByPath("RootNode/Mob_Zombie").getComponent(T).material;var e=this._hoverEnemyMat.passes[0];e.setUniform(e.getHandle("depthBias"),3)}},get:function(){return this._hoverEnemy}}]),e}(R)).prototype,"hoverEffect",[B],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),F=i(W.prototype,"trailEffect",[D],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),U=i(W.prototype,"dustEffectPrefab",[N],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),V=i(W.prototype,"dustRollEffectPrefab",[z],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),x=i(W.prototype,"roleControl",[H],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),I=W))||I)),u._RF.pop()}}}));

System.register("chunks:///script/game/setGroupMask.js",["../../_virtual/_rollupPluginBabelHelpers.js","cc","./data/Constants.js"],(function(t,e){var s,o,n,r,c,i,l,a,u,p,h,d,C,f;return t({_dec:void 0,_class:void 0,_temp:void 0}),{setters:[function(t){s=t.inherits,o=t.classCallCheck,n=t.possibleConstructorReturn,r=t.getPrototypeOf,c=t.createClass},function(t){i=t.cclegacy,l=t._decorator,a=t.Enum,u=t.ColliderComponent,p=t.Component},function(t){h=t.Constants}],execute:function(){i._RF.push({},"03826UhlJ5DUqe2CHtk02Hc","setGroupMask",void 0),f=l.ccclass,l.property,a(h.PhysicsGroup),t("setGroupMask",(d=f("setGroupMask"),d(C=function(t){function e(){var t,s;o(this,e);for(var c=arguments.length,i=new Array(c),l=0;l<c;l++)i[l]=arguments[l];return(s=n(this,(t=r(e)).call.apply(t,[this].concat(i)))).collider=null,s}return s(e,t),c(e,[{key:"start",value:function(){this.collider=this.node.getComponent(u),this.collider.setGroup(this.node.layer)}}]),e}(p))||C)),i._RF.pop()}}}));

System.register("chunks:///_virtual/prerequisite-imports:main",["../component/UIBillboardComponent/UIBillboardComponent.js","../script/effect/blockBatching.js","../script/effect/particleRemove.js","../script/game/BlockColor.js","../script/game/data/Constants.js","../script/game/data/CustomEventListener.js","../script/game/data/PoolManager.js","../script/game/EffectManager.js","../script/game/enemy/EnemyState.js","../script/game/player/RoleBase.js","../script/game/Enemy.js","../script/game/Game.js","../script/game/IsometricCamera.js","../script/game/player/PlayerState.js","../script/game/player/RoleControl.js","../script/game/Player.js","../script/game/setGroupMask.js"],(function(t,e){return{setters:[function(t){},function(t){},function(t){},function(t){},function(t){},function(t){},function(t){},function(t){},function(t){},function(t){},function(t){},function(t){},function(t){},function(t){},function(t){},function(t){},function(t){}],execute:function(){}}}));

(function(r) {
  r('project:///assets/component/UIBillboardComponent/UIBillboardComponent.js', 'chunks:///component/UIBillboardComponent/UIBillboardComponent.js');
  r('project:///assets/script/effect/blockBatching.js', 'chunks:///script/effect/blockBatching.js');
  r('project:///assets/script/effect/particleRemove.js', 'chunks:///script/effect/particleRemove.js');
  r('project:///assets/script/game/BlockColor.js', 'chunks:///script/game/BlockColor.js');
  r('project:///assets/script/game/data/Constants.js', 'chunks:///script/game/data/Constants.js');
  r('project:///assets/script/game/data/CustomEventListener.js', 'chunks:///script/game/data/CustomEventListener.js');
  r('project:///assets/script/game/data/PoolManager.js', 'chunks:///script/game/data/PoolManager.js');
  r('project:///assets/script/game/EffectManager.js', 'chunks:///script/game/EffectManager.js');
  r('project:///assets/script/game/enemy/EnemyState.js', 'chunks:///script/game/enemy/EnemyState.js');
  r('project:///assets/script/game/player/RoleBase.js', 'chunks:///script/game/player/RoleBase.js');
  r('project:///assets/script/game/Enemy.js', 'chunks:///script/game/Enemy.js');
  r('project:///assets/script/game/Game.js', 'chunks:///script/game/Game.js');
  r('project:///assets/script/game/IsometricCamera.js', 'chunks:///script/game/IsometricCamera.js');
  r('project:///assets/script/game/player/PlayerState.js', 'chunks:///script/game/player/PlayerState.js');
  r('project:///assets/script/game/player/RoleControl.js', 'chunks:///script/game/player/RoleControl.js');
  r('project:///assets/script/game/Player.js', 'chunks:///script/game/Player.js');
  r('project:///assets/script/game/setGroupMask.js', 'chunks:///script/game/setGroupMask.js');
  r('virtual:///prerequisite-imports:main', 'chunks:///_virtual/prerequisite-imports:main'); 
})(function(mid, cid) {
    System.register(mid, [cid], function (_export, _context) {
    var _m;
    return {
        setters: [function(m) { _m = m; }],
        execute: function () { _export(_m); }
    };
    });
});
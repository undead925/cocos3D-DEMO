import { _decorator, Component, Node, Vec2, Vec3, PhysicsSystem, ColliderComponent  } from "cc";
import { RoleBase } from "./RoleBase";
import { Constants } from "./data/Constants";
const { ccclass, property } = _decorator;

// 操作半径
const _tempPos = new Vec3();
const Horizontal = new Vec2(1, 0);
const ChangeAngelTime = 0.5;

@ccclass("Enemy")
export class Enemy extends RoleBase {

    @property(Vec3)
    originPos = new Vec3();

    @property({
        type: ColliderComponent
    })
    wallTest: ColliderComponent = null;

    private deltaPos = new Vec3();

    private Delta = new Vec2();

    private _deltaTime = ChangeAngelTime;

    private _rotateAngle = false;

    start () {

        super.start();

        //位置信息初始化
        this.node.setPosition(this.originPos)

        //人物朝向
        _tempPos.set(0, 0, 0);
        this.node.eulerAngles = _tempPos;

        //人物动画初始化
        this._animComp.getState('rig|run').speed = 1.5;
        this._animComp.getState('rig|jump').speed = 4/3;

        this.changeState('rig|idle1');

        this.wallTest.on('onTriggerEnter',this.onWallTest,this);

        this.wallTest.setMask(1);

    }

    
    onDestroy() {

        super.onDestroy();

        // this.wallTest.off('onTriggerEnter',this.onWallTest,this);

    }

    onWallTest(event){

        //碰到地板
        if(event.otherCollider.node._name == 'WallLargeB'){

        

            this._rotateAngle = true;

    
        }
    }

    
    update(dt){

        Vec3.subtract(this.deltaPos, this.node.position, Constants.roleManager.mainRole.node.position);

        this.Delta.set(this.deltaPos.x, -this.deltaPos.z)


        if(this.Delta.length() < 10 ){
            if(this._deltaTime >= 0.5){
                this._deltaTime = 0;
                this._tempDelta.set(this.Delta.rotate((-10 + 20 * Math.random() + (this._rotateAngle ? 90 : 0)) * Math.PI / 180));
                this._rotateAngle = false;
                this.trunEulerAnglesByDelta();
                this.changeState('rig|run', 'rig|idle1');
            }

            
        }
        else{

            this.changeState('rig|idle1', 'rig|run');

        }


        this._deltaTime += dt

        super.update(dt);

        
    }
}

import { _decorator, Component, Node, Vec3, PhysicsSystem  } from "cc";
import { RoleBase } from "./RoleBase";
import { Constants } from "./data/Constants";
const { ccclass, property } = _decorator;

// 操作半径
const _tempPos = new Vec3();

@ccclass("RoleCtrl")
export class RoleCtrl extends RoleBase {

    @property(Node)
    camera: Node = null;
    @property(Vec3)
    originPos = new Vec3();


    private cameraPos = new Vec3(0, 40, 40);


    start () {

        PhysicsSystem.instance.gravity = new cc.math.Vec3(0,-30,0)

        super.start();

        //位置信息初始化
        this.node.setPosition(this.originPos)

        this.cameraPos.set(this.camera.position);

        //人物朝向
        _tempPos.set(0, 180, 0);
        this.node.eulerAngles = _tempPos;

        //人物动画初始化
        this._animComp.getState('rig|run').speed = 1.5;
        this._animComp.getState('rig|jump').speed = 4/3;

        this.changeState('rig|idle1');


    }

    onCollision(event){

        super.onCollision(event);

        //碰到地板
        if(event.otherCollider.node._name == 'enemy'){

            console.log('enemy')


            Constants.roleManager.destroyEnemy(event.otherCollider.node);
        }
    }

    
    update(dt){
        
        super.update(dt);


        Vec3.add(_tempPos, this.node.position, this.cameraPos);
        _tempPos.z = _tempPos.z <= 40 ? _tempPos.z : 40;
        this.camera.setPosition(_tempPos);
    }
}

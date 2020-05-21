import { _decorator, Component, Node, Vec2, Vec3, AnimationComponent, RigidBodyComponent, ColliderComponent} from "cc";
import { Constants } from "./data/Constants";
const { ccclass, property } = _decorator;

const _tempPos = new Vec3();
const _velocity = new Vec3();
const Horizontal = new Vec2(1, 0);
const MOVE_VELOCITY = new Vec3(0, 0, 10);

@ccclass("RoleBase")
export class RoleBase extends Component {



    protected _isJumping = false;

    protected _animComp: AnimationComponent = null;
    protected _rigidBody: RigidBodyComponent = null;
    protected collider: ColliderComponent = null;
    protected _animState = 'rig|idle1';

    protected  _tempDelta = new Vec2();

    public isRuning = false;

    start () {        


        this._animComp = this.node.getComponent(AnimationComponent);

        this._rigidBody = this.node.getComponent(RigidBodyComponent);        

        //人物碰撞事件
        this.collider = this.node.getComponent(ColliderComponent);
        this.collider.setMask(Constants.PhysicsGroup.ALL);

        this.collider.on('onCollisionEnter',this.onCollision,this);

        this.collider.on('onTriggerExit',this.onTriggerExit,this);
        

    }

    onDestroy() {

        // this.collider.off('onCollisionEnter',this.onCollision,this);

        // this.collider.off('onTriggerExit',this.onTriggerExit,this);

    }

    onCollision(event){

        //碰到地板
        if(event.otherCollider.node._name == 'cell'){

            if(this._isJumping){
                
                if(!this.isRuning){
                    this.changeState('rig|idle1');                
                }
                else{
                    this.changeState('rig|run');                
                }

                this._isJumping=false;
                this.collider.setMask(Constants.PhysicsGroup.ALL);

            }            
    
        }

        //碰到桌面
        if(event.otherCollider.node._name == 'top' || event.otherCollider.node._name == 'ramp'){

            if(event.contacts[0].normal.y > 0.5){
                if(this._isJumping){
                
                    if(!this.isRuning){
                        this.changeState('rig|idle1');                
                    }
                    else{
                        this.changeState('rig|run');                
                    }
    
                    this._isJumping=false;
                    this.collider.setMask(Constants.PhysicsGroup.ALL);

                }   
            }
        }

        if(event.otherCollider.node._name == 'jumpTrigger'){
            event.otherCollider.isTrigger = true;
            this._rigidBody.getLinearVelocity(_velocity);

            //判断速度角度是否满足跳跃触发条件
            if(
                (event.otherCollider.node.position.z > 0 && event.contacts[0].normal.z > 0.9 && _velocity.z < -5) 
                || (event.otherCollider.node.position.z < 0 && event.contacts[0].normal.z < -0.9 && _velocity.z > 5)
                || (event.otherCollider.node.position.x > 0 &&event.contacts[0].normal.x > 0.9 && _velocity.x < -5) 
                || (event.otherCollider.node.position.x < 0 && event.contacts[0].normal.x < -0.9 && _velocity.x > 5)
            ){            
                if(this._isJumping == false){


                    this.changeState('rig|jump');

                    this.collider.setMask(Constants.PhysicsGroup.NORMAL);
                }
            }
        }
    }

    onTriggerExit(event){


        //碰到桌触发器
        if(event.otherCollider.node._name == 'jumpTrigger'){

            event.otherCollider.isTrigger = false;

        }
    }

    changeState(name: string, ...from: Array<string>){

        if(this._animState === name){
            return;
        }

        if(from.length > 0 && from.indexOf(this._animState) < 0){
            return;
        }

        this._animComp.play(name);        
        this._animState = name;

        switch(name){
            case 'rig|jump':            
                this.jump();
                this._isJumping=true;
                break;
            case 'rig|jumpDown':
                this._isJumping=true;
                break;
            case 'rig|run':
                this.trunEulerAnglesByDelta();
                break;
        }
    }

    jump(){
        _velocity.set(0, 150 ,0);
        Vec3.transformQuat(_velocity,_velocity,this.node.getWorldRotation());
        this._rigidBody.applyImpulse(_velocity);
        this._rigidBody.getLinearVelocity(_velocity);
    }

    trunEulerAnglesByDelta(Delta = this._tempDelta){

        this._tempDelta.set(Delta);

        if(Delta.length() == 0 || this._animState !== 'rig|run'){
            return;
        }

        // 计算角色的整体旋转值
        const deltaRadian = Delta.angle(Horizontal);       
        const angle = deltaRadian * 180 / Math.PI;
        const rot = this.node.eulerAngles;
        _tempPos.set(rot.x, 90 + (Math.sign(Delta.y)) * angle, rot.z);
        this.node.eulerAngles = _tempPos;
    }

    update(dt){
        if(this._animState != 'rig|jump' && this._animState != 'rig|jumpDown'){
            this._rigidBody.getLinearVelocity(_tempPos);
            if(_tempPos.y < -4.5){     
                this.changeState('rig|jumpDown');
            }
        }

        

        if(this._animState != 'rig|run' && !this._isJumping){
            return;
        }

        if(this._animState == 'rig|run'){
            _velocity.set( MOVE_VELOCITY );
            Vec3.transformQuat(_velocity,_velocity,this.node.getWorldRotation());
            this._rigidBody.getLinearVelocity(_tempPos);
            this._rigidBody.setLinearVelocity(_velocity.set(_velocity.x,_tempPos.y,_velocity.z));
        }
        
        
    }
}

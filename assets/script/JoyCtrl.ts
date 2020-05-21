import { _decorator, Component, Node, Vec2, Vec3, systemEvent, SystemEventType, macro, Touch, UITransformComponent} from 'cc';
import { RoleCtrl } from "./RoleCtrl";
const { ccclass, property } = _decorator;

// 操作半径
const TOUCH_RADIUS = 120;
const _tempPos = new Vec3();
const _tempDelta = new Vec2();
const Horizontal = new Vec2(1, 0);

@ccclass('JoyCtrl')
export class JoyCtrl extends Component {
    @property(Node)
    ctrlSprite: Node = null;
    @property(Vec3)
    originPos = new Vec3();
    @property({
        type: RoleCtrl
    })
    mainRole: RoleCtrl = null;

    public _isTouch = false;

    private _touchPos = new Vec2();
    private _startPos = new Vec2();
    private _movePos = new Vec2();
    private _originPos = new Vec2();

    start () {
        // Your initialization goes here.

        //位置信息初始化
        this.ctrlSprite.setPosition(this.originPos);

        //摇杆控制UI
        _tempPos.set(this.ctrlSprite.getComponent(UITransformComponent).convertToWorldSpaceAR(this.originPos));
        this._originPos.set(_tempPos.x, _tempPos.y);

        //输入控制
        systemEvent.on(SystemEventType.TOUCH_START, this.touchStart, this);
        systemEvent.on(SystemEventType.TOUCH_MOVE, this.touchMove, this);
        systemEvent.on(SystemEventType.TOUCH_END, this.touchEnd, this);

         
        systemEvent.on(SystemEventType.KEY_UP,this.onKeyUp,this);
        systemEvent.on(SystemEventType.KEY_DOWN,this.onKeyDown,this);
    }

    onDestroy() {


        systemEvent.off(SystemEventType.TOUCH_START, this.touchStart, this);
        systemEvent.off(SystemEventType.TOUCH_MOVE, this.touchMove, this);
        systemEvent.off(SystemEventType.TOUCH_END, this.touchEnd, this);

        systemEvent.off(SystemEventType.KEY_UP,this.onKeyUp,this);
        systemEvent.off(SystemEventType.KEY_DOWN,this.onKeyDown,this);
    }

    onKeyUp(event){
        switch(event.keyCode) {
            case macro.KEY.space:
                break;
        }
    }

    onKeyDown(event){
        switch(event.keyCode) {
            case macro.KEY.space:

                this.mainRole.changeState('rig|jump');

                break;
        }
    }

    touchStart(touch: Touch){
     

        touch.getUILocation(this._startPos);
        const distance = Vec2.subtract(_tempDelta, this._startPos, this._originPos).length();        
        if (distance < TOUCH_RADIUS) {

            this._touchPos.set(this._startPos);
            this._movePos.set(this._startPos);
            _tempPos.set(this.ctrlSprite.position);
            this.ctrlSprite.setWorldPosition(this._startPos.x, this._startPos.y, _tempPos.z);
            this._isTouch = true;
            this.mainRole.isRuning = true;


            this.mainRole.changeState('rig|run', 'rig|idle1');
        }
    }

    touchMove(touch: Touch){

        if(!this._isTouch){
            return;
        }
        

        touch.getUILocation(this._movePos);

        

        // 重新规划移动方向值
        const distance = Vec2.subtract(_tempDelta, this._movePos, this._originPos).length();        
        
        // 是否超出限制半径
        if(distance > TOUCH_RADIUS){
            const radian = -_tempDelta.signAngle(Horizontal);
            const x = Math.cos(radian) * TOUCH_RADIUS;
            const y = Math.sin(radian) * TOUCH_RADIUS;
            this._movePos.set(this._originPos.x + x, this._originPos.y + y);
        }

        this.ctrlSprite.setWorldPosition(this._movePos.x, this._movePos.y, 0);
        this._touchPos.set(this._movePos);

        
        this.mainRole.trunEulerAnglesByDelta(_tempDelta);
    }

    touchEnd(touch: Touch){
        

        this._isTouch = false;
        this.mainRole.isRuning = false;

        this.ctrlSprite.setPosition(this.originPos);


        this.mainRole.changeState('rig|idle1');
    }

    // update (deltaTime: number) {
    //     // Your update function goes here.
    // }
}

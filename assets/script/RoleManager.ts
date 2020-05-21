import { _decorator, Component, Node, Prefab, NodePool, instantiate} from 'cc';
import { RoleCtrl } from "./RoleCtrl";
import { Constants } from "./data/Constants";
const { ccclass, property } = _decorator;

@ccclass('RoleManager')
export class RoleManager extends Component {


    @property({
        type: RoleCtrl
    })
    mainRole: RoleCtrl = null;

    @property({
        type: Prefab
    })
    enemyPrefab: Prefab = null;

    @property((Node))
    resetUI: Node = null;


    private _enemyList = [];

    __preload () {
        Constants.roleManager = this;
    }

    start () {
        // Your initialization goes here.

        this.createEnemy();
       

    }

    createEnemy(){

        let enemy = instantiate(this.enemyPrefab);

        enemy.parent = this.node;

        this._enemyList.push(enemy);
    }

    destroyEnemy(enemy){

        let index = this._enemyList.indexOf(enemy);

        if(index >=0 ){
            this._enemyList.splice(index, 1);
            enemy.destroy();
        }

        if(this._enemyList.length == 0){
            console.log('gameover');

            this.resetUI.active = true;
        }
    }

    resetGame(){

        this.mainRole.node.setPosition(this.mainRole.originPos);

        this.createEnemy();

        this.resetUI.active = false;

    }


    // update (deltaTime: number) {
    //     // Your update function goes here.
    // }
}

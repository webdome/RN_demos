import { observable, action } from "mobx";

class HomeStore {
  @observable num;

  constructor(){
    this.num = 0;
  }

  @action
  plus = ()=>{
    this.num+=1;
  }

  @action
  minus = ()=>{
    this.num-=1;
  }

}

export default new HomeStore()
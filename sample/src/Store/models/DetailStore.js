import { observable, action } from 'mobx';

class DetailStore {
  constructor(){
    this.num = 0
  }

  @observable num

  @action
  plus = ()=>{
    this.num+=1;
  }

  @action
  minus = ()=>{
    this.num-=1;
  }
  
}

export default new DetailStore()
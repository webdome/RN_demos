import { observable, action } from "mobx";

class HomeStore {
  @observable text;
  @observable num;

  constructor(){
    this.num = 0;
    this.text = 'hello, this is homePage'
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
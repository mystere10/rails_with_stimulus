import {Controller} from 'stimulus';

export default class extends Controller{
  log(){
    console.log(this.targets.find("name").value)
  }

  paste(event){
    event.preventDefault()
    console.log("paste not allowed")
  }
}

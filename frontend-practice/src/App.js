import React,{ Component } from "react";
import Counter from "./component/Counter";
class App extends Component{

 constructor(props){
  super(props);
  this.state={
    data : null
  }
 }

render(){
  return(
    <div>
      <Counter/>
    </div>
  )
}

}
export default App;
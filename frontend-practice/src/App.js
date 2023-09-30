import React,{ Component } from "react";
import Counter from "./component/Counter";
import ShowDialog from './component/ShowDialog'
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
      {/* <Counter/> */}
      <ShowDialog/>
    </div>
  )
}

}
export default App;
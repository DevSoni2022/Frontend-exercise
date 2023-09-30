import { render } from "node-sass";
import React,{Component} from "react";

class Dialog extends Component{

    constructor(props){
        super(props);
        {
            this.state={
                ShoeDialog:false
            }
        }
    }
    HandleDialog=()=>{
        this.setState({
            ShoeDialog : !this.state.ShoeDialog
        })
    }
    render(){
        return(
            <div className="main-container">
                    {this.state.ShoeDialog && 
                        <div className="modal-container">
                            <button onClick={()=>this.setState({
                                
                            })}></button>
                            Modal Content Are hree


                            </div>
                    }

                    {!this.state.ShoeDialog && <button onClick={this.bind.HandleDialog()}>ShowMoal</button>}
            </div>
        )
    }
}
export default Dialog
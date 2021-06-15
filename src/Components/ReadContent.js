import React, {Component} from 'react';

class ReadContent extends Component{
    shouldComponentUpdate(newProps,newState){
    if(this.props.data === newProps.data){
      return false;
    }
    return true;
  }
    render(){
      console.log("ReadContent Render");
      return(
        <article>
          <h1>{this.props.title}</h1>
          {this.props.desc}
        </article>
      );
    }
  }

  export default ReadContent;
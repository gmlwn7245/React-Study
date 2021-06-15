import React, {Component} from 'react';

class Subject extends Component{
  shouldComponentUpdate(newProps,newState){
    if(this.props.data === newProps.data){
      return false;
    }
    return true;
  }
    render(){
      console.log("Subject Render");
      return (
        <header>
        <h1><a href="/" onClick={function(e){
          e.preventDefault();
          this.props.onChangePage();
        }.bind(this)}>{this.props.title}</a></h1>
        {this.props.subtitle}
        </header>
      );
    }
  }

  export default Subject;
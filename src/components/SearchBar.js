import React from "react";

class SearchBar extends React.Component {
  onInputChange(event){
    console.log(event.target.value)
  }

  render(){
    return (
      <div className="ui segment">
        <from className="ui form">
          <div className="field">
            <label>Image Saerchearch</label>
            <input type="text" onChange={this.onInputChange}></input>
          </div>
        </from>
      </div>
    );
  }
}

export default SearchBar;
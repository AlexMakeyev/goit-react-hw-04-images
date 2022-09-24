import React from "react";
import { ImageGallery } from "./ImageGallery/ImageGallery";
import { Searchbar } from "./Searchbar/Searchbar";


export class App extends React.Component  {

  state = {
    search: '',
  }
  handleSearchSubmit = search => {
    this.setState({ search });
    // console.log(text);
  }
  render() {
    return(<div>
      <Searchbar onSubmit = {this.handleSearchSubmit}></Searchbar>
      <ImageGallery search={this.state.search}/>
    </div>
      );
  
    }
};

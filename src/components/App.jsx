import React from "react";
import { ImageGallery } from "./ImageGallery/ImageGallery";
import { Searchbar } from "./Searchbar/Searchbar";
import { fetchImages } from "./Api/Api";
import {Button} from  "./Button/Button";
import {Loader} from "./Loader/Loader";
import {Modal} from './Modal/Modal';

export class App extends React.Component  {

  state = {
    images: [],
    search: '',
    page: 0,
    loading: false,
    error: null,
    showModal: false,
    largeImgUrl: '',
  };

  componentDidUpdate(prevProps, prevState) {
    const prevPage = prevState.page;
    const nextPage = this.state.page;
    const prevSearch = prevState.search;
    const nextSearch = this.state.search;

    if (prevPage !== nextPage || prevSearch !== nextSearch) {
      this.setState({ loading: true });
      fetchImages(this.state.search, this.state.page)
        .then(data => {
          if (data.total === 0) {
            return Promise.reject(new Error());
          }
          this.setState(({ images }) => {
            return {
              images: images.concat(data),
            };
          });
        })
        .catch(error => this.setState({ error }))
        .finally(() => {
          this.setState({ loading: false });
        });
    }
  };

  handleSearchSubmit = search => {
    this.setState(prevState => {
      return {
        images: [],
        search,
        page: 1,
        error: null,
      };
    });
    
  };
  onLoadMoreBtnClick = () => {
    this.setState(prevState => {
      return {
        page: prevState.page + 1,
      };
    });
  };
  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };
  handleImg = largeUrl => {
    this.setState({ largeImgUrl: largeUrl });
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };
  render() {
    const { loading, showModal, images, largeImgUrl } = this.state;
    return(<div>
      <Searchbar onSubmit = {this.handleSearchSubmit}/>
      
      {images.length > 0 && (
          <div>
            <ImageGallery imgs={this.state.images} onClick={this.handleImg} />
            <Button onClick={this.onLoadMoreBtnClick} />
          </div>
        )}
        {loading && <Loader />}
        {showModal && <Modal onClose={this.toggleModal} src={largeImgUrl} />}
    </div>
      );
  
    }
};

import React from "react";
import { ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ImageGallery } from "./ImageGallery/ImageGallery";
import { Searchbar } from "./Searchbar/Searchbar";
import * as API from "./Api/Api";
import {Button} from  "./Button/Button";
import {Loader} from "./Loader/Loader";
import {Modal} from './Modal/Modal';
import { Alert } from "./Alert/Alert";




export class App extends React.Component  {

  state = {
    images: [],
    search: '',
    page: 0,
    loading: false,
    error: false,
    showModal: false,
    largeImageURL: '',
    totalPages: 0,
  };
  loadImages = async (search, page) => {
    this.setState({ loading: true });

    try {
      const data = await API.fetchImages(search, page);
      this.setState(prevState => ({
        images: [...prevState.images, ...data.hits],
        totalPages: data.totalHits,
      }));
    } catch (error) {
      this.setState({ error: true });
    } finally {
      this.setState({ loading: false });

    }
  };
  componentDidUpdate(prevProps, prevState) {
    const { search, page } = this.state;
    if (prevState.search !== search || prevState.page !== page) {
      this.loadImages(search, page);
    }
  }

  

  handleSearchSubmit = search => {
    this.setState(prevState => {
      return {
        images: [],
        search,
        page: 1,
        error: false,
        totalPages: 0,
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
    this.setState({ largeImageURL: largeUrl });
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };
  render() {
    const { images, loading, error, largeImageURL, page, totalPages, showModal } = this.state;
    return(<div>
      <Searchbar onSubmit = {this.handleSearchSubmit}/>
      {error && <Alert />}
      <ToastContainer />

      {images.length > 0 && (
          <div>
            <ImageGallery images={images} onClick={this.handleImg} />
            {page < Math.ceil(totalPages / 12) && (
          <Button onClick={this.onLoadMoreBtnClick} />
        )}
          </div>
        )}
        {loading && <Loader />}
        {showModal && <Modal onClose={this.toggleModal} src={largeImageURL} />}
    </div>
      );
  
    }
};
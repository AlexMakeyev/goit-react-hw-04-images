// import React from "react";
import { useState, useEffect } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ImageGallery } from "./ImageGallery/ImageGallery";
import { Searchbar } from "./Searchbar/Searchbar";
import * as API from "./Api/Api";
import {Button} from  "./Button/Button";
import {Loader} from "./Loader/Loader";
import {Modal} from './Modal/Modal';
import { Alert } from "./Alert/Alert";




export const App = () =>  {

  const [images, setImages] = useState([]);
  const [search, setSearch] = useState('');
  const [page, setPage] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [showModal, setshowModal] = useState(false);
  const [largeImageURL, setlargeImageURL] = useState('');
  const [totalPages, setTotalPages] = useState(0);
  
  useEffect(() => {
    if(!search) {
      return;
    }
    const loadImages = async (search, page) => {
      setLoading(true);
  
      try {
        const data = await API.fetchImages(search, page);
        setImages(prev=> [...prev, ...data.hits])
        setTotalPages(data.totalHits);
        
      } catch (error) {
        setError({error});
      } finally {
        setLoading(false);
      } 
    };
    loadImages(search, page);
    
  }, [search, page])
   
  
  

  const handleSearchSubmit = search => {
    setSearch(search);
    setImages([]);
    setPage(1)
    setTotalPages(0)
  };
  const onLoadMoreBtnClick = () => {
    setPage(prev => prev + 1);
  };

  const toggleModal = () => {
    setshowModal(!showModal)
  };
  const handleImg = largeUrl => {
    setlargeImageURL(largeUrl);
    setshowModal(!showModal)
  };
  return(<div>
    <Searchbar onSubmit = {handleSearchSubmit}/>
    {error && <Alert />}
    <ToastContainer />

    {images.length > 0 && (
        <div>
          <ImageGallery images={images} onClick={handleImg} />
          {page < Math.ceil(totalPages / 12) && (
        <Button onClick={onLoadMoreBtnClick} />
      )}
        </div>
      )}
      {loading && <Loader />}
      {showModal && <Modal onClose={toggleModal} src={largeImageURL} />}
  </div>
    );
};
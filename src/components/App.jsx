import React, { Component } from 'react';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import Button from './Button/Button';
import { ToastContainer, toast, Flip } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { fetchImages } from './services/api';
import Loader from './Loader/Loader';
import { animateScroll } from 'react-scroll';
import {AppFrame } from './App.styled';

export class App extends Component{
  state = {
    searchQuery: '',
    images: [],
    error: null,
    isLoading: false,
    page: 1,
    per_page: 12,
    loadMore: false,
  };

  componentDidUpdate(_, prevState) {
    const { searchQuery, page } = this.state;
    if (prevState.searchQuery !== searchQuery || prevState.page !== page) {
      this.getImages(searchQuery, page);
    }
  };

   getImages = async (query, page) => {
     this.setState({ isLoading: true});
     if (!query) {
      return;
    }
    try {
      const { hits, totalHits } = await fetchImages(query, page);
      if (!hits.length) {
        this.setState({loadMore: false}) 
        return toast.info('Nothing was found for your request. Try something else');  
      }
      this.setState(prevState => ({
        images: [...prevState.images, ...hits],
        loadMore: this.state.page < Math.ceil(totalHits / this.state.per_page),
      }));
    } catch (error) {
      this.setState({ error: error.message });
    } finally {
      this.setState({ isLoading: false });
    }
  };

  hangleFormSubmit = searchQuery => {
    this.setState({ searchQuery, images: [], page: 1, })
  };

  onloadMore = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
    this.scrollToBottomButton()
  };

  scrollToBottomButton = () => {
    animateScroll.scrollToBottom({
      duration: 2000,
      delay: 10,
      smooth: 'linear',
    });
  };

  render() {
    const {  images,  loadMore, isLoading} = this.state;
    return (
      <AppFrame>
        <ToastContainer transition={Flip}/>
        <Searchbar onSubmitImage={this.hangleFormSubmit } />
        {isLoading ? (
          <Loader/>
        ) : ( 
          <ImageGallery images={images}  />
        )}
        {loadMore && <Button onloadMore={this.onloadMore}/>}
        
    </AppFrame> 
    )
  };
};

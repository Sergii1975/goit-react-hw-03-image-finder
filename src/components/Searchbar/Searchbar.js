

import { Component } from 'react';
import { toast } from 'react-toastify';
import PropTypes from 'prop-types';
import { SearchBarHead, SearchForm, SearchFormBtn, SearchFormButtonLabel, SearchFormInput } from './Searchbar.styled'


// import React, { Component } from 'react';
// import PropTypes from 'prop-types';
// import { SearchBarHead, SearchForm, SearchFormBtn, SearchFormButtonLabel, SearchFormInput } from './Searchbar.styled'
// import { toast } from 'react-toastify';

 class Searchbar extends Component  {

    state = {
        searchQuery: '',
    };

    handleNameChange = event => {
    this.setState({ searchQuery: event.currentTarget.value.toLowerCase() });
    };
    
    handleSubmit = event => {
        event.preventDefault();
    if (this.state.searchQuery.trim() === '') {
    return  toast.info('Please enter the search data.');
        };
        this.props.onSubmitImage(this.state.searchQuery);
        this.setState({searchQuery: ''});
    };

    render() {
         return (
             <SearchBarHead>
                 <SearchForm  onSubmit={this.handleSubmit} >
                <SearchFormBtn type="submit">
                    <SearchFormButtonLabel>Search</SearchFormButtonLabel>
                </SearchFormBtn>
                
                <SearchFormInput 
                    type="text"
                    autoComplete="off"
                    autoFocus
                    placeholder="Search images and photos"
                    value={this.state.searchQuery}
                    onChange={this.handleNameChange}/>
            </SearchForm>
        </SearchBarHead>
    );
    };   
};

Searchbar.propTypes = {
    onSubmitImage: PropTypes.func.isRequired,
};

export default Searchbar;
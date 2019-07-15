import React, {Fragment} from 'react';
import './SearchPage.css';
import SearchInput from "../../SearchInput";
import ImagesGrid from "../../ImagesGrid/ImagesGrid";
import Loader from "../../Loader/Loader";
import debounce from "../../../helpers/debounce";
import GifAPI from "../../../helpers/GifAPI";
import GifHelper from "../../../helpers/GifHelper";
import config from "../../../config";

class SearchPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: '',
      images: [],
      currentSearchOffset: 0,
      isLoading: false,
      numberOfImagesInARow: 1,
    };

    this.search = this.search.bind(this);
    this.search = debounce(this.search, config.SEARCH_DEBOUNCE_TIME);
    this.debouncedOnScroll = debounce(this.onScroll.bind(this), config.SCROLL_LOAD_NEXT_DEBOUNCE_TIME);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.debouncedOnScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.debouncedOnScroll);
  }

  onScroll() {
    const heightTillTheEndOfDocument = document.body.offsetHeight - window.scrollY - window.innerHeight;

    if (heightTillTheEndOfDocument < config.SCROLL_OFFSET_TO_LOAD_NEW_IMAGES) {
      this.loadNextImages();
    }
  }

  onChangeSearch = (searchText = '') => {
    searchText = searchText.trim();
    if (searchText.length > 1) {
      this.setState(prevState => ({...prevState, searchText, images: [], currentSearchOffset: 0}));
      this.loadNextImages();
    } else {
      this.setState( prevState => ({...prevState, searchText: ''}));
    }
  };

  loadNextImages() {
    if (!this.state.isLoading) {
      this.setState({isLoading: true});
      this.search();
    }
  }

  search() {
    GifAPI.search(this.state.searchText, config.GIPHY_LIMIT, this.state.currentSearchOffset).then((images) => {
      images = GifHelper.getImagesForList(images);
      const currentSearchOffset = this.state.currentSearchOffset + images.length;
      if (images.length) {
        images = this.state.images.concat(images);
      }
      this.setState( (prevState) => ({...prevState, images, currentSearchOffset, isLoading: false}));
    });
  }

  showImages() {
    return (
        this.state.images.length ?
          <Fragment>
            <div className="GridControls">
              <button onClick={() => this.setState({numberOfImagesInARow: 1})}>1 per line</button>
              <button onClick={() => this.setState({numberOfImagesInARow: 3})}>3 per line</button>
              <button onClick={() => this.setState({numberOfImagesInARow: 5})}>5 per line</button>
            </div>
            <ImagesGrid numberOfImagesInARow={this.state.numberOfImagesInARow} images={this.state.images}/>
          </Fragment>
           :
          this.renderSearchMessage()
    );
  }

  renderSearchMessage() {
    return this.state.isLoading ? '' : <span>Please type a search</span>;
  }

  render() {
    return (
      <div className="SearchPage">
        <SearchInput onChangeCallback={this.onChangeSearch}/>
        <div>{this.showImages()}</div>
        {this.state.isLoading ? <Loader/> : ''}
      </div>
    );
  }
}

export default SearchPage;

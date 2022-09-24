import ImageGalleryItem from "components/ImageGalleryItem/ImageGalleryItem";
import React from "react";

export class ImageGallery extends React.Component {

    state ={
        
    };

    componentDidUpdate(prevProps, prevState) {
        if(prevProps.search !== this.props.search) {
            console.log(prevProps.search);
            console.log(this.props.search);
            fetch(`https://pixabay.com/api/?q=${this.props.search}&page=1&key=29340934-fccd3ef8fb1a1d4c6e234d989&image_type=photo&orientation=horizontal&per_page=12/`)
            .then(res => res.json())
            .then(console.log);
            
        }
    }





    render(){
        
        return(<div>
            <ul >
                <li>
                <ImageGalleryItem></ImageGalleryItem>
                </li>
            </ul>
            

        </div>)
    }
}
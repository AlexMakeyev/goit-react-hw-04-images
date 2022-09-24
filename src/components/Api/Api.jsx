export const fetchImages = async (search, page) => {
    const res = await fetch(
        `https://pixabay.com/api/?q=${search}&page=${page}&key=29340934-fccd3ef8fb1a1d4c6e234d989&image_type=photo&orientation=horizontal&per_page=12`
    );
    const data = await res.json();
    const images = data.hits.map(image => {
        const img = {
            id: image.id,
            largeImageURL: image.largeImageURL,
            webformatURL: image.webformatURL
        };
        return img;
    });
    return images;
  };
  
//   `https://pixabay.com/api/?q=${search}&page=${page}&key=29340934-fccd3ef8fb1a1d4c6e234d989&image_type=photo&orientation=horizontal&per_page=12`
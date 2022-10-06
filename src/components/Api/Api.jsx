export const fetchImages = async (search, page) => {
    const response = await fetch(
        `https://pixabay.com/api/?q=${search}&page=${page}&key=29340934-fccd3ef8fb1a1d4c6e234d989&image_type=photo&orientation=horizontal&per_page=12`
    );
    const data = await response.json();
    return data;
};

  
//   `https://pixabay.com/api/?q=${search}&page=${page}&key=29340934-fccd3ef8fb1a1d4c6e234d989&image_type=photo&orientation=horizontal&per_page=12`

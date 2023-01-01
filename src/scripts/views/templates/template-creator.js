import CONFIG from '../../globals/config';

const createRestaurantDetailTemplate = (restaurant) => `
  <h2 class="movie__title">${restaurant.name}</h2>
    <img class="movie__poster lazyload" data-src="${
  CONFIG.BASE_IMAGE_URL + restaurant.pictureId
}" alt="${restaurant.name}" />
    <div class="movie__info">
      <h3>Information</h3>
      <h4>City</h4>
      <p>${restaurant.city}</p>
      <h4>Address</h4>
      <p>${restaurant.address}</p>
      <h4>Rating</h4>
      <p>⭐️${restaurant.rating}</p>
    </div>  
  <div class="movie__overview">
    <h3>Overview</h3>
    <p>${restaurant.description}</p>
  </div>
`;

const createRestaurantItemTemplate = (restaurant) => `
  <div class="movie-item">
    <div class="movie-item__header">
      <img class="movie-item__header__poster lazyload" alt="${
  restaurant.name || '-'
}"
           data-src="${
  restaurant.pictureId
    ? CONFIG.BASE_IMAGE_URL + restaurant.pictureId
    : 'https://picsum.photos/id/666/800/450?grayscale'
}">
      <div class="movie-item__header__rating">
        <p><span class="movie-item__header__rating__score">${
  restaurant.city || '-'
}</span></p>
      </div>
    </div>
    <div class="movie-item__content">
    <h3>⭐️${restaurant.rating}</h3>
    <h3 class="movie__title"><a href="/#/detail/${restaurant.id}">${
  restaurant.name || '-'
}</a></h3>
      <p>${restaurant.description || '-'}</p>
     </div>
</div>
`;

const createLikeRestaurantButtonTemplate = () => `
  <button aria-label="like this restaurant" id="likeButton" class="like">
    <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createUnlikeRestaurantButtonTemplate = () => `
  <button aria-label="unlike this restaurant" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
  createRestaurantItemTemplate,
  createRestaurantDetailTemplate,
  createLikeRestaurantButtonTemplate,
  createUnlikeRestaurantButtonTemplate,
};

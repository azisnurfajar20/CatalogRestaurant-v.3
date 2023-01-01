import UrlParser from '../../routes/url-parser';
import TheRestaurantDbSource from '../../data/therestaurantdb-source';
import { createRestaurantDetailTemplate } from '../templates/template-creator';
import LikeButtonPresenter from '../../utils/like-button-presenter';
import FavoriteRestaurantIdb from '../../data/favorite-restaurant-idb';

const Detail = {
  async render() {
    return `
      <div id="movie" class="movie"></div>
      
      <div tabindex="0" class="movie">
        <h3>Restaurant Menu</h3>
        <div class="movie__overview">
          <h3>Foods Menu</h3>
          <p id="food"></p>
        </div>
        <div class="movie__overview">
          <h3>Drink Menu</h3>
          <p id="drink"></p>
        </div>
      </div>

      <div tabindex="0" class="movie">
        <h3>Review Customer</h3>
        <div class="movie__overview">
          <p id="review"></p>
        </div>
      </div>
      
      <div id="likeButtonContainer"></div>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurant = await TheRestaurantDbSource.detailRestaurant(url.id);

    // Data Restaurant
    const restaurantContainer = document.querySelector('#movie');
    restaurantContainer.innerHTML = createRestaurantDetailTemplate(
      restaurant.restaurant,
    );

    // Data Makanan
    const makananContainer = document.querySelector('#food');
    Object.keys(restaurant.restaurant.menus.foods).forEach((index) => {
      makananContainer.innerHTML += `<li>${restaurant.restaurant.menus.foods[index].name}</li>`;
    });

    // Data Minuman
    const minumanContainer = document.querySelector('#drink');
    Object.keys(restaurant.restaurant.menus.drinks).forEach((index) => {
      minumanContainer.innerHTML += `<li>${restaurant.restaurant.menus.drinks[index].name}</li>`;
    });

    const reviewContainer = document.querySelector('#review');
    Object.keys(restaurant.restaurant.customerReviews).forEach((index) => {
      reviewContainer.innerHTML += `
      <article class="post-item">
        <div class="post-item__content" style="margin-bottom: 1em;">
          <h3>${restaurant.restaurant.customerReviews[index].name}</h3>
          <h4>${restaurant.restaurant.customerReviews[index].review}</h4>
          <p class="post-item__description">${restaurant.restaurant.customerReviews[index].date}</p>
        </div>
      </article>
      `;
    });

    LikeButtonPresenter.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      favoriteRestaurants: FavoriteRestaurantIdb,
      restaurant: {
        id: restaurant.restaurant.id,
        name: restaurant.restaurant.name,
        description: restaurant.restaurant.description,
        pictureId: restaurant.restaurant.pictureId,
        rating: restaurant.restaurant.rating,
        city: restaurant.restaurant.city,
      },
    });
  },
};

export default Detail;

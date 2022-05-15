import FavoriteRestaurantIdb from '../../src/scripts/data/favoriterestaurant-idb';

const createLikeButtonPresenterWithRestaurant = async (restaurant) => {
  await LikeButtonPresenter.init({
    likeButtonContainer: document.querySelector('#likeButtonContainer'),
    FavoriteRestaurants: FavoriteRestaurantIdb,
    restaurant,
  });
};

export { createLikeButtonPresenterWithRestaurant };

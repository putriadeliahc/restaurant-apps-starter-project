import CONFIG from '../../globals/config';

const restoranDetail = (restaurant) => `
  <div class="container">
        <div class="restaurant-details">
            <img class="lazyload" src="${CONFIG.BASE_IMAGE_URL + (restaurant?.restaurant.pictureId ?? '')}" alt="Gambar Restoran">
            <div class="info">
                <h1>${restaurant?.restaurant.name}</h1>
                <p><strong>Alamat:</strong>${restaurant?.restaurant.address}</p>
                <p><strong>Kota:</strong> ${restaurant?.restaurant.city}</p>
                <p><strong>Deskripsi:</strong> ${restaurant?.restaurant.description}.</p>
            </div>
        </div>

        <div class="menu">
            <h2>Menu</h2>
            <table>
                <tr>
                    <th>Makanan</th>
                    <th>Minuman</th>
                </tr>
                ${restaurant?.restaurant?.menus?.foods.map((food, index) => `
                <tr>
                    <td>${food.name}</td>
                    <td>${restaurant?.restaurant?.menus?.drinks[index]?.name || ''}</td>
                </tr>
                `).join('')}
            </table>
        </div>

        <div class="reviews">
            <h2>Customer Reviews</h2>
            ${restaurant?.restaurant?.customerReviews
    .map(
      (review) => `
            <div class="review">
                <p><strong>${review.name}</strong> <span class="review-date">${review.date}</span></p>
                <p>${review.review}
                </p>
            </div>
            `,
    )
    .join('')}
        </div>
    </div>
`;
const restaurantListTemplate = (restorant) => `<div class="restoran">
<img class="lazyload" src="${CONFIG.BASE_IMAGE_URL + restorant.pictureId
}"  alt="${restorant.name}">
    <div class="restoran-info">
        <a href="#/detail/${restorant.id}"><h2>${restorant.name
}</a></h2>
       <p>${restorant.description.substring(0, 100)}...</p>
        <p>Kota: ${restorant.city}</p>
        <p><strong>Rating: ${restorant.rating}⭐️</strong></p>
        <a href="#/detail/${restorant.id}" class="btn-detail">Lihat detail</a>        
    </div>
</div>`;

const createLikeButtonTemplate = () => `
  <button aria-label="like this restaurant" id="likeButton" class="like">
     <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createLikedButtonTemplate = () => `
  <button aria-label="unlike this restaurant" id="likeButton" class="liked">
  <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
  restaurantListTemplate,
  restoranDetail,
  createLikeButtonTemplate,
  createLikedButtonTemplate,
};

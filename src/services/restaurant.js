let headers = new Headers();
headers.append("Authorization", "Bearer 34303304-5475-4d63-9352-0d24ed631b37");

export const fetchRestaurantData = (filter) =>
  new Promise((resolve, reject) => {
    fetch(`https://api.sheety.co/bdcbafbc1f4197dda178b9e69f6ccee9/techAlchemyWebTest1/allRestaurants?${filter || undefined}`, {
      method: "GET",
      headers: headers
    })
      .then((res) => res.json())
      .then((json) => resolve(json))
      .catch((e) => {
        reject(e);
      });
  });

export const fetchRestaurantDetails = (id, filter) =>
  new Promise((resolve, reject) => {
    fetch(`https://api.sheety.co/bdcbafbc1f4197dda178b9e69f6ccee9/techAlchemyWebTest1/restaurantDetails/${id}`, {
      method: "GET",
      headers: headers
    })
      .then((res) => res.json())
      .then((json) => resolve(json))
      .catch((e) => {
        reject(e);
      });
  });

export const fetchMenuDetails = () =>
  new Promise((resolve, reject) => {
    fetch(`https://api.sheety.co/bdcbafbc1f4197dda178b9e69f6ccee9/techAlchemyWebTest1/menu`, {
      method: "GET",
      headers: headers
    })
      .then((res) => res.json())
      .then((json) => resolve(json))
      .catch((e) => {
        reject(e);
      });
  });  

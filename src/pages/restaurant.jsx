import React, { useState, useEffect } from "react";
import axios from "axios";

const restaurant = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [rest, setRest] = useState('')
  const [dataFilter] = useState(['title', 'category'])

  // url barck-end api
  const APP_API =
    "https://full-stack-app.com/laravel_restaurant_api/public/api/restaurants";

  // Get restaurant api from url
  const fetchData = async () => {
    await axios.get(APP_API).then((res) => {
      console.log(res.data);
      setRestaurants(res.data.restaurants);
    });
  };

  useEffect(() => {
    fetchData();
  }, []);

  const searchRestaurant =(restaurants)=>{
    return restaurants.filter((item)=>{
      return dataFilter.some((filter)=>{
       return item[filter].indexOf(rest)>-1
      })
    })
  }

  return (
    <div className="content-wrapper">
      <div className="content">
        <div>
          <div className="row">
            <div className="col-lg-12 mt-3">
              <div className="container-fluid">
                <div className="card">
                  <div className="card-body">
                    <input
                      className="form-control"
                      type="text"
                      name="search"
                      value={rest}
                      onChange={(e)=>setRest(e.target.value)}
                      placeholder="Search..."
                    />
                  </div>
                </div>
                <div className="row">
                  {searchRestaurant(restaurants).map((item) => (
                    <div className="col-md-3" key={item.id}>
                      <div className="card">
                        <img
                          className="card-img-top"
                          src={item.image}
                          alt="Card image"
                        />
                        <div className="card-body">
                          <h4 className="card-title">{item.title}</h4>
                          <p className="card-text text-muted">{item.description.substring(0, 70)}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default restaurant;

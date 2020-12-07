import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.yelp.com/v3/businesses',
  headers: {
    Authorization:
      'Bearer IKL9zPIjzRMZf4dmKYECBuyQ3A60VJ3K29Zf3nMjrz2t9E2HqqwCge9-3zntfnAFqZsbEJH1kb4wYsOmt0DEKD4w0BY4IxwunlEJ8neikN2gVY2AqnT0LW9V17q7X3Yx',
  },
});

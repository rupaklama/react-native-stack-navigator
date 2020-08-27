import axios from 'axios';

// making instance of axios
export default axios.create({
  baseURL: 'https://api.yelp.com/v3/businesses',
  headers: {
    Authorization:
      'BearerH8_NXGYsuQlgLkjDf56AfwTY4o9uXRBRgM0yhjo-Cp7_C2eyUgDpzIWEaM8Ho7zrcS3XIt0jAa4IvgblCT00vrUgm_2w2hFwZRqmtVPCGXqXZZM2G1OMF1nrLKZGX3Yx',
  },
});

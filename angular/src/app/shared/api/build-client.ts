import axios from 'axios';

export default (req: any) => {
    if (typeof window == 'undefined') {
      // server
      return axios.create({
        baseURL: 'http://ingress-nginx.ingress-nginx.svc.cluster.local/api/v1/users/currentuser',
        headers: req.headers
      });
    } else {
      return axios.create({
        baseURL: '/'
      })
    }
  };
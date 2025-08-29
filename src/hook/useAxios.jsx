import axios from 'axios';

const instance = axios.create({
   
    baseURL: 'https://backend-wine-chi-49.vercel.app',


    // baseURL: 'https://muskan-enterprise-backend.vercel.app---',
});


const useAxios = () => {
    return instance;
};

export default useAxios;
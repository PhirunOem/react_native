import Config from 'react-native-config';

const api_url = Config.API_URL;
const create_product_route = `${api_url}api/v1/admin/products`;
const retrieve_product_route = `${api_url}api/v1/products`;
export {create_product_route, retrieve_product_route};

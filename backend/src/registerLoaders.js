import * as UserLoader from './modules/user/UserLoader';
import * as ProductLoader from './modules/product/ProductLoader';

export default () => ({
  UserLoader: UserLoader.getLoader(),
  ProductLoader: ProductLoader.getLoader(),
})

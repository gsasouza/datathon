import jwt from 'jsonwebtoken';

import User from './modules/user/UserModel';
import Product from './modules/product/ProductModel';
const jwtSecret = 'S@C@TH0N';

export async function getUser(token) {
  if (!token) return { user: null };

  try {
    const decodedToken = jwt.verify(token.substring(4), jwtSecret);
    const user = await User.findOne({ _id: decodedToken.id });
    return {
      user,
    };
  } catch (err) {
    return { user: null };
  }
}

export async function getProduct(token) {
  if (!token) return { product: null };

  try {
    const decodedToken = jwt.verify(token.substring(4), jwtSecret);
    const product = await Product.findOne({ _id: decodedToken.id });
    return {
      product,
    };
  } catch (err) {
    return { product: null };
  }
}

export function generateToken(user) {
  return `JWT ${jwt.sign({ id: user._id }, jwtSecret)}`;
}

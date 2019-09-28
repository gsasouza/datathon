import DataLoader from 'dataloader';
import { connectionFromMongoCursor, mongooseLoader } from '@entria/graphql-mongoose-loader';

import ProductModel from './ProductModel';

export default class Product {

  constructor(data) {
    this.id = data.id;
    this._id = data._id;
    this.name = data.name;
    this.createdby = data.createdby;
    this.quantity = data.quantity;
    this.price = data.price;
  }
}

export const getLoader = () => new DataLoader(ids => mongooseLoader(ProductModel, ids));

const viewerCanSee = (context, data) => {
  // Anyone can see another user
  return true;
};

export const load = async (context, id) => {
  if (!id) {
    return null;
  }

  let data;
  try {
    data = await context.dataloaders.ProductLoader.load(id);
  } catch (err) {
    return null;
  }
  return viewerCanSee(context, data) ? new Product(data, context) : null;
};

export const clearCache = ({ dataloaders }, id) => {
  return dataloaders.ProductLoader.clear(id.toString());
};

export const loadProducts = async (context, args) => {
  const isOwner = args.isOwner ? { createdby: context.user.id } : {};
  const where = args.search ? { name: { $regex: new RegExp(`^${args.search}`, 'ig') }, ...isOwner } : {};
  const products = ProductModel.find(where, { _id: 1 }).sort({ createdAt: -1 });

  return connectionFromMongoCursor({
    cursor: products,
    context,
    args,
    loader: load,
  });
};





import DataLoader from 'dataloader';
import { connectionFromMongoCursor, mongooseLoader } from '@entria/graphql-mongoose-loader';

import UserModel from './UserModel';

export default class User {

  constructor(data) {
    this.id = data.id;
    this._id = data._id;
    this.name = data.name;
    this.university = data.university;
    this.isOwner = data.isOwner;
    this.email = data.email;
  }
}

export const getLoader = () => new DataLoader(ids => mongooseLoader(UserModel, ids));

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
    data = await context.dataloaders.UserLoader.load(id);
  } catch (err) {
    return null;
  }
  return viewerCanSee(context, data) ? new User(data, context) : null;
};

export const clearCache = ({ dataloaders }, id) => {
  return dataloaders.UserLoader.clear(id.toString());
};

export const loadUsers = async (context, args) => {
  const where = args.search ? { name: { $regex: new RegExp(`^${args.search}`, 'ig') } } : {};
  const users = UserModel.find(where, { _id: 1 }).sort({ createdAt: -1 });

  return connectionFromMongoCursor({
    cursor: users,
    context,
    args,
    loader: load,
  });
};

import UserSchema from "./UserSchema.js";

//create user
export const createUser = (newUserObj) => {
  return UserSchema(newUserObj).save();
};
//read user // filter must be an objece{}
export const getSingleUser = (filter) => {
  return UserSchema.find(filter);
};
//update user
export const getUserAndUpdate = (filter, updateObj) => {
  return UserSchema.findOneAndUpdate(filter, updateObj);
};
//delete user
export const deleteUserByID = (_id) => {
  return UserSchema.findByIdAndDelete(_id);
};

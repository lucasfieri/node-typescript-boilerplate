import { User } from '../../models/User';

export const getAllUsers = async (id: number) => {
    return await User.query().findById(id);
}

export const addUser = async ({...user}) => {
    return await User.query().insertAndFetch({...user});
}
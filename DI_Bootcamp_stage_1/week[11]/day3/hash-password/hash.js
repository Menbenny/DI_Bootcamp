import bcrypt from "bcrypt";
const saltRounds = 11


// ! Parameter/data must be a string 
// ? If password is a number - concat with empty string 
//  i.e const hash = bcrypt.hashSync(password //! + "")

export const hashMyPassword = (password) => {
    const salt = bcrypt.genSaltSync(saltRounds);
    const hash = bcrypt.hashSync(password, salt);
    return hash
};



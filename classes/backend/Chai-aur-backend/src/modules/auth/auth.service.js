import ApiError from "../../common/utils/api-error.js"
import User from "./auth.model.js"

const register = async ({ name, email, password, role }) => {

    const existing = await User.findOne({ email });
    if (existing) throw ApiError.conflict("Email already existis");

    // create hash

    const user = await User.create({
        name,
        email,
        password,
        role,
        verificationToken
    })

    //send an email to user with token

    const userObj = user.toObject();
    delete userObj.password
    delete userObj.verificationToken

    return userObj;


}

export { register };
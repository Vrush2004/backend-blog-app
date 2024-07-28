import User from '../models/User.js';

export const registerUser = async (req, res, next) => {
    try {
        const { name, email, password } = req.body;

        // Check whether the user exists or not
        let user = await User.findOne({ email });

        if (user) {
            throw new Error('User have already registered');
        }

        // Creating a new user
        user = await User.create({
            name, email, password,
        });

        return res.status(201).json({
            _id: user._id,
            avatar: user.avatar,
            name: user.name,
            email: user.email,
            verified: user.verified,
            admin: user.admin,
            token: await user.generateJWT(),
        });
    } catch (error) {
        next(error);
    }
};

export const loginUser = async (req, res, next) => {
    try{
        const {email, password} = req.body;

        let user = await User.findOne({email});

        if (!user){
            throw new Error("Email not found");
        }

        if(await user.comparePassword(password)) {
            return res.status(201).json({
                _id: user._id,
                avatar: user.avatar,
                name: user.name,
                email: user.email,
                verified: user.verified,
                admin: user.admin,
                token: await user.generateJWT(),
            });
        }
        else{
            throw new Error("Invalid email or password");
        }

    }catch (error) {
        next(error);
    }
}
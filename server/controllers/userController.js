import db from './../models';

const userController = {};

userController.post = (req, res, next) => {
    const { name, email, school, programme, year, about } = req.body;

    // todo: Validation

    const user = new db.User({
        name,
        email,
        school,
        programme,
        year,
        about,
        //Lägg till rekommendation
    });

    user.save().then((newUser) => {
        res.writeHead(302, {
            'Location': '/thankYou.html'
        });
        res.end();
    }).catch((err) => {
        res.status(500).json({
            message: err,
        });
    });
};

export default userController;
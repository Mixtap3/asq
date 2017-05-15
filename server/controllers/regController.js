const regController = {};

regController.get = (req, res) => {
    res.json({
       message: 'working'
    });
};

export default regController;
import express from 'express';

// Controller imports
import userController from './controllers/userController';

const routes = express();

routes.get('/', (req, res) => {
	res.json({
		"message":"success"
	});
});



routes.post('/signup', userController.post);

export default routes;
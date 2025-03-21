const express = require('express');
const PointsController = require('../controllers/pointsController');
const PointsModel = require('../models/pointsModel');

const router = express.Router();
const pointsModel = new PointsModel();
const pointsController = new PointsController(pointsModel);

// Middleware to check userId
const checkUserId = (req, res, next) => {
    const userId = req.params.userId;
    if (userId !== '123') {
        return res.status(403).json({ error: 'Forbidden: Invalid userId' });
    }
    next();
};

router.get('/points/:userId', checkUserId, pointsController.getPoints.bind(pointsController));
router.post('/points/:userId/use', checkUserId, pointsController.usePoints.bind(pointsController));
router.post('/points/:userId/add', checkUserId, pointsController.addPoints.bind(pointsController));
router.get('/points/all', pointsController.getAllPoints.bind(pointsController));

module.exports = router;
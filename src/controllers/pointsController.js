class PointsController {
    constructor(pointsModel) {
        this.pointsModel = pointsModel;
    }

    async getPoints(req, res) {
        const userId = req.params.userId;
        try {
            const points = await this.pointsModel.getPoints(userId);
            res.status(200).json({ userId, points });
        } catch (error) {
            res.status(500).json({ error: 'Error retrieving points' });
        }
    }

    async usePoints(req, res) {
        const userId = req.params.userId;
        const { pointsToUse } = req.body;
        try {
            const updatedPoints = await this.pointsModel.usePoints(userId, pointsToUse);
            res.status(200).json({ userId, updatedPoints });
        } catch (error) {
            res.status(500).json({ error: 'Error using points' });
        }
    }

    async addPoints(req, res) {
        const userId = req.params.userId;
        const { pointsToAdd } = req.body;
        try {
            const updatedPoints = await this.pointsModel.addPoints(userId, pointsToAdd);
            res.status(200).json({ userId, updatedPoints });
        } catch (error) {
            res.status(500).json({ error: 'Error adding points' });
        }
    }

    async getAllPoints(req, res) {
        try {
            const allPoints = await this.pointsModel.getAllPoints();
            res.status(200).json(allPoints);
        } catch (error) {
            res.status(500).json({ error: 'Error retrieving all points' });
        }
    }
}

module.exports = PointsController;
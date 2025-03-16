class PointsModel {
    constructor() {
        this.users = new Map(); // Using a Map to store user points
    }

    // Method to get points of a specific user
    getPoints(userId) {
        if (!this.users.has(userId)) {
            this.users.set(userId, 100); // Initialize with 100 points if user not found
        }
        return this.users.get(userId);
    }

    // Method to add points to a specific user
    addPoints(userId, points) {
        const currentPoints = this.getPoints(userId);
        this.users.set(userId, currentPoints + points);
        return this.users.get(userId);
    }

    // Method to use (deduct) points from a specific user
    usePoints(userId, points) {
        const currentPoints = this.getPoints(userId);
        if (currentPoints >= points) {
            this.users.set(userId, currentPoints - points);
            return this.users.get(userId);
        }
        throw new Error('Insufficient points');
    }

    // Method to get all users and their points
    getAllPoints() {
        return Array.from(this.users.entries()).map(([userId, points]) => ({ userId, points }));
    }
}

module.exports = PointsModel;
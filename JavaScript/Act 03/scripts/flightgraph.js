export class Graph {
    constructor() {
        this.routes = {};
    }

    addRoute(origin, destination) {
        if (!this.routes[origin]) this.routes[origin] = [];
        this.routes[origin].push(destination);
    }

    getRoutes(origin) {
        return this.routes[origin] || [];
    }
}

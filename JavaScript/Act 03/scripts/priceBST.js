export class BSTNode {
    constructor(key, flight) {
        this.key = key;
        this.flight = flight;
        this.left = null;
        this.right = null;
    }
}

export class BST {
    constructor() {
        this.root = null;
    }

    insert(key, flight) {
        const newNode = new BSTNode(key, flight);
        if (!this.root) {
            this.root = newNode;
        } else {
            this.insertNode(this.root, newNode);
        }
    }

    insertNode(node, newNode) {
        if (newNode.key < node.key) {
            if (!node.left) {
                node.left = newNode;
            } else {
                this.insertNode(node.left, newNode);
            }
        } else {
            if (!node.right) {
                node.right = newNode;
            } else {
                this.insertNode(node.right, newNode);
            }
        }
    }

    searchBelow(threshold, node = this.root, results = []) {
        if (!node) return results;
        if (node.key <= threshold) {
            results.push(node.flight);
            this.searchBelow(threshold, node.left, results);
            this.searchBelow(threshold, node.right, results);
        } else {
            this.searchBelow(threshold, node.left, results);
        }
        return results;
    }
}

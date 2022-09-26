class Dictionary {
    constructor() {
        this.items = {}
    }

    has(key) {
        return this.items.hasOwnProperty(key)
    }

    set(key, value) {
        this.items[key] = value
    }

    remove(key) {
        if (this.has(key)) {
            delete this.items[key]
            return true
        }

        return false
    }

    get(key) {
        return this.has(key) ? this.items[key] : undefined
    }

    values() {
        const values = []
        for (let key in this.items) {
            if (this.has(key)) {
                values.push(this.items[key])
            }
        }
        return values
    }

    size() {
        return Object.keys(this.items).length
    }

    keys() {
        const keys = []
        for (let key in this.items) {
            keys.push(key)
        }
        return keys

        // La forma corta de hacer esto y abusando de las bondades de javascript
        // es así:
        // return Object.keys(this.items)
    }

    getItems() {
        return this.items
    }
}

function Storage() {
    this.dataStore = {
        age : 27
    }
    Storage.prototype.put = function (key, data) {
        this.dataStore[key] = data
    }
    Storage.prototype.getData = function (key) {
        return this.dataStore[key]
    }
}

const a_storage = new Storage()

a_storage.put('etcInfo', {
    name : 'jyp',
    price : 2000
})
console.log(a_storage.getData('etcInfo'))

///////////////////////////////////////////////

function RemoveStorage() {
    Storage.call(this)
}
RemoveStorage.prototype = Object.create(Storage.prototype)
RemoveStorage.prototype.removeAll = function () {
    this.dataStore = {}
}

const ar_storage = new RemoveStorage()

ar_storage.put('name', {
    firstName : 'jinyoung',
    lastName : 'park'
})
console.log(ar_storage.getData('name'))
ar_storage.removeAll()
console.log(ar_storage.getData('name'))
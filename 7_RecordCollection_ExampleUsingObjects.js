var collection = {
    "2548": {
        "album": "Slippery when wet",
        "artist": "Bon Jovi",
        "tracks": ["Let it Rock", "You Give love a Bad Name"]
    },

    "2468": {
        "album": "1999",
        "artist": "Prince",
        "tracks": ["1999", "Little Red Corvette"]
    },

    "1245": {
        "artist": "Robert Palmer",
        "tracks": []
    },

    "5439": {
        "album": "ABBA Gold"
    }
};

var copyOfCollection = JSON.parse(JSON.stringify(collection));

function updateRecord(id, property, value) {
    if (value === "") {
        delete collection[id][property];
    } else if (property === "tracks") {
        collection[id][property] = collection[id][property] || [];
        collection[id][property].push(value);
    } else {
        collection[id][property] = value;
    }
     return collection;
}

updateRecord(2468, "tracks", "TEST");
console.log(updateRecord(5439, "artist", "ABBA"));

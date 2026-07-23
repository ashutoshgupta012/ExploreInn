const path = require("path");
require("dotenv").config({ path: path.resolve(__dirname, "../.env") });

const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listing.js");

const mbxGeocoding = require("@mapbox/mapbox-sdk/services/geocoding");

const mapToken = process.env.MAP_TOKEN;

const geocodingClient = mbxGeocoding({
    accessToken: mapToken,
});

const MONGO_URL = "mongodb://127.0.0.1:27017/Wonderlust";

async function main() {
    await mongoose.connect(MONGO_URL);
    console.log("Connected to DB");
}

main()
    .then(initDB)
    .catch(console.log);

async function initDB() {

    await Listing.deleteMany({});

    for (let obj of initData.data) {

        let response = await geocodingClient
            .forwardGeocode({
                query: `${obj.location}, ${obj.country}`,
                limit: 1,
            })
            .send();
            console.log(obj.location);
console.log(response.body.features);

        obj.owner = "6a4fb23b768d78e770e44e51";

        // Default category
        obj.category = "Trending";

        if (response.body.features.length > 0) {
            obj.geometry = response.body.features[0].geometry;
        } else {
            console.log(`Location not found: ${obj.location}`);

            obj.geometry = {
                type: "Point",
                coordinates: [0, 0],
            };
        }

        await Listing.create(obj);
    }

    console.log("Data initialized Successfully!");

    mongoose.connection.close();
}
const express=require("express");
const router = express.Router();
const wrapAsync =require("../utils/wrapAsync.js");
const Listing =require("../models/listing.js");
const {isLoggedIn, isOwner,validateListing} =require("../middelware.js");
const listingController = require("../controllers/listing.js");
const listing = require("../models/listing.js");

const multer = require ("multer");
const {storage} = require ("../cloudconfig.js");
const upload =  multer({storage});

router

.route("/")
.get(wrapAsync(listingController.index))
.post(isLoggedIn,upload.single('listing[image]'),validateListing, wrapAsync(listingController.create));

//New and create route
router.get("/new",isLoggedIn,listingController.renderNewForm);

router.get("/search", async (req, res) => {
    const { search } = req.query;

    const listings = await Listing.find({
        $or: [
            { title: { $regex: search, $options: "i" } },
            { location: { $regex: search, $options: "i" } },
            { country: { $regex: search, $options: "i" } }
        ]
    });
if (listings.length === 0) {
    req.flash("error", `No listings found for "${search}"`);
    return res.redirect("/listings");
}

    res.render("listings/index", {
        allListings: listings,
    });
});

router.get("/category/:category", async (req, res) => {

    const { category } = req.params;

    const listings = await Listing.find({
        category: category
    });

    res.render("listings/index", {
        allListings: listings,
    });

});

router.route("/:id")
.get(wrapAsync(listingController.showListing))
.put(isLoggedIn,isOwner,upload.single('listing[image]'),validateListing,wrapAsync(listingController.updateListing))
.delete(isLoggedIn,isOwner,wrapAsync(listingController.destroyListing));



//edit route
router.get("/:id/edit",isLoggedIn,isOwner,wrapAsync(listingController.edit));




module.exports=router;

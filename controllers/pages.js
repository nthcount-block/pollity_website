exports.getIndex = (req, res, next) => {
    res.render("home", {
        pageTitle: "Shop",
        path: "/",
    });
};
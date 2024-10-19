exports.getIndex = (req, res, next) => {
    res.render("home", {
        pageTitle: "Home Page",
        path: "/",
    });
};
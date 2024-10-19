exports.getIndex = (req, res, next) => {
    res.render("home", {
        pageTitle: "Home Page",
        path: "/",
    });
};

exports.getVoter = (req, res, next) => {
    res.render("home", {
        pageTitle: "Voters Page",
        path: "/",
    });
}


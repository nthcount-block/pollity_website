exports.getIndex = (req, res, next) => {
    res.render("home", {
        pageTitle: "Home Page",
        path: "/",
    });
};

exports.getVoter = (req, res, next) => {
    res.render("voters", {
        pageTitle: "Voters Page",
        path: "/",
    });
}

exports.getAdmin = (req, res, next) => {
    res.render("admins", {
        pageTitle: "Admins Page",
        path: "/",
    });
}

exports.getPrivacy = (req, res, next) => {
    res.render("privacypolicy", {
        pageTitle: "Privacy Policy",
        path: "/",
    });
}


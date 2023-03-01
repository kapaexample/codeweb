let gethomePage = (req, res) => {
    return res.render('homePage');
}
let getaboutPage = (req, res) => {
    return res.render('aboutPage');
}

module.exports = {
    gethomePage: gethomePage,
    getaboutPage: getaboutPage
}
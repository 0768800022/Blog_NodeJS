
class NewsController {
    
    // [GET] /news
    index(req, res) {
        res.render('news');
    }

}
//khá giống với export của react
// export default NewsController
module.exports = new NewsController;

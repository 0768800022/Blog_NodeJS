
class NewsController {
    
    // [GET] /news
    index(req, res) {
        res.render('news');
    }
    // [GET] /news/:slug
    show(req, res){
        res.send('NEWS DETAIL');
    }

}
//khá giống với export của react
// export default NewsController
module.exports = new NewsController;

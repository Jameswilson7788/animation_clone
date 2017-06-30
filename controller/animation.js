const List = require('../models/list');
module.exports = {
    list: function (req, res, next) {
        List.find(function (err, list) {
            if (err) return err;
            res.render('animation/list', {
                datas: list
            });
        })

    },
    play: function (req, res) {
        List.findOne({
            name: req.params.name
        }, function (err, list) {
            res.render('animation/media-player', {
                data: list,
                no: req.params.no - 1
            })
        })
    },
    uploadList: function (req, res, next) {
        let list = new List({
            name: req.body.name,
            img_url: req.body.img_url,
            total: req.body.total
        });
        list.save(function (err, list) {
            if (err) {
                req.flash('msg', '上傳失敗');
                return next(err);
            }
            console.log('上傳了' + list.name);
            req.flash('msg', '上傳成功:上傳了' + list.name);
            res.redirect('/animation');
        });
    },
    showUploadList: function (req, res) {
        res.render('animation/write', {
            message: req.flash('msg')
        });
    },
    showUpdate: function (req, res) {
        let name = req.params.name;
        List.findOne({
            name: name
        }, function (err, list) {
            if (err) return handleError(err);
            if (list) {
                res.render('animation/animation-write', {
                    data: list,
                    message: req.flash('msg')
                });
            } else {
                res.render('animation/animation-write', {
                    data: {
                        name: undefined,
                        message: req.flash('msg')
                    }
                })
            }
        })
    },
    update: function (req, res, next) {
        let name = req.params.name;
        List.findOne({
            name: name
        }, function (err, list) {
            if (err) return next(err);
            list.source_url = req.body.source_url;
            list.save(function (err) {
                if (err) return next(err);
                req.flash('msg', '上傳成功')
            })
        })
    }
}
//add web server
const express = require('express');
const router = express.Router();
//add comments controller
const commentsCtrl = require('../controllers/comments');
//add auth middleware
const auth = require('../middleware/auth');
//add multer middleware
const multer = require('../middleware/multer-config');

//add routes
router.post('/', auth, multer, commentsCtrl.createComment);
router.get('/', auth, commentsCtrl.getAllComments);
router.get('/:id', auth, commentsCtrl.getOneComment);
router.put('/:id', auth, multer, commentsCtrl.modifyComment);
router.delete('/:id', auth, commentsCtrl.deleteComment);

module.exports = router;
const express= require('express');

const contentControllers=require('../Controllers/contentControllers');



const router=express.Router();

router.route('/').get(contentControllers.Contents);
router.route('/:id').get(contentControllers.Content);
router.route('/').post(contentControllers.createContent);
router.route('/:id').put(contentControllers.editContent);
router.route('/:id').delete(contentControllers.deleteContent);

module.exports = router;
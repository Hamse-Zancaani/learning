const express= require('express');

const courseControllers=require('../Controllers/courseControllers');



const router=express.Router();

router.route('/').get(courseControllers.Courses);
router.route('/:id').get(courseControllers.Course);
router.route('/').post(courseControllers.createCourse);
router.route('/:id').put(courseControllers.editCourse);
router.route('/:id').delete(courseControllers.deleteCourse);

module.exports = router;
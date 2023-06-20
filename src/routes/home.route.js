const {Router} = require("express");
const {
  home,
  about,
  birds,
  testimonial,
  contact
} = require("../controllers/home.controller");

const router = Router();

router.get('/home', home);
router.get('/about', about);
router.get('/birds', birds);
router.get('/testimonial', testimonial);
router.get('/contact', contact)


module.exports = router;
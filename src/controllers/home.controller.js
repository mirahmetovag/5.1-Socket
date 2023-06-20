const home = async (req,res) => {
    res.render('home');
}

const about = async(req,res) =>{
    res.render('about')
}

const birds = async(req,res) => {
    res.render('birds')
}

const testimonial = async(req,res) => {
    res.render('testimonial')
}

const contact = async(req,res) => {
    res.render('contact')
}

module.exports = {
    home,
    about,
    birds,
    testimonial,
    contact
}
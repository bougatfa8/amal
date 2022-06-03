module.exports = {
    signUp: function(req, res){
        res.render('signup.ejs')
    },

    addPost: (req, res)=>{
        res.render('addpost.ejs')
    },
    addPost2: (req, res)=>{
        res.render('addpost2.ejs')
    },
  
}
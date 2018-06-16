const express=require('express');
const hbs=require('hbs');
var app=express();
hbs.registerPartials(__dirname+'/views/partials');
app.set('view engine','hbs');

app.use((req,res,next)=>{
  var now=new Date().toString();
  console.log(`${now}:${req.method} ${req.url}`)
  next();
});
// app.use((req,res,next)=>{
//   res.render('maintenance.hbs');
// });
app.use(express.static(__dirname+'/public'));
hbs.registerHelper('getCurrentYear',()=>{
  return new Date().getFullYear();
});
app.get('/',(req,res)=>{
  //res.send('<h1>hello express</h1>');
  res.send({
    name:'pooja',
    likes:[
      'coding',
      'node'
    ]
  })
});
app.get('/about',(req,res)=>{
  res.render('about.hbs',{
    pageTitle:'about page'
  });
});

app.get('/bad',(req,res)=>{
  res.send(
    {
      errorMessage:'error occured'
    }
  )
})
app.listen(3000,()=>{
  console.log('server is up on port 3000');
});

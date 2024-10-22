const express = require('express');
const app = express();
const port = 8080;
app.set('view engine', 'ejs');

function getGreeting() {
    const currentHour = new Date().getHours();  
    if (currentHour >= 5 && currentHour < 12) {
      return 'Good morning';
    } else if (currentHour >= 12 && currentHour < 17) {
      return 'Good afternoon';
    } else if (currentHour >= 17 && currentHour < 21) {
      return 'Good evening';
    } else {
      return 'Good night';
    }
  }
app.get('/welcome', (req, res) => {
  const userName = 'John'; 
  const greeting = getGreeting();
  res.render('welcome', { name: userName , greeting: greeting});
});


app.listen(port, (err) => {
    if(err){
        console.log(err);
    }
    else{
  console.log(`Server running at ${port}`);
    }
});

import app from './app';

let port = process.env.PORT || 3333;

app.listen(port, () => {
  console.log('App running at port ' + port + '\n');
});
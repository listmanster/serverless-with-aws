module.exports.handler = (event, ctx, done) => {
  
  const todo = [
    {id: 2, name: 'single', status: 'single'}
  ];

  console.log(JSON.stringify(event, null, 2));

  done(null, {
    statusCode: 200,
    body: JSON.stringify({data: todo})
  })
}

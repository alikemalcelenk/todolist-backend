const mongoose = require('mongoose');

module.exports = () => {
  mongoose.connect(
    'mongodb+srv://admin:admin1122@maincluster.itgrs.mongodb.net/Todo?retryWrites=true&w=majority',
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  );

  mongoose.connection.on('open', () => {
    console.log('MongoDB: Connected');
  });

  mongoose.connection.on('error', (err) => {
    console.log('MongoDB: Error', err);
  });
};

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var characterSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  weight: {
    type: String,
    required: true
  },
  hair_color: {
    type: String,
    required: true
  },
  home_world: {
    type: String,
    required: true
  }
}, { collection: 'Characters' });

module.exports = mongoose.model('Character', characterSchema);
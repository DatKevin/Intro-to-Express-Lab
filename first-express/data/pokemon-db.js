 const pokemon = [
   {name: 'Toxtricity', favorite: true},
   {name: 'Boltund', favorite: true},
   {name: 'Cinderace', favorite: true},
   {name: 'Skwovet', favorite:false}
 ];
 
 module.exports = {
   getAll: function() {
     return pokemon;
   }
 };

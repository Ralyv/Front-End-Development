
/*13. Използвайки зад.12, console.log-нете всички свойства и функции на вече създадения обект student.*/

var student = {
 				name: 'Peter',
 				age: 31,
 				experience: 11,
 				score: 5.25,
 				learning: function() { return 'Mathematics' },
 				entertainment: function() { return 'Disco' }
 }


for (var prop in student){
       console.log(prop + ": " + student[prop]);
}
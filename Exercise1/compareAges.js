function User(fname, age) {
  this.fname = fname;
  this.age = age;
  this.compare = function(user) {
    if (this.age > user.age)
      alert(this.fname + " is older than " + user.fname);
    else if (user.age > this.age)
      alert(user.fname + " is older than " + this.fname);
    else
      alert("Mary and John are of equal ages.");
  }
}

var user1 = new User("Mary", 20);
var user2 = new User("John", 50);
user1.compare(user2);
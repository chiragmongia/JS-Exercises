function User(fname, age) {
    this.fname = fname;
    this.age = age;
    this.compare = function(user) {
        if (this.age > user.age)
            alert(this.fname + " is older than " + user.fname);
        else
            alert(user.fname + " is older than " + this.fname);
    }
}

var user1 = new User("Mary", 20);
var user2 = new User("John", 50);
user1.compare(user2); 
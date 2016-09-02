var users = [];

exports.getUsers = function(callback){
  process.nextTick(function(){
    callback(null,users);
  });
};

exports.getUser = function(id, callback){
  process.nextTick(function(){
    for (var i = 0; i < users.length; i++) {
      if(users[i].id === id){
        return callback(null, users[i]);
      }
    }

    callback();
  })
};

exports.addUser = function(user, callback){
  if(!user.name){
    return callback(new Error("missing user name"));
  }

  var id = (users.length + 1).toString();

  user.id = id;
  users.push(user);

  callback(null,user);
};

var assert = require('assert'),
    app = require('../app.js'),
    request = require('supertest');

describe('Basic Tests ', function(){
  var user;
  //try to get users and should get an empty listen
  it('get users list',function(done){
    request(app)
      .get('/users')
      .expect(200)
      .end(function(err,res){
        if(err){
          return done(err);
        }
          var result = res.body;

          assert.equal(result.success,true);

          done();

      });
  });

  //add an user and it should return the newly created user
  it('should add an user',function(done){
    request(app)
      .post('/users')
      .send({name:'matt'})
      .expect(200)
      .end(function(err,res){
        if(err){
          return done(err);
        }

        var result = res.body;

        assert.equal(result.user.name,'matt');
        assert(result.user.id>0);

        done();
      })
  });
  //add another user
  it('should add an user',function(done){
    request(app)
      .post('/users')
      .send({name:'jeff'})
      .expect(200)
      .end(function(err,res){
        if(err){
          return done(err);
        }

        var result = res.body;

        assert.equal(result.user.name,'jeff');
        assert(result.user.id>0);
        user = result.user;
        done();
      })
  });
  //get users list and should return two items
  it('get users list',function(done){
    request(app)
      .get('/users')
      .expect(200)
      .end(function(err,res){
        if(err){
          return done(err);
        }
          var result = res.body;

          assert.equal(result.success,true);
          assert.equal(result.users.length,2)
          done();

      });
  });
  //get second user
  it('get second user',function(done){
    var id = user.id;
    request(app)
      .get('/users/'+id)
      .expect(200)
      .end(function(err,res){
        if(err){
          return done(err);
        }
          var resultUser = res.body.user;
          assert.equal(resultUser.name,user.name);
          assert.equal(resultUser.id,user.id);
          done();
      })
  })
});

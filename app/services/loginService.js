angular.module('loginService', [])

// Create Invoice Factory object
.factory('Login', function($http){

	var loginFactory = {};

// Create post factory to post data to api
	loginFactory.create = function(loginData){

		return	$http.post('/api/login',loginData)
	}
	return	loginFactory;

})


.factory('Auth', function(){
var user;

return{
    setUser : function(aUser){
        user = aUser;
    },
    isLoggedIn : function(){
        return(user)? user : false;
    }
  }
});

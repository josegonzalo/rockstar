 var config = {
    apiKey: "AIzaSyC18Kto8bLcOAxPbidWmdpSx4Cp1DUXcuk",
    authDomain: "rockstar-db66c.firebaseapp.com",
    databaseURL: "https://rockstar-db66c.firebaseio.com",
    projectId: "rockstar-db66c",
    storageBucket: "rockstar-db66c.appspot.com",
    messagingSenderId: "472309448113"
  };
  firebase.initializeApp(config);
  
angular.module('starter.controllers', [])

.controller("registro", function($scope,$state){

	$scope.user = {}

	$scope.validar = function(x){

		firebase.auth().signOut().then(function() {
			// Sign-out successful.
		}).catch(function(error) {
			// An error happened.
		});

		$scope.user = x;

		console.log($scope.user)

		firebase.auth().createUserWithEmailAndPassword($scope.user.email, $scope.user.password).then(function(data){
			firebase.database().ref("/usuario" + data.user.uid).set({
				uid: data.user.uid,
				name: $scope.user.name,
				email: $scope.user.email
			})
			$state.go("login")
		}).catch(function(error) {
		// Handle Errors here.
		var errorCode = error.code;
		var errorMessage = error.message;
		console.log(errorMessage)
	});
	}
})

/*controlador del logi*/
.controller("login", function($scope,$state){

	$scope.user = {}

	$scope.mericon = function(y){

		firebase.auth().signOut().then(function() {
			// Sign-out successful.
		}).catch(function(error) {
			// An error happened.
		});

		$scope.user = y;

		firebase.auth().signInWithEmailAndPassword($scope.user.nameuser, $scope.user.password).then(function(data){
		
			$state.go("principal")

		}).catch(function(error) {
			// Handle Errors here.
		var errorCode = error.code;
		var errorMessage = error.message;
  			// ...
  		});
	}
	/*recuperacion de la contraseña*/
	$scope.recovery = function(){

		$scope.cre = "";

		iziToast.question({
		    timeout: 20000,
		    close: false,
		    overlay: false,
		    displayMode: 'once',
		    id: 'question',
		    zindex: 999,
		    message: 'Ingresa tu correo',
		    position: 'center',
		    inputs: [
				['<input type="email">', function (instance, toast, input, e) {
		 
		            instance.hide({ transitionOut: 'fadeOut' }, toast, 'input');
		            console.log($scope.cre)
		 
		        }, true]
		    ],
		    buttons: [
		        
		        ['<button>Eviar</button>', function (instance, toast, button, e, inputs) {
		 
		            instance.hide({ transitionOut: 'fadeOut' }, toast, 'button');
		        }],
		    ],
		    onClosing: function(instance, toast, closedBy){
		        console.info('Closing | closedBy: ' + closedBy);
				iziToast.success({
				title: 'Enviado',
				message: 'Verifica en tu correo electronico',
			});

				console.log(button)
				console.log(e)
				console.log(inputs)
				console.log()
				console.log()

			/*if(){

				}else{

				}
*/
		    },
		    onClosed: function(instance, toast, closedBy){
		        console.info('Closed | closedBy: ' + closedBy);
		    }
		});
		
	}
})
/*controlador de la pagina principal*/
.controller("principal", function($scope){
	
	$scope.user = {}

	$scope.Home = function(z){
		
	$scope.user = z;
	}
})

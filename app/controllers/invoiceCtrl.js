// Posting data to api 
angular.module('invoiceCtrl', ['taskService'])

// newInvoiceCtrl

.controller('invoiceController',  function(Task){

var vm = this;


Task.all()
.success(function(data){

    //scope.submit = function(formData) {
vm.invoice = data;
})

});

// // 	console.log(formData);
// //     $http
// //         .post('/api/new-invoice', formData)
// //         .success(function(data){

        	
// //             //what to do here
// //         })
// //         .error(function(data){
// //             console.log('Error: ' + data);
// //         });
// // };

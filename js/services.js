'use strict';

/* Services */
/* Se aplica el uso de servicios*/
var carAppServices = angular.module('carAppServices', ['ngResource']); //<---- Se agrega ng-resoruce para poder usar la libreria interna de angular

//Se declara el servicio Car! con una sola propiedad
carAppServices.factory('Car', ['$resource',
  function($resource){
    return $resource('https://github.com/klarv2/CarsAPP-AngularJS/blob/master/db.json/:carId', {}, {
      query: {method:'GET', params:{carId:'cars'}, isArray:true}
    });
  }]);

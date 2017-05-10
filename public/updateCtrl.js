
        app.controller('updateCtrl', function($scope, $http) {
             $scope.myFunc1 = function() {
                alert("do you want to update?");
                var name = $scope.name;
                var email = $scope.email;
                var mob = $scope.mob;
                var city = $scope.city;
                var pincode = $scope.pincode;
                var req = {
                    method: 'POST',
                    url: 'http://localhost:3000/update',
                    headers: {
                        'Content-Type': 'Application/json'
                    },
                    data: {
                        name: name,
                        type: type,
                        cost: cost,
                        supplier: supplier,
                        avail: avail
                    }
                }

                $http(req)
                    .then(function(response) {
                        $scope.na = response.data;
                                      alert($scope.na);

                    });
            };
           

            $scope.myFunc = function() {
                alert("do you want to retrieve?");
                $scope.records = [{
                   "Name": "Name",
                   "Type": "Type",
                   "Cost": "Cost",
                   "Supplier": "Supplier",
                   "Availability": "Availability",

                }]
                var name = $scope.name;
                var req = {
                    method: 'POST',
                    url: 'http://localhost:3000/retrieve',
                    headers: {
                        'Content-Type': 'Application/json'
                    },
                    data: {
                        name: name,
                    }
                }

                $http(req)
                    .then(function(response) {

                        $scope.name1 = response.data[0].name;

                        $scope.type = response.data[0].type;

                        $scope.cost = response.data[0].cost;

                        $scope.supplier = response.data[0].supplier;


                        $scope.avail = response.data[0].avail;

                        


                    });
            };

        });


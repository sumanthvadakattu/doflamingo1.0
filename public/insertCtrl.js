
        app.controller('insertCtrl', function($scope, $http) {
            $scope.myFunc = function() {
                alert("Do you want to insert ?");
                var name = $scope.name;
                var type = $scope.type;
                var cost = $scope.cost;
                var supplier = $scope.supplier;
                var avail = $scope.avail;
                var req = {
                    method: 'POST',
                    url: 'http://localhost:3000/data',
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
                        $scope.names = response.data;
                        alert($scope.names);
                    });
            };

        });


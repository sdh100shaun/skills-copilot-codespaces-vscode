function skillsMember() {
    return {
        restrict: 'E',
        templateUrl: 'templates/member.html',
        scope: {
        info: '='
        },
        controller: function($scope) {
        $scope.member = {};
        $scope.member.name = $scope.info.name;
        $scope.member.position = $scope.info.position;
        $scope.member.img = $scope.info.img;
        $scope.member.skills = $scope.info.skills;
        }
    };

}

//describe('myAppRename.categories headerCtrl', function() {
//
//    var scope, httpBackendMock, ctrl;
//    var users = [
//        {userName : "Lars", email :"l@l.dk",pw: "test",created : new Date(2014,11,2)},
//        {userName : "Henrik", email :"h@h.dk",pw: "test",created : new Date(2014,11,2)},
//    ];
//    beforeEach(module('myAppRename.categories'));
//
//    beforeEach(inject(function ($httpBackend, $rootScope, $controller) {
//        httpBackendMock = $httpBackend;
//        httpBackendMock.expectGET('api/wiki').
//            respond(users);
//        scope = $rootScope.$new();
//        ctrl = $controller('headerCtrl', {$scope: scope});
//    }));
//
//    //it('Should fetch two names ', function () {
//    //    expect(scope.wikis).toBeUndefined();
//    //    httpBackendMock.flush();
//    //    expect(scope.wikis.length).toEqual(2);
//    //});
//    //
//    //it('Should fetch Lars and Henrik', function () {
//    //    expect(scope.wikis).toBeUndefined();
//    //    httpBackendMock.flush();
//    //    expect(JSON.stringify(scope.wikis)).toEqual(JSON.stringify(users));
//    //});
//
//});
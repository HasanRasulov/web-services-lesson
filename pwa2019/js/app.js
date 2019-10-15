var app1 = angular.module("app1", []);

app1.controller("Ctrl1", [ "$http", function($http) {
    console.log("The first controller");
    var that=this;
    $http.get("/data").then(function(rep){
        that.data=rep.data;
    },function(err){
        console.log("error:"+err);
    });

    that.dataSent={"increment":3};

    that.buttonClicked=function(){
        console.log(that.dataSent.increment);
        $http.post("/data",that.dataSent).then(function(rep){
              that.data=rep.data;},function(err){}
        );

    }
    
}]);
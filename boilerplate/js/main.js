function jQueryAjax(){
    //define a variable to hold the data
    var mydata;

    //basic jQuery ajax method
    $.ajax("data/MegaCities.geojson", {
        dataType: "json",
        success: function(response){
            mydata = response;

            //check the data
            console.log('Dades accessibles');
            console.log(mydata);
        }
    });

    //check the data
    console.log('Dades no accessibles');
    console.log(mydata);
};

$(document).ready(jQueryAjax);



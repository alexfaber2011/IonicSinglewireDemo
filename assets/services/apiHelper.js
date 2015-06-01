/**
 * Created by alexfaber on 6/1/15.
 */
mainControllers.factory('apiHelper', function(){
    var instanceData = {
        BASE_URL: 'https://alex.qadev.singlewire.com:8444/InformaCast/RESTServices/V1/'
    };
    
    return {
        getBaseURL: function(){
            return instanceData.BASE_URL;
        },
        getBasicEncoded: function(){
            return localStorage.getItem("authorization");
        },
        setBasicEncoded: function(basicEncoded){
            //console.log('[apiHelper] setBasicEncoded: ' + basicEncoded);
            localStorage.setItem("authorization", basicEncoded);
        }
    }
});
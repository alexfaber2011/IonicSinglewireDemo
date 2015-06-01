/**
 * Created by alexfaber on 6/1/15.
 */
mainControllers.factory('apiHelper', function(){
    var instanceData = {
        basicEncoded: null,
        BASE_URL: 'https://alex.qadev.singlewire.com:8444/InformaCast/RESTServices/V1/'
    };
    
    return {
        getBaseURL: function(){
            return instanceData.BASE_URL;
        },
        getBasicEncoded: function(){
            return instanceData.basicEncoded;
        },
        setBasicEncoded: function(basicEncoded){
            console.log('[apiHelper] setBasicEncoded: ' + basicEncoded);
            instanceData.basicEcoded = basicEncoded;
        }
    }
});
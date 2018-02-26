
$(document).ready(function(){
    
    // Initialize Firebase
    firebase.initializeApp(config);

    var database = firebase.database();
    var ref = database.ref('scores');
    
    ref.on('value', gotData, errData);
    
    function gotData(data){
        $("#scoreList").empty();
        var scores = data.val();
        
        var keys = Object.keys(scores);
        for(var i=0; i<keys.length; i++){
            var k = keys[i];
            var name = scores[k].name;
            var score = scores[k].score;
            console.log(name, score);
            $("#scoreList").append('<li>' + name + ': ' + score + '</li>');
        }
    };
    
    function errData(err){
        console.log(err);  
    };
    
    
    var score = 0;
    $('#score').text(score);

    $('.click').on('click', function(event){
        score++;
        $('#score').text(score);
    });
    
    $('.submit').on('click', function(event){
        
        var data = {
            name: $('.player').val(),
            score: score
        }
        
        ref.push(data);
        console.log(data);  
        
    });
});
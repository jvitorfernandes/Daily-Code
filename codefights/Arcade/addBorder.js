function addBorder(picture) {
    
    var len = picture[0].length;
    
    var border = '';
    for(var i = 0; i<len+2; i++){
        border+='*';
    }   
    var bordered = [border];
    
    picture.forEach(function(item, index){
        bordered.push('*' + item + '*')
    });
    bordered.push(border);
        
    return bordered;
}

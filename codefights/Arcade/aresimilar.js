function areSimilar(a, b) {
    
    var dif = 0;
    var difItens = [];
    
    for(var i = 0; i<a.length; i++){
        
        if(a[i]!=b[i]){
            difItens.push(a[i], b[i]);
            dif++;
        }
        if(dif==2){
            if(difItens[0]==difItens[3] && difItens[1]==difItens[2]){
                continue
            }else{
                return false;
            }
        }
        if(dif==3){
            return false;
        }
        
    }
    
    return true;
    
}

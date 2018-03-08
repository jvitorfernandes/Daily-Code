function alternatingSums(a) {
    sums = [0, 0];
    a.forEach(function(item, i){
        if(i%2==0){
            sums[0]+=item;
        }
        else{
            sums[1]+=item;
        }
    });
    return sums;
}

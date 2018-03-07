
function reverseParentheses(s) {
	
	var addContent = false;
	var content = [];

    for(var i = 0; i<s.length; i++){
		
    	if(s.indexOf('(')<=-1 || s.indexOf(')')<=-1){
    		return s;
    	}

		if(s[i]==')'){

			addContent = false;
			content = content.reverse().join('');

			s = s.split('');
			s.splice(i-content.length-1, content.length+2, content);
			s = s.join('');

			i=0;
    	}

    	if(addContent){
    		content.push(s[i]);
    	}

    	if(s[i]=='('){
    		content = [];
    		addContent = true;
    	}
  
    }

    return s;
}
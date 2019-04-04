function boldString(str, find){
	var final = str;
	for(let i = 0; i < find.length; i++){
    	var re = new RegExp(find[i], 'g');
    	final = final.replace(re, '<b>'+find[i]+'</b>');
    }

	while(final.indexOf("</b><b>") !== -1){
		final = final.replace(/<\/b><b>/, "");
	}
	return final;
}

/*
boldString("abcxyziueyrueab", ["ab", "c", "y"]);
"<b>abc</b>x<b>y</b>ziue<b>y</b>rue<b>ab</b>"

boldString("abcxyz", ["ab", "c", "y"]);
"<b>abc</b>x<b>y</b>z"

*/
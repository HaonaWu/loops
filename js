function hello()
{
	var word = ["h","e","l","l","o"];

	for( var i = 0; i < word.length; i=i+1) 
	{
		alert(word[i]);
	}
}

function changeImage(){
	var img_list = ["http://news.nationalgeographic.com/content/dam/news/2015/12/15/pandas/01pandainsemination.jpg", "https://img-aws.ehowcdn.com/877x500p/s3-us-west-1.amazonaws.com/contentlab.studiod/getty/0e20a179f3b94b9183fb52cf3a30911a", "https://userscontent2.emaze.com/images/a79a2094-ff29-4e0a-8130-ca22a213baff/97b914f2fe1ba41a87519595a1603eeb.jpg"]

	// get url of current image on page 
	var img_curr = document.getElementById("animalImage").src;
	
	for( var i = 0; i < img_list.length; i=i+1) 
	{
		var img = img_list[i];
		if (img_curr == img) 
			if (i == img_list.length - 1)
			{
				document.getElementById("animalImage").src= img_list[0];
			}
			else
			{
				document.getElementById("animalImage").src= img_list[i + 1];
			}
	}
}

<?php


require('simple_html_dom.php');

$arr=[];

function getID(){

if ($_GET['q']) {

		$q=$_GET['q'];
    	$url="https://www.youtube.com/results?search_query=".str_replace(' ','+',$q);
    	$html=file_get_html($url);
    	$ol=$html->find('h3.yt-lockup-title',0);
		$a=$ol->find('a.yt-uix-tile-link',0);
		$video_url=$a->href;
	   // str_replace('/watch?v=','',$video_url);
	    $arr['id']= str_replace('/watch?v=','',$video_url);;
	    echo  json_encode($arr);
	}

else{
	echo "not gained";
 }	
}

getID();



?>




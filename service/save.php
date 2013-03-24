<?php
$data = stripslashes($_POST['data']);

if(isset($data))
{
	$myFile = "../book.json";
	$fh = fopen($myFile, 'w') or die("can't open file");

	fwrite($fh, $data);
	fclose($fh);
	
	echo "status=1";
}else{
	echo "Error";
}

?>
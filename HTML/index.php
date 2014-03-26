<?php
include 'header.html';
$uri = $_SERVER['REQUEST_URI'];
$file = substr($uri, strpos($uri, '/') + 1);
if(false !== $file){
    include $file . '.html';
}else{
    echo "<body><p>my first frontend</p></body>";
}
include 'footer.html';


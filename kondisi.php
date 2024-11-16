<!DOCTYPE html>
<html>
<head>
	<title>Biodata Saya</title>
	<link rel="stylesheet" type="text/css" href="style.css">
</head>
<body>
	<div class="kotak">
 
		<div class="judul">
			<h1>
				<a href="index.html">Home</a>||
				<a href="index.html">Profile</a>|| 
				<a href="peta.html">Peta</a>||
				<a href="kondisi.php">Flowgorithm</a>||
				<a href="data.php">Data</a>
			</h1>
		</div>
 
		<div class="blok">
			<div class="subjudul">
 			<?php 
				$usia = 21;
				if($usia > 17){
			echo "Bisa Buat Sim";
				}else{
			echo "Tidak Bisa Buat Sim";
			}
			?>
 			</div>	
		</div>
			<br>
		<div class="blok">
			<div class="subjudul">
			<?php
  echo "Kode Program PHP - Keliling dan Luas Persegi Panjang";
  echo "<hr>";
  $panjang = 40;
  $lebar = 20;
  $luas_persegi_panjang = $panjang * $lebar;
  $keliling_persegi_panjang = (2 * $panjang) + (2 * $lebar); 
  echo "Panjang persegi = $panjang <br>";
  echo "Lebar persegi = $lebar <br>";
  echo "<br>";
  echo "Luas persegi panjang = $panjang * $lebar
        = $luas_persegi_panjang <br>";
  echo "Keliling persegi panjang = (2 * $panjang) + (2 * $lebar) 
        = $keliling_persegi_panjang <br>";
?>
 			</div>	
		</div>

	</div>
</body>
</html>
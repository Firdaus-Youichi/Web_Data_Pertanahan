<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Biodata Saya</title>
    <link rel="stylesheet" type="text/css" href="style.css">
</head>
<body>
    <div class="kotak">
        <!-- Header -->
        <div class="judul">
            <h1>
                <a href="index.html">Home</a> ||
                <a href="index.html">Profile</a> ||
                <a href="peta.html">Peta</a> ||
                <a href="kondisi.php">Flowgorithm</a> ||
                <a href="data.php">Data</a>
            </h1>
        </div>

        <!-- Main Content -->
        <div class="blok">
            <div class="subjudul">
                <h2>Data Pertanahan Di Padukuhan Banyuraden</h2>
                <table class="table1">
                    <tr>
                        <th>NO</th>
                        <th>NIT</th>
                        <th>Nama Taruna</th>
                        <th>Alamat</th>
                    </tr>
                    <?php 
                    include 'koneksi.php';
                    $no = 1;
                    $data = mysqli_query($koneksi, "SELECT * FROM taruna");
                    while ($d = mysqli_fetch_array($data)) {
                    ?>
                    <tr>
                        <td><?php echo $no++; ?></td>
                        <td><?php echo $d['nit']; ?></td>
                        <td><?php echo $d['nama_taruna']; ?></td>
                        <td><?php echo $d['alamat']; ?></td>
                    </tr>
                    <?php 
                    }
                    ?>
                </table>
            </div>    
        </div>
    </div>

    <!-- Footer -->
    <div class="footer">
        &copy; 2024 - Website Biodata Saya | Padukuhan Banyuraden
    </div>
</body>
</html>

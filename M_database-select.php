<?php

require __DIR__ . '/M_databse-connect.php';

$stmt = $pdo->query("SELECT * FROM `memberdata` LIMIT 10 ");

while ($r = $stmt->fetch()) {
    echo "{$r['m_name']} <br>";
}

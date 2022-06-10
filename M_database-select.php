<?php

require __DIR__ . '/part/connect_db.php';

$stmt = $pdo->query("SELECT * FROM `memberdata` LIMIT 10 ");

while ($r = $stmt->fetch()) {
    echo "{$r['m_name']} <br>";
}

<?php
require __DIR__ . '/connect_db.php';
// require_once
// include __DIR__ . '/connect_db.php';
// include_once

$stmt = $pdo->query("SELECT * FROM address_book LIMIT 5");

while ($r = $stmt->fetch()) {
    echo "{$r['name']} <br>";
}

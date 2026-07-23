<?php
require '../config/db.php';
require '../helpers/response.php';

$stmt = $pdo->query("SELECT NOW() as server_time");
$result = $stmt->fetch(PDO::FETCH_ASSOC);

jsonResponse(['status' => 'ok', 'data' => $result]);
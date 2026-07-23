<?php
require_once __DIR__ . '/../config/db.php';
require_once __DIR__ . '/../helpers/response.php';

$stmt = $pdo->query("SELECT NOW() as server_time");
$result = $stmt->fetch(PDO::FETCH_ASSOC);

jsonResponse(['status' => 'ok', 'data' => $result]);
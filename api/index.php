<?php
header('Content-Type: application/json');
require_once __DIR__ . '/vendor/autoload.php';

$dotenv = Dotenv\Dotenv::createImmutable(__DIR__);
$dotenv->load();

require_once __DIR__ . '/config/db.php';

$route = trim($_GET['route'] ?? '', '/');

$routes = [
 'example' => 'endpoints/example.php',
];

if (isset($routes[$route])) {
 require_once __DIR__ . '/' . $routes[$route];
} else {
 http_response_code(404);
 echo json_encode(['error' => 'Not found']);
}
exit;
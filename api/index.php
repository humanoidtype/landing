<?php
header('Content-Type: application/json');
require __DIR__ . '/vendor/autoload.php';

$dotenv = Dotenv\Dotenv::createImmutable(__DIR__);
$dotenv->load();

require __DIR__ . '/config/db.php';

$route = trim($_GET['route'] ?? '', '/');

$routes = [
    'example.php' => 'endpoints/example.php',
];

if (isset($routes[$route])) {
    require __DIR__ . '/' . $routes[$route];
} else {
    http_response_code(404);
    echo json_encode(['error' => 'Not found']);
}
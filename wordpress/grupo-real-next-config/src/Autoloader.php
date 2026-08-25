<?php

declare(strict_types=1);

namespace GrupoReal\NextConfig;

final class Autoloader
{
    public static function register(string $baseDir): void
    {
        spl_autoload_register(static function (string $class) use ($baseDir): void {
            $prefix = 'GrupoReal\\NextConfig\\';

            if (strncmp($prefix, $class, strlen($prefix)) !== 0) {
                return;
            }

            $relative = substr($class, strlen($prefix));
            $file = $baseDir . str_replace('\\', '/', $relative) . '.php';

            if (is_readable($file)) {
                require_once $file;
            }
        });
    }
}

<?php

declare(strict_types=1);

namespace GrupoReal\NextConfig\Front;

use GrupoReal\NextConfig\Config;

final class RedirectHosts
{
    public function register(): void
    {
        add_filter('allowed_redirect_hosts', [$this, 'allowFrontHost']);
    }

    /**
     * @param list<string> $hosts
     * @return list<string>
     */
    public function allowFrontHost(array $hosts): array
    {
        $host = wp_parse_url(Config::frontOrigin(), PHP_URL_HOST);

        if (is_string($host) && $host !== '' && !in_array($host, $hosts, true)) {
            $hosts[] = $host;
        }

        return $hosts;
    }
}

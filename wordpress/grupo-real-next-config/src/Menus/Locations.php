<?php

declare(strict_types=1);

namespace GrupoReal\NextConfig\Menus;

use GrupoReal\NextConfig\Config;

final class Locations
{
    public function register(): void
    {
        add_action('after_setup_theme', [$this, 'registerLocation']);
    }

    public function registerLocation(): void
    {
        register_nav_menus([
            Config::MENU_SIDEBAR_LOCATION => Config::MENU_SIDEBAR,
        ]);
    }
}

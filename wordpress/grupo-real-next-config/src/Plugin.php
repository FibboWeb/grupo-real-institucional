<?php

declare(strict_types=1);

namespace GrupoReal\NextConfig;

use GrupoReal\NextConfig\Acf\JsonLoader;
use GrupoReal\NextConfig\Admin\AcfAdminUi;
use GrupoReal\NextConfig\Admin\FlexibleThumbnails;
use GrupoReal\NextConfig\Admin\WysiwygConfig;
use GrupoReal\NextConfig\Menus\Locations;
use GrupoReal\NextConfig\Pages\SlugMap;
use GrupoReal\NextConfig\Rest\PageFields;
use GrupoReal\NextConfig\Rest\SidebarMenu;
use GrupoReal\NextConfig\Theme\Editor;
use GrupoReal\NextConfig\Theme\PageTemplates;

final class Plugin
{
    private static ?self $instance = null;

    public static function instance(): self
    {
        if (self::$instance === null) {
            self::$instance = new self();
        }

        return self::$instance;
    }

    public function boot(): void
    {
        (new JsonLoader())->register();
        (new PageTemplates())->register();
        (new Editor())->register();
        (new Locations())->register();
        (new PageFields())->register();
        (new SidebarMenu())->register();
        (new FlexibleThumbnails())->register();
        (new AcfAdminUi())->register();
        (new WysiwygConfig())->register();
        SlugMap::registerAdminNotices();
    }
}

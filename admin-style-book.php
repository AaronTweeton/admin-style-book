<?php
/*
 * Plugin Name:       Admin Style Book
 * Description:       A plugin that shows the admin styles for WordPress.
 * Version:           0.1.0
 * Requires at least: 6.2
 * Requires PHP:      7.2
 * Author:            Aaron Tweeton
 * Author URI:        https://aarontweeton.com/
 * License:           GPL v2 or later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       admin-style-book
 * Domain Path:       /languages
 */

/*
Admin Style Book is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 2 of the License, or
any later version.

Admin Style Book is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with Admin Style Book. If not, see https://www.gnu.org/licenses/gpl-2.0.html.
*/

if (!class_exists('AdminStyleBook_Plugin')) {
    class AdminStyleBook_Plugin {
        static $instance = false;

        private function __construct() {
            register_activation_hook(__FILE__, array($this, 'handle_activation'));
            register_deactivation_hook(__FILE__,  array($this, 'handle_deactivation'));

            add_action('admin_menu', array($this, 'create_submenu_page'));
            add_action('admin_enqueue_scripts', array($this, 'enqueue_assets'));
        }

        public function create_submenu_page(): void {
            add_submenu_page(
                'tools.php',
                'Admin Style Book',
                'Admin Style Book',
                'manage_options',
                'admin-style-book',
                array($this, 'handle_submenu_page')
            );
        }

        public function enqueue_assets(string $hook): void {
            if ('tools_page_admin-style-book' !== $hook) {
                return;
            }

            wp_enqueue_style('wp-components');

            $filename = plugin_dir_path(__FILE__) . 'build/index.asset.php';

            if (file_exists($filename)) {
                $asset_file = require_once $filename;

                wp_enqueue_script(
                    'admin-style-book',
                    plugin_dir_url(__FILE__) . 'build/index.js',
                    $asset_file['dependencies'],
                    $asset_file['version'],
                    true
                );

                wp_enqueue_style(
                    'admin-style-book',
                    plugins_url('style.css', __FILE__),
                );
            }
        }

        public function handle_activation(): void {
            flush_rewrite_rules();
        }

        public function handle_deactivation(): void {
            flush_rewrite_rules();
        }

        public function handle_submenu_page(): void {
            require_once plugin_dir_path(__FILE__) . 'includes/submenu-page.php';
        }

        public static function get_instance(): AdminStyleBook_Plugin {
            if (!self::$instance)
                self::$instance = new self;
            return self::$instance;
        }
    }
}

$admin_style_book_plugin = AdminStyleBook_Plugin::get_instance();

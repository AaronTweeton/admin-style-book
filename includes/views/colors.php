<?php
if (!function_exists('admin_style_book_compose_slug')) {
    function admin_style_book_compose_slug(string $name): string {
        return sanitize_title($name);
    }
}

if (!function_exists('admin_style_book_get_colors')) {
    function admin_style_book_get_colors() {
        $url = plugin_dir_url(__DIR__) . 'colors.json';
        $request = wp_remote_get($url);

        if (is_wp_error($request)) {
            return false;
        }

        $body = wp_remote_retrieve_body($request);
        $data = json_decode($body);

        return ($data);
    }
}

$palettes = admin_style_book_get_colors()->palettes;
?>

<h2><?php _e('Colors', 'admin-style-book') ?></h2>
<?php foreach ($palettes as &$palette) { ?>
    <h2><?php esc_html_e($palette->name) ?></h2>
    <div class="color-group">
        <div class="colors">
            <?php foreach ($palette->swatches as &$swatch) { ?>
                <div class="color <?php esc_attr_e(admin_style_book_compose_slug($swatch->name)) ?>" style="background-color: <?php esc_attr_e($swatch->color) ?>">
                    <h3><?php esc_html_e($swatch->name) ?></h3>
                    <dl>
                        <dt class="screen-reader-text">Hex</dt>
                        <dd><?php esc_attr_e($swatch->color) ?></dd>
                    </dl>
                </div>
            <?php } ?>
        </div>
    </div>
<?php } ?>
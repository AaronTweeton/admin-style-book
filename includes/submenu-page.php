<?php
parse_str($_SERVER['QUERY_STRING'], $query_string);
$page = (string)$query_string['page'];
$path = (string)isset($query_string['path']) ? $query_string['path'] : 'text';
$routes = array(
    'text',
    'design',
    'notices',
    'forms',
    'tables',
);

if (!function_exists('compose_href')) {
    function compose_href(string $page, string $path): string {
        $query = http_build_query(array(
            'page' => $page,
            'path' => $path
        ));

        return "?{$query}";
    }
}

if (!function_exists('is_current')) {
    function is_current(string $slug): string {
        parse_str($_SERVER['QUERY_STRING'], $result);
        if (isset($result['path'])) {
            $current_path = $result['path'];
            return $current_path === $slug ? 'current' : '';
        }
        return '';
    }
}

?>

<div class="wrap">
    <h1><?php echo esc_html(get_admin_page_title()); ?></h1>
    <ul class="subsubsub">
        <?php
        foreach ($routes as $route) {
        ?>
            <li>
                <a class="<?php esc_attr_e(is_current($route)) ?>" href="<?php echo esc_url(compose_href($page, $route)) ?>">
                    <?php echo ucfirst($route) ?>
                </a>
                <?php
                if (next($routes)) {
                    echo esc_html('|');
                }
                ?>
            </li>

        <?php
        }
        ?>
    </ul>
    <br class="clear">
    <?php
    switch ($path) {
        case 'text':
        case 'design':
        case 'notices':
        case 'forms':
        case 'tables':
            if (file_exists(__DIR__ . "/views/{$path}.php")) {
                require_once __DIR__ . "/views/{$path}.php";
            } else {
                $my_error = new WP_Error('path', __("Missing file for {$path} view.", "admin_style_book"));
                echo '<div class="notice notice-error inline"><p>' . $my_error->get_error_message() . '</p></div>';
            }
            break;

        default:
            http_response_code(404);
            $my_error = new WP_Error('404', __("Invalid path.", "admin_style_book"));
            echo '<div class="notice notice-error inline"><p>' . $my_error->get_error_message() . '</p></div>';
            break;
    }
    ?>
</div>
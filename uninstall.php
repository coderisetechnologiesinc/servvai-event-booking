<?php
// If uninstall not called from WordPress, exit.
if ( ! defined( 'WP_UNINSTALL_PLUGIN' ) ) {
    exit;
}

// Remove options
delete_option( 'servv_stripe_public_key' );
delete_option( 'servv_stripe_account_id' );

<?php 

    return [

        /*
        |--------------------------------------------------------------------------
        | Routes
        |--------------------------------------------------------------------------
        |
        |   
        |
        */
        'ROUTES' => [
            'VOUCHERS' => '/vouchers',
            'SINGLE_VOUCHER' => '/vouchers/{voucherID}',
            'ARTICLES' => '/articles',
            'SINGLE_ARTICLE' => '/articles/{articleID}',
            'TAGS' => '/tags'
        ],

        /*
        |--------------------------------------------------------------------------
        | Voucher values
        |--------------------------------------------------------------------------
        |
        |   Voucher values used as column names in database.
        | 
        */
        'VOUCHER' => [
            'ID' => 'id',
            'NAME' => 'name',
            'DESCRIPTION' => 'description',
            'STORE_IMAGE' => 'store_image',
            'DISCOUNT' => 'discount',
            'DISCOUNT_TYPE' => 'discount_type',
            'TAG' => 'tag',
            'DOWNLOADS' => 'downloads',
            'EXPIRY' => 'expiry',
            'STATUS' => 'status',
            'PRODUCT_IMAGE' => 'product_image',
        ],

        
        /*
        |--------------------------------------------------------------------------
        | Article values
        |--------------------------------------------------------------------------
        |
        |   Article values used as column names in database.
        |
        */
        'ARTICLE' => [
            'ID' => 'id',
            'TITLE' => 'title',
            'DESCRIPTION' => 'description',
            'CONTENT' => 'content',
            'SUB_TITLE' => 'sub_title',
            'SUB_CONTENT' => 'sub_content',
            'IMAGE' => 'article_image',
            'READ_TIME' => 'read_time',
            'STATUS' => 'status',
        ],

        /*
        |--------------------------------------------------------------------------
        | Tag values
        |--------------------------------------------------------------------------
        |
        |   Tag values used as column names in database.
        |
        */
        'TAG' => [
            'ID' => 'id',
            'TITLE' => 'title',
            'COLOR' => 'color'
        ]
    ];
    
?>
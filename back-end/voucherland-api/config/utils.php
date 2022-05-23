<?php

    return [
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
        ],

        /*
        |--------------------------------------------------------------------------
        | User values
        |--------------------------------------------------------------------------
        |
        |   User values used as column names in database.
        |
        */
        'USER' => [
            'ID' => 'id',
            'FIRST_NAME' => 'firstname',
            'LAST_NAME' => 'lastname',
            'EMAIL' => 'email',
            'PASSWORD' => 'password',
            'IS_ADMIN' => 'is_admin',
        ],

        /*
        |--------------------------------------------------------------------------
        | Relation between Article and Tag tables
        |--------------------------------------------------------------------------
        |
        |   Column names for the table article_tag
        |
        */
        'ARTICLE_TAG' => [
            'ID' => 'id',
            'ARTICLE_ID' => 'article_id',
            'TAG_ID' => 'tag_id'
        ],

        /*
        |--------------------------------------------------------------------------
        | Relation between User and Voucher tables
        |--------------------------------------------------------------------------
        |
        |   Column names for the table user_voucher
        |
        */
        'USER_VOUCHER' => [
            'ID' => 'id',
            'USER_ID' => 'user_id',
            'VOUCHER_ID' => 'voucher_id'
        ],
    ];


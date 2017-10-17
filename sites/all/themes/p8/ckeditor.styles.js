/*
Copyright (c) 2003-2013, CKSource - Frederico Knabben. All rights reserved.
For licensing, see LICENSE.html or http://ckeditor.com/license
*/

/*
 * This file is used/requested by the 'Styles' button.
 * The 'Styles' button is not enabled by default in DrupalFull and DrupalFiltered toolbars.
 */
if(typeof(CKEDITOR) !== 'undefined') {
    CKEDITOR.addStylesSet( 'drupal',
    [
            /* Object Styles */

            {
                    name : 'Image on Left',
                    element : 'img',
                    attributes :
                    {
                            'style' : 'padding: 5px; margin-right: 5px',
                            'border' : '2',
                            'align' : 'left'
                    }
            },

            {
                    name : 'Image on Right',
                    element : 'img',
                    attributes :
                    {
                            'style' : 'padding: 5px; margin-left: 5px',
                            'border' : '2',
                            'align' : 'right'
                    }
            }

            /* Heading Styles */
            {
                    name : 'Main Title',
                    element : 'h1',
                    attributes :
                    {
                            'font-size' : '30px',
                    }
            }
            {
                    name : 'Subtitle',
                    element : 'h2',
                    attributes :
                    {
                            'font-size' : '24px',
                    }
            }
            {
                    name : 'Button',
                    element : 'btn',
                    attributes :
                    {
                            'background-color' : '#E17425',
                            'color' : '#fff',
                            'text-transform': 'uppercase',
                            'padding': '5px 20px',
                    }
            }
    ]);
}

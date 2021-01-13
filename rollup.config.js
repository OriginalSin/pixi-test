import babel from 'rollup-plugin-babel';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import css from 'rollup-plugin-css-porter';
import cpy from 'rollup-plugin-cpy';

export default [
    {
        input: 'example/main.js',        
        output: { 
            file: 'public/main.js',
            format: 'iife',
            sourcemap: true,
            name: 'Test',
            globals: {
                'leaflet': 'L'
            },
        },
        plugins: [                      
            resolve({
                customResolveOptions: {
                    moduleDirectory: ['node_modules', 'src']
                },
            }),
            commonjs(),            
            css({dest: 'public/main.css', minified: false}),
            // cpy([
                // {files: 'src/images/*.*', dest: 'public/assets/images'},
                // {files: 'src/ImageBitmapLoader-worker.js', dest: 'public'},
            // ]),
            babel({                
                extensions: ['.js', '.mjs'],
                exclude: ['node_modules/@babel/**', 'node_modules/core-js/**'],
                include: ['example/**', 'src/**']
            }),
        ],
    },    
    // {
    //     input: 'src/Map.js',
    //     output: { 
    //         file: 'dist/cjs/forestry.cjs.js',
    //         format: 'cjs',
    //         sourcemap: true,
    //         globals: {
    //             'leaflet': 'L',
    //             'moment': 'moment'
    //         },            
    //     },
    //     external: ['leaflet', 'moment'],
    //     plugins: [            
    //         resolve({
    //             customResolveOptions: {
    //                 moduleDirectory: ['node_modules', 'src']
    //             },                
    //         }),
    //         commonjs(),
    //         css({dest: 'dist/cjs/forestry.css', minified: false}),
    //         cpy([
    //             {files: 'src/images/*.*', dest: 'dist/images'},
    //             {files: 'src/ImageBitmapLoader-worker.js', dst: 'dist'},
    //         ]),
    //         babel({                
    //             extensions: ['.js', '.mjs'],
    //             exclude: ['node_modules/@babel/**', 'node_modules/core-js/**'],
    //             include: ['src/**', 'node_modules/**']
    //         }),
    //     ],
    // },
    {
        input: 'src/Map.js',
        output: { 
            file: 'dist/iife/forestry.js',
            format: 'iife',
            name: 'Forestry',
            sourcemap: true,
            globals: {
                'leaflet': 'L',
                'moment': 'moment'
            },            
        },        
        plugins: [            
            resolve({
                customResolveOptions: {
                    moduleDirectory: ['node_modules', 'src']
                },                
            }),
            commonjs(),
            css({dest: 'dist/iife/forestry.css', minified: false}),
            cpy([
                {files: 'src/images/*.*', dest: 'dist/images'},
                {files: 'src/ImageBitmapLoader-worker.js', dest: 'dist'},
            ]),
            babel({                
                extensions: ['.js', '.mjs'],
                exclude: ['node_modules/@babel/**', 'node_modules/core-js/**'],
                include: ['src/**', 'node_modules/**']
            }),
        ],
    },    
];
// module.exports = {

//     lintOnSave: true,

//     css: {

//         loaderOptions: {

//             postcss: {

//                 plugins: [

//                     require('postcss-pxtorem')({

//                         rootValue: 37.5, // 换算的基数

//                         propList: ['*'],

//                     }),

//                 ]

//             }

//         }

//     },

// }

// module.exports = {

//     lintOnSave: true,

//     css: {

//         loaderOptions: {

//             postcss: {

//                 plugins: [

//                     require('postcss-px2rem')({ remUnit: 30 }), // 换算的基数

//                 ]

//             }

//         }

//     },

// }

module.exports = {
    css: {
        loaderOptions: {
            css: {},
            postcss: {
                plugins: [
                    require('postcss-px2rem')({
                        remUnit: 37.5
                    })
                ]
            }
        }
    },
}
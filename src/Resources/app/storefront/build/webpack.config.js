const { join, resolve } = require('path');

module.exports = ({ env, config, name, technicalName, plugin, basePath }) => {
    return {
        resolve: {
            alias: {
                '@vue': resolve(
                    join(__dirname, '..', 'node_modules', 'vue', 'dist/vue.common.js')
                ),
                '@vuex': resolve(
                    join(__dirname, '..', 'node_modules', 'vuex', 'dist/vuex.common.js')
                )
            }
        }
    };
};

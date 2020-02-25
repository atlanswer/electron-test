module.exports = {
  'packagerConfig': {},
  'makers': [
    {
      'name': '@electron-forge/maker-squirrel',
      'config': {
        'name': 'electron_test',
      },
    },
    {
      'name': '@electron-forge/maker-zip',
      'platforms': [
        'darwin',
      ],
    },
    {
      'name': '@electron-forge/maker-deb',
      'config': {},
    },
    {
      'name': '@electron-forge/maker-rpm',
      'config': {},
    },
  ],
  'plugins': [
    [
      '@electron-forge/plugin-webpack',
      {
        'mainConfig': 'config/webpack.main.config.js',
        'renderer': {
          'config': 'config/webpack.renderer.config.js',
          'entryPoints': [
            {
              'html': './src/index.html',
              'js': './src/renderer.js',
              'name': 'main_window',
            },
          ],
        },
      },
    ],
  ],
};

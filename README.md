# electron-test

An Electron application for learning and testing various topics surrounding Javascript, HTML, CSS and Node.Js.

## Prerequisites

Gather the tools needed for Electron application development.

Unless explicitly mentioned, the latest stable versions are used. They will be periodically updated. 

- Install `electron`  
  Require `node` and `npm`. Using [Electron Forge](https://www.electronforge.io/) is recommended, which is a complete tool for modern Electron application development.
  - Setting China mirror  
    Downloading the Electron binary directly is expected to be super slow based on experience, [Taobao npm mirror](https://npm.taobao.org/mirrors/electron/) is choosed instead.

    ```shell
    $ npm config edit
    ```

    Add the `electron_mirror` variable, more info on [Electron installation](https://www.electronjs.org/docs/tutorial/installation#custom-mirrors-and-caches).

    ```npmrc
    electron_mirror=https://cdn.npm.taobao.org/dist/electron/
    ; npm registry mirror is also helpful.
    registry=https://registry.npm.taobao.org/
    disturl=https://npm.taobao.org/dist
    ```

    Currently Electron Forge + Webpack is used, providing ES6 module functionality. Debugging with VS Code was made easy by this [launch config](https://www.electronforge.io/advanced/debugging).
- [Configure `eslint`](https://eslint.org/docs/2.0.0/user-guide/configuring)  
  Utilize `eslint` for Javascript code, including `eslint` and the corresponding VS Code extension.

  ```shell
  $ npx eslint --init
  ```

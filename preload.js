window.exports = {
    "cursor": {
        mode: "none",
        args: {
            enter: (action, callbackSetList) => {
                const { exec } = require('child_process')
                utools.readCurrentFolderPath()
                    .then((dir) => {
                        exec(`open -a Cursor "${dir}"`, (error) => {
                            utools.outPlugin()
                            if (error) {
                                console.error(`执行错误: ${error}`)
                            }
                        })
                    }).catch((error) => {
                        exec(`open -a Cursor`)
                        utools.outPlugin()
                    })
            }
        }
    }
}
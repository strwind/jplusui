// 设置 XFly 的安装目录。const XFLY_INSTALL_PATH = "../../";const XFLY_CONFIGS_PATH = "lib/configs.json";const XFLY_HADNLES_PATH = "lib/handlers/";const XFLY_MODULES_PATH = "lib/modules/";const XFLY_PLUGINS_PATH = "lib/plugins/";const XFLY_ASSETS_PATH = "lib/assets/";// 将 XFLY_INSTALL_PATH 的相对路径改为绝对路径。var Path = require('path');var seperatorPath = Path.sep;var workingDirectory = Path.resolve(__dirname, XFLY_INSTALL_PATH) + seperatorPath;var Configs = require(workingDirectory + XFLY_CONFIGS_PATH);Configs.path = {	workingDirectory: workingDirectory,	handlers: Path.normalize(workingDirectory + XFLY_HADNLES_PATH) + seperatorPath,	modules: Path.normalize(workingDirectory + XFLY_MODULES_PATH) + seperatorPath,	plugins: Path.normalize(workingDirectory + XFLY_PLUGINS_PATH) + seperatorPath,	assets: Path.normalize(workingDirectory + XFLY_ASSETS_PATH) + seperatorPath};module.exports = Configs;
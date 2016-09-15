import 'sass/main.scss';
import 'font-awesome-webpack';
import MainController from 'javascript/controller/main-controller';
import * as pkg from 'project/package';

const main = new MainController(pkg);
main.init();

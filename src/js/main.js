import '../css/style.css';
import {darkModeHandle} from './utils';
import { startGame } from './game';

darkModeHandle();

const stargGameButton = document.getElementById('startGame');
stargGameButton.addEventListener('click', startGame);







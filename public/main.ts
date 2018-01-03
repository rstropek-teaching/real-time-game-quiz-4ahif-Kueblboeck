import { SimpleGame } from './game';

declare const io: SocketIOStatic;

function newGame(){
    var game = new SimpleGame;
}
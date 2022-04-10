class Player {
    constructor(c) {
        this.coin = c;
    }

    getCoin() {
        return this.coin;
    }

    addCoin(c) {
        this.coin += c;
    }

    looseCoin(c) {
        this.coin -= c;
    }
}

class Leprechaun {
    constructor(c) {
        this.coin = c;
    }

    getCoin() {
        return this.coin;
    }

    addCoin(c) {
        this.coin += c;
    }

    looseCoin(c) {
        this.coin -= c;
    }

    choose() {
        return Math.floor(Math.random() * 100);
    }
}

let player = new Player(0);
let lep = new Leprechaun(0);
let txtCnt = document.getElementById("res")


let game = function(playerChoice) {
    txtCnt.textContent = "Results"

    let lepChoice = lep.choose();
    let compChoice = Math.floor(Math.random() * 100);
    
    if (playerChoice < compChoice) {
        player.addCoin(50);
        txtCnt.textContent += ("\nYou gained 50 coins! You now have " + String(player.getCoin()) + " coins.")
    }

    if (playerChoice > compChoice) {
        player.looseCoin(100);
        txtCnt.textContent += ("\nHah you lost 100 coins. You now have " + String(player.getCoin()) + " coins.")
    }

    if (lepChoice < compChoice) {
        lep.addCoin(50);
        txtCnt.textContent += ("\nThe bot gained 50 coins! It now has " + String(lep.getCoin()) + " coins.")
    }

    if (lepChoice > compChoice) {
        lep.looseCoin(100);
        txtCnt.textContent += ("\nThe bot lost 100 coins! It now has " + String(lep.getCoin()) + " coins.")
    }
    
    if (player.getCoin() >= 1000) {
        txtCnt.textContent = "Wait.. you won? That wasnt supposed to happen.\nPlayer and bot coins are now reset. Try to get it again!"
        player.looseCoin(player.getCoin())
        lep.looseCoin(lep.getCoin())
    }
    
    if (lep.getCoin() >= 1000) {
        txtCnt.textContent = "Hahahahah, you losstttt...\nPlayer and bot coins are now reset. Try to get it again!"
        player.looseCoin(player.getCoin())
        lep.looseCoin(lep.getCoin())
    }
}


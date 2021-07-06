const app = Vue.createApp({
    data() {
      return {
        playerHealth: 100,
        monsterHealth: 100,
        currentRound: 0,
        winner: null,
        logMessage: [],
      };
    },
    watch: {
      playerHealth(value) {
        if (
          value <= 0 &&
          this.monsterHealth <= 0
        ) {
          this.winner = "draw";
        } else if (value <= 0) {
          this.winner = "monster";
        }
      },
      monsterHealth(value) {
        if (
          value <= 0 &&
          this.playerHealth <= 0
        ) {
          this.winner = "draw";
        } else if (value <= 0) {
          this.winner = "player";
        }
      },
    },
  
    methods: {
      startGame() {
        this.playerHealth = 100;
        this.monsterHealth = 100;
        this.currentRound = 0;
        this.winner = null;
        this.logMessage = [];
        // console.log(this.playerHealth,this.monsterHealth,this.currentRound,this.winner)
      },
      surrender() {
        this.winner = "monster";
      },
      attackMonster() {
        this.currentRound++;
        const attackValue =
          Math.floor(
            Math.random() * (12 - 5)
          ) + 5;
        this.monsterHealth -= attackValue;
        this.attackPlayer();
        this.addLogMessage(
          "player",
          "attack",
          attackValue
        );
      },
      attackPlayer() {
        const attackValue =
          Math.floor(
            Math.random() * (15 - 8)
          ) + 5;
        this.playerHealth -= attackValue;
        this.addLogMessage(
          "monster",
          "attack",
          attackValue
        );
      },
      specialAttackMonster() {
        this.currentRound++;
        const attackValue =
          Math.floor(
            Math.random() * (25 - 10)
          ) + 5;
        this.monsterHealth -= attackValue;
        this.attackPlayer();
        this.addLogMessage(
          "player",
          "special-attack",
          attackValue
        );
      },
      healPlayer() {
        const healValue =
          Math.floor(
            Math.random() * (20 - 8)
          ) + 5;
        if (
          this.playerHealth + healValue >
          100
        ) {
          this.playerHealth = 100;
        } else {
          this.playerHealth += healValue;
        }
        this.attackPlayer();
        this.addLogMessage(
        "player",
          "heal",
          healValue
        );
      },
      addLogMessage(who, what, value) {
        this.logMessage.unshift({
          actionby: who,
          actiontype: what,
          actionvalue: value,
        });
      },
    },
    computed: {
      monsterBarstyle() {
        if (this.monsterHealth < 0) {
          return { width: "0%" };
        }
        return {
          width: this.monsterHealth + "%",
        };
      },
      playerBarstyle() {
        if (this.playerHealth < 0) {
          return { width: "0%" };
        }
        return {
          width: this.playerHealth + "%",
        };
      },
      mayUseSpecialAttack() {
        return (
          this.currentRound % 3 !== 0
        );
      },
    },
  });
  
  app.mount("#game");
const app = Vue.createApp({
  data() {
    return {
      monsterHealth: 100,
      playerHealth: 100,
      winner: null,
    };
  },
  watch: {
    monsterHealth(value) {
      if (value === 0) {
      }
    },
  },
  methods: {
    playerAttack() {
      const attack = getRandomNumber(5, 12);
      this.monsterHealth = Math.max(this.monsterHealth - attack, 0);
      this.monsterAttack();
    },
    monsterAttack() {
      const attack = getRandomNumber(8, 15);
      this.playerHealth = Math.max(this.playerHealth - attack, 0);
    },
    specialAttack() {
      const attack = getRandomNumber(10, 25);
      this.monsterHealth = Math.max(this.monsterHealth - attack, 0);
    },
    heal() {
      const healValue = getRandomNumber(8, 20);
      this.playerHealth = Math.min(this.playerHealth + healValue, 100);
      this.monsterAttack();
    },
    surrend() {
      this.winner = "Monster won!";
    },
    newGame() {
      this.monsterHealth = 100;
      this.playerHealth = 100;
      this.winner = null;
    },
  },
});
app.mount("#game");

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

<header>
  <!-- <img
    src="/images/urello_logo.svg"
    alt="Trello"
    class="logo" /> -->

    <div class="container">
      <div class="neon">Urello </div>
    </div>
</header>

<style lang="scss">
  header {
    height: 40px;
    box-sizing: border-box;
    background-color: rgba(black, .4);
    display: flex;
    justify-content: center;
    align-items: center;
    img.logo {
      width: 120px;
    }
  }

  .container {
    display: table-cell;
    text-align: center;
    vertical-align: middle;
  }

  .neon {
    color: #FB4264;
    font-size: 24px;
    line-height: 9vw;
    text-shadow: 0 0 3vw #F40A35;
    outline: 0;
    user-select: none;
  }

  .neon {
    animation: neon 1s ease infinite;
    -moz-animation: neon 1s ease infinite;
    -webkit-animation: neon 1s ease infinite;
  }

  @keyframes neon {
    0%,
    100% {
      text-shadow: 0 0 1vw #FA1C16, 0 0 3vw #FA1C16, 0 0 10vw #FA1C16, 0 0 10vw #FA1C16, 0 0 .4vw #FED128, .5vw .5vw .1vw #806914;
      color: #FED128;
    }
    50% {
      text-shadow: 0 0 .5vw #800E0B, 0 0 1.5vw #800E0B, 0 0 5vw #800E0B, 0 0 5vw #800E0B, 0 0 .2vw #800E0B, .5vw .5vw .1vw #40340A;
      color: #806914;
    }
  }


</style>

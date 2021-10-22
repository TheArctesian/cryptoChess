## TODOS
<h1 style="text-align:center; color: red"> NEED TO SET SOMETHING UP NOW</h1>
<h1 style="text-align:center; color: yellow"> DEADLINE: Dec 30th</h1>


[This is someone who has already done it](https://github.com/JackHeTech/multiplayer-chess-game) - the crypto part
# Frontend
- Theme
  - Clean smooth night city cyberpunk theme : [inspo](https://www.reddit.com/r/Cyberpunk/comments/ecz3yx/cyberchess_3d_animation/)
  - maybe [this](https://www.youtube.com/watch?v=fdtqqyeKRJk) for pages ya fuk using react tho idk
- Pages
  - Home
    - Dir to other functions
    - Leaderboard
      - Show players who have earned the most
      - Show players by win rate 
      - Show players by pool
      - Biggest looser per 100 games
  - Account
    - Connect with website
    - Pick public name
    - Password and google auth 
  - Wallet
    - Put crypto into website
    - Deposit money
    - Look at account Log
  - Contest
    - Look at leader board 
    - Look at upcoming competitions
    - JUST WRITE WORKING IN PROGRESS FOR NOW or first comp is some date
  - Play 
    - Set up absolutes to show the amount
    - Play a game vs Ai 
    - Set up TCP with another player via link
  - Find a game
    - Find a game in your table/league to play in from 0.5USD - 1BTC
    - Or find a random price 
  - Link to github 

# APIS

- Metamask
  - [Docs](https://docs.metamask.io/guide/ethereum-provider.html#table-of-contents) for JavaScript extension to connect their accounts
- Google Auth
  - [Google Auth](https://hackernoon.com/how-to-implement-google-authenticator-two-factor-auth-in-javascript-091wy3vh3)

# Backend
- Crypto
  - Create wallet address for the user 
  - Create holding wallet for game
  - Transfer funds from metamask or deposit
    - Excepted currencies
      - Eth 
      - Bitcoin 
      - Solna
      - Rvn
      - Doge
      - FTM
      - XMR
      - idk what else for now


- Users and stats 
  - Pools 
    - Leauges per coin type
      - Shit (min bet 1USDT worth)
      - Stable(min bet 10USDT)
      - Bronze(min bet 50USDT)
      - Silver(min bet 100USDT)
      - Gold (min bet 500USDT)
      - Master (min bet 1000USDT)
      - GrandMaster (min bet 10,000USDT)
      - BitCoin (min bet 1BTC)
  - Stats 
    - Leaderboard
      - Show players who have earned the most
      - Show players by win rate 
      - Show players by pool
      - Biggest looser per 100 games
    - Personal User Stats
      - Win rate 
      - Earnings 
      - Amount in account 
      - Profile 
      - Username 
      - Advanced analysis of the chess games can be put in later
  - Play
    - Send message to server with user and pool
    - TCP connection between 2 accounts user socket.io or something idk ive only used socket
    - Init new game link
    - Hopefully be able to live stream the people could take bets on the side
    - <p style="color: red;">will probs need to make something that checks if users are using bots</p>
- User
  - Connect via web3
  - Connect via google 
  - Create account with name and password
    - 2FA with google auth or some shit like that
- Website
  - DNS
    - [cryptochess.io](https://hk.godaddy.com/en/domainsearch/find?checkAvail=1&domainToCheck=cryptochess)
  - [GCP](https://cloud.google.com/) because I hate AWS and azure kinda cringe
  - Pobs a bunch of other shit but dc for now
<hr>

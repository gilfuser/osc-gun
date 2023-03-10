# osc-gun
Livecoding Tidal (only, a.t.m.) P2P tool.

***work in progress***

[osc-js](https://github.com/adzialocha/osc-js) is an [Open Sound Control](https://github.com/adzialocha/osc-js) library for JavaScript applications.

[Gun](https://gun.eco)  is a small, easy, and fast protocol for syncing data.

## Editor Agnostic

If you want to be with a friend, or friends, to make a [Tidal](http://tidalcycles.org) session together but you live far away, or you live in São Paulo, you can use great tools like: [Troop](https://github.com/Qirky/Troop), [Flok](https://github.com/munshkr/flok) or [Extramuros](https://github.com/dktr0/extramuros/) and be OK using their coding environment. But what if you have a great Vim or NeoVim config, EMacs, [Pulsar](https://pulsar-edit.dev), or any other editor you enjoy coding with? Well, then try this.

## How To Use This

### (Almost) No Installs

1. Clone this repository

2. If you have Node.js installed in your machine you will only need to install the packages (only two!) in this folder. Open a terminal in the folder and execute:

```
npm install
```
or
```
yarn install
```

3. Start the server:

```
node server
```

4. Open `osc-gun.html` in your browser.

5. Change your Tidal boot file in the superDirtTarget part `oPort = 41234,` and add `oHandshake = False, oSchedule = Live`

6. Start Tidal and have fun.

## Share Code Just-In-Time

You need a shared coding environment, and for that you need another tool.

In NeoVim use [Instant](https://github.com/jbyuki/instant.nvim), which is really great.

* If you which tool to use for another editor, please tell me and I will cite it here.

# The Present

## Warnings

1. This is a proof of concept. It is as minimal as I was able to do. Really just to check if works. And it does!

2. I'm not a professional developer, so, if you like this thing and you feel you could help, even pointing me the most important TODOs (I already know some), please do it! I'm all eyes and ears.

# The future

## TODOs

1. Probably the next thing to do is to create channels secured by passwords. In that way more people can use this at the same time.

2. Next to it is to generalize it. Make it possible to be used for livecoding with Strudel, FoxDot, SuperCollider, etc

# Help!

I think this can be a great tool for network music. But:

1. I'm not a professional developer and I have little spare time to dedicate to this between studying and trying to pay the bills.

2. Clearly I need help.

### Be invited to participate anyway you can.

That's all for now.

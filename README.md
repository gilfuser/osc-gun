# osc-gun
Livecoding Tidal (only a.t.m.) P2P tool.

***work in progress***

[OSC](https://ccrma.stanford.edu/groups/osc/index.html) is Open Sound Control. If you are here for a reason you already know that.

[Gun](https://gun.eco) is a P2P... web thing (this is my poor understanding of it). It allows remote computers to connect with each other without a server in between. OK, there is a server, but is only used to do the handshaking between peers.

## Editor Agnostic

If you want to be with a friend, or friends, to make a [Tidal](http://tidalcycles.org) session together but you live far away, or you live in São Paulo, you can use great tools like: [Troop](https://github.com/Qirky/Troop), [Flok](https://github.com/munshkr/flok) or [Extramuros](https://github.com/dktr0/extramuros/) and be OK using their coding environment. But what if you have a great Vim or NeoVim config, EMacs, [Pulsar](https://pulsar-edit.dev){:target="_blank" rel="noopener"}, or any other editor you enjoy coding with? Well, then try this.

## How To Use This

### (Almost) No Installs

1. Clone this repository

2. If you have Node.js installed in your machine you will only need to install the packages (only two!) in this folder. Open a terminal in the folder and execute:

```
npm install
```
or
```
yarn add
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

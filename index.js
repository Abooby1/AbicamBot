import { Client } from "photop-client";
import { onChat } from "./commands_entry.js";
import { START, PREFIX } from "./constants.js";

const client = new Client({ username: "AbicamBot", password: process.env['Pass'] }, { logSocketMessages: false });

const noop = () => { };

client.onPost = async (post) => {
  if (post.text.match(START)) {
    setTimeout(function( ) {
      post.chat(`Say ${PREFIX}help to get a list of commands. (Make sure to use ab!rules!)`)
    }, 2000)
  }

  if (post.text.match("$connect")) {
    post.connect()
  }

  const resetTimeout = await post.connect(60000, () => {
    post.onChat = noop; //replace post.onChat to free up memory
    if (post.text.match("!startab")) {
      post.chat("AbicamBot has disconnected... Reason: inactivity")
    }
  })
  post.onChat = (chat) => {
    resetTimeout();
    onChat(client, chat);
  }
  if (post.author.id == "61d7c2bb17f63f50a3f6ee5c") {
    const text = [
      "cringe",
      "Cringest post in all of Photop 💀",
      "This post = cringe",
      "Cringy",
      "Cringe is taking over"
    ]
    post.chat(text[Math.floor(Math.random() * text.length)])
  } else {
    if (post.text.match("!startab")) {
      if (post.author.id == "61998d154ef0457408274fd6") {
        post.chat("mcflurri coming right up!")
      }
      if (post.author.id == "61b4520e4ea86c6fe9800c3b") {
        post.chat("Hello Sockbot creator! 😶‍🌫️")
      }
      if (post.author.id == "60bd0243edf9d8003785ad79") {
        post.chat("HMMMMMMMMMM, wut are you doing here?")
      }
      if (post.author.id == "6066b99198895e660082965b") {
        post.chat("Hello creator of Photop!")
      }
      if (post.author.id == "6154f0d0a8d6d106c5b869b6") {
        post.chat("Hello my king!")
      }
    }
  }
}

client.onReady = () => {
  console.log("AbicamBot is ready!")
  //client.post("AbicamBot is up and running! Use !startab to connect AbicamBot!")
}

import express from "express"
const app = express();

app.get('/', (req, res) => res.send("Running!"))
app.listen(3000);

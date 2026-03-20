// console.log("Backend course and backend development");

require('dotenv').config()
const express = require('express')
// import express from 'express';
const app = express()
const port = 3000

const githubData = {
  "login": "shayanrizwan20",
  "id": 191841885,
  "node_id": "U_kgDOC29GXQ",
  "avatar_url": "https://avatars.githubusercontent.com/u/191841885?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/shayanrizwan20",
  "html_url": "https://github.com/shayanrizwan20",
  "followers_url": "https://api.github.com/users/shayanrizwan20/followers",
  "following_url": "https://api.github.com/users/shayanrizwan20/following{/other_user}",
  "gists_url": "https://api.github.com/users/shayanrizwan20/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/shayanrizwan20/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/shayanrizwan20/subscriptions",
  "organizations_url": "https://api.github.com/users/shayanrizwan20/orgs",
  "repos_url": "https://api.github.com/users/shayanrizwan20/repos",
  "events_url": "https://api.github.com/users/shayanrizwan20/events{/privacy}",
  "received_events_url": "https://api.github.com/users/shayanrizwan20/received_events",
  "type": "User",
  "user_view_type": "public",
  "site_admin": false,
  "name": "ShayanRizwan",
  "company": null,
  "blog": "",
  "location": null,
  "email": null,
  "hireable": null,
  "bio": null,
  "twitter_username": null,
  "public_repos": 20,
  "public_gists": 0,
  "followers": 0,
  "following": 0,
  "created_at": "2024-12-16T08:12:15Z",
  "updated_at": "2025-11-19T13:07:33Z"
}

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter', (req, res) => {
    res.send('shayantwittercom')
})

app.get('/Login', (req, res) => {
    res.send('<h1>please login or Signup to continue</h1>')
})

app.get('/facebook', (req, res) => {
    res.send('shayan aur frontend and learning backend going forward to fullstack developer')
})

app.get('/github', (req, res) => {
    res.json(githubData)
})

// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`)
// })

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})

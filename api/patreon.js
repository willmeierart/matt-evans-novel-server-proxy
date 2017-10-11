const express = require('express')
const router = express.Router()
require('dotenv').config()
const fetch = require('node-fetch')

const API_URL = process.env.API_URL

router.get('/', function(req, res) {
  function fetchData(){
    return fetch(API_URL)
    .then((res)=>{
      return res.json().then((json)=> json)
    })
  }
  fetchData().then(json=>{
    return res.json(json)})
  .catch(err=>console.log(err))
})

module.exports = router


var url = require('url')
var patreon = require('patreon')
var patreonAPI = patreon.default
var patreonOAuth = patreon.oauth

// Use the client id and secret you received when setting up your OAuth account
var CLIENT_ID = 'pppp'
var CLIENT_SECRET = 'pppp'
var patreonOAuthClient = patreonOAuth(CLIENT_ID, CLIENT_SECRET)

// // This should be one of the fully qualified redirect_uri you used when setting up your oauth account
// var redirectURL = 'http://mypatreonapp.com/oauth/redirect'
// 
// function handleOAuthRedirectRequest(request, response) {
//     var oauthGrantCode = url.parse(request.url, true).query.code
//
//     patreonOAuthClient.getTokens(oauthGrantCode, redirectURL, function (tokensError, tokens) {
//         var patreonAPIClient = patreonAPI(tokens.access_token)
//
//         patreonAPIClient(`/current_user`, function (currentUserError, apiResponse) {
//             if (currentUserError) {
//                 console.error(currentUserError)
//                 response.end(currentUserError)
//             }
//
//             response.end(apiResponse)
//         })
//     })
// }

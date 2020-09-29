//Made by Tuhin
//Visit https://tu.hin.life
//Contact me@mailtuhin.ml


const cron = require('node-cron');
const fs = require('fs');
const express = require('express');
const { google } = require('googleapis')
const app = express();
const youtube = google.youtube('v3');
const settings = require('./settings');
const TOKEN_DIR = __dirname + '/.credentials/';
const TOKEN_PATH = TOKEN_DIR + 'topsecret.json';
const videoid = settings.videoID;

// Go to line 62 & 64 and change title and description

// Cron (Update in every 2 minutes)
cron.schedule('*/2 * * * *', function() {
    authorize(getChannel);
});

// Authorization
function authorize(callback) {
    const clientSecret = settings.clientSecret;
    const clientId = settings.clientId;
    var redirectUrl = 'https://authcode.netlify.app';
    var OAuth2 = google.auth.OAuth2;
    var oauth2Client = new OAuth2(clientId, clientSecret, redirectUrl);

    // Check token is exists
    fs.readFile(TOKEN_PATH, function(err, token) {
        if (err) {
            console.log("No token Found. Generate one by running 'node token.js'");
        } else {
            oauth2Client.credentials = JSON.parse(token);
            callback(oauth2Client);
        }
    });
}

function getChannel(auth) {
    // Fetching details
    youtube.videos.list({
        auth: auth,
        id: videoid,
        part: 'snippet,statistics',
    }, function(err, result) {
        if (err) {
            console.log("Sorry that's an error. It says: " + err);
            return;
        } else {
            var resultone = result.data.items[0];
            var views = resultone.statistics.viewCount;
            var likes = resultone.statistics.likeCount;
            var comments = resultone.statistics.commentCount;
            var category = resultone.snippet.categoryId;
            var description = resultone.snippet.localized.description;

            // Set Title & Description
            var newTitle = "This Video Got " + views + " views, " + likes + " Likes & " + comments + " Comments";
            // If you want to change description also then change that
            var newDescription = description;

            // Update process
            youtube.videos.update({
                    auth: auth,
                    part: "snippet",
                    resource: {
                        id: videoid,
                        snippet: {
                            "title": newTitle,
                            "categoryId": category,
                            "description": newDescription
                        }
                    }
                },
                (err) => {
                    if (err) {
                        console.log("Sorry got an error while updating it. it says " + err)
                        return
                    } else {
                        console.log("Updated")
                    }
                }
            )
        }
    })
}

app.listen(process.env.PORT || 8080, () => {
    console.log('Listening')
})
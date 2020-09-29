## Realtime YouTube video's statistics in video's Title & Description

### Features 
- Free
- Open Sourced
- Secured
- Cool
- Easy to Deploy

### Deploy 
**Read steps carefully 😎**

- Open [GCP](https://console.cloud.google.com/ "GCP") Create a Project & Go To it's <tt>APIs & Services</tt> .
- Press <tt>Library</tt> &  Search  <tt>Youtube data api</tt>.
- You will see  <tt>YouTube Data API v3</tt> , enable that.
- Go To <tt>APIs & Services</tt> again.
- Press  <tt>OAuth consent screen</tt>.
- Make it  <tt>External</tt> & hit create button.
- Just give a Application Name and hit  <tt>Save</tt>.
- Press crediantials in left menu.
- Press Create <tt>Crediantials</tt> & <tt>OAuth client ID</tt>.
- Select  <tt>Web Application</tt>.
- (Optional) Change the Name.
- In <tt>Authorized redirect URIs</tt> hit <tt>➕ ADD URI</tt>.
- The URI is <tt>https://authcode.netlify.app</tt> (Don't Change IT).
- You will get a <tt>Client ID</tt> & <tt>Client Secret</tt>.

**Hard part is done now deploy it 😪**

- Need a VPS (Not tested in Heroku).
- Clone the repo.

```bash
git clone https://github.com/cachecleanerjeet/realtime-video-statistics-in-video-title.git
```

- Goto the directory.

```bash
cd realtime-video-statistics-in-video-title
```

- Install the Dependencies.

```bash
npm install
```

- Open <tt>settings.js</tt> & add your <tt>clientSecret</tt> , <tt>clientId</tt> &  <tt>videoID</tt>.
- Open <tt>index.js</tt> & go to line <tt>62</tt> & <tt>64</tt> and customize title and description.
- Run <tt>token.js</tt> to configure token.

```bash
node token.js
```

- It will give you a url open that and select your youtube account.
- After give access you will redirect to <tt>https://authcode.netlify.app</tt> here copy the code and paste it on terminal.
- Now you will see there is a file called <tt>.credentials</tt> created & contains a <tt>topsecret.json</tt>.
- Whenever you newly generate the token you have to remove <tt>.credentials</tt> directory.
- Now run the code.

```bash
node index.js
```

- To run it after shell closed.

```bash
npm install forever -g
forever start index.js
```

**Now your video's Title & Description will update in every 2 minutes.**

### Credits
[YouTube Api Sample](https://github.com/youtube/api-samples/blob/07263305b59a7c3275bc7e925f9ce6cabf774022/javascript/nodejs-quickstart.js "YouTube Api Sample")

## Star this Repo if you Liked it ⭐⭐⭐

<br><br>
<p align="center"> <b>My Website & Social</b></p>
<br>
<p align="center">
 
 <a href="https://tu.hin.life">
    <img alt="Website" width="30px" src="https://firebasestorage.googleapis.com/v0/b/webtuhin.appspot.com/o/githubstatic%2Fwebsite.svg?alt=media&token=5c3ea7e0-d4f7-4566-b78a-bdee6c65f03e" />
  </a>  
..
<a href="https://fb.me/jeeetpaul">
    <img alt="Facebook" width="30px" src="https://cdn.jsdelivr.net/npm/simple-icons@3.2.0/icons/facebook.svg" />
  </a>  
..
  <a href="https://www.instagram.com/jeeetpaul">
    <img alt="Instagram" width="30px" src="https://cdn.jsdelivr.net/npm/simple-icons@3.2.0/icons/instagram.svg" />
  </a>
..
  <a href="https://www.youtube.com/channel/UCa4FMtLpYcOBtjKOZgzTFNA">
    <img alt="YouTube" width="30px" src="https://cdn.jsdelivr.net/npm/simple-icons@3.2.0/icons/youtube.svg" />
  </a>
..
  <a href="https://blog.iamtuhin.ga">
    <img alt="Blogger" width="30px" src="https://cdn.jsdelivr.net/npm/simple-icons@3.2.0/icons/blogger.svg" />
  </a>
  
</p>




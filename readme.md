# **YouTube Music Clone**
This backend application serves mp4 files as streams to the frontend process it on demand, without lag and blocking the server.

## Installation
Run these commands on your terminal:

```
$ git clone https://github.com/fredowisk/YoutubeMusic-Backend.git
$ cd YoutubeMusic-Backend
$ npm install
```

## Usage
1. Run this command on your terminal:

```
$ npm start
```
2. To get all songs call the route /songs.
3. To get a specific song call the route /song with the request param ?watch='insert the song id here'

## Contributing
How to contribute to the project:

1. Fork the project
2. Create a new branch (git checkout -b my-new-feature)
3. Make changes and commit (git commit -am 'Add some feature')
4. Push to the branch (git push origin my-new-feature)
5. Create new pull request

## Build With
* NodeJS
* TypeScript
* Standard Javascript Style
* Rimraf
* Module-Alias

## Credits
All credits to [NCS YouTube channel](https://www.youtube.com/@NoCopyrightSounds), for providing musics without copyright.

## License
This project is licensed under the MIT License - see the [LICENSE.md](./license.md) file for details.
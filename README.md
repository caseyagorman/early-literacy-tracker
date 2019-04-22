# TrackIt!, the early literacy tracker

TrackIt! is a webapp designed to help teachers test and tracker their students' progress in letter, sound, and high frequency word acquisition.

TrackIt uses a Flask server, React-Redux frontend, and PostgreSQL database.  


## Getting Started

### Prerequisites
npm: https://www.npmjs.com/get-npm
python: https://www.python.org/downloads/

### Installing
Installing and running backend server
If first time using:
```
cd env
vagrant init
cd ..
bash devtools.sh

```
If not first time:
```
bash devtools.sh
cd src/server
bash server-setup.sh
```
Installing and running frontend server
In new tab or terminal:
```
early-literacy-tracker/src/client
npm install
npm start
```


## Authors

* **Casey Gorman**

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

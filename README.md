# Clicky Game

What does this app do?
The user is presented with a screen with twelve images (in my app, these are screenshots of the alphabet from "A" to "L") and prompted to click on an image to earn a point. As long as the user doesn't click the same image twice, the score keeps increasing. With every click, the displayed image order is shuffled so that it is hard to remember whether one clicked an image or not. If the user clicks on the same image twice, their score is reset back to zero, but their top score is retained in the navigation bar. 


Technologies used:
* React = JavaScript library for building user interface
* Node = JavaScript runtime environment
* npm = package manager for Node, in particular 'create-react-app'


How is this app useful?
React is the front-end JavaScript library du jour so it is advantageous from a employability perspective to know the latest and most popular technologies. It was helpful to learn how the folder structure works within React. For this app, there is a images.json file that holds an array of objects with information about each image that will be displayed on the page. Each of these 12 images have an id, name and file path (which leads back to the public/img folder). This array as well as each of the other components (Header, NavBar, Wrapper and ImageCard) are all imported into the App.js file where they are rendered.


What was challenging while building this app?
In preparation for the final project, I saw the need to be able to use the stored images in the app with React (instead of website URLs that were in the project example). It took a bit to realize where to put the PNG files of the images (tried both at the same level as the README and the src folder) but it seems to work when placed in the public folder. Also for deployment to GitHub pages, the images didn't show up initially because the file paths in the images.json had a .PNG extension (instead of lowercase .png).

Future directions:
There isn't a message that tells the user what the maximum possible score is so it would be good to put that in the directions or have a 'congratulations' modal open up when the user reaches the maximum score. I also should change the images to something that is a little more visually interesting. I chose the alphabet because it's very clear to me about what the original order of the array is and whether the images shuffled properly while coding. Now that the app is functional, it should be safe to switch in nonsensical images that have no natural order to them.

---


This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment






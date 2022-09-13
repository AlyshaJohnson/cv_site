# My CV

Purpose: An online cv of the site-owner.

Aim: The aim is to communicate to the user the skills, competancies, work/education history of the site owner.

![Responsive Mockup](assets/images/readme/responsive_mockup.jpeg)

The live link can be found here - https://alyshajohnson.github.io/cv_site/

## 1. Design and Development

This project was part of an activity through codeinstitute to make an online CV using bootstrap, therefore the standard use of the 5 pillar model has not been used. However, some elements were used to enhance the project and make it tailored to the individual it is intended for (i.e. ME!).

**Skeleton**

Some skeleton models were drawn up to understand the layout of the grid system in bootstrap.

Mobile:

![Mobile Wireframe](./assets/images/readme/wireframe-mobile.jpeg)

Desktop:

![Desktop Wireframe](./assets/images/readme/wireframe-desktop.jpeg)

## 2. Technologies used

Several technologies were used to aid the project:

- [HTML](https://developer.mozilla.org/en-US/docs/Web/HTML)
- Used as the basic building block for the project and to structure the content.
- [CSS](https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/CSS_basics)
- Used to style all the web content across the project. 
- [Google Fonts](https://fonts.google.com/)
- Used to obtain the fonts in website
- [Font Awesome](https://fontawesome.com/)
- Used to obtain the icons used throughout website.
- [GitHub](https://github.com/)
- Used to store code for the project after being pushed.
- [Git](https://git-scm.com/)
- Used for version control by utilising the Gitpod terminal to commit to Git and Push to GitHub.
- [Gitpod](https://www.gitpod.io/)
- Used as the development environment.
- [Colormind](http://colormind.io/)
- Used to determine colour palette throughout website.
- [Tiny.png](https://tinypng.com/)
- Used to compress my images so that the page would load faster.
- [Techsini](http://techsini.com/multi-mockup/index.php)
- Used to generate multi-device mockup.
- [Freeformatter CSS Beautify](https://www.freeformatter.com/css-beautifier.html)
- Used to accurately format CSS code.
- [Freeformatter HTML Formatter](https://www.freeformatter.com/html-formatter.html)
- Used to accurately format HTML code.
- [EmailJS](https://www.emailjs.com/)
- EmailJS is the API used to send an email to the site owner when the form is submitted.
- [Python](https://www.python.org/)
- Python is the core programming language used to write all of the code in this game to make it fully functional.

## 3. Features

### 3.1 Existing Features

The features deployed for this quiz are as follows:

- Consistent header detailing across all pages
- Nav bar with links to all pages
- Consistent footer detailing social media links and link to download cv.
- Homepage providing contact information, ask and introduction.
- Resume page with timeline for education and work history
- Portfolio page with carousel of public projects
- Interests page to show interests and hobbies
- Contact page with form connected to an API which sends form information to site owner.

### 3.2 Future Features

In addition to the features deployed, some features that could be deployed in a future release are:
- Use Flask frameworks to reduce duplicate HTML code.

## 4. Testing

### 4.1 Initial Developer Testing

As the project was developed and coded, developer testing was conducted to reduce the impact of bugs and errors in the code. This testing consisted of general debugging of written code based off gitpod IDE recommendations; running through input validator testing scenarios to check for input errors; and testing on different browsers.

The development of this app was conducted on Google Chrome, therefore extensive testing was conducted on this browser. This was used as a benchmark against Firefox and Safari.

The elements of testing conducted on each browser are:
- User Experience - what does the site look like; is the flow through the site the same; are all elements where they are expected?
- Functionality - do the buttons work as expected; does the cv link work; does an email send when the form is submitted?
- Performance - how responsive is the site?

The user experience is consistent on Chrome, Firefox and Safari.

### 4.2 Validator Testing

Using tools such as W3C validator, Jigsaw and Lighthouse gives visibility of any code, scripts or elements that are causing any errors. The results for the site are as follows:

**HTML**
- 0 errors were returned when passing any html file through the official [W3C validator](<https://validator.w3.org/nu/#textarea>)

**CSS**
- 0 errors were found when passing style.css through the official [(Jigsaw) validator](https://jigsaw.w3.org/css-validator/validator)

**JS**
- [JSHint](https://jshint.com/) was used to check for errors in the JS code.
- For sendEmail.js, there were 0 errors and 8 warnings.

**Performance**
- Results can be seen through the official [Lighthouse](https://googlechrome.github.io/lighthouse/viewer/?psiurl=https%3A%2F%2Falyshajohnson.github.io%2Fcv_site%2Findex.html&strategy=mobile&category=performance&category=accessibility&category=best-practices&category=seo&category=pwa&utm_source=lh-chrome-ext) report.

As part of the performance test through Lighthouse, some changes were made:
- Accessibility (aria-label) tags were implemented on all buttons, links and images to improve the score from 92 to 96.
- The image file sizes needed to be compressed so reduce the impact on performance. This was successfully done using [tinyPNG](https://tinypng.com/).

### 4.3 User Testing
This app has been tested by a small group of 10 users in which some feedback was captured in the design and some errors in functionality and spelling were corrected.

UI improvements made:
- Having the GitHub link available on mobile devices
- "(in training)" text in header on spearate lines

## 5. Deployment

This website was deployed using GitPages and following the below steps:

GitHub pages deployment
1. Log in to GitHub
2. In the Repository section, select the project repository that you want to deploy
3. In the menu located at the top of this section, click 'Settings'
4. Select 'Pages' on the left-hand menu - this is around halfway down
5. In the source section, select branch 'Master' and save
6. The page is then given a site URL which will be seen above the source section, it will look like the following:

![](./assets/images/readme/github_deployment.jpeg)

Please note it can take a while for this link to become fully active.

Forking the GitHub Repository
To make changes to this repository without affecting it, a copy can be made by 'Forking' it. This ensures the original repository remains unchanged.
1. Find the relevant GitHub repository
2. In the top right corner of the page, click the Fork button (under account)
3. The repository has now been 'Forked' and you have a copy to work on

Cloning the GitHub Repository
Cloning a repository will allow a local version of the repository will be downloaded so can be worked on. Cloning is also a great way to backup work.
1. Find the relevant GitHub repository
2. Press the arrow on the Code button
3. Copy the link that is shown in the drop-down
4. Now open Gitpod & select the directory location
5. In the terminal type 'git clone' & then paste the link copied from GitHub
6. Press enter and a local clone will be created.

## 6. Credits

### 6.1 Content

Logos and Fonts:
- The fonts were taken from [GoogleFonts](https://fonts.google.com/)
- The icons in the footer were taken from [Font Awesome](https://fontawesome.com/)

Tutorials and support:
- General guidance, information and limitations on elements, attributes, and methods from [w3schools](https://www.w3schools.com/default.asp) and [MDN Web Docs](https://developer.mozilla.org/en-US/)
- The website was created alongside the tutorial videos and github repository by [Code Institute Solutions](https://github.com/Code-Institute-Solutions/resume-miniproject-bootstrap4).

### 6.2 Media

All media used on this site was taken and owned by the developer.

### 6.3 Special Thanks

Special thanks goes to those to help test the site and fedback issues.

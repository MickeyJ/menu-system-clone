Frontify Menu System CLone
==========================
 - create robust menu system
 - intuitive, smooth interactivity
 - cross-browser/mobile friendly
 - reusable and maintainable code
 
__Live Demo at__ [ ux-homework.herokuapp.com](https://ux-homework.herokuapp.com/)


Install everything and start Webpack Dev Server 
```bash
$ npm i && npm run dev
```

You may need to install Webpack globally...
```bash
$ npm i -g webpack webpack-dev-server 
```

There are also a few component test you can run. 
```bash  
$ npm test  
```

Make the bundle. 
```bash  
$ npm run build  
```
 
###Spec Feedback
            At first glance it wasn't 100% clear to me how the menu would be interactive. Once I 
        referenced the Frontify website it became clear that menu tabs could drop down on hover. 
        Another photo displaying this or a brief description of the dynamics would be helpful.

###Approach/Process
            I prefer writing React, so naturally that was my tool of choice. I chose Webpack for 
        bundling, mostly for the development server and react hot module reloading, but also 
        because it’s easy to include scss and other libraries/frameworks. React and Webpack are 
        just two peas in a pod.
        
            Once the environment was set up, my first goal was to build components for commonly 
        used elements: button, menu tab, link. Simultaneously I wrote the associated styling. 
        Initially I went with a pod style file system, keeping each scss file in the same directory 
        as it’s React compandre and importing it directly. While this is great for small/personal 
        projects, I’m not sure it’s always appropriate for large scale applications. 

            Next I created scss color scheme variables and classes for text and backgrounds. With 
        these materials I could start experimenting and putting them to use.
                    
            After setting up a layout container I started with the header: logo image, links, menu 
        toggle. I made the menu toggle a button with distinct style and interactivity to demonstrate 
        button reusability. Once the header content was functional and placed appropriately I made 
        sure it was responsive.       
        
            Next came the menu container. First, I positioned the menu tabs and nested sub links/buttons 
        accordingly. Then I set the sub links to display and the tabs line-height to animate on hover. 
        I noticed that on mouse leave the height of each tab bounced up before animating back down to 
        its initial height. At first I wasn’t sure about this, but I actually like how it bounces. 
        At least I don’t its jarring. Once the menu tab interactivity was to my liking, I went on to 
        toggle the entire menu.        
        
            I referenced the Frontify website and thought that toggling the menu could be more smooth and 
        animated. In the past I’ve mostly used 3rd party tools for dropdown menus, but decided to go 
        with pure javascript and css this time. First, I tried animating the ‘top’ position, but found 
        that changing the ‘margin-top’ was more responsive. This worked pretty well, but before going 
        any further I set up the main content background fading. Syncing these up took a bit of trial 
        and error. Ultimately I used setTimeout in order to toggle the display of each 
        element without disrupting the animation. In order to get the right effect across browsers I 
        had to tweak the timing a little bit. Apparently Firefox needs an extra 30 milliseconds to 
        process the css transitions. Unfortunately I have no access to I.E., so it’s a mystery if that 
        works correctly. Once the menu toggled as desired, I made sure it was also responsive.         
        
            For use on tablets, I simply shrunk the font size and that did the trick. On mobile 
        phones I set the menu items to display as blocks and also to display their sub links by default. 
        This works well and provides a good experience, but the dropdown animation doesn’t translate 
        on phones positioned vertically. Since the menu height is drastically different, most 
        of the animation is not seen. It kind of looks like a really fast animation or popup, depending 
        on the user scroll position when menu resets. I tried a few alternatives for vertically positioned 
        phones but came to the conclusion that it might be easier to make a second menu for mobile. 
        Before diving into this I checked out Frontify on my iPhone and realized that their mobile menu 
        system experience is quite unpleasant, glitchy, and pretty much unusable in a horizontal position. 
        With that experience I figured that any responsive improvement would do wonders.
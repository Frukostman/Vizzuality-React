# Vizzuality Front End challenge by Santiago Homps

# Description:
This app has been done 100% with React and plain CSS. I also used the context API as a way to send some data upstream but no other dependencies were installed or used. 
The data is fetched in the form container where each category is sent as a prop to the corresponding fieldset component. All the components share the Legend tag, where the title is displayed, and the visibility and control icons. The buttons are set all in the same component and each one displays a different SVG where the route is defined by a prop sent by the parent element. The functionality of the buttons is defined in the appContext which then is provided to all the elements that require it. 


# Some challenges that I faced were:
. The decision of making all the buttons an individual component that got called in every fieldset/legend was time consuming because then I had to make functions to compare the button´s id that was being pressed with the content´s id I wanted to hide/display. Luckily after several hours I solved it but maybe it was not the best alternative to do this. 
. With a little more time I could have used SASS to organize better my stylesheets and even make the app responsive. 
. I also struggled with the fieldset and legend tags, which I had never used and that have some constraints when applying styles to them. 
. Another issue was coloring the SVG from the JSX file instead of modifying the fill property.

# Santiago Homps - 2/1/2022
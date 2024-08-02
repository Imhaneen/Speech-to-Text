# Speech to Text 
**********
## About this program
****
This program is a web page that converts speech to text and display it on the page using the Web Speech API. It also contains a button to start speech recognition and a menu to choose the language.
*****
## Simple Explanation
*****
### HTML 
******
HTML provides the fundamental structure of the web page.
It organizes and places elements in a way that can be designed using CSS and made interactive using JavaScript. Without HTML, there would be no basic elements to build the user interface of a web page.
******

### CSS Styling
****
- General Styles: Specify the font, text background color, and text alignment.
- Format box: Specifies the content center, background color, shadow, and rounded corners.
- Button and selection formatting: Format the background colors and borders. The button also has a hover effect for better user interaction.
- Result display: Specifies the formatting in terms of borders, padding, and background color for the text area in which the text is displayed.
  ******

  
  ### JavaScript Functionality
  *****
  
  The JavaScript handles the speech recognition logic,  including stopping, starting and updating based on language changes.
  *****
  - Create Recognition Instance: Initializes webkitSpeechRecognition, sets it to continuous, and specifies language.
  - Check for Speech Recognition Support: Checks if webkitSpeechRecognition is available in the browser.
  - onstart: Updates button text and disables it when listening starts.
  - onend: Resets the button text and state when listening stops.
  - onerror: Handles errors and resets the button text and state.
  - onresult: Updates the resultDiv with the transcribed text.
****
# Image of the web page

<img width="1280" alt="‏لقطة الشاشة ١٤٤٦-٠١-٢٧ في ٣ ٥٥ ٣٤ ص" src="https://github.com/user-attachments/assets/e76a9ac2-281b-4f02-8dc0-c96b50900b67">

******
<img width="1280" alt="‏لقطة الشاشة ١٤٤٦-٠١-٢٨ في ١ ٣٣ ١١ ص" src="https://github.com/user-attachments/assets/4e0530d9-fc02-493a-a849-1f68fba6aee7">

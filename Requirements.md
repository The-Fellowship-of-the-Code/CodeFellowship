Vision
What is the vision of this product?
The vision for this product is to use AI to generate a custom bedtime story. 
The user will have access to all their created stories and be able to add a journal log (reflection) and delete features.

What pain point does this project solve?
To those that have trouble with their dreams, our project assists users in creating their dream right before their sleep. 
The AI creates a story from the user’s input. With the story fresh in their mind, the user will then start to dream from the created story that was generated.

Why should we care about your product?
Sleep is a huge challenge for many adults. 
This can be a result of stress, anxiety, and more screentime at night. 
This product aims to give these people a way to interface with technology in a way which is conducive to sleeping by listening to a story that will keep the mind on the path to slumber.

Scope (In/Out)
IN - What will your product do
Describe the individual features that your product will do.
High overview of each. Only need to list 4-5
The website will generate a bedtime story for users.
The website will allow users to save a story.
The website will allow users to update the story to add a note.
The website will allow users to delete a story.

The website will not provide medical advice. 
The website will not serve as a replacement to proper sleep hygeine. 

What will your MVP functionality be?
MVP functionality is using the form as request body information that gets plugged into a prompt. 
The prompt is sent as a request to the AI API. 
The AI API will return a story based on the prompt parameters and the story will be displayed back to the user on the site through the use of an accordion component.

What are your stretch goals?
Hamburger icons
Play button, pause button
Timestamp: number
Privacy: boolean

Stretch
What stretch goals are you going to aim for?
As a team, we want to implement a feature that will take the story that was generated and read it out to the users. 
From there, the users will have the ability to click a button to play the audio and have it read to them.

Functional Requirements:
An admin can create and delete user accounts
A user can generate AI stories
A user can update, save, or delete user stories

Data Flow
New story button, modal, blank form, labeled fields, generative AI, submit, servers makes axios call to AI API, Axios returns data/story, map through data extract story title, ID, text content, display in accordion, update/delete based on ID

Non-functional requirements 
The about us page is going to be non-functional requirement. 
It will display web developer information in a visually appealing manner. 
This is important for the developers to be able to showcase their work as they look forward to employment opportunities in the industry.
Display and styling will be another non-funcitonal requirement, this will enhance user experience and assist in accessbility for users. 



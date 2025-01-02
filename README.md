Profile Page with GSAP Animations
This project is a personal profile page built with React. It features sections such as About, Skills, Additional Interests, Curriculum Vitae (CV), Testimonials, and a Contact Form. GSAP (GreenSock Animation Platform) is used for smooth and dynamic animations throughout the page. Additionally, a Google Map is integrated to display the user's location and send the map address via the contact form.

Features
Accordion for About & Skills Sections: Interactive collapsible sections to display information about yourself and your skills.

Additional Interests Section: Display extra information about your hobbies or side projects.

Testimonials Section: Display testimonials or reviews from others.

Contact Form: Includes fields for users to get in touch with you, integrated with Google Maps to show a location address.

GSAP Animations: Animations are applied to various sections for a smoother, more engaging user experience.

#Clone the Project

https://github.com/ajayKammar1/Profile_Task.git

#Install Dependencies

# cd profile

# npm install

# Running the React Development Server

npm run dev

# Running the JSON Server (for Data Simulation)

CORS Issue Fix
If you experience any CORS issues due to APIs hosted on a different port,
you can use the provided mock data stored in the JSON server to avoid such
conflicts. The React app will be able to fetch the data locally.

# npm run db

#Key Technologies Used

React: A JavaScript library for building user interfaces.

GSAP: GreenSock Animation Platform for smooth animations.

JSON Server: A fake REST API used for local development to mock the backend API.

Google Maps: Integrated to show the user's location on a map.

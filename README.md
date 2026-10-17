## PORTMAKER

## GROUP MEMBERS:
- ALQUIZOLA OSCIAN KEY
- APROVECHADO, KELSIE
- BACALSO, MARCO
- PELONIO, GEORGE B. JR.
- QUIRONG, EDWIN GABRIEL PEREZ
- VILLANUEVA, RAVIN KAYE

## Published Website
https://portmaker.netlify.app/
## Project Description
Portmaker is a web-based portfolio builder that allows users to create and customize their own professional portfolios.Users enter their personal information, education, skills, projects, work experience and links, save everything to an online database, choose one of three portfolio templates, and generate a portfolio page. Saved portfolios can be viewed, edited and deleted from the Manage page.
## Features
- Create a portfolio with a profile picture, contact details, About Me, education, skills, projects, work experience, and social media/website links.
- Save portfolio data to an online database so it remains available after refreshing the page.
- Choose from three templates with different designs: Simple, Modern, and Creative.
- Preview and generate a portfolio using saved data.
- Manage portfolios by viewing, editing, and deleting them.
- Responsive layout for desktop and mobile devices.
## Technologies Used
- HTML, CSS and JavaScript
- Supabase
- Google Fonts (DM Sans, Lora, Space Grotesk)
## Database Platform
- Database: Supabase
- Database Project: portfolios
## Hosting / Deployment Platform
- Hosting: Netlify
## Database Structure

### Table: `portfolios`

| Column | Type | Description |
|---|---|---|
| id | uuid (primary key) | Unique ID, generated automatically |
| created_at | timestamptz | Date and time created |
| full_name | text (required) | Full name |
| email | text | Email address |
| phone | text | Contact number |
| address | text | Address |
| about | text | About me |
| photo_url | text | Profile picture (resized and stored as an image data URL) |
| skills | jsonb | List of skills |
| education | jsonb | List of school, degree and years |
| projects | jsonb | List of title, description and link |
| experience | jsonb | List of role, company, years and description |
| links | jsonb | List of social media / website links |



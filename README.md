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

### Table: `portmaker`

| Column | Type | Description |
|---|---|---|
| id | uuid (primary key) | Unique ID, generated automatically |
| created_at | timestamptz | Date and time created |
| full_name | text (required) | Full name |
| email | text | Email address |
| phone | text | Contact number |
| address | text | Address |
| about | text | About me |
| photo_url | text | Profile picture |
| skills | jsonb | List of skills |
| education | jsonb | List of school, degree and years |
| projects | jsonb | List of title, description and link |
| experience | jsonb | List of role, company, years and description |
| links | jsonb | List of social media / website links |
## Project Structure
PortMaker

```text
PortMaker/
├── css/
├── js/
│   ├── create.js
│   ├── manage.js
│   ├── preview.js
│   ├── supabase.js
│   └── templates.js
├── create.html
├── index.html
├── manage.html
├── preview.html
└── templates.html
```

## Screenshot of the System
- Homepage
  <img width="1893" height="898" alt="image" src="https://github.com/user-attachments/assets/1d66b3f0-c12e-4f1a-b79d-d04ffb87f346" />
- Create portfolio (personal information)
  <img width="1857" height="891" alt="image" src="https://github.com/user-attachments/assets/4999b32d-e31f-4243-8ad9-77c1400c607d" />
- Template Choices
  <img width="1865" height="825" alt="image" src="https://github.com/user-attachments/assets/0a326b7b-602c-4744-9a54-3b29876dac1b" />
- Manage Portfolios
  <img width="1570" height="777" alt="image" src="https://github.com/user-attachments/assets/9fb4f3b6-3b4d-4f9e-b362-1e775a8ade44" />
- Supabase table with saved data
  <img width="1458" height="466" alt="image" src="https://github.com/user-attachments/assets/10d12a59-68a4-440f-8fac-7966fa8628df" />
## Screenshots of the 3 Templates
- Template 1: Simple
<img width="1080" height="842" alt="image" src="https://github.com/user-attachments/assets/10c4d0b1-a291-4a74-8b8a-fd6ac633cae1" />
- Template 2: Modern
<img width="1066" height="858" alt="image" src="https://github.com/user-attachments/assets/81d16152-3e20-4ed0-88de-a8538dd43239" />
- Template 3: Creative 
<img width="1382" height="822" alt="image" src="https://github.com/user-attachments/assets/be098692-308f-4c99-8eff-dca973a9a0e8" />
## How to Test
1. Open the published website URL.
2. Click **Create Portfolio** and fill in the form.
3. Click **Save and Choose Template**. The data is saved to Supabase.
4. Choose a template to generate the portfolio.
5. Use **Change Template** to try the other two designs.
6. Go to **Manage** to view, edit, or delete a portfolio.
7. Refresh the page to confirm the saved data remains available.
## Run Locally
1. Download or clone this repository.
2. Open `js/supabase.js` and set your own Supabase project URL and publishable key.
3. Create the `portfolios` table in Supabase using the structure above.
4. Open the folder in VS Code and run `index.html` using the Live Server extension.


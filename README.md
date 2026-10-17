# PortMaker
- **Group 2**
- *BARCENAS, NIEL JHON N.*
- *CEBUCO, ZEDRYCK E.*
- *HERBITO, JAKE M.*
- *LOPECILLO, VINCENT P.*
- *MANTAL, JAN PAUL A.*
- *PEDRANO, MELVA MAE C.*
- *SO, KEVIN N.*


## Published Website
**URL:** https://friendly-paletas-9daa62.netlify.app/

## Project Description
PortMaker is a portfolio maker. Users enter their personal information, education, skills, projects, work experience and links, save everything to an online database, choose one of three portfolio templates, and generate a portfolio page. Saved portfolios can be viewed, edited and deleted from the Manage page.

## Features
- Create a portfolio with a profile picture, contact details, about me, education, skills, projects, work experience and social/website links
- Data is saved to an online database and stays available after refreshing
- Choose from 3 templates with different designs: Simple, Modern and Creative
- Preview and generate the portfolio from the saved data
- Manage page to view, edit and delete portfolios
- Responsive layout for desktop and mobile

## Technologies Used
- HTML, CSS and JavaScript
- Supabase
- Google Fonts (Fraunces, Manrope, Bricolage Grotesque, Space Mono)

## Database Platform
- **Database:** Supabase
- **Database Project:** portfolios

## Hosting / Deployment Platform
- **Hosting:** Netlify

## Database Structure
Table: `portfolios`

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
| template | text | Selected template: simple, modern or creative |

## System Flow
Home → Create Portfolio → Enter Information → Save to Online Database → Select 1 of 3 Templates → Preview / Generate Portfolio → Manage (Edit / Delete)

## Project Structure
```
portfolia/
├── index.html
├── create.html
├── templates.html
├── preview.html
├── manage.html
├── css/
│   └── style.css
├── js/
│   ├── supabase.js
│   ├── create.js
│   ├── templates.js
│   ├── preview.js
│   └── manage.js
└── assets/
    └── images/
```

## Screenshots of the System

**Home page**
![Home page](assets/images/home.png)

**Create portfolio (information form)**
![Create portfolio](assets/images/create.png)

**Template selection**
![Template selection](assets/images/templates.png)

**Manage portfolios**
![Manage portfolios](assets/images/manage.png)

**Supabase table with saved data**
![Supabase table](assets/images/database.png)

## Screenshots of the 3 Templates
**Template 1: Simple**
![Simple template](assets/images/template-simple.png)

**Template 2: Modern**
![Modern template](assets/images/template-modern.png)

**Template 3: Creative**
![Creative template](assets/images/template-creative.png)

## How to Test
1. Open the published website URL.
2. Click **Create portfolio** and fill in the form.
3. Click **Save and choose template**. The data is saved to Supabase.
4. Choose a template to generate the portfolio.
5. Use **Change template** to try the other two designs.
6. Go to **Manage** to view, edit or delete a portfolio.
7. Refresh the page to confirm the saved data remains available.

## Run Locally
1. Download or clone this repository.
2. Open `js/supabase.js` and set your own Supabase project URL and publishable key.
3. Create the `portfolios` table in Supabase using the structure above.
4. Open the folder in VS Code and run `index.html` with the Live Server extension.

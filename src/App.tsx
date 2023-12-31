<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/vite.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Animesh Mahat - Portfolio</title>
    
    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">

    <!-- Custom CSS for additional styling -->
    <style>
        body {
            background-color: #f8f9fa;
            color: #343a40;
        }

        header {
            text-align: center;
            animation: fadeIn 1.5s ease-in-out;
        }

        @keyframes fadeIn {
            0% {
                opacity: 0;
                transform: translateY(-20px);
            }
            100% {
                opacity: 1;
                transform: translateY(0);
            }
        }

        section {
            margin-top: 30px;
            animation: fadeInUp 1.5s ease-in-out;
        }

        @keyframes fadeInUp {
            0% {
                opacity: 0;
                transform: translateY(20px);
            }
            100% {
                opacity: 1;
                transform: translateY(0);
            }
        }

        .project-card {
            background-color: #ffffff;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
            transition: transform 0.3s ease-in-out;
        }

        .project-card:hover {
            transform: scale(1.05);
        }
    </style>
    
    <link rel="stylesheet" href="/assets/index-d526a0c5.css" />
</head>
<body>

    <div class="container mt-5">
        <header>
            <h1 style="color: #007bff;">Animesh Mahat</h1>
            <p style="color: #6c757d;">Web Developer</p>
        </header>

        <section class="mt-4">
            <h2 style="color: #28a745;">About Me</h2>
            <p>
                Welcome to my portfolio! I am a passionate web developer with expertise in building modern and responsive web applications.
            </p>
        </section>

        <section class="mt-4">
            <h2 style="color: #dc3545;">Projects</h2>
            <!-- Add your projects here using Bootstrap cards or other components -->
            <div class="card project-card">
                <div class="card-body">
                    <h5 class="card-title">Project 1</h5>
                    <p class="card-text">Description of Project 1.</p>
                </div>
            </div>

            <div class="card mt-3 project-card">
                <div class="card-body">
                    <h5 class="card-title">Project 2</h5>
                    <p class="card-text">Description of Project 2.</p>
                </div>
            </div>
            <!-- Add more projects as needed -->
        </section>

        <section class="mt-4">
            <h2 style="color: #007bff;">Contact</h2>
            <p>Email: <a href="mailto:your.email@example.com" style="color: #007bff;">your.email@example.com</a></p>
            <p>LinkedIn: <a href="https://www.linkedin.com/in/yourlinkedinprofile" target="_blank" style="color: #007bff;">Your LinkedIn Profile</a></p>
            <!-- Add other contact information as needed -->
        </section>
    </div>

    <!-- Bootstrap JS and Popper.js -->
    <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.12.9/dist/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>

    <!-- Your Vite and React scripts -->
    <script type="module" crossorigin src="/assets/index-1ce67b45.js"></script>
</body>
</html>

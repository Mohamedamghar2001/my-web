function getE(id, text) {
  const title = document.getElementById(id);
  title.textContent = text
}

function getEByClass(className, text) {
  const elements = document.getElementsByClassName(className);


  console.log("el: ", elements)
  for (var i = 0; i < elements.length; i++) {
    elements[i].textContent = text
  }
}


getE("title", "Mark Sinakaev - official site")

// Menu sections
getE("menu_about_me", "about me")
getE("menu_my_experience", "my experience")
getE("menu_my_skills", "my skills")
getE("menu_my_works", "my works")
getE("menu_contacts", "contacts")

// Promo
getE("promo_title", "My name is")
getE("promo_title_name", "Mark Sinakaev")
getE("promo_portfolio", "Portfolio")
getE("promo_about_me", "About me")

// About
getE("about_about_me", "About me")
getE("about_about_name", "My name is Mark")
getE("about_text",
  "I have been teaching and programming since 2014. I started my way as a developer with game programming in Java, then switched to Java Spring backend, modeled business processes using Camunda, while working on applications I mastered React / TS. For me, programming is a rewarding skill and an exciting experience.")
getE("about_text_frontend",
  "Development of an enterprise application from scratch for a loan pipeline using the React + Typescript library. Integration of financial and analytical tools for business. Setting up the frontend infrastructure.")
getE("about_text_backend",
  "Practice in writing scripts, SQL queries, business logic and controllers in enterprise applications. Working with the Camunda business process modeling system: integration via react api or inMemory, writing delegates and events.")
getE("about_text_android",
  "Creation of games on the Android platform as pet projects. Writing your own game engine. Using patterns: strategy, factory method, facade, adapter and observer. Working with threads, setting up physical logic and drawing an interface.")
getE("about_patterns_algorithms", "Patterns and algorithms")
getE("about_text_patterns",
  "Working with algorithms and data structures. Own implementation: stack, queue, linked lists, sports programming trees. Also optimization of sorts, such as: insertion sort, selection sort, merge sort, heap sort, quick sort algorithm.")

//Resume
getEByClass("resume_subtitle_overview", "Overview:")
getEByClass("resume_subtitle_tasks", "Tasks:")
getEByClass("resume_subtitle_tasks_back", "Back tasks:")
getEByClass("resume_subtitle_tasks_front", "Front tasks:")
getEByClass("resume_subtitle_technology", "Technologies:")
getE("resume_title", "Experience")
getE("resume_subtitle", "How can I be useful")

getE("resume_title_uni", "Kuban State Technological University, Faculty of Software Engineering")
getE("resume_subtitle_uni", "Student, September 2017 – July 2022")
getE("resume_text_uni", "bachelor's degree in the direction of Software engineer at the Kuban Technological University.")

getE("resume_title_internship", "Проект \"Jedi\"")
getE("resume_subtitle_internship", "Full stack developer-intern, September 2021 – December 2022")
getE("resume_text_internship", "Application development for HR managers")
getE("resume_text_internship_tasks", "Writing SQL scripts, database queries, working with the data model, business logic, modeling business processes, finalizing the application interface.")

getE("resume_title_sphere", "Project \"Sphere\"")
getE("resume_subtitle_sphere", "Project \"Sphere\"")
getE("resume_text_sphere", "Application for interaction and receiving feedback from the audience at conferences.")
getE("resume_text_sphere_tasks", "Webpack configuration, development of common components, styled components.")

getE("resume_title_hurma", "Project \"Hurma\"")
getE("resume_subtitle_hurma", "Frontend junior developer, October 2022 - present")
getE("resume_text_hurma", "Application for evaluating an employee on hard and soft skills")
getE("resume_text_hurma_tasks_back", "Adding tasks to the BPMN scheme, creating delegates, finalizing business logic, creating SQL scripts.")
getE("resume_text_hurma_tasks_front", "Migrations of obsolete libraries, layout of UI components, refactoring of existing code.")

getE("resume_title_mkb", "Project \"Bank conveyor MKB\"")
getE("resume_subtitle_mkb", "Frontend intern developer, May 2022 – October 2022")
getE("resume_text_mkb", "An internal application for the work of MKB bank employees, consisting of a process of 49 tasks.")
getE("resume_text_mkb_tasks_back", "Adding tasks to the BPMN scheme, creating delegates, finalizing business logic, creating SQL scripts.")
getE("resume_text_mkb_tasks_front", "Migrations of obsolete libraries, layout of UI components, refactoring of existing code.")

getE("resume_title_alba", "Project \"Alba\"")
getE("resume_subtitle_alba", "Frontend junior developer, September 2022 - present")
getE("resume_text_alba", "Starter app back + front app for quick deployment.")
getE("resume_text_alba_tasks", "Webpack configuration, development of common components, styled components.")




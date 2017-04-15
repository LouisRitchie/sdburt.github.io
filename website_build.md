# Website with Jekyll, Jade, Gulp, and Sass 

Though I had a blast building this site based on devtips tutorial, I ran into a lot of issues since I am a up and coming developer still in school. Below is a timeline of the issues I ran into, and what I did to overcome the problem.

## April 8th, 2017
This was the day that I started to code the site from the tutorial. I ran into some compile errors with jekyll and gulp. I believed at first it was a versoning problem with jekyll and windows, but after some tinkering, it was a dependancy error with something called pygments and light table. This was solved using gem install and downloading the devkit from the ruby sites.

Along with the compile errors, I had never used ruby before, and the syntax for includes `{% something %}` had me scrambling. I believe this issue for me was because of MScode, and the extensions I had. After disabling them and changing the syntax to `html liquid`, my problems thus far were all fixed.
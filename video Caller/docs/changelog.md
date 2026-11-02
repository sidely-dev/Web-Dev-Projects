2 Nov 2026
Im a bit lost on what do yet or where i was working on last time.
So im going to the inspect console and solve errors from there.

GITHUB COMMANDS:
PUSH WHILE DEBUGGING
git add .
git commit -m "Fix image path in frontend after moving folder structure"
git push origin main


THES 404 ERRORS
Error 1:
GET http://127.0.0.1:5500/frontend/world-wide-signal.png 404 (Not Found)
The Fix:
Change the src path to ../images/png since the image folder is a root folder

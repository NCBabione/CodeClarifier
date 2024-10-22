# Code Clarifier
A Code analysis interface utilizing the ChatGPT API.

## Frontend
- run ``` cd frontend ``` from the source directory.
- run ``` npm install ```
- run ``` npm start ```

## Backend
- run ``` cd backend ``` from the source directory.
- For codespaces run ``` pip install openai django react django-cors-headers python-decouple npm ``` 
- create a ``` .env ``` file and write ``` OPENAI_API_KEY="" ``` with your key
- Or run ``` echo "OPENAI_API_KEY=your_api_key_here" > .env ```
- run ``` python manage.py runserver ```
- send post requests to ``` http://127.0.0.1:8000/parse/ ```

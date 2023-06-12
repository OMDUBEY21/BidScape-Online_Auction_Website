FROM python:3.8.10-slim-buster

WORKDIR /app

COPY requirements.txt requirements.txt
RUN pip install -r requirements.txt

COPY . .

CMD [ "python", "manage.py", "runserver", "0.0.0.0:8000" ]

# ----//docker file connection//---
# Auction:-

# settings.py
# urls.py
# views.py (newly created for dockerfile)

# Note: in settings, urls, views search for # docker requirements. that are requrements commands for dockerfile to run
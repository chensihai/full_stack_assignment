# For more information, please refer to https://aka.ms/vscode-docker-python
FROM python:3.8-slim

EXPOSE 8088

# Keeps Python from generating .pyc files in the container
ENV PYTHONDONTWRITEBYTECODE=1

# Turns off buffering for easier container logging
ENV PYTHONUNBUFFERED=1

RUN /usr/local/bin/python -m pip install --upgrade pip
# Install pip requirements
COPY requirements.txt .
RUN python -m pip install -r requirements.txt

RUN apt-get update
RUN apt-get install xz-utils
RUN apt-get -y install curl

# Download latest nodejs binary
RUN curl https://nodejs.org/dist/v14.15.4/node-v14.15.4-linux-x64.tar.xz -O

# Extract & install
RUN tar -xf node-v14.15.4-linux-x64.tar.xz
RUN ln -s /node-v14.15.4-linux-x64/bin/node /usr/local/bin/node
RUN ln -s /node-v14.15.4-linux-x64/bin/npm /usr/local/bin/npm
RUN ln -s /node-v14.15.4-linux-x64/bin/npx /usr/local/bin/npx

WORKDIR /app
COPY ./app /app

# Creates a non-root user with an explicit UID and adds permission to access the /app folder
# For more info, please refer to https://aka.ms/vscode-docker-python-configure-containers
RUN adduser -u 5678 --disabled-password --gecos "" appuser && chown -R appuser /app
USER appuser

# During debugging, this entry point will be overridden. For more information, please refer to https://aka.ms/vscode-docker-python-debug
# File wsgi.py was not found. Please enter the Python path to wsgi file.
CMD ["gunicorn", "--bind", "0.0.0.0:8088", "app.wsgi"]
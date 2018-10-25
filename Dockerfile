FROM python:2.7
COPY script.sh /docker-entrypoint-initdb.d/
RUN apt-get update \
&& apt-get -y install postgresql postgresql-contrib \
&& mkdir app
WORKDIR app/
RUN chmod 	755 /docker-entrypoint-initdb.d/
CMD ["sh", "/docker-entrypoint-initdb.d/script.sh"]

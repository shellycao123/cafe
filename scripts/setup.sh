#!/bin/bash

read -p 'MySQL Username: ' username
read -sp 'MySQL password(password will not show on the screen): ' password
mysql --user=$username --password=$password < ./scripts/db_setup.sql
#!/bin/bash

read -p 'MySQL Username: ' 
read -sp 'MySQL password(password will not show on the screen): '
mysql --user=$username --password=$password < ./scripts/db_setup.sql

#!/bin/bash
curl "https://tic-tac-toe-api-production.herokuapp.com/sign-in" \
--include \
--request POST \
--header "Conent-Type: application/json" \
--data '{
  "credentials":{
    "email": "'"${EMAIL}"'",
    "password": "'"${PASSWORD}"'"
  }
}'
echo

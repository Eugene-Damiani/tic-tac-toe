curl "https://tic-tac-toe-api-production.herokuapp.com/password-change" \
--include \
--request PATCH \
--header "Authorization: Bearer ${TOKEN}" \
--header "Content-Type: application/json" \
--data '{
  "password":{
  "old": "'"${OLDPW}"'",
  "new": "'"${NEWPW}"'"
  }
}'

echo
